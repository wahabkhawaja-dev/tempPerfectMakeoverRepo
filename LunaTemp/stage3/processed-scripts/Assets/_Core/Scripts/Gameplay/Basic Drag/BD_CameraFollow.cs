using DG.Tweening;
using System.Collections;
using UnityEngine;

public class BD_CameraFollow : MonoBehaviour
{
    [Space()]
    public BasicDrag Tool;

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
        if (Pivot == null)
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

        if (Tool.isObjectMovingWhileDragging)
        {
            tempPos = Pivot.transform.position;
            tempPos.x = Mathf.Clamp(tempPos.x, X_L, X_R);
            tempPos.y = Mathf.Clamp(tempPos.y, Y_L, Y_H);
            tempPos.z = -10;

            CameraController.Instance.MoveCamera(tempPos, FOV, duration, Ease.Linear);
        }

        // Only kill on the frame the finger lifts. Doing it every idle frame also
        // cancelled the camera's return tween when a step completed on release.
        if (wasDragging && !Tool.isDragging)
            CameraController.Instance.KillPositionTweens();

        wasDragging = Tool.isDragging;

    }

    public void DisableFollow()
    {
        canStart = false;

        this.enabled = false;
    }

    #endregion

}
