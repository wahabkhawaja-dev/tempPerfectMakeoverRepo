using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.Events; // Required for UnityEvent

public class BD_Welder : MonoBehaviour
{
    [Space()]
    public bool canDrag = false;
    public bool isDragging = false;

    [Header("Direction Settings")]
    [Tooltip("If true, dragging UP increases progress. If false (default), dragging DOWN increases progress.")]
    public bool dragUp = false;

    [Space()]
    public Animator animator;
    public string animationName;

    [Space()]
    public float dragSensitivity = 500f;

    [Space()]
    public float reverseDuration = 1.0f;

    [Header("Events")]
    public UnityEvent OnComplete; // Visible in the Inspector
    public Action OnMouseDownEvent;
    public Action OnMouseUpEvent;

    float _currentProgress = 0f;
    Vector3 _lastMousePosition;
    Coroutine _reverseRoutine;
    bool _isFinished = false; // Tracks if OnComplete has fired

    Collider2D thisCollider;
    bool _downOnThis;

    void Start()
    {
        if (animator != null) animator.speed = 0;
        isDragging = false;
        _isFinished = false;
        thisCollider = GetComponent<Collider2D>();
    }

    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            if (PointerInput.IsOverCollider(thisCollider))
            {
                _downOnThis = true;
                MouseDownPressed();
            }
        }

        if (isDragging)
            MouseDragUpdate();

        if (Input.GetMouseButtonUp(0) && _downOnThis)
        {
            _downOnThis = false;
            MouseUpPressed();
        }
    }

    void MouseDownPressed()
    {
        if (isOverUI() || !canDrag || _isFinished) return;

        _lastMousePosition = Input.mousePosition;
        isDragging = true;

        if (_reverseRoutine != null) StopCoroutine(_reverseRoutine);
        OnMouseDownEvent?.Invoke();
    }

    void MouseUpPressed()
    {
        isDragging = false;
        OnMouseUpEvent?.Invoke();
    }

    void MouseDragUpdate()
    {
        if (isOverUI() || !canDrag || _isFinished) return;

        float deltaY = Input.mousePosition.y - _lastMousePosition.y;

        // Logic for direction:
        // If dragUp is false, downward movement (negative deltaY) increases progress.
        float directionMultiplier = dragUp ? 1f : -1f;
        float normalizedDelta = (deltaY * directionMultiplier) / dragSensitivity;

        // ONE-WAY LOGIC: Only add to progress if the movement is in the correct direction (positive)
        if (normalizedDelta > 0)
        {
            _currentProgress = Mathf.Clamp01(_currentProgress + normalizedDelta);
            UpdateAnimationPosition();

            // Trigger OnComplete when progress reaches 100%
            if (_currentProgress >= 1f && !_isFinished)
            {
                _isFinished = true;
                OnComplete?.Invoke();
                isDragging = false;
            }
        }

        _lastMousePosition = Input.mousePosition;
    }

    void UpdateAnimationPosition()
    {
        if (animator == null) return;
        animator.Play(animationName, 0, _currentProgress);
        animator.Update(0f);
    }

    // Resets the finished state if you want to allow welding again after a reverse
    public void ResetWelder()
    {
        _isFinished = false;
        _currentProgress = 0f;
        UpdateAnimationPosition();
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
        _isFinished = false; // Reset so they can drag again
        _reverseRoutine = null;
    }

    public bool isOverUI()
    {
        if (EventSystem.current != null && EventSystem.current.IsPointerOverGameObject()) return true;
        if (Input.touchCount > 0 && EventSystem.current.IsPointerOverGameObject(Input.GetTouch(0).fingerId)) return true;
        return false;
    }
}