using UnityEngine;
using DG.Tweening;

public class CameraController : MonoBehaviour
{
    public static CameraController Instance;

    public Camera cam;

    [Header("Default Settings")]
    [SerializeField] private Vector3 defaultPosition = new Vector3(0, 0, -10);
    [SerializeField] private float defaultSize = 5f;   // For 2D (Orthographic)
    [SerializeField] private float defaultFOV = 60f;   // For 3D (Perspective)

    [Header("Tween Settings")]
    [SerializeField] private float defaultDuration = 1f;
    [SerializeField] private Ease defaultEase = Ease.Linear;

    private Tweener positionTween;
    private Tweener sizeTween;

    void Awake()
    {
        if (Instance == null) 
            Instance = this;

        cam = Camera.main;

        ResetCameraInstant();
    }

    public void SetCameraInstant([Bridge.Ref] Vector3 newPosition, float sizeOrFov)
    {
        KillTweens();
        cam.transform.position = newPosition;

        if (cam.orthographic)
            cam.orthographicSize = sizeOrFov;
        else
            cam.fieldOfView = sizeOrFov;
    }

    public void MoveCamera([Bridge.Ref] Vector3 targetPosition, float targetSizeOrFov, float duration = -1f, Ease? ease = null)
    {
        KillTweens();
        cam.transform.DOKill();

        duration = (duration <= 0) ? defaultDuration : duration;
        Ease tweenEase = ease ?? defaultEase;   

        positionTween = cam.transform.DOMove(targetPosition, duration).SetEase(tweenEase);

        if (cam.orthographic)
            sizeTween = DOTween.To(() => cam.orthographicSize, x => cam.orthographicSize = x, targetSizeOrFov, duration).SetEase(tweenEase);
        
        else
            sizeTween = DOTween.To(() => cam.fieldOfView, x => cam.fieldOfView = x, targetSizeOrFov, duration).SetEase(tweenEase);
    }

    public void ResetCameraInstant()
    {
        SetCameraInstant(defaultPosition, cam.orthographic ? defaultSize : defaultFOV);
    }

    public void ResetCameraTween(float duration = -1f)
    {
        MoveCamera(defaultPosition, cam.orthographic ? defaultSize : defaultFOV, duration);
    }

    void KillTweens()
    {
        positionTween?.Kill();
        sizeTween?.Kill();
    }

    public void KillPositionTweens()
    {
        positionTween?.Kill();
    }

    public void Camera_Shake()
    {
        this.transform.DOKill();
        this.transform.DOShakePosition(0.4f, 0.05f, 10, 10);
    }

}


[System.Serializable]
public class ZoomPos
{
    public Vector3 CameraPos = new Vector3(0, 0, -10f);
    public float CameraFOV = 4.2f;
}