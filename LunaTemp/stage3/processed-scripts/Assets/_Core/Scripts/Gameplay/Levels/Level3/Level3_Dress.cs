using UnityEngine;
using DG.Tweening;
using System.Collections;

public class Level3_Dress : LevelData
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
    public GameObject ToolStep1Holder;
    public BasicDrag ToolStep1;

    [Space()]
    public GameObject Target_1;
    public GameObject Hand_1;

    [Space()]
    public GameObject DRESS;

    [Header("----------------- STEP 2 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep2;

    [Space()]
    public BasicDrag ToolStep2;

    [Space()]
    public BD_CameraFollow ToolStep2CameraFollow;

    [Space()]
    public GameObject SpiderHolder_2;

    [Space()]
    public OutlinePulse[] AllSpiders_2;

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
    public GameObject Web_3;

    [Header("----------------- STEP 4 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep4;

    [Space()]
    public BasicDrag ToolStep4;

    [Space()]
    public BD_CameraFollow ToolStep4CameraFollow;

    [Space()]
    public GameObject[] ObjsEnable_4;
    public GameObject[] ObjsDisable_4;

    [Header("----------------- STEP 5 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep5;

    [Space()]
    public BasicDrag ToolStep5;

    [Space()]
    public BD_CameraFollow ToolStep5CameraFollow;

    [Space()]
    public GameObject[] ObjsEnable_5;
    public GameObject[] ObjsDisable_5;

    [Header("----------------- STEP 6 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep6;

    [Space()]
    public BasicDrag ToolStep6;

    [Space()]
    public BD_CameraFollow ToolStep6CameraFollow;

    [Header("----------------- STEP 7 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep7;

    [Space()]
    public BasicDrag ToolStep7;

    [Space()]
    public BD_CameraFollow ToolStep7CameraFollow;

    [Space()]
    public GameObject Indication_7;

    [Space()]
    public SpriteRenderer FillSr_7;

    [Header("----------------- STEP 8 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep8;

    [Space()]
    public BasicDrag ToolStep8;

    [Space()]
    public BD_CameraFollow ToolStep8CameraFollow;

    [Space()]
    public GameObject Step8Col;

    [Space()]
    public GameObject Star_8;

    [Space()]
    public GameObject BrokenGemOnDress_8;

    [Space()]
    public SpriteRenderer FixedSr_8;

    [Space()]
    public GameObject StainFadedSR_8;

    [Header("----------------- STEP 9 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep9;

    [Space()]
    public BasicDrag ToolStep9;

    [Space()]
    public Collider2D TargetCol_9;

    [Space()]
    public GameObject Hand_9;

    [Space()]
    public GameObject PressedLayer_9;

    [Space()]
    public GameObject[] Diamonds_9;

    [Header("----------------- STEP 10 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep10;

    [Space()]
    public BasicDrag ToolStep10;

    [Space()]
    public BD_CameraFollow ToolStep10CameraFollow;

    [Space()]
    public GameObject Step10Col;

    [Space()]
    public GameObject SteamerBottom;

    IEnumerator Start()
    {
        base.LevelStart();

        UI_Manager.instance.InitializeTools(ToolIcons);

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV, .01f);

        yield return new WaitForSeconds(0.1f);

        // STEP 2
        ToolStep2CameraFollow.enabled = false;

        // STEP 3
        Step3Col.SetActive(false);

        ToolStep3CameraFollow.enabled = false;

        // STEP 4
        ToolStep4CameraFollow.enabled = false;

        for (int i = 0; i < ObjsEnable_4.Length; i++)
        {
            ObjsEnable_4[i].SetActive(false);
        }

        // STEP 5
        ToolStep5CameraFollow.enabled = false;

        for (int i = 0; i < ObjsEnable_5.Length; i++)
        {
            ObjsEnable_5[i].SetActive(false);
        }

        // STEP 6
        ToolStep6CameraFollow.enabled = false;

        // STEP 7
        ToolStep7CameraFollow.enabled = false;

        // STEP 8
        Step8Col.SetActive(false);

        ToolStep8CameraFollow.enabled = false;

        // Step 9 
        PressedLayer_9.SetActive(false);

        // STEP 10
        Step10Col.SetActive(false);

        ToolStep10CameraFollow.enabled = false;

        // SETUP
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

            // STARTING STEP 9
            case 8:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep8();

                DOVirtual.DelayedCall(1f, () =>
                {
                    StartStep9();
                });
                break;

            // STARTING STEP 10
            case 9:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep9();

                DOVirtual.DelayedCall(1f, () =>
                {
                    StartStep10();
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

    #region Step 1 

    bool isStep1Done = false;

    void StartStep1()
    {
        CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);

        ToolStep1Holder.transform.DOKill();
        ToolStep1Holder.transform.DOLocalMoveX(-0.6f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep1.gameObject, true);

            ToolStep1.OnMouseDownEvent += () => Hand_1.SetActive(false);

            Hand_1.SetActive(true);

            Target_1.SetActive(true);
        });
    }

    public void Step1Done()
    {
        if (isStep1Done)
            return;

        isStep1Done = true;

        DRESS.SetActive(true);

        Hand_1.SetActive(false);

        UI_Manager.instance.SetProgressBar(1f);

        ToolStep1Holder.transform.DOKill();
        ToolStep1Holder.transform.DOLocalMoveX(-8f, .5f).SetEase(Ease.InBack).OnComplete(() =>
        {
            ToolStep1Holder.gameObject.SetActive(false);
        });

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 1;

        Invoke(nameof(StartStep2), 1f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step1_Comp");
        }
        catch { }
    }

    void ForceCompleteStep1()
    {
        Target_1.SetActive(false);

        DRESS.SetActive(true);
    }

    #endregion

    #region Step 2

    bool isStep2Done = false;

    void StartStep2()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOLocalMoveX(0f, .5f).SetDelay(.5f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep2.gameObject, true);

            ToolStep2CameraFollow.enabled = true;

            for (int i = 0; i < AllSpiders_2.Length; i++)
            {
                AllSpiders_2[i].EnableAnim();
            }
        });

    }

    public void SpidersKilled_2()
    {
        if (ToolStep2.isDragging)
            ToolStep2.OnMouseUpEvent += Step2Done;

        else
            Step2Done();
    }

    void Step2Done()
    {
        if (isStep2Done)
            return;

        isStep2Done = true;

        ToolStep2CameraFollow.enabled = false;

        ToolInputToggle(ToolStep2.gameObject, false);

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOMoveX(-8f, .5f).OnComplete(() =>
        {
            ToolStep2.gameObject.SetActive(false);
        });

        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 2;

        Invoke(nameof(StartStep3), 1.2f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step2_Comp");
        }
        catch { }
    }

    void ForceCompleteStep2()
    {
        ForceCompleteStep1();

        SpiderHolder_2.SetActive(false);
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
        ToolStep3.transform.DOLocalMoveY(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep3.gameObject.SetActive(false);
        });

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 3;

        Invoke(nameof(StartStep4), 1.2f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step3_Comp");
        }
        catch { }
    }

    void ForceCompleteStep3()
    {
        ForceCompleteStep2();

        Web_3.SetActive(false);
    }

    #endregion

    #region STEP 4

    bool isStep4Done;

    void StartStep4()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);

        ToolStep4.transform.DOKill();
        ToolStep4.transform.DOLocalMoveX(0.3f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep4.gameObject, true);

            ToolStep4CameraFollow.enabled = true;
        });
    }

    public void Step4Done()
    {
        if (isStep4Done)
            return;

        isStep4Done = true;

        ToolStep4CameraFollow.enabled = false;

        ToolInputToggle(ToolStep4.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);

        ToolStep4.transform.DOKill();
        ToolStep4.transform.DOLocalMoveY(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep4.gameObject.SetActive(false);
        });

        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.FadeAnim(1f, 1f);

            DOVirtual.DelayedCall(1.1f, () =>
            {
                CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV, .1f);

                for (int i = 0; i < ObjsEnable_4.Length; i++)
                {
                    ObjsEnable_4[i].SetActive(true);
                }

                for (int i = 0; i < ObjsDisable_4.Length; i++)
                {
                    ObjsDisable_4[i].SetActive(false);
                }

                SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 4;

                Invoke(nameof(StartStep5), 1f);
            });
        });

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step4_Comp");
        }
        catch { }
    }

    void ForceCompleteStep4()
    {
        ForceCompleteStep3();

        for (int i = 0; i < ObjsEnable_4.Length; i++)
        {
            ObjsEnable_4[i].SetActive(true);
        }

        for (int i = 0; i < ObjsDisable_4.Length; i++)
        {
            ObjsDisable_4[i].SetActive(false);
        }
    }

    #endregion

    #region STEP 5

    bool isStep5Done;

    void StartStep5()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);

        ToolStep5.transform.DOKill();
        ToolStep5.transform.DOLocalMoveX(0.3f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep5.gameObject, true);

            ToolStep5CameraFollow.enabled = true;
        });
    }

    public void Step5Done()
    {
        if (isStep5Done)
            return;

        isStep5Done = true;

        ToolStep5CameraFollow.enabled = false;

        ToolInputToggle(ToolStep5.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);

        ToolStep5.transform.DOKill();
        ToolStep5.transform.DOLocalMoveY(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep5.gameObject.SetActive(false);
        });

        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.FadeAnim(1f, 1f);

            DOVirtual.DelayedCall(1.1f, () =>
            {
                CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV, .1f);

                for (int i = 0; i < ObjsEnable_5.Length; i++)
                {
                    ObjsEnable_5[i].SetActive(true);
                }

                for (int i = 0; i < ObjsDisable_5.Length; i++)
                {
                    ObjsDisable_5[i].SetActive(false);
                }

                SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 5;

                Invoke(nameof(StartStep6), 1f);
            });
        });

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step5_Comp");
        }
        catch { }
    }

    void ForceCompleteStep5()
    {
        ForceCompleteStep4();

        for (int i = 0; i < ObjsEnable_5.Length; i++)
        {
            ObjsEnable_5[i].SetActive(true);
        }

        for (int i = 0; i < ObjsDisable_5.Length; i++)
        {
            ObjsDisable_5[i].SetActive(false);
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
        });
    }

    public void Step6Done()
    {
        if (isStep6Done)
            return;

        isStep6Done = true;

        ToolStep6CameraFollow.enabled = false;

        ToolInputToggle(ToolStep6.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV);

        ToolStep6.transform.DOKill();
        ToolStep6.transform.DOLocalMoveY(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep6.gameObject.SetActive(false);
        });

        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.FadeAnim(1f, 1f);

            DOVirtual.DelayedCall(1.1f, () =>
            {
                CameraController.Instance.MoveCamera(ZoomStep7.CameraPos, ZoomStep7.CameraFOV, .1f);

                View1.SetActive(false);

                View2.SetActive(true);

                SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 6;

                Invoke(nameof(StartStep7), 1f);
            });
        });

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step6_Comp");
        }
        catch { }
    }

    void ForceCompleteStep6()
    {
        ForceCompleteStep5();

        StainFadedSR_8.SetActive(false);

        View1.SetActive(false);

        View2.SetActive(true);
    }

    #endregion

    #region STEP 7

    bool isStep7Done;

    void StartStep7()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep7.CameraPos, ZoomStep7.CameraFOV);

        ToolStep7.transform.DOKill();
        ToolStep7.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep7.gameObject, true);

            ToolStep7CameraFollow.enabled = true;

            Indication_7.SetActive(true);

            ToolStep7.GetComponent<BD_Progress>().SubCompleteEvent +=
            () =>
            Indication_7.SetActive(false);
        });
    }

    public void Step7Done()
    {
        if (isStep7Done)
            return;

        isStep7Done = true;

        Indication_7.SetActive(false);

        ToolStep7CameraFollow.enabled = false;

        ToolInputToggle(ToolStep7.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep7.CameraPos, ZoomStep7.CameraFOV);

        ToolStep7.transform.DOKill();
        ToolStep7.transform.DOLocalMoveX(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep7.gameObject.SetActive(false);
        });

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 7;

        Invoke(nameof(StartStep8), 1f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step7_Comp");
        }
        catch { }
    }

    void ForceCompleteStep7()
    {
        ForceCompleteStep6();

        FillSr_7.material = GameManager.instance.DefaultMat;
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

            ToolStep8CameraFollow.enabled = true;

            Step8Col.SetActive(true);
        });
    }

    public void Step8Done()
    {
        if (isStep8Done)
            return;

        isStep8Done = true;

        Step8Col.SetActive(false);

        ToolStep8CameraFollow.enabled = false;

        ToolInputToggle(ToolStep8.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep8.CameraPos, ZoomStep8.CameraFOV);

        ToolStep8.transform.DOKill();
        ToolStep8.transform.DOLocalMoveX(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep8.gameObject.SetActive(false);
        });

        Star_8.SetActive(true);

        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.FadeAnim(1f, 1f);

            DOVirtual.DelayedCall(1.1f, () =>
            {
                CameraController.Instance.MoveCamera(ZoomStep9.CameraPos, ZoomStep9.CameraFOV, .1f);

                BrokenGemOnDress_8.SetActive(false);

                View2.SetActive(false);

                View1.SetActive(true);

                SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 8;

                Invoke(nameof(StartStep9), 1f);
            });
        });

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step8_Comp");
        }
        catch { }
    }

    void ForceCompleteStep8()
    {
        ForceCompleteStep7();

        View2.SetActive(false);

        View1.SetActive(true);

        BrokenGemOnDress_8.SetActive(false);

        StainFadedSR_8.SetActive(false);

        Diamonds_9[0].SetActive(false);

        Diamonds_9[1].SetActive(false);
    }

    #endregion

    #region STEP 9

    bool isStep9Done;

    void StartStep9()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep9.CameraPos, ZoomStep9.CameraFOV);

        ToolStep9.transform.DOKill();
        ToolStep9.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep9.gameObject, true);

            ToolStep9.OnMouseDownEvent += () => Hand_9.SetActive(false);

            Hand_9.SetActive(true);

            TargetCol_9.enabled = true;
        });
    }

    public void Step9Done()
    {
        if (isStep9Done)
            return;

        isStep9Done = true;

        Hand_9.SetActive(false);

        TargetCol_9.enabled = false;

        PressedLayer_9.SetActive(true);

        UI_Manager.instance.SetProgressBar(1f);

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 9;

        Invoke(nameof(StartStep10), 1.2f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step9_Comp");
        }
        catch { }
    }

    void ForceCompleteStep9()
    {
        ForceCompleteStep8();

        StainFadedSR_8.SetActive(false);

        Diamonds_9[0].SetActive(false);

        Diamonds_9[1].SetActive(true);

        PressedLayer_9.SetActive(true);
    }

    #endregion

    #region Step 10

    bool isStep10Done;

    void StartStep10()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep10.CameraPos, ZoomStep10.CameraFOV);

        SteamerBottom.transform.DOKill();
        SteamerBottom.transform.DOLocalMoveX(0f, .5f).SetDelay(1f);

        ToolStep10.transform.DOKill();
        ToolStep10.transform.DOLocalMoveX(0f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep10.gameObject, true);

            ToolStep10CameraFollow.enabled = true;

            Step10Col.SetActive(true);
        });
    }

    public void Step10Done()
    {
        if (isStep10Done)
            return;

        isStep10Done = true;

        ToolStep10CameraFollow.enabled = false;

        ToolInputToggle(ToolStep10.gameObject, false);

        SteamerBottom.transform.DOKill();
        SteamerBottom.transform.DOLocalMoveX(-10f, .5f).SetDelay(1f);

        ToolStep10.transform.DOKill();
        ToolStep10.transform.DOLocalMoveX(-10f, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolStep10.gameObject.SetActive(false);
        });

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV);

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 0;

        Invoke(nameof(LevelComplete), 2f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step10_Comp");
        }
        catch { }
    }

    #endregion

}