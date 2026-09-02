using UnityEngine;

public class ArrayRotationByMovement : MonoBehaviour
{
    [Header("References")]
    public Transform[] objectsToRotate;
    public Transform referenceTransform;

    [Header("Rotation Settings")]
    [Tooltip("Jab object Right (+X) move kar raha ho")]
    public float movingRight_Rotation = -45f;

    [Tooltip("Jab object Left (-X) move kar raha ho")]
    public float movingLeft_Rotation = 45f;

    [Header("Offsets")]
    public float[] rotationOffsets;

    [Header("Rotation Axis")]
    public RotationAxis rotationAxis = RotationAxis.Y;

    [Header("Smoothing")]
    public bool smoothRotation = true;
    public float smoothSpeed = 8f;

    [Header("Movement Sensitivity")]
    [Tooltip("Kitni speed pe rotation trigger ho (Minimum movement threshold)")]
    public float movementThreshold = 0.001f;

    public enum RotationAxis { X, Y, Z }

    private Quaternion[] initialLocalRotations;
    private float lastXPosition;
    private float currentBaseAngle = 0f;

    private void Start()
    {
        if (referenceTransform != null)
            lastXPosition = referenceTransform.position.x;

        if (objectsToRotate == null || objectsToRotate.Length == 0) return;

        initialLocalRotations = new Quaternion[objectsToRotate.Length];

        if (rotationOffsets == null || rotationOffsets.Length != objectsToRotate.Length)
        {
            rotationOffsets = new float[objectsToRotate.Length];
        }

        for (int i = 0; i < objectsToRotate.Length; i++)
        {
            if (objectsToRotate[i] != null)
                initialLocalRotations[i] = objectsToRotate[i].localRotation;
        }
    }

    private void Update()
    {
        if (referenceTransform == null || objectsToRotate == null) return;

        // Calculate velocity (difference between current and last position)
        float currentX = referenceTransform.position.x;
        float deltaX = currentX - lastXPosition;

        // Check Direction
        if (deltaX > movementThreshold)
        {
            // Moving Right
            currentBaseAngle = movingRight_Rotation;
        }
        else if (deltaX < -movementThreshold)
        {
            // Moving Left
            currentBaseAngle = movingLeft_Rotation;
        }
        else
        {
            // Agar move nahi kar raha to wapis 0 (center) par aa jaye
            currentBaseAngle = 0f;
        }

        // Apply rotation to all objects
        for (int i = 0; i < objectsToRotate.Length; i++)
        {
            if (objectsToRotate[i] == null) continue;

            float finalAngle = currentBaseAngle + (i < rotationOffsets.Length ? rotationOffsets[i] : 0);
            Vector3 axis = GetAxis();
            Quaternion targetRot = Quaternion.AngleAxis(finalAngle, axis) * initialLocalRotations[i];

            if (smoothRotation)
            {
                objectsToRotate[i].localRotation = Quaternion.Lerp(
                    objectsToRotate[i].localRotation,
                    targetRot,
                    smoothSpeed * Time.deltaTime);
            }
            else
            {
                objectsToRotate[i].localRotation = targetRot;
            }
        }

        // Update last position for next frame
        lastXPosition = currentX;
    }

    private Vector3 GetAxis()
    {
        switch (rotationAxis)
        {
            case RotationAxis.X: return Vector3.right;
            case RotationAxis.Y: return Vector3.up;
            case RotationAxis.Z: return Vector3.forward;
            default: return Vector3.up;
        }
    }
}