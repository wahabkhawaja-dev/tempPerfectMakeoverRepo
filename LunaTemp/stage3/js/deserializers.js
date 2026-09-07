var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3210 = root || request.c( 'UnityEngine.JointSpring' )
  var i3211 = data
  i3210.spring = i3211[0]
  i3210.damper = i3211[1]
  i3210.targetPosition = i3211[2]
  return i3210
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3212 = root || request.c( 'UnityEngine.JointMotor' )
  var i3213 = data
  i3212.m_TargetVelocity = i3213[0]
  i3212.m_Force = i3213[1]
  i3212.m_FreeSpin = i3213[2]
  return i3212
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3214 = root || request.c( 'UnityEngine.JointLimits' )
  var i3215 = data
  i3214.m_Min = i3215[0]
  i3214.m_Max = i3215[1]
  i3214.m_Bounciness = i3215[2]
  i3214.m_BounceMinVelocity = i3215[3]
  i3214.m_ContactDistance = i3215[4]
  i3214.minBounce = i3215[5]
  i3214.maxBounce = i3215[6]
  return i3214
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3216 = root || request.c( 'UnityEngine.JointDrive' )
  var i3217 = data
  i3216.m_PositionSpring = i3217[0]
  i3216.m_PositionDamper = i3217[1]
  i3216.m_MaximumForce = i3217[2]
  i3216.m_UseAcceleration = i3217[3]
  return i3216
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3218 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3219 = data
  i3218.m_Spring = i3219[0]
  i3218.m_Damper = i3219[1]
  return i3218
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3220 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3221 = data
  i3220.m_Limit = i3221[0]
  i3220.m_Bounciness = i3221[1]
  i3220.m_ContactDistance = i3221[2]
  return i3220
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3222 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3223 = data
  i3222.m_ExtremumSlip = i3223[0]
  i3222.m_ExtremumValue = i3223[1]
  i3222.m_AsymptoteSlip = i3223[2]
  i3222.m_AsymptoteValue = i3223[3]
  i3222.m_Stiffness = i3223[4]
  return i3222
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3224 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3225 = data
  i3224.m_LowerAngle = i3225[0]
  i3224.m_UpperAngle = i3225[1]
  return i3224
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3226 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3227 = data
  i3226.m_MotorSpeed = i3227[0]
  i3226.m_MaximumMotorTorque = i3227[1]
  return i3226
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3228 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3229 = data
  i3228.m_DampingRatio = i3229[0]
  i3228.m_Frequency = i3229[1]
  i3228.m_Angle = i3229[2]
  return i3228
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3230 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3231 = data
  i3230.m_LowerTranslation = i3231[0]
  i3230.m_UpperTranslation = i3231[1]
  return i3230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3232 = root || new pc.UnityMaterial()
  var i3233 = data
  i3232.name = i3233[0]
  request.r(i3233[1], i3233[2], 0, i3232, 'shader')
  i3232.renderQueue = i3233[3]
  i3232.enableInstancing = !!i3233[4]
  var i3235 = i3233[5]
  var i3234 = []
  for(var i = 0; i < i3235.length; i += 1) {
    i3234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3235[i + 0]) );
  }
  i3232.floatParameters = i3234
  var i3237 = i3233[6]
  var i3236 = []
  for(var i = 0; i < i3237.length; i += 1) {
    i3236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3237[i + 0]) );
  }
  i3232.colorParameters = i3236
  var i3239 = i3233[7]
  var i3238 = []
  for(var i = 0; i < i3239.length; i += 1) {
    i3238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3239[i + 0]) );
  }
  i3232.vectorParameters = i3238
  var i3241 = i3233[8]
  var i3240 = []
  for(var i = 0; i < i3241.length; i += 1) {
    i3240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3241[i + 0]) );
  }
  i3232.textureParameters = i3240
  var i3243 = i3233[9]
  var i3242 = []
  for(var i = 0; i < i3243.length; i += 1) {
    i3242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3243[i + 0]) );
  }
  i3232.materialFlags = i3242
  return i3232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3247 = data
  i3246.name = i3247[0]
  i3246.value = i3247[1]
  return i3246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3251 = data
  i3250.name = i3251[0]
  i3250.value = new pc.Color(i3251[1], i3251[2], i3251[3], i3251[4])
  return i3250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3255 = data
  i3254.name = i3255[0]
  i3254.value = new pc.Vec4( i3255[1], i3255[2], i3255[3], i3255[4] )
  return i3254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3259 = data
  i3258.name = i3259[0]
  request.r(i3259[1], i3259[2], 0, i3258, 'value')
  return i3258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3263 = data
  i3262.name = i3263[0]
  i3262.enabled = !!i3263[1]
  return i3262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3265 = data
  i3264.name = i3265[0]
  i3264.width = i3265[1]
  i3264.height = i3265[2]
  i3264.mipmapCount = i3265[3]
  i3264.anisoLevel = i3265[4]
  i3264.filterMode = i3265[5]
  i3264.hdr = !!i3265[6]
  i3264.format = i3265[7]
  i3264.wrapMode = i3265[8]
  i3264.alphaIsTransparency = !!i3265[9]
  i3264.alphaSource = i3265[10]
  i3264.graphicsFormat = i3265[11]
  i3264.sRGBTexture = !!i3265[12]
  i3264.desiredColorSpace = i3265[13]
  i3264.wrapU = i3265[14]
  i3264.wrapV = i3265[15]
  return i3264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3267 = data
  i3266.name = i3267[0]
  i3266.halfPrecision = !!i3267[1]
  i3266.useSimplification = !!i3267[2]
  i3266.useUInt32IndexFormat = !!i3267[3]
  i3266.vertexCount = i3267[4]
  i3266.aabb = i3267[5]
  var i3269 = i3267[6]
  var i3268 = []
  for(var i = 0; i < i3269.length; i += 1) {
    i3268.push( !!i3269[i + 0] );
  }
  i3266.streams = i3268
  i3266.vertices = i3267[7]
  var i3271 = i3267[8]
  var i3270 = []
  for(var i = 0; i < i3271.length; i += 1) {
    i3270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3271[i + 0]) );
  }
  i3266.subMeshes = i3270
  var i3273 = i3267[9]
  var i3272 = []
  for(var i = 0; i < i3273.length; i += 16) {
    i3272.push( new pc.Mat4().setData(i3273[i + 0], i3273[i + 1], i3273[i + 2], i3273[i + 3],  i3273[i + 4], i3273[i + 5], i3273[i + 6], i3273[i + 7],  i3273[i + 8], i3273[i + 9], i3273[i + 10], i3273[i + 11],  i3273[i + 12], i3273[i + 13], i3273[i + 14], i3273[i + 15]) );
  }
  i3266.bindposes = i3272
  var i3275 = i3267[10]
  var i3274 = []
  for(var i = 0; i < i3275.length; i += 1) {
    i3274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3275[i + 0]) );
  }
  i3266.blendShapes = i3274
  return i3266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3281 = data
  i3280.triangles = i3281[0]
  return i3280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3287 = data
  i3286.name = i3287[0]
  var i3289 = i3287[1]
  var i3288 = []
  for(var i = 0; i < i3289.length; i += 1) {
    i3288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3289[i + 0]) );
  }
  i3286.frames = i3288
  return i3286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3291 = data
  i3290.position = new pc.Vec3( i3291[0], i3291[1], i3291[2] )
  i3290.scale = new pc.Vec3( i3291[3], i3291[4], i3291[5] )
  i3290.rotation = new pc.Quat(i3291[6], i3291[7], i3291[8], i3291[9])
  return i3290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3293 = data
  i3292.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3293[0], i3292.main)
  i3292.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3293[1], i3292.colorBySpeed)
  i3292.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3293[2], i3292.colorOverLifetime)
  i3292.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3293[3], i3292.emission)
  i3292.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3293[4], i3292.rotationBySpeed)
  i3292.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3293[5], i3292.rotationOverLifetime)
  i3292.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3293[6], i3292.shape)
  i3292.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3293[7], i3292.sizeBySpeed)
  i3292.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3293[8], i3292.sizeOverLifetime)
  i3292.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3293[9], i3292.textureSheetAnimation)
  i3292.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3293[10], i3292.velocityOverLifetime)
  i3292.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3293[11], i3292.noise)
  i3292.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3293[12], i3292.inheritVelocity)
  i3292.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3293[13], i3292.forceOverLifetime)
  i3292.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3293[14], i3292.limitVelocityOverLifetime)
  i3292.useAutoRandomSeed = !!i3293[15]
  i3292.randomSeed = i3293[16]
  return i3292
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3294 = root || new pc.ParticleSystemMain()
  var i3295 = data
  i3294.duration = i3295[0]
  i3294.loop = !!i3295[1]
  i3294.prewarm = !!i3295[2]
  i3294.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3295[3], i3294.startDelay)
  i3294.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3295[4], i3294.startLifetime)
  i3294.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3295[5], i3294.startSpeed)
  i3294.startSize3D = !!i3295[6]
  i3294.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3295[7], i3294.startSizeX)
  i3294.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3295[8], i3294.startSizeY)
  i3294.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3295[9], i3294.startSizeZ)
  i3294.startRotation3D = !!i3295[10]
  i3294.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3295[11], i3294.startRotationX)
  i3294.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3295[12], i3294.startRotationY)
  i3294.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3295[13], i3294.startRotationZ)
  i3294.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3295[14], i3294.startColor)
  i3294.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3295[15], i3294.gravityModifier)
  i3294.simulationSpace = i3295[16]
  request.r(i3295[17], i3295[18], 0, i3294, 'customSimulationSpace')
  i3294.simulationSpeed = i3295[19]
  i3294.useUnscaledTime = !!i3295[20]
  i3294.scalingMode = i3295[21]
  i3294.playOnAwake = !!i3295[22]
  i3294.maxParticles = i3295[23]
  i3294.emitterVelocityMode = i3295[24]
  i3294.stopAction = i3295[25]
  return i3294
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3296 = root || new pc.MinMaxCurve()
  var i3297 = data
  i3296.mode = i3297[0]
  i3296.curveMin = new pc.AnimationCurve( { keys_flow: i3297[1] } )
  i3296.curveMax = new pc.AnimationCurve( { keys_flow: i3297[2] } )
  i3296.curveMultiplier = i3297[3]
  i3296.constantMin = i3297[4]
  i3296.constantMax = i3297[5]
  return i3296
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3298 = root || new pc.MinMaxGradient()
  var i3299 = data
  i3298.mode = i3299[0]
  i3298.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3299[1], i3298.gradientMin)
  i3298.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3299[2], i3298.gradientMax)
  i3298.colorMin = new pc.Color(i3299[3], i3299[4], i3299[5], i3299[6])
  i3298.colorMax = new pc.Color(i3299[7], i3299[8], i3299[9], i3299[10])
  return i3298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3301 = data
  i3300.mode = i3301[0]
  var i3303 = i3301[1]
  var i3302 = []
  for(var i = 0; i < i3303.length; i += 1) {
    i3302.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3303[i + 0]) );
  }
  i3300.colorKeys = i3302
  var i3305 = i3301[2]
  var i3304 = []
  for(var i = 0; i < i3305.length; i += 1) {
    i3304.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3305[i + 0]) );
  }
  i3300.alphaKeys = i3304
  return i3300
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3306 = root || new pc.ParticleSystemColorBySpeed()
  var i3307 = data
  i3306.enabled = !!i3307[0]
  i3306.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3307[1], i3306.color)
  i3306.range = new pc.Vec2( i3307[2], i3307[3] )
  return i3306
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3311 = data
  i3310.color = new pc.Color(i3311[0], i3311[1], i3311[2], i3311[3])
  i3310.time = i3311[4]
  return i3310
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3315 = data
  i3314.alpha = i3315[0]
  i3314.time = i3315[1]
  return i3314
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3316 = root || new pc.ParticleSystemColorOverLifetime()
  var i3317 = data
  i3316.enabled = !!i3317[0]
  i3316.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3317[1], i3316.color)
  return i3316
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3318 = root || new pc.ParticleSystemEmitter()
  var i3319 = data
  i3318.enabled = !!i3319[0]
  i3318.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[1], i3318.rateOverTime)
  i3318.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[2], i3318.rateOverDistance)
  var i3321 = i3319[3]
  var i3320 = []
  for(var i = 0; i < i3321.length; i += 1) {
    i3320.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3321[i + 0]) );
  }
  i3318.bursts = i3320
  return i3318
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3324 = root || new pc.ParticleSystemBurst()
  var i3325 = data
  i3324.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[0], i3324.count)
  i3324.cycleCount = i3325[1]
  i3324.minCount = i3325[2]
  i3324.maxCount = i3325[3]
  i3324.repeatInterval = i3325[4]
  i3324.time = i3325[5]
  return i3324
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3326 = root || new pc.ParticleSystemRotationBySpeed()
  var i3327 = data
  i3326.enabled = !!i3327[0]
  i3326.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3327[1], i3326.x)
  i3326.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3327[2], i3326.y)
  i3326.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3327[3], i3326.z)
  i3326.separateAxes = !!i3327[4]
  i3326.range = new pc.Vec2( i3327[5], i3327[6] )
  return i3326
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3328 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3329 = data
  i3328.enabled = !!i3329[0]
  i3328.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3329[1], i3328.x)
  i3328.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3329[2], i3328.y)
  i3328.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3329[3], i3328.z)
  i3328.separateAxes = !!i3329[4]
  return i3328
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3330 = root || new pc.ParticleSystemShape()
  var i3331 = data
  i3330.enabled = !!i3331[0]
  i3330.shapeType = i3331[1]
  i3330.randomDirectionAmount = i3331[2]
  i3330.sphericalDirectionAmount = i3331[3]
  i3330.randomPositionAmount = i3331[4]
  i3330.alignToDirection = !!i3331[5]
  i3330.radius = i3331[6]
  i3330.radiusMode = i3331[7]
  i3330.radiusSpread = i3331[8]
  i3330.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3331[9], i3330.radiusSpeed)
  i3330.radiusThickness = i3331[10]
  i3330.angle = i3331[11]
  i3330.length = i3331[12]
  i3330.boxThickness = new pc.Vec3( i3331[13], i3331[14], i3331[15] )
  i3330.meshShapeType = i3331[16]
  request.r(i3331[17], i3331[18], 0, i3330, 'mesh')
  request.r(i3331[19], i3331[20], 0, i3330, 'meshRenderer')
  request.r(i3331[21], i3331[22], 0, i3330, 'skinnedMeshRenderer')
  i3330.useMeshMaterialIndex = !!i3331[23]
  i3330.meshMaterialIndex = i3331[24]
  i3330.useMeshColors = !!i3331[25]
  i3330.normalOffset = i3331[26]
  i3330.arc = i3331[27]
  i3330.arcMode = i3331[28]
  i3330.arcSpread = i3331[29]
  i3330.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3331[30], i3330.arcSpeed)
  i3330.donutRadius = i3331[31]
  i3330.position = new pc.Vec3( i3331[32], i3331[33], i3331[34] )
  i3330.rotation = new pc.Vec3( i3331[35], i3331[36], i3331[37] )
  i3330.scale = new pc.Vec3( i3331[38], i3331[39], i3331[40] )
  return i3330
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3332 = root || new pc.ParticleSystemSizeBySpeed()
  var i3333 = data
  i3332.enabled = !!i3333[0]
  i3332.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3333[1], i3332.x)
  i3332.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3333[2], i3332.y)
  i3332.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3333[3], i3332.z)
  i3332.separateAxes = !!i3333[4]
  i3332.range = new pc.Vec2( i3333[5], i3333[6] )
  return i3332
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3334 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3335 = data
  i3334.enabled = !!i3335[0]
  i3334.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3335[1], i3334.x)
  i3334.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3335[2], i3334.y)
  i3334.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3335[3], i3334.z)
  i3334.separateAxes = !!i3335[4]
  return i3334
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3336 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3337 = data
  i3336.enabled = !!i3337[0]
  i3336.mode = i3337[1]
  i3336.animation = i3337[2]
  i3336.numTilesX = i3337[3]
  i3336.numTilesY = i3337[4]
  i3336.useRandomRow = !!i3337[5]
  i3336.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3337[6], i3336.frameOverTime)
  i3336.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3337[7], i3336.startFrame)
  i3336.cycleCount = i3337[8]
  i3336.rowIndex = i3337[9]
  i3336.flipU = i3337[10]
  i3336.flipV = i3337[11]
  i3336.spriteCount = i3337[12]
  var i3339 = i3337[13]
  var i3338 = []
  for(var i = 0; i < i3339.length; i += 2) {
  request.r(i3339[i + 0], i3339[i + 1], 2, i3338, '')
  }
  i3336.sprites = i3338
  return i3336
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3342 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3343 = data
  i3342.enabled = !!i3343[0]
  i3342.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3343[1], i3342.x)
  i3342.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3343[2], i3342.y)
  i3342.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3343[3], i3342.z)
  i3342.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3343[4], i3342.radial)
  i3342.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3343[5], i3342.speedModifier)
  i3342.space = i3343[6]
  i3342.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3343[7], i3342.orbitalX)
  i3342.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3343[8], i3342.orbitalY)
  i3342.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3343[9], i3342.orbitalZ)
  i3342.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3343[10], i3342.orbitalOffsetX)
  i3342.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3343[11], i3342.orbitalOffsetY)
  i3342.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3343[12], i3342.orbitalOffsetZ)
  return i3342
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3344 = root || new pc.ParticleSystemNoise()
  var i3345 = data
  i3344.enabled = !!i3345[0]
  i3344.separateAxes = !!i3345[1]
  i3344.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3345[2], i3344.strengthX)
  i3344.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3345[3], i3344.strengthY)
  i3344.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3345[4], i3344.strengthZ)
  i3344.frequency = i3345[5]
  i3344.damping = !!i3345[6]
  i3344.octaveCount = i3345[7]
  i3344.octaveMultiplier = i3345[8]
  i3344.octaveScale = i3345[9]
  i3344.quality = i3345[10]
  i3344.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3345[11], i3344.scrollSpeed)
  i3344.scrollSpeedMultiplier = i3345[12]
  i3344.remapEnabled = !!i3345[13]
  i3344.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3345[14], i3344.remapX)
  i3344.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3345[15], i3344.remapY)
  i3344.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3345[16], i3344.remapZ)
  i3344.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3345[17], i3344.positionAmount)
  i3344.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3345[18], i3344.rotationAmount)
  i3344.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3345[19], i3344.sizeAmount)
  return i3344
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3346 = root || new pc.ParticleSystemInheritVelocity()
  var i3347 = data
  i3346.enabled = !!i3347[0]
  i3346.mode = i3347[1]
  i3346.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3347[2], i3346.curve)
  return i3346
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3348 = root || new pc.ParticleSystemForceOverLifetime()
  var i3349 = data
  i3348.enabled = !!i3349[0]
  i3348.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3349[1], i3348.x)
  i3348.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3349[2], i3348.y)
  i3348.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3349[3], i3348.z)
  i3348.space = i3349[4]
  i3348.randomized = !!i3349[5]
  return i3348
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3350 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3351 = data
  i3350.enabled = !!i3351[0]
  i3350.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[1], i3350.limit)
  i3350.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[2], i3350.limitX)
  i3350.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[3], i3350.limitY)
  i3350.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[4], i3350.limitZ)
  i3350.dampen = i3351[5]
  i3350.separateAxes = !!i3351[6]
  i3350.space = i3351[7]
  i3350.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[8], i3350.drag)
  i3350.multiplyDragByParticleSize = !!i3351[9]
  i3350.multiplyDragByParticleVelocity = !!i3351[10]
  return i3350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3353 = data
  request.r(i3353[0], i3353[1], 0, i3352, 'mesh')
  i3352.meshCount = i3353[2]
  i3352.activeVertexStreamsCount = i3353[3]
  i3352.alignment = i3353[4]
  i3352.renderMode = i3353[5]
  i3352.sortMode = i3353[6]
  i3352.lengthScale = i3353[7]
  i3352.velocityScale = i3353[8]
  i3352.cameraVelocityScale = i3353[9]
  i3352.normalDirection = i3353[10]
  i3352.sortingFudge = i3353[11]
  i3352.minParticleSize = i3353[12]
  i3352.maxParticleSize = i3353[13]
  i3352.pivot = new pc.Vec3( i3353[14], i3353[15], i3353[16] )
  request.r(i3353[17], i3353[18], 0, i3352, 'trailMaterial')
  i3352.applyActiveColorSpace = !!i3353[19]
  i3352.enabled = !!i3353[20]
  request.r(i3353[21], i3353[22], 0, i3352, 'sharedMaterial')
  var i3355 = i3353[23]
  var i3354 = []
  for(var i = 0; i < i3355.length; i += 2) {
  request.r(i3355[i + 0], i3355[i + 1], 2, i3354, '')
  }
  i3352.sharedMaterials = i3354
  i3352.receiveShadows = !!i3353[24]
  i3352.shadowCastingMode = i3353[25]
  i3352.sortingLayerID = i3353[26]
  i3352.sortingOrder = i3353[27]
  i3352.lightmapIndex = i3353[28]
  i3352.lightmapSceneIndex = i3353[29]
  i3352.lightmapScaleOffset = new pc.Vec4( i3353[30], i3353[31], i3353[32], i3353[33] )
  i3352.lightProbeUsage = i3353[34]
  i3352.reflectionProbeUsage = i3353[35]
  return i3352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3359 = data
  i3358.name = i3359[0]
  i3358.tagId = i3359[1]
  i3358.enabled = !!i3359[2]
  i3358.isStatic = !!i3359[3]
  i3358.layer = i3359[4]
  return i3358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3361 = data
  i3360.pivot = new pc.Vec2( i3361[0], i3361[1] )
  i3360.anchorMin = new pc.Vec2( i3361[2], i3361[3] )
  i3360.anchorMax = new pc.Vec2( i3361[4], i3361[5] )
  i3360.sizeDelta = new pc.Vec2( i3361[6], i3361[7] )
  i3360.anchoredPosition3D = new pc.Vec3( i3361[8], i3361[9], i3361[10] )
  i3360.rotation = new pc.Quat(i3361[11], i3361[12], i3361[13], i3361[14])
  i3360.scale = new pc.Vec3( i3361[15], i3361[16], i3361[17] )
  return i3360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3363 = data
  i3362.planeDistance = i3363[0]
  i3362.referencePixelsPerUnit = i3363[1]
  i3362.isFallbackOverlay = !!i3363[2]
  i3362.renderMode = i3363[3]
  i3362.renderOrder = i3363[4]
  i3362.sortingLayerName = i3363[5]
  i3362.sortingOrder = i3363[6]
  i3362.scaleFactor = i3363[7]
  request.r(i3363[8], i3363[9], 0, i3362, 'worldCamera')
  i3362.overrideSorting = !!i3363[10]
  i3362.pixelPerfect = !!i3363[11]
  i3362.targetDisplay = i3363[12]
  i3362.overridePixelPerfect = !!i3363[13]
  i3362.enabled = !!i3363[14]
  return i3362
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3364 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3365 = data
  i3364.m_UiScaleMode = i3365[0]
  i3364.m_ReferencePixelsPerUnit = i3365[1]
  i3364.m_ScaleFactor = i3365[2]
  i3364.m_ReferenceResolution = new pc.Vec2( i3365[3], i3365[4] )
  i3364.m_ScreenMatchMode = i3365[5]
  i3364.m_MatchWidthOrHeight = i3365[6]
  i3364.m_PhysicalUnit = i3365[7]
  i3364.m_FallbackScreenDPI = i3365[8]
  i3364.m_DefaultSpriteDPI = i3365[9]
  i3364.m_DynamicPixelsPerUnit = i3365[10]
  i3364.m_PresetInfoIsWorld = !!i3365[11]
  return i3364
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3366 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3367 = data
  i3366.m_IgnoreReversedGraphics = !!i3367[0]
  i3366.m_BlockingObjects = i3367[1]
  i3366.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3367[2] )
  return i3366
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3368 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3369 = data
  i3368.targetIsSelf = !!i3369[0]
  request.r(i3369[1], i3369[2], 0, i3368, 'targetGO')
  i3368.tweenTargetIsTargetGO = !!i3369[3]
  i3368.delay = i3369[4]
  i3368.duration = i3369[5]
  i3368.easeType = i3369[6]
  i3368.easeCurve = new pc.AnimationCurve( { keys_flow: i3369[7] } )
  i3368.loopType = i3369[8]
  i3368.loops = i3369[9]
  i3368.id = i3369[10]
  i3368.isRelative = !!i3369[11]
  i3368.isFrom = !!i3369[12]
  i3368.isIndependentUpdate = !!i3369[13]
  i3368.autoKill = !!i3369[14]
  i3368.autoGenerate = !!i3369[15]
  i3368.isActive = !!i3369[16]
  i3368.isValid = !!i3369[17]
  request.r(i3369[18], i3369[19], 0, i3368, 'target')
  i3368.animationType = i3369[20]
  i3368.targetType = i3369[21]
  i3368.forcedTargetType = i3369[22]
  i3368.autoPlay = !!i3369[23]
  i3368.useTargetAsV3 = !!i3369[24]
  i3368.endValueFloat = i3369[25]
  i3368.endValueV3 = new pc.Vec3( i3369[26], i3369[27], i3369[28] )
  i3368.endValueV2 = new pc.Vec2( i3369[29], i3369[30] )
  i3368.endValueColor = new pc.Color(i3369[31], i3369[32], i3369[33], i3369[34])
  i3368.endValueString = i3369[35]
  i3368.endValueRect = UnityEngine.Rect.MinMaxRect(i3369[36], i3369[37], i3369[38], i3369[39])
  request.r(i3369[40], i3369[41], 0, i3368, 'endValueTransform')
  i3368.optionalBool0 = !!i3369[42]
  i3368.optionalBool1 = !!i3369[43]
  i3368.optionalFloat0 = i3369[44]
  i3368.optionalInt0 = i3369[45]
  i3368.optionalRotationMode = i3369[46]
  i3368.optionalScrambleMode = i3369[47]
  i3368.optionalShakeRandomnessMode = i3369[48]
  i3368.optionalString = i3369[49]
  i3368.updateType = i3369[50]
  i3368.isSpeedBased = !!i3369[51]
  i3368.hasOnStart = !!i3369[52]
  i3368.hasOnPlay = !!i3369[53]
  i3368.hasOnUpdate = !!i3369[54]
  i3368.hasOnStepComplete = !!i3369[55]
  i3368.hasOnComplete = !!i3369[56]
  i3368.hasOnTweenCreated = !!i3369[57]
  i3368.hasOnRewind = !!i3369[58]
  i3368.onStart = request.d('UnityEngine.Events.UnityEvent', i3369[59], i3368.onStart)
  i3368.onPlay = request.d('UnityEngine.Events.UnityEvent', i3369[60], i3368.onPlay)
  i3368.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3369[61], i3368.onUpdate)
  i3368.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3369[62], i3368.onStepComplete)
  i3368.onComplete = request.d('UnityEngine.Events.UnityEvent', i3369[63], i3368.onComplete)
  i3368.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3369[64], i3368.onTweenCreated)
  i3368.onRewind = request.d('UnityEngine.Events.UnityEvent', i3369[65], i3368.onRewind)
  return i3368
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3370 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3371 = data
  i3370.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3371[0], i3370.m_PersistentCalls)
  return i3370
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3372 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3373 = data
  var i3375 = i3373[0]
  var i3374 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3375.length; i += 1) {
    i3374.add(request.d('UnityEngine.Events.PersistentCall', i3375[i + 0]));
  }
  i3372.m_Calls = i3374
  return i3372
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3378 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3379 = data
  request.r(i3379[0], i3379[1], 0, i3378, 'm_Target')
  i3378.m_TargetAssemblyTypeName = i3379[2]
  i3378.m_MethodName = i3379[3]
  i3378.m_Mode = i3379[4]
  i3378.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3379[5], i3378.m_Arguments)
  i3378.m_CallState = i3379[6]
  return i3378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3381 = data
  i3380.cullTransparentMesh = !!i3381[0]
  return i3380
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3382 = root || request.c( 'UnityEngine.UI.Image' )
  var i3383 = data
  request.r(i3383[0], i3383[1], 0, i3382, 'm_Sprite')
  i3382.m_Type = i3383[2]
  i3382.m_PreserveAspect = !!i3383[3]
  i3382.m_FillCenter = !!i3383[4]
  i3382.m_FillMethod = i3383[5]
  i3382.m_FillAmount = i3383[6]
  i3382.m_FillClockwise = !!i3383[7]
  i3382.m_FillOrigin = i3383[8]
  i3382.m_UseSpriteMesh = !!i3383[9]
  i3382.m_PixelsPerUnitMultiplier = i3383[10]
  request.r(i3383[11], i3383[12], 0, i3382, 'm_Material')
  i3382.m_Maskable = !!i3383[13]
  i3382.m_Color = new pc.Color(i3383[14], i3383[15], i3383[16], i3383[17])
  i3382.m_RaycastTarget = !!i3383[18]
  i3382.m_RaycastPadding = new pc.Vec4( i3383[19], i3383[20], i3383[21], i3383[22] )
  return i3382
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3384 = root || request.c( 'UnityEngine.UI.Text' )
  var i3385 = data
  i3384.m_FontData = request.d('UnityEngine.UI.FontData', i3385[0], i3384.m_FontData)
  i3384.m_Text = i3385[1]
  request.r(i3385[2], i3385[3], 0, i3384, 'm_Material')
  i3384.m_Maskable = !!i3385[4]
  i3384.m_Color = new pc.Color(i3385[5], i3385[6], i3385[7], i3385[8])
  i3384.m_RaycastTarget = !!i3385[9]
  i3384.m_RaycastPadding = new pc.Vec4( i3385[10], i3385[11], i3385[12], i3385[13] )
  return i3384
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3386 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3387 = data
  request.r(i3387[0], i3387[1], 0, i3386, 'm_Font')
  i3386.m_FontSize = i3387[2]
  i3386.m_FontStyle = i3387[3]
  i3386.m_BestFit = !!i3387[4]
  i3386.m_MinSize = i3387[5]
  i3386.m_MaxSize = i3387[6]
  i3386.m_Alignment = i3387[7]
  i3386.m_AlignByGeometry = !!i3387[8]
  i3386.m_RichText = !!i3387[9]
  i3386.m_HorizontalOverflow = i3387[10]
  i3386.m_VerticalOverflow = i3387[11]
  i3386.m_LineSpacing = i3387[12]
  return i3386
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3388 = root || request.c( 'UnityEngine.UI.Button' )
  var i3389 = data
  i3388.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3389[0], i3388.m_OnClick)
  i3388.m_Navigation = request.d('UnityEngine.UI.Navigation', i3389[1], i3388.m_Navigation)
  i3388.m_Transition = i3389[2]
  i3388.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3389[3], i3388.m_Colors)
  i3388.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3389[4], i3388.m_SpriteState)
  i3388.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3389[5], i3388.m_AnimationTriggers)
  i3388.m_Interactable = !!i3389[6]
  request.r(i3389[7], i3389[8], 0, i3388, 'm_TargetGraphic')
  return i3388
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3390 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3391 = data
  i3390.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3391[0], i3390.m_PersistentCalls)
  return i3390
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3392 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3393 = data
  request.r(i3393[0], i3393[1], 0, i3392, 'm_ObjectArgument')
  i3392.m_ObjectArgumentAssemblyTypeName = i3393[2]
  i3392.m_IntArgument = i3393[3]
  i3392.m_FloatArgument = i3393[4]
  i3392.m_StringArgument = i3393[5]
  i3392.m_BoolArgument = !!i3393[6]
  return i3392
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3394 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3395 = data
  i3394.m_Mode = i3395[0]
  i3394.m_WrapAround = !!i3395[1]
  request.r(i3395[2], i3395[3], 0, i3394, 'm_SelectOnUp')
  request.r(i3395[4], i3395[5], 0, i3394, 'm_SelectOnDown')
  request.r(i3395[6], i3395[7], 0, i3394, 'm_SelectOnLeft')
  request.r(i3395[8], i3395[9], 0, i3394, 'm_SelectOnRight')
  return i3394
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3396 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3397 = data
  i3396.m_NormalColor = new pc.Color(i3397[0], i3397[1], i3397[2], i3397[3])
  i3396.m_HighlightedColor = new pc.Color(i3397[4], i3397[5], i3397[6], i3397[7])
  i3396.m_PressedColor = new pc.Color(i3397[8], i3397[9], i3397[10], i3397[11])
  i3396.m_SelectedColor = new pc.Color(i3397[12], i3397[13], i3397[14], i3397[15])
  i3396.m_DisabledColor = new pc.Color(i3397[16], i3397[17], i3397[18], i3397[19])
  i3396.m_ColorMultiplier = i3397[20]
  i3396.m_FadeDuration = i3397[21]
  return i3396
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3398 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3399 = data
  request.r(i3399[0], i3399[1], 0, i3398, 'm_HighlightedSprite')
  request.r(i3399[2], i3399[3], 0, i3398, 'm_PressedSprite')
  request.r(i3399[4], i3399[5], 0, i3398, 'm_SelectedSprite')
  request.r(i3399[6], i3399[7], 0, i3398, 'm_DisabledSprite')
  return i3398
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3400 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3401 = data
  i3400.m_NormalTrigger = i3401[0]
  i3400.m_HighlightedTrigger = i3401[1]
  i3400.m_PressedTrigger = i3401[2]
  i3400.m_SelectedTrigger = i3401[3]
  i3400.m_DisabledTrigger = i3401[4]
  return i3400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3403 = data
  request.r(i3403[0], i3403[1], 0, i3402, 'animatorController')
  request.r(i3403[2], i3403[3], 0, i3402, 'avatar')
  i3402.updateMode = i3403[4]
  i3402.hasTransformHierarchy = !!i3403[5]
  i3402.applyRootMotion = !!i3403[6]
  var i3405 = i3403[7]
  var i3404 = []
  for(var i = 0; i < i3405.length; i += 2) {
  request.r(i3405[i + 0], i3405[i + 1], 2, i3404, '')
  }
  i3402.humanBones = i3404
  i3402.enabled = !!i3403[8]
  return i3402
}

Deserializers["Level1_Cloth_Playable_Step45"] = function (request, data, root) {
  var i3408 = root || request.c( 'Level1_Cloth_Playable_Step45' )
  var i3409 = data
  request.r(i3409[0], i3409[1], 0, i3408, 'WashingView')
  request.r(i3409[2], i3409[3], 0, i3408, 'WashingTools')
  request.r(i3409[4], i3409[5], 0, i3408, 'DressingView')
  request.r(i3409[6], i3409[7], 0, i3408, 'DressingTools')
  i3408.ZoomStep1 = request.d('ZoomPos', i3409[8], i3408.ZoomStep1)
  request.r(i3409[9], i3409[10], 0, i3408, 'ToolStep1')
  request.r(i3409[11], i3409[12], 0, i3408, 'Basket_Cloth')
  request.r(i3409[13], i3409[14], 0, i3408, 'clothInside')
  request.r(i3409[15], i3409[16], 0, i3408, 'clothRound')
  request.r(i3409[17], i3409[18], 0, i3408, 'machineDoor')
  request.r(i3409[19], i3409[20], 0, i3408, 'machineGlass')
  i3408.ZoomStep2 = request.d('ZoomPos', i3409[21], i3408.ZoomStep2)
  i3408.ZoomStep2b = request.d('ZoomPos', i3409[22], i3408.ZoomStep2b)
  request.r(i3409[23], i3409[24], 0, i3408, 'ToolStep2')
  request.r(i3409[25], i3409[26], 0, i3408, 'ToolStep2CamFollow')
  request.r(i3409[27], i3409[28], 0, i3408, 'drawerObj')
  request.r(i3409[29], i3409[30], 0, i3408, 'surfObj')
  request.r(i3409[31], i3409[32], 0, i3408, 'surfPackTop')
  request.r(i3409[33], i3409[34], 0, i3408, 'handStep2')
  request.r(i3409[35], i3409[36], 0, i3408, 'surfController')
  request.r(i3409[37], i3409[38], 0, i3408, 'clothsInside')
  request.r(i3409[39], i3409[40], 0, i3408, 'clothsInsideGlass')
  request.r(i3409[41], i3409[42], 0, i3408, 'clothsStaticClean')
  request.r(i3409[43], i3409[44], 0, i3408, 'wetCloths')
  request.r(i3409[45], i3409[46], 0, i3408, 'clothCleanInside')
  request.r(i3409[47], i3409[48], 0, i3408, 'clothCleanInsideAnim')
  request.r(i3409[49], i3409[50], 0, i3408, 'waterWave')
  request.r(i3409[51], i3409[52], 0, i3408, 'clothCleanInside2')
  request.r(i3409[53], i3409[54], 0, i3408, 'clothCleanInside2Cam')
  request.r(i3409[55], i3409[56], 0, i3408, 'clothBasketTarget')
  request.r(i3409[57], i3409[58], 0, i3408, 'clothBasketTarget2')
  request.r(i3409[59], i3409[60], 0, i3408, 'waterSplash_Vfx')
  request.r(i3409[61], i3409[62], 0, i3408, 'countDownTimerText')
  i3408.countDown = i3409[63]
  request.r(i3409[64], i3409[65], 0, i3408, 'machineTimer')
  request.r(i3409[66], i3409[67], 0, i3408, 'machineTimerRotater')
  request.r(i3409[68], i3409[69], 0, i3408, 'machineTimerIndication')
  request.r(i3409[70], i3409[71], 0, i3408, 'darazOpenSfx')
  request.r(i3409[72], i3409[73], 0, i3408, 'darazCloseSfx')
  request.r(i3409[74], i3409[75], 0, i3408, 'doorOpenSfx')
  request.r(i3409[76], i3409[77], 0, i3408, 'machineStartSfx')
  request.r(i3409[78], i3409[79], 0, i3408, 'machineFinishSfx')
  request.r(i3409[80], i3409[81], 0, i3408, 'waterDrainSfx')
  i3408.ZoomStep3a = request.d('ZoomPos', i3409[82], i3408.ZoomStep3a)
  request.r(i3409[83], i3409[84], 0, i3408, 'ToolStep3a')
  request.r(i3409[85], i3409[86], 0, i3408, 'ToolStep3aRend')
  request.r(i3409[87], i3409[88], 0, i3408, 'dressingBasket')
  request.r(i3409[89], i3409[90], 0, i3408, 'dummyFullParent')
  request.r(i3409[91], i3409[92], 0, i3408, 'DressParent')
  i3408.ZoomStep3 = request.d('ZoomPos', i3409[93], i3408.ZoomStep3)
  request.r(i3409[94], i3409[95], 0, i3408, 'ToolStep3')
  request.r(i3409[96], i3409[97], 0, i3408, 'tornPatch')
  request.r(i3409[98], i3409[99], 0, i3408, 'patchCompleted')
  request.r(i3409[100], i3409[101], 0, i3408, 'patchOutline')
  i3408.ZoomStep4 = request.d('ZoomPos', i3409[102], i3408.ZoomStep4)
  request.r(i3409[103], i3409[104], 0, i3408, 'ToolStep4')
  request.r(i3409[105], i3409[106], 0, i3408, 'camFollowStep4')
  request.r(i3409[107], i3409[108], 0, i3408, 'SteamerBottom')
  i3408.ZoomStep5 = request.d('ZoomPos', i3409[109], i3408.ZoomStep5)
  request.r(i3409[110], i3409[111], 0, i3408, 'ToolStep5')
  request.r(i3409[112], i3409[113], 0, i3408, 'ribbonFinalTarget')
  request.r(i3409[114], i3409[115], 0, i3408, 'ribbonFinal')
  request.r(i3409[116], i3409[117], 0, i3408, 'handIndication5')
  i3408.levelName = i3409[118]
  i3408.levelReward = i3409[119]
  request.r(i3409[120], i3409[121], 0, i3408, 'LevelIcon')
  request.r(i3409[122], i3409[123], 0, i3408, 'Level_BG')
  var i3411 = i3409[124]
  var i3410 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3411.length; i += 2) {
  request.r(i3411[i + 0], i3411[i + 1], 1, i3410, '')
  }
  i3408.ToolIcons = i3410
  var i3413 = i3409[125]
  var i3412 = []
  for(var i = 0; i < i3413.length; i += 2) {
  request.r(i3413[i + 0], i3413[i + 1], 2, i3412, '')
  }
  i3408.AllDrags = i3412
  var i3415 = i3409[126]
  var i3414 = []
  for(var i = 0; i < i3415.length; i += 2) {
  request.r(i3415[i + 0], i3415[i + 1], 2, i3414, '')
  }
  i3408.AllSources = i3414
  var i3417 = i3409[127]
  var i3416 = []
  for(var i = 0; i < i3417.length; i += 2) {
  request.r(i3417[i + 0], i3417[i + 1], 2, i3416, '')
  }
  i3408.AllScratches = i3416
  i3408.stepsDone = i3409[128]
  i3408.levelNo = i3409[129]
  i3408.partNo = i3409[130]
  request.r(i3409[131], i3409[132], 0, i3408, 'clothSfx')
  request.r(i3409[133], i3409[134], 0, i3408, 'doorCloseSfx')
  return i3408
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i3418 = root || request.c( 'ZoomPos' )
  var i3419 = data
  i3418.CameraPos = new pc.Vec3( i3419[0], i3419[1], i3419[2] )
  i3418.CameraFOV = i3419[3]
  return i3418
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i3428 = root || request.c( 'PlayableCTA' )
  var i3429 = data
  i3428.trigger = i3429[0]
  i3428.afterSeconds = i3429[1]
  i3428.afterTaps = i3429[2]
  request.r(i3429[3], i3429[4], 0, i3428, 'scratchProgress')
  i3428.scratchIndex = i3429[5]
  i3428.progressThreshold = i3429[6]
  request.r(i3429[7], i3429[8], 0, i3428, 'watchedTool')
  i3428.blockInputOnFire = !!i3429[9]
  i3428.refireOnEveryTap = !!i3429[10]
  i3428.refireDelay = i3429[11]
  i3428.showEndCard = !!i3429[12]
  request.r(i3429[13], i3429[14], 0, i3428, 'endCard')
  i3428.endCardDelay = i3429[15]
  i3428.showEndCardOnProgressTrigger = !!i3429[16]
  i3428.showEndCardOnToolAppearTrigger = !!i3429[17]
  i3428.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i3429[18], i3428.onCtaFired)
  i3428.logWhenFired = !!i3429[19]
  return i3428
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i3430 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i3431 = data
  request.r(i3431[0], i3431[1], 0, i3430, 'MainCamera')
  i3430.RenderType = i3431[2]
  request.r(i3431[3], i3431[4], 0, i3430, 'ScratchSurfaceSprite')
  i3430.ScratchSurfaceSpriteHasAlpha = !!i3431[5]
  i3430.MaskProgressCutOffValue = i3431[6]
  request.r(i3431[7], i3431[8], 0, i3430, 'EraseTexture')
  i3430.EraseTextureScale = new pc.Vec2( i3431[9], i3431[10] )
  i3430.InputEnabled = !!i3431[11]
  request.r(i3431[12], i3431[13], 0, i3430, 'Card')
  i3430.Mode = i3431[14]
  request.r(i3431[15], i3431[16], 0, i3430, 'Progress')
  request.r(i3431[17], i3431[18], 0, i3430, 'MeshCard')
  request.r(i3431[19], i3431[20], 0, i3430, 'SpriteCard')
  request.r(i3431[21], i3431[22], 0, i3430, 'ImageCard')
  request.r(i3431[23], i3431[24], 0, i3430, 'MaskShader')
  request.r(i3431[25], i3431[26], 0, i3430, 'BrushShader')
  request.r(i3431[27], i3431[28], 0, i3430, 'MaskProgressShader')
  request.r(i3431[29], i3431[30], 0, i3430, 'MaskProgressCutOffShader')
  return i3430
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i3432 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i3433 = data
  request.r(i3433[0], i3433[1], 0, i3432, 'MainCamera')
  request.r(i3433[2], i3433[3], 0, i3432, 'Surface')
  i3432.RenderTextureQuality = i3433[4]
  request.r(i3433[5], i3433[6], 0, i3432, 'Eraser')
  request.r(i3433[7], i3433[8], 0, i3432, 'Progress')
  request.r(i3433[9], i3433[10], 0, i3432, 'ScratchSurface')
  request.r(i3433[11], i3433[12], 0, i3432, 'RenderTexture')
  i3432.BrushScale = new pc.Vec2( i3433[13], i3433[14] )
  request.r(i3433[15], i3433[16], 0, i3432, 'ToolTip')
  i3432.InputEnabled = !!i3433[17]
  i3432.IsScratching = !!i3433[18]
  i3432.useChangingScale = !!i3433[19]
  i3432.useGivenBrushScale = !!i3433[20]
  i3432.canSpreadMask = !!i3433[21]
  i3432.shouldPaintHoles = !!i3433[22]
  i3432.canRotateTip = !!i3433[23]
  i3432._mode = i3433[24]
  return i3432
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i3434 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i3435 = data
  request.r(i3435[0], i3435[1], 0, i3434, 'Card')
  i3434.currentProgress = i3435[2]
  return i3434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3437 = data
  i3436.color = new pc.Color(i3437[0], i3437[1], i3437[2], i3437[3])
  request.r(i3437[4], i3437[5], 0, i3436, 'sprite')
  i3436.flipX = !!i3437[6]
  i3436.flipY = !!i3437[7]
  i3436.drawMode = i3437[8]
  i3436.size = new pc.Vec2( i3437[9], i3437[10] )
  i3436.tileMode = i3437[11]
  i3436.adaptiveModeThreshold = i3437[12]
  i3436.maskInteraction = i3437[13]
  i3436.spriteSortPoint = i3437[14]
  i3436.enabled = !!i3437[15]
  request.r(i3437[16], i3437[17], 0, i3436, 'sharedMaterial')
  var i3439 = i3437[18]
  var i3438 = []
  for(var i = 0; i < i3439.length; i += 2) {
  request.r(i3439[i + 0], i3439[i + 1], 2, i3438, '')
  }
  i3436.sharedMaterials = i3438
  i3436.receiveShadows = !!i3437[19]
  i3436.shadowCastingMode = i3437[20]
  i3436.sortingLayerID = i3437[21]
  i3436.sortingOrder = i3437[22]
  i3436.lightmapIndex = i3437[23]
  i3436.lightmapSceneIndex = i3437[24]
  i3436.lightmapScaleOffset = new pc.Vec4( i3437[25], i3437[26], i3437[27], i3437[28] )
  i3436.lightProbeUsage = i3437[29]
  i3436.reflectionProbeUsage = i3437[30]
  return i3436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i3440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i3441 = data
  var i3443 = i3441[0]
  var i3442 = []
  for(var i = 0; i < i3443.length; i += 3) {
    i3442.push( new pc.Vec3( i3443[i + 0], i3443[i + 1], i3443[i + 2] ) );
  }
  i3440.positions = i3442
  i3440.positionCount = i3441[1]
  i3440.time = i3441[2]
  i3440.startWidth = i3441[3]
  i3440.endWidth = i3441[4]
  i3440.widthMultiplier = i3441[5]
  i3440.autodestruct = !!i3441[6]
  i3440.emitting = !!i3441[7]
  i3440.numCornerVertices = i3441[8]
  i3440.numCapVertices = i3441[9]
  i3440.minVertexDistance = i3441[10]
  i3440.colorGradient = i3441[11] ? new pc.ColorGradient(i3441[11][0], i3441[11][1], i3441[11][2]) : null
  i3440.startColor = new pc.Color(i3441[12], i3441[13], i3441[14], i3441[15])
  i3440.endColor = new pc.Color(i3441[16], i3441[17], i3441[18], i3441[19])
  i3440.generateLightingData = !!i3441[20]
  i3440.textureMode = i3441[21]
  i3440.alignment = i3441[22]
  i3440.widthCurve = new pc.AnimationCurve( { keys_flow: i3441[23] } )
  i3440.enabled = !!i3441[24]
  request.r(i3441[25], i3441[26], 0, i3440, 'sharedMaterial')
  var i3445 = i3441[27]
  var i3444 = []
  for(var i = 0; i < i3445.length; i += 2) {
  request.r(i3445[i + 0], i3445[i + 1], 2, i3444, '')
  }
  i3440.sharedMaterials = i3444
  i3440.receiveShadows = !!i3441[28]
  i3440.shadowCastingMode = i3441[29]
  i3440.sortingLayerID = i3441[30]
  i3440.sortingOrder = i3441[31]
  i3440.lightmapIndex = i3441[32]
  i3440.lightmapSceneIndex = i3441[33]
  i3440.lightmapScaleOffset = new pc.Vec4( i3441[34], i3441[35], i3441[36], i3441[37] )
  i3440.lightProbeUsage = i3441[38]
  i3440.reflectionProbeUsage = i3441[39]
  return i3440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i3448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i3449 = data
  i3448.usedByComposite = !!i3449[0]
  i3448.autoTiling = !!i3449[1]
  i3448.size = new pc.Vec2( i3449[2], i3449[3] )
  i3448.edgeRadius = i3449[4]
  i3448.enabled = !!i3449[5]
  i3448.isTrigger = !!i3449[6]
  i3448.usedByEffector = !!i3449[7]
  i3448.density = i3449[8]
  i3448.offset = new pc.Vec2( i3449[9], i3449[10] )
  request.r(i3449[11], i3449[12], 0, i3448, 'material')
  return i3448
}

Deserializers["RotaryTimerKnob"] = function (request, data, root) {
  var i3450 = root || request.c( 'RotaryTimerKnob' )
  var i3451 = data
  i3450.canDrag = !!i3451[0]
  i3450.numSteps = i3451[1]
  i3450.onlyClockwise = !!i3451[2]
  request.r(i3451[3], i3451[4], 0, i3450, 'clickSound')
  i3450.enableVibration = !!i3451[5]
  request.r(i3451[6], i3451[7], 0, i3450, 'stepText')
  i3450.OnComplete = request.d('UnityEngine.Events.UnityEvent', i3451[8], i3450.OnComplete)
  request.r(i3451[9], i3451[10], 0, i3450, 'handIndication')
  return i3450
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i3452 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i3453 = data
  request.r(i3453[0], i3453[1], 0, i3452, 'm_RootBone')
  var i3455 = i3453[2]
  var i3454 = []
  for(var i = 0; i < i3455.length; i += 2) {
  request.r(i3455[i + 0], i3455[i + 1], 2, i3454, '')
  }
  i3452.m_BoneTransforms = i3454
  i3452.m_AlwaysUpdate = !!i3453[3]
  i3452.m_AutoRebind = !!i3453[4]
  return i3452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i3456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i3457 = data
  i3456.frontSortingLayerID = i3457[0]
  i3456.frontSortingOrder = i3457[1]
  i3456.backSortingLayerID = i3457[2]
  i3456.backSortingOrder = i3457[3]
  i3456.alphaCutoff = i3457[4]
  request.r(i3457[5], i3457[6], 0, i3456, 'sprite')
  i3456.tileMode = i3457[7]
  i3456.isCustomRangeActive = !!i3457[8]
  i3456.spriteSortPoint = i3457[9]
  i3456.enabled = !!i3457[10]
  request.r(i3457[11], i3457[12], 0, i3456, 'sharedMaterial')
  var i3459 = i3457[13]
  var i3458 = []
  for(var i = 0; i < i3459.length; i += 2) {
  request.r(i3459[i + 0], i3459[i + 1], 2, i3458, '')
  }
  i3456.sharedMaterials = i3458
  i3456.receiveShadows = !!i3457[14]
  i3456.shadowCastingMode = i3457[15]
  i3456.sortingLayerID = i3457[16]
  i3456.sortingOrder = i3457[17]
  i3456.lightmapIndex = i3457[18]
  i3456.lightmapSceneIndex = i3457[19]
  i3456.lightmapScaleOffset = new pc.Vec4( i3457[20], i3457[21], i3457[22], i3457[23] )
  i3456.lightProbeUsage = i3457[24]
  i3456.reflectionProbeUsage = i3457[25]
  return i3456
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i3460 = root || request.c( 'BasicDrag' )
  var i3461 = data
  i3460.canDrag = !!i3461[0]
  i3460.dragByDelta = !!i3461[1]
  i3460.isDragging = !!i3461[2]
  i3460.moveWithPointer = !!i3461[3]
  i3460.canReturn = !!i3461[4]
  i3460.jumpOnReturn = !!i3461[5]
  i3460.returnTime = i3461[6]
  i3460.Tool_Offset = new pc.Vec3( i3461[7], i3461[8], i3461[9] )
  i3460.canScaleIncrease = !!i3461[10]
  i3460.Self_ScaleNew = new pc.Vec3( i3461[11], i3461[12], i3461[13] )
  i3460.canRotateOnPick = !!i3461[14]
  i3460.startRot = new pc.Vec3( i3461[15], i3461[16], i3461[17] )
  i3460.newRot = new pc.Vec3( i3461[18], i3461[19], i3461[20] )
  var i3463 = i3461[21]
  var i3462 = []
  for(var i = 0; i < i3463.length; i += 2) {
  request.r(i3463[i + 0], i3463[i + 1], 2, i3462, '')
  }
  i3460.childSprite = i3462
  request.r(i3461[22], i3461[23], 0, i3460, 'ToolSelectClip')
  request.r(i3461[24], i3461[25], 0, i3460, 'ToolLoopClip')
  request.r(i3461[26], i3461[27], 0, i3460, 'thisParticles')
  i3460.onDragparticle = !!i3461[28]
  request.r(i3461[29], i3461[30], 0, i3460, 'dragParticles')
  request.r(i3461[31], i3461[32], 0, i3460, 'anim')
  i3460.startPos = new pc.Vec3( i3461[33], i3461[34], i3461[35] )
  i3460.startScale = new pc.Vec3( i3461[36], i3461[37], i3461[38] )
  i3460.Vibration = !!i3461[39]
  i3460.isPlacedCannotMove = !!i3461[40]
  i3460.isObjectMovingWhileDragging = !!i3461[41]
  i3460.OnMouseDownEvent = request.d('System.Action', i3461[42], i3460.OnMouseDownEvent)
  i3460.OnMouseUpEvent = request.d('System.Action', i3461[43], i3460.OnMouseUpEvent)
  i3460.ProgStartEvent = request.d('System.Action', i3461[44], i3460.ProgStartEvent)
  i3460.ProgEndEvent = request.d('System.Action', i3461[45], i3460.ProgEndEvent)
  i3460.canCallMouseUpWhenGamePaused = !!i3461[46]
  i3460.ClampX_L = i3461[47]
  i3460.ClampX_H = i3461[48]
  i3460.ClampY_L = i3461[49]
  i3460.ClampY_H = i3461[50]
  i3460.startOrder = i3461[51]
  i3460.dontResetItIsInCollider = !!i3461[52]
  request.r(i3461[53], i3461[54], 0, i3460, 'thisCollider')
  request.r(i3461[55], i3461[56], 0, i3460, 'thisSR')
  i3460.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i3461[57], i3460.OnMouseDownEventIndependentFromCanDrag)
  return i3460
}

Deserializers["System.Action"] = function (request, data, root) {
  var i3466 = root || request.c( 'System.Action' )
  var i3467 = data
  return i3466
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i3468 = root || request.c( 'BD_Clamp' )
  var i3469 = data
  i3468.ClampX_L = i3469[0]
  i3468.ClampX_H = i3469[1]
  i3468.ClampY_L = i3469[2]
  i3468.ClampY_H = i3469[3]
  return i3468
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i3470 = root || request.c( 'BD_CameraFollow' )
  var i3471 = data
  request.r(i3471[0], i3471[1], 0, i3470, 'Tool')
  request.r(i3471[2], i3471[3], 0, i3470, 'Pivot')
  i3470.FOV = i3471[4]
  i3470.Y_L = i3471[5]
  i3470.Y_H = i3471[6]
  i3470.X_L = i3471[7]
  i3470.X_R = i3471[8]
  i3470.startDelay = i3471[9]
  i3470.duration = i3471[10]
  return i3470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i3472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i3473 = data
  i3472.bodyType = i3473[0]
  request.r(i3473[1], i3473[2], 0, i3472, 'material')
  i3472.simulated = !!i3473[3]
  i3472.useAutoMass = !!i3473[4]
  i3472.mass = i3473[5]
  i3472.drag = i3473[6]
  i3472.angularDrag = i3473[7]
  i3472.gravityScale = i3473[8]
  i3472.collisionDetectionMode = i3473[9]
  i3472.sleepMode = i3473[10]
  i3472.constraints = i3473[11]
  return i3472
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i3474 = root || request.c( 'PlaceItem' )
  var i3475 = data
  request.r(i3475[0], i3475[1], 0, i3474, 'thisDrag')
  request.r(i3475[2], i3475[3], 0, i3474, 'Target')
  request.r(i3475[4], i3475[5], 0, i3474, 'Clip')
  i3474.jumpOnPlace = !!i3475[6]
  i3474.jumpHeight = i3475[7]
  i3474.jumpDuration = i3475[8]
  i3474.settleDuration = i3475[9]
  i3474.isPlaced = !!i3475[10]
  i3474.isInsideCollider = !!i3475[11]
  i3474.changeScaleOnPlace = !!i3475[12]
  request.r(i3475[13], i3475[14], 0, i3474, 'item')
  i3474.newScaleOnPlace = new pc.Vec3( i3475[15], i3475[16], i3475[17] )
  i3474.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i3475[18], i3474.OnPlaced)
  return i3474
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i3476 = root || request.c( 'ActionOnTap' )
  var i3477 = data
  i3476.OnTap = request.d('UnityEngine.Events.UnityEvent', i3477[0], i3476.OnTap)
  i3476.OnTapExtra = request.d('System.Action', i3477[1], i3476.OnTapExtra)
  return i3476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i3478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i3479 = data
  i3478.radius = i3479[0]
  i3478.enabled = !!i3479[1]
  i3478.isTrigger = !!i3479[2]
  i3478.usedByEffector = !!i3479[3]
  i3478.density = i3479[4]
  i3478.offset = new pc.Vec2( i3479[5], i3479[6] )
  request.r(i3479[7], i3479[8], 0, i3478, 'material')
  return i3478
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i3480 = root || request.c( 'PlayParticlesOnCollision' )
  var i3481 = data
  request.r(i3481[0], i3481[1], 0, i3480, 'Target')
  request.r(i3481[2], i3481[3], 0, i3480, 'ParticlePrefab')
  i3480.destroyIt = !!i3481[4]
  i3480.stayAtPlace = !!i3481[5]
  i3480.disableOnCollision = !!i3481[6]
  i3480.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i3481[7], i3480.OnCollisionEvent)
  return i3480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i3482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i3483 = data
  i3482.usedByComposite = !!i3483[0]
  i3482.autoTiling = !!i3483[1]
  var i3485 = i3483[2]
  var i3484 = []
  for(var i = 0; i < i3485.length; i += 1) {
  var i3487 = i3485[i + 0]
  var i3486 = []
  for(var i = 0; i < i3487.length; i += 2) {
    i3486.push( new pc.Vec2( i3487[i + 0], i3487[i + 1] ) );
  }
    i3484.push( i3486 );
  }
  i3482.points = i3484
  i3482.enabled = !!i3483[3]
  i3482.isTrigger = !!i3483[4]
  i3482.usedByEffector = !!i3483[5]
  i3482.density = i3483[6]
  i3482.offset = new pc.Vec2( i3483[7], i3483[8] )
  request.r(i3483[9], i3483[10], 0, i3482, 'material')
  return i3482
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i3494 = root || request.c( 'PlaySfxOnCollision' )
  var i3495 = data
  request.r(i3495[0], i3495[1], 0, i3494, 'Tip')
  i3494.Mode = i3495[2]
  request.r(i3495[3], i3495[4], 0, i3494, 'DragInput')
  request.r(i3495[5], i3495[6], 0, i3494, 'Source')
  i3494.startVol = i3495[7]
  i3494.targetVol = i3495[8]
  i3494.duration = i3495[9]
  request.r(i3495[10], i3495[11], 0, i3494, 'Particles')
  i3494.isDone = !!i3495[12]
  i3494.isInArea = !!i3495[13]
  i3494.isPlaying = !!i3495[14]
  return i3494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3497 = data
  request.r(i3497[0], i3497[1], 0, i3496, 'clip')
  request.r(i3497[2], i3497[3], 0, i3496, 'outputAudioMixerGroup')
  i3496.playOnAwake = !!i3497[4]
  i3496.loop = !!i3497[5]
  i3496.time = i3497[6]
  i3496.volume = i3497[7]
  i3496.pitch = i3497[8]
  i3496.enabled = !!i3497[9]
  return i3496
}

Deserializers["SewingCol"] = function (request, data, root) {
  var i3498 = root || request.c( 'SewingCol' )
  var i3499 = data
  request.r(i3499[0], i3499[1], 0, i3498, 'targetTip')
  var i3501 = i3499[2]
  var i3500 = []
  for(var i = 0; i < i3501.length; i += 2) {
  request.r(i3501[i + 0], i3501[i + 1], 2, i3500, '')
  }
  i3498.Anim_Items = i3500
  i3498.isDone = !!i3499[3]
  request.r(i3499[4], i3499[5], 0, i3498, 'sfx')
  return i3498
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i3504 = root || request.c( 'OutlinePulse' )
  var i3505 = data
  i3504.smallThickness = i3505[0]
  i3504.largeThickness = i3505[1]
  i3504.transitionSpeed = i3505[2]
  i3504.animationSpeed = i3505[3]
  i3504.isThickOutline = !!i3505[4]
  i3504.animate = !!i3505[5]
  i3504.hideSpriteOnly = !!i3505[6]
  return i3504
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i3506 = root || request.c( 'BD_Action' )
  var i3507 = data
  i3506.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i3507[0], i3506.OnMouseDownEvent)
  i3506.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i3507[1], i3506.OnMouseUpEvent)
  i3506.setToolLayer = !!i3507[2]
  request.r(i3507[3], i3507[4], 0, i3506, 'tool_SP')
  return i3506
}

Deserializers["Level1_SurfController"] = function (request, data, root) {
  var i3508 = root || request.c( 'Level1_SurfController' )
  var i3509 = data
  i3508.target_rotZ = i3509[0]
  i3508.rotationDuration = i3509[1]
  i3508.rotationEase = i3509[2]
  request.r(i3509[3], i3509[4], 0, i3508, 'maskItem')
  i3508.maskTarget_posY = i3509[5]
  i3508.maskMoveDuration = i3509[6]
  i3508.requiredHoldTime = i3509[7]
  i3508.minRotationForProgress = i3509[8]
  request.r(i3509[9], i3509[10], 0, i3508, 'tipCollider')
  request.r(i3509[11], i3509[12], 0, i3508, 'targetZoneCollider')
  request.r(i3509[13], i3509[14], 0, i3508, 'surf_Particles')
  request.r(i3509[15], i3509[16], 0, i3508, 'surf_SubEmitter')
  request.r(i3509[17], i3509[18], 0, i3508, 'Indication')
  i3508.OnComplete = request.d('UnityEngine.Events.UnityEvent', i3509[19], i3508.OnComplete)
  i3508.currentHoldProgress = i3509[20]
  return i3508
}

Deserializers["BD_Fold"] = function (request, data, root) {
  var i3510 = root || request.c( 'BD_Fold' )
  var i3511 = data
  i3510.canDrag = !!i3511[0]
  i3510.canFoldBottomLeft = !!i3511[1]
  i3510.canFoldBottomRight = !!i3511[2]
  i3510.canFoldTopLeft = !!i3511[3]
  i3510.canFoldTopRight = !!i3511[4]
  request.r(i3511[5], i3511[6], 0, i3510, 'Indication')
  request.r(i3511[7], i3511[8], 0, i3510, 'backSideSprite')
  i3510.maxSideOffset = i3511[9]
  i3510.foldBackDuration = i3511[10]
  i3510.instantFoldAmount = i3511[11]
  i3510.useSmoothRelease = !!i3511[12]
  i3510.completionLimit = i3511[13]
  i3510.afterCompletionTravelTo = i3511[14]
  i3510.OnComplete = request.d('UnityEngine.Events.UnityEvent', i3511[15], i3510.OnComplete)
  i3510.currentProgress = i3511[16]
  i3510.innerShadowStrength = i3511[17]
  request.r(i3511[18], i3511[19], 0, i3510, 'dragAudioSource')
  request.r(i3511[20], i3511[21], 0, i3510, 'dragStartClip')
  request.r(i3511[22], i3511[23], 0, i3510, 'completionClip')
  i3510.audioFadeSpeed = i3511[24]
  i3510.audioMoveThreshold = i3511[25]
  i3510.hapticInterval = i3511[26]
  return i3510
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i3512 = root || request.c( 'BD_Progress' )
  var i3513 = data
  var i3515 = i3513[0]
  var i3514 = []
  for(var i = 0; i < i3515.length; i += 1) {
    i3514.push( request.d('ScratchData', i3515[i + 0]) );
  }
  i3512.AllScratches = i3514
  i3512.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i3513[1], i3512.OnScratchComplete)
  i3512.isProgDone = !!i3513[2]
  i3512.canCallComplete = !!i3513[3]
  i3512.CollectiveAppear = !!i3513[4]
  i3512.tipControl = !!i3513[5]
  i3512.progressControl = !!i3513[6]
  request.r(i3513[7], i3513[8], 0, i3512, 'thisDrag')
  i3512.CompleteEvent = request.d('System.Action', i3513[9], i3512.CompleteEvent)
  i3512.SubCompleteEvent = request.d('System.Action', i3513[10], i3512.SubCompleteEvent)
  return i3512
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i3518 = root || request.c( 'ScratchData' )
  var i3519 = data
  request.r(i3519[0], i3519[1], 0, i3518, 'ScratchManager')
  i3518.scratchLimit = i3519[2]
  i3518.isComplete = !!i3519[3]
  return i3518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3521 = data
  request.r(i3521[0], i3521[1], 0, i3520, 'sharedMesh')
  return i3520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3523 = data
  request.r(i3523[0], i3523[1], 0, i3522, 'additionalVertexStreams')
  i3522.enabled = !!i3523[2]
  request.r(i3523[3], i3523[4], 0, i3522, 'sharedMaterial')
  var i3525 = i3523[5]
  var i3524 = []
  for(var i = 0; i < i3525.length; i += 2) {
  request.r(i3525[i + 0], i3525[i + 1], 2, i3524, '')
  }
  i3522.sharedMaterials = i3524
  i3522.receiveShadows = !!i3523[6]
  i3522.shadowCastingMode = i3523[7]
  i3522.sortingLayerID = i3523[8]
  i3522.sortingOrder = i3523[9]
  i3522.lightmapIndex = i3523[10]
  i3522.lightmapSceneIndex = i3523[11]
  i3522.lightmapScaleOffset = new pc.Vec4( i3523[12], i3523[13], i3523[14], i3523[15] )
  i3522.lightProbeUsage = i3523[16]
  i3522.reflectionProbeUsage = i3523[17]
  return i3522
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i3526 = root || request.c( 'StaticFixedPipe' )
  var i3527 = data
  request.r(i3527[0], i3527[1], 0, i3526, 'meshRenderer')
  request.r(i3527[2], i3527[3], 0, i3526, 'toolTransform')
  request.r(i3527[4], i3527[5], 0, i3526, 'toolDirectionPoint')
  request.r(i3527[6], i3527[7], 0, i3526, 'fixedEndPoint')
  i3526.segmentCount = i3527[8]
  i3526.totalLength = i3527[9]
  i3526.constraintIterations = i3527[10]
  i3526.gravity = new pc.Vec3( i3527[11], i3527[12], i3527[13] )
  i3526.pipeWidth = i3527[14]
  return i3526
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i3528 = root || request.c( 'BD_SpriteChange' )
  var i3529 = data
  request.r(i3529[0], i3529[1], 0, i3528, 'BD')
  request.r(i3529[2], i3529[3], 0, i3528, 'SR')
  request.r(i3529[4], i3529[5], 0, i3528, 'Default')
  request.r(i3529[6], i3529[7], 0, i3528, 'Picked')
  i3528.resetOnRelease = !!i3529[8]
  return i3528
}

Deserializers["TeaseTapCTA"] = function (request, data, root) {
  var i3530 = root || request.c( 'TeaseTapCTA' )
  var i3531 = data
  return i3530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3533 = data
  i3532.name = i3533[0]
  i3532.atlasId = i3533[1]
  i3532.mipmapCount = i3533[2]
  i3532.hdr = !!i3533[3]
  i3532.size = i3533[4]
  i3532.anisoLevel = i3533[5]
  i3532.filterMode = i3533[6]
  var i3535 = i3533[7]
  var i3534 = []
  for(var i = 0; i < i3535.length; i += 4) {
    i3534.push( UnityEngine.Rect.MinMaxRect(i3535[i + 0], i3535[i + 1], i3535[i + 2], i3535[i + 3]) );
  }
  i3532.rects = i3534
  i3532.wrapU = i3533[8]
  i3532.wrapV = i3533[9]
  return i3532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3539 = data
  i3538.name = i3539[0]
  i3538.index = i3539[1]
  i3538.startup = !!i3539[2]
  return i3538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3541 = data
  i3540.aspect = i3541[0]
  i3540.orthographic = !!i3541[1]
  i3540.orthographicSize = i3541[2]
  i3540.backgroundColor = new pc.Color(i3541[3], i3541[4], i3541[5], i3541[6])
  i3540.nearClipPlane = i3541[7]
  i3540.farClipPlane = i3541[8]
  i3540.fieldOfView = i3541[9]
  i3540.depth = i3541[10]
  i3540.clearFlags = i3541[11]
  i3540.cullingMask = i3541[12]
  i3540.rect = i3541[13]
  request.r(i3541[14], i3541[15], 0, i3540, 'targetTexture')
  i3540.usePhysicalProperties = !!i3541[16]
  i3540.focalLength = i3541[17]
  i3540.sensorSize = new pc.Vec2( i3541[18], i3541[19] )
  i3540.lensShift = new pc.Vec2( i3541[20], i3541[21] )
  i3540.gateFit = i3541[22]
  i3540.commandBufferCount = i3541[23]
  i3540.cameraType = i3541[24]
  i3540.enabled = !!i3541[25]
  return i3540
}

Deserializers["CameraController"] = function (request, data, root) {
  var i3542 = root || request.c( 'CameraController' )
  var i3543 = data
  request.r(i3543[0], i3543[1], 0, i3542, 'cam')
  i3542.defaultPosition = new pc.Vec3( i3543[2], i3543[3], i3543[4] )
  i3542.defaultSize = i3543[5]
  i3542.defaultFOV = i3543[6]
  i3542.defaultDuration = i3543[7]
  i3542.defaultEase = i3543[8]
  return i3542
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i3544 = root || request.c( 'MusicSource' )
  var i3545 = data
  request.r(i3545[0], i3545[1], 0, i3544, 'source')
  return i3544
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i3546 = root || request.c( 'UI_Manager' )
  var i3547 = data
  i3546.levelCompleted = !!i3547[0]
  i3546.isPauseActive = !!i3547[1]
  i3546.loadIndex = i3547[2]
  request.r(i3547[3], i3547[4], 0, i3546, 'removeAdsButton')
  request.r(i3547[5], i3547[6], 0, i3546, 'pauseButton')
  request.r(i3547[7], i3547[8], 0, i3546, 'Fade_Img')
  request.r(i3547[9], i3547[10], 0, i3546, 'TopBarAnim')
  request.r(i3547[11], i3547[12], 0, i3546, 'MainPanel')
  request.r(i3547[13], i3547[14], 0, i3546, 'PausePanel')
  request.r(i3547[15], i3547[16], 0, i3546, 'PausePopUp')
  request.r(i3547[17], i3547[18], 0, i3546, 'PauseCanvasGroup')
  request.r(i3547[19], i3547[20], 0, i3546, 'RateUsPanel')
  request.r(i3547[21], i3547[22], 0, i3546, 'RateUsPopUp')
  request.r(i3547[23], i3547[24], 0, i3546, 'RemoveAdsPanel')
  request.r(i3547[25], i3547[26], 0, i3546, 'RemoveAdsPopUp')
  request.r(i3547[27], i3547[28], 0, i3546, 'RemoveAdsCanvasGroup')
  var i3549 = i3547[29]
  var i3548 = []
  for(var i = 0; i < i3549.length; i += 2) {
  request.r(i3549[i + 0], i3549[i + 1], 2, i3548, '')
  }
  i3546.RemoveAdsAnims = i3548
  i3546.showCompletePanel = !!i3547[30]
  var i3551 = i3547[31]
  var i3550 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3551.length; i += 2) {
  request.r(i3551[i + 0], i3551[i + 1], 1, i3550, '')
  }
  i3546.thingsToDisableWhenCompletePanel = i3550
  request.r(i3547[32], i3547[33], 0, i3546, 'CompletePanel')
  request.r(i3547[34], i3547[35], 0, i3546, 'LevelIcon')
  request.r(i3547[36], i3547[37], 0, i3546, 'CompleteParticles')
  request.r(i3547[38], i3547[39], 0, i3546, 'progressBar')
  request.r(i3547[40], i3547[41], 0, i3546, 'progressText')
  request.r(i3547[42], i3547[43], 0, i3546, 'toolIcon1')
  request.r(i3547[44], i3547[45], 0, i3546, 'toolIcon2')
  request.r(i3547[46], i3547[47], 0, i3546, 'toolIcon3')
  request.r(i3547[48], i3547[49], 0, i3546, 'toolIcon4')
  request.r(i3547[50], i3547[51], 0, i3546, 'toolHolder')
  i3546.toolHolderRaisedY = i3547[52]
  i3546.toolHolderRaiseDuration = i3547[53]
  request.r(i3547[54], i3547[55], 0, i3546, 'target1')
  request.r(i3547[56], i3547[57], 0, i3546, 'target2')
  i3546.toolMoveDuration = i3547[58]
  i3546.currentIndex = i3547[59]
  var i3553 = i3547[60]
  var i3552 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3553.length; i += 2) {
  request.r(i3553[i + 0], i3553[i + 1], 1, i3552, '')
  }
  i3546.allTools = i3552
  request.r(i3547[61], i3547[62], 0, i3546, 'clockProgress')
  request.r(i3547[63], i3547[64], 0, i3546, 'clockProgressFill')
  request.r(i3547[65], i3547[66], 0, i3546, 'clockAudio')
  i3546.moveDistance = i3547[67]
  i3546.animationDuration = i3547[68]
  i3546.greyBgChildName = i3547[69]
  i3546.pushOffset = i3547[70]
  return i3546
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i3556 = root || request.c( 'GameManagerPlayable' )
  var i3557 = data
  request.r(i3557[0], i3557[1], 0, i3556, 'endParticles')
  request.r(i3557[2], i3557[3], 0, i3556, 'stepCompleteParticles')
  request.r(i3557[4], i3557[5], 0, i3556, 'DefaultMat')
  request.r(i3557[6], i3557[7], 0, i3556, 'BG_Music')
  request.r(i3557[8], i3557[9], 0, i3556, 'restoreEffectShader')
  request.r(i3557[10], i3557[11], 0, i3556, 'stickerEffectShader')
  i3556.isComplete = !!i3557[12]
  i3556.isPaused = !!i3557[13]
  request.r(i3557[14], i3557[15], 0, i3556, 'currentLevel')
  i3556.startLevelOnPlay = !!i3557[16]
  i3556.currentLevelNo = i3557[17]
  return i3556
}

Deserializers["AudioController"] = function (request, data, root) {
  var i3558 = root || request.c( 'AudioController' )
  var i3559 = data
  request.r(i3559[0], i3559[1], 0, i3558, 'MainMixer')
  request.r(i3559[2], i3559[3], 0, i3558, 'UiClick')
  request.r(i3559[4], i3559[5], 0, i3558, 'UiClickSource')
  var i3561 = i3559[6]
  var i3560 = []
  for(var i = 0; i < i3561.length; i += 2) {
  request.r(i3561[i + 0], i3561[i + 1], 2, i3560, '')
  }
  i3558.SfxSources = i3560
  var i3563 = i3559[7]
  var i3562 = []
  for(var i = 0; i < i3563.length; i += 2) {
  request.r(i3563[i + 0], i3563[i + 1], 2, i3562, '')
  }
  i3558.AllClips = i3562
  return i3558
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i3566 = root || request.c( 'PlayableHudRuntime' )
  var i3567 = data
  return i3566
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3568 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3569 = data
  request.r(i3569[0], i3569[1], 0, i3568, 'm_FirstSelected')
  i3568.m_sendNavigationEvents = !!i3569[2]
  i3568.m_DragThreshold = i3569[3]
  return i3568
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3570 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3571 = data
  i3570.m_HorizontalAxis = i3571[0]
  i3570.m_VerticalAxis = i3571[1]
  i3570.m_SubmitButton = i3571[2]
  i3570.m_CancelButton = i3571[3]
  i3570.m_InputActionsPerSecond = i3571[4]
  i3570.m_RepeatDelay = i3571[5]
  i3570.m_ForceModuleActive = !!i3571[6]
  i3570.m_SendPointerHoverToParent = !!i3571[7]
  return i3570
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i3572 = root || request.c( 'PlayableRouter' )
  var i3573 = data
  var i3575 = i3573[0]
  var i3574 = []
  for(var i = 0; i < i3575.length; i += 2) {
  request.r(i3575[i + 0], i3575[i + 1], 2, i3574, '')
  }
  i3572.menuObjects = i3574
  var i3577 = i3573[1]
  var i3576 = []
  for(var i = 0; i < i3577.length; i += 2) {
  request.r(i3577[i + 0], i3577[i + 1], 2, i3576, '')
  }
  i3572.gameplayObjects = i3576
  var i3579 = i3573[2]
  var i3578 = []
  for(var i = 0; i < i3579.length; i += 1) {
    i3578.push( request.d('PlayableRouter+SubLevelSlot', i3579[i + 0]) );
  }
  i3572.subLevels = i3578
  i3572.fadeDuration = i3573[3]
  i3572.onIntroStart = request.d('UnityEngine.Events.UnityEvent', i3573[4], i3572.onIntroStart)
  var i3581 = i3573[5]
  var i3580 = []
  for(var i = 0; i < i3581.length; i += 2) {
  request.r(i3581[i + 0], i3581[i + 1], 2, i3580, '')
  }
  i3572.hideDuringIntro = i3580
  i3572.lockedMessage = i3573[6]
  i3572.lockedTapsToCTA = i3573[7]
  return i3572
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i3586 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i3587 = data
  request.r(i3587[0], i3587[1], 0, i3586, 'button')
  request.r(i3587[2], i3587[3], 0, i3586, 'level')
  request.r(i3587[4], i3587[5], 0, i3586, 'intro')
  return i3586
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i3588 = root || request.c( 'ToastManager' )
  var i3589 = data
  request.r(i3589[0], i3589[1], 0, i3588, 'toastPanel')
  request.r(i3589[2], i3589[3], 0, i3588, 'toastPopup')
  request.r(i3589[4], i3589[5], 0, i3588, 'canvasGroup')
  request.r(i3589[6], i3589[7], 0, i3588, 'toastText')
  i3588.startY = i3589[8]
  i3588.visibleY = i3589[9]
  i3588.endY = i3589[10]
  i3588.animationTime = i3589[11]
  i3588.animationTimeUp = i3589[12]
  return i3588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3591 = data
  i3590.m_Alpha = i3591[0]
  i3590.m_Interactable = !!i3591[1]
  i3590.m_BlocksRaycasts = !!i3591[2]
  i3590.m_IgnoreParentGroups = !!i3591[3]
  i3590.enabled = !!i3591[4]
  return i3590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3593 = data
  i3592.ambientIntensity = i3593[0]
  i3592.reflectionIntensity = i3593[1]
  i3592.ambientMode = i3593[2]
  i3592.ambientLight = new pc.Color(i3593[3], i3593[4], i3593[5], i3593[6])
  i3592.ambientSkyColor = new pc.Color(i3593[7], i3593[8], i3593[9], i3593[10])
  i3592.ambientGroundColor = new pc.Color(i3593[11], i3593[12], i3593[13], i3593[14])
  i3592.ambientEquatorColor = new pc.Color(i3593[15], i3593[16], i3593[17], i3593[18])
  i3592.fogColor = new pc.Color(i3593[19], i3593[20], i3593[21], i3593[22])
  i3592.fogEndDistance = i3593[23]
  i3592.fogStartDistance = i3593[24]
  i3592.fogDensity = i3593[25]
  i3592.fog = !!i3593[26]
  request.r(i3593[27], i3593[28], 0, i3592, 'skybox')
  i3592.fogMode = i3593[29]
  var i3595 = i3593[30]
  var i3594 = []
  for(var i = 0; i < i3595.length; i += 1) {
    i3594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3595[i + 0]) );
  }
  i3592.lightmaps = i3594
  i3592.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3593[31], i3592.lightProbes)
  i3592.lightmapsMode = i3593[32]
  i3592.mixedBakeMode = i3593[33]
  i3592.environmentLightingMode = i3593[34]
  i3592.ambientProbe = new pc.SphericalHarmonicsL2(i3593[35])
  request.r(i3593[36], i3593[37], 0, i3592, 'customReflection')
  request.r(i3593[38], i3593[39], 0, i3592, 'defaultReflection')
  i3592.defaultReflectionMode = i3593[40]
  i3592.defaultReflectionResolution = i3593[41]
  i3592.sunLightObjectId = i3593[42]
  i3592.pixelLightCount = i3593[43]
  i3592.defaultReflectionHDR = !!i3593[44]
  i3592.hasLightDataAsset = !!i3593[45]
  i3592.hasManualGenerate = !!i3593[46]
  return i3592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3599 = data
  request.r(i3599[0], i3599[1], 0, i3598, 'lightmapColor')
  request.r(i3599[2], i3599[3], 0, i3598, 'lightmapDirection')
  request.r(i3599[4], i3599[5], 0, i3598, 'shadowMask')
  return i3598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3600 = root || new UnityEngine.LightProbes()
  var i3601 = data
  return i3600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3607 = data
  var i3609 = i3607[0]
  var i3608 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3609.length; i += 1) {
    i3608.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3609[i + 0]));
  }
  i3606.ShaderCompilationErrors = i3608
  i3606.name = i3607[1]
  i3606.guid = i3607[2]
  var i3611 = i3607[3]
  var i3610 = []
  for(var i = 0; i < i3611.length; i += 1) {
    i3610.push( i3611[i + 0] );
  }
  i3606.shaderDefinedKeywords = i3610
  var i3613 = i3607[4]
  var i3612 = []
  for(var i = 0; i < i3613.length; i += 1) {
    i3612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3613[i + 0]) );
  }
  i3606.passes = i3612
  var i3615 = i3607[5]
  var i3614 = []
  for(var i = 0; i < i3615.length; i += 1) {
    i3614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3615[i + 0]) );
  }
  i3606.usePasses = i3614
  var i3617 = i3607[6]
  var i3616 = []
  for(var i = 0; i < i3617.length; i += 1) {
    i3616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3617[i + 0]) );
  }
  i3606.defaultParameterValues = i3616
  request.r(i3607[7], i3607[8], 0, i3606, 'unityFallbackShader')
  i3606.readDepth = !!i3607[9]
  i3606.hasDepthOnlyPass = !!i3607[10]
  i3606.isCreatedByShaderGraph = !!i3607[11]
  i3606.disableBatching = !!i3607[12]
  i3606.compiled = !!i3607[13]
  return i3606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3621 = data
  i3620.shaderName = i3621[0]
  i3620.errorMessage = i3621[1]
  return i3620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3626 = root || new pc.UnityShaderPass()
  var i3627 = data
  i3626.id = i3627[0]
  i3626.subShaderIndex = i3627[1]
  i3626.name = i3627[2]
  i3626.passType = i3627[3]
  i3626.grabPassTextureName = i3627[4]
  i3626.usePass = !!i3627[5]
  i3626.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3627[6], i3626.zTest)
  i3626.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3627[7], i3626.zWrite)
  i3626.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3627[8], i3626.culling)
  i3626.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3627[9], i3626.blending)
  i3626.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3627[10], i3626.alphaBlending)
  i3626.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3627[11], i3626.colorWriteMask)
  i3626.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3627[12], i3626.offsetUnits)
  i3626.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3627[13], i3626.offsetFactor)
  i3626.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3627[14], i3626.stencilRef)
  i3626.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3627[15], i3626.stencilReadMask)
  i3626.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3627[16], i3626.stencilWriteMask)
  i3626.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3627[17], i3626.stencilOp)
  i3626.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3627[18], i3626.stencilOpFront)
  i3626.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3627[19], i3626.stencilOpBack)
  var i3629 = i3627[20]
  var i3628 = []
  for(var i = 0; i < i3629.length; i += 1) {
    i3628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3629[i + 0]) );
  }
  i3626.tags = i3628
  var i3631 = i3627[21]
  var i3630 = []
  for(var i = 0; i < i3631.length; i += 1) {
    i3630.push( i3631[i + 0] );
  }
  i3626.passDefinedKeywords = i3630
  var i3633 = i3627[22]
  var i3632 = []
  for(var i = 0; i < i3633.length; i += 1) {
    i3632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3633[i + 0]) );
  }
  i3626.passDefinedKeywordGroups = i3632
  var i3635 = i3627[23]
  var i3634 = []
  for(var i = 0; i < i3635.length; i += 1) {
    i3634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3635[i + 0]) );
  }
  i3626.variants = i3634
  var i3637 = i3627[24]
  var i3636 = []
  for(var i = 0; i < i3637.length; i += 1) {
    i3636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3637[i + 0]) );
  }
  i3626.excludedVariants = i3636
  i3626.hasDepthReader = !!i3627[25]
  return i3626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3639 = data
  i3638.val = i3639[0]
  i3638.name = i3639[1]
  return i3638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3641 = data
  i3640.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3641[0], i3640.src)
  i3640.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3641[1], i3640.dst)
  i3640.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3641[2], i3640.op)
  return i3640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3643 = data
  i3642.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3643[0], i3642.pass)
  i3642.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3643[1], i3642.fail)
  i3642.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3643[2], i3642.zFail)
  i3642.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3643[3], i3642.comp)
  return i3642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3647 = data
  i3646.name = i3647[0]
  i3646.value = i3647[1]
  return i3646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3651 = data
  var i3653 = i3651[0]
  var i3652 = []
  for(var i = 0; i < i3653.length; i += 1) {
    i3652.push( i3653[i + 0] );
  }
  i3650.keywords = i3652
  i3650.hasDiscard = !!i3651[1]
  return i3650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3657 = data
  i3656.passId = i3657[0]
  i3656.subShaderIndex = i3657[1]
  var i3659 = i3657[2]
  var i3658 = []
  for(var i = 0; i < i3659.length; i += 1) {
    i3658.push( i3659[i + 0] );
  }
  i3656.keywords = i3658
  i3656.vertexProgram = i3657[3]
  i3656.fragmentProgram = i3657[4]
  i3656.exportedForWebGl2 = !!i3657[5]
  i3656.readDepth = !!i3657[6]
  return i3656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3663 = data
  request.r(i3663[0], i3663[1], 0, i3662, 'shader')
  i3662.pass = i3663[2]
  return i3662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3667 = data
  i3666.name = i3667[0]
  i3666.type = i3667[1]
  i3666.value = new pc.Vec4( i3667[2], i3667[3], i3667[4], i3667[5] )
  i3666.textureValue = i3667[6]
  i3666.shaderPropertyFlag = i3667[7]
  return i3666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3669 = data
  i3668.name = i3669[0]
  request.r(i3669[1], i3669[2], 0, i3668, 'texture')
  i3668.aabb = i3669[3]
  i3668.vertices = i3669[4]
  i3668.triangles = i3669[5]
  i3668.textureRect = UnityEngine.Rect.MinMaxRect(i3669[6], i3669[7], i3669[8], i3669[9])
  i3668.packedRect = UnityEngine.Rect.MinMaxRect(i3669[10], i3669[11], i3669[12], i3669[13])
  i3668.border = new pc.Vec4( i3669[14], i3669[15], i3669[16], i3669[17] )
  i3668.transparency = i3669[18]
  i3668.bounds = i3669[19]
  i3668.pixelsPerUnit = i3669[20]
  i3668.textureWidth = i3669[21]
  i3668.textureHeight = i3669[22]
  i3668.nativeSize = new pc.Vec2( i3669[23], i3669[24] )
  i3668.pivot = new pc.Vec2( i3669[25], i3669[26] )
  i3668.textureRectOffset = new pc.Vec2( i3669[27], i3669[28] )
  return i3668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3671 = data
  i3670.name = i3671[0]
  return i3670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3673 = data
  i3672.name = i3673[0]
  i3672.wrapMode = i3673[1]
  i3672.isLooping = !!i3673[2]
  i3672.length = i3673[3]
  var i3675 = i3673[4]
  var i3674 = []
  for(var i = 0; i < i3675.length; i += 1) {
    i3674.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3675[i + 0]) );
  }
  i3672.curves = i3674
  var i3677 = i3673[5]
  var i3676 = []
  for(var i = 0; i < i3677.length; i += 1) {
    i3676.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3677[i + 0]) );
  }
  i3672.events = i3676
  i3672.halfPrecision = !!i3673[6]
  i3672._frameRate = i3673[7]
  i3672.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3673[8], i3672.localBounds)
  i3672.hasMuscleCurves = !!i3673[9]
  var i3679 = i3673[10]
  var i3678 = []
  for(var i = 0; i < i3679.length; i += 1) {
    i3678.push( i3679[i + 0] );
  }
  i3672.clipMuscleConstant = i3678
  i3672.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3673[11], i3672.clipBindingConstant)
  return i3672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3683 = data
  i3682.path = i3683[0]
  i3682.hash = i3683[1]
  i3682.componentType = i3683[2]
  i3682.property = i3683[3]
  i3682.keys = i3683[4]
  var i3685 = i3683[5]
  var i3684 = []
  for(var i = 0; i < i3685.length; i += 1) {
    i3684.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3685[i + 0]) );
  }
  i3682.objectReferenceKeys = i3684
  return i3682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3689 = data
  i3688.time = i3689[0]
  request.r(i3689[1], i3689[2], 0, i3688, 'value')
  return i3688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3693 = data
  i3692.functionName = i3693[0]
  i3692.floatParameter = i3693[1]
  i3692.intParameter = i3693[2]
  i3692.stringParameter = i3693[3]
  request.r(i3693[4], i3693[5], 0, i3692, 'objectReferenceParameter')
  i3692.time = i3693[6]
  return i3692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3695 = data
  i3694.center = new pc.Vec3( i3695[0], i3695[1], i3695[2] )
  i3694.extends = new pc.Vec3( i3695[3], i3695[4], i3695[5] )
  return i3694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3699 = data
  var i3701 = i3699[0]
  var i3700 = []
  for(var i = 0; i < i3701.length; i += 1) {
    i3700.push( i3701[i + 0] );
  }
  i3698.genericBindings = i3700
  var i3703 = i3699[1]
  var i3702 = []
  for(var i = 0; i < i3703.length; i += 1) {
    i3702.push( i3703[i + 0] );
  }
  i3698.pptrCurveMapping = i3702
  return i3698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3705 = data
  i3704.name = i3705[0]
  i3704.ascent = i3705[1]
  i3704.originalLineHeight = i3705[2]
  i3704.fontSize = i3705[3]
  var i3707 = i3705[4]
  var i3706 = []
  for(var i = 0; i < i3707.length; i += 1) {
    i3706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3707[i + 0]) );
  }
  i3704.characterInfo = i3706
  request.r(i3705[5], i3705[6], 0, i3704, 'texture')
  i3704.originalFontSize = i3705[7]
  return i3704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3711 = data
  i3710.index = i3711[0]
  i3710.advance = i3711[1]
  i3710.bearing = i3711[2]
  i3710.glyphWidth = i3711[3]
  i3710.glyphHeight = i3711[4]
  i3710.minX = i3711[5]
  i3710.maxX = i3711[6]
  i3710.minY = i3711[7]
  i3710.maxY = i3711[8]
  i3710.uvBottomLeftX = i3711[9]
  i3710.uvBottomLeftY = i3711[10]
  i3710.uvBottomRightX = i3711[11]
  i3710.uvBottomRightY = i3711[12]
  i3710.uvTopLeftX = i3711[13]
  i3710.uvTopLeftY = i3711[14]
  i3710.uvTopRightX = i3711[15]
  i3710.uvTopRightY = i3711[16]
  return i3710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3713 = data
  i3712.name = i3713[0]
  var i3715 = i3713[1]
  var i3714 = []
  for(var i = 0; i < i3715.length; i += 1) {
    i3714.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3715[i + 0]) );
  }
  i3712.layers = i3714
  var i3717 = i3713[2]
  var i3716 = []
  for(var i = 0; i < i3717.length; i += 1) {
    i3716.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3717[i + 0]) );
  }
  i3712.parameters = i3716
  i3712.animationClips = i3713[3]
  i3712.avatarUnsupported = i3713[4]
  return i3712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3721 = data
  i3720.name = i3721[0]
  i3720.defaultWeight = i3721[1]
  i3720.blendingMode = i3721[2]
  i3720.avatarMask = i3721[3]
  i3720.syncedLayerIndex = i3721[4]
  i3720.syncedLayerAffectsTiming = !!i3721[5]
  i3720.syncedLayers = i3721[6]
  i3720.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3721[7], i3720.stateMachine)
  return i3720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3723 = data
  i3722.id = i3723[0]
  i3722.name = i3723[1]
  i3722.path = i3723[2]
  var i3725 = i3723[3]
  var i3724 = []
  for(var i = 0; i < i3725.length; i += 1) {
    i3724.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3725[i + 0]) );
  }
  i3722.states = i3724
  var i3727 = i3723[4]
  var i3726 = []
  for(var i = 0; i < i3727.length; i += 1) {
    i3726.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3727[i + 0]) );
  }
  i3722.machines = i3726
  var i3729 = i3723[5]
  var i3728 = []
  for(var i = 0; i < i3729.length; i += 1) {
    i3728.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3729[i + 0]) );
  }
  i3722.entryStateTransitions = i3728
  var i3731 = i3723[6]
  var i3730 = []
  for(var i = 0; i < i3731.length; i += 1) {
    i3730.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3731[i + 0]) );
  }
  i3722.exitStateTransitions = i3730
  var i3733 = i3723[7]
  var i3732 = []
  for(var i = 0; i < i3733.length; i += 1) {
    i3732.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3733[i + 0]) );
  }
  i3722.anyStateTransitions = i3732
  i3722.defaultStateId = i3723[8]
  return i3722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3737 = data
  i3736.id = i3737[0]
  i3736.name = i3737[1]
  i3736.cycleOffset = i3737[2]
  i3736.cycleOffsetParameter = i3737[3]
  i3736.cycleOffsetParameterActive = !!i3737[4]
  i3736.mirror = !!i3737[5]
  i3736.mirrorParameter = i3737[6]
  i3736.mirrorParameterActive = !!i3737[7]
  i3736.motionId = i3737[8]
  i3736.nameHash = i3737[9]
  i3736.fullPathHash = i3737[10]
  i3736.speed = i3737[11]
  i3736.speedParameter = i3737[12]
  i3736.speedParameterActive = !!i3737[13]
  i3736.tag = i3737[14]
  i3736.tagHash = i3737[15]
  i3736.writeDefaultValues = !!i3737[16]
  var i3739 = i3737[17]
  var i3738 = []
  for(var i = 0; i < i3739.length; i += 2) {
  request.r(i3739[i + 0], i3739[i + 1], 2, i3738, '')
  }
  i3736.behaviours = i3738
  var i3741 = i3737[18]
  var i3740 = []
  for(var i = 0; i < i3741.length; i += 1) {
    i3740.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3741[i + 0]) );
  }
  i3736.transitions = i3740
  return i3736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3747 = data
  i3746.fullPath = i3747[0]
  i3746.canTransitionToSelf = !!i3747[1]
  i3746.duration = i3747[2]
  i3746.exitTime = i3747[3]
  i3746.hasExitTime = !!i3747[4]
  i3746.hasFixedDuration = !!i3747[5]
  i3746.interruptionSource = i3747[6]
  i3746.offset = i3747[7]
  i3746.orderedInterruption = !!i3747[8]
  i3746.destinationStateId = i3747[9]
  i3746.isExit = !!i3747[10]
  i3746.mute = !!i3747[11]
  i3746.solo = !!i3747[12]
  var i3749 = i3747[13]
  var i3748 = []
  for(var i = 0; i < i3749.length; i += 1) {
    i3748.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3749[i + 0]) );
  }
  i3746.conditions = i3748
  return i3746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3755 = data
  i3754.destinationStateId = i3755[0]
  i3754.isExit = !!i3755[1]
  i3754.mute = !!i3755[2]
  i3754.solo = !!i3755[3]
  var i3757 = i3755[4]
  var i3756 = []
  for(var i = 0; i < i3757.length; i += 1) {
    i3756.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3757[i + 0]) );
  }
  i3754.conditions = i3756
  return i3754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3761 = data
  i3760.mode = i3761[0]
  i3760.parameter = i3761[1]
  i3760.threshold = i3761[2]
  return i3760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3765 = data
  i3764.defaultBool = !!i3765[0]
  i3764.defaultFloat = i3765[1]
  i3764.defaultInt = i3765[2]
  i3764.name = i3765[3]
  i3764.nameHash = i3765[4]
  i3764.type = i3765[5]
  return i3764
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3766 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3767 = data
  i3766.useSafeMode = !!i3767[0]
  i3766.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3767[1], i3766.safeModeOptions)
  i3766.timeScale = i3767[2]
  i3766.unscaledTimeScale = i3767[3]
  i3766.useSmoothDeltaTime = !!i3767[4]
  i3766.maxSmoothUnscaledTime = i3767[5]
  i3766.rewindCallbackMode = i3767[6]
  i3766.showUnityEditorReport = !!i3767[7]
  i3766.logBehaviour = i3767[8]
  i3766.drawGizmos = !!i3767[9]
  i3766.defaultRecyclable = !!i3767[10]
  i3766.defaultAutoPlay = i3767[11]
  i3766.defaultUpdateType = i3767[12]
  i3766.defaultTimeScaleIndependent = !!i3767[13]
  i3766.defaultEaseType = i3767[14]
  i3766.defaultEaseOvershootOrAmplitude = i3767[15]
  i3766.defaultEasePeriod = i3767[16]
  i3766.defaultAutoKill = !!i3767[17]
  i3766.defaultLoopType = i3767[18]
  i3766.debugMode = !!i3767[19]
  i3766.debugStoreTargetId = !!i3767[20]
  i3766.showPreviewPanel = !!i3767[21]
  i3766.storeSettingsLocation = i3767[22]
  i3766.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3767[23], i3766.modules)
  i3766.createASMDEF = !!i3767[24]
  i3766.showPlayingTweens = !!i3767[25]
  i3766.showPausedTweens = !!i3767[26]
  return i3766
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3768 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3769 = data
  i3768.logBehaviour = i3769[0]
  i3768.nestedTweenFailureBehaviour = i3769[1]
  return i3768
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3770 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3771 = data
  i3770.showPanel = !!i3771[0]
  i3770.audioEnabled = !!i3771[1]
  i3770.physicsEnabled = !!i3771[2]
  i3770.physics2DEnabled = !!i3771[3]
  i3770.spriteEnabled = !!i3771[4]
  i3770.uiEnabled = !!i3771[5]
  i3770.textMeshProEnabled = !!i3771[6]
  i3770.tk2DEnabled = !!i3771[7]
  i3770.deAudioEnabled = !!i3771[8]
  i3770.deUnityExtendedEnabled = !!i3771[9]
  i3770.epoOutlineEnabled = !!i3771[10]
  return i3770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3773 = data
  var i3775 = i3773[0]
  var i3774 = []
  for(var i = 0; i < i3775.length; i += 1) {
    i3774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3775[i + 0]) );
  }
  i3772.files = i3774
  i3772.componentToPrefabIds = i3773[1]
  return i3772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3779 = data
  i3778.path = i3779[0]
  request.r(i3779[1], i3779[2], 0, i3778, 'unityObject')
  return i3778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3781 = data
  var i3783 = i3781[0]
  var i3782 = []
  for(var i = 0; i < i3783.length; i += 1) {
    i3782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3783[i + 0]) );
  }
  i3780.scriptsExecutionOrder = i3782
  var i3785 = i3781[1]
  var i3784 = []
  for(var i = 0; i < i3785.length; i += 1) {
    i3784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3785[i + 0]) );
  }
  i3780.sortingLayers = i3784
  var i3787 = i3781[2]
  var i3786 = []
  for(var i = 0; i < i3787.length; i += 1) {
    i3786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3787[i + 0]) );
  }
  i3780.cullingLayers = i3786
  i3780.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3781[3], i3780.timeSettings)
  i3780.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3781[4], i3780.physicsSettings)
  i3780.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3781[5], i3780.physics2DSettings)
  i3780.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3781[6], i3780.qualitySettings)
  i3780.enableRealtimeShadows = !!i3781[7]
  i3780.enableAutoInstancing = !!i3781[8]
  i3780.enableStaticBatching = !!i3781[9]
  i3780.enableDynamicBatching = !!i3781[10]
  i3780.usePreservativeDynamicBatching = !!i3781[11]
  i3780.lightmapEncodingQuality = i3781[12]
  i3780.desiredColorSpace = i3781[13]
  var i3789 = i3781[14]
  var i3788 = []
  for(var i = 0; i < i3789.length; i += 1) {
    i3788.push( i3789[i + 0] );
  }
  i3780.allTags = i3788
  return i3780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3793 = data
  i3792.name = i3793[0]
  i3792.value = i3793[1]
  return i3792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3797 = data
  i3796.id = i3797[0]
  i3796.name = i3797[1]
  i3796.value = i3797[2]
  return i3796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3801 = data
  i3800.id = i3801[0]
  i3800.name = i3801[1]
  return i3800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3803 = data
  i3802.fixedDeltaTime = i3803[0]
  i3802.maximumDeltaTime = i3803[1]
  i3802.timeScale = i3803[2]
  i3802.maximumParticleTimestep = i3803[3]
  return i3802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3805 = data
  i3804.gravity = new pc.Vec3( i3805[0], i3805[1], i3805[2] )
  i3804.defaultSolverIterations = i3805[3]
  i3804.bounceThreshold = i3805[4]
  i3804.autoSyncTransforms = !!i3805[5]
  i3804.autoSimulation = !!i3805[6]
  var i3807 = i3805[7]
  var i3806 = []
  for(var i = 0; i < i3807.length; i += 1) {
    i3806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3807[i + 0]) );
  }
  i3804.collisionMatrix = i3806
  return i3804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3811 = data
  i3810.enabled = !!i3811[0]
  i3810.layerId = i3811[1]
  i3810.otherLayerId = i3811[2]
  return i3810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3813 = data
  request.r(i3813[0], i3813[1], 0, i3812, 'material')
  i3812.gravity = new pc.Vec2( i3813[2], i3813[3] )
  i3812.positionIterations = i3813[4]
  i3812.velocityIterations = i3813[5]
  i3812.velocityThreshold = i3813[6]
  i3812.maxLinearCorrection = i3813[7]
  i3812.maxAngularCorrection = i3813[8]
  i3812.maxTranslationSpeed = i3813[9]
  i3812.maxRotationSpeed = i3813[10]
  i3812.baumgarteScale = i3813[11]
  i3812.baumgarteTOIScale = i3813[12]
  i3812.timeToSleep = i3813[13]
  i3812.linearSleepTolerance = i3813[14]
  i3812.angularSleepTolerance = i3813[15]
  i3812.defaultContactOffset = i3813[16]
  i3812.autoSimulation = !!i3813[17]
  i3812.queriesHitTriggers = !!i3813[18]
  i3812.queriesStartInColliders = !!i3813[19]
  i3812.callbacksOnDisable = !!i3813[20]
  i3812.reuseCollisionCallbacks = !!i3813[21]
  i3812.autoSyncTransforms = !!i3813[22]
  var i3815 = i3813[23]
  var i3814 = []
  for(var i = 0; i < i3815.length; i += 1) {
    i3814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3815[i + 0]) );
  }
  i3812.collisionMatrix = i3814
  return i3812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3819 = data
  i3818.enabled = !!i3819[0]
  i3818.layerId = i3819[1]
  i3818.otherLayerId = i3819[2]
  return i3818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3821 = data
  var i3823 = i3821[0]
  var i3822 = []
  for(var i = 0; i < i3823.length; i += 1) {
    i3822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3823[i + 0]) );
  }
  i3820.qualityLevels = i3822
  var i3825 = i3821[1]
  var i3824 = []
  for(var i = 0; i < i3825.length; i += 1) {
    i3824.push( i3825[i + 0] );
  }
  i3820.names = i3824
  i3820.shadows = i3821[2]
  i3820.anisotropicFiltering = i3821[3]
  i3820.antiAliasing = i3821[4]
  i3820.lodBias = i3821[5]
  i3820.shadowCascades = i3821[6]
  i3820.shadowDistance = i3821[7]
  i3820.shadowmaskMode = i3821[8]
  i3820.shadowProjection = i3821[9]
  i3820.shadowResolution = i3821[10]
  i3820.softParticles = !!i3821[11]
  i3820.softVegetation = !!i3821[12]
  i3820.activeColorSpace = i3821[13]
  i3820.desiredColorSpace = i3821[14]
  i3820.masterTextureLimit = i3821[15]
  i3820.maxQueuedFrames = i3821[16]
  i3820.particleRaycastBudget = i3821[17]
  i3820.pixelLightCount = i3821[18]
  i3820.realtimeReflectionProbes = !!i3821[19]
  i3820.shadowCascade2Split = i3821[20]
  i3820.shadowCascade4Split = new pc.Vec3( i3821[21], i3821[22], i3821[23] )
  i3820.streamingMipmapsActive = !!i3821[24]
  i3820.vSyncCount = i3821[25]
  i3820.asyncUploadBufferSize = i3821[26]
  i3820.asyncUploadTimeSlice = i3821[27]
  i3820.billboardsFaceCameraPosition = !!i3821[28]
  i3820.shadowNearPlaneOffset = i3821[29]
  i3820.streamingMipmapsMemoryBudget = i3821[30]
  i3820.maximumLODLevel = i3821[31]
  i3820.streamingMipmapsAddAllCameras = !!i3821[32]
  i3820.streamingMipmapsMaxLevelReduction = i3821[33]
  i3820.streamingMipmapsRenderersPerFrame = i3821[34]
  i3820.resolutionScalingFixedDPIFactor = i3821[35]
  i3820.streamingMipmapsMaxFileIORequests = i3821[36]
  i3820.currentQualityLevel = i3821[37]
  return i3820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i3828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i3829 = data
  var i3831 = i3829[0]
  var i3830 = []
  for(var i = 0; i < i3831.length; i += 1) {
    i3830.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i3831[i + 0]) );
  }
  i3828.groups = i3830
  var i3833 = i3829[1]
  var i3832 = []
  for(var i = 0; i < i3833.length; i += 1) {
    i3832.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i3833[i + 0]) );
  }
  i3828.snapshots = i3832
  return i3828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i3836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i3837 = data
  i3836.id = i3837[0]
  i3836.childGroupIds = i3837[1]
  i3836.name = i3837[2]
  return i3836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i3840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i3841 = data
  i3840.id = i3841[0]
  var i3843 = i3841[1]
  var i3842 = []
  for(var i = 0; i < i3843.length; i += 1) {
    i3842.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i3843[i + 0]) );
  }
  i3840.parameters = i3842
  return i3840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i3846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i3847 = data
  i3846.name = i3847[0]
  i3846.value = i3847[1]
  return i3846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3851 = data
  i3850.weight = i3851[0]
  i3850.vertices = i3851[1]
  i3850.normals = i3851[2]
  i3850.tangents = i3851[3]
  return i3850
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[82],"83":[9],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[41],"93":[41],"94":[41],"95":[41],"96":[41],"97":[41],"98":[41],"99":[41],"100":[41],"101":[41],"102":[41],"103":[41],"104":[41],"105":[9],"106":[55],"107":[108],"109":[108],"8":[7],"110":[111],"52":[26],"112":[29],"113":[26],"114":[115],"116":[115],"117":[14],"118":[29],"119":[26],"58":[25],"38":[26],"120":[7],"121":[7],"12":[8],"16":[15,7],"122":[7],"11":[8],"123":[7],"124":[7],"125":[7],"126":[7],"127":[7],"128":[7],"129":[7],"130":[7],"131":[7],"132":[15,7],"133":[7],"134":[7],"135":[7],"136":[7],"18":[15,7],"137":[7],"138":[67],"139":[67],"68":[67],"140":[67],"141":[9],"142":[9]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","DG.Tweening.DOTweenAnimation","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Button","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Level1_Cloth_Playable_Step45","UnityEngine.GameObject","BasicDrag","UnityEngine.SpriteRenderer","BD_CameraFollow","Level1_SurfController","UnityEngine.BoxCollider2D","RotaryTimerKnob","UnityEngine.AudioClip","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.TrailRenderer","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteMask","BD_Clamp","UnityEngine.Rigidbody2D","PlaceItem","ActionOnTap","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","SewingCol","OutlinePulse","BD_Action","BD_Fold","BD_Progress","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","StaticFixedPipe","BD_SpriteChange","TeaseTapCTA","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableRouter","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "18.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "4Sept2026_Lvl1_2_Step_4to5";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1762";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4379";

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

Deserializers.buildID = "de0f2e11-ec64-4120-aa8a-fd5ecbcb6585";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

