using UnityEngine;
using DG.Tweening;
using UnityEngine.Events;

public class Lvl21RemoveItem : MonoBehaviour
{
    [Space()]
    public BasicDrag Tool;

    [Space()]
    public OutlinePulse Outline;

    [Space()]
    public UnityEvent OnTap;

    [Space()]
    public UnityEvent OnComplete;

    [Space()]
    public AudioClip Clip;

    bool isDone = false;

    void Start()
    {
        Tool.OnMouseDownEvent += DisableOutline;
        Tool.OnMouseUpEvent += RemoveTool;
    }

    void DisableOutline()
    {
        if (isDone)
            return;

        if (OnTap != null)
            OnTap.Invoke();

        Outline.DisableAnim();
    }

    void RemoveTool()
    {
        if (isDone)
            return;

        isDone = true;

        Tool.isPlacedCannotMove = true;

        Tool.enabled = false;
        Tool.isDragging = false;
        Tool.thisCollider.enabled = false;
        Tool.canDrag = false;

        Tool.transform.DOKill();
        Tool.transform.DOMoveX(10, .5f).SetEase(Ease.InBack);

        if (Clip != null)
            AudioController.instance.PlayAnySfx(Random.Range(0, 4), Clip, 0.1f);

        DOVirtual.DelayedCall(.5f, () =>
        {
            if (OnComplete != null)
                OnComplete.Invoke();

            Tool.gameObject.SetActive(false);
        });
    }
}
