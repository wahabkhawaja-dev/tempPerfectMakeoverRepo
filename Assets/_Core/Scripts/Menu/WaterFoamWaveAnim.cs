using UnityEngine;
using DG.Tweening;

// Loops the WaterFoamOnBeach LineRenderer through a wash-in/recede cycle, like a
// foam line riding a wave up the beach then fading back out.
public class WaterFoamWaveAnim : MonoBehaviour
{
    [Header("----------------- REFS ----------------------")]
    [Space()]
    [SerializeField] LineRenderer lineRenderer;

    [Header("----------------- WAVE MOTION ----------------------")]
    [Space()]
    [Tooltip("Local-space direction the foam washes toward at the peak of each wave")]
    public Vector2 moveDirection = Vector2.up;
    public float moveDistance = 0.3f;
    [Space()]
    public float moveInDuration = 1.2f;
    public float holdDuration = 0.3f;
    public float moveOutDuration = 1.5f;
    [Space()]
    public Ease moveInEase = Ease.OutQuad;
    public Ease moveOutEase = Ease.InQuad;

    [Header("----------------- FADE ----------------------")]
    [Space()]
    [Range(0f, 1f)] public float peakAlpha = 1f;
    public float fadeInDuration = 0.5f;
    public float fadeOutDuration = 1.2f;

    [Header("----------------- TIMING ----------------------")]
    [Space()]
    public float delayBetweenWaves = 1.5f;
    public bool randomizeStartDelay = true;

    Vector3 startLocalPos;
    Color startColorA, startColorB;
    float currentAlpha;

    void Awake()
    {
        if (lineRenderer == null)
            lineRenderer = GetComponent<LineRenderer>();
    }

    void Start()
    {
        startLocalPos = transform.localPosition;
        startColorA = lineRenderer.startColor;
        startColorB = lineRenderer.endColor;

        SetAlpha(0f);

        float initialDelay = randomizeStartDelay ? Random.Range(0f, delayBetweenWaves) : 0f;

        DOVirtual.DelayedCall(initialDelay, PlayWaveCycle);
    }

    void PlayWaveCycle()
    {
        Vector3 peakLocalPos = startLocalPos + (Vector3)(moveDirection.normalized * moveDistance);

        Sequence seq = DOTween.Sequence();

        seq.AppendCallback(() =>
        {
            transform.localPosition = startLocalPos;
            SetAlpha(0f);
        });

        // wash in: move toward the beach while fading in
        seq.Append(transform.DOLocalMove(peakLocalPos, moveInDuration).SetEase(moveInEase));
        seq.Join(DOTween.To(() => currentAlpha, SetAlpha, peakAlpha, fadeInDuration).SetEase(Ease.OutQuad));

        if (holdDuration > 0f)
            seq.AppendInterval(holdDuration);

        // recede: move back while fading out
        seq.Append(transform.DOLocalMove(startLocalPos, moveOutDuration).SetEase(moveOutEase));
        seq.Join(DOTween.To(() => currentAlpha, SetAlpha, 0f, fadeOutDuration).SetEase(Ease.InQuad));

        seq.AppendInterval(delayBetweenWaves);

        seq.OnComplete(PlayWaveCycle);
    }

    void SetAlpha(float a)
    {
        currentAlpha = a;

        Color ca = startColorA;
        ca.a = a;
        Color cb = startColorB;
        cb.a = a;

        lineRenderer.startColor = ca;
        lineRenderer.endColor = cb;
    }
}
