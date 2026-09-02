using UnityEngine;
using DG.Tweening;
using UnityEngine.UI;
using System.Collections;
using UnityEngine.Events;

public class Level1_StartAnimation : MonoBehaviour
{

    [Header("Canvas")]
    [SerializeField] Canvas canvas;
    [SerializeField] CanvasGroup canvasGroup;


    [Header("Views")]
    [SerializeField] GameObject view1;
    [SerializeField] GameObject view2;

    [Header("View 1 Elements")]
    [SerializeField] RectTransform v1_top;
    [SerializeField] RectTransform v1_bottom;
    [SerializeField] RectTransform v1_charTop;
    [SerializeField] RectTransform v1_charBottom;
    [SerializeField] RectTransform v1_chatBox1;
    [SerializeField] Text v1_chatBox1Text;
    [SerializeField, TextArea] string v1_chatBox1Message = "I can't live like this, I need to make money.";
    [SerializeField] RectTransform v1_posterMask;
    [SerializeField] RectTransform v1_chatBox2;
    [SerializeField] Text v1_chatBox2Text;
    [SerializeField, TextArea] string v1_chatBox2Message = "WHAAAT?! Could this change my life?";

    [Header("View 2 Elements")]
    [SerializeField] RectTransform v2_top;
    [SerializeField] RectTransform v2_bottom;
    [SerializeField] RectTransform v2_car;         // Comes from Right
    [SerializeField] RectTransform v2_charLeft;    // Comes from Left
    [SerializeField] RectTransform v2_chatBox1;
    [SerializeField] Text v2_chatBox1Text;
    [SerializeField, TextArea] string v2_chatBox1Message = "You think a trash like you can win? Wake up, dreamer!";
    [SerializeField] RectTransform v2_charRight;   // Comes from Right (Bottom char)
    [SerializeField] RectTransform v2_chatBox2;
    [SerializeField] Text v2_chatBox2Text;
    [SerializeField, TextArea] string v2_chatBox2Message = "Is there anyone who can help me?";

    [Header("Main View")]
    [SerializeField] MenuLevel menuLvl;
    [SerializeField] GameObject mainView;
    [SerializeField] GameObject mainViewButtons;
    [SerializeField] GameObject imageBG;

    [Header("Start pop")]
    [SerializeField] RectTransform gameStartScreen;
    [SerializeField] RectTransform gameStartPop;
    [SerializeField] Text gameStartDescriptionText;
    [SerializeField, TextArea] string gameStartDescriptionMessage = "She needs help, do you accept the challenge?";
    [SerializeField] GameObject handIndication;

    [Header("Complete")]
    [SerializeField] GameObject[] itemDisableOnComplete;

    [Header("UI Controls")]
    [SerializeField] Button tapToContinueButton;

    [Header("Settings")]
    [SerializeField] float duration = 0.8f;
    [SerializeField] float typewriterCharDelay = 0.03f;

    [Header("Audio")]
    public AudioSource SfxSource;
    public AudioSource musicCarSource;
    [Space()]
    public AudioClip view1Clip;
    public AudioClip view2Clip;
    public AudioClip view3Clip;
    public AudioClip view4Clip;
    [Space()]
    public AudioSource typewriterSfxSource;
    public AudioClip typewriterSfxClip;


    private bool hasUserTapped = false;
    private bool canTap = false;
    private int tapCount = 0;

    private bool isTyping = false;
    private Coroutine typeRoutine;
    private Text currentTypingText;
    private string currentFullMessage;

    private float gameStartPopDefaultY;

    public UnityEvent OnComplete;

    public Animator skipBtnAnim;

    void Awake()
    {
        canvas.worldCamera = MenuManager.instance.mainCam;
    }

    void Start()
    {
        SetupInitialState();
        StartCoroutine(MainFlow());

        canvasGroup.DOFade(0, 0.001f);

        canvasGroup.DOKill();
        canvasGroup.DOFade(1, 1f).SetDelay(0.1f).OnComplete(() =>
        {
            canvasGroup.enabled = false;
        });

        try
        {
            Statics.GA_CustomStringEvent("StoryStart_1");
        }
        catch { }
    }

    void SetupInitialState()
    {
        view1.SetActive(true);
        view2.SetActive(false);

        // View 1 Initial
        v1_top.anchoredPosition = new Vector2(0, v1_top.anchoredPosition.y);
        v1_bottom.anchoredPosition = new Vector2(0, v1_bottom.anchoredPosition.y);
        v1_chatBox1.localScale = Vector3.zero;
        v1_chatBox2.localScale = Vector3.zero;
        v1_posterMask.gameObject.SetActive(false);

        // View 2 Initial
        v2_top.anchoredPosition = new Vector2(1500, v2_top.anchoredPosition.y);
        v2_bottom.anchoredPosition = new Vector2(-1500, v2_bottom.anchoredPosition.y);
        v2_car.anchoredPosition = new Vector2(1500, v2_car.anchoredPosition.y);
        v2_chatBox1.localScale = Vector3.zero;
        v2_chatBox2.localScale = Vector3.zero;

        gameStartPopDefaultY = gameStartPop.anchoredPosition.y;
        gameStartPop.anchoredPosition = new Vector2(gameStartPop.anchoredPosition.x, gameStartPopDefaultY - 1500f);

        tapToContinueButton.gameObject.SetActive(false);
        gameStartScreen.gameObject.SetActive(false);
    }

    public void OnUserTap()
    {
        if (isTyping)
            CompleteTypewriter();

        if (!canTap) return;

        hasUserTapped = true;
        canTap = false; // Disable until next pause point
        tapToContinueButton.interactable = false;


        // if (VibrationManager.instance)
        //     VibrationManager.instance.MediumImpact();
    }

    IEnumerator MainFlow()
    {
        // --- VIEW 1 START ---
        yield return new WaitForSeconds(0.5f);

        /* Sequence v1Bars = DOTween.Sequence();
         v1Bars.Append(v1_top.DOAnchorPosX(0, duration).SetEase(Ease.OutBack));
         v1Bars.Join(v1_bottom.DOAnchorPosX(0, duration).SetEase(Ease.OutBack));

         SfxSource.PlayOneShot(view1Clip);
         yield return v1Bars.WaitForCompletion();*/

        yield return v1_charTop.DOAnchorPosX(0, duration).SetEase(Ease.OutQuad).WaitForCompletion();

        ShowChatBox(v1_chatBox1, v1_chatBox1Text, v1_chatBox1Message);
        yield return WaitStep(); // Wait for Tap 1


        SfxSource.PlayOneShot(view2Clip);

        v1_posterMask.gameObject.SetActive(true);
        yield return new WaitForSeconds(0.5f);

        yield return v1_charBottom.DOAnchorPosX(0, duration).SetEase(Ease.OutQuad).WaitForCompletion();

        ShowChatBox(v1_chatBox2, v1_chatBox2Text, v1_chatBox2Message);
        yield return WaitStep(); // Wait for Tap 2

        SfxSource.PlayOneShot(view3Clip);

        // --- TRANSITION TO VIEW 2 ---
        Sequence v1Exit = DOTween.Sequence();
        v1Exit.Append(v1_top.DOAnchorPosX(-1500, duration).SetEase(Ease.InBack));
        v1Exit.Join(v1_bottom.DOAnchorPosX(1500, duration).SetEase(Ease.InBack));

        yield return v1Exit.WaitForCompletion();

        view1.SetActive(false);
        // yield return new WaitForSeconds(0.5f);
        view2.SetActive(true);
        // yield return new WaitForSeconds(0.2f);

        // --- VIEW 2 START ---
        // 1. Top & Bottom Bars
        Sequence v2Bars = DOTween.Sequence();
        v2Bars.Append(v2_top.DOAnchorPosX(0, duration).SetEase(Ease.OutBack));
        v2Bars.Join(v2_bottom.DOAnchorPosX(0, duration).SetEase(Ease.OutBack));
        yield return v2Bars.WaitForCompletion();

        // 2. Car from Right and Char from Left

        musicCarSource.Play();
        musicCarSource.DOFade(1, 1f);

        Sequence carIntro = DOTween.Sequence();
        carIntro.Append(v2_car.DOAnchorPos(Vector2.zero, duration).SetEase(Ease.OutQuad));
        carIntro.Join(v2_charLeft.DOAnchorPosX(0, duration).SetDelay(0.5f).SetEase(Ease.OutQuad));
        yield return carIntro.WaitForCompletion();

        // 3. First Chat Box View 2
        ShowChatBox(v2_chatBox1, v2_chatBox1Text, v2_chatBox1Message);
        yield return WaitStep(); // Wait for Tap 3

        musicCarSource.DOFade(0.5f, 1f);

        SfxSource.PlayOneShot(view4Clip);
        // 4. Second Character from Right
        yield return v2_charRight.DOAnchorPosX(0, duration).SetEase(Ease.OutQuad).WaitForCompletion();

        // 5. Second Chat Box View 2
        ShowChatBox(v2_chatBox2, v2_chatBox2Text, v2_chatBox2Message);
        yield return WaitStep(); // Final Tap


        foreach (GameObject obj in itemDisableOnComplete)
        {
            obj.SetActive(false);
        }

        musicCarSource.DOFade(0f, 1f);

        view2.SetActive(false);
        imageBG.SetActive(false);
        tapToContinueButton.gameObject.SetActive(false);
        skipBtnAnim.gameObject.SetActive(false);

        gameStartScreen.gameObject.SetActive(true);
        gameStartPop.DOAnchorPosY(gameStartPopDefaultY, 0.5f).SetEase(Ease.OutBack).OnComplete(() =>
        {
            handIndication.SetActive(true);
        });

        mainView.SetActive(true);
        mainViewButtons.SetActive(false);

        StartTypewriter(gameStartDescriptionText, gameStartDescriptionMessage);

    }

    public void Accept()
    {
        if (isTyping && !gameStartScreen.gameObject.activeInHierarchy)
        {
            CompleteTypewriter();

            // if (VibrationManager.instance)
            //     VibrationManager.instance.MediumImpact();

            return;
        }

        handIndication.SetActive(false);
        gameStartPop.DOAnchorPosY(gameStartPopDefaultY - 1500f, 0.3f).SetEase(Ease.InBack);

        OnSkipPressed(false);

        menuLvl.HandleAccept();

        try
        {
            Statics.GA_CustomStringEvent("StoryComplete_1");
        }
        catch { }
    }

    // Helper to handle chatbox animation
    void ShowChatBox(RectTransform box, Text text, string message)
    {
        box.localScale = Vector3.zero;
        box.DOScale(1f, duration).SetEase(Ease.OutBack);

        StartTypewriter(text, message);
    }

    void StartTypewriter(Text text, string message)
    {
        if (typeRoutine != null)
            StopCoroutine(typeRoutine);

        typeRoutine = StartCoroutine(TypewriterRoutine(text, message));
    }

    IEnumerator TypewriterRoutine(Text text, string message)
    {
        isTyping = true;
        currentTypingText = text;
        currentFullMessage = message;

        // Best Fit sizes to whatever is in the box right now, so with it on the text would
        // resize on every revealed character. Resolving the full message's size up front
        // needs TextGenerator, which Luna's uGUI does not implement, so type at the
        // authored font size instead — set it so the longest message fits the box.
        text.resizeTextForBestFit = false;

        text.text = "";

        PlayTypewriterSfx();

        for (int i = 0; i < message.Length; i++)
        {
            text.text += message[i];
            yield return new WaitForSeconds(typewriterCharDelay);
        }

        StopTypewriterSfx();

        isTyping = false;
        typeRoutine = null;
    }

    void CompleteTypewriter()
    {
        if (typeRoutine != null)
        {
            StopCoroutine(typeRoutine);
            typeRoutine = null;
        }

        if (currentTypingText != null)
            currentTypingText.text = currentFullMessage;

        StopTypewriterSfx();

        isTyping = false;
    }

    void PlayTypewriterSfx()
    {
        if (typewriterSfxSource == null || typewriterSfxClip == null)
            return;

        typewriterSfxSource.clip = typewriterSfxClip;
        typewriterSfxSource.loop = true;
        typewriterSfxSource.Play();
    }

    void StopTypewriterSfx()
    {
        if (typewriterSfxSource == null)
            return;

        typewriterSfxSource.Stop();
    }

    // Helper to handle Tap Waiting
    IEnumerator WaitStep()
    {
        hasUserTapped = false;
        canTap = true;
        tapToContinueButton.gameObject.SetActive(true);
        tapToContinueButton.interactable = true;

        yield return new WaitUntil(() => hasUserTapped);

        // Button hide nahi kar rahe yahan taake glitchy na lage, bas interactable false
        tapToContinueButton.interactable = false;
    }

    void OnSkipPressed(bool showFadeAnim)
    {
        if (showFadeAnim)
            LoadingManager.instance.ShowFadeAnim(0.5f, 1f);

        DOVirtual.DelayedCall(1f, () =>
        {
            gameObject.SetActive(false);

        });

        menuLvl.PlayBtnAnim();

        OnComplete?.Invoke();
    }

    bool skipPressed = false;
    bool skipCompleted = false;

    public void OnSkip()
    {
        if (skipCompleted)
            return;

        if (!skipPressed)
        {
            skipPressed = true;

            skipBtnAnim.enabled = true;

            return;
        }

        skipCompleted = true;

        OnSkipPressed(true);

        try
        {
            Statics.GA_CustomStringEvent("StorySkip_1");
        }
        catch { }
    }
}