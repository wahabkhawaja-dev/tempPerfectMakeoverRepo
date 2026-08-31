using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class BD_ItemPick : MonoBehaviour
{
    [Header("References")]
    public BasicDrag Tool;
    public OutlinePulse Outline;
    public SpriteRenderer itemRend;

    [Header("Sprites")]
    public Sprite pick_sp;

    [Header("Events")]
    public UnityEvent OnTap;
    public UnityEvent OnComplete;

    [Header("Audio")]
    public AudioClip Clip;

    [Header("Settings")]
    [Tooltip("Minimum drag distance required to trigger removal")]
    public float minDragDistance = 25f; // In screen pixels

    Vector3 dragStartPos;
    bool isDone = false, hasBeenPicked = false;

    public bool isTaped = false;

    void Start()
    {
        // Subscribe to drag events
        Tool.OnMouseDownEvent += OnToolGrabbed;

        Tool.OnMouseUpEvent += OnToolReleased;
    }

    void OnToolGrabbed()
    {
        if (isDone)
            return;

        OnTap?.Invoke();

        dragStartPos = Input.mousePosition;

        hasBeenPicked = false;
    }

    void Update()
    {
        if (isDone || !Tool.isDragging || hasBeenPicked)
            return;

        TrySetPickedSprite();
    }

    void TrySetPickedSprite()
    {
        if (hasBeenPicked || pick_sp == null)
            return;

        hasBeenPicked = true;

        if (itemRend != null)
            itemRend.sprite = pick_sp;
    }

    void OnToolReleased()
    {
        if (Vector3.Distance(dragStartPos, Input.mousePosition) < minDragDistance && !isTaped)
        {
            DOVirtual.DelayedCall(0.25f, () =>
            {
                isTaped = true;
            });
           

            return;
        }

        if (isDone || !hasBeenPicked)
        {
            // Just tapped or barely moved — do nothing (or you can add feedback)
            Outline?.EnableAnim();

            return;
        }

        Outline?.DisableAnim();

        if (itemRend != null)
            itemRend.material = GameManager.instance.DefaultMat;

        // Actual removal only if dragged enough and sprite changed
        TriggerRemoval();
    }

    void TriggerRemoval()
    {
        if (isDone)
            return;

        isDone = true;

        // Lock tool
        Tool.isPlacedCannotMove = true;
        Tool.enabled = false;
        Tool.isDragging = false;
        Tool.thisCollider.enabled = false;
        Tool.canDrag = false;

        Outline?.DisableAnim();

        // Kill any ongoing tweens
        Tool.transform.DOKill();

        // Animate out
        Tool.transform.DOMoveX(10f, 0.5f)
            .SetEase(Ease.InBack)
            .OnComplete(() =>
            {
                Tool.gameObject.SetActive(false);
            });

        // Play sound
        if (Clip != null)
            AudioController.instance.PlayAnySfx(0, Clip, 0f);

        // Delay event slightly for better feel
        DOVirtual.DelayedCall(0.3f, () =>
        {
            OnComplete?.Invoke();
        });
    }

    // Cleanup
    void OnDestroy()
    {
        if (Tool != null)
        {
            Tool.OnMouseDownEvent -= OnToolGrabbed;

            Tool.OnMouseUpEvent -= OnToolReleased;
        }
    }
}
