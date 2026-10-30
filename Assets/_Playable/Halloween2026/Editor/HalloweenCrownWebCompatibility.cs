#if UNITY_EDITOR
using System;
using UnityEngine;

/// <summary>Use regular sprite geometry for scaled artwork exported to Playworks.</summary>
public static class HalloweenCrownWebCompatibility
{
    public static int Apply(GameObject root)
    {
        int changed=0;
        foreach(var fit in root.GetComponentsInChildren<HalloweenToolRigFit>(true))
        {
            if(fit.rendererFitBaked)continue;
            var renderer=fit.transform;
            var bone=fit.skinRoot;
            var offset=bone.localPosition;
            var factor=bone.localScale;
            fit.rendererOriginalPosition=renderer.localPosition;
            fit.rendererOriginalScale=renderer.localScale;
            fit.bakedRootPosition=offset;
            fit.bakedRootScale=factor;
            // Factor the root's rest-pose fit into the sprite transform. Keep
            // non-bone children in place, including the sprayer trigger and tips.
            foreach(Transform child in renderer)
            {
                if(child==bone)continue;
                child.localPosition=Divide(child.localPosition-offset,factor);
                child.localScale=Divide(child.localScale,factor);
            }
            renderer.localPosition+=renderer.localRotation*Vector3.Scale(renderer.localScale,offset);
            renderer.localScale=Vector3.Scale(renderer.localScale,factor);
            bone.localPosition=Vector3.zero;
            bone.localScale=Vector3.one;
            fit.rendererFitBaked=true;
            fit.enabled=false;
            changed++;
        }
        foreach(var surface in root.GetComponentsInChildren<SpriteRenderer>(true))
        {
            if(surface.sprite==null||surface.drawMode==SpriteDrawMode.Simple)continue;
            if(surface.sprite.border!=Vector4.zero)
                throw new InvalidOperationException("Unexpected bordered sprite: "+surface.name);
            var oldBounds=surface.bounds;
            var spriteSize=surface.sprite.bounds.size;
            var size=surface.size;
            var scale=surface.transform.localScale;
            surface.drawMode=SpriteDrawMode.Simple;
            surface.transform.localScale=new Vector3(scale.x*size.x/spriteSize.x,
                scale.y*size.y/spriteSize.y,scale.z);
            // Match the authored center even for noncentral pivots and scaled parents.
            surface.transform.position+=oldBounds.center-surface.bounds.center;
            changed++;
        }
        return changed;
    }

    public static void RestoreToolFits(GameObject root)
    {
        var fits=root.GetComponentsInChildren<HalloweenToolRigFit>(true);
        // Children were compensated when their parent was baked; undo children first.
        for(int i=fits.Length-1;i>=0;i--)
        {
            var fit=fits[i];
            if(!fit.rendererFitBaked)continue;
            foreach(Transform child in fit.transform)
            {
                if(child==fit.skinRoot)continue;
                child.localPosition=Vector3.Scale(child.localPosition,fit.bakedRootScale)+fit.bakedRootPosition;
                child.localScale=Vector3.Scale(child.localScale,fit.bakedRootScale);
            }
            fit.transform.localPosition=fit.rendererOriginalPosition;
            fit.transform.localScale=fit.rendererOriginalScale;
            fit.skinRoot.localPosition=fit.bakedRootPosition;
            fit.skinRoot.localScale=fit.bakedRootScale;
            fit.rendererFitBaked=false;
            fit.enabled=true;
        }
    }

    static Vector3 Divide(Vector3 value,Vector3 divisor)
    {
        return new Vector3(value.x/divisor.x,value.y/divisor.y,value.z/divisor.z);
    }
}
#endif
