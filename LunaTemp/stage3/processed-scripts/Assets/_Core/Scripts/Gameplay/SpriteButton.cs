using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.EventSystems;

[RequireComponent(typeof(BoxCollider2D))]
public class SpriteButton : MonoBehaviour
{
    [Space(10)]
    [SerializeField] private Transform pivot;

    [Space(10)]
    [Header("Press Scale Settings")]
    [Tooltip("Percentage by which the SpriteRenderer scale is reduced while held.")]
    [Range(0f, 100f)]
    [SerializeField] private float reductionChange = 10f;

    [SerializeField] private float animationDuration = 0.1f;

    [Space()]
    public bool isLocked = false;

    public string lockMsg = "";

    [Space()]
    public UnityEvent onClick;

    [Tooltip("Fired when this button is tapped while isLocked. PlayableRouter listens to this " +
             "to count locked taps and fire the store CTA after N of them.")]
    public UnityEvent onLockedClick;

    // Scale of the SpriteRenderer only
    private Vector3 originalSpriteScale;

    private Tween currentTween;
    private Tween delayedClickTween;
    private Tween finishResetTween;

    private bool isFinished;
    private bool isPressed;

    [Space()]
    public bool isLevelBtnSfx = false;

    // Only one SpriteButton can be actively pressed at a time
    private static SpriteButton activeButton;

    // Prevents automatic interaction when collider is enabled
    // while mouse is already sitting on the button.
    private bool ignoreInitialHover;

    private Vector3 lastMousePosition;
    private bool hasMousePosition;

    bool scaleSaved = false;

    private Collider2D myCollider;

    void Awake()
    {
        if (pivot != null)
            originalSpriteScale = pivot.transform.localScale;

        myCollider = GetComponent<Collider2D>();

        lastMousePosition = Input.mousePosition;

        hasMousePosition = true;
    }

    // =========================================================
    // ENABLE
    // =========================================================

    void OnEnable()
    {
        isFinished = false;
        isPressed = false;

        currentTween?.Kill();
        delayedClickTween?.Kill();
        finishResetTween?.Kill();

        currentTween = null;
        delayedClickTween = null;
        finishResetTween = null;

        // Reset ONLY the SpriteRenderer scale.
        if (pivot != null)
            pivot.transform.localScale = originalSpriteScale;

        // Prevent automatic interaction when the collider is enabled
        // while the mouse is already sitting over the button.
        ignoreInitialHover = true;

        lastMousePosition = Input.mousePosition;
        hasMousePosition = true;

        if (activeButton == this)
            activeButton = null;
    }


    // =========================================================
    // UPDATE
    // =========================================================

    void Update()
    {
        if (ignoreInitialHover)
        {
            Vector3 currentMousePosition = Input.mousePosition;

            if (hasMousePosition &&
                (currentMousePosition - lastMousePosition).sqrMagnitude > 0.01f)
            {
                ignoreInitialHover = false;
            }

            lastMousePosition = currentMousePosition;
        }

        // Luna/Bridge.NET never delivers OnMouseDown/OnMouseUp for a Collider2D, so the press
        // is polled here instead — same pattern BasicDrag already uses. See PointerInput.
        if (Input.GetMouseButtonDown(0))
        {
            if (!isOverUI() && PointerInput.IsOverCollider(myCollider))
                PointerDown();
        }
        else if (Input.GetMouseButtonUp(0) && isPressed)
        {
            PointerUp();
        }
    }


    // =========================================================
    // POINTER DOWN  (polled from Update, see note there)
    // =========================================================

    void PointerDown()
    {
        if (isOverUI())
            return;

        if (isFinished)
            return;

        if (ignoreInitialHover)
            ignoreInitialHover = false;

        if (!scaleSaved)
        {
            scaleSaved = true;

            if (pivot != null)
                originalSpriteScale = pivot.transform.localScale;
        }

        // Reset previously active button
        // without triggering its click event.
        if (activeButton != null && activeButton != this)
        {
            activeButton.ResetButtonState();
        }

        activeButton = this;
        isPressed = true;

        currentTween?.Kill();

        if (pivot == null)
            return;

        // Calculate reduction from the SpriteRenderer's scale.
        float reductionMultiplier = 1f - (reductionChange / 100f);

        Vector3 reducedScale =
            originalSpriteScale * reductionMultiplier;

        // Animate ONLY the SpriteRenderer.
        currentTween = pivot.transform
            .DOScale(reducedScale, animationDuration)
            .SetEase(Ease.OutQuad);

        // Haptics
        // if (VibrationManager.instance)
            // VibrationManager.instance.MediumImpact();
    }


    // =========================================================
    // POINTER UP  (polled from Update, see note there)
    // =========================================================

    void PointerUp()
    {
        if (!isPressed)
            return;

        isPressed = false;

        // Check whether released while still over this button.
        bool releasedOnButton = IsPointerOverThisObject();

        // Always restore SpriteRenderer scale.
        if (pivot != null)
        {
            currentTween?.Kill();

            currentTween = pivot.transform
                .DOScale(originalSpriteScale, animationDuration)
                .SetEase(Ease.OutQuad)
                .OnComplete(() =>
                {
                    currentTween = null;
                });
        }

        // ---------------------------------------------------------
        // RELEASED OUTSIDE
        // ---------------------------------------------------------

        if (!releasedOnButton)
        {
            // Cancel the press completely.
            // No click event, no SFX, no locked toast.

            if (activeButton == this)
                activeButton = null;

            return;
        }

        // ---------------------------------------------------------
        // RELEASED ON BUTTON
        // ---------------------------------------------------------

        isFinished = true;

        delayedClickTween?.Kill();

        delayedClickTween = DOVirtual.DelayedCall(0.1f, () =>
        {
            if (isLocked)
            {
                if (ToastManager.instance != null && !string.IsNullOrEmpty(lockMsg))
                    ToastManager.instance.SendToast(lockMsg);

                if (isLevelBtnSfx)
                {
                    if (AudioController.instance != null)
                        AudioController.instance.PlaySfx(0, 2, 0);
                }
                else
                {
                    if (AudioController.instance != null)
                        AudioController.instance.PlaySfx(0, 1, 0);
                }

                onLockedClick?.Invoke();
            }
            else
            {
                onClick?.Invoke();
            }

            delayedClickTween = null;
        });

        // Allow button to be pressed again after 2 seconds.
        finishResetTween?.Kill();

        finishResetTween = DOVirtual.DelayedCall(2f, () =>
        {
            isFinished = false;
            finishResetTween = null;
        });
    }


    // =========================================================
    // RESET
    // =========================================================

    private void ResetButtonState()
    {
        currentTween?.Kill();
        currentTween = null;

        delayedClickTween?.Kill();
        delayedClickTween = null;

        finishResetTween?.Kill();
        finishResetTween = null;

        isFinished = false;
        isPressed = false;

        // Reset ONLY SpriteRenderer scale.
        if (pivot != null)
            pivot.transform.localScale = originalSpriteScale;

        if (activeButton == this)
            activeButton = null;
    }


    // =========================================================
    // POINTER CHECK
    // =========================================================

    bool IsPointerOverThisObject()
    {
        // Same 2D-safe check the press uses, so press and release can't disagree.
        return PointerInput.IsOverCollider(myCollider);
    }


    // =========================================================
    // UI CHECK
    // =========================================================

    public bool isOverUI()
    {
        if (EventSystem.current == null)
            return false;

        if (EventSystem.current.IsPointerOverGameObject())
            return true;

        if (Input.touchCount > 0)
        {
            if (EventSystem.current.IsPointerOverGameObject(
                Input.GetTouch(0).fingerId))
            {
                return true;
            }
        }

        return false;
    }


    // =========================================================
    // DISABLE
    // =========================================================

    void OnDisable()
    {
        currentTween?.Kill();
        delayedClickTween?.Kill();
        finishResetTween?.Kill();

        currentTween = null;
        delayedClickTween = null;
        finishResetTween = null;

        isPressed = false;
        isFinished = false;

        // Reset ONLY SpriteRenderer scale.
        if (pivot != null)
            pivot.transform.localScale = originalSpriteScale;

        if (activeButton == this)
            activeButton = null;
    }
}