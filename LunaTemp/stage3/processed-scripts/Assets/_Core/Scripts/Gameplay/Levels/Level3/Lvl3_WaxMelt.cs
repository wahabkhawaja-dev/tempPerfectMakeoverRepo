using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

/// <summary>
/// Melts the lipstick sitting in the spoon.
///
/// Three things together sell it, and a plain cross-fade between sprites gives none of
/// them:
///
///   1. The solid pieces collapse - they squash, shrink and sink as they go, so they read
///      as slumping into the puddle rather than dissolving where they stand.
///   2. The puddle grows into place - each wax stage fades in flatter and narrower than it
///      ends up, spreading as it takes over.
///   3. The puddle behaves like liquid - it lags behind the spoon, tilts into the turn and
///      wobbles on a damped spring, then settles. This is what makes it look wet, and it
///      comes free while the player shakes the spoon.
///
/// Progress is a plain 0-1 value, so it can run itself with Play() or be driven frame by
/// frame with SetProgress() from the shake.
/// </summary>
public class Lvl3_WaxMelt : MonoBehaviour
{
    [System.Serializable]
    public class Stage
    {
        public SpriteRenderer rend;

        [Tooltip("Progress at which this stage is fully faded in.")]
        [Range(0f, 1f)] public float at = 0.5f;

        [HideInInspector] public Color startColor;
        [HideInInspector] public Vector3 startScale;
        [HideInInspector] public Vector3 startPos;

        // Rest pose for this frame, before slosh is added on top.
        [HideInInspector] public Vector3 restScale;
        [HideInInspector] public Vector3 restPos;
        [HideInInspector] public bool visible;
    }

    [System.Serializable]
    public class Solid
    {
        public SpriteRenderer rend;

        [HideInInspector] public Color startColor;
        [HideInInspector] public Vector3 startScale;
        [HideInInspector] public Vector3 startPos;
    }

    [Header("Solid pieces, in melt order")]
    [Tooltip("They go one after another, not together.")]
    public Solid[] solidPieces;

    [Tooltip("Progress by which the last solid piece is gone. The pieces split this window evenly.")]
    [Range(0.1f, 1f)] public float solidsGoneBy = 0.6f;

    [Tooltip("How far a piece sinks while it melts, in local units.")]
    public float solidSink = 0.35f;

    [Tooltip("How much a piece flattens as it softens. 0.4 means it loses 40% of its height.")]
    [Range(0f, 0.9f)] public float solidSquash = 0.4f;

    [Tooltip("How much a piece shrinks overall as it melts away.")]
    [Range(0f, 0.9f)] public float solidShrink = 0.25f;

    [Header("Puddle stages, in order")]
    public Stage[] stages;

    [Tooltip("How flat and narrow a stage starts before it spreads into place. 0.7 is noticeably small.")]
    [Range(0.3f, 1f)] public float stageGrowFrom = 0.72f;

    [Tooltip("How far the puddle settles down over the whole melt.")]
    public float sink = 0.08f;

    [Tooltip("How much wider the puddle spreads by the end.")]
    public float spread = 0.14f;

    [Tooltip("How much shorter it gets as it spreads.")]
    public float flatten = 0.1f;

    [Header("Liquid")]
    public bool slosh = true;

    [Tooltip("How far the puddle lags behind the spoon, per unit of spoon speed.")]
    public float sloshAmount = 0.05f;

    [Tooltip("How hard it springs back. Higher is stiffer and quicker.")]
    public float sloshSpring = 55f;

    [Tooltip("How quickly the wobble dies down. Lower wobbles longer.")]
    public float sloshDamp = 7f;

    [Tooltip("Degrees the surface tilts at full slosh.")]
    public float sloshTilt = 8f;

    [Tooltip("How much it squashes as it sloshes.")]
    public float sloshSquash = 0.12f;

    [Tooltip("Furthest the puddle may lag, so a hard shake cannot throw it out of the spoon.")]
    public float sloshLimit = 0.35f;

    [Header("Idle wobble")]
    [Tooltip("How much the melted surface keeps moving when the spoon is still.")]
    public float idleWobble = 0.015f;
    public float idleWobbleSpeed = 2.5f;

    [Header("Timing")]
    public float meltDuration = 2.5f;
    public Ease meltEase = Ease.InOutSine;

    [Header("Audio")]
    public AudioClip meltClip;

    [Header("Events")]
    public UnityEvent OnMeltStarted;
    public UnityEvent OnMelted;

    float progress;
    bool started;
    bool finished;

    Vector3 lastWorldPos;
    float sloshOffset;
    float sloshVel;
    bool hasLastPos;

    public float Progress { get { return progress; } }
    public bool IsMelted { get { return finished; } }

    void Start()
    {
        for (int i = 0; i < solidPieces.Length; i++)
        {
            Solid s = solidPieces[i];

            if (s.rend == null)
                continue;

            s.startColor = s.rend.color;
            if (s.startColor.a < 0.01f)
                s.startColor = Color.white;

            s.startScale = s.rend.transform.localScale;
            s.startPos = s.rend.transform.localPosition;
        }

        // Later stages have to draw over earlier ones, and the whole puddle has to stay
        // under the solid pieces. Orders step DOWN from the pieces rather than up, because
        // going up would push the wax out of the spoon mask's range and lose its masking.
        int topOrder = stages.Length > 0 && stages[stages.Length - 1].rend != null
            ? stages[stages.Length - 1].rend.sortingOrder
            : 0;

        for (int i = 0; i < solidPieces.Length; i++)
        {
            if (solidPieces[i].rend != null)
                topOrder = Mathf.Min(topOrder, solidPieces[i].rend.sortingOrder - 1);
        }

        for (int i = 0; i < stages.Length; i++)
        {
            Stage s = stages[i];

            if (s.rend == null)
                continue;

            s.rend.sortingOrder = topOrder - (stages.Length - 1 - i);

            s.startColor = s.rend.color;
            if (s.startColor.a < 0.01f)
                s.startColor = Color.white;

            s.startScale = s.rend.transform.localScale;
            s.startPos = s.rend.transform.localPosition;
        }

        SetProgress(0f);
    }

    /// <summary>Runs the whole melt on its own over meltDuration.</summary>
    public void Play()
    {
        if (started)
            return;

        started = true;

        OnMeltStarted?.Invoke();

        if (meltClip != null)
            AudioController.instance.PlayAnySfx(0, meltClip, 0f);

        DOTween.Kill(this);

        DOTween.To(() => progress, SetProgress, 1f, meltDuration)
            .SetEase(meltEase)
            .SetTarget(this);
    }

    /// <summary>Stops a running melt where it is.</summary>
    public void Pause()
    {
        DOTween.Kill(this);

        started = false;
    }

    /// <summary>
    /// Drive the melt directly, 0 solid through 1 fully melted.
    /// </summary>
    public void SetProgress(float t)
    {
        progress = Mathf.Clamp01(t);

        UpdateSolids();
        UpdateStages();

        if (progress >= 1f && !finished)
        {
            finished = true;

            OnMelted?.Invoke();
        }
    }

    void UpdateSolids()
    {
        // Each piece gets its own slice of the window, so they collapse one after another.
        float slice = solidsGoneBy / Mathf.Max(solidPieces.Length, 1);

        for (int i = 0; i < solidPieces.Length; i++)
        {
            Solid s = solidPieces[i];

            if (s.rend == null)
                continue;

            float k = Mathf.Clamp01(Mathf.InverseLerp(slice * i, slice * (i + 1), progress));

            // Fade holds on a little past the collapse so the piece is still visible while
            // it slumps, instead of vanishing before it has moved.
            float alpha = 1f - Mathf.Clamp01((k - 0.25f) / 0.75f);

            s.rend.color = new Color(s.startColor.r, s.startColor.g, s.startColor.b, s.startColor.a * alpha);

            float shrink = 1f - solidShrink * k;

            s.rend.transform.localScale = new Vector3(
                s.startScale.x * shrink * (1f + solidSquash * k * 0.5f),
                s.startScale.y * shrink * (1f - solidSquash * k),
                s.startScale.z);

            s.rend.transform.localPosition = s.startPos + new Vector3(0f, -solidSink * k, 0f);

            bool on = alpha > 0.001f;

            if (s.rend.gameObject.activeSelf != on)
                s.rend.gameObject.SetActive(on);
        }
    }

    void UpdateStages()
    {
        for (int i = 0; i < stages.Length; i++)
        {
            Stage s = stages[i];

            if (s.rend == null)
                continue;

            float from = i == 0 ? 0f : stages[i - 1].at;
            float to = s.at;
            float nextAt = i < stages.Length - 1 ? stages[i + 1].at : 1.1f;

            // Only ever fade IN. The outgoing stage stays fully opaque underneath until the
            // incoming one has covered it - fading both at once leaves two half-transparent
            // sprites stacked up, which washes the colour out and shows the background
            // straight through the wax.
            float a = Mathf.SmoothStep(0f, 1f, Mathf.Clamp01(Mathf.InverseLerp(from, to, progress)));

            float nextAlpha = i < stages.Length - 1
                ? Mathf.SmoothStep(0f, 1f, Mathf.Clamp01(Mathf.InverseLerp(to, nextAt, progress)))
                : 0f;

            s.rend.color = new Color(s.startColor.r, s.startColor.g, s.startColor.b, s.startColor.a * a);

            float fadeIn = a;

            // Grows into place as it fades in, so it spreads rather than appearing whole.
            float grow = Mathf.Lerp(stageGrowFrom, 1f, Mathf.SmoothStep(0f, 1f, fadeIn));

            s.restScale = new Vector3(
                s.startScale.x * grow * (1f + spread * progress),
                s.startScale.y * grow * (1f - flatten * progress),
                s.startScale.z);

            s.restPos = s.startPos + new Vector3(0f, -sink * progress, 0f);

            // Switched off only once the stage above has fully covered it.
            s.visible = a > 0.001f && nextAlpha < 0.999f;

            if (s.rend.gameObject.activeSelf != s.visible)
                s.rend.gameObject.SetActive(s.visible);

            // Applied here too, so a stage looks right even with slosh switched off.
            s.rend.transform.localScale = s.restScale;
            s.rend.transform.localPosition = s.restPos;
        }
    }

    void LateUpdate()
    {
        if (!slosh || progress <= 0.001f)
            return;

        float dt = Time.deltaTime;

        if (dt <= 0f)
            return;

        Vector3 world = transform.position;

        if (!hasLastPos)
        {
            lastWorldPos = world;
            hasLastPos = true;

            return;
        }

        // Sideways speed of the spoon, measured in this object's own space so it holds up
        // if the spoon is rotated.
        Vector3 delta = world - lastWorldPos;

        lastWorldPos = world;

        Vector3 localDelta = transform.parent != null
            ? transform.parent.InverseTransformVector(delta)
            : delta;

        float speed = localDelta.x / dt;

        // Liquid lags the other way, on a damped spring so it overshoots and settles.
        float target = Mathf.Clamp(-speed * sloshAmount, -sloshLimit, sloshLimit);

        float accel = (target - sloshOffset) * sloshSpring - sloshVel * sloshDamp;

        sloshVel += accel * dt;
        sloshOffset = Mathf.Clamp(sloshOffset + sloshVel * dt, -sloshLimit, sloshLimit);

        // A melted surface never sits perfectly still.
        float idle = idleWobble * progress * Mathf.Sin(Time.time * idleWobbleSpeed);

        float offset = (sloshOffset + idle) * progress;
        float amount = Mathf.Clamp(offset / Mathf.Max(sloshLimit, 0.0001f), -1f, 1f);

        for (int i = 0; i < stages.Length; i++)
        {
            Stage s = stages[i];

            if (s.rend == null || !s.visible)
                continue;

            s.rend.transform.localPosition = s.restPos + new Vector3(offset, 0f, 0f);

            s.rend.transform.localEulerAngles = new Vector3(0f, 0f, -amount * sloshTilt);

            float squash = Mathf.Abs(amount) * sloshSquash;

            s.rend.transform.localScale = new Vector3(
                s.restScale.x * (1f + squash),
                s.restScale.y * (1f - squash),
                s.restScale.z);
        }
    }

    /// <summary>Back to solid, for a level restart.</summary>
    public void ResetMelt()
    {
        DOTween.Kill(this);

        started = false;
        finished = false;

        sloshOffset = 0f;
        sloshVel = 0f;
        hasLastPos = false;

        for (int i = 0; i < solidPieces.Length; i++)
        {
            if (solidPieces[i].rend == null)
                continue;

            solidPieces[i].rend.gameObject.SetActive(true);
        }

        SetProgress(0f);
    }

    void OnDestroy()
    {
        DOTween.Kill(this);
    }
}
