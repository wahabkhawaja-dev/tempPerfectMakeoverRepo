using DG.Tweening;
using ScratchCardAsset;
using UnityEngine;
using UnityEngine.Events;

// A tool that runs along a fixed path (cutting out a pattern along its outline, tracing a seam...).
// The player drags anywhere near the path ahead of the tool and the tool follows the path - it can't
// leave it or go backwards - turning to face along it. An optional CutTrail line opens up behind the tool
// along the path (the slit in the cloth); an optional scratch card can be erased under its tip as well.
//
// Points are in PathSpace's local space (built from the outline image by CG_LevelBuildKit.OutlinePath),
// so the path moves with the art it belongs to.
public class CG_PathCut : MonoBehaviour
{
    [Space()]
    public Transform PathSpace;
    public Vector2[] Points;
    public bool Closed = true;

    [Tooltip("World point the cut starts nearest to (where the tool comes in).")]
    public Vector2 StartNear;

    [Header("----------------- TOOL ----------------------")]
    [Space()]
    public Transform Tool;
    public Transform ToolTip;

    [Tooltip("Local up of the tool points along the cut; extra rotation on top of that.")]
    public float AngleOffset = 0f;

    [Space()]
    [Tooltip("Optional snipping blades (each rotates around its own pivot, the screw) - opened and closed while cutting.")]
    public Transform SnipBladeA;
    public Transform SnipBladeB;
    public float SnipAngleA = -10.7f;
    public float SnipAngleB = 5.8f;

    [Tooltip("Or snipping frames (closed -> open -> closed) played on SnipRenderers while cutting; frame 0 when idle.")]
    public Sprite[] SnipFrames;
    public SpriteRenderer[] SnipRenderers;

    [Tooltip("Optional: UnderClothMask's sprite for each snip frame (the part of that frame under the cloth).")]
    public Sprite[] SnipMaskFrames;

    [Tooltip("Optional: UnderClothLip's sprite for each snip frame (the cloth edge over the blade going in).")]
    public Sprite[] SnipLipFrames;

    [Tooltip("Snips per second while cutting.")]
    public float SnipRate = 3f;

    [Space()]
    public float EnterDuration = 0.6f;
    public float FollowSmoothTime = 0.04f;
    public float TurnSpeed = 14f;

    [Header("----------------- INPUT ----------------------")]
    [Space()]
    [Tooltip("How far from the path (world) the finger may be and still pull the tool to the nearest point ahead.")]
    public float SnapRadius = 1.4f;

    [Tooltip("How far ahead along the path (world) the tool can jump to follow the finger in one go.")]
    public float Lookahead = 0.8f;

    [Tooltip("Dragging anywhere also pushes the tool along: the part of the finger's movement that goes the way the path is heading, times this.")]
    public float DragGain = 1.2f;

    [Header("----------------- UNDER THE CLOTH ----------------------")]
    [Space()]
    [Tooltip("Parts of the tool that go under the cloth while cutting (the lower blade) - drawn at UnderClothOrder meanwhile.")]
    public SpriteRenderer[] UnderCloth;
    public int UnderClothOrder = -1;

    [Tooltip("Optional: hides the part of the tool on top that is under the cloth (on while UnderCloth is).")]
    public SpriteMask UnderClothMask;

    [Tooltip("Optional: drawn over the tool where it goes under the cloth (on while UnderCloth is).")]
    public SpriteRenderer UnderClothLip;

    [Header("----------------- PARTICLES ----------------------")]
    [Space()]
    [Tooltip("Optional: bits of cloth dropped from the tip while cutting (emission off - emitted from here).")]
    public ParticleSystem CutParticles;

    [Tooltip("Optional: a second system drawn behind the cloth - each bit goes to one of the two at random.")]
    public ParticleSystem CutParticlesBehind;

    [Tooltip("Bits dropped per world unit cut.")]
    public float ParticlesPerUnit = 22f;

    [Tooltip("The bits stay where they land, then fade out over this long once the cut is done.")]
    public float ParticlesFadeDuration = 0.6f;

    [Header("----------------- CUT LINE ----------------------")]
    [Space()]
    [Tooltip("World-space line drawn along the path behind the tool - the cut opening up.")]
    public LineRenderer CutTrail;
    public float TrailStep = 0.02f;

    [Tooltip("How far (world) the cut line wanders either side of the path, so it looks torn rather than drawn.")]
    public float TrailRoughness = 0.012f;
    public float TrailRoughnessScale = 30f;

    [Space()]
    [Tooltip("Optional: a scratch card erased under the tool's tip as it goes.")]
    public ScratchCardManager CutLine;

    [Space()]
    [Range(0.5f, 1f)]
    public float CompleteAt = 0.985f;

    public bool progressControl = true;

    [Space()]
    public FloatEvent OnProgress;
    public UnityEvent OnComplete;

    public float Progress { get; private set; }
    public bool IsDone { get; private set; }

    Vector3[] world;
    float[] cum;
    float total;

    bool input;
    bool held;
    float distance;
    float shownDistance;
    float shownVel;
    float snipPhase;
    float snipOpen;
    Vector3 lastFinger;
    int[] underClothOrders;
    bool isUnder;
    float lastShown;
    float emitCarry;

    void Build()
    {
        int n = Points != null ? Points.Length : 0;

        int count = Closed ? n + 1 : n;

        Vector3[] raw = new Vector3[n];

        for (int i = 0; i < n; i++)
            raw[i] = PathSpace.TransformPoint(Points[i]);

        // Start at the point nearest StartNear.
        int start = 0;
        float best = float.MaxValue;

        for (int i = 0; i < n; i++)
        {
            float d = ((Vector2)raw[i] - StartNear).sqrMagnitude;

            if (d < best)
            {
                best = d;
                start = i;
            }
        }

        world = new Vector3[count];

        for (int i = 0; i < count; i++)
            world[i] = raw[(start + i) % n];

        cum = new float[count];

        for (int i = 1; i < count; i++)
            cum[i] = cum[i - 1] + Vector3.Distance(world[i - 1], world[i]);

        total = Mathf.Max(cum[count - 1], 0.0001f);
    }

    Vector3 PointAt(float d, out Vector3 tangent)
    {
        d = Mathf.Clamp(d, 0f, total);

        int i = 1;

        while (i < cum.Length - 1 && cum[i] < d)
            i++;

        float seg = cum[i] - cum[i - 1];
        float t = seg > 0f ? (d - cum[i - 1]) / seg : 0f;

        tangent = (world[i] - world[i - 1]).normalized;

        return Vector3.Lerp(world[i - 1], world[i], t);
    }

    // Brings the tool in onto the start of the path, then hands it to the player.
    public void Begin()
    {
        if (IsDone || Points == null || Points.Length < 2)
            return;

        Build();

        distance = shownDistance = lastShown = 0f;
        shownVel = 0f;
        emitCarry = 0f;

        Vector3 tangent;
        Vector3 p = PointAt(0f, out tangent);

        Tool.gameObject.SetActive(true);
        Tool.DOKill();

        Quaternion rot = RotationFor(tangent);
        Tool.DORotateQuaternion(rot, EnterDuration).SetEase(Ease.OutCubic);
        Tool.DOMove(p - (rot * TipLocalOffset()), EnterDuration).SetEase(Ease.OutCubic).OnComplete(() =>
        {
            input = true;

            if (CutParticles != null)
                CutParticles.Play();

            if (CutParticlesBehind != null)
                CutParticlesBehind.Play();
        });
    }

    // The lower blade slides under the cloth while the player is dragging, and comes back on top when
    // they let go or the cut is done.
    void SetUnderCloth(bool under)
    {
        if (UnderCloth == null || under == isUnder)
            return;

        isUnder = under;

        if (underClothOrders == null || underClothOrders.Length != UnderCloth.Length)
        {
            underClothOrders = new int[UnderCloth.Length];

            for (int i = 0; i < UnderCloth.Length; i++)
                underClothOrders[i] = UnderCloth[i] != null ? UnderCloth[i].sortingOrder : 0;
        }

        for (int i = 0; i < UnderCloth.Length; i++)
            if (UnderCloth[i] != null)
                UnderCloth[i].sortingOrder = under ? UnderClothOrder : underClothOrders[i];

        if (UnderClothMask != null)
            UnderClothMask.enabled = under;

        if (UnderClothLip != null)
            UnderClothLip.enabled = under;
    }

    Vector3 TipLocalOffset()
    {
        // Tip offset from the tool's pivot, in world units, before rotation.
        Vector3 local = Tool.InverseTransformPoint(ToolTip.position);

        return Vector3.Scale(local, Tool.lossyScale);
    }

    Quaternion RotationFor(Vector3 tangent)
    {
        float a = Mathf.Atan2(tangent.y, tangent.x) * Mathf.Rad2Deg - 90f + AngleOffset;

        return Quaternion.Euler(0f, 0f, a);
    }

    void Update()
    {
        if (!input || IsDone)
            return;

        Camera cam = Camera.main;

        bool paused = GameManager.instance != null && GameManager.instance.isPaused;

        Vector3 finger = cam.ScreenToWorldPoint(Input.mousePosition);
        finger.z = 0f;

        if (Input.GetMouseButtonDown(0) && !paused && !IsPointerOverUI())
        {
            held = true;
            lastFinger = finger;
        }

        if (Input.GetMouseButtonUp(0))
            held = false;

        if (held && !paused)
        {
            // Dragging the way the path heads pushes the tool along it, wherever the finger is.
            Vector3 heading;
            PointAt(distance, out heading);

            float along = Vector3.Dot(finger - lastFinger, heading);
            lastFinger = finger;

            if (along > 0f)
                distance = Mathf.Min(distance + Mathf.Min(along * DragGain, Lookahead), total);

            // Nearest point to the finger on the stretch of path just ahead of the tool.
            float bestD = distance;
            float bestDist = float.MaxValue;
            float end = Mathf.Min(distance + Lookahead, total);

            for (float d = distance; d <= end; d += 0.01f)
            {
                Vector3 tg;
                float dist = Vector3.Distance(PointAt(d, out tg), finger);

                if (dist < bestDist)
                {
                    bestDist = dist;
                    bestD = d;
                }
            }

            if (bestDist <= SnapRadius && bestD > distance)
                distance = bestD;
        }

        shownDistance = FollowSmoothTime > 0f ? Mathf.SmoothDamp(shownDistance, distance, ref shownVel, FollowSmoothTime) : distance;

        Vector3 tangent;
        Vector3 p = PointAt(shownDistance, out tangent);

        Tool.rotation = Quaternion.Slerp(Tool.rotation, RotationFor(tangent), Time.deltaTime * TurnSpeed);
        Tool.position = p - (Tool.rotation * TipLocalOffset());

        bool cutting = held && shownVel > 0.001f;

        SetUnderCloth(held && !paused);

        UpdateSnip(cutting);

        UpdateParticles(cutting);

        if (CutLine != null)
        {
            CutLine.InputEnabled = cutting;
            CutLine.Card.InputEnabled = cutting;
            CutLine.Card.IsScratching = cutting;
        }

        UpdateTrail();

        Progress = shownDistance / total;

        OnProgress?.Invoke(Progress);

        if (progressControl)
            UI_Manager.instance.SetProgressBar(Progress);

        if (Progress >= CompleteAt)
            Finish();
    }

    void Finish()
    {
        IsDone = true;
        input = false;
        held = false;

        SetUnderCloth(false);

        if (CutParticles != null)
            FadeParticles(CutParticles);

        if (CutParticlesBehind != null)
            FadeParticles(CutParticlesBehind);

        if (CutLine != null)
        {
            CutLine.InputEnabled = false;
            CutLine.Card.InputEnabled = false;
            CutLine.Card.IsScratching = false;
        }

        if (progressControl)
            UI_Manager.instance.SetProgressBar(1f);

        OnComplete?.Invoke();
    }

    // Drops ParticlesPerUnit bits of cloth for every unit the tip moves while cutting.
    void UpdateParticles(bool cutting)
    {
        float moved = shownDistance - lastShown;
        lastShown = shownDistance;

        if (CutParticles == null || !cutting || moved <= 0f)
            return;

        emitCarry += moved * ParticlesPerUnit;

        int count = Mathf.FloorToInt(emitCarry);

        if (count <= 0)
            return;

        emitCarry -= count;

        // Each bit is flicked a little way off the blades, mostly downwards, and settles there.
        var emit = new LunaEmitParams();
        emit.position = ToolTip.position;
        emit.applyShapeToPosition = true;

        for (int i = 0; i < count; i++)
        {
            emit.velocity = new Vector3(Random.Range(-.5f, .5f), Random.Range(-.9f, .15f), 0f);

            ParticleSystem ps = CutParticlesBehind != null && Random.value < .5f ? CutParticlesBehind : CutParticles;

            LunaParticles.Emit(ps, emit, 1);
        }
    }

    // The bits left on the table fade away, then are cleared (a tween, so it finishes even if the tool is
    // switched off).
    void FadeParticles(ParticleSystem ps)
    {
        var bits = new ParticleSystem.Particle[ps.main.maxParticles];
        int count = ps.GetParticles(bits);

        var start = new Color32[count];

        for (int i = 0; i < count; i++)
            start[i] = bits[i].startColor;

        DOVirtual.Float(1f, 0f, ParticlesFadeDuration, a =>
        {
            if (ps == null)
                return;

            int n = Mathf.Min(ps.GetParticles(bits), start.Length);

            for (int i = 0; i < n; i++)
            {
                Color32 c = start[i];
                c.a = (byte)(c.a * a);
                bits[i].startColor = c;
            }

            ps.SetParticles(bits, n);
        })
        .OnComplete(() =>
        {
            if (ps != null)
                ps.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);
        });
    }

    // Blades open and close while the tool is cutting, and settle closed when it stops.
    void UpdateSnip(bool cutting)
    {
        if (SnipFrames != null && SnipFrames.Length > 0)
        {
            // Frames: one full cycle per snip; back to closed when the tool stops.
            if (cutting)
                snipPhase += Time.deltaTime * SnipRate;
            else
                snipPhase = 0f;

            int frame = Mathf.FloorToInt(snipPhase * SnipFrames.Length) % SnipFrames.Length;

            if (SnipRenderers != null)
                foreach (var sr in SnipRenderers)
                    if (sr != null && sr.sprite != SnipFrames[frame])
                        sr.sprite = SnipFrames[frame];

            if (UnderClothMask != null && SnipMaskFrames != null && frame < SnipMaskFrames.Length)
                UnderClothMask.sprite = SnipMaskFrames[frame];

            if (UnderClothLip != null && SnipLipFrames != null && frame < SnipLipFrames.Length)
                UnderClothLip.sprite = SnipLipFrames[frame];

            return;
        }

        if (SnipBladeA == null && SnipBladeB == null)
            return;

        if (cutting)
        {
            snipPhase += Time.deltaTime * SnipRate;
            snipOpen = (1f - Mathf.Cos(snipPhase * Mathf.PI * 2f)) * .5f;
        }
        else
        {
            snipOpen = Mathf.MoveTowards(snipOpen, 0f, Time.deltaTime * 4f);
        }

        if (SnipBladeA != null)
            SnipBladeA.localRotation = Quaternion.Euler(0f, 0f, SnipAngleA * snipOpen);

        if (SnipBladeB != null)
            SnipBladeB.localRotation = Quaternion.Euler(0f, 0f, SnipAngleB * snipOpen);
    }

    void UpdateTrail()
    {
        if (CutTrail == null)
            return;

        int n = Mathf.Max(2, Mathf.CeilToInt(shownDistance / TrailStep) + 1);

        CutTrail.useWorldSpace = true;
        CutTrail.positionCount = n;

        for (int i = 0; i < n; i++)
        {
            float d = Mathf.Min(i * TrailStep, shownDistance);

            Vector3 tg;
            Vector3 p = PointAt(d, out tg);

            // Jagged: pushed either side of the path by a fixed noise along its length (same every frame).
            float jag = (Mathf.PerlinNoise(d * TrailRoughnessScale, 0.37f) - .5f) * 2f * TrailRoughness;
            p += new Vector3(-tg.y, tg.x, 0f) * jag;

            CutTrail.SetPosition(i, p);
        }

        if (!CutTrail.gameObject.activeSelf)
            CutTrail.gameObject.SetActive(true);
    }

    static bool IsPointerOverUI()
    {
        var es = UnityEngine.EventSystems.EventSystem.current;

        if (es == null)
            return false;

        if (es.IsPointerOverGameObject())
            return true;

        return Input.touchCount > 0 && es.IsPointerOverGameObject(Input.GetTouch(0).fingerId);
    }

#if UNITY_EDITOR
    void OnDrawGizmosSelected()
    {
        if (PathSpace == null || Points == null || Points.Length < 2)
            return;

        Gizmos.color = Color.yellow;

        for (int i = 1; i < Points.Length; i++)
            Gizmos.DrawLine(PathSpace.TransformPoint(Points[i - 1]), PathSpace.TransformPoint(Points[i]));

        if (Closed)
            Gizmos.DrawLine(PathSpace.TransformPoint(Points[Points.Length - 1]), PathSpace.TransformPoint(Points[0]));

        Gizmos.color = Color.green;
        Gizmos.DrawWireSphere(StartNear, 0.08f);
    }
#endif
}
