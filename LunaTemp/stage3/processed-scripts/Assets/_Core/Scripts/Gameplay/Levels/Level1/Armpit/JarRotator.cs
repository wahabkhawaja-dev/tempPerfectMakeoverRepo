using UnityEngine;
using DG.Tweening;
using UnityEngine.Events;

public class JarRotator : MonoBehaviour
{
    [Header("Rotation Mode")]
    public RotationMode rotationMode = RotationMode.Horizontal;

    [Header("Rotation Settings")]
    [Range(0f, 140f)]
    public float maxRotation = 140f;

    [Tooltip("Full swings per screen of drag: 3 means dragging across a third of the screen " +
             "tips the jar all the way. Higher = easier.\n\nThis used to multiply raw pixel " +
             "deltas, so the same swipe turned the jar far less on a small browser canvas than " +
             "in the editor — which is what made it feel stuck in Luna. It is measured against " +
             "screen size now, so it behaves the same at any resolution.")]
    public float rotationSpeed = 3f;

    public bool invertRotation = false;

    [Header("Drag Audio")]
    public AudioClip tapClip;
    public AudioSource dragAudioSource;

    private float currentAngle = 0f;
    private bool isDragging = false;
    private Vector3 lastMousePos;

    [Space(10)]
    public UnityEvent OnComplete;

    public bool completed = false;

    public GameObject jarIndication;

    public enum RotationMode
    {
        Horizontal,   // Left-Right drag se rotate
        Vertical      // Up-Down drag se rotate
    }

    void Update()
    {
        if (completed)
            return;

        HandleInput();
    }

    private void HandleInput()
    {
        bool held = Input.GetMouseButton(0);

        if (Input.GetMouseButtonDown(0))
        {
            isDragging = true;
            lastMousePos = Input.mousePosition;

            if (jarIndication != null)
                jarIndication.SetActive(false);

            // Start / resume audio
            if (dragAudioSource != null)
            {
                dragAudioSource.enabled = true;
                dragAudioSource.UnPause();

                if (!dragAudioSource.isPlaying)
                    dragAudioSource.Play();
            }

            if (tapClip != null)
                AudioController.instance.PlayAnySfx(0, tapClip, 0f);
        }
        // Driven off the button's actual state rather than waiting for the Up event: a browser
        // can swallow mouse-up when the pointer leaves the canvas, which left the jar stuck in
        // a permanent drag with its audio still running.
        else if (isDragging && !held)
        {
            isDragging = false;

            // Pause audio when released
            if (dragAudioSource != null)
            {
                if (dragAudioSource.isPlaying)
                {
                    dragAudioSource.Pause();
                }
            }
        }

        if (isDragging && held)
        {
            RotateJar(Input.mousePosition);
        }
    }

    private void RotateJar([Bridge.Ref] Vector3 currentPos)
    {
        Vector3 delta = currentPos - lastMousePos;
        lastMousePos = currentPos;

        float inputValue;
        float screenReference;

        if (rotationMode == RotationMode.Horizontal)
        {
            inputValue = delta.x;
            screenReference = Screen.width;
        }
        else
        {
            inputValue = delta.y;
            screenReference = Screen.height;
        }

        if (screenReference <= 0f)
            screenReference = 1f;

        // Measured against the screen rather than in raw pixels. A swipe covers far fewer
        // pixels on a small browser canvas than in the editor, so the old pixel maths made the
        // jar feel seized up in Luna while turning fine here.
        float dragFraction = Mathf.Abs(inputValue) / screenReference;

        // Any drag direction pushes rotation toward the target extreme -
        // only the amount of movement matters, not which way it went.
        float rotationAmount = dragFraction * rotationSpeed * maxRotation;

        if (invertRotation)
            currentAngle += rotationAmount;
        else
            currentAngle -= rotationAmount;

        currentAngle = Mathf.Clamp(currentAngle, -maxRotation, 0f);

        transform.rotation = Quaternion.Euler(0f, 0f, currentAngle);
    }

    public void SetHorizontalMode()
    {
        rotationMode = RotationMode.Horizontal;
    }

    public void SetVerticalMode()
    {
        rotationMode = RotationMode.Vertical;
    }

    public void Complete()
    {
        completed = true;
        isDragging = false;

        // Stop and disable audio
        if (dragAudioSource != null)
        {
            dragAudioSource.Stop();
            dragAudioSource.enabled = false;
        }

        currentAngle = 0f;

        transform.DOLocalRotateQuaternion(
            Quaternion.Euler(0f, 0f, 0f),
            0.5f
        );

        OnComplete?.Invoke();
    }
}