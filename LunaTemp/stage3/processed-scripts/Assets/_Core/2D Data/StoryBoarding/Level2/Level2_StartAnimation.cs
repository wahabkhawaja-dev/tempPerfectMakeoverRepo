using UnityEngine;
using DG.Tweening;
using UnityEngine.UI;
using System.Collections;
using UnityEngine.Events;

public class Level2_StartAnimation : MonoBehaviour
{
    [Header("Canvas")]
    [SerializeField] Canvas canvas;

    [Header("View")]
    [SerializeField] GameObject view1;

    [Header("View 1 - Parts (slide in)")]
    [SerializeField] RectTransform v1_part1;   // "1" - comes from Left
    [SerializeField] RectTransform v1_part2;   // "2" - comes from Right
    [SerializeField] RectTransform v1_part3;   // "3" - comes from Left
    [SerializeField] RectTransform v1_charSleeping;

    [Header("Alarm Clock")]
    [SerializeField] RectTransform v1_alarmClock;
    [SerializeField] RectTransform v1_alarmClockParent;

    [Header("Part 2 - Character")]
    [SerializeField] RectTransform v1_character;   // Comes from Bottom
    [SerializeField] RectTransform v1_chatBox1;
    [SerializeField] Text v1_chatBox1Text;
    [SerializeField, TextArea] string v1_chatBox1Message = "Principal Rose is gonna be so mad!";

    [Header("Part 3 - Principal / Teacher")]
    [SerializeField] RectTransform v1_principal;   // Comes from Left
    [SerializeField] RectTransform v1_teacher;     // Comes from Right
    [SerializeField] RectTransform v1_chatBox2;
    [SerializeField] Text v1_chatBox2Text;
    [SerializeField, TextArea] string v1_chatBox2Message = "Miss Milly, it's the inspection day. If you can't clean yourself, YOU ARE FIRED!";
    [SerializeField] RectTransform v1_rays;        // Just enabled (fade in)

    [Header("View 2")]
    [SerializeField] GameObject view2;
    [SerializeField] RectTransform v2_kids;      // Comes from Left
    [SerializeField] RectTransform v2_teacher;   // Comes from Left
    [SerializeField] RectTransform v2_chatBox;
    [SerializeField] Text v2_chatBoxText;
    [SerializeField, TextArea] string v2_chatBoxMessage = "I can't afford losing my job, would you help me?";

    [Header("UI Controls")]
    [SerializeField] Button tapToContinueButton;

    [Header("Main View")]
    [SerializeField] GameObject mainView;
    [SerializeField] GameObject mainViewButtons;
    [SerializeField] GameObject imageBG;

    [Header("Game Start")]
    [SerializeField] RectTransform gameStartScreen;
    [SerializeField] RectTransform gameStartPop;
    [SerializeField] Text gameStartDescriptionText;
    [SerializeField, TextArea] string gameStartDescriptionMessage = "She needs help, do you accept the challenge?";
    [SerializeField] GameObject handIndication;

    [Header("Settings")]
    [SerializeField] float duration = 0.8f;
    [SerializeField] float offScreenOffset = 1500f;
    [SerializeField] float typewriterCharDelay = 0.03f;

    [Header("Complete")]
    [SerializeField] GameObject[] itemDisableOnComplete;

    [Header("Audio")]
    public AudioSource musicBeeSource;
    public AudioSource SfxSource;
    public AudioSource AmbienceSource;
    [Space()]
    public AudioClip view1Clip;
    public AudioClip view2Clip;
    public AudioClip view3Clip;
    public AudioClip ambience2Clip;
    [Space()]
    public AudioSource typewriterSfxSource;
    public AudioClip typewriterSfxClip;

    private bool hasUserTapped = false;
    private bool canTap = false;

    private bool isTyping = false;
    private Coroutine typeRoutine;
    private Text currentTypingText;
    private string currentFullMessage;

    private float charDefaultY;
    private float principalDefaultX;
    private float teacherDefaultX;
    private float charSleepingDefaultX;

    private float kidsDefaultX;
    private float teacherV2DefaultX;

    private float gameStartPopDefaultY;

    public UnityEvent OnComplete;

    public Animator skipBtnAnim;

    private void Awake()
    {
        // canvas.worldCamera = MenuManager.instance != null ? MenuManager.instance.mainCam : Camera.main;
    }

    void Start()
    {
        SetupInitialState();
        StartCoroutine(MainFlow());
    }

    void SetupInitialState()
    {
        view1.SetActive(true);

        AmbienceSource.Play();

        // Parts 1 & 3 from Left, Part 2 from Right
        v1_part1.anchoredPosition = new Vector2(-offScreenOffset, v1_part1.anchoredPosition.y);
        v1_part2.anchoredPosition = new Vector2(offScreenOffset, v1_part2.anchoredPosition.y);
        v1_part3.anchoredPosition = new Vector2(-offScreenOffset, v1_part3.anchoredPosition.y);

        // Sleeping character comes in from the left after part 1 arrives
        charSleepingDefaultX = v1_charSleeping.anchoredPosition.x;
        v1_charSleeping.anchoredPosition = new Vector2(charSleepingDefaultX - offScreenOffset, v1_charSleeping.anchoredPosition.y);

        // Alarm clock hidden until it pops
       // v1_alarmClock.localScale = Vector3.zero;
        v1_alarmClockParent.anchoredPosition = new Vector2(offScreenOffset, v1_alarmClockParent.anchoredPosition.y);

        // Character starts below its resting position
        charDefaultY = v1_character.anchoredPosition.y;
        v1_character.anchoredPosition = new Vector2(v1_character.anchoredPosition.x, charDefaultY - offScreenOffset);

        v1_chatBox1.localScale = Vector3.zero;
        v1_chatBox2.localScale = Vector3.zero;

        // Principal from Left, Teacher from Right
        principalDefaultX = v1_principal.anchoredPosition.x;
        v1_principal.anchoredPosition = new Vector2(principalDefaultX - offScreenOffset, v1_principal.anchoredPosition.y);

        teacherDefaultX = v1_teacher.anchoredPosition.x;
        v1_teacher.anchoredPosition = new Vector2(teacherDefaultX + offScreenOffset+1500f, v1_teacher.anchoredPosition.y);

        v1_rays.gameObject.SetActive(false);

        // View 2 initial state
        view2.SetActive(false);

        kidsDefaultX = v2_kids.anchoredPosition.x;
        v2_kids.anchoredPosition = new Vector2(kidsDefaultX - offScreenOffset, v2_kids.anchoredPosition.y);

        teacherV2DefaultX = v2_teacher.anchoredPosition.x;
        v2_teacher.anchoredPosition = new Vector2(teacherV2DefaultX + offScreenOffset, v2_teacher.anchoredPosition.y);

        v2_chatBox.localScale = Vector3.zero;

        gameStartPopDefaultY = gameStartPop.anchoredPosition.y;
        gameStartPop.anchoredPosition = new Vector2(gameStartPop.anchoredPosition.x, gameStartPopDefaultY - offScreenOffset);

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

       /* if (AudioController.instance)
            AudioController.instance.PlayUiClickSfx();

        if (VibrationManager.instance)
            VibrationManager.instance.MediumImpact(); */
    }

    IEnumerator MainFlow()
    {
        yield return new WaitForSeconds(0.5f);

        // --- Parts 1, 2 & 3 slide in together ---

        SfxSource.PlayOneShot(view1Clip);
      
        musicBeeSource.Play();
        musicBeeSource.DOFade(1f, 1f);

        Sequence partsIntro = DOTween.Sequence();
        partsIntro.Append(v1_part1.DOAnchorPosX(0, duration).SetEase(Ease.OutBack));
        partsIntro.Join(v1_part2.DOAnchorPosX(0, duration).SetEase(Ease.OutBack));
        partsIntro.Join(v1_part3.DOAnchorPosX(0, duration).SetEase(Ease.OutBack));
        yield return partsIntro.WaitForCompletion();

        // --- Sleeping character comes in from the left ---
        yield return v1_charSleeping.DOAnchorPosX(charSleepingDefaultX, duration).SetEase(Ease.OutQuad).WaitForCompletion();

        // --- Alarm clock pops then shakes like it's ringing ---
        yield return new WaitForSeconds(0.2f);
        //  yield return v1_alarmClock.DOScale(1f, duration).SetEase(Ease.OutBack).WaitForCompletion();

        yield return v1_alarmClockParent.DOAnchorPosX(0, duration).SetEase(Ease.OutBack).WaitForCompletion(); 
        yield return v1_alarmClock.DORotate(new Vector3(0, 0, 2.5f), 0.1f).SetLoops(20, LoopType.Yoyo).SetEase(ease: Ease.Linear).WaitForCompletion();
        // yield return v1_alarmClock.DOPunchRotation(new Vector3(0, 0, 18f), 0.8f, 8, 0.5f).SetLoops(2,LoopType.Yoyo).WaitForCompletion();

        // --- Part 2: Character rises from bottom ---
        yield return new WaitForSeconds(0.15f);
        yield return v1_character.DOAnchorPosY(charDefaultY, duration).SetEase(Ease.OutQuad).WaitForCompletion();

        ShowChatBox(v1_chatBox1, v1_chatBox1Text, v1_chatBox1Message);
        yield return WaitStep(); // Wait for Tap 1

        // --- Part 3: Principal from Left, Teacher from Right ---
        // Sequence part3Intro = DOTween.Sequence();

        AmbienceSource.DOFade(0, 0.5f).OnComplete(() => 
        {
            AmbienceSource.clip = ambience2Clip;
            AmbienceSource.Play();
            AmbienceSource.DOFade(1, 0.5f);
        });
        


        SfxSource.PlayOneShot(view2Clip);
        yield return v1_principal.DOAnchorPosX(principalDefaultX, duration).SetEase(Ease.OutQuad).WaitForCompletion();
        ShowChatBox(v1_chatBox2, v1_chatBox2Text, v1_chatBox2Message);
        yield return v1_teacher.DOAnchorPosX(teacherDefaultX, duration).SetEase(Ease.OutQuad).WaitForCompletion();
      //  yield return part3Intro.WaitForCompletion();

        yield return new WaitForSeconds(duration);

        // --- Rays enable ---
        v1_rays.gameObject.SetActive(true);
        Image raysImage = v1_rays.GetComponent<Image>();
        if (raysImage != null)
        {
            Color c = raysImage.color;
            c.a = 0f;
            raysImage.color = c;
            raysImage.DOFade(1f, 0.4f);
        }

        yield return WaitStep(); // Final Tap (View 1 end)


        SfxSource.PlayOneShot(view3Clip);
        // --- Transition to View 2 ---
        view1.SetActive(false);
        view2.SetActive(true);
        yield return new WaitForSeconds(0.3f);

        // --- Kids from Left, then Teacher from Left ---
        yield return v2_teacher.DOAnchorPosX(teacherV2DefaultX, duration).SetEase(Ease.OutQuad).WaitForCompletion();
        yield return v2_kids.DOAnchorPosX(kidsDefaultX, duration).SetEase(Ease.OutQuad).WaitForCompletion();

        ShowChatBox(v2_chatBox, v2_chatBoxText, v2_chatBoxMessage);
        yield return WaitStep(); // Final Tap (View 2 end)

        foreach (GameObject obj in itemDisableOnComplete)
        {
            obj.SetActive(false);
        }

        musicBeeSource.Play();
        musicBeeSource.DOFade(0.5f, 1f);

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
        if (isTyping)
        {
            CompleteTypewriter();

            // if (VibrationManager.instance)
                // VibrationManager.instance.MediumImpact();

            return;
        }

        handIndication.SetActive(false);
        gameStartPop.DOAnchorPosY(gameStartPopDefaultY - offScreenOffset, 0.3f).SetEase(Ease.InBack);

        OnSkipPressed(false);
    }

    // Helper to handle chatbox animation (same as Level1)
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

        // Resolve the auto-size font size against the FULL message first, then lock it,
        // so the size doesn't keep changing as characters are revealed one by one.
        text.resizeTextForBestFit = true;
        text.text = message;
        text.cachedTextGenerator.Invalidate();
        text.cachedTextGenerator.Populate(message, text.GetGenerationSettings(text.rectTransform.rect.size));
        text.resizeTextForBestFit = false;
        text.fontSize = text.cachedTextGenerator.fontSizeUsedForBestFit;

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

    // Helper to handle Tap Waiting (same as Level1)
    IEnumerator WaitStep()
    {
        hasUserTapped = false;
        canTap = true;
        tapToContinueButton.gameObject.SetActive(true);
        tapToContinueButton.interactable = true;

        yield return new WaitUntil(() => hasUserTapped);

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

        mainViewButtons.SetActive(true);

        OnComplete?.Invoke();

        musicBeeSource.Stop();
    }

    bool skipPressed = false;
    bool skipCompleted = false;
    public void OnSkip()
    {
        if (skipCompleted)
            return;

        /*  if (AudioController.instance)
              AudioController.instance.PlayUiClickSfx();

          if (VibrationManager.instance)
              VibrationManager.instance.MediumImpact();*/

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
