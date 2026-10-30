// [Luna] Adapted for playables by Cross-Project Prefab Importer.
using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

// Level4_2 step 1 - the loom, worked like a real one:
//   1. the shuttle (Handle) crosses the warp by itself just below the woven edge, laying a new weft
//      thread behind it, then drops a little and crosses back, and so on - a bunch of ThreadsPerPass
//      threads (the first pass comes in from off the right side);
//   2. the player drags the beater bar (Bar Plank) up - it catches the bunch and pushes it up into the
//      woven edge, packing the threads over the next row; the woven fabric appears over them as they
//      go up (the threads are drawn under it, so they turn into the fabric); The bar follows the finger freely (dragged anywhere on screen, smoothed) the whole
//      step - it only can't be pushed into the woven fabric;
//   3. bringing the bar back down, the bunch fades (the row is woven in); then the shuttle drops and
//      lays the next bunch, and so on for Passes rows.
// The fabric is woven from WovenTopY down to WovenBottomY - by default the top of the bar at rest, so
// after the last pass the fabric reaches all the way down to the bar.
public class CG_Lvl4_2_Loom : MonoBehaviour
{
    [Space()]
    [Tooltip("Number of shuttle passes / beats.")]
    public int Passes = 6;

    [Header("----------------- BEATER BAR ----------------------")]
    [Space()]
    public BasicDrag Plank;
    public BD_Clamp PlankClamp;
    public GameObject PlankIndication;

    [Space()]
    [Tooltip("Where the bar rests - it is beaten up from here and has to come back down to it.")]
    public float PlankRestY = 0.203f;

    public float BeatTolerance = 0.05f;

    [Tooltip("How softly the bar follows the finger (0 = locked to it).")]
    public float PlankSmoothTime = 0.05f;

    [Header("----------------- SHUTTLE + WEFT ----------------------")]
    [Space()]
    public Transform Shuttle;
    public SpriteRenderer Weft;

    [Space()]
    public float ShuttleStartX = 2.3f;
    public float ShuttleLeftX = -1.077f;
    public float ShuttleRightX = 1.15f;

    [Space()]
    [Tooltip("Left / right edges of the visible woven fabric - a laid thread starts exactly at the edge the shuttle entered from.")]
    public float WarpLeftX = -0.78f;
    public float WarpRightX = 0.85f;

    [Tooltip("The reel inside the shuttle - the other end of a laid thread (and of the yarn to the ball). Empty = the shuttle's centre.")]
    public Transform Reel;

    [Space()]
    [Tooltip("World Y the weaving starts at (top of the fabric).")]
    public float WovenTopY = 1.796f;

    [Tooltip("World Y the weaving ends at. 0 or less = LastRowGap above the top of the bar at rest.")]
    public float WovenBottomY = 0f;

    [Tooltip("Gap (world) left between the last row and the bar at rest, so the bar still has to be pushed up for the last bunch.")]
    public float LastRowGap = 0.2f;

    [Space()]
    [Tooltip("Threads laid per pass - the shuttle goes across, a little down, back, a little down, ...")]
    public int ThreadsPerPass = 7;

    [Tooltip("How far (world) below its row a bunch is laid - how far the bar pushes it up. Less when there is no room above the bar.")]
    public float LaidDrop = 0.25f;

    [Tooltip("The same for the first bunch - 0: laid right in its row at the top, the bar just beats it.")]
    public float FirstLaidDrop = 0.12f;

    [Tooltip("Gap (world) between the first bunch's threads once beaten - small, so the bar goes right up to the top of the loom.")]
    public float FirstPackedSpacing = 0.015f;

    [Tooltip("A woven-in bunch fades over this long once the bar is back down.")]
    public float ThreadFade = 0.25f;

    [Space()]
    [Tooltip("One crossing of the shuttle (one thread).")]
    public float CrossDuration = 0.15f;

    [Tooltip("The shuttle sliding in from off the right before the first crossing.")]
    public float EnterDuration = 0.6f;

    [Tooltip("Shuttle dropping to the next row.")]
    public float DropDuration = 0.15f;

    [Tooltip("Shuttle dropping to the next thread of the same bunch.")]
    public float ThreadDropDuration = 0.04f;

    [Space()]
    [Tooltip("Yarn from the shuttle down to the ball (CG_ProceduralRope) - on while the shuttle is on the loom.")]
    public GameObject Wire;

    [Tooltip("Drag hint - shown while the player has to move the bar and isn't touching it.")]
    public GameObject DragHint;

    [Header("----------------- FABRIC ----------------------")]
    [Space()]
    public SpriteRenderer Loomed;
    public SpriteMask LoomMask;

    [Tooltip("Smoothing time of the woven fabric following the bar down (0 = locked to it).")]
    public float RevealSmoothTime = 0.04f;

    [Space()]
    public bool progressControl = true;

    [Space()]
    public UnityEvent OnPassLaid;
    public UnityEvent OnBeat;
    public UnityEvent OnComplete;

    public int PassesDone { get; private set; }
    public bool IsDone { get; private set; }

    // Mask fill once the whole step is woven.
    public float FinalFill
    {
        get { return FillAt(Edge(Passes)); }
    }

    enum State { Idle, Crossing, Pushing, Pressing }

    State state = State.Idle;

    bool shuttleOnLeft;
    bool plankInput;
    bool plankHeld;
    float plankTargetY;
    float plankVel;
    float lastPointerY;
    float fill;
    float fillTarget;
    float fillVel;

    // The bunch: wefts[0] is Weft itself (laid first, the top one), the rest are copies of it.
    SpriteRenderer[] wefts;
    int threadIndex;

    // The bar has been below this pass's thread - only then can it catch it and push it up.
    bool threadCaught;

    float PlankHalf
    {
        get
        {
            var sr = Plank != null ? Plank.GetComponent<SpriteRenderer>() : null;

            return sr != null ? sr.bounds.extents.y : 0.06f;
        }
    }

    float BottomY
    {
        get { return WovenBottomY > 0f ? WovenBottomY : PlankRestY + PlankHalf + LastRowGap; }
    }

    // Woven edge after k passes (k = 0 .. Passes).
    float Edge(int k)
    {
        int n = Mathf.Max(Passes, 1);

        return Mathf.Lerp(WovenTopY, BottomY, (float)Mathf.Clamp(k, 0, n) / n);
    }

    // Height the shuttle lays `pass`'s first (top) thread at.
    public float ShedY(int pass)
    {
        return LaidY(pass, 0);
    }

    float FillAt(float edgeY)
    {
        Bounds b = Loomed.bounds;

        return Mathf.Clamp01((b.max.y - edgeY) / b.size.y);
    }

    float WeftHalf
    {
        get { return Weft != null ? Weft.bounds.extents.y : 0.03f; }
    }

    int ThreadCount
    {
        get { return Mathf.Max(1, ThreadsPerPass); }
    }

    // Gap between packed threads: the bunch exactly covers its row, top thread at the woven edge, lowest
    // at the next edge - so it covers the fabric that appears there.
    float RowStep(int pass)
    {
        int n = ThreadCount;

        return n > 1 ? Mathf.Max(0f, Edge(pass) - Edge(pass + 1) - 2f * WeftHalf) / (n - 1) : 0f;
    }

    // ...except the first bunch, which the bar beats right up to the top of the loom, packed tight.
    float PackedStep(int pass)
    {
        return pass == 0 ? Mathf.Min(FirstPackedSpacing, RowStep(pass)) : RowStep(pass);
    }

    // Where thread j (0 = the first laid, the top one) of `pass`'s bunch is pushed to.
    float PackedY(int pass, int j)
    {
        return Edge(pass) - WeftHalf - j * PackedStep(pass);
    }

    // How far below its row the bunch is laid - never into the bar at rest.
    float Drop(int pass)
    {
        float room = Edge(pass) - WeftHalf - (ThreadCount - 1) * RowStep(pass) - WeftHalf - (PlankRestY + PlankHalf) - 0.03f;

        return Mathf.Clamp(pass == 0 ? FirstLaidDrop : LaidDrop, 0f, Mathf.Max(room, 0f));
    }

    // Where thread j of `pass`'s bunch is laid: spread over its row, Drop lower.
    float LaidY(int pass, int j)
    {
        return Edge(pass) - WeftHalf - j * RowStep(pass) - Drop(pass);
    }

    // Bar centre when it has pushed the bunch up into place (the lowest thread rides on the bar's top).
    float PlankTopStop
    {
        get { return PackedY(PassesDone, ThreadCount - 1) - WeftHalf - PlankHalf; }
    }

    void EnsureWefts()
    {
        int n = ThreadCount;

        if (wefts != null && wefts.Length == n)
            return;

        wefts = new SpriteRenderer[n];
        wefts[0] = Weft;

        // copies of Weft named "<Weft> 2", "<Weft> 3", ... - reused if they are already there (the baked step 1
        // animation points at them), made otherwise
        for (int i = 1; i < n; i++)
        {
            string name = Weft.name + " " + (i + 1);
            Transform existing = Weft.transform.parent.Find(name);

            wefts[i] = existing != null ? existing.GetComponent<SpriteRenderer>() : Instantiate(Weft.gameObject, Weft.transform.parent).GetComponent<SpriteRenderer>();
            wefts[i].name = name;
            wefts[i].gameObject.SetActive(false);
        }
    }

    // Starts step 1: the first pass comes in from the right.
    public void Begin()
    {
        if (state != State.Idle || IsDone)
            return;

        PassesDone = 0;
        fill = fillTarget = FillAt(Edge(0));
        fillVel = 0f;

        CG_Level4_Dress.FillMask(LoomMask, Loomed, fill, true);

        EnsureWefts();
        threadIndex = 0;

        // The bar uses its own free-hand input (below), not CG_BasicDrag's.
        Plank.canDrag = false;

        plankTargetY = Plank.transform.position.y;
        plankVel = 0f;
        plankInput = true;

        Shuttle.gameObject.SetActive(true);
        Shuttle.position = new Vector3(ShuttleStartX, LaidY(0, 0), Shuttle.position.z);

        // The yarn starts at the shuttle, so it comes in with it from the right.
        if (Wire != null)
            Wire.SetActive(true);

        // It slides in from off the right to its place beside the loom first, then crosses with the first thread.
        state = State.Crossing;

        Shuttle.DOKill();
        Shuttle.DOMoveX(ShuttleRightX, EnterDuration).SetEase(Ease.OutCubic)
            .OnComplete(() => Cross(ShuttleRightX, ShuttleLeftX, WarpRightX));

        DOVirtual.DelayedCall(.2f, () => 
        {
            PlankIndication.SetActive(true);
        });
    }

    // Lays the bunch's next thread from whichever side the shuttle is on.
    void CrossFromSide()
    {
        if (shuttleOnLeft)
            Cross(ShuttleLeftX, ShuttleRightX, WarpLeftX);
        else
            Cross(ShuttleRightX, ShuttleLeftX, WarpRightX);
    }

    // Shuttle runs from -> to; the weft is anchored at the warp edge it entered from and reaches the shuttle.
    // After each thread it drops a little and crosses back, until the bunch is laid.
    void Cross(float fromX, float toX, float anchorX)
    {
        state = State.Crossing;

        SpriteRenderer weft = wefts[threadIndex];
        float y = LaidY(PassesDone, threadIndex);

        weft.gameObject.SetActive(true);
        weft.DOKill();
        SetWeftAlpha(weft, 1f);
        SetWeft(weft, anchorX, anchorX, y);

        bool fromRight = anchorX > (WarpLeftX + WarpRightX) * .5f;

        Shuttle.DOKill();
        Shuttle.position = new Vector3(fromX, y, Shuttle.position.z);
        Shuttle.DOMoveX(toX, CrossDuration).SetEase(Ease.OutCubic)
            .OnUpdate(() =>
            {
                // Never longer than the warp while it is being laid either.
                float end = Mathf.Clamp(WeftEnd(anchorX, fromRight), WarpLeftX, WarpRightX);

                SetWeft(weft, anchorX, end, y);
            })
            .OnComplete(() =>
            {
                shuttleOnLeft = toX < 0f;

                // Laid: the thread spans the warp exactly, edge to edge (the yarn on to the shuttle is the Wire).
                SetWeft(weft, WarpLeftX, WarpRightX, y);

                if (threadIndex < wefts.Length - 1)
                {
                    threadIndex++;

                    Shuttle.DOMoveY(LaidY(PassesDone, threadIndex), ThreadDropDuration).SetEase(Ease.OutQuad)
                        .OnComplete(CrossFromSide);

                    return;
                }

                OnPassLaid?.Invoke();

                ArmBeat();
            });
    }

    // A laid thread runs from the fabric's edge it entered by to the shuttle's reel - nothing is laid
    // until the reel has passed that edge.
    float WeftEnd(float anchorX, bool fromRight)
    {
        float reelX = Reel != null ? Reel.position.x : Shuttle.position.x;

        return fromRight ? Mathf.Min(reelX, anchorX) : Mathf.Max(reelX, anchorX);
    }

    // Weft is a Tiled sprite: its width changes, its texture repeats instead of stretching.
    static void SetWeft(SpriteRenderer weft, float x0, float x1, float y)
    {
        Transform t = weft.transform;
        t.position = new Vector3((x0 + x1) * .5f, y, t.position.z);

        float lossyX = Mathf.Max(Mathf.Abs(t.lossyScale.x), 0.0001f);

        weft.size = new Vector2(Mathf.Abs(x1 - x0) / lossyX, weft.size.y);
    }

    static void SetWeftY(SpriteRenderer weft, float y)
    {
        Transform t = weft.transform;
        t.position = new Vector3(t.position.x, y, t.position.z);
    }

    static void SetWeftAlpha(SpriteRenderer weft, float a)
    {
        Color c = weft.color;
        c.a = a;
        weft.color = c;
    }

    void ArmBeat()
    {
        // A bar that is already up when the thread is laid has to come back under it first.
        threadCaught = false;

        state = State.Pushing;
    }

    // Free-hand bar: dragging anywhere on screen moves it up/down by the finger's movement, between its
    // rest and the woven edge; the bar eases after that target so it never jerks or sticks.
    void UpdatePlank()
    {
        if (!plankInput)
            return;

        Camera cam = Camera.main;

        bool paused = GameManager.instance != null && GameManager.instance.isPaused;

        if (Input.GetMouseButtonDown(0) && !paused && !IsPointerOverUI())
        {
            plankHeld = true;
            lastPointerY = cam.ScreenToWorldPoint(Input.mousePosition).y;

            PlankIndication.SetActive(false);
        }

        if (Input.GetMouseButtonUp(0))
        {
            if (IsDone)
                return;

            PlankIndication.SetActive(true);

            plankHeld = false;
        }

        if (plankHeld && !paused)
        {
            float pointerY = cam.ScreenToWorldPoint(Input.mousePosition).y;

            plankTargetY += pointerY - lastPointerY;
            lastPointerY = pointerY;
        }

        plankTargetY = Mathf.Clamp(plankTargetY, PlankRestY, PlankTopStop);

        Transform t = Plank.transform;
        float y = PlankSmoothTime > 0f ? Mathf.SmoothDamp(t.position.y, plankTargetY, ref plankVel, PlankSmoothTime) : plankTargetY;

        t.position = new Vector3(t.position.x, Mathf.Clamp(y, PlankRestY, PlankTopStop), t.position.z);
    }

    void UpdateHint()
    {
        if (DragHint == null)
            return;

        bool needed = !IsDone && !plankHeld && (state == State.Pushing || state == State.Pressing);

        if (DragHint.activeSelf != needed)
            DragHint.SetActive(needed);
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

    void Update()
    {
        UpdatePlank();

        UpdateBeat();

        UpdateHint();

        if (!Mathf.Approximately(fill, fillTarget))
        {
            fill = RevealSmoothTime > 0f ? Mathf.SmoothDamp(fill, fillTarget, ref fillVel, RevealSmoothTime) : fillTarget;

            if (Mathf.Abs(fill - fillTarget) < 0.0005f)
                fill = fillTarget;

            CG_Level4_Dress.FillMask(LoomMask, Loomed, fill, true);
        }
    }

    void UpdateBeat()
    {
        if (IsDone || (state != State.Pushing && state != State.Pressing))
            return;

        float y = Plank.transform.position.y;
        float barTop = y + PlankHalf;

        float edge = Edge(PassesDone);
        float nextEdge = Edge(PassesDone + 1);

        if (state == State.Pushing)
        {
            int n = wefts.Length;
            float lowestLaid = LaidY(PassesDone, n - 1);

            if (!threadCaught)
            {
                if (barTop > lowestLaid - WeftHalf + BeatTolerance)
                    return;

                threadCaught = true;
            }

            // Going up: the bar catches the lowest thread and carries the bunch up into its row - each
            // thread starts moving when the one below reaches it, so they pack together.
            float step = PackedStep(PassesDone);
            float lowestY = lowestLaid;

            for (int j = 0; j < n; j++)
            {
                float laid = LaidY(PassesDone, j);
                float pushed = barTop + WeftHalf + (n - 1 - j) * step;
                float ty = Mathf.Min(Mathf.Max(laid, pushed), PackedY(PassesDone, j));

                SetWeftY(wefts[j], ty);

                if (j == n - 1)
                    lowestY = ty;
            }

            // How far the beat has got: by the bunch moving up, or (a bunch laid in place) by the bar coming up to it.
            float lowestTop = PackedY(PassesDone, n - 1);
            float pushed01 = lowestTop - lowestLaid > 0.0001f
                ? Mathf.Clamp01((lowestY - lowestLaid) / (lowestTop - lowestLaid))
                : Mathf.InverseLerp(PlankRestY, PlankTopStop, y);

            // The row's fabric appears under the bunch as it goes up (the threads are drawn over it).
            fillTarget = Mathf.Max(fillTarget, FillAt(Mathf.Lerp(edge, nextEdge, pushed01)));

            if (progressControl)
                UI_Manager.instance.SetProgressBar((PassesDone + .8f * pushed01) / Passes);

            // Done only once the bar has really reached the bunch - never on its own.
            if (y >= PlankTopStop - BeatTolerance * .5f)
            {
                state = State.Pressing;

                for (int j = 0; j < n; j++)
                    SetWeftY(wefts[j], PackedY(PassesDone, j));

                fillTarget = Mathf.Max(fillTarget, FillAt(nextEdge));

                { /* [Luna] stripped: CG_VibrationManager.instance.MediumImpact(); */ }

                OnBeat?.Invoke();
            }

            return;
        }

        // Pressing: the bar comes back down to its rest, leaving the bunch over its row.
        if (progressControl)
            UI_Manager.instance.SetProgressBar((PassesDone + .8f + .2f * Mathf.InverseLerp(PlankTopStop, PlankRestY, y)) / Passes);

        if (y <= PlankRestY + BeatTolerance)
            FinishBeat();
    }

    void FinishBeat()
    {
        fillTarget = Mathf.Max(fillTarget, FillAt(Edge(PassesDone + 1)));

        PassesDone++;

        if (progressControl)
            UI_Manager.instance.SetProgressBar((float)PassesDone / Passes);

        // The row is woven in: its bunch (which covered it while it appeared) fades.
        foreach (var weft in wefts)
        {
            weft.DOKill();
            weft.DOFade(0f, ThreadFade);
        }

        if (PassesDone >= Passes)
        {
            IsDone = true;
            state = State.Idle;

            plankInput = false;
            plankHeld = false;

            Shuttle.DOKill();
            Shuttle.DOMoveX(shuttleOnLeft ? ShuttleLeftX - 2f : ShuttleRightX + 2f, .5f).SetEase(Ease.InCubic).OnComplete(() =>
            {
                if (Wire != null)
                    Wire.SetActive(false);
            });

            if (DragHint != null)
                DragHint.SetActive(false);

            OnComplete?.Invoke();

            PlankIndication.SetActive(false);

            return;
        }

        // Next row: the shuttle drops down to it, then lays the next bunch starting the other way.
        state = State.Crossing;
        threadIndex = 0;

        Shuttle.DOKill();
        Shuttle.DOMoveY(LaidY(PassesDone, 0), DropDuration).SetEase(Ease.OutQuad).SetDelay(ThreadFade).OnComplete(CrossFromSide);
    }
}
