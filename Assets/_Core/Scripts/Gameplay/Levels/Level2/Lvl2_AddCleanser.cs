using UnityEngine;
using DG.Tweening;
using UnityEngine.Events;
using JetBrains.Annotations;

public class Lvl2_AddCleanser : MonoBehaviour
{
    [Space()]
    public BasicDrag ThisDrag;

    [Space()]
    public Collider2D Col;

    [Space()]
    public Animator AnimPlayer;
    public string AnimName;

    [Space()]
    public GameObject[] Detects;
    public Animator[] Anims;

    [Space()]
    public UnityEvent OnComplete;

    [Space()]
    public AudioClip Clip;

    [Space()]
    public InteractableBones[] BonesToShake;

    [Space()]
    public int currentPrimer = 0;

    void Start()
    {
        ThisDrag.OnMouseDownEvent += () =>
        {
            Col.enabled = true;
        };

        ThisDrag.OnMouseUpEvent += () =>
        {
            Col.enabled = false;
        };

        Col.enabled = false;
    }

    void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision != null)
        {
            for (int i = 0; i < Detects.Length; i++)
            {
                if (collision.gameObject == Detects[i].gameObject)
                {
                    collision.enabled = false;

                    AddPrimer(i);

                    break;
                }
            }
        }
    }
    void AddPrimer(int index)
    {
        currentPrimer++;

        ToolInputToggle(ThisDrag.gameObject, false);

        ThisDrag.isDragging = false;

        ThisDrag.transform.DOKill();
        ThisDrag.transform.DOMove(Anims[index].transform.position, .5f);

        DOVirtual.DelayedCall(0.5f, () =>
        {
            AnimPlayer.Play(AnimName, 0, 0f);

            DOVirtual.DelayedCall(0.45f, () =>
            {
                Detects[index].SetActive(false);

                Anims[index].gameObject.SetActive(true);

                DOVirtual.DelayedCall(0.25f, () =>
                {
                    Anims[index].enabled = false;

                    ThisDrag.gameObject.SetActive(true);

                    if (currentPrimer >= Anims.Length)
                    {
                        if (OnComplete != null)
                            OnComplete.Invoke();
                    }
                    else
                    {
                        ToolInputToggle(ThisDrag.gameObject, true);

                        if (Input.GetMouseButton(0))
                        {
                            ThisDrag.isDragging = true;
                        }
                    }
                });

                try
                {
                    AudioController.instance.PlayAnySfx(Random.Range(0, 2), Clip, 0f);
                }
                catch
                {
                }

                

                BonesToShake[index].SingleShake();
            });
        });
    }

    public void ToolInputToggle(GameObject tool, bool toggle)
    {
        if (tool != null)
        {
            var drag = tool.GetComponent<BasicDrag>();
            if (drag != null)
            {
                drag.canDrag = toggle;
                drag.thisCollider.enabled = toggle;
                drag.enabled = toggle;

                if (!toggle)
                {
                    drag.isDragging = false;

                    

                    if (drag.ToolLoopClip != null)
                    {
                        drag.ToolLoopClip.Pause();
                    }
                }
            }
        }
    }
}
