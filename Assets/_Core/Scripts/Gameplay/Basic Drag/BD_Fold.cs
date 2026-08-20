using UnityEngine;
using UnityEngine.Events;
using UnityEngine.EventSystems;

[RequireComponent(typeof(SpriteRenderer))]
public class BD_Fold : MonoBehaviour
{
    private SpriteRenderer frontRenderer, backRenderer;
    private Material frontMat, backMat;
    private Collider2D selfCollider;

    [Header("Control")]
    public bool canDrag = true;

    // --- NEW: Corner Toggles ---
    [Header("Allowed Corners")]
    public bool canFoldBottomLeft = true;
    public bool canFoldBottomRight = true;
    public bool canFoldTopLeft = true;
    public bool canFoldTopRight = true;

    [Space()]
    public GameObject Indication;

    [Header("Back Side Content")]
    [SerializeField] private Sprite backSideSprite;

    private bool isDragging = false;
    private Vector2 cornerUV, dragLineDir;
    private float dragOffset;

    [Header("Folding Settings")]
    [SerializeField] private float maxSideOffset = 0.05f;
    [SerializeField] private float foldBackDuration = 0.25f;
    [SerializeField] private float instantFoldAmount = 0.08f;
    [SerializeField] private bool useSmoothRelease = true;

    [Header("Completion Settings")]
    [SerializeField, Range(0, 1)] private float completionLimit = 0.7f;
    [SerializeField, Range(0, 1)] private float afterCompletionTravelTo = 0.7f;
    [SerializeField] private UnityEvent OnComplete;
    [SerializeField, Range(0, 1)] private float currentProgress;

    [Header("Shadow Settings")]
    [SerializeField, Range(0, 1)] private float innerShadowStrength = 0.45f;

    [Header("Audio")]
    [SerializeField] private AudioSource dragAudioSource;
    [SerializeField] private AudioClip dragStartClip;
    [SerializeField] private AudioClip completionClip;
    [SerializeField] private float audioFadeSpeed = 10f;
    [SerializeField] private float audioMoveThreshold = 0.0005f;

    private float audioVolume = 0f;
    private float lastFoldDistForAudio = 0f;
    private bool hasPlayedDragStart = false;

    [Header("Haptics")]
    [SerializeField] private float hapticInterval = 0.3f;
    private float lastHapticTime = -999f;

    private bool cornerLocked = false;
    private Vector2 lockedCornerUV;
    private Vector2 lockedOppositeCornerUV;

    private bool isFoldingAnimation = false;
    private bool isCompleting = false;
    private bool isFinished = false;
    private float foldAnimTimer = 0f;
    private float foldAnimStartDist, foldAnimTargetDist;

    private Rect stickerUVRect;
    private float currentFoldDist = 0f;
    private float maxReachedFoldDist = 0f;
    private Vector2 oppositeCornerUV;

    void Start()
    {
        frontRenderer = GetComponent<SpriteRenderer>();
        selfCollider = GetComponent<Collider2D>();
        frontMat = new Material(Shader.Find("Custom/SpriteFold"));
        frontRenderer.material = frontMat;

        CalculateStickerUVRect();

        GameObject backObj = new GameObject("Fold_Back_Side");
        backObj.transform.SetParent(transform);
        backObj.transform.localPosition = new Vector3(0, 0, 0.001f);
        backObj.transform.localRotation = Quaternion.identity;
        backObj.transform.localScale = Vector3.one;

        backRenderer = backObj.AddComponent<SpriteRenderer>();
        backRenderer.sprite = (backSideSprite != null) ? backSideSprite : frontRenderer.sprite;

        if (backRenderer != null)
            backRenderer.sortingOrder = frontRenderer.sortingOrder + 1;

        backMat = new Material(Shader.Find("Custom/SpriteFold"));
        backMat.SetFloat("_IsBack", 1.0f);
        backRenderer.material = backMat;

        backObj.SetActive(false);

        ResetShader();
    }

    void Update()
    {
        if (!canDrag || isFinished)
            return;

        HandleInput();

        if (isDragging)
        {
            UpdateDragLogic(WorldToUV(GetPointerWorldPos()));

            if (Time.time - lastHapticTime >= hapticInterval)
            {
                  // Commented if not present
                lastHapticTime = Time.time;
            }
        }

        if (isFoldingAnimation)
        {
            foldAnimTimer += Time.deltaTime;
            float t = Mathf.SmoothStep(0f, 1f, Mathf.Clamp01(foldAnimTimer / foldBackDuration));
            currentFoldDist = Mathf.Lerp(foldAnimStartDist, foldAnimTargetDist, t);
            maxReachedFoldDist = Mathf.Max(maxReachedFoldDist, currentFoldDist);

            UpdateProgress();
            UpdateShaders();

            if (t >= 1f)
            {
                isFoldingAnimation = false;
                if (isCompleting)
                {
                    isFinished = true;
                    
                    if (completionClip != null) AudioController.instance.PlayAnySfx(3, completionClip, 0f);
                    StopDragAudio();
                    OnComplete?.Invoke();
                }
                else
                {
                    cornerLocked = false;
                }
            }
        }

        UpdateDragAudio();
    }

    void HandleInput()
    {
        if (Input.GetMouseButtonDown(0))
        {
            TryBeginDrag(Input.mousePosition);
        }

        if (Input.GetMouseButtonUp(0))
            EndDrag();
    }

    void TryBeginDrag(Vector2 screenPos)
    {
        if (!canDrag || isFinished || isOverUI())
            return;

        Vector2 world = Camera.main.ScreenToWorldPoint(screenPos);

        if (selfCollider == null || !selfCollider.OverlapPoint(world))
            return;

        Vector2 mouseUV = WorldToUV(world);

        if (!stickerUVRect.Contains(mouseUV))
            return;

        // --- NEW: Check if the corner is allowed before starting ---
        if (!cornerLocked || currentFoldDist <= 0.001f)
        {
            Vector2 potentialCorner = GetNearestStickerCorner(mouseUV);
            if (!IsCornerAllowed(potentialCorner))
            {
                return; // Agar corner allowed nahi hai to yahan se hi return ho jao
            }

            cornerUV = potentialCorner;
            oppositeCornerUV = GetOppositeCorner(cornerUV);
            lockedCornerUV = cornerUV;
            lockedOppositeCornerUV = oppositeCornerUV;
            cornerLocked = true;
        }
        else
        {
            cornerUV = lockedCornerUV;
            oppositeCornerUV = lockedOppositeCornerUV;
        }

        // Logic continues if corner is allowed
        if (Indication != null) Indication.SetActive(false);

        isDragging = true;
        isFoldingAnimation = false;

        // Audio Logic 
        if (!hasPlayedDragStart && dragStartClip != null) {
            AudioController.instance.PlayAnySfx(3, dragStartClip, 0f);
            hasPlayedDragStart = true;
        }
        

        dragLineDir = (oppositeCornerUV - cornerUV).normalized;
        Vector2 cornerToMouse = mouseUV - cornerUV;
        float mouseProj = Vector2.Dot(cornerToMouse, dragLineDir);

        float startDist = (currentFoldDist > 0.01f) ? currentFoldDist : instantFoldAmount;
        dragOffset = startDist - mouseProj;

        backRenderer.gameObject.SetActive(true);
    }

    // Helper method to check corner permission
    bool IsCornerAllowed(Vector2 corner)
    {
        bool isLeft = Mathf.Approximately(corner.x, stickerUVRect.xMin);
        bool isBottom = Mathf.Approximately(corner.y, stickerUVRect.yMin);

        if (isLeft && isBottom) return canFoldBottomLeft;
        if (!isLeft && isBottom) return canFoldBottomRight;
        if (isLeft && !isBottom) return canFoldTopLeft;
        if (!isLeft && !isBottom) return canFoldTopRight;

        return true;
    }

    void EndDrag()
    {
        if (!canDrag || isFinished || !isDragging)
            return;

        isDragging = false;
        StopDragAudio();
    }

    void UpdateDragLogic(Vector2 targetUV)
    {
        Vector2 cornerToTarget = targetUV - cornerUV;
        float newDist = Mathf.Max(0f, Vector2.Dot(cornerToTarget, dragLineDir) + dragOffset);

        currentFoldDist = Mathf.Max(maxReachedFoldDist, newDist);
        maxReachedFoldDist = currentFoldDist;

        UpdateProgress();
        UpdateShaders();

        if (currentProgress >= completionLimit)
        {
            isDragging = false;
            float totalDiagonal = Vector2.Distance(cornerUV, oppositeCornerUV);
            float targetDist = afterCompletionTravelTo * totalDiagonal * 2f;
            StartFoldAnimation(targetDist, true);
        }
    }

    void UpdateProgress()
    {
        float totalDiagonal = Vector2.Distance(cornerUV, oppositeCornerUV);
        if (totalDiagonal <= 0) return;
        float visualFoldLinePos = currentFoldDist * 0.5f;
        currentProgress = Mathf.Clamp01(visualFoldLinePos / totalDiagonal);
    }

    void UpdateShaders()
    {
        ApplyToMat(frontMat, dragLineDir, currentFoldDist);
        ApplyToMat(backMat, dragLineDir, currentFoldDist);
    }

    void UpdateDragAudio()
    {
        if (dragAudioSource == null) return;
        float delta = Mathf.Abs(currentFoldDist - lastFoldDistForAudio);
        bool moving = delta > audioMoveThreshold && isDragging;
        float targetVolume = moving ? 1f : 0f;
        audioVolume = Mathf.MoveTowards(audioVolume, targetVolume, Time.deltaTime * audioFadeSpeed);
        dragAudioSource.volume = audioVolume;
        if (audioVolume > 0.01f) { if (!dragAudioSource.isPlaying) dragAudioSource.Play(); }
        else { if (dragAudioSource.isPlaying) dragAudioSource.Stop(); }
        lastFoldDistForAudio = currentFoldDist;
    }

    void StopDragAudio()
    {
        audioVolume = 0f;
        if (dragAudioSource != null) dragAudioSource.Stop();
    }

    void ResetShader()
    {
        currentFoldDist = 0f;
        currentProgress = 0f;
        maxReachedFoldDist = 0f;
        ApplyToMat(frontMat, Vector2.up, 0f);
        ApplyToMat(backMat, Vector2.up, 0f);
    }

    void ApplyToMat(Material mat, Vector2 dir, float dist)
    {
        mat.SetVector("_FoldOrigin", cornerUV);
        mat.SetVector("_FoldDir", new Vector4(dir.x, dir.y, 0, 0));
        mat.SetFloat("_FoldDist", dist);
        mat.SetFloat("_ShadowStrength", innerShadowStrength);
    }

    Vector2 GetNearestStickerCorner(Vector2 mouseUV)
    {
        return new Vector2(
            mouseUV.x > stickerUVRect.center.x ? stickerUVRect.xMax : stickerUVRect.xMin,
            mouseUV.y > stickerUVRect.center.y ? stickerUVRect.yMax : stickerUVRect.yMin
        );
    }

    Vector2 GetOppositeCorner(Vector2 corner)
    {
        return new Vector2(
            Mathf.Approximately(corner.x, stickerUVRect.xMax) ? stickerUVRect.xMin : stickerUVRect.xMax,
            Mathf.Approximately(corner.y, stickerUVRect.yMax) ? stickerUVRect.yMin : stickerUVRect.yMax
        );
    }

    Vector2 WorldToUV(Vector2 worldPos)
    {
        Vector3 localPos = transform.InverseTransformPoint(worldPos);
        Sprite sprite = frontRenderer.sprite;
        Bounds bounds = sprite.bounds;
        float u = Mathf.InverseLerp(bounds.min.x, bounds.max.x, localPos.x);
        float v = Mathf.InverseLerp(bounds.min.y, bounds.max.y, localPos.y);
        return new Vector2(
            Mathf.Lerp(stickerUVRect.xMin, stickerUVRect.xMax, u),
            Mathf.Lerp(stickerUVRect.yMin, stickerUVRect.yMax, v)
        );
    }

    void StartFoldAnimation(float target, bool completes)
    {
        foldAnimStartDist = currentFoldDist;
        foldAnimTargetDist = target;
        foldAnimTimer = 0f;
        isCompleting = completes;
        isFoldingAnimation = true;
    }

   
    void CalculateStickerUVRect()
    {
        Sprite s = frontRenderer.sprite;
        stickerUVRect = new Rect(
            s.textureRect.x / s.texture.width,
            s.textureRect.y / s.texture.height,
            s.textureRect.width / s.texture.width,
            s.textureRect.height / s.texture.height
        );
    }

    Vector2 GetPointerWorldPos()
    {
        return Camera.main.ScreenToWorldPoint(Input.mousePosition);
    }
    public bool isOverUI()
    {
        // Ignore drag if pointer is over any UI element
        if (EventSystem.current != null && EventSystem.current.IsPointerOverGameObject())
        {
            return true;
        }

        if (Input.touchCount > 0)
        {
            if (EventSystem.current.IsPointerOverGameObject(Input.GetTouch(0).fingerId))
                return true;
        }

        return false;
    }
}