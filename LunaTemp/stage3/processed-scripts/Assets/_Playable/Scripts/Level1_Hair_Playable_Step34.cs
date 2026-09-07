using UnityEngine;
using DG.Tweening;
using System.Collections;

public class Level1_Hair_Playable_Step34 : LevelData
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

    IEnumerator Start()
    {
        // PLAYABLE: cover the ForceComplete step-skip so nothing visibly pops/snaps.
        PlayableFadeCover.Cover();

        base.LevelStart();

        UI_Manager.instance.InitializeTools(ToolIcons);

        yield return new WaitForSeconds(0.1f);

        foamLight_E.SetActive(false);
        foam2_E.SetActive(false);

        

        // PLAYABLE: no save resume — same ForceComplete + StartStep as original switch.
        ForceCompleteStep2b();
        Invoke(nameof(StartStep3), .5f);
        PlayableFadeCover.Reveal();
        yield break;
}

    #region STEP 1

    bool isStep1Done = false;

    void StartStep1()
    {
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

        { PlayableFadeCover.Cover(); ForceCompleteStep2(); Invoke(nameof(StartStep3), 0.25f); PlayableFadeCover.Reveal(); }

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

        { PlayableFadeCover.Cover(); ForceCompleteStep2b(); Invoke(nameof(StartStep3), .5f); PlayableFadeCover.Reveal(); }

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

        Invoke(nameof(LevelComplete), 1f);

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
        foam2_E.SetActive(true);
    }

    #endregion

    
}