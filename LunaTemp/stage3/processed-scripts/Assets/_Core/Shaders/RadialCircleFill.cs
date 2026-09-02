using UnityEngine;

[RequireComponent(typeof(SpriteRenderer))]
public class RadialCircleFill : MonoBehaviour
{
    [Header("Fill Settings")]
    [Range(0f, 1f)]
    public float currentFill = 1f;          // current value (0 = empty, 1 = full)

    [Tooltip("true = fill karega (0→1), false = unfill karega (1→0)")]
    public bool fillInsteadOfUnfill = true;

    [Tooltip("Animation kitne seconds mein complete ho (0 = instant)")]
    public float duration = 1.5f;

    [Tooltip("Starting angle (270 = top se start, jaise UI Image)")]
    public float startAngle = 270f;

    private SpriteRenderer sr;
    private Material matInstance;
    private float targetFill;
    private float startFill;
    private float timer;

    private bool isAnimating = false;

    void Awake()
    {
        sr = GetComponent<SpriteRenderer>();

        // Unique material instance banao taake doosre objects affect na hon
        matInstance = new Material(sr.sharedMaterial);
        sr.material = matInstance;

        // Default shader values
        matInstance.SetFloat("_Arc1", 0f);
        matInstance.SetFloat("_Angle", startAngle);
    }

    void Start()
    {
        // Game start hone par animation shuru kar do
        if (fillInsteadOfUnfill)
        {
            // Fill karna hai → shuru 0 se, target 1
            StartAnimation(0f, 1f);
        }
        else
        {
            // Unfill karna hai → shuru 1 se, target 0
            StartAnimation(1f, 0f);
        }
    }

    void Update()
    {
        if (!isAnimating) return;

        timer += Time.deltaTime;
        float t = timer / duration;

        if (t >= 1f)
        {
            // Animation complete
            currentFill = targetFill;
            isAnimating = false;
        }
        else
        {
            // Smooth lerp
            currentFill = Mathf.Lerp(startFill, targetFill, t);
        }

        // Shader ko update karo
        matInstance.SetFloat("_Arc2", currentFill * 360f);
        matInstance.SetFloat("_Angle", startAngle);
    }

    /// <summary>
    /// Animation shuru karne ke liye public method
    /// </summary>
    public void StartAnimation(float from, float to)
    {
        startFill = from;
        targetFill = Mathf.Clamp01(to);
        currentFill = from;
        timer = 0f;
        isAnimating = true;
    }

    /// <summary>
    /// Instant value set karne ke liye (animation nahi)
    /// </summary>
    public void SetFillInstant(float value)
    {
        isAnimating = false;
        currentFill = Mathf.Clamp01(value);
        matInstance.SetFloat("_Arc2", currentFill * 360f);
    }

    // Optional: Inspector se test karne ke liye
    [ContextMenu("Test Fill Animation")]
    private void TestFill() => StartAnimation(0f, 1f);

    [ContextMenu("Test Unfill Animation")]
    private void TestUnfill() => StartAnimation(1f, 0f);
}