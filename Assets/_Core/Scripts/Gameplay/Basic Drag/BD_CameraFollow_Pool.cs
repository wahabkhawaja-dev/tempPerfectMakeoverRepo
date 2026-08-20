using UnityEngine;
using DG.Tweening;
using System.Collections;

public class BD_CameraFollow_Pool : MonoBehaviour
{
    [Space]
    public BasicDrag Tool;
    public Vector3 ScaleLow = Vector3.one;
    public Vector3 ScaleHigh = Vector3.one * 1.5f;

    [Space]
    public Transform Pivot;

    [Header("ZOOM SETTINGS")]
    public float MinZoom = 4.5f;   // FOV when at Zoom_Y_High (Zoomed IN)
    public float MaxZoom = 6.5f;   // FOV when at Zoom_Y_Low (Zoomed OUT)

    [Space]
    public float Zoom_Y_Low = -2f;
    public float Zoom_Y_High = 2f;

    [Space]
    [Header("CAMERA MOVEMENT CLAMPING")]
    public float Clamp_Y_Min = -5f;
    public float Clamp_Y_Max = 5f;
    public float Clamp_X_Left = -10f;
    public float Clamp_X_Right = 10f;

    [Space]
    [Header("TWEEN SETTINGS")]
    public float startDelay = 0f;
    public float duration = 0.5f;

    private Vector3 tempPos;
    private bool canStart = false;

    [HideInInspector]
    public float normalT = 0f;

    IEnumerator Start()
    {
        if (Pivot == null)
            Pivot = transform;

        yield return new WaitForSeconds(startDelay);
        canStart = true;
    }

    void Update()
    {
        if (!canStart || Tool == null)
            return;

        if (!Tool.isObjectMovingWhileDragging)
            return;

        tempPos = Pivot.position;

        // 1. Clamp camera movement
        float clampedX = Mathf.Clamp(tempPos.x, Clamp_X_Left, Clamp_X_Right);
        float clampedY = Mathf.Clamp(tempPos.y, Clamp_Y_Min, Clamp_Y_Max);
        Vector3 finalMovePos = new Vector3(clampedX, clampedY, -10f);

        // 2. Calculate normalized percentage based on Y for zoom and scale
        float t = Mathf.InverseLerp(Zoom_Y_Low, Zoom_Y_High, tempPos.y);
        t = Mathf.Clamp01(t); // Ensure 0-1
        normalT = t;

        // 3. Camera zoom
        float targetFOV = Mathf.Lerp(MaxZoom, MinZoom, t);
        CameraController.Instance.MoveCamera(finalMovePos, targetFOV, duration, Ease.Linear);

        // 4. Tool scaling
        Vector3 targetScale = Vector3.Lerp(ScaleLow, ScaleHigh, t);
        Tool.transform.localScale = targetScale;

        // 5. Stop tweens if not dragging
        if (!Tool.isDragging)
        {
            CameraController.Instance.KillPositionTweens();
        }
    }

    public void DisableFollow()
    {
        canStart = false;
        enabled = false;
        if (CameraController.Instance != null)
            CameraController.Instance.KillPositionTweens();
    }
}
