using UnityEngine;
using DG.Tweening;
using System.Collections;
using System.Collections.Generic;

public class Lvl3_Stove_Playable : LevelData
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

    IEnumerator Start()
    {
        // PLAYABLE: cover the ForceComplete step-skip so nothing visibly pops/snaps.
        PlayableFadeCover.Cover();

        base.LevelStart();

        UI_Manager.instance.InitializeTools(ToolIcons);

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV, .01f);

        yield return new WaitForSeconds(0.1f);

        // STEP 2
        step2CameraFollow.enabled = false;

        // STEP 3
        step3CameraFollow.enabled = false;

        // SETUP

        

        // PLAYABLE: no save resume — same ForceComplete + StartStep as original switch.
        ForceCompleteStep2();
        StartStep3();
        PlayableFadeCover.Reveal();
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

    #endregion

    #region STEP 1

    bool isStep1Done = false;

    void StartStep1()
    {
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

        { PlayableFadeCover.Cover(); ForceCompleteStep2(); Invoke(nameof(StartStep3), 1.2f); PlayableFadeCover.Reveal(); }

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

        UI_Manager.instance.SetProgressBar(1);

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOMoveX(8, .5f).SetDelay(.1f).SetEase(Ease.InBack).OnComplete(() =>
        {
            ToolStep2.gameObject.SetActive(false);
        });

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

        Invoke(nameof(LevelComplete), 1.75f);

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

    
}
