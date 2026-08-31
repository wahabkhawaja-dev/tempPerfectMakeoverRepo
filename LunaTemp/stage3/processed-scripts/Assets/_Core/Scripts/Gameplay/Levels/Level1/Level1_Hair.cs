using UnityEngine;
using DG.Tweening;
using System.Collections;

public class Level1_Hair : LevelData
{
    [Space()]
    [Header("----------------------------------------------------------------------------------")]

    [Space()]
    [Space()]
    public SpriteRenderer wetCloth;

    [Space()]
    public ParticleSystem waterDripingParticle;

    [Header("----------------- STEP 1 ----------------------")]
    [Space()]
    [Header("STEP 1")]
    [Space()]
    public ZoomPos ZoomStep1;

    [Space()]
    [Space()]
    public BasicDrag[] AllTrash;
    public OutlinePulse[] AllTrashOutlines;
    [Space()]
    public bool trashDone = false;
    public int trashThrown = 0;
    public int trashTotal = 5;
    [Space()]
    public GameObject bd_Sticky;
    [Space()]
    [SerializeField] Transform bubbleGum;

    [Header("----------------- STEP 2 ----------------------")]
    [Space()]
    [Header("STEP 2")]
    [Space()]
    public ZoomPos ZoomStep2;
    [Space()]
    public BasicDrag ToolStep2;
    [Space()]
    public BD_CameraFollow camFollowStep2;
    [Space()]
    public OutlinePulse[] AllBugOutlines;

    [Header("----------------- STEP 2b ----------------------")]
    [Space()]
    [Header("STEP 2b")]
    [Space()]
    public ZoomPos ZoomStep2b;
    [Space()]
    public BasicDrag ToolStep2b;
    [Space()]
    public BD_CameraFollow camFollowStep2b;
    [Space()]
    public GameObject dustColStep2;
    [Space()]
    public GameObject handIndicationShower;
    [Space()]
    public GameObject hairDirtyStatic;
    public GameObject hairDirtyWetStatic;
    [Space()]
    public DOTweenAnimation dryHairAnim;

    [Header("----------------- STEP 3 ----------------------")]
    [Space()]
    [Header("STEP 3")]
    [Space()]
    public ZoomPos ZoomStep3;

    [Space()]
    // public Transform ShampooInHand;
    public Transform ShampooOnHand;
    public GameObject ShampooInHandCap;

    [Space()]
    public GameObject ToolStep3;
    [Space()]
    public SpriteRenderer shampooPatch;
    public SpriteRenderer handSpriteRend;
    public Sprite bottleDefault;
    public Sprite bottlePressed;
    [Space()]
    public Transform shampooDropping;
    [Space()]
    public AudioClip bottleOpenSfx;
    public AudioClip bottleSqueezSfx;
    public AudioClip bottlePourSfx;

    [Header("----------------- STEP 4 ----------------------")]
    [Space()]
    [Header("STEP 4")]
    [Space()]
    public ZoomPos ZoomStep4;
    [Space()]
    public BasicDrag ToolStep4;
    [Space()]
    public BD_CameraFollow camFollowStep4;
    [Space()]
    public GameObject foamLight_E;
    public GameObject foam2_E;
    [Space()]
    public GameObject foamCol;
    [Space()]
    public GameObject handIndicationHands;
    public BD_Progress progressStep4;

    /*  [Header("----------------- STEP 4b ----------------------")]
      [Space()]
      [Header("STEP 4b")]
      public ZoomPos ZoomStep4b;
      [Space()]
      public Transform ToolStep4bParent;
      public BasicDrag ToolStep4b;*/

    [Header("----------------- STEP 5a ----------------------")]   //Open Shower items
    [Space()]
    [Header("STEP 5a")]
    [Space()]
    public ZoomPos ZoomStep5a;
    [Space()]
    public ZoomPos ZoomStep5b;
    [Space()]
    public Transform ShowerDamaged;  //damaged
    public BasicDrag ShowerDamaged_Drag;  //damaged
    [Space()]
    public GameObject ShowerBackDMG;
    public GameObject ShowerInner_dirty;
    public Transform ShowerInner_Target;
    public GameObject ShowerFrontDMG;
    [Space()]
    public GameObject OpenShowerIndication;
    public GameObject CloseShowerIndication;
    [Space()]
    public BasicDrag showrOpenInput;
    [Space()]
    public Transform showerDisk;
    [Space()]
    public GameObject showerFixReverseAnimDrag;
    public GameObject showerDragDamage;
    public BasicDrag ToolStep5Rev;


    public GameObject handIndicationShowerPlace;


    [Header("----------------- STEP 5 ----------------------")]
    [Space()]
    [Header("STEP 5")]
    [Space()]
    public ZoomPos ZoomStep5;
    [Space()]
    public BasicDrag ToolStep5; //repaired [Space()]
    public BasicDrag ToolStep5Placeable; //repaired
    [Space()]
    public BD_Progress toolStep5Progress;
    public BD_ProgressHelper toolStep5ProgressHelp;
    [Space()]
    public BD_CameraFollow camFollowStep5;

    [Space()]
    public SpriteRenderer showerRender;
    public Sprite showerDirty;
    public Sprite showerClean;
    [Space()]
    public ParticleSystem waterShotParticle;

    [Space()]
    public AudioClip showerProblemClip;
    public AudioClip FixErrorClip;

    [Header("----------------- STEP 6 ----------------------")]
    [Space()]
    [Header("STEP 6")]
    [Space()]
    public ZoomPos ZoomStep6;
    [Space()]
    public BasicDrag ToolStep6;
    [Space()]
    public BD_CameraFollow camFollowStep6;
    [Space()]
    public GameObject wetHairs_E;
    [Space()]
    public SpriteRenderer hairDryFade;

    [Header("----------------- STEP 7 ----------------------")]
    [Space()]
    [Header("STEP 7")]
    [Space()]
    public ZoomPos ZoomStep7;
    [Space()]
    public BasicDrag ToolStep7;
    [Space()]
    public BD_CameraFollow camFollowStep7;
    [Space()]
    public GameObject dryHairs_E;
    [Space()]
    public GameObject dryCombed_BG;
    [Space()]
    public DraggableBrush brushController;
    [Space()]
    public GameObject handIndicationBrush;

    [Header("----------------- SHOWER FIX GATE ----------------------")]
    [Space()]
    [SerializeField] GameObject fixItPrompt;
    [SerializeField] GameObject fixItPromptHand;

    bool isShowerFixed;

    IEnumerator Start()
    {
        base.LevelStart();

        UI_Manager.instance.InitializeTools(ToolIcons);

        yield return new WaitForSeconds(0.1f);

        levelNo = SaveSystem.Instance.DataFields.levelToPlay - 1;
        partNo = SaveSystem.Instance.DataFields.partToPlay - 1;

        stepsDone = SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone;

        foamLight_E.SetActive(false);
        foam2_E.SetActive(false);
        wetHairs_E.SetActive(false);
        dryHairs_E.SetActive(false);

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

                Invoke(nameof(StartStep2), .5f);
                break;

            case 2:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep2();

                Invoke(nameof(StartStep2b), .5f);
                break;

            case 3:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep2b();

                Invoke(nameof(StartStep3), .5f);
                break;

            case 4:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep3();

                Invoke(nameof(StartStep4), .5f);
                break;

            case 5:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep4();

                Invoke(nameof(StartStep5), .1f);
                break;

            case 6:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep5();

                Invoke(nameof(StartStep6), .5f);
                break;

            case 7:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep6();

                Invoke(nameof(StartStep7), .5f);
                break;
        }
    }

    #region STEP 1

    bool isStep1Done = false;

    void StartStep1()
    {
        CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);

        for (int i = 0; i < AllTrash.Length; i++)
        {
            AllTrash[i].thisCollider.enabled = true;
            AllTrash[i].canDrag = true;
        }

        for (int i = 0; i < AllTrashOutlines.Length; i++)
        {
            AllTrashOutlines[i].EnableAnim();
        }
    }

    public void TrashThrownStep1()
    {
        if (trashDone)
            return;

        trashThrown++;

        UI_Manager.instance.SetProgressBar((float)trashThrown / (float)trashTotal);

        if (trashThrown > trashTotal - 1)
        {
            trashDone = true;
            Step1Complete();

        }
    }

    public void BubbelGumPicked()
    {
        DOVirtual.DelayedCall(0.5f, () =>
        {
            bd_Sticky.gameObject.SetActive(false);
            bubbleGum.DOKill();
            bubbleGum.DOLocalMoveX(10f, 2f);
        });
    }

    public void Step1Complete()
    {
        if (isStep1Done)
            return;

        isStep1Done = true;

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 1;

        SetProgressBar();

        Invoke(nameof(StartStep2), 0.25f);

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step1_Comp");
        }
        catch { }
    }


    void ForceCompleteStep1()
    {
        for (int i = 0; i < AllTrash.Length; i++)
        {
            AllTrash[i].gameObject.SetActive(false);
        }
    }

    #endregion

    #region Step 2

    bool step2Complete;

    void StartStep2()
    {
        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOLocalMoveX(0f, .5f).SetDelay(.5f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep2.gameObject, true);

            camFollowStep2.enabled = true;

            for (int i = 0; i < AllBugOutlines.Length; i++)
            {
                AllBugOutlines[i].EnableAnim();
            }
        });

    }

    public void AllBugsKilled()
    {
        if (ToolStep2.isDragging)
            ToolStep2.OnMouseUpEvent += Step2Complete;

        else
            Step2Complete();
    }

    public void Step2Complete()
    {
        if (step2Complete)
            return;

        step2Complete = true;

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 2;

        SetProgressBar();

        camFollowStep2.enabled = false;

        ToolInputToggle(ToolStep2.gameObject, false);

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOLocalMoveX(-15f, .5f).OnComplete(() =>
        {
            ToolStep2.gameObject.SetActive(false);
        });

        Invoke(nameof(StartStep2b), .5f);

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step2_Comp");
        }
        catch { }
    }

    void ForceCompleteStep2()
    {
        ForceCompleteStep1();
        for (int i = 0; i < AllBugOutlines.Length; i++)
        {
            AllBugOutlines[i].gameObject.SetActive(false);
        }
    }

    #endregion

    #region Step 2b

    bool step2bComplete;

    void StartStep2b()
    {
        CameraController.Instance.MoveCamera(ZoomStep2b.CameraPos, ZoomStep2b.CameraFOV);

        dryHairAnim.DOKill();
        dryHairAnim.enabled = false;

        ToolStep2b.transform.DOKill();
        ToolStep2b.transform.DOLocalMoveX(0f, .5f).SetDelay(.5f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep2b.gameObject, true);

            camFollowStep2b.enabled = true;

            dustColStep2.SetActive(true);

            handIndicationShower.SetActive(true);

        });

    }

    public void Step2bComplete()
    {
        if (step2bComplete)
            return;

        step2bComplete = true;
        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 3;

        SetProgressBar();

        camFollowStep2b.enabled = false;

        handIndicationShower.SetActive(false);

        ToolInputToggle(ToolStep2b.gameObject, false);

        wetCloth.DOKill();
        wetCloth.DOFade(0, 2f).SetDelay(2f);

        dustColStep2.SetActive(false);

        ToolStep2b.transform.DOKill();
        ToolStep2b.transform.DOLocalMoveX(20f, 1f).OnComplete(() =>
        {
            ToolStep2b.gameObject.SetActive(false);
        });

        waterDripingParticle.Play(true);

        Invoke(nameof(StartStep3), 1f);

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step3_Comp");
        }
        catch { }
    }

    void ForceCompleteStep2b()
    {
        ForceCompleteStep1();
        ForceCompleteStep2();

        hairDirtyWetStatic.SetActive(true);
        hairDirtyStatic.SetActive(false);

    }

    #endregion

    #region Step 3 

    bool step3Complete;

    void StartStep3()
    {
        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
        {
            DOVirtual.DelayedCall(2f, () =>
            {
                waterDripingParticle.Stop(false);
            });
        });

        ShampooOnHand.transform.DOKill();
        ShampooOnHand.transform.DOLocalMoveX(-1.163f, .5f).SetDelay(1f);
    }

    public void ShampooBottlePressed()
    {
        AudioController.instance.PlayAnySfx(0, bottleSqueezSfx, 0f);

        shampooDropping.DOKill();
        shampooDropping.DOLocalMoveY(0.6f, 0.25f);

        handSpriteRend.sprite = bottlePressed;

        AudioController.instance.PlayAnySfx(0, bottlePourSfx, 0.2f);

        shampooPatch.DOKill();
        shampooPatch.DOFade(1, 0.2f).SetDelay(0.5f).OnComplete(() =>
        {
            shampooDropping.DOKill();
            shampooDropping.DOLocalMoveY(3.54f, 0.05f).SetDelay(1f).OnComplete(() =>
            {
                handSpriteRend.sprite = bottleDefault;
            });

            Invoke(nameof(Step3Complete), 2f);
        });
    }

    public void Step3Complete()
    {
        if (step3Complete)
            return;

        step3Complete = true;

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 4;

        SetProgressBar();

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveX(15f, 1f).OnComplete(() =>
        {
            ToolStep3.gameObject.SetActive(false);
        });

        ShampooOnHand.transform.DOKill();
        ShampooOnHand.transform.DOLocalMoveX(-15f, 1f);

        Invoke(nameof(StartStep4), 0.5f);

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step4_Comp");
        }
        catch { }
    }

    void ForceCompleteStep3()
    {
        ForceCompleteStep1();
        ForceCompleteStep2();

        hairDirtyWetStatic.SetActive(true);
        hairDirtyStatic.SetActive(false);
    }

    #endregion

    #region Step 4

    bool step4Complete;

    void StartStep4()
    {
        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);

        ToolStep4.transform.DOKill();
        ToolStep4.transform.DOLocalMoveY(0f, .5f).SetDelay(.5f).OnComplete(() =>
        {
            ToolStep4.OnMouseDownEvent += Hidestep4Indication;
            ToolStep4.OnMouseUpEvent += Showstep4Indication;

            ToolInputToggle(ToolStep4.gameObject, true);

            camFollowStep4.enabled = true;

            foamCol.SetActive(true);

            handIndicationHands.SetActive(true);
        });

    }

    void Hidestep4Indication()
    {
        handIndicationHands.SetActive(false);
    }

    void Showstep4Indication()
    {
        DOVirtual.DelayedCall(1f, () =>
        {
            if (step4Complete)
                return;

            handIndicationHands.SetActive(true);
        });
    }

    public void Step4Complete()
    {
        if (step4Complete)
            return;

        step4Complete = true;

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 5;

        SetProgressBar();

        camFollowStep4.enabled = false;

        handIndicationHands.SetActive(false);

        ToolInputToggle(ToolStep4.gameObject, false);

        ToolStep4.transform.DOKill();
        ToolStep4.transform.DOLocalMoveY(-20f, 1f).OnComplete(() =>
        {
            ToolStep4.gameObject.SetActive(false);
        });

        Invoke(nameof(StartStep5), 1f);

        ToolStep4.OnMouseDownEvent -= Hidestep4Indication;
        ToolStep4.OnMouseUpEvent -= Showstep4Indication;

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step5_Comp");
        }
        catch { }
    }

    void ForceCompleteStep4()
    {
        ForceCompleteStep1();
        ForceCompleteStep2();
        hairDirtyStatic.SetActive(false);
        wetHairs_E.SetActive(true);
        foam2_E.SetActive(true);
    }

    #endregion

    #region Step 5

    bool step5Complete;

    void StartStep5()
    {
        isShowerFixed = IsShowerFixed();

        if (!isShowerFixed)
        {
            CameraController.Instance.MoveCamera(ZoomStep5a.CameraPos, ZoomStep5a.CameraFOV);

            ToolStep5.gameObject.SetActive(false);

            showerRender.sprite = showerDirty;

            ShowerDamaged.transform.DOKill();
            ShowerDamaged.transform.DOLocalMoveX(0f, .5f).SetDelay(.5f).OnComplete(() =>
            {
                ToolInputToggle(ShowerDamaged_Drag.gameObject, true);
                ShowerDamaged.GetComponent<Collider2D>().enabled = true;

                waitingForStep5PickAttempt = true;
            });

            return;
        }

        else if (PlayerPrefs.GetInt("CleanShowerPlaced", 0) == 0 && RemoteManager.Instance.FixInnerLevel())
        {

            ShowerDamaged_Drag.ToolSelectClip = null;
            UI_Manager.instance.SetProgressBar(0);
            ToolInputToggle(ShowerDamaged_Drag.gameObject, false);
            ShowerDamaged.GetComponent<Collider2D>().enabled = false;
            CameraController.Instance.SetCameraInstant(ZoomStep5b.CameraPos, ZoomStep5b.CameraFOV);
            // CameraController.Instance.MoveCamera(ZoomStep5b.CameraPos, ZoomStep5b.CameraFOV);
            ShowerBackDMG.SetActive(false);
            ShowerFrontDMG.SetActive(true);
            ShowerInner_dirty.SetActive(false);

            ShowerDamaged.transform.DOKill();
            ShowerDamaged.transform.DOLocalMoveX(0f, .001f).OnComplete(() =>
            {
                ShowerInner_Target.gameObject.SetActive(true);

                ToolStep5Placeable.transform.DOKill();
                ToolStep5Placeable.transform.DOLocalMoveX(0f, .5f).SetDelay(.5f).OnComplete(() =>
                {

                    handIndicationShowerPlace.SetActive(true);

                    ToolStep5Placeable.OnMouseDownEvent += HidehowerplaceInd;
                    ToolStep5Placeable.OnMouseUpEvent += ShowShowerplaceInd;

                    ToolInputToggle(ToolStep5Placeable.gameObject, true);
                });
            });

            return;
        }


        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);

        ShowerDamaged.gameObject.SetActive(false);

        showerRender.sprite = showerClean;


        if (PlayerPrefs.GetInt("showerFixedBack", 0) == 0)
        {
            showerRender.DOFade(0, 0.001f);
            showerRender.transform.DOMoveY(showerRender.transform.position.y - 0.25f, 0.01f);
        }


        ToolStep5.transform.DOKill();
        ToolStep5.transform.DOLocalMoveX(0f, .5f).SetDelay(.5f).OnComplete(() =>
        {
            camFollowStep5.enabled = true;

            showerRender.DOFade(1, 0.25f);

            if (PlayerPrefs.GetInt("showerFixedBack", 0) == 0)
            {
                //  OnReverseFixIt();
            }


            toolStep5Progress.enabled = true;
            toolStep5ProgressHelp.enabled = true;

            DOVirtual.DelayedCall(0.75f, () =>
            {
                ToolInputToggle(ToolStep5.gameObject, true);
            });

        });

    }

    void ShowShowerplaceInd()
    {
        DOVirtual.DelayedCall(1f, () =>
        {
            if (showePutAgain)
                return;


            handIndicationShowerPlace.SetActive(true);
        });

    }

    void HidehowerplaceInd()
    {
        handIndicationShowerPlace.SetActive(false);
    }

    bool waitingForStep5PickAttempt;

    // Polled manually instead of going through BasicDrag's own OnMouseDown so its built-in
    // pick-up sound/particle never fire for the still-broken shower tool.
    void Update()
    {
        if (!waitingForStep5PickAttempt || !Input.GetMouseButtonDown(0))
            return;

        if (GameManager.instance.isPaused || GameManager.instance.isOverUI())
            return;

        Vector3 mouseWorld = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        Collider2D hit = Physics2D.OverlapPoint(mouseWorld);

        if (hit != null && hit.gameObject == ShowerDamaged.gameObject)
        {
            OnStep5ToolPickAttempt();
        }
    }

    // Fires when the player tries to pick up the still-broken shower tool: it refuses to
    // be dragged, gives a small stuck-nudge, spits a burst of water, then reveals the fix prompt.
    void OnStep5ToolPickAttempt()
    {
        waitingForStep5PickAttempt = false;

        ShowerDamaged.transform.DOKill();
        ShowerDamaged.transform.DOShakePosition(0.35f, new Vector3(0.08f, 0.05f, 0f), 14, 90, false, true);

        waterShotParticle.Play(true);

        DOVirtual.DelayedCall(0.6f, () =>
        {
            fixItPrompt.SetActive(true);

            if (PlayerPrefs.GetInt("showerOpend", 0) == 0)
                fixItPromptHand.SetActive(true);
        });

        AudioController.instance.PlayAnySfx(0, showerProblemClip, 0);
        AudioController.instance.PlayAnySfx(1, FixErrorClip, 0);
    }

    // Looks up the "Shower" sub-level (Level1_5, the showerhead-fixing mini level) and remote config control
    bool IsShowerFixed()
    {
        bool remoteStatus = RemoteManager.Instance.FixInnerLevel();  //Add actual remote config value Here
        bool isCompleted = SaveSystem.Instance.DataFields.AllLevels[0].subLevels[4].isCompleted;

        if (!remoteStatus)
        {
            SaveSystem.Instance.DataFields.AllLevels[0].subLevels[4].isCompleted = true;

            return true;
        }

        return isCompleted;
    }

    bool showerOpend = false;

    public void ShowerOpened()
    {
        PlayerPrefs.SetInt("showerOpend", 1);

        showerOpend = true;

        showerDisk.DOKill();
        showerDisk.DOLocalMoveY(showerDisk.transform.localPosition.y - 0.25f, 0.25f).OnComplete(() =>
         {
             showerDisk.DOLocalMoveX(-20f, 0.25f).OnComplete(() =>
             {
                 showerDisk.DOLocalMoveX(-10f, 0.25f);

                 SaveSystem.Instance.DataFields.levelToPlay = 1;
                 SaveSystem.Instance.DataFields.partToPlay = 5;

                 DOVirtual.DelayedCall(0.1f, () =>
                 {
                     LoadingManager.instance.ShowFadeAnim(0.5f, 0.25f);
                     DOVirtual.DelayedCall(0.7f, () =>
                     {
                         UnityEngine.SceneManagement.SceneManager.LoadScene(
                             UnityEngine.SceneManagement.SceneManager.GetActiveScene().buildIndex);
                     });
                 });
             });
         });
    }

    void ShowShowerOpenInd()
    {
        if (showerOpend)
            return;

        OpenShowerIndication.SetActive(true);

    }

    void HideShowerOpenInd()
    {
        OpenShowerIndication.SetActive(false);
    }

    public void OnFixItPressed()
    {
        fixItPromptHand.SetActive(false);

        if (PlayerPrefs.GetInt("showerOpend", 0) == 0)
        {

            ToolInputToggle(ShowerDamaged_Drag.gameObject, false);

            ShowerDamaged_Drag.transform.DOKill();
            ShowerDamaged_Drag.transform.DOLocalMove(new Vector3(0, 2f, 0f), 1f);

            DOVirtual.DelayedCall(1f, () =>
            {
                CameraController.Instance.MoveCamera(ZoomStep5b.CameraPos, ZoomStep5b.CameraFOV);

                OpenShowerIndication.SetActive(true);

                showrOpenInput.OnMouseDownEvent += HideShowerOpenInd;
                showrOpenInput.OnMouseUpEvent += ShowShowerOpenInd;

                ToolInputToggle(showrOpenInput.gameObject, true);
            });

            waterShotParticle.Stop();

            ShowerBackDMG.SetActive(false);

            ShowerFrontDMG.SetActive(true);

            fixItPrompt.GetComponent<DOTweenAnimation>().DOPlayBackwards();

            DOVirtual.DelayedCall(0.51f, () =>
            {
                fixItPrompt.SetActive(false);
            });

            ShowerDamaged.GetComponent<Collider2D>().enabled = false;
        }

        else
        {
            SaveSystem.Instance.DataFields.levelToPlay = 1;
            SaveSystem.Instance.DataFields.partToPlay = 5;

            DOVirtual.DelayedCall(0.5f, () =>
            {
                LoadingManager.instance.ShowFadeAnim(0.5f, 0.5f);
                DOVirtual.DelayedCall(0.85f, () =>
                {
                    UnityEngine.SceneManagement.SceneManager.LoadScene(
                        UnityEngine.SceneManagement.SceneManager.GetActiveScene().buildIndex);
                });
            });
        }

        AudioController.instance.PlayUiClickSfx();
    }

    bool showePutAgain = false;

    public void OnCleanShowerPlaced()
    {
        HidehowerplaceInd();

        showePutAgain = true;

        ToolInputToggle(ToolStep5Placeable.gameObject, false);

        ToolStep5Placeable.gameObject.SetActive(false);
        showerFixReverseAnimDrag.gameObject.SetActive(true);

        OpenShowerIndication.transform.parent = showerFixReverseAnimDrag.transform;
        CloseShowerIndication.SetActive(true);

        ToolStep5Rev.OnMouseDownEvent += hideInd;
        ToolStep5Rev.OnMouseDownEvent += showInd;
    }

    void showInd()
    {
        if (placedAgain)
            return;

        CloseShowerIndication.SetActive(true);
    }

    void hideInd()
    {
        CloseShowerIndication.SetActive(false);
    }

    bool placedAgain;

    public void OnShowerPlacedAgain()
    {
        if (placedAgain)
            return;

        ToolStep5Rev.OnMouseDownEvent -= hideInd;
        ToolStep5Rev.OnMouseDownEvent -= showInd;

        placedAgain = true;

        OpenShowerIndication.SetActive(false);

        PlayerPrefs.SetInt("CleanShowerPlaced", 1);

        showerDragDamage.SetActive(false);
        showerFixReverseAnimDrag.SetActive(false);

        ToolStep5.transform.DOKill();
        ToolStep5.transform.DOLocalMoveX(0f, 0.001f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep5.gameObject, true);
        });

        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);

    }

    public void Step5Complete()
    {
        if (step5Complete)
            return;

        step5Complete = true;
        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 6;
        SetProgressBar();

        camFollowStep5.enabled = false;

        ToolInputToggle(ToolStep5.gameObject, false);

        ToolStep5.transform.DOKill();
        ToolStep5.transform.DOLocalMoveX(-20f, .5f).OnComplete(() =>
        {
            ToolStep5.gameObject.SetActive(false);
        });

        waterDripingParticle.Play(true);

        Invoke(nameof(StartStep6), 1f);

        wetCloth.DOKill();
        wetCloth.DOFade(0, 3f).SetDelay(0.5f);

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step6_Comp");
        }
        catch { }
    }

    void ForceCompleteStep5()
    {
        ForceCompleteStep1();
        ForceCompleteStep2();
        hairDirtyStatic.SetActive(false);

        wetHairs_E.SetActive(true);
    }

    #endregion

    #region Step 6

    bool step6Complete;

    void StartStep6()
    {
        CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV);

        ToolStep6.transform.DOKill();
        ToolStep6.transform.DOLocalMoveX(0f, .5f).SetDelay(.5f).OnComplete(() =>
        {
            camFollowStep6.enabled = true;

            ToolInputToggle(ToolStep6.gameObject, true);
        });

        DOVirtual.DelayedCall(.5f, () =>
        {
            waterDripingParticle.Stop(false);
        });
    }

    public void Step6Complete()
    {
        if (step6Complete)
            return;

        step6Complete = true;

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 7;

        SetProgressBar();

        camFollowStep6.enabled = false;

        ToolInputToggle(ToolStep6.gameObject, false);

        ToolStep6.transform.DOKill();
        ToolStep6.transform.DOLocalMoveX(-20f, .5f).OnComplete(() =>
        {
            ToolStep6.gameObject.SetActive(false);
        });

        Invoke(nameof(StartStep7), 1f);

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step7_Comp");
        }
        catch { }
    }

    void ForceCompleteStep6()
    {
        ForceCompleteStep1();

        ForceCompleteStep2();

        hairDirtyStatic.SetActive(false);
    }

    #endregion

    #region Step 7

    bool step7Complete;

    void StartStep7()
    {
        CameraController.Instance.MoveCamera(ZoomStep7.CameraPos, ZoomStep7.CameraFOV);

        hairDryFade.gameObject.SetActive(true);
        hairDryFade.DOKill();
        hairDryFade.DOFade(0, 2f).OnComplete(() =>
        {
            hairDryFade.gameObject.SetActive(false);
        });

        dryCombed_BG.SetActive(true);
        dryHairs_E.SetActive(true);

        ToolStep7.transform.DOKill();
        ToolStep7.transform.DOLocalMoveX(0.2f, .5f).SetDelay(.5f).OnComplete(() =>
        {
            camFollowStep7.enabled = true;

            ToolInputToggle(ToolStep7.gameObject, true);

            handIndicationBrush.SetActive(true);
        });
    }

    public void Step7Complete()
    {
        if (step7Complete)
            return;

        step7Complete = true;

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 0;

        UI_Manager.instance.SetProgressBar(1f);

        handIndicationBrush.SetActive(false);

        ToolStep7.transform.DOKill();
        ToolStep7.transform.DOLocalMoveX(-20f, .5f).SetDelay(0.25f).OnComplete(() =>
        {
            ToolStep7.gameObject.SetActive(false);
        });

        PlayerPrefs.SetInt("showerOpend", 0);

        PlayerPrefs.SetInt("CleanShowerPlaced", 0);

        PlayerPrefs.SetInt("showerFixedBack", 0);

        SaveSystem.Instance.DataFields.AllLevels[0].subLevels[4].stepsDone = 0;

        SaveSystem.Instance.DataFields.AllLevels[0].subLevels[4].isCompleted = false;

        Invoke(nameof(LevelComplete), 1.2f);

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step8_Comp");
        }
        catch { }
    }

    #endregion
}