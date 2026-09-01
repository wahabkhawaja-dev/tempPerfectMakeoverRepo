using UnityEngine;
using UnityEngine.Events;

public class BD_AnimatorDrag : MonoBehaviour
{
    [Space()]
    public BasicDrag BD;

    [Space()]
    public Animator anim;

    [Space()]
    public AudioSource Source;

    [Space()]
    public bool Vibration;

    [Space()]
    public bool isCompletable = false;
    [Range(0f, 1f)]
    public float completionThreshold = 0.98f;
    public UnityEvent OnComplete;

    bool isPlaying = false;
    bool hasCompleted = false;

    void Start()
    {
        if (anim != null)
        {
            anim.speed = 0.001f; // Luna: never disable the Animator (it stops ticking); ~0 speed freezes it
        }
    }

    void PlayAnim()
    {
        if (isPlaying)
            return;

        isPlaying = true;
        hasCompleted = false;

        if (anim != null)
        {
            anim.speed = 1f;
        }

        if (Source != null)
            Source.Play();

            
    }

    void StopAnim()
    {
        if (!isPlaying)
            return;

        isPlaying = false;
        hasCompleted = false;

        if (anim != null)
        {
            anim.speed = 0.001f; // Luna: never disable the Animator (it stops ticking); ~0 speed freezes it
        }

        if (Source != null)
            Source.Pause();

            
    }

    void Update()
    {
        if (anim == null || BD == null)
            return;

        if (BD.isDragging)
        {
            if (BD.isObjectMovingWhileDragging)
            {
                PlayAnim();
            }
            else
            {
                StopAnim();
            }
        }
        else
        {
            StopAnim();
        }

        if (isCompletable && isPlaying && !hasCompleted)
        {
            AnimatorStateInfo state = anim.GetCurrentAnimatorStateInfo(0);

            if (state.normalizedTime >= completionThreshold)
            {
                hasCompleted = true;

                StopAnim();

                UI_Manager.instance.SetProgressBar(1f);

                if (Source != null)
                {
                    Source.Stop();

                    Source.enabled = false;
                }

                OnComplete?.Invoke();
            }

            else
            {
                UI_Manager.instance.SetProgressBar(state.normalizedTime);
            }
        }
    }
}
