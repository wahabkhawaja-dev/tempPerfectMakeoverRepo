using UnityEngine;
using DG.Tweening;
using System.Collections;

public class Level3_Crown : LevelData
{
    [Space()]
    [Header("----------------------------------------------------------------------------------")]
    [Space()]
    public ZoomPos MainZoom;

    [Space()]
    public GameObject View1;
    public GameObject View2;

    [Header("----------------- STEP 1 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep1;

    [Space()]
    public BasicDrag ToolStep1;

    [Space()]
    public BD_CameraFollow ToolStep1CameraFollow;

    [Space()]
    public GameObject Step1Col;

    [Space()]
    public GameObject DustSR_1;

    [Header("----------------- STEP 2 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep2;

    [Space()]
    public BasicDrag ToolStep2;

    [Space()]
    public BD_CameraFollow ToolStep2CameraFollow;

    [Space()]
    public SpriteRenderer[] SRsToFadeOut_2;

    [Space()]
    public SpriteRenderer SpraySR_2;

    [Header("----------------- STEP 3 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep3;

    [Space()]
    public BasicDrag ToolStep3;

    [Space()]
    public BD_CameraFollow ToolStep3CameraFollow;

    [Space()]
    public GameObject Step3Col;

    [Space()]
    public GameObject Mix;
    public GameObject MixE;

    [Header("----------------- STEP 4 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep4;

    [Space()]
    public BasicDrag ToolStep4;

    [Space()]
    public BD_CameraFollow ToolStep4CameraFollow;

    [Space()]
    public GameObject Step4Col;

    [Space()]
    public SpriteRenderer CleanSR_4;

    [Space()]
    public SpriteRenderer[] SRsToFadeOut_4;

    [Header("----------------- STEP 5 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep5;

    [Space()]
    public GameObject HammerHolder_5;
    public Animator HammerAnimator_5;

    [Space()]
    public GameObject[] HammerTaps_5;
    public GameObject[] Hand_5;

    [Space()]
    public GameObject[] StoneAboveParts_5;
    public GameObject[] StoneAroundParts_5;
    public GameObject[] GemParts_5;

    [Space()]
    public bool[] Status_5;

    [Space()]
    public ParticleSystem[] Particles_5;

    [Space()]
    public GameObject[] ObjsToDisable_5;

    [Space()]
    public int stonesRemoved = 0;

    public AudioClip[] hammerSounds;

    [Header("----------------- STEP 6 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep6;

    [Space()]
    public BasicDrag ToolStep6;

    [Space()]
    public BD_CameraFollow ToolStep6CameraFollow;

    [Space()]
    public GameObject Step6Col;

    [Space()]
    public GameObject Star_6;

    [Header("----------------- STEP 7 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep7;

    [Space()]
    public BasicDrag ToolStep7;
    public GameObject ToolStep7Detect;
    public GameObject ToolStep7HandAnim;

    [Space()]
    public Animator ToolStep7AnimationHolder;
    public GameObject ToolStep7AnimationTool;
    public SpriteRenderer Glue_7;

    [Header("----------------- STEP 8 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep8;

    [Space()]
    public BasicDrag ToolStep8;

    [Space()]
    public GameObject Target_8;

    [Space()]
    public GameObject Hand_8;

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

        // STEP 3
        Step3Col.SetActive(false);

        MixE.SetActive(false);

        ToolStep3CameraFollow.enabled = false;

        // STEP 4
        CleanSR_4.DOKill();
        CleanSR_4.DOFade(0, .1f);

        Step4Col.SetActive(false);

        ToolStep4CameraFollow.enabled = false;

        // STEP 6
        Step6Col.SetActive(false);

        ToolStep6CameraFollow.enabled = false;

        levelNo = SaveSystem.Instance.DataFields.levelToPlay - 1;
        partNo = SaveSystem.Instance.DataFields.partToPlay - 1;

        stepsDone = SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone;

        // resuming mid-level: the icon is positioned by SetProgressIconIndex below,
        // so the first StartStepN must skip its own advance
        skipIconAdvance = stepsDone > 0;

        switch (stepsDone)
        {
            // STARTING STEP 1
            case 0:
                // STEP START EVENT
                try
                {
                    Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                        + "_" + levelName + "_Step1_Start");
                }
                catch { }

                DOVirtual.DelayedCall(1f, () =>
                {
                    StartStep1();
                });
                break;

            // STARTING STEP 2
            case 1:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep1();

                DOVirtual.DelayedCall(1f, () =>
                {
                    StartStep2();
                });
                break;

            // STARTING STEP 3
            case 2:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep2();

                DOVirtual.DelayedCall(1f, () =>
                {
                    StartStep3();
                });
                break;

            // STARTING STEP 4
            case 3:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep3();

                DOVirtual.DelayedCall(1f, () =>
                {
                    StartStep4();
                });
                break;

            // STARTING STEP 5
            case 4:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep4();

                DOVirtual.DelayedCall(1f, () =>
                {
                    StartStep5();
                });
                break;

            // STARTING STEP 6
            case 5:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep5();

                DOVirtual.DelayedCall(1f, () =>
                {
                    StartStep6();
                });
                break;

            // STARTING STEP 7
            case 6:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep6();

                DOVirtual.DelayedCall(1f, () =>
                {
                    StartStep7();
                });
                break;

            // STARTING STEP 8
            case 7:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep7();

                DOVirtual.DelayedCall(1f, () =>
                {
                    StartStep8();
                });
                break;
        }
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

    #endregion

    #region STEP 1

    bool isStep1Done;

    void StartStep1()
    {
        CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);

        ToolStep1.transform.DOKill();
        ToolStep1.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep1.gameObject, true);

            ToolStep1CameraFollow.enabled = true;

            Step1Col.SetActive(true);
        });
    }

    public void Step1Done()
    {
        if (isStep1Done)
            return;

        isStep1Done = true;

        Step1Col.SetActive(false);

        ToolStep1CameraFollow.enabled = false;

        ToolInputToggle(ToolStep1.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);

        ToolStep1.transform.DOKill();
        ToolStep1.transform.DOLocalMoveX(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep1.gameObject.SetActive(false);
        });

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 1;

        Invoke(nameof(StartStep2), 1f);

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step1_Comp");
        }
        catch { }
    }

    void ForceCompleteStep1()
    {
        DustSR_1.SetActive(false);
    }

    #endregion

    #region STEP 2

    bool isStep2Done;

    void StartStep2()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOLocalMoveX(0.4f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep2.gameObject, true);

            ToolStep2CameraFollow.enabled = true;
        });
    }

    public void Step2Done()
    {
        if (isStep2Done)
            return;

        isStep2Done = true;

        ToolStep2CameraFollow.enabled = false;

        ToolInputToggle(ToolStep2.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOLocalMoveX(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep2.gameObject.SetActive(false);
        });

        DOVirtual.DelayedCall(1f, () =>
        {
            for (int i = 0; i < SRsToFadeOut_2.Length; i++)
            {
                SRsToFadeOut_2[i].DOKill();
                SRsToFadeOut_2[i].DOFade(0, 2f);
            }

            SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 2;
        });

        Invoke(nameof(StartStep3), 1f);

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

        SpraySR_2.material = GameManager.instance.DefaultMat;

        for (int i = 0; i < SRsToFadeOut_2.Length; i++)
        {
            SRsToFadeOut_2[i].gameObject.SetActive(false);
        }
    }

    #endregion

    #region STEP 3

    bool isStep3Done;

    void StartStep3()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep3.gameObject, true);

            ToolStep3CameraFollow.enabled = true;

            Step3Col.SetActive(true);
        });
    }

    public void Step3Done()
    {
        if (isStep3Done)
            return;

        isStep3Done = true;

        Step3Col.SetActive(false);

        ToolStep3CameraFollow.enabled = false;

        ToolInputToggle(ToolStep3.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveX(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep3.gameObject.SetActive(false);
        });

        DOVirtual.DelayedCall(1f, () =>
        {
            Mix.SetActive(false);
            MixE.SetActive(true);

            SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 3;
        });

        Invoke(nameof(StartStep4), 1f);

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step3_Comp");
        }
        catch { }
    }

    void ForceCompleteStep3()
    {
        ForceCompleteStep2();

        Mix.SetActive(false);

        MixE.SetActive(true);
    }

    #endregion

    #region STEP 4

    bool isStep4Done;

    void StartStep4()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);

        ToolStep4.transform.DOKill();
        ToolStep4.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep4.gameObject, true);

            ToolStep4CameraFollow.enabled = true;

            Step4Col.SetActive(true);
        });

        CleanSR_4.gameObject.SetActive(true);
        CleanSR_4.DOKill();
        CleanSR_4.DOFade(1, 1f);

        for (int i = 0; i < SRsToFadeOut_4.Length; i++)
        {
            SRsToFadeOut_4[i].DOKill();
            SRsToFadeOut_4[i].DOFade(0, 1.5f);
        }
    }

    public void Step4Done()
    {
        if (isStep4Done)
            return;

        isStep4Done = true;

        Step4Col.SetActive(false);

        ToolStep4CameraFollow.enabled = false;

        ToolInputToggle(ToolStep4.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);

        ToolStep4.transform.DOKill();
        ToolStep4.transform.DOLocalMoveX(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep4.gameObject.SetActive(false);
        });

        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.FadeAnim(1f, 1f);

            DOVirtual.DelayedCall(1.1f, () =>
            {
                CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV, .1f);

                View1.SetActive(false);

                View2.SetActive(true);

                SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 4;

                Invoke(nameof(StartStep5), 1f);
            });
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
        ForceCompleteStep3();

        View1.SetActive(false);

        View2.SetActive(true);

        Mix.SetActive(false);

        MixE.SetActive(false);

        CleanSR_4.gameObject.SetActive(true);
        CleanSR_4.DOKill();
        CleanSR_4.DOFade(1, .01f);

        for (int i = 0; i < SRsToFadeOut_4.Length; i++)
        {
            SRsToFadeOut_4[i].gameObject.SetActive(false);
        }
    }

    #endregion

    #region STEP 5

    bool isStep5Done;

    void StartStep5()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);

        HammerHolder_5.transform.DOKill();
        HammerHolder_5.transform.DOLocalMoveX(4f, .5f).SetDelay(1f);

        DOVirtual.DelayedCall(1.5f, () =>
        {
            HammerTaps_5[0].SetActive(true);
        });
    }

    public void HammerTapped_5(int index)
    {
        if (isStep5Done)
            return;

        if (Status_5[index])
            return;

        Status_5[index] = true;

        if (index == 0)
        {
            Hand_5[index].SetActive(false);

            HammerAnimator_5.enabled = true;
            HammerAnimator_5.Play("Hammer", 0, 0f);

            DOVirtual.DelayedCall(.25f, () =>
            {
                Particles_5[index].Play();

                for (int i = 0; i < StoneAboveParts_5.Length; i++)
                {
                    Transform part = StoneAboveParts_5[i].transform;
                    SpriteRenderer partSR = StoneAboveParts_5[i].GetComponent<SpriteRenderer>();

                    // all pieces sit at localPosition zero (shared ring-centre pivot), so outward direction comes from sprite bounds
                    Vector3 dir = part.parent.InverseTransformPoint(partSR.bounds.center).normalized;

                    float delay = Random.Range(0f, 0.1f);

                    part.DOKill();
                    partSR.DOKill();

                    part.DOLocalMove(part.localPosition + dir * Random.Range(.5f, .65f), 0.25f).SetEase(Ease.OutQuad).SetDelay(delay);

                    GameObject partGO = StoneAboveParts_5[i];

                    partSR.DOFade(0f, 0.5f).SetDelay(delay + Random.Range(0.7f, 0.9f)).OnComplete(() =>
                    {
                        partGO.SetActive(false);
                    });
                }
            });
        }

        else if (index == 1)
        {
            Hand_5[index].SetActive(false);

            HammerAnimator_5.enabled = true;
            HammerAnimator_5.Play("Hammer", 0, 0f);

            DOVirtual.DelayedCall(.25f, () =>
            {
                Particles_5[index].Play();

                for (int i = 0; i < StoneAroundParts_5.Length; i++)
                {
                    Transform part = StoneAroundParts_5[i].transform;
                    SpriteRenderer partSR = StoneAroundParts_5[i].GetComponent<SpriteRenderer>();

                    // all pieces sit at localPosition zero (shared ring-centre pivot), so outward direction comes from sprite bounds
                    Vector3 dir = part.parent.InverseTransformPoint(partSR.bounds.center).normalized;

                    float delay = Random.Range(0f, 0.2f);

                    part.DOKill();
                    partSR.DOKill();

                    part.DOLocalMove(part.localPosition + dir * Random.Range(.2f, 2f), 0.25f).SetEase(Ease.OutQuad).SetDelay(delay);

                    //part.DOLocalMoveX(part.localPosition.x + dir.x * Random.Range(1f, 2f), Random.Range(0.9f, 1.3f)).SetEase(Ease.Linear).SetDelay(delay + 0.25f);

                    //part.DOLocalMoveY(part.localPosition.y - Random.Range(10f, 20f), Random.Range(0.9f, 1.3f)).SetEase(Ease.InQuad).SetDelay(delay + 0.25f);

                    GameObject partGO = StoneAroundParts_5[i];

                    partSR.DOFade(0f, 0.5f).SetDelay(delay + Random.Range(0.7f, 0.9f)).OnComplete(() =>
                    {
                        partGO.SetActive(false);
                    });
                }

            });
        }

        else if (index == 2)
        {
            Hand_5[index].SetActive(false);

            HammerAnimator_5.enabled = true;
            HammerAnimator_5.Play("Hammer", 0, 0f);

            DOVirtual.DelayedCall(.25f, () =>
            {
                Particles_5[index].Play();

                for (int i = 0; i < GemParts_5.Length; i++)
                {
                    Transform part = GemParts_5[i].transform;
                    SpriteRenderer partSR = GemParts_5[i].GetComponent<SpriteRenderer>();

                    // all pieces sit at localPosition zero (shared ring-centre pivot), so outward direction comes from sprite bounds
                    Vector3 dir = part.parent.InverseTransformPoint(partSR.bounds.center).normalized;

                    float delay = Random.Range(0f, 0.1f);

                    part.DOKill();
                    partSR.DOKill();

                    part.DOLocalMove(part.localPosition + dir * Random.Range(.75f, 1f), 0.25f).SetEase(Ease.OutQuad).SetDelay(delay);

                    //part.DOLocalMoveX(part.localPosition.x + dir.x * Random.Range(1f, 2f), Random.Range(0.9f, 1.3f)).SetEase(Ease.Linear).SetDelay(delay + 0.1f);

                    //part.DOLocalMoveY(part.localPosition.y - Random.Range(3f, 6f), Random.Range(0.9f, 1.3f)).SetEase(Ease.InQuad).SetDelay(delay + 0.1f);

                    GameObject partGO = GemParts_5[i];

                    partSR.DOFade(0f, 0.5f).SetDelay(delay + Random.Range(0.7f, 0.9f)).OnComplete(() =>
                    {
                        partGO.SetActive(false);
                    });
                }
            });
        }

        DOVirtual.DelayedCall(2f, () =>
        {
            if (index < (HammerTaps_5.Length - 1))
            {
                HammerTaps_5[index].SetActive(false);

                HammerTaps_5[index + 1].SetActive(true);
            }

            stonesRemoved++;

            UI_Manager.instance.SetProgressBar((float)stonesRemoved / (float)HammerTaps_5.Length);

            if (stonesRemoved >= HammerTaps_5.Length)
            {
                isStep5Done = true;

                Step5Done();
            }
        });

        DOVirtual.DelayedCall(.25f, () =>
        {
            CameraController.Instance.Camera_Shake();
        });
    }

    public void Step5Done()
    {
        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 5;

        HammerHolder_5.transform.DOKill();
        HammerHolder_5.transform.DOLocalMoveX(30f, .5f).SetDelay(1f);

        Invoke(nameof(StartStep6), 1f);

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step5_Comp");
        }
        catch { }
    }

    public void PlayHammerSound(int index)
    {
        if (index < 0 || index >= hammerSounds.Length)
            return;

        AudioController.instance.PlayAnySfx( 1,hammerSounds[index],.1f);
    }

    void ForceCompleteStep5()
    {
        ForceCompleteStep4();

        for (int i = 0; i < ObjsToDisable_5.Length; i++)
        {
            ObjsToDisable_5[i].gameObject.SetActive(false);
        }
    }

    #endregion

    #region STEP 6

    bool isStep6Done;

    void StartStep6()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV);

        ToolStep6.transform.DOKill();
        ToolStep6.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep6.gameObject, true);

            ToolStep6CameraFollow.enabled = true;

            Step6Col.SetActive(true);
        });
    }

    public void Step6Done()
    {
        if (isStep6Done)
            return;

        isStep6Done = true;

        Step6Col.SetActive(false);

        ToolStep6CameraFollow.enabled = false;

        ToolInputToggle(ToolStep6.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV);

        ToolStep6.transform.DOKill();
        ToolStep6.transform.DOLocalMoveX(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep6.gameObject.SetActive(false);
        });

        Star_6.SetActive(true);

        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.FadeAnim(1f, 1f);

            DOVirtual.DelayedCall(1.1f, () =>
            {
                CameraController.Instance.MoveCamera(ZoomStep7.CameraPos, ZoomStep7.CameraFOV, .1f);

                View2.SetActive(false);

                View1.SetActive(true);

                SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 6;

                Invoke(nameof(StartStep7), 1f);
            });
        });

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step6_Comp");
        }
        catch { }
    }

    void ForceCompleteStep6()
    {
        ForceCompleteStep5();

        View2.SetActive(false);

        View1.SetActive(true);
    }

    #endregion

    #region STEP 7

    bool isStep7Done;

    void StartStep7()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep7.CameraPos, ZoomStep7.CameraFOV);

        ToolStep7.transform.DOKill();
        ToolStep7.transform.DOLocalMoveX(-0.4f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep7.gameObject, true);

            ToolStep7Detect.SetActive(true);

            ToolStep7HandAnim.SetActive(true);

            ToolStep7.OnMouseDownEvent += () => ToolStep7HandAnim.SetActive(false);
        });
    }

    public void Step7Done()
    {
        if (isStep7Done)
            return;

        isStep7Done = true;

        UI_Manager.instance.SetProgressBar(1f, 1.5f);

        DOVirtual.DelayedCall(1.2f, () =>
        {
            ToolStep7Detect.SetActive(false);

            ToolStep7AnimationHolder.gameObject.SetActive(true);
            ToolStep7AnimationHolder.enabled = false;

            Glue_7.maskInteraction = SpriteMaskInteraction.None;

            ToolStep7AnimationTool.transform.DOKill();
            ToolStep7AnimationTool.transform.DOLocalMoveX(-10f, 1f).SetDelay(.25f).OnComplete(() =>
            {
                ToolStep7AnimationTool.gameObject.SetActive(false);
            });

            CameraController.Instance.MoveCamera(ZoomStep7.CameraPos, ZoomStep7.CameraFOV);

            SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 7;

            Invoke(nameof(StartStep8), 1f);

            try
            {
                Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                    + "_" + levelName + "_Step7_Comp");
            }
            catch { }
        });
    }

    void ForceCompleteStep7()
    {
        ForceCompleteStep6();

        ToolStep7AnimationHolder.gameObject.SetActive(true);
        ToolStep7AnimationHolder.enabled = false;

        ToolStep7AnimationTool.gameObject.SetActive(false);
        Glue_7.maskInteraction = SpriteMaskInteraction.None;
    }

    #endregion

    #region STEP 8

    bool isStep8Done;

    void StartStep8()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep8.CameraPos, ZoomStep8.CameraFOV);

        ToolStep8.transform.DOKill();
        ToolStep8.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep8.gameObject, true);

            ToolStep8.OnMouseDownEvent += () => Hand_8.SetActive(false);

            Hand_8.SetActive(true);

            Target_8.SetActive(true);
        });
    }

    public void Step8Done()
    {
        if (isStep8Done)
            return;

        isStep8Done = true;

        Hand_8.SetActive(false);

        Target_8.SetActive(false);

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV);

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 0;

        UI_Manager.instance.SetProgressBar(1f);

        Invoke(nameof(LevelComplete), 2f);

        try
        {
            Statics.GA_CustomStringEvent("Lvl" + GameManager.instance.currentLevelNo
                + "_" + levelName + "_Step8_Comp");
        }
        catch { }
    }

    #endregion
}