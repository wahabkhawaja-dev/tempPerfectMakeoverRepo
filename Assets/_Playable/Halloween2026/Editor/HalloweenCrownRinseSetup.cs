#if UNITY_EDITOR
using System;
using System.Linq;
using ScratchCardAsset;
using UnityEditor;
using UnityEngine;
using UnityEngine.U2D.Animation;

public static class HalloweenCrownRinseSetup
{
    public static void Configure(GameObject root)
    {
        const string waterName="Tool 4 Water Rinse", scratchName="Scratch 4 Water Rinse";
        var level=root.GetComponent<Level3_Crown_Playable>();
        if(level==null)throw new InvalidOperationException("Original crown level is required.");
        foreach(var t in root.GetComponentsInChildren<Transform>(true).Where(t=>t.name==waterName||t.name==scratchName).ToArray())
            if(t!=null)UnityEngine.Object.DestroyImmediate(t.gameObject);
        var controller=root.GetComponent<HalloweenCrownRinse>();
        if(controller==null)controller=root.AddComponent<HalloweenCrownRinse>();

        var source=AssetDatabase.LoadAssetAtPath<GameObject>("Assets/Resources/Lvl_GP/Level2_3.prefab").GetComponent<Level2_Shoe>().ToolStep1;
        var water=UnityEngine.Object.Instantiate(source.gameObject,root.transform);
        water.name=waterName;
        foreach(var component in water.GetComponentsInChildren<MonoBehaviour>(true))
            if(!(component is BasicDrag)&&!(component is SpriteSkin))UnityEngine.Object.DestroyImmediate(component);
        foreach(var animator in water.GetComponentsInChildren<Animator>(true))UnityEngine.Object.DestroyImmediate(animator);
        var drag=water.GetComponent<BasicDrag>();
        drag.canDrag=false; drag.isDragging=false; drag.canScaleIncrease=false; drag.canRotateOnPick=false;
        drag.moveWithPointer=true; drag.canReturn=true; drag.isPlacedCannotMove=false;
        drag.thisParticles=null;drag.dragParticles=null;drag.anim=null;drag.onDragparticle=false;
        water.transform.position=new Vector3(8,-.55f,-2);
        var body=water.GetComponentsInChildren<SpriteRenderer>(true).First(r=>r.name=="Body");
        Vector2 originalSize=body.drawMode==SpriteDrawMode.Simple?(Vector2)body.sprite.bounds.size:body.size;
        body.sprite=AssetDatabase.LoadAssetAtPath<Sprite>(HalloweenCrownSetup.Root+"Sprites/Crown/Tools/WaterShower.png");
        body.drawMode=SpriteDrawMode.Sliced;body.size=originalSize;
        var sourceProgress=source.GetComponent<BD_Progress>();
        Transform tip=null;
        if(sourceProgress!=null&&sourceProgress.AllScratches.Length>0)
        {
            var originalTip=sourceProgress.AllScratches[0].ScratchManager.Card.ToolTip;
            if(originalTip!=null&&originalTip.transform.IsChildOf(source.transform))
                tip=water.transform.Find(AnimationUtility.CalculateTransformPath(originalTip.transform,source.transform));
        }
        if(tip==null)
        {
            tip=new GameObject("Water Impact Tip").transform;
            tip.SetParent(water.transform,false);
            tip.position=new Vector3(body.bounds.center.x,body.bounds.max.y,body.transform.position.z);
        }
        var effects=water.GetComponentsInChildren<ParticleSystem>(true);
        foreach(var effect in effects){var main=effect.main;main.playOnAwake=false;effect.Stop(true,ParticleSystemStopBehavior.StopEmittingAndClear);}

        var template=level.AllScratches.First(s=>s!=null&&s.Mode==ScratchCard.ScratchMode.Erase);
        // SpriteCard lives outside the manager hierarchy in this level. Clone the
        // surface explicitly; otherwise Instantiate keeps the original dust reference.
        var originalSurface=template.SpriteCard.GetComponent<SpriteRenderer>();
        var baseline=AssetDatabase.LoadAssetAtPath<GameObject>("Assets/_Playable/Levels/Level3_1_Playable.prefab")
            .GetComponent<Level3_Crown_Playable>().AllScratches[0].SpriteCard.GetComponent<SpriteRenderer>();
        originalSurface.sprite=AssetDatabase.LoadAssetAtPath<Sprite>(HalloweenCrownSetup.Root+"Sprites/Crown/01_Dust.png");
        originalSurface.drawMode=SpriteDrawMode.Sliced;
        originalSurface.size=baseline.drawMode==SpriteDrawMode.Simple?(Vector2)baseline.sprite.bounds.size:baseline.size;
        originalSurface.transform.localPosition=baseline.transform.localPosition;
        originalSurface.transform.localScale=baseline.transform.localScale;
        template.ScratchSurfaceSprite=originalSurface.sprite;
        var foam=UnityEngine.Object.Instantiate(template,template.transform.parent);
        foam.name=scratchName;
        foam.SpriteCard=UnityEngine.Object.Instantiate(template.SpriteCard,foam.transform);
        foam.SpriteCard.name="Rinse Foam Surface";
        foam.SpriteCard.SetActive(true);
        foam.Card.Surface=foam.SpriteCard.transform;
        foam.Card.ScratchSurface=null;
        foam.Mode=ScratchCard.ScratchMode.Erase;
        foam.ScratchSurfaceSprite=AssetDatabase.LoadAssetAtPath<Sprite>(HalloweenCrownSetup.Root+"Sprites/Crown/04_Foam.png");
        foam.ScratchSurfaceSpriteHasAlpha=true;
        foam.Card.Mode=ScratchCard.ScratchMode.Erase;
        foam.Card.ToolTip=tip.gameObject;
        foam.Card.InputEnabled=false;foam.InputEnabled=false;foam.Card.IsScratching=false;
        foam.Card.shouldPaintHoles=false;foam.Card.canSpreadMask=false;
        foam.Card.BrushScale=new Vector2(.35f,.35f);foam.EraseTextureScale=foam.Card.BrushScale;
        var target=level.GetComponentsInChildren<SpriteRenderer>(true).First(s=>s.name=="Mix E");
        var surface=foam.SpriteCard.GetComponent<SpriteRenderer>();
        surface.color=Color.white;
        surface.sprite=foam.ScratchSurfaceSprite;
        surface.drawMode=SpriteDrawMode.Simple;
        surface.sortingLayerID=target.sortingLayerID;
        surface.sortingOrder=target.sortingOrder+1;
        var parentScale=surface.transform.parent.lossyScale;
        var size=surface.sprite.bounds.size;
        surface.transform.localScale=new Vector3(target.bounds.size.x/size.x/Mathf.Abs(parentScale.x),target.bounds.size.y/size.y/Mathf.Abs(parentScale.y),1);
        surface.transform.position=target.bounds.center-surface.transform.TransformVector(surface.sprite.bounds.center);
        foam.gameObject.SetActive(false);
        // This inactive surface initializes on entering the rinse. LevelData.Setup would
        // clear it before ScratchCard.Start has allocated its render textures.
        level.AllScratches=level.AllScratches.Where(s=>s!=null&&s!=foam).ToArray();
        level.ToolIcons=level.ToolIcons.Take(3).Concat(new[]{body.sprite}).ToList();
        controller.level=level;controller.waterTool=drag;controller.impactTip=tip;controller.waterEffects=effects;
        controller.foamSurface=foam;
        controller.cleanCrown=level.GetComponentsInChildren<SpriteRenderer>(true).First(s=>s.name=="Clean");
        controller.priorLayers=level.GetComponentsInChildren<Transform>(true)
            .Where(t=>new[]{"Dust","Dirty","Spray","Mix","Mix E"}.Contains(t.name)).Select(t=>t.gameObject).ToArray();
        water.SetActive(false);
    }
}
#endif
