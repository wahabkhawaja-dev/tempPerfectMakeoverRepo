using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BD_ToolRotate_Dynamic : MonoBehaviour
{
    [Space()]
    public float startDelay = 0f;

    [Space()]
    public BasicDrag Tool;

    [Space()]
    public BD_Clamp_Dynamic Clamp;


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
            Clamp = Tool != null ? Tool.GetComponent<BD_Clamp_Dynamic>() : null;

        yield return new WaitForSeconds(startDelay);

        canStart = true;
    }

    void Update()
    {
        if (!canStart || Tool == null || Clamp == null)
            return;

        // Normalize Tool X position between 0 and 1
        float x = Tool.transform.localPosition.x;
        float normalized = Mathf.InverseLerp(Clamp.ClampX_L_Min, Clamp.ClampX_L_Max, x);

        targetT = normalized;

        // Smoothly interpolate for natural motion
        currentT = Mathf.Lerp(currentT, targetT, Time.deltaTime * rotationSpeed);

        // Apply rotation
        Pivot.localEulerAngles = Vector3.Lerp(MinAngle, MaxAngle, currentT);
    }
}
