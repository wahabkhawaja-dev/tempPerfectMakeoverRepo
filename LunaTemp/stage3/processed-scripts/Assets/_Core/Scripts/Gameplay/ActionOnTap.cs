using System;
using UnityEngine;
using DG.Tweening;
using UnityEngine.Events;

public class ActionOnTap : MonoBehaviour
{
    [Space()]
    public UnityEvent OnTap;
    
    [Space()]
    public Action OnTapExtra;

    bool isDone;
    bool extraCalled = false;

    Collider2D thisCollider;

    void Awake()
    {
        thisCollider = GetComponent<Collider2D>();
    }

    // Luna registers OnMouseDown but only ever dispatches it off the physics contact path,
    // so a Collider2D never receives it. Poll the button instead.
    void Update()
    {
        if (Input.GetMouseButtonDown(0) && PointerInput.IsOverCollider(thisCollider))
            Tap();
    }

    public void Tap()
    {
        if (GameManager.instance.isOverUI())
            return;

        if (GameManager.instance.isPaused)
            return;

        if (isDone)
        {
            if (extraCalled)
                return;
            
            extraCalled = true;

            if (OnTapExtra != null)
                OnTapExtra.Invoke();

            DOVirtual.DelayedCall(.5f, () =>
            {
                extraCalled = false;
            });

            return;
        }

        isDone = true;

        if (OnTap != null)
            OnTap.Invoke();

        // VibrationManager.instance.MediumImpact();
    }
}