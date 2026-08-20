using DG.Tweening;
using System.Collections;
using UnityEngine;

public class InteractableBones : MonoBehaviour
{
    [Header("References")]
    public Transform Tip;

    [Header("Movement")]
    public float MoveAmount = 0.03f;
    public float MoveSpeed = 8f;
    public float ShakeSpeed = 25f;

    [Header("Tip Movement Detection")]
    public float MovementThreshold = 0.03f;

    [Header("Axis Control")]
    public bool MoveX = true;
    public bool MoveY = true;

    private Vector3 startLocalPos;
    private bool tipInside;

    private Vector3 lastTipPos;
    private bool tipMoving;

    void Start()
    {
        startLocalPos = transform.localPosition;

        if (Tip != null)
            lastTipPos = Tip.position;
    }

    void Update()
    {
        if (Tip == null)
            return;

        // Detect tip movement
        float moveDelta = Vector3.Distance(Tip.position, lastTipPos);
        tipMoving = moveDelta > MovementThreshold;

        lastTipPos = Tip.position;

        // Move only if tip is inside AND moving
        if (tipInside && tipMoving)
        {
            float shakeX = MoveX ? Mathf.Sin(Time.time * ShakeSpeed) * MoveAmount : 0f;
            float shakeY = MoveY ? Mathf.Cos(Time.time * ShakeSpeed * 0.8f) * MoveAmount : 0f;

            Vector3 targetPos = startLocalPos + new Vector3(shakeX, shakeY, 0f);

            transform.localPosition = Vector3.Lerp(
                transform.localPosition,
                targetPos,
                Time.deltaTime * MoveSpeed
            );
        }
        else
        {
            // Return smoothly
            transform.localPosition = Vector3.Lerp(
                transform.localPosition,
                startLocalPos,
                Time.deltaTime * MoveSpeed
            );
        }
    }

    void OnTriggerStay2D(Collider2D other)
    {
        if (other.transform == Tip)
        {
            tipInside = true;
        }
    }

    void OnTriggerExit2D(Collider2D other)
    {
        if (other.transform == Tip)
        {
            tipInside = false;
        }
    }

    // INCASE YOU WANT TO UPDATE THE TIP REFERENCE DYNAMICALLY
    public void UpdateTip(GameObject newTip)
    {
        if (newTip == null)
            return;

        Tip = newTip.transform;
        lastTipPos = Tip.position;
    }

    Coroutine Co;

    public void SingleShake()
    {
        this.transform.DOKill();
        this.transform.DOShakePosition(0.4f, 0.05f, 10, 10);
    }

    public void SingleLite()
    {
        this.transform.DOKill();
        this.transform.DOShakePosition(0.4f, 0.02f, 10, 10);
    }
}