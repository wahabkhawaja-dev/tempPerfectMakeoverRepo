using UnityEngine;

/// <summary>
/// Starts the pour drip while the spoon is actually being held. BasicDrag's own pick-up /
/// drop is what drives the tilt (canRotateOnPick), so hooking its OnMouseDownEvent /
/// OnMouseUpEvent keeps the stream exactly in sync with the rotation instead of guessing
/// at a separate timer.
/// </summary>
public class Lvl3_DripTrigger : MonoBehaviour
{
    [Tooltip("The tool being dragged/rotated. Found on this object or a parent if left empty.")]
    public BasicDrag tool;

    [Tooltip("The drip stream to switch on/off.")]
    public GameObject dripStream;

    Lvl3_DripAnimator dripAnimator;

    void Awake()
    {
        if (tool == null)
            tool = GetComponentInParent<BasicDrag>();

        if (dripStream != null)
            dripAnimator = dripStream.GetComponent<Lvl3_DripAnimator>();
    }

    void OnEnable()
    {
        if (tool == null)
            return;

        tool.OnMouseDownEvent += StartDrip;
        tool.OnMouseUpEvent += EndDrip;
    }

    void OnDisable()
    {
        if (tool == null)
            return;

        tool.OnMouseDownEvent -= StartDrip;
        tool.OnMouseUpEvent -= EndDrip;
    }

    void StartDrip()
    {
        if (dripStream == null)
            return;

        CancelInvoke(nameof(StopDrip));
        dripStream.SetActive(true);
    }

    void EndDrip()
    {
        if (dripStream == null || !dripStream.activeSelf)
            return;

        if (dripAnimator != null)
        {
            dripAnimator.PlayEnding();

            // Let the tapering-off frames actually play before cutting the stream, instead
            // of switching off on the same frame the pour is released.
            float endDuration = dripAnimator.endFrames != null && dripAnimator.endFrames.Length > 0
                ? dripAnimator.endFrames.Length / Mathf.Max(dripAnimator.fps, 0.0001f)
                : 0f;

            Invoke(nameof(StopDrip), endDuration);
        }
        else
        {
            StopDrip();
        }
    }

    void StopDrip()
    {
        if (dripStream != null)
            dripStream.SetActive(false);
    }
}
