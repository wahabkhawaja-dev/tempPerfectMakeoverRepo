using UnityEngine;
using UnityEngine.Events;

public class ActionOnTap : MonoBehaviour
{
    [Space()]
    public UnityEvent OnTap;

    bool isDone;

    void OnMouseDown()
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

        
    }
}
