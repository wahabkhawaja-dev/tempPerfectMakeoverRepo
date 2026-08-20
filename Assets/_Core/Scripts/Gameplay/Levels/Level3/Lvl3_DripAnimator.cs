using UnityEngine;

/// <summary>
/// Plays the drip frames while this object is active, giving the pour stream its dripping
/// look. Lvl3_PourFill already switches its `stream` object on/off with stream.SetActive() -
/// drop this on that same object and it animates for exactly as long as the object is
/// enabled, no other code needs to change.
///
/// The sheet reads as two parts: DropSheet_0-3 is the drip forming into a full, flowing
/// stream - it plays once and holds on the last frame (a steady pour doesn't restart from a
/// small round drop every cycle). DropSheet_4-5 is the stream thinning out and also plays
/// once, on the way to the mould reading full - call PlayEnding() for that part instead of
/// just switching the object off, or the flow snaps from full to nothing.
/// </summary>
[RequireComponent(typeof(SpriteRenderer))]
public class Lvl3_DripAnimator : MonoBehaviour
{
    [Header("Frames")]
    [Tooltip("Plays once as the drip forms, then holds on the last frame for as long as the " +
             "pour keeps running. DropSheet_0 through DropSheet_3.")]
    public Sprite[] loopFrames;

    [Tooltip("Plays once, on the way to stopping, as the stream tapers off. " +
             "DropSheet_4 and DropSheet_5.")]
    public Sprite[] endFrames;

    [Tooltip("Frames per second.")]
    public float fps = 12f;

    SpriteRenderer sr;
    float timer;
    int frameIndex;
    bool ending;

    void Awake()
    {
        sr = GetComponent<SpriteRenderer>();
    }

    void OnEnable()
    {
        ending = false;
        frameIndex = 0;
        timer = 0f;

        if (loopFrames != null && loopFrames.Length > 0)
            sr.sprite = loopFrames[0];
    }

    void Update()
    {
        var frames = ending ? endFrames : loopFrames;

        if (frames == null || frames.Length == 0)
            return;

        // Both parts hold on their last frame once they get there - the "grow" plays once
        // into a steady stream, the "taper" plays once into nothing, neither loops back.
        if (frameIndex >= frames.Length - 1)
            return;

        timer += Time.deltaTime;

        float frameTime = 1f / Mathf.Max(fps, 0.0001f);

        while (timer >= frameTime && frameIndex < frames.Length - 1)
        {
            timer -= frameTime;
            frameIndex++;
            sr.sprite = frames[frameIndex];
        }
    }

    /// <summary>
    /// Call when the pour is finishing (mould about to read full) to taper the stream off
    /// instead of cutting straight from the full-flow hold to nothing.
    /// </summary>
    public void PlayEnding()
    {
        if (ending)
            return;

        ending = true;
        frameIndex = 0;
        timer = 0f;

        if (endFrames != null && endFrames.Length > 0)
            sr.sprite = endFrames[0];
    }
}
