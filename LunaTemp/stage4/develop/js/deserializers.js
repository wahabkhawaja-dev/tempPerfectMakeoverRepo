var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3430 = root || request.c( 'UnityEngine.JointSpring' )
  var i3431 = data
  i3430.spring = i3431[0]
  i3430.damper = i3431[1]
  i3430.targetPosition = i3431[2]
  return i3430
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3432 = root || request.c( 'UnityEngine.JointMotor' )
  var i3433 = data
  i3432.m_TargetVelocity = i3433[0]
  i3432.m_Force = i3433[1]
  i3432.m_FreeSpin = i3433[2]
  return i3432
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3434 = root || request.c( 'UnityEngine.JointLimits' )
  var i3435 = data
  i3434.m_Min = i3435[0]
  i3434.m_Max = i3435[1]
  i3434.m_Bounciness = i3435[2]
  i3434.m_BounceMinVelocity = i3435[3]
  i3434.m_ContactDistance = i3435[4]
  i3434.minBounce = i3435[5]
  i3434.maxBounce = i3435[6]
  return i3434
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3436 = root || request.c( 'UnityEngine.JointDrive' )
  var i3437 = data
  i3436.m_PositionSpring = i3437[0]
  i3436.m_PositionDamper = i3437[1]
  i3436.m_MaximumForce = i3437[2]
  i3436.m_UseAcceleration = i3437[3]
  return i3436
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3438 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3439 = data
  i3438.m_Spring = i3439[0]
  i3438.m_Damper = i3439[1]
  return i3438
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3440 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3441 = data
  i3440.m_Limit = i3441[0]
  i3440.m_Bounciness = i3441[1]
  i3440.m_ContactDistance = i3441[2]
  return i3440
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3442 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3443 = data
  i3442.m_ExtremumSlip = i3443[0]
  i3442.m_ExtremumValue = i3443[1]
  i3442.m_AsymptoteSlip = i3443[2]
  i3442.m_AsymptoteValue = i3443[3]
  i3442.m_Stiffness = i3443[4]
  return i3442
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3444 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3445 = data
  i3444.m_LowerAngle = i3445[0]
  i3444.m_UpperAngle = i3445[1]
  return i3444
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3446 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3447 = data
  i3446.m_MotorSpeed = i3447[0]
  i3446.m_MaximumMotorTorque = i3447[1]
  return i3446
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3448 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3449 = data
  i3448.m_DampingRatio = i3449[0]
  i3448.m_Frequency = i3449[1]
  i3448.m_Angle = i3449[2]
  return i3448
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3450 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3451 = data
  i3450.m_LowerTranslation = i3451[0]
  i3450.m_UpperTranslation = i3451[1]
  return i3450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3452 = root || new pc.UnityMaterial()
  var i3453 = data
  i3452.name = i3453[0]
  request.r(i3453[1], i3453[2], 0, i3452, 'shader')
  i3452.renderQueue = i3453[3]
  i3452.enableInstancing = !!i3453[4]
  var i3455 = i3453[5]
  var i3454 = []
  for(var i = 0; i < i3455.length; i += 1) {
    i3454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3455[i + 0]) );
  }
  i3452.floatParameters = i3454
  var i3457 = i3453[6]
  var i3456 = []
  for(var i = 0; i < i3457.length; i += 1) {
    i3456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3457[i + 0]) );
  }
  i3452.colorParameters = i3456
  var i3459 = i3453[7]
  var i3458 = []
  for(var i = 0; i < i3459.length; i += 1) {
    i3458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3459[i + 0]) );
  }
  i3452.vectorParameters = i3458
  var i3461 = i3453[8]
  var i3460 = []
  for(var i = 0; i < i3461.length; i += 1) {
    i3460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3461[i + 0]) );
  }
  i3452.textureParameters = i3460
  var i3463 = i3453[9]
  var i3462 = []
  for(var i = 0; i < i3463.length; i += 1) {
    i3462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3463[i + 0]) );
  }
  i3452.materialFlags = i3462
  return i3452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3467 = data
  i3466.name = i3467[0]
  i3466.value = i3467[1]
  return i3466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3471 = data
  i3470.name = i3471[0]
  i3470.value = new pc.Color(i3471[1], i3471[2], i3471[3], i3471[4])
  return i3470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3475 = data
  i3474.name = i3475[0]
  i3474.value = new pc.Vec4( i3475[1], i3475[2], i3475[3], i3475[4] )
  return i3474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3479 = data
  i3478.name = i3479[0]
  request.r(i3479[1], i3479[2], 0, i3478, 'value')
  return i3478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3483 = data
  i3482.name = i3483[0]
  i3482.enabled = !!i3483[1]
  return i3482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3485 = data
  i3484.name = i3485[0]
  i3484.width = i3485[1]
  i3484.height = i3485[2]
  i3484.mipmapCount = i3485[3]
  i3484.anisoLevel = i3485[4]
  i3484.filterMode = i3485[5]
  i3484.hdr = !!i3485[6]
  i3484.format = i3485[7]
  i3484.wrapMode = i3485[8]
  i3484.alphaIsTransparency = !!i3485[9]
  i3484.alphaSource = i3485[10]
  i3484.graphicsFormat = i3485[11]
  i3484.sRGBTexture = !!i3485[12]
  i3484.desiredColorSpace = i3485[13]
  i3484.wrapU = i3485[14]
  i3484.wrapV = i3485[15]
  return i3484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3487 = data
  i3486.name = i3487[0]
  i3486.halfPrecision = !!i3487[1]
  i3486.useSimplification = !!i3487[2]
  i3486.useUInt32IndexFormat = !!i3487[3]
  i3486.vertexCount = i3487[4]
  i3486.aabb = i3487[5]
  var i3489 = i3487[6]
  var i3488 = []
  for(var i = 0; i < i3489.length; i += 1) {
    i3488.push( !!i3489[i + 0] );
  }
  i3486.streams = i3488
  i3486.vertices = i3487[7]
  var i3491 = i3487[8]
  var i3490 = []
  for(var i = 0; i < i3491.length; i += 1) {
    i3490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3491[i + 0]) );
  }
  i3486.subMeshes = i3490
  var i3493 = i3487[9]
  var i3492 = []
  for(var i = 0; i < i3493.length; i += 16) {
    i3492.push( new pc.Mat4().setData(i3493[i + 0], i3493[i + 1], i3493[i + 2], i3493[i + 3],  i3493[i + 4], i3493[i + 5], i3493[i + 6], i3493[i + 7],  i3493[i + 8], i3493[i + 9], i3493[i + 10], i3493[i + 11],  i3493[i + 12], i3493[i + 13], i3493[i + 14], i3493[i + 15]) );
  }
  i3486.bindposes = i3492
  var i3495 = i3487[10]
  var i3494 = []
  for(var i = 0; i < i3495.length; i += 1) {
    i3494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3495[i + 0]) );
  }
  i3486.blendShapes = i3494
  return i3486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3501 = data
  i3500.triangles = i3501[0]
  return i3500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3507 = data
  i3506.name = i3507[0]
  var i3509 = i3507[1]
  var i3508 = []
  for(var i = 0; i < i3509.length; i += 1) {
    i3508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3509[i + 0]) );
  }
  i3506.frames = i3508
  return i3506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3511 = data
  i3510.position = new pc.Vec3( i3511[0], i3511[1], i3511[2] )
  i3510.scale = new pc.Vec3( i3511[3], i3511[4], i3511[5] )
  i3510.rotation = new pc.Quat(i3511[6], i3511[7], i3511[8], i3511[9])
  return i3510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3513 = data
  i3512.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3513[0], i3512.main)
  i3512.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3513[1], i3512.colorBySpeed)
  i3512.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3513[2], i3512.colorOverLifetime)
  i3512.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3513[3], i3512.emission)
  i3512.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3513[4], i3512.rotationBySpeed)
  i3512.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3513[5], i3512.rotationOverLifetime)
  i3512.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3513[6], i3512.shape)
  i3512.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3513[7], i3512.sizeBySpeed)
  i3512.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3513[8], i3512.sizeOverLifetime)
  i3512.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3513[9], i3512.textureSheetAnimation)
  i3512.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3513[10], i3512.velocityOverLifetime)
  i3512.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3513[11], i3512.noise)
  i3512.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3513[12], i3512.inheritVelocity)
  i3512.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3513[13], i3512.forceOverLifetime)
  i3512.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3513[14], i3512.limitVelocityOverLifetime)
  i3512.useAutoRandomSeed = !!i3513[15]
  i3512.randomSeed = i3513[16]
  return i3512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3514 = root || new pc.ParticleSystemMain()
  var i3515 = data
  i3514.duration = i3515[0]
  i3514.loop = !!i3515[1]
  i3514.prewarm = !!i3515[2]
  i3514.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3515[3], i3514.startDelay)
  i3514.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3515[4], i3514.startLifetime)
  i3514.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3515[5], i3514.startSpeed)
  i3514.startSize3D = !!i3515[6]
  i3514.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3515[7], i3514.startSizeX)
  i3514.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3515[8], i3514.startSizeY)
  i3514.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3515[9], i3514.startSizeZ)
  i3514.startRotation3D = !!i3515[10]
  i3514.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3515[11], i3514.startRotationX)
  i3514.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3515[12], i3514.startRotationY)
  i3514.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3515[13], i3514.startRotationZ)
  i3514.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3515[14], i3514.startColor)
  i3514.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3515[15], i3514.gravityModifier)
  i3514.simulationSpace = i3515[16]
  request.r(i3515[17], i3515[18], 0, i3514, 'customSimulationSpace')
  i3514.simulationSpeed = i3515[19]
  i3514.useUnscaledTime = !!i3515[20]
  i3514.scalingMode = i3515[21]
  i3514.playOnAwake = !!i3515[22]
  i3514.maxParticles = i3515[23]
  i3514.emitterVelocityMode = i3515[24]
  i3514.stopAction = i3515[25]
  return i3514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3516 = root || new pc.MinMaxCurve()
  var i3517 = data
  i3516.mode = i3517[0]
  i3516.curveMin = new pc.AnimationCurve( { keys_flow: i3517[1] } )
  i3516.curveMax = new pc.AnimationCurve( { keys_flow: i3517[2] } )
  i3516.curveMultiplier = i3517[3]
  i3516.constantMin = i3517[4]
  i3516.constantMax = i3517[5]
  return i3516
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3518 = root || new pc.MinMaxGradient()
  var i3519 = data
  i3518.mode = i3519[0]
  i3518.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3519[1], i3518.gradientMin)
  i3518.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3519[2], i3518.gradientMax)
  i3518.colorMin = new pc.Color(i3519[3], i3519[4], i3519[5], i3519[6])
  i3518.colorMax = new pc.Color(i3519[7], i3519[8], i3519[9], i3519[10])
  return i3518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3521 = data
  i3520.mode = i3521[0]
  var i3523 = i3521[1]
  var i3522 = []
  for(var i = 0; i < i3523.length; i += 1) {
    i3522.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3523[i + 0]) );
  }
  i3520.colorKeys = i3522
  var i3525 = i3521[2]
  var i3524 = []
  for(var i = 0; i < i3525.length; i += 1) {
    i3524.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3525[i + 0]) );
  }
  i3520.alphaKeys = i3524
  return i3520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3526 = root || new pc.ParticleSystemColorBySpeed()
  var i3527 = data
  i3526.enabled = !!i3527[0]
  i3526.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3527[1], i3526.color)
  i3526.range = new pc.Vec2( i3527[2], i3527[3] )
  return i3526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3531 = data
  i3530.color = new pc.Color(i3531[0], i3531[1], i3531[2], i3531[3])
  i3530.time = i3531[4]
  return i3530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3535 = data
  i3534.alpha = i3535[0]
  i3534.time = i3535[1]
  return i3534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3536 = root || new pc.ParticleSystemColorOverLifetime()
  var i3537 = data
  i3536.enabled = !!i3537[0]
  i3536.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3537[1], i3536.color)
  return i3536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3538 = root || new pc.ParticleSystemEmitter()
  var i3539 = data
  i3538.enabled = !!i3539[0]
  i3538.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3539[1], i3538.rateOverTime)
  i3538.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3539[2], i3538.rateOverDistance)
  var i3541 = i3539[3]
  var i3540 = []
  for(var i = 0; i < i3541.length; i += 1) {
    i3540.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3541[i + 0]) );
  }
  i3538.bursts = i3540
  return i3538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3544 = root || new pc.ParticleSystemBurst()
  var i3545 = data
  i3544.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3545[0], i3544.count)
  i3544.cycleCount = i3545[1]
  i3544.minCount = i3545[2]
  i3544.maxCount = i3545[3]
  i3544.repeatInterval = i3545[4]
  i3544.time = i3545[5]
  return i3544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3546 = root || new pc.ParticleSystemRotationBySpeed()
  var i3547 = data
  i3546.enabled = !!i3547[0]
  i3546.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3547[1], i3546.x)
  i3546.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3547[2], i3546.y)
  i3546.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3547[3], i3546.z)
  i3546.separateAxes = !!i3547[4]
  i3546.range = new pc.Vec2( i3547[5], i3547[6] )
  return i3546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3548 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3549 = data
  i3548.enabled = !!i3549[0]
  i3548.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3549[1], i3548.x)
  i3548.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3549[2], i3548.y)
  i3548.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3549[3], i3548.z)
  i3548.separateAxes = !!i3549[4]
  return i3548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3550 = root || new pc.ParticleSystemShape()
  var i3551 = data
  i3550.enabled = !!i3551[0]
  i3550.shapeType = i3551[1]
  i3550.randomDirectionAmount = i3551[2]
  i3550.sphericalDirectionAmount = i3551[3]
  i3550.randomPositionAmount = i3551[4]
  i3550.alignToDirection = !!i3551[5]
  i3550.radius = i3551[6]
  i3550.radiusMode = i3551[7]
  i3550.radiusSpread = i3551[8]
  i3550.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3551[9], i3550.radiusSpeed)
  i3550.radiusThickness = i3551[10]
  i3550.angle = i3551[11]
  i3550.length = i3551[12]
  i3550.boxThickness = new pc.Vec3( i3551[13], i3551[14], i3551[15] )
  i3550.meshShapeType = i3551[16]
  request.r(i3551[17], i3551[18], 0, i3550, 'mesh')
  request.r(i3551[19], i3551[20], 0, i3550, 'meshRenderer')
  request.r(i3551[21], i3551[22], 0, i3550, 'skinnedMeshRenderer')
  i3550.useMeshMaterialIndex = !!i3551[23]
  i3550.meshMaterialIndex = i3551[24]
  i3550.useMeshColors = !!i3551[25]
  i3550.normalOffset = i3551[26]
  i3550.arc = i3551[27]
  i3550.arcMode = i3551[28]
  i3550.arcSpread = i3551[29]
  i3550.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3551[30], i3550.arcSpeed)
  i3550.donutRadius = i3551[31]
  i3550.position = new pc.Vec3( i3551[32], i3551[33], i3551[34] )
  i3550.rotation = new pc.Vec3( i3551[35], i3551[36], i3551[37] )
  i3550.scale = new pc.Vec3( i3551[38], i3551[39], i3551[40] )
  return i3550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3552 = root || new pc.ParticleSystemSizeBySpeed()
  var i3553 = data
  i3552.enabled = !!i3553[0]
  i3552.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3553[1], i3552.x)
  i3552.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3553[2], i3552.y)
  i3552.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3553[3], i3552.z)
  i3552.separateAxes = !!i3553[4]
  i3552.range = new pc.Vec2( i3553[5], i3553[6] )
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3554 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3555 = data
  i3554.enabled = !!i3555[0]
  i3554.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3555[1], i3554.x)
  i3554.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3555[2], i3554.y)
  i3554.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3555[3], i3554.z)
  i3554.separateAxes = !!i3555[4]
  return i3554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3556 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3557 = data
  i3556.enabled = !!i3557[0]
  i3556.mode = i3557[1]
  i3556.animation = i3557[2]
  i3556.numTilesX = i3557[3]
  i3556.numTilesY = i3557[4]
  i3556.useRandomRow = !!i3557[5]
  i3556.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3557[6], i3556.frameOverTime)
  i3556.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3557[7], i3556.startFrame)
  i3556.cycleCount = i3557[8]
  i3556.rowIndex = i3557[9]
  i3556.flipU = i3557[10]
  i3556.flipV = i3557[11]
  i3556.spriteCount = i3557[12]
  var i3559 = i3557[13]
  var i3558 = []
  for(var i = 0; i < i3559.length; i += 2) {
  request.r(i3559[i + 0], i3559[i + 1], 2, i3558, '')
  }
  i3556.sprites = i3558
  return i3556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3562 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3563 = data
  i3562.enabled = !!i3563[0]
  i3562.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[1], i3562.x)
  i3562.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[2], i3562.y)
  i3562.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[3], i3562.z)
  i3562.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[4], i3562.radial)
  i3562.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[5], i3562.speedModifier)
  i3562.space = i3563[6]
  i3562.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[7], i3562.orbitalX)
  i3562.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[8], i3562.orbitalY)
  i3562.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[9], i3562.orbitalZ)
  i3562.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[10], i3562.orbitalOffsetX)
  i3562.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[11], i3562.orbitalOffsetY)
  i3562.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3563[12], i3562.orbitalOffsetZ)
  return i3562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3564 = root || new pc.ParticleSystemNoise()
  var i3565 = data
  i3564.enabled = !!i3565[0]
  i3564.separateAxes = !!i3565[1]
  i3564.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3565[2], i3564.strengthX)
  i3564.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3565[3], i3564.strengthY)
  i3564.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3565[4], i3564.strengthZ)
  i3564.frequency = i3565[5]
  i3564.damping = !!i3565[6]
  i3564.octaveCount = i3565[7]
  i3564.octaveMultiplier = i3565[8]
  i3564.octaveScale = i3565[9]
  i3564.quality = i3565[10]
  i3564.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3565[11], i3564.scrollSpeed)
  i3564.scrollSpeedMultiplier = i3565[12]
  i3564.remapEnabled = !!i3565[13]
  i3564.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3565[14], i3564.remapX)
  i3564.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3565[15], i3564.remapY)
  i3564.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3565[16], i3564.remapZ)
  i3564.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3565[17], i3564.positionAmount)
  i3564.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3565[18], i3564.rotationAmount)
  i3564.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3565[19], i3564.sizeAmount)
  return i3564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3566 = root || new pc.ParticleSystemInheritVelocity()
  var i3567 = data
  i3566.enabled = !!i3567[0]
  i3566.mode = i3567[1]
  i3566.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3567[2], i3566.curve)
  return i3566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3568 = root || new pc.ParticleSystemForceOverLifetime()
  var i3569 = data
  i3568.enabled = !!i3569[0]
  i3568.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[1], i3568.x)
  i3568.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[2], i3568.y)
  i3568.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[3], i3568.z)
  i3568.space = i3569[4]
  i3568.randomized = !!i3569[5]
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3570 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3571 = data
  i3570.enabled = !!i3571[0]
  i3570.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3571[1], i3570.limit)
  i3570.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3571[2], i3570.limitX)
  i3570.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3571[3], i3570.limitY)
  i3570.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3571[4], i3570.limitZ)
  i3570.dampen = i3571[5]
  i3570.separateAxes = !!i3571[6]
  i3570.space = i3571[7]
  i3570.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3571[8], i3570.drag)
  i3570.multiplyDragByParticleSize = !!i3571[9]
  i3570.multiplyDragByParticleVelocity = !!i3571[10]
  return i3570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3573 = data
  request.r(i3573[0], i3573[1], 0, i3572, 'mesh')
  i3572.meshCount = i3573[2]
  i3572.activeVertexStreamsCount = i3573[3]
  i3572.alignment = i3573[4]
  i3572.renderMode = i3573[5]
  i3572.sortMode = i3573[6]
  i3572.lengthScale = i3573[7]
  i3572.velocityScale = i3573[8]
  i3572.cameraVelocityScale = i3573[9]
  i3572.normalDirection = i3573[10]
  i3572.sortingFudge = i3573[11]
  i3572.minParticleSize = i3573[12]
  i3572.maxParticleSize = i3573[13]
  i3572.pivot = new pc.Vec3( i3573[14], i3573[15], i3573[16] )
  request.r(i3573[17], i3573[18], 0, i3572, 'trailMaterial')
  i3572.applyActiveColorSpace = !!i3573[19]
  i3572.enabled = !!i3573[20]
  request.r(i3573[21], i3573[22], 0, i3572, 'sharedMaterial')
  var i3575 = i3573[23]
  var i3574 = []
  for(var i = 0; i < i3575.length; i += 2) {
  request.r(i3575[i + 0], i3575[i + 1], 2, i3574, '')
  }
  i3572.sharedMaterials = i3574
  i3572.receiveShadows = !!i3573[24]
  i3572.shadowCastingMode = i3573[25]
  i3572.sortingLayerID = i3573[26]
  i3572.sortingOrder = i3573[27]
  i3572.lightmapIndex = i3573[28]
  i3572.lightmapSceneIndex = i3573[29]
  i3572.lightmapScaleOffset = new pc.Vec4( i3573[30], i3573[31], i3573[32], i3573[33] )
  i3572.lightProbeUsage = i3573[34]
  i3572.reflectionProbeUsage = i3573[35]
  return i3572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3579 = data
  i3578.name = i3579[0]
  i3578.tagId = i3579[1]
  i3578.enabled = !!i3579[2]
  i3578.isStatic = !!i3579[3]
  i3578.layer = i3579[4]
  return i3578
}

Deserializers["Level1_Armpit_Playable"] = function (request, data, root) {
  var i3580 = root || request.c( 'Level1_Armpit_Playable' )
  var i3581 = data
  i3580.MainZoom = request.d('ZoomPos', i3581[0], i3580.MainZoom)
  request.r(i3581[1], i3581[2], 0, i3580, 'view1')
  request.r(i3581[3], i3581[4], 0, i3580, 'view2')
  request.r(i3581[5], i3581[6], 0, i3580, 'hairArmpit')
  i3580.ZoomStep1 = request.d('ZoomPos', i3581[7], i3580.ZoomStep1)
  request.r(i3581[8], i3581[9], 0, i3580, 'ToolStep1')
  request.r(i3581[10], i3581[11], 0, i3580, 'ToolStep1CameraFollow')
  request.r(i3581[12], i3581[13], 0, i3580, 'eraserSfx')
  i3580.ZoomStep2 = request.d('ZoomPos', i3581[14], i3580.ZoomStep2)
  request.r(i3581[15], i3581[16], 0, i3580, 'ToolStep2Parent')
  request.r(i3581[17], i3581[18], 0, i3580, 'BeansParent')
  i3580.ZoomStep3 = request.d('ZoomPos', i3581[19], i3580.ZoomStep3)
  request.r(i3581[20], i3581[21], 0, i3580, 'JarHandIndication')
  request.r(i3581[22], i3581[23], 0, i3580, 'GreenBtnCol_Damaged')
  request.r(i3581[24], i3581[25], 0, i3580, 'GreenBtnCol_Fixed')
  request.r(i3581[26], i3581[27], 0, i3580, 'HandTap1_3')
  request.r(i3581[28], i3581[29], 0, i3580, 'GreenBtn')
  request.r(i3581[30], i3581[31], 0, i3580, 'GreenBtnIndication')
  request.r(i3581[32], i3581[33], 0, i3580, 'machineDamage')
  request.r(i3581[34], i3581[35], 0, i3580, 'machineBlackImg')
  request.r(i3581[36], i3581[37], 0, i3580, 'blackSmokeVfx')
  request.r(i3581[38], i3581[39], 0, i3580, 'fixItErrorSfx')
  request.r(i3581[40], i3581[41], 0, i3580, 'boilingWax')
  request.r(i3581[42], i3581[43], 0, i3580, 'boilingParticle')
  var i3583 = i3581[44]
  var i3582 = []
  for(var i = 0; i < i3583.length; i += 2) {
  request.r(i3583[i + 0], i3583[i + 1], 2, i3582, '')
  }
  i3580.AllBeans = i3582
  request.r(i3581[45], i3581[46], 0, i3580, 'machineBtnSfx')
  request.r(i3581[47], i3581[48], 0, i3580, 'boilingSfx')
  request.r(i3581[49], i3581[50], 0, i3580, 'fixItPrompt')
  request.r(i3581[51], i3581[52], 0, i3580, 'fixItPromptHand')
  i3580.levelName = i3581[53]
  i3580.levelReward = i3581[54]
  request.r(i3581[55], i3581[56], 0, i3580, 'LevelIcon')
  request.r(i3581[57], i3581[58], 0, i3580, 'Level_BG')
  var i3585 = i3581[59]
  var i3584 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3585.length; i += 2) {
  request.r(i3585[i + 0], i3585[i + 1], 1, i3584, '')
  }
  i3580.ToolIcons = i3584
  var i3587 = i3581[60]
  var i3586 = []
  for(var i = 0; i < i3587.length; i += 2) {
  request.r(i3587[i + 0], i3587[i + 1], 2, i3586, '')
  }
  i3580.AllDrags = i3586
  var i3589 = i3581[61]
  var i3588 = []
  for(var i = 0; i < i3589.length; i += 2) {
  request.r(i3589[i + 0], i3589[i + 1], 2, i3588, '')
  }
  i3580.AllSources = i3588
  var i3591 = i3581[62]
  var i3590 = []
  for(var i = 0; i < i3591.length; i += 2) {
  request.r(i3591[i + 0], i3591[i + 1], 2, i3590, '')
  }
  i3580.AllScratches = i3590
  i3580.stepsDone = i3581[63]
  i3580.levelNo = i3581[64]
  i3580.partNo = i3581[65]
  return i3580
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i3592 = root || request.c( 'ZoomPos' )
  var i3593 = data
  i3592.CameraPos = new pc.Vec3( i3593[0], i3593[1], i3593[2] )
  i3592.CameraFOV = i3593[3]
  return i3592
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i3604 = root || request.c( 'PlayableCTA' )
  var i3605 = data
  i3604.trigger = i3605[0]
  i3604.afterSeconds = i3605[1]
  i3604.afterTaps = i3605[2]
  request.r(i3605[3], i3605[4], 0, i3604, 'scratchProgress')
  i3604.scratchIndex = i3605[5]
  i3604.progressThreshold = i3605[6]
  request.r(i3605[7], i3605[8], 0, i3604, 'watchedTool')
  i3604.blockInputOnFire = !!i3605[9]
  i3604.refireOnEveryTap = !!i3605[10]
  i3604.refireDelay = i3605[11]
  i3604.showEndCard = !!i3605[12]
  request.r(i3605[13], i3605[14], 0, i3604, 'endCard')
  i3604.showEndCardOnProgressTrigger = !!i3605[15]
  i3604.showEndCardOnToolAppearTrigger = !!i3605[16]
  i3604.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i3605[17], i3604.onCtaFired)
  i3604.logWhenFired = !!i3605[18]
  return i3604
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3606 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3607 = data
  i3606.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3607[0], i3606.m_PersistentCalls)
  return i3606
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3608 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3609 = data
  var i3611 = i3609[0]
  var i3610 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3611.length; i += 1) {
    i3610.add(request.d('UnityEngine.Events.PersistentCall', i3611[i + 0]));
  }
  i3608.m_Calls = i3610
  return i3608
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3614 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3615 = data
  request.r(i3615[0], i3615[1], 0, i3614, 'm_Target')
  i3614.m_TargetAssemblyTypeName = i3615[2]
  i3614.m_MethodName = i3615[3]
  i3614.m_Mode = i3615[4]
  i3614.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3615[5], i3614.m_Arguments)
  i3614.m_CallState = i3615[6]
  return i3614
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i3616 = root || request.c( 'PlayableFadeCoverSettings' )
  var i3617 = data
  i3616.revealDelay = i3617[0]
  i3616.revealDuration = i3617[1]
  return i3616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3619 = data
  request.r(i3619[0], i3619[1], 0, i3618, 'animatorController')
  request.r(i3619[2], i3619[3], 0, i3618, 'avatar')
  i3618.updateMode = i3619[4]
  i3618.hasTransformHierarchy = !!i3619[5]
  i3618.applyRootMotion = !!i3619[6]
  var i3621 = i3619[7]
  var i3620 = []
  for(var i = 0; i < i3621.length; i += 2) {
  request.r(i3621[i + 0], i3621[i + 1], 2, i3620, '')
  }
  i3618.humanBones = i3620
  i3618.enabled = !!i3619[8]
  return i3618
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i3624 = root || request.c( 'BD_AnimationHelper' )
  var i3625 = data
  i3624.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i3625[0], i3624.OnAnimationComplete)
  request.r(i3625[1], i3625[2], 0, i3624, 'sfxClip')
  return i3624
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3626 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3627 = data
  request.r(i3627[0], i3627[1], 0, i3626, 'm_ObjectArgument')
  i3626.m_ObjectArgumentAssemblyTypeName = i3627[2]
  i3626.m_IntArgument = i3627[3]
  i3626.m_FloatArgument = i3627[4]
  i3626.m_StringArgument = i3627[5]
  i3626.m_BoolArgument = !!i3627[6]
  return i3626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3629 = data
  i3628.color = new pc.Color(i3629[0], i3629[1], i3629[2], i3629[3])
  request.r(i3629[4], i3629[5], 0, i3628, 'sprite')
  i3628.flipX = !!i3629[6]
  i3628.flipY = !!i3629[7]
  i3628.drawMode = i3629[8]
  i3628.size = new pc.Vec2( i3629[9], i3629[10] )
  i3628.tileMode = i3629[11]
  i3628.adaptiveModeThreshold = i3629[12]
  i3628.maskInteraction = i3629[13]
  i3628.spriteSortPoint = i3629[14]
  i3628.enabled = !!i3629[15]
  request.r(i3629[16], i3629[17], 0, i3628, 'sharedMaterial')
  var i3631 = i3629[18]
  var i3630 = []
  for(var i = 0; i < i3631.length; i += 2) {
  request.r(i3631[i + 0], i3631[i + 1], 2, i3630, '')
  }
  i3628.sharedMaterials = i3630
  i3628.receiveShadows = !!i3629[19]
  i3628.shadowCastingMode = i3629[20]
  i3628.sortingLayerID = i3629[21]
  i3628.sortingOrder = i3629[22]
  i3628.lightmapIndex = i3629[23]
  i3628.lightmapSceneIndex = i3629[24]
  i3628.lightmapScaleOffset = new pc.Vec4( i3629[25], i3629[26], i3629[27], i3629[28] )
  i3628.lightProbeUsage = i3629[29]
  i3628.reflectionProbeUsage = i3629[30]
  return i3628
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i3632 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i3633 = data
  request.r(i3633[0], i3633[1], 0, i3632, 'm_RootBone')
  var i3635 = i3633[2]
  var i3634 = []
  for(var i = 0; i < i3635.length; i += 2) {
  request.r(i3635[i + 0], i3635[i + 1], 2, i3634, '')
  }
  i3632.m_BoneTransforms = i3634
  i3632.m_AlwaysUpdate = !!i3633[3]
  i3632.m_AutoRebind = !!i3633[4]
  return i3632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i3636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i3637 = data
  var i3639 = i3637[0]
  var i3638 = []
  for(var i = 0; i < i3639.length; i += 3) {
    i3638.push( new pc.Vec3( i3639[i + 0], i3639[i + 1], i3639[i + 2] ) );
  }
  i3636.positions = i3638
  i3636.positionCount = i3637[1]
  i3636.time = i3637[2]
  i3636.startWidth = i3637[3]
  i3636.endWidth = i3637[4]
  i3636.widthMultiplier = i3637[5]
  i3636.autodestruct = !!i3637[6]
  i3636.emitting = !!i3637[7]
  i3636.numCornerVertices = i3637[8]
  i3636.numCapVertices = i3637[9]
  i3636.minVertexDistance = i3637[10]
  i3636.colorGradient = i3637[11] ? new pc.ColorGradient(i3637[11][0], i3637[11][1], i3637[11][2]) : null
  i3636.startColor = new pc.Color(i3637[12], i3637[13], i3637[14], i3637[15])
  i3636.endColor = new pc.Color(i3637[16], i3637[17], i3637[18], i3637[19])
  i3636.generateLightingData = !!i3637[20]
  i3636.textureMode = i3637[21]
  i3636.alignment = i3637[22]
  i3636.widthCurve = new pc.AnimationCurve( { keys_flow: i3637[23] } )
  i3636.enabled = !!i3637[24]
  request.r(i3637[25], i3637[26], 0, i3636, 'sharedMaterial')
  var i3641 = i3637[27]
  var i3640 = []
  for(var i = 0; i < i3641.length; i += 2) {
  request.r(i3641[i + 0], i3641[i + 1], 2, i3640, '')
  }
  i3636.sharedMaterials = i3640
  i3636.receiveShadows = !!i3637[28]
  i3636.shadowCastingMode = i3637[29]
  i3636.sortingLayerID = i3637[30]
  i3636.sortingOrder = i3637[31]
  i3636.lightmapIndex = i3637[32]
  i3636.lightmapSceneIndex = i3637[33]
  i3636.lightmapScaleOffset = new pc.Vec4( i3637[34], i3637[35], i3637[36], i3637[37] )
  i3636.lightProbeUsage = i3637[38]
  i3636.reflectionProbeUsage = i3637[39]
  return i3636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i3644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i3645 = data
  i3644.textureMode = i3645[0]
  i3644.alignment = i3645[1]
  i3644.widthCurve = new pc.AnimationCurve( { keys_flow: i3645[2] } )
  i3644.colorGradient = i3645[3] ? new pc.ColorGradient(i3645[3][0], i3645[3][1], i3645[3][2]) : null
  var i3647 = i3645[4]
  var i3646 = []
  for(var i = 0; i < i3647.length; i += 3) {
    i3646.push( new pc.Vec3( i3647[i + 0], i3647[i + 1], i3647[i + 2] ) );
  }
  i3644.positions = i3646
  i3644.positionCount = i3645[5]
  i3644.widthMultiplier = i3645[6]
  i3644.startWidth = i3645[7]
  i3644.endWidth = i3645[8]
  i3644.numCornerVertices = i3645[9]
  i3644.numCapVertices = i3645[10]
  i3644.useWorldSpace = !!i3645[11]
  i3644.loop = !!i3645[12]
  i3644.startColor = new pc.Color(i3645[13], i3645[14], i3645[15], i3645[16])
  i3644.endColor = new pc.Color(i3645[17], i3645[18], i3645[19], i3645[20])
  i3644.generateLightingData = !!i3645[21]
  i3644.enabled = !!i3645[22]
  request.r(i3645[23], i3645[24], 0, i3644, 'sharedMaterial')
  var i3649 = i3645[25]
  var i3648 = []
  for(var i = 0; i < i3649.length; i += 2) {
  request.r(i3649[i + 0], i3649[i + 1], 2, i3648, '')
  }
  i3644.sharedMaterials = i3648
  i3644.receiveShadows = !!i3645[26]
  i3644.shadowCastingMode = i3645[27]
  i3644.sortingLayerID = i3645[28]
  i3644.sortingOrder = i3645[29]
  i3644.lightmapIndex = i3645[30]
  i3644.lightmapSceneIndex = i3645[31]
  i3644.lightmapScaleOffset = new pc.Vec4( i3645[32], i3645[33], i3645[34], i3645[35] )
  i3644.lightProbeUsage = i3645[36]
  i3644.reflectionProbeUsage = i3645[37]
  return i3644
}

Deserializers["TextureOffsetScroller"] = function (request, data, root) {
  var i3650 = root || request.c( 'TextureOffsetScroller' )
  var i3651 = data
  i3650.scrollSpeed = new pc.Vec2( i3651[0], i3651[1] )
  i3650.smoothStart = !!i3651[2]
  i3650.smoothDuration = i3651[3]
  i3650.textureName = i3651[4]
  i3650.useSharedMaterial = !!i3651[5]
  return i3650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3653 = data
  request.r(i3653[0], i3653[1], 0, i3652, 'clip')
  request.r(i3653[2], i3653[3], 0, i3652, 'outputAudioMixerGroup')
  i3652.playOnAwake = !!i3653[4]
  i3652.loop = !!i3653[5]
  i3652.time = i3653[6]
  i3652.volume = i3653[7]
  i3652.pitch = i3653[8]
  i3652.enabled = !!i3653[9]
  return i3652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i3654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i3655 = data
  i3654.usedByComposite = !!i3655[0]
  i3654.autoTiling = !!i3655[1]
  i3654.size = new pc.Vec2( i3655[2], i3655[3] )
  i3654.edgeRadius = i3655[4]
  i3654.enabled = !!i3655[5]
  i3654.isTrigger = !!i3655[6]
  i3654.usedByEffector = !!i3655[7]
  i3654.density = i3655[8]
  i3654.offset = new pc.Vec2( i3655[9], i3655[10] )
  request.r(i3655[11], i3655[12], 0, i3654, 'material')
  return i3654
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i3656 = root || request.c( 'PlaySfxOnCollision' )
  var i3657 = data
  request.r(i3657[0], i3657[1], 0, i3656, 'Tip')
  i3656.Mode = i3657[2]
  request.r(i3657[3], i3657[4], 0, i3656, 'DragInput')
  request.r(i3657[5], i3657[6], 0, i3656, 'Source')
  i3656.startVol = i3657[7]
  i3656.targetVol = i3657[8]
  i3656.duration = i3657[9]
  request.r(i3657[10], i3657[11], 0, i3656, 'Particles')
  i3656.isDone = !!i3657[12]
  i3656.isInArea = !!i3657[13]
  i3656.isPlaying = !!i3657[14]
  return i3656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i3658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i3659 = data
  i3658.radius = i3659[0]
  i3658.enabled = !!i3659[1]
  i3658.isTrigger = !!i3659[2]
  i3658.usedByEffector = !!i3659[3]
  i3658.density = i3659[4]
  i3658.offset = new pc.Vec2( i3659[5], i3659[6] )
  request.r(i3659[7], i3659[8], 0, i3658, 'material')
  return i3658
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i3660 = root || request.c( 'PlayParticlesOnCollision' )
  var i3661 = data
  request.r(i3661[0], i3661[1], 0, i3660, 'Target')
  request.r(i3661[2], i3661[3], 0, i3660, 'ParticlePrefab')
  i3660.destroyIt = !!i3661[4]
  i3660.stayAtPlace = !!i3661[5]
  i3660.disableOnCollision = !!i3661[6]
  i3660.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i3661[7], i3660.OnCollisionEvent)
  return i3660
}

Deserializers["BD_Fold"] = function (request, data, root) {
  var i3662 = root || request.c( 'BD_Fold' )
  var i3663 = data
  i3662.canDrag = !!i3663[0]
  i3662.canFoldBottomLeft = !!i3663[1]
  i3662.canFoldBottomRight = !!i3663[2]
  i3662.canFoldTopLeft = !!i3663[3]
  i3662.canFoldTopRight = !!i3663[4]
  request.r(i3663[5], i3663[6], 0, i3662, 'Indication')
  request.r(i3663[7], i3663[8], 0, i3662, 'backSideSprite')
  i3662.maxSideOffset = i3663[9]
  i3662.foldBackDuration = i3663[10]
  i3662.instantFoldAmount = i3663[11]
  i3662.useSmoothRelease = !!i3663[12]
  i3662.completionLimit = i3663[13]
  i3662.afterCompletionTravelTo = i3663[14]
  i3662.OnComplete = request.d('UnityEngine.Events.UnityEvent', i3663[15], i3662.OnComplete)
  i3662.currentProgress = i3663[16]
  i3662.innerShadowStrength = i3663[17]
  request.r(i3663[18], i3663[19], 0, i3662, 'dragAudioSource')
  request.r(i3663[20], i3663[21], 0, i3662, 'dragStartClip')
  request.r(i3663[22], i3663[23], 0, i3662, 'completionClip')
  i3662.audioFadeSpeed = i3663[24]
  i3662.audioMoveThreshold = i3663[25]
  i3662.hapticInterval = i3663[26]
  return i3662
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3664 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3665 = data
  i3664.targetIsSelf = !!i3665[0]
  request.r(i3665[1], i3665[2], 0, i3664, 'targetGO')
  i3664.tweenTargetIsTargetGO = !!i3665[3]
  i3664.delay = i3665[4]
  i3664.duration = i3665[5]
  i3664.easeType = i3665[6]
  i3664.easeCurve = new pc.AnimationCurve( { keys_flow: i3665[7] } )
  i3664.loopType = i3665[8]
  i3664.loops = i3665[9]
  i3664.id = i3665[10]
  i3664.isRelative = !!i3665[11]
  i3664.isFrom = !!i3665[12]
  i3664.isIndependentUpdate = !!i3665[13]
  i3664.autoKill = !!i3665[14]
  i3664.autoGenerate = !!i3665[15]
  i3664.isActive = !!i3665[16]
  i3664.isValid = !!i3665[17]
  request.r(i3665[18], i3665[19], 0, i3664, 'target')
  i3664.animationType = i3665[20]
  i3664.targetType = i3665[21]
  i3664.forcedTargetType = i3665[22]
  i3664.autoPlay = !!i3665[23]
  i3664.useTargetAsV3 = !!i3665[24]
  i3664.endValueFloat = i3665[25]
  i3664.endValueV3 = new pc.Vec3( i3665[26], i3665[27], i3665[28] )
  i3664.endValueV2 = new pc.Vec2( i3665[29], i3665[30] )
  i3664.endValueColor = new pc.Color(i3665[31], i3665[32], i3665[33], i3665[34])
  i3664.endValueString = i3665[35]
  i3664.endValueRect = UnityEngine.Rect.MinMaxRect(i3665[36], i3665[37], i3665[38], i3665[39])
  request.r(i3665[40], i3665[41], 0, i3664, 'endValueTransform')
  i3664.optionalBool0 = !!i3665[42]
  i3664.optionalBool1 = !!i3665[43]
  i3664.optionalFloat0 = i3665[44]
  i3664.optionalInt0 = i3665[45]
  i3664.optionalRotationMode = i3665[46]
  i3664.optionalScrambleMode = i3665[47]
  i3664.optionalShakeRandomnessMode = i3665[48]
  i3664.optionalString = i3665[49]
  i3664.updateType = i3665[50]
  i3664.isSpeedBased = !!i3665[51]
  i3664.hasOnStart = !!i3665[52]
  i3664.hasOnPlay = !!i3665[53]
  i3664.hasOnUpdate = !!i3665[54]
  i3664.hasOnStepComplete = !!i3665[55]
  i3664.hasOnComplete = !!i3665[56]
  i3664.hasOnTweenCreated = !!i3665[57]
  i3664.hasOnRewind = !!i3665[58]
  i3664.onStart = request.d('UnityEngine.Events.UnityEvent', i3665[59], i3664.onStart)
  i3664.onPlay = request.d('UnityEngine.Events.UnityEvent', i3665[60], i3664.onPlay)
  i3664.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3665[61], i3664.onUpdate)
  i3664.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3665[62], i3664.onStepComplete)
  i3664.onComplete = request.d('UnityEngine.Events.UnityEvent', i3665[63], i3664.onComplete)
  i3664.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3665[64], i3664.onTweenCreated)
  i3664.onRewind = request.d('UnityEngine.Events.UnityEvent', i3665[65], i3664.onRewind)
  return i3664
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i3666 = root || request.c( 'ActionOnTap' )
  var i3667 = data
  i3666.OnTap = request.d('UnityEngine.Events.UnityEvent', i3667[0], i3666.OnTap)
  i3666.OnTapExtra = request.d('System.Action', i3667[1], i3666.OnTapExtra)
  return i3666
}

Deserializers["System.Action"] = function (request, data, root) {
  var i3668 = root || request.c( 'System.Action' )
  var i3669 = data
  return i3668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i3670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i3671 = data
  i3670.usedByComposite = !!i3671[0]
  i3670.autoTiling = !!i3671[1]
  var i3673 = i3671[2]
  var i3672 = []
  for(var i = 0; i < i3673.length; i += 1) {
  var i3675 = i3673[i + 0]
  var i3674 = []
  for(var i = 0; i < i3675.length; i += 2) {
    i3674.push( new pc.Vec2( i3675[i + 0], i3675[i + 1] ) );
  }
    i3672.push( i3674 );
  }
  i3670.points = i3672
  i3670.enabled = !!i3671[3]
  i3670.isTrigger = !!i3671[4]
  i3670.usedByEffector = !!i3671[5]
  i3670.density = i3671[6]
  i3670.offset = new pc.Vec2( i3671[7], i3671[8] )
  request.r(i3671[9], i3671[10], 0, i3670, 'material')
  return i3670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i3682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i3683 = data
  i3682.edgeRadius = i3683[0]
  var i3685 = i3683[1]
  var i3684 = []
  for(var i = 0; i < i3685.length; i += 2) {
    i3684.push( new pc.Vec2( i3685[i + 0], i3685[i + 1] ) );
  }
  i3682.points = i3684
  i3682.useAdjacentStartPoint = !!i3683[2]
  i3682.adjacentStartPoint = new pc.Vec2( i3683[3], i3683[4] )
  i3682.useAdjacentEndPoint = !!i3683[5]
  i3682.adjacentEndPoint = new pc.Vec2( i3683[6], i3683[7] )
  i3682.enabled = !!i3683[8]
  i3682.isTrigger = !!i3683[9]
  i3682.usedByEffector = !!i3683[10]
  i3682.density = i3683[11]
  i3682.offset = new pc.Vec2( i3683[12], i3683[13] )
  request.r(i3683[14], i3683[15], 0, i3682, 'material')
  return i3682
}

Deserializers["JarRotator"] = function (request, data, root) {
  var i3686 = root || request.c( 'JarRotator' )
  var i3687 = data
  i3686.rotationMode = i3687[0]
  i3686.maxRotation = i3687[1]
  i3686.rotationSpeed = i3687[2]
  i3686.invertRotation = !!i3687[3]
  request.r(i3687[4], i3687[5], 0, i3686, 'tapClip')
  request.r(i3687[6], i3687[7], 0, i3686, 'dragAudioSource')
  i3686.OnComplete = request.d('UnityEngine.Events.UnityEvent', i3687[8], i3686.OnComplete)
  i3686.completed = !!i3687[9]
  request.r(i3687[10], i3687[11], 0, i3686, 'jarIndication')
  return i3686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i3688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i3689 = data
  i3688.bodyType = i3689[0]
  request.r(i3689[1], i3689[2], 0, i3688, 'material')
  i3688.simulated = !!i3689[3]
  i3688.useAutoMass = !!i3689[4]
  i3688.mass = i3689[5]
  i3688.drag = i3689[6]
  i3688.angularDrag = i3689[7]
  i3688.gravityScale = i3689[8]
  i3688.collisionDetectionMode = i3689[9]
  i3688.sleepMode = i3689[10]
  i3688.constraints = i3689[11]
  return i3688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i3690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i3691 = data
  i3690.frontSortingLayerID = i3691[0]
  i3690.frontSortingOrder = i3691[1]
  i3690.backSortingLayerID = i3691[2]
  i3690.backSortingOrder = i3691[3]
  i3690.alphaCutoff = i3691[4]
  request.r(i3691[5], i3691[6], 0, i3690, 'sprite')
  i3690.tileMode = i3691[7]
  i3690.isCustomRangeActive = !!i3691[8]
  i3690.spriteSortPoint = i3691[9]
  i3690.enabled = !!i3691[10]
  request.r(i3691[11], i3691[12], 0, i3690, 'sharedMaterial')
  var i3693 = i3691[13]
  var i3692 = []
  for(var i = 0; i < i3693.length; i += 2) {
  request.r(i3693[i + 0], i3693[i + 1], 2, i3692, '')
  }
  i3690.sharedMaterials = i3692
  i3690.receiveShadows = !!i3691[14]
  i3690.shadowCastingMode = i3691[15]
  i3690.sortingLayerID = i3691[16]
  i3690.sortingOrder = i3691[17]
  i3690.lightmapIndex = i3691[18]
  i3690.lightmapSceneIndex = i3691[19]
  i3690.lightmapScaleOffset = new pc.Vec4( i3691[20], i3691[21], i3691[22], i3691[23] )
  i3690.lightProbeUsage = i3691[24]
  i3690.reflectionProbeUsage = i3691[25]
  return i3690
}

Deserializers["_2dxFX_Wave"] = function (request, data, root) {
  var i3694 = root || request.c( '_2dxFX_Wave' )
  var i3695 = data
  request.r(i3695[0], i3695[1], 0, i3694, 'ForceMaterial')
  i3694.ActiveChange = !!i3695[2]
  i3694._Alpha = i3695[3]
  i3694._OffsetX = i3695[4]
  i3694._OffsetY = i3695[5]
  i3694._DistanceX = i3695[6]
  i3694._DistanceY = i3695[7]
  i3694._WaveTimeX = i3695[8]
  i3694._WaveTimeY = i3695[9]
  i3694.AutoPlayWaveX = !!i3695[10]
  i3694.AutoPlaySpeedX = i3695[11]
  i3694.AutoPlayWaveY = !!i3695[12]
  i3694.AutoPlaySpeedY = i3695[13]
  i3694.AutoRandom = !!i3695[14]
  i3694.AutoRandomRange = i3695[15]
  i3694.ShaderChange = i3695[16]
  return i3694
}

Deserializers["Level1_Armpit_WaxCount"] = function (request, data, root) {
  var i3696 = root || request.c( 'Level1_Armpit_WaxCount' )
  var i3697 = data
  i3696.waxCount = i3697[0]
  i3696.waxTotal = i3697[1]
  var i3699 = i3697[2]
  var i3698 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3699.length; i += 2) {
  request.r(i3699[i + 0], i3699[i + 1], 1, i3698, '')
  }
  i3696.targetWaxObjects = i3698
  request.r(i3697[3], i3697[4], 0, i3696, 'rotator')
  i3696.vibration = !!i3697[5]
  i3696.delayInVibration = i3697[6]
  var i3701 = i3697[7]
  var i3700 = []
  for(var i = 0; i < i3701.length; i += 2) {
  request.r(i3701[i + 0], i3701[i + 1], 2, i3700, '')
  }
  i3696.waxDropSfx = i3700
  return i3696
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i3706 = root || request.c( 'BasicDrag' )
  var i3707 = data
  i3706.canDrag = !!i3707[0]
  i3706.dragByDelta = !!i3707[1]
  i3706.isDragging = !!i3707[2]
  i3706.moveWithPointer = !!i3707[3]
  i3706.canReturn = !!i3707[4]
  i3706.jumpOnReturn = !!i3707[5]
  i3706.returnTime = i3707[6]
  i3706.Tool_Offset = new pc.Vec3( i3707[7], i3707[8], i3707[9] )
  i3706.canScaleIncrease = !!i3707[10]
  i3706.Self_ScaleNew = new pc.Vec3( i3707[11], i3707[12], i3707[13] )
  i3706.canRotateOnPick = !!i3707[14]
  i3706.startRot = new pc.Vec3( i3707[15], i3707[16], i3707[17] )
  i3706.newRot = new pc.Vec3( i3707[18], i3707[19], i3707[20] )
  var i3709 = i3707[21]
  var i3708 = []
  for(var i = 0; i < i3709.length; i += 2) {
  request.r(i3709[i + 0], i3709[i + 1], 2, i3708, '')
  }
  i3706.childSprite = i3708
  request.r(i3707[22], i3707[23], 0, i3706, 'ToolSelectClip')
  request.r(i3707[24], i3707[25], 0, i3706, 'ToolLoopClip')
  request.r(i3707[26], i3707[27], 0, i3706, 'thisParticles')
  i3706.onDragparticle = !!i3707[28]
  request.r(i3707[29], i3707[30], 0, i3706, 'dragParticles')
  request.r(i3707[31], i3707[32], 0, i3706, 'anim')
  i3706.startPos = new pc.Vec3( i3707[33], i3707[34], i3707[35] )
  i3706.startScale = new pc.Vec3( i3707[36], i3707[37], i3707[38] )
  i3706.Vibration = !!i3707[39]
  i3706.isPlacedCannotMove = !!i3707[40]
  i3706.isObjectMovingWhileDragging = !!i3707[41]
  i3706.OnMouseDownEvent = request.d('System.Action', i3707[42], i3706.OnMouseDownEvent)
  i3706.OnMouseUpEvent = request.d('System.Action', i3707[43], i3706.OnMouseUpEvent)
  i3706.ProgStartEvent = request.d('System.Action', i3707[44], i3706.ProgStartEvent)
  i3706.ProgEndEvent = request.d('System.Action', i3707[45], i3706.ProgEndEvent)
  i3706.canCallMouseUpWhenGamePaused = !!i3707[46]
  i3706.ClampX_L = i3707[47]
  i3706.ClampX_H = i3707[48]
  i3706.ClampY_L = i3707[49]
  i3706.ClampY_H = i3707[50]
  i3706.startOrder = i3707[51]
  i3706.dontResetItIsInCollider = !!i3707[52]
  request.r(i3707[53], i3707[54], 0, i3706, 'thisCollider')
  request.r(i3707[55], i3707[56], 0, i3706, 'thisSR')
  i3706.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i3707[57], i3706.OnMouseDownEventIndependentFromCanDrag)
  return i3706
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i3710 = root || request.c( 'BD_AnimatorDrag' )
  var i3711 = data
  request.r(i3711[0], i3711[1], 0, i3710, 'BD')
  request.r(i3711[2], i3711[3], 0, i3710, 'anim')
  request.r(i3711[4], i3711[5], 0, i3710, 'Source')
  i3710.Vibration = !!i3711[6]
  i3710.isCompletable = !!i3711[7]
  i3710.completionThreshold = i3711[8]
  i3710.OnComplete = request.d('UnityEngine.Events.UnityEvent', i3711[9], i3710.OnComplete)
  return i3710
}

Deserializers["TapandHold_Simple"] = function (request, data, root) {
  var i3712 = root || request.c( 'TapandHold_Simple' )
  var i3713 = data
  request.r(i3713[0], i3713[1], 0, i3712, 'actionSfx')
  i3712.holdDuration = i3713[2]
  i3712.dragThreshold = i3713[3]
  i3712.fadeInOnHold = !!i3713[4]
  i3712.fadeOutOnRelease = !!i3713[5]
  request.r(i3713[6], i3713[7], 0, i3712, 'targetSprite')
  i3712.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i3713[8], i3712.onHoldComplete)
  i3712.currentProgress = i3713[9]
  i3712.isHolding = !!i3713[10]
  i3712.isCompleted = !!i3713[11]
  request.r(i3713[12], i3713[13], 0, i3712, 'thisTool')
  return i3712
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i3714 = root || request.c( 'SpriteButton' )
  var i3715 = data
  i3714.isLocked = !!i3715[0]
  i3714.lockMsg = i3715[1]
  i3714.onClick = request.d('UnityEngine.Events.UnityEvent', i3715[2], i3714.onClick)
  i3714.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i3715[3], i3714.onLockedClick)
  i3714.isLevelBtnSfx = !!i3715[4]
  request.r(i3715[5], i3715[6], 0, i3714, 'pivot')
  i3714.reductionChange = i3715[7]
  i3714.animationDuration = i3715[8]
  return i3714
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i3716 = root || request.c( 'BD_Progress' )
  var i3717 = data
  var i3719 = i3717[0]
  var i3718 = []
  for(var i = 0; i < i3719.length; i += 1) {
    i3718.push( request.d('ScratchData', i3719[i + 0]) );
  }
  i3716.AllScratches = i3718
  i3716.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i3717[1], i3716.OnScratchComplete)
  i3716.isProgDone = !!i3717[2]
  i3716.canCallComplete = !!i3717[3]
  i3716.CollectiveAppear = !!i3717[4]
  i3716.tipControl = !!i3717[5]
  i3716.progressControl = !!i3717[6]
  request.r(i3717[7], i3717[8], 0, i3716, 'thisDrag')
  i3716.CompleteEvent = request.d('System.Action', i3717[9], i3716.CompleteEvent)
  i3716.SubCompleteEvent = request.d('System.Action', i3717[10], i3716.SubCompleteEvent)
  return i3716
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i3722 = root || request.c( 'ScratchData' )
  var i3723 = data
  request.r(i3723[0], i3723[1], 0, i3722, 'ScratchManager')
  i3722.scratchLimit = i3723[2]
  i3722.isComplete = !!i3723[3]
  return i3722
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i3724 = root || request.c( 'BD_Clamp' )
  var i3725 = data
  i3724.ClampX_L = i3725[0]
  i3724.ClampX_H = i3725[1]
  i3724.ClampY_L = i3725[2]
  i3724.ClampY_H = i3725[3]
  return i3724
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i3726 = root || request.c( 'BD_CameraFollow' )
  var i3727 = data
  request.r(i3727[0], i3727[1], 0, i3726, 'Tool')
  request.r(i3727[2], i3727[3], 0, i3726, 'Pivot')
  i3726.FOV = i3727[4]
  i3726.Y_L = i3727[5]
  i3726.Y_H = i3727[6]
  i3726.X_L = i3727[7]
  i3726.X_R = i3727[8]
  i3726.startDelay = i3727[9]
  i3726.duration = i3727[10]
  return i3726
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i3728 = root || request.c( 'BD_ToolRotate' )
  var i3729 = data
  i3728.startDelay = i3729[0]
  request.r(i3729[1], i3729[2], 0, i3728, 'Tool')
  request.r(i3729[3], i3729[4], 0, i3728, 'Clamp')
  request.r(i3729[5], i3729[6], 0, i3728, 'Pivot')
  i3728.MinAngle = new pc.Vec3( i3729[7], i3729[8], i3729[9] )
  i3728.MaxAngle = new pc.Vec3( i3729[10], i3729[11], i3729[12] )
  i3728.rotationSpeed = i3729[13]
  return i3728
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i3730 = root || request.c( 'MenuLevel' )
  var i3731 = data
  request.r(i3731[0], i3731[1], 0, i3730, 'menuLevelBtnUpdate')
  var i3733 = i3731[2]
  var i3732 = []
  for(var i = 0; i < i3733.length; i += 1) {
    i3732.push( request.d('MenuLevelData', i3733[i + 0]) );
  }
  i3730.AllSteps = i3732
  request.r(i3731[3], i3731[4], 0, i3730, 'buttonparent')
  var i3735 = i3731[5]
  var i3734 = []
  for(var i = 0; i < i3735.length; i += 2) {
  request.r(i3735[i + 0], i3735[i + 1], 2, i3734, '')
  }
  i3730.BtnsDotweenAnims = i3734
  var i3737 = i3731[6]
  var i3736 = []
  for(var i = 0; i < i3737.length; i += 2) {
  request.r(i3737[i + 0], i3737[i + 1], 2, i3736, '')
  }
  i3730.BtnsCols = i3736
  request.r(i3731[7], i3731[8], 0, i3730, 'mainGameView')
  request.r(i3731[9], i3731[10], 0, i3730, 'Storyboard')
  request.r(i3731[11], i3731[12], 0, i3730, 'BgMusic')
  request.r(i3731[13], i3731[14], 0, i3730, 'BgStoryMusic')
  request.r(i3731[15], i3731[16], 0, i3730, 'Hand_Tut1')
  var i3739 = i3731[17]
  var i3738 = []
  for(var i = 0; i < i3739.length; i += 2) {
  request.r(i3739[i + 0], i3739[i + 1], 2, i3738, '')
  }
  i3730.itemEnable_Onstart = i3738
  var i3741 = i3731[18]
  var i3740 = []
  for(var i = 0; i < i3741.length; i += 2) {
  request.r(i3741[i + 0], i3741[i + 1], 2, i3740, '')
  }
  i3730.itemDisable_Onstart = i3740
  var i3743 = i3731[19]
  var i3742 = []
  for(var i = 0; i < i3743.length; i += 2) {
  request.r(i3743[i + 0], i3743[i + 1], 2, i3742, '')
  }
  i3730.itemEnable_Oncomplete = i3742
  var i3745 = i3731[20]
  var i3744 = []
  for(var i = 0; i < i3745.length; i += 2) {
  request.r(i3745[i + 0], i3745[i + 1], 2, i3744, '')
  }
  i3730.itemDisable_Oncomplete = i3744
  i3730.levelKey = i3731[21]
  i3730.revealDirtyHoldTime = i3731[22]
  return i3730
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i3748 = root || request.c( 'MenuLevelData' )
  var i3749 = data
  i3748.Name = i3749[0]
  request.r(i3749[1], i3749[2], 0, i3748, 'UiBtn')
  request.r(i3749[3], i3749[4], 0, i3748, 'TickBtn')
  request.r(i3749[5], i3749[6], 0, i3748, 'ExclamationIcon')
  var i3751 = i3749[7]
  var i3750 = []
  for(var i = 0; i < i3751.length; i += 2) {
  request.r(i3751[i + 0], i3751[i + 1], 2, i3750, '')
  }
  i3748.Item_Dirty = i3750
  var i3753 = i3749[8]
  var i3752 = []
  for(var i = 0; i < i3753.length; i += 2) {
  request.r(i3753[i + 0], i3753[i + 1], 2, i3752, '')
  }
  i3748.Item_Clean = i3752
  request.r(i3749[9], i3749[10], 0, i3748, 'CompleteParticle')
  return i3748
}

Deserializers["IntroLevelAnim"] = function (request, data, root) {
  var i3760 = root || request.c( 'IntroLevelAnim' )
  var i3761 = data
  request.r(i3761[0], i3761[1], 0, i3760, 'menuLevel')
  i3760.lvlkey = i3761[2]
  request.r(i3761[3], i3761[4], 0, i3760, 'DressChangeObj')
  request.r(i3761[5], i3761[6], 0, i3760, 'DressChangeClip')
  return i3760
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i3762 = root || request.c( 'Level_PoseController' )
  var i3763 = data
  var i3765 = i3763[0]
  var i3764 = []
  for(var i = 0; i < i3765.length; i += 2) {
  request.r(i3765[i + 0], i3765[i + 1], 2, i3764, '')
  }
  i3762.itemToShow = i3764
  var i3767 = i3763[1]
  var i3766 = []
  for(var i = 0; i < i3767.length; i += 2) {
  request.r(i3767[i + 0], i3767[i + 1], 2, i3766, '')
  }
  i3762.itemToHide = i3766
  i3762.stepTarget = i3763[2]
  return i3762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3769 = data
  i3768.name = i3769[0]
  i3768.atlasId = i3769[1]
  i3768.mipmapCount = i3769[2]
  i3768.hdr = !!i3769[3]
  i3768.size = i3769[4]
  i3768.anisoLevel = i3769[5]
  i3768.filterMode = i3769[6]
  var i3771 = i3769[7]
  var i3770 = []
  for(var i = 0; i < i3771.length; i += 4) {
    i3770.push( UnityEngine.Rect.MinMaxRect(i3771[i + 0], i3771[i + 1], i3771[i + 2], i3771[i + 3]) );
  }
  i3768.rects = i3770
  i3768.wrapU = i3769[8]
  i3768.wrapV = i3769[9]
  return i3768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3775 = data
  i3774.name = i3775[0]
  i3774.index = i3775[1]
  i3774.startup = !!i3775[2]
  return i3774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3777 = data
  i3776.aspect = i3777[0]
  i3776.orthographic = !!i3777[1]
  i3776.orthographicSize = i3777[2]
  i3776.backgroundColor = new pc.Color(i3777[3], i3777[4], i3777[5], i3777[6])
  i3776.nearClipPlane = i3777[7]
  i3776.farClipPlane = i3777[8]
  i3776.fieldOfView = i3777[9]
  i3776.depth = i3777[10]
  i3776.clearFlags = i3777[11]
  i3776.cullingMask = i3777[12]
  i3776.rect = i3777[13]
  request.r(i3777[14], i3777[15], 0, i3776, 'targetTexture')
  i3776.usePhysicalProperties = !!i3777[16]
  i3776.focalLength = i3777[17]
  i3776.sensorSize = new pc.Vec2( i3777[18], i3777[19] )
  i3776.lensShift = new pc.Vec2( i3777[20], i3777[21] )
  i3776.gateFit = i3777[22]
  i3776.commandBufferCount = i3777[23]
  i3776.cameraType = i3777[24]
  i3776.enabled = !!i3777[25]
  return i3776
}

Deserializers["CameraController"] = function (request, data, root) {
  var i3778 = root || request.c( 'CameraController' )
  var i3779 = data
  request.r(i3779[0], i3779[1], 0, i3778, 'cam')
  i3778.defaultPosition = new pc.Vec3( i3779[2], i3779[3], i3779[4] )
  i3778.defaultSize = i3779[5]
  i3778.defaultFOV = i3779[6]
  i3778.defaultDuration = i3779[7]
  i3778.defaultEase = i3779[8]
  return i3778
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i3780 = root || request.c( 'MusicSource' )
  var i3781 = data
  request.r(i3781[0], i3781[1], 0, i3780, 'source')
  return i3780
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i3782 = root || request.c( 'UI_Manager' )
  var i3783 = data
  i3782.levelCompleted = !!i3783[0]
  i3782.isPauseActive = !!i3783[1]
  i3782.loadIndex = i3783[2]
  request.r(i3783[3], i3783[4], 0, i3782, 'removeAdsButton')
  request.r(i3783[5], i3783[6], 0, i3782, 'pauseButton')
  request.r(i3783[7], i3783[8], 0, i3782, 'Fade_Img')
  request.r(i3783[9], i3783[10], 0, i3782, 'TopBarAnim')
  request.r(i3783[11], i3783[12], 0, i3782, 'MainPanel')
  request.r(i3783[13], i3783[14], 0, i3782, 'PausePanel')
  request.r(i3783[15], i3783[16], 0, i3782, 'PausePopUp')
  request.r(i3783[17], i3783[18], 0, i3782, 'PauseCanvasGroup')
  request.r(i3783[19], i3783[20], 0, i3782, 'RateUsPanel')
  request.r(i3783[21], i3783[22], 0, i3782, 'RateUsPopUp')
  request.r(i3783[23], i3783[24], 0, i3782, 'RemoveAdsPanel')
  request.r(i3783[25], i3783[26], 0, i3782, 'RemoveAdsPopUp')
  request.r(i3783[27], i3783[28], 0, i3782, 'RemoveAdsCanvasGroup')
  var i3785 = i3783[29]
  var i3784 = []
  for(var i = 0; i < i3785.length; i += 2) {
  request.r(i3785[i + 0], i3785[i + 1], 2, i3784, '')
  }
  i3782.RemoveAdsAnims = i3784
  request.r(i3783[30], i3783[31], 0, i3782, 'CompletePanel')
  request.r(i3783[32], i3783[33], 0, i3782, 'LevelIcon')
  request.r(i3783[34], i3783[35], 0, i3782, 'CompleteParticles')
  request.r(i3783[36], i3783[37], 0, i3782, 'progressBar')
  request.r(i3783[38], i3783[39], 0, i3782, 'progressText')
  request.r(i3783[40], i3783[41], 0, i3782, 'toolIcon1')
  request.r(i3783[42], i3783[43], 0, i3782, 'toolIcon2')
  request.r(i3783[44], i3783[45], 0, i3782, 'toolIcon3')
  request.r(i3783[46], i3783[47], 0, i3782, 'target1')
  request.r(i3783[48], i3783[49], 0, i3782, 'target2')
  i3782.toolMoveDuration = i3783[50]
  i3782.currentIndex = i3783[51]
  var i3787 = i3783[52]
  var i3786 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3787.length; i += 2) {
  request.r(i3787[i + 0], i3787[i + 1], 1, i3786, '')
  }
  i3782.allTools = i3786
  request.r(i3783[53], i3783[54], 0, i3782, 'clockProgress')
  request.r(i3783[55], i3783[56], 0, i3782, 'clockProgressFill')
  request.r(i3783[57], i3783[58], 0, i3782, 'clockAudio')
  i3782.moveDistance = i3783[59]
  i3782.animationDuration = i3783[60]
  i3782.greyBgChildName = i3783[61]
  i3782.pushOffset = i3783[62]
  return i3782
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i3788 = root || request.c( 'GameManagerPlayable' )
  var i3789 = data
  request.r(i3789[0], i3789[1], 0, i3788, 'endParticles')
  request.r(i3789[2], i3789[3], 0, i3788, 'stepCompleteParticles')
  request.r(i3789[4], i3789[5], 0, i3788, 'DefaultMat')
  request.r(i3789[6], i3789[7], 0, i3788, 'BG_Music')
  request.r(i3789[8], i3789[9], 0, i3788, 'restoreEffectShader')
  request.r(i3789[10], i3789[11], 0, i3788, 'stickerEffectShader')
  i3788.isComplete = !!i3789[12]
  i3788.isPaused = !!i3789[13]
  request.r(i3789[14], i3789[15], 0, i3788, 'currentLevel')
  i3788.startLevelOnPlay = !!i3789[16]
  i3788.currentLevelNo = i3789[17]
  return i3788
}

Deserializers["AudioController"] = function (request, data, root) {
  var i3790 = root || request.c( 'AudioController' )
  var i3791 = data
  request.r(i3791[0], i3791[1], 0, i3790, 'MainMixer')
  request.r(i3791[2], i3791[3], 0, i3790, 'UiClick')
  request.r(i3791[4], i3791[5], 0, i3790, 'UiClickSource')
  var i3793 = i3791[6]
  var i3792 = []
  for(var i = 0; i < i3793.length; i += 2) {
  request.r(i3793[i + 0], i3793[i + 1], 2, i3792, '')
  }
  i3790.SfxSources = i3792
  var i3795 = i3791[7]
  var i3794 = []
  for(var i = 0; i < i3795.length; i += 2) {
  request.r(i3795[i + 0], i3795[i + 1], 2, i3794, '')
  }
  i3790.AllClips = i3794
  return i3790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3797 = data
  i3796.pivot = new pc.Vec2( i3797[0], i3797[1] )
  i3796.anchorMin = new pc.Vec2( i3797[2], i3797[3] )
  i3796.anchorMax = new pc.Vec2( i3797[4], i3797[5] )
  i3796.sizeDelta = new pc.Vec2( i3797[6], i3797[7] )
  i3796.anchoredPosition3D = new pc.Vec3( i3797[8], i3797[9], i3797[10] )
  i3796.rotation = new pc.Quat(i3797[11], i3797[12], i3797[13], i3797[14])
  i3796.scale = new pc.Vec3( i3797[15], i3797[16], i3797[17] )
  return i3796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3799 = data
  i3798.planeDistance = i3799[0]
  i3798.referencePixelsPerUnit = i3799[1]
  i3798.isFallbackOverlay = !!i3799[2]
  i3798.renderMode = i3799[3]
  i3798.renderOrder = i3799[4]
  i3798.sortingLayerName = i3799[5]
  i3798.sortingOrder = i3799[6]
  i3798.scaleFactor = i3799[7]
  request.r(i3799[8], i3799[9], 0, i3798, 'worldCamera')
  i3798.overrideSorting = !!i3799[10]
  i3798.pixelPerfect = !!i3799[11]
  i3798.targetDisplay = i3799[12]
  i3798.overridePixelPerfect = !!i3799[13]
  i3798.enabled = !!i3799[14]
  return i3798
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3800 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3801 = data
  i3800.m_UiScaleMode = i3801[0]
  i3800.m_ReferencePixelsPerUnit = i3801[1]
  i3800.m_ScaleFactor = i3801[2]
  i3800.m_ReferenceResolution = new pc.Vec2( i3801[3], i3801[4] )
  i3800.m_ScreenMatchMode = i3801[5]
  i3800.m_MatchWidthOrHeight = i3801[6]
  i3800.m_PhysicalUnit = i3801[7]
  i3800.m_FallbackScreenDPI = i3801[8]
  i3800.m_DefaultSpriteDPI = i3801[9]
  i3800.m_DynamicPixelsPerUnit = i3801[10]
  i3800.m_PresetInfoIsWorld = !!i3801[11]
  return i3800
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3802 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3803 = data
  i3802.m_IgnoreReversedGraphics = !!i3803[0]
  i3802.m_BlockingObjects = i3803[1]
  i3802.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3803[2] )
  return i3802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3805 = data
  i3804.cullTransparentMesh = !!i3805[0]
  return i3804
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3806 = root || request.c( 'UnityEngine.UI.Image' )
  var i3807 = data
  request.r(i3807[0], i3807[1], 0, i3806, 'm_Sprite')
  i3806.m_Type = i3807[2]
  i3806.m_PreserveAspect = !!i3807[3]
  i3806.m_FillCenter = !!i3807[4]
  i3806.m_FillMethod = i3807[5]
  i3806.m_FillAmount = i3807[6]
  i3806.m_FillClockwise = !!i3807[7]
  i3806.m_FillOrigin = i3807[8]
  i3806.m_UseSpriteMesh = !!i3807[9]
  i3806.m_PixelsPerUnitMultiplier = i3807[10]
  request.r(i3807[11], i3807[12], 0, i3806, 'm_Material')
  i3806.m_Maskable = !!i3807[13]
  i3806.m_Color = new pc.Color(i3807[14], i3807[15], i3807[16], i3807[17])
  i3806.m_RaycastTarget = !!i3807[18]
  i3806.m_RaycastPadding = new pc.Vec4( i3807[19], i3807[20], i3807[21], i3807[22] )
  return i3806
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3808 = root || request.c( 'UnityEngine.UI.Text' )
  var i3809 = data
  i3808.m_FontData = request.d('UnityEngine.UI.FontData', i3809[0], i3808.m_FontData)
  i3808.m_Text = i3809[1]
  request.r(i3809[2], i3809[3], 0, i3808, 'm_Material')
  i3808.m_Maskable = !!i3809[4]
  i3808.m_Color = new pc.Color(i3809[5], i3809[6], i3809[7], i3809[8])
  i3808.m_RaycastTarget = !!i3809[9]
  i3808.m_RaycastPadding = new pc.Vec4( i3809[10], i3809[11], i3809[12], i3809[13] )
  return i3808
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3810 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3811 = data
  request.r(i3811[0], i3811[1], 0, i3810, 'm_Font')
  i3810.m_FontSize = i3811[2]
  i3810.m_FontStyle = i3811[3]
  i3810.m_BestFit = !!i3811[4]
  i3810.m_MinSize = i3811[5]
  i3810.m_MaxSize = i3811[6]
  i3810.m_Alignment = i3811[7]
  i3810.m_AlignByGeometry = !!i3811[8]
  i3810.m_RichText = !!i3811[9]
  i3810.m_HorizontalOverflow = i3811[10]
  i3810.m_VerticalOverflow = i3811[11]
  i3810.m_LineSpacing = i3811[12]
  return i3810
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3812 = root || request.c( 'UnityEngine.UI.Button' )
  var i3813 = data
  i3812.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3813[0], i3812.m_OnClick)
  i3812.m_Navigation = request.d('UnityEngine.UI.Navigation', i3813[1], i3812.m_Navigation)
  i3812.m_Transition = i3813[2]
  i3812.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3813[3], i3812.m_Colors)
  i3812.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3813[4], i3812.m_SpriteState)
  i3812.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3813[5], i3812.m_AnimationTriggers)
  i3812.m_Interactable = !!i3813[6]
  request.r(i3813[7], i3813[8], 0, i3812, 'm_TargetGraphic')
  return i3812
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3814 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3815 = data
  i3814.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3815[0], i3814.m_PersistentCalls)
  return i3814
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3816 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3817 = data
  i3816.m_Mode = i3817[0]
  i3816.m_WrapAround = !!i3817[1]
  request.r(i3817[2], i3817[3], 0, i3816, 'm_SelectOnUp')
  request.r(i3817[4], i3817[5], 0, i3816, 'm_SelectOnDown')
  request.r(i3817[6], i3817[7], 0, i3816, 'm_SelectOnLeft')
  request.r(i3817[8], i3817[9], 0, i3816, 'm_SelectOnRight')
  return i3816
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3818 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3819 = data
  i3818.m_NormalColor = new pc.Color(i3819[0], i3819[1], i3819[2], i3819[3])
  i3818.m_HighlightedColor = new pc.Color(i3819[4], i3819[5], i3819[6], i3819[7])
  i3818.m_PressedColor = new pc.Color(i3819[8], i3819[9], i3819[10], i3819[11])
  i3818.m_SelectedColor = new pc.Color(i3819[12], i3819[13], i3819[14], i3819[15])
  i3818.m_DisabledColor = new pc.Color(i3819[16], i3819[17], i3819[18], i3819[19])
  i3818.m_ColorMultiplier = i3819[20]
  i3818.m_FadeDuration = i3819[21]
  return i3818
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3820 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3821 = data
  request.r(i3821[0], i3821[1], 0, i3820, 'm_HighlightedSprite')
  request.r(i3821[2], i3821[3], 0, i3820, 'm_PressedSprite')
  request.r(i3821[4], i3821[5], 0, i3820, 'm_SelectedSprite')
  request.r(i3821[6], i3821[7], 0, i3820, 'm_DisabledSprite')
  return i3820
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3822 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3823 = data
  i3822.m_NormalTrigger = i3823[0]
  i3822.m_HighlightedTrigger = i3823[1]
  i3822.m_PressedTrigger = i3823[2]
  i3822.m_SelectedTrigger = i3823[3]
  i3822.m_DisabledTrigger = i3823[4]
  return i3822
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i3824 = root || request.c( 'PlayableHudRuntime' )
  var i3825 = data
  return i3824
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3826 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3827 = data
  request.r(i3827[0], i3827[1], 0, i3826, 'm_FirstSelected')
  i3826.m_sendNavigationEvents = !!i3827[2]
  i3826.m_DragThreshold = i3827[3]
  return i3826
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3828 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3829 = data
  i3828.m_HorizontalAxis = i3829[0]
  i3828.m_VerticalAxis = i3829[1]
  i3828.m_SubmitButton = i3829[2]
  i3828.m_CancelButton = i3829[3]
  i3828.m_InputActionsPerSecond = i3829[4]
  i3828.m_RepeatDelay = i3829[5]
  i3828.m_ForceModuleActive = !!i3829[6]
  i3828.m_SendPointerHoverToParent = !!i3829[7]
  return i3828
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i3830 = root || request.c( 'PlayableRouter' )
  var i3831 = data
  var i3833 = i3831[0]
  var i3832 = []
  for(var i = 0; i < i3833.length; i += 2) {
  request.r(i3833[i + 0], i3833[i + 1], 2, i3832, '')
  }
  i3830.menuObjects = i3832
  var i3835 = i3831[1]
  var i3834 = []
  for(var i = 0; i < i3835.length; i += 2) {
  request.r(i3835[i + 0], i3835[i + 1], 2, i3834, '')
  }
  i3830.gameplayObjects = i3834
  var i3837 = i3831[2]
  var i3836 = []
  for(var i = 0; i < i3837.length; i += 1) {
    i3836.push( request.d('PlayableRouter+SubLevelSlot', i3837[i + 0]) );
  }
  i3830.subLevels = i3836
  i3830.fadeDuration = i3831[3]
  i3830.lockedMessage = i3831[4]
  i3830.lockedTapsToCTA = i3831[5]
  return i3830
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i3840 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i3841 = data
  request.r(i3841[0], i3841[1], 0, i3840, 'button')
  request.r(i3841[2], i3841[3], 0, i3840, 'level')
  return i3840
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i3842 = root || request.c( 'ToastManager' )
  var i3843 = data
  request.r(i3843[0], i3843[1], 0, i3842, 'toastPanel')
  request.r(i3843[2], i3843[3], 0, i3842, 'toastPopup')
  request.r(i3843[4], i3843[5], 0, i3842, 'canvasGroup')
  request.r(i3843[6], i3843[7], 0, i3842, 'toastText')
  i3842.startY = i3843[8]
  i3842.visibleY = i3843[9]
  i3842.endY = i3843[10]
  i3842.animationTime = i3843[11]
  i3842.animationTimeUp = i3843[12]
  return i3842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3845 = data
  i3844.m_Alpha = i3845[0]
  i3844.m_Interactable = !!i3845[1]
  i3844.m_BlocksRaycasts = !!i3845[2]
  i3844.m_IgnoreParentGroups = !!i3845[3]
  i3844.enabled = !!i3845[4]
  return i3844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3847 = data
  i3846.ambientIntensity = i3847[0]
  i3846.reflectionIntensity = i3847[1]
  i3846.ambientMode = i3847[2]
  i3846.ambientLight = new pc.Color(i3847[3], i3847[4], i3847[5], i3847[6])
  i3846.ambientSkyColor = new pc.Color(i3847[7], i3847[8], i3847[9], i3847[10])
  i3846.ambientGroundColor = new pc.Color(i3847[11], i3847[12], i3847[13], i3847[14])
  i3846.ambientEquatorColor = new pc.Color(i3847[15], i3847[16], i3847[17], i3847[18])
  i3846.fogColor = new pc.Color(i3847[19], i3847[20], i3847[21], i3847[22])
  i3846.fogEndDistance = i3847[23]
  i3846.fogStartDistance = i3847[24]
  i3846.fogDensity = i3847[25]
  i3846.fog = !!i3847[26]
  request.r(i3847[27], i3847[28], 0, i3846, 'skybox')
  i3846.fogMode = i3847[29]
  var i3849 = i3847[30]
  var i3848 = []
  for(var i = 0; i < i3849.length; i += 1) {
    i3848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3849[i + 0]) );
  }
  i3846.lightmaps = i3848
  i3846.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3847[31], i3846.lightProbes)
  i3846.lightmapsMode = i3847[32]
  i3846.mixedBakeMode = i3847[33]
  i3846.environmentLightingMode = i3847[34]
  i3846.ambientProbe = new pc.SphericalHarmonicsL2(i3847[35])
  request.r(i3847[36], i3847[37], 0, i3846, 'customReflection')
  request.r(i3847[38], i3847[39], 0, i3846, 'defaultReflection')
  i3846.defaultReflectionMode = i3847[40]
  i3846.defaultReflectionResolution = i3847[41]
  i3846.sunLightObjectId = i3847[42]
  i3846.pixelLightCount = i3847[43]
  i3846.defaultReflectionHDR = !!i3847[44]
  i3846.hasLightDataAsset = !!i3847[45]
  i3846.hasManualGenerate = !!i3847[46]
  return i3846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3853 = data
  request.r(i3853[0], i3853[1], 0, i3852, 'lightmapColor')
  request.r(i3853[2], i3853[3], 0, i3852, 'lightmapDirection')
  request.r(i3853[4], i3853[5], 0, i3852, 'shadowMask')
  return i3852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3854 = root || new UnityEngine.LightProbes()
  var i3855 = data
  return i3854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i3860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i3861 = data
  i3860.name = i3861[0]
  i3860.bounciness = i3861[1]
  i3860.friction = i3861[2]
  return i3860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3863 = data
  var i3865 = i3863[0]
  var i3864 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3865.length; i += 1) {
    i3864.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3865[i + 0]));
  }
  i3862.ShaderCompilationErrors = i3864
  i3862.name = i3863[1]
  i3862.guid = i3863[2]
  var i3867 = i3863[3]
  var i3866 = []
  for(var i = 0; i < i3867.length; i += 1) {
    i3866.push( i3867[i + 0] );
  }
  i3862.shaderDefinedKeywords = i3866
  var i3869 = i3863[4]
  var i3868 = []
  for(var i = 0; i < i3869.length; i += 1) {
    i3868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3869[i + 0]) );
  }
  i3862.passes = i3868
  var i3871 = i3863[5]
  var i3870 = []
  for(var i = 0; i < i3871.length; i += 1) {
    i3870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3871[i + 0]) );
  }
  i3862.usePasses = i3870
  var i3873 = i3863[6]
  var i3872 = []
  for(var i = 0; i < i3873.length; i += 1) {
    i3872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3873[i + 0]) );
  }
  i3862.defaultParameterValues = i3872
  request.r(i3863[7], i3863[8], 0, i3862, 'unityFallbackShader')
  i3862.readDepth = !!i3863[9]
  i3862.hasDepthOnlyPass = !!i3863[10]
  i3862.isCreatedByShaderGraph = !!i3863[11]
  i3862.disableBatching = !!i3863[12]
  i3862.compiled = !!i3863[13]
  return i3862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3877 = data
  i3876.shaderName = i3877[0]
  i3876.errorMessage = i3877[1]
  return i3876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3882 = root || new pc.UnityShaderPass()
  var i3883 = data
  i3882.id = i3883[0]
  i3882.subShaderIndex = i3883[1]
  i3882.name = i3883[2]
  i3882.passType = i3883[3]
  i3882.grabPassTextureName = i3883[4]
  i3882.usePass = !!i3883[5]
  i3882.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3883[6], i3882.zTest)
  i3882.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3883[7], i3882.zWrite)
  i3882.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3883[8], i3882.culling)
  i3882.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3883[9], i3882.blending)
  i3882.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3883[10], i3882.alphaBlending)
  i3882.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3883[11], i3882.colorWriteMask)
  i3882.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3883[12], i3882.offsetUnits)
  i3882.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3883[13], i3882.offsetFactor)
  i3882.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3883[14], i3882.stencilRef)
  i3882.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3883[15], i3882.stencilReadMask)
  i3882.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3883[16], i3882.stencilWriteMask)
  i3882.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3883[17], i3882.stencilOp)
  i3882.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3883[18], i3882.stencilOpFront)
  i3882.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3883[19], i3882.stencilOpBack)
  var i3885 = i3883[20]
  var i3884 = []
  for(var i = 0; i < i3885.length; i += 1) {
    i3884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3885[i + 0]) );
  }
  i3882.tags = i3884
  var i3887 = i3883[21]
  var i3886 = []
  for(var i = 0; i < i3887.length; i += 1) {
    i3886.push( i3887[i + 0] );
  }
  i3882.passDefinedKeywords = i3886
  var i3889 = i3883[22]
  var i3888 = []
  for(var i = 0; i < i3889.length; i += 1) {
    i3888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3889[i + 0]) );
  }
  i3882.passDefinedKeywordGroups = i3888
  var i3891 = i3883[23]
  var i3890 = []
  for(var i = 0; i < i3891.length; i += 1) {
    i3890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3891[i + 0]) );
  }
  i3882.variants = i3890
  var i3893 = i3883[24]
  var i3892 = []
  for(var i = 0; i < i3893.length; i += 1) {
    i3892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3893[i + 0]) );
  }
  i3882.excludedVariants = i3892
  i3882.hasDepthReader = !!i3883[25]
  return i3882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3895 = data
  i3894.val = i3895[0]
  i3894.name = i3895[1]
  return i3894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3897 = data
  i3896.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3897[0], i3896.src)
  i3896.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3897[1], i3896.dst)
  i3896.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3897[2], i3896.op)
  return i3896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3899 = data
  i3898.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3899[0], i3898.pass)
  i3898.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3899[1], i3898.fail)
  i3898.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3899[2], i3898.zFail)
  i3898.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3899[3], i3898.comp)
  return i3898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3903 = data
  i3902.name = i3903[0]
  i3902.value = i3903[1]
  return i3902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3907 = data
  var i3909 = i3907[0]
  var i3908 = []
  for(var i = 0; i < i3909.length; i += 1) {
    i3908.push( i3909[i + 0] );
  }
  i3906.keywords = i3908
  i3906.hasDiscard = !!i3907[1]
  return i3906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3913 = data
  i3912.passId = i3913[0]
  i3912.subShaderIndex = i3913[1]
  var i3915 = i3913[2]
  var i3914 = []
  for(var i = 0; i < i3915.length; i += 1) {
    i3914.push( i3915[i + 0] );
  }
  i3912.keywords = i3914
  i3912.vertexProgram = i3913[3]
  i3912.fragmentProgram = i3913[4]
  i3912.exportedForWebGl2 = !!i3913[5]
  i3912.readDepth = !!i3913[6]
  return i3912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3919 = data
  request.r(i3919[0], i3919[1], 0, i3918, 'shader')
  i3918.pass = i3919[2]
  return i3918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3923 = data
  i3922.name = i3923[0]
  i3922.type = i3923[1]
  i3922.value = new pc.Vec4( i3923[2], i3923[3], i3923[4], i3923[5] )
  i3922.textureValue = i3923[6]
  i3922.shaderPropertyFlag = i3923[7]
  return i3922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3925 = data
  i3924.name = i3925[0]
  request.r(i3925[1], i3925[2], 0, i3924, 'texture')
  i3924.aabb = i3925[3]
  i3924.vertices = i3925[4]
  i3924.triangles = i3925[5]
  i3924.textureRect = UnityEngine.Rect.MinMaxRect(i3925[6], i3925[7], i3925[8], i3925[9])
  i3924.packedRect = UnityEngine.Rect.MinMaxRect(i3925[10], i3925[11], i3925[12], i3925[13])
  i3924.border = new pc.Vec4( i3925[14], i3925[15], i3925[16], i3925[17] )
  i3924.transparency = i3925[18]
  i3924.bounds = i3925[19]
  i3924.pixelsPerUnit = i3925[20]
  i3924.textureWidth = i3925[21]
  i3924.textureHeight = i3925[22]
  i3924.nativeSize = new pc.Vec2( i3925[23], i3925[24] )
  i3924.pivot = new pc.Vec2( i3925[25], i3925[26] )
  i3924.textureRectOffset = new pc.Vec2( i3925[27], i3925[28] )
  return i3924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3927 = data
  i3926.name = i3927[0]
  return i3926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3929 = data
  i3928.name = i3929[0]
  i3928.wrapMode = i3929[1]
  i3928.isLooping = !!i3929[2]
  i3928.length = i3929[3]
  var i3931 = i3929[4]
  var i3930 = []
  for(var i = 0; i < i3931.length; i += 1) {
    i3930.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3931[i + 0]) );
  }
  i3928.curves = i3930
  var i3933 = i3929[5]
  var i3932 = []
  for(var i = 0; i < i3933.length; i += 1) {
    i3932.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3933[i + 0]) );
  }
  i3928.events = i3932
  i3928.halfPrecision = !!i3929[6]
  i3928._frameRate = i3929[7]
  i3928.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3929[8], i3928.localBounds)
  i3928.hasMuscleCurves = !!i3929[9]
  var i3935 = i3929[10]
  var i3934 = []
  for(var i = 0; i < i3935.length; i += 1) {
    i3934.push( i3935[i + 0] );
  }
  i3928.clipMuscleConstant = i3934
  i3928.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3929[11], i3928.clipBindingConstant)
  return i3928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3939 = data
  i3938.path = i3939[0]
  i3938.hash = i3939[1]
  i3938.componentType = i3939[2]
  i3938.property = i3939[3]
  i3938.keys = i3939[4]
  var i3941 = i3939[5]
  var i3940 = []
  for(var i = 0; i < i3941.length; i += 1) {
    i3940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3941[i + 0]) );
  }
  i3938.objectReferenceKeys = i3940
  return i3938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3945 = data
  i3944.time = i3945[0]
  request.r(i3945[1], i3945[2], 0, i3944, 'value')
  return i3944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3949 = data
  i3948.functionName = i3949[0]
  i3948.floatParameter = i3949[1]
  i3948.intParameter = i3949[2]
  i3948.stringParameter = i3949[3]
  request.r(i3949[4], i3949[5], 0, i3948, 'objectReferenceParameter')
  i3948.time = i3949[6]
  return i3948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3951 = data
  i3950.center = new pc.Vec3( i3951[0], i3951[1], i3951[2] )
  i3950.extends = new pc.Vec3( i3951[3], i3951[4], i3951[5] )
  return i3950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3955 = data
  var i3957 = i3955[0]
  var i3956 = []
  for(var i = 0; i < i3957.length; i += 1) {
    i3956.push( i3957[i + 0] );
  }
  i3954.genericBindings = i3956
  var i3959 = i3955[1]
  var i3958 = []
  for(var i = 0; i < i3959.length; i += 1) {
    i3958.push( i3959[i + 0] );
  }
  i3954.pptrCurveMapping = i3958
  return i3954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3961 = data
  i3960.name = i3961[0]
  i3960.ascent = i3961[1]
  i3960.originalLineHeight = i3961[2]
  i3960.fontSize = i3961[3]
  var i3963 = i3961[4]
  var i3962 = []
  for(var i = 0; i < i3963.length; i += 1) {
    i3962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3963[i + 0]) );
  }
  i3960.characterInfo = i3962
  request.r(i3961[5], i3961[6], 0, i3960, 'texture')
  i3960.originalFontSize = i3961[7]
  return i3960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3967 = data
  i3966.index = i3967[0]
  i3966.advance = i3967[1]
  i3966.bearing = i3967[2]
  i3966.glyphWidth = i3967[3]
  i3966.glyphHeight = i3967[4]
  i3966.minX = i3967[5]
  i3966.maxX = i3967[6]
  i3966.minY = i3967[7]
  i3966.maxY = i3967[8]
  i3966.uvBottomLeftX = i3967[9]
  i3966.uvBottomLeftY = i3967[10]
  i3966.uvBottomRightX = i3967[11]
  i3966.uvBottomRightY = i3967[12]
  i3966.uvTopLeftX = i3967[13]
  i3966.uvTopLeftY = i3967[14]
  i3966.uvTopRightX = i3967[15]
  i3966.uvTopRightY = i3967[16]
  return i3966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3969 = data
  i3968.name = i3969[0]
  var i3971 = i3969[1]
  var i3970 = []
  for(var i = 0; i < i3971.length; i += 1) {
    i3970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3971[i + 0]) );
  }
  i3968.layers = i3970
  var i3973 = i3969[2]
  var i3972 = []
  for(var i = 0; i < i3973.length; i += 1) {
    i3972.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3973[i + 0]) );
  }
  i3968.parameters = i3972
  i3968.animationClips = i3969[3]
  i3968.avatarUnsupported = i3969[4]
  return i3968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3977 = data
  i3976.name = i3977[0]
  i3976.defaultWeight = i3977[1]
  i3976.blendingMode = i3977[2]
  i3976.avatarMask = i3977[3]
  i3976.syncedLayerIndex = i3977[4]
  i3976.syncedLayerAffectsTiming = !!i3977[5]
  i3976.syncedLayers = i3977[6]
  i3976.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3977[7], i3976.stateMachine)
  return i3976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3979 = data
  i3978.id = i3979[0]
  i3978.name = i3979[1]
  i3978.path = i3979[2]
  var i3981 = i3979[3]
  var i3980 = []
  for(var i = 0; i < i3981.length; i += 1) {
    i3980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3981[i + 0]) );
  }
  i3978.states = i3980
  var i3983 = i3979[4]
  var i3982 = []
  for(var i = 0; i < i3983.length; i += 1) {
    i3982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3983[i + 0]) );
  }
  i3978.machines = i3982
  var i3985 = i3979[5]
  var i3984 = []
  for(var i = 0; i < i3985.length; i += 1) {
    i3984.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3985[i + 0]) );
  }
  i3978.entryStateTransitions = i3984
  var i3987 = i3979[6]
  var i3986 = []
  for(var i = 0; i < i3987.length; i += 1) {
    i3986.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3987[i + 0]) );
  }
  i3978.exitStateTransitions = i3986
  var i3989 = i3979[7]
  var i3988 = []
  for(var i = 0; i < i3989.length; i += 1) {
    i3988.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3989[i + 0]) );
  }
  i3978.anyStateTransitions = i3988
  i3978.defaultStateId = i3979[8]
  return i3978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3993 = data
  i3992.id = i3993[0]
  i3992.name = i3993[1]
  i3992.cycleOffset = i3993[2]
  i3992.cycleOffsetParameter = i3993[3]
  i3992.cycleOffsetParameterActive = !!i3993[4]
  i3992.mirror = !!i3993[5]
  i3992.mirrorParameter = i3993[6]
  i3992.mirrorParameterActive = !!i3993[7]
  i3992.motionId = i3993[8]
  i3992.nameHash = i3993[9]
  i3992.fullPathHash = i3993[10]
  i3992.speed = i3993[11]
  i3992.speedParameter = i3993[12]
  i3992.speedParameterActive = !!i3993[13]
  i3992.tag = i3993[14]
  i3992.tagHash = i3993[15]
  i3992.writeDefaultValues = !!i3993[16]
  var i3995 = i3993[17]
  var i3994 = []
  for(var i = 0; i < i3995.length; i += 2) {
  request.r(i3995[i + 0], i3995[i + 1], 2, i3994, '')
  }
  i3992.behaviours = i3994
  var i3997 = i3993[18]
  var i3996 = []
  for(var i = 0; i < i3997.length; i += 1) {
    i3996.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3997[i + 0]) );
  }
  i3992.transitions = i3996
  return i3992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4003 = data
  i4002.fullPath = i4003[0]
  i4002.canTransitionToSelf = !!i4003[1]
  i4002.duration = i4003[2]
  i4002.exitTime = i4003[3]
  i4002.hasExitTime = !!i4003[4]
  i4002.hasFixedDuration = !!i4003[5]
  i4002.interruptionSource = i4003[6]
  i4002.offset = i4003[7]
  i4002.orderedInterruption = !!i4003[8]
  i4002.destinationStateId = i4003[9]
  i4002.isExit = !!i4003[10]
  i4002.mute = !!i4003[11]
  i4002.solo = !!i4003[12]
  var i4005 = i4003[13]
  var i4004 = []
  for(var i = 0; i < i4005.length; i += 1) {
    i4004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4005[i + 0]) );
  }
  i4002.conditions = i4004
  return i4002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4011 = data
  i4010.destinationStateId = i4011[0]
  i4010.isExit = !!i4011[1]
  i4010.mute = !!i4011[2]
  i4010.solo = !!i4011[3]
  var i4013 = i4011[4]
  var i4012 = []
  for(var i = 0; i < i4013.length; i += 1) {
    i4012.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4013[i + 0]) );
  }
  i4010.conditions = i4012
  return i4010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4017 = data
  i4016.mode = i4017[0]
  i4016.parameter = i4017[1]
  i4016.threshold = i4017[2]
  return i4016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4021 = data
  i4020.defaultBool = !!i4021[0]
  i4020.defaultFloat = i4021[1]
  i4020.defaultInt = i4021[2]
  i4020.name = i4021[3]
  i4020.nameHash = i4021[4]
  i4020.type = i4021[5]
  return i4020
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4022 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4023 = data
  i4022.useSafeMode = !!i4023[0]
  i4022.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4023[1], i4022.safeModeOptions)
  i4022.timeScale = i4023[2]
  i4022.unscaledTimeScale = i4023[3]
  i4022.useSmoothDeltaTime = !!i4023[4]
  i4022.maxSmoothUnscaledTime = i4023[5]
  i4022.rewindCallbackMode = i4023[6]
  i4022.showUnityEditorReport = !!i4023[7]
  i4022.logBehaviour = i4023[8]
  i4022.drawGizmos = !!i4023[9]
  i4022.defaultRecyclable = !!i4023[10]
  i4022.defaultAutoPlay = i4023[11]
  i4022.defaultUpdateType = i4023[12]
  i4022.defaultTimeScaleIndependent = !!i4023[13]
  i4022.defaultEaseType = i4023[14]
  i4022.defaultEaseOvershootOrAmplitude = i4023[15]
  i4022.defaultEasePeriod = i4023[16]
  i4022.defaultAutoKill = !!i4023[17]
  i4022.defaultLoopType = i4023[18]
  i4022.debugMode = !!i4023[19]
  i4022.debugStoreTargetId = !!i4023[20]
  i4022.showPreviewPanel = !!i4023[21]
  i4022.storeSettingsLocation = i4023[22]
  i4022.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4023[23], i4022.modules)
  i4022.createASMDEF = !!i4023[24]
  i4022.showPlayingTweens = !!i4023[25]
  i4022.showPausedTweens = !!i4023[26]
  return i4022
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4024 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4025 = data
  i4024.logBehaviour = i4025[0]
  i4024.nestedTweenFailureBehaviour = i4025[1]
  return i4024
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4026 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4027 = data
  i4026.showPanel = !!i4027[0]
  i4026.audioEnabled = !!i4027[1]
  i4026.physicsEnabled = !!i4027[2]
  i4026.physics2DEnabled = !!i4027[3]
  i4026.spriteEnabled = !!i4027[4]
  i4026.uiEnabled = !!i4027[5]
  i4026.textMeshProEnabled = !!i4027[6]
  i4026.tk2DEnabled = !!i4027[7]
  i4026.deAudioEnabled = !!i4027[8]
  i4026.deUnityExtendedEnabled = !!i4027[9]
  i4026.epoOutlineEnabled = !!i4027[10]
  return i4026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4029 = data
  var i4031 = i4029[0]
  var i4030 = []
  for(var i = 0; i < i4031.length; i += 1) {
    i4030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4031[i + 0]) );
  }
  i4028.files = i4030
  i4028.componentToPrefabIds = i4029[1]
  return i4028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4035 = data
  i4034.path = i4035[0]
  request.r(i4035[1], i4035[2], 0, i4034, 'unityObject')
  return i4034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4037 = data
  var i4039 = i4037[0]
  var i4038 = []
  for(var i = 0; i < i4039.length; i += 1) {
    i4038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4039[i + 0]) );
  }
  i4036.scriptsExecutionOrder = i4038
  var i4041 = i4037[1]
  var i4040 = []
  for(var i = 0; i < i4041.length; i += 1) {
    i4040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4041[i + 0]) );
  }
  i4036.sortingLayers = i4040
  var i4043 = i4037[2]
  var i4042 = []
  for(var i = 0; i < i4043.length; i += 1) {
    i4042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4043[i + 0]) );
  }
  i4036.cullingLayers = i4042
  i4036.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4037[3], i4036.timeSettings)
  i4036.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4037[4], i4036.physicsSettings)
  i4036.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4037[5], i4036.physics2DSettings)
  i4036.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4037[6], i4036.qualitySettings)
  i4036.enableRealtimeShadows = !!i4037[7]
  i4036.enableAutoInstancing = !!i4037[8]
  i4036.enableStaticBatching = !!i4037[9]
  i4036.enableDynamicBatching = !!i4037[10]
  i4036.usePreservativeDynamicBatching = !!i4037[11]
  i4036.lightmapEncodingQuality = i4037[12]
  i4036.desiredColorSpace = i4037[13]
  var i4045 = i4037[14]
  var i4044 = []
  for(var i = 0; i < i4045.length; i += 1) {
    i4044.push( i4045[i + 0] );
  }
  i4036.allTags = i4044
  return i4036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4049 = data
  i4048.name = i4049[0]
  i4048.value = i4049[1]
  return i4048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4053 = data
  i4052.id = i4053[0]
  i4052.name = i4053[1]
  i4052.value = i4053[2]
  return i4052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4057 = data
  i4056.id = i4057[0]
  i4056.name = i4057[1]
  return i4056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4059 = data
  i4058.fixedDeltaTime = i4059[0]
  i4058.maximumDeltaTime = i4059[1]
  i4058.timeScale = i4059[2]
  i4058.maximumParticleTimestep = i4059[3]
  return i4058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4061 = data
  i4060.gravity = new pc.Vec3( i4061[0], i4061[1], i4061[2] )
  i4060.defaultSolverIterations = i4061[3]
  i4060.bounceThreshold = i4061[4]
  i4060.autoSyncTransforms = !!i4061[5]
  i4060.autoSimulation = !!i4061[6]
  var i4063 = i4061[7]
  var i4062 = []
  for(var i = 0; i < i4063.length; i += 1) {
    i4062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4063[i + 0]) );
  }
  i4060.collisionMatrix = i4062
  return i4060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4067 = data
  i4066.enabled = !!i4067[0]
  i4066.layerId = i4067[1]
  i4066.otherLayerId = i4067[2]
  return i4066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4069 = data
  request.r(i4069[0], i4069[1], 0, i4068, 'material')
  i4068.gravity = new pc.Vec2( i4069[2], i4069[3] )
  i4068.positionIterations = i4069[4]
  i4068.velocityIterations = i4069[5]
  i4068.velocityThreshold = i4069[6]
  i4068.maxLinearCorrection = i4069[7]
  i4068.maxAngularCorrection = i4069[8]
  i4068.maxTranslationSpeed = i4069[9]
  i4068.maxRotationSpeed = i4069[10]
  i4068.baumgarteScale = i4069[11]
  i4068.baumgarteTOIScale = i4069[12]
  i4068.timeToSleep = i4069[13]
  i4068.linearSleepTolerance = i4069[14]
  i4068.angularSleepTolerance = i4069[15]
  i4068.defaultContactOffset = i4069[16]
  i4068.autoSimulation = !!i4069[17]
  i4068.queriesHitTriggers = !!i4069[18]
  i4068.queriesStartInColliders = !!i4069[19]
  i4068.callbacksOnDisable = !!i4069[20]
  i4068.reuseCollisionCallbacks = !!i4069[21]
  i4068.autoSyncTransforms = !!i4069[22]
  var i4071 = i4069[23]
  var i4070 = []
  for(var i = 0; i < i4071.length; i += 1) {
    i4070.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4071[i + 0]) );
  }
  i4068.collisionMatrix = i4070
  return i4068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4075 = data
  i4074.enabled = !!i4075[0]
  i4074.layerId = i4075[1]
  i4074.otherLayerId = i4075[2]
  return i4074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4077 = data
  var i4079 = i4077[0]
  var i4078 = []
  for(var i = 0; i < i4079.length; i += 1) {
    i4078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4079[i + 0]) );
  }
  i4076.qualityLevels = i4078
  var i4081 = i4077[1]
  var i4080 = []
  for(var i = 0; i < i4081.length; i += 1) {
    i4080.push( i4081[i + 0] );
  }
  i4076.names = i4080
  i4076.shadows = i4077[2]
  i4076.anisotropicFiltering = i4077[3]
  i4076.antiAliasing = i4077[4]
  i4076.lodBias = i4077[5]
  i4076.shadowCascades = i4077[6]
  i4076.shadowDistance = i4077[7]
  i4076.shadowmaskMode = i4077[8]
  i4076.shadowProjection = i4077[9]
  i4076.shadowResolution = i4077[10]
  i4076.softParticles = !!i4077[11]
  i4076.softVegetation = !!i4077[12]
  i4076.activeColorSpace = i4077[13]
  i4076.desiredColorSpace = i4077[14]
  i4076.masterTextureLimit = i4077[15]
  i4076.maxQueuedFrames = i4077[16]
  i4076.particleRaycastBudget = i4077[17]
  i4076.pixelLightCount = i4077[18]
  i4076.realtimeReflectionProbes = !!i4077[19]
  i4076.shadowCascade2Split = i4077[20]
  i4076.shadowCascade4Split = new pc.Vec3( i4077[21], i4077[22], i4077[23] )
  i4076.streamingMipmapsActive = !!i4077[24]
  i4076.vSyncCount = i4077[25]
  i4076.asyncUploadBufferSize = i4077[26]
  i4076.asyncUploadTimeSlice = i4077[27]
  i4076.billboardsFaceCameraPosition = !!i4077[28]
  i4076.shadowNearPlaneOffset = i4077[29]
  i4076.streamingMipmapsMemoryBudget = i4077[30]
  i4076.maximumLODLevel = i4077[31]
  i4076.streamingMipmapsAddAllCameras = !!i4077[32]
  i4076.streamingMipmapsMaxLevelReduction = i4077[33]
  i4076.streamingMipmapsRenderersPerFrame = i4077[34]
  i4076.resolutionScalingFixedDPIFactor = i4077[35]
  i4076.streamingMipmapsMaxFileIORequests = i4077[36]
  i4076.currentQualityLevel = i4077[37]
  return i4076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i4084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i4085 = data
  var i4087 = i4085[0]
  var i4086 = []
  for(var i = 0; i < i4087.length; i += 1) {
    i4086.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i4087[i + 0]) );
  }
  i4084.groups = i4086
  var i4089 = i4085[1]
  var i4088 = []
  for(var i = 0; i < i4089.length; i += 1) {
    i4088.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i4089[i + 0]) );
  }
  i4084.snapshots = i4088
  return i4084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i4092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i4093 = data
  i4092.id = i4093[0]
  i4092.childGroupIds = i4093[1]
  i4092.name = i4093[2]
  return i4092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i4096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i4097 = data
  i4096.id = i4097[0]
  var i4099 = i4097[1]
  var i4098 = []
  for(var i = 0; i < i4099.length; i += 1) {
    i4098.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i4099[i + 0]) );
  }
  i4096.parameters = i4098
  return i4096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i4102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i4103 = data
  i4102.name = i4103[0]
  i4102.value = i4103[1]
  return i4102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4107 = data
  i4106.weight = i4107[0]
  i4106.vertices = i4107[1]
  i4106.normals = i4107[2]
  i4106.tangents = i4107[3]
  return i4106
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"edgeRadius":0,"points":1,"useAdjacentStartPoint":2,"adjacentStartPoint":3,"useAdjacentEndPoint":5,"adjacentEndPoint":6,"enabled":8,"isTrigger":9,"usedByEffector":10,"density":11,"offset":12,"material":14},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[84],"85":[51],"86":[87],"88":[87],"89":[87],"90":[87],"91":[87],"92":[87],"93":[87],"94":[37],"95":[37],"96":[37],"97":[37],"98":[37],"99":[37],"100":[37],"101":[37],"102":[37],"103":[37],"104":[37],"105":[37],"106":[37],"107":[51],"108":[109],"110":[111],"112":[111],"62":[56],"113":[24],"31":[14],"114":[27],"115":[14],"116":[117],"118":[117],"119":[32],"43":[27],"120":[14],"22":[14],"121":[56],"122":[56],"65":[62],"57":[66,56],"123":[56],"64":[62],"124":[56],"125":[56],"126":[56],"127":[56],"128":[56],"129":[56],"130":[56],"131":[56],"132":[56],"133":[66,56],"134":[56],"135":[56],"136":[56],"137":[56],"58":[66,56],"138":[56],"139":[70],"140":[70],"71":[70],"141":[70],"142":[51],"143":[51]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level1_Armpit_Playable","UnityEngine.GameObject","BasicDrag","BD_CameraFollow","UnityEngine.AudioClip","ActionOnTap","UnityEngine.SpriteRenderer","UnityEngine.AudioSource","PlayableCTA","PlayableFadeCoverSettings","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","BD_AnimationHelper","UnityEngine.Sprite","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.TrailRenderer","UnityEngine.LineRenderer","TextureOffsetScroller","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.BoxCollider2D","PlaySfxOnCollision","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","BD_Fold","DG.Tweening.DOTweenAnimation","UnityEngine.PolygonCollider2D","UnityEngine.EdgeCollider2D","UnityEngine.PhysicsMaterial2D","JarRotator","UnityEngine.Rigidbody2D","UnityEngine.SpriteMask","_2dxFX_Wave","Level1_Armpit_WaxCount","BD_AnimatorDrag","TapandHold_Simple","SpriteButton","BD_Progress","BD_Clamp","BD_ToolRotate","MenuLevel","IntroLevelAnim","Level_PoseController","PlayableRouter","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "10.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "28Aug2026_Level_3_1_Step_1To3_V2";

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

Deserializers.buildID = "76ee4036-cd30-42fd-885d-7a64cb5c51dc";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

