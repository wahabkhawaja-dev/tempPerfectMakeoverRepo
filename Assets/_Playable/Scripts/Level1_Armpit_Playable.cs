using UnityEngine;
using DG.Tweening;
using System.Collections;

public class Level1_Armpit_Playable : LevelData
{
    [Space()]
    [Header("----------------------------------------------------------------------------------")]
    [Space()]
    public ZoomPos MainZoom;

    [Space()]
    [Space()]
    public GameObject view1;
    public GameObject view2;

    [Space()]
    public GameObject hairArmpit;

    [Header("----------------- STEP 1 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep1;

    [Space()]
    public BasicDrag ToolStep1;

    [Space()]
    public BD_CameraFollow ToolStep1CameraFollow;

    [Header("SFX")]
    public AudioClip eraserSfx;

    [Header("----------------- STEP 2 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep2;

    [Space()]
    public Transform ToolStep2Parent;

    [Space()]
    public Transform BeansParent;

    [Header("----------------- STEP 3 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep3;

    [Space()]
    public GameObject JarHandIndication;
    public Transform GreenBtnCol_Damaged;
    public Transform GreenBtnCol_Fixed;
    [Space()]
    public ActionOnTap HandTap1_3;
    [Space()]
    public GameObject GreenBtn;
    public GameObject GreenBtnIndication;
    public GameObject machineDamage;
    public GameObject machineBlackImg;
    public ParticleSystem blackSmokeVfx;
    public AudioClip fixItErrorSfx;

    [Space()]
    public SpriteRenderer boilingWax;

    [Space()]
    public GameObject boilingParticle;

    [Space()]
    public SpriteRenderer[] AllBeans;

    [Header("SFX")]
    public AudioClip machineBtnSfx;
    public AudioSource boilingSfx;

    [Header("----------------- STEP 4 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep4;
    public Transform ToolStep4;
    public GameObject spatulaFull;
    public GameObject spatulaFaded;

    [Space()]
    public GameObject waxMixControler;
    public BasicDrag toolStep4;
    public SpriteRenderer waxOnSpatula;
    public GameObject waxMixIndication;
    public GameObject waxDrippinfParticle;
    public BD_Clamp spatulaClamp;
    public GameObject spatulaPickIndication;
    public Transform spatulaParent;

    [Space()]
    //public BasicDrag waxStickyBD;
    // public GameObject fadedAnim;
    // public GameObject fullAnim;
    public GameObject finalSpatula;

    [Space()]
    public AudioClip DropClip;

    [Header("----------------- STEP 5 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep5;

    [Space()]
    public BasicDrag ToolStep5;

    [Space()]
    //public BD_CameraFollow ToolStep5CameraFollow;

    [Space()]
    public SpriteRenderer hairSmall;
    public SpriteRenderer skinBumpy;
    public GameObject waxRestore;
    public GameObject waxErase;
    public GameObject waxEraseIndication;
    public GameObject handIndication5;

    [Header("----------------- STEP 6 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep6;

    [Space()]
    public Transform ToolStep6Parent;
    public Transform ToolStep6;
    public Animator ToolStep6Anim;
    public Transform BottleStep6;
    public SpriteRenderer ToolsStep6transparent;
    public SpriteRenderer ToolsStep6Liquid;
    public SpriteRenderer ToolsStep6Rend;
    public GameObject dropperTapobj;
    public GameObject dropperTarget;
    public Sprite droperPressed;
    public GameObject dropletAnim;
    public GameObject droperPlaceIndication;
    public BasicDrag ToolStep6Actual;

    [Header("SFX")]
    public AudioClip serumCapSfx;

    [Header("----------------- STEP 7 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep7;

    [Space()]
    public BasicDrag ToolStep7;

    [Space()]
    public BD_CameraFollow ToolStep7CameraFollow;

    [Space()]
    public GameObject serumDropped;
    public SpriteRenderer SerumRubbed;

    [Header("----------------- STEP 8 ----------------------")]
    [Space()]
    [Space()]
    public ZoomPos ZoomStep8;
    public Transform ToolStep8;
    public GameObject perfumeCap;
    public GameObject perfumeBtnTriger;
    public Animator perfumeCapAnim;
    public GameObject perfumeButton;
    public ParticleSystem perfumeParticles;
    public GameObject starsParticles;
    public GameObject bodyStright;
    public GameObject bodyTilt;

    [Header("SFX")]
    public AudioClip PerfumeCapOpen;
    public AudioClip PerfumeSfx;

    [Header("----------------- Machine FIX GATE ----------------------")]
    [Space()]
    public GameObject fixItPrompt;
    public GameObject fixItPromptHand;

    IEnumerator Start()
    {

        base.LevelStart();

        UI_Manager.instance.InitializeTools(ToolIcons);

        yield return new WaitForSeconds(0.1f);

        if (machineDamage != null) machineDamage.SetActive(false);

        serumDropped.SetActive(false);

        waxRestore.SetActive(false);

        

        // PLAYABLE: no save resume — same ForceComplete + StartStep as original switch.
        StartStep1();
        yield break;
}

    #region STEP 1

    bool isStep1Done = false;

    void StartStep1()
    {
        CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);

        ToolStep1.transform.DOKill();
        ToolStep1.transform.DOLocalMoveX(-1.35f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep1.gameObject, true);
            ToolStep1CameraFollow.enabled = true;
        });
    }

    float m_LastEraserTime;
    float m_EraserCallDelay = 0.45f;

    public void PlayEraserSfx()
    {
        if (m_LastEraserTime + m_EraserCallDelay > Time.unscaledTime)
            return;

        m_LastEraserTime = Time.unscaledTime;

        if (AudioController.instance)
            AudioController.instance.PlayAnySfx(0, eraserSfx, 0);

        // if (VibrationManager.instance)
        //     VibrationManager.instance.MediumImpact();
    }

    public void Step1Complete()
    {
        if (isStep1Done)
            return;

        isStep1Done = true;

        ToolInputToggle(ToolStep1.gameObject, false);

        ToolStep1.transform.DOLocalMoveX(-15f, .5f).OnComplete(() =>
        {
            ToolStep1.gameObject.SetActive(false);
            ToolStep1CameraFollow.enabled = false;
        });

        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.FadeAnim(1, 1);

            Invoke(nameof(StartStep2), 1f);
        });

        SetProgressBar();

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step1_Comp");
        }
        catch { }
    }

    void ForceCompleteStep1()
    {
        hairArmpit.SetActive(false);
    }

    #endregion

    #region STEP 2

    bool isStep2Done = false;

    void StartStep2()
    {
        view1.SetActive(false);
        view2.SetActive(true);

        ToolStep2Parent.gameObject.SetActive(true);

        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        ToolStep2Parent.transform.DOKill();
        ToolStep2Parent.transform.DOLocalMoveX(0f, 1f).SetDelay(.5f).OnComplete(() =>
        {
            BeansParent.parent = null;

            JarHandIndication.SetActive(true);
        });
    }

    public void Step2Complete()
    {
        if (isStep2Done)
            return;

        isStep2Done = true;

        ToolStep2Parent.transform.DOLocalMoveX(-15f, 1f).SetDelay(.5f).OnComplete(() =>
        {
            ToolStep2Parent.gameObject.SetActive(false);
        });

        Invoke(nameof(StartStep3), 1f);

        SetProgressBar();

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step2_Comp");
        }
        catch { }
    }

    void ForceCompleteStep2()
    {
        view1.SetActive(false);
        view2.SetActive(true);

        BeansParent.parent = null;
        BeansParent.gameObject.SetActive(false);

        DOVirtual.DelayedCall(0.5f, () =>
        {
            BeansParent.gameObject.SetActive(true);
            BeansParent.transform.position = Vector3.zero;
            BeansParent.transform.DOLocalMoveY(0.5f, 0.01f);
        });

        hairArmpit.SetActive(false);
    }

    #endregion

    #region STEP 3

    bool isStep3Done = false;

    void StartStep3()
    {
        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);

                    GreenBtnCol_Fixed.gameObject.SetActive(true);
            if (GreenBtnCol_Damaged != null) GreenBtnCol_Damaged.gameObject.SetActive(false);
        

        GreenBtnIndication.SetActive(true);
    }

    bool IsMachineFixed()
    {
        return true;
    }

    public void GreenBtnPressed()
    {
        // if (VibrationManager.instance)
        //     VibrationManager.instance.MediumImpact();

        if (AudioController.instance)
            AudioController.instance.PlayAnySfx(0, machineBtnSfx, 0);

        GreenBtn.SetActive(true);

        SpriteRenderer sp = machineBlackImg.GetComponent<SpriteRenderer>();

        sp.DOKill();
        sp.DOFade(0, 1f);

        GreenBtnIndication.SetActive(false);

        boilingWax.DOKill();

        boilingWax.DOFade(1, 2f).OnComplete(() =>
        {
            boilingParticle.SetActive(true);
        });

        for (int i = 0; i < AllBeans.Length; i++)
        {
            AllBeans[i].DOKill();
            AllBeans[i].DOFade(0, 3f).SetDelay(1f);
        }

        UI_Manager.instance.ShowClockProgress(3);
        StartCoroutine(timerRoutine());

        if (boilingSfx != null)
            boilingSfx.Play();

        boilingWax.transform.DOLocalMoveY(0f, 3f).OnComplete(() =>
        {
            Step3Complete();

        });
    }

    WaitForSeconds wait1sec = new WaitForSeconds(1);

    IEnumerator timerRoutine()
    {
        UI_Manager.instance.SetProgressBar(0.333f);

        yield return wait1sec;

        UI_Manager.instance.SetProgressBar(0.666f);
    }

    public void Step3Complete()
    {
        if (isStep3Done)
            return;

        isStep3Done = true;

        Invoke(nameof(StartStep4), 1f);

        SetProgressBar();

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step3_Comp");
        }
        catch { }
    }

    void ForceCompleteStep3()
    {
        view1.SetActive(false);
        view2.SetActive(true);

        GreenBtn.SetActive(true);

        boilingWax.DOFade(1, 0.1f);
        boilingParticle.SetActive(true);

        if (boilingSfx != null)
            boilingSfx.Play();

        hairArmpit.SetActive(false);

        boilingWax.transform.DOLocalMoveY(0f, 0.01f);

        machineBlackImg.SetActive(false);
    }

    #endregion

    #region STEP 4

    bool isStep4Done = false;

    void StartStep4()
    {
        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);

        ToolStep4.DOKill();
        ToolStep4.DOLocalMoveX(0f, .5f).OnComplete(() =>
        {
            ToolStep4.DOLocalMoveY(1.24f, 0.5f);

            DOVirtual.DelayedCall(0.3f, () =>
            {
                spatulaFull.SetActive(false);
                spatulaFaded.SetActive(true);

                toolStep4.OnMouseDownEvent += Step4IndHide;
                toolStep4.OnMouseUpEvent += Step4IndShow;

                waxMixControler.SetActive(true);
                waxMixIndication.SetActive(true);

            });
        });
    }

    void Step4IndHide()
    {
        waxMixIndication.SetActive(false);
    }
    void Step4IndShow()
    {
        DOVirtual.DelayedCall(1f, () =>
        {
            if (isStep4Done)
                return;

            waxMixIndication.SetActive(true);
        });
    }

    public void Step4Complete()
    {
        if (isStep4Done)
            return;

        waxMixIndication.SetActive(false);

        isStep4Done = true;

        ToolInputToggle(waxMixControler, false);

        waxMixControler.SetActive(false);

        spatulaParent.DOLocalMoveY(-1.86f, 0.1f);
        spatulaParent.DOLocalMoveX(0f, 0.1f).OnComplete(() =>
        {
            spatulaPickIndication.transform.position = spatulaParent.position;
            spatulaPickIndication.SetActive(true);

            spatulaFaded.transform.parent = null;
            spatulaFull.transform.parent = null;
            //   spatulaFadedAnim.transform.position = spatulaFaded.transform.position;
            spatulaFaded.SetActive(false);
            //  spatulaFadedAnim.SetActive(true);

            SpatulaPicked();

            // waxStickyBD.gameObject.SetActive(true);
        });
    }

    public void SpatulaPicked()
    {
        // ToolInputToggle(waxStickyBD.gameObject, false);

        spatulaFull.SetActive(false);
        finalSpatula.gameObject.SetActive(true);

        // spatulaFadedAnim.GetComponent<Animator>().enabled = false;

        spatulaPickIndication.SetActive(false);

        Invoke(nameof(SpatulaReleased), 1.5f);

        AudioController.instance.PlayAnySfx(0, DropClip, 1.5f);

        AudioController.instance.PlayAnySfx(1, DropClip, 2f);

        AudioController.instance.PlayAnySfx(2, DropClip, 2.5f);

        AudioController.instance.PlayAnySfx(0, DropClip, 3f);
    }

    void SpatulaReleased()
    {
        DOVirtual.DelayedCall(0.25f, () =>
        {
            UI_Manager.instance.FadeAnim(1, 1);

            if (boilingSfx != null)
            {
                boilingSfx.DOFade(0, 2f).OnComplete(() =>
                {
                    boilingSfx.gameObject.SetActive(false);

                    finalSpatula.gameObject.SetActive(false);
                });

                spatulaFull.SetActive(false);

                //   waxStickyBD.gameObject.SetActive(false);

            }

            Invoke(nameof(StartStep5), 1f);

            SetProgressBar();
        });

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step4_Comp");
        }
        catch { }
    }

    void ForceCompleteStep4()
    {
        view1.SetActive(true);
        view2.SetActive(false);

        hairArmpit.SetActive(false);
    }

    #endregion

    #region STEP 5

    bool isStep5Done = false;

    void StartStep5()
    {
        ToolStep4.gameObject.SetActive(false);

        view1.SetActive(true);
        view2.SetActive(false);

        waxRestore.SetActive(true);

        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);

        ToolStep5.transform.parent.DOKill();
        ToolStep5.transform.parent.DOLocalMoveX(-1.45f, .5f).SetDelay(1f).OnComplete(() =>
        {

            ToolStep5.OnMouseDownEvent += Step5IndHide;
            ToolStep5.OnMouseUpEvent += Step5IndShow;

            ToolInputToggle(ToolStep5.gameObject, true);

            handIndication5.SetActive(true);
            //  ToolStep5CameraFollow.enabled = true;
        });
    }

    void Step5IndShow()
    {
        DOVirtual.DelayedCall(1f, () =>
        {
            if (isStep5Done)
                return;

            handIndication5.SetActive(true);
        });

    }
    void Step5IndHide()
    {
        handIndication5.SetActive(false);
    }

    public void Step5Complete()
    {
        if (isStep5Done)
            return;

        handIndication5.SetActive(false);

        hairSmall.DOFade(0, 2f);

        isStep5Done = true;

        ToolInputToggle(ToolStep5.gameObject, false);

        ToolStep5.transform.parent.DOLocalMoveX(-15f, .5f).OnComplete(() =>
        {
            ToolStep5.gameObject.SetActive(false);

            //  ToolStep5CameraFollow.enabled = false;
        });

        // PLAYABLE: the wax-peel step is skipped. Let the spatula finish leaving and the
        // applied wax read for a beat, then take the peel behind the fade instead of asking
        // the player for it. waxErase is never switched on, so its BD_Fold — whose shader
        // does not render in the Luna build — never comes into play.
        Invoke(nameof(SkipWaxEraseStep), 1.2f);

        SetProgressBar();

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step5_Comp");
        }
        catch { }
    }

    // PLAYABLE: the wax comes off behind the cover. Everything here is snapped rather than
    // tweened — none of it is visible while the screen is black, so the fade lifts on the
    // finished skin with step 6 already on its way in.
    void SkipWaxEraseStep()
    {
        PlayableFadeCover.Cover(0.35f, () =>
        {
            waxEraseIndication.SetActive(false);
            waxErase.SetActive(false);
            waxRestore.SetActive(false);

            hairSmall.DOKill();
            hairSmall.gameObject.SetActive(false);

            skinBumpy.gameObject.SetActive(true);
            skinBumpy.DOKill();
            skinBumpy.DOFade(1f, 0.01f);

            // The peel was its own step, so it still counts on the bar.
            SetProgressBar();

            StartStep6();

            PlayableFadeCover.Reveal();
        });
    }

    public void WaxRemoved()
    {
        waxEraseIndication.SetActive(false);

        skinBumpy.gameObject.SetActive(true);

        skinBumpy.DOKill();
        skinBumpy.DOFade(1, 3f);

        waxErase.transform.DOKill();
        waxErase.transform.DOLocalMoveX(-15f, 1);

        Invoke(nameof(StartStep6), 0.5f);

        SetProgressBar();

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step6_Comp");
        }
        catch { }
    }

    void ForceCompleteStep5()
    {
        view1.SetActive(true);
        view2.SetActive(false);

        hairArmpit.SetActive(false);
        hairSmall.gameObject.SetActive(false);

        skinBumpy.gameObject.SetActive(true);
        skinBumpy.DOKill();
        skinBumpy.DOFade(1, 0.01f);
    }

    #endregion

    #region STEP 6

    bool isStep6Done = false;

    void StartStep6()
    {
        CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV);

        ToolStep6Parent.DOKill();
        ToolStep6Parent.DOLocalMoveX(-1.35f, .5f).SetDelay(0.5f).OnComplete(() =>
        {
            ToolStep6Anim.enabled = true;

            if (serumCapSfx != null)
                AudioController.instance.PlayAnySfx(0, serumCapSfx, 0.25f);

            ToolStep6.DOKill();
            ToolStep6.DOLocalMoveY(ToolStep6.localPosition.y + 0.6f, 0.5f).SetDelay(0.5f);

            ToolsStep6transparent.DOKill();
            ToolsStep6transparent.DOFade(0, 0.5f).SetDelay(0.5f);

            ToolsStep6Rend.gameObject.SetActive(true);
            ToolsStep6Rend.DOKill();
            ToolsStep6Rend.DOFade(1, 0.5f).SetDelay(0.5f);

            ToolsStep6Liquid.DOKill();
            ToolsStep6Liquid.DOFade(1, 0.5f).SetDelay(0.5f).OnComplete(() =>
            {
                ToolStep6Actual.gameObject.SetActive(true);
                ToolStep6.gameObject.SetActive(false);

                ToolStep6Actual.OnMouseUpEvent += Tool6_OnMouseUp;
            });

            DOVirtual.DelayedCall(0.5f, () =>
            {
                droperPlaceIndication.SetActive(true);

                BottleStep6.DOKill();
                BottleStep6.DOMoveX(-15f, 0.5f).SetDelay(1f).OnComplete(() =>
                {
                    BottleStep6.gameObject.SetActive(false);
                });
            });

            dropletAnim.SetActive(true);

        });
    }

    public void Step6Complete()
    {
        if (isStep6Done)
            return;

        isStep6Done = true;

        droperPlaceIndication.SetActive(false);

        // The serum is in, so the bar reads a full 100% and ticks this tool right away.
        // Deliberately NOT LevelData.SetProgressBar(), which also queues SetProgressBarPos()
        // a second later — that is the part that slides the next tool in, and doing it here
        // would bring the next tool up while the dropper is still in the player's hand.
        // SendDropperOff does it on release instead.
        UI_Manager.instance.SetProgressBar(1f);

        // Unless they have already let go: the fill can finish inside BD_Dropper's grace
        // window, and then no mouse-up is coming.
        if (!Input.GetMouseButton(0))
            SendDropperOff();
    }

    void Tool6_OnMouseUp()
    {
        // Releases before the serum is in are just normal drags — the dropper only leaves once
        // the step has actually completed.
        if (!isStep6Done)
            return;

        SendDropperOff();
    }

    bool dropperSentOff;

    void SendDropperOff()
    {
        if (dropperSentOff)
            return;

        dropperSentOff = true;

        ToolStep6Actual.OnMouseUpEvent -= Tool6_OnMouseUp;

        ToolInputToggle(ToolStep6Actual.gameObject, false);

        ToolStep6Actual.transform.DOKill();
        ToolStep6Actual.transform.DOLocalMoveX(-15f, 1f);

        // The bar already read 100% and ticked when the serum went in; this is just the next
        // tool sliding into the bar, timed to the dropper actually leaving.
        UI_Manager.instance.SetProgressBarPos();

        Invoke(nameof(StartStep7), 0.5f);

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step7_Comp");
        }
        catch { }
    }

    void ForceCompleteStep6()
    {
        view1.SetActive(true);
        view2.SetActive(false);

        hairArmpit.SetActive(false);
        hairSmall.gameObject.SetActive(false);

        /* dropletAnim.GetComponent<Animator>().enabled = false;
         dropletAnim.SetActive(true);*/
        dropletAnim.SetActive(false);
        serumDropped.SetActive(true);

        skinBumpy.gameObject.SetActive(true);
        skinBumpy.DOKill();
        skinBumpy.DOFade(1, 0.01f);

    }

    #endregion

    #region STEP 7

    bool isStep7Done = false;

    void StartStep7()
    {
        CameraController.Instance.MoveCamera(ZoomStep7.CameraPos, ZoomStep7.CameraFOV);

        dropletAnim.SetActive(false);
        serumDropped.SetActive(true);

        ToolStep7.transform.DOKill();
        ToolStep7.transform.DOLocalMoveY(-2.5f, .5f).SetDelay(0.5f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep7.gameObject, true);

            ToolStep7CameraFollow.enabled = true;
        });
    }

    public void Step7Complete()
    {
        if (isStep7Done)
            return;

        ToolStep7CameraFollow.enabled = false;

        ToolInputToggle(ToolStep7.gameObject, false);

        ToolStep7.transform.DOKill();
        ToolStep7.transform.DOLocalMoveY(-15f, 1f);

        SerumRubbed.DOKill();
        SerumRubbed.DOFade(0f, 2f);

        skinBumpy.DOKill();
        skinBumpy.DOFade(0f, 2f);

        serumDropped.GetComponent<SpriteRenderer>().DOKill();
        serumDropped.GetComponent<SpriteRenderer>().DOFade(0, 1f);

        Invoke(nameof(StartStep8), 0.5f);

        SetProgressBar();

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step8_Comp");
        }
        catch { }
    }

    void ForceCompleteStep7()
    {
        view1.SetActive(true);
        view2.SetActive(false);

        hairArmpit.SetActive(false);
        hairSmall.gameObject.SetActive(false);
    }

    #endregion

    #region STEP 8

    bool isStep8Done = false;

    void StartStep8()
    {
        CameraController.Instance.MoveCamera(ZoomStep8.CameraPos, ZoomStep8.CameraFOV);

        ToolStep8.transform.DOKill();
        ToolStep8.transform.DOLocalMoveX(-0.8f, .5f).SetDelay(0.5f).OnComplete(() =>
        {
            PerfumeCapRemoved();

            if (PerfumeCapOpen != null)
                AudioController.instance.PlayAnySfx(0, PerfumeCapOpen, 0.15f);
        });
    }

    public void PerfumeCapRemoved()
    {
        perfumeCapAnim.enabled = true;

        DOVirtual.DelayedCall(0.25f, () =>
        {
            perfumeCapAnim.enabled = false;
            perfumeCap.transform.DOKill();
            perfumeCap.transform.DOLocalMoveX(-15, 1f);

            perfumeBtnTriger.SetActive(true);
        });
    }

    public void PerfumePressed()
    {
        // if (VibrationManager.instance)
        //     VibrationManager.instance.MediumImpact();

        bodyStright.SetActive(false);

        bodyTilt.SetActive(true);

        perfumeBtnTriger.SetActive(false);

        DOVirtual.DelayedCall(0.01f, () =>
        {
            perfumeParticles.gameObject.SetActive(true);

            if (PerfumeSfx != null)
                AudioController.instance.PlayAnySfx(0, PerfumeSfx, 0);
        });

        DOVirtual.DelayedCall(0.7f, () =>
        {
            perfumeParticles.gameObject.SetActive(false);
            perfumeParticles.gameObject.SetActive(true);
            perfumeParticles.DORestart();

            if (PerfumeSfx != null)
                AudioController.instance.PlayAnySfx(0, PerfumeSfx, 0);
        });

        perfumeButton.transform.DOKill();
        perfumeButton.transform.DOLocalMoveY(perfumeButton.transform.localPosition.y - 0.12f, 0.2f).SetLoops(4, LoopType.Yoyo).OnComplete(() =>
        {
            starsParticles.SetActive(true);

            Invoke(nameof(Step8Complete), 1f);
        });
    }

    public void Step8Complete()
    {
        if (isStep8Done)
            return;

        ToolInputToggle(ToolStep8.gameObject, false);

        ToolStep8.transform.DOKill();
        ToolStep8.transform.DOLocalMoveX(-15f, 1f);

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV, 1.25f);

        UI_Manager.instance.SetProgressBar(1f);

        SaveSystem.Instance.DataFields.AllLevels[0].subLevels[5].stepsDone = 0;

        SaveSystem.Instance.DataFields.AllLevels[0].subLevels[5].isCompleted = false;

        Invoke(nameof(LevelComplete), 2f);

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step9_Comp");
        }
        catch { }
    }

    #endregion
}