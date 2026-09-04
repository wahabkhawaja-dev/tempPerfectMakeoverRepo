var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3234 = root || request.c( 'UnityEngine.JointSpring' )
  var i3235 = data
  i3234.spring = i3235[0]
  i3234.damper = i3235[1]
  i3234.targetPosition = i3235[2]
  return i3234
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3236 = root || request.c( 'UnityEngine.JointMotor' )
  var i3237 = data
  i3236.m_TargetVelocity = i3237[0]
  i3236.m_Force = i3237[1]
  i3236.m_FreeSpin = i3237[2]
  return i3236
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3238 = root || request.c( 'UnityEngine.JointLimits' )
  var i3239 = data
  i3238.m_Min = i3239[0]
  i3238.m_Max = i3239[1]
  i3238.m_Bounciness = i3239[2]
  i3238.m_BounceMinVelocity = i3239[3]
  i3238.m_ContactDistance = i3239[4]
  i3238.minBounce = i3239[5]
  i3238.maxBounce = i3239[6]
  return i3238
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3240 = root || request.c( 'UnityEngine.JointDrive' )
  var i3241 = data
  i3240.m_PositionSpring = i3241[0]
  i3240.m_PositionDamper = i3241[1]
  i3240.m_MaximumForce = i3241[2]
  i3240.m_UseAcceleration = i3241[3]
  return i3240
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3242 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3243 = data
  i3242.m_Spring = i3243[0]
  i3242.m_Damper = i3243[1]
  return i3242
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3244 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3245 = data
  i3244.m_Limit = i3245[0]
  i3244.m_Bounciness = i3245[1]
  i3244.m_ContactDistance = i3245[2]
  return i3244
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3246 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3247 = data
  i3246.m_ExtremumSlip = i3247[0]
  i3246.m_ExtremumValue = i3247[1]
  i3246.m_AsymptoteSlip = i3247[2]
  i3246.m_AsymptoteValue = i3247[3]
  i3246.m_Stiffness = i3247[4]
  return i3246
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3248 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3249 = data
  i3248.m_LowerAngle = i3249[0]
  i3248.m_UpperAngle = i3249[1]
  return i3248
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3250 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3251 = data
  i3250.m_MotorSpeed = i3251[0]
  i3250.m_MaximumMotorTorque = i3251[1]
  return i3250
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3252 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3253 = data
  i3252.m_DampingRatio = i3253[0]
  i3252.m_Frequency = i3253[1]
  i3252.m_Angle = i3253[2]
  return i3252
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3254 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3255 = data
  i3254.m_LowerTranslation = i3255[0]
  i3254.m_UpperTranslation = i3255[1]
  return i3254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3256 = root || new pc.UnityMaterial()
  var i3257 = data
  i3256.name = i3257[0]
  request.r(i3257[1], i3257[2], 0, i3256, 'shader')
  i3256.renderQueue = i3257[3]
  i3256.enableInstancing = !!i3257[4]
  var i3259 = i3257[5]
  var i3258 = []
  for(var i = 0; i < i3259.length; i += 1) {
    i3258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3259[i + 0]) );
  }
  i3256.floatParameters = i3258
  var i3261 = i3257[6]
  var i3260 = []
  for(var i = 0; i < i3261.length; i += 1) {
    i3260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3261[i + 0]) );
  }
  i3256.colorParameters = i3260
  var i3263 = i3257[7]
  var i3262 = []
  for(var i = 0; i < i3263.length; i += 1) {
    i3262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3263[i + 0]) );
  }
  i3256.vectorParameters = i3262
  var i3265 = i3257[8]
  var i3264 = []
  for(var i = 0; i < i3265.length; i += 1) {
    i3264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3265[i + 0]) );
  }
  i3256.textureParameters = i3264
  var i3267 = i3257[9]
  var i3266 = []
  for(var i = 0; i < i3267.length; i += 1) {
    i3266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3267[i + 0]) );
  }
  i3256.materialFlags = i3266
  return i3256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3271 = data
  i3270.name = i3271[0]
  i3270.value = i3271[1]
  return i3270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3275 = data
  i3274.name = i3275[0]
  i3274.value = new pc.Color(i3275[1], i3275[2], i3275[3], i3275[4])
  return i3274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3279 = data
  i3278.name = i3279[0]
  i3278.value = new pc.Vec4( i3279[1], i3279[2], i3279[3], i3279[4] )
  return i3278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3283 = data
  i3282.name = i3283[0]
  request.r(i3283[1], i3283[2], 0, i3282, 'value')
  return i3282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3287 = data
  i3286.name = i3287[0]
  i3286.enabled = !!i3287[1]
  return i3286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3289 = data
  i3288.name = i3289[0]
  i3288.width = i3289[1]
  i3288.height = i3289[2]
  i3288.mipmapCount = i3289[3]
  i3288.anisoLevel = i3289[4]
  i3288.filterMode = i3289[5]
  i3288.hdr = !!i3289[6]
  i3288.format = i3289[7]
  i3288.wrapMode = i3289[8]
  i3288.alphaIsTransparency = !!i3289[9]
  i3288.alphaSource = i3289[10]
  i3288.graphicsFormat = i3289[11]
  i3288.sRGBTexture = !!i3289[12]
  i3288.desiredColorSpace = i3289[13]
  i3288.wrapU = i3289[14]
  i3288.wrapV = i3289[15]
  return i3288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3291 = data
  i3290.name = i3291[0]
  i3290.halfPrecision = !!i3291[1]
  i3290.useSimplification = !!i3291[2]
  i3290.useUInt32IndexFormat = !!i3291[3]
  i3290.vertexCount = i3291[4]
  i3290.aabb = i3291[5]
  var i3293 = i3291[6]
  var i3292 = []
  for(var i = 0; i < i3293.length; i += 1) {
    i3292.push( !!i3293[i + 0] );
  }
  i3290.streams = i3292
  i3290.vertices = i3291[7]
  var i3295 = i3291[8]
  var i3294 = []
  for(var i = 0; i < i3295.length; i += 1) {
    i3294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3295[i + 0]) );
  }
  i3290.subMeshes = i3294
  var i3297 = i3291[9]
  var i3296 = []
  for(var i = 0; i < i3297.length; i += 16) {
    i3296.push( new pc.Mat4().setData(i3297[i + 0], i3297[i + 1], i3297[i + 2], i3297[i + 3],  i3297[i + 4], i3297[i + 5], i3297[i + 6], i3297[i + 7],  i3297[i + 8], i3297[i + 9], i3297[i + 10], i3297[i + 11],  i3297[i + 12], i3297[i + 13], i3297[i + 14], i3297[i + 15]) );
  }
  i3290.bindposes = i3296
  var i3299 = i3291[10]
  var i3298 = []
  for(var i = 0; i < i3299.length; i += 1) {
    i3298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3299[i + 0]) );
  }
  i3290.blendShapes = i3298
  return i3290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3305 = data
  i3304.triangles = i3305[0]
  return i3304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3311 = data
  i3310.name = i3311[0]
  var i3313 = i3311[1]
  var i3312 = []
  for(var i = 0; i < i3313.length; i += 1) {
    i3312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3313[i + 0]) );
  }
  i3310.frames = i3312
  return i3310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3315 = data
  i3314.position = new pc.Vec3( i3315[0], i3315[1], i3315[2] )
  i3314.scale = new pc.Vec3( i3315[3], i3315[4], i3315[5] )
  i3314.rotation = new pc.Quat(i3315[6], i3315[7], i3315[8], i3315[9])
  return i3314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3317 = data
  i3316.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3317[0], i3316.main)
  i3316.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3317[1], i3316.colorBySpeed)
  i3316.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3317[2], i3316.colorOverLifetime)
  i3316.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3317[3], i3316.emission)
  i3316.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3317[4], i3316.rotationBySpeed)
  i3316.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3317[5], i3316.rotationOverLifetime)
  i3316.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3317[6], i3316.shape)
  i3316.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3317[7], i3316.sizeBySpeed)
  i3316.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3317[8], i3316.sizeOverLifetime)
  i3316.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3317[9], i3316.textureSheetAnimation)
  i3316.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3317[10], i3316.velocityOverLifetime)
  i3316.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3317[11], i3316.noise)
  i3316.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3317[12], i3316.inheritVelocity)
  i3316.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3317[13], i3316.forceOverLifetime)
  i3316.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3317[14], i3316.limitVelocityOverLifetime)
  i3316.useAutoRandomSeed = !!i3317[15]
  i3316.randomSeed = i3317[16]
  return i3316
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3318 = root || new pc.ParticleSystemMain()
  var i3319 = data
  i3318.duration = i3319[0]
  i3318.loop = !!i3319[1]
  i3318.prewarm = !!i3319[2]
  i3318.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[3], i3318.startDelay)
  i3318.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[4], i3318.startLifetime)
  i3318.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[5], i3318.startSpeed)
  i3318.startSize3D = !!i3319[6]
  i3318.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[7], i3318.startSizeX)
  i3318.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[8], i3318.startSizeY)
  i3318.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[9], i3318.startSizeZ)
  i3318.startRotation3D = !!i3319[10]
  i3318.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[11], i3318.startRotationX)
  i3318.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[12], i3318.startRotationY)
  i3318.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[13], i3318.startRotationZ)
  i3318.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3319[14], i3318.startColor)
  i3318.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3319[15], i3318.gravityModifier)
  i3318.simulationSpace = i3319[16]
  request.r(i3319[17], i3319[18], 0, i3318, 'customSimulationSpace')
  i3318.simulationSpeed = i3319[19]
  i3318.useUnscaledTime = !!i3319[20]
  i3318.scalingMode = i3319[21]
  i3318.playOnAwake = !!i3319[22]
  i3318.maxParticles = i3319[23]
  i3318.emitterVelocityMode = i3319[24]
  i3318.stopAction = i3319[25]
  return i3318
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3320 = root || new pc.MinMaxCurve()
  var i3321 = data
  i3320.mode = i3321[0]
  i3320.curveMin = new pc.AnimationCurve( { keys_flow: i3321[1] } )
  i3320.curveMax = new pc.AnimationCurve( { keys_flow: i3321[2] } )
  i3320.curveMultiplier = i3321[3]
  i3320.constantMin = i3321[4]
  i3320.constantMax = i3321[5]
  return i3320
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3322 = root || new pc.MinMaxGradient()
  var i3323 = data
  i3322.mode = i3323[0]
  i3322.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3323[1], i3322.gradientMin)
  i3322.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3323[2], i3322.gradientMax)
  i3322.colorMin = new pc.Color(i3323[3], i3323[4], i3323[5], i3323[6])
  i3322.colorMax = new pc.Color(i3323[7], i3323[8], i3323[9], i3323[10])
  return i3322
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3325 = data
  i3324.mode = i3325[0]
  var i3327 = i3325[1]
  var i3326 = []
  for(var i = 0; i < i3327.length; i += 1) {
    i3326.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3327[i + 0]) );
  }
  i3324.colorKeys = i3326
  var i3329 = i3325[2]
  var i3328 = []
  for(var i = 0; i < i3329.length; i += 1) {
    i3328.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3329[i + 0]) );
  }
  i3324.alphaKeys = i3328
  return i3324
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3330 = root || new pc.ParticleSystemColorBySpeed()
  var i3331 = data
  i3330.enabled = !!i3331[0]
  i3330.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3331[1], i3330.color)
  i3330.range = new pc.Vec2( i3331[2], i3331[3] )
  return i3330
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3335 = data
  i3334.color = new pc.Color(i3335[0], i3335[1], i3335[2], i3335[3])
  i3334.time = i3335[4]
  return i3334
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3339 = data
  i3338.alpha = i3339[0]
  i3338.time = i3339[1]
  return i3338
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3340 = root || new pc.ParticleSystemColorOverLifetime()
  var i3341 = data
  i3340.enabled = !!i3341[0]
  i3340.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3341[1], i3340.color)
  return i3340
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3342 = root || new pc.ParticleSystemEmitter()
  var i3343 = data
  i3342.enabled = !!i3343[0]
  i3342.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3343[1], i3342.rateOverTime)
  i3342.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3343[2], i3342.rateOverDistance)
  var i3345 = i3343[3]
  var i3344 = []
  for(var i = 0; i < i3345.length; i += 1) {
    i3344.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3345[i + 0]) );
  }
  i3342.bursts = i3344
  return i3342
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3348 = root || new pc.ParticleSystemBurst()
  var i3349 = data
  i3348.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3349[0], i3348.count)
  i3348.cycleCount = i3349[1]
  i3348.minCount = i3349[2]
  i3348.maxCount = i3349[3]
  i3348.repeatInterval = i3349[4]
  i3348.time = i3349[5]
  return i3348
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3350 = root || new pc.ParticleSystemRotationBySpeed()
  var i3351 = data
  i3350.enabled = !!i3351[0]
  i3350.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[1], i3350.x)
  i3350.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[2], i3350.y)
  i3350.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3351[3], i3350.z)
  i3350.separateAxes = !!i3351[4]
  i3350.range = new pc.Vec2( i3351[5], i3351[6] )
  return i3350
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3352 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3353 = data
  i3352.enabled = !!i3353[0]
  i3352.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3353[1], i3352.x)
  i3352.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3353[2], i3352.y)
  i3352.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3353[3], i3352.z)
  i3352.separateAxes = !!i3353[4]
  return i3352
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3354 = root || new pc.ParticleSystemShape()
  var i3355 = data
  i3354.enabled = !!i3355[0]
  i3354.shapeType = i3355[1]
  i3354.randomDirectionAmount = i3355[2]
  i3354.sphericalDirectionAmount = i3355[3]
  i3354.randomPositionAmount = i3355[4]
  i3354.alignToDirection = !!i3355[5]
  i3354.radius = i3355[6]
  i3354.radiusMode = i3355[7]
  i3354.radiusSpread = i3355[8]
  i3354.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3355[9], i3354.radiusSpeed)
  i3354.radiusThickness = i3355[10]
  i3354.angle = i3355[11]
  i3354.length = i3355[12]
  i3354.boxThickness = new pc.Vec3( i3355[13], i3355[14], i3355[15] )
  i3354.meshShapeType = i3355[16]
  request.r(i3355[17], i3355[18], 0, i3354, 'mesh')
  request.r(i3355[19], i3355[20], 0, i3354, 'meshRenderer')
  request.r(i3355[21], i3355[22], 0, i3354, 'skinnedMeshRenderer')
  i3354.useMeshMaterialIndex = !!i3355[23]
  i3354.meshMaterialIndex = i3355[24]
  i3354.useMeshColors = !!i3355[25]
  i3354.normalOffset = i3355[26]
  i3354.arc = i3355[27]
  i3354.arcMode = i3355[28]
  i3354.arcSpread = i3355[29]
  i3354.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3355[30], i3354.arcSpeed)
  i3354.donutRadius = i3355[31]
  i3354.position = new pc.Vec3( i3355[32], i3355[33], i3355[34] )
  i3354.rotation = new pc.Vec3( i3355[35], i3355[36], i3355[37] )
  i3354.scale = new pc.Vec3( i3355[38], i3355[39], i3355[40] )
  return i3354
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3356 = root || new pc.ParticleSystemSizeBySpeed()
  var i3357 = data
  i3356.enabled = !!i3357[0]
  i3356.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3357[1], i3356.x)
  i3356.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3357[2], i3356.y)
  i3356.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3357[3], i3356.z)
  i3356.separateAxes = !!i3357[4]
  i3356.range = new pc.Vec2( i3357[5], i3357[6] )
  return i3356
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3358 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3359 = data
  i3358.enabled = !!i3359[0]
  i3358.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[1], i3358.x)
  i3358.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[2], i3358.y)
  i3358.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3359[3], i3358.z)
  i3358.separateAxes = !!i3359[4]
  return i3358
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3360 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3361 = data
  i3360.enabled = !!i3361[0]
  i3360.mode = i3361[1]
  i3360.animation = i3361[2]
  i3360.numTilesX = i3361[3]
  i3360.numTilesY = i3361[4]
  i3360.useRandomRow = !!i3361[5]
  i3360.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3361[6], i3360.frameOverTime)
  i3360.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3361[7], i3360.startFrame)
  i3360.cycleCount = i3361[8]
  i3360.rowIndex = i3361[9]
  i3360.flipU = i3361[10]
  i3360.flipV = i3361[11]
  i3360.spriteCount = i3361[12]
  var i3363 = i3361[13]
  var i3362 = []
  for(var i = 0; i < i3363.length; i += 2) {
  request.r(i3363[i + 0], i3363[i + 1], 2, i3362, '')
  }
  i3360.sprites = i3362
  return i3360
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3366 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3367 = data
  i3366.enabled = !!i3367[0]
  i3366.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3367[1], i3366.x)
  i3366.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3367[2], i3366.y)
  i3366.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3367[3], i3366.z)
  i3366.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3367[4], i3366.radial)
  i3366.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3367[5], i3366.speedModifier)
  i3366.space = i3367[6]
  i3366.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3367[7], i3366.orbitalX)
  i3366.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3367[8], i3366.orbitalY)
  i3366.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3367[9], i3366.orbitalZ)
  i3366.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3367[10], i3366.orbitalOffsetX)
  i3366.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3367[11], i3366.orbitalOffsetY)
  i3366.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3367[12], i3366.orbitalOffsetZ)
  return i3366
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3368 = root || new pc.ParticleSystemNoise()
  var i3369 = data
  i3368.enabled = !!i3369[0]
  i3368.separateAxes = !!i3369[1]
  i3368.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[2], i3368.strengthX)
  i3368.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[3], i3368.strengthY)
  i3368.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[4], i3368.strengthZ)
  i3368.frequency = i3369[5]
  i3368.damping = !!i3369[6]
  i3368.octaveCount = i3369[7]
  i3368.octaveMultiplier = i3369[8]
  i3368.octaveScale = i3369[9]
  i3368.quality = i3369[10]
  i3368.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[11], i3368.scrollSpeed)
  i3368.scrollSpeedMultiplier = i3369[12]
  i3368.remapEnabled = !!i3369[13]
  i3368.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[14], i3368.remapX)
  i3368.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[15], i3368.remapY)
  i3368.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[16], i3368.remapZ)
  i3368.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[17], i3368.positionAmount)
  i3368.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[18], i3368.rotationAmount)
  i3368.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3369[19], i3368.sizeAmount)
  return i3368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3370 = root || new pc.ParticleSystemInheritVelocity()
  var i3371 = data
  i3370.enabled = !!i3371[0]
  i3370.mode = i3371[1]
  i3370.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3371[2], i3370.curve)
  return i3370
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3372 = root || new pc.ParticleSystemForceOverLifetime()
  var i3373 = data
  i3372.enabled = !!i3373[0]
  i3372.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3373[1], i3372.x)
  i3372.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3373[2], i3372.y)
  i3372.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3373[3], i3372.z)
  i3372.space = i3373[4]
  i3372.randomized = !!i3373[5]
  return i3372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3374 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3375 = data
  i3374.enabled = !!i3375[0]
  i3374.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3375[1], i3374.limit)
  i3374.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3375[2], i3374.limitX)
  i3374.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3375[3], i3374.limitY)
  i3374.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3375[4], i3374.limitZ)
  i3374.dampen = i3375[5]
  i3374.separateAxes = !!i3375[6]
  i3374.space = i3375[7]
  i3374.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3375[8], i3374.drag)
  i3374.multiplyDragByParticleSize = !!i3375[9]
  i3374.multiplyDragByParticleVelocity = !!i3375[10]
  return i3374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3377 = data
  request.r(i3377[0], i3377[1], 0, i3376, 'mesh')
  i3376.meshCount = i3377[2]
  i3376.activeVertexStreamsCount = i3377[3]
  i3376.alignment = i3377[4]
  i3376.renderMode = i3377[5]
  i3376.sortMode = i3377[6]
  i3376.lengthScale = i3377[7]
  i3376.velocityScale = i3377[8]
  i3376.cameraVelocityScale = i3377[9]
  i3376.normalDirection = i3377[10]
  i3376.sortingFudge = i3377[11]
  i3376.minParticleSize = i3377[12]
  i3376.maxParticleSize = i3377[13]
  i3376.pivot = new pc.Vec3( i3377[14], i3377[15], i3377[16] )
  request.r(i3377[17], i3377[18], 0, i3376, 'trailMaterial')
  i3376.applyActiveColorSpace = !!i3377[19]
  i3376.enabled = !!i3377[20]
  request.r(i3377[21], i3377[22], 0, i3376, 'sharedMaterial')
  var i3379 = i3377[23]
  var i3378 = []
  for(var i = 0; i < i3379.length; i += 2) {
  request.r(i3379[i + 0], i3379[i + 1], 2, i3378, '')
  }
  i3376.sharedMaterials = i3378
  i3376.receiveShadows = !!i3377[24]
  i3376.shadowCastingMode = i3377[25]
  i3376.sortingLayerID = i3377[26]
  i3376.sortingOrder = i3377[27]
  i3376.lightmapIndex = i3377[28]
  i3376.lightmapSceneIndex = i3377[29]
  i3376.lightmapScaleOffset = new pc.Vec4( i3377[30], i3377[31], i3377[32], i3377[33] )
  i3376.lightProbeUsage = i3377[34]
  i3376.reflectionProbeUsage = i3377[35]
  return i3376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3383 = data
  i3382.name = i3383[0]
  i3382.tagId = i3383[1]
  i3382.enabled = !!i3383[2]
  i3382.isStatic = !!i3383[3]
  i3382.layer = i3383[4]
  return i3382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3385 = data
  i3384.pivot = new pc.Vec2( i3385[0], i3385[1] )
  i3384.anchorMin = new pc.Vec2( i3385[2], i3385[3] )
  i3384.anchorMax = new pc.Vec2( i3385[4], i3385[5] )
  i3384.sizeDelta = new pc.Vec2( i3385[6], i3385[7] )
  i3384.anchoredPosition3D = new pc.Vec3( i3385[8], i3385[9], i3385[10] )
  i3384.rotation = new pc.Quat(i3385[11], i3385[12], i3385[13], i3385[14])
  i3384.scale = new pc.Vec3( i3385[15], i3385[16], i3385[17] )
  return i3384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3387 = data
  i3386.planeDistance = i3387[0]
  i3386.referencePixelsPerUnit = i3387[1]
  i3386.isFallbackOverlay = !!i3387[2]
  i3386.renderMode = i3387[3]
  i3386.renderOrder = i3387[4]
  i3386.sortingLayerName = i3387[5]
  i3386.sortingOrder = i3387[6]
  i3386.scaleFactor = i3387[7]
  request.r(i3387[8], i3387[9], 0, i3386, 'worldCamera')
  i3386.overrideSorting = !!i3387[10]
  i3386.pixelPerfect = !!i3387[11]
  i3386.targetDisplay = i3387[12]
  i3386.overridePixelPerfect = !!i3387[13]
  i3386.enabled = !!i3387[14]
  return i3386
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3388 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3389 = data
  i3388.m_UiScaleMode = i3389[0]
  i3388.m_ReferencePixelsPerUnit = i3389[1]
  i3388.m_ScaleFactor = i3389[2]
  i3388.m_ReferenceResolution = new pc.Vec2( i3389[3], i3389[4] )
  i3388.m_ScreenMatchMode = i3389[5]
  i3388.m_MatchWidthOrHeight = i3389[6]
  i3388.m_PhysicalUnit = i3389[7]
  i3388.m_FallbackScreenDPI = i3389[8]
  i3388.m_DefaultSpriteDPI = i3389[9]
  i3388.m_DynamicPixelsPerUnit = i3389[10]
  i3388.m_PresetInfoIsWorld = !!i3389[11]
  return i3388
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3390 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3391 = data
  i3390.m_IgnoreReversedGraphics = !!i3391[0]
  i3390.m_BlockingObjects = i3391[1]
  i3390.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3391[2] )
  return i3390
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3392 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3393 = data
  i3392.targetIsSelf = !!i3393[0]
  request.r(i3393[1], i3393[2], 0, i3392, 'targetGO')
  i3392.tweenTargetIsTargetGO = !!i3393[3]
  i3392.delay = i3393[4]
  i3392.duration = i3393[5]
  i3392.easeType = i3393[6]
  i3392.easeCurve = new pc.AnimationCurve( { keys_flow: i3393[7] } )
  i3392.loopType = i3393[8]
  i3392.loops = i3393[9]
  i3392.id = i3393[10]
  i3392.isRelative = !!i3393[11]
  i3392.isFrom = !!i3393[12]
  i3392.isIndependentUpdate = !!i3393[13]
  i3392.autoKill = !!i3393[14]
  i3392.autoGenerate = !!i3393[15]
  i3392.isActive = !!i3393[16]
  i3392.isValid = !!i3393[17]
  request.r(i3393[18], i3393[19], 0, i3392, 'target')
  i3392.animationType = i3393[20]
  i3392.targetType = i3393[21]
  i3392.forcedTargetType = i3393[22]
  i3392.autoPlay = !!i3393[23]
  i3392.useTargetAsV3 = !!i3393[24]
  i3392.endValueFloat = i3393[25]
  i3392.endValueV3 = new pc.Vec3( i3393[26], i3393[27], i3393[28] )
  i3392.endValueV2 = new pc.Vec2( i3393[29], i3393[30] )
  i3392.endValueColor = new pc.Color(i3393[31], i3393[32], i3393[33], i3393[34])
  i3392.endValueString = i3393[35]
  i3392.endValueRect = UnityEngine.Rect.MinMaxRect(i3393[36], i3393[37], i3393[38], i3393[39])
  request.r(i3393[40], i3393[41], 0, i3392, 'endValueTransform')
  i3392.optionalBool0 = !!i3393[42]
  i3392.optionalBool1 = !!i3393[43]
  i3392.optionalFloat0 = i3393[44]
  i3392.optionalInt0 = i3393[45]
  i3392.optionalRotationMode = i3393[46]
  i3392.optionalScrambleMode = i3393[47]
  i3392.optionalShakeRandomnessMode = i3393[48]
  i3392.optionalString = i3393[49]
  i3392.updateType = i3393[50]
  i3392.isSpeedBased = !!i3393[51]
  i3392.hasOnStart = !!i3393[52]
  i3392.hasOnPlay = !!i3393[53]
  i3392.hasOnUpdate = !!i3393[54]
  i3392.hasOnStepComplete = !!i3393[55]
  i3392.hasOnComplete = !!i3393[56]
  i3392.hasOnTweenCreated = !!i3393[57]
  i3392.hasOnRewind = !!i3393[58]
  i3392.onStart = request.d('UnityEngine.Events.UnityEvent', i3393[59], i3392.onStart)
  i3392.onPlay = request.d('UnityEngine.Events.UnityEvent', i3393[60], i3392.onPlay)
  i3392.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3393[61], i3392.onUpdate)
  i3392.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3393[62], i3392.onStepComplete)
  i3392.onComplete = request.d('UnityEngine.Events.UnityEvent', i3393[63], i3392.onComplete)
  i3392.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3393[64], i3392.onTweenCreated)
  i3392.onRewind = request.d('UnityEngine.Events.UnityEvent', i3393[65], i3392.onRewind)
  return i3392
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3394 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3395 = data
  i3394.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3395[0], i3394.m_PersistentCalls)
  return i3394
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3396 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3397 = data
  var i3399 = i3397[0]
  var i3398 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3399.length; i += 1) {
    i3398.add(request.d('UnityEngine.Events.PersistentCall', i3399[i + 0]));
  }
  i3396.m_Calls = i3398
  return i3396
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3402 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3403 = data
  request.r(i3403[0], i3403[1], 0, i3402, 'm_Target')
  i3402.m_TargetAssemblyTypeName = i3403[2]
  i3402.m_MethodName = i3403[3]
  i3402.m_Mode = i3403[4]
  i3402.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3403[5], i3402.m_Arguments)
  i3402.m_CallState = i3403[6]
  return i3402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3405 = data
  i3404.cullTransparentMesh = !!i3405[0]
  return i3404
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3406 = root || request.c( 'UnityEngine.UI.Image' )
  var i3407 = data
  request.r(i3407[0], i3407[1], 0, i3406, 'm_Sprite')
  i3406.m_Type = i3407[2]
  i3406.m_PreserveAspect = !!i3407[3]
  i3406.m_FillCenter = !!i3407[4]
  i3406.m_FillMethod = i3407[5]
  i3406.m_FillAmount = i3407[6]
  i3406.m_FillClockwise = !!i3407[7]
  i3406.m_FillOrigin = i3407[8]
  i3406.m_UseSpriteMesh = !!i3407[9]
  i3406.m_PixelsPerUnitMultiplier = i3407[10]
  request.r(i3407[11], i3407[12], 0, i3406, 'm_Material')
  i3406.m_Maskable = !!i3407[13]
  i3406.m_Color = new pc.Color(i3407[14], i3407[15], i3407[16], i3407[17])
  i3406.m_RaycastTarget = !!i3407[18]
  i3406.m_RaycastPadding = new pc.Vec4( i3407[19], i3407[20], i3407[21], i3407[22] )
  return i3406
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3408 = root || request.c( 'UnityEngine.UI.Text' )
  var i3409 = data
  i3408.m_FontData = request.d('UnityEngine.UI.FontData', i3409[0], i3408.m_FontData)
  i3408.m_Text = i3409[1]
  request.r(i3409[2], i3409[3], 0, i3408, 'm_Material')
  i3408.m_Maskable = !!i3409[4]
  i3408.m_Color = new pc.Color(i3409[5], i3409[6], i3409[7], i3409[8])
  i3408.m_RaycastTarget = !!i3409[9]
  i3408.m_RaycastPadding = new pc.Vec4( i3409[10], i3409[11], i3409[12], i3409[13] )
  return i3408
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3410 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3411 = data
  request.r(i3411[0], i3411[1], 0, i3410, 'm_Font')
  i3410.m_FontSize = i3411[2]
  i3410.m_FontStyle = i3411[3]
  i3410.m_BestFit = !!i3411[4]
  i3410.m_MinSize = i3411[5]
  i3410.m_MaxSize = i3411[6]
  i3410.m_Alignment = i3411[7]
  i3410.m_AlignByGeometry = !!i3411[8]
  i3410.m_RichText = !!i3411[9]
  i3410.m_HorizontalOverflow = i3411[10]
  i3410.m_VerticalOverflow = i3411[11]
  i3410.m_LineSpacing = i3411[12]
  return i3410
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3412 = root || request.c( 'UnityEngine.UI.Button' )
  var i3413 = data
  i3412.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3413[0], i3412.m_OnClick)
  i3412.m_Navigation = request.d('UnityEngine.UI.Navigation', i3413[1], i3412.m_Navigation)
  i3412.m_Transition = i3413[2]
  i3412.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3413[3], i3412.m_Colors)
  i3412.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3413[4], i3412.m_SpriteState)
  i3412.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3413[5], i3412.m_AnimationTriggers)
  i3412.m_Interactable = !!i3413[6]
  request.r(i3413[7], i3413[8], 0, i3412, 'm_TargetGraphic')
  return i3412
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3414 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3415 = data
  i3414.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3415[0], i3414.m_PersistentCalls)
  return i3414
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3416 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3417 = data
  request.r(i3417[0], i3417[1], 0, i3416, 'm_ObjectArgument')
  i3416.m_ObjectArgumentAssemblyTypeName = i3417[2]
  i3416.m_IntArgument = i3417[3]
  i3416.m_FloatArgument = i3417[4]
  i3416.m_StringArgument = i3417[5]
  i3416.m_BoolArgument = !!i3417[6]
  return i3416
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3418 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3419 = data
  i3418.m_Mode = i3419[0]
  i3418.m_WrapAround = !!i3419[1]
  request.r(i3419[2], i3419[3], 0, i3418, 'm_SelectOnUp')
  request.r(i3419[4], i3419[5], 0, i3418, 'm_SelectOnDown')
  request.r(i3419[6], i3419[7], 0, i3418, 'm_SelectOnLeft')
  request.r(i3419[8], i3419[9], 0, i3418, 'm_SelectOnRight')
  return i3418
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3420 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3421 = data
  i3420.m_NormalColor = new pc.Color(i3421[0], i3421[1], i3421[2], i3421[3])
  i3420.m_HighlightedColor = new pc.Color(i3421[4], i3421[5], i3421[6], i3421[7])
  i3420.m_PressedColor = new pc.Color(i3421[8], i3421[9], i3421[10], i3421[11])
  i3420.m_SelectedColor = new pc.Color(i3421[12], i3421[13], i3421[14], i3421[15])
  i3420.m_DisabledColor = new pc.Color(i3421[16], i3421[17], i3421[18], i3421[19])
  i3420.m_ColorMultiplier = i3421[20]
  i3420.m_FadeDuration = i3421[21]
  return i3420
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3422 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3423 = data
  request.r(i3423[0], i3423[1], 0, i3422, 'm_HighlightedSprite')
  request.r(i3423[2], i3423[3], 0, i3422, 'm_PressedSprite')
  request.r(i3423[4], i3423[5], 0, i3422, 'm_SelectedSprite')
  request.r(i3423[6], i3423[7], 0, i3422, 'm_DisabledSprite')
  return i3422
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3424 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3425 = data
  i3424.m_NormalTrigger = i3425[0]
  i3424.m_HighlightedTrigger = i3425[1]
  i3424.m_PressedTrigger = i3425[2]
  i3424.m_SelectedTrigger = i3425[3]
  i3424.m_DisabledTrigger = i3425[4]
  return i3424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3427 = data
  request.r(i3427[0], i3427[1], 0, i3426, 'animatorController')
  request.r(i3427[2], i3427[3], 0, i3426, 'avatar')
  i3426.updateMode = i3427[4]
  i3426.hasTransformHierarchy = !!i3427[5]
  i3426.applyRootMotion = !!i3427[6]
  var i3429 = i3427[7]
  var i3428 = []
  for(var i = 0; i < i3429.length; i += 2) {
  request.r(i3429[i + 0], i3429[i + 1], 2, i3428, '')
  }
  i3426.humanBones = i3428
  i3426.enabled = !!i3427[8]
  return i3426
}

Deserializers["Level1_Cloth_Playable_Step4"] = function (request, data, root) {
  var i3432 = root || request.c( 'Level1_Cloth_Playable_Step4' )
  var i3433 = data
  request.r(i3433[0], i3433[1], 0, i3432, 'WashingView')
  request.r(i3433[2], i3433[3], 0, i3432, 'WashingTools')
  request.r(i3433[4], i3433[5], 0, i3432, 'DressingView')
  request.r(i3433[6], i3433[7], 0, i3432, 'DressingTools')
  i3432.ZoomStep1 = request.d('ZoomPos', i3433[8], i3432.ZoomStep1)
  request.r(i3433[9], i3433[10], 0, i3432, 'ToolStep1')
  request.r(i3433[11], i3433[12], 0, i3432, 'Basket_Cloth')
  request.r(i3433[13], i3433[14], 0, i3432, 'clothInside')
  request.r(i3433[15], i3433[16], 0, i3432, 'clothRound')
  request.r(i3433[17], i3433[18], 0, i3432, 'machineDoor')
  request.r(i3433[19], i3433[20], 0, i3432, 'machineGlass')
  i3432.ZoomStep2 = request.d('ZoomPos', i3433[21], i3432.ZoomStep2)
  i3432.ZoomStep2b = request.d('ZoomPos', i3433[22], i3432.ZoomStep2b)
  request.r(i3433[23], i3433[24], 0, i3432, 'ToolStep2')
  request.r(i3433[25], i3433[26], 0, i3432, 'ToolStep2CamFollow')
  request.r(i3433[27], i3433[28], 0, i3432, 'drawerObj')
  request.r(i3433[29], i3433[30], 0, i3432, 'surfObj')
  request.r(i3433[31], i3433[32], 0, i3432, 'surfPackTop')
  request.r(i3433[33], i3433[34], 0, i3432, 'handStep2')
  request.r(i3433[35], i3433[36], 0, i3432, 'surfController')
  request.r(i3433[37], i3433[38], 0, i3432, 'clothsInside')
  request.r(i3433[39], i3433[40], 0, i3432, 'clothsInsideGlass')
  request.r(i3433[41], i3433[42], 0, i3432, 'clothsStaticClean')
  request.r(i3433[43], i3433[44], 0, i3432, 'wetCloths')
  request.r(i3433[45], i3433[46], 0, i3432, 'clothCleanInside')
  request.r(i3433[47], i3433[48], 0, i3432, 'clothCleanInsideAnim')
  request.r(i3433[49], i3433[50], 0, i3432, 'waterWave')
  request.r(i3433[51], i3433[52], 0, i3432, 'clothCleanInside2')
  request.r(i3433[53], i3433[54], 0, i3432, 'clothCleanInside2Cam')
  request.r(i3433[55], i3433[56], 0, i3432, 'clothBasketTarget')
  request.r(i3433[57], i3433[58], 0, i3432, 'clothBasketTarget2')
  request.r(i3433[59], i3433[60], 0, i3432, 'waterSplash_Vfx')
  request.r(i3433[61], i3433[62], 0, i3432, 'countDownTimerText')
  i3432.countDown = i3433[63]
  request.r(i3433[64], i3433[65], 0, i3432, 'machineTimer')
  request.r(i3433[66], i3433[67], 0, i3432, 'machineTimerRotater')
  request.r(i3433[68], i3433[69], 0, i3432, 'machineTimerIndication')
  request.r(i3433[70], i3433[71], 0, i3432, 'darazOpenSfx')
  request.r(i3433[72], i3433[73], 0, i3432, 'darazCloseSfx')
  request.r(i3433[74], i3433[75], 0, i3432, 'doorOpenSfx')
  request.r(i3433[76], i3433[77], 0, i3432, 'machineStartSfx')
  request.r(i3433[78], i3433[79], 0, i3432, 'machineFinishSfx')
  request.r(i3433[80], i3433[81], 0, i3432, 'waterDrainSfx')
  i3432.ZoomStep3a = request.d('ZoomPos', i3433[82], i3432.ZoomStep3a)
  request.r(i3433[83], i3433[84], 0, i3432, 'ToolStep3a')
  request.r(i3433[85], i3433[86], 0, i3432, 'ToolStep3aRend')
  request.r(i3433[87], i3433[88], 0, i3432, 'dressingBasket')
  request.r(i3433[89], i3433[90], 0, i3432, 'dummyFullParent')
  request.r(i3433[91], i3433[92], 0, i3432, 'DressParent')
  i3432.ZoomStep3 = request.d('ZoomPos', i3433[93], i3432.ZoomStep3)
  request.r(i3433[94], i3433[95], 0, i3432, 'ToolStep3')
  request.r(i3433[96], i3433[97], 0, i3432, 'tornPatch')
  request.r(i3433[98], i3433[99], 0, i3432, 'patchCompleted')
  request.r(i3433[100], i3433[101], 0, i3432, 'patchOutline')
  i3432.ZoomStep4 = request.d('ZoomPos', i3433[102], i3432.ZoomStep4)
  request.r(i3433[103], i3433[104], 0, i3432, 'ToolStep4')
  request.r(i3433[105], i3433[106], 0, i3432, 'camFollowStep4')
  request.r(i3433[107], i3433[108], 0, i3432, 'SteamerBottom')
  i3432.levelName = i3433[109]
  i3432.levelReward = i3433[110]
  request.r(i3433[111], i3433[112], 0, i3432, 'LevelIcon')
  request.r(i3433[113], i3433[114], 0, i3432, 'Level_BG')
  var i3435 = i3433[115]
  var i3434 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3435.length; i += 2) {
  request.r(i3435[i + 0], i3435[i + 1], 1, i3434, '')
  }
  i3432.ToolIcons = i3434
  var i3437 = i3433[116]
  var i3436 = []
  for(var i = 0; i < i3437.length; i += 2) {
  request.r(i3437[i + 0], i3437[i + 1], 2, i3436, '')
  }
  i3432.AllDrags = i3436
  var i3439 = i3433[117]
  var i3438 = []
  for(var i = 0; i < i3439.length; i += 2) {
  request.r(i3439[i + 0], i3439[i + 1], 2, i3438, '')
  }
  i3432.AllSources = i3438
  var i3441 = i3433[118]
  var i3440 = []
  for(var i = 0; i < i3441.length; i += 2) {
  request.r(i3441[i + 0], i3441[i + 1], 2, i3440, '')
  }
  i3432.AllScratches = i3440
  i3432.stepsDone = i3433[119]
  i3432.levelNo = i3433[120]
  i3432.partNo = i3433[121]
  request.r(i3433[122], i3433[123], 0, i3432, 'clothSfx')
  request.r(i3433[124], i3433[125], 0, i3432, 'doorCloseSfx')
  return i3432
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i3442 = root || request.c( 'ZoomPos' )
  var i3443 = data
  i3442.CameraPos = new pc.Vec3( i3443[0], i3443[1], i3443[2] )
  i3442.CameraFOV = i3443[3]
  return i3442
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i3452 = root || request.c( 'PlayableCTA' )
  var i3453 = data
  i3452.trigger = i3453[0]
  i3452.afterSeconds = i3453[1]
  i3452.afterTaps = i3453[2]
  request.r(i3453[3], i3453[4], 0, i3452, 'scratchProgress')
  i3452.scratchIndex = i3453[5]
  i3452.progressThreshold = i3453[6]
  request.r(i3453[7], i3453[8], 0, i3452, 'watchedTool')
  i3452.blockInputOnFire = !!i3453[9]
  i3452.refireOnEveryTap = !!i3453[10]
  i3452.refireDelay = i3453[11]
  i3452.showEndCard = !!i3453[12]
  request.r(i3453[13], i3453[14], 0, i3452, 'endCard')
  i3452.endCardDelay = i3453[15]
  i3452.showEndCardOnProgressTrigger = !!i3453[16]
  i3452.showEndCardOnToolAppearTrigger = !!i3453[17]
  i3452.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i3453[18], i3452.onCtaFired)
  i3452.logWhenFired = !!i3453[19]
  return i3452
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i3454 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i3455 = data
  request.r(i3455[0], i3455[1], 0, i3454, 'MainCamera')
  i3454.RenderType = i3455[2]
  request.r(i3455[3], i3455[4], 0, i3454, 'ScratchSurfaceSprite')
  i3454.ScratchSurfaceSpriteHasAlpha = !!i3455[5]
  i3454.MaskProgressCutOffValue = i3455[6]
  request.r(i3455[7], i3455[8], 0, i3454, 'EraseTexture')
  i3454.EraseTextureScale = new pc.Vec2( i3455[9], i3455[10] )
  i3454.InputEnabled = !!i3455[11]
  request.r(i3455[12], i3455[13], 0, i3454, 'Card')
  i3454.Mode = i3455[14]
  request.r(i3455[15], i3455[16], 0, i3454, 'Progress')
  request.r(i3455[17], i3455[18], 0, i3454, 'MeshCard')
  request.r(i3455[19], i3455[20], 0, i3454, 'SpriteCard')
  request.r(i3455[21], i3455[22], 0, i3454, 'ImageCard')
  request.r(i3455[23], i3455[24], 0, i3454, 'MaskShader')
  request.r(i3455[25], i3455[26], 0, i3454, 'BrushShader')
  request.r(i3455[27], i3455[28], 0, i3454, 'MaskProgressShader')
  request.r(i3455[29], i3455[30], 0, i3454, 'MaskProgressCutOffShader')
  return i3454
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i3456 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i3457 = data
  request.r(i3457[0], i3457[1], 0, i3456, 'MainCamera')
  request.r(i3457[2], i3457[3], 0, i3456, 'Surface')
  i3456.RenderTextureQuality = i3457[4]
  request.r(i3457[5], i3457[6], 0, i3456, 'Eraser')
  request.r(i3457[7], i3457[8], 0, i3456, 'Progress')
  request.r(i3457[9], i3457[10], 0, i3456, 'ScratchSurface')
  request.r(i3457[11], i3457[12], 0, i3456, 'RenderTexture')
  i3456.BrushScale = new pc.Vec2( i3457[13], i3457[14] )
  request.r(i3457[15], i3457[16], 0, i3456, 'ToolTip')
  i3456.InputEnabled = !!i3457[17]
  i3456.IsScratching = !!i3457[18]
  i3456.useChangingScale = !!i3457[19]
  i3456.useGivenBrushScale = !!i3457[20]
  i3456.canSpreadMask = !!i3457[21]
  i3456.shouldPaintHoles = !!i3457[22]
  i3456.canRotateTip = !!i3457[23]
  i3456._mode = i3457[24]
  return i3456
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i3458 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i3459 = data
  request.r(i3459[0], i3459[1], 0, i3458, 'Card')
  i3458.currentProgress = i3459[2]
  return i3458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i3460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i3461 = data
  i3460.textureMode = i3461[0]
  i3460.alignment = i3461[1]
  i3460.widthCurve = new pc.AnimationCurve( { keys_flow: i3461[2] } )
  i3460.colorGradient = i3461[3] ? new pc.ColorGradient(i3461[3][0], i3461[3][1], i3461[3][2]) : null
  var i3463 = i3461[4]
  var i3462 = []
  for(var i = 0; i < i3463.length; i += 3) {
    i3462.push( new pc.Vec3( i3463[i + 0], i3463[i + 1], i3463[i + 2] ) );
  }
  i3460.positions = i3462
  i3460.positionCount = i3461[5]
  i3460.widthMultiplier = i3461[6]
  i3460.startWidth = i3461[7]
  i3460.endWidth = i3461[8]
  i3460.numCornerVertices = i3461[9]
  i3460.numCapVertices = i3461[10]
  i3460.useWorldSpace = !!i3461[11]
  i3460.loop = !!i3461[12]
  i3460.startColor = new pc.Color(i3461[13], i3461[14], i3461[15], i3461[16])
  i3460.endColor = new pc.Color(i3461[17], i3461[18], i3461[19], i3461[20])
  i3460.generateLightingData = !!i3461[21]
  i3460.enabled = !!i3461[22]
  request.r(i3461[23], i3461[24], 0, i3460, 'sharedMaterial')
  var i3465 = i3461[25]
  var i3464 = []
  for(var i = 0; i < i3465.length; i += 2) {
  request.r(i3465[i + 0], i3465[i + 1], 2, i3464, '')
  }
  i3460.sharedMaterials = i3464
  i3460.receiveShadows = !!i3461[26]
  i3460.shadowCastingMode = i3461[27]
  i3460.sortingLayerID = i3461[28]
  i3460.sortingOrder = i3461[29]
  i3460.lightmapIndex = i3461[30]
  i3460.lightmapSceneIndex = i3461[31]
  i3460.lightmapScaleOffset = new pc.Vec4( i3461[32], i3461[33], i3461[34], i3461[35] )
  i3460.lightProbeUsage = i3461[36]
  i3460.reflectionProbeUsage = i3461[37]
  return i3460
}

Deserializers["TextureOffsetScroller"] = function (request, data, root) {
  var i3468 = root || request.c( 'TextureOffsetScroller' )
  var i3469 = data
  i3468.scrollSpeed = new pc.Vec2( i3469[0], i3469[1] )
  i3468.smoothStart = !!i3469[2]
  i3468.smoothDuration = i3469[3]
  i3468.textureName = i3469[4]
  i3468.useSharedMaterial = !!i3469[5]
  return i3468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3471 = data
  i3470.color = new pc.Color(i3471[0], i3471[1], i3471[2], i3471[3])
  request.r(i3471[4], i3471[5], 0, i3470, 'sprite')
  i3470.flipX = !!i3471[6]
  i3470.flipY = !!i3471[7]
  i3470.drawMode = i3471[8]
  i3470.size = new pc.Vec2( i3471[9], i3471[10] )
  i3470.tileMode = i3471[11]
  i3470.adaptiveModeThreshold = i3471[12]
  i3470.maskInteraction = i3471[13]
  i3470.spriteSortPoint = i3471[14]
  i3470.enabled = !!i3471[15]
  request.r(i3471[16], i3471[17], 0, i3470, 'sharedMaterial')
  var i3473 = i3471[18]
  var i3472 = []
  for(var i = 0; i < i3473.length; i += 2) {
  request.r(i3473[i + 0], i3473[i + 1], 2, i3472, '')
  }
  i3470.sharedMaterials = i3472
  i3470.receiveShadows = !!i3471[19]
  i3470.shadowCastingMode = i3471[20]
  i3470.sortingLayerID = i3471[21]
  i3470.sortingOrder = i3471[22]
  i3470.lightmapIndex = i3471[23]
  i3470.lightmapSceneIndex = i3471[24]
  i3470.lightmapScaleOffset = new pc.Vec4( i3471[25], i3471[26], i3471[27], i3471[28] )
  i3470.lightProbeUsage = i3471[29]
  i3470.reflectionProbeUsage = i3471[30]
  return i3470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i3474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i3475 = data
  var i3477 = i3475[0]
  var i3476 = []
  for(var i = 0; i < i3477.length; i += 3) {
    i3476.push( new pc.Vec3( i3477[i + 0], i3477[i + 1], i3477[i + 2] ) );
  }
  i3474.positions = i3476
  i3474.positionCount = i3475[1]
  i3474.time = i3475[2]
  i3474.startWidth = i3475[3]
  i3474.endWidth = i3475[4]
  i3474.widthMultiplier = i3475[5]
  i3474.autodestruct = !!i3475[6]
  i3474.emitting = !!i3475[7]
  i3474.numCornerVertices = i3475[8]
  i3474.numCapVertices = i3475[9]
  i3474.minVertexDistance = i3475[10]
  i3474.colorGradient = i3475[11] ? new pc.ColorGradient(i3475[11][0], i3475[11][1], i3475[11][2]) : null
  i3474.startColor = new pc.Color(i3475[12], i3475[13], i3475[14], i3475[15])
  i3474.endColor = new pc.Color(i3475[16], i3475[17], i3475[18], i3475[19])
  i3474.generateLightingData = !!i3475[20]
  i3474.textureMode = i3475[21]
  i3474.alignment = i3475[22]
  i3474.widthCurve = new pc.AnimationCurve( { keys_flow: i3475[23] } )
  i3474.enabled = !!i3475[24]
  request.r(i3475[25], i3475[26], 0, i3474, 'sharedMaterial')
  var i3479 = i3475[27]
  var i3478 = []
  for(var i = 0; i < i3479.length; i += 2) {
  request.r(i3479[i + 0], i3479[i + 1], 2, i3478, '')
  }
  i3474.sharedMaterials = i3478
  i3474.receiveShadows = !!i3475[28]
  i3474.shadowCastingMode = i3475[29]
  i3474.sortingLayerID = i3475[30]
  i3474.sortingOrder = i3475[31]
  i3474.lightmapIndex = i3475[32]
  i3474.lightmapSceneIndex = i3475[33]
  i3474.lightmapScaleOffset = new pc.Vec4( i3475[34], i3475[35], i3475[36], i3475[37] )
  i3474.lightProbeUsage = i3475[38]
  i3474.reflectionProbeUsage = i3475[39]
  return i3474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i3480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i3481 = data
  i3480.usedByComposite = !!i3481[0]
  i3480.autoTiling = !!i3481[1]
  i3480.size = new pc.Vec2( i3481[2], i3481[3] )
  i3480.edgeRadius = i3481[4]
  i3480.enabled = !!i3481[5]
  i3480.isTrigger = !!i3481[6]
  i3480.usedByEffector = !!i3481[7]
  i3480.density = i3481[8]
  i3480.offset = new pc.Vec2( i3481[9], i3481[10] )
  request.r(i3481[11], i3481[12], 0, i3480, 'material')
  return i3480
}

Deserializers["RotaryTimerKnob"] = function (request, data, root) {
  var i3482 = root || request.c( 'RotaryTimerKnob' )
  var i3483 = data
  i3482.canDrag = !!i3483[0]
  i3482.numSteps = i3483[1]
  i3482.onlyClockwise = !!i3483[2]
  request.r(i3483[3], i3483[4], 0, i3482, 'clickSound')
  i3482.enableVibration = !!i3483[5]
  request.r(i3483[6], i3483[7], 0, i3482, 'stepText')
  i3482.OnComplete = request.d('UnityEngine.Events.UnityEvent', i3483[8], i3482.OnComplete)
  request.r(i3483[9], i3483[10], 0, i3482, 'handIndication')
  return i3482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i3484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i3485 = data
  i3484.frontSortingLayerID = i3485[0]
  i3484.frontSortingOrder = i3485[1]
  i3484.backSortingLayerID = i3485[2]
  i3484.backSortingOrder = i3485[3]
  i3484.alphaCutoff = i3485[4]
  request.r(i3485[5], i3485[6], 0, i3484, 'sprite')
  i3484.tileMode = i3485[7]
  i3484.isCustomRangeActive = !!i3485[8]
  i3484.spriteSortPoint = i3485[9]
  i3484.enabled = !!i3485[10]
  request.r(i3485[11], i3485[12], 0, i3484, 'sharedMaterial')
  var i3487 = i3485[13]
  var i3486 = []
  for(var i = 0; i < i3487.length; i += 2) {
  request.r(i3487[i + 0], i3487[i + 1], 2, i3486, '')
  }
  i3484.sharedMaterials = i3486
  i3484.receiveShadows = !!i3485[14]
  i3484.shadowCastingMode = i3485[15]
  i3484.sortingLayerID = i3485[16]
  i3484.sortingOrder = i3485[17]
  i3484.lightmapIndex = i3485[18]
  i3484.lightmapSceneIndex = i3485[19]
  i3484.lightmapScaleOffset = new pc.Vec4( i3485[20], i3485[21], i3485[22], i3485[23] )
  i3484.lightProbeUsage = i3485[24]
  i3484.reflectionProbeUsage = i3485[25]
  return i3484
}

Deserializers["_2dxFX_Wave"] = function (request, data, root) {
  var i3488 = root || request.c( '_2dxFX_Wave' )
  var i3489 = data
  request.r(i3489[0], i3489[1], 0, i3488, 'ForceMaterial')
  i3488.ActiveChange = !!i3489[2]
  i3488._Alpha = i3489[3]
  i3488._OffsetX = i3489[4]
  i3488._OffsetY = i3489[5]
  i3488._DistanceX = i3489[6]
  i3488._DistanceY = i3489[7]
  i3488._WaveTimeX = i3489[8]
  i3488._WaveTimeY = i3489[9]
  i3488.AutoPlayWaveX = !!i3489[10]
  i3488.AutoPlaySpeedX = i3489[11]
  i3488.AutoPlayWaveY = !!i3489[12]
  i3488.AutoPlaySpeedY = i3489[13]
  i3488.AutoRandom = !!i3489[14]
  i3488.AutoRandomRange = i3489[15]
  i3488.ShaderChange = i3489[16]
  return i3488
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i3490 = root || request.c( 'BasicDrag' )
  var i3491 = data
  i3490.canDrag = !!i3491[0]
  i3490.dragByDelta = !!i3491[1]
  i3490.isDragging = !!i3491[2]
  i3490.moveWithPointer = !!i3491[3]
  i3490.canReturn = !!i3491[4]
  i3490.jumpOnReturn = !!i3491[5]
  i3490.returnTime = i3491[6]
  i3490.Tool_Offset = new pc.Vec3( i3491[7], i3491[8], i3491[9] )
  i3490.canScaleIncrease = !!i3491[10]
  i3490.Self_ScaleNew = new pc.Vec3( i3491[11], i3491[12], i3491[13] )
  i3490.canRotateOnPick = !!i3491[14]
  i3490.startRot = new pc.Vec3( i3491[15], i3491[16], i3491[17] )
  i3490.newRot = new pc.Vec3( i3491[18], i3491[19], i3491[20] )
  var i3493 = i3491[21]
  var i3492 = []
  for(var i = 0; i < i3493.length; i += 2) {
  request.r(i3493[i + 0], i3493[i + 1], 2, i3492, '')
  }
  i3490.childSprite = i3492
  request.r(i3491[22], i3491[23], 0, i3490, 'ToolSelectClip')
  request.r(i3491[24], i3491[25], 0, i3490, 'ToolLoopClip')
  request.r(i3491[26], i3491[27], 0, i3490, 'thisParticles')
  i3490.onDragparticle = !!i3491[28]
  request.r(i3491[29], i3491[30], 0, i3490, 'dragParticles')
  request.r(i3491[31], i3491[32], 0, i3490, 'anim')
  i3490.startPos = new pc.Vec3( i3491[33], i3491[34], i3491[35] )
  i3490.startScale = new pc.Vec3( i3491[36], i3491[37], i3491[38] )
  i3490.Vibration = !!i3491[39]
  i3490.isPlacedCannotMove = !!i3491[40]
  i3490.isObjectMovingWhileDragging = !!i3491[41]
  i3490.OnMouseDownEvent = request.d('System.Action', i3491[42], i3490.OnMouseDownEvent)
  i3490.OnMouseUpEvent = request.d('System.Action', i3491[43], i3490.OnMouseUpEvent)
  i3490.ProgStartEvent = request.d('System.Action', i3491[44], i3490.ProgStartEvent)
  i3490.ProgEndEvent = request.d('System.Action', i3491[45], i3490.ProgEndEvent)
  i3490.canCallMouseUpWhenGamePaused = !!i3491[46]
  i3490.ClampX_L = i3491[47]
  i3490.ClampX_H = i3491[48]
  i3490.ClampY_L = i3491[49]
  i3490.ClampY_H = i3491[50]
  i3490.startOrder = i3491[51]
  i3490.dontResetItIsInCollider = !!i3491[52]
  request.r(i3491[53], i3491[54], 0, i3490, 'thisCollider')
  request.r(i3491[55], i3491[56], 0, i3490, 'thisSR')
  i3490.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i3491[57], i3490.OnMouseDownEventIndependentFromCanDrag)
  return i3490
}

Deserializers["System.Action"] = function (request, data, root) {
  var i3496 = root || request.c( 'System.Action' )
  var i3497 = data
  return i3496
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i3498 = root || request.c( 'BD_Clamp' )
  var i3499 = data
  i3498.ClampX_L = i3499[0]
  i3498.ClampX_H = i3499[1]
  i3498.ClampY_L = i3499[2]
  i3498.ClampY_H = i3499[3]
  return i3498
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i3500 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i3501 = data
  request.r(i3501[0], i3501[1], 0, i3500, 'm_RootBone')
  var i3503 = i3501[2]
  var i3502 = []
  for(var i = 0; i < i3503.length; i += 2) {
  request.r(i3503[i + 0], i3503[i + 1], 2, i3502, '')
  }
  i3500.m_BoneTransforms = i3502
  i3500.m_AlwaysUpdate = !!i3501[3]
  i3500.m_AutoRebind = !!i3501[4]
  return i3500
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i3504 = root || request.c( 'BD_CameraFollow' )
  var i3505 = data
  request.r(i3505[0], i3505[1], 0, i3504, 'Tool')
  request.r(i3505[2], i3505[3], 0, i3504, 'Pivot')
  i3504.FOV = i3505[4]
  i3504.Y_L = i3505[5]
  i3504.Y_H = i3505[6]
  i3504.X_L = i3505[7]
  i3504.X_R = i3505[8]
  i3504.startDelay = i3505[9]
  i3504.duration = i3505[10]
  return i3504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i3506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i3507 = data
  i3506.bodyType = i3507[0]
  request.r(i3507[1], i3507[2], 0, i3506, 'material')
  i3506.simulated = !!i3507[3]
  i3506.useAutoMass = !!i3507[4]
  i3506.mass = i3507[5]
  i3506.drag = i3507[6]
  i3506.angularDrag = i3507[7]
  i3506.gravityScale = i3507[8]
  i3506.collisionDetectionMode = i3507[9]
  i3506.sleepMode = i3507[10]
  i3506.constraints = i3507[11]
  return i3506
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i3508 = root || request.c( 'PlaceItem' )
  var i3509 = data
  request.r(i3509[0], i3509[1], 0, i3508, 'thisDrag')
  request.r(i3509[2], i3509[3], 0, i3508, 'Target')
  request.r(i3509[4], i3509[5], 0, i3508, 'Clip')
  i3508.jumpOnPlace = !!i3509[6]
  i3508.jumpHeight = i3509[7]
  i3508.jumpDuration = i3509[8]
  i3508.settleDuration = i3509[9]
  i3508.isPlaced = !!i3509[10]
  i3508.isInsideCollider = !!i3509[11]
  i3508.changeScaleOnPlace = !!i3509[12]
  request.r(i3509[13], i3509[14], 0, i3508, 'item')
  i3508.newScaleOnPlace = new pc.Vec3( i3509[15], i3509[16], i3509[17] )
  i3508.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i3509[18], i3508.OnPlaced)
  return i3508
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i3510 = root || request.c( 'ActionOnTap' )
  var i3511 = data
  i3510.OnTap = request.d('UnityEngine.Events.UnityEvent', i3511[0], i3510.OnTap)
  i3510.OnTapExtra = request.d('System.Action', i3511[1], i3510.OnTapExtra)
  return i3510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i3512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i3513 = data
  i3512.radius = i3513[0]
  i3512.enabled = !!i3513[1]
  i3512.isTrigger = !!i3513[2]
  i3512.usedByEffector = !!i3513[3]
  i3512.density = i3513[4]
  i3512.offset = new pc.Vec2( i3513[5], i3513[6] )
  request.r(i3513[7], i3513[8], 0, i3512, 'material')
  return i3512
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i3514 = root || request.c( 'PlayParticlesOnCollision' )
  var i3515 = data
  request.r(i3515[0], i3515[1], 0, i3514, 'Target')
  request.r(i3515[2], i3515[3], 0, i3514, 'ParticlePrefab')
  i3514.destroyIt = !!i3515[4]
  i3514.stayAtPlace = !!i3515[5]
  i3514.disableOnCollision = !!i3515[6]
  i3514.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i3515[7], i3514.OnCollisionEvent)
  return i3514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i3516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i3517 = data
  i3516.usedByComposite = !!i3517[0]
  i3516.autoTiling = !!i3517[1]
  var i3519 = i3517[2]
  var i3518 = []
  for(var i = 0; i < i3519.length; i += 1) {
  var i3521 = i3519[i + 0]
  var i3520 = []
  for(var i = 0; i < i3521.length; i += 2) {
    i3520.push( new pc.Vec2( i3521[i + 0], i3521[i + 1] ) );
  }
    i3518.push( i3520 );
  }
  i3516.points = i3518
  i3516.enabled = !!i3517[3]
  i3516.isTrigger = !!i3517[4]
  i3516.usedByEffector = !!i3517[5]
  i3516.density = i3517[6]
  i3516.offset = new pc.Vec2( i3517[7], i3517[8] )
  request.r(i3517[9], i3517[10], 0, i3516, 'material')
  return i3516
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i3528 = root || request.c( 'PlaySfxOnCollision' )
  var i3529 = data
  request.r(i3529[0], i3529[1], 0, i3528, 'Tip')
  i3528.Mode = i3529[2]
  request.r(i3529[3], i3529[4], 0, i3528, 'DragInput')
  request.r(i3529[5], i3529[6], 0, i3528, 'Source')
  i3528.startVol = i3529[7]
  i3528.targetVol = i3529[8]
  i3528.duration = i3529[9]
  request.r(i3529[10], i3529[11], 0, i3528, 'Particles')
  i3528.isDone = !!i3529[12]
  i3528.isInArea = !!i3529[13]
  i3528.isPlaying = !!i3529[14]
  return i3528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3531 = data
  request.r(i3531[0], i3531[1], 0, i3530, 'clip')
  request.r(i3531[2], i3531[3], 0, i3530, 'outputAudioMixerGroup')
  i3530.playOnAwake = !!i3531[4]
  i3530.loop = !!i3531[5]
  i3530.time = i3531[6]
  i3530.volume = i3531[7]
  i3530.pitch = i3531[8]
  i3530.enabled = !!i3531[9]
  return i3530
}

Deserializers["SewingCol"] = function (request, data, root) {
  var i3532 = root || request.c( 'SewingCol' )
  var i3533 = data
  request.r(i3533[0], i3533[1], 0, i3532, 'targetTip')
  var i3535 = i3533[2]
  var i3534 = []
  for(var i = 0; i < i3535.length; i += 2) {
  request.r(i3535[i + 0], i3535[i + 1], 2, i3534, '')
  }
  i3532.Anim_Items = i3534
  i3532.isDone = !!i3533[3]
  request.r(i3533[4], i3533[5], 0, i3532, 'sfx')
  return i3532
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i3538 = root || request.c( 'OutlinePulse' )
  var i3539 = data
  i3538.smallThickness = i3539[0]
  i3538.largeThickness = i3539[1]
  i3538.transitionSpeed = i3539[2]
  i3538.animationSpeed = i3539[3]
  i3538.isThickOutline = !!i3539[4]
  i3538.animate = !!i3539[5]
  i3538.hideSpriteOnly = !!i3539[6]
  return i3538
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i3540 = root || request.c( 'BD_Action' )
  var i3541 = data
  i3540.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i3541[0], i3540.OnMouseDownEvent)
  i3540.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i3541[1], i3540.OnMouseUpEvent)
  i3540.setToolLayer = !!i3541[2]
  request.r(i3541[3], i3541[4], 0, i3540, 'tool_SP')
  return i3540
}

Deserializers["Level1_SurfController"] = function (request, data, root) {
  var i3542 = root || request.c( 'Level1_SurfController' )
  var i3543 = data
  i3542.target_rotZ = i3543[0]
  i3542.rotationDuration = i3543[1]
  i3542.rotationEase = i3543[2]
  request.r(i3543[3], i3543[4], 0, i3542, 'maskItem')
  i3542.maskTarget_posY = i3543[5]
  i3542.maskMoveDuration = i3543[6]
  i3542.requiredHoldTime = i3543[7]
  i3542.minRotationForProgress = i3543[8]
  request.r(i3543[9], i3543[10], 0, i3542, 'tipCollider')
  request.r(i3543[11], i3543[12], 0, i3542, 'targetZoneCollider')
  request.r(i3543[13], i3543[14], 0, i3542, 'surf_Particles')
  request.r(i3543[15], i3543[16], 0, i3542, 'surf_SubEmitter')
  request.r(i3543[17], i3543[18], 0, i3542, 'Indication')
  i3542.OnComplete = request.d('UnityEngine.Events.UnityEvent', i3543[19], i3542.OnComplete)
  i3542.currentHoldProgress = i3543[20]
  return i3542
}

Deserializers["BD_Fold"] = function (request, data, root) {
  var i3544 = root || request.c( 'BD_Fold' )
  var i3545 = data
  i3544.canDrag = !!i3545[0]
  i3544.canFoldBottomLeft = !!i3545[1]
  i3544.canFoldBottomRight = !!i3545[2]
  i3544.canFoldTopLeft = !!i3545[3]
  i3544.canFoldTopRight = !!i3545[4]
  request.r(i3545[5], i3545[6], 0, i3544, 'Indication')
  request.r(i3545[7], i3545[8], 0, i3544, 'backSideSprite')
  i3544.maxSideOffset = i3545[9]
  i3544.foldBackDuration = i3545[10]
  i3544.instantFoldAmount = i3545[11]
  i3544.useSmoothRelease = !!i3545[12]
  i3544.completionLimit = i3545[13]
  i3544.afterCompletionTravelTo = i3545[14]
  i3544.OnComplete = request.d('UnityEngine.Events.UnityEvent', i3545[15], i3544.OnComplete)
  i3544.currentProgress = i3545[16]
  i3544.innerShadowStrength = i3545[17]
  request.r(i3545[18], i3545[19], 0, i3544, 'dragAudioSource')
  request.r(i3545[20], i3545[21], 0, i3544, 'dragStartClip')
  request.r(i3545[22], i3545[23], 0, i3544, 'completionClip')
  i3544.audioFadeSpeed = i3545[24]
  i3544.audioMoveThreshold = i3545[25]
  i3544.hapticInterval = i3545[26]
  return i3544
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i3546 = root || request.c( 'BD_Progress' )
  var i3547 = data
  var i3549 = i3547[0]
  var i3548 = []
  for(var i = 0; i < i3549.length; i += 1) {
    i3548.push( request.d('ScratchData', i3549[i + 0]) );
  }
  i3546.AllScratches = i3548
  i3546.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i3547[1], i3546.OnScratchComplete)
  i3546.isProgDone = !!i3547[2]
  i3546.canCallComplete = !!i3547[3]
  i3546.CollectiveAppear = !!i3547[4]
  i3546.tipControl = !!i3547[5]
  i3546.progressControl = !!i3547[6]
  request.r(i3547[7], i3547[8], 0, i3546, 'thisDrag')
  i3546.CompleteEvent = request.d('System.Action', i3547[9], i3546.CompleteEvent)
  i3546.SubCompleteEvent = request.d('System.Action', i3547[10], i3546.SubCompleteEvent)
  return i3546
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i3552 = root || request.c( 'ScratchData' )
  var i3553 = data
  request.r(i3553[0], i3553[1], 0, i3552, 'ScratchManager')
  i3552.scratchLimit = i3553[2]
  i3552.isComplete = !!i3553[3]
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3555 = data
  request.r(i3555[0], i3555[1], 0, i3554, 'sharedMesh')
  return i3554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3557 = data
  request.r(i3557[0], i3557[1], 0, i3556, 'additionalVertexStreams')
  i3556.enabled = !!i3557[2]
  request.r(i3557[3], i3557[4], 0, i3556, 'sharedMaterial')
  var i3559 = i3557[5]
  var i3558 = []
  for(var i = 0; i < i3559.length; i += 2) {
  request.r(i3559[i + 0], i3559[i + 1], 2, i3558, '')
  }
  i3556.sharedMaterials = i3558
  i3556.receiveShadows = !!i3557[6]
  i3556.shadowCastingMode = i3557[7]
  i3556.sortingLayerID = i3557[8]
  i3556.sortingOrder = i3557[9]
  i3556.lightmapIndex = i3557[10]
  i3556.lightmapSceneIndex = i3557[11]
  i3556.lightmapScaleOffset = new pc.Vec4( i3557[12], i3557[13], i3557[14], i3557[15] )
  i3556.lightProbeUsage = i3557[16]
  i3556.reflectionProbeUsage = i3557[17]
  return i3556
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i3560 = root || request.c( 'StaticFixedPipe' )
  var i3561 = data
  request.r(i3561[0], i3561[1], 0, i3560, 'meshRenderer')
  request.r(i3561[2], i3561[3], 0, i3560, 'toolTransform')
  request.r(i3561[4], i3561[5], 0, i3560, 'toolDirectionPoint')
  request.r(i3561[6], i3561[7], 0, i3560, 'fixedEndPoint')
  i3560.segmentCount = i3561[8]
  i3560.totalLength = i3561[9]
  i3560.constraintIterations = i3561[10]
  i3560.gravity = new pc.Vec3( i3561[11], i3561[12], i3561[13] )
  i3560.pipeWidth = i3561[14]
  return i3560
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i3562 = root || request.c( 'BD_SpriteChange' )
  var i3563 = data
  request.r(i3563[0], i3563[1], 0, i3562, 'BD')
  request.r(i3563[2], i3563[3], 0, i3562, 'SR')
  request.r(i3563[4], i3563[5], 0, i3562, 'Default')
  request.r(i3563[6], i3563[7], 0, i3562, 'Picked')
  i3562.resetOnRelease = !!i3563[8]
  return i3562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3565 = data
  i3564.name = i3565[0]
  i3564.atlasId = i3565[1]
  i3564.mipmapCount = i3565[2]
  i3564.hdr = !!i3565[3]
  i3564.size = i3565[4]
  i3564.anisoLevel = i3565[5]
  i3564.filterMode = i3565[6]
  var i3567 = i3565[7]
  var i3566 = []
  for(var i = 0; i < i3567.length; i += 4) {
    i3566.push( UnityEngine.Rect.MinMaxRect(i3567[i + 0], i3567[i + 1], i3567[i + 2], i3567[i + 3]) );
  }
  i3564.rects = i3566
  i3564.wrapU = i3565[8]
  i3564.wrapV = i3565[9]
  return i3564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3571 = data
  i3570.name = i3571[0]
  i3570.index = i3571[1]
  i3570.startup = !!i3571[2]
  return i3570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3573 = data
  i3572.aspect = i3573[0]
  i3572.orthographic = !!i3573[1]
  i3572.orthographicSize = i3573[2]
  i3572.backgroundColor = new pc.Color(i3573[3], i3573[4], i3573[5], i3573[6])
  i3572.nearClipPlane = i3573[7]
  i3572.farClipPlane = i3573[8]
  i3572.fieldOfView = i3573[9]
  i3572.depth = i3573[10]
  i3572.clearFlags = i3573[11]
  i3572.cullingMask = i3573[12]
  i3572.rect = i3573[13]
  request.r(i3573[14], i3573[15], 0, i3572, 'targetTexture')
  i3572.usePhysicalProperties = !!i3573[16]
  i3572.focalLength = i3573[17]
  i3572.sensorSize = new pc.Vec2( i3573[18], i3573[19] )
  i3572.lensShift = new pc.Vec2( i3573[20], i3573[21] )
  i3572.gateFit = i3573[22]
  i3572.commandBufferCount = i3573[23]
  i3572.cameraType = i3573[24]
  i3572.enabled = !!i3573[25]
  return i3572
}

Deserializers["CameraController"] = function (request, data, root) {
  var i3574 = root || request.c( 'CameraController' )
  var i3575 = data
  request.r(i3575[0], i3575[1], 0, i3574, 'cam')
  i3574.defaultPosition = new pc.Vec3( i3575[2], i3575[3], i3575[4] )
  i3574.defaultSize = i3575[5]
  i3574.defaultFOV = i3575[6]
  i3574.defaultDuration = i3575[7]
  i3574.defaultEase = i3575[8]
  return i3574
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i3576 = root || request.c( 'MusicSource' )
  var i3577 = data
  request.r(i3577[0], i3577[1], 0, i3576, 'source')
  return i3576
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i3578 = root || request.c( 'UI_Manager' )
  var i3579 = data
  i3578.levelCompleted = !!i3579[0]
  i3578.isPauseActive = !!i3579[1]
  i3578.loadIndex = i3579[2]
  request.r(i3579[3], i3579[4], 0, i3578, 'removeAdsButton')
  request.r(i3579[5], i3579[6], 0, i3578, 'pauseButton')
  request.r(i3579[7], i3579[8], 0, i3578, 'Fade_Img')
  request.r(i3579[9], i3579[10], 0, i3578, 'TopBarAnim')
  request.r(i3579[11], i3579[12], 0, i3578, 'MainPanel')
  request.r(i3579[13], i3579[14], 0, i3578, 'PausePanel')
  request.r(i3579[15], i3579[16], 0, i3578, 'PausePopUp')
  request.r(i3579[17], i3579[18], 0, i3578, 'PauseCanvasGroup')
  request.r(i3579[19], i3579[20], 0, i3578, 'RateUsPanel')
  request.r(i3579[21], i3579[22], 0, i3578, 'RateUsPopUp')
  request.r(i3579[23], i3579[24], 0, i3578, 'RemoveAdsPanel')
  request.r(i3579[25], i3579[26], 0, i3578, 'RemoveAdsPopUp')
  request.r(i3579[27], i3579[28], 0, i3578, 'RemoveAdsCanvasGroup')
  var i3581 = i3579[29]
  var i3580 = []
  for(var i = 0; i < i3581.length; i += 2) {
  request.r(i3581[i + 0], i3581[i + 1], 2, i3580, '')
  }
  i3578.RemoveAdsAnims = i3580
  i3578.showCompletePanel = !!i3579[30]
  var i3583 = i3579[31]
  var i3582 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3583.length; i += 2) {
  request.r(i3583[i + 0], i3583[i + 1], 1, i3582, '')
  }
  i3578.thingsToDisableWhenCompletePanel = i3582
  request.r(i3579[32], i3579[33], 0, i3578, 'CompletePanel')
  request.r(i3579[34], i3579[35], 0, i3578, 'LevelIcon')
  request.r(i3579[36], i3579[37], 0, i3578, 'CompleteParticles')
  request.r(i3579[38], i3579[39], 0, i3578, 'progressBar')
  request.r(i3579[40], i3579[41], 0, i3578, 'progressText')
  request.r(i3579[42], i3579[43], 0, i3578, 'toolIcon1')
  request.r(i3579[44], i3579[45], 0, i3578, 'toolIcon2')
  request.r(i3579[46], i3579[47], 0, i3578, 'toolIcon3')
  request.r(i3579[48], i3579[49], 0, i3578, 'toolIcon4')
  request.r(i3579[50], i3579[51], 0, i3578, 'toolHolder')
  i3578.toolHolderRaisedY = i3579[52]
  i3578.toolHolderRaiseDuration = i3579[53]
  request.r(i3579[54], i3579[55], 0, i3578, 'target1')
  request.r(i3579[56], i3579[57], 0, i3578, 'target2')
  i3578.toolMoveDuration = i3579[58]
  i3578.currentIndex = i3579[59]
  var i3585 = i3579[60]
  var i3584 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3585.length; i += 2) {
  request.r(i3585[i + 0], i3585[i + 1], 1, i3584, '')
  }
  i3578.allTools = i3584
  request.r(i3579[61], i3579[62], 0, i3578, 'clockProgress')
  request.r(i3579[63], i3579[64], 0, i3578, 'clockProgressFill')
  request.r(i3579[65], i3579[66], 0, i3578, 'clockAudio')
  i3578.moveDistance = i3579[67]
  i3578.animationDuration = i3579[68]
  i3578.greyBgChildName = i3579[69]
  i3578.pushOffset = i3579[70]
  return i3578
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i3588 = root || request.c( 'GameManagerPlayable' )
  var i3589 = data
  request.r(i3589[0], i3589[1], 0, i3588, 'endParticles')
  request.r(i3589[2], i3589[3], 0, i3588, 'stepCompleteParticles')
  request.r(i3589[4], i3589[5], 0, i3588, 'DefaultMat')
  request.r(i3589[6], i3589[7], 0, i3588, 'BG_Music')
  request.r(i3589[8], i3589[9], 0, i3588, 'restoreEffectShader')
  request.r(i3589[10], i3589[11], 0, i3588, 'stickerEffectShader')
  i3588.isComplete = !!i3589[12]
  i3588.isPaused = !!i3589[13]
  request.r(i3589[14], i3589[15], 0, i3588, 'currentLevel')
  i3588.startLevelOnPlay = !!i3589[16]
  i3588.currentLevelNo = i3589[17]
  return i3588
}

Deserializers["AudioController"] = function (request, data, root) {
  var i3590 = root || request.c( 'AudioController' )
  var i3591 = data
  request.r(i3591[0], i3591[1], 0, i3590, 'MainMixer')
  request.r(i3591[2], i3591[3], 0, i3590, 'UiClick')
  request.r(i3591[4], i3591[5], 0, i3590, 'UiClickSource')
  var i3593 = i3591[6]
  var i3592 = []
  for(var i = 0; i < i3593.length; i += 2) {
  request.r(i3593[i + 0], i3593[i + 1], 2, i3592, '')
  }
  i3590.SfxSources = i3592
  var i3595 = i3591[7]
  var i3594 = []
  for(var i = 0; i < i3595.length; i += 2) {
  request.r(i3595[i + 0], i3595[i + 1], 2, i3594, '')
  }
  i3590.AllClips = i3594
  return i3590
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i3598 = root || request.c( 'PlayableHudRuntime' )
  var i3599 = data
  return i3598
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3600 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3601 = data
  request.r(i3601[0], i3601[1], 0, i3600, 'm_FirstSelected')
  i3600.m_sendNavigationEvents = !!i3601[2]
  i3600.m_DragThreshold = i3601[3]
  return i3600
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3602 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3603 = data
  i3602.m_HorizontalAxis = i3603[0]
  i3602.m_VerticalAxis = i3603[1]
  i3602.m_SubmitButton = i3603[2]
  i3602.m_CancelButton = i3603[3]
  i3602.m_InputActionsPerSecond = i3603[4]
  i3602.m_RepeatDelay = i3603[5]
  i3602.m_ForceModuleActive = !!i3603[6]
  i3602.m_SendPointerHoverToParent = !!i3603[7]
  return i3602
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i3604 = root || request.c( 'PlayableRouter' )
  var i3605 = data
  var i3607 = i3605[0]
  var i3606 = []
  for(var i = 0; i < i3607.length; i += 2) {
  request.r(i3607[i + 0], i3607[i + 1], 2, i3606, '')
  }
  i3604.menuObjects = i3606
  var i3609 = i3605[1]
  var i3608 = []
  for(var i = 0; i < i3609.length; i += 2) {
  request.r(i3609[i + 0], i3609[i + 1], 2, i3608, '')
  }
  i3604.gameplayObjects = i3608
  var i3611 = i3605[2]
  var i3610 = []
  for(var i = 0; i < i3611.length; i += 1) {
    i3610.push( request.d('PlayableRouter+SubLevelSlot', i3611[i + 0]) );
  }
  i3604.subLevels = i3610
  i3604.fadeDuration = i3605[3]
  i3604.onIntroStart = request.d('UnityEngine.Events.UnityEvent', i3605[4], i3604.onIntroStart)
  var i3613 = i3605[5]
  var i3612 = []
  for(var i = 0; i < i3613.length; i += 2) {
  request.r(i3613[i + 0], i3613[i + 1], 2, i3612, '')
  }
  i3604.hideDuringIntro = i3612
  i3604.lockedMessage = i3605[6]
  i3604.lockedTapsToCTA = i3605[7]
  return i3604
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i3618 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i3619 = data
  request.r(i3619[0], i3619[1], 0, i3618, 'button')
  request.r(i3619[2], i3619[3], 0, i3618, 'level')
  request.r(i3619[4], i3619[5], 0, i3618, 'intro')
  return i3618
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i3620 = root || request.c( 'ToastManager' )
  var i3621 = data
  request.r(i3621[0], i3621[1], 0, i3620, 'toastPanel')
  request.r(i3621[2], i3621[3], 0, i3620, 'toastPopup')
  request.r(i3621[4], i3621[5], 0, i3620, 'canvasGroup')
  request.r(i3621[6], i3621[7], 0, i3620, 'toastText')
  i3620.startY = i3621[8]
  i3620.visibleY = i3621[9]
  i3620.endY = i3621[10]
  i3620.animationTime = i3621[11]
  i3620.animationTimeUp = i3621[12]
  return i3620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3623 = data
  i3622.m_Alpha = i3623[0]
  i3622.m_Interactable = !!i3623[1]
  i3622.m_BlocksRaycasts = !!i3623[2]
  i3622.m_IgnoreParentGroups = !!i3623[3]
  i3622.enabled = !!i3623[4]
  return i3622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3625 = data
  i3624.ambientIntensity = i3625[0]
  i3624.reflectionIntensity = i3625[1]
  i3624.ambientMode = i3625[2]
  i3624.ambientLight = new pc.Color(i3625[3], i3625[4], i3625[5], i3625[6])
  i3624.ambientSkyColor = new pc.Color(i3625[7], i3625[8], i3625[9], i3625[10])
  i3624.ambientGroundColor = new pc.Color(i3625[11], i3625[12], i3625[13], i3625[14])
  i3624.ambientEquatorColor = new pc.Color(i3625[15], i3625[16], i3625[17], i3625[18])
  i3624.fogColor = new pc.Color(i3625[19], i3625[20], i3625[21], i3625[22])
  i3624.fogEndDistance = i3625[23]
  i3624.fogStartDistance = i3625[24]
  i3624.fogDensity = i3625[25]
  i3624.fog = !!i3625[26]
  request.r(i3625[27], i3625[28], 0, i3624, 'skybox')
  i3624.fogMode = i3625[29]
  var i3627 = i3625[30]
  var i3626 = []
  for(var i = 0; i < i3627.length; i += 1) {
    i3626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3627[i + 0]) );
  }
  i3624.lightmaps = i3626
  i3624.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3625[31], i3624.lightProbes)
  i3624.lightmapsMode = i3625[32]
  i3624.mixedBakeMode = i3625[33]
  i3624.environmentLightingMode = i3625[34]
  i3624.ambientProbe = new pc.SphericalHarmonicsL2(i3625[35])
  request.r(i3625[36], i3625[37], 0, i3624, 'customReflection')
  request.r(i3625[38], i3625[39], 0, i3624, 'defaultReflection')
  i3624.defaultReflectionMode = i3625[40]
  i3624.defaultReflectionResolution = i3625[41]
  i3624.sunLightObjectId = i3625[42]
  i3624.pixelLightCount = i3625[43]
  i3624.defaultReflectionHDR = !!i3625[44]
  i3624.hasLightDataAsset = !!i3625[45]
  i3624.hasManualGenerate = !!i3625[46]
  return i3624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3631 = data
  request.r(i3631[0], i3631[1], 0, i3630, 'lightmapColor')
  request.r(i3631[2], i3631[3], 0, i3630, 'lightmapDirection')
  request.r(i3631[4], i3631[5], 0, i3630, 'shadowMask')
  return i3630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3632 = root || new UnityEngine.LightProbes()
  var i3633 = data
  return i3632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3639 = data
  var i3641 = i3639[0]
  var i3640 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3641.length; i += 1) {
    i3640.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3641[i + 0]));
  }
  i3638.ShaderCompilationErrors = i3640
  i3638.name = i3639[1]
  i3638.guid = i3639[2]
  var i3643 = i3639[3]
  var i3642 = []
  for(var i = 0; i < i3643.length; i += 1) {
    i3642.push( i3643[i + 0] );
  }
  i3638.shaderDefinedKeywords = i3642
  var i3645 = i3639[4]
  var i3644 = []
  for(var i = 0; i < i3645.length; i += 1) {
    i3644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3645[i + 0]) );
  }
  i3638.passes = i3644
  var i3647 = i3639[5]
  var i3646 = []
  for(var i = 0; i < i3647.length; i += 1) {
    i3646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3647[i + 0]) );
  }
  i3638.usePasses = i3646
  var i3649 = i3639[6]
  var i3648 = []
  for(var i = 0; i < i3649.length; i += 1) {
    i3648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3649[i + 0]) );
  }
  i3638.defaultParameterValues = i3648
  request.r(i3639[7], i3639[8], 0, i3638, 'unityFallbackShader')
  i3638.readDepth = !!i3639[9]
  i3638.hasDepthOnlyPass = !!i3639[10]
  i3638.isCreatedByShaderGraph = !!i3639[11]
  i3638.disableBatching = !!i3639[12]
  i3638.compiled = !!i3639[13]
  return i3638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3653 = data
  i3652.shaderName = i3653[0]
  i3652.errorMessage = i3653[1]
  return i3652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3658 = root || new pc.UnityShaderPass()
  var i3659 = data
  i3658.id = i3659[0]
  i3658.subShaderIndex = i3659[1]
  i3658.name = i3659[2]
  i3658.passType = i3659[3]
  i3658.grabPassTextureName = i3659[4]
  i3658.usePass = !!i3659[5]
  i3658.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3659[6], i3658.zTest)
  i3658.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3659[7], i3658.zWrite)
  i3658.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3659[8], i3658.culling)
  i3658.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3659[9], i3658.blending)
  i3658.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3659[10], i3658.alphaBlending)
  i3658.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3659[11], i3658.colorWriteMask)
  i3658.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3659[12], i3658.offsetUnits)
  i3658.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3659[13], i3658.offsetFactor)
  i3658.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3659[14], i3658.stencilRef)
  i3658.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3659[15], i3658.stencilReadMask)
  i3658.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3659[16], i3658.stencilWriteMask)
  i3658.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3659[17], i3658.stencilOp)
  i3658.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3659[18], i3658.stencilOpFront)
  i3658.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3659[19], i3658.stencilOpBack)
  var i3661 = i3659[20]
  var i3660 = []
  for(var i = 0; i < i3661.length; i += 1) {
    i3660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3661[i + 0]) );
  }
  i3658.tags = i3660
  var i3663 = i3659[21]
  var i3662 = []
  for(var i = 0; i < i3663.length; i += 1) {
    i3662.push( i3663[i + 0] );
  }
  i3658.passDefinedKeywords = i3662
  var i3665 = i3659[22]
  var i3664 = []
  for(var i = 0; i < i3665.length; i += 1) {
    i3664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3665[i + 0]) );
  }
  i3658.passDefinedKeywordGroups = i3664
  var i3667 = i3659[23]
  var i3666 = []
  for(var i = 0; i < i3667.length; i += 1) {
    i3666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3667[i + 0]) );
  }
  i3658.variants = i3666
  var i3669 = i3659[24]
  var i3668 = []
  for(var i = 0; i < i3669.length; i += 1) {
    i3668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3669[i + 0]) );
  }
  i3658.excludedVariants = i3668
  i3658.hasDepthReader = !!i3659[25]
  return i3658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3671 = data
  i3670.val = i3671[0]
  i3670.name = i3671[1]
  return i3670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3673 = data
  i3672.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3673[0], i3672.src)
  i3672.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3673[1], i3672.dst)
  i3672.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3673[2], i3672.op)
  return i3672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3675 = data
  i3674.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3675[0], i3674.pass)
  i3674.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3675[1], i3674.fail)
  i3674.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3675[2], i3674.zFail)
  i3674.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3675[3], i3674.comp)
  return i3674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3679 = data
  i3678.name = i3679[0]
  i3678.value = i3679[1]
  return i3678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3683 = data
  var i3685 = i3683[0]
  var i3684 = []
  for(var i = 0; i < i3685.length; i += 1) {
    i3684.push( i3685[i + 0] );
  }
  i3682.keywords = i3684
  i3682.hasDiscard = !!i3683[1]
  return i3682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3689 = data
  i3688.passId = i3689[0]
  i3688.subShaderIndex = i3689[1]
  var i3691 = i3689[2]
  var i3690 = []
  for(var i = 0; i < i3691.length; i += 1) {
    i3690.push( i3691[i + 0] );
  }
  i3688.keywords = i3690
  i3688.vertexProgram = i3689[3]
  i3688.fragmentProgram = i3689[4]
  i3688.exportedForWebGl2 = !!i3689[5]
  i3688.readDepth = !!i3689[6]
  return i3688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3695 = data
  request.r(i3695[0], i3695[1], 0, i3694, 'shader')
  i3694.pass = i3695[2]
  return i3694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3699 = data
  i3698.name = i3699[0]
  i3698.type = i3699[1]
  i3698.value = new pc.Vec4( i3699[2], i3699[3], i3699[4], i3699[5] )
  i3698.textureValue = i3699[6]
  i3698.shaderPropertyFlag = i3699[7]
  return i3698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3701 = data
  i3700.name = i3701[0]
  request.r(i3701[1], i3701[2], 0, i3700, 'texture')
  i3700.aabb = i3701[3]
  i3700.vertices = i3701[4]
  i3700.triangles = i3701[5]
  i3700.textureRect = UnityEngine.Rect.MinMaxRect(i3701[6], i3701[7], i3701[8], i3701[9])
  i3700.packedRect = UnityEngine.Rect.MinMaxRect(i3701[10], i3701[11], i3701[12], i3701[13])
  i3700.border = new pc.Vec4( i3701[14], i3701[15], i3701[16], i3701[17] )
  i3700.transparency = i3701[18]
  i3700.bounds = i3701[19]
  i3700.pixelsPerUnit = i3701[20]
  i3700.textureWidth = i3701[21]
  i3700.textureHeight = i3701[22]
  i3700.nativeSize = new pc.Vec2( i3701[23], i3701[24] )
  i3700.pivot = new pc.Vec2( i3701[25], i3701[26] )
  i3700.textureRectOffset = new pc.Vec2( i3701[27], i3701[28] )
  return i3700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3703 = data
  i3702.name = i3703[0]
  return i3702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3705 = data
  i3704.name = i3705[0]
  i3704.wrapMode = i3705[1]
  i3704.isLooping = !!i3705[2]
  i3704.length = i3705[3]
  var i3707 = i3705[4]
  var i3706 = []
  for(var i = 0; i < i3707.length; i += 1) {
    i3706.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3707[i + 0]) );
  }
  i3704.curves = i3706
  var i3709 = i3705[5]
  var i3708 = []
  for(var i = 0; i < i3709.length; i += 1) {
    i3708.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3709[i + 0]) );
  }
  i3704.events = i3708
  i3704.halfPrecision = !!i3705[6]
  i3704._frameRate = i3705[7]
  i3704.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3705[8], i3704.localBounds)
  i3704.hasMuscleCurves = !!i3705[9]
  var i3711 = i3705[10]
  var i3710 = []
  for(var i = 0; i < i3711.length; i += 1) {
    i3710.push( i3711[i + 0] );
  }
  i3704.clipMuscleConstant = i3710
  i3704.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3705[11], i3704.clipBindingConstant)
  return i3704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3715 = data
  i3714.path = i3715[0]
  i3714.hash = i3715[1]
  i3714.componentType = i3715[2]
  i3714.property = i3715[3]
  i3714.keys = i3715[4]
  var i3717 = i3715[5]
  var i3716 = []
  for(var i = 0; i < i3717.length; i += 1) {
    i3716.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3717[i + 0]) );
  }
  i3714.objectReferenceKeys = i3716
  return i3714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3721 = data
  i3720.time = i3721[0]
  request.r(i3721[1], i3721[2], 0, i3720, 'value')
  return i3720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3725 = data
  i3724.functionName = i3725[0]
  i3724.floatParameter = i3725[1]
  i3724.intParameter = i3725[2]
  i3724.stringParameter = i3725[3]
  request.r(i3725[4], i3725[5], 0, i3724, 'objectReferenceParameter')
  i3724.time = i3725[6]
  return i3724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3727 = data
  i3726.center = new pc.Vec3( i3727[0], i3727[1], i3727[2] )
  i3726.extends = new pc.Vec3( i3727[3], i3727[4], i3727[5] )
  return i3726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3731 = data
  var i3733 = i3731[0]
  var i3732 = []
  for(var i = 0; i < i3733.length; i += 1) {
    i3732.push( i3733[i + 0] );
  }
  i3730.genericBindings = i3732
  var i3735 = i3731[1]
  var i3734 = []
  for(var i = 0; i < i3735.length; i += 1) {
    i3734.push( i3735[i + 0] );
  }
  i3730.pptrCurveMapping = i3734
  return i3730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3737 = data
  i3736.name = i3737[0]
  i3736.ascent = i3737[1]
  i3736.originalLineHeight = i3737[2]
  i3736.fontSize = i3737[3]
  var i3739 = i3737[4]
  var i3738 = []
  for(var i = 0; i < i3739.length; i += 1) {
    i3738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3739[i + 0]) );
  }
  i3736.characterInfo = i3738
  request.r(i3737[5], i3737[6], 0, i3736, 'texture')
  i3736.originalFontSize = i3737[7]
  return i3736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3743 = data
  i3742.index = i3743[0]
  i3742.advance = i3743[1]
  i3742.bearing = i3743[2]
  i3742.glyphWidth = i3743[3]
  i3742.glyphHeight = i3743[4]
  i3742.minX = i3743[5]
  i3742.maxX = i3743[6]
  i3742.minY = i3743[7]
  i3742.maxY = i3743[8]
  i3742.uvBottomLeftX = i3743[9]
  i3742.uvBottomLeftY = i3743[10]
  i3742.uvBottomRightX = i3743[11]
  i3742.uvBottomRightY = i3743[12]
  i3742.uvTopLeftX = i3743[13]
  i3742.uvTopLeftY = i3743[14]
  i3742.uvTopRightX = i3743[15]
  i3742.uvTopRightY = i3743[16]
  return i3742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3745 = data
  i3744.name = i3745[0]
  var i3747 = i3745[1]
  var i3746 = []
  for(var i = 0; i < i3747.length; i += 1) {
    i3746.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3747[i + 0]) );
  }
  i3744.layers = i3746
  var i3749 = i3745[2]
  var i3748 = []
  for(var i = 0; i < i3749.length; i += 1) {
    i3748.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3749[i + 0]) );
  }
  i3744.parameters = i3748
  i3744.animationClips = i3745[3]
  i3744.avatarUnsupported = i3745[4]
  return i3744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3753 = data
  i3752.name = i3753[0]
  i3752.defaultWeight = i3753[1]
  i3752.blendingMode = i3753[2]
  i3752.avatarMask = i3753[3]
  i3752.syncedLayerIndex = i3753[4]
  i3752.syncedLayerAffectsTiming = !!i3753[5]
  i3752.syncedLayers = i3753[6]
  i3752.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3753[7], i3752.stateMachine)
  return i3752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3755 = data
  i3754.id = i3755[0]
  i3754.name = i3755[1]
  i3754.path = i3755[2]
  var i3757 = i3755[3]
  var i3756 = []
  for(var i = 0; i < i3757.length; i += 1) {
    i3756.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3757[i + 0]) );
  }
  i3754.states = i3756
  var i3759 = i3755[4]
  var i3758 = []
  for(var i = 0; i < i3759.length; i += 1) {
    i3758.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3759[i + 0]) );
  }
  i3754.machines = i3758
  var i3761 = i3755[5]
  var i3760 = []
  for(var i = 0; i < i3761.length; i += 1) {
    i3760.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3761[i + 0]) );
  }
  i3754.entryStateTransitions = i3760
  var i3763 = i3755[6]
  var i3762 = []
  for(var i = 0; i < i3763.length; i += 1) {
    i3762.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3763[i + 0]) );
  }
  i3754.exitStateTransitions = i3762
  var i3765 = i3755[7]
  var i3764 = []
  for(var i = 0; i < i3765.length; i += 1) {
    i3764.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3765[i + 0]) );
  }
  i3754.anyStateTransitions = i3764
  i3754.defaultStateId = i3755[8]
  return i3754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3769 = data
  i3768.id = i3769[0]
  i3768.name = i3769[1]
  i3768.cycleOffset = i3769[2]
  i3768.cycleOffsetParameter = i3769[3]
  i3768.cycleOffsetParameterActive = !!i3769[4]
  i3768.mirror = !!i3769[5]
  i3768.mirrorParameter = i3769[6]
  i3768.mirrorParameterActive = !!i3769[7]
  i3768.motionId = i3769[8]
  i3768.nameHash = i3769[9]
  i3768.fullPathHash = i3769[10]
  i3768.speed = i3769[11]
  i3768.speedParameter = i3769[12]
  i3768.speedParameterActive = !!i3769[13]
  i3768.tag = i3769[14]
  i3768.tagHash = i3769[15]
  i3768.writeDefaultValues = !!i3769[16]
  var i3771 = i3769[17]
  var i3770 = []
  for(var i = 0; i < i3771.length; i += 2) {
  request.r(i3771[i + 0], i3771[i + 1], 2, i3770, '')
  }
  i3768.behaviours = i3770
  var i3773 = i3769[18]
  var i3772 = []
  for(var i = 0; i < i3773.length; i += 1) {
    i3772.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3773[i + 0]) );
  }
  i3768.transitions = i3772
  return i3768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3779 = data
  i3778.fullPath = i3779[0]
  i3778.canTransitionToSelf = !!i3779[1]
  i3778.duration = i3779[2]
  i3778.exitTime = i3779[3]
  i3778.hasExitTime = !!i3779[4]
  i3778.hasFixedDuration = !!i3779[5]
  i3778.interruptionSource = i3779[6]
  i3778.offset = i3779[7]
  i3778.orderedInterruption = !!i3779[8]
  i3778.destinationStateId = i3779[9]
  i3778.isExit = !!i3779[10]
  i3778.mute = !!i3779[11]
  i3778.solo = !!i3779[12]
  var i3781 = i3779[13]
  var i3780 = []
  for(var i = 0; i < i3781.length; i += 1) {
    i3780.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3781[i + 0]) );
  }
  i3778.conditions = i3780
  return i3778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3787 = data
  i3786.destinationStateId = i3787[0]
  i3786.isExit = !!i3787[1]
  i3786.mute = !!i3787[2]
  i3786.solo = !!i3787[3]
  var i3789 = i3787[4]
  var i3788 = []
  for(var i = 0; i < i3789.length; i += 1) {
    i3788.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3789[i + 0]) );
  }
  i3786.conditions = i3788
  return i3786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3793 = data
  i3792.mode = i3793[0]
  i3792.parameter = i3793[1]
  i3792.threshold = i3793[2]
  return i3792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3797 = data
  i3796.defaultBool = !!i3797[0]
  i3796.defaultFloat = i3797[1]
  i3796.defaultInt = i3797[2]
  i3796.name = i3797[3]
  i3796.nameHash = i3797[4]
  i3796.type = i3797[5]
  return i3796
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3798 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3799 = data
  i3798.useSafeMode = !!i3799[0]
  i3798.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3799[1], i3798.safeModeOptions)
  i3798.timeScale = i3799[2]
  i3798.unscaledTimeScale = i3799[3]
  i3798.useSmoothDeltaTime = !!i3799[4]
  i3798.maxSmoothUnscaledTime = i3799[5]
  i3798.rewindCallbackMode = i3799[6]
  i3798.showUnityEditorReport = !!i3799[7]
  i3798.logBehaviour = i3799[8]
  i3798.drawGizmos = !!i3799[9]
  i3798.defaultRecyclable = !!i3799[10]
  i3798.defaultAutoPlay = i3799[11]
  i3798.defaultUpdateType = i3799[12]
  i3798.defaultTimeScaleIndependent = !!i3799[13]
  i3798.defaultEaseType = i3799[14]
  i3798.defaultEaseOvershootOrAmplitude = i3799[15]
  i3798.defaultEasePeriod = i3799[16]
  i3798.defaultAutoKill = !!i3799[17]
  i3798.defaultLoopType = i3799[18]
  i3798.debugMode = !!i3799[19]
  i3798.debugStoreTargetId = !!i3799[20]
  i3798.showPreviewPanel = !!i3799[21]
  i3798.storeSettingsLocation = i3799[22]
  i3798.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3799[23], i3798.modules)
  i3798.createASMDEF = !!i3799[24]
  i3798.showPlayingTweens = !!i3799[25]
  i3798.showPausedTweens = !!i3799[26]
  return i3798
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3800 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3801 = data
  i3800.logBehaviour = i3801[0]
  i3800.nestedTweenFailureBehaviour = i3801[1]
  return i3800
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3802 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3803 = data
  i3802.showPanel = !!i3803[0]
  i3802.audioEnabled = !!i3803[1]
  i3802.physicsEnabled = !!i3803[2]
  i3802.physics2DEnabled = !!i3803[3]
  i3802.spriteEnabled = !!i3803[4]
  i3802.uiEnabled = !!i3803[5]
  i3802.textMeshProEnabled = !!i3803[6]
  i3802.tk2DEnabled = !!i3803[7]
  i3802.deAudioEnabled = !!i3803[8]
  i3802.deUnityExtendedEnabled = !!i3803[9]
  i3802.epoOutlineEnabled = !!i3803[10]
  return i3802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3805 = data
  var i3807 = i3805[0]
  var i3806 = []
  for(var i = 0; i < i3807.length; i += 1) {
    i3806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3807[i + 0]) );
  }
  i3804.files = i3806
  i3804.componentToPrefabIds = i3805[1]
  return i3804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3811 = data
  i3810.path = i3811[0]
  request.r(i3811[1], i3811[2], 0, i3810, 'unityObject')
  return i3810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3813 = data
  var i3815 = i3813[0]
  var i3814 = []
  for(var i = 0; i < i3815.length; i += 1) {
    i3814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3815[i + 0]) );
  }
  i3812.scriptsExecutionOrder = i3814
  var i3817 = i3813[1]
  var i3816 = []
  for(var i = 0; i < i3817.length; i += 1) {
    i3816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3817[i + 0]) );
  }
  i3812.sortingLayers = i3816
  var i3819 = i3813[2]
  var i3818 = []
  for(var i = 0; i < i3819.length; i += 1) {
    i3818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3819[i + 0]) );
  }
  i3812.cullingLayers = i3818
  i3812.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3813[3], i3812.timeSettings)
  i3812.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3813[4], i3812.physicsSettings)
  i3812.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3813[5], i3812.physics2DSettings)
  i3812.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3813[6], i3812.qualitySettings)
  i3812.enableRealtimeShadows = !!i3813[7]
  i3812.enableAutoInstancing = !!i3813[8]
  i3812.enableStaticBatching = !!i3813[9]
  i3812.enableDynamicBatching = !!i3813[10]
  i3812.usePreservativeDynamicBatching = !!i3813[11]
  i3812.lightmapEncodingQuality = i3813[12]
  i3812.desiredColorSpace = i3813[13]
  var i3821 = i3813[14]
  var i3820 = []
  for(var i = 0; i < i3821.length; i += 1) {
    i3820.push( i3821[i + 0] );
  }
  i3812.allTags = i3820
  return i3812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3825 = data
  i3824.name = i3825[0]
  i3824.value = i3825[1]
  return i3824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3829 = data
  i3828.id = i3829[0]
  i3828.name = i3829[1]
  i3828.value = i3829[2]
  return i3828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3833 = data
  i3832.id = i3833[0]
  i3832.name = i3833[1]
  return i3832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3835 = data
  i3834.fixedDeltaTime = i3835[0]
  i3834.maximumDeltaTime = i3835[1]
  i3834.timeScale = i3835[2]
  i3834.maximumParticleTimestep = i3835[3]
  return i3834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3837 = data
  i3836.gravity = new pc.Vec3( i3837[0], i3837[1], i3837[2] )
  i3836.defaultSolverIterations = i3837[3]
  i3836.bounceThreshold = i3837[4]
  i3836.autoSyncTransforms = !!i3837[5]
  i3836.autoSimulation = !!i3837[6]
  var i3839 = i3837[7]
  var i3838 = []
  for(var i = 0; i < i3839.length; i += 1) {
    i3838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3839[i + 0]) );
  }
  i3836.collisionMatrix = i3838
  return i3836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3843 = data
  i3842.enabled = !!i3843[0]
  i3842.layerId = i3843[1]
  i3842.otherLayerId = i3843[2]
  return i3842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3845 = data
  request.r(i3845[0], i3845[1], 0, i3844, 'material')
  i3844.gravity = new pc.Vec2( i3845[2], i3845[3] )
  i3844.positionIterations = i3845[4]
  i3844.velocityIterations = i3845[5]
  i3844.velocityThreshold = i3845[6]
  i3844.maxLinearCorrection = i3845[7]
  i3844.maxAngularCorrection = i3845[8]
  i3844.maxTranslationSpeed = i3845[9]
  i3844.maxRotationSpeed = i3845[10]
  i3844.baumgarteScale = i3845[11]
  i3844.baumgarteTOIScale = i3845[12]
  i3844.timeToSleep = i3845[13]
  i3844.linearSleepTolerance = i3845[14]
  i3844.angularSleepTolerance = i3845[15]
  i3844.defaultContactOffset = i3845[16]
  i3844.autoSimulation = !!i3845[17]
  i3844.queriesHitTriggers = !!i3845[18]
  i3844.queriesStartInColliders = !!i3845[19]
  i3844.callbacksOnDisable = !!i3845[20]
  i3844.reuseCollisionCallbacks = !!i3845[21]
  i3844.autoSyncTransforms = !!i3845[22]
  var i3847 = i3845[23]
  var i3846 = []
  for(var i = 0; i < i3847.length; i += 1) {
    i3846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3847[i + 0]) );
  }
  i3844.collisionMatrix = i3846
  return i3844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3851 = data
  i3850.enabled = !!i3851[0]
  i3850.layerId = i3851[1]
  i3850.otherLayerId = i3851[2]
  return i3850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3853 = data
  var i3855 = i3853[0]
  var i3854 = []
  for(var i = 0; i < i3855.length; i += 1) {
    i3854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3855[i + 0]) );
  }
  i3852.qualityLevels = i3854
  var i3857 = i3853[1]
  var i3856 = []
  for(var i = 0; i < i3857.length; i += 1) {
    i3856.push( i3857[i + 0] );
  }
  i3852.names = i3856
  i3852.shadows = i3853[2]
  i3852.anisotropicFiltering = i3853[3]
  i3852.antiAliasing = i3853[4]
  i3852.lodBias = i3853[5]
  i3852.shadowCascades = i3853[6]
  i3852.shadowDistance = i3853[7]
  i3852.shadowmaskMode = i3853[8]
  i3852.shadowProjection = i3853[9]
  i3852.shadowResolution = i3853[10]
  i3852.softParticles = !!i3853[11]
  i3852.softVegetation = !!i3853[12]
  i3852.activeColorSpace = i3853[13]
  i3852.desiredColorSpace = i3853[14]
  i3852.masterTextureLimit = i3853[15]
  i3852.maxQueuedFrames = i3853[16]
  i3852.particleRaycastBudget = i3853[17]
  i3852.pixelLightCount = i3853[18]
  i3852.realtimeReflectionProbes = !!i3853[19]
  i3852.shadowCascade2Split = i3853[20]
  i3852.shadowCascade4Split = new pc.Vec3( i3853[21], i3853[22], i3853[23] )
  i3852.streamingMipmapsActive = !!i3853[24]
  i3852.vSyncCount = i3853[25]
  i3852.asyncUploadBufferSize = i3853[26]
  i3852.asyncUploadTimeSlice = i3853[27]
  i3852.billboardsFaceCameraPosition = !!i3853[28]
  i3852.shadowNearPlaneOffset = i3853[29]
  i3852.streamingMipmapsMemoryBudget = i3853[30]
  i3852.maximumLODLevel = i3853[31]
  i3852.streamingMipmapsAddAllCameras = !!i3853[32]
  i3852.streamingMipmapsMaxLevelReduction = i3853[33]
  i3852.streamingMipmapsRenderersPerFrame = i3853[34]
  i3852.resolutionScalingFixedDPIFactor = i3853[35]
  i3852.streamingMipmapsMaxFileIORequests = i3853[36]
  i3852.currentQualityLevel = i3853[37]
  return i3852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i3860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i3861 = data
  var i3863 = i3861[0]
  var i3862 = []
  for(var i = 0; i < i3863.length; i += 1) {
    i3862.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i3863[i + 0]) );
  }
  i3860.groups = i3862
  var i3865 = i3861[1]
  var i3864 = []
  for(var i = 0; i < i3865.length; i += 1) {
    i3864.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i3865[i + 0]) );
  }
  i3860.snapshots = i3864
  return i3860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i3868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i3869 = data
  i3868.id = i3869[0]
  i3868.childGroupIds = i3869[1]
  i3868.name = i3869[2]
  return i3868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i3872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i3873 = data
  i3872.id = i3873[0]
  var i3875 = i3873[1]
  var i3874 = []
  for(var i = 0; i < i3875.length; i += 1) {
    i3874.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i3875[i + 0]) );
  }
  i3872.parameters = i3874
  return i3872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i3878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i3879 = data
  i3878.name = i3879[0]
  i3878.value = i3879[1]
  return i3878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3883 = data
  i3882.weight = i3883[0]
  i3882.vertices = i3883[1]
  i3882.normals = i3883[2]
  i3882.tangents = i3883[3]
  return i3882
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37}}

Deserializers.requiredComponents = {"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[84],"85":[9],"86":[87],"88":[87],"89":[87],"90":[87],"91":[87],"92":[87],"93":[87],"94":[44],"95":[44],"96":[44],"97":[44],"98":[44],"99":[44],"100":[44],"101":[44],"102":[44],"103":[44],"104":[44],"105":[44],"106":[44],"107":[9],"108":[58],"109":[110],"111":[110],"8":[7],"112":[37],"55":[26],"113":[29],"114":[26],"115":[116],"117":[116],"118":[14],"119":[29],"120":[26],"121":[25],"43":[26],"122":[7],"123":[7],"12":[8],"16":[15,7],"124":[7],"11":[8],"125":[7],"126":[7],"127":[7],"128":[7],"129":[7],"130":[7],"131":[7],"132":[7],"133":[7],"134":[15,7],"135":[7],"136":[7],"137":[7],"138":[7],"18":[15,7],"139":[7],"140":[69],"141":[69],"70":[69],"142":[69],"143":[9],"144":[9]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","DG.Tweening.DOTweenAnimation","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Button","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Level1_Cloth_Playable_Step4","UnityEngine.GameObject","BasicDrag","UnityEngine.SpriteRenderer","BD_CameraFollow","Level1_SurfController","UnityEngine.BoxCollider2D","RotaryTimerKnob","UnityEngine.AudioClip","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.LineRenderer","TextureOffsetScroller","UnityEngine.TrailRenderer","UnityEngine.SpriteMask","_2dxFX_Wave","BD_Clamp","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.Rigidbody2D","PlaceItem","ActionOnTap","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","SewingCol","OutlinePulse","BD_Action","BD_Fold","BD_Progress","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","StaticFixedPipe","BD_SpriteChange","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableRouter","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","TeaseTapCTA","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "15.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "4Sept2026_Lvl1_2_Step_4_v2";

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

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1766";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4209";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "False";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "HMBL.";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.hmbl.perfect.makeover.fashion.asmr";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "7419a82b-2425-4c32-b962-b79da0367b22";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

