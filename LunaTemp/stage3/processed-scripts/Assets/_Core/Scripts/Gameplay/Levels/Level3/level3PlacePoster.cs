using UnityEngine;
using DG.Tweening;
using UnityEngine.Events;

public class level3PlacePoster : MonoBehaviour
{
    [Space()]
    public BasicDrag Tool;
    public GameObject Detect;
    public GameObject Target;
    public GameObject Holder;
    public GameObject Indication;

    [Space()]
    public AudioClip Clip;

    [Space()]
    public UnityEvent OnComplete;

    bool isPlaced = false, isInsideCollider = false;

    void Start()
    {
        Tool.OnMouseUpEvent += PlaceItem;
    }

    void OnTriggerEnter2D(Collider2D collision)
    {
        if (isPlaced)
            return;

        if (collision != null)
        {
            if (collision.gameObject == Detect)
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
            if (collision.gameObject == Detect)
            {
                isInsideCollider = false;

                Tool.dontResetItIsInCollider = false;
            }
        }
    }

    void PlaceItem()
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
        Tool.transform.DORotateQuaternion(Target.transform.rotation, .5f);
        //Tool.transform.DOScale(Target.transform.localScale, .5f);

        DOVirtual.DelayedCall(.5f, () =>
        {
            if (OnComplete != null)
                OnComplete.Invoke();

            if (Indication != null)
                Indication.SetActive(false);

            Holder.SetActive(true);

            Tool.gameObject.SetActive(false);
        });

        try
        {
            if (Clip != null)
                AudioController.instance.PlayAnySfx(2, Clip, 0f);

            
        }
        catch
        {
        }
    }
}
