var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i12502 = root || request.c( 'UnityEngine.JointSpring' )
  var i12503 = data
  i12502.spring = i12503[0]
  i12502.damper = i12503[1]
  i12502.targetPosition = i12503[2]
  return i12502
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i12504 = root || request.c( 'UnityEngine.JointMotor' )
  var i12505 = data
  i12504.m_TargetVelocity = i12505[0]
  i12504.m_Force = i12505[1]
  i12504.m_FreeSpin = i12505[2]
  return i12504
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i12506 = root || request.c( 'UnityEngine.JointLimits' )
  var i12507 = data
  i12506.m_Min = i12507[0]
  i12506.m_Max = i12507[1]
  i12506.m_Bounciness = i12507[2]
  i12506.m_BounceMinVelocity = i12507[3]
  i12506.m_ContactDistance = i12507[4]
  i12506.minBounce = i12507[5]
  i12506.maxBounce = i12507[6]
  return i12506
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i12508 = root || request.c( 'UnityEngine.JointDrive' )
  var i12509 = data
  i12508.m_PositionSpring = i12509[0]
  i12508.m_PositionDamper = i12509[1]
  i12508.m_MaximumForce = i12509[2]
  i12508.m_UseAcceleration = i12509[3]
  return i12508
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i12510 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i12511 = data
  i12510.m_Spring = i12511[0]
  i12510.m_Damper = i12511[1]
  return i12510
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i12512 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i12513 = data
  i12512.m_Limit = i12513[0]
  i12512.m_Bounciness = i12513[1]
  i12512.m_ContactDistance = i12513[2]
  return i12512
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i12514 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i12515 = data
  i12514.m_ExtremumSlip = i12515[0]
  i12514.m_ExtremumValue = i12515[1]
  i12514.m_AsymptoteSlip = i12515[2]
  i12514.m_AsymptoteValue = i12515[3]
  i12514.m_Stiffness = i12515[4]
  return i12514
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i12516 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i12517 = data
  i12516.m_LowerAngle = i12517[0]
  i12516.m_UpperAngle = i12517[1]
  return i12516
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i12518 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i12519 = data
  i12518.m_MotorSpeed = i12519[0]
  i12518.m_MaximumMotorTorque = i12519[1]
  return i12518
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i12520 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i12521 = data
  i12520.m_DampingRatio = i12521[0]
  i12520.m_Frequency = i12521[1]
  i12520.m_Angle = i12521[2]
  return i12520
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i12522 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i12523 = data
  i12522.m_LowerTranslation = i12523[0]
  i12522.m_UpperTranslation = i12523[1]
  return i12522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i12524 = root || new pc.UnityMaterial()
  var i12525 = data
  i12524.name = i12525[0]
  request.r(i12525[1], i12525[2], 0, i12524, 'shader')
  i12524.renderQueue = i12525[3]
  i12524.enableInstancing = !!i12525[4]
  var i12527 = i12525[5]
  var i12526 = []
  for(var i = 0; i < i12527.length; i += 1) {
    i12526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i12527[i + 0]) );
  }
  i12524.floatParameters = i12526
  var i12529 = i12525[6]
  var i12528 = []
  for(var i = 0; i < i12529.length; i += 1) {
    i12528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i12529[i + 0]) );
  }
  i12524.colorParameters = i12528
  var i12531 = i12525[7]
  var i12530 = []
  for(var i = 0; i < i12531.length; i += 1) {
    i12530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i12531[i + 0]) );
  }
  i12524.vectorParameters = i12530
  var i12533 = i12525[8]
  var i12532 = []
  for(var i = 0; i < i12533.length; i += 1) {
    i12532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i12533[i + 0]) );
  }
  i12524.textureParameters = i12532
  var i12535 = i12525[9]
  var i12534 = []
  for(var i = 0; i < i12535.length; i += 1) {
    i12534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i12535[i + 0]) );
  }
  i12524.materialFlags = i12534
  return i12524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i12538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i12539 = data
  i12538.name = i12539[0]
  i12538.value = i12539[1]
  return i12538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i12542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i12543 = data
  i12542.name = i12543[0]
  i12542.value = new pc.Color(i12543[1], i12543[2], i12543[3], i12543[4])
  return i12542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i12546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i12547 = data
  i12546.name = i12547[0]
  i12546.value = new pc.Vec4( i12547[1], i12547[2], i12547[3], i12547[4] )
  return i12546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i12550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i12551 = data
  i12550.name = i12551[0]
  request.r(i12551[1], i12551[2], 0, i12550, 'value')
  return i12550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i12554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i12555 = data
  i12554.name = i12555[0]
  i12554.enabled = !!i12555[1]
  return i12554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i12556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i12557 = data
  i12556.name = i12557[0]
  i12556.width = i12557[1]
  i12556.height = i12557[2]
  i12556.mipmapCount = i12557[3]
  i12556.anisoLevel = i12557[4]
  i12556.filterMode = i12557[5]
  i12556.hdr = !!i12557[6]
  i12556.format = i12557[7]
  i12556.wrapMode = i12557[8]
  i12556.alphaIsTransparency = !!i12557[9]
  i12556.alphaSource = i12557[10]
  i12556.graphicsFormat = i12557[11]
  i12556.sRGBTexture = !!i12557[12]
  i12556.desiredColorSpace = i12557[13]
  i12556.wrapU = i12557[14]
  i12556.wrapV = i12557[15]
  return i12556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i12558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i12559 = data
  i12558.name = i12559[0]
  i12558.halfPrecision = !!i12559[1]
  i12558.useSimplification = !!i12559[2]
  i12558.useUInt32IndexFormat = !!i12559[3]
  i12558.vertexCount = i12559[4]
  i12558.aabb = i12559[5]
  var i12561 = i12559[6]
  var i12560 = []
  for(var i = 0; i < i12561.length; i += 1) {
    i12560.push( !!i12561[i + 0] );
  }
  i12558.streams = i12560
  i12558.vertices = i12559[7]
  var i12563 = i12559[8]
  var i12562 = []
  for(var i = 0; i < i12563.length; i += 1) {
    i12562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i12563[i + 0]) );
  }
  i12558.subMeshes = i12562
  var i12565 = i12559[9]
  var i12564 = []
  for(var i = 0; i < i12565.length; i += 16) {
    i12564.push( new pc.Mat4().setData(i12565[i + 0], i12565[i + 1], i12565[i + 2], i12565[i + 3],  i12565[i + 4], i12565[i + 5], i12565[i + 6], i12565[i + 7],  i12565[i + 8], i12565[i + 9], i12565[i + 10], i12565[i + 11],  i12565[i + 12], i12565[i + 13], i12565[i + 14], i12565[i + 15]) );
  }
  i12558.bindposes = i12564
  var i12567 = i12559[10]
  var i12566 = []
  for(var i = 0; i < i12567.length; i += 1) {
    i12566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i12567[i + 0]) );
  }
  i12558.blendShapes = i12566
  return i12558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i12572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i12573 = data
  i12572.triangles = i12573[0]
  return i12572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i12578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i12579 = data
  i12578.name = i12579[0]
  var i12581 = i12579[1]
  var i12580 = []
  for(var i = 0; i < i12581.length; i += 1) {
    i12580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i12581[i + 0]) );
  }
  i12578.frames = i12580
  return i12578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i12582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i12583 = data
  i12582.position = new pc.Vec3( i12583[0], i12583[1], i12583[2] )
  i12582.scale = new pc.Vec3( i12583[3], i12583[4], i12583[5] )
  i12582.rotation = new pc.Quat(i12583[6], i12583[7], i12583[8], i12583[9])
  return i12582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i12584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i12585 = data
  i12584.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i12585[0], i12584.main)
  i12584.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i12585[1], i12584.colorBySpeed)
  i12584.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i12585[2], i12584.colorOverLifetime)
  i12584.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i12585[3], i12584.emission)
  i12584.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i12585[4], i12584.rotationBySpeed)
  i12584.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i12585[5], i12584.rotationOverLifetime)
  i12584.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i12585[6], i12584.shape)
  i12584.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i12585[7], i12584.sizeBySpeed)
  i12584.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i12585[8], i12584.sizeOverLifetime)
  i12584.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i12585[9], i12584.textureSheetAnimation)
  i12584.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i12585[10], i12584.velocityOverLifetime)
  i12584.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i12585[11], i12584.noise)
  i12584.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i12585[12], i12584.inheritVelocity)
  i12584.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i12585[13], i12584.forceOverLifetime)
  i12584.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i12585[14], i12584.limitVelocityOverLifetime)
  i12584.useAutoRandomSeed = !!i12585[15]
  i12584.randomSeed = i12585[16]
  return i12584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i12586 = root || new pc.ParticleSystemMain()
  var i12587 = data
  i12586.duration = i12587[0]
  i12586.loop = !!i12587[1]
  i12586.prewarm = !!i12587[2]
  i12586.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12587[3], i12586.startDelay)
  i12586.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12587[4], i12586.startLifetime)
  i12586.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12587[5], i12586.startSpeed)
  i12586.startSize3D = !!i12587[6]
  i12586.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12587[7], i12586.startSizeX)
  i12586.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12587[8], i12586.startSizeY)
  i12586.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12587[9], i12586.startSizeZ)
  i12586.startRotation3D = !!i12587[10]
  i12586.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12587[11], i12586.startRotationX)
  i12586.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12587[12], i12586.startRotationY)
  i12586.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12587[13], i12586.startRotationZ)
  i12586.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i12587[14], i12586.startColor)
  i12586.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12587[15], i12586.gravityModifier)
  i12586.simulationSpace = i12587[16]
  request.r(i12587[17], i12587[18], 0, i12586, 'customSimulationSpace')
  i12586.simulationSpeed = i12587[19]
  i12586.useUnscaledTime = !!i12587[20]
  i12586.scalingMode = i12587[21]
  i12586.playOnAwake = !!i12587[22]
  i12586.maxParticles = i12587[23]
  i12586.emitterVelocityMode = i12587[24]
  i12586.stopAction = i12587[25]
  return i12586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i12588 = root || new pc.MinMaxCurve()
  var i12589 = data
  i12588.mode = i12589[0]
  i12588.curveMin = new pc.AnimationCurve( { keys_flow: i12589[1] } )
  i12588.curveMax = new pc.AnimationCurve( { keys_flow: i12589[2] } )
  i12588.curveMultiplier = i12589[3]
  i12588.constantMin = i12589[4]
  i12588.constantMax = i12589[5]
  return i12588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i12590 = root || new pc.MinMaxGradient()
  var i12591 = data
  i12590.mode = i12591[0]
  i12590.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i12591[1], i12590.gradientMin)
  i12590.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i12591[2], i12590.gradientMax)
  i12590.colorMin = new pc.Color(i12591[3], i12591[4], i12591[5], i12591[6])
  i12590.colorMax = new pc.Color(i12591[7], i12591[8], i12591[9], i12591[10])
  return i12590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i12592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i12593 = data
  i12592.mode = i12593[0]
  var i12595 = i12593[1]
  var i12594 = []
  for(var i = 0; i < i12595.length; i += 1) {
    i12594.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i12595[i + 0]) );
  }
  i12592.colorKeys = i12594
  var i12597 = i12593[2]
  var i12596 = []
  for(var i = 0; i < i12597.length; i += 1) {
    i12596.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i12597[i + 0]) );
  }
  i12592.alphaKeys = i12596
  return i12592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i12598 = root || new pc.ParticleSystemColorBySpeed()
  var i12599 = data
  i12598.enabled = !!i12599[0]
  i12598.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i12599[1], i12598.color)
  i12598.range = new pc.Vec2( i12599[2], i12599[3] )
  return i12598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i12602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i12603 = data
  i12602.color = new pc.Color(i12603[0], i12603[1], i12603[2], i12603[3])
  i12602.time = i12603[4]
  return i12602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i12606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i12607 = data
  i12606.alpha = i12607[0]
  i12606.time = i12607[1]
  return i12606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i12608 = root || new pc.ParticleSystemColorOverLifetime()
  var i12609 = data
  i12608.enabled = !!i12609[0]
  i12608.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i12609[1], i12608.color)
  return i12608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i12610 = root || new pc.ParticleSystemEmitter()
  var i12611 = data
  i12610.enabled = !!i12611[0]
  i12610.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12611[1], i12610.rateOverTime)
  i12610.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12611[2], i12610.rateOverDistance)
  var i12613 = i12611[3]
  var i12612 = []
  for(var i = 0; i < i12613.length; i += 1) {
    i12612.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i12613[i + 0]) );
  }
  i12610.bursts = i12612
  return i12610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i12616 = root || new pc.ParticleSystemBurst()
  var i12617 = data
  i12616.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12617[0], i12616.count)
  i12616.cycleCount = i12617[1]
  i12616.minCount = i12617[2]
  i12616.maxCount = i12617[3]
  i12616.repeatInterval = i12617[4]
  i12616.time = i12617[5]
  return i12616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i12618 = root || new pc.ParticleSystemRotationBySpeed()
  var i12619 = data
  i12618.enabled = !!i12619[0]
  i12618.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12619[1], i12618.x)
  i12618.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12619[2], i12618.y)
  i12618.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12619[3], i12618.z)
  i12618.separateAxes = !!i12619[4]
  i12618.range = new pc.Vec2( i12619[5], i12619[6] )
  return i12618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i12620 = root || new pc.ParticleSystemRotationOverLifetime()
  var i12621 = data
  i12620.enabled = !!i12621[0]
  i12620.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12621[1], i12620.x)
  i12620.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12621[2], i12620.y)
  i12620.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12621[3], i12620.z)
  i12620.separateAxes = !!i12621[4]
  return i12620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i12622 = root || new pc.ParticleSystemShape()
  var i12623 = data
  i12622.enabled = !!i12623[0]
  i12622.shapeType = i12623[1]
  i12622.randomDirectionAmount = i12623[2]
  i12622.sphericalDirectionAmount = i12623[3]
  i12622.randomPositionAmount = i12623[4]
  i12622.alignToDirection = !!i12623[5]
  i12622.radius = i12623[6]
  i12622.radiusMode = i12623[7]
  i12622.radiusSpread = i12623[8]
  i12622.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12623[9], i12622.radiusSpeed)
  i12622.radiusThickness = i12623[10]
  i12622.angle = i12623[11]
  i12622.length = i12623[12]
  i12622.boxThickness = new pc.Vec3( i12623[13], i12623[14], i12623[15] )
  i12622.meshShapeType = i12623[16]
  request.r(i12623[17], i12623[18], 0, i12622, 'mesh')
  request.r(i12623[19], i12623[20], 0, i12622, 'meshRenderer')
  request.r(i12623[21], i12623[22], 0, i12622, 'skinnedMeshRenderer')
  i12622.useMeshMaterialIndex = !!i12623[23]
  i12622.meshMaterialIndex = i12623[24]
  i12622.useMeshColors = !!i12623[25]
  i12622.normalOffset = i12623[26]
  i12622.arc = i12623[27]
  i12622.arcMode = i12623[28]
  i12622.arcSpread = i12623[29]
  i12622.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12623[30], i12622.arcSpeed)
  i12622.donutRadius = i12623[31]
  i12622.position = new pc.Vec3( i12623[32], i12623[33], i12623[34] )
  i12622.rotation = new pc.Vec3( i12623[35], i12623[36], i12623[37] )
  i12622.scale = new pc.Vec3( i12623[38], i12623[39], i12623[40] )
  return i12622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i12624 = root || new pc.ParticleSystemSizeBySpeed()
  var i12625 = data
  i12624.enabled = !!i12625[0]
  i12624.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12625[1], i12624.x)
  i12624.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12625[2], i12624.y)
  i12624.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12625[3], i12624.z)
  i12624.separateAxes = !!i12625[4]
  i12624.range = new pc.Vec2( i12625[5], i12625[6] )
  return i12624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i12626 = root || new pc.ParticleSystemSizeOverLifetime()
  var i12627 = data
  i12626.enabled = !!i12627[0]
  i12626.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12627[1], i12626.x)
  i12626.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12627[2], i12626.y)
  i12626.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12627[3], i12626.z)
  i12626.separateAxes = !!i12627[4]
  return i12626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i12628 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i12629 = data
  i12628.enabled = !!i12629[0]
  i12628.mode = i12629[1]
  i12628.animation = i12629[2]
  i12628.numTilesX = i12629[3]
  i12628.numTilesY = i12629[4]
  i12628.useRandomRow = !!i12629[5]
  i12628.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12629[6], i12628.frameOverTime)
  i12628.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12629[7], i12628.startFrame)
  i12628.cycleCount = i12629[8]
  i12628.rowIndex = i12629[9]
  i12628.flipU = i12629[10]
  i12628.flipV = i12629[11]
  i12628.spriteCount = i12629[12]
  var i12631 = i12629[13]
  var i12630 = []
  for(var i = 0; i < i12631.length; i += 2) {
  request.r(i12631[i + 0], i12631[i + 1], 2, i12630, '')
  }
  i12628.sprites = i12630
  return i12628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i12634 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i12635 = data
  i12634.enabled = !!i12635[0]
  i12634.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12635[1], i12634.x)
  i12634.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12635[2], i12634.y)
  i12634.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12635[3], i12634.z)
  i12634.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12635[4], i12634.radial)
  i12634.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12635[5], i12634.speedModifier)
  i12634.space = i12635[6]
  i12634.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12635[7], i12634.orbitalX)
  i12634.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12635[8], i12634.orbitalY)
  i12634.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12635[9], i12634.orbitalZ)
  i12634.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12635[10], i12634.orbitalOffsetX)
  i12634.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12635[11], i12634.orbitalOffsetY)
  i12634.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12635[12], i12634.orbitalOffsetZ)
  return i12634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i12636 = root || new pc.ParticleSystemNoise()
  var i12637 = data
  i12636.enabled = !!i12637[0]
  i12636.separateAxes = !!i12637[1]
  i12636.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12637[2], i12636.strengthX)
  i12636.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12637[3], i12636.strengthY)
  i12636.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12637[4], i12636.strengthZ)
  i12636.frequency = i12637[5]
  i12636.damping = !!i12637[6]
  i12636.octaveCount = i12637[7]
  i12636.octaveMultiplier = i12637[8]
  i12636.octaveScale = i12637[9]
  i12636.quality = i12637[10]
  i12636.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12637[11], i12636.scrollSpeed)
  i12636.scrollSpeedMultiplier = i12637[12]
  i12636.remapEnabled = !!i12637[13]
  i12636.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12637[14], i12636.remapX)
  i12636.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12637[15], i12636.remapY)
  i12636.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12637[16], i12636.remapZ)
  i12636.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12637[17], i12636.positionAmount)
  i12636.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12637[18], i12636.rotationAmount)
  i12636.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12637[19], i12636.sizeAmount)
  return i12636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i12638 = root || new pc.ParticleSystemInheritVelocity()
  var i12639 = data
  i12638.enabled = !!i12639[0]
  i12638.mode = i12639[1]
  i12638.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12639[2], i12638.curve)
  return i12638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i12640 = root || new pc.ParticleSystemForceOverLifetime()
  var i12641 = data
  i12640.enabled = !!i12641[0]
  i12640.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12641[1], i12640.x)
  i12640.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12641[2], i12640.y)
  i12640.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12641[3], i12640.z)
  i12640.space = i12641[4]
  i12640.randomized = !!i12641[5]
  return i12640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i12642 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i12643 = data
  i12642.enabled = !!i12643[0]
  i12642.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12643[1], i12642.limit)
  i12642.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12643[2], i12642.limitX)
  i12642.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12643[3], i12642.limitY)
  i12642.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12643[4], i12642.limitZ)
  i12642.dampen = i12643[5]
  i12642.separateAxes = !!i12643[6]
  i12642.space = i12643[7]
  i12642.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12643[8], i12642.drag)
  i12642.multiplyDragByParticleSize = !!i12643[9]
  i12642.multiplyDragByParticleVelocity = !!i12643[10]
  return i12642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i12644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i12645 = data
  request.r(i12645[0], i12645[1], 0, i12644, 'mesh')
  i12644.meshCount = i12645[2]
  i12644.activeVertexStreamsCount = i12645[3]
  i12644.alignment = i12645[4]
  i12644.renderMode = i12645[5]
  i12644.sortMode = i12645[6]
  i12644.lengthScale = i12645[7]
  i12644.velocityScale = i12645[8]
  i12644.cameraVelocityScale = i12645[9]
  i12644.normalDirection = i12645[10]
  i12644.sortingFudge = i12645[11]
  i12644.minParticleSize = i12645[12]
  i12644.maxParticleSize = i12645[13]
  i12644.pivot = new pc.Vec3( i12645[14], i12645[15], i12645[16] )
  request.r(i12645[17], i12645[18], 0, i12644, 'trailMaterial')
  i12644.applyActiveColorSpace = !!i12645[19]
  i12644.enabled = !!i12645[20]
  request.r(i12645[21], i12645[22], 0, i12644, 'sharedMaterial')
  var i12647 = i12645[23]
  var i12646 = []
  for(var i = 0; i < i12647.length; i += 2) {
  request.r(i12647[i + 0], i12647[i + 1], 2, i12646, '')
  }
  i12644.sharedMaterials = i12646
  i12644.receiveShadows = !!i12645[24]
  i12644.shadowCastingMode = i12645[25]
  i12644.sortingLayerID = i12645[26]
  i12644.sortingOrder = i12645[27]
  i12644.lightmapIndex = i12645[28]
  i12644.lightmapSceneIndex = i12645[29]
  i12644.lightmapScaleOffset = new pc.Vec4( i12645[30], i12645[31], i12645[32], i12645[33] )
  i12644.lightProbeUsage = i12645[34]
  i12644.reflectionProbeUsage = i12645[35]
  return i12644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i12650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i12651 = data
  i12650.name = i12651[0]
  i12650.tagId = i12651[1]
  i12650.enabled = !!i12651[2]
  i12650.isStatic = !!i12651[3]
  i12650.layer = i12651[4]
  return i12650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i12652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i12653 = data
  i12652.pivot = new pc.Vec2( i12653[0], i12653[1] )
  i12652.anchorMin = new pc.Vec2( i12653[2], i12653[3] )
  i12652.anchorMax = new pc.Vec2( i12653[4], i12653[5] )
  i12652.sizeDelta = new pc.Vec2( i12653[6], i12653[7] )
  i12652.anchoredPosition3D = new pc.Vec3( i12653[8], i12653[9], i12653[10] )
  i12652.rotation = new pc.Quat(i12653[11], i12653[12], i12653[13], i12653[14])
  i12652.scale = new pc.Vec3( i12653[15], i12653[16], i12653[17] )
  return i12652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i12654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i12655 = data
  i12654.planeDistance = i12655[0]
  i12654.referencePixelsPerUnit = i12655[1]
  i12654.isFallbackOverlay = !!i12655[2]
  i12654.renderMode = i12655[3]
  i12654.renderOrder = i12655[4]
  i12654.sortingLayerName = i12655[5]
  i12654.sortingOrder = i12655[6]
  i12654.scaleFactor = i12655[7]
  request.r(i12655[8], i12655[9], 0, i12654, 'worldCamera')
  i12654.overrideSorting = !!i12655[10]
  i12654.pixelPerfect = !!i12655[11]
  i12654.targetDisplay = i12655[12]
  i12654.overridePixelPerfect = !!i12655[13]
  i12654.enabled = !!i12655[14]
  return i12654
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i12656 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i12657 = data
  i12656.m_UiScaleMode = i12657[0]
  i12656.m_ReferencePixelsPerUnit = i12657[1]
  i12656.m_ScaleFactor = i12657[2]
  i12656.m_ReferenceResolution = new pc.Vec2( i12657[3], i12657[4] )
  i12656.m_ScreenMatchMode = i12657[5]
  i12656.m_MatchWidthOrHeight = i12657[6]
  i12656.m_PhysicalUnit = i12657[7]
  i12656.m_FallbackScreenDPI = i12657[8]
  i12656.m_DefaultSpriteDPI = i12657[9]
  i12656.m_DynamicPixelsPerUnit = i12657[10]
  i12656.m_PresetInfoIsWorld = !!i12657[11]
  return i12656
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i12658 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i12659 = data
  i12658.m_IgnoreReversedGraphics = !!i12659[0]
  i12658.m_BlockingObjects = i12659[1]
  i12658.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i12659[2] )
  return i12658
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i12660 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i12661 = data
  i12660.targetIsSelf = !!i12661[0]
  request.r(i12661[1], i12661[2], 0, i12660, 'targetGO')
  i12660.tweenTargetIsTargetGO = !!i12661[3]
  i12660.delay = i12661[4]
  i12660.duration = i12661[5]
  i12660.easeType = i12661[6]
  i12660.easeCurve = new pc.AnimationCurve( { keys_flow: i12661[7] } )
  i12660.loopType = i12661[8]
  i12660.loops = i12661[9]
  i12660.id = i12661[10]
  i12660.isRelative = !!i12661[11]
  i12660.isFrom = !!i12661[12]
  i12660.isIndependentUpdate = !!i12661[13]
  i12660.autoKill = !!i12661[14]
  i12660.autoGenerate = !!i12661[15]
  i12660.isActive = !!i12661[16]
  i12660.isValid = !!i12661[17]
  request.r(i12661[18], i12661[19], 0, i12660, 'target')
  i12660.animationType = i12661[20]
  i12660.targetType = i12661[21]
  i12660.forcedTargetType = i12661[22]
  i12660.autoPlay = !!i12661[23]
  i12660.useTargetAsV3 = !!i12661[24]
  i12660.endValueFloat = i12661[25]
  i12660.endValueV3 = new pc.Vec3( i12661[26], i12661[27], i12661[28] )
  i12660.endValueV2 = new pc.Vec2( i12661[29], i12661[30] )
  i12660.endValueColor = new pc.Color(i12661[31], i12661[32], i12661[33], i12661[34])
  i12660.endValueString = i12661[35]
  i12660.endValueRect = UnityEngine.Rect.MinMaxRect(i12661[36], i12661[37], i12661[38], i12661[39])
  request.r(i12661[40], i12661[41], 0, i12660, 'endValueTransform')
  i12660.optionalBool0 = !!i12661[42]
  i12660.optionalBool1 = !!i12661[43]
  i12660.optionalFloat0 = i12661[44]
  i12660.optionalInt0 = i12661[45]
  i12660.optionalRotationMode = i12661[46]
  i12660.optionalScrambleMode = i12661[47]
  i12660.optionalShakeRandomnessMode = i12661[48]
  i12660.optionalString = i12661[49]
  i12660.updateType = i12661[50]
  i12660.isSpeedBased = !!i12661[51]
  i12660.hasOnStart = !!i12661[52]
  i12660.hasOnPlay = !!i12661[53]
  i12660.hasOnUpdate = !!i12661[54]
  i12660.hasOnStepComplete = !!i12661[55]
  i12660.hasOnComplete = !!i12661[56]
  i12660.hasOnTweenCreated = !!i12661[57]
  i12660.hasOnRewind = !!i12661[58]
  i12660.onStart = request.d('UnityEngine.Events.UnityEvent', i12661[59], i12660.onStart)
  i12660.onPlay = request.d('UnityEngine.Events.UnityEvent', i12661[60], i12660.onPlay)
  i12660.onUpdate = request.d('UnityEngine.Events.UnityEvent', i12661[61], i12660.onUpdate)
  i12660.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i12661[62], i12660.onStepComplete)
  i12660.onComplete = request.d('UnityEngine.Events.UnityEvent', i12661[63], i12660.onComplete)
  i12660.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i12661[64], i12660.onTweenCreated)
  i12660.onRewind = request.d('UnityEngine.Events.UnityEvent', i12661[65], i12660.onRewind)
  return i12660
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i12662 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i12663 = data
  i12662.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i12663[0], i12662.m_PersistentCalls)
  return i12662
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i12664 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i12665 = data
  var i12667 = i12665[0]
  var i12666 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i12667.length; i += 1) {
    i12666.add(request.d('UnityEngine.Events.PersistentCall', i12667[i + 0]));
  }
  i12664.m_Calls = i12666
  return i12664
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i12670 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i12671 = data
  request.r(i12671[0], i12671[1], 0, i12670, 'm_Target')
  i12670.m_TargetAssemblyTypeName = i12671[2]
  i12670.m_MethodName = i12671[3]
  i12670.m_Mode = i12671[4]
  i12670.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i12671[5], i12670.m_Arguments)
  i12670.m_CallState = i12671[6]
  return i12670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i12672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i12673 = data
  i12672.cullTransparentMesh = !!i12673[0]
  return i12672
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i12674 = root || request.c( 'UnityEngine.UI.Image' )
  var i12675 = data
  request.r(i12675[0], i12675[1], 0, i12674, 'm_Sprite')
  i12674.m_Type = i12675[2]
  i12674.m_PreserveAspect = !!i12675[3]
  i12674.m_FillCenter = !!i12675[4]
  i12674.m_FillMethod = i12675[5]
  i12674.m_FillAmount = i12675[6]
  i12674.m_FillClockwise = !!i12675[7]
  i12674.m_FillOrigin = i12675[8]
  i12674.m_UseSpriteMesh = !!i12675[9]
  i12674.m_PixelsPerUnitMultiplier = i12675[10]
  request.r(i12675[11], i12675[12], 0, i12674, 'm_Material')
  i12674.m_Maskable = !!i12675[13]
  i12674.m_Color = new pc.Color(i12675[14], i12675[15], i12675[16], i12675[17])
  i12674.m_RaycastTarget = !!i12675[18]
  i12674.m_RaycastPadding = new pc.Vec4( i12675[19], i12675[20], i12675[21], i12675[22] )
  return i12674
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i12676 = root || request.c( 'UnityEngine.UI.Text' )
  var i12677 = data
  i12676.m_FontData = request.d('UnityEngine.UI.FontData', i12677[0], i12676.m_FontData)
  i12676.m_Text = i12677[1]
  request.r(i12677[2], i12677[3], 0, i12676, 'm_Material')
  i12676.m_Maskable = !!i12677[4]
  i12676.m_Color = new pc.Color(i12677[5], i12677[6], i12677[7], i12677[8])
  i12676.m_RaycastTarget = !!i12677[9]
  i12676.m_RaycastPadding = new pc.Vec4( i12677[10], i12677[11], i12677[12], i12677[13] )
  return i12676
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i12678 = root || request.c( 'UnityEngine.UI.FontData' )
  var i12679 = data
  request.r(i12679[0], i12679[1], 0, i12678, 'm_Font')
  i12678.m_FontSize = i12679[2]
  i12678.m_FontStyle = i12679[3]
  i12678.m_BestFit = !!i12679[4]
  i12678.m_MinSize = i12679[5]
  i12678.m_MaxSize = i12679[6]
  i12678.m_Alignment = i12679[7]
  i12678.m_AlignByGeometry = !!i12679[8]
  i12678.m_RichText = !!i12679[9]
  i12678.m_HorizontalOverflow = i12679[10]
  i12678.m_VerticalOverflow = i12679[11]
  i12678.m_LineSpacing = i12679[12]
  return i12678
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i12680 = root || request.c( 'UnityEngine.UI.Button' )
  var i12681 = data
  i12680.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i12681[0], i12680.m_OnClick)
  i12680.m_Navigation = request.d('UnityEngine.UI.Navigation', i12681[1], i12680.m_Navigation)
  i12680.m_Transition = i12681[2]
  i12680.m_Colors = request.d('UnityEngine.UI.ColorBlock', i12681[3], i12680.m_Colors)
  i12680.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i12681[4], i12680.m_SpriteState)
  i12680.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i12681[5], i12680.m_AnimationTriggers)
  i12680.m_Interactable = !!i12681[6]
  request.r(i12681[7], i12681[8], 0, i12680, 'm_TargetGraphic')
  return i12680
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i12682 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i12683 = data
  i12682.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i12683[0], i12682.m_PersistentCalls)
  return i12682
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i12684 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i12685 = data
  request.r(i12685[0], i12685[1], 0, i12684, 'm_ObjectArgument')
  i12684.m_ObjectArgumentAssemblyTypeName = i12685[2]
  i12684.m_IntArgument = i12685[3]
  i12684.m_FloatArgument = i12685[4]
  i12684.m_StringArgument = i12685[5]
  i12684.m_BoolArgument = !!i12685[6]
  return i12684
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i12686 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i12687 = data
  i12686.m_Mode = i12687[0]
  i12686.m_WrapAround = !!i12687[1]
  request.r(i12687[2], i12687[3], 0, i12686, 'm_SelectOnUp')
  request.r(i12687[4], i12687[5], 0, i12686, 'm_SelectOnDown')
  request.r(i12687[6], i12687[7], 0, i12686, 'm_SelectOnLeft')
  request.r(i12687[8], i12687[9], 0, i12686, 'm_SelectOnRight')
  return i12686
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i12688 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i12689 = data
  i12688.m_NormalColor = new pc.Color(i12689[0], i12689[1], i12689[2], i12689[3])
  i12688.m_HighlightedColor = new pc.Color(i12689[4], i12689[5], i12689[6], i12689[7])
  i12688.m_PressedColor = new pc.Color(i12689[8], i12689[9], i12689[10], i12689[11])
  i12688.m_SelectedColor = new pc.Color(i12689[12], i12689[13], i12689[14], i12689[15])
  i12688.m_DisabledColor = new pc.Color(i12689[16], i12689[17], i12689[18], i12689[19])
  i12688.m_ColorMultiplier = i12689[20]
  i12688.m_FadeDuration = i12689[21]
  return i12688
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i12690 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i12691 = data
  request.r(i12691[0], i12691[1], 0, i12690, 'm_HighlightedSprite')
  request.r(i12691[2], i12691[3], 0, i12690, 'm_PressedSprite')
  request.r(i12691[4], i12691[5], 0, i12690, 'm_SelectedSprite')
  request.r(i12691[6], i12691[7], 0, i12690, 'm_DisabledSprite')
  return i12690
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i12692 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i12693 = data
  i12692.m_NormalTrigger = i12693[0]
  i12692.m_HighlightedTrigger = i12693[1]
  i12692.m_PressedTrigger = i12693[2]
  i12692.m_SelectedTrigger = i12693[3]
  i12692.m_DisabledTrigger = i12693[4]
  return i12692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i12694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i12695 = data
  request.r(i12695[0], i12695[1], 0, i12694, 'animatorController')
  request.r(i12695[2], i12695[3], 0, i12694, 'avatar')
  i12694.updateMode = i12695[4]
  i12694.hasTransformHierarchy = !!i12695[5]
  i12694.applyRootMotion = !!i12695[6]
  var i12697 = i12695[7]
  var i12696 = []
  for(var i = 0; i < i12697.length; i += 2) {
  request.r(i12697[i + 0], i12697[i + 1], 2, i12696, '')
  }
  i12694.humanBones = i12696
  i12694.enabled = !!i12695[8]
  return i12694
}

Deserializers["Level1_Cloth_Playable_Step1to4"] = function (request, data, root) {
  var i12700 = root || request.c( 'Level1_Cloth_Playable_Step1to4' )
  var i12701 = data
  request.r(i12701[0], i12701[1], 0, i12700, 'WashingView')
  request.r(i12701[2], i12701[3], 0, i12700, 'WashingTools')
  request.r(i12701[4], i12701[5], 0, i12700, 'DressingView')
  request.r(i12701[6], i12701[7], 0, i12700, 'DressingTools')
  i12700.ZoomStep1 = request.d('ZoomPos', i12701[8], i12700.ZoomStep1)
  request.r(i12701[9], i12701[10], 0, i12700, 'ToolStep1')
  request.r(i12701[11], i12701[12], 0, i12700, 'Basket_Cloth')
  request.r(i12701[13], i12701[14], 0, i12700, 'clothInside')
  request.r(i12701[15], i12701[16], 0, i12700, 'clothRound')
  request.r(i12701[17], i12701[18], 0, i12700, 'machineDoor')
  request.r(i12701[19], i12701[20], 0, i12700, 'machineGlass')
  i12700.ZoomStep2 = request.d('ZoomPos', i12701[21], i12700.ZoomStep2)
  i12700.ZoomStep2b = request.d('ZoomPos', i12701[22], i12700.ZoomStep2b)
  request.r(i12701[23], i12701[24], 0, i12700, 'ToolStep2')
  request.r(i12701[25], i12701[26], 0, i12700, 'ToolStep2CamFollow')
  request.r(i12701[27], i12701[28], 0, i12700, 'drawerObj')
  request.r(i12701[29], i12701[30], 0, i12700, 'surfObj')
  request.r(i12701[31], i12701[32], 0, i12700, 'surfPackTop')
  request.r(i12701[33], i12701[34], 0, i12700, 'handStep2')
  request.r(i12701[35], i12701[36], 0, i12700, 'surfController')
  request.r(i12701[37], i12701[38], 0, i12700, 'clothsInside')
  request.r(i12701[39], i12701[40], 0, i12700, 'clothsInsideGlass')
  request.r(i12701[41], i12701[42], 0, i12700, 'clothsStaticClean')
  request.r(i12701[43], i12701[44], 0, i12700, 'wetCloths')
  request.r(i12701[45], i12701[46], 0, i12700, 'clothCleanInside')
  request.r(i12701[47], i12701[48], 0, i12700, 'clothCleanInsideAnim')
  request.r(i12701[49], i12701[50], 0, i12700, 'waterWave')
  request.r(i12701[51], i12701[52], 0, i12700, 'clothCleanInside2')
  request.r(i12701[53], i12701[54], 0, i12700, 'clothCleanInside2Cam')
  request.r(i12701[55], i12701[56], 0, i12700, 'clothBasketTarget')
  request.r(i12701[57], i12701[58], 0, i12700, 'clothBasketTarget2')
  request.r(i12701[59], i12701[60], 0, i12700, 'waterSplash_Vfx')
  request.r(i12701[61], i12701[62], 0, i12700, 'countDownTimerText')
  i12700.countDown = i12701[63]
  request.r(i12701[64], i12701[65], 0, i12700, 'machineTimer')
  request.r(i12701[66], i12701[67], 0, i12700, 'machineTimerRotater')
  request.r(i12701[68], i12701[69], 0, i12700, 'machineTimerIndication')
  request.r(i12701[70], i12701[71], 0, i12700, 'darazOpenSfx')
  request.r(i12701[72], i12701[73], 0, i12700, 'darazCloseSfx')
  request.r(i12701[74], i12701[75], 0, i12700, 'doorOpenSfx')
  request.r(i12701[76], i12701[77], 0, i12700, 'machineStartSfx')
  request.r(i12701[78], i12701[79], 0, i12700, 'machineFinishSfx')
  request.r(i12701[80], i12701[81], 0, i12700, 'waterDrainSfx')
  i12700.levelName = i12701[82]
  i12700.levelReward = i12701[83]
  request.r(i12701[84], i12701[85], 0, i12700, 'LevelIcon')
  request.r(i12701[86], i12701[87], 0, i12700, 'Level_BG')
  var i12703 = i12701[88]
  var i12702 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i12703.length; i += 2) {
  request.r(i12703[i + 0], i12703[i + 1], 1, i12702, '')
  }
  i12700.ToolIcons = i12702
  var i12705 = i12701[89]
  var i12704 = []
  for(var i = 0; i < i12705.length; i += 2) {
  request.r(i12705[i + 0], i12705[i + 1], 2, i12704, '')
  }
  i12700.AllDrags = i12704
  var i12707 = i12701[90]
  var i12706 = []
  for(var i = 0; i < i12707.length; i += 2) {
  request.r(i12707[i + 0], i12707[i + 1], 2, i12706, '')
  }
  i12700.AllSources = i12706
  var i12709 = i12701[91]
  var i12708 = []
  for(var i = 0; i < i12709.length; i += 2) {
  request.r(i12709[i + 0], i12709[i + 1], 2, i12708, '')
  }
  i12700.AllScratches = i12708
  i12700.stepsDone = i12701[92]
  i12700.levelNo = i12701[93]
  i12700.partNo = i12701[94]
  request.r(i12701[95], i12701[96], 0, i12700, 'clothSfx')
  request.r(i12701[97], i12701[98], 0, i12700, 'doorCloseSfx')
  return i12700
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i12710 = root || request.c( 'ZoomPos' )
  var i12711 = data
  i12710.CameraPos = new pc.Vec3( i12711[0], i12711[1], i12711[2] )
  i12710.CameraFOV = i12711[3]
  return i12710
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i12720 = root || request.c( 'PlayableCTA' )
  var i12721 = data
  i12720.trigger = i12721[0]
  i12720.afterSeconds = i12721[1]
  i12720.afterTaps = i12721[2]
  request.r(i12721[3], i12721[4], 0, i12720, 'scratchProgress')
  i12720.scratchIndex = i12721[5]
  i12720.progressThreshold = i12721[6]
  request.r(i12721[7], i12721[8], 0, i12720, 'watchedTool')
  i12720.blockInputOnFire = !!i12721[9]
  i12720.refireOnEveryTap = !!i12721[10]
  i12720.refireDelay = i12721[11]
  i12720.showEndCard = !!i12721[12]
  request.r(i12721[13], i12721[14], 0, i12720, 'endCard')
  i12720.endCardDelay = i12721[15]
  i12720.showEndCardOnProgressTrigger = !!i12721[16]
  i12720.showEndCardOnToolAppearTrigger = !!i12721[17]
  i12720.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i12721[18], i12720.onCtaFired)
  i12720.logWhenFired = !!i12721[19]
  return i12720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i12722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i12723 = data
  i12722.textureMode = i12723[0]
  i12722.alignment = i12723[1]
  i12722.widthCurve = new pc.AnimationCurve( { keys_flow: i12723[2] } )
  i12722.colorGradient = i12723[3] ? new pc.ColorGradient(i12723[3][0], i12723[3][1], i12723[3][2]) : null
  var i12725 = i12723[4]
  var i12724 = []
  for(var i = 0; i < i12725.length; i += 3) {
    i12724.push( new pc.Vec3( i12725[i + 0], i12725[i + 1], i12725[i + 2] ) );
  }
  i12722.positions = i12724
  i12722.positionCount = i12723[5]
  i12722.widthMultiplier = i12723[6]
  i12722.startWidth = i12723[7]
  i12722.endWidth = i12723[8]
  i12722.numCornerVertices = i12723[9]
  i12722.numCapVertices = i12723[10]
  i12722.useWorldSpace = !!i12723[11]
  i12722.loop = !!i12723[12]
  i12722.startColor = new pc.Color(i12723[13], i12723[14], i12723[15], i12723[16])
  i12722.endColor = new pc.Color(i12723[17], i12723[18], i12723[19], i12723[20])
  i12722.generateLightingData = !!i12723[21]
  i12722.enabled = !!i12723[22]
  request.r(i12723[23], i12723[24], 0, i12722, 'sharedMaterial')
  var i12727 = i12723[25]
  var i12726 = []
  for(var i = 0; i < i12727.length; i += 2) {
  request.r(i12727[i + 0], i12727[i + 1], 2, i12726, '')
  }
  i12722.sharedMaterials = i12726
  i12722.receiveShadows = !!i12723[26]
  i12722.shadowCastingMode = i12723[27]
  i12722.sortingLayerID = i12723[28]
  i12722.sortingOrder = i12723[29]
  i12722.lightmapIndex = i12723[30]
  i12722.lightmapSceneIndex = i12723[31]
  i12722.lightmapScaleOffset = new pc.Vec4( i12723[32], i12723[33], i12723[34], i12723[35] )
  i12722.lightProbeUsage = i12723[36]
  i12722.reflectionProbeUsage = i12723[37]
  return i12722
}

Deserializers["TextureOffsetScroller"] = function (request, data, root) {
  var i12730 = root || request.c( 'TextureOffsetScroller' )
  var i12731 = data
  i12730.scrollSpeed = new pc.Vec2( i12731[0], i12731[1] )
  i12730.smoothStart = !!i12731[2]
  i12730.smoothDuration = i12731[3]
  i12730.textureName = i12731[4]
  i12730.useSharedMaterial = !!i12731[5]
  return i12730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i12732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i12733 = data
  i12732.color = new pc.Color(i12733[0], i12733[1], i12733[2], i12733[3])
  request.r(i12733[4], i12733[5], 0, i12732, 'sprite')
  i12732.flipX = !!i12733[6]
  i12732.flipY = !!i12733[7]
  i12732.drawMode = i12733[8]
  i12732.size = new pc.Vec2( i12733[9], i12733[10] )
  i12732.tileMode = i12733[11]
  i12732.adaptiveModeThreshold = i12733[12]
  i12732.maskInteraction = i12733[13]
  i12732.spriteSortPoint = i12733[14]
  i12732.enabled = !!i12733[15]
  request.r(i12733[16], i12733[17], 0, i12732, 'sharedMaterial')
  var i12735 = i12733[18]
  var i12734 = []
  for(var i = 0; i < i12735.length; i += 2) {
  request.r(i12735[i + 0], i12735[i + 1], 2, i12734, '')
  }
  i12732.sharedMaterials = i12734
  i12732.receiveShadows = !!i12733[19]
  i12732.shadowCastingMode = i12733[20]
  i12732.sortingLayerID = i12733[21]
  i12732.sortingOrder = i12733[22]
  i12732.lightmapIndex = i12733[23]
  i12732.lightmapSceneIndex = i12733[24]
  i12732.lightmapScaleOffset = new pc.Vec4( i12733[25], i12733[26], i12733[27], i12733[28] )
  i12732.lightProbeUsage = i12733[29]
  i12732.reflectionProbeUsage = i12733[30]
  return i12732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i12736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i12737 = data
  i12736.usedByComposite = !!i12737[0]
  i12736.autoTiling = !!i12737[1]
  i12736.size = new pc.Vec2( i12737[2], i12737[3] )
  i12736.edgeRadius = i12737[4]
  i12736.enabled = !!i12737[5]
  i12736.isTrigger = !!i12737[6]
  i12736.usedByEffector = !!i12737[7]
  i12736.density = i12737[8]
  i12736.offset = new pc.Vec2( i12737[9], i12737[10] )
  request.r(i12737[11], i12737[12], 0, i12736, 'material')
  return i12736
}

Deserializers["RotaryTimerKnob"] = function (request, data, root) {
  var i12738 = root || request.c( 'RotaryTimerKnob' )
  var i12739 = data
  i12738.canDrag = !!i12739[0]
  i12738.numSteps = i12739[1]
  i12738.onlyClockwise = !!i12739[2]
  request.r(i12739[3], i12739[4], 0, i12738, 'clickSound')
  i12738.enableVibration = !!i12739[5]
  request.r(i12739[6], i12739[7], 0, i12738, 'stepText')
  i12738.OnComplete = request.d('UnityEngine.Events.UnityEvent', i12739[8], i12738.OnComplete)
  request.r(i12739[9], i12739[10], 0, i12738, 'handIndication')
  return i12738
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i12740 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i12741 = data
  request.r(i12741[0], i12741[1], 0, i12740, 'm_RootBone')
  var i12743 = i12741[2]
  var i12742 = []
  for(var i = 0; i < i12743.length; i += 2) {
  request.r(i12743[i + 0], i12743[i + 1], 2, i12742, '')
  }
  i12740.m_BoneTransforms = i12742
  i12740.m_AlwaysUpdate = !!i12741[3]
  i12740.m_AutoRebind = !!i12741[4]
  return i12740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i12744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i12745 = data
  i12744.frontSortingLayerID = i12745[0]
  i12744.frontSortingOrder = i12745[1]
  i12744.backSortingLayerID = i12745[2]
  i12744.backSortingOrder = i12745[3]
  i12744.alphaCutoff = i12745[4]
  request.r(i12745[5], i12745[6], 0, i12744, 'sprite')
  i12744.tileMode = i12745[7]
  i12744.isCustomRangeActive = !!i12745[8]
  i12744.spriteSortPoint = i12745[9]
  i12744.enabled = !!i12745[10]
  request.r(i12745[11], i12745[12], 0, i12744, 'sharedMaterial')
  var i12747 = i12745[13]
  var i12746 = []
  for(var i = 0; i < i12747.length; i += 2) {
  request.r(i12747[i + 0], i12747[i + 1], 2, i12746, '')
  }
  i12744.sharedMaterials = i12746
  i12744.receiveShadows = !!i12745[14]
  i12744.shadowCastingMode = i12745[15]
  i12744.sortingLayerID = i12745[16]
  i12744.sortingOrder = i12745[17]
  i12744.lightmapIndex = i12745[18]
  i12744.lightmapSceneIndex = i12745[19]
  i12744.lightmapScaleOffset = new pc.Vec4( i12745[20], i12745[21], i12745[22], i12745[23] )
  i12744.lightProbeUsage = i12745[24]
  i12744.reflectionProbeUsage = i12745[25]
  return i12744
}

Deserializers["_2dxFX_Wave"] = function (request, data, root) {
  var i12748 = root || request.c( '_2dxFX_Wave' )
  var i12749 = data
  request.r(i12749[0], i12749[1], 0, i12748, 'ForceMaterial')
  i12748.ActiveChange = !!i12749[2]
  i12748._Alpha = i12749[3]
  i12748._OffsetX = i12749[4]
  i12748._OffsetY = i12749[5]
  i12748._DistanceX = i12749[6]
  i12748._DistanceY = i12749[7]
  i12748._WaveTimeX = i12749[8]
  i12748._WaveTimeY = i12749[9]
  i12748.AutoPlayWaveX = !!i12749[10]
  i12748.AutoPlaySpeedX = i12749[11]
  i12748.AutoPlayWaveY = !!i12749[12]
  i12748.AutoPlaySpeedY = i12749[13]
  i12748.AutoRandom = !!i12749[14]
  i12748.AutoRandomRange = i12749[15]
  i12748.ShaderChange = i12749[16]
  return i12748
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i12750 = root || request.c( 'BasicDrag' )
  var i12751 = data
  i12750.canDrag = !!i12751[0]
  i12750.dragByDelta = !!i12751[1]
  i12750.isDragging = !!i12751[2]
  i12750.moveWithPointer = !!i12751[3]
  i12750.canReturn = !!i12751[4]
  i12750.jumpOnReturn = !!i12751[5]
  i12750.returnTime = i12751[6]
  i12750.Tool_Offset = new pc.Vec3( i12751[7], i12751[8], i12751[9] )
  i12750.canScaleIncrease = !!i12751[10]
  i12750.Self_ScaleNew = new pc.Vec3( i12751[11], i12751[12], i12751[13] )
  i12750.canRotateOnPick = !!i12751[14]
  i12750.startRot = new pc.Vec3( i12751[15], i12751[16], i12751[17] )
  i12750.newRot = new pc.Vec3( i12751[18], i12751[19], i12751[20] )
  var i12753 = i12751[21]
  var i12752 = []
  for(var i = 0; i < i12753.length; i += 2) {
  request.r(i12753[i + 0], i12753[i + 1], 2, i12752, '')
  }
  i12750.childSprite = i12752
  request.r(i12751[22], i12751[23], 0, i12750, 'ToolSelectClip')
  request.r(i12751[24], i12751[25], 0, i12750, 'ToolLoopClip')
  request.r(i12751[26], i12751[27], 0, i12750, 'thisParticles')
  i12750.onDragparticle = !!i12751[28]
  request.r(i12751[29], i12751[30], 0, i12750, 'dragParticles')
  request.r(i12751[31], i12751[32], 0, i12750, 'anim')
  i12750.startPos = new pc.Vec3( i12751[33], i12751[34], i12751[35] )
  i12750.startScale = new pc.Vec3( i12751[36], i12751[37], i12751[38] )
  i12750.Vibration = !!i12751[39]
  i12750.isPlacedCannotMove = !!i12751[40]
  i12750.isObjectMovingWhileDragging = !!i12751[41]
  i12750.OnMouseDownEvent = request.d('System.Action', i12751[42], i12750.OnMouseDownEvent)
  i12750.OnMouseUpEvent = request.d('System.Action', i12751[43], i12750.OnMouseUpEvent)
  i12750.ProgStartEvent = request.d('System.Action', i12751[44], i12750.ProgStartEvent)
  i12750.ProgEndEvent = request.d('System.Action', i12751[45], i12750.ProgEndEvent)
  i12750.canCallMouseUpWhenGamePaused = !!i12751[46]
  i12750.ClampX_L = i12751[47]
  i12750.ClampX_H = i12751[48]
  i12750.ClampY_L = i12751[49]
  i12750.ClampY_H = i12751[50]
  i12750.startOrder = i12751[51]
  i12750.dontResetItIsInCollider = !!i12751[52]
  request.r(i12751[53], i12751[54], 0, i12750, 'thisCollider')
  request.r(i12751[55], i12751[56], 0, i12750, 'thisSR')
  i12750.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i12751[57], i12750.OnMouseDownEventIndependentFromCanDrag)
  return i12750
}

Deserializers["System.Action"] = function (request, data, root) {
  var i12756 = root || request.c( 'System.Action' )
  var i12757 = data
  return i12756
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i12758 = root || request.c( 'BD_Clamp' )
  var i12759 = data
  i12758.ClampX_L = i12759[0]
  i12758.ClampX_H = i12759[1]
  i12758.ClampY_L = i12759[2]
  i12758.ClampY_H = i12759[3]
  return i12758
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i12760 = root || request.c( 'BD_CameraFollow' )
  var i12761 = data
  request.r(i12761[0], i12761[1], 0, i12760, 'Tool')
  request.r(i12761[2], i12761[3], 0, i12760, 'Pivot')
  i12760.FOV = i12761[4]
  i12760.Y_L = i12761[5]
  i12760.Y_H = i12761[6]
  i12760.X_L = i12761[7]
  i12760.X_R = i12761[8]
  i12760.startDelay = i12761[9]
  i12760.duration = i12761[10]
  return i12760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i12762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i12763 = data
  i12762.bodyType = i12763[0]
  request.r(i12763[1], i12763[2], 0, i12762, 'material')
  i12762.simulated = !!i12763[3]
  i12762.useAutoMass = !!i12763[4]
  i12762.mass = i12763[5]
  i12762.drag = i12763[6]
  i12762.angularDrag = i12763[7]
  i12762.gravityScale = i12763[8]
  i12762.collisionDetectionMode = i12763[9]
  i12762.sleepMode = i12763[10]
  i12762.constraints = i12763[11]
  return i12762
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i12764 = root || request.c( 'PlaceItem' )
  var i12765 = data
  request.r(i12765[0], i12765[1], 0, i12764, 'thisDrag')
  request.r(i12765[2], i12765[3], 0, i12764, 'Target')
  request.r(i12765[4], i12765[5], 0, i12764, 'Clip')
  i12764.jumpOnPlace = !!i12765[6]
  i12764.jumpHeight = i12765[7]
  i12764.jumpDuration = i12765[8]
  i12764.settleDuration = i12765[9]
  i12764.isPlaced = !!i12765[10]
  i12764.isInsideCollider = !!i12765[11]
  i12764.changeScaleOnPlace = !!i12765[12]
  request.r(i12765[13], i12765[14], 0, i12764, 'item')
  i12764.newScaleOnPlace = new pc.Vec3( i12765[15], i12765[16], i12765[17] )
  i12764.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i12765[18], i12764.OnPlaced)
  return i12764
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i12766 = root || request.c( 'ActionOnTap' )
  var i12767 = data
  i12766.OnTap = request.d('UnityEngine.Events.UnityEvent', i12767[0], i12766.OnTap)
  i12766.OnTapExtra = request.d('System.Action', i12767[1], i12766.OnTapExtra)
  return i12766
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i12768 = root || request.c( 'BD_Action' )
  var i12769 = data
  i12768.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i12769[0], i12768.OnMouseDownEvent)
  i12768.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i12769[1], i12768.OnMouseUpEvent)
  i12768.setToolLayer = !!i12769[2]
  request.r(i12769[3], i12769[4], 0, i12768, 'tool_SP')
  return i12768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i12770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i12771 = data
  request.r(i12771[0], i12771[1], 0, i12770, 'clip')
  request.r(i12771[2], i12771[3], 0, i12770, 'outputAudioMixerGroup')
  i12770.playOnAwake = !!i12771[4]
  i12770.loop = !!i12771[5]
  i12770.time = i12771[6]
  i12770.volume = i12771[7]
  i12770.pitch = i12771[8]
  i12770.enabled = !!i12771[9]
  return i12770
}

Deserializers["Level1_SurfController"] = function (request, data, root) {
  var i12772 = root || request.c( 'Level1_SurfController' )
  var i12773 = data
  i12772.target_rotZ = i12773[0]
  i12772.rotationDuration = i12773[1]
  i12772.rotationEase = i12773[2]
  request.r(i12773[3], i12773[4], 0, i12772, 'maskItem')
  i12772.maskTarget_posY = i12773[5]
  i12772.maskMoveDuration = i12773[6]
  i12772.requiredHoldTime = i12773[7]
  i12772.minRotationForProgress = i12773[8]
  request.r(i12773[9], i12773[10], 0, i12772, 'tipCollider')
  request.r(i12773[11], i12773[12], 0, i12772, 'targetZoneCollider')
  request.r(i12773[13], i12773[14], 0, i12772, 'surf_Particles')
  request.r(i12773[15], i12773[16], 0, i12772, 'surf_SubEmitter')
  request.r(i12773[17], i12773[18], 0, i12772, 'Indication')
  i12772.OnComplete = request.d('UnityEngine.Events.UnityEvent', i12773[19], i12772.OnComplete)
  i12772.currentHoldProgress = i12773[20]
  return i12772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i12774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i12775 = data
  i12774.radius = i12775[0]
  i12774.enabled = !!i12775[1]
  i12774.isTrigger = !!i12775[2]
  i12774.usedByEffector = !!i12775[3]
  i12774.density = i12775[4]
  i12774.offset = new pc.Vec2( i12775[5], i12775[6] )
  request.r(i12775[7], i12775[8], 0, i12774, 'material')
  return i12774
}

Deserializers["BD_Fold"] = function (request, data, root) {
  var i12776 = root || request.c( 'BD_Fold' )
  var i12777 = data
  i12776.canDrag = !!i12777[0]
  i12776.canFoldBottomLeft = !!i12777[1]
  i12776.canFoldBottomRight = !!i12777[2]
  i12776.canFoldTopLeft = !!i12777[3]
  i12776.canFoldTopRight = !!i12777[4]
  request.r(i12777[5], i12777[6], 0, i12776, 'Indication')
  request.r(i12777[7], i12777[8], 0, i12776, 'backSideSprite')
  i12776.maxSideOffset = i12777[9]
  i12776.foldBackDuration = i12777[10]
  i12776.instantFoldAmount = i12777[11]
  i12776.useSmoothRelease = !!i12777[12]
  i12776.completionLimit = i12777[13]
  i12776.afterCompletionTravelTo = i12777[14]
  i12776.OnComplete = request.d('UnityEngine.Events.UnityEvent', i12777[15], i12776.OnComplete)
  i12776.currentProgress = i12777[16]
  i12776.innerShadowStrength = i12777[17]
  request.r(i12777[18], i12777[19], 0, i12776, 'dragAudioSource')
  request.r(i12777[20], i12777[21], 0, i12776, 'dragStartClip')
  request.r(i12777[22], i12777[23], 0, i12776, 'completionClip')
  i12776.audioFadeSpeed = i12777[24]
  i12776.audioMoveThreshold = i12777[25]
  i12776.hapticInterval = i12777[26]
  return i12776
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i12778 = root || request.c( 'BD_Progress' )
  var i12779 = data
  var i12781 = i12779[0]
  var i12780 = []
  for(var i = 0; i < i12781.length; i += 1) {
    i12780.push( request.d('ScratchData', i12781[i + 0]) );
  }
  i12778.AllScratches = i12780
  i12778.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i12779[1], i12778.OnScratchComplete)
  i12778.isProgDone = !!i12779[2]
  i12778.canCallComplete = !!i12779[3]
  i12778.CollectiveAppear = !!i12779[4]
  i12778.tipControl = !!i12779[5]
  i12778.progressControl = !!i12779[6]
  request.r(i12779[7], i12779[8], 0, i12778, 'thisDrag')
  i12778.CompleteEvent = request.d('System.Action', i12779[9], i12778.CompleteEvent)
  i12778.SubCompleteEvent = request.d('System.Action', i12779[10], i12778.SubCompleteEvent)
  return i12778
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i12784 = root || request.c( 'ScratchData' )
  var i12785 = data
  request.r(i12785[0], i12785[1], 0, i12784, 'ScratchManager')
  i12784.scratchLimit = i12785[2]
  i12784.isComplete = !!i12785[3]
  return i12784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i12786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i12787 = data
  request.r(i12787[0], i12787[1], 0, i12786, 'sharedMesh')
  return i12786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i12788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i12789 = data
  request.r(i12789[0], i12789[1], 0, i12788, 'additionalVertexStreams')
  i12788.enabled = !!i12789[2]
  request.r(i12789[3], i12789[4], 0, i12788, 'sharedMaterial')
  var i12791 = i12789[5]
  var i12790 = []
  for(var i = 0; i < i12791.length; i += 2) {
  request.r(i12791[i + 0], i12791[i + 1], 2, i12790, '')
  }
  i12788.sharedMaterials = i12790
  i12788.receiveShadows = !!i12789[6]
  i12788.shadowCastingMode = i12789[7]
  i12788.sortingLayerID = i12789[8]
  i12788.sortingOrder = i12789[9]
  i12788.lightmapIndex = i12789[10]
  i12788.lightmapSceneIndex = i12789[11]
  i12788.lightmapScaleOffset = new pc.Vec4( i12789[12], i12789[13], i12789[14], i12789[15] )
  i12788.lightProbeUsage = i12789[16]
  i12788.reflectionProbeUsage = i12789[17]
  return i12788
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i12792 = root || request.c( 'StaticFixedPipe' )
  var i12793 = data
  request.r(i12793[0], i12793[1], 0, i12792, 'meshRenderer')
  request.r(i12793[2], i12793[3], 0, i12792, 'toolTransform')
  request.r(i12793[4], i12793[5], 0, i12792, 'toolDirectionPoint')
  request.r(i12793[6], i12793[7], 0, i12792, 'fixedEndPoint')
  i12792.segmentCount = i12793[8]
  i12792.totalLength = i12793[9]
  i12792.constraintIterations = i12793[10]
  i12792.gravity = new pc.Vec3( i12793[11], i12793[12], i12793[13] )
  i12792.pipeWidth = i12793[14]
  return i12792
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i12794 = root || request.c( 'BD_SpriteChange' )
  var i12795 = data
  request.r(i12795[0], i12795[1], 0, i12794, 'BD')
  request.r(i12795[2], i12795[3], 0, i12794, 'SR')
  request.r(i12795[4], i12795[5], 0, i12794, 'Default')
  request.r(i12795[6], i12795[7], 0, i12794, 'Picked')
  i12794.resetOnRelease = !!i12795[8]
  return i12794
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i12796 = root || request.c( 'MenuLevel' )
  var i12797 = data
  request.r(i12797[0], i12797[1], 0, i12796, 'menuLevelBtnUpdate')
  var i12799 = i12797[2]
  var i12798 = []
  for(var i = 0; i < i12799.length; i += 1) {
    i12798.push( request.d('MenuLevelData', i12799[i + 0]) );
  }
  i12796.AllSteps = i12798
  request.r(i12797[3], i12797[4], 0, i12796, 'buttonparent')
  var i12801 = i12797[5]
  var i12800 = []
  for(var i = 0; i < i12801.length; i += 2) {
  request.r(i12801[i + 0], i12801[i + 1], 2, i12800, '')
  }
  i12796.BtnsDotweenAnims = i12800
  var i12803 = i12797[6]
  var i12802 = []
  for(var i = 0; i < i12803.length; i += 2) {
  request.r(i12803[i + 0], i12803[i + 1], 2, i12802, '')
  }
  i12796.BtnsCols = i12802
  request.r(i12797[7], i12797[8], 0, i12796, 'mainGameView')
  request.r(i12797[9], i12797[10], 0, i12796, 'Storyboard')
  request.r(i12797[11], i12797[12], 0, i12796, 'BgMusic')
  request.r(i12797[13], i12797[14], 0, i12796, 'BgStoryMusic')
  request.r(i12797[15], i12797[16], 0, i12796, 'Hand_Tut1')
  request.r(i12797[17], i12797[18], 0, i12796, 'Button_Hand')
  var i12805 = i12797[19]
  var i12804 = []
  for(var i = 0; i < i12805.length; i += 2) {
  request.r(i12805[i + 0], i12805[i + 1], 2, i12804, '')
  }
  i12796.itemEnable_Onstart = i12804
  var i12807 = i12797[20]
  var i12806 = []
  for(var i = 0; i < i12807.length; i += 2) {
  request.r(i12807[i + 0], i12807[i + 1], 2, i12806, '')
  }
  i12796.itemDisable_Onstart = i12806
  var i12809 = i12797[21]
  var i12808 = []
  for(var i = 0; i < i12809.length; i += 2) {
  request.r(i12809[i + 0], i12809[i + 1], 2, i12808, '')
  }
  i12796.itemEnable_Oncomplete = i12808
  var i12811 = i12797[22]
  var i12810 = []
  for(var i = 0; i < i12811.length; i += 2) {
  request.r(i12811[i + 0], i12811[i + 1], 2, i12810, '')
  }
  i12796.itemDisable_Oncomplete = i12810
  i12796.levelKey = i12797[23]
  i12796.revealDirtyHoldTime = i12797[24]
  return i12796
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i12814 = root || request.c( 'MenuLevelData' )
  var i12815 = data
  i12814.Name = i12815[0]
  request.r(i12815[1], i12815[2], 0, i12814, 'UiBtn')
  request.r(i12815[3], i12815[4], 0, i12814, 'TickBtn')
  request.r(i12815[5], i12815[6], 0, i12814, 'ExclamationIcon')
  var i12817 = i12815[7]
  var i12816 = []
  for(var i = 0; i < i12817.length; i += 2) {
  request.r(i12817[i + 0], i12817[i + 1], 2, i12816, '')
  }
  i12814.Item_Dirty = i12816
  var i12819 = i12815[8]
  var i12818 = []
  for(var i = 0; i < i12819.length; i += 2) {
  request.r(i12819[i + 0], i12819[i + 1], 2, i12818, '')
  }
  i12814.Item_Clean = i12818
  request.r(i12815[9], i12815[10], 0, i12814, 'CompleteParticle')
  return i12814
}

Deserializers["IntroLevelAnim"] = function (request, data, root) {
  var i12826 = root || request.c( 'IntroLevelAnim' )
  var i12827 = data
  request.r(i12827[0], i12827[1], 0, i12826, 'menuLevel')
  i12826.lvlkey = i12827[2]
  request.r(i12827[3], i12827[4], 0, i12826, 'DressChangeObj')
  request.r(i12827[5], i12827[6], 0, i12826, 'DressChangeClip')
  return i12826
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i12828 = root || request.c( 'Level_PoseController' )
  var i12829 = data
  var i12831 = i12829[0]
  var i12830 = []
  for(var i = 0; i < i12831.length; i += 2) {
  request.r(i12831[i + 0], i12831[i + 1], 2, i12830, '')
  }
  i12828.itemToShow = i12830
  var i12833 = i12829[1]
  var i12832 = []
  for(var i = 0; i < i12833.length; i += 2) {
  request.r(i12833[i + 0], i12833[i + 1], 2, i12832, '')
  }
  i12828.itemToHide = i12832
  i12828.stepTarget = i12829[2]
  return i12828
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i12834 = root || request.c( 'BD_AnimationHelper' )
  var i12835 = data
  i12834.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i12835[0], i12834.OnAnimationComplete)
  request.r(i12835[1], i12835[2], 0, i12834, 'sfxClip')
  i12834.progBar = !!i12835[3]
  return i12834
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i12836 = root || request.c( 'SpriteButton' )
  var i12837 = data
  i12836.isLocked = !!i12837[0]
  i12836.lockMsg = i12837[1]
  i12836.onClick = request.d('UnityEngine.Events.UnityEvent', i12837[2], i12836.onClick)
  i12836.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i12837[3], i12836.onLockedClick)
  i12836.isLevelBtnSfx = !!i12837[4]
  request.r(i12837[5], i12837[6], 0, i12836, 'pivot')
  i12836.reductionChange = i12837[7]
  i12836.animationDuration = i12837[8]
  return i12836
}

Deserializers["DressChangeIntro"] = function (request, data, root) {
  var i12838 = root || request.c( 'DressChangeIntro' )
  var i12839 = data
  request.r(i12839[0], i12839[1], 0, i12838, 'menuLevel')
  request.r(i12839[2], i12839[3], 0, i12838, 'curtainMoveable')
  request.r(i12839[4], i12839[5], 0, i12838, 'curtainStatic')
  i12838.staticCurtainOnly = !!i12839[6]
  i12838.curtainFadeInDuration = i12839[7]
  i12838.curtainFadeInDelay = i12839[8]
  i12838.slideInOffsetX = i12839[9]
  i12838.slideInDuration = i12839[10]
  i12838.slideInEase = i12839[11]
  i12838.startDelay = i12839[12]
  request.r(i12839[13], i12839[14], 0, i12838, 'handSmall')
  request.r(i12839[15], i12839[16], 0, i12838, 'bone_3')
  i12838.handSmallBackwardAmount = i12839[17]
  i12838.bone3BackwardAmount = i12839[18]
  i12838.handPeekDuration = i12839[19]
  i12838.handPeekEase = i12839[20]
  request.r(i12839[21], i12839[22], 0, i12838, 'armCloth')
  i12838.armClothDelay = i12839[23]
  i12838.armClothDuration = i12839[24]
  i12838.armClothEase = i12839[25]
  request.r(i12839[26], i12839[27], 0, i12838, 'basket')
  i12838.basketOffsetX = i12839[28]
  i12838.basketSlideDelay = i12839[29]
  i12838.basketSlideDuration = i12839[30]
  i12838.basketSlideEase = i12839[31]
  request.r(i12839[32], i12839[33], 0, i12838, 'cloth')
  request.r(i12839[34], i12839[35], 0, i12838, 'clothRenderer')
  request.r(i12839[36], i12839[37], 0, i12838, 'clothPickedSprite')
  request.r(i12839[38], i12839[39], 0, i12838, 'clothBasketSprite')
  request.r(i12839[40], i12839[41], 0, i12838, 'handIndication')
  request.r(i12839[42], i12839[43], 0, i12838, 'basketDropTarget')
  i12838.dropRadius = i12839[44]
  i12838.dropJumpHeight = i12839[45]
  i12838.dropJumpDuration = i12839[46]
  i12838.dropSinkDuration = i12839[47]
  i12838.clothPickedSortingOrder = i12839[48]
  request.r(i12839[49], i12839[50], 0, i12838, 'ToolPlaceClip')
  i12838.OnIntroComplete = request.d('UnityEngine.Events.UnityEvent', i12839[51], i12838.OnIntroComplete)
  return i12838
}

Deserializers["MenuDraggable"] = function (request, data, root) {
  var i12840 = root || request.c( 'MenuDraggable' )
  var i12841 = data
  i12840.canDrag = !!i12841[0]
  i12840.returnToStartPosition = !!i12841[1]
  i12840.returnDuration = i12841[2]
  i12840.returnEase = i12841[3]
  i12840.ClampX_L = i12841[4]
  i12840.ClampX_H = i12841[5]
  i12840.ClampY_L = i12841[6]
  i12840.ClampY_H = i12841[7]
  request.r(i12841[8], i12841[9], 0, i12840, 'ToolTapClip')
  i12840.isPlaced = !!i12841[10]
  i12840.OnPicked = request.d('System.Action', i12841[11], i12840.OnPicked)
  i12840.OnReleased = request.d('System.Action', i12841[12], i12840.OnReleased)
  return i12840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i12842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i12843 = data
  i12842.name = i12843[0]
  i12842.atlasId = i12843[1]
  i12842.mipmapCount = i12843[2]
  i12842.hdr = !!i12843[3]
  i12842.size = i12843[4]
  i12842.anisoLevel = i12843[5]
  i12842.filterMode = i12843[6]
  var i12845 = i12843[7]
  var i12844 = []
  for(var i = 0; i < i12845.length; i += 4) {
    i12844.push( UnityEngine.Rect.MinMaxRect(i12845[i + 0], i12845[i + 1], i12845[i + 2], i12845[i + 3]) );
  }
  i12842.rects = i12844
  i12842.wrapU = i12843[8]
  i12842.wrapV = i12843[9]
  return i12842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i12848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i12849 = data
  i12848.name = i12849[0]
  i12848.index = i12849[1]
  i12848.startup = !!i12849[2]
  return i12848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i12850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i12851 = data
  i12850.aspect = i12851[0]
  i12850.orthographic = !!i12851[1]
  i12850.orthographicSize = i12851[2]
  i12850.backgroundColor = new pc.Color(i12851[3], i12851[4], i12851[5], i12851[6])
  i12850.nearClipPlane = i12851[7]
  i12850.farClipPlane = i12851[8]
  i12850.fieldOfView = i12851[9]
  i12850.depth = i12851[10]
  i12850.clearFlags = i12851[11]
  i12850.cullingMask = i12851[12]
  i12850.rect = i12851[13]
  request.r(i12851[14], i12851[15], 0, i12850, 'targetTexture')
  i12850.usePhysicalProperties = !!i12851[16]
  i12850.focalLength = i12851[17]
  i12850.sensorSize = new pc.Vec2( i12851[18], i12851[19] )
  i12850.lensShift = new pc.Vec2( i12851[20], i12851[21] )
  i12850.gateFit = i12851[22]
  i12850.commandBufferCount = i12851[23]
  i12850.cameraType = i12851[24]
  i12850.enabled = !!i12851[25]
  return i12850
}

Deserializers["CameraController"] = function (request, data, root) {
  var i12852 = root || request.c( 'CameraController' )
  var i12853 = data
  request.r(i12853[0], i12853[1], 0, i12852, 'cam')
  i12852.defaultPosition = new pc.Vec3( i12853[2], i12853[3], i12853[4] )
  i12852.defaultSize = i12853[5]
  i12852.defaultFOV = i12853[6]
  i12852.defaultDuration = i12853[7]
  i12852.defaultEase = i12853[8]
  return i12852
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i12854 = root || request.c( 'MusicSource' )
  var i12855 = data
  request.r(i12855[0], i12855[1], 0, i12854, 'source')
  return i12854
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i12856 = root || request.c( 'UI_Manager' )
  var i12857 = data
  i12856.levelCompleted = !!i12857[0]
  i12856.isPauseActive = !!i12857[1]
  i12856.loadIndex = i12857[2]
  request.r(i12857[3], i12857[4], 0, i12856, 'removeAdsButton')
  request.r(i12857[5], i12857[6], 0, i12856, 'pauseButton')
  request.r(i12857[7], i12857[8], 0, i12856, 'Fade_Img')
  request.r(i12857[9], i12857[10], 0, i12856, 'TopBarAnim')
  request.r(i12857[11], i12857[12], 0, i12856, 'MainPanel')
  request.r(i12857[13], i12857[14], 0, i12856, 'PausePanel')
  request.r(i12857[15], i12857[16], 0, i12856, 'PausePopUp')
  request.r(i12857[17], i12857[18], 0, i12856, 'PauseCanvasGroup')
  request.r(i12857[19], i12857[20], 0, i12856, 'RateUsPanel')
  request.r(i12857[21], i12857[22], 0, i12856, 'RateUsPopUp')
  request.r(i12857[23], i12857[24], 0, i12856, 'RemoveAdsPanel')
  request.r(i12857[25], i12857[26], 0, i12856, 'RemoveAdsPopUp')
  request.r(i12857[27], i12857[28], 0, i12856, 'RemoveAdsCanvasGroup')
  var i12859 = i12857[29]
  var i12858 = []
  for(var i = 0; i < i12859.length; i += 2) {
  request.r(i12859[i + 0], i12859[i + 1], 2, i12858, '')
  }
  i12856.RemoveAdsAnims = i12858
  i12856.showCompletePanel = !!i12857[30]
  var i12861 = i12857[31]
  var i12860 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i12861.length; i += 2) {
  request.r(i12861[i + 0], i12861[i + 1], 1, i12860, '')
  }
  i12856.thingsToDisableWhenCompletePanel = i12860
  request.r(i12857[32], i12857[33], 0, i12856, 'CompletePanel')
  request.r(i12857[34], i12857[35], 0, i12856, 'LevelIcon')
  request.r(i12857[36], i12857[37], 0, i12856, 'CompleteParticles')
  request.r(i12857[38], i12857[39], 0, i12856, 'progressBar')
  request.r(i12857[40], i12857[41], 0, i12856, 'progressText')
  request.r(i12857[42], i12857[43], 0, i12856, 'toolIcon1')
  request.r(i12857[44], i12857[45], 0, i12856, 'toolIcon2')
  request.r(i12857[46], i12857[47], 0, i12856, 'toolIcon3')
  request.r(i12857[48], i12857[49], 0, i12856, 'toolIcon4')
  request.r(i12857[50], i12857[51], 0, i12856, 'toolHolder')
  i12856.toolHolderRaisedY = i12857[52]
  i12856.toolHolderRaiseDuration = i12857[53]
  request.r(i12857[54], i12857[55], 0, i12856, 'target1')
  request.r(i12857[56], i12857[57], 0, i12856, 'target2')
  i12856.toolMoveDuration = i12857[58]
  i12856.currentIndex = i12857[59]
  var i12863 = i12857[60]
  var i12862 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i12863.length; i += 2) {
  request.r(i12863[i + 0], i12863[i + 1], 1, i12862, '')
  }
  i12856.allTools = i12862
  request.r(i12857[61], i12857[62], 0, i12856, 'clockProgress')
  request.r(i12857[63], i12857[64], 0, i12856, 'clockProgressFill')
  request.r(i12857[65], i12857[66], 0, i12856, 'clockAudio')
  i12856.moveDistance = i12857[67]
  i12856.animationDuration = i12857[68]
  i12856.greyBgChildName = i12857[69]
  i12856.pushOffset = i12857[70]
  return i12856
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i12866 = root || request.c( 'GameManagerPlayable' )
  var i12867 = data
  request.r(i12867[0], i12867[1], 0, i12866, 'endParticles')
  request.r(i12867[2], i12867[3], 0, i12866, 'stepCompleteParticles')
  request.r(i12867[4], i12867[5], 0, i12866, 'DefaultMat')
  request.r(i12867[6], i12867[7], 0, i12866, 'BG_Music')
  request.r(i12867[8], i12867[9], 0, i12866, 'restoreEffectShader')
  request.r(i12867[10], i12867[11], 0, i12866, 'stickerEffectShader')
  i12866.isComplete = !!i12867[12]
  i12866.isPaused = !!i12867[13]
  request.r(i12867[14], i12867[15], 0, i12866, 'currentLevel')
  i12866.startLevelOnPlay = !!i12867[16]
  i12866.currentLevelNo = i12867[17]
  return i12866
}

Deserializers["AudioController"] = function (request, data, root) {
  var i12868 = root || request.c( 'AudioController' )
  var i12869 = data
  request.r(i12869[0], i12869[1], 0, i12868, 'MainMixer')
  request.r(i12869[2], i12869[3], 0, i12868, 'UiClick')
  request.r(i12869[4], i12869[5], 0, i12868, 'UiClickSource')
  var i12871 = i12869[6]
  var i12870 = []
  for(var i = 0; i < i12871.length; i += 2) {
  request.r(i12871[i + 0], i12871[i + 1], 2, i12870, '')
  }
  i12868.SfxSources = i12870
  var i12873 = i12869[7]
  var i12872 = []
  for(var i = 0; i < i12873.length; i += 2) {
  request.r(i12873[i + 0], i12873[i + 1], 2, i12872, '')
  }
  i12868.AllClips = i12872
  return i12868
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i12876 = root || request.c( 'PlayableHudRuntime' )
  var i12877 = data
  return i12876
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i12878 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i12879 = data
  request.r(i12879[0], i12879[1], 0, i12878, 'm_FirstSelected')
  i12878.m_sendNavigationEvents = !!i12879[2]
  i12878.m_DragThreshold = i12879[3]
  return i12878
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i12880 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i12881 = data
  i12880.m_HorizontalAxis = i12881[0]
  i12880.m_VerticalAxis = i12881[1]
  i12880.m_SubmitButton = i12881[2]
  i12880.m_CancelButton = i12881[3]
  i12880.m_InputActionsPerSecond = i12881[4]
  i12880.m_RepeatDelay = i12881[5]
  i12880.m_ForceModuleActive = !!i12881[6]
  i12880.m_SendPointerHoverToParent = !!i12881[7]
  return i12880
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i12882 = root || request.c( 'PlayableRouter' )
  var i12883 = data
  var i12885 = i12883[0]
  var i12884 = []
  for(var i = 0; i < i12885.length; i += 2) {
  request.r(i12885[i + 0], i12885[i + 1], 2, i12884, '')
  }
  i12882.menuObjects = i12884
  var i12887 = i12883[1]
  var i12886 = []
  for(var i = 0; i < i12887.length; i += 2) {
  request.r(i12887[i + 0], i12887[i + 1], 2, i12886, '')
  }
  i12882.gameplayObjects = i12886
  var i12889 = i12883[2]
  var i12888 = []
  for(var i = 0; i < i12889.length; i += 1) {
    i12888.push( request.d('PlayableRouter+SubLevelSlot', i12889[i + 0]) );
  }
  i12882.subLevels = i12888
  i12882.fadeDuration = i12883[3]
  i12882.onIntroStart = request.d('UnityEngine.Events.UnityEvent', i12883[4], i12882.onIntroStart)
  var i12891 = i12883[5]
  var i12890 = []
  for(var i = 0; i < i12891.length; i += 2) {
  request.r(i12891[i + 0], i12891[i + 1], 2, i12890, '')
  }
  i12882.hideDuringIntro = i12890
  i12882.lockedMessage = i12883[6]
  i12882.lockedTapsToCTA = i12883[7]
  return i12882
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i12894 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i12895 = data
  request.r(i12895[0], i12895[1], 0, i12894, 'button')
  request.r(i12895[2], i12895[3], 0, i12894, 'level')
  request.r(i12895[4], i12895[5], 0, i12894, 'intro')
  return i12894
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i12896 = root || request.c( 'ToastManager' )
  var i12897 = data
  request.r(i12897[0], i12897[1], 0, i12896, 'toastPanel')
  request.r(i12897[2], i12897[3], 0, i12896, 'toastPopup')
  request.r(i12897[4], i12897[5], 0, i12896, 'canvasGroup')
  request.r(i12897[6], i12897[7], 0, i12896, 'toastText')
  i12896.startY = i12897[8]
  i12896.visibleY = i12897[9]
  i12896.endY = i12897[10]
  i12896.animationTime = i12897[11]
  i12896.animationTimeUp = i12897[12]
  return i12896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i12898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i12899 = data
  i12898.m_Alpha = i12899[0]
  i12898.m_Interactable = !!i12899[1]
  i12898.m_BlocksRaycasts = !!i12899[2]
  i12898.m_IgnoreParentGroups = !!i12899[3]
  i12898.enabled = !!i12899[4]
  return i12898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i12900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i12901 = data
  i12900.ambientIntensity = i12901[0]
  i12900.reflectionIntensity = i12901[1]
  i12900.ambientMode = i12901[2]
  i12900.ambientLight = new pc.Color(i12901[3], i12901[4], i12901[5], i12901[6])
  i12900.ambientSkyColor = new pc.Color(i12901[7], i12901[8], i12901[9], i12901[10])
  i12900.ambientGroundColor = new pc.Color(i12901[11], i12901[12], i12901[13], i12901[14])
  i12900.ambientEquatorColor = new pc.Color(i12901[15], i12901[16], i12901[17], i12901[18])
  i12900.fogColor = new pc.Color(i12901[19], i12901[20], i12901[21], i12901[22])
  i12900.fogEndDistance = i12901[23]
  i12900.fogStartDistance = i12901[24]
  i12900.fogDensity = i12901[25]
  i12900.fog = !!i12901[26]
  request.r(i12901[27], i12901[28], 0, i12900, 'skybox')
  i12900.fogMode = i12901[29]
  var i12903 = i12901[30]
  var i12902 = []
  for(var i = 0; i < i12903.length; i += 1) {
    i12902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i12903[i + 0]) );
  }
  i12900.lightmaps = i12902
  i12900.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i12901[31], i12900.lightProbes)
  i12900.lightmapsMode = i12901[32]
  i12900.mixedBakeMode = i12901[33]
  i12900.environmentLightingMode = i12901[34]
  i12900.ambientProbe = new pc.SphericalHarmonicsL2(i12901[35])
  request.r(i12901[36], i12901[37], 0, i12900, 'customReflection')
  request.r(i12901[38], i12901[39], 0, i12900, 'defaultReflection')
  i12900.defaultReflectionMode = i12901[40]
  i12900.defaultReflectionResolution = i12901[41]
  i12900.sunLightObjectId = i12901[42]
  i12900.pixelLightCount = i12901[43]
  i12900.defaultReflectionHDR = !!i12901[44]
  i12900.hasLightDataAsset = !!i12901[45]
  i12900.hasManualGenerate = !!i12901[46]
  return i12900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i12906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i12907 = data
  request.r(i12907[0], i12907[1], 0, i12906, 'lightmapColor')
  request.r(i12907[2], i12907[3], 0, i12906, 'lightmapDirection')
  request.r(i12907[4], i12907[5], 0, i12906, 'shadowMask')
  return i12906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i12908 = root || new UnityEngine.LightProbes()
  var i12909 = data
  return i12908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i12914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i12915 = data
  var i12917 = i12915[0]
  var i12916 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i12917.length; i += 1) {
    i12916.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i12917[i + 0]));
  }
  i12914.ShaderCompilationErrors = i12916
  i12914.name = i12915[1]
  i12914.guid = i12915[2]
  var i12919 = i12915[3]
  var i12918 = []
  for(var i = 0; i < i12919.length; i += 1) {
    i12918.push( i12919[i + 0] );
  }
  i12914.shaderDefinedKeywords = i12918
  var i12921 = i12915[4]
  var i12920 = []
  for(var i = 0; i < i12921.length; i += 1) {
    i12920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i12921[i + 0]) );
  }
  i12914.passes = i12920
  var i12923 = i12915[5]
  var i12922 = []
  for(var i = 0; i < i12923.length; i += 1) {
    i12922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i12923[i + 0]) );
  }
  i12914.usePasses = i12922
  var i12925 = i12915[6]
  var i12924 = []
  for(var i = 0; i < i12925.length; i += 1) {
    i12924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i12925[i + 0]) );
  }
  i12914.defaultParameterValues = i12924
  request.r(i12915[7], i12915[8], 0, i12914, 'unityFallbackShader')
  i12914.readDepth = !!i12915[9]
  i12914.hasDepthOnlyPass = !!i12915[10]
  i12914.isCreatedByShaderGraph = !!i12915[11]
  i12914.disableBatching = !!i12915[12]
  i12914.compiled = !!i12915[13]
  return i12914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i12928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i12929 = data
  i12928.shaderName = i12929[0]
  i12928.errorMessage = i12929[1]
  return i12928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i12934 = root || new pc.UnityShaderPass()
  var i12935 = data
  i12934.id = i12935[0]
  i12934.subShaderIndex = i12935[1]
  i12934.name = i12935[2]
  i12934.passType = i12935[3]
  i12934.grabPassTextureName = i12935[4]
  i12934.usePass = !!i12935[5]
  i12934.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12935[6], i12934.zTest)
  i12934.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12935[7], i12934.zWrite)
  i12934.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12935[8], i12934.culling)
  i12934.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i12935[9], i12934.blending)
  i12934.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i12935[10], i12934.alphaBlending)
  i12934.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12935[11], i12934.colorWriteMask)
  i12934.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12935[12], i12934.offsetUnits)
  i12934.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12935[13], i12934.offsetFactor)
  i12934.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12935[14], i12934.stencilRef)
  i12934.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12935[15], i12934.stencilReadMask)
  i12934.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12935[16], i12934.stencilWriteMask)
  i12934.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i12935[17], i12934.stencilOp)
  i12934.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i12935[18], i12934.stencilOpFront)
  i12934.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i12935[19], i12934.stencilOpBack)
  var i12937 = i12935[20]
  var i12936 = []
  for(var i = 0; i < i12937.length; i += 1) {
    i12936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i12937[i + 0]) );
  }
  i12934.tags = i12936
  var i12939 = i12935[21]
  var i12938 = []
  for(var i = 0; i < i12939.length; i += 1) {
    i12938.push( i12939[i + 0] );
  }
  i12934.passDefinedKeywords = i12938
  var i12941 = i12935[22]
  var i12940 = []
  for(var i = 0; i < i12941.length; i += 1) {
    i12940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i12941[i + 0]) );
  }
  i12934.passDefinedKeywordGroups = i12940
  var i12943 = i12935[23]
  var i12942 = []
  for(var i = 0; i < i12943.length; i += 1) {
    i12942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i12943[i + 0]) );
  }
  i12934.variants = i12942
  var i12945 = i12935[24]
  var i12944 = []
  for(var i = 0; i < i12945.length; i += 1) {
    i12944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i12945[i + 0]) );
  }
  i12934.excludedVariants = i12944
  i12934.hasDepthReader = !!i12935[25]
  return i12934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i12946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i12947 = data
  i12946.val = i12947[0]
  i12946.name = i12947[1]
  return i12946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i12948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i12949 = data
  i12948.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12949[0], i12948.src)
  i12948.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12949[1], i12948.dst)
  i12948.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12949[2], i12948.op)
  return i12948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i12950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i12951 = data
  i12950.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12951[0], i12950.pass)
  i12950.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12951[1], i12950.fail)
  i12950.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12951[2], i12950.zFail)
  i12950.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i12951[3], i12950.comp)
  return i12950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i12954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i12955 = data
  i12954.name = i12955[0]
  i12954.value = i12955[1]
  return i12954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i12958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i12959 = data
  var i12961 = i12959[0]
  var i12960 = []
  for(var i = 0; i < i12961.length; i += 1) {
    i12960.push( i12961[i + 0] );
  }
  i12958.keywords = i12960
  i12958.hasDiscard = !!i12959[1]
  return i12958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i12964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i12965 = data
  i12964.passId = i12965[0]
  i12964.subShaderIndex = i12965[1]
  var i12967 = i12965[2]
  var i12966 = []
  for(var i = 0; i < i12967.length; i += 1) {
    i12966.push( i12967[i + 0] );
  }
  i12964.keywords = i12966
  i12964.vertexProgram = i12965[3]
  i12964.fragmentProgram = i12965[4]
  i12964.exportedForWebGl2 = !!i12965[5]
  i12964.readDepth = !!i12965[6]
  return i12964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i12970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i12971 = data
  request.r(i12971[0], i12971[1], 0, i12970, 'shader')
  i12970.pass = i12971[2]
  return i12970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i12974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i12975 = data
  i12974.name = i12975[0]
  i12974.type = i12975[1]
  i12974.value = new pc.Vec4( i12975[2], i12975[3], i12975[4], i12975[5] )
  i12974.textureValue = i12975[6]
  i12974.shaderPropertyFlag = i12975[7]
  return i12974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i12976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i12977 = data
  i12976.name = i12977[0]
  request.r(i12977[1], i12977[2], 0, i12976, 'texture')
  i12976.aabb = i12977[3]
  i12976.vertices = i12977[4]
  i12976.triangles = i12977[5]
  i12976.textureRect = UnityEngine.Rect.MinMaxRect(i12977[6], i12977[7], i12977[8], i12977[9])
  i12976.packedRect = UnityEngine.Rect.MinMaxRect(i12977[10], i12977[11], i12977[12], i12977[13])
  i12976.border = new pc.Vec4( i12977[14], i12977[15], i12977[16], i12977[17] )
  i12976.transparency = i12977[18]
  i12976.bounds = i12977[19]
  i12976.pixelsPerUnit = i12977[20]
  i12976.textureWidth = i12977[21]
  i12976.textureHeight = i12977[22]
  i12976.nativeSize = new pc.Vec2( i12977[23], i12977[24] )
  i12976.pivot = new pc.Vec2( i12977[25], i12977[26] )
  i12976.textureRectOffset = new pc.Vec2( i12977[27], i12977[28] )
  return i12976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i12978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i12979 = data
  i12978.name = i12979[0]
  return i12978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i12980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i12981 = data
  i12980.name = i12981[0]
  i12980.wrapMode = i12981[1]
  i12980.isLooping = !!i12981[2]
  i12980.length = i12981[3]
  var i12983 = i12981[4]
  var i12982 = []
  for(var i = 0; i < i12983.length; i += 1) {
    i12982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i12983[i + 0]) );
  }
  i12980.curves = i12982
  var i12985 = i12981[5]
  var i12984 = []
  for(var i = 0; i < i12985.length; i += 1) {
    i12984.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i12985[i + 0]) );
  }
  i12980.events = i12984
  i12980.halfPrecision = !!i12981[6]
  i12980._frameRate = i12981[7]
  i12980.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i12981[8], i12980.localBounds)
  i12980.hasMuscleCurves = !!i12981[9]
  var i12987 = i12981[10]
  var i12986 = []
  for(var i = 0; i < i12987.length; i += 1) {
    i12986.push( i12987[i + 0] );
  }
  i12980.clipMuscleConstant = i12986
  i12980.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i12981[11], i12980.clipBindingConstant)
  return i12980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i12990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i12991 = data
  i12990.path = i12991[0]
  i12990.hash = i12991[1]
  i12990.componentType = i12991[2]
  i12990.property = i12991[3]
  i12990.keys = i12991[4]
  var i12993 = i12991[5]
  var i12992 = []
  for(var i = 0; i < i12993.length; i += 1) {
    i12992.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i12993[i + 0]) );
  }
  i12990.objectReferenceKeys = i12992
  return i12990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i12996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i12997 = data
  i12996.time = i12997[0]
  request.r(i12997[1], i12997[2], 0, i12996, 'value')
  return i12996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i13000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i13001 = data
  i13000.functionName = i13001[0]
  i13000.floatParameter = i13001[1]
  i13000.intParameter = i13001[2]
  i13000.stringParameter = i13001[3]
  request.r(i13001[4], i13001[5], 0, i13000, 'objectReferenceParameter')
  i13000.time = i13001[6]
  return i13000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i13002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i13003 = data
  i13002.center = new pc.Vec3( i13003[0], i13003[1], i13003[2] )
  i13002.extends = new pc.Vec3( i13003[3], i13003[4], i13003[5] )
  return i13002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i13006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i13007 = data
  var i13009 = i13007[0]
  var i13008 = []
  for(var i = 0; i < i13009.length; i += 1) {
    i13008.push( i13009[i + 0] );
  }
  i13006.genericBindings = i13008
  var i13011 = i13007[1]
  var i13010 = []
  for(var i = 0; i < i13011.length; i += 1) {
    i13010.push( i13011[i + 0] );
  }
  i13006.pptrCurveMapping = i13010
  return i13006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i13012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i13013 = data
  i13012.name = i13013[0]
  i13012.ascent = i13013[1]
  i13012.originalLineHeight = i13013[2]
  i13012.fontSize = i13013[3]
  var i13015 = i13013[4]
  var i13014 = []
  for(var i = 0; i < i13015.length; i += 1) {
    i13014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i13015[i + 0]) );
  }
  i13012.characterInfo = i13014
  request.r(i13013[5], i13013[6], 0, i13012, 'texture')
  i13012.originalFontSize = i13013[7]
  return i13012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i13018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i13019 = data
  i13018.index = i13019[0]
  i13018.advance = i13019[1]
  i13018.bearing = i13019[2]
  i13018.glyphWidth = i13019[3]
  i13018.glyphHeight = i13019[4]
  i13018.minX = i13019[5]
  i13018.maxX = i13019[6]
  i13018.minY = i13019[7]
  i13018.maxY = i13019[8]
  i13018.uvBottomLeftX = i13019[9]
  i13018.uvBottomLeftY = i13019[10]
  i13018.uvBottomRightX = i13019[11]
  i13018.uvBottomRightY = i13019[12]
  i13018.uvTopLeftX = i13019[13]
  i13018.uvTopLeftY = i13019[14]
  i13018.uvTopRightX = i13019[15]
  i13018.uvTopRightY = i13019[16]
  return i13018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i13020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i13021 = data
  i13020.name = i13021[0]
  var i13023 = i13021[1]
  var i13022 = []
  for(var i = 0; i < i13023.length; i += 1) {
    i13022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i13023[i + 0]) );
  }
  i13020.layers = i13022
  var i13025 = i13021[2]
  var i13024 = []
  for(var i = 0; i < i13025.length; i += 1) {
    i13024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i13025[i + 0]) );
  }
  i13020.parameters = i13024
  i13020.animationClips = i13021[3]
  i13020.avatarUnsupported = i13021[4]
  return i13020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i13028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i13029 = data
  i13028.name = i13029[0]
  i13028.defaultWeight = i13029[1]
  i13028.blendingMode = i13029[2]
  i13028.avatarMask = i13029[3]
  i13028.syncedLayerIndex = i13029[4]
  i13028.syncedLayerAffectsTiming = !!i13029[5]
  i13028.syncedLayers = i13029[6]
  i13028.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i13029[7], i13028.stateMachine)
  return i13028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i13030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i13031 = data
  i13030.id = i13031[0]
  i13030.name = i13031[1]
  i13030.path = i13031[2]
  var i13033 = i13031[3]
  var i13032 = []
  for(var i = 0; i < i13033.length; i += 1) {
    i13032.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i13033[i + 0]) );
  }
  i13030.states = i13032
  var i13035 = i13031[4]
  var i13034 = []
  for(var i = 0; i < i13035.length; i += 1) {
    i13034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i13035[i + 0]) );
  }
  i13030.machines = i13034
  var i13037 = i13031[5]
  var i13036 = []
  for(var i = 0; i < i13037.length; i += 1) {
    i13036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i13037[i + 0]) );
  }
  i13030.entryStateTransitions = i13036
  var i13039 = i13031[6]
  var i13038 = []
  for(var i = 0; i < i13039.length; i += 1) {
    i13038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i13039[i + 0]) );
  }
  i13030.exitStateTransitions = i13038
  var i13041 = i13031[7]
  var i13040 = []
  for(var i = 0; i < i13041.length; i += 1) {
    i13040.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i13041[i + 0]) );
  }
  i13030.anyStateTransitions = i13040
  i13030.defaultStateId = i13031[8]
  return i13030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i13044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i13045 = data
  i13044.id = i13045[0]
  i13044.name = i13045[1]
  i13044.cycleOffset = i13045[2]
  i13044.cycleOffsetParameter = i13045[3]
  i13044.cycleOffsetParameterActive = !!i13045[4]
  i13044.mirror = !!i13045[5]
  i13044.mirrorParameter = i13045[6]
  i13044.mirrorParameterActive = !!i13045[7]
  i13044.motionId = i13045[8]
  i13044.nameHash = i13045[9]
  i13044.fullPathHash = i13045[10]
  i13044.speed = i13045[11]
  i13044.speedParameter = i13045[12]
  i13044.speedParameterActive = !!i13045[13]
  i13044.tag = i13045[14]
  i13044.tagHash = i13045[15]
  i13044.writeDefaultValues = !!i13045[16]
  var i13047 = i13045[17]
  var i13046 = []
  for(var i = 0; i < i13047.length; i += 2) {
  request.r(i13047[i + 0], i13047[i + 1], 2, i13046, '')
  }
  i13044.behaviours = i13046
  var i13049 = i13045[18]
  var i13048 = []
  for(var i = 0; i < i13049.length; i += 1) {
    i13048.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i13049[i + 0]) );
  }
  i13044.transitions = i13048
  return i13044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i13054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i13055 = data
  i13054.fullPath = i13055[0]
  i13054.canTransitionToSelf = !!i13055[1]
  i13054.duration = i13055[2]
  i13054.exitTime = i13055[3]
  i13054.hasExitTime = !!i13055[4]
  i13054.hasFixedDuration = !!i13055[5]
  i13054.interruptionSource = i13055[6]
  i13054.offset = i13055[7]
  i13054.orderedInterruption = !!i13055[8]
  i13054.destinationStateId = i13055[9]
  i13054.isExit = !!i13055[10]
  i13054.mute = !!i13055[11]
  i13054.solo = !!i13055[12]
  var i13057 = i13055[13]
  var i13056 = []
  for(var i = 0; i < i13057.length; i += 1) {
    i13056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i13057[i + 0]) );
  }
  i13054.conditions = i13056
  return i13054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i13062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i13063 = data
  i13062.destinationStateId = i13063[0]
  i13062.isExit = !!i13063[1]
  i13062.mute = !!i13063[2]
  i13062.solo = !!i13063[3]
  var i13065 = i13063[4]
  var i13064 = []
  for(var i = 0; i < i13065.length; i += 1) {
    i13064.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i13065[i + 0]) );
  }
  i13062.conditions = i13064
  return i13062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i13068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i13069 = data
  i13068.mode = i13069[0]
  i13068.parameter = i13069[1]
  i13068.threshold = i13069[2]
  return i13068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i13072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i13073 = data
  i13072.defaultBool = !!i13073[0]
  i13072.defaultFloat = i13073[1]
  i13072.defaultInt = i13073[2]
  i13072.name = i13073[3]
  i13072.nameHash = i13073[4]
  i13072.type = i13073[5]
  return i13072
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i13074 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i13075 = data
  i13074.useSafeMode = !!i13075[0]
  i13074.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i13075[1], i13074.safeModeOptions)
  i13074.timeScale = i13075[2]
  i13074.unscaledTimeScale = i13075[3]
  i13074.useSmoothDeltaTime = !!i13075[4]
  i13074.maxSmoothUnscaledTime = i13075[5]
  i13074.rewindCallbackMode = i13075[6]
  i13074.showUnityEditorReport = !!i13075[7]
  i13074.logBehaviour = i13075[8]
  i13074.drawGizmos = !!i13075[9]
  i13074.defaultRecyclable = !!i13075[10]
  i13074.defaultAutoPlay = i13075[11]
  i13074.defaultUpdateType = i13075[12]
  i13074.defaultTimeScaleIndependent = !!i13075[13]
  i13074.defaultEaseType = i13075[14]
  i13074.defaultEaseOvershootOrAmplitude = i13075[15]
  i13074.defaultEasePeriod = i13075[16]
  i13074.defaultAutoKill = !!i13075[17]
  i13074.defaultLoopType = i13075[18]
  i13074.debugMode = !!i13075[19]
  i13074.debugStoreTargetId = !!i13075[20]
  i13074.showPreviewPanel = !!i13075[21]
  i13074.storeSettingsLocation = i13075[22]
  i13074.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i13075[23], i13074.modules)
  i13074.createASMDEF = !!i13075[24]
  i13074.showPlayingTweens = !!i13075[25]
  i13074.showPausedTweens = !!i13075[26]
  return i13074
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i13076 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i13077 = data
  i13076.logBehaviour = i13077[0]
  i13076.nestedTweenFailureBehaviour = i13077[1]
  return i13076
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i13078 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i13079 = data
  i13078.showPanel = !!i13079[0]
  i13078.audioEnabled = !!i13079[1]
  i13078.physicsEnabled = !!i13079[2]
  i13078.physics2DEnabled = !!i13079[3]
  i13078.spriteEnabled = !!i13079[4]
  i13078.uiEnabled = !!i13079[5]
  i13078.textMeshProEnabled = !!i13079[6]
  i13078.tk2DEnabled = !!i13079[7]
  i13078.deAudioEnabled = !!i13079[8]
  i13078.deUnityExtendedEnabled = !!i13079[9]
  i13078.epoOutlineEnabled = !!i13079[10]
  return i13078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i13080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i13081 = data
  var i13083 = i13081[0]
  var i13082 = []
  for(var i = 0; i < i13083.length; i += 1) {
    i13082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i13083[i + 0]) );
  }
  i13080.files = i13082
  i13080.componentToPrefabIds = i13081[1]
  return i13080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i13086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i13087 = data
  i13086.path = i13087[0]
  request.r(i13087[1], i13087[2], 0, i13086, 'unityObject')
  return i13086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i13088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i13089 = data
  var i13091 = i13089[0]
  var i13090 = []
  for(var i = 0; i < i13091.length; i += 1) {
    i13090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i13091[i + 0]) );
  }
  i13088.scriptsExecutionOrder = i13090
  var i13093 = i13089[1]
  var i13092 = []
  for(var i = 0; i < i13093.length; i += 1) {
    i13092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i13093[i + 0]) );
  }
  i13088.sortingLayers = i13092
  var i13095 = i13089[2]
  var i13094 = []
  for(var i = 0; i < i13095.length; i += 1) {
    i13094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i13095[i + 0]) );
  }
  i13088.cullingLayers = i13094
  i13088.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i13089[3], i13088.timeSettings)
  i13088.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i13089[4], i13088.physicsSettings)
  i13088.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i13089[5], i13088.physics2DSettings)
  i13088.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i13089[6], i13088.qualitySettings)
  i13088.enableRealtimeShadows = !!i13089[7]
  i13088.enableAutoInstancing = !!i13089[8]
  i13088.enableStaticBatching = !!i13089[9]
  i13088.enableDynamicBatching = !!i13089[10]
  i13088.usePreservativeDynamicBatching = !!i13089[11]
  i13088.lightmapEncodingQuality = i13089[12]
  i13088.desiredColorSpace = i13089[13]
  var i13097 = i13089[14]
  var i13096 = []
  for(var i = 0; i < i13097.length; i += 1) {
    i13096.push( i13097[i + 0] );
  }
  i13088.allTags = i13096
  return i13088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i13100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i13101 = data
  i13100.name = i13101[0]
  i13100.value = i13101[1]
  return i13100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i13104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i13105 = data
  i13104.id = i13105[0]
  i13104.name = i13105[1]
  i13104.value = i13105[2]
  return i13104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i13108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i13109 = data
  i13108.id = i13109[0]
  i13108.name = i13109[1]
  return i13108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i13110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i13111 = data
  i13110.fixedDeltaTime = i13111[0]
  i13110.maximumDeltaTime = i13111[1]
  i13110.timeScale = i13111[2]
  i13110.maximumParticleTimestep = i13111[3]
  return i13110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i13112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i13113 = data
  i13112.gravity = new pc.Vec3( i13113[0], i13113[1], i13113[2] )
  i13112.defaultSolverIterations = i13113[3]
  i13112.bounceThreshold = i13113[4]
  i13112.autoSyncTransforms = !!i13113[5]
  i13112.autoSimulation = !!i13113[6]
  var i13115 = i13113[7]
  var i13114 = []
  for(var i = 0; i < i13115.length; i += 1) {
    i13114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i13115[i + 0]) );
  }
  i13112.collisionMatrix = i13114
  return i13112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i13118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i13119 = data
  i13118.enabled = !!i13119[0]
  i13118.layerId = i13119[1]
  i13118.otherLayerId = i13119[2]
  return i13118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i13120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i13121 = data
  request.r(i13121[0], i13121[1], 0, i13120, 'material')
  i13120.gravity = new pc.Vec2( i13121[2], i13121[3] )
  i13120.positionIterations = i13121[4]
  i13120.velocityIterations = i13121[5]
  i13120.velocityThreshold = i13121[6]
  i13120.maxLinearCorrection = i13121[7]
  i13120.maxAngularCorrection = i13121[8]
  i13120.maxTranslationSpeed = i13121[9]
  i13120.maxRotationSpeed = i13121[10]
  i13120.baumgarteScale = i13121[11]
  i13120.baumgarteTOIScale = i13121[12]
  i13120.timeToSleep = i13121[13]
  i13120.linearSleepTolerance = i13121[14]
  i13120.angularSleepTolerance = i13121[15]
  i13120.defaultContactOffset = i13121[16]
  i13120.autoSimulation = !!i13121[17]
  i13120.queriesHitTriggers = !!i13121[18]
  i13120.queriesStartInColliders = !!i13121[19]
  i13120.callbacksOnDisable = !!i13121[20]
  i13120.reuseCollisionCallbacks = !!i13121[21]
  i13120.autoSyncTransforms = !!i13121[22]
  var i13123 = i13121[23]
  var i13122 = []
  for(var i = 0; i < i13123.length; i += 1) {
    i13122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i13123[i + 0]) );
  }
  i13120.collisionMatrix = i13122
  return i13120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i13126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i13127 = data
  i13126.enabled = !!i13127[0]
  i13126.layerId = i13127[1]
  i13126.otherLayerId = i13127[2]
  return i13126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i13128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i13129 = data
  var i13131 = i13129[0]
  var i13130 = []
  for(var i = 0; i < i13131.length; i += 1) {
    i13130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i13131[i + 0]) );
  }
  i13128.qualityLevels = i13130
  var i13133 = i13129[1]
  var i13132 = []
  for(var i = 0; i < i13133.length; i += 1) {
    i13132.push( i13133[i + 0] );
  }
  i13128.names = i13132
  i13128.shadows = i13129[2]
  i13128.anisotropicFiltering = i13129[3]
  i13128.antiAliasing = i13129[4]
  i13128.lodBias = i13129[5]
  i13128.shadowCascades = i13129[6]
  i13128.shadowDistance = i13129[7]
  i13128.shadowmaskMode = i13129[8]
  i13128.shadowProjection = i13129[9]
  i13128.shadowResolution = i13129[10]
  i13128.softParticles = !!i13129[11]
  i13128.softVegetation = !!i13129[12]
  i13128.activeColorSpace = i13129[13]
  i13128.desiredColorSpace = i13129[14]
  i13128.masterTextureLimit = i13129[15]
  i13128.maxQueuedFrames = i13129[16]
  i13128.particleRaycastBudget = i13129[17]
  i13128.pixelLightCount = i13129[18]
  i13128.realtimeReflectionProbes = !!i13129[19]
  i13128.shadowCascade2Split = i13129[20]
  i13128.shadowCascade4Split = new pc.Vec3( i13129[21], i13129[22], i13129[23] )
  i13128.streamingMipmapsActive = !!i13129[24]
  i13128.vSyncCount = i13129[25]
  i13128.asyncUploadBufferSize = i13129[26]
  i13128.asyncUploadTimeSlice = i13129[27]
  i13128.billboardsFaceCameraPosition = !!i13129[28]
  i13128.shadowNearPlaneOffset = i13129[29]
  i13128.streamingMipmapsMemoryBudget = i13129[30]
  i13128.maximumLODLevel = i13129[31]
  i13128.streamingMipmapsAddAllCameras = !!i13129[32]
  i13128.streamingMipmapsMaxLevelReduction = i13129[33]
  i13128.streamingMipmapsRenderersPerFrame = i13129[34]
  i13128.resolutionScalingFixedDPIFactor = i13129[35]
  i13128.streamingMipmapsMaxFileIORequests = i13129[36]
  i13128.currentQualityLevel = i13129[37]
  return i13128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i13136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i13137 = data
  var i13139 = i13137[0]
  var i13138 = []
  for(var i = 0; i < i13139.length; i += 1) {
    i13138.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i13139[i + 0]) );
  }
  i13136.groups = i13138
  var i13141 = i13137[1]
  var i13140 = []
  for(var i = 0; i < i13141.length; i += 1) {
    i13140.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i13141[i + 0]) );
  }
  i13136.snapshots = i13140
  return i13136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i13144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i13145 = data
  i13144.id = i13145[0]
  i13144.childGroupIds = i13145[1]
  i13144.name = i13145[2]
  return i13144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i13148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i13149 = data
  i13148.id = i13149[0]
  var i13151 = i13149[1]
  var i13150 = []
  for(var i = 0; i < i13151.length; i += 1) {
    i13150.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i13151[i + 0]) );
  }
  i13148.parameters = i13150
  return i13148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i13154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i13155 = data
  i13154.name = i13155[0]
  i13154.value = i13155[1]
  return i13154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i13158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i13159 = data
  i13158.weight = i13159[0]
  i13158.vertices = i13159[1]
  i13158.normals = i13159[2]
  i13158.tangents = i13159[3]
  return i13158
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[82],"83":[9],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[40],"93":[40],"94":[40],"95":[40],"96":[40],"97":[40],"98":[40],"99":[40],"100":[40],"101":[40],"102":[40],"103":[40],"104":[40],"105":[9],"106":[49],"107":[108],"109":[108],"8":[7],"110":[34],"46":[26],"111":[29],"112":[26],"113":[114],"115":[114],"116":[14],"56":[29],"117":[26],"118":[25],"36":[26],"119":[7],"120":[7],"12":[8],"16":[15,7],"121":[7],"11":[8],"122":[7],"123":[7],"124":[7],"125":[7],"126":[7],"127":[7],"128":[7],"129":[7],"130":[7],"131":[15,7],"132":[7],"133":[7],"134":[7],"135":[7],"18":[15,7],"136":[7],"137":[68],"138":[68],"69":[68],"139":[68],"140":[9],"141":[9]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","DG.Tweening.DOTweenAnimation","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Button","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Level1_Cloth_Playable_Step1to4","UnityEngine.GameObject","BasicDrag","UnityEngine.SpriteRenderer","BD_CameraFollow","Level1_SurfController","UnityEngine.BoxCollider2D","RotaryTimerKnob","UnityEngine.AudioClip","UnityEngine.AudioSource","PlayableCTA","UnityEngine.LineRenderer","TextureOffsetScroller","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteMask","_2dxFX_Wave","BD_Clamp","UnityEngine.Rigidbody2D","PlaceItem","ActionOnTap","BD_Action","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.CircleCollider2D","BD_Fold","BD_Progress","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","StaticFixedPipe","BD_SpriteChange","MenuLevel","IntroLevelAnim","Level_PoseController","BD_AnimationHelper","SpriteButton","PlayableRouter","DressChangeIntro","MenuDraggable","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","RadialCircleFill","TeaseTapCTA","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "15.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "4Sept2026_Lvl1_2_Step_1to2_v1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1754";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4231";

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

Deserializers.buildID = "56d62166-aa1a-47ed-9ef6-ba4d9b7c9139";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

