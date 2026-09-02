using UnityEngine;
using System.Collections.Generic;
using UnityEngine.Events;

public class DraggableBrush : MonoBehaviour
{
    [System.Serializable]
    public class Step
    {
        public string stepName; // Pehchan ke liye (e.g. "Line 1")
        public float startX;    // Step shuru hote hi X position kya ho
        public float startY;    // Step shuru hote hi Y position kya ho
        public float endY;      // Kahan tak drag karna hai
    }

    public BD_Progress BD_Progress;

    public List<Step> movementSteps;
    public float snapSensitivity = 0.1f;

    private int currentStepIndex = 0;
    private Camera mainCamera;
    private bool isDragging = false;

    [Space()]
    public UnityEvent OnComplete;

    Collider2D thisCollider;

    void Start()
    {
        mainCamera = Camera.main;
        thisCollider = GetComponent<Collider2D>();
        if (movementSteps.Count > 0)
        {
            SetStep(currentStepIndex);
        }

    }

    void Pick()
    {
        // Check karein ke steps baki hain ya nahi
        if (currentStepIndex < movementSteps.Count)
            isDragging = true;

        BD_Progress.EnableProgress();
    }

    void Release()
    {
        isDragging = false;


        BD_Progress.DisableProgress();
    }

    // Luna registers OnMouseDown/OnMouseUp but only ever dispatches them off the physics
    // contact path, so a Collider2D never receives them. Poll the button instead.
    void Update()
    {
        if (Input.GetMouseButtonDown(0) && PointerInput.IsOverCollider(thisCollider))
            Pick();

        if (Input.GetMouseButtonUp(0))
            Release();

        if (isDragging && currentStepIndex < movementSteps.Count)
        {
            HandleDrag();
        }
    }

    void HandleDrag()
    {
        Step currentStep = movementSteps[currentStepIndex];

        // Mouse position convert karna
        Vector3 mousePos = mainCamera.ScreenToWorldPoint(Input.mousePosition);

        // Brush ko current step ke X par fix rakhna aur Y ko clamp karna
        float clampedY = Mathf.Clamp(mousePos.y, currentStep.endY, currentStep.startY);

        // Movement apply karna (X fix rahega jo step mein define hai)
        transform.position = new Vector3(currentStep.startX, clampedY, transform.position.z);

        // Check completion
        if (Mathf.Abs(transform.position.y - currentStep.endY) < snapSensitivity)
        {
            BD_Progress.DisableProgress();
            CompleteStep();
        }
    }

    void CompleteStep()
    {
        isDragging = false; // Drag release karein taake naye step par jump ho sake
        currentStepIndex++;

        if (currentStepIndex < movementSteps.Count)
        {
            Debug.Log($"Step {currentStepIndex} Finished. Moving to next X: {movementSteps[currentStepIndex].startX}");
            SetStep(currentStepIndex);
        }
        else
        {
            OnComplete?.Invoke();
        }
    }

    void SetStep(int index)
    {
        // Brush ko foran naye step ki Start X aur Start Y par shift kar dena
        Step s = movementSteps[index];
        transform.position = new Vector3(s.startX, s.startY, transform.position.z);
    }
}