using UnityEngine;

public class MusicSource : MonoBehaviour
{
    public static MusicSource instance;

    [Space()]
    public AudioSource source;

    void Start()
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
    }

    public void PlayMusic(AudioClip musicClip, float volume = 0.5f)
    {
        source.clip = musicClip;
        source.volume = volume;
        source.Play();
    }
}
