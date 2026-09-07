var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4604 = root || request.c( 'UnityEngine.JointSpring' )
  var i4605 = data
  i4604.spring = i4605[0]
  i4604.damper = i4605[1]
  i4604.targetPosition = i4605[2]
  return i4604
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4606 = root || request.c( 'UnityEngine.JointMotor' )
  var i4607 = data
  i4606.m_TargetVelocity = i4607[0]
  i4606.m_Force = i4607[1]
  i4606.m_FreeSpin = i4607[2]
  return i4606
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4608 = root || request.c( 'UnityEngine.JointLimits' )
  var i4609 = data
  i4608.m_Min = i4609[0]
  i4608.m_Max = i4609[1]
  i4608.m_Bounciness = i4609[2]
  i4608.m_BounceMinVelocity = i4609[3]
  i4608.m_ContactDistance = i4609[4]
  i4608.minBounce = i4609[5]
  i4608.maxBounce = i4609[6]
  return i4608
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4610 = root || request.c( 'UnityEngine.JointDrive' )
  var i4611 = data
  i4610.m_PositionSpring = i4611[0]
  i4610.m_PositionDamper = i4611[1]
  i4610.m_MaximumForce = i4611[2]
  i4610.m_UseAcceleration = i4611[3]
  return i4610
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4612 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4613 = data
  i4612.m_Spring = i4613[0]
  i4612.m_Damper = i4613[1]
  return i4612
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4614 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4615 = data
  i4614.m_Limit = i4615[0]
  i4614.m_Bounciness = i4615[1]
  i4614.m_ContactDistance = i4615[2]
  return i4614
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4616 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4617 = data
  i4616.m_ExtremumSlip = i4617[0]
  i4616.m_ExtremumValue = i4617[1]
  i4616.m_AsymptoteSlip = i4617[2]
  i4616.m_AsymptoteValue = i4617[3]
  i4616.m_Stiffness = i4617[4]
  return i4616
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4618 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4619 = data
  i4618.m_LowerAngle = i4619[0]
  i4618.m_UpperAngle = i4619[1]
  return i4618
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4620 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4621 = data
  i4620.m_MotorSpeed = i4621[0]
  i4620.m_MaximumMotorTorque = i4621[1]
  return i4620
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4622 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4623 = data
  i4622.m_DampingRatio = i4623[0]
  i4622.m_Frequency = i4623[1]
  i4622.m_Angle = i4623[2]
  return i4622
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4624 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4625 = data
  i4624.m_LowerTranslation = i4625[0]
  i4624.m_UpperTranslation = i4625[1]
  return i4624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4626 = root || new pc.UnityMaterial()
  var i4627 = data
  i4626.name = i4627[0]
  request.r(i4627[1], i4627[2], 0, i4626, 'shader')
  i4626.renderQueue = i4627[3]
  i4626.enableInstancing = !!i4627[4]
  var i4629 = i4627[5]
  var i4628 = []
  for(var i = 0; i < i4629.length; i += 1) {
    i4628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4629[i + 0]) );
  }
  i4626.floatParameters = i4628
  var i4631 = i4627[6]
  var i4630 = []
  for(var i = 0; i < i4631.length; i += 1) {
    i4630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4631[i + 0]) );
  }
  i4626.colorParameters = i4630
  var i4633 = i4627[7]
  var i4632 = []
  for(var i = 0; i < i4633.length; i += 1) {
    i4632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4633[i + 0]) );
  }
  i4626.vectorParameters = i4632
  var i4635 = i4627[8]
  var i4634 = []
  for(var i = 0; i < i4635.length; i += 1) {
    i4634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4635[i + 0]) );
  }
  i4626.textureParameters = i4634
  var i4637 = i4627[9]
  var i4636 = []
  for(var i = 0; i < i4637.length; i += 1) {
    i4636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4637[i + 0]) );
  }
  i4626.materialFlags = i4636
  return i4626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4641 = data
  i4640.name = i4641[0]
  i4640.value = i4641[1]
  return i4640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4645 = data
  i4644.name = i4645[0]
  i4644.value = new pc.Color(i4645[1], i4645[2], i4645[3], i4645[4])
  return i4644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4649 = data
  i4648.name = i4649[0]
  i4648.value = new pc.Vec4( i4649[1], i4649[2], i4649[3], i4649[4] )
  return i4648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4653 = data
  i4652.name = i4653[0]
  request.r(i4653[1], i4653[2], 0, i4652, 'value')
  return i4652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4657 = data
  i4656.name = i4657[0]
  i4656.enabled = !!i4657[1]
  return i4656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4659 = data
  i4658.name = i4659[0]
  i4658.width = i4659[1]
  i4658.height = i4659[2]
  i4658.mipmapCount = i4659[3]
  i4658.anisoLevel = i4659[4]
  i4658.filterMode = i4659[5]
  i4658.hdr = !!i4659[6]
  i4658.format = i4659[7]
  i4658.wrapMode = i4659[8]
  i4658.alphaIsTransparency = !!i4659[9]
  i4658.alphaSource = i4659[10]
  i4658.graphicsFormat = i4659[11]
  i4658.sRGBTexture = !!i4659[12]
  i4658.desiredColorSpace = i4659[13]
  i4658.wrapU = i4659[14]
  i4658.wrapV = i4659[15]
  return i4658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4661 = data
  i4660.name = i4661[0]
  i4660.halfPrecision = !!i4661[1]
  i4660.useSimplification = !!i4661[2]
  i4660.useUInt32IndexFormat = !!i4661[3]
  i4660.vertexCount = i4661[4]
  i4660.aabb = i4661[5]
  var i4663 = i4661[6]
  var i4662 = []
  for(var i = 0; i < i4663.length; i += 1) {
    i4662.push( !!i4663[i + 0] );
  }
  i4660.streams = i4662
  i4660.vertices = i4661[7]
  var i4665 = i4661[8]
  var i4664 = []
  for(var i = 0; i < i4665.length; i += 1) {
    i4664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4665[i + 0]) );
  }
  i4660.subMeshes = i4664
  var i4667 = i4661[9]
  var i4666 = []
  for(var i = 0; i < i4667.length; i += 16) {
    i4666.push( new pc.Mat4().setData(i4667[i + 0], i4667[i + 1], i4667[i + 2], i4667[i + 3],  i4667[i + 4], i4667[i + 5], i4667[i + 6], i4667[i + 7],  i4667[i + 8], i4667[i + 9], i4667[i + 10], i4667[i + 11],  i4667[i + 12], i4667[i + 13], i4667[i + 14], i4667[i + 15]) );
  }
  i4660.bindposes = i4666
  var i4669 = i4661[10]
  var i4668 = []
  for(var i = 0; i < i4669.length; i += 1) {
    i4668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4669[i + 0]) );
  }
  i4660.blendShapes = i4668
  return i4660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4675 = data
  i4674.triangles = i4675[0]
  return i4674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4681 = data
  i4680.name = i4681[0]
  var i4683 = i4681[1]
  var i4682 = []
  for(var i = 0; i < i4683.length; i += 1) {
    i4682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4683[i + 0]) );
  }
  i4680.frames = i4682
  return i4680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4685 = data
  i4684.position = new pc.Vec3( i4685[0], i4685[1], i4685[2] )
  i4684.scale = new pc.Vec3( i4685[3], i4685[4], i4685[5] )
  i4684.rotation = new pc.Quat(i4685[6], i4685[7], i4685[8], i4685[9])
  return i4684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4687 = data
  i4686.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4687[0], i4686.main)
  i4686.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4687[1], i4686.colorBySpeed)
  i4686.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4687[2], i4686.colorOverLifetime)
  i4686.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4687[3], i4686.emission)
  i4686.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4687[4], i4686.rotationBySpeed)
  i4686.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4687[5], i4686.rotationOverLifetime)
  i4686.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4687[6], i4686.shape)
  i4686.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4687[7], i4686.sizeBySpeed)
  i4686.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4687[8], i4686.sizeOverLifetime)
  i4686.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4687[9], i4686.textureSheetAnimation)
  i4686.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4687[10], i4686.velocityOverLifetime)
  i4686.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4687[11], i4686.noise)
  i4686.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4687[12], i4686.inheritVelocity)
  i4686.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4687[13], i4686.forceOverLifetime)
  i4686.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4687[14], i4686.limitVelocityOverLifetime)
  i4686.useAutoRandomSeed = !!i4687[15]
  i4686.randomSeed = i4687[16]
  return i4686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4688 = root || new pc.ParticleSystemMain()
  var i4689 = data
  i4688.duration = i4689[0]
  i4688.loop = !!i4689[1]
  i4688.prewarm = !!i4689[2]
  i4688.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4689[3], i4688.startDelay)
  i4688.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4689[4], i4688.startLifetime)
  i4688.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4689[5], i4688.startSpeed)
  i4688.startSize3D = !!i4689[6]
  i4688.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4689[7], i4688.startSizeX)
  i4688.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4689[8], i4688.startSizeY)
  i4688.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4689[9], i4688.startSizeZ)
  i4688.startRotation3D = !!i4689[10]
  i4688.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4689[11], i4688.startRotationX)
  i4688.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4689[12], i4688.startRotationY)
  i4688.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4689[13], i4688.startRotationZ)
  i4688.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4689[14], i4688.startColor)
  i4688.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4689[15], i4688.gravityModifier)
  i4688.simulationSpace = i4689[16]
  request.r(i4689[17], i4689[18], 0, i4688, 'customSimulationSpace')
  i4688.simulationSpeed = i4689[19]
  i4688.useUnscaledTime = !!i4689[20]
  i4688.scalingMode = i4689[21]
  i4688.playOnAwake = !!i4689[22]
  i4688.maxParticles = i4689[23]
  i4688.emitterVelocityMode = i4689[24]
  i4688.stopAction = i4689[25]
  return i4688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4690 = root || new pc.MinMaxCurve()
  var i4691 = data
  i4690.mode = i4691[0]
  i4690.curveMin = new pc.AnimationCurve( { keys_flow: i4691[1] } )
  i4690.curveMax = new pc.AnimationCurve( { keys_flow: i4691[2] } )
  i4690.curveMultiplier = i4691[3]
  i4690.constantMin = i4691[4]
  i4690.constantMax = i4691[5]
  return i4690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4692 = root || new pc.MinMaxGradient()
  var i4693 = data
  i4692.mode = i4693[0]
  i4692.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4693[1], i4692.gradientMin)
  i4692.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4693[2], i4692.gradientMax)
  i4692.colorMin = new pc.Color(i4693[3], i4693[4], i4693[5], i4693[6])
  i4692.colorMax = new pc.Color(i4693[7], i4693[8], i4693[9], i4693[10])
  return i4692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4695 = data
  i4694.mode = i4695[0]
  var i4697 = i4695[1]
  var i4696 = []
  for(var i = 0; i < i4697.length; i += 1) {
    i4696.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4697[i + 0]) );
  }
  i4694.colorKeys = i4696
  var i4699 = i4695[2]
  var i4698 = []
  for(var i = 0; i < i4699.length; i += 1) {
    i4698.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4699[i + 0]) );
  }
  i4694.alphaKeys = i4698
  return i4694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4700 = root || new pc.ParticleSystemColorBySpeed()
  var i4701 = data
  i4700.enabled = !!i4701[0]
  i4700.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4701[1], i4700.color)
  i4700.range = new pc.Vec2( i4701[2], i4701[3] )
  return i4700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4705 = data
  i4704.color = new pc.Color(i4705[0], i4705[1], i4705[2], i4705[3])
  i4704.time = i4705[4]
  return i4704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4709 = data
  i4708.alpha = i4709[0]
  i4708.time = i4709[1]
  return i4708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4710 = root || new pc.ParticleSystemColorOverLifetime()
  var i4711 = data
  i4710.enabled = !!i4711[0]
  i4710.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4711[1], i4710.color)
  return i4710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4712 = root || new pc.ParticleSystemEmitter()
  var i4713 = data
  i4712.enabled = !!i4713[0]
  i4712.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4713[1], i4712.rateOverTime)
  i4712.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4713[2], i4712.rateOverDistance)
  var i4715 = i4713[3]
  var i4714 = []
  for(var i = 0; i < i4715.length; i += 1) {
    i4714.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4715[i + 0]) );
  }
  i4712.bursts = i4714
  return i4712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4718 = root || new pc.ParticleSystemBurst()
  var i4719 = data
  i4718.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4719[0], i4718.count)
  i4718.cycleCount = i4719[1]
  i4718.minCount = i4719[2]
  i4718.maxCount = i4719[3]
  i4718.repeatInterval = i4719[4]
  i4718.time = i4719[5]
  return i4718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4720 = root || new pc.ParticleSystemRotationBySpeed()
  var i4721 = data
  i4720.enabled = !!i4721[0]
  i4720.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4721[1], i4720.x)
  i4720.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4721[2], i4720.y)
  i4720.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4721[3], i4720.z)
  i4720.separateAxes = !!i4721[4]
  i4720.range = new pc.Vec2( i4721[5], i4721[6] )
  return i4720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4722 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4723 = data
  i4722.enabled = !!i4723[0]
  i4722.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4723[1], i4722.x)
  i4722.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4723[2], i4722.y)
  i4722.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4723[3], i4722.z)
  i4722.separateAxes = !!i4723[4]
  return i4722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4724 = root || new pc.ParticleSystemShape()
  var i4725 = data
  i4724.enabled = !!i4725[0]
  i4724.shapeType = i4725[1]
  i4724.randomDirectionAmount = i4725[2]
  i4724.sphericalDirectionAmount = i4725[3]
  i4724.randomPositionAmount = i4725[4]
  i4724.alignToDirection = !!i4725[5]
  i4724.radius = i4725[6]
  i4724.radiusMode = i4725[7]
  i4724.radiusSpread = i4725[8]
  i4724.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4725[9], i4724.radiusSpeed)
  i4724.radiusThickness = i4725[10]
  i4724.angle = i4725[11]
  i4724.length = i4725[12]
  i4724.boxThickness = new pc.Vec3( i4725[13], i4725[14], i4725[15] )
  i4724.meshShapeType = i4725[16]
  request.r(i4725[17], i4725[18], 0, i4724, 'mesh')
  request.r(i4725[19], i4725[20], 0, i4724, 'meshRenderer')
  request.r(i4725[21], i4725[22], 0, i4724, 'skinnedMeshRenderer')
  i4724.useMeshMaterialIndex = !!i4725[23]
  i4724.meshMaterialIndex = i4725[24]
  i4724.useMeshColors = !!i4725[25]
  i4724.normalOffset = i4725[26]
  i4724.arc = i4725[27]
  i4724.arcMode = i4725[28]
  i4724.arcSpread = i4725[29]
  i4724.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4725[30], i4724.arcSpeed)
  i4724.donutRadius = i4725[31]
  i4724.position = new pc.Vec3( i4725[32], i4725[33], i4725[34] )
  i4724.rotation = new pc.Vec3( i4725[35], i4725[36], i4725[37] )
  i4724.scale = new pc.Vec3( i4725[38], i4725[39], i4725[40] )
  return i4724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4726 = root || new pc.ParticleSystemSizeBySpeed()
  var i4727 = data
  i4726.enabled = !!i4727[0]
  i4726.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4727[1], i4726.x)
  i4726.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4727[2], i4726.y)
  i4726.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4727[3], i4726.z)
  i4726.separateAxes = !!i4727[4]
  i4726.range = new pc.Vec2( i4727[5], i4727[6] )
  return i4726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4728 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4729 = data
  i4728.enabled = !!i4729[0]
  i4728.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4729[1], i4728.x)
  i4728.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4729[2], i4728.y)
  i4728.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4729[3], i4728.z)
  i4728.separateAxes = !!i4729[4]
  return i4728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4730 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4731 = data
  i4730.enabled = !!i4731[0]
  i4730.mode = i4731[1]
  i4730.animation = i4731[2]
  i4730.numTilesX = i4731[3]
  i4730.numTilesY = i4731[4]
  i4730.useRandomRow = !!i4731[5]
  i4730.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4731[6], i4730.frameOverTime)
  i4730.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4731[7], i4730.startFrame)
  i4730.cycleCount = i4731[8]
  i4730.rowIndex = i4731[9]
  i4730.flipU = i4731[10]
  i4730.flipV = i4731[11]
  i4730.spriteCount = i4731[12]
  var i4733 = i4731[13]
  var i4732 = []
  for(var i = 0; i < i4733.length; i += 2) {
  request.r(i4733[i + 0], i4733[i + 1], 2, i4732, '')
  }
  i4730.sprites = i4732
  return i4730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4736 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4737 = data
  i4736.enabled = !!i4737[0]
  i4736.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4737[1], i4736.x)
  i4736.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4737[2], i4736.y)
  i4736.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4737[3], i4736.z)
  i4736.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4737[4], i4736.radial)
  i4736.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4737[5], i4736.speedModifier)
  i4736.space = i4737[6]
  i4736.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4737[7], i4736.orbitalX)
  i4736.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4737[8], i4736.orbitalY)
  i4736.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4737[9], i4736.orbitalZ)
  i4736.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4737[10], i4736.orbitalOffsetX)
  i4736.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4737[11], i4736.orbitalOffsetY)
  i4736.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4737[12], i4736.orbitalOffsetZ)
  return i4736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4738 = root || new pc.ParticleSystemNoise()
  var i4739 = data
  i4738.enabled = !!i4739[0]
  i4738.separateAxes = !!i4739[1]
  i4738.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4739[2], i4738.strengthX)
  i4738.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4739[3], i4738.strengthY)
  i4738.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4739[4], i4738.strengthZ)
  i4738.frequency = i4739[5]
  i4738.damping = !!i4739[6]
  i4738.octaveCount = i4739[7]
  i4738.octaveMultiplier = i4739[8]
  i4738.octaveScale = i4739[9]
  i4738.quality = i4739[10]
  i4738.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4739[11], i4738.scrollSpeed)
  i4738.scrollSpeedMultiplier = i4739[12]
  i4738.remapEnabled = !!i4739[13]
  i4738.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4739[14], i4738.remapX)
  i4738.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4739[15], i4738.remapY)
  i4738.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4739[16], i4738.remapZ)
  i4738.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4739[17], i4738.positionAmount)
  i4738.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4739[18], i4738.rotationAmount)
  i4738.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4739[19], i4738.sizeAmount)
  return i4738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4740 = root || new pc.ParticleSystemInheritVelocity()
  var i4741 = data
  i4740.enabled = !!i4741[0]
  i4740.mode = i4741[1]
  i4740.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4741[2], i4740.curve)
  return i4740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4742 = root || new pc.ParticleSystemForceOverLifetime()
  var i4743 = data
  i4742.enabled = !!i4743[0]
  i4742.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4743[1], i4742.x)
  i4742.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4743[2], i4742.y)
  i4742.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4743[3], i4742.z)
  i4742.space = i4743[4]
  i4742.randomized = !!i4743[5]
  return i4742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4744 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4745 = data
  i4744.enabled = !!i4745[0]
  i4744.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4745[1], i4744.limit)
  i4744.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4745[2], i4744.limitX)
  i4744.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4745[3], i4744.limitY)
  i4744.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4745[4], i4744.limitZ)
  i4744.dampen = i4745[5]
  i4744.separateAxes = !!i4745[6]
  i4744.space = i4745[7]
  i4744.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4745[8], i4744.drag)
  i4744.multiplyDragByParticleSize = !!i4745[9]
  i4744.multiplyDragByParticleVelocity = !!i4745[10]
  return i4744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4747 = data
  request.r(i4747[0], i4747[1], 0, i4746, 'mesh')
  i4746.meshCount = i4747[2]
  i4746.activeVertexStreamsCount = i4747[3]
  i4746.alignment = i4747[4]
  i4746.renderMode = i4747[5]
  i4746.sortMode = i4747[6]
  i4746.lengthScale = i4747[7]
  i4746.velocityScale = i4747[8]
  i4746.cameraVelocityScale = i4747[9]
  i4746.normalDirection = i4747[10]
  i4746.sortingFudge = i4747[11]
  i4746.minParticleSize = i4747[12]
  i4746.maxParticleSize = i4747[13]
  i4746.pivot = new pc.Vec3( i4747[14], i4747[15], i4747[16] )
  request.r(i4747[17], i4747[18], 0, i4746, 'trailMaterial')
  i4746.applyActiveColorSpace = !!i4747[19]
  i4746.enabled = !!i4747[20]
  request.r(i4747[21], i4747[22], 0, i4746, 'sharedMaterial')
  var i4749 = i4747[23]
  var i4748 = []
  for(var i = 0; i < i4749.length; i += 2) {
  request.r(i4749[i + 0], i4749[i + 1], 2, i4748, '')
  }
  i4746.sharedMaterials = i4748
  i4746.receiveShadows = !!i4747[24]
  i4746.shadowCastingMode = i4747[25]
  i4746.sortingLayerID = i4747[26]
  i4746.sortingOrder = i4747[27]
  i4746.lightmapIndex = i4747[28]
  i4746.lightmapSceneIndex = i4747[29]
  i4746.lightmapScaleOffset = new pc.Vec4( i4747[30], i4747[31], i4747[32], i4747[33] )
  i4746.lightProbeUsage = i4747[34]
  i4746.reflectionProbeUsage = i4747[35]
  return i4746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4753 = data
  i4752.name = i4753[0]
  i4752.tagId = i4753[1]
  i4752.enabled = !!i4753[2]
  i4752.isStatic = !!i4753[3]
  i4752.layer = i4753[4]
  return i4752
}

Deserializers["Level1_Hair_Playable_Step34"] = function (request, data, root) {
  var i4754 = root || request.c( 'Level1_Hair_Playable_Step34' )
  var i4755 = data
  request.r(i4755[0], i4755[1], 0, i4754, 'wetCloth')
  request.r(i4755[2], i4755[3], 0, i4754, 'waterDripingParticle')
  i4754.ZoomStep1 = request.d('ZoomPos', i4755[4], i4754.ZoomStep1)
  var i4757 = i4755[5]
  var i4756 = []
  for(var i = 0; i < i4757.length; i += 2) {
  request.r(i4757[i + 0], i4757[i + 1], 2, i4756, '')
  }
  i4754.AllTrash = i4756
  var i4759 = i4755[6]
  var i4758 = []
  for(var i = 0; i < i4759.length; i += 2) {
  request.r(i4759[i + 0], i4759[i + 1], 2, i4758, '')
  }
  i4754.AllTrashOutlines = i4758
  i4754.trashDone = !!i4755[7]
  i4754.trashThrown = i4755[8]
  i4754.trashTotal = i4755[9]
  request.r(i4755[10], i4755[11], 0, i4754, 'bd_Sticky')
  i4754.ZoomStep2 = request.d('ZoomPos', i4755[12], i4754.ZoomStep2)
  request.r(i4755[13], i4755[14], 0, i4754, 'ToolStep2')
  request.r(i4755[15], i4755[16], 0, i4754, 'camFollowStep2')
  var i4761 = i4755[17]
  var i4760 = []
  for(var i = 0; i < i4761.length; i += 2) {
  request.r(i4761[i + 0], i4761[i + 1], 2, i4760, '')
  }
  i4754.AllBugOutlines = i4760
  i4754.ZoomStep2b = request.d('ZoomPos', i4755[18], i4754.ZoomStep2b)
  request.r(i4755[19], i4755[20], 0, i4754, 'ToolStep2b')
  request.r(i4755[21], i4755[22], 0, i4754, 'camFollowStep2b')
  request.r(i4755[23], i4755[24], 0, i4754, 'dustColStep2')
  request.r(i4755[25], i4755[26], 0, i4754, 'handIndicationShower')
  request.r(i4755[27], i4755[28], 0, i4754, 'hairDirtyStatic')
  request.r(i4755[29], i4755[30], 0, i4754, 'hairDirtyWetStatic')
  request.r(i4755[31], i4755[32], 0, i4754, 'dryHairAnim')
  i4754.ZoomStep3 = request.d('ZoomPos', i4755[33], i4754.ZoomStep3)
  request.r(i4755[34], i4755[35], 0, i4754, 'ShampooOnHand')
  request.r(i4755[36], i4755[37], 0, i4754, 'ShampooInHandCap')
  request.r(i4755[38], i4755[39], 0, i4754, 'ToolStep3')
  request.r(i4755[40], i4755[41], 0, i4754, 'shampooPatch')
  request.r(i4755[42], i4755[43], 0, i4754, 'handSpriteRend')
  request.r(i4755[44], i4755[45], 0, i4754, 'bottleDefault')
  request.r(i4755[46], i4755[47], 0, i4754, 'bottlePressed')
  request.r(i4755[48], i4755[49], 0, i4754, 'shampooDropping')
  request.r(i4755[50], i4755[51], 0, i4754, 'bottleOpenSfx')
  request.r(i4755[52], i4755[53], 0, i4754, 'bottleSqueezSfx')
  request.r(i4755[54], i4755[55], 0, i4754, 'bottlePourSfx')
  i4754.ZoomStep4 = request.d('ZoomPos', i4755[56], i4754.ZoomStep4)
  request.r(i4755[57], i4755[58], 0, i4754, 'ToolStep4')
  request.r(i4755[59], i4755[60], 0, i4754, 'camFollowStep4')
  request.r(i4755[61], i4755[62], 0, i4754, 'foamLight_E')
  request.r(i4755[63], i4755[64], 0, i4754, 'foam2_E')
  request.r(i4755[65], i4755[66], 0, i4754, 'foamCol')
  request.r(i4755[67], i4755[68], 0, i4754, 'handIndicationHands')
  request.r(i4755[69], i4755[70], 0, i4754, 'progressStep4')
  i4754.levelName = i4755[71]
  i4754.levelReward = i4755[72]
  request.r(i4755[73], i4755[74], 0, i4754, 'LevelIcon')
  request.r(i4755[75], i4755[76], 0, i4754, 'Level_BG')
  var i4763 = i4755[77]
  var i4762 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i4763.length; i += 2) {
  request.r(i4763[i + 0], i4763[i + 1], 1, i4762, '')
  }
  i4754.ToolIcons = i4762
  var i4765 = i4755[78]
  var i4764 = []
  for(var i = 0; i < i4765.length; i += 2) {
  request.r(i4765[i + 0], i4765[i + 1], 2, i4764, '')
  }
  i4754.AllDrags = i4764
  var i4767 = i4755[79]
  var i4766 = []
  for(var i = 0; i < i4767.length; i += 2) {
  request.r(i4767[i + 0], i4767[i + 1], 2, i4766, '')
  }
  i4754.AllSources = i4766
  var i4769 = i4755[80]
  var i4768 = []
  for(var i = 0; i < i4769.length; i += 2) {
  request.r(i4769[i + 0], i4769[i + 1], 2, i4768, '')
  }
  i4754.AllScratches = i4768
  i4754.stepsDone = i4755[81]
  i4754.levelNo = i4755[82]
  i4754.partNo = i4755[83]
  var i4771 = i4755[84]
  var i4770 = []
  for(var i = 0; i < i4771.length; i += 2) {
  request.r(i4771[i + 0], i4771[i + 1], 2, i4770, '')
  }
  i4754.disableOnLevelComplete = i4770
  request.r(i4755[85], i4755[86], 0, i4754, 'bubbleGum')
  return i4754
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i4772 = root || request.c( 'ZoomPos' )
  var i4773 = data
  i4772.CameraPos = new pc.Vec3( i4773[0], i4773[1], i4773[2] )
  i4772.CameraFOV = i4773[3]
  return i4772
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i4786 = root || request.c( 'PlayableCTA' )
  var i4787 = data
  i4786.trigger = i4787[0]
  i4786.afterSeconds = i4787[1]
  i4786.afterTaps = i4787[2]
  request.r(i4787[3], i4787[4], 0, i4786, 'scratchProgress')
  i4786.scratchIndex = i4787[5]
  i4786.progressThreshold = i4787[6]
  request.r(i4787[7], i4787[8], 0, i4786, 'watchedTool')
  i4786.blockInputOnFire = !!i4787[9]
  i4786.refireOnEveryTap = !!i4787[10]
  i4786.refireDelay = i4787[11]
  i4786.showEndCard = !!i4787[12]
  request.r(i4787[13], i4787[14], 0, i4786, 'endCard')
  var i4789 = i4787[15]
  var i4788 = []
  for(var i = 0; i < i4789.length; i += 2) {
  request.r(i4789[i + 0], i4789[i + 1], 2, i4788, '')
  }
  i4786.thingsToDisableOnEndCard = i4788
  i4786.endCardDelay = i4787[16]
  i4786.showEndCardOnProgressTrigger = !!i4787[17]
  i4786.showEndCardOnToolAppearTrigger = !!i4787[18]
  i4786.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i4787[19], i4786.onCtaFired)
  i4786.logWhenFired = !!i4787[20]
  return i4786
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i4790 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i4791 = data
  i4790.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4791[0], i4790.m_PersistentCalls)
  return i4790
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4792 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4793 = data
  var i4795 = i4793[0]
  var i4794 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4795.length; i += 1) {
    i4794.add(request.d('UnityEngine.Events.PersistentCall', i4795[i + 0]));
  }
  i4792.m_Calls = i4794
  return i4792
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4798 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4799 = data
  request.r(i4799[0], i4799[1], 0, i4798, 'm_Target')
  i4798.m_TargetAssemblyTypeName = i4799[2]
  i4798.m_MethodName = i4799[3]
  i4798.m_Mode = i4799[4]
  i4798.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4799[5], i4798.m_Arguments)
  i4798.m_CallState = i4799[6]
  return i4798
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i4800 = root || request.c( 'PlayableFadeCoverSettings' )
  var i4801 = data
  i4800.revealDelay = i4801[0]
  i4800.revealDuration = i4801[1]
  return i4800
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i4802 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i4803 = data
  request.r(i4803[0], i4803[1], 0, i4802, 'MainCamera')
  i4802.RenderType = i4803[2]
  request.r(i4803[3], i4803[4], 0, i4802, 'ScratchSurfaceSprite')
  i4802.ScratchSurfaceSpriteHasAlpha = !!i4803[5]
  i4802.MaskProgressCutOffValue = i4803[6]
  request.r(i4803[7], i4803[8], 0, i4802, 'EraseTexture')
  i4802.EraseTextureScale = new pc.Vec2( i4803[9], i4803[10] )
  i4802.InputEnabled = !!i4803[11]
  request.r(i4803[12], i4803[13], 0, i4802, 'Card')
  i4802.Mode = i4803[14]
  request.r(i4803[15], i4803[16], 0, i4802, 'Progress')
  request.r(i4803[17], i4803[18], 0, i4802, 'MeshCard')
  request.r(i4803[19], i4803[20], 0, i4802, 'SpriteCard')
  request.r(i4803[21], i4803[22], 0, i4802, 'ImageCard')
  request.r(i4803[23], i4803[24], 0, i4802, 'MaskShader')
  request.r(i4803[25], i4803[26], 0, i4802, 'BrushShader')
  request.r(i4803[27], i4803[28], 0, i4802, 'MaskProgressShader')
  request.r(i4803[29], i4803[30], 0, i4802, 'MaskProgressCutOffShader')
  return i4802
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i4804 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i4805 = data
  request.r(i4805[0], i4805[1], 0, i4804, 'MainCamera')
  request.r(i4805[2], i4805[3], 0, i4804, 'Surface')
  i4804.RenderTextureQuality = i4805[4]
  request.r(i4805[5], i4805[6], 0, i4804, 'Eraser')
  request.r(i4805[7], i4805[8], 0, i4804, 'Progress')
  request.r(i4805[9], i4805[10], 0, i4804, 'ScratchSurface')
  request.r(i4805[11], i4805[12], 0, i4804, 'RenderTexture')
  i4804.BrushScale = new pc.Vec2( i4805[13], i4805[14] )
  request.r(i4805[15], i4805[16], 0, i4804, 'ToolTip')
  i4804.InputEnabled = !!i4805[17]
  i4804.IsScratching = !!i4805[18]
  i4804.useChangingScale = !!i4805[19]
  i4804.useGivenBrushScale = !!i4805[20]
  i4804.canSpreadMask = !!i4805[21]
  i4804.shouldPaintHoles = !!i4805[22]
  i4804.canRotateTip = !!i4805[23]
  i4804._mode = i4805[24]
  return i4804
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i4806 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i4807 = data
  request.r(i4807[0], i4807[1], 0, i4806, 'Card')
  i4806.currentProgress = i4807[2]
  return i4806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i4808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i4809 = data
  i4808.color = new pc.Color(i4809[0], i4809[1], i4809[2], i4809[3])
  request.r(i4809[4], i4809[5], 0, i4808, 'sprite')
  i4808.flipX = !!i4809[6]
  i4808.flipY = !!i4809[7]
  i4808.drawMode = i4809[8]
  i4808.size = new pc.Vec2( i4809[9], i4809[10] )
  i4808.tileMode = i4809[11]
  i4808.adaptiveModeThreshold = i4809[12]
  i4808.maskInteraction = i4809[13]
  i4808.spriteSortPoint = i4809[14]
  i4808.enabled = !!i4809[15]
  request.r(i4809[16], i4809[17], 0, i4808, 'sharedMaterial')
  var i4811 = i4809[18]
  var i4810 = []
  for(var i = 0; i < i4811.length; i += 2) {
  request.r(i4811[i + 0], i4811[i + 1], 2, i4810, '')
  }
  i4808.sharedMaterials = i4810
  i4808.receiveShadows = !!i4809[19]
  i4808.shadowCastingMode = i4809[20]
  i4808.sortingLayerID = i4809[21]
  i4808.sortingOrder = i4809[22]
  i4808.lightmapIndex = i4809[23]
  i4808.lightmapSceneIndex = i4809[24]
  i4808.lightmapScaleOffset = new pc.Vec4( i4809[25], i4809[26], i4809[27], i4809[28] )
  i4808.lightProbeUsage = i4809[29]
  i4808.reflectionProbeUsage = i4809[30]
  return i4808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4813 = data
  request.r(i4813[0], i4813[1], 0, i4812, 'animatorController')
  request.r(i4813[2], i4813[3], 0, i4812, 'avatar')
  i4812.updateMode = i4813[4]
  i4812.hasTransformHierarchy = !!i4813[5]
  i4812.applyRootMotion = !!i4813[6]
  var i4815 = i4813[7]
  var i4814 = []
  for(var i = 0; i < i4815.length; i += 2) {
  request.r(i4815[i + 0], i4815[i + 1], 2, i4814, '')
  }
  i4812.humanBones = i4814
  i4812.enabled = !!i4813[8]
  return i4812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i4818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i4819 = data
  var i4821 = i4819[0]
  var i4820 = []
  for(var i = 0; i < i4821.length; i += 3) {
    i4820.push( new pc.Vec3( i4821[i + 0], i4821[i + 1], i4821[i + 2] ) );
  }
  i4818.positions = i4820
  i4818.positionCount = i4819[1]
  i4818.time = i4819[2]
  i4818.startWidth = i4819[3]
  i4818.endWidth = i4819[4]
  i4818.widthMultiplier = i4819[5]
  i4818.autodestruct = !!i4819[6]
  i4818.emitting = !!i4819[7]
  i4818.numCornerVertices = i4819[8]
  i4818.numCapVertices = i4819[9]
  i4818.minVertexDistance = i4819[10]
  i4818.colorGradient = i4819[11] ? new pc.ColorGradient(i4819[11][0], i4819[11][1], i4819[11][2]) : null
  i4818.startColor = new pc.Color(i4819[12], i4819[13], i4819[14], i4819[15])
  i4818.endColor = new pc.Color(i4819[16], i4819[17], i4819[18], i4819[19])
  i4818.generateLightingData = !!i4819[20]
  i4818.textureMode = i4819[21]
  i4818.alignment = i4819[22]
  i4818.widthCurve = new pc.AnimationCurve( { keys_flow: i4819[23] } )
  i4818.enabled = !!i4819[24]
  request.r(i4819[25], i4819[26], 0, i4818, 'sharedMaterial')
  var i4823 = i4819[27]
  var i4822 = []
  for(var i = 0; i < i4823.length; i += 2) {
  request.r(i4823[i + 0], i4823[i + 1], 2, i4822, '')
  }
  i4818.sharedMaterials = i4822
  i4818.receiveShadows = !!i4819[28]
  i4818.shadowCastingMode = i4819[29]
  i4818.sortingLayerID = i4819[30]
  i4818.sortingOrder = i4819[31]
  i4818.lightmapIndex = i4819[32]
  i4818.lightmapSceneIndex = i4819[33]
  i4818.lightmapScaleOffset = new pc.Vec4( i4819[34], i4819[35], i4819[36], i4819[37] )
  i4818.lightProbeUsage = i4819[38]
  i4818.reflectionProbeUsage = i4819[39]
  return i4818
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i4826 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i4827 = data
  request.r(i4827[0], i4827[1], 0, i4826, 'm_RootBone')
  var i4829 = i4827[2]
  var i4828 = []
  for(var i = 0; i < i4829.length; i += 2) {
  request.r(i4829[i + 0], i4829[i + 1], 2, i4828, '')
  }
  i4826.m_BoneTransforms = i4828
  i4826.m_AlwaysUpdate = !!i4827[3]
  i4826.m_AutoRebind = !!i4827[4]
  return i4826
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i4830 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i4831 = data
  i4830.targetIsSelf = !!i4831[0]
  request.r(i4831[1], i4831[2], 0, i4830, 'targetGO')
  i4830.tweenTargetIsTargetGO = !!i4831[3]
  i4830.delay = i4831[4]
  i4830.duration = i4831[5]
  i4830.easeType = i4831[6]
  i4830.easeCurve = new pc.AnimationCurve( { keys_flow: i4831[7] } )
  i4830.loopType = i4831[8]
  i4830.loops = i4831[9]
  i4830.id = i4831[10]
  i4830.isRelative = !!i4831[11]
  i4830.isFrom = !!i4831[12]
  i4830.isIndependentUpdate = !!i4831[13]
  i4830.autoKill = !!i4831[14]
  i4830.autoGenerate = !!i4831[15]
  i4830.isActive = !!i4831[16]
  i4830.isValid = !!i4831[17]
  request.r(i4831[18], i4831[19], 0, i4830, 'target')
  i4830.animationType = i4831[20]
  i4830.targetType = i4831[21]
  i4830.forcedTargetType = i4831[22]
  i4830.autoPlay = !!i4831[23]
  i4830.useTargetAsV3 = !!i4831[24]
  i4830.endValueFloat = i4831[25]
  i4830.endValueV3 = new pc.Vec3( i4831[26], i4831[27], i4831[28] )
  i4830.endValueV2 = new pc.Vec2( i4831[29], i4831[30] )
  i4830.endValueColor = new pc.Color(i4831[31], i4831[32], i4831[33], i4831[34])
  i4830.endValueString = i4831[35]
  i4830.endValueRect = UnityEngine.Rect.MinMaxRect(i4831[36], i4831[37], i4831[38], i4831[39])
  request.r(i4831[40], i4831[41], 0, i4830, 'endValueTransform')
  i4830.optionalBool0 = !!i4831[42]
  i4830.optionalBool1 = !!i4831[43]
  i4830.optionalFloat0 = i4831[44]
  i4830.optionalInt0 = i4831[45]
  i4830.optionalRotationMode = i4831[46]
  i4830.optionalScrambleMode = i4831[47]
  i4830.optionalShakeRandomnessMode = i4831[48]
  i4830.optionalString = i4831[49]
  i4830.updateType = i4831[50]
  i4830.isSpeedBased = !!i4831[51]
  i4830.hasOnStart = !!i4831[52]
  i4830.hasOnPlay = !!i4831[53]
  i4830.hasOnUpdate = !!i4831[54]
  i4830.hasOnStepComplete = !!i4831[55]
  i4830.hasOnComplete = !!i4831[56]
  i4830.hasOnTweenCreated = !!i4831[57]
  i4830.hasOnRewind = !!i4831[58]
  i4830.onStart = request.d('UnityEngine.Events.UnityEvent', i4831[59], i4830.onStart)
  i4830.onPlay = request.d('UnityEngine.Events.UnityEvent', i4831[60], i4830.onPlay)
  i4830.onUpdate = request.d('UnityEngine.Events.UnityEvent', i4831[61], i4830.onUpdate)
  i4830.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i4831[62], i4830.onStepComplete)
  i4830.onComplete = request.d('UnityEngine.Events.UnityEvent', i4831[63], i4830.onComplete)
  i4830.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i4831[64], i4830.onTweenCreated)
  i4830.onRewind = request.d('UnityEngine.Events.UnityEvent', i4831[65], i4830.onRewind)
  return i4830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i4832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i4833 = data
  i4832.usedByComposite = !!i4833[0]
  i4832.autoTiling = !!i4833[1]
  i4832.size = new pc.Vec2( i4833[2], i4833[3] )
  i4832.edgeRadius = i4833[4]
  i4832.enabled = !!i4833[5]
  i4832.isTrigger = !!i4833[6]
  i4832.usedByEffector = !!i4833[7]
  i4832.density = i4833[8]
  i4832.offset = new pc.Vec2( i4833[9], i4833[10] )
  request.r(i4833[11], i4833[12], 0, i4832, 'material')
  return i4832
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i4834 = root || request.c( 'BasicDrag' )
  var i4835 = data
  i4834.canDrag = !!i4835[0]
  i4834.dragByDelta = !!i4835[1]
  i4834.isDragging = !!i4835[2]
  i4834.moveWithPointer = !!i4835[3]
  i4834.canReturn = !!i4835[4]
  i4834.jumpOnReturn = !!i4835[5]
  i4834.returnTime = i4835[6]
  i4834.Tool_Offset = new pc.Vec3( i4835[7], i4835[8], i4835[9] )
  i4834.canScaleIncrease = !!i4835[10]
  i4834.Self_ScaleNew = new pc.Vec3( i4835[11], i4835[12], i4835[13] )
  i4834.canRotateOnPick = !!i4835[14]
  i4834.startRot = new pc.Vec3( i4835[15], i4835[16], i4835[17] )
  i4834.newRot = new pc.Vec3( i4835[18], i4835[19], i4835[20] )
  var i4837 = i4835[21]
  var i4836 = []
  for(var i = 0; i < i4837.length; i += 2) {
  request.r(i4837[i + 0], i4837[i + 1], 2, i4836, '')
  }
  i4834.childSprite = i4836
  request.r(i4835[22], i4835[23], 0, i4834, 'ToolSelectClip')
  request.r(i4835[24], i4835[25], 0, i4834, 'ToolLoopClip')
  request.r(i4835[26], i4835[27], 0, i4834, 'thisParticles')
  i4834.onDragparticle = !!i4835[28]
  request.r(i4835[29], i4835[30], 0, i4834, 'dragParticles')
  request.r(i4835[31], i4835[32], 0, i4834, 'anim')
  i4834.startPos = new pc.Vec3( i4835[33], i4835[34], i4835[35] )
  i4834.startScale = new pc.Vec3( i4835[36], i4835[37], i4835[38] )
  i4834.Vibration = !!i4835[39]
  i4834.isPlacedCannotMove = !!i4835[40]
  i4834.isObjectMovingWhileDragging = !!i4835[41]
  i4834.OnMouseDownEvent = request.d('System.Action', i4835[42], i4834.OnMouseDownEvent)
  i4834.OnMouseUpEvent = request.d('System.Action', i4835[43], i4834.OnMouseUpEvent)
  i4834.ProgStartEvent = request.d('System.Action', i4835[44], i4834.ProgStartEvent)
  i4834.ProgEndEvent = request.d('System.Action', i4835[45], i4834.ProgEndEvent)
  i4834.canCallMouseUpWhenGamePaused = !!i4835[46]
  i4834.ClampX_L = i4835[47]
  i4834.ClampX_H = i4835[48]
  i4834.ClampY_L = i4835[49]
  i4834.ClampY_H = i4835[50]
  i4834.startOrder = i4835[51]
  i4834.dontResetItIsInCollider = !!i4835[52]
  request.r(i4835[53], i4835[54], 0, i4834, 'thisCollider')
  request.r(i4835[55], i4835[56], 0, i4834, 'thisSR')
  i4834.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i4835[57], i4834.OnMouseDownEventIndependentFromCanDrag)
  return i4834
}

Deserializers["System.Action"] = function (request, data, root) {
  var i4840 = root || request.c( 'System.Action' )
  var i4841 = data
  return i4840
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i4842 = root || request.c( 'BD_Clamp' )
  var i4843 = data
  i4842.ClampX_L = i4843[0]
  i4842.ClampX_H = i4843[1]
  i4842.ClampY_L = i4843[2]
  i4842.ClampY_H = i4843[3]
  return i4842
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i4844 = root || request.c( 'OutlinePulse' )
  var i4845 = data
  i4844.smallThickness = i4845[0]
  i4844.largeThickness = i4845[1]
  i4844.transitionSpeed = i4845[2]
  i4844.animationSpeed = i4845[3]
  i4844.isThickOutline = !!i4845[4]
  i4844.animate = !!i4845[5]
  i4844.hideSpriteOnly = !!i4845[6]
  return i4844
}

Deserializers["BD_ItemPick"] = function (request, data, root) {
  var i4846 = root || request.c( 'BD_ItemPick' )
  var i4847 = data
  request.r(i4847[0], i4847[1], 0, i4846, 'Tool')
  request.r(i4847[2], i4847[3], 0, i4846, 'Outline')
  request.r(i4847[4], i4847[5], 0, i4846, 'itemRend')
  request.r(i4847[6], i4847[7], 0, i4846, 'pick_sp')
  i4846.OnTap = request.d('UnityEngine.Events.UnityEvent', i4847[8], i4846.OnTap)
  i4846.OnComplete = request.d('UnityEngine.Events.UnityEvent', i4847[9], i4846.OnComplete)
  request.r(i4847[10], i4847[11], 0, i4846, 'Clip')
  i4846.minDragDistance = i4847[12]
  i4846.isTaped = !!i4847[13]
  return i4846
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4848 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4849 = data
  request.r(i4849[0], i4849[1], 0, i4848, 'm_ObjectArgument')
  i4848.m_ObjectArgumentAssemblyTypeName = i4849[2]
  i4848.m_IntArgument = i4849[3]
  i4848.m_FloatArgument = i4849[4]
  i4848.m_StringArgument = i4849[5]
  i4848.m_BoolArgument = !!i4849[6]
  return i4848
}

Deserializers["BD_Sticky"] = function (request, data, root) {
  var i4850 = root || request.c( 'BD_Sticky' )
  var i4851 = data
  request.r(i4851[0], i4851[1], 0, i4850, 'anim')
  i4850.isVerticlePull = !!i4851[2]
  request.r(i4851[3], i4851[4], 0, i4850, 'pickSfx')
  request.r(i4851[5], i4851[6], 0, i4850, 'pulledClip')
  request.r(i4851[7], i4851[8], 0, i4850, 'pullSource')
  i4850.OnComplete = request.d('UnityEngine.Events.UnityEvent', i4851[9], i4850.OnComplete)
  i4850.changeLayerPick = !!i4851[10]
  request.r(i4851[11], i4851[12], 0, i4850, 'sp_rendr')
  i4850.def_layerNo = i4851[13]
  i4850.tar_LayerNo = i4851[14]
  i4850.direction = i4851[15]
  i4850.dragThreshold = i4851[16]
  i4850.pullDistanceToFree = i4851[17]
  i4850.returnSpeed = i4851[18]
  i4850.resistance = i4851[19]
  var i4853 = i4851[20]
  var i4852 = []
  for(var i = 0; i < i4853.length; i += 2) {
  request.r(i4853[i + 0], i4853[i + 1], 2, i4852, '')
  }
  i4850.StartBones = i4852
  var i4855 = i4851[21]
  var i4854 = []
  for(var i = 0; i < i4855.length; i += 2) {
  request.r(i4855[i + 0], i4855[i + 1], 2, i4854, '')
  }
  i4850.EndBones = i4854
  request.r(i4851[22], i4851[23], 0, i4850, 'BonePivot')
  return i4850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4857 = data
  request.r(i4857[0], i4857[1], 0, i4856, 'clip')
  request.r(i4857[2], i4857[3], 0, i4856, 'outputAudioMixerGroup')
  i4856.playOnAwake = !!i4857[4]
  i4856.loop = !!i4857[5]
  i4856.time = i4857[6]
  i4856.volume = i4857[7]
  i4856.pitch = i4857[8]
  i4856.enabled = !!i4857[9]
  return i4856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i4858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i4859 = data
  i4858.radius = i4859[0]
  i4858.enabled = !!i4859[1]
  i4858.isTrigger = !!i4859[2]
  i4858.usedByEffector = !!i4859[3]
  i4858.density = i4859[4]
  i4858.offset = new pc.Vec2( i4859[5], i4859[6] )
  request.r(i4859[7], i4859[8], 0, i4858, 'material')
  return i4858
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i4860 = root || request.c( 'PlayParticlesOnCollision' )
  var i4861 = data
  request.r(i4861[0], i4861[1], 0, i4860, 'Target')
  request.r(i4861[2], i4861[3], 0, i4860, 'ParticlePrefab')
  i4860.destroyIt = !!i4861[4]
  i4860.stayAtPlace = !!i4861[5]
  i4860.disableOnCollision = !!i4861[6]
  i4860.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i4861[7], i4860.OnCollisionEvent)
  return i4860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i4862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i4863 = data
  i4862.frontSortingLayerID = i4863[0]
  i4862.frontSortingOrder = i4863[1]
  i4862.backSortingLayerID = i4863[2]
  i4862.backSortingOrder = i4863[3]
  i4862.alphaCutoff = i4863[4]
  request.r(i4863[5], i4863[6], 0, i4862, 'sprite')
  i4862.tileMode = i4863[7]
  i4862.isCustomRangeActive = !!i4863[8]
  i4862.spriteSortPoint = i4863[9]
  i4862.enabled = !!i4863[10]
  request.r(i4863[11], i4863[12], 0, i4862, 'sharedMaterial')
  var i4865 = i4863[13]
  var i4864 = []
  for(var i = 0; i < i4865.length; i += 2) {
  request.r(i4865[i + 0], i4865[i + 1], 2, i4864, '')
  }
  i4862.sharedMaterials = i4864
  i4862.receiveShadows = !!i4863[14]
  i4862.shadowCastingMode = i4863[15]
  i4862.sortingLayerID = i4863[16]
  i4862.sortingOrder = i4863[17]
  i4862.lightmapIndex = i4863[18]
  i4862.lightmapSceneIndex = i4863[19]
  i4862.lightmapScaleOffset = new pc.Vec4( i4863[20], i4863[21], i4863[22], i4863[23] )
  i4862.lightProbeUsage = i4863[24]
  i4862.reflectionProbeUsage = i4863[25]
  return i4862
}

Deserializers["PlayTweenOnHit"] = function (request, data, root) {
  var i4866 = root || request.c( 'PlayTweenOnHit' )
  var i4867 = data
  i4866.isContinueous = !!i4867[0]
  request.r(i4867[1], i4867[2], 0, i4866, 'tool')
  var i4869 = i4867[3]
  var i4868 = []
  for(var i = 0; i < i4869.length; i += 2) {
  request.r(i4869[i + 0], i4869[i + 1], 2, i4868, '')
  }
  i4866.animsToPlay = i4868
  request.r(i4867[4], i4867[5], 0, i4866, 'tipTarget')
  return i4866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i4872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i4873 = data
  i4872.usedByComposite = !!i4873[0]
  i4872.autoTiling = !!i4873[1]
  var i4875 = i4873[2]
  var i4874 = []
  for(var i = 0; i < i4875.length; i += 1) {
  var i4877 = i4875[i + 0]
  var i4876 = []
  for(var i = 0; i < i4877.length; i += 2) {
    i4876.push( new pc.Vec2( i4877[i + 0], i4877[i + 1] ) );
  }
    i4874.push( i4876 );
  }
  i4872.points = i4874
  i4872.enabled = !!i4873[3]
  i4872.isTrigger = !!i4873[4]
  i4872.usedByEffector = !!i4873[5]
  i4872.density = i4873[6]
  i4872.offset = new pc.Vec2( i4873[7], i4873[8] )
  request.r(i4873[9], i4873[10], 0, i4872, 'material')
  return i4872
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i4884 = root || request.c( 'PlaySfxOnCollision' )
  var i4885 = data
  request.r(i4885[0], i4885[1], 0, i4884, 'Tip')
  i4884.Mode = i4885[2]
  request.r(i4885[3], i4885[4], 0, i4884, 'DragInput')
  request.r(i4885[5], i4885[6], 0, i4884, 'Source')
  i4884.startVol = i4885[7]
  i4884.targetVol = i4885[8]
  i4884.duration = i4885[9]
  request.r(i4885[10], i4885[11], 0, i4884, 'Particles')
  i4884.isDone = !!i4885[12]
  i4884.isInArea = !!i4885[13]
  i4884.isPlaying = !!i4885[14]
  return i4884
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i4886 = root || request.c( 'InteractableBones' )
  var i4887 = data
  request.r(i4887[0], i4887[1], 0, i4886, 'Tip')
  i4886.MoveAmount = i4887[2]
  i4886.MoveSpeed = i4887[3]
  i4886.ShakeSpeed = i4887[4]
  i4886.MovementThreshold = i4887[5]
  i4886.MoveX = !!i4887[6]
  i4886.MoveY = !!i4887[7]
  return i4886
}

Deserializers["WaypointFollower"] = function (request, data, root) {
  var i4888 = root || request.c( 'WaypointFollower' )
  var i4889 = data
  var i4891 = i4889[0]
  var i4890 = []
  for(var i = 0; i < i4891.length; i += 2) {
  request.r(i4891[i + 0], i4891[i + 1], 2, i4890, '')
  }
  i4888.waypoints = i4890
  i4888.speed = i4889[1]
  i4888.rotationSpeed = i4889[2]
  i4888.loop = !!i4889[3]
  i4888.reverse = !!i4889[4]
  i4888.canMove = !!i4889[5]
  request.r(i4889[6], i4889[7], 0, i4888, 'movingSfx')
  return i4888
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i4892 = root || request.c( 'ActionOnTap' )
  var i4893 = data
  i4892.OnTap = request.d('UnityEngine.Events.UnityEvent', i4893[0], i4892.OnTap)
  i4892.OnTapExtra = request.d('System.Action', i4893[1], i4892.OnTapExtra)
  return i4892
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i4894 = root || request.c( 'BD_Progress' )
  var i4895 = data
  var i4897 = i4895[0]
  var i4896 = []
  for(var i = 0; i < i4897.length; i += 1) {
    i4896.push( request.d('ScratchData', i4897[i + 0]) );
  }
  i4894.AllScratches = i4896
  i4894.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i4895[1], i4894.OnScratchComplete)
  i4894.isProgDone = !!i4895[2]
  i4894.canCallComplete = !!i4895[3]
  i4894.CollectiveAppear = !!i4895[4]
  i4894.tipControl = !!i4895[5]
  i4894.progressControl = !!i4895[6]
  request.r(i4895[7], i4895[8], 0, i4894, 'thisDrag')
  i4894.CompleteEvent = request.d('System.Action', i4895[9], i4894.CompleteEvent)
  i4894.SubCompleteEvent = request.d('System.Action', i4895[10], i4894.SubCompleteEvent)
  return i4894
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i4900 = root || request.c( 'ScratchData' )
  var i4901 = data
  request.r(i4901[0], i4901[1], 0, i4900, 'ScratchManager')
  i4900.scratchLimit = i4901[2]
  i4900.isComplete = !!i4901[3]
  return i4900
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i4902 = root || request.c( 'BD_CameraFollow' )
  var i4903 = data
  request.r(i4903[0], i4903[1], 0, i4902, 'Tool')
  request.r(i4903[2], i4903[3], 0, i4902, 'Pivot')
  i4902.FOV = i4903[4]
  i4902.Y_L = i4903[5]
  i4902.Y_H = i4903[6]
  i4902.X_L = i4903[7]
  i4902.X_R = i4903[8]
  i4902.startDelay = i4903[9]
  i4902.duration = i4903[10]
  return i4902
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i4904 = root || request.c( 'BD_ProgressHelper' )
  var i4905 = data
  request.r(i4905[0], i4905[1], 0, i4904, 'BD_Progress')
  request.r(i4905[2], i4905[3], 0, i4904, 'fadeSprite')
  i4904.fadeIn = !!i4905[4]
  return i4904
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i4906 = root || request.c( 'BD_SpriteChange' )
  var i4907 = data
  request.r(i4907[0], i4907[1], 0, i4906, 'BD')
  request.r(i4907[2], i4907[3], 0, i4906, 'SR')
  request.r(i4907[4], i4907[5], 0, i4906, 'Default')
  request.r(i4907[6], i4907[7], 0, i4906, 'Picked')
  i4906.resetOnRelease = !!i4907[8]
  return i4906
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i4908 = root || request.c( 'BD_AnimatorDrag' )
  var i4909 = data
  request.r(i4909[0], i4909[1], 0, i4908, 'BD')
  request.r(i4909[2], i4909[3], 0, i4908, 'anim')
  request.r(i4909[4], i4909[5], 0, i4908, 'Source')
  i4908.Vibration = !!i4909[6]
  i4908.isCompletable = !!i4909[7]
  i4908.completionThreshold = i4909[8]
  i4908.OnComplete = request.d('UnityEngine.Events.UnityEvent', i4909[9], i4908.OnComplete)
  return i4908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i4910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i4911 = data
  i4910.bodyType = i4911[0]
  request.r(i4911[1], i4911[2], 0, i4910, 'material')
  i4910.simulated = !!i4911[3]
  i4910.useAutoMass = !!i4911[4]
  i4910.mass = i4911[5]
  i4910.drag = i4911[6]
  i4910.angularDrag = i4911[7]
  i4910.gravityScale = i4911[8]
  i4910.collisionDetectionMode = i4911[9]
  i4910.sleepMode = i4911[10]
  i4910.constraints = i4911[11]
  return i4910
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i4912 = root || request.c( 'PlaceItem' )
  var i4913 = data
  request.r(i4913[0], i4913[1], 0, i4912, 'thisDrag')
  request.r(i4913[2], i4913[3], 0, i4912, 'Target')
  request.r(i4913[4], i4913[5], 0, i4912, 'Clip')
  i4912.jumpOnPlace = !!i4913[6]
  i4912.jumpHeight = i4913[7]
  i4912.jumpDuration = i4913[8]
  i4912.settleDuration = i4913[9]
  i4912.isPlaced = !!i4913[10]
  i4912.isInsideCollider = !!i4913[11]
  i4912.changeScaleOnPlace = !!i4913[12]
  request.r(i4913[13], i4913[14], 0, i4912, 'item')
  i4912.newScaleOnPlace = new pc.Vec3( i4913[15], i4913[16], i4913[17] )
  i4912.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i4913[18], i4912.OnPlaced)
  return i4912
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i4914 = root || request.c( 'BD_Action' )
  var i4915 = data
  i4914.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i4915[0], i4914.OnMouseDownEvent)
  i4914.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i4915[1], i4914.OnMouseUpEvent)
  i4914.setToolLayer = !!i4915[2]
  request.r(i4915[3], i4915[4], 0, i4914, 'tool_SP')
  return i4914
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i4916 = root || request.c( 'SpriteButton' )
  var i4917 = data
  i4916.isLocked = !!i4917[0]
  i4916.lockMsg = i4917[1]
  i4916.onClick = request.d('UnityEngine.Events.UnityEvent', i4917[2], i4916.onClick)
  i4916.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i4917[3], i4916.onLockedClick)
  i4916.isLevelBtnSfx = !!i4917[4]
  request.r(i4917[5], i4917[6], 0, i4916, 'pivot')
  i4916.reductionChange = i4917[7]
  i4916.animationDuration = i4917[8]
  return i4916
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i4918 = root || request.c( 'DestroyObj' )
  var i4919 = data
  i4918.destroyDelay = i4919[0]
  return i4918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i4920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i4921 = data
  i4920.name = i4921[0]
  i4920.atlasId = i4921[1]
  i4920.mipmapCount = i4921[2]
  i4920.hdr = !!i4921[3]
  i4920.size = i4921[4]
  i4920.anisoLevel = i4921[5]
  i4920.filterMode = i4921[6]
  var i4923 = i4921[7]
  var i4922 = []
  for(var i = 0; i < i4923.length; i += 4) {
    i4922.push( UnityEngine.Rect.MinMaxRect(i4923[i + 0], i4923[i + 1], i4923[i + 2], i4923[i + 3]) );
  }
  i4920.rects = i4922
  i4920.wrapU = i4921[8]
  i4920.wrapV = i4921[9]
  return i4920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4927 = data
  i4926.name = i4927[0]
  i4926.index = i4927[1]
  i4926.startup = !!i4927[2]
  return i4926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4929 = data
  i4928.aspect = i4929[0]
  i4928.orthographic = !!i4929[1]
  i4928.orthographicSize = i4929[2]
  i4928.backgroundColor = new pc.Color(i4929[3], i4929[4], i4929[5], i4929[6])
  i4928.nearClipPlane = i4929[7]
  i4928.farClipPlane = i4929[8]
  i4928.fieldOfView = i4929[9]
  i4928.depth = i4929[10]
  i4928.clearFlags = i4929[11]
  i4928.cullingMask = i4929[12]
  i4928.rect = i4929[13]
  request.r(i4929[14], i4929[15], 0, i4928, 'targetTexture')
  i4928.usePhysicalProperties = !!i4929[16]
  i4928.focalLength = i4929[17]
  i4928.sensorSize = new pc.Vec2( i4929[18], i4929[19] )
  i4928.lensShift = new pc.Vec2( i4929[20], i4929[21] )
  i4928.gateFit = i4929[22]
  i4928.commandBufferCount = i4929[23]
  i4928.cameraType = i4929[24]
  i4928.enabled = !!i4929[25]
  return i4928
}

Deserializers["CameraController"] = function (request, data, root) {
  var i4930 = root || request.c( 'CameraController' )
  var i4931 = data
  request.r(i4931[0], i4931[1], 0, i4930, 'cam')
  i4930.defaultPosition = new pc.Vec3( i4931[2], i4931[3], i4931[4] )
  i4930.defaultSize = i4931[5]
  i4930.defaultFOV = i4931[6]
  i4930.defaultDuration = i4931[7]
  i4930.defaultEase = i4931[8]
  return i4930
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i4932 = root || request.c( 'MusicSource' )
  var i4933 = data
  request.r(i4933[0], i4933[1], 0, i4932, 'source')
  return i4932
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i4934 = root || request.c( 'UI_Manager' )
  var i4935 = data
  i4934.levelCompleted = !!i4935[0]
  i4934.isPauseActive = !!i4935[1]
  i4934.loadIndex = i4935[2]
  request.r(i4935[3], i4935[4], 0, i4934, 'removeAdsButton')
  request.r(i4935[5], i4935[6], 0, i4934, 'pauseButton')
  request.r(i4935[7], i4935[8], 0, i4934, 'Fade_Img')
  request.r(i4935[9], i4935[10], 0, i4934, 'TopBarAnim')
  request.r(i4935[11], i4935[12], 0, i4934, 'MainPanel')
  request.r(i4935[13], i4935[14], 0, i4934, 'PausePanel')
  request.r(i4935[15], i4935[16], 0, i4934, 'PausePopUp')
  request.r(i4935[17], i4935[18], 0, i4934, 'PauseCanvasGroup')
  request.r(i4935[19], i4935[20], 0, i4934, 'RateUsPanel')
  request.r(i4935[21], i4935[22], 0, i4934, 'RateUsPopUp')
  request.r(i4935[23], i4935[24], 0, i4934, 'RemoveAdsPanel')
  request.r(i4935[25], i4935[26], 0, i4934, 'RemoveAdsPopUp')
  request.r(i4935[27], i4935[28], 0, i4934, 'RemoveAdsCanvasGroup')
  var i4937 = i4935[29]
  var i4936 = []
  for(var i = 0; i < i4937.length; i += 2) {
  request.r(i4937[i + 0], i4937[i + 1], 2, i4936, '')
  }
  i4934.RemoveAdsAnims = i4936
  request.r(i4935[30], i4935[31], 0, i4934, 'CompletePanel')
  request.r(i4935[32], i4935[33], 0, i4934, 'LevelIcon')
  request.r(i4935[34], i4935[35], 0, i4934, 'CompleteParticles')
  request.r(i4935[36], i4935[37], 0, i4934, 'progressBar')
  request.r(i4935[38], i4935[39], 0, i4934, 'progressText')
  request.r(i4935[40], i4935[41], 0, i4934, 'toolIcon1')
  request.r(i4935[42], i4935[43], 0, i4934, 'toolIcon2')
  request.r(i4935[44], i4935[45], 0, i4934, 'toolIcon3')
  request.r(i4935[46], i4935[47], 0, i4934, 'toolIcon4')
  request.r(i4935[48], i4935[49], 0, i4934, 'target1')
  request.r(i4935[50], i4935[51], 0, i4934, 'target2')
  i4934.toolMoveDuration = i4935[52]
  i4934.currentIndex = i4935[53]
  var i4939 = i4935[54]
  var i4938 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i4939.length; i += 2) {
  request.r(i4939[i + 0], i4939[i + 1], 1, i4938, '')
  }
  i4934.allTools = i4938
  request.r(i4935[55], i4935[56], 0, i4934, 'clockProgress')
  request.r(i4935[57], i4935[58], 0, i4934, 'clockProgressFill')
  request.r(i4935[59], i4935[60], 0, i4934, 'clockAudio')
  i4934.moveDistance = i4935[61]
  i4934.animationDuration = i4935[62]
  i4934.greyBgChildName = i4935[63]
  i4934.pushOffset = i4935[64]
  return i4934
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i4940 = root || request.c( 'GameManagerPlayable' )
  var i4941 = data
  request.r(i4941[0], i4941[1], 0, i4940, 'endParticles')
  request.r(i4941[2], i4941[3], 0, i4940, 'stepCompleteParticles')
  request.r(i4941[4], i4941[5], 0, i4940, 'DefaultMat')
  request.r(i4941[6], i4941[7], 0, i4940, 'BG_Music')
  request.r(i4941[8], i4941[9], 0, i4940, 'restoreEffectShader')
  request.r(i4941[10], i4941[11], 0, i4940, 'stickerEffectShader')
  i4940.isComplete = !!i4941[12]
  i4940.isPaused = !!i4941[13]
  request.r(i4941[14], i4941[15], 0, i4940, 'currentLevel')
  i4940.startLevelOnPlay = !!i4941[16]
  i4940.currentLevelNo = i4941[17]
  return i4940
}

Deserializers["AudioController"] = function (request, data, root) {
  var i4942 = root || request.c( 'AudioController' )
  var i4943 = data
  request.r(i4943[0], i4943[1], 0, i4942, 'MainMixer')
  request.r(i4943[2], i4943[3], 0, i4942, 'UiClick')
  request.r(i4943[4], i4943[5], 0, i4942, 'UiClickSource')
  var i4945 = i4943[6]
  var i4944 = []
  for(var i = 0; i < i4945.length; i += 2) {
  request.r(i4945[i + 0], i4945[i + 1], 2, i4944, '')
  }
  i4942.SfxSources = i4944
  var i4947 = i4943[7]
  var i4946 = []
  for(var i = 0; i < i4947.length; i += 2) {
  request.r(i4947[i + 0], i4947[i + 1], 2, i4946, '')
  }
  i4942.AllClips = i4946
  return i4942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4951 = data
  i4950.pivot = new pc.Vec2( i4951[0], i4951[1] )
  i4950.anchorMin = new pc.Vec2( i4951[2], i4951[3] )
  i4950.anchorMax = new pc.Vec2( i4951[4], i4951[5] )
  i4950.sizeDelta = new pc.Vec2( i4951[6], i4951[7] )
  i4950.anchoredPosition3D = new pc.Vec3( i4951[8], i4951[9], i4951[10] )
  i4950.rotation = new pc.Quat(i4951[11], i4951[12], i4951[13], i4951[14])
  i4950.scale = new pc.Vec3( i4951[15], i4951[16], i4951[17] )
  return i4950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4953 = data
  i4952.planeDistance = i4953[0]
  i4952.referencePixelsPerUnit = i4953[1]
  i4952.isFallbackOverlay = !!i4953[2]
  i4952.renderMode = i4953[3]
  i4952.renderOrder = i4953[4]
  i4952.sortingLayerName = i4953[5]
  i4952.sortingOrder = i4953[6]
  i4952.scaleFactor = i4953[7]
  request.r(i4953[8], i4953[9], 0, i4952, 'worldCamera')
  i4952.overrideSorting = !!i4953[10]
  i4952.pixelPerfect = !!i4953[11]
  i4952.targetDisplay = i4953[12]
  i4952.overridePixelPerfect = !!i4953[13]
  i4952.enabled = !!i4953[14]
  return i4952
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4954 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4955 = data
  i4954.m_UiScaleMode = i4955[0]
  i4954.m_ReferencePixelsPerUnit = i4955[1]
  i4954.m_ScaleFactor = i4955[2]
  i4954.m_ReferenceResolution = new pc.Vec2( i4955[3], i4955[4] )
  i4954.m_ScreenMatchMode = i4955[5]
  i4954.m_MatchWidthOrHeight = i4955[6]
  i4954.m_PhysicalUnit = i4955[7]
  i4954.m_FallbackScreenDPI = i4955[8]
  i4954.m_DefaultSpriteDPI = i4955[9]
  i4954.m_DynamicPixelsPerUnit = i4955[10]
  i4954.m_PresetInfoIsWorld = !!i4955[11]
  return i4954
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4956 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4957 = data
  i4956.m_IgnoreReversedGraphics = !!i4957[0]
  i4956.m_BlockingObjects = i4957[1]
  i4956.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4957[2] )
  return i4956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4959 = data
  i4958.cullTransparentMesh = !!i4959[0]
  return i4958
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4960 = root || request.c( 'UnityEngine.UI.Image' )
  var i4961 = data
  request.r(i4961[0], i4961[1], 0, i4960, 'm_Sprite')
  i4960.m_Type = i4961[2]
  i4960.m_PreserveAspect = !!i4961[3]
  i4960.m_FillCenter = !!i4961[4]
  i4960.m_FillMethod = i4961[5]
  i4960.m_FillAmount = i4961[6]
  i4960.m_FillClockwise = !!i4961[7]
  i4960.m_FillOrigin = i4961[8]
  i4960.m_UseSpriteMesh = !!i4961[9]
  i4960.m_PixelsPerUnitMultiplier = i4961[10]
  request.r(i4961[11], i4961[12], 0, i4960, 'm_Material')
  i4960.m_Maskable = !!i4961[13]
  i4960.m_Color = new pc.Color(i4961[14], i4961[15], i4961[16], i4961[17])
  i4960.m_RaycastTarget = !!i4961[18]
  i4960.m_RaycastPadding = new pc.Vec4( i4961[19], i4961[20], i4961[21], i4961[22] )
  return i4960
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i4962 = root || request.c( 'UnityEngine.UI.Text' )
  var i4963 = data
  i4962.m_FontData = request.d('UnityEngine.UI.FontData', i4963[0], i4962.m_FontData)
  i4962.m_Text = i4963[1]
  request.r(i4963[2], i4963[3], 0, i4962, 'm_Material')
  i4962.m_Maskable = !!i4963[4]
  i4962.m_Color = new pc.Color(i4963[5], i4963[6], i4963[7], i4963[8])
  i4962.m_RaycastTarget = !!i4963[9]
  i4962.m_RaycastPadding = new pc.Vec4( i4963[10], i4963[11], i4963[12], i4963[13] )
  return i4962
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i4964 = root || request.c( 'UnityEngine.UI.FontData' )
  var i4965 = data
  request.r(i4965[0], i4965[1], 0, i4964, 'm_Font')
  i4964.m_FontSize = i4965[2]
  i4964.m_FontStyle = i4965[3]
  i4964.m_BestFit = !!i4965[4]
  i4964.m_MinSize = i4965[5]
  i4964.m_MaxSize = i4965[6]
  i4964.m_Alignment = i4965[7]
  i4964.m_AlignByGeometry = !!i4965[8]
  i4964.m_RichText = !!i4965[9]
  i4964.m_HorizontalOverflow = i4965[10]
  i4964.m_VerticalOverflow = i4965[11]
  i4964.m_LineSpacing = i4965[12]
  return i4964
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4966 = root || request.c( 'UnityEngine.UI.Button' )
  var i4967 = data
  i4966.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4967[0], i4966.m_OnClick)
  i4966.m_Navigation = request.d('UnityEngine.UI.Navigation', i4967[1], i4966.m_Navigation)
  i4966.m_Transition = i4967[2]
  i4966.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4967[3], i4966.m_Colors)
  i4966.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4967[4], i4966.m_SpriteState)
  i4966.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4967[5], i4966.m_AnimationTriggers)
  i4966.m_Interactable = !!i4967[6]
  request.r(i4967[7], i4967[8], 0, i4966, 'm_TargetGraphic')
  return i4966
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4968 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4969 = data
  i4968.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4969[0], i4968.m_PersistentCalls)
  return i4968
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4970 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4971 = data
  i4970.m_Mode = i4971[0]
  i4970.m_WrapAround = !!i4971[1]
  request.r(i4971[2], i4971[3], 0, i4970, 'm_SelectOnUp')
  request.r(i4971[4], i4971[5], 0, i4970, 'm_SelectOnDown')
  request.r(i4971[6], i4971[7], 0, i4970, 'm_SelectOnLeft')
  request.r(i4971[8], i4971[9], 0, i4970, 'm_SelectOnRight')
  return i4970
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4972 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4973 = data
  i4972.m_NormalColor = new pc.Color(i4973[0], i4973[1], i4973[2], i4973[3])
  i4972.m_HighlightedColor = new pc.Color(i4973[4], i4973[5], i4973[6], i4973[7])
  i4972.m_PressedColor = new pc.Color(i4973[8], i4973[9], i4973[10], i4973[11])
  i4972.m_SelectedColor = new pc.Color(i4973[12], i4973[13], i4973[14], i4973[15])
  i4972.m_DisabledColor = new pc.Color(i4973[16], i4973[17], i4973[18], i4973[19])
  i4972.m_ColorMultiplier = i4973[20]
  i4972.m_FadeDuration = i4973[21]
  return i4972
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4974 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4975 = data
  request.r(i4975[0], i4975[1], 0, i4974, 'm_HighlightedSprite')
  request.r(i4975[2], i4975[3], 0, i4974, 'm_PressedSprite')
  request.r(i4975[4], i4975[5], 0, i4974, 'm_SelectedSprite')
  request.r(i4975[6], i4975[7], 0, i4974, 'm_DisabledSprite')
  return i4974
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4976 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4977 = data
  i4976.m_NormalTrigger = i4977[0]
  i4976.m_HighlightedTrigger = i4977[1]
  i4976.m_PressedTrigger = i4977[2]
  i4976.m_SelectedTrigger = i4977[3]
  i4976.m_DisabledTrigger = i4977[4]
  return i4976
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i4978 = root || request.c( 'PlayableHudRuntime' )
  var i4979 = data
  return i4978
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4980 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4981 = data
  request.r(i4981[0], i4981[1], 0, i4980, 'm_FirstSelected')
  i4980.m_sendNavigationEvents = !!i4981[2]
  i4980.m_DragThreshold = i4981[3]
  return i4980
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4982 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4983 = data
  i4982.m_HorizontalAxis = i4983[0]
  i4982.m_VerticalAxis = i4983[1]
  i4982.m_SubmitButton = i4983[2]
  i4982.m_CancelButton = i4983[3]
  i4982.m_InputActionsPerSecond = i4983[4]
  i4982.m_RepeatDelay = i4983[5]
  i4982.m_ForceModuleActive = !!i4983[6]
  i4982.m_SendPointerHoverToParent = !!i4983[7]
  return i4982
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i4984 = root || request.c( 'PlayableRouter' )
  var i4985 = data
  var i4987 = i4985[0]
  var i4986 = []
  for(var i = 0; i < i4987.length; i += 2) {
  request.r(i4987[i + 0], i4987[i + 1], 2, i4986, '')
  }
  i4984.menuObjects = i4986
  var i4989 = i4985[1]
  var i4988 = []
  for(var i = 0; i < i4989.length; i += 2) {
  request.r(i4989[i + 0], i4989[i + 1], 2, i4988, '')
  }
  i4984.gameplayObjects = i4988
  var i4991 = i4985[2]
  var i4990 = []
  for(var i = 0; i < i4991.length; i += 1) {
    i4990.push( request.d('PlayableRouter+SubLevelSlot', i4991[i + 0]) );
  }
  i4984.subLevels = i4990
  i4984.fadeDuration = i4985[3]
  i4984.onMenuClosing = request.d('UnityEngine.Events.UnityEvent', i4985[4], i4984.onMenuClosing)
  i4984.lockedMessage = i4985[5]
  i4984.lockedTapsToCTA = i4985[6]
  return i4984
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i4994 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i4995 = data
  request.r(i4995[0], i4995[1], 0, i4994, 'button')
  request.r(i4995[2], i4995[3], 0, i4994, 'level')
  return i4994
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i4996 = root || request.c( 'ToastManager' )
  var i4997 = data
  request.r(i4997[0], i4997[1], 0, i4996, 'toastPanel')
  request.r(i4997[2], i4997[3], 0, i4996, 'toastPopup')
  request.r(i4997[4], i4997[5], 0, i4996, 'canvasGroup')
  request.r(i4997[6], i4997[7], 0, i4996, 'toastText')
  i4996.startY = i4997[8]
  i4996.visibleY = i4997[9]
  i4996.endY = i4997[10]
  i4996.animationTime = i4997[11]
  i4996.animationTimeUp = i4997[12]
  return i4996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i4998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i4999 = data
  i4998.m_Alpha = i4999[0]
  i4998.m_Interactable = !!i4999[1]
  i4998.m_BlocksRaycasts = !!i4999[2]
  i4998.m_IgnoreParentGroups = !!i4999[3]
  i4998.enabled = !!i4999[4]
  return i4998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5001 = data
  i5000.ambientIntensity = i5001[0]
  i5000.reflectionIntensity = i5001[1]
  i5000.ambientMode = i5001[2]
  i5000.ambientLight = new pc.Color(i5001[3], i5001[4], i5001[5], i5001[6])
  i5000.ambientSkyColor = new pc.Color(i5001[7], i5001[8], i5001[9], i5001[10])
  i5000.ambientGroundColor = new pc.Color(i5001[11], i5001[12], i5001[13], i5001[14])
  i5000.ambientEquatorColor = new pc.Color(i5001[15], i5001[16], i5001[17], i5001[18])
  i5000.fogColor = new pc.Color(i5001[19], i5001[20], i5001[21], i5001[22])
  i5000.fogEndDistance = i5001[23]
  i5000.fogStartDistance = i5001[24]
  i5000.fogDensity = i5001[25]
  i5000.fog = !!i5001[26]
  request.r(i5001[27], i5001[28], 0, i5000, 'skybox')
  i5000.fogMode = i5001[29]
  var i5003 = i5001[30]
  var i5002 = []
  for(var i = 0; i < i5003.length; i += 1) {
    i5002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5003[i + 0]) );
  }
  i5000.lightmaps = i5002
  i5000.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5001[31], i5000.lightProbes)
  i5000.lightmapsMode = i5001[32]
  i5000.mixedBakeMode = i5001[33]
  i5000.environmentLightingMode = i5001[34]
  i5000.ambientProbe = new pc.SphericalHarmonicsL2(i5001[35])
  request.r(i5001[36], i5001[37], 0, i5000, 'customReflection')
  request.r(i5001[38], i5001[39], 0, i5000, 'defaultReflection')
  i5000.defaultReflectionMode = i5001[40]
  i5000.defaultReflectionResolution = i5001[41]
  i5000.sunLightObjectId = i5001[42]
  i5000.pixelLightCount = i5001[43]
  i5000.defaultReflectionHDR = !!i5001[44]
  i5000.hasLightDataAsset = !!i5001[45]
  i5000.hasManualGenerate = !!i5001[46]
  return i5000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5007 = data
  request.r(i5007[0], i5007[1], 0, i5006, 'lightmapColor')
  request.r(i5007[2], i5007[3], 0, i5006, 'lightmapDirection')
  request.r(i5007[4], i5007[5], 0, i5006, 'shadowMask')
  return i5006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5008 = root || new UnityEngine.LightProbes()
  var i5009 = data
  return i5008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5015 = data
  var i5017 = i5015[0]
  var i5016 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5017.length; i += 1) {
    i5016.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5017[i + 0]));
  }
  i5014.ShaderCompilationErrors = i5016
  i5014.name = i5015[1]
  i5014.guid = i5015[2]
  var i5019 = i5015[3]
  var i5018 = []
  for(var i = 0; i < i5019.length; i += 1) {
    i5018.push( i5019[i + 0] );
  }
  i5014.shaderDefinedKeywords = i5018
  var i5021 = i5015[4]
  var i5020 = []
  for(var i = 0; i < i5021.length; i += 1) {
    i5020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5021[i + 0]) );
  }
  i5014.passes = i5020
  var i5023 = i5015[5]
  var i5022 = []
  for(var i = 0; i < i5023.length; i += 1) {
    i5022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5023[i + 0]) );
  }
  i5014.usePasses = i5022
  var i5025 = i5015[6]
  var i5024 = []
  for(var i = 0; i < i5025.length; i += 1) {
    i5024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5025[i + 0]) );
  }
  i5014.defaultParameterValues = i5024
  request.r(i5015[7], i5015[8], 0, i5014, 'unityFallbackShader')
  i5014.readDepth = !!i5015[9]
  i5014.hasDepthOnlyPass = !!i5015[10]
  i5014.isCreatedByShaderGraph = !!i5015[11]
  i5014.disableBatching = !!i5015[12]
  i5014.compiled = !!i5015[13]
  return i5014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5029 = data
  i5028.shaderName = i5029[0]
  i5028.errorMessage = i5029[1]
  return i5028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5034 = root || new pc.UnityShaderPass()
  var i5035 = data
  i5034.id = i5035[0]
  i5034.subShaderIndex = i5035[1]
  i5034.name = i5035[2]
  i5034.passType = i5035[3]
  i5034.grabPassTextureName = i5035[4]
  i5034.usePass = !!i5035[5]
  i5034.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5035[6], i5034.zTest)
  i5034.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5035[7], i5034.zWrite)
  i5034.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5035[8], i5034.culling)
  i5034.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5035[9], i5034.blending)
  i5034.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5035[10], i5034.alphaBlending)
  i5034.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5035[11], i5034.colorWriteMask)
  i5034.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5035[12], i5034.offsetUnits)
  i5034.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5035[13], i5034.offsetFactor)
  i5034.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5035[14], i5034.stencilRef)
  i5034.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5035[15], i5034.stencilReadMask)
  i5034.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5035[16], i5034.stencilWriteMask)
  i5034.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5035[17], i5034.stencilOp)
  i5034.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5035[18], i5034.stencilOpFront)
  i5034.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5035[19], i5034.stencilOpBack)
  var i5037 = i5035[20]
  var i5036 = []
  for(var i = 0; i < i5037.length; i += 1) {
    i5036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5037[i + 0]) );
  }
  i5034.tags = i5036
  var i5039 = i5035[21]
  var i5038 = []
  for(var i = 0; i < i5039.length; i += 1) {
    i5038.push( i5039[i + 0] );
  }
  i5034.passDefinedKeywords = i5038
  var i5041 = i5035[22]
  var i5040 = []
  for(var i = 0; i < i5041.length; i += 1) {
    i5040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5041[i + 0]) );
  }
  i5034.passDefinedKeywordGroups = i5040
  var i5043 = i5035[23]
  var i5042 = []
  for(var i = 0; i < i5043.length; i += 1) {
    i5042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5043[i + 0]) );
  }
  i5034.variants = i5042
  var i5045 = i5035[24]
  var i5044 = []
  for(var i = 0; i < i5045.length; i += 1) {
    i5044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5045[i + 0]) );
  }
  i5034.excludedVariants = i5044
  i5034.hasDepthReader = !!i5035[25]
  return i5034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5047 = data
  i5046.val = i5047[0]
  i5046.name = i5047[1]
  return i5046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5049 = data
  i5048.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5049[0], i5048.src)
  i5048.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5049[1], i5048.dst)
  i5048.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5049[2], i5048.op)
  return i5048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5051 = data
  i5050.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5051[0], i5050.pass)
  i5050.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5051[1], i5050.fail)
  i5050.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5051[2], i5050.zFail)
  i5050.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5051[3], i5050.comp)
  return i5050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5055 = data
  i5054.name = i5055[0]
  i5054.value = i5055[1]
  return i5054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5059 = data
  var i5061 = i5059[0]
  var i5060 = []
  for(var i = 0; i < i5061.length; i += 1) {
    i5060.push( i5061[i + 0] );
  }
  i5058.keywords = i5060
  i5058.hasDiscard = !!i5059[1]
  return i5058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5065 = data
  i5064.passId = i5065[0]
  i5064.subShaderIndex = i5065[1]
  var i5067 = i5065[2]
  var i5066 = []
  for(var i = 0; i < i5067.length; i += 1) {
    i5066.push( i5067[i + 0] );
  }
  i5064.keywords = i5066
  i5064.vertexProgram = i5065[3]
  i5064.fragmentProgram = i5065[4]
  i5064.exportedForWebGl2 = !!i5065[5]
  i5064.readDepth = !!i5065[6]
  return i5064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5071 = data
  request.r(i5071[0], i5071[1], 0, i5070, 'shader')
  i5070.pass = i5071[2]
  return i5070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5075 = data
  i5074.name = i5075[0]
  i5074.type = i5075[1]
  i5074.value = new pc.Vec4( i5075[2], i5075[3], i5075[4], i5075[5] )
  i5074.textureValue = i5075[6]
  i5074.shaderPropertyFlag = i5075[7]
  return i5074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5077 = data
  i5076.name = i5077[0]
  request.r(i5077[1], i5077[2], 0, i5076, 'texture')
  i5076.aabb = i5077[3]
  i5076.vertices = i5077[4]
  i5076.triangles = i5077[5]
  i5076.textureRect = UnityEngine.Rect.MinMaxRect(i5077[6], i5077[7], i5077[8], i5077[9])
  i5076.packedRect = UnityEngine.Rect.MinMaxRect(i5077[10], i5077[11], i5077[12], i5077[13])
  i5076.border = new pc.Vec4( i5077[14], i5077[15], i5077[16], i5077[17] )
  i5076.transparency = i5077[18]
  i5076.bounds = i5077[19]
  i5076.pixelsPerUnit = i5077[20]
  i5076.textureWidth = i5077[21]
  i5076.textureHeight = i5077[22]
  i5076.nativeSize = new pc.Vec2( i5077[23], i5077[24] )
  i5076.pivot = new pc.Vec2( i5077[25], i5077[26] )
  i5076.textureRectOffset = new pc.Vec2( i5077[27], i5077[28] )
  return i5076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5079 = data
  i5078.name = i5079[0]
  return i5078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5081 = data
  i5080.name = i5081[0]
  i5080.wrapMode = i5081[1]
  i5080.isLooping = !!i5081[2]
  i5080.length = i5081[3]
  var i5083 = i5081[4]
  var i5082 = []
  for(var i = 0; i < i5083.length; i += 1) {
    i5082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5083[i + 0]) );
  }
  i5080.curves = i5082
  var i5085 = i5081[5]
  var i5084 = []
  for(var i = 0; i < i5085.length; i += 1) {
    i5084.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5085[i + 0]) );
  }
  i5080.events = i5084
  i5080.halfPrecision = !!i5081[6]
  i5080._frameRate = i5081[7]
  i5080.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5081[8], i5080.localBounds)
  i5080.hasMuscleCurves = !!i5081[9]
  var i5087 = i5081[10]
  var i5086 = []
  for(var i = 0; i < i5087.length; i += 1) {
    i5086.push( i5087[i + 0] );
  }
  i5080.clipMuscleConstant = i5086
  i5080.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5081[11], i5080.clipBindingConstant)
  return i5080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5091 = data
  i5090.path = i5091[0]
  i5090.hash = i5091[1]
  i5090.componentType = i5091[2]
  i5090.property = i5091[3]
  i5090.keys = i5091[4]
  var i5093 = i5091[5]
  var i5092 = []
  for(var i = 0; i < i5093.length; i += 1) {
    i5092.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5093[i + 0]) );
  }
  i5090.objectReferenceKeys = i5092
  return i5090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5097 = data
  i5096.time = i5097[0]
  request.r(i5097[1], i5097[2], 0, i5096, 'value')
  return i5096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5101 = data
  i5100.functionName = i5101[0]
  i5100.floatParameter = i5101[1]
  i5100.intParameter = i5101[2]
  i5100.stringParameter = i5101[3]
  request.r(i5101[4], i5101[5], 0, i5100, 'objectReferenceParameter')
  i5100.time = i5101[6]
  return i5100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5103 = data
  i5102.center = new pc.Vec3( i5103[0], i5103[1], i5103[2] )
  i5102.extends = new pc.Vec3( i5103[3], i5103[4], i5103[5] )
  return i5102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5107 = data
  var i5109 = i5107[0]
  var i5108 = []
  for(var i = 0; i < i5109.length; i += 1) {
    i5108.push( i5109[i + 0] );
  }
  i5106.genericBindings = i5108
  var i5111 = i5107[1]
  var i5110 = []
  for(var i = 0; i < i5111.length; i += 1) {
    i5110.push( i5111[i + 0] );
  }
  i5106.pptrCurveMapping = i5110
  return i5106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5113 = data
  i5112.name = i5113[0]
  i5112.ascent = i5113[1]
  i5112.originalLineHeight = i5113[2]
  i5112.fontSize = i5113[3]
  var i5115 = i5113[4]
  var i5114 = []
  for(var i = 0; i < i5115.length; i += 1) {
    i5114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5115[i + 0]) );
  }
  i5112.characterInfo = i5114
  request.r(i5113[5], i5113[6], 0, i5112, 'texture')
  i5112.originalFontSize = i5113[7]
  return i5112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5119 = data
  i5118.index = i5119[0]
  i5118.advance = i5119[1]
  i5118.bearing = i5119[2]
  i5118.glyphWidth = i5119[3]
  i5118.glyphHeight = i5119[4]
  i5118.minX = i5119[5]
  i5118.maxX = i5119[6]
  i5118.minY = i5119[7]
  i5118.maxY = i5119[8]
  i5118.uvBottomLeftX = i5119[9]
  i5118.uvBottomLeftY = i5119[10]
  i5118.uvBottomRightX = i5119[11]
  i5118.uvBottomRightY = i5119[12]
  i5118.uvTopLeftX = i5119[13]
  i5118.uvTopLeftY = i5119[14]
  i5118.uvTopRightX = i5119[15]
  i5118.uvTopRightY = i5119[16]
  return i5118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5121 = data
  i5120.name = i5121[0]
  var i5123 = i5121[1]
  var i5122 = []
  for(var i = 0; i < i5123.length; i += 1) {
    i5122.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5123[i + 0]) );
  }
  i5120.layers = i5122
  var i5125 = i5121[2]
  var i5124 = []
  for(var i = 0; i < i5125.length; i += 1) {
    i5124.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5125[i + 0]) );
  }
  i5120.parameters = i5124
  i5120.animationClips = i5121[3]
  i5120.avatarUnsupported = i5121[4]
  return i5120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5129 = data
  i5128.name = i5129[0]
  i5128.defaultWeight = i5129[1]
  i5128.blendingMode = i5129[2]
  i5128.avatarMask = i5129[3]
  i5128.syncedLayerIndex = i5129[4]
  i5128.syncedLayerAffectsTiming = !!i5129[5]
  i5128.syncedLayers = i5129[6]
  i5128.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5129[7], i5128.stateMachine)
  return i5128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5131 = data
  i5130.id = i5131[0]
  i5130.name = i5131[1]
  i5130.path = i5131[2]
  var i5133 = i5131[3]
  var i5132 = []
  for(var i = 0; i < i5133.length; i += 1) {
    i5132.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5133[i + 0]) );
  }
  i5130.states = i5132
  var i5135 = i5131[4]
  var i5134 = []
  for(var i = 0; i < i5135.length; i += 1) {
    i5134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5135[i + 0]) );
  }
  i5130.machines = i5134
  var i5137 = i5131[5]
  var i5136 = []
  for(var i = 0; i < i5137.length; i += 1) {
    i5136.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5137[i + 0]) );
  }
  i5130.entryStateTransitions = i5136
  var i5139 = i5131[6]
  var i5138 = []
  for(var i = 0; i < i5139.length; i += 1) {
    i5138.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5139[i + 0]) );
  }
  i5130.exitStateTransitions = i5138
  var i5141 = i5131[7]
  var i5140 = []
  for(var i = 0; i < i5141.length; i += 1) {
    i5140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5141[i + 0]) );
  }
  i5130.anyStateTransitions = i5140
  i5130.defaultStateId = i5131[8]
  return i5130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5145 = data
  i5144.id = i5145[0]
  i5144.name = i5145[1]
  i5144.cycleOffset = i5145[2]
  i5144.cycleOffsetParameter = i5145[3]
  i5144.cycleOffsetParameterActive = !!i5145[4]
  i5144.mirror = !!i5145[5]
  i5144.mirrorParameter = i5145[6]
  i5144.mirrorParameterActive = !!i5145[7]
  i5144.motionId = i5145[8]
  i5144.nameHash = i5145[9]
  i5144.fullPathHash = i5145[10]
  i5144.speed = i5145[11]
  i5144.speedParameter = i5145[12]
  i5144.speedParameterActive = !!i5145[13]
  i5144.tag = i5145[14]
  i5144.tagHash = i5145[15]
  i5144.writeDefaultValues = !!i5145[16]
  var i5147 = i5145[17]
  var i5146 = []
  for(var i = 0; i < i5147.length; i += 2) {
  request.r(i5147[i + 0], i5147[i + 1], 2, i5146, '')
  }
  i5144.behaviours = i5146
  var i5149 = i5145[18]
  var i5148 = []
  for(var i = 0; i < i5149.length; i += 1) {
    i5148.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5149[i + 0]) );
  }
  i5144.transitions = i5148
  return i5144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5155 = data
  i5154.fullPath = i5155[0]
  i5154.canTransitionToSelf = !!i5155[1]
  i5154.duration = i5155[2]
  i5154.exitTime = i5155[3]
  i5154.hasExitTime = !!i5155[4]
  i5154.hasFixedDuration = !!i5155[5]
  i5154.interruptionSource = i5155[6]
  i5154.offset = i5155[7]
  i5154.orderedInterruption = !!i5155[8]
  i5154.destinationStateId = i5155[9]
  i5154.isExit = !!i5155[10]
  i5154.mute = !!i5155[11]
  i5154.solo = !!i5155[12]
  var i5157 = i5155[13]
  var i5156 = []
  for(var i = 0; i < i5157.length; i += 1) {
    i5156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5157[i + 0]) );
  }
  i5154.conditions = i5156
  return i5154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5163 = data
  i5162.destinationStateId = i5163[0]
  i5162.isExit = !!i5163[1]
  i5162.mute = !!i5163[2]
  i5162.solo = !!i5163[3]
  var i5165 = i5163[4]
  var i5164 = []
  for(var i = 0; i < i5165.length; i += 1) {
    i5164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5165[i + 0]) );
  }
  i5162.conditions = i5164
  return i5162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5169 = data
  i5168.mode = i5169[0]
  i5168.parameter = i5169[1]
  i5168.threshold = i5169[2]
  return i5168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5173 = data
  i5172.defaultBool = !!i5173[0]
  i5172.defaultFloat = i5173[1]
  i5172.defaultInt = i5173[2]
  i5172.name = i5173[3]
  i5172.nameHash = i5173[4]
  i5172.type = i5173[5]
  return i5172
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5174 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5175 = data
  i5174.useSafeMode = !!i5175[0]
  i5174.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5175[1], i5174.safeModeOptions)
  i5174.timeScale = i5175[2]
  i5174.unscaledTimeScale = i5175[3]
  i5174.useSmoothDeltaTime = !!i5175[4]
  i5174.maxSmoothUnscaledTime = i5175[5]
  i5174.rewindCallbackMode = i5175[6]
  i5174.showUnityEditorReport = !!i5175[7]
  i5174.logBehaviour = i5175[8]
  i5174.drawGizmos = !!i5175[9]
  i5174.defaultRecyclable = !!i5175[10]
  i5174.defaultAutoPlay = i5175[11]
  i5174.defaultUpdateType = i5175[12]
  i5174.defaultTimeScaleIndependent = !!i5175[13]
  i5174.defaultEaseType = i5175[14]
  i5174.defaultEaseOvershootOrAmplitude = i5175[15]
  i5174.defaultEasePeriod = i5175[16]
  i5174.defaultAutoKill = !!i5175[17]
  i5174.defaultLoopType = i5175[18]
  i5174.debugMode = !!i5175[19]
  i5174.debugStoreTargetId = !!i5175[20]
  i5174.showPreviewPanel = !!i5175[21]
  i5174.storeSettingsLocation = i5175[22]
  i5174.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5175[23], i5174.modules)
  i5174.createASMDEF = !!i5175[24]
  i5174.showPlayingTweens = !!i5175[25]
  i5174.showPausedTweens = !!i5175[26]
  return i5174
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5176 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5177 = data
  i5176.logBehaviour = i5177[0]
  i5176.nestedTweenFailureBehaviour = i5177[1]
  return i5176
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5178 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5179 = data
  i5178.showPanel = !!i5179[0]
  i5178.audioEnabled = !!i5179[1]
  i5178.physicsEnabled = !!i5179[2]
  i5178.physics2DEnabled = !!i5179[3]
  i5178.spriteEnabled = !!i5179[4]
  i5178.uiEnabled = !!i5179[5]
  i5178.textMeshProEnabled = !!i5179[6]
  i5178.tk2DEnabled = !!i5179[7]
  i5178.deAudioEnabled = !!i5179[8]
  i5178.deUnityExtendedEnabled = !!i5179[9]
  i5178.epoOutlineEnabled = !!i5179[10]
  return i5178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5181 = data
  var i5183 = i5181[0]
  var i5182 = []
  for(var i = 0; i < i5183.length; i += 1) {
    i5182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5183[i + 0]) );
  }
  i5180.files = i5182
  i5180.componentToPrefabIds = i5181[1]
  return i5180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5187 = data
  i5186.path = i5187[0]
  request.r(i5187[1], i5187[2], 0, i5186, 'unityObject')
  return i5186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5189 = data
  var i5191 = i5189[0]
  var i5190 = []
  for(var i = 0; i < i5191.length; i += 1) {
    i5190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5191[i + 0]) );
  }
  i5188.scriptsExecutionOrder = i5190
  var i5193 = i5189[1]
  var i5192 = []
  for(var i = 0; i < i5193.length; i += 1) {
    i5192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5193[i + 0]) );
  }
  i5188.sortingLayers = i5192
  var i5195 = i5189[2]
  var i5194 = []
  for(var i = 0; i < i5195.length; i += 1) {
    i5194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5195[i + 0]) );
  }
  i5188.cullingLayers = i5194
  i5188.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5189[3], i5188.timeSettings)
  i5188.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5189[4], i5188.physicsSettings)
  i5188.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5189[5], i5188.physics2DSettings)
  i5188.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5189[6], i5188.qualitySettings)
  i5188.enableRealtimeShadows = !!i5189[7]
  i5188.enableAutoInstancing = !!i5189[8]
  i5188.enableStaticBatching = !!i5189[9]
  i5188.enableDynamicBatching = !!i5189[10]
  i5188.usePreservativeDynamicBatching = !!i5189[11]
  i5188.lightmapEncodingQuality = i5189[12]
  i5188.desiredColorSpace = i5189[13]
  var i5197 = i5189[14]
  var i5196 = []
  for(var i = 0; i < i5197.length; i += 1) {
    i5196.push( i5197[i + 0] );
  }
  i5188.allTags = i5196
  return i5188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5201 = data
  i5200.name = i5201[0]
  i5200.value = i5201[1]
  return i5200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5205 = data
  i5204.id = i5205[0]
  i5204.name = i5205[1]
  i5204.value = i5205[2]
  return i5204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5209 = data
  i5208.id = i5209[0]
  i5208.name = i5209[1]
  return i5208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5211 = data
  i5210.fixedDeltaTime = i5211[0]
  i5210.maximumDeltaTime = i5211[1]
  i5210.timeScale = i5211[2]
  i5210.maximumParticleTimestep = i5211[3]
  return i5210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5213 = data
  i5212.gravity = new pc.Vec3( i5213[0], i5213[1], i5213[2] )
  i5212.defaultSolverIterations = i5213[3]
  i5212.bounceThreshold = i5213[4]
  i5212.autoSyncTransforms = !!i5213[5]
  i5212.autoSimulation = !!i5213[6]
  var i5215 = i5213[7]
  var i5214 = []
  for(var i = 0; i < i5215.length; i += 1) {
    i5214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5215[i + 0]) );
  }
  i5212.collisionMatrix = i5214
  return i5212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5219 = data
  i5218.enabled = !!i5219[0]
  i5218.layerId = i5219[1]
  i5218.otherLayerId = i5219[2]
  return i5218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5221 = data
  request.r(i5221[0], i5221[1], 0, i5220, 'material')
  i5220.gravity = new pc.Vec2( i5221[2], i5221[3] )
  i5220.positionIterations = i5221[4]
  i5220.velocityIterations = i5221[5]
  i5220.velocityThreshold = i5221[6]
  i5220.maxLinearCorrection = i5221[7]
  i5220.maxAngularCorrection = i5221[8]
  i5220.maxTranslationSpeed = i5221[9]
  i5220.maxRotationSpeed = i5221[10]
  i5220.baumgarteScale = i5221[11]
  i5220.baumgarteTOIScale = i5221[12]
  i5220.timeToSleep = i5221[13]
  i5220.linearSleepTolerance = i5221[14]
  i5220.angularSleepTolerance = i5221[15]
  i5220.defaultContactOffset = i5221[16]
  i5220.autoSimulation = !!i5221[17]
  i5220.queriesHitTriggers = !!i5221[18]
  i5220.queriesStartInColliders = !!i5221[19]
  i5220.callbacksOnDisable = !!i5221[20]
  i5220.reuseCollisionCallbacks = !!i5221[21]
  i5220.autoSyncTransforms = !!i5221[22]
  var i5223 = i5221[23]
  var i5222 = []
  for(var i = 0; i < i5223.length; i += 1) {
    i5222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5223[i + 0]) );
  }
  i5220.collisionMatrix = i5222
  return i5220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5227 = data
  i5226.enabled = !!i5227[0]
  i5226.layerId = i5227[1]
  i5226.otherLayerId = i5227[2]
  return i5226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5229 = data
  var i5231 = i5229[0]
  var i5230 = []
  for(var i = 0; i < i5231.length; i += 1) {
    i5230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5231[i + 0]) );
  }
  i5228.qualityLevels = i5230
  var i5233 = i5229[1]
  var i5232 = []
  for(var i = 0; i < i5233.length; i += 1) {
    i5232.push( i5233[i + 0] );
  }
  i5228.names = i5232
  i5228.shadows = i5229[2]
  i5228.anisotropicFiltering = i5229[3]
  i5228.antiAliasing = i5229[4]
  i5228.lodBias = i5229[5]
  i5228.shadowCascades = i5229[6]
  i5228.shadowDistance = i5229[7]
  i5228.shadowmaskMode = i5229[8]
  i5228.shadowProjection = i5229[9]
  i5228.shadowResolution = i5229[10]
  i5228.softParticles = !!i5229[11]
  i5228.softVegetation = !!i5229[12]
  i5228.activeColorSpace = i5229[13]
  i5228.desiredColorSpace = i5229[14]
  i5228.masterTextureLimit = i5229[15]
  i5228.maxQueuedFrames = i5229[16]
  i5228.particleRaycastBudget = i5229[17]
  i5228.pixelLightCount = i5229[18]
  i5228.realtimeReflectionProbes = !!i5229[19]
  i5228.shadowCascade2Split = i5229[20]
  i5228.shadowCascade4Split = new pc.Vec3( i5229[21], i5229[22], i5229[23] )
  i5228.streamingMipmapsActive = !!i5229[24]
  i5228.vSyncCount = i5229[25]
  i5228.asyncUploadBufferSize = i5229[26]
  i5228.asyncUploadTimeSlice = i5229[27]
  i5228.billboardsFaceCameraPosition = !!i5229[28]
  i5228.shadowNearPlaneOffset = i5229[29]
  i5228.streamingMipmapsMemoryBudget = i5229[30]
  i5228.maximumLODLevel = i5229[31]
  i5228.streamingMipmapsAddAllCameras = !!i5229[32]
  i5228.streamingMipmapsMaxLevelReduction = i5229[33]
  i5228.streamingMipmapsRenderersPerFrame = i5229[34]
  i5228.resolutionScalingFixedDPIFactor = i5229[35]
  i5228.streamingMipmapsMaxFileIORequests = i5229[36]
  i5228.currentQualityLevel = i5229[37]
  return i5228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i5236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i5237 = data
  var i5239 = i5237[0]
  var i5238 = []
  for(var i = 0; i < i5239.length; i += 1) {
    i5238.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i5239[i + 0]) );
  }
  i5236.groups = i5238
  var i5241 = i5237[1]
  var i5240 = []
  for(var i = 0; i < i5241.length; i += 1) {
    i5240.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i5241[i + 0]) );
  }
  i5236.snapshots = i5240
  return i5236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i5244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i5245 = data
  i5244.id = i5245[0]
  i5244.childGroupIds = i5245[1]
  i5244.name = i5245[2]
  return i5244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i5248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i5249 = data
  i5248.id = i5249[0]
  var i5251 = i5249[1]
  var i5250 = []
  for(var i = 0; i < i5251.length; i += 1) {
    i5250.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i5251[i + 0]) );
  }
  i5248.parameters = i5250
  return i5248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i5254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i5255 = data
  i5254.name = i5255[0]
  i5254.value = i5255[1]
  return i5254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5259 = data
  i5258.weight = i5259[0]
  i5258.vertices = i5259[1]
  i5258.normals = i5259[2]
  i5258.tangents = i5259[3]
  return i5258
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[84],"85":[50],"86":[87],"88":[87],"89":[87],"90":[87],"91":[87],"92":[87],"93":[87],"94":[45],"95":[45],"96":[45],"97":[45],"98":[45],"99":[45],"100":[45],"101":[45],"102":[45],"103":[45],"104":[45],"105":[45],"106":[45],"107":[50],"108":[109],"110":[111],"112":[111],"61":[55],"113":[114],"115":[9],"31":[28],"116":[9],"117":[118],"119":[118],"35":[13],"48":[28],"120":[9],"121":[10],"27":[9],"122":[55],"123":[55],"64":[61],"56":[65,55],"124":[55],"63":[61],"125":[55],"126":[55],"127":[55],"128":[55],"129":[55],"130":[55],"131":[55],"132":[55],"133":[55],"134":[65,55],"135":[55],"136":[55],"137":[55],"138":[55],"57":[65,55],"139":[55],"140":[69],"141":[69],"70":[69],"142":[69],"143":[50],"144":[50]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level1_Hair_Playable_Step34","UnityEngine.SpriteRenderer","BasicDrag","OutlinePulse","UnityEngine.GameObject","DG.Tweening.DOTweenAnimation","UnityEngine.Sprite","UnityEngine.AudioClip","BD_CameraFollow","BD_Progress","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.TrailRenderer","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.BoxCollider2D","BD_Clamp","BD_ItemPick","BD_Sticky","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.SpriteMask","PlayTweenOnHit","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","InteractableBones","WaypointFollower","ActionOnTap","UnityEditor.Audio.AudioMixerGroupController","BD_ProgressHelper","BD_SpriteChange","BD_AnimatorDrag","UnityEngine.Rigidbody2D","PlaceItem","BD_Action","SpriteButton","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableRouter","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Fold","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","RadialCircleFill","TeaseTapCTA","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "18.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "4Sept2026_Lvl1_1_Step_3to4";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1752";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4303";

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

Deserializers.buildID = "99d2ad83-b8f2-4964-9625-e676659b9859";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

