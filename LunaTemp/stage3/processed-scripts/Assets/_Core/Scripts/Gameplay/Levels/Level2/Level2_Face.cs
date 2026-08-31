using System;
using UnityEngine;
using DG.Tweening;
using System.Collections;

public class Level2_Face : LevelData
{
    [Space()]
    [Header("----------------------------------------------------------------------------------")]
    [Space()]
    public ZoomPos MainZoom;

    [Space()]
    [Header("EYE")]
    public GameObject EyeParent;
    public SpriteRenderer[] EyeSRs;
    public Animator[] EyeAnims;

    [Space()]
    [Header("LENSE")]
    public Lvl2_LensFollow LensFollower;

    [Header("----------------- STEP 1 ----------------------")]
    [Space()]
   /* public ZoomPos ZoomStep1;

    [Space()]
    public BasicDrag ToolStep1;

    [Space()]
    public BD_CameraFollow ToolStep1CameraFollow;

    [Space()]
    public SpriteRenderer ToolStep1SR;

    [Space()]
    public GameObject Indication1;*/

    [Space()]
    public SpriteRenderer DirtySR_1;

    [Header("----------------- STEP 2 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep2;

    [Space()]
    public GameObject Tip_2;

    [Space()]
    public DraggableObject ToolStep2;

    [Space()]
    public GameObject[] ToolStep2Indications;

    [Space()]
    public GameObject[] DropsHolders_2;
    public SpriteRenderer[] Drops_2;

    [Header("----------------- STEP 3 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep3;

    [Space()]
    public GameObject Tip_3;

    [Space()]
    public BasicDrag ToolStep3;

    [Space()]
    public BD_CameraFollow ToolStep3CameraFollow;

    [Space()]
    public GameObject HandAnim3;

    [Space()]
    public SpriteRenderer Foam_3;

    [Space()]
    public GameObject[] ObjEnable_3;
    public GameObject[] ObjDisable_3;

    [Header("----------------- STEP 4 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep4;

    [Space()]
    public GameObject Tip_4;

    [Space()]
    public BasicDrag ToolStep4;

    [Space()]
    public BD_CameraFollow ToolStep4CameraFollow;

    [Space()]
    public SpriteRenderer FoamE_4;

    [Header("----------------- STEP 5 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep5;

    [Space()]
    public GameObject Tip_5;

    [Space()]
    public BasicDrag ToolStep5;

    [Space()]
    public BD_CameraFollow ToolStep5CameraFollow;

    [Space()]
    public InteractableBones[] Bones_5;

    [Space()]
    public SpriteRenderer Water_5;

    [Header("----------------- STEP 6 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep6;

    [Space()]
    public GameObject Tip_6;

    [Space()]
    public DraggableObject ToolStep6;

    [Space()]
    public BD_CameraFollow ToolStep6CameraFollow;

    [Space()]
    public GameObject[] ToolStep6Indications;

    [Space()]
    public GameObject[] CreamsHolders_6;
    public SpriteRenderer[] Creams_6;

    [Header("----------------- STEP 7 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep7;

    [Space()]
    public GameObject Tip_7;

    [Space()]
    public BasicDrag ToolStep7;

    [Space()]
    public BD_CameraFollow ToolStep7CameraFollow;

    [Space()]
    public GameObject HandAnim7;

    [Space()]
    public SpriteRenderer Dry_7;
    public SpriteRenderer Shine_7;
    public SpriteRenderer Lotion_7;

    IEnumerator Start()
    {
        base.LevelStart();

        UI_Manager.instance.InitializeTools(ToolIcons);

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV, .01f);

        yield return new WaitForSeconds(0.1f);

        // STEP 1
       // ToolStep1CameraFollow.enabled = false;

        // STEP 3
        ToolStep3CameraFollow.enabled = false;

        for (int i = 0; i < ObjEnable_3.Length; i++)
        {
            ObjEnable_3[i].SetActive(false);
        }

        // STEP 4
        ToolStep4CameraFollow.enabled = false;

        // STEP 5
        ToolStep5CameraFollow.enabled = false;

        // STEP 6
        ToolStep6CameraFollow.enabled = false;

        // STEP 7
        ToolStep7CameraFollow.enabled = false;

        yield return new WaitForSeconds(.5f);

        levelNo = SaveSystem.Instance.DataFields.levelToPlay - 1;
        partNo = SaveSystem.Instance.DataFields.partToPlay - 1;

        stepsDone = SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone;

        switch (stepsDone)
        {
            // STARTING STEP 1
           /* case 0:
                DOVirtual.DelayedCall(.5f, () =>
                {
                  //  StartStep1();
                });
                break;
*/
            // STARTING STEP 2
            case 0:
               // ForceCompleteStep1();
                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep2();
                });
                break;

            // STARTING STEP 3
            case 1:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);
                ForceCompleteStep2();
                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep3();
                });
                break;

            // STARTING STEP 4
            case 2:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);
                ForceCompleteStep3();
                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep4();
                });
                break;

            // STARTING STEP 5
            case 3:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);
                ForceCompleteStep4();
                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep5();
                });
                break;

            // STARTING STEP 6
            case 4:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);
                ForceCompleteStep5();
                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep6();
                });
                break;

            // STARTING STEP 7
            case 5:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);
                ForceCompleteStep6();
                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep7();
                });
                break;

        }

        // EYE SETUP
        ResetEyes();
        SetEyeBlink(0);
        SetEyeBlink(1);
        EnableEyeBlink();
    }

    #region EYE

    void ResetEyes()
    {
        for (int i = 0; i < EyeSRs.Length; i++)
        {
            EyeSRs[i].gameObject.SetActive(false);
        }

        for (int i = 0; i < EyeAnims.Length; i++)
        {
            EyeAnims[i].Play(EyeAnims[i].GetCurrentAnimatorStateInfo(0).fullPathHash, 0, 0f);
            EyeAnims[i].Update(0f);

            EyeAnims[i].enabled = true;
        }

        DisableEyeBlink();
    }

    public void SetEyeBlink(int index, bool status = true)
    {
        EyeSRs[index].gameObject.SetActive(status);
    }

    public void EnableEyeBlink()
    {
        EyeParent.SetActive(true);
    }

    public void DisableEyeBlink()
    {
        EyeParent.SetActive(false);
    }

    public void OpenEye(float overrideDelay = 2f)
    {
        if (!gameObject.activeInHierarchy)
        {
            return;
        }

        EyesCo = StartCoroutine(OpeningEyes(overrideDelay));
    }

    Action HelperActionOpen;

    Coroutine EyesCo;
    bool isOpen = false;

    IEnumerator OpeningEyes(float overrideDelay)
    {
        if (isOpen)
            yield break;

        else
        {
            yield return new WaitForSeconds(overrideDelay);

            isOpen = true;

            for (int i = 0; i < EyeSRs.Length; i++)
            {
                EyeSRs[i].DOKill();
            }

            for (int i = 0; i < EyeAnims.Length; i++)
            {
                EyeAnims[i].Play(EyeAnims[i].GetCurrentAnimatorStateInfo(0).fullPathHash, 0, 0f);
                EyeAnims[i].Update(0f);

                EyeAnims[i].enabled = true;
            }

            if (HelperActionOpen != null)
            {
                HelperActionOpen.Invoke();
            }
        }
    }

    Action HelperActionClose;

    public void CloseEye()
    {
        isOpen = false;

        if (EyesCo != null)
            StopCoroutine(EyesCo);

        for (int i = 0; i < EyeAnims.Length; i++)
        {
            EyeAnims[i].enabled = false;
        }

        for (int i = 0; i < EyeSRs.Length; i++)
        {
            EyeSRs[i].DOKill();
            EyeSRs[i].DOFade(1f, .2f).SetDelay(.1f);
        }

        DOVirtual.DelayedCall(.1f, () =>
        {
            if (HelperActionClose != null)
            {
                HelperActionClose.Invoke();
            }
        });
    }

    #endregion

 /*   #region STEP 1

    bool isStep1Done;

    void StartStep1()
    {
        CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);

        DOVirtual.DelayedCall(1f, () =>
        {
            ToolStep1CameraFollow.enabled = true;

            ToolInputToggle(ToolStep1.gameObject, true);

            ToolStep1.OnMouseDownEvent += () =>
            {
                Indication1.SetActive(false);

                ToolStep1SR.sortingOrder = 25;
            };

            ToolStep1.OnMouseUpEvent += () =>
            {
                Step1Done();
            };

            Indication1.SetActive(true);
        });

        LensFollower.canFollow = true;
    }

    public void Step1Done()
    {
        if (isStep1Done)
            return;

        isStep1Done = true;

        LensFollower.canFollow = false;

        ToolStep1CameraFollow.enabled = false;

        ToolInputToggle(ToolStep1.gameObject, false);

        ToolStep1.transform.DOKill();
        ToolStep1.transform.DOMoveX(10, .5f).SetDelay(.25f).SetEase(Ease.InBack);

        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        OpenEye(.5f);

        StartStep2();

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 1;

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step1_Comp");
        }
        catch { }
    }

    void ForceCompleteStep1()
    {
        ToolStep1.gameObject.SetActive(false);
    }

    #endregion*/

    #region STEP 2

    bool isStep2Done;

    void StartStep2()
    {
        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOMoveX(0, 1f).SetDelay(1f).SetEase(Ease.OutQuad).OnComplete(() =>
        {
           

            //  ToolInputToggle(ToolStep2.gameObject, true);

            ToolStep2.enabled = true;

            for (int i = 0; i < ToolStep2Indications.Length; i++)
            {
                ToolStep2Indications[i].SetActive(true);
            }
        });

        LensFollower.Tip = Tip_2.transform;

        LensFollower.canFollow = true;
    }

    public void Step2Done()
    {
        if (isStep2Done)
            return;

        isStep2Done = true;

        LensFollower.canFollow = false;

       
        // ToolInputToggle(ToolStep2.gameObject, false);

        ToolStep2.enabled = false;

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOLocalMoveX(10, 1f).SetDelay(1f).SetEase(Ease.InBack);

        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        OpenEye(.5f);

        StartStep3();

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 1;

        SetProgressBar();

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step1_Comp");
        }
        catch { }
    }

    void ForceCompleteStep2()
    {
       // ForceCompleteStep1();

        for (int i = 0; i < DropsHolders_2.Length; i++)
        {
            DropsHolders_2[i].SetActive(true);
        }
    }

    #endregion

    #region STEP 3

    bool isStep3Done;

    void StartStep3()
    {
        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveY(-1f, 1f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep3.gameObject, true);

            ToolStep3CameraFollow.enabled = true;

            ToolStep3.OnMouseDownEvent += () =>
            {
                HandAnim3.SetActive(false);
            };

            HandAnim3.SetActive(true);
        });

        LensFollower.Tip = Tip_3.transform;

        LensFollower.canFollow = true;
    }

    public void Step3Done()
    {
        if (isStep3Done)
            return;

        isStep3Done = true;

        LensFollower.canFollow = false;

        ToolStep3CameraFollow.enabled = false;

        ToolInputToggle(ToolStep3.gameObject, false);

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveY(-10f, 1.5f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep3.gameObject.SetActive(false);
        });

        for (int i = 0; i < Drops_2.Length; i++)
        {
            Drops_2[i].DOKill();
            Drops_2[i].DOFade(0, 1f).SetDelay(1f);
        }

        DirtySR_1.DOKill();
        DirtySR_1.DOFade(0, 1f);

        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);

        OpenEye(.5f);

        for (int i = 0; i < ObjEnable_3.Length; i++)
        {
            ObjEnable_3[i].SetActive(true);
        }

        for (int i = 0; i < ObjDisable_3.Length; i++)
        {
            ObjDisable_3[i].SetActive(false);
        }

        StartStep4();

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 2;

        SetProgressBar();

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step2_Comp");
        }
        catch { }
    }

    void ForceCompleteStep3()
    {
        ForceCompleteStep2();

        for (int i = 0; i < DropsHolders_2.Length; i++)
        {
            DropsHolders_2[i].SetActive(false);
        }

        for (int i = 0; i < ObjEnable_3.Length; i++)
        {
            ObjEnable_3[i].SetActive(true);
        }

        for (int i = 0; i < ObjDisable_3.Length; i++)
        {
            ObjDisable_3[i].SetActive(false);
        }
    }

    #endregion

    #region STEP 4

    bool isStep4Done;

    void StartStep4()
    {
        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);

        ToolStep4.transform.DOKill();
        ToolStep4.transform.DOMoveX(-0.165f, 1f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep4.gameObject, true);

            ToolStep4CameraFollow.enabled = true;
        });

        LensFollower.Tip = Tip_4.transform;

        LensFollower.canFollow = true;
    }

    public void Step4Done()
    {
        if (isStep4Done)
            return;

        isStep4Done = true;

        LensFollower.canFollow = false;

        ToolStep4CameraFollow.enabled = false;

        ToolInputToggle(ToolStep4.gameObject, false);

        ToolStep4.transform.DOKill();
        ToolStep4.transform.DOLocalMoveY(-10f, 1.5f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep4.gameObject.SetActive(false);
        });

        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);

        OpenEye(.5f);

        StartStep5();

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 3;

        SetProgressBar();

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step3_Comp");
        }
        catch { }
    }

    void ForceCompleteStep4()
    {
        ForceCompleteStep3();

        FoamE_4.material = GameManager.instance.DefaultMat;

        FoamE_4.enabled = false;
    }

    #endregion

    #region STEP 5

    bool isStep5Done;

    void StartStep5()
    {
        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);

        ToolStep5.transform.DOKill();
        ToolStep5.transform.DOMoveY(-2.5f, 1f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep5.gameObject, true);

            ToolStep5CameraFollow.enabled = true;
        });

        LensFollower.Tip = Tip_5.transform;

        LensFollower.canFollow = true;

        for (int i = 0; i < Bones_5.Length; i++)
        {
            Bones_5[i].Tip = Tip_5.transform;
        }
    }

    public void Step5Done()
    {
        if (isStep5Done)
            return;

        isStep5Done = true;

        LensFollower.canFollow = false;

        ToolStep5CameraFollow.enabled = false;

        ToolInputToggle(ToolStep5.gameObject, false);

        ToolStep5.transform.DOKill();
        ToolStep5.transform.DOLocalMoveY(-10f, 1.5f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep5.gameObject.SetActive(false);
        });

        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);

        OpenEye(.5f);

        StartStep6();

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 4;

        SetProgressBar();

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step4_Comp");
        }
        catch { }
    }

    void ForceCompleteStep5()
    {
        ForceCompleteStep4();

        Water_5.material = GameManager.instance.DefaultMat;

        Water_5.enabled = false;
    }

    #endregion

    #region STEP 6

    bool isStep6Done;

    void StartStep6()
    {
        CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV);

        ToolStep6.transform.DOKill();
        ToolStep6.transform.DOMoveX(0.65f, 1f).SetDelay(1f).SetEase(Ease.OutQuad).OnComplete(() =>
        {
            ToolStep6CameraFollow.enabled = true;

            //  ToolInputToggle(ToolStep6.gameObject, true);
            ToolStep6.enabled = true;

            for (int i = 0; i < ToolStep6Indications.Length; i++)
            {
                ToolStep6Indications[i].SetActive(true);
            }
        });

        LensFollower.Tip = Tip_6.transform;

        LensFollower.canFollow = true;
    }

    public void Step6Done()
    {
        if (isStep6Done)
            return;

        isStep6Done = true;

        LensFollower.canFollow = false;

        ToolStep6.enabled = false;
     //   ToolStep6CameraFollow.enabled = false;

        ToolInputToggle(ToolStep6.gameObject, false);

        ToolStep6.transform.DOKill();
        ToolStep6.transform.DOLocalMoveX(10, 1f).SetDelay(1f).SetEase(Ease.InBack);

        CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV);

        OpenEye(.5f);

        StartStep7();

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 5;

        SetProgressBar();

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step5_Comp");
        }
        catch { }
    }

    void ForceCompleteStep6()
    {
        ForceCompleteStep5();

        for (int i = 0; i < CreamsHolders_6.Length; i++)
        {
            CreamsHolders_6[i].SetActive(true);
        }
    }

    #endregion

    #region STEP 7

    bool isStep7Done;

    void StartStep7()
    {
        CameraController.Instance.MoveCamera(ZoomStep7.CameraPos, ZoomStep7.CameraFOV);

        ToolStep7.transform.DOKill();
        ToolStep7.transform.DOLocalMoveY(-1f, 1f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep7.gameObject, true);

            ToolStep7CameraFollow.enabled = true;

            ToolStep7.OnMouseDownEvent += () =>
            {
                HandAnim7.SetActive(false);
            };

            HandAnim7.SetActive(true);
        });

        for (int i = 0; i < Bones_5.Length; i++)
        {
            Bones_5[i].Tip = Tip_7.transform;
        }

        LensFollower.Tip = Tip_7.transform;

        LensFollower.canFollow = true;
    }

    public void Step7Done()
    {
        if (isStep7Done)
            return;

        isStep7Done = true;

        LensFollower.canFollow = false;

        ToolStep7CameraFollow.enabled = false;

        ToolInputToggle(ToolStep7.gameObject, false);

        ToolStep7.transform.DOKill();
        ToolStep7.transform.DOLocalMoveY(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep7.gameObject.SetActive(false);
        });

        Shine_7.DOKill();
        Shine_7.DOFade(1f, 1f);

        Dry_7.DOKill();
        Dry_7.DOFade(0f, 1f);

        Lotion_7.DOKill();
        Lotion_7.DOFade(0f, 2f);

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV);


        OpenEye(1f);

        DOVirtual.DelayedCall(2f, () =>
        {
            Invoke(nameof(LevelComplete), 1f);

            SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 0;
        });

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step7_Comp");
        }
        catch { }
    }

    #endregion

}
