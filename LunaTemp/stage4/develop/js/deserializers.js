var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3240 = root || request.c( 'UnityEngine.JointSpring' )
  var i3241 = data
  i3240.spring = i3241[0]
  i3240.damper = i3241[1]
  i3240.targetPosition = i3241[2]
  return i3240
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3242 = root || request.c( 'UnityEngine.JointMotor' )
  var i3243 = data
  i3242.m_TargetVelocity = i3243[0]
  i3242.m_Force = i3243[1]
  i3242.m_FreeSpin = i3243[2]
  return i3242
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3244 = root || request.c( 'UnityEngine.JointLimits' )
  var i3245 = data
  i3244.m_Min = i3245[0]
  i3244.m_Max = i3245[1]
  i3244.m_Bounciness = i3245[2]
  i3244.m_BounceMinVelocity = i3245[3]
  i3244.m_ContactDistance = i3245[4]
  i3244.minBounce = i3245[5]
  i3244.maxBounce = i3245[6]
  return i3244
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3246 = root || request.c( 'UnityEngine.JointDrive' )
  var i3247 = data
  i3246.m_PositionSpring = i3247[0]
  i3246.m_PositionDamper = i3247[1]
  i3246.m_MaximumForce = i3247[2]
  i3246.m_UseAcceleration = i3247[3]
  return i3246
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3248 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3249 = data
  i3248.m_Spring = i3249[0]
  i3248.m_Damper = i3249[1]
  return i3248
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3250 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3251 = data
  i3250.m_Limit = i3251[0]
  i3250.m_Bounciness = i3251[1]
  i3250.m_ContactDistance = i3251[2]
  return i3250
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3252 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3253 = data
  i3252.m_ExtremumSlip = i3253[0]
  i3252.m_ExtremumValue = i3253[1]
  i3252.m_AsymptoteSlip = i3253[2]
  i3252.m_AsymptoteValue = i3253[3]
  i3252.m_Stiffness = i3253[4]
  return i3252
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3254 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3255 = data
  i3254.m_LowerAngle = i3255[0]
  i3254.m_UpperAngle = i3255[1]
  return i3254
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3256 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3257 = data
  i3256.m_MotorSpeed = i3257[0]
  i3256.m_MaximumMotorTorque = i3257[1]
  return i3256
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3258 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3259 = data
  i3258.m_DampingRatio = i3259[0]
  i3258.m_Frequency = i3259[1]
  i3258.m_Angle = i3259[2]
  return i3258
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3260 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3261 = data
  i3260.m_LowerTranslation = i3261[0]
  i3260.m_UpperTranslation = i3261[1]
  return i3260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3262 = root || new pc.UnityMaterial()
  var i3263 = data
  i3262.name = i3263[0]
  request.r(i3263[1], i3263[2], 0, i3262, 'shader')
  i3262.renderQueue = i3263[3]
  i3262.enableInstancing = !!i3263[4]
  var i3265 = i3263[5]
  var i3264 = []
  for(var i = 0; i < i3265.length; i += 1) {
    i3264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3265[i + 0]) );
  }
  i3262.floatParameters = i3264
  var i3267 = i3263[6]
  var i3266 = []
  for(var i = 0; i < i3267.length; i += 1) {
    i3266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3267[i + 0]) );
  }
  i3262.colorParameters = i3266
  var i3269 = i3263[7]
  var i3268 = []
  for(var i = 0; i < i3269.length; i += 1) {
    i3268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3269[i + 0]) );
  }
  i3262.vectorParameters = i3268
  var i3271 = i3263[8]
  var i3270 = []
  for(var i = 0; i < i3271.length; i += 1) {
    i3270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3271[i + 0]) );
  }
  i3262.textureParameters = i3270
  var i3273 = i3263[9]
  var i3272 = []
  for(var i = 0; i < i3273.length; i += 1) {
    i3272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3273[i + 0]) );
  }
  i3262.materialFlags = i3272
  return i3262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3277 = data
  i3276.name = i3277[0]
  i3276.value = i3277[1]
  return i3276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3281 = data
  i3280.name = i3281[0]
  i3280.value = new pc.Color(i3281[1], i3281[2], i3281[3], i3281[4])
  return i3280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3285 = data
  i3284.name = i3285[0]
  i3284.value = new pc.Vec4( i3285[1], i3285[2], i3285[3], i3285[4] )
  return i3284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3289 = data
  i3288.name = i3289[0]
  request.r(i3289[1], i3289[2], 0, i3288, 'value')
  return i3288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3293 = data
  i3292.name = i3293[0]
  i3292.enabled = !!i3293[1]
  return i3292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3295 = data
  i3294.name = i3295[0]
  i3294.width = i3295[1]
  i3294.height = i3295[2]
  i3294.mipmapCount = i3295[3]
  i3294.anisoLevel = i3295[4]
  i3294.filterMode = i3295[5]
  i3294.hdr = !!i3295[6]
  i3294.format = i3295[7]
  i3294.wrapMode = i3295[8]
  i3294.alphaIsTransparency = !!i3295[9]
  i3294.alphaSource = i3295[10]
  i3294.graphicsFormat = i3295[11]
  i3294.sRGBTexture = !!i3295[12]
  i3294.desiredColorSpace = i3295[13]
  i3294.wrapU = i3295[14]
  i3294.wrapV = i3295[15]
  return i3294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3297 = data
  i3296.name = i3297[0]
  i3296.halfPrecision = !!i3297[1]
  i3296.useSimplification = !!i3297[2]
  i3296.useUInt32IndexFormat = !!i3297[3]
  i3296.vertexCount = i3297[4]
  i3296.aabb = i3297[5]
  var i3299 = i3297[6]
  var i3298 = []
  for(var i = 0; i < i3299.length; i += 1) {
    i3298.push( !!i3299[i + 0] );
  }
  i3296.streams = i3298
  i3296.vertices = i3297[7]
  var i3301 = i3297[8]
  var i3300 = []
  for(var i = 0; i < i3301.length; i += 1) {
    i3300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3301[i + 0]) );
  }
  i3296.subMeshes = i3300
  var i3303 = i3297[9]
  var i3302 = []
  for(var i = 0; i < i3303.length; i += 16) {
    i3302.push( new pc.Mat4().setData(i3303[i + 0], i3303[i + 1], i3303[i + 2], i3303[i + 3],  i3303[i + 4], i3303[i + 5], i3303[i + 6], i3303[i + 7],  i3303[i + 8], i3303[i + 9], i3303[i + 10], i3303[i + 11],  i3303[i + 12], i3303[i + 13], i3303[i + 14], i3303[i + 15]) );
  }
  i3296.bindposes = i3302
  var i3305 = i3297[10]
  var i3304 = []
  for(var i = 0; i < i3305.length; i += 1) {
    i3304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3305[i + 0]) );
  }
  i3296.blendShapes = i3304
  return i3296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3311 = data
  i3310.triangles = i3311[0]
  return i3310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3317 = data
  i3316.name = i3317[0]
  var i3319 = i3317[1]
  var i3318 = []
  for(var i = 0; i < i3319.length; i += 1) {
    i3318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3319[i + 0]) );
  }
  i3316.frames = i3318
  return i3316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3321 = data
  i3320.position = new pc.Vec3( i3321[0], i3321[1], i3321[2] )
  i3320.scale = new pc.Vec3( i3321[3], i3321[4], i3321[5] )
  i3320.rotation = new pc.Quat(i3321[6], i3321[7], i3321[8], i3321[9])
  return i3320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3323 = data
  i3322.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3323[0], i3322.main)
  i3322.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3323[1], i3322.colorBySpeed)
  i3322.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3323[2], i3322.colorOverLifetime)
  i3322.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3323[3], i3322.emission)
  i3322.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3323[4], i3322.rotationBySpeed)
  i3322.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3323[5], i3322.rotationOverLifetime)
  i3322.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3323[6], i3322.shape)
  i3322.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3323[7], i3322.sizeBySpeed)
  i3322.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3323[8], i3322.sizeOverLifetime)
  i3322.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3323[9], i3322.textureSheetAnimation)
  i3322.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3323[10], i3322.velocityOverLifetime)
  i3322.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3323[11], i3322.noise)
  i3322.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3323[12], i3322.inheritVelocity)
  i3322.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3323[13], i3322.forceOverLifetime)
  i3322.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3323[14], i3322.limitVelocityOverLifetime)
  i3322.useAutoRandomSeed = !!i3323[15]
  i3322.randomSeed = i3323[16]
  return i3322
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3324 = root || new pc.ParticleSystemMain()
  var i3325 = data
  i3324.duration = i3325[0]
  i3324.loop = !!i3325[1]
  i3324.prewarm = !!i3325[2]
  i3324.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[3], i3324.startDelay)
  i3324.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[4], i3324.startLifetime)
  i3324.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[5], i3324.startSpeed)
  i3324.startSize3D = !!i3325[6]
  i3324.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[7], i3324.startSizeX)
  i3324.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[8], i3324.startSizeY)
  i3324.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[9], i3324.startSizeZ)
  i3324.startRotation3D = !!i3325[10]
  i3324.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[11], i3324.startRotationX)
  i3324.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[12], i3324.startRotationY)
  i3324.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[13], i3324.startRotationZ)
  i3324.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3325[14], i3324.startColor)
  i3324.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3325[15], i3324.gravityModifier)
  i3324.simulationSpace = i3325[16]
  request.r(i3325[17], i3325[18], 0, i3324, 'customSimulationSpace')
  i3324.simulationSpeed = i3325[19]
  i3324.useUnscaledTime = !!i3325[20]
  i3324.scalingMode = i3325[21]
  i3324.playOnAwake = !!i3325[22]
  i3324.maxParticles = i3325[23]
  i3324.emitterVelocityMode = i3325[24]
  i3324.stopAction = i3325[25]
  return i3324
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3326 = root || new pc.MinMaxCurve()
  var i3327 = data
  i3326.mode = i3327[0]
  i3326.curveMin = new pc.AnimationCurve( { keys_flow: i3327[1] } )
  i3326.curveMax = new pc.AnimationCurve( { keys_flow: i3327[2] } )
  i3326.curveMultiplier = i3327[3]
  i3326.constantMin = i3327[4]
  i3326.constantMax = i3327[5]
  return i3326
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3328 = root || new pc.MinMaxGradient()
  var i3329 = data
  i3328.mode = i3329[0]
  i3328.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3329[1], i3328.gradientMin)
  i3328.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3329[2], i3328.gradientMax)
  i3328.colorMin = new pc.Color(i3329[3], i3329[4], i3329[5], i3329[6])
  i3328.colorMax = new pc.Color(i3329[7], i3329[8], i3329[9], i3329[10])
  return i3328
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3331 = data
  i3330.mode = i3331[0]
  var i3333 = i3331[1]
  var i3332 = []
  for(var i = 0; i < i3333.length; i += 1) {
    i3332.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3333[i + 0]) );
  }
  i3330.colorKeys = i3332
  var i3335 = i3331[2]
  var i3334 = []
  for(var i = 0; i < i3335.length; i += 1) {
    i3334.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3335[i + 0]) );
  }
  i3330.alphaKeys = i3334
  return i3330
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3336 = root || new pc.ParticleSystemColorBySpeed()
  var i3337 = data
  i3336.enabled = !!i3337[0]
  i3336.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3337[1], i3336.color)
  i3336.range = new pc.Vec2( i3337[2], i3337[3] )
  return i3336
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3341 = data
  i3340.color = new pc.Color(i3341[0], i3341[1], i3341[2], i3341[3])
  i3340.time = i3341[4]
  return i3340
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3345 = data
  i3344.alpha = i3345[0]
  i3344.time = i3345[1]
  return i3344
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3346 = root || new pc.ParticleSystemColorOverLifetime()
  var i3347 = data
  i3346.enabled = !!i3347[0]
  i3346.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3347[1], i3346.color)
  return i3346
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3348 = root || new pc.ParticleSystemEmitter()
  var i3349 = data
  i3348.enabled = !!i3349[0]
  i3348.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3349[1], i3348.rateOverTime)
  i3348.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3349[2], i3348.rateOverDistance)
  var i3351 = i3349[3]
  var i3350 = []
  for(var i = 0; i < i3351.length; i += 1) {
    i3350.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3351[i + 0]) );
  }
  i3348.bursts = i3350
  return i3348
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3354 = root || new pc.ParticleSystemBurst()
  var i3355 = data
  i3354.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3355[0], i3354.count)
  i3354.cycleCount = i3355[1]
  i3354.minCount = i3355[2]
  i3354.maxCount = i3355[3]
  i3354.repeatInterval = i3355[4]
  i3354.time = i3355[5]
  return i3354
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3356 = root || new pc.ParticleSystemRotationBySpeed()
  var i3357 = data
  i3356.enabled = !!i3357[0]
  i3356.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3357[1], i3356.x)
  i3356.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3357[2], i3356.y)
  i3356.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3357[3], i3356.z)
  i3356.separateAxes = !!i3357[4]
  i3356.range = new pc.Vec2( i3357[5], i3357[6] )
  return i3356
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3358 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3359 = data
  i3358.enabled = !!i3359[0]
  i3358.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[1], i3358.x)
  i3358.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[2], i3358.y)
  i3358.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[3], i3358.z)
  i3358.separateAxes = !!i3359[4]
  return i3358
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3360 = root || new pc.ParticleSystemShape()
  var i3361 = data
  i3360.enabled = !!i3361[0]
  i3360.shapeType = i3361[1]
  i3360.randomDirectionAmount = i3361[2]
  i3360.sphericalDirectionAmount = i3361[3]
  i3360.randomPositionAmount = i3361[4]
  i3360.alignToDirection = !!i3361[5]
  i3360.radius = i3361[6]
  i3360.radiusMode = i3361[7]
  i3360.radiusSpread = i3361[8]
  i3360.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3361[9], i3360.radiusSpeed)
  i3360.radiusThickness = i3361[10]
  i3360.angle = i3361[11]
  i3360.length = i3361[12]
  i3360.boxThickness = new pc.Vec3( i3361[13], i3361[14], i3361[15] )
  i3360.meshShapeType = i3361[16]
  request.r(i3361[17], i3361[18], 0, i3360, 'mesh')
  request.r(i3361[19], i3361[20], 0, i3360, 'meshRenderer')
  request.r(i3361[21], i3361[22], 0, i3360, 'skinnedMeshRenderer')
  i3360.useMeshMaterialIndex = !!i3361[23]
  i3360.meshMaterialIndex = i3361[24]
  i3360.useMeshColors = !!i3361[25]
  i3360.normalOffset = i3361[26]
  i3360.arc = i3361[27]
  i3360.arcMode = i3361[28]
  i3360.arcSpread = i3361[29]
  i3360.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3361[30], i3360.arcSpeed)
  i3360.donutRadius = i3361[31]
  i3360.position = new pc.Vec3( i3361[32], i3361[33], i3361[34] )
  i3360.rotation = new pc.Vec3( i3361[35], i3361[36], i3361[37] )
  i3360.scale = new pc.Vec3( i3361[38], i3361[39], i3361[40] )
  return i3360
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3362 = root || new pc.ParticleSystemSizeBySpeed()
  var i3363 = data
  i3362.enabled = !!i3363[0]
  i3362.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3363[1], i3362.x)
  i3362.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3363[2], i3362.y)
  i3362.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3363[3], i3362.z)
  i3362.separateAxes = !!i3363[4]
  i3362.range = new pc.Vec2( i3363[5], i3363[6] )
  return i3362
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3364 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3365 = data
  i3364.enabled = !!i3365[0]
  i3364.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3365[1], i3364.x)
  i3364.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3365[2], i3364.y)
  i3364.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3365[3], i3364.z)
  i3364.separateAxes = !!i3365[4]
  return i3364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3366 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3367 = data
  i3366.enabled = !!i3367[0]
  i3366.mode = i3367[1]
  i3366.animation = i3367[2]
  i3366.numTilesX = i3367[3]
  i3366.numTilesY = i3367[4]
  i3366.useRandomRow = !!i3367[5]
  i3366.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3367[6], i3366.frameOverTime)
  i3366.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3367[7], i3366.startFrame)
  i3366.cycleCount = i3367[8]
  i3366.rowIndex = i3367[9]
  i3366.flipU = i3367[10]
  i3366.flipV = i3367[11]
  i3366.spriteCount = i3367[12]
  var i3369 = i3367[13]
  var i3368 = []
  for(var i = 0; i < i3369.length; i += 2) {
  request.r(i3369[i + 0], i3369[i + 1], 2, i3368, '')
  }
  i3366.sprites = i3368
  return i3366
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3372 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3373 = data
  i3372.enabled = !!i3373[0]
  i3372.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3373[1], i3372.x)
  i3372.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3373[2], i3372.y)
  i3372.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3373[3], i3372.z)
  i3372.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3373[4], i3372.radial)
  i3372.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3373[5], i3372.speedModifier)
  i3372.space = i3373[6]
  i3372.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3373[7], i3372.orbitalX)
  i3372.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3373[8], i3372.orbitalY)
  i3372.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3373[9], i3372.orbitalZ)
  i3372.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3373[10], i3372.orbitalOffsetX)
  i3372.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3373[11], i3372.orbitalOffsetY)
  i3372.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3373[12], i3372.orbitalOffsetZ)
  return i3372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3374 = root || new pc.ParticleSystemNoise()
  var i3375 = data
  i3374.enabled = !!i3375[0]
  i3374.separateAxes = !!i3375[1]
  i3374.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3375[2], i3374.strengthX)
  i3374.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3375[3], i3374.strengthY)
  i3374.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3375[4], i3374.strengthZ)
  i3374.frequency = i3375[5]
  i3374.damping = !!i3375[6]
  i3374.octaveCount = i3375[7]
  i3374.octaveMultiplier = i3375[8]
  i3374.octaveScale = i3375[9]
  i3374.quality = i3375[10]
  i3374.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3375[11], i3374.scrollSpeed)
  i3374.scrollSpeedMultiplier = i3375[12]
  i3374.remapEnabled = !!i3375[13]
  i3374.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3375[14], i3374.remapX)
  i3374.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3375[15], i3374.remapY)
  i3374.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3375[16], i3374.remapZ)
  i3374.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3375[17], i3374.positionAmount)
  i3374.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3375[18], i3374.rotationAmount)
  i3374.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3375[19], i3374.sizeAmount)
  return i3374
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3376 = root || new pc.ParticleSystemInheritVelocity()
  var i3377 = data
  i3376.enabled = !!i3377[0]
  i3376.mode = i3377[1]
  i3376.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3377[2], i3376.curve)
  return i3376
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3378 = root || new pc.ParticleSystemForceOverLifetime()
  var i3379 = data
  i3378.enabled = !!i3379[0]
  i3378.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3379[1], i3378.x)
  i3378.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3379[2], i3378.y)
  i3378.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3379[3], i3378.z)
  i3378.space = i3379[4]
  i3378.randomized = !!i3379[5]
  return i3378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3380 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3381 = data
  i3380.enabled = !!i3381[0]
  i3380.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3381[1], i3380.limit)
  i3380.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3381[2], i3380.limitX)
  i3380.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3381[3], i3380.limitY)
  i3380.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3381[4], i3380.limitZ)
  i3380.dampen = i3381[5]
  i3380.separateAxes = !!i3381[6]
  i3380.space = i3381[7]
  i3380.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3381[8], i3380.drag)
  i3380.multiplyDragByParticleSize = !!i3381[9]
  i3380.multiplyDragByParticleVelocity = !!i3381[10]
  return i3380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3383 = data
  request.r(i3383[0], i3383[1], 0, i3382, 'mesh')
  i3382.meshCount = i3383[2]
  i3382.activeVertexStreamsCount = i3383[3]
  i3382.alignment = i3383[4]
  i3382.renderMode = i3383[5]
  i3382.sortMode = i3383[6]
  i3382.lengthScale = i3383[7]
  i3382.velocityScale = i3383[8]
  i3382.cameraVelocityScale = i3383[9]
  i3382.normalDirection = i3383[10]
  i3382.sortingFudge = i3383[11]
  i3382.minParticleSize = i3383[12]
  i3382.maxParticleSize = i3383[13]
  i3382.pivot = new pc.Vec3( i3383[14], i3383[15], i3383[16] )
  request.r(i3383[17], i3383[18], 0, i3382, 'trailMaterial')
  i3382.applyActiveColorSpace = !!i3383[19]
  i3382.enabled = !!i3383[20]
  request.r(i3383[21], i3383[22], 0, i3382, 'sharedMaterial')
  var i3385 = i3383[23]
  var i3384 = []
  for(var i = 0; i < i3385.length; i += 2) {
  request.r(i3385[i + 0], i3385[i + 1], 2, i3384, '')
  }
  i3382.sharedMaterials = i3384
  i3382.receiveShadows = !!i3383[24]
  i3382.shadowCastingMode = i3383[25]
  i3382.sortingLayerID = i3383[26]
  i3382.sortingOrder = i3383[27]
  i3382.lightmapIndex = i3383[28]
  i3382.lightmapSceneIndex = i3383[29]
  i3382.lightmapScaleOffset = new pc.Vec4( i3383[30], i3383[31], i3383[32], i3383[33] )
  i3382.lightProbeUsage = i3383[34]
  i3382.reflectionProbeUsage = i3383[35]
  return i3382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3389 = data
  i3388.name = i3389[0]
  i3388.tagId = i3389[1]
  i3388.enabled = !!i3389[2]
  i3388.isStatic = !!i3389[3]
  i3388.layer = i3389[4]
  return i3388
}

Deserializers["Level3_Crown_Playable"] = function (request, data, root) {
  var i3390 = root || request.c( 'Level3_Crown_Playable' )
  var i3391 = data
  i3390.MainZoom = request.d('ZoomPos', i3391[0], i3390.MainZoom)
  request.r(i3391[1], i3391[2], 0, i3390, 'View1')
  request.r(i3391[3], i3391[4], 0, i3390, 'View2')
  i3390.ZoomStep1 = request.d('ZoomPos', i3391[5], i3390.ZoomStep1)
  request.r(i3391[6], i3391[7], 0, i3390, 'ToolStep1')
  request.r(i3391[8], i3391[9], 0, i3390, 'ToolStep1CameraFollow')
  request.r(i3391[10], i3391[11], 0, i3390, 'Step1Col')
  request.r(i3391[12], i3391[13], 0, i3390, 'DustSR_1')
  i3390.ZoomStep2 = request.d('ZoomPos', i3391[14], i3390.ZoomStep2)
  request.r(i3391[15], i3391[16], 0, i3390, 'ToolStep2')
  request.r(i3391[17], i3391[18], 0, i3390, 'ToolStep2CameraFollow')
  var i3393 = i3391[19]
  var i3392 = []
  for(var i = 0; i < i3393.length; i += 2) {
  request.r(i3393[i + 0], i3393[i + 1], 2, i3392, '')
  }
  i3390.SRsToFadeOut_2 = i3392
  request.r(i3391[20], i3391[21], 0, i3390, 'SpraySR_2')
  i3390.ZoomStep3 = request.d('ZoomPos', i3391[22], i3390.ZoomStep3)
  request.r(i3391[23], i3391[24], 0, i3390, 'ToolStep3')
  request.r(i3391[25], i3391[26], 0, i3390, 'ToolStep3CameraFollow')
  request.r(i3391[27], i3391[28], 0, i3390, 'Step3Col')
  request.r(i3391[29], i3391[30], 0, i3390, 'Mix')
  request.r(i3391[31], i3391[32], 0, i3390, 'MixE')
  i3390.levelName = i3391[33]
  i3390.levelReward = i3391[34]
  request.r(i3391[35], i3391[36], 0, i3390, 'LevelIcon')
  request.r(i3391[37], i3391[38], 0, i3390, 'Level_BG')
  var i3395 = i3391[39]
  var i3394 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3395.length; i += 2) {
  request.r(i3395[i + 0], i3395[i + 1], 1, i3394, '')
  }
  i3390.ToolIcons = i3394
  var i3397 = i3391[40]
  var i3396 = []
  for(var i = 0; i < i3397.length; i += 2) {
  request.r(i3397[i + 0], i3397[i + 1], 2, i3396, '')
  }
  i3390.AllDrags = i3396
  var i3399 = i3391[41]
  var i3398 = []
  for(var i = 0; i < i3399.length; i += 2) {
  request.r(i3399[i + 0], i3399[i + 1], 2, i3398, '')
  }
  i3390.AllSources = i3398
  var i3401 = i3391[42]
  var i3400 = []
  for(var i = 0; i < i3401.length; i += 2) {
  request.r(i3401[i + 0], i3401[i + 1], 2, i3400, '')
  }
  i3390.AllScratches = i3400
  i3390.stepsDone = i3391[43]
  i3390.levelNo = i3391[44]
  i3390.partNo = i3391[45]
  return i3390
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i3402 = root || request.c( 'ZoomPos' )
  var i3403 = data
  i3402.CameraPos = new pc.Vec3( i3403[0], i3403[1], i3403[2] )
  i3402.CameraFOV = i3403[3]
  return i3402
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i3414 = root || request.c( 'PlayableCTA' )
  var i3415 = data
  i3414.trigger = i3415[0]
  i3414.afterSeconds = i3415[1]
  i3414.afterTaps = i3415[2]
  request.r(i3415[3], i3415[4], 0, i3414, 'scratchProgress')
  i3414.scratchIndex = i3415[5]
  i3414.progressThreshold = i3415[6]
  request.r(i3415[7], i3415[8], 0, i3414, 'watchedTool')
  i3414.blockInputOnFire = !!i3415[9]
  i3414.refireOnEveryTap = !!i3415[10]
  i3414.refireDelay = i3415[11]
  i3414.showEndCard = !!i3415[12]
  request.r(i3415[13], i3415[14], 0, i3414, 'endCard')
  i3414.showEndCardOnProgressTrigger = !!i3415[15]
  i3414.showEndCardOnToolAppearTrigger = !!i3415[16]
  i3414.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i3415[17], i3414.onCtaFired)
  i3414.logWhenFired = !!i3415[18]
  return i3414
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3416 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3417 = data
  i3416.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3417[0], i3416.m_PersistentCalls)
  return i3416
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3418 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3419 = data
  var i3421 = i3419[0]
  var i3420 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3421.length; i += 1) {
    i3420.add(request.d('UnityEngine.Events.PersistentCall', i3421[i + 0]));
  }
  i3418.m_Calls = i3420
  return i3418
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3424 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3425 = data
  request.r(i3425[0], i3425[1], 0, i3424, 'm_Target')
  i3424.m_TargetAssemblyTypeName = i3425[2]
  i3424.m_MethodName = i3425[3]
  i3424.m_Mode = i3425[4]
  i3424.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3425[5], i3424.m_Arguments)
  i3424.m_CallState = i3425[6]
  return i3424
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i3426 = root || request.c( 'PlayableFadeCoverSettings' )
  var i3427 = data
  i3426.revealDelay = i3427[0]
  i3426.revealDuration = i3427[1]
  return i3426
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i3428 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i3429 = data
  request.r(i3429[0], i3429[1], 0, i3428, 'MainCamera')
  i3428.RenderType = i3429[2]
  request.r(i3429[3], i3429[4], 0, i3428, 'ScratchSurfaceSprite')
  i3428.ScratchSurfaceSpriteHasAlpha = !!i3429[5]
  i3428.MaskProgressCutOffValue = i3429[6]
  request.r(i3429[7], i3429[8], 0, i3428, 'EraseTexture')
  i3428.EraseTextureScale = new pc.Vec2( i3429[9], i3429[10] )
  i3428.InputEnabled = !!i3429[11]
  request.r(i3429[12], i3429[13], 0, i3428, 'Card')
  i3428.Mode = i3429[14]
  request.r(i3429[15], i3429[16], 0, i3428, 'Progress')
  request.r(i3429[17], i3429[18], 0, i3428, 'MeshCard')
  request.r(i3429[19], i3429[20], 0, i3428, 'SpriteCard')
  request.r(i3429[21], i3429[22], 0, i3428, 'ImageCard')
  request.r(i3429[23], i3429[24], 0, i3428, 'MaskShader')
  request.r(i3429[25], i3429[26], 0, i3428, 'BrushShader')
  request.r(i3429[27], i3429[28], 0, i3428, 'MaskProgressShader')
  request.r(i3429[29], i3429[30], 0, i3428, 'MaskProgressCutOffShader')
  return i3428
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i3430 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i3431 = data
  request.r(i3431[0], i3431[1], 0, i3430, 'MainCamera')
  request.r(i3431[2], i3431[3], 0, i3430, 'Surface')
  i3430.RenderTextureQuality = i3431[4]
  request.r(i3431[5], i3431[6], 0, i3430, 'Eraser')
  request.r(i3431[7], i3431[8], 0, i3430, 'Progress')
  request.r(i3431[9], i3431[10], 0, i3430, 'ScratchSurface')
  request.r(i3431[11], i3431[12], 0, i3430, 'RenderTexture')
  i3430.BrushScale = new pc.Vec2( i3431[13], i3431[14] )
  request.r(i3431[15], i3431[16], 0, i3430, 'ToolTip')
  i3430.InputEnabled = !!i3431[17]
  i3430.IsScratching = !!i3431[18]
  i3430.useChangingScale = !!i3431[19]
  i3430.useGivenBrushScale = !!i3431[20]
  i3430.canSpreadMask = !!i3431[21]
  i3430.shouldPaintHoles = !!i3431[22]
  i3430.canRotateTip = !!i3431[23]
  i3430._mode = i3431[24]
  return i3430
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i3432 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i3433 = data
  request.r(i3433[0], i3433[1], 0, i3432, 'Card')
  i3432.currentProgress = i3433[2]
  return i3432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3435 = data
  i3434.color = new pc.Color(i3435[0], i3435[1], i3435[2], i3435[3])
  request.r(i3435[4], i3435[5], 0, i3434, 'sprite')
  i3434.flipX = !!i3435[6]
  i3434.flipY = !!i3435[7]
  i3434.drawMode = i3435[8]
  i3434.size = new pc.Vec2( i3435[9], i3435[10] )
  i3434.tileMode = i3435[11]
  i3434.adaptiveModeThreshold = i3435[12]
  i3434.maskInteraction = i3435[13]
  i3434.spriteSortPoint = i3435[14]
  i3434.enabled = !!i3435[15]
  request.r(i3435[16], i3435[17], 0, i3434, 'sharedMaterial')
  var i3437 = i3435[18]
  var i3436 = []
  for(var i = 0; i < i3437.length; i += 2) {
  request.r(i3437[i + 0], i3437[i + 1], 2, i3436, '')
  }
  i3434.sharedMaterials = i3436
  i3434.receiveShadows = !!i3435[19]
  i3434.shadowCastingMode = i3435[20]
  i3434.sortingLayerID = i3435[21]
  i3434.sortingOrder = i3435[22]
  i3434.lightmapIndex = i3435[23]
  i3434.lightmapSceneIndex = i3435[24]
  i3434.lightmapScaleOffset = new pc.Vec4( i3435[25], i3435[26], i3435[27], i3435[28] )
  i3434.lightProbeUsage = i3435[29]
  i3434.reflectionProbeUsage = i3435[30]
  return i3434
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i3438 = root || request.c( 'PlayParticlesOnCollision' )
  var i3439 = data
  request.r(i3439[0], i3439[1], 0, i3438, 'Target')
  request.r(i3439[2], i3439[3], 0, i3438, 'ParticlePrefab')
  i3438.destroyIt = !!i3439[4]
  i3438.stayAtPlace = !!i3439[5]
  i3438.disableOnCollision = !!i3439[6]
  i3438.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i3439[7], i3438.OnCollisionEvent)
  return i3438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i3440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i3441 = data
  i3440.radius = i3441[0]
  i3440.enabled = !!i3441[1]
  i3440.isTrigger = !!i3441[2]
  i3440.usedByEffector = !!i3441[3]
  i3440.density = i3441[4]
  i3440.offset = new pc.Vec2( i3441[5], i3441[6] )
  request.r(i3441[7], i3441[8], 0, i3440, 'material')
  return i3440
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i3442 = root || request.c( 'PlaySfxOnCollision' )
  var i3443 = data
  request.r(i3443[0], i3443[1], 0, i3442, 'Tip')
  i3442.Mode = i3443[2]
  request.r(i3443[3], i3443[4], 0, i3442, 'DragInput')
  request.r(i3443[5], i3443[6], 0, i3442, 'Source')
  i3442.startVol = i3443[7]
  i3442.targetVol = i3443[8]
  i3442.duration = i3443[9]
  request.r(i3443[10], i3443[11], 0, i3442, 'Particles')
  i3442.isDone = !!i3443[12]
  i3442.isInArea = !!i3443[13]
  i3442.isPlaying = !!i3443[14]
  return i3442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3445 = data
  request.r(i3445[0], i3445[1], 0, i3444, 'clip')
  request.r(i3445[2], i3445[3], 0, i3444, 'outputAudioMixerGroup')
  i3444.playOnAwake = !!i3445[4]
  i3444.loop = !!i3445[5]
  i3444.time = i3445[6]
  i3444.volume = i3445[7]
  i3444.pitch = i3445[8]
  i3444.enabled = !!i3445[9]
  return i3444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i3446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i3447 = data
  i3446.usedByComposite = !!i3447[0]
  i3446.autoTiling = !!i3447[1]
  var i3449 = i3447[2]
  var i3448 = []
  for(var i = 0; i < i3449.length; i += 1) {
  var i3451 = i3449[i + 0]
  var i3450 = []
  for(var i = 0; i < i3451.length; i += 2) {
    i3450.push( new pc.Vec2( i3451[i + 0], i3451[i + 1] ) );
  }
    i3448.push( i3450 );
  }
  i3446.points = i3448
  i3446.enabled = !!i3447[3]
  i3446.isTrigger = !!i3447[4]
  i3446.usedByEffector = !!i3447[5]
  i3446.density = i3447[6]
  i3446.offset = new pc.Vec2( i3447[7], i3447[8] )
  request.r(i3447[9], i3447[10], 0, i3446, 'material')
  return i3446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i3458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i3459 = data
  i3458.usedByComposite = !!i3459[0]
  i3458.autoTiling = !!i3459[1]
  i3458.size = new pc.Vec2( i3459[2], i3459[3] )
  i3458.edgeRadius = i3459[4]
  i3458.enabled = !!i3459[5]
  i3458.isTrigger = !!i3459[6]
  i3458.usedByEffector = !!i3459[7]
  i3458.density = i3459[8]
  i3458.offset = new pc.Vec2( i3459[9], i3459[10] )
  request.r(i3459[11], i3459[12], 0, i3458, 'material')
  return i3458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3461 = data
  request.r(i3461[0], i3461[1], 0, i3460, 'animatorController')
  request.r(i3461[2], i3461[3], 0, i3460, 'avatar')
  i3460.updateMode = i3461[4]
  i3460.hasTransformHierarchy = !!i3461[5]
  i3460.applyRootMotion = !!i3461[6]
  var i3463 = i3461[7]
  var i3462 = []
  for(var i = 0; i < i3463.length; i += 2) {
  request.r(i3463[i + 0], i3463[i + 1], 2, i3462, '')
  }
  i3460.humanBones = i3462
  i3460.enabled = !!i3461[8]
  return i3460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i3466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i3467 = data
  i3466.frontSortingLayerID = i3467[0]
  i3466.frontSortingOrder = i3467[1]
  i3466.backSortingLayerID = i3467[2]
  i3466.backSortingOrder = i3467[3]
  i3466.alphaCutoff = i3467[4]
  request.r(i3467[5], i3467[6], 0, i3466, 'sprite')
  i3466.tileMode = i3467[7]
  i3466.isCustomRangeActive = !!i3467[8]
  i3466.spriteSortPoint = i3467[9]
  i3466.enabled = !!i3467[10]
  request.r(i3467[11], i3467[12], 0, i3466, 'sharedMaterial')
  var i3469 = i3467[13]
  var i3468 = []
  for(var i = 0; i < i3469.length; i += 2) {
  request.r(i3469[i + 0], i3469[i + 1], 2, i3468, '')
  }
  i3466.sharedMaterials = i3468
  i3466.receiveShadows = !!i3467[14]
  i3466.shadowCastingMode = i3467[15]
  i3466.sortingLayerID = i3467[16]
  i3466.sortingOrder = i3467[17]
  i3466.lightmapIndex = i3467[18]
  i3466.lightmapSceneIndex = i3467[19]
  i3466.lightmapScaleOffset = new pc.Vec4( i3467[20], i3467[21], i3467[22], i3467[23] )
  i3466.lightProbeUsage = i3467[24]
  i3466.reflectionProbeUsage = i3467[25]
  return i3466
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i3470 = root || request.c( 'BasicDrag' )
  var i3471 = data
  i3470.canDrag = !!i3471[0]
  i3470.dragByDelta = !!i3471[1]
  i3470.isDragging = !!i3471[2]
  i3470.moveWithPointer = !!i3471[3]
  i3470.canReturn = !!i3471[4]
  i3470.jumpOnReturn = !!i3471[5]
  i3470.returnTime = i3471[6]
  i3470.Tool_Offset = new pc.Vec3( i3471[7], i3471[8], i3471[9] )
  i3470.canScaleIncrease = !!i3471[10]
  i3470.Self_ScaleNew = new pc.Vec3( i3471[11], i3471[12], i3471[13] )
  i3470.canRotateOnPick = !!i3471[14]
  i3470.startRot = new pc.Vec3( i3471[15], i3471[16], i3471[17] )
  i3470.newRot = new pc.Vec3( i3471[18], i3471[19], i3471[20] )
  var i3473 = i3471[21]
  var i3472 = []
  for(var i = 0; i < i3473.length; i += 2) {
  request.r(i3473[i + 0], i3473[i + 1], 2, i3472, '')
  }
  i3470.childSprite = i3472
  request.r(i3471[22], i3471[23], 0, i3470, 'ToolSelectClip')
  request.r(i3471[24], i3471[25], 0, i3470, 'ToolLoopClip')
  request.r(i3471[26], i3471[27], 0, i3470, 'thisParticles')
  i3470.onDragparticle = !!i3471[28]
  request.r(i3471[29], i3471[30], 0, i3470, 'dragParticles')
  request.r(i3471[31], i3471[32], 0, i3470, 'anim')
  i3470.startPos = new pc.Vec3( i3471[33], i3471[34], i3471[35] )
  i3470.startScale = new pc.Vec3( i3471[36], i3471[37], i3471[38] )
  i3470.Vibration = !!i3471[39]
  i3470.isPlacedCannotMove = !!i3471[40]
  i3470.isObjectMovingWhileDragging = !!i3471[41]
  i3470.OnMouseDownEvent = request.d('System.Action', i3471[42], i3470.OnMouseDownEvent)
  i3470.OnMouseUpEvent = request.d('System.Action', i3471[43], i3470.OnMouseUpEvent)
  i3470.ProgStartEvent = request.d('System.Action', i3471[44], i3470.ProgStartEvent)
  i3470.ProgEndEvent = request.d('System.Action', i3471[45], i3470.ProgEndEvent)
  i3470.canCallMouseUpWhenGamePaused = !!i3471[46]
  i3470.ClampX_L = i3471[47]
  i3470.ClampX_H = i3471[48]
  i3470.ClampY_L = i3471[49]
  i3470.ClampY_H = i3471[50]
  i3470.startOrder = i3471[51]
  i3470.dontResetItIsInCollider = !!i3471[52]
  request.r(i3471[53], i3471[54], 0, i3470, 'thisCollider')
  request.r(i3471[55], i3471[56], 0, i3470, 'thisSR')
  i3470.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i3471[57], i3470.OnMouseDownEventIndependentFromCanDrag)
  return i3470
}

Deserializers["System.Action"] = function (request, data, root) {
  var i3474 = root || request.c( 'System.Action' )
  var i3475 = data
  return i3474
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i3476 = root || request.c( 'BD_Progress' )
  var i3477 = data
  var i3479 = i3477[0]
  var i3478 = []
  for(var i = 0; i < i3479.length; i += 1) {
    i3478.push( request.d('ScratchData', i3479[i + 0]) );
  }
  i3476.AllScratches = i3478
  i3476.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i3477[1], i3476.OnScratchComplete)
  i3476.isProgDone = !!i3477[2]
  i3476.canCallComplete = !!i3477[3]
  i3476.CollectiveAppear = !!i3477[4]
  i3476.tipControl = !!i3477[5]
  i3476.progressControl = !!i3477[6]
  request.r(i3477[7], i3477[8], 0, i3476, 'thisDrag')
  i3476.CompleteEvent = request.d('System.Action', i3477[9], i3476.CompleteEvent)
  i3476.SubCompleteEvent = request.d('System.Action', i3477[10], i3476.SubCompleteEvent)
  return i3476
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i3482 = root || request.c( 'ScratchData' )
  var i3483 = data
  request.r(i3483[0], i3483[1], 0, i3482, 'ScratchManager')
  i3482.scratchLimit = i3483[2]
  i3482.isComplete = !!i3483[3]
  return i3482
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3484 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3485 = data
  request.r(i3485[0], i3485[1], 0, i3484, 'm_ObjectArgument')
  i3484.m_ObjectArgumentAssemblyTypeName = i3485[2]
  i3484.m_IntArgument = i3485[3]
  i3484.m_FloatArgument = i3485[4]
  i3484.m_StringArgument = i3485[5]
  i3484.m_BoolArgument = !!i3485[6]
  return i3484
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i3486 = root || request.c( 'BD_Clamp' )
  var i3487 = data
  i3486.ClampX_L = i3487[0]
  i3486.ClampX_H = i3487[1]
  i3486.ClampY_L = i3487[2]
  i3486.ClampY_H = i3487[3]
  return i3486
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i3488 = root || request.c( 'BD_ToolRotate' )
  var i3489 = data
  i3488.startDelay = i3489[0]
  request.r(i3489[1], i3489[2], 0, i3488, 'Tool')
  request.r(i3489[3], i3489[4], 0, i3488, 'Clamp')
  request.r(i3489[5], i3489[6], 0, i3488, 'Pivot')
  i3488.MinAngle = new pc.Vec3( i3489[7], i3489[8], i3489[9] )
  i3488.MaxAngle = new pc.Vec3( i3489[10], i3489[11], i3489[12] )
  i3488.rotationSpeed = i3489[13]
  return i3488
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i3490 = root || request.c( 'BD_CameraFollow' )
  var i3491 = data
  request.r(i3491[0], i3491[1], 0, i3490, 'Tool')
  request.r(i3491[2], i3491[3], 0, i3490, 'Pivot')
  i3490.FOV = i3491[4]
  i3490.Y_L = i3491[5]
  i3490.Y_H = i3491[6]
  i3490.X_L = i3491[7]
  i3490.X_R = i3491[8]
  i3490.startDelay = i3491[9]
  i3490.duration = i3491[10]
  return i3490
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i3492 = root || request.c( 'BD_AnimatorDrag' )
  var i3493 = data
  request.r(i3493[0], i3493[1], 0, i3492, 'BD')
  request.r(i3493[2], i3493[3], 0, i3492, 'anim')
  request.r(i3493[4], i3493[5], 0, i3492, 'Source')
  i3492.Vibration = !!i3493[6]
  i3492.isCompletable = !!i3493[7]
  i3492.completionThreshold = i3493[8]
  i3492.OnComplete = request.d('UnityEngine.Events.UnityEvent', i3493[9], i3492.OnComplete)
  return i3492
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i3494 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i3495 = data
  request.r(i3495[0], i3495[1], 0, i3494, 'm_RootBone')
  var i3497 = i3495[2]
  var i3496 = []
  for(var i = 0; i < i3497.length; i += 2) {
  request.r(i3497[i + 0], i3497[i + 1], 2, i3496, '')
  }
  i3494.m_BoneTransforms = i3496
  i3494.m_AlwaysUpdate = !!i3495[3]
  i3494.m_AutoRebind = !!i3495[4]
  return i3494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i3498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i3499 = data
  i3498.bodyType = i3499[0]
  request.r(i3499[1], i3499[2], 0, i3498, 'material')
  i3498.simulated = !!i3499[3]
  i3498.useAutoMass = !!i3499[4]
  i3498.mass = i3499[5]
  i3498.drag = i3499[6]
  i3498.angularDrag = i3499[7]
  i3498.gravityScale = i3499[8]
  i3498.collisionDetectionMode = i3499[9]
  i3498.sleepMode = i3499[10]
  i3498.constraints = i3499[11]
  return i3498
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i3500 = root || request.c( 'BD_SpriteChange' )
  var i3501 = data
  request.r(i3501[0], i3501[1], 0, i3500, 'BD')
  request.r(i3501[2], i3501[3], 0, i3500, 'SR')
  request.r(i3501[4], i3501[5], 0, i3500, 'Default')
  request.r(i3501[6], i3501[7], 0, i3500, 'Picked')
  i3500.resetOnRelease = !!i3501[8]
  return i3500
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i3502 = root || request.c( 'BD_ProgressHelper' )
  var i3503 = data
  request.r(i3503[0], i3503[1], 0, i3502, 'BD_Progress')
  request.r(i3503[2], i3503[3], 0, i3502, 'fadeSprite')
  i3502.fadeIn = !!i3503[4]
  return i3502
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i3504 = root || request.c( 'DestroyObj' )
  var i3505 = data
  i3504.destroyDelay = i3505[0]
  return i3504
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i3506 = root || request.c( 'MenuLevel' )
  var i3507 = data
  request.r(i3507[0], i3507[1], 0, i3506, 'menuLevelBtnUpdate')
  var i3509 = i3507[2]
  var i3508 = []
  for(var i = 0; i < i3509.length; i += 1) {
    i3508.push( request.d('MenuLevelData', i3509[i + 0]) );
  }
  i3506.AllSteps = i3508
  request.r(i3507[3], i3507[4], 0, i3506, 'buttonparent')
  var i3511 = i3507[5]
  var i3510 = []
  for(var i = 0; i < i3511.length; i += 2) {
  request.r(i3511[i + 0], i3511[i + 1], 2, i3510, '')
  }
  i3506.BtnsDotweenAnims = i3510
  var i3513 = i3507[6]
  var i3512 = []
  for(var i = 0; i < i3513.length; i += 2) {
  request.r(i3513[i + 0], i3513[i + 1], 2, i3512, '')
  }
  i3506.BtnsCols = i3512
  request.r(i3507[7], i3507[8], 0, i3506, 'mainGameView')
  request.r(i3507[9], i3507[10], 0, i3506, 'Storyboard')
  request.r(i3507[11], i3507[12], 0, i3506, 'BgMusic')
  request.r(i3507[13], i3507[14], 0, i3506, 'BgStoryMusic')
  request.r(i3507[15], i3507[16], 0, i3506, 'Hand_Tut1')
  var i3515 = i3507[17]
  var i3514 = []
  for(var i = 0; i < i3515.length; i += 2) {
  request.r(i3515[i + 0], i3515[i + 1], 2, i3514, '')
  }
  i3506.itemEnable_Onstart = i3514
  var i3517 = i3507[18]
  var i3516 = []
  for(var i = 0; i < i3517.length; i += 2) {
  request.r(i3517[i + 0], i3517[i + 1], 2, i3516, '')
  }
  i3506.itemDisable_Onstart = i3516
  var i3519 = i3507[19]
  var i3518 = []
  for(var i = 0; i < i3519.length; i += 2) {
  request.r(i3519[i + 0], i3519[i + 1], 2, i3518, '')
  }
  i3506.itemEnable_Oncomplete = i3518
  var i3521 = i3507[20]
  var i3520 = []
  for(var i = 0; i < i3521.length; i += 2) {
  request.r(i3521[i + 0], i3521[i + 1], 2, i3520, '')
  }
  i3506.itemDisable_Oncomplete = i3520
  i3506.levelKey = i3507[21]
  i3506.revealDirtyHoldTime = i3507[22]
  return i3506
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i3524 = root || request.c( 'MenuLevelData' )
  var i3525 = data
  i3524.Name = i3525[0]
  request.r(i3525[1], i3525[2], 0, i3524, 'UiBtn')
  request.r(i3525[3], i3525[4], 0, i3524, 'TickBtn')
  request.r(i3525[5], i3525[6], 0, i3524, 'ExclamationIcon')
  var i3527 = i3525[7]
  var i3526 = []
  for(var i = 0; i < i3527.length; i += 2) {
  request.r(i3527[i + 0], i3527[i + 1], 2, i3526, '')
  }
  i3524.Item_Dirty = i3526
  var i3529 = i3525[8]
  var i3528 = []
  for(var i = 0; i < i3529.length; i += 2) {
  request.r(i3529[i + 0], i3529[i + 1], 2, i3528, '')
  }
  i3524.Item_Clean = i3528
  request.r(i3525[9], i3525[10], 0, i3524, 'CompleteParticle')
  return i3524
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i3536 = root || request.c( 'Level_PoseController' )
  var i3537 = data
  var i3539 = i3537[0]
  var i3538 = []
  for(var i = 0; i < i3539.length; i += 2) {
  request.r(i3539[i + 0], i3539[i + 1], 2, i3538, '')
  }
  i3536.itemToShow = i3538
  var i3541 = i3537[1]
  var i3540 = []
  for(var i = 0; i < i3541.length; i += 2) {
  request.r(i3541[i + 0], i3541[i + 1], 2, i3540, '')
  }
  i3536.itemToHide = i3540
  i3536.stepTarget = i3537[2]
  return i3536
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3542 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3543 = data
  i3542.targetIsSelf = !!i3543[0]
  request.r(i3543[1], i3543[2], 0, i3542, 'targetGO')
  i3542.tweenTargetIsTargetGO = !!i3543[3]
  i3542.delay = i3543[4]
  i3542.duration = i3543[5]
  i3542.easeType = i3543[6]
  i3542.easeCurve = new pc.AnimationCurve( { keys_flow: i3543[7] } )
  i3542.loopType = i3543[8]
  i3542.loops = i3543[9]
  i3542.id = i3543[10]
  i3542.isRelative = !!i3543[11]
  i3542.isFrom = !!i3543[12]
  i3542.isIndependentUpdate = !!i3543[13]
  i3542.autoKill = !!i3543[14]
  i3542.autoGenerate = !!i3543[15]
  i3542.isActive = !!i3543[16]
  i3542.isValid = !!i3543[17]
  request.r(i3543[18], i3543[19], 0, i3542, 'target')
  i3542.animationType = i3543[20]
  i3542.targetType = i3543[21]
  i3542.forcedTargetType = i3543[22]
  i3542.autoPlay = !!i3543[23]
  i3542.useTargetAsV3 = !!i3543[24]
  i3542.endValueFloat = i3543[25]
  i3542.endValueV3 = new pc.Vec3( i3543[26], i3543[27], i3543[28] )
  i3542.endValueV2 = new pc.Vec2( i3543[29], i3543[30] )
  i3542.endValueColor = new pc.Color(i3543[31], i3543[32], i3543[33], i3543[34])
  i3542.endValueString = i3543[35]
  i3542.endValueRect = UnityEngine.Rect.MinMaxRect(i3543[36], i3543[37], i3543[38], i3543[39])
  request.r(i3543[40], i3543[41], 0, i3542, 'endValueTransform')
  i3542.optionalBool0 = !!i3543[42]
  i3542.optionalBool1 = !!i3543[43]
  i3542.optionalFloat0 = i3543[44]
  i3542.optionalInt0 = i3543[45]
  i3542.optionalRotationMode = i3543[46]
  i3542.optionalScrambleMode = i3543[47]
  i3542.optionalShakeRandomnessMode = i3543[48]
  i3542.optionalString = i3543[49]
  i3542.updateType = i3543[50]
  i3542.isSpeedBased = !!i3543[51]
  i3542.hasOnStart = !!i3543[52]
  i3542.hasOnPlay = !!i3543[53]
  i3542.hasOnUpdate = !!i3543[54]
  i3542.hasOnStepComplete = !!i3543[55]
  i3542.hasOnComplete = !!i3543[56]
  i3542.hasOnTweenCreated = !!i3543[57]
  i3542.hasOnRewind = !!i3543[58]
  i3542.onStart = request.d('UnityEngine.Events.UnityEvent', i3543[59], i3542.onStart)
  i3542.onPlay = request.d('UnityEngine.Events.UnityEvent', i3543[60], i3542.onPlay)
  i3542.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3543[61], i3542.onUpdate)
  i3542.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3543[62], i3542.onStepComplete)
  i3542.onComplete = request.d('UnityEngine.Events.UnityEvent', i3543[63], i3542.onComplete)
  i3542.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3543[64], i3542.onTweenCreated)
  i3542.onRewind = request.d('UnityEngine.Events.UnityEvent', i3543[65], i3542.onRewind)
  return i3542
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i3544 = root || request.c( 'SpriteButton' )
  var i3545 = data
  i3544.isLocked = !!i3545[0]
  i3544.lockMsg = i3545[1]
  i3544.onClick = request.d('UnityEngine.Events.UnityEvent', i3545[2], i3544.onClick)
  i3544.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i3545[3], i3544.onLockedClick)
  i3544.isLevelBtnSfx = !!i3545[4]
  request.r(i3545[5], i3545[6], 0, i3544, 'pivot')
  i3544.reductionChange = i3545[7]
  i3544.animationDuration = i3545[8]
  return i3544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3547 = data
  i3546.name = i3547[0]
  i3546.atlasId = i3547[1]
  i3546.mipmapCount = i3547[2]
  i3546.hdr = !!i3547[3]
  i3546.size = i3547[4]
  i3546.anisoLevel = i3547[5]
  i3546.filterMode = i3547[6]
  var i3549 = i3547[7]
  var i3548 = []
  for(var i = 0; i < i3549.length; i += 4) {
    i3548.push( UnityEngine.Rect.MinMaxRect(i3549[i + 0], i3549[i + 1], i3549[i + 2], i3549[i + 3]) );
  }
  i3546.rects = i3548
  i3546.wrapU = i3547[8]
  i3546.wrapV = i3547[9]
  return i3546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3553 = data
  i3552.name = i3553[0]
  i3552.index = i3553[1]
  i3552.startup = !!i3553[2]
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3555 = data
  i3554.aspect = i3555[0]
  i3554.orthographic = !!i3555[1]
  i3554.orthographicSize = i3555[2]
  i3554.backgroundColor = new pc.Color(i3555[3], i3555[4], i3555[5], i3555[6])
  i3554.nearClipPlane = i3555[7]
  i3554.farClipPlane = i3555[8]
  i3554.fieldOfView = i3555[9]
  i3554.depth = i3555[10]
  i3554.clearFlags = i3555[11]
  i3554.cullingMask = i3555[12]
  i3554.rect = i3555[13]
  request.r(i3555[14], i3555[15], 0, i3554, 'targetTexture')
  i3554.usePhysicalProperties = !!i3555[16]
  i3554.focalLength = i3555[17]
  i3554.sensorSize = new pc.Vec2( i3555[18], i3555[19] )
  i3554.lensShift = new pc.Vec2( i3555[20], i3555[21] )
  i3554.gateFit = i3555[22]
  i3554.commandBufferCount = i3555[23]
  i3554.cameraType = i3555[24]
  i3554.enabled = !!i3555[25]
  return i3554
}

Deserializers["CameraController"] = function (request, data, root) {
  var i3556 = root || request.c( 'CameraController' )
  var i3557 = data
  request.r(i3557[0], i3557[1], 0, i3556, 'cam')
  i3556.defaultPosition = new pc.Vec3( i3557[2], i3557[3], i3557[4] )
  i3556.defaultSize = i3557[5]
  i3556.defaultFOV = i3557[6]
  i3556.defaultDuration = i3557[7]
  i3556.defaultEase = i3557[8]
  return i3556
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i3558 = root || request.c( 'MusicSource' )
  var i3559 = data
  request.r(i3559[0], i3559[1], 0, i3558, 'source')
  return i3558
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i3560 = root || request.c( 'UI_Manager' )
  var i3561 = data
  i3560.levelCompleted = !!i3561[0]
  i3560.isPauseActive = !!i3561[1]
  i3560.loadIndex = i3561[2]
  request.r(i3561[3], i3561[4], 0, i3560, 'removeAdsButton')
  request.r(i3561[5], i3561[6], 0, i3560, 'pauseButton')
  request.r(i3561[7], i3561[8], 0, i3560, 'Fade_Img')
  request.r(i3561[9], i3561[10], 0, i3560, 'TopBarAnim')
  request.r(i3561[11], i3561[12], 0, i3560, 'MainPanel')
  request.r(i3561[13], i3561[14], 0, i3560, 'PausePanel')
  request.r(i3561[15], i3561[16], 0, i3560, 'PausePopUp')
  request.r(i3561[17], i3561[18], 0, i3560, 'PauseCanvasGroup')
  request.r(i3561[19], i3561[20], 0, i3560, 'RateUsPanel')
  request.r(i3561[21], i3561[22], 0, i3560, 'RateUsPopUp')
  request.r(i3561[23], i3561[24], 0, i3560, 'RemoveAdsPanel')
  request.r(i3561[25], i3561[26], 0, i3560, 'RemoveAdsPopUp')
  request.r(i3561[27], i3561[28], 0, i3560, 'RemoveAdsCanvasGroup')
  var i3563 = i3561[29]
  var i3562 = []
  for(var i = 0; i < i3563.length; i += 2) {
  request.r(i3563[i + 0], i3563[i + 1], 2, i3562, '')
  }
  i3560.RemoveAdsAnims = i3562
  request.r(i3561[30], i3561[31], 0, i3560, 'CompletePanel')
  request.r(i3561[32], i3561[33], 0, i3560, 'LevelIcon')
  request.r(i3561[34], i3561[35], 0, i3560, 'CompleteParticles')
  request.r(i3561[36], i3561[37], 0, i3560, 'progressBar')
  request.r(i3561[38], i3561[39], 0, i3560, 'progressText')
  request.r(i3561[40], i3561[41], 0, i3560, 'toolIcon1')
  request.r(i3561[42], i3561[43], 0, i3560, 'toolIcon2')
  request.r(i3561[44], i3561[45], 0, i3560, 'toolIcon3')
  request.r(i3561[46], i3561[47], 0, i3560, 'target1')
  request.r(i3561[48], i3561[49], 0, i3560, 'target2')
  i3560.toolMoveDuration = i3561[50]
  i3560.currentIndex = i3561[51]
  var i3565 = i3561[52]
  var i3564 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3565.length; i += 2) {
  request.r(i3565[i + 0], i3565[i + 1], 1, i3564, '')
  }
  i3560.allTools = i3564
  request.r(i3561[53], i3561[54], 0, i3560, 'clockProgress')
  request.r(i3561[55], i3561[56], 0, i3560, 'clockProgressFill')
  request.r(i3561[57], i3561[58], 0, i3560, 'clockAudio')
  i3560.moveDistance = i3561[59]
  i3560.animationDuration = i3561[60]
  i3560.greyBgChildName = i3561[61]
  i3560.pushOffset = i3561[62]
  return i3560
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i3566 = root || request.c( 'GameManagerPlayable' )
  var i3567 = data
  request.r(i3567[0], i3567[1], 0, i3566, 'endParticles')
  request.r(i3567[2], i3567[3], 0, i3566, 'stepCompleteParticles')
  request.r(i3567[4], i3567[5], 0, i3566, 'DefaultMat')
  request.r(i3567[6], i3567[7], 0, i3566, 'BG_Music')
  request.r(i3567[8], i3567[9], 0, i3566, 'restoreEffectShader')
  request.r(i3567[10], i3567[11], 0, i3566, 'stickerEffectShader')
  i3566.isComplete = !!i3567[12]
  i3566.isPaused = !!i3567[13]
  request.r(i3567[14], i3567[15], 0, i3566, 'currentLevel')
  i3566.startLevelOnPlay = !!i3567[16]
  i3566.currentLevelNo = i3567[17]
  return i3566
}

Deserializers["AudioController"] = function (request, data, root) {
  var i3568 = root || request.c( 'AudioController' )
  var i3569 = data
  request.r(i3569[0], i3569[1], 0, i3568, 'MainMixer')
  request.r(i3569[2], i3569[3], 0, i3568, 'UiClick')
  request.r(i3569[4], i3569[5], 0, i3568, 'UiClickSource')
  var i3571 = i3569[6]
  var i3570 = []
  for(var i = 0; i < i3571.length; i += 2) {
  request.r(i3571[i + 0], i3571[i + 1], 2, i3570, '')
  }
  i3568.SfxSources = i3570
  var i3573 = i3569[7]
  var i3572 = []
  for(var i = 0; i < i3573.length; i += 2) {
  request.r(i3573[i + 0], i3573[i + 1], 2, i3572, '')
  }
  i3568.AllClips = i3572
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3577 = data
  i3576.pivot = new pc.Vec2( i3577[0], i3577[1] )
  i3576.anchorMin = new pc.Vec2( i3577[2], i3577[3] )
  i3576.anchorMax = new pc.Vec2( i3577[4], i3577[5] )
  i3576.sizeDelta = new pc.Vec2( i3577[6], i3577[7] )
  i3576.anchoredPosition3D = new pc.Vec3( i3577[8], i3577[9], i3577[10] )
  i3576.rotation = new pc.Quat(i3577[11], i3577[12], i3577[13], i3577[14])
  i3576.scale = new pc.Vec3( i3577[15], i3577[16], i3577[17] )
  return i3576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3579 = data
  i3578.planeDistance = i3579[0]
  i3578.referencePixelsPerUnit = i3579[1]
  i3578.isFallbackOverlay = !!i3579[2]
  i3578.renderMode = i3579[3]
  i3578.renderOrder = i3579[4]
  i3578.sortingLayerName = i3579[5]
  i3578.sortingOrder = i3579[6]
  i3578.scaleFactor = i3579[7]
  request.r(i3579[8], i3579[9], 0, i3578, 'worldCamera')
  i3578.overrideSorting = !!i3579[10]
  i3578.pixelPerfect = !!i3579[11]
  i3578.targetDisplay = i3579[12]
  i3578.overridePixelPerfect = !!i3579[13]
  i3578.enabled = !!i3579[14]
  return i3578
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3580 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3581 = data
  i3580.m_UiScaleMode = i3581[0]
  i3580.m_ReferencePixelsPerUnit = i3581[1]
  i3580.m_ScaleFactor = i3581[2]
  i3580.m_ReferenceResolution = new pc.Vec2( i3581[3], i3581[4] )
  i3580.m_ScreenMatchMode = i3581[5]
  i3580.m_MatchWidthOrHeight = i3581[6]
  i3580.m_PhysicalUnit = i3581[7]
  i3580.m_FallbackScreenDPI = i3581[8]
  i3580.m_DefaultSpriteDPI = i3581[9]
  i3580.m_DynamicPixelsPerUnit = i3581[10]
  i3580.m_PresetInfoIsWorld = !!i3581[11]
  return i3580
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3582 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3583 = data
  i3582.m_IgnoreReversedGraphics = !!i3583[0]
  i3582.m_BlockingObjects = i3583[1]
  i3582.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3583[2] )
  return i3582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3585 = data
  i3584.cullTransparentMesh = !!i3585[0]
  return i3584
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3586 = root || request.c( 'UnityEngine.UI.Image' )
  var i3587 = data
  request.r(i3587[0], i3587[1], 0, i3586, 'm_Sprite')
  i3586.m_Type = i3587[2]
  i3586.m_PreserveAspect = !!i3587[3]
  i3586.m_FillCenter = !!i3587[4]
  i3586.m_FillMethod = i3587[5]
  i3586.m_FillAmount = i3587[6]
  i3586.m_FillClockwise = !!i3587[7]
  i3586.m_FillOrigin = i3587[8]
  i3586.m_UseSpriteMesh = !!i3587[9]
  i3586.m_PixelsPerUnitMultiplier = i3587[10]
  request.r(i3587[11], i3587[12], 0, i3586, 'm_Material')
  i3586.m_Maskable = !!i3587[13]
  i3586.m_Color = new pc.Color(i3587[14], i3587[15], i3587[16], i3587[17])
  i3586.m_RaycastTarget = !!i3587[18]
  i3586.m_RaycastPadding = new pc.Vec4( i3587[19], i3587[20], i3587[21], i3587[22] )
  return i3586
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3588 = root || request.c( 'UnityEngine.UI.Text' )
  var i3589 = data
  i3588.m_FontData = request.d('UnityEngine.UI.FontData', i3589[0], i3588.m_FontData)
  i3588.m_Text = i3589[1]
  request.r(i3589[2], i3589[3], 0, i3588, 'm_Material')
  i3588.m_Maskable = !!i3589[4]
  i3588.m_Color = new pc.Color(i3589[5], i3589[6], i3589[7], i3589[8])
  i3588.m_RaycastTarget = !!i3589[9]
  i3588.m_RaycastPadding = new pc.Vec4( i3589[10], i3589[11], i3589[12], i3589[13] )
  return i3588
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3590 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3591 = data
  request.r(i3591[0], i3591[1], 0, i3590, 'm_Font')
  i3590.m_FontSize = i3591[2]
  i3590.m_FontStyle = i3591[3]
  i3590.m_BestFit = !!i3591[4]
  i3590.m_MinSize = i3591[5]
  i3590.m_MaxSize = i3591[6]
  i3590.m_Alignment = i3591[7]
  i3590.m_AlignByGeometry = !!i3591[8]
  i3590.m_RichText = !!i3591[9]
  i3590.m_HorizontalOverflow = i3591[10]
  i3590.m_VerticalOverflow = i3591[11]
  i3590.m_LineSpacing = i3591[12]
  return i3590
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3592 = root || request.c( 'UnityEngine.UI.Button' )
  var i3593 = data
  i3592.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3593[0], i3592.m_OnClick)
  i3592.m_Navigation = request.d('UnityEngine.UI.Navigation', i3593[1], i3592.m_Navigation)
  i3592.m_Transition = i3593[2]
  i3592.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3593[3], i3592.m_Colors)
  i3592.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3593[4], i3592.m_SpriteState)
  i3592.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3593[5], i3592.m_AnimationTriggers)
  i3592.m_Interactable = !!i3593[6]
  request.r(i3593[7], i3593[8], 0, i3592, 'm_TargetGraphic')
  return i3592
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3594 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3595 = data
  i3594.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3595[0], i3594.m_PersistentCalls)
  return i3594
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3596 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3597 = data
  i3596.m_Mode = i3597[0]
  i3596.m_WrapAround = !!i3597[1]
  request.r(i3597[2], i3597[3], 0, i3596, 'm_SelectOnUp')
  request.r(i3597[4], i3597[5], 0, i3596, 'm_SelectOnDown')
  request.r(i3597[6], i3597[7], 0, i3596, 'm_SelectOnLeft')
  request.r(i3597[8], i3597[9], 0, i3596, 'm_SelectOnRight')
  return i3596
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3598 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3599 = data
  i3598.m_NormalColor = new pc.Color(i3599[0], i3599[1], i3599[2], i3599[3])
  i3598.m_HighlightedColor = new pc.Color(i3599[4], i3599[5], i3599[6], i3599[7])
  i3598.m_PressedColor = new pc.Color(i3599[8], i3599[9], i3599[10], i3599[11])
  i3598.m_SelectedColor = new pc.Color(i3599[12], i3599[13], i3599[14], i3599[15])
  i3598.m_DisabledColor = new pc.Color(i3599[16], i3599[17], i3599[18], i3599[19])
  i3598.m_ColorMultiplier = i3599[20]
  i3598.m_FadeDuration = i3599[21]
  return i3598
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3600 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3601 = data
  request.r(i3601[0], i3601[1], 0, i3600, 'm_HighlightedSprite')
  request.r(i3601[2], i3601[3], 0, i3600, 'm_PressedSprite')
  request.r(i3601[4], i3601[5], 0, i3600, 'm_SelectedSprite')
  request.r(i3601[6], i3601[7], 0, i3600, 'm_DisabledSprite')
  return i3600
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3602 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3603 = data
  i3602.m_NormalTrigger = i3603[0]
  i3602.m_HighlightedTrigger = i3603[1]
  i3602.m_PressedTrigger = i3603[2]
  i3602.m_SelectedTrigger = i3603[3]
  i3602.m_DisabledTrigger = i3603[4]
  return i3602
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i3604 = root || request.c( 'PlayableHudRuntime' )
  var i3605 = data
  return i3604
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3606 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3607 = data
  request.r(i3607[0], i3607[1], 0, i3606, 'm_FirstSelected')
  i3606.m_sendNavigationEvents = !!i3607[2]
  i3606.m_DragThreshold = i3607[3]
  return i3606
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3608 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3609 = data
  i3608.m_HorizontalAxis = i3609[0]
  i3608.m_VerticalAxis = i3609[1]
  i3608.m_SubmitButton = i3609[2]
  i3608.m_CancelButton = i3609[3]
  i3608.m_InputActionsPerSecond = i3609[4]
  i3608.m_RepeatDelay = i3609[5]
  i3608.m_ForceModuleActive = !!i3609[6]
  i3608.m_SendPointerHoverToParent = !!i3609[7]
  return i3608
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i3610 = root || request.c( 'PlayableRouter' )
  var i3611 = data
  var i3613 = i3611[0]
  var i3612 = []
  for(var i = 0; i < i3613.length; i += 2) {
  request.r(i3613[i + 0], i3613[i + 1], 2, i3612, '')
  }
  i3610.menuObjects = i3612
  var i3615 = i3611[1]
  var i3614 = []
  for(var i = 0; i < i3615.length; i += 2) {
  request.r(i3615[i + 0], i3615[i + 1], 2, i3614, '')
  }
  i3610.gameplayObjects = i3614
  var i3617 = i3611[2]
  var i3616 = []
  for(var i = 0; i < i3617.length; i += 1) {
    i3616.push( request.d('PlayableRouter+SubLevelSlot', i3617[i + 0]) );
  }
  i3610.subLevels = i3616
  i3610.fadeDuration = i3611[3]
  i3610.lockedMessage = i3611[4]
  i3610.lockedTapsToCTA = i3611[5]
  return i3610
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i3620 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i3621 = data
  request.r(i3621[0], i3621[1], 0, i3620, 'button')
  request.r(i3621[2], i3621[3], 0, i3620, 'level')
  return i3620
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i3622 = root || request.c( 'ToastManager' )
  var i3623 = data
  request.r(i3623[0], i3623[1], 0, i3622, 'toastPanel')
  request.r(i3623[2], i3623[3], 0, i3622, 'toastPopup')
  request.r(i3623[4], i3623[5], 0, i3622, 'canvasGroup')
  request.r(i3623[6], i3623[7], 0, i3622, 'toastText')
  i3622.startY = i3623[8]
  i3622.visibleY = i3623[9]
  i3622.endY = i3623[10]
  i3622.animationTime = i3623[11]
  i3622.animationTimeUp = i3623[12]
  return i3622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3625 = data
  i3624.m_Alpha = i3625[0]
  i3624.m_Interactable = !!i3625[1]
  i3624.m_BlocksRaycasts = !!i3625[2]
  i3624.m_IgnoreParentGroups = !!i3625[3]
  i3624.enabled = !!i3625[4]
  return i3624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3627 = data
  i3626.ambientIntensity = i3627[0]
  i3626.reflectionIntensity = i3627[1]
  i3626.ambientMode = i3627[2]
  i3626.ambientLight = new pc.Color(i3627[3], i3627[4], i3627[5], i3627[6])
  i3626.ambientSkyColor = new pc.Color(i3627[7], i3627[8], i3627[9], i3627[10])
  i3626.ambientGroundColor = new pc.Color(i3627[11], i3627[12], i3627[13], i3627[14])
  i3626.ambientEquatorColor = new pc.Color(i3627[15], i3627[16], i3627[17], i3627[18])
  i3626.fogColor = new pc.Color(i3627[19], i3627[20], i3627[21], i3627[22])
  i3626.fogEndDistance = i3627[23]
  i3626.fogStartDistance = i3627[24]
  i3626.fogDensity = i3627[25]
  i3626.fog = !!i3627[26]
  request.r(i3627[27], i3627[28], 0, i3626, 'skybox')
  i3626.fogMode = i3627[29]
  var i3629 = i3627[30]
  var i3628 = []
  for(var i = 0; i < i3629.length; i += 1) {
    i3628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3629[i + 0]) );
  }
  i3626.lightmaps = i3628
  i3626.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3627[31], i3626.lightProbes)
  i3626.lightmapsMode = i3627[32]
  i3626.mixedBakeMode = i3627[33]
  i3626.environmentLightingMode = i3627[34]
  i3626.ambientProbe = new pc.SphericalHarmonicsL2(i3627[35])
  request.r(i3627[36], i3627[37], 0, i3626, 'customReflection')
  request.r(i3627[38], i3627[39], 0, i3626, 'defaultReflection')
  i3626.defaultReflectionMode = i3627[40]
  i3626.defaultReflectionResolution = i3627[41]
  i3626.sunLightObjectId = i3627[42]
  i3626.pixelLightCount = i3627[43]
  i3626.defaultReflectionHDR = !!i3627[44]
  i3626.hasLightDataAsset = !!i3627[45]
  i3626.hasManualGenerate = !!i3627[46]
  return i3626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3633 = data
  request.r(i3633[0], i3633[1], 0, i3632, 'lightmapColor')
  request.r(i3633[2], i3633[3], 0, i3632, 'lightmapDirection')
  request.r(i3633[4], i3633[5], 0, i3632, 'shadowMask')
  return i3632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3634 = root || new UnityEngine.LightProbes()
  var i3635 = data
  return i3634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3643 = data
  var i3645 = i3643[0]
  var i3644 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3645.length; i += 1) {
    i3644.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3645[i + 0]));
  }
  i3642.ShaderCompilationErrors = i3644
  i3642.name = i3643[1]
  i3642.guid = i3643[2]
  var i3647 = i3643[3]
  var i3646 = []
  for(var i = 0; i < i3647.length; i += 1) {
    i3646.push( i3647[i + 0] );
  }
  i3642.shaderDefinedKeywords = i3646
  var i3649 = i3643[4]
  var i3648 = []
  for(var i = 0; i < i3649.length; i += 1) {
    i3648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3649[i + 0]) );
  }
  i3642.passes = i3648
  var i3651 = i3643[5]
  var i3650 = []
  for(var i = 0; i < i3651.length; i += 1) {
    i3650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3651[i + 0]) );
  }
  i3642.usePasses = i3650
  var i3653 = i3643[6]
  var i3652 = []
  for(var i = 0; i < i3653.length; i += 1) {
    i3652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3653[i + 0]) );
  }
  i3642.defaultParameterValues = i3652
  request.r(i3643[7], i3643[8], 0, i3642, 'unityFallbackShader')
  i3642.readDepth = !!i3643[9]
  i3642.hasDepthOnlyPass = !!i3643[10]
  i3642.isCreatedByShaderGraph = !!i3643[11]
  i3642.disableBatching = !!i3643[12]
  i3642.compiled = !!i3643[13]
  return i3642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3657 = data
  i3656.shaderName = i3657[0]
  i3656.errorMessage = i3657[1]
  return i3656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3662 = root || new pc.UnityShaderPass()
  var i3663 = data
  i3662.id = i3663[0]
  i3662.subShaderIndex = i3663[1]
  i3662.name = i3663[2]
  i3662.passType = i3663[3]
  i3662.grabPassTextureName = i3663[4]
  i3662.usePass = !!i3663[5]
  i3662.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3663[6], i3662.zTest)
  i3662.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3663[7], i3662.zWrite)
  i3662.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3663[8], i3662.culling)
  i3662.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3663[9], i3662.blending)
  i3662.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3663[10], i3662.alphaBlending)
  i3662.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3663[11], i3662.colorWriteMask)
  i3662.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3663[12], i3662.offsetUnits)
  i3662.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3663[13], i3662.offsetFactor)
  i3662.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3663[14], i3662.stencilRef)
  i3662.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3663[15], i3662.stencilReadMask)
  i3662.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3663[16], i3662.stencilWriteMask)
  i3662.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3663[17], i3662.stencilOp)
  i3662.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3663[18], i3662.stencilOpFront)
  i3662.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3663[19], i3662.stencilOpBack)
  var i3665 = i3663[20]
  var i3664 = []
  for(var i = 0; i < i3665.length; i += 1) {
    i3664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3665[i + 0]) );
  }
  i3662.tags = i3664
  var i3667 = i3663[21]
  var i3666 = []
  for(var i = 0; i < i3667.length; i += 1) {
    i3666.push( i3667[i + 0] );
  }
  i3662.passDefinedKeywords = i3666
  var i3669 = i3663[22]
  var i3668 = []
  for(var i = 0; i < i3669.length; i += 1) {
    i3668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3669[i + 0]) );
  }
  i3662.passDefinedKeywordGroups = i3668
  var i3671 = i3663[23]
  var i3670 = []
  for(var i = 0; i < i3671.length; i += 1) {
    i3670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3671[i + 0]) );
  }
  i3662.variants = i3670
  var i3673 = i3663[24]
  var i3672 = []
  for(var i = 0; i < i3673.length; i += 1) {
    i3672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3673[i + 0]) );
  }
  i3662.excludedVariants = i3672
  i3662.hasDepthReader = !!i3663[25]
  return i3662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3675 = data
  i3674.val = i3675[0]
  i3674.name = i3675[1]
  return i3674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3677 = data
  i3676.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3677[0], i3676.src)
  i3676.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3677[1], i3676.dst)
  i3676.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3677[2], i3676.op)
  return i3676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3679 = data
  i3678.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3679[0], i3678.pass)
  i3678.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3679[1], i3678.fail)
  i3678.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3679[2], i3678.zFail)
  i3678.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3679[3], i3678.comp)
  return i3678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3683 = data
  i3682.name = i3683[0]
  i3682.value = i3683[1]
  return i3682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3687 = data
  var i3689 = i3687[0]
  var i3688 = []
  for(var i = 0; i < i3689.length; i += 1) {
    i3688.push( i3689[i + 0] );
  }
  i3686.keywords = i3688
  i3686.hasDiscard = !!i3687[1]
  return i3686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3693 = data
  i3692.passId = i3693[0]
  i3692.subShaderIndex = i3693[1]
  var i3695 = i3693[2]
  var i3694 = []
  for(var i = 0; i < i3695.length; i += 1) {
    i3694.push( i3695[i + 0] );
  }
  i3692.keywords = i3694
  i3692.vertexProgram = i3693[3]
  i3692.fragmentProgram = i3693[4]
  i3692.exportedForWebGl2 = !!i3693[5]
  i3692.readDepth = !!i3693[6]
  return i3692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3699 = data
  request.r(i3699[0], i3699[1], 0, i3698, 'shader')
  i3698.pass = i3699[2]
  return i3698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3703 = data
  i3702.name = i3703[0]
  i3702.type = i3703[1]
  i3702.value = new pc.Vec4( i3703[2], i3703[3], i3703[4], i3703[5] )
  i3702.textureValue = i3703[6]
  i3702.shaderPropertyFlag = i3703[7]
  return i3702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3705 = data
  i3704.name = i3705[0]
  request.r(i3705[1], i3705[2], 0, i3704, 'texture')
  i3704.aabb = i3705[3]
  i3704.vertices = i3705[4]
  i3704.triangles = i3705[5]
  i3704.textureRect = UnityEngine.Rect.MinMaxRect(i3705[6], i3705[7], i3705[8], i3705[9])
  i3704.packedRect = UnityEngine.Rect.MinMaxRect(i3705[10], i3705[11], i3705[12], i3705[13])
  i3704.border = new pc.Vec4( i3705[14], i3705[15], i3705[16], i3705[17] )
  i3704.transparency = i3705[18]
  i3704.bounds = i3705[19]
  i3704.pixelsPerUnit = i3705[20]
  i3704.textureWidth = i3705[21]
  i3704.textureHeight = i3705[22]
  i3704.nativeSize = new pc.Vec2( i3705[23], i3705[24] )
  i3704.pivot = new pc.Vec2( i3705[25], i3705[26] )
  i3704.textureRectOffset = new pc.Vec2( i3705[27], i3705[28] )
  return i3704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3707 = data
  i3706.name = i3707[0]
  return i3706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3709 = data
  i3708.name = i3709[0]
  i3708.wrapMode = i3709[1]
  i3708.isLooping = !!i3709[2]
  i3708.length = i3709[3]
  var i3711 = i3709[4]
  var i3710 = []
  for(var i = 0; i < i3711.length; i += 1) {
    i3710.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3711[i + 0]) );
  }
  i3708.curves = i3710
  var i3713 = i3709[5]
  var i3712 = []
  for(var i = 0; i < i3713.length; i += 1) {
    i3712.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3713[i + 0]) );
  }
  i3708.events = i3712
  i3708.halfPrecision = !!i3709[6]
  i3708._frameRate = i3709[7]
  i3708.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3709[8], i3708.localBounds)
  i3708.hasMuscleCurves = !!i3709[9]
  var i3715 = i3709[10]
  var i3714 = []
  for(var i = 0; i < i3715.length; i += 1) {
    i3714.push( i3715[i + 0] );
  }
  i3708.clipMuscleConstant = i3714
  i3708.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3709[11], i3708.clipBindingConstant)
  return i3708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3719 = data
  i3718.path = i3719[0]
  i3718.hash = i3719[1]
  i3718.componentType = i3719[2]
  i3718.property = i3719[3]
  i3718.keys = i3719[4]
  var i3721 = i3719[5]
  var i3720 = []
  for(var i = 0; i < i3721.length; i += 1) {
    i3720.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3721[i + 0]) );
  }
  i3718.objectReferenceKeys = i3720
  return i3718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3725 = data
  i3724.time = i3725[0]
  request.r(i3725[1], i3725[2], 0, i3724, 'value')
  return i3724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3729 = data
  i3728.functionName = i3729[0]
  i3728.floatParameter = i3729[1]
  i3728.intParameter = i3729[2]
  i3728.stringParameter = i3729[3]
  request.r(i3729[4], i3729[5], 0, i3728, 'objectReferenceParameter')
  i3728.time = i3729[6]
  return i3728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3731 = data
  i3730.center = new pc.Vec3( i3731[0], i3731[1], i3731[2] )
  i3730.extends = new pc.Vec3( i3731[3], i3731[4], i3731[5] )
  return i3730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3735 = data
  var i3737 = i3735[0]
  var i3736 = []
  for(var i = 0; i < i3737.length; i += 1) {
    i3736.push( i3737[i + 0] );
  }
  i3734.genericBindings = i3736
  var i3739 = i3735[1]
  var i3738 = []
  for(var i = 0; i < i3739.length; i += 1) {
    i3738.push( i3739[i + 0] );
  }
  i3734.pptrCurveMapping = i3738
  return i3734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3741 = data
  i3740.name = i3741[0]
  i3740.ascent = i3741[1]
  i3740.originalLineHeight = i3741[2]
  i3740.fontSize = i3741[3]
  var i3743 = i3741[4]
  var i3742 = []
  for(var i = 0; i < i3743.length; i += 1) {
    i3742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3743[i + 0]) );
  }
  i3740.characterInfo = i3742
  request.r(i3741[5], i3741[6], 0, i3740, 'texture')
  i3740.originalFontSize = i3741[7]
  return i3740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3747 = data
  i3746.index = i3747[0]
  i3746.advance = i3747[1]
  i3746.bearing = i3747[2]
  i3746.glyphWidth = i3747[3]
  i3746.glyphHeight = i3747[4]
  i3746.minX = i3747[5]
  i3746.maxX = i3747[6]
  i3746.minY = i3747[7]
  i3746.maxY = i3747[8]
  i3746.uvBottomLeftX = i3747[9]
  i3746.uvBottomLeftY = i3747[10]
  i3746.uvBottomRightX = i3747[11]
  i3746.uvBottomRightY = i3747[12]
  i3746.uvTopLeftX = i3747[13]
  i3746.uvTopLeftY = i3747[14]
  i3746.uvTopRightX = i3747[15]
  i3746.uvTopRightY = i3747[16]
  return i3746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3749 = data
  i3748.name = i3749[0]
  var i3751 = i3749[1]
  var i3750 = []
  for(var i = 0; i < i3751.length; i += 1) {
    i3750.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3751[i + 0]) );
  }
  i3748.layers = i3750
  var i3753 = i3749[2]
  var i3752 = []
  for(var i = 0; i < i3753.length; i += 1) {
    i3752.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3753[i + 0]) );
  }
  i3748.parameters = i3752
  i3748.animationClips = i3749[3]
  i3748.avatarUnsupported = i3749[4]
  return i3748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3757 = data
  i3756.name = i3757[0]
  i3756.defaultWeight = i3757[1]
  i3756.blendingMode = i3757[2]
  i3756.avatarMask = i3757[3]
  i3756.syncedLayerIndex = i3757[4]
  i3756.syncedLayerAffectsTiming = !!i3757[5]
  i3756.syncedLayers = i3757[6]
  i3756.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3757[7], i3756.stateMachine)
  return i3756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3759 = data
  i3758.id = i3759[0]
  i3758.name = i3759[1]
  i3758.path = i3759[2]
  var i3761 = i3759[3]
  var i3760 = []
  for(var i = 0; i < i3761.length; i += 1) {
    i3760.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3761[i + 0]) );
  }
  i3758.states = i3760
  var i3763 = i3759[4]
  var i3762 = []
  for(var i = 0; i < i3763.length; i += 1) {
    i3762.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3763[i + 0]) );
  }
  i3758.machines = i3762
  var i3765 = i3759[5]
  var i3764 = []
  for(var i = 0; i < i3765.length; i += 1) {
    i3764.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3765[i + 0]) );
  }
  i3758.entryStateTransitions = i3764
  var i3767 = i3759[6]
  var i3766 = []
  for(var i = 0; i < i3767.length; i += 1) {
    i3766.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3767[i + 0]) );
  }
  i3758.exitStateTransitions = i3766
  var i3769 = i3759[7]
  var i3768 = []
  for(var i = 0; i < i3769.length; i += 1) {
    i3768.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3769[i + 0]) );
  }
  i3758.anyStateTransitions = i3768
  i3758.defaultStateId = i3759[8]
  return i3758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3773 = data
  i3772.id = i3773[0]
  i3772.name = i3773[1]
  i3772.cycleOffset = i3773[2]
  i3772.cycleOffsetParameter = i3773[3]
  i3772.cycleOffsetParameterActive = !!i3773[4]
  i3772.mirror = !!i3773[5]
  i3772.mirrorParameter = i3773[6]
  i3772.mirrorParameterActive = !!i3773[7]
  i3772.motionId = i3773[8]
  i3772.nameHash = i3773[9]
  i3772.fullPathHash = i3773[10]
  i3772.speed = i3773[11]
  i3772.speedParameter = i3773[12]
  i3772.speedParameterActive = !!i3773[13]
  i3772.tag = i3773[14]
  i3772.tagHash = i3773[15]
  i3772.writeDefaultValues = !!i3773[16]
  var i3775 = i3773[17]
  var i3774 = []
  for(var i = 0; i < i3775.length; i += 2) {
  request.r(i3775[i + 0], i3775[i + 1], 2, i3774, '')
  }
  i3772.behaviours = i3774
  var i3777 = i3773[18]
  var i3776 = []
  for(var i = 0; i < i3777.length; i += 1) {
    i3776.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3777[i + 0]) );
  }
  i3772.transitions = i3776
  return i3772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3783 = data
  i3782.fullPath = i3783[0]
  i3782.canTransitionToSelf = !!i3783[1]
  i3782.duration = i3783[2]
  i3782.exitTime = i3783[3]
  i3782.hasExitTime = !!i3783[4]
  i3782.hasFixedDuration = !!i3783[5]
  i3782.interruptionSource = i3783[6]
  i3782.offset = i3783[7]
  i3782.orderedInterruption = !!i3783[8]
  i3782.destinationStateId = i3783[9]
  i3782.isExit = !!i3783[10]
  i3782.mute = !!i3783[11]
  i3782.solo = !!i3783[12]
  var i3785 = i3783[13]
  var i3784 = []
  for(var i = 0; i < i3785.length; i += 1) {
    i3784.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3785[i + 0]) );
  }
  i3782.conditions = i3784
  return i3782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3791 = data
  i3790.destinationStateId = i3791[0]
  i3790.isExit = !!i3791[1]
  i3790.mute = !!i3791[2]
  i3790.solo = !!i3791[3]
  var i3793 = i3791[4]
  var i3792 = []
  for(var i = 0; i < i3793.length; i += 1) {
    i3792.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3793[i + 0]) );
  }
  i3790.conditions = i3792
  return i3790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3797 = data
  i3796.mode = i3797[0]
  i3796.parameter = i3797[1]
  i3796.threshold = i3797[2]
  return i3796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3801 = data
  i3800.defaultBool = !!i3801[0]
  i3800.defaultFloat = i3801[1]
  i3800.defaultInt = i3801[2]
  i3800.name = i3801[3]
  i3800.nameHash = i3801[4]
  i3800.type = i3801[5]
  return i3800
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3802 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3803 = data
  i3802.useSafeMode = !!i3803[0]
  i3802.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3803[1], i3802.safeModeOptions)
  i3802.timeScale = i3803[2]
  i3802.unscaledTimeScale = i3803[3]
  i3802.useSmoothDeltaTime = !!i3803[4]
  i3802.maxSmoothUnscaledTime = i3803[5]
  i3802.rewindCallbackMode = i3803[6]
  i3802.showUnityEditorReport = !!i3803[7]
  i3802.logBehaviour = i3803[8]
  i3802.drawGizmos = !!i3803[9]
  i3802.defaultRecyclable = !!i3803[10]
  i3802.defaultAutoPlay = i3803[11]
  i3802.defaultUpdateType = i3803[12]
  i3802.defaultTimeScaleIndependent = !!i3803[13]
  i3802.defaultEaseType = i3803[14]
  i3802.defaultEaseOvershootOrAmplitude = i3803[15]
  i3802.defaultEasePeriod = i3803[16]
  i3802.defaultAutoKill = !!i3803[17]
  i3802.defaultLoopType = i3803[18]
  i3802.debugMode = !!i3803[19]
  i3802.debugStoreTargetId = !!i3803[20]
  i3802.showPreviewPanel = !!i3803[21]
  i3802.storeSettingsLocation = i3803[22]
  i3802.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3803[23], i3802.modules)
  i3802.createASMDEF = !!i3803[24]
  i3802.showPlayingTweens = !!i3803[25]
  i3802.showPausedTweens = !!i3803[26]
  return i3802
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3804 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3805 = data
  i3804.logBehaviour = i3805[0]
  i3804.nestedTweenFailureBehaviour = i3805[1]
  return i3804
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3806 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3807 = data
  i3806.showPanel = !!i3807[0]
  i3806.audioEnabled = !!i3807[1]
  i3806.physicsEnabled = !!i3807[2]
  i3806.physics2DEnabled = !!i3807[3]
  i3806.spriteEnabled = !!i3807[4]
  i3806.uiEnabled = !!i3807[5]
  i3806.textMeshProEnabled = !!i3807[6]
  i3806.tk2DEnabled = !!i3807[7]
  i3806.deAudioEnabled = !!i3807[8]
  i3806.deUnityExtendedEnabled = !!i3807[9]
  i3806.epoOutlineEnabled = !!i3807[10]
  return i3806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3809 = data
  var i3811 = i3809[0]
  var i3810 = []
  for(var i = 0; i < i3811.length; i += 1) {
    i3810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3811[i + 0]) );
  }
  i3808.files = i3810
  i3808.componentToPrefabIds = i3809[1]
  return i3808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3815 = data
  i3814.path = i3815[0]
  request.r(i3815[1], i3815[2], 0, i3814, 'unityObject')
  return i3814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3817 = data
  var i3819 = i3817[0]
  var i3818 = []
  for(var i = 0; i < i3819.length; i += 1) {
    i3818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3819[i + 0]) );
  }
  i3816.scriptsExecutionOrder = i3818
  var i3821 = i3817[1]
  var i3820 = []
  for(var i = 0; i < i3821.length; i += 1) {
    i3820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3821[i + 0]) );
  }
  i3816.sortingLayers = i3820
  var i3823 = i3817[2]
  var i3822 = []
  for(var i = 0; i < i3823.length; i += 1) {
    i3822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3823[i + 0]) );
  }
  i3816.cullingLayers = i3822
  i3816.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3817[3], i3816.timeSettings)
  i3816.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3817[4], i3816.physicsSettings)
  i3816.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3817[5], i3816.physics2DSettings)
  i3816.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3817[6], i3816.qualitySettings)
  i3816.enableRealtimeShadows = !!i3817[7]
  i3816.enableAutoInstancing = !!i3817[8]
  i3816.enableStaticBatching = !!i3817[9]
  i3816.enableDynamicBatching = !!i3817[10]
  i3816.usePreservativeDynamicBatching = !!i3817[11]
  i3816.lightmapEncodingQuality = i3817[12]
  i3816.desiredColorSpace = i3817[13]
  var i3825 = i3817[14]
  var i3824 = []
  for(var i = 0; i < i3825.length; i += 1) {
    i3824.push( i3825[i + 0] );
  }
  i3816.allTags = i3824
  return i3816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3829 = data
  i3828.name = i3829[0]
  i3828.value = i3829[1]
  return i3828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3833 = data
  i3832.id = i3833[0]
  i3832.name = i3833[1]
  i3832.value = i3833[2]
  return i3832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3837 = data
  i3836.id = i3837[0]
  i3836.name = i3837[1]
  return i3836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3839 = data
  i3838.fixedDeltaTime = i3839[0]
  i3838.maximumDeltaTime = i3839[1]
  i3838.timeScale = i3839[2]
  i3838.maximumParticleTimestep = i3839[3]
  return i3838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3841 = data
  i3840.gravity = new pc.Vec3( i3841[0], i3841[1], i3841[2] )
  i3840.defaultSolverIterations = i3841[3]
  i3840.bounceThreshold = i3841[4]
  i3840.autoSyncTransforms = !!i3841[5]
  i3840.autoSimulation = !!i3841[6]
  var i3843 = i3841[7]
  var i3842 = []
  for(var i = 0; i < i3843.length; i += 1) {
    i3842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3843[i + 0]) );
  }
  i3840.collisionMatrix = i3842
  return i3840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3847 = data
  i3846.enabled = !!i3847[0]
  i3846.layerId = i3847[1]
  i3846.otherLayerId = i3847[2]
  return i3846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3849 = data
  request.r(i3849[0], i3849[1], 0, i3848, 'material')
  i3848.gravity = new pc.Vec2( i3849[2], i3849[3] )
  i3848.positionIterations = i3849[4]
  i3848.velocityIterations = i3849[5]
  i3848.velocityThreshold = i3849[6]
  i3848.maxLinearCorrection = i3849[7]
  i3848.maxAngularCorrection = i3849[8]
  i3848.maxTranslationSpeed = i3849[9]
  i3848.maxRotationSpeed = i3849[10]
  i3848.baumgarteScale = i3849[11]
  i3848.baumgarteTOIScale = i3849[12]
  i3848.timeToSleep = i3849[13]
  i3848.linearSleepTolerance = i3849[14]
  i3848.angularSleepTolerance = i3849[15]
  i3848.defaultContactOffset = i3849[16]
  i3848.autoSimulation = !!i3849[17]
  i3848.queriesHitTriggers = !!i3849[18]
  i3848.queriesStartInColliders = !!i3849[19]
  i3848.callbacksOnDisable = !!i3849[20]
  i3848.reuseCollisionCallbacks = !!i3849[21]
  i3848.autoSyncTransforms = !!i3849[22]
  var i3851 = i3849[23]
  var i3850 = []
  for(var i = 0; i < i3851.length; i += 1) {
    i3850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3851[i + 0]) );
  }
  i3848.collisionMatrix = i3850
  return i3848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3855 = data
  i3854.enabled = !!i3855[0]
  i3854.layerId = i3855[1]
  i3854.otherLayerId = i3855[2]
  return i3854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3857 = data
  var i3859 = i3857[0]
  var i3858 = []
  for(var i = 0; i < i3859.length; i += 1) {
    i3858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3859[i + 0]) );
  }
  i3856.qualityLevels = i3858
  var i3861 = i3857[1]
  var i3860 = []
  for(var i = 0; i < i3861.length; i += 1) {
    i3860.push( i3861[i + 0] );
  }
  i3856.names = i3860
  i3856.shadows = i3857[2]
  i3856.anisotropicFiltering = i3857[3]
  i3856.antiAliasing = i3857[4]
  i3856.lodBias = i3857[5]
  i3856.shadowCascades = i3857[6]
  i3856.shadowDistance = i3857[7]
  i3856.shadowmaskMode = i3857[8]
  i3856.shadowProjection = i3857[9]
  i3856.shadowResolution = i3857[10]
  i3856.softParticles = !!i3857[11]
  i3856.softVegetation = !!i3857[12]
  i3856.activeColorSpace = i3857[13]
  i3856.desiredColorSpace = i3857[14]
  i3856.masterTextureLimit = i3857[15]
  i3856.maxQueuedFrames = i3857[16]
  i3856.particleRaycastBudget = i3857[17]
  i3856.pixelLightCount = i3857[18]
  i3856.realtimeReflectionProbes = !!i3857[19]
  i3856.shadowCascade2Split = i3857[20]
  i3856.shadowCascade4Split = new pc.Vec3( i3857[21], i3857[22], i3857[23] )
  i3856.streamingMipmapsActive = !!i3857[24]
  i3856.vSyncCount = i3857[25]
  i3856.asyncUploadBufferSize = i3857[26]
  i3856.asyncUploadTimeSlice = i3857[27]
  i3856.billboardsFaceCameraPosition = !!i3857[28]
  i3856.shadowNearPlaneOffset = i3857[29]
  i3856.streamingMipmapsMemoryBudget = i3857[30]
  i3856.maximumLODLevel = i3857[31]
  i3856.streamingMipmapsAddAllCameras = !!i3857[32]
  i3856.streamingMipmapsMaxLevelReduction = i3857[33]
  i3856.streamingMipmapsRenderersPerFrame = i3857[34]
  i3856.resolutionScalingFixedDPIFactor = i3857[35]
  i3856.streamingMipmapsMaxFileIORequests = i3857[36]
  i3856.currentQualityLevel = i3857[37]
  return i3856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i3864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i3865 = data
  var i3867 = i3865[0]
  var i3866 = []
  for(var i = 0; i < i3867.length; i += 1) {
    i3866.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i3867[i + 0]) );
  }
  i3864.groups = i3866
  var i3869 = i3865[1]
  var i3868 = []
  for(var i = 0; i < i3869.length; i += 1) {
    i3868.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i3869[i + 0]) );
  }
  i3864.snapshots = i3868
  return i3864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i3872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i3873 = data
  i3872.id = i3873[0]
  i3872.childGroupIds = i3873[1]
  i3872.name = i3873[2]
  return i3872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i3876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i3877 = data
  i3876.id = i3877[0]
  var i3879 = i3877[1]
  var i3878 = []
  for(var i = 0; i < i3879.length; i += 1) {
    i3878.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i3879[i + 0]) );
  }
  i3876.parameters = i3878
  return i3876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i3882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i3883 = data
  i3882.name = i3883[0]
  i3882.value = i3883[1]
  return i3882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3887 = data
  i3886.weight = i3887[0]
  i3886.vertices = i3887[1]
  i3886.normals = i3887[2]
  i3886.tangents = i3887[3]
  return i3886
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[77],"78":[44],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[35],"88":[35],"89":[35],"90":[35],"91":[35],"92":[35],"93":[35],"94":[35],"95":[35],"96":[35],"97":[35],"98":[35],"99":[35],"100":[44],"101":[102],"103":[104],"105":[104],"55":[49],"106":[107],"108":[12],"109":[26],"110":[12],"111":[112],"113":[112],"114":[40],"42":[26],"115":[12],"34":[12],"116":[49],"117":[49],"58":[55],"50":[59,49],"118":[49],"57":[55],"119":[49],"120":[49],"121":[49],"122":[49],"123":[49],"124":[49],"125":[49],"126":[49],"127":[49],"128":[59,49],"129":[49],"130":[49],"131":[49],"132":[49],"51":[59,49],"133":[49],"134":[63],"135":[63],"64":[63],"136":[63],"137":[44],"138":[44]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level3_Crown_Playable","UnityEngine.GameObject","BasicDrag","BD_CameraFollow","UnityEngine.SpriteRenderer","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","PlayParticlesOnCollision","UnityEngine.CircleCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.PolygonCollider2D","UnityEngine.BoxCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SpriteMask","BD_Progress","BD_Clamp","BD_ToolRotate","BD_AnimatorDrag","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.Rigidbody2D","BD_SpriteChange","BD_ProgressHelper","DestroyObj","MenuLevel","DG.Tweening.DOTweenAnimation","Level_PoseController","SpriteButton","PlayableRouter","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "8.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "28Aug2026_Level_3_1_Step_1to3";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1665";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4494";

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

Deserializers.buildID = "804a1fb9-7d9d-4649-bdc3-6930e35ba632";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

