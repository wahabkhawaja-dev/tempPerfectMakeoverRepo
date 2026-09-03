using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class BD_AnimationHelper : MonoBehaviour
{
    [Header("Events")]
    public UnityEvent OnAnimationComplete;

    [Space]
    public AudioClip sfxClip;

    [Space]
    [Tooltip("How much of the bar each animation event fills in.")]
    public float progressPerStep = 0.2f;

    [Tooltip("Ceiling for the running total, so a clip with more events than the step size " +
             "accounts for cannot show a full bar before the step is actually finished. The " +
             "real 100% and its tick come from the step's own SetProgressBar() on completion.")]
    public float progressCap = 0.9f;

    [Tooltip("Optional. When set, animation events only count towards the bar while that " +
             "dropper is actually being held on target. Without it the clip's first-frame event " +
             "fires the moment the tool activates and fills the bar before the player has done " +
             "anything. The sound still plays either way.")]
    public BD_Dropper progressGate;

    // Is function ko aap Animation Window mein last frame par call karenge
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
            

        if(sfxClip && AudioController.instance)
            AudioController.instance.PlayAnySfx(0, sfxClip, 0f);

        // The sound always plays; only the bar is gated. A drip that happens because the tool
        // just woke up is not a drop the player placed.
        if (progressGate != null && !progressGate.IsProgressing)
            return;

        progress += progressPerStep;

        if (UI_Manager.instance != null)
            UI_Manager.instance.SetProgressBar(Mathf.Min(progress, progressCap));
    }
}
