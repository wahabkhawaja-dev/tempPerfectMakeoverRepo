using UnityEngine;

public class Lvl2_LensFollow : MonoBehaviour
{
    [Space()]
    public bool canFollow = false;

    [Header("References")]
    public Transform Tip;

    [Header("Movement")]
    public float MoveAmountX = 0.02f;
    public float MoveAmountY = 0.015f;
    public float FollowSpeed = 8f;
    public float ReturnSpeed = 5f;

    [Header("Clamp")]
    public float ClampX = 0.02f;
    public float ClampY = 0.015f;

    private Vector3 startLocalPos;
    private Vector3 tipStartPos;

    void Start()
    {
        startLocalPos = transform.localPosition;

        if (Tip != null)
            tipStartPos = Tip.position;
    }

    void Update()
    {
        if (Tip == null)
            return;

        if (Input.GetMouseButton(0) && canFollow)
        {
            Vector3 tipDelta = Tip.position - tipStartPos;

            Vector3 targetPos = startLocalPos + new Vector3(
                tipDelta.x * MoveAmountX,
                tipDelta.y * MoveAmountY,
                0f
            );

            targetPos.x = Mathf.Clamp(
                targetPos.x,
                startLocalPos.x - ClampX,
                startLocalPos.x + ClampX
            );

            targetPos.y = Mathf.Clamp(
                targetPos.y,
                startLocalPos.y - ClampY,
                startLocalPos.y + ClampY
            );

            transform.localPosition = Vector3.Lerp(
                transform.localPosition,
                targetPos,
                FollowSpeed * Time.deltaTime
            );
        }

        else
        {
            transform.localPosition = Vector3.Lerp(
                transform.localPosition,
                startLocalPos,
                ReturnSpeed * Time.deltaTime
            );
        }
    }
}