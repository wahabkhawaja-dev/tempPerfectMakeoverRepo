// [Luna] Adapted for playables by Cross-Project Prefab Importer.
                                                                 
using UnityEngine;
using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.Rendering;

                                                                                     
                                                                                                  
                                                                                                          
                                                                          
                                                                            
                                                                      
                                                                      
                                                                              
                                                                                                                  
                                                                  
                                                                                                           
                                                                                                               
                                                     
  
                                                                                                       
                                                                                                                
                                                                                     
public class CG_Level4_Casket_Playable_PlayableStep8 : LevelData
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
    {
        if (clip != null)
            AudioController.instance.PlayAnySfx(1, clip, delay);
    }

                                                                                                      
                           
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
    {
        if (indication == null)
            return;

        SetOutline(indication, true);

        BD_Progress progress = tool != null ? tool.GetComponent<BD_Progress>() : null;

        if (progress != null)
            progress.SubCompleteEvent += () => SetOutline(indication, false);
    }

                                                                                                              
                                                             
    void SetOutline(GameObject indication, bool state)
    {
        if (indication == null || indication.activeSelf == state)
            return;

        indication.SetActive(state);

        if (!state)
            return;

        foreach (SpriteRenderer ring in indication.GetComponentsInChildren<SpriteRenderer>())
        {
            bool fadesItself = false;

            foreach (DOTweenAnimation anim in ring.GetComponents<DOTweenAnimation>())
                fadesItself |= anim.animationType == DOTweenAnimation.AnimationType.Fade;

            if (fadesItself)
                continue;

            float a = ring.color.a;

            ring.DOKill();
            ring.color = WithAlpha(ring.color, 0f);
            ring.DOFade(a, .35f).SetEase(Ease.OutSine);
        }
    }

                                                                                                                
                                                                                                                     
                                                                                                           
    void ShowDragHint(GameObject hint, BasicDrag item, System.Func<bool> isPlaced)
    {
        if (hint == null)
            return;

        hint.SetActive(true);

        Coroutine reshow = null;

        item.OnMouseDownEvent += () =>
        {
            if (reshow != null)
                StopCoroutine(reshow);

            reshow = null;

            hint.SetActive(false);
        };

        item.OnMouseUpEvent += () =>
        {
            if (reshow != null)
                StopCoroutine(reshow);

            reshow = StartCoroutine(ReshowDragHint(hint, item, isPlaced));
        };
    }

    IEnumerator ReshowDragHint(GameObject hint, BasicDrag item, System.Func<bool> isPlaced)
    {
                                                                                   
        while (item.isDragging || DOTween.IsTweening(item.transform))
            yield return null;

        yield return new WaitForSeconds(HintReshowDelay);

        if (!isPlaced() && !item.isDragging)
            hint.SetActive(true);
    }

                                                                                  
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
    {
        PlaySfx(LidOpenClip);

        {                                                                   }

        SortingGroup closedGroup = CasketClosed.GetComponent<SortingGroup>();
        CasketOpen.GetComponent<SortingGroup>().sortingOrder = closedGroup.sortingOrder + 1;

        CasketOpen.SetActive(true);

                                                                      
        Animator[] walkers = SpiderHolder_2.GetComponentsInChildren<Animator>();

        for (int i = 0; i < walkers.Length; i++)
            walkers[i].Play(0, 0, (i * .37f) % 1f);

        foreach (SpriteRenderer sr in CasketOpen.GetComponentsInChildren<SpriteRenderer>())
        {
            float a = sr.color.a;

            sr.DOKill();
            sr.color = WithAlpha(sr.color, 0f);
            sr.DOFade(a, LidFadeDuration).SetEase(Ease.InOutSine);
        }

        DOVirtual.DelayedCall(LidFadeDuration, () =>
        {
            CasketClosed.SetActive(false);

            done?.Invoke();
        });
    }

                                                                                                                     
                                                                                                   
                                                                           
    void CloseCasket(System.Action done)
    {
        CasketOpen.SetActive(false);

        CasketClosed.transform.localScale = Vector3.one;
        CasketClosed.SetActive(true);

        PlaySfx(LidCloseClip);

                                                                                                                  
        {                                                                                                                   }
        DOVirtual.DelayedCall(.12f, () => {                                                                                                                   });
        DOVirtual.DelayedCall(.3f, () => {                                                                                                                 });

                                                                                                                     
                                                                        
        CameraController.Instance.cam.transform.DOShakePosition(LidRumbleDuration,
            new Vector3(LidRumbleStrength * .4f, LidRumbleStrength, 0f), 5, 20f, false, true);

        if (OpenDustPuffs_1 != null)
        {
            for (int i = 0; i < OpenDustPuffs_1.Length; i++)
            {
                if (OpenDustPuffs_1[i] != null)
                {
                    OpenDustPuffs_1[i].gameObject.SetActive(true);
                    OpenDustPuffs_1[i].Play();
                }
            }
        }

        DOVirtual.DelayedCall(LidSettleDuration, () => done?.Invoke());
    }

    static Color WithAlpha(Color c, float a)
    {
        c.a = a;
        return c;
    }

    #endregion

    #region STEP 1 - COBWEB

    bool isStep1Done;

    void StartStep1()
    {
        if (!TryStartStep(StartStep1, 1))
            return;

        ZoomTo(ZoomStep1);

        MoveToolIn(ToolStep1, ToolInX_1, Step1Col);
    }

                                                     
    public void Step1Done()
    {
        if (isStep1Done)
            return;

        isStep1Done = true;

        MoveToolOut(ToolStep1, Step1Col, SfxCol_1);

        StepCompleteEvent(1);

                                                                             
        DOVirtual.DelayedCall(1.2f, () =>
        {
            CasketOutline_1.EnableAnim();

            CasketTap_1.SetActive(true);
            Hand_1.SetActive(true);
        });
    }

    bool isCasketOpened;

                                         
    public void CasketTapped_1()
    {
        if (isCasketOpened)
            return;

        isCasketOpened = true;

        CasketOutline_1.DisableAnim();

        CasketTap_1.SetActive(false);
        Hand_1.SetActive(false);

                                                                         
        DOVirtual.DelayedCall(OpenDustDelay_1, () =>
        {
            if (OpenDustPuffs_1 == null)
                return;

            for (int i = 0; i < OpenDustPuffs_1.Length; i++)
            {
                if (OpenDustPuffs_1[i] != null)
                {
                    OpenDustPuffs_1[i].gameObject.SetActive(true);
                    OpenDustPuffs_1[i].Play();
                }
            }
        });

        OpenCasket(() =>
        {
            ReturnToMain();
            SaveStep(1);

            { PlayableFadeCover.Cover(); ForceCompleteStep7(); Invoke(nameof(StartStep8), AfterShowcase(.8f)); PlayableFadeCover.Reveal(); }
        });
    }

    void ForceCompleteStep1()
    {
        Cobweb_1.SetActive(false);
        BgWebs_1.SetActive(false);

        CasketClosed.SetActive(false);
        CasketOpen.SetActive(true);
    }

    #endregion

    #region STEP 2 - SPIDERS

    bool isStep2Done;

    void StartStep2()
    {
        if (!TryStartStep(StartStep2, 2))
            return;

        AdvanceProgressIcon();

        StepStartEvent(2);

        ZoomTo(ZoomStep2);

                                                                                                       
        for (int i = 0; i < AllSpiders_2.Length; i++)
            AllSpiders_2[i].EnableAnim();

        MoveToolIn(ToolStep2, ToolInX_2, null);
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

        MoveToolOut(ToolStep2, null, null);

        SaveStep(2);

        StepCompleteEvent(2);
        ReturnToMain();
        { PlayableFadeCover.Cover(); ForceCompleteStep7(); Invoke(nameof(StartStep8), AfterShowcase(1.2f)); PlayableFadeCover.Reveal(); }
    }

    void ForceCompleteStep2()
    {
        ForceCompleteStep1();

        SpiderHolder_2.SetActive(false);
    }

    #endregion

    #region STEP 3 - VACUUM

    bool isStep3Done;

    void StartStep3()
    {
        if (!TryStartStep(StartStep3, 3))
            return;

        AdvanceProgressIcon();

        StepStartEvent(3);

        ZoomTo(ZoomStep3);

        MoveToolIn(ToolStep3, ToolInX_3, Step3Col);
    }

                                                     
    public void Step3Done()
    {
        if (isStep3Done)
            return;

        isStep3Done = true;

        MoveToolOut(ToolStep3, Step3Col, null);

        SaveStep(3);
        ReturnToMain();
        StepCompleteEvent(3);

        { PlayableFadeCover.Cover(); ForceCompleteStep7(); Invoke(nameof(StartStep8), AfterShowcase(1.2f)); PlayableFadeCover.Reveal(); }
    }

    void ForceCompleteStep3()
    {
        ForceCompleteStep2();

        Dust_3.SetActive(false);
    }

    #endregion

    #region STEP 4 - STITCH

    bool isStep4Done;

    void StartStep4()
    {
        if (!TryStartStep(StartStep4, 4))
            return;

        AdvanceProgressIcon();

        StepStartEvent(4);

        ZoomTo(ZoomStep4);

        MoveToolIn(ToolStep4, ToolInX_4, Step4Col, () => ShowIndication(Indication_4, ToolStep4));
    }

                                                         
    public void Step4Done()
    {
        if (isStep4Done)
            return;

        isStep4Done = true;

        SetOutline(Indication_4, false);

        MoveToolOut(ToolStep4, Step4Col, SfxCol_4);

                                                    
        Unstitched_4.DOKill();
        Unstitched_4.DOFade(0f, .8f).OnComplete(() => Unstitched_4.gameObject.SetActive(false));

        SaveStep(4);

        StepCompleteEvent(4);
        ReturnToMain();
        { PlayableFadeCover.Cover(); ForceCompleteStep7(); Invoke(nameof(StartStep8), AfterShowcase(1.2f)); PlayableFadeCover.Reveal(); }
    }

    void ForceCompleteStep4()
    {
        ForceCompleteStep3();

        RestoreScratches(ToolStep4);

        Unstitched_4.gameObject.SetActive(false);
    }

    #endregion

    #region STEP 5 - STAIN REMOVER

    bool isStep5Done;

    void StartStep5()
    {
        if (!TryStartStep(StartStep5, 5))
            return;

        AdvanceProgressIcon();

        StepStartEvent(5);

        ZoomTo(ZoomStep5);

        MoveToolIn(ToolStep5, ToolInX_5, null, () => ShowIndication(Indication_5, ToolStep5));
    }

                                                            
    public void Step5Done()
    {
        if (isStep5Done)
            return;

        isStep5Done = true;

        SetOutline(Indication_5, false);

        MoveToolOut(ToolStep5, null, null);

                                                                                                
        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.ShowClockProgress(3.5f);

            for (int i = 0; i < ObjsEnable_5.Length; i++)
            {
                ObjsEnable_5[i].gameObject.SetActive(true);
                ObjsEnable_5[i].DOKill();
                ObjsEnable_5[i].DOFade(1f, 2f);
            }

            DOVirtual.DelayedCall(1.5f, () =>
            {
                for (int i = 0; i < ObjsDisable_5.Length; i++)
                {
                    ObjsDisable_5[i].DOKill();
                    ObjsDisable_5[i].DOFade(0f, .8f);
                }
            });

            DOVirtual.DelayedCall(2.4f, () =>
            {
                for (int i = 0; i < ObjsEnable_5.Length; i++)
                {
                    ObjsEnable_5[i].DOKill();
                    ObjsEnable_5[i].DOFade(0f, 1f);
                }

                if (CleanSparkle_5 != null)
                    CleanSparkle_5.Play();
            });

            SaveStep(5);

            { PlayableFadeCover.Cover(); ForceCompleteStep7(); Invoke(nameof(StartStep8), AfterShowcase(3.7f)); PlayableFadeCover.Reveal(); }
        });
        ReturnToMain();
        StepCompleteEvent(5);
    }

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
    {
        if (!TryStartStep(StartStep6, 6))
            return;

        AdvanceProgressIcon();

        StepStartEvent(6);

        ZoomTo(ZoomStep6);

                                                                                                
        pillowBones_6 = System.Linq.Enumerable.ToArray(System.Linq.Enumerable.Skip(ToolStep6.GetComponentsInChildren<Transform>(true), 1));
        pillowRest_6 = new Vector3[pillowBones_6.Length];

        for (int i = 0; i < pillowBones_6.Length; i++)
            pillowRest_6[i] = pillowBones_6[i].localPosition;

        ToolStep6.OnMouseUpEvent += PillowLetGo_6;

        MoveToolIn(ToolStep6, ToolInX_6, PillowDetect_6, () =>
        {
                                                                                            
            if (CleanSparkle_5 != null)
                CleanSparkle_5.Stop(true, ParticleSystemStopBehavior.StopEmitting);

            ShowDragHint(Indication_6, ToolStep6, () => isStep6Done);
        });
    }

    Transform[] pillowBones_6;
    Vector3[] pillowRest_6;

                                                                                                                 
                                                                                                                    
                                             
    void PillowLetGo_6()
    {
        if (!ToolStep6.isPlacedCannotMove)
            return;

        ToolStep6.OnMouseUpEvent -= PillowLetGo_6;

        if (ToolStep6.anim != null)
            ToolStep6.anim.enabled = false;

        for (int i = 0; i < pillowBones_6.Length; i++)
        {
            pillowBones_6[i].DOKill();
            pillowBones_6[i].DOLocalMove(pillowRest_6[i], .45f).SetEase(Ease.OutSine);
        }
    }

                                                 
    public void Step6Done()
    {
        if (isStep6Done)
            return;

        isStep6Done = true;

        SetLayer(Hand_6, false);
        SetOutline(Indication_6, false);
        SetLayer(PillowDetect_6, false);

                                                                                                       
        foreach (SpriteRenderer layer in PillowSeated_6.GetComponentsInChildren<SpriteRenderer>(true))
        {
            if (layer.name == "Pillow")
                continue;

            float a = layer.color.a;

            layer.DOKill();
            layer.color = WithAlpha(layer.color, 0f);
            layer.DOFade(a, .4f).SetEase(Ease.OutSine);
        }

        {                                                                     }

        UI_Manager.instance.SetProgressBar(1f);

        StepCompleteEvent(6);

                                               
        DOVirtual.DelayedCall(1.4f, () =>
        {
                                                                                                               
                                                                                 
            CloseCasket(() =>
            {
                SaveStep(6);

                DOVirtual.DelayedCall(CloseZoomOutDelay, () =>
                {
                    ReturnToMain();
                    { PlayableFadeCover.Cover(); ForceCompleteStep7(); Invoke(nameof(StartStep8), AfterShowcase(ReturnDuration)); PlayableFadeCover.Reveal(); }
                });
            });
        });
    }

    void ForceCompleteStep6()
    {
        ForceCompleteStep5();

        ToolStep6.gameObject.SetActive(false);
        PillowSeated_6.SetActive(true);

        CasketOpen.SetActive(false);
        CasketClosed.SetActive(true);
    }

    #endregion

    #region STEP 7 - FILLING

    bool isStep7Done;

    void StartStep7()
    {
        if (!TryStartStep(StartStep7, 7))
            return;

        AdvanceProgressIcon();

        StepStartEvent(7);

        ZoomTo(ZoomStep7);

                                      
        Bucket_7.gameObject.SetActive(true);
        Bucket_7.DOKill();
        Bucket_7.DOLocalMoveX(BucketInX_7, .5f).SetDelay(.5f).SetEase(Ease.OutCubic);

                                                                                                            
                                                               
        ToolStep7.gameObject.SetActive(true);

        Transform knife = ToolStep7.transform;

        knife.DOKill();
        knife.DOLocalMoveX(ToolInX_7, .6f).SetDelay(1f).SetEase(Ease.OutCubic).OnComplete(() =>
        {
            Vector3 restPos = knife.position;

            knife.DORotateQuaternion(DipTop_7.rotation, .5f).SetDelay(.2f).SetEase(Ease.InOutSine);
            knife.DOMove(DipTop_7.position, .5f).SetDelay(.2f).SetEase(Ease.InOutSine).OnComplete(() =>
            {
                PlaySfx(DipClip_7, .1f);
                PlaySfx(DipClip_7, .5f);
                PlaySfx(DipClip_7, .9f);

                {                                                                    }

                Paste_7.DOKill();
                Paste_7.DOFade(1f, 1f);

                knife.DOMove(DipBottom_7.position, .2f).SetLoops(6, LoopType.Yoyo).SetEase(Ease.InOutSine).OnComplete(() =>
                {
                    Bucket_7.DOKill();
                    Bucket_7.DOMoveX(Bucket_7.position.x - 8f, .6f).SetEase(Ease.InCubic).OnComplete(() => Bucket_7.gameObject.SetActive(false));

                    knife.DORotateQuaternion(Quaternion.Euler(0f, 0f, WorkRotZ_7), .5f).SetEase(Ease.InOutSine);
                    knife.DOMove(restPos, .5f).SetEase(Ease.InOutSine).OnComplete(() =>
                    {
                        ToolInputToggle(ToolStep7.gameObject, true);

                        SetCameraFollow(ToolStep7, true);

                        SetLayer(Step7Col, true);

                        ShowIndication(Indication_7, ToolStep7);
                    });
                });
            });
        });
    }

                                                           
    public void Step7Done()
    {
        if (isStep7Done)
            return;

        isStep7Done = true;

        SetOutline(Indication_7, false);

        MoveToolOut(ToolStep7, Step7Col, SfxCol_7);

        SaveStep(7);
        ReturnToMain();
        StepCompleteEvent(7);

        Invoke(nameof(StartStep8), AfterShowcase(1.2f));
    }

    void ForceCompleteStep7()
    {
        ForceCompleteStep6();

        RestoreScratches(ToolStep7);
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

        RestoreScratches(ToolStep8);
    }

    #endregion

    
}
