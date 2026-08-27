using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.EventSystems;
using UnityEngine.SceneManagement;

public class DraggableObject : MonoBehaviour
{
    [Header("Drag Settings")]
    public float dragSpeed = 25f;
    public bool rotateOnPick = true;

    [Header("Rotation Settings")]
    [Tooltip("Pick karte waqt bottle kis angle par rotate hogi (degrees)")]
    public float targetRotationAngle = 35f;
    public float rotationSpeed = 10f;

    [Header("Drop Settings")]
    public GameObject dropPrefab;
    public Transform headPoint;
    [Space()]
    public Animator AnimPlayer;
    public string AnimName;

    public float dropDelay = 0.3f;

    [Header("Trigger Settings")]
    [Tooltip("Bottle ke Head par lagaya hua Trigger Collider")]
    public Collider2D headTriggerCollider;

    [Header("Multiple Drop Targets")]
    [Tooltip("Yahan sab Drop Target Colliders add karo")]
    public List<Collider2D> dropTargets = new List<Collider2D>();

    [Header("Items To Activate")]
    [Tooltip("Har target hit hone par is list ka corresponding object active ho jayega (same order mein)")]
    public List<GameObject> ItemsToActive = new List<GameObject>();
    public float delayInActivation=0f;

    [Header("Auto Position Settings")]
    public Vector2 offsetFromTarget = new Vector2(0.8f, 1.2f);

    [Header("Screen Clamp Settings")]
    [Tooltip("X aur Y axis ke minimum aur maximum limits")]
    public float minX = -8f;
    public float maxX = 8f;
    public float minY = -4.5f;
    public float maxY = 4.5f;

    [Header("Completion Settings")]
    public UnityEvent OnComplete;

    [Header("Input Events")]
    public Action OnMouseDownEvent;
    public Action OnMouseUpEvent;

    [Header("Sfx On Trigger")]
    public AudioClip hitSfx;

    private Camera mainCam;
    public bool isDragging = false;
    private Vector2 lastMousePos;

    private bool isLocked = false;
    private Quaternion defaultRotation = Quaternion.identity;

    // Target Completion Tracking
    private HashSet<Collider2D> completedTargets = new HashSet<Collider2D>();

    void Start()
    {
        mainCam = Camera.main;
        defaultRotation = transform.rotation;

        if (headTriggerCollider == null)
            Debug.LogWarning("Head Trigger Collider assign nahi kiya gaya!");

        if (dropTargets.Count == 0)
            Debug.LogWarning("Koi Drop Target nahi add kiya gaya!");

        // ItemsToActive aur dropTargets ki count match check
        if (ItemsToActive.Count != dropTargets.Count)
        {
            Debug.LogWarning($"ItemsToActive ({ItemsToActive.Count}) aur dropTargets ({dropTargets.Count}) ki count alag hai!");
        }
    }

    void Update()
    {
        if (isLocked || isOverUI()) return;


        if (Input.GetMouseButtonDown(0) && !isDragging)
        {
            StartDragging();
            OnMouseDownEvent?.Invoke();
        }

        if (isDragging && Input.GetMouseButton(0))
        {
            DragWithDelta();
        }

        if (Input.GetMouseButtonUp(0))
        {
            isDragging = false;
            OnMouseUpEvent?.Invoke();

            if (rotateOnPick)
            {
                StartCoroutine(RotateToDefault());
            }
        }
    }

    private void StartDragging()
    {
        isDragging = true;
        lastMousePos = mainCam.ScreenToWorldPoint(Input.mousePosition);
    }

    private void DragWithDelta()
    {
        Vector2 currentMousePos = mainCam.ScreenToWorldPoint(Input.mousePosition);
        Vector2 delta = currentMousePos - lastMousePos;

        Vector2 newPosition = (Vector2)transform.position + delta;

        newPosition.x = Mathf.Clamp(newPosition.x, minX, maxX);
        newPosition.y = Mathf.Clamp(newPosition.y, minY, maxY);

        transform.position = Vector2.Lerp(transform.position, newPosition, dragSpeed * Time.deltaTime);

        lastMousePos = currentMousePos;

        if (rotateOnPick)
        {
            RotateToTargetAngle();
        }
    }

    private void RotateToTargetAngle()
    {
        Quaternion targetRot = Quaternion.Euler(0, 0, targetRotationAngle);
        transform.rotation = Quaternion.Lerp(transform.rotation, targetRot, rotationSpeed * Time.deltaTime);
    }

    private IEnumerator RotateToDefault()
    {
        float elapsed = 0f;
        float duration = 0.35f;
        Quaternion startRot = transform.rotation;

        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / duration;
            transform.rotation = Quaternion.Lerp(startRot, defaultRotation, t);
            yield return null;
        }

        transform.rotation = defaultRotation;
    }

    // ====================== HEAD TRIGGER LOGIC ======================
    private void OnTriggerEnter2D(Collider2D other)
    {
        if (isLocked || headTriggerCollider == null || other == null) return;

        int targetIndex = dropTargets.IndexOf(other);

        if (targetIndex != -1 && !completedTargets.Contains(other))
        {
            other.gameObject.SetActive(false);
            completedTargets.Add(other);

            // Corresponding Item Active karo
            ActivateCorrespondingItem(targetIndex);

            StartCoroutine(AutoDispenseSequence(other.transform.position));

            CheckAllTargetsCompleted();
        }
    }

    private void ActivateCorrespondingItem(int index)
    {
        if (index >= 0 && index < ItemsToActive.Count && ItemsToActive[index] != null)
        {

            DOVirtual.DelayedCall(0.52f, () =>
            {
                ItemsToActive[index].SetActive(true);
                Debug.Log($"Item Activated: {ItemsToActive[index].name}");
            });
            
        }
    }

    private void CheckAllTargetsCompleted()
    {

        float progress = (float)completedTargets.Count / dropTargets.Count;
        DOVirtual.DelayedCall(1f, () =>
        {
            UI_Manager.instance.SetProgressBar(progress);
        });
           

        if (completedTargets.Count >= dropTargets.Count)
        {
            OnComplete?.Invoke();
            this.enabled = false;
            isLocked = true;
            Debug.Log("🎉 All targets completed! OnComplete event fired.");
        }
    }

    private IEnumerator AutoDispenseSequence(Vector2 targetPos)
    {
        isLocked = true;
        isDragging = false;

        Vector2 finalPos = targetPos + offsetFromTarget;
        finalPos.x = Mathf.Clamp(finalPos.x, minX, maxX);
        finalPos.y = Mathf.Clamp(finalPos.y, minY, maxY);

        float moveDuration = 0.4f;
        float elapsed = 0f;
        Vector2 startPos = transform.position;

        while (elapsed < moveDuration)
        {
            elapsed += Time.deltaTime;
            float t = elapsed / moveDuration;
            transform.position = Vector2.Lerp(startPos, finalPos, t);
            yield return null;
        }

        transform.position = finalPos;

        if (AnimPlayer)
        {
            AnimPlayer.Play(AnimName, 0, 0f);

        }

        if (hitSfx && AudioController.instance)
            AudioController.instance.PlayAnySfx(0, hitSfx, 0);

        // if (VibrationManager.instance)
        //     VibrationManager.instance.MediumImpact();

        DispenseDrop(targetPos);

        yield return new WaitForSeconds(dropDelay);

        isLocked = false;

        if (Input.GetMouseButton(0))
        {
            lastMousePos = mainCam.ScreenToWorldPoint(Input.mousePosition);
            isDragging = true;
        }
    }

    private void DispenseDrop([Bridge.Ref] Vector2 targetPosition)
    {
        if (dropPrefab == null || headPoint == null) return;

        Vector2 spawnPos = headPoint.position;
        GameObject drop = Instantiate(dropPrefab, spawnPos, Quaternion.identity);

        Drop dropScript = drop.GetComponent<Drop>();
        if (dropScript != null)
        {
            dropScript.MoveToTarget(targetPosition, 5f);
        }
    }

    public void RestartLevel()
    {
        SceneManager.LoadScene(0);
    }

    public void ResetProgress()
    {
        completedTargets.Clear();
        foreach (var target in dropTargets)
        {
            if (target != null) target.gameObject.SetActive(true);
        }

        // Items to Active reset (optional)
        foreach (var item in ItemsToActive)
        {
            if (item != null) item.SetActive(false);
        }
    }


    public bool isOverUI()
    {
        // Ignore drag if pointer is over any UI element
        if (EventSystem.current != null && EventSystem.current.IsPointerOverGameObject())
        {
            return true;
        }

        if (Input.touchCount > 0)
        {
            if (EventSystem.current.IsPointerOverGameObject(Input.GetTouch(0).fingerId))
                return true;
        }

        return false;
    }
}