using UnityEngine;

// Luna has no SpriteMask: the liquid grows up from the jar floor and the pour stream is
// trimmed at the surface instead. AcidPourController still drives progress by moving the water's parent.
public class JarFillNoMask : MonoBehaviour
{
    [Tooltip("Liquid body. Must have no children - it gets squashed in Y.")]
    public SpriteRenderer water;
    [Tooltip("World Y the liquid bottom stays pinned to.")]
    public Transform jarFloor;

    [Space]
    public SpriteRenderer stream;
    [Tooltip("Moves with the liquid; the stream ends at its Y.")]
    public Transform surface;
    public float surfaceOffset;

    [Tooltip("Bubbles emitted from below the jar; kept off until the liquid covers them.")]
    public GameObject showWhenFull;

    Vector3 waterPos, waterScale, streamPos, streamScale;

    void Awake()
    {
        waterPos = water.transform.localPosition;
        waterScale = water.transform.localScale;
        streamPos = stream.transform.localPosition;
        streamScale = stream.transform.localScale;
    }

    void LateUpdate()
    {
        FitWater();
        TrimStream();
    }

    void FitWater()
    {
        Transform t = water.transform;
        Bounds b = water.sprite.bounds;

        float top = waterPos.y + b.max.y * waterScale.y;
        float floor = t.parent.InverseTransformPoint(jarFloor.position).y;
        float k = Mathf.Clamp01((top - floor) / (b.size.y * waterScale.y));

        Vector3 s = waterScale;
        s.y *= k;
        t.localScale = s;

        Vector3 p = waterPos;
        p.y = top - b.max.y * s.y;
        t.localPosition = p;

        if (showWhenFull != null)
            showWhenFull.SetActive(k >= 0.99f);
    }

    void TrimStream()
    {
        Transform t = stream.transform;
        t.localPosition = streamPos;
        t.localScale = streamScale;

        Bounds b = stream.sprite.bounds;
        Vector3 top = t.TransformPoint(0f, b.max.y, 0f);
        Vector3 bottom = t.TransformPoint(0f, b.min.y, 0f);
        float stopY = surface.position.y + surfaceOffset;

        if (bottom.y >= stopY || top.y <= bottom.y)
            return;

        float keep = Mathf.Clamp01((top.y - stopY) / (top.y - bottom.y));

        Vector3 s = streamScale;
        s.y *= keep;
        t.localScale = s;
        t.position = top + (t.position - top) * keep;
    }
}
