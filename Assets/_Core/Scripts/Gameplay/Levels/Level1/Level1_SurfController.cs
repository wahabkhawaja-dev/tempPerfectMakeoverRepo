using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using DG.Tweening;

public class Level1_SurfController : MonoBehaviour
{
    [Header("Rotation Settings")]
    public float target_rotZ = 80f;
    public float rotationDuration = 0.55f;
    public Ease rotationEase = Ease.OutQuad;

    [Header("Mask Settings")]
    public Transform maskItem;
    public float maskTarget_posY;
    public float maskMoveDuration = 1.8f;

    [Header("Progress Settings")]
    public float requiredHoldTime = 2.0f;
    public float minRotationForProgress = 75f;

    [Header("Collider References")]
    [Tooltip("Woh collider jo sirf progress check karne ke liye hai (Tip)")]
    public Collider2D tipCollider;

    [Tooltip("Target area jiske upar tip honi chahiye")]
    public Collider2D targetZoneCollider;

    [Header("Particles")]
    public GameObject surf_Particles;
    public GameObject surf_SubEmitter;
    public GameObject Indication;

    [Header("Events")]
    public UnityEvent OnComplete;

    // Private variables
    private Vector3 defaultRotation;
    private float defaultMaskY;
    private float currentMaskProgress = 0f;
    public float currentHoldProgress = 0f;
    private Tween rotateTween;
    private bool isHolding = false;
    private Coroutine progressCoroutine;
    private bool isCompleted = false;
    private BasicDrag drag;

    float m_LastPressTime;
    float m_PressDelay = 0.25f;

    private void Start()
    {
        drag = GetComponentInParent<BasicDrag>();
        defaultRotation = transform.localEulerAngles;
        if (maskItem != null)
            defaultMaskY = maskItem.localPosition.y;

        if (surf_Particles != null)
            surf_Particles.SetActive(false);

        DOTween.Init();
    }

    private void __LunaMouseDown()
    {
        if (isCompleted) return;
        isHolding = true;
        StartSurfAnimation();
    }

    private void __LunaMouseUp()
    {
        if (isCompleted) return;
        isHolding = false;

        if (currentHoldProgress >= 1f)
            CompleteLevel();
        else
            StopRotationAndParticlesOnly();
    }

    private void StartSurfAnimation()
    {
        if (surf_Particles != null)
            surf_Particles.SetActive(true);

       /* if (rotateTween != null) rotateTween.Kill();
        rotateTween = transform.DOLocalRotate(new Vector3(0, 0, target_rotZ), rotationDuration)
                              .SetEase(rotationEase);*/

        if (progressCoroutine != null)
            StopCoroutine(progressCoroutine);

        progressCoroutine = StartCoroutine(ProgressCoroutine());
    }

    private IEnumerator ProgressCoroutine()
    {
        float holdTime = currentMaskProgress * requiredHoldTime;

        while (isHolding && currentHoldProgress < 1f)
        {
            // NEW LOGIC: Check if SPECIFIC tip collider is touching the target zone
            bool isTipInZone = IsTipInZone();

            surf_SubEmitter.SetActive(isTipInZone);
            //Indication.SetActive(!isTipInZone);
            Indication.SetActive(false);

            UI_Manager.instance.SetProgressBar(currentMaskProgress);

            if (GetCurrentRotationZ() >= minRotationForProgress && isTipInZone)
            {
                holdTime += Time.deltaTime;
                currentHoldProgress = Mathf.Clamp01(holdTime / requiredHoldTime);
                currentMaskProgress = currentHoldProgress;

                UpdateMaskPosition(currentMaskProgress);

                if (m_LastPressTime + m_PressDelay < Time.unscaledTime)
                {
                    m_LastPressTime = Time.unscaledTime;

                    // if (VibrationManager.instance != null)
                        // VibrationManager.instance.MediumImpact();
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

    bool IsTipInZone()
    {
        var tip = tipCollider as CircleCollider2D;
        var zone = targetZoneCollider as BoxCollider2D;
        if (tip == null || zone == null) return tipCollider.IsTouching(targetZoneCollider);
        // Luna's trigger contacts do not consistently follow animated collider offsets.
        Vector3 center = tip.transform.TransformPoint(tip.offset);
        Vector2 local = (Vector2)zone.transform.InverseTransformPoint(center) - zone.offset;
        Vector2 half = zone.size * .5f;
        Vector2 nearest = zone.offset + new Vector2(Mathf.Clamp(local.x, -half.x, half.x), Mathf.Clamp(local.y, -half.y, half.y));
        Vector2 delta = (Vector2)center - (Vector2)zone.transform.TransformPoint(nearest);
        float radius = tip.radius * Mathf.Max(Mathf.Abs(tip.transform.lossyScale.x), Mathf.Abs(tip.transform.lossyScale.y));
        return delta.sqrMagnitude <= radius * radius;
    }

    private void UpdateMaskPosition(float progress)
    {
        if (maskItem == null) return;
        if (GetCurrentRotationZ() < minRotationForProgress) return;

        float newY = Mathf.Lerp(defaultMaskY, maskTarget_posY, progress);
        Vector3 pos = maskItem.localPosition;
        pos.y = newY;
        maskItem.localPosition = pos;
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
        if (surf_Particles != null) surf_Particles.SetActive(false);

        if (rotateTween != null) rotateTween.Kill();
        transform.DOLocalRotate(new Vector3(0, 0, 0), 0.3f);

        if (maskItem != null)
        {
            Vector3 finalPos = maskItem.localPosition;
            finalPos.y = maskTarget_posY;
            maskItem.DOLocalMove(finalPos, 0.35f).SetEase(Ease.OutQuad);
        }

        OnComplete?.Invoke();
        Debug.Log("✅ Surf Completed!");
    }

    bool __lunaMouseHeld;

    void Update()
    {
        bool held = drag != null && drag.isDragging;
        if (held && !__lunaMouseHeld)
        {
            __lunaMouseHeld = true;
            __LunaMouseDown();
        }
        else if (!held && __lunaMouseHeld)
        {
            __lunaMouseHeld = false;
            __LunaMouseUp();
        }
    }

}
