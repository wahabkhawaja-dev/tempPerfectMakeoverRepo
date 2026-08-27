using UnityEngine;
using DG.Tweening;
using UnityEngine.Events;

public class SolderingIron : MonoBehaviour
{
    [Space()]
    public UnityEvent OnComplete;

    [Header("Soldering Iron")]
    public BasicDrag Tool;
    [Space()]
    public BD_ToolRotate ToolRotate;

    [Tooltip("Circuit / pad collider object that the iron tip must trigger.")]
    public GameObject CircuitTarget;

    [Tooltip("World position the soldering iron snaps to.")]
    public Transform IronSolderingPos;

    [Header("Rod")]
    public Transform Rod;

    [Tooltip("Rod local X position to move to (Y/Z stay same).")]
    public float rodTargetLocalX = -0.685f;

    [Tooltip("How long the rod takes to reach target X.")]
    public float rodMoveDuration = 0.35f;

    [Tooltip("Rod scale multiplier while soldering (e.g. 0.85 = shrink 15%).")]
    [Range(0.5f, 1f)]
    public float rodShrinkScale = 0.85f;

    [Tooltip("How far the rod creeps while soldering, so it reads as being used up. X follows the direction the rod came from; Y is applied as-is (negative dips it down).")]
    public Vector2 rodSolderFeed = new Vector2(0.06f, -0.04f);

    [Header("Magnet Snap")]
    public Vector2 snapOffset = Vector2.zero;
    public float snapDuration = 0.15f;

    [Header("Soldering")]
    [Tooltip("Solder result image that fades in during soldering.")]
    public SpriteRenderer SolderFadeImage;

    [Range(0f, 0.95f)]
    [Tooltip("Progress at which the finished solder starts fading in. Everything before this is pure molten, so the result lands on top of it.")]
    public float solderFadeStartProgress = 0.45f;

    [Tooltip("On: the player must press and hold to solder. Off: soldering plays out on its own once the iron is in place.")]
    public bool requireHoldToSolder = true;

    [Tooltip("How long soldering takes -- hold time when Require Hold is on, otherwise the automatic duration.")]
    public float solderDuration = 1.5f;

    public ParticleSystem SolderingParticles;
    public AudioSource SolderingAudio;

    [Tooltip("Soldering sizzle clip — plays while soldering.")]
    public AudioClip SolderingClip;

    [Header("Molten Solder Effect")]
    [Tooltip("Overlay renderer that plays the molten / watery frames while soldering.")]
    public SpriteRenderer SolderMoltenRenderer;

    [Tooltip("Frames that loop to sell the molten, watery look.")]
    public Sprite[] solderAnimFrames;
    public float solderFrameInterval = 0.06f;

    [Tooltip("Fade time for the molten overlay coming in and going out.")]
    public float moltenFadeDuration = 0.2f;

    [Tooltip("Tint the molten overlay at the start and let it settle to white. Turn this off if you supply frame art that already carries its own colour.")]
    public bool tintMolten = true;

    [Tooltip("Starting tint for the molten overlay, settling to white as the solder sets. Molten solder is liquid silver, not forge-orange -- keep this near white or it reads as the wrong metal.")]
    public Color moltenTint = new Color(0.9f, 0.94f, 1f, 1f);

    [Range(0f, 1f)]
    [Tooltip("Size the molten blob starts at, as a fraction of full. It grows to full size as the solder builds up.")]
    public float moltenStartScale = 0.3f;

    [Header("Watery Wobble (needs no art)")]
    [Tooltip("Wobbles the solder result while soldering so it reads as molten. Works without any frame art.")]
    public bool useWateryWobble = true;

    [Tooltip("How much the solder swells and squashes, as a fraction of its size.")]
    public float wobbleScaleAmount = 0.07f;

    [Tooltip("How far the solder shivers around its resting spot.")]
    public float wobbleShiftAmount = 0.012f;

    [Tooltip("Wobble cycles per second -- higher reads as thinner, runnier solder.")]
    public float wobbleSpeed = 9f;

    [Header("Camera Zoom")]
    [Tooltip("Slight ortho zoom-in while soldering (smaller = more zoom).")]
    public bool zoomCameraOnSolder = true;
    public float solderZoomFOV = 3.6f;
    public float zoomDuration = 0.45f;
    public Transform zoomFocus;

    [Header("Optional")]
    public OutlinePulse CircuitOutline;
    public BD_CameraFollow CameraFollow;

    public GameObject Indication;

    [Header("Wax Dip")]
    [Tooltip("Wax / soap the iron must dip into before soldering.")]
    public GameObject WaxTarget;

    [Tooltip("On: circuit soldering only starts after the iron has dipped in wax.")]
    public bool requireWaxDip = true;

    [Tooltip("On: the circuit nishan is placed at the iron tip instead of the fixed pad.")]
    public bool placeCircuitMarkAtContact = true;

    public UnityEvent OnWaxDipped;

    [Tooltip("Iron rotation while moving toward the wax.")]
    public Vector3 waxApproachRotation = new Vector3(0f, 0f, -10f);

    [Tooltip("Iron rotation after the wax dip, while going to the soldering place.")]
    public Vector3 waxDragRotation = new Vector3(0f, 0f, -45f);

    [Tooltip("Extra dip particles on the tip.")]
    public ParticleSystem WaxDipParticles;

    private Collider2D tipCollider;
    private bool isBusy;
    private bool solderingStarted;
    private float rodStartLocalX;

    private bool readyForHold;
    private bool isHolding;
    private float holdTimer;
    private float progress;

    private Vector3 rodBaseScale;
    private Vector3 rodSolderTargetScale;
    private float rodSolderStartX;
    private float rodSolderEndX;
    private float rodSolderStartY;
    private float rodSolderEndY;
    private bool hasSolderBases;

    private float solderFrameTimer;
    private int solderFrameIndex;

    private Vector3 wobbleBaseScale;
    private Vector3 wobbleBasePos;
    private bool hasWobbleBase;

    private bool waxDipped;

    void Awake()
    {
        tipCollider = GetComponent<Collider2D>();
        if (tipCollider != null)
        {
            tipCollider.isTrigger = true;
            tipCollider.enabled = true;
        }

        var rb = GetComponent<Rigidbody2D>();
        if (rb == null)
            rb = gameObject.AddComponent<Rigidbody2D>();

        rb.bodyType = RigidbodyType2D.Kinematic;
        rb.simulated = true;
        rb.collisionDetectionMode = CollisionDetectionMode2D.Continuous;
    }

    void Start()
    {
        if (SolderFadeImage != null)
        {
            var c = SolderFadeImage.color;
            c.a = 0f;
            SolderFadeImage.color = c;
        }

        // Kept hidden via 'enabled' rather than alpha, so a stray save leaves an
        // obvious unchecked box instead of an invisible renderer.
        if (SolderMoltenRenderer != null)
            SolderMoltenRenderer.enabled = false;

      /*  if (CircuitOutline != null)
           // CircuitOutline.EnableAnim();*/
    }

    void OnTriggerEnter2D(Collider2D col)
    {
        TryStartFromTrigger(col);
    }

    void OnTriggerStay2D(Collider2D col)
    {
        TryStartFromTrigger(col);
    }

    void TryStartFromTrigger(Collider2D col)
    {
        if (isBusy || solderingStarted || col == null || Tool == null || CircuitTarget == null)
            return;

        if (!Tool.canDrag || !Tool.isDragging)
            return;

        if (IsWaxHit(col))
        {
            DipInWax();
            return;
        }

        if (requireWaxDip && WaxTarget != null && !waxDipped)
            return;

        if (CircuitTarget == null)
            return;

        if (col.gameObject != CircuitTarget && !col.transform.IsChildOf(CircuitTarget.transform))
            return;

        BeginSequence();
    }

    bool IsWaxHit(Collider2D col)
    {
        if (WaxTarget == null || col == null)
            return false;

        return col.gameObject == WaxTarget || col.transform.IsChildOf(WaxTarget.transform);
    }

    void DipInWax()
    {
        if (waxDipped || isBusy)
            return;

        waxDipped = true;
        isBusy = true;

        LockIronAtWax();

        if (WaxDipParticles != null)
            WaxDipParticles.Play();

        if (SolderingAudio != null && SolderingClip != null)
        {
            SolderingAudio.clip = SolderingClip;
            SolderingAudio.loop = true;
            SolderingAudio.Play();
        }

        // VibrationManager.instance.MediumImpact();

        if (Indication != null)
            Indication.SetActive(false);

        OnWaxDipped?.Invoke();

        DOVirtual.DelayedCall(1.6f, FinishWaxDipHold);
    }

    void LockIronAtWax()
    {
      /*  Tool.dontResetItIsInCollider = true;
        Tool.isDragging = false;
        Tool.canDrag = false;
        if (Tool.thisCollider != null)
            Tool.thisCollider.enabled = false;
        Tool.enabled = false;*/

        if (CameraFollow == null)
            CameraFollow = Tool.GetComponent<BD_CameraFollow>();
        if (CameraFollow != null)
            CameraFollow.enabled = false;
    }

    void FinishWaxDipHold()
    {
        if (WaxDipParticles != null)
            WaxDipParticles.Stop(true, ParticleSystemStopBehavior.StopEmitting);

        if (SolderingAudio != null)
        {
            SolderingAudio.loop = false;
            SolderingAudio.Stop();
        }

        Tool.transform.DOLocalRotate(waxDragRotation, 0.25f).SetEase(Ease.OutCubic);

        Tool.enabled = true;
        Tool.canDrag = true;
       // Tool.isDragging = false;
        Tool.dontResetItIsInCollider = false;
        if (Tool.thisCollider != null)
            Tool.thisCollider.enabled = true;

        if (CameraFollow != null)
            CameraFollow.enabled = true;

        isBusy = false;
    }

    void BeginSequence()
    {
        if (isBusy)
            return;

        isBusy = true;
        solderingStarted = false;
        Indication.SetActive(false);
        if (CircuitOutline != null)
            CircuitOutline.DisableAnim();

        // Lock iron drag
        Tool.dontResetItIsInCollider = true;
        Tool.isDragging = false;
        Tool.canDrag = false;
        if (Tool.thisCollider != null)
            Tool.thisCollider.enabled = false;
        Tool.enabled = false;

        if (CircuitTarget != null)
        {
            var circuitCol = CircuitTarget.GetComponent<Collider2D>();
            if (circuitCol != null)
                circuitCol.enabled = false;
        }

        // Stop follow so it won't kill camera tweens while tool locks
        if (CameraFollow == null && Tool != null)
            CameraFollow = Tool.GetComponent<BD_CameraFollow>();
        if (CameraFollow != null)
            CameraFollow.enabled = false;

        if (placeCircuitMarkAtContact)
        {
            PlaceCircuitMarkAtTip();
            ZoomCameraThenRod();
        }
        else
        {
            MoveIronToPosition();
        }

        // VibrationManager.instance.MediumImpact();
    }

    void PlaceCircuitMarkAtTip()
    {
        Vector3 pos = transform.position;

        if (SolderFadeImage != null)
        {
            pos.z = SolderFadeImage.transform.position.z;
            SolderFadeImage.transform.position = pos;
        }

        if (SolderMoltenRenderer != null)
        {
            Vector3 moltenPos = pos;
            moltenPos.z = SolderMoltenRenderer.transform.position.z;
            SolderMoltenRenderer.transform.position = moltenPos;
        }
    }

    void MoveIronToPosition()
    {
        ToolRotate.enabled = false;
        // Always align the TIP (this object) to the solder point — not the iron body/root
        Vector3 tipTarget;

        if (IronSolderingPos != null)
            tipTarget = IronSolderingPos.position;
        else if (CircuitTarget != null)
            tipTarget = CircuitTarget.transform.position;
        else
            tipTarget = transform.position;

        tipTarget.x += snapOffset.x;
        tipTarget.y += snapOffset.y;

        Vector3 tipOffset = transform.position - Tool.transform.position;
        Vector3 toolPos = tipTarget - tipOffset;
        toolPos.z = Tool.transform.position.z;

        

        Tool.transform.DOKill();
        Tool.transform.DOMove(toolPos, snapDuration).SetEase(Ease.OutBack).OnComplete(ZoomCameraThenRod);
    }

    void ZoomCameraThenRod()
    {
        if (!zoomCameraOnSolder || CameraController.Instance == null)
        {
            MoveRodToPosition();
            return;
        }

        Vector3 focus = transform.position;
        if (zoomFocus != null)
            focus = zoomFocus.position;
        else if (IronSolderingPos != null)
            focus = IronSolderingPos.position;

        focus.z = -10f;
        CameraController.Instance.MoveCamera(focus, solderZoomFOV, zoomDuration);
        DOVirtual.DelayedCall(zoomDuration, MoveRodToPosition);
    }

    void MoveRodToPosition()
    {
        if (Rod == null)
        {
            ReadyForSoldering();
            return;
        }

        // Only move local X — keep current Y/Z
        rodStartLocalX = Rod.localPosition.x;

        Rod.DOKill();
        Rod.DOLocalMoveX(rodTargetLocalX, rodMoveDuration).SetEase(Ease.OutCubic).OnComplete(ReadyForSoldering);
    }

    void ReadyForSoldering()
    {
        if (solderingStarted)
            return;

        if (Rod != null)
        {
            rodBaseScale = Rod.localScale;
            rodSolderTargetScale = rodBaseScale * rodShrinkScale;

            rodSolderStartX = Rod.localPosition.x;
            rodSolderStartY = Rod.localPosition.y;

            // Keep creeping in the same direction it approached from, so the rod
            // looks like it is being fed into the joint rather than sitting still.
            float dir = Mathf.Sign(rodTargetLocalX - rodStartLocalX);
            if (dir == 0f)
                dir = -1f;

            rodSolderEndX = rodSolderStartX + dir * rodSolderFeed.x;
            rodSolderEndY = rodSolderStartY + rodSolderFeed.y;

            hasSolderBases = true;
        }

        var wobbleTarget = WobbleTarget;
        if (wobbleTarget != null)
        {
            wobbleBaseScale = wobbleTarget.transform.localScale;
            wobbleBasePos = wobbleTarget.transform.localPosition;
            hasWobbleBase = true;
        }

        readyForHold = true;

        if (IsSolderInputHeld())
            BeginHold();
    }

    bool IsSolderInputHeld()
    {
        return !requireHoldToSolder || Input.GetMouseButton(0);
    }

    void Update()
    {
        if (!readyForHold)
            return;

        if (IsSolderInputHeld())
        {
            if (!isHolding)
                BeginHold();

            holdTimer += Time.deltaTime;
            progress = Mathf.Clamp01(holdTimer / solderDuration);

            UpdateSolderProgress();
            UpdateMoltenAnimation();
            UpdateMoltenTint();
            UpdateMoltenTransform();

            if (progress >= 1f)
            {
                readyForHold = false;
                isHolding = false;
                StopHoldFeedback();
                FinishSoldering();
            }
        }

        else if (isHolding)
        {
            isHolding = false;
            StopHoldFeedback();
        }
    }

    void BeginHold()
    {
        isHolding = true;

        ShowMolten();

        if (SolderingParticles != null)
            SolderingParticles.Play();

        if (SolderingAudio != null && SolderingClip != null)
        {
            SolderingAudio.clip = SolderingClip;
            SolderingAudio.loop = true;
            SolderingAudio.Play();
        }

        // VibrationManager.instance.StartVibration();
    }

    void StopHoldFeedback()
    {
        HideMolten();

        if (SolderingParticles != null)
            SolderingParticles.Stop(true, ParticleSystemStopBehavior.StopEmitting);

        if (SolderingAudio != null)
            SolderingAudio.Stop();

        // VibrationManager.instance.StopVibration();
    }

    void ShowMolten()
    {
        if (SolderMoltenRenderer == null)
            return;

        SolderMoltenRenderer.DOKill();

        // With no frame art supplied, borrow the result sprite and tint it hot so
        // there is still something molten to look at before the result lands.
        // Only restart from transparent when it was actually off, otherwise
        // re-gripping mid-solder would flicker the overlay back to nothing.
        if (!SolderMoltenRenderer.enabled)
        {
            SolderMoltenRenderer.enabled = true;

            Color c = tintMolten ? moltenTint : SolderMoltenRenderer.color;
            c.a = 0f;
            SolderMoltenRenderer.color = c;

            // Start small right away, so it never flashes at full size for a frame.
            if (hasWobbleBase)
            {
                float growth = MoltenGrowth();
                SolderMoltenRenderer.transform.localScale = new Vector3(
                    wobbleBaseScale.x * growth,
                    wobbleBaseScale.y * growth,
                    wobbleBaseScale.z);
            }
        }

        SolderMoltenRenderer.DOFade(1f, moltenFadeDuration);
    }

    void HideMolten()
    {
        if (SolderMoltenRenderer == null || !SolderMoltenRenderer.enabled)
            return;

        var renderer = SolderMoltenRenderer;
        renderer.DOKill();
        renderer.DOFade(0f, moltenFadeDuration).OnComplete(() =>
        {
            if (renderer != null)
                renderer.enabled = false;
        });
    }

    // The molten overlay is what should be sloshing about; fall back to the
    // result sprite when no overlay is wired up.
    SpriteRenderer WobbleTarget
    {
        get { return SolderMoltenRenderer != null ? SolderMoltenRenderer : SolderFadeImage; }
    }

    void UpdateMoltenTransform()
    {
        var target = WobbleTarget;
        if (!hasWobbleBase || target == null)
            return;

        // Growth belongs to the molten blob only -- the finished solder is always full size.
        float growth = target == SolderMoltenRenderer ? MoltenGrowth() : 1f;

        float squashX = 1f;
        float squashY = 1f;
        Vector3 shift = Vector3.zero;

        if (useWateryWobble)
        {
            float t = Time.time * wobbleSpeed;

            // Ease the wobble in and back out so the solder is calm as it sets.
            float envelope = Mathf.Sin(progress * Mathf.PI);

            squashX = 1f + Mathf.Sin(t) * wobbleScaleAmount * envelope;
            squashY = 1f + Mathf.Cos(t * 1.3f) * wobbleScaleAmount * envelope;

            shift.x = Mathf.Sin(t * 1.7f) * wobbleShiftAmount * envelope;
            shift.y = Mathf.Cos(t * 2.1f) * wobbleShiftAmount * envelope;
        }

        var tr = target.transform;

        tr.localScale = new Vector3(
            wobbleBaseScale.x * growth * squashX,
            wobbleBaseScale.y * growth * squashY,
            wobbleBaseScale.z);

        tr.localPosition = wobbleBasePos + shift;
    }

    float MoltenGrowth()
    {
        return Mathf.Lerp(moltenStartScale, 1f, progress);
    }

    void SettleWobble()
    {
        var target = WobbleTarget;
        if (!hasWobbleBase || target == null)
            return;

        target.transform.localScale = wobbleBaseScale;
        target.transform.localPosition = wobbleBasePos;
    }

    void UpdateMoltenTint()
    {
        if (SolderMoltenRenderer == null || !tintMolten)
            return;

        Color c = Color.Lerp(moltenTint, Color.white, progress);

        // Alpha belongs to the fade tween, so leave whatever it set alone.
        c.a = SolderMoltenRenderer.color.a;
        SolderMoltenRenderer.color = c;
    }

    void UpdateMoltenAnimation()
    {
        if (SolderMoltenRenderer == null || solderAnimFrames == null || solderAnimFrames.Length == 0)
            return;

        solderFrameTimer += Time.deltaTime;
        if (solderFrameTimer < solderFrameInterval)
            return;

        solderFrameTimer = 0f;
        solderFrameIndex = (solderFrameIndex + 1) % solderAnimFrames.Length;

        if (solderAnimFrames[solderFrameIndex] != null)
            SolderMoltenRenderer.sprite = solderAnimFrames[solderFrameIndex];
    }

    void UpdateSolderProgress()
    {
        if (SolderFadeImage != null)
        {
            // Hold the finished solder back until the molten stage has had its moment.
            Color c = SolderFadeImage.color;
            c.a = Mathf.InverseLerp(solderFadeStartProgress, 1f, progress);
            SolderFadeImage.color = c;
        }

        if (!hasSolderBases || Rod == null)
            return;

        Rod.localScale = Vector3.Lerp(rodBaseScale, rodSolderTargetScale, progress);

        Vector3 rodPos = Rod.localPosition;
        rodPos.x = Mathf.Lerp(rodSolderStartX, rodSolderEndX, progress);
        rodPos.y = Mathf.Lerp(rodSolderStartY, rodSolderEndY, progress);
        Rod.localPosition = rodPos;
    }

    void FinishSoldering()
    {
        solderingStarted = true;

        progress = 1f;
        UpdateSolderProgress();
        SettleWobble();

        // VibrationManager.instance.MediumImpact();

        // Keep iron locked on pad after done
        OnComplete?.Invoke();
    }
}
