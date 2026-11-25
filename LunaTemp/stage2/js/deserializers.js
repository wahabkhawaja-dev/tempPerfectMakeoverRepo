var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4340 = root || request.c( 'UnityEngine.JointSpring' )
  var i4341 = data
  i4340.spring = i4341[0]
  i4340.damper = i4341[1]
  i4340.targetPosition = i4341[2]
  return i4340
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4342 = root || request.c( 'UnityEngine.JointMotor' )
  var i4343 = data
  i4342.m_TargetVelocity = i4343[0]
  i4342.m_Force = i4343[1]
  i4342.m_FreeSpin = i4343[2]
  return i4342
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4344 = root || request.c( 'UnityEngine.JointLimits' )
  var i4345 = data
  i4344.m_Min = i4345[0]
  i4344.m_Max = i4345[1]
  i4344.m_Bounciness = i4345[2]
  i4344.m_BounceMinVelocity = i4345[3]
  i4344.m_ContactDistance = i4345[4]
  i4344.minBounce = i4345[5]
  i4344.maxBounce = i4345[6]
  return i4344
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4346 = root || request.c( 'UnityEngine.JointDrive' )
  var i4347 = data
  i4346.m_PositionSpring = i4347[0]
  i4346.m_PositionDamper = i4347[1]
  i4346.m_MaximumForce = i4347[2]
  i4346.m_UseAcceleration = i4347[3]
  return i4346
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4348 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4349 = data
  i4348.m_Spring = i4349[0]
  i4348.m_Damper = i4349[1]
  return i4348
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4350 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4351 = data
  i4350.m_Limit = i4351[0]
  i4350.m_Bounciness = i4351[1]
  i4350.m_ContactDistance = i4351[2]
  return i4350
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4352 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4353 = data
  i4352.m_ExtremumSlip = i4353[0]
  i4352.m_ExtremumValue = i4353[1]
  i4352.m_AsymptoteSlip = i4353[2]
  i4352.m_AsymptoteValue = i4353[3]
  i4352.m_Stiffness = i4353[4]
  return i4352
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4354 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4355 = data
  i4354.m_LowerAngle = i4355[0]
  i4354.m_UpperAngle = i4355[1]
  return i4354
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4356 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4357 = data
  i4356.m_MotorSpeed = i4357[0]
  i4356.m_MaximumMotorTorque = i4357[1]
  return i4356
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4358 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4359 = data
  i4358.m_DampingRatio = i4359[0]
  i4358.m_Frequency = i4359[1]
  i4358.m_Angle = i4359[2]
  return i4358
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4360 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4361 = data
  i4360.m_LowerTranslation = i4361[0]
  i4360.m_UpperTranslation = i4361[1]
  return i4360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4362 = root || new pc.UnityMaterial()
  var i4363 = data
  i4362.name = i4363[0]
  request.r(i4363[1], i4363[2], 0, i4362, 'shader')
  i4362.renderQueue = i4363[3]
  i4362.enableInstancing = !!i4363[4]
  var i4365 = i4363[5]
  var i4364 = []
  for(var i = 0; i < i4365.length; i += 1) {
    i4364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4365[i + 0]) );
  }
  i4362.floatParameters = i4364
  var i4367 = i4363[6]
  var i4366 = []
  for(var i = 0; i < i4367.length; i += 1) {
    i4366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4367[i + 0]) );
  }
  i4362.colorParameters = i4366
  var i4369 = i4363[7]
  var i4368 = []
  for(var i = 0; i < i4369.length; i += 1) {
    i4368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4369[i + 0]) );
  }
  i4362.vectorParameters = i4368
  var i4371 = i4363[8]
  var i4370 = []
  for(var i = 0; i < i4371.length; i += 1) {
    i4370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4371[i + 0]) );
  }
  i4362.textureParameters = i4370
  var i4373 = i4363[9]
  var i4372 = []
  for(var i = 0; i < i4373.length; i += 1) {
    i4372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4373[i + 0]) );
  }
  i4362.materialFlags = i4372
  return i4362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4377 = data
  i4376.name = i4377[0]
  i4376.value = i4377[1]
  return i4376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4381 = data
  i4380.name = i4381[0]
  i4380.value = new pc.Color(i4381[1], i4381[2], i4381[3], i4381[4])
  return i4380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4385 = data
  i4384.name = i4385[0]
  i4384.value = new pc.Vec4( i4385[1], i4385[2], i4385[3], i4385[4] )
  return i4384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4389 = data
  i4388.name = i4389[0]
  request.r(i4389[1], i4389[2], 0, i4388, 'value')
  return i4388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4393 = data
  i4392.name = i4393[0]
  i4392.enabled = !!i4393[1]
  return i4392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4395 = data
  i4394.name = i4395[0]
  i4394.width = i4395[1]
  i4394.height = i4395[2]
  i4394.mipmapCount = i4395[3]
  i4394.anisoLevel = i4395[4]
  i4394.filterMode = i4395[5]
  i4394.hdr = !!i4395[6]
  i4394.format = i4395[7]
  i4394.wrapMode = i4395[8]
  i4394.alphaIsTransparency = !!i4395[9]
  i4394.alphaSource = i4395[10]
  i4394.graphicsFormat = i4395[11]
  i4394.sRGBTexture = !!i4395[12]
  i4394.desiredColorSpace = i4395[13]
  i4394.wrapU = i4395[14]
  i4394.wrapV = i4395[15]
  return i4394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4397 = data
  i4396.name = i4397[0]
  i4396.halfPrecision = !!i4397[1]
  i4396.useSimplification = !!i4397[2]
  i4396.useUInt32IndexFormat = !!i4397[3]
  i4396.vertexCount = i4397[4]
  i4396.aabb = i4397[5]
  var i4399 = i4397[6]
  var i4398 = []
  for(var i = 0; i < i4399.length; i += 1) {
    i4398.push( !!i4399[i + 0] );
  }
  i4396.streams = i4398
  i4396.vertices = i4397[7]
  var i4401 = i4397[8]
  var i4400 = []
  for(var i = 0; i < i4401.length; i += 1) {
    i4400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4401[i + 0]) );
  }
  i4396.subMeshes = i4400
  var i4403 = i4397[9]
  var i4402 = []
  for(var i = 0; i < i4403.length; i += 16) {
    i4402.push( new pc.Mat4().setData(i4403[i + 0], i4403[i + 1], i4403[i + 2], i4403[i + 3],  i4403[i + 4], i4403[i + 5], i4403[i + 6], i4403[i + 7],  i4403[i + 8], i4403[i + 9], i4403[i + 10], i4403[i + 11],  i4403[i + 12], i4403[i + 13], i4403[i + 14], i4403[i + 15]) );
  }
  i4396.bindposes = i4402
  var i4405 = i4397[10]
  var i4404 = []
  for(var i = 0; i < i4405.length; i += 1) {
    i4404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4405[i + 0]) );
  }
  i4396.blendShapes = i4404
  return i4396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4411 = data
  i4410.triangles = i4411[0]
  return i4410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4417 = data
  i4416.name = i4417[0]
  var i4419 = i4417[1]
  var i4418 = []
  for(var i = 0; i < i4419.length; i += 1) {
    i4418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4419[i + 0]) );
  }
  i4416.frames = i4418
  return i4416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4421 = data
  i4420.position = new pc.Vec3( i4421[0], i4421[1], i4421[2] )
  i4420.scale = new pc.Vec3( i4421[3], i4421[4], i4421[5] )
  i4420.rotation = new pc.Quat(i4421[6], i4421[7], i4421[8], i4421[9])
  return i4420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4423 = data
  i4422.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4423[0], i4422.main)
  i4422.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4423[1], i4422.colorBySpeed)
  i4422.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4423[2], i4422.colorOverLifetime)
  i4422.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4423[3], i4422.emission)
  i4422.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4423[4], i4422.rotationBySpeed)
  i4422.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4423[5], i4422.rotationOverLifetime)
  i4422.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4423[6], i4422.shape)
  i4422.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4423[7], i4422.sizeBySpeed)
  i4422.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4423[8], i4422.sizeOverLifetime)
  i4422.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4423[9], i4422.textureSheetAnimation)
  i4422.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4423[10], i4422.velocityOverLifetime)
  i4422.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4423[11], i4422.noise)
  i4422.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4423[12], i4422.inheritVelocity)
  i4422.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4423[13], i4422.forceOverLifetime)
  i4422.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4423[14], i4422.limitVelocityOverLifetime)
  i4422.useAutoRandomSeed = !!i4423[15]
  i4422.randomSeed = i4423[16]
  return i4422
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4424 = root || new pc.ParticleSystemMain()
  var i4425 = data
  i4424.duration = i4425[0]
  i4424.loop = !!i4425[1]
  i4424.prewarm = !!i4425[2]
  i4424.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4425[3], i4424.startDelay)
  i4424.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4425[4], i4424.startLifetime)
  i4424.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4425[5], i4424.startSpeed)
  i4424.startSize3D = !!i4425[6]
  i4424.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4425[7], i4424.startSizeX)
  i4424.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4425[8], i4424.startSizeY)
  i4424.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4425[9], i4424.startSizeZ)
  i4424.startRotation3D = !!i4425[10]
  i4424.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4425[11], i4424.startRotationX)
  i4424.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4425[12], i4424.startRotationY)
  i4424.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4425[13], i4424.startRotationZ)
  i4424.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4425[14], i4424.startColor)
  i4424.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4425[15], i4424.gravityModifier)
  i4424.simulationSpace = i4425[16]
  request.r(i4425[17], i4425[18], 0, i4424, 'customSimulationSpace')
  i4424.simulationSpeed = i4425[19]
  i4424.useUnscaledTime = !!i4425[20]
  i4424.scalingMode = i4425[21]
  i4424.playOnAwake = !!i4425[22]
  i4424.maxParticles = i4425[23]
  i4424.emitterVelocityMode = i4425[24]
  i4424.stopAction = i4425[25]
  return i4424
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4426 = root || new pc.MinMaxCurve()
  var i4427 = data
  i4426.mode = i4427[0]
  i4426.curveMin = new pc.AnimationCurve( { keys_flow: i4427[1] } )
  i4426.curveMax = new pc.AnimationCurve( { keys_flow: i4427[2] } )
  i4426.curveMultiplier = i4427[3]
  i4426.constantMin = i4427[4]
  i4426.constantMax = i4427[5]
  return i4426
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4428 = root || new pc.MinMaxGradient()
  var i4429 = data
  i4428.mode = i4429[0]
  i4428.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4429[1], i4428.gradientMin)
  i4428.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4429[2], i4428.gradientMax)
  i4428.colorMin = new pc.Color(i4429[3], i4429[4], i4429[5], i4429[6])
  i4428.colorMax = new pc.Color(i4429[7], i4429[8], i4429[9], i4429[10])
  return i4428
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4431 = data
  i4430.mode = i4431[0]
  var i4433 = i4431[1]
  var i4432 = []
  for(var i = 0; i < i4433.length; i += 1) {
    i4432.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4433[i + 0]) );
  }
  i4430.colorKeys = i4432
  var i4435 = i4431[2]
  var i4434 = []
  for(var i = 0; i < i4435.length; i += 1) {
    i4434.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4435[i + 0]) );
  }
  i4430.alphaKeys = i4434
  return i4430
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4436 = root || new pc.ParticleSystemColorBySpeed()
  var i4437 = data
  i4436.enabled = !!i4437[0]
  i4436.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4437[1], i4436.color)
  i4436.range = new pc.Vec2( i4437[2], i4437[3] )
  return i4436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4441 = data
  i4440.color = new pc.Color(i4441[0], i4441[1], i4441[2], i4441[3])
  i4440.time = i4441[4]
  return i4440
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4445 = data
  i4444.alpha = i4445[0]
  i4444.time = i4445[1]
  return i4444
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4446 = root || new pc.ParticleSystemColorOverLifetime()
  var i4447 = data
  i4446.enabled = !!i4447[0]
  i4446.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4447[1], i4446.color)
  return i4446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4448 = root || new pc.ParticleSystemEmitter()
  var i4449 = data
  i4448.enabled = !!i4449[0]
  i4448.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4449[1], i4448.rateOverTime)
  i4448.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4449[2], i4448.rateOverDistance)
  var i4451 = i4449[3]
  var i4450 = []
  for(var i = 0; i < i4451.length; i += 1) {
    i4450.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4451[i + 0]) );
  }
  i4448.bursts = i4450
  return i4448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4454 = root || new pc.ParticleSystemBurst()
  var i4455 = data
  i4454.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4455[0], i4454.count)
  i4454.cycleCount = i4455[1]
  i4454.minCount = i4455[2]
  i4454.maxCount = i4455[3]
  i4454.repeatInterval = i4455[4]
  i4454.time = i4455[5]
  return i4454
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4456 = root || new pc.ParticleSystemRotationBySpeed()
  var i4457 = data
  i4456.enabled = !!i4457[0]
  i4456.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4457[1], i4456.x)
  i4456.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4457[2], i4456.y)
  i4456.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4457[3], i4456.z)
  i4456.separateAxes = !!i4457[4]
  i4456.range = new pc.Vec2( i4457[5], i4457[6] )
  return i4456
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4458 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4459 = data
  i4458.enabled = !!i4459[0]
  i4458.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4459[1], i4458.x)
  i4458.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4459[2], i4458.y)
  i4458.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4459[3], i4458.z)
  i4458.separateAxes = !!i4459[4]
  return i4458
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4460 = root || new pc.ParticleSystemShape()
  var i4461 = data
  i4460.enabled = !!i4461[0]
  i4460.shapeType = i4461[1]
  i4460.randomDirectionAmount = i4461[2]
  i4460.sphericalDirectionAmount = i4461[3]
  i4460.randomPositionAmount = i4461[4]
  i4460.alignToDirection = !!i4461[5]
  i4460.radius = i4461[6]
  i4460.radiusMode = i4461[7]
  i4460.radiusSpread = i4461[8]
  i4460.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4461[9], i4460.radiusSpeed)
  i4460.radiusThickness = i4461[10]
  i4460.angle = i4461[11]
  i4460.length = i4461[12]
  i4460.boxThickness = new pc.Vec3( i4461[13], i4461[14], i4461[15] )
  i4460.meshShapeType = i4461[16]
  request.r(i4461[17], i4461[18], 0, i4460, 'mesh')
  request.r(i4461[19], i4461[20], 0, i4460, 'meshRenderer')
  request.r(i4461[21], i4461[22], 0, i4460, 'skinnedMeshRenderer')
  i4460.useMeshMaterialIndex = !!i4461[23]
  i4460.meshMaterialIndex = i4461[24]
  i4460.useMeshColors = !!i4461[25]
  i4460.normalOffset = i4461[26]
  i4460.arc = i4461[27]
  i4460.arcMode = i4461[28]
  i4460.arcSpread = i4461[29]
  i4460.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4461[30], i4460.arcSpeed)
  i4460.donutRadius = i4461[31]
  i4460.position = new pc.Vec3( i4461[32], i4461[33], i4461[34] )
  i4460.rotation = new pc.Vec3( i4461[35], i4461[36], i4461[37] )
  i4460.scale = new pc.Vec3( i4461[38], i4461[39], i4461[40] )
  return i4460
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4462 = root || new pc.ParticleSystemSizeBySpeed()
  var i4463 = data
  i4462.enabled = !!i4463[0]
  i4462.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4463[1], i4462.x)
  i4462.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4463[2], i4462.y)
  i4462.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4463[3], i4462.z)
  i4462.separateAxes = !!i4463[4]
  i4462.range = new pc.Vec2( i4463[5], i4463[6] )
  return i4462
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4464 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4465 = data
  i4464.enabled = !!i4465[0]
  i4464.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4465[1], i4464.x)
  i4464.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4465[2], i4464.y)
  i4464.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4465[3], i4464.z)
  i4464.separateAxes = !!i4465[4]
  return i4464
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4466 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4467 = data
  i4466.enabled = !!i4467[0]
  i4466.mode = i4467[1]
  i4466.animation = i4467[2]
  i4466.numTilesX = i4467[3]
  i4466.numTilesY = i4467[4]
  i4466.useRandomRow = !!i4467[5]
  i4466.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4467[6], i4466.frameOverTime)
  i4466.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4467[7], i4466.startFrame)
  i4466.cycleCount = i4467[8]
  i4466.rowIndex = i4467[9]
  i4466.flipU = i4467[10]
  i4466.flipV = i4467[11]
  i4466.spriteCount = i4467[12]
  var i4469 = i4467[13]
  var i4468 = []
  for(var i = 0; i < i4469.length; i += 2) {
  request.r(i4469[i + 0], i4469[i + 1], 2, i4468, '')
  }
  i4466.sprites = i4468
  return i4466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4472 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4473 = data
  i4472.enabled = !!i4473[0]
  i4472.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4473[1], i4472.x)
  i4472.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4473[2], i4472.y)
  i4472.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4473[3], i4472.z)
  i4472.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4473[4], i4472.radial)
  i4472.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4473[5], i4472.speedModifier)
  i4472.space = i4473[6]
  i4472.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4473[7], i4472.orbitalX)
  i4472.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4473[8], i4472.orbitalY)
  i4472.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4473[9], i4472.orbitalZ)
  i4472.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4473[10], i4472.orbitalOffsetX)
  i4472.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4473[11], i4472.orbitalOffsetY)
  i4472.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4473[12], i4472.orbitalOffsetZ)
  return i4472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4474 = root || new pc.ParticleSystemNoise()
  var i4475 = data
  i4474.enabled = !!i4475[0]
  i4474.separateAxes = !!i4475[1]
  i4474.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4475[2], i4474.strengthX)
  i4474.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4475[3], i4474.strengthY)
  i4474.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4475[4], i4474.strengthZ)
  i4474.frequency = i4475[5]
  i4474.damping = !!i4475[6]
  i4474.octaveCount = i4475[7]
  i4474.octaveMultiplier = i4475[8]
  i4474.octaveScale = i4475[9]
  i4474.quality = i4475[10]
  i4474.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4475[11], i4474.scrollSpeed)
  i4474.scrollSpeedMultiplier = i4475[12]
  i4474.remapEnabled = !!i4475[13]
  i4474.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4475[14], i4474.remapX)
  i4474.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4475[15], i4474.remapY)
  i4474.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4475[16], i4474.remapZ)
  i4474.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4475[17], i4474.positionAmount)
  i4474.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4475[18], i4474.rotationAmount)
  i4474.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4475[19], i4474.sizeAmount)
  return i4474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4476 = root || new pc.ParticleSystemInheritVelocity()
  var i4477 = data
  i4476.enabled = !!i4477[0]
  i4476.mode = i4477[1]
  i4476.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4477[2], i4476.curve)
  return i4476
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4478 = root || new pc.ParticleSystemForceOverLifetime()
  var i4479 = data
  i4478.enabled = !!i4479[0]
  i4478.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4479[1], i4478.x)
  i4478.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4479[2], i4478.y)
  i4478.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4479[3], i4478.z)
  i4478.space = i4479[4]
  i4478.randomized = !!i4479[5]
  return i4478
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4480 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4481 = data
  i4480.enabled = !!i4481[0]
  i4480.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4481[1], i4480.limit)
  i4480.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4481[2], i4480.limitX)
  i4480.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4481[3], i4480.limitY)
  i4480.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4481[4], i4480.limitZ)
  i4480.dampen = i4481[5]
  i4480.separateAxes = !!i4481[6]
  i4480.space = i4481[7]
  i4480.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4481[8], i4480.drag)
  i4480.multiplyDragByParticleSize = !!i4481[9]
  i4480.multiplyDragByParticleVelocity = !!i4481[10]
  return i4480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4483 = data
  request.r(i4483[0], i4483[1], 0, i4482, 'mesh')
  i4482.meshCount = i4483[2]
  i4482.activeVertexStreamsCount = i4483[3]
  i4482.alignment = i4483[4]
  i4482.renderMode = i4483[5]
  i4482.sortMode = i4483[6]
  i4482.lengthScale = i4483[7]
  i4482.velocityScale = i4483[8]
  i4482.cameraVelocityScale = i4483[9]
  i4482.normalDirection = i4483[10]
  i4482.sortingFudge = i4483[11]
  i4482.minParticleSize = i4483[12]
  i4482.maxParticleSize = i4483[13]
  i4482.pivot = new pc.Vec3( i4483[14], i4483[15], i4483[16] )
  request.r(i4483[17], i4483[18], 0, i4482, 'trailMaterial')
  i4482.applyActiveColorSpace = !!i4483[19]
  i4482.enabled = !!i4483[20]
  request.r(i4483[21], i4483[22], 0, i4482, 'sharedMaterial')
  var i4485 = i4483[23]
  var i4484 = []
  for(var i = 0; i < i4485.length; i += 2) {
  request.r(i4485[i + 0], i4485[i + 1], 2, i4484, '')
  }
  i4482.sharedMaterials = i4484
  i4482.receiveShadows = !!i4483[24]
  i4482.shadowCastingMode = i4483[25]
  i4482.sortingLayerID = i4483[26]
  i4482.sortingOrder = i4483[27]
  i4482.lightmapIndex = i4483[28]
  i4482.lightmapSceneIndex = i4483[29]
  i4482.lightmapScaleOffset = new pc.Vec4( i4483[30], i4483[31], i4483[32], i4483[33] )
  i4482.lightProbeUsage = i4483[34]
  i4482.reflectionProbeUsage = i4483[35]
  return i4482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4489 = data
  i4488.name = i4489[0]
  i4488.tagId = i4489[1]
  i4488.enabled = !!i4489[2]
  i4488.isStatic = !!i4489[3]
  i4488.layer = i4489[4]
  return i4488
}

Deserializers["Level1_Cloth_Playable_PlayableStep1to2"] = function (request, data, root) {
  var i4490 = root || request.c( 'Level1_Cloth_Playable_PlayableStep1to2' )
  var i4491 = data
  request.r(i4491[0], i4491[1], 0, i4490, 'WashingView')
  request.r(i4491[2], i4491[3], 0, i4490, 'WashingTools')
  request.r(i4491[4], i4491[5], 0, i4490, 'DressingView')
  request.r(i4491[6], i4491[7], 0, i4490, 'DressingTools')
  i4490.ZoomStep1 = request.d('ZoomPos', i4491[8], i4490.ZoomStep1)
  request.r(i4491[9], i4491[10], 0, i4490, 'ToolStep1')
  request.r(i4491[11], i4491[12], 0, i4490, 'Basket_Cloth')
  request.r(i4491[13], i4491[14], 0, i4490, 'clothInside')
  request.r(i4491[15], i4491[16], 0, i4490, 'clothRound')
  request.r(i4491[17], i4491[18], 0, i4490, 'machineDoor')
  request.r(i4491[19], i4491[20], 0, i4490, 'machineGlass')
  i4490.ZoomStep2 = request.d('ZoomPos', i4491[21], i4490.ZoomStep2)
  i4490.ZoomStep2b = request.d('ZoomPos', i4491[22], i4490.ZoomStep2b)
  request.r(i4491[23], i4491[24], 0, i4490, 'ToolStep2')
  request.r(i4491[25], i4491[26], 0, i4490, 'ToolStep2CamFollow')
  request.r(i4491[27], i4491[28], 0, i4490, 'drawerObj')
  request.r(i4491[29], i4491[30], 0, i4490, 'surfObj')
  request.r(i4491[31], i4491[32], 0, i4490, 'surfPackTop')
  request.r(i4491[33], i4491[34], 0, i4490, 'handStep2')
  request.r(i4491[35], i4491[36], 0, i4490, 'surfController')
  request.r(i4491[37], i4491[38], 0, i4490, 'clothsInside')
  request.r(i4491[39], i4491[40], 0, i4490, 'clothsInsideGlass')
  request.r(i4491[41], i4491[42], 0, i4490, 'clothsStaticClean')
  request.r(i4491[43], i4491[44], 0, i4490, 'wetCloths')
  request.r(i4491[45], i4491[46], 0, i4490, 'clothCleanInside')
  request.r(i4491[47], i4491[48], 0, i4490, 'clothCleanInsideAnim')
  request.r(i4491[49], i4491[50], 0, i4490, 'waterWave')
  request.r(i4491[51], i4491[52], 0, i4490, 'clothCleanInside2')
  request.r(i4491[53], i4491[54], 0, i4490, 'clothCleanInside2Cam')
  request.r(i4491[55], i4491[56], 0, i4490, 'clothBasketTarget')
  request.r(i4491[57], i4491[58], 0, i4490, 'clothBasketTarget2')
  request.r(i4491[59], i4491[60], 0, i4490, 'waterSplash_Vfx')
  request.r(i4491[61], i4491[62], 0, i4490, 'countDownTimerText')
  i4490.countDown = i4491[63]
  request.r(i4491[64], i4491[65], 0, i4490, 'machineTimer')
  request.r(i4491[66], i4491[67], 0, i4490, 'machineTimerIndication')
  request.r(i4491[68], i4491[69], 0, i4490, 'darazOpenSfx')
  request.r(i4491[70], i4491[71], 0, i4490, 'darazCloseSfx')
  request.r(i4491[72], i4491[73], 0, i4490, 'doorOpenSfx')
  request.r(i4491[74], i4491[75], 0, i4490, 'machineStartSfx')
  request.r(i4491[76], i4491[77], 0, i4490, 'machineFinishSfx')
  request.r(i4491[78], i4491[79], 0, i4490, 'waterDrainSfx')
  i4490.levelName = i4491[80]
  i4490.levelReward = i4491[81]
  request.r(i4491[82], i4491[83], 0, i4490, 'LevelIcon')
  request.r(i4491[84], i4491[85], 0, i4490, 'Level_BG')
  var i4493 = i4491[86]
  var i4492 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i4493.length; i += 2) {
  request.r(i4493[i + 0], i4493[i + 1], 1, i4492, '')
  }
  i4490.ToolIcons = i4492
  var i4495 = i4491[87]
  var i4494 = []
  for(var i = 0; i < i4495.length; i += 2) {
  request.r(i4495[i + 0], i4495[i + 1], 2, i4494, '')
  }
  i4490.AllDrags = i4494
  var i4497 = i4491[88]
  var i4496 = []
  for(var i = 0; i < i4497.length; i += 2) {
  request.r(i4497[i + 0], i4497[i + 1], 2, i4496, '')
  }
  i4490.AllSources = i4496
  var i4499 = i4491[89]
  var i4498 = []
  for(var i = 0; i < i4499.length; i += 2) {
  request.r(i4499[i + 0], i4499[i + 1], 2, i4498, '')
  }
  i4490.AllScratches = i4498
  i4490.stepsDone = i4491[90]
  i4490.levelNo = i4491[91]
  i4490.partNo = i4491[92]
  var i4501 = i4491[93]
  var i4500 = []
  for(var i = 0; i < i4501.length; i += 2) {
  request.r(i4501[i + 0], i4501[i + 1], 2, i4500, '')
  }
  i4490.disableOnLevelComplete = i4500
  i4490.zoomBeforeComplete = !!i4491[94]
  i4490.completionZoom = request.d('ZoomPos', i4491[95], i4490.completionZoom)
  i4490.completionZoomDuration = i4491[96]
  request.r(i4491[97], i4491[98], 0, i4490, 'clothSfx')
  request.r(i4491[99], i4491[100], 0, i4490, 'doorCloseSfx')
  return i4490
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i4502 = root || request.c( 'ZoomPos' )
  var i4503 = data
  i4502.CameraPos = new pc.Vec3( i4503[0], i4503[1], i4503[2] )
  i4502.CameraFOV = i4503[3]
  return i4502
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i4514 = root || request.c( 'PlayableCTA' )
  var i4515 = data
  i4514.trigger = i4515[0]
  i4514.autoCtaOnLevelComplete = !!i4515[1]
  i4514.afterSeconds = i4515[2]
  i4514.afterTaps = i4515[3]
  request.r(i4515[4], i4515[5], 0, i4514, 'scratchProgress')
  i4514.scratchIndex = i4515[6]
  i4514.progressThreshold = i4515[7]
  i4514.blockInputOnFire = !!i4515[8]
  i4514.refireOnEveryTap = !!i4515[9]
  i4514.refireDelay = i4515[10]
  i4514.showEndCard = !!i4515[11]
  request.r(i4515[12], i4515[13], 0, i4514, 'endCard')
  var i4517 = i4515[14]
  var i4516 = []
  for(var i = 0; i < i4517.length; i += 2) {
  request.r(i4517[i + 0], i4517[i + 1], 2, i4516, '')
  }
  i4514.thingsToDisableOnEndCard = i4516
  i4514.endCardDelay = i4515[15]
  i4514.showEndCardOnProgressTrigger = !!i4515[16]
  i4514.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i4515[17], i4514.onCtaFired)
  i4514.logWhenFired = !!i4515[18]
  return i4514
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i4518 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i4519 = data
  i4518.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4519[0], i4518.m_PersistentCalls)
  return i4518
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4520 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4521 = data
  var i4523 = i4521[0]
  var i4522 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4523.length; i += 1) {
    i4522.add(request.d('UnityEngine.Events.PersistentCall', i4523[i + 0]));
  }
  i4520.m_Calls = i4522
  return i4520
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4526 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4527 = data
  request.r(i4527[0], i4527[1], 0, i4526, 'm_Target')
  i4526.m_TargetAssemblyTypeName = i4527[2]
  i4526.m_MethodName = i4527[3]
  i4526.m_Mode = i4527[4]
  i4526.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4527[5], i4526.m_Arguments)
  i4526.m_CallState = i4527[6]
  return i4526
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i4528 = root || request.c( 'PlayableFadeCoverSettings' )
  var i4529 = data
  i4528.revealDelay = i4529[0]
  i4528.revealDuration = i4529[1]
  return i4528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4531 = data
  request.r(i4531[0], i4531[1], 0, i4530, 'animatorController')
  request.r(i4531[2], i4531[3], 0, i4530, 'avatar')
  i4530.updateMode = i4531[4]
  i4530.hasTransformHierarchy = !!i4531[5]
  i4530.applyRootMotion = !!i4531[6]
  var i4533 = i4531[7]
  var i4532 = []
  for(var i = 0; i < i4533.length; i += 2) {
  request.r(i4533[i + 0], i4533[i + 1], 2, i4532, '')
  }
  i4530.humanBones = i4532
  i4530.enabled = !!i4531[8]
  return i4530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i4536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i4537 = data
  i4536.color = new pc.Color(i4537[0], i4537[1], i4537[2], i4537[3])
  request.r(i4537[4], i4537[5], 0, i4536, 'sprite')
  i4536.flipX = !!i4537[6]
  i4536.flipY = !!i4537[7]
  i4536.drawMode = i4537[8]
  i4536.size = new pc.Vec2( i4537[9], i4537[10] )
  i4536.tileMode = i4537[11]
  i4536.adaptiveModeThreshold = i4537[12]
  i4536.maskInteraction = i4537[13]
  i4536.spriteSortPoint = i4537[14]
  i4536.enabled = !!i4537[15]
  request.r(i4537[16], i4537[17], 0, i4536, 'sharedMaterial')
  var i4539 = i4537[18]
  var i4538 = []
  for(var i = 0; i < i4539.length; i += 2) {
  request.r(i4539[i + 0], i4539[i + 1], 2, i4538, '')
  }
  i4536.sharedMaterials = i4538
  i4536.receiveShadows = !!i4537[19]
  i4536.shadowCastingMode = i4537[20]
  i4536.sortingLayerID = i4537[21]
  i4536.sortingOrder = i4537[22]
  i4536.lightmapIndex = i4537[23]
  i4536.lightmapSceneIndex = i4537[24]
  i4536.lightmapScaleOffset = new pc.Vec4( i4537[25], i4537[26], i4537[27], i4537[28] )
  i4536.lightProbeUsage = i4537[29]
  i4536.reflectionProbeUsage = i4537[30]
  return i4536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4541 = data
  i4540.pivot = new pc.Vec2( i4541[0], i4541[1] )
  i4540.anchorMin = new pc.Vec2( i4541[2], i4541[3] )
  i4540.anchorMax = new pc.Vec2( i4541[4], i4541[5] )
  i4540.sizeDelta = new pc.Vec2( i4541[6], i4541[7] )
  i4540.anchoredPosition3D = new pc.Vec3( i4541[8], i4541[9], i4541[10] )
  i4540.rotation = new pc.Quat(i4541[11], i4541[12], i4541[13], i4541[14])
  i4540.scale = new pc.Vec3( i4541[15], i4541[16], i4541[17] )
  return i4540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4543 = data
  i4542.planeDistance = i4543[0]
  i4542.referencePixelsPerUnit = i4543[1]
  i4542.isFallbackOverlay = !!i4543[2]
  i4542.renderMode = i4543[3]
  i4542.renderOrder = i4543[4]
  i4542.sortingLayerName = i4543[5]
  i4542.sortingOrder = i4543[6]
  i4542.scaleFactor = i4543[7]
  request.r(i4543[8], i4543[9], 0, i4542, 'worldCamera')
  i4542.overrideSorting = !!i4543[10]
  i4542.pixelPerfect = !!i4543[11]
  i4542.targetDisplay = i4543[12]
  i4542.overridePixelPerfect = !!i4543[13]
  i4542.enabled = !!i4543[14]
  return i4542
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4544 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4545 = data
  i4544.m_UiScaleMode = i4545[0]
  i4544.m_ReferencePixelsPerUnit = i4545[1]
  i4544.m_ScaleFactor = i4545[2]
  i4544.m_ReferenceResolution = new pc.Vec2( i4545[3], i4545[4] )
  i4544.m_ScreenMatchMode = i4545[5]
  i4544.m_MatchWidthOrHeight = i4545[6]
  i4544.m_PhysicalUnit = i4545[7]
  i4544.m_FallbackScreenDPI = i4545[8]
  i4544.m_DefaultSpriteDPI = i4545[9]
  i4544.m_DynamicPixelsPerUnit = i4545[10]
  i4544.m_PresetInfoIsWorld = !!i4545[11]
  return i4544
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4546 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4547 = data
  i4546.m_IgnoreReversedGraphics = !!i4547[0]
  i4546.m_BlockingObjects = i4547[1]
  i4546.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4547[2] )
  return i4546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i4548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i4549 = data
  i4548.usedByComposite = !!i4549[0]
  i4548.autoTiling = !!i4549[1]
  i4548.size = new pc.Vec2( i4549[2], i4549[3] )
  i4548.edgeRadius = i4549[4]
  i4548.enabled = !!i4549[5]
  i4548.isTrigger = !!i4549[6]
  i4548.usedByEffector = !!i4549[7]
  i4548.density = i4549[8]
  i4548.offset = new pc.Vec2( i4549[9], i4549[10] )
  request.r(i4549[11], i4549[12], 0, i4548, 'material')
  return i4548
}

Deserializers["RotaryTimerKnob"] = function (request, data, root) {
  var i4550 = root || request.c( 'RotaryTimerKnob' )
  var i4551 = data
  i4550.numSteps = i4551[0]
  i4550.onlyClockwise = !!i4551[1]
  request.r(i4551[2], i4551[3], 0, i4550, 'clickSound')
  i4550.enableVibration = !!i4551[4]
  request.r(i4551[5], i4551[6], 0, i4550, 'stepText')
  i4550.OnComplete = request.d('UnityEngine.Events.UnityEvent', i4551[7], i4550.OnComplete)
  request.r(i4551[8], i4551[9], 0, i4550, 'handIndication')
  return i4550
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i4552 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i4553 = data
  request.r(i4553[0], i4553[1], 0, i4552, 'm_ObjectArgument')
  i4552.m_ObjectArgumentAssemblyTypeName = i4553[2]
  i4552.m_IntArgument = i4553[3]
  i4552.m_FloatArgument = i4553[4]
  i4552.m_StringArgument = i4553[5]
  i4552.m_BoolArgument = !!i4553[6]
  return i4552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i4554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i4555 = data
  request.r(i4555[0], i4555[1], 0, i4554, 'additionalVertexStreams')
  i4554.enabled = !!i4555[2]
  request.r(i4555[3], i4555[4], 0, i4554, 'sharedMaterial')
  var i4557 = i4555[5]
  var i4556 = []
  for(var i = 0; i < i4557.length; i += 2) {
  request.r(i4557[i + 0], i4557[i + 1], 2, i4556, '')
  }
  i4554.sharedMaterials = i4556
  i4554.receiveShadows = !!i4555[6]
  i4554.shadowCastingMode = i4555[7]
  i4554.sortingLayerID = i4555[8]
  i4554.sortingOrder = i4555[9]
  i4554.lightmapIndex = i4555[10]
  i4554.lightmapSceneIndex = i4555[11]
  i4554.lightmapScaleOffset = new pc.Vec4( i4555[12], i4555[13], i4555[14], i4555[15] )
  i4554.lightProbeUsage = i4555[16]
  i4554.reflectionProbeUsage = i4555[17]
  return i4554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4559 = data
  i4558.cullTransparentMesh = !!i4559[0]
  return i4558
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i4560 = root || request.c( 'UnityEngine.UI.Text' )
  var i4561 = data
  i4560.m_FontData = request.d('UnityEngine.UI.FontData', i4561[0], i4560.m_FontData)
  i4560.m_Text = i4561[1]
  request.r(i4561[2], i4561[3], 0, i4560, 'm_Material')
  i4560.m_Maskable = !!i4561[4]
  i4560.m_Color = new pc.Color(i4561[5], i4561[6], i4561[7], i4561[8])
  i4560.m_RaycastTarget = !!i4561[9]
  i4560.m_RaycastPadding = new pc.Vec4( i4561[10], i4561[11], i4561[12], i4561[13] )
  return i4560
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i4562 = root || request.c( 'UnityEngine.UI.FontData' )
  var i4563 = data
  request.r(i4563[0], i4563[1], 0, i4562, 'm_Font')
  i4562.m_FontSize = i4563[2]
  i4562.m_FontStyle = i4563[3]
  i4562.m_BestFit = !!i4563[4]
  i4562.m_MinSize = i4563[5]
  i4562.m_MaxSize = i4563[6]
  i4562.m_Alignment = i4563[7]
  i4562.m_AlignByGeometry = !!i4563[8]
  i4562.m_RichText = !!i4563[9]
  i4562.m_HorizontalOverflow = i4563[10]
  i4562.m_VerticalOverflow = i4563[11]
  i4562.m_LineSpacing = i4563[12]
  return i4562
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i4564 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i4565 = data
  request.r(i4565[0], i4565[1], 0, i4564, 'm_RootBone')
  var i4567 = i4565[2]
  var i4566 = []
  for(var i = 0; i < i4567.length; i += 2) {
  request.r(i4567[i + 0], i4567[i + 1], 2, i4566, '')
  }
  i4564.m_BoneTransforms = i4566
  i4564.m_AlwaysUpdate = !!i4565[3]
  i4564.m_AutoRebind = !!i4565[4]
  return i4564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i4568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i4569 = data
  i4568.frontSortingLayerID = i4569[0]
  i4568.frontSortingOrder = i4569[1]
  i4568.backSortingLayerID = i4569[2]
  i4568.backSortingOrder = i4569[3]
  i4568.alphaCutoff = i4569[4]
  request.r(i4569[5], i4569[6], 0, i4568, 'sprite')
  i4568.tileMode = i4569[7]
  i4568.isCustomRangeActive = !!i4569[8]
  i4568.spriteSortPoint = i4569[9]
  i4568.enabled = !!i4569[10]
  request.r(i4569[11], i4569[12], 0, i4568, 'sharedMaterial')
  var i4571 = i4569[13]
  var i4570 = []
  for(var i = 0; i < i4571.length; i += 2) {
  request.r(i4571[i + 0], i4571[i + 1], 2, i4570, '')
  }
  i4568.sharedMaterials = i4570
  i4568.receiveShadows = !!i4569[14]
  i4568.shadowCastingMode = i4569[15]
  i4568.sortingLayerID = i4569[16]
  i4568.sortingOrder = i4569[17]
  i4568.lightmapIndex = i4569[18]
  i4568.lightmapSceneIndex = i4569[19]
  i4568.lightmapScaleOffset = new pc.Vec4( i4569[20], i4569[21], i4569[22], i4569[23] )
  i4568.lightProbeUsage = i4569[24]
  i4568.reflectionProbeUsage = i4569[25]
  return i4568
}

Deserializers["_2dxFX_Wave"] = function (request, data, root) {
  var i4572 = root || request.c( '_2dxFX_Wave' )
  var i4573 = data
  request.r(i4573[0], i4573[1], 0, i4572, 'ForceMaterial')
  i4572.ActiveChange = !!i4573[2]
  i4572._Alpha = i4573[3]
  i4572._OffsetX = i4573[4]
  i4572._OffsetY = i4573[5]
  i4572._DistanceX = i4573[6]
  i4572._DistanceY = i4573[7]
  i4572._WaveTimeX = i4573[8]
  i4572._WaveTimeY = i4573[9]
  i4572.AutoPlayWaveX = !!i4573[10]
  i4572.AutoPlaySpeedX = i4573[11]
  i4572.AutoPlayWaveY = !!i4573[12]
  i4572.AutoPlaySpeedY = i4573[13]
  i4572.AutoRandom = !!i4573[14]
  i4572.AutoRandomRange = i4573[15]
  i4572.ShaderChange = i4573[16]
  return i4572
}

Deserializers["PlayableSpriteMask"] = function (request, data, root) {
  var i4574 = root || request.c( 'PlayableSpriteMask' )
  var i4575 = data
  request.r(i4575[0], i4575[1], 0, i4574, 'template')
  var i4577 = i4575[2]
  var i4576 = []
  for(var i = 0; i < i4577.length; i += 1) {
    i4576.push( request.d('PlayableSpriteMask+Mask', i4577[i + 0]) );
  }
  i4574.masks = i4576
  i4574.outside = !!i4575[3]
  return i4574
}

Deserializers["PlayableSpriteMask+Mask"] = function (request, data, root) {
  var i4580 = root || request.c( 'PlayableSpriteMask+Mask' )
  var i4581 = data
  request.r(i4581[0], i4581[1], 0, i4580, 'transform')
  request.r(i4581[2], i4581[3], 0, i4580, 'sprite')
  i4580.cutoff = i4581[4]
  return i4580
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i4582 = root || request.c( 'BasicDrag' )
  var i4583 = data
  i4582.canDrag = !!i4583[0]
  i4582.dragByDelta = !!i4583[1]
  i4582.isDragging = !!i4583[2]
  i4582.moveWithPointer = !!i4583[3]
  i4582.canReturn = !!i4583[4]
  i4582.jumpOnReturn = !!i4583[5]
  i4582.returnTime = i4583[6]
  i4582.Tool_Offset = new pc.Vec3( i4583[7], i4583[8], i4583[9] )
  i4582.canScaleIncrease = !!i4583[10]
  i4582.Self_ScaleNew = new pc.Vec3( i4583[11], i4583[12], i4583[13] )
  i4582.canRotateOnPick = !!i4583[14]
  i4582.startRot = new pc.Vec3( i4583[15], i4583[16], i4583[17] )
  i4582.newRot = new pc.Vec3( i4583[18], i4583[19], i4583[20] )
  var i4585 = i4583[21]
  var i4584 = []
  for(var i = 0; i < i4585.length; i += 2) {
  request.r(i4585[i + 0], i4585[i + 1], 2, i4584, '')
  }
  i4582.childSprite = i4584
  request.r(i4583[22], i4583[23], 0, i4582, 'ToolSelectClip')
  request.r(i4583[24], i4583[25], 0, i4582, 'ToolLoopClip')
  request.r(i4583[26], i4583[27], 0, i4582, 'thisParticles')
  i4582.onDragparticle = !!i4583[28]
  request.r(i4583[29], i4583[30], 0, i4582, 'dragParticles')
  request.r(i4583[31], i4583[32], 0, i4582, 'anim')
  i4582.startPos = new pc.Vec3( i4583[33], i4583[34], i4583[35] )
  i4582.startScale = new pc.Vec3( i4583[36], i4583[37], i4583[38] )
  i4582.Vibration = !!i4583[39]
  i4582.isPlacedCannotMove = !!i4583[40]
  i4582.isObjectMovingWhileDragging = !!i4583[41]
  i4582.OnMouseDownEvent = request.d('System.Action', i4583[42], i4582.OnMouseDownEvent)
  i4582.OnMouseUpEvent = request.d('System.Action', i4583[43], i4582.OnMouseUpEvent)
  i4582.ProgStartEvent = request.d('System.Action', i4583[44], i4582.ProgStartEvent)
  i4582.ProgEndEvent = request.d('System.Action', i4583[45], i4582.ProgEndEvent)
  i4582.canCallMouseUpWhenGamePaused = !!i4583[46]
  i4582.ClampX_L = i4583[47]
  i4582.ClampX_H = i4583[48]
  i4582.ClampY_L = i4583[49]
  i4582.ClampY_H = i4583[50]
  i4582.startOrder = i4583[51]
  i4582.dontResetItIsInCollider = !!i4583[52]
  request.r(i4583[53], i4583[54], 0, i4582, 'thisCollider')
  request.r(i4583[55], i4583[56], 0, i4582, 'thisSR')
  i4582.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i4583[57], i4582.OnMouseDownEventIndependentFromCanDrag)
  return i4582
}

Deserializers["System.Action"] = function (request, data, root) {
  var i4588 = root || request.c( 'System.Action' )
  var i4589 = data
  return i4588
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i4590 = root || request.c( 'BD_Clamp' )
  var i4591 = data
  i4590.ClampX_L = i4591[0]
  i4590.ClampX_H = i4591[1]
  i4590.ClampY_L = i4591[2]
  i4590.ClampY_H = i4591[3]
  return i4590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i4592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i4593 = data
  i4592.bodyType = i4593[0]
  request.r(i4593[1], i4593[2], 0, i4592, 'material')
  i4592.simulated = !!i4593[3]
  i4592.useAutoMass = !!i4593[4]
  i4592.mass = i4593[5]
  i4592.drag = i4593[6]
  i4592.angularDrag = i4593[7]
  i4592.gravityScale = i4593[8]
  i4592.collisionDetectionMode = i4593[9]
  i4592.sleepMode = i4593[10]
  i4592.constraints = i4593[11]
  return i4592
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i4594 = root || request.c( 'PlaceItem' )
  var i4595 = data
  request.r(i4595[0], i4595[1], 0, i4594, 'thisDrag')
  request.r(i4595[2], i4595[3], 0, i4594, 'Target')
  request.r(i4595[4], i4595[5], 0, i4594, 'Clip')
  i4594.jumpOnPlace = !!i4595[6]
  i4594.jumpHeight = i4595[7]
  i4594.jumpDuration = i4595[8]
  i4594.settleDuration = i4595[9]
  i4594.isPlaced = !!i4595[10]
  i4594.isInsideCollider = !!i4595[11]
  i4594.changeScaleOnPlace = !!i4595[12]
  request.r(i4595[13], i4595[14], 0, i4594, 'item')
  i4594.newScaleOnPlace = new pc.Vec3( i4595[15], i4595[16], i4595[17] )
  i4594.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i4595[18], i4594.OnPlaced)
  return i4594
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i4596 = root || request.c( 'ActionOnTap' )
  var i4597 = data
  i4596.OnTap = request.d('UnityEngine.Events.UnityEvent', i4597[0], i4596.OnTap)
  i4596.OnTapExtra = request.d('System.Action', i4597[1], i4596.OnTapExtra)
  return i4596
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i4598 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i4599 = data
  i4598.targetIsSelf = !!i4599[0]
  request.r(i4599[1], i4599[2], 0, i4598, 'targetGO')
  i4598.tweenTargetIsTargetGO = !!i4599[3]
  i4598.delay = i4599[4]
  i4598.duration = i4599[5]
  i4598.easeType = i4599[6]
  i4598.easeCurve = new pc.AnimationCurve( { keys_flow: i4599[7] } )
  i4598.loopType = i4599[8]
  i4598.loops = i4599[9]
  i4598.id = i4599[10]
  i4598.isRelative = !!i4599[11]
  i4598.isFrom = !!i4599[12]
  i4598.isIndependentUpdate = !!i4599[13]
  i4598.autoKill = !!i4599[14]
  i4598.autoGenerate = !!i4599[15]
  i4598.isActive = !!i4599[16]
  i4598.isValid = !!i4599[17]
  request.r(i4599[18], i4599[19], 0, i4598, 'target')
  i4598.animationType = i4599[20]
  i4598.targetType = i4599[21]
  i4598.forcedTargetType = i4599[22]
  i4598.autoPlay = !!i4599[23]
  i4598.useTargetAsV3 = !!i4599[24]
  i4598.endValueFloat = i4599[25]
  i4598.endValueV3 = new pc.Vec3( i4599[26], i4599[27], i4599[28] )
  i4598.endValueV2 = new pc.Vec2( i4599[29], i4599[30] )
  i4598.endValueColor = new pc.Color(i4599[31], i4599[32], i4599[33], i4599[34])
  i4598.endValueString = i4599[35]
  i4598.endValueRect = UnityEngine.Rect.MinMaxRect(i4599[36], i4599[37], i4599[38], i4599[39])
  request.r(i4599[40], i4599[41], 0, i4598, 'endValueTransform')
  i4598.optionalBool0 = !!i4599[42]
  i4598.optionalBool1 = !!i4599[43]
  i4598.optionalFloat0 = i4599[44]
  i4598.optionalInt0 = i4599[45]
  i4598.optionalRotationMode = i4599[46]
  i4598.optionalScrambleMode = i4599[47]
  i4598.optionalShakeRandomnessMode = i4599[48]
  i4598.optionalString = i4599[49]
  i4598.updateType = i4599[50]
  i4598.isSpeedBased = !!i4599[51]
  i4598.hasOnStart = !!i4599[52]
  i4598.hasOnPlay = !!i4599[53]
  i4598.hasOnUpdate = !!i4599[54]
  i4598.hasOnStepComplete = !!i4599[55]
  i4598.hasOnComplete = !!i4599[56]
  i4598.hasOnTweenCreated = !!i4599[57]
  i4598.hasOnRewind = !!i4599[58]
  i4598.onStart = request.d('UnityEngine.Events.UnityEvent', i4599[59], i4598.onStart)
  i4598.onPlay = request.d('UnityEngine.Events.UnityEvent', i4599[60], i4598.onPlay)
  i4598.onUpdate = request.d('UnityEngine.Events.UnityEvent', i4599[61], i4598.onUpdate)
  i4598.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i4599[62], i4598.onStepComplete)
  i4598.onComplete = request.d('UnityEngine.Events.UnityEvent', i4599[63], i4598.onComplete)
  i4598.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i4599[64], i4598.onTweenCreated)
  i4598.onRewind = request.d('UnityEngine.Events.UnityEvent', i4599[65], i4598.onRewind)
  return i4598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i4600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i4601 = data
  i4600.radius = i4601[0]
  i4600.enabled = !!i4601[1]
  i4600.isTrigger = !!i4601[2]
  i4600.usedByEffector = !!i4601[3]
  i4600.density = i4601[4]
  i4600.offset = new pc.Vec2( i4601[5], i4601[6] )
  request.r(i4601[7], i4601[8], 0, i4600, 'material')
  return i4600
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i4602 = root || request.c( 'PlayParticlesOnCollision' )
  var i4603 = data
  request.r(i4603[0], i4603[1], 0, i4602, 'Target')
  request.r(i4603[2], i4603[3], 0, i4602, 'ParticlePrefab')
  i4602.destroyIt = !!i4603[4]
  i4602.stayAtPlace = !!i4603[5]
  i4602.disableOnCollision = !!i4603[6]
  i4602.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i4603[7], i4602.OnCollisionEvent)
  return i4602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i4604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i4605 = data
  i4604.usedByComposite = !!i4605[0]
  i4604.autoTiling = !!i4605[1]
  var i4607 = i4605[2]
  var i4606 = []
  for(var i = 0; i < i4607.length; i += 1) {
  var i4609 = i4607[i + 0]
  var i4608 = []
  for(var i = 0; i < i4609.length; i += 2) {
    i4608.push( new pc.Vec2( i4609[i + 0], i4609[i + 1] ) );
  }
    i4606.push( i4608 );
  }
  i4604.points = i4606
  i4604.enabled = !!i4605[3]
  i4604.isTrigger = !!i4605[4]
  i4604.usedByEffector = !!i4605[5]
  i4604.density = i4605[6]
  i4604.offset = new pc.Vec2( i4605[7], i4605[8] )
  request.r(i4605[9], i4605[10], 0, i4604, 'material')
  return i4604
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i4616 = root || request.c( 'PlaySfxOnCollision' )
  var i4617 = data
  request.r(i4617[0], i4617[1], 0, i4616, 'Tip')
  i4616.Mode = i4617[2]
  request.r(i4617[3], i4617[4], 0, i4616, 'DragInput')
  request.r(i4617[5], i4617[6], 0, i4616, 'Source')
  i4616.startVol = i4617[7]
  i4616.targetVol = i4617[8]
  i4616.duration = i4617[9]
  request.r(i4617[10], i4617[11], 0, i4616, 'Particles')
  i4616.isDone = !!i4617[12]
  i4616.isInArea = !!i4617[13]
  i4616.isPlaying = !!i4617[14]
  return i4616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4619 = data
  request.r(i4619[0], i4619[1], 0, i4618, 'clip')
  request.r(i4619[2], i4619[3], 0, i4618, 'outputAudioMixerGroup')
  i4618.playOnAwake = !!i4619[4]
  i4618.loop = !!i4619[5]
  i4618.time = i4619[6]
  i4618.volume = i4619[7]
  i4618.pitch = i4619[8]
  i4618.enabled = !!i4619[9]
  return i4618
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i4620 = root || request.c( 'BD_Action' )
  var i4621 = data
  i4620.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i4621[0], i4620.OnMouseDownEvent)
  i4620.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i4621[1], i4620.OnMouseUpEvent)
  i4620.setToolLayer = !!i4621[2]
  request.r(i4621[3], i4621[4], 0, i4620, 'tool_SP')
  return i4620
}

Deserializers["Level1_SurfController"] = function (request, data, root) {
  var i4622 = root || request.c( 'Level1_SurfController' )
  var i4623 = data
  i4622.target_rotZ = i4623[0]
  i4622.rotationDuration = i4623[1]
  i4622.rotationEase = i4623[2]
  request.r(i4623[3], i4623[4], 0, i4622, 'maskItem')
  i4622.maskTarget_posY = i4623[5]
  i4622.maskMoveDuration = i4623[6]
  i4622.requiredHoldTime = i4623[7]
  i4622.minRotationForProgress = i4623[8]
  request.r(i4623[9], i4623[10], 0, i4622, 'tipCollider')
  request.r(i4623[11], i4623[12], 0, i4622, 'targetZoneCollider')
  request.r(i4623[13], i4623[14], 0, i4622, 'surf_Particles')
  request.r(i4623[15], i4623[16], 0, i4622, 'surf_SubEmitter')
  request.r(i4623[17], i4623[18], 0, i4622, 'Indication')
  i4622.OnComplete = request.d('UnityEngine.Events.UnityEvent', i4623[19], i4622.OnComplete)
  i4622.currentHoldProgress = i4623[20]
  return i4622
}

Deserializers["BD_Fold"] = function (request, data, root) {
  var i4624 = root || request.c( 'BD_Fold' )
  var i4625 = data
  i4624.canDrag = !!i4625[0]
  i4624.canFoldBottomLeft = !!i4625[1]
  i4624.canFoldBottomRight = !!i4625[2]
  i4624.canFoldTopLeft = !!i4625[3]
  i4624.canFoldTopRight = !!i4625[4]
  request.r(i4625[5], i4625[6], 0, i4624, 'Indication')
  request.r(i4625[7], i4625[8], 0, i4624, 'backSideSprite')
  i4624.maxSideOffset = i4625[9]
  i4624.foldBackDuration = i4625[10]
  i4624.instantFoldAmount = i4625[11]
  i4624.useSmoothRelease = !!i4625[12]
  i4624.completionLimit = i4625[13]
  i4624.afterCompletionTravelTo = i4625[14]
  i4624.OnComplete = request.d('UnityEngine.Events.UnityEvent', i4625[15], i4624.OnComplete)
  i4624.currentProgress = i4625[16]
  i4624.innerShadowStrength = i4625[17]
  request.r(i4625[18], i4625[19], 0, i4624, 'dragAudioSource')
  request.r(i4625[20], i4625[21], 0, i4624, 'dragStartClip')
  request.r(i4625[22], i4625[23], 0, i4624, 'completionClip')
  i4624.audioFadeSpeed = i4625[24]
  i4624.audioMoveThreshold = i4625[25]
  i4624.hapticInterval = i4625[26]
  return i4624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i4626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i4627 = data
  request.r(i4627[0], i4627[1], 0, i4626, 'sharedMesh')
  return i4626
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i4628 = root || request.c( 'BD_SpriteChange' )
  var i4629 = data
  request.r(i4629[0], i4629[1], 0, i4628, 'BD')
  request.r(i4629[2], i4629[3], 0, i4628, 'SR')
  request.r(i4629[4], i4629[5], 0, i4628, 'Default')
  request.r(i4629[6], i4629[7], 0, i4628, 'Picked')
  i4628.resetOnRelease = !!i4629[8]
  return i4628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i4630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i4631 = data
  i4630.name = i4631[0]
  i4630.atlasId = i4631[1]
  i4630.mipmapCount = i4631[2]
  i4630.hdr = !!i4631[3]
  i4630.size = i4631[4]
  i4630.anisoLevel = i4631[5]
  i4630.filterMode = i4631[6]
  var i4633 = i4631[7]
  var i4632 = []
  for(var i = 0; i < i4633.length; i += 4) {
    i4632.push( UnityEngine.Rect.MinMaxRect(i4633[i + 0], i4633[i + 1], i4633[i + 2], i4633[i + 3]) );
  }
  i4630.rects = i4632
  i4630.wrapU = i4631[8]
  i4630.wrapV = i4631[9]
  return i4630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4637 = data
  i4636.name = i4637[0]
  i4636.index = i4637[1]
  i4636.startup = !!i4637[2]
  return i4636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4639 = data
  i4638.aspect = i4639[0]
  i4638.orthographic = !!i4639[1]
  i4638.orthographicSize = i4639[2]
  i4638.backgroundColor = new pc.Color(i4639[3], i4639[4], i4639[5], i4639[6])
  i4638.nearClipPlane = i4639[7]
  i4638.farClipPlane = i4639[8]
  i4638.fieldOfView = i4639[9]
  i4638.depth = i4639[10]
  i4638.clearFlags = i4639[11]
  i4638.cullingMask = i4639[12]
  i4638.rect = i4639[13]
  request.r(i4639[14], i4639[15], 0, i4638, 'targetTexture')
  i4638.usePhysicalProperties = !!i4639[16]
  i4638.focalLength = i4639[17]
  i4638.sensorSize = new pc.Vec2( i4639[18], i4639[19] )
  i4638.lensShift = new pc.Vec2( i4639[20], i4639[21] )
  i4638.gateFit = i4639[22]
  i4638.commandBufferCount = i4639[23]
  i4638.cameraType = i4639[24]
  i4638.enabled = !!i4639[25]
  return i4638
}

Deserializers["CameraController"] = function (request, data, root) {
  var i4640 = root || request.c( 'CameraController' )
  var i4641 = data
  request.r(i4641[0], i4641[1], 0, i4640, 'cam')
  i4640.defaultPosition = new pc.Vec3( i4641[2], i4641[3], i4641[4] )
  i4640.defaultSize = i4641[5]
  i4640.defaultFOV = i4641[6]
  i4640.defaultDuration = i4641[7]
  i4640.defaultEase = i4641[8]
  return i4640
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i4642 = root || request.c( 'MusicSource' )
  var i4643 = data
  request.r(i4643[0], i4643[1], 0, i4642, 'source')
  return i4642
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i4644 = root || request.c( 'UI_Manager' )
  var i4645 = data
  i4644.levelCompleted = !!i4645[0]
  i4644.isPauseActive = !!i4645[1]
  i4644.loadIndex = i4645[2]
  request.r(i4645[3], i4645[4], 0, i4644, 'removeAdsButton')
  request.r(i4645[5], i4645[6], 0, i4644, 'pauseButton')
  request.r(i4645[7], i4645[8], 0, i4644, 'Fade_Img')
  request.r(i4645[9], i4645[10], 0, i4644, 'TopBarAnim')
  request.r(i4645[11], i4645[12], 0, i4644, 'MainPanel')
  request.r(i4645[13], i4645[14], 0, i4644, 'PausePanel')
  request.r(i4645[15], i4645[16], 0, i4644, 'PausePopUp')
  request.r(i4645[17], i4645[18], 0, i4644, 'PauseCanvasGroup')
  request.r(i4645[19], i4645[20], 0, i4644, 'RateUsPanel')
  request.r(i4645[21], i4645[22], 0, i4644, 'RateUsPopUp')
  request.r(i4645[23], i4645[24], 0, i4644, 'RemoveAdsPanel')
  request.r(i4645[25], i4645[26], 0, i4644, 'RemoveAdsPopUp')
  request.r(i4645[27], i4645[28], 0, i4644, 'RemoveAdsCanvasGroup')
  var i4647 = i4645[29]
  var i4646 = []
  for(var i = 0; i < i4647.length; i += 2) {
  request.r(i4647[i + 0], i4647[i + 1], 2, i4646, '')
  }
  i4644.RemoveAdsAnims = i4646
  request.r(i4645[30], i4645[31], 0, i4644, 'CompletePanel')
  request.r(i4645[32], i4645[33], 0, i4644, 'LevelIcon')
  request.r(i4645[34], i4645[35], 0, i4644, 'CompleteParticles')
  request.r(i4645[36], i4645[37], 0, i4644, 'progressBar')
  request.r(i4645[38], i4645[39], 0, i4644, 'progressText')
  request.r(i4645[40], i4645[41], 0, i4644, 'toolIcon1')
  request.r(i4645[42], i4645[43], 0, i4644, 'toolIcon2')
  request.r(i4645[44], i4645[45], 0, i4644, 'toolIcon3')
  request.r(i4645[46], i4645[47], 0, i4644, 'toolIcon4')
  request.r(i4645[48], i4645[49], 0, i4644, 'target1')
  request.r(i4645[50], i4645[51], 0, i4644, 'target2')
  i4644.toolMoveDuration = i4645[52]
  i4644.currentIndex = i4645[53]
  var i4649 = i4645[54]
  var i4648 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i4649.length; i += 2) {
  request.r(i4649[i + 0], i4649[i + 1], 1, i4648, '')
  }
  i4644.allTools = i4648
  request.r(i4645[55], i4645[56], 0, i4644, 'clockProgress')
  request.r(i4645[57], i4645[58], 0, i4644, 'clockProgressFill')
  request.r(i4645[59], i4645[60], 0, i4644, 'clockAudio')
  i4644.moveDistance = i4645[61]
  i4644.animationDuration = i4645[62]
  i4644.greyBgChildName = i4645[63]
  i4644.pushOffset = i4645[64]
  return i4644
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i4652 = root || request.c( 'GameManagerPlayable' )
  var i4653 = data
  request.r(i4653[0], i4653[1], 0, i4652, 'endParticles')
  request.r(i4653[2], i4653[3], 0, i4652, 'stepCompleteParticles')
  request.r(i4653[4], i4653[5], 0, i4652, 'DefaultMat')
  request.r(i4653[6], i4653[7], 0, i4652, 'BG_Music')
  request.r(i4653[8], i4653[9], 0, i4652, 'restoreEffectShader')
  request.r(i4653[10], i4653[11], 0, i4652, 'stickerEffectShader')
  i4652.isComplete = !!i4653[12]
  i4652.isPaused = !!i4653[13]
  request.r(i4653[14], i4653[15], 0, i4652, 'currentLevel')
  i4652.startLevelOnPlay = !!i4653[16]
  i4652.currentLevelNo = i4653[17]
  return i4652
}

Deserializers["AudioController"] = function (request, data, root) {
  var i4654 = root || request.c( 'AudioController' )
  var i4655 = data
  request.r(i4655[0], i4655[1], 0, i4654, 'MainMixer')
  request.r(i4655[2], i4655[3], 0, i4654, 'UiClick')
  request.r(i4655[4], i4655[5], 0, i4654, 'UiClickSource')
  var i4657 = i4655[6]
  var i4656 = []
  for(var i = 0; i < i4657.length; i += 2) {
  request.r(i4657[i + 0], i4657[i + 1], 2, i4656, '')
  }
  i4654.SfxSources = i4656
  var i4659 = i4655[7]
  var i4658 = []
  for(var i = 0; i < i4659.length; i += 2) {
  request.r(i4659[i + 0], i4659[i + 1], 2, i4658, '')
  }
  i4654.AllClips = i4658
  return i4654
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4662 = root || request.c( 'UnityEngine.UI.Image' )
  var i4663 = data
  request.r(i4663[0], i4663[1], 0, i4662, 'm_Sprite')
  i4662.m_Type = i4663[2]
  i4662.m_PreserveAspect = !!i4663[3]
  i4662.m_FillCenter = !!i4663[4]
  i4662.m_FillMethod = i4663[5]
  i4662.m_FillAmount = i4663[6]
  i4662.m_FillClockwise = !!i4663[7]
  i4662.m_FillOrigin = i4663[8]
  i4662.m_UseSpriteMesh = !!i4663[9]
  i4662.m_PixelsPerUnitMultiplier = i4663[10]
  request.r(i4663[11], i4663[12], 0, i4662, 'm_Material')
  i4662.m_Maskable = !!i4663[13]
  i4662.m_Color = new pc.Color(i4663[14], i4663[15], i4663[16], i4663[17])
  i4662.m_RaycastTarget = !!i4663[18]
  i4662.m_RaycastPadding = new pc.Vec4( i4663[19], i4663[20], i4663[21], i4663[22] )
  return i4662
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4664 = root || request.c( 'UnityEngine.UI.Button' )
  var i4665 = data
  i4664.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4665[0], i4664.m_OnClick)
  i4664.m_Navigation = request.d('UnityEngine.UI.Navigation', i4665[1], i4664.m_Navigation)
  i4664.m_Transition = i4665[2]
  i4664.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4665[3], i4664.m_Colors)
  i4664.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4665[4], i4664.m_SpriteState)
  i4664.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4665[5], i4664.m_AnimationTriggers)
  i4664.m_Interactable = !!i4665[6]
  request.r(i4665[7], i4665[8], 0, i4664, 'm_TargetGraphic')
  return i4664
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4666 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4667 = data
  i4666.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4667[0], i4666.m_PersistentCalls)
  return i4666
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4668 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4669 = data
  i4668.m_Mode = i4669[0]
  i4668.m_WrapAround = !!i4669[1]
  request.r(i4669[2], i4669[3], 0, i4668, 'm_SelectOnUp')
  request.r(i4669[4], i4669[5], 0, i4668, 'm_SelectOnDown')
  request.r(i4669[6], i4669[7], 0, i4668, 'm_SelectOnLeft')
  request.r(i4669[8], i4669[9], 0, i4668, 'm_SelectOnRight')
  return i4668
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4670 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4671 = data
  i4670.m_NormalColor = new pc.Color(i4671[0], i4671[1], i4671[2], i4671[3])
  i4670.m_HighlightedColor = new pc.Color(i4671[4], i4671[5], i4671[6], i4671[7])
  i4670.m_PressedColor = new pc.Color(i4671[8], i4671[9], i4671[10], i4671[11])
  i4670.m_SelectedColor = new pc.Color(i4671[12], i4671[13], i4671[14], i4671[15])
  i4670.m_DisabledColor = new pc.Color(i4671[16], i4671[17], i4671[18], i4671[19])
  i4670.m_ColorMultiplier = i4671[20]
  i4670.m_FadeDuration = i4671[21]
  return i4670
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4672 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4673 = data
  request.r(i4673[0], i4673[1], 0, i4672, 'm_HighlightedSprite')
  request.r(i4673[2], i4673[3], 0, i4672, 'm_PressedSprite')
  request.r(i4673[4], i4673[5], 0, i4672, 'm_SelectedSprite')
  request.r(i4673[6], i4673[7], 0, i4672, 'm_DisabledSprite')
  return i4672
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4674 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4675 = data
  i4674.m_NormalTrigger = i4675[0]
  i4674.m_HighlightedTrigger = i4675[1]
  i4674.m_PressedTrigger = i4675[2]
  i4674.m_SelectedTrigger = i4675[3]
  i4674.m_DisabledTrigger = i4675[4]
  return i4674
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i4676 = root || request.c( 'PlayableHudRuntime' )
  var i4677 = data
  return i4676
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4678 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4679 = data
  request.r(i4679[0], i4679[1], 0, i4678, 'm_FirstSelected')
  i4678.m_sendNavigationEvents = !!i4679[2]
  i4678.m_DragThreshold = i4679[3]
  return i4678
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4680 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4681 = data
  i4680.m_HorizontalAxis = i4681[0]
  i4680.m_VerticalAxis = i4681[1]
  i4680.m_SubmitButton = i4681[2]
  i4680.m_CancelButton = i4681[3]
  i4680.m_InputActionsPerSecond = i4681[4]
  i4680.m_RepeatDelay = i4681[5]
  i4680.m_ForceModuleActive = !!i4681[6]
  i4680.m_SendPointerHoverToParent = !!i4681[7]
  return i4680
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i4682 = root || request.c( 'PlayableRouter' )
  var i4683 = data
  var i4685 = i4683[0]
  var i4684 = []
  for(var i = 0; i < i4685.length; i += 2) {
  request.r(i4685[i + 0], i4685[i + 1], 2, i4684, '')
  }
  i4682.menuObjects = i4684
  var i4687 = i4683[1]
  var i4686 = []
  for(var i = 0; i < i4687.length; i += 2) {
  request.r(i4687[i + 0], i4687[i + 1], 2, i4686, '')
  }
  i4682.gameplayObjects = i4686
  var i4689 = i4683[2]
  var i4688 = []
  for(var i = 0; i < i4689.length; i += 1) {
    i4688.push( request.d('PlayableRouter+SubLevelSlot', i4689[i + 0]) );
  }
  i4682.subLevels = i4688
  i4682.fadeDuration = i4683[3]
  i4682.onMenuClosing = request.d('UnityEngine.Events.UnityEvent', i4683[4], i4682.onMenuClosing)
  i4682.lockedMessage = i4683[5]
  i4682.lockedTapsToCTA = i4683[6]
  return i4682
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i4692 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i4693 = data
  request.r(i4693[0], i4693[1], 0, i4692, 'button')
  request.r(i4693[2], i4693[3], 0, i4692, 'level')
  return i4692
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i4694 = root || request.c( 'ToastManager' )
  var i4695 = data
  request.r(i4695[0], i4695[1], 0, i4694, 'toastPanel')
  request.r(i4695[2], i4695[3], 0, i4694, 'toastPopup')
  request.r(i4695[4], i4695[5], 0, i4694, 'canvasGroup')
  request.r(i4695[6], i4695[7], 0, i4694, 'toastText')
  i4694.startY = i4695[8]
  i4694.visibleY = i4695[9]
  i4694.endY = i4695[10]
  i4694.animationTime = i4695[11]
  i4694.animationTimeUp = i4695[12]
  return i4694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i4696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i4697 = data
  i4696.m_Alpha = i4697[0]
  i4696.m_Interactable = !!i4697[1]
  i4696.m_BlocksRaycasts = !!i4697[2]
  i4696.m_IgnoreParentGroups = !!i4697[3]
  i4696.enabled = !!i4697[4]
  return i4696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4699 = data
  i4698.ambientIntensity = i4699[0]
  i4698.reflectionIntensity = i4699[1]
  i4698.ambientMode = i4699[2]
  i4698.ambientLight = new pc.Color(i4699[3], i4699[4], i4699[5], i4699[6])
  i4698.ambientSkyColor = new pc.Color(i4699[7], i4699[8], i4699[9], i4699[10])
  i4698.ambientGroundColor = new pc.Color(i4699[11], i4699[12], i4699[13], i4699[14])
  i4698.ambientEquatorColor = new pc.Color(i4699[15], i4699[16], i4699[17], i4699[18])
  i4698.fogColor = new pc.Color(i4699[19], i4699[20], i4699[21], i4699[22])
  i4698.fogEndDistance = i4699[23]
  i4698.fogStartDistance = i4699[24]
  i4698.fogDensity = i4699[25]
  i4698.fog = !!i4699[26]
  request.r(i4699[27], i4699[28], 0, i4698, 'skybox')
  i4698.fogMode = i4699[29]
  var i4701 = i4699[30]
  var i4700 = []
  for(var i = 0; i < i4701.length; i += 1) {
    i4700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4701[i + 0]) );
  }
  i4698.lightmaps = i4700
  i4698.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4699[31], i4698.lightProbes)
  i4698.lightmapsMode = i4699[32]
  i4698.mixedBakeMode = i4699[33]
  i4698.environmentLightingMode = i4699[34]
  i4698.ambientProbe = new pc.SphericalHarmonicsL2(i4699[35])
  request.r(i4699[36], i4699[37], 0, i4698, 'customReflection')
  request.r(i4699[38], i4699[39], 0, i4698, 'defaultReflection')
  i4698.defaultReflectionMode = i4699[40]
  i4698.defaultReflectionResolution = i4699[41]
  i4698.sunLightObjectId = i4699[42]
  i4698.pixelLightCount = i4699[43]
  i4698.defaultReflectionHDR = !!i4699[44]
  i4698.hasLightDataAsset = !!i4699[45]
  i4698.hasManualGenerate = !!i4699[46]
  return i4698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4705 = data
  request.r(i4705[0], i4705[1], 0, i4704, 'lightmapColor')
  request.r(i4705[2], i4705[3], 0, i4704, 'lightmapDirection')
  request.r(i4705[4], i4705[5], 0, i4704, 'shadowMask')
  return i4704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4706 = root || new UnityEngine.LightProbes()
  var i4707 = data
  return i4706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4715 = data
  var i4717 = i4715[0]
  var i4716 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4717.length; i += 1) {
    i4716.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4717[i + 0]));
  }
  i4714.ShaderCompilationErrors = i4716
  i4714.name = i4715[1]
  i4714.guid = i4715[2]
  var i4719 = i4715[3]
  var i4718 = []
  for(var i = 0; i < i4719.length; i += 1) {
    i4718.push( i4719[i + 0] );
  }
  i4714.shaderDefinedKeywords = i4718
  var i4721 = i4715[4]
  var i4720 = []
  for(var i = 0; i < i4721.length; i += 1) {
    i4720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4721[i + 0]) );
  }
  i4714.passes = i4720
  var i4723 = i4715[5]
  var i4722 = []
  for(var i = 0; i < i4723.length; i += 1) {
    i4722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4723[i + 0]) );
  }
  i4714.usePasses = i4722
  var i4725 = i4715[6]
  var i4724 = []
  for(var i = 0; i < i4725.length; i += 1) {
    i4724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4725[i + 0]) );
  }
  i4714.defaultParameterValues = i4724
  request.r(i4715[7], i4715[8], 0, i4714, 'unityFallbackShader')
  i4714.readDepth = !!i4715[9]
  i4714.hasDepthOnlyPass = !!i4715[10]
  i4714.isCreatedByShaderGraph = !!i4715[11]
  i4714.disableBatching = !!i4715[12]
  i4714.compiled = !!i4715[13]
  return i4714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4729 = data
  i4728.shaderName = i4729[0]
  i4728.errorMessage = i4729[1]
  return i4728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4734 = root || new pc.UnityShaderPass()
  var i4735 = data
  i4734.id = i4735[0]
  i4734.subShaderIndex = i4735[1]
  i4734.name = i4735[2]
  i4734.passType = i4735[3]
  i4734.grabPassTextureName = i4735[4]
  i4734.usePass = !!i4735[5]
  i4734.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4735[6], i4734.zTest)
  i4734.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4735[7], i4734.zWrite)
  i4734.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4735[8], i4734.culling)
  i4734.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4735[9], i4734.blending)
  i4734.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4735[10], i4734.alphaBlending)
  i4734.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4735[11], i4734.colorWriteMask)
  i4734.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4735[12], i4734.offsetUnits)
  i4734.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4735[13], i4734.offsetFactor)
  i4734.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4735[14], i4734.stencilRef)
  i4734.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4735[15], i4734.stencilReadMask)
  i4734.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4735[16], i4734.stencilWriteMask)
  i4734.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4735[17], i4734.stencilOp)
  i4734.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4735[18], i4734.stencilOpFront)
  i4734.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4735[19], i4734.stencilOpBack)
  var i4737 = i4735[20]
  var i4736 = []
  for(var i = 0; i < i4737.length; i += 1) {
    i4736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4737[i + 0]) );
  }
  i4734.tags = i4736
  var i4739 = i4735[21]
  var i4738 = []
  for(var i = 0; i < i4739.length; i += 1) {
    i4738.push( i4739[i + 0] );
  }
  i4734.passDefinedKeywords = i4738
  var i4741 = i4735[22]
  var i4740 = []
  for(var i = 0; i < i4741.length; i += 1) {
    i4740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4741[i + 0]) );
  }
  i4734.passDefinedKeywordGroups = i4740
  var i4743 = i4735[23]
  var i4742 = []
  for(var i = 0; i < i4743.length; i += 1) {
    i4742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4743[i + 0]) );
  }
  i4734.variants = i4742
  var i4745 = i4735[24]
  var i4744 = []
  for(var i = 0; i < i4745.length; i += 1) {
    i4744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4745[i + 0]) );
  }
  i4734.excludedVariants = i4744
  i4734.hasDepthReader = !!i4735[25]
  return i4734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4747 = data
  i4746.val = i4747[0]
  i4746.name = i4747[1]
  return i4746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4749 = data
  i4748.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4749[0], i4748.src)
  i4748.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4749[1], i4748.dst)
  i4748.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4749[2], i4748.op)
  return i4748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4751 = data
  i4750.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4751[0], i4750.pass)
  i4750.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4751[1], i4750.fail)
  i4750.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4751[2], i4750.zFail)
  i4750.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4751[3], i4750.comp)
  return i4750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4755 = data
  i4754.name = i4755[0]
  i4754.value = i4755[1]
  return i4754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4759 = data
  var i4761 = i4759[0]
  var i4760 = []
  for(var i = 0; i < i4761.length; i += 1) {
    i4760.push( i4761[i + 0] );
  }
  i4758.keywords = i4760
  i4758.hasDiscard = !!i4759[1]
  return i4758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4765 = data
  i4764.passId = i4765[0]
  i4764.subShaderIndex = i4765[1]
  var i4767 = i4765[2]
  var i4766 = []
  for(var i = 0; i < i4767.length; i += 1) {
    i4766.push( i4767[i + 0] );
  }
  i4764.keywords = i4766
  i4764.vertexProgram = i4765[3]
  i4764.fragmentProgram = i4765[4]
  i4764.exportedForWebGl2 = !!i4765[5]
  i4764.readDepth = !!i4765[6]
  return i4764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4771 = data
  request.r(i4771[0], i4771[1], 0, i4770, 'shader')
  i4770.pass = i4771[2]
  return i4770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4775 = data
  i4774.name = i4775[0]
  i4774.type = i4775[1]
  i4774.value = new pc.Vec4( i4775[2], i4775[3], i4775[4], i4775[5] )
  i4774.textureValue = i4775[6]
  i4774.shaderPropertyFlag = i4775[7]
  return i4774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4777 = data
  i4776.name = i4777[0]
  request.r(i4777[1], i4777[2], 0, i4776, 'texture')
  i4776.aabb = i4777[3]
  i4776.vertices = i4777[4]
  i4776.triangles = i4777[5]
  i4776.textureRect = UnityEngine.Rect.MinMaxRect(i4777[6], i4777[7], i4777[8], i4777[9])
  i4776.packedRect = UnityEngine.Rect.MinMaxRect(i4777[10], i4777[11], i4777[12], i4777[13])
  i4776.border = new pc.Vec4( i4777[14], i4777[15], i4777[16], i4777[17] )
  i4776.transparency = i4777[18]
  i4776.bounds = i4777[19]
  i4776.pixelsPerUnit = i4777[20]
  i4776.textureWidth = i4777[21]
  i4776.textureHeight = i4777[22]
  i4776.nativeSize = new pc.Vec2( i4777[23], i4777[24] )
  i4776.pivot = new pc.Vec2( i4777[25], i4777[26] )
  i4776.textureRectOffset = new pc.Vec2( i4777[27], i4777[28] )
  return i4776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4779 = data
  i4778.name = i4779[0]
  return i4778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4781 = data
  i4780.name = i4781[0]
  i4780.wrapMode = i4781[1]
  i4780.isLooping = !!i4781[2]
  i4780.length = i4781[3]
  var i4783 = i4781[4]
  var i4782 = []
  for(var i = 0; i < i4783.length; i += 1) {
    i4782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4783[i + 0]) );
  }
  i4780.curves = i4782
  var i4785 = i4781[5]
  var i4784 = []
  for(var i = 0; i < i4785.length; i += 1) {
    i4784.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4785[i + 0]) );
  }
  i4780.events = i4784
  i4780.halfPrecision = !!i4781[6]
  i4780._frameRate = i4781[7]
  i4780.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4781[8], i4780.localBounds)
  i4780.hasMuscleCurves = !!i4781[9]
  var i4787 = i4781[10]
  var i4786 = []
  for(var i = 0; i < i4787.length; i += 1) {
    i4786.push( i4787[i + 0] );
  }
  i4780.clipMuscleConstant = i4786
  i4780.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4781[11], i4780.clipBindingConstant)
  return i4780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4791 = data
  i4790.path = i4791[0]
  i4790.hash = i4791[1]
  i4790.componentType = i4791[2]
  i4790.property = i4791[3]
  i4790.keys = i4791[4]
  var i4793 = i4791[5]
  var i4792 = []
  for(var i = 0; i < i4793.length; i += 1) {
    i4792.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4793[i + 0]) );
  }
  i4790.objectReferenceKeys = i4792
  return i4790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4797 = data
  i4796.time = i4797[0]
  request.r(i4797[1], i4797[2], 0, i4796, 'value')
  return i4796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4801 = data
  i4800.functionName = i4801[0]
  i4800.floatParameter = i4801[1]
  i4800.intParameter = i4801[2]
  i4800.stringParameter = i4801[3]
  request.r(i4801[4], i4801[5], 0, i4800, 'objectReferenceParameter')
  i4800.time = i4801[6]
  return i4800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4803 = data
  i4802.center = new pc.Vec3( i4803[0], i4803[1], i4803[2] )
  i4802.extends = new pc.Vec3( i4803[3], i4803[4], i4803[5] )
  return i4802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4807 = data
  var i4809 = i4807[0]
  var i4808 = []
  for(var i = 0; i < i4809.length; i += 1) {
    i4808.push( i4809[i + 0] );
  }
  i4806.genericBindings = i4808
  var i4811 = i4807[1]
  var i4810 = []
  for(var i = 0; i < i4811.length; i += 1) {
    i4810.push( i4811[i + 0] );
  }
  i4806.pptrCurveMapping = i4810
  return i4806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4813 = data
  i4812.name = i4813[0]
  i4812.ascent = i4813[1]
  i4812.originalLineHeight = i4813[2]
  i4812.fontSize = i4813[3]
  var i4815 = i4813[4]
  var i4814 = []
  for(var i = 0; i < i4815.length; i += 1) {
    i4814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4815[i + 0]) );
  }
  i4812.characterInfo = i4814
  request.r(i4813[5], i4813[6], 0, i4812, 'texture')
  i4812.originalFontSize = i4813[7]
  return i4812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4819 = data
  i4818.index = i4819[0]
  i4818.advance = i4819[1]
  i4818.bearing = i4819[2]
  i4818.glyphWidth = i4819[3]
  i4818.glyphHeight = i4819[4]
  i4818.minX = i4819[5]
  i4818.maxX = i4819[6]
  i4818.minY = i4819[7]
  i4818.maxY = i4819[8]
  i4818.uvBottomLeftX = i4819[9]
  i4818.uvBottomLeftY = i4819[10]
  i4818.uvBottomRightX = i4819[11]
  i4818.uvBottomRightY = i4819[12]
  i4818.uvTopLeftX = i4819[13]
  i4818.uvTopLeftY = i4819[14]
  i4818.uvTopRightX = i4819[15]
  i4818.uvTopRightY = i4819[16]
  return i4818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4821 = data
  i4820.name = i4821[0]
  var i4823 = i4821[1]
  var i4822 = []
  for(var i = 0; i < i4823.length; i += 1) {
    i4822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4823[i + 0]) );
  }
  i4820.layers = i4822
  var i4825 = i4821[2]
  var i4824 = []
  for(var i = 0; i < i4825.length; i += 1) {
    i4824.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4825[i + 0]) );
  }
  i4820.parameters = i4824
  i4820.animationClips = i4821[3]
  i4820.avatarUnsupported = i4821[4]
  return i4820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4829 = data
  i4828.name = i4829[0]
  i4828.defaultWeight = i4829[1]
  i4828.blendingMode = i4829[2]
  i4828.avatarMask = i4829[3]
  i4828.syncedLayerIndex = i4829[4]
  i4828.syncedLayerAffectsTiming = !!i4829[5]
  i4828.syncedLayers = i4829[6]
  i4828.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4829[7], i4828.stateMachine)
  return i4828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4831 = data
  i4830.id = i4831[0]
  i4830.name = i4831[1]
  i4830.path = i4831[2]
  var i4833 = i4831[3]
  var i4832 = []
  for(var i = 0; i < i4833.length; i += 1) {
    i4832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4833[i + 0]) );
  }
  i4830.states = i4832
  var i4835 = i4831[4]
  var i4834 = []
  for(var i = 0; i < i4835.length; i += 1) {
    i4834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4835[i + 0]) );
  }
  i4830.machines = i4834
  var i4837 = i4831[5]
  var i4836 = []
  for(var i = 0; i < i4837.length; i += 1) {
    i4836.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4837[i + 0]) );
  }
  i4830.entryStateTransitions = i4836
  var i4839 = i4831[6]
  var i4838 = []
  for(var i = 0; i < i4839.length; i += 1) {
    i4838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4839[i + 0]) );
  }
  i4830.exitStateTransitions = i4838
  var i4841 = i4831[7]
  var i4840 = []
  for(var i = 0; i < i4841.length; i += 1) {
    i4840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4841[i + 0]) );
  }
  i4830.anyStateTransitions = i4840
  i4830.defaultStateId = i4831[8]
  return i4830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4845 = data
  i4844.id = i4845[0]
  i4844.name = i4845[1]
  i4844.cycleOffset = i4845[2]
  i4844.cycleOffsetParameter = i4845[3]
  i4844.cycleOffsetParameterActive = !!i4845[4]
  i4844.mirror = !!i4845[5]
  i4844.mirrorParameter = i4845[6]
  i4844.mirrorParameterActive = !!i4845[7]
  i4844.motionId = i4845[8]
  i4844.nameHash = i4845[9]
  i4844.fullPathHash = i4845[10]
  i4844.speed = i4845[11]
  i4844.speedParameter = i4845[12]
  i4844.speedParameterActive = !!i4845[13]
  i4844.tag = i4845[14]
  i4844.tagHash = i4845[15]
  i4844.writeDefaultValues = !!i4845[16]
  var i4847 = i4845[17]
  var i4846 = []
  for(var i = 0; i < i4847.length; i += 2) {
  request.r(i4847[i + 0], i4847[i + 1], 2, i4846, '')
  }
  i4844.behaviours = i4846
  var i4849 = i4845[18]
  var i4848 = []
  for(var i = 0; i < i4849.length; i += 1) {
    i4848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4849[i + 0]) );
  }
  i4844.transitions = i4848
  return i4844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4855 = data
  i4854.fullPath = i4855[0]
  i4854.canTransitionToSelf = !!i4855[1]
  i4854.duration = i4855[2]
  i4854.exitTime = i4855[3]
  i4854.hasExitTime = !!i4855[4]
  i4854.hasFixedDuration = !!i4855[5]
  i4854.interruptionSource = i4855[6]
  i4854.offset = i4855[7]
  i4854.orderedInterruption = !!i4855[8]
  i4854.destinationStateId = i4855[9]
  i4854.isExit = !!i4855[10]
  i4854.mute = !!i4855[11]
  i4854.solo = !!i4855[12]
  var i4857 = i4855[13]
  var i4856 = []
  for(var i = 0; i < i4857.length; i += 1) {
    i4856.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4857[i + 0]) );
  }
  i4854.conditions = i4856
  return i4854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4863 = data
  i4862.destinationStateId = i4863[0]
  i4862.isExit = !!i4863[1]
  i4862.mute = !!i4863[2]
  i4862.solo = !!i4863[3]
  var i4865 = i4863[4]
  var i4864 = []
  for(var i = 0; i < i4865.length; i += 1) {
    i4864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4865[i + 0]) );
  }
  i4862.conditions = i4864
  return i4862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4869 = data
  i4868.mode = i4869[0]
  i4868.parameter = i4869[1]
  i4868.threshold = i4869[2]
  return i4868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4873 = data
  i4872.defaultBool = !!i4873[0]
  i4872.defaultFloat = i4873[1]
  i4872.defaultInt = i4873[2]
  i4872.name = i4873[3]
  i4872.nameHash = i4873[4]
  i4872.type = i4873[5]
  return i4872
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i4874 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i4875 = data
  i4874.useSafeMode = !!i4875[0]
  i4874.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i4875[1], i4874.safeModeOptions)
  i4874.timeScale = i4875[2]
  i4874.unscaledTimeScale = i4875[3]
  i4874.useSmoothDeltaTime = !!i4875[4]
  i4874.maxSmoothUnscaledTime = i4875[5]
  i4874.rewindCallbackMode = i4875[6]
  i4874.showUnityEditorReport = !!i4875[7]
  i4874.logBehaviour = i4875[8]
  i4874.drawGizmos = !!i4875[9]
  i4874.defaultRecyclable = !!i4875[10]
  i4874.defaultAutoPlay = i4875[11]
  i4874.defaultUpdateType = i4875[12]
  i4874.defaultTimeScaleIndependent = !!i4875[13]
  i4874.defaultEaseType = i4875[14]
  i4874.defaultEaseOvershootOrAmplitude = i4875[15]
  i4874.defaultEasePeriod = i4875[16]
  i4874.defaultAutoKill = !!i4875[17]
  i4874.defaultLoopType = i4875[18]
  i4874.debugMode = !!i4875[19]
  i4874.debugStoreTargetId = !!i4875[20]
  i4874.showPreviewPanel = !!i4875[21]
  i4874.storeSettingsLocation = i4875[22]
  i4874.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i4875[23], i4874.modules)
  i4874.createASMDEF = !!i4875[24]
  i4874.showPlayingTweens = !!i4875[25]
  i4874.showPausedTweens = !!i4875[26]
  return i4874
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i4876 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i4877 = data
  i4876.logBehaviour = i4877[0]
  i4876.nestedTweenFailureBehaviour = i4877[1]
  return i4876
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i4878 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i4879 = data
  i4878.showPanel = !!i4879[0]
  i4878.audioEnabled = !!i4879[1]
  i4878.physicsEnabled = !!i4879[2]
  i4878.physics2DEnabled = !!i4879[3]
  i4878.spriteEnabled = !!i4879[4]
  i4878.uiEnabled = !!i4879[5]
  i4878.textMeshProEnabled = !!i4879[6]
  i4878.tk2DEnabled = !!i4879[7]
  i4878.deAudioEnabled = !!i4879[8]
  i4878.deUnityExtendedEnabled = !!i4879[9]
  i4878.epoOutlineEnabled = !!i4879[10]
  return i4878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4881 = data
  var i4883 = i4881[0]
  var i4882 = []
  for(var i = 0; i < i4883.length; i += 1) {
    i4882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4883[i + 0]) );
  }
  i4880.files = i4882
  i4880.componentToPrefabIds = i4881[1]
  return i4880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4887 = data
  i4886.path = i4887[0]
  request.r(i4887[1], i4887[2], 0, i4886, 'unityObject')
  return i4886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4889 = data
  var i4891 = i4889[0]
  var i4890 = []
  for(var i = 0; i < i4891.length; i += 1) {
    i4890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4891[i + 0]) );
  }
  i4888.scriptsExecutionOrder = i4890
  var i4893 = i4889[1]
  var i4892 = []
  for(var i = 0; i < i4893.length; i += 1) {
    i4892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4893[i + 0]) );
  }
  i4888.sortingLayers = i4892
  var i4895 = i4889[2]
  var i4894 = []
  for(var i = 0; i < i4895.length; i += 1) {
    i4894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4895[i + 0]) );
  }
  i4888.cullingLayers = i4894
  i4888.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4889[3], i4888.timeSettings)
  i4888.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4889[4], i4888.physicsSettings)
  i4888.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4889[5], i4888.physics2DSettings)
  i4888.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4889[6], i4888.qualitySettings)
  i4888.enableRealtimeShadows = !!i4889[7]
  i4888.enableAutoInstancing = !!i4889[8]
  i4888.enableStaticBatching = !!i4889[9]
  i4888.enableDynamicBatching = !!i4889[10]
  i4888.usePreservativeDynamicBatching = !!i4889[11]
  i4888.lightmapEncodingQuality = i4889[12]
  i4888.desiredColorSpace = i4889[13]
  var i4897 = i4889[14]
  var i4896 = []
  for(var i = 0; i < i4897.length; i += 1) {
    i4896.push( i4897[i + 0] );
  }
  i4888.allTags = i4896
  return i4888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4901 = data
  i4900.name = i4901[0]
  i4900.value = i4901[1]
  return i4900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4905 = data
  i4904.id = i4905[0]
  i4904.name = i4905[1]
  i4904.value = i4905[2]
  return i4904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4909 = data
  i4908.id = i4909[0]
  i4908.name = i4909[1]
  return i4908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4911 = data
  i4910.fixedDeltaTime = i4911[0]
  i4910.maximumDeltaTime = i4911[1]
  i4910.timeScale = i4911[2]
  i4910.maximumParticleTimestep = i4911[3]
  return i4910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4913 = data
  i4912.gravity = new pc.Vec3( i4913[0], i4913[1], i4913[2] )
  i4912.defaultSolverIterations = i4913[3]
  i4912.bounceThreshold = i4913[4]
  i4912.autoSyncTransforms = !!i4913[5]
  i4912.autoSimulation = !!i4913[6]
  var i4915 = i4913[7]
  var i4914 = []
  for(var i = 0; i < i4915.length; i += 1) {
    i4914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4915[i + 0]) );
  }
  i4912.collisionMatrix = i4914
  return i4912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4919 = data
  i4918.enabled = !!i4919[0]
  i4918.layerId = i4919[1]
  i4918.otherLayerId = i4919[2]
  return i4918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4921 = data
  request.r(i4921[0], i4921[1], 0, i4920, 'material')
  i4920.gravity = new pc.Vec2( i4921[2], i4921[3] )
  i4920.positionIterations = i4921[4]
  i4920.velocityIterations = i4921[5]
  i4920.velocityThreshold = i4921[6]
  i4920.maxLinearCorrection = i4921[7]
  i4920.maxAngularCorrection = i4921[8]
  i4920.maxTranslationSpeed = i4921[9]
  i4920.maxRotationSpeed = i4921[10]
  i4920.baumgarteScale = i4921[11]
  i4920.baumgarteTOIScale = i4921[12]
  i4920.timeToSleep = i4921[13]
  i4920.linearSleepTolerance = i4921[14]
  i4920.angularSleepTolerance = i4921[15]
  i4920.defaultContactOffset = i4921[16]
  i4920.autoSimulation = !!i4921[17]
  i4920.queriesHitTriggers = !!i4921[18]
  i4920.queriesStartInColliders = !!i4921[19]
  i4920.callbacksOnDisable = !!i4921[20]
  i4920.reuseCollisionCallbacks = !!i4921[21]
  i4920.autoSyncTransforms = !!i4921[22]
  var i4923 = i4921[23]
  var i4922 = []
  for(var i = 0; i < i4923.length; i += 1) {
    i4922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4923[i + 0]) );
  }
  i4920.collisionMatrix = i4922
  return i4920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4927 = data
  i4926.enabled = !!i4927[0]
  i4926.layerId = i4927[1]
  i4926.otherLayerId = i4927[2]
  return i4926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4929 = data
  var i4931 = i4929[0]
  var i4930 = []
  for(var i = 0; i < i4931.length; i += 1) {
    i4930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4931[i + 0]) );
  }
  i4928.qualityLevels = i4930
  var i4933 = i4929[1]
  var i4932 = []
  for(var i = 0; i < i4933.length; i += 1) {
    i4932.push( i4933[i + 0] );
  }
  i4928.names = i4932
  i4928.shadows = i4929[2]
  i4928.anisotropicFiltering = i4929[3]
  i4928.antiAliasing = i4929[4]
  i4928.lodBias = i4929[5]
  i4928.shadowCascades = i4929[6]
  i4928.shadowDistance = i4929[7]
  i4928.shadowmaskMode = i4929[8]
  i4928.shadowProjection = i4929[9]
  i4928.shadowResolution = i4929[10]
  i4928.softParticles = !!i4929[11]
  i4928.softVegetation = !!i4929[12]
  i4928.activeColorSpace = i4929[13]
  i4928.desiredColorSpace = i4929[14]
  i4928.masterTextureLimit = i4929[15]
  i4928.maxQueuedFrames = i4929[16]
  i4928.particleRaycastBudget = i4929[17]
  i4928.pixelLightCount = i4929[18]
  i4928.realtimeReflectionProbes = !!i4929[19]
  i4928.shadowCascade2Split = i4929[20]
  i4928.shadowCascade4Split = new pc.Vec3( i4929[21], i4929[22], i4929[23] )
  i4928.streamingMipmapsActive = !!i4929[24]
  i4928.vSyncCount = i4929[25]
  i4928.asyncUploadBufferSize = i4929[26]
  i4928.asyncUploadTimeSlice = i4929[27]
  i4928.billboardsFaceCameraPosition = !!i4929[28]
  i4928.shadowNearPlaneOffset = i4929[29]
  i4928.streamingMipmapsMemoryBudget = i4929[30]
  i4928.maximumLODLevel = i4929[31]
  i4928.streamingMipmapsAddAllCameras = !!i4929[32]
  i4928.streamingMipmapsMaxLevelReduction = i4929[33]
  i4928.streamingMipmapsRenderersPerFrame = i4929[34]
  i4928.resolutionScalingFixedDPIFactor = i4929[35]
  i4928.streamingMipmapsMaxFileIORequests = i4929[36]
  i4928.currentQualityLevel = i4929[37]
  return i4928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i4936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i4937 = data
  var i4939 = i4937[0]
  var i4938 = []
  for(var i = 0; i < i4939.length; i += 1) {
    i4938.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i4939[i + 0]) );
  }
  i4936.groups = i4938
  var i4941 = i4937[1]
  var i4940 = []
  for(var i = 0; i < i4941.length; i += 1) {
    i4940.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i4941[i + 0]) );
  }
  i4936.snapshots = i4940
  return i4936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i4944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i4945 = data
  i4944.id = i4945[0]
  i4944.childGroupIds = i4945[1]
  i4944.name = i4945[2]
  return i4944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i4948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i4949 = data
  i4948.id = i4949[0]
  var i4951 = i4949[1]
  var i4950 = []
  for(var i = 0; i < i4951.length; i += 1) {
    i4950.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i4951[i + 0]) );
  }
  i4948.parameters = i4950
  return i4948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i4954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i4955 = data
  i4954.name = i4955[0]
  i4954.value = i4955[1]
  return i4954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i4958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i4959 = data
  i4958.weight = i4959[0]
  i4958.vertices = i4959[1]
  i4958.normals = i4959[2]
  i4958.tangents = i4959[3]
  return i4958
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[75],"76":[49],"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[78],"85":[36],"86":[36],"87":[36],"88":[36],"89":[36],"90":[36],"91":[36],"92":[36],"93":[36],"94":[36],"95":[36],"96":[36],"97":[36],"98":[49],"99":[28],"100":[101],"102":[101],"23":[22],"103":[104],"46":[11],"105":[14],"106":[11],"107":[108],"109":[108],"110":[39],"111":[14],"112":[11],"113":[10],"31":[11],"114":[22],"115":[22],"26":[23],"54":[29,22],"116":[22],"25":[23],"117":[22],"118":[22],"119":[22],"120":[22],"121":[22],"122":[22],"123":[22],"124":[22],"125":[22],"126":[29,22],"127":[22],"128":[22],"129":[22],"130":[22],"13":[29,22],"131":[22],"132":[60],"133":[60],"61":[60],"134":[60],"135":[49],"136":[49]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level1_Cloth_Playable_PlayableStep1to2","UnityEngine.GameObject","BasicDrag","UnityEngine.SpriteRenderer","Level1_SurfController","UnityEngine.UI.Text","UnityEngine.BoxCollider2D","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.AudioSource","PlayableCTA","PlayableFadeCoverSettings","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","RotaryTimerKnob","UnityEngine.MeshRenderer","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteMask","_2dxFX_Wave","PlayableSpriteMask","BD_Clamp","UnityEngine.Rigidbody2D","PlaceItem","ActionOnTap","DG.Tweening.DOTweenAnimation","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","BD_Action","BD_Fold","UnityEngine.MeshFilter","BD_SpriteChange","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.UI.Image","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableRouter","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","TeaseTapCTA","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "10/28/2026 09:44:32";

Deserializers.lunaDaysRunning = "28.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "MakeoverFashionASMR_Lvl1_2_Step_1to2_25Nov2026";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1811";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4084";

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

Deserializers.buildID = "5dd90f0a-ae04-4f44-8504-72004de91b0e";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

