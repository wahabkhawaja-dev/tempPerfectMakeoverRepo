using UnityEngine;

public class BD_Flip : MonoBehaviour
{
    public Transform tool;           // yahan tool/sprite/weapon drag karo

    void LateUpdate()
    {
        if (tool == null) return;

        // World X position ke hisaab se decide
        bool shouldFaceRight = tool.position.x >= 0f;

        // Y rotation: right → 0°, left → 180°
        float targetY = shouldFaceRight ? 180f : 0f;

        // Sirf Y axis change karo, baaki same rakho
        Vector3 currentEuler = tool.localEulerAngles;
        currentEuler.y = targetY;
        tool.localEulerAngles = currentEuler;
    }
}