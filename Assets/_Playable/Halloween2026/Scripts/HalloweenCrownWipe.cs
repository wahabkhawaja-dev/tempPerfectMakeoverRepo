using System.Collections;
using DG.Tweening;
using ScratchCardAsset;
using UnityEngine;
using UnityEngine.Serialization;

/// <summary>The Halloween cloth wipes away foam locally before the completion CTA.</summary>
public sealed class HalloweenCrownWipe : MonoBehaviour
{
    public Level3_Crown_Playable level;
    [FormerlySerializedAs("waterTool")] public BasicDrag clothTool;
    [FormerlySerializedAs("impactTip")] public Transform wipeTip;
    public ScratchCardManager foamSurface;
    public SpriteRenderer cleanCrown;
    public GameObject[] priorLayers;
    public Vector3 dockPosition = new Vector3(1.7f,-.55f,-2);
    [Range(.7f,1)] public float finishThreshold=.94f;
    public bool Begun { get; private set; }
    public bool Finished { get; private set; }
    public float WipeProgress { get; private set; }
    bool ready,finishing;
    float nextProgress;

    public void Begin()
    {
        if(Begun)return;
        Begun=true;
        StartCoroutine(Enter());
    }

    IEnumerator Enter()
    {
        UI_Manager.instance.SetProgressBarPos();
        CameraController.Instance.MoveCamera(level.MainZoom.CameraPos,level.MainZoom.CameraFOV);
        cleanCrown.gameObject.SetActive(true);
        cleanCrown.color=new Color(1,1,1,1);
        foamSurface.gameObject.SetActive(true);
        clothTool.gameObject.SetActive(true);
        clothTool.canDrag=false;
        clothTool.thisCollider=clothTool.GetComponent<Collider2D>();
        clothTool.thisCollider.enabled=false;
        yield return null;
        yield return null;
        foamSurface.Card.ClearInstantly();
        foamSurface.Progress.ResetProgress();
        foamSurface.Card.InputEnabled=false;
        foamSurface.Card.IsScratching=false;
        foreach(var layer in priorLayers)if(layer!=null)layer.SetActive(false);
        clothTool.transform.DOKill();
        clothTool.transform.DOMove(dockPosition,.55f).OnComplete(()=>{
            clothTool.startPos=dockPosition;
            clothTool.startScale=clothTool.transform.localScale;
            clothTool.canDrag=true;
            clothTool.thisCollider.enabled=true;
            ready=true;
        });
    }

    void LateUpdate()
    {
        if(!ready||Finished||finishing)return;
        if(clothTool.isDragging)WipeAt(wipeTip.position);
        if(Time.time<nextProgress)return;
        nextProgress=Time.time+.12f;
        WipeProgress=Mathf.Clamp01(foamSurface.Progress.GiveProgress());
        UI_Manager.instance.SetProgressBar(WipeProgress);
        if(WipeProgress>=finishThreshold)StartCoroutine(Finish());
    }

    // The orthographic scratch card reads the cloth's actual contact tip.
    public void WipeAt(Vector3 worldPoint)
    {
        if(!ready||finishing||Finished||!clothTool.isDragging||foamSurface.Card.cardInput==null)return;
        var bounds=cleanCrown.bounds;
        if(worldPoint.x<bounds.min.x||worldPoint.x>bounds.max.x||worldPoint.y<bounds.min.y||worldPoint.y>bounds.max.y)return;
        foamSurface.Card.cardInput.ScratchAtPoint(worldPoint);
    }

    IEnumerator Finish()
    {
        finishing=true;
        ready=false;
        clothTool.isDragging=false;
        clothTool.canDrag=false;
        clothTool.thisCollider.enabled=false;
        foamSurface.SpriteCard.GetComponent<SpriteRenderer>().DOFade(0,.4f);
        clothTool.transform.DOMoveX(8,.55f).OnComplete(()=>clothTool.gameObject.SetActive(false));
        UI_Manager.instance.SetProgressBar(1);
        yield return new WaitForSeconds(.6f);
        foamSurface.gameObject.SetActive(false);
        CameraController.Instance.MoveCamera(level.MainZoom.CameraPos,level.MainZoom.CameraFOV);
        yield return new WaitForSeconds(.7f);
        Finished=true;
        GameManager.instance.Complete();
    }
}
