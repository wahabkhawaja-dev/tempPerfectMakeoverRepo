using System;
using System.Collections.Generic;
using UnityEngine;

public enum PlayButtonCorner
{
    Left = 0,
    Right = 1
}

[Serializable]
public class PlayableLogoEntry
{
    public string name = "Logo";
    public Sprite sprite;
    public Vector2 anchoredPosition = new Vector2(-320f, 560f);
    public Vector2 size = new Vector2(180f, 180f);
    public bool enabled = true;
}

[CreateAssetMenu(fileName = "PlayableHudLayout", menuName = "Playable/HUD Layout")]
public class PlayableHudLayout : ScriptableObject
{
    [Header("Logos")]
    public List<PlayableLogoEntry> logos = new List<PlayableLogoEntry>();

    [Header("Play Button")]
    public Sprite playButtonSprite;
    public PlayButtonCorner playCorner = PlayButtonCorner.Right;
    public Vector2 playAnchoredPosition = new Vector2(320f, 560f);
    public Vector2 playSize = new Vector2(220f, 90f);
    public string playLabel = "PLAY";

    public void EnsureDefaults()
    {
    }
}
