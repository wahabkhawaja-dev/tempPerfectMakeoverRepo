using DG.Tweening;
using System.Collections;
using UnityEngine;

public class DO_CameraFollow : MonoBehaviour
{
    [Space()]
    public DraggableObject Tool;

    [Space()]
    public Transform Pivot;

    [Space()]
    public float FOV = 5f;

    [Space()]
    [Header("AXIS CONTROLS")]
    [Space()]
    public float Y_L = 0f;
    public float Y_H = 0f;

    [Space()]
    public float X_L = 0f;
    public float X_R = 0f;

    [Space()]
    public float startDelay = 0f;

    [Space()]
    public float duration = 1f;

    #region CameraMovement

    Vector3 tempPos;

    bool canStart = false;
    bool wasDragging;

    IEnumerator Start()
    {
        // If Pivot is not assigned, default to the Tool's transform
        if (Pivot == null && Tool != null)
            Pivot = Tool.transform;
        else if (Pivot == null)
            Pivot = this.transform;

        yield return new WaitForSeconds(startDelay);

        canStart = true;
    }

    void Update()
    {
        if (!canStart)
            return;

        if (Tool == null)
            return;

        // In DraggableObject, we use 'isDragging' to determine if movement is occurring
        if (Tool.isDragging)
        {
            tempPos = Pivot.transform.position;
            tempPos.x = Mathf.Clamp(tempPos.x, X_L, X_R);
            tempPos.y = Mathf.Clamp(tempPos.y, Y_L, Y_H);
            tempPos.z = -10; // Standard 2D Camera Z depth

            if (CameraController.Instance != null)
            {
                CameraController.Instance.MoveCamera(tempPos, FOV, duration, Ease.Linear);
            }
        }

        // Logic to kill tweens exactly when the user releases the object
        if (wasDragging && !Tool.isDragging)
        {
            if (CameraController.Instance != null)
            {
                CameraController.Instance.KillPositionTweens();
            }
        }

        wasDragging = Tool.isDragging;
    }

    public void DisableFollow()
    {
        canStart = false;
        this.enabled = false;
    }

    #endregion
}