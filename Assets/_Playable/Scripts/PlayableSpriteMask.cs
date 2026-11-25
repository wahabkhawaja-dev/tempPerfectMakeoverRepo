using UnityEngine;

// Baked bindings replace SpriteMask stencil ranges with texture clipping in playables.
public class PlayableSpriteMask : MonoBehaviour
{
    [System.Serializable]
    public class Mask
    {
        public Transform transform;
        public Sprite sprite;
        public float cutoff;
    }

    public Material template;
    public Mask[] masks;
    public bool outside;
    SpriteRenderer source;
    Material material;
    _2dxFX_Wave wave;

    void Start()
    {
        source = GetComponent<SpriteRenderer>();
        wave = GetComponent<_2dxFX_Wave>();
        material = new Material(template);
    }

    void LateUpdate()
    {
        if (material == null || source.sprite == null) return;
        if (wave != null && wave.enabled)
        {
            material.SetFloat("_OffsetX", wave._OffsetX);
            material.SetFloat("_OffsetY", wave._OffsetY);
            material.SetFloat("_DistanceX", wave._DistanceX);
            material.SetFloat("_DistanceY", wave._DistanceY);
            material.SetFloat("_WaveTimeX", wave._WaveTimeX);
            material.SetFloat("_WaveTimeY", wave._WaveTimeY);
            material.SetFloat("_Alpha", 1f - wave._Alpha);
        }
        material.mainTexture = source.sprite.texture;
        material.SetFloat("_Outside", outside ? 1f : 0f);
        for (int i = 0; i < masks.Length; i++)
        {
            Mask mask = masks[i];
            string suffix = i.ToString();
            bool active = mask.transform != null && mask.transform.gameObject.activeInHierarchy;
            material.SetFloat("_Active" + suffix, active ? 1f : 0f);
            if (!active) continue;
            Bounds b = mask.sprite.bounds;
            Rect r = mask.sprite.textureRect;
            Vector3 p = mask.transform.InverseTransformPoint(Vector3.zero);
            Vector3 x = mask.transform.InverseTransformPoint(Vector3.right) - p;
            Vector3 y = mask.transform.InverseTransformPoint(Vector3.up) - p;
            material.SetVector("_RowX" + suffix, new Vector4(x.x / b.size.x, y.x / b.size.x, (p.x - b.min.x) / b.size.x, mask.cutoff));
            material.SetVector("_RowY" + suffix, new Vector4(x.y / b.size.y, y.y / b.size.y, (p.y - b.min.y) / b.size.y, 0f));
            material.SetVector("_Rect" + suffix, new Vector4(r.x / mask.sprite.texture.width, r.y / mask.sprite.texture.height, r.width / mask.sprite.texture.width, r.height / mask.sprite.texture.height));
            material.SetTexture("_Mask" + suffix, mask.sprite.texture);
        }
        source.sharedMaterial = material;
    }

    void OnDestroy()
    {
        if (material != null) Destroy(material);
    }
}
