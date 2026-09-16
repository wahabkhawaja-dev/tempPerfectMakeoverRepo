var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4386 = root || request.c( 'UnityEngine.JointSpring' )
  var i4387 = data
  i4386.spring = i4387[0]
  i4386.damper = i4387[1]
  i4386.targetPosition = i4387[2]
  return i4386
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4388 = root || request.c( 'UnityEngine.JointMotor' )
  var i4389 = data
  i4388.m_TargetVelocity = i4389[0]
  i4388.m_Force = i4389[1]
  i4388.m_FreeSpin = i4389[2]
  return i4388
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4390 = root || request.c( 'UnityEngine.JointLimits' )
  var i4391 = data
  i4390.m_Min = i4391[0]
  i4390.m_Max = i4391[1]
  i4390.m_Bounciness = i4391[2]
  i4390.m_BounceMinVelocity = i4391[3]
  i4390.m_ContactDistance = i4391[4]
  i4390.minBounce = i4391[5]
  i4390.maxBounce = i4391[6]
  return i4390
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4392 = root || request.c( 'UnityEngine.JointDrive' )
  var i4393 = data
  i4392.m_PositionSpring = i4393[0]
  i4392.m_PositionDamper = i4393[1]
  i4392.m_MaximumForce = i4393[2]
  i4392.m_UseAcceleration = i4393[3]
  return i4392
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4394 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4395 = data
  i4394.m_Spring = i4395[0]
  i4394.m_Damper = i4395[1]
  return i4394
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4396 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4397 = data
  i4396.m_Limit = i4397[0]
  i4396.m_Bounciness = i4397[1]
  i4396.m_ContactDistance = i4397[2]
  return i4396
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4398 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4399 = data
  i4398.m_ExtremumSlip = i4399[0]
  i4398.m_ExtremumValue = i4399[1]
  i4398.m_AsymptoteSlip = i4399[2]
  i4398.m_AsymptoteValue = i4399[3]
  i4398.m_Stiffness = i4399[4]
  return i4398
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4400 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4401 = data
  i4400.m_LowerAngle = i4401[0]
  i4400.m_UpperAngle = i4401[1]
  return i4400
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4402 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4403 = data
  i4402.m_MotorSpeed = i4403[0]
  i4402.m_MaximumMotorTorque = i4403[1]
  return i4402
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4404 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4405 = data
  i4404.m_DampingRatio = i4405[0]
  i4404.m_Frequency = i4405[1]
  i4404.m_Angle = i4405[2]
  return i4404
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4406 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4407 = data
  i4406.m_LowerTranslation = i4407[0]
  i4406.m_UpperTranslation = i4407[1]
  return i4406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4408 = root || new pc.UnityMaterial()
  var i4409 = data
  i4408.name = i4409[0]
  request.r(i4409[1], i4409[2], 0, i4408, 'shader')
  i4408.renderQueue = i4409[3]
  i4408.enableInstancing = !!i4409[4]
  var i4411 = i4409[5]
  var i4410 = []
  for(var i = 0; i < i4411.length; i += 1) {
    i4410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4411[i + 0]) );
  }
  i4408.floatParameters = i4410
  var i4413 = i4409[6]
  var i4412 = []
  for(var i = 0; i < i4413.length; i += 1) {
    i4412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4413[i + 0]) );
  }
  i4408.colorParameters = i4412
  var i4415 = i4409[7]
  var i4414 = []
  for(var i = 0; i < i4415.length; i += 1) {
    i4414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4415[i + 0]) );
  }
  i4408.vectorParameters = i4414
  var i4417 = i4409[8]
  var i4416 = []
  for(var i = 0; i < i4417.length; i += 1) {
    i4416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4417[i + 0]) );
  }
  i4408.textureParameters = i4416
  var i4419 = i4409[9]
  var i4418 = []
  for(var i = 0; i < i4419.length; i += 1) {
    i4418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4419[i + 0]) );
  }
  i4408.materialFlags = i4418
  return i4408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4423 = data
  i4422.name = i4423[0]
  i4422.value = i4423[1]
  return i4422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4427 = data
  i4426.name = i4427[0]
  i4426.value = new pc.Color(i4427[1], i4427[2], i4427[3], i4427[4])
  return i4426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4431 = data
  i4430.name = i4431[0]
  i4430.value = new pc.Vec4( i4431[1], i4431[2], i4431[3], i4431[4] )
  return i4430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4435 = data
  i4434.name = i4435[0]
  request.r(i4435[1], i4435[2], 0, i4434, 'value')
  return i4434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4439 = data
  i4438.name = i4439[0]
  i4438.enabled = !!i4439[1]
  return i4438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4441 = data
  i4440.name = i4441[0]
  i4440.width = i4441[1]
  i4440.height = i4441[2]
  i4440.mipmapCount = i4441[3]
  i4440.anisoLevel = i4441[4]
  i4440.filterMode = i4441[5]
  i4440.hdr = !!i4441[6]
  i4440.format = i4441[7]
  i4440.wrapMode = i4441[8]
  i4440.alphaIsTransparency = !!i4441[9]
  i4440.alphaSource = i4441[10]
  i4440.graphicsFormat = i4441[11]
  i4440.sRGBTexture = !!i4441[12]
  i4440.desiredColorSpace = i4441[13]
  i4440.wrapU = i4441[14]
  i4440.wrapV = i4441[15]
  return i4440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4443 = data
  i4442.name = i4443[0]
  i4442.halfPrecision = !!i4443[1]
  i4442.useSimplification = !!i4443[2]
  i4442.useUInt32IndexFormat = !!i4443[3]
  i4442.vertexCount = i4443[4]
  i4442.aabb = i4443[5]
  var i4445 = i4443[6]
  var i4444 = []
  for(var i = 0; i < i4445.length; i += 1) {
    i4444.push( !!i4445[i + 0] );
  }
  i4442.streams = i4444
  i4442.vertices = i4443[7]
  var i4447 = i4443[8]
  var i4446 = []
  for(var i = 0; i < i4447.length; i += 1) {
    i4446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4447[i + 0]) );
  }
  i4442.subMeshes = i4446
  var i4449 = i4443[9]
  var i4448 = []
  for(var i = 0; i < i4449.length; i += 16) {
    i4448.push( new pc.Mat4().setData(i4449[i + 0], i4449[i + 1], i4449[i + 2], i4449[i + 3],  i4449[i + 4], i4449[i + 5], i4449[i + 6], i4449[i + 7],  i4449[i + 8], i4449[i + 9], i4449[i + 10], i4449[i + 11],  i4449[i + 12], i4449[i + 13], i4449[i + 14], i4449[i + 15]) );
  }
  i4442.bindposes = i4448
  var i4451 = i4443[10]
  var i4450 = []
  for(var i = 0; i < i4451.length; i += 1) {
    i4450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4451[i + 0]) );
  }
  i4442.blendShapes = i4450
  return i4442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4457 = data
  i4456.triangles = i4457[0]
  return i4456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4463 = data
  i4462.name = i4463[0]
  var i4465 = i4463[1]
  var i4464 = []
  for(var i = 0; i < i4465.length; i += 1) {
    i4464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4465[i + 0]) );
  }
  i4462.frames = i4464
  return i4462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4467 = data
  i4466.position = new pc.Vec3( i4467[0], i4467[1], i4467[2] )
  i4466.scale = new pc.Vec3( i4467[3], i4467[4], i4467[5] )
  i4466.rotation = new pc.Quat(i4467[6], i4467[7], i4467[8], i4467[9])
  return i4466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4469 = data
  i4468.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4469[0], i4468.main)
  i4468.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4469[1], i4468.colorBySpeed)
  i4468.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4469[2], i4468.colorOverLifetime)
  i4468.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4469[3], i4468.emission)
  i4468.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4469[4], i4468.rotationBySpeed)
  i4468.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4469[5], i4468.rotationOverLifetime)
  i4468.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4469[6], i4468.shape)
  i4468.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4469[7], i4468.sizeBySpeed)
  i4468.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4469[8], i4468.sizeOverLifetime)
  i4468.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4469[9], i4468.textureSheetAnimation)
  i4468.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4469[10], i4468.velocityOverLifetime)
  i4468.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4469[11], i4468.noise)
  i4468.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4469[12], i4468.inheritVelocity)
  i4468.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4469[13], i4468.forceOverLifetime)
  i4468.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4469[14], i4468.limitVelocityOverLifetime)
  i4468.useAutoRandomSeed = !!i4469[15]
  i4468.randomSeed = i4469[16]
  return i4468
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4470 = root || new pc.ParticleSystemMain()
  var i4471 = data
  i4470.duration = i4471[0]
  i4470.loop = !!i4471[1]
  i4470.prewarm = !!i4471[2]
  i4470.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4471[3], i4470.startDelay)
  i4470.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4471[4], i4470.startLifetime)
  i4470.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4471[5], i4470.startSpeed)
  i4470.startSize3D = !!i4471[6]
  i4470.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4471[7], i4470.startSizeX)
  i4470.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4471[8], i4470.startSizeY)
  i4470.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4471[9], i4470.startSizeZ)
  i4470.startRotation3D = !!i4471[10]
  i4470.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4471[11], i4470.startRotationX)
  i4470.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4471[12], i4470.startRotationY)
  i4470.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4471[13], i4470.startRotationZ)
  i4470.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4471[14], i4470.startColor)
  i4470.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4471[15], i4470.gravityModifier)
  i4470.simulationSpace = i4471[16]
  request.r(i4471[17], i4471[18], 0, i4470, 'customSimulationSpace')
  i4470.simulationSpeed = i4471[19]
  i4470.useUnscaledTime = !!i4471[20]
  i4470.scalingMode = i4471[21]
  i4470.playOnAwake = !!i4471[22]
  i4470.maxParticles = i4471[23]
  i4470.emitterVelocityMode = i4471[24]
  i4470.stopAction = i4471[25]
  return i4470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4472 = root || new pc.MinMaxCurve()
  var i4473 = data
  i4472.mode = i4473[0]
  i4472.curveMin = new pc.AnimationCurve( { keys_flow: i4473[1] } )
  i4472.curveMax = new pc.AnimationCurve( { keys_flow: i4473[2] } )
  i4472.curveMultiplier = i4473[3]
  i4472.constantMin = i4473[4]
  i4472.constantMax = i4473[5]
  return i4472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4474 = root || new pc.MinMaxGradient()
  var i4475 = data
  i4474.mode = i4475[0]
  i4474.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4475[1], i4474.gradientMin)
  i4474.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4475[2], i4474.gradientMax)
  i4474.colorMin = new pc.Color(i4475[3], i4475[4], i4475[5], i4475[6])
  i4474.colorMax = new pc.Color(i4475[7], i4475[8], i4475[9], i4475[10])
  return i4474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4477 = data
  i4476.mode = i4477[0]
  var i4479 = i4477[1]
  var i4478 = []
  for(var i = 0; i < i4479.length; i += 1) {
    i4478.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4479[i + 0]) );
  }
  i4476.colorKeys = i4478
  var i4481 = i4477[2]
  var i4480 = []
  for(var i = 0; i < i4481.length; i += 1) {
    i4480.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4481[i + 0]) );
  }
  i4476.alphaKeys = i4480
  return i4476
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4482 = root || new pc.ParticleSystemColorBySpeed()
  var i4483 = data
  i4482.enabled = !!i4483[0]
  i4482.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4483[1], i4482.color)
  i4482.range = new pc.Vec2( i4483[2], i4483[3] )
  return i4482
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4487 = data
  i4486.color = new pc.Color(i4487[0], i4487[1], i4487[2], i4487[3])
  i4486.time = i4487[4]
  return i4486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4491 = data
  i4490.alpha = i4491[0]
  i4490.time = i4491[1]
  return i4490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4492 = root || new pc.ParticleSystemColorOverLifetime()
  var i4493 = data
  i4492.enabled = !!i4493[0]
  i4492.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4493[1], i4492.color)
  return i4492
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4494 = root || new pc.ParticleSystemEmitter()
  var i4495 = data
  i4494.enabled = !!i4495[0]
  i4494.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4495[1], i4494.rateOverTime)
  i4494.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4495[2], i4494.rateOverDistance)
  var i4497 = i4495[3]
  var i4496 = []
  for(var i = 0; i < i4497.length; i += 1) {
    i4496.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4497[i + 0]) );
  }
  i4494.bursts = i4496
  return i4494
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4500 = root || new pc.ParticleSystemBurst()
  var i4501 = data
  i4500.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4501[0], i4500.count)
  i4500.cycleCount = i4501[1]
  i4500.minCount = i4501[2]
  i4500.maxCount = i4501[3]
  i4500.repeatInterval = i4501[4]
  i4500.time = i4501[5]
  return i4500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4502 = root || new pc.ParticleSystemRotationBySpeed()
  var i4503 = data
  i4502.enabled = !!i4503[0]
  i4502.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4503[1], i4502.x)
  i4502.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4503[2], i4502.y)
  i4502.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4503[3], i4502.z)
  i4502.separateAxes = !!i4503[4]
  i4502.range = new pc.Vec2( i4503[5], i4503[6] )
  return i4502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4504 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4505 = data
  i4504.enabled = !!i4505[0]
  i4504.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4505[1], i4504.x)
  i4504.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4505[2], i4504.y)
  i4504.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4505[3], i4504.z)
  i4504.separateAxes = !!i4505[4]
  return i4504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4506 = root || new pc.ParticleSystemShape()
  var i4507 = data
  i4506.enabled = !!i4507[0]
  i4506.shapeType = i4507[1]
  i4506.randomDirectionAmount = i4507[2]
  i4506.sphericalDirectionAmount = i4507[3]
  i4506.randomPositionAmount = i4507[4]
  i4506.alignToDirection = !!i4507[5]
  i4506.radius = i4507[6]
  i4506.radiusMode = i4507[7]
  i4506.radiusSpread = i4507[8]
  i4506.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4507[9], i4506.radiusSpeed)
  i4506.radiusThickness = i4507[10]
  i4506.angle = i4507[11]
  i4506.length = i4507[12]
  i4506.boxThickness = new pc.Vec3( i4507[13], i4507[14], i4507[15] )
  i4506.meshShapeType = i4507[16]
  request.r(i4507[17], i4507[18], 0, i4506, 'mesh')
  request.r(i4507[19], i4507[20], 0, i4506, 'meshRenderer')
  request.r(i4507[21], i4507[22], 0, i4506, 'skinnedMeshRenderer')
  i4506.useMeshMaterialIndex = !!i4507[23]
  i4506.meshMaterialIndex = i4507[24]
  i4506.useMeshColors = !!i4507[25]
  i4506.normalOffset = i4507[26]
  i4506.arc = i4507[27]
  i4506.arcMode = i4507[28]
  i4506.arcSpread = i4507[29]
  i4506.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4507[30], i4506.arcSpeed)
  i4506.donutRadius = i4507[31]
  i4506.position = new pc.Vec3( i4507[32], i4507[33], i4507[34] )
  i4506.rotation = new pc.Vec3( i4507[35], i4507[36], i4507[37] )
  i4506.scale = new pc.Vec3( i4507[38], i4507[39], i4507[40] )
  return i4506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4508 = root || new pc.ParticleSystemSizeBySpeed()
  var i4509 = data
  i4508.enabled = !!i4509[0]
  i4508.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4509[1], i4508.x)
  i4508.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4509[2], i4508.y)
  i4508.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4509[3], i4508.z)
  i4508.separateAxes = !!i4509[4]
  i4508.range = new pc.Vec2( i4509[5], i4509[6] )
  return i4508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4510 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4511 = data
  i4510.enabled = !!i4511[0]
  i4510.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4511[1], i4510.x)
  i4510.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4511[2], i4510.y)
  i4510.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4511[3], i4510.z)
  i4510.separateAxes = !!i4511[4]
  return i4510
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4512 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4513 = data
  i4512.enabled = !!i4513[0]
  i4512.mode = i4513[1]
  i4512.animation = i4513[2]
  i4512.numTilesX = i4513[3]
  i4512.numTilesY = i4513[4]
  i4512.useRandomRow = !!i4513[5]
  i4512.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4513[6], i4512.frameOverTime)
  i4512.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4513[7], i4512.startFrame)
  i4512.cycleCount = i4513[8]
  i4512.rowIndex = i4513[9]
  i4512.flipU = i4513[10]
  i4512.flipV = i4513[11]
  i4512.spriteCount = i4513[12]
  var i4515 = i4513[13]
  var i4514 = []
  for(var i = 0; i < i4515.length; i += 2) {
  request.r(i4515[i + 0], i4515[i + 1], 2, i4514, '')
  }
  i4512.sprites = i4514
  return i4512
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4518 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4519 = data
  i4518.enabled = !!i4519[0]
  i4518.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4519[1], i4518.x)
  i4518.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4519[2], i4518.y)
  i4518.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4519[3], i4518.z)
  i4518.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4519[4], i4518.radial)
  i4518.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4519[5], i4518.speedModifier)
  i4518.space = i4519[6]
  i4518.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4519[7], i4518.orbitalX)
  i4518.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4519[8], i4518.orbitalY)
  i4518.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4519[9], i4518.orbitalZ)
  i4518.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4519[10], i4518.orbitalOffsetX)
  i4518.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4519[11], i4518.orbitalOffsetY)
  i4518.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4519[12], i4518.orbitalOffsetZ)
  return i4518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4520 = root || new pc.ParticleSystemNoise()
  var i4521 = data
  i4520.enabled = !!i4521[0]
  i4520.separateAxes = !!i4521[1]
  i4520.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4521[2], i4520.strengthX)
  i4520.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4521[3], i4520.strengthY)
  i4520.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4521[4], i4520.strengthZ)
  i4520.frequency = i4521[5]
  i4520.damping = !!i4521[6]
  i4520.octaveCount = i4521[7]
  i4520.octaveMultiplier = i4521[8]
  i4520.octaveScale = i4521[9]
  i4520.quality = i4521[10]
  i4520.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4521[11], i4520.scrollSpeed)
  i4520.scrollSpeedMultiplier = i4521[12]
  i4520.remapEnabled = !!i4521[13]
  i4520.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4521[14], i4520.remapX)
  i4520.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4521[15], i4520.remapY)
  i4520.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4521[16], i4520.remapZ)
  i4520.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4521[17], i4520.positionAmount)
  i4520.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4521[18], i4520.rotationAmount)
  i4520.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4521[19], i4520.sizeAmount)
  return i4520
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4522 = root || new pc.ParticleSystemInheritVelocity()
  var i4523 = data
  i4522.enabled = !!i4523[0]
  i4522.mode = i4523[1]
  i4522.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4523[2], i4522.curve)
  return i4522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4524 = root || new pc.ParticleSystemForceOverLifetime()
  var i4525 = data
  i4524.enabled = !!i4525[0]
  i4524.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4525[1], i4524.x)
  i4524.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4525[2], i4524.y)
  i4524.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4525[3], i4524.z)
  i4524.space = i4525[4]
  i4524.randomized = !!i4525[5]
  return i4524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4526 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4527 = data
  i4526.enabled = !!i4527[0]
  i4526.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4527[1], i4526.limit)
  i4526.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4527[2], i4526.limitX)
  i4526.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4527[3], i4526.limitY)
  i4526.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4527[4], i4526.limitZ)
  i4526.dampen = i4527[5]
  i4526.separateAxes = !!i4527[6]
  i4526.space = i4527[7]
  i4526.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4527[8], i4526.drag)
  i4526.multiplyDragByParticleSize = !!i4527[9]
  i4526.multiplyDragByParticleVelocity = !!i4527[10]
  return i4526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4529 = data
  request.r(i4529[0], i4529[1], 0, i4528, 'mesh')
  i4528.meshCount = i4529[2]
  i4528.activeVertexStreamsCount = i4529[3]
  i4528.alignment = i4529[4]
  i4528.renderMode = i4529[5]
  i4528.sortMode = i4529[6]
  i4528.lengthScale = i4529[7]
  i4528.velocityScale = i4529[8]
  i4528.cameraVelocityScale = i4529[9]
  i4528.normalDirection = i4529[10]
  i4528.sortingFudge = i4529[11]
  i4528.minParticleSize = i4529[12]
  i4528.maxParticleSize = i4529[13]
  i4528.pivot = new pc.Vec3( i4529[14], i4529[15], i4529[16] )
  request.r(i4529[17], i4529[18], 0, i4528, 'trailMaterial')
  i4528.applyActiveColorSpace = !!i4529[19]
  i4528.enabled = !!i4529[20]
  request.r(i4529[21], i4529[22], 0, i4528, 'sharedMaterial')
  var i4531 = i4529[23]
  var i4530 = []
  for(var i = 0; i < i4531.length; i += 2) {
  request.r(i4531[i + 0], i4531[i + 1], 2, i4530, '')
  }
  i4528.sharedMaterials = i4530
  i4528.receiveShadows = !!i4529[24]
  i4528.shadowCastingMode = i4529[25]
  i4528.sortingLayerID = i4529[26]
  i4528.sortingOrder = i4529[27]
  i4528.lightmapIndex = i4529[28]
  i4528.lightmapSceneIndex = i4529[29]
  i4528.lightmapScaleOffset = new pc.Vec4( i4529[30], i4529[31], i4529[32], i4529[33] )
  i4528.lightProbeUsage = i4529[34]
  i4528.reflectionProbeUsage = i4529[35]
  return i4528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4535 = data
  i4534.name = i4535[0]
  i4534.tagId = i4535[1]
  i4534.enabled = !!i4535[2]
  i4534.isStatic = !!i4535[3]
  i4534.layer = i4535[4]
  return i4534
}

Deserializers["Level3_Crown_Playable_NewTest"] = function (request, data, root) {
  var i4536 = root || request.c( 'Level3_Crown_Playable_NewTest' )
  var i4537 = data
  i4536.MainZoom = request.d('ZoomPos', i4537[0], i4536.MainZoom)
  request.r(i4537[1], i4537[2], 0, i4536, 'View1')
  request.r(i4537[3], i4537[4], 0, i4536, 'View2')
  i4536.ZoomStep1 = request.d('ZoomPos', i4537[5], i4536.ZoomStep1)
  request.r(i4537[6], i4537[7], 0, i4536, 'ToolStep1')
  request.r(i4537[8], i4537[9], 0, i4536, 'ToolStep1CameraFollow')
  request.r(i4537[10], i4537[11], 0, i4536, 'Step1Col')
  request.r(i4537[12], i4537[13], 0, i4536, 'DustSR_1')
  i4536.ZoomStep2 = request.d('ZoomPos', i4537[14], i4536.ZoomStep2)
  request.r(i4537[15], i4537[16], 0, i4536, 'ToolStep2')
  request.r(i4537[17], i4537[18], 0, i4536, 'ToolStep2CameraFollow')
  var i4539 = i4537[19]
  var i4538 = []
  for(var i = 0; i < i4539.length; i += 2) {
  request.r(i4539[i + 0], i4539[i + 1], 2, i4538, '')
  }
  i4536.SRsToFadeOut_2 = i4538
  request.r(i4537[20], i4537[21], 0, i4536, 'SpraySR_2')
  i4536.ZoomStep3 = request.d('ZoomPos', i4537[22], i4536.ZoomStep3)
  request.r(i4537[23], i4537[24], 0, i4536, 'ToolStep3')
  request.r(i4537[25], i4537[26], 0, i4536, 'ToolStep3CameraFollow')
  request.r(i4537[27], i4537[28], 0, i4536, 'Step3Col')
  request.r(i4537[29], i4537[30], 0, i4536, 'Mix')
  request.r(i4537[31], i4537[32], 0, i4536, 'MixE')
  i4536.levelName = i4537[33]
  i4536.levelReward = i4537[34]
  request.r(i4537[35], i4537[36], 0, i4536, 'LevelIcon')
  request.r(i4537[37], i4537[38], 0, i4536, 'Level_BG')
  var i4541 = i4537[39]
  var i4540 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i4541.length; i += 2) {
  request.r(i4541[i + 0], i4541[i + 1], 1, i4540, '')
  }
  i4536.ToolIcons = i4540
  var i4543 = i4537[40]
  var i4542 = []
  for(var i = 0; i < i4543.length; i += 2) {
  request.r(i4543[i + 0], i4543[i + 1], 2, i4542, '')
  }
  i4536.AllDrags = i4542
  var i4545 = i4537[41]
  var i4544 = []
  for(var i = 0; i < i4545.length; i += 2) {
  request.r(i4545[i + 0], i4545[i + 1], 2, i4544, '')
  }
  i4536.AllSources = i4544
  var i4547 = i4537[42]
  var i4546 = []
  for(var i = 0; i < i4547.length; i += 2) {
  request.r(i4547[i + 0], i4547[i + 1], 2, i4546, '')
  }
  i4536.AllScratches = i4546
  i4536.stepsDone = i4537[43]
  i4536.levelNo = i4537[44]
  i4536.partNo = i4537[45]
  var i4549 = i4537[46]
  var i4548 = []
  for(var i = 0; i < i4549.length; i += 2) {
  request.r(i4549[i + 0], i4549[i + 1], 2, i4548, '')
  }
  i4536.disableOnLevelComplete = i4548
  return i4536
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i4550 = root || request.c( 'ZoomPos' )
  var i4551 = data
  i4550.CameraPos = new pc.Vec3( i4551[0], i4551[1], i4551[2] )
  i4550.CameraFOV = i4551[3]
  return i4550
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i4564 = root || request.c( 'PlayableCTA' )
  var i4565 = data
  i4564.trigger = i4565[0]
  i4564.afterSeconds = i4565[1]
  i4564.afterTaps = i4565[2]
  request.r(i4565[3], i4565[4], 0, i4564, 'scratchProgress')
  i4564.scratchIndex = i4565[5]
  i4564.progressThreshold = i4565[6]
  request.r(i4565[7], i4565[8], 0, i4564, 'watchedTool')
  i4564.blockInputOnFire = !!i4565[9]
  i4564.refireOnEveryTap = !!i4565[10]
  i4564.refireDelay = i4565[11]
  i4564.showEndCard = !!i4565[12]
  request.r(i4565[13], i4565[14], 0, i4564, 'endCard')
  var i4567 = i4565[15]
  var i4566 = []
  for(var i = 0; i < i4567.length; i += 2) {
  request.r(i4567[i + 0], i4567[i + 1], 2, i4566, '')
  }
  i4564.thingsToDisableOnEndCard = i4566
  i4564.endCardDelay = i4565[16]
  i4564.showEndCardOnProgressTrigger = !!i4565[17]
  i4564.showEndCardOnToolAppearTrigger = !!i4565[18]
  i4564.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i4565[19], i4564.onCtaFired)
  i4564.logWhenFired = !!i4565[20]
  return i4564
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i4568 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i4569 = data
  i4568.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4569[0], i4568.m_PersistentCalls)
  return i4568
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4570 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4571 = data
  var i4573 = i4571[0]
  var i4572 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4573.length; i += 1) {
    i4572.add(request.d('UnityEngine.Events.PersistentCall', i4573[i + 0]));
  }
  i4570.m_Calls = i4572
  return i4570
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4576 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4577 = data
  request.r(i4577[0], i4577[1], 0, i4576, 'm_Target')
  i4576.m_TargetAssemblyTypeName = i4577[2]
  i4576.m_MethodName = i4577[3]
  i4576.m_Mode = i4577[4]
  i4576.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4577[5], i4576.m_Arguments)
  i4576.m_CallState = i4577[6]
  return i4576
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i4578 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i4579 = data
  request.r(i4579[0], i4579[1], 0, i4578, 'MainCamera')
  i4578.RenderType = i4579[2]
  request.r(i4579[3], i4579[4], 0, i4578, 'ScratchSurfaceSprite')
  i4578.ScratchSurfaceSpriteHasAlpha = !!i4579[5]
  i4578.MaskProgressCutOffValue = i4579[6]
  request.r(i4579[7], i4579[8], 0, i4578, 'EraseTexture')
  i4578.EraseTextureScale = new pc.Vec2( i4579[9], i4579[10] )
  i4578.InputEnabled = !!i4579[11]
  request.r(i4579[12], i4579[13], 0, i4578, 'Card')
  i4578.Mode = i4579[14]
  request.r(i4579[15], i4579[16], 0, i4578, 'Progress')
  request.r(i4579[17], i4579[18], 0, i4578, 'MeshCard')
  request.r(i4579[19], i4579[20], 0, i4578, 'SpriteCard')
  request.r(i4579[21], i4579[22], 0, i4578, 'ImageCard')
  request.r(i4579[23], i4579[24], 0, i4578, 'MaskShader')
  request.r(i4579[25], i4579[26], 0, i4578, 'BrushShader')
  request.r(i4579[27], i4579[28], 0, i4578, 'MaskProgressShader')
  request.r(i4579[29], i4579[30], 0, i4578, 'MaskProgressCutOffShader')
  return i4578
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i4580 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i4581 = data
  request.r(i4581[0], i4581[1], 0, i4580, 'MainCamera')
  request.r(i4581[2], i4581[3], 0, i4580, 'Surface')
  i4580.RenderTextureQuality = i4581[4]
  request.r(i4581[5], i4581[6], 0, i4580, 'Eraser')
  request.r(i4581[7], i4581[8], 0, i4580, 'Progress')
  request.r(i4581[9], i4581[10], 0, i4580, 'ScratchSurface')
  request.r(i4581[11], i4581[12], 0, i4580, 'RenderTexture')
  i4580.BrushScale = new pc.Vec2( i4581[13], i4581[14] )
  request.r(i4581[15], i4581[16], 0, i4580, 'ToolTip')
  i4580.InputEnabled = !!i4581[17]
  i4580.IsScratching = !!i4581[18]
  i4580.useChangingScale = !!i4581[19]
  i4580.useGivenBrushScale = !!i4581[20]
  i4580.canSpreadMask = !!i4581[21]
  i4580.shouldPaintHoles = !!i4581[22]
  i4580.canRotateTip = !!i4581[23]
  i4580._mode = i4581[24]
  return i4580
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i4582 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i4583 = data
  request.r(i4583[0], i4583[1], 0, i4582, 'Card')
  i4582.currentProgress = i4583[2]
  return i4582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i4584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i4585 = data
  i4584.color = new pc.Color(i4585[0], i4585[1], i4585[2], i4585[3])
  request.r(i4585[4], i4585[5], 0, i4584, 'sprite')
  i4584.flipX = !!i4585[6]
  i4584.flipY = !!i4585[7]
  i4584.drawMode = i4585[8]
  i4584.size = new pc.Vec2( i4585[9], i4585[10] )
  i4584.tileMode = i4585[11]
  i4584.adaptiveModeThreshold = i4585[12]
  i4584.maskInteraction = i4585[13]
  i4584.spriteSortPoint = i4585[14]
  i4584.enabled = !!i4585[15]
  request.r(i4585[16], i4585[17], 0, i4584, 'sharedMaterial')
  var i4587 = i4585[18]
  var i4586 = []
  for(var i = 0; i < i4587.length; i += 2) {
  request.r(i4587[i + 0], i4587[i + 1], 2, i4586, '')
  }
  i4584.sharedMaterials = i4586
  i4584.receiveShadows = !!i4585[19]
  i4584.shadowCastingMode = i4585[20]
  i4584.sortingLayerID = i4585[21]
  i4584.sortingOrder = i4585[22]
  i4584.lightmapIndex = i4585[23]
  i4584.lightmapSceneIndex = i4585[24]
  i4584.lightmapScaleOffset = new pc.Vec4( i4585[25], i4585[26], i4585[27], i4585[28] )
  i4584.lightProbeUsage = i4585[29]
  i4584.reflectionProbeUsage = i4585[30]
  return i4584
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i4588 = root || request.c( 'PlayParticlesOnCollision' )
  var i4589 = data
  request.r(i4589[0], i4589[1], 0, i4588, 'Target')
  request.r(i4589[2], i4589[3], 0, i4588, 'ParticlePrefab')
  i4588.destroyIt = !!i4589[4]
  i4588.stayAtPlace = !!i4589[5]
  i4588.disableOnCollision = !!i4589[6]
  i4588.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i4589[7], i4588.OnCollisionEvent)
  return i4588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i4590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i4591 = data
  i4590.radius = i4591[0]
  i4590.enabled = !!i4591[1]
  i4590.isTrigger = !!i4591[2]
  i4590.usedByEffector = !!i4591[3]
  i4590.density = i4591[4]
  i4590.offset = new pc.Vec2( i4591[5], i4591[6] )
  request.r(i4591[7], i4591[8], 0, i4590, 'material')
  return i4590
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i4592 = root || request.c( 'PlaySfxOnCollision' )
  var i4593 = data
  request.r(i4593[0], i4593[1], 0, i4592, 'Tip')
  i4592.Mode = i4593[2]
  request.r(i4593[3], i4593[4], 0, i4592, 'DragInput')
  request.r(i4593[5], i4593[6], 0, i4592, 'Source')
  i4592.startVol = i4593[7]
  i4592.targetVol = i4593[8]
  i4592.duration = i4593[9]
  request.r(i4593[10], i4593[11], 0, i4592, 'Particles')
  i4592.isDone = !!i4593[12]
  i4592.isInArea = !!i4593[13]
  i4592.isPlaying = !!i4593[14]
  return i4592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4595 = data
  request.r(i4595[0], i4595[1], 0, i4594, 'clip')
  request.r(i4595[2], i4595[3], 0, i4594, 'outputAudioMixerGroup')
  i4594.playOnAwake = !!i4595[4]
  i4594.loop = !!i4595[5]
  i4594.time = i4595[6]
  i4594.volume = i4595[7]
  i4594.pitch = i4595[8]
  i4594.enabled = !!i4595[9]
  return i4594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i4596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i4597 = data
  i4596.usedByComposite = !!i4597[0]
  i4596.autoTiling = !!i4597[1]
  var i4599 = i4597[2]
  var i4598 = []
  for(var i = 0; i < i4599.length; i += 1) {
  var i4601 = i4599[i + 0]
  var i4600 = []
  for(var i = 0; i < i4601.length; i += 2) {
    i4600.push( new pc.Vec2( i4601[i + 0], i4601[i + 1] ) );
  }
    i4598.push( i4600 );
  }
  i4596.points = i4598
  i4596.enabled = !!i4597[3]
  i4596.isTrigger = !!i4597[4]
  i4596.usedByEffector = !!i4597[5]
  i4596.density = i4597[6]
  i4596.offset = new pc.Vec2( i4597[7], i4597[8] )
  request.r(i4597[9], i4597[10], 0, i4596, 'material')
  return i4596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i4608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i4609 = data
  i4608.usedByComposite = !!i4609[0]
  i4608.autoTiling = !!i4609[1]
  i4608.size = new pc.Vec2( i4609[2], i4609[3] )
  i4608.edgeRadius = i4609[4]
  i4608.enabled = !!i4609[5]
  i4608.isTrigger = !!i4609[6]
  i4608.usedByEffector = !!i4609[7]
  i4608.density = i4609[8]
  i4608.offset = new pc.Vec2( i4609[9], i4609[10] )
  request.r(i4609[11], i4609[12], 0, i4608, 'material')
  return i4608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4611 = data
  request.r(i4611[0], i4611[1], 0, i4610, 'animatorController')
  request.r(i4611[2], i4611[3], 0, i4610, 'avatar')
  i4610.updateMode = i4611[4]
  i4610.hasTransformHierarchy = !!i4611[5]
  i4610.applyRootMotion = !!i4611[6]
  var i4613 = i4611[7]
  var i4612 = []
  for(var i = 0; i < i4613.length; i += 2) {
  request.r(i4613[i + 0], i4613[i + 1], 2, i4612, '')
  }
  i4610.humanBones = i4612
  i4610.enabled = !!i4611[8]
  return i4610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i4616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i4617 = data
  i4616.frontSortingLayerID = i4617[0]
  i4616.frontSortingOrder = i4617[1]
  i4616.backSortingLayerID = i4617[2]
  i4616.backSortingOrder = i4617[3]
  i4616.alphaCutoff = i4617[4]
  request.r(i4617[5], i4617[6], 0, i4616, 'sprite')
  i4616.tileMode = i4617[7]
  i4616.isCustomRangeActive = !!i4617[8]
  i4616.spriteSortPoint = i4617[9]
  i4616.enabled = !!i4617[10]
  request.r(i4617[11], i4617[12], 0, i4616, 'sharedMaterial')
  var i4619 = i4617[13]
  var i4618 = []
  for(var i = 0; i < i4619.length; i += 2) {
  request.r(i4619[i + 0], i4619[i + 1], 2, i4618, '')
  }
  i4616.sharedMaterials = i4618
  i4616.receiveShadows = !!i4617[14]
  i4616.shadowCastingMode = i4617[15]
  i4616.sortingLayerID = i4617[16]
  i4616.sortingOrder = i4617[17]
  i4616.lightmapIndex = i4617[18]
  i4616.lightmapSceneIndex = i4617[19]
  i4616.lightmapScaleOffset = new pc.Vec4( i4617[20], i4617[21], i4617[22], i4617[23] )
  i4616.lightProbeUsage = i4617[24]
  i4616.reflectionProbeUsage = i4617[25]
  return i4616
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i4620 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i4621 = data
  request.r(i4621[0], i4621[1], 0, i4620, 'm_RootBone')
  var i4623 = i4621[2]
  var i4622 = []
  for(var i = 0; i < i4623.length; i += 2) {
  request.r(i4623[i + 0], i4623[i + 1], 2, i4622, '')
  }
  i4620.m_BoneTransforms = i4622
  i4620.m_AlwaysUpdate = !!i4621[3]
  i4620.m_AutoRebind = !!i4621[4]
  return i4620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i4624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i4625 = data
  var i4627 = i4625[0]
  var i4626 = []
  for(var i = 0; i < i4627.length; i += 3) {
    i4626.push( new pc.Vec3( i4627[i + 0], i4627[i + 1], i4627[i + 2] ) );
  }
  i4624.positions = i4626
  i4624.positionCount = i4625[1]
  i4624.time = i4625[2]
  i4624.startWidth = i4625[3]
  i4624.endWidth = i4625[4]
  i4624.widthMultiplier = i4625[5]
  i4624.autodestruct = !!i4625[6]
  i4624.emitting = !!i4625[7]
  i4624.numCornerVertices = i4625[8]
  i4624.numCapVertices = i4625[9]
  i4624.minVertexDistance = i4625[10]
  i4624.colorGradient = i4625[11] ? new pc.ColorGradient(i4625[11][0], i4625[11][1], i4625[11][2]) : null
  i4624.startColor = new pc.Color(i4625[12], i4625[13], i4625[14], i4625[15])
  i4624.endColor = new pc.Color(i4625[16], i4625[17], i4625[18], i4625[19])
  i4624.generateLightingData = !!i4625[20]
  i4624.textureMode = i4625[21]
  i4624.alignment = i4625[22]
  i4624.widthCurve = new pc.AnimationCurve( { keys_flow: i4625[23] } )
  i4624.enabled = !!i4625[24]
  request.r(i4625[25], i4625[26], 0, i4624, 'sharedMaterial')
  var i4629 = i4625[27]
  var i4628 = []
  for(var i = 0; i < i4629.length; i += 2) {
  request.r(i4629[i + 0], i4629[i + 1], 2, i4628, '')
  }
  i4624.sharedMaterials = i4628
  i4624.receiveShadows = !!i4625[28]
  i4624.shadowCastingMode = i4625[29]
  i4624.sortingLayerID = i4625[30]
  i4624.sortingOrder = i4625[31]
  i4624.lightmapIndex = i4625[32]
  i4624.lightmapSceneIndex = i4625[33]
  i4624.lightmapScaleOffset = new pc.Vec4( i4625[34], i4625[35], i4625[36], i4625[37] )
  i4624.lightProbeUsage = i4625[38]
  i4624.reflectionProbeUsage = i4625[39]
  return i4624
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i4632 = root || request.c( 'BasicDrag' )
  var i4633 = data
  i4632.canDrag = !!i4633[0]
  i4632.dragByDelta = !!i4633[1]
  i4632.isDragging = !!i4633[2]
  i4632.moveWithPointer = !!i4633[3]
  i4632.canReturn = !!i4633[4]
  i4632.jumpOnReturn = !!i4633[5]
  i4632.returnTime = i4633[6]
  i4632.Tool_Offset = new pc.Vec3( i4633[7], i4633[8], i4633[9] )
  i4632.canScaleIncrease = !!i4633[10]
  i4632.Self_ScaleNew = new pc.Vec3( i4633[11], i4633[12], i4633[13] )
  i4632.canRotateOnPick = !!i4633[14]
  i4632.startRot = new pc.Vec3( i4633[15], i4633[16], i4633[17] )
  i4632.newRot = new pc.Vec3( i4633[18], i4633[19], i4633[20] )
  var i4635 = i4633[21]
  var i4634 = []
  for(var i = 0; i < i4635.length; i += 2) {
  request.r(i4635[i + 0], i4635[i + 1], 2, i4634, '')
  }
  i4632.childSprite = i4634
  request.r(i4633[22], i4633[23], 0, i4632, 'ToolSelectClip')
  request.r(i4633[24], i4633[25], 0, i4632, 'ToolLoopClip')
  request.r(i4633[26], i4633[27], 0, i4632, 'thisParticles')
  i4632.onDragparticle = !!i4633[28]
  request.r(i4633[29], i4633[30], 0, i4632, 'dragParticles')
  request.r(i4633[31], i4633[32], 0, i4632, 'anim')
  i4632.startPos = new pc.Vec3( i4633[33], i4633[34], i4633[35] )
  i4632.startScale = new pc.Vec3( i4633[36], i4633[37], i4633[38] )
  i4632.Vibration = !!i4633[39]
  i4632.isPlacedCannotMove = !!i4633[40]
  i4632.isObjectMovingWhileDragging = !!i4633[41]
  i4632.OnMouseDownEvent = request.d('System.Action', i4633[42], i4632.OnMouseDownEvent)
  i4632.OnMouseUpEvent = request.d('System.Action', i4633[43], i4632.OnMouseUpEvent)
  i4632.ProgStartEvent = request.d('System.Action', i4633[44], i4632.ProgStartEvent)
  i4632.ProgEndEvent = request.d('System.Action', i4633[45], i4632.ProgEndEvent)
  i4632.canCallMouseUpWhenGamePaused = !!i4633[46]
  i4632.ClampX_L = i4633[47]
  i4632.ClampX_H = i4633[48]
  i4632.ClampY_L = i4633[49]
  i4632.ClampY_H = i4633[50]
  i4632.startOrder = i4633[51]
  i4632.dontResetItIsInCollider = !!i4633[52]
  request.r(i4633[53], i4633[54], 0, i4632, 'thisCollider')
  request.r(i4633[55], i4633[56], 0, i4632, 'thisSR')
  i4632.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i4633[57], i4632.OnMouseDownEventIndependentFromCanDrag)
  return i4632
}

Deserializers["System.Action"] = function (request, data, root) {
  var i4636 = root || request.c( 'System.Action' )
  var i4637 = data
  return i4636
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i4638 = root || request.c( 'BD_Progress' )
  var i4639 = data
  var i4641 = i4639[0]
  var i4640 = []
  for(var i = 0; i < i4641.length; i += 1) {
    i4640.push( request.d('ScratchData', i4641[i + 0]) );
  }
  i4638.AllScratches = i4640
  i4638.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i4639[1], i4638.OnScratchComplete)
  i4638.isProgDone = !!i4639[2]
  i4638.canCallComplete = !!i4639[3]
  i4638.CollectiveAppear = !!i4639[4]
  i4638.tipControl = !!i4639[5]
  i4638.progressControl = !!i4639[6]
  request.r(i4639[7], i4639[8], 0, i4638, 'thisDrag')
  i4638.CompleteEvent = request.d('System.Action', i4639[9], i4638.CompleteEvent)
  i4638.SubCompleteEvent = request.d('System.Action', i4639[10], i4638.SubCompleteEvent)
  return i4638
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i4644 = root || request.c( 'ScratchData' )
  var i4645 = data
  request.r(i4645[0], i4645[1], 0, i4644, 'ScratchManager')
  i4644.scratchLimit = i4645[2]
  i4644.isComplete = !!i4645[3]
  return i4644
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4646 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4647 = data
  request.r(i4647[0], i4647[1], 0, i4646, 'm_ObjectArgument')
  i4646.m_ObjectArgumentAssemblyTypeName = i4647[2]
  i4646.m_IntArgument = i4647[3]
  i4646.m_FloatArgument = i4647[4]
  i4646.m_StringArgument = i4647[5]
  i4646.m_BoolArgument = !!i4647[6]
  return i4646
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i4648 = root || request.c( 'BD_Clamp' )
  var i4649 = data
  i4648.ClampX_L = i4649[0]
  i4648.ClampX_H = i4649[1]
  i4648.ClampY_L = i4649[2]
  i4648.ClampY_H = i4649[3]
  return i4648
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i4650 = root || request.c( 'BD_ToolRotate' )
  var i4651 = data
  i4650.startDelay = i4651[0]
  request.r(i4651[1], i4651[2], 0, i4650, 'Tool')
  request.r(i4651[3], i4651[4], 0, i4650, 'Clamp')
  request.r(i4651[5], i4651[6], 0, i4650, 'Pivot')
  i4650.MinAngle = new pc.Vec3( i4651[7], i4651[8], i4651[9] )
  i4650.MaxAngle = new pc.Vec3( i4651[10], i4651[11], i4651[12] )
  i4650.rotationSpeed = i4651[13]
  return i4650
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i4652 = root || request.c( 'BD_CameraFollow' )
  var i4653 = data
  request.r(i4653[0], i4653[1], 0, i4652, 'Tool')
  request.r(i4653[2], i4653[3], 0, i4652, 'Pivot')
  i4652.FOV = i4653[4]
  i4652.Y_L = i4653[5]
  i4652.Y_H = i4653[6]
  i4652.X_L = i4653[7]
  i4652.X_R = i4653[8]
  i4652.startDelay = i4653[9]
  i4652.duration = i4653[10]
  return i4652
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i4654 = root || request.c( 'BD_AnimatorDrag' )
  var i4655 = data
  request.r(i4655[0], i4655[1], 0, i4654, 'BD')
  request.r(i4655[2], i4655[3], 0, i4654, 'anim')
  request.r(i4655[4], i4655[5], 0, i4654, 'Source')
  i4654.Vibration = !!i4655[6]
  i4654.isCompletable = !!i4655[7]
  i4654.completionThreshold = i4655[8]
  i4654.OnComplete = request.d('UnityEngine.Events.UnityEvent', i4655[9], i4654.OnComplete)
  return i4654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i4656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i4657 = data
  i4656.bodyType = i4657[0]
  request.r(i4657[1], i4657[2], 0, i4656, 'material')
  i4656.simulated = !!i4657[3]
  i4656.useAutoMass = !!i4657[4]
  i4656.mass = i4657[5]
  i4656.drag = i4657[6]
  i4656.angularDrag = i4657[7]
  i4656.gravityScale = i4657[8]
  i4656.collisionDetectionMode = i4657[9]
  i4656.sleepMode = i4657[10]
  i4656.constraints = i4657[11]
  return i4656
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i4658 = root || request.c( 'BD_SpriteChange' )
  var i4659 = data
  request.r(i4659[0], i4659[1], 0, i4658, 'BD')
  request.r(i4659[2], i4659[3], 0, i4658, 'SR')
  request.r(i4659[4], i4659[5], 0, i4658, 'Default')
  request.r(i4659[6], i4659[7], 0, i4658, 'Picked')
  i4658.resetOnRelease = !!i4659[8]
  return i4658
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i4660 = root || request.c( 'BD_ProgressHelper' )
  var i4661 = data
  request.r(i4661[0], i4661[1], 0, i4660, 'BD_Progress')
  request.r(i4661[2], i4661[3], 0, i4660, 'fadeSprite')
  i4660.fadeIn = !!i4661[4]
  return i4660
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i4662 = root || request.c( 'DestroyObj' )
  var i4663 = data
  i4662.destroyDelay = i4663[0]
  return i4662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i4664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i4665 = data
  i4664.name = i4665[0]
  i4664.atlasId = i4665[1]
  i4664.mipmapCount = i4665[2]
  i4664.hdr = !!i4665[3]
  i4664.size = i4665[4]
  i4664.anisoLevel = i4665[5]
  i4664.filterMode = i4665[6]
  var i4667 = i4665[7]
  var i4666 = []
  for(var i = 0; i < i4667.length; i += 4) {
    i4666.push( UnityEngine.Rect.MinMaxRect(i4667[i + 0], i4667[i + 1], i4667[i + 2], i4667[i + 3]) );
  }
  i4664.rects = i4666
  i4664.wrapU = i4665[8]
  i4664.wrapV = i4665[9]
  return i4664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4671 = data
  i4670.name = i4671[0]
  i4670.index = i4671[1]
  i4670.startup = !!i4671[2]
  return i4670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4673 = data
  i4672.aspect = i4673[0]
  i4672.orthographic = !!i4673[1]
  i4672.orthographicSize = i4673[2]
  i4672.backgroundColor = new pc.Color(i4673[3], i4673[4], i4673[5], i4673[6])
  i4672.nearClipPlane = i4673[7]
  i4672.farClipPlane = i4673[8]
  i4672.fieldOfView = i4673[9]
  i4672.depth = i4673[10]
  i4672.clearFlags = i4673[11]
  i4672.cullingMask = i4673[12]
  i4672.rect = i4673[13]
  request.r(i4673[14], i4673[15], 0, i4672, 'targetTexture')
  i4672.usePhysicalProperties = !!i4673[16]
  i4672.focalLength = i4673[17]
  i4672.sensorSize = new pc.Vec2( i4673[18], i4673[19] )
  i4672.lensShift = new pc.Vec2( i4673[20], i4673[21] )
  i4672.gateFit = i4673[22]
  i4672.commandBufferCount = i4673[23]
  i4672.cameraType = i4673[24]
  i4672.enabled = !!i4673[25]
  return i4672
}

Deserializers["CameraController"] = function (request, data, root) {
  var i4674 = root || request.c( 'CameraController' )
  var i4675 = data
  request.r(i4675[0], i4675[1], 0, i4674, 'cam')
  i4674.defaultPosition = new pc.Vec3( i4675[2], i4675[3], i4675[4] )
  i4674.defaultSize = i4675[5]
  i4674.defaultFOV = i4675[6]
  i4674.defaultDuration = i4675[7]
  i4674.defaultEase = i4675[8]
  return i4674
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i4676 = root || request.c( 'MusicSource' )
  var i4677 = data
  request.r(i4677[0], i4677[1], 0, i4676, 'source')
  return i4676
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i4678 = root || request.c( 'UI_Manager' )
  var i4679 = data
  i4678.levelCompleted = !!i4679[0]
  i4678.isPauseActive = !!i4679[1]
  i4678.loadIndex = i4679[2]
  request.r(i4679[3], i4679[4], 0, i4678, 'removeAdsButton')
  request.r(i4679[5], i4679[6], 0, i4678, 'pauseButton')
  request.r(i4679[7], i4679[8], 0, i4678, 'Fade_Img')
  request.r(i4679[9], i4679[10], 0, i4678, 'TopBarAnim')
  request.r(i4679[11], i4679[12], 0, i4678, 'MainPanel')
  request.r(i4679[13], i4679[14], 0, i4678, 'PausePanel')
  request.r(i4679[15], i4679[16], 0, i4678, 'PausePopUp')
  request.r(i4679[17], i4679[18], 0, i4678, 'PauseCanvasGroup')
  request.r(i4679[19], i4679[20], 0, i4678, 'RateUsPanel')
  request.r(i4679[21], i4679[22], 0, i4678, 'RateUsPopUp')
  request.r(i4679[23], i4679[24], 0, i4678, 'RemoveAdsPanel')
  request.r(i4679[25], i4679[26], 0, i4678, 'RemoveAdsPopUp')
  request.r(i4679[27], i4679[28], 0, i4678, 'RemoveAdsCanvasGroup')
  var i4681 = i4679[29]
  var i4680 = []
  for(var i = 0; i < i4681.length; i += 2) {
  request.r(i4681[i + 0], i4681[i + 1], 2, i4680, '')
  }
  i4678.RemoveAdsAnims = i4680
  request.r(i4679[30], i4679[31], 0, i4678, 'CompletePanel')
  request.r(i4679[32], i4679[33], 0, i4678, 'LevelIcon')
  request.r(i4679[34], i4679[35], 0, i4678, 'CompleteParticles')
  request.r(i4679[36], i4679[37], 0, i4678, 'progressBar')
  request.r(i4679[38], i4679[39], 0, i4678, 'progressText')
  request.r(i4679[40], i4679[41], 0, i4678, 'toolIcon1')
  request.r(i4679[42], i4679[43], 0, i4678, 'toolIcon2')
  request.r(i4679[44], i4679[45], 0, i4678, 'toolIcon3')
  request.r(i4679[46], i4679[47], 0, i4678, 'toolIcon4')
  request.r(i4679[48], i4679[49], 0, i4678, 'target1')
  request.r(i4679[50], i4679[51], 0, i4678, 'target2')
  i4678.toolMoveDuration = i4679[52]
  i4678.currentIndex = i4679[53]
  var i4683 = i4679[54]
  var i4682 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i4683.length; i += 2) {
  request.r(i4683[i + 0], i4683[i + 1], 1, i4682, '')
  }
  i4678.allTools = i4682
  request.r(i4679[55], i4679[56], 0, i4678, 'clockProgress')
  request.r(i4679[57], i4679[58], 0, i4678, 'clockProgressFill')
  request.r(i4679[59], i4679[60], 0, i4678, 'clockAudio')
  i4678.moveDistance = i4679[61]
  i4678.animationDuration = i4679[62]
  i4678.greyBgChildName = i4679[63]
  i4678.pushOffset = i4679[64]
  return i4678
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i4686 = root || request.c( 'GameManagerPlayable' )
  var i4687 = data
  request.r(i4687[0], i4687[1], 0, i4686, 'endParticles')
  request.r(i4687[2], i4687[3], 0, i4686, 'stepCompleteParticles')
  request.r(i4687[4], i4687[5], 0, i4686, 'DefaultMat')
  request.r(i4687[6], i4687[7], 0, i4686, 'BG_Music')
  request.r(i4687[8], i4687[9], 0, i4686, 'restoreEffectShader')
  request.r(i4687[10], i4687[11], 0, i4686, 'stickerEffectShader')
  i4686.isComplete = !!i4687[12]
  i4686.isPaused = !!i4687[13]
  request.r(i4687[14], i4687[15], 0, i4686, 'currentLevel')
  i4686.startLevelOnPlay = !!i4687[16]
  i4686.currentLevelNo = i4687[17]
  return i4686
}

Deserializers["AudioController"] = function (request, data, root) {
  var i4688 = root || request.c( 'AudioController' )
  var i4689 = data
  request.r(i4689[0], i4689[1], 0, i4688, 'MainMixer')
  request.r(i4689[2], i4689[3], 0, i4688, 'UiClick')
  request.r(i4689[4], i4689[5], 0, i4688, 'UiClickSource')
  var i4691 = i4689[6]
  var i4690 = []
  for(var i = 0; i < i4691.length; i += 2) {
  request.r(i4691[i + 0], i4691[i + 1], 2, i4690, '')
  }
  i4688.SfxSources = i4690
  var i4693 = i4689[7]
  var i4692 = []
  for(var i = 0; i < i4693.length; i += 2) {
  request.r(i4693[i + 0], i4693[i + 1], 2, i4692, '')
  }
  i4688.AllClips = i4692
  return i4688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4697 = data
  i4696.pivot = new pc.Vec2( i4697[0], i4697[1] )
  i4696.anchorMin = new pc.Vec2( i4697[2], i4697[3] )
  i4696.anchorMax = new pc.Vec2( i4697[4], i4697[5] )
  i4696.sizeDelta = new pc.Vec2( i4697[6], i4697[7] )
  i4696.anchoredPosition3D = new pc.Vec3( i4697[8], i4697[9], i4697[10] )
  i4696.rotation = new pc.Quat(i4697[11], i4697[12], i4697[13], i4697[14])
  i4696.scale = new pc.Vec3( i4697[15], i4697[16], i4697[17] )
  return i4696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4699 = data
  i4698.planeDistance = i4699[0]
  i4698.referencePixelsPerUnit = i4699[1]
  i4698.isFallbackOverlay = !!i4699[2]
  i4698.renderMode = i4699[3]
  i4698.renderOrder = i4699[4]
  i4698.sortingLayerName = i4699[5]
  i4698.sortingOrder = i4699[6]
  i4698.scaleFactor = i4699[7]
  request.r(i4699[8], i4699[9], 0, i4698, 'worldCamera')
  i4698.overrideSorting = !!i4699[10]
  i4698.pixelPerfect = !!i4699[11]
  i4698.targetDisplay = i4699[12]
  i4698.overridePixelPerfect = !!i4699[13]
  i4698.enabled = !!i4699[14]
  return i4698
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4700 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4701 = data
  i4700.m_UiScaleMode = i4701[0]
  i4700.m_ReferencePixelsPerUnit = i4701[1]
  i4700.m_ScaleFactor = i4701[2]
  i4700.m_ReferenceResolution = new pc.Vec2( i4701[3], i4701[4] )
  i4700.m_ScreenMatchMode = i4701[5]
  i4700.m_MatchWidthOrHeight = i4701[6]
  i4700.m_PhysicalUnit = i4701[7]
  i4700.m_FallbackScreenDPI = i4701[8]
  i4700.m_DefaultSpriteDPI = i4701[9]
  i4700.m_DynamicPixelsPerUnit = i4701[10]
  i4700.m_PresetInfoIsWorld = !!i4701[11]
  return i4700
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4702 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4703 = data
  i4702.m_IgnoreReversedGraphics = !!i4703[0]
  i4702.m_BlockingObjects = i4703[1]
  i4702.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4703[2] )
  return i4702
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i4704 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i4705 = data
  i4704.targetIsSelf = !!i4705[0]
  request.r(i4705[1], i4705[2], 0, i4704, 'targetGO')
  i4704.tweenTargetIsTargetGO = !!i4705[3]
  i4704.delay = i4705[4]
  i4704.duration = i4705[5]
  i4704.easeType = i4705[6]
  i4704.easeCurve = new pc.AnimationCurve( { keys_flow: i4705[7] } )
  i4704.loopType = i4705[8]
  i4704.loops = i4705[9]
  i4704.id = i4705[10]
  i4704.isRelative = !!i4705[11]
  i4704.isFrom = !!i4705[12]
  i4704.isIndependentUpdate = !!i4705[13]
  i4704.autoKill = !!i4705[14]
  i4704.autoGenerate = !!i4705[15]
  i4704.isActive = !!i4705[16]
  i4704.isValid = !!i4705[17]
  request.r(i4705[18], i4705[19], 0, i4704, 'target')
  i4704.animationType = i4705[20]
  i4704.targetType = i4705[21]
  i4704.forcedTargetType = i4705[22]
  i4704.autoPlay = !!i4705[23]
  i4704.useTargetAsV3 = !!i4705[24]
  i4704.endValueFloat = i4705[25]
  i4704.endValueV3 = new pc.Vec3( i4705[26], i4705[27], i4705[28] )
  i4704.endValueV2 = new pc.Vec2( i4705[29], i4705[30] )
  i4704.endValueColor = new pc.Color(i4705[31], i4705[32], i4705[33], i4705[34])
  i4704.endValueString = i4705[35]
  i4704.endValueRect = UnityEngine.Rect.MinMaxRect(i4705[36], i4705[37], i4705[38], i4705[39])
  request.r(i4705[40], i4705[41], 0, i4704, 'endValueTransform')
  i4704.optionalBool0 = !!i4705[42]
  i4704.optionalBool1 = !!i4705[43]
  i4704.optionalFloat0 = i4705[44]
  i4704.optionalInt0 = i4705[45]
  i4704.optionalRotationMode = i4705[46]
  i4704.optionalScrambleMode = i4705[47]
  i4704.optionalShakeRandomnessMode = i4705[48]
  i4704.optionalString = i4705[49]
  i4704.updateType = i4705[50]
  i4704.isSpeedBased = !!i4705[51]
  i4704.hasOnStart = !!i4705[52]
  i4704.hasOnPlay = !!i4705[53]
  i4704.hasOnUpdate = !!i4705[54]
  i4704.hasOnStepComplete = !!i4705[55]
  i4704.hasOnComplete = !!i4705[56]
  i4704.hasOnTweenCreated = !!i4705[57]
  i4704.hasOnRewind = !!i4705[58]
  i4704.onStart = request.d('UnityEngine.Events.UnityEvent', i4705[59], i4704.onStart)
  i4704.onPlay = request.d('UnityEngine.Events.UnityEvent', i4705[60], i4704.onPlay)
  i4704.onUpdate = request.d('UnityEngine.Events.UnityEvent', i4705[61], i4704.onUpdate)
  i4704.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i4705[62], i4704.onStepComplete)
  i4704.onComplete = request.d('UnityEngine.Events.UnityEvent', i4705[63], i4704.onComplete)
  i4704.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i4705[64], i4704.onTweenCreated)
  i4704.onRewind = request.d('UnityEngine.Events.UnityEvent', i4705[65], i4704.onRewind)
  return i4704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4707 = data
  i4706.cullTransparentMesh = !!i4707[0]
  return i4706
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4708 = root || request.c( 'UnityEngine.UI.Image' )
  var i4709 = data
  request.r(i4709[0], i4709[1], 0, i4708, 'm_Sprite')
  i4708.m_Type = i4709[2]
  i4708.m_PreserveAspect = !!i4709[3]
  i4708.m_FillCenter = !!i4709[4]
  i4708.m_FillMethod = i4709[5]
  i4708.m_FillAmount = i4709[6]
  i4708.m_FillClockwise = !!i4709[7]
  i4708.m_FillOrigin = i4709[8]
  i4708.m_UseSpriteMesh = !!i4709[9]
  i4708.m_PixelsPerUnitMultiplier = i4709[10]
  request.r(i4709[11], i4709[12], 0, i4708, 'm_Material')
  i4708.m_Maskable = !!i4709[13]
  i4708.m_Color = new pc.Color(i4709[14], i4709[15], i4709[16], i4709[17])
  i4708.m_RaycastTarget = !!i4709[18]
  i4708.m_RaycastPadding = new pc.Vec4( i4709[19], i4709[20], i4709[21], i4709[22] )
  return i4708
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i4710 = root || request.c( 'UnityEngine.UI.Text' )
  var i4711 = data
  i4710.m_FontData = request.d('UnityEngine.UI.FontData', i4711[0], i4710.m_FontData)
  i4710.m_Text = i4711[1]
  request.r(i4711[2], i4711[3], 0, i4710, 'm_Material')
  i4710.m_Maskable = !!i4711[4]
  i4710.m_Color = new pc.Color(i4711[5], i4711[6], i4711[7], i4711[8])
  i4710.m_RaycastTarget = !!i4711[9]
  i4710.m_RaycastPadding = new pc.Vec4( i4711[10], i4711[11], i4711[12], i4711[13] )
  return i4710
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i4712 = root || request.c( 'UnityEngine.UI.FontData' )
  var i4713 = data
  request.r(i4713[0], i4713[1], 0, i4712, 'm_Font')
  i4712.m_FontSize = i4713[2]
  i4712.m_FontStyle = i4713[3]
  i4712.m_BestFit = !!i4713[4]
  i4712.m_MinSize = i4713[5]
  i4712.m_MaxSize = i4713[6]
  i4712.m_Alignment = i4713[7]
  i4712.m_AlignByGeometry = !!i4713[8]
  i4712.m_RichText = !!i4713[9]
  i4712.m_HorizontalOverflow = i4713[10]
  i4712.m_VerticalOverflow = i4713[11]
  i4712.m_LineSpacing = i4713[12]
  return i4712
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4714 = root || request.c( 'UnityEngine.UI.Button' )
  var i4715 = data
  i4714.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4715[0], i4714.m_OnClick)
  i4714.m_Navigation = request.d('UnityEngine.UI.Navigation', i4715[1], i4714.m_Navigation)
  i4714.m_Transition = i4715[2]
  i4714.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4715[3], i4714.m_Colors)
  i4714.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4715[4], i4714.m_SpriteState)
  i4714.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4715[5], i4714.m_AnimationTriggers)
  i4714.m_Interactable = !!i4715[6]
  request.r(i4715[7], i4715[8], 0, i4714, 'm_TargetGraphic')
  return i4714
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4716 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4717 = data
  i4716.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4717[0], i4716.m_PersistentCalls)
  return i4716
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4718 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4719 = data
  i4718.m_Mode = i4719[0]
  i4718.m_WrapAround = !!i4719[1]
  request.r(i4719[2], i4719[3], 0, i4718, 'm_SelectOnUp')
  request.r(i4719[4], i4719[5], 0, i4718, 'm_SelectOnDown')
  request.r(i4719[6], i4719[7], 0, i4718, 'm_SelectOnLeft')
  request.r(i4719[8], i4719[9], 0, i4718, 'm_SelectOnRight')
  return i4718
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4720 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4721 = data
  i4720.m_NormalColor = new pc.Color(i4721[0], i4721[1], i4721[2], i4721[3])
  i4720.m_HighlightedColor = new pc.Color(i4721[4], i4721[5], i4721[6], i4721[7])
  i4720.m_PressedColor = new pc.Color(i4721[8], i4721[9], i4721[10], i4721[11])
  i4720.m_SelectedColor = new pc.Color(i4721[12], i4721[13], i4721[14], i4721[15])
  i4720.m_DisabledColor = new pc.Color(i4721[16], i4721[17], i4721[18], i4721[19])
  i4720.m_ColorMultiplier = i4721[20]
  i4720.m_FadeDuration = i4721[21]
  return i4720
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4722 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4723 = data
  request.r(i4723[0], i4723[1], 0, i4722, 'm_HighlightedSprite')
  request.r(i4723[2], i4723[3], 0, i4722, 'm_PressedSprite')
  request.r(i4723[4], i4723[5], 0, i4722, 'm_SelectedSprite')
  request.r(i4723[6], i4723[7], 0, i4722, 'm_DisabledSprite')
  return i4722
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4724 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4725 = data
  i4724.m_NormalTrigger = i4725[0]
  i4724.m_HighlightedTrigger = i4725[1]
  i4724.m_PressedTrigger = i4725[2]
  i4724.m_SelectedTrigger = i4725[3]
  i4724.m_DisabledTrigger = i4725[4]
  return i4724
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i4726 = root || request.c( 'PlayableHudRuntime' )
  var i4727 = data
  return i4726
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4728 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4729 = data
  request.r(i4729[0], i4729[1], 0, i4728, 'm_FirstSelected')
  i4728.m_sendNavigationEvents = !!i4729[2]
  i4728.m_DragThreshold = i4729[3]
  return i4728
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4730 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4731 = data
  i4730.m_HorizontalAxis = i4731[0]
  i4730.m_VerticalAxis = i4731[1]
  i4730.m_SubmitButton = i4731[2]
  i4730.m_CancelButton = i4731[3]
  i4730.m_InputActionsPerSecond = i4731[4]
  i4730.m_RepeatDelay = i4731[5]
  i4730.m_ForceModuleActive = !!i4731[6]
  i4730.m_SendPointerHoverToParent = !!i4731[7]
  return i4730
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i4732 = root || request.c( 'PlayableRouter' )
  var i4733 = data
  var i4735 = i4733[0]
  var i4734 = []
  for(var i = 0; i < i4735.length; i += 2) {
  request.r(i4735[i + 0], i4735[i + 1], 2, i4734, '')
  }
  i4732.menuObjects = i4734
  var i4737 = i4733[1]
  var i4736 = []
  for(var i = 0; i < i4737.length; i += 2) {
  request.r(i4737[i + 0], i4737[i + 1], 2, i4736, '')
  }
  i4732.gameplayObjects = i4736
  var i4739 = i4733[2]
  var i4738 = []
  for(var i = 0; i < i4739.length; i += 1) {
    i4738.push( request.d('PlayableRouter+SubLevelSlot', i4739[i + 0]) );
  }
  i4732.subLevels = i4738
  i4732.fadeDuration = i4733[3]
  i4732.onMenuClosing = request.d('UnityEngine.Events.UnityEvent', i4733[4], i4732.onMenuClosing)
  i4732.lockedMessage = i4733[5]
  i4732.lockedTapsToCTA = i4733[6]
  return i4732
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i4742 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i4743 = data
  request.r(i4743[0], i4743[1], 0, i4742, 'button')
  request.r(i4743[2], i4743[3], 0, i4742, 'level')
  return i4742
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i4744 = root || request.c( 'ToastManager' )
  var i4745 = data
  request.r(i4745[0], i4745[1], 0, i4744, 'toastPanel')
  request.r(i4745[2], i4745[3], 0, i4744, 'toastPopup')
  request.r(i4745[4], i4745[5], 0, i4744, 'canvasGroup')
  request.r(i4745[6], i4745[7], 0, i4744, 'toastText')
  i4744.startY = i4745[8]
  i4744.visibleY = i4745[9]
  i4744.endY = i4745[10]
  i4744.animationTime = i4745[11]
  i4744.animationTimeUp = i4745[12]
  return i4744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i4746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i4747 = data
  i4746.m_Alpha = i4747[0]
  i4746.m_Interactable = !!i4747[1]
  i4746.m_BlocksRaycasts = !!i4747[2]
  i4746.m_IgnoreParentGroups = !!i4747[3]
  i4746.enabled = !!i4747[4]
  return i4746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4749 = data
  i4748.ambientIntensity = i4749[0]
  i4748.reflectionIntensity = i4749[1]
  i4748.ambientMode = i4749[2]
  i4748.ambientLight = new pc.Color(i4749[3], i4749[4], i4749[5], i4749[6])
  i4748.ambientSkyColor = new pc.Color(i4749[7], i4749[8], i4749[9], i4749[10])
  i4748.ambientGroundColor = new pc.Color(i4749[11], i4749[12], i4749[13], i4749[14])
  i4748.ambientEquatorColor = new pc.Color(i4749[15], i4749[16], i4749[17], i4749[18])
  i4748.fogColor = new pc.Color(i4749[19], i4749[20], i4749[21], i4749[22])
  i4748.fogEndDistance = i4749[23]
  i4748.fogStartDistance = i4749[24]
  i4748.fogDensity = i4749[25]
  i4748.fog = !!i4749[26]
  request.r(i4749[27], i4749[28], 0, i4748, 'skybox')
  i4748.fogMode = i4749[29]
  var i4751 = i4749[30]
  var i4750 = []
  for(var i = 0; i < i4751.length; i += 1) {
    i4750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4751[i + 0]) );
  }
  i4748.lightmaps = i4750
  i4748.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4749[31], i4748.lightProbes)
  i4748.lightmapsMode = i4749[32]
  i4748.mixedBakeMode = i4749[33]
  i4748.environmentLightingMode = i4749[34]
  i4748.ambientProbe = new pc.SphericalHarmonicsL2(i4749[35])
  request.r(i4749[36], i4749[37], 0, i4748, 'customReflection')
  request.r(i4749[38], i4749[39], 0, i4748, 'defaultReflection')
  i4748.defaultReflectionMode = i4749[40]
  i4748.defaultReflectionResolution = i4749[41]
  i4748.sunLightObjectId = i4749[42]
  i4748.pixelLightCount = i4749[43]
  i4748.defaultReflectionHDR = !!i4749[44]
  i4748.hasLightDataAsset = !!i4749[45]
  i4748.hasManualGenerate = !!i4749[46]
  return i4748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4755 = data
  request.r(i4755[0], i4755[1], 0, i4754, 'lightmapColor')
  request.r(i4755[2], i4755[3], 0, i4754, 'lightmapDirection')
  request.r(i4755[4], i4755[5], 0, i4754, 'shadowMask')
  return i4754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4756 = root || new UnityEngine.LightProbes()
  var i4757 = data
  return i4756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4763 = data
  var i4765 = i4763[0]
  var i4764 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4765.length; i += 1) {
    i4764.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4765[i + 0]));
  }
  i4762.ShaderCompilationErrors = i4764
  i4762.name = i4763[1]
  i4762.guid = i4763[2]
  var i4767 = i4763[3]
  var i4766 = []
  for(var i = 0; i < i4767.length; i += 1) {
    i4766.push( i4767[i + 0] );
  }
  i4762.shaderDefinedKeywords = i4766
  var i4769 = i4763[4]
  var i4768 = []
  for(var i = 0; i < i4769.length; i += 1) {
    i4768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4769[i + 0]) );
  }
  i4762.passes = i4768
  var i4771 = i4763[5]
  var i4770 = []
  for(var i = 0; i < i4771.length; i += 1) {
    i4770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4771[i + 0]) );
  }
  i4762.usePasses = i4770
  var i4773 = i4763[6]
  var i4772 = []
  for(var i = 0; i < i4773.length; i += 1) {
    i4772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4773[i + 0]) );
  }
  i4762.defaultParameterValues = i4772
  request.r(i4763[7], i4763[8], 0, i4762, 'unityFallbackShader')
  i4762.readDepth = !!i4763[9]
  i4762.hasDepthOnlyPass = !!i4763[10]
  i4762.isCreatedByShaderGraph = !!i4763[11]
  i4762.disableBatching = !!i4763[12]
  i4762.compiled = !!i4763[13]
  return i4762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4777 = data
  i4776.shaderName = i4777[0]
  i4776.errorMessage = i4777[1]
  return i4776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4782 = root || new pc.UnityShaderPass()
  var i4783 = data
  i4782.id = i4783[0]
  i4782.subShaderIndex = i4783[1]
  i4782.name = i4783[2]
  i4782.passType = i4783[3]
  i4782.grabPassTextureName = i4783[4]
  i4782.usePass = !!i4783[5]
  i4782.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4783[6], i4782.zTest)
  i4782.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4783[7], i4782.zWrite)
  i4782.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4783[8], i4782.culling)
  i4782.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4783[9], i4782.blending)
  i4782.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4783[10], i4782.alphaBlending)
  i4782.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4783[11], i4782.colorWriteMask)
  i4782.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4783[12], i4782.offsetUnits)
  i4782.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4783[13], i4782.offsetFactor)
  i4782.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4783[14], i4782.stencilRef)
  i4782.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4783[15], i4782.stencilReadMask)
  i4782.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4783[16], i4782.stencilWriteMask)
  i4782.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4783[17], i4782.stencilOp)
  i4782.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4783[18], i4782.stencilOpFront)
  i4782.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4783[19], i4782.stencilOpBack)
  var i4785 = i4783[20]
  var i4784 = []
  for(var i = 0; i < i4785.length; i += 1) {
    i4784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4785[i + 0]) );
  }
  i4782.tags = i4784
  var i4787 = i4783[21]
  var i4786 = []
  for(var i = 0; i < i4787.length; i += 1) {
    i4786.push( i4787[i + 0] );
  }
  i4782.passDefinedKeywords = i4786
  var i4789 = i4783[22]
  var i4788 = []
  for(var i = 0; i < i4789.length; i += 1) {
    i4788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4789[i + 0]) );
  }
  i4782.passDefinedKeywordGroups = i4788
  var i4791 = i4783[23]
  var i4790 = []
  for(var i = 0; i < i4791.length; i += 1) {
    i4790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4791[i + 0]) );
  }
  i4782.variants = i4790
  var i4793 = i4783[24]
  var i4792 = []
  for(var i = 0; i < i4793.length; i += 1) {
    i4792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4793[i + 0]) );
  }
  i4782.excludedVariants = i4792
  i4782.hasDepthReader = !!i4783[25]
  return i4782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4795 = data
  i4794.val = i4795[0]
  i4794.name = i4795[1]
  return i4794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4797 = data
  i4796.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4797[0], i4796.src)
  i4796.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4797[1], i4796.dst)
  i4796.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4797[2], i4796.op)
  return i4796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4799 = data
  i4798.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4799[0], i4798.pass)
  i4798.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4799[1], i4798.fail)
  i4798.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4799[2], i4798.zFail)
  i4798.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4799[3], i4798.comp)
  return i4798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4803 = data
  i4802.name = i4803[0]
  i4802.value = i4803[1]
  return i4802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4807 = data
  var i4809 = i4807[0]
  var i4808 = []
  for(var i = 0; i < i4809.length; i += 1) {
    i4808.push( i4809[i + 0] );
  }
  i4806.keywords = i4808
  i4806.hasDiscard = !!i4807[1]
  return i4806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4813 = data
  i4812.passId = i4813[0]
  i4812.subShaderIndex = i4813[1]
  var i4815 = i4813[2]
  var i4814 = []
  for(var i = 0; i < i4815.length; i += 1) {
    i4814.push( i4815[i + 0] );
  }
  i4812.keywords = i4814
  i4812.vertexProgram = i4813[3]
  i4812.fragmentProgram = i4813[4]
  i4812.exportedForWebGl2 = !!i4813[5]
  i4812.readDepth = !!i4813[6]
  return i4812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4819 = data
  request.r(i4819[0], i4819[1], 0, i4818, 'shader')
  i4818.pass = i4819[2]
  return i4818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4823 = data
  i4822.name = i4823[0]
  i4822.type = i4823[1]
  i4822.value = new pc.Vec4( i4823[2], i4823[3], i4823[4], i4823[5] )
  i4822.textureValue = i4823[6]
  i4822.shaderPropertyFlag = i4823[7]
  return i4822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4825 = data
  i4824.name = i4825[0]
  request.r(i4825[1], i4825[2], 0, i4824, 'texture')
  i4824.aabb = i4825[3]
  i4824.vertices = i4825[4]
  i4824.triangles = i4825[5]
  i4824.textureRect = UnityEngine.Rect.MinMaxRect(i4825[6], i4825[7], i4825[8], i4825[9])
  i4824.packedRect = UnityEngine.Rect.MinMaxRect(i4825[10], i4825[11], i4825[12], i4825[13])
  i4824.border = new pc.Vec4( i4825[14], i4825[15], i4825[16], i4825[17] )
  i4824.transparency = i4825[18]
  i4824.bounds = i4825[19]
  i4824.pixelsPerUnit = i4825[20]
  i4824.textureWidth = i4825[21]
  i4824.textureHeight = i4825[22]
  i4824.nativeSize = new pc.Vec2( i4825[23], i4825[24] )
  i4824.pivot = new pc.Vec2( i4825[25], i4825[26] )
  i4824.textureRectOffset = new pc.Vec2( i4825[27], i4825[28] )
  return i4824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4827 = data
  i4826.name = i4827[0]
  return i4826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4829 = data
  i4828.name = i4829[0]
  i4828.wrapMode = i4829[1]
  i4828.isLooping = !!i4829[2]
  i4828.length = i4829[3]
  var i4831 = i4829[4]
  var i4830 = []
  for(var i = 0; i < i4831.length; i += 1) {
    i4830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4831[i + 0]) );
  }
  i4828.curves = i4830
  var i4833 = i4829[5]
  var i4832 = []
  for(var i = 0; i < i4833.length; i += 1) {
    i4832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4833[i + 0]) );
  }
  i4828.events = i4832
  i4828.halfPrecision = !!i4829[6]
  i4828._frameRate = i4829[7]
  i4828.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4829[8], i4828.localBounds)
  i4828.hasMuscleCurves = !!i4829[9]
  var i4835 = i4829[10]
  var i4834 = []
  for(var i = 0; i < i4835.length; i += 1) {
    i4834.push( i4835[i + 0] );
  }
  i4828.clipMuscleConstant = i4834
  i4828.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4829[11], i4828.clipBindingConstant)
  return i4828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4839 = data
  i4838.path = i4839[0]
  i4838.hash = i4839[1]
  i4838.componentType = i4839[2]
  i4838.property = i4839[3]
  i4838.keys = i4839[4]
  var i4841 = i4839[5]
  var i4840 = []
  for(var i = 0; i < i4841.length; i += 1) {
    i4840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4841[i + 0]) );
  }
  i4838.objectReferenceKeys = i4840
  return i4838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4845 = data
  i4844.time = i4845[0]
  request.r(i4845[1], i4845[2], 0, i4844, 'value')
  return i4844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4849 = data
  i4848.functionName = i4849[0]
  i4848.floatParameter = i4849[1]
  i4848.intParameter = i4849[2]
  i4848.stringParameter = i4849[3]
  request.r(i4849[4], i4849[5], 0, i4848, 'objectReferenceParameter')
  i4848.time = i4849[6]
  return i4848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4851 = data
  i4850.center = new pc.Vec3( i4851[0], i4851[1], i4851[2] )
  i4850.extends = new pc.Vec3( i4851[3], i4851[4], i4851[5] )
  return i4850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4855 = data
  var i4857 = i4855[0]
  var i4856 = []
  for(var i = 0; i < i4857.length; i += 1) {
    i4856.push( i4857[i + 0] );
  }
  i4854.genericBindings = i4856
  var i4859 = i4855[1]
  var i4858 = []
  for(var i = 0; i < i4859.length; i += 1) {
    i4858.push( i4859[i + 0] );
  }
  i4854.pptrCurveMapping = i4858
  return i4854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4861 = data
  i4860.name = i4861[0]
  i4860.ascent = i4861[1]
  i4860.originalLineHeight = i4861[2]
  i4860.fontSize = i4861[3]
  var i4863 = i4861[4]
  var i4862 = []
  for(var i = 0; i < i4863.length; i += 1) {
    i4862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4863[i + 0]) );
  }
  i4860.characterInfo = i4862
  request.r(i4861[5], i4861[6], 0, i4860, 'texture')
  i4860.originalFontSize = i4861[7]
  return i4860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4867 = data
  i4866.index = i4867[0]
  i4866.advance = i4867[1]
  i4866.bearing = i4867[2]
  i4866.glyphWidth = i4867[3]
  i4866.glyphHeight = i4867[4]
  i4866.minX = i4867[5]
  i4866.maxX = i4867[6]
  i4866.minY = i4867[7]
  i4866.maxY = i4867[8]
  i4866.uvBottomLeftX = i4867[9]
  i4866.uvBottomLeftY = i4867[10]
  i4866.uvBottomRightX = i4867[11]
  i4866.uvBottomRightY = i4867[12]
  i4866.uvTopLeftX = i4867[13]
  i4866.uvTopLeftY = i4867[14]
  i4866.uvTopRightX = i4867[15]
  i4866.uvTopRightY = i4867[16]
  return i4866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4869 = data
  i4868.name = i4869[0]
  var i4871 = i4869[1]
  var i4870 = []
  for(var i = 0; i < i4871.length; i += 1) {
    i4870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4871[i + 0]) );
  }
  i4868.layers = i4870
  var i4873 = i4869[2]
  var i4872 = []
  for(var i = 0; i < i4873.length; i += 1) {
    i4872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4873[i + 0]) );
  }
  i4868.parameters = i4872
  i4868.animationClips = i4869[3]
  i4868.avatarUnsupported = i4869[4]
  return i4868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4877 = data
  i4876.name = i4877[0]
  i4876.defaultWeight = i4877[1]
  i4876.blendingMode = i4877[2]
  i4876.avatarMask = i4877[3]
  i4876.syncedLayerIndex = i4877[4]
  i4876.syncedLayerAffectsTiming = !!i4877[5]
  i4876.syncedLayers = i4877[6]
  i4876.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4877[7], i4876.stateMachine)
  return i4876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4879 = data
  i4878.id = i4879[0]
  i4878.name = i4879[1]
  i4878.path = i4879[2]
  var i4881 = i4879[3]
  var i4880 = []
  for(var i = 0; i < i4881.length; i += 1) {
    i4880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4881[i + 0]) );
  }
  i4878.states = i4880
  var i4883 = i4879[4]
  var i4882 = []
  for(var i = 0; i < i4883.length; i += 1) {
    i4882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4883[i + 0]) );
  }
  i4878.machines = i4882
  var i4885 = i4879[5]
  var i4884 = []
  for(var i = 0; i < i4885.length; i += 1) {
    i4884.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4885[i + 0]) );
  }
  i4878.entryStateTransitions = i4884
  var i4887 = i4879[6]
  var i4886 = []
  for(var i = 0; i < i4887.length; i += 1) {
    i4886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4887[i + 0]) );
  }
  i4878.exitStateTransitions = i4886
  var i4889 = i4879[7]
  var i4888 = []
  for(var i = 0; i < i4889.length; i += 1) {
    i4888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4889[i + 0]) );
  }
  i4878.anyStateTransitions = i4888
  i4878.defaultStateId = i4879[8]
  return i4878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4893 = data
  i4892.id = i4893[0]
  i4892.name = i4893[1]
  i4892.cycleOffset = i4893[2]
  i4892.cycleOffsetParameter = i4893[3]
  i4892.cycleOffsetParameterActive = !!i4893[4]
  i4892.mirror = !!i4893[5]
  i4892.mirrorParameter = i4893[6]
  i4892.mirrorParameterActive = !!i4893[7]
  i4892.motionId = i4893[8]
  i4892.nameHash = i4893[9]
  i4892.fullPathHash = i4893[10]
  i4892.speed = i4893[11]
  i4892.speedParameter = i4893[12]
  i4892.speedParameterActive = !!i4893[13]
  i4892.tag = i4893[14]
  i4892.tagHash = i4893[15]
  i4892.writeDefaultValues = !!i4893[16]
  var i4895 = i4893[17]
  var i4894 = []
  for(var i = 0; i < i4895.length; i += 2) {
  request.r(i4895[i + 0], i4895[i + 1], 2, i4894, '')
  }
  i4892.behaviours = i4894
  var i4897 = i4893[18]
  var i4896 = []
  for(var i = 0; i < i4897.length; i += 1) {
    i4896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4897[i + 0]) );
  }
  i4892.transitions = i4896
  return i4892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4903 = data
  i4902.fullPath = i4903[0]
  i4902.canTransitionToSelf = !!i4903[1]
  i4902.duration = i4903[2]
  i4902.exitTime = i4903[3]
  i4902.hasExitTime = !!i4903[4]
  i4902.hasFixedDuration = !!i4903[5]
  i4902.interruptionSource = i4903[6]
  i4902.offset = i4903[7]
  i4902.orderedInterruption = !!i4903[8]
  i4902.destinationStateId = i4903[9]
  i4902.isExit = !!i4903[10]
  i4902.mute = !!i4903[11]
  i4902.solo = !!i4903[12]
  var i4905 = i4903[13]
  var i4904 = []
  for(var i = 0; i < i4905.length; i += 1) {
    i4904.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4905[i + 0]) );
  }
  i4902.conditions = i4904
  return i4902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4911 = data
  i4910.destinationStateId = i4911[0]
  i4910.isExit = !!i4911[1]
  i4910.mute = !!i4911[2]
  i4910.solo = !!i4911[3]
  var i4913 = i4911[4]
  var i4912 = []
  for(var i = 0; i < i4913.length; i += 1) {
    i4912.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4913[i + 0]) );
  }
  i4910.conditions = i4912
  return i4910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4917 = data
  i4916.mode = i4917[0]
  i4916.parameter = i4917[1]
  i4916.threshold = i4917[2]
  return i4916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4921 = data
  i4920.defaultBool = !!i4921[0]
  i4920.defaultFloat = i4921[1]
  i4920.defaultInt = i4921[2]
  i4920.name = i4921[3]
  i4920.nameHash = i4921[4]
  i4920.type = i4921[5]
  return i4920
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4922 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4923 = data
  i4922.useSafeMode = !!i4923[0]
  i4922.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4923[1], i4922.safeModeOptions)
  i4922.timeScale = i4923[2]
  i4922.unscaledTimeScale = i4923[3]
  i4922.useSmoothDeltaTime = !!i4923[4]
  i4922.maxSmoothUnscaledTime = i4923[5]
  i4922.rewindCallbackMode = i4923[6]
  i4922.showUnityEditorReport = !!i4923[7]
  i4922.logBehaviour = i4923[8]
  i4922.drawGizmos = !!i4923[9]
  i4922.defaultRecyclable = !!i4923[10]
  i4922.defaultAutoPlay = i4923[11]
  i4922.defaultUpdateType = i4923[12]
  i4922.defaultTimeScaleIndependent = !!i4923[13]
  i4922.defaultEaseType = i4923[14]
  i4922.defaultEaseOvershootOrAmplitude = i4923[15]
  i4922.defaultEasePeriod = i4923[16]
  i4922.defaultAutoKill = !!i4923[17]
  i4922.defaultLoopType = i4923[18]
  i4922.debugMode = !!i4923[19]
  i4922.debugStoreTargetId = !!i4923[20]
  i4922.showPreviewPanel = !!i4923[21]
  i4922.storeSettingsLocation = i4923[22]
  i4922.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4923[23], i4922.modules)
  i4922.createASMDEF = !!i4923[24]
  i4922.showPlayingTweens = !!i4923[25]
  i4922.showPausedTweens = !!i4923[26]
  return i4922
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4924 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4925 = data
  i4924.logBehaviour = i4925[0]
  i4924.nestedTweenFailureBehaviour = i4925[1]
  return i4924
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4926 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4927 = data
  i4926.showPanel = !!i4927[0]
  i4926.audioEnabled = !!i4927[1]
  i4926.physicsEnabled = !!i4927[2]
  i4926.physics2DEnabled = !!i4927[3]
  i4926.spriteEnabled = !!i4927[4]
  i4926.uiEnabled = !!i4927[5]
  i4926.textMeshProEnabled = !!i4927[6]
  i4926.tk2DEnabled = !!i4927[7]
  i4926.deAudioEnabled = !!i4927[8]
  i4926.deUnityExtendedEnabled = !!i4927[9]
  i4926.epoOutlineEnabled = !!i4927[10]
  return i4926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4929 = data
  var i4931 = i4929[0]
  var i4930 = []
  for(var i = 0; i < i4931.length; i += 1) {
    i4930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4931[i + 0]) );
  }
  i4928.files = i4930
  i4928.componentToPrefabIds = i4929[1]
  return i4928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4935 = data
  i4934.path = i4935[0]
  request.r(i4935[1], i4935[2], 0, i4934, 'unityObject')
  return i4934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4937 = data
  var i4939 = i4937[0]
  var i4938 = []
  for(var i = 0; i < i4939.length; i += 1) {
    i4938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4939[i + 0]) );
  }
  i4936.scriptsExecutionOrder = i4938
  var i4941 = i4937[1]
  var i4940 = []
  for(var i = 0; i < i4941.length; i += 1) {
    i4940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4941[i + 0]) );
  }
  i4936.sortingLayers = i4940
  var i4943 = i4937[2]
  var i4942 = []
  for(var i = 0; i < i4943.length; i += 1) {
    i4942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4943[i + 0]) );
  }
  i4936.cullingLayers = i4942
  i4936.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4937[3], i4936.timeSettings)
  i4936.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4937[4], i4936.physicsSettings)
  i4936.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4937[5], i4936.physics2DSettings)
  i4936.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4937[6], i4936.qualitySettings)
  i4936.enableRealtimeShadows = !!i4937[7]
  i4936.enableAutoInstancing = !!i4937[8]
  i4936.enableStaticBatching = !!i4937[9]
  i4936.enableDynamicBatching = !!i4937[10]
  i4936.usePreservativeDynamicBatching = !!i4937[11]
  i4936.lightmapEncodingQuality = i4937[12]
  i4936.desiredColorSpace = i4937[13]
  var i4945 = i4937[14]
  var i4944 = []
  for(var i = 0; i < i4945.length; i += 1) {
    i4944.push( i4945[i + 0] );
  }
  i4936.allTags = i4944
  return i4936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4949 = data
  i4948.name = i4949[0]
  i4948.value = i4949[1]
  return i4948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4953 = data
  i4952.id = i4953[0]
  i4952.name = i4953[1]
  i4952.value = i4953[2]
  return i4952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4957 = data
  i4956.id = i4957[0]
  i4956.name = i4957[1]
  return i4956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4959 = data
  i4958.fixedDeltaTime = i4959[0]
  i4958.maximumDeltaTime = i4959[1]
  i4958.timeScale = i4959[2]
  i4958.maximumParticleTimestep = i4959[3]
  return i4958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4961 = data
  i4960.gravity = new pc.Vec3( i4961[0], i4961[1], i4961[2] )
  i4960.defaultSolverIterations = i4961[3]
  i4960.bounceThreshold = i4961[4]
  i4960.autoSyncTransforms = !!i4961[5]
  i4960.autoSimulation = !!i4961[6]
  var i4963 = i4961[7]
  var i4962 = []
  for(var i = 0; i < i4963.length; i += 1) {
    i4962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4963[i + 0]) );
  }
  i4960.collisionMatrix = i4962
  return i4960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4967 = data
  i4966.enabled = !!i4967[0]
  i4966.layerId = i4967[1]
  i4966.otherLayerId = i4967[2]
  return i4966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4969 = data
  request.r(i4969[0], i4969[1], 0, i4968, 'material')
  i4968.gravity = new pc.Vec2( i4969[2], i4969[3] )
  i4968.positionIterations = i4969[4]
  i4968.velocityIterations = i4969[5]
  i4968.velocityThreshold = i4969[6]
  i4968.maxLinearCorrection = i4969[7]
  i4968.maxAngularCorrection = i4969[8]
  i4968.maxTranslationSpeed = i4969[9]
  i4968.maxRotationSpeed = i4969[10]
  i4968.baumgarteScale = i4969[11]
  i4968.baumgarteTOIScale = i4969[12]
  i4968.timeToSleep = i4969[13]
  i4968.linearSleepTolerance = i4969[14]
  i4968.angularSleepTolerance = i4969[15]
  i4968.defaultContactOffset = i4969[16]
  i4968.autoSimulation = !!i4969[17]
  i4968.queriesHitTriggers = !!i4969[18]
  i4968.queriesStartInColliders = !!i4969[19]
  i4968.callbacksOnDisable = !!i4969[20]
  i4968.reuseCollisionCallbacks = !!i4969[21]
  i4968.autoSyncTransforms = !!i4969[22]
  var i4971 = i4969[23]
  var i4970 = []
  for(var i = 0; i < i4971.length; i += 1) {
    i4970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4971[i + 0]) );
  }
  i4968.collisionMatrix = i4970
  return i4968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4975 = data
  i4974.enabled = !!i4975[0]
  i4974.layerId = i4975[1]
  i4974.otherLayerId = i4975[2]
  return i4974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4977 = data
  var i4979 = i4977[0]
  var i4978 = []
  for(var i = 0; i < i4979.length; i += 1) {
    i4978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4979[i + 0]) );
  }
  i4976.qualityLevels = i4978
  var i4981 = i4977[1]
  var i4980 = []
  for(var i = 0; i < i4981.length; i += 1) {
    i4980.push( i4981[i + 0] );
  }
  i4976.names = i4980
  i4976.shadows = i4977[2]
  i4976.anisotropicFiltering = i4977[3]
  i4976.antiAliasing = i4977[4]
  i4976.lodBias = i4977[5]
  i4976.shadowCascades = i4977[6]
  i4976.shadowDistance = i4977[7]
  i4976.shadowmaskMode = i4977[8]
  i4976.shadowProjection = i4977[9]
  i4976.shadowResolution = i4977[10]
  i4976.softParticles = !!i4977[11]
  i4976.softVegetation = !!i4977[12]
  i4976.activeColorSpace = i4977[13]
  i4976.desiredColorSpace = i4977[14]
  i4976.masterTextureLimit = i4977[15]
  i4976.maxQueuedFrames = i4977[16]
  i4976.particleRaycastBudget = i4977[17]
  i4976.pixelLightCount = i4977[18]
  i4976.realtimeReflectionProbes = !!i4977[19]
  i4976.shadowCascade2Split = i4977[20]
  i4976.shadowCascade4Split = new pc.Vec3( i4977[21], i4977[22], i4977[23] )
  i4976.streamingMipmapsActive = !!i4977[24]
  i4976.vSyncCount = i4977[25]
  i4976.asyncUploadBufferSize = i4977[26]
  i4976.asyncUploadTimeSlice = i4977[27]
  i4976.billboardsFaceCameraPosition = !!i4977[28]
  i4976.shadowNearPlaneOffset = i4977[29]
  i4976.streamingMipmapsMemoryBudget = i4977[30]
  i4976.maximumLODLevel = i4977[31]
  i4976.streamingMipmapsAddAllCameras = !!i4977[32]
  i4976.streamingMipmapsMaxLevelReduction = i4977[33]
  i4976.streamingMipmapsRenderersPerFrame = i4977[34]
  i4976.resolutionScalingFixedDPIFactor = i4977[35]
  i4976.streamingMipmapsMaxFileIORequests = i4977[36]
  i4976.currentQualityLevel = i4977[37]
  return i4976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i4984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i4985 = data
  var i4987 = i4985[0]
  var i4986 = []
  for(var i = 0; i < i4987.length; i += 1) {
    i4986.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i4987[i + 0]) );
  }
  i4984.groups = i4986
  var i4989 = i4985[1]
  var i4988 = []
  for(var i = 0; i < i4989.length; i += 1) {
    i4988.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i4989[i + 0]) );
  }
  i4984.snapshots = i4988
  return i4984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i4992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i4993 = data
  i4992.id = i4993[0]
  i4992.childGroupIds = i4993[1]
  i4992.name = i4993[2]
  return i4992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i4996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i4997 = data
  i4996.id = i4997[0]
  var i4999 = i4997[1]
  var i4998 = []
  for(var i = 0; i < i4999.length; i += 1) {
    i4998.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i4999[i + 0]) );
  }
  i4996.parameters = i4998
  return i4996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i5002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i5003 = data
  i5002.name = i5003[0]
  i5002.value = i5003[1]
  return i5002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5007 = data
  i5006.weight = i5007[0]
  i5006.vertices = i5007[1]
  i5006.normals = i5007[2]
  i5006.tangents = i5007[3]
  return i5006
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[74],"75":[39],"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[77],"84":[35],"85":[35],"86":[35],"87":[35],"88":[35],"89":[35],"90":[35],"91":[35],"92":[35],"93":[35],"94":[35],"95":[35],"96":[35],"97":[39],"98":[99],"100":[101],"102":[101],"51":[44],"103":[104],"105":[12],"106":[25],"107":[12],"108":[109],"110":[109],"111":[46],"112":[25],"113":[12],"114":[10],"29":[12],"115":[44],"116":[44],"54":[51],"45":[55,44],"117":[44],"53":[51],"118":[44],"119":[44],"120":[44],"121":[44],"122":[44],"123":[44],"124":[44],"125":[44],"126":[44],"127":[55,44],"128":[44],"129":[44],"130":[44],"131":[44],"47":[55,44],"132":[44],"133":[59],"134":[59],"60":[59],"135":[59],"136":[39],"137":[39]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level3_Crown_Playable_NewTest","UnityEngine.GameObject","BasicDrag","BD_CameraFollow","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.AudioClip","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","PlayParticlesOnCollision","UnityEngine.CircleCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.PolygonCollider2D","UnityEngine.BoxCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SpriteMask","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.TrailRenderer","BD_Progress","BD_Clamp","BD_ToolRotate","BD_AnimatorDrag","UnityEngine.Rigidbody2D","BD_SpriteChange","BD_ProgressHelper","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableRouter","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","TeaseTapCTA","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "27.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "16Sept2026_Level_3_1_Step_1to3_v4";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1696";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3876";

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

Deserializers.buildID = "80c0bb45-11d1-429e-950e-d002eebef2a7";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

