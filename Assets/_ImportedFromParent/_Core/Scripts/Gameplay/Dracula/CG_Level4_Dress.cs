// [Luna] Adapted for playables by Cross-Project Prefab Importer.
using UnityEngine;
using DG.Tweening;
using System.Collections;
using System.Linq;

// Dracula 2 - Dress (Level4_2), built from Dress/Mocks 1-14. Every step's members end in its number (_N /
// StepN), and in the prefab its objects sit under "Step N - ..." (or are named for it: Chalk 3, Tool 4 Scissors).
//   View 1 (castle, loom)
//     Step 1  - Loom: one animation (Weave_1) played while the player drags (mocks 1-4)
//   View 2 (table)
//     Step 2  - Unroll: drag the fabric roll down to lay the fabric out (mock 5.5)
//     Step 3  - Chalk: the chalk comes in and, while the player drags (anywhere, like step 1, with the same
//               infinity hint), marks the trouser outline (mocks 5-6)
//     Step 4  - Scissor: the scissors are dragged about and break up the cloth round the trousers
//               (CG_ClothSlicer); done when they are let go (6-7)
//     Step 5  - Chalk: a new sheet comes in and the chalk marks the jacket outline, like step 3
//     Step 6  - Scissor: the cloth round the jacket is cut away, like step 4 (8)
//   View 3 (castle, sewing machine from the front - Slicing/Step 6 Sew New)
//     Step 7  - Sew: hold the foot pedal - the machine runs (needle bar, take-up lever, shake, sound) and the
//               cloth is fed up under the needle, its seam stitched as it goes, the big folds going with it;
//               letting go stops it. Done when the seam's end is under the needle (one side of one cloth)
//   View 4 (table, garment bag)
//     Step 8  - Pack: pull the bag's zipper down - it opens like a real zipper (CG_ZipperBag) - drop the folded
//               jacket, cape and trousers in, then pull the zipper back up, hiding them (9.5)
//   View 5 (castle) - the bare mannequin already stands there, behind the bag
//     Step 9  - Unzip: pull the zipper down again, the bag opens with the outfit inside (10-11)
//     Step 10 - Dress: tap the outfit in the bag - it comes out and goes to where it is dragged from, the bag
//               slides away left - then drag the outfit onto the mannequin, the trousers go on the stand
//               bar (12-13)
//     Step 11 - Buttons: they come as one bunch; drag it onto the jacket and drop it - they all fly to their
//               places; level complete (14)
//
// Prefab wiring: step 1 through Weave_1 (CG_DragPlayAnimation).OnComplete; step 2 through
// CG_DragAlongAxis.OnProgress / OnComplete; steps 8/9 through their CG_ZipperBag (listeners added in code); steps 3/5 through the chalk's OnComplete (added in code); steps 4/6
// through CG_ClothSlicer.OnComplete; steps 8/10 through CG_Lvl3_PlaceItem.OnComplete; step 10's tap through OutfitTap_10's
// CG_ActionOnTap.OnTap -> OutfitTapped_10; step 11's drop is found in code (ToolStep11, ButtonDetect_11).
public class CG_Level4_Dress : LevelData
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

    [Header("----------------- STEP 7 - SEW ----------------------")]
    [Space()]
    public ZoomPos ZoomStep7;

    [Space()]
    [Tooltip("Held to run the machine (the pedal's collider).")]
    public Collider2D Pedal_7;

    [Tooltip("The pedal art - pressed down while held, pulses while it waits to be held.")]
    public Transform PedalTop_7;
    public float PedalPress_7 = 0.05f;

    [Space()]
    [Tooltip("The cloth (with the seam on it) - fed up along FeedDir_7 while the machine runs.")]
    public Transform Cloth_7;
    public Vector2 FeedDir_7 = new Vector2(-0.2433f, 0.97f);

    [Tooltip("How far (world) the cloth is fed to sew the seam to its end.")]
    public float SeamLength_7 = 1.9f;
    public float FeedSpeed_7 = 0.42f;

    [Tooltip("The big folds lying on the cloth - dragged along behind it (this much of its feed: their art ends just below the screen).")]
    public Transform Folds_7;
    public float FoldsFollow_7 = 0.3f;

    [Tooltip("Needle strokes per second at full speed.")]
    public float StitchRate_7 = 9f;

    [Tooltip("How fast the machine gets up to speed / stops (1 / seconds).")]
    public float SpinUp_7 = 6f;

    [Space()]
    [Tooltip("The machine's parts (shake together while it runs).")]
    public Transform Machine_7;
    public float SewShake_7 = 0.004f;

    public Transform NeedleBar_7;
    public float NeedleTravel_7 = 0.03f;

    [Tooltip("The take-up lever - goes up as the needle comes up.")]
    public Transform Lever_7;
    public float LeverTravel_7 = 0.05f;

    public Transform Spool_7;

    [Tooltip("The cloth lying beyond the machine - stays put and wiggles while the cloth is fed.")]
    public Transform UpperWrinkle_7;
    public float WrinkleWiggle_7 = 0.02f;

    [Tooltip("The sewn cloth going out at the back (a band beyond the foot) - its leading edge starts hidden at the cloth's top edge and comes up into the band, this much of the feed.")]
    public Transform BackCloth_7;
    public float BackFeed_7 = 0.5f;

    [Tooltip("The back cloth's leading edge - comes up with it BackRise_7 (to the band's top), then stays there and jumps a little with each stitch.")]
    public Transform BackRim_7;
    public float BackRise_7 = 0.138f;

    [Tooltip("Creases pulled in to the presser foot - always shown, tugged in with each stitch.")]
    public SpriteRenderer SewWrinkles_7;

    [Space()]
    [Tooltip("The thread from the spool to the needle, through ThreadPoints_7 (spool, top pin, lever eye, guide, needle) - its texture runs while sewing.")]
    public LineRenderer Thread_7;
    public Transform[] ThreadPoints_7;
    public float ThreadRun_7 = 1.2f;
    public float ThreadSag_7 = 0.025f;
    public float ThreadTile_7 = 0.06f;

    [Space()]
    [Tooltip("Bones down the cloth (needle end first) - lag behind the feed and spring back, so the cloth coming in looks heavy and stretches.")]
    public Transform[] ClothBones_7;
    public float Stretch_7 = 0.09f;
    public float BoneSpring_7 = 70f;

    [Tooltip("How far the loose cloth hangs back while the machine runs - it falls back (and settles) between stitches and when it stops.")]
    public float Fall_7 = 0.05f;

    [Tooltip("Sideways travelling wave in the hanging cloth; pinned at the needle, strongest at the loose end.")]
    public float SewWaveAmplitude_7 = .12f;

    [Tooltip("Bones down the big folds (top first) - they hang and fall like the cloth, more the further down.")]
    public Transform[] FoldBones_7;

    [Tooltip("The machine running: looping stitch sound (pitch follows the speed) + vibration.")]
    public CG_LoopFeedback Feedback_7;

    [Tooltip("Hold hint (a copy of Hand 10 (Tap) on the pedal) - shown while the pedal is not held.")]
    public GameObject Hand_7;

    // The first sew step (hand wheel, trousers + jacket on CG_SewPath) - replaced by the pedal machine above; its
    // objects are under View 3 / "Old Sew (unused)". Only CG_Build_Level4_2's old methods still use these.
    [HideInInspector] public BasicDrag ToolStep7;
    [HideInInspector] public Collider2D Wheel_7;
    [HideInInspector] public Sprite[] WheelFrames_7;
    [HideInInspector] public float WheelFps_7 = 18f;
    [HideInInspector] public CG_SewPath[] Sew_7;
    [HideInInspector] public Transform MachineHead_7;

    [Header("----------------- STEP 8 - PACK ----------------------")]
    [Space()]
    public ZoomPos ZoomStep8;
    public ZoomPos ZoomStep8B;

    [Tooltip("The bag on the table: its zipper is pulled down to open it, the clothes are dropped in, and the zipper is pulled back up.")]
    public CG_ZipperBag Zip_8;

    [Tooltip("The zipper's pull (Zip_8's Pull).")]
    public BasicDrag ToolStep8;

    [Space()]
    public BasicDrag[] Items_8;

    [Tooltip("Each item as it lies inside the open bag once dropped (shown through the bag's opening only, so zipping up hides it).")]
    public GameObject[] Packed_8;

    [Header("----------------- ZIPPER SOUNDS (steps 8 / 9) ----------------------")]
    [Tooltip("Plays once when a zipper starts to open (steps 8 and 9).")]
    public AudioClip ZipOpenClip_8;
    [Tooltip("Plays once when the zipper starts to close (step 8).")]
    public AudioClip ZipCloseClip_8;
    [Tooltip("While closing, the zipper's loop waits this long after Zip_Close starts, so Zip_Close is heard first.")]
    public float ZipCloseLoopDelay_8 = .4f;
    [Tooltip("The zipper loop (Glass_Grinding) of the bag on the table: plays while the zipper actually moves, in both directions.")]
    public CG_LoopFeedback ZipLoop_8 = new CG_LoopFeedback();
    [Tooltip("The zipper loop of the castle bag.")]
    public CG_LoopFeedback ZipLoop_9 = new CG_LoopFeedback();

    [Header("----------------- HINTS (steps 8 / 9) ----------------------")]
    [Tooltip("Drag hint for pulling the zipper down (steps 8 and 9): shown when the pull can be dragged, hidden while it is touched, shown again if it was let go without moving.")]
    public GameObject HandZipOpen_8;
    [Tooltip("Drag hint for dropping a cloth into the open bag: hidden while a cloth is touched, shown again if it was let go unpacked - until the first one is packed.")]
    public GameObject HandCloth_8;
    [Tooltip("Same as HandZipOpen_8, for pulling the zipper back up.")]
    public GameObject HandZipClose_8;

    [Header("----------------- STEP 9 - UNZIP ----------------------")]
    [Space()]
    public ZoomPos ZoomStep9;

    [Space()]
    [Tooltip("The bag at the castle: the same zipper as step 8 - pulled down it opens, with the outfit inside showing through the opening.")]
    public CG_ZipperBag Zip_9;

    [Tooltip("The zipper's pull (Zip_9's Pull).")]
    public BasicDrag ToolStep9;

    [Space()]
    public SpriteRenderer BagClosed_9;
    public SpriteRenderer BagOpen_9;
    public SpriteRenderer BagContents_9;

    [Header("----------------- STEP 10 - DRESS ----------------------")]
    [Space()]
    public ZoomPos ZoomStep10;

    [Tooltip("Tap spot over the outfit in the open bag (CG_ActionOnTap.OnTap -> OutfitTapped_10).")]
    public GameObject OutfitTap_10;

    [Tooltip("The outfit as it lies in the open bag (the cape, the trousers, the jacket): swapped for ToolStep10 when it is tapped.")]
    public SpriteRenderer[] BagOutfit_10;

    [Space()]
    public AudioClip Clip_10;
    public GameObject Hand_10;
    public GameObject Hand_10B;

    [Space()]
    public BasicDrag ToolStep10;

    [Tooltip("Where the outfit goes to be dragged from (local x of its parent).")]
    public float ToolInX_10 = -0.9f;

    [Space()]
    public GameObject Bag_10;
    public GameObject Mannequin_10;
    public SpriteRenderer MannequinBare_10;
    public SpriteRenderer MannequinShadow_10;
    public SpriteRenderer MannequinDressed_10;
    public SpriteRenderer Trousers_10;

    [Header("----------------- STEP 11 - BUTTONS ----------------------")]
    [Space()]
    public ZoomPos ZoomStep11;

    [Space()]
    [Tooltip("The buttons as one bunch: dragged onto the jacket (ButtonDetect_11).")]
    public BasicDrag ToolStep11;
    public Collider2D ButtonDetect_11;

    [Space()]
    public GameObject Hand_11;

    [Space()]
    [Tooltip("The bunch's buttons, one for each of Buttons_11: each flies to its place when the bunch is dropped.")]
    public SpriteRenderer[] ButtonBunch_11;

    [Space()]
    public GameObject[] Buttons_11;

    [Space()]
    public AudioClip ButtonClip_11;

    [Header("----------------- STEP 12 - BAT CHAIN ----------------------")]
    [Space()]
    public ZoomPos ZoomStep12;

    [Space()]
    public GameObject Hand_12;

    [Space()]
    public AudioClip Clip_12;

    [Space()]
    public BasicDrag ToolStep12;
    public Transform ChainTarget_12;
    public Collider2D NeckDetect_12;
    public SpriteRenderer PlacedChain_12;

    // The measuring tape step 3 used to have - no longer used (the chalk is dragged instead); set by
    // CG_Build_Level4_2.Build, removed by UpgradeChalkDrag.
    [HideInInspector] public BasicDrag ToolStep3;
    [HideInInspector] public CG_DragAlongAxis Axis_3;
    [HideInInspector] public SpriteRenderer TapeBlade_3;
    [HideInInspector] public SpriteMask TapeMask_3;
    [HideInInspector] public GameObject Tape_3;
    [HideInInspector] public GameObject Hand_3;

    // Step 9's unzip used to be a fade driven by this - now the zipper (Zip_9) opens the bag.
    [HideInInspector] public CG_DragAlongAxis Axis_9;

    IEnumerator Start()
    {
        base.LevelStart();

        CG_DressFabricMotion.Attach(ThreadLines_1, shuttle: Loom_1.Shuttle, bar: Loom_1.Plank.transform);
        CG_DressFabricMotion.Attach(ToolStep10.GetComponent<SpriteRenderer>(), ToolStep10);

        PrepareFoldedItems_8();

        UI_Manager.instance.InitializeTools(ToolIcons);

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV, .01f);

        yield return new WaitForSeconds(.1f);

        // Every object's start-of-level state (only View 1 on, later views / tools / pieces off, masks
        // empty, drag inputs and axes off) is set in the prefab by CG_Build_Level4_2, not here.

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

            // STARTING STEP 10
            case 9:
                ForceCompleteStep9();

                DOVirtual.DelayedCall(1f, StartStep10);
                break;

            // STARTING STEP 11
            case 10:
                ForceCompleteStep10();

                DOVirtual.DelayedCall(1f, StartStep11);
                break;

            case 11:
                ForceCompleteStep11();
                DOVirtual.DelayedCall(1f, StartStep12);
                break;
        }
    }

    void Update()
    {
        UpdateSewing_7();

        UpdateZipLoops();

        // Unroll hint: on while the roll is waiting to be dragged, off while dragging - and gone for good once
        // the roll is HintUntil_2 unrolled.
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

    // Safety: when a step is done the sound sources it used are stopped and switched off.
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

    // The scissors' sources: the slash sound and the cut-piece sound.
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

    // Fade to black, swap the view and camera under it, then run next.
    void ChangeView(GameObject view, ZoomPos zoom, System.Action next)
    {
        UI_Manager.instance.FadeAnim(1f, 1f);

        DOVirtual.DelayedCall(1.1f, () =>
        {
            ShowView(view);

            CameraController.Instance.MoveCamera(zoom.CameraPos, zoom.CameraFOV, .1f);

            next?.Invoke();
        });
    }

    // Sizes / places a SpriteMask over target's bounds so only `fill` (0..1) of it shows - growing
    // down from the top edge (fromTop) or up from the bottom edge.
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

        // Pieces that appear later are switched off in the prefab: showing one switches it on.
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

    // A cut has closed all the way round: the whole sheet is swapped for the cut-out piece plus the leftover
    // sheet with that shape missing (they line up exactly), and the leftover is pulled away and fades.
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
    {
        if (!TryStartStep(StartStep1, 1))
            return;

        CameraController.Instance.MoveCamera(ZoomStep1.CameraPos, ZoomStep1.CameraFOV);

        // The whole weave is one animation played while the player drags (Weave_1); without it, the
        // shuttle comes in from the right with the first thread and the bar is handed to the player
        // once it has crossed (CG_Lvl4_2_Loom).
        if (Weave_1 != null)
            DOVirtual.DelayedCall(1f, Weave_1.Begin);
        else
            DOVirtual.DelayedCall(1f, Loom_1.Begin);

        Wire_1.SetActive(true);
    }

    // Weave_1.OnComplete / CG_Lvl4_2_Loom.OnComplete
    public void Step1Done()
    {
        if (isStep1Done)
            return;

        isStep1Done = true;

        SilenceStep(Weave_1.Feedback.Source);

        SaveStep(1);

        StepCompleteEvent(1);

        DOVirtual.DelayedCall(1.5f, () =>
        {
            ChangeView(View2, ZoomStep2, StartStep2);

            DOVirtual.DelayedCall(1.1f, () =>
            {
                Wire_1.SetActive(false);
            });
        });

    }

    void ForceCompleteStep1()
    {
        Wire_1.SetActive(false);

        // Woven down to the last row only - while View 1 is still active (the mask needs its bounds).
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

    // CG_DragAlongAxis.OnProgress
    public void UnrollProgress_2(float progress)
    {
        FillMask(FabricMask_2, Fabric_2, progress, true);

        SetRollFrame_2(progress);
    }

    // Full roll at the start, a little thinner each third of the way, the last (thinnest) one at the end.
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
        ToolStep2.gameObject.SetActive(false);
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

        // The chalk comes in and marks the trouser outline while the player drags (Chalk_3.DragToDraw);
        // nothing of the outline shows until the chalk has been over it.
        PantsOutline_3.gameObject.SetActive(true);
        PantsOutline_3.DOKill();
        SetAlpha(PantsOutline_3, 1f);
        PantsOutline_3.maskInteraction = SpriteMaskInteraction.VisibleInsideMask;

        Chalk_3.OnComplete.AddListener(Step3Done);
        DOVirtual.DelayedCall(OutlineDelay_3, Chalk_3.Play);
    }

    // Chalk_3.OnComplete - the outline is marked, on to cutting.
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

        // The scissors come in onto the outline; the player then drives them along it.
        DOVirtual.DelayedCall(.8f, () =>
        {
            Cut_4.Begin();
        });
    }

    // The square of cloth on the garment is swapped for its cuttable copy (same look, sliced up at runtime
    // by the slicer), the garment shown under it, and the scissors come in to be dragged about freely.
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

        // the scissors come in from the side to ScissorsInX_Cut, at the height and angle they are set to
        MoveToolIn(scissors, ScissorsInX_Cut, null);
    }

    // The square is cut (its last piece has already fallen, CG_ClothSlicer): the outline goes, the garment stays.
    void EndFreeCut(SpriteRenderer cutSheet, SpriteRenderer outline)
    {
        cutSheet.gameObject.SetActive(false);

        if (outline != null)
        {
            outline.DOKill();
            outline.DOFade(0f, .4f).OnComplete(() => outline.gameObject.SetActive(false));
        }
    }

    // Slicer_4 (CG_ClothSlicer).OnComplete, or Cut_4 (CG_PathCut).OnComplete
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
            // The cut has closed: the sheet splits into the trousers and the leftover, which is pulled away.
            SeparatePiece(Fabric_2, FabricOffcut_4, PantsPiece_4, PantsOutline_3, Cut_4);

        SaveStep(4);

        StepCompleteEvent(4);

        CameraController.Instance.MoveCamera(ZoomStep3.CameraPos, ZoomStep3.CameraFOV);

        Invoke(nameof(StartStep5), 1.2f);
    }

    void ForceCompleteStep4()
    {
        ForceCompleteStep3();

        ToolStep4.gameObject.SetActive(false);

        Fabric_2.gameObject.SetActive(false);
        PantsOutline_3.gameObject.SetActive(false);
        SetAlpha(PantsPiece_4, 1f);

        if (FabricOffcut_4 != null)
            FabricOffcut_4.gameObject.SetActive(false);

        if (Cut_4.CutTrail != null)
            Cut_4.CutTrail.gameObject.SetActive(false);

        if (CutSheet_4 != null)
            CutSheet_4.gameObject.SetActive(false);
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

        // Trousers slide off to the side, a fresh sheet slides in.
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
            // the chalk comes in once the sheet has landed (not on a timer of its own)
            DOVirtual.DelayedCall(.1f, Chalk_5.Play, false);
        });

        MoveCameraToChalk();

        // Once it has landed, the chalk comes in and marks the jacket outline while the player drags
        // (Chalk_5.DragToDraw); nothing of the outline shows until the chalk has been over it.
        SetAlpha(JacketOutline_5, 1f);
        JacketOutline_5.maskInteraction = SpriteMaskInteraction.VisibleInsideMask;

        Chalk_5.OnComplete.AddListener(Step5Done);
    }

    void MoveCameraToChalk()
    {
        if (ZoomChalk != null && ZoomChalk.CameraFOV > 0f)
            CameraController.Instance.MoveCamera(ZoomChalk.CameraPos, ZoomChalk.CameraFOV);
    }

    // Chalk_5.OnComplete - the jacket is marked: step 5 done, on to cutting it (step 6).
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

    // Resuming past step 5: the jacket's sheet lies there, marked.
    void ForceCompleteStep5()
    {
        ForceCompleteStep4();

        PantsPiece_4.gameObject.SetActive(false);
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

    // Slicer_6 (CG_ClothSlicer).OnComplete, or Cut_6 (CG_PathCut).OnComplete
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

        DOVirtual.DelayedCall(1.5f, () =>
        {
            ChangeView(View3, ZoomStep7, StartStep7);

            DOVirtual.DelayedCall(1.1f, () =>
            {
                CameraController.Instance.MoveCamera(ZoomStep7.CameraPos, ZoomStep7.CameraFOV, .01f);
            });
        });
    }

    // Resuming past step 6 (the jacket cut).
    void ForceCompleteStep6()
    {
        ForceCompleteStep5();

        ShowView(View3);

        ToolStep6.gameObject.SetActive(false);

        if (CutSheet_6 != null)
            CutSheet_6.gameObject.SetActive(false);
    }

    #endregion

    #region STEP 7 - SEW

    bool isStep7Done;
    bool isStep7Running;
    bool pedalHeld_7;

    // 0 = stopped, 1 = full speed (eases both ways, SpinUp_7)
    float speed_7;

    // pedal pressed 0..1; how long the pedal has been let go (the hand hint comes back after a moment)
    float press_7;
    float idle_7;

    // needle stroke angle (radians); fed = how far the cloth has gone up
    float phase_7;
    float fed_7;

    Vector3 clothRest_7, foldsRest_7, backRest_7, machineRest_7, needleRest_7, leverRest_7, wrinkleRest_7, pedalRest_7, pedalScale_7, wrinkleScale_7, creaseScale_7;
    Quaternion spoolRest_7;
    Color pedalColor_7;
    float soundPitch_7 = 1f;

    // feed speed (world/s, smoothed) for the cloth bones; each bone's rest (cloth-local) and its spring
    float feedVel_7;
    Vector3[] boneRest_7, foldRest_7;
    Vector2[] boneOff_7, boneVel_7, foldOff_7, foldVel_7;
    Vector3 creaseRest_7, rimRest_7;

    Material threadMat_7;
    float threadScroll_7;

    void StartStep7()
    {
        if (!TryStartStep(StartStep7, 7))
            return;

        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep7.CameraPos, ZoomStep7.CameraFOV);

        clothRest_7 = Cloth_7.localPosition;
        foldsRest_7 = Folds_7.localPosition;
        machineRest_7 = Machine_7.localPosition;
        needleRest_7 = NeedleBar_7.localPosition;
        leverRest_7 = Lever_7.localPosition;
        spoolRest_7 = Spool_7.localRotation;
        wrinkleRest_7 = UpperWrinkle_7.localPosition;
        wrinkleScale_7 = UpperWrinkle_7.localScale;
        pedalRest_7 = PedalTop_7.localPosition;
        pedalScale_7 = PedalTop_7.localScale;
        pedalColor_7 = PedalTop_7.GetComponent<SpriteRenderer>().color;
        backRest_7 = BackCloth_7.localPosition;
        creaseScale_7 = SewWrinkles_7.transform.parent.localScale;

        creaseRest_7 = SewWrinkles_7.transform.parent.localPosition;

        rimRest_7 = BackRim_7.localPosition;

        boneRest_7 = ClothBones_7.Select(b => Cloth_7.InverseTransformPoint(b.position)).ToArray();
        boneOff_7 = new Vector2[ClothBones_7.Length];
        boneVel_7 = new Vector2[ClothBones_7.Length];

        foldRest_7 = FoldBones_7.Select(b => Folds_7.InverseTransformPoint(b.position)).ToArray();
        foldOff_7 = new Vector2[FoldBones_7.Length];
        foldVel_7 = new Vector2[FoldBones_7.Length];

        threadMat_7 = Thread_7.material;

        if (Feedback_7.Source != null)
            soundPitch_7 = Feedback_7.Source.pitch;

        speed_7 = phase_7 = fed_7 = press_7 = feedVel_7 = threadScroll_7 = 0f;
        idle_7 = 1f;

        DOVirtual.DelayedCall(.6f, () => isStep7Running = true);
    }

    // Hold the pedal: the machine gets up to speed - needle bar and take-up lever stroke, the machine shakes, the
    // cloth is fed up under the needle (the seam's stitches come out of it), the cloth beyond the machine wiggles.
    // Let go and it all runs down to a stop. Done when the seam's end has gone under the needle.
    void UpdateSewing_7()
    {
        if (!isStep7Running || isStep7Done)
            return;

        float dt = Time.deltaTime;
        bool paused = GameManager.instance != null && GameManager.instance.isPaused;

        if (Input.GetMouseButtonDown(0) && !paused && OnPedal_7())
            pedalHeld_7 = true;

        if (Input.GetMouseButtonUp(0) || paused)
            pedalHeld_7 = false;

        // the tap hand on the pedal: gone while it is held, back .4 s after it is let go
        idle_7 = pedalHeld_7 ? 0f : idle_7 + dt;

        bool showHand = idle_7 > .4f;

        if (Hand_7 != null && Hand_7.activeSelf != showHand)
            Hand_7.SetActive(showHand);

        speed_7 = Mathf.MoveTowards(speed_7, pedalHeld_7 ? 1f : 0f, dt * SpinUp_7);
        press_7 = Mathf.MoveTowards(press_7, pedalHeld_7 ? 1f : 0f, dt * 12f);

        UpdatePedal_7();

        // Needle down at phase 0, up at PI; the cloth only moves while the needle is out of it (the upper half).
        phase_7 += dt * StitchRate_7 * speed_7 * Mathf.PI * 2f;

        float needleDown = .5f + .5f * Mathf.Cos(phase_7);
        float feedPulse = Mathf.Max(0f, -Mathf.Cos(phase_7)) * 2f;

        float fedBefore = fed_7;
        fed_7 = Mathf.Min(SeamLength_7, fed_7 + FeedSpeed_7 * speed_7 * feedPulse * dt);

        if (dt > 0f)
            feedVel_7 = Mathf.Lerp(feedVel_7, (fed_7 - fedBefore) / dt, Mathf.Min(1f, dt * 20f));

        UpdateMachine_7(needleDown);
        UpdateCloth_7(feedPulse, fed_7 - fedBefore, dt);

        Feedback_7.Set(speed_7 > .05f);

        if (Feedback_7.Source != null)
            Feedback_7.Source.pitch = soundPitch_7 * Mathf.Lerp(.7f, 1f, speed_7);

        UI_Manager.instance.SetProgressBar(fed_7 / SeamLength_7);

        if (fed_7 >= SeamLength_7)
            Step7Done();
    }

    void UpdatePedal_7()
    {
        // pressed: squashed down onto its base (its bottom stays put) and a little darker
        float squash = 1f - press_7 * PedalPress_7;

        PedalTop_7.localScale = new Vector3(pedalScale_7.x, pedalScale_7.y * squash, pedalScale_7.z);

        var sr = PedalTop_7.GetComponent<SpriteRenderer>();
        float h = sr.sprite.bounds.size.y * pedalScale_7.y;

        PedalTop_7.localPosition = pedalRest_7 + new Vector3(0f, -h * (1f - squash) * .5f, 0f);
        sr.color = Color.Lerp(pedalColor_7, pedalColor_7 * new Color(.82f, .82f, .82f, 1f), press_7);
    }

    void UpdateMachine_7(float needleDown)
    {
        float s = speed_7;
        Vector2 across = new Vector2(FeedDir_7.y, -FeedDir_7.x);

        Machine_7.localPosition = machineRest_7 + (Vector3)(Random.insideUnitCircle * SewShake_7 * s);
        NeedleBar_7.localPosition = needleRest_7 + Vector3.down * NeedleTravel_7 * needleDown;
        Lever_7.localPosition = leverRest_7 + Vector3.up * LeverTravel_7 * (1f - needleDown);
        Spool_7.localRotation = spoolRest_7 * Quaternion.Euler(0f, 0f, Mathf.Sin(phase_7 * .5f) * 1.5f * s);

        // the cloth: fed up along its edge, tugged a little across with each stitch
        Vector2 tug = across * Mathf.Sin(phase_7) * .004f * s;

        Cloth_7.localPosition = clothRest_7 + (Vector3)(FeedDir_7 * fed_7 + tug);
        Folds_7.localPosition = foldsRest_7 + (Vector3)(FeedDir_7 * fed_7 * FoldsFollow_7 + tug * .6f);

        // the cloth beyond the needle stays where it is and ripples while it is pulled through
        float w = WrinkleWiggle_7 * s;
        float t = Time.time;

        UpperWrinkle_7.localPosition = wrinkleRest_7 + new Vector3(Mathf.Sin(t * 5.3f) * w * .3f, Mathf.Sin(t * 7.1f) * w * .25f, 0f);
        UpperWrinkle_7.localScale = new Vector3(wrinkleScale_7.x * (1f + Mathf.Sin(t * 6.2f) * w), wrinkleScale_7.y * (1f + Mathf.Sin(t * 8.3f + 1f) * w * 1.5f), wrinkleScale_7.z);

        // the sewn cloth going out at the back - straight up, slower (it lies flat, going away)
        BackCloth_7.localPosition = backRest_7 + Vector3.up * fed_7 * BackFeed_7;
    }

    // The creases at the foot, the cloth's bones and the thread.
    void UpdateCloth_7(float feedPulse, float fedStep, float dt)
    {
        float s = speed_7;

        // creases: always there, they only move - pulled in towards the needle with each stitch
        Transform creases = SewWrinkles_7.transform.parent;
        float tugIn = feedPulse * s;
        creases.localPosition = creaseRest_7 + (Vector3)(FeedDir_7.normalized * .012f * tugIn);
        creases.localScale = new Vector3(creaseScale_7.x * (1f - .04f * tugIn), creaseScale_7.y * (1f + .08f * tugIn), creaseScale_7.z);

        // the back cloth's leading edge: comes up with it to the band's top and stays there, jumping a little each stitch
        float risen = fed_7 * BackFeed_7;
        float jump = risen >= BackRise_7 ? .004f * tugIn : 0f;
        BackRim_7.localPosition = rimRest_7 + Vector3.up * (Mathf.Min(risen, BackRise_7) + jump);

        // bones: the cloth coming in is heavy - each stitch's pull (pull, 0..1.5) leaves the part still far from the
        // needle behind (it stretches), and while it runs it hangs back further (Fall_7); springy, so between stitches
        // and when the pedal is let go it falls back past its rest and settles. The folds lying on it do the same, more
        // the further down they are.
        float pull = feedPulse * s * .75f;
        float step = Mathf.Min(dt, 1f / 30f);
        Vector3 needle = creases.position;
        Vector2 along = FeedDir_7.normalized;

        SpringBones_7(ClothBones_7, Cloth_7, boneRest_7, boneOff_7, boneVel_7,
            (i, rest) => Mathf.Clamp01(Vector2.Dot(needle - rest, along) / 3f), Stretch_7, pull, step);

        SpringBones_7(FoldBones_7, Folds_7, foldRest_7, foldOff_7, foldVel_7,
            (i, rest) => .35f + .65f * i / Mathf.Max(1f, FoldBones_7.Length - 1f), Stretch_7 * .6f, pull, step);

        // thread: spool -> top pin (a light sag that trembles while running) -> lever eye -> guide -> needle; its
        // texture runs on as the cloth takes it up
        Vector3 spool = ThreadPoints_7[0].position, pin = ThreadPoints_7[1].position;
        const int sagPoints = 10;
        int count = sagPoints + ThreadPoints_7.Length - 2;

        if (Thread_7.positionCount != count)
            Thread_7.positionCount = count;

        float sag = ThreadSag_7 * (1f + .3f * Mathf.Sin(phase_7 * 2f) * s);
        float length = 0f;
        Vector3 last = spool;

        for (int i = 0; i < count; i++)
        {
            Vector3 p;

            if (i < sagPoints)
            {
                float u = i / (float)(sagPoints - 1);
                p = Vector3.Lerp(spool, pin, u) + Vector3.down * sag * 4f * u * (1f - u);
            }
            else
            {
                p = ThreadPoints_7[i - sagPoints + 2].position;
            }

            Thread_7.SetPosition(i, p);
            length += Vector3.Distance(last, p);
            last = p;
        }

        threadScroll_7 -= fedStep * ThreadRun_7 / ThreadTile_7;
        threadMat_7.mainTextureScale = new Vector2(length / ThreadTile_7, 1f);
        threadMat_7.mainTextureOffset = new Vector2(threadScroll_7, 0f);
    }

    // A chain of bones as springs about their rests (kept in space's local coordinates): each pulled back against the
    // feed by stretch x pull and hanging back by Fall_7 while the machine runs - both x how loose it is (0..1) - and
    // swaying across in a wave down the chain. Lightly damped, so it overshoots and falls back.
    void SpringBones_7(Transform[] bones, Transform space, Vector3[] rest, Vector2[] off, Vector2[] vel,
        System.Func<int, Vector3, float> loose, float stretch, float pull, float step)
    {
        if (bones == null)
            return;

        Vector2 along = FeedDir_7.normalized;
        Vector2 across = new Vector2(along.y, -along.x);

        for (int i = 0; i < bones.Length; i++)
        {
            Vector3 r = space.TransformPoint(rest[i]);
            float w = loose(i, r);

            // A broad travelling wave bends the existing skinned cloth, seam and shadow together.
            // Folds follow with a smaller amplitude; speed eases it out when the pedal is released.
            float waveScale = bones == ClothBones_7 ? 1f : .4f;
            float distance = Vector2.Dot(r - (Vector3)NeedleBar_7.position, along);
            float wave = Mathf.Sin(Time.time * 4.5f + distance * 2.8f);
            Vector2 target = new Vector2(
                -w * (stretch * pull + Fall_7 * speed_7),
                wave * SewWaveAmplitude_7 * waveScale * speed_7 * w);

            float k = BoneSpring_7 * (1f - .5f * w);
            float damp = 2f * Mathf.Sqrt(k) * .22f;

            vel[i] += (k * (target - off[i]) - damp * vel[i]) * step;
            off[i] += vel[i] * step;

            bones[i].position = r + (Vector3)(along * off[i].x + across * off[i].y);
        }
    }

    bool OnPedal_7()
    {
        if (Pedal_7 == null)
            return false;

        Vector2 mousePosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);

        return Pedal_7.OverlapPoint(mousePosition);
    }

    // The seam's end has gone under the needle (UpdateSewing_7).
    public void Step7Done()
    {
        if (isStep7Done)
            return;

        isStep7Done = true;
        pedalHeld_7 = false;

        Feedback_7.Set(false);

        if (Hand_7 != null)
            Hand_7.SetActive(false);

        // everything comes to rest
        Machine_7.DOLocalMove(machineRest_7, .2f);
        NeedleBar_7.DOLocalMove(needleRest_7, .2f);
        Lever_7.DOLocalMove(leverRest_7, .2f);
        Spool_7.DOLocalRotateQuaternion(spoolRest_7, .2f);
        UpperWrinkle_7.DOLocalMove(wrinkleRest_7, .3f);
        UpperWrinkle_7.DOScale(wrinkleScale_7, .3f);
        PedalTop_7.DOLocalMove(pedalRest_7, .15f);
        PedalTop_7.DOScale(pedalScale_7, .15f);
        PedalTop_7.GetComponent<SpriteRenderer>().DOColor(pedalColor_7, .15f);

        { /* [Luna] stripped: CG_VibrationManager.instance.MediumImpact(); */ }

        UI_Manager.instance.SetProgressBar(1f);

        SaveStep(7);

        StepCompleteEvent(7);

        DOVirtual.DelayedCall(1.5f, () =>
        {
            ChangeView(View4, ZoomStep8, StartStep8);

            DOVirtual.DelayedCall(1.1f, () =>
            {
                CameraController.Instance.MoveCamera(ZoomStep8B.CameraPos, ZoomStep8B.CameraFOV, .01f);
            });
        });
    }

    void ForceCompleteStep7()
    {
        ForceCompleteStep6();

        ShowView(View4);
    }

    #endregion

    #region STEP 8 - PACK

    bool isStep8Done;
    int itemsPacked_8;
    Vector3[] foldedRest_8;

    // Capture the hand-placed destinations before View 4 is ever shown.
    void PrepareFoldedItems_8()
    {
        foldedRest_8 = Items_8.Select(item => item.transform.localPosition).ToArray();
        foreach (var item in Items_8)
        {
            item.canDrag = false;
            item.GetComponent<Collider2D>().enabled = false;
            item.gameObject.SetActive(false);
        }
    }

    Sequence EnterFoldedItems_8()
    {
        var entrance = DOTween.Sequence();
        for (int i = 0; i < Items_8.Length; i++)
        {
            Transform item = Items_8[i].transform;
            item.gameObject.SetActive(true);
            item.position = item.parent.TransformPoint(foldedRest_8[i]) + Vector3.left * 7f;
            entrance.Insert(.6f + i * .12f,
                item.DOLocalMove(foldedRest_8[i], .65f).SetEase(Ease.OutCubic));
        }
        entrance.SetLink(gameObject);
        return entrance;
    }

    // 0: the zipper is being pulled down, 1: the clothes are being dropped in, 2: the zipper is being pulled back up
    int zipPhase_8;

    // the bar counts the unzip as one part, each item as one, the zip back up as one
    float Units_8 { get { return Items_8.Length + 2; } }

    void StartStep8()
    {
        if (!TryStartStep(StartStep8, 8))
            return;

        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep8B.CameraPos, ZoomStep8B.CameraFOV);

        zipPhase_8 = 0;

        Zip_8.OnChanged.AddListener(ZipChanged_8);
        Zip_8.OnOpened.AddListener(ZipOpened_8);
        Zip_8.OnClosed.AddListener(Step8Done);

        ZipHint(ToolStep8, Zip_8, HandZipOpen_8, () => zipPhase_8 == 0 && !isStep8Done);
        ZipHint(ToolStep8, Zip_8, HandZipClose_8, () => zipPhase_8 == 2 && !isStep8Done);

        foreach (var item in Items_8)
        {
            item.OnMouseDownEvent += ClothTouched_8;
            item.OnMouseUpEvent += ClothLetGo_8;
        }

        // the bag has to be opened first
        DOVirtual.DelayedCall(1f, () =>
        {
            ToolInputToggle(ToolStep8.gameObject, true);

            Zip_8.Begin(true);

            ShowHand(HandZipOpen_8);
        });
    }

    // ---- hints

    const float ZipHintMoved = .03f;

    void ShowHand(GameObject hand, float delay = 0f)
    {
        if (hand == null)
            return;

        DOTween.Kill(hand);

        if (delay <= 0f)
            hand.SetActive(true);
        else
            DOVirtual.DelayedCall(delay, () => hand.SetActive(true)).SetId(hand);
    }

    void HideHand(GameObject hand)
    {
        if (hand == null)
            return;

        DOTween.Kill(hand);

        hand.SetActive(false);
    }

    // The pull's hint: off while the pull is touched, back on when it is let go if the zipper has not moved a bit.
    void ZipHint(BasicDrag pull, CG_ZipperBag zip, GameObject hand, System.Func<bool> wanted)
    {
        if (hand == null)
            return;

        float openAtTouch = 0f;

        pull.OnMouseDownEvent += () =>
        {
            if (!wanted())
                return;

            openAtTouch = zip.Openness;

            HideHand(hand);
        };

        pull.OnMouseUpEvent += () =>
        {
            if (wanted() && Mathf.Abs(zip.Openness - openAtTouch) < ZipHintMoved)
                ShowHand(hand, .2f);
        };
    }

    // Any cloth touched: its hint goes.
    void ClothTouched_8()
    {
        HideHand(HandCloth_8);
    }

    // A cloth let go: if it was not packed (and none has been), the hint comes back.
    void ClothLetGo_8()
    {
        if (isStep8Done || zipPhase_8 != 1 || Items_8.Any(i => i.isPlacedCannotMove))
            return;

        //ShowHand(HandCloth_8, .4f);
    }

    bool zipOpenSounded_8;
    bool zipOpenSounded_9;
    bool zipCloseSounded_8;
    float zipCloseFrom_8 = 1f;
    float zipCloseSoundAt_8;

    // The zipper loop goes with the zipper itself: on while its opening has changed in the last ZipLoopHold seconds
    // (so even a tiny drag is heard), off the moment it stops. While closing it starts ZipCloseLoopDelay_8 after
    // Zip_Close, so the two do not merge.
    const float ZipLoopHold = .12f;
    float zipMoved_8 = -10f, zipLast_8;
    float zipMoved_9 = -10f, zipLast_9;

    static void ZipMoved(ref float stamp, ref float last, float openness)
    {
        if (Mathf.Abs(openness - last) > .0005f)
            stamp = Time.time;

        last = openness;
    }

    void UpdateZipLoops()
    {
        bool moving8 = Time.time - zipMoved_8 <= ZipLoopHold && !isStep8Done;
        bool closeReady = zipPhase_8 != 2 || (zipCloseSounded_8 && Time.time >= zipCloseSoundAt_8 + ZipCloseLoopDelay_8);

        ZipLoop_8.Set(moving8 && (zipPhase_8 == 0 || zipPhase_8 == 2) && closeReady);
        ZipLoop_9.Set(Time.time - zipMoved_9 <= ZipLoopHold && !isStep9Done);
    }

    // The zipper-open sound plays once as the pull starts down, and again only after the zipper has gone back to
    // closed.
    void ZipOpenSound(ref bool played, float openness)
    {
        if (openness < .01f)
            played = false;
        else if (!played && openness > .03f)
        {
            played = true;

            if (ZipOpenClip_8 != null)
                AudioController.instance.PlayAnySfx(2, ZipOpenClip_8, 0f);
        }
    }

    // The zipper-close sound plays once as the pull starts back up (the opening has dropped a little from where it
    // was left), and again only if it is let back down to there.
    void ZipCloseSound(float openness)
    {
        if (openness > zipCloseFrom_8 - .005f)
            zipCloseSounded_8 = false;
        else if (!zipCloseSounded_8 && openness < zipCloseFrom_8 - .03f)
        {
            zipCloseSounded_8 = true;
            zipCloseSoundAt_8 = Time.time;

            if (ZipCloseClip_8 != null)
                AudioController.instance.PlayAnySfx(2, ZipCloseClip_8, 0f);
        }
    }

    // Zip_8.OnChanged - how far the bag is open
    void ZipChanged_8(float openness)
    {
        if (isStep8Done)
            return;

        ZipMoved(ref zipMoved_8, ref zipLast_8, openness);

        if (zipPhase_8 == 0)
            ZipOpenSound(ref zipOpenSounded_8, openness);
        else if (zipPhase_8 == 2)
            ZipCloseSound(openness);

        float units = zipPhase_8 == 0 ? openness : zipPhase_8 == 1 ? 1f + itemsPacked_8 : Items_8.Length + 1f + (1f - openness);

        UI_Manager.instance.SetProgressBar(units / Units_8);
    }

    // Zip_8.OnOpened - open: the pull is put down, the clothes can be dropped in
    void ZipOpened_8()
    {
        if (isStep8Done || zipPhase_8 != 0) return;
        zipPhase_8 = 1;

        ToolInputToggle(ToolStep8.gameObject, false);

        HideHand(HandZipOpen_8);

        EnterFoldedItems_8().OnComplete(() =>
        {
            for (int i = 0; i < Items_8.Length; i++)
                ToolInputToggle(Items_8[i].gameObject, true);

            ShowHand(HandCloth_8);
        });

        CameraController.Instance.MoveCamera(ZoomStep8.CameraPos, ZoomStep8.CameraFOV);
    }

    // Each item's CG_Lvl3_PlaceItem.OnComplete, with that item's index.
    public void ItemPacked_8(int index)
    {
        if (isStep8Done)
            return;

        // the item is swapped for its place in the bag (hanging there as in the mockup, shown only through the
        // opening) by its CG_Lvl3_PlaceItem - nothing more to do here

        itemsPacked_8++;

        UI_Manager.instance.SetProgressBar((1f + itemsPacked_8) / Units_8);

        if (itemsPacked_8 < Items_8.Length)
            return;

        // all in: the bag is zipped up again
        zipPhase_8 = 2;
        zipCloseFrom_8 = Zip_8.Openness;

        // the loop starts again from its start for the closing
        ZipLoop_8.Set(false);

        if (ZipLoop_8.Source != null)
            ZipLoop_8.Source.Stop();

        HideHand(HandCloth_8);

        DOVirtual.DelayedCall(.4f, () =>
        {
            CameraController.Instance.MoveCamera(ZoomStep8B.CameraPos, ZoomStep8B.CameraFOV);

            DOVirtual.DelayedCall(1f, () =>
            {
                ToolInputToggle(ToolStep8.gameObject, true);

                Zip_8.Begin(false);

                ShowHand(HandZipClose_8);
            });
        });
    }

    // Zip_8.OnClosed - zipped up again, everything inside hidden
    public void Step8Done()
    {
        if (isStep8Done)
            return;

        isStep8Done = true;

        ToolInputToggle(ToolStep8.gameObject, false);

        HideHand(HandZipOpen_8);
        HideHand(HandCloth_8);
        HideHand(HandZipClose_8);

        foreach (var packed in Packed_8)
            packed.SetActive(false);

        UI_Manager.instance.SetProgressBar(1f);

        SaveStep(8);

        StepCompleteEvent(8);

        CameraController.Instance.MoveCamera(ZoomStep8B.CameraPos, ZoomStep8.CameraFOV);

        DOVirtual.DelayedCall(1.5f, () =>
        {
            ChangeView(View5, ZoomStep9, StartStep9);

            DOVirtual.DelayedCall(1.1f, () =>
            {
                CameraController.Instance.MoveCamera(ZoomStep9.CameraPos, ZoomStep9.CameraFOV, .01f);
            });
        });
    }

    void ForceCompleteStep8()
    {
        ForceCompleteStep7();

        ShowView(View5);
    }

    #endregion

    #region STEP 9 - UNZIP

    bool isStep9Done;

    void StartStep9()
    {
        if (!TryStartStep(StartStep9, 9))
            return;

        AdvanceProgressIcon();

        ShowBareMannequin_10();

        CameraController.Instance.MoveCamera(ZoomStep9.CameraPos, ZoomStep9.CameraFOV);

        Zip_9.OnChanged.AddListener(ZipChanged_9);
        Zip_9.OnOpened.AddListener(Step9Done);

        // the same hint as step 8's unzip, over this bag's zipper
        if (HandZipOpen_8 != null)
            HandZipOpen_8.transform.position += Zip_9.Top.position - Zip_8.Top.position;

        ZipHint(ToolStep9, Zip_9, HandZipOpen_8, () => !isStep9Done);

        DOVirtual.DelayedCall(1f, () =>
        {
            ToolInputToggle(ToolStep9.gameObject, true);

            Zip_9.Begin(true);

            ShowHand(HandZipOpen_8);
        });
    }

    // Zip_9.OnChanged - how far the bag is open
    void ZipChanged_9(float openness)
    {
        if (!isStep9Done)
        {
            ZipMoved(ref zipMoved_9, ref zipLast_9, openness);
            ZipOpenSound(ref zipOpenSounded_9, openness);

            UI_Manager.instance.SetProgressBar(openness);
        }
    }

    // Zip_9.OnOpened
    public void Step9Done()
    {
        if (isStep9Done)
            return;

        isStep9Done = true;

        ToolInputToggle(ToolStep9.gameObject, false);

        HideHand(HandZipOpen_8);

        UI_Manager.instance.SetProgressBar(1f);

        SaveStep(9);

        StepCompleteEvent(9);

        Invoke(nameof(StartStep10), 1.5f);
    }

    void ForceCompleteStep9()
    {
        ForceCompleteStep8();

        ShowBareMannequin_10();

        Zip_9.SetOpenness(1f);
        ToolStep9.gameObject.SetActive(false);
    }

    #endregion

    #region STEP 10 - DRESS

    bool isStep10Done;
    bool outfitOut_10;

    // The bare mannequin stands behind the bag from the moment the castle is shown (so there is nothing to pop
    // up when the bag goes); its shadow comes with the bag leaving.
    void ShowBareMannequin_10()
    {
        Mannequin_10.SetActive(true);

        SetAlpha(MannequinBare_10, 1f);
        SetAlpha(MannequinShadow_10, Bag_10.activeSelf ? 0f : 1f);
    }

    void StartStep10()
    {
        if (!TryStartStep(StartStep10, 10))
            return;

        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep10.CameraPos, ZoomStep10.CameraFOV);

        ShowBareMannequin_10();

        // The outfit in the open bag waits to be tapped.
        DOVirtual.DelayedCall(1f, () =>
        {
            if (outfitOut_10)
                return;

            OutfitTap_10.SetActive(true);

            Hand_10.SetActive(true);
        });
    }

    // OutfitTap_10's CG_ActionOnTap.OnTap: the outfit comes out of the bag and goes to where it is dragged from,
    // then the bag slides away to the left and the outfit can be dragged.
    public void OutfitTapped_10()
    {
        if (outfitOut_10 || isStep10Done)
            return;

        outfitOut_10 = true;

        Hand_10.SetActive(false);

        AudioController.instance.PlayAnySfx(2, Clip_10, 0f);

        OutfitTap_10.SetActive(false);

        UI_Manager.instance.SetProgressBar(.5f);

        Transform tool = ToolStep10.transform;
        var toolSR = ToolStep10.GetComponent<SpriteRenderer>();

        Vector3 home = tool.parent.TransformPoint(new Vector3(ToolInX_10, tool.localPosition.y, tool.localPosition.z));
        Vector3 from = BagOutfit_10[0].transform.position;
        from.z = tool.position.z;

        // the whole outfit takes the place of the one in the bag
        tool.DOKill();
        ToolStep10.gameObject.SetActive(true);
        tool.position = from;

        SetAlpha(toolSR, 0f);
        toolSR.DOFade(1f, .25f);

        foreach (var piece in BagOutfit_10)
            piece.DOFade(0f, .25f);

        tool.DOMove(home, .7f).SetDelay(.15f).SetEase(Ease.InOutCubic).OnComplete(() =>
        {
            foreach (var piece in BagOutfit_10)
                piece.gameObject.SetActive(false);

            tool.DOPunchScale(tool.localScale * .03f, .3f, 6, .5f);

            // the pack goes to the left, uncovering the mannequin
            Bag_10.transform.DOKill();
            Bag_10.transform.DOLocalMoveX(Bag_10.transform.localPosition.x - 8f, .8f).SetEase(Ease.InBack).OnComplete(() =>
            {
                Bag_10.SetActive(false);
            });

            Fade(MannequinShadow_10, 1f, .6f);

            DOVirtual.DelayedCall(.3f, () =>
            {
                if (!isStep10Done)
                {
                    Hand_10B.SetActive(true);

                    ToolInputToggle(ToolStep10.gameObject, true);

                    ToolStep10.OnMouseDownEvent += () => Hand_10B.SetActive(false);

                    ToolStep10.OnMouseUpEvent += () =>
                    {
                        if (ToolStep10.dontResetItIsInCollider)
                            return;

                        if (isStep10Done)
                            return;

                        Hand_10B.SetActive(true);
                    };
                }
            });
        });
    }

    // ToolStep10's CG_Lvl3_PlaceItem.OnComplete
    public void Step10Done()
    {
        if (isStep10Done)
            return;

        isStep10Done = true;

        Hand_10B.SetActive(false);

        UI_Manager.instance.SetProgressBar(1f);

        Fade(MannequinDressed_10, 1f, .4f);
        Fade(MannequinBare_10, 0f, .4f);
        Fade(Trousers_10, 1f, .6f);

        SaveStep(10);

        StepCompleteEvent(10);

        CameraController.Instance.MoveCamera(ZoomStep9.CameraPos, ZoomStep9.CameraFOV);

        Invoke(nameof(StartStep11), 1.5f);
    }

    void ForceCompleteStep10()
    {
        ForceCompleteStep9();

        Bag_10.SetActive(false);
        OutfitTap_10.SetActive(false);
        ToolStep10.gameObject.SetActive(false);

        Mannequin_10.SetActive(true);
        SetAlpha(MannequinShadow_10, 1f);
        SetAlpha(MannequinDressed_10, 1f);
        SetAlpha(MannequinBare_10, 0f);
        SetAlpha(Trousers_10, 1f);
    }

    #endregion

    #region STEP 11 - BUTTONS

    bool isStep11Done;
    bool bunchHooked_11;
    bool bunchDropped_11;
    int buttonsSewn_11;

    void StartStep11()
    {
        if (!TryStartStep(StartStep11, 11))
            return;

        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep11.CameraPos, ZoomStep11.CameraFOV);

        if (!bunchHooked_11)
        {
            bunchHooked_11 = true;

            ToolStep11.OnMouseUpEvent += BunchReleased_11;
        }

        // The buttons come in as one bunch, sliding in from the right to the middle, to be dragged onto the jacket.
        DOVirtual.DelayedCall(1f, () =>
        {
            Transform bunch = ToolStep11.transform;
            Vector3 rest = bunch.position;

            ToolStep11.gameObject.SetActive(true);

            bunch.DOKill();
            bunch.position = rest + Vector3.right * 2.2f;
            bunch.DOMove(rest, .7f).SetEase(Ease.OutCubic).OnComplete(() =>
            {
                ToolInputToggle(ToolStep11.gameObject, true);

                Hand_11.SetActive(true);

                ToolStep11.OnMouseDownEvent += () => Hand_11.SetActive(false);
            });
        });
    }

    // The bunch is let go: over the jacket, every button goes to its place.
    void BunchReleased_11()
    {
        if (bunchDropped_11 || isStep11Done)
            return;

        if (!ButtonDetect_11.OverlapPoint(ToolStep11.transform.position))
            return;

        Hand_11.SetActive(false);

        bunchDropped_11 = true;

        ToolInputToggle(ToolStep11.gameObject, false);

        ToolStep11.isPlacedCannotMove = true;
        ToolStep11.transform.DOKill();

        UI_Manager.instance.SetProgressBar(0f);

        for (int i = 0; i < Buttons_11.Length; i++)
            ButtonFly_11(i);
    }

    void ButtonFly_11(int index)
    {
        Transform piece = ButtonBunch_11[index].transform;
        Transform slot = Buttons_11[index].transform;

        Vector3 ps = piece.parent.lossyScale, ss = slot.lossyScale;
        Vector3 scale = new Vector3(ss.x / ps.x, ss.y / ps.y, ss.z / ps.z);

        piece.DOKill();

        Sequence fly = DOTween.Sequence();
        fly.AppendInterval(.1f * index);
        fly.Append(piece.DOMove(slot.position, .5f).SetEase(Ease.InOutCubic));
        fly.Join(piece.DOScale(scale, .5f).SetEase(Ease.InOutCubic));
        fly.Join(piece.DORotate(slot.eulerAngles, .5f));
        fly.OnComplete(() => ButtonArrived_11(index));

        AudioController.instance.PlayAnySfx(Random.Range(0, 3), ButtonClip_11, 0.4f + (index * .15f));
    }

    void ButtonArrived_11(int index)
    {
        ButtonBunch_11[index].gameObject.SetActive(false);

        // just placed - no pop (the user's call)
        Buttons_11[index].SetActive(true);

        { /* [Luna] stripped: CG_VibrationManager.instance.LightImpact(); */ }

        buttonsSewn_11++;

        UI_Manager.instance.SetProgressBar((float)buttonsSewn_11 / Buttons_11.Length);

        if (buttonsSewn_11 >= Buttons_11.Length)
            Step11Done();
    }

    public void Step11Done()
    {
        if (isStep11Done)
            return;

        isStep11Done = true;

        ToolStep11.gameObject.SetActive(false);

        SaveStep(11);
        UI_Manager.instance.SetProgressBar(1f);
        StepCompleteEvent(11);
        Invoke(nameof(StartStep12), 1f);
    }

    void ForceCompleteStep11()
    {
        ForceCompleteStep10();
        ToolStep11.gameObject.SetActive(false);
        foreach (var button in Buttons_11) button.SetActive(true);
    }

    #endregion

    #region STEP 12 - BAT CHAIN

    bool chainHooked_12;
    bool chainDropped_12;
    bool isStep12Done;

    void StartStep12()
    {
        if (!TryStartStep(StartStep12, 12))
            return;

        AdvanceProgressIcon();

        CameraController.Instance.MoveCamera(ZoomStep12.CameraPos, ZoomStep12.CameraFOV);

        if (!chainHooked_12)
        {
            chainHooked_12 = true;

            ToolStep12.OnMouseUpEvent += ChainReleased_12;

            CG_DressFabricMotion.Attach(ToolStep12.GetComponent<SpriteRenderer>(), ToolStep12, chain: true);
        }

        Vector3 middle = ToolStep12.transform.position;
        ToolStep12.gameObject.SetActive(true);
        ToolStep12.transform.position = middle + Vector3.right * 3f;
        ToolStep12.transform.DOMove(middle, .7f).SetDelay(.4f).SetEase(Ease.OutCubic)
            .OnComplete(() =>
            {
                ToolInputToggle(ToolStep12.gameObject, true);

                Hand_12.SetActive(true);

                ToolStep12.OnMouseDownEvent += () => Hand_12.SetActive(false);
            });
    }

    void ChainReleased_12()
    {
        // BasicDrag can emit mouse-up twice; accept a successful placement only once.
        if (chainDropped_12 || isStep12Done || !NeckDetect_12.OverlapPoint(ToolStep12.transform.position))
            return;

        chainDropped_12 = true;

        ToolStep12.dontResetItIsInCollider = true;

        ToolStep12.isPlacedCannotMove = true;

        ToolInputToggle(ToolStep12.gameObject, false);

        ToolStep12.transform.DOKill();

        var motion = ToolStep12.GetComponent<CG_DressFabricMotion>();

        if (motion != null)
            motion.enabled = false;

        ToolStep12.transform.DOMove(ChainTarget_12.position, .3f).SetEase(Ease.OutSine).OnComplete(Step12Done);

        AudioController.instance.PlayAnySfx(2, Clip_12, .2f);
    }

    public void Step12Done()
    {
        if (isStep12Done)
            return;

        isStep12Done = true;

        Hand_12.SetActive(false);

        ToolStep12.gameObject.SetActive(false);

        PlacedChain_12.gameObject.SetActive(true);

        { /* [Luna] stripped: CG_VibrationManager.instance.LightImpact(); */ }

        AudioController.instance.PlayAnySfx(0, ButtonClip_11, 0f);

        CameraController.Instance.MoveCamera(MainZoom.CameraPos, MainZoom.CameraFOV);

        SaveStep(0);

        UI_Manager.instance.SetProgressBar(1f);

        StepCompleteEvent(12);

        Invoke(nameof(LevelComplete), 2f);
    }

    #endregion
}
