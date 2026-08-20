using UnityEngine;
using UnityEngine.UI;

/// <summary>
/// Wires the scene PLAY button to store CTA. Does not create or move HUD.
/// </summary>
public class PlayableHudRuntime : MonoBehaviour
{
    public static PlayableHudRuntime Instance { get; private set; }

    void Awake()
    {
        Instance = this;
        var buttons = GetComponentsInChildren<Button>(true);
        for (int i = 0; i < buttons.Length; i++)
            buttons[i].onClick.AddListener(OnPlayClicked);
    }

    void OnPlayClicked()
    {
        PlayableInstall.Go();
    }
}
