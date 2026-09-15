using System;
using UnityEngine;

/// <summary>
/// Single-scene stand-in for the game's Fix-It scene reload.
///
/// In the full game an inner level (broken wax machine / shower / stove) is reached by setting
/// partToPlay and reloading the scene, and left the same way. A playable cannot load scenes, so
/// the wizard rewrites both reloads into Enter() / Return(), and places BOTH built levels in the
/// scene: the main level active, its Fix-It level INACTIVE. The hop only switches them, so the
/// browser never instantiates a level and the Fix-It level runs no script until it is needed.
///
/// Enter(): main level off, Fix-It level bound and switched on (its Start() runs fresh).
/// Return(): Fix-It level marked completed and destroyed, main level switched back on and
/// ResumeOuter() re-enters its Fix-It step — which now reads "fixed" from the save.
/// </summary>
public class PlayableInnerLevel : MonoBehaviour
{
    [Tooltip("Built playable of the MAIN level (the one with the Fix-It button), placed in the scene.")]
    [SerializeField] LevelData outerLevel;

    [Tooltip("Built playable of the Fix-It level, placed in the scene and left INACTIVE.")]
    [SerializeField] LevelData innerLevel;

    [Tooltip("Seconds to fade to black before the swap.")]
    [SerializeField] float fadeDuration = 0.35f;

    /// <summary>Set by the generated main level's Start(): re-enters its Fix-It step after Return().</summary>
    public static Action ResumeOuter;

    /// <summary>Only read by playables built before the in-scene toggle; rebuild those from the Step Wizard.</summary>
    public static bool Resuming;

    static PlayableInnerLevel active;
    bool swapping;
    bool insideFixIt;

    void Awake()
    {
        active = this;
        ResumeOuter = null;

        if (innerLevel != null)
            innerLevel.gameObject.SetActive(false);
    }

    /// <summary>Main level → Fix-It level. Wired in by the wizard.</summary>
    public static void Enter()
    {
        Swap(true);
    }

    /// <summary>Fix-It level finished → back to the main level, at its Fix-It step.</summary>
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

        // A level can reach its hop twice (return hop + a trimmed step's completion); only the first counts.
        if (active.swapping || active.insideFixIt == toInner)
            return;

        if (active.outerLevel == null || active.innerLevel == null)
        {
            Debug.LogError("[PlayableInnerLevel] outerLevel / innerLevel not assigned — rebuild the playable from the Step Wizard.");
            return;
        }

        active.swapping = true;
        PlayableFadeCover.Cover(active.fadeDuration, toInner ? (Action)active.ShowInner : active.ShowOuter);
    }

    void ShowInner()
    {
        outerLevel.gameObject.SetActive(false);

        // Bind before activating: the Fix-It level's Start() reads levelToPlay / partToPlay the instant it wakes.
        GameManager.instance.BindLevel(innerLevel);
        innerLevel.gameObject.SetActive(true);

        insideFixIt = true;
        swapping = false;
        PlayableFadeCover.Reveal();
    }

    void ShowOuter()
    {
        // A trimmed Fix-It level may never reach the step that saves this, and the main level's
        // Is...Fixed() gate reads it — without it the broken art would come straight back.
        MarkCompleted(innerLevel.gameObject.name);

        innerLevel.gameObject.SetActive(false);
        // ponytail: one fix per session, so the Fix-It level is freed for good; keep it if a level can break twice.
        Destroy(innerLevel.gameObject);

        GameManager.instance.BindLevel(outerLevel);
        outerLevel.gameObject.SetActive(true);

        if (outerLevel.Level_BG != null && MusicSource.instance != null)
            MusicSource.instance.PlayMusic(outerLevel.Level_BG);

        insideFixIt = false;
        swapping = false;

        if (ResumeOuter != null)
            ResumeOuter();
        else
            PlayableFadeCover.Reveal();
    }

    /// <summary>Same save slot the game's own completion writes: AllLevels[level-1].subLevels[part-1], parsed from "Level{L}_{P}...".</summary>
    static void MarkCompleted(string levelObjectName)
    {
        if (SaveSystem.Instance == null)
            return;

        int at = levelObjectName.IndexOf("Level", StringComparison.Ordinal);
        if (at < 0)
            return;

        string[] parts = levelObjectName.Substring(at + "Level".Length).Split('_');
        int level, part;
        if (parts.Length < 2 || !int.TryParse(parts[0], out level) || !int.TryParse(parts[1], out part))
            return;

        level--;
        part--;

        var all = SaveSystem.Instance.DataFields.AllLevels;
        if (all == null || level < 0 || level >= all.Length)
            return;

        var subs = all[level].subLevels;
        if (subs == null || part < 0 || part >= subs.Length)
            return;

        subs[part].isCompleted = true;
    }
}
