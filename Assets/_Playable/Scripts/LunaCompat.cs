using System.Collections.Generic;
using UnityEngine;

// Stand-ins for Unity APIs Luna's C# API lacks. The Cross-Project Prefab Importer's sanitizer rewrites calls to them
// (LunaScriptSanitizer.FixMissingLunaApis), so imported scripts compile for Luna and behave the same in the editor.

public static class LunaArray
{
    /// <summary>Array.Sort(keys, items): sorts <paramref name="keys"/> ascending and moves <paramref name="items"/> with them.</summary>
    public static void Sort<TKey, TValue>(TKey[] keys, TValue[] items)
    {
        var comparer = Comparer<TKey>.Default;
        var order = new List<int>(keys.Length);
        for (int i = 0; i < keys.Length; i++)
            order.Add(i);
        order.Sort((a, b) => comparer.Compare(keys[a], keys[b]));

        var sortedKeys = new TKey[keys.Length];
        var sortedItems = new TValue[items.Length];
        for (int i = 0; i < order.Count; i++)
        {
            sortedKeys[i] = keys[order[i]];
            sortedItems[i] = items[order[i]];
        }
        for (int i = 0; i < order.Count; i++)
        {
            keys[i] = sortedKeys[i];
            items[i] = sortedItems[i];
        }
    }
}

public static class LunaSprites
{
    /// <summary>
    /// The sprite's area of its texture in 0..1 UVs. Use it instead of textureRect / texture.width: Luna ships
    /// textures downscaled (luna.json maxWidth) while textureRect stays in original pixels, so that division ran past
    /// 1 there and only a corner of the image was drawn (Dress steps 4/6's cloth).
    /// </summary>
    public static Rect UvRect(Sprite sprite)
    {
        Vector2[] uv = sprite.uv;
        if (uv == null || uv.Length == 0)
            return new Rect(0f, 0f, 1f, 1f);

        Vector2 min = uv[0], max = uv[0];
        for (int i = 1; i < uv.Length; i++)
        {
            min = Vector2.Min(min, uv[i]);
            max = Vector2.Max(max, uv[i]);
        }
        return Rect.MinMaxRect(min.x, min.y, max.x, max.y);
    }
}

public static class LunaMaterials
{
    /// <summary>
    /// new Material(Shader.Find("Sprites/Default")): Luna ships only the shaders the scene references, so a name lookup
    /// can come back empty there (InternalErrorShader). A material the scene already uses is copied when given.
    /// </summary>
    public static Material SpriteDefault(Material template)
    {
        return template != null ? new Material(template) : new Material(Shader.Find("Sprites/Default"));
    }
}

/// <summary>ParticleSystem.EmitParams: only the overrides LunaParticles.Emit applies.</summary>
public struct LunaEmitParams
{
    Vector3 _position, _velocity;
    Color32 _startColor;
    float _startSize, _startLifetime;
    internal bool hasPosition, hasVelocity, hasColor, hasSize, hasLifetime;

    public bool applyShapeToPosition;
    public Vector3 position { get { return _position; } set { _position = value; hasPosition = true; } }
    public Vector3 velocity { get { return _velocity; } set { _velocity = value; hasVelocity = true; } }
    public Color32 startColor { get { return _startColor; } set { _startColor = value; hasColor = true; } }
    public float startSize { get { return _startSize; } set { _startSize = value; hasSize = true; } }
    public float startLifetime { get { return _startLifetime; } set { _startLifetime = value; hasLifetime = true; } }
}

public static class LunaParticles
{
    static ParticleSystem.Particle[] buffer = new ParticleSystem.Particle[64];

    /// <summary>ParticleSystem.Emit(EmitParams, count): emits, then applies the overrides to the newest particles.</summary>
    public static void Emit(ParticleSystem ps, LunaEmitParams emit, int count)
    {
        if (ps == null || count <= 0)
            return;

        ps.Emit(count);

        int alive = ps.particleCount;
        if (buffer.Length < alive)
            buffer = new ParticleSystem.Particle[Mathf.NextPowerOfTwo(alive)];
        alive = ps.GetParticles(buffer);

        bool local = ps.main.simulationSpace == ParticleSystemSimulationSpace.Local;
        Vector3 emitter = local ? Vector3.zero : ps.transform.position;
        Vector3 target = local ? ps.transform.InverseTransformPoint(emit.position) : emit.position;

        // ponytail: newly emitted particles are the last ones in the buffer (Unity's order); a system that reorders
        // would get the overrides on other particles - harmless for randomised bits, revisit if exact placement matters.
        for (int i = Mathf.Max(0, alive - count); i < alive; i++)
        {
            var p = buffer[i];
            if (emit.hasPosition)
                p.position = emit.applyShapeToPosition ? target + (p.position - emitter) : target;
            if (emit.hasVelocity)
                p.velocity = local ? ps.transform.InverseTransformDirection(emit.velocity) : emit.velocity;
            if (emit.hasColor)
                p.startColor = emit.startColor;
            if (emit.hasSize)
                p.startSize = emit.startSize;
            if (emit.hasLifetime)
            {
                p.startLifetime = emit.startLifetime;
                p.remainingLifetime = emit.startLifetime;
            }
            buffer[i] = p;
        }
        ps.SetParticles(buffer, alive);
    }
}
