using UnityEngine;

/// <summary>
/// Playable-scene copy of gameplay manager. Original GameManager.cs is unchanged.
/// Complete / last step → store install instead of full-game complete UI.
/// </summary>
public class GameManagerPlayable : GameManager
{
    public override void Complete()
    {
        if (timerCo != null)
            StopCoroutine(timerCo);

        isPaused = true;
        isComplete = true;

        StopAllDrags();
        MuteLevelAudio();

        LunaDirect();
    }

    public void LunaDirect()
    {
        PlayableInstall.Go();
    }
}
