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

    void Start()
    {
        mainCamera = Camera.main;
        if (movementSteps.Count > 0)
        {
            SetStep(currentStepIndex);
        }

    }

    void __LunaMouseDown()
    {
        // Check karein ke steps baki hain ya nahi
        if (currentStepIndex < movementSteps.Count)
            isDragging = true;

        BD_Progress.EnableProgress();   
    }

    void __LunaMouseUp()
    {
        isDragging = false;


        BD_Progress.DisableProgress();
    }

    void Update()
    {
        __LunaPollMouse();
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

    // [Luna] OnMouse* messages don't fire reliably in Luna/WebGL, so input is polled instead.
    bool __lunaMouseHeld;

    void __LunaPollMouse()
    {
        if (!__lunaMouseHeld)
        {
            if (UnityEngine.Input.GetMouseButtonDown(0) && __LunaPointerOverThis())
            {
                __lunaMouseHeld = true;
                __LunaMouseDown();
            }
        }
        else if (!UnityEngine.Input.GetMouseButton(0))
        {
            __lunaMouseHeld = false;
            __LunaMouseUp();
        }
    }

    bool __LunaPointerOverThis()
    {
        UnityEngine.Camera cam = UnityEngine.Camera.main;
        if (cam == null) return false;
        if (GetComponent<UnityEngine.Collider2D>() != null)
        {
            UnityEngine.RaycastHit2D hit = UnityEngine.Physics2D.Raycast(cam.ScreenToWorldPoint(UnityEngine.Input.mousePosition), UnityEngine.Vector2.zero);
            return hit.collider != null && hit.collider.gameObject == gameObject;
        }
        UnityEngine.RaycastHit hit3D;
        return GetComponent<UnityEngine.Collider>() != null
            && UnityEngine.Physics.Raycast(cam.ScreenPointToRay(UnityEngine.Input.mousePosition), out hit3D)
            && hit3D.collider.gameObject == gameObject;
    }
}