using UnityEngine;
using DG.Tweening;
using UnityEngine.EventSystems;

// Pans / zooms the MAP instead of the camera, so the camera stays free for
// CameraController (or anything else) to drive on the same scene.
public class MapController : MonoBehaviour
{
    public static MapController Instance;

    [Space()]
    [Header("----------------- REFS ----------------------")]
    [Space()]
    public Camera cam;

    [Space()]
    public SpriteRenderer MapRenderer;

    [Header("----------------- TAP AREAS ----------------------")]
    [Space()]
    [Space()]
    public SpriteRenderer[] popupTapAreas;

    [Header("----------------- TAP COLS ----------------------")]
    [Space()]
    [Space()]
    public Collider2D[] mapBtnCols;

    [Header("----------------- LEVEL FOCUS ----------------------")]
    [Space()]
    [Tooltip("Drag empty GameObjects or level pins (placed over buildings/spots) here.")]
    public Transform[] levelFocusTargets;
    public Transform[] levelInfoFocusTargets;

    public float FocusMoveDuration = 1.5f;

    [Header("----------------- FOLLOW ----------------------")]
    [Space()]
    public bool SmoothFollow = true;

    [Space()]
    public float FollowSmoothTime = .09f;

    [Space()]
    public float MaxFollowSpeed = 200f;

    [Header("----------------- ZOOM (MAP SCALE) ----------------------")]
    [Space()]
    public float MinScale = .28f;
    public float MaxScale = .71f;

    [Space()]
    public bool FitMinScaleToView = true;

    [Space()]
    public float StartScale = .3f;

    [Space()]
    public float ScrollSpeed = .1f;

    [Space()]
    public float ZoomStep = 1.35f;
    public float ZoomTime = .25f;

    [Header("----------------- PAN ----------------------")]
    [Space()]
    public bool CanDrag = true;

    [Space()]
    public bool UseInertia = true;
    public float InertiaDamping = 6f;

    [Space()]
    public float BoundsPadding = 0f;

    [Space()]
    public bool BlockWhenOverUI = true;

    const string ZOOM_TWEEN = "MapZoom";
    const string MOVE_TWEEN = "MapMove";

    bool isDragging;

    float mapZ;
    float targetScale;
    float scaleVel;

    Vector3 scaleRatio = Vector3.one;   // keeps non-uniform authored scale intact

    Vector3 targetPos;
    Vector3 followVel;

    Vector3 grabOffset;
    Vector3 velocity;

    bool skipFirstFollowFrame;

    void Awake()
    {
        Instance = this;

        if (cam == null)
            cam = Camera.main;

        if (MapRenderer == null)
            MapRenderer = GetComponent<SpriteRenderer>();
    }

    void Start()
    {
        mapZ = transform.localPosition.z;

        Vector3 ls = transform.localScale;

        if (Mathf.Abs(ls.x) > .0001f)
            scaleRatio = ls / ls.x;

        targetScale = Mathf.Clamp(StartScale, GetMinScale(), MaxScale);

        SetScale(targetScale);

        // Keep the map exactly where it was placed.
        targetPos = transform.localPosition;
    }

    void OnEnable()
    {
        skipFirstFollowFrame = true;

        followVel = Vector3.zero;
        scaleVel = 0f;
        velocity = Vector3.zero;

        // Preserve the map's current position when it is enabled.
        targetPos = transform.localPosition;

        targetScale = transform.localScale.x;

        mapZ = transform.localPosition.z;
    }

    void Update()
    {
        if (cam == null || MapRenderer == null)
            return;

        // Check for tap outside all popup/button areas
        if (Input.GetMouseButtonDown(0))
        {
            if (IsTapOutsidePopupAreas())
            {
                CloseExtraPopups();
            }
        }

        // two fingers = pinch, never pan on the same frame
        if (Input.touchCount >= 2)
        {
            isDragging = false;

            velocity = Vector3.zero;

            HandlePinch();
        }

        else
        {
            HandleScroll();

            HandleDrag();

            HandleInertia();
        }

        ApplyFollow();
    }

    bool IsTapOutsidePopupAreas()
    {
        Vector3 tapWorld = cam.ScreenToWorldPoint(Input.mousePosition);

        for (int i = 0; i < popupTapAreas.Length; i++)
        {
            SpriteRenderer sr = popupTapAreas[i];

            if (sr == null)
                continue;

            Bounds bounds = sr.bounds;

            if (tapWorld.x >= bounds.min.x &&
                tapWorld.x <= bounds.max.x &&
                tapWorld.y >= bounds.min.y &&
                tapWorld.y <= bounds.max.y)
            {
                return false;
            }
        }

        return true;
    }


    void CloseExtraPopups()
    {
        // PUT YOUR POPUP CLOSE CODE HERE

        MenuManager.instance.CloseOtherMapInfos(-1);
    }

    #region FOLLOW

    void ApplyFollow()
    {
        if (skipFirstFollowFrame)
        {
            skipFirstFollowFrame = false;

            followVel = Vector3.zero;
            scaleVel = 0f;

            SetScale(targetScale);
            transform.localPosition = targetPos;

            return;
        }

        if (!SmoothFollow)
        {
            SetScale(targetScale);
            transform.localPosition = ClampToView(targetPos, targetScale);
            return;
        }

        float s = Mathf.SmoothDamp(
            CurrentScale,
            targetScale,
            ref scaleVel,
            FollowSmoothTime
        );

        SetScale(s);

        Vector3 p = Vector3.SmoothDamp(
            transform.localPosition,
            targetPos,
            ref followVel,
            FollowSmoothTime,
            MaxFollowSpeed,
            Time.deltaTime
        );

        transform.localPosition = ClampToView(p, s);
    }

    #endregion

    #region PAN

    void HandleDrag()
    {
        if (!CanDrag)
            return;

        if (Input.GetMouseButtonDown(0))
        {
            if (BlockWhenOverUI && isOverUI())
                return;

            DOTween.Kill(MOVE_TWEEN);

            isDragging = true;
            velocity = Vector3.zero;

            // camera position converted to map's local reference
            grabOffset = targetPos - PointerWorld();
        }
        else if (Input.GetMouseButton(0) && isDragging)
        {
            Vector3 before = targetPos;

            // the grabbed spot on the map stays under the finger
            targetPos = PointerWorld() + grabOffset;

            ClampTarget();

            if (Time.deltaTime > 0f)
                velocity = (targetPos - before) / Time.deltaTime;
        }
        else if (Input.GetMouseButtonUp(0))
        {
            isDragging = false;
        }
    }

    void HandleInertia()
    {
        if (isDragging || !UseInertia)
            return;

        if (velocity.sqrMagnitude < .0001f)
        {
            velocity = Vector3.zero;
            return;
        }

        targetPos += velocity * Time.deltaTime;

        ClampTarget();

        velocity = Vector3.Lerp(velocity, Vector3.zero, InertiaDamping * Time.deltaTime);
    }

    #endregion

    #region ZOOM

    void HandleScroll()
    {
        float scroll = Input.mouseScrollDelta.y;

        if (Mathf.Approximately(scroll, 0f))
            return;

        if (BlockWhenOverUI && isOverUI())
            return;

        ZoomBy(1f + scroll * ScrollSpeed, Input.mousePosition);
    }

    void HandlePinch()
    {
        Touch t0 = Input.GetTouch(0);
        Touch t1 = Input.GetTouch(1);

        Vector2 prev0 = t0.position - t0.deltaPosition;
        Vector2 prev1 = t1.position - t1.deltaPosition;

        float prevDist = (prev0 - prev1).magnitude;
        float currDist = (t0.position - t1.position).magnitude;

        if (prevDist < .01f || currDist < .01f)
            return;

        Vector2 focal = (t0.position + t1.position) * .5f;

        ZoomBy(currDist / prevDist, focal);
    }

    // scales the map while keeping the map point under 'screenFocal' pinned
    void ZoomBy(float factor, Vector3 screenFocal)
    {
        DOTween.Kill(ZOOM_TWEEN);

        float newScale = Mathf.Clamp(targetScale * factor, GetMinScale(), MaxScale);

        if (Mathf.Approximately(newScale, targetScale))
            return;

        float r = newScale / targetScale;

        Vector3 focal = cam.ScreenToWorldPoint(screenFocal);
        if (transform.parent != null)
            focal = transform.parent.InverseTransformPoint(focal);

        focal.z = 0f;

        Vector3 p = targetPos;
        p.z = 0f;

        Vector3 moved = focal - (focal - p) * r;
        moved.z = mapZ;

        targetScale = newScale;
        targetPos = moved;

        ClampTarget();
    }

    public void ZoomIn()
    {
        TweenScale(targetScale * ZoomStep);
    }

    public void ZoomOut()
    {
        TweenScale(targetScale / ZoomStep);
    }

    void TweenScale(float target)
    {
        target = Mathf.Clamp(target, GetMinScale(), MaxScale);

        DOTween.Kill(ZOOM_TWEEN);

        Vector3 centre = transform.parent != null
            ? transform.parent.InverseTransformPoint(cam.transform.position)
            : cam.transform.position;
        centre.z = 0f;

        float from = targetScale;
        Vector3 fromPos = targetPos;

        DOTween.To(() => 0f, x =>
        {
            float s = Mathf.Lerp(from, target, x);
            float r = s / from;

            Vector3 p = fromPos;
            p.z = 0f;

            Vector3 moved = centre - (centre - p) * r;
            moved.z = mapZ;

            targetScale = s;
            targetPos = moved;

            ClampTarget();

        }, 1f, ZoomTime).SetEase(Ease.OutQuad).SetId(ZOOM_TWEEN);
    }

    // smallest scale that still covers the whole view
    public float GetMinScale()
    {
        float min = MinScale;

        if (FitMinScaleToView && MapRenderer != null && MapRenderer.sprite != null && cam != null)
        {
            Bounds lb = MapRenderer.sprite.bounds;

            float viewHalfH = cam.orthographicSize;
            float viewHalfW = viewHalfH * cam.aspect;

            float needX = (viewHalfW - BoundsPadding) / Mathf.Max(lb.extents.x, .0001f);
            float needY = (viewHalfH - BoundsPadding) / Mathf.Max(lb.extents.y, .0001f);

            min = Mathf.Max(min, Mathf.Max(needX, needY));
        }

        return Mathf.Min(min, MaxScale);
    }

    public float CurrentScale
    {
        get { return transform.localScale.x; }
    }

    void SetScale(float s)
    {
        transform.localScale = scaleRatio * s;
    }

    #endregion

    #region CLAMP

    public void ClampTarget()
    {
        targetPos = ClampToView(targetPos, targetScale);
    }

    // keeps the map covering the camera view at the given scale
    Vector3 ClampToView(Vector3 mapPos, float scale)
    {
        mapPos.z = mapZ;

        if (MapRenderer == null || MapRenderer.sprite == null || cam == null)
            return mapPos;

        Bounds lb = MapRenderer.sprite.bounds;

        Vector3 offset = Vector3.Scale(lb.center, scaleRatio * scale);

        float halfW = lb.extents.x * scale + BoundsPadding;
        float halfH = lb.extents.y * scale + BoundsPadding;

        Vector3 camPos = transform.parent != null
            ? transform.parent.InverseTransformPoint(cam.transform.position)
            : cam.transform.position;

        float viewHalfH = cam.orthographicSize;
        float viewHalfW = viewHalfH * cam.aspect;

        float centreX = mapPos.x + offset.x;
        float centreY = mapPos.y + offset.y;

        float minX = camPos.x + viewHalfW - halfW;
        float maxX = camPos.x - viewHalfW + halfW;

        float minY = camPos.y + viewHalfH - halfH;
        float maxY = camPos.y - viewHalfH + halfH;

        // map smaller than the view on that axis -> centre it
        centreX = (minX > maxX) ? camPos.x : Mathf.Clamp(centreX, minX, maxX);
        centreY = (minY > maxY) ? camPos.y : Mathf.Clamp(centreY, minY, maxY);

        mapPos.x = centreX - offset.x;
        mapPos.y = centreY - offset.y;

        return mapPos;
    }

    #endregion

    #region PUBLIC

    public void FocusOnLocal([Bridge.Ref] Vector3 mapLocal, float scale = -1f, float duration = .5f)
    {
        FocusOnLocal(mapLocal, scale, duration, duration);
    }

    public void FocusOnLocal(
[Bridge.Ref]         Vector3 mapLocal,
        float scale = -1f,
        float zoomDuration = .5f,
        float moveDuration = .8f)
    {
        DOTween.Kill(ZOOM_TWEEN);
        DOTween.Kill(MOVE_TWEEN);

        isDragging = false;
        velocity = Vector3.zero;

        float endScale = scale > 0f ? Mathf.Clamp(scale, GetMinScale(), MaxScale) : targetScale;
        float fromScale = targetScale;
        Vector3 fromPos = targetPos;

        Vector3 camPosLocal = transform.parent != null
            ? transform.parent.InverseTransformPoint(cam.transform.position)
            : cam.transform.position;

        float totalDuration = Mathf.Max(zoomDuration, moveDuration);
        if (totalDuration <= 0f)
            totalDuration = 0.0001f;

        DOTween.To(() => 0f, t =>
        {
            float zoomProgress = zoomDuration > 0f ? Mathf.Clamp01(t * (totalDuration / zoomDuration)) : 1f;
            float moveProgress = moveDuration > 0f ? Mathf.Clamp01(t * (totalDuration / moveDuration)) : 1f;

            float s = Mathf.Lerp(fromScale, endScale, zoomProgress);
            targetScale = s;

            // Calculate target map position so 'mapLocal' centers under camera
            Vector3 wanted = camPosLocal - Vector3.Scale(mapLocal, scaleRatio * s);
            wanted.z = mapZ;

            targetPos = Vector3.Lerp(fromPos, wanted, moveProgress);

            ClampTarget();

        }, 1f, totalDuration)
        .SetEase(Ease.OutQuad)
        .SetId(MOVE_TWEEN);
    }

    public void FocusOn(Transform target, float scale = -1f, float duration = .5f)
    {
        FocusOn(target, scale, duration, duration);
    }

    public void FocusOn(Transform target, float scale = -1f, float zoomDuration = .5f, float moveDuration = .8f)
    {
        if (target == null)
        {
            Debug.LogWarning("MapController: Target Transform is null.");
            return;
        }

        // Converts world position of target object into local map coordinates
        Vector3 localPos = transform.InverseTransformPoint(target.position);
        FocusOnLocal(localPos, scale, zoomDuration, moveDuration);
    }

    public void FocusOnLevel(int index)
    {
        if (levelFocusTargets == null || levelFocusTargets.Length == 0)
        {
            Debug.LogWarning("MapController: levelFocusTargets array is empty.");
            return;
        }

        if (index < 0 || index >= levelFocusTargets.Length)
        {
            Debug.LogWarning("MapController: invalid level focus index " + index);
            return;
        }

        Transform target = levelFocusTargets[index];

        if (target == null)
        {
            Debug.LogWarning("MapController: level focus target at index " + index + " is null.");
            return;
        }

        // Both zoom and move now share FocusMoveDuration (1.5s)
        FocusOn(
            target,
            MaxScale,
            FocusMoveDuration,
            FocusMoveDuration
        );
    }

    public void FocusOnLevelInfo(int index)
    {
        if (levelInfoFocusTargets == null || levelInfoFocusTargets.Length == 0)
        {
            Debug.LogWarning("MapController: levelInfoFocusTargets array is empty.");
            return;
        }

        if (index < 0 || index >= levelInfoFocusTargets.Length)
        {
            Debug.LogWarning("MapController: invalid level focus index " + index);
            return;
        }

        Transform target = levelInfoFocusTargets[index];

        if (target == null)
        {
            Debug.LogWarning("MapController: level focus target at index " + index + " is null.");
            return;
        }

        // Both zoom and move now share FocusMoveDuration (1.5s)
        FocusOn(
            target,
            MaxScale,
            FocusMoveDuration,
            FocusMoveDuration
        );
    }

    public void ResetView(float duration = .5f)
    {
        FocusOnLocal(Vector3.zero, StartScale, duration);
    }

    public void SnapToTarget()
    {
        ClampTarget();

        followVel = Vector3.zero;
        scaleVel = 0f;

        SetScale(targetScale);

        transform.localPosition = targetPos;
    }

    public void EnableBtnCols()
    {
        for (int i = 0; i < mapBtnCols.Length; i++)
        {
            mapBtnCols[i].enabled = true;
        }
    }

    public void DisableBtnCols()
    {
        for (int i = 0; i < mapBtnCols.Length; i++)
        {
            mapBtnCols[i].enabled = false;
        }
    }

    #endregion

    #region HELPERS

    Vector3 PointerWorld()
    {
        Vector3 w = cam.ScreenToWorldPoint(Input.mousePosition);
        if (transform.parent != null)
            w = transform.parent.InverseTransformPoint(w);

        w.z = mapZ;
        return w;
    }

    bool isOverUI()
    {
        if (EventSystem.current == null)
            return false;

        if (EventSystem.current.IsPointerOverGameObject())
            return true;

        if (Input.touchCount > 0 && EventSystem.current.IsPointerOverGameObject(Input.GetTouch(0).fingerId))
            return true;

        return false;
    }

    #endregion

#if UNITY_EDITOR

    void OnDrawGizmosSelected()
    {
        SpriteRenderer sr = MapRenderer != null ? MapRenderer : GetComponent<SpriteRenderer>();

        if (sr == null)
            return;

        Gizmos.color = Color.green;
        Gizmos.DrawWireCube(sr.bounds.center, sr.bounds.size);

        Camera c = cam != null ? cam : Camera.main;

        if (c == null || !c.orthographic)
            return;

        float viewHalfH = c.orthographicSize;
        float viewHalfW = viewHalfH * c.aspect;

        Gizmos.color = Color.yellow;
        Gizmos.DrawWireCube(new Vector3(c.transform.position.x, c.transform.position.y, 0f),
                            new Vector3(viewHalfW * 2f, viewHalfH * 2f, .1f));
    }

#endif

}