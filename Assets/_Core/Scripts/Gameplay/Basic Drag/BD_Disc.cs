using UnityEngine;
using DG.Tweening;

public class BD_Disc : MonoBehaviour
{
    public enum RotationDirection { Clockwise = -1, AntiClockwise = 1 }

    public BasicDrag BD;
    public Transform Disc;

    [Header("Rotation Settings")]
    public RotationDirection direction = RotationDirection.Clockwise;
    public float maxSpeed = 3000f;    // Degrees per second
    public float startDuration = 0.2f;
    public float stopDuration = 1f;

    private float currentSpeed = 0f;
    private Tween speedTween;

    void Start()
    {
        BD.OnMouseDownEvent += DiscRotate;
        BD.OnMouseUpEvent += DiscStop;
    }

    void Update()
    {
        // Apply rotation: Speed * Direction * DeltaTime
        if (currentSpeed != 0)
        {
            // Using Vector3.forward (Z-axis). 
            // Multiplying by (int)direction flips the spin.
            Disc.Rotate(Vector3.forward * currentSpeed * (int)direction * Time.deltaTime);
        }
    }

    void DiscRotate()
    {
        speedTween.Kill();
        // Ramp up the speed value (always positive here, direction is handled in Update)
        speedTween = DOTween.To(() => currentSpeed, x => currentSpeed = x, maxSpeed, startDuration)
            .SetEase(Ease.InQuad);
    }

    void DiscStop()
    {
        speedTween.Kill();
        // Ramp down the speed value to 0
        speedTween = DOTween.To(() => currentSpeed, x => currentSpeed = x, 0f, stopDuration)
            .SetEase(Ease.OutQuad);
    }
}