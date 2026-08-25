var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i12598 = root || request.c( 'UnityEngine.JointSpring' )
  var i12599 = data
  i12598.spring = i12599[0]
  i12598.damper = i12599[1]
  i12598.targetPosition = i12599[2]
  return i12598
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i12600 = root || request.c( 'UnityEngine.JointMotor' )
  var i12601 = data
  i12600.m_TargetVelocity = i12601[0]
  i12600.m_Force = i12601[1]
  i12600.m_FreeSpin = i12601[2]
  return i12600
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i12602 = root || request.c( 'UnityEngine.JointLimits' )
  var i12603 = data
  i12602.m_Min = i12603[0]
  i12602.m_Max = i12603[1]
  i12602.m_Bounciness = i12603[2]
  i12602.m_BounceMinVelocity = i12603[3]
  i12602.m_ContactDistance = i12603[4]
  i12602.minBounce = i12603[5]
  i12602.maxBounce = i12603[6]
  return i12602
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i12604 = root || request.c( 'UnityEngine.JointDrive' )
  var i12605 = data
  i12604.m_PositionSpring = i12605[0]
  i12604.m_PositionDamper = i12605[1]
  i12604.m_MaximumForce = i12605[2]
  i12604.m_UseAcceleration = i12605[3]
  return i12604
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i12606 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i12607 = data
  i12606.m_Spring = i12607[0]
  i12606.m_Damper = i12607[1]
  return i12606
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i12608 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i12609 = data
  i12608.m_Limit = i12609[0]
  i12608.m_Bounciness = i12609[1]
  i12608.m_ContactDistance = i12609[2]
  return i12608
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i12610 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i12611 = data
  i12610.m_ExtremumSlip = i12611[0]
  i12610.m_ExtremumValue = i12611[1]
  i12610.m_AsymptoteSlip = i12611[2]
  i12610.m_AsymptoteValue = i12611[3]
  i12610.m_Stiffness = i12611[4]
  return i12610
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i12612 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i12613 = data
  i12612.m_LowerAngle = i12613[0]
  i12612.m_UpperAngle = i12613[1]
  return i12612
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i12614 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i12615 = data
  i12614.m_MotorSpeed = i12615[0]
  i12614.m_MaximumMotorTorque = i12615[1]
  return i12614
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i12616 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i12617 = data
  i12616.m_DampingRatio = i12617[0]
  i12616.m_Frequency = i12617[1]
  i12616.m_Angle = i12617[2]
  return i12616
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i12618 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i12619 = data
  i12618.m_LowerTranslation = i12619[0]
  i12618.m_UpperTranslation = i12619[1]
  return i12618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i12620 = root || new pc.UnityMaterial()
  var i12621 = data
  i12620.name = i12621[0]
  request.r(i12621[1], i12621[2], 0, i12620, 'shader')
  i12620.renderQueue = i12621[3]
  i12620.enableInstancing = !!i12621[4]
  var i12623 = i12621[5]
  var i12622 = []
  for(var i = 0; i < i12623.length; i += 1) {
    i12622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i12623[i + 0]) );
  }
  i12620.floatParameters = i12622
  var i12625 = i12621[6]
  var i12624 = []
  for(var i = 0; i < i12625.length; i += 1) {
    i12624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i12625[i + 0]) );
  }
  i12620.colorParameters = i12624
  var i12627 = i12621[7]
  var i12626 = []
  for(var i = 0; i < i12627.length; i += 1) {
    i12626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i12627[i + 0]) );
  }
  i12620.vectorParameters = i12626
  var i12629 = i12621[8]
  var i12628 = []
  for(var i = 0; i < i12629.length; i += 1) {
    i12628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i12629[i + 0]) );
  }
  i12620.textureParameters = i12628
  var i12631 = i12621[9]
  var i12630 = []
  for(var i = 0; i < i12631.length; i += 1) {
    i12630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i12631[i + 0]) );
  }
  i12620.materialFlags = i12630
  return i12620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i12634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i12635 = data
  i12634.name = i12635[0]
  i12634.value = i12635[1]
  return i12634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i12638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i12639 = data
  i12638.name = i12639[0]
  i12638.value = new pc.Color(i12639[1], i12639[2], i12639[3], i12639[4])
  return i12638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i12642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i12643 = data
  i12642.name = i12643[0]
  i12642.value = new pc.Vec4( i12643[1], i12643[2], i12643[3], i12643[4] )
  return i12642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i12646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i12647 = data
  i12646.name = i12647[0]
  request.r(i12647[1], i12647[2], 0, i12646, 'value')
  return i12646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i12650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i12651 = data
  i12650.name = i12651[0]
  i12650.enabled = !!i12651[1]
  return i12650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i12652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i12653 = data
  i12652.name = i12653[0]
  i12652.width = i12653[1]
  i12652.height = i12653[2]
  i12652.mipmapCount = i12653[3]
  i12652.anisoLevel = i12653[4]
  i12652.filterMode = i12653[5]
  i12652.hdr = !!i12653[6]
  i12652.format = i12653[7]
  i12652.wrapMode = i12653[8]
  i12652.alphaIsTransparency = !!i12653[9]
  i12652.alphaSource = i12653[10]
  i12652.graphicsFormat = i12653[11]
  i12652.sRGBTexture = !!i12653[12]
  i12652.desiredColorSpace = i12653[13]
  i12652.wrapU = i12653[14]
  i12652.wrapV = i12653[15]
  return i12652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i12654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i12655 = data
  i12654.name = i12655[0]
  i12654.halfPrecision = !!i12655[1]
  i12654.useSimplification = !!i12655[2]
  i12654.useUInt32IndexFormat = !!i12655[3]
  i12654.vertexCount = i12655[4]
  i12654.aabb = i12655[5]
  var i12657 = i12655[6]
  var i12656 = []
  for(var i = 0; i < i12657.length; i += 1) {
    i12656.push( !!i12657[i + 0] );
  }
  i12654.streams = i12656
  i12654.vertices = i12655[7]
  var i12659 = i12655[8]
  var i12658 = []
  for(var i = 0; i < i12659.length; i += 1) {
    i12658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i12659[i + 0]) );
  }
  i12654.subMeshes = i12658
  var i12661 = i12655[9]
  var i12660 = []
  for(var i = 0; i < i12661.length; i += 16) {
    i12660.push( new pc.Mat4().setData(i12661[i + 0], i12661[i + 1], i12661[i + 2], i12661[i + 3],  i12661[i + 4], i12661[i + 5], i12661[i + 6], i12661[i + 7],  i12661[i + 8], i12661[i + 9], i12661[i + 10], i12661[i + 11],  i12661[i + 12], i12661[i + 13], i12661[i + 14], i12661[i + 15]) );
  }
  i12654.bindposes = i12660
  var i12663 = i12655[10]
  var i12662 = []
  for(var i = 0; i < i12663.length; i += 1) {
    i12662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i12663[i + 0]) );
  }
  i12654.blendShapes = i12662
  return i12654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i12668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i12669 = data
  i12668.triangles = i12669[0]
  return i12668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i12674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i12675 = data
  i12674.name = i12675[0]
  var i12677 = i12675[1]
  var i12676 = []
  for(var i = 0; i < i12677.length; i += 1) {
    i12676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i12677[i + 0]) );
  }
  i12674.frames = i12676
  return i12674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i12678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i12679 = data
  i12678.position = new pc.Vec3( i12679[0], i12679[1], i12679[2] )
  i12678.scale = new pc.Vec3( i12679[3], i12679[4], i12679[5] )
  i12678.rotation = new pc.Quat(i12679[6], i12679[7], i12679[8], i12679[9])
  return i12678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i12680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i12681 = data
  i12680.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i12681[0], i12680.main)
  i12680.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i12681[1], i12680.colorBySpeed)
  i12680.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i12681[2], i12680.colorOverLifetime)
  i12680.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i12681[3], i12680.emission)
  i12680.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i12681[4], i12680.rotationBySpeed)
  i12680.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i12681[5], i12680.rotationOverLifetime)
  i12680.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i12681[6], i12680.shape)
  i12680.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i12681[7], i12680.sizeBySpeed)
  i12680.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i12681[8], i12680.sizeOverLifetime)
  i12680.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i12681[9], i12680.textureSheetAnimation)
  i12680.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i12681[10], i12680.velocityOverLifetime)
  i12680.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i12681[11], i12680.noise)
  i12680.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i12681[12], i12680.inheritVelocity)
  i12680.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i12681[13], i12680.forceOverLifetime)
  i12680.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i12681[14], i12680.limitVelocityOverLifetime)
  i12680.useAutoRandomSeed = !!i12681[15]
  i12680.randomSeed = i12681[16]
  return i12680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i12682 = root || new pc.ParticleSystemMain()
  var i12683 = data
  i12682.duration = i12683[0]
  i12682.loop = !!i12683[1]
  i12682.prewarm = !!i12683[2]
  i12682.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12683[3], i12682.startDelay)
  i12682.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12683[4], i12682.startLifetime)
  i12682.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12683[5], i12682.startSpeed)
  i12682.startSize3D = !!i12683[6]
  i12682.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12683[7], i12682.startSizeX)
  i12682.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12683[8], i12682.startSizeY)
  i12682.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12683[9], i12682.startSizeZ)
  i12682.startRotation3D = !!i12683[10]
  i12682.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12683[11], i12682.startRotationX)
  i12682.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12683[12], i12682.startRotationY)
  i12682.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12683[13], i12682.startRotationZ)
  i12682.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i12683[14], i12682.startColor)
  i12682.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12683[15], i12682.gravityModifier)
  i12682.simulationSpace = i12683[16]
  request.r(i12683[17], i12683[18], 0, i12682, 'customSimulationSpace')
  i12682.simulationSpeed = i12683[19]
  i12682.useUnscaledTime = !!i12683[20]
  i12682.scalingMode = i12683[21]
  i12682.playOnAwake = !!i12683[22]
  i12682.maxParticles = i12683[23]
  i12682.emitterVelocityMode = i12683[24]
  i12682.stopAction = i12683[25]
  return i12682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i12684 = root || new pc.MinMaxCurve()
  var i12685 = data
  i12684.mode = i12685[0]
  i12684.curveMin = new pc.AnimationCurve( { keys_flow: i12685[1] } )
  i12684.curveMax = new pc.AnimationCurve( { keys_flow: i12685[2] } )
  i12684.curveMultiplier = i12685[3]
  i12684.constantMin = i12685[4]
  i12684.constantMax = i12685[5]
  return i12684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i12686 = root || new pc.MinMaxGradient()
  var i12687 = data
  i12686.mode = i12687[0]
  i12686.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i12687[1], i12686.gradientMin)
  i12686.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i12687[2], i12686.gradientMax)
  i12686.colorMin = new pc.Color(i12687[3], i12687[4], i12687[5], i12687[6])
  i12686.colorMax = new pc.Color(i12687[7], i12687[8], i12687[9], i12687[10])
  return i12686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i12688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i12689 = data
  i12688.mode = i12689[0]
  var i12691 = i12689[1]
  var i12690 = []
  for(var i = 0; i < i12691.length; i += 1) {
    i12690.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i12691[i + 0]) );
  }
  i12688.colorKeys = i12690
  var i12693 = i12689[2]
  var i12692 = []
  for(var i = 0; i < i12693.length; i += 1) {
    i12692.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i12693[i + 0]) );
  }
  i12688.alphaKeys = i12692
  return i12688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i12694 = root || new pc.ParticleSystemColorBySpeed()
  var i12695 = data
  i12694.enabled = !!i12695[0]
  i12694.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i12695[1], i12694.color)
  i12694.range = new pc.Vec2( i12695[2], i12695[3] )
  return i12694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i12698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i12699 = data
  i12698.color = new pc.Color(i12699[0], i12699[1], i12699[2], i12699[3])
  i12698.time = i12699[4]
  return i12698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i12702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i12703 = data
  i12702.alpha = i12703[0]
  i12702.time = i12703[1]
  return i12702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i12704 = root || new pc.ParticleSystemColorOverLifetime()
  var i12705 = data
  i12704.enabled = !!i12705[0]
  i12704.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i12705[1], i12704.color)
  return i12704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i12706 = root || new pc.ParticleSystemEmitter()
  var i12707 = data
  i12706.enabled = !!i12707[0]
  i12706.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12707[1], i12706.rateOverTime)
  i12706.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12707[2], i12706.rateOverDistance)
  var i12709 = i12707[3]
  var i12708 = []
  for(var i = 0; i < i12709.length; i += 1) {
    i12708.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i12709[i + 0]) );
  }
  i12706.bursts = i12708
  return i12706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i12712 = root || new pc.ParticleSystemBurst()
  var i12713 = data
  i12712.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12713[0], i12712.count)
  i12712.cycleCount = i12713[1]
  i12712.minCount = i12713[2]
  i12712.maxCount = i12713[3]
  i12712.repeatInterval = i12713[4]
  i12712.time = i12713[5]
  return i12712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i12714 = root || new pc.ParticleSystemRotationBySpeed()
  var i12715 = data
  i12714.enabled = !!i12715[0]
  i12714.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12715[1], i12714.x)
  i12714.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12715[2], i12714.y)
  i12714.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12715[3], i12714.z)
  i12714.separateAxes = !!i12715[4]
  i12714.range = new pc.Vec2( i12715[5], i12715[6] )
  return i12714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i12716 = root || new pc.ParticleSystemRotationOverLifetime()
  var i12717 = data
  i12716.enabled = !!i12717[0]
  i12716.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12717[1], i12716.x)
  i12716.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12717[2], i12716.y)
  i12716.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12717[3], i12716.z)
  i12716.separateAxes = !!i12717[4]
  return i12716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i12718 = root || new pc.ParticleSystemShape()
  var i12719 = data
  i12718.enabled = !!i12719[0]
  i12718.shapeType = i12719[1]
  i12718.randomDirectionAmount = i12719[2]
  i12718.sphericalDirectionAmount = i12719[3]
  i12718.randomPositionAmount = i12719[4]
  i12718.alignToDirection = !!i12719[5]
  i12718.radius = i12719[6]
  i12718.radiusMode = i12719[7]
  i12718.radiusSpread = i12719[8]
  i12718.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12719[9], i12718.radiusSpeed)
  i12718.radiusThickness = i12719[10]
  i12718.angle = i12719[11]
  i12718.length = i12719[12]
  i12718.boxThickness = new pc.Vec3( i12719[13], i12719[14], i12719[15] )
  i12718.meshShapeType = i12719[16]
  request.r(i12719[17], i12719[18], 0, i12718, 'mesh')
  request.r(i12719[19], i12719[20], 0, i12718, 'meshRenderer')
  request.r(i12719[21], i12719[22], 0, i12718, 'skinnedMeshRenderer')
  i12718.useMeshMaterialIndex = !!i12719[23]
  i12718.meshMaterialIndex = i12719[24]
  i12718.useMeshColors = !!i12719[25]
  i12718.normalOffset = i12719[26]
  i12718.arc = i12719[27]
  i12718.arcMode = i12719[28]
  i12718.arcSpread = i12719[29]
  i12718.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12719[30], i12718.arcSpeed)
  i12718.donutRadius = i12719[31]
  i12718.position = new pc.Vec3( i12719[32], i12719[33], i12719[34] )
  i12718.rotation = new pc.Vec3( i12719[35], i12719[36], i12719[37] )
  i12718.scale = new pc.Vec3( i12719[38], i12719[39], i12719[40] )
  return i12718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i12720 = root || new pc.ParticleSystemSizeBySpeed()
  var i12721 = data
  i12720.enabled = !!i12721[0]
  i12720.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12721[1], i12720.x)
  i12720.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12721[2], i12720.y)
  i12720.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12721[3], i12720.z)
  i12720.separateAxes = !!i12721[4]
  i12720.range = new pc.Vec2( i12721[5], i12721[6] )
  return i12720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i12722 = root || new pc.ParticleSystemSizeOverLifetime()
  var i12723 = data
  i12722.enabled = !!i12723[0]
  i12722.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12723[1], i12722.x)
  i12722.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12723[2], i12722.y)
  i12722.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12723[3], i12722.z)
  i12722.separateAxes = !!i12723[4]
  return i12722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i12724 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i12725 = data
  i12724.enabled = !!i12725[0]
  i12724.mode = i12725[1]
  i12724.animation = i12725[2]
  i12724.numTilesX = i12725[3]
  i12724.numTilesY = i12725[4]
  i12724.useRandomRow = !!i12725[5]
  i12724.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12725[6], i12724.frameOverTime)
  i12724.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12725[7], i12724.startFrame)
  i12724.cycleCount = i12725[8]
  i12724.rowIndex = i12725[9]
  i12724.flipU = i12725[10]
  i12724.flipV = i12725[11]
  i12724.spriteCount = i12725[12]
  var i12727 = i12725[13]
  var i12726 = []
  for(var i = 0; i < i12727.length; i += 2) {
  request.r(i12727[i + 0], i12727[i + 1], 2, i12726, '')
  }
  i12724.sprites = i12726
  return i12724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i12730 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i12731 = data
  i12730.enabled = !!i12731[0]
  i12730.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12731[1], i12730.x)
  i12730.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12731[2], i12730.y)
  i12730.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12731[3], i12730.z)
  i12730.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12731[4], i12730.radial)
  i12730.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12731[5], i12730.speedModifier)
  i12730.space = i12731[6]
  i12730.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12731[7], i12730.orbitalX)
  i12730.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12731[8], i12730.orbitalY)
  i12730.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12731[9], i12730.orbitalZ)
  i12730.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12731[10], i12730.orbitalOffsetX)
  i12730.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12731[11], i12730.orbitalOffsetY)
  i12730.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12731[12], i12730.orbitalOffsetZ)
  return i12730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i12732 = root || new pc.ParticleSystemNoise()
  var i12733 = data
  i12732.enabled = !!i12733[0]
  i12732.separateAxes = !!i12733[1]
  i12732.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12733[2], i12732.strengthX)
  i12732.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12733[3], i12732.strengthY)
  i12732.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12733[4], i12732.strengthZ)
  i12732.frequency = i12733[5]
  i12732.damping = !!i12733[6]
  i12732.octaveCount = i12733[7]
  i12732.octaveMultiplier = i12733[8]
  i12732.octaveScale = i12733[9]
  i12732.quality = i12733[10]
  i12732.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12733[11], i12732.scrollSpeed)
  i12732.scrollSpeedMultiplier = i12733[12]
  i12732.remapEnabled = !!i12733[13]
  i12732.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12733[14], i12732.remapX)
  i12732.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12733[15], i12732.remapY)
  i12732.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12733[16], i12732.remapZ)
  i12732.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12733[17], i12732.positionAmount)
  i12732.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12733[18], i12732.rotationAmount)
  i12732.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12733[19], i12732.sizeAmount)
  return i12732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i12734 = root || new pc.ParticleSystemInheritVelocity()
  var i12735 = data
  i12734.enabled = !!i12735[0]
  i12734.mode = i12735[1]
  i12734.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12735[2], i12734.curve)
  return i12734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i12736 = root || new pc.ParticleSystemForceOverLifetime()
  var i12737 = data
  i12736.enabled = !!i12737[0]
  i12736.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12737[1], i12736.x)
  i12736.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12737[2], i12736.y)
  i12736.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12737[3], i12736.z)
  i12736.space = i12737[4]
  i12736.randomized = !!i12737[5]
  return i12736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i12738 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i12739 = data
  i12738.enabled = !!i12739[0]
  i12738.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12739[1], i12738.limit)
  i12738.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12739[2], i12738.limitX)
  i12738.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12739[3], i12738.limitY)
  i12738.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12739[4], i12738.limitZ)
  i12738.dampen = i12739[5]
  i12738.separateAxes = !!i12739[6]
  i12738.space = i12739[7]
  i12738.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i12739[8], i12738.drag)
  i12738.multiplyDragByParticleSize = !!i12739[9]
  i12738.multiplyDragByParticleVelocity = !!i12739[10]
  return i12738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i12740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i12741 = data
  request.r(i12741[0], i12741[1], 0, i12740, 'mesh')
  i12740.meshCount = i12741[2]
  i12740.activeVertexStreamsCount = i12741[3]
  i12740.alignment = i12741[4]
  i12740.renderMode = i12741[5]
  i12740.sortMode = i12741[6]
  i12740.lengthScale = i12741[7]
  i12740.velocityScale = i12741[8]
  i12740.cameraVelocityScale = i12741[9]
  i12740.normalDirection = i12741[10]
  i12740.sortingFudge = i12741[11]
  i12740.minParticleSize = i12741[12]
  i12740.maxParticleSize = i12741[13]
  i12740.pivot = new pc.Vec3( i12741[14], i12741[15], i12741[16] )
  request.r(i12741[17], i12741[18], 0, i12740, 'trailMaterial')
  i12740.applyActiveColorSpace = !!i12741[19]
  i12740.enabled = !!i12741[20]
  request.r(i12741[21], i12741[22], 0, i12740, 'sharedMaterial')
  var i12743 = i12741[23]
  var i12742 = []
  for(var i = 0; i < i12743.length; i += 2) {
  request.r(i12743[i + 0], i12743[i + 1], 2, i12742, '')
  }
  i12740.sharedMaterials = i12742
  i12740.receiveShadows = !!i12741[24]
  i12740.shadowCastingMode = i12741[25]
  i12740.sortingLayerID = i12741[26]
  i12740.sortingOrder = i12741[27]
  i12740.lightmapIndex = i12741[28]
  i12740.lightmapSceneIndex = i12741[29]
  i12740.lightmapScaleOffset = new pc.Vec4( i12741[30], i12741[31], i12741[32], i12741[33] )
  i12740.lightProbeUsage = i12741[34]
  i12740.reflectionProbeUsage = i12741[35]
  return i12740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i12746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i12747 = data
  i12746.name = i12747[0]
  i12746.tagId = i12747[1]
  i12746.enabled = !!i12747[2]
  i12746.isStatic = !!i12747[3]
  i12746.layer = i12747[4]
  return i12746
}

Deserializers["Level1_Hair_Playable"] = function (request, data, root) {
  var i12748 = root || request.c( 'Level1_Hair_Playable' )
  var i12749 = data
  request.r(i12749[0], i12749[1], 0, i12748, 'wetCloth')
  request.r(i12749[2], i12749[3], 0, i12748, 'waterDripingParticle')
  i12748.ZoomStep1 = request.d('ZoomPos', i12749[4], i12748.ZoomStep1)
  var i12751 = i12749[5]
  var i12750 = []
  for(var i = 0; i < i12751.length; i += 2) {
  request.r(i12751[i + 0], i12751[i + 1], 2, i12750, '')
  }
  i12748.AllTrash = i12750
  var i12753 = i12749[6]
  var i12752 = []
  for(var i = 0; i < i12753.length; i += 2) {
  request.r(i12753[i + 0], i12753[i + 1], 2, i12752, '')
  }
  i12748.AllTrashOutlines = i12752
  i12748.trashDone = !!i12749[7]
  i12748.trashThrown = i12749[8]
  i12748.trashTotal = i12749[9]
  request.r(i12749[10], i12749[11], 0, i12748, 'bd_Sticky')
  i12748.ZoomStep2 = request.d('ZoomPos', i12749[12], i12748.ZoomStep2)
  request.r(i12749[13], i12749[14], 0, i12748, 'ToolStep2')
  request.r(i12749[15], i12749[16], 0, i12748, 'camFollowStep2')
  var i12755 = i12749[17]
  var i12754 = []
  for(var i = 0; i < i12755.length; i += 2) {
  request.r(i12755[i + 0], i12755[i + 1], 2, i12754, '')
  }
  i12748.AllBugOutlines = i12754
  i12748.ZoomStep2b = request.d('ZoomPos', i12749[18], i12748.ZoomStep2b)
  request.r(i12749[19], i12749[20], 0, i12748, 'ToolStep2b')
  request.r(i12749[21], i12749[22], 0, i12748, 'camFollowStep2b')
  request.r(i12749[23], i12749[24], 0, i12748, 'dustColStep2')
  request.r(i12749[25], i12749[26], 0, i12748, 'handIndicationShower')
  request.r(i12749[27], i12749[28], 0, i12748, 'hairDirtyStatic')
  request.r(i12749[29], i12749[30], 0, i12748, 'hairDirtyWetStatic')
  request.r(i12749[31], i12749[32], 0, i12748, 'dryHairAnim')
  i12748.ZoomStep3 = request.d('ZoomPos', i12749[33], i12748.ZoomStep3)
  request.r(i12749[34], i12749[35], 0, i12748, 'ShampooInHand')
  request.r(i12749[36], i12749[37], 0, i12748, 'ShampooOnHand')
  request.r(i12749[38], i12749[39], 0, i12748, 'ShampooInHandCap')
  request.r(i12749[40], i12749[41], 0, i12748, 'ToolStep3')
  request.r(i12749[42], i12749[43], 0, i12748, 'shampooPatch')
  request.r(i12749[44], i12749[45], 0, i12748, 'handSpriteRend')
  request.r(i12749[46], i12749[47], 0, i12748, 'bottleDefault')
  request.r(i12749[48], i12749[49], 0, i12748, 'bottlePressed')
  request.r(i12749[50], i12749[51], 0, i12748, 'shampooDropping')
  request.r(i12749[52], i12749[53], 0, i12748, 'bottleOpenSfx')
  request.r(i12749[54], i12749[55], 0, i12748, 'bottleSqueezSfx')
  request.r(i12749[56], i12749[57], 0, i12748, 'bottlePourSfx')
  i12748.ZoomStep4 = request.d('ZoomPos', i12749[58], i12748.ZoomStep4)
  request.r(i12749[59], i12749[60], 0, i12748, 'ToolStep4')
  request.r(i12749[61], i12749[62], 0, i12748, 'camFollowStep4')
  request.r(i12749[63], i12749[64], 0, i12748, 'foamLight_E')
  request.r(i12749[65], i12749[66], 0, i12748, 'foam2_E')
  request.r(i12749[67], i12749[68], 0, i12748, 'foamCol')
  request.r(i12749[69], i12749[70], 0, i12748, 'handIndicationHands')
  request.r(i12749[71], i12749[72], 0, i12748, 'progressStep4')
  i12748.ZoomStep5a = request.d('ZoomPos', i12749[73], i12748.ZoomStep5a)
  i12748.ZoomStep5b = request.d('ZoomPos', i12749[74], i12748.ZoomStep5b)
  request.r(i12749[75], i12749[76], 0, i12748, 'ShowerDamaged')
  request.r(i12749[77], i12749[78], 0, i12748, 'ShowerBackDMG')
  request.r(i12749[79], i12749[80], 0, i12748, 'ShowerInner_dirty')
  request.r(i12749[81], i12749[82], 0, i12748, 'ShowerInner_Target')
  request.r(i12749[83], i12749[84], 0, i12748, 'ShowerFrontDMG')
  request.r(i12749[85], i12749[86], 0, i12748, 'OpenShowerIndication')
  request.r(i12749[87], i12749[88], 0, i12748, 'CloseShowerIndication')
  request.r(i12749[89], i12749[90], 0, i12748, 'showrOpenInput')
  request.r(i12749[91], i12749[92], 0, i12748, 'showerDisk')
  request.r(i12749[93], i12749[94], 0, i12748, 'showerFixReverseAnimDrag')
  request.r(i12749[95], i12749[96], 0, i12748, 'showerDragDamage')
  request.r(i12749[97], i12749[98], 0, i12748, 'ToolStep5Rev')
  i12748.ZoomStep5 = request.d('ZoomPos', i12749[99], i12748.ZoomStep5)
  request.r(i12749[100], i12749[101], 0, i12748, 'ToolStep5')
  request.r(i12749[102], i12749[103], 0, i12748, 'ToolStep5Placeable')
  request.r(i12749[104], i12749[105], 0, i12748, 'toolStep5Progress')
  request.r(i12749[106], i12749[107], 0, i12748, 'toolStep5ProgressHelp')
  request.r(i12749[108], i12749[109], 0, i12748, 'camFollowStep5')
  request.r(i12749[110], i12749[111], 0, i12748, 'showerRender')
  request.r(i12749[112], i12749[113], 0, i12748, 'showerDirty')
  request.r(i12749[114], i12749[115], 0, i12748, 'showerClean')
  request.r(i12749[116], i12749[117], 0, i12748, 'waterShotParticle')
  request.r(i12749[118], i12749[119], 0, i12748, 'showerProblemClip')
  request.r(i12749[120], i12749[121], 0, i12748, 'wetHairs_E')
  i12748.levelName = i12749[122]
  i12748.levelReward = i12749[123]
  request.r(i12749[124], i12749[125], 0, i12748, 'LevelIcon')
  request.r(i12749[126], i12749[127], 0, i12748, 'Level_BG')
  var i12757 = i12749[128]
  var i12756 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i12757.length; i += 2) {
  request.r(i12757[i + 0], i12757[i + 1], 1, i12756, '')
  }
  i12748.ToolIcons = i12756
  var i12759 = i12749[129]
  var i12758 = []
  for(var i = 0; i < i12759.length; i += 2) {
  request.r(i12759[i + 0], i12759[i + 1], 2, i12758, '')
  }
  i12748.AllDrags = i12758
  var i12761 = i12749[130]
  var i12760 = []
  for(var i = 0; i < i12761.length; i += 2) {
  request.r(i12761[i + 0], i12761[i + 1], 2, i12760, '')
  }
  i12748.AllSources = i12760
  var i12763 = i12749[131]
  var i12762 = []
  for(var i = 0; i < i12763.length; i += 2) {
  request.r(i12763[i + 0], i12763[i + 1], 2, i12762, '')
  }
  i12748.AllScratches = i12762
  i12748.stepsDone = i12749[132]
  i12748.levelNo = i12749[133]
  i12748.partNo = i12749[134]
  request.r(i12749[135], i12749[136], 0, i12748, 'bubbleGum')
  return i12748
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i12764 = root || request.c( 'ZoomPos' )
  var i12765 = data
  i12764.CameraPos = new pc.Vec3( i12765[0], i12765[1], i12765[2] )
  i12764.CameraFOV = i12765[3]
  return i12764
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i12776 = root || request.c( 'PlayableCTA' )
  var i12777 = data
  i12776.trigger = i12777[0]
  i12776.afterSeconds = i12777[1]
  i12776.afterTaps = i12777[2]
  request.r(i12777[3], i12777[4], 0, i12776, 'scratchProgress')
  i12776.scratchIndex = i12777[5]
  i12776.progressThreshold = i12777[6]
  i12776.refireOnEveryTap = !!i12777[7]
  i12776.refireDelay = i12777[8]
  i12776.showEndCard = !!i12777[9]
  request.r(i12777[10], i12777[11], 0, i12776, 'endCard')
  request.r(i12777[12], i12777[13], 0, i12776, 'endParticles')
  i12776.playEndParticlesOnProgressTrigger = !!i12777[14]
  request.r(i12777[15], i12777[16], 0, i12776, 'stepCompleteParticles')
  i12776.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i12777[17], i12776.onCtaFired)
  i12776.logWhenFired = !!i12777[18]
  return i12776
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i12778 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i12779 = data
  i12778.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i12779[0], i12778.m_PersistentCalls)
  return i12778
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i12780 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i12781 = data
  var i12783 = i12781[0]
  var i12782 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i12783.length; i += 1) {
    i12782.add(request.d('UnityEngine.Events.PersistentCall', i12783[i + 0]));
  }
  i12780.m_Calls = i12782
  return i12780
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i12786 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i12787 = data
  request.r(i12787[0], i12787[1], 0, i12786, 'm_Target')
  i12786.m_TargetAssemblyTypeName = i12787[2]
  i12786.m_MethodName = i12787[3]
  i12786.m_Mode = i12787[4]
  i12786.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i12787[5], i12786.m_Arguments)
  i12786.m_CallState = i12787[6]
  return i12786
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i12788 = root || request.c( 'PlayableFadeCoverSettings' )
  var i12789 = data
  i12788.revealDelay = i12789[0]
  i12788.revealDuration = i12789[1]
  return i12788
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i12790 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i12791 = data
  request.r(i12791[0], i12791[1], 0, i12790, 'MainCamera')
  i12790.RenderType = i12791[2]
  request.r(i12791[3], i12791[4], 0, i12790, 'ScratchSurfaceSprite')
  i12790.ScratchSurfaceSpriteHasAlpha = !!i12791[5]
  i12790.MaskProgressCutOffValue = i12791[6]
  request.r(i12791[7], i12791[8], 0, i12790, 'EraseTexture')
  i12790.EraseTextureScale = new pc.Vec2( i12791[9], i12791[10] )
  i12790.InputEnabled = !!i12791[11]
  request.r(i12791[12], i12791[13], 0, i12790, 'Card')
  i12790.Mode = i12791[14]
  request.r(i12791[15], i12791[16], 0, i12790, 'Progress')
  request.r(i12791[17], i12791[18], 0, i12790, 'MeshCard')
  request.r(i12791[19], i12791[20], 0, i12790, 'SpriteCard')
  request.r(i12791[21], i12791[22], 0, i12790, 'ImageCard')
  request.r(i12791[23], i12791[24], 0, i12790, 'MaskShader')
  request.r(i12791[25], i12791[26], 0, i12790, 'BrushShader')
  request.r(i12791[27], i12791[28], 0, i12790, 'MaskProgressShader')
  request.r(i12791[29], i12791[30], 0, i12790, 'MaskProgressCutOffShader')
  return i12790
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i12792 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i12793 = data
  request.r(i12793[0], i12793[1], 0, i12792, 'MainCamera')
  request.r(i12793[2], i12793[3], 0, i12792, 'Surface')
  i12792.RenderTextureQuality = i12793[4]
  request.r(i12793[5], i12793[6], 0, i12792, 'Eraser')
  request.r(i12793[7], i12793[8], 0, i12792, 'Progress')
  request.r(i12793[9], i12793[10], 0, i12792, 'ScratchSurface')
  request.r(i12793[11], i12793[12], 0, i12792, 'RenderTexture')
  i12792.BrushScale = new pc.Vec2( i12793[13], i12793[14] )
  request.r(i12793[15], i12793[16], 0, i12792, 'ToolTip')
  i12792.InputEnabled = !!i12793[17]
  i12792.IsScratching = !!i12793[18]
  i12792.useChangingScale = !!i12793[19]
  i12792.useGivenBrushScale = !!i12793[20]
  i12792.canSpreadMask = !!i12793[21]
  i12792.shouldPaintHoles = !!i12793[22]
  i12792.canRotateTip = !!i12793[23]
  i12792._mode = i12793[24]
  return i12792
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i12794 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i12795 = data
  request.r(i12795[0], i12795[1], 0, i12794, 'Card')
  i12794.currentProgress = i12795[2]
  return i12794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i12796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i12797 = data
  request.r(i12797[0], i12797[1], 0, i12796, 'animatorController')
  request.r(i12797[2], i12797[3], 0, i12796, 'avatar')
  i12796.updateMode = i12797[4]
  i12796.hasTransformHierarchy = !!i12797[5]
  i12796.applyRootMotion = !!i12797[6]
  var i12799 = i12797[7]
  var i12798 = []
  for(var i = 0; i < i12799.length; i += 2) {
  request.r(i12799[i + 0], i12799[i + 1], 2, i12798, '')
  }
  i12796.humanBones = i12798
  i12796.enabled = !!i12797[8]
  return i12796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i12802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i12803 = data
  i12802.color = new pc.Color(i12803[0], i12803[1], i12803[2], i12803[3])
  request.r(i12803[4], i12803[5], 0, i12802, 'sprite')
  i12802.flipX = !!i12803[6]
  i12802.flipY = !!i12803[7]
  i12802.drawMode = i12803[8]
  i12802.size = new pc.Vec2( i12803[9], i12803[10] )
  i12802.tileMode = i12803[11]
  i12802.adaptiveModeThreshold = i12803[12]
  i12802.maskInteraction = i12803[13]
  i12802.spriteSortPoint = i12803[14]
  i12802.enabled = !!i12803[15]
  request.r(i12803[16], i12803[17], 0, i12802, 'sharedMaterial')
  var i12805 = i12803[18]
  var i12804 = []
  for(var i = 0; i < i12805.length; i += 2) {
  request.r(i12805[i + 0], i12805[i + 1], 2, i12804, '')
  }
  i12802.sharedMaterials = i12804
  i12802.receiveShadows = !!i12803[19]
  i12802.shadowCastingMode = i12803[20]
  i12802.sortingLayerID = i12803[21]
  i12802.sortingOrder = i12803[22]
  i12802.lightmapIndex = i12803[23]
  i12802.lightmapSceneIndex = i12803[24]
  i12802.lightmapScaleOffset = new pc.Vec4( i12803[25], i12803[26], i12803[27], i12803[28] )
  i12802.lightProbeUsage = i12803[29]
  i12802.reflectionProbeUsage = i12803[30]
  return i12802
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i12806 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i12807 = data
  request.r(i12807[0], i12807[1], 0, i12806, 'm_RootBone')
  var i12809 = i12807[2]
  var i12808 = []
  for(var i = 0; i < i12809.length; i += 2) {
  request.r(i12809[i + 0], i12809[i + 1], 2, i12808, '')
  }
  i12806.m_BoneTransforms = i12808
  i12806.m_AlwaysUpdate = !!i12807[3]
  i12806.m_AutoRebind = !!i12807[4]
  return i12806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i12810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i12811 = data
  var i12813 = i12811[0]
  var i12812 = []
  for(var i = 0; i < i12813.length; i += 3) {
    i12812.push( new pc.Vec3( i12813[i + 0], i12813[i + 1], i12813[i + 2] ) );
  }
  i12810.positions = i12812
  i12810.positionCount = i12811[1]
  i12810.time = i12811[2]
  i12810.startWidth = i12811[3]
  i12810.endWidth = i12811[4]
  i12810.widthMultiplier = i12811[5]
  i12810.autodestruct = !!i12811[6]
  i12810.emitting = !!i12811[7]
  i12810.numCornerVertices = i12811[8]
  i12810.numCapVertices = i12811[9]
  i12810.minVertexDistance = i12811[10]
  i12810.colorGradient = i12811[11] ? new pc.ColorGradient(i12811[11][0], i12811[11][1], i12811[11][2]) : null
  i12810.startColor = new pc.Color(i12811[12], i12811[13], i12811[14], i12811[15])
  i12810.endColor = new pc.Color(i12811[16], i12811[17], i12811[18], i12811[19])
  i12810.generateLightingData = !!i12811[20]
  i12810.textureMode = i12811[21]
  i12810.alignment = i12811[22]
  i12810.widthCurve = new pc.AnimationCurve( { keys_flow: i12811[23] } )
  i12810.enabled = !!i12811[24]
  request.r(i12811[25], i12811[26], 0, i12810, 'sharedMaterial')
  var i12815 = i12811[27]
  var i12814 = []
  for(var i = 0; i < i12815.length; i += 2) {
  request.r(i12815[i + 0], i12815[i + 1], 2, i12814, '')
  }
  i12810.sharedMaterials = i12814
  i12810.receiveShadows = !!i12811[28]
  i12810.shadowCastingMode = i12811[29]
  i12810.sortingLayerID = i12811[30]
  i12810.sortingOrder = i12811[31]
  i12810.lightmapIndex = i12811[32]
  i12810.lightmapSceneIndex = i12811[33]
  i12810.lightmapScaleOffset = new pc.Vec4( i12811[34], i12811[35], i12811[36], i12811[37] )
  i12810.lightProbeUsage = i12811[38]
  i12810.reflectionProbeUsage = i12811[39]
  return i12810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i12818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i12819 = data
  i12818.textureMode = i12819[0]
  i12818.alignment = i12819[1]
  i12818.widthCurve = new pc.AnimationCurve( { keys_flow: i12819[2] } )
  i12818.colorGradient = i12819[3] ? new pc.ColorGradient(i12819[3][0], i12819[3][1], i12819[3][2]) : null
  var i12821 = i12819[4]
  var i12820 = []
  for(var i = 0; i < i12821.length; i += 3) {
    i12820.push( new pc.Vec3( i12821[i + 0], i12821[i + 1], i12821[i + 2] ) );
  }
  i12818.positions = i12820
  i12818.positionCount = i12819[5]
  i12818.widthMultiplier = i12819[6]
  i12818.startWidth = i12819[7]
  i12818.endWidth = i12819[8]
  i12818.numCornerVertices = i12819[9]
  i12818.numCapVertices = i12819[10]
  i12818.useWorldSpace = !!i12819[11]
  i12818.loop = !!i12819[12]
  i12818.startColor = new pc.Color(i12819[13], i12819[14], i12819[15], i12819[16])
  i12818.endColor = new pc.Color(i12819[17], i12819[18], i12819[19], i12819[20])
  i12818.generateLightingData = !!i12819[21]
  i12818.enabled = !!i12819[22]
  request.r(i12819[23], i12819[24], 0, i12818, 'sharedMaterial')
  var i12823 = i12819[25]
  var i12822 = []
  for(var i = 0; i < i12823.length; i += 2) {
  request.r(i12823[i + 0], i12823[i + 1], 2, i12822, '')
  }
  i12818.sharedMaterials = i12822
  i12818.receiveShadows = !!i12819[26]
  i12818.shadowCastingMode = i12819[27]
  i12818.sortingLayerID = i12819[28]
  i12818.sortingOrder = i12819[29]
  i12818.lightmapIndex = i12819[30]
  i12818.lightmapSceneIndex = i12819[31]
  i12818.lightmapScaleOffset = new pc.Vec4( i12819[32], i12819[33], i12819[34], i12819[35] )
  i12818.lightProbeUsage = i12819[36]
  i12818.reflectionProbeUsage = i12819[37]
  return i12818
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i12824 = root || request.c( 'StaticFixedPipe' )
  var i12825 = data
  request.r(i12825[0], i12825[1], 0, i12824, 'lineRenderer')
  request.r(i12825[2], i12825[3], 0, i12824, 'toolTransform')
  request.r(i12825[4], i12825[5], 0, i12824, 'toolDirectionPoint')
  request.r(i12825[6], i12825[7], 0, i12824, 'fixedEndPoint')
  i12824.segmentCount = i12825[8]
  i12824.totalLength = i12825[9]
  i12824.constraintIterations = i12825[10]
  i12824.gravity = new pc.Vec3( i12825[11], i12825[12], i12825[13] )
  i12824.pipeWidth = i12825[14]
  return i12824
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i12826 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i12827 = data
  i12826.targetIsSelf = !!i12827[0]
  request.r(i12827[1], i12827[2], 0, i12826, 'targetGO')
  i12826.tweenTargetIsTargetGO = !!i12827[3]
  i12826.delay = i12827[4]
  i12826.duration = i12827[5]
  i12826.easeType = i12827[6]
  i12826.easeCurve = new pc.AnimationCurve( { keys_flow: i12827[7] } )
  i12826.loopType = i12827[8]
  i12826.loops = i12827[9]
  i12826.id = i12827[10]
  i12826.isRelative = !!i12827[11]
  i12826.isFrom = !!i12827[12]
  i12826.isIndependentUpdate = !!i12827[13]
  i12826.autoKill = !!i12827[14]
  i12826.autoGenerate = !!i12827[15]
  i12826.isActive = !!i12827[16]
  i12826.isValid = !!i12827[17]
  request.r(i12827[18], i12827[19], 0, i12826, 'target')
  i12826.animationType = i12827[20]
  i12826.targetType = i12827[21]
  i12826.forcedTargetType = i12827[22]
  i12826.autoPlay = !!i12827[23]
  i12826.useTargetAsV3 = !!i12827[24]
  i12826.endValueFloat = i12827[25]
  i12826.endValueV3 = new pc.Vec3( i12827[26], i12827[27], i12827[28] )
  i12826.endValueV2 = new pc.Vec2( i12827[29], i12827[30] )
  i12826.endValueColor = new pc.Color(i12827[31], i12827[32], i12827[33], i12827[34])
  i12826.endValueString = i12827[35]
  i12826.endValueRect = UnityEngine.Rect.MinMaxRect(i12827[36], i12827[37], i12827[38], i12827[39])
  request.r(i12827[40], i12827[41], 0, i12826, 'endValueTransform')
  i12826.optionalBool0 = !!i12827[42]
  i12826.optionalBool1 = !!i12827[43]
  i12826.optionalFloat0 = i12827[44]
  i12826.optionalInt0 = i12827[45]
  i12826.optionalRotationMode = i12827[46]
  i12826.optionalScrambleMode = i12827[47]
  i12826.optionalShakeRandomnessMode = i12827[48]
  i12826.optionalString = i12827[49]
  i12826.updateType = i12827[50]
  i12826.isSpeedBased = !!i12827[51]
  i12826.hasOnStart = !!i12827[52]
  i12826.hasOnPlay = !!i12827[53]
  i12826.hasOnUpdate = !!i12827[54]
  i12826.hasOnStepComplete = !!i12827[55]
  i12826.hasOnComplete = !!i12827[56]
  i12826.hasOnTweenCreated = !!i12827[57]
  i12826.hasOnRewind = !!i12827[58]
  i12826.onStart = request.d('UnityEngine.Events.UnityEvent', i12827[59], i12826.onStart)
  i12826.onPlay = request.d('UnityEngine.Events.UnityEvent', i12827[60], i12826.onPlay)
  i12826.onUpdate = request.d('UnityEngine.Events.UnityEvent', i12827[61], i12826.onUpdate)
  i12826.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i12827[62], i12826.onStepComplete)
  i12826.onComplete = request.d('UnityEngine.Events.UnityEvent', i12827[63], i12826.onComplete)
  i12826.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i12827[64], i12826.onTweenCreated)
  i12826.onRewind = request.d('UnityEngine.Events.UnityEvent', i12827[65], i12826.onRewind)
  return i12826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i12828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i12829 = data
  i12828.usedByComposite = !!i12829[0]
  i12828.autoTiling = !!i12829[1]
  i12828.size = new pc.Vec2( i12829[2], i12829[3] )
  i12828.edgeRadius = i12829[4]
  i12828.enabled = !!i12829[5]
  i12828.isTrigger = !!i12829[6]
  i12828.usedByEffector = !!i12829[7]
  i12828.density = i12829[8]
  i12828.offset = new pc.Vec2( i12829[9], i12829[10] )
  request.r(i12829[11], i12829[12], 0, i12828, 'material')
  return i12828
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i12830 = root || request.c( 'BasicDrag' )
  var i12831 = data
  i12830.canDrag = !!i12831[0]
  i12830.dragByDelta = !!i12831[1]
  i12830.isDragging = !!i12831[2]
  i12830.moveWithPointer = !!i12831[3]
  i12830.canReturn = !!i12831[4]
  i12830.jumpOnReturn = !!i12831[5]
  i12830.returnTime = i12831[6]
  i12830.Tool_Offset = new pc.Vec3( i12831[7], i12831[8], i12831[9] )
  i12830.canScaleIncrease = !!i12831[10]
  i12830.Self_ScaleNew = new pc.Vec3( i12831[11], i12831[12], i12831[13] )
  i12830.canRotateOnPick = !!i12831[14]
  i12830.startRot = new pc.Vec3( i12831[15], i12831[16], i12831[17] )
  i12830.newRot = new pc.Vec3( i12831[18], i12831[19], i12831[20] )
  var i12833 = i12831[21]
  var i12832 = []
  for(var i = 0; i < i12833.length; i += 2) {
  request.r(i12833[i + 0], i12833[i + 1], 2, i12832, '')
  }
  i12830.childSprite = i12832
  request.r(i12831[22], i12831[23], 0, i12830, 'ToolSelectClip')
  request.r(i12831[24], i12831[25], 0, i12830, 'ToolLoopClip')
  request.r(i12831[26], i12831[27], 0, i12830, 'thisParticles')
  i12830.onDragparticle = !!i12831[28]
  request.r(i12831[29], i12831[30], 0, i12830, 'dragParticles')
  request.r(i12831[31], i12831[32], 0, i12830, 'anim')
  i12830.startPos = new pc.Vec3( i12831[33], i12831[34], i12831[35] )
  i12830.startScale = new pc.Vec3( i12831[36], i12831[37], i12831[38] )
  i12830.Vibration = !!i12831[39]
  i12830.isPlacedCannotMove = !!i12831[40]
  i12830.isObjectMovingWhileDragging = !!i12831[41]
  i12830.OnMouseDownEvent = request.d('System.Action', i12831[42], i12830.OnMouseDownEvent)
  i12830.OnMouseUpEvent = request.d('System.Action', i12831[43], i12830.OnMouseUpEvent)
  i12830.ProgStartEvent = request.d('System.Action', i12831[44], i12830.ProgStartEvent)
  i12830.ProgEndEvent = request.d('System.Action', i12831[45], i12830.ProgEndEvent)
  i12830.canCallMouseUpWhenGamePaused = !!i12831[46]
  i12830.ClampX_L = i12831[47]
  i12830.ClampX_H = i12831[48]
  i12830.ClampY_L = i12831[49]
  i12830.ClampY_H = i12831[50]
  i12830.startOrder = i12831[51]
  i12830.dontResetItIsInCollider = !!i12831[52]
  request.r(i12831[53], i12831[54], 0, i12830, 'thisCollider')
  request.r(i12831[55], i12831[56], 0, i12830, 'thisSR')
  i12830.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i12831[57], i12830.OnMouseDownEventIndependentFromCanDrag)
  return i12830
}

Deserializers["System.Action"] = function (request, data, root) {
  var i12836 = root || request.c( 'System.Action' )
  var i12837 = data
  return i12836
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i12838 = root || request.c( 'BD_Clamp' )
  var i12839 = data
  i12838.ClampX_L = i12839[0]
  i12838.ClampX_H = i12839[1]
  i12838.ClampY_L = i12839[2]
  i12838.ClampY_H = i12839[3]
  return i12838
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i12840 = root || request.c( 'OutlinePulse' )
  var i12841 = data
  i12840.smallThickness = i12841[0]
  i12840.largeThickness = i12841[1]
  i12840.transitionSpeed = i12841[2]
  i12840.animationSpeed = i12841[3]
  i12840.isThickOutline = !!i12841[4]
  i12840.animate = !!i12841[5]
  i12840.hideSpriteOnly = !!i12841[6]
  return i12840
}

Deserializers["BD_ItemPick"] = function (request, data, root) {
  var i12842 = root || request.c( 'BD_ItemPick' )
  var i12843 = data
  request.r(i12843[0], i12843[1], 0, i12842, 'Tool')
  request.r(i12843[2], i12843[3], 0, i12842, 'Outline')
  request.r(i12843[4], i12843[5], 0, i12842, 'itemRend')
  request.r(i12843[6], i12843[7], 0, i12842, 'pick_sp')
  i12842.OnTap = request.d('UnityEngine.Events.UnityEvent', i12843[8], i12842.OnTap)
  i12842.OnComplete = request.d('UnityEngine.Events.UnityEvent', i12843[9], i12842.OnComplete)
  request.r(i12843[10], i12843[11], 0, i12842, 'Clip')
  i12842.minDragDistance = i12843[12]
  i12842.isTaped = !!i12843[13]
  return i12842
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i12844 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i12845 = data
  request.r(i12845[0], i12845[1], 0, i12844, 'm_ObjectArgument')
  i12844.m_ObjectArgumentAssemblyTypeName = i12845[2]
  i12844.m_IntArgument = i12845[3]
  i12844.m_FloatArgument = i12845[4]
  i12844.m_StringArgument = i12845[5]
  i12844.m_BoolArgument = !!i12845[6]
  return i12844
}

Deserializers["BD_Sticky"] = function (request, data, root) {
  var i12846 = root || request.c( 'BD_Sticky' )
  var i12847 = data
  request.r(i12847[0], i12847[1], 0, i12846, 'anim')
  i12846.isVerticlePull = !!i12847[2]
  request.r(i12847[3], i12847[4], 0, i12846, 'pickSfx')
  request.r(i12847[5], i12847[6], 0, i12846, 'pulledClip')
  request.r(i12847[7], i12847[8], 0, i12846, 'pullSource')
  i12846.OnComplete = request.d('UnityEngine.Events.UnityEvent', i12847[9], i12846.OnComplete)
  i12846.changeLayerPick = !!i12847[10]
  request.r(i12847[11], i12847[12], 0, i12846, 'sp_rendr')
  i12846.def_layerNo = i12847[13]
  i12846.tar_LayerNo = i12847[14]
  i12846.direction = i12847[15]
  i12846.dragThreshold = i12847[16]
  i12846.pullDistanceToFree = i12847[17]
  i12846.returnSpeed = i12847[18]
  i12846.resistance = i12847[19]
  var i12849 = i12847[20]
  var i12848 = []
  for(var i = 0; i < i12849.length; i += 2) {
  request.r(i12849[i + 0], i12849[i + 1], 2, i12848, '')
  }
  i12846.StartBones = i12848
  var i12851 = i12847[21]
  var i12850 = []
  for(var i = 0; i < i12851.length; i += 2) {
  request.r(i12851[i + 0], i12851[i + 1], 2, i12850, '')
  }
  i12846.EndBones = i12850
  request.r(i12847[22], i12847[23], 0, i12846, 'BonePivot')
  return i12846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i12852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i12853 = data
  request.r(i12853[0], i12853[1], 0, i12852, 'clip')
  request.r(i12853[2], i12853[3], 0, i12852, 'outputAudioMixerGroup')
  i12852.playOnAwake = !!i12853[4]
  i12852.loop = !!i12853[5]
  i12852.time = i12853[6]
  i12852.volume = i12853[7]
  i12852.pitch = i12853[8]
  i12852.enabled = !!i12853[9]
  return i12852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i12854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i12855 = data
  i12854.radius = i12855[0]
  i12854.enabled = !!i12855[1]
  i12854.isTrigger = !!i12855[2]
  i12854.usedByEffector = !!i12855[3]
  i12854.density = i12855[4]
  i12854.offset = new pc.Vec2( i12855[5], i12855[6] )
  request.r(i12855[7], i12855[8], 0, i12854, 'material')
  return i12854
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i12856 = root || request.c( 'PlayParticlesOnCollision' )
  var i12857 = data
  request.r(i12857[0], i12857[1], 0, i12856, 'Target')
  request.r(i12857[2], i12857[3], 0, i12856, 'ParticlePrefab')
  i12856.destroyIt = !!i12857[4]
  i12856.stayAtPlace = !!i12857[5]
  i12856.disableOnCollision = !!i12857[6]
  i12856.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i12857[7], i12856.OnCollisionEvent)
  return i12856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i12858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i12859 = data
  i12858.frontSortingLayerID = i12859[0]
  i12858.frontSortingOrder = i12859[1]
  i12858.backSortingLayerID = i12859[2]
  i12858.backSortingOrder = i12859[3]
  i12858.alphaCutoff = i12859[4]
  request.r(i12859[5], i12859[6], 0, i12858, 'sprite')
  i12858.tileMode = i12859[7]
  i12858.isCustomRangeActive = !!i12859[8]
  i12858.spriteSortPoint = i12859[9]
  i12858.enabled = !!i12859[10]
  request.r(i12859[11], i12859[12], 0, i12858, 'sharedMaterial')
  var i12861 = i12859[13]
  var i12860 = []
  for(var i = 0; i < i12861.length; i += 2) {
  request.r(i12861[i + 0], i12861[i + 1], 2, i12860, '')
  }
  i12858.sharedMaterials = i12860
  i12858.receiveShadows = !!i12859[14]
  i12858.shadowCastingMode = i12859[15]
  i12858.sortingLayerID = i12859[16]
  i12858.sortingOrder = i12859[17]
  i12858.lightmapIndex = i12859[18]
  i12858.lightmapSceneIndex = i12859[19]
  i12858.lightmapScaleOffset = new pc.Vec4( i12859[20], i12859[21], i12859[22], i12859[23] )
  i12858.lightProbeUsage = i12859[24]
  i12858.reflectionProbeUsage = i12859[25]
  return i12858
}

Deserializers["PlayTweenOnHit"] = function (request, data, root) {
  var i12862 = root || request.c( 'PlayTweenOnHit' )
  var i12863 = data
  i12862.isContinueous = !!i12863[0]
  request.r(i12863[1], i12863[2], 0, i12862, 'tool')
  var i12865 = i12863[3]
  var i12864 = []
  for(var i = 0; i < i12865.length; i += 2) {
  request.r(i12865[i + 0], i12865[i + 1], 2, i12864, '')
  }
  i12862.animsToPlay = i12864
  request.r(i12863[4], i12863[5], 0, i12862, 'tipTarget')
  return i12862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i12868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i12869 = data
  i12868.usedByComposite = !!i12869[0]
  i12868.autoTiling = !!i12869[1]
  var i12871 = i12869[2]
  var i12870 = []
  for(var i = 0; i < i12871.length; i += 1) {
  var i12873 = i12871[i + 0]
  var i12872 = []
  for(var i = 0; i < i12873.length; i += 2) {
    i12872.push( new pc.Vec2( i12873[i + 0], i12873[i + 1] ) );
  }
    i12870.push( i12872 );
  }
  i12868.points = i12870
  i12868.enabled = !!i12869[3]
  i12868.isTrigger = !!i12869[4]
  i12868.usedByEffector = !!i12869[5]
  i12868.density = i12869[6]
  i12868.offset = new pc.Vec2( i12869[7], i12869[8] )
  request.r(i12869[9], i12869[10], 0, i12868, 'material')
  return i12868
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i12880 = root || request.c( 'PlaySfxOnCollision' )
  var i12881 = data
  request.r(i12881[0], i12881[1], 0, i12880, 'Tip')
  i12880.Mode = i12881[2]
  request.r(i12881[3], i12881[4], 0, i12880, 'DragInput')
  request.r(i12881[5], i12881[6], 0, i12880, 'Source')
  i12880.startVol = i12881[7]
  i12880.targetVol = i12881[8]
  i12880.duration = i12881[9]
  request.r(i12881[10], i12881[11], 0, i12880, 'Particles')
  i12880.isDone = !!i12881[12]
  i12880.isInArea = !!i12881[13]
  i12880.isPlaying = !!i12881[14]
  return i12880
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i12882 = root || request.c( 'InteractableBones' )
  var i12883 = data
  request.r(i12883[0], i12883[1], 0, i12882, 'Tip')
  i12882.MoveAmount = i12883[2]
  i12882.MoveSpeed = i12883[3]
  i12882.ShakeSpeed = i12883[4]
  i12882.MovementThreshold = i12883[5]
  i12882.MoveX = !!i12883[6]
  i12882.MoveY = !!i12883[7]
  return i12882
}

Deserializers["WaypointFollower"] = function (request, data, root) {
  var i12884 = root || request.c( 'WaypointFollower' )
  var i12885 = data
  var i12887 = i12885[0]
  var i12886 = []
  for(var i = 0; i < i12887.length; i += 2) {
  request.r(i12887[i + 0], i12887[i + 1], 2, i12886, '')
  }
  i12884.waypoints = i12886
  i12884.speed = i12885[1]
  i12884.rotationSpeed = i12885[2]
  i12884.loop = !!i12885[3]
  i12884.reverse = !!i12885[4]
  i12884.canMove = !!i12885[5]
  request.r(i12885[6], i12885[7], 0, i12884, 'movingSfx')
  return i12884
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i12888 = root || request.c( 'BD_Action' )
  var i12889 = data
  i12888.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i12889[0], i12888.OnMouseDownEvent)
  i12888.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i12889[1], i12888.OnMouseUpEvent)
  i12888.setToolLayer = !!i12889[2]
  request.r(i12889[3], i12889[4], 0, i12888, 'tool_SP')
  return i12888
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i12890 = root || request.c( 'BD_CameraFollow' )
  var i12891 = data
  request.r(i12891[0], i12891[1], 0, i12890, 'Tool')
  request.r(i12891[2], i12891[3], 0, i12890, 'Pivot')
  i12890.FOV = i12891[4]
  i12890.Y_L = i12891[5]
  i12890.Y_H = i12891[6]
  i12890.X_L = i12891[7]
  i12890.X_R = i12891[8]
  i12890.startDelay = i12891[9]
  i12890.duration = i12891[10]
  return i12890
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i12892 = root || request.c( 'BD_ToolRotate' )
  var i12893 = data
  i12892.startDelay = i12893[0]
  request.r(i12893[1], i12893[2], 0, i12892, 'Tool')
  request.r(i12893[3], i12893[4], 0, i12892, 'Clamp')
  request.r(i12893[5], i12893[6], 0, i12892, 'Pivot')
  i12892.MinAngle = new pc.Vec3( i12893[7], i12893[8], i12893[9] )
  i12892.MaxAngle = new pc.Vec3( i12893[10], i12893[11], i12893[12] )
  i12892.rotationSpeed = i12893[13]
  return i12892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i12894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i12895 = data
  i12894.bodyType = i12895[0]
  request.r(i12895[1], i12895[2], 0, i12894, 'material')
  i12894.simulated = !!i12895[3]
  i12894.useAutoMass = !!i12895[4]
  i12894.mass = i12895[5]
  i12894.drag = i12895[6]
  i12894.angularDrag = i12895[7]
  i12894.gravityScale = i12895[8]
  i12894.collisionDetectionMode = i12895[9]
  i12894.sleepMode = i12895[10]
  i12894.constraints = i12895[11]
  return i12894
}

Deserializers["BugKill_Tip"] = function (request, data, root) {
  var i12896 = root || request.c( 'BugKill_Tip' )
  var i12897 = data
  var i12899 = i12897[0]
  var i12898 = []
  for(var i = 0; i < i12899.length; i += 2) {
  request.r(i12899[i + 0], i12899[i + 1], 2, i12898, '')
  }
  i12896.targets = i12898
  i12896.waypointFollower = !!i12897[1]
  i12896.fallSpeed = i12897[2]
  i12896.totalTargets = i12897[3]
  i12896.killCount = i12897[4]
  request.r(i12897[5], i12897[6], 0, i12896, 'bugKillSfx')
  i12896.OnComplete = request.d('UnityEngine.Events.UnityEvent', i12897[7], i12896.OnComplete)
  return i12896
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i12902 = root || request.c( 'BD_Progress' )
  var i12903 = data
  var i12905 = i12903[0]
  var i12904 = []
  for(var i = 0; i < i12905.length; i += 1) {
    i12904.push( request.d('ScratchData', i12905[i + 0]) );
  }
  i12902.AllScratches = i12904
  i12902.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i12903[1], i12902.OnScratchComplete)
  i12902.isProgDone = !!i12903[2]
  i12902.canCallComplete = !!i12903[3]
  i12902.CollectiveAppear = !!i12903[4]
  i12902.tipControl = !!i12903[5]
  i12902.progressControl = !!i12903[6]
  request.r(i12903[7], i12903[8], 0, i12902, 'thisDrag')
  i12902.CompleteEvent = request.d('System.Action', i12903[9], i12902.CompleteEvent)
  i12902.SubCompleteEvent = request.d('System.Action', i12903[10], i12902.SubCompleteEvent)
  return i12902
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i12908 = root || request.c( 'ScratchData' )
  var i12909 = data
  request.r(i12909[0], i12909[1], 0, i12908, 'ScratchManager')
  i12908.scratchLimit = i12909[2]
  i12908.isComplete = !!i12909[3]
  return i12908
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i12910 = root || request.c( 'BD_ProgressHelper' )
  var i12911 = data
  request.r(i12911[0], i12911[1], 0, i12910, 'BD_Progress')
  request.r(i12911[2], i12911[3], 0, i12910, 'fadeSprite')
  i12910.fadeIn = !!i12911[4]
  return i12910
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i12912 = root || request.c( 'ActionOnTap' )
  var i12913 = data
  i12912.OnTap = request.d('UnityEngine.Events.UnityEvent', i12913[0], i12912.OnTap)
  return i12912
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i12914 = root || request.c( 'BD_SpriteChange' )
  var i12915 = data
  request.r(i12915[0], i12915[1], 0, i12914, 'BD')
  request.r(i12915[2], i12915[3], 0, i12914, 'SR')
  request.r(i12915[4], i12915[5], 0, i12914, 'Default')
  request.r(i12915[6], i12915[7], 0, i12914, 'Picked')
  i12914.resetOnRelease = !!i12915[8]
  return i12914
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i12916 = root || request.c( 'BD_AnimatorDrag' )
  var i12917 = data
  request.r(i12917[0], i12917[1], 0, i12916, 'BD')
  request.r(i12917[2], i12917[3], 0, i12916, 'anim')
  request.r(i12917[4], i12917[5], 0, i12916, 'Source')
  i12916.Vibration = !!i12917[6]
  i12916.isCompletable = !!i12917[7]
  i12916.completionThreshold = i12917[8]
  i12916.OnComplete = request.d('UnityEngine.Events.UnityEvent', i12917[9], i12916.OnComplete)
  return i12916
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i12918 = root || request.c( 'PlaceItem' )
  var i12919 = data
  request.r(i12919[0], i12919[1], 0, i12918, 'thisDrag')
  request.r(i12919[2], i12919[3], 0, i12918, 'Target')
  request.r(i12919[4], i12919[5], 0, i12918, 'Clip')
  i12918.jumpOnPlace = !!i12919[6]
  i12918.jumpHeight = i12919[7]
  i12918.jumpDuration = i12919[8]
  i12918.settleDuration = i12919[9]
  i12918.isPlaced = !!i12919[10]
  i12918.isInsideCollider = !!i12919[11]
  i12918.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i12919[12], i12918.OnPlaced)
  return i12918
}

Deserializers["BD_Audio"] = function (request, data, root) {
  var i12920 = root || request.c( 'BD_Audio' )
  var i12921 = data
  request.r(i12921[0], i12921[1], 0, i12920, 'BD')
  request.r(i12921[2], i12921[3], 0, i12920, 'Source')
  i12920.shouldRestart = !!i12921[4]
  i12920.startVol = i12921[5]
  i12920.targetVol = i12921[6]
  i12920.duration = i12921[7]
  i12920.startDelay = i12921[8]
  return i12920
}

Deserializers["Level1_HairAnim"] = function (request, data, root) {
  var i12922 = root || request.c( 'Level1_HairAnim' )
  var i12923 = data
  i12922.holdDuration = i12923[0]
  request.r(i12923[1], i12923[2], 0, i12922, 'targetSprite')
  i12922.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i12923[3], i12922.onHoldComplete)
  i12922.isHolding = !!i12923[4]
  request.r(i12923[5], i12923[6], 0, i12922, 'targetObj')
  request.r(i12923[7], i12923[8], 0, i12922, 'thisTool')
  request.r(i12923[9], i12923[10], 0, i12922, 'thisToolTip')
  var i12925 = i12923[11]
  var i12924 = []
  for(var i = 0; i < i12925.length; i += 2) {
  request.r(i12925[i + 0], i12925[i + 1], 2, i12924, '')
  }
  i12922.hairsAnim = i12924
  var i12927 = i12923[12]
  var i12926 = []
  for(var i = 0; i < i12927.length; i += 2) {
  request.r(i12927[i + 0], i12927[i + 1], 2, i12926, '')
  }
  i12922.hairsRend = i12926
  i12922.hairsRendFadeThreshold = i12923[13]
  request.r(i12923[14], i12923[15], 0, i12922, 'wetHairRend')
  request.r(i12923[16], i12923[17], 0, i12922, 'dryHairRend')
  request.r(i12923[18], i12923[19], 0, i12922, 'dryHairRendBack')
  i12922.hairAnimStopDuration = i12923[20]
  i12922.hairAnimResumeDuration = i12923[21]
  return i12922
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i12928 = root || request.c( 'SpriteButton' )
  var i12929 = data
  i12928.onClick = request.d('UnityEngine.Events.UnityEvent', i12929[0], i12928.onClick)
  request.r(i12929[1], i12929[2], 0, i12928, 'spriteRenderer')
  request.r(i12929[3], i12929[4], 0, i12928, 'normalSprite')
  request.r(i12929[5], i12929[6], 0, i12928, 'hoverSprite')
  request.r(i12929[7], i12929[8], 0, i12928, 'pressedSprite')
  i12928.hoverScale = i12929[9]
  i12928.pressScale = i12929[10]
  i12928.animationDuration = i12929[11]
  return i12928
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i12930 = root || request.c( 'DestroyObj' )
  var i12931 = data
  i12930.destroyDelay = i12931[0]
  return i12930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i12932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i12933 = data
  i12932.name = i12933[0]
  i12932.atlasId = i12933[1]
  i12932.mipmapCount = i12933[2]
  i12932.hdr = !!i12933[3]
  i12932.size = i12933[4]
  i12932.anisoLevel = i12933[5]
  i12932.filterMode = i12933[6]
  var i12935 = i12933[7]
  var i12934 = []
  for(var i = 0; i < i12935.length; i += 4) {
    i12934.push( UnityEngine.Rect.MinMaxRect(i12935[i + 0], i12935[i + 1], i12935[i + 2], i12935[i + 3]) );
  }
  i12932.rects = i12934
  i12932.wrapU = i12933[8]
  i12932.wrapV = i12933[9]
  return i12932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i12938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i12939 = data
  i12938.name = i12939[0]
  i12938.index = i12939[1]
  i12938.startup = !!i12939[2]
  return i12938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i12940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i12941 = data
  i12940.aspect = i12941[0]
  i12940.orthographic = !!i12941[1]
  i12940.orthographicSize = i12941[2]
  i12940.backgroundColor = new pc.Color(i12941[3], i12941[4], i12941[5], i12941[6])
  i12940.nearClipPlane = i12941[7]
  i12940.farClipPlane = i12941[8]
  i12940.fieldOfView = i12941[9]
  i12940.depth = i12941[10]
  i12940.clearFlags = i12941[11]
  i12940.cullingMask = i12941[12]
  i12940.rect = i12941[13]
  request.r(i12941[14], i12941[15], 0, i12940, 'targetTexture')
  i12940.usePhysicalProperties = !!i12941[16]
  i12940.focalLength = i12941[17]
  i12940.sensorSize = new pc.Vec2( i12941[18], i12941[19] )
  i12940.lensShift = new pc.Vec2( i12941[20], i12941[21] )
  i12940.gateFit = i12941[22]
  i12940.commandBufferCount = i12941[23]
  i12940.cameraType = i12941[24]
  i12940.enabled = !!i12941[25]
  return i12940
}

Deserializers["CameraController"] = function (request, data, root) {
  var i12942 = root || request.c( 'CameraController' )
  var i12943 = data
  request.r(i12943[0], i12943[1], 0, i12942, 'cam')
  i12942.defaultPosition = new pc.Vec3( i12943[2], i12943[3], i12943[4] )
  i12942.defaultSize = i12943[5]
  i12942.defaultFOV = i12943[6]
  i12942.defaultDuration = i12943[7]
  i12942.defaultEase = i12943[8]
  return i12942
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i12944 = root || request.c( 'MusicSource' )
  var i12945 = data
  request.r(i12945[0], i12945[1], 0, i12944, 'source')
  return i12944
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i12946 = root || request.c( 'UI_Manager' )
  var i12947 = data
  i12946.levelCompleted = !!i12947[0]
  i12946.isPauseActive = !!i12947[1]
  i12946.loadIndex = i12947[2]
  request.r(i12947[3], i12947[4], 0, i12946, 'removeAdsButton')
  request.r(i12947[5], i12947[6], 0, i12946, 'pauseButton')
  request.r(i12947[7], i12947[8], 0, i12946, 'Fade_Img')
  request.r(i12947[9], i12947[10], 0, i12946, 'TopBarAnim')
  request.r(i12947[11], i12947[12], 0, i12946, 'MainPanel')
  request.r(i12947[13], i12947[14], 0, i12946, 'PausePanel')
  request.r(i12947[15], i12947[16], 0, i12946, 'PausePopUp')
  request.r(i12947[17], i12947[18], 0, i12946, 'PauseCanvasGroup')
  request.r(i12947[19], i12947[20], 0, i12946, 'RateUsPanel')
  request.r(i12947[21], i12947[22], 0, i12946, 'RateUsPopUp')
  request.r(i12947[23], i12947[24], 0, i12946, 'RemoveAdsPanel')
  request.r(i12947[25], i12947[26], 0, i12946, 'RemoveAdsPopUp')
  request.r(i12947[27], i12947[28], 0, i12946, 'RemoveAdsCanvasGroup')
  var i12949 = i12947[29]
  var i12948 = []
  for(var i = 0; i < i12949.length; i += 2) {
  request.r(i12949[i + 0], i12949[i + 1], 2, i12948, '')
  }
  i12946.RemoveAdsAnims = i12948
  request.r(i12947[30], i12947[31], 0, i12946, 'CompletePanel')
  request.r(i12947[32], i12947[33], 0, i12946, 'LevelIcon')
  request.r(i12947[34], i12947[35], 0, i12946, 'CompleteParticles')
  request.r(i12947[36], i12947[37], 0, i12946, 'progressBar')
  request.r(i12947[38], i12947[39], 0, i12946, 'progressText')
  request.r(i12947[40], i12947[41], 0, i12946, 'toolIcon1')
  request.r(i12947[42], i12947[43], 0, i12946, 'toolIcon2')
  request.r(i12947[44], i12947[45], 0, i12946, 'toolIcon3')
  request.r(i12947[46], i12947[47], 0, i12946, 'target1')
  request.r(i12947[48], i12947[49], 0, i12946, 'target2')
  i12946.toolMoveDuration = i12947[50]
  i12946.currentIndex = i12947[51]
  var i12951 = i12947[52]
  var i12950 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i12951.length; i += 2) {
  request.r(i12951[i + 0], i12951[i + 1], 1, i12950, '')
  }
  i12946.allTools = i12950
  request.r(i12947[53], i12947[54], 0, i12946, 'clockProgress')
  request.r(i12947[55], i12947[56], 0, i12946, 'clockProgressFill')
  request.r(i12947[57], i12947[58], 0, i12946, 'clockAudio')
  i12946.moveDistance = i12947[59]
  i12946.animationDuration = i12947[60]
  i12946.greyBgChildName = i12947[61]
  i12946.pushOffset = i12947[62]
  return i12946
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i12952 = root || request.c( 'GameManagerPlayable' )
  var i12953 = data
  request.r(i12953[0], i12953[1], 0, i12952, 'DefaultMat')
  request.r(i12953[2], i12953[3], 0, i12952, 'BG_Music')
  request.r(i12953[4], i12953[5], 0, i12952, 'restoreEffectShader')
  request.r(i12953[6], i12953[7], 0, i12952, 'stickerEffectShader')
  i12952.isComplete = !!i12953[8]
  i12952.isPaused = !!i12953[9]
  request.r(i12953[10], i12953[11], 0, i12952, 'currentLevel')
  return i12952
}

Deserializers["AudioController"] = function (request, data, root) {
  var i12954 = root || request.c( 'AudioController' )
  var i12955 = data
  request.r(i12955[0], i12955[1], 0, i12954, 'MainMixer')
  request.r(i12955[2], i12955[3], 0, i12954, 'UiClick')
  request.r(i12955[4], i12955[5], 0, i12954, 'UiClickSource')
  var i12957 = i12955[6]
  var i12956 = []
  for(var i = 0; i < i12957.length; i += 2) {
  request.r(i12957[i + 0], i12957[i + 1], 2, i12956, '')
  }
  i12954.SfxSources = i12956
  var i12959 = i12955[7]
  var i12958 = []
  for(var i = 0; i < i12959.length; i += 2) {
  request.r(i12959[i + 0], i12959[i + 1], 2, i12958, '')
  }
  i12954.AllClips = i12958
  return i12954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i12962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i12963 = data
  i12962.pivot = new pc.Vec2( i12963[0], i12963[1] )
  i12962.anchorMin = new pc.Vec2( i12963[2], i12963[3] )
  i12962.anchorMax = new pc.Vec2( i12963[4], i12963[5] )
  i12962.sizeDelta = new pc.Vec2( i12963[6], i12963[7] )
  i12962.anchoredPosition3D = new pc.Vec3( i12963[8], i12963[9], i12963[10] )
  i12962.rotation = new pc.Quat(i12963[11], i12963[12], i12963[13], i12963[14])
  i12962.scale = new pc.Vec3( i12963[15], i12963[16], i12963[17] )
  return i12962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i12964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i12965 = data
  i12964.planeDistance = i12965[0]
  i12964.referencePixelsPerUnit = i12965[1]
  i12964.isFallbackOverlay = !!i12965[2]
  i12964.renderMode = i12965[3]
  i12964.renderOrder = i12965[4]
  i12964.sortingLayerName = i12965[5]
  i12964.sortingOrder = i12965[6]
  i12964.scaleFactor = i12965[7]
  request.r(i12965[8], i12965[9], 0, i12964, 'worldCamera')
  i12964.overrideSorting = !!i12965[10]
  i12964.pixelPerfect = !!i12965[11]
  i12964.targetDisplay = i12965[12]
  i12964.overridePixelPerfect = !!i12965[13]
  i12964.enabled = !!i12965[14]
  return i12964
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i12966 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i12967 = data
  i12966.m_UiScaleMode = i12967[0]
  i12966.m_ReferencePixelsPerUnit = i12967[1]
  i12966.m_ScaleFactor = i12967[2]
  i12966.m_ReferenceResolution = new pc.Vec2( i12967[3], i12967[4] )
  i12966.m_ScreenMatchMode = i12967[5]
  i12966.m_MatchWidthOrHeight = i12967[6]
  i12966.m_PhysicalUnit = i12967[7]
  i12966.m_FallbackScreenDPI = i12967[8]
  i12966.m_DefaultSpriteDPI = i12967[9]
  i12966.m_DynamicPixelsPerUnit = i12967[10]
  i12966.m_PresetInfoIsWorld = !!i12967[11]
  return i12966
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i12968 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i12969 = data
  i12968.m_IgnoreReversedGraphics = !!i12969[0]
  i12968.m_BlockingObjects = i12969[1]
  i12968.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i12969[2] )
  return i12968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i12970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i12971 = data
  i12970.cullTransparentMesh = !!i12971[0]
  return i12970
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i12972 = root || request.c( 'UnityEngine.UI.Image' )
  var i12973 = data
  request.r(i12973[0], i12973[1], 0, i12972, 'm_Sprite')
  i12972.m_Type = i12973[2]
  i12972.m_PreserveAspect = !!i12973[3]
  i12972.m_FillCenter = !!i12973[4]
  i12972.m_FillMethod = i12973[5]
  i12972.m_FillAmount = i12973[6]
  i12972.m_FillClockwise = !!i12973[7]
  i12972.m_FillOrigin = i12973[8]
  i12972.m_UseSpriteMesh = !!i12973[9]
  i12972.m_PixelsPerUnitMultiplier = i12973[10]
  request.r(i12973[11], i12973[12], 0, i12972, 'm_Material')
  i12972.m_Maskable = !!i12973[13]
  i12972.m_Color = new pc.Color(i12973[14], i12973[15], i12973[16], i12973[17])
  i12972.m_RaycastTarget = !!i12973[18]
  i12972.m_RaycastPadding = new pc.Vec4( i12973[19], i12973[20], i12973[21], i12973[22] )
  return i12972
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i12974 = root || request.c( 'UnityEngine.UI.Text' )
  var i12975 = data
  i12974.m_FontData = request.d('UnityEngine.UI.FontData', i12975[0], i12974.m_FontData)
  i12974.m_Text = i12975[1]
  request.r(i12975[2], i12975[3], 0, i12974, 'm_Material')
  i12974.m_Maskable = !!i12975[4]
  i12974.m_Color = new pc.Color(i12975[5], i12975[6], i12975[7], i12975[8])
  i12974.m_RaycastTarget = !!i12975[9]
  i12974.m_RaycastPadding = new pc.Vec4( i12975[10], i12975[11], i12975[12], i12975[13] )
  return i12974
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i12976 = root || request.c( 'UnityEngine.UI.FontData' )
  var i12977 = data
  request.r(i12977[0], i12977[1], 0, i12976, 'm_Font')
  i12976.m_FontSize = i12977[2]
  i12976.m_FontStyle = i12977[3]
  i12976.m_BestFit = !!i12977[4]
  i12976.m_MinSize = i12977[5]
  i12976.m_MaxSize = i12977[6]
  i12976.m_Alignment = i12977[7]
  i12976.m_AlignByGeometry = !!i12977[8]
  i12976.m_RichText = !!i12977[9]
  i12976.m_HorizontalOverflow = i12977[10]
  i12976.m_VerticalOverflow = i12977[11]
  i12976.m_LineSpacing = i12977[12]
  return i12976
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i12978 = root || request.c( 'UnityEngine.UI.Button' )
  var i12979 = data
  i12978.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i12979[0], i12978.m_OnClick)
  i12978.m_Navigation = request.d('UnityEngine.UI.Navigation', i12979[1], i12978.m_Navigation)
  i12978.m_Transition = i12979[2]
  i12978.m_Colors = request.d('UnityEngine.UI.ColorBlock', i12979[3], i12978.m_Colors)
  i12978.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i12979[4], i12978.m_SpriteState)
  i12978.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i12979[5], i12978.m_AnimationTriggers)
  i12978.m_Interactable = !!i12979[6]
  request.r(i12979[7], i12979[8], 0, i12978, 'm_TargetGraphic')
  return i12978
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i12980 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i12981 = data
  i12980.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i12981[0], i12980.m_PersistentCalls)
  return i12980
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i12982 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i12983 = data
  i12982.m_Mode = i12983[0]
  i12982.m_WrapAround = !!i12983[1]
  request.r(i12983[2], i12983[3], 0, i12982, 'm_SelectOnUp')
  request.r(i12983[4], i12983[5], 0, i12982, 'm_SelectOnDown')
  request.r(i12983[6], i12983[7], 0, i12982, 'm_SelectOnLeft')
  request.r(i12983[8], i12983[9], 0, i12982, 'm_SelectOnRight')
  return i12982
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i12984 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i12985 = data
  i12984.m_NormalColor = new pc.Color(i12985[0], i12985[1], i12985[2], i12985[3])
  i12984.m_HighlightedColor = new pc.Color(i12985[4], i12985[5], i12985[6], i12985[7])
  i12984.m_PressedColor = new pc.Color(i12985[8], i12985[9], i12985[10], i12985[11])
  i12984.m_SelectedColor = new pc.Color(i12985[12], i12985[13], i12985[14], i12985[15])
  i12984.m_DisabledColor = new pc.Color(i12985[16], i12985[17], i12985[18], i12985[19])
  i12984.m_ColorMultiplier = i12985[20]
  i12984.m_FadeDuration = i12985[21]
  return i12984
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i12986 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i12987 = data
  request.r(i12987[0], i12987[1], 0, i12986, 'm_HighlightedSprite')
  request.r(i12987[2], i12987[3], 0, i12986, 'm_PressedSprite')
  request.r(i12987[4], i12987[5], 0, i12986, 'm_SelectedSprite')
  request.r(i12987[6], i12987[7], 0, i12986, 'm_DisabledSprite')
  return i12986
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i12988 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i12989 = data
  i12988.m_NormalTrigger = i12989[0]
  i12988.m_HighlightedTrigger = i12989[1]
  i12988.m_PressedTrigger = i12989[2]
  i12988.m_SelectedTrigger = i12989[3]
  i12988.m_DisabledTrigger = i12989[4]
  return i12988
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i12990 = root || request.c( 'PlayableHudRuntime' )
  var i12991 = data
  return i12990
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i12992 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i12993 = data
  request.r(i12993[0], i12993[1], 0, i12992, 'm_FirstSelected')
  i12992.m_sendNavigationEvents = !!i12993[2]
  i12992.m_DragThreshold = i12993[3]
  return i12992
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i12994 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i12995 = data
  i12994.m_HorizontalAxis = i12995[0]
  i12994.m_VerticalAxis = i12995[1]
  i12994.m_SubmitButton = i12995[2]
  i12994.m_CancelButton = i12995[3]
  i12994.m_InputActionsPerSecond = i12995[4]
  i12994.m_RepeatDelay = i12995[5]
  i12994.m_ForceModuleActive = !!i12995[6]
  i12994.m_SendPointerHoverToParent = !!i12995[7]
  return i12994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i12996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i12997 = data
  i12996.ambientIntensity = i12997[0]
  i12996.reflectionIntensity = i12997[1]
  i12996.ambientMode = i12997[2]
  i12996.ambientLight = new pc.Color(i12997[3], i12997[4], i12997[5], i12997[6])
  i12996.ambientSkyColor = new pc.Color(i12997[7], i12997[8], i12997[9], i12997[10])
  i12996.ambientGroundColor = new pc.Color(i12997[11], i12997[12], i12997[13], i12997[14])
  i12996.ambientEquatorColor = new pc.Color(i12997[15], i12997[16], i12997[17], i12997[18])
  i12996.fogColor = new pc.Color(i12997[19], i12997[20], i12997[21], i12997[22])
  i12996.fogEndDistance = i12997[23]
  i12996.fogStartDistance = i12997[24]
  i12996.fogDensity = i12997[25]
  i12996.fog = !!i12997[26]
  request.r(i12997[27], i12997[28], 0, i12996, 'skybox')
  i12996.fogMode = i12997[29]
  var i12999 = i12997[30]
  var i12998 = []
  for(var i = 0; i < i12999.length; i += 1) {
    i12998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i12999[i + 0]) );
  }
  i12996.lightmaps = i12998
  i12996.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i12997[31], i12996.lightProbes)
  i12996.lightmapsMode = i12997[32]
  i12996.mixedBakeMode = i12997[33]
  i12996.environmentLightingMode = i12997[34]
  i12996.ambientProbe = new pc.SphericalHarmonicsL2(i12997[35])
  request.r(i12997[36], i12997[37], 0, i12996, 'customReflection')
  request.r(i12997[38], i12997[39], 0, i12996, 'defaultReflection')
  i12996.defaultReflectionMode = i12997[40]
  i12996.defaultReflectionResolution = i12997[41]
  i12996.sunLightObjectId = i12997[42]
  i12996.pixelLightCount = i12997[43]
  i12996.defaultReflectionHDR = !!i12997[44]
  i12996.hasLightDataAsset = !!i12997[45]
  i12996.hasManualGenerate = !!i12997[46]
  return i12996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i13002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i13003 = data
  request.r(i13003[0], i13003[1], 0, i13002, 'lightmapColor')
  request.r(i13003[2], i13003[3], 0, i13002, 'lightmapDirection')
  request.r(i13003[4], i13003[5], 0, i13002, 'shadowMask')
  return i13002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i13004 = root || new UnityEngine.LightProbes()
  var i13005 = data
  return i13004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i13010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i13011 = data
  var i13013 = i13011[0]
  var i13012 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i13013.length; i += 1) {
    i13012.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i13013[i + 0]));
  }
  i13010.ShaderCompilationErrors = i13012
  i13010.name = i13011[1]
  i13010.guid = i13011[2]
  var i13015 = i13011[3]
  var i13014 = []
  for(var i = 0; i < i13015.length; i += 1) {
    i13014.push( i13015[i + 0] );
  }
  i13010.shaderDefinedKeywords = i13014
  var i13017 = i13011[4]
  var i13016 = []
  for(var i = 0; i < i13017.length; i += 1) {
    i13016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i13017[i + 0]) );
  }
  i13010.passes = i13016
  var i13019 = i13011[5]
  var i13018 = []
  for(var i = 0; i < i13019.length; i += 1) {
    i13018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i13019[i + 0]) );
  }
  i13010.usePasses = i13018
  var i13021 = i13011[6]
  var i13020 = []
  for(var i = 0; i < i13021.length; i += 1) {
    i13020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i13021[i + 0]) );
  }
  i13010.defaultParameterValues = i13020
  request.r(i13011[7], i13011[8], 0, i13010, 'unityFallbackShader')
  i13010.readDepth = !!i13011[9]
  i13010.hasDepthOnlyPass = !!i13011[10]
  i13010.isCreatedByShaderGraph = !!i13011[11]
  i13010.disableBatching = !!i13011[12]
  i13010.compiled = !!i13011[13]
  return i13010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i13024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i13025 = data
  i13024.shaderName = i13025[0]
  i13024.errorMessage = i13025[1]
  return i13024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i13030 = root || new pc.UnityShaderPass()
  var i13031 = data
  i13030.id = i13031[0]
  i13030.subShaderIndex = i13031[1]
  i13030.name = i13031[2]
  i13030.passType = i13031[3]
  i13030.grabPassTextureName = i13031[4]
  i13030.usePass = !!i13031[5]
  i13030.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i13031[6], i13030.zTest)
  i13030.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i13031[7], i13030.zWrite)
  i13030.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i13031[8], i13030.culling)
  i13030.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i13031[9], i13030.blending)
  i13030.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i13031[10], i13030.alphaBlending)
  i13030.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i13031[11], i13030.colorWriteMask)
  i13030.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i13031[12], i13030.offsetUnits)
  i13030.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i13031[13], i13030.offsetFactor)
  i13030.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i13031[14], i13030.stencilRef)
  i13030.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i13031[15], i13030.stencilReadMask)
  i13030.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i13031[16], i13030.stencilWriteMask)
  i13030.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i13031[17], i13030.stencilOp)
  i13030.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i13031[18], i13030.stencilOpFront)
  i13030.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i13031[19], i13030.stencilOpBack)
  var i13033 = i13031[20]
  var i13032 = []
  for(var i = 0; i < i13033.length; i += 1) {
    i13032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i13033[i + 0]) );
  }
  i13030.tags = i13032
  var i13035 = i13031[21]
  var i13034 = []
  for(var i = 0; i < i13035.length; i += 1) {
    i13034.push( i13035[i + 0] );
  }
  i13030.passDefinedKeywords = i13034
  var i13037 = i13031[22]
  var i13036 = []
  for(var i = 0; i < i13037.length; i += 1) {
    i13036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i13037[i + 0]) );
  }
  i13030.passDefinedKeywordGroups = i13036
  var i13039 = i13031[23]
  var i13038 = []
  for(var i = 0; i < i13039.length; i += 1) {
    i13038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i13039[i + 0]) );
  }
  i13030.variants = i13038
  var i13041 = i13031[24]
  var i13040 = []
  for(var i = 0; i < i13041.length; i += 1) {
    i13040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i13041[i + 0]) );
  }
  i13030.excludedVariants = i13040
  i13030.hasDepthReader = !!i13031[25]
  return i13030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i13042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i13043 = data
  i13042.val = i13043[0]
  i13042.name = i13043[1]
  return i13042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i13044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i13045 = data
  i13044.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i13045[0], i13044.src)
  i13044.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i13045[1], i13044.dst)
  i13044.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i13045[2], i13044.op)
  return i13044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i13046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i13047 = data
  i13046.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i13047[0], i13046.pass)
  i13046.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i13047[1], i13046.fail)
  i13046.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i13047[2], i13046.zFail)
  i13046.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i13047[3], i13046.comp)
  return i13046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i13050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i13051 = data
  i13050.name = i13051[0]
  i13050.value = i13051[1]
  return i13050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i13054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i13055 = data
  var i13057 = i13055[0]
  var i13056 = []
  for(var i = 0; i < i13057.length; i += 1) {
    i13056.push( i13057[i + 0] );
  }
  i13054.keywords = i13056
  i13054.hasDiscard = !!i13055[1]
  return i13054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i13060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i13061 = data
  i13060.passId = i13061[0]
  i13060.subShaderIndex = i13061[1]
  var i13063 = i13061[2]
  var i13062 = []
  for(var i = 0; i < i13063.length; i += 1) {
    i13062.push( i13063[i + 0] );
  }
  i13060.keywords = i13062
  i13060.vertexProgram = i13061[3]
  i13060.fragmentProgram = i13061[4]
  i13060.exportedForWebGl2 = !!i13061[5]
  i13060.readDepth = !!i13061[6]
  return i13060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i13066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i13067 = data
  request.r(i13067[0], i13067[1], 0, i13066, 'shader')
  i13066.pass = i13067[2]
  return i13066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i13070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i13071 = data
  i13070.name = i13071[0]
  i13070.type = i13071[1]
  i13070.value = new pc.Vec4( i13071[2], i13071[3], i13071[4], i13071[5] )
  i13070.textureValue = i13071[6]
  i13070.shaderPropertyFlag = i13071[7]
  return i13070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i13072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i13073 = data
  i13072.name = i13073[0]
  request.r(i13073[1], i13073[2], 0, i13072, 'texture')
  i13072.aabb = i13073[3]
  i13072.vertices = i13073[4]
  i13072.triangles = i13073[5]
  i13072.textureRect = UnityEngine.Rect.MinMaxRect(i13073[6], i13073[7], i13073[8], i13073[9])
  i13072.packedRect = UnityEngine.Rect.MinMaxRect(i13073[10], i13073[11], i13073[12], i13073[13])
  i13072.border = new pc.Vec4( i13073[14], i13073[15], i13073[16], i13073[17] )
  i13072.transparency = i13073[18]
  i13072.bounds = i13073[19]
  i13072.pixelsPerUnit = i13073[20]
  i13072.textureWidth = i13073[21]
  i13072.textureHeight = i13073[22]
  i13072.nativeSize = new pc.Vec2( i13073[23], i13073[24] )
  i13072.pivot = new pc.Vec2( i13073[25], i13073[26] )
  i13072.textureRectOffset = new pc.Vec2( i13073[27], i13073[28] )
  return i13072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i13074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i13075 = data
  i13074.name = i13075[0]
  return i13074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i13076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i13077 = data
  i13076.name = i13077[0]
  i13076.wrapMode = i13077[1]
  i13076.isLooping = !!i13077[2]
  i13076.length = i13077[3]
  var i13079 = i13077[4]
  var i13078 = []
  for(var i = 0; i < i13079.length; i += 1) {
    i13078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i13079[i + 0]) );
  }
  i13076.curves = i13078
  var i13081 = i13077[5]
  var i13080 = []
  for(var i = 0; i < i13081.length; i += 1) {
    i13080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i13081[i + 0]) );
  }
  i13076.events = i13080
  i13076.halfPrecision = !!i13077[6]
  i13076._frameRate = i13077[7]
  i13076.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i13077[8], i13076.localBounds)
  i13076.hasMuscleCurves = !!i13077[9]
  var i13083 = i13077[10]
  var i13082 = []
  for(var i = 0; i < i13083.length; i += 1) {
    i13082.push( i13083[i + 0] );
  }
  i13076.clipMuscleConstant = i13082
  i13076.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i13077[11], i13076.clipBindingConstant)
  return i13076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i13086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i13087 = data
  i13086.path = i13087[0]
  i13086.hash = i13087[1]
  i13086.componentType = i13087[2]
  i13086.property = i13087[3]
  i13086.keys = i13087[4]
  var i13089 = i13087[5]
  var i13088 = []
  for(var i = 0; i < i13089.length; i += 1) {
    i13088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i13089[i + 0]) );
  }
  i13086.objectReferenceKeys = i13088
  return i13086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i13092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i13093 = data
  i13092.time = i13093[0]
  request.r(i13093[1], i13093[2], 0, i13092, 'value')
  return i13092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i13096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i13097 = data
  i13096.functionName = i13097[0]
  i13096.floatParameter = i13097[1]
  i13096.intParameter = i13097[2]
  i13096.stringParameter = i13097[3]
  request.r(i13097[4], i13097[5], 0, i13096, 'objectReferenceParameter')
  i13096.time = i13097[6]
  return i13096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i13098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i13099 = data
  i13098.center = new pc.Vec3( i13099[0], i13099[1], i13099[2] )
  i13098.extends = new pc.Vec3( i13099[3], i13099[4], i13099[5] )
  return i13098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i13102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i13103 = data
  var i13105 = i13103[0]
  var i13104 = []
  for(var i = 0; i < i13105.length; i += 1) {
    i13104.push( i13105[i + 0] );
  }
  i13102.genericBindings = i13104
  var i13107 = i13103[1]
  var i13106 = []
  for(var i = 0; i < i13107.length; i += 1) {
    i13106.push( i13107[i + 0] );
  }
  i13102.pptrCurveMapping = i13106
  return i13102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i13108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i13109 = data
  i13108.name = i13109[0]
  i13108.ascent = i13109[1]
  i13108.originalLineHeight = i13109[2]
  i13108.fontSize = i13109[3]
  var i13111 = i13109[4]
  var i13110 = []
  for(var i = 0; i < i13111.length; i += 1) {
    i13110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i13111[i + 0]) );
  }
  i13108.characterInfo = i13110
  request.r(i13109[5], i13109[6], 0, i13108, 'texture')
  i13108.originalFontSize = i13109[7]
  return i13108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i13114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i13115 = data
  i13114.index = i13115[0]
  i13114.advance = i13115[1]
  i13114.bearing = i13115[2]
  i13114.glyphWidth = i13115[3]
  i13114.glyphHeight = i13115[4]
  i13114.minX = i13115[5]
  i13114.maxX = i13115[6]
  i13114.minY = i13115[7]
  i13114.maxY = i13115[8]
  i13114.uvBottomLeftX = i13115[9]
  i13114.uvBottomLeftY = i13115[10]
  i13114.uvBottomRightX = i13115[11]
  i13114.uvBottomRightY = i13115[12]
  i13114.uvTopLeftX = i13115[13]
  i13114.uvTopLeftY = i13115[14]
  i13114.uvTopRightX = i13115[15]
  i13114.uvTopRightY = i13115[16]
  return i13114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i13116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i13117 = data
  i13116.name = i13117[0]
  var i13119 = i13117[1]
  var i13118 = []
  for(var i = 0; i < i13119.length; i += 1) {
    i13118.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i13119[i + 0]) );
  }
  i13116.layers = i13118
  var i13121 = i13117[2]
  var i13120 = []
  for(var i = 0; i < i13121.length; i += 1) {
    i13120.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i13121[i + 0]) );
  }
  i13116.parameters = i13120
  i13116.animationClips = i13117[3]
  i13116.avatarUnsupported = i13117[4]
  return i13116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i13124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i13125 = data
  i13124.name = i13125[0]
  i13124.defaultWeight = i13125[1]
  i13124.blendingMode = i13125[2]
  i13124.avatarMask = i13125[3]
  i13124.syncedLayerIndex = i13125[4]
  i13124.syncedLayerAffectsTiming = !!i13125[5]
  i13124.syncedLayers = i13125[6]
  i13124.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i13125[7], i13124.stateMachine)
  return i13124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i13126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i13127 = data
  i13126.id = i13127[0]
  i13126.name = i13127[1]
  i13126.path = i13127[2]
  var i13129 = i13127[3]
  var i13128 = []
  for(var i = 0; i < i13129.length; i += 1) {
    i13128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i13129[i + 0]) );
  }
  i13126.states = i13128
  var i13131 = i13127[4]
  var i13130 = []
  for(var i = 0; i < i13131.length; i += 1) {
    i13130.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i13131[i + 0]) );
  }
  i13126.machines = i13130
  var i13133 = i13127[5]
  var i13132 = []
  for(var i = 0; i < i13133.length; i += 1) {
    i13132.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i13133[i + 0]) );
  }
  i13126.entryStateTransitions = i13132
  var i13135 = i13127[6]
  var i13134 = []
  for(var i = 0; i < i13135.length; i += 1) {
    i13134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i13135[i + 0]) );
  }
  i13126.exitStateTransitions = i13134
  var i13137 = i13127[7]
  var i13136 = []
  for(var i = 0; i < i13137.length; i += 1) {
    i13136.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i13137[i + 0]) );
  }
  i13126.anyStateTransitions = i13136
  i13126.defaultStateId = i13127[8]
  return i13126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i13140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i13141 = data
  i13140.id = i13141[0]
  i13140.name = i13141[1]
  i13140.cycleOffset = i13141[2]
  i13140.cycleOffsetParameter = i13141[3]
  i13140.cycleOffsetParameterActive = !!i13141[4]
  i13140.mirror = !!i13141[5]
  i13140.mirrorParameter = i13141[6]
  i13140.mirrorParameterActive = !!i13141[7]
  i13140.motionId = i13141[8]
  i13140.nameHash = i13141[9]
  i13140.fullPathHash = i13141[10]
  i13140.speed = i13141[11]
  i13140.speedParameter = i13141[12]
  i13140.speedParameterActive = !!i13141[13]
  i13140.tag = i13141[14]
  i13140.tagHash = i13141[15]
  i13140.writeDefaultValues = !!i13141[16]
  var i13143 = i13141[17]
  var i13142 = []
  for(var i = 0; i < i13143.length; i += 2) {
  request.r(i13143[i + 0], i13143[i + 1], 2, i13142, '')
  }
  i13140.behaviours = i13142
  var i13145 = i13141[18]
  var i13144 = []
  for(var i = 0; i < i13145.length; i += 1) {
    i13144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i13145[i + 0]) );
  }
  i13140.transitions = i13144
  return i13140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i13150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i13151 = data
  i13150.fullPath = i13151[0]
  i13150.canTransitionToSelf = !!i13151[1]
  i13150.duration = i13151[2]
  i13150.exitTime = i13151[3]
  i13150.hasExitTime = !!i13151[4]
  i13150.hasFixedDuration = !!i13151[5]
  i13150.interruptionSource = i13151[6]
  i13150.offset = i13151[7]
  i13150.orderedInterruption = !!i13151[8]
  i13150.destinationStateId = i13151[9]
  i13150.isExit = !!i13151[10]
  i13150.mute = !!i13151[11]
  i13150.solo = !!i13151[12]
  var i13153 = i13151[13]
  var i13152 = []
  for(var i = 0; i < i13153.length; i += 1) {
    i13152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i13153[i + 0]) );
  }
  i13150.conditions = i13152
  return i13150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i13158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i13159 = data
  i13158.destinationStateId = i13159[0]
  i13158.isExit = !!i13159[1]
  i13158.mute = !!i13159[2]
  i13158.solo = !!i13159[3]
  var i13161 = i13159[4]
  var i13160 = []
  for(var i = 0; i < i13161.length; i += 1) {
    i13160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i13161[i + 0]) );
  }
  i13158.conditions = i13160
  return i13158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i13164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i13165 = data
  i13164.mode = i13165[0]
  i13164.parameter = i13165[1]
  i13164.threshold = i13165[2]
  return i13164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i13168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i13169 = data
  i13168.defaultBool = !!i13169[0]
  i13168.defaultFloat = i13169[1]
  i13168.defaultInt = i13169[2]
  i13168.name = i13169[3]
  i13168.nameHash = i13169[4]
  i13168.type = i13169[5]
  return i13168
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i13170 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i13171 = data
  i13170.useSafeMode = !!i13171[0]
  i13170.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i13171[1], i13170.safeModeOptions)
  i13170.timeScale = i13171[2]
  i13170.unscaledTimeScale = i13171[3]
  i13170.useSmoothDeltaTime = !!i13171[4]
  i13170.maxSmoothUnscaledTime = i13171[5]
  i13170.rewindCallbackMode = i13171[6]
  i13170.showUnityEditorReport = !!i13171[7]
  i13170.logBehaviour = i13171[8]
  i13170.drawGizmos = !!i13171[9]
  i13170.defaultRecyclable = !!i13171[10]
  i13170.defaultAutoPlay = i13171[11]
  i13170.defaultUpdateType = i13171[12]
  i13170.defaultTimeScaleIndependent = !!i13171[13]
  i13170.defaultEaseType = i13171[14]
  i13170.defaultEaseOvershootOrAmplitude = i13171[15]
  i13170.defaultEasePeriod = i13171[16]
  i13170.defaultAutoKill = !!i13171[17]
  i13170.defaultLoopType = i13171[18]
  i13170.debugMode = !!i13171[19]
  i13170.debugStoreTargetId = !!i13171[20]
  i13170.showPreviewPanel = !!i13171[21]
  i13170.storeSettingsLocation = i13171[22]
  i13170.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i13171[23], i13170.modules)
  i13170.createASMDEF = !!i13171[24]
  i13170.showPlayingTweens = !!i13171[25]
  i13170.showPausedTweens = !!i13171[26]
  return i13170
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i13172 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i13173 = data
  i13172.logBehaviour = i13173[0]
  i13172.nestedTweenFailureBehaviour = i13173[1]
  return i13172
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i13174 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i13175 = data
  i13174.showPanel = !!i13175[0]
  i13174.audioEnabled = !!i13175[1]
  i13174.physicsEnabled = !!i13175[2]
  i13174.physics2DEnabled = !!i13175[3]
  i13174.spriteEnabled = !!i13175[4]
  i13174.uiEnabled = !!i13175[5]
  i13174.textMeshProEnabled = !!i13175[6]
  i13174.tk2DEnabled = !!i13175[7]
  i13174.deAudioEnabled = !!i13175[8]
  i13174.deUnityExtendedEnabled = !!i13175[9]
  i13174.epoOutlineEnabled = !!i13175[10]
  return i13174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i13176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i13177 = data
  var i13179 = i13177[0]
  var i13178 = []
  for(var i = 0; i < i13179.length; i += 1) {
    i13178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i13179[i + 0]) );
  }
  i13176.files = i13178
  i13176.componentToPrefabIds = i13177[1]
  return i13176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i13182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i13183 = data
  i13182.path = i13183[0]
  request.r(i13183[1], i13183[2], 0, i13182, 'unityObject')
  return i13182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i13184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i13185 = data
  var i13187 = i13185[0]
  var i13186 = []
  for(var i = 0; i < i13187.length; i += 1) {
    i13186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i13187[i + 0]) );
  }
  i13184.scriptsExecutionOrder = i13186
  var i13189 = i13185[1]
  var i13188 = []
  for(var i = 0; i < i13189.length; i += 1) {
    i13188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i13189[i + 0]) );
  }
  i13184.sortingLayers = i13188
  var i13191 = i13185[2]
  var i13190 = []
  for(var i = 0; i < i13191.length; i += 1) {
    i13190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i13191[i + 0]) );
  }
  i13184.cullingLayers = i13190
  i13184.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i13185[3], i13184.timeSettings)
  i13184.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i13185[4], i13184.physicsSettings)
  i13184.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i13185[5], i13184.physics2DSettings)
  i13184.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i13185[6], i13184.qualitySettings)
  i13184.enableRealtimeShadows = !!i13185[7]
  i13184.enableAutoInstancing = !!i13185[8]
  i13184.enableStaticBatching = !!i13185[9]
  i13184.enableDynamicBatching = !!i13185[10]
  i13184.usePreservativeDynamicBatching = !!i13185[11]
  i13184.lightmapEncodingQuality = i13185[12]
  i13184.desiredColorSpace = i13185[13]
  var i13193 = i13185[14]
  var i13192 = []
  for(var i = 0; i < i13193.length; i += 1) {
    i13192.push( i13193[i + 0] );
  }
  i13184.allTags = i13192
  return i13184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i13196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i13197 = data
  i13196.name = i13197[0]
  i13196.value = i13197[1]
  return i13196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i13200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i13201 = data
  i13200.id = i13201[0]
  i13200.name = i13201[1]
  i13200.value = i13201[2]
  return i13200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i13204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i13205 = data
  i13204.id = i13205[0]
  i13204.name = i13205[1]
  return i13204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i13206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i13207 = data
  i13206.fixedDeltaTime = i13207[0]
  i13206.maximumDeltaTime = i13207[1]
  i13206.timeScale = i13207[2]
  i13206.maximumParticleTimestep = i13207[3]
  return i13206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i13208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i13209 = data
  i13208.gravity = new pc.Vec3( i13209[0], i13209[1], i13209[2] )
  i13208.defaultSolverIterations = i13209[3]
  i13208.bounceThreshold = i13209[4]
  i13208.autoSyncTransforms = !!i13209[5]
  i13208.autoSimulation = !!i13209[6]
  var i13211 = i13209[7]
  var i13210 = []
  for(var i = 0; i < i13211.length; i += 1) {
    i13210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i13211[i + 0]) );
  }
  i13208.collisionMatrix = i13210
  return i13208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i13214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i13215 = data
  i13214.enabled = !!i13215[0]
  i13214.layerId = i13215[1]
  i13214.otherLayerId = i13215[2]
  return i13214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i13216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i13217 = data
  request.r(i13217[0], i13217[1], 0, i13216, 'material')
  i13216.gravity = new pc.Vec2( i13217[2], i13217[3] )
  i13216.positionIterations = i13217[4]
  i13216.velocityIterations = i13217[5]
  i13216.velocityThreshold = i13217[6]
  i13216.maxLinearCorrection = i13217[7]
  i13216.maxAngularCorrection = i13217[8]
  i13216.maxTranslationSpeed = i13217[9]
  i13216.maxRotationSpeed = i13217[10]
  i13216.baumgarteScale = i13217[11]
  i13216.baumgarteTOIScale = i13217[12]
  i13216.timeToSleep = i13217[13]
  i13216.linearSleepTolerance = i13217[14]
  i13216.angularSleepTolerance = i13217[15]
  i13216.defaultContactOffset = i13217[16]
  i13216.autoSimulation = !!i13217[17]
  i13216.queriesHitTriggers = !!i13217[18]
  i13216.queriesStartInColliders = !!i13217[19]
  i13216.callbacksOnDisable = !!i13217[20]
  i13216.reuseCollisionCallbacks = !!i13217[21]
  i13216.autoSyncTransforms = !!i13217[22]
  var i13219 = i13217[23]
  var i13218 = []
  for(var i = 0; i < i13219.length; i += 1) {
    i13218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i13219[i + 0]) );
  }
  i13216.collisionMatrix = i13218
  return i13216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i13222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i13223 = data
  i13222.enabled = !!i13223[0]
  i13222.layerId = i13223[1]
  i13222.otherLayerId = i13223[2]
  return i13222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i13224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i13225 = data
  var i13227 = i13225[0]
  var i13226 = []
  for(var i = 0; i < i13227.length; i += 1) {
    i13226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i13227[i + 0]) );
  }
  i13224.qualityLevels = i13226
  var i13229 = i13225[1]
  var i13228 = []
  for(var i = 0; i < i13229.length; i += 1) {
    i13228.push( i13229[i + 0] );
  }
  i13224.names = i13228
  i13224.shadows = i13225[2]
  i13224.anisotropicFiltering = i13225[3]
  i13224.antiAliasing = i13225[4]
  i13224.lodBias = i13225[5]
  i13224.shadowCascades = i13225[6]
  i13224.shadowDistance = i13225[7]
  i13224.shadowmaskMode = i13225[8]
  i13224.shadowProjection = i13225[9]
  i13224.shadowResolution = i13225[10]
  i13224.softParticles = !!i13225[11]
  i13224.softVegetation = !!i13225[12]
  i13224.activeColorSpace = i13225[13]
  i13224.desiredColorSpace = i13225[14]
  i13224.masterTextureLimit = i13225[15]
  i13224.maxQueuedFrames = i13225[16]
  i13224.particleRaycastBudget = i13225[17]
  i13224.pixelLightCount = i13225[18]
  i13224.realtimeReflectionProbes = !!i13225[19]
  i13224.shadowCascade2Split = i13225[20]
  i13224.shadowCascade4Split = new pc.Vec3( i13225[21], i13225[22], i13225[23] )
  i13224.streamingMipmapsActive = !!i13225[24]
  i13224.vSyncCount = i13225[25]
  i13224.asyncUploadBufferSize = i13225[26]
  i13224.asyncUploadTimeSlice = i13225[27]
  i13224.billboardsFaceCameraPosition = !!i13225[28]
  i13224.shadowNearPlaneOffset = i13225[29]
  i13224.streamingMipmapsMemoryBudget = i13225[30]
  i13224.maximumLODLevel = i13225[31]
  i13224.streamingMipmapsAddAllCameras = !!i13225[32]
  i13224.streamingMipmapsMaxLevelReduction = i13225[33]
  i13224.streamingMipmapsRenderersPerFrame = i13225[34]
  i13224.resolutionScalingFixedDPIFactor = i13225[35]
  i13224.streamingMipmapsMaxFileIORequests = i13225[36]
  i13224.currentQualityLevel = i13225[37]
  return i13224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i13232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i13233 = data
  var i13235 = i13233[0]
  var i13234 = []
  for(var i = 0; i < i13235.length; i += 1) {
    i13234.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i13235[i + 0]) );
  }
  i13232.groups = i13234
  var i13237 = i13233[1]
  var i13236 = []
  for(var i = 0; i < i13237.length; i += 1) {
    i13236.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i13237[i + 0]) );
  }
  i13232.snapshots = i13236
  return i13232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i13240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i13241 = data
  i13240.id = i13241[0]
  i13240.childGroupIds = i13241[1]
  i13240.name = i13241[2]
  return i13240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i13244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i13245 = data
  i13244.id = i13245[0]
  var i13247 = i13245[1]
  var i13246 = []
  for(var i = 0; i < i13247.length; i += 1) {
    i13246.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i13247[i + 0]) );
  }
  i13244.parameters = i13246
  return i13244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i13250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i13251 = data
  i13250.name = i13251[0]
  i13250.value = i13251[1]
  return i13250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i13254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i13255 = data
  i13254.weight = i13255[0]
  i13254.vertices = i13255[1]
  i13254.normals = i13255[2]
  i13254.tangents = i13255[3]
  return i13254
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[87],"88":[56],"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[90],"97":[46],"98":[46],"99":[46],"100":[46],"101":[46],"102":[46],"103":[46],"104":[46],"105":[46],"106":[46],"107":[46],"108":[46],"109":[46],"110":[56],"111":[112],"113":[114],"115":[114],"67":[61],"116":[29],"117":[14],"34":[31],"118":[14],"119":[120],"121":[120],"38":[13],"54":[31],"122":[14],"27":[14],"123":[61],"124":[61],"70":[67],"62":[71,61],"125":[61],"69":[67],"126":[61],"127":[61],"128":[61],"129":[61],"130":[61],"131":[61],"132":[61],"133":[61],"134":[61],"135":[71,61],"136":[61],"137":[61],"138":[61],"139":[61],"63":[71,61],"140":[61],"141":[75],"142":[75],"76":[75],"143":[75],"144":[56],"145":[56]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level1_Hair_Playable","BasicDrag","OutlinePulse","UnityEngine.GameObject","BD_CameraFollow","DG.Tweening.DOTweenAnimation","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.AudioClip","BD_Progress","BD_ProgressHelper","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.TrailRenderer","UnityEngine.LineRenderer","StaticFixedPipe","UnityEngine.BoxCollider2D","BD_Clamp","BD_ItemPick","BD_Sticky","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.SpriteMask","PlayTweenOnHit","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","InteractableBones","WaypointFollower","UnityEditor.Audio.AudioMixerGroupController","BD_Action","BD_ToolRotate","UnityEngine.Rigidbody2D","BugKill_Tip","ActionOnTap","BD_SpriteChange","BD_AnimatorDrag","PlaceItem","BD_Audio","Level1_HairAnim","SpriteButton","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Fold","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "4.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "25Aug2026_Lvl_1_1_Step1to3";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1703";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4372";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "HMBL.";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.hmbl.perfect.makeover.fashion.asmr";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "debd3cac-31dd-4347-a5fd-fcf7bb846b9e";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

