using UnityEngine;
using DG.Tweening;
using UnityEngine.Events;
using UnityEngine.EventSystems;

[RequireComponent(typeof(BoxCollider2D))]
public class BD_Sticky : MonoBehaviour
{
    public enum Direction { Left, Right, Up, Down }

    [Space()]
    public Animator anim;

    [Header("Pull Direction Needed To Free Object")]
    [SerializeField] Direction direction;

    [Space()]
    [Header("Settings")]
    [SerializeField] float dragThreshold = 0.2f; // New: Distance needed to start dragging
    [SerializeField] float pullDistanceToFree = 1f;
    [SerializeField] float returnSpeed = 8f;
    public bool isVerticlePull = true;

    [Header("Stuck / Heavy Feel")]
    [SerializeField] float resistance = 0.25f;

    [Space()]
    [SerializeField] Transform[] StartBones;
    [SerializeField] Transform[] EndBones;
    [SerializeField] Transform BonePivot;

    [Space()]
    [Header("Sfx")]
    public AudioClip pickSfx;
    public AudioClip pulledClip;
    public AudioSource pullSource;

    [Space()]
    public UnityEvent OnComplete;

    Vector3[] others_Spos;
    Vector2 startPos, allowedDir;
    
    private bool isAttemptingDrag = false; // New: Mouse is down but threshold not met
    private bool isDragging = false;       // Threshold met, actually pulling
    private bool isFreed = false;
    private float currentPull = 0f; 

    private Vector2 dragStartWorldPos;
    private Vector2 lastMouseWorldPos;
    private bool hasValidLastPos = false;

    [Space()]
    [Header("Layring")]
    public bool changeLayerPick=false;
    public SpriteRenderer sp_rendr;
    public int def_layerNo;
    public int tar_LayerNo;

    void Awake()
    {
        startPos = transform.position;
        allowedDir = GetDirectionVector(direction);
        others_Spos = new Vector3[StartBones.Length];

        for (int i = 0; i < StartBones.Length; i++)
        {
            others_Spos[i] = StartBones[i].transform.position;
        }
    }

    void Start()
    {
        if (anim != null)
        {
            anim.Play(anim.GetCurrentAnimatorStateInfo(0).fullPathHash, 0, 0f);
            anim.Update(0f);
            anim.enabled = false;
        }
    }

    void Update()
    {
        if (isOverUI()) return;

        HandlePull();

        if (!isDragging && !isFreed)
        {
            currentPull = Mathf.Lerp(currentPull, 0f, Time.deltaTime * returnSpeed);
            transform.position = startPos + allowedDir * currentPull;
        }
    }

    void HandlePull()
    {
        if (isFreed) return;

        // 1. INITIAL CLICK
        if (Input.GetMouseButtonDown(0))
        {
            Vector2 mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);

            if (GetComponent<Collider2D>().OverlapPoint(mousePos))
            {
                dragStartWorldPos = mousePos;
                isAttemptingDrag = true;
                isDragging = false;


                if (changeLayerPick) 
                {
                    sp_rendr.sortingOrder = tar_LayerNo;
                }
            }
        }

        // 2. HOLDING MOUSE
        if (Input.GetMouseButton(0) && isAttemptingDrag)
        {
            Vector2 currentMouseWorld = Camera.main.ScreenToWorldPoint(Input.mousePosition);

            // Check if we should start the drag (Threshold check)
            if (!isDragging)
            {
                float dist = Vector2.Distance(currentMouseWorld, dragStartWorldPos);
                if (dist > dragThreshold)
                {
                    isDragging = true;
                    lastMouseWorldPos = currentMouseWorld;
                    hasValidLastPos = true;

                    // Trigger "Start Drag" effects once
                    
                    if (anim != null) anim.enabled = true;
                    if (pickSfx != null) AudioController.instance.PlayAnySfx(2, pickSfx, 0);
                }
            }

            // If we are actively dragging, update movement
            if (isDragging)
            {
                Vector2 deltaFromDragStart = currentMouseWorld - dragStartWorldPos;
                float desiredPull = Mathf.Max(0f, Vector2.Dot(deltaFromDragStart, allowedDir));

                if (hasValidLastPos)
                {
                    Vector2 movementThisFrame = currentMouseWorld - lastMouseWorldPos;
                    float movementInAllowedDir = Vector2.Dot(movementThisFrame, allowedDir);

                    if (movementInAllowedDir > 0.001f)
                    {
                        currentPull = Mathf.Lerp(currentPull, desiredPull, Time.deltaTime * resistance * 10f);
                    }

                    if (movementInAllowedDir > 0.02f) { if (!pullSource.isPlaying) pullSource.Play(); }
                    else { pullSource.Stop(); }
                }

                transform.position = startPos + allowedDir * currentPull;

                // Update Bones
                for (int i = 0; i < StartBones.Length; i++)
                {
                    if (isVerticlePull) StartBones[i].transform.DOMoveY(BonePivot.position.y, 0.2f);
                    else StartBones[i].transform.DOMoveX(BonePivot.position.x, 0.2f);
                }

                // Check Completion
                if (currentPull >= pullDistanceToFree)
                {
                    FinishPull();
                }

                lastMouseWorldPos = currentMouseWorld;
            }
        }

        // 3. RELEASE
        if (Input.GetMouseButtonUp(0))
        {
            ResetPullState();

            if (changeLayerPick)
            {
                sp_rendr.sortingOrder = def_layerNo;
            }
        }
    }

    void FinishPull()
    {
        isFreed = true;
        isDragging = false;
        isAttemptingDrag = false;

        if (isVerticlePull)
        {
            for (int i = 0; i < EndBones.Length; i++)
                EndBones[i].transform.DOMoveY(BonePivot.position.y - 0.25f, 0.25f);
        }
        else
        {
            for (int i = 0; i < EndBones.Length; i++)
                EndBones[i].transform.DOMoveX(BonePivot.position.x - 0.25f, 0.25f);
        }

        EndBones[0].parent.parent = transform;
        OnComplete?.Invoke();
        
        if (pulledClip != null) AudioController.instance.PlayAnySfx(0, pulledClip, 0);
        pullSource.Stop();
    }

    void ResetPullState()
    {

        isDragging = false;
        isAttemptingDrag = false;
        hasValidLastPos = false;
        pullSource.Stop();

        for (int i = 0; i < StartBones.Length; i++)
        {
            StartBones[i].transform.DOMove(others_Spos[i], 0.2f);
        }

        if (anim != null && !isFreed)
        {
            anim.Play(anim.GetCurrentAnimatorStateInfo(0).fullPathHash, 0, 0f);
            anim.Update(0f);
            anim.enabled = false;
        }
    }

    Vector2 GetDirectionVector(Direction dir)
    {
        switch (dir)
        {
            case Direction.Up: return Vector2.up;
            case Direction.Down: return Vector2.down;
            case Direction.Left: return Vector2.left;
            case Direction.Right: return Vector2.right;
            default: return Vector2.zero;
        }
    }

    public bool isOverUI()
    {
        if (EventSystem.current != null && EventSystem.current.IsPointerOverGameObject()) return true;
        if (EventSystem.current != null && Input.touchCount > 0 && EventSystem.current.IsPointerOverGameObject(Input.GetTouch(0).fingerId)) return true;
        return false;
    }
}
