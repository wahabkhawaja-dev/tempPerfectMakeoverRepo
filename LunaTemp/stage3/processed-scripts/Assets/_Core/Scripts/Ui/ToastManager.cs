using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

/// <summary>
/// Slide-up toast message. Uses legacy uGUI Text, not TextMeshPro — TMPro is not available
/// in this project's Luna/Playworks build.
/// </summary>
public class ToastManager : MonoBehaviour
{
    public static ToastManager instance;

    [SerializeField] private GameObject toastPanel;
    [SerializeField] private RectTransform toastPopup;
    [SerializeField] private CanvasGroup canvasGroup;
    [SerializeField] private Text toastText;

    [Header("Animation")]
    [SerializeField] private float startY = -500f;     // Below screen
    [SerializeField] private float visibleY = 350f;    // Visible position
    [SerializeField] private float endY = 700f;        // Above screen
    [SerializeField] private float animationTime = 0.3f;
    [SerializeField] private float animationTimeUp = 0.3f;

    void Awake()
    {
        if (instance == null)
        {
            instance = this;
        }
        else
        {
            Destroy(gameObject);
            return;
        }

        if (toastPanel == null || toastText == null)
        {
            Debug.LogWarning("Toast Panel or Text not assigned.");
            return;
        }

        toastPanel.SetActive(false);
        canvasGroup.alpha = 0f;
        toastPopup.anchoredPosition = new Vector2(
            toastPopup.anchoredPosition.x,
            startY);
    }

    public void SendToast(string message, float duration = 1f)
    {
        if (toastPanel == null || toastText == null)
        {
            Debug.LogWarning("Cannot show toast: UI elements not assigned.");
            return;
        }

        CancelInvoke(nameof(HideToast));

        canvasGroup.DOKill();
        toastPopup.DOKill();

        toastText.text = message;

        toastPanel.SetActive(true);

        // Reset starting state
        canvasGroup.alpha = 0f;
        toastPopup.anchoredPosition = new Vector2(
            toastPopup.anchoredPosition.x,
            startY);

        // Animate in
        toastPopup
            .DOAnchorPosY(visibleY, animationTime)
            .SetEase(Ease.OutBack);

        canvasGroup
            .DOFade(1f, animationTime);

        Invoke(nameof(HideToast), duration);
    }

    void HideToast()
    {
        canvasGroup.DOKill();
        toastPopup.DOKill();

        // Animate upward while fading out
        toastPopup
            .DOAnchorPosY(endY, animationTimeUp)
            .SetEase(Ease.Linear);

        canvasGroup
            .DOFade(0f, animationTimeUp)
            .OnComplete(() =>
            {
                toastPanel.SetActive(false);

                // Reset for next toast
                toastPopup.anchoredPosition = new Vector2(
                    toastPopup.anchoredPosition.x,
                    startY);
            });
    }
}
