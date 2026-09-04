using UnityEngine;

/// <summary>
/// Drop on any tool with a BasicDrag: every tap opens the store (PlayableCTA.OpenStoreOnly)
/// without pausing the game, ending the playable, or setting PlayableCTA.HasFired — the player
/// can tap-to-peek the store and keep playing normally afterwards.
///
/// Subscribes to BOTH BasicDrag tap events because which one fires depends on canDrag at tap
/// time: OnMouseDownEvent when the tool is already drag-enabled, OnMouseDownEventIndependentFromCanDrag
/// when it isn't yet (ToolInputToggle(false) disables real dragging well before a tool's own
/// step starts) — a tease needs to redirect either way.
/// </summary>
[RequireComponent(typeof(BasicDrag))]
public class TeaseTapCTA : MonoBehaviour
{
    BasicDrag drag;

    void Awake()
    {
        drag = GetComponent<BasicDrag>();
    }

    void OnEnable()
    {
        drag.OnMouseDownEvent += Redirect;
        drag.OnMouseDownEventIndependentFromCanDrag += Redirect;
    }

    void OnDisable()
    {
        drag.OnMouseDownEvent -= Redirect;
        drag.OnMouseDownEventIndependentFromCanDrag -= Redirect;
    }

    void Redirect()
    {
        PlayableCTA.OpenStoreOnly();
    }
}
