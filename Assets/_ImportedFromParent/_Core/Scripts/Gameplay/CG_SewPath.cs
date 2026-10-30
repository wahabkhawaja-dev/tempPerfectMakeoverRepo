using DG.Tweening;
using UnityEngine;

// A garment fed under a fixed needle along its seams (hold-to-sew - the level calls Advance while the
// machine runs). The route is a polyline in the garment's local space (Points); Sew[i] says whether the
// stretch Points[i] -> Points[i + 1] is sewn or just travelled (needle up, moving on to the next seam).
// The garment is moved so the needle stays on the route, and its dashed seam guide (Guide) is erased
// behind the needle, so the seams look done as they go. At the end of a seam Advance stops (returns
// true); the garment then glides by itself to the next seam's start and waits to be run again.
// With TurnWithSeam the garment is also turned as it goes, like fabric turned on a real machine: the
// seam runs through the needle as close to FeedAngle as it can while the garment stays clear of the
// machine (MaxReachRight); corners are taken slowly, pivoting on the needle.
public class CG_SewPath : MonoBehaviour
{
    [Space()]
    public Transform Garment;
    public Transform Needle;

    public Vector2[] Points;
    public bool[] Sew;

    [Header("----------------- GUIDE ----------------------")]
    [Space()]
    [Tooltip("The dashed seam line on the garment - erased behind the needle.")]
    public SpriteRenderer Guide;

    [Tooltip("Width (world) erased either side of the needle.")]
    public float EraseRadius = 0.07f;

    [Tooltip("The erase mask is this many times smaller than the guide image.")]
    public int MaskDownsample = 4;

    [Header("----------------- SPEED ----------------------")]
    [Space()]
    public float SewSpeed = 1.6f;

    [Tooltip("Speed (world/s) of the needle-up glide to the next seam.")]
    public float TravelSpeed = 2.2f;

    [Tooltip("How long the garment takes to slide in to the first seam.")]
    public float EnterDuration = 0.8f;

    [Header("----------------- TURNING ----------------------")]
    [Space()]
    public bool TurnWithSeam = true;

    [Tooltip("World direction (degrees) the needle runs across the garment: -90 = down the screen, so the fabric feeds up, away from the player.")]
    public float FeedAngle = -90f;

    [Tooltip("Route points either side averaged for the seam's direction - higher turns more smoothly.")]
    public int TurnSmoothing = 10;

    [Tooltip("Fastest the garment turns (degrees/s) - sewing slows down round corners to keep to it.")]
    public float MaxTurnSpeed = 140f;

    [Tooltip("How far right of the needle (world) the garment may reach - the room under the machine's arm before its pillar.")]
    public float MaxReachRight = 1f;

    [Tooltip("How far left of the needle (world) it should reach at most - to stay on screen. Softer than MaxReachRight.")]
    public float MaxReachLeft = 1.75f;

    public bool IsReady { get; private set; }
    public bool IsDone { get; private set; }

    // Sewn length so far / all the sewn length (travel not counted).
    public float Progress
    {
        get { return sewTotal > 0f ? sewnSoFar / sewTotal : 1f; }
    }

    // True while the needle is on a seam (not gliding between seams).
    public bool IsSewing
    {
        get { return IsReady && !IsDone && segment < Sew.Length && Sew[segment]; }
    }

    int segment;
    float along;
    float sewnSoFar;
    float sewTotal;
    float[] angles;

    Texture2D maskTex;
    bool maskDirty;
    Vector2 lastPx;
    bool hasLast;

    // Slides the garment in so the needle is at the start of the route.
    public void Begin()
    {
        if (Points == null || Points.Length < 2)
            return;

        segment = 0;
        along = 0f;
        sewnSoFar = 0f;
        sewTotal = 0f;

        for (int i = 0; i < Points.Length - 1; i++)
            if (Sew[i])
                sewTotal += SegmentLength(i);

        SetupMask();
        ComputeAngles();

        Garment.gameObject.SetActive(true);
        Garment.DOKill();

        float angle = AngleAt(0, 0f);
        Garment.DORotate(new Vector3(0f, 0f, angle), EnterDuration).SetEase(Ease.OutCubic);
        Garment.DOMove(PlacedAt(Points[0], angle), EnterDuration).SetEase(Ease.OutCubic).OnComplete(() => IsReady = true);
    }

    // The garment's rotation at each route point. Each point picks, out of every 5 degrees, the angle that
    // keeps the garment within MaxReachRight of the needle (clear of the machine's pillar) while feeding
    // the seam as close to FeedAngle as it can - so the convex outside of a garment feeds straight, and
    // where the rest of it lies across the seam (inner legs, sleeve gaps) it is turned out of the way.
    // The whole loop is chosen together (cheapest overall, turning costs too), so it turns smoothly.
    void ComputeAngles()
    {
        int n = Points.Length;
        angles = new float[n];

        if (!TurnWithSeam)
        {
            for (int i = 0; i < n; i++)
                angles[i] = Garment.eulerAngles.z;

            return;
        }

        bool closed = (Points[0] - Points[n - 1]).sqrMagnitude < 1e-6f;
        int m = closed ? n - 1 : n;   // distinct points
        int w = Mathf.Max(1, TurnSmoothing);

        // the seam's direction (local, degrees) at each point, smoothed
        var seamDir = new float[n];

        for (int i = 0; i < n; i++)
        {
            Vector2 t = Vector2.zero;

            for (int k = -w; k < w; k++)
            {
                int a = i + k, b = i + k + 1;

                if (closed)
                {
                    a = ((a % m) + m) % m;
                    b = ((b % m) + m) % m;
                }
                else
                {
                    a = Mathf.Clamp(a, 0, n - 1);
                    b = Mathf.Clamp(b, 0, n - 1);
                }

                t += Points[b] - Points[a];
            }

            seamDir[i] = Mathf.Atan2(t.y, t.x) * Mathf.Rad2Deg;
        }

        // the garment's outline, a little bigger than the seam, in world-sized local units
        Vector3 sc = Garment.lossyScale;
        var hull = new System.Collections.Generic.List<Vector2>();

        for (int i = 0; i < m; i += 4)
            hull.Add(new Vector2(Points[i].x * Mathf.Abs(sc.x), Points[i].y * Mathf.Abs(sc.y)));

        const int K = 72;
        const float stepDeg = 360f / K;

        var cost = new float[n, K];
        var from = new int[n, K];

        for (int i = 0; i < n; i++)
        {
            Vector2 p = new Vector2(Points[i].x * Mathf.Abs(sc.x), Points[i].y * Mathf.Abs(sc.y));

            for (int k = 0; k < K; k++)
            {
                float a = k * stepDeg;
                float rad = a * Mathf.Deg2Rad, cos = Mathf.Cos(rad), sin = Mathf.Sin(rad);

                // how far right / left of the needle the garment reaches at this angle
                float right = 0f, leftReach = 0f;

                foreach (var q in hull)
                {
                    Vector2 d = q - p;
                    float x = d.x * cos - d.y * sin;

                    right = Mathf.Max(right, x);
                    leftReach = Mathf.Max(leftReach, -x);
                }

                float over = Mathf.Max(0f, right + .08f - MaxReachRight);
                float offScreen = Mathf.Max(0f, leftReach - MaxReachLeft);

                // how far the seam runs from the feed direction (backwards costs most)
                float off = Mathf.DeltaAngle(a + seamDir[i], FeedAngle) * Mathf.Deg2Rad;

                float c = 300f * over + 30f * offScreen + 1.5f * (1f - Mathf.Cos(off));

                if (i == 0)
                {
                    cost[i, k] = c;
                    continue;
                }

                float best = float.MaxValue;
                int bestJ = 0;

                // at most 15 degrees from one point to the next, so big turns start early and swing the
                // garment round the side away from the machine instead of flipping across it
                for (int dj = -3; dj <= 3; dj++)
                {
                    int j2 = (k + dj + K) % K;
                    float v = cost[i - 1, j2] + .12f * Mathf.Abs(dj) * stepDeg;

                    if (v < best) { best = v; bestJ = j2; }
                }

                cost[i, k] = c + best;
                from[i, k] = bestJ;
            }
        }

        // cheapest way round, traced back
        int kk = 0;

        for (int k = 1; k < K; k++)
            if (cost[n - 1, k] < cost[n - 1, kk])
                kk = k;

        var chosen = new float[n];

        for (int i = n - 1; i >= 0; i--)
        {
            chosen[i] = kk * stepDeg;

            if (i > 0)
                kk = from[i, kk];
        }

        // continuous (no full spins); between points the angle is blended (AngleAt), so the 5 degree steps
        // don't show
        for (int i = 0; i < n; i++)
            angles[i] = i == 0 ? chosen[0] : angles[i - 1] + Mathf.DeltaAngle(angles[i - 1], chosen[i]);
    }

    float AngleAt(int seg, float t)
    {
        if (angles == null || angles.Length == 0)
            return Garment.eulerAngles.z;

        int a = Mathf.Clamp(seg, 0, angles.Length - 1), b = Mathf.Clamp(seg + 1, 0, angles.Length - 1);

        return Mathf.Lerp(angles[a], angles[b], t);
    }

    // Runs the machine for dt seconds along the current seam. Returns true when that seam has just been
    // finished (the garment then glides on to the next one by itself, or the route is done).
    public bool Advance(float dt)
    {
        if (!IsSewing)
            return false;

        float left = dt;

        // (time left under a microsecond is dropped - chasing it can round to steps of 0 forever)
        for (int guard = 0; guard < 2000 && left > 1e-6f && segment < Points.Length - 1 && Sew[segment]; guard++)
        {
            float len = SegmentLength(segment);

            // slower round corners, so the garment never turns faster than MaxTurnSpeed
            float turn = Mathf.Abs(AngleAt(segment, 1f) - AngleAt(segment, 0f));
            float speed = turn > 0.001f ? Mathf.Min(SewSpeed, MaxTurnSpeed * len / turn) : SewSpeed;
            speed = Mathf.Max(speed, SewSpeed * .15f);

            float step = Mathf.Min(left * speed, len - along);

            if (step <= 0f)
            {
                segment++;
                along = 0f;
                continue;
            }

            along += step;
            left -= step / speed;
            sewnSoFar += step;

            float t01 = len > 0f ? along / len : 1f;
            Vector2 p = Vector2.Lerp(Points[segment], Points[segment + 1], t01);

            EraseTo(p);

            float angle = AngleAt(segment, t01);
            Garment.rotation = Quaternion.Euler(0f, 0f, angle);
            Garment.position = PlacedAt(p, angle);

            if (along >= len - 0.00001f)
            {
                segment++;
                along = 0f;
            }
        }

        if (maskDirty)
        {
            maskTex.Apply(false);
            maskDirty = false;
        }

        if (segment < Points.Length - 1 && Sew[segment])
            return false;

        // End of a seam.
        hasLast = false;

        if (segment >= Points.Length - 1)
        {
            IsDone = true;
            return true;
        }

        GlideToNextSeam();

        return true;
    }

    // Needle up: the garment eases over to the start of the next seam.
    void GlideToNextSeam()
    {
        int next = segment;
        float dist = 0f;

        while (next < Points.Length - 1 && !Sew[next])
        {
            dist += SegmentLength(next);
            next++;
        }

        IsReady = false;

        float angle = AngleAt(next, 0f);
        float duration = Mathf.Max(.35f, dist / TravelSpeed);

        Garment.DOKill();
        Garment.DORotate(new Vector3(0f, 0f, angle), duration).SetEase(Ease.InOutSine);
        Garment.DOMove(PlacedAt(Points[next], angle), duration).SetEase(Ease.InOutSine).OnComplete(() =>
        {
            segment = next;
            along = 0f;

            IsReady = true;

            if (segment >= Points.Length - 1)
                IsDone = true;
        });
    }

    float SegmentLength(int i)
    {
        return Vector3.Distance(Garment.TransformPoint(Points[i]), Garment.TransformPoint(Points[i + 1]));
    }

    // Garment position that puts its local point p under the needle, with the garment at `angle`.
    Vector3 PlacedAt(Vector2 p, float angle)
    {
        Quaternion was = Garment.rotation;
        Garment.rotation = Quaternion.Euler(0f, 0f, angle);

        Vector3 offset = Garment.TransformPoint(p) - Garment.position;

        Garment.rotation = was;

        Vector3 target = Needle.position - offset;
        target.z = Garment.position.z;

        return target;
    }

    // A mask the size of the guide image (downsampled), painted where the needle has been - the guide only
    // shows outside it.
    void SetupMask()
    {
        if (Guide == null || maskTex != null)
            return;

        Sprite gs = Guide.sprite;
        int ds = Mathf.Max(1, MaskDownsample);
        int w = Mathf.CeilToInt(gs.rect.width / ds), h = Mathf.CeilToInt(gs.rect.height / ds);

        maskTex = new Texture2D(w, h, TextureFormat.RGBA32, false);
        maskTex.wrapMode = TextureWrapMode.Clamp;
        maskTex.SetPixels32(new Color32[w * h]);
        maskTex.Apply(false);

        Vector2 pivot = new Vector2(gs.pivot.x / gs.rect.width, gs.pivot.y / gs.rect.height);
        Sprite maskSprite = Sprite.Create(maskTex, new Rect(0, 0, w, h), pivot, gs.pixelsPerUnit / ds);

        var go = new GameObject("Sewn Mask");
        go.transform.SetParent(Guide.transform, false);

        var mask = go.AddComponent<SpriteMask>();
        mask.sprite = maskSprite;
        mask.alphaCutoff = 0.5f;
        mask.isCustomRangeActive = true;
        mask.backSortingOrder = Guide.sortingOrder - 1;
        mask.frontSortingOrder = Guide.sortingOrder;

        Guide.maskInteraction = SpriteMaskInteraction.VisibleOutsideMask;
    }

    // Paints the mask from the last erased point to garment-local point p.
    void EraseTo(Vector2 p)
    {
        if (maskTex == null)
            return;

        Sprite gs = Guide.sprite;
        float ds = Mathf.Max(1, MaskDownsample);

        Vector2 local = Guide.transform.InverseTransformPoint(Garment.TransformPoint(p));
        Vector2 px = (local * gs.pixelsPerUnit + gs.pivot) / ds;

        float r = EraseRadius / Mathf.Abs(Guide.transform.lossyScale.x) * gs.pixelsPerUnit / ds;

        Vector2 from = hasLast ? lastPx : px;
        float dist = Vector2.Distance(from, px);
        int steps = Mathf.Max(1, Mathf.CeilToInt(dist / Mathf.Max(r * .5f, .5f)));

        for (int i = 1; i <= steps; i++)
            Stamp(Vector2.Lerp(from, px, (float)i / steps), r);

        lastPx = px;
        hasLast = true;
        maskDirty = true;
    }

    void Stamp(Vector2 c, float r)
    {
        int w = maskTex.width, h = maskTex.height;
        int x0 = Mathf.Max(0, Mathf.FloorToInt(c.x - r)), x1 = Mathf.Min(w - 1, Mathf.CeilToInt(c.x + r));
        int y0 = Mathf.Max(0, Mathf.FloorToInt(c.y - r)), y1 = Mathf.Min(h - 1, Mathf.CeilToInt(c.y + r));

        var white = new Color32(255, 255, 255, 255);

        for (int y = y0; y <= y1; y++)
            for (int x = x0; x <= x1; x++)
                if ((new Vector2(x + .5f, y + .5f) - c).sqrMagnitude <= r * r)
                    maskTex.SetPixel(x, y, white);
    }

    void OnDestroy()
    {
        if (maskTex != null)
            Destroy(maskTex);
    }

    void OnDrawGizmosSelected()
    {
        if (Garment == null || Points == null || Sew == null)
            return;

        for (int i = 0; i < Points.Length - 1 && i < Sew.Length; i++)
        {
            Gizmos.color = Sew[i] ? Color.green : Color.gray;
            Gizmos.DrawLine(Garment.TransformPoint(Points[i]), Garment.TransformPoint(Points[i + 1]));
        }
    }
}
