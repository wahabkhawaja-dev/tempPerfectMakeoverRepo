// [Luna] Adapted for playables by Cross-Project Prefab Importer.
using MoreMountains.NiceVibrations;
using UnityEngine;

// A step's sound and vibration while the player works it: a looping AudioSource (its clip is set in the
// prefab - none = silent) and a continuous vibration. The step's own script calls Set(on) every frame; only
// changes do anything. The sound pauses and picks up where it was.
[System.Serializable]
public class CG_LoopFeedback
{
    public AudioSource Source;

    [Tooltip("Off by default, so the scripts that carry one don't start vibrating in levels that never set it up.")]
    public bool Vibrate;
    public HapticTypes Haptic = HapticTypes.LightImpact;

    [System.NonSerialized] bool on;

    public bool IsOn { get { return on; } }

    public void Set(bool play)
    {
        if (play == on)
            return;

        on = play;

        if (Source != null && Source.clip != null && Source.enabled && Source.gameObject.activeInHierarchy)
        {
            if (play)
            {
                if (Source.time > 0f)
                    Source.UnPause();
                else
                    Source.Play();
            }
            else
            {
                Source.Pause();
            }
        }

        if (Vibrate && CG_VibrationManager.instance != null)
        {
            if (play)
                { /* [Luna] stripped: CG_VibrationManager.instance.StartVibration(Haptic); */ }
            else
                { /* [Luna] stripped: CG_VibrationManager.instance.StopVibration(); */ }
        }
    }
}
