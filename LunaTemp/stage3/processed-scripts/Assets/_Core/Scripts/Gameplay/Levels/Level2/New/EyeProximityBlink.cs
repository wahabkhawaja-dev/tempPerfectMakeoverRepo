using System.Collections;
using UnityEngine;

// Watches how close each gameplay tool's tip is to the eye area. Inside the radius the eyes
// stay shut; once every nearby tool leaves the eyes open (after a short debounce delay) and
// resume their idle blink-every-N-seconds loop. Only tools flagged canCloseEyes are considered,
// and the check runs regardless of whether the tip's own GameObject is currently enabled or
// disabled.
public class EyeProximityBlink : MonoBehaviour
{
    [System.Serializable]
    public class EyeCloseTool
    {
        public string label;
        public Transform tip;
        public bool canCloseEyes = true;
    }

    [SerializeField] private Level2_Face_New face;
    [SerializeField] private Transform eyeAreaCenter;
    [SerializeField] private float radius = 0.6f;
    [SerializeField] private float blinkDelayAfterLeaving = 2f;

    [Tooltip("How long the tip must stay outside the radius before the eyes actually open. Prevents jerky open/close flicker when hovering right on the radius border.")]
    [SerializeField] private float openDelayAfterExitingRadius = 0.5f;

    [Space]
    [SerializeField] private EyeCloseTool[] tools;

    private bool isInside = false;
    private Coroutine pendingOpenCo;

    void Update()
    {
        bool nowInside = false;

        foreach (var tool in tools)
        {
            if (!tool.canCloseEyes || tool.tip == null)
                continue;

            // Tip's own GameObject may be toggled on/off during normal use (e.g. for other
            // collision systems) - a Transform still reports a valid position while disabled,
            // so the proximity check keeps working either way.
            float dist = Vector2.Distance(tool.tip.position, eyeAreaCenter.position);
            if (dist <= radius)
            {
                nowInside = true;
                break;
            }
        }

        if (nowInside == isInside)
            return;

        isInside = nowInside;

        if (isInside)
        {
            // Entering the radius: close immediately, and cancel any pending "open" from
            // a moment ago so briefly re-entering doesn't get overridden late.
            if (pendingOpenCo != null)
            {
                StopCoroutine(pendingOpenCo);
                pendingOpenCo = null;
            }

            face.CloseEye();
        }
        else
        {
            // Leaving the radius: don't reopen instantly, wait a beat first so hovering
            // right on the border doesn't cause rapid open/close flicker.
            pendingOpenCo = StartCoroutine(DelayedOpen());
        }
    }

    IEnumerator DelayedOpen()
    {
        yield return new WaitForSeconds(openDelayAfterExitingRadius);

        pendingOpenCo = null;
        face.OpenEye(blinkDelayAfterLeaving);
    }

    void OnDrawGizmosSelected()
    {
        if (eyeAreaCenter == null)
            return;

        Gizmos.color = Color.cyan;
        Gizmos.DrawWireSphere(eyeAreaCenter.position, radius);
    }
}
