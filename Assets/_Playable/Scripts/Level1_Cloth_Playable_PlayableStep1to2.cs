using UnityEngine.UI;
using DG.Tweening;
using UnityEngine;
using System.Collections;

public class Level1_Cloth_Playable_PlayableStep1to2 : LevelData
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

    IEnumerator Start()
    {

        base.LevelStart();

        UI_Manager.instance.InitializeTools(ToolIcons);

        yield return new WaitForSeconds(0.1f);

        

        // PLAYABLE: no save resume — same ForceComplete + StartStep as original switch.
        StartStep1();
        yield break;
}

    #region Step 1 

    bool step1Complete;

    void StartStep1()
    {
        CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);

        ToolStep1.transform.DOKill();
        ToolStep1.transform.DOLocalMoveX(0, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolStep1.OnMouseDownEvent += OnClothPicked;
            ToolStep1.OnMouseUpEvent += OnClothReleased;

            DOVirtual.DelayedCall(0.2f, () =>
            {
                ToolInputToggle(ToolStep1.gameObject, true);
            });
        });

        Basket_Cloth.transform.DOKill();
        Basket_Cloth.transform.DOLocalMoveX(0, .5f).SetDelay(1f);
    }

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
    {
        if (step1Complete)
            return;

        stepsDone = 1;

        step1Complete = true;

        ToolInputToggle(ToolStep1.gameObject, false);

        PlayClothPlacedSfx();

        ToolStep1.transform.DOKill();
        ToolStep1.transform.DOLocalMoveX(-15f, .5f).SetEase(Ease.InBack).OnComplete(() =>
        {
            ToolStep1.gameObject.SetActive(false);
            Basket_Cloth.gameObject.SetActive(false);

            clothsInside.gameObject.SetActive(false);
            clothsInsideGlass.gameObject.SetActive(true);

            if (doorCloseSfx != null)
                AudioController.instance.PlayAnySfx(0, doorCloseSfx, 0);

            machineDoor.SetActive(false);
            machineGlass.SetActive(true);

            clothsStaticClean.DOKill();
            clothsStaticClean.DOFade(1, 3f).SetDelay(1f);

            clothsInsideGlass.DOKill();
            clothsInsideGlass.DOFade(0f, 1f).SetDelay(3f);

            waterWave.DOKill();
            waterWave.DOFade(1, 3f).SetDelay(1f);

            waterWave.transform.DOKill();
            waterWave.transform.DOLocalMoveY(-0.3754f, 2f).SetDelay(2f);

        });

        Basket_Cloth.transform.DOKill();
        Basket_Cloth.transform.DOLocalMoveX(-15f, 1f);

        Invoke(nameof(StartStep2), 2f);

        UI_Manager.instance.SetProgressBar(1f);

        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.SetProgressBarPos();
        });

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step1_Comp");
        }
        catch { }
    }

    void PlayClothPlacedSfx()
    {
                                                    
        AudioController.instance.PlayAnySfx(0, clothSfx, 0f);
    }

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
    {
        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV,1.5f);

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOLocalMoveX(-0.751f, .5f).SetDelay(.5f).OnComplete(() =>
        {
            handStep2.SetActive(true);
        });
    }

    public void PackOpend()
    {
        CameraController.Instance.MoveCamera(ZoomStep2b.CameraPos, ZoomStep2b.CameraFOV);

        surfPackTop.DOKill();
        surfPackTop.DOLocalMoveX(15f, 1f).OnComplete(() => surfPackTop.gameObject.SetActive(false));

        DOVirtual.DelayedCall(0.5f, () =>
        {
            if (darazOpenSfx != null)
                AudioController.instance.PlayAnySfx(0, darazOpenSfx, 0);

            drawerObj.SetActive(true);

            surfObj.SetActive(true);

            surfController.enabled = true;

            ToolInputToggle(ToolStep2.gameObject, true);

            if (ToolStep2CamFollow != null) ToolStep2CamFollow.enabled = true;
        });
    }

    public void Step2Complete()
    {
        if (step2Complete)
            return;

        step2Complete = true;

        ToolInputToggle(ToolStep2.gameObject, false);

        if (ToolStep2CamFollow != null) ToolStep2CamFollow.enabled = false;

        if (ToolStep2.anim != null) ToolStep2.anim.enabled = false;

        ToolStep2.transform.DOKill();

        ToolStep2.transform.DORotate(Vector3.zero, 0.2f);

        ToolStep2.transform.DOLocalMoveX(-15f, 1f).SetDelay(0.21f).SetEase(Ease.InBack).OnComplete(() =>
         {
             ToolStep2.gameObject.SetActive(false);

             if (darazCloseSfx != null)
                 AudioController.instance.PlayAnySfx(0, darazCloseSfx, 0);

             drawerObj.SetActive(false);
             surfObj.SetActive(false);

             machineTimer.enabled = true;
             machineTimerIndication.SetActive(true);

             CameraController.Instance.MoveCamera(new Vector3(0, 0.6f, -10f), 3.2f);
         });

        UI_Manager.instance.SetProgressBar(1f);

        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.SetProgressBarPos();
        });

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step2_Comp");
        }
        catch { }
    }

    public void StartMachine()
    {
        machineTimerIndication.SetActive(false);

        machineTimer.enabled = false;
        wetCloths.gameObject.SetActive(true);

        wetCloths.DOKill();
        wetCloths.DOFade(.75f, 2f);

        clothsStaticClean.DOKill();
        clothsStaticClean.DOFade(0, 2f);

        waterWave.DOKill();
        waterWave.DOFade(0, 2f);

        DOVirtual.DelayedCall(1f, () =>
        {
            waterSplash_Vfx.gameObject.SetActive(true);
            waterSplash_Vfx.Play();

            CameraController.Instance.ResetCameraTween();

            if (machineStartSfx != null)
                AudioController.instance.PlayAnySfx(0, machineStartSfx, 0);
        });

        countDownTimerText.resizeTextForBestFit = false;
        countDownTimerText.fontSize = Mathf.Max(1, Mathf.FloorToInt(countDownTimerText.rectTransform.rect.height * .8f));
        countDownTimerText.horizontalOverflow = HorizontalWrapMode.Overflow;
        countDownTimerText.verticalOverflow = VerticalWrapMode.Overflow;
        countDownTimerText.text = "05";

        StartCoroutine(StartCountDown());

        DOVirtual.DelayedCall(6.5f, () =>
        {
            waterSplash_Vfx.Stop();

        });

        wetCloths.transform.DORotate(new Vector3(0, 0, 3000), 5f, RotateMode.FastBeyond360)
       .SetRelative(true)
       .SetEase(Ease.Linear).SetDelay(0.5f)
       .OnComplete(() =>
       {
           if (machineFinishSfx != null)
               AudioController.instance.PlayAnySfx(0, machineFinishSfx, 0);

           wetCloths.transform.DORotate(new Vector3(0, 0, 600), 3.2f, RotateMode.FastBeyond360)
               .SetRelative(true)
               .SetEase(Ease.OutCubic);                            

           clothCleanInside.DOKill();
           clothCleanInside.DOFade(1, 1.5f).SetDelay(2f);

           clothCleanInsideAnim.DOKill();
           clothCleanInsideAnim.DOFade(1, 1.5f).SetDelay(2f).OnComplete(() =>
           {
               if (waterDrainSfx != null)
                   AudioController.instance.PlayAnySfx(0, waterDrainSfx, 0);

               clothCleanInsideAnim.transform.DOKill();
               clothCleanInsideAnim.transform.DOLocalMoveY(-2, 2f).OnComplete(() =>
               {
                   OpenDoor();

                   UI_Manager.instance.SetProgressBar(1f);

                   DOVirtual.DelayedCall(1f, () =>
                   {
                       UI_Manager.instance.SetProgressBarPos();
                   });
               });
           });

           wetCloths.DOKill();
           wetCloths.DOFade(0, 1.3f).SetDelay(2.2f);

           try
           {
               Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                   + "_" + levelName + "_Step3_Comp");
           }
           catch { }
       });
    }

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

            if (clothCleanInside2Cam != null) clothCleanInside2Cam.enabled = true;

            clothCleanInside2.GetComponent<SpriteRenderer>().sortingOrder = 26;
            clothCleanInside2.startOrder = 26;

        });
    }

                                                                                     
    void OnCleanClothPicked()
    {
        clothCleanInside2.GetComponent<SpriteRenderer>().sortingOrder = 100;
    }

                                                                                        
    public void CallStep3()
    {
        clothBasketTarget2.SetActive(true);

                                         
                                                        

        if (clothCleanInside2Cam != null) clothCleanInside2Cam.enabled = false;

        clothCleanInside2.OnMouseDownEvent -= OnCleanClothPicked;

                                                                                         
        clothCleanInside2.transform.DOKill();
        clothCleanInside2.transform.DOScale(0.395f, 0.2f);

        clothCleanInside2.GetComponent<SpriteRenderer>().sortingOrder = 26;

        Invoke(nameof(LevelComplete), 3f);

        UI_Manager.instance.SetProgressBar(1f);

        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.SetProgressBarPos();
        });


        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step4_Comp");
        }
        catch { }
    }

    IEnumerator StartCountDown()
    {
        float initialTime = countDown;            

        while (countDown > 0)
        {
            countDownTimerText.text = countDown.ToString("00");

            float progress = 1f - (countDown / initialTime);
            UI_Manager.instance.SetProgressBar(progress);

            yield return new WaitForSeconds(1f);                   

                                             
                                                            

            if (AudioController.instance)
                AudioController.instance.PlaySfx(0, 2, 0);

            countDown--;

        }

        countDownTimerText.text = "00";
        UI_Manager.instance.SetProgressBar(1);
        Debug.Log("Countdown Finished!");
    }

    #endregion

    
    
}
