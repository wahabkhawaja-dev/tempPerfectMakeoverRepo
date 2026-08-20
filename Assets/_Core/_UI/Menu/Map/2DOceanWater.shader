Shader "Custom/2DOceanWater"
{
    Properties
    {
        [PerRendererData] _MainTex ("Sprite Texture", 2D) = "white" {}
        _Color ("Tint Color", Color) = (1,1,1,1)
        
        [Header(Texture Transform)]
        _Tiling ("Tiling (X, Y)", Vector) = (1, 1, 0, 0)
        _Offset ("Offset (X, Y)", Vector) = (0, 0, 0, 0)

        [Header(Water Movement)]
        _ScrollSpeed ("Scroll Speed (X, Y)", Vector) = (0.03, 0.015, 0, 0)
        _WaveFreq ("Wave Frequency", Float) = 12.0
        _WaveSpeed ("Wave Speed", Float) = 2.0
        _Distortion ("Wave Distortion Amount", Range(0, 0.05)) = 0.01

        [Header(Sun Sparkles)]
        [HDR] _ShineColor ("Sparkle Color", Color) = (2, 2, 1.8, 1)
        _ShineScale ("Sparkle Density", Float) = 35.0
        _ShineSpeed ("Sparkle Speed", Float) = 2.0
        _ShineIntensity ("Sparkle Intensity", Range(0, 5)) = 1.5
        _GlintThreshold ("Sparkle Sharpness", Range(2, 32)) = 16.0
        _SparkleSize ("Sparkle Size", Range(0.1, 2.0)) = 1.0
    }

    SubShader
    {
        Tags 
        { 
            "Queue"="Transparent" 
            "IgnoreProjector"="True" 
            "RenderType"="Transparent" 
            "PreviewType"="Plane"
            "CanUseSpriteAtlas"="True"
        }

        Cull Off
        Lighting Off
        ZWrite Off
        Blend SrcAlpha OneMinusSrcAlpha

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            struct appdata_t
            {
                float4 vertex   : POSITION;
                float4 color    : COLOR;
                float2 texcoord : TEXCOORD0;
            };

            struct v2f
            {
                float4 vertex   : SV_POSITION;
                fixed4 color    : COLOR;
                float2 uv       : TEXCOORD0;
            };

            sampler2D _MainTex;
            fixed4 _Color;

            float2 _Tiling;
            float2 _Offset;

            float2 _ScrollSpeed;
            float _WaveFreq;
            float _WaveSpeed;
            float _Distortion;

            fixed4 _ShineColor;
            float _ShineScale;
            float _ShineSpeed;
            float _ShineIntensity;
            float _GlintThreshold;
            float _SparkleSize;

            v2f vert(appdata_t IN)
            {
                v2f OUT;
                OUT.vertex = UnityObjectToClipPos(IN.vertex);
                OUT.uv = IN.texcoord;
                OUT.color = IN.color * _Color;
                return OUT;
            }

            fixed4 frag(v2f IN) : SV_Target
            {
                // 1. Apply Tiling and Offset to UV coordinates
                float2 baseUV = IN.uv * _Tiling + _Offset;

                // 2. Organic wave distortion
                float2 waveOffset;
                waveOffset.x = sin(_Time.y * _WaveSpeed + baseUV.y * _WaveFreq) * _Distortion;
                waveOffset.y = cos(_Time.y * _WaveSpeed + baseUV.x * _WaveFreq) * _Distortion;

                // 3. Scroll texture over time with wave offset
                float2 scrolledUV = baseUV + waveOffset + (_ScrollSpeed * _Time.y);

                // Sample base ocean texture
                fixed4 col = tex2D(_MainTex, scrolledUV) * IN.color;

                // 4. Fine Point Sun Sparkles
                float2 glintUV = IN.uv * _ShineScale;
                float time = _Time.y * _ShineSpeed;

                float shinePattern = sin(glintUV.x + time) * cos(glintUV.y - time * 0.8) 
                                   + sin(glintUV.x * 1.5 - time * 1.2) * cos(glintUV.y * 1.5 + time);

                // Adjust glint threshold dynamically based on Sparkle Size variable
                float sizeAdjustedThreshold = _GlintThreshold / max(_SparkleSize, 0.05);

                float sparkle = pow(saturate((shinePattern + 1.0) * 0.5), sizeAdjustedThreshold) * _ShineIntensity;

                col.rgb += _ShineColor.rgb * sparkle * col.a;

                return col;
            }
            ENDCG
        }
    }
}