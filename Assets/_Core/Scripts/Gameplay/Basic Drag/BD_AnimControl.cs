using System;
using UnityEngine;
using System.Collections;
using UnityEngine.EventSystems;

public class BD_AnimControl : MonoBehaviour
{
    [Space()]
    public bool canDrag = false;
    public bool isDragging = false;

    [Header("Direction Settings")]
    [Tooltip("If true, dragging UP moves to last frame. If false, dragging DOWN moves to last frame.")]
    public bool dragUp = false;

    [Space()]
    public Animator animator;
    public string animationName;

    [Space()]
    public GameObject Indication;

    [Space()]
    public float dragSensitivity = 500f;

    [Space()]
    public float reverseDuration = 1.0f;

    public Action OnMouseDownEvent; // Added to support your sprite script
    public Action OnMouseUpEvent;

    float _currentProgress = 0f;
    Vector3 _lastMousePosition;
    Coroutine _reverseRoutine;

    void Start()
    {
        if (animator != null) animator.speed = 0;
        isDragging = false;
    }

    void OnMouseDown()
    {
        if (isOverUI() || !canDrag)
            return;

        _lastMousePosition = Input.mousePosition;
        isDragging = true;

        if (_reverseRoutine != null) StopCoroutine(_reverseRoutine);

        OnMouseDownEvent?.Invoke();

        if (Indication != null)
            Indication.SetActive(false);
    }

    void OnMouseUp()
    {
        isDragging = false;
        OnMouseUpEvent?.Invoke();
    }

    void OnMouseDrag()
    {
        if (isOverUI() || !canDrag) return;

        float deltaY = Input.mousePosition.y - _lastMousePosition.y;

        // Logic switch for direction:
        // If dragUp is true, positive deltaY increases progress.
        // If dragUp is false, negative deltaY increases progress.
        float directionMultiplier = dragUp ? 1f : -1f;
        float normalizedDelta = (deltaY * directionMultiplier) / dragSensitivity;

        _currentProgress = Mathf.Clamp01(_currentProgress + normalizedDelta);

        UpdateAnimationPosition();
        _lastMousePosition = Input.mousePosition;
    }

    void UpdateAnimationPosition()
    {
        if (animator == null) return;
        animator.Play(animationName, 0, _currentProgress);
        animator.Update(0f);
    }

    public void PlayReverse()
    {
        if (_reverseRoutine != null) StopCoroutine(_reverseRoutine);
        _reverseRoutine = StartCoroutine(ReverseRoutine());
    }

    IEnumerator ReverseRoutine()
    {
        float startValue = _currentProgress;
        float timer = 0f;

        while (timer < reverseDuration)
        {
            timer += Time.deltaTime;
            _currentProgress = Mathf.Lerp(startValue, 0f, timer / reverseDuration);
            UpdateAnimationPosition();
            yield return null;
        }

        _currentProgress = 0f;
        UpdateAnimationPosition();
        _reverseRoutine = null;
    }

    public bool isOverUI()
    {
        if (EventSystem.current != null && EventSystem.current.IsPointerOverGameObject()) return true;
        if (Input.touchCount > 0 && EventSystem.current.IsPointerOverGameObject(Input.GetTouch(0).fingerId)) return true;
        return false;
    }
}