// [Luna] Adapted for playables by Cross-Project Prefab Importer.
                                                                 
using UnityEngine;
using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.Rendering;

                                                                                     
                                                                                                  
                                                                                                          
                                                                          
                                                                            
                                                                      
                                                                      
                                                                              
                                                                                                                  
                                                                  
                                                                                                           
                                                                                                               
                                                     
  
                                                                                                       
                                                                                                                
                                                                                     
public class CG_Level4_Casket_Playable_LeanTest8 : LevelData
{
    [Space()]
    [Header("----------------------------------------------------------------------------------")]
    [Space()]
    public ZoomPos MainZoom;
    [Tooltip("Seconds the camera takes to ease back to MainZoom when a step finishes (linear).")]
    public float ReturnDuration = 1.2f;
    [Tooltip("Seconds a drag hint waits, once its item has settled after a let-go, before showing again.")]
    public float HintReshowDelay = .5f;
    [Tooltip("After a finished step has zoomed out, how long the player gets to look at the result before the next step zooms in.")]
    public float ShowcaseHold = .4f;

    [Space()]
    public GameObject View1;

    [Space()]
    public GameObject CasketClosed;
    public GameObject CasketOpen;

    [Space()]
    [Tooltip("Lid open: the open casket fades in on top of the closed one (each casket state is a SortingGroup).")]
    public float LidFadeDuration = .4f;

    [Space()]
    [Tooltip("Lid close: the closed casket swaps in place with a deep thud - a slow low camera rumble that dies away,\n" +
             "a heavy haptic fading out, dust; LidSettleDuration is the moment it rests before the close counts as done.")]
    public float LidSettleDuration = .9f;
    [Tooltip("Strength of the slow camera rumble on the thud (world units).")]
    public float LidRumbleStrength = .06f;
    public float LidRumbleDuration = .8f;
    [Tooltip("Pause after the lid has landed and settled before the camera zooms out.")]
    public float CloseZoomOutDelay = .5f;
    public AudioClip LidOpenClip;
    public AudioClip LidCloseClip;

    [Header("----------------- STEP 1 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep1;

    [Space()]
    public BasicDrag ToolStep1;
    public float ToolInX_1 = .4f;

    [Space()]
    public GameObject Step1Col;
    public PlaySfxOnCollision SfxCol_1;

    [Space()]
    public GameObject Cobweb_1;
    [Tooltip("Webs over the background front layer - a second scratch card the duster clears with the cobweb.")]
    public GameObject BgWebs_1;

    [Space()]
    [Tooltip("After the cobweb: green outline on the casket and a tap hand - tapping opens the lid.")]
    public OutlinePulse CasketOutline_1;
    public GameObject CasketTap_1;
    public GameObject Hand_1;

    [Space()]
    [Tooltip("Dust puffs played as the lid opens - add your own particle objects under 'Custom FX' (kept when the\n" +
             "level is rebuilt) and drag them in here. Empty slots are skipped.")]
    public ParticleSystem[] OpenDustPuffs_1;
    public float OpenDustDelay_1 = .5f;

    [Header("----------------- STEP 2 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep2;

    [Space()]
    public BasicDrag ToolStep2;
    public float ToolInX_2 = .4f;

    [Space()]
    public GameObject SpiderHolder_2;
    public OutlinePulse[] AllSpiders_2;

    [Header("----------------- STEP 3 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep3;

    [Space()]
    public BasicDrag ToolStep3;
    public float ToolInX_3 = .4f;

    [Space()]
    public GameObject Step3Col;

    [Space()]
    public GameObject Dust_3;

    [Header("----------------- STEP 4 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep4;

    [Space()]
    public BasicDrag ToolStep4;
    public float ToolInX_4 = 0f;

    [Space()]
    public GameObject Step4Col;
    public PlaySfxOnCollision SfxCol_4;
    public GameObject Indication_4;

    [Space()]
    public SpriteRenderer Unstitched_4;

    [Header("----------------- STEP 5 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep5;

    [Space()]
    public BasicDrag ToolStep5;
    public float ToolInX_5 = .4f;
    public GameObject Indication_5;

    [Space()]
    public SpriteRenderer[] ObjsEnable_5;
    public SpriteRenderer[] ObjsDisable_5;

    [Space()]
    public ParticleSystem CleanSparkle_5;

    [Header("----------------- STEP 6 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep6;

    [Space()]
    public BasicDrag ToolStep6;
    public float ToolInX_6 = .4f;

    [Space()]
    public GameObject PillowDetect_6;
    public GameObject PillowSeated_6;
    public GameObject Indication_6;
    public GameObject Hand_6;

    [Header("----------------- STEP 7 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep7;

    [Space()]
    public BasicDrag ToolStep7;
    public float ToolInX_7 = .4f;

    [Space()]
    public GameObject Step7Col;
    public PlaySfxOnCollision SfxCol_7;
    public GameObject Indication_7;

    [Space()]
    [Tooltip("Filler paste bucket (SP_9): slides in, the knife dips into it and picks the paste up, it slides away.")]
    public Transform Bucket_7;
    public float BucketInX_7;
    public Transform DipTop_7;
    public Transform DipBottom_7;
    public SpriteRenderer Paste_7;
    public AudioClip DipClip_7;
    [Tooltip("The knife's turn once it has picked the paste up (0 = blade straight up, facing front).")]
    public float WorkRotZ_7 = 0f;

    [Header("----------------- STEP 8 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep8;

    [Space()]
    public BasicDrag ToolStep8;
    public float ToolInX_8 = .4f;

    [Space()]
    public GameObject Step8Col;
    public PlaySfxOnCollision SfxCol_8;

    [Space()]
    [Tooltip("Sanding progress (0-1, as on the progress bar; the step finishes at 0.8) at which the gargoyle works loose\n" +
             "and falls - while the player is still sanding. The sanding itself carries on unaffected.")]
    public float GargoyleDropAt_8 = .6f;

    IEnumerator Start()
    {
        // PLAYABLE: cover the ForceComplete step-skip so nothing visibly pops/snaps.
        PlayableFadeCover.Cover();

        base.LevelStart();

        UI_Manager.instance.InitializeTools(ToolIcons);

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV, .01f);

        yield return new WaitForSeconds(.1f);

                                                                                                       
                                                                                           

                       

                                                                                    
                                                            

        if (stepsDone > 0)
            UI_Manager.instance.SetProgressIconIndex(stepsDone);

        

        // PLAYABLE: no save resume — same ForceComplete + StartStep as original switch.
        ForceCompleteStep7();
        Invoke(nameof(StartStep8), .5f);
        PlayableFadeCover.Reveal();
        yield break;
}

    #region HELPERS

                                                                                  
                                                                                      
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

    void SaveStep(int steps)
    {
        SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone = steps;
    }

    void StepStartEvent(int step)
    {
    }

    void StepCompleteEvent(int step)
    {
    }

    void ZoomTo(ZoomPos zoom)
    {
        CameraController.Instance.MoveCamera(zoom.CameraPos, zoom.CameraFOV);
    }

                                                                                             
    void ReturnToMain()
    {
        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV, ReturnDuration, Ease.Linear);
    }

                                                                                                                   
                                                                                   
    float AfterShowcase(float minDelay)
    {
        return Mathf.Max(minDelay, ReturnDuration + ShowcaseHold);
    }

                                                                                                   
    void SetCameraFollow(BasicDrag tool, bool state)
    {
        if (tool == null)
            return;

        BD_CameraFollow follow = tool.GetComponent<BD_CameraFollow>();

        if (follow != null)
            follow.enabled = state;
    }

    void SetLayer(GameObject layer, bool state)
    {
        if (layer != null)
            layer.SetActive(state);
    }

    void PlaySfx(AudioClip clip, float delay = 0f)
    { }

                                                                                                      
                           
    void MoveToolIn(BasicDrag tool, float x, GameObject cols, System.Action onArrived = null)
    {
        tool.gameObject.SetActive(true);

        tool.transform.DOKill();
        tool.transform.DOLocalMoveX(x, .6f).SetDelay(1f).SetEase(Ease.OutCubic).OnComplete(() =>
        {
            ToolInputToggle(tool.gameObject, true);

            SetCameraFollow(tool, true);

            SetLayer(cols, true);

            onArrived?.Invoke();
        });
    }

                                                                                                                   
                                   
    void MoveToolOut(BasicDrag tool, GameObject cols, PlaySfxOnCollision sfx)
    {
        SetCameraFollow(tool, false);

        ReturnToMain();

        SetLayer(cols, false);

        if (sfx != null)
            sfx.DisableSfx();

        ToolInputToggle(tool.gameObject, false);

        tool.transform.DOKill();
        tool.transform.DOMoveX(15f, .6f).SetDelay(.4f).SetEase(Ease.InCubic).OnComplete(() =>
        {
            tool.gameObject.SetActive(false);
        });
    }

                                                                                                                  
                                                                                         
    void ShowIndication(GameObject indication, BasicDrag tool)
    { }

                                                                                                              
                                                             
    void SetOutline(GameObject indication, bool state)
    { }

                                                                                                                
                                                                                                                     
                                                                                                           
    void ShowDragHint(GameObject hint, BasicDrag item, System.Func<bool> isPlaced)
    { }

    IEnumerator ReshowDragHint(GameObject hint, BasicDrag item, System.Func<bool> isPlaced)
    { yield break; }

                                                                                  
    void ShowHand(GameObject hand, BasicDrag item)
    {
        if (hand == null)
            return;

        hand.SetActive(true);

        item.OnMouseDownEvent += () => hand.SetActive(false);
    }

                                                                                         
    void RestoreScratches(BasicDrag tool)
    {
        BD_Progress[] progresses = tool.GetComponents<BD_Progress>();

        for (int p = 0; p < progresses.Length; p++)
        {
            for (int i = 0; i < progresses[p].AllScratches.Length; i++)
            {
                progresses[p].AllScratches[i].isComplete = true;

                progresses[p].AllScratches[i].ScratchManager.Card.ClearInstantly();
            }

            progresses[p].isProgDone = true;
        }
    }

                                                                                                          
                                                                                                              
    void OpenCasket(System.Action done)
    { }

                                                                                                                     
                                                                                                   
                                                                           
    void CloseCasket(System.Action done)
    { }

    static Color WithAlpha(Color c, float a)
    {
        c.a = a;
        return c;
    }

    #endregion

    #region STEP 1 - COBWEB

    bool isStep1Done;

    void StartStep1()
    { }

                                                     
    public void Step1Done()
    { }

    bool isCasketOpened;

                                         
    public void CasketTapped_1()
    { }

    void ForceCompleteStep1()
    {
        if (Cobweb_1 != null) Cobweb_1.SetActive(false);
        if (BgWebs_1 != null) BgWebs_1.SetActive(false);

        if (CasketClosed != null) CasketClosed.SetActive(false);
        CasketOpen.SetActive(true);
    }

    #endregion

    #region STEP 2 - SPIDERS

    bool isStep2Done;

    void StartStep2()
    { }

                                                     
    public void SpidersKilled_2()
    { }

    void Step2Done()
    { }

    void ForceCompleteStep2()
    {
        ForceCompleteStep1();

        if (SpiderHolder_2 != null) SpiderHolder_2.SetActive(false);
    }

    #endregion

    #region STEP 3 - VACUUM

    bool isStep3Done;

    void StartStep3()
    { }

                                                     
    public void Step3Done()
    { }

    void ForceCompleteStep3()
    {
        ForceCompleteStep2();

        if (Dust_3 != null) Dust_3.SetActive(false);
    }

    #endregion

    #region STEP 4 - STITCH

    bool isStep4Done;

    void StartStep4()
    { }

                                                         
    public void Step4Done()
    { }

    void ForceCompleteStep4()
    {
        ForceCompleteStep3();

        if (ToolStep4 != null) RestoreScratches(ToolStep4);

        if (Unstitched_4 != null) Unstitched_4.gameObject.SetActive(false);
    }

    #endregion

    #region STEP 5 - STAIN REMOVER

    bool isStep5Done;

    void StartStep5()
    { }

                                                            
    public void Step5Done()
    { }

    void ForceCompleteStep5()
    {
        ForceCompleteStep4();

        for (int i = 0; i < ObjsEnable_5.Length; i++)
            ObjsEnable_5[i].gameObject.SetActive(false);

        for (int i = 0; i < ObjsDisable_5.Length; i++)
            ObjsDisable_5[i].gameObject.SetActive(false);
    }

    #endregion

    #region STEP 6 - PILLOW

    bool isStep6Done;

    void StartStep6()
    { }

    Transform[] pillowBones_6;
    Vector3[] pillowRest_6;

                                                                                                                 
                                                                                                                    
                                             
    void PillowLetGo_6()
    { }

                                                 
    public void Step6Done()
    { }

    void ForceCompleteStep6()
    {
        ForceCompleteStep5();

        if (ToolStep6 != null) ToolStep6.gameObject.SetActive(false);
        PillowSeated_6.SetActive(true);

        if (CasketOpen != null) CasketOpen.SetActive(false);
        CasketClosed.SetActive(true);
    }

    #endregion

    #region STEP 7 - FILLING

    bool isStep7Done;

    void StartStep7()
    { }

                                                           
    public void Step7Done()
    { }

    void ForceCompleteStep7()
    {
        ForceCompleteStep6();

        if (ToolStep7 != null) RestoreScratches(ToolStep7);
    }

    #endregion

    #region STEP 8 - SANDPAPER

    bool isStep8Done;

    void StartStep8()
    {
        if (!TryStartStep(StartStep8, 8))
            return;

        AdvanceProgressIcon();

        StepStartEvent(8);

        ZoomTo(ZoomStep8);

        MoveToolIn(ToolStep8, ToolInX_8, Step8Col);

        StartCoroutine(DropGargoyleWhileSanding_8());
    }

                                                                      
    IEnumerator DropGargoyleWhileSanding_8()
    {
        BD_Progress progress = ToolStep8.GetComponent<BD_Progress>();
        WaitForSeconds wait = new WaitForSeconds(.2f);

        while (!isStep8Done && progress.giveCollectiveProgress() < GargoyleDropAt_8)
            yield return wait;

        { /* [Luna] stripped: DropGargoyle_9(0f); */ }
    }

                                                        
    public void Step8Done()
    {
        if (isStep8Done)
            return;

        isStep8Done = true;

        MoveToolOut(ToolStep8, Step8Col, SfxCol_8);

        SaveStep(8);
        ReturnToMain();
        StepCompleteEvent(8);

        Invoke(nameof(LevelComplete), AfterShowcase(1.2f));
    }

    void ForceCompleteStep8()
    {
        ForceCompleteStep7();

        if (ToolStep8 != null) RestoreScratches(ToolStep8);
    }

    #endregion

    
}
