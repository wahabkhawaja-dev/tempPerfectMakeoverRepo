var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4536 = root || request.c( 'UnityEngine.JointSpring' )
  var i4537 = data
  i4536.spring = i4537[0]
  i4536.damper = i4537[1]
  i4536.targetPosition = i4537[2]
  return i4536
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4538 = root || request.c( 'UnityEngine.JointMotor' )
  var i4539 = data
  i4538.m_TargetVelocity = i4539[0]
  i4538.m_Force = i4539[1]
  i4538.m_FreeSpin = i4539[2]
  return i4538
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4540 = root || request.c( 'UnityEngine.JointLimits' )
  var i4541 = data
  i4540.m_Min = i4541[0]
  i4540.m_Max = i4541[1]
  i4540.m_Bounciness = i4541[2]
  i4540.m_BounceMinVelocity = i4541[3]
  i4540.m_ContactDistance = i4541[4]
  i4540.minBounce = i4541[5]
  i4540.maxBounce = i4541[6]
  return i4540
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4542 = root || request.c( 'UnityEngine.JointDrive' )
  var i4543 = data
  i4542.m_PositionSpring = i4543[0]
  i4542.m_PositionDamper = i4543[1]
  i4542.m_MaximumForce = i4543[2]
  i4542.m_UseAcceleration = i4543[3]
  return i4542
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4544 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4545 = data
  i4544.m_Spring = i4545[0]
  i4544.m_Damper = i4545[1]
  return i4544
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4546 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4547 = data
  i4546.m_Limit = i4547[0]
  i4546.m_Bounciness = i4547[1]
  i4546.m_ContactDistance = i4547[2]
  return i4546
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4548 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4549 = data
  i4548.m_ExtremumSlip = i4549[0]
  i4548.m_ExtremumValue = i4549[1]
  i4548.m_AsymptoteSlip = i4549[2]
  i4548.m_AsymptoteValue = i4549[3]
  i4548.m_Stiffness = i4549[4]
  return i4548
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4550 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4551 = data
  i4550.m_LowerAngle = i4551[0]
  i4550.m_UpperAngle = i4551[1]
  return i4550
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4552 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4553 = data
  i4552.m_MotorSpeed = i4553[0]
  i4552.m_MaximumMotorTorque = i4553[1]
  return i4552
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4554 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4555 = data
  i4554.m_DampingRatio = i4555[0]
  i4554.m_Frequency = i4555[1]
  i4554.m_Angle = i4555[2]
  return i4554
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4556 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4557 = data
  i4556.m_LowerTranslation = i4557[0]
  i4556.m_UpperTranslation = i4557[1]
  return i4556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4558 = root || new pc.UnityMaterial()
  var i4559 = data
  i4558.name = i4559[0]
  request.r(i4559[1], i4559[2], 0, i4558, 'shader')
  i4558.renderQueue = i4559[3]
  i4558.enableInstancing = !!i4559[4]
  var i4561 = i4559[5]
  var i4560 = []
  for(var i = 0; i < i4561.length; i += 1) {
    i4560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4561[i + 0]) );
  }
  i4558.floatParameters = i4560
  var i4563 = i4559[6]
  var i4562 = []
  for(var i = 0; i < i4563.length; i += 1) {
    i4562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4563[i + 0]) );
  }
  i4558.colorParameters = i4562
  var i4565 = i4559[7]
  var i4564 = []
  for(var i = 0; i < i4565.length; i += 1) {
    i4564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4565[i + 0]) );
  }
  i4558.vectorParameters = i4564
  var i4567 = i4559[8]
  var i4566 = []
  for(var i = 0; i < i4567.length; i += 1) {
    i4566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4567[i + 0]) );
  }
  i4558.textureParameters = i4566
  var i4569 = i4559[9]
  var i4568 = []
  for(var i = 0; i < i4569.length; i += 1) {
    i4568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4569[i + 0]) );
  }
  i4558.materialFlags = i4568
  return i4558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4573 = data
  i4572.name = i4573[0]
  i4572.value = i4573[1]
  return i4572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4577 = data
  i4576.name = i4577[0]
  i4576.value = new pc.Color(i4577[1], i4577[2], i4577[3], i4577[4])
  return i4576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4581 = data
  i4580.name = i4581[0]
  i4580.value = new pc.Vec4( i4581[1], i4581[2], i4581[3], i4581[4] )
  return i4580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4585 = data
  i4584.name = i4585[0]
  request.r(i4585[1], i4585[2], 0, i4584, 'value')
  return i4584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4589 = data
  i4588.name = i4589[0]
  i4588.enabled = !!i4589[1]
  return i4588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4591 = data
  i4590.name = i4591[0]
  i4590.width = i4591[1]
  i4590.height = i4591[2]
  i4590.mipmapCount = i4591[3]
  i4590.anisoLevel = i4591[4]
  i4590.filterMode = i4591[5]
  i4590.hdr = !!i4591[6]
  i4590.format = i4591[7]
  i4590.wrapMode = i4591[8]
  i4590.alphaIsTransparency = !!i4591[9]
  i4590.alphaSource = i4591[10]
  i4590.graphicsFormat = i4591[11]
  i4590.sRGBTexture = !!i4591[12]
  i4590.desiredColorSpace = i4591[13]
  i4590.wrapU = i4591[14]
  i4590.wrapV = i4591[15]
  return i4590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4593 = data
  i4592.name = i4593[0]
  i4592.halfPrecision = !!i4593[1]
  i4592.useSimplification = !!i4593[2]
  i4592.useUInt32IndexFormat = !!i4593[3]
  i4592.vertexCount = i4593[4]
  i4592.aabb = i4593[5]
  var i4595 = i4593[6]
  var i4594 = []
  for(var i = 0; i < i4595.length; i += 1) {
    i4594.push( !!i4595[i + 0] );
  }
  i4592.streams = i4594
  i4592.vertices = i4593[7]
  var i4597 = i4593[8]
  var i4596 = []
  for(var i = 0; i < i4597.length; i += 1) {
    i4596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4597[i + 0]) );
  }
  i4592.subMeshes = i4596
  var i4599 = i4593[9]
  var i4598 = []
  for(var i = 0; i < i4599.length; i += 16) {
    i4598.push( new pc.Mat4().setData(i4599[i + 0], i4599[i + 1], i4599[i + 2], i4599[i + 3],  i4599[i + 4], i4599[i + 5], i4599[i + 6], i4599[i + 7],  i4599[i + 8], i4599[i + 9], i4599[i + 10], i4599[i + 11],  i4599[i + 12], i4599[i + 13], i4599[i + 14], i4599[i + 15]) );
  }
  i4592.bindposes = i4598
  var i4601 = i4593[10]
  var i4600 = []
  for(var i = 0; i < i4601.length; i += 1) {
    i4600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4601[i + 0]) );
  }
  i4592.blendShapes = i4600
  return i4592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4607 = data
  i4606.triangles = i4607[0]
  return i4606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4613 = data
  i4612.name = i4613[0]
  var i4615 = i4613[1]
  var i4614 = []
  for(var i = 0; i < i4615.length; i += 1) {
    i4614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4615[i + 0]) );
  }
  i4612.frames = i4614
  return i4612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4617 = data
  i4616.position = new pc.Vec3( i4617[0], i4617[1], i4617[2] )
  i4616.scale = new pc.Vec3( i4617[3], i4617[4], i4617[5] )
  i4616.rotation = new pc.Quat(i4617[6], i4617[7], i4617[8], i4617[9])
  return i4616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4619 = data
  i4618.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4619[0], i4618.main)
  i4618.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4619[1], i4618.colorBySpeed)
  i4618.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4619[2], i4618.colorOverLifetime)
  i4618.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4619[3], i4618.emission)
  i4618.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4619[4], i4618.rotationBySpeed)
  i4618.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4619[5], i4618.rotationOverLifetime)
  i4618.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4619[6], i4618.shape)
  i4618.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4619[7], i4618.sizeBySpeed)
  i4618.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4619[8], i4618.sizeOverLifetime)
  i4618.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4619[9], i4618.textureSheetAnimation)
  i4618.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4619[10], i4618.velocityOverLifetime)
  i4618.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4619[11], i4618.noise)
  i4618.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4619[12], i4618.inheritVelocity)
  i4618.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4619[13], i4618.forceOverLifetime)
  i4618.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4619[14], i4618.limitVelocityOverLifetime)
  i4618.useAutoRandomSeed = !!i4619[15]
  i4618.randomSeed = i4619[16]
  return i4618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4620 = root || new pc.ParticleSystemMain()
  var i4621 = data
  i4620.duration = i4621[0]
  i4620.loop = !!i4621[1]
  i4620.prewarm = !!i4621[2]
  i4620.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4621[3], i4620.startDelay)
  i4620.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4621[4], i4620.startLifetime)
  i4620.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4621[5], i4620.startSpeed)
  i4620.startSize3D = !!i4621[6]
  i4620.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4621[7], i4620.startSizeX)
  i4620.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4621[8], i4620.startSizeY)
  i4620.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4621[9], i4620.startSizeZ)
  i4620.startRotation3D = !!i4621[10]
  i4620.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4621[11], i4620.startRotationX)
  i4620.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4621[12], i4620.startRotationY)
  i4620.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4621[13], i4620.startRotationZ)
  i4620.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4621[14], i4620.startColor)
  i4620.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4621[15], i4620.gravityModifier)
  i4620.simulationSpace = i4621[16]
  request.r(i4621[17], i4621[18], 0, i4620, 'customSimulationSpace')
  i4620.simulationSpeed = i4621[19]
  i4620.useUnscaledTime = !!i4621[20]
  i4620.scalingMode = i4621[21]
  i4620.playOnAwake = !!i4621[22]
  i4620.maxParticles = i4621[23]
  i4620.emitterVelocityMode = i4621[24]
  i4620.stopAction = i4621[25]
  return i4620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4622 = root || new pc.MinMaxCurve()
  var i4623 = data
  i4622.mode = i4623[0]
  i4622.curveMin = new pc.AnimationCurve( { keys_flow: i4623[1] } )
  i4622.curveMax = new pc.AnimationCurve( { keys_flow: i4623[2] } )
  i4622.curveMultiplier = i4623[3]
  i4622.constantMin = i4623[4]
  i4622.constantMax = i4623[5]
  return i4622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4624 = root || new pc.MinMaxGradient()
  var i4625 = data
  i4624.mode = i4625[0]
  i4624.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4625[1], i4624.gradientMin)
  i4624.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4625[2], i4624.gradientMax)
  i4624.colorMin = new pc.Color(i4625[3], i4625[4], i4625[5], i4625[6])
  i4624.colorMax = new pc.Color(i4625[7], i4625[8], i4625[9], i4625[10])
  return i4624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4627 = data
  i4626.mode = i4627[0]
  var i4629 = i4627[1]
  var i4628 = []
  for(var i = 0; i < i4629.length; i += 1) {
    i4628.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4629[i + 0]) );
  }
  i4626.colorKeys = i4628
  var i4631 = i4627[2]
  var i4630 = []
  for(var i = 0; i < i4631.length; i += 1) {
    i4630.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4631[i + 0]) );
  }
  i4626.alphaKeys = i4630
  return i4626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4632 = root || new pc.ParticleSystemColorBySpeed()
  var i4633 = data
  i4632.enabled = !!i4633[0]
  i4632.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4633[1], i4632.color)
  i4632.range = new pc.Vec2( i4633[2], i4633[3] )
  return i4632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4637 = data
  i4636.color = new pc.Color(i4637[0], i4637[1], i4637[2], i4637[3])
  i4636.time = i4637[4]
  return i4636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4641 = data
  i4640.alpha = i4641[0]
  i4640.time = i4641[1]
  return i4640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4642 = root || new pc.ParticleSystemColorOverLifetime()
  var i4643 = data
  i4642.enabled = !!i4643[0]
  i4642.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4643[1], i4642.color)
  return i4642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4644 = root || new pc.ParticleSystemEmitter()
  var i4645 = data
  i4644.enabled = !!i4645[0]
  i4644.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4645[1], i4644.rateOverTime)
  i4644.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4645[2], i4644.rateOverDistance)
  var i4647 = i4645[3]
  var i4646 = []
  for(var i = 0; i < i4647.length; i += 1) {
    i4646.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4647[i + 0]) );
  }
  i4644.bursts = i4646
  return i4644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4650 = root || new pc.ParticleSystemBurst()
  var i4651 = data
  i4650.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4651[0], i4650.count)
  i4650.cycleCount = i4651[1]
  i4650.minCount = i4651[2]
  i4650.maxCount = i4651[3]
  i4650.repeatInterval = i4651[4]
  i4650.time = i4651[5]
  return i4650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4652 = root || new pc.ParticleSystemRotationBySpeed()
  var i4653 = data
  i4652.enabled = !!i4653[0]
  i4652.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4653[1], i4652.x)
  i4652.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4653[2], i4652.y)
  i4652.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4653[3], i4652.z)
  i4652.separateAxes = !!i4653[4]
  i4652.range = new pc.Vec2( i4653[5], i4653[6] )
  return i4652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4654 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4655 = data
  i4654.enabled = !!i4655[0]
  i4654.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4655[1], i4654.x)
  i4654.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4655[2], i4654.y)
  i4654.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4655[3], i4654.z)
  i4654.separateAxes = !!i4655[4]
  return i4654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4656 = root || new pc.ParticleSystemShape()
  var i4657 = data
  i4656.enabled = !!i4657[0]
  i4656.shapeType = i4657[1]
  i4656.randomDirectionAmount = i4657[2]
  i4656.sphericalDirectionAmount = i4657[3]
  i4656.randomPositionAmount = i4657[4]
  i4656.alignToDirection = !!i4657[5]
  i4656.radius = i4657[6]
  i4656.radiusMode = i4657[7]
  i4656.radiusSpread = i4657[8]
  i4656.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4657[9], i4656.radiusSpeed)
  i4656.radiusThickness = i4657[10]
  i4656.angle = i4657[11]
  i4656.length = i4657[12]
  i4656.boxThickness = new pc.Vec3( i4657[13], i4657[14], i4657[15] )
  i4656.meshShapeType = i4657[16]
  request.r(i4657[17], i4657[18], 0, i4656, 'mesh')
  request.r(i4657[19], i4657[20], 0, i4656, 'meshRenderer')
  request.r(i4657[21], i4657[22], 0, i4656, 'skinnedMeshRenderer')
  i4656.useMeshMaterialIndex = !!i4657[23]
  i4656.meshMaterialIndex = i4657[24]
  i4656.useMeshColors = !!i4657[25]
  i4656.normalOffset = i4657[26]
  i4656.arc = i4657[27]
  i4656.arcMode = i4657[28]
  i4656.arcSpread = i4657[29]
  i4656.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4657[30], i4656.arcSpeed)
  i4656.donutRadius = i4657[31]
  i4656.position = new pc.Vec3( i4657[32], i4657[33], i4657[34] )
  i4656.rotation = new pc.Vec3( i4657[35], i4657[36], i4657[37] )
  i4656.scale = new pc.Vec3( i4657[38], i4657[39], i4657[40] )
  return i4656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4658 = root || new pc.ParticleSystemSizeBySpeed()
  var i4659 = data
  i4658.enabled = !!i4659[0]
  i4658.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4659[1], i4658.x)
  i4658.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4659[2], i4658.y)
  i4658.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4659[3], i4658.z)
  i4658.separateAxes = !!i4659[4]
  i4658.range = new pc.Vec2( i4659[5], i4659[6] )
  return i4658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4660 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4661 = data
  i4660.enabled = !!i4661[0]
  i4660.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4661[1], i4660.x)
  i4660.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4661[2], i4660.y)
  i4660.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4661[3], i4660.z)
  i4660.separateAxes = !!i4661[4]
  return i4660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4662 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4663 = data
  i4662.enabled = !!i4663[0]
  i4662.mode = i4663[1]
  i4662.animation = i4663[2]
  i4662.numTilesX = i4663[3]
  i4662.numTilesY = i4663[4]
  i4662.useRandomRow = !!i4663[5]
  i4662.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4663[6], i4662.frameOverTime)
  i4662.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4663[7], i4662.startFrame)
  i4662.cycleCount = i4663[8]
  i4662.rowIndex = i4663[9]
  i4662.flipU = i4663[10]
  i4662.flipV = i4663[11]
  i4662.spriteCount = i4663[12]
  var i4665 = i4663[13]
  var i4664 = []
  for(var i = 0; i < i4665.length; i += 2) {
  request.r(i4665[i + 0], i4665[i + 1], 2, i4664, '')
  }
  i4662.sprites = i4664
  return i4662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4668 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4669 = data
  i4668.enabled = !!i4669[0]
  i4668.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4669[1], i4668.x)
  i4668.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4669[2], i4668.y)
  i4668.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4669[3], i4668.z)
  i4668.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4669[4], i4668.radial)
  i4668.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4669[5], i4668.speedModifier)
  i4668.space = i4669[6]
  i4668.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4669[7], i4668.orbitalX)
  i4668.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4669[8], i4668.orbitalY)
  i4668.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4669[9], i4668.orbitalZ)
  i4668.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4669[10], i4668.orbitalOffsetX)
  i4668.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4669[11], i4668.orbitalOffsetY)
  i4668.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4669[12], i4668.orbitalOffsetZ)
  return i4668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4670 = root || new pc.ParticleSystemNoise()
  var i4671 = data
  i4670.enabled = !!i4671[0]
  i4670.separateAxes = !!i4671[1]
  i4670.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4671[2], i4670.strengthX)
  i4670.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4671[3], i4670.strengthY)
  i4670.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4671[4], i4670.strengthZ)
  i4670.frequency = i4671[5]
  i4670.damping = !!i4671[6]
  i4670.octaveCount = i4671[7]
  i4670.octaveMultiplier = i4671[8]
  i4670.octaveScale = i4671[9]
  i4670.quality = i4671[10]
  i4670.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4671[11], i4670.scrollSpeed)
  i4670.scrollSpeedMultiplier = i4671[12]
  i4670.remapEnabled = !!i4671[13]
  i4670.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4671[14], i4670.remapX)
  i4670.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4671[15], i4670.remapY)
  i4670.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4671[16], i4670.remapZ)
  i4670.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4671[17], i4670.positionAmount)
  i4670.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4671[18], i4670.rotationAmount)
  i4670.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4671[19], i4670.sizeAmount)
  return i4670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4672 = root || new pc.ParticleSystemInheritVelocity()
  var i4673 = data
  i4672.enabled = !!i4673[0]
  i4672.mode = i4673[1]
  i4672.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4673[2], i4672.curve)
  return i4672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4674 = root || new pc.ParticleSystemForceOverLifetime()
  var i4675 = data
  i4674.enabled = !!i4675[0]
  i4674.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4675[1], i4674.x)
  i4674.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4675[2], i4674.y)
  i4674.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4675[3], i4674.z)
  i4674.space = i4675[4]
  i4674.randomized = !!i4675[5]
  return i4674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4676 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4677 = data
  i4676.enabled = !!i4677[0]
  i4676.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4677[1], i4676.limit)
  i4676.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4677[2], i4676.limitX)
  i4676.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4677[3], i4676.limitY)
  i4676.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4677[4], i4676.limitZ)
  i4676.dampen = i4677[5]
  i4676.separateAxes = !!i4677[6]
  i4676.space = i4677[7]
  i4676.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4677[8], i4676.drag)
  i4676.multiplyDragByParticleSize = !!i4677[9]
  i4676.multiplyDragByParticleVelocity = !!i4677[10]
  return i4676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4679 = data
  request.r(i4679[0], i4679[1], 0, i4678, 'mesh')
  i4678.meshCount = i4679[2]
  i4678.activeVertexStreamsCount = i4679[3]
  i4678.alignment = i4679[4]
  i4678.renderMode = i4679[5]
  i4678.sortMode = i4679[6]
  i4678.lengthScale = i4679[7]
  i4678.velocityScale = i4679[8]
  i4678.cameraVelocityScale = i4679[9]
  i4678.normalDirection = i4679[10]
  i4678.sortingFudge = i4679[11]
  i4678.minParticleSize = i4679[12]
  i4678.maxParticleSize = i4679[13]
  i4678.pivot = new pc.Vec3( i4679[14], i4679[15], i4679[16] )
  request.r(i4679[17], i4679[18], 0, i4678, 'trailMaterial')
  i4678.applyActiveColorSpace = !!i4679[19]
  i4678.enabled = !!i4679[20]
  request.r(i4679[21], i4679[22], 0, i4678, 'sharedMaterial')
  var i4681 = i4679[23]
  var i4680 = []
  for(var i = 0; i < i4681.length; i += 2) {
  request.r(i4681[i + 0], i4681[i + 1], 2, i4680, '')
  }
  i4678.sharedMaterials = i4680
  i4678.receiveShadows = !!i4679[24]
  i4678.shadowCastingMode = i4679[25]
  i4678.sortingLayerID = i4679[26]
  i4678.sortingOrder = i4679[27]
  i4678.lightmapIndex = i4679[28]
  i4678.lightmapSceneIndex = i4679[29]
  i4678.lightmapScaleOffset = new pc.Vec4( i4679[30], i4679[31], i4679[32], i4679[33] )
  i4678.lightProbeUsage = i4679[34]
  i4678.reflectionProbeUsage = i4679[35]
  return i4678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4685 = data
  i4684.name = i4685[0]
  i4684.tagId = i4685[1]
  i4684.enabled = !!i4685[2]
  i4684.isStatic = !!i4685[3]
  i4684.layer = i4685[4]
  return i4684
}

Deserializers["Level3_Crown_Playable"] = function (request, data, root) {
  var i4686 = root || request.c( 'Level3_Crown_Playable' )
  var i4687 = data
  i4686.MainZoom = request.d('ZoomPos', i4687[0], i4686.MainZoom)
  request.r(i4687[1], i4687[2], 0, i4686, 'View1')
  request.r(i4687[3], i4687[4], 0, i4686, 'View2')
  i4686.ZoomStep1 = request.d('ZoomPos', i4687[5], i4686.ZoomStep1)
  request.r(i4687[6], i4687[7], 0, i4686, 'ToolStep1')
  request.r(i4687[8], i4687[9], 0, i4686, 'ToolStep1CameraFollow')
  request.r(i4687[10], i4687[11], 0, i4686, 'Step1Col')
  request.r(i4687[12], i4687[13], 0, i4686, 'DustSR_1')
  i4686.ZoomStep2 = request.d('ZoomPos', i4687[14], i4686.ZoomStep2)
  request.r(i4687[15], i4687[16], 0, i4686, 'ToolStep2')
  request.r(i4687[17], i4687[18], 0, i4686, 'ToolStep2CameraFollow')
  var i4689 = i4687[19]
  var i4688 = []
  for(var i = 0; i < i4689.length; i += 2) {
  request.r(i4689[i + 0], i4689[i + 1], 2, i4688, '')
  }
  i4686.SRsToFadeOut_2 = i4688
  request.r(i4687[20], i4687[21], 0, i4686, 'SpraySR_2')
  i4686.ZoomStep3 = request.d('ZoomPos', i4687[22], i4686.ZoomStep3)
  request.r(i4687[23], i4687[24], 0, i4686, 'ToolStep3')
  request.r(i4687[25], i4687[26], 0, i4686, 'ToolStep3CameraFollow')
  request.r(i4687[27], i4687[28], 0, i4686, 'Step3Col')
  request.r(i4687[29], i4687[30], 0, i4686, 'Mix')
  request.r(i4687[31], i4687[32], 0, i4686, 'MixE')
  i4686.levelName = i4687[33]
  i4686.levelReward = i4687[34]
  request.r(i4687[35], i4687[36], 0, i4686, 'LevelIcon')
  request.r(i4687[37], i4687[38], 0, i4686, 'Level_BG')
  var i4691 = i4687[39]
  var i4690 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i4691.length; i += 2) {
  request.r(i4691[i + 0], i4691[i + 1], 1, i4690, '')
  }
  i4686.ToolIcons = i4690
  var i4693 = i4687[40]
  var i4692 = []
  for(var i = 0; i < i4693.length; i += 2) {
  request.r(i4693[i + 0], i4693[i + 1], 2, i4692, '')
  }
  i4686.AllDrags = i4692
  var i4695 = i4687[41]
  var i4694 = []
  for(var i = 0; i < i4695.length; i += 2) {
  request.r(i4695[i + 0], i4695[i + 1], 2, i4694, '')
  }
  i4686.AllSources = i4694
  var i4697 = i4687[42]
  var i4696 = []
  for(var i = 0; i < i4697.length; i += 2) {
  request.r(i4697[i + 0], i4697[i + 1], 2, i4696, '')
  }
  i4686.AllScratches = i4696
  i4686.stepsDone = i4687[43]
  i4686.levelNo = i4687[44]
  i4686.partNo = i4687[45]
  return i4686
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i4698 = root || request.c( 'ZoomPos' )
  var i4699 = data
  i4698.CameraPos = new pc.Vec3( i4699[0], i4699[1], i4699[2] )
  i4698.CameraFOV = i4699[3]
  return i4698
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i4710 = root || request.c( 'PlayableCTA' )
  var i4711 = data
  i4710.trigger = i4711[0]
  i4710.afterSeconds = i4711[1]
  i4710.afterTaps = i4711[2]
  request.r(i4711[3], i4711[4], 0, i4710, 'scratchProgress')
  i4710.scratchIndex = i4711[5]
  i4710.progressThreshold = i4711[6]
  request.r(i4711[7], i4711[8], 0, i4710, 'watchedTool')
  i4710.blockInputOnFire = !!i4711[9]
  i4710.refireOnEveryTap = !!i4711[10]
  i4710.refireDelay = i4711[11]
  i4710.showEndCard = !!i4711[12]
  request.r(i4711[13], i4711[14], 0, i4710, 'endCard')
  i4710.showEndCardOnProgressTrigger = !!i4711[15]
  i4710.showEndCardOnToolAppearTrigger = !!i4711[16]
  i4710.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i4711[17], i4710.onCtaFired)
  i4710.logWhenFired = !!i4711[18]
  return i4710
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i4712 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i4713 = data
  i4712.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4713[0], i4712.m_PersistentCalls)
  return i4712
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4714 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4715 = data
  var i4717 = i4715[0]
  var i4716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4717.length; i += 1) {
    i4716.add(request.d('UnityEngine.Events.PersistentCall', i4717[i + 0]));
  }
  i4714.m_Calls = i4716
  return i4714
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4720 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4721 = data
  request.r(i4721[0], i4721[1], 0, i4720, 'm_Target')
  i4720.m_TargetAssemblyTypeName = i4721[2]
  i4720.m_MethodName = i4721[3]
  i4720.m_Mode = i4721[4]
  i4720.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4721[5], i4720.m_Arguments)
  i4720.m_CallState = i4721[6]
  return i4720
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i4722 = root || request.c( 'PlayableFadeCoverSettings' )
  var i4723 = data
  i4722.revealDelay = i4723[0]
  i4722.revealDuration = i4723[1]
  return i4722
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i4724 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i4725 = data
  request.r(i4725[0], i4725[1], 0, i4724, 'MainCamera')
  i4724.RenderType = i4725[2]
  request.r(i4725[3], i4725[4], 0, i4724, 'ScratchSurfaceSprite')
  i4724.ScratchSurfaceSpriteHasAlpha = !!i4725[5]
  i4724.MaskProgressCutOffValue = i4725[6]
  request.r(i4725[7], i4725[8], 0, i4724, 'EraseTexture')
  i4724.EraseTextureScale = new pc.Vec2( i4725[9], i4725[10] )
  i4724.InputEnabled = !!i4725[11]
  request.r(i4725[12], i4725[13], 0, i4724, 'Card')
  i4724.Mode = i4725[14]
  request.r(i4725[15], i4725[16], 0, i4724, 'Progress')
  request.r(i4725[17], i4725[18], 0, i4724, 'MeshCard')
  request.r(i4725[19], i4725[20], 0, i4724, 'SpriteCard')
  request.r(i4725[21], i4725[22], 0, i4724, 'ImageCard')
  request.r(i4725[23], i4725[24], 0, i4724, 'MaskShader')
  request.r(i4725[25], i4725[26], 0, i4724, 'BrushShader')
  request.r(i4725[27], i4725[28], 0, i4724, 'MaskProgressShader')
  request.r(i4725[29], i4725[30], 0, i4724, 'MaskProgressCutOffShader')
  return i4724
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i4726 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i4727 = data
  request.r(i4727[0], i4727[1], 0, i4726, 'MainCamera')
  request.r(i4727[2], i4727[3], 0, i4726, 'Surface')
  i4726.RenderTextureQuality = i4727[4]
  request.r(i4727[5], i4727[6], 0, i4726, 'Eraser')
  request.r(i4727[7], i4727[8], 0, i4726, 'Progress')
  request.r(i4727[9], i4727[10], 0, i4726, 'ScratchSurface')
  request.r(i4727[11], i4727[12], 0, i4726, 'RenderTexture')
  i4726.BrushScale = new pc.Vec2( i4727[13], i4727[14] )
  request.r(i4727[15], i4727[16], 0, i4726, 'ToolTip')
  i4726.InputEnabled = !!i4727[17]
  i4726.IsScratching = !!i4727[18]
  i4726.useChangingScale = !!i4727[19]
  i4726.useGivenBrushScale = !!i4727[20]
  i4726.canSpreadMask = !!i4727[21]
  i4726.shouldPaintHoles = !!i4727[22]
  i4726.canRotateTip = !!i4727[23]
  i4726._mode = i4727[24]
  return i4726
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i4728 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i4729 = data
  request.r(i4729[0], i4729[1], 0, i4728, 'Card')
  i4728.currentProgress = i4729[2]
  return i4728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i4730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i4731 = data
  i4730.color = new pc.Color(i4731[0], i4731[1], i4731[2], i4731[3])
  request.r(i4731[4], i4731[5], 0, i4730, 'sprite')
  i4730.flipX = !!i4731[6]
  i4730.flipY = !!i4731[7]
  i4730.drawMode = i4731[8]
  i4730.size = new pc.Vec2( i4731[9], i4731[10] )
  i4730.tileMode = i4731[11]
  i4730.adaptiveModeThreshold = i4731[12]
  i4730.maskInteraction = i4731[13]
  i4730.spriteSortPoint = i4731[14]
  i4730.enabled = !!i4731[15]
  request.r(i4731[16], i4731[17], 0, i4730, 'sharedMaterial')
  var i4733 = i4731[18]
  var i4732 = []
  for(var i = 0; i < i4733.length; i += 2) {
  request.r(i4733[i + 0], i4733[i + 1], 2, i4732, '')
  }
  i4730.sharedMaterials = i4732
  i4730.receiveShadows = !!i4731[19]
  i4730.shadowCastingMode = i4731[20]
  i4730.sortingLayerID = i4731[21]
  i4730.sortingOrder = i4731[22]
  i4730.lightmapIndex = i4731[23]
  i4730.lightmapSceneIndex = i4731[24]
  i4730.lightmapScaleOffset = new pc.Vec4( i4731[25], i4731[26], i4731[27], i4731[28] )
  i4730.lightProbeUsage = i4731[29]
  i4730.reflectionProbeUsage = i4731[30]
  return i4730
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i4734 = root || request.c( 'PlayParticlesOnCollision' )
  var i4735 = data
  request.r(i4735[0], i4735[1], 0, i4734, 'Target')
  request.r(i4735[2], i4735[3], 0, i4734, 'ParticlePrefab')
  i4734.destroyIt = !!i4735[4]
  i4734.stayAtPlace = !!i4735[5]
  i4734.disableOnCollision = !!i4735[6]
  i4734.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i4735[7], i4734.OnCollisionEvent)
  return i4734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i4736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i4737 = data
  i4736.radius = i4737[0]
  i4736.enabled = !!i4737[1]
  i4736.isTrigger = !!i4737[2]
  i4736.usedByEffector = !!i4737[3]
  i4736.density = i4737[4]
  i4736.offset = new pc.Vec2( i4737[5], i4737[6] )
  request.r(i4737[7], i4737[8], 0, i4736, 'material')
  return i4736
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i4738 = root || request.c( 'PlaySfxOnCollision' )
  var i4739 = data
  request.r(i4739[0], i4739[1], 0, i4738, 'Tip')
  i4738.Mode = i4739[2]
  request.r(i4739[3], i4739[4], 0, i4738, 'DragInput')
  request.r(i4739[5], i4739[6], 0, i4738, 'Source')
  i4738.startVol = i4739[7]
  i4738.targetVol = i4739[8]
  i4738.duration = i4739[9]
  request.r(i4739[10], i4739[11], 0, i4738, 'Particles')
  i4738.isDone = !!i4739[12]
  i4738.isInArea = !!i4739[13]
  i4738.isPlaying = !!i4739[14]
  return i4738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4741 = data
  request.r(i4741[0], i4741[1], 0, i4740, 'clip')
  request.r(i4741[2], i4741[3], 0, i4740, 'outputAudioMixerGroup')
  i4740.playOnAwake = !!i4741[4]
  i4740.loop = !!i4741[5]
  i4740.time = i4741[6]
  i4740.volume = i4741[7]
  i4740.pitch = i4741[8]
  i4740.enabled = !!i4741[9]
  return i4740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i4742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i4743 = data
  i4742.usedByComposite = !!i4743[0]
  i4742.autoTiling = !!i4743[1]
  var i4745 = i4743[2]
  var i4744 = []
  for(var i = 0; i < i4745.length; i += 1) {
  var i4747 = i4745[i + 0]
  var i4746 = []
  for(var i = 0; i < i4747.length; i += 2) {
    i4746.push( new pc.Vec2( i4747[i + 0], i4747[i + 1] ) );
  }
    i4744.push( i4746 );
  }
  i4742.points = i4744
  i4742.enabled = !!i4743[3]
  i4742.isTrigger = !!i4743[4]
  i4742.usedByEffector = !!i4743[5]
  i4742.density = i4743[6]
  i4742.offset = new pc.Vec2( i4743[7], i4743[8] )
  request.r(i4743[9], i4743[10], 0, i4742, 'material')
  return i4742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i4754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i4755 = data
  i4754.usedByComposite = !!i4755[0]
  i4754.autoTiling = !!i4755[1]
  i4754.size = new pc.Vec2( i4755[2], i4755[3] )
  i4754.edgeRadius = i4755[4]
  i4754.enabled = !!i4755[5]
  i4754.isTrigger = !!i4755[6]
  i4754.usedByEffector = !!i4755[7]
  i4754.density = i4755[8]
  i4754.offset = new pc.Vec2( i4755[9], i4755[10] )
  request.r(i4755[11], i4755[12], 0, i4754, 'material')
  return i4754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4757 = data
  request.r(i4757[0], i4757[1], 0, i4756, 'animatorController')
  request.r(i4757[2], i4757[3], 0, i4756, 'avatar')
  i4756.updateMode = i4757[4]
  i4756.hasTransformHierarchy = !!i4757[5]
  i4756.applyRootMotion = !!i4757[6]
  var i4759 = i4757[7]
  var i4758 = []
  for(var i = 0; i < i4759.length; i += 2) {
  request.r(i4759[i + 0], i4759[i + 1], 2, i4758, '')
  }
  i4756.humanBones = i4758
  i4756.enabled = !!i4757[8]
  return i4756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i4762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i4763 = data
  i4762.frontSortingLayerID = i4763[0]
  i4762.frontSortingOrder = i4763[1]
  i4762.backSortingLayerID = i4763[2]
  i4762.backSortingOrder = i4763[3]
  i4762.alphaCutoff = i4763[4]
  request.r(i4763[5], i4763[6], 0, i4762, 'sprite')
  i4762.tileMode = i4763[7]
  i4762.isCustomRangeActive = !!i4763[8]
  i4762.spriteSortPoint = i4763[9]
  i4762.enabled = !!i4763[10]
  request.r(i4763[11], i4763[12], 0, i4762, 'sharedMaterial')
  var i4765 = i4763[13]
  var i4764 = []
  for(var i = 0; i < i4765.length; i += 2) {
  request.r(i4765[i + 0], i4765[i + 1], 2, i4764, '')
  }
  i4762.sharedMaterials = i4764
  i4762.receiveShadows = !!i4763[14]
  i4762.shadowCastingMode = i4763[15]
  i4762.sortingLayerID = i4763[16]
  i4762.sortingOrder = i4763[17]
  i4762.lightmapIndex = i4763[18]
  i4762.lightmapSceneIndex = i4763[19]
  i4762.lightmapScaleOffset = new pc.Vec4( i4763[20], i4763[21], i4763[22], i4763[23] )
  i4762.lightProbeUsage = i4763[24]
  i4762.reflectionProbeUsage = i4763[25]
  return i4762
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i4766 = root || request.c( 'BasicDrag' )
  var i4767 = data
  i4766.canDrag = !!i4767[0]
  i4766.dragByDelta = !!i4767[1]
  i4766.isDragging = !!i4767[2]
  i4766.moveWithPointer = !!i4767[3]
  i4766.canReturn = !!i4767[4]
  i4766.jumpOnReturn = !!i4767[5]
  i4766.returnTime = i4767[6]
  i4766.Tool_Offset = new pc.Vec3( i4767[7], i4767[8], i4767[9] )
  i4766.canScaleIncrease = !!i4767[10]
  i4766.Self_ScaleNew = new pc.Vec3( i4767[11], i4767[12], i4767[13] )
  i4766.canRotateOnPick = !!i4767[14]
  i4766.startRot = new pc.Vec3( i4767[15], i4767[16], i4767[17] )
  i4766.newRot = new pc.Vec3( i4767[18], i4767[19], i4767[20] )
  var i4769 = i4767[21]
  var i4768 = []
  for(var i = 0; i < i4769.length; i += 2) {
  request.r(i4769[i + 0], i4769[i + 1], 2, i4768, '')
  }
  i4766.childSprite = i4768
  request.r(i4767[22], i4767[23], 0, i4766, 'ToolSelectClip')
  request.r(i4767[24], i4767[25], 0, i4766, 'ToolLoopClip')
  request.r(i4767[26], i4767[27], 0, i4766, 'thisParticles')
  i4766.onDragparticle = !!i4767[28]
  request.r(i4767[29], i4767[30], 0, i4766, 'dragParticles')
  request.r(i4767[31], i4767[32], 0, i4766, 'anim')
  i4766.startPos = new pc.Vec3( i4767[33], i4767[34], i4767[35] )
  i4766.startScale = new pc.Vec3( i4767[36], i4767[37], i4767[38] )
  i4766.Vibration = !!i4767[39]
  i4766.isPlacedCannotMove = !!i4767[40]
  i4766.isObjectMovingWhileDragging = !!i4767[41]
  i4766.OnMouseDownEvent = request.d('System.Action', i4767[42], i4766.OnMouseDownEvent)
  i4766.OnMouseUpEvent = request.d('System.Action', i4767[43], i4766.OnMouseUpEvent)
  i4766.ProgStartEvent = request.d('System.Action', i4767[44], i4766.ProgStartEvent)
  i4766.ProgEndEvent = request.d('System.Action', i4767[45], i4766.ProgEndEvent)
  i4766.canCallMouseUpWhenGamePaused = !!i4767[46]
  i4766.ClampX_L = i4767[47]
  i4766.ClampX_H = i4767[48]
  i4766.ClampY_L = i4767[49]
  i4766.ClampY_H = i4767[50]
  i4766.startOrder = i4767[51]
  i4766.dontResetItIsInCollider = !!i4767[52]
  request.r(i4767[53], i4767[54], 0, i4766, 'thisCollider')
  request.r(i4767[55], i4767[56], 0, i4766, 'thisSR')
  i4766.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i4767[57], i4766.OnMouseDownEventIndependentFromCanDrag)
  return i4766
}

Deserializers["System.Action"] = function (request, data, root) {
  var i4770 = root || request.c( 'System.Action' )
  var i4771 = data
  return i4770
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i4772 = root || request.c( 'BD_Progress' )
  var i4773 = data
  var i4775 = i4773[0]
  var i4774 = []
  for(var i = 0; i < i4775.length; i += 1) {
    i4774.push( request.d('ScratchData', i4775[i + 0]) );
  }
  i4772.AllScratches = i4774
  i4772.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i4773[1], i4772.OnScratchComplete)
  i4772.isProgDone = !!i4773[2]
  i4772.canCallComplete = !!i4773[3]
  i4772.CollectiveAppear = !!i4773[4]
  i4772.tipControl = !!i4773[5]
  i4772.progressControl = !!i4773[6]
  request.r(i4773[7], i4773[8], 0, i4772, 'thisDrag')
  i4772.CompleteEvent = request.d('System.Action', i4773[9], i4772.CompleteEvent)
  i4772.SubCompleteEvent = request.d('System.Action', i4773[10], i4772.SubCompleteEvent)
  return i4772
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i4778 = root || request.c( 'ScratchData' )
  var i4779 = data
  request.r(i4779[0], i4779[1], 0, i4778, 'ScratchManager')
  i4778.scratchLimit = i4779[2]
  i4778.isComplete = !!i4779[3]
  return i4778
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4780 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4781 = data
  request.r(i4781[0], i4781[1], 0, i4780, 'm_ObjectArgument')
  i4780.m_ObjectArgumentAssemblyTypeName = i4781[2]
  i4780.m_IntArgument = i4781[3]
  i4780.m_FloatArgument = i4781[4]
  i4780.m_StringArgument = i4781[5]
  i4780.m_BoolArgument = !!i4781[6]
  return i4780
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i4782 = root || request.c( 'BD_Clamp' )
  var i4783 = data
  i4782.ClampX_L = i4783[0]
  i4782.ClampX_H = i4783[1]
  i4782.ClampY_L = i4783[2]
  i4782.ClampY_H = i4783[3]
  return i4782
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i4784 = root || request.c( 'BD_ToolRotate' )
  var i4785 = data
  i4784.startDelay = i4785[0]
  request.r(i4785[1], i4785[2], 0, i4784, 'Tool')
  request.r(i4785[3], i4785[4], 0, i4784, 'Clamp')
  request.r(i4785[5], i4785[6], 0, i4784, 'Pivot')
  i4784.MinAngle = new pc.Vec3( i4785[7], i4785[8], i4785[9] )
  i4784.MaxAngle = new pc.Vec3( i4785[10], i4785[11], i4785[12] )
  i4784.rotationSpeed = i4785[13]
  return i4784
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i4786 = root || request.c( 'BD_CameraFollow' )
  var i4787 = data
  request.r(i4787[0], i4787[1], 0, i4786, 'Tool')
  request.r(i4787[2], i4787[3], 0, i4786, 'Pivot')
  i4786.FOV = i4787[4]
  i4786.Y_L = i4787[5]
  i4786.Y_H = i4787[6]
  i4786.X_L = i4787[7]
  i4786.X_R = i4787[8]
  i4786.startDelay = i4787[9]
  i4786.duration = i4787[10]
  return i4786
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i4788 = root || request.c( 'BD_AnimatorDrag' )
  var i4789 = data
  request.r(i4789[0], i4789[1], 0, i4788, 'BD')
  request.r(i4789[2], i4789[3], 0, i4788, 'anim')
  request.r(i4789[4], i4789[5], 0, i4788, 'Source')
  i4788.Vibration = !!i4789[6]
  i4788.isCompletable = !!i4789[7]
  i4788.completionThreshold = i4789[8]
  i4788.OnComplete = request.d('UnityEngine.Events.UnityEvent', i4789[9], i4788.OnComplete)
  return i4788
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i4790 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i4791 = data
  request.r(i4791[0], i4791[1], 0, i4790, 'm_RootBone')
  var i4793 = i4791[2]
  var i4792 = []
  for(var i = 0; i < i4793.length; i += 2) {
  request.r(i4793[i + 0], i4793[i + 1], 2, i4792, '')
  }
  i4790.m_BoneTransforms = i4792
  i4790.m_AlwaysUpdate = !!i4791[3]
  i4790.m_AutoRebind = !!i4791[4]
  return i4790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i4794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i4795 = data
  i4794.bodyType = i4795[0]
  request.r(i4795[1], i4795[2], 0, i4794, 'material')
  i4794.simulated = !!i4795[3]
  i4794.useAutoMass = !!i4795[4]
  i4794.mass = i4795[5]
  i4794.drag = i4795[6]
  i4794.angularDrag = i4795[7]
  i4794.gravityScale = i4795[8]
  i4794.collisionDetectionMode = i4795[9]
  i4794.sleepMode = i4795[10]
  i4794.constraints = i4795[11]
  return i4794
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i4796 = root || request.c( 'BD_SpriteChange' )
  var i4797 = data
  request.r(i4797[0], i4797[1], 0, i4796, 'BD')
  request.r(i4797[2], i4797[3], 0, i4796, 'SR')
  request.r(i4797[4], i4797[5], 0, i4796, 'Default')
  request.r(i4797[6], i4797[7], 0, i4796, 'Picked')
  i4796.resetOnRelease = !!i4797[8]
  return i4796
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i4798 = root || request.c( 'BD_ProgressHelper' )
  var i4799 = data
  request.r(i4799[0], i4799[1], 0, i4798, 'BD_Progress')
  request.r(i4799[2], i4799[3], 0, i4798, 'fadeSprite')
  i4798.fadeIn = !!i4799[4]
  return i4798
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i4800 = root || request.c( 'DestroyObj' )
  var i4801 = data
  i4800.destroyDelay = i4801[0]
  return i4800
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i4802 = root || request.c( 'MenuLevel' )
  var i4803 = data
  request.r(i4803[0], i4803[1], 0, i4802, 'menuLevelBtnUpdate')
  var i4805 = i4803[2]
  var i4804 = []
  for(var i = 0; i < i4805.length; i += 1) {
    i4804.push( request.d('MenuLevelData', i4805[i + 0]) );
  }
  i4802.AllSteps = i4804
  request.r(i4803[3], i4803[4], 0, i4802, 'buttonparent')
  var i4807 = i4803[5]
  var i4806 = []
  for(var i = 0; i < i4807.length; i += 2) {
  request.r(i4807[i + 0], i4807[i + 1], 2, i4806, '')
  }
  i4802.BtnsDotweenAnims = i4806
  var i4809 = i4803[6]
  var i4808 = []
  for(var i = 0; i < i4809.length; i += 2) {
  request.r(i4809[i + 0], i4809[i + 1], 2, i4808, '')
  }
  i4802.BtnsCols = i4808
  request.r(i4803[7], i4803[8], 0, i4802, 'mainGameView')
  request.r(i4803[9], i4803[10], 0, i4802, 'Storyboard')
  request.r(i4803[11], i4803[12], 0, i4802, 'BgMusic')
  request.r(i4803[13], i4803[14], 0, i4802, 'BgStoryMusic')
  request.r(i4803[15], i4803[16], 0, i4802, 'Hand_Tut1')
  var i4811 = i4803[17]
  var i4810 = []
  for(var i = 0; i < i4811.length; i += 2) {
  request.r(i4811[i + 0], i4811[i + 1], 2, i4810, '')
  }
  i4802.itemEnable_Onstart = i4810
  var i4813 = i4803[18]
  var i4812 = []
  for(var i = 0; i < i4813.length; i += 2) {
  request.r(i4813[i + 0], i4813[i + 1], 2, i4812, '')
  }
  i4802.itemDisable_Onstart = i4812
  var i4815 = i4803[19]
  var i4814 = []
  for(var i = 0; i < i4815.length; i += 2) {
  request.r(i4815[i + 0], i4815[i + 1], 2, i4814, '')
  }
  i4802.itemEnable_Oncomplete = i4814
  var i4817 = i4803[20]
  var i4816 = []
  for(var i = 0; i < i4817.length; i += 2) {
  request.r(i4817[i + 0], i4817[i + 1], 2, i4816, '')
  }
  i4802.itemDisable_Oncomplete = i4816
  i4802.levelKey = i4803[21]
  i4802.revealDirtyHoldTime = i4803[22]
  return i4802
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i4820 = root || request.c( 'MenuLevelData' )
  var i4821 = data
  i4820.Name = i4821[0]
  request.r(i4821[1], i4821[2], 0, i4820, 'UiBtn')
  request.r(i4821[3], i4821[4], 0, i4820, 'TickBtn')
  request.r(i4821[5], i4821[6], 0, i4820, 'ExclamationIcon')
  var i4823 = i4821[7]
  var i4822 = []
  for(var i = 0; i < i4823.length; i += 2) {
  request.r(i4823[i + 0], i4823[i + 1], 2, i4822, '')
  }
  i4820.Item_Dirty = i4822
  var i4825 = i4821[8]
  var i4824 = []
  for(var i = 0; i < i4825.length; i += 2) {
  request.r(i4825[i + 0], i4825[i + 1], 2, i4824, '')
  }
  i4820.Item_Clean = i4824
  request.r(i4821[9], i4821[10], 0, i4820, 'CompleteParticle')
  return i4820
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i4832 = root || request.c( 'Level_PoseController' )
  var i4833 = data
  var i4835 = i4833[0]
  var i4834 = []
  for(var i = 0; i < i4835.length; i += 2) {
  request.r(i4835[i + 0], i4835[i + 1], 2, i4834, '')
  }
  i4832.itemToShow = i4834
  var i4837 = i4833[1]
  var i4836 = []
  for(var i = 0; i < i4837.length; i += 2) {
  request.r(i4837[i + 0], i4837[i + 1], 2, i4836, '')
  }
  i4832.itemToHide = i4836
  i4832.stepTarget = i4833[2]
  return i4832
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i4838 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i4839 = data
  i4838.targetIsSelf = !!i4839[0]
  request.r(i4839[1], i4839[2], 0, i4838, 'targetGO')
  i4838.tweenTargetIsTargetGO = !!i4839[3]
  i4838.delay = i4839[4]
  i4838.duration = i4839[5]
  i4838.easeType = i4839[6]
  i4838.easeCurve = new pc.AnimationCurve( { keys_flow: i4839[7] } )
  i4838.loopType = i4839[8]
  i4838.loops = i4839[9]
  i4838.id = i4839[10]
  i4838.isRelative = !!i4839[11]
  i4838.isFrom = !!i4839[12]
  i4838.isIndependentUpdate = !!i4839[13]
  i4838.autoKill = !!i4839[14]
  i4838.autoGenerate = !!i4839[15]
  i4838.isActive = !!i4839[16]
  i4838.isValid = !!i4839[17]
  request.r(i4839[18], i4839[19], 0, i4838, 'target')
  i4838.animationType = i4839[20]
  i4838.targetType = i4839[21]
  i4838.forcedTargetType = i4839[22]
  i4838.autoPlay = !!i4839[23]
  i4838.useTargetAsV3 = !!i4839[24]
  i4838.endValueFloat = i4839[25]
  i4838.endValueV3 = new pc.Vec3( i4839[26], i4839[27], i4839[28] )
  i4838.endValueV2 = new pc.Vec2( i4839[29], i4839[30] )
  i4838.endValueColor = new pc.Color(i4839[31], i4839[32], i4839[33], i4839[34])
  i4838.endValueString = i4839[35]
  i4838.endValueRect = UnityEngine.Rect.MinMaxRect(i4839[36], i4839[37], i4839[38], i4839[39])
  request.r(i4839[40], i4839[41], 0, i4838, 'endValueTransform')
  i4838.optionalBool0 = !!i4839[42]
  i4838.optionalBool1 = !!i4839[43]
  i4838.optionalFloat0 = i4839[44]
  i4838.optionalInt0 = i4839[45]
  i4838.optionalRotationMode = i4839[46]
  i4838.optionalScrambleMode = i4839[47]
  i4838.optionalShakeRandomnessMode = i4839[48]
  i4838.optionalString = i4839[49]
  i4838.updateType = i4839[50]
  i4838.isSpeedBased = !!i4839[51]
  i4838.hasOnStart = !!i4839[52]
  i4838.hasOnPlay = !!i4839[53]
  i4838.hasOnUpdate = !!i4839[54]
  i4838.hasOnStepComplete = !!i4839[55]
  i4838.hasOnComplete = !!i4839[56]
  i4838.hasOnTweenCreated = !!i4839[57]
  i4838.hasOnRewind = !!i4839[58]
  i4838.onStart = request.d('UnityEngine.Events.UnityEvent', i4839[59], i4838.onStart)
  i4838.onPlay = request.d('UnityEngine.Events.UnityEvent', i4839[60], i4838.onPlay)
  i4838.onUpdate = request.d('UnityEngine.Events.UnityEvent', i4839[61], i4838.onUpdate)
  i4838.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i4839[62], i4838.onStepComplete)
  i4838.onComplete = request.d('UnityEngine.Events.UnityEvent', i4839[63], i4838.onComplete)
  i4838.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i4839[64], i4838.onTweenCreated)
  i4838.onRewind = request.d('UnityEngine.Events.UnityEvent', i4839[65], i4838.onRewind)
  return i4838
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i4840 = root || request.c( 'SpriteButton' )
  var i4841 = data
  i4840.isLocked = !!i4841[0]
  i4840.lockMsg = i4841[1]
  i4840.onClick = request.d('UnityEngine.Events.UnityEvent', i4841[2], i4840.onClick)
  i4840.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i4841[3], i4840.onLockedClick)
  i4840.isLevelBtnSfx = !!i4841[4]
  request.r(i4841[5], i4841[6], 0, i4840, 'pivot')
  i4840.reductionChange = i4841[7]
  i4840.animationDuration = i4841[8]
  return i4840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i4842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i4843 = data
  i4842.name = i4843[0]
  i4842.atlasId = i4843[1]
  i4842.mipmapCount = i4843[2]
  i4842.hdr = !!i4843[3]
  i4842.size = i4843[4]
  i4842.anisoLevel = i4843[5]
  i4842.filterMode = i4843[6]
  var i4845 = i4843[7]
  var i4844 = []
  for(var i = 0; i < i4845.length; i += 4) {
    i4844.push( UnityEngine.Rect.MinMaxRect(i4845[i + 0], i4845[i + 1], i4845[i + 2], i4845[i + 3]) );
  }
  i4842.rects = i4844
  i4842.wrapU = i4843[8]
  i4842.wrapV = i4843[9]
  return i4842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4849 = data
  i4848.name = i4849[0]
  i4848.index = i4849[1]
  i4848.startup = !!i4849[2]
  return i4848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4851 = data
  i4850.aspect = i4851[0]
  i4850.orthographic = !!i4851[1]
  i4850.orthographicSize = i4851[2]
  i4850.backgroundColor = new pc.Color(i4851[3], i4851[4], i4851[5], i4851[6])
  i4850.nearClipPlane = i4851[7]
  i4850.farClipPlane = i4851[8]
  i4850.fieldOfView = i4851[9]
  i4850.depth = i4851[10]
  i4850.clearFlags = i4851[11]
  i4850.cullingMask = i4851[12]
  i4850.rect = i4851[13]
  request.r(i4851[14], i4851[15], 0, i4850, 'targetTexture')
  i4850.usePhysicalProperties = !!i4851[16]
  i4850.focalLength = i4851[17]
  i4850.sensorSize = new pc.Vec2( i4851[18], i4851[19] )
  i4850.lensShift = new pc.Vec2( i4851[20], i4851[21] )
  i4850.gateFit = i4851[22]
  i4850.commandBufferCount = i4851[23]
  i4850.cameraType = i4851[24]
  i4850.enabled = !!i4851[25]
  return i4850
}

Deserializers["CameraController"] = function (request, data, root) {
  var i4852 = root || request.c( 'CameraController' )
  var i4853 = data
  request.r(i4853[0], i4853[1], 0, i4852, 'cam')
  i4852.defaultPosition = new pc.Vec3( i4853[2], i4853[3], i4853[4] )
  i4852.defaultSize = i4853[5]
  i4852.defaultFOV = i4853[6]
  i4852.defaultDuration = i4853[7]
  i4852.defaultEase = i4853[8]
  return i4852
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i4854 = root || request.c( 'MusicSource' )
  var i4855 = data
  request.r(i4855[0], i4855[1], 0, i4854, 'source')
  return i4854
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i4856 = root || request.c( 'UI_Manager' )
  var i4857 = data
  i4856.levelCompleted = !!i4857[0]
  i4856.isPauseActive = !!i4857[1]
  i4856.loadIndex = i4857[2]
  request.r(i4857[3], i4857[4], 0, i4856, 'removeAdsButton')
  request.r(i4857[5], i4857[6], 0, i4856, 'pauseButton')
  request.r(i4857[7], i4857[8], 0, i4856, 'Fade_Img')
  request.r(i4857[9], i4857[10], 0, i4856, 'TopBarAnim')
  request.r(i4857[11], i4857[12], 0, i4856, 'MainPanel')
  request.r(i4857[13], i4857[14], 0, i4856, 'PausePanel')
  request.r(i4857[15], i4857[16], 0, i4856, 'PausePopUp')
  request.r(i4857[17], i4857[18], 0, i4856, 'PauseCanvasGroup')
  request.r(i4857[19], i4857[20], 0, i4856, 'RateUsPanel')
  request.r(i4857[21], i4857[22], 0, i4856, 'RateUsPopUp')
  request.r(i4857[23], i4857[24], 0, i4856, 'RemoveAdsPanel')
  request.r(i4857[25], i4857[26], 0, i4856, 'RemoveAdsPopUp')
  request.r(i4857[27], i4857[28], 0, i4856, 'RemoveAdsCanvasGroup')
  var i4859 = i4857[29]
  var i4858 = []
  for(var i = 0; i < i4859.length; i += 2) {
  request.r(i4859[i + 0], i4859[i + 1], 2, i4858, '')
  }
  i4856.RemoveAdsAnims = i4858
  request.r(i4857[30], i4857[31], 0, i4856, 'CompletePanel')
  request.r(i4857[32], i4857[33], 0, i4856, 'LevelIcon')
  request.r(i4857[34], i4857[35], 0, i4856, 'CompleteParticles')
  request.r(i4857[36], i4857[37], 0, i4856, 'progressBar')
  request.r(i4857[38], i4857[39], 0, i4856, 'progressText')
  request.r(i4857[40], i4857[41], 0, i4856, 'toolIcon1')
  request.r(i4857[42], i4857[43], 0, i4856, 'toolIcon2')
  request.r(i4857[44], i4857[45], 0, i4856, 'toolIcon3')
  request.r(i4857[46], i4857[47], 0, i4856, 'target1')
  request.r(i4857[48], i4857[49], 0, i4856, 'target2')
  i4856.toolMoveDuration = i4857[50]
  i4856.currentIndex = i4857[51]
  var i4861 = i4857[52]
  var i4860 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i4861.length; i += 2) {
  request.r(i4861[i + 0], i4861[i + 1], 1, i4860, '')
  }
  i4856.allTools = i4860
  request.r(i4857[53], i4857[54], 0, i4856, 'clockProgress')
  request.r(i4857[55], i4857[56], 0, i4856, 'clockProgressFill')
  request.r(i4857[57], i4857[58], 0, i4856, 'clockAudio')
  i4856.moveDistance = i4857[59]
  i4856.animationDuration = i4857[60]
  i4856.greyBgChildName = i4857[61]
  i4856.pushOffset = i4857[62]
  return i4856
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i4862 = root || request.c( 'GameManagerPlayable' )
  var i4863 = data
  request.r(i4863[0], i4863[1], 0, i4862, 'endParticles')
  request.r(i4863[2], i4863[3], 0, i4862, 'stepCompleteParticles')
  request.r(i4863[4], i4863[5], 0, i4862, 'DefaultMat')
  request.r(i4863[6], i4863[7], 0, i4862, 'BG_Music')
  request.r(i4863[8], i4863[9], 0, i4862, 'restoreEffectShader')
  request.r(i4863[10], i4863[11], 0, i4862, 'stickerEffectShader')
  i4862.isComplete = !!i4863[12]
  i4862.isPaused = !!i4863[13]
  request.r(i4863[14], i4863[15], 0, i4862, 'currentLevel')
  i4862.startLevelOnPlay = !!i4863[16]
  i4862.currentLevelNo = i4863[17]
  return i4862
}

Deserializers["AudioController"] = function (request, data, root) {
  var i4864 = root || request.c( 'AudioController' )
  var i4865 = data
  request.r(i4865[0], i4865[1], 0, i4864, 'MainMixer')
  request.r(i4865[2], i4865[3], 0, i4864, 'UiClick')
  request.r(i4865[4], i4865[5], 0, i4864, 'UiClickSource')
  var i4867 = i4865[6]
  var i4866 = []
  for(var i = 0; i < i4867.length; i += 2) {
  request.r(i4867[i + 0], i4867[i + 1], 2, i4866, '')
  }
  i4864.SfxSources = i4866
  var i4869 = i4865[7]
  var i4868 = []
  for(var i = 0; i < i4869.length; i += 2) {
  request.r(i4869[i + 0], i4869[i + 1], 2, i4868, '')
  }
  i4864.AllClips = i4868
  return i4864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4873 = data
  i4872.pivot = new pc.Vec2( i4873[0], i4873[1] )
  i4872.anchorMin = new pc.Vec2( i4873[2], i4873[3] )
  i4872.anchorMax = new pc.Vec2( i4873[4], i4873[5] )
  i4872.sizeDelta = new pc.Vec2( i4873[6], i4873[7] )
  i4872.anchoredPosition3D = new pc.Vec3( i4873[8], i4873[9], i4873[10] )
  i4872.rotation = new pc.Quat(i4873[11], i4873[12], i4873[13], i4873[14])
  i4872.scale = new pc.Vec3( i4873[15], i4873[16], i4873[17] )
  return i4872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4875 = data
  i4874.planeDistance = i4875[0]
  i4874.referencePixelsPerUnit = i4875[1]
  i4874.isFallbackOverlay = !!i4875[2]
  i4874.renderMode = i4875[3]
  i4874.renderOrder = i4875[4]
  i4874.sortingLayerName = i4875[5]
  i4874.sortingOrder = i4875[6]
  i4874.scaleFactor = i4875[7]
  request.r(i4875[8], i4875[9], 0, i4874, 'worldCamera')
  i4874.overrideSorting = !!i4875[10]
  i4874.pixelPerfect = !!i4875[11]
  i4874.targetDisplay = i4875[12]
  i4874.overridePixelPerfect = !!i4875[13]
  i4874.enabled = !!i4875[14]
  return i4874
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4876 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4877 = data
  i4876.m_UiScaleMode = i4877[0]
  i4876.m_ReferencePixelsPerUnit = i4877[1]
  i4876.m_ScaleFactor = i4877[2]
  i4876.m_ReferenceResolution = new pc.Vec2( i4877[3], i4877[4] )
  i4876.m_ScreenMatchMode = i4877[5]
  i4876.m_MatchWidthOrHeight = i4877[6]
  i4876.m_PhysicalUnit = i4877[7]
  i4876.m_FallbackScreenDPI = i4877[8]
  i4876.m_DefaultSpriteDPI = i4877[9]
  i4876.m_DynamicPixelsPerUnit = i4877[10]
  i4876.m_PresetInfoIsWorld = !!i4877[11]
  return i4876
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4878 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4879 = data
  i4878.m_IgnoreReversedGraphics = !!i4879[0]
  i4878.m_BlockingObjects = i4879[1]
  i4878.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4879[2] )
  return i4878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4881 = data
  i4880.cullTransparentMesh = !!i4881[0]
  return i4880
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4882 = root || request.c( 'UnityEngine.UI.Image' )
  var i4883 = data
  request.r(i4883[0], i4883[1], 0, i4882, 'm_Sprite')
  i4882.m_Type = i4883[2]
  i4882.m_PreserveAspect = !!i4883[3]
  i4882.m_FillCenter = !!i4883[4]
  i4882.m_FillMethod = i4883[5]
  i4882.m_FillAmount = i4883[6]
  i4882.m_FillClockwise = !!i4883[7]
  i4882.m_FillOrigin = i4883[8]
  i4882.m_UseSpriteMesh = !!i4883[9]
  i4882.m_PixelsPerUnitMultiplier = i4883[10]
  request.r(i4883[11], i4883[12], 0, i4882, 'm_Material')
  i4882.m_Maskable = !!i4883[13]
  i4882.m_Color = new pc.Color(i4883[14], i4883[15], i4883[16], i4883[17])
  i4882.m_RaycastTarget = !!i4883[18]
  i4882.m_RaycastPadding = new pc.Vec4( i4883[19], i4883[20], i4883[21], i4883[22] )
  return i4882
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i4884 = root || request.c( 'UnityEngine.UI.Text' )
  var i4885 = data
  i4884.m_FontData = request.d('UnityEngine.UI.FontData', i4885[0], i4884.m_FontData)
  i4884.m_Text = i4885[1]
  request.r(i4885[2], i4885[3], 0, i4884, 'm_Material')
  i4884.m_Maskable = !!i4885[4]
  i4884.m_Color = new pc.Color(i4885[5], i4885[6], i4885[7], i4885[8])
  i4884.m_RaycastTarget = !!i4885[9]
  i4884.m_RaycastPadding = new pc.Vec4( i4885[10], i4885[11], i4885[12], i4885[13] )
  return i4884
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i4886 = root || request.c( 'UnityEngine.UI.FontData' )
  var i4887 = data
  request.r(i4887[0], i4887[1], 0, i4886, 'm_Font')
  i4886.m_FontSize = i4887[2]
  i4886.m_FontStyle = i4887[3]
  i4886.m_BestFit = !!i4887[4]
  i4886.m_MinSize = i4887[5]
  i4886.m_MaxSize = i4887[6]
  i4886.m_Alignment = i4887[7]
  i4886.m_AlignByGeometry = !!i4887[8]
  i4886.m_RichText = !!i4887[9]
  i4886.m_HorizontalOverflow = i4887[10]
  i4886.m_VerticalOverflow = i4887[11]
  i4886.m_LineSpacing = i4887[12]
  return i4886
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4888 = root || request.c( 'UnityEngine.UI.Button' )
  var i4889 = data
  i4888.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4889[0], i4888.m_OnClick)
  i4888.m_Navigation = request.d('UnityEngine.UI.Navigation', i4889[1], i4888.m_Navigation)
  i4888.m_Transition = i4889[2]
  i4888.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4889[3], i4888.m_Colors)
  i4888.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4889[4], i4888.m_SpriteState)
  i4888.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4889[5], i4888.m_AnimationTriggers)
  i4888.m_Interactable = !!i4889[6]
  request.r(i4889[7], i4889[8], 0, i4888, 'm_TargetGraphic')
  return i4888
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4890 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4891 = data
  i4890.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4891[0], i4890.m_PersistentCalls)
  return i4890
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4892 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4893 = data
  i4892.m_Mode = i4893[0]
  i4892.m_WrapAround = !!i4893[1]
  request.r(i4893[2], i4893[3], 0, i4892, 'm_SelectOnUp')
  request.r(i4893[4], i4893[5], 0, i4892, 'm_SelectOnDown')
  request.r(i4893[6], i4893[7], 0, i4892, 'm_SelectOnLeft')
  request.r(i4893[8], i4893[9], 0, i4892, 'm_SelectOnRight')
  return i4892
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4894 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4895 = data
  i4894.m_NormalColor = new pc.Color(i4895[0], i4895[1], i4895[2], i4895[3])
  i4894.m_HighlightedColor = new pc.Color(i4895[4], i4895[5], i4895[6], i4895[7])
  i4894.m_PressedColor = new pc.Color(i4895[8], i4895[9], i4895[10], i4895[11])
  i4894.m_SelectedColor = new pc.Color(i4895[12], i4895[13], i4895[14], i4895[15])
  i4894.m_DisabledColor = new pc.Color(i4895[16], i4895[17], i4895[18], i4895[19])
  i4894.m_ColorMultiplier = i4895[20]
  i4894.m_FadeDuration = i4895[21]
  return i4894
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4896 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4897 = data
  request.r(i4897[0], i4897[1], 0, i4896, 'm_HighlightedSprite')
  request.r(i4897[2], i4897[3], 0, i4896, 'm_PressedSprite')
  request.r(i4897[4], i4897[5], 0, i4896, 'm_SelectedSprite')
  request.r(i4897[6], i4897[7], 0, i4896, 'm_DisabledSprite')
  return i4896
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4898 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4899 = data
  i4898.m_NormalTrigger = i4899[0]
  i4898.m_HighlightedTrigger = i4899[1]
  i4898.m_PressedTrigger = i4899[2]
  i4898.m_SelectedTrigger = i4899[3]
  i4898.m_DisabledTrigger = i4899[4]
  return i4898
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i4900 = root || request.c( 'PlayableHudRuntime' )
  var i4901 = data
  return i4900
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4902 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4903 = data
  request.r(i4903[0], i4903[1], 0, i4902, 'm_FirstSelected')
  i4902.m_sendNavigationEvents = !!i4903[2]
  i4902.m_DragThreshold = i4903[3]
  return i4902
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4904 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4905 = data
  i4904.m_HorizontalAxis = i4905[0]
  i4904.m_VerticalAxis = i4905[1]
  i4904.m_SubmitButton = i4905[2]
  i4904.m_CancelButton = i4905[3]
  i4904.m_InputActionsPerSecond = i4905[4]
  i4904.m_RepeatDelay = i4905[5]
  i4904.m_ForceModuleActive = !!i4905[6]
  i4904.m_SendPointerHoverToParent = !!i4905[7]
  return i4904
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i4906 = root || request.c( 'PlayableRouter' )
  var i4907 = data
  var i4909 = i4907[0]
  var i4908 = []
  for(var i = 0; i < i4909.length; i += 2) {
  request.r(i4909[i + 0], i4909[i + 1], 2, i4908, '')
  }
  i4906.menuObjects = i4908
  var i4911 = i4907[1]
  var i4910 = []
  for(var i = 0; i < i4911.length; i += 2) {
  request.r(i4911[i + 0], i4911[i + 1], 2, i4910, '')
  }
  i4906.gameplayObjects = i4910
  var i4913 = i4907[2]
  var i4912 = []
  for(var i = 0; i < i4913.length; i += 1) {
    i4912.push( request.d('PlayableRouter+SubLevelSlot', i4913[i + 0]) );
  }
  i4906.subLevels = i4912
  i4906.fadeDuration = i4907[3]
  i4906.lockedMessage = i4907[4]
  i4906.lockedTapsToCTA = i4907[5]
  return i4906
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i4916 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i4917 = data
  request.r(i4917[0], i4917[1], 0, i4916, 'button')
  request.r(i4917[2], i4917[3], 0, i4916, 'level')
  return i4916
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i4918 = root || request.c( 'ToastManager' )
  var i4919 = data
  request.r(i4919[0], i4919[1], 0, i4918, 'toastPanel')
  request.r(i4919[2], i4919[3], 0, i4918, 'toastPopup')
  request.r(i4919[4], i4919[5], 0, i4918, 'canvasGroup')
  request.r(i4919[6], i4919[7], 0, i4918, 'toastText')
  i4918.startY = i4919[8]
  i4918.visibleY = i4919[9]
  i4918.endY = i4919[10]
  i4918.animationTime = i4919[11]
  i4918.animationTimeUp = i4919[12]
  return i4918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i4920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i4921 = data
  i4920.m_Alpha = i4921[0]
  i4920.m_Interactable = !!i4921[1]
  i4920.m_BlocksRaycasts = !!i4921[2]
  i4920.m_IgnoreParentGroups = !!i4921[3]
  i4920.enabled = !!i4921[4]
  return i4920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4923 = data
  i4922.ambientIntensity = i4923[0]
  i4922.reflectionIntensity = i4923[1]
  i4922.ambientMode = i4923[2]
  i4922.ambientLight = new pc.Color(i4923[3], i4923[4], i4923[5], i4923[6])
  i4922.ambientSkyColor = new pc.Color(i4923[7], i4923[8], i4923[9], i4923[10])
  i4922.ambientGroundColor = new pc.Color(i4923[11], i4923[12], i4923[13], i4923[14])
  i4922.ambientEquatorColor = new pc.Color(i4923[15], i4923[16], i4923[17], i4923[18])
  i4922.fogColor = new pc.Color(i4923[19], i4923[20], i4923[21], i4923[22])
  i4922.fogEndDistance = i4923[23]
  i4922.fogStartDistance = i4923[24]
  i4922.fogDensity = i4923[25]
  i4922.fog = !!i4923[26]
  request.r(i4923[27], i4923[28], 0, i4922, 'skybox')
  i4922.fogMode = i4923[29]
  var i4925 = i4923[30]
  var i4924 = []
  for(var i = 0; i < i4925.length; i += 1) {
    i4924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4925[i + 0]) );
  }
  i4922.lightmaps = i4924
  i4922.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4923[31], i4922.lightProbes)
  i4922.lightmapsMode = i4923[32]
  i4922.mixedBakeMode = i4923[33]
  i4922.environmentLightingMode = i4923[34]
  i4922.ambientProbe = new pc.SphericalHarmonicsL2(i4923[35])
  request.r(i4923[36], i4923[37], 0, i4922, 'customReflection')
  request.r(i4923[38], i4923[39], 0, i4922, 'defaultReflection')
  i4922.defaultReflectionMode = i4923[40]
  i4922.defaultReflectionResolution = i4923[41]
  i4922.sunLightObjectId = i4923[42]
  i4922.pixelLightCount = i4923[43]
  i4922.defaultReflectionHDR = !!i4923[44]
  i4922.hasLightDataAsset = !!i4923[45]
  i4922.hasManualGenerate = !!i4923[46]
  return i4922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4929 = data
  request.r(i4929[0], i4929[1], 0, i4928, 'lightmapColor')
  request.r(i4929[2], i4929[3], 0, i4928, 'lightmapDirection')
  request.r(i4929[4], i4929[5], 0, i4928, 'shadowMask')
  return i4928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4930 = root || new UnityEngine.LightProbes()
  var i4931 = data
  return i4930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4939 = data
  var i4941 = i4939[0]
  var i4940 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4941.length; i += 1) {
    i4940.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4941[i + 0]));
  }
  i4938.ShaderCompilationErrors = i4940
  i4938.name = i4939[1]
  i4938.guid = i4939[2]
  var i4943 = i4939[3]
  var i4942 = []
  for(var i = 0; i < i4943.length; i += 1) {
    i4942.push( i4943[i + 0] );
  }
  i4938.shaderDefinedKeywords = i4942
  var i4945 = i4939[4]
  var i4944 = []
  for(var i = 0; i < i4945.length; i += 1) {
    i4944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4945[i + 0]) );
  }
  i4938.passes = i4944
  var i4947 = i4939[5]
  var i4946 = []
  for(var i = 0; i < i4947.length; i += 1) {
    i4946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4947[i + 0]) );
  }
  i4938.usePasses = i4946
  var i4949 = i4939[6]
  var i4948 = []
  for(var i = 0; i < i4949.length; i += 1) {
    i4948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4949[i + 0]) );
  }
  i4938.defaultParameterValues = i4948
  request.r(i4939[7], i4939[8], 0, i4938, 'unityFallbackShader')
  i4938.readDepth = !!i4939[9]
  i4938.hasDepthOnlyPass = !!i4939[10]
  i4938.isCreatedByShaderGraph = !!i4939[11]
  i4938.disableBatching = !!i4939[12]
  i4938.compiled = !!i4939[13]
  return i4938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4953 = data
  i4952.shaderName = i4953[0]
  i4952.errorMessage = i4953[1]
  return i4952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4958 = root || new pc.UnityShaderPass()
  var i4959 = data
  i4958.id = i4959[0]
  i4958.subShaderIndex = i4959[1]
  i4958.name = i4959[2]
  i4958.passType = i4959[3]
  i4958.grabPassTextureName = i4959[4]
  i4958.usePass = !!i4959[5]
  i4958.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4959[6], i4958.zTest)
  i4958.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4959[7], i4958.zWrite)
  i4958.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4959[8], i4958.culling)
  i4958.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4959[9], i4958.blending)
  i4958.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4959[10], i4958.alphaBlending)
  i4958.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4959[11], i4958.colorWriteMask)
  i4958.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4959[12], i4958.offsetUnits)
  i4958.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4959[13], i4958.offsetFactor)
  i4958.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4959[14], i4958.stencilRef)
  i4958.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4959[15], i4958.stencilReadMask)
  i4958.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4959[16], i4958.stencilWriteMask)
  i4958.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4959[17], i4958.stencilOp)
  i4958.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4959[18], i4958.stencilOpFront)
  i4958.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4959[19], i4958.stencilOpBack)
  var i4961 = i4959[20]
  var i4960 = []
  for(var i = 0; i < i4961.length; i += 1) {
    i4960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4961[i + 0]) );
  }
  i4958.tags = i4960
  var i4963 = i4959[21]
  var i4962 = []
  for(var i = 0; i < i4963.length; i += 1) {
    i4962.push( i4963[i + 0] );
  }
  i4958.passDefinedKeywords = i4962
  var i4965 = i4959[22]
  var i4964 = []
  for(var i = 0; i < i4965.length; i += 1) {
    i4964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4965[i + 0]) );
  }
  i4958.passDefinedKeywordGroups = i4964
  var i4967 = i4959[23]
  var i4966 = []
  for(var i = 0; i < i4967.length; i += 1) {
    i4966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4967[i + 0]) );
  }
  i4958.variants = i4966
  var i4969 = i4959[24]
  var i4968 = []
  for(var i = 0; i < i4969.length; i += 1) {
    i4968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4969[i + 0]) );
  }
  i4958.excludedVariants = i4968
  i4958.hasDepthReader = !!i4959[25]
  return i4958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4971 = data
  i4970.val = i4971[0]
  i4970.name = i4971[1]
  return i4970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4973 = data
  i4972.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4973[0], i4972.src)
  i4972.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4973[1], i4972.dst)
  i4972.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4973[2], i4972.op)
  return i4972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4975 = data
  i4974.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4975[0], i4974.pass)
  i4974.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4975[1], i4974.fail)
  i4974.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4975[2], i4974.zFail)
  i4974.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4975[3], i4974.comp)
  return i4974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4979 = data
  i4978.name = i4979[0]
  i4978.value = i4979[1]
  return i4978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4983 = data
  var i4985 = i4983[0]
  var i4984 = []
  for(var i = 0; i < i4985.length; i += 1) {
    i4984.push( i4985[i + 0] );
  }
  i4982.keywords = i4984
  i4982.hasDiscard = !!i4983[1]
  return i4982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4989 = data
  i4988.passId = i4989[0]
  i4988.subShaderIndex = i4989[1]
  var i4991 = i4989[2]
  var i4990 = []
  for(var i = 0; i < i4991.length; i += 1) {
    i4990.push( i4991[i + 0] );
  }
  i4988.keywords = i4990
  i4988.vertexProgram = i4989[3]
  i4988.fragmentProgram = i4989[4]
  i4988.exportedForWebGl2 = !!i4989[5]
  i4988.readDepth = !!i4989[6]
  return i4988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4995 = data
  request.r(i4995[0], i4995[1], 0, i4994, 'shader')
  i4994.pass = i4995[2]
  return i4994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4999 = data
  i4998.name = i4999[0]
  i4998.type = i4999[1]
  i4998.value = new pc.Vec4( i4999[2], i4999[3], i4999[4], i4999[5] )
  i4998.textureValue = i4999[6]
  i4998.shaderPropertyFlag = i4999[7]
  return i4998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5001 = data
  i5000.name = i5001[0]
  request.r(i5001[1], i5001[2], 0, i5000, 'texture')
  i5000.aabb = i5001[3]
  i5000.vertices = i5001[4]
  i5000.triangles = i5001[5]
  i5000.textureRect = UnityEngine.Rect.MinMaxRect(i5001[6], i5001[7], i5001[8], i5001[9])
  i5000.packedRect = UnityEngine.Rect.MinMaxRect(i5001[10], i5001[11], i5001[12], i5001[13])
  i5000.border = new pc.Vec4( i5001[14], i5001[15], i5001[16], i5001[17] )
  i5000.transparency = i5001[18]
  i5000.bounds = i5001[19]
  i5000.pixelsPerUnit = i5001[20]
  i5000.textureWidth = i5001[21]
  i5000.textureHeight = i5001[22]
  i5000.nativeSize = new pc.Vec2( i5001[23], i5001[24] )
  i5000.pivot = new pc.Vec2( i5001[25], i5001[26] )
  i5000.textureRectOffset = new pc.Vec2( i5001[27], i5001[28] )
  return i5000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5003 = data
  i5002.name = i5003[0]
  return i5002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5005 = data
  i5004.name = i5005[0]
  i5004.wrapMode = i5005[1]
  i5004.isLooping = !!i5005[2]
  i5004.length = i5005[3]
  var i5007 = i5005[4]
  var i5006 = []
  for(var i = 0; i < i5007.length; i += 1) {
    i5006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5007[i + 0]) );
  }
  i5004.curves = i5006
  var i5009 = i5005[5]
  var i5008 = []
  for(var i = 0; i < i5009.length; i += 1) {
    i5008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5009[i + 0]) );
  }
  i5004.events = i5008
  i5004.halfPrecision = !!i5005[6]
  i5004._frameRate = i5005[7]
  i5004.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5005[8], i5004.localBounds)
  i5004.hasMuscleCurves = !!i5005[9]
  var i5011 = i5005[10]
  var i5010 = []
  for(var i = 0; i < i5011.length; i += 1) {
    i5010.push( i5011[i + 0] );
  }
  i5004.clipMuscleConstant = i5010
  i5004.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5005[11], i5004.clipBindingConstant)
  return i5004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5015 = data
  i5014.path = i5015[0]
  i5014.hash = i5015[1]
  i5014.componentType = i5015[2]
  i5014.property = i5015[3]
  i5014.keys = i5015[4]
  var i5017 = i5015[5]
  var i5016 = []
  for(var i = 0; i < i5017.length; i += 1) {
    i5016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5017[i + 0]) );
  }
  i5014.objectReferenceKeys = i5016
  return i5014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5021 = data
  i5020.time = i5021[0]
  request.r(i5021[1], i5021[2], 0, i5020, 'value')
  return i5020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5025 = data
  i5024.functionName = i5025[0]
  i5024.floatParameter = i5025[1]
  i5024.intParameter = i5025[2]
  i5024.stringParameter = i5025[3]
  request.r(i5025[4], i5025[5], 0, i5024, 'objectReferenceParameter')
  i5024.time = i5025[6]
  return i5024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5027 = data
  i5026.center = new pc.Vec3( i5027[0], i5027[1], i5027[2] )
  i5026.extends = new pc.Vec3( i5027[3], i5027[4], i5027[5] )
  return i5026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5031 = data
  var i5033 = i5031[0]
  var i5032 = []
  for(var i = 0; i < i5033.length; i += 1) {
    i5032.push( i5033[i + 0] );
  }
  i5030.genericBindings = i5032
  var i5035 = i5031[1]
  var i5034 = []
  for(var i = 0; i < i5035.length; i += 1) {
    i5034.push( i5035[i + 0] );
  }
  i5030.pptrCurveMapping = i5034
  return i5030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5037 = data
  i5036.name = i5037[0]
  i5036.ascent = i5037[1]
  i5036.originalLineHeight = i5037[2]
  i5036.fontSize = i5037[3]
  var i5039 = i5037[4]
  var i5038 = []
  for(var i = 0; i < i5039.length; i += 1) {
    i5038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5039[i + 0]) );
  }
  i5036.characterInfo = i5038
  request.r(i5037[5], i5037[6], 0, i5036, 'texture')
  i5036.originalFontSize = i5037[7]
  return i5036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5043 = data
  i5042.index = i5043[0]
  i5042.advance = i5043[1]
  i5042.bearing = i5043[2]
  i5042.glyphWidth = i5043[3]
  i5042.glyphHeight = i5043[4]
  i5042.minX = i5043[5]
  i5042.maxX = i5043[6]
  i5042.minY = i5043[7]
  i5042.maxY = i5043[8]
  i5042.uvBottomLeftX = i5043[9]
  i5042.uvBottomLeftY = i5043[10]
  i5042.uvBottomRightX = i5043[11]
  i5042.uvBottomRightY = i5043[12]
  i5042.uvTopLeftX = i5043[13]
  i5042.uvTopLeftY = i5043[14]
  i5042.uvTopRightX = i5043[15]
  i5042.uvTopRightY = i5043[16]
  return i5042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5045 = data
  i5044.name = i5045[0]
  var i5047 = i5045[1]
  var i5046 = []
  for(var i = 0; i < i5047.length; i += 1) {
    i5046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5047[i + 0]) );
  }
  i5044.layers = i5046
  var i5049 = i5045[2]
  var i5048 = []
  for(var i = 0; i < i5049.length; i += 1) {
    i5048.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5049[i + 0]) );
  }
  i5044.parameters = i5048
  i5044.animationClips = i5045[3]
  i5044.avatarUnsupported = i5045[4]
  return i5044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5053 = data
  i5052.name = i5053[0]
  i5052.defaultWeight = i5053[1]
  i5052.blendingMode = i5053[2]
  i5052.avatarMask = i5053[3]
  i5052.syncedLayerIndex = i5053[4]
  i5052.syncedLayerAffectsTiming = !!i5053[5]
  i5052.syncedLayers = i5053[6]
  i5052.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5053[7], i5052.stateMachine)
  return i5052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5055 = data
  i5054.id = i5055[0]
  i5054.name = i5055[1]
  i5054.path = i5055[2]
  var i5057 = i5055[3]
  var i5056 = []
  for(var i = 0; i < i5057.length; i += 1) {
    i5056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5057[i + 0]) );
  }
  i5054.states = i5056
  var i5059 = i5055[4]
  var i5058 = []
  for(var i = 0; i < i5059.length; i += 1) {
    i5058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5059[i + 0]) );
  }
  i5054.machines = i5058
  var i5061 = i5055[5]
  var i5060 = []
  for(var i = 0; i < i5061.length; i += 1) {
    i5060.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5061[i + 0]) );
  }
  i5054.entryStateTransitions = i5060
  var i5063 = i5055[6]
  var i5062 = []
  for(var i = 0; i < i5063.length; i += 1) {
    i5062.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5063[i + 0]) );
  }
  i5054.exitStateTransitions = i5062
  var i5065 = i5055[7]
  var i5064 = []
  for(var i = 0; i < i5065.length; i += 1) {
    i5064.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5065[i + 0]) );
  }
  i5054.anyStateTransitions = i5064
  i5054.defaultStateId = i5055[8]
  return i5054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5069 = data
  i5068.id = i5069[0]
  i5068.name = i5069[1]
  i5068.cycleOffset = i5069[2]
  i5068.cycleOffsetParameter = i5069[3]
  i5068.cycleOffsetParameterActive = !!i5069[4]
  i5068.mirror = !!i5069[5]
  i5068.mirrorParameter = i5069[6]
  i5068.mirrorParameterActive = !!i5069[7]
  i5068.motionId = i5069[8]
  i5068.nameHash = i5069[9]
  i5068.fullPathHash = i5069[10]
  i5068.speed = i5069[11]
  i5068.speedParameter = i5069[12]
  i5068.speedParameterActive = !!i5069[13]
  i5068.tag = i5069[14]
  i5068.tagHash = i5069[15]
  i5068.writeDefaultValues = !!i5069[16]
  var i5071 = i5069[17]
  var i5070 = []
  for(var i = 0; i < i5071.length; i += 2) {
  request.r(i5071[i + 0], i5071[i + 1], 2, i5070, '')
  }
  i5068.behaviours = i5070
  var i5073 = i5069[18]
  var i5072 = []
  for(var i = 0; i < i5073.length; i += 1) {
    i5072.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5073[i + 0]) );
  }
  i5068.transitions = i5072
  return i5068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5079 = data
  i5078.fullPath = i5079[0]
  i5078.canTransitionToSelf = !!i5079[1]
  i5078.duration = i5079[2]
  i5078.exitTime = i5079[3]
  i5078.hasExitTime = !!i5079[4]
  i5078.hasFixedDuration = !!i5079[5]
  i5078.interruptionSource = i5079[6]
  i5078.offset = i5079[7]
  i5078.orderedInterruption = !!i5079[8]
  i5078.destinationStateId = i5079[9]
  i5078.isExit = !!i5079[10]
  i5078.mute = !!i5079[11]
  i5078.solo = !!i5079[12]
  var i5081 = i5079[13]
  var i5080 = []
  for(var i = 0; i < i5081.length; i += 1) {
    i5080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5081[i + 0]) );
  }
  i5078.conditions = i5080
  return i5078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5087 = data
  i5086.destinationStateId = i5087[0]
  i5086.isExit = !!i5087[1]
  i5086.mute = !!i5087[2]
  i5086.solo = !!i5087[3]
  var i5089 = i5087[4]
  var i5088 = []
  for(var i = 0; i < i5089.length; i += 1) {
    i5088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5089[i + 0]) );
  }
  i5086.conditions = i5088
  return i5086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5093 = data
  i5092.mode = i5093[0]
  i5092.parameter = i5093[1]
  i5092.threshold = i5093[2]
  return i5092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5097 = data
  i5096.defaultBool = !!i5097[0]
  i5096.defaultFloat = i5097[1]
  i5096.defaultInt = i5097[2]
  i5096.name = i5097[3]
  i5096.nameHash = i5097[4]
  i5096.type = i5097[5]
  return i5096
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5098 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5099 = data
  i5098.useSafeMode = !!i5099[0]
  i5098.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5099[1], i5098.safeModeOptions)
  i5098.timeScale = i5099[2]
  i5098.unscaledTimeScale = i5099[3]
  i5098.useSmoothDeltaTime = !!i5099[4]
  i5098.maxSmoothUnscaledTime = i5099[5]
  i5098.rewindCallbackMode = i5099[6]
  i5098.showUnityEditorReport = !!i5099[7]
  i5098.logBehaviour = i5099[8]
  i5098.drawGizmos = !!i5099[9]
  i5098.defaultRecyclable = !!i5099[10]
  i5098.defaultAutoPlay = i5099[11]
  i5098.defaultUpdateType = i5099[12]
  i5098.defaultTimeScaleIndependent = !!i5099[13]
  i5098.defaultEaseType = i5099[14]
  i5098.defaultEaseOvershootOrAmplitude = i5099[15]
  i5098.defaultEasePeriod = i5099[16]
  i5098.defaultAutoKill = !!i5099[17]
  i5098.defaultLoopType = i5099[18]
  i5098.debugMode = !!i5099[19]
  i5098.debugStoreTargetId = !!i5099[20]
  i5098.showPreviewPanel = !!i5099[21]
  i5098.storeSettingsLocation = i5099[22]
  i5098.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5099[23], i5098.modules)
  i5098.createASMDEF = !!i5099[24]
  i5098.showPlayingTweens = !!i5099[25]
  i5098.showPausedTweens = !!i5099[26]
  return i5098
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5100 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5101 = data
  i5100.logBehaviour = i5101[0]
  i5100.nestedTweenFailureBehaviour = i5101[1]
  return i5100
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5102 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5103 = data
  i5102.showPanel = !!i5103[0]
  i5102.audioEnabled = !!i5103[1]
  i5102.physicsEnabled = !!i5103[2]
  i5102.physics2DEnabled = !!i5103[3]
  i5102.spriteEnabled = !!i5103[4]
  i5102.uiEnabled = !!i5103[5]
  i5102.textMeshProEnabled = !!i5103[6]
  i5102.tk2DEnabled = !!i5103[7]
  i5102.deAudioEnabled = !!i5103[8]
  i5102.deUnityExtendedEnabled = !!i5103[9]
  i5102.epoOutlineEnabled = !!i5103[10]
  return i5102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5105 = data
  var i5107 = i5105[0]
  var i5106 = []
  for(var i = 0; i < i5107.length; i += 1) {
    i5106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5107[i + 0]) );
  }
  i5104.files = i5106
  i5104.componentToPrefabIds = i5105[1]
  return i5104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5111 = data
  i5110.path = i5111[0]
  request.r(i5111[1], i5111[2], 0, i5110, 'unityObject')
  return i5110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5113 = data
  var i5115 = i5113[0]
  var i5114 = []
  for(var i = 0; i < i5115.length; i += 1) {
    i5114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5115[i + 0]) );
  }
  i5112.scriptsExecutionOrder = i5114
  var i5117 = i5113[1]
  var i5116 = []
  for(var i = 0; i < i5117.length; i += 1) {
    i5116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5117[i + 0]) );
  }
  i5112.sortingLayers = i5116
  var i5119 = i5113[2]
  var i5118 = []
  for(var i = 0; i < i5119.length; i += 1) {
    i5118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5119[i + 0]) );
  }
  i5112.cullingLayers = i5118
  i5112.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5113[3], i5112.timeSettings)
  i5112.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5113[4], i5112.physicsSettings)
  i5112.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5113[5], i5112.physics2DSettings)
  i5112.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5113[6], i5112.qualitySettings)
  i5112.enableRealtimeShadows = !!i5113[7]
  i5112.enableAutoInstancing = !!i5113[8]
  i5112.enableStaticBatching = !!i5113[9]
  i5112.enableDynamicBatching = !!i5113[10]
  i5112.usePreservativeDynamicBatching = !!i5113[11]
  i5112.lightmapEncodingQuality = i5113[12]
  i5112.desiredColorSpace = i5113[13]
  var i5121 = i5113[14]
  var i5120 = []
  for(var i = 0; i < i5121.length; i += 1) {
    i5120.push( i5121[i + 0] );
  }
  i5112.allTags = i5120
  return i5112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5125 = data
  i5124.name = i5125[0]
  i5124.value = i5125[1]
  return i5124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5129 = data
  i5128.id = i5129[0]
  i5128.name = i5129[1]
  i5128.value = i5129[2]
  return i5128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5133 = data
  i5132.id = i5133[0]
  i5132.name = i5133[1]
  return i5132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5135 = data
  i5134.fixedDeltaTime = i5135[0]
  i5134.maximumDeltaTime = i5135[1]
  i5134.timeScale = i5135[2]
  i5134.maximumParticleTimestep = i5135[3]
  return i5134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5137 = data
  i5136.gravity = new pc.Vec3( i5137[0], i5137[1], i5137[2] )
  i5136.defaultSolverIterations = i5137[3]
  i5136.bounceThreshold = i5137[4]
  i5136.autoSyncTransforms = !!i5137[5]
  i5136.autoSimulation = !!i5137[6]
  var i5139 = i5137[7]
  var i5138 = []
  for(var i = 0; i < i5139.length; i += 1) {
    i5138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5139[i + 0]) );
  }
  i5136.collisionMatrix = i5138
  return i5136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5143 = data
  i5142.enabled = !!i5143[0]
  i5142.layerId = i5143[1]
  i5142.otherLayerId = i5143[2]
  return i5142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5145 = data
  request.r(i5145[0], i5145[1], 0, i5144, 'material')
  i5144.gravity = new pc.Vec2( i5145[2], i5145[3] )
  i5144.positionIterations = i5145[4]
  i5144.velocityIterations = i5145[5]
  i5144.velocityThreshold = i5145[6]
  i5144.maxLinearCorrection = i5145[7]
  i5144.maxAngularCorrection = i5145[8]
  i5144.maxTranslationSpeed = i5145[9]
  i5144.maxRotationSpeed = i5145[10]
  i5144.baumgarteScale = i5145[11]
  i5144.baumgarteTOIScale = i5145[12]
  i5144.timeToSleep = i5145[13]
  i5144.linearSleepTolerance = i5145[14]
  i5144.angularSleepTolerance = i5145[15]
  i5144.defaultContactOffset = i5145[16]
  i5144.autoSimulation = !!i5145[17]
  i5144.queriesHitTriggers = !!i5145[18]
  i5144.queriesStartInColliders = !!i5145[19]
  i5144.callbacksOnDisable = !!i5145[20]
  i5144.reuseCollisionCallbacks = !!i5145[21]
  i5144.autoSyncTransforms = !!i5145[22]
  var i5147 = i5145[23]
  var i5146 = []
  for(var i = 0; i < i5147.length; i += 1) {
    i5146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5147[i + 0]) );
  }
  i5144.collisionMatrix = i5146
  return i5144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5151 = data
  i5150.enabled = !!i5151[0]
  i5150.layerId = i5151[1]
  i5150.otherLayerId = i5151[2]
  return i5150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5153 = data
  var i5155 = i5153[0]
  var i5154 = []
  for(var i = 0; i < i5155.length; i += 1) {
    i5154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5155[i + 0]) );
  }
  i5152.qualityLevels = i5154
  var i5157 = i5153[1]
  var i5156 = []
  for(var i = 0; i < i5157.length; i += 1) {
    i5156.push( i5157[i + 0] );
  }
  i5152.names = i5156
  i5152.shadows = i5153[2]
  i5152.anisotropicFiltering = i5153[3]
  i5152.antiAliasing = i5153[4]
  i5152.lodBias = i5153[5]
  i5152.shadowCascades = i5153[6]
  i5152.shadowDistance = i5153[7]
  i5152.shadowmaskMode = i5153[8]
  i5152.shadowProjection = i5153[9]
  i5152.shadowResolution = i5153[10]
  i5152.softParticles = !!i5153[11]
  i5152.softVegetation = !!i5153[12]
  i5152.activeColorSpace = i5153[13]
  i5152.desiredColorSpace = i5153[14]
  i5152.masterTextureLimit = i5153[15]
  i5152.maxQueuedFrames = i5153[16]
  i5152.particleRaycastBudget = i5153[17]
  i5152.pixelLightCount = i5153[18]
  i5152.realtimeReflectionProbes = !!i5153[19]
  i5152.shadowCascade2Split = i5153[20]
  i5152.shadowCascade4Split = new pc.Vec3( i5153[21], i5153[22], i5153[23] )
  i5152.streamingMipmapsActive = !!i5153[24]
  i5152.vSyncCount = i5153[25]
  i5152.asyncUploadBufferSize = i5153[26]
  i5152.asyncUploadTimeSlice = i5153[27]
  i5152.billboardsFaceCameraPosition = !!i5153[28]
  i5152.shadowNearPlaneOffset = i5153[29]
  i5152.streamingMipmapsMemoryBudget = i5153[30]
  i5152.maximumLODLevel = i5153[31]
  i5152.streamingMipmapsAddAllCameras = !!i5153[32]
  i5152.streamingMipmapsMaxLevelReduction = i5153[33]
  i5152.streamingMipmapsRenderersPerFrame = i5153[34]
  i5152.resolutionScalingFixedDPIFactor = i5153[35]
  i5152.streamingMipmapsMaxFileIORequests = i5153[36]
  i5152.currentQualityLevel = i5153[37]
  return i5152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i5160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i5161 = data
  var i5163 = i5161[0]
  var i5162 = []
  for(var i = 0; i < i5163.length; i += 1) {
    i5162.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i5163[i + 0]) );
  }
  i5160.groups = i5162
  var i5165 = i5161[1]
  var i5164 = []
  for(var i = 0; i < i5165.length; i += 1) {
    i5164.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i5165[i + 0]) );
  }
  i5160.snapshots = i5164
  return i5160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i5168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i5169 = data
  i5168.id = i5169[0]
  i5168.childGroupIds = i5169[1]
  i5168.name = i5169[2]
  return i5168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i5172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i5173 = data
  i5172.id = i5173[0]
  var i5175 = i5173[1]
  var i5174 = []
  for(var i = 0; i < i5175.length; i += 1) {
    i5174.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i5175[i + 0]) );
  }
  i5172.parameters = i5174
  return i5172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i5178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i5179 = data
  i5178.name = i5179[0]
  i5178.value = i5179[1]
  return i5178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5183 = data
  i5182.weight = i5183[0]
  i5182.vertices = i5183[1]
  i5182.normals = i5183[2]
  i5182.tangents = i5183[3]
  return i5182
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[77],"78":[44],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[35],"88":[35],"89":[35],"90":[35],"91":[35],"92":[35],"93":[35],"94":[35],"95":[35],"96":[35],"97":[35],"98":[35],"99":[35],"100":[44],"101":[102],"103":[104],"105":[104],"55":[49],"106":[107],"108":[12],"109":[26],"110":[12],"111":[112],"113":[112],"114":[40],"42":[26],"115":[12],"34":[12],"116":[49],"117":[49],"58":[55],"50":[59,49],"118":[49],"57":[55],"119":[49],"120":[49],"121":[49],"122":[49],"123":[49],"124":[49],"125":[49],"126":[49],"127":[49],"128":[59,49],"129":[49],"130":[49],"131":[49],"132":[49],"51":[59,49],"133":[49],"134":[63],"135":[63],"64":[63],"136":[63],"137":[44],"138":[44]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level3_Crown_Playable","UnityEngine.GameObject","BasicDrag","BD_CameraFollow","UnityEngine.SpriteRenderer","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","PlayParticlesOnCollision","UnityEngine.CircleCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.PolygonCollider2D","UnityEngine.BoxCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SpriteMask","BD_Progress","BD_Clamp","BD_ToolRotate","BD_AnimatorDrag","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.Rigidbody2D","BD_SpriteChange","BD_ProgressHelper","DestroyObj","MenuLevel","DG.Tweening.DOTweenAnimation","Level_PoseController","SpriteButton","PlayableRouter","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "18.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "28Aug2026_Level_3_1_Step_1to3_v3";

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

Deserializers.buildID = "02c20a52-1020-4753-983f-3f892a719553";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

