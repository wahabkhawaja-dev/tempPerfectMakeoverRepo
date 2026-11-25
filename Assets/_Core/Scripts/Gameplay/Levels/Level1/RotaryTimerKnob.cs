using UnityEngine.UI;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.EventSystems;

public class RotaryTimerKnob : MonoBehaviour
{
    [Header("=== Rotary Timer Settings ===")]
    public int numSteps = 5;
    public bool onlyClockwise = true;

    [Header("Feedback")]
    public AudioClip clickSound;
    public bool enableVibration = true;

    [Header("Step UI")]
    public Text stepText;

    [Header("Completion")]
    public UnityEvent OnComplete;

    private float stepAngle;
    private int currentStep = 0;
    private bool isCompleted = false;

    private float lastMouseAngle;
    private float accumulatedRotation = 0f;

    public GameObject handIndication;

   
    void Start()
    {
        stepAngle = 360f / numSteps;
        ResetKnob();
    }

    private void __LunaMouseDown()
    {
        if(isOverUI())
            return;


        if (isCompleted) return;
        lastMouseAngle = GetMouseAngle();


        handIndication.SetActive(false);
    }

    private void __LunaMouseUp()
    {
        if (isOverUI())
            return;

        if (isCompleted) return;

        handIndication.SetActive(true);
    }

   

    private void __LunaMouseDrag()
    {
        if (isOverUI())
            return;

        if (isCompleted) return;

        float currentMouseAngle = GetMouseAngle();
        float delta = Mathf.DeltaAngle(currentMouseAngle, lastMouseAngle);

        // Sirf clockwise movement allow karein
        if (onlyClockwise && delta < 0)
        {
            lastMouseAngle = currentMouseAngle;
            return;
        }

        // Mouse kitna ghuma usko track karein
        accumulatedRotation += delta;

        // Rotation ko 0 se 360 ke darmiyan rakhen
        accumulatedRotation = Mathf.Clamp(accumulatedRotation, 0, 360);

        // === SNAP LOGIC ===
        // Check karein ke kya mouse ne itna travel kar liya hai ke agla step ho jaye
        int calculatedStep = Mathf.FloorToInt(accumulatedRotation / stepAngle);

        // Agar step change hua hai to knob ko rotate karein
        if (calculatedStep != currentStep && calculatedStep < numSteps)
        {
            currentStep = calculatedStep;

            // Visual Jump: Knob ko sirf step angle par snap karein
            float snapAngle = currentStep * stepAngle;
            transform.localRotation = Quaternion.Euler(0, 0, -snapAngle);

            TriggerStepFeedback();
            UpdateUI();

            // Completion check
            if (currentStep == numSteps - 1)
            {
                isCompleted = true;
                OnComplete?.Invoke();
                Debug.Log("✅ Timer Finished!");
            }
        }

        lastMouseAngle = currentMouseAngle;
    }

    private float GetMouseAngle()
    {
        Vector3 mousePos = Input.mousePosition;
        Vector3 objectPos = Camera.main.WorldToScreenPoint(transform.position);
        Vector2 direction = mousePos - objectPos;
        return Mathf.Atan2(direction.y, direction.x) * Mathf.Rad2Deg;
    }

    private void UpdateUI()
    {
        if (stepText != null)
            stepText.text = (currentStep).ToString("00");

    }

    private void TriggerStepFeedback()
    {
        if (clickSound != null)
            AudioController.instance.PlayAnySfx(0, clickSound, 0);

        // if (enableVibration)
        //     VibrationManager.instance.MediumImpact();
    }

    public void ResetKnob()
    {
        isCompleted = false;
        currentStep = 0;
        accumulatedRotation = 0f;
        transform.localRotation = Quaternion.Euler(0, 0, 0);
        UpdateUI();
    }

    // UI Check

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

    // [Luna] OnMouse* messages don't fire reliably in Luna/WebGL, so input is polled instead.
    bool __lunaMouseHeld;

    void Update()
    {
        __LunaPollMouse();
    }

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
        else
        {
            __LunaMouseDrag();
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