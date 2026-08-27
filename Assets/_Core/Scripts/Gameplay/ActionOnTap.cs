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


    public void OnMouseDown()
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