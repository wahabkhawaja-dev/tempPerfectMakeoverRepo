// [Luna] Adapted for playables by Cross-Project Prefab Importer.
using UnityEngine;
using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine.Rendering;

// Dracula 3 - Casket (Level4_3), built from casket/mockups 8-19 by CG_Build_Level4_3
//   View 1 (castle hall, one view at the mockups' framing - the casket opens and closes in place)
//     Step 1 - Cobweb: the duster erases the cobweb/dust coat; tap the casket (green outline) and the lid
//              opens on the dirty inside in a puff of dust and web (8-10)
//     Step 2 - Spiders: insect spray kills the spiders crawling inside (10)
//     Step 3 - Dust: the blower blows the dust off the lining (11-12)
//     Step 4 - Stitch: the sewing gun stitches the torn cushions (13)
//     Step 5 - Stain remover: spray the stains, they soak in and fade (14-15)
//     Step 6 - Pillow: drag the pillow into the casket; the door folds shut and the lid lays over the box (16-17)
//     Step 7 - Filling: the filler knife fills the cracks (17-18)
//     Step 8 - Sandpaper: sanding brings the wood back to the finished casket around the old gargoyle (19)
//     Step 9 - Gargoyle: the gargoyle drops off onto the floor; drag it up and it settles upright into its new
//              place on the lid; level complete (19)
//
// Prefab wiring: steps 1/3/4/5/7/8 report through each tool's CG_BD_Progress.OnScratchComplete; step 2
// through the spray tip's CG_Lvl3_InsectKill.OnComplete; step 6 through CG_Lvl3_PlaceItem.OnComplete; step 9 is
// the gargoyle's own drop check (GargoyleReleased_9) on CG_BasicDrag.OnMouseUpEvent.
public class CG_Level4_Casket : LevelData
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

    [Header("----------------- STEP 9 ----------------------")]
    [Space()]
    public ZoomPos ZoomStep9;

    [Space()]
    [Tooltip("The old gargoyle - it sits on the lid over the filling / sanding layers, drops to the floor and is dragged up.")]
    public BasicDrag ToolStep9;
    public float FloorY_9 = -3f;
    public AudioClip FallClip_9;
    public ParticleSystem FallDust_9;

    [Space()]
    [Tooltip("Where the dragged gargoyle settles: its upright pose matching the finished emblem (Gargoyle Placed).")]
    public Vector3 FitPos_9;
    public float FitRotZ_9;
    [Tooltip("Turns the gargoyle toward FitRotZ_9 as it is dragged up to FitPos_9 (on after the fall, off on release).")]
    public CG_BD_ToolRotateToTarget Rotate_9;
    [Tooltip("Released within this distance of FitPos_9 it glides into place.")]
    public float DropRadius_9 = 1f;
    public AudioClip PlaceClip_9;

    [Space()]
    public GameObject GargoylePlaced_9;
    public GameObject Indication_9;
    public GameObject Hand_9;

    [Space()]
    public ParticleSystem Sparkle_9;

    IEnumerator Start()
    {
        base.LevelStart();

        UI_Manager.instance.InitializeTools(ToolIcons);

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV, .01f);

        yield return new WaitForSeconds(.1f);

        // Every object's start-of-level state (lid shut under the cobweb coat, later pieces off, tools
        // off-screen, inputs and colliders off) is set in the prefab by CG_Build_Level4_3.

        // STEP LOADING
        levelNo = SaveSystem.Instance.DataFields.levelToPlay - 1;
        partNo = SaveSystem.Instance.DataFields.partToPlay - 1;

        stepsDone = SaveSystem.Instance.DataFields.AllLevels[levelNo].subLevels[partNo].stepsDone;

        // resuming mid-level: the icon is positioned by SetProgressIconIndex below,
        // so the first StartStepN must skip its own advance
        skipIconAdvance = stepsDone > 0;

        if (stepsDone > 0)
            UI_Manager.instance.SetProgressIconIndex(stepsDone);

        switch (stepsDone)
        {
            // STARTING STEP 1
            case 0:
                StepStartEvent(1);

                DOVirtual.DelayedCall(1f, StartStep1);
                break;

            // STARTING STEP 2
            case 1:
                ForceCompleteStep1();

                DOVirtual.DelayedCall(1f, StartStep2);
                break;

            // STARTING STEP 3
            case 2:
                ForceCompleteStep2();

                DOVirtual.DelayedCall(1f, StartStep3);
                break;

            // STARTING STEP 4
            case 3:
                ForceCompleteStep3();

                DOVirtual.DelayedCall(1f, StartStep4);
                break;

            // STARTING STEP 5
            case 4:
                ForceCompleteStep4();

                DOVirtual.DelayedCall(1f, StartStep5);
                break;

            // STARTING STEP 6
            case 5:
                ForceCompleteStep5();

                DOVirtual.DelayedCall(1f, StartStep6);
                break;

            // STARTING STEP 7
            case 6:
                ForceCompleteStep6();

                DOVirtual.DelayedCall(1f, StartStep7);
                break;

            // STARTING STEP 8
            case 7:
                ForceCompleteStep7();

                DOVirtual.DelayedCall(1f, StartStep8);
                break;

            // STARTING STEP 9
            case 8:
                ForceCompleteStep8();

                DOVirtual.DelayedCall(1f, StartStep9);
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

    // A finished step eases the camera back out to the main view - slow and linear, no snap.
    void ReturnToMain()
    {
        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV, ReturnDuration, Ease.Linear);
    }

    // When the next step may start: the camera has finished easing out and the player has had ShowcaseHold to take
    // in the finished result - or later, if the step's own wind-down needs longer.
    float AfterShowcase(float minDelay)
    {
        return Mathf.Max(minDelay, ReturnDuration + ShowcaseHold);
    }

    // The tool's camera follow (if it has one) - on while the tool is in hand, off when it leaves.
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

    // Tool comes in from the right to its in-place X, then its drag, collider and the step's particle
    // colliders switch on.
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

    // The step is done: its tool leaves and the camera eases back out to the main view (the next step zooms to its
    // own framing when it starts).
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

    // Green rotating rings (the project's dashed Cursor ring, tinted green) around the area to work on: show once
    // the tool is in place, go when that area is done (CG_BD_Progress.SubCompleteEvent).
    void ShowIndication(GameObject indication, BasicDrag tool)
    {
        if (indication == null)
            return;

        SetOutline(indication, true);

        BD_Progress progress = tool != null ? tool.GetComponent<BD_Progress>() : null;

        if (progress != null)
            progress.SubCompleteEvent += () => SetOutline(indication, false);
    }

    // Shows/hides an indication (green rings, or a drag arrow for the drag-to-place steps). Rings ease in; an
    // arrow already loops its own fade, so it is left to it.
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

    // Drag hint for a drag-to-place item: a hand that presses on the item and drags it up to its place (its own
    // looping clip). Hides the moment the item is touched; after a let-go short of its place it comes back, from the
    // start of its clip, once the item has settled - one pending return at a time, so taps can't stack it.
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
        // The item first slides home (or into its place) - wait until it is still.
        while (item.isDragging || DOTween.IsTweening(item.transform))
            yield return null;

        yield return new WaitForSeconds(HintReshowDelay);

        if (!isPlaced() && !item.isDragging)
            hint.SetActive(true);
    }

    // Hand hint over a drag-to-place item; goes the moment the item is picked up.
    void ShowHand(GameObject hand, BasicDrag item)
    {
        if (hand == null)
            return;

        hand.SetActive(true);

        item.OnMouseDownEvent += () => hand.SetActive(false);
    }

    // Resume: the restore cards of a finished tool go to their restored (cleared) state.
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

    // Lid open: the open casket goes on top of the closed one (its SortingGroup above), switched on fully
    // transparent and faded in; the closed casket stays on underneath until it is covered, then switches off.
    void OpenCasket(System.Action done)
    {
        PlaySfx(LidOpenClip);

        { /* [Luna] stripped: CG_VibrationManager.instance.SoftImpact(); */ }

        SortingGroup closedGroup = CasketClosed.GetComponent<SortingGroup>();
        CasketOpen.GetComponent<SortingGroup>().sortingOrder = closedGroup.sortingOrder + 1;

        CasketOpen.SetActive(true);

        // The spiders' walk cycles start out of step with each other.
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

    // Lid close: the closed casket swaps in place - no motion on the casket - and the weight is felt instead: a deep
    // thud, a slow low camera rumble that dies away, a heavy haptic fading out, dust drifting off.
    // Nothing darkens - no fade to black, no shading, no sprite crossfade.
    void CloseCasket(System.Action done)
    {
        CasketOpen.SetActive(false);

        CasketClosed.transform.localScale = Vector3.one;
        CasketClosed.SetActive(true);

        PlaySfx(LidCloseClip);

        // Straight to the device (the Light/Medium 0.25s gap could swallow it): one heavy hit, then it fades out.
        { /* [Luna] stripped: CG_VibrationManager.instance.Impact(MoreMountains.NiceVibrations.HapticTypes.HeavyImpact); */ }
        DOVirtual.DelayedCall(.12f, () => { /* [Luna] stripped: CG_VibrationManager.instance.Impact(MoreMountains.NiceVibrations.HapticTypes.MediumImpact) */ });
        DOVirtual.DelayedCall(.3f, () => { /* [Luna] stripped: CG_VibrationManager.instance.Impact(MoreMountains.NiceVibrations.HapticTypes.SoftImpact) */ });

        // Low, slow rumble (few vibrations, mostly vertical) fading out - the floor feeling it, not a bounce. On the
        // camera itself, which is idle here (no tween or follow on it).
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

    // CG_BD_Progress.OnScratchComplete of the duster
    public void Step1Done()
    {
        if (isStep1Done)
            return;

        isStep1Done = true;

        MoveToolOut(ToolStep1, Step1Col, SfxCol_1);

        StepCompleteEvent(1);

        // Clean wood showing - the casket lights up green to be tapped open.
        DOVirtual.DelayedCall(1.2f, () =>
        {
            CasketOutline_1.EnableAnim();

            CasketTap_1.SetActive(true);
            Hand_1.SetActive(true);
        });
    }

    bool isCasketOpened;

    // CG_ActionOnTap.OnTap on the casket
    public void CasketTapped_1()
    {
        if (isCasketOpened)
            return;

        isCasketOpened = true;

        CasketOutline_1.DisableAnim();

        CasketTap_1.SetActive(false);
        Hand_1.SetActive(false);

        // Dust puffs (set in the inspector) once the lid is coming open.
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

            Invoke(nameof(StartStep2), AfterShowcase(.8f));
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

        // The spiders crawl their DOTweenPath loops (set on the prefab, playing since the lid opened).
        for (int i = 0; i < AllSpiders_2.Length; i++)
            AllSpiders_2[i].EnableAnim();

        MoveToolIn(ToolStep2, ToolInX_2, null);
    }

    // CG_Lvl3_InsectKill.OnComplete of the spray tip
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
        Invoke(nameof(StartStep3), AfterShowcase(1.2f));
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

    // CG_BD_Progress.OnScratchComplete of the blower
    public void Step3Done()
    {
        if (isStep3Done)
            return;

        isStep3Done = true;

        MoveToolOut(ToolStep3, Step3Col, null);

        SaveStep(3);
        ReturnToMain();
        StepCompleteEvent(3);

        Invoke(nameof(StartStep4), AfterShowcase(1.2f));
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

    // CG_BD_Progress.OnScratchComplete of the sewing gun
    public void Step4Done()
    {
        if (isStep4Done)
            return;

        isStep4Done = true;

        SetOutline(Indication_4, false);

        MoveToolOut(ToolStep4, Step4Col, SfxCol_4);

        // The torn seams under the new stitches go.
        Unstitched_4.DOKill();
        Unstitched_4.DOFade(0f, .8f).OnComplete(() => Unstitched_4.gameObject.SetActive(false));

        SaveStep(4);

        StepCompleteEvent(4);
        ReturnToMain();
        Invoke(nameof(StartStep5), AfterShowcase(1.2f));
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

    // CG_BD_Progress.OnScratchComplete of the stain remover
    public void Step5Done()
    {
        if (isStep5Done)
            return;

        isStep5Done = true;

        SetOutline(Indication_5, false);

        MoveToolOut(ToolStep5, null, null);

        // The spray soaks in: the stains go damp, then the damp marks dry away to clean velvet.
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

            Invoke(nameof(StartStep6), AfterShowcase(3.7f));
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

        // The pillow's rest pose (before any squish), to ease back to as it settles into place.
        pillowBones_6 = System.Linq.Enumerable.ToArray(System.Linq.Enumerable.Skip(ToolStep6.GetComponentsInChildren<Transform>(true), 1));
        pillowRest_6 = new Vector3[pillowBones_6.Length];

        for (int i = 0; i < pillowBones_6.Length; i++)
            pillowRest_6[i] = pillowBones_6[i].localPosition;

        ToolStep6.OnMouseUpEvent += PillowLetGo_6;

        MoveToolIn(ToolStep6, ToolInX_6, PillowDetect_6, () =>
        {
            // The clean-velvet sparkle (a looping effect) winds down as the pillow arrives.
            if (CleanSparkle_5 != null)
                CleanSparkle_5.Stop(true, ParticleSystemStopBehavior.StopEmitting);

            ShowDragHint(Indication_6, ToolStep6, () => isStep6Done);
        });
    }

    Transform[] pillowBones_6;
    Vector3[] pillowRest_6;

    // Let go over its place: CG_Lvl3_PlaceItem (subscribed first) has already taken it and is gliding it in. The
    // squish stops and eases back to the rest pose on the way, so it arrives looking exactly like the seated pillow
    // it hands over to - no pop at the swap.
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

    // CG_Lvl3_PlaceItem.OnComplete of the pillow
    public void Step6Done()
    {
        if (isStep6Done)
            return;

        isStep6Done = true;

        SetLayer(Hand_6, false);
        SetOutline(Indication_6, false);
        SetLayer(PillowDetect_6, false);

        // The seated pillow's shadow and shading ease in under it instead of popping on with the swap.
        foreach (SpriteRenderer layer in PillowSeated_6.GetComponentsInChildren<SpriteRenderer>(true))
        {
            if (layer.name == "Pillow")
                continue;

            float a = layer.color.a;

            layer.DOKill();
            layer.color = WithAlpha(layer.color, 0f);
            layer.DOFade(a, .4f).SetEase(Ease.OutSine);
        }

        { /* [Luna] stripped: CG_VibrationManager.instance.MediumImpact(); */ }

        UI_Manager.instance.SetProgressBar(1f);

        StepCompleteEvent(6);

        // Lid closes over the finished inside.
        DOVirtual.DelayedCall(1.4f, () =>
        {
            // Thump and settle, a beat of stillness, then one clean zoom out - and the next step only once the
            // camera is out, so its zoom never turns the camera around mid-move.
            CloseCasket(() =>
            {
                SaveStep(6);

                DOVirtual.DelayedCall(CloseZoomOutDelay, () =>
                {
                    ReturnToMain();
                    Invoke(nameof(StartStep7), AfterShowcase(ReturnDuration));
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

        // The paste bucket slides in.
        Bucket_7.gameObject.SetActive(true);
        Bucket_7.DOKill();
        Bucket_7.DOLocalMoveX(BucketInX_7, .5f).SetDelay(.5f).SetEase(Ease.OutCubic);

        // Knife comes in, tips over the bucket, dips into the paste a few times picking it up, goes back to
        // its place and is handed over (the SP_9 filler flow).
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

                { /* [Luna] stripped: CG_VibrationManager.instance.LightImpact(); */ }

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

    // CG_BD_Progress.OnScratchComplete of the filler knife
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

    // Only watches the sanding - it never holds it up or finishes it.
    IEnumerator DropGargoyleWhileSanding_8()
    {
        BD_Progress progress = ToolStep8.GetComponent<BD_Progress>();
        WaitForSeconds wait = new WaitForSeconds(.2f);

        while (!isStep8Done && progress.giveCollectiveProgress() < GargoyleDropAt_8)
            yield return wait;

        DropGargoyle_9(0f);
    }

    // CG_BD_Progress.OnScratchComplete of the sandpaper
    public void Step8Done()
    {
        if (isStep8Done)
            return;

        isStep8Done = true;

        MoveToolOut(ToolStep8, Step8Col, SfxCol_8);

        SaveStep(8);
        ReturnToMain();
        StepCompleteEvent(8);

        Invoke(nameof(StartStep9), AfterShowcase(1.2f));
    }

    void ForceCompleteStep8()
    {
        ForceCompleteStep7();

        RestoreScratches(ToolStep8);
    }

    #endregion

    #region STEP 9 - GARGOYLE

    bool isStep9Done;
    bool isGargoylePlaced;

    void StartStep9()
    {
        if (!TryStartStep(StartStep9, 9))
            return;

        AdvanceProgressIcon();

        StepStartEvent(9);

        ZoomTo(ZoomStep9);

        // Normally the gargoyle came down during the sanding; on a resume at step 9 it falls now.
        if (isGargoyleDown)
            GargoyleReady_9();

        else
        {
            onGargoyleDown = GargoyleReady_9;

            DropGargoyle_9(1f);
        }
    }

    bool isGargoyleDropping;
    bool isGargoyleDown;
    System.Action onGargoyleDown;

    // The gargoyle comes forward, works loose from the lid and falls to the floor under its own weight -
    // it tips as it unhooks, drops with gravity, lands, and rocks still. No hop, no bounce.
    void DropGargoyle_9(float delay)
    {
        if (isGargoyleDropping)
            return;

        isGargoyleDropping = true;

        Transform gargoyle = ToolStep9.transform;
        SpriteRenderer sr = ToolStep9.GetComponent<SpriteRenderer>();

        // Out of the casket's sorting group; it falls just under the tools (the sandpaper may still be in hand).
        gargoyle.SetParent(View1.transform, true);

        sr.sortingOrder = 24;

        float z = gargoyle.eulerAngles.z;
        float height = gargoyle.position.y - FloorY_9;
        float fallTime = Mathf.Sqrt(2f * height / 18f);

        gargoyle.DOKill();

        Sequence fall = DOTween.Sequence().SetDelay(delay);
        fall.Append(gargoyle.DORotate(new Vector3(0f, 0f, z - 5f), .45f).SetEase(Ease.InOutSine));
        fall.Append(gargoyle.DOMoveY(FloorY_9, fallTime).SetEase(Ease.InQuad));
        fall.Join(gargoyle.DORotate(new Vector3(0f, 0f, z - 16f), fallTime).SetEase(Ease.InSine));
        fall.AppendCallback(() =>
        {
            PlaySfx(FallClip_9);

            if (FallDust_9 != null)
            {
                FallDust_9.transform.position = new Vector3(gargoyle.position.x, FloorY_9, FallDust_9.transform.position.z);
                FallDust_9.Play();
            }

            { /* [Luna] stripped: CG_VibrationManager.instance.MediumImpact(); */ }
        });
        fall.Append(gargoyle.DORotate(new Vector3(0f, 0f, z - 11f), .35f).SetEase(Ease.OutSine));
        fall.Append(gargoyle.DORotate(new Vector3(0f, 0f, z - 13f), .3f).SetEase(Ease.InOutSine));
        fall.OnComplete(() =>
        {
            isGargoyleDown = true;

            onGargoyleDown?.Invoke();
        });
    }

    // Down on the floor and step 9 running: it can be picked up.
    void GargoyleReady_9()
    {
        // Now with the tools - over the target outline.
        ToolStep9.GetComponent<SpriteRenderer>().sortingOrder = 30;
        ToolStep9.startOrder = 30;

        if (Rotate_9 != null)
            Rotate_9.enabled = true;

        ToolStep9.OnMouseUpEvent += GargoyleReleased_9;

        ToolInputToggle(ToolStep9.gameObject, true);

        ShowDragHint(Indication_9, ToolStep9, () => isGargoylePlaced);
    }

    // Let go near its place: one smooth move straight into its exact spot (position and upright turn together,
    // easing to a stop - it attaches, it doesn't hunt around). The finished emblem is already on underneath at that
    // spot, fully visible, and the gargoyle fades off the top of it - the two are the same picture, so the swap
    // can't be seen.
    void GargoyleReleased_9()
    {
        if (isGargoylePlaced)
            return;

        Transform gargoyle = ToolStep9.transform;

        if (Vector2.Distance(gargoyle.position, FitPos_9) > DropRadius_9)
            return;

        isGargoylePlaced = true;

        if (Rotate_9 != null)
            Rotate_9.enabled = false;

        ToolStep9.dontResetItIsInCollider = true;
        ToolStep9.OnMouseUpEvent -= GargoyleReleased_9;

        ToolInputToggle(ToolStep9.gameObject, false);

        SetLayer(Hand_9, false);
        SetOutline(Indication_9, false);

        SpriteRenderer sr = ToolStep9.GetComponent<SpriteRenderer>();
        SpriteRenderer placed = GargoylePlaced_9.GetComponent<SpriteRenderer>();

        gargoyle.DOKill();

        Sequence attach = DOTween.Sequence();
        attach.Append(gargoyle.DOMove(new Vector3(FitPos_9.x, FitPos_9.y, gargoyle.position.z), .5f).SetEase(Ease.OutCubic));
        attach.Join(gargoyle.DORotate(new Vector3(0f, 0f, FitRotZ_9), .5f).SetEase(Ease.OutCubic));
        attach.AppendCallback(() =>
        {
            // Exactly in place: the finished emblem underneath, fully on.
            gargoyle.position = new Vector3(FitPos_9.x, FitPos_9.y, gargoyle.position.z);
            gargoyle.rotation = Quaternion.Euler(0f, 0f, FitRotZ_9);

            placed.color = WithAlpha(placed.color, 1f);
            GargoylePlaced_9.SetActive(true);

            PlaySfx(PlaceClip_9);

            { /* [Luna] stripped: CG_VibrationManager.instance.LightImpact(); */ }

            if (Sparkle_9 != null)
                Sparkle_9.Play();
        });
        attach.Append(sr.DOFade(0f, .45f).SetEase(Ease.InOutSine));
        attach.OnComplete(Step9Done);
    }

    void Step9Done()
    {
        if (isStep9Done)
            return;

        isStep9Done = true;

        StepCompleteEvent(9);

        SaveStep(0);
        ReturnToMain();
        UI_Manager.instance.SetProgressBar(1f);

        Invoke(nameof(LevelComplete), 2f);
    }

    #endregion
}
