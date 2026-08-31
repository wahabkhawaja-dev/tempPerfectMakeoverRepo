using ScratchCardAsset;
using UnityEngine;

public class ToolScaleByCameraZoom : MonoBehaviour
{
    [Header("=== Tool Scale Compensation ===")]
    [Tooltip("Reference to the main camera (null rakho to automatically MainCamera le lega)")]
    public Camera targetCamera;

    [Tooltip("Starting camera FOV ya Orthographic Size")]
    public float initialCameraValue = 5f;

    [Tooltip("Tool ka original scale")]
    public Vector3 initialScale = Vector3.one;

    [Tooltip("Agar perspective camera hai to distance bhi consider karna hai?")]
    public bool usePerspectiveCompensation = true;

    [Header("=== Scratch Card Settings ===")]
    public ScratchCard scratchCard;

    [Tooltip("Brush scale ka base value (Start mein automatically set ho jayega)")]
    public Vector2 baseBrushScale = new Vector2(1f, 1f);

    private Vector3 baseToolScale;
    private float baseCameraValue;

    void Start()
    {
        // Camera reference
        if (targetCamera == null)
            targetCamera = Camera.main;

        // Tool scale
        baseToolScale = transform.localScale;
        initialScale = baseToolScale;

        // Brush scale save kar lo
        if (scratchCard != null)
        {
            baseBrushScale = scratchCard.BrushScale;
        }

        // Camera initial value
        if (targetCamera != null)
        {
            if (targetCamera.orthographic)
            {
                baseCameraValue = targetCamera.orthographicSize;
                usePerspectiveCompensation = false;
            }
            else
            {
                baseCameraValue = targetCamera.fieldOfView;
            }

            initialCameraValue = baseCameraValue;
        }
    }

    void Update()
    {
        if (targetCamera == null) return;

        float currentValue = targetCamera.orthographic
            ? targetCamera.orthographicSize
            : targetCamera.fieldOfView;

        if (currentValue <= 0.001f) return;

        float scaleMultiplier;

        if (targetCamera.orthographic)
        {
            scaleMultiplier = currentValue / baseCameraValue;
        }
        else
        {
            if (usePerspectiveCompensation)
            {
                float distance = Mathf.Abs(transform.position.z - targetCamera.transform.position.z);
                float baseDistance = Mathf.Abs(baseToolScale.z - targetCamera.transform.position.z);

                scaleMultiplier = (currentValue / baseCameraValue) * (distance / baseDistance);
            }
            else
            {
                scaleMultiplier = currentValue / baseCameraValue;
            }
        }

        // === Tool Visual Scale ===
        transform.localScale = baseToolScale * scaleMultiplier;

        // === Brush Scale (ScratchCard) ===
        if (scratchCard != null)
        {
            scratchCard.BrushScale = baseBrushScale * scaleMultiplier;
        }
    }

    // Optional Helpers
    public void ResetToOriginalScale()
    {
        transform.localScale = initialScale;

        if (scratchCard != null)
            scratchCard.BrushScale = baseBrushScale;
    }

    public void UpdateBaseValues()
    {
        if (targetCamera == null) return;

        baseToolScale = transform.localScale;

        if (scratchCard != null)
            baseBrushScale = scratchCard.BrushScale;

        baseCameraValue = targetCamera.orthographic
            ? targetCamera.orthographicSize
            : targetCamera.fieldOfView;
    }
}