using UnityEngine;
using UnityEngine.Events;

// A garment bag's zipper, worked like a real one. The pull (a CG_BasicDrag clamped to a line down the bag's
// middle, Top -> Bottom) is dragged one way: down to open the bag, up to close it. The opening is the open
// bag's art (OpenArt, the whole image as a mesh drawn over the closed bag). Each row of the art has the inside of
// the opening in the middle and, outside it, the band of teeth and piping: the inside is squeezed narrower and
// the band is moved bodily in against it (never squeezed - the teeth keep their size), so the teeth run along a
// smooth V from the top of the zip into the top of the slider, and the open art's own shape takes over as the
// pull nears the bottom. The tip is hidden under the slider. What is inside the bag is drawn through a
// SpriteMask with exactly the same inside (Lens), so closing hides it.
//
// Begin(true) waits for the bag to be opened (pull at the bottom: OnOpened), Begin(false) for it to be closed
// again (pull back at the top: OnClosed); the step's own script lets the player at the pull.
public class CG_ZipperBag : MonoBehaviour
{
    [Space()]
    [Tooltip("The zipper's slider - dragged along Top -> Bottom (clamped to that line).")]
    public BasicDrag Pull;

    [Tooltip("Where the pull sits with the bag closed.")]
    public Transform Top;

    [Tooltip("Where the pull sits with the bag fully open.")]
    public Transform Bottom;

    [Header("----------------- OPENING ----------------------")]
    [Space()]
    [Tooltip("The mesh the opening is drawn on (MeshFilter + MeshRenderer, at the open art's place over the closed bag).")]
    public MeshFilter Opening;

    [Tooltip("The open bag's art (the opening only), 100 pixels per unit, centre pivot.")]
    public Sprite OpenArt;

    [Tooltip("Rows (pixels from the top of OpenArt) where the teeth start and where they meet at the pull, and the zip line's x.")]
    public float TopRow = 31f;
    public float PullRow = 1248f;
    public float MidX = 309.3f;

    [Tooltip("How wide the V is: pixels of half-width the opening gains per row above the slider - narrow when the bag has just begun to open, wider once it is nearly open.")]
    public Vector2 Slope = new Vector2(.2f, .5f);

    [Tooltip("Rows the tip of the opening reaches under the slider's top, so it never shows above it.")]
    public float TipHide = 22f;

    [Tooltip("How sharply the V meets the open art's own widest shape (higher = closer to a corner).")]
    public float Blend = 6f;

    [Tooltip("Mesh rows the opening is drawn with (4 vertices each: the art's left edge, the inside's two edges, the right edge).")]
    public int Rows = 200;

    [Header("----------------- INSIDE ----------------------")]
    [Space()]
    [Tooltip("Mask for what is inside (a child of the opening's object); its sprite is made here.")]
    public SpriteMask Lens;

    [Tooltip("The opening's inside, per sampled row of OpenArt (LensStep pixels apart): left and right pixel x, 0 = none.")]
    public float[] LensLeft;
    public float[] LensRight;
    public int LensStep = 3;

    [Space()]
    [Tooltip("Open once the pull is this far down (0..1); closed once it is this far back up.")]
    [Range(.5f, 1f)]
    public float DoneAt = .97f;

    [Space()]
    public FloatEvent OnChanged;
    public UnityEvent OnOpened;
    public UnityEvent OnClosed;

    // 0 closed .. 1 open
    public float Openness { get; private set; }

    enum Goal { None, Open, Close }

    Goal goal;
    float lastReported = -1f;
    float furthest;

    float[] inL, inR;        // per lens row: the open art's inside, pixels left / right of MidX (smoothed)
    Mesh mesh;
    Vector3[] verts;
    float[] restY;           // per mesh row: y (local units)
    float[] meshY;           // per mesh row: y (pixels from the top of the art)
    Material material;
    Texture2D lensTex;
    Color32[] lensPixels;
    bool built;

    void Awake()
    {
        Build();
        Apply(Openness);
    }

    void Build()
    {
        if (built || Opening == null || OpenArt == null)
            return;

        built = true;

        // the whole image (the sprite's own rect can be trimmed to what is drawn - the pivot and every row
        // number here are the whole image's)
        Texture2D tex = OpenArt.texture;
        float w = tex.width, h = tex.height;

        int rows = Mathf.Max(8, Rows);
        int n = 4 * (rows + 1);

        verts = new Vector3[n];
        restY = new float[rows + 1];
        meshY = new float[rows + 1];
        var uvs = new Vector2[n];
        var tris = new int[3 * rows * 6];

        BuildArtWidth();

        for (int j = 0; j <= rows; j++)
        {
            float py = h * j / rows;                              // pixels from the top

            meshY[j] = py;
            restY[j] = (h / 2f - py) / OpenArt.pixelsPerUnit;

            float il = Mathf.Max(InsideAt(inL, py), 0f), ir = Mathf.Max(InsideAt(inR, py), 0f);
            float[] srcX = { 0f, MidX - il, MidX + ir, w };

            for (int k = 0; k < 4; k++)
                uvs[4 * j + k] = new Vector2(srcX[k] / w, 1f - py / h);
        }

        int t = 0;

        for (int j = 0; j < rows; j++)
            for (int k = 0; k < 3; k++)
            {
                int a0 = 4 * j + k, b0 = a0 + 1, c0 = a0 + 4, d0 = c0 + 1;

                tris[t++] = a0; tris[t++] = b0; tris[t++] = c0;
                tris[t++] = b0; tris[t++] = d0; tris[t++] = c0;
            }

        mesh = new Mesh { name = "Zip Opening" };
        mesh.MarkDynamic();
        mesh.vertices = new Vector3[n];
        mesh.uv = uvs;
        mesh.triangles = tris;
        Opening.sharedMesh = mesh;

        material = LunaMaterials.SpriteDefault(Opening.GetComponent<MeshRenderer>().sharedMaterial); // [Luna] Shader.Find can miss there
        material.mainTexture = tex;
        Opening.GetComponent<MeshRenderer>().sharedMaterial = material;

        // the mask for what is inside: a small texture
        if (Lens != null)
        {
            int lw = Mathf.CeilToInt(w / LensStep), lh = Mathf.CeilToInt(h / LensStep);

            lensTex = new Texture2D(lw, lh, TextureFormat.RGBA32, false);
            lensTex.wrapMode = TextureWrapMode.Clamp;
            lensTex.filterMode = FilterMode.Bilinear;
            lensPixels = new Color32[lw * lh];

            Lens.sprite = Sprite.Create(lensTex, new Rect(0, 0, lw, lh), new Vector2(.5f, .5f), OpenArt.pixelsPerUnit / LensStep);
            Lens.alphaCutoff = .5f;
        }
    }

    // The art's inside of the opening per sampled row (LensLeft / LensRight against MidX), made smooth: rows with
    // none are 0 (above the top of the zip), and small wobbles of the art are filtered out.
    void BuildArtWidth()
    {
        if (LensLeft == null || LensLeft.Length < 8)
        {
            inL = inR = null;

            return;
        }

        int n = LensLeft.Length;
        var l = new float[n];
        var r = new float[n];

        for (int i = 0; i < n; i++)
            if (LensRight[i] - LensLeft[i] > 6f)
            {
                l[i] = MidX - LensLeft[i];
                r[i] = LensRight[i] - MidX;
            }

        inL = Smooth(l);
        inR = Smooth(r);
    }

    static float[] Smooth(float[] a)
    {
        int n = a.Length;
        var cur = a;

        for (int pass = 0; pass < 2; pass++)
        {
            var dst = new float[n];

            for (int i = 0; i < n; i++)
            {
                float sum = 0f;
                int c = 0;

                for (int k = -4; k <= 4; k++)
                {
                    int q = i + k;

                    // the ends of the zip keep their own value (no smoothing into the empty rows around them)
                    if (q >= 0 && q < n && (cur[i] > 0f) == (cur[q] > 0f))
                    {
                        sum += cur[q];
                        c++;
                    }
                }

                dst[i] = c > 0 ? sum / c : cur[i];
            }

            cur = dst;
        }

        return cur;
    }

    float InsideAt(float[] arr, float y)
    {
        if (arr == null)
            return 0f;

        float f = y / LensStep - .5f;
        int i = Mathf.Clamp(Mathf.FloorToInt(f), 0, arr.Length - 1);
        int j = Mathf.Min(i + 1, arr.Length - 1);

        return Mathf.Lerp(arr[i], arr[j], Mathf.Clamp01(f - i));
    }

    // Start waiting for the bag to be opened (opening) or closed.
    public void Begin(bool opening)
    {
        Build();

        goal = opening ? Goal.Open : Goal.Close;
        lastReported = -1f;
        furthest = Openness;
    }

    // Straight to a state (resuming): the opening and the pull put there, nothing waited for.
    public void SetOpenness(float p)
    {
        Build();

        goal = Goal.None;
        Apply(p);
        PlacePull(p);
    }

    void Update()
    {
        if (goal == Goal.None || Pull == null || Top == null || Bottom == null)
            return;

        float t = PullT();

        // one way only: down while it is being opened, up while it is being closed
        if (goal == Goal.Open)
            furthest = Mathf.Max(furthest, t);
        else
            furthest = Mathf.Min(furthest, t);

        Apply(furthest);

        if (Mathf.Abs(furthest - lastReported) > .002f)
        {
            lastReported = furthest;
            OnChanged?.Invoke(furthest);
        }

        if (goal == Goal.Open && furthest >= DoneAt)
            Finish(1f, OnOpened);
        else if (goal == Goal.Close && furthest <= 1f - DoneAt)
            Finish(0f, OnClosed);
    }

    // After the drag has moved the pull this frame: it is held at the furthest point reached, so it cannot go back.
    void LateUpdate()
    {
        if (goal == Goal.None || Pull == null || Top == null || Bottom == null)
            return;

        if (goal == Goal.Open ? PullT() < furthest : PullT() > furthest)
            PlacePull(furthest);
    }

    // The pull's place along Top -> Bottom, 0..1.
    float PullT()
    {
        Vector3 ab = Bottom.position - Top.position;
        float len = ab.sqrMagnitude;

        if (len < 1e-6f)
            return 0f;

        return Mathf.Clamp01(Vector3.Dot(Pull.transform.position - Top.position, ab) / len);
    }

    void Finish(float p, UnityEvent done)
    {
        goal = Goal.None;

        Apply(p);
        PlacePull(p);
        OnChanged?.Invoke(p);

        done?.Invoke();
    }

    void PlacePull(float p)
    {
        if (Pull == null || Top == null || Bottom == null)
            return;

        Vector3 pos = Vector3.Lerp(Top.position, Bottom.position, p);
        pos.z = Pull.transform.position.z;
        Pull.transform.position = pos;
    }

    // The half-width the inside of the opening gets at row y (pixels from the top of the art): a straight V into the
    // slider - kept within the art's own inside (a smooth minimum of the two, so there is no corner where they
    // meet). 0 at and below the tip.
    float InnerHalf(float inside, float y, float pullY, float openness)
    {
        float d = pullY - y;

        if (d <= 0f || inside <= 0f)
            return 0f;

        float vee = Mathf.Lerp(Slope.x, Slope.y, openness) * d;

        if (vee < .5f)
            return 0f;

        float p = Mathf.Max(Blend, 1f);

        return Mathf.Pow(Mathf.Pow(inside, -p) + Mathf.Pow(vee, -p), -1f / p);
    }

    // The opening at p: every row's inside narrowed onto the V, its band of teeth moved in against it.
    void Apply(float p)
    {
        Build();

        if (mesh == null)
            return;

        Openness = Mathf.Clamp01(p);

        bool show = Openness > .004f;

        if (Opening.gameObject.activeSelf != show)
            Opening.gameObject.SetActive(show);

        if (!show)
            return;

        float ppu = OpenArt.pixelsPerUnit;
        float w = OpenArt.texture.width;
        float pullY = Mathf.Lerp(TopRow, PullRow, Openness) + TipHide;
        float midLocal = (MidX - w / 2f) / ppu;
        int rows = restY.Length - 1;

        for (int j = 0; j <= rows; j++)
        {
            float py = meshY[j];
            float il = Mathf.Max(InsideAt(inL, py), 0f), ir = Mathf.Max(InsideAt(inR, py), 0f);
            float hl = InnerHalf(il, py, pullY, Openness), hr = InnerHalf(ir, py, pullY, Openness);
            float y = restY[j];

            if (il <= 0f && ir <= 0f)
            {
                // above the top of the zip: as drawn
                verts[4 * j] = new Vector3(midLocal - MidX / ppu, y, 0f);
                verts[4 * j + 1] = new Vector3(midLocal, y, 0f);
                verts[4 * j + 2] = new Vector3(midLocal, y, 0f);
                verts[4 * j + 3] = new Vector3(midLocal + (w - MidX) / ppu, y, 0f);

                continue;
            }

            if (hl <= 0f && hr <= 0f && py >= pullY)
            {
                // at / below the tip: nothing
                for (int k = 0; k < 4; k++)
                    verts[4 * j + k] = new Vector3(midLocal, y, 0f);

                continue;
            }

            verts[4 * j] = new Vector3(midLocal + (-MidX + (il - hl)) / ppu, y, 0f);
            verts[4 * j + 1] = new Vector3(midLocal - hl / ppu, y, 0f);
            verts[4 * j + 2] = new Vector3(midLocal + hr / ppu, y, 0f);
            verts[4 * j + 3] = new Vector3(midLocal + ((w - MidX) - (ir - hr)) / ppu, y, 0f);
        }

        mesh.vertices = verts;
        mesh.RecalculateBounds();

        UpdateLens(pullY);
    }

    void UpdateLens(float pullY)
    {
        if (Lens == null || lensTex == null || inL == null)
            return;

        int lw = lensTex.width, lh = lensTex.height;

        System.Array.Clear(lensPixels, 0, lensPixels.Length);

        var white = new Color32(255, 255, 255, 255);

        for (int row = 0; row < lh && row < inL.Length; row++)
        {
            float y = row * LensStep + LensStep * .5f;
            float hl = InnerHalf(inL[row], y, pullY, Openness), hr = InnerHalf(inR[row], y, pullY, Openness);

            if (hl <= 0f && hr <= 0f)
                continue;

            int x0 = Mathf.Max(0, Mathf.FloorToInt((MidX - hl) / LensStep));
            int x1 = Mathf.Min(lw - 1, Mathf.CeilToInt((MidX + hr) / LensStep));

            // the texture's row 0 is the bottom of the art
            int dst = (lh - 1 - row) * lw;

            for (int x = x0; x <= x1; x++)
                lensPixels[dst + x] = white;
        }

        lensTex.SetPixels32(lensPixels);
        lensTex.Apply(false);
    }

    void OnDestroy()
    {
        if (mesh != null) Destroy(mesh);
        if (material != null) Destroy(material);
        if (lensTex != null) Destroy(lensTex);
    }
}
