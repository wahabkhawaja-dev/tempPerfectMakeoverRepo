using UnityEngine;

// Runtime-only visual mesh: leaves the authored sprite, animation and drop colliders intact.
[DefaultExecutionOrder(1000)]
public class CG_DressFabricMotion : MonoBehaviour
{
    public SpriteRenderer Source;
    public BasicDrag Drag;
    public Transform Shuttle;
    public Transform Bar;
    public bool Threads;
    public bool Chain;
    public float MaxWorldDeflection = .16f;

    const int Columns = 24, Rows = 32;
    Mesh mesh;
    MeshRenderer visual;
    MaterialPropertyBlock properties;
    Vector3[] rest, vertices;
    Color[] colors;
    Vector3 previousPosition, previousShuttle, previousBar;
    float displacement, speed, clock;
    bool initialized, originalForceOff;

    public static void Attach(SpriteRenderer source, BasicDrag drag = null,
        Transform shuttle = null, Transform bar = null, bool chain = false)
    {
        if (source == null || source.GetComponent<CG_DressFabricMotion>() != null) return;
        var motion = source.gameObject.AddComponent<CG_DressFabricMotion>();
        motion.Source = source;
        motion.Drag = drag;
        motion.Shuttle = shuttle;
        motion.Bar = bar;
        motion.Threads = drag == null;
        motion.Chain = chain;
        motion.MaxWorldDeflection = chain ? .055f : drag == null ? .025f : .30f;
    }

    void Build()
    {
        if (Source == null || Source.sprite == null) return;
        var sprite = Source.sprite;
        // These two dress sprites are unmasked, unpacked sprites using Sprites/Default.
        // Derive UVs from the sprite's own geometry to also respect atlas placement.
        var sv = sprite.vertices;
        var su = sprite.uv;
        var st = sprite.triangles;
        int a = st[0], b = st[1], c = st[2];
        Vector2 ab = sv[b] - sv[a], ac = sv[c] - sv[a];
        float determinant = ab.x * ac.y - ab.y * ac.x;
        if (Mathf.Abs(determinant) < .000001f) return;
        var bounds = sprite.bounds;
        int count = (Columns + 1) * (Rows + 1);
        rest = new Vector3[count];
        vertices = new Vector3[count];
        colors = new Color[count];
        var uv = new Vector2[count];
        var triangles = new int[Columns * Rows * 6];
        for (int y = 0; y <= Rows; y++)
        for (int x = 0; x <= Columns; x++)
        {
            int i = y * (Columns + 1) + x;
            Vector2 p = new Vector2(Mathf.Lerp(bounds.min.x, bounds.max.x, x / (float)Columns),
                Mathf.Lerp(bounds.min.y, bounds.max.y, y / (float)Rows));
            Vector2 d = p - sv[a];
            float u = (d.x * ac.y - d.y * ac.x) / determinant;
            float v = (ab.x * d.y - ab.y * d.x) / determinant;
            uv[i] = su[a] + u * (su[b] - su[a]) + v * (su[c] - su[a]);
            rest[i] = new Vector3(Source.flipX ? -p.x : p.x, Source.flipY ? -p.y : p.y, 0);
            colors[i] = Source.color;
            if (x == Columns || y == Rows) continue;
            int t = (y * Columns + x) * 6;
            triangles[t] = i; triangles[t + 1] = i + Columns + 1; triangles[t + 2] = i + 1;
            triangles[t + 3] = i + 1; triangles[t + 4] = i + Columns + 1; triangles[t + 5] = i + Columns + 2;
        }
        mesh = new Mesh { name = "Dress fabric motion (runtime)" };
        mesh.MarkDynamic();
        mesh.vertices = rest; mesh.uv = uv; mesh.colors = colors; mesh.triangles = triangles;
        var child = new GameObject("Fabric motion visual");
        child.layer = gameObject.layer;
        child.transform.SetParent(transform, false);
        child.AddComponent<MeshFilter>().sharedMesh = mesh;
        visual = child.AddComponent<MeshRenderer>();
        visual.sharedMaterial = Source.sharedMaterial;
        visual.shadowCastingMode = UnityEngine.Rendering.ShadowCastingMode.Off;
        visual.receiveShadows = false;
        properties = new MaterialPropertyBlock();
        Source.GetPropertyBlock(properties);
        properties.SetTexture("_MainTex", sprite.texture);
        properties.SetColor("_Color", Color.white);
        properties.SetColor("_RendererColor", Color.white);
        visual.SetPropertyBlock(properties);
        originalForceOff = Source.forceRenderingOff;
        initialized = true;
        ResetMotion();
    }

    void ResetMotion()
    {
        previousPosition = transform.position;
        previousShuttle = Shuttle != null ? Shuttle.position : Vector3.zero;
        previousBar = Bar != null ? Bar.position : Vector3.zero;
        displacement = speed = clock = 0;
    }

    void OnEnable() { if (initialized) ResetMotion(); }

    void LateUpdate()
    {
        Advance(Time.deltaTime);
    }

    void Advance(float dt)
    {
        if (!initialized) Build();
        if (!initialized) return;
        visual.enabled = Source.enabled;
        Source.forceRenderingOff = true;
        visual.sortingLayerID = Source.sortingLayerID;
        visual.sortingOrder = Source.sortingOrder;
        if (dt <= 0 || (GameManager.instance != null && GameManager.instance.isPaused))
        {
            previousPosition = transform.position;
            previousShuttle = Shuttle != null ? Shuttle.position : Vector3.zero;
            previousBar = Bar != null ? Bar.position : Vector3.zero;
            return;
        }
        dt = Mathf.Min(dt, .05f);
        float target = 0;
        var bounds = Source.bounds;
        if (Threads)
        {
            float movement = 0;
            if (Shuttle != null && Shuttle.gameObject.activeInHierarchy && bounds.Contains(new Vector3(Shuttle.position.x, Shuttle.position.y, bounds.center.z)))
                movement += (Shuttle.position.x - previousShuttle.x) / dt;
            if (Bar != null && Bar.gameObject.activeInHierarchy && Bar.position.y > bounds.min.y && Bar.position.y < bounds.max.y)
                movement += (Bar.position.y - previousBar.y) / dt;
            target = Mathf.Clamp(movement * .012f, -MaxWorldDeflection, MaxWorldDeflection);
        }
        else if (Drag != null && Drag.isDragging)
        {
            Vector3 velocity = (transform.position - previousPosition) / dt;
            target = Mathf.Clamp(-velocity.x * .075f - velocity.y * .018f, -MaxWorldDeflection, MaxWorldDeflection);
        }
        // Substeps keep the lightly damped spring stable even on slower phones.
        int steps = Mathf.CeilToInt(dt / .008f);
        float h = dt / steps;
        for (int i = 0; i < steps; i++)
        {
            speed += ((target - displacement) * 95f - speed * 9f) * h;
            displacement = Mathf.Clamp(displacement + speed * h, -MaxWorldDeflection, MaxWorldDeflection);
        }
        clock += dt;
        float localAmount = displacement / Mathf.Max(Mathf.Abs(transform.lossyScale.x), .001f);
        for (int y = 0; y <= Rows; y++)
        for (int x = 0; x <= Columns; x++)
        {
            int i = y * (Columns + 1) + x;
            float down = 1f - y / (float)Rows;
            float across = x / (float)Columns;
            // threads.png includes the wooden crossbars: keep those and the lower frame rigid.
            float threadSpan = Mathf.Clamp01(down / .69f);
            float weight = Chain ? Mathf.Pow(Mathf.Sin(across * Mathf.PI), 2f) * Mathf.SmoothStep(0f, 1f, down)
                : Threads ? Mathf.Pow(Mathf.Sin(threadSpan * Mathf.PI), 2f) : OutfitWeight(across, down);
            float ripple = Threads ? Mathf.Sin(across * 31f + down * 5f + clock * 18f)
                : .8f + .2f * Mathf.Sin(down * 7f - clock * 9f + across * 3f);
            Vector3 direction = Chain ? new Vector3(.3f, 1f, 0f) : Vector3.right;
            vertices[i] = rest[i] + direction * (localAmount * weight * ripple);
            colors[i] = Source.color;
        }
        mesh.vertices = vertices;
        mesh.colors = colors;
        mesh.RecalculateBounds();
        previousPosition = transform.position;
        previousShuttle = Shuttle != null ? Shuttle.position : Vector3.zero;
        previousBar = Bar != null ? Bar.position : Vector3.zero;
    }

    // Painted regions of Step 9/Layer 5: cape tails > trouser legs > sleeves.
    // All ramps start at zero so the jacket, shoulders and hanger remain fixed.
    static float OutfitWeight(float across, float down)
    {
        float side = Mathf.Abs(across - .5f);
        float cape = Mathf.SmoothStep(0f, 1f, Mathf.InverseLerp(.19f, .29f, side))
            * Mathf.SmoothStep(0f, 1f, Mathf.InverseLerp(.55f, .88f, down));
        float legs = (1f - Mathf.SmoothStep(0f, 1f, Mathf.InverseLerp(.16f, .23f, side)))
            * Mathf.SmoothStep(0f, 1f, Mathf.InverseLerp(.53f, .97f, down)) * .42f;
        float sleeves = Mathf.SmoothStep(0f, 1f, Mathf.InverseLerp(.23f, .31f, side))
            * Mathf.SmoothStep(0f, 1f, Mathf.InverseLerp(.28f, .55f, down))
            * (1f - Mathf.SmoothStep(0f, 1f, Mathf.InverseLerp(.58f, .66f, down))) * .16f;
        return Mathf.Max(cape, Mathf.Max(legs, sleeves));
    }

    void OnDisable()
    {
        if (!initialized) return;
        Source.forceRenderingOff = originalForceOff;
        visual.enabled = false;
    }

    void OnDestroy()
    {
        if (Source != null && initialized) Source.forceRenderingOff = originalForceOff;
        if (visual != null)
        {
            if (Application.isPlaying) Destroy(visual.gameObject);
            else DestroyImmediate(visual.gameObject);
        }
        if (mesh != null)
        {
            if (Application.isPlaying) Destroy(mesh);
            else DestroyImmediate(mesh);
        }
    }
}
