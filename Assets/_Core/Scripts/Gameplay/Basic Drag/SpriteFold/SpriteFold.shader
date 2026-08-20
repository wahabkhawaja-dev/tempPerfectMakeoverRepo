Shader "Custom/SpriteFold"
{
    Properties
    {
        _MainTex ("Sprite Texture", 2D) = "white" {}
        _FoldOrigin ("Fold Origin", Vector) = (0,0,0,0)
        _FoldDir ("Fold Direction", Vector) = (0,0,0,0)
        _FoldDist ("Fold Distance", Float) = 0
        _IsBack ("Is Back Side", Float) = 0
        _ShadowStrength ("Crease Strength", Range(0,1)) = 0.5
    }

    SubShader
    {
        Tags { "Queue"="Transparent" "RenderType"="Transparent" "IgnoreProjector"="True" }
        Cull Off ZWrite Off Blend SrcAlpha OneMinusSrcAlpha

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            struct appdata { float4 vertex : POSITION; float2 uv : TEXCOORD0; };
            struct v2f { float2 uv : TEXCOORD0; float4 vertex : SV_POSITION; };

            sampler2D _MainTex;
            float2 _FoldOrigin, _FoldDir;
            float _FoldDist, _IsBack, _ShadowStrength;

            v2f vert (appdata v) {
                v2f o; o.vertex = UnityObjectToClipPos(v.vertex); o.uv = v.uv; return o;
            }

            fixed4 frag (v2f i) : SV_Target
            {
                float2 v = i.uv - _FoldOrigin;
                float dist = dot(v, _FoldDir);
                float foldLine = _FoldDist * 0.5;
                bool isFoldedSide = dist > foldLine;

                if (_IsBack < 0.5)
                {
                    // FRONT SIDE: If not on folded side, discard (standard mask)
                    if (!isFoldedSide) discard;

                    fixed4 col = tex2D(_MainTex, i.uv);
                    
                    // Keep the inner crease shadow for the 3D effect on the sticker itself
                    float creaseFactor = smoothstep(foldLine, foldLine + 0.08, dist);
                    col.rgb *= lerp(1.0 - _ShadowStrength, 1.0, creaseFactor);
                    
                    return col;
                }
                else
                {
                    // BACK SIDE
                    if (!isFoldedSide) discard;
                    float2 reflectedUV = i.uv - (_FoldDir * 2.0 * (dist - foldLine));
                    if (reflectedUV.x < 0 || reflectedUV.x > 1 || reflectedUV.y < 0 || reflectedUV.y > 1) discard;
                    fixed4 col = tex2D(_MainTex, reflectedUV);
                    col.rgb *= 0.8; 
                    return col;
                }
            }
            ENDCG
        }
    }
}