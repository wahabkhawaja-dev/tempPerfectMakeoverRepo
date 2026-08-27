using System;
using UnityEngine;

/// <summary>
/// Single-scene menu → sub-level switch for a playable.
///
/// The scene holds the menu and every playable sub-level at once (a playable cannot load
/// scenes or stream prefabs). Sub-levels sit in the scene INACTIVE, so none of their
/// Awake/Start runs and no gameplay ticks while the menu is up.
///
/// LOCKING: a slot with a level assigned is playable; a slot with an empty level is locked.
/// That is the whole rule — assign a level to unlock its button, leave it empty to lock it.
/// Lock state is applied in Awake, so the menu is never briefly wrong on the first frame.
///
/// Deliberately knows almost nothing: a menu root, a HUD root, and the slots. The only
/// gameplay call is GameManager.BindLevel — no level scripts, no save code, no CTA.
///
/// NOTE: keep the menu OUTSIDE the PlayableHUD hierarchy. PlayableHudRuntime binds every
/// Button under it straight to the store CTA, which would hijack the sub-level buttons.
/// </summary>
public class PlayableRouter : MonoBehaviour
{
    [Serializable]
    public class SubLevelSlot
    {
        [Tooltip("Menu button for this sub-level.")]
        public SpriteButton button;

        [Tooltip("The sub-level sitting in this scene, left INACTIVE.\n" +
                 "Leave EMPTY to keep this button locked.")]
        public LevelData level;

        public bool Unlocked { get { return level != null; } }
    }

    [Tooltip("Menu root, shown at boot and hidden once a sub-level starts.")]
    [SerializeField] GameObject menu;

    [Tooltip("Gameplay HUD root (progress bar, tool icons). Hidden during the menu, shown on play. Optional.")]
    [SerializeField] GameObject gameplayHud;

    [Tooltip("One entry per menu button. Assign a level to unlock that button; leave the level " +
             "empty to lock it. Array position = the index passed to Play().")]
    [SerializeField] SubLevelSlot[] subLevels;

    [Tooltip("Seconds to fade to black before the menu is swapped for the level.")]
    [SerializeField] float fadeDuration = 0.35f;

    // Child-name prefixes on a SpriteButton for its locked / unlocked art.
    const string LockChildPrefix = "Lock";
    const string IconChildPrefix = "Icon";

    LevelData playing;

    void Awake()
    {
        // The whole design rests on nothing gameplay-side being awake behind the menu,
        // so enforce it here rather than trusting the scene to be saved correctly.
        for (int i = 0; i < subLevels.Length; i++)
        {
            SubLevelSlot slot = subLevels[i];

            if (slot.level != null)
                slot.level.gameObject.SetActive(false);

            ApplyLockState(slot);
        }

        if (gameplayHud != null)
            gameplayHud.SetActive(false);

        if (menu != null)
            menu.SetActive(true);
    }

    /// <summary>Locked buttons refuse the tap (SpriteButton.isLocked) and show their lock art.</summary>
    void ApplyLockState(SubLevelSlot slot)
    {
        if (slot.button == null)
            return;

        bool unlocked = slot.Unlocked;

        slot.button.isLocked = !unlocked;

        GameObject lockArt = FindChild(slot.button.transform, LockChildPrefix);
        GameObject iconArt = FindChild(slot.button.transform, IconChildPrefix);

        if (lockArt != null)
            lockArt.SetActive(!unlocked);

        if (iconArt != null)
            iconArt.SetActive(unlocked);
    }

    static GameObject FindChild(Transform parent, string prefix)
    {
        foreach (Transform c in parent)
        {
            if (c.name.StartsWith(prefix, StringComparison.OrdinalIgnoreCase))
                return c.gameObject;
        }

        return null;
    }

    /// <summary>
    /// Unlock a button at runtime by handing it its level (or re-lock it by passing null).
    /// Not needed for the plain "assign in the inspector" flow — this is for a playable that
    /// wants to open a step up mid-session.
    /// </summary>
    public void SetLevel(int index, LevelData level)
    {
        if (index < 0 || index >= subLevels.Length)
            return;

        subLevels[index].level = level;

        if (level != null)
            level.gameObject.SetActive(false);

        ApplyLockState(subLevels[index]);
    }

    /// <summary>Wire a sub-level button's onClick here, passing that button's slot index.</summary>
    public void Play(int index)
    {
        if (playing != null)
            return; // already going into a level — ignore double taps

        if (index < 0 || index >= subLevels.Length)
        {
            Debug.LogError("[PlayableRouter] No slot at index " + index);
            return;
        }

        SubLevelSlot slot = subLevels[index];

        if (!slot.Unlocked)
            return; // locked: no level assigned, so there is nothing to play

        if (GameManager.instance == null)
        {
            Debug.LogError("[PlayableRouter] No GameManager in the scene.");
            return;
        }

        playing = slot.level;

        // Fade to black first, swap underneath, then fade back in — so the level never
        // appears out of nowhere. If there is no fade image the swap still runs.
        PlayableFadeCover.Cover(fadeDuration, SwapToLevel);
    }

    void SwapToLevel()
    {
        if (menu != null)
            menu.SetActive(false);

        if (gameplayHud != null)
            gameplayHud.SetActive(true);

        // Bind BEFORE activating: the level's Start() reads levelToPlay/partToPlay/stepsDone
        // the instant it wakes, so that state has to be in place first.
        GameManager.instance.BindLevel(playing);
        playing.gameObject.SetActive(true);

        DropUnplayedLevels();

        // Activating the level enabled its PlayableFadeCoverSettings, so Reveal() now picks
        // up that level's own hold/fade timings.
        PlayableFadeCover.Reveal();
    }

    /// <summary>
    /// The flow is one-way (menu → level → CTA), so the sub-levels that were not picked are
    /// unreachable dead weight. Dropping them frees their runtime memory, which is what Luna
    /// flags as LP1024 (Huge RAM Usage).
    /// ponytail: destroys them outright; keep them if a back-to-menu button is ever added.
    /// </summary>
    void DropUnplayedLevels()
    {
        for (int i = 0; i < subLevels.Length; i++)
        {
            LevelData lvl = subLevels[i].level;

            if (lvl != null && lvl != playing)
                Destroy(lvl.gameObject);
        }
    }
}
