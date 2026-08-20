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

        progress += 0.2f;
        UI_Manager.instance.SetProgressBar(progress);
    }
}
