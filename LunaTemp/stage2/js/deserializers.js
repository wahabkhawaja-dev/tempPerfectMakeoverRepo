var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i6498 = root || request.c( 'UnityEngine.JointSpring' )
  var i6499 = data
  i6498.spring = i6499[0]
  i6498.damper = i6499[1]
  i6498.targetPosition = i6499[2]
  return i6498
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i6500 = root || request.c( 'UnityEngine.JointMotor' )
  var i6501 = data
  i6500.m_TargetVelocity = i6501[0]
  i6500.m_Force = i6501[1]
  i6500.m_FreeSpin = i6501[2]
  return i6500
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i6502 = root || request.c( 'UnityEngine.JointLimits' )
  var i6503 = data
  i6502.m_Min = i6503[0]
  i6502.m_Max = i6503[1]
  i6502.m_Bounciness = i6503[2]
  i6502.m_BounceMinVelocity = i6503[3]
  i6502.m_ContactDistance = i6503[4]
  i6502.minBounce = i6503[5]
  i6502.maxBounce = i6503[6]
  return i6502
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i6504 = root || request.c( 'UnityEngine.JointDrive' )
  var i6505 = data
  i6504.m_PositionSpring = i6505[0]
  i6504.m_PositionDamper = i6505[1]
  i6504.m_MaximumForce = i6505[2]
  i6504.m_UseAcceleration = i6505[3]
  return i6504
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i6506 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i6507 = data
  i6506.m_Spring = i6507[0]
  i6506.m_Damper = i6507[1]
  return i6506
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i6508 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i6509 = data
  i6508.m_Limit = i6509[0]
  i6508.m_Bounciness = i6509[1]
  i6508.m_ContactDistance = i6509[2]
  return i6508
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i6510 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i6511 = data
  i6510.m_ExtremumSlip = i6511[0]
  i6510.m_ExtremumValue = i6511[1]
  i6510.m_AsymptoteSlip = i6511[2]
  i6510.m_AsymptoteValue = i6511[3]
  i6510.m_Stiffness = i6511[4]
  return i6510
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i6512 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i6513 = data
  i6512.m_LowerAngle = i6513[0]
  i6512.m_UpperAngle = i6513[1]
  return i6512
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i6514 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i6515 = data
  i6514.m_MotorSpeed = i6515[0]
  i6514.m_MaximumMotorTorque = i6515[1]
  return i6514
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i6516 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i6517 = data
  i6516.m_DampingRatio = i6517[0]
  i6516.m_Frequency = i6517[1]
  i6516.m_Angle = i6517[2]
  return i6516
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i6518 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i6519 = data
  i6518.m_LowerTranslation = i6519[0]
  i6518.m_UpperTranslation = i6519[1]
  return i6518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6520 = root || new pc.UnityMaterial()
  var i6521 = data
  i6520.name = i6521[0]
  request.r(i6521[1], i6521[2], 0, i6520, 'shader')
  i6520.renderQueue = i6521[3]
  i6520.enableInstancing = !!i6521[4]
  var i6523 = i6521[5]
  var i6522 = []
  for(var i = 0; i < i6523.length; i += 1) {
    i6522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6523[i + 0]) );
  }
  i6520.floatParameters = i6522
  var i6525 = i6521[6]
  var i6524 = []
  for(var i = 0; i < i6525.length; i += 1) {
    i6524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6525[i + 0]) );
  }
  i6520.colorParameters = i6524
  var i6527 = i6521[7]
  var i6526 = []
  for(var i = 0; i < i6527.length; i += 1) {
    i6526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6527[i + 0]) );
  }
  i6520.vectorParameters = i6526
  var i6529 = i6521[8]
  var i6528 = []
  for(var i = 0; i < i6529.length; i += 1) {
    i6528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6529[i + 0]) );
  }
  i6520.textureParameters = i6528
  var i6531 = i6521[9]
  var i6530 = []
  for(var i = 0; i < i6531.length; i += 1) {
    i6530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6531[i + 0]) );
  }
  i6520.materialFlags = i6530
  return i6520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6535 = data
  i6534.name = i6535[0]
  i6534.value = i6535[1]
  return i6534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6539 = data
  i6538.name = i6539[0]
  i6538.value = new pc.Color(i6539[1], i6539[2], i6539[3], i6539[4])
  return i6538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6543 = data
  i6542.name = i6543[0]
  i6542.value = new pc.Vec4( i6543[1], i6543[2], i6543[3], i6543[4] )
  return i6542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6547 = data
  i6546.name = i6547[0]
  request.r(i6547[1], i6547[2], 0, i6546, 'value')
  return i6546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6551 = data
  i6550.name = i6551[0]
  i6550.enabled = !!i6551[1]
  return i6550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6553 = data
  i6552.name = i6553[0]
  i6552.width = i6553[1]
  i6552.height = i6553[2]
  i6552.mipmapCount = i6553[3]
  i6552.anisoLevel = i6553[4]
  i6552.filterMode = i6553[5]
  i6552.hdr = !!i6553[6]
  i6552.format = i6553[7]
  i6552.wrapMode = i6553[8]
  i6552.alphaIsTransparency = !!i6553[9]
  i6552.alphaSource = i6553[10]
  i6552.graphicsFormat = i6553[11]
  i6552.sRGBTexture = !!i6553[12]
  i6552.desiredColorSpace = i6553[13]
  i6552.wrapU = i6553[14]
  i6552.wrapV = i6553[15]
  return i6552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i6554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i6555 = data
  i6554.name = i6555[0]
  i6554.halfPrecision = !!i6555[1]
  i6554.useSimplification = !!i6555[2]
  i6554.useUInt32IndexFormat = !!i6555[3]
  i6554.vertexCount = i6555[4]
  i6554.aabb = i6555[5]
  var i6557 = i6555[6]
  var i6556 = []
  for(var i = 0; i < i6557.length; i += 1) {
    i6556.push( !!i6557[i + 0] );
  }
  i6554.streams = i6556
  i6554.vertices = i6555[7]
  var i6559 = i6555[8]
  var i6558 = []
  for(var i = 0; i < i6559.length; i += 1) {
    i6558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i6559[i + 0]) );
  }
  i6554.subMeshes = i6558
  var i6561 = i6555[9]
  var i6560 = []
  for(var i = 0; i < i6561.length; i += 16) {
    i6560.push( new pc.Mat4().setData(i6561[i + 0], i6561[i + 1], i6561[i + 2], i6561[i + 3],  i6561[i + 4], i6561[i + 5], i6561[i + 6], i6561[i + 7],  i6561[i + 8], i6561[i + 9], i6561[i + 10], i6561[i + 11],  i6561[i + 12], i6561[i + 13], i6561[i + 14], i6561[i + 15]) );
  }
  i6554.bindposes = i6560
  var i6563 = i6555[10]
  var i6562 = []
  for(var i = 0; i < i6563.length; i += 1) {
    i6562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i6563[i + 0]) );
  }
  i6554.blendShapes = i6562
  return i6554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i6568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i6569 = data
  i6568.triangles = i6569[0]
  return i6568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i6574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i6575 = data
  i6574.name = i6575[0]
  var i6577 = i6575[1]
  var i6576 = []
  for(var i = 0; i < i6577.length; i += 1) {
    i6576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i6577[i + 0]) );
  }
  i6574.frames = i6576
  return i6574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i6578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i6579 = data
  i6578.position = new pc.Vec3( i6579[0], i6579[1], i6579[2] )
  i6578.scale = new pc.Vec3( i6579[3], i6579[4], i6579[5] )
  i6578.rotation = new pc.Quat(i6579[6], i6579[7], i6579[8], i6579[9])
  return i6578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i6580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i6581 = data
  i6580.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i6581[0], i6580.main)
  i6580.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i6581[1], i6580.colorBySpeed)
  i6580.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i6581[2], i6580.colorOverLifetime)
  i6580.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i6581[3], i6580.emission)
  i6580.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i6581[4], i6580.rotationBySpeed)
  i6580.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i6581[5], i6580.rotationOverLifetime)
  i6580.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i6581[6], i6580.shape)
  i6580.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i6581[7], i6580.sizeBySpeed)
  i6580.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i6581[8], i6580.sizeOverLifetime)
  i6580.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i6581[9], i6580.textureSheetAnimation)
  i6580.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i6581[10], i6580.velocityOverLifetime)
  i6580.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i6581[11], i6580.noise)
  i6580.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i6581[12], i6580.inheritVelocity)
  i6580.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i6581[13], i6580.forceOverLifetime)
  i6580.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i6581[14], i6580.limitVelocityOverLifetime)
  i6580.useAutoRandomSeed = !!i6581[15]
  i6580.randomSeed = i6581[16]
  return i6580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i6582 = root || new pc.ParticleSystemMain()
  var i6583 = data
  i6582.duration = i6583[0]
  i6582.loop = !!i6583[1]
  i6582.prewarm = !!i6583[2]
  i6582.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6583[3], i6582.startDelay)
  i6582.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6583[4], i6582.startLifetime)
  i6582.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6583[5], i6582.startSpeed)
  i6582.startSize3D = !!i6583[6]
  i6582.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6583[7], i6582.startSizeX)
  i6582.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6583[8], i6582.startSizeY)
  i6582.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6583[9], i6582.startSizeZ)
  i6582.startRotation3D = !!i6583[10]
  i6582.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6583[11], i6582.startRotationX)
  i6582.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6583[12], i6582.startRotationY)
  i6582.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6583[13], i6582.startRotationZ)
  i6582.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6583[14], i6582.startColor)
  i6582.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6583[15], i6582.gravityModifier)
  i6582.simulationSpace = i6583[16]
  request.r(i6583[17], i6583[18], 0, i6582, 'customSimulationSpace')
  i6582.simulationSpeed = i6583[19]
  i6582.useUnscaledTime = !!i6583[20]
  i6582.scalingMode = i6583[21]
  i6582.playOnAwake = !!i6583[22]
  i6582.maxParticles = i6583[23]
  i6582.emitterVelocityMode = i6583[24]
  i6582.stopAction = i6583[25]
  return i6582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i6584 = root || new pc.MinMaxCurve()
  var i6585 = data
  i6584.mode = i6585[0]
  i6584.curveMin = new pc.AnimationCurve( { keys_flow: i6585[1] } )
  i6584.curveMax = new pc.AnimationCurve( { keys_flow: i6585[2] } )
  i6584.curveMultiplier = i6585[3]
  i6584.constantMin = i6585[4]
  i6584.constantMax = i6585[5]
  return i6584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i6586 = root || new pc.MinMaxGradient()
  var i6587 = data
  i6586.mode = i6587[0]
  i6586.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6587[1], i6586.gradientMin)
  i6586.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6587[2], i6586.gradientMax)
  i6586.colorMin = new pc.Color(i6587[3], i6587[4], i6587[5], i6587[6])
  i6586.colorMax = new pc.Color(i6587[7], i6587[8], i6587[9], i6587[10])
  return i6586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i6588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i6589 = data
  i6588.mode = i6589[0]
  var i6591 = i6589[1]
  var i6590 = []
  for(var i = 0; i < i6591.length; i += 1) {
    i6590.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i6591[i + 0]) );
  }
  i6588.colorKeys = i6590
  var i6593 = i6589[2]
  var i6592 = []
  for(var i = 0; i < i6593.length; i += 1) {
    i6592.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i6593[i + 0]) );
  }
  i6588.alphaKeys = i6592
  return i6588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i6594 = root || new pc.ParticleSystemColorBySpeed()
  var i6595 = data
  i6594.enabled = !!i6595[0]
  i6594.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6595[1], i6594.color)
  i6594.range = new pc.Vec2( i6595[2], i6595[3] )
  return i6594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i6598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i6599 = data
  i6598.color = new pc.Color(i6599[0], i6599[1], i6599[2], i6599[3])
  i6598.time = i6599[4]
  return i6598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i6602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i6603 = data
  i6602.alpha = i6603[0]
  i6602.time = i6603[1]
  return i6602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i6604 = root || new pc.ParticleSystemColorOverLifetime()
  var i6605 = data
  i6604.enabled = !!i6605[0]
  i6604.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6605[1], i6604.color)
  return i6604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i6606 = root || new pc.ParticleSystemEmitter()
  var i6607 = data
  i6606.enabled = !!i6607[0]
  i6606.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6607[1], i6606.rateOverTime)
  i6606.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6607[2], i6606.rateOverDistance)
  var i6609 = i6607[3]
  var i6608 = []
  for(var i = 0; i < i6609.length; i += 1) {
    i6608.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i6609[i + 0]) );
  }
  i6606.bursts = i6608
  return i6606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i6612 = root || new pc.ParticleSystemBurst()
  var i6613 = data
  i6612.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6613[0], i6612.count)
  i6612.cycleCount = i6613[1]
  i6612.minCount = i6613[2]
  i6612.maxCount = i6613[3]
  i6612.repeatInterval = i6613[4]
  i6612.time = i6613[5]
  return i6612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i6614 = root || new pc.ParticleSystemRotationBySpeed()
  var i6615 = data
  i6614.enabled = !!i6615[0]
  i6614.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6615[1], i6614.x)
  i6614.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6615[2], i6614.y)
  i6614.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6615[3], i6614.z)
  i6614.separateAxes = !!i6615[4]
  i6614.range = new pc.Vec2( i6615[5], i6615[6] )
  return i6614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i6616 = root || new pc.ParticleSystemRotationOverLifetime()
  var i6617 = data
  i6616.enabled = !!i6617[0]
  i6616.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6617[1], i6616.x)
  i6616.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6617[2], i6616.y)
  i6616.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6617[3], i6616.z)
  i6616.separateAxes = !!i6617[4]
  return i6616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i6618 = root || new pc.ParticleSystemShape()
  var i6619 = data
  i6618.enabled = !!i6619[0]
  i6618.shapeType = i6619[1]
  i6618.randomDirectionAmount = i6619[2]
  i6618.sphericalDirectionAmount = i6619[3]
  i6618.randomPositionAmount = i6619[4]
  i6618.alignToDirection = !!i6619[5]
  i6618.radius = i6619[6]
  i6618.radiusMode = i6619[7]
  i6618.radiusSpread = i6619[8]
  i6618.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6619[9], i6618.radiusSpeed)
  i6618.radiusThickness = i6619[10]
  i6618.angle = i6619[11]
  i6618.length = i6619[12]
  i6618.boxThickness = new pc.Vec3( i6619[13], i6619[14], i6619[15] )
  i6618.meshShapeType = i6619[16]
  request.r(i6619[17], i6619[18], 0, i6618, 'mesh')
  request.r(i6619[19], i6619[20], 0, i6618, 'meshRenderer')
  request.r(i6619[21], i6619[22], 0, i6618, 'skinnedMeshRenderer')
  i6618.useMeshMaterialIndex = !!i6619[23]
  i6618.meshMaterialIndex = i6619[24]
  i6618.useMeshColors = !!i6619[25]
  i6618.normalOffset = i6619[26]
  i6618.arc = i6619[27]
  i6618.arcMode = i6619[28]
  i6618.arcSpread = i6619[29]
  i6618.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6619[30], i6618.arcSpeed)
  i6618.donutRadius = i6619[31]
  i6618.position = new pc.Vec3( i6619[32], i6619[33], i6619[34] )
  i6618.rotation = new pc.Vec3( i6619[35], i6619[36], i6619[37] )
  i6618.scale = new pc.Vec3( i6619[38], i6619[39], i6619[40] )
  return i6618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i6620 = root || new pc.ParticleSystemSizeBySpeed()
  var i6621 = data
  i6620.enabled = !!i6621[0]
  i6620.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6621[1], i6620.x)
  i6620.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6621[2], i6620.y)
  i6620.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6621[3], i6620.z)
  i6620.separateAxes = !!i6621[4]
  i6620.range = new pc.Vec2( i6621[5], i6621[6] )
  return i6620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i6622 = root || new pc.ParticleSystemSizeOverLifetime()
  var i6623 = data
  i6622.enabled = !!i6623[0]
  i6622.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6623[1], i6622.x)
  i6622.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6623[2], i6622.y)
  i6622.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6623[3], i6622.z)
  i6622.separateAxes = !!i6623[4]
  return i6622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i6624 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i6625 = data
  i6624.enabled = !!i6625[0]
  i6624.mode = i6625[1]
  i6624.animation = i6625[2]
  i6624.numTilesX = i6625[3]
  i6624.numTilesY = i6625[4]
  i6624.useRandomRow = !!i6625[5]
  i6624.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6625[6], i6624.frameOverTime)
  i6624.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6625[7], i6624.startFrame)
  i6624.cycleCount = i6625[8]
  i6624.rowIndex = i6625[9]
  i6624.flipU = i6625[10]
  i6624.flipV = i6625[11]
  i6624.spriteCount = i6625[12]
  var i6627 = i6625[13]
  var i6626 = []
  for(var i = 0; i < i6627.length; i += 2) {
  request.r(i6627[i + 0], i6627[i + 1], 2, i6626, '')
  }
  i6624.sprites = i6626
  return i6624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i6630 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i6631 = data
  i6630.enabled = !!i6631[0]
  i6630.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6631[1], i6630.x)
  i6630.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6631[2], i6630.y)
  i6630.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6631[3], i6630.z)
  i6630.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6631[4], i6630.radial)
  i6630.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6631[5], i6630.speedModifier)
  i6630.space = i6631[6]
  i6630.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6631[7], i6630.orbitalX)
  i6630.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6631[8], i6630.orbitalY)
  i6630.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6631[9], i6630.orbitalZ)
  i6630.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6631[10], i6630.orbitalOffsetX)
  i6630.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6631[11], i6630.orbitalOffsetY)
  i6630.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6631[12], i6630.orbitalOffsetZ)
  return i6630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i6632 = root || new pc.ParticleSystemNoise()
  var i6633 = data
  i6632.enabled = !!i6633[0]
  i6632.separateAxes = !!i6633[1]
  i6632.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6633[2], i6632.strengthX)
  i6632.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6633[3], i6632.strengthY)
  i6632.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6633[4], i6632.strengthZ)
  i6632.frequency = i6633[5]
  i6632.damping = !!i6633[6]
  i6632.octaveCount = i6633[7]
  i6632.octaveMultiplier = i6633[8]
  i6632.octaveScale = i6633[9]
  i6632.quality = i6633[10]
  i6632.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6633[11], i6632.scrollSpeed)
  i6632.scrollSpeedMultiplier = i6633[12]
  i6632.remapEnabled = !!i6633[13]
  i6632.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6633[14], i6632.remapX)
  i6632.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6633[15], i6632.remapY)
  i6632.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6633[16], i6632.remapZ)
  i6632.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6633[17], i6632.positionAmount)
  i6632.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6633[18], i6632.rotationAmount)
  i6632.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6633[19], i6632.sizeAmount)
  return i6632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i6634 = root || new pc.ParticleSystemInheritVelocity()
  var i6635 = data
  i6634.enabled = !!i6635[0]
  i6634.mode = i6635[1]
  i6634.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6635[2], i6634.curve)
  return i6634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i6636 = root || new pc.ParticleSystemForceOverLifetime()
  var i6637 = data
  i6636.enabled = !!i6637[0]
  i6636.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6637[1], i6636.x)
  i6636.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6637[2], i6636.y)
  i6636.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6637[3], i6636.z)
  i6636.space = i6637[4]
  i6636.randomized = !!i6637[5]
  return i6636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i6638 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i6639 = data
  i6638.enabled = !!i6639[0]
  i6638.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6639[1], i6638.limit)
  i6638.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6639[2], i6638.limitX)
  i6638.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6639[3], i6638.limitY)
  i6638.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6639[4], i6638.limitZ)
  i6638.dampen = i6639[5]
  i6638.separateAxes = !!i6639[6]
  i6638.space = i6639[7]
  i6638.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6639[8], i6638.drag)
  i6638.multiplyDragByParticleSize = !!i6639[9]
  i6638.multiplyDragByParticleVelocity = !!i6639[10]
  return i6638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i6640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i6641 = data
  request.r(i6641[0], i6641[1], 0, i6640, 'mesh')
  i6640.meshCount = i6641[2]
  i6640.activeVertexStreamsCount = i6641[3]
  i6640.alignment = i6641[4]
  i6640.renderMode = i6641[5]
  i6640.sortMode = i6641[6]
  i6640.lengthScale = i6641[7]
  i6640.velocityScale = i6641[8]
  i6640.cameraVelocityScale = i6641[9]
  i6640.normalDirection = i6641[10]
  i6640.sortingFudge = i6641[11]
  i6640.minParticleSize = i6641[12]
  i6640.maxParticleSize = i6641[13]
  i6640.pivot = new pc.Vec3( i6641[14], i6641[15], i6641[16] )
  request.r(i6641[17], i6641[18], 0, i6640, 'trailMaterial')
  i6640.applyActiveColorSpace = !!i6641[19]
  i6640.enabled = !!i6641[20]
  request.r(i6641[21], i6641[22], 0, i6640, 'sharedMaterial')
  var i6643 = i6641[23]
  var i6642 = []
  for(var i = 0; i < i6643.length; i += 2) {
  request.r(i6643[i + 0], i6643[i + 1], 2, i6642, '')
  }
  i6640.sharedMaterials = i6642
  i6640.receiveShadows = !!i6641[24]
  i6640.shadowCastingMode = i6641[25]
  i6640.sortingLayerID = i6641[26]
  i6640.sortingOrder = i6641[27]
  i6640.lightmapIndex = i6641[28]
  i6640.lightmapSceneIndex = i6641[29]
  i6640.lightmapScaleOffset = new pc.Vec4( i6641[30], i6641[31], i6641[32], i6641[33] )
  i6640.lightProbeUsage = i6641[34]
  i6640.reflectionProbeUsage = i6641[35]
  return i6640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6647 = data
  i6646.name = i6647[0]
  i6646.tagId = i6647[1]
  i6646.enabled = !!i6647[2]
  i6646.isStatic = !!i6647[3]
  i6646.layer = i6647[4]
  return i6646
}

Deserializers["Level1_Hair_Playable"] = function (request, data, root) {
  var i6648 = root || request.c( 'Level1_Hair_Playable' )
  var i6649 = data
  request.r(i6649[0], i6649[1], 0, i6648, 'wetCloth')
  request.r(i6649[2], i6649[3], 0, i6648, 'waterDripingParticle')
  i6648.ZoomStep1 = request.d('ZoomPos', i6649[4], i6648.ZoomStep1)
  var i6651 = i6649[5]
  var i6650 = []
  for(var i = 0; i < i6651.length; i += 2) {
  request.r(i6651[i + 0], i6651[i + 1], 2, i6650, '')
  }
  i6648.AllTrash = i6650
  var i6653 = i6649[6]
  var i6652 = []
  for(var i = 0; i < i6653.length; i += 2) {
  request.r(i6653[i + 0], i6653[i + 1], 2, i6652, '')
  }
  i6648.AllTrashOutlines = i6652
  i6648.trashDone = !!i6649[7]
  i6648.trashThrown = i6649[8]
  i6648.trashTotal = i6649[9]
  request.r(i6649[10], i6649[11], 0, i6648, 'bd_Sticky')
  i6648.ZoomStep2 = request.d('ZoomPos', i6649[12], i6648.ZoomStep2)
  request.r(i6649[13], i6649[14], 0, i6648, 'ToolStep2')
  request.r(i6649[15], i6649[16], 0, i6648, 'camFollowStep2')
  var i6655 = i6649[17]
  var i6654 = []
  for(var i = 0; i < i6655.length; i += 2) {
  request.r(i6655[i + 0], i6655[i + 1], 2, i6654, '')
  }
  i6648.AllBugOutlines = i6654
  i6648.ZoomStep2b = request.d('ZoomPos', i6649[18], i6648.ZoomStep2b)
  request.r(i6649[19], i6649[20], 0, i6648, 'ToolStep2b')
  request.r(i6649[21], i6649[22], 0, i6648, 'camFollowStep2b')
  request.r(i6649[23], i6649[24], 0, i6648, 'dustColStep2')
  request.r(i6649[25], i6649[26], 0, i6648, 'handIndicationShower')
  request.r(i6649[27], i6649[28], 0, i6648, 'hairDirtyStatic')
  request.r(i6649[29], i6649[30], 0, i6648, 'hairDirtyWetStatic')
  request.r(i6649[31], i6649[32], 0, i6648, 'dryHairAnim')
  i6648.ZoomStep3 = request.d('ZoomPos', i6649[33], i6648.ZoomStep3)
  request.r(i6649[34], i6649[35], 0, i6648, 'ShampooOnHand')
  request.r(i6649[36], i6649[37], 0, i6648, 'ShampooInHandCap')
  request.r(i6649[38], i6649[39], 0, i6648, 'ToolStep3')
  request.r(i6649[40], i6649[41], 0, i6648, 'shampooPatch')
  request.r(i6649[42], i6649[43], 0, i6648, 'handSpriteRend')
  request.r(i6649[44], i6649[45], 0, i6648, 'bottleDefault')
  request.r(i6649[46], i6649[47], 0, i6648, 'bottlePressed')
  request.r(i6649[48], i6649[49], 0, i6648, 'shampooDropping')
  request.r(i6649[50], i6649[51], 0, i6648, 'bottleOpenSfx')
  request.r(i6649[52], i6649[53], 0, i6648, 'bottleSqueezSfx')
  request.r(i6649[54], i6649[55], 0, i6648, 'bottlePourSfx')
  i6648.ZoomStep4 = request.d('ZoomPos', i6649[56], i6648.ZoomStep4)
  request.r(i6649[57], i6649[58], 0, i6648, 'ToolStep4')
  request.r(i6649[59], i6649[60], 0, i6648, 'camFollowStep4')
  request.r(i6649[61], i6649[62], 0, i6648, 'foamLight_E')
  request.r(i6649[63], i6649[64], 0, i6648, 'foam2_E')
  request.r(i6649[65], i6649[66], 0, i6648, 'foamCol')
  request.r(i6649[67], i6649[68], 0, i6648, 'handIndicationHands')
  request.r(i6649[69], i6649[70], 0, i6648, 'progressStep4')
  i6648.ZoomStep5a = request.d('ZoomPos', i6649[71], i6648.ZoomStep5a)
  i6648.ZoomStep5b = request.d('ZoomPos', i6649[72], i6648.ZoomStep5b)
  request.r(i6649[73], i6649[74], 0, i6648, 'ShowerDamaged')
  request.r(i6649[75], i6649[76], 0, i6648, 'ShowerDamaged_Drag')
  request.r(i6649[77], i6649[78], 0, i6648, 'ShowerBackDMG')
  request.r(i6649[79], i6649[80], 0, i6648, 'ShowerInner_dirty')
  request.r(i6649[81], i6649[82], 0, i6648, 'ShowerInner_Target')
  request.r(i6649[83], i6649[84], 0, i6648, 'ShowerFrontDMG')
  request.r(i6649[85], i6649[86], 0, i6648, 'OpenShowerIndication')
  request.r(i6649[87], i6649[88], 0, i6648, 'CloseShowerIndication')
  request.r(i6649[89], i6649[90], 0, i6648, 'showrOpenInput')
  request.r(i6649[91], i6649[92], 0, i6648, 'showerDisk')
  request.r(i6649[93], i6649[94], 0, i6648, 'showerFixReverseAnimDrag')
  request.r(i6649[95], i6649[96], 0, i6648, 'showerDragDamage')
  request.r(i6649[97], i6649[98], 0, i6648, 'ToolStep5Rev')
  request.r(i6649[99], i6649[100], 0, i6648, 'handIndicationShowerPlace')
  i6648.ZoomStep5 = request.d('ZoomPos', i6649[101], i6648.ZoomStep5)
  request.r(i6649[102], i6649[103], 0, i6648, 'ToolStep5')
  request.r(i6649[104], i6649[105], 0, i6648, 'ToolStep5Placeable')
  request.r(i6649[106], i6649[107], 0, i6648, 'toolStep5Progress')
  request.r(i6649[108], i6649[109], 0, i6648, 'toolStep5ProgressHelp')
  request.r(i6649[110], i6649[111], 0, i6648, 'camFollowStep5')
  request.r(i6649[112], i6649[113], 0, i6648, 'showerRender')
  request.r(i6649[114], i6649[115], 0, i6648, 'showerDirty')
  request.r(i6649[116], i6649[117], 0, i6648, 'showerClean')
  request.r(i6649[118], i6649[119], 0, i6648, 'waterShotParticle')
  request.r(i6649[120], i6649[121], 0, i6648, 'showerProblemClip')
  request.r(i6649[122], i6649[123], 0, i6648, 'FixErrorClip')
  i6648.ZoomStep6 = request.d('ZoomPos', i6649[124], i6648.ZoomStep6)
  request.r(i6649[125], i6649[126], 0, i6648, 'ToolStep6')
  request.r(i6649[127], i6649[128], 0, i6648, 'camFollowStep6')
  request.r(i6649[129], i6649[130], 0, i6648, 'wetHairs_E')
  request.r(i6649[131], i6649[132], 0, i6648, 'hairDryFade')
  i6648.ZoomStep7 = request.d('ZoomPos', i6649[133], i6648.ZoomStep7)
  request.r(i6649[134], i6649[135], 0, i6648, 'ToolStep7')
  request.r(i6649[136], i6649[137], 0, i6648, 'camFollowStep7')
  request.r(i6649[138], i6649[139], 0, i6648, 'dryHairs_E')
  request.r(i6649[140], i6649[141], 0, i6648, 'dryCombed_BG')
  request.r(i6649[142], i6649[143], 0, i6648, 'brushController')
  request.r(i6649[144], i6649[145], 0, i6648, 'handIndicationBrush')
  i6648.levelName = i6649[146]
  i6648.levelReward = i6649[147]
  request.r(i6649[148], i6649[149], 0, i6648, 'LevelIcon')
  request.r(i6649[150], i6649[151], 0, i6648, 'Level_BG')
  var i6657 = i6649[152]
  var i6656 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i6657.length; i += 2) {
  request.r(i6657[i + 0], i6657[i + 1], 1, i6656, '')
  }
  i6648.ToolIcons = i6656
  var i6659 = i6649[153]
  var i6658 = []
  for(var i = 0; i < i6659.length; i += 2) {
  request.r(i6659[i + 0], i6659[i + 1], 2, i6658, '')
  }
  i6648.AllDrags = i6658
  var i6661 = i6649[154]
  var i6660 = []
  for(var i = 0; i < i6661.length; i += 2) {
  request.r(i6661[i + 0], i6661[i + 1], 2, i6660, '')
  }
  i6648.AllSources = i6660
  var i6663 = i6649[155]
  var i6662 = []
  for(var i = 0; i < i6663.length; i += 2) {
  request.r(i6663[i + 0], i6663[i + 1], 2, i6662, '')
  }
  i6648.AllScratches = i6662
  i6648.stepsDone = i6649[156]
  i6648.levelNo = i6649[157]
  i6648.partNo = i6649[158]
  request.r(i6649[159], i6649[160], 0, i6648, 'bubbleGum')
  return i6648
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i6664 = root || request.c( 'ZoomPos' )
  var i6665 = data
  i6664.CameraPos = new pc.Vec3( i6665[0], i6665[1], i6665[2] )
  i6664.CameraFOV = i6665[3]
  return i6664
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i6676 = root || request.c( 'PlayableCTA' )
  var i6677 = data
  i6676.trigger = i6677[0]
  i6676.afterSeconds = i6677[1]
  i6676.afterTaps = i6677[2]
  request.r(i6677[3], i6677[4], 0, i6676, 'scratchProgress')
  i6676.scratchIndex = i6677[5]
  i6676.progressThreshold = i6677[6]
  request.r(i6677[7], i6677[8], 0, i6676, 'watchedTool')
  i6676.blockInputOnFire = !!i6677[9]
  i6676.refireOnEveryTap = !!i6677[10]
  i6676.refireDelay = i6677[11]
  i6676.showEndCard = !!i6677[12]
  request.r(i6677[13], i6677[14], 0, i6676, 'endCard')
  i6676.showEndCardOnProgressTrigger = !!i6677[15]
  i6676.showEndCardOnToolAppearTrigger = !!i6677[16]
  i6676.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i6677[17], i6676.onCtaFired)
  i6676.logWhenFired = !!i6677[18]
  return i6676
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i6678 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i6679 = data
  i6678.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6679[0], i6678.m_PersistentCalls)
  return i6678
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6680 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6681 = data
  var i6683 = i6681[0]
  var i6682 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6683.length; i += 1) {
    i6682.add(request.d('UnityEngine.Events.PersistentCall', i6683[i + 0]));
  }
  i6680.m_Calls = i6682
  return i6680
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6686 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6687 = data
  request.r(i6687[0], i6687[1], 0, i6686, 'm_Target')
  i6686.m_TargetAssemblyTypeName = i6687[2]
  i6686.m_MethodName = i6687[3]
  i6686.m_Mode = i6687[4]
  i6686.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6687[5], i6686.m_Arguments)
  i6686.m_CallState = i6687[6]
  return i6686
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i6688 = root || request.c( 'PlayableFadeCoverSettings' )
  var i6689 = data
  i6688.revealDelay = i6689[0]
  i6688.revealDuration = i6689[1]
  return i6688
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i6690 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i6691 = data
  request.r(i6691[0], i6691[1], 0, i6690, 'MainCamera')
  i6690.RenderType = i6691[2]
  request.r(i6691[3], i6691[4], 0, i6690, 'ScratchSurfaceSprite')
  i6690.ScratchSurfaceSpriteHasAlpha = !!i6691[5]
  i6690.MaskProgressCutOffValue = i6691[6]
  request.r(i6691[7], i6691[8], 0, i6690, 'EraseTexture')
  i6690.EraseTextureScale = new pc.Vec2( i6691[9], i6691[10] )
  i6690.InputEnabled = !!i6691[11]
  request.r(i6691[12], i6691[13], 0, i6690, 'Card')
  i6690.Mode = i6691[14]
  request.r(i6691[15], i6691[16], 0, i6690, 'Progress')
  request.r(i6691[17], i6691[18], 0, i6690, 'MeshCard')
  request.r(i6691[19], i6691[20], 0, i6690, 'SpriteCard')
  request.r(i6691[21], i6691[22], 0, i6690, 'ImageCard')
  request.r(i6691[23], i6691[24], 0, i6690, 'MaskShader')
  request.r(i6691[25], i6691[26], 0, i6690, 'BrushShader')
  request.r(i6691[27], i6691[28], 0, i6690, 'MaskProgressShader')
  request.r(i6691[29], i6691[30], 0, i6690, 'MaskProgressCutOffShader')
  return i6690
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i6692 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i6693 = data
  request.r(i6693[0], i6693[1], 0, i6692, 'MainCamera')
  request.r(i6693[2], i6693[3], 0, i6692, 'Surface')
  i6692.RenderTextureQuality = i6693[4]
  request.r(i6693[5], i6693[6], 0, i6692, 'Eraser')
  request.r(i6693[7], i6693[8], 0, i6692, 'Progress')
  request.r(i6693[9], i6693[10], 0, i6692, 'ScratchSurface')
  request.r(i6693[11], i6693[12], 0, i6692, 'RenderTexture')
  i6692.BrushScale = new pc.Vec2( i6693[13], i6693[14] )
  request.r(i6693[15], i6693[16], 0, i6692, 'ToolTip')
  i6692.InputEnabled = !!i6693[17]
  i6692.IsScratching = !!i6693[18]
  i6692.useChangingScale = !!i6693[19]
  i6692.useGivenBrushScale = !!i6693[20]
  i6692.canSpreadMask = !!i6693[21]
  i6692.shouldPaintHoles = !!i6693[22]
  i6692.canRotateTip = !!i6693[23]
  i6692._mode = i6693[24]
  return i6692
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i6694 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i6695 = data
  request.r(i6695[0], i6695[1], 0, i6694, 'Card')
  i6694.currentProgress = i6695[2]
  return i6694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i6696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i6697 = data
  request.r(i6697[0], i6697[1], 0, i6696, 'animatorController')
  request.r(i6697[2], i6697[3], 0, i6696, 'avatar')
  i6696.updateMode = i6697[4]
  i6696.hasTransformHierarchy = !!i6697[5]
  i6696.applyRootMotion = !!i6697[6]
  var i6699 = i6697[7]
  var i6698 = []
  for(var i = 0; i < i6699.length; i += 2) {
  request.r(i6699[i + 0], i6699[i + 1], 2, i6698, '')
  }
  i6696.humanBones = i6698
  i6696.enabled = !!i6697[8]
  return i6696
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i6702 = root || request.c( 'BD_AnimationHelper' )
  var i6703 = data
  i6702.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i6703[0], i6702.OnAnimationComplete)
  request.r(i6703[1], i6703[2], 0, i6702, 'sfxClip')
  return i6702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i6704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i6705 = data
  i6704.color = new pc.Color(i6705[0], i6705[1], i6705[2], i6705[3])
  request.r(i6705[4], i6705[5], 0, i6704, 'sprite')
  i6704.flipX = !!i6705[6]
  i6704.flipY = !!i6705[7]
  i6704.drawMode = i6705[8]
  i6704.size = new pc.Vec2( i6705[9], i6705[10] )
  i6704.tileMode = i6705[11]
  i6704.adaptiveModeThreshold = i6705[12]
  i6704.maskInteraction = i6705[13]
  i6704.spriteSortPoint = i6705[14]
  i6704.enabled = !!i6705[15]
  request.r(i6705[16], i6705[17], 0, i6704, 'sharedMaterial')
  var i6707 = i6705[18]
  var i6706 = []
  for(var i = 0; i < i6707.length; i += 2) {
  request.r(i6707[i + 0], i6707[i + 1], 2, i6706, '')
  }
  i6704.sharedMaterials = i6706
  i6704.receiveShadows = !!i6705[19]
  i6704.shadowCastingMode = i6705[20]
  i6704.sortingLayerID = i6705[21]
  i6704.sortingOrder = i6705[22]
  i6704.lightmapIndex = i6705[23]
  i6704.lightmapSceneIndex = i6705[24]
  i6704.lightmapScaleOffset = new pc.Vec4( i6705[25], i6705[26], i6705[27], i6705[28] )
  i6704.lightProbeUsage = i6705[29]
  i6704.reflectionProbeUsage = i6705[30]
  return i6704
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i6708 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i6709 = data
  request.r(i6709[0], i6709[1], 0, i6708, 'm_RootBone')
  var i6711 = i6709[2]
  var i6710 = []
  for(var i = 0; i < i6711.length; i += 2) {
  request.r(i6711[i + 0], i6711[i + 1], 2, i6710, '')
  }
  i6708.m_BoneTransforms = i6710
  i6708.m_AlwaysUpdate = !!i6709[3]
  i6708.m_AutoRebind = !!i6709[4]
  return i6708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i6712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i6713 = data
  var i6715 = i6713[0]
  var i6714 = []
  for(var i = 0; i < i6715.length; i += 3) {
    i6714.push( new pc.Vec3( i6715[i + 0], i6715[i + 1], i6715[i + 2] ) );
  }
  i6712.positions = i6714
  i6712.positionCount = i6713[1]
  i6712.time = i6713[2]
  i6712.startWidth = i6713[3]
  i6712.endWidth = i6713[4]
  i6712.widthMultiplier = i6713[5]
  i6712.autodestruct = !!i6713[6]
  i6712.emitting = !!i6713[7]
  i6712.numCornerVertices = i6713[8]
  i6712.numCapVertices = i6713[9]
  i6712.minVertexDistance = i6713[10]
  i6712.colorGradient = i6713[11] ? new pc.ColorGradient(i6713[11][0], i6713[11][1], i6713[11][2]) : null
  i6712.startColor = new pc.Color(i6713[12], i6713[13], i6713[14], i6713[15])
  i6712.endColor = new pc.Color(i6713[16], i6713[17], i6713[18], i6713[19])
  i6712.generateLightingData = !!i6713[20]
  i6712.textureMode = i6713[21]
  i6712.alignment = i6713[22]
  i6712.widthCurve = new pc.AnimationCurve( { keys_flow: i6713[23] } )
  i6712.enabled = !!i6713[24]
  request.r(i6713[25], i6713[26], 0, i6712, 'sharedMaterial')
  var i6717 = i6713[27]
  var i6716 = []
  for(var i = 0; i < i6717.length; i += 2) {
  request.r(i6717[i + 0], i6717[i + 1], 2, i6716, '')
  }
  i6712.sharedMaterials = i6716
  i6712.receiveShadows = !!i6713[28]
  i6712.shadowCastingMode = i6713[29]
  i6712.sortingLayerID = i6713[30]
  i6712.sortingOrder = i6713[31]
  i6712.lightmapIndex = i6713[32]
  i6712.lightmapSceneIndex = i6713[33]
  i6712.lightmapScaleOffset = new pc.Vec4( i6713[34], i6713[35], i6713[36], i6713[37] )
  i6712.lightProbeUsage = i6713[38]
  i6712.reflectionProbeUsage = i6713[39]
  return i6712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i6720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i6721 = data
  i6720.textureMode = i6721[0]
  i6720.alignment = i6721[1]
  i6720.widthCurve = new pc.AnimationCurve( { keys_flow: i6721[2] } )
  i6720.colorGradient = i6721[3] ? new pc.ColorGradient(i6721[3][0], i6721[3][1], i6721[3][2]) : null
  var i6723 = i6721[4]
  var i6722 = []
  for(var i = 0; i < i6723.length; i += 3) {
    i6722.push( new pc.Vec3( i6723[i + 0], i6723[i + 1], i6723[i + 2] ) );
  }
  i6720.positions = i6722
  i6720.positionCount = i6721[5]
  i6720.widthMultiplier = i6721[6]
  i6720.startWidth = i6721[7]
  i6720.endWidth = i6721[8]
  i6720.numCornerVertices = i6721[9]
  i6720.numCapVertices = i6721[10]
  i6720.useWorldSpace = !!i6721[11]
  i6720.loop = !!i6721[12]
  i6720.startColor = new pc.Color(i6721[13], i6721[14], i6721[15], i6721[16])
  i6720.endColor = new pc.Color(i6721[17], i6721[18], i6721[19], i6721[20])
  i6720.generateLightingData = !!i6721[21]
  i6720.enabled = !!i6721[22]
  request.r(i6721[23], i6721[24], 0, i6720, 'sharedMaterial')
  var i6725 = i6721[25]
  var i6724 = []
  for(var i = 0; i < i6725.length; i += 2) {
  request.r(i6725[i + 0], i6725[i + 1], 2, i6724, '')
  }
  i6720.sharedMaterials = i6724
  i6720.receiveShadows = !!i6721[26]
  i6720.shadowCastingMode = i6721[27]
  i6720.sortingLayerID = i6721[28]
  i6720.sortingOrder = i6721[29]
  i6720.lightmapIndex = i6721[30]
  i6720.lightmapSceneIndex = i6721[31]
  i6720.lightmapScaleOffset = new pc.Vec4( i6721[32], i6721[33], i6721[34], i6721[35] )
  i6720.lightProbeUsage = i6721[36]
  i6720.reflectionProbeUsage = i6721[37]
  return i6720
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i6726 = root || request.c( 'StaticFixedPipe' )
  var i6727 = data
  request.r(i6727[0], i6727[1], 0, i6726, 'lineRenderer')
  request.r(i6727[2], i6727[3], 0, i6726, 'toolTransform')
  request.r(i6727[4], i6727[5], 0, i6726, 'toolDirectionPoint')
  request.r(i6727[6], i6727[7], 0, i6726, 'fixedEndPoint')
  i6726.segmentCount = i6727[8]
  i6726.totalLength = i6727[9]
  i6726.constraintIterations = i6727[10]
  i6726.gravity = new pc.Vec3( i6727[11], i6727[12], i6727[13] )
  i6726.pipeWidth = i6727[14]
  return i6726
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i6728 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i6729 = data
  i6728.targetIsSelf = !!i6729[0]
  request.r(i6729[1], i6729[2], 0, i6728, 'targetGO')
  i6728.tweenTargetIsTargetGO = !!i6729[3]
  i6728.delay = i6729[4]
  i6728.duration = i6729[5]
  i6728.easeType = i6729[6]
  i6728.easeCurve = new pc.AnimationCurve( { keys_flow: i6729[7] } )
  i6728.loopType = i6729[8]
  i6728.loops = i6729[9]
  i6728.id = i6729[10]
  i6728.isRelative = !!i6729[11]
  i6728.isFrom = !!i6729[12]
  i6728.isIndependentUpdate = !!i6729[13]
  i6728.autoKill = !!i6729[14]
  i6728.autoGenerate = !!i6729[15]
  i6728.isActive = !!i6729[16]
  i6728.isValid = !!i6729[17]
  request.r(i6729[18], i6729[19], 0, i6728, 'target')
  i6728.animationType = i6729[20]
  i6728.targetType = i6729[21]
  i6728.forcedTargetType = i6729[22]
  i6728.autoPlay = !!i6729[23]
  i6728.useTargetAsV3 = !!i6729[24]
  i6728.endValueFloat = i6729[25]
  i6728.endValueV3 = new pc.Vec3( i6729[26], i6729[27], i6729[28] )
  i6728.endValueV2 = new pc.Vec2( i6729[29], i6729[30] )
  i6728.endValueColor = new pc.Color(i6729[31], i6729[32], i6729[33], i6729[34])
  i6728.endValueString = i6729[35]
  i6728.endValueRect = UnityEngine.Rect.MinMaxRect(i6729[36], i6729[37], i6729[38], i6729[39])
  request.r(i6729[40], i6729[41], 0, i6728, 'endValueTransform')
  i6728.optionalBool0 = !!i6729[42]
  i6728.optionalBool1 = !!i6729[43]
  i6728.optionalFloat0 = i6729[44]
  i6728.optionalInt0 = i6729[45]
  i6728.optionalRotationMode = i6729[46]
  i6728.optionalScrambleMode = i6729[47]
  i6728.optionalShakeRandomnessMode = i6729[48]
  i6728.optionalString = i6729[49]
  i6728.updateType = i6729[50]
  i6728.isSpeedBased = !!i6729[51]
  i6728.hasOnStart = !!i6729[52]
  i6728.hasOnPlay = !!i6729[53]
  i6728.hasOnUpdate = !!i6729[54]
  i6728.hasOnStepComplete = !!i6729[55]
  i6728.hasOnComplete = !!i6729[56]
  i6728.hasOnTweenCreated = !!i6729[57]
  i6728.hasOnRewind = !!i6729[58]
  i6728.onStart = request.d('UnityEngine.Events.UnityEvent', i6729[59], i6728.onStart)
  i6728.onPlay = request.d('UnityEngine.Events.UnityEvent', i6729[60], i6728.onPlay)
  i6728.onUpdate = request.d('UnityEngine.Events.UnityEvent', i6729[61], i6728.onUpdate)
  i6728.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i6729[62], i6728.onStepComplete)
  i6728.onComplete = request.d('UnityEngine.Events.UnityEvent', i6729[63], i6728.onComplete)
  i6728.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i6729[64], i6728.onTweenCreated)
  i6728.onRewind = request.d('UnityEngine.Events.UnityEvent', i6729[65], i6728.onRewind)
  return i6728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i6730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i6731 = data
  i6730.usedByComposite = !!i6731[0]
  i6730.autoTiling = !!i6731[1]
  i6730.size = new pc.Vec2( i6731[2], i6731[3] )
  i6730.edgeRadius = i6731[4]
  i6730.enabled = !!i6731[5]
  i6730.isTrigger = !!i6731[6]
  i6730.usedByEffector = !!i6731[7]
  i6730.density = i6731[8]
  i6730.offset = new pc.Vec2( i6731[9], i6731[10] )
  request.r(i6731[11], i6731[12], 0, i6730, 'material')
  return i6730
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i6732 = root || request.c( 'BasicDrag' )
  var i6733 = data
  i6732.canDrag = !!i6733[0]
  i6732.dragByDelta = !!i6733[1]
  i6732.isDragging = !!i6733[2]
  i6732.moveWithPointer = !!i6733[3]
  i6732.canReturn = !!i6733[4]
  i6732.jumpOnReturn = !!i6733[5]
  i6732.returnTime = i6733[6]
  i6732.Tool_Offset = new pc.Vec3( i6733[7], i6733[8], i6733[9] )
  i6732.canScaleIncrease = !!i6733[10]
  i6732.Self_ScaleNew = new pc.Vec3( i6733[11], i6733[12], i6733[13] )
  i6732.canRotateOnPick = !!i6733[14]
  i6732.startRot = new pc.Vec3( i6733[15], i6733[16], i6733[17] )
  i6732.newRot = new pc.Vec3( i6733[18], i6733[19], i6733[20] )
  var i6735 = i6733[21]
  var i6734 = []
  for(var i = 0; i < i6735.length; i += 2) {
  request.r(i6735[i + 0], i6735[i + 1], 2, i6734, '')
  }
  i6732.childSprite = i6734
  request.r(i6733[22], i6733[23], 0, i6732, 'ToolSelectClip')
  request.r(i6733[24], i6733[25], 0, i6732, 'ToolLoopClip')
  request.r(i6733[26], i6733[27], 0, i6732, 'thisParticles')
  i6732.onDragparticle = !!i6733[28]
  request.r(i6733[29], i6733[30], 0, i6732, 'dragParticles')
  request.r(i6733[31], i6733[32], 0, i6732, 'anim')
  i6732.startPos = new pc.Vec3( i6733[33], i6733[34], i6733[35] )
  i6732.startScale = new pc.Vec3( i6733[36], i6733[37], i6733[38] )
  i6732.Vibration = !!i6733[39]
  i6732.isPlacedCannotMove = !!i6733[40]
  i6732.isObjectMovingWhileDragging = !!i6733[41]
  i6732.OnMouseDownEvent = request.d('System.Action', i6733[42], i6732.OnMouseDownEvent)
  i6732.OnMouseUpEvent = request.d('System.Action', i6733[43], i6732.OnMouseUpEvent)
  i6732.ProgStartEvent = request.d('System.Action', i6733[44], i6732.ProgStartEvent)
  i6732.ProgEndEvent = request.d('System.Action', i6733[45], i6732.ProgEndEvent)
  i6732.canCallMouseUpWhenGamePaused = !!i6733[46]
  i6732.ClampX_L = i6733[47]
  i6732.ClampX_H = i6733[48]
  i6732.ClampY_L = i6733[49]
  i6732.ClampY_H = i6733[50]
  i6732.startOrder = i6733[51]
  i6732.dontResetItIsInCollider = !!i6733[52]
  request.r(i6733[53], i6733[54], 0, i6732, 'thisCollider')
  request.r(i6733[55], i6733[56], 0, i6732, 'thisSR')
  i6732.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i6733[57], i6732.OnMouseDownEventIndependentFromCanDrag)
  return i6732
}

Deserializers["System.Action"] = function (request, data, root) {
  var i6738 = root || request.c( 'System.Action' )
  var i6739 = data
  return i6738
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i6740 = root || request.c( 'BD_Clamp' )
  var i6741 = data
  i6740.ClampX_L = i6741[0]
  i6740.ClampX_H = i6741[1]
  i6740.ClampY_L = i6741[2]
  i6740.ClampY_H = i6741[3]
  return i6740
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i6742 = root || request.c( 'OutlinePulse' )
  var i6743 = data
  i6742.smallThickness = i6743[0]
  i6742.largeThickness = i6743[1]
  i6742.transitionSpeed = i6743[2]
  i6742.animationSpeed = i6743[3]
  i6742.isThickOutline = !!i6743[4]
  i6742.animate = !!i6743[5]
  i6742.hideSpriteOnly = !!i6743[6]
  return i6742
}

Deserializers["BD_ItemPick"] = function (request, data, root) {
  var i6744 = root || request.c( 'BD_ItemPick' )
  var i6745 = data
  request.r(i6745[0], i6745[1], 0, i6744, 'Tool')
  request.r(i6745[2], i6745[3], 0, i6744, 'Outline')
  request.r(i6745[4], i6745[5], 0, i6744, 'itemRend')
  request.r(i6745[6], i6745[7], 0, i6744, 'pick_sp')
  i6744.OnTap = request.d('UnityEngine.Events.UnityEvent', i6745[8], i6744.OnTap)
  i6744.OnComplete = request.d('UnityEngine.Events.UnityEvent', i6745[9], i6744.OnComplete)
  request.r(i6745[10], i6745[11], 0, i6744, 'Clip')
  i6744.minDragDistance = i6745[12]
  i6744.isTaped = !!i6745[13]
  return i6744
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i6746 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i6747 = data
  request.r(i6747[0], i6747[1], 0, i6746, 'm_ObjectArgument')
  i6746.m_ObjectArgumentAssemblyTypeName = i6747[2]
  i6746.m_IntArgument = i6747[3]
  i6746.m_FloatArgument = i6747[4]
  i6746.m_StringArgument = i6747[5]
  i6746.m_BoolArgument = !!i6747[6]
  return i6746
}

Deserializers["BD_Sticky"] = function (request, data, root) {
  var i6748 = root || request.c( 'BD_Sticky' )
  var i6749 = data
  request.r(i6749[0], i6749[1], 0, i6748, 'anim')
  i6748.isVerticlePull = !!i6749[2]
  request.r(i6749[3], i6749[4], 0, i6748, 'pickSfx')
  request.r(i6749[5], i6749[6], 0, i6748, 'pulledClip')
  request.r(i6749[7], i6749[8], 0, i6748, 'pullSource')
  i6748.OnComplete = request.d('UnityEngine.Events.UnityEvent', i6749[9], i6748.OnComplete)
  i6748.changeLayerPick = !!i6749[10]
  request.r(i6749[11], i6749[12], 0, i6748, 'sp_rendr')
  i6748.def_layerNo = i6749[13]
  i6748.tar_LayerNo = i6749[14]
  i6748.direction = i6749[15]
  i6748.dragThreshold = i6749[16]
  i6748.pullDistanceToFree = i6749[17]
  i6748.returnSpeed = i6749[18]
  i6748.resistance = i6749[19]
  var i6751 = i6749[20]
  var i6750 = []
  for(var i = 0; i < i6751.length; i += 2) {
  request.r(i6751[i + 0], i6751[i + 1], 2, i6750, '')
  }
  i6748.StartBones = i6750
  var i6753 = i6749[21]
  var i6752 = []
  for(var i = 0; i < i6753.length; i += 2) {
  request.r(i6753[i + 0], i6753[i + 1], 2, i6752, '')
  }
  i6748.EndBones = i6752
  request.r(i6749[22], i6749[23], 0, i6748, 'BonePivot')
  return i6748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i6754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i6755 = data
  request.r(i6755[0], i6755[1], 0, i6754, 'clip')
  request.r(i6755[2], i6755[3], 0, i6754, 'outputAudioMixerGroup')
  i6754.playOnAwake = !!i6755[4]
  i6754.loop = !!i6755[5]
  i6754.time = i6755[6]
  i6754.volume = i6755[7]
  i6754.pitch = i6755[8]
  i6754.enabled = !!i6755[9]
  return i6754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i6756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i6757 = data
  i6756.radius = i6757[0]
  i6756.enabled = !!i6757[1]
  i6756.isTrigger = !!i6757[2]
  i6756.usedByEffector = !!i6757[3]
  i6756.density = i6757[4]
  i6756.offset = new pc.Vec2( i6757[5], i6757[6] )
  request.r(i6757[7], i6757[8], 0, i6756, 'material')
  return i6756
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i6758 = root || request.c( 'PlayParticlesOnCollision' )
  var i6759 = data
  request.r(i6759[0], i6759[1], 0, i6758, 'Target')
  request.r(i6759[2], i6759[3], 0, i6758, 'ParticlePrefab')
  i6758.destroyIt = !!i6759[4]
  i6758.stayAtPlace = !!i6759[5]
  i6758.disableOnCollision = !!i6759[6]
  i6758.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i6759[7], i6758.OnCollisionEvent)
  return i6758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i6760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i6761 = data
  i6760.frontSortingLayerID = i6761[0]
  i6760.frontSortingOrder = i6761[1]
  i6760.backSortingLayerID = i6761[2]
  i6760.backSortingOrder = i6761[3]
  i6760.alphaCutoff = i6761[4]
  request.r(i6761[5], i6761[6], 0, i6760, 'sprite')
  i6760.tileMode = i6761[7]
  i6760.isCustomRangeActive = !!i6761[8]
  i6760.spriteSortPoint = i6761[9]
  i6760.enabled = !!i6761[10]
  request.r(i6761[11], i6761[12], 0, i6760, 'sharedMaterial')
  var i6763 = i6761[13]
  var i6762 = []
  for(var i = 0; i < i6763.length; i += 2) {
  request.r(i6763[i + 0], i6763[i + 1], 2, i6762, '')
  }
  i6760.sharedMaterials = i6762
  i6760.receiveShadows = !!i6761[14]
  i6760.shadowCastingMode = i6761[15]
  i6760.sortingLayerID = i6761[16]
  i6760.sortingOrder = i6761[17]
  i6760.lightmapIndex = i6761[18]
  i6760.lightmapSceneIndex = i6761[19]
  i6760.lightmapScaleOffset = new pc.Vec4( i6761[20], i6761[21], i6761[22], i6761[23] )
  i6760.lightProbeUsage = i6761[24]
  i6760.reflectionProbeUsage = i6761[25]
  return i6760
}

Deserializers["PlayTweenOnHit"] = function (request, data, root) {
  var i6764 = root || request.c( 'PlayTweenOnHit' )
  var i6765 = data
  i6764.isContinueous = !!i6765[0]
  request.r(i6765[1], i6765[2], 0, i6764, 'tool')
  var i6767 = i6765[3]
  var i6766 = []
  for(var i = 0; i < i6767.length; i += 2) {
  request.r(i6767[i + 0], i6767[i + 1], 2, i6766, '')
  }
  i6764.animsToPlay = i6766
  request.r(i6765[4], i6765[5], 0, i6764, 'tipTarget')
  return i6764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i6770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i6771 = data
  i6770.usedByComposite = !!i6771[0]
  i6770.autoTiling = !!i6771[1]
  var i6773 = i6771[2]
  var i6772 = []
  for(var i = 0; i < i6773.length; i += 1) {
  var i6775 = i6773[i + 0]
  var i6774 = []
  for(var i = 0; i < i6775.length; i += 2) {
    i6774.push( new pc.Vec2( i6775[i + 0], i6775[i + 1] ) );
  }
    i6772.push( i6774 );
  }
  i6770.points = i6772
  i6770.enabled = !!i6771[3]
  i6770.isTrigger = !!i6771[4]
  i6770.usedByEffector = !!i6771[5]
  i6770.density = i6771[6]
  i6770.offset = new pc.Vec2( i6771[7], i6771[8] )
  request.r(i6771[9], i6771[10], 0, i6770, 'material')
  return i6770
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i6782 = root || request.c( 'PlaySfxOnCollision' )
  var i6783 = data
  request.r(i6783[0], i6783[1], 0, i6782, 'Tip')
  i6782.Mode = i6783[2]
  request.r(i6783[3], i6783[4], 0, i6782, 'DragInput')
  request.r(i6783[5], i6783[6], 0, i6782, 'Source')
  i6782.startVol = i6783[7]
  i6782.targetVol = i6783[8]
  i6782.duration = i6783[9]
  request.r(i6783[10], i6783[11], 0, i6782, 'Particles')
  i6782.isDone = !!i6783[12]
  i6782.isInArea = !!i6783[13]
  i6782.isPlaying = !!i6783[14]
  return i6782
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i6784 = root || request.c( 'InteractableBones' )
  var i6785 = data
  request.r(i6785[0], i6785[1], 0, i6784, 'Tip')
  i6784.MoveAmount = i6785[2]
  i6784.MoveSpeed = i6785[3]
  i6784.ShakeSpeed = i6785[4]
  i6784.MovementThreshold = i6785[5]
  i6784.MoveX = !!i6785[6]
  i6784.MoveY = !!i6785[7]
  return i6784
}

Deserializers["WaypointFollower"] = function (request, data, root) {
  var i6786 = root || request.c( 'WaypointFollower' )
  var i6787 = data
  var i6789 = i6787[0]
  var i6788 = []
  for(var i = 0; i < i6789.length; i += 2) {
  request.r(i6789[i + 0], i6789[i + 1], 2, i6788, '')
  }
  i6786.waypoints = i6788
  i6786.speed = i6787[1]
  i6786.rotationSpeed = i6787[2]
  i6786.loop = !!i6787[3]
  i6786.reverse = !!i6787[4]
  i6786.canMove = !!i6787[5]
  request.r(i6787[6], i6787[7], 0, i6786, 'movingSfx')
  return i6786
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i6790 = root || request.c( 'BD_Action' )
  var i6791 = data
  i6790.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i6791[0], i6790.OnMouseDownEvent)
  i6790.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i6791[1], i6790.OnMouseUpEvent)
  i6790.setToolLayer = !!i6791[2]
  request.r(i6791[3], i6791[4], 0, i6790, 'tool_SP')
  return i6790
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i6792 = root || request.c( 'BD_CameraFollow' )
  var i6793 = data
  request.r(i6793[0], i6793[1], 0, i6792, 'Tool')
  request.r(i6793[2], i6793[3], 0, i6792, 'Pivot')
  i6792.FOV = i6793[4]
  i6792.Y_L = i6793[5]
  i6792.Y_H = i6793[6]
  i6792.X_L = i6793[7]
  i6792.X_R = i6793[8]
  i6792.startDelay = i6793[9]
  i6792.duration = i6793[10]
  return i6792
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i6794 = root || request.c( 'BD_ToolRotate' )
  var i6795 = data
  i6794.startDelay = i6795[0]
  request.r(i6795[1], i6795[2], 0, i6794, 'Tool')
  request.r(i6795[3], i6795[4], 0, i6794, 'Clamp')
  request.r(i6795[5], i6795[6], 0, i6794, 'Pivot')
  i6794.MinAngle = new pc.Vec3( i6795[7], i6795[8], i6795[9] )
  i6794.MaxAngle = new pc.Vec3( i6795[10], i6795[11], i6795[12] )
  i6794.rotationSpeed = i6795[13]
  return i6794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i6796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i6797 = data
  i6796.bodyType = i6797[0]
  request.r(i6797[1], i6797[2], 0, i6796, 'material')
  i6796.simulated = !!i6797[3]
  i6796.useAutoMass = !!i6797[4]
  i6796.mass = i6797[5]
  i6796.drag = i6797[6]
  i6796.angularDrag = i6797[7]
  i6796.gravityScale = i6797[8]
  i6796.collisionDetectionMode = i6797[9]
  i6796.sleepMode = i6797[10]
  i6796.constraints = i6797[11]
  return i6796
}

Deserializers["BugKill_Tip"] = function (request, data, root) {
  var i6798 = root || request.c( 'BugKill_Tip' )
  var i6799 = data
  var i6801 = i6799[0]
  var i6800 = []
  for(var i = 0; i < i6801.length; i += 2) {
  request.r(i6801[i + 0], i6801[i + 1], 2, i6800, '')
  }
  i6798.targets = i6800
  i6798.waypointFollower = !!i6799[1]
  i6798.fallSpeed = i6799[2]
  i6798.totalTargets = i6799[3]
  i6798.killCount = i6799[4]
  request.r(i6799[5], i6799[6], 0, i6798, 'bugKillSfx')
  i6798.OnComplete = request.d('UnityEngine.Events.UnityEvent', i6799[7], i6798.OnComplete)
  return i6798
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i6804 = root || request.c( 'BD_Progress' )
  var i6805 = data
  var i6807 = i6805[0]
  var i6806 = []
  for(var i = 0; i < i6807.length; i += 1) {
    i6806.push( request.d('ScratchData', i6807[i + 0]) );
  }
  i6804.AllScratches = i6806
  i6804.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i6805[1], i6804.OnScratchComplete)
  i6804.isProgDone = !!i6805[2]
  i6804.canCallComplete = !!i6805[3]
  i6804.CollectiveAppear = !!i6805[4]
  i6804.tipControl = !!i6805[5]
  i6804.progressControl = !!i6805[6]
  request.r(i6805[7], i6805[8], 0, i6804, 'thisDrag')
  i6804.CompleteEvent = request.d('System.Action', i6805[9], i6804.CompleteEvent)
  i6804.SubCompleteEvent = request.d('System.Action', i6805[10], i6804.SubCompleteEvent)
  return i6804
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i6810 = root || request.c( 'ScratchData' )
  var i6811 = data
  request.r(i6811[0], i6811[1], 0, i6810, 'ScratchManager')
  i6810.scratchLimit = i6811[2]
  i6810.isComplete = !!i6811[3]
  return i6810
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i6812 = root || request.c( 'BD_ProgressHelper' )
  var i6813 = data
  request.r(i6813[0], i6813[1], 0, i6812, 'BD_Progress')
  request.r(i6813[2], i6813[3], 0, i6812, 'fadeSprite')
  i6812.fadeIn = !!i6813[4]
  return i6812
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i6814 = root || request.c( 'ActionOnTap' )
  var i6815 = data
  i6814.OnTap = request.d('UnityEngine.Events.UnityEvent', i6815[0], i6814.OnTap)
  i6814.OnTapExtra = request.d('System.Action', i6815[1], i6814.OnTapExtra)
  return i6814
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i6816 = root || request.c( 'BD_SpriteChange' )
  var i6817 = data
  request.r(i6817[0], i6817[1], 0, i6816, 'BD')
  request.r(i6817[2], i6817[3], 0, i6816, 'SR')
  request.r(i6817[4], i6817[5], 0, i6816, 'Default')
  request.r(i6817[6], i6817[7], 0, i6816, 'Picked')
  i6816.resetOnRelease = !!i6817[8]
  return i6816
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i6818 = root || request.c( 'BD_AnimatorDrag' )
  var i6819 = data
  request.r(i6819[0], i6819[1], 0, i6818, 'BD')
  request.r(i6819[2], i6819[3], 0, i6818, 'anim')
  request.r(i6819[4], i6819[5], 0, i6818, 'Source')
  i6818.Vibration = !!i6819[6]
  i6818.isCompletable = !!i6819[7]
  i6818.completionThreshold = i6819[8]
  i6818.OnComplete = request.d('UnityEngine.Events.UnityEvent', i6819[9], i6818.OnComplete)
  return i6818
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i6820 = root || request.c( 'PlaceItem' )
  var i6821 = data
  request.r(i6821[0], i6821[1], 0, i6820, 'thisDrag')
  request.r(i6821[2], i6821[3], 0, i6820, 'Target')
  request.r(i6821[4], i6821[5], 0, i6820, 'Clip')
  i6820.jumpOnPlace = !!i6821[6]
  i6820.jumpHeight = i6821[7]
  i6820.jumpDuration = i6821[8]
  i6820.settleDuration = i6821[9]
  i6820.isPlaced = !!i6821[10]
  i6820.isInsideCollider = !!i6821[11]
  i6820.changeScaleOnPlace = !!i6821[12]
  request.r(i6821[13], i6821[14], 0, i6820, 'item')
  i6820.newScaleOnPlace = new pc.Vec3( i6821[15], i6821[16], i6821[17] )
  i6820.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i6821[18], i6820.OnPlaced)
  return i6820
}

Deserializers["BD_Audio"] = function (request, data, root) {
  var i6822 = root || request.c( 'BD_Audio' )
  var i6823 = data
  request.r(i6823[0], i6823[1], 0, i6822, 'BD')
  request.r(i6823[2], i6823[3], 0, i6822, 'Source')
  i6822.shouldRestart = !!i6823[4]
  i6822.startVol = i6823[5]
  i6822.targetVol = i6823[6]
  i6822.duration = i6823[7]
  i6822.startDelay = i6823[8]
  return i6822
}

Deserializers["Level1_HairAnim"] = function (request, data, root) {
  var i6824 = root || request.c( 'Level1_HairAnim' )
  var i6825 = data
  i6824.holdDuration = i6825[0]
  request.r(i6825[1], i6825[2], 0, i6824, 'targetSprite')
  i6824.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i6825[3], i6824.onHoldComplete)
  i6824.isHolding = !!i6825[4]
  request.r(i6825[5], i6825[6], 0, i6824, 'targetObj')
  request.r(i6825[7], i6825[8], 0, i6824, 'thisTool')
  request.r(i6825[9], i6825[10], 0, i6824, 'thisToolTip')
  var i6827 = i6825[11]
  var i6826 = []
  for(var i = 0; i < i6827.length; i += 2) {
  request.r(i6827[i + 0], i6827[i + 1], 2, i6826, '')
  }
  i6824.hairsAnim = i6826
  var i6829 = i6825[12]
  var i6828 = []
  for(var i = 0; i < i6829.length; i += 2) {
  request.r(i6829[i + 0], i6829[i + 1], 2, i6828, '')
  }
  i6824.hairsRend = i6828
  i6824.hairsRendFadeThreshold = i6825[13]
  request.r(i6825[14], i6825[15], 0, i6824, 'wetHairRend')
  request.r(i6825[16], i6825[17], 0, i6824, 'dryHairRend')
  request.r(i6825[18], i6825[19], 0, i6824, 'dryHairRendBack')
  i6824.hairAnimStopDuration = i6825[20]
  i6824.hairAnimResumeDuration = i6825[21]
  return i6824
}

Deserializers["BD_TapandHold"] = function (request, data, root) {
  var i6830 = root || request.c( 'BD_TapandHold' )
  var i6831 = data
  i6830.holdDuration = i6831[0]
  i6830.updateVisuals = !!i6831[1]
  request.r(i6831[2], i6831[3], 0, i6830, 'targetSprite')
  i6830.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i6831[4], i6830.onHoldComplete)
  i6830.onCompleteProgress = request.d('UnityEngine.Events.UnityEvent', i6831[5], i6830.onCompleteProgress)
  i6830.currentProgress = i6831[6]
  i6830.isHolding = !!i6831[7]
  request.r(i6831[8], i6831[9], 0, i6830, 'targetObj')
  request.r(i6831[10], i6831[11], 0, i6830, 'thisTool')
  request.r(i6831[12], i6831[13], 0, i6830, 'thisToolTip')
  return i6830
}

Deserializers["TapandHold_Simple"] = function (request, data, root) {
  var i6832 = root || request.c( 'TapandHold_Simple' )
  var i6833 = data
  request.r(i6833[0], i6833[1], 0, i6832, 'actionSfx')
  i6832.holdDuration = i6833[2]
  i6832.dragThreshold = i6833[3]
  i6832.fadeInOnHold = !!i6833[4]
  i6832.fadeOutOnRelease = !!i6833[5]
  request.r(i6833[6], i6833[7], 0, i6832, 'targetSprite')
  i6832.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i6833[8], i6832.onHoldComplete)
  i6832.currentProgress = i6833[9]
  i6832.isHolding = !!i6833[10]
  i6832.isCompleted = !!i6833[11]
  request.r(i6833[12], i6833[13], 0, i6832, 'thisTool')
  return i6832
}

Deserializers["DraggableBrush"] = function (request, data, root) {
  var i6834 = root || request.c( 'DraggableBrush' )
  var i6835 = data
  request.r(i6835[0], i6835[1], 0, i6834, 'BD_Progress')
  var i6837 = i6835[2]
  var i6836 = new (System.Collections.Generic.List$1(Bridge.ns('DraggableBrush+Step')))
  for(var i = 0; i < i6837.length; i += 1) {
    i6836.add(request.d('DraggableBrush+Step', i6837[i + 0]));
  }
  i6834.movementSteps = i6836
  i6834.snapSensitivity = i6835[3]
  i6834.OnComplete = request.d('UnityEngine.Events.UnityEvent', i6835[4], i6834.OnComplete)
  return i6834
}

Deserializers["DraggableBrush+Step"] = function (request, data, root) {
  var i6840 = root || request.c( 'DraggableBrush+Step' )
  var i6841 = data
  i6840.stepName = i6841[0]
  i6840.startX = i6841[1]
  i6840.startY = i6841[2]
  i6840.endY = i6841[3]
  return i6840
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i6842 = root || request.c( 'SpriteButton' )
  var i6843 = data
  i6842.isLocked = !!i6843[0]
  i6842.lockMsg = i6843[1]
  i6842.onClick = request.d('UnityEngine.Events.UnityEvent', i6843[2], i6842.onClick)
  i6842.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i6843[3], i6842.onLockedClick)
  i6842.isLevelBtnSfx = !!i6843[4]
  request.r(i6843[5], i6843[6], 0, i6842, 'pivot')
  i6842.reductionChange = i6843[7]
  i6842.animationDuration = i6843[8]
  return i6842
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i6844 = root || request.c( 'DestroyObj' )
  var i6845 = data
  i6844.destroyDelay = i6845[0]
  return i6844
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i6846 = root || request.c( 'MenuLevel' )
  var i6847 = data
  request.r(i6847[0], i6847[1], 0, i6846, 'menuLevelBtnUpdate')
  var i6849 = i6847[2]
  var i6848 = []
  for(var i = 0; i < i6849.length; i += 1) {
    i6848.push( request.d('MenuLevelData', i6849[i + 0]) );
  }
  i6846.AllSteps = i6848
  request.r(i6847[3], i6847[4], 0, i6846, 'buttonparent')
  var i6851 = i6847[5]
  var i6850 = []
  for(var i = 0; i < i6851.length; i += 2) {
  request.r(i6851[i + 0], i6851[i + 1], 2, i6850, '')
  }
  i6846.BtnsDotweenAnims = i6850
  var i6853 = i6847[6]
  var i6852 = []
  for(var i = 0; i < i6853.length; i += 2) {
  request.r(i6853[i + 0], i6853[i + 1], 2, i6852, '')
  }
  i6846.BtnsCols = i6852
  request.r(i6847[7], i6847[8], 0, i6846, 'mainGameView')
  request.r(i6847[9], i6847[10], 0, i6846, 'Storyboard')
  request.r(i6847[11], i6847[12], 0, i6846, 'BgMusic')
  request.r(i6847[13], i6847[14], 0, i6846, 'BgStoryMusic')
  request.r(i6847[15], i6847[16], 0, i6846, 'Hand_Tut1')
  request.r(i6847[17], i6847[18], 0, i6846, 'Button_Hand')
  var i6855 = i6847[19]
  var i6854 = []
  for(var i = 0; i < i6855.length; i += 2) {
  request.r(i6855[i + 0], i6855[i + 1], 2, i6854, '')
  }
  i6846.itemEnable_Onstart = i6854
  var i6857 = i6847[20]
  var i6856 = []
  for(var i = 0; i < i6857.length; i += 2) {
  request.r(i6857[i + 0], i6857[i + 1], 2, i6856, '')
  }
  i6846.itemDisable_Onstart = i6856
  var i6859 = i6847[21]
  var i6858 = []
  for(var i = 0; i < i6859.length; i += 2) {
  request.r(i6859[i + 0], i6859[i + 1], 2, i6858, '')
  }
  i6846.itemEnable_Oncomplete = i6858
  var i6861 = i6847[22]
  var i6860 = []
  for(var i = 0; i < i6861.length; i += 2) {
  request.r(i6861[i + 0], i6861[i + 1], 2, i6860, '')
  }
  i6846.itemDisable_Oncomplete = i6860
  i6846.levelKey = i6847[23]
  i6846.revealDirtyHoldTime = i6847[24]
  return i6846
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i6864 = root || request.c( 'MenuLevelData' )
  var i6865 = data
  i6864.Name = i6865[0]
  request.r(i6865[1], i6865[2], 0, i6864, 'UiBtn')
  request.r(i6865[3], i6865[4], 0, i6864, 'TickBtn')
  request.r(i6865[5], i6865[6], 0, i6864, 'ExclamationIcon')
  var i6867 = i6865[7]
  var i6866 = []
  for(var i = 0; i < i6867.length; i += 2) {
  request.r(i6867[i + 0], i6867[i + 1], 2, i6866, '')
  }
  i6864.Item_Dirty = i6866
  var i6869 = i6865[8]
  var i6868 = []
  for(var i = 0; i < i6869.length; i += 2) {
  request.r(i6869[i + 0], i6869[i + 1], 2, i6868, '')
  }
  i6864.Item_Clean = i6868
  request.r(i6865[9], i6865[10], 0, i6864, 'CompleteParticle')
  return i6864
}

Deserializers["IntroLevelAnim"] = function (request, data, root) {
  var i6872 = root || request.c( 'IntroLevelAnim' )
  var i6873 = data
  request.r(i6873[0], i6873[1], 0, i6872, 'menuLevel')
  i6872.lvlkey = i6873[2]
  request.r(i6873[3], i6873[4], 0, i6872, 'DressChangeObj')
  request.r(i6873[5], i6873[6], 0, i6872, 'DressChangeClip')
  return i6872
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i6874 = root || request.c( 'Level_PoseController' )
  var i6875 = data
  var i6877 = i6875[0]
  var i6876 = []
  for(var i = 0; i < i6877.length; i += 2) {
  request.r(i6877[i + 0], i6877[i + 1], 2, i6876, '')
  }
  i6874.itemToShow = i6876
  var i6879 = i6875[1]
  var i6878 = []
  for(var i = 0; i < i6879.length; i += 2) {
  request.r(i6879[i + 0], i6879[i + 1], 2, i6878, '')
  }
  i6874.itemToHide = i6878
  i6874.stepTarget = i6875[2]
  return i6874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i6880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i6881 = data
  i6880.name = i6881[0]
  i6880.atlasId = i6881[1]
  i6880.mipmapCount = i6881[2]
  i6880.hdr = !!i6881[3]
  i6880.size = i6881[4]
  i6880.anisoLevel = i6881[5]
  i6880.filterMode = i6881[6]
  var i6883 = i6881[7]
  var i6882 = []
  for(var i = 0; i < i6883.length; i += 4) {
    i6882.push( UnityEngine.Rect.MinMaxRect(i6883[i + 0], i6883[i + 1], i6883[i + 2], i6883[i + 3]) );
  }
  i6880.rects = i6882
  i6880.wrapU = i6881[8]
  i6880.wrapV = i6881[9]
  return i6880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6887 = data
  i6886.name = i6887[0]
  i6886.index = i6887[1]
  i6886.startup = !!i6887[2]
  return i6886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6889 = data
  i6888.aspect = i6889[0]
  i6888.orthographic = !!i6889[1]
  i6888.orthographicSize = i6889[2]
  i6888.backgroundColor = new pc.Color(i6889[3], i6889[4], i6889[5], i6889[6])
  i6888.nearClipPlane = i6889[7]
  i6888.farClipPlane = i6889[8]
  i6888.fieldOfView = i6889[9]
  i6888.depth = i6889[10]
  i6888.clearFlags = i6889[11]
  i6888.cullingMask = i6889[12]
  i6888.rect = i6889[13]
  request.r(i6889[14], i6889[15], 0, i6888, 'targetTexture')
  i6888.usePhysicalProperties = !!i6889[16]
  i6888.focalLength = i6889[17]
  i6888.sensorSize = new pc.Vec2( i6889[18], i6889[19] )
  i6888.lensShift = new pc.Vec2( i6889[20], i6889[21] )
  i6888.gateFit = i6889[22]
  i6888.commandBufferCount = i6889[23]
  i6888.cameraType = i6889[24]
  i6888.enabled = !!i6889[25]
  return i6888
}

Deserializers["CameraController"] = function (request, data, root) {
  var i6890 = root || request.c( 'CameraController' )
  var i6891 = data
  request.r(i6891[0], i6891[1], 0, i6890, 'cam')
  i6890.defaultPosition = new pc.Vec3( i6891[2], i6891[3], i6891[4] )
  i6890.defaultSize = i6891[5]
  i6890.defaultFOV = i6891[6]
  i6890.defaultDuration = i6891[7]
  i6890.defaultEase = i6891[8]
  return i6890
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i6892 = root || request.c( 'MusicSource' )
  var i6893 = data
  request.r(i6893[0], i6893[1], 0, i6892, 'source')
  return i6892
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i6894 = root || request.c( 'UI_Manager' )
  var i6895 = data
  i6894.levelCompleted = !!i6895[0]
  i6894.isPauseActive = !!i6895[1]
  i6894.loadIndex = i6895[2]
  request.r(i6895[3], i6895[4], 0, i6894, 'removeAdsButton')
  request.r(i6895[5], i6895[6], 0, i6894, 'pauseButton')
  request.r(i6895[7], i6895[8], 0, i6894, 'Fade_Img')
  request.r(i6895[9], i6895[10], 0, i6894, 'TopBarAnim')
  request.r(i6895[11], i6895[12], 0, i6894, 'MainPanel')
  request.r(i6895[13], i6895[14], 0, i6894, 'PausePanel')
  request.r(i6895[15], i6895[16], 0, i6894, 'PausePopUp')
  request.r(i6895[17], i6895[18], 0, i6894, 'PauseCanvasGroup')
  request.r(i6895[19], i6895[20], 0, i6894, 'RateUsPanel')
  request.r(i6895[21], i6895[22], 0, i6894, 'RateUsPopUp')
  request.r(i6895[23], i6895[24], 0, i6894, 'RemoveAdsPanel')
  request.r(i6895[25], i6895[26], 0, i6894, 'RemoveAdsPopUp')
  request.r(i6895[27], i6895[28], 0, i6894, 'RemoveAdsCanvasGroup')
  var i6897 = i6895[29]
  var i6896 = []
  for(var i = 0; i < i6897.length; i += 2) {
  request.r(i6897[i + 0], i6897[i + 1], 2, i6896, '')
  }
  i6894.RemoveAdsAnims = i6896
  request.r(i6895[30], i6895[31], 0, i6894, 'CompletePanel')
  request.r(i6895[32], i6895[33], 0, i6894, 'LevelIcon')
  request.r(i6895[34], i6895[35], 0, i6894, 'CompleteParticles')
  request.r(i6895[36], i6895[37], 0, i6894, 'progressBar')
  request.r(i6895[38], i6895[39], 0, i6894, 'progressText')
  request.r(i6895[40], i6895[41], 0, i6894, 'toolIcon1')
  request.r(i6895[42], i6895[43], 0, i6894, 'toolIcon2')
  request.r(i6895[44], i6895[45], 0, i6894, 'toolIcon3')
  request.r(i6895[46], i6895[47], 0, i6894, 'target1')
  request.r(i6895[48], i6895[49], 0, i6894, 'target2')
  i6894.toolMoveDuration = i6895[50]
  i6894.currentIndex = i6895[51]
  var i6899 = i6895[52]
  var i6898 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i6899.length; i += 2) {
  request.r(i6899[i + 0], i6899[i + 1], 1, i6898, '')
  }
  i6894.allTools = i6898
  request.r(i6895[53], i6895[54], 0, i6894, 'clockProgress')
  request.r(i6895[55], i6895[56], 0, i6894, 'clockProgressFill')
  request.r(i6895[57], i6895[58], 0, i6894, 'clockAudio')
  i6894.moveDistance = i6895[59]
  i6894.animationDuration = i6895[60]
  i6894.greyBgChildName = i6895[61]
  i6894.pushOffset = i6895[62]
  return i6894
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i6900 = root || request.c( 'GameManagerPlayable' )
  var i6901 = data
  request.r(i6901[0], i6901[1], 0, i6900, 'endParticles')
  request.r(i6901[2], i6901[3], 0, i6900, 'stepCompleteParticles')
  request.r(i6901[4], i6901[5], 0, i6900, 'DefaultMat')
  request.r(i6901[6], i6901[7], 0, i6900, 'BG_Music')
  request.r(i6901[8], i6901[9], 0, i6900, 'restoreEffectShader')
  request.r(i6901[10], i6901[11], 0, i6900, 'stickerEffectShader')
  i6900.isComplete = !!i6901[12]
  i6900.isPaused = !!i6901[13]
  request.r(i6901[14], i6901[15], 0, i6900, 'currentLevel')
  i6900.startLevelOnPlay = !!i6901[16]
  i6900.currentLevelNo = i6901[17]
  return i6900
}

Deserializers["AudioController"] = function (request, data, root) {
  var i6902 = root || request.c( 'AudioController' )
  var i6903 = data
  request.r(i6903[0], i6903[1], 0, i6902, 'MainMixer')
  request.r(i6903[2], i6903[3], 0, i6902, 'UiClick')
  request.r(i6903[4], i6903[5], 0, i6902, 'UiClickSource')
  var i6905 = i6903[6]
  var i6904 = []
  for(var i = 0; i < i6905.length; i += 2) {
  request.r(i6905[i + 0], i6905[i + 1], 2, i6904, '')
  }
  i6902.SfxSources = i6904
  var i6907 = i6903[7]
  var i6906 = []
  for(var i = 0; i < i6907.length; i += 2) {
  request.r(i6907[i + 0], i6907[i + 1], 2, i6906, '')
  }
  i6902.AllClips = i6906
  return i6902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6911 = data
  i6910.pivot = new pc.Vec2( i6911[0], i6911[1] )
  i6910.anchorMin = new pc.Vec2( i6911[2], i6911[3] )
  i6910.anchorMax = new pc.Vec2( i6911[4], i6911[5] )
  i6910.sizeDelta = new pc.Vec2( i6911[6], i6911[7] )
  i6910.anchoredPosition3D = new pc.Vec3( i6911[8], i6911[9], i6911[10] )
  i6910.rotation = new pc.Quat(i6911[11], i6911[12], i6911[13], i6911[14])
  i6910.scale = new pc.Vec3( i6911[15], i6911[16], i6911[17] )
  return i6910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6913 = data
  i6912.planeDistance = i6913[0]
  i6912.referencePixelsPerUnit = i6913[1]
  i6912.isFallbackOverlay = !!i6913[2]
  i6912.renderMode = i6913[3]
  i6912.renderOrder = i6913[4]
  i6912.sortingLayerName = i6913[5]
  i6912.sortingOrder = i6913[6]
  i6912.scaleFactor = i6913[7]
  request.r(i6913[8], i6913[9], 0, i6912, 'worldCamera')
  i6912.overrideSorting = !!i6913[10]
  i6912.pixelPerfect = !!i6913[11]
  i6912.targetDisplay = i6913[12]
  i6912.overridePixelPerfect = !!i6913[13]
  i6912.enabled = !!i6913[14]
  return i6912
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6914 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6915 = data
  i6914.m_UiScaleMode = i6915[0]
  i6914.m_ReferencePixelsPerUnit = i6915[1]
  i6914.m_ScaleFactor = i6915[2]
  i6914.m_ReferenceResolution = new pc.Vec2( i6915[3], i6915[4] )
  i6914.m_ScreenMatchMode = i6915[5]
  i6914.m_MatchWidthOrHeight = i6915[6]
  i6914.m_PhysicalUnit = i6915[7]
  i6914.m_FallbackScreenDPI = i6915[8]
  i6914.m_DefaultSpriteDPI = i6915[9]
  i6914.m_DynamicPixelsPerUnit = i6915[10]
  i6914.m_PresetInfoIsWorld = !!i6915[11]
  return i6914
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6916 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6917 = data
  i6916.m_IgnoreReversedGraphics = !!i6917[0]
  i6916.m_BlockingObjects = i6917[1]
  i6916.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6917[2] )
  return i6916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6919 = data
  i6918.cullTransparentMesh = !!i6919[0]
  return i6918
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6920 = root || request.c( 'UnityEngine.UI.Image' )
  var i6921 = data
  request.r(i6921[0], i6921[1], 0, i6920, 'm_Sprite')
  i6920.m_Type = i6921[2]
  i6920.m_PreserveAspect = !!i6921[3]
  i6920.m_FillCenter = !!i6921[4]
  i6920.m_FillMethod = i6921[5]
  i6920.m_FillAmount = i6921[6]
  i6920.m_FillClockwise = !!i6921[7]
  i6920.m_FillOrigin = i6921[8]
  i6920.m_UseSpriteMesh = !!i6921[9]
  i6920.m_PixelsPerUnitMultiplier = i6921[10]
  request.r(i6921[11], i6921[12], 0, i6920, 'm_Material')
  i6920.m_Maskable = !!i6921[13]
  i6920.m_Color = new pc.Color(i6921[14], i6921[15], i6921[16], i6921[17])
  i6920.m_RaycastTarget = !!i6921[18]
  i6920.m_RaycastPadding = new pc.Vec4( i6921[19], i6921[20], i6921[21], i6921[22] )
  return i6920
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i6922 = root || request.c( 'UnityEngine.UI.Text' )
  var i6923 = data
  i6922.m_FontData = request.d('UnityEngine.UI.FontData', i6923[0], i6922.m_FontData)
  i6922.m_Text = i6923[1]
  request.r(i6923[2], i6923[3], 0, i6922, 'm_Material')
  i6922.m_Maskable = !!i6923[4]
  i6922.m_Color = new pc.Color(i6923[5], i6923[6], i6923[7], i6923[8])
  i6922.m_RaycastTarget = !!i6923[9]
  i6922.m_RaycastPadding = new pc.Vec4( i6923[10], i6923[11], i6923[12], i6923[13] )
  return i6922
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i6924 = root || request.c( 'UnityEngine.UI.FontData' )
  var i6925 = data
  request.r(i6925[0], i6925[1], 0, i6924, 'm_Font')
  i6924.m_FontSize = i6925[2]
  i6924.m_FontStyle = i6925[3]
  i6924.m_BestFit = !!i6925[4]
  i6924.m_MinSize = i6925[5]
  i6924.m_MaxSize = i6925[6]
  i6924.m_Alignment = i6925[7]
  i6924.m_AlignByGeometry = !!i6925[8]
  i6924.m_RichText = !!i6925[9]
  i6924.m_HorizontalOverflow = i6925[10]
  i6924.m_VerticalOverflow = i6925[11]
  i6924.m_LineSpacing = i6925[12]
  return i6924
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6926 = root || request.c( 'UnityEngine.UI.Button' )
  var i6927 = data
  i6926.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6927[0], i6926.m_OnClick)
  i6926.m_Navigation = request.d('UnityEngine.UI.Navigation', i6927[1], i6926.m_Navigation)
  i6926.m_Transition = i6927[2]
  i6926.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6927[3], i6926.m_Colors)
  i6926.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6927[4], i6926.m_SpriteState)
  i6926.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6927[5], i6926.m_AnimationTriggers)
  i6926.m_Interactable = !!i6927[6]
  request.r(i6927[7], i6927[8], 0, i6926, 'm_TargetGraphic')
  return i6926
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6928 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6929 = data
  i6928.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6929[0], i6928.m_PersistentCalls)
  return i6928
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6930 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6931 = data
  i6930.m_Mode = i6931[0]
  i6930.m_WrapAround = !!i6931[1]
  request.r(i6931[2], i6931[3], 0, i6930, 'm_SelectOnUp')
  request.r(i6931[4], i6931[5], 0, i6930, 'm_SelectOnDown')
  request.r(i6931[6], i6931[7], 0, i6930, 'm_SelectOnLeft')
  request.r(i6931[8], i6931[9], 0, i6930, 'm_SelectOnRight')
  return i6930
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6932 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6933 = data
  i6932.m_NormalColor = new pc.Color(i6933[0], i6933[1], i6933[2], i6933[3])
  i6932.m_HighlightedColor = new pc.Color(i6933[4], i6933[5], i6933[6], i6933[7])
  i6932.m_PressedColor = new pc.Color(i6933[8], i6933[9], i6933[10], i6933[11])
  i6932.m_SelectedColor = new pc.Color(i6933[12], i6933[13], i6933[14], i6933[15])
  i6932.m_DisabledColor = new pc.Color(i6933[16], i6933[17], i6933[18], i6933[19])
  i6932.m_ColorMultiplier = i6933[20]
  i6932.m_FadeDuration = i6933[21]
  return i6932
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6934 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6935 = data
  request.r(i6935[0], i6935[1], 0, i6934, 'm_HighlightedSprite')
  request.r(i6935[2], i6935[3], 0, i6934, 'm_PressedSprite')
  request.r(i6935[4], i6935[5], 0, i6934, 'm_SelectedSprite')
  request.r(i6935[6], i6935[7], 0, i6934, 'm_DisabledSprite')
  return i6934
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6936 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6937 = data
  i6936.m_NormalTrigger = i6937[0]
  i6936.m_HighlightedTrigger = i6937[1]
  i6936.m_PressedTrigger = i6937[2]
  i6936.m_SelectedTrigger = i6937[3]
  i6936.m_DisabledTrigger = i6937[4]
  return i6936
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i6938 = root || request.c( 'PlayableHudRuntime' )
  var i6939 = data
  return i6938
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6940 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6941 = data
  request.r(i6941[0], i6941[1], 0, i6940, 'm_FirstSelected')
  i6940.m_sendNavigationEvents = !!i6941[2]
  i6940.m_DragThreshold = i6941[3]
  return i6940
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6942 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6943 = data
  i6942.m_HorizontalAxis = i6943[0]
  i6942.m_VerticalAxis = i6943[1]
  i6942.m_SubmitButton = i6943[2]
  i6942.m_CancelButton = i6943[3]
  i6942.m_InputActionsPerSecond = i6943[4]
  i6942.m_RepeatDelay = i6943[5]
  i6942.m_ForceModuleActive = !!i6943[6]
  i6942.m_SendPointerHoverToParent = !!i6943[7]
  return i6942
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i6944 = root || request.c( 'PlayableRouter' )
  var i6945 = data
  var i6947 = i6945[0]
  var i6946 = []
  for(var i = 0; i < i6947.length; i += 2) {
  request.r(i6947[i + 0], i6947[i + 1], 2, i6946, '')
  }
  i6944.menuObjects = i6946
  var i6949 = i6945[1]
  var i6948 = []
  for(var i = 0; i < i6949.length; i += 2) {
  request.r(i6949[i + 0], i6949[i + 1], 2, i6948, '')
  }
  i6944.gameplayObjects = i6948
  var i6951 = i6945[2]
  var i6950 = []
  for(var i = 0; i < i6951.length; i += 1) {
    i6950.push( request.d('PlayableRouter+SubLevelSlot', i6951[i + 0]) );
  }
  i6944.subLevels = i6950
  i6944.fadeDuration = i6945[3]
  i6944.lockedMessage = i6945[4]
  i6944.lockedTapsToCTA = i6945[5]
  return i6944
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i6954 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i6955 = data
  request.r(i6955[0], i6955[1], 0, i6954, 'button')
  request.r(i6955[2], i6955[3], 0, i6954, 'level')
  return i6954
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i6956 = root || request.c( 'ToastManager' )
  var i6957 = data
  request.r(i6957[0], i6957[1], 0, i6956, 'toastPanel')
  request.r(i6957[2], i6957[3], 0, i6956, 'toastPopup')
  request.r(i6957[4], i6957[5], 0, i6956, 'canvasGroup')
  request.r(i6957[6], i6957[7], 0, i6956, 'toastText')
  i6956.startY = i6957[8]
  i6956.visibleY = i6957[9]
  i6956.endY = i6957[10]
  i6956.animationTime = i6957[11]
  i6956.animationTimeUp = i6957[12]
  return i6956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i6958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i6959 = data
  i6958.m_Alpha = i6959[0]
  i6958.m_Interactable = !!i6959[1]
  i6958.m_BlocksRaycasts = !!i6959[2]
  i6958.m_IgnoreParentGroups = !!i6959[3]
  i6958.enabled = !!i6959[4]
  return i6958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6961 = data
  i6960.ambientIntensity = i6961[0]
  i6960.reflectionIntensity = i6961[1]
  i6960.ambientMode = i6961[2]
  i6960.ambientLight = new pc.Color(i6961[3], i6961[4], i6961[5], i6961[6])
  i6960.ambientSkyColor = new pc.Color(i6961[7], i6961[8], i6961[9], i6961[10])
  i6960.ambientGroundColor = new pc.Color(i6961[11], i6961[12], i6961[13], i6961[14])
  i6960.ambientEquatorColor = new pc.Color(i6961[15], i6961[16], i6961[17], i6961[18])
  i6960.fogColor = new pc.Color(i6961[19], i6961[20], i6961[21], i6961[22])
  i6960.fogEndDistance = i6961[23]
  i6960.fogStartDistance = i6961[24]
  i6960.fogDensity = i6961[25]
  i6960.fog = !!i6961[26]
  request.r(i6961[27], i6961[28], 0, i6960, 'skybox')
  i6960.fogMode = i6961[29]
  var i6963 = i6961[30]
  var i6962 = []
  for(var i = 0; i < i6963.length; i += 1) {
    i6962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6963[i + 0]) );
  }
  i6960.lightmaps = i6962
  i6960.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6961[31], i6960.lightProbes)
  i6960.lightmapsMode = i6961[32]
  i6960.mixedBakeMode = i6961[33]
  i6960.environmentLightingMode = i6961[34]
  i6960.ambientProbe = new pc.SphericalHarmonicsL2(i6961[35])
  request.r(i6961[36], i6961[37], 0, i6960, 'customReflection')
  request.r(i6961[38], i6961[39], 0, i6960, 'defaultReflection')
  i6960.defaultReflectionMode = i6961[40]
  i6960.defaultReflectionResolution = i6961[41]
  i6960.sunLightObjectId = i6961[42]
  i6960.pixelLightCount = i6961[43]
  i6960.defaultReflectionHDR = !!i6961[44]
  i6960.hasLightDataAsset = !!i6961[45]
  i6960.hasManualGenerate = !!i6961[46]
  return i6960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6967 = data
  request.r(i6967[0], i6967[1], 0, i6966, 'lightmapColor')
  request.r(i6967[2], i6967[3], 0, i6966, 'lightmapDirection')
  request.r(i6967[4], i6967[5], 0, i6966, 'shadowMask')
  return i6966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6968 = root || new UnityEngine.LightProbes()
  var i6969 = data
  return i6968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6975 = data
  var i6977 = i6975[0]
  var i6976 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i6977.length; i += 1) {
    i6976.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i6977[i + 0]));
  }
  i6974.ShaderCompilationErrors = i6976
  i6974.name = i6975[1]
  i6974.guid = i6975[2]
  var i6979 = i6975[3]
  var i6978 = []
  for(var i = 0; i < i6979.length; i += 1) {
    i6978.push( i6979[i + 0] );
  }
  i6974.shaderDefinedKeywords = i6978
  var i6981 = i6975[4]
  var i6980 = []
  for(var i = 0; i < i6981.length; i += 1) {
    i6980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6981[i + 0]) );
  }
  i6974.passes = i6980
  var i6983 = i6975[5]
  var i6982 = []
  for(var i = 0; i < i6983.length; i += 1) {
    i6982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6983[i + 0]) );
  }
  i6974.usePasses = i6982
  var i6985 = i6975[6]
  var i6984 = []
  for(var i = 0; i < i6985.length; i += 1) {
    i6984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6985[i + 0]) );
  }
  i6974.defaultParameterValues = i6984
  request.r(i6975[7], i6975[8], 0, i6974, 'unityFallbackShader')
  i6974.readDepth = !!i6975[9]
  i6974.hasDepthOnlyPass = !!i6975[10]
  i6974.isCreatedByShaderGraph = !!i6975[11]
  i6974.disableBatching = !!i6975[12]
  i6974.compiled = !!i6975[13]
  return i6974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i6988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i6989 = data
  i6988.shaderName = i6989[0]
  i6988.errorMessage = i6989[1]
  return i6988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6994 = root || new pc.UnityShaderPass()
  var i6995 = data
  i6994.id = i6995[0]
  i6994.subShaderIndex = i6995[1]
  i6994.name = i6995[2]
  i6994.passType = i6995[3]
  i6994.grabPassTextureName = i6995[4]
  i6994.usePass = !!i6995[5]
  i6994.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6995[6], i6994.zTest)
  i6994.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6995[7], i6994.zWrite)
  i6994.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6995[8], i6994.culling)
  i6994.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6995[9], i6994.blending)
  i6994.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6995[10], i6994.alphaBlending)
  i6994.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6995[11], i6994.colorWriteMask)
  i6994.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6995[12], i6994.offsetUnits)
  i6994.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6995[13], i6994.offsetFactor)
  i6994.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6995[14], i6994.stencilRef)
  i6994.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6995[15], i6994.stencilReadMask)
  i6994.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6995[16], i6994.stencilWriteMask)
  i6994.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6995[17], i6994.stencilOp)
  i6994.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6995[18], i6994.stencilOpFront)
  i6994.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6995[19], i6994.stencilOpBack)
  var i6997 = i6995[20]
  var i6996 = []
  for(var i = 0; i < i6997.length; i += 1) {
    i6996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6997[i + 0]) );
  }
  i6994.tags = i6996
  var i6999 = i6995[21]
  var i6998 = []
  for(var i = 0; i < i6999.length; i += 1) {
    i6998.push( i6999[i + 0] );
  }
  i6994.passDefinedKeywords = i6998
  var i7001 = i6995[22]
  var i7000 = []
  for(var i = 0; i < i7001.length; i += 1) {
    i7000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i7001[i + 0]) );
  }
  i6994.passDefinedKeywordGroups = i7000
  var i7003 = i6995[23]
  var i7002 = []
  for(var i = 0; i < i7003.length; i += 1) {
    i7002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7003[i + 0]) );
  }
  i6994.variants = i7002
  var i7005 = i6995[24]
  var i7004 = []
  for(var i = 0; i < i7005.length; i += 1) {
    i7004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7005[i + 0]) );
  }
  i6994.excludedVariants = i7004
  i6994.hasDepthReader = !!i6995[25]
  return i6994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i7006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i7007 = data
  i7006.val = i7007[0]
  i7006.name = i7007[1]
  return i7006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i7008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i7009 = data
  i7008.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7009[0], i7008.src)
  i7008.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7009[1], i7008.dst)
  i7008.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7009[2], i7008.op)
  return i7008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i7010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i7011 = data
  i7010.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7011[0], i7010.pass)
  i7010.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7011[1], i7010.fail)
  i7010.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7011[2], i7010.zFail)
  i7010.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7011[3], i7010.comp)
  return i7010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i7014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i7015 = data
  i7014.name = i7015[0]
  i7014.value = i7015[1]
  return i7014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i7018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i7019 = data
  var i7021 = i7019[0]
  var i7020 = []
  for(var i = 0; i < i7021.length; i += 1) {
    i7020.push( i7021[i + 0] );
  }
  i7018.keywords = i7020
  i7018.hasDiscard = !!i7019[1]
  return i7018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i7024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i7025 = data
  i7024.passId = i7025[0]
  i7024.subShaderIndex = i7025[1]
  var i7027 = i7025[2]
  var i7026 = []
  for(var i = 0; i < i7027.length; i += 1) {
    i7026.push( i7027[i + 0] );
  }
  i7024.keywords = i7026
  i7024.vertexProgram = i7025[3]
  i7024.fragmentProgram = i7025[4]
  i7024.exportedForWebGl2 = !!i7025[5]
  i7024.readDepth = !!i7025[6]
  return i7024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i7030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i7031 = data
  request.r(i7031[0], i7031[1], 0, i7030, 'shader')
  i7030.pass = i7031[2]
  return i7030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i7034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i7035 = data
  i7034.name = i7035[0]
  i7034.type = i7035[1]
  i7034.value = new pc.Vec4( i7035[2], i7035[3], i7035[4], i7035[5] )
  i7034.textureValue = i7035[6]
  i7034.shaderPropertyFlag = i7035[7]
  return i7034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i7036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i7037 = data
  i7036.name = i7037[0]
  request.r(i7037[1], i7037[2], 0, i7036, 'texture')
  i7036.aabb = i7037[3]
  i7036.vertices = i7037[4]
  i7036.triangles = i7037[5]
  i7036.textureRect = UnityEngine.Rect.MinMaxRect(i7037[6], i7037[7], i7037[8], i7037[9])
  i7036.packedRect = UnityEngine.Rect.MinMaxRect(i7037[10], i7037[11], i7037[12], i7037[13])
  i7036.border = new pc.Vec4( i7037[14], i7037[15], i7037[16], i7037[17] )
  i7036.transparency = i7037[18]
  i7036.bounds = i7037[19]
  i7036.pixelsPerUnit = i7037[20]
  i7036.textureWidth = i7037[21]
  i7036.textureHeight = i7037[22]
  i7036.nativeSize = new pc.Vec2( i7037[23], i7037[24] )
  i7036.pivot = new pc.Vec2( i7037[25], i7037[26] )
  i7036.textureRectOffset = new pc.Vec2( i7037[27], i7037[28] )
  return i7036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i7038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i7039 = data
  i7038.name = i7039[0]
  return i7038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i7040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i7041 = data
  i7040.name = i7041[0]
  i7040.wrapMode = i7041[1]
  i7040.isLooping = !!i7041[2]
  i7040.length = i7041[3]
  var i7043 = i7041[4]
  var i7042 = []
  for(var i = 0; i < i7043.length; i += 1) {
    i7042.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i7043[i + 0]) );
  }
  i7040.curves = i7042
  var i7045 = i7041[5]
  var i7044 = []
  for(var i = 0; i < i7045.length; i += 1) {
    i7044.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i7045[i + 0]) );
  }
  i7040.events = i7044
  i7040.halfPrecision = !!i7041[6]
  i7040._frameRate = i7041[7]
  i7040.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i7041[8], i7040.localBounds)
  i7040.hasMuscleCurves = !!i7041[9]
  var i7047 = i7041[10]
  var i7046 = []
  for(var i = 0; i < i7047.length; i += 1) {
    i7046.push( i7047[i + 0] );
  }
  i7040.clipMuscleConstant = i7046
  i7040.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i7041[11], i7040.clipBindingConstant)
  return i7040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i7050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i7051 = data
  i7050.path = i7051[0]
  i7050.hash = i7051[1]
  i7050.componentType = i7051[2]
  i7050.property = i7051[3]
  i7050.keys = i7051[4]
  var i7053 = i7051[5]
  var i7052 = []
  for(var i = 0; i < i7053.length; i += 1) {
    i7052.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i7053[i + 0]) );
  }
  i7050.objectReferenceKeys = i7052
  return i7050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i7056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i7057 = data
  i7056.time = i7057[0]
  request.r(i7057[1], i7057[2], 0, i7056, 'value')
  return i7056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i7060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i7061 = data
  i7060.functionName = i7061[0]
  i7060.floatParameter = i7061[1]
  i7060.intParameter = i7061[2]
  i7060.stringParameter = i7061[3]
  request.r(i7061[4], i7061[5], 0, i7060, 'objectReferenceParameter')
  i7060.time = i7061[6]
  return i7060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i7062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i7063 = data
  i7062.center = new pc.Vec3( i7063[0], i7063[1], i7063[2] )
  i7062.extends = new pc.Vec3( i7063[3], i7063[4], i7063[5] )
  return i7062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i7066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i7067 = data
  var i7069 = i7067[0]
  var i7068 = []
  for(var i = 0; i < i7069.length; i += 1) {
    i7068.push( i7069[i + 0] );
  }
  i7066.genericBindings = i7068
  var i7071 = i7067[1]
  var i7070 = []
  for(var i = 0; i < i7071.length; i += 1) {
    i7070.push( i7071[i + 0] );
  }
  i7066.pptrCurveMapping = i7070
  return i7066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i7072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i7073 = data
  i7072.name = i7073[0]
  i7072.ascent = i7073[1]
  i7072.originalLineHeight = i7073[2]
  i7072.fontSize = i7073[3]
  var i7075 = i7073[4]
  var i7074 = []
  for(var i = 0; i < i7075.length; i += 1) {
    i7074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i7075[i + 0]) );
  }
  i7072.characterInfo = i7074
  request.r(i7073[5], i7073[6], 0, i7072, 'texture')
  i7072.originalFontSize = i7073[7]
  return i7072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i7078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i7079 = data
  i7078.index = i7079[0]
  i7078.advance = i7079[1]
  i7078.bearing = i7079[2]
  i7078.glyphWidth = i7079[3]
  i7078.glyphHeight = i7079[4]
  i7078.minX = i7079[5]
  i7078.maxX = i7079[6]
  i7078.minY = i7079[7]
  i7078.maxY = i7079[8]
  i7078.uvBottomLeftX = i7079[9]
  i7078.uvBottomLeftY = i7079[10]
  i7078.uvBottomRightX = i7079[11]
  i7078.uvBottomRightY = i7079[12]
  i7078.uvTopLeftX = i7079[13]
  i7078.uvTopLeftY = i7079[14]
  i7078.uvTopRightX = i7079[15]
  i7078.uvTopRightY = i7079[16]
  return i7078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i7080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i7081 = data
  i7080.name = i7081[0]
  var i7083 = i7081[1]
  var i7082 = []
  for(var i = 0; i < i7083.length; i += 1) {
    i7082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i7083[i + 0]) );
  }
  i7080.layers = i7082
  var i7085 = i7081[2]
  var i7084 = []
  for(var i = 0; i < i7085.length; i += 1) {
    i7084.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i7085[i + 0]) );
  }
  i7080.parameters = i7084
  i7080.animationClips = i7081[3]
  i7080.avatarUnsupported = i7081[4]
  return i7080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i7088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i7089 = data
  i7088.name = i7089[0]
  i7088.defaultWeight = i7089[1]
  i7088.blendingMode = i7089[2]
  i7088.avatarMask = i7089[3]
  i7088.syncedLayerIndex = i7089[4]
  i7088.syncedLayerAffectsTiming = !!i7089[5]
  i7088.syncedLayers = i7089[6]
  i7088.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i7089[7], i7088.stateMachine)
  return i7088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i7090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i7091 = data
  i7090.id = i7091[0]
  i7090.name = i7091[1]
  i7090.path = i7091[2]
  var i7093 = i7091[3]
  var i7092 = []
  for(var i = 0; i < i7093.length; i += 1) {
    i7092.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i7093[i + 0]) );
  }
  i7090.states = i7092
  var i7095 = i7091[4]
  var i7094 = []
  for(var i = 0; i < i7095.length; i += 1) {
    i7094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i7095[i + 0]) );
  }
  i7090.machines = i7094
  var i7097 = i7091[5]
  var i7096 = []
  for(var i = 0; i < i7097.length; i += 1) {
    i7096.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i7097[i + 0]) );
  }
  i7090.entryStateTransitions = i7096
  var i7099 = i7091[6]
  var i7098 = []
  for(var i = 0; i < i7099.length; i += 1) {
    i7098.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i7099[i + 0]) );
  }
  i7090.exitStateTransitions = i7098
  var i7101 = i7091[7]
  var i7100 = []
  for(var i = 0; i < i7101.length; i += 1) {
    i7100.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7101[i + 0]) );
  }
  i7090.anyStateTransitions = i7100
  i7090.defaultStateId = i7091[8]
  return i7090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i7104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i7105 = data
  i7104.id = i7105[0]
  i7104.name = i7105[1]
  i7104.cycleOffset = i7105[2]
  i7104.cycleOffsetParameter = i7105[3]
  i7104.cycleOffsetParameterActive = !!i7105[4]
  i7104.mirror = !!i7105[5]
  i7104.mirrorParameter = i7105[6]
  i7104.mirrorParameterActive = !!i7105[7]
  i7104.motionId = i7105[8]
  i7104.nameHash = i7105[9]
  i7104.fullPathHash = i7105[10]
  i7104.speed = i7105[11]
  i7104.speedParameter = i7105[12]
  i7104.speedParameterActive = !!i7105[13]
  i7104.tag = i7105[14]
  i7104.tagHash = i7105[15]
  i7104.writeDefaultValues = !!i7105[16]
  var i7107 = i7105[17]
  var i7106 = []
  for(var i = 0; i < i7107.length; i += 2) {
  request.r(i7107[i + 0], i7107[i + 1], 2, i7106, '')
  }
  i7104.behaviours = i7106
  var i7109 = i7105[18]
  var i7108 = []
  for(var i = 0; i < i7109.length; i += 1) {
    i7108.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7109[i + 0]) );
  }
  i7104.transitions = i7108
  return i7104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i7114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i7115 = data
  i7114.fullPath = i7115[0]
  i7114.canTransitionToSelf = !!i7115[1]
  i7114.duration = i7115[2]
  i7114.exitTime = i7115[3]
  i7114.hasExitTime = !!i7115[4]
  i7114.hasFixedDuration = !!i7115[5]
  i7114.interruptionSource = i7115[6]
  i7114.offset = i7115[7]
  i7114.orderedInterruption = !!i7115[8]
  i7114.destinationStateId = i7115[9]
  i7114.isExit = !!i7115[10]
  i7114.mute = !!i7115[11]
  i7114.solo = !!i7115[12]
  var i7117 = i7115[13]
  var i7116 = []
  for(var i = 0; i < i7117.length; i += 1) {
    i7116.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i7117[i + 0]) );
  }
  i7114.conditions = i7116
  return i7114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i7122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i7123 = data
  i7122.destinationStateId = i7123[0]
  i7122.isExit = !!i7123[1]
  i7122.mute = !!i7123[2]
  i7122.solo = !!i7123[3]
  var i7125 = i7123[4]
  var i7124 = []
  for(var i = 0; i < i7125.length; i += 1) {
    i7124.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i7125[i + 0]) );
  }
  i7122.conditions = i7124
  return i7122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i7128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i7129 = data
  i7128.mode = i7129[0]
  i7128.parameter = i7129[1]
  i7128.threshold = i7129[2]
  return i7128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i7132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i7133 = data
  i7132.defaultBool = !!i7133[0]
  i7132.defaultFloat = i7133[1]
  i7132.defaultInt = i7133[2]
  i7132.name = i7133[3]
  i7132.nameHash = i7133[4]
  i7132.type = i7133[5]
  return i7132
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i7134 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i7135 = data
  i7134.useSafeMode = !!i7135[0]
  i7134.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i7135[1], i7134.safeModeOptions)
  i7134.timeScale = i7135[2]
  i7134.unscaledTimeScale = i7135[3]
  i7134.useSmoothDeltaTime = !!i7135[4]
  i7134.maxSmoothUnscaledTime = i7135[5]
  i7134.rewindCallbackMode = i7135[6]
  i7134.showUnityEditorReport = !!i7135[7]
  i7134.logBehaviour = i7135[8]
  i7134.drawGizmos = !!i7135[9]
  i7134.defaultRecyclable = !!i7135[10]
  i7134.defaultAutoPlay = i7135[11]
  i7134.defaultUpdateType = i7135[12]
  i7134.defaultTimeScaleIndependent = !!i7135[13]
  i7134.defaultEaseType = i7135[14]
  i7134.defaultEaseOvershootOrAmplitude = i7135[15]
  i7134.defaultEasePeriod = i7135[16]
  i7134.defaultAutoKill = !!i7135[17]
  i7134.defaultLoopType = i7135[18]
  i7134.debugMode = !!i7135[19]
  i7134.debugStoreTargetId = !!i7135[20]
  i7134.showPreviewPanel = !!i7135[21]
  i7134.storeSettingsLocation = i7135[22]
  i7134.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i7135[23], i7134.modules)
  i7134.createASMDEF = !!i7135[24]
  i7134.showPlayingTweens = !!i7135[25]
  i7134.showPausedTweens = !!i7135[26]
  return i7134
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i7136 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i7137 = data
  i7136.logBehaviour = i7137[0]
  i7136.nestedTweenFailureBehaviour = i7137[1]
  return i7136
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i7138 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i7139 = data
  i7138.showPanel = !!i7139[0]
  i7138.audioEnabled = !!i7139[1]
  i7138.physicsEnabled = !!i7139[2]
  i7138.physics2DEnabled = !!i7139[3]
  i7138.spriteEnabled = !!i7139[4]
  i7138.uiEnabled = !!i7139[5]
  i7138.textMeshProEnabled = !!i7139[6]
  i7138.tk2DEnabled = !!i7139[7]
  i7138.deAudioEnabled = !!i7139[8]
  i7138.deUnityExtendedEnabled = !!i7139[9]
  i7138.epoOutlineEnabled = !!i7139[10]
  return i7138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i7140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i7141 = data
  var i7143 = i7141[0]
  var i7142 = []
  for(var i = 0; i < i7143.length; i += 1) {
    i7142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i7143[i + 0]) );
  }
  i7140.files = i7142
  i7140.componentToPrefabIds = i7141[1]
  return i7140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i7146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i7147 = data
  i7146.path = i7147[0]
  request.r(i7147[1], i7147[2], 0, i7146, 'unityObject')
  return i7146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i7148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i7149 = data
  var i7151 = i7149[0]
  var i7150 = []
  for(var i = 0; i < i7151.length; i += 1) {
    i7150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i7151[i + 0]) );
  }
  i7148.scriptsExecutionOrder = i7150
  var i7153 = i7149[1]
  var i7152 = []
  for(var i = 0; i < i7153.length; i += 1) {
    i7152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i7153[i + 0]) );
  }
  i7148.sortingLayers = i7152
  var i7155 = i7149[2]
  var i7154 = []
  for(var i = 0; i < i7155.length; i += 1) {
    i7154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i7155[i + 0]) );
  }
  i7148.cullingLayers = i7154
  i7148.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i7149[3], i7148.timeSettings)
  i7148.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i7149[4], i7148.physicsSettings)
  i7148.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i7149[5], i7148.physics2DSettings)
  i7148.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7149[6], i7148.qualitySettings)
  i7148.enableRealtimeShadows = !!i7149[7]
  i7148.enableAutoInstancing = !!i7149[8]
  i7148.enableStaticBatching = !!i7149[9]
  i7148.enableDynamicBatching = !!i7149[10]
  i7148.usePreservativeDynamicBatching = !!i7149[11]
  i7148.lightmapEncodingQuality = i7149[12]
  i7148.desiredColorSpace = i7149[13]
  var i7157 = i7149[14]
  var i7156 = []
  for(var i = 0; i < i7157.length; i += 1) {
    i7156.push( i7157[i + 0] );
  }
  i7148.allTags = i7156
  return i7148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i7160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i7161 = data
  i7160.name = i7161[0]
  i7160.value = i7161[1]
  return i7160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i7164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i7165 = data
  i7164.id = i7165[0]
  i7164.name = i7165[1]
  i7164.value = i7165[2]
  return i7164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i7168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i7169 = data
  i7168.id = i7169[0]
  i7168.name = i7169[1]
  return i7168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i7170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i7171 = data
  i7170.fixedDeltaTime = i7171[0]
  i7170.maximumDeltaTime = i7171[1]
  i7170.timeScale = i7171[2]
  i7170.maximumParticleTimestep = i7171[3]
  return i7170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i7172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i7173 = data
  i7172.gravity = new pc.Vec3( i7173[0], i7173[1], i7173[2] )
  i7172.defaultSolverIterations = i7173[3]
  i7172.bounceThreshold = i7173[4]
  i7172.autoSyncTransforms = !!i7173[5]
  i7172.autoSimulation = !!i7173[6]
  var i7175 = i7173[7]
  var i7174 = []
  for(var i = 0; i < i7175.length; i += 1) {
    i7174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i7175[i + 0]) );
  }
  i7172.collisionMatrix = i7174
  return i7172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i7178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i7179 = data
  i7178.enabled = !!i7179[0]
  i7178.layerId = i7179[1]
  i7178.otherLayerId = i7179[2]
  return i7178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i7180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i7181 = data
  request.r(i7181[0], i7181[1], 0, i7180, 'material')
  i7180.gravity = new pc.Vec2( i7181[2], i7181[3] )
  i7180.positionIterations = i7181[4]
  i7180.velocityIterations = i7181[5]
  i7180.velocityThreshold = i7181[6]
  i7180.maxLinearCorrection = i7181[7]
  i7180.maxAngularCorrection = i7181[8]
  i7180.maxTranslationSpeed = i7181[9]
  i7180.maxRotationSpeed = i7181[10]
  i7180.baumgarteScale = i7181[11]
  i7180.baumgarteTOIScale = i7181[12]
  i7180.timeToSleep = i7181[13]
  i7180.linearSleepTolerance = i7181[14]
  i7180.angularSleepTolerance = i7181[15]
  i7180.defaultContactOffset = i7181[16]
  i7180.autoSimulation = !!i7181[17]
  i7180.queriesHitTriggers = !!i7181[18]
  i7180.queriesStartInColliders = !!i7181[19]
  i7180.callbacksOnDisable = !!i7181[20]
  i7180.reuseCollisionCallbacks = !!i7181[21]
  i7180.autoSyncTransforms = !!i7181[22]
  var i7183 = i7181[23]
  var i7182 = []
  for(var i = 0; i < i7183.length; i += 1) {
    i7182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i7183[i + 0]) );
  }
  i7180.collisionMatrix = i7182
  return i7180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i7186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i7187 = data
  i7186.enabled = !!i7187[0]
  i7186.layerId = i7187[1]
  i7186.otherLayerId = i7187[2]
  return i7186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i7188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i7189 = data
  var i7191 = i7189[0]
  var i7190 = []
  for(var i = 0; i < i7191.length; i += 1) {
    i7190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7191[i + 0]) );
  }
  i7188.qualityLevels = i7190
  var i7193 = i7189[1]
  var i7192 = []
  for(var i = 0; i < i7193.length; i += 1) {
    i7192.push( i7193[i + 0] );
  }
  i7188.names = i7192
  i7188.shadows = i7189[2]
  i7188.anisotropicFiltering = i7189[3]
  i7188.antiAliasing = i7189[4]
  i7188.lodBias = i7189[5]
  i7188.shadowCascades = i7189[6]
  i7188.shadowDistance = i7189[7]
  i7188.shadowmaskMode = i7189[8]
  i7188.shadowProjection = i7189[9]
  i7188.shadowResolution = i7189[10]
  i7188.softParticles = !!i7189[11]
  i7188.softVegetation = !!i7189[12]
  i7188.activeColorSpace = i7189[13]
  i7188.desiredColorSpace = i7189[14]
  i7188.masterTextureLimit = i7189[15]
  i7188.maxQueuedFrames = i7189[16]
  i7188.particleRaycastBudget = i7189[17]
  i7188.pixelLightCount = i7189[18]
  i7188.realtimeReflectionProbes = !!i7189[19]
  i7188.shadowCascade2Split = i7189[20]
  i7188.shadowCascade4Split = new pc.Vec3( i7189[21], i7189[22], i7189[23] )
  i7188.streamingMipmapsActive = !!i7189[24]
  i7188.vSyncCount = i7189[25]
  i7188.asyncUploadBufferSize = i7189[26]
  i7188.asyncUploadTimeSlice = i7189[27]
  i7188.billboardsFaceCameraPosition = !!i7189[28]
  i7188.shadowNearPlaneOffset = i7189[29]
  i7188.streamingMipmapsMemoryBudget = i7189[30]
  i7188.maximumLODLevel = i7189[31]
  i7188.streamingMipmapsAddAllCameras = !!i7189[32]
  i7188.streamingMipmapsMaxLevelReduction = i7189[33]
  i7188.streamingMipmapsRenderersPerFrame = i7189[34]
  i7188.resolutionScalingFixedDPIFactor = i7189[35]
  i7188.streamingMipmapsMaxFileIORequests = i7189[36]
  i7188.currentQualityLevel = i7189[37]
  return i7188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i7196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i7197 = data
  var i7199 = i7197[0]
  var i7198 = []
  for(var i = 0; i < i7199.length; i += 1) {
    i7198.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i7199[i + 0]) );
  }
  i7196.groups = i7198
  var i7201 = i7197[1]
  var i7200 = []
  for(var i = 0; i < i7201.length; i += 1) {
    i7200.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i7201[i + 0]) );
  }
  i7196.snapshots = i7200
  return i7196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i7204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i7205 = data
  i7204.id = i7205[0]
  i7204.childGroupIds = i7205[1]
  i7204.name = i7205[2]
  return i7204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i7208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i7209 = data
  i7208.id = i7209[0]
  var i7211 = i7209[1]
  var i7210 = []
  for(var i = 0; i < i7211.length; i += 1) {
    i7210.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i7211[i + 0]) );
  }
  i7208.parameters = i7210
  return i7208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i7214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i7215 = data
  i7214.name = i7215[0]
  i7214.value = i7215[1]
  return i7214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i7218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i7219 = data
  i7218.weight = i7219[0]
  i7218.vertices = i7219[1]
  i7218.normals = i7219[2]
  i7218.tangents = i7219[3]
  return i7218
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[97],"98":[64],"99":[100],"101":[100],"102":[100],"103":[100],"104":[100],"105":[100],"106":[100],"107":[48],"108":[48],"109":[48],"110":[48],"111":[48],"112":[48],"113":[48],"114":[48],"115":[48],"116":[48],"117":[48],"118":[48],"119":[48],"120":[64],"121":[122],"123":[124],"125":[124],"75":[69],"126":[31],"127":[9],"36":[33],"128":[9],"129":[130],"131":[130],"40":[14],"58":[33],"132":[9],"29":[9],"133":[69],"134":[69],"78":[75],"70":[79,69],"135":[69],"77":[75],"136":[69],"137":[69],"138":[69],"139":[69],"140":[69],"141":[69],"142":[69],"143":[69],"144":[69],"145":[79,69],"146":[69],"147":[69],"148":[69],"149":[69],"71":[79,69],"150":[69],"151":[83],"152":[83],"84":[83],"153":[83],"154":[64],"155":[64]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level1_Hair_Playable","UnityEngine.SpriteRenderer","BasicDrag","OutlinePulse","UnityEngine.GameObject","BD_CameraFollow","DG.Tweening.DOTweenAnimation","UnityEngine.Sprite","UnityEngine.AudioClip","BD_Progress","BD_ProgressHelper","DraggableBrush","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","BD_AnimationHelper","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.TrailRenderer","UnityEngine.LineRenderer","StaticFixedPipe","UnityEngine.BoxCollider2D","BD_Clamp","BD_ItemPick","BD_Sticky","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.SpriteMask","PlayTweenOnHit","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","InteractableBones","WaypointFollower","UnityEditor.Audio.AudioMixerGroupController","BD_Action","BD_ToolRotate","UnityEngine.Rigidbody2D","BugKill_Tip","ActionOnTap","BD_SpriteChange","BD_AnimatorDrag","PlaceItem","BD_Audio","Level1_HairAnim","BD_TapandHold","TapandHold_Simple","SpriteButton","DestroyObj","MenuLevel","IntroLevelAnim","Level_PoseController","PlayableRouter","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Fold","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "11.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "31Aug2026_Level1_1_CompleteLevel_BiggerIcons_v1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1721";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4258";

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

Deserializers.buildID = "87e9efe5-50c2-4f1d-8e5d-3541edc3c6b1";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

