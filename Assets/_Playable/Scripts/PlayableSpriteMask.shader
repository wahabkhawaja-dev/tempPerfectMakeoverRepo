Shader "Playable/Sprite Mask"
{
    Properties
    {
        _MainTex ("Sprite", 2D) = "white" {}
        _Mask0 ("Mask 0", 2D) = "black" {}
        _Mask1 ("Mask 1", 2D) = "black" {}
        _Mask2 ("Mask 2", 2D) = "black" {}
        _Alpha ("Alpha subtraction", Float) = 0
        _Outside ("Outside", Float) = 0
        _Active0 ("Active 0", Float) = 0
        _Active1 ("Active 1", Float) = 0
        _Active2 ("Active 2", Float) = 0
        _RowX0 ("X0", Vector) = (0,0,0,0)
        _RowX1 ("X1", Vector) = (0,0,0,0)
        _RowX2 ("X2", Vector) = (0,0,0,0)
        _RowY0 ("Y0", Vector) = (0,0,0,0)
        _RowY1 ("Y1", Vector) = (0,0,0,0)
        _RowY2 ("Y2", Vector) = (0,0,0,0)
        _Rect0 ("Rect0", Vector) = (0,0,1,1)
        _Rect1 ("Rect1", Vector) = (0,0,1,1)
        _Rect2 ("Rect2", Vector) = (0,0,1,1)
        _OffsetX ("Offset X", Float) = 0
        _OffsetY ("Offset Y", Float) = 0
        _DistanceX ("Distance X", Float) = 0
        _DistanceY ("Distance Y", Float) = 0
        _WaveTimeX ("Wave X", Float) = 0
        _WaveTimeY ("Wave Y", Float) = 0
    }
    SubShader
    {
        Tags {"Queue"="Transparent" "RenderType"="Transparent"}
        Cull Off ZWrite Off Blend SrcAlpha OneMinusSrcAlpha
        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"
            struct appdata {float4 vertex:POSITION; float2 uv:TEXCOORD0; fixed4 color:COLOR;};
            struct v2f {float4 vertex:SV_POSITION; float2 uv:TEXCOORD0; float2 world:TEXCOORD1; fixed4 color:COLOR;};
            sampler2D _MainTex, _Mask0, _Mask1, _Mask2;
            float4 _RowX0,_RowX1,_RowX2,_RowY0,_RowY1,_RowY2,_Rect0,_Rect1,_Rect2;
            float _Active0,_Active1,_Active2,_Outside,_Alpha;
            float _OffsetX,_OffsetY,_DistanceX,_DistanceY,_WaveTimeX,_WaveTimeY;
            v2f vert(appdata v)
            {
                v2f o;
                o.vertex=UnityObjectToClipPos(v.vertex);
                o.world=mul(unity_ObjectToWorld,v.vertex).xy;
                o.uv=v.uv;
                o.uv.x+=sin(o.uv.y*_OffsetX+_WaveTimeX)*_DistanceX;
                o.uv.y+=cos(o.uv.x*_OffsetY+_WaveTimeY)*_DistanceY;
                o.color=v.color;
                return o;
            }
            float maskAlpha(sampler2D tex,float2 world,float4 x,float4 y,float4 rect,float active)
            {
                float2 p=float2(dot(float3(world,1),x.xyz),dot(float3(world,1),y.xyz));
                float inside=step(0,p.x)*step(p.x,1)*step(0,p.y)*step(p.y,1);
                float a=tex2D(tex,rect.xy+p*rect.zw).a;
                return inside*active*step(max(x.w,0.001),a);
            }
            fixed4 frag(v2f i):SV_Target
            {
                float a=max(maskAlpha(_Mask0,i.world,_RowX0,_RowY0,_Rect0,_Active0),maskAlpha(_Mask1,i.world,_RowX1,_RowY1,_Rect1,_Active1));
                a=max(a,maskAlpha(_Mask2,i.world,_RowX2,_RowY2,_Rect2,_Active2));
                fixed4 col=tex2D(_MainTex,i.uv)*i.color;
                col.a=max(0,col.a-_Alpha)*lerp(a,1-a,_Outside);
                return col;
            }
            ENDCG
        }
    }
}
