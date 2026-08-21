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
    }

    [Header("When should the CTA fire?")]
    public Trigger trigger = Trigger.Manual;

    [Tooltip("Trigger = AfterSeconds: seconds until the CTA fires.")]
    public float afterSeconds = 15f;

    [Tooltip("Trigger = AfterTaps: how many taps anywhere before the CTA fires.")]
    public int afterTaps = 3;

    [Header("After it has fired")]
    [Tooltip("Every further tap re-opens the store page. Standard playable end-card behaviour.")]
    public bool refireOnEveryTap = true;

    [Tooltip("Minimum gap between re-fires, so one physical tap can't fire twice across frames.")]
    public float refireDelay = 0.015f;

    [Header("Extras")]
    [Tooltip("Runs once, the first time the CTA fires (hide HUD, show end card, ...).")]
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
