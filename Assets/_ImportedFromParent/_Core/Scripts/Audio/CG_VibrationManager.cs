// [Luna] Adapted for playables by Cross-Project Prefab Importer.
using UnityEngine;
using System.Collections;
using MoreMountains.NiceVibrations;

public class CG_VibrationManager : MonoBehaviour
{
    public static CG_VibrationManager instance;

    void Awake()
    {
        instance = this;
    }

    #region Impacts

    public void SoftImpact()
    {
        if (PlayerPrefs.GetInt("Vibration", 1) == 1)
            { /* [Luna] stripped: MMVibrationManager.Haptic(HapticTypes.SoftImpact); */ }
    }

    public void HeavyImpact()
    {
        if (PlayerPrefs.GetInt("Vibration", 1) == 1)
            { /* [Luna] stripped: MMVibrationManager.Haptic(HapticTypes.HeavyImpact); */ }
    }

    public void Failure()
    {
        if (PlayerPrefs.GetInt("Vibration", 1) == 1)
            { /* [Luna] stripped: MMVibrationManager.Haptic(HapticTypes.Failure); */ }
    }

    float lastVibrationTime = 0f;
    float vibrationInterval = 0.25f;

    public void LightImpact()
    {
        if (PlayerPrefs.GetInt("Vibration", 1) == 1)
        {
            if (Time.time - lastVibrationTime > vibrationInterval)
            {
                { /* [Luna] stripped: MMVibrationManager.Haptic(HapticTypes.LightImpact); */ }

                // MediumImpact ko interval ke saath play karein
                lastVibrationTime = Time.time;
            }
        }
    }

    public void MediumImpact()
    {
        if (PlayerPrefs.GetInt("Vibration", 1) == 1)
        {
            if (Time.time - lastVibrationTime > vibrationInterval)
            {
                { /* [Luna] stripped: MMVibrationManager.Haptic(HapticTypes.MediumImpact); */ }
                // MediumImpact ko interval ke saath play karein
                lastVibrationTime = Time.time;
            }
        }
    }

    // One haptic straight away, without the 0.25s gap Light/MediumImpact keep - for a caller that spaces
    // or caps its own (e.g. CG_ClothSlicer, one per piece cut).
    public void Impact(HapticTypes type)
    {
        if (PlayerPrefs.GetInt("Vibration", 1) == 1)
            { /* [Luna] stripped: MMVibrationManager.Haptic(type); */ }
    }

    public void RigidImpact()
    {
        if (PlayerPrefs.GetInt("Vibration", 1) == 1)
            { /* [Luna] stripped: MMVibrationManager.Haptic(HapticTypes.RigidImpact); */ }
    }

    public void Selection()
    {
        if (PlayerPrefs.GetInt("Vibration", 1) == 1)
            { /* [Luna] stripped: MMVibrationManager.Haptic(HapticTypes.Selection); */ }
    }

    public void None()
    {
        if (PlayerPrefs.GetInt("Vibration", 1) == 1)
            { /* [Luna] stripped: MMVibrationManager.Haptic(HapticTypes.None); */ }
    }

    public void Success()
    {
        if (PlayerPrefs.GetInt("Vibration", 1) == 1)
            { /* [Luna] stripped: MMVibrationManager.Haptic(HapticTypes.Success); */ }
    }

    public void Warning()
    {
        if (PlayerPrefs.GetInt("Vibration", 1) == 1)
            { /* [Luna] stripped: MMVibrationManager.Haptic(HapticTypes.Warning); */ }
    }

    public void VibrationCore()
    {
        if (PlayerPrefs.GetInt("Vibration", 1) == 1)
            { /* [Luna] stripped: Handheld.Vibrate(); */ }
    }

    #endregion

    bool playVibration = false;

    Coroutine co;

    WaitForSeconds waitp1 = new WaitForSeconds(0.25f);
    IEnumerator VibrateIt(HapticTypes impactType)
    {
        while (playVibration)
        {
            yield return waitp1;

            if (PlayerPrefs.GetInt("Vibration", 1) == 1)
                { /* [Luna] stripped: MMVibrationManager.Haptic(impactType); */ }
        }
    }

    public void StartVibration(HapticTypes impactType = HapticTypes.MediumImpact)
    {
        if(playVibration)
            return;

        playVibration = true;

        if(co != null)
            StopCoroutine(co);

        co = StartCoroutine(VibrateIt(impactType));
    }

    public void StopVibration()
    {
        playVibration = false;
    }
}