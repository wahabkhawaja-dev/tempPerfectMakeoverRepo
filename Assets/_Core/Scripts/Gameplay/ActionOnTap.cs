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

    void Start()
    {
        thisCollider = GetComponent<Collider2D>();
    }

    // Luna/Bridge.NET only routes OnMouseDown through 3D physics, so it never fires on a
    // Collider2D in a playable build. Poll the button and hit-test the collider instead
    // (same pattern as BasicDrag / Level1_SurfController).
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