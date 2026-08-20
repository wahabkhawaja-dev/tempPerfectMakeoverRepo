using System;
using System.IO;
using DG.Tweening;
using UnityEngine;

public class SaveSystem : MonoBehaviour
{
    public static SaveSystem Instance;

    public string path;

    [Space()]
    public int TotalLevels = 11;

    [Space()]
    [Space()]
    public SaveDataFields DataFields;

    string jsonInString = "";

    [Space()]
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
        DontDestroyOnLoad(this);
        EnsureReady();
    }

    void Start()
    {
        try
        {
            PlayerPrefs.SetInt("OneTimeCheck", 1);

            DOVirtual.DelayedCall(0.2f, () =>
            {
                DataFields.sessionCount++;
            });
        }
        catch
        {
        }
    }

    public void EnsureReady()
    {
        if (Instance == null)
            Instance = this;

        if (DataFields == null)
            DataFields = new SaveDataFields();

        try
        {
            path = Path.Combine(Application.persistentDataPath, "SaveData.json");

            if (File.Exists(path))
                LoadJSON();
            else
                CreateJSON();
        }
        catch
        {
        }

        EnsureAllLevelsExist();
        EnsureSubLevels();

        if (DataFields.levelToPlay < 1)
            DataFields.levelToPlay = 1;

        if (DataFields.partToPlay < 1)
            DataFields.partToPlay = 1;
    }

    #region JSON

    public void CreateJSON()
    {
        try
        {
            jsonInString = JsonUtility.ToJson(DataFields, true);

            File.WriteAllText(path, jsonInString);
        }

        catch
        {

        }

        if (File.Exists(path))
        {
            LoadJSON();
        }
    }

    public void LoadJSON()
    {
        try
        {
            string loadedJsonDataString = File.ReadAllText(path);

            JsonUtility.FromJsonOverwrite(loadedJsonDataString, DataFields);

            EnsureAllLevelsExist(); // Ensure new levels are added
        }
        catch
        {
        }
    }

    void EnsureAllLevelsExist()
    {
        if (DataFields.AllLevels == null)
        {
            DataFields.AllLevels = new LevelSaveData[TotalLevels];

            for (int i = 0; i < TotalLevels; i++)
            {
                DataFields.AllLevels[i] = new LevelSaveData();
            }
        }

        else if (DataFields.AllLevels.Length < TotalLevels)
        {
            int oldLevelCount = DataFields.AllLevels.Length;
            LevelSaveData[] newLevelsArray = new LevelSaveData[TotalLevels];

            // Copy existing levels (preserving progress)
            for (int i = 0; i < oldLevelCount; i++)
            {
                newLevelsArray[i] = DataFields.AllLevels[i];
            }

            // Initialize only the new levels
            for (int i = oldLevelCount; i < TotalLevels; i++)
            {
                newLevelsArray[i] = new LevelSaveData();
            }

            // Assign back to totalLevels
            DataFields.AllLevels = newLevelsArray;
        }

        EnsureSubLevels();
        SaveJSON();
    }

    void EnsureSubLevels()
    {
        if (DataFields == null || DataFields.AllLevels == null)
            return;

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
            {
                if (subs != null && j < oldLen && subs[j] != null)
                    neu[j] = subs[j];
                else
                    neu[j] = new SubLevelData();
            }

            DataFields.AllLevels[i].subLevels = neu;
        }
    }

    public void SaveJSON()
    {
        try
        {
            jsonInString = JsonUtility.ToJson(DataFields, true);

            File.WriteAllText(path, jsonInString);
        }

        catch
        {

        }
    }

    #endregion

    void OnApplicationQuit()
    {
        try
        {
            SaveJSON();
        }
        catch { }
    }

    public void OnApplicationPause()
    {
        try
        {
            SaveJSON();
        }
        catch { }
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
}


[Serializable]
public class SubLevelData
{
    public string subLevelName;
    public bool isCompleted;

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





