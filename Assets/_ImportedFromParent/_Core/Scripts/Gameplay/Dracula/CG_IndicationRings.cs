using UnityEngine;
using DG.Tweening;
using System.Collections.Generic;

// Green indication rings over a scratch step's work area (children of this object). Each ring fades out once the
// tool's brush point passes over it while the tool is dragged, so the rings left show what is still to do.
public class CG_IndicationRings : MonoBehaviour
{
    public BD_Progress Progress;
    [Tooltip("World distance from the brush point at which a ring counts as worked.")]
    public float ClearRadius = .18f;
    public float FadeDuration = .3f;

    readonly HashSet<Transform> cleared = new HashSet<Transform>();
    Transform brush;

    void Update()
    {
        if (Progress == null || Progress.thisDrag == null || !Progress.thisDrag.isDragging)
            return;

        if (brush == null)
            brush = Progress.AllScratches[0].ScratchManager.Card.ToolTip.transform;

        Vector2 tip = brush.position;

        foreach (Transform ring in transform)
        {
            if (cleared.Contains(ring) || Vector2.Distance(tip, ring.position) > ClearRadius)
                continue;

            cleared.Add(ring);

            SpriteRenderer sr = ring.GetComponent<SpriteRenderer>();
            sr.DOKill();
            sr.DOFade(0f, FadeDuration).SetEase(Ease.OutSine).OnComplete(() => ring.gameObject.SetActive(false));
        }
    }
}
