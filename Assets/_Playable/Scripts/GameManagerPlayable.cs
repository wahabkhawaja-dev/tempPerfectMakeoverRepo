using UnityEngine;

/// <summary>
/// Playable-scene copy of gameplay manager. Original GameManager.cs is unchanged.
/// Complete / last step → routes into PlayableCTA instead of the full-game complete UI, so
/// wizard-built and manually-triggered CTAs both go through the same component (end card,
/// particles, input-block toggle, tap-to-refire all live there — see PlayableCTA.cs).
/// </summary>
public class GameManagerPlayable : GameManager
{
    public override void Complete()
    {
        if (timerCo != null)
            StopCoroutine(timerCo);

        isPaused = true;
        isComplete = true;

        MuteLevelAudio();

        LunaDirect();
    }

    public void LunaDirect()
    {
        PlayableCTA.FireNow();
    }
}
