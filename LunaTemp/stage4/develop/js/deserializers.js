var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3610 = root || request.c( 'UnityEngine.JointSpring' )
  var i3611 = data
  i3610.spring = i3611[0]
  i3610.damper = i3611[1]
  i3610.targetPosition = i3611[2]
  return i3610
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3612 = root || request.c( 'UnityEngine.JointMotor' )
  var i3613 = data
  i3612.m_TargetVelocity = i3613[0]
  i3612.m_Force = i3613[1]
  i3612.m_FreeSpin = i3613[2]
  return i3612
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3614 = root || request.c( 'UnityEngine.JointLimits' )
  var i3615 = data
  i3614.m_Min = i3615[0]
  i3614.m_Max = i3615[1]
  i3614.m_Bounciness = i3615[2]
  i3614.m_BounceMinVelocity = i3615[3]
  i3614.m_ContactDistance = i3615[4]
  i3614.minBounce = i3615[5]
  i3614.maxBounce = i3615[6]
  return i3614
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3616 = root || request.c( 'UnityEngine.JointDrive' )
  var i3617 = data
  i3616.m_PositionSpring = i3617[0]
  i3616.m_PositionDamper = i3617[1]
  i3616.m_MaximumForce = i3617[2]
  i3616.m_UseAcceleration = i3617[3]
  return i3616
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3618 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3619 = data
  i3618.m_Spring = i3619[0]
  i3618.m_Damper = i3619[1]
  return i3618
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3620 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3621 = data
  i3620.m_Limit = i3621[0]
  i3620.m_Bounciness = i3621[1]
  i3620.m_ContactDistance = i3621[2]
  return i3620
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3622 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3623 = data
  i3622.m_ExtremumSlip = i3623[0]
  i3622.m_ExtremumValue = i3623[1]
  i3622.m_AsymptoteSlip = i3623[2]
  i3622.m_AsymptoteValue = i3623[3]
  i3622.m_Stiffness = i3623[4]
  return i3622
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3624 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3625 = data
  i3624.m_LowerAngle = i3625[0]
  i3624.m_UpperAngle = i3625[1]
  return i3624
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3626 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3627 = data
  i3626.m_MotorSpeed = i3627[0]
  i3626.m_MaximumMotorTorque = i3627[1]
  return i3626
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3628 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3629 = data
  i3628.m_DampingRatio = i3629[0]
  i3628.m_Frequency = i3629[1]
  i3628.m_Angle = i3629[2]
  return i3628
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3630 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3631 = data
  i3630.m_LowerTranslation = i3631[0]
  i3630.m_UpperTranslation = i3631[1]
  return i3630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3632 = root || new pc.UnityMaterial()
  var i3633 = data
  i3632.name = i3633[0]
  request.r(i3633[1], i3633[2], 0, i3632, 'shader')
  i3632.renderQueue = i3633[3]
  i3632.enableInstancing = !!i3633[4]
  var i3635 = i3633[5]
  var i3634 = []
  for(var i = 0; i < i3635.length; i += 1) {
    i3634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3635[i + 0]) );
  }
  i3632.floatParameters = i3634
  var i3637 = i3633[6]
  var i3636 = []
  for(var i = 0; i < i3637.length; i += 1) {
    i3636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3637[i + 0]) );
  }
  i3632.colorParameters = i3636
  var i3639 = i3633[7]
  var i3638 = []
  for(var i = 0; i < i3639.length; i += 1) {
    i3638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3639[i + 0]) );
  }
  i3632.vectorParameters = i3638
  var i3641 = i3633[8]
  var i3640 = []
  for(var i = 0; i < i3641.length; i += 1) {
    i3640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3641[i + 0]) );
  }
  i3632.textureParameters = i3640
  var i3643 = i3633[9]
  var i3642 = []
  for(var i = 0; i < i3643.length; i += 1) {
    i3642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3643[i + 0]) );
  }
  i3632.materialFlags = i3642
  return i3632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3647 = data
  i3646.name = i3647[0]
  i3646.value = i3647[1]
  return i3646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3651 = data
  i3650.name = i3651[0]
  i3650.value = new pc.Color(i3651[1], i3651[2], i3651[3], i3651[4])
  return i3650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3655 = data
  i3654.name = i3655[0]
  i3654.value = new pc.Vec4( i3655[1], i3655[2], i3655[3], i3655[4] )
  return i3654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3659 = data
  i3658.name = i3659[0]
  request.r(i3659[1], i3659[2], 0, i3658, 'value')
  return i3658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3663 = data
  i3662.name = i3663[0]
  i3662.enabled = !!i3663[1]
  return i3662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3665 = data
  i3664.name = i3665[0]
  i3664.width = i3665[1]
  i3664.height = i3665[2]
  i3664.mipmapCount = i3665[3]
  i3664.anisoLevel = i3665[4]
  i3664.filterMode = i3665[5]
  i3664.hdr = !!i3665[6]
  i3664.format = i3665[7]
  i3664.wrapMode = i3665[8]
  i3664.alphaIsTransparency = !!i3665[9]
  i3664.alphaSource = i3665[10]
  i3664.graphicsFormat = i3665[11]
  i3664.sRGBTexture = !!i3665[12]
  i3664.desiredColorSpace = i3665[13]
  i3664.wrapU = i3665[14]
  i3664.wrapV = i3665[15]
  return i3664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3667 = data
  i3666.name = i3667[0]
  i3666.halfPrecision = !!i3667[1]
  i3666.useSimplification = !!i3667[2]
  i3666.useUInt32IndexFormat = !!i3667[3]
  i3666.vertexCount = i3667[4]
  i3666.aabb = i3667[5]
  var i3669 = i3667[6]
  var i3668 = []
  for(var i = 0; i < i3669.length; i += 1) {
    i3668.push( !!i3669[i + 0] );
  }
  i3666.streams = i3668
  i3666.vertices = i3667[7]
  var i3671 = i3667[8]
  var i3670 = []
  for(var i = 0; i < i3671.length; i += 1) {
    i3670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3671[i + 0]) );
  }
  i3666.subMeshes = i3670
  var i3673 = i3667[9]
  var i3672 = []
  for(var i = 0; i < i3673.length; i += 16) {
    i3672.push( new pc.Mat4().setData(i3673[i + 0], i3673[i + 1], i3673[i + 2], i3673[i + 3],  i3673[i + 4], i3673[i + 5], i3673[i + 6], i3673[i + 7],  i3673[i + 8], i3673[i + 9], i3673[i + 10], i3673[i + 11],  i3673[i + 12], i3673[i + 13], i3673[i + 14], i3673[i + 15]) );
  }
  i3666.bindposes = i3672
  var i3675 = i3667[10]
  var i3674 = []
  for(var i = 0; i < i3675.length; i += 1) {
    i3674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3675[i + 0]) );
  }
  i3666.blendShapes = i3674
  return i3666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3681 = data
  i3680.triangles = i3681[0]
  return i3680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3687 = data
  i3686.name = i3687[0]
  var i3689 = i3687[1]
  var i3688 = []
  for(var i = 0; i < i3689.length; i += 1) {
    i3688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3689[i + 0]) );
  }
  i3686.frames = i3688
  return i3686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3691 = data
  i3690.position = new pc.Vec3( i3691[0], i3691[1], i3691[2] )
  i3690.scale = new pc.Vec3( i3691[3], i3691[4], i3691[5] )
  i3690.rotation = new pc.Quat(i3691[6], i3691[7], i3691[8], i3691[9])
  return i3690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3693 = data
  i3692.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3693[0], i3692.main)
  i3692.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3693[1], i3692.colorBySpeed)
  i3692.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3693[2], i3692.colorOverLifetime)
  i3692.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3693[3], i3692.emission)
  i3692.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3693[4], i3692.rotationBySpeed)
  i3692.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3693[5], i3692.rotationOverLifetime)
  i3692.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3693[6], i3692.shape)
  i3692.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3693[7], i3692.sizeBySpeed)
  i3692.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3693[8], i3692.sizeOverLifetime)
  i3692.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3693[9], i3692.textureSheetAnimation)
  i3692.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3693[10], i3692.velocityOverLifetime)
  i3692.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3693[11], i3692.noise)
  i3692.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3693[12], i3692.inheritVelocity)
  i3692.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3693[13], i3692.forceOverLifetime)
  i3692.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3693[14], i3692.limitVelocityOverLifetime)
  i3692.useAutoRandomSeed = !!i3693[15]
  i3692.randomSeed = i3693[16]
  return i3692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3694 = root || new pc.ParticleSystemMain()
  var i3695 = data
  i3694.duration = i3695[0]
  i3694.loop = !!i3695[1]
  i3694.prewarm = !!i3695[2]
  i3694.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3695[3], i3694.startDelay)
  i3694.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3695[4], i3694.startLifetime)
  i3694.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3695[5], i3694.startSpeed)
  i3694.startSize3D = !!i3695[6]
  i3694.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3695[7], i3694.startSizeX)
  i3694.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3695[8], i3694.startSizeY)
  i3694.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3695[9], i3694.startSizeZ)
  i3694.startRotation3D = !!i3695[10]
  i3694.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3695[11], i3694.startRotationX)
  i3694.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3695[12], i3694.startRotationY)
  i3694.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3695[13], i3694.startRotationZ)
  i3694.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3695[14], i3694.startColor)
  i3694.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3695[15], i3694.gravityModifier)
  i3694.simulationSpace = i3695[16]
  request.r(i3695[17], i3695[18], 0, i3694, 'customSimulationSpace')
  i3694.simulationSpeed = i3695[19]
  i3694.useUnscaledTime = !!i3695[20]
  i3694.scalingMode = i3695[21]
  i3694.playOnAwake = !!i3695[22]
  i3694.maxParticles = i3695[23]
  i3694.emitterVelocityMode = i3695[24]
  i3694.stopAction = i3695[25]
  return i3694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3696 = root || new pc.MinMaxCurve()
  var i3697 = data
  i3696.mode = i3697[0]
  i3696.curveMin = new pc.AnimationCurve( { keys_flow: i3697[1] } )
  i3696.curveMax = new pc.AnimationCurve( { keys_flow: i3697[2] } )
  i3696.curveMultiplier = i3697[3]
  i3696.constantMin = i3697[4]
  i3696.constantMax = i3697[5]
  return i3696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3698 = root || new pc.MinMaxGradient()
  var i3699 = data
  i3698.mode = i3699[0]
  i3698.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3699[1], i3698.gradientMin)
  i3698.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3699[2], i3698.gradientMax)
  i3698.colorMin = new pc.Color(i3699[3], i3699[4], i3699[5], i3699[6])
  i3698.colorMax = new pc.Color(i3699[7], i3699[8], i3699[9], i3699[10])
  return i3698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3701 = data
  i3700.mode = i3701[0]
  var i3703 = i3701[1]
  var i3702 = []
  for(var i = 0; i < i3703.length; i += 1) {
    i3702.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3703[i + 0]) );
  }
  i3700.colorKeys = i3702
  var i3705 = i3701[2]
  var i3704 = []
  for(var i = 0; i < i3705.length; i += 1) {
    i3704.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3705[i + 0]) );
  }
  i3700.alphaKeys = i3704
  return i3700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3706 = root || new pc.ParticleSystemColorBySpeed()
  var i3707 = data
  i3706.enabled = !!i3707[0]
  i3706.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3707[1], i3706.color)
  i3706.range = new pc.Vec2( i3707[2], i3707[3] )
  return i3706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3711 = data
  i3710.color = new pc.Color(i3711[0], i3711[1], i3711[2], i3711[3])
  i3710.time = i3711[4]
  return i3710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3715 = data
  i3714.alpha = i3715[0]
  i3714.time = i3715[1]
  return i3714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3716 = root || new pc.ParticleSystemColorOverLifetime()
  var i3717 = data
  i3716.enabled = !!i3717[0]
  i3716.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3717[1], i3716.color)
  return i3716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3718 = root || new pc.ParticleSystemEmitter()
  var i3719 = data
  i3718.enabled = !!i3719[0]
  i3718.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3719[1], i3718.rateOverTime)
  i3718.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3719[2], i3718.rateOverDistance)
  var i3721 = i3719[3]
  var i3720 = []
  for(var i = 0; i < i3721.length; i += 1) {
    i3720.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3721[i + 0]) );
  }
  i3718.bursts = i3720
  return i3718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3724 = root || new pc.ParticleSystemBurst()
  var i3725 = data
  i3724.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3725[0], i3724.count)
  i3724.cycleCount = i3725[1]
  i3724.minCount = i3725[2]
  i3724.maxCount = i3725[3]
  i3724.repeatInterval = i3725[4]
  i3724.time = i3725[5]
  return i3724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3726 = root || new pc.ParticleSystemRotationBySpeed()
  var i3727 = data
  i3726.enabled = !!i3727[0]
  i3726.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3727[1], i3726.x)
  i3726.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3727[2], i3726.y)
  i3726.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3727[3], i3726.z)
  i3726.separateAxes = !!i3727[4]
  i3726.range = new pc.Vec2( i3727[5], i3727[6] )
  return i3726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3728 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3729 = data
  i3728.enabled = !!i3729[0]
  i3728.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3729[1], i3728.x)
  i3728.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3729[2], i3728.y)
  i3728.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3729[3], i3728.z)
  i3728.separateAxes = !!i3729[4]
  return i3728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3730 = root || new pc.ParticleSystemShape()
  var i3731 = data
  i3730.enabled = !!i3731[0]
  i3730.shapeType = i3731[1]
  i3730.randomDirectionAmount = i3731[2]
  i3730.sphericalDirectionAmount = i3731[3]
  i3730.randomPositionAmount = i3731[4]
  i3730.alignToDirection = !!i3731[5]
  i3730.radius = i3731[6]
  i3730.radiusMode = i3731[7]
  i3730.radiusSpread = i3731[8]
  i3730.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3731[9], i3730.radiusSpeed)
  i3730.radiusThickness = i3731[10]
  i3730.angle = i3731[11]
  i3730.length = i3731[12]
  i3730.boxThickness = new pc.Vec3( i3731[13], i3731[14], i3731[15] )
  i3730.meshShapeType = i3731[16]
  request.r(i3731[17], i3731[18], 0, i3730, 'mesh')
  request.r(i3731[19], i3731[20], 0, i3730, 'meshRenderer')
  request.r(i3731[21], i3731[22], 0, i3730, 'skinnedMeshRenderer')
  i3730.useMeshMaterialIndex = !!i3731[23]
  i3730.meshMaterialIndex = i3731[24]
  i3730.useMeshColors = !!i3731[25]
  i3730.normalOffset = i3731[26]
  i3730.arc = i3731[27]
  i3730.arcMode = i3731[28]
  i3730.arcSpread = i3731[29]
  i3730.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3731[30], i3730.arcSpeed)
  i3730.donutRadius = i3731[31]
  i3730.position = new pc.Vec3( i3731[32], i3731[33], i3731[34] )
  i3730.rotation = new pc.Vec3( i3731[35], i3731[36], i3731[37] )
  i3730.scale = new pc.Vec3( i3731[38], i3731[39], i3731[40] )
  return i3730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3732 = root || new pc.ParticleSystemSizeBySpeed()
  var i3733 = data
  i3732.enabled = !!i3733[0]
  i3732.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3733[1], i3732.x)
  i3732.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3733[2], i3732.y)
  i3732.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3733[3], i3732.z)
  i3732.separateAxes = !!i3733[4]
  i3732.range = new pc.Vec2( i3733[5], i3733[6] )
  return i3732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3734 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3735 = data
  i3734.enabled = !!i3735[0]
  i3734.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3735[1], i3734.x)
  i3734.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3735[2], i3734.y)
  i3734.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3735[3], i3734.z)
  i3734.separateAxes = !!i3735[4]
  return i3734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3736 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3737 = data
  i3736.enabled = !!i3737[0]
  i3736.mode = i3737[1]
  i3736.animation = i3737[2]
  i3736.numTilesX = i3737[3]
  i3736.numTilesY = i3737[4]
  i3736.useRandomRow = !!i3737[5]
  i3736.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3737[6], i3736.frameOverTime)
  i3736.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3737[7], i3736.startFrame)
  i3736.cycleCount = i3737[8]
  i3736.rowIndex = i3737[9]
  i3736.flipU = i3737[10]
  i3736.flipV = i3737[11]
  i3736.spriteCount = i3737[12]
  var i3739 = i3737[13]
  var i3738 = []
  for(var i = 0; i < i3739.length; i += 2) {
  request.r(i3739[i + 0], i3739[i + 1], 2, i3738, '')
  }
  i3736.sprites = i3738
  return i3736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3742 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3743 = data
  i3742.enabled = !!i3743[0]
  i3742.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3743[1], i3742.x)
  i3742.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3743[2], i3742.y)
  i3742.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3743[3], i3742.z)
  i3742.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3743[4], i3742.radial)
  i3742.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3743[5], i3742.speedModifier)
  i3742.space = i3743[6]
  i3742.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3743[7], i3742.orbitalX)
  i3742.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3743[8], i3742.orbitalY)
  i3742.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3743[9], i3742.orbitalZ)
  i3742.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3743[10], i3742.orbitalOffsetX)
  i3742.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3743[11], i3742.orbitalOffsetY)
  i3742.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3743[12], i3742.orbitalOffsetZ)
  return i3742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3744 = root || new pc.ParticleSystemNoise()
  var i3745 = data
  i3744.enabled = !!i3745[0]
  i3744.separateAxes = !!i3745[1]
  i3744.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3745[2], i3744.strengthX)
  i3744.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3745[3], i3744.strengthY)
  i3744.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3745[4], i3744.strengthZ)
  i3744.frequency = i3745[5]
  i3744.damping = !!i3745[6]
  i3744.octaveCount = i3745[7]
  i3744.octaveMultiplier = i3745[8]
  i3744.octaveScale = i3745[9]
  i3744.quality = i3745[10]
  i3744.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3745[11], i3744.scrollSpeed)
  i3744.scrollSpeedMultiplier = i3745[12]
  i3744.remapEnabled = !!i3745[13]
  i3744.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3745[14], i3744.remapX)
  i3744.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3745[15], i3744.remapY)
  i3744.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3745[16], i3744.remapZ)
  i3744.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3745[17], i3744.positionAmount)
  i3744.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3745[18], i3744.rotationAmount)
  i3744.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3745[19], i3744.sizeAmount)
  return i3744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3746 = root || new pc.ParticleSystemInheritVelocity()
  var i3747 = data
  i3746.enabled = !!i3747[0]
  i3746.mode = i3747[1]
  i3746.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3747[2], i3746.curve)
  return i3746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3748 = root || new pc.ParticleSystemForceOverLifetime()
  var i3749 = data
  i3748.enabled = !!i3749[0]
  i3748.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[1], i3748.x)
  i3748.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[2], i3748.y)
  i3748.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3749[3], i3748.z)
  i3748.space = i3749[4]
  i3748.randomized = !!i3749[5]
  return i3748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3750 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3751 = data
  i3750.enabled = !!i3751[0]
  i3750.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[1], i3750.limit)
  i3750.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[2], i3750.limitX)
  i3750.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[3], i3750.limitY)
  i3750.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[4], i3750.limitZ)
  i3750.dampen = i3751[5]
  i3750.separateAxes = !!i3751[6]
  i3750.space = i3751[7]
  i3750.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3751[8], i3750.drag)
  i3750.multiplyDragByParticleSize = !!i3751[9]
  i3750.multiplyDragByParticleVelocity = !!i3751[10]
  return i3750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3753 = data
  request.r(i3753[0], i3753[1], 0, i3752, 'mesh')
  i3752.meshCount = i3753[2]
  i3752.activeVertexStreamsCount = i3753[3]
  i3752.alignment = i3753[4]
  i3752.renderMode = i3753[5]
  i3752.sortMode = i3753[6]
  i3752.lengthScale = i3753[7]
  i3752.velocityScale = i3753[8]
  i3752.cameraVelocityScale = i3753[9]
  i3752.normalDirection = i3753[10]
  i3752.sortingFudge = i3753[11]
  i3752.minParticleSize = i3753[12]
  i3752.maxParticleSize = i3753[13]
  i3752.pivot = new pc.Vec3( i3753[14], i3753[15], i3753[16] )
  request.r(i3753[17], i3753[18], 0, i3752, 'trailMaterial')
  i3752.applyActiveColorSpace = !!i3753[19]
  i3752.enabled = !!i3753[20]
  request.r(i3753[21], i3753[22], 0, i3752, 'sharedMaterial')
  var i3755 = i3753[23]
  var i3754 = []
  for(var i = 0; i < i3755.length; i += 2) {
  request.r(i3755[i + 0], i3755[i + 1], 2, i3754, '')
  }
  i3752.sharedMaterials = i3754
  i3752.receiveShadows = !!i3753[24]
  i3752.shadowCastingMode = i3753[25]
  i3752.sortingLayerID = i3753[26]
  i3752.sortingOrder = i3753[27]
  i3752.lightmapIndex = i3753[28]
  i3752.lightmapSceneIndex = i3753[29]
  i3752.lightmapScaleOffset = new pc.Vec4( i3753[30], i3753[31], i3753[32], i3753[33] )
  i3752.lightProbeUsage = i3753[34]
  i3752.reflectionProbeUsage = i3753[35]
  return i3752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3759 = data
  i3758.name = i3759[0]
  i3758.tagId = i3759[1]
  i3758.enabled = !!i3759[2]
  i3758.isStatic = !!i3759[3]
  i3758.layer = i3759[4]
  return i3758
}

Deserializers["Level1_Hair_Playable"] = function (request, data, root) {
  var i3760 = root || request.c( 'Level1_Hair_Playable' )
  var i3761 = data
  request.r(i3761[0], i3761[1], 0, i3760, 'wetCloth')
  request.r(i3761[2], i3761[3], 0, i3760, 'waterDripingParticle')
  i3760.ZoomStep1 = request.d('ZoomPos', i3761[4], i3760.ZoomStep1)
  var i3763 = i3761[5]
  var i3762 = []
  for(var i = 0; i < i3763.length; i += 2) {
  request.r(i3763[i + 0], i3763[i + 1], 2, i3762, '')
  }
  i3760.AllTrash = i3762
  var i3765 = i3761[6]
  var i3764 = []
  for(var i = 0; i < i3765.length; i += 2) {
  request.r(i3765[i + 0], i3765[i + 1], 2, i3764, '')
  }
  i3760.AllTrashOutlines = i3764
  i3760.trashDone = !!i3761[7]
  i3760.trashThrown = i3761[8]
  i3760.trashTotal = i3761[9]
  request.r(i3761[10], i3761[11], 0, i3760, 'bd_Sticky')
  i3760.ZoomStep2 = request.d('ZoomPos', i3761[12], i3760.ZoomStep2)
  request.r(i3761[13], i3761[14], 0, i3760, 'ToolStep2')
  request.r(i3761[15], i3761[16], 0, i3760, 'camFollowStep2')
  var i3767 = i3761[17]
  var i3766 = []
  for(var i = 0; i < i3767.length; i += 2) {
  request.r(i3767[i + 0], i3767[i + 1], 2, i3766, '')
  }
  i3760.AllBugOutlines = i3766
  i3760.ZoomStep2b = request.d('ZoomPos', i3761[18], i3760.ZoomStep2b)
  request.r(i3761[19], i3761[20], 0, i3760, 'ToolStep2b')
  request.r(i3761[21], i3761[22], 0, i3760, 'camFollowStep2b')
  request.r(i3761[23], i3761[24], 0, i3760, 'dustColStep2')
  request.r(i3761[25], i3761[26], 0, i3760, 'handIndicationShower')
  request.r(i3761[27], i3761[28], 0, i3760, 'hairDirtyStatic')
  request.r(i3761[29], i3761[30], 0, i3760, 'hairDirtyWetStatic')
  request.r(i3761[31], i3761[32], 0, i3760, 'dryHairAnim')
  i3760.ZoomStep3 = request.d('ZoomPos', i3761[33], i3760.ZoomStep3)
  request.r(i3761[34], i3761[35], 0, i3760, 'ShampooOnHand')
  request.r(i3761[36], i3761[37], 0, i3760, 'ShampooInHandCap')
  request.r(i3761[38], i3761[39], 0, i3760, 'ToolStep3')
  request.r(i3761[40], i3761[41], 0, i3760, 'shampooPatch')
  request.r(i3761[42], i3761[43], 0, i3760, 'handSpriteRend')
  request.r(i3761[44], i3761[45], 0, i3760, 'bottleDefault')
  request.r(i3761[46], i3761[47], 0, i3760, 'bottlePressed')
  request.r(i3761[48], i3761[49], 0, i3760, 'shampooDropping')
  request.r(i3761[50], i3761[51], 0, i3760, 'bottleOpenSfx')
  request.r(i3761[52], i3761[53], 0, i3760, 'bottleSqueezSfx')
  request.r(i3761[54], i3761[55], 0, i3760, 'bottlePourSfx')
  i3760.ZoomStep4 = request.d('ZoomPos', i3761[56], i3760.ZoomStep4)
  request.r(i3761[57], i3761[58], 0, i3760, 'ToolStep4')
  request.r(i3761[59], i3761[60], 0, i3760, 'camFollowStep4')
  request.r(i3761[61], i3761[62], 0, i3760, 'foamLight_E')
  request.r(i3761[63], i3761[64], 0, i3760, 'foam2_E')
  request.r(i3761[65], i3761[66], 0, i3760, 'foamCol')
  request.r(i3761[67], i3761[68], 0, i3760, 'handIndicationHands')
  request.r(i3761[69], i3761[70], 0, i3760, 'progressStep4')
  i3760.ZoomStep5a = request.d('ZoomPos', i3761[71], i3760.ZoomStep5a)
  i3760.ZoomStep5b = request.d('ZoomPos', i3761[72], i3760.ZoomStep5b)
  request.r(i3761[73], i3761[74], 0, i3760, 'ShowerDamaged')
  request.r(i3761[75], i3761[76], 0, i3760, 'ShowerDamaged_Drag')
  request.r(i3761[77], i3761[78], 0, i3760, 'ShowerBackDMG')
  request.r(i3761[79], i3761[80], 0, i3760, 'ShowerInner_dirty')
  request.r(i3761[81], i3761[82], 0, i3760, 'ShowerInner_Target')
  request.r(i3761[83], i3761[84], 0, i3760, 'ShowerFrontDMG')
  request.r(i3761[85], i3761[86], 0, i3760, 'OpenShowerIndication')
  request.r(i3761[87], i3761[88], 0, i3760, 'CloseShowerIndication')
  request.r(i3761[89], i3761[90], 0, i3760, 'showrOpenInput')
  request.r(i3761[91], i3761[92], 0, i3760, 'showerDisk')
  request.r(i3761[93], i3761[94], 0, i3760, 'showerFixReverseAnimDrag')
  request.r(i3761[95], i3761[96], 0, i3760, 'showerDragDamage')
  request.r(i3761[97], i3761[98], 0, i3760, 'ToolStep5Rev')
  request.r(i3761[99], i3761[100], 0, i3760, 'handIndicationShowerPlace')
  i3760.ZoomStep5 = request.d('ZoomPos', i3761[101], i3760.ZoomStep5)
  request.r(i3761[102], i3761[103], 0, i3760, 'ToolStep5')
  request.r(i3761[104], i3761[105], 0, i3760, 'ToolStep5Placeable')
  request.r(i3761[106], i3761[107], 0, i3760, 'toolStep5Progress')
  request.r(i3761[108], i3761[109], 0, i3760, 'toolStep5ProgressHelp')
  request.r(i3761[110], i3761[111], 0, i3760, 'camFollowStep5')
  request.r(i3761[112], i3761[113], 0, i3760, 'showerRender')
  request.r(i3761[114], i3761[115], 0, i3760, 'showerDirty')
  request.r(i3761[116], i3761[117], 0, i3760, 'showerClean')
  request.r(i3761[118], i3761[119], 0, i3760, 'waterShotParticle')
  request.r(i3761[120], i3761[121], 0, i3760, 'showerProblemClip')
  request.r(i3761[122], i3761[123], 0, i3760, 'FixErrorClip')
  i3760.ZoomStep6 = request.d('ZoomPos', i3761[124], i3760.ZoomStep6)
  request.r(i3761[125], i3761[126], 0, i3760, 'ToolStep6')
  request.r(i3761[127], i3761[128], 0, i3760, 'camFollowStep6')
  request.r(i3761[129], i3761[130], 0, i3760, 'wetHairs_E')
  request.r(i3761[131], i3761[132], 0, i3760, 'hairDryFade')
  i3760.ZoomStep7 = request.d('ZoomPos', i3761[133], i3760.ZoomStep7)
  request.r(i3761[134], i3761[135], 0, i3760, 'ToolStep7')
  request.r(i3761[136], i3761[137], 0, i3760, 'camFollowStep7')
  request.r(i3761[138], i3761[139], 0, i3760, 'dryHairs_E')
  request.r(i3761[140], i3761[141], 0, i3760, 'dryCombed_BG')
  request.r(i3761[142], i3761[143], 0, i3760, 'brushController')
  request.r(i3761[144], i3761[145], 0, i3760, 'handIndicationBrush')
  i3760.levelName = i3761[146]
  i3760.levelReward = i3761[147]
  request.r(i3761[148], i3761[149], 0, i3760, 'LevelIcon')
  request.r(i3761[150], i3761[151], 0, i3760, 'Level_BG')
  var i3769 = i3761[152]
  var i3768 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3769.length; i += 2) {
  request.r(i3769[i + 0], i3769[i + 1], 1, i3768, '')
  }
  i3760.ToolIcons = i3768
  var i3771 = i3761[153]
  var i3770 = []
  for(var i = 0; i < i3771.length; i += 2) {
  request.r(i3771[i + 0], i3771[i + 1], 2, i3770, '')
  }
  i3760.AllDrags = i3770
  var i3773 = i3761[154]
  var i3772 = []
  for(var i = 0; i < i3773.length; i += 2) {
  request.r(i3773[i + 0], i3773[i + 1], 2, i3772, '')
  }
  i3760.AllSources = i3772
  var i3775 = i3761[155]
  var i3774 = []
  for(var i = 0; i < i3775.length; i += 2) {
  request.r(i3775[i + 0], i3775[i + 1], 2, i3774, '')
  }
  i3760.AllScratches = i3774
  i3760.stepsDone = i3761[156]
  i3760.levelNo = i3761[157]
  i3760.partNo = i3761[158]
  request.r(i3761[159], i3761[160], 0, i3760, 'bubbleGum')
  return i3760
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i3776 = root || request.c( 'ZoomPos' )
  var i3777 = data
  i3776.CameraPos = new pc.Vec3( i3777[0], i3777[1], i3777[2] )
  i3776.CameraFOV = i3777[3]
  return i3776
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i3788 = root || request.c( 'PlayableCTA' )
  var i3789 = data
  i3788.trigger = i3789[0]
  i3788.afterSeconds = i3789[1]
  i3788.afterTaps = i3789[2]
  request.r(i3789[3], i3789[4], 0, i3788, 'scratchProgress')
  i3788.scratchIndex = i3789[5]
  i3788.progressThreshold = i3789[6]
  request.r(i3789[7], i3789[8], 0, i3788, 'watchedTool')
  i3788.blockInputOnFire = !!i3789[9]
  i3788.refireOnEveryTap = !!i3789[10]
  i3788.refireDelay = i3789[11]
  i3788.showEndCard = !!i3789[12]
  request.r(i3789[13], i3789[14], 0, i3788, 'endCard')
  i3788.showEndCardOnProgressTrigger = !!i3789[15]
  i3788.showEndCardOnToolAppearTrigger = !!i3789[16]
  i3788.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i3789[17], i3788.onCtaFired)
  i3788.logWhenFired = !!i3789[18]
  return i3788
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3790 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3791 = data
  i3790.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3791[0], i3790.m_PersistentCalls)
  return i3790
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3792 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3793 = data
  var i3795 = i3793[0]
  var i3794 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3795.length; i += 1) {
    i3794.add(request.d('UnityEngine.Events.PersistentCall', i3795[i + 0]));
  }
  i3792.m_Calls = i3794
  return i3792
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3798 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3799 = data
  request.r(i3799[0], i3799[1], 0, i3798, 'm_Target')
  i3798.m_TargetAssemblyTypeName = i3799[2]
  i3798.m_MethodName = i3799[3]
  i3798.m_Mode = i3799[4]
  i3798.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3799[5], i3798.m_Arguments)
  i3798.m_CallState = i3799[6]
  return i3798
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i3800 = root || request.c( 'PlayableFadeCoverSettings' )
  var i3801 = data
  i3800.revealDelay = i3801[0]
  i3800.revealDuration = i3801[1]
  return i3800
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i3802 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i3803 = data
  request.r(i3803[0], i3803[1], 0, i3802, 'MainCamera')
  i3802.RenderType = i3803[2]
  request.r(i3803[3], i3803[4], 0, i3802, 'ScratchSurfaceSprite')
  i3802.ScratchSurfaceSpriteHasAlpha = !!i3803[5]
  i3802.MaskProgressCutOffValue = i3803[6]
  request.r(i3803[7], i3803[8], 0, i3802, 'EraseTexture')
  i3802.EraseTextureScale = new pc.Vec2( i3803[9], i3803[10] )
  i3802.InputEnabled = !!i3803[11]
  request.r(i3803[12], i3803[13], 0, i3802, 'Card')
  i3802.Mode = i3803[14]
  request.r(i3803[15], i3803[16], 0, i3802, 'Progress')
  request.r(i3803[17], i3803[18], 0, i3802, 'MeshCard')
  request.r(i3803[19], i3803[20], 0, i3802, 'SpriteCard')
  request.r(i3803[21], i3803[22], 0, i3802, 'ImageCard')
  request.r(i3803[23], i3803[24], 0, i3802, 'MaskShader')
  request.r(i3803[25], i3803[26], 0, i3802, 'BrushShader')
  request.r(i3803[27], i3803[28], 0, i3802, 'MaskProgressShader')
  request.r(i3803[29], i3803[30], 0, i3802, 'MaskProgressCutOffShader')
  return i3802
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i3804 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i3805 = data
  request.r(i3805[0], i3805[1], 0, i3804, 'MainCamera')
  request.r(i3805[2], i3805[3], 0, i3804, 'Surface')
  i3804.RenderTextureQuality = i3805[4]
  request.r(i3805[5], i3805[6], 0, i3804, 'Eraser')
  request.r(i3805[7], i3805[8], 0, i3804, 'Progress')
  request.r(i3805[9], i3805[10], 0, i3804, 'ScratchSurface')
  request.r(i3805[11], i3805[12], 0, i3804, 'RenderTexture')
  i3804.BrushScale = new pc.Vec2( i3805[13], i3805[14] )
  request.r(i3805[15], i3805[16], 0, i3804, 'ToolTip')
  i3804.InputEnabled = !!i3805[17]
  i3804.IsScratching = !!i3805[18]
  i3804.useChangingScale = !!i3805[19]
  i3804.useGivenBrushScale = !!i3805[20]
  i3804.canSpreadMask = !!i3805[21]
  i3804.shouldPaintHoles = !!i3805[22]
  i3804.canRotateTip = !!i3805[23]
  i3804._mode = i3805[24]
  return i3804
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i3806 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i3807 = data
  request.r(i3807[0], i3807[1], 0, i3806, 'Card')
  i3806.currentProgress = i3807[2]
  return i3806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3809 = data
  request.r(i3809[0], i3809[1], 0, i3808, 'animatorController')
  request.r(i3809[2], i3809[3], 0, i3808, 'avatar')
  i3808.updateMode = i3809[4]
  i3808.hasTransformHierarchy = !!i3809[5]
  i3808.applyRootMotion = !!i3809[6]
  var i3811 = i3809[7]
  var i3810 = []
  for(var i = 0; i < i3811.length; i += 2) {
  request.r(i3811[i + 0], i3811[i + 1], 2, i3810, '')
  }
  i3808.humanBones = i3810
  i3808.enabled = !!i3809[8]
  return i3808
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i3814 = root || request.c( 'BD_AnimationHelper' )
  var i3815 = data
  i3814.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i3815[0], i3814.OnAnimationComplete)
  request.r(i3815[1], i3815[2], 0, i3814, 'sfxClip')
  return i3814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3817 = data
  i3816.color = new pc.Color(i3817[0], i3817[1], i3817[2], i3817[3])
  request.r(i3817[4], i3817[5], 0, i3816, 'sprite')
  i3816.flipX = !!i3817[6]
  i3816.flipY = !!i3817[7]
  i3816.drawMode = i3817[8]
  i3816.size = new pc.Vec2( i3817[9], i3817[10] )
  i3816.tileMode = i3817[11]
  i3816.adaptiveModeThreshold = i3817[12]
  i3816.maskInteraction = i3817[13]
  i3816.spriteSortPoint = i3817[14]
  i3816.enabled = !!i3817[15]
  request.r(i3817[16], i3817[17], 0, i3816, 'sharedMaterial')
  var i3819 = i3817[18]
  var i3818 = []
  for(var i = 0; i < i3819.length; i += 2) {
  request.r(i3819[i + 0], i3819[i + 1], 2, i3818, '')
  }
  i3816.sharedMaterials = i3818
  i3816.receiveShadows = !!i3817[19]
  i3816.shadowCastingMode = i3817[20]
  i3816.sortingLayerID = i3817[21]
  i3816.sortingOrder = i3817[22]
  i3816.lightmapIndex = i3817[23]
  i3816.lightmapSceneIndex = i3817[24]
  i3816.lightmapScaleOffset = new pc.Vec4( i3817[25], i3817[26], i3817[27], i3817[28] )
  i3816.lightProbeUsage = i3817[29]
  i3816.reflectionProbeUsage = i3817[30]
  return i3816
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i3820 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i3821 = data
  request.r(i3821[0], i3821[1], 0, i3820, 'm_RootBone')
  var i3823 = i3821[2]
  var i3822 = []
  for(var i = 0; i < i3823.length; i += 2) {
  request.r(i3823[i + 0], i3823[i + 1], 2, i3822, '')
  }
  i3820.m_BoneTransforms = i3822
  i3820.m_AlwaysUpdate = !!i3821[3]
  i3820.m_AutoRebind = !!i3821[4]
  return i3820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i3824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i3825 = data
  var i3827 = i3825[0]
  var i3826 = []
  for(var i = 0; i < i3827.length; i += 3) {
    i3826.push( new pc.Vec3( i3827[i + 0], i3827[i + 1], i3827[i + 2] ) );
  }
  i3824.positions = i3826
  i3824.positionCount = i3825[1]
  i3824.time = i3825[2]
  i3824.startWidth = i3825[3]
  i3824.endWidth = i3825[4]
  i3824.widthMultiplier = i3825[5]
  i3824.autodestruct = !!i3825[6]
  i3824.emitting = !!i3825[7]
  i3824.numCornerVertices = i3825[8]
  i3824.numCapVertices = i3825[9]
  i3824.minVertexDistance = i3825[10]
  i3824.colorGradient = i3825[11] ? new pc.ColorGradient(i3825[11][0], i3825[11][1], i3825[11][2]) : null
  i3824.startColor = new pc.Color(i3825[12], i3825[13], i3825[14], i3825[15])
  i3824.endColor = new pc.Color(i3825[16], i3825[17], i3825[18], i3825[19])
  i3824.generateLightingData = !!i3825[20]
  i3824.textureMode = i3825[21]
  i3824.alignment = i3825[22]
  i3824.widthCurve = new pc.AnimationCurve( { keys_flow: i3825[23] } )
  i3824.enabled = !!i3825[24]
  request.r(i3825[25], i3825[26], 0, i3824, 'sharedMaterial')
  var i3829 = i3825[27]
  var i3828 = []
  for(var i = 0; i < i3829.length; i += 2) {
  request.r(i3829[i + 0], i3829[i + 1], 2, i3828, '')
  }
  i3824.sharedMaterials = i3828
  i3824.receiveShadows = !!i3825[28]
  i3824.shadowCastingMode = i3825[29]
  i3824.sortingLayerID = i3825[30]
  i3824.sortingOrder = i3825[31]
  i3824.lightmapIndex = i3825[32]
  i3824.lightmapSceneIndex = i3825[33]
  i3824.lightmapScaleOffset = new pc.Vec4( i3825[34], i3825[35], i3825[36], i3825[37] )
  i3824.lightProbeUsage = i3825[38]
  i3824.reflectionProbeUsage = i3825[39]
  return i3824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i3832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i3833 = data
  i3832.textureMode = i3833[0]
  i3832.alignment = i3833[1]
  i3832.widthCurve = new pc.AnimationCurve( { keys_flow: i3833[2] } )
  i3832.colorGradient = i3833[3] ? new pc.ColorGradient(i3833[3][0], i3833[3][1], i3833[3][2]) : null
  var i3835 = i3833[4]
  var i3834 = []
  for(var i = 0; i < i3835.length; i += 3) {
    i3834.push( new pc.Vec3( i3835[i + 0], i3835[i + 1], i3835[i + 2] ) );
  }
  i3832.positions = i3834
  i3832.positionCount = i3833[5]
  i3832.widthMultiplier = i3833[6]
  i3832.startWidth = i3833[7]
  i3832.endWidth = i3833[8]
  i3832.numCornerVertices = i3833[9]
  i3832.numCapVertices = i3833[10]
  i3832.useWorldSpace = !!i3833[11]
  i3832.loop = !!i3833[12]
  i3832.startColor = new pc.Color(i3833[13], i3833[14], i3833[15], i3833[16])
  i3832.endColor = new pc.Color(i3833[17], i3833[18], i3833[19], i3833[20])
  i3832.generateLightingData = !!i3833[21]
  i3832.enabled = !!i3833[22]
  request.r(i3833[23], i3833[24], 0, i3832, 'sharedMaterial')
  var i3837 = i3833[25]
  var i3836 = []
  for(var i = 0; i < i3837.length; i += 2) {
  request.r(i3837[i + 0], i3837[i + 1], 2, i3836, '')
  }
  i3832.sharedMaterials = i3836
  i3832.receiveShadows = !!i3833[26]
  i3832.shadowCastingMode = i3833[27]
  i3832.sortingLayerID = i3833[28]
  i3832.sortingOrder = i3833[29]
  i3832.lightmapIndex = i3833[30]
  i3832.lightmapSceneIndex = i3833[31]
  i3832.lightmapScaleOffset = new pc.Vec4( i3833[32], i3833[33], i3833[34], i3833[35] )
  i3832.lightProbeUsage = i3833[36]
  i3832.reflectionProbeUsage = i3833[37]
  return i3832
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i3838 = root || request.c( 'StaticFixedPipe' )
  var i3839 = data
  request.r(i3839[0], i3839[1], 0, i3838, 'lineRenderer')
  request.r(i3839[2], i3839[3], 0, i3838, 'toolTransform')
  request.r(i3839[4], i3839[5], 0, i3838, 'toolDirectionPoint')
  request.r(i3839[6], i3839[7], 0, i3838, 'fixedEndPoint')
  i3838.segmentCount = i3839[8]
  i3838.totalLength = i3839[9]
  i3838.constraintIterations = i3839[10]
  i3838.gravity = new pc.Vec3( i3839[11], i3839[12], i3839[13] )
  i3838.pipeWidth = i3839[14]
  return i3838
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3840 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3841 = data
  i3840.targetIsSelf = !!i3841[0]
  request.r(i3841[1], i3841[2], 0, i3840, 'targetGO')
  i3840.tweenTargetIsTargetGO = !!i3841[3]
  i3840.delay = i3841[4]
  i3840.duration = i3841[5]
  i3840.easeType = i3841[6]
  i3840.easeCurve = new pc.AnimationCurve( { keys_flow: i3841[7] } )
  i3840.loopType = i3841[8]
  i3840.loops = i3841[9]
  i3840.id = i3841[10]
  i3840.isRelative = !!i3841[11]
  i3840.isFrom = !!i3841[12]
  i3840.isIndependentUpdate = !!i3841[13]
  i3840.autoKill = !!i3841[14]
  i3840.autoGenerate = !!i3841[15]
  i3840.isActive = !!i3841[16]
  i3840.isValid = !!i3841[17]
  request.r(i3841[18], i3841[19], 0, i3840, 'target')
  i3840.animationType = i3841[20]
  i3840.targetType = i3841[21]
  i3840.forcedTargetType = i3841[22]
  i3840.autoPlay = !!i3841[23]
  i3840.useTargetAsV3 = !!i3841[24]
  i3840.endValueFloat = i3841[25]
  i3840.endValueV3 = new pc.Vec3( i3841[26], i3841[27], i3841[28] )
  i3840.endValueV2 = new pc.Vec2( i3841[29], i3841[30] )
  i3840.endValueColor = new pc.Color(i3841[31], i3841[32], i3841[33], i3841[34])
  i3840.endValueString = i3841[35]
  i3840.endValueRect = UnityEngine.Rect.MinMaxRect(i3841[36], i3841[37], i3841[38], i3841[39])
  request.r(i3841[40], i3841[41], 0, i3840, 'endValueTransform')
  i3840.optionalBool0 = !!i3841[42]
  i3840.optionalBool1 = !!i3841[43]
  i3840.optionalFloat0 = i3841[44]
  i3840.optionalInt0 = i3841[45]
  i3840.optionalRotationMode = i3841[46]
  i3840.optionalScrambleMode = i3841[47]
  i3840.optionalShakeRandomnessMode = i3841[48]
  i3840.optionalString = i3841[49]
  i3840.updateType = i3841[50]
  i3840.isSpeedBased = !!i3841[51]
  i3840.hasOnStart = !!i3841[52]
  i3840.hasOnPlay = !!i3841[53]
  i3840.hasOnUpdate = !!i3841[54]
  i3840.hasOnStepComplete = !!i3841[55]
  i3840.hasOnComplete = !!i3841[56]
  i3840.hasOnTweenCreated = !!i3841[57]
  i3840.hasOnRewind = !!i3841[58]
  i3840.onStart = request.d('UnityEngine.Events.UnityEvent', i3841[59], i3840.onStart)
  i3840.onPlay = request.d('UnityEngine.Events.UnityEvent', i3841[60], i3840.onPlay)
  i3840.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3841[61], i3840.onUpdate)
  i3840.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3841[62], i3840.onStepComplete)
  i3840.onComplete = request.d('UnityEngine.Events.UnityEvent', i3841[63], i3840.onComplete)
  i3840.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3841[64], i3840.onTweenCreated)
  i3840.onRewind = request.d('UnityEngine.Events.UnityEvent', i3841[65], i3840.onRewind)
  return i3840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i3842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i3843 = data
  i3842.usedByComposite = !!i3843[0]
  i3842.autoTiling = !!i3843[1]
  i3842.size = new pc.Vec2( i3843[2], i3843[3] )
  i3842.edgeRadius = i3843[4]
  i3842.enabled = !!i3843[5]
  i3842.isTrigger = !!i3843[6]
  i3842.usedByEffector = !!i3843[7]
  i3842.density = i3843[8]
  i3842.offset = new pc.Vec2( i3843[9], i3843[10] )
  request.r(i3843[11], i3843[12], 0, i3842, 'material')
  return i3842
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i3844 = root || request.c( 'BasicDrag' )
  var i3845 = data
  i3844.canDrag = !!i3845[0]
  i3844.dragByDelta = !!i3845[1]
  i3844.isDragging = !!i3845[2]
  i3844.moveWithPointer = !!i3845[3]
  i3844.canReturn = !!i3845[4]
  i3844.jumpOnReturn = !!i3845[5]
  i3844.returnTime = i3845[6]
  i3844.Tool_Offset = new pc.Vec3( i3845[7], i3845[8], i3845[9] )
  i3844.canScaleIncrease = !!i3845[10]
  i3844.Self_ScaleNew = new pc.Vec3( i3845[11], i3845[12], i3845[13] )
  i3844.canRotateOnPick = !!i3845[14]
  i3844.startRot = new pc.Vec3( i3845[15], i3845[16], i3845[17] )
  i3844.newRot = new pc.Vec3( i3845[18], i3845[19], i3845[20] )
  var i3847 = i3845[21]
  var i3846 = []
  for(var i = 0; i < i3847.length; i += 2) {
  request.r(i3847[i + 0], i3847[i + 1], 2, i3846, '')
  }
  i3844.childSprite = i3846
  request.r(i3845[22], i3845[23], 0, i3844, 'ToolSelectClip')
  request.r(i3845[24], i3845[25], 0, i3844, 'ToolLoopClip')
  request.r(i3845[26], i3845[27], 0, i3844, 'thisParticles')
  i3844.onDragparticle = !!i3845[28]
  request.r(i3845[29], i3845[30], 0, i3844, 'dragParticles')
  request.r(i3845[31], i3845[32], 0, i3844, 'anim')
  i3844.startPos = new pc.Vec3( i3845[33], i3845[34], i3845[35] )
  i3844.startScale = new pc.Vec3( i3845[36], i3845[37], i3845[38] )
  i3844.Vibration = !!i3845[39]
  i3844.isPlacedCannotMove = !!i3845[40]
  i3844.isObjectMovingWhileDragging = !!i3845[41]
  i3844.OnMouseDownEvent = request.d('System.Action', i3845[42], i3844.OnMouseDownEvent)
  i3844.OnMouseUpEvent = request.d('System.Action', i3845[43], i3844.OnMouseUpEvent)
  i3844.ProgStartEvent = request.d('System.Action', i3845[44], i3844.ProgStartEvent)
  i3844.ProgEndEvent = request.d('System.Action', i3845[45], i3844.ProgEndEvent)
  i3844.canCallMouseUpWhenGamePaused = !!i3845[46]
  i3844.ClampX_L = i3845[47]
  i3844.ClampX_H = i3845[48]
  i3844.ClampY_L = i3845[49]
  i3844.ClampY_H = i3845[50]
  i3844.startOrder = i3845[51]
  i3844.dontResetItIsInCollider = !!i3845[52]
  request.r(i3845[53], i3845[54], 0, i3844, 'thisCollider')
  request.r(i3845[55], i3845[56], 0, i3844, 'thisSR')
  i3844.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i3845[57], i3844.OnMouseDownEventIndependentFromCanDrag)
  return i3844
}

Deserializers["System.Action"] = function (request, data, root) {
  var i3850 = root || request.c( 'System.Action' )
  var i3851 = data
  return i3850
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i3852 = root || request.c( 'BD_Clamp' )
  var i3853 = data
  i3852.ClampX_L = i3853[0]
  i3852.ClampX_H = i3853[1]
  i3852.ClampY_L = i3853[2]
  i3852.ClampY_H = i3853[3]
  return i3852
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i3854 = root || request.c( 'OutlinePulse' )
  var i3855 = data
  i3854.smallThickness = i3855[0]
  i3854.largeThickness = i3855[1]
  i3854.transitionSpeed = i3855[2]
  i3854.animationSpeed = i3855[3]
  i3854.isThickOutline = !!i3855[4]
  i3854.animate = !!i3855[5]
  i3854.hideSpriteOnly = !!i3855[6]
  return i3854
}

Deserializers["BD_ItemPick"] = function (request, data, root) {
  var i3856 = root || request.c( 'BD_ItemPick' )
  var i3857 = data
  request.r(i3857[0], i3857[1], 0, i3856, 'Tool')
  request.r(i3857[2], i3857[3], 0, i3856, 'Outline')
  request.r(i3857[4], i3857[5], 0, i3856, 'itemRend')
  request.r(i3857[6], i3857[7], 0, i3856, 'pick_sp')
  i3856.OnTap = request.d('UnityEngine.Events.UnityEvent', i3857[8], i3856.OnTap)
  i3856.OnComplete = request.d('UnityEngine.Events.UnityEvent', i3857[9], i3856.OnComplete)
  request.r(i3857[10], i3857[11], 0, i3856, 'Clip')
  i3856.minDragDistance = i3857[12]
  i3856.isTaped = !!i3857[13]
  return i3856
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3858 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3859 = data
  request.r(i3859[0], i3859[1], 0, i3858, 'm_ObjectArgument')
  i3858.m_ObjectArgumentAssemblyTypeName = i3859[2]
  i3858.m_IntArgument = i3859[3]
  i3858.m_FloatArgument = i3859[4]
  i3858.m_StringArgument = i3859[5]
  i3858.m_BoolArgument = !!i3859[6]
  return i3858
}

Deserializers["BD_Sticky"] = function (request, data, root) {
  var i3860 = root || request.c( 'BD_Sticky' )
  var i3861 = data
  request.r(i3861[0], i3861[1], 0, i3860, 'anim')
  i3860.isVerticlePull = !!i3861[2]
  request.r(i3861[3], i3861[4], 0, i3860, 'pickSfx')
  request.r(i3861[5], i3861[6], 0, i3860, 'pulledClip')
  request.r(i3861[7], i3861[8], 0, i3860, 'pullSource')
  i3860.OnComplete = request.d('UnityEngine.Events.UnityEvent', i3861[9], i3860.OnComplete)
  i3860.changeLayerPick = !!i3861[10]
  request.r(i3861[11], i3861[12], 0, i3860, 'sp_rendr')
  i3860.def_layerNo = i3861[13]
  i3860.tar_LayerNo = i3861[14]
  i3860.direction = i3861[15]
  i3860.dragThreshold = i3861[16]
  i3860.pullDistanceToFree = i3861[17]
  i3860.returnSpeed = i3861[18]
  i3860.resistance = i3861[19]
  var i3863 = i3861[20]
  var i3862 = []
  for(var i = 0; i < i3863.length; i += 2) {
  request.r(i3863[i + 0], i3863[i + 1], 2, i3862, '')
  }
  i3860.StartBones = i3862
  var i3865 = i3861[21]
  var i3864 = []
  for(var i = 0; i < i3865.length; i += 2) {
  request.r(i3865[i + 0], i3865[i + 1], 2, i3864, '')
  }
  i3860.EndBones = i3864
  request.r(i3861[22], i3861[23], 0, i3860, 'BonePivot')
  return i3860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3867 = data
  request.r(i3867[0], i3867[1], 0, i3866, 'clip')
  request.r(i3867[2], i3867[3], 0, i3866, 'outputAudioMixerGroup')
  i3866.playOnAwake = !!i3867[4]
  i3866.loop = !!i3867[5]
  i3866.time = i3867[6]
  i3866.volume = i3867[7]
  i3866.pitch = i3867[8]
  i3866.enabled = !!i3867[9]
  return i3866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i3868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i3869 = data
  i3868.radius = i3869[0]
  i3868.enabled = !!i3869[1]
  i3868.isTrigger = !!i3869[2]
  i3868.usedByEffector = !!i3869[3]
  i3868.density = i3869[4]
  i3868.offset = new pc.Vec2( i3869[5], i3869[6] )
  request.r(i3869[7], i3869[8], 0, i3868, 'material')
  return i3868
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i3870 = root || request.c( 'PlayParticlesOnCollision' )
  var i3871 = data
  request.r(i3871[0], i3871[1], 0, i3870, 'Target')
  request.r(i3871[2], i3871[3], 0, i3870, 'ParticlePrefab')
  i3870.destroyIt = !!i3871[4]
  i3870.stayAtPlace = !!i3871[5]
  i3870.disableOnCollision = !!i3871[6]
  i3870.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i3871[7], i3870.OnCollisionEvent)
  return i3870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i3872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i3873 = data
  i3872.frontSortingLayerID = i3873[0]
  i3872.frontSortingOrder = i3873[1]
  i3872.backSortingLayerID = i3873[2]
  i3872.backSortingOrder = i3873[3]
  i3872.alphaCutoff = i3873[4]
  request.r(i3873[5], i3873[6], 0, i3872, 'sprite')
  i3872.tileMode = i3873[7]
  i3872.isCustomRangeActive = !!i3873[8]
  i3872.spriteSortPoint = i3873[9]
  i3872.enabled = !!i3873[10]
  request.r(i3873[11], i3873[12], 0, i3872, 'sharedMaterial')
  var i3875 = i3873[13]
  var i3874 = []
  for(var i = 0; i < i3875.length; i += 2) {
  request.r(i3875[i + 0], i3875[i + 1], 2, i3874, '')
  }
  i3872.sharedMaterials = i3874
  i3872.receiveShadows = !!i3873[14]
  i3872.shadowCastingMode = i3873[15]
  i3872.sortingLayerID = i3873[16]
  i3872.sortingOrder = i3873[17]
  i3872.lightmapIndex = i3873[18]
  i3872.lightmapSceneIndex = i3873[19]
  i3872.lightmapScaleOffset = new pc.Vec4( i3873[20], i3873[21], i3873[22], i3873[23] )
  i3872.lightProbeUsage = i3873[24]
  i3872.reflectionProbeUsage = i3873[25]
  return i3872
}

Deserializers["PlayTweenOnHit"] = function (request, data, root) {
  var i3876 = root || request.c( 'PlayTweenOnHit' )
  var i3877 = data
  i3876.isContinueous = !!i3877[0]
  request.r(i3877[1], i3877[2], 0, i3876, 'tool')
  var i3879 = i3877[3]
  var i3878 = []
  for(var i = 0; i < i3879.length; i += 2) {
  request.r(i3879[i + 0], i3879[i + 1], 2, i3878, '')
  }
  i3876.animsToPlay = i3878
  request.r(i3877[4], i3877[5], 0, i3876, 'tipTarget')
  return i3876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i3882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i3883 = data
  i3882.usedByComposite = !!i3883[0]
  i3882.autoTiling = !!i3883[1]
  var i3885 = i3883[2]
  var i3884 = []
  for(var i = 0; i < i3885.length; i += 1) {
  var i3887 = i3885[i + 0]
  var i3886 = []
  for(var i = 0; i < i3887.length; i += 2) {
    i3886.push( new pc.Vec2( i3887[i + 0], i3887[i + 1] ) );
  }
    i3884.push( i3886 );
  }
  i3882.points = i3884
  i3882.enabled = !!i3883[3]
  i3882.isTrigger = !!i3883[4]
  i3882.usedByEffector = !!i3883[5]
  i3882.density = i3883[6]
  i3882.offset = new pc.Vec2( i3883[7], i3883[8] )
  request.r(i3883[9], i3883[10], 0, i3882, 'material')
  return i3882
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i3894 = root || request.c( 'PlaySfxOnCollision' )
  var i3895 = data
  request.r(i3895[0], i3895[1], 0, i3894, 'Tip')
  i3894.Mode = i3895[2]
  request.r(i3895[3], i3895[4], 0, i3894, 'DragInput')
  request.r(i3895[5], i3895[6], 0, i3894, 'Source')
  i3894.startVol = i3895[7]
  i3894.targetVol = i3895[8]
  i3894.duration = i3895[9]
  request.r(i3895[10], i3895[11], 0, i3894, 'Particles')
  i3894.isDone = !!i3895[12]
  i3894.isInArea = !!i3895[13]
  i3894.isPlaying = !!i3895[14]
  return i3894
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i3896 = root || request.c( 'InteractableBones' )
  var i3897 = data
  request.r(i3897[0], i3897[1], 0, i3896, 'Tip')
  i3896.MoveAmount = i3897[2]
  i3896.MoveSpeed = i3897[3]
  i3896.ShakeSpeed = i3897[4]
  i3896.MovementThreshold = i3897[5]
  i3896.MoveX = !!i3897[6]
  i3896.MoveY = !!i3897[7]
  return i3896
}

Deserializers["WaypointFollower"] = function (request, data, root) {
  var i3898 = root || request.c( 'WaypointFollower' )
  var i3899 = data
  var i3901 = i3899[0]
  var i3900 = []
  for(var i = 0; i < i3901.length; i += 2) {
  request.r(i3901[i + 0], i3901[i + 1], 2, i3900, '')
  }
  i3898.waypoints = i3900
  i3898.speed = i3899[1]
  i3898.rotationSpeed = i3899[2]
  i3898.loop = !!i3899[3]
  i3898.reverse = !!i3899[4]
  i3898.canMove = !!i3899[5]
  request.r(i3899[6], i3899[7], 0, i3898, 'movingSfx')
  return i3898
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i3902 = root || request.c( 'BD_Action' )
  var i3903 = data
  i3902.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i3903[0], i3902.OnMouseDownEvent)
  i3902.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i3903[1], i3902.OnMouseUpEvent)
  i3902.setToolLayer = !!i3903[2]
  request.r(i3903[3], i3903[4], 0, i3902, 'tool_SP')
  return i3902
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i3904 = root || request.c( 'BD_CameraFollow' )
  var i3905 = data
  request.r(i3905[0], i3905[1], 0, i3904, 'Tool')
  request.r(i3905[2], i3905[3], 0, i3904, 'Pivot')
  i3904.FOV = i3905[4]
  i3904.Y_L = i3905[5]
  i3904.Y_H = i3905[6]
  i3904.X_L = i3905[7]
  i3904.X_R = i3905[8]
  i3904.startDelay = i3905[9]
  i3904.duration = i3905[10]
  return i3904
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i3906 = root || request.c( 'BD_ToolRotate' )
  var i3907 = data
  i3906.startDelay = i3907[0]
  request.r(i3907[1], i3907[2], 0, i3906, 'Tool')
  request.r(i3907[3], i3907[4], 0, i3906, 'Clamp')
  request.r(i3907[5], i3907[6], 0, i3906, 'Pivot')
  i3906.MinAngle = new pc.Vec3( i3907[7], i3907[8], i3907[9] )
  i3906.MaxAngle = new pc.Vec3( i3907[10], i3907[11], i3907[12] )
  i3906.rotationSpeed = i3907[13]
  return i3906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i3908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i3909 = data
  i3908.bodyType = i3909[0]
  request.r(i3909[1], i3909[2], 0, i3908, 'material')
  i3908.simulated = !!i3909[3]
  i3908.useAutoMass = !!i3909[4]
  i3908.mass = i3909[5]
  i3908.drag = i3909[6]
  i3908.angularDrag = i3909[7]
  i3908.gravityScale = i3909[8]
  i3908.collisionDetectionMode = i3909[9]
  i3908.sleepMode = i3909[10]
  i3908.constraints = i3909[11]
  return i3908
}

Deserializers["BugKill_Tip"] = function (request, data, root) {
  var i3910 = root || request.c( 'BugKill_Tip' )
  var i3911 = data
  var i3913 = i3911[0]
  var i3912 = []
  for(var i = 0; i < i3913.length; i += 2) {
  request.r(i3913[i + 0], i3913[i + 1], 2, i3912, '')
  }
  i3910.targets = i3912
  i3910.waypointFollower = !!i3911[1]
  i3910.fallSpeed = i3911[2]
  i3910.totalTargets = i3911[3]
  i3910.killCount = i3911[4]
  request.r(i3911[5], i3911[6], 0, i3910, 'bugKillSfx')
  i3910.OnComplete = request.d('UnityEngine.Events.UnityEvent', i3911[7], i3910.OnComplete)
  return i3910
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i3916 = root || request.c( 'BD_Progress' )
  var i3917 = data
  var i3919 = i3917[0]
  var i3918 = []
  for(var i = 0; i < i3919.length; i += 1) {
    i3918.push( request.d('ScratchData', i3919[i + 0]) );
  }
  i3916.AllScratches = i3918
  i3916.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i3917[1], i3916.OnScratchComplete)
  i3916.isProgDone = !!i3917[2]
  i3916.canCallComplete = !!i3917[3]
  i3916.CollectiveAppear = !!i3917[4]
  i3916.tipControl = !!i3917[5]
  i3916.progressControl = !!i3917[6]
  request.r(i3917[7], i3917[8], 0, i3916, 'thisDrag')
  i3916.CompleteEvent = request.d('System.Action', i3917[9], i3916.CompleteEvent)
  i3916.SubCompleteEvent = request.d('System.Action', i3917[10], i3916.SubCompleteEvent)
  return i3916
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i3922 = root || request.c( 'ScratchData' )
  var i3923 = data
  request.r(i3923[0], i3923[1], 0, i3922, 'ScratchManager')
  i3922.scratchLimit = i3923[2]
  i3922.isComplete = !!i3923[3]
  return i3922
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i3924 = root || request.c( 'BD_ProgressHelper' )
  var i3925 = data
  request.r(i3925[0], i3925[1], 0, i3924, 'BD_Progress')
  request.r(i3925[2], i3925[3], 0, i3924, 'fadeSprite')
  i3924.fadeIn = !!i3925[4]
  return i3924
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i3926 = root || request.c( 'ActionOnTap' )
  var i3927 = data
  i3926.OnTap = request.d('UnityEngine.Events.UnityEvent', i3927[0], i3926.OnTap)
  i3926.OnTapExtra = request.d('System.Action', i3927[1], i3926.OnTapExtra)
  return i3926
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i3928 = root || request.c( 'BD_SpriteChange' )
  var i3929 = data
  request.r(i3929[0], i3929[1], 0, i3928, 'BD')
  request.r(i3929[2], i3929[3], 0, i3928, 'SR')
  request.r(i3929[4], i3929[5], 0, i3928, 'Default')
  request.r(i3929[6], i3929[7], 0, i3928, 'Picked')
  i3928.resetOnRelease = !!i3929[8]
  return i3928
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i3930 = root || request.c( 'BD_AnimatorDrag' )
  var i3931 = data
  request.r(i3931[0], i3931[1], 0, i3930, 'BD')
  request.r(i3931[2], i3931[3], 0, i3930, 'anim')
  request.r(i3931[4], i3931[5], 0, i3930, 'Source')
  i3930.Vibration = !!i3931[6]
  i3930.isCompletable = !!i3931[7]
  i3930.completionThreshold = i3931[8]
  i3930.OnComplete = request.d('UnityEngine.Events.UnityEvent', i3931[9], i3930.OnComplete)
  return i3930
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i3932 = root || request.c( 'PlaceItem' )
  var i3933 = data
  request.r(i3933[0], i3933[1], 0, i3932, 'thisDrag')
  request.r(i3933[2], i3933[3], 0, i3932, 'Target')
  request.r(i3933[4], i3933[5], 0, i3932, 'Clip')
  i3932.jumpOnPlace = !!i3933[6]
  i3932.jumpHeight = i3933[7]
  i3932.jumpDuration = i3933[8]
  i3932.settleDuration = i3933[9]
  i3932.isPlaced = !!i3933[10]
  i3932.isInsideCollider = !!i3933[11]
  i3932.changeScaleOnPlace = !!i3933[12]
  request.r(i3933[13], i3933[14], 0, i3932, 'item')
  i3932.newScaleOnPlace = new pc.Vec3( i3933[15], i3933[16], i3933[17] )
  i3932.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i3933[18], i3932.OnPlaced)
  return i3932
}

Deserializers["BD_Audio"] = function (request, data, root) {
  var i3934 = root || request.c( 'BD_Audio' )
  var i3935 = data
  request.r(i3935[0], i3935[1], 0, i3934, 'BD')
  request.r(i3935[2], i3935[3], 0, i3934, 'Source')
  i3934.shouldRestart = !!i3935[4]
  i3934.startVol = i3935[5]
  i3934.targetVol = i3935[6]
  i3934.duration = i3935[7]
  i3934.startDelay = i3935[8]
  return i3934
}

Deserializers["Level1_HairAnim"] = function (request, data, root) {
  var i3936 = root || request.c( 'Level1_HairAnim' )
  var i3937 = data
  i3936.holdDuration = i3937[0]
  request.r(i3937[1], i3937[2], 0, i3936, 'targetSprite')
  i3936.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i3937[3], i3936.onHoldComplete)
  i3936.isHolding = !!i3937[4]
  request.r(i3937[5], i3937[6], 0, i3936, 'targetObj')
  request.r(i3937[7], i3937[8], 0, i3936, 'thisTool')
  request.r(i3937[9], i3937[10], 0, i3936, 'thisToolTip')
  var i3939 = i3937[11]
  var i3938 = []
  for(var i = 0; i < i3939.length; i += 2) {
  request.r(i3939[i + 0], i3939[i + 1], 2, i3938, '')
  }
  i3936.hairsAnim = i3938
  var i3941 = i3937[12]
  var i3940 = []
  for(var i = 0; i < i3941.length; i += 2) {
  request.r(i3941[i + 0], i3941[i + 1], 2, i3940, '')
  }
  i3936.hairsRend = i3940
  i3936.hairsRendFadeThreshold = i3937[13]
  request.r(i3937[14], i3937[15], 0, i3936, 'wetHairRend')
  request.r(i3937[16], i3937[17], 0, i3936, 'dryHairRend')
  request.r(i3937[18], i3937[19], 0, i3936, 'dryHairRendBack')
  i3936.hairAnimStopDuration = i3937[20]
  i3936.hairAnimResumeDuration = i3937[21]
  return i3936
}

Deserializers["BD_TapandHold"] = function (request, data, root) {
  var i3942 = root || request.c( 'BD_TapandHold' )
  var i3943 = data
  i3942.holdDuration = i3943[0]
  i3942.updateVisuals = !!i3943[1]
  request.r(i3943[2], i3943[3], 0, i3942, 'targetSprite')
  i3942.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i3943[4], i3942.onHoldComplete)
  i3942.onCompleteProgress = request.d('UnityEngine.Events.UnityEvent', i3943[5], i3942.onCompleteProgress)
  i3942.currentProgress = i3943[6]
  i3942.isHolding = !!i3943[7]
  request.r(i3943[8], i3943[9], 0, i3942, 'targetObj')
  request.r(i3943[10], i3943[11], 0, i3942, 'thisTool')
  request.r(i3943[12], i3943[13], 0, i3942, 'thisToolTip')
  return i3942
}

Deserializers["TapandHold_Simple"] = function (request, data, root) {
  var i3944 = root || request.c( 'TapandHold_Simple' )
  var i3945 = data
  request.r(i3945[0], i3945[1], 0, i3944, 'actionSfx')
  i3944.holdDuration = i3945[2]
  i3944.dragThreshold = i3945[3]
  i3944.fadeInOnHold = !!i3945[4]
  i3944.fadeOutOnRelease = !!i3945[5]
  request.r(i3945[6], i3945[7], 0, i3944, 'targetSprite')
  i3944.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i3945[8], i3944.onHoldComplete)
  i3944.currentProgress = i3945[9]
  i3944.isHolding = !!i3945[10]
  i3944.isCompleted = !!i3945[11]
  request.r(i3945[12], i3945[13], 0, i3944, 'thisTool')
  return i3944
}

Deserializers["DraggableBrush"] = function (request, data, root) {
  var i3946 = root || request.c( 'DraggableBrush' )
  var i3947 = data
  request.r(i3947[0], i3947[1], 0, i3946, 'BD_Progress')
  var i3949 = i3947[2]
  var i3948 = new (System.Collections.Generic.List$1(Bridge.ns('DraggableBrush+Step')))
  for(var i = 0; i < i3949.length; i += 1) {
    i3948.add(request.d('DraggableBrush+Step', i3949[i + 0]));
  }
  i3946.movementSteps = i3948
  i3946.snapSensitivity = i3947[3]
  i3946.OnComplete = request.d('UnityEngine.Events.UnityEvent', i3947[4], i3946.OnComplete)
  return i3946
}

Deserializers["DraggableBrush+Step"] = function (request, data, root) {
  var i3952 = root || request.c( 'DraggableBrush+Step' )
  var i3953 = data
  i3952.stepName = i3953[0]
  i3952.startX = i3953[1]
  i3952.startY = i3953[2]
  i3952.endY = i3953[3]
  return i3952
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i3954 = root || request.c( 'SpriteButton' )
  var i3955 = data
  i3954.isLocked = !!i3955[0]
  i3954.lockMsg = i3955[1]
  i3954.onClick = request.d('UnityEngine.Events.UnityEvent', i3955[2], i3954.onClick)
  i3954.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i3955[3], i3954.onLockedClick)
  i3954.isLevelBtnSfx = !!i3955[4]
  request.r(i3955[5], i3955[6], 0, i3954, 'pivot')
  i3954.reductionChange = i3955[7]
  i3954.animationDuration = i3955[8]
  return i3954
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i3956 = root || request.c( 'DestroyObj' )
  var i3957 = data
  i3956.destroyDelay = i3957[0]
  return i3956
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i3958 = root || request.c( 'MenuLevel' )
  var i3959 = data
  request.r(i3959[0], i3959[1], 0, i3958, 'menuLevelBtnUpdate')
  var i3961 = i3959[2]
  var i3960 = []
  for(var i = 0; i < i3961.length; i += 1) {
    i3960.push( request.d('MenuLevelData', i3961[i + 0]) );
  }
  i3958.AllSteps = i3960
  request.r(i3959[3], i3959[4], 0, i3958, 'buttonparent')
  var i3963 = i3959[5]
  var i3962 = []
  for(var i = 0; i < i3963.length; i += 2) {
  request.r(i3963[i + 0], i3963[i + 1], 2, i3962, '')
  }
  i3958.BtnsDotweenAnims = i3962
  var i3965 = i3959[6]
  var i3964 = []
  for(var i = 0; i < i3965.length; i += 2) {
  request.r(i3965[i + 0], i3965[i + 1], 2, i3964, '')
  }
  i3958.BtnsCols = i3964
  request.r(i3959[7], i3959[8], 0, i3958, 'mainGameView')
  request.r(i3959[9], i3959[10], 0, i3958, 'Storyboard')
  request.r(i3959[11], i3959[12], 0, i3958, 'BgMusic')
  request.r(i3959[13], i3959[14], 0, i3958, 'BgStoryMusic')
  request.r(i3959[15], i3959[16], 0, i3958, 'Hand_Tut1')
  request.r(i3959[17], i3959[18], 0, i3958, 'Button_Hand')
  var i3967 = i3959[19]
  var i3966 = []
  for(var i = 0; i < i3967.length; i += 2) {
  request.r(i3967[i + 0], i3967[i + 1], 2, i3966, '')
  }
  i3958.itemEnable_Onstart = i3966
  var i3969 = i3959[20]
  var i3968 = []
  for(var i = 0; i < i3969.length; i += 2) {
  request.r(i3969[i + 0], i3969[i + 1], 2, i3968, '')
  }
  i3958.itemDisable_Onstart = i3968
  var i3971 = i3959[21]
  var i3970 = []
  for(var i = 0; i < i3971.length; i += 2) {
  request.r(i3971[i + 0], i3971[i + 1], 2, i3970, '')
  }
  i3958.itemEnable_Oncomplete = i3970
  var i3973 = i3959[22]
  var i3972 = []
  for(var i = 0; i < i3973.length; i += 2) {
  request.r(i3973[i + 0], i3973[i + 1], 2, i3972, '')
  }
  i3958.itemDisable_Oncomplete = i3972
  i3958.levelKey = i3959[23]
  i3958.revealDirtyHoldTime = i3959[24]
  return i3958
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i3976 = root || request.c( 'MenuLevelData' )
  var i3977 = data
  i3976.Name = i3977[0]
  request.r(i3977[1], i3977[2], 0, i3976, 'UiBtn')
  request.r(i3977[3], i3977[4], 0, i3976, 'TickBtn')
  request.r(i3977[5], i3977[6], 0, i3976, 'ExclamationIcon')
  var i3979 = i3977[7]
  var i3978 = []
  for(var i = 0; i < i3979.length; i += 2) {
  request.r(i3979[i + 0], i3979[i + 1], 2, i3978, '')
  }
  i3976.Item_Dirty = i3978
  var i3981 = i3977[8]
  var i3980 = []
  for(var i = 0; i < i3981.length; i += 2) {
  request.r(i3981[i + 0], i3981[i + 1], 2, i3980, '')
  }
  i3976.Item_Clean = i3980
  request.r(i3977[9], i3977[10], 0, i3976, 'CompleteParticle')
  return i3976
}

Deserializers["IntroLevelAnim"] = function (request, data, root) {
  var i3984 = root || request.c( 'IntroLevelAnim' )
  var i3985 = data
  request.r(i3985[0], i3985[1], 0, i3984, 'menuLevel')
  i3984.lvlkey = i3985[2]
  request.r(i3985[3], i3985[4], 0, i3984, 'DressChangeObj')
  request.r(i3985[5], i3985[6], 0, i3984, 'DressChangeClip')
  return i3984
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i3986 = root || request.c( 'Level_PoseController' )
  var i3987 = data
  var i3989 = i3987[0]
  var i3988 = []
  for(var i = 0; i < i3989.length; i += 2) {
  request.r(i3989[i + 0], i3989[i + 1], 2, i3988, '')
  }
  i3986.itemToShow = i3988
  var i3991 = i3987[1]
  var i3990 = []
  for(var i = 0; i < i3991.length; i += 2) {
  request.r(i3991[i + 0], i3991[i + 1], 2, i3990, '')
  }
  i3986.itemToHide = i3990
  i3986.stepTarget = i3987[2]
  return i3986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3993 = data
  i3992.name = i3993[0]
  i3992.atlasId = i3993[1]
  i3992.mipmapCount = i3993[2]
  i3992.hdr = !!i3993[3]
  i3992.size = i3993[4]
  i3992.anisoLevel = i3993[5]
  i3992.filterMode = i3993[6]
  var i3995 = i3993[7]
  var i3994 = []
  for(var i = 0; i < i3995.length; i += 4) {
    i3994.push( UnityEngine.Rect.MinMaxRect(i3995[i + 0], i3995[i + 1], i3995[i + 2], i3995[i + 3]) );
  }
  i3992.rects = i3994
  i3992.wrapU = i3993[8]
  i3992.wrapV = i3993[9]
  return i3992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3999 = data
  i3998.name = i3999[0]
  i3998.index = i3999[1]
  i3998.startup = !!i3999[2]
  return i3998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4001 = data
  i4000.aspect = i4001[0]
  i4000.orthographic = !!i4001[1]
  i4000.orthographicSize = i4001[2]
  i4000.backgroundColor = new pc.Color(i4001[3], i4001[4], i4001[5], i4001[6])
  i4000.nearClipPlane = i4001[7]
  i4000.farClipPlane = i4001[8]
  i4000.fieldOfView = i4001[9]
  i4000.depth = i4001[10]
  i4000.clearFlags = i4001[11]
  i4000.cullingMask = i4001[12]
  i4000.rect = i4001[13]
  request.r(i4001[14], i4001[15], 0, i4000, 'targetTexture')
  i4000.usePhysicalProperties = !!i4001[16]
  i4000.focalLength = i4001[17]
  i4000.sensorSize = new pc.Vec2( i4001[18], i4001[19] )
  i4000.lensShift = new pc.Vec2( i4001[20], i4001[21] )
  i4000.gateFit = i4001[22]
  i4000.commandBufferCount = i4001[23]
  i4000.cameraType = i4001[24]
  i4000.enabled = !!i4001[25]
  return i4000
}

Deserializers["CameraController"] = function (request, data, root) {
  var i4002 = root || request.c( 'CameraController' )
  var i4003 = data
  request.r(i4003[0], i4003[1], 0, i4002, 'cam')
  i4002.defaultPosition = new pc.Vec3( i4003[2], i4003[3], i4003[4] )
  i4002.defaultSize = i4003[5]
  i4002.defaultFOV = i4003[6]
  i4002.defaultDuration = i4003[7]
  i4002.defaultEase = i4003[8]
  return i4002
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i4004 = root || request.c( 'MusicSource' )
  var i4005 = data
  request.r(i4005[0], i4005[1], 0, i4004, 'source')
  return i4004
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i4006 = root || request.c( 'UI_Manager' )
  var i4007 = data
  i4006.levelCompleted = !!i4007[0]
  i4006.isPauseActive = !!i4007[1]
  i4006.loadIndex = i4007[2]
  request.r(i4007[3], i4007[4], 0, i4006, 'removeAdsButton')
  request.r(i4007[5], i4007[6], 0, i4006, 'pauseButton')
  request.r(i4007[7], i4007[8], 0, i4006, 'Fade_Img')
  request.r(i4007[9], i4007[10], 0, i4006, 'TopBarAnim')
  request.r(i4007[11], i4007[12], 0, i4006, 'MainPanel')
  request.r(i4007[13], i4007[14], 0, i4006, 'PausePanel')
  request.r(i4007[15], i4007[16], 0, i4006, 'PausePopUp')
  request.r(i4007[17], i4007[18], 0, i4006, 'PauseCanvasGroup')
  request.r(i4007[19], i4007[20], 0, i4006, 'RateUsPanel')
  request.r(i4007[21], i4007[22], 0, i4006, 'RateUsPopUp')
  request.r(i4007[23], i4007[24], 0, i4006, 'RemoveAdsPanel')
  request.r(i4007[25], i4007[26], 0, i4006, 'RemoveAdsPopUp')
  request.r(i4007[27], i4007[28], 0, i4006, 'RemoveAdsCanvasGroup')
  var i4009 = i4007[29]
  var i4008 = []
  for(var i = 0; i < i4009.length; i += 2) {
  request.r(i4009[i + 0], i4009[i + 1], 2, i4008, '')
  }
  i4006.RemoveAdsAnims = i4008
  request.r(i4007[30], i4007[31], 0, i4006, 'CompletePanel')
  request.r(i4007[32], i4007[33], 0, i4006, 'LevelIcon')
  request.r(i4007[34], i4007[35], 0, i4006, 'CompleteParticles')
  request.r(i4007[36], i4007[37], 0, i4006, 'progressBar')
  request.r(i4007[38], i4007[39], 0, i4006, 'progressText')
  request.r(i4007[40], i4007[41], 0, i4006, 'toolIcon1')
  request.r(i4007[42], i4007[43], 0, i4006, 'toolIcon2')
  request.r(i4007[44], i4007[45], 0, i4006, 'toolIcon3')
  request.r(i4007[46], i4007[47], 0, i4006, 'target1')
  request.r(i4007[48], i4007[49], 0, i4006, 'target2')
  i4006.toolMoveDuration = i4007[50]
  i4006.currentIndex = i4007[51]
  var i4011 = i4007[52]
  var i4010 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i4011.length; i += 2) {
  request.r(i4011[i + 0], i4011[i + 1], 1, i4010, '')
  }
  i4006.allTools = i4010
  request.r(i4007[53], i4007[54], 0, i4006, 'clockProgress')
  request.r(i4007[55], i4007[56], 0, i4006, 'clockProgressFill')
  request.r(i4007[57], i4007[58], 0, i4006, 'clockAudio')
  i4006.moveDistance = i4007[59]
  i4006.animationDuration = i4007[60]
  i4006.greyBgChildName = i4007[61]
  i4006.pushOffset = i4007[62]
  return i4006
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i4012 = root || request.c( 'GameManagerPlayable' )
  var i4013 = data
  request.r(i4013[0], i4013[1], 0, i4012, 'endParticles')
  request.r(i4013[2], i4013[3], 0, i4012, 'stepCompleteParticles')
  request.r(i4013[4], i4013[5], 0, i4012, 'DefaultMat')
  request.r(i4013[6], i4013[7], 0, i4012, 'BG_Music')
  request.r(i4013[8], i4013[9], 0, i4012, 'restoreEffectShader')
  request.r(i4013[10], i4013[11], 0, i4012, 'stickerEffectShader')
  i4012.isComplete = !!i4013[12]
  i4012.isPaused = !!i4013[13]
  request.r(i4013[14], i4013[15], 0, i4012, 'currentLevel')
  i4012.startLevelOnPlay = !!i4013[16]
  i4012.currentLevelNo = i4013[17]
  return i4012
}

Deserializers["AudioController"] = function (request, data, root) {
  var i4014 = root || request.c( 'AudioController' )
  var i4015 = data
  request.r(i4015[0], i4015[1], 0, i4014, 'MainMixer')
  request.r(i4015[2], i4015[3], 0, i4014, 'UiClick')
  request.r(i4015[4], i4015[5], 0, i4014, 'UiClickSource')
  var i4017 = i4015[6]
  var i4016 = []
  for(var i = 0; i < i4017.length; i += 2) {
  request.r(i4017[i + 0], i4017[i + 1], 2, i4016, '')
  }
  i4014.SfxSources = i4016
  var i4019 = i4015[7]
  var i4018 = []
  for(var i = 0; i < i4019.length; i += 2) {
  request.r(i4019[i + 0], i4019[i + 1], 2, i4018, '')
  }
  i4014.AllClips = i4018
  return i4014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4023 = data
  i4022.pivot = new pc.Vec2( i4023[0], i4023[1] )
  i4022.anchorMin = new pc.Vec2( i4023[2], i4023[3] )
  i4022.anchorMax = new pc.Vec2( i4023[4], i4023[5] )
  i4022.sizeDelta = new pc.Vec2( i4023[6], i4023[7] )
  i4022.anchoredPosition3D = new pc.Vec3( i4023[8], i4023[9], i4023[10] )
  i4022.rotation = new pc.Quat(i4023[11], i4023[12], i4023[13], i4023[14])
  i4022.scale = new pc.Vec3( i4023[15], i4023[16], i4023[17] )
  return i4022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4025 = data
  i4024.planeDistance = i4025[0]
  i4024.referencePixelsPerUnit = i4025[1]
  i4024.isFallbackOverlay = !!i4025[2]
  i4024.renderMode = i4025[3]
  i4024.renderOrder = i4025[4]
  i4024.sortingLayerName = i4025[5]
  i4024.sortingOrder = i4025[6]
  i4024.scaleFactor = i4025[7]
  request.r(i4025[8], i4025[9], 0, i4024, 'worldCamera')
  i4024.overrideSorting = !!i4025[10]
  i4024.pixelPerfect = !!i4025[11]
  i4024.targetDisplay = i4025[12]
  i4024.overridePixelPerfect = !!i4025[13]
  i4024.enabled = !!i4025[14]
  return i4024
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4026 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4027 = data
  i4026.m_UiScaleMode = i4027[0]
  i4026.m_ReferencePixelsPerUnit = i4027[1]
  i4026.m_ScaleFactor = i4027[2]
  i4026.m_ReferenceResolution = new pc.Vec2( i4027[3], i4027[4] )
  i4026.m_ScreenMatchMode = i4027[5]
  i4026.m_MatchWidthOrHeight = i4027[6]
  i4026.m_PhysicalUnit = i4027[7]
  i4026.m_FallbackScreenDPI = i4027[8]
  i4026.m_DefaultSpriteDPI = i4027[9]
  i4026.m_DynamicPixelsPerUnit = i4027[10]
  i4026.m_PresetInfoIsWorld = !!i4027[11]
  return i4026
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4028 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4029 = data
  i4028.m_IgnoreReversedGraphics = !!i4029[0]
  i4028.m_BlockingObjects = i4029[1]
  i4028.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4029[2] )
  return i4028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4031 = data
  i4030.cullTransparentMesh = !!i4031[0]
  return i4030
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4032 = root || request.c( 'UnityEngine.UI.Image' )
  var i4033 = data
  request.r(i4033[0], i4033[1], 0, i4032, 'm_Sprite')
  i4032.m_Type = i4033[2]
  i4032.m_PreserveAspect = !!i4033[3]
  i4032.m_FillCenter = !!i4033[4]
  i4032.m_FillMethod = i4033[5]
  i4032.m_FillAmount = i4033[6]
  i4032.m_FillClockwise = !!i4033[7]
  i4032.m_FillOrigin = i4033[8]
  i4032.m_UseSpriteMesh = !!i4033[9]
  i4032.m_PixelsPerUnitMultiplier = i4033[10]
  request.r(i4033[11], i4033[12], 0, i4032, 'm_Material')
  i4032.m_Maskable = !!i4033[13]
  i4032.m_Color = new pc.Color(i4033[14], i4033[15], i4033[16], i4033[17])
  i4032.m_RaycastTarget = !!i4033[18]
  i4032.m_RaycastPadding = new pc.Vec4( i4033[19], i4033[20], i4033[21], i4033[22] )
  return i4032
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i4034 = root || request.c( 'UnityEngine.UI.Text' )
  var i4035 = data
  i4034.m_FontData = request.d('UnityEngine.UI.FontData', i4035[0], i4034.m_FontData)
  i4034.m_Text = i4035[1]
  request.r(i4035[2], i4035[3], 0, i4034, 'm_Material')
  i4034.m_Maskable = !!i4035[4]
  i4034.m_Color = new pc.Color(i4035[5], i4035[6], i4035[7], i4035[8])
  i4034.m_RaycastTarget = !!i4035[9]
  i4034.m_RaycastPadding = new pc.Vec4( i4035[10], i4035[11], i4035[12], i4035[13] )
  return i4034
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i4036 = root || request.c( 'UnityEngine.UI.FontData' )
  var i4037 = data
  request.r(i4037[0], i4037[1], 0, i4036, 'm_Font')
  i4036.m_FontSize = i4037[2]
  i4036.m_FontStyle = i4037[3]
  i4036.m_BestFit = !!i4037[4]
  i4036.m_MinSize = i4037[5]
  i4036.m_MaxSize = i4037[6]
  i4036.m_Alignment = i4037[7]
  i4036.m_AlignByGeometry = !!i4037[8]
  i4036.m_RichText = !!i4037[9]
  i4036.m_HorizontalOverflow = i4037[10]
  i4036.m_VerticalOverflow = i4037[11]
  i4036.m_LineSpacing = i4037[12]
  return i4036
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4038 = root || request.c( 'UnityEngine.UI.Button' )
  var i4039 = data
  i4038.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4039[0], i4038.m_OnClick)
  i4038.m_Navigation = request.d('UnityEngine.UI.Navigation', i4039[1], i4038.m_Navigation)
  i4038.m_Transition = i4039[2]
  i4038.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4039[3], i4038.m_Colors)
  i4038.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4039[4], i4038.m_SpriteState)
  i4038.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4039[5], i4038.m_AnimationTriggers)
  i4038.m_Interactable = !!i4039[6]
  request.r(i4039[7], i4039[8], 0, i4038, 'm_TargetGraphic')
  return i4038
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4040 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4041 = data
  i4040.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4041[0], i4040.m_PersistentCalls)
  return i4040
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4042 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4043 = data
  i4042.m_Mode = i4043[0]
  i4042.m_WrapAround = !!i4043[1]
  request.r(i4043[2], i4043[3], 0, i4042, 'm_SelectOnUp')
  request.r(i4043[4], i4043[5], 0, i4042, 'm_SelectOnDown')
  request.r(i4043[6], i4043[7], 0, i4042, 'm_SelectOnLeft')
  request.r(i4043[8], i4043[9], 0, i4042, 'm_SelectOnRight')
  return i4042
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4044 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4045 = data
  i4044.m_NormalColor = new pc.Color(i4045[0], i4045[1], i4045[2], i4045[3])
  i4044.m_HighlightedColor = new pc.Color(i4045[4], i4045[5], i4045[6], i4045[7])
  i4044.m_PressedColor = new pc.Color(i4045[8], i4045[9], i4045[10], i4045[11])
  i4044.m_SelectedColor = new pc.Color(i4045[12], i4045[13], i4045[14], i4045[15])
  i4044.m_DisabledColor = new pc.Color(i4045[16], i4045[17], i4045[18], i4045[19])
  i4044.m_ColorMultiplier = i4045[20]
  i4044.m_FadeDuration = i4045[21]
  return i4044
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4046 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4047 = data
  request.r(i4047[0], i4047[1], 0, i4046, 'm_HighlightedSprite')
  request.r(i4047[2], i4047[3], 0, i4046, 'm_PressedSprite')
  request.r(i4047[4], i4047[5], 0, i4046, 'm_SelectedSprite')
  request.r(i4047[6], i4047[7], 0, i4046, 'm_DisabledSprite')
  return i4046
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4048 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4049 = data
  i4048.m_NormalTrigger = i4049[0]
  i4048.m_HighlightedTrigger = i4049[1]
  i4048.m_PressedTrigger = i4049[2]
  i4048.m_SelectedTrigger = i4049[3]
  i4048.m_DisabledTrigger = i4049[4]
  return i4048
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i4050 = root || request.c( 'PlayableHudRuntime' )
  var i4051 = data
  return i4050
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4052 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4053 = data
  request.r(i4053[0], i4053[1], 0, i4052, 'm_FirstSelected')
  i4052.m_sendNavigationEvents = !!i4053[2]
  i4052.m_DragThreshold = i4053[3]
  return i4052
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4054 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4055 = data
  i4054.m_HorizontalAxis = i4055[0]
  i4054.m_VerticalAxis = i4055[1]
  i4054.m_SubmitButton = i4055[2]
  i4054.m_CancelButton = i4055[3]
  i4054.m_InputActionsPerSecond = i4055[4]
  i4054.m_RepeatDelay = i4055[5]
  i4054.m_ForceModuleActive = !!i4055[6]
  i4054.m_SendPointerHoverToParent = !!i4055[7]
  return i4054
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i4056 = root || request.c( 'PlayableRouter' )
  var i4057 = data
  var i4059 = i4057[0]
  var i4058 = []
  for(var i = 0; i < i4059.length; i += 2) {
  request.r(i4059[i + 0], i4059[i + 1], 2, i4058, '')
  }
  i4056.menuObjects = i4058
  var i4061 = i4057[1]
  var i4060 = []
  for(var i = 0; i < i4061.length; i += 2) {
  request.r(i4061[i + 0], i4061[i + 1], 2, i4060, '')
  }
  i4056.gameplayObjects = i4060
  var i4063 = i4057[2]
  var i4062 = []
  for(var i = 0; i < i4063.length; i += 1) {
    i4062.push( request.d('PlayableRouter+SubLevelSlot', i4063[i + 0]) );
  }
  i4056.subLevels = i4062
  i4056.fadeDuration = i4057[3]
  i4056.lockedMessage = i4057[4]
  i4056.lockedTapsToCTA = i4057[5]
  return i4056
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i4066 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i4067 = data
  request.r(i4067[0], i4067[1], 0, i4066, 'button')
  request.r(i4067[2], i4067[3], 0, i4066, 'level')
  return i4066
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i4068 = root || request.c( 'ToastManager' )
  var i4069 = data
  request.r(i4069[0], i4069[1], 0, i4068, 'toastPanel')
  request.r(i4069[2], i4069[3], 0, i4068, 'toastPopup')
  request.r(i4069[4], i4069[5], 0, i4068, 'canvasGroup')
  request.r(i4069[6], i4069[7], 0, i4068, 'toastText')
  i4068.startY = i4069[8]
  i4068.visibleY = i4069[9]
  i4068.endY = i4069[10]
  i4068.animationTime = i4069[11]
  i4068.animationTimeUp = i4069[12]
  return i4068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i4070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i4071 = data
  i4070.m_Alpha = i4071[0]
  i4070.m_Interactable = !!i4071[1]
  i4070.m_BlocksRaycasts = !!i4071[2]
  i4070.m_IgnoreParentGroups = !!i4071[3]
  i4070.enabled = !!i4071[4]
  return i4070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4073 = data
  i4072.ambientIntensity = i4073[0]
  i4072.reflectionIntensity = i4073[1]
  i4072.ambientMode = i4073[2]
  i4072.ambientLight = new pc.Color(i4073[3], i4073[4], i4073[5], i4073[6])
  i4072.ambientSkyColor = new pc.Color(i4073[7], i4073[8], i4073[9], i4073[10])
  i4072.ambientGroundColor = new pc.Color(i4073[11], i4073[12], i4073[13], i4073[14])
  i4072.ambientEquatorColor = new pc.Color(i4073[15], i4073[16], i4073[17], i4073[18])
  i4072.fogColor = new pc.Color(i4073[19], i4073[20], i4073[21], i4073[22])
  i4072.fogEndDistance = i4073[23]
  i4072.fogStartDistance = i4073[24]
  i4072.fogDensity = i4073[25]
  i4072.fog = !!i4073[26]
  request.r(i4073[27], i4073[28], 0, i4072, 'skybox')
  i4072.fogMode = i4073[29]
  var i4075 = i4073[30]
  var i4074 = []
  for(var i = 0; i < i4075.length; i += 1) {
    i4074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4075[i + 0]) );
  }
  i4072.lightmaps = i4074
  i4072.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4073[31], i4072.lightProbes)
  i4072.lightmapsMode = i4073[32]
  i4072.mixedBakeMode = i4073[33]
  i4072.environmentLightingMode = i4073[34]
  i4072.ambientProbe = new pc.SphericalHarmonicsL2(i4073[35])
  request.r(i4073[36], i4073[37], 0, i4072, 'customReflection')
  request.r(i4073[38], i4073[39], 0, i4072, 'defaultReflection')
  i4072.defaultReflectionMode = i4073[40]
  i4072.defaultReflectionResolution = i4073[41]
  i4072.sunLightObjectId = i4073[42]
  i4072.pixelLightCount = i4073[43]
  i4072.defaultReflectionHDR = !!i4073[44]
  i4072.hasLightDataAsset = !!i4073[45]
  i4072.hasManualGenerate = !!i4073[46]
  return i4072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4079 = data
  request.r(i4079[0], i4079[1], 0, i4078, 'lightmapColor')
  request.r(i4079[2], i4079[3], 0, i4078, 'lightmapDirection')
  request.r(i4079[4], i4079[5], 0, i4078, 'shadowMask')
  return i4078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4080 = root || new UnityEngine.LightProbes()
  var i4081 = data
  return i4080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4087 = data
  var i4089 = i4087[0]
  var i4088 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4089.length; i += 1) {
    i4088.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4089[i + 0]));
  }
  i4086.ShaderCompilationErrors = i4088
  i4086.name = i4087[1]
  i4086.guid = i4087[2]
  var i4091 = i4087[3]
  var i4090 = []
  for(var i = 0; i < i4091.length; i += 1) {
    i4090.push( i4091[i + 0] );
  }
  i4086.shaderDefinedKeywords = i4090
  var i4093 = i4087[4]
  var i4092 = []
  for(var i = 0; i < i4093.length; i += 1) {
    i4092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4093[i + 0]) );
  }
  i4086.passes = i4092
  var i4095 = i4087[5]
  var i4094 = []
  for(var i = 0; i < i4095.length; i += 1) {
    i4094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4095[i + 0]) );
  }
  i4086.usePasses = i4094
  var i4097 = i4087[6]
  var i4096 = []
  for(var i = 0; i < i4097.length; i += 1) {
    i4096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4097[i + 0]) );
  }
  i4086.defaultParameterValues = i4096
  request.r(i4087[7], i4087[8], 0, i4086, 'unityFallbackShader')
  i4086.readDepth = !!i4087[9]
  i4086.hasDepthOnlyPass = !!i4087[10]
  i4086.isCreatedByShaderGraph = !!i4087[11]
  i4086.disableBatching = !!i4087[12]
  i4086.compiled = !!i4087[13]
  return i4086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4101 = data
  i4100.shaderName = i4101[0]
  i4100.errorMessage = i4101[1]
  return i4100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4106 = root || new pc.UnityShaderPass()
  var i4107 = data
  i4106.id = i4107[0]
  i4106.subShaderIndex = i4107[1]
  i4106.name = i4107[2]
  i4106.passType = i4107[3]
  i4106.grabPassTextureName = i4107[4]
  i4106.usePass = !!i4107[5]
  i4106.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4107[6], i4106.zTest)
  i4106.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4107[7], i4106.zWrite)
  i4106.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4107[8], i4106.culling)
  i4106.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4107[9], i4106.blending)
  i4106.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4107[10], i4106.alphaBlending)
  i4106.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4107[11], i4106.colorWriteMask)
  i4106.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4107[12], i4106.offsetUnits)
  i4106.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4107[13], i4106.offsetFactor)
  i4106.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4107[14], i4106.stencilRef)
  i4106.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4107[15], i4106.stencilReadMask)
  i4106.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4107[16], i4106.stencilWriteMask)
  i4106.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4107[17], i4106.stencilOp)
  i4106.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4107[18], i4106.stencilOpFront)
  i4106.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4107[19], i4106.stencilOpBack)
  var i4109 = i4107[20]
  var i4108 = []
  for(var i = 0; i < i4109.length; i += 1) {
    i4108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4109[i + 0]) );
  }
  i4106.tags = i4108
  var i4111 = i4107[21]
  var i4110 = []
  for(var i = 0; i < i4111.length; i += 1) {
    i4110.push( i4111[i + 0] );
  }
  i4106.passDefinedKeywords = i4110
  var i4113 = i4107[22]
  var i4112 = []
  for(var i = 0; i < i4113.length; i += 1) {
    i4112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4113[i + 0]) );
  }
  i4106.passDefinedKeywordGroups = i4112
  var i4115 = i4107[23]
  var i4114 = []
  for(var i = 0; i < i4115.length; i += 1) {
    i4114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4115[i + 0]) );
  }
  i4106.variants = i4114
  var i4117 = i4107[24]
  var i4116 = []
  for(var i = 0; i < i4117.length; i += 1) {
    i4116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4117[i + 0]) );
  }
  i4106.excludedVariants = i4116
  i4106.hasDepthReader = !!i4107[25]
  return i4106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4119 = data
  i4118.val = i4119[0]
  i4118.name = i4119[1]
  return i4118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4121 = data
  i4120.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4121[0], i4120.src)
  i4120.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4121[1], i4120.dst)
  i4120.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4121[2], i4120.op)
  return i4120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4123 = data
  i4122.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4123[0], i4122.pass)
  i4122.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4123[1], i4122.fail)
  i4122.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4123[2], i4122.zFail)
  i4122.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4123[3], i4122.comp)
  return i4122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4127 = data
  i4126.name = i4127[0]
  i4126.value = i4127[1]
  return i4126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4131 = data
  var i4133 = i4131[0]
  var i4132 = []
  for(var i = 0; i < i4133.length; i += 1) {
    i4132.push( i4133[i + 0] );
  }
  i4130.keywords = i4132
  i4130.hasDiscard = !!i4131[1]
  return i4130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4137 = data
  i4136.passId = i4137[0]
  i4136.subShaderIndex = i4137[1]
  var i4139 = i4137[2]
  var i4138 = []
  for(var i = 0; i < i4139.length; i += 1) {
    i4138.push( i4139[i + 0] );
  }
  i4136.keywords = i4138
  i4136.vertexProgram = i4137[3]
  i4136.fragmentProgram = i4137[4]
  i4136.exportedForWebGl2 = !!i4137[5]
  i4136.readDepth = !!i4137[6]
  return i4136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4143 = data
  request.r(i4143[0], i4143[1], 0, i4142, 'shader')
  i4142.pass = i4143[2]
  return i4142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4147 = data
  i4146.name = i4147[0]
  i4146.type = i4147[1]
  i4146.value = new pc.Vec4( i4147[2], i4147[3], i4147[4], i4147[5] )
  i4146.textureValue = i4147[6]
  i4146.shaderPropertyFlag = i4147[7]
  return i4146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4149 = data
  i4148.name = i4149[0]
  request.r(i4149[1], i4149[2], 0, i4148, 'texture')
  i4148.aabb = i4149[3]
  i4148.vertices = i4149[4]
  i4148.triangles = i4149[5]
  i4148.textureRect = UnityEngine.Rect.MinMaxRect(i4149[6], i4149[7], i4149[8], i4149[9])
  i4148.packedRect = UnityEngine.Rect.MinMaxRect(i4149[10], i4149[11], i4149[12], i4149[13])
  i4148.border = new pc.Vec4( i4149[14], i4149[15], i4149[16], i4149[17] )
  i4148.transparency = i4149[18]
  i4148.bounds = i4149[19]
  i4148.pixelsPerUnit = i4149[20]
  i4148.textureWidth = i4149[21]
  i4148.textureHeight = i4149[22]
  i4148.nativeSize = new pc.Vec2( i4149[23], i4149[24] )
  i4148.pivot = new pc.Vec2( i4149[25], i4149[26] )
  i4148.textureRectOffset = new pc.Vec2( i4149[27], i4149[28] )
  return i4148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4151 = data
  i4150.name = i4151[0]
  return i4150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4153 = data
  i4152.name = i4153[0]
  i4152.wrapMode = i4153[1]
  i4152.isLooping = !!i4153[2]
  i4152.length = i4153[3]
  var i4155 = i4153[4]
  var i4154 = []
  for(var i = 0; i < i4155.length; i += 1) {
    i4154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4155[i + 0]) );
  }
  i4152.curves = i4154
  var i4157 = i4153[5]
  var i4156 = []
  for(var i = 0; i < i4157.length; i += 1) {
    i4156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4157[i + 0]) );
  }
  i4152.events = i4156
  i4152.halfPrecision = !!i4153[6]
  i4152._frameRate = i4153[7]
  i4152.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4153[8], i4152.localBounds)
  i4152.hasMuscleCurves = !!i4153[9]
  var i4159 = i4153[10]
  var i4158 = []
  for(var i = 0; i < i4159.length; i += 1) {
    i4158.push( i4159[i + 0] );
  }
  i4152.clipMuscleConstant = i4158
  i4152.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4153[11], i4152.clipBindingConstant)
  return i4152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4163 = data
  i4162.path = i4163[0]
  i4162.hash = i4163[1]
  i4162.componentType = i4163[2]
  i4162.property = i4163[3]
  i4162.keys = i4163[4]
  var i4165 = i4163[5]
  var i4164 = []
  for(var i = 0; i < i4165.length; i += 1) {
    i4164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4165[i + 0]) );
  }
  i4162.objectReferenceKeys = i4164
  return i4162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4169 = data
  i4168.time = i4169[0]
  request.r(i4169[1], i4169[2], 0, i4168, 'value')
  return i4168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4173 = data
  i4172.functionName = i4173[0]
  i4172.floatParameter = i4173[1]
  i4172.intParameter = i4173[2]
  i4172.stringParameter = i4173[3]
  request.r(i4173[4], i4173[5], 0, i4172, 'objectReferenceParameter')
  i4172.time = i4173[6]
  return i4172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4175 = data
  i4174.center = new pc.Vec3( i4175[0], i4175[1], i4175[2] )
  i4174.extends = new pc.Vec3( i4175[3], i4175[4], i4175[5] )
  return i4174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4179 = data
  var i4181 = i4179[0]
  var i4180 = []
  for(var i = 0; i < i4181.length; i += 1) {
    i4180.push( i4181[i + 0] );
  }
  i4178.genericBindings = i4180
  var i4183 = i4179[1]
  var i4182 = []
  for(var i = 0; i < i4183.length; i += 1) {
    i4182.push( i4183[i + 0] );
  }
  i4178.pptrCurveMapping = i4182
  return i4178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4185 = data
  i4184.name = i4185[0]
  i4184.ascent = i4185[1]
  i4184.originalLineHeight = i4185[2]
  i4184.fontSize = i4185[3]
  var i4187 = i4185[4]
  var i4186 = []
  for(var i = 0; i < i4187.length; i += 1) {
    i4186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4187[i + 0]) );
  }
  i4184.characterInfo = i4186
  request.r(i4185[5], i4185[6], 0, i4184, 'texture')
  i4184.originalFontSize = i4185[7]
  return i4184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4191 = data
  i4190.index = i4191[0]
  i4190.advance = i4191[1]
  i4190.bearing = i4191[2]
  i4190.glyphWidth = i4191[3]
  i4190.glyphHeight = i4191[4]
  i4190.minX = i4191[5]
  i4190.maxX = i4191[6]
  i4190.minY = i4191[7]
  i4190.maxY = i4191[8]
  i4190.uvBottomLeftX = i4191[9]
  i4190.uvBottomLeftY = i4191[10]
  i4190.uvBottomRightX = i4191[11]
  i4190.uvBottomRightY = i4191[12]
  i4190.uvTopLeftX = i4191[13]
  i4190.uvTopLeftY = i4191[14]
  i4190.uvTopRightX = i4191[15]
  i4190.uvTopRightY = i4191[16]
  return i4190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4193 = data
  i4192.name = i4193[0]
  var i4195 = i4193[1]
  var i4194 = []
  for(var i = 0; i < i4195.length; i += 1) {
    i4194.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4195[i + 0]) );
  }
  i4192.layers = i4194
  var i4197 = i4193[2]
  var i4196 = []
  for(var i = 0; i < i4197.length; i += 1) {
    i4196.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4197[i + 0]) );
  }
  i4192.parameters = i4196
  i4192.animationClips = i4193[3]
  i4192.avatarUnsupported = i4193[4]
  return i4192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4201 = data
  i4200.name = i4201[0]
  i4200.defaultWeight = i4201[1]
  i4200.blendingMode = i4201[2]
  i4200.avatarMask = i4201[3]
  i4200.syncedLayerIndex = i4201[4]
  i4200.syncedLayerAffectsTiming = !!i4201[5]
  i4200.syncedLayers = i4201[6]
  i4200.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4201[7], i4200.stateMachine)
  return i4200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4203 = data
  i4202.id = i4203[0]
  i4202.name = i4203[1]
  i4202.path = i4203[2]
  var i4205 = i4203[3]
  var i4204 = []
  for(var i = 0; i < i4205.length; i += 1) {
    i4204.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4205[i + 0]) );
  }
  i4202.states = i4204
  var i4207 = i4203[4]
  var i4206 = []
  for(var i = 0; i < i4207.length; i += 1) {
    i4206.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4207[i + 0]) );
  }
  i4202.machines = i4206
  var i4209 = i4203[5]
  var i4208 = []
  for(var i = 0; i < i4209.length; i += 1) {
    i4208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4209[i + 0]) );
  }
  i4202.entryStateTransitions = i4208
  var i4211 = i4203[6]
  var i4210 = []
  for(var i = 0; i < i4211.length; i += 1) {
    i4210.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4211[i + 0]) );
  }
  i4202.exitStateTransitions = i4210
  var i4213 = i4203[7]
  var i4212 = []
  for(var i = 0; i < i4213.length; i += 1) {
    i4212.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4213[i + 0]) );
  }
  i4202.anyStateTransitions = i4212
  i4202.defaultStateId = i4203[8]
  return i4202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4217 = data
  i4216.id = i4217[0]
  i4216.name = i4217[1]
  i4216.cycleOffset = i4217[2]
  i4216.cycleOffsetParameter = i4217[3]
  i4216.cycleOffsetParameterActive = !!i4217[4]
  i4216.mirror = !!i4217[5]
  i4216.mirrorParameter = i4217[6]
  i4216.mirrorParameterActive = !!i4217[7]
  i4216.motionId = i4217[8]
  i4216.nameHash = i4217[9]
  i4216.fullPathHash = i4217[10]
  i4216.speed = i4217[11]
  i4216.speedParameter = i4217[12]
  i4216.speedParameterActive = !!i4217[13]
  i4216.tag = i4217[14]
  i4216.tagHash = i4217[15]
  i4216.writeDefaultValues = !!i4217[16]
  var i4219 = i4217[17]
  var i4218 = []
  for(var i = 0; i < i4219.length; i += 2) {
  request.r(i4219[i + 0], i4219[i + 1], 2, i4218, '')
  }
  i4216.behaviours = i4218
  var i4221 = i4217[18]
  var i4220 = []
  for(var i = 0; i < i4221.length; i += 1) {
    i4220.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4221[i + 0]) );
  }
  i4216.transitions = i4220
  return i4216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4227 = data
  i4226.fullPath = i4227[0]
  i4226.canTransitionToSelf = !!i4227[1]
  i4226.duration = i4227[2]
  i4226.exitTime = i4227[3]
  i4226.hasExitTime = !!i4227[4]
  i4226.hasFixedDuration = !!i4227[5]
  i4226.interruptionSource = i4227[6]
  i4226.offset = i4227[7]
  i4226.orderedInterruption = !!i4227[8]
  i4226.destinationStateId = i4227[9]
  i4226.isExit = !!i4227[10]
  i4226.mute = !!i4227[11]
  i4226.solo = !!i4227[12]
  var i4229 = i4227[13]
  var i4228 = []
  for(var i = 0; i < i4229.length; i += 1) {
    i4228.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4229[i + 0]) );
  }
  i4226.conditions = i4228
  return i4226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4235 = data
  i4234.destinationStateId = i4235[0]
  i4234.isExit = !!i4235[1]
  i4234.mute = !!i4235[2]
  i4234.solo = !!i4235[3]
  var i4237 = i4235[4]
  var i4236 = []
  for(var i = 0; i < i4237.length; i += 1) {
    i4236.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4237[i + 0]) );
  }
  i4234.conditions = i4236
  return i4234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4241 = data
  i4240.mode = i4241[0]
  i4240.parameter = i4241[1]
  i4240.threshold = i4241[2]
  return i4240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4245 = data
  i4244.defaultBool = !!i4245[0]
  i4244.defaultFloat = i4245[1]
  i4244.defaultInt = i4245[2]
  i4244.name = i4245[3]
  i4244.nameHash = i4245[4]
  i4244.type = i4245[5]
  return i4244
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4246 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4247 = data
  i4246.useSafeMode = !!i4247[0]
  i4246.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4247[1], i4246.safeModeOptions)
  i4246.timeScale = i4247[2]
  i4246.unscaledTimeScale = i4247[3]
  i4246.useSmoothDeltaTime = !!i4247[4]
  i4246.maxSmoothUnscaledTime = i4247[5]
  i4246.rewindCallbackMode = i4247[6]
  i4246.showUnityEditorReport = !!i4247[7]
  i4246.logBehaviour = i4247[8]
  i4246.drawGizmos = !!i4247[9]
  i4246.defaultRecyclable = !!i4247[10]
  i4246.defaultAutoPlay = i4247[11]
  i4246.defaultUpdateType = i4247[12]
  i4246.defaultTimeScaleIndependent = !!i4247[13]
  i4246.defaultEaseType = i4247[14]
  i4246.defaultEaseOvershootOrAmplitude = i4247[15]
  i4246.defaultEasePeriod = i4247[16]
  i4246.defaultAutoKill = !!i4247[17]
  i4246.defaultLoopType = i4247[18]
  i4246.debugMode = !!i4247[19]
  i4246.debugStoreTargetId = !!i4247[20]
  i4246.showPreviewPanel = !!i4247[21]
  i4246.storeSettingsLocation = i4247[22]
  i4246.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4247[23], i4246.modules)
  i4246.createASMDEF = !!i4247[24]
  i4246.showPlayingTweens = !!i4247[25]
  i4246.showPausedTweens = !!i4247[26]
  return i4246
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4248 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4249 = data
  i4248.logBehaviour = i4249[0]
  i4248.nestedTweenFailureBehaviour = i4249[1]
  return i4248
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4250 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4251 = data
  i4250.showPanel = !!i4251[0]
  i4250.audioEnabled = !!i4251[1]
  i4250.physicsEnabled = !!i4251[2]
  i4250.physics2DEnabled = !!i4251[3]
  i4250.spriteEnabled = !!i4251[4]
  i4250.uiEnabled = !!i4251[5]
  i4250.textMeshProEnabled = !!i4251[6]
  i4250.tk2DEnabled = !!i4251[7]
  i4250.deAudioEnabled = !!i4251[8]
  i4250.deUnityExtendedEnabled = !!i4251[9]
  i4250.epoOutlineEnabled = !!i4251[10]
  return i4250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4253 = data
  var i4255 = i4253[0]
  var i4254 = []
  for(var i = 0; i < i4255.length; i += 1) {
    i4254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4255[i + 0]) );
  }
  i4252.files = i4254
  i4252.componentToPrefabIds = i4253[1]
  return i4252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4259 = data
  i4258.path = i4259[0]
  request.r(i4259[1], i4259[2], 0, i4258, 'unityObject')
  return i4258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4261 = data
  var i4263 = i4261[0]
  var i4262 = []
  for(var i = 0; i < i4263.length; i += 1) {
    i4262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4263[i + 0]) );
  }
  i4260.scriptsExecutionOrder = i4262
  var i4265 = i4261[1]
  var i4264 = []
  for(var i = 0; i < i4265.length; i += 1) {
    i4264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4265[i + 0]) );
  }
  i4260.sortingLayers = i4264
  var i4267 = i4261[2]
  var i4266 = []
  for(var i = 0; i < i4267.length; i += 1) {
    i4266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4267[i + 0]) );
  }
  i4260.cullingLayers = i4266
  i4260.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4261[3], i4260.timeSettings)
  i4260.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4261[4], i4260.physicsSettings)
  i4260.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4261[5], i4260.physics2DSettings)
  i4260.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4261[6], i4260.qualitySettings)
  i4260.enableRealtimeShadows = !!i4261[7]
  i4260.enableAutoInstancing = !!i4261[8]
  i4260.enableStaticBatching = !!i4261[9]
  i4260.enableDynamicBatching = !!i4261[10]
  i4260.usePreservativeDynamicBatching = !!i4261[11]
  i4260.lightmapEncodingQuality = i4261[12]
  i4260.desiredColorSpace = i4261[13]
  var i4269 = i4261[14]
  var i4268 = []
  for(var i = 0; i < i4269.length; i += 1) {
    i4268.push( i4269[i + 0] );
  }
  i4260.allTags = i4268
  return i4260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4273 = data
  i4272.name = i4273[0]
  i4272.value = i4273[1]
  return i4272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4277 = data
  i4276.id = i4277[0]
  i4276.name = i4277[1]
  i4276.value = i4277[2]
  return i4276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4281 = data
  i4280.id = i4281[0]
  i4280.name = i4281[1]
  return i4280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4283 = data
  i4282.fixedDeltaTime = i4283[0]
  i4282.maximumDeltaTime = i4283[1]
  i4282.timeScale = i4283[2]
  i4282.maximumParticleTimestep = i4283[3]
  return i4282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4285 = data
  i4284.gravity = new pc.Vec3( i4285[0], i4285[1], i4285[2] )
  i4284.defaultSolverIterations = i4285[3]
  i4284.bounceThreshold = i4285[4]
  i4284.autoSyncTransforms = !!i4285[5]
  i4284.autoSimulation = !!i4285[6]
  var i4287 = i4285[7]
  var i4286 = []
  for(var i = 0; i < i4287.length; i += 1) {
    i4286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4287[i + 0]) );
  }
  i4284.collisionMatrix = i4286
  return i4284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4291 = data
  i4290.enabled = !!i4291[0]
  i4290.layerId = i4291[1]
  i4290.otherLayerId = i4291[2]
  return i4290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4293 = data
  request.r(i4293[0], i4293[1], 0, i4292, 'material')
  i4292.gravity = new pc.Vec2( i4293[2], i4293[3] )
  i4292.positionIterations = i4293[4]
  i4292.velocityIterations = i4293[5]
  i4292.velocityThreshold = i4293[6]
  i4292.maxLinearCorrection = i4293[7]
  i4292.maxAngularCorrection = i4293[8]
  i4292.maxTranslationSpeed = i4293[9]
  i4292.maxRotationSpeed = i4293[10]
  i4292.baumgarteScale = i4293[11]
  i4292.baumgarteTOIScale = i4293[12]
  i4292.timeToSleep = i4293[13]
  i4292.linearSleepTolerance = i4293[14]
  i4292.angularSleepTolerance = i4293[15]
  i4292.defaultContactOffset = i4293[16]
  i4292.autoSimulation = !!i4293[17]
  i4292.queriesHitTriggers = !!i4293[18]
  i4292.queriesStartInColliders = !!i4293[19]
  i4292.callbacksOnDisable = !!i4293[20]
  i4292.reuseCollisionCallbacks = !!i4293[21]
  i4292.autoSyncTransforms = !!i4293[22]
  var i4295 = i4293[23]
  var i4294 = []
  for(var i = 0; i < i4295.length; i += 1) {
    i4294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4295[i + 0]) );
  }
  i4292.collisionMatrix = i4294
  return i4292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4299 = data
  i4298.enabled = !!i4299[0]
  i4298.layerId = i4299[1]
  i4298.otherLayerId = i4299[2]
  return i4298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4301 = data
  var i4303 = i4301[0]
  var i4302 = []
  for(var i = 0; i < i4303.length; i += 1) {
    i4302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4303[i + 0]) );
  }
  i4300.qualityLevels = i4302
  var i4305 = i4301[1]
  var i4304 = []
  for(var i = 0; i < i4305.length; i += 1) {
    i4304.push( i4305[i + 0] );
  }
  i4300.names = i4304
  i4300.shadows = i4301[2]
  i4300.anisotropicFiltering = i4301[3]
  i4300.antiAliasing = i4301[4]
  i4300.lodBias = i4301[5]
  i4300.shadowCascades = i4301[6]
  i4300.shadowDistance = i4301[7]
  i4300.shadowmaskMode = i4301[8]
  i4300.shadowProjection = i4301[9]
  i4300.shadowResolution = i4301[10]
  i4300.softParticles = !!i4301[11]
  i4300.softVegetation = !!i4301[12]
  i4300.activeColorSpace = i4301[13]
  i4300.desiredColorSpace = i4301[14]
  i4300.masterTextureLimit = i4301[15]
  i4300.maxQueuedFrames = i4301[16]
  i4300.particleRaycastBudget = i4301[17]
  i4300.pixelLightCount = i4301[18]
  i4300.realtimeReflectionProbes = !!i4301[19]
  i4300.shadowCascade2Split = i4301[20]
  i4300.shadowCascade4Split = new pc.Vec3( i4301[21], i4301[22], i4301[23] )
  i4300.streamingMipmapsActive = !!i4301[24]
  i4300.vSyncCount = i4301[25]
  i4300.asyncUploadBufferSize = i4301[26]
  i4300.asyncUploadTimeSlice = i4301[27]
  i4300.billboardsFaceCameraPosition = !!i4301[28]
  i4300.shadowNearPlaneOffset = i4301[29]
  i4300.streamingMipmapsMemoryBudget = i4301[30]
  i4300.maximumLODLevel = i4301[31]
  i4300.streamingMipmapsAddAllCameras = !!i4301[32]
  i4300.streamingMipmapsMaxLevelReduction = i4301[33]
  i4300.streamingMipmapsRenderersPerFrame = i4301[34]
  i4300.resolutionScalingFixedDPIFactor = i4301[35]
  i4300.streamingMipmapsMaxFileIORequests = i4301[36]
  i4300.currentQualityLevel = i4301[37]
  return i4300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i4308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i4309 = data
  var i4311 = i4309[0]
  var i4310 = []
  for(var i = 0; i < i4311.length; i += 1) {
    i4310.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i4311[i + 0]) );
  }
  i4308.groups = i4310
  var i4313 = i4309[1]
  var i4312 = []
  for(var i = 0; i < i4313.length; i += 1) {
    i4312.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i4313[i + 0]) );
  }
  i4308.snapshots = i4312
  return i4308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i4316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i4317 = data
  i4316.id = i4317[0]
  i4316.childGroupIds = i4317[1]
  i4316.name = i4317[2]
  return i4316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i4320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i4321 = data
  i4320.id = i4321[0]
  var i4323 = i4321[1]
  var i4322 = []
  for(var i = 0; i < i4323.length; i += 1) {
    i4322.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i4323[i + 0]) );
  }
  i4320.parameters = i4322
  return i4320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i4326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i4327 = data
  i4326.name = i4327[0]
  i4326.value = i4327[1]
  return i4326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4331 = data
  i4330.weight = i4331[0]
  i4330.vertices = i4331[1]
  i4330.normals = i4331[2]
  i4330.tangents = i4331[3]
  return i4330
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

Deserializers.creativeName = "31Aug2026_Level1_1_CompleteLevel_BiggerIcons-v1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1781";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4163";

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

Deserializers.buildID = "421914df-28b7-4371-a7b2-533edc295262";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

