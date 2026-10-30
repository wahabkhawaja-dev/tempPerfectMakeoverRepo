// [Luna] Adapted for playables by Cross-Project Prefab Importer.
using DG.Tweening;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

// A sheet of cloth the dragged scissors break up at runtime: when cutting starts the sprite is split into
// fragments (a jittered grid of squares, triangles and fans, each its own mesh with UVs into the same
// texture, so the sheet looks whole), and every fragment the scissors' tip touches comes away at once -
// flung off the stroke with a spin and tumbling down out of view, scraps bursting off it. A thin white slash
// trails the tip, like a hair-cutting swipe. Fragments lying inside the garment's chalked outline (Keep) are
// not cut. When most of the cloth outside it is gone, what is left fades away to show the garment beneath;
// OnComplete fires once the scissors are let go. The scissors turn to face the way they are dragged (also
// after the cut, until they are let go).
public class CG_ClothSlicer : MonoBehaviour
{
    static readonly int ColorPropID = Shader.PropertyToID("_Color");

    [Space()]
    [Tooltip("The sheet - its sprite is what gets cut (its own renderer is switched off once cutting starts).")]
    public SpriteRenderer Sheet;

    public BasicDrag Scissors;
    public Transform Tip;

    [Tooltip("Scraps and snipping.")]
    public CG_ScissorCutFX FX;

    [Tooltip("The chalk that marked the garment - cloth inside its path (the garment's outline) is not cut.")]
    public CG_ChalkTrace Keep;
    [Tooltip("Optional drag-driven slash sequence, sharing the chalk's outline sections.")]
    public CG_ChalkTrace SlashDriver;

    [Space()]
    [Tooltip("Done once this much of the cloth outside the outline (by area) has come away - what is left then fades.")]
    [Range(0.3f, 0.95f)]
    public float CompleteAt = 0.7f;

    [Header("----------------- FRAGMENTS ----------------------")]
    [Space()]
    [Tooltip("Fragment grid across the sheet's width (rows follow from its shape).")]
    public int Columns = 8;

    [Tooltip("How far (share of a cell) the grid's inner corners are moved about, so no two pieces are alike.")]
    [Range(0f, 0.45f)]
    public float Jitter = 0.3f;

    [Tooltip("Share of cells left square - the rest split into two triangles, now and then into a fan of four.")]
    [Range(0f, 1f)]
    public float SquareChance = 0.25f;

    [Range(0f, 1f)]
    public float FanChance = 0.15f;

    [Tooltip("World distance from the tip's path within which a fragment comes away.")]
    public float CutRadius = 0.12f;

    public int ScrapsPerPiece = 2;
    public int FinalScraps = 30;

    [Header("----------------- CUT SOUND / VIBRATION ----------------------")]
    [Space()]
    [Tooltip("Plays its clip once for every piece that comes away (none = silent).")]
    public AudioSource CutSource;

    [Tooltip("A medium impact for every piece that comes away.")]
    public bool CutVibrate = true;

    [Tooltip("At most this many cut sounds playing at once, and this many impacts in VibrationWindow - the rest of a big swipe's pieces go quietly.")]
    public int MaxAtOnce = 6;

    public float VibrationWindow = 0.3f;

    [Header("----------------- CUT PIECES ----------------------")]
    [Space()]
    [Tooltip("Speed (world/s) a cut-off piece is flung off the stroke at - random between x and y.")]
    public Vector2 FlingSpeed = new Vector2(1.2f, 2.6f);

    [Tooltip("Extra upward speed at the start, so it pops up a little before tumbling down.")]
    public float FlingUp = 1.2f;

    public float Gravity = 14f;

    [Tooltip("Spin (degrees/s) - random between x and y, either way.")]
    public Vector2 Spin = new Vector2(180f, 540f);

    public float FallDuration = 1.2f;
    public float FadeDuration = 0.35f;

    [Tooltip("Seconds what is left of the cloth takes to fade away at the end.")]
    public float RevealDuration = 0.6f;

    [Tooltip("Sorting orders above the sheet a flying piece is drawn at (over the outline).")]
    public int PieceSortingOffset = 5;

    [Header("----------------- SCISSORS ----------------------")]
    [Space()]
    [Tooltip("Turn the scissors to face the way they are dragged.")]
    public bool FaceDrag = true;

    [Tooltip("Direction (degrees, local) the blades point in when not turned - 90 = up.")]
    public float ForwardAngle = 90f;

    [Tooltip("How quickly they turn.")]
    public float TurnSharpness = 14f;

    [Tooltip("World distance they must be dragged before they turn to the new way - a tap doesn't turn them.")]
    public float TurnDistance = 0.15f;

    [Header("----------------- SLASH TRAIL ----------------------")]
    [Space()]
    public bool ShowSlash = true;
    public float SlashWidth = 0.05f;

    [Tooltip("Seconds a point of the slash lasts.")]
    public float SlashLife = 0.2f;

    public Color SlashColor = Color.white;
    public int SlashSortingOffset = 6;

    public bool progressControl = true;

    [Space()]
    public UnityEvent OnComplete = new UnityEvent();

    public bool IsDone { get; private set; }

    public float Progress
    {
        get { return totalArea > 0f ? removedArea / totalArea : 0f; }
    }

    class Fragment
    {
        public Vector2[] Poly;        // sheet local
        public Vector2 Centre;
        public float Area;
        public MeshFilter MF;
        public MeshRenderer MR;
        public bool Gone;
        public bool Kept;            // inside the garment's outline - never cut
    }

    readonly List<Fragment> fragments = new List<Fragment>();
    Vector2[] keepPoly;              // the garment's outline, sheet local
    Transform cloth;

    Vector2 quadMin, quadMax, uvMin, uvMax;
    Material mat;
    MaterialPropertyBlock mpb;
    float totalArea, removedArea;
    bool active;
    bool slashDriven;
    bool slashSequenceEnded;

    bool wasDragging;
    Vector3 lastTip;

    Vector3 faceFrom;
    float faceTarget;
    bool hasFaceTarget;

    readonly List<float> soundsUntil = new List<float>(8);
    readonly List<float> impactsUntil = new List<float>(8);

    bool waitingRelease;     // cut - OnComplete waits for the scissors to be let go
    bool revealed;           // the rest of the cloth has faded away

    LineRenderer slash;
    Material slashMat;
    bool slashDragging;
    readonly List<Vector3> slashPoints = new List<Vector3>(64);
    readonly List<float> slashTimes = new List<float>(64);

    // Swaps the sheet for its fragments and starts listening to the scissors.
    public void Begin()
    {
        slashDriven = false;
        slashSequenceEnded = false;
        if (Sheet == null || Sheet.sprite == null)
            return;

        Sprite sprite = Sheet.sprite;
        Bounds b = sprite.bounds;
        Texture2D tex = sprite.texture;
        Rect rect = sprite.textureRect;

        quadMin = b.min;
        quadMax = b.max;
        uvMin = new Vector2(rect.xMin / tex.width, rect.yMin / tex.height);
        uvMax = new Vector2(rect.xMax / tex.width, rect.yMax / tex.height);

        if (mat == null)
        {
            mat = new Material(Shader.Find("Sprites/Default"));
            mat.mainTexture = tex;
        }

        if (mpb == null)
            mpb = new MaterialPropertyBlock();

        keepPoly = KeepOutline();

        BuildFragments();

        Sheet.enabled = false;

        IsDone = false;
        active = true;
        waitingRelease = false;
        wasDragging = false;
        lastTip = TipPos();
    }

    public void BeginSlashes()
    {
        Begin();
        slashDriven = true;
    }

    public void CutSlash(Vector3 from, Vector3 to)
    {
        if (slashDriven && active && !IsDone) CutAlong(from, to);
    }

    public void CompleteSlashes()
    {
        if (!slashDriven || slashSequenceEnded) return;
        slashSequenceEnded = true;
        if (!IsDone) Finish();
    }

    // A grid whose inner corners are jittered (shared by neighbouring cells, so the pieces tile with no gaps);
    // each cell is a square, two triangles or a fan of four round a jittered middle.
    void BuildFragments()
    {
        ClearFragments();

        if (cloth == null)
        {
            cloth = new GameObject("Cloth").transform;
            cloth.SetParent(Sheet.transform, false);
        }

        cloth.gameObject.SetActive(true);

        Vector2 size = quadMax - quadMin;
        int cols = Mathf.Max(1, Columns);
        int rows = Mathf.Max(1, Mathf.RoundToInt(cols * size.y / size.x));
        Vector2 cell = new Vector2(size.x / cols, size.y / rows);

        var grid = new Vector2[cols + 1, rows + 1];

        for (int x = 0; x <= cols; x++)
            for (int y = 0; y <= rows; y++)
            {
                Vector2 p = quadMin + new Vector2(x * cell.x, y * cell.y);

                // the sheet's edges stay straight
                if (x > 0 && x < cols) p.x += Random.Range(-Jitter, Jitter) * cell.x;
                if (y > 0 && y < rows) p.y += Random.Range(-Jitter, Jitter) * cell.y;

                grid[x, y] = p;
            }

        totalArea = 0f;
        removedArea = 0f;

        for (int x = 0; x < cols; x++)
            for (int y = 0; y < rows; y++)
            {
                Vector2 a = grid[x, y], bq = grid[x + 1, y], c = grid[x + 1, y + 1], d = grid[x, y + 1];
                float r = Random.value;

                if (r < SquareChance)
                {
                    AddFragment(a, bq, c, d);
                }
                else if (r < SquareChance + FanChance)
                {
                    Vector2 m = (a + bq + c + d) * .25f + Vector2.Scale(Random.insideUnitCircle * Jitter * .5f, cell);

                    AddFragment(a, bq, m);
                    AddFragment(bq, c, m);
                    AddFragment(c, d, m);
                    AddFragment(d, a, m);
                }
                else if (Random.value < .5f)
                {
                    AddFragment(a, bq, c);
                    AddFragment(a, c, d);
                }
                else
                {
                    AddFragment(a, bq, d);
                    AddFragment(bq, c, d);
                }
            }
    }

    void AddFragment(params Vector2[] poly)
    {
        var go = new GameObject("Piece");
        go.transform.SetParent(cloth, false);

        var f = new Fragment
        {
            Poly = poly,
            Centre = Centroid(poly),
            Area = Area(poly),
            MF = go.AddComponent<MeshFilter>(),
            MR = go.AddComponent<MeshRenderer>()
        };

        f.Kept = keepPoly != null && InsidePolygon(keepPoly, f.Centre);

        f.MR.sharedMaterial = mat;
        f.MR.sortingLayerID = Sheet.sortingLayerID;
        f.MR.sortingOrder = Sheet.sortingOrder;
        SetColor(f.MR, Sheet.color);
        Rebuild(f.MF, poly);

        if (!f.Kept)
            totalArea += f.Area;

        fragments.Add(f);
    }

    void ClearFragments()
    {
        foreach (var f in fragments)
            if (f.MF != null)
            {
                if (f.MF.sharedMesh != null)
                    Destroy(f.MF.sharedMesh);

                Destroy(f.MF.gameObject);
            }

        fragments.Clear();
    }

    Vector3 TipPos()
    {
        return Tip != null ? Tip.position : (Scissors != null ? Scissors.transform.position : transform.position);
    }

    // After the drag has moved the scissors this frame (a pick-up snaps them to the finger in its Update, and
    // their bounds are the drag's own clamp - CG_BD_Clamp): the slash and the cut follow where the tip really is.
    void LateUpdate()
    {
        if (slashDriven)
        {
            if (waitingRelease) WaitForRelease();
            return;
        }
        UpdateSlash();

        if (waitingRelease)
        {
            WaitForRelease();
            return;
        }

        if (!active || IsDone)
            return;

        Vector3 tip = TipPos();
        bool dragging = Scissors == null || Scissors.isDragging;

        if (!dragging)
        {
            wasDragging = false;
            lastTip = tip;
            return;
        }

        StartFacing();
        Face();

        // a stroke cuts from where it is first held, then along the tip's path frame to frame
        Vector3 from = wasDragging ? lastTip : tip;

        wasDragging = true;
        lastTip = tip;

        CutAlong(from, tip);
    }

    // Every fragment within CutRadius of the tip's path from a to b (world) comes away.
    void CutAlong(Vector3 aWorld, Vector3 bWorld)
    {
        Vector2 a = LocalOf(aWorld), b = LocalOf(bWorld);
        float radius = CutRadius / Mathf.Max(Mathf.Abs(Sheet.transform.lossyScale.x), 1e-4f);
        Vector2 motion = (Vector2)(bWorld - aWorld);
        int cut = 0;

        foreach (var f in fragments)
        {
            if (f.Gone || f.Kept || !Touches(f, a, b, radius))
                continue;

            cut++;
            Detach(f, OffStroke(f, a, b, motion));
            PieceCutFeedback();
        }

        if (cut == 0)
            return;

        if (progressControl && !slashDriven)
            UI_Manager.instance.SetProgressBar(Mathf.Clamp01(Progress / CompleteAt));

        if (Progress >= CompleteAt && !slashDriven)
            Finish();
    }

    bool Touches(Fragment f, Vector2 a, Vector2 b, float radius)
    {
        if ((DistanceToSegment(f.Centre, a, b)) <= radius)
            return true;

        // the path crossing the piece, or its end inside it
        if (Contains(f.Poly, b))
            return true;

        int n = f.Poly.Length;

        for (int i = 0; i < n; i++)
        {
            Vector2 p = f.Poly[i], q = f.Poly[(i + 1) % n];

            if (SegmentsCross(a, b, p, q) || DistanceToSegment(p, a, b) <= radius * .5f)
                return true;
        }

        return false;
    }

    // World direction to fling a piece: to the side of the stroke it lies on, a little along the stroke.
    Vector2 OffStroke(Fragment f, Vector2 a, Vector2 b, Vector2 motionWorld)
    {
        Vector2 along = b - a;

        if (along.sqrMagnitude < 1e-8f)
            return Random.insideUnitCircle.normalized;

        Vector2 side = new Vector2(-along.y, along.x);

        if (Vector2.Dot(f.Centre - a, side) < 0f)
            side = -side;

        Vector2 sideWorld = Sheet.transform.TransformDirection(side).normalized;

        return (sideWorld + motionWorld.normalized * .4f).normalized;
    }

    Vector2 LocalOf(Vector3 world)
    {
        return Sheet.transform.InverseTransformPoint(world);
    }

    // What is left of the cloth fades away, showing the garment beneath; OnComplete waits for the release.
    void Finish()
    {
        IsDone = true;
        active = false;

        if (FX != null)
            FX.Burst(FinalScraps);

        if (progressControl)
            UI_Manager.instance.SetProgressBar(1f);

        Color c = Sheet.color;
        float alpha = c.a;
        var left = fragments.FindAll(f => !f.Gone);

        DOTween.To(() => alpha, x =>
            {
                alpha = x;
                c.a = x;

                foreach (var f in left)
                    if (f.MR != null)
                        SetColor(f.MR, c);
            }, 0f, RevealDuration)
            .SetEase(Ease.InOutSine)
            .SetTarget(this)
            .OnComplete(() =>
            {
                if (cloth != null)
                    cloth.gameObject.SetActive(false);

                revealed = true;
            });

        // the scissors stay in hand (still turning as they are dragged) until they are let go
        revealed = false;
        waitingRelease = true;
    }

    // Cut: the scissors keep facing the way they are dragged; once they are let go (and the cloth has faded),
    // OnComplete.
    void WaitForRelease()
    {
        if (slashDriven && !slashSequenceEnded) return;
        bool dragging = Scissors != null && Scissors.isDragging;

        if (dragging)
        {
            StartFacing();
            Face();
            wasDragging = true;
            return;
        }

        wasDragging = false;

        if (!revealed)
            return;

        waitingRelease = false;
        OnComplete?.Invoke();
    }

    // At the start of a drag: the way the scissors face is taken afresh from here.
    void StartFacing()
    {
        if (wasDragging || Scissors == null)
            return;

        faceFrom = Scissors.transform.position;
        hasFaceTarget = false;
    }

    // A piece came away: its sound and an impact, each capped at MaxAtOnce (sounds while they play, impacts
    // within VibrationWindow).
    void PieceCutFeedback()
    {
        float now = Time.unscaledTime;

        if (CutSource != null && CutSource.clip != null && Live(soundsUntil, now) < MaxAtOnce)
        {
            CutSource.PlayOneShot(CutSource.clip);
            soundsUntil.Add(now + CutSource.clip.length / Mathf.Max(Mathf.Abs(CutSource.pitch), .01f));
        }

        if (CutVibrate && CG_VibrationManager.instance != null && Live(impactsUntil, now) < MaxAtOnce)
        {
            { /* [Luna] stripped: CG_VibrationManager.instance.Impact(MoreMountains.NiceVibrations.HapticTypes.MediumImpact); */ }
            impactsUntil.Add(now + VibrationWindow);
        }
    }

    // how many of these are still going (and forgets the rest)
    static int Live(List<float> until, float now)
    {
        until.RemoveAll(t => t <= now);
        return until.Count;
    }

    // Turns the scissors (smoothly) so the blades lead the way they are dragged: the way is taken from the
    // scissors' own position (not the tip, which swings as they turn) once they have been dragged TurnDistance
    // from where it was last taken - so a tap or a small wobble doesn't turn them.
    void Face()
    {
        if (!FaceDrag || Scissors == null)
            return;

        Transform t = Scissors.transform;
        Vector3 moved = t.position - faceFrom;
        moved.z = 0f;

        if (moved.magnitude >= TurnDistance)
        {
            faceTarget = Mathf.Atan2(moved.y, moved.x) * Mathf.Rad2Deg - ForwardAngle;

            if (t.parent != null)
                faceTarget -= t.parent.eulerAngles.z;

            hasFaceTarget = true;
            faceFrom = t.position;
        }

        if (!hasFaceTarget)
            return;

        float z = Mathf.LerpAngle(t.localEulerAngles.z, faceTarget, 1f - Mathf.Exp(-TurnSharpness * Time.deltaTime));
        t.localRotation = Quaternion.Euler(0f, 0f, z);
    }

    // Keep's path (the garment's outline) in the sheet's local space.
    Vector2[] KeepOutline()
    {
        if (Keep == null || Keep.Points == null || Keep.Points.Length < 3 || Keep.PathSpace == null)
            return null;

        var poly = new Vector2[Keep.Points.Length];

        for (int i = 0; i < poly.Length; i++)
            poly[i] = LocalOf(Keep.PathSpace.TransformPoint(Keep.Points[i]));

        return poly;
    }

    // any simple polygon (even-odd)
    static bool InsidePolygon(Vector2[] poly, Vector2 p)
    {
        bool inside = false;

        for (int i = 0, j = poly.Length - 1; i < poly.Length; j = i++)
        {
            Vector2 a = poly[i], b = poly[j];

            if ((a.y > p.y) != (b.y > p.y) && p.x < (b.x - a.x) * (p.y - a.y) / (b.y - a.y) + a.x)
                inside = !inside;
        }

        return inside;
    }

    // A piece comes loose: flung off (dir, world) with a spin, falling, fading and gone.
    void Detach(Fragment f, Vector2 dir, float delay = 0f)
    {
        f.Gone = true;
        removedArea += f.Area;

        MeshRenderer mr = f.MR;
        MeshFilter mf = f.MF;
        Transform piece = mf.transform;

        mr.sortingOrder = Sheet.sortingOrder + PieceSortingOffset;

        // turn round its own middle, not the sheet's
        Vector3 centre = piece.TransformPoint(f.Centre);
        var pivot = new GameObject("Cut Piece").transform;
        pivot.SetParent(Sheet.transform.parent, false);
        pivot.position = centre;
        pivot.rotation = Sheet.transform.rotation;
        piece.SetParent(pivot, true);

        if (FX != null && ScrapsPerPiece > 0)
            FX.BurstAlong(centre, centre, ScrapsPerPiece);

        Vector2 dirN = dir.sqrMagnitude > 1e-6f ? dir.normalized : Vector2.up;
        Vector2 velocity = (dirN + Random.insideUnitCircle * .35f).normalized * Random.Range(FlingSpeed.x, FlingSpeed.y)
            + Vector2.up * FlingUp;
        float spin = Random.Range(Spin.x, Spin.y) * (Random.value < .5f ? -1f : 1f);
        float startAngle = pivot.eulerAngles.z;

        DOVirtual.Float(0f, FallDuration, FallDuration, t =>
        {
            if (pivot == null)
                return;

            pivot.position = centre + (Vector3)(velocity * t + .5f * Gravity * t * t * Vector2.down);
            pivot.rotation = Quaternion.Euler(0f, 0f, startAngle + spin * t);
        }).SetEase(Ease.Linear).SetDelay(delay).SetTarget(pivot);

        Color c = Sheet.color;

        DOTween.To(() => c.a, x => { c.a = x; SetColor(mr, c); }, 0f, FadeDuration)
            .SetDelay(delay + Mathf.Max(0f, FallDuration - FadeDuration))
            .SetTarget(pivot)
            .OnComplete(() =>
            {
                if (mf != null && mf.sharedMesh != null)
                    Destroy(mf.sharedMesh);

                if (pivot != null)
                    Destroy(pivot.gameObject);
            });
    }

    // The slash: the tip's path over the last SlashLife seconds while dragging, thinning and fading to its tail.
    void UpdateSlash()
    {
        if (!ShowSlash || !active && slashPoints.Count == 0)
            return;

        if (slash == null)
            CreateSlash();

        float now = Time.time;
        bool dragging = active && !IsDone && (Scissors == null || Scissors.isDragging);

        // a new stroke (picked up again) starts its own slash - never joined to where the last one ended
        if (dragging && !slashDragging)
        {
            slashPoints.Clear();
            slashTimes.Clear();
        }

        slashDragging = dragging;

        if (dragging)
        {
            Vector3 tip = TipPos();
            tip.z = Sheet.transform.position.z;

            if (slashPoints.Count == 0 || (slashPoints[slashPoints.Count - 1] - tip).sqrMagnitude > .0004f)
            {
                slashPoints.Add(tip);
                slashTimes.Add(now);
            }
        }

        while (slashTimes.Count > 0 && now - slashTimes[0] > SlashLife)
        {
            slashTimes.RemoveAt(0);
            slashPoints.RemoveAt(0);
        }

        slash.positionCount = slashPoints.Count;

        for (int i = 0; i < slashPoints.Count; i++)
            slash.SetPosition(i, slashPoints[i]);
    }

    void CreateSlash()
    {
        var go = new GameObject("Slash");
        go.transform.SetParent(Sheet.transform.parent, false);

        slash = go.AddComponent<LineRenderer>();
        slash.useWorldSpace = true;
        slashMat = new Material(Shader.Find("Sprites/Default"));
        slash.sharedMaterial = slashMat;
        slash.textureMode = LineTextureMode.Stretch;
        slash.numCapVertices = 2;
        slash.sortingLayerID = Sheet.sortingLayerID;
        slash.sortingOrder = Sheet.sortingOrder + SlashSortingOffset;
        slash.widthCurve = new AnimationCurve(new Keyframe(0f, 0f), new Keyframe(1f, 1f));
        slash.widthMultiplier = SlashWidth;

        // tail (oldest point) faded out, head solid
        var g = new Gradient();
        g.SetKeys(new[] { new GradientColorKey(SlashColor, 0f), new GradientColorKey(SlashColor, 1f) },
                  new[] { new GradientAlphaKey(0f, 0f), new GradientAlphaKey(SlashColor.a, 1f) });
        slash.colorGradient = g;
        slash.positionCount = 0;
    }

    void SetColor(MeshRenderer mr, Color c)
    {
        mpb.Clear();
        mpb.SetColor(ColorPropID, c);
        mr.SetPropertyBlock(mpb);
    }

    void Rebuild(MeshFilter mf, Vector2[] shape)
    {
        int n = shape.Length;
        var verts = new Vector3[n];
        var uvs = new Vector2[n];

        for (int i = 0; i < n; i++)
        {
            Vector2 p = shape[i];
            verts[i] = p;

            float u = Mathf.InverseLerp(quadMin.x, quadMax.x, p.x);
            float v = Mathf.InverseLerp(quadMin.y, quadMax.y, p.y);
            uvs[i] = new Vector2(Mathf.Lerp(uvMin.x, uvMax.x, u), Mathf.Lerp(uvMin.y, uvMax.y, v));
        }

        var tris = new int[(n - 2) * 3];

        for (int i = 0; i < n - 2; i++)
        {
            tris[i * 3] = 0;
            tris[i * 3 + 1] = i + 1;
            tris[i * 3 + 2] = i + 2;
        }

        var mesh = new Mesh();
        mesh.vertices = verts;
        mesh.uv = uvs;
        mesh.triangles = tris;
        mesh.RecalculateBounds();
        mf.sharedMesh = mesh;
    }

    // convex polygon, either winding
    static bool Contains(Vector2[] poly, Vector2 p)
    {
        int n = poly.Length;
        float sign = 0f;

        for (int i = 0; i < n; i++)
        {
            Vector2 a = poly[i], b = poly[(i + 1) % n];
            float cross = (b.x - a.x) * (p.y - a.y) - (b.y - a.y) * (p.x - a.x);

            if (Mathf.Abs(cross) < 1e-7f)
                continue;

            if (sign == 0f)
                sign = Mathf.Sign(cross);
            else if (Mathf.Sign(cross) != sign)
                return false;
        }

        return true;
    }

    static float DistanceToSegment(Vector2 p, Vector2 a, Vector2 b)
    {
        Vector2 ab = b - a;
        float t = ab.sqrMagnitude > 1e-8f ? Mathf.Clamp01(Vector2.Dot(p - a, ab) / ab.sqrMagnitude) : 0f;

        return Vector2.Distance(p, a + ab * t);
    }

    static bool SegmentsCross(Vector2 a, Vector2 b, Vector2 c, Vector2 d)
    {
        float Cross(Vector2 o, Vector2 p, Vector2 q) => (p.x - o.x) * (q.y - o.y) - (p.y - o.y) * (q.x - o.x);

        float d1 = Cross(c, d, a), d2 = Cross(c, d, b), d3 = Cross(a, b, c), d4 = Cross(a, b, d);

        return ((d1 > 0f) != (d2 > 0f)) && ((d3 > 0f) != (d4 > 0f));
    }

    static float Area(Vector2[] p)
    {
        float area = 0f;

        for (int i = 0; i < p.Length; i++)
        {
            Vector2 a = p[i], b = p[(i + 1) % p.Length];
            area += a.x * b.y - b.x * a.y;
        }

        return Mathf.Abs(area) * .5f;
    }

    static Vector2 Centroid(Vector2[] p)
    {
        Vector2 sum = Vector2.zero;

        foreach (var v in p)
            sum += v;

        return p.Length > 0 ? sum / p.Length : Vector2.zero;
    }

    void OnDestroy()
    {
        DOTween.Kill(this);

        foreach (var f in fragments)
            if (f.MF != null && f.MF.sharedMesh != null)
                Destroy(f.MF.sharedMesh);

        if (mat != null)
            Destroy(mat);

        if (slashMat != null)
            Destroy(slashMat);
    }
}
