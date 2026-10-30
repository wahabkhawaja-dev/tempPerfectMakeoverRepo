using DG.Tweening;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

// SliceStrokes: continuous drag drives several staggered straight chalk passes together; each reveals
// its nearest section of the existing outline. Points remains the silhouette used by CG_ClothSlicer.
// Without slices, a chalk comes in and runs its tip once round a path (Points, in PathSpace's local
// space - the same path a CG_PathCut cuts), and the outline (Outline, drawn on PathSpace) shows up right
// behind the tip; then it goes away and OnComplete fires. It draws by itself, or (DragToDraw) only while the
// player drags.
// With a readable outline image, each drawn pixel of it shows once the tip has passed the point of the path
// nearest to it (so hand-drawn lines a little off the path show whole, and only in their turn); otherwise
// it is shown within MarkRadius of where the tip has been.
public class CG_ChalkTrace : MonoBehaviour
{
    [System.Serializable]
    public struct SliceStroke
    {
        public Vector2 From;
        public Vector2 To;
        [Tooltip("Outline section revealed by this pass, in PathSpace coordinates. Empty uses the straight segment.")]
        public Vector2[] RevealPath;

        public SliceStroke(Vector2 from, Vector2 to) { From = from; To = to; RevealPath = null; }
    }

    [Header("Straight chalk slices (optional)")]
    [Tooltip("Straight passes in PathSpace coordinates. Empty keeps the original continuous trace.")]
    public SliceStroke[] SliceStrokes;
    [Tooltip("Seconds of drag for a chalk to cross the screen and leave.")]
    public float SliceDuration = .32f / .74f;
    [Tooltip("Delay between chalks on the shared drag clock; smaller than duration makes them overlap.")]
    public float SliceStagger = .10f / .74f;
    [Tooltip("A waiting chalk slides in from the side to the outline centre, then hides on the first drag.")]
    public bool ShowSliceIntro = true;
    [Tooltip("Optional scissors mode: cuts cloth along the slashes instead of revealing a chalk mask.")]
    public CG_ClothSlicer SliceCutter;

    [Space()]
    public Transform Chalk;

    [Tooltip("The drawing end of the chalk.")]
    public Transform Tip;

    [Space()]
    public Transform PathSpace;
    public Vector2[] Points;

    [Tooltip("World point the trace starts nearest to.")]
    public Vector2 StartNear;

    [Space()]
    [Tooltip("Shown only where the tip has been (VisibleInsideMask, with a mask painted as it goes).")]
    public SpriteRenderer Outline;

    [Tooltip("Width (world) marked either side of the tip - only for an outline image that isn't readable.")]
    public float MarkRadius = 0.03f;

    public int MaskDownsample = 2;

    [Header("----------------- TIMING ----------------------")]
    [Space()]
    public float EnterDuration = 0.5f;
    public float TraceDuration = 2.2f;
    public float ExitDuration = 0.5f;

    [Tooltip("Come in from just past the right edge of the camera's view and go off past its left edge (at the chalk's height), so the whole slide is seen whatever the zoom - instead of Offscreen / ExitOffscreen.")]
    public bool FromScreenEdges = true;

    [Tooltip("How far past the screen edge (world) it starts / ends.")]
    public float EdgeMargin = 0.8f;

    [Tooltip("Where the chalk comes in from (world, from the start of the trace) - when not FromScreenEdges.")]
    public Vector3 Offscreen = new Vector3(4f, 0f, 0f);

    [Tooltip("Where the chalk goes off to when done (world, from where it ends) - when not FromScreenEdges.")]
    public Vector3 ExitOffscreen = new Vector3(-4f, 0f, 0f);

    [Tooltip("Little up-and-down of the chalk while it draws.")]
    public float Wobble = 0.03f;

    [Header("----------------- DRAG TO DRAW ----------------------")]
    [Space()]
    [Tooltip("The chalk comes in by itself, then draws only while the player drags (anywhere on screen) - TraceDuration seconds of dragging all the way round.")]
    public bool DragToDraw;

    [Tooltip("Hint - shown while the chalk waits to be dragged, hidden while dragging.")]
    public GameObject Hint;

    [Tooltip("How far (pixels) the finger has to move to count as dragging.")]
    public float MoveThreshold = 2f;

    [Tooltip("Keeps drawing this long after the finger last moved, so tiny pauses in a drag don't stutter.")]
    public float StopDelay = 0.12f;

    [Tooltip("The sound only starts once the finger has moved this far (pixels) in one touch, so a tap makes none.")]
    public float SoundMinDrag = 12f;

    public bool progressControl = true;

    [Space()]
    [Tooltip("Sound and vibration while the chalk is drawing (stops when the drag stops, even if still held).")]
    public CG_LoopFeedback Feedback = new CG_LoopFeedback();

    [Tooltip("Chalk dust off the tip while it is drawing.")]
    public ParticleSystem Dust;

    [Space()]
    public UnityEvent OnComplete = new UnityEvent();

    public bool IsDone { get; private set; }

    int traceStart;
    Vector3 startPos;
    float traced;
    bool dragging;
    bool pressCounts;
    float lastMoveTime = -1f;
    Vector3 lastPointer;
    Vector3 pressStart;
    bool pressMoved;

    Texture2D maskTex;
    SpriteMask mask;
    Vector2 lastPx;
    bool hasLast;

    // readable outline: the mask's drawn pixels in the order the tip reaches them
    int[] revealOrder;
    float[] revealAt;
    int revealed;
    int orderStart = -1;
    float sliceTime;
    Vector3[] sliceFrom, sliceTo;
    Vector3[] sliceTipOffsets;
    float[] sliceProgress;
    SpriteRenderer[] sliceRenderers;
    TrailRenderer[] sliceTrails;
    Transform[] sliceChalks;
    ParticleSystem[] sliceDust;
    SpriteRenderer sliceSource;
    bool sliceIntroDismissed;
    bool UsesSlices { get { return SliceStrokes != null && SliceStrokes.Length > 0; } }

    public void Play()
    {
        if (Chalk == null || PathSpace == null || Outline == null || Outline.sprite == null)
            return;
        if (!UsesSlices && (Points == null || Points.Length < 2)) return;
        if (UsesSlices && !ValidSlices()) return;

        IsDone = false;
        dragging = false;
        traced = 0f;

        DOTween.Kill(this);
        sliceTime = 0f;
        lastMoveTime = float.NegativeInfinity;
        pressCounts = false;
        Chalk.DOKill();
        if (UsesSlices)
            BuildSlicePositions();

        if (SliceCutter != null)
            SliceCutter.BeginSlashes();
        else
            SetupMask();

        if (UsesSlices)
        {
            // The controller lives on Chalk itself, so keep it active while the visual copies fly.
            Chalk.gameObject.SetActive(true);
            dragging = true;
            pressCounts = Input.GetMouseButton(0) && !IsPointerOverUI();
            lastPointer = Input.mousePosition;
            BeginSliceIntro();
            if (Hint != null) Hint.SetActive(true);
            return;
        }

        traceStart = NearestPoint(StartNear);
        startPos = TipAt(PathSpace.TransformPoint(Points[traceStart]));

        Chalk.gameObject.SetActive(true);
        Chalk.DOKill();
        Chalk.position = OffscreenPoint(startPos, true);

        if (Hint != null)
            Hint.SetActive(false);

        if (DragToDraw)
        {
            // it comes in by itself, then draws only while the player drags
            Chalk.DOMove(startPos, EnterDuration).SetEase(Ease.OutQuad).SetTarget(this).OnComplete(() =>
            {
                dragging = true;

                // a finger already down (and moving) when it arrives draws straight away
                pressCounts = Input.GetMouseButton(0) && !IsPointerOverUI();
                lastPointer = Input.mousePosition;
            });

            return;
        }

        DOTween.Sequence()
            .Append(Chalk.DOMove(startPos, EnterDuration).SetEase(Ease.OutQuad))
            .Append(DOTween.To(() => traced, TraceAt, 1f, TraceDuration).SetEase(Ease.Linear))
            .OnComplete(Leave)
            .SetTarget(this);
    }

    // Make visual copies only: copying the controller would duplicate input, callbacks and audio.
    bool ValidSlices()
    {
        if (Chalk.GetComponent<SpriteRenderer>() == null) return false;
        if (float.IsNaN(SliceDuration) || float.IsInfinity(SliceDuration)
            || float.IsNaN(SliceStagger) || float.IsInfinity(SliceStagger)) return false;
        foreach (var stroke in SliceStrokes)
        {
            float length = (stroke.To - stroke.From).sqrMagnitude;
            if (float.IsNaN(length) || float.IsInfinity(length) || length < .000001f)
            {
                Debug.LogError("Chalk slice needs two distinct, finite endpoints.", this);
                return false;
            }
        }
        return true;
    }

    void BuildSlicePositions()
    {
        int count = SliceStrokes.Length;
        sliceFrom = new Vector3[count];
        sliceTo = new Vector3[count];
        sliceTipOffsets = new Vector3[count];
        sliceProgress = new float[count];
        for (int i = 0; i < count; i++) sliceProgress[i] = -1f;
        if (sliceChalks == null || sliceChalks.Length != count)
        {
            if (sliceChalks != null)
                for (int i = 0; i < sliceChalks.Length; i++)
                    if (sliceChalks[i] != null) Destroy(sliceChalks[i].gameObject);
            sliceChalks = new Transform[count];
            sliceDust = new ParticleSystem[count];
            sliceRenderers = new SpriteRenderer[count];
            sliceTrails = new TrailRenderer[count];
            sliceSource = Chalk.GetComponent<SpriteRenderer>();
            for (int i = 0; i < count; i++)
            {
                var visual = new GameObject(Chalk.name + " Slice " + (i + 1));
                visual.transform.SetParent(Chalk.parent, false);
                visual.transform.localPosition = Chalk.localPosition;
                visual.transform.localRotation = Chalk.localRotation;
                visual.transform.localScale = Chalk.localScale;
                var sr = visual.AddComponent<SpriteRenderer>();
                sr.sprite = sliceSource.sprite;
                sr.color = sliceSource.color;
                sr.sharedMaterial = sliceSource.sharedMaterial;
                sr.sortingLayerID = sliceSource.sortingLayerID;
                sr.sortingOrder = sliceSource.sortingOrder;
                sr.flipX = sliceSource.flipX;
                sr.flipY = sliceSource.flipY;
                sliceRenderers[i] = sr;
                sliceChalks[i] = visual.transform;
                if (SliceCutter != null && SliceCutter.ShowSlash)
                {
                    var trailPoint = new GameObject("Slash Trail").transform;
                    trailPoint.SetParent(visual.transform, false);
                    trailPoint.localPosition = Tip != null ? Chalk.InverseTransformPoint(Tip.position) : Vector3.zero;
                    var trail = trailPoint.gameObject.AddComponent<TrailRenderer>();
                    trail.sharedMaterial = sliceSource.sharedMaterial;
                    trail.time = SliceCutter.SlashLife;
                    trail.startWidth = SliceCutter.SlashWidth;
                    trail.endWidth = 0f;
                    // [Luna] a TrailRenderer added at runtime has no gradient for startColor/endColor to write into
                    // ("Cannot read properties of null (reading 'setKey')"); the same two-key gradient, assigned whole.
                    Color clear = SliceCutter.SlashColor;
                    clear.a = 0f;
                    var fade = new Gradient();
                    fade.SetKeys(new[] { new GradientColorKey(SliceCutter.SlashColor, 0f), new GradientColorKey(clear, 1f) },
                                 new[] { new GradientAlphaKey(SliceCutter.SlashColor.a, 0f), new GradientAlphaKey(0f, 1f) });
                    trail.colorGradient = fade;
                    trail.minVertexDistance = .03f;
                    trail.sortingLayerID = SliceCutter.Sheet.sortingLayerID;
                    trail.sortingOrder = SliceCutter.Sheet.sortingOrder + SliceCutter.SlashSortingOffset;
                    trail.emitting = false;
                    sliceTrails[i] = trail;
                }
                if (Dust != null)
                {
                    sliceDust[i] = Instantiate(Dust.gameObject, visual.transform, true).GetComponent<ParticleSystem>();
                    sliceDust[i].Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);
                }
                visual.SetActive(false);
            }
        }
        sliceSource.enabled = false;
        SetDrawing(false);
        Camera cam = Camera.main;
        for (int i = 0; i < count; i++)
        {
            Vector3 a = PathSpace.TransformPoint(SliceStrokes[i].From);
            Vector3 b = PathSpace.TransformPoint(SliceStrokes[i].To);
            Vector3 dir = (b - a).normalized;
            Vector3 tipOffset = Tip != null ? Tip.position - Chalk.position : Vector3.zero;
            float tipAngle = Mathf.Atan2(tipOffset.y, tipOffset.x) * Mathf.Rad2Deg;
            float travelAngle = Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg;
            Quaternion turn = Quaternion.AngleAxis(travelAngle - tipAngle, Vector3.forward);
            sliceChalks[i].rotation = turn * Chalk.rotation;
            sliceTipOffsets[i] = turn * tipOffset;
            // Extend the same straight line through both screen edges, so each chalk flies fully away.
            float reach = cam != null && cam.orthographic
                ? cam.orthographicSize * Mathf.Sqrt(1f + cam.aspect * cam.aspect) + EdgeMargin + 1f : 8f;
            Vector3 centre = cam != null ? cam.transform.position : (a + b) * .5f;
            float projected = Vector3.Dot(centre - a, dir);
            sliceFrom[i] = a + dir * (projected - reach);
            sliceTo[i] = a + dir * (projected + reach);
            sliceChalks[i].gameObject.SetActive(false);
        }
    }

    void UpdateSliceInput()
    {
        bool paused = Time.timeScale <= 0f || (GameManager.instance != null && GameManager.instance.isPaused);
        if (paused || !Input.GetMouseButton(0))
        {
            pressCounts = false;
            lastMoveTime = float.NegativeInfinity;
        }
        if (Input.GetMouseButtonDown(0))
        {
            pressCounts = !paused && !IsPointerOverUI();
            lastPointer = Input.mousePosition;
            pressStart = Input.mousePosition;
            pressMoved = false;
            lastMoveTime = float.NegativeInfinity;
        }
        bool held = pressCounts && Input.GetMouseButton(0) && !paused;
        if (!held)
            pressMoved = false;
        else if (!pressMoved && (Input.mousePosition - pressStart).sqrMagnitude >= SoundMinDrag * SoundMinDrag)
            pressMoved = true;
        if (held && (Input.mousePosition - lastPointer).sqrMagnitude >= MoveThreshold * MoveThreshold)
        {
            lastMoveTime = Time.time;
            lastPointer = Input.mousePosition;
        }
        bool drawing = held && Time.time - lastMoveTime <= StopDelay;
        if (Hint != null) Hint.SetActive(!drawing && !paused);
        AdvanceSlices(drawing ? Time.deltaTime : 0f, drawing);
    }

    void BeginSliceIntro()
    {
        sliceIntroDismissed = false;
        if (!ShowSliceIntro) return;
        // Reuse the otherwise hidden source sprite; it carries the controller, so hide its renderer only.
        Vector3 centre = Outline.bounds.center;
        centre.z = Chalk.position.z;
        sliceSource.enabled = true;
        Chalk.position = OffscreenPoint(centre, true);
        Chalk.DOMove(centre, Mathf.Max(.01f, EnterDuration)).SetEase(Ease.OutQuad).SetTarget(this);
    }

    void HideSliceIntro()
    {
        if (sliceIntroDismissed) return;
        sliceIntroDismissed = true;
        if (Chalk != null) Chalk.DOKill();
        if (sliceSource != null) sliceSource.enabled = false;
    }

    // One shared drag clock: four staggered chalks move simultaneously, and stop with the finger.
    void AdvanceSlices(float dt, bool drawing)
    {
        if (IsDone || !dragging || sliceChalks == null) return;
        if (drawing) HideSliceIntro();
        if (drawing && !float.IsNaN(dt) && !float.IsInfinity(dt))
            sliceTime += Mathf.Max(0f, dt);
        float duration = Mathf.Max(.05f, SliceDuration);
        float total = duration + Mathf.Max(0f, SliceStagger) * (sliceChalks.Length - 1);
        bool onCloth = false;
        for (int i = 0; i < sliceChalks.Length; i++)
        {
            float t = (sliceTime - i * Mathf.Max(0f, SliceStagger)) / duration;
            bool visible = t >= 0f && t < 1f;
            sliceChalks[i].gameObject.SetActive(visible);
            if (sliceTrails[i] != null) sliceTrails[i].emitting = visible && drawing;
            if (visible)
            {
                Vector3 p = Vector3.Lerp(sliceFrom[i], sliceTo[i], Mathf.Clamp01(t)) - sliceTipOffsets[i];
                p.z = Chalk.position.z;
                sliceChalks[i].position = p;
            }
            if (SliceCutter != null && drawing && t >= 0f && sliceProgress[i] < 1f)
            {
                float next = Mathf.Clamp01(t);
                Vector3 from = Vector3.Lerp(sliceFrom[i], sliceTo[i], Mathf.Max(0f, sliceProgress[i]));
                Vector3 to = Vector3.Lerp(sliceFrom[i], sliceTo[i], next);
                SliceCutter.CutSlash(from, to);
                sliceProgress[i] = next;
                var fx = SliceCutter.FX;
                if (visible && fx != null && fx.SnipFrames != null && fx.SnipFrames.Length > 0)
                {
                    int frame = Mathf.FloorToInt(sliceTime * fx.SnipRate * fx.SnipFrames.Length) % fx.SnipFrames.Length;
                    sliceRenderers[i].sprite = fx.SnipFrames[frame];
                }
            }
            var dust = sliceDust[i];
            Vector3 tip = sliceChalks[i].position + sliceTipOffsets[i];
            Vector3 a = PathSpace.TransformPoint(SliceStrokes[i].From);
            Vector3 ab = PathSpace.TransformPoint(SliceStrokes[i].To) - a;
            float along = Vector3.Dot(tip - a, ab) / ab.sqrMagnitude;
            bool marking = visible && drawing && along >= 0f && along <= 1f;
            onCloth |= marking;
            if (dust != null)
            {
                if (marking && !dust.isEmitting) dust.Play();
                else if (!marking && dust.isEmitting) dust.Stop(true, ParticleSystemStopBehavior.StopEmitting);
            }
        }
        // the sound follows the drag like the animation: on while the finger drags, off the moment it stops
        Feedback.Set(drawing && pressMoved && sliceTime < total);
        traced = Mathf.Clamp01(sliceTime / total);
        if (SliceCutter == null) RevealUpTo(traced);
        if (progressControl && UI_Manager.instance != null)
            UI_Manager.instance.SetProgressBar(traced);
        if (sliceTime < total) return;
        dragging = false;
        SetDrawing(false);
        HideSlices();
        if (Hint != null) Hint.SetActive(false);
        IsDone = true;
        if (SliceCutter != null)
        {
            SliceCutter.CompleteSlashes();
            return;
        }
        Outline.maskInteraction = SpriteMaskInteraction.None;
        if (mask != null) mask.enabled = false;
        OnComplete?.Invoke();
    }

    void HideSlices()
    {
        HideSliceIntro();
        if (sliceChalks == null) return;
        foreach (var chalk in sliceChalks)
            if (chalk != null) chalk.gameObject.SetActive(false);
    }

    void OnApplicationFocus(bool focused)
    {
        if (!focused && UsesSlices) ResetSliceInput();
    }

    void OnApplicationPause(bool paused)
    {
        if (paused && UsesSlices) ResetSliceInput();
    }

    void ResetSliceInput()
    {
        pressCounts = false;
        lastMoveTime = float.NegativeInfinity;
        if (dragging) AdvanceSlices(0f, false);
        SetDrawing(false);
    }

    // Assign each outline pixel to its nearest straight pass. Its reveal time is when that chalk reaches it.
    void BuildSliceRevealOrder()
    {
        int w = maskTex.width, h = maskTex.height;
        int ds = Mathf.Max(1, MaskDownsample);
        Sprite os = Outline.sprite;
        var order = new List<int>();
        var at = new List<float>();
        float duration = Mathf.Max(.05f, SliceDuration);
        float stagger = Mathf.Max(0f, SliceStagger);
        float total = duration + stagger * (SliceStrokes.Length - 1);
        // Precompute the actual outline sections once. This prevents a crossing or nearby slash from
        // revealing another part of the garment, and avoids transform calls in the pixel search.
        // [Luna] Plain floats, not Vector3: millions of tests (inked pixels x segments) and every Vector3 op is an
        // allocation in the browser - this one frame froze the playable for 5.6 s before each chalk step.
        var segments = new List<float>(); // per segment: ax, ay, az, abx, aby, abz, |ab|^2
        var owner = new List<int>();
        for (int i = 0; i < SliceStrokes.Length; i++)
        {
            var section = SliceStrokes[i].RevealPath;
            if (section == null || section.Length < 2)
                section = new[] { SliceStrokes[i].From, SliceStrokes[i].To };
            for (int j = 1; j < section.Length; j++)
            {
                Vector3 a = PathSpace.TransformPoint(section[j - 1]), ab = PathSpace.TransformPoint(section[j]) - a;
                segments.Add(a.x); segments.Add(a.y); segments.Add(a.z);
                segments.Add(ab.x); segments.Add(ab.y); segments.Add(ab.z); segments.Add(ab.sqrMagnitude);
                owner.Add(i);
            }
        }
        float[] seg = segments.ToArray();
        int[] own = owner.ToArray();
        int count = own.Length;
        // Each slice's start and travel, for the moment its chalk reaches a pixel.
        var travel = new float[SliceStrokes.Length * 4];
        for (int i = 0; i < SliceStrokes.Length; i++)
        {
            Vector3 t = sliceTo[i] - sliceFrom[i];
            travel[i * 4] = t.x; travel[i * 4 + 1] = t.y; travel[i * 4 + 2] = t.z; travel[i * 4 + 3] = t.sqrMagnitude;
        }
        // Outline.transform.TransformPoint of a point in its plane (z = 0) is origin + x * ex + y * ey.
        Transform ot = Outline.transform;
        Vector3 o = ot.TransformPoint(Vector3.zero), ex = ot.TransformPoint(Vector3.right) - o, ey = ot.TransformPoint(Vector3.up) - o;
        float ppu = os.pixelsPerUnit, pivX = os.pivot.x, pivY = os.pivot.y;
        float cellX = os.rect.width / w, cellY = os.rect.height / h; // outline pixels per mask pixel (ds in the editor)
        foreach (int idx in DrawnMaskPixels(os, w, h, ds))
            {
                int x = idx % w, y = idx / w;
                float lx = ((x + .5f) * cellX - pivX) / ppu, ly = ((y + .5f) * cellY - pivY) / ppu;
                float px = o.x + ex.x * lx + ey.x * ly, py = o.y + ex.y * lx + ey.y * ly, pz = o.z + ex.z * lx + ey.z * ly;
                float best = float.MaxValue, when = 0f;
                for (int j = 0; j < count; j++)
                {
                    int s = j * 7;
                    float ax = seg[s], ay = seg[s + 1], az = seg[s + 2], abx = seg[s + 3], aby = seg[s + 4], abz = seg[s + 5], ab2 = seg[s + 6];
                    float f = ab2 > .000001f ? Mathf.Clamp01(((px - ax) * abx + (py - ay) * aby + (pz - az) * abz) / ab2) : 0f;
                    float dx = px - (ax + abx * f), dy = py - (ay + aby * f), dz = pz - (az + abz * f);
                    float d = dx * dx + dy * dy + dz * dz;
                    if (d >= best) continue;
                    best = d;
                    int i = own[j];
                    Vector3 from = sliceFrom[i];
                    float t2 = travel[i * 4 + 3];
                    float u = t2 > .000001f ? Mathf.Clamp01(((px - from.x) * travel[i * 4] + (py - from.y) * travel[i * 4 + 1] + (pz - from.z) * travel[i * 4 + 2]) / t2) : 1f;
                    when = (i * stagger + u * duration) / total;
                }
                order.Add(y * w + x);
                at.Add(when);
            }
        revealOrder = order.ToArray();
        revealAt = at.ToArray();
        LunaArray.Sort(revealAt, revealOrder);
        orderStart = -1;
    }

    void TraceAt(float t)
    {
        traced = t;

        int n = Points.Length;
        float f = t * n;
        int i = Mathf.FloorToInt(f);
        Vector2 a = Points[(traceStart + i) % n], b = Points[(traceStart + i + 1) % n];
        Vector3 p = PathSpace.TransformPoint(Vector2.Lerp(a, b, f - i));

        if (revealOrder != null)
            RevealUpTo(t);
        else
            Mark(p);

        Chalk.position = TipAt(p) + Vector3.up * Mathf.Sin(t * 40f) * Wobble * .5f;
    }

    // Where the chalk comes in from (enter) or goes off to: past the right / left edge of the camera's view at
    // the height of `from`, or the fixed offsets.
    Vector3 OffscreenPoint(Vector3 from, bool enter)
    {
        Camera cam = Camera.main;

        if (!FromScreenEdges || cam == null || !cam.orthographic)
            return from + (enter ? Offscreen : ExitOffscreen);

        float halfWidth = cam.orthographicSize * cam.aspect;
        float x = enter ? cam.transform.position.x + halfWidth + EdgeMargin
                        : cam.transform.position.x - halfWidth - EdgeMargin;

        // the chalk's own reach past its pivot (it lies along its X), so it is fully out of view
        float reach = 0f;
        var sr = Chalk.GetComponentInChildren<SpriteRenderer>();

        if (sr != null)
            reach = Mathf.Max(sr.bounds.extents.x, sr.bounds.extents.y);

        return new Vector3(x + (enter ? reach : -reach), from.y, from.z);
    }

    // All the way round: the chalk goes away, then OnComplete.
    void Leave()
    {
        Chalk.DOMove(OffscreenPoint(Chalk.position, false), ExitDuration).SetEase(Ease.InQuad).SetTarget(this).OnComplete(() =>
        {
            Chalk.gameObject.SetActive(false);

            // the whole outline stays; the mask goes (it would show other outlines on the same sorting order)
            Outline.maskInteraction = SpriteMaskInteraction.None;

            if (mask != null)
                mask.enabled = false;

            IsDone = true;
            OnComplete?.Invoke();
        });
    }

    // DragToDraw: the chalk draws while the finger is down and moving (anywhere on screen), like a
    // CG_DragPlayAnimation; the hint shows while it isn't touched.
    void Update()
    {
        if (!dragging)
            return;

        if (UsesSlices)
        {
            UpdateSliceInput();
            return;
        }

        bool paused = GameManager.instance != null && GameManager.instance.isPaused;

        if (Input.GetMouseButtonDown(0))
        {
            pressCounts = !paused && !IsPointerOverUI();
            lastPointer = Input.mousePosition;
        }

        bool held = pressCounts && Input.GetMouseButton(0);

        if (Hint != null && Hint.activeSelf != !held)
            Hint.SetActive(!held);

        if (held && (Input.mousePosition - lastPointer).sqrMagnitude >= MoveThreshold * MoveThreshold)
        {
            lastMoveTime = Time.time;
            lastPointer = Input.mousePosition;
        }

        bool drawing = held && !paused && Time.time - lastMoveTime <= StopDelay;

        SetDrawing(drawing);

        if (!drawing)
            return;

        TraceAt(Mathf.Min(traced + Time.deltaTime / Mathf.Max(TraceDuration, .01f), 1f));

        if (progressControl)
            UI_Manager.instance.SetProgressBar(traced);

        if (traced < 1f)
            return;

        dragging = false;
        SetDrawing(false);

        if (Hint != null)
            Hint.SetActive(false);

        Leave();
    }

    // Sound, vibration and dust on while the chalk draws.
    void SetDrawing(bool drawing)
    {
        Feedback.Set(drawing);

        if (Dust == null)
            return;

        if (drawing && !Dust.isEmitting)
            Dust.Play();
        else if (!drawing && Dust.isEmitting)
            Dust.Stop(true, ParticleSystemStopBehavior.StopEmitting);
    }

    void OnDisable()
    {
        if (UsesSlices)
        {
            DOTween.Kill(this);
            dragging = false;
            HideSlices();
        }
        SetDrawing(false);
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

    // Skips to the end (resuming past this step).
    public void ShowAll()
    {
        DOTween.Kill(this);

        dragging = false;
        HideSlices();
        SetDrawing(false);

        if (Hint != null)
            Hint.SetActive(false);

        if (Chalk != null)
            Chalk.gameObject.SetActive(false);

        if (Outline != null)
            Outline.maskInteraction = SpriteMaskInteraction.None;

        if (mask != null)
            mask.enabled = false;

        IsDone = true;
    }

    // Chalk position that puts its tip at p.
    Vector3 TipAt(Vector3 p)
    {
        Vector3 offset = Tip != null ? Tip.position - Chalk.position : Vector3.zero;
        Vector3 pos = p - offset;
        pos.z = Chalk.position.z;

        return pos;
    }

    int NearestPoint(Vector2 world)
    {
        int best = 0;
        float bestD = float.MaxValue;

        for (int i = 0; i < Points.Length; i++)
        {
            float d = ((Vector2)PathSpace.TransformPoint(Points[i]) - world).sqrMagnitude;

            if (d < bestD) { bestD = d; best = i; }
        }

        return best;
    }

    // A mask the size of the outline image (downsampled), painted where the tip has been.
    void SetupMask()
    {
        if (Outline == null)
            return;

        if (maskTex == null)
        {
            Sprite os = Outline.sprite;
            int ds = Mathf.Max(1, MaskDownsample);
            MaskGrid(os, ds, out int w, out int h);

            maskTex = new Texture2D(w, h, TextureFormat.RGBA32, false);
            maskTex.wrapMode = TextureWrapMode.Clamp;

            // Sized to cover the outline exactly (ppu / ds in the editor, where the grid is rect / ds).
            Vector2 pivot = new Vector2(os.pivot.x / os.rect.width, os.pivot.y / os.rect.height);
            Sprite maskSprite = Sprite.Create(maskTex, new Rect(0, 0, w, h), pivot, w * os.pixelsPerUnit / os.rect.width);

            var go = new GameObject("Chalk Mask");
            go.transform.SetParent(Outline.transform, false);

            mask = go.AddComponent<SpriteMask>();
            mask.sprite = maskSprite;
            mask.alphaCutoff = 0.5f;
            mask.isCustomRangeActive = true;
            mask.backSortingOrder = Outline.sortingOrder - 1;
            mask.frontSortingOrder = Outline.sortingOrder + 1; // [Luna] its front order is exclusive
        }

        // A new texture's contents are undefined, so it is always cleared. (Skipping it on a fresh texture in Luna left
        // SetPixel nothing to draw into: the chalk outline never appeared.)
        maskTex.SetPixels32(new Color32[maskTex.width * maskTex.height]);
        maskTex.Apply(false);
        hasLast = false;
        revealed = 0;

        int start = NearestPoint(StartNear);

        if (UsesSlices)
            BuildSliceRevealOrder();
        else if (orderStart != start)
            BuildRevealOrder(start);
        mask.enabled = true;

        Outline.gameObject.SetActive(true);
        Outline.maskInteraction = SpriteMaskInteraction.VisibleInsideMask;
    }

    // Each drawn pixel of the outline (per mask pixel) gets the point along the loop - from the start, 0..1 -
    // of the path segment nearest to it.
    void BuildRevealOrder(int start)
    {
        revealOrder = null;
        orderStart = start;

        Sprite os = Outline.sprite;

        int ds = Mathf.Max(1, MaskDownsample);
        // Without the bake (or, in the editor, a readable outline) it reveals around the tip instead (MarkRadius).
        bool baked = HasBake(os, ds);
#if UNITY_LUNA
        if (!baked)
            return;
#else
        if (os == null || (!baked && !os.texture.isReadable))
            return;
#endif

        int w = maskTex.width, h = maskTex.height, n = Points.Length;

        // the path in the outline's pixel space
        var path = new Vector2[n];

        for (int i = 0; i < n; i++)
        {
            Vector2 local = Outline.transform.InverseTransformPoint(PathSpace.TransformPoint(Points[i]));
            path[i] = local * os.pixelsPerUnit + os.pivot;
        }

        var order = new List<int>();
        var at = new List<float>();

        float cellX = os.rect.width / w, cellY = os.rect.height / h; // outline pixels per mask pixel (ds in the editor)
        foreach (int idx in DrawnMaskPixels(os, w, h, ds))
            {
                int mx = idx % w, my = idx / w;
                Vector2 p = new Vector2((mx + .5f) * cellX, (my + .5f) * cellY);
                float best = float.MaxValue, bestAt = 0f;

                for (int i = 0; i < n; i++)
                {
                    Vector2 a = path[i], b = path[(i + 1) % n], ab = b - a;
                    float f = ab.sqrMagnitude > 1e-6f ? Mathf.Clamp01(Vector2.Dot(p - a, ab) / ab.sqrMagnitude) : 0f;
                    float d = (a + ab * f - p).sqrMagnitude;

                    if (d < best)
                    {
                        best = d;
                        bestAt = (((i - start + n) % n) + f) / n;
                    }
                }

                order.Add(my * w + mx);
                at.Add(bestAt);
            }

        revealOrder = order.ToArray();
        revealAt = at.ToArray();
        LunaArray.Sort(revealAt, revealOrder);
    }

    // Mask pixels where the outline image has ink, baked in the editor (BakeDrawnPixels): a Luna build can't read
    // texture pixels at runtime - its GetPixels32 ran past the data ("Cannot read properties of undefined (reading 'a')")
    // and stopped the chalk step. With the bake the browser reveals exactly the editor's pixels, without reading any.
    // The bake's mask grid is kept with it: Luna rebuilds sprite.rect from the downscaled texture (568 x 1372 came back
    // as 570.6 x 1382.8), so a grid worked out from it there didn't line up with the bake - which was then ignored and
    // every mask pixel searched instead (the freeze before each chalk step).
    // Stored as runs - (first index, length) pairs, 28-38% of the numbers - because the playable's bundle holds every
    // serialized array as JSON text (twice: scene instance and prefab), and the raw list added 630 KB to it.
    [SerializeField, HideInInspector] int[] drawnRuns;
    [SerializeField, HideInInspector] int drawnW, drawnH, drawnDs;
    [System.NonSerialized] int[] drawnPixels; // drawnRuns expanded, once

    /// <summary>The bake fits this outline: same downsample and, allowing Luna's rounding (under 1% seen), the same grid.</summary>
    bool HasBake(Sprite os, int ds) =>
        os != null && drawnRuns != null && drawnRuns.Length > 0 && drawnDs == ds && drawnW > 0 && drawnH > 0 &&
        Mathf.Abs(os.rect.width / ds / drawnW - 1f) < .03f && Mathf.Abs(os.rect.height / ds / drawnH - 1f) < .03f;

    int[] BakedPixels()
    {
        if (drawnPixels != null)
            return drawnPixels;
        var list = new List<int>();
        for (int r = 0; r + 1 < drawnRuns.Length; r += 2)
            for (int i = 0; i < drawnRuns[r + 1]; i++)
                list.Add(drawnRuns[r] + i);
        drawnPixels = list.ToArray();
        return drawnPixels;
    }

    /// <summary>The mask grid: the bake's when there is one, else the outline's size over the downsample.</summary>
    void MaskGrid(Sprite os, int ds, out int w, out int h)
    {
        if (HasBake(os, ds)) { w = drawnW; h = drawnH; return; }
        w = Mathf.CeilToInt(os.rect.width / ds);
        h = Mathf.CeilToInt(os.rect.height / ds);
    }

    /// <summary>Indices (y * w + x) of the inked mask pixels: the bake when it fits, else read from the texture.</summary>
    int[] DrawnMaskPixels(Sprite os, int w, int h, int ds)
    {
        if (HasBake(os, ds) && w == drawnW && h == drawnH)
            return BakedPixels();

        Color32[] src = null;
#if !UNITY_LUNA
        if (os != null && os.texture.isReadable)
            src = os.texture.GetPixels32();
#endif
        var list = new List<int>();
        for (int y = 0; y < h; y++)
            for (int x = 0; x < w; x++)
                if (src == null || Drawn(src, os.texture.width, os.rect, x * ds, y * ds, ds))
                    list.Add(y * w + x);
        return list.ToArray();
    }

#if UNITY_EDITOR
    /// <summary>
    /// Stores which mask pixels the outline inks, for Luna builds. Returns true when it changed anything. A chalk
    /// that drives a SliceCutter (scissors) never builds a mask, so it keeps no bake.
    /// </summary>
    public bool BakeDrawnPixels()
    {
        Sprite os = Outline != null ? Outline.sprite : null;
        if (os == null || !os.texture.isReadable || SliceCutter != null)
        {
            bool had = drawnRuns != null && drawnRuns.Length > 0;
            drawnRuns = null;
            drawnPixels = null;
            drawnW = drawnH = drawnDs = 0;
            return had;
        }
        int ds = Mathf.Max(1, MaskDownsample);
        int w = Mathf.CeilToInt(os.rect.width / ds), h = Mathf.CeilToInt(os.rect.height / ds);
        Color32[] src = os.texture.GetPixels32();
        var list = new List<int>();
        for (int y = 0; y < h; y++)
            for (int x = 0; x < w; x++)
                if (Drawn(src, os.texture.width, os.rect, x * ds, y * ds, ds))
                    list.Add(y * w + x);
        var runs = new List<int>();
        for (int i = 0; i < list.Count; i++)
        {
            if (i > 0 && list[i] == list[i - 1] + 1) { runs[runs.Count - 1]++; continue; }
            runs.Add(list[i]);
            runs.Add(1);
        }
        int[] baked = runs.ToArray();
        if (drawnW == w && drawnH == h && drawnDs == ds && drawnRuns != null && System.Linq.Enumerable.SequenceEqual(baked, drawnRuns))
            return false;
        drawnRuns = baked;
        drawnPixels = null;
        drawnW = w;
        drawnH = h;
        drawnDs = ds;
        return true;
    }
#endif

    static bool Drawn(Color32[] src, int tw, Rect rect, int x0, int y0, int ds)
    {
        for (int y = y0; y < y0 + ds && y < rect.height; y++)
            for (int x = x0; x < x0 + ds && x < rect.width; x++)
                if (src[((int)rect.y + y) * tw + (int)rect.x + x].a > 20)
                    return true;

        return false;
    }

    void RevealUpTo(float t)
    {
        if (maskTex == null || revealed >= revealOrder.Length || revealAt[revealed] > t)
            return;

        int w = maskTex.width;
        var white = new Color32(255, 255, 255, 255);

        while (revealed < revealOrder.Length && revealAt[revealed] <= t)
        {
            int i = revealOrder[revealed++];
            maskTex.SetPixel(i % w, i / w, white);
        }

        maskTex.Apply(false);
    }

    void Mark(Vector3 world)
    {
        if (maskTex == null)
            return;

        Sprite os = Outline.sprite;
        float ds = os.rect.width / maskTex.width; // outline pixels per mask pixel (MaskDownsample in the editor)

        Vector2 local = Outline.transform.InverseTransformPoint(world);
        Vector2 px = (local * os.pixelsPerUnit + os.pivot) / ds;
        float r = MarkRadius / Mathf.Abs(Outline.transform.lossyScale.x) * os.pixelsPerUnit / ds;

        Vector2 from = hasLast ? lastPx : px;
        int steps = Mathf.Clamp(Mathf.CeilToInt(Vector2.Distance(from, px) / Mathf.Max(r * .5f, .5f)), 1, 200);

        for (int i = 1; i <= steps; i++)
            Stamp(Vector2.Lerp(from, px, (float)i / steps), r);

        lastPx = px;
        hasLast = true;

        maskTex.Apply(false);
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
        DOTween.Kill(this);

        if (sliceChalks != null)
            for (int i = 0; i < sliceChalks.Length; i++)
                if (sliceChalks[i] != null) Destroy(sliceChalks[i].gameObject);

        if (maskTex != null)
            Destroy(maskTex);
    }
}
