using UnityEngine;
using UnityEngine.Events;

public class JarDropTrigger : MonoBehaviour
{
    [SerializeField] private GameObject jarTopTarget;
    [SerializeField] private UnityEvent OnHitJar;

    private bool triggered = false;

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (triggered)
            return;

        if (collision.gameObject != jarTopTarget)
            return;

        triggered = true;
        OnHitJar?.Invoke();
    }
}
