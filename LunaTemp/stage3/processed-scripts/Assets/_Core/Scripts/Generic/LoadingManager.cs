using UnityEngine;
using DG.Tweening;
using UnityEngine.UI;
using System.Collections;

public class LoadingManager : MonoBehaviour
{
    public static LoadingManager instance;

    [Header("Loading Animation")]
    [Space()]
    public float animTime = 5f;

    [Space()]
    public GameObject Canvas_Loading;
    public Slider progressSlider;
    public Text progressTxt;

    [Space()]
    public Image Fade_Img;

    void Awake()
    {
        if (instance == null)
        {
            instance = this;

            DontDestroyOnLoad(gameObject);
        }

        else
        {
            Destroy(gameObject);
        }

        if (Canvas_Loading != null)
            Canvas_Loading.SetActive(false);
    }

    public void ShowLoading()
    {
        if (Canvas_Loading == null)
            return;

        Canvas_Loading.SetActive(true);

        if (progressSlider != null)
            progressSlider.value = 0;

        StartCoroutine(ExecuteLoading());

        StartCoroutine(UpdateProgressText());
    }

    IEnumerator ExecuteLoading()
    {
        if (progressSlider != null)
            progressSlider.DOValue(1, animTime).SetEase(Ease.Linear);

        yield return new WaitForSeconds(animTime);

        Canvas_Loading.SetActive(false);
    }

    IEnumerator UpdateProgressText()
    {
        WaitForSeconds wait = new WaitForSeconds(0.1f); // Reduced update frequency

        while (Canvas_Loading != null && Canvas_Loading.activeSelf)
        {
            if (progressSlider != null && progressTxt != null)
            {
                int percentage = Mathf.RoundToInt(progressSlider.value * 100);
                progressTxt.text = $"{percentage}%";
            }
            yield return wait;
        }
    }

    public void ShowFadeAnim(float duration, float innerDuration)
    {
        if (Fade_Img == null)
            return;

        Fade_Img.gameObject.SetActive(true);
        Fade_Img.DOKill();
        Fade_Img.DOFade(0, 0.001f);
        Fade_Img.DOFade(1, duration).OnComplete(() =>
        {
            Fade_Img.DOFade(0f, duration).SetDelay(innerDuration).OnComplete(() =>
            {
                Fade_Img.gameObject.SetActive(false);
            });
        });
    }

}