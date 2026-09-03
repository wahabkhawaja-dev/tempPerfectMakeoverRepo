using System;
using UnityEngine;
using UnityEngine.Events;

/// <summary>
/// Standalone CTA controller for a generated playable.
///
/// Deliberately has near-zero dependencies on gameplay code — no LevelData, no tool/
/// controller scripts. It only knows how to open the store. That means it can be dropped
/// on any GameObject, in any scene, in any playable, and it will work. (GameManager is
/// touched only to block input on fire, PointerInput only for OnToolAppear's tap check —
/// both generic, level-agnostic utilities, not per-level gameplay code.)
///
/// Three ways to fire it, use whichever suits the creative:
///   1. Inspector triggers below (after N seconds / after N taps / immediately).
///   2. FireCTA() — public and no-arg, so it appears in the dropdown of ANY UnityEvent
///      (a step's OnComplete, a Button onClick, a trigger, an animation event). This is
///      how you fire mid-step: wire it wherever that moment happens.
///   3. PlayableCTA.FireNow() — static, callable from any script with no reference.
/// </summary>
public class PlayableCTA : MonoBehaviour
{
    public enum Trigger
    {
        /// <summary>Never fires by itself. Wire FireCTA() into a UnityEvent.</summary>
        Manual = 0,

        /// <summary>Fires N seconds after this object becomes active.</summary>
        AfterSeconds = 1,

        /// <summary>Fires after the player has tapped N times anywhere.</summary>
        AfterTaps = 2,

        /// <summary>Fires as soon as this object becomes active.</summary>
        Immediately = 3,

        /// <summary>Fires once scratchProgress's collective erase/restore progress reaches
        /// progressThreshold. Works for either ScratchMode — BD_Progress already normalizes
        /// erase and restore into the same 0..1 "how done is it" value.</summary>
        AfterProgress = 4,

        /// <summary>watchedTool is visible in the scene but not really playable (a tease).
        /// Fires the moment the player taps specifically on watchedTool's own collider —
        /// their attempt to drag it — not on any other tap.</summary>
        OnToolAppear = 5,
    }

    [Header("When should the CTA fire?")]
    public Trigger trigger = Trigger.Manual;

    [Tooltip("Trigger = AfterSeconds: seconds until the CTA fires.")]
    public float afterSeconds = 15f;

    [Tooltip("Trigger = AfterTaps: how many taps anywhere before the CTA fires.")]
    public int afterTaps = 3;

    [Tooltip("Trigger = AfterProgress: the scratch card (erase or restore) whose progress to watch.")]
    public BD_Progress scratchProgress;

    [Tooltip("Trigger = AfterProgress: index into scratchProgress.AllScratches to track. -1 = collective progress of all of them.")]
    public int scratchIndex = -1;

    [Tooltip("Trigger = AfterProgress: 0..1 progress that fires the CTA once reached.")]
    public float progressThreshold = 1f;

    [Tooltip("Trigger = OnToolAppear: the tease tool. CTA fires when the player taps specifically on its own collider (their attempt to drag it) — not on any other tap.")]
    public GameObject watchedTool;

    [Header("After it has fired")]
    [Tooltip("Stop all drags and pause GameManager the instant the CTA fires, so it can't also be read as a drag. Off = gameplay keeps running under the CTA (soft/banner CTA).")]
    public bool blockInputOnFire = true;

    [Tooltip("Every further tap re-opens the store page. Standard playable end-card behaviour.")]
    public bool refireOnEveryTap = true;

    [Tooltip("Minimum gap between re-fires, so one physical tap can't fire twice across frames.")]
    public float refireDelay = 0.015f;

    [Header("End card (optional)")]
    [Tooltip("Show endCard when the CTA fires.")]
    public bool showEndCard;

    [Tooltip("End-card canvas/root, activated when the CTA fires.")]
    public GameObject endCard;

    [Tooltip("If trigger = AfterProgress, show the end card too (normally reserved for genuine level completion, not mid-scratch progress).")]
    public bool showEndCardOnProgressTrigger;

    [Tooltip("If trigger = OnToolAppear, show the end card too. Off by default — OnToolAppear is a tease (the level isn't actually done), so it blocks input without showing an end card.")]
    public bool showEndCardOnToolAppearTrigger;

    [Header("Extras")]
    [Tooltip("Runs once, the first time the CTA fires (hide HUD, ...).")]
    public UnityEvent onCtaFired;

    [Tooltip("Logs to the console every time the CTA fires. Handy while wiring things up.")]
    public bool logWhenFired = true;

    /// <summary>True once the CTA has fired at least once.</summary>
    public bool HasFired { get; private set; }

    static PlayableCTA active;

    float enabledAt;
    int tapCount;
    float lastFireTime = -999f;

    void OnEnable()
    {
        active = this;
        enabledAt = Time.unscaledTime;

        if (trigger == Trigger.Immediately)
            FireFromTrigger();
    }

    void OnDisable()
    {
        // Without this, a level's CTA that was ever briefly active keeps `active` pointing at
        // it even while hidden — so a locked-button tap (PlayableCTA.FireNow() while no level
        // is playing) would wrongly fire THIS component instead of falling back to the
        // open-store path, setting HasFired early and making every later gameplay tap re-fire.
        if (active == this)
            active = null;
    }

    void Update()
    {
        bool tapped = Input.GetMouseButtonDown(0);

        if (!HasFired)
        {
            if (trigger == Trigger.AfterSeconds && Time.unscaledTime - enabledAt >= afterSeconds)
            {
                FireFromTrigger();
                return;
            }

            if (trigger == Trigger.AfterTaps && tapped)
            {
                tapCount++;
                if (tapCount >= afterTaps)
                    FireFromTrigger();
            }

            if (trigger == Trigger.AfterProgress && scratchProgress != null)
            {
                float progressIs = scratchIndex >= 0
                    ? scratchProgress.giveProgressForScratch(scratchIndex)
                    : scratchProgress.giveCollectiveProgress();

                if (progressIs >= progressThreshold)
                    FireFromTrigger();
            }

            if (trigger == Trigger.OnToolAppear && tapped && watchedTool != null && watchedTool.activeInHierarchy
                && PointerInput.IsOverCollider(watchedTool.GetComponent<Collider2D>()))
                FireFromTrigger();

            return;
        }

        if (refireOnEveryTap && tapped && Time.unscaledTime - lastFireTime >= refireDelay)
            OpenStore();
    }

    /// <summary>
    /// Fires the CTA. Public and no-arg on purpose — wire this into any UnityEvent in the
    /// Inspector to trigger the CTA at exactly the moment you want, including mid-step.
    /// </summary>
    public void FireCTA()
    {
        // Explicit fire (level complete, a UnityEvent, FireNow) — this IS the celebration
        // moment, so the end card always shows. The trigger-based suppression below only
        // exists for the mid-gameplay triggers firing themselves.
        Fire(true);
    }

    /// <summary>
    /// Fired by this component's own trigger. AfterProgress (mid-scratch) and OnToolAppear
    /// (a tease — the level isn't actually done) suppress the end card unless their opt-in
    /// flag is set.
    /// </summary>
    void FireFromTrigger()
    {
        bool showCardThisFire = (trigger != Trigger.AfterProgress || showEndCardOnProgressTrigger)
            && (trigger != Trigger.OnToolAppear || showEndCardOnToolAppearTrigger);

        Fire(showCardThisFire);
    }

    void Fire(bool showCardThisFire)
    {
        if (!HasFired)
        {
            HasFired = true;


            // Freeze gameplay input (including any drag in progress) the instant the CTA
            // fires, so the tap that opens the store can't also be read as a drag/scratch.
            if (blockInputOnFire)
            {
                try
                {
                    if (GameManager.instance != null)
                    {
                        GameManager.instance.isPaused = true;
                        GameManager.instance.StopAllDrags();
                    }
                }
                catch (Exception e)
                {
                    Debug.Log("[PlayableCTA] Input block skipped (no GameManager, ok standalone): " + e.Message);
                }
            }

            // The playable never runs UI_Manager.Complete() (GameManagerPlayable overrides
            // Complete()), so honour its disable-list here — this IS the end of the playable.
            try
            {
                if (UI_Manager.instance != null && UI_Manager.instance.thingsToDisableWhenCompletePanel != null)
                {
                    foreach (GameObject obj in UI_Manager.instance.thingsToDisableWhenCompletePanel)
                    {
                        if (obj != null)
                            obj.SetActive(false);
                    }
                }
            }
            catch (Exception e)
            {
                Debug.Log("[PlayableCTA] Disable-list skipped (no UI_Manager, ok standalone): " + e.Message);
            }

            if (showCardThisFire && showEndCard && endCard != null)
                endCard.SetActive(true);

            if (onCtaFired != null)
                onCtaFired.Invoke();
        }

        OpenStore();
    }

    /// <summary>Fires the CTA from anywhere, without needing a reference to this component.</summary>
    public static void FireNow()
    {
        // active is whichever CTA enabled last. PlayableRouter destroys the sub-levels that
        // were not picked (DropUnplayedLevels), so that reference can be a dead object by the
        // time the level ends — fall back to the live one in the scene, otherwise HasFired
        // never gets set and tap-to-refire/end-card/disable-list all silently do nothing.
        if (active == null)
            active = FindObjectOfType<PlayableCTA>();

        if (active != null)
            active.FireCTA();
        else
            OpenStoreStatic(true);
    }

    void OpenStore()
    {
        lastFireTime = Time.unscaledTime;
        OpenStoreStatic(logWhenFired);
    }

    // Literal Luna calls live here so this component is self-sufficient — Playworks'
    // health check scans for these call sites, so they must not be hidden behind an
    // interface, event or reflection.
    static void OpenStoreStatic(bool log)
    {
        if (log)
            Debug.Log("[PlayableCTA] CTA fired — opening store.");

        try
        {
            Luna.Unity.Playable.InstallFullGame();
            Luna.Unity.LifeCycle.GameEnded();
        }
        catch (Exception e)
        {
            Debug.Log("[PlayableCTA] Install CTA (editor/no-Luna is ok): " + e.Message);
        }
    }
}
