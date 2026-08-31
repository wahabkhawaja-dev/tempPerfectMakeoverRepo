using UnityEngine;
using DG.Tweening;
using System.Collections;

public class Level2_Cloth : LevelData
{

    [Space()]
    [Header("----------------------------------------------------------------------------------")]

    [Space()]
    [Header("Views")]
    public GameObject ClothChangeView;
    public GameObject WashingView;
    public GameObject DryView;
    public GameObject WashingTools;
    [Space()]
    public GameObject knittingView;

    [Header("----------------------------------------------------------------------------------")]
    [Space()]
    public Animator doorAnim;
    [Space()]
    public GameObject ClothDirtySink;
    public SpriteRenderer ClothDirtySinkWet;
    public SpriteRenderer ClothDirtySinkClean;
    [Space()]
    public SpriteRenderer waterBase;
    public SpriteRenderer waterTop;
    [Space()]
    public Transform waterClean;
    public SpriteRenderer waterDirty;
    public SpriteRenderer sinkFoamClean;

    [Space()]
    [Header("----------------- STEP 1 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep1;

    [Space()]
    public Transform ClothHand;
    [Space()]
    public BasicDrag ToolStep1;
    [Space()]
    public GameObject step1_Indication;
    [Space()]
    public GameObject Basket_Step1;
    public GameObject ClothinBasketStep1;

    [Space()]
    [Header("----------------- STEP 2 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep2;

    [Space()]
    public BasicDrag ToolStep2;
    public GameObject Basket_Cloth;
    [Space()]
    public GameObject step2_Indication;

    [Space()]
    [SerializeField] AudioClip clothSfx;


    [Space()]
    [Header("----------------- STEP 3 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep3;

    [Space()]
    public Collider2D TapColStep3;
    [Space()]
    public GameObject step3_Indication;
    [Space()]
    public GameObject tapParent;
    [Space()]
    public Transform tapMask;
    [Space()]
    public SpriteRenderer tapTopRend;

    [Space()]
    [SerializeField] AudioClip tapOpenSfx;
    [SerializeField] AudioClip waterPourSfx;

    [Space()]
    [Header("----------------- STEP 4 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep4;

    [Space()]
    public BasicDrag ToolStep4;
    [Space()]
    public GameObject soapTarget;


    [Space()]
    [Header("----------------- STEP 5 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep5;

    [Space()]
    public BasicDrag ToolStep5;

    [Space()]
    [Header("----------------- STEP 6 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep6;

    [Space()]
    public Transform basketStep6;
    [Space()]
    public BasicDrag ToolStep6;

    [Space()]
    [Header("----------------- STEP 7 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep7;

    [Space()]
    public BasicDrag ToolStep7;



    [Space()]
    [Header("----------------- STEP 3a ----------------------")]
    [Space()]
    public ZoomPos ZoomStep3a;
    public BasicDrag ToolStep3a;
    public GameObject step3aIndication;

    IEnumerator Start()
    {
        base.LevelStart();

        UI_Manager.instance.InitializeTools(ToolIcons);

        levelNo = SaveSystem.Instance.DataFields.levelToPlay - 1;
        partNo = SaveSystem.Instance.DataFields.partToPlay - 1;

        stepsDone = SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone;

        yield return new WaitForSeconds(0.25f);

        switch (stepsDone)
        {
            case 0:
                StartStep1();
                break;

            case 1:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep1();

                StartStep2();
                break;

            case 2:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep2();

                StartStep3();
                break;

            case 3:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep3();

                StartStep4();
                break;

            case 4:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep4();

                StartStep5();
                break;

            case 5:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep5();

                StartStep6();
                break;

            case 6:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep6();

                StartStep7();
                break;

            case 7:
                UI_Manager.instance.SetProgressIconIndex(stepsDone);

                ForceCompleteStep7();

                StartStep3a();
                break;
        }
    }

    #region Step 1 

    bool step1Complete;

    void StartStep1()
    {
        CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);

        Basket_Step1.transform.DOKill();
        Basket_Step1.transform.DOLocalMoveX(0f, 1f).SetDelay(1f).OnComplete(() =>
        {
            doorAnim.enabled = true;
        });

    }

    public void OnDoorOpened()
    {
        ClothHand.DOKill();
        ClothHand.DOLocalMoveX(0, 0.5f).OnComplete(() =>
        {
            ToolStep1.OnMouseDownEvent += ClothStep1Picked;
            ToolStep1.OnMouseUpEvent += ClothStep1Released;

            ToolInputToggle(ToolStep1.gameObject, true);

            step1_Indication.SetActive(true);
        });

    }

    void ClothStep1Picked()
    {
        ToolStep1.startOrder = 100;

        step1_Indication.SetActive(false);
    }
    void ClothStep1Released()
    {
        if (step1Complete)
            return;


        step1_Indication.SetActive(true);
    }

    public void Step1Complete()
    {
        if (step1Complete)
            return;

        step1_Indication.SetActive(false);

        ToolStep1.OnMouseDownEvent -= ClothStep1Picked;
        ToolStep1.OnMouseUpEvent -= ClothStep1Released;

        step1Complete = true;

        ToolInputToggle(ToolStep1.gameObject, false);

        ToolStep1.gameObject.SetActive(false);

        ClothHand.DOLocalMoveX(-0.44f, 0.5f).OnComplete(() =>
        {
            ClothHand.gameObject.SetActive(false);
        });

        ClothinBasketStep1.SetActive(true);

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 1;

        SetProgressBar();

        DOVirtual.DelayedCall(1f, () =>
        {
            LoadingManager.instance.ShowFadeAnim(0.5f, 0.5f);
            Invoke(nameof(StartStep2), 0.75f);

        });



        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step1_Comp");
        }
        catch { }
    }

    void ForceCompleteStep1()
    {
        ToolStep1.gameObject.SetActive(false);
        ClothHand.gameObject.SetActive(false);

        ClothinBasketStep1.SetActive(true);

        ClothChangeView.SetActive(false);
        WashingView.SetActive(true);
    }


    #endregion


    #region Step 2

    bool step2Complete;

    void StartStep2()
    {
        ClothChangeView.SetActive(false);
        WashingView.SetActive(true);


        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOLocalMoveX(0, .5f).SetDelay(1f).OnComplete(() =>
        {

            ToolStep2.OnMouseDownEvent += ClothStep2Picked;
            ToolStep2.OnMouseUpEvent += ClothStep2Released;

            ToolInputToggle(ToolStep2.gameObject, true);

            step2_Indication.SetActive(true);
        });

        Basket_Cloth.transform.DOKill();
        Basket_Cloth.transform.DOLocalMoveX(0.26f, .5f).SetDelay(1f);
    }

    void ClothStep2Picked()
    {
        step2_Indication.SetActive(false);
    }
    void ClothStep2Released()
    {
        if (step2Complete)
            return;

        step2_Indication.SetActive(true);
    }

    public void Step2Complete()
    {
        if (step2Complete)
            return;

        step2_Indication.SetActive(false);

        ToolStep2.gameObject.SetActive(false);

        step2Complete = true;

        ToolInputToggle(ToolStep2.gameObject, false);

        ClothDirtySink.SetActive(true);
        ToolStep2.gameObject.SetActive(false);

        PlayClothPlacedSfx();

        Basket_Cloth.transform.DOKill();
        Basket_Cloth.transform.DOLocalMoveX(-15f, 1f).OnComplete(() =>
        {

            Basket_Cloth.gameObject.SetActive(false);

        });

        ToolStep2.OnMouseDownEvent -= ClothStep2Picked;
        ToolStep2.OnMouseUpEvent -= ClothStep2Released;

        Invoke(nameof(StartStep3), 1f);

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 2;

        SetProgressBar();

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step2_Comp");
        }
        catch { }
    }

    void PlayClothPlacedSfx()
    {
        

        AudioController.instance.PlayAnySfx(0, clothSfx, 0f);
    }

    void ForceCompleteStep2()
    {
        ForceCompleteStep1();

        ToolStep2.gameObject.SetActive(false);
        Basket_Cloth.gameObject.SetActive(false);

        ClothDirtySink.SetActive(true);
    }
    #endregion

    #region STEP 3

    bool step3Complete;
    void StartStep3()
    {
        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);
        TapColStep3.enabled = true;
        step3_Indication.SetActive(true);

    }

  
    IEnumerator FlipXRoutine(float delay)
    {
        SpriteRenderer sr = tapTopRend;
        if (sr == null) yield break;

        for (int i = 0; i < 10; i++)
        {
            sr.flipX = !sr.flipX;
            yield return new WaitForSeconds(delay);
        }
    }
    public void OnTapPressed()
    {
        StartCoroutine(FlipXRoutine(0.08f));

        TapColStep3.enabled = false;
        step3_Indication.SetActive(false);
        PlayTapPressSfx();

        DOVirtual.DelayedCall(0.8f, () =>
        {
            tapMask.DOKill();
            tapMask.DOLocalMoveY(0, 1f).OnComplete(() =>
            {
                waterClean.DOKill();
                waterClean.DOLocalMoveY(0.4f, 3f).OnComplete(() =>
                {
                    tapMask.DOKill();
                    tapMask.DOLocalMoveY(1.7f, 0.25f).OnComplete(() =>
                    {
                        tapParent.gameObject.SetActive(false);
                    });
                });

                ClothDirtySinkWet.gameObject.SetActive(true);
                ClothDirtySinkWet.DOKill();
                ClothDirtySinkWet.DOFade(1, 3f).SetDelay(1).OnComplete(() =>
                {
                    ClothDirtySink.SetActive(false);

                    Step3Complete();
                });
            });
        });

       
    }

    void PlayTapPressSfx()
    {
        

        AudioController.instance.PlayAnySfx(0, tapOpenSfx, 0f);
        AudioController.instance.PlayAnySfx(1, waterPourSfx, 0f);
    }

    void Step3Complete()
    {
        if (step3Complete)
            return;

        step3Complete = true;

        Invoke(nameof(StartStep4), 0.5f);

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 3;

        SetProgressBar();

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step3_Comp");
        }
        catch { }

    }

    void ForceCompleteStep3()
    {
        ForceCompleteStep2();

        TapColStep3.enabled = false;
        step3_Indication.SetActive(false);
        tapParent.gameObject.SetActive(false);

        waterBase.DOFade(1, 0f);
        waterClean.DOKill();
        waterClean.DOLocalMoveY(0.4f, 0f);

        ClothDirtySink.SetActive(false);

        ClothDirtySinkWet.gameObject.SetActive(true);
        ClothDirtySinkWet.DOKill();
        ClothDirtySinkWet.DOFade(1, 0f);
    }

    #endregion

    #region STEP 4

    bool step4Complete;

    Vector3 soapDefPos;
    Vector3 soapPickedPos;
    void StartStep4()
    {
        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);

        soapDefPos = ToolStep4.transform.position;
        soapPickedPos = new Vector3(-1.5f, 1.643f,-2);
        ToolStep4.startPos = soapPickedPos;

        ToolStep4.transform.DOKill();
        ToolStep4.transform.DOLocalMove(soapPickedPos, 0.55f).SetDelay(0.5f).OnComplete(() =>
        {
            DOVirtual.DelayedCall(0.2f, () =>
            {
                ToolInputToggle(ToolStep4.gameObject, true);
                soapTarget.SetActive(true);
            });

        });

    }

    public void Step4Complete()
    {
        if (step4Complete)
            return;

        step4Complete = true;

        soapTarget.SetActive(false);

        ToolInputToggle(ToolStep4.gameObject, false);

        ToolStep4.transform.DOLocalMove(soapDefPos, 0.55f).SetDelay(0.255f);/*.OnComplete(() =>
        {
            ToolStep4.gameObject.SetActive(false);
        });*/

        Invoke(nameof(StartStep5), 0.55f);

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 4;

        SetProgressBar();

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step4_Comp");
        }
        catch { }
    }

    void ForceCompleteStep4()
    {
        ForceCompleteStep3();

        soapTarget.SetActive(false);
    }

    #endregion

    #region STEP 5

    bool step5Complete;
    void StartStep5()
    {
        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);


        ToolStep5.transform.DOKill();
        ToolStep5.transform.DOLocalMoveY(0, 0.55f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep5.gameObject, true);
            waterDirty.gameObject.SetActive(true);
        });

    }

    public void Step5Complete()
    {
        if (step5Complete)
            return;

        step5Complete = true;

        ToolInputToggle(ToolStep5.gameObject, false);

        ClothDirtySinkClean.gameObject.SetActive(true);
        ClothDirtySinkClean.DOKill();
        ClothDirtySinkClean.DOFade(1, 2f).OnComplete(() =>
        {
            ClothDirtySinkWet.DOKill();
            ClothDirtySinkWet.DOFade(0, 1f).OnComplete(() =>
            {
                ClothDirtySinkWet.gameObject.SetActive(false);
            });
        });

        ToolStep5.transform.DOKill();
        ToolStep5.transform.DOLocalMoveY(-10, 2f).SetDelay(1).OnComplete(() =>
         {
             ToolStep5.gameObject.SetActive(false);
         });

        Invoke(nameof(StartStep6), 0.75f);

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 5;

        SetProgressBar();

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step5_Comp");
        }
        catch { }
    }

    void ForceCompleteStep5()
    {
        ForceCompleteStep4();

        ToolStep5.gameObject.SetActive(false);

        ClothDirtySinkClean.gameObject.SetActive(true);
        ClothDirtySinkClean.DOKill();
        ClothDirtySinkClean.DOFade(1, 0f);

        ClothDirtySinkWet.DOKill();
        ClothDirtySinkWet.DOFade(0, 0f);
        ClothDirtySinkWet.gameObject.SetActive(false);

        waterDirty.gameObject.SetActive(true);
        waterDirty.DOKill();
        waterDirty.DOFade(1,0.001f);

    }

    #endregion

    #region STEP 6
    bool step6Complete;
    public void StartStep6()
    {
        waterBase.gameObject.SetActive(false);
        waterTop.gameObject.SetActive(false);
        sinkFoamClean.DOKill();
        sinkFoamClean.DOFade(0, 1f).OnComplete(() =>
        {
            sinkFoamClean.gameObject.SetActive(false);
        });

        CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV);

        basketStep6.transform.DOKill();
        basketStep6.transform.DOLocalMoveX(0, 0.55f).SetDelay(1f).OnComplete(() =>
        {
            ToolStep6.OnMouseDownEvent += OnTool6Picked;
            ToolInputToggle(ToolStep6.gameObject, true);

        });
    }

    void OnTool6Picked()
    {
        ClothDirtySinkClean.maskInteraction = SpriteMaskInteraction.None;
        ToolStep6.OnMouseDownEvent -= OnTool6Picked;
    }
    public void Step6Complete()
    {
        if (step6Complete)
            return;

        step6Complete = true;

        waterDirty.transform.DOKill();
        waterDirty.transform.DOMoveY(0, 1f).OnComplete(() => 
        {
            waterDirty.DOFade(0, 1f).OnComplete(() =>
            {
                waterDirty.gameObject.SetActive(false);
            });
        });

        ToolInputToggle(ToolStep6.gameObject, false);

        DOVirtual.DelayedCall(1f, () =>
        {
            LoadingManager.instance.ShowFadeAnim(0.5f, 0.5f);


            DOVirtual.DelayedCall(0.75f, () =>
            {
                basketStep6.gameObject.SetActive(false);
                ToolStep6.gameObject.SetActive(false);

                DryView.SetActive(true);
                WashingView.SetActive(false);
                Invoke(nameof(StartStep7), 0.2f);

                SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 6;

                SetProgressBar();
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

        waterBase.gameObject.SetActive(false);
        waterTop.gameObject.SetActive(false);
        sinkFoamClean.gameObject.SetActive(false);

        waterDirty.gameObject.SetActive(false);

        basketStep6.gameObject.SetActive(false);
        ToolStep6.gameObject.SetActive(false);

        DryView.SetActive(true);
        WashingView.SetActive(false);
    }

    #endregion

    #region STEP 7
    bool step7Complete;
    public void StartStep7()
    {

        CameraController.Instance.MoveCamera(ZoomStep7.CameraPos, ZoomStep7.CameraFOV);

        ToolStep7.transform.DOKill();
        ToolStep7.transform.DOLocalMoveY(-2f, 0.55f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep7.gameObject, true);

        });
    }
    public void Step7Complete()
    {
        if (step7Complete)
            return;

        step7Complete = true;

        ToolInputToggle(ToolStep7.gameObject, false);

        ToolStep7.transform.DOLocalMoveY(-15f, 0.55f).OnComplete(() =>
        {
            ToolStep7.gameObject.SetActive(false);
        });

        DOVirtual.DelayedCall(1f, () =>
        {
            LoadingManager.instance.ShowFadeAnim(0.5f, 0.5f);

            DOVirtual.DelayedCall(0.75f, () =>
            {
                DryView.SetActive(false);
                WashingView.SetActive(false);
                knittingView.SetActive(true);

                Invoke(nameof(StartStep3a), 0.2f);

                SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 7;

                SetProgressBar();
            });

        });

        // Invoke(nameof(StartStep8), 0.75f);
        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step7_Comp");
        }
        catch { }
    }

    void ForceCompleteStep7()
    {
        ForceCompleteStep6();

        ToolStep7.gameObject.SetActive(false);

        DryView.SetActive(false);
        WashingView.SetActive(false);
        knittingView.SetActive(true);
    }

    #endregion


    #region STEP 3a

    bool isStep3aDone;

    void StartStep3a()
    {
        CameraController.Instance.MoveCamera(ZoomStep3a.CameraPos, ZoomStep3a.CameraFOV);

        step3aIndication.SetActive(true);

        /* WashingView.SetActive(false);
         WashingTools.SetActive(false);
         knittingView.SetActive(true);*/

        DOVirtual.DelayedCall(0.5f, () =>
        {
            ToolStep3a.OnMouseDownEvent += HideStep3Indication;
            ToolStep3a.OnMouseUpEvent += ShowStep3Indication;

            ToolInputToggle(ToolStep3a.gameObject, true);
        });

    }
    void ShowStep3Indication()
    {
        if (isStep3aDone)
            return;

        step3aIndication.SetActive(true);
    }
    void HideStep3Indication()
    {
        step3aIndication.SetActive(false);
    }

    public void Step3Done()
    {
        if (isStep3aDone)
            return;

        isStep3aDone = true;

        ToolInputToggle(ToolStep3a.gameObject, false);


        DOVirtual.DelayedCall(2f, () =>
        {
            Invoke(nameof(LevelComplete), 0.25f);

            SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 0;
            SetProgressBar();
        });

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step3_Comp");
        }
        catch { }

        ToolStep3a.OnMouseDownEvent -= HideStep3Indication;
        ToolStep3a.OnMouseUpEvent -= ShowStep3Indication;
    }

    #endregion

}