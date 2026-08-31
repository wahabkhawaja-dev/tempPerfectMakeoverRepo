using UnityEngine;

/// <summary>
/// Single-scene stand-in for the game's Fix-It scene reload.
///
/// In the full game an inner level (broken wax machine / shower / stove) is reached by
/// setting partToPlay and reloading the scene, and left the same way. A playable cannot
/// load scenes, so the wizard rewrites both of those reloads into Enter() / Return() and
/// this component does the swap in place: destroy the live level, instantiate the other
/// one, re-bind it on the GameManager. Same fresh-instance semantics as the reload, which
/// is why nothing has to be reset by hand.
///
/// Both prefabs are the WIZARD-BUILT playable prefabs, not the originals.
///
/// ponytail: both prefabs stay referenced, so both are in RAM for the whole session —
/// that is the price of shipping the inner level. Drop the toggle if Luna flags LP1024.
/// </summary>
public class PlayableInnerLevel : MonoBehaviour
{
    [Tooltip("Built playable prefab of the OUTER level (the one with the Fix-It button).")]
    [SerializeField] GameObject outerPrefab;

    [Tooltip("Built playable prefab of the INNER Fix-It level.")]
    [SerializeField] GameObject innerPrefab;

    [Tooltip("Seconds to fade to black before the swap.")]
    [SerializeField] float fadeDuration = 0.35f;

    /// <summary>
    /// Set by Return(), read (and cleared) by the generated outer level's Start(): it means
    /// "boot straight into the Fix-It step" instead of replaying from the first kept step.
    /// Replaces the stepsDone the scene reload used to carry.
    /// </summary>
    public static bool Resuming;

    static PlayableInnerLevel active;

    void Awake()
    {
        active = this;
        Resuming = false;
    }

    /// <summary>Outer level → inner Fix-It level. Wired in by the wizard.</summary>
    public static void Enter()
    {
        Swap(true);
    }

    /// <summary>Inner Fix-It level finished → back to the outer level, at the Fix-It step.</summary>
    public static void Return()
    {
        Swap(false);
    }

    static void Swap(bool toInner)
    {
        if (active == null)
        {
            Debug.LogError("[PlayableInnerLevel] No PlayableInnerLevel in the scene — rebuild the playable from the Step Wizard.");
            return;
        }

        GameObject prefab = toInner ? active.innerPrefab : active.outerPrefab;
        if (prefab == null)
        {
            Debug.LogError("[PlayableInnerLevel] " + (toInner ? "innerPrefab" : "outerPrefab") + " not assigned.");
            return;
        }

        Resuming = !toInner;
        PlayableFadeCover.Cover(active.fadeDuration, delegate { active.DoSwap(prefab); });
    }

    void DoSwap(GameObject prefab)
    {
        GameManager gm = GameManager.instance;
        LevelData current = gm != null ? gm.currentLevel : FindObjectOfType<LevelData>();

        Vector3 pos = current != null ? current.transform.position : Vector3.zero;

        if (current != null)
        {
            // Deactivate before Destroy: Destroy is deferred to end of frame and the outgoing
            // level's Update / DOTween callbacks must not run against the incoming one.
            current.gameObject.SetActive(false);
            Destroy(current.gameObject);
        }

        GameObject go = Instantiate(prefab, pos, Quaternion.identity);

        // GameManager.ApplySaveForSceneLevel parses levelToPlay / partToPlay out of the name,
        // so "(Clone)" aside it has to stay LevelN_M_Playable.
        go.name = prefab.name;

        // Bind before the new level's Start() runs (later this frame) — it reads the save there.
        if (gm != null)
            gm.BindLevel(go.GetComponent<LevelData>());

        PlayableFadeCover.Reveal();
    }
}
