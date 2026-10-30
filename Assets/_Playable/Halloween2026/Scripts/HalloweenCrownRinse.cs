using System.Collections;
using DG.Tweening;
using ScratchCardAsset;
using UnityEngine;

/// <summary>Water removes the spread shampoo locally; the earlier three steps stay unchanged.</summary>
public sealed class HalloweenCrownRinse : MonoBehaviour
{
    public Level3_Crown_Playable level;
    public BasicDrag waterTool;
    public Transform impactTip;
    public ParticleSystem[] waterEffects;
    public ScratchCardManager foamSurface;
    public SpriteRenderer cleanCrown;
    public GameObject[] priorLayers;
    public Vector3 dockPosition = new Vector3(1.7f,-.55f,-2);
    [Range(.7f,1)] public float finishThreshold=.94f;
    public bool Begun { get; private set; }
    public bool Finished { get; private set; }
    public float RinseProgress { get; private set; }
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
        waterTool.gameObject.SetActive(true);
        waterTool.canDrag=false;
        waterTool.thisCollider=waterTool.GetComponent<Collider2D>();
        waterTool.thisCollider.enabled=false;
        foreach(var effect in waterEffects)if(effect!=null)effect.Stop(true,ParticleSystemStopBehavior.StopEmittingAndClear);
        yield return null;
        yield return null;
        foamSurface.Card.ClearInstantly();
        foamSurface.Progress.ResetProgress();
        foamSurface.Card.InputEnabled=false;
        foamSurface.Card.IsScratching=false;
        foreach(var layer in priorLayers)if(layer!=null)layer.SetActive(false);
        waterTool.transform.DOKill();
        waterTool.transform.DOMove(dockPosition,.55f).OnComplete(()=>{
            waterTool.startPos=dockPosition;
            waterTool.startScale=waterTool.transform.localScale;
            waterTool.canDrag=true;
            waterTool.thisCollider.enabled=true;
            ready=true;
        });
    }

    void LateUpdate()
    {
        if(!ready||Finished||finishing)return;
        bool spraying=waterTool.isDragging;
        foreach(var effect in waterEffects)
        {
            if(effect==null)continue;
            if(spraying&&!effect.isPlaying)effect.Play();
            else if(!spraying&&effect.isPlaying)effect.Stop(true,ParticleSystemStopBehavior.StopEmitting);
        }
        if(spraying)SprayAt(impactTip.position);
        if(Time.time<nextProgress)return;
        nextProgress=Time.time+.12f;
        RinseProgress=Mathf.Clamp01(foamSurface.Progress.GiveProgress());
        UI_Manager.instance.SetProgressBar(RinseProgress);
        if(RinseProgress>=finishThreshold)StartCoroutine(Finish());
    }

    // Explicit world-space water impact also makes the rinse independently testable.
    public void SprayAt(Vector3 worldPoint)
    {
        if(!ready||finishing||Finished||!waterTool.isDragging||foamSurface.Card.cardInput==null)return;
        var bounds=cleanCrown.bounds;
        if(worldPoint.x<bounds.min.x||worldPoint.x>bounds.max.x||worldPoint.y<bounds.min.y||worldPoint.y>bounds.max.y)return;
        foamSurface.Card.cardInput.ScratchAtPoint(worldPoint);
    }

    IEnumerator Finish()
    {
        finishing=true;
        ready=false;
        waterTool.isDragging=false;
        waterTool.canDrag=false;
        waterTool.thisCollider.enabled=false;
        foreach(var effect in waterEffects)if(effect!=null)effect.Stop(true,ParticleSystemStopBehavior.StopEmitting);
        foamSurface.SpriteCard.GetComponent<SpriteRenderer>().DOFade(0,.4f);
        waterTool.transform.DOMoveX(8,.55f).OnComplete(()=>waterTool.gameObject.SetActive(false));
        UI_Manager.instance.SetProgressBar(1);
        yield return new WaitForSeconds(.6f);
        foamSurface.gameObject.SetActive(false);
        CameraController.Instance.MoveCamera(level.MainZoom.CameraPos,level.MainZoom.CameraFOV);
        yield return new WaitForSeconds(.7f);
        Finished=true;
        GameManager.instance.Complete();
    }
}
