using UnityEngine;
using DG.Tweening;
using System.Collections;
using UnityEngine.EventSystems;

public class ChapterScroll : MonoBehaviour, IBeginDragHandler, IEndDragHandler
{
    [Space()]
    public DOTweenAnimation ChapterTopBarAnim;

    bool isUp = false;
    Coroutine co;

    public void OnBeginDrag(PointerEventData eventData)
    {
        if (co != null)
        {
            StopCoroutine(co);
            co = null;
        }

        if (isUp)
            return;

        isUp = true;
        ChapterTopBarAnim.DOPlayBackwards(); // Goes up
    }

    public void OnEndDrag(PointerEventData eventData)
    {
        if (co != null)
            StopCoroutine(co);

        co = StartCoroutine(HideBar());
    }

    IEnumerator HideBar()
    {
        yield return new WaitForSeconds(0.5f);

        ChapterTopBarAnim.DORestart(); // Goes down
        isUp = false;
    }
}