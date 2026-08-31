using System;
using UnityEngine;

/// <summary>
/// Playable build: in-memory only. No JSON, no File I/O, no persistentDataPath — a playable
/// is always a fresh session, so there is nothing to persist and Bridge.NET/WebGL cannot do
/// file I/O reliably anyway.
///
/// The DataFields API is kept intact so every existing level script keeps compiling and
/// behaving the same; the values simply live for the lifetime of the page.
/// </summary>
public class SaveSystem : MonoBehaviour
{
    public static SaveSystem Instance;

    [Space()]
    public int TotalLevels = 11;

    [Space()]
    public SaveDataFields DataFields;

    [Space()]
    public bool iAPShown = false;

    const int MinSubLevels = 8;

    void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }

        Instance = this;
        EnsureReady();
    }

    public void EnsureReady()
    {
        if (Instance == null)
            Instance = this;

        if (DataFields == null)
            DataFields = new SaveDataFields();

        EnsureAllLevelsExist();

        if (DataFields.levelToPlay < 1)
            DataFields.levelToPlay = 1;

        if (DataFields.partToPlay < 1)
            DataFields.partToPlay = 1;
    }

    void EnsureAllLevelsExist()
    {
        if (DataFields.AllLevels == null || DataFields.AllLevels.Length < TotalLevels)
        {
            LevelSaveData[] neu = new LevelSaveData[TotalLevels];

            int oldLen = DataFields.AllLevels != null ? DataFields.AllLevels.Length : 0;

            for (int i = 0; i < TotalLevels; i++)
                neu[i] = i < oldLen && DataFields.AllLevels[i] != null
                    ? DataFields.AllLevels[i]
                    : new LevelSaveData();

            DataFields.AllLevels = neu;
        }

        EnsureSubLevels();
    }

    void EnsureSubLevels()
    {
        for (int i = 0; i < DataFields.AllLevels.Length; i++)
        {
            if (DataFields.AllLevels[i] == null)
                DataFields.AllLevels[i] = new LevelSaveData();

            SubLevelData[] subs = DataFields.AllLevels[i].subLevels;
            int oldLen = subs != null ? subs.Length : 0;
            if (oldLen >= MinSubLevels)
                continue;

            SubLevelData[] neu = new SubLevelData[MinSubLevels];
            for (int j = 0; j < MinSubLevels; j++)
                neu[j] = subs != null && j < oldLen && subs[j] != null ? subs[j] : new SubLevelData();

            DataFields.AllLevels[i].subLevels = neu;
        }
    }
}

[Serializable]
public class SaveDataFields
{
    [Header("----------------------------  Coins  -----------------------------")]
    [Space()]
    public int totalCoins;

    [Header("----------------------------  Levels Data  -----------------------------")]
    [Space()]
    public int levelToPlay = 0;
    public int partToPlay = 0;

    [Space()]
    [Space()]
    public LevelSaveData[] AllLevels;

    [Space()]
    [Space()]
    public bool comingFromGP = false;
    public int levelPartDone = 0;

    [Space()]
    [Space()]
    public bool IAP_Removeads = false;
    public int sessionCount;

    [Space()]
    [Space()]
    public bool mapUnlocked = false;
    public bool mapTutorial = false;

    [Space()]
    public int NextlevelToStart = 0;
}


[Serializable]
public class SubLevelData
{
    public string subLevelName;
    public bool isCompleted;
    public bool isLocked;

    [Space()]
    public int stepsDone;
}

[Serializable]
public class LevelSaveData
{
    [Space()]
    public SubLevelData[] subLevels;

    [Space()]
    public bool Completed = false;
}
