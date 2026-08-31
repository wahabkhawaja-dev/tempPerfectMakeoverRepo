using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Level2_Face_New : LevelData
{
    [Space()]
    [Header("----------------------------------------------------------------------------------")]
    public ZoomPos MainZoom;
    [Space()]
    public SpriteRenderer FaceWetDroplets;
    [Space()]
    public GameObject dressDirty;
    public GameObject dressClean;

    [Space()]
    [Header("----------------- EYE BLINK ----------------------")]
    [Space()]
    public GameObject EyeParent;
   
    [Space()]
    public float blinkFlutterDuration = 0.12f;
    public float blinkRepeatInterval = 2f;

    [Space()]
    [Header("----------------- STEP 1 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep1;

    [Space()]
    public BasicDrag ToolStep1;
    public BD_CameraFollow ToolStep1CameraFollow;
    [Space()]
    public ParticleSystem mudDropletsVfx;

    [Header("----------------- STEP 2 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep2;

    [Space()]
    public DraggableObject ToolStep2;

    [Space()]
    public GameObject[] ToolStep2Indications;
    [Space()]
    public SpriteRenderer mudWetRend;

    [Space()]
    public GameObject[] DropsHolders_2;
    public SpriteRenderer[] Drops_2;

    [Header("----------------- STEP 3 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep3;

    [Space()]
    public BasicDrag ToolStep3;

    [Space()]
    public BD_CameraFollow ToolStep3CameraFollow;

    [Space()]
    public BD_Progress Progress3_A;
    public BD_Progress Progress3_B;

    [Space()]
    public GameObject HandAnim3;

    [Space()]
    public GameObject foamMix_E;
    [Space()]
    public GameObject[] ObjHideComp3;
    public GameObject[] ObjShowComp3;

    [Space()]
    [Header("----------------- STEP 4 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep4;

    [Space()]
    public BasicDrag ToolStep4;
    public BD_CameraFollow ToolStep4CameraFollow;

    [Header("----------------- STEP 5 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep5;

    [Space()]
    public DraggableObject ToolStep5;

    [Space()]
    public GameObject[] ToolStep5Indications;

    [Space()]
    public GameObject[] DropsHolders_5;
    public SpriteRenderer[] Drops_5;

    [Header("----------------- STEP 6 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep6;

    [Space()]
    public BasicDrag ToolStep6;

    [Space()]
    public BD_CameraFollow ToolStep6CameraFollow;

    [Space()]
    public GameObject HandAnim6;

    [Space()]
    public SpriteRenderer MoisturizerMix_E;
    [Space()]
    public GameObject[] ObjHideComp6;
    public GameObject[] ObjShowComp6;

    [Space()]
    [Header("----------------- STEP 7 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep7;

    [Space()]
    public BasicDrag ToolStep7;
    public BD_CameraFollow ToolStep7CameraFollow;
    [Space()]
    public Animator lipstickAnim;


    // Start is called before the first frame update
    IEnumerator Start()
    {
        base.LevelStart();
        UI_Manager.instance.InitializeTools(ToolIcons);

        levelNo = SaveSystem.Instance.DataFields.levelToPlay - 1;
        partNo = SaveSystem.Instance.DataFields.partToPlay - 1;

        stepsDone = SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone;


        bool dressLvlCompleted = SaveSystem.Instance.DataFields.AllLevels[1].subLevels[1].isCompleted;
       
        if (!dressLvlCompleted) 
        {
            dressDirty.SetActive(true);
            dressClean.SetActive(false);
        }
        else 
        {
            dressDirty.SetActive(false);
            dressClean.SetActive(true);

        }


        yield return new WaitForSeconds(0.25f);

        foamMix_E.SetActive(false);
        MoisturizerMix_E.gameObject.SetActive(false);

           switch (stepsDone)
           {
               case 0:
                  Invoke(nameof(StartStep1),0.5f);
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

           }

    }

    #region STEP 1

    bool isStep1Done = false;

    void StartStep1()
    {
        CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);

        ToolStep1.transform.DOKill();
        ToolStep1.transform.DOLocalMoveX(0f, 0.5f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep1.gameObject, true);

            ToolStep1CameraFollow.enabled = true;
        });
    }


    public void Step1Done()
    {
        if (isStep1Done)
            return;


        mudDropletsVfx.Play();
        isStep1Done = true;

        ToolStep1CameraFollow.enabled = false;

        ToolInputToggle(ToolStep1.gameObject, false);

        //CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);

        ToolStep1.transform.DOLocalMoveX(15f, 1f).OnComplete(() =>
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
        isStep1Done = true;

        ToolStep1CameraFollow.enabled = false;

        ToolInputToggle(ToolStep1.gameObject, false);

        ToolStep1.gameObject.SetActive(false);

        mudWetRend.material = GameManager.instance.DefaultMat;
    }

    #endregion

    #region STEP 2

    bool isStep2Done;

    void StartStep2()
    {
        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOMoveX(0, 1f).SetEase(Ease.OutQuad).OnComplete(() =>
        {

            mudDropletsVfx.Stop();
            //  ToolInputToggle(ToolStep2.gameObject, true);

            ToolStep2.enabled = true;

            for (int i = 0; i < ToolStep2Indications.Length; i++)
            {
                ToolStep2Indications[i].SetActive(true);
            }
        });

    }

    public void Step2Done()
    {
        if (isStep2Done)
            return;

        isStep2Done = true;

        // ToolInputToggle(ToolStep2.gameObject, false);

        ToolStep2.enabled = false;

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOLocalMoveX(10, 1f).SetDelay(1f).SetEase(Ease.InBack);

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 2;

        SetProgressBar();

        Invoke(nameof(StartStep3), 1f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step2_Comp");
        }
        catch { }
    }

    void ForceCompleteStep2()
    {
        ForceCompleteStep1();

        isStep2Done = true;

        ToolStep2.enabled = false;

        ToolStep2.transform.DOKill();
        ToolStep2.transform.localPosition = new Vector3(10f, ToolStep2.transform.localPosition.y, ToolStep2.transform.localPosition.z);

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
            ToolStep3.OnMouseUpEvent += () =>
            {
                if (isStep3Done == false)
                    HandAnim3.SetActive(true);
            };
            HandAnim3.SetActive(true);

            Co_3 = StartCoroutine(ProgressSync_3());
        });
    }

    Coroutine Co_3;

    IEnumerator ProgressSync_3()
    {
        while (true)
        {
            float val1 = Progress3_A.giveCollectiveProgress();
            float val2 = Progress3_B.giveCollectiveProgress();
            float collectiveProgress = (val1 + val2) / 2f;

            UI_Manager.instance.SetProgressBar(collectiveProgress);

            yield return new WaitForSeconds(.1f);
        }
    }

    public void Step3Done()
    {
        if (isStep3Done)
            return;

        isStep3Done = true;

        if (Co_3 != null)
            StopCoroutine(Co_3);

        UI_Manager.instance.SetProgressBar(1f);

        ToolStep3CameraFollow.enabled = false;

        ToolInputToggle(ToolStep3.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);

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

        foreach(GameObject obj in ObjHideComp3) 
        {
            obj.SetActive(false);
        }
        foreach(GameObject obj in ObjShowComp3) 
        {
            obj.SetActive(true);
        }

        Invoke(nameof(StartStep4), 1f);

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

        isStep3Done = true;

        ToolStep3CameraFollow.enabled = false;

        ToolInputToggle(ToolStep3.gameObject, false);

        ToolStep3.gameObject.SetActive(false);

        for (int i = 0; i < Drops_2.Length; i++)
        {
            Drops_2[i].DOKill();
            Drops_2[i].DOFade(0, 0f);
        }

        foreach (GameObject obj in ObjHideComp3)
        {
            obj.SetActive(false);
        }
        foreach (GameObject obj in ObjShowComp3)
        {
            obj.SetActive(true);
        }
    }

    #endregion

    #region STEP 4

    bool isStep4Done = false;

    void StartStep4()
    {
        FaceWetDroplets.DOKill();
        FaceWetDroplets.DOFade(0,0.0001f);
        FaceWetDroplets.gameObject.SetActive(true);

        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);

        ToolStep4.transform.DOKill();
        ToolStep4.transform.DOLocalMoveX(0f, 0.5f).OnComplete(() =>
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

        //CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);

        ToolStep4.transform.DOLocalMoveX(15f, 1f).OnComplete(() =>
        {
            ToolStep4.gameObject.SetActive(false);
        });

        SetProgressBar();

        Invoke(nameof(StartStep5), 1f);

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 4;

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step4_Comp");
        }
        catch { }


    }

    void ForceCompleteStep4()
    {
        ForceCompleteStep3();

        isStep4Done = true;

        ToolStep4CameraFollow.enabled = false;

        ToolInputToggle(ToolStep4.gameObject, false);

        ToolStep4.gameObject.SetActive(false);

        foamMix_E.SetActive(false);
    }

    #endregion

    #region STEP 5

    bool isStep5Done;

    void StartStep5()
    {
        
        FaceWetDroplets.DOKill();
        FaceWetDroplets.DOFade(0, 2f);

        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);

        ToolStep5.transform.DOKill();
        ToolStep5.transform.DOMoveX(0, 1f).SetEase(Ease.OutQuad).OnComplete(() =>
        {

            //  ToolInputToggle(ToolStep2.gameObject, true);

            ToolStep5.enabled = true;

            for (int i = 0; i < ToolStep5Indications.Length; i++)
            {
                ToolStep5Indications[i].SetActive(true);
            }
        });

    }

    public void Step5Done()
    {
        if (isStep5Done)
            return;

        isStep5Done = true;

        // ToolInputToggle(ToolStep2.gameObject, false);

        ToolStep5.enabled = false;

        ToolStep5.transform.DOKill();
        ToolStep5.transform.DOLocalMoveX(10, 1f).SetDelay(1f).SetEase(Ease.InBack);

        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 5;

        SetProgressBar();

        Invoke(nameof(StartStep6), 1f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step5_Comp");
        }
        catch { }
    }

    void ForceCompleteStep5()
    {
        foamMix_E.SetActive(false);

        ForceCompleteStep4();

        isStep5Done = true;

        ToolStep5.enabled = false;

        ToolStep5.transform.DOKill();
        ToolStep5.transform.localPosition = new Vector3(10f, ToolStep5.transform.localPosition.y, ToolStep5.transform.localPosition.z);

        for (int i = 0; i < DropsHolders_5.Length; i++)
        {
            DropsHolders_5[i].SetActive(true);
        }
    }

    #endregion

    #region STEP 6

    bool isStep6Done;

    void StartStep6()
    {
        CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV);

        ToolStep6.transform.DOKill();
        ToolStep6.transform.DOLocalMoveY(-1f, 1f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep6.gameObject, true);

            ToolStep6CameraFollow.enabled = true;

            ToolStep6.OnMouseDownEvent += () =>
            {
                HandAnim6.SetActive(false);
            };
            ToolStep6.OnMouseUpEvent += () =>
            {
                if (isStep6Done == false)
                    HandAnim3.SetActive(true);
            };
            HandAnim6.SetActive(true);

           
        });
    }

    public void Step6Done()
    {
        if (isStep6Done)
            return;

        isStep6Done = true;

        MoisturizerMix_E.DOKill();
        MoisturizerMix_E.DOFade(0, 2f).OnComplete(() => 
        {
            MoisturizerMix_E.gameObject.SetActive(false);
        });
        UI_Manager.instance.SetProgressBar(1f);

        ToolStep6CameraFollow.enabled = false;

        ToolInputToggle(ToolStep6.gameObject, false);

        CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV);

        ToolStep6.transform.DOKill();
        ToolStep6.transform.DOLocalMoveY(-10f, 1.5f).SetDelay(.25f).OnComplete(() =>
        {
            ToolStep6.gameObject.SetActive(false);
        });

     
        foreach (GameObject obj in ObjHideComp6)
        {
            obj.SetActive(false);
        }
        foreach (GameObject obj in ObjShowComp6)
        {
            obj.SetActive(true);
        }

        Invoke(nameof(StartStep7), 1f);

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 6;

        SetProgressBar();

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step6_Comp");
        }
        catch { }
    }

    void ForceCompleteStep6()
    {
        ForceCompleteStep5();

        isStep6Done = true;

        MoisturizerMix_E.DOKill();
        MoisturizerMix_E.DOFade(0, 0f);
        MoisturizerMix_E.gameObject.SetActive(false);

        ToolStep6CameraFollow.enabled = false;

        ToolInputToggle(ToolStep6.gameObject, false);

        ToolStep6.gameObject.SetActive(false);

        foreach (GameObject obj in ObjHideComp6)
        {
            obj.SetActive(false);
        }
        foreach (GameObject obj in ObjShowComp6)
        {
            obj.SetActive(true);
        }
    }

    #endregion

    #region STEP 7

    bool isStep7Done = false;

    void StartStep7()
    {
        CameraController.Instance.MoveCamera(ZoomStep7.CameraPos, ZoomStep7.CameraFOV);

        ToolStep7.transform.DOKill();
        ToolStep7.transform.DOLocalMoveX(0f, 0.5f).OnComplete(() =>
        {
            lipstickAnim.enabled = true;
            DOVirtual.DelayedCall(1f, () =>
            {
                ToolInputToggle(ToolStep7.gameObject, true);
                ToolStep7CameraFollow.enabled = true;
            });
            
        });
    }


    public void Step7Done()
    {
        if (isStep7Done)
            return;

        isStep7Done = true;

        ToolStep7CameraFollow.enabled = false;

        ToolInputToggle(ToolStep7.gameObject, false);

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV);

        ToolStep7.transform.DOLocalMoveX(15f, 1f).OnComplete(() =>
        {
            ToolStep7.gameObject.SetActive(false);
        });

        SetProgressBar();

        Invoke(nameof(LevelComplete), 1f);

        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = 0;

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step7_Comp");
        }
        catch { }


    }

    #endregion

    #region EYE

    bool eyesOpen = true;
    Coroutine blinkLoopCo;

    // Instantly shuts the eyes and stops any idle blinking. Called while a tool is inside the eye radius.
    public void CloseEye()
    {
        if (!eyesOpen)
            return;

        eyesOpen = false;

        StopBlinkLoop();

        EyeParent.SetActive(true);
    }

    // Opens the eyes, then after overrideDelay seconds starts the idle blink-every-N-seconds loop.
    // Called once a tool leaves the eye radius.
    public void OpenEye(float overrideDelay = 2f)
    {
        if (eyesOpen)
            return;

        eyesOpen = true;

        EyeParent.SetActive(false);

        StartBlinkLoop(overrideDelay);
    }

    void StartBlinkLoop(float initialDelay)
    {
        StopBlinkLoop();
        blinkLoopCo = StartCoroutine(BlinkLoopRoutine(initialDelay));
    }

    void StopBlinkLoop()
    {
        if (blinkLoopCo != null)
        {
            StopCoroutine(blinkLoopCo);
            blinkLoopCo = null;
        }
    }

    IEnumerator BlinkLoopRoutine(float initialDelay)
    {
        yield return new WaitForSeconds(initialDelay);

        while (true)
        {
            EyeParent.SetActive(true);
            yield return new WaitForSeconds(blinkFlutterDuration);

            EyeParent.SetActive(false);
            yield return new WaitForSeconds(blinkRepeatInterval);
        }
    }

    #endregion
}
