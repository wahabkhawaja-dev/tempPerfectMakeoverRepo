// [Luna] Adapted for playables by Cross-Project Prefab Importer.
using UnityEngine;
using UnityEngine.Events;

// A whole step as one predefined animation: it plays while the player drags (finger down and moving,
// anywhere on screen) and pauses when they stop or let go. Optionally the start of it (up to IntroTime -
// a tool coming into view, say) plays by itself first, and the end (the last OutroTime) by itself once the
// drag gets there - the step reads 100% and takes no more input from then on. The clip is driven through Animator (its state
// named like the clip), held at speed 0 and set to the playhead every frame, so it can be scrubbed and still
// switch objects on and off; the Animator is only on while this runs.
public class CG_DragPlayAnimation : MonoBehaviour
{
    [Space()]
    public Animator Animator;
    public AnimationClip Clip;

    [Tooltip("Clip seconds played per second of dragging.")]
    public float Speed = 1f;

    [Tooltip("The clip plays by itself up to this time (seconds) when the step begins; dragging takes over from there.")]
    public float IntroTime;

    [Tooltip("The last this many seconds of the clip play by themselves once the drag gets there - the step reads 100% and takes no more input from that point (for a clip whose end only settles things).")]
    public float OutroTime;

    [Tooltip("How far (pixels) the finger has to move to count as dragging.")]
    public float MoveThreshold = 2f;

    [Tooltip("Keeps playing this long after the finger last moved, so tiny pauses in a drag don't stutter.")]
    public float StopDelay = 0.12f;

    [Space()]
    [Tooltip("Hint - hidden as soon as the player touches, shown again when they let go.")]
    public GameObject Hint;

    [Tooltip("Sound and vibration while the animation plays from a drag (stops with it).")]
    public CG_LoopFeedback Feedback = new CG_LoopFeedback();

    [Tooltip("The sound only starts once the finger has moved this far (pixels) in one touch, so a tap makes none.")]
    public float SoundMinDrag = 12f;

    public bool progressControl = true;

    [Space()]
    public UnityEvent OnComplete = new UnityEvent();

    public bool IsPlaying { get; private set; }
    public bool IsDone { get; private set; }

    public float Progress
    {
        get { return Clip != null && Clip.length > 0f ? time / Clip.length : 0f; }
    }

    bool active;
    bool intro;
    bool outro;
    bool held;
    bool pressCounts;
    float time;
    float lastMoveTime = -1f;
    Vector3 lastPointer;
    Vector3 pressStart;
    bool pressMoved;

    // Shows the first frame and starts listening for drags.
    public void Begin()
    {
        if (Clip == null || Animator == null)
            return;

        time = 0f;
        IsDone = false;
        active = true;
        intro = IntroTime > 0f;
        outro = false;

        Animator.enabled = true;
        Animator.speed = 0.0001f;
        Show(0f);

        if (Hint != null)
            Hint.SetActive(!intro);
    }

    // Jumps to the last frame (resuming past this step).
    public void ShowEnd()
    {
        if (Clip == null || Animator == null)
            return;

        time = Clip.length;
        active = false;
        outro = false;
        IsDone = true;

        Animator.enabled = true;
        Animator.speed = 0.0001f;
        Show(Clip.length);
        Animator.enabled = false;

        if (Hint != null)
            Hint.SetActive(false);
    }

    void Show(float t)
    {
        Animator.Play(Clip.name, 0, Clip.length > 0f ? t / Clip.length : 0f);
        Animator.Update(0f);
    }

    void Update()
    {
        if (!active || IsDone)
            return;

        bool paused = GameManager.instance != null && GameManager.instance.isPaused;

        // the end plays by itself - no more input once the player has got there
        if (outro)
        {
            if (paused)
                return;

            time = Mathf.Min(time + Time.deltaTime * Speed, Clip.length);
            Show(time);

            if (time >= Clip.length)
                Finish();

            return;
        }

        // Finger state, read every frame (also during the intro, so a touch then still counts): down = held,
        // unless the touch began on the UI.
        if (Input.GetMouseButtonDown(0))
        {
            pressCounts = !paused && !IsPointerOverUI();
            lastPointer = Input.mousePosition;
            pressStart = Input.mousePosition;
            pressMoved = false;
        }

        held = pressCounts && Input.GetMouseButton(0);

        if (!held)
            pressMoved = false;
        else if (!pressMoved && (Input.mousePosition - pressStart).sqrMagnitude >= SoundMinDrag * SoundMinDrag)
            pressMoved = true;

        // The hint: hidden while touching (and during the intro), shown when not.
        if (Hint != null && Hint.activeSelf != (!held && !intro))
            Hint.SetActive(!held && !intro);

        // the start plays by itself
        if (intro)
        {
            Feedback.Set(false);

            if (paused)
                return;

            time = Mathf.Min(time + Time.deltaTime * Speed, IntroTime);
            Show(time);

            if (time < IntroTime)
                return;

            intro = false;
        }

        if (held && (Input.mousePosition - lastPointer).sqrMagnitude >= MoveThreshold * MoveThreshold)
        {
            lastMoveTime = Time.time;
            lastPointer = Input.mousePosition;
        }

        IsPlaying = held && !paused && Time.time - lastMoveTime <= StopDelay;

        // the sound goes with the animation: on while it plays from a real drag, off the moment it stops
        Feedback.Set(IsPlaying && pressMoved);

        if (!IsPlaying)
            return;

        float dragEnd = Mathf.Max(Clip.length - OutroTime, 0f);

        time = Mathf.Min(time + Time.deltaTime * Speed, dragEnd);

        Show(time);

        if (progressControl)
            UI_Manager.instance.SetProgressBar(dragEnd > 0f ? time / dragEnd : 1f);

        if (time < dragEnd)
            return;

        // dragged all the way: input stops here (100%), the rest plays out
        IsPlaying = false;
        Feedback.Set(false);

        if (Hint != null)
            Hint.SetActive(false);

        if (time >= Clip.length)
            Finish();
        else
            outro = true;
    }

    void Finish()
    {
        IsDone = true;
        active = false;
        IsPlaying = false;
        outro = false;
        Feedback.Set(false);

        // the last frame stays as it is
        Animator.enabled = false;

        if (Hint != null)
            Hint.SetActive(false);

        OnComplete?.Invoke();
    }

    void OnDisable()
    {
        Feedback.Set(false);
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
}
