var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i7964 = root || request.c( 'UnityEngine.JointSpring' )
  var i7965 = data
  i7964.spring = i7965[0]
  i7964.damper = i7965[1]
  i7964.targetPosition = i7965[2]
  return i7964
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i7966 = root || request.c( 'UnityEngine.JointMotor' )
  var i7967 = data
  i7966.m_TargetVelocity = i7967[0]
  i7966.m_Force = i7967[1]
  i7966.m_FreeSpin = i7967[2]
  return i7966
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i7968 = root || request.c( 'UnityEngine.JointLimits' )
  var i7969 = data
  i7968.m_Min = i7969[0]
  i7968.m_Max = i7969[1]
  i7968.m_Bounciness = i7969[2]
  i7968.m_BounceMinVelocity = i7969[3]
  i7968.m_ContactDistance = i7969[4]
  i7968.minBounce = i7969[5]
  i7968.maxBounce = i7969[6]
  return i7968
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i7970 = root || request.c( 'UnityEngine.JointDrive' )
  var i7971 = data
  i7970.m_PositionSpring = i7971[0]
  i7970.m_PositionDamper = i7971[1]
  i7970.m_MaximumForce = i7971[2]
  i7970.m_UseAcceleration = i7971[3]
  return i7970
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i7972 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i7973 = data
  i7972.m_Spring = i7973[0]
  i7972.m_Damper = i7973[1]
  return i7972
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i7974 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i7975 = data
  i7974.m_Limit = i7975[0]
  i7974.m_Bounciness = i7975[1]
  i7974.m_ContactDistance = i7975[2]
  return i7974
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i7976 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i7977 = data
  i7976.m_ExtremumSlip = i7977[0]
  i7976.m_ExtremumValue = i7977[1]
  i7976.m_AsymptoteSlip = i7977[2]
  i7976.m_AsymptoteValue = i7977[3]
  i7976.m_Stiffness = i7977[4]
  return i7976
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i7978 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i7979 = data
  i7978.m_LowerAngle = i7979[0]
  i7978.m_UpperAngle = i7979[1]
  return i7978
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i7980 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i7981 = data
  i7980.m_MotorSpeed = i7981[0]
  i7980.m_MaximumMotorTorque = i7981[1]
  return i7980
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i7982 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i7983 = data
  i7982.m_DampingRatio = i7983[0]
  i7982.m_Frequency = i7983[1]
  i7982.m_Angle = i7983[2]
  return i7982
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i7984 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i7985 = data
  i7984.m_LowerTranslation = i7985[0]
  i7984.m_UpperTranslation = i7985[1]
  return i7984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i7986 = root || new pc.UnityMaterial()
  var i7987 = data
  i7986.name = i7987[0]
  request.r(i7987[1], i7987[2], 0, i7986, 'shader')
  i7986.renderQueue = i7987[3]
  i7986.enableInstancing = !!i7987[4]
  var i7989 = i7987[5]
  var i7988 = []
  for(var i = 0; i < i7989.length; i += 1) {
    i7988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i7989[i + 0]) );
  }
  i7986.floatParameters = i7988
  var i7991 = i7987[6]
  var i7990 = []
  for(var i = 0; i < i7991.length; i += 1) {
    i7990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i7991[i + 0]) );
  }
  i7986.colorParameters = i7990
  var i7993 = i7987[7]
  var i7992 = []
  for(var i = 0; i < i7993.length; i += 1) {
    i7992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i7993[i + 0]) );
  }
  i7986.vectorParameters = i7992
  var i7995 = i7987[8]
  var i7994 = []
  for(var i = 0; i < i7995.length; i += 1) {
    i7994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i7995[i + 0]) );
  }
  i7986.textureParameters = i7994
  var i7997 = i7987[9]
  var i7996 = []
  for(var i = 0; i < i7997.length; i += 1) {
    i7996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i7997[i + 0]) );
  }
  i7986.materialFlags = i7996
  return i7986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i8000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i8001 = data
  i8000.name = i8001[0]
  i8000.value = i8001[1]
  return i8000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i8004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i8005 = data
  i8004.name = i8005[0]
  i8004.value = new pc.Color(i8005[1], i8005[2], i8005[3], i8005[4])
  return i8004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i8008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i8009 = data
  i8008.name = i8009[0]
  i8008.value = new pc.Vec4( i8009[1], i8009[2], i8009[3], i8009[4] )
  return i8008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i8012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i8013 = data
  i8012.name = i8013[0]
  request.r(i8013[1], i8013[2], 0, i8012, 'value')
  return i8012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i8016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i8017 = data
  i8016.name = i8017[0]
  i8016.enabled = !!i8017[1]
  return i8016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i8018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i8019 = data
  i8018.name = i8019[0]
  i8018.width = i8019[1]
  i8018.height = i8019[2]
  i8018.mipmapCount = i8019[3]
  i8018.anisoLevel = i8019[4]
  i8018.filterMode = i8019[5]
  i8018.hdr = !!i8019[6]
  i8018.format = i8019[7]
  i8018.wrapMode = i8019[8]
  i8018.alphaIsTransparency = !!i8019[9]
  i8018.alphaSource = i8019[10]
  i8018.graphicsFormat = i8019[11]
  i8018.sRGBTexture = !!i8019[12]
  i8018.desiredColorSpace = i8019[13]
  i8018.wrapU = i8019[14]
  i8018.wrapV = i8019[15]
  return i8018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i8020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i8021 = data
  i8020.name = i8021[0]
  i8020.halfPrecision = !!i8021[1]
  i8020.useSimplification = !!i8021[2]
  i8020.useUInt32IndexFormat = !!i8021[3]
  i8020.vertexCount = i8021[4]
  i8020.aabb = i8021[5]
  var i8023 = i8021[6]
  var i8022 = []
  for(var i = 0; i < i8023.length; i += 1) {
    i8022.push( !!i8023[i + 0] );
  }
  i8020.streams = i8022
  i8020.vertices = i8021[7]
  var i8025 = i8021[8]
  var i8024 = []
  for(var i = 0; i < i8025.length; i += 1) {
    i8024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i8025[i + 0]) );
  }
  i8020.subMeshes = i8024
  var i8027 = i8021[9]
  var i8026 = []
  for(var i = 0; i < i8027.length; i += 16) {
    i8026.push( new pc.Mat4().setData(i8027[i + 0], i8027[i + 1], i8027[i + 2], i8027[i + 3],  i8027[i + 4], i8027[i + 5], i8027[i + 6], i8027[i + 7],  i8027[i + 8], i8027[i + 9], i8027[i + 10], i8027[i + 11],  i8027[i + 12], i8027[i + 13], i8027[i + 14], i8027[i + 15]) );
  }
  i8020.bindposes = i8026
  var i8029 = i8021[10]
  var i8028 = []
  for(var i = 0; i < i8029.length; i += 1) {
    i8028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i8029[i + 0]) );
  }
  i8020.blendShapes = i8028
  return i8020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i8034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i8035 = data
  i8034.triangles = i8035[0]
  return i8034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i8040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i8041 = data
  i8040.name = i8041[0]
  var i8043 = i8041[1]
  var i8042 = []
  for(var i = 0; i < i8043.length; i += 1) {
    i8042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i8043[i + 0]) );
  }
  i8040.frames = i8042
  return i8040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i8044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i8045 = data
  i8044.position = new pc.Vec3( i8045[0], i8045[1], i8045[2] )
  i8044.scale = new pc.Vec3( i8045[3], i8045[4], i8045[5] )
  i8044.rotation = new pc.Quat(i8045[6], i8045[7], i8045[8], i8045[9])
  return i8044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i8046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i8047 = data
  i8046.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i8047[0], i8046.main)
  i8046.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i8047[1], i8046.colorBySpeed)
  i8046.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i8047[2], i8046.colorOverLifetime)
  i8046.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i8047[3], i8046.emission)
  i8046.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i8047[4], i8046.rotationBySpeed)
  i8046.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i8047[5], i8046.rotationOverLifetime)
  i8046.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i8047[6], i8046.shape)
  i8046.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i8047[7], i8046.sizeBySpeed)
  i8046.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i8047[8], i8046.sizeOverLifetime)
  i8046.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i8047[9], i8046.textureSheetAnimation)
  i8046.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i8047[10], i8046.velocityOverLifetime)
  i8046.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i8047[11], i8046.noise)
  i8046.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i8047[12], i8046.inheritVelocity)
  i8046.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i8047[13], i8046.forceOverLifetime)
  i8046.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i8047[14], i8046.limitVelocityOverLifetime)
  i8046.useAutoRandomSeed = !!i8047[15]
  i8046.randomSeed = i8047[16]
  return i8046
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i8048 = root || new pc.ParticleSystemMain()
  var i8049 = data
  i8048.duration = i8049[0]
  i8048.loop = !!i8049[1]
  i8048.prewarm = !!i8049[2]
  i8048.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8049[3], i8048.startDelay)
  i8048.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8049[4], i8048.startLifetime)
  i8048.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8049[5], i8048.startSpeed)
  i8048.startSize3D = !!i8049[6]
  i8048.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8049[7], i8048.startSizeX)
  i8048.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8049[8], i8048.startSizeY)
  i8048.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8049[9], i8048.startSizeZ)
  i8048.startRotation3D = !!i8049[10]
  i8048.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8049[11], i8048.startRotationX)
  i8048.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8049[12], i8048.startRotationY)
  i8048.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8049[13], i8048.startRotationZ)
  i8048.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8049[14], i8048.startColor)
  i8048.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8049[15], i8048.gravityModifier)
  i8048.simulationSpace = i8049[16]
  request.r(i8049[17], i8049[18], 0, i8048, 'customSimulationSpace')
  i8048.simulationSpeed = i8049[19]
  i8048.useUnscaledTime = !!i8049[20]
  i8048.scalingMode = i8049[21]
  i8048.playOnAwake = !!i8049[22]
  i8048.maxParticles = i8049[23]
  i8048.emitterVelocityMode = i8049[24]
  i8048.stopAction = i8049[25]
  return i8048
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i8050 = root || new pc.MinMaxCurve()
  var i8051 = data
  i8050.mode = i8051[0]
  i8050.curveMin = new pc.AnimationCurve( { keys_flow: i8051[1] } )
  i8050.curveMax = new pc.AnimationCurve( { keys_flow: i8051[2] } )
  i8050.curveMultiplier = i8051[3]
  i8050.constantMin = i8051[4]
  i8050.constantMax = i8051[5]
  return i8050
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i8052 = root || new pc.MinMaxGradient()
  var i8053 = data
  i8052.mode = i8053[0]
  i8052.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i8053[1], i8052.gradientMin)
  i8052.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i8053[2], i8052.gradientMax)
  i8052.colorMin = new pc.Color(i8053[3], i8053[4], i8053[5], i8053[6])
  i8052.colorMax = new pc.Color(i8053[7], i8053[8], i8053[9], i8053[10])
  return i8052
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i8054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i8055 = data
  i8054.mode = i8055[0]
  var i8057 = i8055[1]
  var i8056 = []
  for(var i = 0; i < i8057.length; i += 1) {
    i8056.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i8057[i + 0]) );
  }
  i8054.colorKeys = i8056
  var i8059 = i8055[2]
  var i8058 = []
  for(var i = 0; i < i8059.length; i += 1) {
    i8058.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i8059[i + 0]) );
  }
  i8054.alphaKeys = i8058
  return i8054
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i8060 = root || new pc.ParticleSystemColorBySpeed()
  var i8061 = data
  i8060.enabled = !!i8061[0]
  i8060.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8061[1], i8060.color)
  i8060.range = new pc.Vec2( i8061[2], i8061[3] )
  return i8060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i8064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i8065 = data
  i8064.color = new pc.Color(i8065[0], i8065[1], i8065[2], i8065[3])
  i8064.time = i8065[4]
  return i8064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i8068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i8069 = data
  i8068.alpha = i8069[0]
  i8068.time = i8069[1]
  return i8068
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i8070 = root || new pc.ParticleSystemColorOverLifetime()
  var i8071 = data
  i8070.enabled = !!i8071[0]
  i8070.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8071[1], i8070.color)
  return i8070
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i8072 = root || new pc.ParticleSystemEmitter()
  var i8073 = data
  i8072.enabled = !!i8073[0]
  i8072.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8073[1], i8072.rateOverTime)
  i8072.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8073[2], i8072.rateOverDistance)
  var i8075 = i8073[3]
  var i8074 = []
  for(var i = 0; i < i8075.length; i += 1) {
    i8074.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i8075[i + 0]) );
  }
  i8072.bursts = i8074
  return i8072
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i8078 = root || new pc.ParticleSystemBurst()
  var i8079 = data
  i8078.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8079[0], i8078.count)
  i8078.cycleCount = i8079[1]
  i8078.minCount = i8079[2]
  i8078.maxCount = i8079[3]
  i8078.repeatInterval = i8079[4]
  i8078.time = i8079[5]
  return i8078
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i8080 = root || new pc.ParticleSystemRotationBySpeed()
  var i8081 = data
  i8080.enabled = !!i8081[0]
  i8080.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8081[1], i8080.x)
  i8080.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8081[2], i8080.y)
  i8080.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8081[3], i8080.z)
  i8080.separateAxes = !!i8081[4]
  i8080.range = new pc.Vec2( i8081[5], i8081[6] )
  return i8080
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i8082 = root || new pc.ParticleSystemRotationOverLifetime()
  var i8083 = data
  i8082.enabled = !!i8083[0]
  i8082.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8083[1], i8082.x)
  i8082.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8083[2], i8082.y)
  i8082.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8083[3], i8082.z)
  i8082.separateAxes = !!i8083[4]
  return i8082
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i8084 = root || new pc.ParticleSystemShape()
  var i8085 = data
  i8084.enabled = !!i8085[0]
  i8084.shapeType = i8085[1]
  i8084.randomDirectionAmount = i8085[2]
  i8084.sphericalDirectionAmount = i8085[3]
  i8084.randomPositionAmount = i8085[4]
  i8084.alignToDirection = !!i8085[5]
  i8084.radius = i8085[6]
  i8084.radiusMode = i8085[7]
  i8084.radiusSpread = i8085[8]
  i8084.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8085[9], i8084.radiusSpeed)
  i8084.radiusThickness = i8085[10]
  i8084.angle = i8085[11]
  i8084.length = i8085[12]
  i8084.boxThickness = new pc.Vec3( i8085[13], i8085[14], i8085[15] )
  i8084.meshShapeType = i8085[16]
  request.r(i8085[17], i8085[18], 0, i8084, 'mesh')
  request.r(i8085[19], i8085[20], 0, i8084, 'meshRenderer')
  request.r(i8085[21], i8085[22], 0, i8084, 'skinnedMeshRenderer')
  i8084.useMeshMaterialIndex = !!i8085[23]
  i8084.meshMaterialIndex = i8085[24]
  i8084.useMeshColors = !!i8085[25]
  i8084.normalOffset = i8085[26]
  i8084.arc = i8085[27]
  i8084.arcMode = i8085[28]
  i8084.arcSpread = i8085[29]
  i8084.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8085[30], i8084.arcSpeed)
  i8084.donutRadius = i8085[31]
  i8084.position = new pc.Vec3( i8085[32], i8085[33], i8085[34] )
  i8084.rotation = new pc.Vec3( i8085[35], i8085[36], i8085[37] )
  i8084.scale = new pc.Vec3( i8085[38], i8085[39], i8085[40] )
  return i8084
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i8086 = root || new pc.ParticleSystemSizeBySpeed()
  var i8087 = data
  i8086.enabled = !!i8087[0]
  i8086.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8087[1], i8086.x)
  i8086.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8087[2], i8086.y)
  i8086.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8087[3], i8086.z)
  i8086.separateAxes = !!i8087[4]
  i8086.range = new pc.Vec2( i8087[5], i8087[6] )
  return i8086
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i8088 = root || new pc.ParticleSystemSizeOverLifetime()
  var i8089 = data
  i8088.enabled = !!i8089[0]
  i8088.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8089[1], i8088.x)
  i8088.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8089[2], i8088.y)
  i8088.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8089[3], i8088.z)
  i8088.separateAxes = !!i8089[4]
  return i8088
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i8090 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i8091 = data
  i8090.enabled = !!i8091[0]
  i8090.mode = i8091[1]
  i8090.animation = i8091[2]
  i8090.numTilesX = i8091[3]
  i8090.numTilesY = i8091[4]
  i8090.useRandomRow = !!i8091[5]
  i8090.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8091[6], i8090.frameOverTime)
  i8090.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8091[7], i8090.startFrame)
  i8090.cycleCount = i8091[8]
  i8090.rowIndex = i8091[9]
  i8090.flipU = i8091[10]
  i8090.flipV = i8091[11]
  i8090.spriteCount = i8091[12]
  var i8093 = i8091[13]
  var i8092 = []
  for(var i = 0; i < i8093.length; i += 2) {
  request.r(i8093[i + 0], i8093[i + 1], 2, i8092, '')
  }
  i8090.sprites = i8092
  return i8090
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i8096 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i8097 = data
  i8096.enabled = !!i8097[0]
  i8096.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8097[1], i8096.x)
  i8096.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8097[2], i8096.y)
  i8096.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8097[3], i8096.z)
  i8096.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8097[4], i8096.radial)
  i8096.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8097[5], i8096.speedModifier)
  i8096.space = i8097[6]
  i8096.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8097[7], i8096.orbitalX)
  i8096.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8097[8], i8096.orbitalY)
  i8096.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8097[9], i8096.orbitalZ)
  i8096.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8097[10], i8096.orbitalOffsetX)
  i8096.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8097[11], i8096.orbitalOffsetY)
  i8096.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8097[12], i8096.orbitalOffsetZ)
  return i8096
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i8098 = root || new pc.ParticleSystemNoise()
  var i8099 = data
  i8098.enabled = !!i8099[0]
  i8098.separateAxes = !!i8099[1]
  i8098.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8099[2], i8098.strengthX)
  i8098.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8099[3], i8098.strengthY)
  i8098.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8099[4], i8098.strengthZ)
  i8098.frequency = i8099[5]
  i8098.damping = !!i8099[6]
  i8098.octaveCount = i8099[7]
  i8098.octaveMultiplier = i8099[8]
  i8098.octaveScale = i8099[9]
  i8098.quality = i8099[10]
  i8098.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8099[11], i8098.scrollSpeed)
  i8098.scrollSpeedMultiplier = i8099[12]
  i8098.remapEnabled = !!i8099[13]
  i8098.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8099[14], i8098.remapX)
  i8098.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8099[15], i8098.remapY)
  i8098.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8099[16], i8098.remapZ)
  i8098.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8099[17], i8098.positionAmount)
  i8098.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8099[18], i8098.rotationAmount)
  i8098.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8099[19], i8098.sizeAmount)
  return i8098
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i8100 = root || new pc.ParticleSystemInheritVelocity()
  var i8101 = data
  i8100.enabled = !!i8101[0]
  i8100.mode = i8101[1]
  i8100.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8101[2], i8100.curve)
  return i8100
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i8102 = root || new pc.ParticleSystemForceOverLifetime()
  var i8103 = data
  i8102.enabled = !!i8103[0]
  i8102.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8103[1], i8102.x)
  i8102.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8103[2], i8102.y)
  i8102.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8103[3], i8102.z)
  i8102.space = i8103[4]
  i8102.randomized = !!i8103[5]
  return i8102
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i8104 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i8105 = data
  i8104.enabled = !!i8105[0]
  i8104.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8105[1], i8104.limit)
  i8104.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8105[2], i8104.limitX)
  i8104.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8105[3], i8104.limitY)
  i8104.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8105[4], i8104.limitZ)
  i8104.dampen = i8105[5]
  i8104.separateAxes = !!i8105[6]
  i8104.space = i8105[7]
  i8104.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8105[8], i8104.drag)
  i8104.multiplyDragByParticleSize = !!i8105[9]
  i8104.multiplyDragByParticleVelocity = !!i8105[10]
  return i8104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i8106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i8107 = data
  request.r(i8107[0], i8107[1], 0, i8106, 'mesh')
  i8106.meshCount = i8107[2]
  i8106.activeVertexStreamsCount = i8107[3]
  i8106.alignment = i8107[4]
  i8106.renderMode = i8107[5]
  i8106.sortMode = i8107[6]
  i8106.lengthScale = i8107[7]
  i8106.velocityScale = i8107[8]
  i8106.cameraVelocityScale = i8107[9]
  i8106.normalDirection = i8107[10]
  i8106.sortingFudge = i8107[11]
  i8106.minParticleSize = i8107[12]
  i8106.maxParticleSize = i8107[13]
  i8106.pivot = new pc.Vec3( i8107[14], i8107[15], i8107[16] )
  request.r(i8107[17], i8107[18], 0, i8106, 'trailMaterial')
  i8106.applyActiveColorSpace = !!i8107[19]
  i8106.enabled = !!i8107[20]
  request.r(i8107[21], i8107[22], 0, i8106, 'sharedMaterial')
  var i8109 = i8107[23]
  var i8108 = []
  for(var i = 0; i < i8109.length; i += 2) {
  request.r(i8109[i + 0], i8109[i + 1], 2, i8108, '')
  }
  i8106.sharedMaterials = i8108
  i8106.receiveShadows = !!i8107[24]
  i8106.shadowCastingMode = i8107[25]
  i8106.sortingLayerID = i8107[26]
  i8106.sortingOrder = i8107[27]
  i8106.lightmapIndex = i8107[28]
  i8106.lightmapSceneIndex = i8107[29]
  i8106.lightmapScaleOffset = new pc.Vec4( i8107[30], i8107[31], i8107[32], i8107[33] )
  i8106.lightProbeUsage = i8107[34]
  i8106.reflectionProbeUsage = i8107[35]
  return i8106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i8112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i8113 = data
  i8112.name = i8113[0]
  i8112.tagId = i8113[1]
  i8112.enabled = !!i8113[2]
  i8112.isStatic = !!i8113[3]
  i8112.layer = i8113[4]
  return i8112
}

Deserializers["Level1_Hair_Playable"] = function (request, data, root) {
  var i8114 = root || request.c( 'Level1_Hair_Playable' )
  var i8115 = data
  request.r(i8115[0], i8115[1], 0, i8114, 'wetCloth')
  request.r(i8115[2], i8115[3], 0, i8114, 'waterDripingParticle')
  i8114.ZoomStep1 = request.d('ZoomPos', i8115[4], i8114.ZoomStep1)
  var i8117 = i8115[5]
  var i8116 = []
  for(var i = 0; i < i8117.length; i += 2) {
  request.r(i8117[i + 0], i8117[i + 1], 2, i8116, '')
  }
  i8114.AllTrash = i8116
  var i8119 = i8115[6]
  var i8118 = []
  for(var i = 0; i < i8119.length; i += 2) {
  request.r(i8119[i + 0], i8119[i + 1], 2, i8118, '')
  }
  i8114.AllTrashOutlines = i8118
  i8114.trashDone = !!i8115[7]
  i8114.trashThrown = i8115[8]
  i8114.trashTotal = i8115[9]
  request.r(i8115[10], i8115[11], 0, i8114, 'bd_Sticky')
  i8114.ZoomStep2 = request.d('ZoomPos', i8115[12], i8114.ZoomStep2)
  request.r(i8115[13], i8115[14], 0, i8114, 'ToolStep2')
  request.r(i8115[15], i8115[16], 0, i8114, 'camFollowStep2')
  var i8121 = i8115[17]
  var i8120 = []
  for(var i = 0; i < i8121.length; i += 2) {
  request.r(i8121[i + 0], i8121[i + 1], 2, i8120, '')
  }
  i8114.AllBugOutlines = i8120
  i8114.ZoomStep2b = request.d('ZoomPos', i8115[18], i8114.ZoomStep2b)
  request.r(i8115[19], i8115[20], 0, i8114, 'ToolStep2b')
  request.r(i8115[21], i8115[22], 0, i8114, 'camFollowStep2b')
  request.r(i8115[23], i8115[24], 0, i8114, 'dustColStep2')
  request.r(i8115[25], i8115[26], 0, i8114, 'handIndicationShower')
  request.r(i8115[27], i8115[28], 0, i8114, 'hairDirtyStatic')
  request.r(i8115[29], i8115[30], 0, i8114, 'hairDirtyWetStatic')
  request.r(i8115[31], i8115[32], 0, i8114, 'dryHairAnim')
  i8114.ZoomStep3 = request.d('ZoomPos', i8115[33], i8114.ZoomStep3)
  request.r(i8115[34], i8115[35], 0, i8114, 'ShampooOnHand')
  request.r(i8115[36], i8115[37], 0, i8114, 'ShampooInHandCap')
  request.r(i8115[38], i8115[39], 0, i8114, 'ToolStep3')
  request.r(i8115[40], i8115[41], 0, i8114, 'shampooPatch')
  request.r(i8115[42], i8115[43], 0, i8114, 'handSpriteRend')
  request.r(i8115[44], i8115[45], 0, i8114, 'bottleDefault')
  request.r(i8115[46], i8115[47], 0, i8114, 'bottlePressed')
  request.r(i8115[48], i8115[49], 0, i8114, 'shampooDropping')
  request.r(i8115[50], i8115[51], 0, i8114, 'bottleOpenSfx')
  request.r(i8115[52], i8115[53], 0, i8114, 'bottleSqueezSfx')
  request.r(i8115[54], i8115[55], 0, i8114, 'bottlePourSfx')
  i8114.ZoomStep4 = request.d('ZoomPos', i8115[56], i8114.ZoomStep4)
  request.r(i8115[57], i8115[58], 0, i8114, 'ToolStep4')
  request.r(i8115[59], i8115[60], 0, i8114, 'camFollowStep4')
  request.r(i8115[61], i8115[62], 0, i8114, 'foamLight_E')
  request.r(i8115[63], i8115[64], 0, i8114, 'foam2_E')
  request.r(i8115[65], i8115[66], 0, i8114, 'foamCol')
  request.r(i8115[67], i8115[68], 0, i8114, 'handIndicationHands')
  request.r(i8115[69], i8115[70], 0, i8114, 'progressStep4')
  i8114.ZoomStep5a = request.d('ZoomPos', i8115[71], i8114.ZoomStep5a)
  i8114.ZoomStep5b = request.d('ZoomPos', i8115[72], i8114.ZoomStep5b)
  request.r(i8115[73], i8115[74], 0, i8114, 'ShowerDamaged')
  request.r(i8115[75], i8115[76], 0, i8114, 'ShowerDamaged_Drag')
  request.r(i8115[77], i8115[78], 0, i8114, 'ShowerBackDMG')
  request.r(i8115[79], i8115[80], 0, i8114, 'ShowerInner_dirty')
  request.r(i8115[81], i8115[82], 0, i8114, 'ShowerInner_Target')
  request.r(i8115[83], i8115[84], 0, i8114, 'ShowerFrontDMG')
  request.r(i8115[85], i8115[86], 0, i8114, 'OpenShowerIndication')
  request.r(i8115[87], i8115[88], 0, i8114, 'CloseShowerIndication')
  request.r(i8115[89], i8115[90], 0, i8114, 'showrOpenInput')
  request.r(i8115[91], i8115[92], 0, i8114, 'showerDisk')
  request.r(i8115[93], i8115[94], 0, i8114, 'showerFixReverseAnimDrag')
  request.r(i8115[95], i8115[96], 0, i8114, 'showerDragDamage')
  request.r(i8115[97], i8115[98], 0, i8114, 'ToolStep5Rev')
  request.r(i8115[99], i8115[100], 0, i8114, 'handIndicationShowerPlace')
  i8114.ZoomStep5 = request.d('ZoomPos', i8115[101], i8114.ZoomStep5)
  request.r(i8115[102], i8115[103], 0, i8114, 'ToolStep5')
  request.r(i8115[104], i8115[105], 0, i8114, 'ToolStep5Placeable')
  request.r(i8115[106], i8115[107], 0, i8114, 'toolStep5Progress')
  request.r(i8115[108], i8115[109], 0, i8114, 'toolStep5ProgressHelp')
  request.r(i8115[110], i8115[111], 0, i8114, 'camFollowStep5')
  request.r(i8115[112], i8115[113], 0, i8114, 'showerRender')
  request.r(i8115[114], i8115[115], 0, i8114, 'showerDirty')
  request.r(i8115[116], i8115[117], 0, i8114, 'showerClean')
  request.r(i8115[118], i8115[119], 0, i8114, 'waterShotParticle')
  request.r(i8115[120], i8115[121], 0, i8114, 'showerProblemClip')
  request.r(i8115[122], i8115[123], 0, i8114, 'FixErrorClip')
  i8114.ZoomStep6 = request.d('ZoomPos', i8115[124], i8114.ZoomStep6)
  request.r(i8115[125], i8115[126], 0, i8114, 'ToolStep6')
  request.r(i8115[127], i8115[128], 0, i8114, 'camFollowStep6')
  request.r(i8115[129], i8115[130], 0, i8114, 'wetHairs_E')
  request.r(i8115[131], i8115[132], 0, i8114, 'hairDryFade')
  i8114.ZoomStep7 = request.d('ZoomPos', i8115[133], i8114.ZoomStep7)
  request.r(i8115[134], i8115[135], 0, i8114, 'ToolStep7')
  request.r(i8115[136], i8115[137], 0, i8114, 'camFollowStep7')
  request.r(i8115[138], i8115[139], 0, i8114, 'dryHairs_E')
  request.r(i8115[140], i8115[141], 0, i8114, 'dryCombed_BG')
  request.r(i8115[142], i8115[143], 0, i8114, 'brushController')
  request.r(i8115[144], i8115[145], 0, i8114, 'handIndicationBrush')
  i8114.levelName = i8115[146]
  i8114.levelReward = i8115[147]
  request.r(i8115[148], i8115[149], 0, i8114, 'LevelIcon')
  request.r(i8115[150], i8115[151], 0, i8114, 'Level_BG')
  var i8123 = i8115[152]
  var i8122 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i8123.length; i += 2) {
  request.r(i8123[i + 0], i8123[i + 1], 1, i8122, '')
  }
  i8114.ToolIcons = i8122
  var i8125 = i8115[153]
  var i8124 = []
  for(var i = 0; i < i8125.length; i += 2) {
  request.r(i8125[i + 0], i8125[i + 1], 2, i8124, '')
  }
  i8114.AllDrags = i8124
  var i8127 = i8115[154]
  var i8126 = []
  for(var i = 0; i < i8127.length; i += 2) {
  request.r(i8127[i + 0], i8127[i + 1], 2, i8126, '')
  }
  i8114.AllSources = i8126
  var i8129 = i8115[155]
  var i8128 = []
  for(var i = 0; i < i8129.length; i += 2) {
  request.r(i8129[i + 0], i8129[i + 1], 2, i8128, '')
  }
  i8114.AllScratches = i8128
  i8114.stepsDone = i8115[156]
  i8114.levelNo = i8115[157]
  i8114.partNo = i8115[158]
  request.r(i8115[159], i8115[160], 0, i8114, 'bubbleGum')
  return i8114
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i8130 = root || request.c( 'ZoomPos' )
  var i8131 = data
  i8130.CameraPos = new pc.Vec3( i8131[0], i8131[1], i8131[2] )
  i8130.CameraFOV = i8131[3]
  return i8130
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i8142 = root || request.c( 'PlayableCTA' )
  var i8143 = data
  i8142.trigger = i8143[0]
  i8142.afterSeconds = i8143[1]
  i8142.afterTaps = i8143[2]
  request.r(i8143[3], i8143[4], 0, i8142, 'scratchProgress')
  i8142.scratchIndex = i8143[5]
  i8142.progressThreshold = i8143[6]
  request.r(i8143[7], i8143[8], 0, i8142, 'watchedTool')
  i8142.blockInputOnFire = !!i8143[9]
  i8142.refireOnEveryTap = !!i8143[10]
  i8142.refireDelay = i8143[11]
  i8142.showEndCard = !!i8143[12]
  request.r(i8143[13], i8143[14], 0, i8142, 'endCard')
  i8142.showEndCardOnProgressTrigger = !!i8143[15]
  i8142.showEndCardOnToolAppearTrigger = !!i8143[16]
  i8142.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i8143[17], i8142.onCtaFired)
  i8142.logWhenFired = !!i8143[18]
  return i8142
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i8144 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i8145 = data
  i8144.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8145[0], i8144.m_PersistentCalls)
  return i8144
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i8146 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i8147 = data
  var i8149 = i8147[0]
  var i8148 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i8149.length; i += 1) {
    i8148.add(request.d('UnityEngine.Events.PersistentCall', i8149[i + 0]));
  }
  i8146.m_Calls = i8148
  return i8146
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i8152 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i8153 = data
  request.r(i8153[0], i8153[1], 0, i8152, 'm_Target')
  i8152.m_TargetAssemblyTypeName = i8153[2]
  i8152.m_MethodName = i8153[3]
  i8152.m_Mode = i8153[4]
  i8152.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i8153[5], i8152.m_Arguments)
  i8152.m_CallState = i8153[6]
  return i8152
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i8154 = root || request.c( 'PlayableFadeCoverSettings' )
  var i8155 = data
  i8154.revealDelay = i8155[0]
  i8154.revealDuration = i8155[1]
  return i8154
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i8156 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i8157 = data
  request.r(i8157[0], i8157[1], 0, i8156, 'MainCamera')
  i8156.RenderType = i8157[2]
  request.r(i8157[3], i8157[4], 0, i8156, 'ScratchSurfaceSprite')
  i8156.ScratchSurfaceSpriteHasAlpha = !!i8157[5]
  i8156.MaskProgressCutOffValue = i8157[6]
  request.r(i8157[7], i8157[8], 0, i8156, 'EraseTexture')
  i8156.EraseTextureScale = new pc.Vec2( i8157[9], i8157[10] )
  i8156.InputEnabled = !!i8157[11]
  request.r(i8157[12], i8157[13], 0, i8156, 'Card')
  i8156.Mode = i8157[14]
  request.r(i8157[15], i8157[16], 0, i8156, 'Progress')
  request.r(i8157[17], i8157[18], 0, i8156, 'MeshCard')
  request.r(i8157[19], i8157[20], 0, i8156, 'SpriteCard')
  request.r(i8157[21], i8157[22], 0, i8156, 'ImageCard')
  request.r(i8157[23], i8157[24], 0, i8156, 'MaskShader')
  request.r(i8157[25], i8157[26], 0, i8156, 'BrushShader')
  request.r(i8157[27], i8157[28], 0, i8156, 'MaskProgressShader')
  request.r(i8157[29], i8157[30], 0, i8156, 'MaskProgressCutOffShader')
  return i8156
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i8158 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i8159 = data
  request.r(i8159[0], i8159[1], 0, i8158, 'MainCamera')
  request.r(i8159[2], i8159[3], 0, i8158, 'Surface')
  i8158.RenderTextureQuality = i8159[4]
  request.r(i8159[5], i8159[6], 0, i8158, 'Eraser')
  request.r(i8159[7], i8159[8], 0, i8158, 'Progress')
  request.r(i8159[9], i8159[10], 0, i8158, 'ScratchSurface')
  request.r(i8159[11], i8159[12], 0, i8158, 'RenderTexture')
  i8158.BrushScale = new pc.Vec2( i8159[13], i8159[14] )
  request.r(i8159[15], i8159[16], 0, i8158, 'ToolTip')
  i8158.InputEnabled = !!i8159[17]
  i8158.IsScratching = !!i8159[18]
  i8158.useChangingScale = !!i8159[19]
  i8158.useGivenBrushScale = !!i8159[20]
  i8158.canSpreadMask = !!i8159[21]
  i8158.shouldPaintHoles = !!i8159[22]
  i8158.canRotateTip = !!i8159[23]
  i8158._mode = i8159[24]
  return i8158
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i8160 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i8161 = data
  request.r(i8161[0], i8161[1], 0, i8160, 'Card')
  i8160.currentProgress = i8161[2]
  return i8160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i8162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i8163 = data
  request.r(i8163[0], i8163[1], 0, i8162, 'animatorController')
  request.r(i8163[2], i8163[3], 0, i8162, 'avatar')
  i8162.updateMode = i8163[4]
  i8162.hasTransformHierarchy = !!i8163[5]
  i8162.applyRootMotion = !!i8163[6]
  var i8165 = i8163[7]
  var i8164 = []
  for(var i = 0; i < i8165.length; i += 2) {
  request.r(i8165[i + 0], i8165[i + 1], 2, i8164, '')
  }
  i8162.humanBones = i8164
  i8162.enabled = !!i8163[8]
  return i8162
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i8168 = root || request.c( 'BD_AnimationHelper' )
  var i8169 = data
  i8168.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i8169[0], i8168.OnAnimationComplete)
  request.r(i8169[1], i8169[2], 0, i8168, 'sfxClip')
  return i8168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i8170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i8171 = data
  i8170.color = new pc.Color(i8171[0], i8171[1], i8171[2], i8171[3])
  request.r(i8171[4], i8171[5], 0, i8170, 'sprite')
  i8170.flipX = !!i8171[6]
  i8170.flipY = !!i8171[7]
  i8170.drawMode = i8171[8]
  i8170.size = new pc.Vec2( i8171[9], i8171[10] )
  i8170.tileMode = i8171[11]
  i8170.adaptiveModeThreshold = i8171[12]
  i8170.maskInteraction = i8171[13]
  i8170.spriteSortPoint = i8171[14]
  i8170.enabled = !!i8171[15]
  request.r(i8171[16], i8171[17], 0, i8170, 'sharedMaterial')
  var i8173 = i8171[18]
  var i8172 = []
  for(var i = 0; i < i8173.length; i += 2) {
  request.r(i8173[i + 0], i8173[i + 1], 2, i8172, '')
  }
  i8170.sharedMaterials = i8172
  i8170.receiveShadows = !!i8171[19]
  i8170.shadowCastingMode = i8171[20]
  i8170.sortingLayerID = i8171[21]
  i8170.sortingOrder = i8171[22]
  i8170.lightmapIndex = i8171[23]
  i8170.lightmapSceneIndex = i8171[24]
  i8170.lightmapScaleOffset = new pc.Vec4( i8171[25], i8171[26], i8171[27], i8171[28] )
  i8170.lightProbeUsage = i8171[29]
  i8170.reflectionProbeUsage = i8171[30]
  return i8170
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i8174 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i8175 = data
  request.r(i8175[0], i8175[1], 0, i8174, 'm_RootBone')
  var i8177 = i8175[2]
  var i8176 = []
  for(var i = 0; i < i8177.length; i += 2) {
  request.r(i8177[i + 0], i8177[i + 1], 2, i8176, '')
  }
  i8174.m_BoneTransforms = i8176
  i8174.m_AlwaysUpdate = !!i8175[3]
  i8174.m_AutoRebind = !!i8175[4]
  return i8174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i8178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i8179 = data
  var i8181 = i8179[0]
  var i8180 = []
  for(var i = 0; i < i8181.length; i += 3) {
    i8180.push( new pc.Vec3( i8181[i + 0], i8181[i + 1], i8181[i + 2] ) );
  }
  i8178.positions = i8180
  i8178.positionCount = i8179[1]
  i8178.time = i8179[2]
  i8178.startWidth = i8179[3]
  i8178.endWidth = i8179[4]
  i8178.widthMultiplier = i8179[5]
  i8178.autodestruct = !!i8179[6]
  i8178.emitting = !!i8179[7]
  i8178.numCornerVertices = i8179[8]
  i8178.numCapVertices = i8179[9]
  i8178.minVertexDistance = i8179[10]
  i8178.colorGradient = i8179[11] ? new pc.ColorGradient(i8179[11][0], i8179[11][1], i8179[11][2]) : null
  i8178.startColor = new pc.Color(i8179[12], i8179[13], i8179[14], i8179[15])
  i8178.endColor = new pc.Color(i8179[16], i8179[17], i8179[18], i8179[19])
  i8178.generateLightingData = !!i8179[20]
  i8178.textureMode = i8179[21]
  i8178.alignment = i8179[22]
  i8178.widthCurve = new pc.AnimationCurve( { keys_flow: i8179[23] } )
  i8178.enabled = !!i8179[24]
  request.r(i8179[25], i8179[26], 0, i8178, 'sharedMaterial')
  var i8183 = i8179[27]
  var i8182 = []
  for(var i = 0; i < i8183.length; i += 2) {
  request.r(i8183[i + 0], i8183[i + 1], 2, i8182, '')
  }
  i8178.sharedMaterials = i8182
  i8178.receiveShadows = !!i8179[28]
  i8178.shadowCastingMode = i8179[29]
  i8178.sortingLayerID = i8179[30]
  i8178.sortingOrder = i8179[31]
  i8178.lightmapIndex = i8179[32]
  i8178.lightmapSceneIndex = i8179[33]
  i8178.lightmapScaleOffset = new pc.Vec4( i8179[34], i8179[35], i8179[36], i8179[37] )
  i8178.lightProbeUsage = i8179[38]
  i8178.reflectionProbeUsage = i8179[39]
  return i8178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i8186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i8187 = data
  i8186.textureMode = i8187[0]
  i8186.alignment = i8187[1]
  i8186.widthCurve = new pc.AnimationCurve( { keys_flow: i8187[2] } )
  i8186.colorGradient = i8187[3] ? new pc.ColorGradient(i8187[3][0], i8187[3][1], i8187[3][2]) : null
  var i8189 = i8187[4]
  var i8188 = []
  for(var i = 0; i < i8189.length; i += 3) {
    i8188.push( new pc.Vec3( i8189[i + 0], i8189[i + 1], i8189[i + 2] ) );
  }
  i8186.positions = i8188
  i8186.positionCount = i8187[5]
  i8186.widthMultiplier = i8187[6]
  i8186.startWidth = i8187[7]
  i8186.endWidth = i8187[8]
  i8186.numCornerVertices = i8187[9]
  i8186.numCapVertices = i8187[10]
  i8186.useWorldSpace = !!i8187[11]
  i8186.loop = !!i8187[12]
  i8186.startColor = new pc.Color(i8187[13], i8187[14], i8187[15], i8187[16])
  i8186.endColor = new pc.Color(i8187[17], i8187[18], i8187[19], i8187[20])
  i8186.generateLightingData = !!i8187[21]
  i8186.enabled = !!i8187[22]
  request.r(i8187[23], i8187[24], 0, i8186, 'sharedMaterial')
  var i8191 = i8187[25]
  var i8190 = []
  for(var i = 0; i < i8191.length; i += 2) {
  request.r(i8191[i + 0], i8191[i + 1], 2, i8190, '')
  }
  i8186.sharedMaterials = i8190
  i8186.receiveShadows = !!i8187[26]
  i8186.shadowCastingMode = i8187[27]
  i8186.sortingLayerID = i8187[28]
  i8186.sortingOrder = i8187[29]
  i8186.lightmapIndex = i8187[30]
  i8186.lightmapSceneIndex = i8187[31]
  i8186.lightmapScaleOffset = new pc.Vec4( i8187[32], i8187[33], i8187[34], i8187[35] )
  i8186.lightProbeUsage = i8187[36]
  i8186.reflectionProbeUsage = i8187[37]
  return i8186
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i8192 = root || request.c( 'StaticFixedPipe' )
  var i8193 = data
  request.r(i8193[0], i8193[1], 0, i8192, 'lineRenderer')
  request.r(i8193[2], i8193[3], 0, i8192, 'toolTransform')
  request.r(i8193[4], i8193[5], 0, i8192, 'toolDirectionPoint')
  request.r(i8193[6], i8193[7], 0, i8192, 'fixedEndPoint')
  i8192.segmentCount = i8193[8]
  i8192.totalLength = i8193[9]
  i8192.constraintIterations = i8193[10]
  i8192.gravity = new pc.Vec3( i8193[11], i8193[12], i8193[13] )
  i8192.pipeWidth = i8193[14]
  return i8192
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i8194 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i8195 = data
  i8194.targetIsSelf = !!i8195[0]
  request.r(i8195[1], i8195[2], 0, i8194, 'targetGO')
  i8194.tweenTargetIsTargetGO = !!i8195[3]
  i8194.delay = i8195[4]
  i8194.duration = i8195[5]
  i8194.easeType = i8195[6]
  i8194.easeCurve = new pc.AnimationCurve( { keys_flow: i8195[7] } )
  i8194.loopType = i8195[8]
  i8194.loops = i8195[9]
  i8194.id = i8195[10]
  i8194.isRelative = !!i8195[11]
  i8194.isFrom = !!i8195[12]
  i8194.isIndependentUpdate = !!i8195[13]
  i8194.autoKill = !!i8195[14]
  i8194.autoGenerate = !!i8195[15]
  i8194.isActive = !!i8195[16]
  i8194.isValid = !!i8195[17]
  request.r(i8195[18], i8195[19], 0, i8194, 'target')
  i8194.animationType = i8195[20]
  i8194.targetType = i8195[21]
  i8194.forcedTargetType = i8195[22]
  i8194.autoPlay = !!i8195[23]
  i8194.useTargetAsV3 = !!i8195[24]
  i8194.endValueFloat = i8195[25]
  i8194.endValueV3 = new pc.Vec3( i8195[26], i8195[27], i8195[28] )
  i8194.endValueV2 = new pc.Vec2( i8195[29], i8195[30] )
  i8194.endValueColor = new pc.Color(i8195[31], i8195[32], i8195[33], i8195[34])
  i8194.endValueString = i8195[35]
  i8194.endValueRect = UnityEngine.Rect.MinMaxRect(i8195[36], i8195[37], i8195[38], i8195[39])
  request.r(i8195[40], i8195[41], 0, i8194, 'endValueTransform')
  i8194.optionalBool0 = !!i8195[42]
  i8194.optionalBool1 = !!i8195[43]
  i8194.optionalFloat0 = i8195[44]
  i8194.optionalInt0 = i8195[45]
  i8194.optionalRotationMode = i8195[46]
  i8194.optionalScrambleMode = i8195[47]
  i8194.optionalShakeRandomnessMode = i8195[48]
  i8194.optionalString = i8195[49]
  i8194.updateType = i8195[50]
  i8194.isSpeedBased = !!i8195[51]
  i8194.hasOnStart = !!i8195[52]
  i8194.hasOnPlay = !!i8195[53]
  i8194.hasOnUpdate = !!i8195[54]
  i8194.hasOnStepComplete = !!i8195[55]
  i8194.hasOnComplete = !!i8195[56]
  i8194.hasOnTweenCreated = !!i8195[57]
  i8194.hasOnRewind = !!i8195[58]
  i8194.onStart = request.d('UnityEngine.Events.UnityEvent', i8195[59], i8194.onStart)
  i8194.onPlay = request.d('UnityEngine.Events.UnityEvent', i8195[60], i8194.onPlay)
  i8194.onUpdate = request.d('UnityEngine.Events.UnityEvent', i8195[61], i8194.onUpdate)
  i8194.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i8195[62], i8194.onStepComplete)
  i8194.onComplete = request.d('UnityEngine.Events.UnityEvent', i8195[63], i8194.onComplete)
  i8194.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i8195[64], i8194.onTweenCreated)
  i8194.onRewind = request.d('UnityEngine.Events.UnityEvent', i8195[65], i8194.onRewind)
  return i8194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i8196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i8197 = data
  i8196.usedByComposite = !!i8197[0]
  i8196.autoTiling = !!i8197[1]
  i8196.size = new pc.Vec2( i8197[2], i8197[3] )
  i8196.edgeRadius = i8197[4]
  i8196.enabled = !!i8197[5]
  i8196.isTrigger = !!i8197[6]
  i8196.usedByEffector = !!i8197[7]
  i8196.density = i8197[8]
  i8196.offset = new pc.Vec2( i8197[9], i8197[10] )
  request.r(i8197[11], i8197[12], 0, i8196, 'material')
  return i8196
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i8198 = root || request.c( 'BasicDrag' )
  var i8199 = data
  i8198.canDrag = !!i8199[0]
  i8198.dragByDelta = !!i8199[1]
  i8198.isDragging = !!i8199[2]
  i8198.moveWithPointer = !!i8199[3]
  i8198.canReturn = !!i8199[4]
  i8198.jumpOnReturn = !!i8199[5]
  i8198.returnTime = i8199[6]
  i8198.Tool_Offset = new pc.Vec3( i8199[7], i8199[8], i8199[9] )
  i8198.canScaleIncrease = !!i8199[10]
  i8198.Self_ScaleNew = new pc.Vec3( i8199[11], i8199[12], i8199[13] )
  i8198.canRotateOnPick = !!i8199[14]
  i8198.startRot = new pc.Vec3( i8199[15], i8199[16], i8199[17] )
  i8198.newRot = new pc.Vec3( i8199[18], i8199[19], i8199[20] )
  var i8201 = i8199[21]
  var i8200 = []
  for(var i = 0; i < i8201.length; i += 2) {
  request.r(i8201[i + 0], i8201[i + 1], 2, i8200, '')
  }
  i8198.childSprite = i8200
  request.r(i8199[22], i8199[23], 0, i8198, 'ToolSelectClip')
  request.r(i8199[24], i8199[25], 0, i8198, 'ToolLoopClip')
  request.r(i8199[26], i8199[27], 0, i8198, 'thisParticles')
  i8198.onDragparticle = !!i8199[28]
  request.r(i8199[29], i8199[30], 0, i8198, 'dragParticles')
  request.r(i8199[31], i8199[32], 0, i8198, 'anim')
  i8198.startPos = new pc.Vec3( i8199[33], i8199[34], i8199[35] )
  i8198.startScale = new pc.Vec3( i8199[36], i8199[37], i8199[38] )
  i8198.Vibration = !!i8199[39]
  i8198.isPlacedCannotMove = !!i8199[40]
  i8198.isObjectMovingWhileDragging = !!i8199[41]
  i8198.OnMouseDownEvent = request.d('System.Action', i8199[42], i8198.OnMouseDownEvent)
  i8198.OnMouseUpEvent = request.d('System.Action', i8199[43], i8198.OnMouseUpEvent)
  i8198.ProgStartEvent = request.d('System.Action', i8199[44], i8198.ProgStartEvent)
  i8198.ProgEndEvent = request.d('System.Action', i8199[45], i8198.ProgEndEvent)
  i8198.canCallMouseUpWhenGamePaused = !!i8199[46]
  i8198.ClampX_L = i8199[47]
  i8198.ClampX_H = i8199[48]
  i8198.ClampY_L = i8199[49]
  i8198.ClampY_H = i8199[50]
  i8198.startOrder = i8199[51]
  i8198.dontResetItIsInCollider = !!i8199[52]
  request.r(i8199[53], i8199[54], 0, i8198, 'thisCollider')
  request.r(i8199[55], i8199[56], 0, i8198, 'thisSR')
  i8198.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i8199[57], i8198.OnMouseDownEventIndependentFromCanDrag)
  return i8198
}

Deserializers["System.Action"] = function (request, data, root) {
  var i8204 = root || request.c( 'System.Action' )
  var i8205 = data
  return i8204
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i8206 = root || request.c( 'BD_Clamp' )
  var i8207 = data
  i8206.ClampX_L = i8207[0]
  i8206.ClampX_H = i8207[1]
  i8206.ClampY_L = i8207[2]
  i8206.ClampY_H = i8207[3]
  return i8206
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i8208 = root || request.c( 'OutlinePulse' )
  var i8209 = data
  i8208.smallThickness = i8209[0]
  i8208.largeThickness = i8209[1]
  i8208.transitionSpeed = i8209[2]
  i8208.animationSpeed = i8209[3]
  i8208.isThickOutline = !!i8209[4]
  i8208.animate = !!i8209[5]
  i8208.hideSpriteOnly = !!i8209[6]
  return i8208
}

Deserializers["BD_ItemPick"] = function (request, data, root) {
  var i8210 = root || request.c( 'BD_ItemPick' )
  var i8211 = data
  request.r(i8211[0], i8211[1], 0, i8210, 'Tool')
  request.r(i8211[2], i8211[3], 0, i8210, 'Outline')
  request.r(i8211[4], i8211[5], 0, i8210, 'itemRend')
  request.r(i8211[6], i8211[7], 0, i8210, 'pick_sp')
  i8210.OnTap = request.d('UnityEngine.Events.UnityEvent', i8211[8], i8210.OnTap)
  i8210.OnComplete = request.d('UnityEngine.Events.UnityEvent', i8211[9], i8210.OnComplete)
  request.r(i8211[10], i8211[11], 0, i8210, 'Clip')
  i8210.minDragDistance = i8211[12]
  i8210.isTaped = !!i8211[13]
  return i8210
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i8212 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i8213 = data
  request.r(i8213[0], i8213[1], 0, i8212, 'm_ObjectArgument')
  i8212.m_ObjectArgumentAssemblyTypeName = i8213[2]
  i8212.m_IntArgument = i8213[3]
  i8212.m_FloatArgument = i8213[4]
  i8212.m_StringArgument = i8213[5]
  i8212.m_BoolArgument = !!i8213[6]
  return i8212
}

Deserializers["BD_Sticky"] = function (request, data, root) {
  var i8214 = root || request.c( 'BD_Sticky' )
  var i8215 = data
  request.r(i8215[0], i8215[1], 0, i8214, 'anim')
  i8214.isVerticlePull = !!i8215[2]
  request.r(i8215[3], i8215[4], 0, i8214, 'pickSfx')
  request.r(i8215[5], i8215[6], 0, i8214, 'pulledClip')
  request.r(i8215[7], i8215[8], 0, i8214, 'pullSource')
  i8214.OnComplete = request.d('UnityEngine.Events.UnityEvent', i8215[9], i8214.OnComplete)
  i8214.changeLayerPick = !!i8215[10]
  request.r(i8215[11], i8215[12], 0, i8214, 'sp_rendr')
  i8214.def_layerNo = i8215[13]
  i8214.tar_LayerNo = i8215[14]
  i8214.direction = i8215[15]
  i8214.dragThreshold = i8215[16]
  i8214.pullDistanceToFree = i8215[17]
  i8214.returnSpeed = i8215[18]
  i8214.resistance = i8215[19]
  var i8217 = i8215[20]
  var i8216 = []
  for(var i = 0; i < i8217.length; i += 2) {
  request.r(i8217[i + 0], i8217[i + 1], 2, i8216, '')
  }
  i8214.StartBones = i8216
  var i8219 = i8215[21]
  var i8218 = []
  for(var i = 0; i < i8219.length; i += 2) {
  request.r(i8219[i + 0], i8219[i + 1], 2, i8218, '')
  }
  i8214.EndBones = i8218
  request.r(i8215[22], i8215[23], 0, i8214, 'BonePivot')
  return i8214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i8220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i8221 = data
  request.r(i8221[0], i8221[1], 0, i8220, 'clip')
  request.r(i8221[2], i8221[3], 0, i8220, 'outputAudioMixerGroup')
  i8220.playOnAwake = !!i8221[4]
  i8220.loop = !!i8221[5]
  i8220.time = i8221[6]
  i8220.volume = i8221[7]
  i8220.pitch = i8221[8]
  i8220.enabled = !!i8221[9]
  return i8220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i8222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i8223 = data
  i8222.radius = i8223[0]
  i8222.enabled = !!i8223[1]
  i8222.isTrigger = !!i8223[2]
  i8222.usedByEffector = !!i8223[3]
  i8222.density = i8223[4]
  i8222.offset = new pc.Vec2( i8223[5], i8223[6] )
  request.r(i8223[7], i8223[8], 0, i8222, 'material')
  return i8222
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i8224 = root || request.c( 'PlayParticlesOnCollision' )
  var i8225 = data
  request.r(i8225[0], i8225[1], 0, i8224, 'Target')
  request.r(i8225[2], i8225[3], 0, i8224, 'ParticlePrefab')
  i8224.destroyIt = !!i8225[4]
  i8224.stayAtPlace = !!i8225[5]
  i8224.disableOnCollision = !!i8225[6]
  i8224.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i8225[7], i8224.OnCollisionEvent)
  return i8224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i8226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i8227 = data
  i8226.frontSortingLayerID = i8227[0]
  i8226.frontSortingOrder = i8227[1]
  i8226.backSortingLayerID = i8227[2]
  i8226.backSortingOrder = i8227[3]
  i8226.alphaCutoff = i8227[4]
  request.r(i8227[5], i8227[6], 0, i8226, 'sprite')
  i8226.tileMode = i8227[7]
  i8226.isCustomRangeActive = !!i8227[8]
  i8226.spriteSortPoint = i8227[9]
  i8226.enabled = !!i8227[10]
  request.r(i8227[11], i8227[12], 0, i8226, 'sharedMaterial')
  var i8229 = i8227[13]
  var i8228 = []
  for(var i = 0; i < i8229.length; i += 2) {
  request.r(i8229[i + 0], i8229[i + 1], 2, i8228, '')
  }
  i8226.sharedMaterials = i8228
  i8226.receiveShadows = !!i8227[14]
  i8226.shadowCastingMode = i8227[15]
  i8226.sortingLayerID = i8227[16]
  i8226.sortingOrder = i8227[17]
  i8226.lightmapIndex = i8227[18]
  i8226.lightmapSceneIndex = i8227[19]
  i8226.lightmapScaleOffset = new pc.Vec4( i8227[20], i8227[21], i8227[22], i8227[23] )
  i8226.lightProbeUsage = i8227[24]
  i8226.reflectionProbeUsage = i8227[25]
  return i8226
}

Deserializers["PlayTweenOnHit"] = function (request, data, root) {
  var i8230 = root || request.c( 'PlayTweenOnHit' )
  var i8231 = data
  i8230.isContinueous = !!i8231[0]
  request.r(i8231[1], i8231[2], 0, i8230, 'tool')
  var i8233 = i8231[3]
  var i8232 = []
  for(var i = 0; i < i8233.length; i += 2) {
  request.r(i8233[i + 0], i8233[i + 1], 2, i8232, '')
  }
  i8230.animsToPlay = i8232
  request.r(i8231[4], i8231[5], 0, i8230, 'tipTarget')
  return i8230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i8236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i8237 = data
  i8236.usedByComposite = !!i8237[0]
  i8236.autoTiling = !!i8237[1]
  var i8239 = i8237[2]
  var i8238 = []
  for(var i = 0; i < i8239.length; i += 1) {
  var i8241 = i8239[i + 0]
  var i8240 = []
  for(var i = 0; i < i8241.length; i += 2) {
    i8240.push( new pc.Vec2( i8241[i + 0], i8241[i + 1] ) );
  }
    i8238.push( i8240 );
  }
  i8236.points = i8238
  i8236.enabled = !!i8237[3]
  i8236.isTrigger = !!i8237[4]
  i8236.usedByEffector = !!i8237[5]
  i8236.density = i8237[6]
  i8236.offset = new pc.Vec2( i8237[7], i8237[8] )
  request.r(i8237[9], i8237[10], 0, i8236, 'material')
  return i8236
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i8248 = root || request.c( 'PlaySfxOnCollision' )
  var i8249 = data
  request.r(i8249[0], i8249[1], 0, i8248, 'Tip')
  i8248.Mode = i8249[2]
  request.r(i8249[3], i8249[4], 0, i8248, 'DragInput')
  request.r(i8249[5], i8249[6], 0, i8248, 'Source')
  i8248.startVol = i8249[7]
  i8248.targetVol = i8249[8]
  i8248.duration = i8249[9]
  request.r(i8249[10], i8249[11], 0, i8248, 'Particles')
  i8248.isDone = !!i8249[12]
  i8248.isInArea = !!i8249[13]
  i8248.isPlaying = !!i8249[14]
  return i8248
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i8250 = root || request.c( 'InteractableBones' )
  var i8251 = data
  request.r(i8251[0], i8251[1], 0, i8250, 'Tip')
  i8250.MoveAmount = i8251[2]
  i8250.MoveSpeed = i8251[3]
  i8250.ShakeSpeed = i8251[4]
  i8250.MovementThreshold = i8251[5]
  i8250.MoveX = !!i8251[6]
  i8250.MoveY = !!i8251[7]
  return i8250
}

Deserializers["WaypointFollower"] = function (request, data, root) {
  var i8252 = root || request.c( 'WaypointFollower' )
  var i8253 = data
  var i8255 = i8253[0]
  var i8254 = []
  for(var i = 0; i < i8255.length; i += 2) {
  request.r(i8255[i + 0], i8255[i + 1], 2, i8254, '')
  }
  i8252.waypoints = i8254
  i8252.speed = i8253[1]
  i8252.rotationSpeed = i8253[2]
  i8252.loop = !!i8253[3]
  i8252.reverse = !!i8253[4]
  i8252.canMove = !!i8253[5]
  request.r(i8253[6], i8253[7], 0, i8252, 'movingSfx')
  return i8252
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i8256 = root || request.c( 'BD_Action' )
  var i8257 = data
  i8256.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i8257[0], i8256.OnMouseDownEvent)
  i8256.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i8257[1], i8256.OnMouseUpEvent)
  i8256.setToolLayer = !!i8257[2]
  request.r(i8257[3], i8257[4], 0, i8256, 'tool_SP')
  return i8256
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i8258 = root || request.c( 'BD_CameraFollow' )
  var i8259 = data
  request.r(i8259[0], i8259[1], 0, i8258, 'Tool')
  request.r(i8259[2], i8259[3], 0, i8258, 'Pivot')
  i8258.FOV = i8259[4]
  i8258.Y_L = i8259[5]
  i8258.Y_H = i8259[6]
  i8258.X_L = i8259[7]
  i8258.X_R = i8259[8]
  i8258.startDelay = i8259[9]
  i8258.duration = i8259[10]
  return i8258
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i8260 = root || request.c( 'BD_ToolRotate' )
  var i8261 = data
  i8260.startDelay = i8261[0]
  request.r(i8261[1], i8261[2], 0, i8260, 'Tool')
  request.r(i8261[3], i8261[4], 0, i8260, 'Clamp')
  request.r(i8261[5], i8261[6], 0, i8260, 'Pivot')
  i8260.MinAngle = new pc.Vec3( i8261[7], i8261[8], i8261[9] )
  i8260.MaxAngle = new pc.Vec3( i8261[10], i8261[11], i8261[12] )
  i8260.rotationSpeed = i8261[13]
  return i8260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i8262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i8263 = data
  i8262.bodyType = i8263[0]
  request.r(i8263[1], i8263[2], 0, i8262, 'material')
  i8262.simulated = !!i8263[3]
  i8262.useAutoMass = !!i8263[4]
  i8262.mass = i8263[5]
  i8262.drag = i8263[6]
  i8262.angularDrag = i8263[7]
  i8262.gravityScale = i8263[8]
  i8262.collisionDetectionMode = i8263[9]
  i8262.sleepMode = i8263[10]
  i8262.constraints = i8263[11]
  return i8262
}

Deserializers["BugKill_Tip"] = function (request, data, root) {
  var i8264 = root || request.c( 'BugKill_Tip' )
  var i8265 = data
  var i8267 = i8265[0]
  var i8266 = []
  for(var i = 0; i < i8267.length; i += 2) {
  request.r(i8267[i + 0], i8267[i + 1], 2, i8266, '')
  }
  i8264.targets = i8266
  i8264.waypointFollower = !!i8265[1]
  i8264.fallSpeed = i8265[2]
  i8264.totalTargets = i8265[3]
  i8264.killCount = i8265[4]
  request.r(i8265[5], i8265[6], 0, i8264, 'bugKillSfx')
  i8264.OnComplete = request.d('UnityEngine.Events.UnityEvent', i8265[7], i8264.OnComplete)
  return i8264
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i8270 = root || request.c( 'BD_Progress' )
  var i8271 = data
  var i8273 = i8271[0]
  var i8272 = []
  for(var i = 0; i < i8273.length; i += 1) {
    i8272.push( request.d('ScratchData', i8273[i + 0]) );
  }
  i8270.AllScratches = i8272
  i8270.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i8271[1], i8270.OnScratchComplete)
  i8270.isProgDone = !!i8271[2]
  i8270.canCallComplete = !!i8271[3]
  i8270.CollectiveAppear = !!i8271[4]
  i8270.tipControl = !!i8271[5]
  i8270.progressControl = !!i8271[6]
  request.r(i8271[7], i8271[8], 0, i8270, 'thisDrag')
  i8270.CompleteEvent = request.d('System.Action', i8271[9], i8270.CompleteEvent)
  i8270.SubCompleteEvent = request.d('System.Action', i8271[10], i8270.SubCompleteEvent)
  return i8270
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i8276 = root || request.c( 'ScratchData' )
  var i8277 = data
  request.r(i8277[0], i8277[1], 0, i8276, 'ScratchManager')
  i8276.scratchLimit = i8277[2]
  i8276.isComplete = !!i8277[3]
  return i8276
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i8278 = root || request.c( 'BD_ProgressHelper' )
  var i8279 = data
  request.r(i8279[0], i8279[1], 0, i8278, 'BD_Progress')
  request.r(i8279[2], i8279[3], 0, i8278, 'fadeSprite')
  i8278.fadeIn = !!i8279[4]
  return i8278
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i8280 = root || request.c( 'ActionOnTap' )
  var i8281 = data
  i8280.OnTap = request.d('UnityEngine.Events.UnityEvent', i8281[0], i8280.OnTap)
  i8280.OnTapExtra = request.d('System.Action', i8281[1], i8280.OnTapExtra)
  return i8280
}

Deserializers["_2dxFX_Wave"] = function (request, data, root) {
  var i8282 = root || request.c( '_2dxFX_Wave' )
  var i8283 = data
  request.r(i8283[0], i8283[1], 0, i8282, 'ForceMaterial')
  i8282.ActiveChange = !!i8283[2]
  i8282._Alpha = i8283[3]
  i8282._OffsetX = i8283[4]
  i8282._OffsetY = i8283[5]
  i8282._DistanceX = i8283[6]
  i8282._DistanceY = i8283[7]
  i8282._WaveTimeX = i8283[8]
  i8282._WaveTimeY = i8283[9]
  i8282.AutoPlayWaveX = !!i8283[10]
  i8282.AutoPlaySpeedX = i8283[11]
  i8282.AutoPlayWaveY = !!i8283[12]
  i8282.AutoPlaySpeedY = i8283[13]
  i8282.AutoRandom = !!i8283[14]
  i8282.AutoRandomRange = i8283[15]
  i8282.ShaderChange = i8283[16]
  return i8282
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i8284 = root || request.c( 'BD_SpriteChange' )
  var i8285 = data
  request.r(i8285[0], i8285[1], 0, i8284, 'BD')
  request.r(i8285[2], i8285[3], 0, i8284, 'SR')
  request.r(i8285[4], i8285[5], 0, i8284, 'Default')
  request.r(i8285[6], i8285[7], 0, i8284, 'Picked')
  i8284.resetOnRelease = !!i8285[8]
  return i8284
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i8286 = root || request.c( 'BD_AnimatorDrag' )
  var i8287 = data
  request.r(i8287[0], i8287[1], 0, i8286, 'BD')
  request.r(i8287[2], i8287[3], 0, i8286, 'anim')
  request.r(i8287[4], i8287[5], 0, i8286, 'Source')
  i8286.Vibration = !!i8287[6]
  i8286.isCompletable = !!i8287[7]
  i8286.completionThreshold = i8287[8]
  i8286.OnComplete = request.d('UnityEngine.Events.UnityEvent', i8287[9], i8286.OnComplete)
  return i8286
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i8288 = root || request.c( 'PlaceItem' )
  var i8289 = data
  request.r(i8289[0], i8289[1], 0, i8288, 'thisDrag')
  request.r(i8289[2], i8289[3], 0, i8288, 'Target')
  request.r(i8289[4], i8289[5], 0, i8288, 'Clip')
  i8288.jumpOnPlace = !!i8289[6]
  i8288.jumpHeight = i8289[7]
  i8288.jumpDuration = i8289[8]
  i8288.settleDuration = i8289[9]
  i8288.isPlaced = !!i8289[10]
  i8288.isInsideCollider = !!i8289[11]
  i8288.changeScaleOnPlace = !!i8289[12]
  request.r(i8289[13], i8289[14], 0, i8288, 'item')
  i8288.newScaleOnPlace = new pc.Vec3( i8289[15], i8289[16], i8289[17] )
  i8288.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i8289[18], i8288.OnPlaced)
  return i8288
}

Deserializers["BD_Audio"] = function (request, data, root) {
  var i8290 = root || request.c( 'BD_Audio' )
  var i8291 = data
  request.r(i8291[0], i8291[1], 0, i8290, 'BD')
  request.r(i8291[2], i8291[3], 0, i8290, 'Source')
  i8290.shouldRestart = !!i8291[4]
  i8290.startVol = i8291[5]
  i8290.targetVol = i8291[6]
  i8290.duration = i8291[7]
  i8290.startDelay = i8291[8]
  return i8290
}

Deserializers["Level1_HairAnim"] = function (request, data, root) {
  var i8292 = root || request.c( 'Level1_HairAnim' )
  var i8293 = data
  i8292.holdDuration = i8293[0]
  request.r(i8293[1], i8293[2], 0, i8292, 'targetSprite')
  i8292.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i8293[3], i8292.onHoldComplete)
  i8292.isHolding = !!i8293[4]
  request.r(i8293[5], i8293[6], 0, i8292, 'targetObj')
  request.r(i8293[7], i8293[8], 0, i8292, 'thisTool')
  request.r(i8293[9], i8293[10], 0, i8292, 'thisToolTip')
  var i8295 = i8293[11]
  var i8294 = []
  for(var i = 0; i < i8295.length; i += 2) {
  request.r(i8295[i + 0], i8295[i + 1], 2, i8294, '')
  }
  i8292.hairsAnim = i8294
  var i8297 = i8293[12]
  var i8296 = []
  for(var i = 0; i < i8297.length; i += 2) {
  request.r(i8297[i + 0], i8297[i + 1], 2, i8296, '')
  }
  i8292.hairsRend = i8296
  i8292.hairsRendFadeThreshold = i8293[13]
  request.r(i8293[14], i8293[15], 0, i8292, 'wetHairRend')
  request.r(i8293[16], i8293[17], 0, i8292, 'dryHairRend')
  request.r(i8293[18], i8293[19], 0, i8292, 'dryHairRendBack')
  i8292.hairAnimStopDuration = i8293[20]
  i8292.hairAnimResumeDuration = i8293[21]
  return i8292
}

Deserializers["BD_TapandHold"] = function (request, data, root) {
  var i8298 = root || request.c( 'BD_TapandHold' )
  var i8299 = data
  i8298.holdDuration = i8299[0]
  i8298.updateVisuals = !!i8299[1]
  request.r(i8299[2], i8299[3], 0, i8298, 'targetSprite')
  i8298.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i8299[4], i8298.onHoldComplete)
  i8298.onCompleteProgress = request.d('UnityEngine.Events.UnityEvent', i8299[5], i8298.onCompleteProgress)
  i8298.currentProgress = i8299[6]
  i8298.isHolding = !!i8299[7]
  request.r(i8299[8], i8299[9], 0, i8298, 'targetObj')
  request.r(i8299[10], i8299[11], 0, i8298, 'thisTool')
  request.r(i8299[12], i8299[13], 0, i8298, 'thisToolTip')
  return i8298
}

Deserializers["TapandHold_Simple"] = function (request, data, root) {
  var i8300 = root || request.c( 'TapandHold_Simple' )
  var i8301 = data
  request.r(i8301[0], i8301[1], 0, i8300, 'actionSfx')
  i8300.holdDuration = i8301[2]
  i8300.dragThreshold = i8301[3]
  i8300.fadeInOnHold = !!i8301[4]
  i8300.fadeOutOnRelease = !!i8301[5]
  request.r(i8301[6], i8301[7], 0, i8300, 'targetSprite')
  i8300.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i8301[8], i8300.onHoldComplete)
  i8300.currentProgress = i8301[9]
  i8300.isHolding = !!i8301[10]
  i8300.isCompleted = !!i8301[11]
  request.r(i8301[12], i8301[13], 0, i8300, 'thisTool')
  return i8300
}

Deserializers["DraggableBrush"] = function (request, data, root) {
  var i8302 = root || request.c( 'DraggableBrush' )
  var i8303 = data
  request.r(i8303[0], i8303[1], 0, i8302, 'BD_Progress')
  var i8305 = i8303[2]
  var i8304 = new (System.Collections.Generic.List$1(Bridge.ns('DraggableBrush+Step')))
  for(var i = 0; i < i8305.length; i += 1) {
    i8304.add(request.d('DraggableBrush+Step', i8305[i + 0]));
  }
  i8302.movementSteps = i8304
  i8302.snapSensitivity = i8303[3]
  i8302.OnComplete = request.d('UnityEngine.Events.UnityEvent', i8303[4], i8302.OnComplete)
  return i8302
}

Deserializers["DraggableBrush+Step"] = function (request, data, root) {
  var i8308 = root || request.c( 'DraggableBrush+Step' )
  var i8309 = data
  i8308.stepName = i8309[0]
  i8308.startX = i8309[1]
  i8308.startY = i8309[2]
  i8308.endY = i8309[3]
  return i8308
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i8310 = root || request.c( 'SpriteButton' )
  var i8311 = data
  i8310.isLocked = !!i8311[0]
  i8310.lockMsg = i8311[1]
  i8310.onClick = request.d('UnityEngine.Events.UnityEvent', i8311[2], i8310.onClick)
  i8310.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i8311[3], i8310.onLockedClick)
  i8310.isLevelBtnSfx = !!i8311[4]
  request.r(i8311[5], i8311[6], 0, i8310, 'pivot')
  i8310.reductionChange = i8311[7]
  i8310.animationDuration = i8311[8]
  return i8310
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i8312 = root || request.c( 'DestroyObj' )
  var i8313 = data
  i8312.destroyDelay = i8313[0]
  return i8312
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i8314 = root || request.c( 'MenuLevel' )
  var i8315 = data
  request.r(i8315[0], i8315[1], 0, i8314, 'menuLevelBtnUpdate')
  var i8317 = i8315[2]
  var i8316 = []
  for(var i = 0; i < i8317.length; i += 1) {
    i8316.push( request.d('MenuLevelData', i8317[i + 0]) );
  }
  i8314.AllSteps = i8316
  request.r(i8315[3], i8315[4], 0, i8314, 'buttonparent')
  var i8319 = i8315[5]
  var i8318 = []
  for(var i = 0; i < i8319.length; i += 2) {
  request.r(i8319[i + 0], i8319[i + 1], 2, i8318, '')
  }
  i8314.BtnsDotweenAnims = i8318
  var i8321 = i8315[6]
  var i8320 = []
  for(var i = 0; i < i8321.length; i += 2) {
  request.r(i8321[i + 0], i8321[i + 1], 2, i8320, '')
  }
  i8314.BtnsCols = i8320
  request.r(i8315[7], i8315[8], 0, i8314, 'mainGameView')
  request.r(i8315[9], i8315[10], 0, i8314, 'Storyboard')
  request.r(i8315[11], i8315[12], 0, i8314, 'BgMusic')
  request.r(i8315[13], i8315[14], 0, i8314, 'BgStoryMusic')
  request.r(i8315[15], i8315[16], 0, i8314, 'Hand_Tut1')
  var i8323 = i8315[17]
  var i8322 = []
  for(var i = 0; i < i8323.length; i += 2) {
  request.r(i8323[i + 0], i8323[i + 1], 2, i8322, '')
  }
  i8314.itemEnable_Onstart = i8322
  var i8325 = i8315[18]
  var i8324 = []
  for(var i = 0; i < i8325.length; i += 2) {
  request.r(i8325[i + 0], i8325[i + 1], 2, i8324, '')
  }
  i8314.itemDisable_Onstart = i8324
  var i8327 = i8315[19]
  var i8326 = []
  for(var i = 0; i < i8327.length; i += 2) {
  request.r(i8327[i + 0], i8327[i + 1], 2, i8326, '')
  }
  i8314.itemEnable_Oncomplete = i8326
  var i8329 = i8315[20]
  var i8328 = []
  for(var i = 0; i < i8329.length; i += 2) {
  request.r(i8329[i + 0], i8329[i + 1], 2, i8328, '')
  }
  i8314.itemDisable_Oncomplete = i8328
  i8314.levelKey = i8315[21]
  i8314.revealDirtyHoldTime = i8315[22]
  return i8314
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i8332 = root || request.c( 'MenuLevelData' )
  var i8333 = data
  i8332.Name = i8333[0]
  request.r(i8333[1], i8333[2], 0, i8332, 'UiBtn')
  request.r(i8333[3], i8333[4], 0, i8332, 'TickBtn')
  request.r(i8333[5], i8333[6], 0, i8332, 'ExclamationIcon')
  var i8335 = i8333[7]
  var i8334 = []
  for(var i = 0; i < i8335.length; i += 2) {
  request.r(i8335[i + 0], i8335[i + 1], 2, i8334, '')
  }
  i8332.Item_Dirty = i8334
  var i8337 = i8333[8]
  var i8336 = []
  for(var i = 0; i < i8337.length; i += 2) {
  request.r(i8337[i + 0], i8337[i + 1], 2, i8336, '')
  }
  i8332.Item_Clean = i8336
  request.r(i8333[9], i8333[10], 0, i8332, 'CompleteParticle')
  return i8332
}

Deserializers["IntroLevelAnim"] = function (request, data, root) {
  var i8340 = root || request.c( 'IntroLevelAnim' )
  var i8341 = data
  request.r(i8341[0], i8341[1], 0, i8340, 'menuLevel')
  i8340.lvlkey = i8341[2]
  request.r(i8341[3], i8341[4], 0, i8340, 'DressChangeObj')
  request.r(i8341[5], i8341[6], 0, i8340, 'DressChangeClip')
  return i8340
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i8342 = root || request.c( 'Level_PoseController' )
  var i8343 = data
  var i8345 = i8343[0]
  var i8344 = []
  for(var i = 0; i < i8345.length; i += 2) {
  request.r(i8345[i + 0], i8345[i + 1], 2, i8344, '')
  }
  i8342.itemToShow = i8344
  var i8347 = i8343[1]
  var i8346 = []
  for(var i = 0; i < i8347.length; i += 2) {
  request.r(i8347[i + 0], i8347[i + 1], 2, i8346, '')
  }
  i8342.itemToHide = i8346
  i8342.stepTarget = i8343[2]
  return i8342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i8348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i8349 = data
  i8348.name = i8349[0]
  i8348.atlasId = i8349[1]
  i8348.mipmapCount = i8349[2]
  i8348.hdr = !!i8349[3]
  i8348.size = i8349[4]
  i8348.anisoLevel = i8349[5]
  i8348.filterMode = i8349[6]
  var i8351 = i8349[7]
  var i8350 = []
  for(var i = 0; i < i8351.length; i += 4) {
    i8350.push( UnityEngine.Rect.MinMaxRect(i8351[i + 0], i8351[i + 1], i8351[i + 2], i8351[i + 3]) );
  }
  i8348.rects = i8350
  i8348.wrapU = i8349[8]
  i8348.wrapV = i8349[9]
  return i8348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i8354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i8355 = data
  i8354.name = i8355[0]
  i8354.index = i8355[1]
  i8354.startup = !!i8355[2]
  return i8354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i8356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i8357 = data
  i8356.aspect = i8357[0]
  i8356.orthographic = !!i8357[1]
  i8356.orthographicSize = i8357[2]
  i8356.backgroundColor = new pc.Color(i8357[3], i8357[4], i8357[5], i8357[6])
  i8356.nearClipPlane = i8357[7]
  i8356.farClipPlane = i8357[8]
  i8356.fieldOfView = i8357[9]
  i8356.depth = i8357[10]
  i8356.clearFlags = i8357[11]
  i8356.cullingMask = i8357[12]
  i8356.rect = i8357[13]
  request.r(i8357[14], i8357[15], 0, i8356, 'targetTexture')
  i8356.usePhysicalProperties = !!i8357[16]
  i8356.focalLength = i8357[17]
  i8356.sensorSize = new pc.Vec2( i8357[18], i8357[19] )
  i8356.lensShift = new pc.Vec2( i8357[20], i8357[21] )
  i8356.gateFit = i8357[22]
  i8356.commandBufferCount = i8357[23]
  i8356.cameraType = i8357[24]
  i8356.enabled = !!i8357[25]
  return i8356
}

Deserializers["CameraController"] = function (request, data, root) {
  var i8358 = root || request.c( 'CameraController' )
  var i8359 = data
  request.r(i8359[0], i8359[1], 0, i8358, 'cam')
  i8358.defaultPosition = new pc.Vec3( i8359[2], i8359[3], i8359[4] )
  i8358.defaultSize = i8359[5]
  i8358.defaultFOV = i8359[6]
  i8358.defaultDuration = i8359[7]
  i8358.defaultEase = i8359[8]
  return i8358
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i8360 = root || request.c( 'MusicSource' )
  var i8361 = data
  request.r(i8361[0], i8361[1], 0, i8360, 'source')
  return i8360
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i8362 = root || request.c( 'UI_Manager' )
  var i8363 = data
  i8362.levelCompleted = !!i8363[0]
  i8362.isPauseActive = !!i8363[1]
  i8362.loadIndex = i8363[2]
  request.r(i8363[3], i8363[4], 0, i8362, 'removeAdsButton')
  request.r(i8363[5], i8363[6], 0, i8362, 'pauseButton')
  request.r(i8363[7], i8363[8], 0, i8362, 'Fade_Img')
  request.r(i8363[9], i8363[10], 0, i8362, 'TopBarAnim')
  request.r(i8363[11], i8363[12], 0, i8362, 'MainPanel')
  request.r(i8363[13], i8363[14], 0, i8362, 'PausePanel')
  request.r(i8363[15], i8363[16], 0, i8362, 'PausePopUp')
  request.r(i8363[17], i8363[18], 0, i8362, 'PauseCanvasGroup')
  request.r(i8363[19], i8363[20], 0, i8362, 'RateUsPanel')
  request.r(i8363[21], i8363[22], 0, i8362, 'RateUsPopUp')
  request.r(i8363[23], i8363[24], 0, i8362, 'RemoveAdsPanel')
  request.r(i8363[25], i8363[26], 0, i8362, 'RemoveAdsPopUp')
  request.r(i8363[27], i8363[28], 0, i8362, 'RemoveAdsCanvasGroup')
  var i8365 = i8363[29]
  var i8364 = []
  for(var i = 0; i < i8365.length; i += 2) {
  request.r(i8365[i + 0], i8365[i + 1], 2, i8364, '')
  }
  i8362.RemoveAdsAnims = i8364
  request.r(i8363[30], i8363[31], 0, i8362, 'CompletePanel')
  request.r(i8363[32], i8363[33], 0, i8362, 'LevelIcon')
  request.r(i8363[34], i8363[35], 0, i8362, 'CompleteParticles')
  request.r(i8363[36], i8363[37], 0, i8362, 'progressBar')
  request.r(i8363[38], i8363[39], 0, i8362, 'progressText')
  request.r(i8363[40], i8363[41], 0, i8362, 'toolIcon1')
  request.r(i8363[42], i8363[43], 0, i8362, 'toolIcon2')
  request.r(i8363[44], i8363[45], 0, i8362, 'toolIcon3')
  request.r(i8363[46], i8363[47], 0, i8362, 'target1')
  request.r(i8363[48], i8363[49], 0, i8362, 'target2')
  i8362.toolMoveDuration = i8363[50]
  i8362.currentIndex = i8363[51]
  var i8367 = i8363[52]
  var i8366 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i8367.length; i += 2) {
  request.r(i8367[i + 0], i8367[i + 1], 1, i8366, '')
  }
  i8362.allTools = i8366
  request.r(i8363[53], i8363[54], 0, i8362, 'clockProgress')
  request.r(i8363[55], i8363[56], 0, i8362, 'clockProgressFill')
  request.r(i8363[57], i8363[58], 0, i8362, 'clockAudio')
  i8362.moveDistance = i8363[59]
  i8362.animationDuration = i8363[60]
  i8362.greyBgChildName = i8363[61]
  i8362.pushOffset = i8363[62]
  return i8362
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i8368 = root || request.c( 'GameManagerPlayable' )
  var i8369 = data
  request.r(i8369[0], i8369[1], 0, i8368, 'endParticles')
  request.r(i8369[2], i8369[3], 0, i8368, 'stepCompleteParticles')
  request.r(i8369[4], i8369[5], 0, i8368, 'DefaultMat')
  request.r(i8369[6], i8369[7], 0, i8368, 'BG_Music')
  request.r(i8369[8], i8369[9], 0, i8368, 'restoreEffectShader')
  request.r(i8369[10], i8369[11], 0, i8368, 'stickerEffectShader')
  i8368.isComplete = !!i8369[12]
  i8368.isPaused = !!i8369[13]
  request.r(i8369[14], i8369[15], 0, i8368, 'currentLevel')
  i8368.startLevelOnPlay = !!i8369[16]
  i8368.currentLevelNo = i8369[17]
  return i8368
}

Deserializers["AudioController"] = function (request, data, root) {
  var i8370 = root || request.c( 'AudioController' )
  var i8371 = data
  request.r(i8371[0], i8371[1], 0, i8370, 'MainMixer')
  request.r(i8371[2], i8371[3], 0, i8370, 'UiClick')
  request.r(i8371[4], i8371[5], 0, i8370, 'UiClickSource')
  var i8373 = i8371[6]
  var i8372 = []
  for(var i = 0; i < i8373.length; i += 2) {
  request.r(i8373[i + 0], i8373[i + 1], 2, i8372, '')
  }
  i8370.SfxSources = i8372
  var i8375 = i8371[7]
  var i8374 = []
  for(var i = 0; i < i8375.length; i += 2) {
  request.r(i8375[i + 0], i8375[i + 1], 2, i8374, '')
  }
  i8370.AllClips = i8374
  return i8370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i8378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i8379 = data
  i8378.pivot = new pc.Vec2( i8379[0], i8379[1] )
  i8378.anchorMin = new pc.Vec2( i8379[2], i8379[3] )
  i8378.anchorMax = new pc.Vec2( i8379[4], i8379[5] )
  i8378.sizeDelta = new pc.Vec2( i8379[6], i8379[7] )
  i8378.anchoredPosition3D = new pc.Vec3( i8379[8], i8379[9], i8379[10] )
  i8378.rotation = new pc.Quat(i8379[11], i8379[12], i8379[13], i8379[14])
  i8378.scale = new pc.Vec3( i8379[15], i8379[16], i8379[17] )
  return i8378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i8380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i8381 = data
  i8380.planeDistance = i8381[0]
  i8380.referencePixelsPerUnit = i8381[1]
  i8380.isFallbackOverlay = !!i8381[2]
  i8380.renderMode = i8381[3]
  i8380.renderOrder = i8381[4]
  i8380.sortingLayerName = i8381[5]
  i8380.sortingOrder = i8381[6]
  i8380.scaleFactor = i8381[7]
  request.r(i8381[8], i8381[9], 0, i8380, 'worldCamera')
  i8380.overrideSorting = !!i8381[10]
  i8380.pixelPerfect = !!i8381[11]
  i8380.targetDisplay = i8381[12]
  i8380.overridePixelPerfect = !!i8381[13]
  i8380.enabled = !!i8381[14]
  return i8380
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i8382 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i8383 = data
  i8382.m_UiScaleMode = i8383[0]
  i8382.m_ReferencePixelsPerUnit = i8383[1]
  i8382.m_ScaleFactor = i8383[2]
  i8382.m_ReferenceResolution = new pc.Vec2( i8383[3], i8383[4] )
  i8382.m_ScreenMatchMode = i8383[5]
  i8382.m_MatchWidthOrHeight = i8383[6]
  i8382.m_PhysicalUnit = i8383[7]
  i8382.m_FallbackScreenDPI = i8383[8]
  i8382.m_DefaultSpriteDPI = i8383[9]
  i8382.m_DynamicPixelsPerUnit = i8383[10]
  i8382.m_PresetInfoIsWorld = !!i8383[11]
  return i8382
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i8384 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i8385 = data
  i8384.m_IgnoreReversedGraphics = !!i8385[0]
  i8384.m_BlockingObjects = i8385[1]
  i8384.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i8385[2] )
  return i8384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i8386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i8387 = data
  i8386.cullTransparentMesh = !!i8387[0]
  return i8386
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i8388 = root || request.c( 'UnityEngine.UI.Image' )
  var i8389 = data
  request.r(i8389[0], i8389[1], 0, i8388, 'm_Sprite')
  i8388.m_Type = i8389[2]
  i8388.m_PreserveAspect = !!i8389[3]
  i8388.m_FillCenter = !!i8389[4]
  i8388.m_FillMethod = i8389[5]
  i8388.m_FillAmount = i8389[6]
  i8388.m_FillClockwise = !!i8389[7]
  i8388.m_FillOrigin = i8389[8]
  i8388.m_UseSpriteMesh = !!i8389[9]
  i8388.m_PixelsPerUnitMultiplier = i8389[10]
  request.r(i8389[11], i8389[12], 0, i8388, 'm_Material')
  i8388.m_Maskable = !!i8389[13]
  i8388.m_Color = new pc.Color(i8389[14], i8389[15], i8389[16], i8389[17])
  i8388.m_RaycastTarget = !!i8389[18]
  i8388.m_RaycastPadding = new pc.Vec4( i8389[19], i8389[20], i8389[21], i8389[22] )
  return i8388
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i8390 = root || request.c( 'UnityEngine.UI.Text' )
  var i8391 = data
  i8390.m_FontData = request.d('UnityEngine.UI.FontData', i8391[0], i8390.m_FontData)
  i8390.m_Text = i8391[1]
  request.r(i8391[2], i8391[3], 0, i8390, 'm_Material')
  i8390.m_Maskable = !!i8391[4]
  i8390.m_Color = new pc.Color(i8391[5], i8391[6], i8391[7], i8391[8])
  i8390.m_RaycastTarget = !!i8391[9]
  i8390.m_RaycastPadding = new pc.Vec4( i8391[10], i8391[11], i8391[12], i8391[13] )
  return i8390
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i8392 = root || request.c( 'UnityEngine.UI.FontData' )
  var i8393 = data
  request.r(i8393[0], i8393[1], 0, i8392, 'm_Font')
  i8392.m_FontSize = i8393[2]
  i8392.m_FontStyle = i8393[3]
  i8392.m_BestFit = !!i8393[4]
  i8392.m_MinSize = i8393[5]
  i8392.m_MaxSize = i8393[6]
  i8392.m_Alignment = i8393[7]
  i8392.m_AlignByGeometry = !!i8393[8]
  i8392.m_RichText = !!i8393[9]
  i8392.m_HorizontalOverflow = i8393[10]
  i8392.m_VerticalOverflow = i8393[11]
  i8392.m_LineSpacing = i8393[12]
  return i8392
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i8394 = root || request.c( 'UnityEngine.UI.Button' )
  var i8395 = data
  i8394.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i8395[0], i8394.m_OnClick)
  i8394.m_Navigation = request.d('UnityEngine.UI.Navigation', i8395[1], i8394.m_Navigation)
  i8394.m_Transition = i8395[2]
  i8394.m_Colors = request.d('UnityEngine.UI.ColorBlock', i8395[3], i8394.m_Colors)
  i8394.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i8395[4], i8394.m_SpriteState)
  i8394.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i8395[5], i8394.m_AnimationTriggers)
  i8394.m_Interactable = !!i8395[6]
  request.r(i8395[7], i8395[8], 0, i8394, 'm_TargetGraphic')
  return i8394
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i8396 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i8397 = data
  i8396.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8397[0], i8396.m_PersistentCalls)
  return i8396
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i8398 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i8399 = data
  i8398.m_Mode = i8399[0]
  i8398.m_WrapAround = !!i8399[1]
  request.r(i8399[2], i8399[3], 0, i8398, 'm_SelectOnUp')
  request.r(i8399[4], i8399[5], 0, i8398, 'm_SelectOnDown')
  request.r(i8399[6], i8399[7], 0, i8398, 'm_SelectOnLeft')
  request.r(i8399[8], i8399[9], 0, i8398, 'm_SelectOnRight')
  return i8398
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i8400 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i8401 = data
  i8400.m_NormalColor = new pc.Color(i8401[0], i8401[1], i8401[2], i8401[3])
  i8400.m_HighlightedColor = new pc.Color(i8401[4], i8401[5], i8401[6], i8401[7])
  i8400.m_PressedColor = new pc.Color(i8401[8], i8401[9], i8401[10], i8401[11])
  i8400.m_SelectedColor = new pc.Color(i8401[12], i8401[13], i8401[14], i8401[15])
  i8400.m_DisabledColor = new pc.Color(i8401[16], i8401[17], i8401[18], i8401[19])
  i8400.m_ColorMultiplier = i8401[20]
  i8400.m_FadeDuration = i8401[21]
  return i8400
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i8402 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i8403 = data
  request.r(i8403[0], i8403[1], 0, i8402, 'm_HighlightedSprite')
  request.r(i8403[2], i8403[3], 0, i8402, 'm_PressedSprite')
  request.r(i8403[4], i8403[5], 0, i8402, 'm_SelectedSprite')
  request.r(i8403[6], i8403[7], 0, i8402, 'm_DisabledSprite')
  return i8402
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i8404 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i8405 = data
  i8404.m_NormalTrigger = i8405[0]
  i8404.m_HighlightedTrigger = i8405[1]
  i8404.m_PressedTrigger = i8405[2]
  i8404.m_SelectedTrigger = i8405[3]
  i8404.m_DisabledTrigger = i8405[4]
  return i8404
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i8406 = root || request.c( 'PlayableHudRuntime' )
  var i8407 = data
  return i8406
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i8408 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i8409 = data
  request.r(i8409[0], i8409[1], 0, i8408, 'm_FirstSelected')
  i8408.m_sendNavigationEvents = !!i8409[2]
  i8408.m_DragThreshold = i8409[3]
  return i8408
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i8410 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i8411 = data
  i8410.m_HorizontalAxis = i8411[0]
  i8410.m_VerticalAxis = i8411[1]
  i8410.m_SubmitButton = i8411[2]
  i8410.m_CancelButton = i8411[3]
  i8410.m_InputActionsPerSecond = i8411[4]
  i8410.m_RepeatDelay = i8411[5]
  i8410.m_ForceModuleActive = !!i8411[6]
  i8410.m_SendPointerHoverToParent = !!i8411[7]
  return i8410
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i8412 = root || request.c( 'PlayableRouter' )
  var i8413 = data
  var i8415 = i8413[0]
  var i8414 = []
  for(var i = 0; i < i8415.length; i += 2) {
  request.r(i8415[i + 0], i8415[i + 1], 2, i8414, '')
  }
  i8412.menuObjects = i8414
  var i8417 = i8413[1]
  var i8416 = []
  for(var i = 0; i < i8417.length; i += 2) {
  request.r(i8417[i + 0], i8417[i + 1], 2, i8416, '')
  }
  i8412.gameplayObjects = i8416
  var i8419 = i8413[2]
  var i8418 = []
  for(var i = 0; i < i8419.length; i += 1) {
    i8418.push( request.d('PlayableRouter+SubLevelSlot', i8419[i + 0]) );
  }
  i8412.subLevels = i8418
  i8412.fadeDuration = i8413[3]
  i8412.lockedMessage = i8413[4]
  i8412.lockedTapsToCTA = i8413[5]
  return i8412
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i8422 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i8423 = data
  request.r(i8423[0], i8423[1], 0, i8422, 'button')
  request.r(i8423[2], i8423[3], 0, i8422, 'level')
  return i8422
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i8424 = root || request.c( 'ToastManager' )
  var i8425 = data
  request.r(i8425[0], i8425[1], 0, i8424, 'toastPanel')
  request.r(i8425[2], i8425[3], 0, i8424, 'toastPopup')
  request.r(i8425[4], i8425[5], 0, i8424, 'canvasGroup')
  request.r(i8425[6], i8425[7], 0, i8424, 'toastText')
  i8424.startY = i8425[8]
  i8424.visibleY = i8425[9]
  i8424.endY = i8425[10]
  i8424.animationTime = i8425[11]
  i8424.animationTimeUp = i8425[12]
  return i8424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i8426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i8427 = data
  i8426.m_Alpha = i8427[0]
  i8426.m_Interactable = !!i8427[1]
  i8426.m_BlocksRaycasts = !!i8427[2]
  i8426.m_IgnoreParentGroups = !!i8427[3]
  i8426.enabled = !!i8427[4]
  return i8426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i8428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i8429 = data
  i8428.ambientIntensity = i8429[0]
  i8428.reflectionIntensity = i8429[1]
  i8428.ambientMode = i8429[2]
  i8428.ambientLight = new pc.Color(i8429[3], i8429[4], i8429[5], i8429[6])
  i8428.ambientSkyColor = new pc.Color(i8429[7], i8429[8], i8429[9], i8429[10])
  i8428.ambientGroundColor = new pc.Color(i8429[11], i8429[12], i8429[13], i8429[14])
  i8428.ambientEquatorColor = new pc.Color(i8429[15], i8429[16], i8429[17], i8429[18])
  i8428.fogColor = new pc.Color(i8429[19], i8429[20], i8429[21], i8429[22])
  i8428.fogEndDistance = i8429[23]
  i8428.fogStartDistance = i8429[24]
  i8428.fogDensity = i8429[25]
  i8428.fog = !!i8429[26]
  request.r(i8429[27], i8429[28], 0, i8428, 'skybox')
  i8428.fogMode = i8429[29]
  var i8431 = i8429[30]
  var i8430 = []
  for(var i = 0; i < i8431.length; i += 1) {
    i8430.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i8431[i + 0]) );
  }
  i8428.lightmaps = i8430
  i8428.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i8429[31], i8428.lightProbes)
  i8428.lightmapsMode = i8429[32]
  i8428.mixedBakeMode = i8429[33]
  i8428.environmentLightingMode = i8429[34]
  i8428.ambientProbe = new pc.SphericalHarmonicsL2(i8429[35])
  request.r(i8429[36], i8429[37], 0, i8428, 'customReflection')
  request.r(i8429[38], i8429[39], 0, i8428, 'defaultReflection')
  i8428.defaultReflectionMode = i8429[40]
  i8428.defaultReflectionResolution = i8429[41]
  i8428.sunLightObjectId = i8429[42]
  i8428.pixelLightCount = i8429[43]
  i8428.defaultReflectionHDR = !!i8429[44]
  i8428.hasLightDataAsset = !!i8429[45]
  i8428.hasManualGenerate = !!i8429[46]
  return i8428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i8434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i8435 = data
  request.r(i8435[0], i8435[1], 0, i8434, 'lightmapColor')
  request.r(i8435[2], i8435[3], 0, i8434, 'lightmapDirection')
  request.r(i8435[4], i8435[5], 0, i8434, 'shadowMask')
  return i8434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i8436 = root || new UnityEngine.LightProbes()
  var i8437 = data
  return i8436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i8442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i8443 = data
  var i8445 = i8443[0]
  var i8444 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i8445.length; i += 1) {
    i8444.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i8445[i + 0]));
  }
  i8442.ShaderCompilationErrors = i8444
  i8442.name = i8443[1]
  i8442.guid = i8443[2]
  var i8447 = i8443[3]
  var i8446 = []
  for(var i = 0; i < i8447.length; i += 1) {
    i8446.push( i8447[i + 0] );
  }
  i8442.shaderDefinedKeywords = i8446
  var i8449 = i8443[4]
  var i8448 = []
  for(var i = 0; i < i8449.length; i += 1) {
    i8448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i8449[i + 0]) );
  }
  i8442.passes = i8448
  var i8451 = i8443[5]
  var i8450 = []
  for(var i = 0; i < i8451.length; i += 1) {
    i8450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i8451[i + 0]) );
  }
  i8442.usePasses = i8450
  var i8453 = i8443[6]
  var i8452 = []
  for(var i = 0; i < i8453.length; i += 1) {
    i8452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i8453[i + 0]) );
  }
  i8442.defaultParameterValues = i8452
  request.r(i8443[7], i8443[8], 0, i8442, 'unityFallbackShader')
  i8442.readDepth = !!i8443[9]
  i8442.hasDepthOnlyPass = !!i8443[10]
  i8442.isCreatedByShaderGraph = !!i8443[11]
  i8442.disableBatching = !!i8443[12]
  i8442.compiled = !!i8443[13]
  return i8442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i8456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i8457 = data
  i8456.shaderName = i8457[0]
  i8456.errorMessage = i8457[1]
  return i8456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i8462 = root || new pc.UnityShaderPass()
  var i8463 = data
  i8462.id = i8463[0]
  i8462.subShaderIndex = i8463[1]
  i8462.name = i8463[2]
  i8462.passType = i8463[3]
  i8462.grabPassTextureName = i8463[4]
  i8462.usePass = !!i8463[5]
  i8462.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8463[6], i8462.zTest)
  i8462.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8463[7], i8462.zWrite)
  i8462.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8463[8], i8462.culling)
  i8462.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8463[9], i8462.blending)
  i8462.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8463[10], i8462.alphaBlending)
  i8462.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8463[11], i8462.colorWriteMask)
  i8462.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8463[12], i8462.offsetUnits)
  i8462.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8463[13], i8462.offsetFactor)
  i8462.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8463[14], i8462.stencilRef)
  i8462.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8463[15], i8462.stencilReadMask)
  i8462.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8463[16], i8462.stencilWriteMask)
  i8462.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8463[17], i8462.stencilOp)
  i8462.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8463[18], i8462.stencilOpFront)
  i8462.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8463[19], i8462.stencilOpBack)
  var i8465 = i8463[20]
  var i8464 = []
  for(var i = 0; i < i8465.length; i += 1) {
    i8464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i8465[i + 0]) );
  }
  i8462.tags = i8464
  var i8467 = i8463[21]
  var i8466 = []
  for(var i = 0; i < i8467.length; i += 1) {
    i8466.push( i8467[i + 0] );
  }
  i8462.passDefinedKeywords = i8466
  var i8469 = i8463[22]
  var i8468 = []
  for(var i = 0; i < i8469.length; i += 1) {
    i8468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i8469[i + 0]) );
  }
  i8462.passDefinedKeywordGroups = i8468
  var i8471 = i8463[23]
  var i8470 = []
  for(var i = 0; i < i8471.length; i += 1) {
    i8470.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8471[i + 0]) );
  }
  i8462.variants = i8470
  var i8473 = i8463[24]
  var i8472 = []
  for(var i = 0; i < i8473.length; i += 1) {
    i8472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8473[i + 0]) );
  }
  i8462.excludedVariants = i8472
  i8462.hasDepthReader = !!i8463[25]
  return i8462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i8474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i8475 = data
  i8474.val = i8475[0]
  i8474.name = i8475[1]
  return i8474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i8476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i8477 = data
  i8476.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8477[0], i8476.src)
  i8476.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8477[1], i8476.dst)
  i8476.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8477[2], i8476.op)
  return i8476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i8478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i8479 = data
  i8478.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8479[0], i8478.pass)
  i8478.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8479[1], i8478.fail)
  i8478.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8479[2], i8478.zFail)
  i8478.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8479[3], i8478.comp)
  return i8478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i8482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i8483 = data
  i8482.name = i8483[0]
  i8482.value = i8483[1]
  return i8482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i8486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i8487 = data
  var i8489 = i8487[0]
  var i8488 = []
  for(var i = 0; i < i8489.length; i += 1) {
    i8488.push( i8489[i + 0] );
  }
  i8486.keywords = i8488
  i8486.hasDiscard = !!i8487[1]
  return i8486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i8492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i8493 = data
  i8492.passId = i8493[0]
  i8492.subShaderIndex = i8493[1]
  var i8495 = i8493[2]
  var i8494 = []
  for(var i = 0; i < i8495.length; i += 1) {
    i8494.push( i8495[i + 0] );
  }
  i8492.keywords = i8494
  i8492.vertexProgram = i8493[3]
  i8492.fragmentProgram = i8493[4]
  i8492.exportedForWebGl2 = !!i8493[5]
  i8492.readDepth = !!i8493[6]
  return i8492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i8498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i8499 = data
  request.r(i8499[0], i8499[1], 0, i8498, 'shader')
  i8498.pass = i8499[2]
  return i8498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i8502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i8503 = data
  i8502.name = i8503[0]
  i8502.type = i8503[1]
  i8502.value = new pc.Vec4( i8503[2], i8503[3], i8503[4], i8503[5] )
  i8502.textureValue = i8503[6]
  i8502.shaderPropertyFlag = i8503[7]
  return i8502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i8504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i8505 = data
  i8504.name = i8505[0]
  request.r(i8505[1], i8505[2], 0, i8504, 'texture')
  i8504.aabb = i8505[3]
  i8504.vertices = i8505[4]
  i8504.triangles = i8505[5]
  i8504.textureRect = UnityEngine.Rect.MinMaxRect(i8505[6], i8505[7], i8505[8], i8505[9])
  i8504.packedRect = UnityEngine.Rect.MinMaxRect(i8505[10], i8505[11], i8505[12], i8505[13])
  i8504.border = new pc.Vec4( i8505[14], i8505[15], i8505[16], i8505[17] )
  i8504.transparency = i8505[18]
  i8504.bounds = i8505[19]
  i8504.pixelsPerUnit = i8505[20]
  i8504.textureWidth = i8505[21]
  i8504.textureHeight = i8505[22]
  i8504.nativeSize = new pc.Vec2( i8505[23], i8505[24] )
  i8504.pivot = new pc.Vec2( i8505[25], i8505[26] )
  i8504.textureRectOffset = new pc.Vec2( i8505[27], i8505[28] )
  return i8504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i8506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i8507 = data
  i8506.name = i8507[0]
  return i8506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i8508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i8509 = data
  i8508.name = i8509[0]
  i8508.wrapMode = i8509[1]
  i8508.isLooping = !!i8509[2]
  i8508.length = i8509[3]
  var i8511 = i8509[4]
  var i8510 = []
  for(var i = 0; i < i8511.length; i += 1) {
    i8510.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i8511[i + 0]) );
  }
  i8508.curves = i8510
  var i8513 = i8509[5]
  var i8512 = []
  for(var i = 0; i < i8513.length; i += 1) {
    i8512.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i8513[i + 0]) );
  }
  i8508.events = i8512
  i8508.halfPrecision = !!i8509[6]
  i8508._frameRate = i8509[7]
  i8508.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i8509[8], i8508.localBounds)
  i8508.hasMuscleCurves = !!i8509[9]
  var i8515 = i8509[10]
  var i8514 = []
  for(var i = 0; i < i8515.length; i += 1) {
    i8514.push( i8515[i + 0] );
  }
  i8508.clipMuscleConstant = i8514
  i8508.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i8509[11], i8508.clipBindingConstant)
  return i8508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i8518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i8519 = data
  i8518.path = i8519[0]
  i8518.hash = i8519[1]
  i8518.componentType = i8519[2]
  i8518.property = i8519[3]
  i8518.keys = i8519[4]
  var i8521 = i8519[5]
  var i8520 = []
  for(var i = 0; i < i8521.length; i += 1) {
    i8520.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i8521[i + 0]) );
  }
  i8518.objectReferenceKeys = i8520
  return i8518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i8524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i8525 = data
  i8524.time = i8525[0]
  request.r(i8525[1], i8525[2], 0, i8524, 'value')
  return i8524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i8528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i8529 = data
  i8528.functionName = i8529[0]
  i8528.floatParameter = i8529[1]
  i8528.intParameter = i8529[2]
  i8528.stringParameter = i8529[3]
  request.r(i8529[4], i8529[5], 0, i8528, 'objectReferenceParameter')
  i8528.time = i8529[6]
  return i8528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i8530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i8531 = data
  i8530.center = new pc.Vec3( i8531[0], i8531[1], i8531[2] )
  i8530.extends = new pc.Vec3( i8531[3], i8531[4], i8531[5] )
  return i8530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i8534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i8535 = data
  var i8537 = i8535[0]
  var i8536 = []
  for(var i = 0; i < i8537.length; i += 1) {
    i8536.push( i8537[i + 0] );
  }
  i8534.genericBindings = i8536
  var i8539 = i8535[1]
  var i8538 = []
  for(var i = 0; i < i8539.length; i += 1) {
    i8538.push( i8539[i + 0] );
  }
  i8534.pptrCurveMapping = i8538
  return i8534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i8540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i8541 = data
  i8540.name = i8541[0]
  i8540.ascent = i8541[1]
  i8540.originalLineHeight = i8541[2]
  i8540.fontSize = i8541[3]
  var i8543 = i8541[4]
  var i8542 = []
  for(var i = 0; i < i8543.length; i += 1) {
    i8542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i8543[i + 0]) );
  }
  i8540.characterInfo = i8542
  request.r(i8541[5], i8541[6], 0, i8540, 'texture')
  i8540.originalFontSize = i8541[7]
  return i8540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i8546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i8547 = data
  i8546.index = i8547[0]
  i8546.advance = i8547[1]
  i8546.bearing = i8547[2]
  i8546.glyphWidth = i8547[3]
  i8546.glyphHeight = i8547[4]
  i8546.minX = i8547[5]
  i8546.maxX = i8547[6]
  i8546.minY = i8547[7]
  i8546.maxY = i8547[8]
  i8546.uvBottomLeftX = i8547[9]
  i8546.uvBottomLeftY = i8547[10]
  i8546.uvBottomRightX = i8547[11]
  i8546.uvBottomRightY = i8547[12]
  i8546.uvTopLeftX = i8547[13]
  i8546.uvTopLeftY = i8547[14]
  i8546.uvTopRightX = i8547[15]
  i8546.uvTopRightY = i8547[16]
  return i8546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i8548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i8549 = data
  i8548.name = i8549[0]
  var i8551 = i8549[1]
  var i8550 = []
  for(var i = 0; i < i8551.length; i += 1) {
    i8550.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i8551[i + 0]) );
  }
  i8548.layers = i8550
  var i8553 = i8549[2]
  var i8552 = []
  for(var i = 0; i < i8553.length; i += 1) {
    i8552.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i8553[i + 0]) );
  }
  i8548.parameters = i8552
  i8548.animationClips = i8549[3]
  i8548.avatarUnsupported = i8549[4]
  return i8548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i8556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i8557 = data
  i8556.name = i8557[0]
  i8556.defaultWeight = i8557[1]
  i8556.blendingMode = i8557[2]
  i8556.avatarMask = i8557[3]
  i8556.syncedLayerIndex = i8557[4]
  i8556.syncedLayerAffectsTiming = !!i8557[5]
  i8556.syncedLayers = i8557[6]
  i8556.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8557[7], i8556.stateMachine)
  return i8556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i8558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i8559 = data
  i8558.id = i8559[0]
  i8558.name = i8559[1]
  i8558.path = i8559[2]
  var i8561 = i8559[3]
  var i8560 = []
  for(var i = 0; i < i8561.length; i += 1) {
    i8560.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i8561[i + 0]) );
  }
  i8558.states = i8560
  var i8563 = i8559[4]
  var i8562 = []
  for(var i = 0; i < i8563.length; i += 1) {
    i8562.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8563[i + 0]) );
  }
  i8558.machines = i8562
  var i8565 = i8559[5]
  var i8564 = []
  for(var i = 0; i < i8565.length; i += 1) {
    i8564.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8565[i + 0]) );
  }
  i8558.entryStateTransitions = i8564
  var i8567 = i8559[6]
  var i8566 = []
  for(var i = 0; i < i8567.length; i += 1) {
    i8566.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8567[i + 0]) );
  }
  i8558.exitStateTransitions = i8566
  var i8569 = i8559[7]
  var i8568 = []
  for(var i = 0; i < i8569.length; i += 1) {
    i8568.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8569[i + 0]) );
  }
  i8558.anyStateTransitions = i8568
  i8558.defaultStateId = i8559[8]
  return i8558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i8572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i8573 = data
  i8572.id = i8573[0]
  i8572.name = i8573[1]
  i8572.cycleOffset = i8573[2]
  i8572.cycleOffsetParameter = i8573[3]
  i8572.cycleOffsetParameterActive = !!i8573[4]
  i8572.mirror = !!i8573[5]
  i8572.mirrorParameter = i8573[6]
  i8572.mirrorParameterActive = !!i8573[7]
  i8572.motionId = i8573[8]
  i8572.nameHash = i8573[9]
  i8572.fullPathHash = i8573[10]
  i8572.speed = i8573[11]
  i8572.speedParameter = i8573[12]
  i8572.speedParameterActive = !!i8573[13]
  i8572.tag = i8573[14]
  i8572.tagHash = i8573[15]
  i8572.writeDefaultValues = !!i8573[16]
  var i8575 = i8573[17]
  var i8574 = []
  for(var i = 0; i < i8575.length; i += 2) {
  request.r(i8575[i + 0], i8575[i + 1], 2, i8574, '')
  }
  i8572.behaviours = i8574
  var i8577 = i8573[18]
  var i8576 = []
  for(var i = 0; i < i8577.length; i += 1) {
    i8576.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8577[i + 0]) );
  }
  i8572.transitions = i8576
  return i8572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i8582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i8583 = data
  i8582.fullPath = i8583[0]
  i8582.canTransitionToSelf = !!i8583[1]
  i8582.duration = i8583[2]
  i8582.exitTime = i8583[3]
  i8582.hasExitTime = !!i8583[4]
  i8582.hasFixedDuration = !!i8583[5]
  i8582.interruptionSource = i8583[6]
  i8582.offset = i8583[7]
  i8582.orderedInterruption = !!i8583[8]
  i8582.destinationStateId = i8583[9]
  i8582.isExit = !!i8583[10]
  i8582.mute = !!i8583[11]
  i8582.solo = !!i8583[12]
  var i8585 = i8583[13]
  var i8584 = []
  for(var i = 0; i < i8585.length; i += 1) {
    i8584.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8585[i + 0]) );
  }
  i8582.conditions = i8584
  return i8582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i8590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i8591 = data
  i8590.destinationStateId = i8591[0]
  i8590.isExit = !!i8591[1]
  i8590.mute = !!i8591[2]
  i8590.solo = !!i8591[3]
  var i8593 = i8591[4]
  var i8592 = []
  for(var i = 0; i < i8593.length; i += 1) {
    i8592.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8593[i + 0]) );
  }
  i8590.conditions = i8592
  return i8590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i8596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i8597 = data
  i8596.mode = i8597[0]
  i8596.parameter = i8597[1]
  i8596.threshold = i8597[2]
  return i8596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i8600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i8601 = data
  i8600.defaultBool = !!i8601[0]
  i8600.defaultFloat = i8601[1]
  i8600.defaultInt = i8601[2]
  i8600.name = i8601[3]
  i8600.nameHash = i8601[4]
  i8600.type = i8601[5]
  return i8600
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i8602 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i8603 = data
  i8602.useSafeMode = !!i8603[0]
  i8602.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i8603[1], i8602.safeModeOptions)
  i8602.timeScale = i8603[2]
  i8602.unscaledTimeScale = i8603[3]
  i8602.useSmoothDeltaTime = !!i8603[4]
  i8602.maxSmoothUnscaledTime = i8603[5]
  i8602.rewindCallbackMode = i8603[6]
  i8602.showUnityEditorReport = !!i8603[7]
  i8602.logBehaviour = i8603[8]
  i8602.drawGizmos = !!i8603[9]
  i8602.defaultRecyclable = !!i8603[10]
  i8602.defaultAutoPlay = i8603[11]
  i8602.defaultUpdateType = i8603[12]
  i8602.defaultTimeScaleIndependent = !!i8603[13]
  i8602.defaultEaseType = i8603[14]
  i8602.defaultEaseOvershootOrAmplitude = i8603[15]
  i8602.defaultEasePeriod = i8603[16]
  i8602.defaultAutoKill = !!i8603[17]
  i8602.defaultLoopType = i8603[18]
  i8602.debugMode = !!i8603[19]
  i8602.debugStoreTargetId = !!i8603[20]
  i8602.showPreviewPanel = !!i8603[21]
  i8602.storeSettingsLocation = i8603[22]
  i8602.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i8603[23], i8602.modules)
  i8602.createASMDEF = !!i8603[24]
  i8602.showPlayingTweens = !!i8603[25]
  i8602.showPausedTweens = !!i8603[26]
  return i8602
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i8604 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i8605 = data
  i8604.logBehaviour = i8605[0]
  i8604.nestedTweenFailureBehaviour = i8605[1]
  return i8604
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i8606 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i8607 = data
  i8606.showPanel = !!i8607[0]
  i8606.audioEnabled = !!i8607[1]
  i8606.physicsEnabled = !!i8607[2]
  i8606.physics2DEnabled = !!i8607[3]
  i8606.spriteEnabled = !!i8607[4]
  i8606.uiEnabled = !!i8607[5]
  i8606.textMeshProEnabled = !!i8607[6]
  i8606.tk2DEnabled = !!i8607[7]
  i8606.deAudioEnabled = !!i8607[8]
  i8606.deUnityExtendedEnabled = !!i8607[9]
  i8606.epoOutlineEnabled = !!i8607[10]
  return i8606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i8608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i8609 = data
  var i8611 = i8609[0]
  var i8610 = []
  for(var i = 0; i < i8611.length; i += 1) {
    i8610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i8611[i + 0]) );
  }
  i8608.files = i8610
  i8608.componentToPrefabIds = i8609[1]
  return i8608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i8614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i8615 = data
  i8614.path = i8615[0]
  request.r(i8615[1], i8615[2], 0, i8614, 'unityObject')
  return i8614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i8616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i8617 = data
  var i8619 = i8617[0]
  var i8618 = []
  for(var i = 0; i < i8619.length; i += 1) {
    i8618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i8619[i + 0]) );
  }
  i8616.scriptsExecutionOrder = i8618
  var i8621 = i8617[1]
  var i8620 = []
  for(var i = 0; i < i8621.length; i += 1) {
    i8620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i8621[i + 0]) );
  }
  i8616.sortingLayers = i8620
  var i8623 = i8617[2]
  var i8622 = []
  for(var i = 0; i < i8623.length; i += 1) {
    i8622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i8623[i + 0]) );
  }
  i8616.cullingLayers = i8622
  i8616.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i8617[3], i8616.timeSettings)
  i8616.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i8617[4], i8616.physicsSettings)
  i8616.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i8617[5], i8616.physics2DSettings)
  i8616.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8617[6], i8616.qualitySettings)
  i8616.enableRealtimeShadows = !!i8617[7]
  i8616.enableAutoInstancing = !!i8617[8]
  i8616.enableStaticBatching = !!i8617[9]
  i8616.enableDynamicBatching = !!i8617[10]
  i8616.usePreservativeDynamicBatching = !!i8617[11]
  i8616.lightmapEncodingQuality = i8617[12]
  i8616.desiredColorSpace = i8617[13]
  var i8625 = i8617[14]
  var i8624 = []
  for(var i = 0; i < i8625.length; i += 1) {
    i8624.push( i8625[i + 0] );
  }
  i8616.allTags = i8624
  return i8616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i8628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i8629 = data
  i8628.name = i8629[0]
  i8628.value = i8629[1]
  return i8628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i8632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i8633 = data
  i8632.id = i8633[0]
  i8632.name = i8633[1]
  i8632.value = i8633[2]
  return i8632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i8636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i8637 = data
  i8636.id = i8637[0]
  i8636.name = i8637[1]
  return i8636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i8638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i8639 = data
  i8638.fixedDeltaTime = i8639[0]
  i8638.maximumDeltaTime = i8639[1]
  i8638.timeScale = i8639[2]
  i8638.maximumParticleTimestep = i8639[3]
  return i8638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i8640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i8641 = data
  i8640.gravity = new pc.Vec3( i8641[0], i8641[1], i8641[2] )
  i8640.defaultSolverIterations = i8641[3]
  i8640.bounceThreshold = i8641[4]
  i8640.autoSyncTransforms = !!i8641[5]
  i8640.autoSimulation = !!i8641[6]
  var i8643 = i8641[7]
  var i8642 = []
  for(var i = 0; i < i8643.length; i += 1) {
    i8642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i8643[i + 0]) );
  }
  i8640.collisionMatrix = i8642
  return i8640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i8646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i8647 = data
  i8646.enabled = !!i8647[0]
  i8646.layerId = i8647[1]
  i8646.otherLayerId = i8647[2]
  return i8646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i8648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i8649 = data
  request.r(i8649[0], i8649[1], 0, i8648, 'material')
  i8648.gravity = new pc.Vec2( i8649[2], i8649[3] )
  i8648.positionIterations = i8649[4]
  i8648.velocityIterations = i8649[5]
  i8648.velocityThreshold = i8649[6]
  i8648.maxLinearCorrection = i8649[7]
  i8648.maxAngularCorrection = i8649[8]
  i8648.maxTranslationSpeed = i8649[9]
  i8648.maxRotationSpeed = i8649[10]
  i8648.baumgarteScale = i8649[11]
  i8648.baumgarteTOIScale = i8649[12]
  i8648.timeToSleep = i8649[13]
  i8648.linearSleepTolerance = i8649[14]
  i8648.angularSleepTolerance = i8649[15]
  i8648.defaultContactOffset = i8649[16]
  i8648.autoSimulation = !!i8649[17]
  i8648.queriesHitTriggers = !!i8649[18]
  i8648.queriesStartInColliders = !!i8649[19]
  i8648.callbacksOnDisable = !!i8649[20]
  i8648.reuseCollisionCallbacks = !!i8649[21]
  i8648.autoSyncTransforms = !!i8649[22]
  var i8651 = i8649[23]
  var i8650 = []
  for(var i = 0; i < i8651.length; i += 1) {
    i8650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i8651[i + 0]) );
  }
  i8648.collisionMatrix = i8650
  return i8648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i8654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i8655 = data
  i8654.enabled = !!i8655[0]
  i8654.layerId = i8655[1]
  i8654.otherLayerId = i8655[2]
  return i8654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i8656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i8657 = data
  var i8659 = i8657[0]
  var i8658 = []
  for(var i = 0; i < i8659.length; i += 1) {
    i8658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8659[i + 0]) );
  }
  i8656.qualityLevels = i8658
  var i8661 = i8657[1]
  var i8660 = []
  for(var i = 0; i < i8661.length; i += 1) {
    i8660.push( i8661[i + 0] );
  }
  i8656.names = i8660
  i8656.shadows = i8657[2]
  i8656.anisotropicFiltering = i8657[3]
  i8656.antiAliasing = i8657[4]
  i8656.lodBias = i8657[5]
  i8656.shadowCascades = i8657[6]
  i8656.shadowDistance = i8657[7]
  i8656.shadowmaskMode = i8657[8]
  i8656.shadowProjection = i8657[9]
  i8656.shadowResolution = i8657[10]
  i8656.softParticles = !!i8657[11]
  i8656.softVegetation = !!i8657[12]
  i8656.activeColorSpace = i8657[13]
  i8656.desiredColorSpace = i8657[14]
  i8656.masterTextureLimit = i8657[15]
  i8656.maxQueuedFrames = i8657[16]
  i8656.particleRaycastBudget = i8657[17]
  i8656.pixelLightCount = i8657[18]
  i8656.realtimeReflectionProbes = !!i8657[19]
  i8656.shadowCascade2Split = i8657[20]
  i8656.shadowCascade4Split = new pc.Vec3( i8657[21], i8657[22], i8657[23] )
  i8656.streamingMipmapsActive = !!i8657[24]
  i8656.vSyncCount = i8657[25]
  i8656.asyncUploadBufferSize = i8657[26]
  i8656.asyncUploadTimeSlice = i8657[27]
  i8656.billboardsFaceCameraPosition = !!i8657[28]
  i8656.shadowNearPlaneOffset = i8657[29]
  i8656.streamingMipmapsMemoryBudget = i8657[30]
  i8656.maximumLODLevel = i8657[31]
  i8656.streamingMipmapsAddAllCameras = !!i8657[32]
  i8656.streamingMipmapsMaxLevelReduction = i8657[33]
  i8656.streamingMipmapsRenderersPerFrame = i8657[34]
  i8656.resolutionScalingFixedDPIFactor = i8657[35]
  i8656.streamingMipmapsMaxFileIORequests = i8657[36]
  i8656.currentQualityLevel = i8657[37]
  return i8656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i8664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i8665 = data
  var i8667 = i8665[0]
  var i8666 = []
  for(var i = 0; i < i8667.length; i += 1) {
    i8666.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i8667[i + 0]) );
  }
  i8664.groups = i8666
  var i8669 = i8665[1]
  var i8668 = []
  for(var i = 0; i < i8669.length; i += 1) {
    i8668.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i8669[i + 0]) );
  }
  i8664.snapshots = i8668
  return i8664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i8672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i8673 = data
  i8672.id = i8673[0]
  i8672.childGroupIds = i8673[1]
  i8672.name = i8673[2]
  return i8672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i8676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i8677 = data
  i8676.id = i8677[0]
  var i8679 = i8677[1]
  var i8678 = []
  for(var i = 0; i < i8679.length; i += 1) {
    i8678.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i8679[i + 0]) );
  }
  i8676.parameters = i8678
  return i8676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i8682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i8683 = data
  i8682.name = i8683[0]
  i8682.value = i8683[1]
  return i8682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i8686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i8687 = data
  i8686.weight = i8687[0]
  i8686.vertices = i8687[1]
  i8686.normals = i8687[2]
  i8686.tangents = i8687[3]
  return i8686
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"90":[91],"92":[91],"93":[91],"94":[91],"95":[91],"96":[91],"97":[98],"99":[65],"100":[101],"102":[101],"103":[101],"104":[101],"105":[101],"106":[101],"107":[101],"108":[48],"109":[48],"110":[48],"111":[48],"112":[48],"113":[48],"114":[48],"115":[48],"116":[48],"117":[48],"118":[48],"119":[48],"120":[48],"121":[65],"122":[123],"124":[125],"126":[125],"76":[70],"127":[31],"128":[9],"36":[33],"129":[9],"130":[131],"132":[131],"40":[14],"59":[33],"133":[9],"29":[9],"134":[70],"135":[70],"79":[76],"71":[80,70],"136":[70],"78":[76],"137":[70],"138":[70],"139":[70],"140":[70],"141":[70],"142":[70],"143":[70],"144":[70],"145":[70],"146":[80,70],"147":[70],"148":[70],"149":[70],"150":[70],"72":[80,70],"151":[70],"152":[84],"153":[84],"85":[84],"154":[84],"155":[65],"156":[65]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level1_Hair_Playable","UnityEngine.SpriteRenderer","BasicDrag","OutlinePulse","UnityEngine.GameObject","BD_CameraFollow","DG.Tweening.DOTweenAnimation","UnityEngine.Sprite","UnityEngine.AudioClip","BD_Progress","BD_ProgressHelper","DraggableBrush","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","BD_AnimationHelper","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.TrailRenderer","UnityEngine.LineRenderer","StaticFixedPipe","UnityEngine.BoxCollider2D","BD_Clamp","BD_ItemPick","BD_Sticky","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.SpriteMask","PlayTweenOnHit","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","InteractableBones","WaypointFollower","UnityEditor.Audio.AudioMixerGroupController","BD_Action","BD_ToolRotate","UnityEngine.Rigidbody2D","BugKill_Tip","ActionOnTap","_2dxFX_Wave","BD_SpriteChange","BD_AnimatorDrag","PlaceItem","BD_Audio","Level1_HairAnim","BD_TapandHold","TapandHold_Simple","SpriteButton","DestroyObj","MenuLevel","IntroLevelAnim","Level_PoseController","PlayableRouter","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Fold","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "11.1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1659";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4392";

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

Deserializers.buildID = "30a20fe5-9935-4e40-8dce-16e68a67c279";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

