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

    void Start()
    {
        cam = Camera.main;
    }

    void __LunaMouseDown()
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

    void Update()
    {
        __LunaPollMouse();
        if (!isDragging)
            return;

        Vector3 mouseWorld = cam.ScreenToWorldPoint(Input.mousePosition);
        Vector3 targetPos = mouseWorld + offset;
        targetPos.x = Mathf.Clamp(targetPos.x, ClampX_L, ClampX_H);
        targetPos.y = Mathf.Clamp(targetPos.y, ClampY_L, ClampY_H);
        targetPos.z = transform.position.z;

        transform.position = targetPos;
    }

    void __LunaMouseUp()
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

    // [Luna] OnMouse* messages don't fire reliably in Luna/WebGL, so input is polled instead.
    bool __lunaMouseHeld;

    void __LunaPollMouse()
    {
        if (!__lunaMouseHeld)
        {
            if (UnityEngine.Input.GetMouseButtonDown(0) && __LunaPointerOverThis())
            {
                __lunaMouseHeld = true;
                __LunaMouseDown();
            }
        }
        else if (!UnityEngine.Input.GetMouseButton(0))
        {
            __lunaMouseHeld = false;
            __LunaMouseUp();
        }
    }

    bool __LunaPointerOverThis()
    {
        UnityEngine.Camera cam = UnityEngine.Camera.main;
        if (cam == null) return false;
        if (GetComponent<UnityEngine.Collider2D>() != null)
        {
            UnityEngine.RaycastHit2D hit = UnityEngine.Physics2D.Raycast(cam.ScreenToWorldPoint(UnityEngine.Input.mousePosition), UnityEngine.Vector2.zero);
            return hit.collider != null && hit.collider.gameObject == gameObject;
        }
        UnityEngine.RaycastHit hit3D;
        return GetComponent<UnityEngine.Collider>() != null
            && UnityEngine.Physics.Raycast(cam.ScreenPointToRay(UnityEngine.Input.mousePosition), out hit3D)
            && hit3D.collider.gameObject == gameObject;
    }
}
