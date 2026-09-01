using UnityEngine;
using DG.Tweening;
using System.Collections;

public class Level3_Manicure_Playable : LevelData
{
    [Space()]
    [Header("----------------------------------------------------------------------------------")]
    [Space()]
    public ZoomPos MainZoom;

    [Space()]
    public InteractableBones[] AllBones;

    [Space()]
    public GameObject View1;
    public GameObject View2;
    public GameObject View3;
    public GameObject View4;
    public GameObject View5;
    public GameObject View6;

    [Header("----------------- STEP 1 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep1;

    [Space()]
    public BasicDrag ToolStep1;
    public Transform ToolStep1Body;

    [Space()]
    public GameObject ToolStep1Tip;

    [Space()]
    public BD_CameraFollow ToolStep1CameraFollow;

    [Space()]
    public GameObject Step1Col;

    [Space()]
    public GameObject Hairs_1;

    [Header("----------------- STEP 2 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep2;

    [Space()]
    public ZoomPos ZoomStep2B;

    [Space()]
    public GameObject Tool2Holder;

    [Space()]
    public GameObject Tool2Indication;

    [Space()]
    public BasicDrag ToolStep2;

    [Space()]
    public GameObject ToolStep2Tip;

    [Space()]
    public BD_CameraFollow ToolStep2CameraFollow;

    [Space()]
    public BD_ToolRotate ToolStep2ToolRotate;

    [Space()]
    public GameObject Holder1;
    public GameObject Holder2;

    [Space()]
    public Transform Wipe;

    [Space()]
    public Animator BottleAnimator;

    [Space()]
    public SpriteRenderer SpreadOnWipe_2;

    [Space()]
    public GameObject PolishHolder_2;

    [Space()]
    public AudioClip makeupRemoverSfx;

    [Header("----------------- STEP 3 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep3;

    [Space()]
    public BasicDrag ToolStep3;

    [Space()]
    public BD_CameraFollow ToolStep3CameraFollow;

    [Space()]
    public GameObject[] Indications_3;

    [Space()]
    public GameObject NailsHolder_3;

    [Header("----------------- STEP 4 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep4;

    [Space()]
    public Transform Kettle;
    public Transform KettleCap;

    [Space()]
    public Transform MaskWaterfall;

    [Space()]
    public Transform Waterfall;
    public Transform WaterInKettle;
    public GameObject WaterInKettleParticles;

    [Space()]
    public GameObject HoseTap1;
    public GameObject HoseTap2;

    [Space()]
    public GameObject HandTap1;
    public GameObject HandTap2;
    public AudioClip[] WaterSfxstep4;

    [Header("----------------- STEP 5 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep5;

    [Space()]
    public ActionOnTap HandTap1_5;

    [Space()]
    public Transform Dial_5;
    public SpriteRenderer Dial_5_Light;

    [Space()]
    public GameObject Flame;
    public Transform FlameMask;

    [Space()]
    public BasicDrag Kettle_5;
    public Transform Kettle_5_Target;
    public GameObject Kettle_5_HandAnim;
    public Animator Kettle_5_Cap;

    [Space()]
    public ParticleSystem Smoke_5A;
    public ParticleSystem Smoke_5B;

    [Space()]
    public GameObject HandTap2_5;

    [Space()]
    public GameObject StoveFixItBtn;
    public DOTweenAnimation StoveFixItBtnAnim;
    [SerializeField] GameObject fixItPromptHand;

    public AudioClip StoveDamageClip;

    public GameObject stoveFireAudio;
    public GameObject KattleSfx;
    public GameObject KattleCapShakingSfx;

    [Header("----------------- STEP 6 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep6;

    [Space()]
    public Transform Kettle_6;
    public Collider2D Kettle_6_Col;

    [Space()]
    public GameObject Indication_6;

    [Header("----------------- STEP 7 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep7;

    [Space()]
    public Collider2D ToolStep7Col;
    public Animator ToolStep7Animator;

    [Space()]
    public GameObject Indication_7;

    public HandDipEvent actionOnTap;

    [Space()]
    public SpriteRenderer HandClean_7;

    [Header("----------------- STEP 8 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep8;

    [Space()]
    public ZoomPos ZoomStep8B;

    [Space()]
    public SpriteRenderer WetHand_8;

    [Space()]
    public BasicDrag ToolStep8;

    [Space()]
    public BD_CameraFollow ToolStep8CameraFollow;

    [Space()]
    public GameObject Indication_8;

    [Space()]
    public GameObject Nail_8;

    [Header("----------------- STEP 9 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep9;

    [Space()]
    public GameObject Tool9Holder;

    [Space()]
    public Animator CapAnimator_9;

    [Space()]
    public DraggableObject ToolStep9;

    [Space()]
    public GameObject[] ToolStep9Indications;

    [Space()]
    public GameObject[] Mosturizer_9;

    [Space()]
    public AudioClip mosturizerOpenSfx;

    [Header("----------------- STEP 10 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep10;

    [Space()]
    public GameObject Tip10;

    [Space()]
    public BasicDrag ToolStep10;

    [Space()]
    public BD_CameraFollow ToolStep10CameraFollow;

    [Space()]
    public GameObject HandAnim10;

    [Space()]
    public SpriteRenderer DryHand_SR;
    public SpriteRenderer FinalHand_SR;

    [Space()]
    public SpriteRenderer MosturizerSR_10;

    [Header("----------------- STEP 11 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep11;

    [Space()]
    public Transform ToolStep11Holder;
    public Transform ToolStep11Bottle;

    [Space()]
    public BasicDrag ToolStep11;
    public Transform ToolStep11Bone1;
    public Transform ToolStep11Bone2;

    [Space()]
    public BD_Progress ToolStep11BdProgress;

    [Space()]
    public BD_CameraFollow ToolStep11CameraFollow;

    [Space()]
    public BD_ToolRotate ToolStep11ToolRotate;

    [Space()]
    public GameObject ToolStep11Indication;
    public AudioClip tool11Sfx;

    IEnumerator Start()
    {

        base.LevelStart();

        UI_Manager.instance.InitializeTools(ToolIcons);

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV, .01f);

        yield return new WaitForSeconds(0.1f);

        // STEP 1
        Step1Col.SetActive(false);

        ToolStep1CameraFollow.enabled = false;

        // STEP 2
        ToolStep2CameraFollow.enabled = false;

        ToolStep2ToolRotate.enabled = false;

        // STEP 3
        ToolStep3CameraFollow.enabled = false;

        // STEP 8
        ToolStep8CameraFollow.enabled = false;

        // STEP 10
        ToolStep10CameraFollow.enabled = false;

        // STEP 11
        ToolStep11CameraFollow.enabled = false;

        

        // PLAYABLE: no save resume — same ForceComplete + StartStep as original switch.
        StartStep1();
        yield break;
}

    #region HELPERS

    // On resume SetProgressIconIndex() has already scrolled the carousel onto the
    // icon of the step we are about to start, so that step must not advance it again.
    bool skipIconAdvance;

    void AdvanceProgressIcon()
    {
        if (skipIconAdvance)
        {
            skipIconAdvance = false;

            return;
        }

        UI_Manager.instance.SetProgressBarPos();
    }

    public void UpdateHandBonesTip(GameObject TipIs)
    {
        for (int i = 0; i < AllBones.Length; i++)
        {
            try
            {
                AllBones[i].Tip = TipIs.transform;
            }
            catch
            {
            }
        }
    }

    #endregion

    #region STEP 1

    bool isStep1Done;

    void StartStep1()
    {
        CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);

        ToolStep1.transform.DOKill();
        ToolStep1.transform.DOLocalMoveX(0.3f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep1.gameObject, true);

            ToolStep1CameraFollow.enabled = true;

            Step1Col.SetActive(true);
        });

        UpdateHandBonesTip(ToolStep1Tip);
    }

    public void Step1Done()
    {
        if (isStep1Done)
            return;

        isStep1Done = true;

        Step1Col.SetActive(false);

        ToolStep1CameraFollow.enabled = false;

        ToolInputToggle(ToolStep1.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep1.CameraFOV);

        ToolStep1.transform.DOKill();
        ToolStep1.transform.DOLocalMoveY(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep1.gameObject.SetActive(false);
        });

        Invoke(nameof(StartStep2), 1.2f);

        try
        {
            // Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
            //     + "_" + levelName + "_Step1_Comp");
        }
        catch { }
    }

    public void PrespectiveL_1()
    {
        ToolStep1Body.localScale = new Vector3(-1f, 1f, 1f);
    }

    public void PrespectiveR_1()
    {
        ToolStep1Body.localScale = new Vector3(1f, 1f, 1f);
    }

    void ForceCompleteStep1()
    {
        Hairs_1.SetActive(false);
    }

    #endregion

    #region STEP 2

    bool isStep2Done;

    void StartStep2()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        Tool2Holder.SetActive(true);
        Tool2Holder.transform.DOKill();
        Tool2Holder.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
        {
            BottleTap();
        });

        UpdateHandBonesTip(ToolStep2Tip);
    }

    void BottleTap()
    {
        BottleAnimator.enabled = true;

        if (makeupRemoverSfx != null)
            AudioController.instance.PlayAnySfx(0, makeupRemoverSfx, 0f);

        DOVirtual.DelayedCall(0.5f, () =>
        {
            AudioController.instance.PlayAnySfx(1, makeupRemoverSfx, 0f);
            SpreadOnWipe_2.DOKill();
            SpreadOnWipe_2.DOFade(1f, 2f);

            Invoke(nameof(Drop2Done), 2f);
        });
    }

    void Drop2Done()
    {
        Wipe.DOKill();
        Wipe.DOLocalMove(new Vector3(2f, 1f, 0f), 1f).SetDelay(.5f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep2.gameObject, true);

            ToolStep2CameraFollow.enabled = true;

            ToolStep2.OnMouseDownEvent += () =>
            {
                Holder1.SetActive(false);
                Holder2.SetActive(true);

                ToolStep2ToolRotate.enabled = true;
            };

            Tool2Indication.SetActive(true);
        });

        BottleAnimator.enabled = false;

        BottleAnimator.transform.DOKill();
        BottleAnimator.transform.DOLocalMoveX(-10, 1f);

        CameraController.Instance.MoveCamera(ZoomStep2B.CameraPos, ZoomStep2B.CameraFOV);
    }

    public void Step2Done()
    {
        if (isStep2Done)
            return;

        isStep2Done = true;

        Tool2Indication.SetActive(false);

        ToolStep2ToolRotate.enabled = false;

        ToolStep2CameraFollow.enabled = false;

        ToolInputToggle(ToolStep2.gameObject, false);

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOLocalMoveX(10, 1f).SetDelay(.25f).SetEase(Ease.InBack);

        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        Invoke(nameof(StartStep3), 1.2f);

        try
        {
            // Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
            //     + "_" + levelName + "_Step2_Comp");
        }
        catch { }
    }

    void ForceCompleteStep2()
    {
        ForceCompleteStep1();

        PolishHolder_2.SetActive(false);
    }

    #endregion

    #region STEP 3

    bool isStep3Done;

    void StartStep3()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveX(0.75f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep3.gameObject, true);

            ToolStep3CameraFollow.enabled = true;

            for (int i = 0; i < Indications_3.Length; i++)
            {
                Indications_3[i].SetActive(true);
            }
        });
    }

    public void Step3Done()
    {
        if (isStep3Done)
            return;

        isStep3Done = true;

        for (int i = 0; i < Indications_3.Length; i++)
        {
            Indications_3[i].SetActive(false);
        }

        ToolStep3CameraFollow.enabled = false;

        ToolInputToggle(ToolStep3.gameObject, false);

        CameraController.Instance.MoveCamera(new Vector3(0, ZoomStep3.CameraPos.y, ZoomStep3.CameraPos.z), ZoomStep3.CameraFOV);

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveY(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep3.gameObject.SetActive(false);
        });

        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.FadeAnim(1f, 1f);

            DOVirtual.DelayedCall(1.1f, () =>
            {
                CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV, .1f);

                View1.SetActive(false);

                View2.SetActive(true);

                Invoke(nameof(StartStep4), 1f);
            });
        });

        try
        {
            // Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
            //     + "_" + levelName + "_Step3_Comp");
        }
        catch { }
    }

    void ForceCompleteStep3()
    {
        ForceCompleteStep2();

        View1.SetActive(false);

        View2.SetActive(true);

        NailsHolder_3.SetActive(false);
    }

    #endregion

    #region STEP 4

    bool isStep4Done;

    void StartStep4()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);

        Kettle.transform.DOKill();
        Kettle.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
        {
            HandTap1.SetActive(true);
        });
    }

    public void CapOpen_4()
    {
        HandTap1.SetActive(false);

        KettleCap.DOKill();
        KettleCap.DOLocalRotate(new Vector3(0, 0, -22f), 1f).OnComplete(() =>
        {
            HandTap2.SetActive(true);
        });

        UI_Manager.instance.SetProgressBar(.25f);
    }

    public void ValveOpen_4()
    {
        HandTap2.SetActive(false);

        HoseTap1.SetActive(false);
        HoseTap2.SetActive(true);

        Waterfall.gameObject.SetActive(true);
        WaterInKettle.gameObject.SetActive(true);
        MaskWaterfall.gameObject.SetActive(true);

        MaskWaterfall.DOKill();
        MaskWaterfall.DOLocalMoveY(1.64f, .7f);

        WaterInKettle.DOKill();
        WaterInKettle.DOLocalMoveY(0.255f, 2f).SetDelay(.7f).OnComplete(() =>
        {
            ValveClose_4();
        });

        UI_Manager.instance.SetProgressBar(1f, 4f);
    }

    void ValveClose_4()
    {
        HoseTap1.SetActive(true);
        HoseTap2.SetActive(false);

        MaskWaterfall.DOKill();
        MaskWaterfall.DOLocalMoveY(0f, 1f).OnComplete(() =>
        {
            Waterfall.gameObject.SetActive(false);

            MaskWaterfall.gameObject.SetActive(false);
        });

        DOVirtual.DelayedCall(.8f, () =>
        {
            WaterInKettleParticles.gameObject.SetActive(false);

            KettleCap.DOKill();
            KettleCap.DOLocalRotate(new Vector3(0, 0, -73f), 1f).OnComplete(() =>
            {
                Step4Done();
            });
        });
    }

    public void Step4Done()
    {
        if (isStep4Done)
            return;

        isStep4Done = true;

        Kettle.transform.DOKill();
        Kettle.transform.DOLocalMoveX(10f, 1f).SetDelay(.5f);

        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.FadeAnim(1f, 1f);

            DOVirtual.DelayedCall(1.1f, () =>
            {
                CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV, .1f);

                View2.SetActive(false);

                View3.SetActive(true);

                Invoke(nameof(StartStep5), 1f);
            });
        });

        try
        {
            // Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
            //     + "_" + levelName + "_Step4_Comp");
        }
        catch { }
    }

    public void PlayWaterSounds(int index)
    {
        if (index < 0 || index >= WaterSfxstep4.Length)
            return;

        AudioController.instance.PlayAnySfx(1, WaterSfxstep4[index], 0f);
    }

    public void PlayAnySound(AudioClip audioClip)
    {
        AudioController.instance.PlayAnySfx(1, audioClip, 0f);
    }

    void ForceCompleteStep4()
    {
        ForceCompleteStep3();

        View2.SetActive(false);

        View3.SetActive(true);
    }

    #endregion

    #region STEP 5

    bool isStep5Done;

    void StartStep5()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);

        HandTap1_5.gameObject.SetActive(true);
    }

    // Looks up the "Shower" sub-level (Level1_5, the showerhead-fixing mini level) and remote config control
    bool IsStoveFixed()
    {
        return true;
    }

    public void DialStart_5()
    {
                    HandTap1_5.gameObject.SetActive(false);

            Dial_5_Light.DOKill();
            Dial_5_Light.DOFade(1f, .5f);

            DOVirtual.DelayedCall(.1f, () =>
            {
                stoveFireAudio.SetActive(true);
            });

            Dial_5.DOKill();
            Dial_5.DOLocalRotate(new Vector3(0, 0, -70f), .5f).OnComplete(() =>
            {

                Flame.SetActive(true);
                FlameMask.gameObject.SetActive(true);

                FlameMask.DOKill();
                FlameMask.DOLocalMoveY(1.8f, 1f).OnComplete(() =>
                {
                    Kettle_5.transform.DOKill();
                    Kettle_5.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
                    {
                        ToolInputToggle(Kettle_5.gameObject, true);

                        Kettle_5_Target.gameObject.SetActive(true);

                        Kettle_5.OnMouseDownEvent += () => Kettle_5_HandAnim.SetActive(false);

                        Kettle_5_HandAnim.SetActive(true);
                    });
                });
            });

            UI_Manager.instance.SetProgressBar(.25f);
        
    }

    public void KettlePlaced_5()
    {
        Kettle_5_HandAnim.SetActive(false);

        Kettle_5.gameObject.SetActive(false);

        DOVirtual.DelayedCall(2f, () =>
        {
            KattleSfx.SetActive(true);
            Smoke_5A.gameObject.SetActive(true);
        });

        DOVirtual.DelayedCall(3f, () =>
        {

            Smoke_5B.gameObject.SetActive(true);

            Kettle_5_Cap.enabled = true;
        });

        DOVirtual.DelayedCall(4f, () =>
        {
            HandTap2_5.SetActive(true);
        });

        UI_Manager.instance.SetProgressBar(.5f);
    }

    public void DialStopped_5()
    {
        HandTap2_5.SetActive(false);

        Dial_5_Light.DOKill();
        Dial_5_Light.DOFade(0f, .5f);

        Dial_5.DOKill();
        Dial_5.DOLocalRotate(new Vector3(0, 0, 0f), .5f).OnComplete(() =>
        {
            Kettle_5_Cap.enabled = false;
            KattleCapShakingSfx.SetActive(false);
            Kettle_5_Cap.transform.DOKill();
            Kettle_5_Cap.transform.DOLocalMove(new Vector3(-0.092f, 0.714f, 0), .5f);
            Kettle_5_Cap.transform.DOLocalRotate(new Vector3(0, 0, -74.215f), .5f);

            Smoke_5B.Stop();

            FlameMask.DOKill();
            FlameMask.DOLocalMoveY(-1f, 1f).OnComplete(() =>
            {
                Flame.SetActive(false);
                FlameMask.gameObject.SetActive(false);

                Smoke_5B.gameObject.SetActive(false);

                Step5Done();
            });
        });

        UI_Manager.instance.SetProgressBar(1f);
    }

    public void Step5Done()
    {
        if (isStep5Done)
            return;

        isStep5Done = true;

        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.FadeAnim(1f, 1f);
            KattleSfx.GetComponent<AudioSource>().DOFade(0f, .5f).OnComplete(() =>
            {
                KattleSfx.SetActive(false);
            });

            DOVirtual.DelayedCall(1.1f, () =>
            {
                CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV, .1f);

                View3.SetActive(false);

                View4.SetActive(true);

                Invoke(nameof(StartStep6), 1f);
            });
        });

        try
        {
            // Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
            //     + "_" + levelName + "_Step5_Comp");
        }
        catch { }
    }

    void ForceCompleteStep5()
    {
        ForceCompleteStep4();

        View3.SetActive(false);

        View4.SetActive(true);
    }

    #endregion

    #region STEP 6

    bool isStep6Done;

    void StartStep6()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV);

        Kettle_6.transform.DOKill();
        Kettle_6.transform.DOLocalMoveX(-1.664f, .5f).SetDelay(1f).OnComplete(() =>
        {
            Kettle_6_Col.enabled = true;

            Indication_6.SetActive(true);
        });
    }

    public void Step6Done()
    {
        if (isStep6Done)
            return;

        isStep6Done = true;

        Kettle_6_Col.enabled = false;

        CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV);

        Kettle_6.transform.DOKill();
        Kettle_6.transform.DOLocalMoveX(8f, 1f).SetEase(Ease.InBack).SetDelay(1f);

        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.FadeAnim(1f, 1f);

            DOVirtual.DelayedCall(1.1f, () =>
            {
                CameraController.Instance.MoveCamera(ZoomStep7.CameraPos, ZoomStep7.CameraFOV, .1f);

                View4.SetActive(false);

                View5.SetActive(true);

                Invoke(nameof(StartStep7), 1f);
            });
        });

        try
        {
            // Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
            //     + "_" + levelName + "_Step6_Comp");
        }
        catch { }
    }

    void ForceCompleteStep6()
    {
        ForceCompleteStep5();

        View4.SetActive(false);

        View5.SetActive(true);
    }

    #endregion

    #region STEP 7

    bool isStep7Done;

    void StartStep7()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep7.CameraPos, ZoomStep7.CameraFOV);

        DOVirtual.DelayedCall(1f, () =>
        {
            actionOnTap.EventCalled();

            ToolStep7Col.enabled = true;
        });
    }

    public void StartTimer_7()
    {
        UI_Manager.instance.ShowClockProgress(3);

        UI_Manager.instance.SetProgressBar(1f, 4f);
    }

    public void Step7Done()
    {
        if (isStep7Done)
            return;

        isStep7Done = true;

        ToolStep7Col.enabled = false;

        ToolStep7Animator.enabled = false;

        CameraController.Instance.MoveCamera(ZoomStep7.CameraPos, ZoomStep7.CameraFOV);

        HandClean_7.sortingOrder = 20;

        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.FadeAnim(1f, 1f);

            DOVirtual.DelayedCall(1.1f, () =>
            {
                CameraController.Instance.MoveCamera(ZoomStep8.CameraPos, ZoomStep8.CameraFOV, .1f);

                View5.SetActive(false);

                View6.SetActive(true);

                Invoke(nameof(StartStep8), 1.2f);
            });
        });

        try
        {
            // Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
            //     + "_" + levelName + "_Step7_Comp");
        }
        catch { }
    }

    void ForceCompleteStep7()
    {
        ForceCompleteStep6();

        View5.SetActive(false);

        View6.SetActive(true);
    }

    #endregion

    #region STEP 8

    bool isStep8Done;

    void StartStep8()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep8.CameraPos, ZoomStep8.CameraFOV);

        DOVirtual.DelayedCall(1f, () =>
        {
            WetHand_8.DOKill();
            WetHand_8.DOFade(0, 2f);
        });

        DOVirtual.DelayedCall(3f, () =>
        {
            CameraController.Instance.MoveCamera(ZoomStep8B.CameraPos, ZoomStep8B.CameraFOV);

            ToolStep8.transform.DOKill();
            ToolStep8.transform.DOLocalMoveX(0.85f, .5f).SetDelay(1f).OnComplete(() =>
            {
                ToolInputToggle(ToolStep8.gameObject, true);

                ToolStep8CameraFollow.enabled = true;

                Indication_8.SetActive(true);

                ToolStep8.GetComponent<BD_Progress>().SubCompleteEvent
                +=
                () => Indication_8.SetActive(false);

            });
        });
    }

    public void Step8Done()
    {
        if (isStep8Done)
            return;

        isStep8Done = true;

        ToolStep8CameraFollow.enabled = false;

        ToolInputToggle(ToolStep8.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep8.CameraPos, ZoomStep8.CameraFOV);

        ToolStep8.transform.DOKill();
        ToolStep8.transform.DOLocalMoveY(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep8.gameObject.SetActive(false);
        });

        Invoke(nameof(StartStep9), 1f);

        try
        {
            // Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
            //     + "_" + levelName + "_Step8_Comp");
        }
        catch { }
    }

    void ForceCompleteStep8()
    {
        ForceCompleteStep7();

        Nail_8.SetActive(false);

        WetHand_8.gameObject.SetActive(false);
    }

    #endregion

    #region STEP 9

    bool isStep9Done;

    void StartStep9()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep9.CameraPos, ZoomStep9.CameraFOV);

        CapAnimator_9.enabled = true;

        if (mosturizerOpenSfx != null)
            AudioController.instance.PlayAnySfx(0, mosturizerOpenSfx, 0f);

        ToolStep9.transform.DOKill();
        ToolStep9.transform.DOLocalRotate(new Vector3(0, 0, 305.81f), 1f);
        ToolStep9.transform.DOMove(new Vector3(1, -2, 0f), 1f);

        DOVirtual.DelayedCall(1f, () =>
        {
            ToolStep9.enabled = true;

            for (int i = 0; i < ToolStep9Indications.Length; i++)
            {
                ToolStep9Indications[i].SetActive(true);
            }
        });
    }

    public void Step9Done()
    {
        if (isStep9Done)
            return;

        isStep9Done = true;

        DOVirtual.DelayedCall(1f, () =>
        {
            ToolStep9.enabled = true;

            ToolStep9.transform.DOKill();
            ToolStep9.transform.DOLocalMoveX(10, 1f).SetDelay(1f).SetEase(Ease.InBack).OnComplete(() =>
            {
                Tool9Holder.gameObject.SetActive(false);
            });

            CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV);

            Invoke(nameof(StartStep10), 1f);

            try
            {
                // Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                //     + "_" + levelName + "_Step9_Comp");
            }
            catch { }
        });
    }

    void ForceCompleteStep9()
    {
        ForceCompleteStep8();

        for (int i = 0; i < Mosturizer_9.Length; i++)
        {
            Mosturizer_9[i].SetActive(true);
        }
    }

    #endregion

    #region STEP 10

    bool isStep10Done;

    void StartStep10()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep10.CameraPos, ZoomStep10.CameraFOV);

        ToolStep10.transform.DOKill();
        ToolStep10.transform.DOLocalMoveY(0f, .5f).SetDelay(.5f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep10.gameObject, true);

            ToolStep10CameraFollow.enabled = true;

            ToolStep10.OnMouseDownEvent += () =>
            {
                HandAnim10.SetActive(false);
            };

            HandAnim10.SetActive(true);
        });

        UpdateHandBonesTip(Tip10);
    }

    public void Step10Done()
    {
        if (isStep10Done)
            return;

        isStep10Done = true;

        ToolStep10CameraFollow.enabled = false;

        ToolInputToggle(ToolStep10.gameObject, false);

        ToolStep10.transform.DOKill();
        ToolStep10.transform.DOLocalMoveY(-10f, 1.5f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep10.gameObject.SetActive(false);
        });

        DryHand_SR.DOKill();
        DryHand_SR.DOFade(1f, 1f);

        FinalHand_SR.gameObject.SetActive(true);
        FinalHand_SR.DOKill();
        FinalHand_SR.DOFade(1f, 2f).SetDelay(1f);

        CameraController.Instance.MoveCamera(ZoomStep10.CameraPos, ZoomStep10.CameraFOV);

        Invoke(nameof(StartStep11), 1.2f);

        try
        {
            // Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
            //     + "_" + levelName + "_Step10_Comp");
        }
        catch { }
    }

    void ForceCompleteStep10()
    {
        ForceCompleteStep9();

        for (int i = 0; i < Mosturizer_9.Length; i++)
        {
            Mosturizer_9[i].SetActive(false);
        }

        MosturizerSR_10.gameObject.SetActive(false);

        DryHand_SR.DOKill();
        DryHand_SR.DOFade(0f, .1f);

        FinalHand_SR.gameObject.SetActive(true);
        FinalHand_SR.DOKill();
        FinalHand_SR.DOFade(1f, .01f);
    }

    #endregion

    #region STEP 11

    bool isStep11Done;

    void StartStep11()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep11.CameraPos, ZoomStep11.CameraFOV);

        ToolStep11Holder.transform.DOKill();
        ToolStep11Holder.transform.DOLocalMoveX(0.9f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolStep11.transform.DOKill();
            DOVirtual.DelayedCall(.5f, () => PlayAnySound(tool11Sfx));
            ToolStep11.transform.DOLocalMoveY(0.3f, .2f).SetLoops(4, LoopType.Yoyo).SetDelay(.5f).OnComplete(() =>
            {
                ToolStep11.transform.DOKill();
                ToolStep11.transform.DOLocalMoveY(1.536f, .5f).OnComplete(() =>
                {
                    ToolStep11Bottle.transform.DOKill();
                    ToolStep11Bottle.transform.DOLocalMoveX(15f, .5f).SetDelay(.5f);

                    ToolStep11.transform.DOKill();
                    ToolStep11.transform.DOLocalRotate(new Vector3(0, 0, 180f), .5f).SetDelay(.5f);
                    ToolStep11.transform.DOLocalMoveY(0f, .5f).SetDelay(.5f).OnComplete(() =>
                    {
                        ToolInputToggle(ToolStep11.gameObject, true);

                        ToolStep11ToolRotate.enabled = true;

                        ToolStep11CameraFollow.enabled = true;

                        ToolStep11Indication.SetActive(true);

                        ToolStep11.GetComponent<BD_Progress>().SubCompleteEvent
                        += () =>
                        ToolStep11Indication.SetActive(false);
                    });
                });

                //ToolStep11Bone1.transform.DOKill();
                //ToolStep11Bone1.transform.DOLocalRotate(new Vector3(0, 0, -68f), .5f).SetDelay(.85f);

                //ToolStep11Bone2.transform.DOKill();
                //ToolStep11Bone2.transform.DOLocalRotate(new Vector3(0, 0, -110f), .5f).SetDelay(.85f);
            });
        });
    }

    public void ShrinkIn_11()
    {
        ToolStep11Bone1.transform.DOKill();
        ToolStep11Bone1.transform.DOLocalRotate(new Vector3(0, 0, -87f), .4f);

        ToolStep11Bone2.transform.DOKill();
        ToolStep11Bone2.transform.DOLocalRotate(new Vector3(0, 0, -93f), .4f);
    }

    public void ShrinkOut_11()
    {
        ToolStep11Bone1.transform.DOKill();
        ToolStep11Bone1.transform.DOLocalRotate(new Vector3(0, 0, -93f), .4f);

        ToolStep11Bone2.transform.DOKill();
        ToolStep11Bone2.transform.DOLocalRotate(new Vector3(0, 0, -89f), .4f);
    }

    public void Step11Done()
    {
        if (isStep11Done)
            return;

        isStep11Done = true;

        ToolStep11CameraFollow.enabled = false;

        ToolInputToggle(ToolStep11.gameObject, false);

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV);

        ToolStep11.transform.DOKill();
        ToolStep11.transform.DOLocalMoveY(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep11Holder.gameObject.SetActive(false);
        });

        Invoke(nameof(LevelComplete), 2f);

        try
        {
            // Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
            //     + "_" + levelName + "_Step11_Comp");
        }
        catch { }
    }

    #endregion
}