using UnityEngine;

public class IntroLevelAnim : MonoBehaviour
{
    [Space()]
    public MenuLevel menuLevel;

    [Space()]
    public string lvlkey = "PartyDress";

    [Space()]
    public GameObject DressChangeObj;

    [Space()]
    public AudioClip DressChangeClip;

    bool isPlayed;

    void Start()
    {
        if (PlayerPrefs.GetInt(lvlkey, 0) == 0)
        {
            isPlayed = false;
        }
        else
            isPlayed = true;
    }

    public void OnLevelBtnPressed()
    {
        if (isPlayed)
        {
            menuLevel.SelectLevelItem(2);
        }

        else
        {
            menuLevel.ReverseBtnAnim();

            MenuManager.instance.HideUIButtons();

            isPlayed = true;

            DressChangeObj.SetActive(true);

            if (DressChangeClip != null)
                AudioController.instance.PlayAnySfx(1, DressChangeClip, 0.3f);
        }
    }
}
