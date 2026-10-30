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
    public BD_CameraFollow cameraFollow;
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
        cameraFollow=clothTool.GetComponent<BD_CameraFollow>();
        Begun=true;
        StartCoroutine(Enter());
    }

    IEnumerator Enter()
    {
        UI_Manager.instance.SetProgressBarPos();
        CameraController.Instance.MoveCamera(level.MainZoom.CameraPos,level.MainZoom.CameraFOV);
        Level3_Crown_Playable.FadeLayer(cleanCrown.gameObject,1);
        // Initially disabled, then kept active and hidden through opacity after use.
        foamSurface.gameObject.SetActive(true);
        clothTool.gameObject.SetActive(true);
        clothTool.canDrag=false;
        cameraFollow.enabled=false;
        clothTool.thisCollider=clothTool.GetComponent<Collider2D>();
        clothTool.thisCollider.enabled=false;
        yield return null;
        yield return null;
        foamSurface.Card.ClearInstantly();
        foamSurface.Progress.ResetProgress();
        foamSurface.Card.InputEnabled=false;
        foamSurface.Card.IsScratching=false;
        Level3_Crown_Playable.FadeLayer(foamSurface.SpriteCard,1);
        foreach(var layer in priorLayers)Level3_Crown_Playable.FadeLayer(layer,0);
        clothTool.transform.DOKill();
        clothTool.transform.DOMove(dockPosition,.55f).OnComplete(()=>{
            clothTool.startPos=dockPosition;
            clothTool.startScale=clothTool.transform.localScale;
            clothTool.canDrag=true;
            clothTool.thisCollider.enabled=true;
            cameraFollow.enabled=true;
            ready=true;
        });
    }

    void LateUpdate()
    {
        if(!ready||Finished||finishing)return;
        if(clothTool.isDragging)WipeAt(wipeTip.position);
        // Refresh immediately on release so the final stroke is counted, even
        // when mouse-up falls between the normal progress polling intervals.
        if(Time.time>=nextProgress||Input.GetMouseButtonUp(0))
        {
            nextProgress=Time.time+.12f;
            WipeProgress=Mathf.Clamp01(foamSurface.Progress.GiveProgress());
            UI_Manager.instance.SetProgressBar(WipeProgress);
        }
        // Reaching the threshold arms completion; the player keeps control
        // until BasicDrag has processed mouse-up and the button is released.
        if(WipeProgress>=finishThreshold&&!clothTool.isDragging&&!Input.GetMouseButton(0))
            StartCoroutine(Finish());
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
        cameraFollow.enabled=false;
        CameraController.Instance.KillPositionTweens();
        clothTool.isDragging=false;
        clothTool.canDrag=false;
        clothTool.thisCollider.enabled=false;
        Level3_Crown_Playable.FadeLayer(foamSurface.SpriteCard,0,.4f);
        clothTool.transform.DOMoveX(8,.55f).OnComplete(()=>clothTool.gameObject.SetActive(false));
        UI_Manager.instance.SetProgressBar(1);
        yield return new WaitForSeconds(.6f);
        CameraController.Instance.MoveCamera(level.MainZoom.CameraPos,level.MainZoom.CameraFOV);
        yield return new WaitForSeconds(.7f);
        Finished=true;
        GameManager.instance.Complete();
    }
}
