using UnityEngine;
using DG.Tweening;
using System.Collections;

public class Lvl2_Glasses : LevelData
{
    [Space()]
    [Header("----------------------------------------------------------------------------------")]
    [Space()]
    public ZoomPos MainZoom;
    [Space()]
    public GameObject Glasses_Parent;
    public GameObject Machine_Parent;
    [Space()]
    [Space()]
    [Header("----------------- STEP 1 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep1;

    [Space()]
    public BasicDrag ToolStep1;

    [Space()]
    public BD_CameraFollow ToolStep1CameraFollow;

    [Space()]
    public GameObject DustlayerStep1;

    [Header("----------------- STEP 2 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep2;

    [Space()]
    public GameObject ToolStep2;
    [Space()]
    public BoxCollider2D tapStep2Col;
    public Transform HammerStep2;
    public ParticleSystem GlassBreakParticles;
    public GameObject glassesBrokenClean;
    public GameObject glassesBroken;
    [Space()]
    public GameObject Step2Indication;

    [Space()]
    public AudioClip glassbreakSfx;


    [Header("----------------- STEP 3 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep3;
    [Space()]
    public Collider2D machineOffBtn;
    public GameObject machineOnBtn;
    public TextureOffsetScroller offsetScroller;
    [Space()]
    public GameObject Step3Indication;

    [Space()]
    public AudioClip machineBtnSfx;
    public AudioSource machineSfxSource;

    [Header("----------------- STEP 4 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep4;

    [Space()]
    public GameObject ToolStep4Parent;
    public GameObject ToolStep4Inner;
    public BasicDrag ToolStep4;
    [Space()]
    public GameObject Step4Indication;
    [Space()]
    public GameObject GlassesCleanCrack;
    public GameObject GlassesGlassRemoved;


    [Header("----------------- STEP 5 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep5;
    [Space()]
    public ZoomPos ZoomStep5b;
    [Space()]
    public Transform ToolStep5Holder;
    public BasicDrag ToolStep5;
    [Space()]
    public SpriteRenderer   glueObject;

    public GameObject Step5Indication;

    [Header("----------------- STEP 6 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep6;
    [Space()]
    public BasicDrag ToolStep6;
    public SpriteRenderer ToolStep6Rend;
    public GameObject lenseTarget;

    public GameObject Step6Indication;

    [Space()]
    public AudioClip lensPlaceSfx;

    [Space()]
    [Header("----------------- STEP 7 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep7;

    [Space()]
    public BasicDrag ToolStep7;

    [Space()]
    public BD_CameraFollow ToolStep7CameraFollow;

    [Space()]
    [Header("----------------- STEP 8 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep8;

    [Space()]
    public BasicDrag ToolStep8;

    [Space()]
    public BD_CameraFollow ToolStep8CameraFollow;
    [Space()]
    public GameObject GlassesWet;
    [Space()]
    public GameObject GlassesFinal;
    [Space()]
    public GameObject starParticles;

    [Space()]
    public AudioClip cleanSfx;


    // Start is called before the first frame update
    IEnumerator Start()
    {
        base.LevelStart();
        UI_Manager.instance.InitializeTools(ToolIcons);

        levelNo = SaveSystem.Instance.DataFields.levelToPlay - 1;
        partNo = SaveSystem.Instance.DataFields.partToPlay - 1;

        stepsDone = SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone;

        yield return new WaitForSeconds(0.25f);

        GlassesWet.SetActive(false);

        switch (stepsDone)
        {
            case 0:
                DOVirtual.DelayedCall(1.5f, () =>
                {
                    StartStep1();
                });
                break;

            // STARTING STEP 2
            case 1:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);
                ForceCompleteStep1();

                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep2();
                });
                break;
            case 2:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);
                ForceCompleteStep2();

                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep3();
                });
                break;
            case 3:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);
                ForceCompleteStep3();

                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep4();
                });
                break;
            case 4:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);
                ForceCompleteStep4();

                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep5();
                });
                break;
            case 5:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);
                ForceCompleteStep5();

                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep6();
                });
                break;
            case 6:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);
                ForceCompleteStep6();

                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep7();
                });
                break;
            case 7:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);
                ForceCompleteStep7();

                DOVirtual.DelayedCall(.5f, () =>
                {
                    StartStep8();
                });
                break;

                // STARTING STEP 3


        }
    }


    #region STEP 1

    bool isStep1Done;

    void StartStep1()
    {
        CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);

        ToolStep1.transform.DOKill();
        ToolStep1.transform.DOMoveX(0, .5f).SetDelay(.25f).SetEase(Ease.OutBack).OnComplete(() =>
        {
            ToolInputToggle(ToolStep1.gameObject, true);
            ToolStep1CameraFollow.enabled = true;
        });
    }

    public void Step1Done()
    {
        if (isStep1Done)
            return;

        isStep1Done = true;

        ToolStep1CameraFollow.enabled = false;

        ToolInputToggle(ToolStep1.gameObject, false);

        ToolStep1.transform.DOKill();
        ToolStep1.transform.DOMoveX(10, .5f).SetDelay(.25f).SetEase(Ease.InBack).OnComplete(() =>
        {
            ToolStep1.gameObject.SetActive(false);
        });

        SetProgressBar();

        Invoke(nameof(StartStep2), 1f);

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 1;
        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step1_Comp");
        }
        catch { }
    }

    void ForceCompleteStep1()
    {
        Glasses_Parent.SetActive(true);
        Machine_Parent.SetActive(false);

        DustlayerStep1.SetActive(false);
        ToolStep1.gameObject.SetActive(false);
    }



    #endregion

    #region STEP 2

    bool isStep2Done;

    void StartStep2()
    {
        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOMoveX(0, .5f).SetDelay(.25f).SetEase(Ease.OutBack).OnComplete(() =>
        {
            Step2Indication.SetActive(true);
            tapStep2Col.enabled = true;
        });
    }

    public void HammerTaped()
    {

        Step2Indication.SetActive(false);
        tapStep2Col.enabled = false;
        ToolStep2.transform.DOKill();
        ToolStep2.transform.DORotate(new Vector3(0, 0, 30), 0.55f).SetEase(Ease.InBack).OnComplete(() =>
        {
            ToolStep2.transform.DORotate(new Vector3(0, 0, 0), 0.15f).SetEase(Ease.OutBack).OnComplete(() =>
            {

                AudioController.instance.PlayAnySfx(0,glassbreakSfx,0);

                GlassBreakParticles.Play();
                glassesBrokenClean.SetActive(false);
                glassesBroken.SetActive(true);


                UI_Manager.instance.SetProgressBar(1);

                    

                Step2Done();
            });

        });
    }

    public void Step2Done()
    {
        if (isStep2Done)
            return;

        isStep2Done = true;

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOMoveX(10, .5f).SetDelay(.25f).SetEase(Ease.InBack).OnComplete(() =>
        {
            ToolStep2.gameObject.SetActive(false);
        });


        DOVirtual.DelayedCall(2f, () =>
        {
            LoadingManager.instance.ShowFadeAnim(0.5f, 1);

            DOVirtual.DelayedCall(0.55f, () =>
            {
                Glasses_Parent.SetActive(false);
                Machine_Parent.SetActive(true);

                SetProgressBar();
                Invoke(nameof(StartStep3), 1f);
            });
        });



        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 2;
        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step2_Comp");
        }
        catch { }
    }

    void ForceCompleteStep2()
    {
        DustlayerStep1.SetActive(false);
        ToolStep1.gameObject.SetActive(false);
        ToolStep2.gameObject.SetActive(false);

        glassesBrokenClean.SetActive(false);
        glassesBroken.SetActive(true);

        Glasses_Parent.SetActive(false);
        Machine_Parent.SetActive(true);
    }



    #endregion

    #region STEP 3

    bool isStep3Done;

    void StartStep3()
    {
        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);
        machineOffBtn.enabled = true;

        Step3Indication.SetActive(true);
    }

    public void MachineOn()
    {
        Step3Indication.SetActive(false);

        machineOffBtn.gameObject.SetActive(false);
        machineOnBtn.gameObject.SetActive(true);
        offsetScroller.enabled = true;


        UI_Manager.instance.SetProgressBar(1);

        Step3Done();

        AudioController.instance.PlayAnySfx(0, machineBtnSfx, 0);
        
        machineSfxSource.Play();
        machineSfxSource.DOFade(1, 3f).SetDelay(0.2f);
    }

    void Step3Done()
    {
        if (isStep3Done)
            return;

        isStep3Done = true;

        SetProgressBar();

        Invoke(nameof(StartStep4), 2f);
        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 3;
        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step3_Comp");
        }
        catch { }
    }

    void ForceCompleteStep3()
    {
        DustlayerStep1.SetActive(false);
        ToolStep1.gameObject.SetActive(false);
        ToolStep2.gameObject.SetActive(false);

        GlassesCleanCrack.SetActive(false);
        GlassesGlassRemoved.SetActive(true);

        Glasses_Parent.SetActive(false);
        Machine_Parent.SetActive(true);

        machineOffBtn.gameObject.SetActive(false);
        machineOnBtn.gameObject.SetActive(true);
        offsetScroller.enabled = true;
    }



    #endregion

    #region STEP 4

    bool isStep4Done;

    void StartStep4()
    {
        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);

        ToolStep4Parent.transform.DOKill();
        ToolStep4Parent.transform.DOMoveX(0, .5f).SetDelay(.25f).SetEase(Ease.OutBack).OnComplete(() =>
        {
            Step4Indication.SetActive(true);
        });
    }

    public void PackOpned()
    {
        Step4Indication.SetActive(false);
        ToolStep4.transform.parent = null;

        ToolStep4Inner.transform.DOKill();
        ToolStep4Inner.transform.DOMoveY(ToolStep4Inner.transform.position.y + 1.5f, 0.25f).OnComplete(() =>
        {

            ToolStep4.transform.position = ToolStep4Inner.transform.position;
            ToolStep4Inner.SetActive(false);
            ToolStep4.gameObject.SetActive(true);
           
            
            ToolStep4.transform.DOKill();
            ToolStep4.transform.DOLocalMove(new Vector3(-0.5f, -2.85f, 0f), 1f).SetDelay(1).OnComplete(() => 
            {
                ToolInputToggle(ToolStep4.gameObject, true);
            });



            UI_Manager.instance.SetProgressBar(1);
        });


        ToolStep4Parent.transform.DOKill();
        ToolStep4Parent.transform.DOMoveX(15, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolStep4Parent.gameObject.SetActive(false);

            CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);
        });
    }

    public void Step4Done()
    {
        if (isStep4Done)
            return;

        isStep4Done = true;

        ToolInputToggle(ToolStep4.gameObject, false);

        ToolStep4.transform.DOKill();
        ToolStep4.transform.DOMoveX(10, .5f).SetDelay(.25f).SetEase(Ease.InBack).OnComplete(() =>
        {
            ToolStep4.gameObject.SetActive(false);
        });


        DOVirtual.DelayedCall(1f, () =>
        {
            machineSfxSource.DOFade(0, 1f);

            LoadingManager.instance.ShowFadeAnim(0.5f, 1);

            DOVirtual.DelayedCall(0.55f, () =>
            {
                Glasses_Parent.SetActive(true);
                Machine_Parent.SetActive(false);

                SetProgressBar();
                Invoke(nameof(StartStep5), 0.5f);
            });
        });

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 4;
        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step4_Comp");
        }
        catch { }
    }

    void ForceCompleteStep4()
    {
        DustlayerStep1.SetActive(false);
        ToolStep1.gameObject.SetActive(false);
        ToolStep2.gameObject.SetActive(false);
        ToolStep4.gameObject.SetActive(false);


        Glasses_Parent.SetActive(true);
        Machine_Parent.SetActive(false);

        GlassesCleanCrack.SetActive(false);
        GlassesGlassRemoved.SetActive(true);

    }


    #endregion

    #region STEP 5

    bool isStep5Done;

    void StartStep5()
    {
        CameraController.Instance.MoveCamera(ZoomStep5b.CameraPos, ZoomStep5b.CameraFOV);

        ToolStep5Holder.transform.DOKill();
        ToolStep5Holder.transform.DOMoveX(0.171f, .5f).SetDelay(.25f).SetEase(Ease.OutBack).OnComplete(() =>
        {
            ToolInputToggle(ToolStep5.gameObject, true);
            // ToolStep5CameraFollow.enabled = true;

            ToolStep5.OnMouseDownEvent += HideStep5Indication;
            ToolStep5.OnMouseUpEvent += ShowStep5Indication;

            Step5Indication.SetActive(true);
        });
    }

    void ShowStep5Indication() 
    {
        if (isStep5Done)
            return;

        Step5Indication.SetActive(true);
    }
    void HideStep5Indication() 
    {
        Step5Indication.SetActive(false);
    }

    public void Step5Done()
    {
        if (isStep5Done)
            return;

        isStep5Done = true;

        ToolStep5.OnMouseDownEvent -= HideStep5Indication;
        ToolStep5.OnMouseUpEvent -= ShowStep5Indication;

        ToolInputToggle(ToolStep5.gameObject, false);

        ToolStep5Holder.transform.DOKill();
        ToolStep5Holder.transform.DOMoveX(10, .5f).SetDelay(.25f).SetEase(Ease.InBack).OnComplete(() =>
        {
            ToolStep5Holder.gameObject.SetActive(false);
        });


        SetProgressBar();

        Invoke(nameof(StartStep6), 1f);

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 5;
        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step5_Comp");
        }
        catch { }
    }

    void ForceCompleteStep5()
    {
        DustlayerStep1.SetActive(false);
        ToolStep1.gameObject.SetActive(false);
        ToolStep2.gameObject.SetActive(false);
        ToolStep4.gameObject.SetActive(false);
        ToolStep5.gameObject.SetActive(false);

        GlassesCleanCrack.SetActive(false);
        GlassesGlassRemoved.SetActive(true);

        Glasses_Parent.SetActive(true);
        Machine_Parent.SetActive(false);

        glueObject.material = GameManager.instance.DefaultMat;
        glueObject.gameObject.SetActive(true);
    }

    #endregion

    #region STEP 6

    bool isStep6Done;

    void StartStep6()
    {
        CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV);

        ToolStep6.transform.DOKill();
        ToolStep6.transform.DOMoveX(0, .5f).SetDelay(.25f).SetEase(Ease.OutBack).OnComplete(() =>
        {
            ToolInputToggle(ToolStep6.gameObject, true);

            lenseTarget.SetActive(true);

            Step6Indication.SetActive(true);
        });
    }

    public void Step6Done()
    {
        if (isStep6Done)
            return;

        isStep6Done = true;
        lenseTarget.SetActive(false);

        ToolInputToggle(ToolStep6.gameObject, false);

        Step6Indication.SetActive(false);

        SetProgressBar();

        Invoke(nameof(StartStep7), 1f);

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 6;

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step6_Comp");
        }
        catch { }
    }

    void ForceCompleteStep6()
    {
        ForceCompleteStep5();
        ToolStep6.transform.position = lenseTarget.transform.position;
    }



    #endregion

    #region STEP 7

    bool isStep7Done;

    void StartStep7()
    {
        CameraController.Instance.MoveCamera(ZoomStep7.CameraPos, ZoomStep7.CameraFOV);
       
        ToolStep7.transform.DOKill();
        ToolStep7.transform.DOMoveX(0, .5f).SetDelay(.25f).SetEase(Ease.OutBack).OnComplete(() =>
        {
            ToolInputToggle(ToolStep7.gameObject, true);

            ToolStep7CameraFollow.enabled = true;
        });
    }

    public void Step7Done()
    {
        if (isStep7Done)
            return;

        isStep7Done = true;

        ToolStep7CameraFollow.enabled = false;

        ToolStep6Rend.DOKill();
        ToolStep6Rend.DOFade(0, 0.5f).SetEase(Ease.Linear).OnComplete(() =>
        {
            ToolStep6Rend.gameObject.SetActive(false);
        });
      //  GlassesGlassRemoved.SetActive(false);

        ToolInputToggle(ToolStep7.gameObject, false);

        ToolStep7.transform.DOKill();
        ToolStep7.transform.DOMoveX(10, .5f).SetDelay(.25f).SetEase(Ease.InBack).OnComplete(() =>
        {
            ToolStep7.gameObject.SetActive(false);
        });

        SetProgressBar();

        Invoke(nameof(StartStep8), 1f);

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 7;
        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step7_Comp");
        }
        catch { }
    }

    void ForceCompleteStep7()
    {
        GlassesWet.SetActive(true);
        GlassesFinal.SetActive(true);
        ToolStep7.gameObject.SetActive(false);
        ForceCompleteStep6();
        ToolStep6.gameObject.SetActive(false);
        GlassesGlassRemoved.SetActive(false);
    }



    #endregion

    #region STEP 8

    bool isStep8Done;

    void StartStep8()
    {
        CameraController.Instance.MoveCamera(ZoomStep8.CameraPos, ZoomStep8.CameraFOV);

        ToolStep8.transform.DOKill();
        ToolStep8.transform.DOMoveX(0, .5f).SetDelay(.25f).SetEase(Ease.OutBack).OnComplete(() =>
        {
            ToolInputToggle(ToolStep8.gameObject, true);

            ToolStep8CameraFollow.enabled = true;
        });
    }

    public void Step8Done()
    {
        if (isStep8Done)
            return;

        isStep8Done = true;

        ToolStep8CameraFollow.enabled = false;

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV);


        ToolInputToggle(ToolStep8.gameObject, false);

        ToolStep8.transform.DOKill();
        ToolStep8.transform.DOMoveX(10, .5f).SetDelay(.25f).SetEase(Ease.InBack).OnComplete(() =>
        {
            ToolStep8.gameObject.SetActive(false);
        });

        starParticles.SetActive(true);

        AudioController.instance.PlayAnySfx(0, cleanSfx, 0);

        SetProgressBar();

        Invoke(nameof(LevelComplete), 3f);

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 0;
        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step8_Comp");
        }
        catch { }
    }

    #endregion
}
