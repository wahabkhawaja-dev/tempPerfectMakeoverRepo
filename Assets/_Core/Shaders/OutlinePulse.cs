using UnityEngine;

public class OutlinePulse : MonoBehaviour
{
    [SerializeField] private float smallThickness = 1f; // Default small outline thickness
    [SerializeField] private float largeThickness = 3f; // Default large outline thickness
    [SerializeField] private float transitionSpeed = 5f; // Speed of thickness transition (for non-animated mode)
    [SerializeField] private float animationSpeed = 1f; // Speed of continuous animation (cycles per second)
    [SerializeField] private bool isThickOutline = false; // Toggle between thicknesses when not animating
    [SerializeField] private bool animate = false; // Toggle animation mode
    [SerializeField] private bool hideSpriteOnly = false; // Hide sprite body, keep outline visible

    private Material spriteMaterial;
    private float targetThickness;
    private static readonly int DistanceID = Shader.PropertyToID("_Distance");

    private bool isEnabled = false;

    void Awake()
    {
        EnsureMaterial();
    }

    void Start()
    {
        EnsureMaterial();

        // Set initial thickness based on isThickOutline
        targetThickness = isThickOutline ? largeThickness : smallThickness;
        spriteMaterial.SetFloat(DistanceID, targetThickness);

        // Apply initial outline and sprite states
        DisableAnim();

        if (hideSpriteOnly)
            EnableHideSprite();

        else
            DisableHideSprite();
    }

    void EnsureMaterial()
    {
        if (spriteMaterial != null)
            return;

        var sr = GetComponent<SpriteRenderer>();
        if (sr != null)
            spriteMaterial = sr.material;
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

    // Public method to toggle thickness state
    public void ToggleThickness(bool setThick)
    {
        isThickOutline = setThick;
    }

    // Public method to toggle animation state
    public void ToggleAnimation(bool setAnimate)
    {
        animate = setAnimate;
    }

    // Enable outline
    public void EnableAnim()
    {
        EnsureMaterial();
        isEnabled = true;
        if (spriteMaterial != null)
            spriteMaterial.SetFloat("_EnableOutline", 1f);
    }

    // Disable outline
    public void DisableAnim()
    {
        EnsureMaterial();
        isEnabled = false;
        if (spriteMaterial != null)
            spriteMaterial.SetFloat("_EnableOutline", 0f);
    }

    // Enable sprite hiding (only outline visible)
    public void EnableHideSprite()
    {
        EnsureMaterial();
        hideSpriteOnly = true;
        if (spriteMaterial != null)
            spriteMaterial.SetFloat("_HideSprite", 1f);
    }

    // Disable sprite hiding (normal sprite + outline visible)
    public void DisableHideSprite()
    {
        EnsureMaterial();
        hideSpriteOnly = false;
        if (spriteMaterial != null)
            spriteMaterial.SetFloat("_HideSprite", 0f);
    }
}
