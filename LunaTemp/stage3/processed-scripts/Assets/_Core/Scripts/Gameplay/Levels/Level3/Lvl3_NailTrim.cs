using UnityEngine;
using DG.Tweening;
using UnityEngine.Events;

public class Lvl3_NailTrim : MonoBehaviour
{
    [Space()]
    public BasicDrag Tool;

    [Space()]
    public Collider2D thisCol;
    public GameObject[] Targets;
    public SpriteRenderer[] Nails;
    public ParticleSystem[] NailParticles;
    public bool[] NailsStatus;

    [Space()]
    public UnityEvent OnComplete;

    [Space()]
    public AudioClip TrimClip;

    bool isDone = false;
    int nailsRemoved = 0;

    void Start()
    {
        Tool.OnMouseDownEvent += () =>
        {
            thisCol.enabled = true;
        };

        Tool.OnMouseUpEvent += () =>
        {
            thisCol.enabled = false;
        };

        thisCol.enabled = false;
    }

    void OnTriggerEnter2D(Collider2D collision)
    {
        if (isDone)
            return;

        if (collision != null)
        {
            for (int i = 0; i < Targets.Length; i++)
            {
                if (collision.gameObject == Targets[i].gameObject)
                {
                    TrimNail(i);

                    break;
                }
            }
        }
    }

    void TrimNail(int index)
    {
        if (isDone)
            return;

        if (NailsStatus[index])
            return;

        NailsStatus[index] = true;

        Targets[index].SetActive(false);

        NailParticles[index].Play();

        Nails[index].DOKill();
        Nails[index].DOFade(0, 1f);

        DOVirtual.DelayedCall(.51f, () =>
        {
            nailsRemoved++;

            UI_Manager.instance.SetProgressBar((float)nailsRemoved / (float)Targets.Length);

            if (nailsRemoved >= Targets.Length)
            {
                if (Tool.isDragging)
                {
                    Tool.OnMouseUpEvent += () =>
                    {
                        if (OnComplete != null)
                            OnComplete.Invoke();
                    };
                }
                else
                {
                    if (OnComplete != null)
                        OnComplete.Invoke();
                }
            }
        });

        try
        {
            if (TrimClip != null)
                AudioController.instance.PlayAnySfx(1, TrimClip, 0.1f);

            // VibrationManager.instance.MediumImpact();
        }
        catch
        {
        }

    }
}
