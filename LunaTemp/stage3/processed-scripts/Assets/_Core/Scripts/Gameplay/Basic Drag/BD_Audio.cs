using UnityEngine;
using DG.Tweening;
using System.Collections;

public class BD_Audio : MonoBehaviour
{
    [Space()]
    public BasicDrag BD;

    [Space()]
    public AudioSource Source;

    [Space()]
    public bool shouldRestart = true;

    [Space()]
    public float startVol = 0f;
    public float targetVol = 1f;
    public float duration = .3f;

    [Space()]
    public float startDelay = 0f;

    void Start()
    {
        BD.OnMouseDownEvent += PlayAudio;
        BD.OnMouseUpEvent += StopAudio;

        Source.volume = startVol;
    }

    void PlayAudio()
    {
        if (PlayCo != null)
            StopCoroutine(PlayCo);

        PlayCo = StartCoroutine(PlayIt());
    }

    Coroutine PlayCo;

    IEnumerator PlayIt()
    {
        yield return new WaitForSeconds(startDelay);

        Source.Play();

        Source.DOKill();
        Source.DOFade(targetVol, duration);
    }

    void StopAudio()
    {
        if (PlayCo != null)
            StopCoroutine(PlayCo);

        Source.DOKill();
        Source.DOFade(startVol, duration).OnComplete(() =>
        {
            if (shouldRestart)
                Source.Stop();

            else
                Source.Pause();
        });
    }

}
