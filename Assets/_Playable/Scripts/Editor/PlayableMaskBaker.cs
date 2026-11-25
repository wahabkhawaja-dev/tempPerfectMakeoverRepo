using System;
using System.Linq;
using UnityEditor;
using UnityEngine;

public static class PlayableMaskBaker
{
    public static void Bake(GameObject root)
    {
        var masks = root.GetComponentsInChildren<SpriteMask>(true);
        if (masks.Length == 0) return;
        const string path = "Assets/_Playable/Scripts/PlayableSpriteMask.mat";
        var material = AssetDatabase.LoadAssetAtPath<Material>(path);
        if (material == null)
        {
            material = new Material(Shader.Find("Playable/Sprite Mask"));
            AssetDatabase.CreateAsset(material, path);
        }
        foreach (var sprite in root.GetComponentsInChildren<SpriteRenderer>(true))
        {
            if (sprite.maskInteraction == SpriteMaskInteraction.None) continue;
            int layer = SortingLayer.GetLayerValueFromID(sprite.sortingLayerID);
            var relevant = masks.Where(m => m.sprite != null && (!m.isCustomRangeActive ||
                (layer > SortingLayer.GetLayerValueFromID(m.backSortingLayerID) || layer == SortingLayer.GetLayerValueFromID(m.backSortingLayerID) && sprite.sortingOrder >= m.backSortingOrder) &&
                (layer < SortingLayer.GetLayerValueFromID(m.frontSortingLayerID) || layer == SortingLayer.GetLayerValueFromID(m.frontSortingLayerID) && sprite.sortingOrder <= m.frontSortingOrder))).ToArray();
            // shortcut: three simultaneous masks per sprite; extend the shader before baking a larger range.
            if (relevant.Length > 3) throw new InvalidOperationException(sprite.name + " needs more than three masks.");
            var clip = sprite.GetComponent<PlayableSpriteMask>() ?? sprite.gameObject.AddComponent<PlayableSpriteMask>();
            clip.template = material;
            clip.outside = sprite.maskInteraction == SpriteMaskInteraction.VisibleOutsideMask;
            clip.masks = relevant.Select(m => new PlayableSpriteMask.Mask {transform=m.transform,sprite=m.sprite,cutoff=m.alphaCutoff}).ToArray();
            sprite.maskInteraction = SpriteMaskInteraction.None;
        }
        foreach (var mask in masks) mask.enabled = false;
    }
}
