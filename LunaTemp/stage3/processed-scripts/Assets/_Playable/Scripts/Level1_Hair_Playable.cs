using UnityEngine;
using DG.Tweening;
using System.Collections;

public class Level1_Hair_Playable : LevelData
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

    IEnumerator Start()
    {

        base.LevelStart();

        UI_Manager.instance.InitializeTools(ToolIcons);

        yield return new WaitForSeconds(0.1f);

        foamLight_E.SetActive(false);
        foam2_E.SetActive(false);
        wetHairs_E.SetActive(false);
        dryHairs_E.SetActive(false);

        

        // PLAYABLE: no save resume — same ForceComplete + StartStep as original switch.
        StartStep1();
        yield break;
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
        

        

        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);

        if (ShowerDamaged != null) ShowerDamaged.gameObject.SetActive(false);

        showerRender.sprite = showerClean;

        if (PlayerPrefs.GetInt("showerFixedBack", 0) == 0)
        {
            showerRender.transform.DOMoveY(showerRender.transform.position.y - 0.25f, 0.01f);
        }

        ToolStep5.transform.DOKill();
        ToolStep5.transform.DOLocalMoveX(0f, .5f).SetDelay(.5f).OnComplete(() =>
        {
            camFollowStep5.enabled = true;

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

    // Polled manually instead of going through BasicDrag's own OnMouseDown so its built-in
    // pick-up sound/particle never fire for the still-broken shower tool.

    // Fires when the player tries to pick up the still-broken shower tool: it refuses to
    // be dragged, gives a small stuck-nudge, spits a burst of water, then reveals the fix prompt.

    // Looks up the "Shower" sub-level (Level1_5, the showerhead-fixing mini level) and remote config control
    bool IsShowerFixed()
    {
        return true;
    }

    bool showePutAgain = false;

    void showInd()
    {
        if (placedAgain)
            return;

        if (CloseShowerIndication != null) CloseShowerIndication.SetActive(true);
    }

    void hideInd()
    {
        if (CloseShowerIndication != null) CloseShowerIndication.SetActive(false);
    }

    bool placedAgain;

    public void Step5Complete()
    {
        if (step5Complete)
            return;

        step5Complete = true;
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