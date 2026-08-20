using UnityEngine;
using DG.Tweening;
using System.Collections;
using System.Collections.Generic;

public class Lvl3_Stove : LevelData
{
    [Space()]
    [Header("----------------------------------------------------------------------------------")]
    [Space()]
    public ZoomPos MainZoom;

    [Header("----------------- STEP 1 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep1;

    [Space()]
    public BasicDrag[] ToolStep1;

    [Space()]
    public GameObject handIndicationStep1;
    public List<OutlinePulse> OutlinePulseStep1;

    [Header("----------------- STEP 2 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep2;

    [Space()]
    public BasicDrag ToolStep2;

    [Space()]
    public BD_CameraFollow step2CameraFollow;

    [Space()]
    public GameObject[] Layers_2;

    [Header("----------------- STEP 3 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep3;

    [Space()]
    public BasicDrag ToolStep3;

    [Space()]
    public BD_CameraFollow step3CameraFollow;

    [Space()]
    public GameObject[] Layers_3;

    [Header("----------------- STEP4 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep4;

    [Space()]
    public BasicDrag ToolStep4;

    [Space()]
    public GameObject handIndicationStep4;
    public OutlinePulse OutlinePulseStep4;

    [Header("----------------- STEP 5 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep5;

    [Space()]
    public BasicDrag ToolStep5;

    [Space()]
    public BD_CameraFollow step5CameraFollow;

    [Space()]
    public GameObject[] Layers_5;

    [Header("----------------- STEP 6 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep6;

    [Space()]
    public GameObject detectStep6;

    [Space()]
    public BasicDrag[] ToolStep6;
    public GameObject[] Tool6Container;
    public GameObject Indication_6;
    public GameObject Flames;

    IEnumerator Start()
    {
        base.LevelStart();

        UI_Manager.instance.InitializeTools(ToolIcons);

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV, .01f);

        yield return new WaitForSeconds(0.1f);

        // STEP 2
        step2CameraFollow.enabled = false;

        // STEP 3
        step3CameraFollow.enabled = false;

        // STEP 5
        step5CameraFollow.enabled = false;

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
                DOVirtual.DelayedCall(.5f, () =>
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

    bool isStep1Done = false;

    void StartStep1()
    {
        CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);

        DOVirtual.DelayedCall(1f, () =>
        {
            for (int i = 0; i < ToolStep1.Length; i++)
            {
                int index = i;

                ToolInputToggle(ToolStep1[index].gameObject, true);

                OutlinePulseStep1[index].EnableAnim();

                handIndicationStep1.SetActive(true);

                ToolStep1[index].OnMouseDownEvent += () =>
                {
                    OutlinePulseStep1[index].DisableAnim();

                    if (handIndicationStep1.activeInHierarchy)
                        handIndicationStep1.SetActive(false);
                };

                ToolStep1[index].OnMouseUpEvent += () =>
                {
                    if (SubStepStep1Done(index))
                    {
                        Step1Done(index);
                    }

                    ToolStep1[index].thisSR.sortingOrder += 20;
                };
            }
        });
    }

    public bool[] dragStep1Status = new bool[2];

    int cnt1 = 0;

    public bool SubStepStep1Done(int index)
    {
        if (dragStep1Status[index])
            return false;

        dragStep1Status[index] = true;

        cnt1++;

        UI_Manager.instance.SetProgressBar((float)cnt1 / 2f);

        if (cnt1 >= dragStep1Status.Length)
        {
            return true;
        }

        else
        {
            LevelCompleteStep1Process(index);
        }

        return false;
    }

    void LevelCompleteStep1Process(int index)
    {
        ToolInputToggle(ToolStep1[index].gameObject, false);

        ToolStep1[index].transform.DOKill();
        ToolStep1[index].transform.DOMoveX(8, .5f).SetDelay(.1f).SetEase(Ease.InBack);
    }

    void Step1Done(int index)
    {
        if (isStep1Done)
            return;

        isStep1Done = true;

        LevelCompleteStep1Process(index);

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 1;

        Invoke(nameof(StartStep2), 1.2f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step1_Comp");
        }
        catch { }
    }

    void ForceCompleteStep1()
    {
        for (int i = 0; i < ToolStep1.Length; i++)
        {
            ToolStep1[i].gameObject.SetActive(false);
        }
    }

    #endregion

    #region STEP 2

    bool isStep2Done = false;

    void StartStep2()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOLocalMoveX(0, .5f).SetDelay(.5f).OnComplete(() =>
        {
            step2CameraFollow.enabled = true;

            ToolInputToggle(ToolStep2.gameObject, true);
        });
    }

    public void Step2Done()
    {
        if (isStep2Done)
            return;

        isStep2Done = true;

        ToolInputToggle(ToolStep2.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        UI_Manager.instance.SetProgressBar(1);

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOMoveX(8, .5f).SetDelay(.1f).SetEase(Ease.InBack).OnComplete(() =>
        {
            ToolStep2.gameObject.SetActive(false);
        });

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 2;

        Invoke(nameof(StartStep3), 1.75f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step2_Comp");
        }
        catch { }
    }

    void ForceCompleteStep2()
    {
        ForceCompleteStep1();

        for (int i = 0; i < Layers_2.Length; i++)
        {
            Layers_2[i].gameObject.SetActive(false);
        }
    }

    #endregion

    #region STEP 3

    bool isStep3Done = false;

    void StartStep3()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveX(0, .5f).SetDelay(.5f).OnComplete(() =>
        {
            step3CameraFollow.enabled = true;

            ToolInputToggle(ToolStep3.gameObject, true);
        });
    }

    public void Step3Done()
    {
        if (isStep3Done)
            return;

        isStep3Done = true;

        UI_Manager.instance.SetProgressBar(1);

        ToolInputToggle(ToolStep3.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOMoveX(8, .5f).SetDelay(.1f).SetEase(Ease.InBack).OnComplete(() =>
        {
            ToolStep3.gameObject.SetActive(false);
        });

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 3;

        Invoke(nameof(StartStep4), 1.75f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step3_Comp");
        }
        catch { }
    }

    void ForceCompleteStep3()
    {
        ForceCompleteStep2();

        for (int i = 0; i < Layers_3.Length; i++)
        {
            Layers_3[i].gameObject.SetActive(false);
        }
    }

    #endregion

    #region STEP 4

    bool isStep4Done = false;

    void StartStep4()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);

        DOVirtual.DelayedCall(1f, () =>
        {

            ToolInputToggle(ToolStep4.gameObject, true);

            OutlinePulseStep4.EnableAnim();

            handIndicationStep4.SetActive(true);

            ToolStep4.OnMouseDownEvent += () =>
            {
                OutlinePulseStep4.DisableAnim();

                if (handIndicationStep4.activeInHierarchy)
                    handIndicationStep4.SetActive(false);
            };

            ToolStep4.OnMouseUpEvent += () =>
            {
                Step4Done();

                ToolStep4.thisSR.sortingOrder += 20;
            };

        });
    }

    public void Step4Done()
    {
        if (isStep4Done)
            return;

        isStep4Done = true;

        UI_Manager.instance.SetProgressBar(1);

        ToolInputToggle(ToolStep4.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);

        ToolStep4.transform.DOKill();
        ToolStep4.transform.DOMoveX(8, .5f).SetDelay(.5f).SetEase(Ease.InBack).OnComplete(() =>
        {
            ToolStep4.gameObject.SetActive(false);
        });

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 4;

        Invoke(nameof(StartStep5), 1.75f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step4_Comp");
        }
        catch { }
    }

    void ForceCompleteStep4()
    {
        ForceCompleteStep3();

        ToolStep4.gameObject.SetActive(false);
    }

    #endregion

    #region STEP 5

    bool isStep5Done = false;

    void StartStep5()
    {
        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);

        ToolStep5.transform.DOKill();
        ToolStep5.transform.DOLocalMoveX(0, .5f).SetDelay(.5f).OnComplete(() =>
        {
            step5CameraFollow.enabled = true;

            ToolInputToggle(ToolStep5.gameObject, true);
        });
    }

    public void Step5Done()
    {
        if (isStep5Done)
            return;

        isStep5Done = true;

        UI_Manager.instance.SetProgressBar(1);

        ToolInputToggle(ToolStep5.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);

        ToolStep5.transform.DOKill();
        ToolStep5.transform.DOMoveX(8, .5f).SetDelay(.1f).SetEase(Ease.InBack).OnComplete(() =>
        {
            ToolStep5.gameObject.SetActive(false);
        });

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 5;

        Invoke(nameof(StartStep6), 1.2f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step5_Comp");
        }
        catch { }
    }

    void ForceCompleteStep5()
    {
        ForceCompleteStep4();

        for (int i = 0; i < Layers_5.Length; i++)
        {
            Layers_5[i].gameObject.SetActive(false);
        }
    }

    #endregion

    #region STEP 6

    bool isStep6Done = false;

    void StartStep6()
    {
        AdvanceProgressIcon();

        detectStep6.SetActive(true);

        CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV);

        DOVirtual.DelayedCall(1.5f, () =>
        {
            Indication_6.SetActive(true);
        });
        for (int i = 0; i < ToolStep6.Length; i++)
        {
            ToolStep6[i].gameObject.SetActive(true);

            ToolStep6[i].transform.DOKill();
            ToolStep6[i].transform.DOLocalMoveX(-0.03f, .5f).SetDelay(1f).OnComplete(() =>
            {
                Tool6Container[i].SetActive(true);

                ToolInputToggle(ToolStep6[0].gameObject, true);

                ToolStep6[0].OnMouseUpEvent += () =>
                {
                    if (ToolStep6[0].dontResetItIsInCollider)
                        return;

                    //  Indication_6.SetActive(true);
                };
            });
        }

        ToolStep6[0].OnMouseDownEvent += () => Indication_6.SetActive(false);
        ToolStep6[1].OnMouseDownEvent += () => Indication_6.SetActive(false);
        ToolStep6[2].OnMouseDownEvent += () => Indication_6.SetActive(false);
    }

    int count = 0;

    public void Step6SubStepDone(int index)
    {
        count++;

        UI_Manager.instance.SetProgressBar((float)count / 3f);

        if (count == ToolStep6.Length)
        {
            Step6Done();
        }

        else
        {
            ToolInputToggle(ToolStep6[index].gameObject, false);

            ToolStep6[index].transform.DOKill();

            if (index + 1 < ToolStep6.Length)
            {
                ToolInputToggle(ToolStep6[index + 1].gameObject, true);
            }
        }
    }

    public void Step6Done()
    {
        if (isStep6Done)
            return;

        isStep6Done = true;

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV);

        UI_Manager.instance.SetProgressBar(1f, .5f);

        detectStep6.SetActive(false);

        DOVirtual.DelayedCall(1f, () =>
        {
            Flames.SetActive(true);

            Flames.GetComponent<SpriteRenderer>().DOFade(1f, 1f);
        });

        DOVirtual.DelayedCall(2f, () =>
        {
            SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].isCompleted = true;

            SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 0;

            Invoke(nameof(LoadManicureLevelAgian), 1f);

            try
            {
                Statics.GA_CustomStringEvent(levelName + "_Step6_Comp");
            }
            catch { }
        });
    }

    void LoadManicureLevelAgian()
    {
        SaveSystem.Instance.DataFields.levelToPlay = 3;
        SaveSystem.Instance.DataFields.partToPlay = 2;

        LoadingManager.instance.ShowFadeAnim(0.5f, 1f);

        DOVirtual.DelayedCall(1f, () =>
        {
            UnityEngine.SceneManagement.SceneManager.LoadScene(
                UnityEngine.SceneManagement.SceneManager.GetActiveScene().buildIndex);
        });
    }

    #endregion
}
