using UnityEngine;
using DG.Tweening;
using System.Collections;

public class Level2_Shoe_Playable : LevelData
{
    [Space()]
    [Header("----------------------------------------------------------------------------------")]
    [Space()]
    public ZoomPos MainZoom;

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
    public SpriteRenderer[] LayersToFade_1;
    public SpriteRenderer LayersToFade_Updated;

    [Space()]
    public SpriteRenderer MudLayer_1;

    [Header("----------------- STEP 2 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep2;

    [Space()]
    public BasicDrag ToolStep2;

    [Space()]
    public BD_CameraFollow ToolStep2CameraFollow;

    [Space()]
    public GameObject Step2Col;

    [Space()]
    public SpriteRenderer[] LayersToFade_2;

    [Space()]
    public SpriteRenderer WetMud_2;

    [Header("----------------- STEP 3 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep3;

    [Space()]
    public BasicDrag ToolStep3;

    [Space()]
    public BD_CameraFollow ToolStep3CameraFollow;

    [Space()]
    public SpriteRenderer[] LayersToFade_3;

    [Space()]
    public SpriteRenderer Foam_3;

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
    public SpriteRenderer[] LayersToFade_4;

    public GameObject dry;
    public GameObject mixeE;
    public GameObject mix;
    [Space()]
    public SpriteRenderer Mix_4;

    [Header("----------------- STEP 5 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep5;

    [Space()]
    public BasicDrag ToolStep5;

    [Space()]
    public BD_CameraFollow ToolStep5CameraFollow;

    [Space()]
    public SpriteRenderer[] LayersToFade_5;

    [Space()]
    public SpriteRenderer WetLayer;
    public GameObject DryLayer;

    IEnumerator Start()
    {

        // PLAYABLE: cover the ForceComplete step-skip so nothing visibly pops/snaps.
        PlayableFadeCover.Cover();

        base.LevelStart();

        UI_Manager.instance.InitializeTools(ToolIcons);

        yield return new WaitForSeconds(0.25f);

        // STEP 1
        ToolStep1CameraFollow.enabled = false;

        Step1Col.SetActive(false);

        // STEP 2
        ToolStep2CameraFollow.enabled = false;

        Step2Col.SetActive(false);

        // STEP 3
        ToolStep3CameraFollow.enabled = false;

        // STEP 4
        ToolStep4CameraFollow.enabled = false;

        Step4Col.SetActive(false);

        // STEP 5
        DryLayer.SetActive(false);
        mixeE.SetActive(false);
        ToolStep5CameraFollow.enabled = false;

        yield return new WaitForSeconds(.5f);

        Debug.Log("<color=yellow>" + levelName + "_Step" + (stepsDone + 1) + "_Start</color>");
        

        // PLAYABLE: no save resume — same ForceComplete + StartStep as original switch.
        ForceCompleteStep3();
        StartStep4();
        PlayableFadeCover.Reveal();
        yield break;
}

    #region STEP 1

    bool isStep1Done = false;

    void StartStep1()
    {
        ToolStep1.transform.DOKill();
        ToolStep1.transform.DOLocalMoveX(0f, 1f).SetDelay(1f).OnComplete(() =>
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

        ToolStep1.transform.DOKill();
        ToolStep1.transform.DOMoveX(10f, 1f).SetDelay(.5f).OnComplete(() => 
        {
            ToolStep1.gameObject.SetActive(false);
        });

        for (int i = 0; i < LayersToFade_1.Length; i++)
        {
            LayersToFade_1[i].DOKill();
            LayersToFade_1[i].DOFade(0, 1f).SetDelay(.5f);
        }
        LayersToFade_Updated.DOFade(1, 1f).SetDelay(.5f);
        SetProgressBar();
        { PlayableFadeCover.Cover(); ForceCompleteStep3(); Invoke(nameof(StartStep4), 1.2f); PlayableFadeCover.Reveal(); }

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step1_Comp");
        }
        catch { }
    }

    void ForceCompleteStep1()
    {
        MudLayer_1.material = GameManager.instance.DefaultMat;

        for (int i = 0; i < LayersToFade_1.Length; i++)
        {
            LayersToFade_1[i].DOKill();
            LayersToFade_1[i].DOFade(0, .01f);
        }
    }

    #endregion

    #region STEP 2

    bool isStep2Done = false;

    void StartStep2()
    {
        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOLocalMoveX(0.82f, 1f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep2.gameObject, true);

            ToolStep2CameraFollow.enabled = true;

            Step2Col.SetActive(true);
        });
    }

    public void Step2Done()
    {
        if (isStep2Done)
            return;

        isStep2Done = true;

        Step2Col.SetActive(false);

        ToolStep2CameraFollow.enabled = false;

        ToolInputToggle(ToolStep2.gameObject, false);

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOMoveX(10f, 1f).SetDelay(.5f).OnComplete(() =>
        {
            ToolStep2.gameObject.SetActive(false);
        }); 

        for (int i = 0; i < LayersToFade_2.Length; i++)
        {
            LayersToFade_2[i].DOKill();
            LayersToFade_2[i].DOFade(0, 1f).SetDelay(.5f);
        }
        SetProgressBar();
        { PlayableFadeCover.Cover(); ForceCompleteStep3(); Invoke(nameof(StartStep4), 1.2f); PlayableFadeCover.Reveal(); }

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step2_Comp");
        }
        catch { }
    }

    void ForceCompleteStep2()
    {
        ForceCompleteStep1();

        MudLayer_1.gameObject.SetActive(false);

        WetMud_2.material = GameManager.instance.DefaultMat;

        for (int i = 0; i < LayersToFade_2.Length; i++)
        {
            LayersToFade_2[i].DOKill();
            LayersToFade_2[i].DOFade(0, .01f);
        }
    }

    #endregion

    #region STEP 3

    bool isStep3Done = false;

    void StartStep3()
    {
        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOLocalMoveX(0f, 1f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep3.gameObject, true);

            ToolStep3CameraFollow.enabled = true;
        });
    }

    public void Step3Done()
    {
        if (isStep3Done)
            return;

        isStep3Done = true;

        ToolStep3CameraFollow.enabled = false;

        ToolInputToggle(ToolStep3.gameObject, false);

        ToolStep3.transform.DOKill();
        ToolStep3.transform.DOMoveX(10f, 1f).SetDelay(.5f).OnComplete(() => 
        { 
            ToolStep3.gameObject.SetActive(false);
        });

        SetProgressBar();
        for (int i = 0; i < LayersToFade_3.Length; i++)
        {
            LayersToFade_3[i].DOKill();
            LayersToFade_3[i].DOFade(0, 1f).SetDelay(.5f);
        }

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

        WetMud_2.gameObject.SetActive(false);

        Foam_3.material = GameManager.instance.DefaultMat;

        for (int i = 0; i < LayersToFade_3.Length; i++)
        {
            LayersToFade_3[i].DOKill();
            LayersToFade_3[i].DOFade(0, .01f);
        }
    }

    #endregion

    #region STEP 4

    bool isStep4Done = false;

    void StartStep4()
    {
        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);

        ToolStep4.transform.DOKill();
        ToolStep4.transform.DOLocalMoveX(0.82f, 1f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(ToolStep4.gameObject, true);

            ToolStep4CameraFollow.enabled = true;

            Step4Col.SetActive(true);
        });
    }

    public void Step4Done()
    {
        if (isStep4Done)
            return;

        isStep4Done = true;

        Step4Col.SetActive(false);

        ToolStep4CameraFollow.enabled = false;

        ToolInputToggle(ToolStep4.gameObject, false);

        ToolStep4.transform.DOKill();
        ToolStep4.transform.DOMoveX(10f, 1f).SetDelay(.5f).OnComplete(() => 
        {
            ToolStep4.gameObject.SetActive(false);
        });

        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);
        SetProgressBar();
        for (int i = 0; i < LayersToFade_4.Length; i++)
        {
            LayersToFade_4[i].DOKill();
            LayersToFade_4[i].DOFade(0, 1f).SetDelay(.5f);
           
        }
        mixeE.SetActive(true);
        mix.SetActive(false) ;
        dry.gameObject.SetActive(true);

        Invoke(nameof(StartStep5), 1.2f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step4_Comp");
        }
        catch { }
    }

    void ForceCompleteStep4()
    {
        ForceCompleteStep3();

        Foam_3.gameObject.SetActive(false);
        mix.gameObject.SetActive(false);
        mixeE.gameObject.SetActive(true);
        dry.gameObject.SetActive(true);
        Mix_4.material = GameManager.instance.DefaultMat;

        for (int i = 0; i < LayersToFade_4.Length; i++)
        {
            LayersToFade_4[i].DOKill();
            LayersToFade_4[i].DOFade(0, .01f);
        }
    }

    #endregion

    #region STEP 5

    bool isStep5Done = false;

    void StartStep5()
    {
        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);

        ToolStep5.transform.DOKill();
        ToolStep5.transform.DOLocalMoveX(0f, 1f).SetDelay(1f).OnComplete(() =>
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

        ToolStep5.transform.DOKill();
        ToolStep5.transform.DOMoveX(10f, 1f).SetDelay(.5f).OnComplete(() => 
        {
            ToolStep5.gameObject.SetActive(false);
        });

        SetProgressBar();
        CameraController.Instance.MoveCamera(ZoomStep5.CameraPos, ZoomStep5.CameraFOV);

        for (int i = 0; i < LayersToFade_5.Length; i++)
        {
            LayersToFade_5[i].DOKill();
            LayersToFade_5[i].DOFade(0, 1f);
        }

        WetLayer.DOKill();
       // WetLayer.DOFade(0, 2f).SetDelay(1f);

       // DryLayer.SetActive(true);

        Invoke(nameof(LevelComplete), 1.2f);

        try
        {
            Statics.GA_CustomStringEvent(levelName + "_Step5_Comp");
        }
        catch { }
    }

    void ForceCompleteStep5()
    {
        ForceCompleteStep4();
        mixeE.gameObject.SetActive(false);

        Mix_4.gameObject.SetActive(false);

        WetLayer.material = GameManager.instance.DefaultMat;

        WetLayer.gameObject.SetActive(false);

        DryLayer.SetActive(true);

        for (int i = 0; i < LayersToFade_5.Length; i++)
        {
            LayersToFade_5[i].DOKill();
            LayersToFade_5[i].DOFade(0, .01f);
        }
    }

    #endregion

    
}