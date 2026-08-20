using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class Level1_ShampooController : MonoBehaviour
{

    [Header("Shampoo Patch")]
    public SpriteRenderer shampooPatch;
    public Transform shampooMask;

    public Vector2 shampooMaskStartPos;
    public Vector2 shampooMasktargetPos;

    [Space()]
    [Header("Progress Settings")]
    public float requiredHoldTime = 2.0f;
    public float minRotationForProgress = 75f;

    [Header("Collider References")]
    [Tooltip("Woh collider jo sirf progress check karne ke liye hai (Tip)")]
    public Collider2D tipCollider;

    [Tooltip("Target area jiske upar tip honi chahiye")]
    public Collider2D targetZoneCollider;

    [Header("Particles")]
    public GameObject shampoo_Particles;
    public GameObject Indication;

    [Header("Events")]
    public UnityEvent OnComplete;

    // Private variables
    private Vector3 defaultRotation;
    private float defaultMaskY;
    private float currentFadeProgress = 0f;
    public float currentHoldProgress = 0f;
    private Tween rotateTween;
    private bool isHolding = false;
    private Coroutine progressCoroutine;
    private bool isCompleted = false;

    float m_LastPressTime;
    float m_PressDelay = 0.25f;


   

    private void Start()
    {
        defaultRotation = transform.localEulerAngles;
       
        if (shampoo_Particles != null)
            shampoo_Particles.SetActive(false);

        if (Indication)
            Indication.SetActive(true);


        DOTween.Init();
    }

    private void OnMouseDown()
    {
        if (isCompleted) return;
        isHolding = true;
        StartFadeAnimation();
    }

    private void OnMouseUp()
    {
        if (isCompleted) return;
        isHolding = false;

        if (currentHoldProgress >= 1f)
            CompleteLevel();
       /* else
            StopRotationAndParticlesOnly();*/
    }

    private void StartFadeAnimation()
    {
        if (shampoo_Particles != null)
            shampoo_Particles.SetActive(true);

        /* if (rotateTween != null) rotateTween.Kill();
         rotateTween = transform.DOLocalRotate(new Vector3(0, 0, target_rotZ), rotationDuration)
                               .SetEase(rotationEase);*/

        if (progressCoroutine != null)
            StopCoroutine(progressCoroutine);

        progressCoroutine = StartCoroutine(ProgressCoroutine());
    }


    private IEnumerator ProgressCoroutine()
    {
        float holdTime = currentFadeProgress * requiredHoldTime;

        while (isHolding && currentHoldProgress < 1f)
        {
            // NEW LOGIC: Check if SPECIFIC tip collider is touching the target zone
            bool isTipInZone = tipCollider.IsTouching(targetZoneCollider);

            Indication.SetActive(!isTipInZone);

         //   if (GetCurrentRotationZ() >= minRotationForProgress && isTipInZone)
            if (isTipInZone)
            {
                holdTime += Time.deltaTime;
                currentHoldProgress = Mathf.Clamp01(holdTime / requiredHoldTime);
                currentFadeProgress = currentHoldProgress;

                // Fade in shampooPatch according to currentFadeProgress
                if (shampooPatch != null)
                {
                    var color = shampooPatch.color;
                    color.a = currentFadeProgress;
                    shampooPatch.color = color;
                }

                // Move shampooMask according to currentFadeProgress
                if (shampooMask != null)
                {
                    shampooMask.localPosition = Vector3.Lerp(shampooMaskStartPos, shampooMasktargetPos, currentFadeProgress);
                }

                if (m_LastPressTime + m_PressDelay < Time.unscaledTime)
                {
                    m_LastPressTime = Time.unscaledTime;
                        
                }
            }

            yield return null;
        }
    }

    private float GetCurrentRotationZ()
    {
        float z = transform.localEulerAngles.z;
        if (z > 180f) z -= 360f;
        return z;
    }

    private void StopRotationAndParticlesOnly()
    {
        /* if (surf_Particles != null)
             surf_Particles.SetActive(false);*/

        if (rotateTween != null) rotateTween.Kill();
        transform.DOLocalRotate(defaultRotation, 0.45f).SetEase(Ease.OutQuad);
    }

    private void CompleteLevel()
    {
        isCompleted = true;
        if (shampoo_Particles != null) shampoo_Particles.SetActive(false);

        if (rotateTween != null) rotateTween.Kill();
        transform.DOLocalRotate(new Vector3(0, 0, 0), 0.3f);

       
        OnComplete?.Invoke();
        Debug.Log("✅ Level 1 Surf Completed!");
    }
}
