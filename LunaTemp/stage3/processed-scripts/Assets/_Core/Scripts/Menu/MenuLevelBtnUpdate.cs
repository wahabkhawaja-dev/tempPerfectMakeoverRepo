using UnityEngine;
using DG.Tweening;

public class MenuLevelBtnUpdate : MonoBehaviour
{
    [Space()]
    public GameObject UnlockAnimPrefab;

    [Space()]
    public Sprite IconB;
    public Sprite IconG;

    [Space()]
    public Vector3 LockScale = new Vector3(0.18f, 0.18f, 0.18f);
    public Vector3 UnlockScale = new Vector3(0.2f, 0.2f, 0.2f);

    [Space()]
    public SpriteButton[] LevelBtns;
    public SpriteRenderer[] LevelBgs;
    public SpriteRenderer[] LevelIcons;
    public SpriteRenderer[] LevelLocks;

    bool animLockSetup = true;

    void Start()
    {
        Invoke(nameof(SetupUI), .15f);
    }

    void SetupUI()
    {
        int currentLevel = SaveSystem.Instance.DataFields.levelToPlay;

        for (int i = 0; i < LevelBtns.Length; i++)
        {
            LevelBtns[i].transform.localScale = LockScale;

            LevelBgs[i].sprite = IconB;

            LevelBtns[i].isLocked = true;

            LevelLocks[i].gameObject.SetActive(true);   

            LevelIcons[i].gameObject.SetActive(false);   

            if (!SaveSystem.Instance.DataFields.AllLevels[currentLevel - 1].subLevels[i].isLocked)
            {
                LevelBtns[i].transform.localScale = UnlockScale;

                LevelBgs[i].sprite = IconB;

                LevelBtns[i].isLocked = false;

                LevelLocks[i].gameObject.SetActive(false);

                LevelIcons[i].gameObject.SetActive(true);
            }

            if (SaveSystem.Instance.DataFields.AllLevels[currentLevel - 1].subLevels[i].isCompleted)
            {
                LevelBtns[i].transform.localScale = UnlockScale;

                LevelBgs[i].sprite = IconG;

                LevelBtns[i].isLocked = false;

                LevelLocks[i].gameObject.SetActive(false);

                LevelIcons[i].gameObject.SetActive(true);
            }

            // FUTURE LOCK ANIM PREDICTION
            if (MenuManager.instance != null && MenuManager.instance.cameFromGP && animLockSetup)
            {
                animLockSetup = false;

                if (i == (SaveSystem.Instance.DataFields.NextlevelToStart - 1))
                {
                    LevelBtns[i].transform.localScale = UnlockScale;

                    LevelBgs[i].sprite = IconB;

                    LevelLocks[i].gameObject.SetActive(true);

                    LevelIcons[i].gameObject.SetActive(false);
                }
            }
        }
    }

    public void ShowUnlockAnimAt(int index)
    {
        if (index > LevelBtns.Length)
        {
            Debug.LogError("OUTSIDE ARRAY");

            return;
        }

        int val = (index - 1);

        LevelLocks[val].gameObject.SetActive(true);

        LevelIcons[val].gameObject.SetActive(false);

        DOVirtual.DelayedCall(2f, () =>
        {
            LevelLocks[val].gameObject.SetActive(true);
            Color colorTemp = Color.white;
            colorTemp.a = 1f;
            LevelLocks[val].color = colorTemp;

            LevelIcons[val].gameObject.SetActive(true);
            colorTemp = Color.white;
            colorTemp.a = 0f;
            LevelIcons[val].color = colorTemp;

            Vector3 startScaleIs = LevelIcons[val].transform.localScale;
            LevelIcons[val].transform.localScale = Vector3.zero;

            GameObject Temp = Instantiate(UnlockAnimPrefab, LevelBtns[val].transform);
            Temp.transform.localScale = Vector3.one;
            Temp.transform.localPosition = LevelIcons[val].transform.localPosition;

            LevelLocks[val].DOKill();
            LevelLocks[val].transform.DOKill();

            LevelLocks[val].DOFade(0, 1f);
            LevelLocks[val].transform.DOScale(0, 1f);

            LevelIcons[val].DOKill();
            LevelIcons[val].transform.DOKill();

            LevelIcons[val].DOFade(1f, 1f);
            LevelIcons[val].transform.DOScale(startScaleIs, 1f).SetEase(Ease.OutBack);

            try
            {
                LevelBtns[val].GetComponent<Collider2D>().enabled = false;

                DOVirtual.DelayedCall(1f, () =>
                {
                    LevelBtns[val].GetComponent<Collider2D>().enabled = true;
                });
            }
            catch
            {
            }
        });
    }
}