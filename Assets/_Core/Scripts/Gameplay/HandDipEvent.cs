using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class HandDipEvent : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    [Space()]
    public UnityEvent OnTap;

    bool isDone;

    public void EventCalled()
    {
        if (GameManager.instance.isOverUI())
            return;

        if (GameManager.instance.isPaused)
            return;

        if (isDone)
            return;

        isDone = true;

        if (OnTap != null)
            OnTap.Invoke();

        // VibrationManager.instance.MediumImpact();
    }

}
