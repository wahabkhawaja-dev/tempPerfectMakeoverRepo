using DG.Tweening;
using UnityEngine;

public class InteractableBonesHitOnly : MonoBehaviour
{
    [Header("References")]
    public Transform Tip;

    [Header("Movement")]
    public float MoveAmount = 0.03f;
    public float MoveSpeed = 8f;
    public float ShakeSpeed = 25f;

    [Header("Axis Control")]
    public bool MoveX = true;
    public bool MoveY = true;

    private Vector3 startLocalPos;
    private bool tipInside;

    void Start()
    {
        startLocalPos = transform.localPosition;
    }

    void Update()
    {
        if (tipInside)
        {
            // Tip ke andar hai → shake karo (tip still ho ya bones move kar rahe hon, farq nahi)
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
            // Bahar hai → smoothly wapas original position pe
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

    // Dynamically tip change karne ke liye
    public void UpdateTip(GameObject newTip)
    {
        if (newTip == null)
            return;

        Tip = newTip.transform;
    }

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