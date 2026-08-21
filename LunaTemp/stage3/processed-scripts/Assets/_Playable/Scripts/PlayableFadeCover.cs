using DG.Tweening;

/// <summary>
/// Hides a ForceCompleteStepN() step-skip (an instant snap to end-state, no tween) behind
/// UI_Manager's fade image, so the generated Playable never shows the pop/flash of objects
/// jumping straight to a finished look. Call Cover() immediately before the ForceComplete
/// call and Reveal() immediately after the following StartStepN()/Invoke.
/// </summary>
public static class PlayableFadeCover
{
    public static void Cover()
    {
        var img = UI_Manager.instance != null ? UI_Manager.instance.Fade_Img : null;
        if (img == null)
            return;

        img.gameObject.SetActive(true);
        img.DOKill();
        img.DOFade(1f, 0f);
    }

    public static void Reveal()
    {
        var settings = PlayableFadeCoverSettings.Active;
        Reveal(settings != null ? settings.revealDuration : 0.5f, settings != null ? settings.revealDelay : 0.15f);
    }

    public static void Reveal(float duration, float delay)
    {
        var img = UI_Manager.instance != null ? UI_Manager.instance.Fade_Img : null;
        if (img == null)
            return;

        img.DOFade(0f, duration).SetDelay(delay).OnComplete(() => img.gameObject.SetActive(false));
    }
}
