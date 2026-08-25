var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5926 = root || request.c( 'UnityEngine.JointSpring' )
  var i5927 = data
  i5926.spring = i5927[0]
  i5926.damper = i5927[1]
  i5926.targetPosition = i5927[2]
  return i5926
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5928 = root || request.c( 'UnityEngine.JointMotor' )
  var i5929 = data
  i5928.m_TargetVelocity = i5929[0]
  i5928.m_Force = i5929[1]
  i5928.m_FreeSpin = i5929[2]
  return i5928
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5930 = root || request.c( 'UnityEngine.JointLimits' )
  var i5931 = data
  i5930.m_Min = i5931[0]
  i5930.m_Max = i5931[1]
  i5930.m_Bounciness = i5931[2]
  i5930.m_BounceMinVelocity = i5931[3]
  i5930.m_ContactDistance = i5931[4]
  i5930.minBounce = i5931[5]
  i5930.maxBounce = i5931[6]
  return i5930
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5932 = root || request.c( 'UnityEngine.JointDrive' )
  var i5933 = data
  i5932.m_PositionSpring = i5933[0]
  i5932.m_PositionDamper = i5933[1]
  i5932.m_MaximumForce = i5933[2]
  i5932.m_UseAcceleration = i5933[3]
  return i5932
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5934 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5935 = data
  i5934.m_Spring = i5935[0]
  i5934.m_Damper = i5935[1]
  return i5934
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5936 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5937 = data
  i5936.m_Limit = i5937[0]
  i5936.m_Bounciness = i5937[1]
  i5936.m_ContactDistance = i5937[2]
  return i5936
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5938 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5939 = data
  i5938.m_ExtremumSlip = i5939[0]
  i5938.m_ExtremumValue = i5939[1]
  i5938.m_AsymptoteSlip = i5939[2]
  i5938.m_AsymptoteValue = i5939[3]
  i5938.m_Stiffness = i5939[4]
  return i5938
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5940 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5941 = data
  i5940.m_LowerAngle = i5941[0]
  i5940.m_UpperAngle = i5941[1]
  return i5940
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5942 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5943 = data
  i5942.m_MotorSpeed = i5943[0]
  i5942.m_MaximumMotorTorque = i5943[1]
  return i5942
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5944 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5945 = data
  i5944.m_DampingRatio = i5945[0]
  i5944.m_Frequency = i5945[1]
  i5944.m_Angle = i5945[2]
  return i5944
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5946 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5947 = data
  i5946.m_LowerTranslation = i5947[0]
  i5946.m_UpperTranslation = i5947[1]
  return i5946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5948 = root || new pc.UnityMaterial()
  var i5949 = data
  i5948.name = i5949[0]
  request.r(i5949[1], i5949[2], 0, i5948, 'shader')
  i5948.renderQueue = i5949[3]
  i5948.enableInstancing = !!i5949[4]
  var i5951 = i5949[5]
  var i5950 = []
  for(var i = 0; i < i5951.length; i += 1) {
    i5950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5951[i + 0]) );
  }
  i5948.floatParameters = i5950
  var i5953 = i5949[6]
  var i5952 = []
  for(var i = 0; i < i5953.length; i += 1) {
    i5952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5953[i + 0]) );
  }
  i5948.colorParameters = i5952
  var i5955 = i5949[7]
  var i5954 = []
  for(var i = 0; i < i5955.length; i += 1) {
    i5954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5955[i + 0]) );
  }
  i5948.vectorParameters = i5954
  var i5957 = i5949[8]
  var i5956 = []
  for(var i = 0; i < i5957.length; i += 1) {
    i5956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5957[i + 0]) );
  }
  i5948.textureParameters = i5956
  var i5959 = i5949[9]
  var i5958 = []
  for(var i = 0; i < i5959.length; i += 1) {
    i5958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5959[i + 0]) );
  }
  i5948.materialFlags = i5958
  return i5948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5963 = data
  i5962.name = i5963[0]
  i5962.value = i5963[1]
  return i5962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5967 = data
  i5966.name = i5967[0]
  i5966.value = new pc.Color(i5967[1], i5967[2], i5967[3], i5967[4])
  return i5966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5971 = data
  i5970.name = i5971[0]
  i5970.value = new pc.Vec4( i5971[1], i5971[2], i5971[3], i5971[4] )
  return i5970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5975 = data
  i5974.name = i5975[0]
  request.r(i5975[1], i5975[2], 0, i5974, 'value')
  return i5974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5979 = data
  i5978.name = i5979[0]
  i5978.enabled = !!i5979[1]
  return i5978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5981 = data
  i5980.name = i5981[0]
  i5980.width = i5981[1]
  i5980.height = i5981[2]
  i5980.mipmapCount = i5981[3]
  i5980.anisoLevel = i5981[4]
  i5980.filterMode = i5981[5]
  i5980.hdr = !!i5981[6]
  i5980.format = i5981[7]
  i5980.wrapMode = i5981[8]
  i5980.alphaIsTransparency = !!i5981[9]
  i5980.alphaSource = i5981[10]
  i5980.graphicsFormat = i5981[11]
  i5980.sRGBTexture = !!i5981[12]
  i5980.desiredColorSpace = i5981[13]
  i5980.wrapU = i5981[14]
  i5980.wrapV = i5981[15]
  return i5980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5983 = data
  i5982.name = i5983[0]
  i5982.halfPrecision = !!i5983[1]
  i5982.useSimplification = !!i5983[2]
  i5982.useUInt32IndexFormat = !!i5983[3]
  i5982.vertexCount = i5983[4]
  i5982.aabb = i5983[5]
  var i5985 = i5983[6]
  var i5984 = []
  for(var i = 0; i < i5985.length; i += 1) {
    i5984.push( !!i5985[i + 0] );
  }
  i5982.streams = i5984
  i5982.vertices = i5983[7]
  var i5987 = i5983[8]
  var i5986 = []
  for(var i = 0; i < i5987.length; i += 1) {
    i5986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i5987[i + 0]) );
  }
  i5982.subMeshes = i5986
  var i5989 = i5983[9]
  var i5988 = []
  for(var i = 0; i < i5989.length; i += 16) {
    i5988.push( new pc.Mat4().setData(i5989[i + 0], i5989[i + 1], i5989[i + 2], i5989[i + 3],  i5989[i + 4], i5989[i + 5], i5989[i + 6], i5989[i + 7],  i5989[i + 8], i5989[i + 9], i5989[i + 10], i5989[i + 11],  i5989[i + 12], i5989[i + 13], i5989[i + 14], i5989[i + 15]) );
  }
  i5982.bindposes = i5988
  var i5991 = i5983[10]
  var i5990 = []
  for(var i = 0; i < i5991.length; i += 1) {
    i5990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i5991[i + 0]) );
  }
  i5982.blendShapes = i5990
  return i5982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i5996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i5997 = data
  i5996.triangles = i5997[0]
  return i5996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i6002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i6003 = data
  i6002.name = i6003[0]
  var i6005 = i6003[1]
  var i6004 = []
  for(var i = 0; i < i6005.length; i += 1) {
    i6004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i6005[i + 0]) );
  }
  i6002.frames = i6004
  return i6002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i6006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i6007 = data
  i6006.position = new pc.Vec3( i6007[0], i6007[1], i6007[2] )
  i6006.scale = new pc.Vec3( i6007[3], i6007[4], i6007[5] )
  i6006.rotation = new pc.Quat(i6007[6], i6007[7], i6007[8], i6007[9])
  return i6006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i6008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i6009 = data
  i6008.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i6009[0], i6008.main)
  i6008.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i6009[1], i6008.colorBySpeed)
  i6008.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i6009[2], i6008.colorOverLifetime)
  i6008.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i6009[3], i6008.emission)
  i6008.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i6009[4], i6008.rotationBySpeed)
  i6008.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i6009[5], i6008.rotationOverLifetime)
  i6008.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i6009[6], i6008.shape)
  i6008.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i6009[7], i6008.sizeBySpeed)
  i6008.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i6009[8], i6008.sizeOverLifetime)
  i6008.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i6009[9], i6008.textureSheetAnimation)
  i6008.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i6009[10], i6008.velocityOverLifetime)
  i6008.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i6009[11], i6008.noise)
  i6008.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i6009[12], i6008.inheritVelocity)
  i6008.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i6009[13], i6008.forceOverLifetime)
  i6008.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i6009[14], i6008.limitVelocityOverLifetime)
  i6008.useAutoRandomSeed = !!i6009[15]
  i6008.randomSeed = i6009[16]
  return i6008
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i6010 = root || new pc.ParticleSystemMain()
  var i6011 = data
  i6010.duration = i6011[0]
  i6010.loop = !!i6011[1]
  i6010.prewarm = !!i6011[2]
  i6010.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6011[3], i6010.startDelay)
  i6010.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6011[4], i6010.startLifetime)
  i6010.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6011[5], i6010.startSpeed)
  i6010.startSize3D = !!i6011[6]
  i6010.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6011[7], i6010.startSizeX)
  i6010.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6011[8], i6010.startSizeY)
  i6010.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6011[9], i6010.startSizeZ)
  i6010.startRotation3D = !!i6011[10]
  i6010.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6011[11], i6010.startRotationX)
  i6010.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6011[12], i6010.startRotationY)
  i6010.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6011[13], i6010.startRotationZ)
  i6010.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6011[14], i6010.startColor)
  i6010.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6011[15], i6010.gravityModifier)
  i6010.simulationSpace = i6011[16]
  request.r(i6011[17], i6011[18], 0, i6010, 'customSimulationSpace')
  i6010.simulationSpeed = i6011[19]
  i6010.useUnscaledTime = !!i6011[20]
  i6010.scalingMode = i6011[21]
  i6010.playOnAwake = !!i6011[22]
  i6010.maxParticles = i6011[23]
  i6010.emitterVelocityMode = i6011[24]
  i6010.stopAction = i6011[25]
  return i6010
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i6012 = root || new pc.MinMaxCurve()
  var i6013 = data
  i6012.mode = i6013[0]
  i6012.curveMin = new pc.AnimationCurve( { keys_flow: i6013[1] } )
  i6012.curveMax = new pc.AnimationCurve( { keys_flow: i6013[2] } )
  i6012.curveMultiplier = i6013[3]
  i6012.constantMin = i6013[4]
  i6012.constantMax = i6013[5]
  return i6012
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i6014 = root || new pc.MinMaxGradient()
  var i6015 = data
  i6014.mode = i6015[0]
  i6014.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6015[1], i6014.gradientMin)
  i6014.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6015[2], i6014.gradientMax)
  i6014.colorMin = new pc.Color(i6015[3], i6015[4], i6015[5], i6015[6])
  i6014.colorMax = new pc.Color(i6015[7], i6015[8], i6015[9], i6015[10])
  return i6014
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i6016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i6017 = data
  i6016.mode = i6017[0]
  var i6019 = i6017[1]
  var i6018 = []
  for(var i = 0; i < i6019.length; i += 1) {
    i6018.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i6019[i + 0]) );
  }
  i6016.colorKeys = i6018
  var i6021 = i6017[2]
  var i6020 = []
  for(var i = 0; i < i6021.length; i += 1) {
    i6020.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i6021[i + 0]) );
  }
  i6016.alphaKeys = i6020
  return i6016
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i6022 = root || new pc.ParticleSystemColorBySpeed()
  var i6023 = data
  i6022.enabled = !!i6023[0]
  i6022.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6023[1], i6022.color)
  i6022.range = new pc.Vec2( i6023[2], i6023[3] )
  return i6022
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i6026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i6027 = data
  i6026.color = new pc.Color(i6027[0], i6027[1], i6027[2], i6027[3])
  i6026.time = i6027[4]
  return i6026
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i6030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i6031 = data
  i6030.alpha = i6031[0]
  i6030.time = i6031[1]
  return i6030
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i6032 = root || new pc.ParticleSystemColorOverLifetime()
  var i6033 = data
  i6032.enabled = !!i6033[0]
  i6032.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6033[1], i6032.color)
  return i6032
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i6034 = root || new pc.ParticleSystemEmitter()
  var i6035 = data
  i6034.enabled = !!i6035[0]
  i6034.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6035[1], i6034.rateOverTime)
  i6034.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6035[2], i6034.rateOverDistance)
  var i6037 = i6035[3]
  var i6036 = []
  for(var i = 0; i < i6037.length; i += 1) {
    i6036.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i6037[i + 0]) );
  }
  i6034.bursts = i6036
  return i6034
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i6040 = root || new pc.ParticleSystemBurst()
  var i6041 = data
  i6040.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6041[0], i6040.count)
  i6040.cycleCount = i6041[1]
  i6040.minCount = i6041[2]
  i6040.maxCount = i6041[3]
  i6040.repeatInterval = i6041[4]
  i6040.time = i6041[5]
  return i6040
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i6042 = root || new pc.ParticleSystemRotationBySpeed()
  var i6043 = data
  i6042.enabled = !!i6043[0]
  i6042.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6043[1], i6042.x)
  i6042.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6043[2], i6042.y)
  i6042.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6043[3], i6042.z)
  i6042.separateAxes = !!i6043[4]
  i6042.range = new pc.Vec2( i6043[5], i6043[6] )
  return i6042
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i6044 = root || new pc.ParticleSystemRotationOverLifetime()
  var i6045 = data
  i6044.enabled = !!i6045[0]
  i6044.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6045[1], i6044.x)
  i6044.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6045[2], i6044.y)
  i6044.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6045[3], i6044.z)
  i6044.separateAxes = !!i6045[4]
  return i6044
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i6046 = root || new pc.ParticleSystemShape()
  var i6047 = data
  i6046.enabled = !!i6047[0]
  i6046.shapeType = i6047[1]
  i6046.randomDirectionAmount = i6047[2]
  i6046.sphericalDirectionAmount = i6047[3]
  i6046.randomPositionAmount = i6047[4]
  i6046.alignToDirection = !!i6047[5]
  i6046.radius = i6047[6]
  i6046.radiusMode = i6047[7]
  i6046.radiusSpread = i6047[8]
  i6046.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6047[9], i6046.radiusSpeed)
  i6046.radiusThickness = i6047[10]
  i6046.angle = i6047[11]
  i6046.length = i6047[12]
  i6046.boxThickness = new pc.Vec3( i6047[13], i6047[14], i6047[15] )
  i6046.meshShapeType = i6047[16]
  request.r(i6047[17], i6047[18], 0, i6046, 'mesh')
  request.r(i6047[19], i6047[20], 0, i6046, 'meshRenderer')
  request.r(i6047[21], i6047[22], 0, i6046, 'skinnedMeshRenderer')
  i6046.useMeshMaterialIndex = !!i6047[23]
  i6046.meshMaterialIndex = i6047[24]
  i6046.useMeshColors = !!i6047[25]
  i6046.normalOffset = i6047[26]
  i6046.arc = i6047[27]
  i6046.arcMode = i6047[28]
  i6046.arcSpread = i6047[29]
  i6046.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6047[30], i6046.arcSpeed)
  i6046.donutRadius = i6047[31]
  i6046.position = new pc.Vec3( i6047[32], i6047[33], i6047[34] )
  i6046.rotation = new pc.Vec3( i6047[35], i6047[36], i6047[37] )
  i6046.scale = new pc.Vec3( i6047[38], i6047[39], i6047[40] )
  return i6046
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i6048 = root || new pc.ParticleSystemSizeBySpeed()
  var i6049 = data
  i6048.enabled = !!i6049[0]
  i6048.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6049[1], i6048.x)
  i6048.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6049[2], i6048.y)
  i6048.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6049[3], i6048.z)
  i6048.separateAxes = !!i6049[4]
  i6048.range = new pc.Vec2( i6049[5], i6049[6] )
  return i6048
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i6050 = root || new pc.ParticleSystemSizeOverLifetime()
  var i6051 = data
  i6050.enabled = !!i6051[0]
  i6050.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6051[1], i6050.x)
  i6050.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6051[2], i6050.y)
  i6050.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6051[3], i6050.z)
  i6050.separateAxes = !!i6051[4]
  return i6050
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i6052 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i6053 = data
  i6052.enabled = !!i6053[0]
  i6052.mode = i6053[1]
  i6052.animation = i6053[2]
  i6052.numTilesX = i6053[3]
  i6052.numTilesY = i6053[4]
  i6052.useRandomRow = !!i6053[5]
  i6052.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6053[6], i6052.frameOverTime)
  i6052.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6053[7], i6052.startFrame)
  i6052.cycleCount = i6053[8]
  i6052.rowIndex = i6053[9]
  i6052.flipU = i6053[10]
  i6052.flipV = i6053[11]
  i6052.spriteCount = i6053[12]
  var i6055 = i6053[13]
  var i6054 = []
  for(var i = 0; i < i6055.length; i += 2) {
  request.r(i6055[i + 0], i6055[i + 1], 2, i6054, '')
  }
  i6052.sprites = i6054
  return i6052
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i6058 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i6059 = data
  i6058.enabled = !!i6059[0]
  i6058.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6059[1], i6058.x)
  i6058.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6059[2], i6058.y)
  i6058.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6059[3], i6058.z)
  i6058.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6059[4], i6058.radial)
  i6058.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6059[5], i6058.speedModifier)
  i6058.space = i6059[6]
  i6058.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6059[7], i6058.orbitalX)
  i6058.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6059[8], i6058.orbitalY)
  i6058.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6059[9], i6058.orbitalZ)
  i6058.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6059[10], i6058.orbitalOffsetX)
  i6058.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6059[11], i6058.orbitalOffsetY)
  i6058.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6059[12], i6058.orbitalOffsetZ)
  return i6058
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i6060 = root || new pc.ParticleSystemNoise()
  var i6061 = data
  i6060.enabled = !!i6061[0]
  i6060.separateAxes = !!i6061[1]
  i6060.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6061[2], i6060.strengthX)
  i6060.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6061[3], i6060.strengthY)
  i6060.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6061[4], i6060.strengthZ)
  i6060.frequency = i6061[5]
  i6060.damping = !!i6061[6]
  i6060.octaveCount = i6061[7]
  i6060.octaveMultiplier = i6061[8]
  i6060.octaveScale = i6061[9]
  i6060.quality = i6061[10]
  i6060.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6061[11], i6060.scrollSpeed)
  i6060.scrollSpeedMultiplier = i6061[12]
  i6060.remapEnabled = !!i6061[13]
  i6060.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6061[14], i6060.remapX)
  i6060.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6061[15], i6060.remapY)
  i6060.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6061[16], i6060.remapZ)
  i6060.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6061[17], i6060.positionAmount)
  i6060.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6061[18], i6060.rotationAmount)
  i6060.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6061[19], i6060.sizeAmount)
  return i6060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i6062 = root || new pc.ParticleSystemInheritVelocity()
  var i6063 = data
  i6062.enabled = !!i6063[0]
  i6062.mode = i6063[1]
  i6062.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6063[2], i6062.curve)
  return i6062
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i6064 = root || new pc.ParticleSystemForceOverLifetime()
  var i6065 = data
  i6064.enabled = !!i6065[0]
  i6064.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6065[1], i6064.x)
  i6064.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6065[2], i6064.y)
  i6064.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6065[3], i6064.z)
  i6064.space = i6065[4]
  i6064.randomized = !!i6065[5]
  return i6064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i6066 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i6067 = data
  i6066.enabled = !!i6067[0]
  i6066.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6067[1], i6066.limit)
  i6066.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6067[2], i6066.limitX)
  i6066.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6067[3], i6066.limitY)
  i6066.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6067[4], i6066.limitZ)
  i6066.dampen = i6067[5]
  i6066.separateAxes = !!i6067[6]
  i6066.space = i6067[7]
  i6066.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6067[8], i6066.drag)
  i6066.multiplyDragByParticleSize = !!i6067[9]
  i6066.multiplyDragByParticleVelocity = !!i6067[10]
  return i6066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i6068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i6069 = data
  request.r(i6069[0], i6069[1], 0, i6068, 'mesh')
  i6068.meshCount = i6069[2]
  i6068.activeVertexStreamsCount = i6069[3]
  i6068.alignment = i6069[4]
  i6068.renderMode = i6069[5]
  i6068.sortMode = i6069[6]
  i6068.lengthScale = i6069[7]
  i6068.velocityScale = i6069[8]
  i6068.cameraVelocityScale = i6069[9]
  i6068.normalDirection = i6069[10]
  i6068.sortingFudge = i6069[11]
  i6068.minParticleSize = i6069[12]
  i6068.maxParticleSize = i6069[13]
  i6068.pivot = new pc.Vec3( i6069[14], i6069[15], i6069[16] )
  request.r(i6069[17], i6069[18], 0, i6068, 'trailMaterial')
  i6068.applyActiveColorSpace = !!i6069[19]
  i6068.enabled = !!i6069[20]
  request.r(i6069[21], i6069[22], 0, i6068, 'sharedMaterial')
  var i6071 = i6069[23]
  var i6070 = []
  for(var i = 0; i < i6071.length; i += 2) {
  request.r(i6071[i + 0], i6071[i + 1], 2, i6070, '')
  }
  i6068.sharedMaterials = i6070
  i6068.receiveShadows = !!i6069[24]
  i6068.shadowCastingMode = i6069[25]
  i6068.sortingLayerID = i6069[26]
  i6068.sortingOrder = i6069[27]
  i6068.lightmapIndex = i6069[28]
  i6068.lightmapSceneIndex = i6069[29]
  i6068.lightmapScaleOffset = new pc.Vec4( i6069[30], i6069[31], i6069[32], i6069[33] )
  i6068.lightProbeUsage = i6069[34]
  i6068.reflectionProbeUsage = i6069[35]
  return i6068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6075 = data
  i6074.name = i6075[0]
  i6074.tagId = i6075[1]
  i6074.enabled = !!i6075[2]
  i6074.isStatic = !!i6075[3]
  i6074.layer = i6075[4]
  return i6074
}

Deserializers["Level1_Hair_Playable"] = function (request, data, root) {
  var i6076 = root || request.c( 'Level1_Hair_Playable' )
  var i6077 = data
  request.r(i6077[0], i6077[1], 0, i6076, 'wetCloth')
  request.r(i6077[2], i6077[3], 0, i6076, 'waterDripingParticle')
  i6076.ZoomStep1 = request.d('ZoomPos', i6077[4], i6076.ZoomStep1)
  var i6079 = i6077[5]
  var i6078 = []
  for(var i = 0; i < i6079.length; i += 2) {
  request.r(i6079[i + 0], i6079[i + 1], 2, i6078, '')
  }
  i6076.AllTrash = i6078
  var i6081 = i6077[6]
  var i6080 = []
  for(var i = 0; i < i6081.length; i += 2) {
  request.r(i6081[i + 0], i6081[i + 1], 2, i6080, '')
  }
  i6076.AllTrashOutlines = i6080
  i6076.trashDone = !!i6077[7]
  i6076.trashThrown = i6077[8]
  i6076.trashTotal = i6077[9]
  request.r(i6077[10], i6077[11], 0, i6076, 'bd_Sticky')
  i6076.ZoomStep2 = request.d('ZoomPos', i6077[12], i6076.ZoomStep2)
  request.r(i6077[13], i6077[14], 0, i6076, 'ToolStep2')
  request.r(i6077[15], i6077[16], 0, i6076, 'camFollowStep2')
  var i6083 = i6077[17]
  var i6082 = []
  for(var i = 0; i < i6083.length; i += 2) {
  request.r(i6083[i + 0], i6083[i + 1], 2, i6082, '')
  }
  i6076.AllBugOutlines = i6082
  i6076.ZoomStep2b = request.d('ZoomPos', i6077[18], i6076.ZoomStep2b)
  request.r(i6077[19], i6077[20], 0, i6076, 'ToolStep2b')
  request.r(i6077[21], i6077[22], 0, i6076, 'camFollowStep2b')
  request.r(i6077[23], i6077[24], 0, i6076, 'dustColStep2')
  request.r(i6077[25], i6077[26], 0, i6076, 'handIndicationShower')
  request.r(i6077[27], i6077[28], 0, i6076, 'hairDirtyStatic')
  request.r(i6077[29], i6077[30], 0, i6076, 'hairDirtyWetStatic')
  request.r(i6077[31], i6077[32], 0, i6076, 'dryHairAnim')
  i6076.ZoomStep3 = request.d('ZoomPos', i6077[33], i6076.ZoomStep3)
  request.r(i6077[34], i6077[35], 0, i6076, 'ShampooInHand')
  request.r(i6077[36], i6077[37], 0, i6076, 'ShampooOnHand')
  request.r(i6077[38], i6077[39], 0, i6076, 'ShampooInHandCap')
  request.r(i6077[40], i6077[41], 0, i6076, 'ToolStep3')
  request.r(i6077[42], i6077[43], 0, i6076, 'shampooPatch')
  request.r(i6077[44], i6077[45], 0, i6076, 'handSpriteRend')
  request.r(i6077[46], i6077[47], 0, i6076, 'bottleDefault')
  request.r(i6077[48], i6077[49], 0, i6076, 'bottlePressed')
  request.r(i6077[50], i6077[51], 0, i6076, 'shampooDropping')
  request.r(i6077[52], i6077[53], 0, i6076, 'bottleOpenSfx')
  request.r(i6077[54], i6077[55], 0, i6076, 'bottleSqueezSfx')
  request.r(i6077[56], i6077[57], 0, i6076, 'bottlePourSfx')
  request.r(i6077[58], i6077[59], 0, i6076, 'handIndicationShampoo')
  i6076.ZoomStep4 = request.d('ZoomPos', i6077[60], i6076.ZoomStep4)
  request.r(i6077[61], i6077[62], 0, i6076, 'ToolStep4')
  request.r(i6077[63], i6077[64], 0, i6076, 'camFollowStep4')
  request.r(i6077[65], i6077[66], 0, i6076, 'foamLight_E')
  request.r(i6077[67], i6077[68], 0, i6076, 'foam2_E')
  request.r(i6077[69], i6077[70], 0, i6076, 'foamCol')
  request.r(i6077[71], i6077[72], 0, i6076, 'handIndicationHands')
  request.r(i6077[73], i6077[74], 0, i6076, 'progressStep4')
  i6076.ZoomStep5a = request.d('ZoomPos', i6077[75], i6076.ZoomStep5a)
  i6076.ZoomStep5b = request.d('ZoomPos', i6077[76], i6076.ZoomStep5b)
  request.r(i6077[77], i6077[78], 0, i6076, 'ShowerDamaged')
  request.r(i6077[79], i6077[80], 0, i6076, 'ShowerBackDMG')
  request.r(i6077[81], i6077[82], 0, i6076, 'ShowerInner_dirty')
  request.r(i6077[83], i6077[84], 0, i6076, 'ShowerInner_Target')
  request.r(i6077[85], i6077[86], 0, i6076, 'ShowerFrontDMG')
  request.r(i6077[87], i6077[88], 0, i6076, 'OpenShowerIndication')
  request.r(i6077[89], i6077[90], 0, i6076, 'CloseShowerIndication')
  request.r(i6077[91], i6077[92], 0, i6076, 'showrOpenInput')
  request.r(i6077[93], i6077[94], 0, i6076, 'showerDisk')
  request.r(i6077[95], i6077[96], 0, i6076, 'showerFixReverseAnimDrag')
  request.r(i6077[97], i6077[98], 0, i6076, 'showerDragDamage')
  request.r(i6077[99], i6077[100], 0, i6076, 'ToolStep5Rev')
  i6076.ZoomStep5 = request.d('ZoomPos', i6077[101], i6076.ZoomStep5)
  request.r(i6077[102], i6077[103], 0, i6076, 'ToolStep5')
  request.r(i6077[104], i6077[105], 0, i6076, 'ToolStep5Placeable')
  request.r(i6077[106], i6077[107], 0, i6076, 'toolStep5Progress')
  request.r(i6077[108], i6077[109], 0, i6076, 'toolStep5ProgressHelp')
  request.r(i6077[110], i6077[111], 0, i6076, 'camFollowStep5')
  request.r(i6077[112], i6077[113], 0, i6076, 'showerRender')
  request.r(i6077[114], i6077[115], 0, i6076, 'showerDirty')
  request.r(i6077[116], i6077[117], 0, i6076, 'showerClean')
  request.r(i6077[118], i6077[119], 0, i6076, 'waterShotParticle')
  request.r(i6077[120], i6077[121], 0, i6076, 'showerProblemClip')
  request.r(i6077[122], i6077[123], 0, i6076, 'wetHairs_E')
  i6076.levelName = i6077[124]
  i6076.levelReward = i6077[125]
  request.r(i6077[126], i6077[127], 0, i6076, 'LevelIcon')
  request.r(i6077[128], i6077[129], 0, i6076, 'Level_BG')
  var i6085 = i6077[130]
  var i6084 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i6085.length; i += 2) {
  request.r(i6085[i + 0], i6085[i + 1], 1, i6084, '')
  }
  i6076.ToolIcons = i6084
  var i6087 = i6077[131]
  var i6086 = []
  for(var i = 0; i < i6087.length; i += 2) {
  request.r(i6087[i + 0], i6087[i + 1], 2, i6086, '')
  }
  i6076.AllDrags = i6086
  var i6089 = i6077[132]
  var i6088 = []
  for(var i = 0; i < i6089.length; i += 2) {
  request.r(i6089[i + 0], i6089[i + 1], 2, i6088, '')
  }
  i6076.AllSources = i6088
  var i6091 = i6077[133]
  var i6090 = []
  for(var i = 0; i < i6091.length; i += 2) {
  request.r(i6091[i + 0], i6091[i + 1], 2, i6090, '')
  }
  i6076.AllScratches = i6090
  i6076.stepsDone = i6077[134]
  i6076.levelNo = i6077[135]
  i6076.partNo = i6077[136]
  request.r(i6077[137], i6077[138], 0, i6076, 'bubbleGum')
  return i6076
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i6092 = root || request.c( 'ZoomPos' )
  var i6093 = data
  i6092.CameraPos = new pc.Vec3( i6093[0], i6093[1], i6093[2] )
  i6092.CameraFOV = i6093[3]
  return i6092
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i6104 = root || request.c( 'PlayableCTA' )
  var i6105 = data
  i6104.trigger = i6105[0]
  i6104.afterSeconds = i6105[1]
  i6104.afterTaps = i6105[2]
  request.r(i6105[3], i6105[4], 0, i6104, 'scratchProgress')
  i6104.scratchIndex = i6105[5]
  i6104.progressThreshold = i6105[6]
  request.r(i6105[7], i6105[8], 0, i6104, 'watchedTool')
  i6104.blockInputOnFire = !!i6105[9]
  i6104.refireOnEveryTap = !!i6105[10]
  i6104.refireDelay = i6105[11]
  i6104.showEndCard = !!i6105[12]
  request.r(i6105[13], i6105[14], 0, i6104, 'endCard')
  request.r(i6105[15], i6105[16], 0, i6104, 'endParticles')
  i6104.playEndParticlesOnProgressTrigger = !!i6105[17]
  request.r(i6105[18], i6105[19], 0, i6104, 'stepCompleteParticles')
  i6104.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i6105[20], i6104.onCtaFired)
  i6104.logWhenFired = !!i6105[21]
  return i6104
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i6106 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i6107 = data
  i6106.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6107[0], i6106.m_PersistentCalls)
  return i6106
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6108 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6109 = data
  var i6111 = i6109[0]
  var i6110 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6111.length; i += 1) {
    i6110.add(request.d('UnityEngine.Events.PersistentCall', i6111[i + 0]));
  }
  i6108.m_Calls = i6110
  return i6108
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6114 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6115 = data
  request.r(i6115[0], i6115[1], 0, i6114, 'm_Target')
  i6114.m_TargetAssemblyTypeName = i6115[2]
  i6114.m_MethodName = i6115[3]
  i6114.m_Mode = i6115[4]
  i6114.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6115[5], i6114.m_Arguments)
  i6114.m_CallState = i6115[6]
  return i6114
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i6116 = root || request.c( 'PlayableFadeCoverSettings' )
  var i6117 = data
  i6116.revealDelay = i6117[0]
  i6116.revealDuration = i6117[1]
  return i6116
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i6118 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i6119 = data
  request.r(i6119[0], i6119[1], 0, i6118, 'MainCamera')
  i6118.RenderType = i6119[2]
  request.r(i6119[3], i6119[4], 0, i6118, 'ScratchSurfaceSprite')
  i6118.ScratchSurfaceSpriteHasAlpha = !!i6119[5]
  i6118.MaskProgressCutOffValue = i6119[6]
  request.r(i6119[7], i6119[8], 0, i6118, 'EraseTexture')
  i6118.EraseTextureScale = new pc.Vec2( i6119[9], i6119[10] )
  i6118.InputEnabled = !!i6119[11]
  request.r(i6119[12], i6119[13], 0, i6118, 'Card')
  i6118.Mode = i6119[14]
  request.r(i6119[15], i6119[16], 0, i6118, 'Progress')
  request.r(i6119[17], i6119[18], 0, i6118, 'MeshCard')
  request.r(i6119[19], i6119[20], 0, i6118, 'SpriteCard')
  request.r(i6119[21], i6119[22], 0, i6118, 'ImageCard')
  request.r(i6119[23], i6119[24], 0, i6118, 'MaskShader')
  request.r(i6119[25], i6119[26], 0, i6118, 'BrushShader')
  request.r(i6119[27], i6119[28], 0, i6118, 'MaskProgressShader')
  request.r(i6119[29], i6119[30], 0, i6118, 'MaskProgressCutOffShader')
  return i6118
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i6120 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i6121 = data
  request.r(i6121[0], i6121[1], 0, i6120, 'MainCamera')
  request.r(i6121[2], i6121[3], 0, i6120, 'Surface')
  i6120.RenderTextureQuality = i6121[4]
  request.r(i6121[5], i6121[6], 0, i6120, 'Eraser')
  request.r(i6121[7], i6121[8], 0, i6120, 'Progress')
  request.r(i6121[9], i6121[10], 0, i6120, 'ScratchSurface')
  request.r(i6121[11], i6121[12], 0, i6120, 'RenderTexture')
  i6120.BrushScale = new pc.Vec2( i6121[13], i6121[14] )
  request.r(i6121[15], i6121[16], 0, i6120, 'ToolTip')
  i6120.InputEnabled = !!i6121[17]
  i6120.IsScratching = !!i6121[18]
  i6120.useChangingScale = !!i6121[19]
  i6120.useGivenBrushScale = !!i6121[20]
  i6120.canSpreadMask = !!i6121[21]
  i6120.shouldPaintHoles = !!i6121[22]
  i6120.canRotateTip = !!i6121[23]
  i6120._mode = i6121[24]
  return i6120
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i6122 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i6123 = data
  request.r(i6123[0], i6123[1], 0, i6122, 'Card')
  i6122.currentProgress = i6123[2]
  return i6122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i6124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i6125 = data
  request.r(i6125[0], i6125[1], 0, i6124, 'animatorController')
  request.r(i6125[2], i6125[3], 0, i6124, 'avatar')
  i6124.updateMode = i6125[4]
  i6124.hasTransformHierarchy = !!i6125[5]
  i6124.applyRootMotion = !!i6125[6]
  var i6127 = i6125[7]
  var i6126 = []
  for(var i = 0; i < i6127.length; i += 2) {
  request.r(i6127[i + 0], i6127[i + 1], 2, i6126, '')
  }
  i6124.humanBones = i6126
  i6124.enabled = !!i6125[8]
  return i6124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i6130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i6131 = data
  i6130.color = new pc.Color(i6131[0], i6131[1], i6131[2], i6131[3])
  request.r(i6131[4], i6131[5], 0, i6130, 'sprite')
  i6130.flipX = !!i6131[6]
  i6130.flipY = !!i6131[7]
  i6130.drawMode = i6131[8]
  i6130.size = new pc.Vec2( i6131[9], i6131[10] )
  i6130.tileMode = i6131[11]
  i6130.adaptiveModeThreshold = i6131[12]
  i6130.maskInteraction = i6131[13]
  i6130.spriteSortPoint = i6131[14]
  i6130.enabled = !!i6131[15]
  request.r(i6131[16], i6131[17], 0, i6130, 'sharedMaterial')
  var i6133 = i6131[18]
  var i6132 = []
  for(var i = 0; i < i6133.length; i += 2) {
  request.r(i6133[i + 0], i6133[i + 1], 2, i6132, '')
  }
  i6130.sharedMaterials = i6132
  i6130.receiveShadows = !!i6131[19]
  i6130.shadowCastingMode = i6131[20]
  i6130.sortingLayerID = i6131[21]
  i6130.sortingOrder = i6131[22]
  i6130.lightmapIndex = i6131[23]
  i6130.lightmapSceneIndex = i6131[24]
  i6130.lightmapScaleOffset = new pc.Vec4( i6131[25], i6131[26], i6131[27], i6131[28] )
  i6130.lightProbeUsage = i6131[29]
  i6130.reflectionProbeUsage = i6131[30]
  return i6130
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i6134 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i6135 = data
  request.r(i6135[0], i6135[1], 0, i6134, 'm_RootBone')
  var i6137 = i6135[2]
  var i6136 = []
  for(var i = 0; i < i6137.length; i += 2) {
  request.r(i6137[i + 0], i6137[i + 1], 2, i6136, '')
  }
  i6134.m_BoneTransforms = i6136
  i6134.m_AlwaysUpdate = !!i6135[3]
  i6134.m_AutoRebind = !!i6135[4]
  return i6134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i6138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i6139 = data
  var i6141 = i6139[0]
  var i6140 = []
  for(var i = 0; i < i6141.length; i += 3) {
    i6140.push( new pc.Vec3( i6141[i + 0], i6141[i + 1], i6141[i + 2] ) );
  }
  i6138.positions = i6140
  i6138.positionCount = i6139[1]
  i6138.time = i6139[2]
  i6138.startWidth = i6139[3]
  i6138.endWidth = i6139[4]
  i6138.widthMultiplier = i6139[5]
  i6138.autodestruct = !!i6139[6]
  i6138.emitting = !!i6139[7]
  i6138.numCornerVertices = i6139[8]
  i6138.numCapVertices = i6139[9]
  i6138.minVertexDistance = i6139[10]
  i6138.colorGradient = i6139[11] ? new pc.ColorGradient(i6139[11][0], i6139[11][1], i6139[11][2]) : null
  i6138.startColor = new pc.Color(i6139[12], i6139[13], i6139[14], i6139[15])
  i6138.endColor = new pc.Color(i6139[16], i6139[17], i6139[18], i6139[19])
  i6138.generateLightingData = !!i6139[20]
  i6138.textureMode = i6139[21]
  i6138.alignment = i6139[22]
  i6138.widthCurve = new pc.AnimationCurve( { keys_flow: i6139[23] } )
  i6138.enabled = !!i6139[24]
  request.r(i6139[25], i6139[26], 0, i6138, 'sharedMaterial')
  var i6143 = i6139[27]
  var i6142 = []
  for(var i = 0; i < i6143.length; i += 2) {
  request.r(i6143[i + 0], i6143[i + 1], 2, i6142, '')
  }
  i6138.sharedMaterials = i6142
  i6138.receiveShadows = !!i6139[28]
  i6138.shadowCastingMode = i6139[29]
  i6138.sortingLayerID = i6139[30]
  i6138.sortingOrder = i6139[31]
  i6138.lightmapIndex = i6139[32]
  i6138.lightmapSceneIndex = i6139[33]
  i6138.lightmapScaleOffset = new pc.Vec4( i6139[34], i6139[35], i6139[36], i6139[37] )
  i6138.lightProbeUsage = i6139[38]
  i6138.reflectionProbeUsage = i6139[39]
  return i6138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i6146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i6147 = data
  i6146.textureMode = i6147[0]
  i6146.alignment = i6147[1]
  i6146.widthCurve = new pc.AnimationCurve( { keys_flow: i6147[2] } )
  i6146.colorGradient = i6147[3] ? new pc.ColorGradient(i6147[3][0], i6147[3][1], i6147[3][2]) : null
  var i6149 = i6147[4]
  var i6148 = []
  for(var i = 0; i < i6149.length; i += 3) {
    i6148.push( new pc.Vec3( i6149[i + 0], i6149[i + 1], i6149[i + 2] ) );
  }
  i6146.positions = i6148
  i6146.positionCount = i6147[5]
  i6146.widthMultiplier = i6147[6]
  i6146.startWidth = i6147[7]
  i6146.endWidth = i6147[8]
  i6146.numCornerVertices = i6147[9]
  i6146.numCapVertices = i6147[10]
  i6146.useWorldSpace = !!i6147[11]
  i6146.loop = !!i6147[12]
  i6146.startColor = new pc.Color(i6147[13], i6147[14], i6147[15], i6147[16])
  i6146.endColor = new pc.Color(i6147[17], i6147[18], i6147[19], i6147[20])
  i6146.generateLightingData = !!i6147[21]
  i6146.enabled = !!i6147[22]
  request.r(i6147[23], i6147[24], 0, i6146, 'sharedMaterial')
  var i6151 = i6147[25]
  var i6150 = []
  for(var i = 0; i < i6151.length; i += 2) {
  request.r(i6151[i + 0], i6151[i + 1], 2, i6150, '')
  }
  i6146.sharedMaterials = i6150
  i6146.receiveShadows = !!i6147[26]
  i6146.shadowCastingMode = i6147[27]
  i6146.sortingLayerID = i6147[28]
  i6146.sortingOrder = i6147[29]
  i6146.lightmapIndex = i6147[30]
  i6146.lightmapSceneIndex = i6147[31]
  i6146.lightmapScaleOffset = new pc.Vec4( i6147[32], i6147[33], i6147[34], i6147[35] )
  i6146.lightProbeUsage = i6147[36]
  i6146.reflectionProbeUsage = i6147[37]
  return i6146
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i6152 = root || request.c( 'StaticFixedPipe' )
  var i6153 = data
  request.r(i6153[0], i6153[1], 0, i6152, 'lineRenderer')
  request.r(i6153[2], i6153[3], 0, i6152, 'toolTransform')
  request.r(i6153[4], i6153[5], 0, i6152, 'toolDirectionPoint')
  request.r(i6153[6], i6153[7], 0, i6152, 'fixedEndPoint')
  i6152.segmentCount = i6153[8]
  i6152.totalLength = i6153[9]
  i6152.constraintIterations = i6153[10]
  i6152.gravity = new pc.Vec3( i6153[11], i6153[12], i6153[13] )
  i6152.pipeWidth = i6153[14]
  return i6152
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i6154 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i6155 = data
  i6154.targetIsSelf = !!i6155[0]
  request.r(i6155[1], i6155[2], 0, i6154, 'targetGO')
  i6154.tweenTargetIsTargetGO = !!i6155[3]
  i6154.delay = i6155[4]
  i6154.duration = i6155[5]
  i6154.easeType = i6155[6]
  i6154.easeCurve = new pc.AnimationCurve( { keys_flow: i6155[7] } )
  i6154.loopType = i6155[8]
  i6154.loops = i6155[9]
  i6154.id = i6155[10]
  i6154.isRelative = !!i6155[11]
  i6154.isFrom = !!i6155[12]
  i6154.isIndependentUpdate = !!i6155[13]
  i6154.autoKill = !!i6155[14]
  i6154.autoGenerate = !!i6155[15]
  i6154.isActive = !!i6155[16]
  i6154.isValid = !!i6155[17]
  request.r(i6155[18], i6155[19], 0, i6154, 'target')
  i6154.animationType = i6155[20]
  i6154.targetType = i6155[21]
  i6154.forcedTargetType = i6155[22]
  i6154.autoPlay = !!i6155[23]
  i6154.useTargetAsV3 = !!i6155[24]
  i6154.endValueFloat = i6155[25]
  i6154.endValueV3 = new pc.Vec3( i6155[26], i6155[27], i6155[28] )
  i6154.endValueV2 = new pc.Vec2( i6155[29], i6155[30] )
  i6154.endValueColor = new pc.Color(i6155[31], i6155[32], i6155[33], i6155[34])
  i6154.endValueString = i6155[35]
  i6154.endValueRect = UnityEngine.Rect.MinMaxRect(i6155[36], i6155[37], i6155[38], i6155[39])
  request.r(i6155[40], i6155[41], 0, i6154, 'endValueTransform')
  i6154.optionalBool0 = !!i6155[42]
  i6154.optionalBool1 = !!i6155[43]
  i6154.optionalFloat0 = i6155[44]
  i6154.optionalInt0 = i6155[45]
  i6154.optionalRotationMode = i6155[46]
  i6154.optionalScrambleMode = i6155[47]
  i6154.optionalShakeRandomnessMode = i6155[48]
  i6154.optionalString = i6155[49]
  i6154.updateType = i6155[50]
  i6154.isSpeedBased = !!i6155[51]
  i6154.hasOnStart = !!i6155[52]
  i6154.hasOnPlay = !!i6155[53]
  i6154.hasOnUpdate = !!i6155[54]
  i6154.hasOnStepComplete = !!i6155[55]
  i6154.hasOnComplete = !!i6155[56]
  i6154.hasOnTweenCreated = !!i6155[57]
  i6154.hasOnRewind = !!i6155[58]
  i6154.onStart = request.d('UnityEngine.Events.UnityEvent', i6155[59], i6154.onStart)
  i6154.onPlay = request.d('UnityEngine.Events.UnityEvent', i6155[60], i6154.onPlay)
  i6154.onUpdate = request.d('UnityEngine.Events.UnityEvent', i6155[61], i6154.onUpdate)
  i6154.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i6155[62], i6154.onStepComplete)
  i6154.onComplete = request.d('UnityEngine.Events.UnityEvent', i6155[63], i6154.onComplete)
  i6154.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i6155[64], i6154.onTweenCreated)
  i6154.onRewind = request.d('UnityEngine.Events.UnityEvent', i6155[65], i6154.onRewind)
  return i6154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i6156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i6157 = data
  i6156.usedByComposite = !!i6157[0]
  i6156.autoTiling = !!i6157[1]
  i6156.size = new pc.Vec2( i6157[2], i6157[3] )
  i6156.edgeRadius = i6157[4]
  i6156.enabled = !!i6157[5]
  i6156.isTrigger = !!i6157[6]
  i6156.usedByEffector = !!i6157[7]
  i6156.density = i6157[8]
  i6156.offset = new pc.Vec2( i6157[9], i6157[10] )
  request.r(i6157[11], i6157[12], 0, i6156, 'material')
  return i6156
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i6158 = root || request.c( 'BasicDrag' )
  var i6159 = data
  i6158.canDrag = !!i6159[0]
  i6158.dragByDelta = !!i6159[1]
  i6158.isDragging = !!i6159[2]
  i6158.moveWithPointer = !!i6159[3]
  i6158.canReturn = !!i6159[4]
  i6158.jumpOnReturn = !!i6159[5]
  i6158.returnTime = i6159[6]
  i6158.Tool_Offset = new pc.Vec3( i6159[7], i6159[8], i6159[9] )
  i6158.canScaleIncrease = !!i6159[10]
  i6158.Self_ScaleNew = new pc.Vec3( i6159[11], i6159[12], i6159[13] )
  i6158.canRotateOnPick = !!i6159[14]
  i6158.startRot = new pc.Vec3( i6159[15], i6159[16], i6159[17] )
  i6158.newRot = new pc.Vec3( i6159[18], i6159[19], i6159[20] )
  var i6161 = i6159[21]
  var i6160 = []
  for(var i = 0; i < i6161.length; i += 2) {
  request.r(i6161[i + 0], i6161[i + 1], 2, i6160, '')
  }
  i6158.childSprite = i6160
  request.r(i6159[22], i6159[23], 0, i6158, 'ToolSelectClip')
  request.r(i6159[24], i6159[25], 0, i6158, 'ToolLoopClip')
  request.r(i6159[26], i6159[27], 0, i6158, 'thisParticles')
  i6158.onDragparticle = !!i6159[28]
  request.r(i6159[29], i6159[30], 0, i6158, 'dragParticles')
  request.r(i6159[31], i6159[32], 0, i6158, 'anim')
  i6158.startPos = new pc.Vec3( i6159[33], i6159[34], i6159[35] )
  i6158.startScale = new pc.Vec3( i6159[36], i6159[37], i6159[38] )
  i6158.Vibration = !!i6159[39]
  i6158.isPlacedCannotMove = !!i6159[40]
  i6158.isObjectMovingWhileDragging = !!i6159[41]
  i6158.OnMouseDownEvent = request.d('System.Action', i6159[42], i6158.OnMouseDownEvent)
  i6158.OnMouseUpEvent = request.d('System.Action', i6159[43], i6158.OnMouseUpEvent)
  i6158.ProgStartEvent = request.d('System.Action', i6159[44], i6158.ProgStartEvent)
  i6158.ProgEndEvent = request.d('System.Action', i6159[45], i6158.ProgEndEvent)
  i6158.canCallMouseUpWhenGamePaused = !!i6159[46]
  i6158.ClampX_L = i6159[47]
  i6158.ClampX_H = i6159[48]
  i6158.ClampY_L = i6159[49]
  i6158.ClampY_H = i6159[50]
  i6158.startOrder = i6159[51]
  i6158.dontResetItIsInCollider = !!i6159[52]
  request.r(i6159[53], i6159[54], 0, i6158, 'thisCollider')
  request.r(i6159[55], i6159[56], 0, i6158, 'thisSR')
  i6158.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i6159[57], i6158.OnMouseDownEventIndependentFromCanDrag)
  return i6158
}

Deserializers["System.Action"] = function (request, data, root) {
  var i6164 = root || request.c( 'System.Action' )
  var i6165 = data
  return i6164
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i6166 = root || request.c( 'BD_Clamp' )
  var i6167 = data
  i6166.ClampX_L = i6167[0]
  i6166.ClampX_H = i6167[1]
  i6166.ClampY_L = i6167[2]
  i6166.ClampY_H = i6167[3]
  return i6166
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i6168 = root || request.c( 'OutlinePulse' )
  var i6169 = data
  i6168.smallThickness = i6169[0]
  i6168.largeThickness = i6169[1]
  i6168.transitionSpeed = i6169[2]
  i6168.animationSpeed = i6169[3]
  i6168.isThickOutline = !!i6169[4]
  i6168.animate = !!i6169[5]
  i6168.hideSpriteOnly = !!i6169[6]
  return i6168
}

Deserializers["BD_ItemPick"] = function (request, data, root) {
  var i6170 = root || request.c( 'BD_ItemPick' )
  var i6171 = data
  request.r(i6171[0], i6171[1], 0, i6170, 'Tool')
  request.r(i6171[2], i6171[3], 0, i6170, 'Outline')
  request.r(i6171[4], i6171[5], 0, i6170, 'itemRend')
  request.r(i6171[6], i6171[7], 0, i6170, 'pick_sp')
  i6170.OnTap = request.d('UnityEngine.Events.UnityEvent', i6171[8], i6170.OnTap)
  i6170.OnComplete = request.d('UnityEngine.Events.UnityEvent', i6171[9], i6170.OnComplete)
  request.r(i6171[10], i6171[11], 0, i6170, 'Clip')
  i6170.minDragDistance = i6171[12]
  i6170.isTaped = !!i6171[13]
  return i6170
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i6172 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i6173 = data
  request.r(i6173[0], i6173[1], 0, i6172, 'm_ObjectArgument')
  i6172.m_ObjectArgumentAssemblyTypeName = i6173[2]
  i6172.m_IntArgument = i6173[3]
  i6172.m_FloatArgument = i6173[4]
  i6172.m_StringArgument = i6173[5]
  i6172.m_BoolArgument = !!i6173[6]
  return i6172
}

Deserializers["BD_Sticky"] = function (request, data, root) {
  var i6174 = root || request.c( 'BD_Sticky' )
  var i6175 = data
  request.r(i6175[0], i6175[1], 0, i6174, 'anim')
  i6174.isVerticlePull = !!i6175[2]
  request.r(i6175[3], i6175[4], 0, i6174, 'pickSfx')
  request.r(i6175[5], i6175[6], 0, i6174, 'pulledClip')
  request.r(i6175[7], i6175[8], 0, i6174, 'pullSource')
  i6174.OnComplete = request.d('UnityEngine.Events.UnityEvent', i6175[9], i6174.OnComplete)
  i6174.changeLayerPick = !!i6175[10]
  request.r(i6175[11], i6175[12], 0, i6174, 'sp_rendr')
  i6174.def_layerNo = i6175[13]
  i6174.tar_LayerNo = i6175[14]
  i6174.direction = i6175[15]
  i6174.dragThreshold = i6175[16]
  i6174.pullDistanceToFree = i6175[17]
  i6174.returnSpeed = i6175[18]
  i6174.resistance = i6175[19]
  var i6177 = i6175[20]
  var i6176 = []
  for(var i = 0; i < i6177.length; i += 2) {
  request.r(i6177[i + 0], i6177[i + 1], 2, i6176, '')
  }
  i6174.StartBones = i6176
  var i6179 = i6175[21]
  var i6178 = []
  for(var i = 0; i < i6179.length; i += 2) {
  request.r(i6179[i + 0], i6179[i + 1], 2, i6178, '')
  }
  i6174.EndBones = i6178
  request.r(i6175[22], i6175[23], 0, i6174, 'BonePivot')
  return i6174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i6180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i6181 = data
  request.r(i6181[0], i6181[1], 0, i6180, 'clip')
  request.r(i6181[2], i6181[3], 0, i6180, 'outputAudioMixerGroup')
  i6180.playOnAwake = !!i6181[4]
  i6180.loop = !!i6181[5]
  i6180.time = i6181[6]
  i6180.volume = i6181[7]
  i6180.pitch = i6181[8]
  i6180.enabled = !!i6181[9]
  return i6180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i6182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i6183 = data
  i6182.radius = i6183[0]
  i6182.enabled = !!i6183[1]
  i6182.isTrigger = !!i6183[2]
  i6182.usedByEffector = !!i6183[3]
  i6182.density = i6183[4]
  i6182.offset = new pc.Vec2( i6183[5], i6183[6] )
  request.r(i6183[7], i6183[8], 0, i6182, 'material')
  return i6182
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i6184 = root || request.c( 'PlayParticlesOnCollision' )
  var i6185 = data
  request.r(i6185[0], i6185[1], 0, i6184, 'Target')
  request.r(i6185[2], i6185[3], 0, i6184, 'ParticlePrefab')
  i6184.destroyIt = !!i6185[4]
  i6184.stayAtPlace = !!i6185[5]
  i6184.disableOnCollision = !!i6185[6]
  i6184.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i6185[7], i6184.OnCollisionEvent)
  return i6184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i6186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i6187 = data
  i6186.frontSortingLayerID = i6187[0]
  i6186.frontSortingOrder = i6187[1]
  i6186.backSortingLayerID = i6187[2]
  i6186.backSortingOrder = i6187[3]
  i6186.alphaCutoff = i6187[4]
  request.r(i6187[5], i6187[6], 0, i6186, 'sprite')
  i6186.tileMode = i6187[7]
  i6186.isCustomRangeActive = !!i6187[8]
  i6186.spriteSortPoint = i6187[9]
  i6186.enabled = !!i6187[10]
  request.r(i6187[11], i6187[12], 0, i6186, 'sharedMaterial')
  var i6189 = i6187[13]
  var i6188 = []
  for(var i = 0; i < i6189.length; i += 2) {
  request.r(i6189[i + 0], i6189[i + 1], 2, i6188, '')
  }
  i6186.sharedMaterials = i6188
  i6186.receiveShadows = !!i6187[14]
  i6186.shadowCastingMode = i6187[15]
  i6186.sortingLayerID = i6187[16]
  i6186.sortingOrder = i6187[17]
  i6186.lightmapIndex = i6187[18]
  i6186.lightmapSceneIndex = i6187[19]
  i6186.lightmapScaleOffset = new pc.Vec4( i6187[20], i6187[21], i6187[22], i6187[23] )
  i6186.lightProbeUsage = i6187[24]
  i6186.reflectionProbeUsage = i6187[25]
  return i6186
}

Deserializers["PlayTweenOnHit"] = function (request, data, root) {
  var i6190 = root || request.c( 'PlayTweenOnHit' )
  var i6191 = data
  i6190.isContinueous = !!i6191[0]
  request.r(i6191[1], i6191[2], 0, i6190, 'tool')
  var i6193 = i6191[3]
  var i6192 = []
  for(var i = 0; i < i6193.length; i += 2) {
  request.r(i6193[i + 0], i6193[i + 1], 2, i6192, '')
  }
  i6190.animsToPlay = i6192
  request.r(i6191[4], i6191[5], 0, i6190, 'tipTarget')
  return i6190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i6196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i6197 = data
  i6196.usedByComposite = !!i6197[0]
  i6196.autoTiling = !!i6197[1]
  var i6199 = i6197[2]
  var i6198 = []
  for(var i = 0; i < i6199.length; i += 1) {
  var i6201 = i6199[i + 0]
  var i6200 = []
  for(var i = 0; i < i6201.length; i += 2) {
    i6200.push( new pc.Vec2( i6201[i + 0], i6201[i + 1] ) );
  }
    i6198.push( i6200 );
  }
  i6196.points = i6198
  i6196.enabled = !!i6197[3]
  i6196.isTrigger = !!i6197[4]
  i6196.usedByEffector = !!i6197[5]
  i6196.density = i6197[6]
  i6196.offset = new pc.Vec2( i6197[7], i6197[8] )
  request.r(i6197[9], i6197[10], 0, i6196, 'material')
  return i6196
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i6208 = root || request.c( 'PlaySfxOnCollision' )
  var i6209 = data
  request.r(i6209[0], i6209[1], 0, i6208, 'Tip')
  i6208.Mode = i6209[2]
  request.r(i6209[3], i6209[4], 0, i6208, 'DragInput')
  request.r(i6209[5], i6209[6], 0, i6208, 'Source')
  i6208.startVol = i6209[7]
  i6208.targetVol = i6209[8]
  i6208.duration = i6209[9]
  request.r(i6209[10], i6209[11], 0, i6208, 'Particles')
  i6208.isDone = !!i6209[12]
  i6208.isInArea = !!i6209[13]
  i6208.isPlaying = !!i6209[14]
  return i6208
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i6210 = root || request.c( 'InteractableBones' )
  var i6211 = data
  request.r(i6211[0], i6211[1], 0, i6210, 'Tip')
  i6210.MoveAmount = i6211[2]
  i6210.MoveSpeed = i6211[3]
  i6210.ShakeSpeed = i6211[4]
  i6210.MovementThreshold = i6211[5]
  i6210.MoveX = !!i6211[6]
  i6210.MoveY = !!i6211[7]
  return i6210
}

Deserializers["WaypointFollower"] = function (request, data, root) {
  var i6212 = root || request.c( 'WaypointFollower' )
  var i6213 = data
  var i6215 = i6213[0]
  var i6214 = []
  for(var i = 0; i < i6215.length; i += 2) {
  request.r(i6215[i + 0], i6215[i + 1], 2, i6214, '')
  }
  i6212.waypoints = i6214
  i6212.speed = i6213[1]
  i6212.rotationSpeed = i6213[2]
  i6212.loop = !!i6213[3]
  i6212.reverse = !!i6213[4]
  i6212.canMove = !!i6213[5]
  request.r(i6213[6], i6213[7], 0, i6212, 'movingSfx')
  return i6212
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i6216 = root || request.c( 'BD_Action' )
  var i6217 = data
  i6216.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i6217[0], i6216.OnMouseDownEvent)
  i6216.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i6217[1], i6216.OnMouseUpEvent)
  i6216.setToolLayer = !!i6217[2]
  request.r(i6217[3], i6217[4], 0, i6216, 'tool_SP')
  return i6216
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i6218 = root || request.c( 'BD_CameraFollow' )
  var i6219 = data
  request.r(i6219[0], i6219[1], 0, i6218, 'Tool')
  request.r(i6219[2], i6219[3], 0, i6218, 'Pivot')
  i6218.FOV = i6219[4]
  i6218.Y_L = i6219[5]
  i6218.Y_H = i6219[6]
  i6218.X_L = i6219[7]
  i6218.X_R = i6219[8]
  i6218.startDelay = i6219[9]
  i6218.duration = i6219[10]
  return i6218
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i6220 = root || request.c( 'BD_ToolRotate' )
  var i6221 = data
  i6220.startDelay = i6221[0]
  request.r(i6221[1], i6221[2], 0, i6220, 'Tool')
  request.r(i6221[3], i6221[4], 0, i6220, 'Clamp')
  request.r(i6221[5], i6221[6], 0, i6220, 'Pivot')
  i6220.MinAngle = new pc.Vec3( i6221[7], i6221[8], i6221[9] )
  i6220.MaxAngle = new pc.Vec3( i6221[10], i6221[11], i6221[12] )
  i6220.rotationSpeed = i6221[13]
  return i6220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i6222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i6223 = data
  i6222.bodyType = i6223[0]
  request.r(i6223[1], i6223[2], 0, i6222, 'material')
  i6222.simulated = !!i6223[3]
  i6222.useAutoMass = !!i6223[4]
  i6222.mass = i6223[5]
  i6222.drag = i6223[6]
  i6222.angularDrag = i6223[7]
  i6222.gravityScale = i6223[8]
  i6222.collisionDetectionMode = i6223[9]
  i6222.sleepMode = i6223[10]
  i6222.constraints = i6223[11]
  return i6222
}

Deserializers["BugKill_Tip"] = function (request, data, root) {
  var i6224 = root || request.c( 'BugKill_Tip' )
  var i6225 = data
  var i6227 = i6225[0]
  var i6226 = []
  for(var i = 0; i < i6227.length; i += 2) {
  request.r(i6227[i + 0], i6227[i + 1], 2, i6226, '')
  }
  i6224.targets = i6226
  i6224.waypointFollower = !!i6225[1]
  i6224.fallSpeed = i6225[2]
  i6224.totalTargets = i6225[3]
  i6224.killCount = i6225[4]
  request.r(i6225[5], i6225[6], 0, i6224, 'bugKillSfx')
  i6224.OnComplete = request.d('UnityEngine.Events.UnityEvent', i6225[7], i6224.OnComplete)
  return i6224
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i6230 = root || request.c( 'BD_Progress' )
  var i6231 = data
  var i6233 = i6231[0]
  var i6232 = []
  for(var i = 0; i < i6233.length; i += 1) {
    i6232.push( request.d('ScratchData', i6233[i + 0]) );
  }
  i6230.AllScratches = i6232
  i6230.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i6231[1], i6230.OnScratchComplete)
  i6230.isProgDone = !!i6231[2]
  i6230.canCallComplete = !!i6231[3]
  i6230.CollectiveAppear = !!i6231[4]
  i6230.tipControl = !!i6231[5]
  i6230.progressControl = !!i6231[6]
  request.r(i6231[7], i6231[8], 0, i6230, 'thisDrag')
  i6230.CompleteEvent = request.d('System.Action', i6231[9], i6230.CompleteEvent)
  i6230.SubCompleteEvent = request.d('System.Action', i6231[10], i6230.SubCompleteEvent)
  return i6230
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i6236 = root || request.c( 'ScratchData' )
  var i6237 = data
  request.r(i6237[0], i6237[1], 0, i6236, 'ScratchManager')
  i6236.scratchLimit = i6237[2]
  i6236.isComplete = !!i6237[3]
  return i6236
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i6238 = root || request.c( 'BD_ProgressHelper' )
  var i6239 = data
  request.r(i6239[0], i6239[1], 0, i6238, 'BD_Progress')
  request.r(i6239[2], i6239[3], 0, i6238, 'fadeSprite')
  i6238.fadeIn = !!i6239[4]
  return i6238
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i6240 = root || request.c( 'ActionOnTap' )
  var i6241 = data
  i6240.OnTap = request.d('UnityEngine.Events.UnityEvent', i6241[0], i6240.OnTap)
  return i6240
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i6242 = root || request.c( 'BD_SpriteChange' )
  var i6243 = data
  request.r(i6243[0], i6243[1], 0, i6242, 'BD')
  request.r(i6243[2], i6243[3], 0, i6242, 'SR')
  request.r(i6243[4], i6243[5], 0, i6242, 'Default')
  request.r(i6243[6], i6243[7], 0, i6242, 'Picked')
  i6242.resetOnRelease = !!i6243[8]
  return i6242
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i6244 = root || request.c( 'BD_AnimatorDrag' )
  var i6245 = data
  request.r(i6245[0], i6245[1], 0, i6244, 'BD')
  request.r(i6245[2], i6245[3], 0, i6244, 'anim')
  request.r(i6245[4], i6245[5], 0, i6244, 'Source')
  i6244.Vibration = !!i6245[6]
  i6244.isCompletable = !!i6245[7]
  i6244.completionThreshold = i6245[8]
  i6244.OnComplete = request.d('UnityEngine.Events.UnityEvent', i6245[9], i6244.OnComplete)
  return i6244
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i6246 = root || request.c( 'PlaceItem' )
  var i6247 = data
  request.r(i6247[0], i6247[1], 0, i6246, 'thisDrag')
  request.r(i6247[2], i6247[3], 0, i6246, 'Target')
  request.r(i6247[4], i6247[5], 0, i6246, 'Clip')
  i6246.jumpOnPlace = !!i6247[6]
  i6246.jumpHeight = i6247[7]
  i6246.jumpDuration = i6247[8]
  i6246.settleDuration = i6247[9]
  i6246.isPlaced = !!i6247[10]
  i6246.isInsideCollider = !!i6247[11]
  i6246.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i6247[12], i6246.OnPlaced)
  return i6246
}

Deserializers["BD_Audio"] = function (request, data, root) {
  var i6248 = root || request.c( 'BD_Audio' )
  var i6249 = data
  request.r(i6249[0], i6249[1], 0, i6248, 'BD')
  request.r(i6249[2], i6249[3], 0, i6248, 'Source')
  i6248.shouldRestart = !!i6249[4]
  i6248.startVol = i6249[5]
  i6248.targetVol = i6249[6]
  i6248.duration = i6249[7]
  i6248.startDelay = i6249[8]
  return i6248
}

Deserializers["Level1_HairAnim"] = function (request, data, root) {
  var i6250 = root || request.c( 'Level1_HairAnim' )
  var i6251 = data
  i6250.holdDuration = i6251[0]
  request.r(i6251[1], i6251[2], 0, i6250, 'targetSprite')
  i6250.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i6251[3], i6250.onHoldComplete)
  i6250.isHolding = !!i6251[4]
  request.r(i6251[5], i6251[6], 0, i6250, 'targetObj')
  request.r(i6251[7], i6251[8], 0, i6250, 'thisTool')
  request.r(i6251[9], i6251[10], 0, i6250, 'thisToolTip')
  var i6253 = i6251[11]
  var i6252 = []
  for(var i = 0; i < i6253.length; i += 2) {
  request.r(i6253[i + 0], i6253[i + 1], 2, i6252, '')
  }
  i6250.hairsAnim = i6252
  var i6255 = i6251[12]
  var i6254 = []
  for(var i = 0; i < i6255.length; i += 2) {
  request.r(i6255[i + 0], i6255[i + 1], 2, i6254, '')
  }
  i6250.hairsRend = i6254
  i6250.hairsRendFadeThreshold = i6251[13]
  request.r(i6251[14], i6251[15], 0, i6250, 'wetHairRend')
  request.r(i6251[16], i6251[17], 0, i6250, 'dryHairRend')
  request.r(i6251[18], i6251[19], 0, i6250, 'dryHairRendBack')
  i6250.hairAnimStopDuration = i6251[20]
  i6250.hairAnimResumeDuration = i6251[21]
  return i6250
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i6256 = root || request.c( 'SpriteButton' )
  var i6257 = data
  i6256.onClick = request.d('UnityEngine.Events.UnityEvent', i6257[0], i6256.onClick)
  request.r(i6257[1], i6257[2], 0, i6256, 'spriteRenderer')
  request.r(i6257[3], i6257[4], 0, i6256, 'normalSprite')
  request.r(i6257[5], i6257[6], 0, i6256, 'hoverSprite')
  request.r(i6257[7], i6257[8], 0, i6256, 'pressedSprite')
  i6256.hoverScale = i6257[9]
  i6256.pressScale = i6257[10]
  i6256.animationDuration = i6257[11]
  return i6256
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i6258 = root || request.c( 'DestroyObj' )
  var i6259 = data
  i6258.destroyDelay = i6259[0]
  return i6258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i6260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i6261 = data
  i6260.name = i6261[0]
  i6260.atlasId = i6261[1]
  i6260.mipmapCount = i6261[2]
  i6260.hdr = !!i6261[3]
  i6260.size = i6261[4]
  i6260.anisoLevel = i6261[5]
  i6260.filterMode = i6261[6]
  var i6263 = i6261[7]
  var i6262 = []
  for(var i = 0; i < i6263.length; i += 4) {
    i6262.push( UnityEngine.Rect.MinMaxRect(i6263[i + 0], i6263[i + 1], i6263[i + 2], i6263[i + 3]) );
  }
  i6260.rects = i6262
  i6260.wrapU = i6261[8]
  i6260.wrapV = i6261[9]
  return i6260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6267 = data
  i6266.name = i6267[0]
  i6266.index = i6267[1]
  i6266.startup = !!i6267[2]
  return i6266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6269 = data
  i6268.aspect = i6269[0]
  i6268.orthographic = !!i6269[1]
  i6268.orthographicSize = i6269[2]
  i6268.backgroundColor = new pc.Color(i6269[3], i6269[4], i6269[5], i6269[6])
  i6268.nearClipPlane = i6269[7]
  i6268.farClipPlane = i6269[8]
  i6268.fieldOfView = i6269[9]
  i6268.depth = i6269[10]
  i6268.clearFlags = i6269[11]
  i6268.cullingMask = i6269[12]
  i6268.rect = i6269[13]
  request.r(i6269[14], i6269[15], 0, i6268, 'targetTexture')
  i6268.usePhysicalProperties = !!i6269[16]
  i6268.focalLength = i6269[17]
  i6268.sensorSize = new pc.Vec2( i6269[18], i6269[19] )
  i6268.lensShift = new pc.Vec2( i6269[20], i6269[21] )
  i6268.gateFit = i6269[22]
  i6268.commandBufferCount = i6269[23]
  i6268.cameraType = i6269[24]
  i6268.enabled = !!i6269[25]
  return i6268
}

Deserializers["CameraController"] = function (request, data, root) {
  var i6270 = root || request.c( 'CameraController' )
  var i6271 = data
  request.r(i6271[0], i6271[1], 0, i6270, 'cam')
  i6270.defaultPosition = new pc.Vec3( i6271[2], i6271[3], i6271[4] )
  i6270.defaultSize = i6271[5]
  i6270.defaultFOV = i6271[6]
  i6270.defaultDuration = i6271[7]
  i6270.defaultEase = i6271[8]
  return i6270
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i6272 = root || request.c( 'MusicSource' )
  var i6273 = data
  request.r(i6273[0], i6273[1], 0, i6272, 'source')
  return i6272
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i6274 = root || request.c( 'UI_Manager' )
  var i6275 = data
  i6274.levelCompleted = !!i6275[0]
  i6274.isPauseActive = !!i6275[1]
  i6274.loadIndex = i6275[2]
  request.r(i6275[3], i6275[4], 0, i6274, 'removeAdsButton')
  request.r(i6275[5], i6275[6], 0, i6274, 'pauseButton')
  request.r(i6275[7], i6275[8], 0, i6274, 'Fade_Img')
  request.r(i6275[9], i6275[10], 0, i6274, 'TopBarAnim')
  request.r(i6275[11], i6275[12], 0, i6274, 'MainPanel')
  request.r(i6275[13], i6275[14], 0, i6274, 'PausePanel')
  request.r(i6275[15], i6275[16], 0, i6274, 'PausePopUp')
  request.r(i6275[17], i6275[18], 0, i6274, 'PauseCanvasGroup')
  request.r(i6275[19], i6275[20], 0, i6274, 'RateUsPanel')
  request.r(i6275[21], i6275[22], 0, i6274, 'RateUsPopUp')
  request.r(i6275[23], i6275[24], 0, i6274, 'RemoveAdsPanel')
  request.r(i6275[25], i6275[26], 0, i6274, 'RemoveAdsPopUp')
  request.r(i6275[27], i6275[28], 0, i6274, 'RemoveAdsCanvasGroup')
  var i6277 = i6275[29]
  var i6276 = []
  for(var i = 0; i < i6277.length; i += 2) {
  request.r(i6277[i + 0], i6277[i + 1], 2, i6276, '')
  }
  i6274.RemoveAdsAnims = i6276
  request.r(i6275[30], i6275[31], 0, i6274, 'CompletePanel')
  request.r(i6275[32], i6275[33], 0, i6274, 'LevelIcon')
  request.r(i6275[34], i6275[35], 0, i6274, 'CompleteParticles')
  request.r(i6275[36], i6275[37], 0, i6274, 'progressBar')
  request.r(i6275[38], i6275[39], 0, i6274, 'progressText')
  request.r(i6275[40], i6275[41], 0, i6274, 'toolIcon1')
  request.r(i6275[42], i6275[43], 0, i6274, 'toolIcon2')
  request.r(i6275[44], i6275[45], 0, i6274, 'toolIcon3')
  request.r(i6275[46], i6275[47], 0, i6274, 'target1')
  request.r(i6275[48], i6275[49], 0, i6274, 'target2')
  i6274.toolMoveDuration = i6275[50]
  i6274.currentIndex = i6275[51]
  var i6279 = i6275[52]
  var i6278 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i6279.length; i += 2) {
  request.r(i6279[i + 0], i6279[i + 1], 1, i6278, '')
  }
  i6274.allTools = i6278
  request.r(i6275[53], i6275[54], 0, i6274, 'clockProgress')
  request.r(i6275[55], i6275[56], 0, i6274, 'clockProgressFill')
  request.r(i6275[57], i6275[58], 0, i6274, 'clockAudio')
  i6274.moveDistance = i6275[59]
  i6274.animationDuration = i6275[60]
  i6274.greyBgChildName = i6275[61]
  i6274.pushOffset = i6275[62]
  return i6274
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i6280 = root || request.c( 'GameManagerPlayable' )
  var i6281 = data
  request.r(i6281[0], i6281[1], 0, i6280, 'DefaultMat')
  request.r(i6281[2], i6281[3], 0, i6280, 'BG_Music')
  request.r(i6281[4], i6281[5], 0, i6280, 'restoreEffectShader')
  request.r(i6281[6], i6281[7], 0, i6280, 'stickerEffectShader')
  i6280.isComplete = !!i6281[8]
  i6280.isPaused = !!i6281[9]
  request.r(i6281[10], i6281[11], 0, i6280, 'currentLevel')
  return i6280
}

Deserializers["AudioController"] = function (request, data, root) {
  var i6282 = root || request.c( 'AudioController' )
  var i6283 = data
  request.r(i6283[0], i6283[1], 0, i6282, 'MainMixer')
  request.r(i6283[2], i6283[3], 0, i6282, 'UiClick')
  request.r(i6283[4], i6283[5], 0, i6282, 'UiClickSource')
  var i6285 = i6283[6]
  var i6284 = []
  for(var i = 0; i < i6285.length; i += 2) {
  request.r(i6285[i + 0], i6285[i + 1], 2, i6284, '')
  }
  i6282.SfxSources = i6284
  var i6287 = i6283[7]
  var i6286 = []
  for(var i = 0; i < i6287.length; i += 2) {
  request.r(i6287[i + 0], i6287[i + 1], 2, i6286, '')
  }
  i6282.AllClips = i6286
  return i6282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6291 = data
  i6290.pivot = new pc.Vec2( i6291[0], i6291[1] )
  i6290.anchorMin = new pc.Vec2( i6291[2], i6291[3] )
  i6290.anchorMax = new pc.Vec2( i6291[4], i6291[5] )
  i6290.sizeDelta = new pc.Vec2( i6291[6], i6291[7] )
  i6290.anchoredPosition3D = new pc.Vec3( i6291[8], i6291[9], i6291[10] )
  i6290.rotation = new pc.Quat(i6291[11], i6291[12], i6291[13], i6291[14])
  i6290.scale = new pc.Vec3( i6291[15], i6291[16], i6291[17] )
  return i6290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6293 = data
  i6292.planeDistance = i6293[0]
  i6292.referencePixelsPerUnit = i6293[1]
  i6292.isFallbackOverlay = !!i6293[2]
  i6292.renderMode = i6293[3]
  i6292.renderOrder = i6293[4]
  i6292.sortingLayerName = i6293[5]
  i6292.sortingOrder = i6293[6]
  i6292.scaleFactor = i6293[7]
  request.r(i6293[8], i6293[9], 0, i6292, 'worldCamera')
  i6292.overrideSorting = !!i6293[10]
  i6292.pixelPerfect = !!i6293[11]
  i6292.targetDisplay = i6293[12]
  i6292.overridePixelPerfect = !!i6293[13]
  i6292.enabled = !!i6293[14]
  return i6292
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6294 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6295 = data
  i6294.m_UiScaleMode = i6295[0]
  i6294.m_ReferencePixelsPerUnit = i6295[1]
  i6294.m_ScaleFactor = i6295[2]
  i6294.m_ReferenceResolution = new pc.Vec2( i6295[3], i6295[4] )
  i6294.m_ScreenMatchMode = i6295[5]
  i6294.m_MatchWidthOrHeight = i6295[6]
  i6294.m_PhysicalUnit = i6295[7]
  i6294.m_FallbackScreenDPI = i6295[8]
  i6294.m_DefaultSpriteDPI = i6295[9]
  i6294.m_DynamicPixelsPerUnit = i6295[10]
  i6294.m_PresetInfoIsWorld = !!i6295[11]
  return i6294
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6296 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6297 = data
  i6296.m_IgnoreReversedGraphics = !!i6297[0]
  i6296.m_BlockingObjects = i6297[1]
  i6296.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6297[2] )
  return i6296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6299 = data
  i6298.cullTransparentMesh = !!i6299[0]
  return i6298
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6300 = root || request.c( 'UnityEngine.UI.Image' )
  var i6301 = data
  request.r(i6301[0], i6301[1], 0, i6300, 'm_Sprite')
  i6300.m_Type = i6301[2]
  i6300.m_PreserveAspect = !!i6301[3]
  i6300.m_FillCenter = !!i6301[4]
  i6300.m_FillMethod = i6301[5]
  i6300.m_FillAmount = i6301[6]
  i6300.m_FillClockwise = !!i6301[7]
  i6300.m_FillOrigin = i6301[8]
  i6300.m_UseSpriteMesh = !!i6301[9]
  i6300.m_PixelsPerUnitMultiplier = i6301[10]
  request.r(i6301[11], i6301[12], 0, i6300, 'm_Material')
  i6300.m_Maskable = !!i6301[13]
  i6300.m_Color = new pc.Color(i6301[14], i6301[15], i6301[16], i6301[17])
  i6300.m_RaycastTarget = !!i6301[18]
  i6300.m_RaycastPadding = new pc.Vec4( i6301[19], i6301[20], i6301[21], i6301[22] )
  return i6300
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i6302 = root || request.c( 'UnityEngine.UI.Text' )
  var i6303 = data
  i6302.m_FontData = request.d('UnityEngine.UI.FontData', i6303[0], i6302.m_FontData)
  i6302.m_Text = i6303[1]
  request.r(i6303[2], i6303[3], 0, i6302, 'm_Material')
  i6302.m_Maskable = !!i6303[4]
  i6302.m_Color = new pc.Color(i6303[5], i6303[6], i6303[7], i6303[8])
  i6302.m_RaycastTarget = !!i6303[9]
  i6302.m_RaycastPadding = new pc.Vec4( i6303[10], i6303[11], i6303[12], i6303[13] )
  return i6302
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i6304 = root || request.c( 'UnityEngine.UI.FontData' )
  var i6305 = data
  request.r(i6305[0], i6305[1], 0, i6304, 'm_Font')
  i6304.m_FontSize = i6305[2]
  i6304.m_FontStyle = i6305[3]
  i6304.m_BestFit = !!i6305[4]
  i6304.m_MinSize = i6305[5]
  i6304.m_MaxSize = i6305[6]
  i6304.m_Alignment = i6305[7]
  i6304.m_AlignByGeometry = !!i6305[8]
  i6304.m_RichText = !!i6305[9]
  i6304.m_HorizontalOverflow = i6305[10]
  i6304.m_VerticalOverflow = i6305[11]
  i6304.m_LineSpacing = i6305[12]
  return i6304
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6306 = root || request.c( 'UnityEngine.UI.Button' )
  var i6307 = data
  i6306.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6307[0], i6306.m_OnClick)
  i6306.m_Navigation = request.d('UnityEngine.UI.Navigation', i6307[1], i6306.m_Navigation)
  i6306.m_Transition = i6307[2]
  i6306.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6307[3], i6306.m_Colors)
  i6306.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6307[4], i6306.m_SpriteState)
  i6306.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6307[5], i6306.m_AnimationTriggers)
  i6306.m_Interactable = !!i6307[6]
  request.r(i6307[7], i6307[8], 0, i6306, 'm_TargetGraphic')
  return i6306
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6308 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6309 = data
  i6308.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6309[0], i6308.m_PersistentCalls)
  return i6308
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6310 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6311 = data
  i6310.m_Mode = i6311[0]
  i6310.m_WrapAround = !!i6311[1]
  request.r(i6311[2], i6311[3], 0, i6310, 'm_SelectOnUp')
  request.r(i6311[4], i6311[5], 0, i6310, 'm_SelectOnDown')
  request.r(i6311[6], i6311[7], 0, i6310, 'm_SelectOnLeft')
  request.r(i6311[8], i6311[9], 0, i6310, 'm_SelectOnRight')
  return i6310
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6312 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6313 = data
  i6312.m_NormalColor = new pc.Color(i6313[0], i6313[1], i6313[2], i6313[3])
  i6312.m_HighlightedColor = new pc.Color(i6313[4], i6313[5], i6313[6], i6313[7])
  i6312.m_PressedColor = new pc.Color(i6313[8], i6313[9], i6313[10], i6313[11])
  i6312.m_SelectedColor = new pc.Color(i6313[12], i6313[13], i6313[14], i6313[15])
  i6312.m_DisabledColor = new pc.Color(i6313[16], i6313[17], i6313[18], i6313[19])
  i6312.m_ColorMultiplier = i6313[20]
  i6312.m_FadeDuration = i6313[21]
  return i6312
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6314 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6315 = data
  request.r(i6315[0], i6315[1], 0, i6314, 'm_HighlightedSprite')
  request.r(i6315[2], i6315[3], 0, i6314, 'm_PressedSprite')
  request.r(i6315[4], i6315[5], 0, i6314, 'm_SelectedSprite')
  request.r(i6315[6], i6315[7], 0, i6314, 'm_DisabledSprite')
  return i6314
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6316 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6317 = data
  i6316.m_NormalTrigger = i6317[0]
  i6316.m_HighlightedTrigger = i6317[1]
  i6316.m_PressedTrigger = i6317[2]
  i6316.m_SelectedTrigger = i6317[3]
  i6316.m_DisabledTrigger = i6317[4]
  return i6316
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i6318 = root || request.c( 'PlayableHudRuntime' )
  var i6319 = data
  return i6318
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6320 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6321 = data
  request.r(i6321[0], i6321[1], 0, i6320, 'm_FirstSelected')
  i6320.m_sendNavigationEvents = !!i6321[2]
  i6320.m_DragThreshold = i6321[3]
  return i6320
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6322 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6323 = data
  i6322.m_HorizontalAxis = i6323[0]
  i6322.m_VerticalAxis = i6323[1]
  i6322.m_SubmitButton = i6323[2]
  i6322.m_CancelButton = i6323[3]
  i6322.m_InputActionsPerSecond = i6323[4]
  i6322.m_RepeatDelay = i6323[5]
  i6322.m_ForceModuleActive = !!i6323[6]
  i6322.m_SendPointerHoverToParent = !!i6323[7]
  return i6322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6325 = data
  i6324.ambientIntensity = i6325[0]
  i6324.reflectionIntensity = i6325[1]
  i6324.ambientMode = i6325[2]
  i6324.ambientLight = new pc.Color(i6325[3], i6325[4], i6325[5], i6325[6])
  i6324.ambientSkyColor = new pc.Color(i6325[7], i6325[8], i6325[9], i6325[10])
  i6324.ambientGroundColor = new pc.Color(i6325[11], i6325[12], i6325[13], i6325[14])
  i6324.ambientEquatorColor = new pc.Color(i6325[15], i6325[16], i6325[17], i6325[18])
  i6324.fogColor = new pc.Color(i6325[19], i6325[20], i6325[21], i6325[22])
  i6324.fogEndDistance = i6325[23]
  i6324.fogStartDistance = i6325[24]
  i6324.fogDensity = i6325[25]
  i6324.fog = !!i6325[26]
  request.r(i6325[27], i6325[28], 0, i6324, 'skybox')
  i6324.fogMode = i6325[29]
  var i6327 = i6325[30]
  var i6326 = []
  for(var i = 0; i < i6327.length; i += 1) {
    i6326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6327[i + 0]) );
  }
  i6324.lightmaps = i6326
  i6324.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6325[31], i6324.lightProbes)
  i6324.lightmapsMode = i6325[32]
  i6324.mixedBakeMode = i6325[33]
  i6324.environmentLightingMode = i6325[34]
  i6324.ambientProbe = new pc.SphericalHarmonicsL2(i6325[35])
  request.r(i6325[36], i6325[37], 0, i6324, 'customReflection')
  request.r(i6325[38], i6325[39], 0, i6324, 'defaultReflection')
  i6324.defaultReflectionMode = i6325[40]
  i6324.defaultReflectionResolution = i6325[41]
  i6324.sunLightObjectId = i6325[42]
  i6324.pixelLightCount = i6325[43]
  i6324.defaultReflectionHDR = !!i6325[44]
  i6324.hasLightDataAsset = !!i6325[45]
  i6324.hasManualGenerate = !!i6325[46]
  return i6324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6331 = data
  request.r(i6331[0], i6331[1], 0, i6330, 'lightmapColor')
  request.r(i6331[2], i6331[3], 0, i6330, 'lightmapDirection')
  request.r(i6331[4], i6331[5], 0, i6330, 'shadowMask')
  return i6330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6332 = root || new UnityEngine.LightProbes()
  var i6333 = data
  return i6332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6339 = data
  var i6341 = i6339[0]
  var i6340 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i6341.length; i += 1) {
    i6340.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i6341[i + 0]));
  }
  i6338.ShaderCompilationErrors = i6340
  i6338.name = i6339[1]
  i6338.guid = i6339[2]
  var i6343 = i6339[3]
  var i6342 = []
  for(var i = 0; i < i6343.length; i += 1) {
    i6342.push( i6343[i + 0] );
  }
  i6338.shaderDefinedKeywords = i6342
  var i6345 = i6339[4]
  var i6344 = []
  for(var i = 0; i < i6345.length; i += 1) {
    i6344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6345[i + 0]) );
  }
  i6338.passes = i6344
  var i6347 = i6339[5]
  var i6346 = []
  for(var i = 0; i < i6347.length; i += 1) {
    i6346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6347[i + 0]) );
  }
  i6338.usePasses = i6346
  var i6349 = i6339[6]
  var i6348 = []
  for(var i = 0; i < i6349.length; i += 1) {
    i6348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6349[i + 0]) );
  }
  i6338.defaultParameterValues = i6348
  request.r(i6339[7], i6339[8], 0, i6338, 'unityFallbackShader')
  i6338.readDepth = !!i6339[9]
  i6338.hasDepthOnlyPass = !!i6339[10]
  i6338.isCreatedByShaderGraph = !!i6339[11]
  i6338.disableBatching = !!i6339[12]
  i6338.compiled = !!i6339[13]
  return i6338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i6352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i6353 = data
  i6352.shaderName = i6353[0]
  i6352.errorMessage = i6353[1]
  return i6352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6358 = root || new pc.UnityShaderPass()
  var i6359 = data
  i6358.id = i6359[0]
  i6358.subShaderIndex = i6359[1]
  i6358.name = i6359[2]
  i6358.passType = i6359[3]
  i6358.grabPassTextureName = i6359[4]
  i6358.usePass = !!i6359[5]
  i6358.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6359[6], i6358.zTest)
  i6358.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6359[7], i6358.zWrite)
  i6358.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6359[8], i6358.culling)
  i6358.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6359[9], i6358.blending)
  i6358.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6359[10], i6358.alphaBlending)
  i6358.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6359[11], i6358.colorWriteMask)
  i6358.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6359[12], i6358.offsetUnits)
  i6358.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6359[13], i6358.offsetFactor)
  i6358.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6359[14], i6358.stencilRef)
  i6358.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6359[15], i6358.stencilReadMask)
  i6358.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6359[16], i6358.stencilWriteMask)
  i6358.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6359[17], i6358.stencilOp)
  i6358.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6359[18], i6358.stencilOpFront)
  i6358.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6359[19], i6358.stencilOpBack)
  var i6361 = i6359[20]
  var i6360 = []
  for(var i = 0; i < i6361.length; i += 1) {
    i6360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6361[i + 0]) );
  }
  i6358.tags = i6360
  var i6363 = i6359[21]
  var i6362 = []
  for(var i = 0; i < i6363.length; i += 1) {
    i6362.push( i6363[i + 0] );
  }
  i6358.passDefinedKeywords = i6362
  var i6365 = i6359[22]
  var i6364 = []
  for(var i = 0; i < i6365.length; i += 1) {
    i6364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i6365[i + 0]) );
  }
  i6358.passDefinedKeywordGroups = i6364
  var i6367 = i6359[23]
  var i6366 = []
  for(var i = 0; i < i6367.length; i += 1) {
    i6366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6367[i + 0]) );
  }
  i6358.variants = i6366
  var i6369 = i6359[24]
  var i6368 = []
  for(var i = 0; i < i6369.length; i += 1) {
    i6368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6369[i + 0]) );
  }
  i6358.excludedVariants = i6368
  i6358.hasDepthReader = !!i6359[25]
  return i6358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6371 = data
  i6370.val = i6371[0]
  i6370.name = i6371[1]
  return i6370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6373 = data
  i6372.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6373[0], i6372.src)
  i6372.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6373[1], i6372.dst)
  i6372.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6373[2], i6372.op)
  return i6372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6375 = data
  i6374.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6375[0], i6374.pass)
  i6374.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6375[1], i6374.fail)
  i6374.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6375[2], i6374.zFail)
  i6374.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6375[3], i6374.comp)
  return i6374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6379 = data
  i6378.name = i6379[0]
  i6378.value = i6379[1]
  return i6378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i6382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i6383 = data
  var i6385 = i6383[0]
  var i6384 = []
  for(var i = 0; i < i6385.length; i += 1) {
    i6384.push( i6385[i + 0] );
  }
  i6382.keywords = i6384
  i6382.hasDiscard = !!i6383[1]
  return i6382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6389 = data
  i6388.passId = i6389[0]
  i6388.subShaderIndex = i6389[1]
  var i6391 = i6389[2]
  var i6390 = []
  for(var i = 0; i < i6391.length; i += 1) {
    i6390.push( i6391[i + 0] );
  }
  i6388.keywords = i6390
  i6388.vertexProgram = i6389[3]
  i6388.fragmentProgram = i6389[4]
  i6388.exportedForWebGl2 = !!i6389[5]
  i6388.readDepth = !!i6389[6]
  return i6388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6395 = data
  request.r(i6395[0], i6395[1], 0, i6394, 'shader')
  i6394.pass = i6395[2]
  return i6394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6399 = data
  i6398.name = i6399[0]
  i6398.type = i6399[1]
  i6398.value = new pc.Vec4( i6399[2], i6399[3], i6399[4], i6399[5] )
  i6398.textureValue = i6399[6]
  i6398.shaderPropertyFlag = i6399[7]
  return i6398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6401 = data
  i6400.name = i6401[0]
  request.r(i6401[1], i6401[2], 0, i6400, 'texture')
  i6400.aabb = i6401[3]
  i6400.vertices = i6401[4]
  i6400.triangles = i6401[5]
  i6400.textureRect = UnityEngine.Rect.MinMaxRect(i6401[6], i6401[7], i6401[8], i6401[9])
  i6400.packedRect = UnityEngine.Rect.MinMaxRect(i6401[10], i6401[11], i6401[12], i6401[13])
  i6400.border = new pc.Vec4( i6401[14], i6401[15], i6401[16], i6401[17] )
  i6400.transparency = i6401[18]
  i6400.bounds = i6401[19]
  i6400.pixelsPerUnit = i6401[20]
  i6400.textureWidth = i6401[21]
  i6400.textureHeight = i6401[22]
  i6400.nativeSize = new pc.Vec2( i6401[23], i6401[24] )
  i6400.pivot = new pc.Vec2( i6401[25], i6401[26] )
  i6400.textureRectOffset = new pc.Vec2( i6401[27], i6401[28] )
  return i6400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i6402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i6403 = data
  i6402.name = i6403[0]
  return i6402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i6404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i6405 = data
  i6404.name = i6405[0]
  i6404.wrapMode = i6405[1]
  i6404.isLooping = !!i6405[2]
  i6404.length = i6405[3]
  var i6407 = i6405[4]
  var i6406 = []
  for(var i = 0; i < i6407.length; i += 1) {
    i6406.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i6407[i + 0]) );
  }
  i6404.curves = i6406
  var i6409 = i6405[5]
  var i6408 = []
  for(var i = 0; i < i6409.length; i += 1) {
    i6408.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i6409[i + 0]) );
  }
  i6404.events = i6408
  i6404.halfPrecision = !!i6405[6]
  i6404._frameRate = i6405[7]
  i6404.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i6405[8], i6404.localBounds)
  i6404.hasMuscleCurves = !!i6405[9]
  var i6411 = i6405[10]
  var i6410 = []
  for(var i = 0; i < i6411.length; i += 1) {
    i6410.push( i6411[i + 0] );
  }
  i6404.clipMuscleConstant = i6410
  i6404.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i6405[11], i6404.clipBindingConstant)
  return i6404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i6414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i6415 = data
  i6414.path = i6415[0]
  i6414.hash = i6415[1]
  i6414.componentType = i6415[2]
  i6414.property = i6415[3]
  i6414.keys = i6415[4]
  var i6417 = i6415[5]
  var i6416 = []
  for(var i = 0; i < i6417.length; i += 1) {
    i6416.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i6417[i + 0]) );
  }
  i6414.objectReferenceKeys = i6416
  return i6414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i6420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i6421 = data
  i6420.time = i6421[0]
  request.r(i6421[1], i6421[2], 0, i6420, 'value')
  return i6420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i6424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i6425 = data
  i6424.functionName = i6425[0]
  i6424.floatParameter = i6425[1]
  i6424.intParameter = i6425[2]
  i6424.stringParameter = i6425[3]
  request.r(i6425[4], i6425[5], 0, i6424, 'objectReferenceParameter')
  i6424.time = i6425[6]
  return i6424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i6426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i6427 = data
  i6426.center = new pc.Vec3( i6427[0], i6427[1], i6427[2] )
  i6426.extends = new pc.Vec3( i6427[3], i6427[4], i6427[5] )
  return i6426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i6430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i6431 = data
  var i6433 = i6431[0]
  var i6432 = []
  for(var i = 0; i < i6433.length; i += 1) {
    i6432.push( i6433[i + 0] );
  }
  i6430.genericBindings = i6432
  var i6435 = i6431[1]
  var i6434 = []
  for(var i = 0; i < i6435.length; i += 1) {
    i6434.push( i6435[i + 0] );
  }
  i6430.pptrCurveMapping = i6434
  return i6430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i6436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i6437 = data
  i6436.name = i6437[0]
  i6436.ascent = i6437[1]
  i6436.originalLineHeight = i6437[2]
  i6436.fontSize = i6437[3]
  var i6439 = i6437[4]
  var i6438 = []
  for(var i = 0; i < i6439.length; i += 1) {
    i6438.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i6439[i + 0]) );
  }
  i6436.characterInfo = i6438
  request.r(i6437[5], i6437[6], 0, i6436, 'texture')
  i6436.originalFontSize = i6437[7]
  return i6436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i6442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i6443 = data
  i6442.index = i6443[0]
  i6442.advance = i6443[1]
  i6442.bearing = i6443[2]
  i6442.glyphWidth = i6443[3]
  i6442.glyphHeight = i6443[4]
  i6442.minX = i6443[5]
  i6442.maxX = i6443[6]
  i6442.minY = i6443[7]
  i6442.maxY = i6443[8]
  i6442.uvBottomLeftX = i6443[9]
  i6442.uvBottomLeftY = i6443[10]
  i6442.uvBottomRightX = i6443[11]
  i6442.uvBottomRightY = i6443[12]
  i6442.uvTopLeftX = i6443[13]
  i6442.uvTopLeftY = i6443[14]
  i6442.uvTopRightX = i6443[15]
  i6442.uvTopRightY = i6443[16]
  return i6442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i6444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i6445 = data
  i6444.name = i6445[0]
  var i6447 = i6445[1]
  var i6446 = []
  for(var i = 0; i < i6447.length; i += 1) {
    i6446.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i6447[i + 0]) );
  }
  i6444.layers = i6446
  var i6449 = i6445[2]
  var i6448 = []
  for(var i = 0; i < i6449.length; i += 1) {
    i6448.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i6449[i + 0]) );
  }
  i6444.parameters = i6448
  i6444.animationClips = i6445[3]
  i6444.avatarUnsupported = i6445[4]
  return i6444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i6452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i6453 = data
  i6452.name = i6453[0]
  i6452.defaultWeight = i6453[1]
  i6452.blendingMode = i6453[2]
  i6452.avatarMask = i6453[3]
  i6452.syncedLayerIndex = i6453[4]
  i6452.syncedLayerAffectsTiming = !!i6453[5]
  i6452.syncedLayers = i6453[6]
  i6452.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6453[7], i6452.stateMachine)
  return i6452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i6454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i6455 = data
  i6454.id = i6455[0]
  i6454.name = i6455[1]
  i6454.path = i6455[2]
  var i6457 = i6455[3]
  var i6456 = []
  for(var i = 0; i < i6457.length; i += 1) {
    i6456.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i6457[i + 0]) );
  }
  i6454.states = i6456
  var i6459 = i6455[4]
  var i6458 = []
  for(var i = 0; i < i6459.length; i += 1) {
    i6458.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6459[i + 0]) );
  }
  i6454.machines = i6458
  var i6461 = i6455[5]
  var i6460 = []
  for(var i = 0; i < i6461.length; i += 1) {
    i6460.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6461[i + 0]) );
  }
  i6454.entryStateTransitions = i6460
  var i6463 = i6455[6]
  var i6462 = []
  for(var i = 0; i < i6463.length; i += 1) {
    i6462.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6463[i + 0]) );
  }
  i6454.exitStateTransitions = i6462
  var i6465 = i6455[7]
  var i6464 = []
  for(var i = 0; i < i6465.length; i += 1) {
    i6464.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6465[i + 0]) );
  }
  i6454.anyStateTransitions = i6464
  i6454.defaultStateId = i6455[8]
  return i6454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i6468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i6469 = data
  i6468.id = i6469[0]
  i6468.name = i6469[1]
  i6468.cycleOffset = i6469[2]
  i6468.cycleOffsetParameter = i6469[3]
  i6468.cycleOffsetParameterActive = !!i6469[4]
  i6468.mirror = !!i6469[5]
  i6468.mirrorParameter = i6469[6]
  i6468.mirrorParameterActive = !!i6469[7]
  i6468.motionId = i6469[8]
  i6468.nameHash = i6469[9]
  i6468.fullPathHash = i6469[10]
  i6468.speed = i6469[11]
  i6468.speedParameter = i6469[12]
  i6468.speedParameterActive = !!i6469[13]
  i6468.tag = i6469[14]
  i6468.tagHash = i6469[15]
  i6468.writeDefaultValues = !!i6469[16]
  var i6471 = i6469[17]
  var i6470 = []
  for(var i = 0; i < i6471.length; i += 2) {
  request.r(i6471[i + 0], i6471[i + 1], 2, i6470, '')
  }
  i6468.behaviours = i6470
  var i6473 = i6469[18]
  var i6472 = []
  for(var i = 0; i < i6473.length; i += 1) {
    i6472.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6473[i + 0]) );
  }
  i6468.transitions = i6472
  return i6468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i6478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i6479 = data
  i6478.fullPath = i6479[0]
  i6478.canTransitionToSelf = !!i6479[1]
  i6478.duration = i6479[2]
  i6478.exitTime = i6479[3]
  i6478.hasExitTime = !!i6479[4]
  i6478.hasFixedDuration = !!i6479[5]
  i6478.interruptionSource = i6479[6]
  i6478.offset = i6479[7]
  i6478.orderedInterruption = !!i6479[8]
  i6478.destinationStateId = i6479[9]
  i6478.isExit = !!i6479[10]
  i6478.mute = !!i6479[11]
  i6478.solo = !!i6479[12]
  var i6481 = i6479[13]
  var i6480 = []
  for(var i = 0; i < i6481.length; i += 1) {
    i6480.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6481[i + 0]) );
  }
  i6478.conditions = i6480
  return i6478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i6486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i6487 = data
  i6486.destinationStateId = i6487[0]
  i6486.isExit = !!i6487[1]
  i6486.mute = !!i6487[2]
  i6486.solo = !!i6487[3]
  var i6489 = i6487[4]
  var i6488 = []
  for(var i = 0; i < i6489.length; i += 1) {
    i6488.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6489[i + 0]) );
  }
  i6486.conditions = i6488
  return i6486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i6492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i6493 = data
  i6492.mode = i6493[0]
  i6492.parameter = i6493[1]
  i6492.threshold = i6493[2]
  return i6492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i6496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i6497 = data
  i6496.defaultBool = !!i6497[0]
  i6496.defaultFloat = i6497[1]
  i6496.defaultInt = i6497[2]
  i6496.name = i6497[3]
  i6496.nameHash = i6497[4]
  i6496.type = i6497[5]
  return i6496
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i6498 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i6499 = data
  i6498.useSafeMode = !!i6499[0]
  i6498.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i6499[1], i6498.safeModeOptions)
  i6498.timeScale = i6499[2]
  i6498.unscaledTimeScale = i6499[3]
  i6498.useSmoothDeltaTime = !!i6499[4]
  i6498.maxSmoothUnscaledTime = i6499[5]
  i6498.rewindCallbackMode = i6499[6]
  i6498.showUnityEditorReport = !!i6499[7]
  i6498.logBehaviour = i6499[8]
  i6498.drawGizmos = !!i6499[9]
  i6498.defaultRecyclable = !!i6499[10]
  i6498.defaultAutoPlay = i6499[11]
  i6498.defaultUpdateType = i6499[12]
  i6498.defaultTimeScaleIndependent = !!i6499[13]
  i6498.defaultEaseType = i6499[14]
  i6498.defaultEaseOvershootOrAmplitude = i6499[15]
  i6498.defaultEasePeriod = i6499[16]
  i6498.defaultAutoKill = !!i6499[17]
  i6498.defaultLoopType = i6499[18]
  i6498.debugMode = !!i6499[19]
  i6498.debugStoreTargetId = !!i6499[20]
  i6498.showPreviewPanel = !!i6499[21]
  i6498.storeSettingsLocation = i6499[22]
  i6498.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i6499[23], i6498.modules)
  i6498.createASMDEF = !!i6499[24]
  i6498.showPlayingTweens = !!i6499[25]
  i6498.showPausedTweens = !!i6499[26]
  return i6498
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i6500 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i6501 = data
  i6500.logBehaviour = i6501[0]
  i6500.nestedTweenFailureBehaviour = i6501[1]
  return i6500
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i6502 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i6503 = data
  i6502.showPanel = !!i6503[0]
  i6502.audioEnabled = !!i6503[1]
  i6502.physicsEnabled = !!i6503[2]
  i6502.physics2DEnabled = !!i6503[3]
  i6502.spriteEnabled = !!i6503[4]
  i6502.uiEnabled = !!i6503[5]
  i6502.textMeshProEnabled = !!i6503[6]
  i6502.tk2DEnabled = !!i6503[7]
  i6502.deAudioEnabled = !!i6503[8]
  i6502.deUnityExtendedEnabled = !!i6503[9]
  i6502.epoOutlineEnabled = !!i6503[10]
  return i6502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6505 = data
  var i6507 = i6505[0]
  var i6506 = []
  for(var i = 0; i < i6507.length; i += 1) {
    i6506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6507[i + 0]) );
  }
  i6504.files = i6506
  i6504.componentToPrefabIds = i6505[1]
  return i6504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6511 = data
  i6510.path = i6511[0]
  request.r(i6511[1], i6511[2], 0, i6510, 'unityObject')
  return i6510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6513 = data
  var i6515 = i6513[0]
  var i6514 = []
  for(var i = 0; i < i6515.length; i += 1) {
    i6514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6515[i + 0]) );
  }
  i6512.scriptsExecutionOrder = i6514
  var i6517 = i6513[1]
  var i6516 = []
  for(var i = 0; i < i6517.length; i += 1) {
    i6516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6517[i + 0]) );
  }
  i6512.sortingLayers = i6516
  var i6519 = i6513[2]
  var i6518 = []
  for(var i = 0; i < i6519.length; i += 1) {
    i6518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6519[i + 0]) );
  }
  i6512.cullingLayers = i6518
  i6512.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6513[3], i6512.timeSettings)
  i6512.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6513[4], i6512.physicsSettings)
  i6512.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6513[5], i6512.physics2DSettings)
  i6512.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6513[6], i6512.qualitySettings)
  i6512.enableRealtimeShadows = !!i6513[7]
  i6512.enableAutoInstancing = !!i6513[8]
  i6512.enableStaticBatching = !!i6513[9]
  i6512.enableDynamicBatching = !!i6513[10]
  i6512.usePreservativeDynamicBatching = !!i6513[11]
  i6512.lightmapEncodingQuality = i6513[12]
  i6512.desiredColorSpace = i6513[13]
  var i6521 = i6513[14]
  var i6520 = []
  for(var i = 0; i < i6521.length; i += 1) {
    i6520.push( i6521[i + 0] );
  }
  i6512.allTags = i6520
  return i6512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6525 = data
  i6524.name = i6525[0]
  i6524.value = i6525[1]
  return i6524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i6528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i6529 = data
  i6528.id = i6529[0]
  i6528.name = i6529[1]
  i6528.value = i6529[2]
  return i6528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i6532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i6533 = data
  i6532.id = i6533[0]
  i6532.name = i6533[1]
  return i6532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i6534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i6535 = data
  i6534.fixedDeltaTime = i6535[0]
  i6534.maximumDeltaTime = i6535[1]
  i6534.timeScale = i6535[2]
  i6534.maximumParticleTimestep = i6535[3]
  return i6534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i6536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i6537 = data
  i6536.gravity = new pc.Vec3( i6537[0], i6537[1], i6537[2] )
  i6536.defaultSolverIterations = i6537[3]
  i6536.bounceThreshold = i6537[4]
  i6536.autoSyncTransforms = !!i6537[5]
  i6536.autoSimulation = !!i6537[6]
  var i6539 = i6537[7]
  var i6538 = []
  for(var i = 0; i < i6539.length; i += 1) {
    i6538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i6539[i + 0]) );
  }
  i6536.collisionMatrix = i6538
  return i6536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i6542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i6543 = data
  i6542.enabled = !!i6543[0]
  i6542.layerId = i6543[1]
  i6542.otherLayerId = i6543[2]
  return i6542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i6544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i6545 = data
  request.r(i6545[0], i6545[1], 0, i6544, 'material')
  i6544.gravity = new pc.Vec2( i6545[2], i6545[3] )
  i6544.positionIterations = i6545[4]
  i6544.velocityIterations = i6545[5]
  i6544.velocityThreshold = i6545[6]
  i6544.maxLinearCorrection = i6545[7]
  i6544.maxAngularCorrection = i6545[8]
  i6544.maxTranslationSpeed = i6545[9]
  i6544.maxRotationSpeed = i6545[10]
  i6544.baumgarteScale = i6545[11]
  i6544.baumgarteTOIScale = i6545[12]
  i6544.timeToSleep = i6545[13]
  i6544.linearSleepTolerance = i6545[14]
  i6544.angularSleepTolerance = i6545[15]
  i6544.defaultContactOffset = i6545[16]
  i6544.autoSimulation = !!i6545[17]
  i6544.queriesHitTriggers = !!i6545[18]
  i6544.queriesStartInColliders = !!i6545[19]
  i6544.callbacksOnDisable = !!i6545[20]
  i6544.reuseCollisionCallbacks = !!i6545[21]
  i6544.autoSyncTransforms = !!i6545[22]
  var i6547 = i6545[23]
  var i6546 = []
  for(var i = 0; i < i6547.length; i += 1) {
    i6546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i6547[i + 0]) );
  }
  i6544.collisionMatrix = i6546
  return i6544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i6550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i6551 = data
  i6550.enabled = !!i6551[0]
  i6550.layerId = i6551[1]
  i6550.otherLayerId = i6551[2]
  return i6550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i6552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i6553 = data
  var i6555 = i6553[0]
  var i6554 = []
  for(var i = 0; i < i6555.length; i += 1) {
    i6554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6555[i + 0]) );
  }
  i6552.qualityLevels = i6554
  var i6557 = i6553[1]
  var i6556 = []
  for(var i = 0; i < i6557.length; i += 1) {
    i6556.push( i6557[i + 0] );
  }
  i6552.names = i6556
  i6552.shadows = i6553[2]
  i6552.anisotropicFiltering = i6553[3]
  i6552.antiAliasing = i6553[4]
  i6552.lodBias = i6553[5]
  i6552.shadowCascades = i6553[6]
  i6552.shadowDistance = i6553[7]
  i6552.shadowmaskMode = i6553[8]
  i6552.shadowProjection = i6553[9]
  i6552.shadowResolution = i6553[10]
  i6552.softParticles = !!i6553[11]
  i6552.softVegetation = !!i6553[12]
  i6552.activeColorSpace = i6553[13]
  i6552.desiredColorSpace = i6553[14]
  i6552.masterTextureLimit = i6553[15]
  i6552.maxQueuedFrames = i6553[16]
  i6552.particleRaycastBudget = i6553[17]
  i6552.pixelLightCount = i6553[18]
  i6552.realtimeReflectionProbes = !!i6553[19]
  i6552.shadowCascade2Split = i6553[20]
  i6552.shadowCascade4Split = new pc.Vec3( i6553[21], i6553[22], i6553[23] )
  i6552.streamingMipmapsActive = !!i6553[24]
  i6552.vSyncCount = i6553[25]
  i6552.asyncUploadBufferSize = i6553[26]
  i6552.asyncUploadTimeSlice = i6553[27]
  i6552.billboardsFaceCameraPosition = !!i6553[28]
  i6552.shadowNearPlaneOffset = i6553[29]
  i6552.streamingMipmapsMemoryBudget = i6553[30]
  i6552.maximumLODLevel = i6553[31]
  i6552.streamingMipmapsAddAllCameras = !!i6553[32]
  i6552.streamingMipmapsMaxLevelReduction = i6553[33]
  i6552.streamingMipmapsRenderersPerFrame = i6553[34]
  i6552.resolutionScalingFixedDPIFactor = i6553[35]
  i6552.streamingMipmapsMaxFileIORequests = i6553[36]
  i6552.currentQualityLevel = i6553[37]
  return i6552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i6560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i6561 = data
  var i6563 = i6561[0]
  var i6562 = []
  for(var i = 0; i < i6563.length; i += 1) {
    i6562.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i6563[i + 0]) );
  }
  i6560.groups = i6562
  var i6565 = i6561[1]
  var i6564 = []
  for(var i = 0; i < i6565.length; i += 1) {
    i6564.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i6565[i + 0]) );
  }
  i6560.snapshots = i6564
  return i6560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i6568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i6569 = data
  i6568.id = i6569[0]
  i6568.childGroupIds = i6569[1]
  i6568.name = i6569[2]
  return i6568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i6572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i6573 = data
  i6572.id = i6573[0]
  var i6575 = i6573[1]
  var i6574 = []
  for(var i = 0; i < i6575.length; i += 1) {
    i6574.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i6575[i + 0]) );
  }
  i6572.parameters = i6574
  return i6572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i6578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i6579 = data
  i6578.name = i6579[0]
  i6578.value = i6579[1]
  return i6578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i6582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i6583 = data
  i6582.weight = i6583[0]
  i6582.vertices = i6583[1]
  i6582.normals = i6583[2]
  i6582.tangents = i6583[3]
  return i6582
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[87],"88":[56],"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[90],"97":[46],"98":[46],"99":[46],"100":[46],"101":[46],"102":[46],"103":[46],"104":[46],"105":[46],"106":[46],"107":[46],"108":[46],"109":[46],"110":[56],"111":[112],"113":[114],"115":[114],"67":[61],"116":[29],"117":[9],"34":[31],"118":[9],"119":[120],"121":[120],"38":[14],"54":[31],"122":[9],"27":[9],"123":[61],"124":[61],"70":[67],"62":[71,61],"125":[61],"69":[67],"126":[61],"127":[61],"128":[61],"129":[61],"130":[61],"131":[61],"132":[61],"133":[61],"134":[61],"135":[71,61],"136":[61],"137":[61],"138":[61],"139":[61],"63":[71,61],"140":[61],"141":[75],"142":[75],"76":[75],"143":[75],"144":[56],"145":[56]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level1_Hair_Playable","UnityEngine.SpriteRenderer","BasicDrag","OutlinePulse","UnityEngine.GameObject","BD_CameraFollow","DG.Tweening.DOTweenAnimation","UnityEngine.Sprite","UnityEngine.AudioClip","BD_Progress","BD_ProgressHelper","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.TrailRenderer","UnityEngine.LineRenderer","StaticFixedPipe","UnityEngine.BoxCollider2D","BD_Clamp","BD_ItemPick","BD_Sticky","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.SpriteMask","PlayTweenOnHit","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","InteractableBones","WaypointFollower","UnityEditor.Audio.AudioMixerGroupController","BD_Action","BD_ToolRotate","UnityEngine.Rigidbody2D","BugKill_Tip","ActionOnTap","BD_SpriteChange","BD_AnimatorDrag","PlaceItem","BD_Audio","Level1_HairAnim","SpriteButton","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Fold","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "5.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "25Aug2026_Lvl_2_3_Step3to5";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1704";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4370";

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

Deserializers.buildID = "c90ad0da-b8c5-481e-a631-79e17a9cc339";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

