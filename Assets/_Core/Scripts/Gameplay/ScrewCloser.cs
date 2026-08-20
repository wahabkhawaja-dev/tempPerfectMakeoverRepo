using System.Collections;
using UnityEngine;
using DG.Tweening;
using UnityEngine.Events;

public class ScrewCloser : MonoBehaviour
{
    [Space()]
    public UnityEvent OnComplete;

    [Space()]
    public BasicDrag Tool;

    [Space()]
    [Tooltip("Screw GameObjects that have trigger colliders.")]
    public GameObject[] Targets;

    [Space()]
    public AudioSource ScrewTightenSource;
    public OutlinePulse[] OutlinePulse;

    [Space()]
    public AudioClip WhooshClip;

    [Space()]
    public Sprite screwClosedSP;
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

    [Header("Tighten Complete Feel")]
    [Tooltip("How far the screwdriver pops up when a screw finishes tightening.")]
    public float toolLiftHeight = 0.05f;
    public float toolLiftDuration = 0.12f;

    [Header("Screw In")]
    public float totalHoldTime = 1f;

    [Tooltip("How far above the final seat the screw starts (straight, no tilt).")]
    public float startHeightOffset = 0.28f;

    [Header("Screw Entry Animation")]
    [Tooltip("If on, screws fade in from above and drop onto their start height, one by one. If off, they just appear at their start height instantly.")]
    public bool animateScrewsIn = true;

    [Tooltip("Pause after the screws become visible, before the first one drops in.")]
    public float entryStartDelay = 0.4f;

    [Tooltip("How far above the start height each screw fades in from.")]
    public float entryDropHeight = 0.35f;
    public float entryDuration = 0.4f;
    public float entryStaggerDelay = 0.18f;
    public Ease entryEase = Ease.OutBack;

    [Header("Camera Zoom Per Screw")]
    [Tooltip("Push in on each screw as it is grabbed, then pull back out once it is tight.")]
    public bool zoomOnScrew = true;

    [Tooltip("Ortho size while zoomed on a screw -- smaller is closer.")]
    public float screwZoomFOV = 2.5f;

    public float zoomInDuration = 0.35f;
    public float zoomOutDuration = 0.35f;

    [Tooltip("Time to slide between two screws that share the same close shot.")]
    public float zoomPanDuration = 0.2f;

    [Tooltip("Screws within this distance of the one just finished keep the camera in close, so a nearby pair is done in one shot before pulling back.")]
    public float zoomGroupRadius = 0.6f;

    [Tooltip("Shifts the zoomed framing off the screw, handy for keeping the screwdriver in shot.")]
    public Vector2 zoomOffset = Vector2.zero;

    private Collider2D tipCollider;

    private bool isPlaced;
    private bool isSnapping;
    private GameObject currentTarget;
    private SpriteRenderer currentScrewRenderer;
    private int currentTargetIndex = -1;

    private bool readyForHold;
    private bool isHolding;
    private float progress;
    private float holdTimer;
    private float screwFrameTimer;
    private int screwFrameIndex;
    private float toolFrameTimer;
    private int toolFrameIndex;
    private float vibeTimer;

    private Vector3 toolBasePos;
    private Vector3 screwBasePos;
    private Vector3 screwSeatedPos;
    private Vector3 tipLocalOffset;
    private bool hasMotionBases;

    private Vector3[] seatedPositions;
    private bool[] screwDone;
    private Vector3[] entryTargetPositions;

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
        PrepareScrewsAtHeight();

        // With the entry animation on, the pulse waits until the screws have landed.
        if (!animateScrewsIn)
            EnableAllOutlinePulses();
    }

    void EnableAllOutlinePulses()
    {
        if (OutlinePulse == null)
            return;

        for (int i = 0; i < OutlinePulse.Length; i++)
        {
            if (OutlinePulse[i] != null)
                OutlinePulse[i].EnableAnim();
        }
    }

    void PrepareScrewsAtHeight()
    {
        if (Targets == null)
            return;

        seatedPositions = new Vector3[Targets.Length];
        screwDone = new bool[Targets.Length];
        entryTargetPositions = new Vector3[Targets.Length];

        for (int i = 0; i < Targets.Length; i++)
        {
            var t = Targets[i];
            if (t == null)
                continue;

            // Current transform = final tight seat
            seatedPositions[i] = t.transform.position;

            t.SetActive(true);
            t.transform.rotation = Quaternion.identity;

            Vector3 floatPos = seatedPositions[i] + Vector3.up * startHeightOffset;

            var col = t.GetComponent<Collider2D>();
            if (col != null)
                col.enabled = true;

            var sr = t.GetComponent<SpriteRenderer>();
            if (sr != null && screwAnimFrames != null && screwAnimFrames.Length > 0 && screwAnimFrames[0] != null)
                sr.sprite = screwAnimFrames[0];

            entryTargetPositions[i] = floatPos;

            if (animateScrewsIn)
            {
                // Park each screw at its entry pose. The actual tween waits until the
                // screws are really on screen -- their container is switched on later
                // by the level flow, and a tween played while hidden is a tween nobody sees.
                t.transform.DOKill();
                t.transform.position = floatPos + Vector3.up * entryDropHeight;
                SetScrewAlpha(t, 0f);
            }
            else
            {
                t.transform.position = floatPos;
                SetScrewAlpha(t, 1f);
            }
        }

        if (animateScrewsIn)
            StartCoroutine(PlayEntryWhenVisible());
    }

    IEnumerator PlayEntryWhenVisible()
    {
        while (!AnyScrewVisible())
            yield return null;

        if (entryStartDelay > 0f)
            yield return new WaitForSeconds(entryStartDelay);

        float lastDelay = 0f;

        for (int i = 0; i < Targets.Length; i++)
        {
            var t = Targets[i];
            if (t == null)
                continue;

            float delay = i * entryStaggerDelay;
            lastDelay = delay;

            FadeScrewAlpha(t, 1f, entryDuration, delay);

            t.transform.DOKill();
            t.transform.DOMove(entryTargetPositions[i], entryDuration)
                .SetEase(entryEase)
                .SetDelay(delay);
        }

        // Let every screw settle before the outline starts drawing attention to them.
        yield return new WaitForSeconds(lastDelay + entryDuration);

        EnableAllOutlinePulses();
    }

    bool AnyScrewVisible()
    {
        if (Targets == null)
            return false;

        for (int i = 0; i < Targets.Length; i++)
        {
            if (Targets[i] != null && Targets[i].activeInHierarchy)
                return true;
        }

        return false;
    }

    void SetScrewAlpha(GameObject screw, float alpha)
    {
        if (screw == null)
            return;

        var renderers = screw.GetComponentsInChildren<SpriteRenderer>(true);
        for (int i = 0; i < renderers.Length; i++)
        {
            if (renderers[i] == null)
                continue;

            Color c = renderers[i].color;
            c.a = alpha;
            renderers[i].color = c;
        }
    }

    void FadeScrewAlpha(GameObject screw, float alpha, float duration, float delay)
    {
        if (screw == null)
            return;

        var renderers = screw.GetComponentsInChildren<SpriteRenderer>(true);
        for (int i = 0; i < renderers.Length; i++)
        {
            if (renderers[i] == null)
                continue;

            renderers[i].DOKill();
            renderers[i].DOFade(alpha, duration).SetDelay(delay);
        }
    }

    void Update()
    {
        if (!readyForHold || currentTarget == null)
            return;

        if (Input.GetMouseButton(0))
        {
            if (!isHolding)
                BeginHold();

            holdTimer += Time.deltaTime;
            progress = Mathf.Clamp01(holdTimer / totalHoldTime);

            UpdateScrewSpriteAnimation();
            UpdateToolSpriteAnimation();
            UpdateTightenMotion();

            vibeTimer += Time.deltaTime;
            if (vibeTimer >= screwFrameInterval)
            {
                vibeTimer = 0f;
                
            }

            if (progress >= 1f)
            {
                readyForHold = false;
                isHolding = false;
                StopHoldFeedback();
                ApplyToolIdleSprite();
                CompleteTighten();
            }
        }
        else if (isHolding)
        {
            isHolding = false;
            StopHoldFeedback();
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

        int index = IndexOfTarget(screw);
        if (index >= 0 && screwDone != null && index < screwDone.Length && screwDone[index])
            return;

        MagnetAttach(screw, index);
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

    void MagnetAttach(GameObject target, int index)
    {
        if (isPlaced || isSnapping || target == null)
            return;

        isSnapping = true;
        isPlaced = true;
        currentTarget = target;
        currentTargetIndex = index;

        progress = 0f;
        holdTimer = 0f;
        screwFrameTimer = 0f;
        screwFrameIndex = 0;
        toolFrameTimer = 0f;
        toolFrameIndex = 0;
        vibeTimer = 0f;
        holdArmTime = 0f;

        ApplyToolIdleSprite();

        currentScrewRenderer = currentTarget.GetComponent<SpriteRenderer>();

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

        tipLocalOffset = transform.position - Tool.transform.position;
        Vector3 toolPos = currentTarget.transform.position - tipLocalOffset;
        toolPos.x += snapOffset.x;
        toolPos.y += snapOffset.y;
        toolPos.z = Tool.transform.position.z;

        Tool.transform.DOKill();
        Tool.transform.DOMove(toolPos, snapDuration).SetEase(Ease.OutBack).OnComplete(() =>
        {
            isSnapping = false;

            tipLocalOffset = transform.position - Tool.transform.position;
            toolBasePos = Tool.transform.position;
            screwBasePos = currentTarget.transform.position;
            hasMotionBases = true;

            if (currentTargetIndex >= 0 && seatedPositions != null)
                screwSeatedPos = seatedPositions[currentTargetIndex];
            else
                screwSeatedPos = screwBasePos + Vector3.down * startHeightOffset;

            // The snap is quicker than the push-in, so wait for the camera to
            // settle before the screw will take any input.
            float wait = holdArmTime - Time.time;
            if (wait > 0f)
                DOVirtual.DelayedCall(wait, ArmHold);
            else
                ArmHold();
        });

        
    }

    void ArmHold()
    {
        // The player may have already pulled off this screw while we waited.
        if (!isPlaced || currentTarget == null)
            return;

        readyForHold = true;

        if (Input.GetMouseButton(0))
            BeginHold();
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
        if (Targets == null || screwDone == null)
            return false;

        for (int i = 0; i < Targets.Length; i++)
        {
            if (Targets[i] == null || i >= screwDone.Length || screwDone[i])
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

    void BeginHold()
    {
        isHolding = true;
        screwFrameTimer = 0f;
        toolFrameTimer = 0f;
        vibeTimer = 0f;

        if (toolAnimFrames != null && toolAnimFrames.Length > 0 && toolSprite != null && toolAnimFrames[0] != null)
        {
            toolFrameIndex = 0;
            toolSprite.sprite = toolAnimFrames[0];
        }

        if (ScrewTightenSource != null)
            ScrewTightenSource.Play();

        
    }

    void ApplyToolIdleSprite()
    {
        if (toolSprite == null)
            return;

        toolSprite.flipX = false;

        if (toolIdleSprite != null)
            toolSprite.sprite = toolIdleSprite;
    }

    void StopHoldFeedback()
    {
        if (ScrewTightenSource != null)
            ScrewTightenSource.Stop();

        
    }

    void UpdateScrewSpriteAnimation()
    {
        if (currentScrewRenderer == null || screwAnimFrames == null || screwAnimFrames.Length == 0)
            return;

        screwFrameTimer += Time.deltaTime;
        if (screwFrameTimer < screwFrameInterval)
            return;

        screwFrameTimer = 0f;

        int last = screwAnimFrames.Length - 1;
        screwFrameIndex = Mathf.Clamp(Mathf.RoundToInt(progress * last), 0, last);

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

    void UpdateTightenMotion()
    {
        if (!hasMotionBases || Tool == null || currentTarget == null)
            return;

        // Straight height -> seated down
        Vector3 screwPos = Vector3.Lerp(screwBasePos, screwSeatedPos, progress);
        currentTarget.transform.position = screwPos;
        currentTarget.transform.rotation = Quaternion.identity;

        Vector3 toolPos = screwPos - tipLocalOffset;
        toolPos.x += snapOffset.x;
        toolPos.y += snapOffset.y;
        toolPos.z = toolBasePos.z;
        Tool.transform.position = toolPos;
    }

    void CompleteTighten()
    {
        UpdateTightenMotion();

        currentTarget.transform.position = screwSeatedPos;
        currentTarget.transform.rotation = Quaternion.identity;

        if (currentScrewRenderer != null)
        {
            if (screwClosedSP != null)
                currentScrewRenderer.sprite = screwClosedSP;
            else if (screwAnimFrames != null && screwAnimFrames.Length > 0)
                currentScrewRenderer.sprite = screwAnimFrames[screwAnimFrames.Length - 1];
        }

        SetScrewMask(currentTarget, false);

        Tool.transform.DOKill();
        Tool.transform.DOMoveY(Tool.transform.position.y + toolLiftHeight, toolLiftDuration)
            .SetEase(Ease.OutQuad);

        var ps = currentTarget.GetComponentInChildren<ParticleSystem>();
        if (ps) ps.Play();

        Vector3 finishedAt = currentTarget.transform.position;

        if (currentTargetIndex >= 0 && screwDone != null && currentTargetIndex < screwDone.Length)
            screwDone[currentTargetIndex] = true;

        // Hold the close shot when a neighbour is still waiting, so a cluster of
        // screws gets done in one framing instead of pulling back between each.
        if (!HasPendingScrewNear(finishedAt))
            ZoomOutFromScrew();

        

        if (WhooshClip)
            AudioController.instance.PlayAnySfx(1, WhooshClip, 0);

        DOVirtual.DelayedCall(0.15f, () =>
        {
            OnComplete.Invoke();

            currentTarget = null;
            currentScrewRenderer = null;
            currentTargetIndex = -1;
            isPlaced = false;
            isSnapping = false;
            readyForHold = false;
            isHolding = false;
            hasMotionBases = false;

            Tool.enabled = true;
            if (Tool.thisCollider != null)
                Tool.thisCollider.enabled = true;
            Tool.canDrag = true;
            Tool.dontResetItIsInCollider = false;

            ApplyToolIdleSprite();

            if (tipCollider != null)
                tipCollider.enabled = true;

            if (OutlinePulse != null)
            {
                foreach (var p in OutlinePulse)
                {
                    if (p && p.gameObject.activeSelf)
                        p.EnableAnim();
                }
            }
        });
    }
}
