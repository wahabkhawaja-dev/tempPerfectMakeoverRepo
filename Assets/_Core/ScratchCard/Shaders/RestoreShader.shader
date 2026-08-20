Shader "RestoreShader"
{
    Properties
    {
        _MainTex ("Base (RGB)", 2D) = "white" {}
        _Fade ("Fade", Range(0,1)) = 0
    }
    SubShader
    {
        //  remove blending, we want full overwrite
        ZTest Always Cull Off ZWrite Off
        // no Blend command!

        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            sampler2D _MainTex;
            float _Fade;

            struct appdata
            {
                float4 vertex : POSITION;
                float2 uv : TEXCOORD0;
            };

            struct v2f
            {
                float2 uv : TEXCOORD0;
                float4 vertex : SV_POSITION;
            };

            v2f vert (appdata v)
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.uv = v.uv;
                return o;
            }

            fixed4 frag (v2f i) : SV_Target
            {
                fixed4 col = tex2D(_MainTex, i.uv);

                // Fade out smoothly — overwrite instead of blend
                col.rgb = lerp(col.rgb, 0, _Fade);
                col.a   = lerp(col.a, 0, _Fade);

                // Hard clamp to full transparency
                if (col.a <= 0.003 || _Fade >= 0.9995)
                    col = fixed4(0, 0, 0, 0);

                return col;
            }
            ENDCG
        }
    }
}
