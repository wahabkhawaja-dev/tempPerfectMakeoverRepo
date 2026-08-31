using DG.Tweening;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class PlaceItem : MonoBehaviour
{
    [Space()]
    public BasicDrag thisDrag;

    [Space()]
    public GameObject Target;

    [Space()]
    public AudioClip Clip;

    [Space()]
    [Tooltip("Hop up above the target first, then settle down into it")]
    public bool jumpOnPlace = false;
    public float jumpHeight = 0.5f;
    public float jumpDuration = 0.2f;
    public float settleDuration = 0.3f;

    public bool isPlaced = false;
    public bool isInsideCollider = false;

    Collider2D thisCol;

    [Space()]
    public bool changeScaleOnPlace;
    public Transform item;
    public Vector3 newScaleOnPlace = Vector3.one;

    public UnityEvent OnPlaced;
    void Start()
    {
        thisCol = GetComponent<Collider2D>();
        thisDrag.OnMouseUpEvent += PlaceItemCheck;
    }

    void OnTriggerEnter2D(Collider2D collision)
    {
        if (isPlaced)
            return;

        if (collision != null)
        {
            if (collision.gameObject == Target)
            {
                isInsideCollider = true;

                thisDrag.canReturn = false;
                thisDrag.dontResetItIsInCollider = true;
            }
        }
    }

    void OnTriggerExit2D(Collider2D collision)
    {
        if (isPlaced)
            return;

        if (collision != null)
        {
            if (collision.gameObject == Target)
            {
                isInsideCollider = false;

                thisDrag.canReturn = true;

                thisDrag.dontResetItIsInCollider = false;
            }
        }
    }


    void PlaceItemCheck()
    {
        if (isPlaced)
            return;

        if (!isInsideCollider)
            return;

        thisDrag.isDragging = false;
        thisDrag.canDrag = false;
        thisDrag.thisCollider.enabled = false;

        thisCol.enabled = false;

        isPlaced = true;

        Target.SetActive(false);

        thisDrag.transform.DOKill();

        Vector3 targetPos = Target.transform.position;
        float placeDuration = 0.25f;


        if (changeScaleOnPlace) 
        {
            item.DOKill();
            item.DOScale(newScaleOnPlace, 0.25f);
        }

        if (jumpOnPlace)
        {
            placeDuration = jumpDuration + settleDuration;

            Sequence placeSeq = DOTween.Sequence();
            placeSeq.Append(thisDrag.transform.DOMove(targetPos + Vector3.up * jumpHeight, jumpDuration).SetEase(Ease.OutQuad));
            placeSeq.Append(thisDrag.transform.DOMove(targetPos, settleDuration).SetEase(Ease.InQuad));

            thisDrag.transform.DORotateQuaternion(Target.transform.rotation, placeDuration);
        }
        else
        {
            thisDrag.transform.DOMove(targetPos, placeDuration);
            thisDrag.transform.DORotateQuaternion(Target.transform.rotation, placeDuration);
        }

        Target.SetActive(false);

        DOVirtual.DelayedCall(placeDuration, () =>
        {
            OnPlaced.Invoke();
        });

        if(jumpOnPlace)
        {
            if (Clip != null)
                AudioController.instance.PlayAnySfx(2, Clip, 0.2f);

        }
        else
        {
            if (Clip != null)
                AudioController.instance.PlayAnySfx(2, Clip, 0f);
        }


        // if (VibrationManager.instance != null)
            // VibrationManager.instance.MediumImpact();

    }
}
