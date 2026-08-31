using UnityEngine.UI;
using UnityEngine;
using DG.Tweening;
using UnityEngine.UI;
using System.Collections;
using UnityEngine.SceneManagement;

[System.Serializable]
public class ContinueLevelData
{
    public string[] ContinueTitle;
    public Sprite[] ContinueThumbnails;
}

public class MenuManager : MonoBehaviour
{
    public static MenuManager instance;

    [Space()]
    public Camera mainCam;

    [Space()]
    public GameObject EventSystem;

    [Space()]
    public MapController MapController;

    [Space()]
    public Messages_Controller msgController;

    [Space()]
    public AudioSource BirdSource;

    [Space()]
    public Image Fade_Img;

    [Space()]
    public MenuLevel currentLevel;

    [Space()]
    [Header("---------------------- PANELs ----------------------")]
    [Space()]
    public GameObject SettingsPanel;
    public GameObject SettingsPopUp;
    public CanvasGroup SettingsCanvasGroup;

    [Space()]
    public GameObject RemoveAdsPanel;
    public GameObject RemoveAdsPopUp;
    public Text RemoveAdsText;
    public CanvasGroup RemoveAdsCanvasGroup;
    public DOTweenAnimation[] RemoveAdsAnims;

    [Space()]
    [Header("CONTINUE LEVEL")]
    [Space()]
    public GameObject ContinueLevelPanel;
    public GameObject ContinueLevelPopUp;
    public Image ContinueLevelIcon;
    public Text ContinueLevelTitleText;
    public ContinueLevelData[] ContinueData;

    [Space()]
    public RectTransform MainPanel;
    public DOTweenAnimation TopBarAnim;

    [Space()]
    public GameObject MAP;
    public GameObject MAP_Panel;
    public DOTweenAnimation MapPlayBtnTween;

    [Space()]
    public GameObject MapTutorialPanel;

    [Space()]
    public ParticleSystem completeParticles;

    [Space()]
    [Header("---------------------- MAP ----------------------")]
    [Space()]
    public DOTweenAnimation[] MapLevelBtns;
    public DOTweenAnimation[] MapLevelInfos;
    public bool[] MapLevelStatus;

    [Space()]
    public GameObject Level3BtnLock;
    public GameObject Level3BtnUnlock;

    [Space()]
    public Button MapBtn;
    public Sprite MapBtnIconOff;
    public Sprite MapBtnIconOn;

    [Space()]
    public GameObject[] MapBtnProgressBars;
    public Text[] MapBtnProgressTexts;
    public GameObject[] MapInfoProgressBars;
    public Text[] MapInfoProgressTexts;

    [Space()]
    public GameObject[] MapBtnDirtyParts;
    public GameObject[] MapBtnCleanParts;

    [Space()]
    public GameObject[] MapBtnTicks;
    public GameObject[] MapBtnExclamations;

    [Space()]
    public GameObject[] MapInfoDirtyParts;
    public GameObject[] MapInfoCleanParts;

    [Space()]
    public GameObject[] MapLock_Extra;
    public GameObject[] MapIcon_Extra;
    public string[] MapToastStr_Extra;
    public string[] MapComingsoonToastStr_Extra;

    MenuLevel Temp;
    int currentLevelNo = 0;
    
    [HideInInspector()]
    public bool isHandOn = false;

    [Space()]
    [Header("---------------------- BG Musics ----------------------")]
    [Space()]
    public AudioClip MenuMusic;
    public AudioClip MapMusic;

    [Space()]
    public bool cameFromGP = false;

    [Space()]
    public bool specialCheckLvl2Complete = false;

    void Awake()
    {
        instance = this;
    }

    IEnumerator Start()
    {
        try
        {
            // AdsManager.instance.HideMRECBanner();
        }
        catch
        {
        }

        currentLevelNo = SaveSystem.Instance.DataFields.levelToPlay;

        LoadMenuLevel(currentLevelNo);

        SetMapBtnState();

        Fade_Img.gameObject.SetActive(true);
        Fade_Img.DOKill();
        Fade_Img.DOFade(0f, 1f).OnComplete(() => 
        {
            Fade_Img.gameObject.SetActive(false);
        });

        yield return new WaitForSeconds(0.5f);

        DOVirtual.DelayedCall(1f, () =>
        {
            CheckLevelComplete();
        });

        try
        {
            // AdsManager.instance.ShowBanner();
        }
        catch
        {
        }
    }

    float screenWidth;

    void LoadMenuLevel(int levelNo)
    {
        if (SaveSystem.Instance.DataFields.levelToPlay > SaveSystem.Instance.DataFields.AllLevels.Length)
            SaveSystem.Instance.DataFields.levelToPlay = 1;

        Temp = Resources.Load<MenuLevel>("Lvl_MNU/Level" + levelNo);

        // --- INSTANTIATION ---
        if (Temp != null)
        {
            Temp = Instantiate(Temp);

            currentLevel = Temp;
        }
        else
        {
            Debug.LogError($"Menu Level {levelNo} load karne mein nakami!");
        }
    }

    public void PlayLevel(int levelNo)
    {
        if (levelLoading)
        {
            return;
        }

        if (levelNo > SaveSystem.Instance.DataFields.AllLevels.Length)
        {
            return;
        }

        LoadGameplayScene(levelNo);

        MapLevelInfos[levelNo - 1].DOPlayBackwards();
    }

    public void PlayCurrentLevel()
    {
        int levelNo = SaveSystem.Instance.DataFields.levelToPlay;

        for (int i = 0; i < SaveSystem.Instance.DataFields.AllLevels.Length; i++)
        {
            if (!SaveSystem.Instance.DataFields.AllLevels[i].Completed)
            {
                levelNo = (i + 1);

                break;
            }
        }

        PlayLevel(levelNo);

        BirdSource.DOKill();
        BirdSource.DOFade(0f, 3f).OnComplete(() =>
        {
            BirdSource.Stop();
            BirdSource.volume = 0;
        });
    }

    void LoadGameplayScene(int levelNo)
    {
        IEnumerator Exec()
        {
            levelLoading = true;

            yield return new WaitForSeconds(.1f);

            SaveSystem.Instance.DataFields.levelToPlay = levelNo;

            LoadingManager.instance.ShowFadeAnim(.5f, .5f);

            yield return new WaitForSeconds(0.75f);

            SceneManager.LoadScene(1);
        }

        StartCoroutine(Exec());
    }

    #region PANELs

    float m_LastPressTime;
    float m_PressDelay = 1.25f;

    [Space()]
    public int continueLvlIndex = 1;

    public void SettingsState(bool state)
    {
        if (m_LastPressTime + (m_PressDelay - 0.5f) > Time.unscaledTime)
            return;

        m_LastPressTime = Time.unscaledTime;

        if (state)
        {
            currentLevel.ReverseBtnAnim();

            SettingsCanvasGroup.alpha = 0f;

            DOVirtual.DelayedCall(.15f, () =>
            {
                //if (!isMapOpened)
                //    MapMenuTween.DOPlayBackwards();

                if (isMapOpened)
                    MapPlayBtnTween.DOPlayBackwards();

                TopBarAnim.DOPlayBackwards();
            });

            DOVirtual.DelayedCall(0.3f, () =>
            {
                SettingsCanvasGroup.DOKill();
                SettingsCanvasGroup.DOFade(1f, .25f);

                SettingsPanel.SetActive(true);

                SettingsPopUp.transform.DOKill();
                SettingsPopUp.transform.localScale = new Vector3(.8f, .8f, .8f);
                SettingsPopUp.transform.DOScale(1f, .25f).SetEase(Ease.OutBack);

                try
                {
                    // AdsManager.instance.ShowMRECBanner();
                }
                catch
                {
                }
            });

            // Panel Open Sfx
            AudioController.instance.PlaySfx(1, 3, 0.2f);
        }

        else
        {
            SettingsCanvasGroup.DOKill();
            SettingsCanvasGroup.DOFade(0f, .15f).SetDelay(.25f);

            SettingsPopUp.transform.DOKill();
            SettingsPopUp.transform.localScale = new Vector3(1f, 1f, 1f);
            SettingsPopUp.transform.DOScale(.8f, .35f).SetEase(Ease.InBack).OnComplete(() =>
            {
                SettingsPanel.SetActive(false);

                DOVirtual.DelayedCall(.1f, () =>
                {
                    currentLevel.PlayBtnAnim();

                    DOVirtual.DelayedCall(.4f, () =>
                    {
                        //if (!isMapOpened)
                        //    MapMenuTween.DORestart();

                        if (isMapOpened)
                            MapPlayBtnTween.DORestart();

                        TopBarAnim.DORestart();
                    });
                });
            });

            try
            {
                // AdsManager.instance.HideMRECBanner();
            }
            catch
            {
            }

            // Panel Close Sfx
            AudioController.instance.PlaySfx(1, 4, 0);
        }
    }

    public void RemoveAdsState(bool state)
    {
        if (m_LastPressTime + (m_PressDelay - 0.5f) > Time.unscaledTime)
            return;

        m_LastPressTime = Time.unscaledTime;

        if (state)
        {
            currentLevel.ReverseBtnAnim();

            RemoveAdsCanvasGroup.alpha = 0f;

            DOVirtual.DelayedCall(.15f, () =>
            {
                //if (!isMapOpened)
                //    MapMenuTween.DOPlayBackwards();

                if (isMapOpened)
                    MapPlayBtnTween.DOPlayBackwards();

                TopBarAnim.DOPlayBackwards();
            });

            DOVirtual.DelayedCall(0.3f, () =>
            {
                RemoveAdsCanvasGroup.DOKill();
                RemoveAdsCanvasGroup.DOFade(1f, .25f);

                RemoveAdsPanel.SetActive(true);

                RemoveAdsPopUp.transform.DOKill();
                RemoveAdsPopUp.transform.localScale = new Vector3(.8f, .8f, .8f);
                RemoveAdsPopUp.transform.DOScale(1f, .25f).SetEase(Ease.OutBack);

                for (int i = 0; i < RemoveAdsAnims.Length; i++)
                {
                    RemoveAdsAnims[i].DORestart();
                }
            });

            // RemoveAdsText.text = unityInApp.instance.localizedPrices[0];

            // Panel Open Sfx
            AudioController.instance.PlaySfx(1, 3, 0.2f);
        }

        else
        {
            RemoveAdsCanvasGroup.DOKill();
            RemoveAdsCanvasGroup.DOFade(0f, .15f).SetDelay(.25f);

            RemoveAdsPopUp.transform.DOKill();
            RemoveAdsPopUp.transform.localScale = new Vector3(1f, 1f, 1f);
            RemoveAdsPopUp.transform.DOScale(0, .35f).SetEase(Ease.InBack).OnComplete(() =>
            {
                RemoveAdsPanel.SetActive(false);

                DOVirtual.DelayedCall(.1f, () =>
                {
                    currentLevel.PlayBtnAnim();

                    DOVirtual.DelayedCall(.4f, () =>
                    {
                        //if (!isMapOpened)
                        //    MapMenuTween.DORestart();

                        if (isMapOpened)
                            MapPlayBtnTween.DORestart();

                        TopBarAnim.DORestart();
                    });
                });
            });

            // Panel Close Sfx
            AudioController.instance.PlaySfx(1, 4, 0);
        }
    }

    public void OpenContinueLevel(int indexIs)
    {
        continueLvlIndex = indexIs;

        ContinueLevelIcon.sprite = ContinueData[SaveSystem.Instance.DataFields.levelToPlay - 1].ContinueThumbnails[indexIs - 1];
        ContinueLevelTitleText.text = ContinueData[SaveSystem.Instance.DataFields.levelToPlay - 1].ContinueTitle[indexIs - 1];

        ContinueLevelState(true);
    }

    public void YES_ContinueLevel()
    {
        ContinueLevelPopUp.transform.DOKill();
        ContinueLevelPopUp.transform.localScale = new Vector3(1f, 1f, 1f);
        ContinueLevelPopUp.transform.DOScale(0, .5f).SetEase(Ease.InBack).OnComplete(() =>
        {
            ContinueLevelPanel.SetActive(false);
        });

        currentLevel.TryToContinueLevel(continueLvlIndex, true);

        try
        {
            // AdsManager.instance.HideMRECBanner();
        }
        catch
        {
        }

        // Panel Close Sfx
        AudioController.instance.PlaySfx(1, 4, 0);
    }

    public void NO_ContinueLevel()
    {
        SaveSystem.Instance.DataFields.AllLevels[SaveSystem.Instance.DataFields.levelToPlay - 1].subLevels[continueLvlIndex - 1].stepsDone = 0;

        int currentLevelIndex = SaveSystem.Instance.DataFields.levelToPlay - 1;
        int currentSubLevelIndex = continueLvlIndex - 1;

        if (currentLevelIndex == 0) // Level 1 has a few sub-parts that share progress
        {
            int linkedSubLevelIndex = -1;

            if (currentSubLevelIndex == 0)       // Part 1 <-> Part 5
            {
                linkedSubLevelIndex = 4;

                PlayerPrefs.DeleteKey("showerOpend");
                PlayerPrefs.DeleteKey("CleanShowerPlaced");
                PlayerPrefs.DeleteKey("showerFixedBack");
            }
            else if (currentSubLevelIndex == 3)  // Part 4 <-> Part 6
            {
                linkedSubLevelIndex = 5;
            }

            if (linkedSubLevelIndex != -1)
                SaveSystem.Instance.DataFields.AllLevels[currentLevelIndex].subLevels[linkedSubLevelIndex].stepsDone = 0;
        }

        else if (currentLevelIndex == 1) // Level 2 has a few sub-parts that share progress
        {
            int linkedSubLevelIndex = -1;

            if (currentSubLevelIndex == 0)       // Part 1 <-> Part 5
            {
                linkedSubLevelIndex = 4;
            }

            if (linkedSubLevelIndex != -1)
                SaveSystem.Instance.DataFields.AllLevels[currentLevelIndex].subLevels[linkedSubLevelIndex].stepsDone = 0;
        }

        else if (currentLevelIndex == 2) // Level 2 has a few sub-parts that share progress
        {
            int linkedSubLevelIndex = -1;

            if (currentSubLevelIndex == 1)       // Part 2 <-> Part 5
            {
                linkedSubLevelIndex = 4;
            }

            if (linkedSubLevelIndex != -1)
                SaveSystem.Instance.DataFields.AllLevels[currentLevelIndex].subLevels[linkedSubLevelIndex].stepsDone = 0;
        }

        ContinueLevelPopUp.transform.DOKill();
        ContinueLevelPopUp.transform.localScale = new Vector3(1f, 1f, 1f);
        ContinueLevelPopUp.transform.DOScale(0, .5f).SetEase(Ease.InBack).OnComplete(() =>
        {
            ContinueLevelPanel.SetActive(false);
        });

        currentLevel.TryToContinueLevel(continueLvlIndex, true);

        try
        {
            // AdsManager.instance.HideMRECBanner();
        }
        catch
        {
        }

        // Panel Close Sfx
        AudioController.instance.PlaySfx(1, 4, 0);
    }

    public void ContinueLevelState(bool state)
    {
        if (m_LastPressTime + (m_PressDelay - 0.5f) > Time.unscaledTime)
            return;

        m_LastPressTime = Time.unscaledTime;

        if (state)
        {
            currentLevel.ReverseBtnAnim();

            DOVirtual.DelayedCall(.3f, () =>
            {
                //MapMenuTween.DOPlayBackwards();

                TopBarAnim.DOPlayBackwards();
            });

            DOVirtual.DelayedCall(0.7f, () =>
            {
                ContinueLevelPanel.SetActive(true);

                ContinueLevelPopUp.transform.DOKill();
                ContinueLevelPopUp.transform.localScale = Vector3.zero;
                ContinueLevelPopUp.transform.DOScale(1f, .5f).SetEase(Ease.OutBack);

                try
                {
                    // AdsManager.instance.ShowMRECBanner();
                }
                catch
                {
                }
            });

            // Panel Open Sfx
            AudioController.instance.PlaySfx(1, 3, 0.2f);
        }

        else
        {
            ContinueLevelPopUp.transform.DOKill();
            ContinueLevelPopUp.transform.localScale = new Vector3(1f, 1f, 1f);
            ContinueLevelPopUp.transform.DOScale(0, .5f).SetEase(Ease.InBack).OnComplete(() =>
            {
                ContinueLevelPanel.SetActive(false);

                DOVirtual.DelayedCall(.1f, () =>
                {
                    currentLevel.PlayBtnAnim();

                    DOVirtual.DelayedCall(.4f, () =>
                    {
                        //MapMenuTween.DORestart();

                        TopBarAnim.DORestart();
                    });
                });
            });

            // Panel Close Sfx
            AudioController.instance.PlaySfx(1, 4, 0);

            try
            {
                // AdsManager.instance.HideMRECBanner();
            }
            catch
            {
            }
        }
    }

    public void CloseOtherMapInfos(int currentIndex)
    {
        bool isClosing = false;

        for (int i = 0; i < MapLevelBtns.Length; i++)
        {
            if (i == currentIndex)
                continue;

            if (!MapLevelStatus[i])
                continue;

            isClosing = true;

            MapLevelStatus[i] = false;

            MapLevelInfos[i].DOPlayBackwards();

            int valIs = i;
            DOVirtual.DelayedCall(.35f, () =>
            {
                MapLevelBtns[valIs].gameObject.SetActive(true);
                MapLevelBtns[valIs].DORestart();

                MapLevelInfos[valIs].gameObject.SetActive(false);
            });
        }

        // Panel Close Sfx
        if (isClosing)
            AudioController.instance.PlaySfx(1, 6, 0);
    }

    public void OpenMapInfo(int infoIndex)
    {
        if (m_LastPressTime + (m_PressDelay - 0.5f) > Time.unscaledTime)
            return;

        m_LastPressTime = Time.unscaledTime;

        CloseOtherMapInfos(infoIndex);

        MapController.DisableBtnCols();

        MapLevelStatus[infoIndex] = true;

        MapLevelBtns[infoIndex].gameObject.SetActive(false);

        MapLevelInfos[infoIndex].gameObject.SetActive(true);
        MapLevelInfos[infoIndex].DORestart();

        MapController.FocusOnLevelInfo(infoIndex);

        // Panel Open Sfx
        AudioController.instance.PlaySfx(1, 5, 0);

        DOVirtual.DelayedCall(.4f, () =>
        {
            MapController.EnableBtnCols();
        });
    }

    public void CloseMapInfo(int infoIndex)
    {
        if (m_LastPressTime + (m_PressDelay - 0.5f) > Time.unscaledTime)
            return;

        m_LastPressTime = Time.unscaledTime;

        MapLevelStatus[infoIndex] = false;

        MapLevelInfos[infoIndex].DOPlayBackwards();

        DOVirtual.DelayedCall(.35f, () =>
        {
            MapLevelBtns[infoIndex].gameObject.SetActive(true);
            MapLevelBtns[infoIndex].DORestart();

            MapLevelInfos[infoIndex].gameObject.SetActive(false);
        });

        // Panel Close Sfx
        AudioController.instance.PlaySfx(1, 6, 0);
    }

    public void MapTutorialBtnPressed()
    {
        MapTutorialPanel.SetActive(false);

        Input.multiTouchEnabled = true;

        currentLevel.ReverseBtnAnim();

        DOVirtual.DelayedCall(.15f, () =>
        {
            MapBtn.transform.DOKill();
            MapBtn.transform.DOLocalMoveX(MapBtn.transform.localPosition.x - 500f, .5f);

            //MapMenuTween.DOPlayBackwards();

            TopBarAnim.DOPlayBackwards();
        });

        DOVirtual.DelayedCall(.5f, () =>
        {
            MAP.SetActive(true);
            MAP_Panel.SetActive(true);

            Temp.gameObject.SetActive(false);
        });

        SetupMapData(true);

        BirdSource.volume = 0;
        BirdSource.DOKill();
        BirdSource.DOFade(0.3f, 1f).SetDelay(1f);
        BirdSource.Play();
    }

    bool isMapOpened = false;

    public void MapState(bool state)
    {
        if (m_LastPressTime + (m_PressDelay - 0.5f) > Time.unscaledTime)
            return;

        m_LastPressTime = Time.unscaledTime;

        if (!SaveSystem.Instance.DataFields.mapUnlocked)
        {
            // ToastManager.instance.SendToast("Complete Level 1 To Unlock");

            return;
        }

        if (state)
        {
            isMapOpened = true;

            Input.multiTouchEnabled = true;

            currentLevel.ReverseBtnAnim();

            DOVirtual.DelayedCall(.15f, () =>
            {
            MapBtn.transform.DOKill();
            MapBtn.transform.DOLocalMoveX(MapBtn.transform.localPosition.x - 500f, .5f);

                //MapMenuTween.DOPlayBackwards();

                //TopBarAnim.DOPlayBackwards();
            });

            DOVirtual.DelayedCall(.5f, () =>
            {
                MAP.SetActive(true);
                MAP_Panel.SetActive(true);

                Temp.gameObject.SetActive(false);
            });

            if (specialCheckLvl2Complete)
            {
                specialCheckLvl2Complete = false;

                SetupMapData(true);
            }

            else
                SetupMapData();

            MusicSource.instance.PlayMusicSmooth(MapMusic);

            // Panel Open Sfx
            AudioController.instance.PlaySfx(2, 7, 0.2f);

            BirdSource.volume = 0;
            BirdSource.DOKill();
            BirdSource.DOFade(0.3f, 1f).SetDelay(1f);
            BirdSource.Play();
        }

        else
        {
            Input.multiTouchEnabled = false;

            DOVirtual.DelayedCall(.8f, () =>
            {
                MAP.SetActive(false);
                MAP_Panel.SetActive(false);

                Temp.gameObject.SetActive(true);

                //MapMenuTween.DORestart();

                TopBarAnim.DORestart();

                DOVirtual.DelayedCall(.4f, () =>
                {
                    currentLevel.PlayBtnAnim();
                });

                MusicSource.instance.PlayMusicSmooth(MenuMusic);
            });

            BirdSource.DOKill();
            BirdSource.DOFade(0f, 3f).OnComplete(() =>
            {
                BirdSource.Stop();
                BirdSource.volume = 0;
            });
        }
    }

    public void SendToastForLockedLevel3()
    {
        if (m_LastPressTime + (m_PressDelay - 0.5f) > Time.unscaledTime)
            return;

        m_LastPressTime = Time.unscaledTime;

        // ToastManager.instance.SendToast("Complete Miss Makeover To Unlock");

        DOVirtual.DelayedCall(.25f, () =>
        {
            MapController.FocusOnLevel(1);
        });

        // Btn Click Sfx
        AudioController.instance.PlaySfx(0, 0, 0);

        // Panel Open Sfx
        AudioController.instance.PlaySfx(1, 1, 0);
    }

    void SetupMapData(bool isTutorial = false)
    {
        for (int i = 0; i < SaveSystem.Instance.DataFields.AllLevels.Length; i++)
        {
            int totalParts = 4;

            int partsDone = 0;

            for (int j = 0; j < 4; j++)
            {
                if (SaveSystem.Instance.DataFields.AllLevels[i].subLevels[j].isCompleted)
                    partsDone++;
            }

            float prog = (float)((float)partsDone / (float)totalParts);

            MapBtnProgressBars[i].transform.DOKill();
            MapBtnProgressBars[i].transform.localScale = new Vector3(0, 1f, 1f);
            MapBtnProgressBars[i].transform.DOScale(new Vector3(prog, 1f, 1f), .2f);

            MapInfoProgressBars[i].transform.DOKill();
            MapInfoProgressBars[i].transform.localScale = new Vector3(0, 1f, 1f);
            MapInfoProgressBars[i].transform.DOScale(new Vector3(prog, 1f, 1f), .2f);

            MapInfoProgressTexts[i].text = "Level " + partsDone + "/" + totalParts;

            if (prog >= 1f)
            {
                MapBtnDirtyParts[i].SetActive(false);

                MapBtnCleanParts[i].SetActive(true);

                MapInfoDirtyParts[i].SetActive(false);

                MapInfoCleanParts[i].SetActive(true);

                MapBtnTicks[i].SetActive(true);

                MapBtnExclamations[i].SetActive(false);
            }

            else
            {
                MapBtnDirtyParts[i].SetActive(true);

                MapBtnCleanParts[i].SetActive(false);

                MapInfoDirtyParts[i].SetActive(true);

                MapInfoCleanParts[i].SetActive(false);

                MapBtnTicks[i].SetActive(false);

                MapBtnExclamations[i].SetActive(false);

                if (partsDone > 0)
                    MapBtnExclamations[i].SetActive(true);
            }

            float percentVal = prog * 100f;
            int valIs = (int)percentVal;

            MapBtnProgressTexts[i].text = valIs + "%";
        }

        if (SaveSystem.Instance.DataFields.AllLevels[1].Completed)
        {
            Level3BtnLock.SetActive(false);

            Level3BtnUnlock.SetActive(true);
        }

        else
        {
            Level3BtnLock.SetActive(true);

            Level3BtnUnlock.SetActive(false);
        }

        int lvlNoLast = SaveSystem.Instance.DataFields.levelToPlay - 1;
        int lvlNo = SaveSystem.Instance.DataFields.levelToPlay - 1;

        for (int i = 0; i < SaveSystem.Instance.DataFields.AllLevels.Length; i++)
        {
            if (!SaveSystem.Instance.DataFields.AllLevels[i].Completed)
            {
                lvlNo = i;

                break;
            }
        }

        if (isTutorial)
        {
            MapController.DisableBtnCols();

            MapController.FocusOnLevel(lvlNoLast);

            DOVirtual.DelayedCall(1.5f, () =>
            {
                MapController.FocusOnLevel(lvlNo);

                DOVirtual.DelayedCall(1.2f, () =>
                {
                    OpenMapInfo(lvlNo);
                });
            });
        }

        else
        {
            MapController.FocusOnLevel(lvlNo);
        }


        if (SaveSystem.Instance.DataFields.AllLevels[2].Completed)
        {
            for (int i = 0; i < MapLock_Extra.Length; i++)
            {
                MapLock_Extra[i].SetActive(false);
            }

            for (int i = 0; i < MapIcon_Extra.Length; i++)
            {
                MapIcon_Extra[i].SetActive(true);
            }
        }

        else
        {
            for (int i = 0; i < MapLock_Extra.Length; i++)
            {
                MapLock_Extra[i].SetActive(true);
            }

            for (int i = 0; i < MapIcon_Extra.Length; i++)
            {
                MapIcon_Extra[i].SetActive(false);
            }
        }
    }

    public void SetMapBtnState()
    {
        if (SaveSystem.Instance.DataFields.mapUnlocked)
        {
            MapBtn.image.sprite = MapBtnIconOn;
        }

        else
        {
            MapBtn.image.sprite = MapBtnIconOff;
        }
    }

    public void OpenMapInfo_EXTRA(int infoIndex)
    {
        if (m_LastPressTime + (m_PressDelay - 0.5f) > Time.unscaledTime)
            return;

        m_LastPressTime = Time.unscaledTime;

        CloseOtherMapInfos(infoIndex);

        if (SaveSystem.Instance.DataFields.AllLevels[2].Completed)
        {
            MapController.DisableBtnCols();

            MapLevelStatus[infoIndex] = true;

            MapLevelBtns[infoIndex].gameObject.SetActive(false);

            MapLevelInfos[infoIndex].gameObject.SetActive(true);
            MapLevelInfos[infoIndex].DORestart();

            MapController.FocusOnLevelInfo(infoIndex);

            // Panel Open Sfx
            AudioController.instance.PlaySfx(1, 5, 0);

            DOVirtual.DelayedCall(.4f, () =>
            {
                MapController.EnableBtnCols();
            });
        }

        else
        {
            // if (infoIndex == 3)
            //     ToastManager.instance.SendToast(MapToastStr_Extra[0]);

            // else if (infoIndex == 4)
            //     ToastManager.instance.SendToast(MapToastStr_Extra[1]);

            // else if (infoIndex == 5)
            //     ToastManager.instance.SendToast(MapToastStr_Extra[2]);

            int lvlNo = SaveSystem.Instance.DataFields.levelToPlay - 1;

            for (int i = 0; i < SaveSystem.Instance.DataFields.AllLevels.Length; i++)
            {
                if (!SaveSystem.Instance.DataFields.AllLevels[i].Completed)
                {
                    lvlNo = i;

                    break;
                }
            }

            MapController.FocusOnLevel(lvlNo);

            // Btn Click Sfx
            AudioController.instance.PlaySfx(0, 0, 0);

            // Panel Open Sfx
            AudioController.instance.PlaySfx(1, 1, 0);
        }
    }

    public void CloseMapInfo_EXTRA(int infoIndex)
    {
        if (m_LastPressTime + (m_PressDelay - 0.5f) > Time.unscaledTime)
            return;

        m_LastPressTime = Time.unscaledTime;

        MapLevelStatus[infoIndex] = false;

        MapLevelInfos[infoIndex].DOPlayBackwards();

        DOVirtual.DelayedCall(.35f, () =>
        {
            MapLevelBtns[infoIndex].gameObject.SetActive(true);
            MapLevelBtns[infoIndex].DORestart();

            MapLevelInfos[infoIndex].gameObject.SetActive(false);
        });

        // Panel Close Sfx
        AudioController.instance.PlaySfx(1, 6, 0);

        // if (infoIndex == 3)
        //     ToastManager.instance.SendToast(MapComingsoonToastStr_Extra[0]);

        // else if (infoIndex == 4)
        //     ToastManager.instance.SendToast(MapComingsoonToastStr_Extra[1]);

        // else if (infoIndex == 5)
        //     ToastManager.instance.SendToast(MapComingsoonToastStr_Extra[2]);

    }

    #endregion

    bool levelLoading = false;

    void CheckLevelComplete()
    {
        int currentLevel = SaveSystem.Instance.DataFields.levelToPlay - 1;
        int subLevelCount = SaveSystem.Instance.DataFields.AllLevels[currentLevel].subLevels.Length;

        if (SaveSystem.Instance.DataFields.AllLevels[currentLevel].Completed)
            return;

        bool allFinished = true;

        for (int i = 0; i < subLevelCount; i++)
        {
            if (!SaveSystem.Instance.DataFields.AllLevels[currentLevel].subLevels[i].isCompleted)
            {
                allFinished = false;

                break;
            }
        }

        SaveSystem.Instance.DataFields.AllLevels[currentLevel].Completed = allFinished;

        if (PlayerPrefs.GetInt("Level2SpecialCheck", 0) == 0 && allFinished)
        {
            if (currentLevel == 1)
            {
                PlayerPrefs.SetInt("Level2SpecialCheck", 1);

                specialCheckLvl2Complete = true;
            }
        }

        if (allFinished)
        {
            completeParticles.gameObject.SetActive(true);

            EventSystem.SetActive(false);

            DOVirtual.DelayedCall(2f, () =>
            {
                if (!SaveSystem.Instance.DataFields.mapTutorial)
                {
                    SaveSystem.Instance.DataFields.mapTutorial = true;
                    SaveSystem.Instance.DataFields.mapUnlocked = true;

                    MapTutorialPanel.SetActive(true);

                    SetMapBtnState();
                }

                EventSystem.SetActive(true);
            });

            AudioController.instance.PlaySfx(2, 8, 0f);
        }
    }

    public void NextLevel()
    {
        SaveSystem.Instance.DataFields.levelToPlay++;

        if (SaveSystem.Instance.DataFields.levelToPlay > SaveSystem.Instance.TotalLevels)
        {
            SaveSystem.Instance.DataFields.levelToPlay = 1;
        }

        SceneManager.LoadScene(1);
    }

    public void HideUIButtons()
    {
        DOVirtual.DelayedCall(.15f, () =>
        {
            //MapMenuTween.DOPlayBackwards();

            TopBarAnim.DOPlayBackwards();
        });
    }
}