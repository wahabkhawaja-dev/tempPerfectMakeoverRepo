using UnityEngine;

public class TextureOffsetScroller : MonoBehaviour
{
    [Header("Scrolling Settings")]
    public Vector2 scrollSpeed = new Vector2(0.2f, 0f);     // Target X = horizontal, Y = vertical speed

    [Header("Smooth Start")]
    public bool smoothStart = false;                        // If true, speed will ramp up from 0
    public float smoothDuration = 2f;                       // Time (in seconds) to reach full speed

    [Header("Optional")]
    public string textureName = "_MainTex";                 // Default for Mobile/Particles shaders
    public bool useSharedMaterial = false;                  // Set true only if you want all objects to share the same material

    private Material material;
    private Vector2 offset = Vector2.zero;
    private Vector2 currentSpeed = Vector2.zero;            // Used when smoothStart is enabled
    private float smoothTimer = 0f;

    void Start()
    {
        Renderer renderer = GetComponent<Renderer>();

        if (renderer == null)
        {
            Debug.LogError("TextureOffsetScroller: No Renderer found on " + gameObject.name);
            enabled = false;
            return;
        }

        // Use .material (instance) by default - safer for runtime changes
        material = useSharedMaterial ? renderer.sharedMaterial : renderer.material;

        // Initialize smooth start
        if (smoothStart)
        {
            currentSpeed = Vector2.zero;
            smoothTimer = 0f;
        }
        else
        {
            currentSpeed = scrollSpeed;
        }
    }

    void Update()
    {
        if (material == null) return;

        // Handle smooth speed increase
        if (smoothStart && smoothTimer < smoothDuration)
        {
            smoothTimer += Time.deltaTime;
            float t = Mathf.Clamp01(smoothTimer / smoothDuration);
            // Smooth ramp using Ease-Out for nicer feel
            t = 1f - Mathf.Pow(1f - t, 3f);
            currentSpeed = Vector2.Lerp(Vector2.zero, scrollSpeed, t);
        }

        // Update offset
        offset += currentSpeed * Time.deltaTime;

        // Apply offset to the texture
        material.SetTextureOffset(textureName, offset);
    }

    // Optional: Reset offset (useful for pooling)
    public void ResetOffset()
    {
        offset = Vector2.zero;
        if (material != null)
            material.SetTextureOffset(textureName, offset);

        // Reset smooth start as well
        if (smoothStart)
        {
            smoothTimer = 0f;
            currentSpeed = Vector2.zero;
        }
    }

    // Call this if you change scrollSpeed at runtime and want to restart smooth ramp
    public void RestartSmoothStart()
    {
        if (smoothStart)
        {
            smoothTimer = 0f;
            currentSpeed = Vector2.zero;
        }
    }
}