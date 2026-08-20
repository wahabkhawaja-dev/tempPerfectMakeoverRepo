using DG.Tweening;
using UnityEngine;

/// <summary>
/// Keeps a candle flame alive. The art is one still sprite, so the burn is driven here:
/// the flame stretches and squashes, sways, bobs and brightens on layered Perlin noise,
/// which reads as fire without ever repeating the way a sine loop does.
///
/// Light() and Extinguish() are meant to be called from the level script or a UnityEvent.
/// </summary>
public class Lvl3_CandleFlame : MonoBehaviour
{
    [Header("References")]
    [Tooltip("The flame sprite. Taken from this object if left empty.")]
    public SpriteRenderer flame;

    [Header("State")]
    public bool litOnStart = true;

    [Header("Flicker")]
    [Tooltip("How fast the flame churns.")]
    public float speed = 3.5f;

    [Tooltip("How much the flame stretches up and down, as a fraction of its height.")]
    public float stretch = 0.12f;

    [Tooltip("How much it narrows as it stretches. 1 keeps its area roughly constant.")]
    [Range(0f, 1f)] public float squash = 0.5f;

    [Tooltip("Sway either side, in degrees.")]
    public float sway = 3f;

    [Tooltip("Up and down bob, in local units.")]
    public float bob = 0.02f;

    [Tooltip("Brightness wobble. 0 keeps the flame a flat colour.")]
    [Range(0f, 0.5f)] public float brightness = 0.1f;

    [Header("Pressed down")]
    [Tooltip("Collider under the spoon. While it overlaps this flame's own trigger the flame is held down; the moment it leaves, the flame stands back up. Assign this and the distance below is ignored.")]
    public Collider2D pressCollider;

    [Tooltip("Fallback when no pressCollider is set: whatever is held over the flame.")]
    public Transform pressTarget;

    [Tooltip("How close the target has to get before the flame starts bending, in world units. Only used without a pressCollider.")]
    public float pressDistance = 1f;

    [Tooltip("How much shorter the flame gets when the target is right on top of it.")]
    [Range(0f, 0.9f)] public float pressAmount = 0.45f;

    [Tooltip("How much wider it spreads as it is pushed down.")]
    [Range(0f, 1f)] public float pressSpread = 0.3f;

    [Tooltip("How far the whole flame is shoved down while it is held, in local units. Squashing alone keeps the base pinned; this sinks it a little as well.")]
    public float pressDrop = 0.06f;

    [Tooltip("How quickly it gives way and springs back.")]
    public float pressSpeed = 7f;

    [Header("Light / extinguish")]
    [Tooltip("How long the flame takes to rise from the wick, in seconds.")]
    public float lightTime = 0.7f;
    public float extinguishTime = 0.2f;

    [Tooltip("Plays once when the wick catches.")]
    public AudioClip lightClip;

    Vector3 baseScale;
    Vector3 basePos;
    float baseZ;
    Color baseColor;
    float spriteHalfY;

    bool lit;
    float seed;
    float amount;
    float press;
    bool pressed;

    ParticleSystem sparkles;

    public bool IsLit { get { return lit; } }

    void Awake()
    {
        if (flame == null)
            flame = GetComponent<SpriteRenderer>();

        baseScale = transform.localScale;
        basePos = transform.localPosition;
        baseZ = transform.localEulerAngles.z;

        if (flame != null)
        {
            baseColor = flame.color;

            if (flame.sprite != null)
                spriteHalfY = flame.sprite.bounds.extents.y;
        }

        sparkles = GetComponentInChildren<ParticleSystem>(true);

        // So two flames in one scene never flicker in step.
        seed = Random.Range(0f, 100f);
    }

    void Start()
    {
        if (litOnStart)
        {
            lit = true;
            amount = 1f;
            PlaySparkles(true);
        }

        else
        {
            lit = false;
            amount = 0f;

            // Keep the wick collider at full size so the lighter tip can overlap it.
            transform.localScale = baseScale;

            if (flame != null)
                flame.enabled = false;

            PlaySparkles(false);
        }
    }

    void Update()
    {
        if (!lit && amount <= 0f)
            return;

        float t = Time.time * speed;

        // Four separate noise streams so nothing moves in lockstep.
        float nStretch = Mathf.PerlinNoise(t, seed) - 0.5f;
        float nSway = Mathf.PerlinNoise(t * 0.7f, seed + 11f) - 0.5f;
        float nBob = Mathf.PerlinNoise(t * 0.9f, seed + 23f) - 0.5f;
        float nBright = Mathf.PerlinNoise(t * 1.3f, seed + 37f) - 0.5f;

        // Pinned down, the flicker moves out of the height and into the width - the flame
        // stops reaching up and starts guttering sideways.
        float stretchNow = Mathf.Lerp(stretch, stretch * 0.35f, press);

        float y = 1f + nStretch * stretchNow * 2f;
        float x = 1f - nStretch * stretchNow * squash * 2f + Mathf.Abs(nStretch) * stretch * press;

        // Something held over the flame pushes it down and makes it spread out sideways.
        float pressTarget01 = 0f;

        if (pressCollider != null)
        {
            // Overlap decides it, not a guessed distance - in or out, nothing in between.
            pressTarget01 = pressed ? 1f : 0f;
        }

        else if (pressTarget != null && pressDistance > 0.0001f)
        {
            // Measured from the flame's real tip, taken from the renderer's bounds. The
            // local scale is not the height, so using it put the tip in the wrong place and
            // the flame never felt the spoon properly.
            float tipY = flame != null ? flame.bounds.max.y : transform.position.y;

            float gap = Vector2.Distance(pressTarget.position, new Vector2(transform.position.x, tipY));

            pressTarget01 = Mathf.Clamp01(1f - gap / pressDistance);
        }

        press = Mathf.MoveTowards(press, pressTarget01, Time.deltaTime * pressSpeed);

        y *= 1f - pressAmount * press;
        x *= 1f + pressSpread * press;

        // Rise from the wick: Y grows with amount, X starts a little narrow then fills out.
        // The extra downward offset pins the base so it is not a scale-from-centre pop.
        float grow = amount;
        float width = Mathf.Lerp(0.55f, 1f, grow);

        transform.localScale = new Vector3(baseScale.x * x * width, baseScale.y * y * grow, baseScale.z);

        // A flame held down does not lean - it squashes and spreads, and its sway and bob
        // die away as it is pinned. Leaving them running is what made it look tilted.
        float free = 1f - press;
        float pinDown = (1f - grow) * spriteHalfY * baseScale.y;

        transform.localEulerAngles = new Vector3(0f, 0f, baseZ + nSway * sway * 2f * free);

        transform.localPosition = basePos + new Vector3(0f, nBob * bob * 2f * free - pressDrop * press - pinDown, 0f);

        if (flame != null && brightness > 0f)
        {
            // Dips only, never above the base colour - a sprite colour over 1 is clamped,
            // so brightening would silently do nothing on half the wobble.
            float b = 1f - Mathf.Abs(nBright) * 2f * brightness;

            flame.color = new Color(baseColor.r * b, baseColor.g * b, baseColor.b * b, baseColor.a);
        }
    }

    void OnTriggerEnter2D(Collider2D other)
    {
        if (pressCollider != null && other == pressCollider)
            pressed = true;
    }

    void OnTriggerExit2D(Collider2D other)
    {
        if (pressCollider != null && other == pressCollider)
            pressed = false;
    }

    public void Light()
    {
        if (lit)
            return;

        lit = true;
        amount = 0f;

        // Sit on the wick at zero height before the sprite comes on, so the first
        // visible frame is a kernel, not the full flame.
        transform.localScale = new Vector3(baseScale.x * 0.55f, 0.0001f, baseScale.z);
        transform.localPosition = basePos + new Vector3(0f, -spriteHalfY * baseScale.y, 0f);

        if (flame != null)
            flame.enabled = true;

        PlaySparkles(true);

        if (lightClip != null && AudioController.instance != null)
            AudioController.instance.PlayAnySfx(0, lightClip, 0f);

        DOTween.Kill(this);

        DOTween.To(() => amount, v => amount = v, 1f, lightTime)
            .SetEase(Ease.OutCubic)
            .SetTarget(this);
    }

    public void Extinguish()
    {
        if (!lit)
            return;

        lit = false;

        DOTween.Kill(this);

        DOTween.To(() => amount, v => amount = v, 0f, extinguishTime)
            .SetEase(Ease.InQuad)
            .SetTarget(this)
            .OnComplete(() =>
            {
                transform.localScale = Vector3.zero;

                if (flame != null)
                    flame.enabled = false;

                PlaySparkles(false);
            });
    }

    void PlaySparkles(bool on)
    {
        if (sparkles == null)
            return;

        if (on)
        {
            if (!sparkles.gameObject.activeSelf)
                sparkles.gameObject.SetActive(true);

            sparkles.Play(true);
        }
        else
        {
            sparkles.Stop(true, ParticleSystemStopBehavior.StopEmittingAndClear);
        }
    }

    void OnDestroy()
    {
        DOTween.Kill(this);
    }
}
