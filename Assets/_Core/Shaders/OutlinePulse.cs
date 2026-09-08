using UnityEngine;

public class OutlinePulse : MonoBehaviour
{
    [SerializeField] private float smallThickness = 1f; // Default small outline thickness
    [SerializeField] private float largeThickness = 3f; // Default large outline thickness
    [SerializeField] private float transitionSpeed = 5f; // Speed of thickness transition (for non-animated mode)
    [SerializeField] private float animationSpeed = 1f; // Speed of continuous animation (cycles per second)
    [SerializeField] private bool isThickOutline = false; // Toggle between thicknesses when not animating
    [SerializeField] private bool animate = false; // Toggle animation mode

    private Material spriteMaterial;
    private float targetThickness;
    private static readonly int DistanceID = Shader.PropertyToID("_Distance");

    bool isEnabled = false;

    void Start()
    {
        // Get the material from the SpriteRenderer
        spriteMaterial = GetComponent<SpriteRenderer>().material;

        // Set initial thickness based on isThickOutline
        targetThickness = isThickOutline ? largeThickness : smallThickness;
        spriteMaterial.SetFloat(DistanceID, targetThickness);
        
        DisableAnim();
    }

    void Update()
    {
        if (!isEnabled)
            return;

        if (animate)
        {
            // Oscillate thickness between smallThickness and largeThickness using sine wave
            float t = (Mathf.Sin(Time.time * animationSpeed * Mathf.PI * 2) + 1) * 0.5f; // Normalized [0,1]
            float newThickness = Mathf.Lerp(smallThickness, largeThickness, t);
            spriteMaterial.SetFloat(DistanceID, newThickness);
        }
        else
        {
            // Update target thickness based on isThickOutline
            targetThickness = isThickOutline ? largeThickness : smallThickness;

            // Smoothly interpolate to the target thickness
            float currentThickness = spriteMaterial.GetFloat(DistanceID);
            float newThickness = Mathf.Lerp(currentThickness, targetThickness, Time.deltaTime * transitionSpeed);
            spriteMaterial.SetFloat(DistanceID, newThickness);
        }
    }

    // Public method to toggle thickness state (can be called from other scripts or UI)
    public void ToggleThickness(bool setThick)
    {
        isThickOutline = setThick;
    }

    // Public method to toggle animation state (can be called from other scripts or UI)
    public void ToggleAnimation(bool setAnimate)
    {
        animate = setAnimate;
    }

    // Call this to enable the outline
    public void EnableAnim()
    {
        isEnabled = true;

        spriteMaterial.SetFloat("_EnableOutline", 1f);
    }

    // Call this to disable the outline
    public void DisableAnim()
    {
        isEnabled = false;

        spriteMaterial.SetFloat("_EnableOutline", 0f);
    }
}
