using System;
using DG.Tweening;
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

    [Tooltip("Switched OFF at the same moment the end card appears (HUD, tool bar, ...) — " +
             "the playable never runs UI_Manager.Complete(), so nothing else does this.")]
    public GameObject[] thingsToDisableOnEndCard;

    [Tooltip("Seconds between the CTA firing and the end card actually appearing — gives " +
        "GameManagerPlayable's endParticles a moment to play before the card covers them. " +
        "0 = instant (old behaviour). Everything else (input block, onCtaFired, the store call) " +
        "still happens immediately; only the end card's own appearance is delayed.")]
    public float endCardDelay = 0f;

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
        // is playing) would wrongly fire THIS component instead of falling back to the static
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

            if (trigger == Trigger.AfterProgress && scratchProgress != null && HasScratchStarted(scratchProgress, scratchIndex))
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
    /// Trigger = AfterProgress reads BD_Progress.giveProgressForScratch/giveCollectiveProgress,
    /// which for a Restore-mode card computes Math.Abs(1 - GiveProgress()) — and an untouched
    /// card's progress texture reads back as its "complete" value (0 for Restore, per
    /// EraseProgress.CalcProgress) before a single stroke has been drawn, since nothing has ever
    /// rendered to it yet. That makes a fresh scene load read as 100% progress and fire the CTA
    /// before the player can touch anything. ScratchCard.IsScratched only flips true once real
    /// scratching begins, so gate on it — collective progress needs every counted card started,
    /// a single index just needs that one.
    /// </summary>
    static bool HasScratchStarted(BD_Progress progress, int index)
    {
        if (progress.AllScratches == null || progress.AllScratches.Length == 0)
            return false;

        if (index >= 0)
        {
            if (index >= progress.AllScratches.Length)
                return false;
            return IsCardScratched(progress.AllScratches[index]);
        }

        for (int i = 0; i < progress.AllScratches.Length; i++)
        {
            if (!IsCardScratched(progress.AllScratches[i]))
                return false;
        }

        return true;
    }

    static bool IsCardScratched(ScratchData sd)
    {
        return sd != null && sd.ScratchManager != null && sd.ScratchManager.Card != null && sd.ScratchManager.Card.IsScratched;
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

            if (showCardThisFire && showEndCard)
            {
                if (endCardDelay > 0f)
                {
                    DOVirtual.DelayedCall(endCardDelay, ShowEndCard);
                }
                else
                {
                    ShowEndCard();
                }
            }

            if (onCtaFired != null)
                onCtaFired.Invoke();
        }

        OpenStore();
    }

    /// <summary>Activates endCard and switches off thingsToDisableOnEndCard together, so a
    /// delayed card (endCardDelay) hides the HUD at the same moment it appears, not on fire.</summary>
    void ShowEndCard()
    {
        if (endCard != null)
            endCard.SetActive(true);

        if (thingsToDisableOnEndCard != null)
        {
            for (int i = 0; i < thingsToDisableOnEndCard.Length; i++)
            {
                if (thingsToDisableOnEndCard[i] != null)
                    thingsToDisableOnEndCard[i].SetActive(false);
            }
        }
    }

    /// <summary>Fires the CTA from anywhere, without needing a reference to this component.</summary>
    public static void FireNow()
    {
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

    /// <summary>
    /// Opens the store and nothing else — no end card, no input block, no HasFired change, no
    /// re-fire cooldown. For CTA taps that are NOT the end of the playable: a tease tool that
    /// should redirect to store on every tap while gameplay continues normally afterwards. Use
    /// FireCTA()/FireNow() when the playable is actually finishing.
    /// </summary>
    public static void OpenStoreOnly()
    {
        OpenStoreStatic(true);
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
