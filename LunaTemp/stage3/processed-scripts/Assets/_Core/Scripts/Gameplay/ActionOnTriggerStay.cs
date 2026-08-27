using UnityEngine;
using UnityEngine.Events;

public class ActionOnTriggerStay : MonoBehaviour
{
    [Space()]
    public GameObject Tip;
    
    [Space()]
    public UnityEvent OnEnter;
    
    [Space()]
    public UnityEvent OnExit;

    void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision != null)
        {
            if (collision.gameObject == Tip)
            {
                if (OnEnter != null) 
                    OnEnter.Invoke();
            }
        }
    }

    void OnTriggerExit2D(Collider2D collision)
    {
        if (collision != null)
        {
            if (collision.gameObject == Tip)
            {
                if (OnExit != null)
                    OnExit.Invoke();
            }
        }
    }

    void OnDisable()
    {
        if (OnExit != null)
            OnExit.Invoke();
    }
}
