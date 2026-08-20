using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
public class SewingCol : MonoBehaviour
{
    [SerializeField] Collider2D targetTip;
    [Space]
    [SerializeField] DOTweenAnimation[] Anim_Items;

    [SerializeField] bool isDone;
    [Space()]
    [SerializeField] AudioClip sfx;
   
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (isDone)
            return;

        if (collision == targetTip)
        {
            isDone = true;
            foreach (DOTweenAnimation anim in Anim_Items)
            {
                anim.DOPlay();
            }


            if (sfx != null)
            {
                int rendomSource = Random.Range(0, 3);
                AudioController.instance.PlayAnySfx(rendomSource, sfx, 0);
            }
        }

    }

}
