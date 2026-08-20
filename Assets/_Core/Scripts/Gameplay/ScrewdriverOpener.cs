using UnityEngine;
using DG.Tweening;
using UnityEngine.Events;

public class ScrewdriverOpener : MonoBehaviour
{
    [Space()]
    public UnityEvent OnComplete;

    [Space()]
    public BasicDrag Tool;

    [Space()]
    [Tooltip("Screw GameObjects that have trigger colliders.")]
    public GameObject[] Targets;

    [Space()]
    public AudioSource ScrewRemoveSource;
    public OutlinePulse[] OutlinePulse;

    [Space()]
    public AudioClip WhooshClip;

    [Space()]
    public Sprite screwOpenSP;
    public SpriteRenderer toolSprite;

    [Header("Magnet Snap")]
    public Vector2 snapOffset = Vector2.zero;
    public float snapDuration = 0.1f;

    [Header("Screwdriver Sprite Animation")]
    public Sprite toolIdleSprite;
    public Sprite[] toolAnimFrames;
    public float toolFrameInterval = 0.05f;

    [Header("Screw Sprite Animation")]
    public Sprite[] screwAnimFrames;
    public float screwFrameInterval = 0.05f;

    [Header("Unscrew")]
    public float totalHoldTime = 1f;
    public float unscrewLiftAmount = 0.28f;
    public float finishLiftAmount = 0.25f;

    [Header("Camera Zoom Per Screw")]
    [Tooltip("Push in on each screw as it is grabbed, then pull back out once it is out.")]
    public bool zoomOnScrew = true;

    [Tooltip("Ortho size while zoomed on a screw -- smaller is closer.")]
    public float screwZoomFOV = 3.5f;

    public float zoomInDuration = 1f;
    public float zoomOutDuration = 1f;

    [Tooltip("Time to slide between two screws that share the same close shot.")]
    public float zoomPanDuration = 0.2f;

    [Tooltip("Screws within this distance of the one just removed keep the camera in close, so a nearby pair is done in one shot before pulling back.")]
    public float zoomGroupRadius = 1.4f;

    [Tooltip("Shifts the zoomed framing off the screw, handy for keeping the screwdriver in shot.")]
    public Vector2 zoomOffset = Vector2.zero;

    private Collider2D tipCollider;

    private bool isPlaced;
    private bool isSnapping;
    private GameObject currentTarget;
    private SpriteRenderer currentScrewRenderer;
    private Sprite currentScrewIdleSprite;

    private bool readyForUnscrew;
    private bool isUnscrewing;
    private float unscrewProgress;
    private float holdTimer;
    private float screwFrameTimer;
    private int screwFrameIndex;
    private float toolFrameTimer;
    private int toolFrameIndex;
    private float vibeTimer;

    private Vector3 toolBasePos;
    private Vector3 screwBasePos;
    private bool hasLiftBases;

    private int currentTargetIndex = -1;
    private bool[] screwRemoved;

    private Vector3 wideCamPos;
    private float wideCamSize;
    private bool hasWideCam;
    private bool isZoomedIn;
    private float holdArmTime;

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
        if (toolSprite != null)
            toolSprite.flipX = false;

        if (toolIdleSprite == null && toolSprite != null)
            toolIdleSprite = toolSprite.sprite;

        ApplyToolIdleSprite();
        SetAllScrewMasks(false);

        if (Targets != null)
            screwRemoved = new bool[Targets.Length];

        if (OutlinePulse != null)
        {
            for (int i = 0; i < OutlinePulse.Length; i++)
            {
             /*   if (OutlinePulse[i] != null)
                    OutlinePulse[i].EnableAnim();*/
            }
        }
    }

    void Update()
    {
        if (!readyForUnscrew || currentTarget == null)
            return;

        if (Input.GetMouseButton(0))
        {
            if (!isUnscrewing)
                BeginUnscrewHold();

            holdTimer += Time.deltaTime;
            unscrewProgress = Mathf.Clamp01(holdTimer / totalHoldTime);

            UpdateScrewSpriteAnimation();
            UpdateToolSpriteAnimation();
            UpdateUnscrewLift();

            vibeTimer += Time.deltaTime;
            if (vibeTimer >= screwFrameInterval)
            {
                vibeTimer = 0f;
                
            }

            if (unscrewProgress >= 1f)
            {
                readyForUnscrew = false;
                isUnscrewing = false;
                StopUnscrewFeedback();
                ApplyToolIdleSprite();
                CompleteUnscrew();
            }
        }
        else if (isUnscrewing)
        {
            isUnscrewing = false;
            StopUnscrewFeedback();
            ApplyToolIdleSprite();
        }
    }

    void OnTriggerEnter2D(Collider2D col)
    {
        TryAttachFromTrigger(col);
    }

    void OnTriggerStay2D(Collider2D col)
    {
        TryAttachFromTrigger(col);
    }

    void OnTriggerExit2D(Collider2D col)
    {
        if (isPlaced || isSnapping || col == null)
            return;

        GameObject screw = ResolveTarget(col);
        if (currentTarget != null && screw == currentTarget)
        {
            currentTarget = null;
            if (Tool != null)
                Tool.dontResetItIsInCollider = false;
        }
    }

    void TryAttachFromTrigger(Collider2D col)
    {
        if (isPlaced || isSnapping || col == null || Tool == null)
            return;

        if (!Tool.canDrag || !Tool.isDragging)
            return;

        GameObject screw = ResolveTarget(col);
        if (screw == null)
            return;

        MagnetAttach(screw);
    }

    GameObject ResolveTarget(Collider2D col)
    {
        if (Targets == null || col == null)
            return null;

        GameObject hit = col.gameObject;

        for (int i = 0; i < Targets.Length; i++)
        {
            var t = Targets[i];
            if (t == null)
                continue;

            if (hit == t || hit.transform.IsChildOf(t.transform))
                return t;
        }

        return null;
    }

    void MagnetAttach(GameObject target)
    {
        if (isPlaced || isSnapping || target == null)
            return;

        isSnapping = true;
        isPlaced = true;
        currentTarget = target;
        currentTargetIndex = IndexOfTarget(target);

        unscrewProgress = 0f;
        holdTimer = 0f;
        screwFrameTimer = 0f;
        screwFrameIndex = 0;
        toolFrameTimer = 0f;
        toolFrameIndex = 0;
        vibeTimer = 0f;
        holdArmTime = 0f;

        ApplyToolIdleSprite();

        currentScrewRenderer = currentTarget.GetComponent<SpriteRenderer>();
        currentScrewIdleSprite = currentScrewRenderer != null ? currentScrewRenderer.sprite : null;

        if (currentScrewRenderer != null && screwAnimFrames != null && screwAnimFrames.Length > 0 && screwAnimFrames[0] != null)
            currentScrewRenderer.sprite = screwAnimFrames[0];

        SetScrewMask(currentTarget, true);

        var pulse = currentTarget.GetComponent<OutlinePulse>();
        if (pulse)
            pulse.DisableAnim();

        var screwCol = currentTarget.GetComponent<Collider2D>();
        if (screwCol)
            screwCol.enabled = false;

        ZoomToScrew(currentTarget);

        Tool.dontResetItIsInCollider = true;
        Tool.isDragging = false;
        Tool.canDrag = false;
        if (Tool.thisCollider != null)
            Tool.thisCollider.enabled = false;
        Tool.enabled = false;

        Vector3 tipOffset = transform.position - Tool.transform.position;
        Vector3 toolPos = currentTarget.transform.position - tipOffset;
        toolPos.x += snapOffset.x;
        toolPos.y += snapOffset.y;
        toolPos.z = Tool.transform.position.z;

        Tool.transform.DOKill();
        Tool.transform.DOMove(toolPos, snapDuration).SetEase(Ease.OutBack).OnComplete(() =>
        {
            isSnapping = false;

            toolBasePos = Tool.transform.position;
            screwBasePos = currentTarget.transform.position;
            hasLiftBases = true;

            // The snap is quicker than the push-in, so wait for the camera to
            // settle before the screw will take any input.
            float wait = holdArmTime - Time.time;
            if (wait > 0f)
                DOVirtual.DelayedCall(wait, ArmUnscrew);
            else
                ArmUnscrew();
        });

        
    }

    void ArmUnscrew()
    {
        // The player may have already pulled off this screw while we waited.
        if (!isPlaced || currentTarget == null)
            return;

        readyForUnscrew = true;

        if (Input.GetMouseButton(0))
            BeginUnscrewHold();
    }

    int IndexOfTarget(GameObject screw)
    {
        if (Targets == null || screw == null)
            return -1;

        for (int i = 0; i < Targets.Length; i++)
        {
            if (Targets[i] == screw)
                return i;
        }

        return -1;
    }

    void ZoomToScrew(GameObject screw)
    {
        if (!zoomOnScrew || screw == null)
            return;

        var controller = CameraController.Instance;
        if (controller == null || controller.cam == null)
            return;

        var cam = controller.cam;

        // Remember the level's own framing the first time in, so every screw
        // pulls back to the same shot rather than drifting.
        if (!hasWideCam)
        {
            wideCamPos = cam.transform.position;
            wideCamSize = cam.orthographic ? cam.orthographicSize : cam.fieldOfView;
            hasWideCam = true;
        }

        Vector3 focus = screw.transform.position;
        focus.x += zoomOffset.x;
        focus.y += zoomOffset.y;
        focus.z = wideCamPos.z;

        // Already in close? Then this is just a slide across to a neighbour.
        float duration = isZoomedIn ? zoomPanDuration : zoomInDuration;

        controller.MoveCamera(focus, screwZoomFOV, duration);
        holdArmTime = Time.time + duration;
        isZoomedIn = true;
    }

    void ZoomOutFromScrew()
    {
        if (!zoomOnScrew || !hasWideCam)
            return;

        var controller = CameraController.Instance;
        if (controller == null)
            return;

        controller.MoveCamera(wideCamPos, wideCamSize, zoomOutDuration);
        isZoomedIn = false;
    }

    bool HasPendingScrewNear(Vector3 point)
    {
        if (Targets == null || screwRemoved == null)
            return false;

        for (int i = 0; i < Targets.Length; i++)
        {
            if (Targets[i] == null || i >= screwRemoved.Length || screwRemoved[i])
                continue;

            if (Vector2.Distance(Targets[i].transform.position, point) <= zoomGroupRadius)
                return true;
        }

        return false;
    }

    void SetAllScrewMasks(bool on)
    {
        if (Targets == null)
            return;

        for (int i = 0; i < Targets.Length; i++)
            SetScrewMask(Targets[i], on);
    }

    void SetScrewMask(GameObject screw, bool on)
    {
        if (screw == null)
            return;

        var masks = screw.GetComponentsInChildren<SpriteMask>(true);
        for (int i = 0; i < masks.Length; i++)
        {
            if (masks[i] != null)
                masks[i].gameObject.SetActive(on);
        }
    }

    void BeginUnscrewHold()
    {
        isUnscrewing = true;
        screwFrameTimer = 0f;
        toolFrameTimer = 0f;
        vibeTimer = 0f;

        if (toolAnimFrames != null && toolAnimFrames.Length > 0 && toolSprite != null && toolAnimFrames[0] != null)
        {
            toolFrameIndex = 0;
            toolSprite.sprite = toolAnimFrames[0];
        }

        if (ScrewRemoveSource != null)
            ScrewRemoveSource.Play();

        
    }

    void ApplyToolIdleSprite()
    {
        if (toolSprite == null)
            return;

        toolSprite.flipX = false;

        if (toolIdleSprite != null)
            toolSprite.sprite = toolIdleSprite;
    }

    void StopUnscrewFeedback()
    {
        if (ScrewRemoveSource != null)
            ScrewRemoveSource.Stop();

        
    }

    void UpdateScrewSpriteAnimation()
    {
        if (currentScrewRenderer == null || screwAnimFrames == null || screwAnimFrames.Length == 0)
            return;

        screwFrameTimer += Time.deltaTime;
        if (screwFrameTimer < screwFrameInterval)
            return;

        screwFrameTimer = 0f;
        screwFrameIndex = (screwFrameIndex + 1) % screwAnimFrames.Length;

        if (screwAnimFrames[screwFrameIndex] != null)
            currentScrewRenderer.sprite = screwAnimFrames[screwFrameIndex];
    }

    void UpdateToolSpriteAnimation()
    {
        if (toolSprite == null || toolAnimFrames == null || toolAnimFrames.Length == 0)
            return;

        toolFrameTimer += Time.deltaTime;
        if (toolFrameTimer < toolFrameInterval)
            return;

        toolFrameTimer = 0f;
        toolFrameIndex = (toolFrameIndex + 1) % toolAnimFrames.Length;

        if (toolAnimFrames[toolFrameIndex] != null)
            toolSprite.sprite = toolAnimFrames[toolFrameIndex];
    }

    void UpdateUnscrewLift()
    {
        if (!hasLiftBases || Tool == null || currentTarget == null)
            return;

        float lift = unscrewLiftAmount * unscrewProgress;

        Vector3 toolPos = toolBasePos;
        toolPos.y += lift;
        Tool.transform.position = toolPos;

        Vector3 screwPos = screwBasePos;
        screwPos.y += lift;
        currentTarget.transform.position = screwPos;
    }

    void CompleteUnscrew()
    {
        // Grab this before the screw lifts and slides off screen.
        Vector3 finishedAt = currentTarget.transform.position;

        if (currentTargetIndex >= 0 && screwRemoved != null && currentTargetIndex < screwRemoved.Length)
            screwRemoved[currentTargetIndex] = true;

        // Hold the close shot when a neighbour is still waiting, so a cluster of
        // screws gets done in one framing instead of pulling back between each.
        if (!HasPendingScrewNear(finishedAt))
            ZoomOutFromScrew();

        var ps = currentTarget.GetComponentInChildren<ParticleSystem>();
        if (ps) ps.Play();

        currentTarget.transform.rotation = Quaternion.identity;
        if (currentScrewRenderer != null)
        {
            if (screwOpenSP != null)
                currentScrewRenderer.sprite = screwOpenSP;
            else if (currentScrewIdleSprite != null)
                currentScrewRenderer.sprite = currentScrewIdleSprite;
        }

        UpdateUnscrewLift();

        Tool.transform.DOKill();
        currentTarget.transform.DOKill();

        float lift = finishLiftAmount;
        Tool.transform.DOMoveY(Tool.transform.position.y + lift, 0.35f);
        currentTarget.transform.DOMoveY(currentTarget.transform.position.y + lift, 0.35f);

        DOVirtual.DelayedCall(0.35f, () =>
        {
            GameObject screw = currentTarget;
            if (screw == null)
                return;

            screw.transform.DOKill();
            screw.transform.DOMoveX(10f, 0.5f).OnComplete(() =>
            {
                if (screw != null)
                    screw.SetActive(false);
            });

            if (WhooshClip)
                AudioController.instance.PlayAnySfx(1, WhooshClip, 0);

            DOVirtual.DelayedCall(0.35f, () =>
            {
                bool hasMoreScrews = HasRemainingScrews(screw);

                OnComplete.Invoke();

                currentTarget = null;
                currentTargetIndex = -1;
                currentScrewRenderer = null;
                currentScrewIdleSprite = null;
                isPlaced = false;
                isSnapping = false;
                readyForUnscrew = false;
                isUnscrewing = false;
                hasLiftBases = false;

                if (hasMoreScrews)
                {
                    Tool.enabled = true;
                    if (Tool.thisCollider != null)
                        Tool.thisCollider.enabled = true;
                    Tool.canDrag = true;
                    Tool.dontResetItIsInCollider = false;

                    if (tipCollider != null)
                        tipCollider.enabled = true;
                }
                else
                {
                    Tool.enabled = false;
                    Tool.canDrag = false;
                    Tool.isDragging = false;
                    Tool.dontResetItIsInCollider = true;
                    if (Tool.thisCollider != null)
                        Tool.thisCollider.enabled = false;

                    if (tipCollider != null)
                        tipCollider.enabled = false;
                }

                ApplyToolIdleSprite();

                if (hasMoreScrews && OutlinePulse != null)
                {
                    foreach (var p in OutlinePulse)
                    {
                        if (p && p.gameObject.activeSelf)
                            p.EnableAnim();
                    }
                }
            });
        });
    }

    bool HasRemainingScrews(GameObject justRemoved)
    {
        if (Targets == null)
            return false;

        for (int i = 0; i < Targets.Length; i++)
        {
            var t = Targets[i];
            if (t != null && t != justRemoved && t.activeInHierarchy)
                return true;
        }

        return false;
    }
}
