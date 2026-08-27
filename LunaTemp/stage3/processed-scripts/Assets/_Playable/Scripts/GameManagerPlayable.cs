using UnityEngine;

/// <summary>
/// Playable-scene copy of gameplay manager. Original GameManager.cs is unchanged.
/// Complete / last step → routes into PlayableCTA instead of the full-game complete UI, so
/// wizard-built and manually-triggered CTAs both go through the same component (end card,
/// input-block toggle, tap-to-refire all live there — see PlayableCTA.cs).
///
/// Particles live here instead, because they're tied to actual gameplay progress, not to
/// however the CTA happened to fire:
///   - endParticles play on Complete() — genuine level completion, once.
///   - stepCompleteParticles play via PlayStepComplete(), called from each step's own
///     StepNComplete()/StepNDone() method in the level script (repeats every step).
/// </summary>
public class GameManagerPlayable : GameManager
{
    [Tooltip("Plays once, when the level genuinely completes. Set its own Looping module on to have it play continuously.")]
    public ParticleSystem endParticles;

    [Tooltip("One-shot burst (confetti cannon, etc). Play it by calling PlayStepComplete() from each step's own StepNComplete()/StepNDone() method.")]
    public ParticleSystem stepCompleteParticles;

    static GameManagerPlayable active;

    void OnEnable()
    {
        active = this;
    }

    public override void Complete()
    {
        if (isComplete)
            return;

        if (timerCo != null)
            StopCoroutine(timerCo);

        isPaused = true;
        isComplete = true;

        PlayParticles(endParticles);

        MuteLevelAudio();

        LunaDirect();
    }

    /// <summary>Call from a step's own StepNComplete()/StepNDone() method to play the
    /// confetti-cannon burst for that step. Safe to call even without a GameManagerPlayable
    /// in the scene.</summary>
    public static void PlayStepComplete()
    {
        if (active != null)
            PlayParticles(active.stepCompleteParticles);
    }

    static void PlayParticles(ParticleSystem particles)
    {
        if (particles == null)
            return;

        if (!particles.gameObject.activeSelf)
            particles.gameObject.SetActive(true);

        particles.Play();
    }

    public void LunaDirect()
    {
        PlayableCTA.FireNow();
    }
}
