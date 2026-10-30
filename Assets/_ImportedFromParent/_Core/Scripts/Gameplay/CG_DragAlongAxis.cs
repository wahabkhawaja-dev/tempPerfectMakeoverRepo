using UnityEngine;
using UnityEngine.Events;

[System.Serializable]
public class FloatEvent : UnityEvent<float> { }

// Turns a CG_BasicDrag that is clamped to a line (From -> To) into a 0..1 step progress.
// Two modes:
//  - RequiredStrokes == 0: one pass - progress is the furthest point reached along the line
//    (unrolling fabric, pulling a measuring tape out, unzipping a bag).
//  - RequiredStrokes > 0: back and forth - every time the handle reaches the far end, then the
//    near end again, counts as one stroke each (the loom's beater bar going up and down).
// Reports through OnProgress / OnStroke and fires OnComplete once.
public class CG_DragAlongAxis : MonoBehaviour
{
    [Space()]
    public BasicDrag Handle;

    [Space()]
    public Transform From;
    public Transform To;

    [Space()]
    public int RequiredStrokes = 0;

    [Range(0.5f, 1f)]
    public float StrokeThreshold = 0.85f;

    [Space()]
    [Tooltip("Single pass mode: progress at which the step counts as done.")]
    [Range(0.5f, 1f)]
    public float CompleteAt = 0.97f;

    [Tooltip("Single pass mode: the handle can't be moved back towards From once pulled (a tape only pulls out).")]
    public bool OneWay;

    [Space()]
    public bool progressControl = true;

    [Space()]
    [Tooltip("Sound and vibration while the handle is being moved along the line (stops when it stops, even if still held).")]
    public CG_LoopFeedback Feedback = new CG_LoopFeedback();

    [Tooltip("Keeps the feedback going this long after the handle last moved, so tiny pauses in a drag don't stutter.")]
    public float StopDelay = 0.12f;

    [Space()]
    public FloatEvent OnProgress;
    public UnityEvent OnStroke;
    public UnityEvent OnComplete;

    public float Progress { get; private set; }
    public int Strokes { get; private set; }
    public bool IsDone { get; private set; }

    bool atFarEnd;
    float lastReported = -1f;
    float lastT = -1f;
    float lastMoveTime = -1f;

    // Handle position along From -> To, 0..1.
    public float CurrentT
    {
        get
        {
            Vector3 a = From.position;
            Vector3 b = To.position;
            Vector3 ab = b - a;

            float len = ab.sqrMagnitude;

            if (len < 0.0001f)
                return 0f;

            return Mathf.Clamp01(Vector3.Dot(Handle.transform.position - a, ab) / len);
        }
    }

    void Update()
    {
        if (IsDone || Handle == null || From == null || To == null)
            return;

        float t = CurrentT;

        // moving along the line (held, and the handle has gone somewhere since last frame)
        if (Handle.isDragging && lastT >= 0f && Mathf.Abs(t - lastT) > 0.0005f)
            lastMoveTime = Time.time;

        lastT = t;
        Feedback.Set(Handle.isDragging && Time.time - lastMoveTime <= StopDelay);

        if (RequiredStrokes > 0)
        {
            if (!atFarEnd && t >= StrokeThreshold)
            {
                atFarEnd = true;
                CountStroke();
            }
            else if (atFarEnd && t <= 1f - StrokeThreshold)
            {
                atFarEnd = false;
                CountStroke();
            }

            Progress = Mathf.Clamp01((float)Strokes / RequiredStrokes);
        }
        else
        {
            Progress = Mathf.Max(Progress, t);
        }

        if (Mathf.Abs(Progress - lastReported) > 0.005f)
        {
            lastReported = Progress;

            OnProgress?.Invoke(Progress);

            if (progressControl)
                UI_Manager.instance.SetProgressBar(Progress);
        }

        bool finished = RequiredStrokes > 0 ? Strokes >= RequiredStrokes : Progress >= CompleteAt;

        if (finished)
        {
            IsDone = true;
            Feedback.Set(false);

            Progress = 1f;

            OnProgress?.Invoke(1f);

            if (progressControl)
                UI_Manager.instance.SetProgressBar(1f);

            OnComplete?.Invoke();
        }
    }

    void OnDisable()
    {
        Feedback.Set(false);
    }

    // After the drag has moved the handle this frame: one way only, it is held at the furthest point reached.
    void LateUpdate()
    {
        if (!OneWay || RequiredStrokes > 0 || Handle == null || From == null || To == null)
            return;

        if (CurrentT < Progress)
        {
            Vector3 p = Vector3.Lerp(From.position, To.position, Progress);
            p.z = Handle.transform.position.z;

            Handle.transform.position = p;
        }
    }

    void CountStroke()
    {
        Strokes++;

        OnStroke?.Invoke();
    }
}
