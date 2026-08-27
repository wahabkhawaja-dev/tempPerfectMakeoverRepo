using UnityEngine;
using DG.Tweening;
using UnityEngine.Events;

public class Lvl3_PlaceItem : MonoBehaviour
{
    [Space()]
    public BasicDrag Tool;
    public GameObject Detect;
    public GameObject Target;

    [Space()]
    public UnityEvent OnComplete;

    [Space()]
    public AudioClip PlaceClip;

    bool isPlaced = false;
    bool isInsideCollider = false;

    void Start()
    {
        Tool.OnMouseUpEvent += PlaceItems;
    }

    void OnTriggerEnter2D(Collider2D collision)
    {
        if (isPlaced)
            return;

        if (collision != null)
        {
            if (collision.gameObject == Detect.gameObject)
            {
                isInsideCollider = true;

                Tool.dontResetItIsInCollider = true;
            }
        }
    }

    void OnTriggerExit2D(Collider2D collision)
    {
        if (isPlaced)
            return;

        if (collision != null)
        {
            if (collision.gameObject == Detect.gameObject)
            {
                isInsideCollider = false;

                Tool.dontResetItIsInCollider = false;
            }
        }
    }

    void PlaceItems()
    {
        if (isPlaced)
            return;

        if (!isInsideCollider)
            return;

        isPlaced = true;

        Tool.isPlacedCannotMove = true;

        Tool.enabled = false;
        Tool.thisCollider.enabled = false;
        Tool.isDragging = false;
        Tool.canDrag = false;

        Tool.transform.DOKill();
        Tool.transform.DOMove(Target.transform.position, .5f);

        try
        {
            if (PlaceClip != null)
                AudioController.instance.PlayAnySfx(2, PlaceClip, 0.4f);

            // VibrationManager.instance.MediumImpact();
        }
        catch
        {
        }

        DOVirtual.DelayedCall(.51f, () =>
        {
            if (OnComplete != null)
                OnComplete.Invoke();

            Target.gameObject.SetActive(true);

            Tool.gameObject.SetActive(false);
        });
    }
}
