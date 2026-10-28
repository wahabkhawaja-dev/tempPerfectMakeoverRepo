using UnityEngine;
using DG.Tweening;

// A torn seam that closes only where the needle passes (casket step 4). The torn sprite is skinned with one
// left/right bone pair per row along each tear; while the tool scratches, the path the needle swept since the
// last frame is tested against every row, and each row it crosses pulls its two lips together onto the seam.
// Sweeping the segment (not a trigger per row) means a fast drag can't skip rows.
//
// The tool's scratch cards (stitched restore + this sprite's erase) can't complete on their own: their limits
// stay unreachable until the whole seam is sewn, then they are opened so CG_BD_Progress completes as usual.
public class CG_SeamStitch : MonoBehaviour
{
    [System.Serializable]
    public class Row
    {
        public Transform Left;
        public Transform Right;
        public Vector3 LeftClosed;
        public Vector3 RightClosed;
        public Vector2 Center;      // seam point of the row, in this sprite's local space
        public float HalfWidth;     // half the open gap, local units
        public bool Sewn;
    }

    public Transform Tip;
    public BD_Progress Progress;
    public Row[] Rows;

    [Space()]
    [Tooltip("How far above/below the needle a row still counts as under it (local units).")]
    public float RowReach = .17f;
    [Tooltip("Sideways slack beyond the gap's half width (local units).")]
    public float SideReach = .3f;
    [Tooltip("Share of rows that must be sewn; the rest close on their own when the seam completes.")]
    [Range(0f, 1f)] public float CompleteShare = .97f;

    [Space()]
    public float PullDuration = .3f;
    public Ease PullEase = Ease.OutSine;

    [Space()]
    public AudioClip StitchClip;
    public float StitchClipGap = .12f;

    int sewnCount;
    bool isComplete;
    bool hadTip;
    Vector2 lastTip;
    float lastClipTime;

    void Start()
    {
        // Scratch cards wait for the seam.
        foreach (ScratchData data in Progress.AllScratches)
            data.scratchLimit = data.ScratchManager.Mode == ScratchCardAsset.ScratchCard.ScratchMode.Erase ? 2f : -1f;
    }

    void Update()
    {
        if (isComplete || !IsSewing())
        {
            hadTip = false;
            return;
        }

        Vector2 tip = transform.InverseTransformPoint(Tip.position);
        Vector2 from = hadTip ? lastTip : tip;

        lastTip = tip;
        hadTip = true;

        bool sewedAny = false;

        for (int i = 0; i < Rows.Length; i++)
        {
            Row row = Rows[i];

            if (row.Sewn)
                continue;

            Vector2 p = ClosestOnSegment(from, tip, row.Center);

            if (Mathf.Abs(p.y - row.Center.y) > RowReach || Mathf.Abs(p.x - row.Center.x) > row.HalfWidth + SideReach)
                continue;

            Sew(row);
            sewedAny = true;
        }

        if (sewedAny && StitchClip != null && Time.time - lastClipTime > StitchClipGap)
        {
            lastClipTime = Time.time;
            AudioController.instance.PlayAnySfx(Random.Range(0, 3), StitchClip, 0);
        }

        if (sewnCount >= Rows.Length * CompleteShare)
            Complete();
    }

    bool IsSewing()
    {
        return Progress.thisDrag != null && Progress.thisDrag.isDragging;
    }

    void Sew(Row row)
    {
        row.Sewn = true;
        sewnCount++;

        row.Left.DOKill();
        row.Right.DOKill();
        row.Left.DOLocalMove(row.LeftClosed, PullDuration).SetEase(PullEase);
        row.Right.DOLocalMove(row.RightClosed, PullDuration).SetEase(PullEase);
    }

    void Complete()
    {
        isComplete = true;

        foreach (Row row in Rows)
            if (!row.Sewn)
                Sew(row);

        foreach (ScratchData data in Progress.AllScratches)
            data.scratchLimit = data.ScratchManager.Mode == ScratchCardAsset.ScratchCard.ScratchMode.Erase ? -1f : 2f;
    }

    // Instantly sewn (level resumed past this step).
    public void ForceComplete()
    {
        isComplete = true;

        foreach (Row row in Rows)
        {
            row.Sewn = true;
            row.Left.localPosition = row.LeftClosed;
            row.Right.localPosition = row.RightClosed;
        }
    }

    static Vector2 ClosestOnSegment(Vector2 a, Vector2 b, Vector2 p)
    {
        Vector2 ab = b - a;
        float len = ab.sqrMagnitude;

        if (len < 1e-8f)
            return a;

        return a + ab * Mathf.Clamp01(Vector2.Dot(p - a, ab) / len);
    }
}
