using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class Level1_HairAnim : MonoBehaviour
{
    [Header("───── Settings ─────")]
    [Tooltip("Kitne seconds mein 100% hona chahiye")]
    [SerializeField] private float holdDuration = 2.5f;

    [Tooltip("Kon sa SpriteRenderer fade in karna hai")]
    [SerializeField] private SpriteRenderer targetSprite;

    [Tooltip("Action complete hone par ye event call hoga")]
    [SerializeField] private UnityEvent onHoldComplete;

    [Header("───── Debug / Read-only ─────")]
    [SerializeField] public static float currentProgress = 0f;
    [SerializeField] private bool isHolding = false;

    private Coroutine holdRoutine;

    [SerializeField] GameObject targetObj;
    [SerializeField] BasicDrag thisTool;
    [SerializeField] Collider2D thisToolTip;

    [SerializeField] DOTweenAnimation[] hairsAnim;
    [SerializeField] SpriteRenderer[] hairsRend;
    [Tooltip("Progress fraction at which hairsRend finishes fading in and hairsAnim starts")]
    [SerializeField] float hairsRendFadeThreshold = 0.2f;

    [Header("───── Wet/Dry Hair Cross-fade ─────")]
    [Tooltip("Fades out (1 → 0) as drying progresses")]
    [SerializeField] SpriteRenderer wetHairRend;
    [Tooltip("Fades in (0 → 1) as drying progresses")]
    [SerializeField] SpriteRenderer dryHairRend;
    [SerializeField] SpriteRenderer dryHairRendBack;

    [Header("───── Hair Anim Pick/Release ─────")]
    [SerializeField] float hairAnimStopDuration = 0.6f;
    [SerializeField] float hairAnimResumeDuration = 0.3f;

    private bool hairAnimStarted = false;
    private Tween[] hairsAnimTimeScaleTweens;

    private IEnumerator Start()
    {
        currentProgress = 0f;

        yield return new WaitForSeconds(0.15f);

        thisTool.OnMouseDownEvent += EnableToolTip;
        thisTool.OnMouseUpEvent += DisableToolTip;
    }
    private void OnDisable()
    {
        thisTool.OnMouseDownEvent -= EnableToolTip;
        thisTool.OnMouseUpEvent -= DisableToolTip;
    }
    void EnableToolTip()
    {
        thisToolTip.enabled = true;
    }
    void DisableToolTip()
    {
        thisToolTip.enabled = false;
    }
    private void OnTriggerEnter2D(Collider2D other)
    {
        // Agar tum specific object se trigger hona chahte ho to yahan tag ya layer check kar sakte ho
        // Example: if (!other.CompareTag("Player")) return;

        if (other.gameObject == targetObj)
            StartHolding();
    }


    private void OnTriggerExit2D(Collider2D other)
    {
        // if (!other.CompareTag("Player")) return;
        if (other.gameObject == targetObj)
            StopHolding();
    }


    private void StartHolding()
    {
        if (isHolding) return;

        isHolding = true;
        currentProgress = Mathf.Clamp01(currentProgress); // already started tha to wahan se continue

        if (hairAnimStarted)
            ResumeHairAnim();

        if (dryHairRend != null && !dryHairRend.gameObject.activeSelf)
            dryHairRend.gameObject.SetActive(true);

        for (int i = 0; i < hairsRend.Length; i++)
        {
            if (hairsRend[i] == null)
                continue;

            // The sprites themselves are active, but their shared parent (HairStrands)
            // isn't - without this, no alpha change on the sprites is ever visible.
            Transform parent = hairsRend[i].transform.parent;
            if (parent != null && !parent.gameObject.activeSelf)
                parent.gameObject.SetActive(true);
        }

        if (holdRoutine != null)
            StopCoroutine(holdRoutine);

        UpdateVisuals();
        holdRoutine = StartCoroutine(HoldProgressRoutine());
    }


    private void StopHolding()
    {
        if (!isHolding) return;

        isHolding = false;

        if (hairAnimStarted)
            SlowStopHairAnim();

        if (holdRoutine != null)
        {
            StopCoroutine(holdRoutine);
            holdRoutine = null;
        }
    }


    private IEnumerator HoldProgressRoutine()
    {

        yield return new WaitForSeconds(0.5f);

        float timer = currentProgress * holdDuration;

        while (timer < holdDuration)
        {
            if (thisTool.isObjectMovingWhileDragging)
            {
                timer += Time.deltaTime;
                currentProgress = timer / holdDuration;


                UI_Manager.instance.SetProgressBar(currentProgress);

                UpdateVisuals();

                if (currentProgress >= 1f)
                {
                    CompleteHold();
                    if (wetHairRend != null)
                    {
                        wetHairRend.DOKill();
                        wetHairRend.DOFade(0, 2f);

                    }
                    yield break;
                }
            }

            yield return null;
        }

        // safety
        currentProgress = 1f;
        UpdateVisuals();
        CompleteHold();
    }


    private void UpdateVisuals()
    {
        if (targetSprite != null)
        {
            Color c = targetSprite.color;
            c.a = Mathf.Lerp(0f, 1f, currentProgress);   // 0 → 1 (fade in)
            targetSprite.color = c;
        }

        for (int i = 0; i < hairsRend.Length; i++)
        {
            if (hairsRend[i] == null)
                continue;

            Color hc = hairsRend[i].color;
            hc.a = Mathf.Lerp(0f, 1f, currentProgress / hairsRendFadeThreshold);   // 0 → 1 (fade in by hairsRendFadeThreshold)
            hairsRend[i].color = hc;
        }

        if (!hairAnimStarted && currentProgress >= hairsRendFadeThreshold)
            StartHairAnim();

        if (dryHairRend != null)
        {
            Color dc = dryHairRend.color;
            dc.a = Mathf.Lerp(0f, 1f, currentProgress);   // 0 → 1 (fade in)
            dryHairRend.color = dc;
        }

        if (dryHairRendBack != null)
        {
            Color dc = dryHairRendBack.color;
            dc.a = Mathf.Lerp(0f, 1f, (currentProgress*2));   // 0 → 1 (fade in)
            dryHairRendBack.color = dc;
        }
    }


    private void CompleteHold()
    {
        isHolding = false;
        holdRoutine = null;

        thisTool.OnMouseUpEvent += CompletedCall;


        // Optional: yahan se progress reset karna chahte ho to
        // currentProgress = 0f;
        // UpdateVisuals();
    }

    void StartHairAnim()
    {
        hairAnimStarted = true;

        for (int i = 0; i < hairsAnim.Length; i++)
        {
            hairsAnim[i].DORestart();
        }
    }

    // Eases each hair anim's playback speed down to 0 instead of freezing it instantly.
    void SlowStopHairAnim()
    {
        EnsureTimeScaleTweenArray();

        for (int i = 0; i < hairsAnim.Length; i++)
        {
            Tween t = hairsAnim[i].tween;
            if (t == null || !t.IsActive())
                continue;

            if (hairsAnimTimeScaleTweens[i] != null)
                hairsAnimTimeScaleTweens[i].Kill();

            hairsAnimTimeScaleTweens[i] = DOTween.To(() => t.timeScale, x => t.timeScale = x, 0f, hairAnimStopDuration)
                .OnComplete(() => t.Pause());
        }
    }

    // Eases playback speed back up to normal, restarting from scratch if it fully stopped.
    void ResumeHairAnim()
    {
        EnsureTimeScaleTweenArray();

        for (int i = 0; i < hairsAnim.Length; i++)
        {
            Tween t = hairsAnim[i].tween;

            if (hairsAnimTimeScaleTweens[i] != null)
                hairsAnimTimeScaleTweens[i].Kill();

            if (t == null || !t.IsActive())
            {
                hairsAnim[i].DORestart();
                continue;
            }

            t.Play();
            hairsAnimTimeScaleTweens[i] = DOTween.To(() => t.timeScale, x => t.timeScale = x, 1f, hairAnimResumeDuration);
        }
    }

    void EnsureTimeScaleTweenArray()
    {
        if (hairsAnimTimeScaleTweens == null || hairsAnimTimeScaleTweens.Length != hairsAnim.Length)
            hairsAnimTimeScaleTweens = new Tween[hairsAnim.Length];
    }

    void CompletedCall()
    {
        onHoldComplete?.Invoke();
        thisTool.OnMouseUpEvent -= CompletedCall;

        targetSprite.DOKill();
        targetSprite.DOFade(0, 2f).SetDelay(1f);

        foreach (SpriteRenderer rend in hairsRend)
        {
            rend.DOFade(0, 1f).OnComplete(() => 
            {
                rend.DOKill();
                rend.gameObject.SetActive(false);
            });
        }
    }


    // Inspector mein test button ke liye (optional)
    [ContextMenu("Force Complete")]
    private void ForceComplete()
    {
        StopHolding();
        currentProgress = 1f;
        UpdateVisuals();
        CompleteHold();
    }


    // Optional: reset karne ke liye
    public void ResetProgress()
    {
        StopHolding();
        currentProgress = 0f;
        UpdateVisuals();
    }
}
