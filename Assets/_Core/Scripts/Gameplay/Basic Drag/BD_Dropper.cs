using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using DG.Tweening;

public class BD_Dropper : MonoBehaviour
{
    [SerializeField] BasicDrag thisDrag;
    [Space()]
    [SerializeField] SpriteRenderer toolRend;
    [SerializeField] Sprite toolDef_sp;
    [SerializeField] Sprite toolPick_sp;
    [Space()]
    [SerializeField] Animator animator;
    [Space()]
    [SerializeField] Collider2D tipCol;
    [SerializeField] Collider2D targetCol;
    [Space()]
    [SerializeField] ParticleSystem particleEffect;
    [Space()]
    [SerializeField] bool FadeIn;
    [SerializeField] float fadeDuration = 5f;
    [SerializeField] SpriteRenderer[] itemsToFade;

    [Space()]
    [Tooltip("Speed the dropper animation runs at while it is held on target. The clip is what " +
             "gates completion, so 2 finishes the step in half the time. 1 = original speed.")]
    [SerializeField] float progressSpeed = 1f;

    [Tooltip("Seconds the dropper keeps going after the tip slips off the target or the finger " +
             "lifts. Without it the smallest wobble stalls progress, which reads as the dropper " +
             "being broken. 0 restores the original all-or-nothing behaviour.")]
    [SerializeField] float holdGrace = 0.35f;

    [Space()]
    public UnityEvent OnComplete;

    float graceLeft;

    /// <summary>
    /// True only while the dropper is actually being held on target (or inside its grace
    /// window). BD_AnimationHelper checks this before counting an animation event towards the
    /// progress bar, so the clip's first-frame event cannot fill the bar on activation.
    /// </summary>
    public bool IsProgressing { get { return isActive || graceLeft > 0f; } }

    bool isInsideCol = false;
    bool isPressing = false; // User tap hold kar raha hai ya nahi
    bool isFinished = false;
    bool isActive = false; // Current state tracking ke liye

    private List<Tweener> activeTweens = new List<Tweener>();

    void Start()
    {
        if (animator != null)
            animator.speed = 0.001f; // Luna: never disable the Animator (it stops ticking); ~0 speed freezes it

        if (toolRend != null && toolDef_sp != null)
            toolRend.sprite = toolDef_sp;

        if (FadeIn && itemsToFade != null)
        {
            foreach (var item in itemsToFade)
            {
                if (item != null)
                {
                    Color c = item.color;
                    c.a = 0;
                    item.color = c;

                    // Pause state mein start karein
                    Tweener t = item.DOFade(1f, fadeDuration).SetEase(Ease.Linear).Pause().SetAutoKill(false);
                    activeTweens.Add(t);
                }
            }
        }
    }

    void Update()
    {
        if (isFinished) return;

        // Check karo ke mouse button ya touch hold kiya hua hai
        isPressing = Input.GetMouseButton(0);

        // Logic: Agar trigger ke andar ho AUR user tap hold kar raha ho
        if (isInsideCol && isPressing)
        {
            graceLeft = holdGrace;

            StartProgress();
        }
        else if (graceLeft > 0f)
        {
            // Ride out a wobble instead of stalling the moment the tip clips the edge.
            graceLeft -= Time.deltaTime;
        }
        else
        {
            StopProgress();
        }
    }

    void StartProgress()
    {
        if (isActive) return; // Agar pehle se chal raha hai toh dubara na chale
        isActive = true;

        if (particleEffect != null && !particleEffect.isPlaying)
            particleEffect.Play();

        if (animator != null)
            animator.speed = progressSpeed;

        if (FadeIn)
        {
            foreach (var t in activeTweens) t.Play();
        }

        if (toolRend != null && toolPick_sp != null)
            toolRend.sprite = toolPick_sp;

        Debug.Log("Progress Started: Inside & Pressing");
    }

    void StopProgress()
    {
        if (!isActive) return; // Agar pehle se ruka hai toh dubara na ruke
        isActive = false;

        if (particleEffect != null)
            particleEffect.Stop();

        if (animator != null)
            animator.speed = 0.001f; // Luna: never disable the Animator (it stops ticking); ~0 speed freezes it

        if (FadeIn)
        {
            foreach (var t in activeTweens) t.Pause();
        }

        if (toolRend != null && toolDef_sp != null)
            toolRend.sprite = toolDef_sp;

        Debug.Log("Progress Paused: Trigger se bahar ya Tap chhor diya");
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision == targetCol)
        {
            isInsideCol = true;
        }
    }

    private void OnTriggerExit2D(Collider2D collision)
    {
        if (collision == targetCol)
        {
            isInsideCol = false;
        }
    }

    // Isko Animator ke event se call karein ya logic complete hone par
    public void AnimationFinishedTrigger()
    {
        if (isFinished)
            return;

        // The clip only advances while the dropper is held on target, so reaching this event
        // already means the work was done. Re-testing the exact frame it lands threw away
        // finished attempts over a pixel of wobble. Still guarded, because the animator idles
        // at 0.001 speed rather than stopped (Luna), so it does creep on its own.
        if (isActive || graceLeft > 0f)
        {
            Debug.Log("All Actions Completed!");
            isFinished = true;
            isActive = false;

            if (FadeIn)
            {
                foreach (var t in activeTweens) t.Kill();
            }

            if (particleEffect != null) particleEffect.Stop();
            if (animator != null) animator.speed = 0.001f; // Luna: never disable the Animator (it stops ticking); ~0 speed freezes it

            OnComplete.Invoke();
        }
    }

    private void OnDestroy()
    {
        foreach (var t in activeTweens) t.Kill();
    }
}