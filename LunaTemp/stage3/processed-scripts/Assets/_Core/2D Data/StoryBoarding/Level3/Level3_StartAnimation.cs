using UnityEngine;
using DG.Tweening;
using UnityEngine.UI;
using System.Collections;
using UnityEngine.Events;

public class Level3_StartAnimation : MonoBehaviour
{
    [Header("Canvas")]
    [SerializeField] Canvas canvas;

    [Header("View")]
    [SerializeField] GameObject view1;

    [Header("Step 1 - Backgrounds")]
    [SerializeField] RectTransform bgTop;      // Comes from Right
    [SerializeField] RectTransform bgBottom;   // Comes from Left

    [Header("Step 2 - Knock / Door")]
    [SerializeField] RectTransform imageKnock;   // Hidden on start, then comes from Left
    [SerializeField] RectTransform imageDoor;    // Shifts left after the knock
    [SerializeField] float doorShiftAmount = 530f;

    [Header("Step 3 - Baby")]
    [SerializeField] RectTransform imageBaby;    // Comes from Left

    [Header("Step 4 - Letter")]
    [SerializeField] RectTransform imageLetter;  // Comes from Bottom

    [Header("Step 5 - Chat Box")]
    [SerializeField] RectTransform chatBox;
    [SerializeField] Text chatBoxText;
    [SerializeField] float typewriterCharDelay = 0.03f;

    [Header("UI Controls")]
    [SerializeField] Button tapToContinueButton;

    [Header("View 2")]
    [SerializeField] GameObject view2;

    [Header("View 2 - Backgrounds")]
    [SerializeField] RectTransform v2_bgTop;     // Comes from Left
    [SerializeField] RectTransform v2_bgMid;     // Comes from Right
    [SerializeField] RectTransform v2_bgBottom;  // Comes from Right

    [Header("View 2 - Bg_Top: Mother & Baby")]
    [SerializeField] RectTransform v2_motherBaby;   // Comes from Right
    [SerializeField] RectTransform v2_topChatBox;
    [SerializeField] Text v2_topChatBoxText;

    [Header("View 2 - Bg_Mid: Girl, Cake, Mother")]
    [SerializeField] RectTransform v2_girl;      // Comes from Right
    [SerializeField] RectTransform v2_cake;      // Comes from Right, ~0.2s after the girl
    [SerializeField] GameObject v2_cakeFlames;   // Hides once the mother arrives
    [SerializeField] GameObject v2_cakeSmoke;    // Shows once the mother arrives
    [SerializeField] RectTransform v2_mother;    // Comes from Right, after girl + cake
    [SerializeField] RectTransform v2_midChatBox;
    [SerializeField] Text v2_midChatBoxText;

    [Header("View 2 - Bg_Bottom: Girl & Mother")]
    [SerializeField] RectTransform v2_girlMother;  // Comes from Bottom
    [SerializeField] RectTransform v2_bottomChatBox;
    [SerializeField] Text v2_bottomChatBoxText;

    [Header("View 3")]
    [SerializeField] GameObject view3;

    [Header("View 3 - Backgrounds")]
    [SerializeField] RectTransform v3_bgTop;     // Comes from Left
    [SerializeField] RectTransform v3_bgBottom;  // Comes from Left

    [Header("View 3 - Bg_Top: Girl")]
    [SerializeField] RectTransform v3_girlPose1;  // Comes from Right
    [SerializeField] GameObject v3_girlPose2;     // Shown 1s after pose1 arrives
    [SerializeField] RectTransform v3_topChatBox;
    [SerializeField] Text v3_topChatBoxText;

    [Header("View 3 - Bg_Bottom: Dress / Crown")]
    [SerializeField] RectTransform v3_dress;      // Comes from Left
    [SerializeField] RectTransform v3_chatBox1;
    [SerializeField] Text v3_chatBox1Text;
    [SerializeField] GameObject v3_dressBlur;     // Replaces dress once the crown arrives
    [SerializeField] RectTransform v3_crown;      // Comes from Bottom
    [SerializeField] RectTransform v3_chatBox2;
    [SerializeField] Text v3_chatBox2Text;

    [Header("View 4")]
    [SerializeField] GameObject view4;   // Comes from Right as View 3 exits Left
    [SerializeField] RectTransform v4_chatBox;
    [SerializeField] Text v4_chatBoxText;

    [Header("Main View")]
    [SerializeField] GameObject mainView;
    [SerializeField] GameObject mainViewButtons;
    [SerializeField] GameObject imageBG;

    [Header("Game Start")]
    [SerializeField] RectTransform gameStartScreen;
    [SerializeField] RectTransform gameStartPop;
    [SerializeField] GameObject handIndication;

    [Header("Settings")]
    [SerializeField] float duration = 0.8f;
    [SerializeField] float offScreenOffset = 1500f;

    [Header("Complete")]
    [SerializeField] GameObject[] itemDisableOnComplete;

    [Header("Audio")]
    public AudioSource musicSource;
    public AudioSource SfxSource;
    public AudioSource Ambience1Source;
    public AudioSource Ambience2Source;
    [Space()]
    public AudioClip view1Clip;
    [Space()]
    public AudioClip view2Clip;
    public AudioClip view2bClip;
    public AudioClip view2cClip;
    [Space()]
    public AudioClip view3Clip;
    public AudioClip view3bClip;
    public AudioClip view3cClip;
    [Space()]
    public AudioClip view4Clip;

    private bool hasUserTapped = false;
    private bool canTap = false;

    private bool isTyping = false;
    private Coroutine typeRoutine;
    private Text currentTypingText;
    private string currentFullMessage;

    private float bgTopDefaultX;
    private float bgBottomDefaultX;
    private float imageKnockDefaultX;
    private float imageDoorDefaultX;
    private float imageBabyDefaultX;
    private float imageLetterDefaultY;

    private float v2_bgTopDefaultX;
    private float v2_bgMidDefaultX;
    private float v2_bgBottomDefaultX;
    private float v2_motherBabyDefaultX;
    private float v2_girlDefaultX;
    private float v2_cakeDefaultX;
    private float v2_motherDefaultX;
    private float v2_girlMotherDefaultY;

    private float v3_bgTopDefaultX;
    private float v3_bgBottomDefaultX;
    private float v3_girlPose1DefaultX;
    private float v3_dressDefaultX;
    private float v3_crownDefaultY;

    private float view3DefaultX;
    private float view4DefaultX;

    private float gameStartPopDefaultY;

    public UnityEvent OnComplete;

    public Animator skipBtnAnim;

    private void Awake()
    {
        canvas.worldCamera = MenuManager.instance != null ? MenuManager.instance.mainCam : Camera.main;
    }

    void Start()
    {
        SetupInitialState();
        StartCoroutine(MainFlow());
    }

    void SetupInitialState()
    {
        view1.SetActive(true);

        bgTopDefaultX = bgTop.anchoredPosition.x;
        bgTop.anchoredPosition = new Vector2(bgTopDefaultX + offScreenOffset, bgTop.anchoredPosition.y);

        bgBottomDefaultX = bgBottom.anchoredPosition.x;
        bgBottom.anchoredPosition = new Vector2(bgBottomDefaultX - offScreenOffset, bgBottom.anchoredPosition.y);

        imageKnockDefaultX = imageKnock.anchoredPosition.x;
        imageKnock.anchoredPosition = new Vector2(imageKnockDefaultX - offScreenOffset, imageKnock.anchoredPosition.y);
        imageKnock.gameObject.SetActive(false);

        imageDoorDefaultX = imageDoor.anchoredPosition.x;

        imageBabyDefaultX = imageBaby.anchoredPosition.x;
        imageBaby.anchoredPosition = new Vector2(imageBabyDefaultX + (offScreenOffset*2), imageBaby.anchoredPosition.y);

        imageLetterDefaultY = imageLetter.anchoredPosition.y;
        imageLetter.anchoredPosition = new Vector2(imageLetter.anchoredPosition.x, imageLetterDefaultY - offScreenOffset);

        chatBox.localScale = Vector3.zero;

        view2.SetActive(false);

        v2_bgTopDefaultX = v2_bgTop.anchoredPosition.x;
        v2_bgTop.anchoredPosition = new Vector2(v2_bgTopDefaultX - offScreenOffset, v2_bgTop.anchoredPosition.y);

        v2_bgMidDefaultX = v2_bgMid.anchoredPosition.x;
        v2_bgMid.anchoredPosition = new Vector2(v2_bgMidDefaultX + offScreenOffset, v2_bgMid.anchoredPosition.y);

        v2_bgBottomDefaultX = v2_bgBottom.anchoredPosition.x;
        v2_bgBottom.anchoredPosition = new Vector2(v2_bgBottomDefaultX - offScreenOffset, v2_bgBottom.anchoredPosition.y);

        v2_motherBabyDefaultX = v2_motherBaby.anchoredPosition.x;
        v2_motherBaby.anchoredPosition = new Vector2(v2_motherBabyDefaultX - offScreenOffset, v2_motherBaby.anchoredPosition.y);

        v2_girlDefaultX = v2_girl.anchoredPosition.x;
        v2_girl.anchoredPosition = new Vector2(v2_girlDefaultX - (offScreenOffset*2), v2_girl.anchoredPosition.y);

        v2_cakeDefaultX = v2_cake.anchoredPosition.x;
        v2_cake.anchoredPosition = new Vector2(v2_cakeDefaultX - (offScreenOffset * 2), v2_cake.anchoredPosition.y);

        v2_cakeFlames.SetActive(true);
        v2_cakeSmoke.SetActive(false);

        v2_motherDefaultX = v2_mother.anchoredPosition.x;
        v2_mother.anchoredPosition = new Vector2(v2_motherDefaultX + offScreenOffset, v2_mother.anchoredPosition.y);

        v2_girlMotherDefaultY = v2_girlMother.anchoredPosition.y;
        v2_girlMother.anchoredPosition = new Vector2(v2_girlMother.anchoredPosition.x, v2_girlMotherDefaultY - offScreenOffset);

        v2_topChatBox.localScale = Vector3.zero;
        v2_midChatBox.localScale = Vector3.zero;
        v2_bottomChatBox.localScale = Vector3.zero;

        view3.SetActive(false);

        v3_bgTopDefaultX = v3_bgTop.anchoredPosition.x;
        v3_bgTop.anchoredPosition = new Vector2(v3_bgTopDefaultX - offScreenOffset, v3_bgTop.anchoredPosition.y);

        v3_bgBottomDefaultX = v3_bgBottom.anchoredPosition.x;
        v3_bgBottom.anchoredPosition = new Vector2(v3_bgBottomDefaultX + offScreenOffset, v3_bgBottom.anchoredPosition.y);

        v3_girlPose1DefaultX = v3_girlPose1.anchoredPosition.x;
        v3_girlPose1.anchoredPosition = new Vector2(v3_girlPose1DefaultX + (offScreenOffset * 2), v3_girlPose1.anchoredPosition.y);
        v3_girlPose2.SetActive(false);

        v3_dressDefaultX = v3_dress.anchoredPosition.x;
        v3_dress.anchoredPosition = new Vector2(v3_dressDefaultX - (offScreenOffset*2), v3_dress.anchoredPosition.y);
        v3_dressBlur.SetActive(false);

        v3_crownDefaultY = v3_crown.anchoredPosition.y;
        v3_crown.anchoredPosition = new Vector2(v3_crown.anchoredPosition.x, v3_crownDefaultY - offScreenOffset);

        v3_topChatBox.localScale = Vector3.zero;
        v3_chatBox1.localScale = Vector3.zero;
        v3_chatBox2.localScale = Vector3.zero;

        view3DefaultX = view3.GetComponent<RectTransform>().anchoredPosition.x;

        view4.SetActive(false);
        RectTransform view4RectSetup = view4.GetComponent<RectTransform>();
        view4DefaultX = view4RectSetup.anchoredPosition.x;
        view4RectSetup.anchoredPosition = new Vector2(view4DefaultX + offScreenOffset, view4RectSetup.anchoredPosition.y);

        v4_chatBox.localScale = Vector3.zero;

        gameStartPopDefaultY = gameStartPop.anchoredPosition.y;
        gameStartPop.anchoredPosition = new Vector2(gameStartPop.anchoredPosition.x, gameStartPopDefaultY - offScreenOffset);

        tapToContinueButton.gameObject.SetActive(false);
        gameStartScreen.gameObject.SetActive(false);
    }

    public void OnUserTap()
    {
        if (isTyping)
            CompleteTypewriter();

        if (!canTap)
            return;

        hasUserTapped = true;
        canTap = false;
        tapToContinueButton.interactable = false;
    }

    IEnumerator MainFlow()
    {
        yield return new WaitForSeconds(0.5f);

        // --- Step 1: Bg_Top from Right, Bg_Bottom from Left ---
        SfxSource.PlayOneShot(view1Clip);

        Sequence bgIntro = DOTween.Sequence();
        bgIntro.Append(bgTop.DOAnchorPosX(bgTopDefaultX, duration).SetEase(Ease.OutBack));
        bgIntro.Join(bgBottom.DOAnchorPosX(bgBottomDefaultX, duration).SetEase(Ease.OutBack));
        yield return bgIntro.WaitForCompletion();

        // --- Step 2: Knock shows and slides in, then the door shifts left ---
        yield return new WaitForSeconds(0.2f);

        imageKnock.gameObject.SetActive(true);
        yield return imageKnock.DOAnchorPosX(imageKnockDefaultX, duration).SetEase(Ease.OutQuad).WaitForCompletion();

        yield return new WaitForSeconds(0.15f);
        yield return imageDoor.DOAnchorPosX(imageDoorDefaultX - doorShiftAmount, duration * 1.5f).SetEase(Ease.OutQuad).WaitForCompletion();

        // --- Step 3: Baby slides in from Left ---
        yield return new WaitForSeconds(0.2f);
        yield return imageBaby.DOAnchorPosX(imageBabyDefaultX, duration).SetEase(Ease.OutQuad).WaitForCompletion();

        // --- Step 4: Letter slides in from Bottom ---
        yield return new WaitForSeconds(0.2f);
        yield return imageLetter.DOAnchorPosY(imageLetterDefaultY, duration).SetEase(Ease.OutQuad).WaitForCompletion();

        // --- Chat box shows with typewriter text ---
        yield return new WaitForSeconds(0.2f);
        ShowChatBox(chatBox, chatBoxText);

        yield return WaitStep();

        // --- View 2 appears above View 1 ---
        view2.SetActive(true);
        yield return new WaitForSeconds(0.3f);

        SfxSource.PlayOneShot(view2Clip);
        Sequence v2Intro = DOTween.Sequence();
        v2Intro.Append(v2_bgTop.DOAnchorPosX(v2_bgTopDefaultX, duration).SetEase(Ease.OutBack));
        v2Intro.Join(v2_bgMid.DOAnchorPosX(v2_bgMidDefaultX, duration).SetEase(Ease.OutBack));
        v2Intro.Join(v2_bgBottom.DOAnchorPosX(v2_bgBottomDefaultX, duration).SetEase(Ease.OutBack));
        yield return v2Intro.WaitForCompletion();
        view1.SetActive(false);
        // --- Bg_Top: Mother & Baby ---
        yield return new WaitForSeconds(0.2f);
        yield return v2_motherBaby.DOAnchorPosX(v2_motherBabyDefaultX, duration).SetEase(Ease.OutQuad).WaitForCompletion();

        yield return new WaitForSeconds(0.2f);
        ShowChatBox(v2_topChatBox, v2_topChatBoxText);

        yield return WaitStep();

        // --- Bg_Mid: Girl, Cake (0.2s later), then Mother ---
        yield return new WaitForSeconds(0.2f);
        SfxSource.PlayOneShot(view2bClip);
        v2_girl.DOAnchorPosX(v2_girlDefaultX, duration).SetEase(Ease.OutQuad);

        yield return new WaitForSeconds(0.2f);
        yield return v2_cake.DOAnchorPosX(v2_cakeDefaultX, duration).SetEase(Ease.OutQuad).WaitForCompletion();

        yield return new WaitForSeconds(0.2f);
        yield return v2_mother.DOAnchorPosX(v2_motherDefaultX, duration).SetEase(Ease.OutQuad).WaitForCompletion();
       
        yield return new WaitForSeconds(0.2f);

        DOVirtual.DelayedCall(0.25f, () =>
        {
            v2_cakeFlames.SetActive(false);
            v2_cakeSmoke.SetActive(true);
        });

        ShowChatBox(v2_midChatBox, v2_midChatBoxText);

        yield return WaitStep();

        // --- Bg_Bottom: Girl & Mother ---
        yield return new WaitForSeconds(0.2f);
        SfxSource.PlayOneShot(view2cClip);
        yield return v2_girlMother.DOAnchorPosY(v2_girlMotherDefaultY, duration).SetEase(Ease.OutQuad).WaitForCompletion();

        yield return new WaitForSeconds(0.2f);
        ShowChatBox(v2_bottomChatBox, v2_bottomChatBoxText);

        yield return WaitStep();

        // --- View 3 appears above View 2 ---
        view3.SetActive(true);
        SfxSource.PlayOneShot(view3Clip);
        yield return new WaitForSeconds(0.3f);
        Sequence v3Intro = DOTween.Sequence();
        v3Intro.Append(v3_bgTop.DOAnchorPosX(v3_bgTopDefaultX, duration).SetEase(Ease.OutBack));
        v3Intro.Join(v3_bgBottom.DOAnchorPosX(v3_bgBottomDefaultX, duration).SetEase(Ease.OutBack));
        yield return v3Intro.WaitForCompletion();
        view2.SetActive(false);
        // --- Bg_Top: Girl pose swap ---
        yield return new WaitForSeconds(0.2f);
  
        yield return v3_girlPose1.DOAnchorPosX(v3_girlPose1DefaultX, duration).SetEase(Ease.OutQuad).WaitForCompletion();

        yield return new WaitForSeconds(1f);
        v3_girlPose1.gameObject.SetActive(false);
        v3_girlPose2.SetActive(true);

        yield return new WaitForSeconds(0.2f);
        ShowChatBox(v3_topChatBox, v3_topChatBoxText);

        yield return WaitStep();

        // --- Bg_Bottom: Dress reveal ---
        yield return new WaitForSeconds(0.2f);
        SfxSource.PlayOneShot(view3bClip);
        yield return v3_dress.DOAnchorPosX(v3_dressDefaultX, duration).SetEase(Ease.OutQuad).WaitForCompletion();

        yield return new WaitForSeconds(0.2f);
        ShowChatBox(v3_chatBox1, v3_chatBox1Text);

        yield return WaitStep();

        // --- Bg_Bottom: Crown arrives, Dress -> Dress_Blur swap ---
        yield return new WaitForSeconds(0.2f);

        SfxSource.PlayOneShot(view3cClip);
        v3_dress.gameObject.SetActive(false);
        v3_dressBlur.SetActive(true);
        yield return v3_crown.DOAnchorPosY(v3_crownDefaultY, duration).SetEase(Ease.OutQuad).WaitForCompletion();

        yield return new WaitForSeconds(0.2f);
        ShowChatBox(v3_chatBox2, v3_chatBox2Text);

        yield return WaitStep();

        // --- View 4 slides in from the Right as View 3 exits Left ---
        view4.SetActive(true);

        SfxSource.PlayOneShot(view4Clip);

        RectTransform view3Rect = view3.GetComponent<RectTransform>();
        RectTransform view4Rect = view4.GetComponent<RectTransform>();

        Sequence viewSwap = DOTween.Sequence();
        viewSwap.Append(view3Rect.DOAnchorPosX(view3DefaultX - offScreenOffset, duration).SetEase(Ease.InOutQuad));
        viewSwap.Join(view4Rect.DOAnchorPosX(view4DefaultX, duration).SetEase(Ease.InOutQuad));
        yield return viewSwap.WaitForCompletion();

        view3.SetActive(false);

        yield return new WaitForSeconds(0.2f);
        ShowChatBox(v4_chatBox, v4_chatBoxText);

        yield return WaitStep();

        foreach (GameObject obj in itemDisableOnComplete)
        {
            obj.SetActive(false);
        }

        view4.SetActive(false);
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
    }

    IEnumerator WaitStep()
    {
        hasUserTapped = false;
        canTap = true;
        tapToContinueButton.gameObject.SetActive(true);
        tapToContinueButton.interactable = true;

        yield return new WaitUntil(() => hasUserTapped);

        tapToContinueButton.interactable = false;
    }

    void ShowChatBox(RectTransform box, Text text)
    {
        box.localScale = Vector3.zero;
        box.DOScale(1f, duration).SetEase(Ease.OutBack);

        StartTypewriter(text, text.text);
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

        text.resizeTextForBestFit = true;
        text.text = message;
        text.cachedTextGenerator.Invalidate();
        text.cachedTextGenerator.Populate(message, text.GetGenerationSettings(text.rectTransform.rect.size));
        text.resizeTextForBestFit = false;
        text.fontSize = text.cachedTextGenerator.fontSizeUsedForBestFit;

        text.text = "";

        for (int i = 0; i < message.Length; i++)
        {
            text.text += message[i];
            yield return new WaitForSeconds(typewriterCharDelay);
        }

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

        isTyping = false;
    }

    public void Accept()
    {

        handIndication.SetActive(false);
        gameStartPop.DOAnchorPosY(gameStartPopDefaultY - offScreenOffset, 0.3f).SetEase(Ease.InBack);

        OnSkipPressed(false);
    }

    void OnSkipPressed(bool showFadeAnim)
    {
        if (showFadeAnim)
            LoadingManager.instance.ShowFadeAnim(0.5f, 1f);

        DOVirtual.DelayedCall(1f, () =>
        {
            gameObject.SetActive(false);
        });

        mainViewButtons.SetActive(true);

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
    }
}
