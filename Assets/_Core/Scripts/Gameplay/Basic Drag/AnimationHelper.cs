using UnityEngine;
using UnityEngine.Events;

public class BD_AnimationHelper : MonoBehaviour
{
    [Header("Events")]
    public UnityEvent OnAnimationComplete;

    [Space]
    public AudioClip sfxClip;

    [Space]
    public bool progBar = true;

    public void TriggerOnComplete()
    {
        if (OnAnimationComplete != null)
        {
            OnAnimationComplete?.Invoke();
            Debug.Log("Animation Event Triggered: OnAnimationComplete");
        }
    }
    float progress = 0;

    public void PlaySfx()
    {
        // if (VibrationManager.instance)
            // VibrationManager.instance.MediumImpact();

        if (sfxClip && AudioController.instance)
            AudioController.instance.PlayAnySfx(0, sfxClip, 0f);

        progress += 0.2f;

        if (progBar)
            UI_Manager.instance.SetProgressBar(progress);
    }
}
