// [Luna] Adapted for playables by Cross-Project Prefab Importer.
                                                                 
using UnityEngine;
using DG.Tweening;
using System.Collections;
using System.Linq;

                                                                                                          
                                                                                                                  
                          
                                                                                        
                   
                                                                                   
                                                                                                            
                                                                      
                                                                                                  
                                                                  
                                                                                                
                                                                                 
                                                                            
                                                                                                              
                                                                                                             
                                                                                                          
                                
                                                                                                                
                                                                                              
                                                                              
                                                                                                
                                                                                                              
                                                                                                         
                            
                                                                                                             
                                            
  
                                                                                          
                                                                                                                                                                                
                                                                                                                           
                                                                                                          
public class CG_Level4_Dress_Playable_PlayableStep2to6 : LevelData
{
    [Space()]
    [Header("----------------------------------------------------------------------------------")]
    [Space()]
    public ZoomPos MainZoom;

    [Space()]
    public GameObject View1;
    public GameObject View2;
    public GameObject View3;
    public GameObject View4;
    public GameObject View5;

    [Header("----------------- STEP 1 - LOOM ----------------------")]
    [Space()]
    public ZoomPos ZoomStep1;

    [Space()]
    [Tooltip("Step 1 as one animation (shuttle, threads, bar, woven fabric) played while the player drags. Empty = the interactive loom (Loom_1).")]
    public CG_DragPlayAnimation Weave_1;

    public CG_Lvl4_2_Loom Loom_1;
    public GameObject Wire_1;

    [Space()]
    public SpriteRenderer ThreadLoomed_1;
    public SpriteMask LoomMask_1;
    public SpriteRenderer ThreadLines_1;

    [Header("----------------- STEP 2 - UNROLL ----------------------")]
    [Space()]
    public ZoomPos ZoomStep2;

    [Space()]
    public BasicDrag ToolStep2;
    public CG_DragAlongAxis Axis_2;

    [Tooltip("Unroll hint - shown while step 2 waits for the roll to be dragged, hidden while unrolling.")]
    public GameObject Hand_2;

    [Tooltip("Once the roll is this far unrolled (0..1) the hint does not come back.")]
    [Range(0f, 1f)]
    public float HintUntil_2 = 0.1f;

    [Space()]
    public SpriteRenderer Fabric_2;
    public SpriteMask FabricMask_2;

    [Tooltip("The roll getting thinner as it unrolls (full -> empty), shown in turn over the unroll on ToolStep2's sprite.")]
    public Sprite[] RollFrames_2;

    [Header("----------------- STEP 3 - CHALK ----------------------")]
    [Space()]
    public ZoomPos ZoomStep3;

    [Tooltip("Pause at the start of step 3 before the chalk comes in.")]
    public float OutlineDelay_3 = 0.5f;

    [Space()]
    public SpriteRenderer PantsOutline_3;

    [Tooltip("Chalk that marks the trouser outline while the player drags (DragToDraw, with its own hint).")]
    public CG_ChalkTrace Chalk_3;

    [Tooltip("Camera while a chalk marks an outline (steps 3 and 5) - centred on the garment. FOV 0 = the camera stays.")]
    public ZoomPos ZoomChalk;

    [Header("----------------- STEP 4 - SCISSOR ----------------------")]
    [Space()]
    public ZoomPos ZoomStep4;

    [Space()]
    public BasicDrag ToolStep4;

    [Space()]
    public BD_CameraFollow ToolStep4CameraFollow;

    [Space()]
    public SpriteRenderer PantsPiece_4;

    [Tooltip("The square of cloth over the trousers that the scissors break up (Slicer_4) - empty = cutting along the outline (Cut_4).")]
    public SpriteRenderer CutSheet_4;
    public CG_ClothSlicer Slicer_4;
    public CG_ScissorCutFX CutFX_4;

    [Tooltip("Local X the scissors come in to (steps 4 and 6) - their height and angle stay as set.")]
    public float ScissorsInX_Cut = 0.7f;

    [Header("Cutting along the outline instead (when CutSheet_4 is empty)")]
    public CG_PathCut Cut_4;

    [Tooltip("The sheet with the trousers' shape cut out of it - swapped in for the sheet when the cut closes.")]
    public SpriteRenderer FabricOffcut_4;

    [Header("----------------- STEP 5 - CHALK ----------------------")]
    [Space()]
    [Tooltip("The jacket's sheet - slides in at the start of step 5 (the jacket's cut cloth and piece are on it).")]
    public Transform Sheet_5;
    public SpriteRenderer Fabric_5;
    public SpriteRenderer JacketOutline_5;

    [Tooltip("Chalk that marks the jacket outline while the player drags (like step 3).")]
    public CG_ChalkTrace Chalk_5;

    [Header("----------------- STEP 6 - SCISSOR ----------------------")]
    [Space()]
    public ZoomPos ZoomStep6;

    [Space()]
    public BasicDrag ToolStep6;

    [Space()]
    public BD_CameraFollow ToolStep6CameraFollow;

    [Space()]
    public SpriteRenderer JacketPiece_6;

    [Tooltip("The square of cloth over the jacket that the scissors break up (Slicer_6) - empty = cutting along the outline (Cut_6).")]
    public SpriteRenderer CutSheet_6;
    public CG_ClothSlicer Slicer_6;
    public CG_ScissorCutFX CutFX_6;

    [Header("Cutting along the outline instead (when CutSheet_6 is empty)")]
    public CG_PathCut Cut_6;

    [Tooltip("The sheet with the jacket's shape cut out of it - swapped in for the sheet when the cut closes.")]
    public SpriteRenderer FabricOffcut_6;

    IEnumerator Start()
    {
        // PLAYABLE: cover the ForceComplete step-skip so nothing visibly pops/snaps.
        PlayableFadeCover.Cover();

        base.LevelStart();

        CG_DressFabricMotion.Attach(ThreadLines_1, shuttle: Loom_1.Shuttle, bar: Loom_1.Plank.transform);

        { /* [Luna] stripped: PrepareFoldedItems_8(); */ }

        UI_Manager.instance.InitializeTools(ToolIcons);

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV, .01f);

        yield return new WaitForSeconds(.1f);

                                                                                                       
                                                                                                

                       

                                                                                    
                                                            

        if (stepsDone > 0)
            UI_Manager.instance.SetProgressIconIndex(stepsDone);

        

        // PLAYABLE: no save resume — same ForceComplete + StartStep as original switch.
        ForceCompleteStep1();
        Invoke(nameof(StartStep2), .5f);
        PlayableFadeCover.Reveal();
        yield break;
}

    void Update()
    {
        { /* [Luna] stripped: UpdateSewing_7(); */ }

        { /* [Luna] stripped: UpdateZipLoops(); */ }

                                                                                                               
                                            
        bool unrolling_2 = Axis_2.Progress >= HintUntil_2;

        if (unrolling_2 && Hand_2 != null && Hand_2.activeSelf)
            Hand_2.SetActive(false);

        UpdateDragHint(Hand_2, Axis_2, ToolStep2, isStep2Done || unrolling_2);
    }

    void UpdateDragHint(GameObject hint, CG_DragAlongAxis axis, BasicDrag tool, bool stepDone)
    {
        if (hint == null || !axis.enabled || stepDone)
            return;

        bool show = !tool.isDragging;

        if (hint.activeSelf != show)
            hint.SetActive(show);
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

                                                                                          
    void SilenceStep(params AudioSource[] sources)
    {
        foreach (var source in sources)
        {
            if (source == null)
                continue;

            source.Stop();
            source.enabled = false;
        }
    }

                                                                      
    void SilenceCut(CG_ClothSlicer slicer)
    {
        if (slicer == null)
            return;

        SilenceStep(slicer.CutSource, slicer.SlashDriver != null ? slicer.SlashDriver.Feedback.Source : null);
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

    void ShowView(GameObject view)
    {
        View1.SetActive(view == View1);
        View2.SetActive(view == View2);
        View3.SetActive(view == View3);
        View4.SetActive(view == View4);
        View5.SetActive(view == View5);
    }

                                                                       
    void ChangeView(GameObject view, ZoomPos zoom, System.Action next)
    { }

                                                                                                   
                                                                   
    public static void FillMask(SpriteMask mask, SpriteRenderer target, float fill, bool fromTop)
    {
        if (mask == null || target == null || mask.sprite == null)
            return;

        Bounds b = target.bounds;
        Vector2 spriteSize = mask.sprite.bounds.size;
        Vector3 parentScale = mask.transform.parent != null ? mask.transform.parent.lossyScale : Vector3.one;

        float h = Mathf.Max(b.size.y * Mathf.Clamp01(fill), 0.0001f);

        mask.transform.localScale = new Vector3(
            b.size.x / (spriteSize.x * parentScale.x),
            h / (spriteSize.y * parentScale.y),
            1f);

        float y = fromTop ? b.max.y - h / 2f : b.min.y + h / 2f;

        mask.transform.position = new Vector3(b.center.x, y, mask.transform.position.z);
    }

    void SetAlpha(SpriteRenderer sr, float a)
    {
        if (sr == null)
            return;

                                                                                               
        if (a > 0f)
            sr.gameObject.SetActive(true);

        sr.DOKill();

        Color c = sr.color;
        c.a = a;
        sr.color = c;
    }

    void Fade(SpriteRenderer sr, float a, float duration)
    {
        if (sr == null)
            return;

        sr.gameObject.SetActive(true);
        sr.DOKill();
        sr.DOFade(a, duration);
    }

                                                                                                             
                                                                                                       
    void SeparatePiece(SpriteRenderer sheet, SpriteRenderer offcut, SpriteRenderer piece, SpriteRenderer outline, CG_PathCut cut)
    {
        sheet.gameObject.SetActive(false);

        SetAlpha(piece, 1f);
        Fade(outline, 0f, .25f);

        if (cut != null && cut.CutTrail != null)
            cut.CutTrail.gameObject.SetActive(false);

        piece.transform.DOKill();
        piece.transform.DOPunchScale(piece.transform.localScale * .04f, .35f, 6, .5f);

        if (offcut == null)
            return;

        offcut.gameObject.SetActive(true);
        SetAlpha(offcut, 1f);

        offcut.transform.DOKill();
        offcut.transform.DOMove(offcut.transform.position + new Vector3(-.35f, -.9f, 0f), .9f).SetDelay(.25f).SetEase(Ease.InCubic);
        offcut.DOFade(0f, .5f).SetDelay(.65f).OnComplete(() =>
        {
            offcut.gameObject.SetActive(false);
        });
    }

    void MoveToolIn(BasicDrag tool, float x, System.Action onArrived)
    {
        tool.gameObject.SetActive(true);

        tool.transform.DOKill();
        tool.transform.DOLocalMoveX(x, .5f).SetDelay(1f).OnComplete(() =>
        {
            ToolInputToggle(tool.gameObject, true);

            onArrived?.Invoke();
        });
    }

    void MoveToolOut(BasicDrag tool)
    {
        ToolInputToggle(tool.gameObject, false);

        tool.transform.DOKill();
        tool.transform.DOLocalMoveX(-10f, 1f).SetDelay(.25f).OnComplete(() =>
        {
            tool.gameObject.SetActive(false);
        });
    }

    #endregion

    #region STEP 1 - LOOM

    bool isStep1Done;

    void StartStep1()
    { }

                                                     
    public void Step1Done()
    { }

    void ForceCompleteStep1()
    {
        if (Wire_1 != null) Wire_1.SetActive(false);

                                                                                                      
        if (Weave_1 != null)
            Weave_1.ShowEnd();
        else
            FillMask(LoomMask_1, ThreadLoomed_1, Loom_1.FinalFill, true);

        ShowView(View2);
    }

    #endregion

    #region STEP 2 - UNROLL

    bool isStep2Done;

    void StartStep2()
    {
        if (!TryStartStep(StartStep2, 2))
            return;

        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep2.CameraPos, ZoomStep2.CameraFOV);

        SetRollFrame_2(0f);

        Axis_2.OneWay = true;

        DOVirtual.DelayedCall(1f, () =>
        {
            ToolInputToggle(ToolStep2.gameObject, true);

            Axis_2.enabled = true;
        });
    }

                                  
    public void UnrollProgress_2(float progress)
    {
        FillMask(FabricMask_2, Fabric_2, progress, true);

        SetRollFrame_2(progress);
    }

                                                                                                          
    void SetRollFrame_2(float progress)
    {
        if (RollFrames_2 == null || RollFrames_2.Length == 0)
            return;

        int frame = Mathf.Clamp(Mathf.FloorToInt(progress * RollFrames_2.Length), 0, RollFrames_2.Length - 1);
        var sr = ToolStep2.GetComponent<SpriteRenderer>();

        if (sr != null && sr.sprite != RollFrames_2[frame])
            sr.sprite = RollFrames_2[frame];
    }

    public void Step2Done()
    {
        if (isStep2Done)
            return;

        isStep2Done = true;

        SilenceStep(Axis_2.Feedback.Source);

        ToolInputToggle(ToolStep2.gameObject, false);
        Axis_2.enabled = false;

        if (Hand_2 != null)
            Hand_2.SetActive(false);

        Fabric_2.maskInteraction = SpriteMaskInteraction.None;

        ToolStep2.transform.DOKill();
        ToolStep2.transform.DOLocalMoveY(ToolStep2.transform.localPosition.y - 4f, .6f).SetDelay(.2f).SetEase(Ease.InBack).OnComplete(() =>
        {
            ToolStep2.gameObject.SetActive(false);
        });

        SaveStep(2);

        StepCompleteEvent(2);

        Invoke(nameof(StartStep3), 1.2f);
    }

    void ForceCompleteStep2()
    {
        ForceCompleteStep1();

        Fabric_2.maskInteraction = SpriteMaskInteraction.None;
        if (ToolStep2 != null) ToolStep2.gameObject.SetActive(false);
    }

    #endregion

    #region STEP 3 - CHALK (TROUSERS)

    bool isStep3Done;

    void StartStep3()
    {
        if (!TryStartStep(StartStep3, 3))
            return;

        AdvanceProgressIcon();

        MoveCameraToChalk();

                                                                                                        
                                                                         
        PantsOutline_3.gameObject.SetActive(true);
        PantsOutline_3.DOKill();
        SetAlpha(PantsOutline_3, 1f);
        PantsOutline_3.maskInteraction = SpriteMaskInteraction.VisibleInsideMask;

        Chalk_3.OnComplete.AddListener(Step3Done);
        DOVirtual.DelayedCall(OutlineDelay_3, Chalk_3.Play);
    }

                                                                 
    public void Step3Done()
    {
        if (isStep3Done)
            return;

        isStep3Done = true;

        Chalk_3.OnComplete.RemoveListener(Step3Done);

        SilenceStep(Chalk_3.Feedback.Source);

        SaveStep(3);

        StepCompleteEvent(3);

        Invoke(nameof(StartStep4), .4f);
    }

    void ForceCompleteStep3()
    {
        ForceCompleteStep2();

        SetAlpha(PantsOutline_3, 1f);
        Chalk_3.ShowAll();
    }

    #endregion

    #region STEP 4 - SCISSOR (TROUSERS)

    bool isStep4Done;

    void StartStep4()
    {
        if (!TryStartStep(StartStep4, 4))
            return;

        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep4.CameraPos, ZoomStep4.CameraFOV);

        if (CutSheet_4 != null)
        {
            ToolStep4CameraFollow.enabled = true;

            BeginFreeCut(Fabric_2, CutSheet_4, Slicer_4, PantsPiece_4, ToolStep4);

            return;
        }

                                                                                       
        DOVirtual.DelayedCall(.8f, () =>
        {
            Cut_4.Begin();
        });
    }

                                                                                                           
                                                                                                       
    void BeginFreeCut(SpriteRenderer sheet, SpriteRenderer cutSheet, CG_ClothSlicer slicer, SpriteRenderer piece, BasicDrag scissors)
    {
        sheet.gameObject.SetActive(false);

        cutSheet.gameObject.SetActive(true);
        SetAlpha(cutSheet, 1f);

        piece.gameObject.SetActive(true);
        SetAlpha(piece, 1f);

        if (slicer != null && slicer.SlashDriver != null)
        {
            scissors.gameObject.SetActive(true);
            scissors.canDrag = false;
            scissors.enabled = false;
            var collider = scissors.GetComponent<Collider2D>();
            if (collider != null) collider.enabled = false;
            var follow = scissors.GetComponent<BD_CameraFollow>();
            if (follow != null) follow.enabled = false;
            slicer.SlashDriver.Play();
            return;
        }

        if (slicer != null)
            slicer.Begin();

                                                                                                         
        MoveToolIn(scissors, ScissorsInX_Cut, null);
    }

                                                                                                                  
    void EndFreeCut(SpriteRenderer cutSheet, SpriteRenderer outline)
    {
        cutSheet.gameObject.SetActive(false);

        if (outline != null)
        {
            outline.DOKill();
            outline.DOFade(0f, .4f).OnComplete(() => outline.gameObject.SetActive(false));
        }
    }

                                                                             
    public void Step4Done()
    {
        if (isStep4Done)
            return;

        isStep4Done = true;

        SilenceCut(Slicer_4);

        ToolStep4CameraFollow.enabled = false;

        if (Slicer_4 != null && Slicer_4.SlashDriver != null)
            ToolStep4.gameObject.SetActive(false);
        else
            MoveToolOut(ToolStep4);

        if (CutSheet_4 != null)
            EndFreeCut(CutSheet_4, PantsOutline_3);
        else
                                                                                                             
            SeparatePiece(Fabric_2, FabricOffcut_4, PantsPiece_4, PantsOutline_3, Cut_4);

        SaveStep(4);

        StepCompleteEvent(4);

        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);

        Invoke(nameof(StartStep5), 1.2f);
    }

    void ForceCompleteStep4()
    {
        ForceCompleteStep3();

        if (ToolStep4 != null) ToolStep4.gameObject.SetActive(false);

        if (Fabric_2 != null) Fabric_2.gameObject.SetActive(false);
        if (PantsOutline_3 != null) PantsOutline_3.gameObject.SetActive(false);
        SetAlpha(PantsPiece_4, 1f);

        if (FabricOffcut_4 != null)
            if (FabricOffcut_4 != null) FabricOffcut_4.gameObject.SetActive(false);

        if (Cut_4.CutTrail != null)
            Cut_4.CutTrail.gameObject.SetActive(false);

        if (CutSheet_4 != null)
            if (CutSheet_4 != null) CutSheet_4.gameObject.SetActive(false);
    }

    #endregion

    #region STEP 5 - CHALK (JACKET)

    bool isStep6Done;
    bool isStep5Done;

    void StartStep5()
    {
        if (!TryStartStep(StartStep5, 5))
            return;

        AdvanceProgressIcon();

                                                                   
        PantsPiece_4.transform.DOKill();
        PantsPiece_4.transform.DOMoveX(PantsPiece_4.transform.position.x - 6f, .8f).SetEase(Ease.InBack).OnComplete(() =>
        {
            PantsPiece_4.gameObject.SetActive(false);
        });

        Vector3 sheetPos = Sheet_5.localPosition;

        Sheet_5.gameObject.SetActive(true);
        Sheet_5.localPosition = sheetPos + Vector3.right * 6f;
        Sheet_5.DOKill();
        Sheet_5.DOLocalMove(sheetPos, .8f).SetDelay(.5f).SetEase(Ease.OutBack).OnComplete(() =>
        {
                                                                                       
            DOVirtual.DelayedCall(.1f, Chalk_5.Play, false);
        });

        MoveCameraToChalk();

                                                                                                     
                                                                                               
        SetAlpha(JacketOutline_5, 1f);
        JacketOutline_5.maskInteraction = SpriteMaskInteraction.VisibleInsideMask;

        Chalk_5.OnComplete.AddListener(Step5Done);
    }

    void MoveCameraToChalk()
    {
        if (ZoomChalk != null && ZoomChalk.CameraFOV > 0f)
            CameraController.Instance.MoveCamera(ZoomChalk.CameraPos, ZoomChalk.CameraFOV);
    }

                                                                                         
    void Step5Done()
    {
        if (isStep5Done)
            return;

        isStep5Done = true;

        Chalk_5.OnComplete.RemoveListener(Step5Done);

        SilenceStep(Chalk_5.Feedback.Source);

        SaveStep(5);

        StepCompleteEvent(5);

        Invoke(nameof(StartStep6), .6f);
    }

                                                                   
    void ForceCompleteStep5()
    {
        ForceCompleteStep4();

        if (PantsPiece_4 != null) PantsPiece_4.gameObject.SetActive(false);
        Sheet_5.gameObject.SetActive(true);

        SetAlpha(JacketOutline_5, 1f);

        Chalk_5.ShowAll();
    }

    #endregion

    #region STEP 6 - SCISSOR (JACKET)

    void StartStep6()
    {
        if (!TryStartStep(StartStep6, 6))
            return;

        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV);

        BeginCut_6();

        ToolStep6CameraFollow.enabled = Slicer_6 == null || Slicer_6.SlashDriver == null;
    }

    void BeginCut_6()
    {
        if (CutSheet_6 != null)
            BeginFreeCut(Fabric_5, CutSheet_6, Slicer_6, JacketPiece_6, ToolStep6);
        else
            Cut_6.Begin();
    }

                                                                             
    public void Step6Done()
    {
        if (isStep6Done)
            return;

        isStep6Done = true;

        SilenceCut(Slicer_6);

        ToolStep6CameraFollow.enabled = false;

        if (Slicer_6 != null && Slicer_6.SlashDriver != null)
            ToolStep6.gameObject.SetActive(false);
        else
            MoveToolOut(ToolStep6);

        if (CutSheet_6 != null)
            EndFreeCut(CutSheet_6, JacketOutline_5);
        else
            SeparatePiece(Fabric_5, FabricOffcut_6, JacketPiece_6, JacketOutline_5, Cut_6);

        SaveStep(6);

        StepCompleteEvent(6);

        CameraController.Instance.MoveCamera(ZoomStep6.CameraPos, ZoomStep6.CameraFOV);

        Invoke(nameof(LevelComplete), 1f);
    }

                                             
    void ForceCompleteStep6()
    {
        ForceCompleteStep5();

        ShowView(View3);

        if (ToolStep6 != null) ToolStep6.gameObject.SetActive(false);

        if (CutSheet_6 != null)
            if (CutSheet_6 != null) CutSheet_6.gameObject.SetActive(false);
    }

    #endregion

    
}
