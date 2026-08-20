using UnityEngine;

public class ApplicationConfig : MonoBehaviour
{
    #region FPS Setting

    void Start()
    {
        Input.multiTouchEnabled = false;

        int frameRate = Screen.currentResolution.refreshRate;

        // Fallback to 60 FPS if refresh rate is unexpected
        if (frameRate != 60 && frameRate != 90 && frameRate != 120)
        {
            frameRate = 60;
        }

        Application.targetFrameRate = frameRate;

        QualitySettings.vSyncCount = 0;
    }

    #endregion
}

