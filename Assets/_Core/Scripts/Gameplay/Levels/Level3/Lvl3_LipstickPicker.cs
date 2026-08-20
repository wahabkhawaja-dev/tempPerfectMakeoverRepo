using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

/// <summary>
/// Picks the broken lipstick pieces one at a time and drops them on the spoon.
///
/// Direct-drag mode (default): the player drags each piece onto the spoon.
/// Tool mode: the picker jaws grab them. Same spoon-copy handover either way.
/// </summary>
[RequireComponent(typeof(Collider2D))]
public class Lvl3_LipstickPicker : MonoBehaviour
{
    [System.Serializable]
    public class Piece
    {
        public Collider2D pieceCollider;
        public OutlinePulse outline;

        [Tooltip("The copy of this piece already placed on the spoon. Starts hidden, turns on when the piece is dropped.")]
        public GameObject spoonImage;

        public UnityEvent OnPicked;
        public UnityEvent OnPlaced;

        [HideInInspector] public Transform tr;
        [HideInInspector] public SpriteRenderer rend;
        [HideInInspector] public BasicDrag drag;

        [HideInInspector] public Transform startParent;
        [HideInInspector] public Vector3 startLocalPos;
        [HideInInspector] public Vector3 startLocalEuler;
        [HideInInspector] public Vector3 startLocalScale;
        [HideInInspector] public int startOrder;
        [HideInInspector] public int startSortingLayerID;
        [HideInInspector] public SpriteMaskInteraction startMask;
        [HideInInspector] public Vector3 spoonImageEuler;
    }

    [System.Serializable]
    public class PinchBone
    {
        public Transform bone;
        public Vector3 pinchLocalOffset;
        public float pinchLocalZ;
        [HideInInspector] public Vector3 startPos;
        [HideInInspector] public Vector3 startEuler;
    }

    [Header("Mode")]
    [Tooltip("On: drag the lipstick pieces themselves onto the spoon. Off: grab them with the picker tool.")]
    public bool dragPiecesDirectly = true;

    [Header("References")]
    public BasicDrag Tool;
    public Transform holdAnchor;
    public Collider2D spoonZone;

    [Header("Pieces, in pick order")]
    public Piece[] pieces;

    [Header("Carry (tool mode)")]
    public Vector3 holdLocalOffset = Vector3.zero;
    public bool rotateWithTool = false;
    public float carryZOffset = 0f;
    public float grabTime = 0.25f;
    public int heldSortingOrder = 505;

    [Header("Drop")]
    public bool autoPlaceOnEnter = true;
    public float placeTime = 0.2f;

    [Header("Grab feel (tool mode)")]
    public bool requireDragToGrab = true;
    public float grabHoldTime = 0.25f;
    public float maxGrabSpeed = 0.7f;
    public float pinchCancelDelay = 0.1f;

    [Tooltip("Little scale punch on the spoon copy as it appears. 0 turns it off.")]
    public float spoonImagePunch = 0.15f;
    public float spoonImagePunchTime = 0.25f;
    public float spoonImageDropSettle = 0f;

    [Header("Bone pinch")]
    public PinchBone[] bones;
    public float pinchTime = 0.12f;

    [Header("Audio")]
    public AudioClip pickClip;
    public AudioClip placeClip;

    [Header("Events")]
    public UnityEvent OnAllPlaced;

    int currentIndex;
    Piece held;
    bool insideSpoon;
    bool isDone;
    float heldWorldZ;
    Vector3 lastTipPos;
    float lastSpeed;
    bool overPiece;
    float grabHold;
    float offPieceTime;
    Collider2D tipCol;
    bool placing;

    public float Progress
    {
        get { return pieces != null && pieces.Length > 0 ? (float)currentIndex / pieces.Length : 0f; }
    }

    void Start()
    {
        if (Tool == null)
            Tool = GetComponentInParent<BasicDrag>();

        if (holdAnchor == null)
            holdAnchor = transform;

        tipCol = GetComponent<Collider2D>();

        for (int i = 0; i < bones.Length; i++)
        {
            if (bones[i].bone == null)
                continue;

            bones[i].startPos = bones[i].bone.localPosition;
            bones[i].startEuler = bones[i].bone.localEulerAngles;
        }

        for (int i = 0; i < pieces.Length; i++)
        {
            Piece p = pieces[i];

            if (p.spoonImage != null)
            {
                p.spoonImageEuler = p.spoonImage.transform.localEulerAngles;
                p.spoonImage.SetActive(false);
            }

            if (p.pieceCollider == null)
                continue;

            p.tr = p.pieceCollider.transform;
            p.rend = p.pieceCollider.GetComponent<SpriteRenderer>();

            p.startParent = p.tr.parent;
            p.startLocalPos = p.tr.localPosition;
            p.startLocalEuler = p.tr.localEulerAngles;
            p.startLocalScale = p.tr.localScale;

            if (p.rend != null)
            {
                p.startOrder = p.rend.sortingOrder;
                p.startSortingLayerID = p.rend.sortingLayerID;
                p.startMask = p.rend.maskInteraction;
            }

            if (dragPiecesDirectly)
                EnsurePieceDrag(p);

            SetPieceActive(p, i == currentIndex);
        }

        if (Tool != null)
            Tool.OnMouseUpEvent += OnToolReleased;

        lastTipPos = transform.position;
    }

    void EnsurePieceDrag(Piece p)
    {
        p.drag = p.pieceCollider.GetComponent<BasicDrag>();

        if (p.drag == null)
            p.drag = p.pieceCollider.gameObject.AddComponent<BasicDrag>();

        p.drag.canDrag = false;
        p.drag.canReturn = true;
        p.drag.returnTime = 0.2f;
        p.drag.canRotateOnPick = false;
        p.drag.moveWithPointer = true;
        p.drag.dragByDelta = false;
        p.drag.Vibration = true;
        p.drag.thisCollider = p.pieceCollider;

        Piece captured = p;
        p.drag.OnMouseDownEvent += () => OnPiecePickedUp(captured);
        p.drag.OnMouseUpEvent += () => OnPieceReleased(captured);
    }

    void OnDestroy()
    {
        if (Tool != null)
            Tool.OnMouseUpEvent -= OnToolReleased;
    }

    void Update()
    {
        if (dragPiecesDirectly)
        {
            UpdateDirectDrag();
            return;
        }

        Vector3 pos = transform.position;
        float dt = Time.deltaTime;
        if (dt < 0.0001f)
            dt = 0.0001f;

        lastSpeed = Vector3.Distance(pos, lastTipPos) / dt;
        lastTipPos = pos;

        overPiece = IsTipOnCurrentPiece();

        if (held != null || isDone)
            return;

        bool dragging = Tool == null || Tool.isDragging || !requireDragToGrab;

        if (!dragging)
        {
            ResetHold();
            return;
        }

        if (!overPiece)
        {
            offPieceTime += dt;

            if (offPieceTime >= pinchCancelDelay)
                ResetHold();

            return;
        }

        offPieceTime = 0f;

        if (lastSpeed > maxGrabSpeed)
            return;

        grabHold += dt;

        float t = grabHoldTime <= 0.0001f ? 1f : Mathf.Clamp01(grabHold / grabHoldTime);
        SetPinch(t, false);

        if (t >= 1f && currentIndex < pieces.Length)
            Grab(pieces[currentIndex]);
    }

    void UpdateDirectDrag()
    {
        if (isDone || placing || currentIndex >= pieces.Length)
            return;

        Piece p = pieces[currentIndex];

        if (p == null || p.drag == null || !p.drag.isDragging)
            return;

        if (autoPlaceOnEnter && IsPieceOverSpoon(p))
            PlaceDirect(p);
    }

    void LateUpdate()
    {
        if (dragPiecesDirectly)
            return;

        if (held == null || rotateWithTool || held.tr == null)
            return;

        Vector3 e = held.tr.eulerAngles;
        e.z = Mathf.LerpAngle(e.z, heldWorldZ, Time.deltaTime / Mathf.Max(grabTime, 0.0001f));
        held.tr.eulerAngles = e;
    }

    void OnTriggerEnter2D(Collider2D other)
    {
        if (dragPiecesDirectly || isDone || other == null)
            return;

        if (held == null && IsCurrentPiece(other))
            return;

        if (held != null && spoonZone != null && other == spoonZone)
        {
            insideSpoon = true;

            if (Tool != null)
                Tool.dontResetItIsInCollider = true;

            if (autoPlaceOnEnter)
                Place();
        }
    }

    void OnTriggerExit2D(Collider2D other)
    {
        if (dragPiecesDirectly || other == null)
            return;

        if (spoonZone != null && other == spoonZone)
        {
            insideSpoon = false;

            if (Tool != null)
                Tool.dontResetItIsInCollider = false;
        }
    }

    bool IsTipOnCurrentPiece()
    {
        if (held != null || isDone || currentIndex >= pieces.Length)
            return false;

        Piece p = pieces[currentIndex];
        if (p == null || p.pieceCollider == null || !p.pieceCollider.enabled || tipCol == null)
            return false;

        Physics2D.SyncTransforms();
        return p.pieceCollider.OverlapPoint(tipCol.bounds.center);
    }

    bool IsCurrentPiece(Collider2D other)
    {
        if (currentIndex >= pieces.Length)
            return false;

        Piece p = pieces[currentIndex];
        return p != null && p.pieceCollider != null && other == p.pieceCollider;
    }

    bool IsPieceOverSpoon(Piece p)
    {
        if (p == null || p.pieceCollider == null || spoonZone == null)
            return false;

        Physics2D.SyncTransforms();

        if (spoonZone.OverlapPoint(p.pieceCollider.bounds.center))
            return true;

        return spoonZone.bounds.Intersects(p.pieceCollider.bounds);
    }

    void ResetHold()
    {
        offPieceTime = 0f;

        if (grabHold <= 0f)
            return;

        grabHold = 0f;
        SetPinch(0f, true);
    }

    void OnPiecePickedUp(Piece p)
    {
        if (!dragPiecesDirectly || isDone || placing || p == null)
            return;

        if (currentIndex >= pieces.Length || pieces[currentIndex] != p)
            return;

        if (p.outline != null)
            p.outline.DisableAnim();

        if (p.rend != null)
            p.rend.sortingOrder = heldSortingOrder;

        PlayPickFeedback();
        p.OnPicked?.Invoke();
    }

    void OnPieceReleased(Piece p)
    {
        if (!dragPiecesDirectly || isDone || placing || p == null)
            return;

        if (p.tr == null || !p.tr.gameObject.activeSelf)
            return;

        if (IsPieceOverSpoon(p))
            PlaceDirect(p);
    }

    void PlaceDirect(Piece p)
    {
        if (placing || p == null)
            return;

        placing = true;
        held = p;

        if (p.drag != null)
        {
            p.drag.canReturn = false;
            p.drag.canDrag = false;
            p.drag.isDragging = false;
            p.drag.dontResetItIsInCollider = false;
            p.drag.enabled = false;

            if (p.drag.thisCollider != null)
                p.drag.thisCollider.enabled = false;

            p.drag.transform.DOKill();
        }

        Place();
    }

    void Grab(Piece p)
    {
        held = p;
        insideSpoon = false;
        overPiece = false;
        grabHold = 0f;

        if (p.outline != null)
            p.outline.DisableAnim();

        for (int i = 0; i < pieces.Length; i++)
            SetPieceActive(pieces[i], false);

        heldWorldZ = p.tr.eulerAngles.z + carryZOffset;

        p.tr.DOKill();
        p.tr.SetParent(holdAnchor, true);
        p.tr.DOLocalMove(holdLocalOffset, grabTime).SetEase(Ease.OutQuad);

        if (rotateWithTool && carryZOffset != 0f)
            p.tr.DOLocalRotate(new Vector3(0f, 0f, carryZOffset), grabTime);

        if (p.rend != null)
            p.rend.sortingOrder = heldSortingOrder;

        SetPinch(1f, true);
        PlayPickFeedback();
        p.OnPicked?.Invoke();
    }

    void Place()
    {
        if (held == null)
            return;

        Piece p = held;
        held = null;
        insideSpoon = false;

        if (Tool != null)
            Tool.dontResetItIsInCollider = false;

        if (!dragPiecesDirectly)
            SetPinch(0f, true);

        currentIndex++;

        if (UI_Manager.instance != null && pieces.Length > 0)
            UI_Manager.instance.SetProgressBar((float)currentIndex / pieces.Length);

        Transform st = p.spoonImage != null ? p.spoonImage.transform : null;

        p.tr.DOKill();

        if (placeTime <= 0f || st == null)
        {
            Handover(p);
            return;
        }

        p.tr.SetParent(st.parent, true);

        SpriteRenderer copyRend = p.spoonImage.GetComponent<SpriteRenderer>();

        if (p.rend != null && copyRend != null)
        {
            p.rend.sortingLayerID = copyRend.sortingLayerID;
            p.rend.sortingOrder = copyRend.sortingOrder;
            p.rend.maskInteraction = copyRend.maskInteraction;
        }

        Vector3 landEuler = st.localEulerAngles;
        landEuler.z = Mathf.DeltaAngle(0f, landEuler.z);

        p.tr.DOLocalMove(st.localPosition, placeTime).SetEase(Ease.InQuad);
        p.tr.DOLocalRotate(landEuler, placeTime).SetEase(Ease.InQuad);
        p.tr.DOScale(st.localScale, placeTime).SetEase(Ease.InQuad)
            .OnComplete(() => Handover(p));
    }

    void Handover(Piece p)
    {
        p.tr.DOKill();
        p.tr.SetParent(p.startParent, false);
        p.tr.localPosition = p.startLocalPos;
        p.tr.localEulerAngles = p.startLocalEuler;
        p.tr.localScale = p.startLocalScale;

        if (p.rend != null)
        {
            p.rend.sortingLayerID = p.startSortingLayerID;
            p.rend.sortingOrder = p.startOrder;
            p.rend.maskInteraction = p.startMask;
        }

        p.tr.gameObject.SetActive(false);

        if (p.spoonImage != null)
        {
            Transform st = p.spoonImage.transform;
            st.DOKill(true);

            if (spoonImageDropSettle != 0f)
                st.localEulerAngles = p.spoonImageEuler + new Vector3(0f, 0f, spoonImageDropSettle);

            p.spoonImage.SetActive(true);

            if (spoonImageDropSettle != 0f)
                st.DOLocalRotate(p.spoonImageEuler, spoonImagePunchTime).SetEase(Ease.OutBack);

            if (spoonImagePunch > 0f)
                st.DOPunchScale(st.localScale * spoonImagePunch, spoonImagePunchTime, 6, 0.6f);
        }

        if (placeClip != null && AudioController.instance != null)
            AudioController.instance.PlayAnySfx(0, placeClip, 0f);

            

        p.OnPlaced?.Invoke();
        placing = false;

        if (currentIndex < pieces.Length)
        {
            SetPieceActive(pieces[currentIndex], true);
        }
        else
        {
            isDone = true;
            OnAllPlaced?.Invoke();
        }
    }

    void OnToolReleased()
    {
        if (dragPiecesDirectly)
            return;

        if (held == null || !insideSpoon)
            return;

        Place();
    }

    void PlayPickFeedback()
    {
        if (pickClip != null && AudioController.instance != null)
            AudioController.instance.PlayAnySfx(0, pickClip, 0f);

            
    }

    void SetPieceActive(Piece p, bool state)
    {
        if (p == null || p.pieceCollider == null)
            return;

        p.pieceCollider.enabled = state;

        if (dragPiecesDirectly && p.drag != null)
        {
            p.drag.canDrag = state;
            p.drag.enabled = state;
            p.drag.thisCollider = p.pieceCollider;

            if (p.drag.thisCollider != null)
                p.drag.thisCollider.enabled = state;
        }

        if (p.outline == null)
            return;

        if (state)
            p.outline.EnableAnim();
        else
            p.outline.DisableAnim();
    }

    void SetPinch(float t, bool tween)
    {
        for (int i = 0; i < bones.Length; i++)
        {
            PinchBone b = bones[i];

            if (b.bone == null)
                continue;

            Vector3 pos = b.startPos + b.pinchLocalOffset * t;
            Vector3 euler = b.startEuler + new Vector3(0f, 0f, b.pinchLocalZ * t);

            b.bone.DOKill();

            if (tween)
            {
                b.bone.DOLocalMove(pos, pinchTime);
                b.bone.DOLocalRotate(euler, pinchTime);
            }
            else
            {
                b.bone.localPosition = pos;
                b.bone.localEulerAngles = euler;
            }
        }
    }
}
