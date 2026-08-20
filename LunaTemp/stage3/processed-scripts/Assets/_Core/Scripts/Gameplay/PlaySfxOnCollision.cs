using DG.Tweening;
using UnityEngine;

public class PlaySfxOnCollision : MonoBehaviour
{
    [Space()]
    public GameObject Tip;

    [Space()]
    public SfxPlayType Mode = SfxPlayType.OnEnter;
    public BasicDrag DragInput;

    [Space()]
    public AudioSource Source;
    public float startVol = 0f;
    public float targetVol = 1f;
    public float duration = .3f;

    [Space()]
    public ParticleSystem Particles;

    [Space()]
    public bool isDone = false;
    public bool isInArea = false;
    public bool isPlaying = false;

    // OPTIMIZATION: Store the tween to avoid searching with DOKill
    private Tween _fadeTween;
    // OPTIMIZATION: Cache the transform for faster comparison than .gameObject
    private Transform _tipTransform;

    void Awake()
    {
        if (Tip != null) _tipTransform = Tip.transform;

        if (DragInput != null)
            DragInput.OnMouseUpEvent += HandleStop;
    }

    void OnTriggerEnter2D(Collider2D collision)
    {
        if (isDone || collision == null)
            return;

        // OPTIMIZATION: Compare transforms directly (faster than gameObject comparison)
        if (collision.transform == _tipTransform)
        {
            if (Mode == SfxPlayType.OnEnter)
            {
                HandlePlay();
            }

            isInArea = true;
        }
    }

    void OnTriggerExit2D(Collider2D collision)
    {
        if (isDone || collision == null)
            return;

        if (collision.transform == _tipTransform)
        {
            if (Mode == SfxPlayType.OnEnter)
            {
                DOVirtual.DelayedCall(0.35f, () =>
                {
                    if (!isInArea)
                    {
                        HandleStop();
                    }
                });
            }

            isInArea = false;
        }
    }


    void Update()
    {
        if (Mode == SfxPlayType.OnDrag)
        {
            bool isMoving = DragInput != null && DragInput.isObjectMovingWhileDragging;

            if (isInArea && !isPlaying && isMoving)
            {
                isPlaying = true;

                HandlePlay();
            }
            else if ((!isInArea || !isMoving) && isPlaying)
            {
                isPlaying = false;
                HandleStop();
            }
        }
    }

    void HandlePlay()
    {
        if (Source != null) PlayAudio();
        if (Particles != null) Particles.Play();
    }

    void HandleStop()
    {
        if (Source != null) StopAudio();
        if (Particles != null) Particles.Stop();
    }

    void PlayAudio()
    {
        _fadeTween?.Kill(); // Kill specific tween instead of searching globally

        if (!Source.isPlaying) Source.Play();
        _fadeTween = Source.DOFade(targetVol, duration).SetUpdate(true);
    }

    void StopAudio()
    {
        _fadeTween?.Kill();

        // OPTIMIZATION: Removed Lambda () => { } to stop GC allocations
        // Instead of OnComplete, we use a simple fade and let the Stop logic handle it
        _fadeTween = Source.DOFade(startVol, duration)
            .OnComplete(OnFadeOutComplete);
    }

    // This is cached by the compiler better than an anonymous lambda
    void OnFadeOutComplete()
    {
        if (Source.volume <= startVol + 0.01f)
            Source.Stop();
    }

    public void DisableSfx()
    {
        isDone = true;
        HandleStop();
        isInArea = false;
    }

    // Cleanup on destroy to prevent DOTween leaks
    void OnDestroy()
    {
        _fadeTween?.Kill();

        if (DragInput != null)
            DragInput.OnMouseUpEvent -= HandleStop;
    }
}

[System.Serializable]
public enum SfxPlayType
{
    OnEnter,
    OnDrag
}
