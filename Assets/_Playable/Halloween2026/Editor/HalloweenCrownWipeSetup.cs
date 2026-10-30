#if UNITY_EDITOR
using System;
using System.Linq;
using ScratchCardAsset;
using UnityEditor;
using UnityEngine;
using UnityEngine.U2D.Animation;

public static class HalloweenCrownWipeSetup
{
    public static void Configure(GameObject root)
    {
        const string toolName="Tool 4 Halloween Cloth", scratchName="Scratch 4 Cloth Wipe";
        var level=root.GetComponent<Level3_Crown_Playable>();
        if(level==null)throw new InvalidOperationException("Original crown level is required.");
        ApplyScratchLayers(root);
        foreach(var t in root.GetComponentsInChildren<Transform>(true).Where(t=>t.name==toolName||t.name==scratchName||t.name=="Tool 4 Water Rinse"||t.name=="Scratch 4 Water Rinse").ToArray())
            if(t!=null)UnityEngine.Object.DestroyImmediate(t.gameObject);
        var controller=root.GetComponent<HalloweenCrownWipe>();
        if(controller==null)controller=root.AddComponent<HalloweenCrownWipe>();

        var source=AssetDatabase.LoadAssetAtPath<GameObject>("Assets/Resources/Lvl_GP/Level3_1.prefab").GetComponent<Level3_Crown>().ToolStep4;
        var cloth=UnityEngine.Object.Instantiate(source.gameObject,root.transform);
        cloth.name=toolName;
        foreach(var component in cloth.GetComponentsInChildren<MonoBehaviour>(true))
            if(!(component is BasicDrag))UnityEngine.Object.DestroyImmediate(component);
        foreach(var animator in cloth.GetComponentsInChildren<Animator>(true))UnityEngine.Object.DestroyImmediate(animator);
        var drag=cloth.GetComponent<BasicDrag>();
        drag.canDrag=false; drag.isDragging=false; drag.canScaleIncrease=false; drag.canRotateOnPick=false;
        drag.moveWithPointer=true; drag.canReturn=true; drag.isPlacedCannotMove=false;
        drag.thisParticles=null;drag.dragParticles=null;drag.anim=null;drag.onDragparticle=false;
        cloth.transform.position=new Vector3(8,-.55f,-2);
        var body=cloth.GetComponentsInChildren<SpriteRenderer>(true).First(r=>r.name=="Body");
        body.sprite=AssetDatabase.LoadAssetAtPath<Sprite>(HalloweenCrownSetup.Root+"Sprites/Crown/Tools/Cloth.png");
        body.drawMode=SpriteDrawMode.Sliced;body.size=new Vector2(5,4.8f);
        var tip=new GameObject("Cloth Contact Tip").transform;
        tip.SetParent(cloth.transform,false);
        tip.position=body.bounds.center;

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
        foam.SpriteCard.name="Wipe Foam Surface";
        foam.SpriteCard.SetActive(true);
        foam.Card.Surface=foam.SpriteCard.transform;
        foam.Card.ScratchSurface=null;
        foam.Mode=ScratchCard.ScratchMode.Erase;
        foam.ScratchSurfaceSprite=level.AllScratches.First(s=>s.name=="Scratch 3").ScratchSurfaceSprite;
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
        // This inactive surface initializes on entering the wipe. LevelData.Setup would
        // clear it before ScratchCard.Start has allocated its render textures.
        level.AllScratches=level.AllScratches.Where(s=>s!=null&&s!=foam).ToArray();
        level.ToolIcons=level.ToolIcons.Take(3).Concat(new[]{body.sprite}).ToList();
        controller.level=level;controller.clothTool=drag;controller.wipeTip=tip;
        controller.foamSurface=foam;
        controller.cleanCrown=level.GetComponentsInChildren<SpriteRenderer>(true).First(s=>s.name=="Clean");
        controller.priorLayers=level.GetComponentsInChildren<Transform>(true)
            .Where(t=>new[]{"Dust","Dirty","Spray","Mix","Mix E"}.Contains(t.name)).Select(t=>t.gameObject).ToArray();
        cloth.SetActive(false);
    }

    // Explicit assignments keep the requested swap stable across repeated rebuilds.
    public static void ApplyScratchLayers(GameObject root)
    {
        var level=root.GetComponent<Level3_Crown_Playable>();
        var second=level.AllScratches.First(s=>s.name=="Scratch 2");
        var third=level.AllScratches.First(s=>s.name=="Scratch 3");
        second.ScratchSurfaceSprite=AssetDatabase.LoadAssetAtPath<Sprite>(HalloweenCrownSetup.Root+"Sprites/Crown/04_Foam.png");
        third.ScratchSurfaceSprite=AssetDatabase.LoadAssetAtPath<Sprite>(HalloweenCrownSetup.Root+"Sprites/Crown/03_Spray.png");
        FitLayer(second.SpriteCard.GetComponent<SpriteRenderer>(),second.ScratchSurfaceSprite);
        FitLayer(third.SpriteCard.GetComponent<SpriteRenderer>(),third.ScratchSurfaceSprite);
        FitLayer(level.MixE.GetComponent<SpriteRenderer>(),third.ScratchSurfaceSprite);
        var wipe=root.GetComponent<HalloweenCrownWipe>();
        if(wipe!=null&&wipe.foamSurface!=null)
        {
            wipe.foamSurface.ScratchSurfaceSprite=third.ScratchSurfaceSprite;
            FitLayer(wipe.foamSurface.SpriteCard.GetComponent<SpriteRenderer>(),third.ScratchSurfaceSprite);
        }
    }

    static void FitLayer(SpriteRenderer renderer,Sprite sprite)
    {
        if(renderer.sprite==sprite)return;
        var oldBounds=renderer.sprite.bounds;
        renderer.sprite=sprite;
        if(renderer.drawMode!=SpriteDrawMode.Simple)return;
        var scale=renderer.transform.localScale;
        renderer.transform.localScale=new Vector3(scale.x*oldBounds.size.x/sprite.bounds.size.x,
            scale.y*oldBounds.size.y/sprite.bounds.size.y,scale.z);
    }
}
#endif
