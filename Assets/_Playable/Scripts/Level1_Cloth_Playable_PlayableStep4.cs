using UnityEngine.UI;
using DG.Tweening;
using UnityEngine;
using System.Collections;

public class Level1_Cloth_Playable_PlayableStep4 : LevelData
{
    [Space()]
    [Header("----------------------------------------------------------------------------------")]

    [Space()]
    [Header("Views")]
    public GameObject WashingView;
    public GameObject WashingTools;

    [Space()]
    public GameObject DressingView;
    public GameObject DressingTools;

    [Header("----------------- STEP 1 ----------------------")]
    [Space()]
    [Header("STEP 1")]
    [Space()]
    public ZoomPos ZoomStep1;

    [Space()]
    public BasicDrag ToolStep1;
    public GameObject Basket_Cloth;

    [Space()]
    public SpriteRenderer clothInside;
    public SpriteRenderer clothRound;

    [Space()]
    public GameObject machineDoor;
    public GameObject machineGlass;

    [Space()]
    [SerializeField] AudioClip clothSfx;
    [SerializeField] AudioClip doorCloseSfx;

    [Header("----------------- STEP 2 ----------------------")]
    [Space()]
    [Header("STEP 2")]
    [Space()]
    public ZoomPos ZoomStep2;
    public ZoomPos ZoomStep2b;

    [Space()]
    public BasicDrag ToolStep2;
    [Space()]
    public BD_CameraFollow ToolStep2CamFollow;

    [Space()]
    public GameObject drawerObj;

    [Space()]
    public GameObject surfObj;

    [Space()]
    public Transform surfPackTop;

    [Space()]
    public GameObject handStep2;

    [Space()]
    public Level1_SurfController surfController;

    [Space()]
    public SpriteRenderer clothsInside;
    public SpriteRenderer clothsInsideGlass;
    public SpriteRenderer clothsStaticClean;
    public SpriteRenderer wetCloths;
    public SpriteRenderer clothCleanInside;
    public SpriteRenderer clothCleanInsideAnim;
    public SpriteRenderer waterWave;
    public BasicDrag clothCleanInside2;
    public BD_CameraFollow clothCleanInside2Cam;

    [Space()]
    public GameObject clothBasketTarget;                                                       
    public GameObject clothBasketTarget2;                                                       

    [Space()]
    public ParticleSystem waterSplash_Vfx;

    [Space()]
    public Text countDownTimerText;
    public float countDown = 5f;

    [Space()]
    public Collider2D machineTimer;
    public GameObject machineTimerIndication;

    [Space()]
    public AudioClip darazOpenSfx;
    public AudioClip darazCloseSfx;
    public AudioClip doorOpenSfx;
    public AudioClip machineStartSfx;
    public AudioClip machineFinishSfx;
    public AudioClip waterDrainSfx;

    [Header("----------------- STEP 3a ----------------------")]
    [Space()]
    [Space()]
    public ZoomPos ZoomStep3a;

    [Space()]
    public BasicDrag ToolStep3a;
    public SpriteRenderer ToolStep3aRend;
    public GameObject dressingBasket;
    [Space()]
    public GameObject dummyFullParent;
    [Space()]
    public GameObject DressParent;

    [Header("----------------- STEP 3 ----------------------")]
    [Space()]
    [Space()]
    public ZoomPos ZoomStep3;

    [Space()]
    public BasicDrag ToolStep3;
    [Space()]

    public SpriteRenderer tornPatch;

    [Space()]
    public GameObject patchCompleted;

    [Space ()]
    public GameObject patchOutline;

    [Header("----------------- STEP 4 ----------------------")]
    [Space()]
    [Space()]
    public ZoomPos ZoomStep4;

    [Space()]
    public BasicDrag ToolStep4;

    [Space()]
    public BD_CameraFollow camFollowStep4;

    [Space()]
    public GameObject SteamerBottom;

    IEnumerator Start()
    {
        // PLAYABLE: cover the ForceComplete step-skip so nothing visibly pops/snaps.
        PlayableFadeCover.Cover();

        base.LevelStart();

        UI_Manager.instance.InitializeTools(ToolIcons);

        yield return new WaitForSeconds(0.1f);

        

        // PLAYABLE: no save resume — same ForceComplete + StartStep as original switch.
        ForceCompleteStep5();
        Invoke(nameof(StartStep4), 2f);
        PlayableFadeCover.Reveal();
        yield break;
}

    #region Step 1 

    bool step1Complete;

    void StartStep1()
    { }

    void OnClothPicked()
    {
        clothInside.gameObject.SetActive(false);
        clothRound.gameObject.SetActive(true);
        clothRound.sortingOrder = 100;
        clothInside.sortingOrder = 100;
    }

    void OnClothReleased()
    {
        DOVirtual.DelayedCall(0.5f, () =>
        {
            clothInside.sortingOrder = 26;
            clothRound.sortingOrder = 26;
            clothInside.gameObject.SetActive(true);
            clothRound.gameObject.SetActive(false);
        });

    }

    public void Step1Complete()
    { }

    void PlayClothPlacedSfx()
    { }

    void ForceCompleteStep1()
    {
        if (ToolStep1 != null) ToolStep1.gameObject.SetActive(false);
        if (Basket_Cloth != null) Basket_Cloth.gameObject.SetActive(false);

        if (clothsInside != null) clothsInside.gameObject.SetActive(false);
        clothsInsideGlass.gameObject.SetActive(true);

        if (machineDoor != null) machineDoor.SetActive(false);
        machineGlass.SetActive(true);

        clothsStaticClean.DOKill();
        clothsStaticClean.DOFade(1, 0f);

        clothsInsideGlass.DOKill();
        clothsInsideGlass.DOFade(0f, 0f);

        waterWave.DOKill();
        waterWave.DOFade(1, 0f);

        waterWave.transform.DOKill();
        waterWave.transform.DOLocalMoveY(-0.3754f, 0);
    }

    #endregion

    #region Step 2 

    bool step2Complete;

    void StartStep2()
    { }

    public void PackOpend()
    { }

    public void Step2Complete()
    { }

    public void StartMachine()
    { }

    void ForceCompleteStep2()
    {
        ForceCompleteStep1();

        CameraController.Instance.ResetCameraInstant();

        if (drawerObj != null) drawerObj.SetActive(false);
        if (surfObj != null) surfObj.SetActive(false);

        machineTimer.enabled = true;
        machineTimerIndication.SetActive(true);

        CameraController.Instance.MoveCamera(new Vector3(0, 0.6f, -10f), 3.2f);
    }

    void ForceCompleteStep3()
    {
        if (ToolStep2 != null) ToolStep2.gameObject.SetActive(false);

        if (machineDoor != null) machineDoor.SetActive(false);
        machineGlass.SetActive(true);

        clothCleanInside.DOKill();
        clothCleanInside.DOFade(1, 0f);

        clothCleanInsideAnim.DOKill();
        clothCleanInsideAnim.DOFade(1, 0f).OnComplete(() =>
        {
            clothCleanInsideAnim.transform.DOKill();
            clothCleanInsideAnim.transform.DOLocalMoveY(-2, 0).OnComplete(() =>
            {
                OpenDoor();
            });
        });

        wetCloths.DOKill();
        wetCloths.DOFade(0, 0);
    }

    bool doorOpened;

    public void OpenDoor()
    {
        if (doorOpened)
            return;

        AudioController.instance.PlayAnySfx(0, doorOpenSfx, 0f);

        doorOpened = true;
        machineDoor.SetActive(true);
        machineGlass.SetActive(false);
        clothCleanInside.gameObject.SetActive(false);
        clothCleanInside2.gameObject.SetActive(true);

        CameraController.Instance.MoveCamera(new Vector3(0, 0f, -10f), 4.3f);

        Basket_Cloth.SetActive(true);

        Basket_Cloth.transform.DOKill();
        Basket_Cloth.transform.DOLocalMoveX(0f, .5f).SetDelay(.5f).OnComplete(() =>
        {
            clothBasketTarget2.SetActive(true);

            clothCleanInside2.OnMouseDownEvent += OnCleanClothPicked;

            ToolInputToggle(clothCleanInside2.gameObject, true);

            clothCleanInside2Cam.enabled = true;

            clothCleanInside2.GetComponent<SpriteRenderer>().sortingOrder = 26;
            clothCleanInside2.startOrder = 26;

        });
    }

                                                                                     
    void OnCleanClothPicked()
    {
        clothCleanInside2.GetComponent<SpriteRenderer>().sortingOrder = 100;
    }

                                                                                        
    public void CallStep3()
    { }

    IEnumerator StartCountDown()
    { yield break; }

    #endregion

    #region Step 3a

    bool step3aComplete;

    void StartStep3a()
    { }

    void OnTool3aPicked()
    {
        ToolStep3aRend.sortingOrder = 100;
    }

    void OnTool3aRelease()
    {
        DOVirtual.DelayedCall(0.4f, () =>
        {
            ToolStep3aRend.sortingOrder = 26;
        });
    }

    public void Step3aComplete()
    { }

    void ForceCompleteStep3a()
    {
        if (WashingView != null) WashingView.SetActive(false);
        if (WashingTools != null) WashingTools.SetActive(false);

        DressingView.SetActive(true);
        DressingTools.SetActive(true);
    }

    #endregion

    #region Step 3

    bool step3Complete;

    void StartStep3()
    { }

    void HideIndication()
    { }

    public void Step3Complete()
    { }

    void ForceCompleteStep4()
    {
        if (WashingView != null) WashingView.SetActive(false);
        if (WashingTools != null) WashingTools.SetActive(false);

        DressingView.SetActive(true);
        DressingTools.SetActive(true);

        DressParent.SetActive(true);
        if (dummyFullParent != null) dummyFullParent.SetActive(false);

        if (ToolStep3a != null) ToolStep3a.gameObject.SetActive(false);
    }

    #endregion

    #region Step 4

    bool step4Complete;

    void StartStep4()
    {
        ToolStep4.transform.DOKill();
        ToolStep4.transform.DOLocalMoveX(0f, .5f).SetDelay(.5f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep4.gameObject, true);

            camFollowStep4.enabled = true;

            CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);
        });

        SteamerBottom.transform.DOKill();
        SteamerBottom.transform.DOLocalMoveX(-2f, .5f).SetDelay(.5f);
    }

    public void Step4Complete()
    {
        if (step4Complete)
            return;

        step4Complete = true;

        camFollowStep4.enabled = false;

        ToolInputToggle(ToolStep4.gameObject, false);

        SteamerBottom.transform.DOKill();
        SteamerBottom.transform.DOLocalMoveX(-15f, .5f).SetDelay(.5f);

        ToolStep4.transform.DOKill();
        ToolStep4.transform.DOLocalMoveX(-15f, .5f).OnComplete(() =>
        {
            ToolStep4.gameObject.SetActive(false);

            SteamerBottom.gameObject.SetActive(false);
        });

        UI_Manager.instance.SetProgressBarPos();

        Invoke(nameof(LevelComplete), .5f);

        CameraController.Instance.ResetCameraTween();

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step7_Comp");
        }
        catch { }
    }

    void ForceCompleteStep5()
    {
        if (WashingView != null) WashingView.SetActive(false);
        if (WashingTools != null) WashingTools.SetActive(false);

        DressingView.SetActive(true);
        DressingTools.SetActive(true);

        tornPatch.DOKill();
        tornPatch.DOFade(0, 0.01f);

        DressParent.SetActive(true);
        if (dummyFullParent != null) dummyFullParent.SetActive(false);

        if (ToolStep3a != null) ToolStep3a.gameObject.SetActive(false);

    }

    #endregion

    
}