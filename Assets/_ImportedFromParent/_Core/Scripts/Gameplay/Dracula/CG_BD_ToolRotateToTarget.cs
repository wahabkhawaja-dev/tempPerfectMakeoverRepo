using UnityEngine;

// Like CG_BD_ToolRotate, but driven by how close the dragged item is to its target spot instead of by its X
// within a clamp: from where it was when enabled it turns toward TargetAngle as it nears Target, and is exactly at
// TargetAngle once within ExactRadius - so an item dropped on its place is already turned to fit.
public class CG_BD_ToolRotateToTarget : MonoBehaviour
{
    [Space()]
    public BasicDrag Tool;

    [Space()]
    public Transform Pivot;

    [Space()]
    public Vector3 Target;
    public float TargetAngle;
    [Tooltip("Within this world distance of Target the item is exactly at TargetAngle.")]
    public float ExactRadius = .25f;

    [Space()]
    [Tooltip("How quickly the pivot follows tool movement")]
    public float rotationSpeed = 20f;

    float startAngle;
    float startDistance;
    float current;

    void OnEnable()
    {
        if (Pivot == null)
            Pivot = Tool != null ? Tool.transform : transform;

        startAngle = Pivot.eulerAngles.z;
        startDistance = Mathf.Max(Distance(), ExactRadius + .01f);
        current = startAngle;
    }

    void Update()
    {
        float t = Mathf.InverseLerp(startDistance, ExactRadius, Distance());
        float target = Mathf.LerpAngle(startAngle, TargetAngle, Mathf.SmoothStep(0f, 1f, t));

        // Smoothly follow for natural motion
        current = Mathf.LerpAngle(current, target, Time.deltaTime * rotationSpeed);

        Pivot.rotation = Quaternion.Euler(0f, 0f, current);
    }

    float Distance()
    {
        return Vector2.Distance(Pivot.position, Target);
    }
}
