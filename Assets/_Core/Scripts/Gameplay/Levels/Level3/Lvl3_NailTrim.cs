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
        if (Tool != null)
        {
            Tool.OnMouseDownEvent += () =>
            {
                if (thisCol != null)
                    thisCol.enabled = true;
            };

            Tool.OnMouseUpEvent += () =>
            {
                if (thisCol != null)
                    thisCol.enabled = false;
            };
        }

        if (thisCol != null)
            thisCol.enabled = false;
    }

    void OnTriggerEnter2D(Collider2D collision)
    {
        TryTrim(collision);
    }

    void OnTriggerStay2D(Collider2D collision)
    {
        TryTrim(collision);
    }

    void TryTrim(Collider2D collision)
    {
        if (isDone || collision == null || Targets == null)
            return;

        for (int i = 0; i < Targets.Length; i++)
        {
            if (Targets[i] != null && collision.gameObject == Targets[i].gameObject)
            {
                TrimNail(i);
                break;
            }
        }
    }

    void TrimNail(int index)
    {
        if (isDone)
            return;

        if (NailsStatus != null && index < NailsStatus.Length && NailsStatus[index])
            return;

        if (NailsStatus != null && index < NailsStatus.Length)
            NailsStatus[index] = true;

        if (Targets != null && index < Targets.Length && Targets[index] != null)
            Targets[index].SetActive(false);

        if (NailParticles != null && index < NailParticles.Length && NailParticles[index] != null)
            NailParticles[index].Play();

        if (Nails != null && index < Nails.Length && Nails[index] != null)
        {
            Nails[index].DOKill();
            Nails[index].DOFade(0, 1f);
        }

        try
        {
            if (TrimClip != null && AudioController.instance != null)
                AudioController.instance.PlayAnySfx(1, TrimClip, 0.1f);
        }
        catch
        {
        }

        DOVirtual.DelayedCall(.51f, () =>
        {
            nailsRemoved++;

            try
            {
                if (UI_Manager.instance != null && Targets != null && Targets.Length > 0)
                    UI_Manager.instance.SetProgressBar((float)nailsRemoved / (float)Targets.Length);
            }
            catch
            {
            }

            if (Targets != null && nailsRemoved >= Targets.Length)
                FireComplete();
        });
    }

    void FireComplete()
    {
        if (isDone)
            return;

        isDone = true;

        if (thisCol != null)
            thisCol.enabled = false;

        if (OnComplete != null)
            OnComplete.Invoke();
    }
}
