using UnityEngine;
using DG.Tweening;
using System.Collections;

public class BD_ProgressHelper : MonoBehaviour
{
    [Space()]
    public BD_Progress BD_Progress;

    [Space()]
    public SpriteRenderer fadeSprite;
    public bool fadeIn;

    Coroutine Co;
    WaitForSeconds waitTemp = new WaitForSeconds(.2f);

    IEnumerator Start()
    {
        yield return new WaitForSeconds(.05f);

        BD_Progress.thisDrag.ProgStartEvent += EnableProgress;
        BD_Progress.thisDrag.ProgEndEvent += DisableProgress;
    }

    void EnableProgress()
    {
        Co = StartCoroutine(ProgressChecking());
    }

    void DisableProgress()
    {
        if (Co != null)
            StopCoroutine(Co);
    }

    IEnumerator ProgressChecking()
    {
        if (BD_Progress.isProgDone)
        {
            yield break;
        }

        while (!BD_Progress.isProgDone)
        {
            float progressIs = BD_Progress.giveCollectiveProgress();

            if (fadeSprite != null)
            {
                if (fadeIn)
                {
                    fadeSprite.DOFade(progressIs, 1f);
                }
                else
                {
                    fadeSprite.DOFade(1f - progressIs, 1f);
                }
            }

            yield return waitTemp;
        }
    }
}
