using System;
using UnityEngine;
using UnityEngine.Events;

/// <summary>
/// Standalone CTA controller for a generated playable.
///
/// Deliberately has ZERO dependencies on gameplay code — no GameManager, no LevelData,
/// no tool/controller scripts. It only knows how to open the store. That means it can be
/// dropped on any GameObject, in any scene, in any playable, and it will work.
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

    [Header("After it has fired")]
    [Tooltip("Every further tap re-opens the store page. Standard playable end-card behaviour.")]
    public bool refireOnEveryTap = true;

    [Tooltip("Minimum gap between re-fires, so one physical tap can't fire twice across frames.")]
    public float refireDelay = 0.015f;

    [Header("End card (optional)")]
    [Tooltip("Show endCard when the CTA fires.")]
    public bool showEndCard;

    [Tooltip("End-card canvas/root, activated when the CTA fires.")]
    public GameObject endCard;

    [Tooltip("Plays once the CTA fires. Set its own Looping module on to have it play continuously.")]
    public ParticleSystem endParticles;

    [Tooltip("If trigger = AfterProgress, play endParticles too (normally reserved for the last step completing, not mid-scratch progress).")]
    public bool playEndParticlesOnProgressTrigger;

    [Tooltip("One-shot burst played once the CTA fires (confetti cannon, etc). Looping should be off on this one.")]
    public ParticleSystem stepCompleteParticles;

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
            FireCTA();
    }

    void Update()
    {
        bool tapped = Input.GetMouseButtonDown(0);

        if (!HasFired)
        {
            if (trigger == Trigger.AfterSeconds && Time.unscaledTime - enabledAt >= afterSeconds)
            {
                FireCTA();
                return;
            }

            if (trigger == Trigger.AfterTaps && tapped)
            {
                tapCount++;
                if (tapCount >= afterTaps)
                    FireCTA();
            }

            if (trigger == Trigger.AfterProgress && scratchProgress != null)
            {
                float progressIs = scratchIndex >= 0
                    ? scratchProgress.giveProgressForScratch(scratchIndex)
                    : scratchProgress.giveCollectiveProgress();

                if (progressIs >= progressThreshold)
                    FireCTA();
            }

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
        if (!HasFired)
        {
            HasFired = true;

            // Freeze gameplay input (including any drag in progress) the instant the CTA
            // fires, so the tap that opens the store can't also be read as a drag/scratch.
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

            if (showEndCard && endCard != null)
                endCard.SetActive(true);

            if (trigger != Trigger.AfterProgress || playEndParticlesOnProgressTrigger)
                PlayParticles(endParticles);

            PlayParticles(stepCompleteParticles);

            if (onCtaFired != null)
                onCtaFired.Invoke();
        }

        OpenStore();
    }

    /// <summary>Fires the CTA from anywhere, without needing a reference to this component.</summary>
    public static void FireNow()
    {
        if (active != null)
            active.FireCTA();
        else
            OpenStoreStatic(true);
    }

    static void PlayParticles(ParticleSystem particles)
    {
        if (particles == null)
            return;

        if (!particles.gameObject.activeSelf)
            particles.gameObject.SetActive(true);

        particles.Play();
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
