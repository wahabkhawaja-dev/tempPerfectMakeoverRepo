using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

/// <summary>
/// Pours the melted wax from the spoon into the lipstick mould.
///
/// Goes on a small trigger at the spoon's bowl, the same way Tip 5 works for the picker.
/// Hold the bowl over the mould and it tips, a stream appears, and the mould fills; take it
/// away and the pour stops where it was, so the player can come back to it.
///
/// The fill itself is the mask: LiquidFill sits at a sorting order inside the mask's custom
/// range with VisibleOutsideMask, so sliding the mask off it reveals the liquid from the
/// bottom up.
/// </summary>
[RequireComponent(typeof(Collider2D))]
public class Lvl3_PourFill : MonoBehaviour
{
    [Header("References")]
    [Tooltip("The spoon. Found on a parent if left empty.")]
    public BasicDrag Tool;

    [Tooltip("Collider over the mould. The pour runs while the bowl is inside it.")]
    public Collider2D pourZone;

    [Tooltip("The mask that hides the liquid. Sliding it away is what fills the mould.")]
    public Transform fillMask;

    [Tooltip("Switched on when the first drop lands.")]
    public GameObject liquidFill;

    [Tooltip("The falling stream, on only while actually pouring.")]
    public GameObject stream;

    [Header("Drip")]
    [Tooltip("Off: the stream is revealed by scaling it out of the bowl, which works with any shader. On: use a SpriteMask - only works if the stream uses a stencil-aware shader like Sprites/Default. A 2DxFX material cannot be masked at all.")]
    public bool useDripMask = false;

    [Tooltip("Mask over the stream. The stream is VisibleInsideMask, so sliding this down grows the drip downwards.")]
    public Transform dripMask;

    [Tooltip("Drip mask local Y with no stream showing - clear of the stream sprite.")]
    public float dripMaskHiddenY;

    [Tooltip("Drip mask local Y with the stream fully drawn.")]
    public float dripMaskShownY;

    [Tooltip("How long the drip takes to reach full length, and to pull back when the pour stops.")]
    public float dripGrowTime = 0.35f;

    [Tooltip("Off: the stream is simply switched on and off at its authored size, nothing touches its transform. On: it grows out of the bowl and thins as the spoon empties.")]
    public bool scaleStream = false;

    [Tooltip("How much the stream thins out as the spoon empties. Only used when scaleStream is on.")]
    [Range(0f, 1f)] public float dripTaper = 0.7f;

    [Header("Particles")]
    [Tooltip("Steam or boiling effects on the spoon. They fade out as the wax pours and stop once the pour hits particleStopAt.")]
    public ParticleSystem[] particles;

    [Tooltip("Pour progress (0-1) at which spoon particles stop. 0.65 = 65%.")]
    [Range(0.1f, 1f)] public float particleStopAt = 0.65f;

    [Header("Tilt gate")]
    [Tooltip("On: the mould only fills once the spoon has actually reached BasicDrag's newRot angle, not the instant it is picked up. The wax has to be tipped over before it can pour.")]
    public bool requireTilt = true;

    [Tooltip("How near that angle counts, in degrees.")]
    public float tiltTolerance = 3f;

    [Header("Zone detection")]
    [Tooltip("On: how close the bowl is to the pour point decides, which does not depend on collider sizes, rigidbody types or trigger quirks. Off: rely on OnTriggerEnter2D.")]
    public bool useDistance = true;

    [Tooltip("How far sideways off the mould the bowl may be and still pour, in world units.")]
    public float pourRadiusX = 0.35f;

    [Tooltip("How high above the pour point the bowl may hover and still pour. Roughly the length of the drip.")]
    public float pourHeight = 1.2f;

    [Tooltip("How far below the pour point still counts, so resting right on it works too.")]
    public float pourDepth = 0.25f;

    [Header("Fill")]
    [Tooltip("Mask local Y with the mould empty. Drag the mask there in the editor and copy the value.")]
    public float maskEmptyY;

    [Tooltip("Mask local Y with the mould full.")]
    public float maskFullY;

    [Tooltip("Seconds of pouring needed to fill the mould.")]
    public float fillDuration = 2.5f;

    [Header("Spoon empties")]
    [Tooltip("The wax sitting in the spoon. It drains as the mould fills.")]
    public Transform spoonWax;

    [Tooltip("How small the spoon's wax gets by the time the mould is full.")]
    [Range(0f, 1f)] public float spoonWaxDrain = 0.85f;

    [Tooltip("Point the wax drains towards - put this at the spoon's lip. Without it the wax just shrinks towards its own centre, which reads as fading rather than pouring out.")]
    public Transform drainAnchor;

    [Header("Tilt")]
    [Tooltip("Degrees the spoon tips over to pour. Leave at 0 to let BasicDrag's own canRotateOnPick handle the tilt - both driving the rotation would fight each other.")]
    public float tiltZ = -35f;
    public float tiltTime = 0.25f;

    [Header("Audio")]
    public AudioClip pourClip;
    public AudioSource pourLoop;

    [Header("Events")]
    public UnityEvent OnPourStarted;
    public UnityEvent OnFilled;

    float fill;
    bool inZone;
    bool dripping;
    bool pouring;
    bool started;
    bool done;
    float dripGrow;
    bool particlesStopped;

    float toolStartZ;
    Vector3 waxStartScale;
    Vector3 waxStartLocalPos;
    Vector3 streamStartScale;
    Vector3 streamStartLocalPos;
    float streamHalfHeight;
    float streamTopY;
    float pushedProgress = -1f;

    public float Fill { get { return fill; } }

    void Start()
    {
        if (Tool == null)
            Tool = GetComponentInParent<BasicDrag>();

        if (Tool != null)
        {
            toolStartZ = Tool.transform.localEulerAngles.z;

            // Stream follows the tilt, not the pick. Mouse-up still pulls it back if the
            // rotation has not returned yet this frame.
            Tool.OnMouseUpEvent += StopDrip;
        }

        if (spoonWax != null)
        {
            waxStartScale = spoonWax.localScale;
            waxStartLocalPos = spoonWax.localPosition;
        }

        if (stream != null)
        {
            streamStartScale = stream.transform.localScale;
            streamStartLocalPos = stream.transform.localPosition;

            // Where the stream hangs from, so it can grow downwards without its top moving.
            SpriteRenderer ssr = stream.GetComponent<SpriteRenderer>();

            streamHalfHeight = ssr != null && ssr.sprite != null
                ? ssr.sprite.bounds.size.y * streamStartScale.y * 0.5f
                : 0f;

            streamTopY = streamStartLocalPos.y + streamHalfHeight;

            stream.SetActive(false);
        }

        if (liquidFill != null)
            liquidFill.SetActive(false);

        SetDrip(dripMaskHiddenY);

        ApplyFill();
    }

    /// <summary>Shrinks a transform towards drainAnchor, keeping that point fixed.</summary>
    void ShrinkTowardsAnchor(Transform t, Vector3 startScale, Vector3 startLocalPos, float k)
    {
        if (t == null)
            return;

        t.localScale = startScale * k;

        if (drainAnchor == null || t.parent == null)
            return;

        Vector3 a = t.parent.InverseTransformPoint(drainAnchor.position);

        t.localPosition = a + (startLocalPos - a) * k;
    }

    /// <summary>
    /// The stream's size carries two things at once: how far it has grown out of the bowl,
    /// and how weak the flow has become as the spoon empties.
    /// </summary>
    void ApplyStream()
    {
        if (stream == null)
            return;

        // Nothing touches the stream's transform unless asked - it stays exactly the size
        // and place it was authored at.
        if (!scaleStream)
        {
            stream.transform.localScale = streamStartScale;
            stream.transform.localPosition = streamStartLocalPos;

            return;
        }

        float grow = useDripMask ? 1f : dripGrow;
        float taper = 1f - dripTaper * fill;

        Transform t = stream.transform;

        // Length carries the growing, width only carries the thinning. Scaling both at once
        // collapsed the stream into a sliver instead of drawing it downwards.
        t.localScale = new Vector3(
            streamStartScale.x * taper,
            streamStartScale.y * grow * taper,
            streamStartScale.z);

        // Hangs from its own top edge, not from drainAnchor. The lip sits partway down the
        // stream rather than at its top, so anchoring there dragged the whole stream down
        // as it shrank and tore it away from the spoon.
        float halfHeight = streamHalfHeight * grow * taper;

        t.localPosition = new Vector3(
            streamStartLocalPos.x,
            streamTopY - halfHeight,
            streamStartLocalPos.z);
    }

    /// <summary>
    /// True once the spoon has reached the pour angle (BasicDrag newRot, 21.375 on this tool).
    /// </summary>
    bool IsTilted()
    {
        if (!requireTilt || Tool == null)
            return true;

        float current = Tool.transform.localEulerAngles.z;
        float target = Tool.newRot.z;

        return Mathf.Abs(Mathf.DeltaAngle(current, target)) <= tiltTolerance;
    }

    void StopParticles(bool hard)
    {
        for (int i = 0; i < particles.Length; i++)
        {
            if (particles[i] == null)
                continue;

            // Stop emitting but let what is already in the air finish, unless the step is
            // over, in which case clear them out.
            particles[i].Stop(true, hard
                ? ParticleSystemStopBehavior.StopEmittingAndClear
                : ParticleSystemStopBehavior.StopEmitting);
        }
    }

    void OnDestroy()
    {
        StopPourFeedback();

        if (Tool == null)
            return;

        Tool.OnMouseUpEvent -= StopDrip;
    }

    void StartPourFeedback()
    {
    }

    void StopPourFeedback()
    {
            
    }

    /// <summary>Spoon picked up and tilted - the drip draws itself downwards.</summary>
    void StartDrip()
    {
        if (done)
            return;

        dripping = true;

        if (stream != null)
            stream.SetActive(true);

        // Grown by scale rather than a mask: a SpriteMask needs a stencil-aware shader, and
        // the stream's 2DxFX material has none, so masking it can never work. The growth is
        // driven straight from Update rather than a tween, because a tween can be killed
        // out from under it and then the stream silently stays at zero length.
        if (!useDripMask)
            return;

        if (dripMask == null)
            return;

        dripMask.DOKill();
        dripMask.DOLocalMoveY(dripMaskShownY, dripGrowTime).SetEase(Ease.OutQuad);
    }

    /// <summary>Spoon let go - the drip pulls back up and only then the stream goes off.</summary>
    void StopDrip()
    {
        dripping = false;

        // Update shrinks it back and switches the stream off once it has fully retracted.
        if (!useDripMask)
            return;

        if (dripMask == null)
        {
            if (stream != null)
                stream.SetActive(false);

            return;
        }

        dripMask.DOKill();
        dripMask.DOLocalMoveY(dripMaskHiddenY, dripGrowTime).SetEase(Ease.InQuad)
            .OnComplete(() =>
            {
                if (!dripping && stream != null)
                    stream.SetActive(false);
            });
    }

    /// <summary>Kills the drip on the spot - no retract, no tween.</summary>
    void StopDripInstant()
    {
        dripping = false;
        dripGrow = 0f;

        if (dripMask != null)
        {
            dripMask.DOKill();

            SetDrip(dripMaskHiddenY);
        }

        if (stream != null)
            stream.SetActive(false);
    }

    void SetDrip(float y)
    {
        if (dripMask == null)
            return;

        Vector3 p = dripMask.localPosition;

        p.y = y;

        dripMask.localPosition = p;
    }

    void OnTriggerEnter2D(Collider2D other)
    {
        if (done || useDistance || pourZone == null || other != pourZone)
            return;

        inZone = true;
    }

    void OnTriggerExit2D(Collider2D other)
    {
        if (useDistance || pourZone == null || other != pourZone)
            return;

        inZone = false;

        StopPour();
    }

    void Update()
    {
        if (!done && Tool != null)
        {
            // Same gate as the mould fill: the stream only runs once the spoon has
            // actually tipped to newRot (21.375), not the instant it is picked up.
            bool wantDrip = Tool.isDragging && IsTilted();

            if (wantDrip && !dripping)
                StartDrip();
            else if (!wantDrip && dripping)
                StopDrip();
        }

        // The stream's length is driven here rather than by a tween, so nothing can cancel
        // it half way and leave the drip stuck at zero.
        if (!useDripMask)
        {
            if (scaleStream)
            {
                dripGrow = Mathf.MoveTowards(dripGrow, dripping ? 1f : 0f,
                    Time.deltaTime / Mathf.Max(dripGrowTime, 0.0001f));
            }

            else
            {
                // Left at its authored size - the stream just comes on and goes off.
                dripGrow = dripping ? 1f : 0f;
            }

            if (stream != null)
            {
                bool shouldShow = dripGrow > 0.001f;

                if (stream.activeSelf != shouldShow)
                    stream.SetActive(shouldShow);
            }
        }

        ApplyStream();

        if (done)
            return;

        // Where the bowl is decides this, not a trigger. The bowl hovers a drip's length
        // above the mould and never actually touches it, so collider overlap was never
        // going to fire.
        if (useDistance && pourZone != null)
        {
            Vector3 z = pourZone.transform.position;

            float dx = Mathf.Abs(transform.position.x - z.x);
            float dy = transform.position.y - z.y;

            inZone = dx <= pourRadiusX && dy >= -pourDepth && dy <= pourHeight;
        }

        // The mould only fills when the wax is actually falling into it: the bowl over the
        // mould, the drip running, and the spoon genuinely tipped over. BasicDrag tweens
        // the tilt over a quarter second on pick-up, so without this last check the wax
        // starts pouring out of a spoon that is still sitting flat.
        bool shouldPour = inZone && dripping && IsTilted();

        if (shouldPour && !pouring)
            StartPour();

        else if (!shouldPour && pouring)
            StopPour();

        if (!pouring)
            return;

        fill += Time.deltaTime / Mathf.Max(fillDuration, 0.0001f);

        if (fill >= 1f)
        {
            fill = 1f;

            ApplyFill();
            StopPour();

            // The spoon is empty now, so the drip has to end too - it was tied to the tilt
            // and would otherwise keep running while the player still holds the spoon.
            // Cut, not retracted: a stream still tapering off over a full mould reads as
            // wax coming from nowhere.
            StopDripInstant();
            StopParticles(true);

            done = true;

            OnFilled?.Invoke();

            return;
        }

        ApplyFill();
    }

    void StartPour()
    {
        pouring = true;

        if (!started)
        {
            started = true;

            if (liquidFill != null)
                liquidFill.SetActive(true);

            OnPourStarted?.Invoke();
        }

        // tiltZ 0 means BasicDrag owns the rotation - leave its tween alone.
        if (Tool != null && tiltZ != 0f)
        {
            Tool.transform.DOKill();
            Tool.transform.DOLocalRotate(new Vector3(0f, 0f, toolStartZ + tiltZ), tiltTime);
        }

        if (pourClip != null)
            AudioController.instance.PlayAnySfx(0, pourClip, 0f);

        if (pourLoop != null && !pourLoop.isPlaying)
            pourLoop.Play();

        StartPourFeedback();
    }

    void StopPour()
    {
        if (!pouring)
            return;

        pouring = false;

        // The drip is not touched here - it belongs to the tilt and carries on until the
        // spoon is put down.
        if (Tool != null && tiltZ != 0f)
        {
            Tool.transform.DOKill();
            Tool.transform.DOLocalRotate(new Vector3(0f, 0f, toolStartZ), tiltTime);
        }

        if (pourLoop != null)
            pourLoop.Pause();

        StopPourFeedback();
    }

    void ApplyFill()
    {
        if (fillMask != null)
        {
            Vector3 p = fillMask.localPosition;

            p.y = Mathf.Lerp(maskEmptyY, maskFullY, fill);

            fillMask.localPosition = p;
        }

        // What leaves the spoon has to show up as the spoon emptying, or the wax reads as
        // infinite.
        // Shrinking about the lip instead of its own centre, so the wax draws down towards
        // where it is pouring out rather than just fading in place.
        if (spoonWax != null)
            ShrinkTowardsAnchor(spoonWax, waxStartScale, waxStartLocalPos, 1f - spoonWaxDrain * fill);

        ApplyStream();

        float stopAt = Mathf.Max(particleStopAt, 0.0001f);

        if (!particlesStopped && fill >= stopAt)
        {
            particlesStopped = true;
            StopParticles(false);
        }
        else if (!particlesStopped)
        {
            float particleT = 1f - fill / stopAt;

            for (int i = 0; i < particles.Length; i++)
            {
                if (particles[i] == null)
                    continue;

                var em = particles[i].emission;

                em.rateOverTimeMultiplier = particleT;
            }
        }

        if (UI_Manager.instance == null)
            return;

        if (fill < 1f && Mathf.Abs(fill - pushedProgress) < 0.02f)
            return;

        pushedProgress = fill;

        UI_Manager.instance.SetProgressBar(fill, 0.1f);
    }

    /// <summary>Back to an empty mould, for a level restart.</summary>
    public void ResetPour()
    {
        fill = 0f;
        inZone = false;
        pouring = false;
        started = false;
        done = false;
        pushedProgress = -1f;
        particlesStopped = false;

        StopPourFeedback();

        if (dripMask != null)
            dripMask.DOKill();

        SetDrip(dripMaskHiddenY);

        if (stream != null)
            stream.SetActive(false);

        if (liquidFill != null)
            liquidFill.SetActive(false);

        if (spoonWax != null)
        {
            spoonWax.localScale = waxStartScale;
            spoonWax.localPosition = waxStartLocalPos;
        }

        if (stream != null)
        {
            stream.transform.localScale = streamStartScale;
            stream.transform.localPosition = streamStartLocalPos;
        }

        for (int i = 0; i < particles.Length; i++)
        {
            if (particles[i] == null)
                continue;

            var em = particles[i].emission;

            em.rateOverTimeMultiplier = 1f;

            particles[i].Play();
        }

        ApplyFill();
    }
}
