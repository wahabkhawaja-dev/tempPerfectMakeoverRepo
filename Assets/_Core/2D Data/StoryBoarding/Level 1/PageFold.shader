Shader "UI/PosterPlacement"
{
    Properties
    {
        [PerRendererData] _MainTex ("Sprite Texture", 2D) = "white" {}
        _Color ("Tint", Color) = (1,1,1,1)
        
        _FoldAngle ("Fold Angle", Range(0, 360)) = 135 // Angle jahan se poster start hoga
        _FoldProgress ("Placement Progress", Range(-1, 2)) = -1 // -1 se start karein
        _FoldWidth ("Fold Width", Range(0.01, 0.5)) = 0.1
        _ShadowIntensity ("Shadow", Range(0, 1)) = 0.5
        _BackColor ("Back of Poster Color", Color) = (0.8, 0.8, 0.8, 1)

        [HideInInspector] _StencilComp ("Stencil Comparison", Float) = 8
        [HideInInspector] _Stencil ("Stencil ID", Float) = 0
        [HideInInspector] _StencilOp ("Stencil Operation", Float) = 0
        [HideInInspector] _StencilWriteMask ("Stencil Write Mask", Float) = 255
        [HideInInspector] _StencilReadMask ("Stencil Read Mask", Float) = 255
        [HideInInspector] _ColorMask ("Color Mask", Float) = 15
    }

    SubShader
    {
        Tags { "Queue"="Transparent" "IgnoreProjector"="True" "RenderType"="Transparent" }
        
        Stencil { Ref [_Stencil] Comp [_StencilComp] Pass [_StencilOp] ReadMask [_StencilReadMask] WriteMask [_StencilWriteMask] }

        Cull Off Lighting Off ZWrite Off ZTest [unity_GUIZTestMode]
        Blend SrcAlpha OneMinusSrcAlpha
        ColorMask [_ColorMask]

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            struct appdata_t {
                float4 vertex   : POSITION;
                float2 texcoord : TEXCOORD0;
                float4 color    : COLOR;
            };

            struct v2f {
                float4 vertex   : SV_POSITION;
                float2 texcoord : TEXCOORD0;
                fixed4 color    : COLOR;
            };

            sampler2D _MainTex;
            fixed4 _Color;
            fixed4 _BackColor;
            float _FoldAngle;
            float _FoldProgress;
            float _FoldWidth;
            float _ShadowIntensity;

            v2f vert(appdata_t v) {
                v2f OUT;
                OUT.vertex = UnityObjectToClipPos(v.vertex);
                OUT.texcoord = v.texcoord;
                OUT.color = v.color * _Color;
                return OUT;
            }

            fixed4 frag(v2f IN) : SV_Target
            {
                float2 uv = IN.texcoord;
                float rad = radians(_FoldAngle);
                float2 dir = float2(cos(rad), sin(rad));
                
                // Distance calculation
                float dist = dot(uv, dir) - _FoldProgress;

                fixed4 col;

                if (dist < 0) 
                {
                    // Yeh wo hissa hai jo wall par lag chuka hai
                    col = tex2D(_MainTex, uv);
                    
                    // Shadow effect jahan poster wall se mil raha hai
                    float shadow = smoothstep(-_FoldWidth, 0, dist);
                    col.rgb *= lerp(1.0, 1.0 - _ShadowIntensity, shadow);
                }
                else if (dist < _FoldWidth)
                {
                    // Yeh folding wala "edge" hai (unrolling part)
                    float2 reflectedUV = uv - 2.0 * dist * dir;
                    
                    // Check if reflected UV is valid
                    if (reflectedUV.x < 0 || reflectedUV.x > 1 || reflectedUV.y < 0 || reflectedUV.y > 1)
                        discard;

                    col = tex2D(_MainTex, reflectedUV) * _BackColor;
                    
                    // Light highlighting on the fold curve
                    float highlight = 1.0 - (dist / _FoldWidth);
                    col.rgb += highlight * 0.2;
                }
                else
                {
                    // Yeh wo hissa hai jo abhi tak wall par nahi aaya (Invisible)
                    discard;
                }

                return col * IN.color;
            }
            ENDCG
        }
    }
}