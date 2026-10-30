using DG.Tweening;
using System.Collections.Generic;
using UnityEngine;

// Free-drag scissors cutting a sheet of cloth (the cut itself is a scratch card erased under Tip): the blades
// snip while the scissors move, and scraps of cloth (Scraps sprites) burst off the tip as it goes over the
// sheet. Burst() throws scraps off the whole sheet at once - when the last of it comes away.
public class CG_ScissorCutFX : MonoBehaviour
{
    [Space()]
    public BasicDrag Scissors;
    public Transform Tip;

    [Tooltip("The sheet being cut - scraps only come off while the tip is over it.")]
    public SpriteRenderer Sheet;

    [Header("----------------- SNIP ----------------------")]
    [Space()]
    public Sprite[] SnipFrames;
    public SpriteRenderer[] SnipRenderers;

    [Tooltip("Snips per second while moving.")]
    public float SnipRate = 3f;

    [Header("----------------- SCRAPS ----------------------")]
    [Space()]
    public Sprite[] Scraps;

    [Tooltip("World distance the tip travels over the sheet between two scraps - 0: none while moving, only Burst / BurstAlong.")]
    public float Spacing = 0.18f;

    [Tooltip("World size of a scrap's longest side.")]
    public Vector2 ScrapSize = new Vector2(0.12f, 0.3f);

    public int SortingOrder = 6;

    [Space()]
    public float FlyDistance = 0.6f;
    public float FallDistance = 1.2f;
    public float Lifetime = 0.9f;

    public bool IsCutting { get; private set; }

    Vector3 lastTip;
    float travelled;
    float snipPhase;
    bool wasDragging;

    readonly List<SpriteRenderer> pool = new List<SpriteRenderer>();

    void Update()
    {
        bool dragging = Scissors != null && Scissors.isDragging;
        Vector3 tip = Tip != null ? Tip.position : transform.position;

        if (dragging && !wasDragging)
            lastTip = tip;

        float moved = dragging ? Vector3.Distance(tip, lastTip) : 0f;
        lastTip = tip;
        wasDragging = dragging;

        IsCutting = moved > 0.0005f && OverSheet(tip);

        Snip(moved > 0.0005f);

        if (!IsCutting || Spacing <= 0f)
            return;

        travelled += moved;

        while (travelled >= Spacing)
        {
            travelled -= Spacing;

            Throw(tip, Random.insideUnitCircle.normalized);
        }
    }

    bool OverSheet(Vector3 p)
    {
        if (Sheet == null || !Sheet.gameObject.activeInHierarchy || Sheet.color.a < 0.05f)
            return false;

        Bounds b = SheetBounds();
        p.z = b.center.z;

        return b.Contains(p);
    }

    void Snip(bool moving)
    {
        if (SnipFrames == null || SnipFrames.Length == 0 || SnipRenderers == null)
            return;

        snipPhase = moving ? snipPhase + Time.deltaTime * SnipRate : 0f;

        int frame = Mathf.FloorToInt(snipPhase * SnipFrames.Length) % SnipFrames.Length;

        foreach (var sr in SnipRenderers)
            if (sr != null && sr.sprite != SnipFrames[frame])
                sr.sprite = SnipFrames[frame];
    }

    // Scraps off the whole sheet at once, bursting outwards from its middle.
    public void Burst(int count)
    {
        if (Sheet == null)
            return;

        Bounds b = SheetBounds();

        for (int i = 0; i < count; i++)
        {
            Vector3 p = new Vector3(Random.Range(b.min.x, b.max.x), Random.Range(b.min.y, b.max.y), b.center.z);
            Vector2 away = (Vector2)(p - b.center);

            Throw(p, away.sqrMagnitude > 0.0001f ? away.normalized : Random.insideUnitCircle.normalized);
        }
    }

    // Scraps off along a cut, from a to b (world), flung out to either side of it.
    public void BurstAlong(Vector3 a, Vector3 b, int count)
    {
        Vector2 along = (Vector2)(b - a);
        Vector2 side = along.sqrMagnitude > 0.0001f ? new Vector2(-along.y, along.x).normalized : Vector2.up;

        for (int i = 0; i < count; i++)
        {
            Vector3 p = Vector3.Lerp(a, b, Random.value);

            if (Sheet != null)
            {
                // only where the cloth was
                Bounds bb = SheetBounds();
                p.x = Mathf.Clamp(p.x, bb.min.x, bb.max.x);
                p.y = Mathf.Clamp(p.y, bb.min.y, bb.max.y);
            }

            Throw(p, (Random.value < .5f ? side : -side) + Random.insideUnitCircle * .4f);
        }
    }

    // From the sprite, so it holds while the sheet's own renderer is off (a CG_ClothSlicer draws it then).
    Bounds SheetBounds()
    {
        Bounds local = Sheet.sprite.bounds;
        Vector3 a = Sheet.transform.TransformPoint(local.min), b = Sheet.transform.TransformPoint(local.max);

        var world = new Bounds(a, Vector3.zero);
        world.Encapsulate(b);

        return world;
    }

    void Throw(Vector3 at, Vector2 dir)
    {
        if (Scraps == null || Scraps.Length == 0)
            return;

        SpriteRenderer sr = Get();
        Sprite sprite = Scraps[Random.Range(0, Scraps.Length)];

        sr.sprite = sprite;
        sr.color = Color.white;
        sr.sortingOrder = SortingOrder;

        Transform t = sr.transform;
        float longest = Mathf.Max(sprite.bounds.size.x, sprite.bounds.size.y);
        float scale = Random.Range(ScrapSize.x, ScrapSize.y) / Mathf.Max(longest, 0.0001f);

        at.z = transform.position.z;
        t.position = at;
        t.rotation = Quaternion.Euler(0f, 0f, Random.Range(0f, 360f));
        float parentScale = t.parent != null ? Mathf.Abs(t.parent.lossyScale.x) : 1f;
        t.localScale = Vector3.one * scale / Mathf.Max(parentScale, 0.0001f);
        sr.gameObject.SetActive(true);

        float life = Lifetime * Random.Range(.8f, 1.2f);
        Vector3 to = at + (Vector3)(dir * FlyDistance * Random.Range(.5f, 1f)) + Vector3.down * FallDistance * Random.Range(.6f, 1f);

        t.DOKill();
        sr.DOKill();

        t.DOMove(to, life).SetEase(Ease.OutQuad);
        t.DORotate(new Vector3(0f, 0f, Random.Range(-540f, 540f)), life, RotateMode.LocalAxisAdd);
        sr.DOFade(0f, life * .4f).SetDelay(life * .6f).OnComplete(() => sr.gameObject.SetActive(false));
    }

    SpriteRenderer Get()
    {
        foreach (var sr in pool)
            if (!sr.gameObject.activeSelf)
                return sr;

        // with the sheet's view, so they go when it does
        var go = new GameObject("Scrap");
        go.transform.SetParent(Sheet != null ? Sheet.transform.parent : transform.parent, false);

        var created = go.AddComponent<SpriteRenderer>();
        pool.Add(created);

        return created;
    }

    void OnDisable()
    {
        IsCutting = false;
    }
}
