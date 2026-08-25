var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i11282 = root || request.c( 'UnityEngine.JointSpring' )
  var i11283 = data
  i11282.spring = i11283[0]
  i11282.damper = i11283[1]
  i11282.targetPosition = i11283[2]
  return i11282
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i11284 = root || request.c( 'UnityEngine.JointMotor' )
  var i11285 = data
  i11284.m_TargetVelocity = i11285[0]
  i11284.m_Force = i11285[1]
  i11284.m_FreeSpin = i11285[2]
  return i11284
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i11286 = root || request.c( 'UnityEngine.JointLimits' )
  var i11287 = data
  i11286.m_Min = i11287[0]
  i11286.m_Max = i11287[1]
  i11286.m_Bounciness = i11287[2]
  i11286.m_BounceMinVelocity = i11287[3]
  i11286.m_ContactDistance = i11287[4]
  i11286.minBounce = i11287[5]
  i11286.maxBounce = i11287[6]
  return i11286
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i11288 = root || request.c( 'UnityEngine.JointDrive' )
  var i11289 = data
  i11288.m_PositionSpring = i11289[0]
  i11288.m_PositionDamper = i11289[1]
  i11288.m_MaximumForce = i11289[2]
  i11288.m_UseAcceleration = i11289[3]
  return i11288
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i11290 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i11291 = data
  i11290.m_Spring = i11291[0]
  i11290.m_Damper = i11291[1]
  return i11290
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i11292 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i11293 = data
  i11292.m_Limit = i11293[0]
  i11292.m_Bounciness = i11293[1]
  i11292.m_ContactDistance = i11293[2]
  return i11292
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i11294 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i11295 = data
  i11294.m_ExtremumSlip = i11295[0]
  i11294.m_ExtremumValue = i11295[1]
  i11294.m_AsymptoteSlip = i11295[2]
  i11294.m_AsymptoteValue = i11295[3]
  i11294.m_Stiffness = i11295[4]
  return i11294
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i11296 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i11297 = data
  i11296.m_LowerAngle = i11297[0]
  i11296.m_UpperAngle = i11297[1]
  return i11296
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i11298 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i11299 = data
  i11298.m_MotorSpeed = i11299[0]
  i11298.m_MaximumMotorTorque = i11299[1]
  return i11298
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i11300 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i11301 = data
  i11300.m_DampingRatio = i11301[0]
  i11300.m_Frequency = i11301[1]
  i11300.m_Angle = i11301[2]
  return i11300
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i11302 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i11303 = data
  i11302.m_LowerTranslation = i11303[0]
  i11302.m_UpperTranslation = i11303[1]
  return i11302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i11304 = root || new pc.UnityMaterial()
  var i11305 = data
  i11304.name = i11305[0]
  request.r(i11305[1], i11305[2], 0, i11304, 'shader')
  i11304.renderQueue = i11305[3]
  i11304.enableInstancing = !!i11305[4]
  var i11307 = i11305[5]
  var i11306 = []
  for(var i = 0; i < i11307.length; i += 1) {
    i11306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i11307[i + 0]) );
  }
  i11304.floatParameters = i11306
  var i11309 = i11305[6]
  var i11308 = []
  for(var i = 0; i < i11309.length; i += 1) {
    i11308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i11309[i + 0]) );
  }
  i11304.colorParameters = i11308
  var i11311 = i11305[7]
  var i11310 = []
  for(var i = 0; i < i11311.length; i += 1) {
    i11310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i11311[i + 0]) );
  }
  i11304.vectorParameters = i11310
  var i11313 = i11305[8]
  var i11312 = []
  for(var i = 0; i < i11313.length; i += 1) {
    i11312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i11313[i + 0]) );
  }
  i11304.textureParameters = i11312
  var i11315 = i11305[9]
  var i11314 = []
  for(var i = 0; i < i11315.length; i += 1) {
    i11314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i11315[i + 0]) );
  }
  i11304.materialFlags = i11314
  return i11304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i11318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i11319 = data
  i11318.name = i11319[0]
  i11318.value = i11319[1]
  return i11318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i11322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i11323 = data
  i11322.name = i11323[0]
  i11322.value = new pc.Color(i11323[1], i11323[2], i11323[3], i11323[4])
  return i11322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i11326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i11327 = data
  i11326.name = i11327[0]
  i11326.value = new pc.Vec4( i11327[1], i11327[2], i11327[3], i11327[4] )
  return i11326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i11330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i11331 = data
  i11330.name = i11331[0]
  request.r(i11331[1], i11331[2], 0, i11330, 'value')
  return i11330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i11334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i11335 = data
  i11334.name = i11335[0]
  i11334.enabled = !!i11335[1]
  return i11334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i11336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i11337 = data
  i11336.name = i11337[0]
  i11336.width = i11337[1]
  i11336.height = i11337[2]
  i11336.mipmapCount = i11337[3]
  i11336.anisoLevel = i11337[4]
  i11336.filterMode = i11337[5]
  i11336.hdr = !!i11337[6]
  i11336.format = i11337[7]
  i11336.wrapMode = i11337[8]
  i11336.alphaIsTransparency = !!i11337[9]
  i11336.alphaSource = i11337[10]
  i11336.graphicsFormat = i11337[11]
  i11336.sRGBTexture = !!i11337[12]
  i11336.desiredColorSpace = i11337[13]
  i11336.wrapU = i11337[14]
  i11336.wrapV = i11337[15]
  return i11336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i11338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i11339 = data
  i11338.name = i11339[0]
  i11338.halfPrecision = !!i11339[1]
  i11338.useSimplification = !!i11339[2]
  i11338.useUInt32IndexFormat = !!i11339[3]
  i11338.vertexCount = i11339[4]
  i11338.aabb = i11339[5]
  var i11341 = i11339[6]
  var i11340 = []
  for(var i = 0; i < i11341.length; i += 1) {
    i11340.push( !!i11341[i + 0] );
  }
  i11338.streams = i11340
  i11338.vertices = i11339[7]
  var i11343 = i11339[8]
  var i11342 = []
  for(var i = 0; i < i11343.length; i += 1) {
    i11342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i11343[i + 0]) );
  }
  i11338.subMeshes = i11342
  var i11345 = i11339[9]
  var i11344 = []
  for(var i = 0; i < i11345.length; i += 16) {
    i11344.push( new pc.Mat4().setData(i11345[i + 0], i11345[i + 1], i11345[i + 2], i11345[i + 3],  i11345[i + 4], i11345[i + 5], i11345[i + 6], i11345[i + 7],  i11345[i + 8], i11345[i + 9], i11345[i + 10], i11345[i + 11],  i11345[i + 12], i11345[i + 13], i11345[i + 14], i11345[i + 15]) );
  }
  i11338.bindposes = i11344
  var i11347 = i11339[10]
  var i11346 = []
  for(var i = 0; i < i11347.length; i += 1) {
    i11346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i11347[i + 0]) );
  }
  i11338.blendShapes = i11346
  return i11338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i11352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i11353 = data
  i11352.triangles = i11353[0]
  return i11352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i11358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i11359 = data
  i11358.name = i11359[0]
  var i11361 = i11359[1]
  var i11360 = []
  for(var i = 0; i < i11361.length; i += 1) {
    i11360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i11361[i + 0]) );
  }
  i11358.frames = i11360
  return i11358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i11362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i11363 = data
  i11362.position = new pc.Vec3( i11363[0], i11363[1], i11363[2] )
  i11362.scale = new pc.Vec3( i11363[3], i11363[4], i11363[5] )
  i11362.rotation = new pc.Quat(i11363[6], i11363[7], i11363[8], i11363[9])
  return i11362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i11364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i11365 = data
  i11364.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i11365[0], i11364.main)
  i11364.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i11365[1], i11364.colorBySpeed)
  i11364.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i11365[2], i11364.colorOverLifetime)
  i11364.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i11365[3], i11364.emission)
  i11364.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i11365[4], i11364.rotationBySpeed)
  i11364.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i11365[5], i11364.rotationOverLifetime)
  i11364.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i11365[6], i11364.shape)
  i11364.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i11365[7], i11364.sizeBySpeed)
  i11364.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i11365[8], i11364.sizeOverLifetime)
  i11364.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i11365[9], i11364.textureSheetAnimation)
  i11364.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i11365[10], i11364.velocityOverLifetime)
  i11364.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i11365[11], i11364.noise)
  i11364.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i11365[12], i11364.inheritVelocity)
  i11364.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i11365[13], i11364.forceOverLifetime)
  i11364.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i11365[14], i11364.limitVelocityOverLifetime)
  i11364.useAutoRandomSeed = !!i11365[15]
  i11364.randomSeed = i11365[16]
  return i11364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i11366 = root || new pc.ParticleSystemMain()
  var i11367 = data
  i11366.duration = i11367[0]
  i11366.loop = !!i11367[1]
  i11366.prewarm = !!i11367[2]
  i11366.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11367[3], i11366.startDelay)
  i11366.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11367[4], i11366.startLifetime)
  i11366.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11367[5], i11366.startSpeed)
  i11366.startSize3D = !!i11367[6]
  i11366.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11367[7], i11366.startSizeX)
  i11366.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11367[8], i11366.startSizeY)
  i11366.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11367[9], i11366.startSizeZ)
  i11366.startRotation3D = !!i11367[10]
  i11366.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11367[11], i11366.startRotationX)
  i11366.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11367[12], i11366.startRotationY)
  i11366.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11367[13], i11366.startRotationZ)
  i11366.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i11367[14], i11366.startColor)
  i11366.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11367[15], i11366.gravityModifier)
  i11366.simulationSpace = i11367[16]
  request.r(i11367[17], i11367[18], 0, i11366, 'customSimulationSpace')
  i11366.simulationSpeed = i11367[19]
  i11366.useUnscaledTime = !!i11367[20]
  i11366.scalingMode = i11367[21]
  i11366.playOnAwake = !!i11367[22]
  i11366.maxParticles = i11367[23]
  i11366.emitterVelocityMode = i11367[24]
  i11366.stopAction = i11367[25]
  return i11366
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i11368 = root || new pc.MinMaxCurve()
  var i11369 = data
  i11368.mode = i11369[0]
  i11368.curveMin = new pc.AnimationCurve( { keys_flow: i11369[1] } )
  i11368.curveMax = new pc.AnimationCurve( { keys_flow: i11369[2] } )
  i11368.curveMultiplier = i11369[3]
  i11368.constantMin = i11369[4]
  i11368.constantMax = i11369[5]
  return i11368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i11370 = root || new pc.MinMaxGradient()
  var i11371 = data
  i11370.mode = i11371[0]
  i11370.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i11371[1], i11370.gradientMin)
  i11370.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i11371[2], i11370.gradientMax)
  i11370.colorMin = new pc.Color(i11371[3], i11371[4], i11371[5], i11371[6])
  i11370.colorMax = new pc.Color(i11371[7], i11371[8], i11371[9], i11371[10])
  return i11370
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i11372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i11373 = data
  i11372.mode = i11373[0]
  var i11375 = i11373[1]
  var i11374 = []
  for(var i = 0; i < i11375.length; i += 1) {
    i11374.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i11375[i + 0]) );
  }
  i11372.colorKeys = i11374
  var i11377 = i11373[2]
  var i11376 = []
  for(var i = 0; i < i11377.length; i += 1) {
    i11376.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i11377[i + 0]) );
  }
  i11372.alphaKeys = i11376
  return i11372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i11378 = root || new pc.ParticleSystemColorBySpeed()
  var i11379 = data
  i11378.enabled = !!i11379[0]
  i11378.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i11379[1], i11378.color)
  i11378.range = new pc.Vec2( i11379[2], i11379[3] )
  return i11378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i11382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i11383 = data
  i11382.color = new pc.Color(i11383[0], i11383[1], i11383[2], i11383[3])
  i11382.time = i11383[4]
  return i11382
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i11386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i11387 = data
  i11386.alpha = i11387[0]
  i11386.time = i11387[1]
  return i11386
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i11388 = root || new pc.ParticleSystemColorOverLifetime()
  var i11389 = data
  i11388.enabled = !!i11389[0]
  i11388.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i11389[1], i11388.color)
  return i11388
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i11390 = root || new pc.ParticleSystemEmitter()
  var i11391 = data
  i11390.enabled = !!i11391[0]
  i11390.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11391[1], i11390.rateOverTime)
  i11390.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11391[2], i11390.rateOverDistance)
  var i11393 = i11391[3]
  var i11392 = []
  for(var i = 0; i < i11393.length; i += 1) {
    i11392.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i11393[i + 0]) );
  }
  i11390.bursts = i11392
  return i11390
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i11396 = root || new pc.ParticleSystemBurst()
  var i11397 = data
  i11396.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11397[0], i11396.count)
  i11396.cycleCount = i11397[1]
  i11396.minCount = i11397[2]
  i11396.maxCount = i11397[3]
  i11396.repeatInterval = i11397[4]
  i11396.time = i11397[5]
  return i11396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i11398 = root || new pc.ParticleSystemRotationBySpeed()
  var i11399 = data
  i11398.enabled = !!i11399[0]
  i11398.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11399[1], i11398.x)
  i11398.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11399[2], i11398.y)
  i11398.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11399[3], i11398.z)
  i11398.separateAxes = !!i11399[4]
  i11398.range = new pc.Vec2( i11399[5], i11399[6] )
  return i11398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i11400 = root || new pc.ParticleSystemRotationOverLifetime()
  var i11401 = data
  i11400.enabled = !!i11401[0]
  i11400.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11401[1], i11400.x)
  i11400.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11401[2], i11400.y)
  i11400.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11401[3], i11400.z)
  i11400.separateAxes = !!i11401[4]
  return i11400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i11402 = root || new pc.ParticleSystemShape()
  var i11403 = data
  i11402.enabled = !!i11403[0]
  i11402.shapeType = i11403[1]
  i11402.randomDirectionAmount = i11403[2]
  i11402.sphericalDirectionAmount = i11403[3]
  i11402.randomPositionAmount = i11403[4]
  i11402.alignToDirection = !!i11403[5]
  i11402.radius = i11403[6]
  i11402.radiusMode = i11403[7]
  i11402.radiusSpread = i11403[8]
  i11402.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11403[9], i11402.radiusSpeed)
  i11402.radiusThickness = i11403[10]
  i11402.angle = i11403[11]
  i11402.length = i11403[12]
  i11402.boxThickness = new pc.Vec3( i11403[13], i11403[14], i11403[15] )
  i11402.meshShapeType = i11403[16]
  request.r(i11403[17], i11403[18], 0, i11402, 'mesh')
  request.r(i11403[19], i11403[20], 0, i11402, 'meshRenderer')
  request.r(i11403[21], i11403[22], 0, i11402, 'skinnedMeshRenderer')
  i11402.useMeshMaterialIndex = !!i11403[23]
  i11402.meshMaterialIndex = i11403[24]
  i11402.useMeshColors = !!i11403[25]
  i11402.normalOffset = i11403[26]
  i11402.arc = i11403[27]
  i11402.arcMode = i11403[28]
  i11402.arcSpread = i11403[29]
  i11402.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11403[30], i11402.arcSpeed)
  i11402.donutRadius = i11403[31]
  i11402.position = new pc.Vec3( i11403[32], i11403[33], i11403[34] )
  i11402.rotation = new pc.Vec3( i11403[35], i11403[36], i11403[37] )
  i11402.scale = new pc.Vec3( i11403[38], i11403[39], i11403[40] )
  return i11402
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i11404 = root || new pc.ParticleSystemSizeBySpeed()
  var i11405 = data
  i11404.enabled = !!i11405[0]
  i11404.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11405[1], i11404.x)
  i11404.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11405[2], i11404.y)
  i11404.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11405[3], i11404.z)
  i11404.separateAxes = !!i11405[4]
  i11404.range = new pc.Vec2( i11405[5], i11405[6] )
  return i11404
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i11406 = root || new pc.ParticleSystemSizeOverLifetime()
  var i11407 = data
  i11406.enabled = !!i11407[0]
  i11406.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11407[1], i11406.x)
  i11406.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11407[2], i11406.y)
  i11406.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11407[3], i11406.z)
  i11406.separateAxes = !!i11407[4]
  return i11406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i11408 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i11409 = data
  i11408.enabled = !!i11409[0]
  i11408.mode = i11409[1]
  i11408.animation = i11409[2]
  i11408.numTilesX = i11409[3]
  i11408.numTilesY = i11409[4]
  i11408.useRandomRow = !!i11409[5]
  i11408.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11409[6], i11408.frameOverTime)
  i11408.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11409[7], i11408.startFrame)
  i11408.cycleCount = i11409[8]
  i11408.rowIndex = i11409[9]
  i11408.flipU = i11409[10]
  i11408.flipV = i11409[11]
  i11408.spriteCount = i11409[12]
  var i11411 = i11409[13]
  var i11410 = []
  for(var i = 0; i < i11411.length; i += 2) {
  request.r(i11411[i + 0], i11411[i + 1], 2, i11410, '')
  }
  i11408.sprites = i11410
  return i11408
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i11414 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i11415 = data
  i11414.enabled = !!i11415[0]
  i11414.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11415[1], i11414.x)
  i11414.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11415[2], i11414.y)
  i11414.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11415[3], i11414.z)
  i11414.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11415[4], i11414.radial)
  i11414.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11415[5], i11414.speedModifier)
  i11414.space = i11415[6]
  i11414.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11415[7], i11414.orbitalX)
  i11414.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11415[8], i11414.orbitalY)
  i11414.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11415[9], i11414.orbitalZ)
  i11414.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11415[10], i11414.orbitalOffsetX)
  i11414.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11415[11], i11414.orbitalOffsetY)
  i11414.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11415[12], i11414.orbitalOffsetZ)
  return i11414
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i11416 = root || new pc.ParticleSystemNoise()
  var i11417 = data
  i11416.enabled = !!i11417[0]
  i11416.separateAxes = !!i11417[1]
  i11416.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11417[2], i11416.strengthX)
  i11416.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11417[3], i11416.strengthY)
  i11416.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11417[4], i11416.strengthZ)
  i11416.frequency = i11417[5]
  i11416.damping = !!i11417[6]
  i11416.octaveCount = i11417[7]
  i11416.octaveMultiplier = i11417[8]
  i11416.octaveScale = i11417[9]
  i11416.quality = i11417[10]
  i11416.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11417[11], i11416.scrollSpeed)
  i11416.scrollSpeedMultiplier = i11417[12]
  i11416.remapEnabled = !!i11417[13]
  i11416.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11417[14], i11416.remapX)
  i11416.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11417[15], i11416.remapY)
  i11416.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11417[16], i11416.remapZ)
  i11416.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11417[17], i11416.positionAmount)
  i11416.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11417[18], i11416.rotationAmount)
  i11416.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11417[19], i11416.sizeAmount)
  return i11416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i11418 = root || new pc.ParticleSystemInheritVelocity()
  var i11419 = data
  i11418.enabled = !!i11419[0]
  i11418.mode = i11419[1]
  i11418.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11419[2], i11418.curve)
  return i11418
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i11420 = root || new pc.ParticleSystemForceOverLifetime()
  var i11421 = data
  i11420.enabled = !!i11421[0]
  i11420.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11421[1], i11420.x)
  i11420.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11421[2], i11420.y)
  i11420.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11421[3], i11420.z)
  i11420.space = i11421[4]
  i11420.randomized = !!i11421[5]
  return i11420
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i11422 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i11423 = data
  i11422.enabled = !!i11423[0]
  i11422.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11423[1], i11422.limit)
  i11422.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11423[2], i11422.limitX)
  i11422.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11423[3], i11422.limitY)
  i11422.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11423[4], i11422.limitZ)
  i11422.dampen = i11423[5]
  i11422.separateAxes = !!i11423[6]
  i11422.space = i11423[7]
  i11422.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11423[8], i11422.drag)
  i11422.multiplyDragByParticleSize = !!i11423[9]
  i11422.multiplyDragByParticleVelocity = !!i11423[10]
  return i11422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i11424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i11425 = data
  request.r(i11425[0], i11425[1], 0, i11424, 'mesh')
  i11424.meshCount = i11425[2]
  i11424.activeVertexStreamsCount = i11425[3]
  i11424.alignment = i11425[4]
  i11424.renderMode = i11425[5]
  i11424.sortMode = i11425[6]
  i11424.lengthScale = i11425[7]
  i11424.velocityScale = i11425[8]
  i11424.cameraVelocityScale = i11425[9]
  i11424.normalDirection = i11425[10]
  i11424.sortingFudge = i11425[11]
  i11424.minParticleSize = i11425[12]
  i11424.maxParticleSize = i11425[13]
  i11424.pivot = new pc.Vec3( i11425[14], i11425[15], i11425[16] )
  request.r(i11425[17], i11425[18], 0, i11424, 'trailMaterial')
  i11424.applyActiveColorSpace = !!i11425[19]
  i11424.enabled = !!i11425[20]
  request.r(i11425[21], i11425[22], 0, i11424, 'sharedMaterial')
  var i11427 = i11425[23]
  var i11426 = []
  for(var i = 0; i < i11427.length; i += 2) {
  request.r(i11427[i + 0], i11427[i + 1], 2, i11426, '')
  }
  i11424.sharedMaterials = i11426
  i11424.receiveShadows = !!i11425[24]
  i11424.shadowCastingMode = i11425[25]
  i11424.sortingLayerID = i11425[26]
  i11424.sortingOrder = i11425[27]
  i11424.lightmapIndex = i11425[28]
  i11424.lightmapSceneIndex = i11425[29]
  i11424.lightmapScaleOffset = new pc.Vec4( i11425[30], i11425[31], i11425[32], i11425[33] )
  i11424.lightProbeUsage = i11425[34]
  i11424.reflectionProbeUsage = i11425[35]
  return i11424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i11430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i11431 = data
  i11430.name = i11431[0]
  i11430.tagId = i11431[1]
  i11430.enabled = !!i11431[2]
  i11430.isStatic = !!i11431[3]
  i11430.layer = i11431[4]
  return i11430
}

Deserializers["Level1_Hair_Playable"] = function (request, data, root) {
  var i11432 = root || request.c( 'Level1_Hair_Playable' )
  var i11433 = data
  request.r(i11433[0], i11433[1], 0, i11432, 'wetCloth')
  request.r(i11433[2], i11433[3], 0, i11432, 'waterDripingParticle')
  i11432.ZoomStep1 = request.d('ZoomPos', i11433[4], i11432.ZoomStep1)
  var i11435 = i11433[5]
  var i11434 = []
  for(var i = 0; i < i11435.length; i += 2) {
  request.r(i11435[i + 0], i11435[i + 1], 2, i11434, '')
  }
  i11432.AllTrash = i11434
  var i11437 = i11433[6]
  var i11436 = []
  for(var i = 0; i < i11437.length; i += 2) {
  request.r(i11437[i + 0], i11437[i + 1], 2, i11436, '')
  }
  i11432.AllTrashOutlines = i11436
  i11432.trashDone = !!i11433[7]
  i11432.trashThrown = i11433[8]
  i11432.trashTotal = i11433[9]
  request.r(i11433[10], i11433[11], 0, i11432, 'bd_Sticky')
  i11432.ZoomStep2 = request.d('ZoomPos', i11433[12], i11432.ZoomStep2)
  request.r(i11433[13], i11433[14], 0, i11432, 'ToolStep2')
  request.r(i11433[15], i11433[16], 0, i11432, 'camFollowStep2')
  var i11439 = i11433[17]
  var i11438 = []
  for(var i = 0; i < i11439.length; i += 2) {
  request.r(i11439[i + 0], i11439[i + 1], 2, i11438, '')
  }
  i11432.AllBugOutlines = i11438
  i11432.ZoomStep2b = request.d('ZoomPos', i11433[18], i11432.ZoomStep2b)
  request.r(i11433[19], i11433[20], 0, i11432, 'ToolStep2b')
  request.r(i11433[21], i11433[22], 0, i11432, 'camFollowStep2b')
  request.r(i11433[23], i11433[24], 0, i11432, 'dustColStep2')
  request.r(i11433[25], i11433[26], 0, i11432, 'handIndicationShower')
  request.r(i11433[27], i11433[28], 0, i11432, 'hairDirtyStatic')
  request.r(i11433[29], i11433[30], 0, i11432, 'hairDirtyWetStatic')
  request.r(i11433[31], i11433[32], 0, i11432, 'dryHairAnim')
  i11432.ZoomStep3 = request.d('ZoomPos', i11433[33], i11432.ZoomStep3)
  request.r(i11433[34], i11433[35], 0, i11432, 'ShampooInHand')
  request.r(i11433[36], i11433[37], 0, i11432, 'ShampooOnHand')
  request.r(i11433[38], i11433[39], 0, i11432, 'ShampooInHandCap')
  request.r(i11433[40], i11433[41], 0, i11432, 'ToolStep3')
  request.r(i11433[42], i11433[43], 0, i11432, 'shampooPatch')
  request.r(i11433[44], i11433[45], 0, i11432, 'handSpriteRend')
  request.r(i11433[46], i11433[47], 0, i11432, 'bottleDefault')
  request.r(i11433[48], i11433[49], 0, i11432, 'bottlePressed')
  request.r(i11433[50], i11433[51], 0, i11432, 'shampooDropping')
  request.r(i11433[52], i11433[53], 0, i11432, 'bottleOpenSfx')
  request.r(i11433[54], i11433[55], 0, i11432, 'bottleSqueezSfx')
  request.r(i11433[56], i11433[57], 0, i11432, 'bottlePourSfx')
  i11432.ZoomStep4 = request.d('ZoomPos', i11433[58], i11432.ZoomStep4)
  request.r(i11433[59], i11433[60], 0, i11432, 'ToolStep4')
  request.r(i11433[61], i11433[62], 0, i11432, 'camFollowStep4')
  request.r(i11433[63], i11433[64], 0, i11432, 'foamLight_E')
  request.r(i11433[65], i11433[66], 0, i11432, 'foam2_E')
  request.r(i11433[67], i11433[68], 0, i11432, 'foamCol')
  request.r(i11433[69], i11433[70], 0, i11432, 'handIndicationHands')
  request.r(i11433[71], i11433[72], 0, i11432, 'progressStep4')
  i11432.ZoomStep5a = request.d('ZoomPos', i11433[73], i11432.ZoomStep5a)
  i11432.ZoomStep5b = request.d('ZoomPos', i11433[74], i11432.ZoomStep5b)
  request.r(i11433[75], i11433[76], 0, i11432, 'ShowerDamaged')
  request.r(i11433[77], i11433[78], 0, i11432, 'ShowerBackDMG')
  request.r(i11433[79], i11433[80], 0, i11432, 'ShowerInner_dirty')
  request.r(i11433[81], i11433[82], 0, i11432, 'ShowerInner_Target')
  request.r(i11433[83], i11433[84], 0, i11432, 'ShowerFrontDMG')
  request.r(i11433[85], i11433[86], 0, i11432, 'OpenShowerIndication')
  request.r(i11433[87], i11433[88], 0, i11432, 'CloseShowerIndication')
  request.r(i11433[89], i11433[90], 0, i11432, 'showrOpenInput')
  request.r(i11433[91], i11433[92], 0, i11432, 'showerDisk')
  request.r(i11433[93], i11433[94], 0, i11432, 'showerFixReverseAnimDrag')
  request.r(i11433[95], i11433[96], 0, i11432, 'showerDragDamage')
  request.r(i11433[97], i11433[98], 0, i11432, 'ToolStep5Rev')
  i11432.ZoomStep5 = request.d('ZoomPos', i11433[99], i11432.ZoomStep5)
  request.r(i11433[100], i11433[101], 0, i11432, 'ToolStep5')
  request.r(i11433[102], i11433[103], 0, i11432, 'ToolStep5Placeable')
  request.r(i11433[104], i11433[105], 0, i11432, 'toolStep5Progress')
  request.r(i11433[106], i11433[107], 0, i11432, 'toolStep5ProgressHelp')
  request.r(i11433[108], i11433[109], 0, i11432, 'camFollowStep5')
  request.r(i11433[110], i11433[111], 0, i11432, 'showerRender')
  request.r(i11433[112], i11433[113], 0, i11432, 'showerDirty')
  request.r(i11433[114], i11433[115], 0, i11432, 'showerClean')
  request.r(i11433[116], i11433[117], 0, i11432, 'waterShotParticle')
  request.r(i11433[118], i11433[119], 0, i11432, 'showerProblemClip')
  request.r(i11433[120], i11433[121], 0, i11432, 'wetHairs_E')
  i11432.levelName = i11433[122]
  i11432.levelReward = i11433[123]
  request.r(i11433[124], i11433[125], 0, i11432, 'LevelIcon')
  request.r(i11433[126], i11433[127], 0, i11432, 'Level_BG')
  var i11441 = i11433[128]
  var i11440 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i11441.length; i += 2) {
  request.r(i11441[i + 0], i11441[i + 1], 1, i11440, '')
  }
  i11432.ToolIcons = i11440
  var i11443 = i11433[129]
  var i11442 = []
  for(var i = 0; i < i11443.length; i += 2) {
  request.r(i11443[i + 0], i11443[i + 1], 2, i11442, '')
  }
  i11432.AllDrags = i11442
  var i11445 = i11433[130]
  var i11444 = []
  for(var i = 0; i < i11445.length; i += 2) {
  request.r(i11445[i + 0], i11445[i + 1], 2, i11444, '')
  }
  i11432.AllSources = i11444
  var i11447 = i11433[131]
  var i11446 = []
  for(var i = 0; i < i11447.length; i += 2) {
  request.r(i11447[i + 0], i11447[i + 1], 2, i11446, '')
  }
  i11432.AllScratches = i11446
  i11432.stepsDone = i11433[132]
  i11432.levelNo = i11433[133]
  i11432.partNo = i11433[134]
  request.r(i11433[135], i11433[136], 0, i11432, 'bubbleGum')
  return i11432
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i11448 = root || request.c( 'ZoomPos' )
  var i11449 = data
  i11448.CameraPos = new pc.Vec3( i11449[0], i11449[1], i11449[2] )
  i11448.CameraFOV = i11449[3]
  return i11448
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i11460 = root || request.c( 'PlayableCTA' )
  var i11461 = data
  i11460.trigger = i11461[0]
  i11460.afterSeconds = i11461[1]
  i11460.afterTaps = i11461[2]
  request.r(i11461[3], i11461[4], 0, i11460, 'scratchProgress')
  i11460.scratchIndex = i11461[5]
  i11460.progressThreshold = i11461[6]
  i11460.refireOnEveryTap = !!i11461[7]
  i11460.refireDelay = i11461[8]
  i11460.showEndCard = !!i11461[9]
  request.r(i11461[10], i11461[11], 0, i11460, 'endCard')
  request.r(i11461[12], i11461[13], 0, i11460, 'endParticles')
  i11460.playEndParticlesOnProgressTrigger = !!i11461[14]
  request.r(i11461[15], i11461[16], 0, i11460, 'stepCompleteParticles')
  i11460.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i11461[17], i11460.onCtaFired)
  i11460.logWhenFired = !!i11461[18]
  return i11460
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i11462 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i11463 = data
  i11462.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i11463[0], i11462.m_PersistentCalls)
  return i11462
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i11464 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i11465 = data
  var i11467 = i11465[0]
  var i11466 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i11467.length; i += 1) {
    i11466.add(request.d('UnityEngine.Events.PersistentCall', i11467[i + 0]));
  }
  i11464.m_Calls = i11466
  return i11464
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i11470 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i11471 = data
  request.r(i11471[0], i11471[1], 0, i11470, 'm_Target')
  i11470.m_TargetAssemblyTypeName = i11471[2]
  i11470.m_MethodName = i11471[3]
  i11470.m_Mode = i11471[4]
  i11470.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i11471[5], i11470.m_Arguments)
  i11470.m_CallState = i11471[6]
  return i11470
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i11472 = root || request.c( 'PlayableFadeCoverSettings' )
  var i11473 = data
  i11472.revealDelay = i11473[0]
  i11472.revealDuration = i11473[1]
  return i11472
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i11474 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i11475 = data
  request.r(i11475[0], i11475[1], 0, i11474, 'MainCamera')
  i11474.RenderType = i11475[2]
  request.r(i11475[3], i11475[4], 0, i11474, 'ScratchSurfaceSprite')
  i11474.ScratchSurfaceSpriteHasAlpha = !!i11475[5]
  i11474.MaskProgressCutOffValue = i11475[6]
  request.r(i11475[7], i11475[8], 0, i11474, 'EraseTexture')
  i11474.EraseTextureScale = new pc.Vec2( i11475[9], i11475[10] )
  i11474.InputEnabled = !!i11475[11]
  request.r(i11475[12], i11475[13], 0, i11474, 'Card')
  i11474.Mode = i11475[14]
  request.r(i11475[15], i11475[16], 0, i11474, 'Progress')
  request.r(i11475[17], i11475[18], 0, i11474, 'MeshCard')
  request.r(i11475[19], i11475[20], 0, i11474, 'SpriteCard')
  request.r(i11475[21], i11475[22], 0, i11474, 'ImageCard')
  request.r(i11475[23], i11475[24], 0, i11474, 'MaskShader')
  request.r(i11475[25], i11475[26], 0, i11474, 'BrushShader')
  request.r(i11475[27], i11475[28], 0, i11474, 'MaskProgressShader')
  request.r(i11475[29], i11475[30], 0, i11474, 'MaskProgressCutOffShader')
  return i11474
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i11476 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i11477 = data
  request.r(i11477[0], i11477[1], 0, i11476, 'MainCamera')
  request.r(i11477[2], i11477[3], 0, i11476, 'Surface')
  i11476.RenderTextureQuality = i11477[4]
  request.r(i11477[5], i11477[6], 0, i11476, 'Eraser')
  request.r(i11477[7], i11477[8], 0, i11476, 'Progress')
  request.r(i11477[9], i11477[10], 0, i11476, 'ScratchSurface')
  request.r(i11477[11], i11477[12], 0, i11476, 'RenderTexture')
  i11476.BrushScale = new pc.Vec2( i11477[13], i11477[14] )
  request.r(i11477[15], i11477[16], 0, i11476, 'ToolTip')
  i11476.InputEnabled = !!i11477[17]
  i11476.IsScratching = !!i11477[18]
  i11476.useChangingScale = !!i11477[19]
  i11476.useGivenBrushScale = !!i11477[20]
  i11476.canSpreadMask = !!i11477[21]
  i11476.shouldPaintHoles = !!i11477[22]
  i11476.canRotateTip = !!i11477[23]
  i11476._mode = i11477[24]
  return i11476
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i11478 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i11479 = data
  request.r(i11479[0], i11479[1], 0, i11478, 'Card')
  i11478.currentProgress = i11479[2]
  return i11478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i11480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i11481 = data
  request.r(i11481[0], i11481[1], 0, i11480, 'animatorController')
  request.r(i11481[2], i11481[3], 0, i11480, 'avatar')
  i11480.updateMode = i11481[4]
  i11480.hasTransformHierarchy = !!i11481[5]
  i11480.applyRootMotion = !!i11481[6]
  var i11483 = i11481[7]
  var i11482 = []
  for(var i = 0; i < i11483.length; i += 2) {
  request.r(i11483[i + 0], i11483[i + 1], 2, i11482, '')
  }
  i11480.humanBones = i11482
  i11480.enabled = !!i11481[8]
  return i11480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i11486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i11487 = data
  i11486.color = new pc.Color(i11487[0], i11487[1], i11487[2], i11487[3])
  request.r(i11487[4], i11487[5], 0, i11486, 'sprite')
  i11486.flipX = !!i11487[6]
  i11486.flipY = !!i11487[7]
  i11486.drawMode = i11487[8]
  i11486.size = new pc.Vec2( i11487[9], i11487[10] )
  i11486.tileMode = i11487[11]
  i11486.adaptiveModeThreshold = i11487[12]
  i11486.maskInteraction = i11487[13]
  i11486.spriteSortPoint = i11487[14]
  i11486.enabled = !!i11487[15]
  request.r(i11487[16], i11487[17], 0, i11486, 'sharedMaterial')
  var i11489 = i11487[18]
  var i11488 = []
  for(var i = 0; i < i11489.length; i += 2) {
  request.r(i11489[i + 0], i11489[i + 1], 2, i11488, '')
  }
  i11486.sharedMaterials = i11488
  i11486.receiveShadows = !!i11487[19]
  i11486.shadowCastingMode = i11487[20]
  i11486.sortingLayerID = i11487[21]
  i11486.sortingOrder = i11487[22]
  i11486.lightmapIndex = i11487[23]
  i11486.lightmapSceneIndex = i11487[24]
  i11486.lightmapScaleOffset = new pc.Vec4( i11487[25], i11487[26], i11487[27], i11487[28] )
  i11486.lightProbeUsage = i11487[29]
  i11486.reflectionProbeUsage = i11487[30]
  return i11486
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i11490 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i11491 = data
  request.r(i11491[0], i11491[1], 0, i11490, 'm_RootBone')
  var i11493 = i11491[2]
  var i11492 = []
  for(var i = 0; i < i11493.length; i += 2) {
  request.r(i11493[i + 0], i11493[i + 1], 2, i11492, '')
  }
  i11490.m_BoneTransforms = i11492
  i11490.m_AlwaysUpdate = !!i11491[3]
  i11490.m_AutoRebind = !!i11491[4]
  return i11490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i11494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i11495 = data
  var i11497 = i11495[0]
  var i11496 = []
  for(var i = 0; i < i11497.length; i += 3) {
    i11496.push( new pc.Vec3( i11497[i + 0], i11497[i + 1], i11497[i + 2] ) );
  }
  i11494.positions = i11496
  i11494.positionCount = i11495[1]
  i11494.time = i11495[2]
  i11494.startWidth = i11495[3]
  i11494.endWidth = i11495[4]
  i11494.widthMultiplier = i11495[5]
  i11494.autodestruct = !!i11495[6]
  i11494.emitting = !!i11495[7]
  i11494.numCornerVertices = i11495[8]
  i11494.numCapVertices = i11495[9]
  i11494.minVertexDistance = i11495[10]
  i11494.colorGradient = i11495[11] ? new pc.ColorGradient(i11495[11][0], i11495[11][1], i11495[11][2]) : null
  i11494.startColor = new pc.Color(i11495[12], i11495[13], i11495[14], i11495[15])
  i11494.endColor = new pc.Color(i11495[16], i11495[17], i11495[18], i11495[19])
  i11494.generateLightingData = !!i11495[20]
  i11494.textureMode = i11495[21]
  i11494.alignment = i11495[22]
  i11494.widthCurve = new pc.AnimationCurve( { keys_flow: i11495[23] } )
  i11494.enabled = !!i11495[24]
  request.r(i11495[25], i11495[26], 0, i11494, 'sharedMaterial')
  var i11499 = i11495[27]
  var i11498 = []
  for(var i = 0; i < i11499.length; i += 2) {
  request.r(i11499[i + 0], i11499[i + 1], 2, i11498, '')
  }
  i11494.sharedMaterials = i11498
  i11494.receiveShadows = !!i11495[28]
  i11494.shadowCastingMode = i11495[29]
  i11494.sortingLayerID = i11495[30]
  i11494.sortingOrder = i11495[31]
  i11494.lightmapIndex = i11495[32]
  i11494.lightmapSceneIndex = i11495[33]
  i11494.lightmapScaleOffset = new pc.Vec4( i11495[34], i11495[35], i11495[36], i11495[37] )
  i11494.lightProbeUsage = i11495[38]
  i11494.reflectionProbeUsage = i11495[39]
  return i11494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i11502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i11503 = data
  i11502.textureMode = i11503[0]
  i11502.alignment = i11503[1]
  i11502.widthCurve = new pc.AnimationCurve( { keys_flow: i11503[2] } )
  i11502.colorGradient = i11503[3] ? new pc.ColorGradient(i11503[3][0], i11503[3][1], i11503[3][2]) : null
  var i11505 = i11503[4]
  var i11504 = []
  for(var i = 0; i < i11505.length; i += 3) {
    i11504.push( new pc.Vec3( i11505[i + 0], i11505[i + 1], i11505[i + 2] ) );
  }
  i11502.positions = i11504
  i11502.positionCount = i11503[5]
  i11502.widthMultiplier = i11503[6]
  i11502.startWidth = i11503[7]
  i11502.endWidth = i11503[8]
  i11502.numCornerVertices = i11503[9]
  i11502.numCapVertices = i11503[10]
  i11502.useWorldSpace = !!i11503[11]
  i11502.loop = !!i11503[12]
  i11502.startColor = new pc.Color(i11503[13], i11503[14], i11503[15], i11503[16])
  i11502.endColor = new pc.Color(i11503[17], i11503[18], i11503[19], i11503[20])
  i11502.generateLightingData = !!i11503[21]
  i11502.enabled = !!i11503[22]
  request.r(i11503[23], i11503[24], 0, i11502, 'sharedMaterial')
  var i11507 = i11503[25]
  var i11506 = []
  for(var i = 0; i < i11507.length; i += 2) {
  request.r(i11507[i + 0], i11507[i + 1], 2, i11506, '')
  }
  i11502.sharedMaterials = i11506
  i11502.receiveShadows = !!i11503[26]
  i11502.shadowCastingMode = i11503[27]
  i11502.sortingLayerID = i11503[28]
  i11502.sortingOrder = i11503[29]
  i11502.lightmapIndex = i11503[30]
  i11502.lightmapSceneIndex = i11503[31]
  i11502.lightmapScaleOffset = new pc.Vec4( i11503[32], i11503[33], i11503[34], i11503[35] )
  i11502.lightProbeUsage = i11503[36]
  i11502.reflectionProbeUsage = i11503[37]
  return i11502
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i11508 = root || request.c( 'StaticFixedPipe' )
  var i11509 = data
  request.r(i11509[0], i11509[1], 0, i11508, 'lineRenderer')
  request.r(i11509[2], i11509[3], 0, i11508, 'toolTransform')
  request.r(i11509[4], i11509[5], 0, i11508, 'toolDirectionPoint')
  request.r(i11509[6], i11509[7], 0, i11508, 'fixedEndPoint')
  i11508.segmentCount = i11509[8]
  i11508.totalLength = i11509[9]
  i11508.constraintIterations = i11509[10]
  i11508.gravity = new pc.Vec3( i11509[11], i11509[12], i11509[13] )
  i11508.pipeWidth = i11509[14]
  return i11508
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i11510 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i11511 = data
  i11510.targetIsSelf = !!i11511[0]
  request.r(i11511[1], i11511[2], 0, i11510, 'targetGO')
  i11510.tweenTargetIsTargetGO = !!i11511[3]
  i11510.delay = i11511[4]
  i11510.duration = i11511[5]
  i11510.easeType = i11511[6]
  i11510.easeCurve = new pc.AnimationCurve( { keys_flow: i11511[7] } )
  i11510.loopType = i11511[8]
  i11510.loops = i11511[9]
  i11510.id = i11511[10]
  i11510.isRelative = !!i11511[11]
  i11510.isFrom = !!i11511[12]
  i11510.isIndependentUpdate = !!i11511[13]
  i11510.autoKill = !!i11511[14]
  i11510.autoGenerate = !!i11511[15]
  i11510.isActive = !!i11511[16]
  i11510.isValid = !!i11511[17]
  request.r(i11511[18], i11511[19], 0, i11510, 'target')
  i11510.animationType = i11511[20]
  i11510.targetType = i11511[21]
  i11510.forcedTargetType = i11511[22]
  i11510.autoPlay = !!i11511[23]
  i11510.useTargetAsV3 = !!i11511[24]
  i11510.endValueFloat = i11511[25]
  i11510.endValueV3 = new pc.Vec3( i11511[26], i11511[27], i11511[28] )
  i11510.endValueV2 = new pc.Vec2( i11511[29], i11511[30] )
  i11510.endValueColor = new pc.Color(i11511[31], i11511[32], i11511[33], i11511[34])
  i11510.endValueString = i11511[35]
  i11510.endValueRect = UnityEngine.Rect.MinMaxRect(i11511[36], i11511[37], i11511[38], i11511[39])
  request.r(i11511[40], i11511[41], 0, i11510, 'endValueTransform')
  i11510.optionalBool0 = !!i11511[42]
  i11510.optionalBool1 = !!i11511[43]
  i11510.optionalFloat0 = i11511[44]
  i11510.optionalInt0 = i11511[45]
  i11510.optionalRotationMode = i11511[46]
  i11510.optionalScrambleMode = i11511[47]
  i11510.optionalShakeRandomnessMode = i11511[48]
  i11510.optionalString = i11511[49]
  i11510.updateType = i11511[50]
  i11510.isSpeedBased = !!i11511[51]
  i11510.hasOnStart = !!i11511[52]
  i11510.hasOnPlay = !!i11511[53]
  i11510.hasOnUpdate = !!i11511[54]
  i11510.hasOnStepComplete = !!i11511[55]
  i11510.hasOnComplete = !!i11511[56]
  i11510.hasOnTweenCreated = !!i11511[57]
  i11510.hasOnRewind = !!i11511[58]
  i11510.onStart = request.d('UnityEngine.Events.UnityEvent', i11511[59], i11510.onStart)
  i11510.onPlay = request.d('UnityEngine.Events.UnityEvent', i11511[60], i11510.onPlay)
  i11510.onUpdate = request.d('UnityEngine.Events.UnityEvent', i11511[61], i11510.onUpdate)
  i11510.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i11511[62], i11510.onStepComplete)
  i11510.onComplete = request.d('UnityEngine.Events.UnityEvent', i11511[63], i11510.onComplete)
  i11510.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i11511[64], i11510.onTweenCreated)
  i11510.onRewind = request.d('UnityEngine.Events.UnityEvent', i11511[65], i11510.onRewind)
  return i11510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i11512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i11513 = data
  i11512.usedByComposite = !!i11513[0]
  i11512.autoTiling = !!i11513[1]
  i11512.size = new pc.Vec2( i11513[2], i11513[3] )
  i11512.edgeRadius = i11513[4]
  i11512.enabled = !!i11513[5]
  i11512.isTrigger = !!i11513[6]
  i11512.usedByEffector = !!i11513[7]
  i11512.density = i11513[8]
  i11512.offset = new pc.Vec2( i11513[9], i11513[10] )
  request.r(i11513[11], i11513[12], 0, i11512, 'material')
  return i11512
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i11514 = root || request.c( 'BasicDrag' )
  var i11515 = data
  i11514.canDrag = !!i11515[0]
  i11514.dragByDelta = !!i11515[1]
  i11514.isDragging = !!i11515[2]
  i11514.moveWithPointer = !!i11515[3]
  i11514.canReturn = !!i11515[4]
  i11514.jumpOnReturn = !!i11515[5]
  i11514.returnTime = i11515[6]
  i11514.Tool_Offset = new pc.Vec3( i11515[7], i11515[8], i11515[9] )
  i11514.canScaleIncrease = !!i11515[10]
  i11514.Self_ScaleNew = new pc.Vec3( i11515[11], i11515[12], i11515[13] )
  i11514.canRotateOnPick = !!i11515[14]
  i11514.startRot = new pc.Vec3( i11515[15], i11515[16], i11515[17] )
  i11514.newRot = new pc.Vec3( i11515[18], i11515[19], i11515[20] )
  var i11517 = i11515[21]
  var i11516 = []
  for(var i = 0; i < i11517.length; i += 2) {
  request.r(i11517[i + 0], i11517[i + 1], 2, i11516, '')
  }
  i11514.childSprite = i11516
  request.r(i11515[22], i11515[23], 0, i11514, 'ToolSelectClip')
  request.r(i11515[24], i11515[25], 0, i11514, 'ToolLoopClip')
  request.r(i11515[26], i11515[27], 0, i11514, 'thisParticles')
  i11514.onDragparticle = !!i11515[28]
  request.r(i11515[29], i11515[30], 0, i11514, 'dragParticles')
  request.r(i11515[31], i11515[32], 0, i11514, 'anim')
  i11514.startPos = new pc.Vec3( i11515[33], i11515[34], i11515[35] )
  i11514.startScale = new pc.Vec3( i11515[36], i11515[37], i11515[38] )
  i11514.Vibration = !!i11515[39]
  i11514.isPlacedCannotMove = !!i11515[40]
  i11514.isObjectMovingWhileDragging = !!i11515[41]
  i11514.OnMouseDownEvent = request.d('System.Action', i11515[42], i11514.OnMouseDownEvent)
  i11514.OnMouseUpEvent = request.d('System.Action', i11515[43], i11514.OnMouseUpEvent)
  i11514.ProgStartEvent = request.d('System.Action', i11515[44], i11514.ProgStartEvent)
  i11514.ProgEndEvent = request.d('System.Action', i11515[45], i11514.ProgEndEvent)
  i11514.canCallMouseUpWhenGamePaused = !!i11515[46]
  i11514.ClampX_L = i11515[47]
  i11514.ClampX_H = i11515[48]
  i11514.ClampY_L = i11515[49]
  i11514.ClampY_H = i11515[50]
  i11514.startOrder = i11515[51]
  i11514.dontResetItIsInCollider = !!i11515[52]
  request.r(i11515[53], i11515[54], 0, i11514, 'thisCollider')
  request.r(i11515[55], i11515[56], 0, i11514, 'thisSR')
  i11514.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i11515[57], i11514.OnMouseDownEventIndependentFromCanDrag)
  return i11514
}

Deserializers["System.Action"] = function (request, data, root) {
  var i11520 = root || request.c( 'System.Action' )
  var i11521 = data
  return i11520
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i11522 = root || request.c( 'BD_Clamp' )
  var i11523 = data
  i11522.ClampX_L = i11523[0]
  i11522.ClampX_H = i11523[1]
  i11522.ClampY_L = i11523[2]
  i11522.ClampY_H = i11523[3]
  return i11522
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i11524 = root || request.c( 'OutlinePulse' )
  var i11525 = data
  i11524.smallThickness = i11525[0]
  i11524.largeThickness = i11525[1]
  i11524.transitionSpeed = i11525[2]
  i11524.animationSpeed = i11525[3]
  i11524.isThickOutline = !!i11525[4]
  i11524.animate = !!i11525[5]
  i11524.hideSpriteOnly = !!i11525[6]
  return i11524
}

Deserializers["BD_ItemPick"] = function (request, data, root) {
  var i11526 = root || request.c( 'BD_ItemPick' )
  var i11527 = data
  request.r(i11527[0], i11527[1], 0, i11526, 'Tool')
  request.r(i11527[2], i11527[3], 0, i11526, 'Outline')
  request.r(i11527[4], i11527[5], 0, i11526, 'itemRend')
  request.r(i11527[6], i11527[7], 0, i11526, 'pick_sp')
  i11526.OnTap = request.d('UnityEngine.Events.UnityEvent', i11527[8], i11526.OnTap)
  i11526.OnComplete = request.d('UnityEngine.Events.UnityEvent', i11527[9], i11526.OnComplete)
  request.r(i11527[10], i11527[11], 0, i11526, 'Clip')
  i11526.minDragDistance = i11527[12]
  i11526.isTaped = !!i11527[13]
  return i11526
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i11528 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i11529 = data
  request.r(i11529[0], i11529[1], 0, i11528, 'm_ObjectArgument')
  i11528.m_ObjectArgumentAssemblyTypeName = i11529[2]
  i11528.m_IntArgument = i11529[3]
  i11528.m_FloatArgument = i11529[4]
  i11528.m_StringArgument = i11529[5]
  i11528.m_BoolArgument = !!i11529[6]
  return i11528
}

Deserializers["BD_Sticky"] = function (request, data, root) {
  var i11530 = root || request.c( 'BD_Sticky' )
  var i11531 = data
  request.r(i11531[0], i11531[1], 0, i11530, 'anim')
  i11530.isVerticlePull = !!i11531[2]
  request.r(i11531[3], i11531[4], 0, i11530, 'pickSfx')
  request.r(i11531[5], i11531[6], 0, i11530, 'pulledClip')
  request.r(i11531[7], i11531[8], 0, i11530, 'pullSource')
  i11530.OnComplete = request.d('UnityEngine.Events.UnityEvent', i11531[9], i11530.OnComplete)
  i11530.changeLayerPick = !!i11531[10]
  request.r(i11531[11], i11531[12], 0, i11530, 'sp_rendr')
  i11530.def_layerNo = i11531[13]
  i11530.tar_LayerNo = i11531[14]
  i11530.direction = i11531[15]
  i11530.dragThreshold = i11531[16]
  i11530.pullDistanceToFree = i11531[17]
  i11530.returnSpeed = i11531[18]
  i11530.resistance = i11531[19]
  var i11533 = i11531[20]
  var i11532 = []
  for(var i = 0; i < i11533.length; i += 2) {
  request.r(i11533[i + 0], i11533[i + 1], 2, i11532, '')
  }
  i11530.StartBones = i11532
  var i11535 = i11531[21]
  var i11534 = []
  for(var i = 0; i < i11535.length; i += 2) {
  request.r(i11535[i + 0], i11535[i + 1], 2, i11534, '')
  }
  i11530.EndBones = i11534
  request.r(i11531[22], i11531[23], 0, i11530, 'BonePivot')
  return i11530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i11536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i11537 = data
  request.r(i11537[0], i11537[1], 0, i11536, 'clip')
  request.r(i11537[2], i11537[3], 0, i11536, 'outputAudioMixerGroup')
  i11536.playOnAwake = !!i11537[4]
  i11536.loop = !!i11537[5]
  i11536.time = i11537[6]
  i11536.volume = i11537[7]
  i11536.pitch = i11537[8]
  i11536.enabled = !!i11537[9]
  return i11536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i11538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i11539 = data
  i11538.radius = i11539[0]
  i11538.enabled = !!i11539[1]
  i11538.isTrigger = !!i11539[2]
  i11538.usedByEffector = !!i11539[3]
  i11538.density = i11539[4]
  i11538.offset = new pc.Vec2( i11539[5], i11539[6] )
  request.r(i11539[7], i11539[8], 0, i11538, 'material')
  return i11538
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i11540 = root || request.c( 'PlayParticlesOnCollision' )
  var i11541 = data
  request.r(i11541[0], i11541[1], 0, i11540, 'Target')
  request.r(i11541[2], i11541[3], 0, i11540, 'ParticlePrefab')
  i11540.destroyIt = !!i11541[4]
  i11540.stayAtPlace = !!i11541[5]
  i11540.disableOnCollision = !!i11541[6]
  i11540.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i11541[7], i11540.OnCollisionEvent)
  return i11540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i11542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i11543 = data
  i11542.frontSortingLayerID = i11543[0]
  i11542.frontSortingOrder = i11543[1]
  i11542.backSortingLayerID = i11543[2]
  i11542.backSortingOrder = i11543[3]
  i11542.alphaCutoff = i11543[4]
  request.r(i11543[5], i11543[6], 0, i11542, 'sprite')
  i11542.tileMode = i11543[7]
  i11542.isCustomRangeActive = !!i11543[8]
  i11542.spriteSortPoint = i11543[9]
  i11542.enabled = !!i11543[10]
  request.r(i11543[11], i11543[12], 0, i11542, 'sharedMaterial')
  var i11545 = i11543[13]
  var i11544 = []
  for(var i = 0; i < i11545.length; i += 2) {
  request.r(i11545[i + 0], i11545[i + 1], 2, i11544, '')
  }
  i11542.sharedMaterials = i11544
  i11542.receiveShadows = !!i11543[14]
  i11542.shadowCastingMode = i11543[15]
  i11542.sortingLayerID = i11543[16]
  i11542.sortingOrder = i11543[17]
  i11542.lightmapIndex = i11543[18]
  i11542.lightmapSceneIndex = i11543[19]
  i11542.lightmapScaleOffset = new pc.Vec4( i11543[20], i11543[21], i11543[22], i11543[23] )
  i11542.lightProbeUsage = i11543[24]
  i11542.reflectionProbeUsage = i11543[25]
  return i11542
}

Deserializers["PlayTweenOnHit"] = function (request, data, root) {
  var i11546 = root || request.c( 'PlayTweenOnHit' )
  var i11547 = data
  i11546.isContinueous = !!i11547[0]
  request.r(i11547[1], i11547[2], 0, i11546, 'tool')
  var i11549 = i11547[3]
  var i11548 = []
  for(var i = 0; i < i11549.length; i += 2) {
  request.r(i11549[i + 0], i11549[i + 1], 2, i11548, '')
  }
  i11546.animsToPlay = i11548
  request.r(i11547[4], i11547[5], 0, i11546, 'tipTarget')
  return i11546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i11552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i11553 = data
  i11552.usedByComposite = !!i11553[0]
  i11552.autoTiling = !!i11553[1]
  var i11555 = i11553[2]
  var i11554 = []
  for(var i = 0; i < i11555.length; i += 1) {
  var i11557 = i11555[i + 0]
  var i11556 = []
  for(var i = 0; i < i11557.length; i += 2) {
    i11556.push( new pc.Vec2( i11557[i + 0], i11557[i + 1] ) );
  }
    i11554.push( i11556 );
  }
  i11552.points = i11554
  i11552.enabled = !!i11553[3]
  i11552.isTrigger = !!i11553[4]
  i11552.usedByEffector = !!i11553[5]
  i11552.density = i11553[6]
  i11552.offset = new pc.Vec2( i11553[7], i11553[8] )
  request.r(i11553[9], i11553[10], 0, i11552, 'material')
  return i11552
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i11564 = root || request.c( 'PlaySfxOnCollision' )
  var i11565 = data
  request.r(i11565[0], i11565[1], 0, i11564, 'Tip')
  i11564.Mode = i11565[2]
  request.r(i11565[3], i11565[4], 0, i11564, 'DragInput')
  request.r(i11565[5], i11565[6], 0, i11564, 'Source')
  i11564.startVol = i11565[7]
  i11564.targetVol = i11565[8]
  i11564.duration = i11565[9]
  request.r(i11565[10], i11565[11], 0, i11564, 'Particles')
  i11564.isDone = !!i11565[12]
  i11564.isInArea = !!i11565[13]
  i11564.isPlaying = !!i11565[14]
  return i11564
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i11566 = root || request.c( 'InteractableBones' )
  var i11567 = data
  request.r(i11567[0], i11567[1], 0, i11566, 'Tip')
  i11566.MoveAmount = i11567[2]
  i11566.MoveSpeed = i11567[3]
  i11566.ShakeSpeed = i11567[4]
  i11566.MovementThreshold = i11567[5]
  i11566.MoveX = !!i11567[6]
  i11566.MoveY = !!i11567[7]
  return i11566
}

Deserializers["WaypointFollower"] = function (request, data, root) {
  var i11568 = root || request.c( 'WaypointFollower' )
  var i11569 = data
  var i11571 = i11569[0]
  var i11570 = []
  for(var i = 0; i < i11571.length; i += 2) {
  request.r(i11571[i + 0], i11571[i + 1], 2, i11570, '')
  }
  i11568.waypoints = i11570
  i11568.speed = i11569[1]
  i11568.rotationSpeed = i11569[2]
  i11568.loop = !!i11569[3]
  i11568.reverse = !!i11569[4]
  i11568.canMove = !!i11569[5]
  request.r(i11569[6], i11569[7], 0, i11568, 'movingSfx')
  return i11568
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i11572 = root || request.c( 'BD_Action' )
  var i11573 = data
  i11572.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i11573[0], i11572.OnMouseDownEvent)
  i11572.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i11573[1], i11572.OnMouseUpEvent)
  i11572.setToolLayer = !!i11573[2]
  request.r(i11573[3], i11573[4], 0, i11572, 'tool_SP')
  return i11572
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i11574 = root || request.c( 'BD_CameraFollow' )
  var i11575 = data
  request.r(i11575[0], i11575[1], 0, i11574, 'Tool')
  request.r(i11575[2], i11575[3], 0, i11574, 'Pivot')
  i11574.FOV = i11575[4]
  i11574.Y_L = i11575[5]
  i11574.Y_H = i11575[6]
  i11574.X_L = i11575[7]
  i11574.X_R = i11575[8]
  i11574.startDelay = i11575[9]
  i11574.duration = i11575[10]
  return i11574
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i11576 = root || request.c( 'BD_ToolRotate' )
  var i11577 = data
  i11576.startDelay = i11577[0]
  request.r(i11577[1], i11577[2], 0, i11576, 'Tool')
  request.r(i11577[3], i11577[4], 0, i11576, 'Clamp')
  request.r(i11577[5], i11577[6], 0, i11576, 'Pivot')
  i11576.MinAngle = new pc.Vec3( i11577[7], i11577[8], i11577[9] )
  i11576.MaxAngle = new pc.Vec3( i11577[10], i11577[11], i11577[12] )
  i11576.rotationSpeed = i11577[13]
  return i11576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i11578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i11579 = data
  i11578.bodyType = i11579[0]
  request.r(i11579[1], i11579[2], 0, i11578, 'material')
  i11578.simulated = !!i11579[3]
  i11578.useAutoMass = !!i11579[4]
  i11578.mass = i11579[5]
  i11578.drag = i11579[6]
  i11578.angularDrag = i11579[7]
  i11578.gravityScale = i11579[8]
  i11578.collisionDetectionMode = i11579[9]
  i11578.sleepMode = i11579[10]
  i11578.constraints = i11579[11]
  return i11578
}

Deserializers["BugKill_Tip"] = function (request, data, root) {
  var i11580 = root || request.c( 'BugKill_Tip' )
  var i11581 = data
  var i11583 = i11581[0]
  var i11582 = []
  for(var i = 0; i < i11583.length; i += 2) {
  request.r(i11583[i + 0], i11583[i + 1], 2, i11582, '')
  }
  i11580.targets = i11582
  i11580.waypointFollower = !!i11581[1]
  i11580.fallSpeed = i11581[2]
  i11580.totalTargets = i11581[3]
  i11580.killCount = i11581[4]
  request.r(i11581[5], i11581[6], 0, i11580, 'bugKillSfx')
  i11580.OnComplete = request.d('UnityEngine.Events.UnityEvent', i11581[7], i11580.OnComplete)
  return i11580
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i11586 = root || request.c( 'BD_Progress' )
  var i11587 = data
  var i11589 = i11587[0]
  var i11588 = []
  for(var i = 0; i < i11589.length; i += 1) {
    i11588.push( request.d('ScratchData', i11589[i + 0]) );
  }
  i11586.AllScratches = i11588
  i11586.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i11587[1], i11586.OnScratchComplete)
  i11586.isProgDone = !!i11587[2]
  i11586.canCallComplete = !!i11587[3]
  i11586.CollectiveAppear = !!i11587[4]
  i11586.tipControl = !!i11587[5]
  i11586.progressControl = !!i11587[6]
  request.r(i11587[7], i11587[8], 0, i11586, 'thisDrag')
  i11586.CompleteEvent = request.d('System.Action', i11587[9], i11586.CompleteEvent)
  i11586.SubCompleteEvent = request.d('System.Action', i11587[10], i11586.SubCompleteEvent)
  return i11586
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i11592 = root || request.c( 'ScratchData' )
  var i11593 = data
  request.r(i11593[0], i11593[1], 0, i11592, 'ScratchManager')
  i11592.scratchLimit = i11593[2]
  i11592.isComplete = !!i11593[3]
  return i11592
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i11594 = root || request.c( 'BD_ProgressHelper' )
  var i11595 = data
  request.r(i11595[0], i11595[1], 0, i11594, 'BD_Progress')
  request.r(i11595[2], i11595[3], 0, i11594, 'fadeSprite')
  i11594.fadeIn = !!i11595[4]
  return i11594
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i11596 = root || request.c( 'ActionOnTap' )
  var i11597 = data
  i11596.OnTap = request.d('UnityEngine.Events.UnityEvent', i11597[0], i11596.OnTap)
  return i11596
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i11598 = root || request.c( 'BD_SpriteChange' )
  var i11599 = data
  request.r(i11599[0], i11599[1], 0, i11598, 'BD')
  request.r(i11599[2], i11599[3], 0, i11598, 'SR')
  request.r(i11599[4], i11599[5], 0, i11598, 'Default')
  request.r(i11599[6], i11599[7], 0, i11598, 'Picked')
  i11598.resetOnRelease = !!i11599[8]
  return i11598
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i11600 = root || request.c( 'BD_AnimatorDrag' )
  var i11601 = data
  request.r(i11601[0], i11601[1], 0, i11600, 'BD')
  request.r(i11601[2], i11601[3], 0, i11600, 'anim')
  request.r(i11601[4], i11601[5], 0, i11600, 'Source')
  i11600.Vibration = !!i11601[6]
  i11600.isCompletable = !!i11601[7]
  i11600.completionThreshold = i11601[8]
  i11600.OnComplete = request.d('UnityEngine.Events.UnityEvent', i11601[9], i11600.OnComplete)
  return i11600
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i11602 = root || request.c( 'PlaceItem' )
  var i11603 = data
  request.r(i11603[0], i11603[1], 0, i11602, 'thisDrag')
  request.r(i11603[2], i11603[3], 0, i11602, 'Target')
  request.r(i11603[4], i11603[5], 0, i11602, 'Clip')
  i11602.jumpOnPlace = !!i11603[6]
  i11602.jumpHeight = i11603[7]
  i11602.jumpDuration = i11603[8]
  i11602.settleDuration = i11603[9]
  i11602.isPlaced = !!i11603[10]
  i11602.isInsideCollider = !!i11603[11]
  i11602.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i11603[12], i11602.OnPlaced)
  return i11602
}

Deserializers["BD_Audio"] = function (request, data, root) {
  var i11604 = root || request.c( 'BD_Audio' )
  var i11605 = data
  request.r(i11605[0], i11605[1], 0, i11604, 'BD')
  request.r(i11605[2], i11605[3], 0, i11604, 'Source')
  i11604.shouldRestart = !!i11605[4]
  i11604.startVol = i11605[5]
  i11604.targetVol = i11605[6]
  i11604.duration = i11605[7]
  i11604.startDelay = i11605[8]
  return i11604
}

Deserializers["Level1_HairAnim"] = function (request, data, root) {
  var i11606 = root || request.c( 'Level1_HairAnim' )
  var i11607 = data
  i11606.holdDuration = i11607[0]
  request.r(i11607[1], i11607[2], 0, i11606, 'targetSprite')
  i11606.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i11607[3], i11606.onHoldComplete)
  i11606.isHolding = !!i11607[4]
  request.r(i11607[5], i11607[6], 0, i11606, 'targetObj')
  request.r(i11607[7], i11607[8], 0, i11606, 'thisTool')
  request.r(i11607[9], i11607[10], 0, i11606, 'thisToolTip')
  var i11609 = i11607[11]
  var i11608 = []
  for(var i = 0; i < i11609.length; i += 2) {
  request.r(i11609[i + 0], i11609[i + 1], 2, i11608, '')
  }
  i11606.hairsAnim = i11608
  var i11611 = i11607[12]
  var i11610 = []
  for(var i = 0; i < i11611.length; i += 2) {
  request.r(i11611[i + 0], i11611[i + 1], 2, i11610, '')
  }
  i11606.hairsRend = i11610
  i11606.hairsRendFadeThreshold = i11607[13]
  request.r(i11607[14], i11607[15], 0, i11606, 'wetHairRend')
  request.r(i11607[16], i11607[17], 0, i11606, 'dryHairRend')
  request.r(i11607[18], i11607[19], 0, i11606, 'dryHairRendBack')
  i11606.hairAnimStopDuration = i11607[20]
  i11606.hairAnimResumeDuration = i11607[21]
  return i11606
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i11612 = root || request.c( 'SpriteButton' )
  var i11613 = data
  i11612.onClick = request.d('UnityEngine.Events.UnityEvent', i11613[0], i11612.onClick)
  request.r(i11613[1], i11613[2], 0, i11612, 'spriteRenderer')
  request.r(i11613[3], i11613[4], 0, i11612, 'normalSprite')
  request.r(i11613[5], i11613[6], 0, i11612, 'hoverSprite')
  request.r(i11613[7], i11613[8], 0, i11612, 'pressedSprite')
  i11612.hoverScale = i11613[9]
  i11612.pressScale = i11613[10]
  i11612.animationDuration = i11613[11]
  return i11612
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i11614 = root || request.c( 'DestroyObj' )
  var i11615 = data
  i11614.destroyDelay = i11615[0]
  return i11614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i11616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i11617 = data
  i11616.name = i11617[0]
  i11616.atlasId = i11617[1]
  i11616.mipmapCount = i11617[2]
  i11616.hdr = !!i11617[3]
  i11616.size = i11617[4]
  i11616.anisoLevel = i11617[5]
  i11616.filterMode = i11617[6]
  var i11619 = i11617[7]
  var i11618 = []
  for(var i = 0; i < i11619.length; i += 4) {
    i11618.push( UnityEngine.Rect.MinMaxRect(i11619[i + 0], i11619[i + 1], i11619[i + 2], i11619[i + 3]) );
  }
  i11616.rects = i11618
  i11616.wrapU = i11617[8]
  i11616.wrapV = i11617[9]
  return i11616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i11622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i11623 = data
  i11622.name = i11623[0]
  i11622.index = i11623[1]
  i11622.startup = !!i11623[2]
  return i11622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i11624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i11625 = data
  i11624.aspect = i11625[0]
  i11624.orthographic = !!i11625[1]
  i11624.orthographicSize = i11625[2]
  i11624.backgroundColor = new pc.Color(i11625[3], i11625[4], i11625[5], i11625[6])
  i11624.nearClipPlane = i11625[7]
  i11624.farClipPlane = i11625[8]
  i11624.fieldOfView = i11625[9]
  i11624.depth = i11625[10]
  i11624.clearFlags = i11625[11]
  i11624.cullingMask = i11625[12]
  i11624.rect = i11625[13]
  request.r(i11625[14], i11625[15], 0, i11624, 'targetTexture')
  i11624.usePhysicalProperties = !!i11625[16]
  i11624.focalLength = i11625[17]
  i11624.sensorSize = new pc.Vec2( i11625[18], i11625[19] )
  i11624.lensShift = new pc.Vec2( i11625[20], i11625[21] )
  i11624.gateFit = i11625[22]
  i11624.commandBufferCount = i11625[23]
  i11624.cameraType = i11625[24]
  i11624.enabled = !!i11625[25]
  return i11624
}

Deserializers["CameraController"] = function (request, data, root) {
  var i11626 = root || request.c( 'CameraController' )
  var i11627 = data
  request.r(i11627[0], i11627[1], 0, i11626, 'cam')
  i11626.defaultPosition = new pc.Vec3( i11627[2], i11627[3], i11627[4] )
  i11626.defaultSize = i11627[5]
  i11626.defaultFOV = i11627[6]
  i11626.defaultDuration = i11627[7]
  i11626.defaultEase = i11627[8]
  return i11626
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i11628 = root || request.c( 'MusicSource' )
  var i11629 = data
  request.r(i11629[0], i11629[1], 0, i11628, 'source')
  return i11628
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i11630 = root || request.c( 'UI_Manager' )
  var i11631 = data
  i11630.levelCompleted = !!i11631[0]
  i11630.isPauseActive = !!i11631[1]
  i11630.loadIndex = i11631[2]
  request.r(i11631[3], i11631[4], 0, i11630, 'removeAdsButton')
  request.r(i11631[5], i11631[6], 0, i11630, 'pauseButton')
  request.r(i11631[7], i11631[8], 0, i11630, 'Fade_Img')
  request.r(i11631[9], i11631[10], 0, i11630, 'TopBarAnim')
  request.r(i11631[11], i11631[12], 0, i11630, 'MainPanel')
  request.r(i11631[13], i11631[14], 0, i11630, 'PausePanel')
  request.r(i11631[15], i11631[16], 0, i11630, 'PausePopUp')
  request.r(i11631[17], i11631[18], 0, i11630, 'PauseCanvasGroup')
  request.r(i11631[19], i11631[20], 0, i11630, 'RateUsPanel')
  request.r(i11631[21], i11631[22], 0, i11630, 'RateUsPopUp')
  request.r(i11631[23], i11631[24], 0, i11630, 'RemoveAdsPanel')
  request.r(i11631[25], i11631[26], 0, i11630, 'RemoveAdsPopUp')
  request.r(i11631[27], i11631[28], 0, i11630, 'RemoveAdsCanvasGroup')
  var i11633 = i11631[29]
  var i11632 = []
  for(var i = 0; i < i11633.length; i += 2) {
  request.r(i11633[i + 0], i11633[i + 1], 2, i11632, '')
  }
  i11630.RemoveAdsAnims = i11632
  request.r(i11631[30], i11631[31], 0, i11630, 'CompletePanel')
  request.r(i11631[32], i11631[33], 0, i11630, 'LevelIcon')
  request.r(i11631[34], i11631[35], 0, i11630, 'CompleteParticles')
  request.r(i11631[36], i11631[37], 0, i11630, 'progressBar')
  request.r(i11631[38], i11631[39], 0, i11630, 'progressText')
  request.r(i11631[40], i11631[41], 0, i11630, 'toolIcon1')
  request.r(i11631[42], i11631[43], 0, i11630, 'toolIcon2')
  request.r(i11631[44], i11631[45], 0, i11630, 'toolIcon3')
  request.r(i11631[46], i11631[47], 0, i11630, 'target1')
  request.r(i11631[48], i11631[49], 0, i11630, 'target2')
  i11630.toolMoveDuration = i11631[50]
  i11630.currentIndex = i11631[51]
  var i11635 = i11631[52]
  var i11634 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i11635.length; i += 2) {
  request.r(i11635[i + 0], i11635[i + 1], 1, i11634, '')
  }
  i11630.allTools = i11634
  request.r(i11631[53], i11631[54], 0, i11630, 'clockProgress')
  request.r(i11631[55], i11631[56], 0, i11630, 'clockProgressFill')
  request.r(i11631[57], i11631[58], 0, i11630, 'clockAudio')
  i11630.moveDistance = i11631[59]
  i11630.animationDuration = i11631[60]
  i11630.greyBgChildName = i11631[61]
  i11630.pushOffset = i11631[62]
  return i11630
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i11636 = root || request.c( 'GameManagerPlayable' )
  var i11637 = data
  request.r(i11637[0], i11637[1], 0, i11636, 'DefaultMat')
  request.r(i11637[2], i11637[3], 0, i11636, 'BG_Music')
  request.r(i11637[4], i11637[5], 0, i11636, 'restoreEffectShader')
  request.r(i11637[6], i11637[7], 0, i11636, 'stickerEffectShader')
  i11636.isComplete = !!i11637[8]
  i11636.isPaused = !!i11637[9]
  request.r(i11637[10], i11637[11], 0, i11636, 'currentLevel')
  return i11636
}

Deserializers["AudioController"] = function (request, data, root) {
  var i11638 = root || request.c( 'AudioController' )
  var i11639 = data
  request.r(i11639[0], i11639[1], 0, i11638, 'MainMixer')
  request.r(i11639[2], i11639[3], 0, i11638, 'UiClick')
  request.r(i11639[4], i11639[5], 0, i11638, 'UiClickSource')
  var i11641 = i11639[6]
  var i11640 = []
  for(var i = 0; i < i11641.length; i += 2) {
  request.r(i11641[i + 0], i11641[i + 1], 2, i11640, '')
  }
  i11638.SfxSources = i11640
  var i11643 = i11639[7]
  var i11642 = []
  for(var i = 0; i < i11643.length; i += 2) {
  request.r(i11643[i + 0], i11643[i + 1], 2, i11642, '')
  }
  i11638.AllClips = i11642
  return i11638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i11646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i11647 = data
  i11646.pivot = new pc.Vec2( i11647[0], i11647[1] )
  i11646.anchorMin = new pc.Vec2( i11647[2], i11647[3] )
  i11646.anchorMax = new pc.Vec2( i11647[4], i11647[5] )
  i11646.sizeDelta = new pc.Vec2( i11647[6], i11647[7] )
  i11646.anchoredPosition3D = new pc.Vec3( i11647[8], i11647[9], i11647[10] )
  i11646.rotation = new pc.Quat(i11647[11], i11647[12], i11647[13], i11647[14])
  i11646.scale = new pc.Vec3( i11647[15], i11647[16], i11647[17] )
  return i11646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i11648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i11649 = data
  i11648.planeDistance = i11649[0]
  i11648.referencePixelsPerUnit = i11649[1]
  i11648.isFallbackOverlay = !!i11649[2]
  i11648.renderMode = i11649[3]
  i11648.renderOrder = i11649[4]
  i11648.sortingLayerName = i11649[5]
  i11648.sortingOrder = i11649[6]
  i11648.scaleFactor = i11649[7]
  request.r(i11649[8], i11649[9], 0, i11648, 'worldCamera')
  i11648.overrideSorting = !!i11649[10]
  i11648.pixelPerfect = !!i11649[11]
  i11648.targetDisplay = i11649[12]
  i11648.overridePixelPerfect = !!i11649[13]
  i11648.enabled = !!i11649[14]
  return i11648
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i11650 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i11651 = data
  i11650.m_UiScaleMode = i11651[0]
  i11650.m_ReferencePixelsPerUnit = i11651[1]
  i11650.m_ScaleFactor = i11651[2]
  i11650.m_ReferenceResolution = new pc.Vec2( i11651[3], i11651[4] )
  i11650.m_ScreenMatchMode = i11651[5]
  i11650.m_MatchWidthOrHeight = i11651[6]
  i11650.m_PhysicalUnit = i11651[7]
  i11650.m_FallbackScreenDPI = i11651[8]
  i11650.m_DefaultSpriteDPI = i11651[9]
  i11650.m_DynamicPixelsPerUnit = i11651[10]
  i11650.m_PresetInfoIsWorld = !!i11651[11]
  return i11650
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i11652 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i11653 = data
  i11652.m_IgnoreReversedGraphics = !!i11653[0]
  i11652.m_BlockingObjects = i11653[1]
  i11652.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i11653[2] )
  return i11652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i11654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i11655 = data
  i11654.cullTransparentMesh = !!i11655[0]
  return i11654
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i11656 = root || request.c( 'UnityEngine.UI.Image' )
  var i11657 = data
  request.r(i11657[0], i11657[1], 0, i11656, 'm_Sprite')
  i11656.m_Type = i11657[2]
  i11656.m_PreserveAspect = !!i11657[3]
  i11656.m_FillCenter = !!i11657[4]
  i11656.m_FillMethod = i11657[5]
  i11656.m_FillAmount = i11657[6]
  i11656.m_FillClockwise = !!i11657[7]
  i11656.m_FillOrigin = i11657[8]
  i11656.m_UseSpriteMesh = !!i11657[9]
  i11656.m_PixelsPerUnitMultiplier = i11657[10]
  request.r(i11657[11], i11657[12], 0, i11656, 'm_Material')
  i11656.m_Maskable = !!i11657[13]
  i11656.m_Color = new pc.Color(i11657[14], i11657[15], i11657[16], i11657[17])
  i11656.m_RaycastTarget = !!i11657[18]
  i11656.m_RaycastPadding = new pc.Vec4( i11657[19], i11657[20], i11657[21], i11657[22] )
  return i11656
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i11658 = root || request.c( 'UnityEngine.UI.Text' )
  var i11659 = data
  i11658.m_FontData = request.d('UnityEngine.UI.FontData', i11659[0], i11658.m_FontData)
  i11658.m_Text = i11659[1]
  request.r(i11659[2], i11659[3], 0, i11658, 'm_Material')
  i11658.m_Maskable = !!i11659[4]
  i11658.m_Color = new pc.Color(i11659[5], i11659[6], i11659[7], i11659[8])
  i11658.m_RaycastTarget = !!i11659[9]
  i11658.m_RaycastPadding = new pc.Vec4( i11659[10], i11659[11], i11659[12], i11659[13] )
  return i11658
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i11660 = root || request.c( 'UnityEngine.UI.FontData' )
  var i11661 = data
  request.r(i11661[0], i11661[1], 0, i11660, 'm_Font')
  i11660.m_FontSize = i11661[2]
  i11660.m_FontStyle = i11661[3]
  i11660.m_BestFit = !!i11661[4]
  i11660.m_MinSize = i11661[5]
  i11660.m_MaxSize = i11661[6]
  i11660.m_Alignment = i11661[7]
  i11660.m_AlignByGeometry = !!i11661[8]
  i11660.m_RichText = !!i11661[9]
  i11660.m_HorizontalOverflow = i11661[10]
  i11660.m_VerticalOverflow = i11661[11]
  i11660.m_LineSpacing = i11661[12]
  return i11660
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i11662 = root || request.c( 'UnityEngine.UI.Button' )
  var i11663 = data
  i11662.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i11663[0], i11662.m_OnClick)
  i11662.m_Navigation = request.d('UnityEngine.UI.Navigation', i11663[1], i11662.m_Navigation)
  i11662.m_Transition = i11663[2]
  i11662.m_Colors = request.d('UnityEngine.UI.ColorBlock', i11663[3], i11662.m_Colors)
  i11662.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i11663[4], i11662.m_SpriteState)
  i11662.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i11663[5], i11662.m_AnimationTriggers)
  i11662.m_Interactable = !!i11663[6]
  request.r(i11663[7], i11663[8], 0, i11662, 'm_TargetGraphic')
  return i11662
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i11664 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i11665 = data
  i11664.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i11665[0], i11664.m_PersistentCalls)
  return i11664
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i11666 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i11667 = data
  i11666.m_Mode = i11667[0]
  i11666.m_WrapAround = !!i11667[1]
  request.r(i11667[2], i11667[3], 0, i11666, 'm_SelectOnUp')
  request.r(i11667[4], i11667[5], 0, i11666, 'm_SelectOnDown')
  request.r(i11667[6], i11667[7], 0, i11666, 'm_SelectOnLeft')
  request.r(i11667[8], i11667[9], 0, i11666, 'm_SelectOnRight')
  return i11666
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i11668 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i11669 = data
  i11668.m_NormalColor = new pc.Color(i11669[0], i11669[1], i11669[2], i11669[3])
  i11668.m_HighlightedColor = new pc.Color(i11669[4], i11669[5], i11669[6], i11669[7])
  i11668.m_PressedColor = new pc.Color(i11669[8], i11669[9], i11669[10], i11669[11])
  i11668.m_SelectedColor = new pc.Color(i11669[12], i11669[13], i11669[14], i11669[15])
  i11668.m_DisabledColor = new pc.Color(i11669[16], i11669[17], i11669[18], i11669[19])
  i11668.m_ColorMultiplier = i11669[20]
  i11668.m_FadeDuration = i11669[21]
  return i11668
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i11670 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i11671 = data
  request.r(i11671[0], i11671[1], 0, i11670, 'm_HighlightedSprite')
  request.r(i11671[2], i11671[3], 0, i11670, 'm_PressedSprite')
  request.r(i11671[4], i11671[5], 0, i11670, 'm_SelectedSprite')
  request.r(i11671[6], i11671[7], 0, i11670, 'm_DisabledSprite')
  return i11670
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i11672 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i11673 = data
  i11672.m_NormalTrigger = i11673[0]
  i11672.m_HighlightedTrigger = i11673[1]
  i11672.m_PressedTrigger = i11673[2]
  i11672.m_SelectedTrigger = i11673[3]
  i11672.m_DisabledTrigger = i11673[4]
  return i11672
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i11674 = root || request.c( 'PlayableHudRuntime' )
  var i11675 = data
  return i11674
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i11676 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i11677 = data
  request.r(i11677[0], i11677[1], 0, i11676, 'm_FirstSelected')
  i11676.m_sendNavigationEvents = !!i11677[2]
  i11676.m_DragThreshold = i11677[3]
  return i11676
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i11678 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i11679 = data
  i11678.m_HorizontalAxis = i11679[0]
  i11678.m_VerticalAxis = i11679[1]
  i11678.m_SubmitButton = i11679[2]
  i11678.m_CancelButton = i11679[3]
  i11678.m_InputActionsPerSecond = i11679[4]
  i11678.m_RepeatDelay = i11679[5]
  i11678.m_ForceModuleActive = !!i11679[6]
  i11678.m_SendPointerHoverToParent = !!i11679[7]
  return i11678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i11680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i11681 = data
  i11680.ambientIntensity = i11681[0]
  i11680.reflectionIntensity = i11681[1]
  i11680.ambientMode = i11681[2]
  i11680.ambientLight = new pc.Color(i11681[3], i11681[4], i11681[5], i11681[6])
  i11680.ambientSkyColor = new pc.Color(i11681[7], i11681[8], i11681[9], i11681[10])
  i11680.ambientGroundColor = new pc.Color(i11681[11], i11681[12], i11681[13], i11681[14])
  i11680.ambientEquatorColor = new pc.Color(i11681[15], i11681[16], i11681[17], i11681[18])
  i11680.fogColor = new pc.Color(i11681[19], i11681[20], i11681[21], i11681[22])
  i11680.fogEndDistance = i11681[23]
  i11680.fogStartDistance = i11681[24]
  i11680.fogDensity = i11681[25]
  i11680.fog = !!i11681[26]
  request.r(i11681[27], i11681[28], 0, i11680, 'skybox')
  i11680.fogMode = i11681[29]
  var i11683 = i11681[30]
  var i11682 = []
  for(var i = 0; i < i11683.length; i += 1) {
    i11682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i11683[i + 0]) );
  }
  i11680.lightmaps = i11682
  i11680.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i11681[31], i11680.lightProbes)
  i11680.lightmapsMode = i11681[32]
  i11680.mixedBakeMode = i11681[33]
  i11680.environmentLightingMode = i11681[34]
  i11680.ambientProbe = new pc.SphericalHarmonicsL2(i11681[35])
  request.r(i11681[36], i11681[37], 0, i11680, 'customReflection')
  request.r(i11681[38], i11681[39], 0, i11680, 'defaultReflection')
  i11680.defaultReflectionMode = i11681[40]
  i11680.defaultReflectionResolution = i11681[41]
  i11680.sunLightObjectId = i11681[42]
  i11680.pixelLightCount = i11681[43]
  i11680.defaultReflectionHDR = !!i11681[44]
  i11680.hasLightDataAsset = !!i11681[45]
  i11680.hasManualGenerate = !!i11681[46]
  return i11680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i11686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i11687 = data
  request.r(i11687[0], i11687[1], 0, i11686, 'lightmapColor')
  request.r(i11687[2], i11687[3], 0, i11686, 'lightmapDirection')
  request.r(i11687[4], i11687[5], 0, i11686, 'shadowMask')
  return i11686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i11688 = root || new UnityEngine.LightProbes()
  var i11689 = data
  return i11688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i11694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i11695 = data
  var i11697 = i11695[0]
  var i11696 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i11697.length; i += 1) {
    i11696.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i11697[i + 0]));
  }
  i11694.ShaderCompilationErrors = i11696
  i11694.name = i11695[1]
  i11694.guid = i11695[2]
  var i11699 = i11695[3]
  var i11698 = []
  for(var i = 0; i < i11699.length; i += 1) {
    i11698.push( i11699[i + 0] );
  }
  i11694.shaderDefinedKeywords = i11698
  var i11701 = i11695[4]
  var i11700 = []
  for(var i = 0; i < i11701.length; i += 1) {
    i11700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i11701[i + 0]) );
  }
  i11694.passes = i11700
  var i11703 = i11695[5]
  var i11702 = []
  for(var i = 0; i < i11703.length; i += 1) {
    i11702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i11703[i + 0]) );
  }
  i11694.usePasses = i11702
  var i11705 = i11695[6]
  var i11704 = []
  for(var i = 0; i < i11705.length; i += 1) {
    i11704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i11705[i + 0]) );
  }
  i11694.defaultParameterValues = i11704
  request.r(i11695[7], i11695[8], 0, i11694, 'unityFallbackShader')
  i11694.readDepth = !!i11695[9]
  i11694.hasDepthOnlyPass = !!i11695[10]
  i11694.isCreatedByShaderGraph = !!i11695[11]
  i11694.disableBatching = !!i11695[12]
  i11694.compiled = !!i11695[13]
  return i11694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i11708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i11709 = data
  i11708.shaderName = i11709[0]
  i11708.errorMessage = i11709[1]
  return i11708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i11714 = root || new pc.UnityShaderPass()
  var i11715 = data
  i11714.id = i11715[0]
  i11714.subShaderIndex = i11715[1]
  i11714.name = i11715[2]
  i11714.passType = i11715[3]
  i11714.grabPassTextureName = i11715[4]
  i11714.usePass = !!i11715[5]
  i11714.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11715[6], i11714.zTest)
  i11714.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11715[7], i11714.zWrite)
  i11714.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11715[8], i11714.culling)
  i11714.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i11715[9], i11714.blending)
  i11714.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i11715[10], i11714.alphaBlending)
  i11714.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11715[11], i11714.colorWriteMask)
  i11714.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11715[12], i11714.offsetUnits)
  i11714.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11715[13], i11714.offsetFactor)
  i11714.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11715[14], i11714.stencilRef)
  i11714.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11715[15], i11714.stencilReadMask)
  i11714.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11715[16], i11714.stencilWriteMask)
  i11714.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i11715[17], i11714.stencilOp)
  i11714.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i11715[18], i11714.stencilOpFront)
  i11714.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i11715[19], i11714.stencilOpBack)
  var i11717 = i11715[20]
  var i11716 = []
  for(var i = 0; i < i11717.length; i += 1) {
    i11716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i11717[i + 0]) );
  }
  i11714.tags = i11716
  var i11719 = i11715[21]
  var i11718 = []
  for(var i = 0; i < i11719.length; i += 1) {
    i11718.push( i11719[i + 0] );
  }
  i11714.passDefinedKeywords = i11718
  var i11721 = i11715[22]
  var i11720 = []
  for(var i = 0; i < i11721.length; i += 1) {
    i11720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i11721[i + 0]) );
  }
  i11714.passDefinedKeywordGroups = i11720
  var i11723 = i11715[23]
  var i11722 = []
  for(var i = 0; i < i11723.length; i += 1) {
    i11722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i11723[i + 0]) );
  }
  i11714.variants = i11722
  var i11725 = i11715[24]
  var i11724 = []
  for(var i = 0; i < i11725.length; i += 1) {
    i11724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i11725[i + 0]) );
  }
  i11714.excludedVariants = i11724
  i11714.hasDepthReader = !!i11715[25]
  return i11714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i11726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i11727 = data
  i11726.val = i11727[0]
  i11726.name = i11727[1]
  return i11726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i11728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i11729 = data
  i11728.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11729[0], i11728.src)
  i11728.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11729[1], i11728.dst)
  i11728.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11729[2], i11728.op)
  return i11728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i11730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i11731 = data
  i11730.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11731[0], i11730.pass)
  i11730.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11731[1], i11730.fail)
  i11730.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11731[2], i11730.zFail)
  i11730.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11731[3], i11730.comp)
  return i11730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i11734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i11735 = data
  i11734.name = i11735[0]
  i11734.value = i11735[1]
  return i11734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i11738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i11739 = data
  var i11741 = i11739[0]
  var i11740 = []
  for(var i = 0; i < i11741.length; i += 1) {
    i11740.push( i11741[i + 0] );
  }
  i11738.keywords = i11740
  i11738.hasDiscard = !!i11739[1]
  return i11738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i11744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i11745 = data
  i11744.passId = i11745[0]
  i11744.subShaderIndex = i11745[1]
  var i11747 = i11745[2]
  var i11746 = []
  for(var i = 0; i < i11747.length; i += 1) {
    i11746.push( i11747[i + 0] );
  }
  i11744.keywords = i11746
  i11744.vertexProgram = i11745[3]
  i11744.fragmentProgram = i11745[4]
  i11744.exportedForWebGl2 = !!i11745[5]
  i11744.readDepth = !!i11745[6]
  return i11744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i11750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i11751 = data
  request.r(i11751[0], i11751[1], 0, i11750, 'shader')
  i11750.pass = i11751[2]
  return i11750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i11754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i11755 = data
  i11754.name = i11755[0]
  i11754.type = i11755[1]
  i11754.value = new pc.Vec4( i11755[2], i11755[3], i11755[4], i11755[5] )
  i11754.textureValue = i11755[6]
  i11754.shaderPropertyFlag = i11755[7]
  return i11754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i11756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i11757 = data
  i11756.name = i11757[0]
  request.r(i11757[1], i11757[2], 0, i11756, 'texture')
  i11756.aabb = i11757[3]
  i11756.vertices = i11757[4]
  i11756.triangles = i11757[5]
  i11756.textureRect = UnityEngine.Rect.MinMaxRect(i11757[6], i11757[7], i11757[8], i11757[9])
  i11756.packedRect = UnityEngine.Rect.MinMaxRect(i11757[10], i11757[11], i11757[12], i11757[13])
  i11756.border = new pc.Vec4( i11757[14], i11757[15], i11757[16], i11757[17] )
  i11756.transparency = i11757[18]
  i11756.bounds = i11757[19]
  i11756.pixelsPerUnit = i11757[20]
  i11756.textureWidth = i11757[21]
  i11756.textureHeight = i11757[22]
  i11756.nativeSize = new pc.Vec2( i11757[23], i11757[24] )
  i11756.pivot = new pc.Vec2( i11757[25], i11757[26] )
  i11756.textureRectOffset = new pc.Vec2( i11757[27], i11757[28] )
  return i11756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i11758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i11759 = data
  i11758.name = i11759[0]
  return i11758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i11760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i11761 = data
  i11760.name = i11761[0]
  i11760.wrapMode = i11761[1]
  i11760.isLooping = !!i11761[2]
  i11760.length = i11761[3]
  var i11763 = i11761[4]
  var i11762 = []
  for(var i = 0; i < i11763.length; i += 1) {
    i11762.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i11763[i + 0]) );
  }
  i11760.curves = i11762
  var i11765 = i11761[5]
  var i11764 = []
  for(var i = 0; i < i11765.length; i += 1) {
    i11764.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i11765[i + 0]) );
  }
  i11760.events = i11764
  i11760.halfPrecision = !!i11761[6]
  i11760._frameRate = i11761[7]
  i11760.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i11761[8], i11760.localBounds)
  i11760.hasMuscleCurves = !!i11761[9]
  var i11767 = i11761[10]
  var i11766 = []
  for(var i = 0; i < i11767.length; i += 1) {
    i11766.push( i11767[i + 0] );
  }
  i11760.clipMuscleConstant = i11766
  i11760.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i11761[11], i11760.clipBindingConstant)
  return i11760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i11770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i11771 = data
  i11770.path = i11771[0]
  i11770.hash = i11771[1]
  i11770.componentType = i11771[2]
  i11770.property = i11771[3]
  i11770.keys = i11771[4]
  var i11773 = i11771[5]
  var i11772 = []
  for(var i = 0; i < i11773.length; i += 1) {
    i11772.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i11773[i + 0]) );
  }
  i11770.objectReferenceKeys = i11772
  return i11770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i11776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i11777 = data
  i11776.time = i11777[0]
  request.r(i11777[1], i11777[2], 0, i11776, 'value')
  return i11776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i11780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i11781 = data
  i11780.functionName = i11781[0]
  i11780.floatParameter = i11781[1]
  i11780.intParameter = i11781[2]
  i11780.stringParameter = i11781[3]
  request.r(i11781[4], i11781[5], 0, i11780, 'objectReferenceParameter')
  i11780.time = i11781[6]
  return i11780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i11782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i11783 = data
  i11782.center = new pc.Vec3( i11783[0], i11783[1], i11783[2] )
  i11782.extends = new pc.Vec3( i11783[3], i11783[4], i11783[5] )
  return i11782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i11786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i11787 = data
  var i11789 = i11787[0]
  var i11788 = []
  for(var i = 0; i < i11789.length; i += 1) {
    i11788.push( i11789[i + 0] );
  }
  i11786.genericBindings = i11788
  var i11791 = i11787[1]
  var i11790 = []
  for(var i = 0; i < i11791.length; i += 1) {
    i11790.push( i11791[i + 0] );
  }
  i11786.pptrCurveMapping = i11790
  return i11786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i11792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i11793 = data
  i11792.name = i11793[0]
  i11792.ascent = i11793[1]
  i11792.originalLineHeight = i11793[2]
  i11792.fontSize = i11793[3]
  var i11795 = i11793[4]
  var i11794 = []
  for(var i = 0; i < i11795.length; i += 1) {
    i11794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i11795[i + 0]) );
  }
  i11792.characterInfo = i11794
  request.r(i11793[5], i11793[6], 0, i11792, 'texture')
  i11792.originalFontSize = i11793[7]
  return i11792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i11798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i11799 = data
  i11798.index = i11799[0]
  i11798.advance = i11799[1]
  i11798.bearing = i11799[2]
  i11798.glyphWidth = i11799[3]
  i11798.glyphHeight = i11799[4]
  i11798.minX = i11799[5]
  i11798.maxX = i11799[6]
  i11798.minY = i11799[7]
  i11798.maxY = i11799[8]
  i11798.uvBottomLeftX = i11799[9]
  i11798.uvBottomLeftY = i11799[10]
  i11798.uvBottomRightX = i11799[11]
  i11798.uvBottomRightY = i11799[12]
  i11798.uvTopLeftX = i11799[13]
  i11798.uvTopLeftY = i11799[14]
  i11798.uvTopRightX = i11799[15]
  i11798.uvTopRightY = i11799[16]
  return i11798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i11800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i11801 = data
  i11800.name = i11801[0]
  var i11803 = i11801[1]
  var i11802 = []
  for(var i = 0; i < i11803.length; i += 1) {
    i11802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i11803[i + 0]) );
  }
  i11800.layers = i11802
  var i11805 = i11801[2]
  var i11804 = []
  for(var i = 0; i < i11805.length; i += 1) {
    i11804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i11805[i + 0]) );
  }
  i11800.parameters = i11804
  i11800.animationClips = i11801[3]
  i11800.avatarUnsupported = i11801[4]
  return i11800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i11808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i11809 = data
  i11808.name = i11809[0]
  i11808.defaultWeight = i11809[1]
  i11808.blendingMode = i11809[2]
  i11808.avatarMask = i11809[3]
  i11808.syncedLayerIndex = i11809[4]
  i11808.syncedLayerAffectsTiming = !!i11809[5]
  i11808.syncedLayers = i11809[6]
  i11808.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i11809[7], i11808.stateMachine)
  return i11808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i11810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i11811 = data
  i11810.id = i11811[0]
  i11810.name = i11811[1]
  i11810.path = i11811[2]
  var i11813 = i11811[3]
  var i11812 = []
  for(var i = 0; i < i11813.length; i += 1) {
    i11812.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i11813[i + 0]) );
  }
  i11810.states = i11812
  var i11815 = i11811[4]
  var i11814 = []
  for(var i = 0; i < i11815.length; i += 1) {
    i11814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i11815[i + 0]) );
  }
  i11810.machines = i11814
  var i11817 = i11811[5]
  var i11816 = []
  for(var i = 0; i < i11817.length; i += 1) {
    i11816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i11817[i + 0]) );
  }
  i11810.entryStateTransitions = i11816
  var i11819 = i11811[6]
  var i11818 = []
  for(var i = 0; i < i11819.length; i += 1) {
    i11818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i11819[i + 0]) );
  }
  i11810.exitStateTransitions = i11818
  var i11821 = i11811[7]
  var i11820 = []
  for(var i = 0; i < i11821.length; i += 1) {
    i11820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i11821[i + 0]) );
  }
  i11810.anyStateTransitions = i11820
  i11810.defaultStateId = i11811[8]
  return i11810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i11824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i11825 = data
  i11824.id = i11825[0]
  i11824.name = i11825[1]
  i11824.cycleOffset = i11825[2]
  i11824.cycleOffsetParameter = i11825[3]
  i11824.cycleOffsetParameterActive = !!i11825[4]
  i11824.mirror = !!i11825[5]
  i11824.mirrorParameter = i11825[6]
  i11824.mirrorParameterActive = !!i11825[7]
  i11824.motionId = i11825[8]
  i11824.nameHash = i11825[9]
  i11824.fullPathHash = i11825[10]
  i11824.speed = i11825[11]
  i11824.speedParameter = i11825[12]
  i11824.speedParameterActive = !!i11825[13]
  i11824.tag = i11825[14]
  i11824.tagHash = i11825[15]
  i11824.writeDefaultValues = !!i11825[16]
  var i11827 = i11825[17]
  var i11826 = []
  for(var i = 0; i < i11827.length; i += 2) {
  request.r(i11827[i + 0], i11827[i + 1], 2, i11826, '')
  }
  i11824.behaviours = i11826
  var i11829 = i11825[18]
  var i11828 = []
  for(var i = 0; i < i11829.length; i += 1) {
    i11828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i11829[i + 0]) );
  }
  i11824.transitions = i11828
  return i11824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i11834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i11835 = data
  i11834.fullPath = i11835[0]
  i11834.canTransitionToSelf = !!i11835[1]
  i11834.duration = i11835[2]
  i11834.exitTime = i11835[3]
  i11834.hasExitTime = !!i11835[4]
  i11834.hasFixedDuration = !!i11835[5]
  i11834.interruptionSource = i11835[6]
  i11834.offset = i11835[7]
  i11834.orderedInterruption = !!i11835[8]
  i11834.destinationStateId = i11835[9]
  i11834.isExit = !!i11835[10]
  i11834.mute = !!i11835[11]
  i11834.solo = !!i11835[12]
  var i11837 = i11835[13]
  var i11836 = []
  for(var i = 0; i < i11837.length; i += 1) {
    i11836.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i11837[i + 0]) );
  }
  i11834.conditions = i11836
  return i11834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i11842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i11843 = data
  i11842.destinationStateId = i11843[0]
  i11842.isExit = !!i11843[1]
  i11842.mute = !!i11843[2]
  i11842.solo = !!i11843[3]
  var i11845 = i11843[4]
  var i11844 = []
  for(var i = 0; i < i11845.length; i += 1) {
    i11844.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i11845[i + 0]) );
  }
  i11842.conditions = i11844
  return i11842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i11848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i11849 = data
  i11848.mode = i11849[0]
  i11848.parameter = i11849[1]
  i11848.threshold = i11849[2]
  return i11848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i11852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i11853 = data
  i11852.defaultBool = !!i11853[0]
  i11852.defaultFloat = i11853[1]
  i11852.defaultInt = i11853[2]
  i11852.name = i11853[3]
  i11852.nameHash = i11853[4]
  i11852.type = i11853[5]
  return i11852
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i11854 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i11855 = data
  i11854.useSafeMode = !!i11855[0]
  i11854.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i11855[1], i11854.safeModeOptions)
  i11854.timeScale = i11855[2]
  i11854.unscaledTimeScale = i11855[3]
  i11854.useSmoothDeltaTime = !!i11855[4]
  i11854.maxSmoothUnscaledTime = i11855[5]
  i11854.rewindCallbackMode = i11855[6]
  i11854.showUnityEditorReport = !!i11855[7]
  i11854.logBehaviour = i11855[8]
  i11854.drawGizmos = !!i11855[9]
  i11854.defaultRecyclable = !!i11855[10]
  i11854.defaultAutoPlay = i11855[11]
  i11854.defaultUpdateType = i11855[12]
  i11854.defaultTimeScaleIndependent = !!i11855[13]
  i11854.defaultEaseType = i11855[14]
  i11854.defaultEaseOvershootOrAmplitude = i11855[15]
  i11854.defaultEasePeriod = i11855[16]
  i11854.defaultAutoKill = !!i11855[17]
  i11854.defaultLoopType = i11855[18]
  i11854.debugMode = !!i11855[19]
  i11854.debugStoreTargetId = !!i11855[20]
  i11854.showPreviewPanel = !!i11855[21]
  i11854.storeSettingsLocation = i11855[22]
  i11854.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i11855[23], i11854.modules)
  i11854.createASMDEF = !!i11855[24]
  i11854.showPlayingTweens = !!i11855[25]
  i11854.showPausedTweens = !!i11855[26]
  return i11854
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i11856 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i11857 = data
  i11856.logBehaviour = i11857[0]
  i11856.nestedTweenFailureBehaviour = i11857[1]
  return i11856
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i11858 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i11859 = data
  i11858.showPanel = !!i11859[0]
  i11858.audioEnabled = !!i11859[1]
  i11858.physicsEnabled = !!i11859[2]
  i11858.physics2DEnabled = !!i11859[3]
  i11858.spriteEnabled = !!i11859[4]
  i11858.uiEnabled = !!i11859[5]
  i11858.textMeshProEnabled = !!i11859[6]
  i11858.tk2DEnabled = !!i11859[7]
  i11858.deAudioEnabled = !!i11859[8]
  i11858.deUnityExtendedEnabled = !!i11859[9]
  i11858.epoOutlineEnabled = !!i11859[10]
  return i11858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i11860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i11861 = data
  var i11863 = i11861[0]
  var i11862 = []
  for(var i = 0; i < i11863.length; i += 1) {
    i11862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i11863[i + 0]) );
  }
  i11860.files = i11862
  i11860.componentToPrefabIds = i11861[1]
  return i11860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i11866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i11867 = data
  i11866.path = i11867[0]
  request.r(i11867[1], i11867[2], 0, i11866, 'unityObject')
  return i11866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i11868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i11869 = data
  var i11871 = i11869[0]
  var i11870 = []
  for(var i = 0; i < i11871.length; i += 1) {
    i11870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i11871[i + 0]) );
  }
  i11868.scriptsExecutionOrder = i11870
  var i11873 = i11869[1]
  var i11872 = []
  for(var i = 0; i < i11873.length; i += 1) {
    i11872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i11873[i + 0]) );
  }
  i11868.sortingLayers = i11872
  var i11875 = i11869[2]
  var i11874 = []
  for(var i = 0; i < i11875.length; i += 1) {
    i11874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i11875[i + 0]) );
  }
  i11868.cullingLayers = i11874
  i11868.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i11869[3], i11868.timeSettings)
  i11868.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i11869[4], i11868.physicsSettings)
  i11868.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i11869[5], i11868.physics2DSettings)
  i11868.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i11869[6], i11868.qualitySettings)
  i11868.enableRealtimeShadows = !!i11869[7]
  i11868.enableAutoInstancing = !!i11869[8]
  i11868.enableStaticBatching = !!i11869[9]
  i11868.enableDynamicBatching = !!i11869[10]
  i11868.usePreservativeDynamicBatching = !!i11869[11]
  i11868.lightmapEncodingQuality = i11869[12]
  i11868.desiredColorSpace = i11869[13]
  var i11877 = i11869[14]
  var i11876 = []
  for(var i = 0; i < i11877.length; i += 1) {
    i11876.push( i11877[i + 0] );
  }
  i11868.allTags = i11876
  return i11868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i11880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i11881 = data
  i11880.name = i11881[0]
  i11880.value = i11881[1]
  return i11880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i11884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i11885 = data
  i11884.id = i11885[0]
  i11884.name = i11885[1]
  i11884.value = i11885[2]
  return i11884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i11888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i11889 = data
  i11888.id = i11889[0]
  i11888.name = i11889[1]
  return i11888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i11890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i11891 = data
  i11890.fixedDeltaTime = i11891[0]
  i11890.maximumDeltaTime = i11891[1]
  i11890.timeScale = i11891[2]
  i11890.maximumParticleTimestep = i11891[3]
  return i11890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i11892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i11893 = data
  i11892.gravity = new pc.Vec3( i11893[0], i11893[1], i11893[2] )
  i11892.defaultSolverIterations = i11893[3]
  i11892.bounceThreshold = i11893[4]
  i11892.autoSyncTransforms = !!i11893[5]
  i11892.autoSimulation = !!i11893[6]
  var i11895 = i11893[7]
  var i11894 = []
  for(var i = 0; i < i11895.length; i += 1) {
    i11894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i11895[i + 0]) );
  }
  i11892.collisionMatrix = i11894
  return i11892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i11898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i11899 = data
  i11898.enabled = !!i11899[0]
  i11898.layerId = i11899[1]
  i11898.otherLayerId = i11899[2]
  return i11898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i11900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i11901 = data
  request.r(i11901[0], i11901[1], 0, i11900, 'material')
  i11900.gravity = new pc.Vec2( i11901[2], i11901[3] )
  i11900.positionIterations = i11901[4]
  i11900.velocityIterations = i11901[5]
  i11900.velocityThreshold = i11901[6]
  i11900.maxLinearCorrection = i11901[7]
  i11900.maxAngularCorrection = i11901[8]
  i11900.maxTranslationSpeed = i11901[9]
  i11900.maxRotationSpeed = i11901[10]
  i11900.baumgarteScale = i11901[11]
  i11900.baumgarteTOIScale = i11901[12]
  i11900.timeToSleep = i11901[13]
  i11900.linearSleepTolerance = i11901[14]
  i11900.angularSleepTolerance = i11901[15]
  i11900.defaultContactOffset = i11901[16]
  i11900.autoSimulation = !!i11901[17]
  i11900.queriesHitTriggers = !!i11901[18]
  i11900.queriesStartInColliders = !!i11901[19]
  i11900.callbacksOnDisable = !!i11901[20]
  i11900.reuseCollisionCallbacks = !!i11901[21]
  i11900.autoSyncTransforms = !!i11901[22]
  var i11903 = i11901[23]
  var i11902 = []
  for(var i = 0; i < i11903.length; i += 1) {
    i11902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i11903[i + 0]) );
  }
  i11900.collisionMatrix = i11902
  return i11900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i11906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i11907 = data
  i11906.enabled = !!i11907[0]
  i11906.layerId = i11907[1]
  i11906.otherLayerId = i11907[2]
  return i11906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i11908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i11909 = data
  var i11911 = i11909[0]
  var i11910 = []
  for(var i = 0; i < i11911.length; i += 1) {
    i11910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i11911[i + 0]) );
  }
  i11908.qualityLevels = i11910
  var i11913 = i11909[1]
  var i11912 = []
  for(var i = 0; i < i11913.length; i += 1) {
    i11912.push( i11913[i + 0] );
  }
  i11908.names = i11912
  i11908.shadows = i11909[2]
  i11908.anisotropicFiltering = i11909[3]
  i11908.antiAliasing = i11909[4]
  i11908.lodBias = i11909[5]
  i11908.shadowCascades = i11909[6]
  i11908.shadowDistance = i11909[7]
  i11908.shadowmaskMode = i11909[8]
  i11908.shadowProjection = i11909[9]
  i11908.shadowResolution = i11909[10]
  i11908.softParticles = !!i11909[11]
  i11908.softVegetation = !!i11909[12]
  i11908.activeColorSpace = i11909[13]
  i11908.desiredColorSpace = i11909[14]
  i11908.masterTextureLimit = i11909[15]
  i11908.maxQueuedFrames = i11909[16]
  i11908.particleRaycastBudget = i11909[17]
  i11908.pixelLightCount = i11909[18]
  i11908.realtimeReflectionProbes = !!i11909[19]
  i11908.shadowCascade2Split = i11909[20]
  i11908.shadowCascade4Split = new pc.Vec3( i11909[21], i11909[22], i11909[23] )
  i11908.streamingMipmapsActive = !!i11909[24]
  i11908.vSyncCount = i11909[25]
  i11908.asyncUploadBufferSize = i11909[26]
  i11908.asyncUploadTimeSlice = i11909[27]
  i11908.billboardsFaceCameraPosition = !!i11909[28]
  i11908.shadowNearPlaneOffset = i11909[29]
  i11908.streamingMipmapsMemoryBudget = i11909[30]
  i11908.maximumLODLevel = i11909[31]
  i11908.streamingMipmapsAddAllCameras = !!i11909[32]
  i11908.streamingMipmapsMaxLevelReduction = i11909[33]
  i11908.streamingMipmapsRenderersPerFrame = i11909[34]
  i11908.resolutionScalingFixedDPIFactor = i11909[35]
  i11908.streamingMipmapsMaxFileIORequests = i11909[36]
  i11908.currentQualityLevel = i11909[37]
  return i11908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i11916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i11917 = data
  var i11919 = i11917[0]
  var i11918 = []
  for(var i = 0; i < i11919.length; i += 1) {
    i11918.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i11919[i + 0]) );
  }
  i11916.groups = i11918
  var i11921 = i11917[1]
  var i11920 = []
  for(var i = 0; i < i11921.length; i += 1) {
    i11920.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i11921[i + 0]) );
  }
  i11916.snapshots = i11920
  return i11916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i11924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i11925 = data
  i11924.id = i11925[0]
  i11924.childGroupIds = i11925[1]
  i11924.name = i11925[2]
  return i11924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i11928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i11929 = data
  i11928.id = i11929[0]
  var i11931 = i11929[1]
  var i11930 = []
  for(var i = 0; i < i11931.length; i += 1) {
    i11930.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i11931[i + 0]) );
  }
  i11928.parameters = i11930
  return i11928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i11934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i11935 = data
  i11934.name = i11935[0]
  i11934.value = i11935[1]
  return i11934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i11938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i11939 = data
  i11938.weight = i11939[0]
  i11938.vertices = i11939[1]
  i11938.normals = i11939[2]
  i11938.tangents = i11939[3]
  return i11938
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

Deserializers.buildID = "e5429192-1bae-4b5b-92f2-2cbdfb2007a5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

