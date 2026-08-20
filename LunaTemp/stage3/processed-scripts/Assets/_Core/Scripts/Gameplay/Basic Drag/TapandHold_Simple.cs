using DG.Tweening;
using System.Collections;
using UnityEngine;
using UnityEngine.Events;

public class TapandHold_Simple : MonoBehaviour
{
    [Header("───── Settings ─────")]
    [Tooltip("Hold duration in seconds to reach 100%")]
    [SerializeField] private float holdDuration = 2.5f;
    [Tooltip("Minimum movement required to count as dragging")]
    [SerializeField] private float dragThreshold = 0.5f;

    [Header("Visuals")]
    [SerializeField] private bool fadeInOnHold = true;
    [SerializeField] private bool fadeOutOnRelease = true;
    [SerializeField] private SpriteRenderer targetSprite;

    [Header("Events")]
    [SerializeField] private UnityEvent onHoldComplete;

    [Header("───── Debug ─────")]
    [SerializeField] private float currentProgress = 0f;
    [SerializeField] private bool isHolding = false;
    [SerializeField] private bool isCompleted = false;

    private Coroutine holdRoutine;
    [SerializeField] private BasicDrag thisTool;

    [Header("SFX")]
    public AudioSource actionSfx;

    private Vector3 lastMousePosition;

    private void Awake()
    {
        if (thisTool != null)
        {
            thisTool.OnMouseDownEvent += StartHolding;
            thisTool.OnMouseUpEvent += HandleToolMouseUp;
        }
    }

    private void OnDisable()
    {
        if (thisTool != null)
        {
            thisTool.OnMouseDownEvent -= StartHolding;
            thisTool.OnMouseUpEvent -= HandleToolMouseUp;
        }
    }

    private void StartHolding()
    {
        // Agar pehle hi complete ho chuka hai to dobara start na ho (Optional)
        if (isHolding || isCompleted) return;

        isHolding = true;
        lastMousePosition = Input.mousePosition;

        if (holdRoutine != null)
            StopCoroutine(holdRoutine);

        holdRoutine = StartCoroutine(HoldProgressRoutine());

        if (actionSfx != null)
        {
            actionSfx.Play();
        }
    }

    private void HandleToolMouseUp()
    {
        // SIRF yahan check hoga ke event call karna hai ya nahi
        if (isCompleted)
        {
            onHoldComplete?.Invoke();

            // Event call hone ke baad SFX handle karein
            if (actionSfx != null)
                actionSfx.gameObject.SetActive(false);

            // isCompleted ko reset na karein agar aap chahte hain ke ye dobara na chale
            // isCompleted = false; 
        }
        else
        {
            // Agar progress complete nahi hui aur mouse chor diya
            if (actionSfx != null)
                actionSfx.Stop();
        }

        StopHolding();
    }

    private void StopHolding()
    {
        isHolding = false;

        if (holdRoutine != null)
        {
            StopCoroutine(holdRoutine);
            holdRoutine = null;
        }

        if (fadeOutOnRelease && !isCompleted) // Fade out only if not completed
            FadeOutVisual();
    }

    private IEnumerator HoldProgressRoutine()
    {
        float timer = currentProgress * holdDuration;
        float lastVibrationTime = Time.time;

        while (timer < holdDuration)
        {
            float moveDistance = Vector3.Distance(Input.mousePosition, lastMousePosition);

            if (moveDistance > dragThreshold)
            {
                timer += Time.deltaTime;
                currentProgress = Mathf.Clamp01(timer / holdDuration);

                UI_Manager.instance.SetProgressBar(currentProgress);
                UpdateVisuals();

                {
                    
                    lastVibrationTime = Time.time;
                }

                lastMousePosition = Input.mousePosition;
            }

            if (currentProgress >= 1f)
            {
                isCompleted = true; // Sirf mark karein ke ho gaya hai
                if (actionSfx != null && actionSfx.isPlaying) actionSfx.Stop(); // Optional: Progress full hote hi sound band
                yield break; // Routine khatam
            }

            yield return null;
        }
    }

    private void UpdateVisuals()
    {
        if (targetSprite == null || !fadeInOnHold) return;

        Color c = targetSprite.color;
        c.a = Mathf.Lerp(0f, 1f, currentProgress);
        targetSprite.color = c;
    }

    private void FadeOutVisual()
    {
        if (targetSprite == null) return;

        Color c = targetSprite.color;
        c.a = 0f;
        targetSprite.color = c;
    }

    public void ResetProgress()
    {
        StopHolding();
        currentProgress = 0f;
        isCompleted = false;
        UpdateVisuals();
    }
}
