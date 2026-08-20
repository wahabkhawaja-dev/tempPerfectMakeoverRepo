using DG.Tweening;
using System.Collections;
using UnityEngine;
using UnityEngine.Events;

public class BD_TapandHold : MonoBehaviour
{
    [Header("───── Settings ─────")]
    [Tooltip("Kitne seconds mein 100% hona chahiye")]
    [SerializeField] private float holdDuration = 2.5f;

    [Tooltip("Kon sa SpriteRenderer fade in karna hai")]
    [SerializeField] bool updateVisuals;
    [SerializeField] private SpriteRenderer targetSprite;

    [Tooltip("Action complete hone par ye event call hoga")]
    [SerializeField] private UnityEvent onHoldComplete;
    [SerializeField] private UnityEvent onCompleteProgress;

    [Header("───── Debug / Read-only ─────")]
    [SerializeField] private float currentProgress = 0f;
    [SerializeField] private bool isHolding = false;

    private Coroutine holdRoutine;

    [SerializeField] GameObject targetObj;
    [SerializeField] BasicDrag thisTool;
    [SerializeField] Collider2D thisToolTip;


    private void Awake()
    {
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
        if (thisToolTip)
            thisToolTip.enabled = true;


    }
    void DisableToolTip()
    {
        if (thisToolTip)
            thisToolTip.enabled = false;

    }
    private void OnTriggerEnter2D(Collider2D other)
    {

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

        if (holdRoutine != null)
            StopCoroutine(holdRoutine);

        holdRoutine = StartCoroutine(HoldProgressRoutine());
    }


    private void StopHolding()
    {
        if (!isHolding) return;

        isHolding = false;

        if (holdRoutine != null)
        {
            StopCoroutine(holdRoutine);
            holdRoutine = null;
        }
    }


    private IEnumerator HoldProgressRoutine()
    {
        float timer = currentProgress * holdDuration;

        while (timer < holdDuration)
        {
            timer += Time.deltaTime;
            currentProgress = timer / holdDuration;


            UI_Manager.instance.SetProgressBar(currentProgress);

            UpdateVisuals();

            if (currentProgress >= 1f)
            {
                CompleteHold();
                yield break;
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
        if (targetSprite == null) return;

        Color c = targetSprite.color;
        c.a = Mathf.Lerp(0f, 1f, currentProgress);   // 0 → 1 (fade in)
        targetSprite.color = c;
    }


    private void CompleteHold()
    {
        isHolding = false;
        holdRoutine = null;

        onCompleteProgress?.Invoke();

        thisTool.OnMouseUpEvent += CompletedCall;


        // Optional: yahan se progress reset karna chahte ho to
        // currentProgress = 0f;
        // UpdateVisuals();
    }

    void CompletedCall()
    {
        onHoldComplete?.Invoke();
        thisTool.OnMouseUpEvent -= CompletedCall;

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