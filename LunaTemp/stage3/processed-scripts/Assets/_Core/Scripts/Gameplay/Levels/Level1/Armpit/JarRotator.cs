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

    public float rotationSpeed = 2.5f;
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
        else if (Input.GetMouseButtonUp(0))
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

        if (isDragging)
        {
            RotateJar(Input.mousePosition);
        }
    }

    private void RotateJar([Bridge.Ref] Vector3 currentPos)
    {
        Vector3 delta = currentPos - lastMousePos;
        lastMousePos = currentPos;

        float inputValue;

        if (rotationMode == RotationMode.Horizontal)
            inputValue = delta.x;
        else
            inputValue = delta.y;

        float rotationAmount = inputValue * rotationSpeed * 0.1f;

        if (invertRotation)
            rotationAmount = -rotationAmount;

        if (rotationMode == RotationMode.Horizontal)
            currentAngle -= rotationAmount;
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