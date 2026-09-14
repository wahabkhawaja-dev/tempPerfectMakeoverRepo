using UnityEngine;

public class MatchTargetXPosition : MonoBehaviour
{
    [Header("Target")]
    public Transform target;

    [Header("Clamp Values")]
    public float ClampX_L = -2.5f;   // Minimum X
    public float ClampX_H = 2.5f;    // Maximum X

    [Header("Options")]
    public bool smoothFollow = false;
    public float smoothSpeed = 5f;
    public bool useClamp = true;     // Clamp on/off karne ke liye

    void Update()
    {
        if (target == null) return;

        Vector3 newPos = transform.position;
        float targetX = target.position.x;

        // Smooth follow
        if (smoothFollow)
        {
            targetX = Mathf.Lerp(transform.position.x, target.position.x, smoothSpeed * Time.deltaTime);
        }

        // Apply Clamp
        if (useClamp)
        {
            targetX = Mathf.Clamp(targetX, ClampX_L, ClampX_H);
        }

        newPos.x = targetX;
        transform.position = newPos;
    }
}