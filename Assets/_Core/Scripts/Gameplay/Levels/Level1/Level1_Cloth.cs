using UnityEngine.UI;
using DG.Tweening;
using UnityEngine;
using System.Collections;

public class Level1_Cloth : LevelData
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
    public GameObject clothBasketTarget;   // drop target inside the basket for the clean cloth
    public GameObject clothBasketTarget2;   // drop target inside the basket for the clean cloth

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

    [Header("----------------- STEP 5 ----------------------")]
    [Space()]
    [Space()]
    public ZoomPos ZoomStep5;
    [Space()]
    public BasicDrag ToolStep5;
    [Space()]
    public GameObject ribbonFinalTarget;
    [Space()]
    public GameObject ribbonFinal;
    [Space()]
    public GameObject handIndication5;

    IEnumerator Start()
    {
        base.LevelStart();

        UI_Manager.instance.InitializeTools(ToolIcons);

        levelNo = SaveSystem.Instance.DataFields.levelToPlay - 1;
        partNo = SaveSystem.Instance.DataFields.partToPlay - 1;

        stepsDone = SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone;

        yield return new WaitForSeconds(0.1f);

        switch (stepsDone)
        {
            case 0:
                // STEP START EVENT
                try
                {
                    Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                        + "_" + levelName + "_Step1_Start");
                }
                catch { }

                StartStep1();

                break;

            case 1:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep1();

                StartStep2();
                break;

            case 2:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep2();
                break;

            case 3:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep3();
                break;

            case 4:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep3a();

                Invoke(nameof(StartStep3a), 1f);
                break;

            case 5:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep4();

                Invoke(nameof(StartStep3), 1f);
                break;

            case 6:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep5();

                Invoke(nameof(StartStep4), 2f);
                break;

            case 7:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep5();

                Invoke(nameof(StartStep5), 2f);
                break;

        }
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

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 1;

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
        // VibrationManager.instance.MediumImpact();
        AudioController.instance.PlayAnySfx(0, clothSfx, 0f);
    }

    void ForceCompleteStep1()
    {
        ToolStep1.gameObject.SetActive(false);
        Basket_Cloth.gameObject.SetActive(false);

        clothsInside.gameObject.SetActive(false);
        clothsInsideGlass.gameObject.SetActive(true);

        machineDoor.SetActive(false);
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

            ToolStep2CamFollow.enabled = true;
        });
    }

    public void Step2Complete()
    {
        if (step2Complete)
            return;

        step2Complete = true;

        ToolInputToggle(ToolStep2.gameObject, false);

        ToolStep2CamFollow.enabled = false;

        ToolStep2.anim.enabled = false;

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

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 2;

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
               .SetEase(Ease.OutCubic);   // Sabse smooth slow stop


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

                   SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 3;

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

        drawerObj.SetActive(false);
        surfObj.SetActive(false);

        machineTimer.enabled = true;
        machineTimerIndication.SetActive(true);

        CameraController.Instance.MoveCamera(new Vector3(0, 0.6f, -10f), 3.2f);
    }

    void ForceCompleteStep3()
    {
        ToolStep2.gameObject.SetActive(false);

        machineDoor.SetActive(false);
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

    // Lift it above everything while dragging, same idea as OnClothPicked in step 1.
    void OnCleanClothPicked()
    {
        clothCleanInside2.GetComponent<SpriteRenderer>().sortingOrder = 100;
    }

    // Called by the clean cloth's PlaceItem OnPlaced once it's dropped into the basket.
    public void CallStep3()
    {
        clothBasketTarget2.SetActive(true);

        // if (VibrationManager.instance)
            // VibrationManager.instance.MediumImpact();

        clothCleanInside2Cam.enabled = false;

        clothCleanInside2.OnMouseDownEvent -= OnCleanClothPicked;

        // sits between Bin_Back (25) and Bin_Front (27) so it reads as inside the basket
        clothCleanInside2.transform.DOKill();
        clothCleanInside2.transform.DOScale(0.395f, 0.2f);

        clothCleanInside2.GetComponent<SpriteRenderer>().sortingOrder = 26;

        Invoke(nameof(StartStep3a), 3f);

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 4;

        UI_Manager.instance.SetProgressBar(1f);

        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.SetProgressBarPos();
        });

        UI_Manager.instance.FadeAnim(1f, 1.5f);

        DOVirtual.DelayedCall(1f, () =>
        {
            WashingView.SetActive(false);
            WashingTools.SetActive(false);

            DressingView.SetActive(true);
            DressingTools.SetActive(true);
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
        float initialTime = countDown;   // e.g. 5

        while (countDown > 0)
        {
            countDownTimerText.text = countDown.ToString("00");

            float progress = 1f - (countDown / initialTime);
            UI_Manager.instance.SetProgressBar(progress);

            yield return new WaitForSeconds(1f);   // 1 second wait

            // if (VibrationManager.instance)
                // VibrationManager.instance.MediumImpact();

            if (AudioController.instance)
                AudioController.instance.PlaySfx(0, 2, 0);

            countDown--;

        }

        countDownTimerText.text = "00";
        UI_Manager.instance.SetProgressBar(1);
        Debug.Log("Countdown Finished!");
    }

    #endregion

    #region Step 3a

    bool step3aComplete;

    void StartStep3a()
    {
        CameraController.Instance.MoveCamera(ZoomStep3a.CameraPos, ZoomStep3a.CameraFOV);

        dressingBasket.transform.DOKill();
        dressingBasket.transform.DOLocalMoveX(0f, .5f).SetDelay(1f);

        ToolStep3a.transform.DOKill();
        ToolStep3a.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
        {

            ToolStep3a.OnMouseDownEvent += OnTool3aPicked;
            ToolStep3a.OnMouseUpEvent += OnTool3aRelease;

            ToolInputToggle(ToolStep3a.gameObject, true);

            dummyFullParent.SetActive(true);
        });
    }

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
    {
        if (step3aComplete)
            return;

        step3aComplete = true;

        dummyFullParent.SetActive(false);

        DressParent.SetActive(true);

        UI_Manager.instance.SetProgressBar(1);

        ToolInputToggle(ToolStep3a.gameObject, false);

        ToolStep3a.gameObject.SetActive(false);

        dressingBasket.transform.DOKill();
        dressingBasket.transform.DOLocalMoveX(-15f, 1f).OnComplete(() =>
        {
            dressingBasket.SetActive(false);

            UI_Manager.instance.SetProgressBarPos();
        });

        Invoke(nameof(StartStep3), 2f);

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 5;

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step5_Comp");
        }
        catch { }
    }

    void ForceCompleteStep3a()
    {
        WashingView.SetActive(false);
        WashingTools.SetActive(false);

        DressingView.SetActive(true);
        DressingTools.SetActive(true);
    }

    #endregion

    #region Step 3

    bool step3Complete;

    void StartStep3()
    {
        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveX(0.35f, .5f).SetDelay(.5f).OnComplete(() =>
        {
            patchOutline.SetActive(true);

            ToolStep3.OnMouseDownEvent += HideIndication;

            ToolInputToggle(ToolStep3.gameObject, true);
        });
    }

    void HideIndication()
    {
        patchOutline.SetActive(false);
    }

    public void Step3Complete()
    {
        if (step3Complete)
            return;

        HideIndication();

        step3Complete = true;

        ToolInputToggle(ToolStep3.gameObject, false);

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveX(-15f, .5f).OnComplete(() =>
        {
            ToolStep3.gameObject.SetActive(false);
        });

        tornPatch.DOKill();
        tornPatch.DOFade(0, 0.1f);


        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);
        // CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 6;

        Invoke(nameof(StartStep4), 0.5f);

        UI_Manager.instance.SetProgressBar(1f);

        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.SetProgressBarPos();
        });

        ToolStep3.OnMouseDownEvent -= HideIndication;

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step6_Comp");
        }
        catch { }
    }

    void ForceCompleteStep4()
    {
        WashingView.SetActive(false);
        WashingTools.SetActive(false);

        DressingView.SetActive(true);
        DressingTools.SetActive(true);

        DressParent.SetActive(true);
        dummyFullParent.SetActive(false);

        ToolStep3a.gameObject.SetActive(false);
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

        Invoke(nameof(StartStep5), .5f);

        CameraController.Instance.ResetCameraTween();

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 7;

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step7_Comp");
        }
        catch { }
    }

    void ForceCompleteStep5()
    {
        WashingView.SetActive(false);
        WashingTools.SetActive(false);

        DressingView.SetActive(true);
        DressingTools.SetActive(true);

        tornPatch.DOKill();
        tornPatch.DOFade(0, 0.01f);

        DressParent.SetActive(true);
        dummyFullParent.SetActive(false);

        ToolStep3a.gameObject.SetActive(false);

    }

    #endregion

    #region Step 5

    bool step5Complete;

    void StartStep5()
    {
        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);

        ToolStep5.transform.DOKill();
        ToolStep5.transform.DOLocalMoveX(0f, .5f).SetDelay(.5f).OnComplete(() =>
        {
            ToolStep5.OnMouseDownEvent += HideIndication5;
            ToolStep5.OnMouseUpEvent += ShowIndication5;

            ToolInputToggle(ToolStep5.gameObject, true);

            ribbonFinalTarget.SetActive(true);

            handIndication5.SetActive(true);
        });
    }

    void ShowIndication5()
    {
        DOVirtual.DelayedCall(.5f, () =>
        {
            if (step5Complete)
                return;

            handIndication5.SetActive(true);
        });
    }

    void HideIndication5()
    {
        handIndication5.SetActive(false);
    }

    public void OnRibbonPlaced()
    {
        if (step5Complete)
            return;

        handIndication5.SetActive(false);

        step5Complete = true;

        ToolInputToggle(ToolStep5.gameObject, false);

        ribbonFinal.SetActive(true);

        ToolStep5.gameObject.SetActive(false);

        ribbonFinalTarget.SetActive(false);

        Invoke(nameof(Step5Complete), 1f);
    }

    public void Step5Complete()
    {
        handIndication5.SetActive(false);

        UI_Manager.instance.SetProgressBar(1f);

        Invoke(nameof(LevelComplete), 1f);

        CameraController.Instance.ResetCameraTween();

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 0;

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step8_Comp");
        }
        catch { }
    }

    #endregion
}