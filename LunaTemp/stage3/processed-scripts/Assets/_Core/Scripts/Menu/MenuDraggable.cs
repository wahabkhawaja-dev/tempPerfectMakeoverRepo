using System;
using UnityEngine;
using DG.Tweening;

// Minimal drag component for menu-scene objects. Deliberately self-contained (no
// GameManager/VibrationManager/AudioController references) since those singletons
// only exist in the Gameplay scene and are null here.
public class MenuDraggable : MonoBehaviour
{
    [Space()]
    public bool canDrag = false;

    [Space()]
    public bool returnToStartPosition = false;
    public float returnDuration = 0.3f;
    public Ease returnEase = Ease.OutQuad;

    [Space()]
    public float ClampX_L = -100f, ClampX_H = 100f,
                 ClampY_L = -100f, ClampY_H = 100f;

    [Space()]
    public AudioClip ToolTapClip;

    // Set by an external script (e.g. once the object is accepted at a drop target)
    // to stop it from springing back to its start position on release.
    [HideInInspector()]
    public bool isPlaced;

    Camera cam;
    Vector3 offset;
    bool isDragging;

    bool hasStartPos;
    Vector3 startPos;

    public Action OnPicked;
    public Action OnReleased;

    Collider2D thisCollider;

    void Start()
    {
        cam = Camera.main;
        thisCollider = GetComponent<Collider2D>();
    }

    void Pick()
    {
        if (!canDrag)
            return;

        if (!hasStartPos)
        {
            startPos = transform.position;
            hasStartPos = true;
        }

        isDragging = true;

        Vector3 mouseWorld = cam.ScreenToWorldPoint(Input.mousePosition);
        offset = transform.position - mouseWorld;

        OnPicked?.Invoke();

        if (ToolTapClip != null)
            AudioController.instance.PlayAnySfx(0, ToolTapClip, 0f);
    }

    // Luna registers OnMouseDown/OnMouseUp but only ever dispatches them off the physics
    // contact path, so a Collider2D never receives them. Poll the button instead.
    void Update()
    {
        if (Input.GetMouseButtonDown(0) && PointerInput.IsOverCollider(thisCollider))
            Pick();

        if (Input.GetMouseButtonUp(0))
            Release();

        if (!isDragging)
            return;

        Vector3 mouseWorld = cam.ScreenToWorldPoint(Input.mousePosition);
        Vector3 targetPos = mouseWorld + offset;
        targetPos.x = Mathf.Clamp(targetPos.x, ClampX_L, ClampX_H);
        targetPos.y = Mathf.Clamp(targetPos.y, ClampY_L, ClampY_H);
        targetPos.z = transform.position.z;

        transform.position = targetPos;
    }

    void Release()
    {
        if (!isDragging)
            return;

        isDragging = false;

        OnReleased?.Invoke();

        if (returnToStartPosition && !isPlaced)
        {
            transform.DOKill();
            transform.DOMove(startPos, returnDuration).SetEase(returnEase);
        }
    }
}
