using UnityEngine;

/// <summary>
/// Playable-scene copy of gameplay manager. Original GameManager.cs is unchanged.
/// Complete / last step → store install instead of full-game complete UI.
/// Once complete, every further tap anywhere re-fires the CTA (standard playable-ad
/// end-card behavior), throttled so one physical tap can't double-fire across frames.
/// </summary>
public class GameManagerPlayable : GameManager
{
    const float CtaRepeatDelay = 0.015f;
    float lastCtaTime = -999f;

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

    void Update()
    {
        if (!isComplete)
            return;

        if (Input.GetMouseButtonDown(0) && Time.unscaledTime - lastCtaTime >= CtaRepeatDelay)
        {
            lastCtaTime = Time.unscaledTime;
            LunaDirect();
        }
    }

    public void LunaDirect()
    {
        PlayableInstall.Go();
    }
}
