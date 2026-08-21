using UnityEngine;
using DG.Tweening;
using System.Collections;
using UnityEngine.EventSystems;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour
{
    public static GameManager instance;

    [Space()]
    public Material DefaultMat;

    [Space()]
    public AudioClip BG_Music;

    [Space()]
    public Shader restoreEffectShader;
    public Shader stickerEffectShader;

    [Space()]
    public bool isComplete = false;
    public bool isPaused = false;

    [Space()]
    public LevelData currentLevel;

    LevelData Temp;
    float levelEndTime;
    float levelStartTime;
    int currentLevelNo = 0;
    public Coroutine timerCo; // used by GameManagerPlayable duplicate scene

    void Awake()
    {
        instance = this;
        EnsureSaveSystem();
        EnsureLoadingManager();
        BindSceneLevel();
    }

    IEnumerator Start()
    {
        LoadLevel();

        if (BG_Music != null && MusicSource.instance != null)
            MusicSource.instance.PlayMusic(BG_Music);

        yield return null;
    }

    void EnsureSaveSystem()
    {
        if (SaveSystem.Instance != null)
        {
            SaveSystem.Instance.EnsureReady();
            return;
        }

        SaveSystem existing = FindObjectOfType<SaveSystem>();
        if (existing == null)
        {
            GameObject go = new GameObject("SaveSystem");
            existing = go.AddComponent<SaveSystem>();
        }

        existing.EnsureReady();
    }

    void EnsureLoadingManager()
    {
        if (LoadingManager.instance != null)
            return;

        LoadingManager existing = FindObjectOfType<LoadingManager>();
        if (existing != null)
            return;

        GameObject go = new GameObject("Loading Manager");
        LoadingManager created = go.AddComponent<LoadingManager>();

        UI_Manager ui = FindObjectOfType<UI_Manager>();
        if (ui != null)
            created.Fade_Img = ui.Fade_Img;
    }

    void BindSceneLevel()
    {
        if (currentLevel == null)
            currentLevel = FindObjectOfType<LevelData>();

        if (currentLevel == null)
            return;

        Temp = currentLevel;
        ApplySaveForSceneLevel(currentLevel);
    }

    void ApplySaveForSceneLevel(LevelData level)
    {
        if (SaveSystem.Instance == null || level == null)
            return;

        int levelNo = 1;
        int partNo = 1;
        TryParseLevelName(level.gameObject.name, out levelNo, out partNo);

        SaveDataFields data = SaveSystem.Instance.DataFields;
        data.levelToPlay = levelNo;
        data.partToPlay = partNo;

        int levelIndex = levelNo - 1;
        int partIndex = partNo - 1;

        if (data.AllLevels == null || levelIndex < 0 || levelIndex >= data.AllLevels.Length)
            return;

        SubLevelData[] subs = data.AllLevels[levelIndex].subLevels;
        if (subs == null || partIndex < 0 || partIndex >= subs.Length)
            return;

        // Scene playable always starts this dragged level from step 0.
        subs[partIndex].stepsDone = 0;
    }

    static bool TryParseLevelName(string objectName, out int levelNo, out int partNo)
    {
        levelNo = 1;
        partNo = 1;

        if (string.IsNullOrEmpty(objectName))
            return false;

        string n = objectName.Replace("(Clone)", "").Trim();
        const string prefix = "Level";
        int start = n.IndexOf(prefix);
        if (start < 0)
            return false;

        int i = start + prefix.Length;
        int levelStart = i;
        while (i < n.Length && char.IsDigit(n[i]))
            i++;

        if (i == levelStart || i >= n.Length || n[i] != '_')
            return false;

        int parsedLevel;
        if (!int.TryParse(n.Substring(levelStart, i - levelStart), out parsedLevel))
            return false;

        i++;
        int partStart = i;
        while (i < n.Length && char.IsDigit(n[i]))
            i++;

        int parsedPart;
        if (i == partStart || !int.TryParse(n.Substring(partStart, i - partStart), out parsedPart))
            return false;

        levelNo = parsedLevel;
        partNo = parsedPart;
        return true;
    }

    void LoadLevel()
    {
        if (currentLevel == null)
            BindSceneLevel();

        if (currentLevel != null)
        {
            Temp = currentLevel;
            currentLevelNo = SaveSystem.Instance != null ? SaveSystem.Instance.DataFields.levelToPlay : 1;
            levelStartTime = Time.time;
            RecordLevelStartEvent(currentLevelNo);
            Debug.Log("Gameplay using scene level: " + currentLevel.gameObject.name);
            return;
        }

        if (SaveSystem.Instance == null)
        {
            Debug.LogError("SaveSystem missing — drag a Level prefab into Gameplay, or add SaveSystem.");
            return;
        }

        if (SaveSystem.Instance.DataFields.levelToPlay > SaveSystem.Instance.DataFields.AllLevels.Length)
            SaveSystem.Instance.DataFields.levelToPlay = 1;

        if (SaveSystem.Instance.DataFields.partToPlay < 1)
            SaveSystem.Instance.DataFields.partToPlay = 1;

        levelStartTime = Time.time;
        currentLevelNo = SaveSystem.Instance.DataFields.levelToPlay;

        int levelToLoad = currentLevelNo;
        int subLevelToLoad = SaveSystem.Instance.DataFields.partToPlay;

        Temp = Resources.Load<LevelData>("Lvl_GP/Level" + levelToLoad + "_" + subLevelToLoad);

        if (Temp != null)
        {
            Temp = Instantiate(Temp);
            currentLevel = Temp;
            RecordLevelStartEvent(currentLevelNo);
        }
        else
        {
            Debug.LogError($"Level {levelToLoad}_{subLevelToLoad} load karne mein nakami! Drag the prefab into Gameplay.");
        }
    }

    public virtual void Complete()
    {
        if (timerCo != null)
            StopCoroutine(timerCo);

        int currentLevel = SaveSystem.Instance.DataFields.levelToPlay;
        int subLevel = SaveSystem.Instance.DataFields.partToPlay;

        SaveSystem.Instance.DataFields.comingFromGP = true;
        SaveSystem.Instance.DataFields.levelPartDone = subLevel;

        SaveSystem.Instance.DataFields.AllLevels[currentLevel - 1].subLevels[subLevel - 1].isCompleted = true;

        isPaused = true;

        isComplete = true;

        StopAllDrags();

        MuteLevelAudio();

        RecordLevelCompleteEvent();

        UI_Manager.instance.ShowCompleteParticles();

        UI_Manager.instance.Complete(2f);
    }

    public void Next()
    {
        ReloadActiveScene();
    }

    // 0 For Pause, 1 For Complete, 2 For Fail

    public void Home(int number)
    {
        ReloadActiveScene();
    }

    public void Continue()
    {
        ReloadActiveScene();
    }

    public void Restart(int number)
    {
        ReloadActiveScene();
    }

    void ReloadActiveScene()
    {
        IEnumerator Exec()
        {
            if (LoadingManager.instance != null)
                LoadingManager.instance.ShowLoading();

            if (Temp != null)
                Temp.gameObject.SetActive(false);

            float wait = 0.25f;
            if (LoadingManager.instance != null)
                wait = Mathf.Max(0.25f, LoadingManager.instance.animTime - 1f);

            yield return new WaitForSeconds(wait);

            SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
        }

        StartCoroutine(Exec());
    }

    #region HELPERS

    public bool checkForDrag()
    {
        try
        {
            BasicDrag[] allDrags = Temp.AllDrags;

            for (int i = 0; i < allDrags.Length; i++)
            {
                if (allDrags[i].isDragging && allDrags[i].gameObject.activeSelf && allDrags[i].canDrag)
                    return true;
            }
        }

        catch
        {
        }

        return false;
    }

    public void MuteLevelAudio()
    {
        try
        {
            AudioSource[] allSources = Temp.AllSources;

            for (int i = 0; i < allSources.Length; i++)
            {
                allSources[i].mute = true;
            }
        }

        catch
        {
        }
    }

    public void UnMuteLevelAudio()
    {

        try
        {
            AudioSource[] allSources = Temp.AllSources;

            for (int i = 0; i < allSources.Length; i++)
            {
                allSources[i].mute = false;
            }
        }

        catch
        {
        }
    }

    public void StopAllDrags()
    {
        try
        {
            BasicDrag[] allDrags = Temp.AllDrags;

            for (int i = 0; i < allDrags.Length; i++)
            {
                if (allDrags[i].isDragging)
                    allDrags[i].StopTheDrag();
            }
        }
        catch
        {
        }

        try
        {
            AudioSource[] allSources = Temp.AllSources;

            for (int i = 0; i < allSources.Length; i++)
            {
                allSources[i].Stop();
            }
        }
        catch
        {
        }
    }

    public bool isOverUI()
    {
        // Ignore drag if pointer is over any UI element
        if (EventSystem.current != null && EventSystem.current.IsPointerOverGameObject())
        {
            return true;
        }

        if (EventSystem.current != null && Input.touchCount > 0)
        {
            if (EventSystem.current.IsPointerOverGameObject(Input.GetTouch(0).fingerId))
                return true;
        }

        return false;
    }

    #endregion

    #region EVENTs

    void RecordLevelStartEvent(int levelIs)
    {
    }

    void RecordLevelCompleteEvent()
    {
        levelEndTime = Time.time;
    }

    #endregion
}