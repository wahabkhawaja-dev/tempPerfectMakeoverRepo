using UnityEngine;
using UnityEngine.Events;

public class ActionOnTap : MonoBehaviour
{
    [Space()]
    public UnityEvent OnTap;

    bool isDone;
    Collider2D thisCollider;

    void Start()
    {
        thisCollider = GetComponent<Collider2D>();
    }

    void Update()
    {
        if (Input.GetMouseButtonDown(0) && PointerInput.IsOverCollider(thisCollider))
            MouseDownPressed();
    }

    void MouseDownPressed()
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
