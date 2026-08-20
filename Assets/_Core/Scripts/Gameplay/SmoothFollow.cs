using UnityEngine;

public class SmoothFollow : MonoBehaviour
{
    [SerializeField] Transform target;

    [SerializeField] float followSmoothness = 5f;

    void Update()
    {
        if (target == null)
            return;

        transform.position 
            =
            Vector3.Lerp(transform.position, target.position, followSmoothness * Time.deltaTime);
    }
}
