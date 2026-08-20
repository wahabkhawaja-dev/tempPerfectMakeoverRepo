Shader "Custom/SpriteOutlineOptimized"
{
    Properties
    {
        _MainTex ("Sprite Texture", 2D) = "white" {}
        _Distance ("Outline Thickness", Float) = 1
        _Color ("Outline Color", Color) = (0, 1, 0, 1)
        [Toggle]_EnableOutline ("Enable Outline", Float) = 1
        [Toggle]_HideSprite ("Hide Sprite", Float) = 0 // New: toggle to hide sprite body
    }

    CGINCLUDE
    #include "UnityCG.cginc"

    sampler2D _MainTex;
    float4 _MainTex_TexelSize;
    float _Distance;
    half4 _Color;
    float _EnableOutline;
    float _HideSprite;

    half4 frag(v2f_img i) : SV_Target 
    {
        // Offset distance in pixels (scaled for mobile)
        float2 d = _MainTex_TexelSize.xy * _Distance;

        // 4-sample cross pattern for edge detection
        half a1 = tex2D(_MainTex, i.uv + d * float2( 0, -1)).a; // Top
        half a2 = tex2D(_MainTex, i.uv + d * float2(-1,  0)).a; // Left
        half a3 = tex2D(_MainTex, i.uv + d * float2( 1,  0)).a; // Right
        half a4 = tex2D(_MainTex, i.uv + d * float2( 0,  1)).a; // Bottom

        // Simplified edge detection
        float edge = abs(a1 - a4) + abs(a2 - a3);

        // Original sprite color
        half4 source = tex2D(_MainTex, i.uv);

        // Blend outline color at edges
        half outlineFactor = saturate(edge) * _EnableOutline;
        half3 finalRGB = lerp(source.rgb, _Color.rgb, outlineFactor);

        // Combine alpha
        half finalAlpha = source.a + outlineFactor * (1 - source.a);

        // --- Hide sprite but keep outline ---
        if (_HideSprite > 0.5)
        {
            // Suppress sprite’s main color where alpha > 0
            finalRGB = lerp(finalRGB, _Color.rgb, 1 - source.a);
            // Only show outline portion
            finalAlpha = outlineFactor;
        }

        return half4(finalRGB, finalAlpha);
    }
    ENDCG

    SubShader
    {
        Tags { "Queue"="Transparent" "RenderType"="Transparent" "IgnoreProjector"="True" }
        Pass
        {
            ZTest Always Cull Off ZWrite Off
            Blend SrcAlpha OneMinusSrcAlpha

            CGPROGRAM
            #pragma vertex vert_img
            #pragma fragment frag
            #pragma target 2.0
            ENDCG
        }
    }
}
