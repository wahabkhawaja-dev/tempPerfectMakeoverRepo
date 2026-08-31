using UnityEngine.UI;
using UnityEngine;
using UnityEngine.UI;

public class ChapterManager : MonoBehaviour
{
    [Space()]
    public ChapterData[] AllChapters;

    void Start()
    {
        SetupUi();
    }

    void SetupUi()
    {
        LevelSaveData[] AllLevelsData = SaveSystem.Instance.DataFields.AllLevels;

        for (int i = 0; i < AllChapters.Length; i++)
        {
            AllChapters[i].PlayBtn.SetActive(true);
            AllChapters[i].ReplayBtn.SetActive(false);

            AllChapters[i].Tick.SetActive(false);

            int totalLevel = AllLevelsData[i].subLevels.Length;
            int levelsDoneAre = 0;

            for (int j = 0; j < totalLevel; j++)
            {
                if (AllLevelsData[i].subLevels[j].isCompleted)
                {
                    levelsDoneAre++;
                }
            }

            AllChapters[i].ProgressText.text = levelsDoneAre + "/" + totalLevel;

            float progressIs = ((float)levelsDoneAre / (float)totalLevel);

            if (progressIs > 1f)
                progressIs = 1f;

            AllChapters[i].ProgressSlider.value = progressIs;

            if (levelsDoneAre >= totalLevel)
            {
                AllChapters[i].PlayBtn.SetActive(false);
                AllChapters[i].ReplayBtn.SetActive(true);

                AllChapters[i].Tick.SetActive(true);
            }
        }
    }
}

[System.Serializable]
public struct ChapterData
{
    [Space()]
    public GameObject PlayBtn;
    public GameObject ReplayBtn;

    [Space()]
    public Text ProgressText;

    [Space()]
    public Slider ProgressSlider;

    [Space()]
    public GameObject Tick;
}