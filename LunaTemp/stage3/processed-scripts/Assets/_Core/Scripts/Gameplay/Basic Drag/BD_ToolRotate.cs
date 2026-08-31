using UnityEngine;
using System.Collections;

public class BD_ToolRotate : MonoBehaviour
{
    [Space()]
    public float startDelay = 0f;

    [Space()]
    public BasicDrag Tool;

    [Space()]
    public BD_Clamp Clamp;

    [Space()]
    public Transform Pivot;

    [Space()]
    [Header("AXIS CONTROLS")]
    [Space()]
    public Vector3 MinAngle;
    public Vector3 MaxAngle;

    [Space()]
    [Tooltip("How quickly the pivot follows tool movement")]
    public float rotationSpeed = 20f;

    bool canStart = false;
    float targetT = 0f;
    float currentT = 0f;

    IEnumerator Start()
    {
        if (Pivot == null)
            Pivot = this.transform;

        if (Clamp == null)
            Clamp = Tool != null ? Tool.GetComponent<BD_Clamp>() : null;

        // Initialize rotation state BEFORE enabling updates
        if (Tool != null && Clamp != null)
        {
            float x = Tool.transform.localPosition.x;
            float normalized = Mathf.InverseLerp(Clamp.ClampX_L, Clamp.ClampX_H, x);

            currentT = normalized;
            targetT = normalized;

            Pivot.localEulerAngles = Vector3.Lerp(MinAngle, MaxAngle, currentT);
        }

        yield return new WaitForSeconds(startDelay);

        canStart = true;
    }

    void Update()
    {
        if (!canStart || Tool == null || Clamp == null)
            return;

        // Normalize Tool X position between 0 and 1
        float x = Tool.transform.localPosition.x;
        float normalized = Mathf.InverseLerp(Clamp.ClampX_L, Clamp.ClampX_H, x);

        targetT = normalized;

        // Smoothly interpolate for natural motion
        currentT = Mathf.Lerp(currentT, targetT, Time.deltaTime * rotationSpeed);

        // Apply rotation
        Pivot.localEulerAngles = Vector3.Lerp(MinAngle, MaxAngle, currentT);
    }
}
