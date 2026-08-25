var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3010 = root || request.c( 'UnityEngine.JointSpring' )
  var i3011 = data
  i3010.spring = i3011[0]
  i3010.damper = i3011[1]
  i3010.targetPosition = i3011[2]
  return i3010
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3012 = root || request.c( 'UnityEngine.JointMotor' )
  var i3013 = data
  i3012.m_TargetVelocity = i3013[0]
  i3012.m_Force = i3013[1]
  i3012.m_FreeSpin = i3013[2]
  return i3012
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3014 = root || request.c( 'UnityEngine.JointLimits' )
  var i3015 = data
  i3014.m_Min = i3015[0]
  i3014.m_Max = i3015[1]
  i3014.m_Bounciness = i3015[2]
  i3014.m_BounceMinVelocity = i3015[3]
  i3014.m_ContactDistance = i3015[4]
  i3014.minBounce = i3015[5]
  i3014.maxBounce = i3015[6]
  return i3014
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3016 = root || request.c( 'UnityEngine.JointDrive' )
  var i3017 = data
  i3016.m_PositionSpring = i3017[0]
  i3016.m_PositionDamper = i3017[1]
  i3016.m_MaximumForce = i3017[2]
  i3016.m_UseAcceleration = i3017[3]
  return i3016
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3018 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3019 = data
  i3018.m_Spring = i3019[0]
  i3018.m_Damper = i3019[1]
  return i3018
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3020 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3021 = data
  i3020.m_Limit = i3021[0]
  i3020.m_Bounciness = i3021[1]
  i3020.m_ContactDistance = i3021[2]
  return i3020
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3022 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3023 = data
  i3022.m_ExtremumSlip = i3023[0]
  i3022.m_ExtremumValue = i3023[1]
  i3022.m_AsymptoteSlip = i3023[2]
  i3022.m_AsymptoteValue = i3023[3]
  i3022.m_Stiffness = i3023[4]
  return i3022
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3024 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3025 = data
  i3024.m_LowerAngle = i3025[0]
  i3024.m_UpperAngle = i3025[1]
  return i3024
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3026 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3027 = data
  i3026.m_MotorSpeed = i3027[0]
  i3026.m_MaximumMotorTorque = i3027[1]
  return i3026
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3028 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3029 = data
  i3028.m_DampingRatio = i3029[0]
  i3028.m_Frequency = i3029[1]
  i3028.m_Angle = i3029[2]
  return i3028
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3030 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3031 = data
  i3030.m_LowerTranslation = i3031[0]
  i3030.m_UpperTranslation = i3031[1]
  return i3030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3032 = root || new pc.UnityMaterial()
  var i3033 = data
  i3032.name = i3033[0]
  request.r(i3033[1], i3033[2], 0, i3032, 'shader')
  i3032.renderQueue = i3033[3]
  i3032.enableInstancing = !!i3033[4]
  var i3035 = i3033[5]
  var i3034 = []
  for(var i = 0; i < i3035.length; i += 1) {
    i3034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3035[i + 0]) );
  }
  i3032.floatParameters = i3034
  var i3037 = i3033[6]
  var i3036 = []
  for(var i = 0; i < i3037.length; i += 1) {
    i3036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3037[i + 0]) );
  }
  i3032.colorParameters = i3036
  var i3039 = i3033[7]
  var i3038 = []
  for(var i = 0; i < i3039.length; i += 1) {
    i3038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3039[i + 0]) );
  }
  i3032.vectorParameters = i3038
  var i3041 = i3033[8]
  var i3040 = []
  for(var i = 0; i < i3041.length; i += 1) {
    i3040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3041[i + 0]) );
  }
  i3032.textureParameters = i3040
  var i3043 = i3033[9]
  var i3042 = []
  for(var i = 0; i < i3043.length; i += 1) {
    i3042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3043[i + 0]) );
  }
  i3032.materialFlags = i3042
  return i3032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3047 = data
  i3046.name = i3047[0]
  i3046.value = i3047[1]
  return i3046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3051 = data
  i3050.name = i3051[0]
  i3050.value = new pc.Color(i3051[1], i3051[2], i3051[3], i3051[4])
  return i3050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3055 = data
  i3054.name = i3055[0]
  i3054.value = new pc.Vec4( i3055[1], i3055[2], i3055[3], i3055[4] )
  return i3054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3059 = data
  i3058.name = i3059[0]
  request.r(i3059[1], i3059[2], 0, i3058, 'value')
  return i3058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3063 = data
  i3062.name = i3063[0]
  i3062.enabled = !!i3063[1]
  return i3062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3065 = data
  i3064.name = i3065[0]
  i3064.width = i3065[1]
  i3064.height = i3065[2]
  i3064.mipmapCount = i3065[3]
  i3064.anisoLevel = i3065[4]
  i3064.filterMode = i3065[5]
  i3064.hdr = !!i3065[6]
  i3064.format = i3065[7]
  i3064.wrapMode = i3065[8]
  i3064.alphaIsTransparency = !!i3065[9]
  i3064.alphaSource = i3065[10]
  i3064.graphicsFormat = i3065[11]
  i3064.sRGBTexture = !!i3065[12]
  i3064.desiredColorSpace = i3065[13]
  i3064.wrapU = i3065[14]
  i3064.wrapV = i3065[15]
  return i3064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3067 = data
  i3066.name = i3067[0]
  i3066.halfPrecision = !!i3067[1]
  i3066.useSimplification = !!i3067[2]
  i3066.useUInt32IndexFormat = !!i3067[3]
  i3066.vertexCount = i3067[4]
  i3066.aabb = i3067[5]
  var i3069 = i3067[6]
  var i3068 = []
  for(var i = 0; i < i3069.length; i += 1) {
    i3068.push( !!i3069[i + 0] );
  }
  i3066.streams = i3068
  i3066.vertices = i3067[7]
  var i3071 = i3067[8]
  var i3070 = []
  for(var i = 0; i < i3071.length; i += 1) {
    i3070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3071[i + 0]) );
  }
  i3066.subMeshes = i3070
  var i3073 = i3067[9]
  var i3072 = []
  for(var i = 0; i < i3073.length; i += 16) {
    i3072.push( new pc.Mat4().setData(i3073[i + 0], i3073[i + 1], i3073[i + 2], i3073[i + 3],  i3073[i + 4], i3073[i + 5], i3073[i + 6], i3073[i + 7],  i3073[i + 8], i3073[i + 9], i3073[i + 10], i3073[i + 11],  i3073[i + 12], i3073[i + 13], i3073[i + 14], i3073[i + 15]) );
  }
  i3066.bindposes = i3072
  var i3075 = i3067[10]
  var i3074 = []
  for(var i = 0; i < i3075.length; i += 1) {
    i3074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3075[i + 0]) );
  }
  i3066.blendShapes = i3074
  return i3066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3081 = data
  i3080.triangles = i3081[0]
  return i3080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3087 = data
  i3086.name = i3087[0]
  var i3089 = i3087[1]
  var i3088 = []
  for(var i = 0; i < i3089.length; i += 1) {
    i3088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3089[i + 0]) );
  }
  i3086.frames = i3088
  return i3086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3091 = data
  i3090.position = new pc.Vec3( i3091[0], i3091[1], i3091[2] )
  i3090.scale = new pc.Vec3( i3091[3], i3091[4], i3091[5] )
  i3090.rotation = new pc.Quat(i3091[6], i3091[7], i3091[8], i3091[9])
  return i3090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3093 = data
  i3092.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3093[0], i3092.main)
  i3092.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3093[1], i3092.colorBySpeed)
  i3092.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3093[2], i3092.colorOverLifetime)
  i3092.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3093[3], i3092.emission)
  i3092.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3093[4], i3092.rotationBySpeed)
  i3092.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3093[5], i3092.rotationOverLifetime)
  i3092.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3093[6], i3092.shape)
  i3092.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3093[7], i3092.sizeBySpeed)
  i3092.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3093[8], i3092.sizeOverLifetime)
  i3092.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3093[9], i3092.textureSheetAnimation)
  i3092.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3093[10], i3092.velocityOverLifetime)
  i3092.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3093[11], i3092.noise)
  i3092.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3093[12], i3092.inheritVelocity)
  i3092.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3093[13], i3092.forceOverLifetime)
  i3092.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3093[14], i3092.limitVelocityOverLifetime)
  i3092.useAutoRandomSeed = !!i3093[15]
  i3092.randomSeed = i3093[16]
  return i3092
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3094 = root || new pc.ParticleSystemMain()
  var i3095 = data
  i3094.duration = i3095[0]
  i3094.loop = !!i3095[1]
  i3094.prewarm = !!i3095[2]
  i3094.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3095[3], i3094.startDelay)
  i3094.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3095[4], i3094.startLifetime)
  i3094.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3095[5], i3094.startSpeed)
  i3094.startSize3D = !!i3095[6]
  i3094.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3095[7], i3094.startSizeX)
  i3094.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3095[8], i3094.startSizeY)
  i3094.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3095[9], i3094.startSizeZ)
  i3094.startRotation3D = !!i3095[10]
  i3094.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3095[11], i3094.startRotationX)
  i3094.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3095[12], i3094.startRotationY)
  i3094.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3095[13], i3094.startRotationZ)
  i3094.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3095[14], i3094.startColor)
  i3094.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3095[15], i3094.gravityModifier)
  i3094.simulationSpace = i3095[16]
  request.r(i3095[17], i3095[18], 0, i3094, 'customSimulationSpace')
  i3094.simulationSpeed = i3095[19]
  i3094.useUnscaledTime = !!i3095[20]
  i3094.scalingMode = i3095[21]
  i3094.playOnAwake = !!i3095[22]
  i3094.maxParticles = i3095[23]
  i3094.emitterVelocityMode = i3095[24]
  i3094.stopAction = i3095[25]
  return i3094
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3096 = root || new pc.MinMaxCurve()
  var i3097 = data
  i3096.mode = i3097[0]
  i3096.curveMin = new pc.AnimationCurve( { keys_flow: i3097[1] } )
  i3096.curveMax = new pc.AnimationCurve( { keys_flow: i3097[2] } )
  i3096.curveMultiplier = i3097[3]
  i3096.constantMin = i3097[4]
  i3096.constantMax = i3097[5]
  return i3096
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3098 = root || new pc.MinMaxGradient()
  var i3099 = data
  i3098.mode = i3099[0]
  i3098.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3099[1], i3098.gradientMin)
  i3098.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3099[2], i3098.gradientMax)
  i3098.colorMin = new pc.Color(i3099[3], i3099[4], i3099[5], i3099[6])
  i3098.colorMax = new pc.Color(i3099[7], i3099[8], i3099[9], i3099[10])
  return i3098
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3101 = data
  i3100.mode = i3101[0]
  var i3103 = i3101[1]
  var i3102 = []
  for(var i = 0; i < i3103.length; i += 1) {
    i3102.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3103[i + 0]) );
  }
  i3100.colorKeys = i3102
  var i3105 = i3101[2]
  var i3104 = []
  for(var i = 0; i < i3105.length; i += 1) {
    i3104.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3105[i + 0]) );
  }
  i3100.alphaKeys = i3104
  return i3100
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3106 = root || new pc.ParticleSystemColorBySpeed()
  var i3107 = data
  i3106.enabled = !!i3107[0]
  i3106.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3107[1], i3106.color)
  i3106.range = new pc.Vec2( i3107[2], i3107[3] )
  return i3106
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3111 = data
  i3110.color = new pc.Color(i3111[0], i3111[1], i3111[2], i3111[3])
  i3110.time = i3111[4]
  return i3110
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3115 = data
  i3114.alpha = i3115[0]
  i3114.time = i3115[1]
  return i3114
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3116 = root || new pc.ParticleSystemColorOverLifetime()
  var i3117 = data
  i3116.enabled = !!i3117[0]
  i3116.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3117[1], i3116.color)
  return i3116
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3118 = root || new pc.ParticleSystemEmitter()
  var i3119 = data
  i3118.enabled = !!i3119[0]
  i3118.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3119[1], i3118.rateOverTime)
  i3118.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3119[2], i3118.rateOverDistance)
  var i3121 = i3119[3]
  var i3120 = []
  for(var i = 0; i < i3121.length; i += 1) {
    i3120.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3121[i + 0]) );
  }
  i3118.bursts = i3120
  return i3118
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3124 = root || new pc.ParticleSystemBurst()
  var i3125 = data
  i3124.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3125[0], i3124.count)
  i3124.cycleCount = i3125[1]
  i3124.minCount = i3125[2]
  i3124.maxCount = i3125[3]
  i3124.repeatInterval = i3125[4]
  i3124.time = i3125[5]
  return i3124
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3126 = root || new pc.ParticleSystemRotationBySpeed()
  var i3127 = data
  i3126.enabled = !!i3127[0]
  i3126.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3127[1], i3126.x)
  i3126.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3127[2], i3126.y)
  i3126.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3127[3], i3126.z)
  i3126.separateAxes = !!i3127[4]
  i3126.range = new pc.Vec2( i3127[5], i3127[6] )
  return i3126
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3128 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3129 = data
  i3128.enabled = !!i3129[0]
  i3128.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3129[1], i3128.x)
  i3128.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3129[2], i3128.y)
  i3128.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3129[3], i3128.z)
  i3128.separateAxes = !!i3129[4]
  return i3128
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3130 = root || new pc.ParticleSystemShape()
  var i3131 = data
  i3130.enabled = !!i3131[0]
  i3130.shapeType = i3131[1]
  i3130.randomDirectionAmount = i3131[2]
  i3130.sphericalDirectionAmount = i3131[3]
  i3130.randomPositionAmount = i3131[4]
  i3130.alignToDirection = !!i3131[5]
  i3130.radius = i3131[6]
  i3130.radiusMode = i3131[7]
  i3130.radiusSpread = i3131[8]
  i3130.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3131[9], i3130.radiusSpeed)
  i3130.radiusThickness = i3131[10]
  i3130.angle = i3131[11]
  i3130.length = i3131[12]
  i3130.boxThickness = new pc.Vec3( i3131[13], i3131[14], i3131[15] )
  i3130.meshShapeType = i3131[16]
  request.r(i3131[17], i3131[18], 0, i3130, 'mesh')
  request.r(i3131[19], i3131[20], 0, i3130, 'meshRenderer')
  request.r(i3131[21], i3131[22], 0, i3130, 'skinnedMeshRenderer')
  i3130.useMeshMaterialIndex = !!i3131[23]
  i3130.meshMaterialIndex = i3131[24]
  i3130.useMeshColors = !!i3131[25]
  i3130.normalOffset = i3131[26]
  i3130.arc = i3131[27]
  i3130.arcMode = i3131[28]
  i3130.arcSpread = i3131[29]
  i3130.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3131[30], i3130.arcSpeed)
  i3130.donutRadius = i3131[31]
  i3130.position = new pc.Vec3( i3131[32], i3131[33], i3131[34] )
  i3130.rotation = new pc.Vec3( i3131[35], i3131[36], i3131[37] )
  i3130.scale = new pc.Vec3( i3131[38], i3131[39], i3131[40] )
  return i3130
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3132 = root || new pc.ParticleSystemSizeBySpeed()
  var i3133 = data
  i3132.enabled = !!i3133[0]
  i3132.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3133[1], i3132.x)
  i3132.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3133[2], i3132.y)
  i3132.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3133[3], i3132.z)
  i3132.separateAxes = !!i3133[4]
  i3132.range = new pc.Vec2( i3133[5], i3133[6] )
  return i3132
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3134 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3135 = data
  i3134.enabled = !!i3135[0]
  i3134.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3135[1], i3134.x)
  i3134.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3135[2], i3134.y)
  i3134.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3135[3], i3134.z)
  i3134.separateAxes = !!i3135[4]
  return i3134
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3136 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3137 = data
  i3136.enabled = !!i3137[0]
  i3136.mode = i3137[1]
  i3136.animation = i3137[2]
  i3136.numTilesX = i3137[3]
  i3136.numTilesY = i3137[4]
  i3136.useRandomRow = !!i3137[5]
  i3136.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3137[6], i3136.frameOverTime)
  i3136.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3137[7], i3136.startFrame)
  i3136.cycleCount = i3137[8]
  i3136.rowIndex = i3137[9]
  i3136.flipU = i3137[10]
  i3136.flipV = i3137[11]
  i3136.spriteCount = i3137[12]
  var i3139 = i3137[13]
  var i3138 = []
  for(var i = 0; i < i3139.length; i += 2) {
  request.r(i3139[i + 0], i3139[i + 1], 2, i3138, '')
  }
  i3136.sprites = i3138
  return i3136
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3142 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3143 = data
  i3142.enabled = !!i3143[0]
  i3142.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3143[1], i3142.x)
  i3142.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3143[2], i3142.y)
  i3142.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3143[3], i3142.z)
  i3142.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3143[4], i3142.radial)
  i3142.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3143[5], i3142.speedModifier)
  i3142.space = i3143[6]
  i3142.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3143[7], i3142.orbitalX)
  i3142.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3143[8], i3142.orbitalY)
  i3142.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3143[9], i3142.orbitalZ)
  i3142.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3143[10], i3142.orbitalOffsetX)
  i3142.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3143[11], i3142.orbitalOffsetY)
  i3142.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3143[12], i3142.orbitalOffsetZ)
  return i3142
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3144 = root || new pc.ParticleSystemNoise()
  var i3145 = data
  i3144.enabled = !!i3145[0]
  i3144.separateAxes = !!i3145[1]
  i3144.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3145[2], i3144.strengthX)
  i3144.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3145[3], i3144.strengthY)
  i3144.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3145[4], i3144.strengthZ)
  i3144.frequency = i3145[5]
  i3144.damping = !!i3145[6]
  i3144.octaveCount = i3145[7]
  i3144.octaveMultiplier = i3145[8]
  i3144.octaveScale = i3145[9]
  i3144.quality = i3145[10]
  i3144.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3145[11], i3144.scrollSpeed)
  i3144.scrollSpeedMultiplier = i3145[12]
  i3144.remapEnabled = !!i3145[13]
  i3144.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3145[14], i3144.remapX)
  i3144.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3145[15], i3144.remapY)
  i3144.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3145[16], i3144.remapZ)
  i3144.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3145[17], i3144.positionAmount)
  i3144.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3145[18], i3144.rotationAmount)
  i3144.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3145[19], i3144.sizeAmount)
  return i3144
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3146 = root || new pc.ParticleSystemInheritVelocity()
  var i3147 = data
  i3146.enabled = !!i3147[0]
  i3146.mode = i3147[1]
  i3146.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3147[2], i3146.curve)
  return i3146
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3148 = root || new pc.ParticleSystemForceOverLifetime()
  var i3149 = data
  i3148.enabled = !!i3149[0]
  i3148.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3149[1], i3148.x)
  i3148.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3149[2], i3148.y)
  i3148.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3149[3], i3148.z)
  i3148.space = i3149[4]
  i3148.randomized = !!i3149[5]
  return i3148
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3150 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3151 = data
  i3150.enabled = !!i3151[0]
  i3150.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3151[1], i3150.limit)
  i3150.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3151[2], i3150.limitX)
  i3150.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3151[3], i3150.limitY)
  i3150.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3151[4], i3150.limitZ)
  i3150.dampen = i3151[5]
  i3150.separateAxes = !!i3151[6]
  i3150.space = i3151[7]
  i3150.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3151[8], i3150.drag)
  i3150.multiplyDragByParticleSize = !!i3151[9]
  i3150.multiplyDragByParticleVelocity = !!i3151[10]
  return i3150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3153 = data
  request.r(i3153[0], i3153[1], 0, i3152, 'mesh')
  i3152.meshCount = i3153[2]
  i3152.activeVertexStreamsCount = i3153[3]
  i3152.alignment = i3153[4]
  i3152.renderMode = i3153[5]
  i3152.sortMode = i3153[6]
  i3152.lengthScale = i3153[7]
  i3152.velocityScale = i3153[8]
  i3152.cameraVelocityScale = i3153[9]
  i3152.normalDirection = i3153[10]
  i3152.sortingFudge = i3153[11]
  i3152.minParticleSize = i3153[12]
  i3152.maxParticleSize = i3153[13]
  i3152.pivot = new pc.Vec3( i3153[14], i3153[15], i3153[16] )
  request.r(i3153[17], i3153[18], 0, i3152, 'trailMaterial')
  i3152.applyActiveColorSpace = !!i3153[19]
  i3152.enabled = !!i3153[20]
  request.r(i3153[21], i3153[22], 0, i3152, 'sharedMaterial')
  var i3155 = i3153[23]
  var i3154 = []
  for(var i = 0; i < i3155.length; i += 2) {
  request.r(i3155[i + 0], i3155[i + 1], 2, i3154, '')
  }
  i3152.sharedMaterials = i3154
  i3152.receiveShadows = !!i3153[24]
  i3152.shadowCastingMode = i3153[25]
  i3152.sortingLayerID = i3153[26]
  i3152.sortingOrder = i3153[27]
  i3152.lightmapIndex = i3153[28]
  i3152.lightmapSceneIndex = i3153[29]
  i3152.lightmapScaleOffset = new pc.Vec4( i3153[30], i3153[31], i3153[32], i3153[33] )
  i3152.lightProbeUsage = i3153[34]
  i3152.reflectionProbeUsage = i3153[35]
  return i3152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3159 = data
  i3158.name = i3159[0]
  i3158.tagId = i3159[1]
  i3158.enabled = !!i3159[2]
  i3158.isStatic = !!i3159[3]
  i3158.layer = i3159[4]
  return i3158
}

Deserializers["Level2_Shoe_Playable"] = function (request, data, root) {
  var i3160 = root || request.c( 'Level2_Shoe_Playable' )
  var i3161 = data
  i3160.MainZoom = request.d('ZoomPos', i3161[0], i3160.MainZoom)
  i3160.ZoomStep1 = request.d('ZoomPos', i3161[1], i3160.ZoomStep1)
  request.r(i3161[2], i3161[3], 0, i3160, 'ToolStep1')
  request.r(i3161[4], i3161[5], 0, i3160, 'ToolStep1CameraFollow')
  request.r(i3161[6], i3161[7], 0, i3160, 'Step1Col')
  var i3163 = i3161[8]
  var i3162 = []
  for(var i = 0; i < i3163.length; i += 2) {
  request.r(i3163[i + 0], i3163[i + 1], 2, i3162, '')
  }
  i3160.LayersToFade_1 = i3162
  request.r(i3161[9], i3161[10], 0, i3160, 'LayersToFade_Updated')
  request.r(i3161[11], i3161[12], 0, i3160, 'MudLayer_1')
  i3160.ZoomStep2 = request.d('ZoomPos', i3161[13], i3160.ZoomStep2)
  request.r(i3161[14], i3161[15], 0, i3160, 'ToolStep2')
  request.r(i3161[16], i3161[17], 0, i3160, 'ToolStep2CameraFollow')
  request.r(i3161[18], i3161[19], 0, i3160, 'Step2Col')
  var i3165 = i3161[20]
  var i3164 = []
  for(var i = 0; i < i3165.length; i += 2) {
  request.r(i3165[i + 0], i3165[i + 1], 2, i3164, '')
  }
  i3160.LayersToFade_2 = i3164
  request.r(i3161[21], i3161[22], 0, i3160, 'WetMud_2')
  i3160.ZoomStep3 = request.d('ZoomPos', i3161[23], i3160.ZoomStep3)
  request.r(i3161[24], i3161[25], 0, i3160, 'ToolStep3')
  request.r(i3161[26], i3161[27], 0, i3160, 'ToolStep3CameraFollow')
  var i3167 = i3161[28]
  var i3166 = []
  for(var i = 0; i < i3167.length; i += 2) {
  request.r(i3167[i + 0], i3167[i + 1], 2, i3166, '')
  }
  i3160.LayersToFade_3 = i3166
  request.r(i3161[29], i3161[30], 0, i3160, 'Foam_3')
  i3160.ZoomStep4 = request.d('ZoomPos', i3161[31], i3160.ZoomStep4)
  request.r(i3161[32], i3161[33], 0, i3160, 'ToolStep4')
  request.r(i3161[34], i3161[35], 0, i3160, 'ToolStep4CameraFollow')
  request.r(i3161[36], i3161[37], 0, i3160, 'Step4Col')
  var i3169 = i3161[38]
  var i3168 = []
  for(var i = 0; i < i3169.length; i += 2) {
  request.r(i3169[i + 0], i3169[i + 1], 2, i3168, '')
  }
  i3160.LayersToFade_4 = i3168
  request.r(i3161[39], i3161[40], 0, i3160, 'dry')
  request.r(i3161[41], i3161[42], 0, i3160, 'mixeE')
  request.r(i3161[43], i3161[44], 0, i3160, 'mix')
  request.r(i3161[45], i3161[46], 0, i3160, 'Mix_4')
  i3160.ZoomStep5 = request.d('ZoomPos', i3161[47], i3160.ZoomStep5)
  request.r(i3161[48], i3161[49], 0, i3160, 'ToolStep5')
  request.r(i3161[50], i3161[51], 0, i3160, 'ToolStep5CameraFollow')
  var i3171 = i3161[52]
  var i3170 = []
  for(var i = 0; i < i3171.length; i += 2) {
  request.r(i3171[i + 0], i3171[i + 1], 2, i3170, '')
  }
  i3160.LayersToFade_5 = i3170
  request.r(i3161[53], i3161[54], 0, i3160, 'WetLayer')
  request.r(i3161[55], i3161[56], 0, i3160, 'DryLayer')
  i3160.levelName = i3161[57]
  i3160.levelReward = i3161[58]
  request.r(i3161[59], i3161[60], 0, i3160, 'LevelIcon')
  request.r(i3161[61], i3161[62], 0, i3160, 'Level_BG')
  var i3173 = i3161[63]
  var i3172 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3173.length; i += 2) {
  request.r(i3173[i + 0], i3173[i + 1], 1, i3172, '')
  }
  i3160.ToolIcons = i3172
  var i3175 = i3161[64]
  var i3174 = []
  for(var i = 0; i < i3175.length; i += 2) {
  request.r(i3175[i + 0], i3175[i + 1], 2, i3174, '')
  }
  i3160.AllDrags = i3174
  var i3177 = i3161[65]
  var i3176 = []
  for(var i = 0; i < i3177.length; i += 2) {
  request.r(i3177[i + 0], i3177[i + 1], 2, i3176, '')
  }
  i3160.AllSources = i3176
  var i3179 = i3161[66]
  var i3178 = []
  for(var i = 0; i < i3179.length; i += 2) {
  request.r(i3179[i + 0], i3179[i + 1], 2, i3178, '')
  }
  i3160.AllScratches = i3178
  i3160.stepsDone = i3161[67]
  i3160.levelNo = i3161[68]
  i3160.partNo = i3161[69]
  return i3160
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i3180 = root || request.c( 'ZoomPos' )
  var i3181 = data
  i3180.CameraPos = new pc.Vec3( i3181[0], i3181[1], i3181[2] )
  i3180.CameraFOV = i3181[3]
  return i3180
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i3192 = root || request.c( 'PlayableCTA' )
  var i3193 = data
  i3192.trigger = i3193[0]
  i3192.afterSeconds = i3193[1]
  i3192.afterTaps = i3193[2]
  request.r(i3193[3], i3193[4], 0, i3192, 'scratchProgress')
  i3192.scratchIndex = i3193[5]
  i3192.progressThreshold = i3193[6]
  request.r(i3193[7], i3193[8], 0, i3192, 'watchedTool')
  i3192.blockInputOnFire = !!i3193[9]
  i3192.refireOnEveryTap = !!i3193[10]
  i3192.refireDelay = i3193[11]
  i3192.showEndCard = !!i3193[12]
  request.r(i3193[13], i3193[14], 0, i3192, 'endCard')
  request.r(i3193[15], i3193[16], 0, i3192, 'endParticles')
  i3192.playEndParticlesOnProgressTrigger = !!i3193[17]
  request.r(i3193[18], i3193[19], 0, i3192, 'stepCompleteParticles')
  i3192.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i3193[20], i3192.onCtaFired)
  i3192.logWhenFired = !!i3193[21]
  return i3192
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3194 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3195 = data
  i3194.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3195[0], i3194.m_PersistentCalls)
  return i3194
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3196 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3197 = data
  var i3199 = i3197[0]
  var i3198 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3199.length; i += 1) {
    i3198.add(request.d('UnityEngine.Events.PersistentCall', i3199[i + 0]));
  }
  i3196.m_Calls = i3198
  return i3196
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3202 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3203 = data
  request.r(i3203[0], i3203[1], 0, i3202, 'm_Target')
  i3202.m_TargetAssemblyTypeName = i3203[2]
  i3202.m_MethodName = i3203[3]
  i3202.m_Mode = i3203[4]
  i3202.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3203[5], i3202.m_Arguments)
  i3202.m_CallState = i3203[6]
  return i3202
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i3204 = root || request.c( 'PlayableFadeCoverSettings' )
  var i3205 = data
  i3204.revealDelay = i3205[0]
  i3204.revealDuration = i3205[1]
  return i3204
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i3206 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i3207 = data
  request.r(i3207[0], i3207[1], 0, i3206, 'MainCamera')
  i3206.RenderType = i3207[2]
  request.r(i3207[3], i3207[4], 0, i3206, 'ScratchSurfaceSprite')
  i3206.ScratchSurfaceSpriteHasAlpha = !!i3207[5]
  i3206.MaskProgressCutOffValue = i3207[6]
  request.r(i3207[7], i3207[8], 0, i3206, 'EraseTexture')
  i3206.EraseTextureScale = new pc.Vec2( i3207[9], i3207[10] )
  i3206.InputEnabled = !!i3207[11]
  request.r(i3207[12], i3207[13], 0, i3206, 'Card')
  i3206.Mode = i3207[14]
  request.r(i3207[15], i3207[16], 0, i3206, 'Progress')
  request.r(i3207[17], i3207[18], 0, i3206, 'MeshCard')
  request.r(i3207[19], i3207[20], 0, i3206, 'SpriteCard')
  request.r(i3207[21], i3207[22], 0, i3206, 'ImageCard')
  request.r(i3207[23], i3207[24], 0, i3206, 'MaskShader')
  request.r(i3207[25], i3207[26], 0, i3206, 'BrushShader')
  request.r(i3207[27], i3207[28], 0, i3206, 'MaskProgressShader')
  request.r(i3207[29], i3207[30], 0, i3206, 'MaskProgressCutOffShader')
  return i3206
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i3208 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i3209 = data
  request.r(i3209[0], i3209[1], 0, i3208, 'MainCamera')
  request.r(i3209[2], i3209[3], 0, i3208, 'Surface')
  i3208.RenderTextureQuality = i3209[4]
  request.r(i3209[5], i3209[6], 0, i3208, 'Eraser')
  request.r(i3209[7], i3209[8], 0, i3208, 'Progress')
  request.r(i3209[9], i3209[10], 0, i3208, 'ScratchSurface')
  request.r(i3209[11], i3209[12], 0, i3208, 'RenderTexture')
  i3208.BrushScale = new pc.Vec2( i3209[13], i3209[14] )
  request.r(i3209[15], i3209[16], 0, i3208, 'ToolTip')
  i3208.InputEnabled = !!i3209[17]
  i3208.IsScratching = !!i3209[18]
  i3208.useChangingScale = !!i3209[19]
  i3208.useGivenBrushScale = !!i3209[20]
  i3208.canSpreadMask = !!i3209[21]
  i3208.shouldPaintHoles = !!i3209[22]
  i3208.canRotateTip = !!i3209[23]
  i3208._mode = i3209[24]
  return i3208
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i3210 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i3211 = data
  request.r(i3211[0], i3211[1], 0, i3210, 'Card')
  i3210.currentProgress = i3211[2]
  return i3210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3213 = data
  i3212.color = new pc.Color(i3213[0], i3213[1], i3213[2], i3213[3])
  request.r(i3213[4], i3213[5], 0, i3212, 'sprite')
  i3212.flipX = !!i3213[6]
  i3212.flipY = !!i3213[7]
  i3212.drawMode = i3213[8]
  i3212.size = new pc.Vec2( i3213[9], i3213[10] )
  i3212.tileMode = i3213[11]
  i3212.adaptiveModeThreshold = i3213[12]
  i3212.maskInteraction = i3213[13]
  i3212.spriteSortPoint = i3213[14]
  i3212.enabled = !!i3213[15]
  request.r(i3213[16], i3213[17], 0, i3212, 'sharedMaterial')
  var i3215 = i3213[18]
  var i3214 = []
  for(var i = 0; i < i3215.length; i += 2) {
  request.r(i3215[i + 0], i3215[i + 1], 2, i3214, '')
  }
  i3212.sharedMaterials = i3214
  i3212.receiveShadows = !!i3213[19]
  i3212.shadowCastingMode = i3213[20]
  i3212.sortingLayerID = i3213[21]
  i3212.sortingOrder = i3213[22]
  i3212.lightmapIndex = i3213[23]
  i3212.lightmapSceneIndex = i3213[24]
  i3212.lightmapScaleOffset = new pc.Vec4( i3213[25], i3213[26], i3213[27], i3213[28] )
  i3212.lightProbeUsage = i3213[29]
  i3212.reflectionProbeUsage = i3213[30]
  return i3212
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i3216 = root || request.c( 'PlayParticlesOnCollision' )
  var i3217 = data
  request.r(i3217[0], i3217[1], 0, i3216, 'Target')
  request.r(i3217[2], i3217[3], 0, i3216, 'ParticlePrefab')
  i3216.destroyIt = !!i3217[4]
  i3216.stayAtPlace = !!i3217[5]
  i3216.disableOnCollision = !!i3217[6]
  i3216.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i3217[7], i3216.OnCollisionEvent)
  return i3216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i3218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i3219 = data
  i3218.radius = i3219[0]
  i3218.enabled = !!i3219[1]
  i3218.isTrigger = !!i3219[2]
  i3218.usedByEffector = !!i3219[3]
  i3218.density = i3219[4]
  i3218.offset = new pc.Vec2( i3219[5], i3219[6] )
  request.r(i3219[7], i3219[8], 0, i3218, 'material')
  return i3218
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i3220 = root || request.c( 'PlaySfxOnCollision' )
  var i3221 = data
  request.r(i3221[0], i3221[1], 0, i3220, 'Tip')
  i3220.Mode = i3221[2]
  request.r(i3221[3], i3221[4], 0, i3220, 'DragInput')
  request.r(i3221[5], i3221[6], 0, i3220, 'Source')
  i3220.startVol = i3221[7]
  i3220.targetVol = i3221[8]
  i3220.duration = i3221[9]
  request.r(i3221[10], i3221[11], 0, i3220, 'Particles')
  i3220.isDone = !!i3221[12]
  i3220.isInArea = !!i3221[13]
  i3220.isPlaying = !!i3221[14]
  return i3220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3223 = data
  request.r(i3223[0], i3223[1], 0, i3222, 'clip')
  request.r(i3223[2], i3223[3], 0, i3222, 'outputAudioMixerGroup')
  i3222.playOnAwake = !!i3223[4]
  i3222.loop = !!i3223[5]
  i3222.time = i3223[6]
  i3222.volume = i3223[7]
  i3222.pitch = i3223[8]
  i3222.enabled = !!i3223[9]
  return i3222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i3224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i3225 = data
  i3224.usedByComposite = !!i3225[0]
  i3224.autoTiling = !!i3225[1]
  var i3227 = i3225[2]
  var i3226 = []
  for(var i = 0; i < i3227.length; i += 1) {
  var i3229 = i3227[i + 0]
  var i3228 = []
  for(var i = 0; i < i3229.length; i += 2) {
    i3228.push( new pc.Vec2( i3229[i + 0], i3229[i + 1] ) );
  }
    i3226.push( i3228 );
  }
  i3224.points = i3226
  i3224.enabled = !!i3225[3]
  i3224.isTrigger = !!i3225[4]
  i3224.usedByEffector = !!i3225[5]
  i3224.density = i3225[6]
  i3224.offset = new pc.Vec2( i3225[7], i3225[8] )
  request.r(i3225[9], i3225[10], 0, i3224, 'material')
  return i3224
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i3236 = root || request.c( 'BasicDrag' )
  var i3237 = data
  i3236.canDrag = !!i3237[0]
  i3236.dragByDelta = !!i3237[1]
  i3236.isDragging = !!i3237[2]
  i3236.moveWithPointer = !!i3237[3]
  i3236.canReturn = !!i3237[4]
  i3236.jumpOnReturn = !!i3237[5]
  i3236.returnTime = i3237[6]
  i3236.Tool_Offset = new pc.Vec3( i3237[7], i3237[8], i3237[9] )
  i3236.canScaleIncrease = !!i3237[10]
  i3236.Self_ScaleNew = new pc.Vec3( i3237[11], i3237[12], i3237[13] )
  i3236.canRotateOnPick = !!i3237[14]
  i3236.startRot = new pc.Vec3( i3237[15], i3237[16], i3237[17] )
  i3236.newRot = new pc.Vec3( i3237[18], i3237[19], i3237[20] )
  var i3239 = i3237[21]
  var i3238 = []
  for(var i = 0; i < i3239.length; i += 2) {
  request.r(i3239[i + 0], i3239[i + 1], 2, i3238, '')
  }
  i3236.childSprite = i3238
  request.r(i3237[22], i3237[23], 0, i3236, 'ToolSelectClip')
  request.r(i3237[24], i3237[25], 0, i3236, 'ToolLoopClip')
  request.r(i3237[26], i3237[27], 0, i3236, 'thisParticles')
  i3236.onDragparticle = !!i3237[28]
  request.r(i3237[29], i3237[30], 0, i3236, 'dragParticles')
  request.r(i3237[31], i3237[32], 0, i3236, 'anim')
  i3236.startPos = new pc.Vec3( i3237[33], i3237[34], i3237[35] )
  i3236.startScale = new pc.Vec3( i3237[36], i3237[37], i3237[38] )
  i3236.Vibration = !!i3237[39]
  i3236.isPlacedCannotMove = !!i3237[40]
  i3236.isObjectMovingWhileDragging = !!i3237[41]
  i3236.OnMouseDownEvent = request.d('System.Action', i3237[42], i3236.OnMouseDownEvent)
  i3236.OnMouseUpEvent = request.d('System.Action', i3237[43], i3236.OnMouseUpEvent)
  i3236.ProgStartEvent = request.d('System.Action', i3237[44], i3236.ProgStartEvent)
  i3236.ProgEndEvent = request.d('System.Action', i3237[45], i3236.ProgEndEvent)
  i3236.canCallMouseUpWhenGamePaused = !!i3237[46]
  i3236.ClampX_L = i3237[47]
  i3236.ClampX_H = i3237[48]
  i3236.ClampY_L = i3237[49]
  i3236.ClampY_H = i3237[50]
  i3236.startOrder = i3237[51]
  i3236.dontResetItIsInCollider = !!i3237[52]
  request.r(i3237[53], i3237[54], 0, i3236, 'thisCollider')
  request.r(i3237[55], i3237[56], 0, i3236, 'thisSR')
  i3236.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i3237[57], i3236.OnMouseDownEventIndependentFromCanDrag)
  return i3236
}

Deserializers["System.Action"] = function (request, data, root) {
  var i3240 = root || request.c( 'System.Action' )
  var i3241 = data
  return i3240
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i3242 = root || request.c( 'BD_Progress' )
  var i3243 = data
  var i3245 = i3243[0]
  var i3244 = []
  for(var i = 0; i < i3245.length; i += 1) {
    i3244.push( request.d('ScratchData', i3245[i + 0]) );
  }
  i3242.AllScratches = i3244
  i3242.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i3243[1], i3242.OnScratchComplete)
  i3242.isProgDone = !!i3243[2]
  i3242.canCallComplete = !!i3243[3]
  i3242.CollectiveAppear = !!i3243[4]
  i3242.tipControl = !!i3243[5]
  i3242.progressControl = !!i3243[6]
  request.r(i3243[7], i3243[8], 0, i3242, 'thisDrag')
  i3242.CompleteEvent = request.d('System.Action', i3243[9], i3242.CompleteEvent)
  i3242.SubCompleteEvent = request.d('System.Action', i3243[10], i3242.SubCompleteEvent)
  return i3242
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i3248 = root || request.c( 'ScratchData' )
  var i3249 = data
  request.r(i3249[0], i3249[1], 0, i3248, 'ScratchManager')
  i3248.scratchLimit = i3249[2]
  i3248.isComplete = !!i3249[3]
  return i3248
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3250 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3251 = data
  request.r(i3251[0], i3251[1], 0, i3250, 'm_ObjectArgument')
  i3250.m_ObjectArgumentAssemblyTypeName = i3251[2]
  i3250.m_IntArgument = i3251[3]
  i3250.m_FloatArgument = i3251[4]
  i3250.m_StringArgument = i3251[5]
  i3250.m_BoolArgument = !!i3251[6]
  return i3250
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i3252 = root || request.c( 'BD_Clamp' )
  var i3253 = data
  i3252.ClampX_L = i3253[0]
  i3252.ClampX_H = i3253[1]
  i3252.ClampY_L = i3253[2]
  i3252.ClampY_H = i3253[3]
  return i3252
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i3254 = root || request.c( 'BD_ToolRotate' )
  var i3255 = data
  i3254.startDelay = i3255[0]
  request.r(i3255[1], i3255[2], 0, i3254, 'Tool')
  request.r(i3255[3], i3255[4], 0, i3254, 'Clamp')
  request.r(i3255[5], i3255[6], 0, i3254, 'Pivot')
  i3254.MinAngle = new pc.Vec3( i3255[7], i3255[8], i3255[9] )
  i3254.MaxAngle = new pc.Vec3( i3255[10], i3255[11], i3255[12] )
  i3254.rotationSpeed = i3255[13]
  return i3254
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i3256 = root || request.c( 'BD_CameraFollow' )
  var i3257 = data
  request.r(i3257[0], i3257[1], 0, i3256, 'Tool')
  request.r(i3257[2], i3257[3], 0, i3256, 'Pivot')
  i3256.FOV = i3257[4]
  i3256.Y_L = i3257[5]
  i3256.Y_H = i3257[6]
  i3256.X_L = i3257[7]
  i3256.X_R = i3257[8]
  i3256.startDelay = i3257[9]
  i3256.duration = i3257[10]
  return i3256
}

Deserializers["BD_Audio"] = function (request, data, root) {
  var i3258 = root || request.c( 'BD_Audio' )
  var i3259 = data
  request.r(i3259[0], i3259[1], 0, i3258, 'BD')
  request.r(i3259[2], i3259[3], 0, i3258, 'Source')
  i3258.shouldRestart = !!i3259[4]
  i3258.startVol = i3259[5]
  i3258.targetVol = i3259[6]
  i3258.duration = i3259[7]
  i3258.startDelay = i3259[8]
  return i3258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i3260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i3261 = data
  i3260.usedByComposite = !!i3261[0]
  i3260.autoTiling = !!i3261[1]
  i3260.size = new pc.Vec2( i3261[2], i3261[3] )
  i3260.edgeRadius = i3261[4]
  i3260.enabled = !!i3261[5]
  i3260.isTrigger = !!i3261[6]
  i3260.usedByEffector = !!i3261[7]
  i3260.density = i3261[8]
  i3260.offset = new pc.Vec2( i3261[9], i3261[10] )
  request.r(i3261[11], i3261[12], 0, i3260, 'material')
  return i3260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3263 = data
  request.r(i3263[0], i3263[1], 0, i3262, 'animatorController')
  request.r(i3263[2], i3263[3], 0, i3262, 'avatar')
  i3262.updateMode = i3263[4]
  i3262.hasTransformHierarchy = !!i3263[5]
  i3262.applyRootMotion = !!i3263[6]
  var i3265 = i3263[7]
  var i3264 = []
  for(var i = 0; i < i3265.length; i += 2) {
  request.r(i3265[i + 0], i3265[i + 1], 2, i3264, '')
  }
  i3262.humanBones = i3264
  i3262.enabled = !!i3263[8]
  return i3262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i3268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i3269 = data
  i3268.bodyType = i3269[0]
  request.r(i3269[1], i3269[2], 0, i3268, 'material')
  i3268.simulated = !!i3269[3]
  i3268.useAutoMass = !!i3269[4]
  i3268.mass = i3269[5]
  i3268.drag = i3269[6]
  i3268.angularDrag = i3269[7]
  i3268.gravityScale = i3269[8]
  i3268.collisionDetectionMode = i3269[9]
  i3268.sleepMode = i3269[10]
  i3268.constraints = i3269[11]
  return i3268
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i3270 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i3271 = data
  request.r(i3271[0], i3271[1], 0, i3270, 'm_RootBone')
  var i3273 = i3271[2]
  var i3272 = []
  for(var i = 0; i < i3273.length; i += 2) {
  request.r(i3273[i + 0], i3273[i + 1], 2, i3272, '')
  }
  i3270.m_BoneTransforms = i3272
  i3270.m_AlwaysUpdate = !!i3271[3]
  i3270.m_AutoRebind = !!i3271[4]
  return i3270
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i3274 = root || request.c( 'BD_SpriteChange' )
  var i3275 = data
  request.r(i3275[0], i3275[1], 0, i3274, 'BD')
  request.r(i3275[2], i3275[3], 0, i3274, 'SR')
  request.r(i3275[4], i3275[5], 0, i3274, 'Default')
  request.r(i3275[6], i3275[7], 0, i3274, 'Picked')
  i3274.resetOnRelease = !!i3275[8]
  return i3274
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i3276 = root || request.c( 'InteractableBones' )
  var i3277 = data
  request.r(i3277[0], i3277[1], 0, i3276, 'Tip')
  i3276.MoveAmount = i3277[2]
  i3276.MoveSpeed = i3277[3]
  i3276.ShakeSpeed = i3277[4]
  i3276.MovementThreshold = i3277[5]
  i3276.MoveX = !!i3277[6]
  i3276.MoveY = !!i3277[7]
  return i3276
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i3278 = root || request.c( 'ActionOnTap' )
  var i3279 = data
  i3278.OnTap = request.d('UnityEngine.Events.UnityEvent', i3279[0], i3278.OnTap)
  return i3278
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3280 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3281 = data
  i3280.targetIsSelf = !!i3281[0]
  request.r(i3281[1], i3281[2], 0, i3280, 'targetGO')
  i3280.tweenTargetIsTargetGO = !!i3281[3]
  i3280.delay = i3281[4]
  i3280.duration = i3281[5]
  i3280.easeType = i3281[6]
  i3280.easeCurve = new pc.AnimationCurve( { keys_flow: i3281[7] } )
  i3280.loopType = i3281[8]
  i3280.loops = i3281[9]
  i3280.id = i3281[10]
  i3280.isRelative = !!i3281[11]
  i3280.isFrom = !!i3281[12]
  i3280.isIndependentUpdate = !!i3281[13]
  i3280.autoKill = !!i3281[14]
  i3280.autoGenerate = !!i3281[15]
  i3280.isActive = !!i3281[16]
  i3280.isValid = !!i3281[17]
  request.r(i3281[18], i3281[19], 0, i3280, 'target')
  i3280.animationType = i3281[20]
  i3280.targetType = i3281[21]
  i3280.forcedTargetType = i3281[22]
  i3280.autoPlay = !!i3281[23]
  i3280.useTargetAsV3 = !!i3281[24]
  i3280.endValueFloat = i3281[25]
  i3280.endValueV3 = new pc.Vec3( i3281[26], i3281[27], i3281[28] )
  i3280.endValueV2 = new pc.Vec2( i3281[29], i3281[30] )
  i3280.endValueColor = new pc.Color(i3281[31], i3281[32], i3281[33], i3281[34])
  i3280.endValueString = i3281[35]
  i3280.endValueRect = UnityEngine.Rect.MinMaxRect(i3281[36], i3281[37], i3281[38], i3281[39])
  request.r(i3281[40], i3281[41], 0, i3280, 'endValueTransform')
  i3280.optionalBool0 = !!i3281[42]
  i3280.optionalBool1 = !!i3281[43]
  i3280.optionalFloat0 = i3281[44]
  i3280.optionalInt0 = i3281[45]
  i3280.optionalRotationMode = i3281[46]
  i3280.optionalScrambleMode = i3281[47]
  i3280.optionalShakeRandomnessMode = i3281[48]
  i3280.optionalString = i3281[49]
  i3280.updateType = i3281[50]
  i3280.isSpeedBased = !!i3281[51]
  i3280.hasOnStart = !!i3281[52]
  i3280.hasOnPlay = !!i3281[53]
  i3280.hasOnUpdate = !!i3281[54]
  i3280.hasOnStepComplete = !!i3281[55]
  i3280.hasOnComplete = !!i3281[56]
  i3280.hasOnTweenCreated = !!i3281[57]
  i3280.hasOnRewind = !!i3281[58]
  i3280.onStart = request.d('UnityEngine.Events.UnityEvent', i3281[59], i3280.onStart)
  i3280.onPlay = request.d('UnityEngine.Events.UnityEvent', i3281[60], i3280.onPlay)
  i3280.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3281[61], i3280.onUpdate)
  i3280.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3281[62], i3280.onStepComplete)
  i3280.onComplete = request.d('UnityEngine.Events.UnityEvent', i3281[63], i3280.onComplete)
  i3280.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3281[64], i3280.onTweenCreated)
  i3280.onRewind = request.d('UnityEngine.Events.UnityEvent', i3281[65], i3280.onRewind)
  return i3280
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i3282 = root || request.c( 'DestroyObj' )
  var i3283 = data
  i3282.destroyDelay = i3283[0]
  return i3282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3285 = data
  i3284.name = i3285[0]
  i3284.atlasId = i3285[1]
  i3284.mipmapCount = i3285[2]
  i3284.hdr = !!i3285[3]
  i3284.size = i3285[4]
  i3284.anisoLevel = i3285[5]
  i3284.filterMode = i3285[6]
  var i3287 = i3285[7]
  var i3286 = []
  for(var i = 0; i < i3287.length; i += 4) {
    i3286.push( UnityEngine.Rect.MinMaxRect(i3287[i + 0], i3287[i + 1], i3287[i + 2], i3287[i + 3]) );
  }
  i3284.rects = i3286
  i3284.wrapU = i3285[8]
  i3284.wrapV = i3285[9]
  return i3284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3291 = data
  i3290.name = i3291[0]
  i3290.index = i3291[1]
  i3290.startup = !!i3291[2]
  return i3290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3293 = data
  i3292.aspect = i3293[0]
  i3292.orthographic = !!i3293[1]
  i3292.orthographicSize = i3293[2]
  i3292.backgroundColor = new pc.Color(i3293[3], i3293[4], i3293[5], i3293[6])
  i3292.nearClipPlane = i3293[7]
  i3292.farClipPlane = i3293[8]
  i3292.fieldOfView = i3293[9]
  i3292.depth = i3293[10]
  i3292.clearFlags = i3293[11]
  i3292.cullingMask = i3293[12]
  i3292.rect = i3293[13]
  request.r(i3293[14], i3293[15], 0, i3292, 'targetTexture')
  i3292.usePhysicalProperties = !!i3293[16]
  i3292.focalLength = i3293[17]
  i3292.sensorSize = new pc.Vec2( i3293[18], i3293[19] )
  i3292.lensShift = new pc.Vec2( i3293[20], i3293[21] )
  i3292.gateFit = i3293[22]
  i3292.commandBufferCount = i3293[23]
  i3292.cameraType = i3293[24]
  i3292.enabled = !!i3293[25]
  return i3292
}

Deserializers["CameraController"] = function (request, data, root) {
  var i3294 = root || request.c( 'CameraController' )
  var i3295 = data
  request.r(i3295[0], i3295[1], 0, i3294, 'cam')
  i3294.defaultPosition = new pc.Vec3( i3295[2], i3295[3], i3295[4] )
  i3294.defaultSize = i3295[5]
  i3294.defaultFOV = i3295[6]
  i3294.defaultDuration = i3295[7]
  i3294.defaultEase = i3295[8]
  return i3294
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i3296 = root || request.c( 'MusicSource' )
  var i3297 = data
  request.r(i3297[0], i3297[1], 0, i3296, 'source')
  return i3296
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i3298 = root || request.c( 'UI_Manager' )
  var i3299 = data
  i3298.levelCompleted = !!i3299[0]
  i3298.isPauseActive = !!i3299[1]
  i3298.loadIndex = i3299[2]
  request.r(i3299[3], i3299[4], 0, i3298, 'removeAdsButton')
  request.r(i3299[5], i3299[6], 0, i3298, 'pauseButton')
  request.r(i3299[7], i3299[8], 0, i3298, 'Fade_Img')
  request.r(i3299[9], i3299[10], 0, i3298, 'TopBarAnim')
  request.r(i3299[11], i3299[12], 0, i3298, 'MainPanel')
  request.r(i3299[13], i3299[14], 0, i3298, 'PausePanel')
  request.r(i3299[15], i3299[16], 0, i3298, 'PausePopUp')
  request.r(i3299[17], i3299[18], 0, i3298, 'PauseCanvasGroup')
  request.r(i3299[19], i3299[20], 0, i3298, 'RateUsPanel')
  request.r(i3299[21], i3299[22], 0, i3298, 'RateUsPopUp')
  request.r(i3299[23], i3299[24], 0, i3298, 'RemoveAdsPanel')
  request.r(i3299[25], i3299[26], 0, i3298, 'RemoveAdsPopUp')
  request.r(i3299[27], i3299[28], 0, i3298, 'RemoveAdsCanvasGroup')
  var i3301 = i3299[29]
  var i3300 = []
  for(var i = 0; i < i3301.length; i += 2) {
  request.r(i3301[i + 0], i3301[i + 1], 2, i3300, '')
  }
  i3298.RemoveAdsAnims = i3300
  request.r(i3299[30], i3299[31], 0, i3298, 'CompletePanel')
  request.r(i3299[32], i3299[33], 0, i3298, 'LevelIcon')
  request.r(i3299[34], i3299[35], 0, i3298, 'CompleteParticles')
  request.r(i3299[36], i3299[37], 0, i3298, 'progressBar')
  request.r(i3299[38], i3299[39], 0, i3298, 'progressText')
  request.r(i3299[40], i3299[41], 0, i3298, 'toolIcon1')
  request.r(i3299[42], i3299[43], 0, i3298, 'toolIcon2')
  request.r(i3299[44], i3299[45], 0, i3298, 'toolIcon3')
  request.r(i3299[46], i3299[47], 0, i3298, 'target1')
  request.r(i3299[48], i3299[49], 0, i3298, 'target2')
  i3298.toolMoveDuration = i3299[50]
  i3298.currentIndex = i3299[51]
  var i3303 = i3299[52]
  var i3302 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3303.length; i += 2) {
  request.r(i3303[i + 0], i3303[i + 1], 1, i3302, '')
  }
  i3298.allTools = i3302
  request.r(i3299[53], i3299[54], 0, i3298, 'clockProgress')
  request.r(i3299[55], i3299[56], 0, i3298, 'clockProgressFill')
  request.r(i3299[57], i3299[58], 0, i3298, 'clockAudio')
  i3298.moveDistance = i3299[59]
  i3298.animationDuration = i3299[60]
  i3298.greyBgChildName = i3299[61]
  i3298.pushOffset = i3299[62]
  return i3298
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i3306 = root || request.c( 'GameManagerPlayable' )
  var i3307 = data
  request.r(i3307[0], i3307[1], 0, i3306, 'DefaultMat')
  request.r(i3307[2], i3307[3], 0, i3306, 'BG_Music')
  request.r(i3307[4], i3307[5], 0, i3306, 'restoreEffectShader')
  request.r(i3307[6], i3307[7], 0, i3306, 'stickerEffectShader')
  i3306.isComplete = !!i3307[8]
  i3306.isPaused = !!i3307[9]
  request.r(i3307[10], i3307[11], 0, i3306, 'currentLevel')
  return i3306
}

Deserializers["AudioController"] = function (request, data, root) {
  var i3308 = root || request.c( 'AudioController' )
  var i3309 = data
  request.r(i3309[0], i3309[1], 0, i3308, 'MainMixer')
  request.r(i3309[2], i3309[3], 0, i3308, 'UiClick')
  request.r(i3309[4], i3309[5], 0, i3308, 'UiClickSource')
  var i3311 = i3309[6]
  var i3310 = []
  for(var i = 0; i < i3311.length; i += 2) {
  request.r(i3311[i + 0], i3311[i + 1], 2, i3310, '')
  }
  i3308.SfxSources = i3310
  var i3313 = i3309[7]
  var i3312 = []
  for(var i = 0; i < i3313.length; i += 2) {
  request.r(i3313[i + 0], i3313[i + 1], 2, i3312, '')
  }
  i3308.AllClips = i3312
  return i3308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3317 = data
  i3316.pivot = new pc.Vec2( i3317[0], i3317[1] )
  i3316.anchorMin = new pc.Vec2( i3317[2], i3317[3] )
  i3316.anchorMax = new pc.Vec2( i3317[4], i3317[5] )
  i3316.sizeDelta = new pc.Vec2( i3317[6], i3317[7] )
  i3316.anchoredPosition3D = new pc.Vec3( i3317[8], i3317[9], i3317[10] )
  i3316.rotation = new pc.Quat(i3317[11], i3317[12], i3317[13], i3317[14])
  i3316.scale = new pc.Vec3( i3317[15], i3317[16], i3317[17] )
  return i3316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3319 = data
  i3318.planeDistance = i3319[0]
  i3318.referencePixelsPerUnit = i3319[1]
  i3318.isFallbackOverlay = !!i3319[2]
  i3318.renderMode = i3319[3]
  i3318.renderOrder = i3319[4]
  i3318.sortingLayerName = i3319[5]
  i3318.sortingOrder = i3319[6]
  i3318.scaleFactor = i3319[7]
  request.r(i3319[8], i3319[9], 0, i3318, 'worldCamera')
  i3318.overrideSorting = !!i3319[10]
  i3318.pixelPerfect = !!i3319[11]
  i3318.targetDisplay = i3319[12]
  i3318.overridePixelPerfect = !!i3319[13]
  i3318.enabled = !!i3319[14]
  return i3318
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3320 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3321 = data
  i3320.m_UiScaleMode = i3321[0]
  i3320.m_ReferencePixelsPerUnit = i3321[1]
  i3320.m_ScaleFactor = i3321[2]
  i3320.m_ReferenceResolution = new pc.Vec2( i3321[3], i3321[4] )
  i3320.m_ScreenMatchMode = i3321[5]
  i3320.m_MatchWidthOrHeight = i3321[6]
  i3320.m_PhysicalUnit = i3321[7]
  i3320.m_FallbackScreenDPI = i3321[8]
  i3320.m_DefaultSpriteDPI = i3321[9]
  i3320.m_DynamicPixelsPerUnit = i3321[10]
  i3320.m_PresetInfoIsWorld = !!i3321[11]
  return i3320
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3322 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3323 = data
  i3322.m_IgnoreReversedGraphics = !!i3323[0]
  i3322.m_BlockingObjects = i3323[1]
  i3322.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3323[2] )
  return i3322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3325 = data
  i3324.cullTransparentMesh = !!i3325[0]
  return i3324
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3326 = root || request.c( 'UnityEngine.UI.Image' )
  var i3327 = data
  request.r(i3327[0], i3327[1], 0, i3326, 'm_Sprite')
  i3326.m_Type = i3327[2]
  i3326.m_PreserveAspect = !!i3327[3]
  i3326.m_FillCenter = !!i3327[4]
  i3326.m_FillMethod = i3327[5]
  i3326.m_FillAmount = i3327[6]
  i3326.m_FillClockwise = !!i3327[7]
  i3326.m_FillOrigin = i3327[8]
  i3326.m_UseSpriteMesh = !!i3327[9]
  i3326.m_PixelsPerUnitMultiplier = i3327[10]
  request.r(i3327[11], i3327[12], 0, i3326, 'm_Material')
  i3326.m_Maskable = !!i3327[13]
  i3326.m_Color = new pc.Color(i3327[14], i3327[15], i3327[16], i3327[17])
  i3326.m_RaycastTarget = !!i3327[18]
  i3326.m_RaycastPadding = new pc.Vec4( i3327[19], i3327[20], i3327[21], i3327[22] )
  return i3326
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3328 = root || request.c( 'UnityEngine.UI.Text' )
  var i3329 = data
  i3328.m_FontData = request.d('UnityEngine.UI.FontData', i3329[0], i3328.m_FontData)
  i3328.m_Text = i3329[1]
  request.r(i3329[2], i3329[3], 0, i3328, 'm_Material')
  i3328.m_Maskable = !!i3329[4]
  i3328.m_Color = new pc.Color(i3329[5], i3329[6], i3329[7], i3329[8])
  i3328.m_RaycastTarget = !!i3329[9]
  i3328.m_RaycastPadding = new pc.Vec4( i3329[10], i3329[11], i3329[12], i3329[13] )
  return i3328
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3330 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3331 = data
  request.r(i3331[0], i3331[1], 0, i3330, 'm_Font')
  i3330.m_FontSize = i3331[2]
  i3330.m_FontStyle = i3331[3]
  i3330.m_BestFit = !!i3331[4]
  i3330.m_MinSize = i3331[5]
  i3330.m_MaxSize = i3331[6]
  i3330.m_Alignment = i3331[7]
  i3330.m_AlignByGeometry = !!i3331[8]
  i3330.m_RichText = !!i3331[9]
  i3330.m_HorizontalOverflow = i3331[10]
  i3330.m_VerticalOverflow = i3331[11]
  i3330.m_LineSpacing = i3331[12]
  return i3330
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3332 = root || request.c( 'UnityEngine.UI.Button' )
  var i3333 = data
  i3332.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3333[0], i3332.m_OnClick)
  i3332.m_Navigation = request.d('UnityEngine.UI.Navigation', i3333[1], i3332.m_Navigation)
  i3332.m_Transition = i3333[2]
  i3332.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3333[3], i3332.m_Colors)
  i3332.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3333[4], i3332.m_SpriteState)
  i3332.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3333[5], i3332.m_AnimationTriggers)
  i3332.m_Interactable = !!i3333[6]
  request.r(i3333[7], i3333[8], 0, i3332, 'm_TargetGraphic')
  return i3332
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3334 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3335 = data
  i3334.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3335[0], i3334.m_PersistentCalls)
  return i3334
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3336 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3337 = data
  i3336.m_Mode = i3337[0]
  i3336.m_WrapAround = !!i3337[1]
  request.r(i3337[2], i3337[3], 0, i3336, 'm_SelectOnUp')
  request.r(i3337[4], i3337[5], 0, i3336, 'm_SelectOnDown')
  request.r(i3337[6], i3337[7], 0, i3336, 'm_SelectOnLeft')
  request.r(i3337[8], i3337[9], 0, i3336, 'm_SelectOnRight')
  return i3336
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3338 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3339 = data
  i3338.m_NormalColor = new pc.Color(i3339[0], i3339[1], i3339[2], i3339[3])
  i3338.m_HighlightedColor = new pc.Color(i3339[4], i3339[5], i3339[6], i3339[7])
  i3338.m_PressedColor = new pc.Color(i3339[8], i3339[9], i3339[10], i3339[11])
  i3338.m_SelectedColor = new pc.Color(i3339[12], i3339[13], i3339[14], i3339[15])
  i3338.m_DisabledColor = new pc.Color(i3339[16], i3339[17], i3339[18], i3339[19])
  i3338.m_ColorMultiplier = i3339[20]
  i3338.m_FadeDuration = i3339[21]
  return i3338
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3340 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3341 = data
  request.r(i3341[0], i3341[1], 0, i3340, 'm_HighlightedSprite')
  request.r(i3341[2], i3341[3], 0, i3340, 'm_PressedSprite')
  request.r(i3341[4], i3341[5], 0, i3340, 'm_SelectedSprite')
  request.r(i3341[6], i3341[7], 0, i3340, 'm_DisabledSprite')
  return i3340
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3342 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3343 = data
  i3342.m_NormalTrigger = i3343[0]
  i3342.m_HighlightedTrigger = i3343[1]
  i3342.m_PressedTrigger = i3343[2]
  i3342.m_SelectedTrigger = i3343[3]
  i3342.m_DisabledTrigger = i3343[4]
  return i3342
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i3344 = root || request.c( 'PlayableHudRuntime' )
  var i3345 = data
  return i3344
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3346 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3347 = data
  request.r(i3347[0], i3347[1], 0, i3346, 'm_FirstSelected')
  i3346.m_sendNavigationEvents = !!i3347[2]
  i3346.m_DragThreshold = i3347[3]
  return i3346
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3348 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3349 = data
  i3348.m_HorizontalAxis = i3349[0]
  i3348.m_VerticalAxis = i3349[1]
  i3348.m_SubmitButton = i3349[2]
  i3348.m_CancelButton = i3349[3]
  i3348.m_InputActionsPerSecond = i3349[4]
  i3348.m_RepeatDelay = i3349[5]
  i3348.m_ForceModuleActive = !!i3349[6]
  i3348.m_SendPointerHoverToParent = !!i3349[7]
  return i3348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3351 = data
  i3350.ambientIntensity = i3351[0]
  i3350.reflectionIntensity = i3351[1]
  i3350.ambientMode = i3351[2]
  i3350.ambientLight = new pc.Color(i3351[3], i3351[4], i3351[5], i3351[6])
  i3350.ambientSkyColor = new pc.Color(i3351[7], i3351[8], i3351[9], i3351[10])
  i3350.ambientGroundColor = new pc.Color(i3351[11], i3351[12], i3351[13], i3351[14])
  i3350.ambientEquatorColor = new pc.Color(i3351[15], i3351[16], i3351[17], i3351[18])
  i3350.fogColor = new pc.Color(i3351[19], i3351[20], i3351[21], i3351[22])
  i3350.fogEndDistance = i3351[23]
  i3350.fogStartDistance = i3351[24]
  i3350.fogDensity = i3351[25]
  i3350.fog = !!i3351[26]
  request.r(i3351[27], i3351[28], 0, i3350, 'skybox')
  i3350.fogMode = i3351[29]
  var i3353 = i3351[30]
  var i3352 = []
  for(var i = 0; i < i3353.length; i += 1) {
    i3352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3353[i + 0]) );
  }
  i3350.lightmaps = i3352
  i3350.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3351[31], i3350.lightProbes)
  i3350.lightmapsMode = i3351[32]
  i3350.mixedBakeMode = i3351[33]
  i3350.environmentLightingMode = i3351[34]
  i3350.ambientProbe = new pc.SphericalHarmonicsL2(i3351[35])
  request.r(i3351[36], i3351[37], 0, i3350, 'customReflection')
  request.r(i3351[38], i3351[39], 0, i3350, 'defaultReflection')
  i3350.defaultReflectionMode = i3351[40]
  i3350.defaultReflectionResolution = i3351[41]
  i3350.sunLightObjectId = i3351[42]
  i3350.pixelLightCount = i3351[43]
  i3350.defaultReflectionHDR = !!i3351[44]
  i3350.hasLightDataAsset = !!i3351[45]
  i3350.hasManualGenerate = !!i3351[46]
  return i3350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3357 = data
  request.r(i3357[0], i3357[1], 0, i3356, 'lightmapColor')
  request.r(i3357[2], i3357[3], 0, i3356, 'lightmapDirection')
  request.r(i3357[4], i3357[5], 0, i3356, 'shadowMask')
  return i3356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3358 = root || new UnityEngine.LightProbes()
  var i3359 = data
  return i3358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3367 = data
  var i3369 = i3367[0]
  var i3368 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3369.length; i += 1) {
    i3368.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3369[i + 0]));
  }
  i3366.ShaderCompilationErrors = i3368
  i3366.name = i3367[1]
  i3366.guid = i3367[2]
  var i3371 = i3367[3]
  var i3370 = []
  for(var i = 0; i < i3371.length; i += 1) {
    i3370.push( i3371[i + 0] );
  }
  i3366.shaderDefinedKeywords = i3370
  var i3373 = i3367[4]
  var i3372 = []
  for(var i = 0; i < i3373.length; i += 1) {
    i3372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3373[i + 0]) );
  }
  i3366.passes = i3372
  var i3375 = i3367[5]
  var i3374 = []
  for(var i = 0; i < i3375.length; i += 1) {
    i3374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3375[i + 0]) );
  }
  i3366.usePasses = i3374
  var i3377 = i3367[6]
  var i3376 = []
  for(var i = 0; i < i3377.length; i += 1) {
    i3376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3377[i + 0]) );
  }
  i3366.defaultParameterValues = i3376
  request.r(i3367[7], i3367[8], 0, i3366, 'unityFallbackShader')
  i3366.readDepth = !!i3367[9]
  i3366.hasDepthOnlyPass = !!i3367[10]
  i3366.isCreatedByShaderGraph = !!i3367[11]
  i3366.disableBatching = !!i3367[12]
  i3366.compiled = !!i3367[13]
  return i3366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3381 = data
  i3380.shaderName = i3381[0]
  i3380.errorMessage = i3381[1]
  return i3380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3386 = root || new pc.UnityShaderPass()
  var i3387 = data
  i3386.id = i3387[0]
  i3386.subShaderIndex = i3387[1]
  i3386.name = i3387[2]
  i3386.passType = i3387[3]
  i3386.grabPassTextureName = i3387[4]
  i3386.usePass = !!i3387[5]
  i3386.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3387[6], i3386.zTest)
  i3386.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3387[7], i3386.zWrite)
  i3386.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3387[8], i3386.culling)
  i3386.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3387[9], i3386.blending)
  i3386.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3387[10], i3386.alphaBlending)
  i3386.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3387[11], i3386.colorWriteMask)
  i3386.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3387[12], i3386.offsetUnits)
  i3386.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3387[13], i3386.offsetFactor)
  i3386.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3387[14], i3386.stencilRef)
  i3386.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3387[15], i3386.stencilReadMask)
  i3386.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3387[16], i3386.stencilWriteMask)
  i3386.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3387[17], i3386.stencilOp)
  i3386.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3387[18], i3386.stencilOpFront)
  i3386.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3387[19], i3386.stencilOpBack)
  var i3389 = i3387[20]
  var i3388 = []
  for(var i = 0; i < i3389.length; i += 1) {
    i3388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3389[i + 0]) );
  }
  i3386.tags = i3388
  var i3391 = i3387[21]
  var i3390 = []
  for(var i = 0; i < i3391.length; i += 1) {
    i3390.push( i3391[i + 0] );
  }
  i3386.passDefinedKeywords = i3390
  var i3393 = i3387[22]
  var i3392 = []
  for(var i = 0; i < i3393.length; i += 1) {
    i3392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3393[i + 0]) );
  }
  i3386.passDefinedKeywordGroups = i3392
  var i3395 = i3387[23]
  var i3394 = []
  for(var i = 0; i < i3395.length; i += 1) {
    i3394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3395[i + 0]) );
  }
  i3386.variants = i3394
  var i3397 = i3387[24]
  var i3396 = []
  for(var i = 0; i < i3397.length; i += 1) {
    i3396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3397[i + 0]) );
  }
  i3386.excludedVariants = i3396
  i3386.hasDepthReader = !!i3387[25]
  return i3386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3399 = data
  i3398.val = i3399[0]
  i3398.name = i3399[1]
  return i3398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3401 = data
  i3400.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3401[0], i3400.src)
  i3400.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3401[1], i3400.dst)
  i3400.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3401[2], i3400.op)
  return i3400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3403 = data
  i3402.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3403[0], i3402.pass)
  i3402.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3403[1], i3402.fail)
  i3402.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3403[2], i3402.zFail)
  i3402.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3403[3], i3402.comp)
  return i3402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3407 = data
  i3406.name = i3407[0]
  i3406.value = i3407[1]
  return i3406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3411 = data
  var i3413 = i3411[0]
  var i3412 = []
  for(var i = 0; i < i3413.length; i += 1) {
    i3412.push( i3413[i + 0] );
  }
  i3410.keywords = i3412
  i3410.hasDiscard = !!i3411[1]
  return i3410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3417 = data
  i3416.passId = i3417[0]
  i3416.subShaderIndex = i3417[1]
  var i3419 = i3417[2]
  var i3418 = []
  for(var i = 0; i < i3419.length; i += 1) {
    i3418.push( i3419[i + 0] );
  }
  i3416.keywords = i3418
  i3416.vertexProgram = i3417[3]
  i3416.fragmentProgram = i3417[4]
  i3416.exportedForWebGl2 = !!i3417[5]
  i3416.readDepth = !!i3417[6]
  return i3416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3423 = data
  request.r(i3423[0], i3423[1], 0, i3422, 'shader')
  i3422.pass = i3423[2]
  return i3422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3427 = data
  i3426.name = i3427[0]
  i3426.type = i3427[1]
  i3426.value = new pc.Vec4( i3427[2], i3427[3], i3427[4], i3427[5] )
  i3426.textureValue = i3427[6]
  i3426.shaderPropertyFlag = i3427[7]
  return i3426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3429 = data
  i3428.name = i3429[0]
  request.r(i3429[1], i3429[2], 0, i3428, 'texture')
  i3428.aabb = i3429[3]
  i3428.vertices = i3429[4]
  i3428.triangles = i3429[5]
  i3428.textureRect = UnityEngine.Rect.MinMaxRect(i3429[6], i3429[7], i3429[8], i3429[9])
  i3428.packedRect = UnityEngine.Rect.MinMaxRect(i3429[10], i3429[11], i3429[12], i3429[13])
  i3428.border = new pc.Vec4( i3429[14], i3429[15], i3429[16], i3429[17] )
  i3428.transparency = i3429[18]
  i3428.bounds = i3429[19]
  i3428.pixelsPerUnit = i3429[20]
  i3428.textureWidth = i3429[21]
  i3428.textureHeight = i3429[22]
  i3428.nativeSize = new pc.Vec2( i3429[23], i3429[24] )
  i3428.pivot = new pc.Vec2( i3429[25], i3429[26] )
  i3428.textureRectOffset = new pc.Vec2( i3429[27], i3429[28] )
  return i3428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3431 = data
  i3430.name = i3431[0]
  return i3430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3433 = data
  i3432.name = i3433[0]
  i3432.wrapMode = i3433[1]
  i3432.isLooping = !!i3433[2]
  i3432.length = i3433[3]
  var i3435 = i3433[4]
  var i3434 = []
  for(var i = 0; i < i3435.length; i += 1) {
    i3434.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3435[i + 0]) );
  }
  i3432.curves = i3434
  var i3437 = i3433[5]
  var i3436 = []
  for(var i = 0; i < i3437.length; i += 1) {
    i3436.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3437[i + 0]) );
  }
  i3432.events = i3436
  i3432.halfPrecision = !!i3433[6]
  i3432._frameRate = i3433[7]
  i3432.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3433[8], i3432.localBounds)
  i3432.hasMuscleCurves = !!i3433[9]
  var i3439 = i3433[10]
  var i3438 = []
  for(var i = 0; i < i3439.length; i += 1) {
    i3438.push( i3439[i + 0] );
  }
  i3432.clipMuscleConstant = i3438
  i3432.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3433[11], i3432.clipBindingConstant)
  return i3432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3443 = data
  i3442.path = i3443[0]
  i3442.hash = i3443[1]
  i3442.componentType = i3443[2]
  i3442.property = i3443[3]
  i3442.keys = i3443[4]
  var i3445 = i3443[5]
  var i3444 = []
  for(var i = 0; i < i3445.length; i += 1) {
    i3444.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3445[i + 0]) );
  }
  i3442.objectReferenceKeys = i3444
  return i3442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3449 = data
  i3448.time = i3449[0]
  request.r(i3449[1], i3449[2], 0, i3448, 'value')
  return i3448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3453 = data
  i3452.functionName = i3453[0]
  i3452.floatParameter = i3453[1]
  i3452.intParameter = i3453[2]
  i3452.stringParameter = i3453[3]
  request.r(i3453[4], i3453[5], 0, i3452, 'objectReferenceParameter')
  i3452.time = i3453[6]
  return i3452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3455 = data
  i3454.center = new pc.Vec3( i3455[0], i3455[1], i3455[2] )
  i3454.extends = new pc.Vec3( i3455[3], i3455[4], i3455[5] )
  return i3454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3459 = data
  var i3461 = i3459[0]
  var i3460 = []
  for(var i = 0; i < i3461.length; i += 1) {
    i3460.push( i3461[i + 0] );
  }
  i3458.genericBindings = i3460
  var i3463 = i3459[1]
  var i3462 = []
  for(var i = 0; i < i3463.length; i += 1) {
    i3462.push( i3463[i + 0] );
  }
  i3458.pptrCurveMapping = i3462
  return i3458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3465 = data
  i3464.name = i3465[0]
  i3464.ascent = i3465[1]
  i3464.originalLineHeight = i3465[2]
  i3464.fontSize = i3465[3]
  var i3467 = i3465[4]
  var i3466 = []
  for(var i = 0; i < i3467.length; i += 1) {
    i3466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3467[i + 0]) );
  }
  i3464.characterInfo = i3466
  request.r(i3465[5], i3465[6], 0, i3464, 'texture')
  i3464.originalFontSize = i3465[7]
  return i3464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3471 = data
  i3470.index = i3471[0]
  i3470.advance = i3471[1]
  i3470.bearing = i3471[2]
  i3470.glyphWidth = i3471[3]
  i3470.glyphHeight = i3471[4]
  i3470.minX = i3471[5]
  i3470.maxX = i3471[6]
  i3470.minY = i3471[7]
  i3470.maxY = i3471[8]
  i3470.uvBottomLeftX = i3471[9]
  i3470.uvBottomLeftY = i3471[10]
  i3470.uvBottomRightX = i3471[11]
  i3470.uvBottomRightY = i3471[12]
  i3470.uvTopLeftX = i3471[13]
  i3470.uvTopLeftY = i3471[14]
  i3470.uvTopRightX = i3471[15]
  i3470.uvTopRightY = i3471[16]
  return i3470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3473 = data
  i3472.name = i3473[0]
  var i3475 = i3473[1]
  var i3474 = []
  for(var i = 0; i < i3475.length; i += 1) {
    i3474.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3475[i + 0]) );
  }
  i3472.layers = i3474
  var i3477 = i3473[2]
  var i3476 = []
  for(var i = 0; i < i3477.length; i += 1) {
    i3476.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3477[i + 0]) );
  }
  i3472.parameters = i3476
  i3472.animationClips = i3473[3]
  i3472.avatarUnsupported = i3473[4]
  return i3472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3481 = data
  i3480.name = i3481[0]
  i3480.defaultWeight = i3481[1]
  i3480.blendingMode = i3481[2]
  i3480.avatarMask = i3481[3]
  i3480.syncedLayerIndex = i3481[4]
  i3480.syncedLayerAffectsTiming = !!i3481[5]
  i3480.syncedLayers = i3481[6]
  i3480.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3481[7], i3480.stateMachine)
  return i3480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3483 = data
  i3482.id = i3483[0]
  i3482.name = i3483[1]
  i3482.path = i3483[2]
  var i3485 = i3483[3]
  var i3484 = []
  for(var i = 0; i < i3485.length; i += 1) {
    i3484.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3485[i + 0]) );
  }
  i3482.states = i3484
  var i3487 = i3483[4]
  var i3486 = []
  for(var i = 0; i < i3487.length; i += 1) {
    i3486.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3487[i + 0]) );
  }
  i3482.machines = i3486
  var i3489 = i3483[5]
  var i3488 = []
  for(var i = 0; i < i3489.length; i += 1) {
    i3488.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3489[i + 0]) );
  }
  i3482.entryStateTransitions = i3488
  var i3491 = i3483[6]
  var i3490 = []
  for(var i = 0; i < i3491.length; i += 1) {
    i3490.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3491[i + 0]) );
  }
  i3482.exitStateTransitions = i3490
  var i3493 = i3483[7]
  var i3492 = []
  for(var i = 0; i < i3493.length; i += 1) {
    i3492.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3493[i + 0]) );
  }
  i3482.anyStateTransitions = i3492
  i3482.defaultStateId = i3483[8]
  return i3482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3497 = data
  i3496.id = i3497[0]
  i3496.name = i3497[1]
  i3496.cycleOffset = i3497[2]
  i3496.cycleOffsetParameter = i3497[3]
  i3496.cycleOffsetParameterActive = !!i3497[4]
  i3496.mirror = !!i3497[5]
  i3496.mirrorParameter = i3497[6]
  i3496.mirrorParameterActive = !!i3497[7]
  i3496.motionId = i3497[8]
  i3496.nameHash = i3497[9]
  i3496.fullPathHash = i3497[10]
  i3496.speed = i3497[11]
  i3496.speedParameter = i3497[12]
  i3496.speedParameterActive = !!i3497[13]
  i3496.tag = i3497[14]
  i3496.tagHash = i3497[15]
  i3496.writeDefaultValues = !!i3497[16]
  var i3499 = i3497[17]
  var i3498 = []
  for(var i = 0; i < i3499.length; i += 2) {
  request.r(i3499[i + 0], i3499[i + 1], 2, i3498, '')
  }
  i3496.behaviours = i3498
  var i3501 = i3497[18]
  var i3500 = []
  for(var i = 0; i < i3501.length; i += 1) {
    i3500.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3501[i + 0]) );
  }
  i3496.transitions = i3500
  return i3496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3507 = data
  i3506.fullPath = i3507[0]
  i3506.canTransitionToSelf = !!i3507[1]
  i3506.duration = i3507[2]
  i3506.exitTime = i3507[3]
  i3506.hasExitTime = !!i3507[4]
  i3506.hasFixedDuration = !!i3507[5]
  i3506.interruptionSource = i3507[6]
  i3506.offset = i3507[7]
  i3506.orderedInterruption = !!i3507[8]
  i3506.destinationStateId = i3507[9]
  i3506.isExit = !!i3507[10]
  i3506.mute = !!i3507[11]
  i3506.solo = !!i3507[12]
  var i3509 = i3507[13]
  var i3508 = []
  for(var i = 0; i < i3509.length; i += 1) {
    i3508.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3509[i + 0]) );
  }
  i3506.conditions = i3508
  return i3506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3515 = data
  i3514.destinationStateId = i3515[0]
  i3514.isExit = !!i3515[1]
  i3514.mute = !!i3515[2]
  i3514.solo = !!i3515[3]
  var i3517 = i3515[4]
  var i3516 = []
  for(var i = 0; i < i3517.length; i += 1) {
    i3516.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3517[i + 0]) );
  }
  i3514.conditions = i3516
  return i3514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3521 = data
  i3520.mode = i3521[0]
  i3520.parameter = i3521[1]
  i3520.threshold = i3521[2]
  return i3520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3525 = data
  i3524.defaultBool = !!i3525[0]
  i3524.defaultFloat = i3525[1]
  i3524.defaultInt = i3525[2]
  i3524.name = i3525[3]
  i3524.nameHash = i3525[4]
  i3524.type = i3525[5]
  return i3524
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3526 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3527 = data
  i3526.useSafeMode = !!i3527[0]
  i3526.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3527[1], i3526.safeModeOptions)
  i3526.timeScale = i3527[2]
  i3526.unscaledTimeScale = i3527[3]
  i3526.useSmoothDeltaTime = !!i3527[4]
  i3526.maxSmoothUnscaledTime = i3527[5]
  i3526.rewindCallbackMode = i3527[6]
  i3526.showUnityEditorReport = !!i3527[7]
  i3526.logBehaviour = i3527[8]
  i3526.drawGizmos = !!i3527[9]
  i3526.defaultRecyclable = !!i3527[10]
  i3526.defaultAutoPlay = i3527[11]
  i3526.defaultUpdateType = i3527[12]
  i3526.defaultTimeScaleIndependent = !!i3527[13]
  i3526.defaultEaseType = i3527[14]
  i3526.defaultEaseOvershootOrAmplitude = i3527[15]
  i3526.defaultEasePeriod = i3527[16]
  i3526.defaultAutoKill = !!i3527[17]
  i3526.defaultLoopType = i3527[18]
  i3526.debugMode = !!i3527[19]
  i3526.debugStoreTargetId = !!i3527[20]
  i3526.showPreviewPanel = !!i3527[21]
  i3526.storeSettingsLocation = i3527[22]
  i3526.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3527[23], i3526.modules)
  i3526.createASMDEF = !!i3527[24]
  i3526.showPlayingTweens = !!i3527[25]
  i3526.showPausedTweens = !!i3527[26]
  return i3526
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3528 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3529 = data
  i3528.logBehaviour = i3529[0]
  i3528.nestedTweenFailureBehaviour = i3529[1]
  return i3528
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3530 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3531 = data
  i3530.showPanel = !!i3531[0]
  i3530.audioEnabled = !!i3531[1]
  i3530.physicsEnabled = !!i3531[2]
  i3530.physics2DEnabled = !!i3531[3]
  i3530.spriteEnabled = !!i3531[4]
  i3530.uiEnabled = !!i3531[5]
  i3530.textMeshProEnabled = !!i3531[6]
  i3530.tk2DEnabled = !!i3531[7]
  i3530.deAudioEnabled = !!i3531[8]
  i3530.deUnityExtendedEnabled = !!i3531[9]
  i3530.epoOutlineEnabled = !!i3531[10]
  return i3530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3533 = data
  var i3535 = i3533[0]
  var i3534 = []
  for(var i = 0; i < i3535.length; i += 1) {
    i3534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3535[i + 0]) );
  }
  i3532.files = i3534
  i3532.componentToPrefabIds = i3533[1]
  return i3532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3539 = data
  i3538.path = i3539[0]
  request.r(i3539[1], i3539[2], 0, i3538, 'unityObject')
  return i3538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3541 = data
  var i3543 = i3541[0]
  var i3542 = []
  for(var i = 0; i < i3543.length; i += 1) {
    i3542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3543[i + 0]) );
  }
  i3540.scriptsExecutionOrder = i3542
  var i3545 = i3541[1]
  var i3544 = []
  for(var i = 0; i < i3545.length; i += 1) {
    i3544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3545[i + 0]) );
  }
  i3540.sortingLayers = i3544
  var i3547 = i3541[2]
  var i3546 = []
  for(var i = 0; i < i3547.length; i += 1) {
    i3546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3547[i + 0]) );
  }
  i3540.cullingLayers = i3546
  i3540.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3541[3], i3540.timeSettings)
  i3540.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3541[4], i3540.physicsSettings)
  i3540.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3541[5], i3540.physics2DSettings)
  i3540.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3541[6], i3540.qualitySettings)
  i3540.enableRealtimeShadows = !!i3541[7]
  i3540.enableAutoInstancing = !!i3541[8]
  i3540.enableStaticBatching = !!i3541[9]
  i3540.enableDynamicBatching = !!i3541[10]
  i3540.usePreservativeDynamicBatching = !!i3541[11]
  i3540.lightmapEncodingQuality = i3541[12]
  i3540.desiredColorSpace = i3541[13]
  var i3549 = i3541[14]
  var i3548 = []
  for(var i = 0; i < i3549.length; i += 1) {
    i3548.push( i3549[i + 0] );
  }
  i3540.allTags = i3548
  return i3540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3553 = data
  i3552.name = i3553[0]
  i3552.value = i3553[1]
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3557 = data
  i3556.id = i3557[0]
  i3556.name = i3557[1]
  i3556.value = i3557[2]
  return i3556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3561 = data
  i3560.id = i3561[0]
  i3560.name = i3561[1]
  return i3560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3563 = data
  i3562.fixedDeltaTime = i3563[0]
  i3562.maximumDeltaTime = i3563[1]
  i3562.timeScale = i3563[2]
  i3562.maximumParticleTimestep = i3563[3]
  return i3562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3565 = data
  i3564.gravity = new pc.Vec3( i3565[0], i3565[1], i3565[2] )
  i3564.defaultSolverIterations = i3565[3]
  i3564.bounceThreshold = i3565[4]
  i3564.autoSyncTransforms = !!i3565[5]
  i3564.autoSimulation = !!i3565[6]
  var i3567 = i3565[7]
  var i3566 = []
  for(var i = 0; i < i3567.length; i += 1) {
    i3566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3567[i + 0]) );
  }
  i3564.collisionMatrix = i3566
  return i3564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3571 = data
  i3570.enabled = !!i3571[0]
  i3570.layerId = i3571[1]
  i3570.otherLayerId = i3571[2]
  return i3570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3573 = data
  request.r(i3573[0], i3573[1], 0, i3572, 'material')
  i3572.gravity = new pc.Vec2( i3573[2], i3573[3] )
  i3572.positionIterations = i3573[4]
  i3572.velocityIterations = i3573[5]
  i3572.velocityThreshold = i3573[6]
  i3572.maxLinearCorrection = i3573[7]
  i3572.maxAngularCorrection = i3573[8]
  i3572.maxTranslationSpeed = i3573[9]
  i3572.maxRotationSpeed = i3573[10]
  i3572.baumgarteScale = i3573[11]
  i3572.baumgarteTOIScale = i3573[12]
  i3572.timeToSleep = i3573[13]
  i3572.linearSleepTolerance = i3573[14]
  i3572.angularSleepTolerance = i3573[15]
  i3572.defaultContactOffset = i3573[16]
  i3572.autoSimulation = !!i3573[17]
  i3572.queriesHitTriggers = !!i3573[18]
  i3572.queriesStartInColliders = !!i3573[19]
  i3572.callbacksOnDisable = !!i3573[20]
  i3572.reuseCollisionCallbacks = !!i3573[21]
  i3572.autoSyncTransforms = !!i3573[22]
  var i3575 = i3573[23]
  var i3574 = []
  for(var i = 0; i < i3575.length; i += 1) {
    i3574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3575[i + 0]) );
  }
  i3572.collisionMatrix = i3574
  return i3572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3579 = data
  i3578.enabled = !!i3579[0]
  i3578.layerId = i3579[1]
  i3578.otherLayerId = i3579[2]
  return i3578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3581 = data
  var i3583 = i3581[0]
  var i3582 = []
  for(var i = 0; i < i3583.length; i += 1) {
    i3582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3583[i + 0]) );
  }
  i3580.qualityLevels = i3582
  var i3585 = i3581[1]
  var i3584 = []
  for(var i = 0; i < i3585.length; i += 1) {
    i3584.push( i3585[i + 0] );
  }
  i3580.names = i3584
  i3580.shadows = i3581[2]
  i3580.anisotropicFiltering = i3581[3]
  i3580.antiAliasing = i3581[4]
  i3580.lodBias = i3581[5]
  i3580.shadowCascades = i3581[6]
  i3580.shadowDistance = i3581[7]
  i3580.shadowmaskMode = i3581[8]
  i3580.shadowProjection = i3581[9]
  i3580.shadowResolution = i3581[10]
  i3580.softParticles = !!i3581[11]
  i3580.softVegetation = !!i3581[12]
  i3580.activeColorSpace = i3581[13]
  i3580.desiredColorSpace = i3581[14]
  i3580.masterTextureLimit = i3581[15]
  i3580.maxQueuedFrames = i3581[16]
  i3580.particleRaycastBudget = i3581[17]
  i3580.pixelLightCount = i3581[18]
  i3580.realtimeReflectionProbes = !!i3581[19]
  i3580.shadowCascade2Split = i3581[20]
  i3580.shadowCascade4Split = new pc.Vec3( i3581[21], i3581[22], i3581[23] )
  i3580.streamingMipmapsActive = !!i3581[24]
  i3580.vSyncCount = i3581[25]
  i3580.asyncUploadBufferSize = i3581[26]
  i3580.asyncUploadTimeSlice = i3581[27]
  i3580.billboardsFaceCameraPosition = !!i3581[28]
  i3580.shadowNearPlaneOffset = i3581[29]
  i3580.streamingMipmapsMemoryBudget = i3581[30]
  i3580.maximumLODLevel = i3581[31]
  i3580.streamingMipmapsAddAllCameras = !!i3581[32]
  i3580.streamingMipmapsMaxLevelReduction = i3581[33]
  i3580.streamingMipmapsRenderersPerFrame = i3581[34]
  i3580.resolutionScalingFixedDPIFactor = i3581[35]
  i3580.streamingMipmapsMaxFileIORequests = i3581[36]
  i3580.currentQualityLevel = i3581[37]
  return i3580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i3588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i3589 = data
  var i3591 = i3589[0]
  var i3590 = []
  for(var i = 0; i < i3591.length; i += 1) {
    i3590.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i3591[i + 0]) );
  }
  i3588.groups = i3590
  var i3593 = i3589[1]
  var i3592 = []
  for(var i = 0; i < i3593.length; i += 1) {
    i3592.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i3593[i + 0]) );
  }
  i3588.snapshots = i3592
  return i3588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i3596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i3597 = data
  i3596.id = i3597[0]
  i3596.childGroupIds = i3597[1]
  i3596.name = i3597[2]
  return i3596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i3600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i3601 = data
  i3600.id = i3601[0]
  var i3603 = i3601[1]
  var i3602 = []
  for(var i = 0; i < i3603.length; i += 1) {
    i3602.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i3603[i + 0]) );
  }
  i3600.parameters = i3602
  return i3600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i3606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i3607 = data
  i3606.name = i3607[0]
  i3606.value = i3607[1]
  return i3606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3611 = data
  i3610.weight = i3611[0]
  i3610.vertices = i3611[1]
  i3610.normals = i3611[2]
  i3610.tangents = i3611[3]
  return i3610
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[71],"72":[40],"73":[74],"75":[74],"76":[74],"77":[74],"78":[74],"79":[74],"80":[74],"81":[33],"82":[33],"83":[33],"84":[33],"85":[33],"86":[33],"87":[33],"88":[33],"89":[33],"90":[33],"91":[33],"92":[33],"93":[33],"94":[40],"95":[96],"97":[98],"99":[98],"51":[45],"100":[101],"102":[12],"103":[27],"104":[12],"105":[106],"107":[106],"108":[38],"109":[27],"110":[12],"34":[12],"111":[45],"112":[45],"54":[51],"46":[55,45],"113":[45],"53":[51],"114":[45],"115":[45],"116":[45],"117":[45],"118":[45],"119":[45],"120":[45],"121":[45],"122":[45],"123":[55,45],"124":[45],"125":[45],"126":[45],"127":[45],"47":[55,45],"128":[45],"129":[59],"130":[59],"60":[59],"131":[59],"132":[40],"133":[40]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level2_Shoe_Playable","BasicDrag","BD_CameraFollow","UnityEngine.GameObject","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.AudioClip","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","PlayParticlesOnCollision","UnityEngine.CircleCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.PolygonCollider2D","UnityEngine.Animator","UnityEngine.BoxCollider2D","BD_Progress","BD_Clamp","BD_ToolRotate","BD_Audio","UnityEditor.Animations.AnimatorController","UnityEngine.Rigidbody2D","UnityEngine.U2D.Animation.SpriteSkin","BD_SpriteChange","InteractableBones","ActionOnTap","DG.Tweening.DOTweenAnimation","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "5.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "25Aug2026_Lvl_2_3_Step1to5";

Deserializers.lunaAppID = "42211";

Deserializers.projectId = "0ba141233dac4ae439f0736e4efac688";

Deserializers.packagesInfo = "com.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1704";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4370";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "False";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "HMBL.";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.hmbl.perfect.makeover.fashion.asmr";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "9f0e5a65-3e06-4885-89a0-c08f2a57c01f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

