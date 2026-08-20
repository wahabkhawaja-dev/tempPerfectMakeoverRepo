using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.EventSystems;

[RequireComponent(typeof(BoxCollider2D))]
public class SpriteButton : MonoBehaviour
{
    [Space(10)]
    [SerializeField] private SpriteRenderer spriteRenderer;

    [Space(10)]
    [SerializeField] private Sprite normalSprite;
    [SerializeField] private Sprite hoverSprite;
    [SerializeField] private Sprite pressedSprite;

    [Space(10)]
    [Header("Scale Settings")]
    [SerializeField] private float hoverScale = 1.12f;     // Hover mein kitna bada hoga
    [SerializeField] private float pressScale = 0.9f;      // Press mein kitna chhota hoga (0.175f bohot chhota tha)
    [SerializeField] private float animationDuration = 0.1f;

    [Space(10)]
    public UnityEvent onClick;

    private Vector3 originalScale;
    private Tween currentTween;

    bool isFinished;

    Collider2D thisCollider;
    bool wasOver;
    bool downOnThis;

    void Awake()
    {
        if (spriteRenderer == null)
            spriteRenderer = GetComponent<SpriteRenderer>();

        originalScale = transform.localScale;

        // Agar normalSprite assign nahi kiya to current sprite ko normal bana do
        if (normalSprite == null && spriteRenderer != null)
            normalSprite = spriteRenderer.sprite;

        thisCollider = GetComponent<Collider2D>();
    }

    void Update()
    {
        bool isOver = PointerInput.IsOverCollider(thisCollider);

        if (isOver && !wasOver)
            MouseEnter();
        else if (!isOver && wasOver)
            MouseExit();

        wasOver = isOver;

        if (Input.GetMouseButtonDown(0) && isOver)
            downOnThis = true;

        if (Input.GetMouseButtonUp(0))
        {
            if (downOnThis && isOver)
                MouseUpAsButton();

            downOnThis = false;
        }
    }

    // ==================== HOVER ====================
    void MouseEnter()
    {
        if (isOverUI()) return;
        
        if (isFinished) return;

        // Previous tween kill kar do
        currentTween?.Kill();

        // Scale up + Hover Sprite
        currentTween = transform.DOScale(originalScale * hoverScale, animationDuration).SetEase(Ease.OutQuad);

        if (hoverSprite != null)
            spriteRenderer.sprite = hoverSprite;
    }

    void MouseExit()
    {
        if (isOverUI()) return;

        if (isFinished) return;

        currentTween?.Kill();

        // Wapas normal scale + normal sprite
        currentTween = transform.DOScale(originalScale, animationDuration).SetEase(Ease.OutQuad);

        if (normalSprite != null)
            spriteRenderer.sprite = normalSprite;
    }

    // ==================== PRESS ====================
    void MouseUpAsButton()
    {
        if (isOverUI()) return;

        if (isFinished) return;

        isFinished = true;

        currentTween?.Kill();

        // Press Effect
        transform.DOScale(originalScale * pressScale, animationDuration).SetEase(Ease.OutQuad);

        if (pressedSprite != null)
            spriteRenderer.sprite = pressedSprite;

        // Click invoke with small delay
        DOVirtual.DelayedCall(0.1f, () =>
        {
            onClick?.Invoke();

            // Wapas hover state pe le aao (agar mouse abhi bhi upar hai)
            if (IsPointerOverThisObject())
            {
                transform.DOScale(originalScale * hoverScale, 0.1f);
                if (hoverSprite != null)
                    spriteRenderer.sprite = hoverSprite;
            }
            else
            {
                transform.DOScale(originalScale, 0.1f);
                if (normalSprite != null)
                    spriteRenderer.sprite = normalSprite;
            }
        });

        // Haptics & Sound
            

        DOVirtual.DelayedCall(2f, () =>
        {
            isFinished = false;
        });

       /* if (AudioController.instance)
            AudioController.instance.PlayUiClickSfx();*/
    }

    // Optional: Better check for mouse over this specific object
    private bool IsPointerOverThisObject()
    {
        Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        RaycastHit2D hit = Physics2D.Raycast(ray.origin, ray.direction);

        return hit.collider != null && hit.collider.gameObject == gameObject;
    }

    public bool isOverUI()
    {
        if (EventSystem.current == null) return false;

        if (EventSystem.current.IsPointerOverGameObject())
            return true;

        if (Input.touchCount > 0)
        {
            if (EventSystem.current.IsPointerOverGameObject(Input.GetTouch(0).fingerId))
                return true;
        }

        return false;
    }

    private void OnDisable()
    {
        currentTween?.Kill();
    }
}
