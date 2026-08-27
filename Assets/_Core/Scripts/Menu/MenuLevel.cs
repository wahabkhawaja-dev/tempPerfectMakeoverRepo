using UnityEngine;
using DG.Tweening;
using UnityEngine.SceneManagement;

#if UNITY_EDITOR
using UnityEditor;
#endif

[System.Serializable]
public struct MenuLevelData
{
    [Space()]
    public string Name;

    [Space()]
    public GameObject UiBtn;

    [Space()]
    public GameObject TickBtn;

    [Space()]
    public GameObject ExclamationIcon;

    [Space()]
    public GameObject[] Item_Dirty;
    public GameObject[] Item_Clean;

    [Space()]
    public ParticleSystem CompleteParticle;
}

public class MenuLevel : MonoBehaviour
{
    [Space()]
    public MenuLevelBtnUpdate menuLevelBtnUpdate;

    [Space()]
    [ColoredHeader("Level Start", "#4287f5")]
    [SerializeField] GameObject[] itemEnable_Onstart;
    [SerializeField] GameObject[] itemDisable_Onstart;

    [Space()]
    [ColoredHeader("Level Steps", "#f5df42")]
    public MenuLevelData[] AllSteps;

    [Space()]
    [ColoredHeader("Level Complete", "#42f566")]
    [SerializeField] GameObject[] itemEnable_Oncomplete;
    [SerializeField] GameObject[] itemDisable_Oncomplete;

    SubLevelData[] subLevels;

    [Space()]
    public GameObject buttonparent;
    public DOTweenAnimation[] BtnsDotweenAnims;
    public Collider2D[] BtnsCols;

    [Space()]
    [SerializeField] string levelKey;
    public GameObject mainGameView;
    public GameObject Storyboard;

    bool isTutPlayed;
    bool isHandOn = false;

    [Space()]
    public AudioClip BgMusic;
    public AudioClip BgStoryMusic;

    [Space()]
    [ColoredHeader("First-Complete Reveal", "#f5a442")]
    [SerializeField] float revealDirtyHoldTime = 0.6f;

    [Space()]
    public GameObject Hand_Tut1;

    void Start()
    {
        int currentLevelIdx = SaveSystem.Instance.DataFields.levelToPlay - 1;

        subLevels = SaveSystem.Instance.DataFields.AllLevels[currentLevelIdx].subLevels;

        ResetSelectBtns();

        // No Storyboard (playable builds strip the intro) => go straight to the menu,
        // otherwise MainView would stay hidden waiting on an intro that never plays.
        if (Storyboard != null && PlayerPrefs.GetInt(levelKey, 0) == 0)
        {
            mainGameView.SetActive(false);

            Storyboard.gameObject.SetActive(true);

            PlayerPrefs.SetInt(levelKey, 1);

            isTutPlayed = true;

            if (BgStoryMusic != null && MusicSource.instance)
                MusicSource.instance.PlayMusic(BgStoryMusic);
        }

        else
        {
            mainGameView.SetActive(true);

            if (Storyboard != null)
                Storyboard.gameObject.SetActive(false);

            isTutPlayed = false;

            SetupLevel();

            if (BgMusic != null && MusicSource.instance)
                MusicSource.instance.PlayMusic(BgMusic, 0.7f);
        }

        if (MenuManager.instance != null && MenuManager.instance.msgController != null) MenuManager.instance.msgController.OnSkipPressed += HandleSkip;

        if (PlayerPrefs.GetInt("HandTut1", 0) == 0)
        {
            PlayerPrefs.SetInt("HandTut1", 1);

            if (Hand_Tut1 != null)
                Hand_Tut1.SetActive(true);

            for (int i = 0; i < AllSteps.Length; i++)
            {
                AllSteps[i].UiBtn.SetActive(false);
            }

            AllSteps[1].UiBtn.SetActive(true);

            //MenuManager.instance.MapBtn.transform.parent.gameObject.SetActive(false);
            
            isHandOn = true;

            if (MenuManager.instance != null) MenuManager.instance.isHandOn = true;
        }
    }

    void OnDisable()
    {
        if (MenuManager.instance != null && MenuManager.instance.msgController != null)
        {
            MenuManager.instance.msgController.OnSkipPressed -= HandleSkip;
        }
    }

    void ResetSelectBtns()
    {
        for (int i = 0; i < AllSteps.Length; i++)
        {
            AllSteps[i].ExclamationIcon.SetActive(false);

            if (subLevels[i].stepsDone > 0)
            {
                AllSteps[i].ExclamationIcon.SetActive(true);
            }
        }

        for (int i = 0; i < AllSteps.Length; i++)
        {
            if (subLevels[i].stepsDone <= 0)
                AllSteps[i].TickBtn.SetActive(subLevels[i].isCompleted);

            else
            {
                AllSteps[i].TickBtn.SetActive(false);
            }
        }

        for (int i = 0; i < BtnsCols.Length; i++)
        {
            BtnsCols[i].enabled = false;
        }
    }

    void SetupLevel()
    {
        buttonparent.SetActive(false);

        bool comingFromGP = SaveSystem.Instance.DataFields.comingFromGP;

        if (isLevelStart())
        {
            HandleStartLogic(itemEnable_Onstart, itemDisable_Onstart);

            if (isTutPlayed)
                Invoke(nameof(ShowButtonParent), 1.45f);

            else
                Invoke(nameof(ShowButtonParent), 1f);
        }

        else if (isLevelComplete())
        {
            HandleStartLogic(itemEnable_Oncomplete, itemDisable_Oncomplete);

            ShowButtonParent();
        }

        else
        {
            SetupStepsVisuals();

            Invoke(nameof(ShowButtonParent), 1f);
        }
    }

    void SetupStepsVisuals()
    {
        // Only the sub-level the player just finished in gameplay gets the reveal - every
        // other already-completed item just shows its clean state instantly, same as before.
        bool justCompletedFlow = SaveSystem.Instance.DataFields.comingFromGP;
        int justCompletedIdx = SaveSystem.Instance.DataFields.levelPartDone - 1;

        if (justCompletedFlow)
        {
            if (MenuManager.instance != null) MenuManager.instance.cameFromGP = true;
            SaveSystem.Instance.DataFields.comingFromGP = false;
        }

        int currentLevelIdx = SaveSystem.Instance.DataFields.levelToPlay;
        int nextLevelIdx = SaveSystem.Instance.DataFields.NextlevelToStart;

        for (int i = 0; i < AllSteps.Length; i++)
        {
            bool isDone = subLevels[i].isCompleted;

            string revealKey = RevealShownKey(currentLevelIdx, i);
            bool revealAlreadyShown = PlayerPrefs.GetInt(revealKey, 0) == 1;

            if (justCompletedFlow && i == justCompletedIdx && isDone && !revealAlreadyShown)
            {
                PlayerPrefs.SetInt(revealKey, 1);

                PlayFirstCompleteReveal(AllSteps[i]);

                if (nextLevelIdx > 0)
                    menuLevelBtnUpdate.ShowUnlockAnimAt(nextLevelIdx);
            }
            else
            {
                foreach (GameObject obj in AllSteps[i].Item_Dirty) obj.SetActive(!isDone);
                foreach (GameObject obj in AllSteps[i].Item_Clean) obj.SetActive(isDone);
            }
        }
    }

    // Persists independently of isCompleted so replaying an already-completed sub-level
    // never re-triggers its reveal - the particle is meant to play once, ever.
    string RevealShownKey(int levelIdx, int stepIdx)
    {
        return "MenuLvl_RevealShown_" + levelIdx + "_" + stepIdx;
    }

    // Shows the old dirty item first, then bursts its particle and fades the clean item in
    // over the top - only ever runs the one time an item transitions to completed.
    void PlayFirstCompleteReveal(MenuLevelData step)
    {
        foreach (GameObject obj in step.Item_Dirty) obj.SetActive(true);
        foreach (GameObject obj in step.Item_Clean) obj.SetActive(false);

        DOVirtual.DelayedCall(revealDirtyHoldTime, () =>
        {
            if (step.CompleteParticle != null)
                step.CompleteParticle.Play(true);

            foreach (GameObject obj in step.Item_Dirty) obj.SetActive(false);

            foreach (GameObject obj in step.Item_Clean)
            {
                obj.SetActive(true);

                /* SpriteRenderer sr = obj.GetComponent<SpriteRenderer>();
                 if (sr != null)
                 {
                     Color c = sr.color;
                     c.a = 0f;
                     sr.color = c;
                     sr.DOFade(1f, revealFadeInDuration);
                 }*/
            }
        });
    }

    void HandleStartLogic(GameObject[] enable, GameObject[] disable)
    {
        foreach (GameObject obj in enable) obj.SetActive(true);
        foreach (GameObject obj in disable) obj.SetActive(false);
    }

    public void HandleSkip()
    {
        SetupLevel();

        if (MenuManager.instance != null && MenuManager.instance.msgController != null) MenuManager.instance.msgController.HideMessage();

        if (BgMusic != null && MusicSource.instance)
            MusicSource.instance.PlayMusic(BgMusic, 0.7f);

        if (isHandOn)
        {
            for (int i = 0; i < AllSteps.Length; i++)
            {
                AllSteps[i].UiBtn.SetActive(false);
            }

            AllSteps[1].UiBtn.SetActive(true);
        }
    }

    public void HandleAccept()
    {
        if (isHandOn)
        {
            for (int i = 0; i < AllSteps.Length; i++)
            {
                AllSteps[i].UiBtn.SetActive(false);
            }

            AllSteps[1].UiBtn.SetActive(true);
        }
    }

    void ShowButtonParent()
    {
        buttonparent.SetActive(true);

        DOVirtual.DelayedCall(.8f, () =>
        {
            if (MenuManager.instance != null && MenuManager.instance.MainPanel != null) MenuManager.instance.MainPanel.gameObject.SetActive(true);
        });

        for (int i = 0; i < BtnsCols.Length; i++)
        {
            BtnsCols[i].enabled = true;
        }
    }

    bool isLevelStart()
    {
        foreach (var sub in subLevels) if (sub.isCompleted) return false;
        return true;
    }

    bool isLevelComplete()
    {
        foreach (var sub in subLevels) if (!sub.isCompleted) return false;
        return true;
    }

    bool lvlStarted = false;

    //call from ui button
    public void SelectLevelItem(int i)
    {
        if (lvlStarted)
            return;

        TryToContinueLevel(i);
    }

    public void TryToContinueLevel(int index, bool overrideVal = false)
    {
        if (overrideVal)
        {
            SaveSystem.Instance.DataFields.partToPlay = index;

            DOVirtual.DelayedCall(1.2f, () =>
            {
                CameraController.Instance.MoveCamera(new Vector3(0, .75f, -10), 2.65f, 1f);

                DOVirtual.DelayedCall(.4f, () =>
                {
                    LoadingManager.instance.ShowFadeAnim(0.65f, 1f);

                    DOVirtual.DelayedCall(0.7f, () => SceneManager.LoadScene(2));
                });
            });

            return;
        }

        if (SaveSystem.Instance.DataFields.AllLevels[SaveSystem.Instance.DataFields.levelToPlay - 1].subLevels[index - 1].stepsDone > 0)
        {
            if (MenuManager.instance != null) MenuManager.instance.OpenContinueLevel(index);
        }

        else
        {
            lvlStarted = true;

            if (MenuManager.instance != null && MenuManager.instance.msgController != null) MenuManager.instance.msgController.HideMessage();

            SaveSystem.Instance.DataFields.partToPlay = index;

            if (MenuManager.instance != null && MenuManager.instance.currentLevel != null) MenuManager.instance.currentLevel.ReverseBtnAnim();

            DOVirtual.DelayedCall(.15f, () =>
            {
                //MenuManager.instance.MapMenuTween.DOPlayBackwards();

                if (MenuManager.instance != null && MenuManager.instance.TopBarAnim != null) MenuManager.instance.TopBarAnim.DOPlayBackwards();
            });

            DOVirtual.DelayedCall(0.4f, () =>
            {
                CameraController.Instance.MoveCamera(new Vector3(0, .75f, -10), 2.65f, 1f);

                DOVirtual.DelayedCall(.4f, () =>
                {
                    LoadingManager.instance.ShowFadeAnim(.65f, 1f);

                    DOVirtual.DelayedCall(0.7f, () => SceneManager.LoadScene(2));
                });
            });
        }
    }

    #region Editor Data 
    public class ColoredHeaderAttribute : PropertyAttribute
    {
        public string headerText;
        public string colorHex;
        public ColoredHeaderAttribute(string headerText, string colorHex = "#00FF00")
        {
            this.headerText = headerText;
            this.colorHex = colorHex;
        }
    }

#if UNITY_EDITOR
    [CustomPropertyDrawer(typeof(ColoredHeaderAttribute))]
    public class ColoredHeaderDrawer : DecoratorDrawer
    {
        public override void OnGUI(Rect position)
        {
            ColoredHeaderAttribute attr = (ColoredHeaderAttribute)attribute;
            position.yMin += EditorGUIUtility.singleLineHeight * 0.5f;
            GUIStyle style = new GUIStyle(EditorStyles.boldLabel);
            Color color;
            if (ColorUtility.TryParseHtmlString(attr.colorHex, out color)) style.normal.textColor = color;
            EditorGUI.LabelField(position, attr.headerText, style);
        }
        public override float GetHeight() => EditorGUIUtility.singleLineHeight * 1.5f;
    }
#endif
    #endregion

    public void PlayBtnAnim()
    {
        for (int i = 0; i < BtnsDotweenAnims.Length; i++)
        {
            BtnsDotweenAnims[i].gameObject.SetActive(true);
            BtnsDotweenAnims[i].DORestart();
        }

        for (int i = 0; i < BtnsCols.Length; i++)
        {
            BtnsCols[i].enabled = true;
        }

        if (isHandOn)
        {
            for (int i = 0; i < AllSteps.Length; i++)
            {
                if (i == 1)
                    continue;

                AllSteps[i].UiBtn.SetActive(false);
            }
        }
    }

    public void ReverseBtnAnim()
    {
        for (int i = 0; i < BtnsDotweenAnims.Length; i++)
        {
            int val = i;

            DOVirtual.DelayedCall(i * .01f, () =>
            {
                Tween tween = BtnsDotweenAnims[val].tween;

                if (tween == null)
                    return;

                float currentPosition = tween.position;
                float reverseDuration = currentPosition * 0.5f;

                tween.PlayBackwards();

                DOTween.To(
                    () => tween.position,
                    x => tween.Goto(x, false),
                    0f,
                    reverseDuration
                );
            });
        }

        for (int i = 0; i < BtnsCols.Length; i++)
        {
            BtnsCols[i].enabled = false;
        }
    }

    public void DisableBtnAnim()
    {
        for (int i = 0; i < BtnsDotweenAnims.Length; i++)
        {
            BtnsDotweenAnims[i].gameObject.SetActive(false);
        }
    }
}