using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;
using System.Collections.Generic;

public class UI_Manager : MonoBehaviour
{
    public static UI_Manager instance;

    [Space()]
    public bool levelCompleted = false;
    public bool isPauseActive = false;

    [Space()]
    public int loadIndex; //1 for next ,2 for home

    [Space()]
    [Header("-------------------------------- UI BTNs ---------------------------------------")]
    [Space()]
    [Space()]
    public RectTransform removeAdsButton;
    public RectTransform pauseButton;

    Vector2 removeAdsButtonStartPos;
    Vector2 pauseButtonStartPos;

    [SerializeField] float moveDistance = 200f; // Distance to move buttons up
    [SerializeField] float animationDuration = 0.3f; // Animation duration in seconds
    bool isTouching = false;

    [Header("---------------------- PANELs ----------------------")]
    [Space()]
    public Image Fade_Img;

    [Space()]
    public DOTweenAnimation TopBarAnim;

    [Space()]
    public GameObject MainPanel;

    [Space()]
    public GameObject PausePanel;
    public GameObject PausePopUp;
    public CanvasGroup PauseCanvasGroup;

    [Space()]
    public GameObject RateUsPanel;
    public GameObject RateUsPopUp;

    [Space()]
    public GameObject RemoveAdsPanel;
    public GameObject RemoveAdsPopUp;
    public CanvasGroup RemoveAdsCanvasGroup;
    public DOTweenAnimation[] RemoveAdsAnims;

    [Space()]
    public List<GameObject> thingsToDisableWhenCompletePanel;
    public GameObject CompletePanel;
    public Image LevelIcon;
    public GameObject CompleteParticles;

    [Space()]
    [Header("-------------------------------- TOP BAR ---------------------------------------")]
    [Space()]
    public Image progressBar;
    public Text progressText;

    [Header("Tool Bar Icons")]
    public GameObject toolIcon1;
    public GameObject toolIcon2;
    public GameObject toolIcon3;

    [Header("Tool Bar Targets")]
    public RectTransform target1;
    public RectTransform target2;

    [Header("Tool Bar Animation")]
    public float toolMoveDuration = 0.35f;

    private Image tool1Icon;
    private Image tool2Icon;
    private Image tool3Icon;

    private GameObject tool1Bg;
    private GameObject tool2Bg;
    private GameObject tool3Bg;

    [SerializeField] private string greyBgChildName = "Bg Grey";

    private Image tool1BgGrey;
    private Image tool2BgGrey;
    private Image tool3BgGrey;

    private GameObject tool1Tick;
    private GameObject tool2Tick;
    private GameObject tool3Tick;

    private int nextToolIndex = 0;

    bool showTick = false;

    [Space()]
    public int currentIndex = 0;

    [Space()]
    public List<Sprite> allTools = new List<Sprite>();

    [Header("---------------------- CLOCK ----------------------")]
    [Space()]
    public GameObject clockProgress;
    public Image clockProgressFill;
    public AudioSource clockAudio;

    float m_LastPressTime;
    float m_PressDelay = 1f;

    void Awake()
    {
        instance = this;

        if (pauseButton != null)
            pauseButtonStartPos = pauseButton.anchoredPosition;

        if (removeAdsButton != null)
            removeAdsButtonStartPos = removeAdsButton.anchoredPosition;

    }

    float holdTimer = 0f;
    const float HOLD_DURATION = 0.55f; // 2 seconds

    void Update()
    {
        if (GameManager.instance == null || GameManager.instance.isComplete)
            return;

        if (Input.GetMouseButton(0))
        {
            if (!isOverUI())
            {
                holdTimer += Time.deltaTime;

                if (holdTimer >= HOLD_DURATION && !isTouching)
                {
                    isTouching = true;

                    MoveButtonsOut();
                }
            }
        }

        else if (Input.GetMouseButtonUp(0))
        {
            if (isTouching)
            {
                isTouching = false;

                MoveButtonsIn();
            }

            holdTimer = 0f;
        }
    }

    #region HideBtuttons on touch

    void MoveButtonsOut()
    {
        // Animate buttons to move up out of screen
        if (pauseButton != null)
        {
            pauseButton.DOKill();
            pauseButton.DOAnchorPosX(pauseButtonStartPos.x + moveDistance, animationDuration).SetEase(Ease.OutQuad);
        }

        if (removeAdsButton != null)
        {
            removeAdsButton.DOKill();
            removeAdsButton.DOAnchorPosX(removeAdsButtonStartPos.x - moveDistance, animationDuration).SetEase(Ease.OutQuad);
        }
    }

    void MoveButtonsIn()
    {
        // Animate buttons to return to original position
        if (pauseButton != null)
        {
            pauseButton.DOKill();
            pauseButton.DOAnchorPosX(pauseButtonStartPos.x, animationDuration).SetEase(Ease.InQuad);
        }

        if (removeAdsButton != null)
        {
            removeAdsButton.DOKill();
            removeAdsButton.DOAnchorPosX(removeAdsButtonStartPos.x, animationDuration).SetEase(Ease.InQuad);
        }
    }

    public bool isOverUI()
    {
        // Ignore drag if pointer is over any UI element
        if (EventSystem.current != null && EventSystem.current.IsPointerOverGameObject())
        {
            return true;
        }

        if (EventSystem.current != null && Input.touchCount > 0)
        {
            if (EventSystem.current.IsPointerOverGameObject(Input.GetTouch(0).fingerId))
                return true;
        }

        return false;
    }

    #endregion

    #region Tool icons + Progress bar

    public void InitializeTools(List<Sprite> toolIcons)
    {
        SetProgressBarInstant(0f);

        showTick = false;

        allTools = toolIcons;
        currentIndex = 0;
        nextToolIndex = 0;

        SetupToolIconReferences();

        RectTransform tool1Rect = toolIcon1 != null ? toolIcon1.GetComponent<RectTransform>() : null;
        RectTransform tool2Rect = toolIcon2 != null ? toolIcon2.GetComponent<RectTransform>() : null;
        RectTransform tool3Rect = toolIcon3 != null ? toolIcon3.GetComponent<RectTransform>() : null;

        if (tool1Rect != null)
        {
            tool1Rect.DOKill();
            tool1Rect.anchoredPosition = target1.anchoredPosition;
            tool1Rect.localScale = target1.localScale;
        }

        if (tool2Rect != null)
        {
            tool2Rect.DOKill();
            tool2Rect.anchoredPosition = target2.anchoredPosition;
            tool2Rect.localScale = target2.localScale;
        }

        if (tool3Rect != null)
        {
            tool3Rect.DOKill();
            tool3Rect.anchoredPosition = target2.anchoredPosition;
            tool3Rect.localScale = target2.localScale;
        }

        // First tool
        if (allTools != null && allTools.Count > 0)
        {
            SetToolIcon(
                toolIcon1,
                tool1Icon,
                tool1Bg,
                tool1Tick,
                allTools[0]
            );

            // Current tool -> blue
            SetGreyInstant(tool1BgGrey, 0f);

            nextToolIndex = 1;
        }
        else
        {
            HideToolIcon(toolIcon1, tool1Bg, tool1Tick);
        }

        // Second tool
        if (allTools != null && allTools.Count > 1)
        {
            SetToolIcon(
                toolIcon2,
                tool2Icon,
                tool2Bg,
                tool2Tick,
                allTools[1]
            );

            // Next tool -> grey
            SetGreyInstant(tool2BgGrey, 1f);

            nextToolIndex = 2;
        }
        else
        {
            HideToolIcon(toolIcon2, tool2Bg, tool2Tick);
        }

        // Third icon is the future/reusable slot
        HideToolIcon(toolIcon3, tool3Bg, tool3Tick);

        // Primed grey so it is already grey when it slides into the next slot
        SetGreyInstant(tool3BgGrey, 1f);

        progressBar.DOFillAmount(0, 0);
        progressText.text = "0%";
    }

    public void SetProgressIconIndex(int stepIndex)
    {
        showTick = false;

        currentIndex = stepIndex;

        SetupToolIconReferences();

        if (allTools == null || allTools.Count == 0)
            return;

        int firstIndex = currentIndex;

        if (firstIndex < 0)
            firstIndex = 0;

        if (firstIndex >= allTools.Count)
            firstIndex = allTools.Count - 1;

        // Tool 1 = current
        if (firstIndex < allTools.Count)
        {
            SetToolIcon(
                toolIcon1,
                tool1Icon,
                tool1Bg,
                tool1Tick,
                allTools[firstIndex]
            );

            // Current tool -> blue
            SetGreyInstant(tool1BgGrey, 0f);
        }

        // Tool 2 = next
        int secondIndex = firstIndex + 1;

        if (secondIndex < allTools.Count)
        {
            SetToolIcon(
                toolIcon2,
                tool2Icon,
                tool2Bg,
                tool2Tick,
                allTools[secondIndex]
            );

            // Next tool -> grey
            SetGreyInstant(tool2BgGrey, 1f);
        }
        else
        {
            HideToolIcon(toolIcon2, tool2Bg, tool2Tick);
        }

        // Tool 3 starts hidden
        HideToolIcon(toolIcon3, tool3Bg, tool3Tick);

        // Primed grey so it is already grey when it slides into the next slot
        SetGreyInstant(tool3BgGrey, 1f);

        RectTransform tool1Rect = toolIcon1 != null ? toolIcon1.GetComponent<RectTransform>() : null;
        RectTransform tool2Rect = toolIcon2 != null ? toolIcon2.GetComponent<RectTransform>() : null;
        RectTransform tool3Rect = toolIcon3 != null ? toolIcon3.GetComponent<RectTransform>() : null;

        if (tool1Rect != null)
        {
            tool1Rect.DOKill();
            tool1Rect.anchoredPosition = target1.anchoredPosition;
            tool1Rect.localScale = target1.localScale;
        }

        if (tool2Rect != null)
        {
            tool2Rect.DOKill();
            tool2Rect.anchoredPosition = target2.anchoredPosition;
            tool2Rect.localScale = target2.localScale;
        }

        if (tool3Rect != null)
        {
            tool3Rect.DOKill();
            tool3Rect.anchoredPosition = target2.anchoredPosition;
            tool3Rect.localScale = target2.localScale;
        }

        nextToolIndex = secondIndex + 1;

        progressBar.DOFillAmount(0, toolMoveDuration);
        progressText.text = "0%";
    }

    [Header("Tool Bar Animation Settings")]
    [SerializeField] private float pushOffset = 150f; // Distance for pushes and slide-ins

    public void SetProgressBarPos()
    {
        showTick = false;

        if (allTools == null || allTools.Count == 0)
            return;

        SetupToolIconReferences();

        currentIndex++;

        // No more tools available
        if (currentIndex >= allTools.Count)
        {
            currentIndex = allTools.Count - 1;

            HideToolIcon(toolIcon1, tool1Bg, tool1Tick);
            HideToolIcon(toolIcon2, tool2Bg, tool2Tick);
            HideToolIcon(toolIcon3, tool3Bg, tool3Tick);

            // All slots free again -> prime every grey for the next level
            SetGreyInstant(tool1BgGrey, 1f);
            SetGreyInstant(tool2BgGrey, 1f);
            SetGreyInstant(tool3BgGrey, 1f);

            progressBar.DOKill();
            progressBar.DOFillAmount(0, toolMoveDuration);
            progressText.text = "0%";

            return;
        }

        // =========================================================
        // SAVE CURRENT OBJECT REFERENCES
        // =========================================================

        GameObject oldTool1 = toolIcon1;
        GameObject oldTool2 = toolIcon2;
        GameObject oldTool3 = toolIcon3;

        Image oldIcon1 = tool1Icon;
        Image oldIcon2 = tool2Icon;
        Image oldIcon3 = tool3Icon;

        GameObject oldBg1 = tool1Bg;
        GameObject oldBg2 = tool2Bg;
        GameObject oldBg3 = tool3Bg;

        GameObject oldTick1 = tool1Tick;
        GameObject oldTick2 = tool2Tick;
        GameObject oldTick3 = tool3Tick;

        Image oldGrey1 = tool1BgGrey;
        Image oldGrey2 = tool2BgGrey;
        Image oldGrey3 = tool3BgGrey;

        RectTransform oldTool1Rect = oldTool1 != null ? oldTool1.GetComponent<RectTransform>() : null;
        RectTransform oldTool2Rect = oldTool2 != null ? oldTool2.GetComponent<RectTransform>() : null;
        RectTransform oldTool3Rect = oldTool3 != null ? oldTool3.GetComponent<RectTransform>() : null;

        // Kill all ongoing tweens
        if (oldTool1Rect != null) oldTool1Rect.DOKill();
        if (oldTool2Rect != null) oldTool2Rect.DOKill();
        if (oldTool3Rect != null) oldTool3Rect.DOKill();

        // =========================================================
        // STEP 1: TOOL 2 (NEXT) MOVES TO TARGET 1 (CURRENT)
        // =========================================================

        if (oldTool2Rect != null)
        {
            oldTool2Rect.anchoredPosition = target2.anchoredPosition;
            oldTool2Rect.localScale = target2.localScale;
        }

        ShowToolIcon(oldTool2, oldBg2, oldTick2);

        CanvasGroup oldCanvas2 = oldTool2.GetComponent<CanvasGroup>();
        if (oldCanvas2 == null) oldCanvas2 = oldTool2.AddComponent<CanvasGroup>();
        oldCanvas2.DOKill();
        oldCanvas2.alpha = 1f;

        if (oldTool2Rect != null)
        {
            oldTool2Rect.DOAnchorPos(target1.anchoredPosition, toolMoveDuration).SetEase(Ease.InQuad);
            oldTool2Rect.DOScale(target1.localScale, toolMoveDuration).SetEase(Ease.InQuad);
        }

        // Becoming the current tool: fade the grey away to reveal the blue
        FadeGrey(oldGrey2, 0f, toolMoveDuration);

        // =========================================================
        // STEP 2: TOOL 3 (FUTURE) SLIDES INTO TARGET 2 & FADES IN
        // =========================================================

        int incomingToolIndex = currentIndex + 1;

        if (incomingToolIndex < allTools.Count)
        {
            SetToolIcon(oldTool3, oldIcon3, oldBg3, oldTick3, allTools[incomingToolIndex]);

            // Taking the next slot: it arrives already grey
            SetGreyInstant(oldGrey3, 1f);

            if (oldTool3Rect != null)
            {
                oldTool3Rect.DOKill();

                // Offset it to the right of target 2 for the sliding approach
                Vector2 slideInStartPos = target2.anchoredPosition + new Vector2(pushOffset, 0f);
                oldTool3Rect.anchoredPosition = slideInStartPos;

                // Reset scale in case this object was previously shrunken as Tool 1
                oldTool3Rect.localScale = target2.localScale;

                // Slide it left into its final target2 position
                oldTool3Rect.DOAnchorPos(target2.anchoredPosition, toolMoveDuration).SetEase(Ease.OutCubic);
            }

            ShowToolIcon(oldTool3, oldBg3, oldTick3);

            CanvasGroup oldCanvas3 = oldTool3.GetComponent<CanvasGroup>();
            if (oldCanvas3 == null) oldCanvas3 = oldTool3.AddComponent<CanvasGroup>();

            oldCanvas3.DOKill();
            oldCanvas3.alpha = 0f;
            oldCanvas3.DOFade(1f, toolMoveDuration).SetEase(Ease.OutCubic);
        }
        else
        {
            HideToolIcon(oldTool3, oldBg3, oldTick3);
        }

        // =========================================================
        // STEP 3: IMPACT! PUSH, FADE, AND SCALE DOWN TOOL 1
        // =========================================================

        float impactDelay = toolMoveDuration * 0.9f;
        float pushDuration = toolMoveDuration * 0.75f;

        DOVirtual.DelayedCall(impactDelay, () =>
        {
            if (oldTool1Rect != null)
            {
                // Push Tool 1 further to the left
                Vector2 pushedPosition = target1.anchoredPosition + new Vector2(-pushOffset, 0f);
                oldTool1Rect.DOAnchorPos(pushedPosition, pushDuration).SetEase(Ease.OutCubic);

                // Shrink Tool 1 down to half its size during the push
                oldTool1Rect.DOScale(target1.localScale * 0.5f, pushDuration).SetEase(Ease.OutCubic);
            }

            CanvasGroup oldCanvas1 = oldTool1.GetComponent<CanvasGroup>();
            if (oldCanvas1 == null) oldCanvas1 = oldTool1.AddComponent<CanvasGroup>();

            oldCanvas1.DOKill();
            oldCanvas1.DOFade(0f, pushDuration)
                .SetEase(Ease.OutQuad)
                .OnComplete(() =>
                {
                    // Clean up Tool 1 after it gets shoved off and faded
                    HideToolIcon(oldTool1, oldBg1, oldTick1);

                    // Re-prime its grey: this object is now the hidden/future slot
                    SetGreyInstant(oldGrey1, 1f);
                });
        });

        // =========================================================
        // ROTATE VIRTUAL POINTERS FOR THE 3 REUSABLE OBJECTS
        // =========================================================

        toolIcon1 = oldTool2;
        toolIcon2 = oldTool3;
        toolIcon3 = oldTool1;

        tool1Icon = oldIcon2;
        tool2Icon = oldIcon3;
        tool3Icon = oldIcon1;

        tool1Bg = oldBg2;
        tool2Bg = oldBg3;
        tool3Bg = oldBg1;

        tool1Tick = oldTick2;
        tool2Tick = oldTick3;
        tool3Tick = oldTick1;

        tool1BgGrey = oldGrey2;
        tool2BgGrey = oldGrey3;
        tool3BgGrey = oldGrey1;

        nextToolIndex = currentIndex + 2;

        progressBar.DOKill();
        progressBar.DOFillAmount(0, toolMoveDuration + .05f).SetEase(Ease.InOutQuad);
        progressText.text = "0%";
    }

    public void SetProgressBar(float progress, float duration = .25f)
    {
        // A finished step stays finished. Drivers (scratch cards, tap-and-hold, drag targets)
        // keep pushing their own value for a few frames after the step ends; without this the
        // bar gets dragged back down from 100% to a partial fill and sticks there.
        if (showTick && progress < 1f)
            return;

        if (progressBar != null)
        {
            float clamped = Mathf.Clamp01(progress);

            progressBar.DOKill();
            progressBar.DOFillAmount(clamped, duration);

            int prog = (int)(clamped * 100);
            progressText.text = prog + "%";
        }

        if (progress >= 1f && !showTick)
        {
            showTick = true;

            progressText.text = "100%";

            progressBar.DOFillAmount(1f, duration);

            DOVirtual.DelayedCall(duration, () =>
            {
                ShowToolTick(currentIndex);

                AudioController.instance.PlaySfx(3, 3, 0f);
            });
        }
    }

    void SetProgressBarInstant(float progress)
    {
        if (progressBar != null)
        {
            float clamped = Mathf.Clamp01(progress);

            progressBar.DOFillAmount(clamped, 0.01f);
        }
    }

    // =============================================================
    // TOOL ICON HELPERS
    // =============================================================

    void SetupToolIconReferences()
    {
        if (toolIcon1 != null)
        {
            tool1Icon = FindIconImage(toolIcon1);
            tool1Bg = FindChildObject(toolIcon1, "Bg");
            tool1Tick = FindChildObject(toolIcon1, "Tick");
            tool1BgGrey = FindGreyImage(toolIcon1);
        }

        if (toolIcon2 != null)
        {
            tool2Icon = FindIconImage(toolIcon2);
            tool2Bg = FindChildObject(toolIcon2, "Bg");
            tool2Tick = FindChildObject(toolIcon2, "Tick");
            tool2BgGrey = FindGreyImage(toolIcon2);
        }

        if (toolIcon3 != null)
        {
            tool3Icon = FindIconImage(toolIcon3);
            tool3Bg = FindChildObject(toolIcon3, "Bg");
            tool3Tick = FindChildObject(toolIcon3, "Tick");
            tool3BgGrey = FindGreyImage(toolIcon3);
        }
    }

    Image FindIconImage(GameObject toolObject)
    {
        if (toolObject == null)
            return null;

        Transform iconTransform = toolObject.transform.Find("Icon");

        if (iconTransform != null)
        {
            Image image = iconTransform.GetComponent<Image>();

            if (image != null)
                return image;
        }

        Image[] images = toolObject.GetComponentsInChildren<Image>(true);

        for (int i = 0; i < images.Length; i++)
        {
            if (images[i].gameObject.name == "Icon")
                return images[i];
        }

        return null;
    }

    Image FindGreyImage(GameObject toolObject)
    {
        GameObject grey = FindChildObject(toolObject, greyBgChildName);

        if (grey == null)
            return null;

        return grey.GetComponent<Image>();
    }

    // Grey overlay sits above "Bg" and below "Icon".
    // Alpha 1 = grey (upcoming tool), alpha 0 = blue showing through (current tool).
    void SetGreyInstant(Image grey, float alpha)
    {
        if (grey == null)
            return;

        grey.DOKill();

        grey.gameObject.SetActive(true);

        Color color = grey.color;
        color.a = alpha;
        grey.color = color;
    }

    void FadeGrey(Image grey, float toAlpha, float duration)
    {
        if (grey == null)
            return;

        grey.DOKill();

        grey.gameObject.SetActive(true);

        grey.DOFade(toAlpha, duration).SetEase(Ease.OutQuad);
    }

    GameObject FindChildObject(GameObject parent, string childName)
    {
        if (parent == null)
            return null;

        Transform child = parent.transform.Find(childName);

        if (child != null)
            return child.gameObject;

        Transform[] children = parent.GetComponentsInChildren<Transform>(true);

        for (int i = 0; i < children.Length; i++)
        {
            if (children[i].gameObject.name == childName)
                return children[i].gameObject;
        }

        return null;
    }

    void SetToolIcon(
        GameObject toolObject,
        Image iconImage,
        GameObject bg,
        GameObject tick,
        Sprite sprite)
    {
        if (toolObject == null)
            return;

        if (iconImage != null)
            iconImage.sprite = sprite;

        if (bg != null)
            bg.SetActive(true);

        if (iconImage != null)
            iconImage.gameObject.SetActive(true);

        if (tick != null)
            tick.SetActive(false);

        toolObject.SetActive(true);

        CanvasGroup canvas =
            toolObject.GetComponent<CanvasGroup>();

        if (canvas != null)
            canvas.alpha = 1f;
    }

    void HideToolIcon(
        GameObject toolObject,
        GameObject bg,
        GameObject tick)
    {
        if (toolObject == null)
            return;

        if (bg != null)
            bg.SetActive(false);

        if (tick != null)
            tick.SetActive(false);

        Image icon = FindIconImage(toolObject);

        if (icon != null)
            icon.gameObject.SetActive(false);

        CanvasGroup canvas =
            toolObject.GetComponent<CanvasGroup>();

        if (canvas != null)
            canvas.alpha = 0f;

        toolObject.SetActive(false);
    }

    void ShowToolIcon(
        GameObject toolObject,
        GameObject bg,
        GameObject tick)
    {
        if (toolObject == null)
            return;

        toolObject.SetActive(true);

        if (bg != null)
            bg.SetActive(true);

        Image icon = FindIconImage(toolObject);

        if (icon != null)
            icon.gameObject.SetActive(true);

        if (tick != null)
            tick.SetActive(false);
    }

    void ShowToolTick(int index)
    {
        // The completed tool is ALWAYS the tool currently
        // occupying the LEFT / target1 position.

        if (tool1Tick != null)
        {
            tool1Tick.SetActive(true);
        }
    }

    // =============================================================
    // END TOOL ICON HELPERS
    // =============================================================

    #endregion

    #region PANELs

    public void PauseState(bool state)
    {
        if (GameManager.instance.checkForDrag())
            return;


        if (m_LastPressTime + m_PressDelay > Time.unscaledTime)
            return;

        m_LastPressTime = Time.unscaledTime;

        isPauseActive = state;

        if (state)
        {
            PauseCanvasGroup.alpha = 0f;

            TopBarAnim.DOPlayBackwards();

            DOVirtual.DelayedCall(.2f, () =>
            {
                PauseCanvasGroup.DOKill();
                PauseCanvasGroup.DOFade(1f, .25f);

                PausePanel.SetActive(true);

                PausePopUp.transform.DOKill();
                PausePopUp.transform.localScale = new Vector3(.8f, .8f, .8f);
                PausePopUp.transform.DOScale(1f, .25f).SetEase(Ease.OutBack);

                GameManager.instance.isPaused = true;

                GameManager.instance.MuteLevelAudio();
            });
        }

        else
        {
            PauseCanvasGroup.DOKill();
            PauseCanvasGroup.DOFade(0f, .15f).SetDelay(.25f);

            PausePopUp.transform.DOKill();
            PausePopUp.transform.localScale = new Vector3(1f, 1f, 1f);
            PausePopUp.transform.DOScale(.8f, .35f).SetEase(Ease.InBack).OnComplete(() =>
            {
                GameManager.instance.UnMuteLevelAudio();

                GameManager.instance.isPaused = false;

                PausePanel.SetActive(false);

                TopBarAnim.DORestart();
            });
        }
    }

    public void RemoveAdsState(bool state)
    {
        return;
    }

    public void RateUsState(bool state)
    {
        if (m_LastPressTime + m_PressDelay > Time.unscaledTime)
            return;

        m_LastPressTime = Time.unscaledTime;

        if (state)
        {
            TopBarAnim.DOPlayBackwards();

            DOVirtual.DelayedCall(.2f, () =>
            {
                RateUsPanel.SetActive(true);

                RateUsPopUp.transform.DOKill();
                RateUsPopUp.transform.localScale = Vector3.zero;
                RateUsPopUp.transform.DOScale(1f, .5f).SetEase(Ease.OutBack);

                GameManager.instance.isPaused = true;

                GameManager.instance.MuteLevelAudio();
            });
        }

        else
        {
            RateUsPopUp.transform.DOKill();
            RateUsPopUp.transform.localScale = new Vector3(1f, 1f, 1f);
            RateUsPopUp.transform.DOScale(0, .5f).SetEase(Ease.InBack).OnComplete(() =>
            {
                GameManager.instance.UnMuteLevelAudio();

                GameManager.instance.isPaused = false;

                RateUsPanel.SetActive(false);

                TopBarAnim.DORestart();
            });
        }
    }

    #endregion

    public void ShowCompleteParticles()
    {
        if (AudioController.instance != null)
            AudioController.instance.PlaySfx(0, 0, 0);

        if (CompleteParticles != null)
            CompleteParticles.SetActive(true);
    }

    public void Complete(float duration = 2f)
    {
        levelCompleted = true;

        if (MainPanel != null)
            MainPanel.SetActive(false);

        if (CompleteParticles != null)
            CompleteParticles.SetActive(true);

        DOVirtual.DelayedCall(duration, () =>
        {
            if (CompletePanel != null)
                CompletePanel.SetActive(true);

            foreach (GameObject obj in thingsToDisableWhenCompletePanel)
            {
                if (obj != null)
                {
                    obj.SetActive(false);
                }
            }
        });

        if (LevelIcon != null && GameManager.instance != null && GameManager.instance.currentLevel != null)
            LevelIcon.sprite = GameManager.instance.currentLevel.LevelIcon;
    }

    public void FadeAnim(float duration, float innerDelay)
    {
        Fade_Img.gameObject.SetActive(true);

        Fade_Img.DOKill();
        Fade_Img.DOFade(0, 0.001f);
        Fade_Img.DOFade(1, duration).SetEase(Ease.Linear).SetDelay(0.01f).OnComplete(() =>
        {
            Fade_Img.DOKill();
            Fade_Img.DOFade(0, duration).SetEase(Ease.Linear).SetDelay(innerDelay).OnComplete(() =>
            {
                Fade_Img.gameObject.SetActive(false);
            });
        });
    }

    public void ShowClockProgress(float duration)
    {
        ShowClockProgress(duration, 0f);
    }

    public void ShowClockProgress(float duration, float startFill)
    {
        if (clockProgressFill != null)
        {
            clockProgressFill.DOKill();
            clockProgressFill.fillAmount = Mathf.Clamp01(startFill);
        }

        if (clockAudio != null)
            clockAudio.Play();

        if (clockProgress != null)
            clockProgress.SetActive(true);

        float remaining = Mathf.Max(0.01f, duration);

        if (clockProgressFill != null)
        {
            clockProgressFill.DOFillAmount(1, remaining).OnComplete(HideClockProgress);
        }
    }

    public void HideClockProgress()
    {
        if (clockProgressFill != null)
        {
            clockProgressFill.DOKill();
            clockProgressFill.fillAmount = 0;
        }

        if (clockAudio != null)
            clockAudio.Stop();

        if (clockProgress != null)
            clockProgress.SetActive(false);
    }
}
