using UnityEngine;
using UnityEngine.Audio;
using System.Collections;

public class AudioController : MonoBehaviour
{
    public static AudioController instance;

    [Space()]
    public AudioMixer MainMixer;

    [Space()]
    [Space()]
    public AudioClip UiClick;
    public AudioSource UiClickSource;

    [Space()]
    [Space()]
    public AudioSource[] SfxSources;
    public AudioClip[] AllClips;

    void Awake()
    {
        instance = this;
    }

    void Start()
    {
        SetupThings();
    }

    public void SetupThings()
    {
        float musicVolume = PlayerPrefs.GetFloat("MusicVolume", 0f);
        MainMixer.SetFloat("music", musicVolume);

        float sfxVolume = PlayerPrefs.GetFloat("SfxVolume", 0f);
        MainMixer.SetFloat("sfx", sfxVolume);
    }

    public void PlaySfx(int sfxSourceIndex, int clipIndex, float delay)
    {
        StartCoroutine(Exec());

        IEnumerator Exec()
        {
            yield return new WaitForSeconds(delay);

            SfxSources[sfxSourceIndex].PlayOneShot(AllClips[clipIndex]);
        }
    }

    public void PlayAnySfx(int sfxSourceIndex, AudioClip anyClip, float delay)
    {
        StartCoroutine(Exec());

        IEnumerator Exec()
        {
            yield return new WaitForSeconds(delay);

            SfxSources[sfxSourceIndex].PlayOneShot(anyClip);
        }
    }

    public void PlayUiClickSfx()
    {
        UiClickSource.PlayOneShot(UiClick);
    }

    public void PlayBtnClickSfx()
    {
        PlaySfx(2, 0, 0);
    }

    public void PlayBtnClickSfxGameplay()
    {
        PlaySfx(0, 4, 0);
    }
}
