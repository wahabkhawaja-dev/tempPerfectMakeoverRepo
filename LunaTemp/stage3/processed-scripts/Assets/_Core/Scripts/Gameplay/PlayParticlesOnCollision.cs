using UnityEngine;
using UnityEngine.Events;

public class PlayParticlesOnCollision : MonoBehaviour
{
    [Space()]
    public GameObject Target;

    [Space()]
    public GameObject ParticlePrefab;

    [Space()]
    public bool destroyIt = true;

    [Space()]
    public bool stayAtPlace = false;

    [Space()]
    public bool disableOnCollision = false;

    bool isDone = false;

    public UnityEvent OnCollisionEvent;

    void OnTriggerEnter2D(Collider2D collision)
    {
        if (isDone)
            return;

        if (Target == null)
            return;

        if (ParticlePrefab == null)
            return;

        if (collision != null)
        {
            if (collision.gameObject == Target.gameObject)
            {
                isDone = true;


                    

                OnCollisionEvent?.Invoke();

                GameObject temp = Instantiate(ParticlePrefab);

                if (!stayAtPlace)
                    temp.transform.position = Target.transform.position;

                else
                {
                    temp.transform.SetParent(this.transform);

                    temp.transform.localPosition = Vector3.zero;
                }

                if (destroyIt)
                    Destroy(temp, 2f);

                if (disableOnCollision)
                    this.gameObject.SetActive(false);

                
            }
        }
    }
}
