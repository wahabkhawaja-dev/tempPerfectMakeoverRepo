using UnityEngine;

/// <summary>Fits only a tool's new skinning root; gameplay transforms and colliders stay authored.</summary>
[DefaultExecutionOrder(-10000)]
[DisallowMultipleComponent]
[RequireComponent(typeof(SpriteRenderer))]
public sealed class HalloweenToolRigFit : MonoBehaviour
{
    public Transform skinRoot;
    public Vector2 authoredSize;
    public Vector2 authoredCenter;
    [HideInInspector] public bool rendererFitBaked;
    [HideInInspector] public Vector3 rendererOriginalPosition,rendererOriginalScale;
    [HideInInspector] public Vector3 bakedRootPosition,bakedRootScale;
    SpriteRenderer surface;
    Sprite fittedSprite;

    void OnEnable() { ApplyFit(); }

    void LateUpdate()
    {
        if (surface == null) surface = GetComponent<SpriteRenderer>();
        if (surface != null && surface.sprite != fittedSprite) ApplyFit();
    }

    public void ApplyFit()
    {
        if (surface == null) surface = GetComponent<SpriteRenderer>();
        if (skinRoot == null || surface == null || surface.sprite == null) return;
        // Sprite.bounds includes transparent canvas even when the imported mesh is tight.
        var vertices = surface.sprite.vertices;
        if (vertices.Length == 0) return;
        var bounds = new Bounds(vertices[0], Vector3.zero);
        foreach (var vertex in vertices) bounds.Encapsulate(vertex);
        if (bounds.size.x <= 0 || bounds.size.y <= 0) return;
        // Parent tools carry nonuniform legacy scaling. Cancel it so the artwork
        // retains its proportions in world space instead of becoming a thin strip.
        var worldScale = transform.lossyScale;
        float height = Mathf.Min(3f, authoredSize.y * Mathf.Abs(worldScale.y));
        float uniform = height / bounds.size.y;
        var scale = new Vector3(uniform / Mathf.Max(.0001f, Mathf.Abs(worldScale.x)),
            uniform / Mathf.Max(.0001f, Mathf.Abs(worldScale.y)), 1);
        skinRoot.localScale = scale;
        skinRoot.localPosition = new Vector3(authoredCenter.x - bounds.center.x * scale.x,
            authoredCenter.y - bounds.center.y * scale.y, 0);
        fittedSprite = surface.sprite;
    }
}
