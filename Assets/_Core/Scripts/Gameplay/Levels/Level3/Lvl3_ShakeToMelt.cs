using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

/// <summary>
/// Goes on the spoon tool. Hold the spoon over the flame and a timer melts the wax.
/// Leaving the flame pauses the melt and hides the clock; coming back resumes both.
/// </summary>
public class Lvl3_ShakeToMelt : MonoBehaviour
{
    [Header("References")]
    [Tooltip("The spoon tool. Taken from this object if left empty.")]
    public BasicDrag Tool;

    [Tooltip("The wax being melted. Its progress is driven from the hold timer.")]
    public Lvl3_WaxMelt Melt;

    [Tooltip("Hidden as soon as the player starts heating.")]
    public GameObject handIndication;

    public List<OutlinePulse> outlines = new List<OutlinePulse>();

    [Header("Hold over flame")]
    [Tooltip("Flame collider the spoon must stay over. Uses the Fire trigger.")]
    public Collider2D heatZone;

    [Tooltip("Spoon heat sensor. Uses child HeatPoint if left empty.")]
    public Collider2D heatSensor;

    [Tooltip("Seconds the spoon must stay over the flame to finish.")]
    public float holdDuration = 5f;

    [Tooltip("How close the spoon HeatPoint center must be to the flame center on X. 0.35 = middle of the flame, not the edge.")]
    [Range(0.05f, 1f)]
    public float lockCenterX = 0.35f;

    [Tooltip("How far above the flame the bowl may sit and still heat, in world units. Left/right still uses lockCenterX.")]
    public float abovePadding = 0.4f;

    [Header("Drives")]
    public bool drivesMelt = true;
    public bool drivesProgressBar = true;

    [Tooltip("On: the melt can finish while held but the step only completes once the player lets go. Off: it completes the moment progress hits 1.")]
    public bool completeOnRelease = true;

    [Header("Heating")]
    [Tooltip("The glowing/burning spoon art. Fades up as the spoon takes heat, so it does not just pop on.")]
    public SpriteRenderer burningSpoon;

    [Tooltip("Progress at which the spoon looks fully heated.")]
    [Range(0.05f, 1f)] public float heatFullAt = 0.5f;

    [Tooltip("Boiling / steam particles on the spoon. Started once it is hot enough to bubble.")]
    public ParticleSystem[] boilParticles;

    [Tooltip("Progress at which the boiling starts.")]
    [Range(0f, 1f)] public float boilStartsAt = 0.15f;

    [Tooltip("Extra systems that only belong at the end - the jumping bits and anything else that should not run from the first bubble. Started at subEmitterStartsAt along with the sub-emitters.")]
    public ParticleSystem[] lateParticles;

    [Tooltip("Progress at which the sub-emitters and the late systems kick in, so the extra spatter only shows up near the end of the melt.")]
    [Range(0f, 1f)] public float subEmitterStartsAt = 0.8f;

    [Tooltip("On: the heat and the boiling stop when the melt finishes. Off: they carry on.")]
    public bool coolDownOnComplete = false;

    [Header("Audio")]
    [Tooltip("One-shot when heating starts.")]
    public AudioClip startClip;

    [Tooltip("Loops while the wax is melting over the flame.")]
    public AudioClip meltLoopClip;

    [Header("Events")]
    public UnityEvent OnStarted;
    public UnityEvent OnComplete;

    float holdTime;
    bool started;
    bool done;
    bool waitingForRelease;
    bool fired;
    bool clockShowing;
    bool locked;
    float pushedProgress = -1f;
    Color burningStartColor = Color.white;
    bool boiling;
    bool lateRunning;
    AudioSource meltLoop;

    public float Progress { get { return holdDuration <= 0f ? 1f : Mathf.Clamp01(holdTime / holdDuration); } }

    void Start()
    {
        if (Tool == null)
            Tool = GetComponent<BasicDrag>();

        if (Tool != null)
            Tool.OnMouseUpEvent += OnToolReleased;

        if (heatSensor == null)
        {
            Transform point = transform.Find("HeatPoint");
            if (point != null)
                heatSensor = point.GetComponent<Collider2D>();
        }

        if (burningSpoon != null)
            burningStartColor = burningSpoon.color;

        meltLoop = GetComponent<AudioSource>();
        if (meltLoop == null)
            meltLoop = gameObject.AddComponent<AudioSource>();

        meltLoop.playOnAwake = false;
        meltLoop.loop = true;
        meltLoop.spatialBlend = 0f;

        ApplyHeat(0f);
    }

    void ApplyHeat(float t)
    {
        if (burningSpoon != null)
        {
            float a = Mathf.Clamp01(t / heatFullAt);

            burningSpoon.color = new Color(burningStartColor.r, burningStartColor.g, burningStartColor.b, burningStartColor.a * a);

            bool on = a > 0.001f;

            if (burningSpoon.gameObject.activeSelf != on)
                burningSpoon.gameObject.SetActive(on);
        }

        bool subsOn = t >= subEmitterStartsAt;

        for (int i = 0; i < boilParticles.Length; i++)
        {
            if (boilParticles[i] == null)
                continue;

            var sub = boilParticles[i].subEmitters;

            if (sub.subEmittersCount > 0 && sub.enabled != subsOn)
                sub.enabled = subsOn;
        }

        bool shouldBoil = t >= boilStartsAt;

        if (shouldBoil != boiling)
        {
            boiling = shouldBoil;

            StartStopBoil();
        }

        lateRunning = subsOn;

        for (int i = 0; i < lateParticles.Length; i++)
        {
            if (lateParticles[i] == null)
                continue;

            bool running = lateParticles[i].isEmitting;

            if (subsOn && !running)
            {
                if (!lateParticles[i].gameObject.activeSelf)
                    lateParticles[i].gameObject.SetActive(true);

                lateParticles[i].Play(true);
            }

            else if (!subsOn && running)
            {
                lateParticles[i].Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);
            }
        }
    }

    void StartStopBoil()
    {
        for (int i = 0; i < boilParticles.Length; i++)
        {
            if (boilParticles[i] == null)
                continue;

            if (boiling)
            {
                if (!boilParticles[i].gameObject.activeSelf)
                    boilParticles[i].gameObject.SetActive(true);

                boilParticles[i].Play(true);
            }

            else
            {
                boilParticles[i].Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);
            }
        }
    }

    void OnDestroy()
    {
        if (Tool != null)
            Tool.OnMouseUpEvent -= OnToolReleased;

        HideClock();
        StopMeltFeedback();
    }

    void OnToolReleased()
    {
        HideClock();

        if (waitingForRelease)
            Finish();
    }

    void Finish()
    {
        if (fired)
            return;

        fired = true;
        waitingForRelease = false;

        HideClock();
        StopMeltFeedback();

        if (coolDownOnComplete)
            ApplyHeat(0f);

        OnComplete?.Invoke();
    }

    void Update()
    {
        if (waitingForRelease && (Tool == null || !Tool.isDragging))
            Finish();

        if (done)
            return;

        if (!locked)
        {
            if (Tool == null || !Tool.isDragging || !IsOverHeat())
                return;

            LockTool();
        }

        if (!started)
            return;

        ShowClock();

        holdTime += Time.deltaTime;

        float t = Progress;

        if (drivesMelt && Melt != null)
            Melt.SetProgress(t);

        ApplyHeat(t);

        PushProgressBar(t);

        if (t < 1f)
            return;

        done = true;
        HideClock();
        Finish();
    }

    void LockTool()
    {
        if (locked || Tool == null)
            return;

        locked = true;
        started = true;

        if (handIndication != null)
            handIndication.SetActive(false);

        for (int i = 0; i < outlines.Count; i++)
        {
            if (outlines[i] != null)
                outlines[i].DisableAnim();
        }

        if (startClip != null && AudioController.instance != null)
            AudioController.instance.PlayAnySfx(0, startClip, 0f);

        StartMeltFeedback();

        var follow = Tool.GetComponent<BD_CameraFollow>();
        if (follow != null)
            follow.enabled = false;

        Tool.dontResetItIsInCollider = true;
        Tool.isDragging = false;
        Tool.canDrag = false;
        if (Tool.thisCollider != null)
            Tool.thisCollider.enabled = false;
        Tool.enabled = false;

        OnStarted?.Invoke();
    }

    void StartMeltFeedback()
    {
        if (meltLoopClip != null && meltLoop != null)
        {
            meltLoop.clip = meltLoopClip;
            meltLoop.volume = 0.7f;
            if (!meltLoop.isPlaying)
                meltLoop.Play();
        }

            
    }

    void StopMeltFeedback()
    {
        if (meltLoop != null && meltLoop.isPlaying)
            meltLoop.Stop();

            
    }

    bool IsOverHeat()
    {
        if (heatZone == null || heatSensor == null)
            return false;

        Physics2D.SyncTransforms();

        Vector2 spoonCenter = heatSensor.bounds.center;
        Bounds flame = heatZone.bounds;
        float maxX = flame.extents.x * lockCenterX;

        // Left or right of the flame's middle does not count.
        if (Mathf.Abs(spoonCenter.x - flame.center.x) > maxX)
            return false;

        // Inside the flame, or a little above it. Not off to the side.
        float minY = flame.min.y;
        float maxY = flame.max.y + abovePadding;

        return spoonCenter.y >= minY && spoonCenter.y <= maxY;
    }

    void ShowClock()
    {
        if (clockShowing || UI_Manager.instance == null)
            return;

        clockShowing = true;
        float remaining = Mathf.Max(0.01f, holdDuration - holdTime);
        UI_Manager.instance.ShowClockProgress(remaining, Progress);
    }

    void HideClock()
    {
        if (!clockShowing)
            return;

        clockShowing = false;

        if (UI_Manager.instance != null)
            UI_Manager.instance.HideClockProgress();
    }

    void PushProgressBar(float t)
    {
        if (!drivesProgressBar || UI_Manager.instance == null)
            return;

        if (t < 1f && Mathf.Abs(t - pushedProgress) < 0.02f)
            return;

        pushedProgress = t;

        UI_Manager.instance.SetProgressBar(t, 0.1f);
    }

    public void ResetShake()
    {
        holdTime = 0f;
        started = false;
        done = false;
        waitingForRelease = false;
        fired = false;
        locked = false;
        pushedProgress = -1f;

        boiling = false;
        lateRunning = false;

        HideClock();
        StopMeltFeedback();
        ApplyHeat(0f);

        if (Melt != null)
            Melt.ResetMelt();
    }
}
