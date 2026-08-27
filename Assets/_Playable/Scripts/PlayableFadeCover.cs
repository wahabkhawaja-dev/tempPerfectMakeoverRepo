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

    /// <summary>
    /// Fades TO opaque over <paramref name="duration"/>, then runs <paramref name="onCovered"/>.
    /// Use for a menu → level swap: the hard cut happens while the screen is fully covered, so
    /// the level never appears out of nowhere. Pair with Reveal() at the end of onCovered.
    /// If there is no fade image, onCovered still runs — the swap must never be lost.
    /// </summary>
    public static void Cover(float duration, System.Action onCovered)
    {
        var img = UI_Manager.instance != null ? UI_Manager.instance.Fade_Img : null;
        if (img == null)
        {
            if (onCovered != null)
                onCovered();
            return;
        }

        img.gameObject.SetActive(true);
        img.DOKill();

        var c = img.color;
        c.a = 0f;
        img.color = c;

        img.DOFade(1f, duration).SetEase(Ease.Linear).OnComplete(() =>
        {
            if (onCovered != null)
                onCovered();
        });
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
