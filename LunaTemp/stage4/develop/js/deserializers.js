var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1974 = root || request.c( 'UnityEngine.JointSpring' )
  var i1975 = data
  i1974.spring = i1975[0]
  i1974.damper = i1975[1]
  i1974.targetPosition = i1975[2]
  return i1974
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1976 = root || request.c( 'UnityEngine.JointMotor' )
  var i1977 = data
  i1976.m_TargetVelocity = i1977[0]
  i1976.m_Force = i1977[1]
  i1976.m_FreeSpin = i1977[2]
  return i1976
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1978 = root || request.c( 'UnityEngine.JointLimits' )
  var i1979 = data
  i1978.m_Min = i1979[0]
  i1978.m_Max = i1979[1]
  i1978.m_Bounciness = i1979[2]
  i1978.m_BounceMinVelocity = i1979[3]
  i1978.m_ContactDistance = i1979[4]
  i1978.minBounce = i1979[5]
  i1978.maxBounce = i1979[6]
  return i1978
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1980 = root || request.c( 'UnityEngine.JointDrive' )
  var i1981 = data
  i1980.m_PositionSpring = i1981[0]
  i1980.m_PositionDamper = i1981[1]
  i1980.m_MaximumForce = i1981[2]
  i1980.m_UseAcceleration = i1981[3]
  return i1980
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1982 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1983 = data
  i1982.m_Spring = i1983[0]
  i1982.m_Damper = i1983[1]
  return i1982
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1984 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1985 = data
  i1984.m_Limit = i1985[0]
  i1984.m_Bounciness = i1985[1]
  i1984.m_ContactDistance = i1985[2]
  return i1984
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1986 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1987 = data
  i1986.m_ExtremumSlip = i1987[0]
  i1986.m_ExtremumValue = i1987[1]
  i1986.m_AsymptoteSlip = i1987[2]
  i1986.m_AsymptoteValue = i1987[3]
  i1986.m_Stiffness = i1987[4]
  return i1986
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1988 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1989 = data
  i1988.m_LowerAngle = i1989[0]
  i1988.m_UpperAngle = i1989[1]
  return i1988
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1990 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1991 = data
  i1990.m_MotorSpeed = i1991[0]
  i1990.m_MaximumMotorTorque = i1991[1]
  return i1990
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1992 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1993 = data
  i1992.m_DampingRatio = i1993[0]
  i1992.m_Frequency = i1993[1]
  i1992.m_Angle = i1993[2]
  return i1992
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1994 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1995 = data
  i1994.m_LowerTranslation = i1995[0]
  i1994.m_UpperTranslation = i1995[1]
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1996 = root || new pc.UnityMaterial()
  var i1997 = data
  i1996.name = i1997[0]
  request.r(i1997[1], i1997[2], 0, i1996, 'shader')
  i1996.renderQueue = i1997[3]
  i1996.enableInstancing = !!i1997[4]
  var i1999 = i1997[5]
  var i1998 = []
  for(var i = 0; i < i1999.length; i += 1) {
    i1998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1999[i + 0]) );
  }
  i1996.floatParameters = i1998
  var i2001 = i1997[6]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2001[i + 0]) );
  }
  i1996.colorParameters = i2000
  var i2003 = i1997[7]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2003[i + 0]) );
  }
  i1996.vectorParameters = i2002
  var i2005 = i1997[8]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2005[i + 0]) );
  }
  i1996.textureParameters = i2004
  var i2007 = i1997[9]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 1) {
    i2006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2007[i + 0]) );
  }
  i1996.materialFlags = i2006
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2011 = data
  i2010.name = i2011[0]
  i2010.value = i2011[1]
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2015 = data
  i2014.name = i2015[0]
  i2014.value = new pc.Color(i2015[1], i2015[2], i2015[3], i2015[4])
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2019 = data
  i2018.name = i2019[0]
  i2018.value = new pc.Vec4( i2019[1], i2019[2], i2019[3], i2019[4] )
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2023 = data
  i2022.name = i2023[0]
  request.r(i2023[1], i2023[2], 0, i2022, 'value')
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2027 = data
  i2026.name = i2027[0]
  i2026.enabled = !!i2027[1]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2029 = data
  i2028.name = i2029[0]
  i2028.width = i2029[1]
  i2028.height = i2029[2]
  i2028.mipmapCount = i2029[3]
  i2028.anisoLevel = i2029[4]
  i2028.filterMode = i2029[5]
  i2028.hdr = !!i2029[6]
  i2028.format = i2029[7]
  i2028.wrapMode = i2029[8]
  i2028.alphaIsTransparency = !!i2029[9]
  i2028.alphaSource = i2029[10]
  i2028.graphicsFormat = i2029[11]
  i2028.sRGBTexture = !!i2029[12]
  i2028.desiredColorSpace = i2029[13]
  i2028.wrapU = i2029[14]
  i2028.wrapV = i2029[15]
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2031 = data
  i2030.name = i2031[0]
  i2030.halfPrecision = !!i2031[1]
  i2030.useSimplification = !!i2031[2]
  i2030.useUInt32IndexFormat = !!i2031[3]
  i2030.vertexCount = i2031[4]
  i2030.aabb = i2031[5]
  var i2033 = i2031[6]
  var i2032 = []
  for(var i = 0; i < i2033.length; i += 1) {
    i2032.push( !!i2033[i + 0] );
  }
  i2030.streams = i2032
  i2030.vertices = i2031[7]
  var i2035 = i2031[8]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 1) {
    i2034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2035[i + 0]) );
  }
  i2030.subMeshes = i2034
  var i2037 = i2031[9]
  var i2036 = []
  for(var i = 0; i < i2037.length; i += 16) {
    i2036.push( new pc.Mat4().setData(i2037[i + 0], i2037[i + 1], i2037[i + 2], i2037[i + 3],  i2037[i + 4], i2037[i + 5], i2037[i + 6], i2037[i + 7],  i2037[i + 8], i2037[i + 9], i2037[i + 10], i2037[i + 11],  i2037[i + 12], i2037[i + 13], i2037[i + 14], i2037[i + 15]) );
  }
  i2030.bindposes = i2036
  var i2039 = i2031[10]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 1) {
    i2038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2039[i + 0]) );
  }
  i2030.blendShapes = i2038
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2045 = data
  i2044.triangles = i2045[0]
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2051 = data
  i2050.name = i2051[0]
  var i2053 = i2051[1]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2053[i + 0]) );
  }
  i2050.frames = i2052
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2055 = data
  i2054.position = new pc.Vec3( i2055[0], i2055[1], i2055[2] )
  i2054.scale = new pc.Vec3( i2055[3], i2055[4], i2055[5] )
  i2054.rotation = new pc.Quat(i2055[6], i2055[7], i2055[8], i2055[9])
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2057 = data
  i2056.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2057[0], i2056.main)
  i2056.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2057[1], i2056.colorBySpeed)
  i2056.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2057[2], i2056.colorOverLifetime)
  i2056.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2057[3], i2056.emission)
  i2056.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2057[4], i2056.rotationBySpeed)
  i2056.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2057[5], i2056.rotationOverLifetime)
  i2056.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2057[6], i2056.shape)
  i2056.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2057[7], i2056.sizeBySpeed)
  i2056.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2057[8], i2056.sizeOverLifetime)
  i2056.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2057[9], i2056.textureSheetAnimation)
  i2056.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2057[10], i2056.velocityOverLifetime)
  i2056.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2057[11], i2056.noise)
  i2056.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2057[12], i2056.inheritVelocity)
  i2056.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2057[13], i2056.forceOverLifetime)
  i2056.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2057[14], i2056.limitVelocityOverLifetime)
  i2056.useAutoRandomSeed = !!i2057[15]
  i2056.randomSeed = i2057[16]
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2058 = root || new pc.ParticleSystemMain()
  var i2059 = data
  i2058.duration = i2059[0]
  i2058.loop = !!i2059[1]
  i2058.prewarm = !!i2059[2]
  i2058.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[3], i2058.startDelay)
  i2058.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[4], i2058.startLifetime)
  i2058.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[5], i2058.startSpeed)
  i2058.startSize3D = !!i2059[6]
  i2058.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[7], i2058.startSizeX)
  i2058.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[8], i2058.startSizeY)
  i2058.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[9], i2058.startSizeZ)
  i2058.startRotation3D = !!i2059[10]
  i2058.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[11], i2058.startRotationX)
  i2058.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[12], i2058.startRotationY)
  i2058.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[13], i2058.startRotationZ)
  i2058.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2059[14], i2058.startColor)
  i2058.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[15], i2058.gravityModifier)
  i2058.simulationSpace = i2059[16]
  request.r(i2059[17], i2059[18], 0, i2058, 'customSimulationSpace')
  i2058.simulationSpeed = i2059[19]
  i2058.useUnscaledTime = !!i2059[20]
  i2058.scalingMode = i2059[21]
  i2058.playOnAwake = !!i2059[22]
  i2058.maxParticles = i2059[23]
  i2058.emitterVelocityMode = i2059[24]
  i2058.stopAction = i2059[25]
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2060 = root || new pc.MinMaxCurve()
  var i2061 = data
  i2060.mode = i2061[0]
  i2060.curveMin = new pc.AnimationCurve( { keys_flow: i2061[1] } )
  i2060.curveMax = new pc.AnimationCurve( { keys_flow: i2061[2] } )
  i2060.curveMultiplier = i2061[3]
  i2060.constantMin = i2061[4]
  i2060.constantMax = i2061[5]
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2062 = root || new pc.MinMaxGradient()
  var i2063 = data
  i2062.mode = i2063[0]
  i2062.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2063[1], i2062.gradientMin)
  i2062.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2063[2], i2062.gradientMax)
  i2062.colorMin = new pc.Color(i2063[3], i2063[4], i2063[5], i2063[6])
  i2062.colorMax = new pc.Color(i2063[7], i2063[8], i2063[9], i2063[10])
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2065 = data
  i2064.mode = i2065[0]
  var i2067 = i2065[1]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2067[i + 0]) );
  }
  i2064.colorKeys = i2066
  var i2069 = i2065[2]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 1) {
    i2068.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2069[i + 0]) );
  }
  i2064.alphaKeys = i2068
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2070 = root || new pc.ParticleSystemColorBySpeed()
  var i2071 = data
  i2070.enabled = !!i2071[0]
  i2070.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2071[1], i2070.color)
  i2070.range = new pc.Vec2( i2071[2], i2071[3] )
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2075 = data
  i2074.color = new pc.Color(i2075[0], i2075[1], i2075[2], i2075[3])
  i2074.time = i2075[4]
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2079 = data
  i2078.alpha = i2079[0]
  i2078.time = i2079[1]
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2080 = root || new pc.ParticleSystemColorOverLifetime()
  var i2081 = data
  i2080.enabled = !!i2081[0]
  i2080.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2081[1], i2080.color)
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2082 = root || new pc.ParticleSystemEmitter()
  var i2083 = data
  i2082.enabled = !!i2083[0]
  i2082.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[1], i2082.rateOverTime)
  i2082.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[2], i2082.rateOverDistance)
  var i2085 = i2083[3]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2085[i + 0]) );
  }
  i2082.bursts = i2084
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2088 = root || new pc.ParticleSystemBurst()
  var i2089 = data
  i2088.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[0], i2088.count)
  i2088.cycleCount = i2089[1]
  i2088.minCount = i2089[2]
  i2088.maxCount = i2089[3]
  i2088.repeatInterval = i2089[4]
  i2088.time = i2089[5]
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2090 = root || new pc.ParticleSystemRotationBySpeed()
  var i2091 = data
  i2090.enabled = !!i2091[0]
  i2090.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[1], i2090.x)
  i2090.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[2], i2090.y)
  i2090.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[3], i2090.z)
  i2090.separateAxes = !!i2091[4]
  i2090.range = new pc.Vec2( i2091[5], i2091[6] )
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2092 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2093 = data
  i2092.enabled = !!i2093[0]
  i2092.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[1], i2092.x)
  i2092.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[2], i2092.y)
  i2092.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2093[3], i2092.z)
  i2092.separateAxes = !!i2093[4]
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2094 = root || new pc.ParticleSystemShape()
  var i2095 = data
  i2094.enabled = !!i2095[0]
  i2094.shapeType = i2095[1]
  i2094.randomDirectionAmount = i2095[2]
  i2094.sphericalDirectionAmount = i2095[3]
  i2094.randomPositionAmount = i2095[4]
  i2094.alignToDirection = !!i2095[5]
  i2094.radius = i2095[6]
  i2094.radiusMode = i2095[7]
  i2094.radiusSpread = i2095[8]
  i2094.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[9], i2094.radiusSpeed)
  i2094.radiusThickness = i2095[10]
  i2094.angle = i2095[11]
  i2094.length = i2095[12]
  i2094.boxThickness = new pc.Vec3( i2095[13], i2095[14], i2095[15] )
  i2094.meshShapeType = i2095[16]
  request.r(i2095[17], i2095[18], 0, i2094, 'mesh')
  request.r(i2095[19], i2095[20], 0, i2094, 'meshRenderer')
  request.r(i2095[21], i2095[22], 0, i2094, 'skinnedMeshRenderer')
  i2094.useMeshMaterialIndex = !!i2095[23]
  i2094.meshMaterialIndex = i2095[24]
  i2094.useMeshColors = !!i2095[25]
  i2094.normalOffset = i2095[26]
  i2094.arc = i2095[27]
  i2094.arcMode = i2095[28]
  i2094.arcSpread = i2095[29]
  i2094.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2095[30], i2094.arcSpeed)
  i2094.donutRadius = i2095[31]
  i2094.position = new pc.Vec3( i2095[32], i2095[33], i2095[34] )
  i2094.rotation = new pc.Vec3( i2095[35], i2095[36], i2095[37] )
  i2094.scale = new pc.Vec3( i2095[38], i2095[39], i2095[40] )
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2096 = root || new pc.ParticleSystemSizeBySpeed()
  var i2097 = data
  i2096.enabled = !!i2097[0]
  i2096.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[1], i2096.x)
  i2096.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[2], i2096.y)
  i2096.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2097[3], i2096.z)
  i2096.separateAxes = !!i2097[4]
  i2096.range = new pc.Vec2( i2097[5], i2097[6] )
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2098 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2099 = data
  i2098.enabled = !!i2099[0]
  i2098.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[1], i2098.x)
  i2098.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[2], i2098.y)
  i2098.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2099[3], i2098.z)
  i2098.separateAxes = !!i2099[4]
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2100 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2101 = data
  i2100.enabled = !!i2101[0]
  i2100.mode = i2101[1]
  i2100.animation = i2101[2]
  i2100.numTilesX = i2101[3]
  i2100.numTilesY = i2101[4]
  i2100.useRandomRow = !!i2101[5]
  i2100.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2101[6], i2100.frameOverTime)
  i2100.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2101[7], i2100.startFrame)
  i2100.cycleCount = i2101[8]
  i2100.rowIndex = i2101[9]
  i2100.flipU = i2101[10]
  i2100.flipV = i2101[11]
  i2100.spriteCount = i2101[12]
  var i2103 = i2101[13]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 2) {
  request.r(i2103[i + 0], i2103[i + 1], 2, i2102, '')
  }
  i2100.sprites = i2102
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2106 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2107 = data
  i2106.enabled = !!i2107[0]
  i2106.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[1], i2106.x)
  i2106.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[2], i2106.y)
  i2106.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[3], i2106.z)
  i2106.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[4], i2106.radial)
  i2106.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[5], i2106.speedModifier)
  i2106.space = i2107[6]
  i2106.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[7], i2106.orbitalX)
  i2106.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[8], i2106.orbitalY)
  i2106.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[9], i2106.orbitalZ)
  i2106.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[10], i2106.orbitalOffsetX)
  i2106.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[11], i2106.orbitalOffsetY)
  i2106.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2107[12], i2106.orbitalOffsetZ)
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2108 = root || new pc.ParticleSystemNoise()
  var i2109 = data
  i2108.enabled = !!i2109[0]
  i2108.separateAxes = !!i2109[1]
  i2108.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[2], i2108.strengthX)
  i2108.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[3], i2108.strengthY)
  i2108.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[4], i2108.strengthZ)
  i2108.frequency = i2109[5]
  i2108.damping = !!i2109[6]
  i2108.octaveCount = i2109[7]
  i2108.octaveMultiplier = i2109[8]
  i2108.octaveScale = i2109[9]
  i2108.quality = i2109[10]
  i2108.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[11], i2108.scrollSpeed)
  i2108.scrollSpeedMultiplier = i2109[12]
  i2108.remapEnabled = !!i2109[13]
  i2108.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[14], i2108.remapX)
  i2108.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[15], i2108.remapY)
  i2108.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[16], i2108.remapZ)
  i2108.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[17], i2108.positionAmount)
  i2108.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[18], i2108.rotationAmount)
  i2108.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2109[19], i2108.sizeAmount)
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2110 = root || new pc.ParticleSystemInheritVelocity()
  var i2111 = data
  i2110.enabled = !!i2111[0]
  i2110.mode = i2111[1]
  i2110.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2111[2], i2110.curve)
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2112 = root || new pc.ParticleSystemForceOverLifetime()
  var i2113 = data
  i2112.enabled = !!i2113[0]
  i2112.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2113[1], i2112.x)
  i2112.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2113[2], i2112.y)
  i2112.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2113[3], i2112.z)
  i2112.space = i2113[4]
  i2112.randomized = !!i2113[5]
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2114 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2115 = data
  i2114.enabled = !!i2115[0]
  i2114.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2115[1], i2114.limit)
  i2114.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2115[2], i2114.limitX)
  i2114.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2115[3], i2114.limitY)
  i2114.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2115[4], i2114.limitZ)
  i2114.dampen = i2115[5]
  i2114.separateAxes = !!i2115[6]
  i2114.space = i2115[7]
  i2114.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2115[8], i2114.drag)
  i2114.multiplyDragByParticleSize = !!i2115[9]
  i2114.multiplyDragByParticleVelocity = !!i2115[10]
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2117 = data
  request.r(i2117[0], i2117[1], 0, i2116, 'mesh')
  i2116.meshCount = i2117[2]
  i2116.activeVertexStreamsCount = i2117[3]
  i2116.alignment = i2117[4]
  i2116.renderMode = i2117[5]
  i2116.sortMode = i2117[6]
  i2116.lengthScale = i2117[7]
  i2116.velocityScale = i2117[8]
  i2116.cameraVelocityScale = i2117[9]
  i2116.normalDirection = i2117[10]
  i2116.sortingFudge = i2117[11]
  i2116.minParticleSize = i2117[12]
  i2116.maxParticleSize = i2117[13]
  i2116.pivot = new pc.Vec3( i2117[14], i2117[15], i2117[16] )
  request.r(i2117[17], i2117[18], 0, i2116, 'trailMaterial')
  i2116.applyActiveColorSpace = !!i2117[19]
  i2116.enabled = !!i2117[20]
  request.r(i2117[21], i2117[22], 0, i2116, 'sharedMaterial')
  var i2119 = i2117[23]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 2) {
  request.r(i2119[i + 0], i2119[i + 1], 2, i2118, '')
  }
  i2116.sharedMaterials = i2118
  i2116.receiveShadows = !!i2117[24]
  i2116.shadowCastingMode = i2117[25]
  i2116.sortingLayerID = i2117[26]
  i2116.sortingOrder = i2117[27]
  i2116.lightmapIndex = i2117[28]
  i2116.lightmapSceneIndex = i2117[29]
  i2116.lightmapScaleOffset = new pc.Vec4( i2117[30], i2117[31], i2117[32], i2117[33] )
  i2116.lightProbeUsage = i2117[34]
  i2116.reflectionProbeUsage = i2117[35]
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2123 = data
  i2122.name = i2123[0]
  i2122.tagId = i2123[1]
  i2122.enabled = !!i2123[2]
  i2122.isStatic = !!i2123[3]
  i2122.layer = i2123[4]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2125 = data
  i2124.pivot = new pc.Vec2( i2125[0], i2125[1] )
  i2124.anchorMin = new pc.Vec2( i2125[2], i2125[3] )
  i2124.anchorMax = new pc.Vec2( i2125[4], i2125[5] )
  i2124.sizeDelta = new pc.Vec2( i2125[6], i2125[7] )
  i2124.anchoredPosition3D = new pc.Vec3( i2125[8], i2125[9], i2125[10] )
  i2124.rotation = new pc.Quat(i2125[11], i2125[12], i2125[13], i2125[14])
  i2124.scale = new pc.Vec3( i2125[15], i2125[16], i2125[17] )
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2127 = data
  i2126.planeDistance = i2127[0]
  i2126.referencePixelsPerUnit = i2127[1]
  i2126.isFallbackOverlay = !!i2127[2]
  i2126.renderMode = i2127[3]
  i2126.renderOrder = i2127[4]
  i2126.sortingLayerName = i2127[5]
  i2126.sortingOrder = i2127[6]
  i2126.scaleFactor = i2127[7]
  request.r(i2127[8], i2127[9], 0, i2126, 'worldCamera')
  i2126.overrideSorting = !!i2127[10]
  i2126.pixelPerfect = !!i2127[11]
  i2126.targetDisplay = i2127[12]
  i2126.overridePixelPerfect = !!i2127[13]
  i2126.enabled = !!i2127[14]
  return i2126
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2128 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2129 = data
  i2128.m_UiScaleMode = i2129[0]
  i2128.m_ReferencePixelsPerUnit = i2129[1]
  i2128.m_ScaleFactor = i2129[2]
  i2128.m_ReferenceResolution = new pc.Vec2( i2129[3], i2129[4] )
  i2128.m_ScreenMatchMode = i2129[5]
  i2128.m_MatchWidthOrHeight = i2129[6]
  i2128.m_PhysicalUnit = i2129[7]
  i2128.m_FallbackScreenDPI = i2129[8]
  i2128.m_DefaultSpriteDPI = i2129[9]
  i2128.m_DynamicPixelsPerUnit = i2129[10]
  i2128.m_PresetInfoIsWorld = !!i2129[11]
  return i2128
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2130 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2131 = data
  i2130.m_IgnoreReversedGraphics = !!i2131[0]
  i2130.m_BlockingObjects = i2131[1]
  i2130.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2131[2] )
  return i2130
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2132 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2133 = data
  i2132.targetIsSelf = !!i2133[0]
  request.r(i2133[1], i2133[2], 0, i2132, 'targetGO')
  i2132.tweenTargetIsTargetGO = !!i2133[3]
  i2132.delay = i2133[4]
  i2132.duration = i2133[5]
  i2132.easeType = i2133[6]
  i2132.easeCurve = new pc.AnimationCurve( { keys_flow: i2133[7] } )
  i2132.loopType = i2133[8]
  i2132.loops = i2133[9]
  i2132.id = i2133[10]
  i2132.isRelative = !!i2133[11]
  i2132.isFrom = !!i2133[12]
  i2132.isIndependentUpdate = !!i2133[13]
  i2132.autoKill = !!i2133[14]
  i2132.autoGenerate = !!i2133[15]
  i2132.isActive = !!i2133[16]
  i2132.isValid = !!i2133[17]
  request.r(i2133[18], i2133[19], 0, i2132, 'target')
  i2132.animationType = i2133[20]
  i2132.targetType = i2133[21]
  i2132.forcedTargetType = i2133[22]
  i2132.autoPlay = !!i2133[23]
  i2132.useTargetAsV3 = !!i2133[24]
  i2132.endValueFloat = i2133[25]
  i2132.endValueV3 = new pc.Vec3( i2133[26], i2133[27], i2133[28] )
  i2132.endValueV2 = new pc.Vec2( i2133[29], i2133[30] )
  i2132.endValueColor = new pc.Color(i2133[31], i2133[32], i2133[33], i2133[34])
  i2132.endValueString = i2133[35]
  i2132.endValueRect = UnityEngine.Rect.MinMaxRect(i2133[36], i2133[37], i2133[38], i2133[39])
  request.r(i2133[40], i2133[41], 0, i2132, 'endValueTransform')
  i2132.optionalBool0 = !!i2133[42]
  i2132.optionalBool1 = !!i2133[43]
  i2132.optionalFloat0 = i2133[44]
  i2132.optionalInt0 = i2133[45]
  i2132.optionalRotationMode = i2133[46]
  i2132.optionalScrambleMode = i2133[47]
  i2132.optionalShakeRandomnessMode = i2133[48]
  i2132.optionalString = i2133[49]
  i2132.updateType = i2133[50]
  i2132.isSpeedBased = !!i2133[51]
  i2132.hasOnStart = !!i2133[52]
  i2132.hasOnPlay = !!i2133[53]
  i2132.hasOnUpdate = !!i2133[54]
  i2132.hasOnStepComplete = !!i2133[55]
  i2132.hasOnComplete = !!i2133[56]
  i2132.hasOnTweenCreated = !!i2133[57]
  i2132.hasOnRewind = !!i2133[58]
  i2132.onStart = request.d('UnityEngine.Events.UnityEvent', i2133[59], i2132.onStart)
  i2132.onPlay = request.d('UnityEngine.Events.UnityEvent', i2133[60], i2132.onPlay)
  i2132.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2133[61], i2132.onUpdate)
  i2132.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2133[62], i2132.onStepComplete)
  i2132.onComplete = request.d('UnityEngine.Events.UnityEvent', i2133[63], i2132.onComplete)
  i2132.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2133[64], i2132.onTweenCreated)
  i2132.onRewind = request.d('UnityEngine.Events.UnityEvent', i2133[65], i2132.onRewind)
  return i2132
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2134 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2135 = data
  i2134.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2135[0], i2134.m_PersistentCalls)
  return i2134
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2136 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2137 = data
  var i2139 = i2137[0]
  var i2138 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2139.length; i += 1) {
    i2138.add(request.d('UnityEngine.Events.PersistentCall', i2139[i + 0]));
  }
  i2136.m_Calls = i2138
  return i2136
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2142 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2143 = data
  request.r(i2143[0], i2143[1], 0, i2142, 'm_Target')
  i2142.m_TargetAssemblyTypeName = i2143[2]
  i2142.m_MethodName = i2143[3]
  i2142.m_Mode = i2143[4]
  i2142.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2143[5], i2142.m_Arguments)
  i2142.m_CallState = i2143[6]
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2145 = data
  i2144.cullTransparentMesh = !!i2145[0]
  return i2144
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2146 = root || request.c( 'UnityEngine.UI.Image' )
  var i2147 = data
  request.r(i2147[0], i2147[1], 0, i2146, 'm_Sprite')
  i2146.m_Type = i2147[2]
  i2146.m_PreserveAspect = !!i2147[3]
  i2146.m_FillCenter = !!i2147[4]
  i2146.m_FillMethod = i2147[5]
  i2146.m_FillAmount = i2147[6]
  i2146.m_FillClockwise = !!i2147[7]
  i2146.m_FillOrigin = i2147[8]
  i2146.m_UseSpriteMesh = !!i2147[9]
  i2146.m_PixelsPerUnitMultiplier = i2147[10]
  request.r(i2147[11], i2147[12], 0, i2146, 'm_Material')
  i2146.m_Maskable = !!i2147[13]
  i2146.m_Color = new pc.Color(i2147[14], i2147[15], i2147[16], i2147[17])
  i2146.m_RaycastTarget = !!i2147[18]
  i2146.m_RaycastPadding = new pc.Vec4( i2147[19], i2147[20], i2147[21], i2147[22] )
  return i2146
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2148 = root || request.c( 'UnityEngine.UI.Text' )
  var i2149 = data
  i2148.m_FontData = request.d('UnityEngine.UI.FontData', i2149[0], i2148.m_FontData)
  i2148.m_Text = i2149[1]
  request.r(i2149[2], i2149[3], 0, i2148, 'm_Material')
  i2148.m_Maskable = !!i2149[4]
  i2148.m_Color = new pc.Color(i2149[5], i2149[6], i2149[7], i2149[8])
  i2148.m_RaycastTarget = !!i2149[9]
  i2148.m_RaycastPadding = new pc.Vec4( i2149[10], i2149[11], i2149[12], i2149[13] )
  return i2148
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2150 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2151 = data
  request.r(i2151[0], i2151[1], 0, i2150, 'm_Font')
  i2150.m_FontSize = i2151[2]
  i2150.m_FontStyle = i2151[3]
  i2150.m_BestFit = !!i2151[4]
  i2150.m_MinSize = i2151[5]
  i2150.m_MaxSize = i2151[6]
  i2150.m_Alignment = i2151[7]
  i2150.m_AlignByGeometry = !!i2151[8]
  i2150.m_RichText = !!i2151[9]
  i2150.m_HorizontalOverflow = i2151[10]
  i2150.m_VerticalOverflow = i2151[11]
  i2150.m_LineSpacing = i2151[12]
  return i2150
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2152 = root || request.c( 'UnityEngine.UI.Button' )
  var i2153 = data
  i2152.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2153[0], i2152.m_OnClick)
  i2152.m_Navigation = request.d('UnityEngine.UI.Navigation', i2153[1], i2152.m_Navigation)
  i2152.m_Transition = i2153[2]
  i2152.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2153[3], i2152.m_Colors)
  i2152.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2153[4], i2152.m_SpriteState)
  i2152.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2153[5], i2152.m_AnimationTriggers)
  i2152.m_Interactable = !!i2153[6]
  request.r(i2153[7], i2153[8], 0, i2152, 'm_TargetGraphic')
  return i2152
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2154 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2155 = data
  i2154.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2155[0], i2154.m_PersistentCalls)
  return i2154
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2156 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2157 = data
  request.r(i2157[0], i2157[1], 0, i2156, 'm_ObjectArgument')
  i2156.m_ObjectArgumentAssemblyTypeName = i2157[2]
  i2156.m_IntArgument = i2157[3]
  i2156.m_FloatArgument = i2157[4]
  i2156.m_StringArgument = i2157[5]
  i2156.m_BoolArgument = !!i2157[6]
  return i2156
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2158 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2159 = data
  i2158.m_Mode = i2159[0]
  i2158.m_WrapAround = !!i2159[1]
  request.r(i2159[2], i2159[3], 0, i2158, 'm_SelectOnUp')
  request.r(i2159[4], i2159[5], 0, i2158, 'm_SelectOnDown')
  request.r(i2159[6], i2159[7], 0, i2158, 'm_SelectOnLeft')
  request.r(i2159[8], i2159[9], 0, i2158, 'm_SelectOnRight')
  return i2158
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2160 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2161 = data
  i2160.m_NormalColor = new pc.Color(i2161[0], i2161[1], i2161[2], i2161[3])
  i2160.m_HighlightedColor = new pc.Color(i2161[4], i2161[5], i2161[6], i2161[7])
  i2160.m_PressedColor = new pc.Color(i2161[8], i2161[9], i2161[10], i2161[11])
  i2160.m_SelectedColor = new pc.Color(i2161[12], i2161[13], i2161[14], i2161[15])
  i2160.m_DisabledColor = new pc.Color(i2161[16], i2161[17], i2161[18], i2161[19])
  i2160.m_ColorMultiplier = i2161[20]
  i2160.m_FadeDuration = i2161[21]
  return i2160
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2162 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2163 = data
  request.r(i2163[0], i2163[1], 0, i2162, 'm_HighlightedSprite')
  request.r(i2163[2], i2163[3], 0, i2162, 'm_PressedSprite')
  request.r(i2163[4], i2163[5], 0, i2162, 'm_SelectedSprite')
  request.r(i2163[6], i2163[7], 0, i2162, 'm_DisabledSprite')
  return i2162
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2164 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2165 = data
  i2164.m_NormalTrigger = i2165[0]
  i2164.m_HighlightedTrigger = i2165[1]
  i2164.m_PressedTrigger = i2165[2]
  i2164.m_SelectedTrigger = i2165[3]
  i2164.m_DisabledTrigger = i2165[4]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2167 = data
  request.r(i2167[0], i2167[1], 0, i2166, 'animatorController')
  request.r(i2167[2], i2167[3], 0, i2166, 'avatar')
  i2166.updateMode = i2167[4]
  i2166.hasTransformHierarchy = !!i2167[5]
  i2166.applyRootMotion = !!i2167[6]
  var i2169 = i2167[7]
  var i2168 = []
  for(var i = 0; i < i2169.length; i += 2) {
  request.r(i2169[i + 0], i2169[i + 1], 2, i2168, '')
  }
  i2166.humanBones = i2168
  i2166.enabled = !!i2167[8]
  return i2166
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i2172 = root || request.c( 'MenuLevel' )
  var i2173 = data
  request.r(i2173[0], i2173[1], 0, i2172, 'menuLevelBtnUpdate')
  var i2175 = i2173[2]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('MenuLevelData', i2175[i + 0]) );
  }
  i2172.AllSteps = i2174
  request.r(i2173[3], i2173[4], 0, i2172, 'buttonparent')
  var i2177 = i2173[5]
  var i2176 = []
  for(var i = 0; i < i2177.length; i += 2) {
  request.r(i2177[i + 0], i2177[i + 1], 2, i2176, '')
  }
  i2172.BtnsDotweenAnims = i2176
  var i2179 = i2173[6]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 2) {
  request.r(i2179[i + 0], i2179[i + 1], 2, i2178, '')
  }
  i2172.BtnsCols = i2178
  request.r(i2173[7], i2173[8], 0, i2172, 'mainGameView')
  request.r(i2173[9], i2173[10], 0, i2172, 'Storyboard')
  request.r(i2173[11], i2173[12], 0, i2172, 'BgMusic')
  request.r(i2173[13], i2173[14], 0, i2172, 'BgStoryMusic')
  request.r(i2173[15], i2173[16], 0, i2172, 'Hand_Tut1')
  request.r(i2173[17], i2173[18], 0, i2172, 'Button_Hand')
  var i2181 = i2173[19]
  var i2180 = []
  for(var i = 0; i < i2181.length; i += 2) {
  request.r(i2181[i + 0], i2181[i + 1], 2, i2180, '')
  }
  i2172.itemEnable_Onstart = i2180
  var i2183 = i2173[20]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 2) {
  request.r(i2183[i + 0], i2183[i + 1], 2, i2182, '')
  }
  i2172.itemDisable_Onstart = i2182
  var i2185 = i2173[21]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 2) {
  request.r(i2185[i + 0], i2185[i + 1], 2, i2184, '')
  }
  i2172.itemEnable_Oncomplete = i2184
  var i2187 = i2173[22]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 2) {
  request.r(i2187[i + 0], i2187[i + 1], 2, i2186, '')
  }
  i2172.itemDisable_Oncomplete = i2186
  i2172.levelKey = i2173[23]
  i2172.revealDirtyHoldTime = i2173[24]
  return i2172
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i2190 = root || request.c( 'MenuLevelData' )
  var i2191 = data
  i2190.Name = i2191[0]
  request.r(i2191[1], i2191[2], 0, i2190, 'UiBtn')
  request.r(i2191[3], i2191[4], 0, i2190, 'TickBtn')
  request.r(i2191[5], i2191[6], 0, i2190, 'ExclamationIcon')
  var i2193 = i2191[7]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 2) {
  request.r(i2193[i + 0], i2193[i + 1], 2, i2192, '')
  }
  i2190.Item_Dirty = i2192
  var i2195 = i2191[8]
  var i2194 = []
  for(var i = 0; i < i2195.length; i += 2) {
  request.r(i2195[i + 0], i2195[i + 1], 2, i2194, '')
  }
  i2190.Item_Clean = i2194
  request.r(i2191[9], i2191[10], 0, i2190, 'CompleteParticle')
  return i2190
}

Deserializers["IntroLevelAnim"] = function (request, data, root) {
  var i2202 = root || request.c( 'IntroLevelAnim' )
  var i2203 = data
  request.r(i2203[0], i2203[1], 0, i2202, 'menuLevel')
  i2202.lvlkey = i2203[2]
  request.r(i2203[3], i2203[4], 0, i2202, 'DressChangeObj')
  request.r(i2203[5], i2203[6], 0, i2202, 'DressChangeClip')
  return i2202
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i2204 = root || request.c( 'Level_PoseController' )
  var i2205 = data
  var i2207 = i2205[0]
  var i2206 = []
  for(var i = 0; i < i2207.length; i += 2) {
  request.r(i2207[i + 0], i2207[i + 1], 2, i2206, '')
  }
  i2204.itemToShow = i2206
  var i2209 = i2205[1]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 2) {
  request.r(i2209[i + 0], i2209[i + 1], 2, i2208, '')
  }
  i2204.itemToHide = i2208
  i2204.stepTarget = i2205[2]
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2211 = data
  i2210.color = new pc.Color(i2211[0], i2211[1], i2211[2], i2211[3])
  request.r(i2211[4], i2211[5], 0, i2210, 'sprite')
  i2210.flipX = !!i2211[6]
  i2210.flipY = !!i2211[7]
  i2210.drawMode = i2211[8]
  i2210.size = new pc.Vec2( i2211[9], i2211[10] )
  i2210.tileMode = i2211[11]
  i2210.adaptiveModeThreshold = i2211[12]
  i2210.maskInteraction = i2211[13]
  i2210.spriteSortPoint = i2211[14]
  i2210.enabled = !!i2211[15]
  request.r(i2211[16], i2211[17], 0, i2210, 'sharedMaterial')
  var i2213 = i2211[18]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 2) {
  request.r(i2213[i + 0], i2213[i + 1], 2, i2212, '')
  }
  i2210.sharedMaterials = i2212
  i2210.receiveShadows = !!i2211[19]
  i2210.shadowCastingMode = i2211[20]
  i2210.sortingLayerID = i2211[21]
  i2210.sortingOrder = i2211[22]
  i2210.lightmapIndex = i2211[23]
  i2210.lightmapSceneIndex = i2211[24]
  i2210.lightmapScaleOffset = new pc.Vec4( i2211[25], i2211[26], i2211[27], i2211[28] )
  i2210.lightProbeUsage = i2211[29]
  i2210.reflectionProbeUsage = i2211[30]
  return i2210
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i2214 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i2215 = data
  request.r(i2215[0], i2215[1], 0, i2214, 'm_RootBone')
  var i2217 = i2215[2]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 2) {
  request.r(i2217[i + 0], i2217[i + 1], 2, i2216, '')
  }
  i2214.m_BoneTransforms = i2216
  i2214.m_AlwaysUpdate = !!i2215[3]
  i2214.m_AutoRebind = !!i2215[4]
  return i2214
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i2218 = root || request.c( 'BD_AnimationHelper' )
  var i2219 = data
  i2218.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i2219[0], i2218.OnAnimationComplete)
  request.r(i2219[1], i2219[2], 0, i2218, 'sfxClip')
  i2218.progBar = !!i2219[3]
  return i2218
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i2220 = root || request.c( 'SpriteButton' )
  var i2221 = data
  i2220.isLocked = !!i2221[0]
  i2220.lockMsg = i2221[1]
  i2220.onClick = request.d('UnityEngine.Events.UnityEvent', i2221[2], i2220.onClick)
  i2220.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i2221[3], i2220.onLockedClick)
  i2220.isLevelBtnSfx = !!i2221[4]
  request.r(i2221[5], i2221[6], 0, i2220, 'pivot')
  i2220.reductionChange = i2221[7]
  i2220.animationDuration = i2221[8]
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2223 = data
  i2222.usedByComposite = !!i2223[0]
  i2222.autoTiling = !!i2223[1]
  i2222.size = new pc.Vec2( i2223[2], i2223[3] )
  i2222.edgeRadius = i2223[4]
  i2222.enabled = !!i2223[5]
  i2222.isTrigger = !!i2223[6]
  i2222.usedByEffector = !!i2223[7]
  i2222.density = i2223[8]
  i2222.offset = new pc.Vec2( i2223[9], i2223[10] )
  request.r(i2223[11], i2223[12], 0, i2222, 'material')
  return i2222
}

Deserializers["DressChangeIntro"] = function (request, data, root) {
  var i2224 = root || request.c( 'DressChangeIntro' )
  var i2225 = data
  request.r(i2225[0], i2225[1], 0, i2224, 'menuLevel')
  request.r(i2225[2], i2225[3], 0, i2224, 'curtainMoveable')
  request.r(i2225[4], i2225[5], 0, i2224, 'curtainStatic')
  i2224.staticCurtainOnly = !!i2225[6]
  i2224.curtainFadeInDuration = i2225[7]
  i2224.curtainFadeInDelay = i2225[8]
  i2224.slideInOffsetX = i2225[9]
  i2224.slideInDuration = i2225[10]
  i2224.slideInEase = i2225[11]
  i2224.startDelay = i2225[12]
  request.r(i2225[13], i2225[14], 0, i2224, 'handSmall')
  request.r(i2225[15], i2225[16], 0, i2224, 'bone_3')
  i2224.handSmallBackwardAmount = i2225[17]
  i2224.bone3BackwardAmount = i2225[18]
  i2224.handPeekDuration = i2225[19]
  i2224.handPeekEase = i2225[20]
  request.r(i2225[21], i2225[22], 0, i2224, 'armCloth')
  i2224.armClothDelay = i2225[23]
  i2224.armClothDuration = i2225[24]
  i2224.armClothEase = i2225[25]
  request.r(i2225[26], i2225[27], 0, i2224, 'basket')
  i2224.basketOffsetX = i2225[28]
  i2224.basketSlideDelay = i2225[29]
  i2224.basketSlideDuration = i2225[30]
  i2224.basketSlideEase = i2225[31]
  request.r(i2225[32], i2225[33], 0, i2224, 'cloth')
  request.r(i2225[34], i2225[35], 0, i2224, 'clothRenderer')
  request.r(i2225[36], i2225[37], 0, i2224, 'clothPickedSprite')
  request.r(i2225[38], i2225[39], 0, i2224, 'clothBasketSprite')
  request.r(i2225[40], i2225[41], 0, i2224, 'handIndication')
  request.r(i2225[42], i2225[43], 0, i2224, 'basketDropTarget')
  i2224.dropRadius = i2225[44]
  i2224.dropJumpHeight = i2225[45]
  i2224.dropJumpDuration = i2225[46]
  i2224.dropSinkDuration = i2225[47]
  i2224.clothPickedSortingOrder = i2225[48]
  request.r(i2225[49], i2225[50], 0, i2224, 'ToolPlaceClip')
  i2224.OnIntroComplete = request.d('UnityEngine.Events.UnityEvent', i2225[51], i2224.OnIntroComplete)
  return i2224
}

Deserializers["MenuDraggable"] = function (request, data, root) {
  var i2226 = root || request.c( 'MenuDraggable' )
  var i2227 = data
  i2226.canDrag = !!i2227[0]
  i2226.returnToStartPosition = !!i2227[1]
  i2226.returnDuration = i2227[2]
  i2226.returnEase = i2227[3]
  i2226.ClampX_L = i2227[4]
  i2226.ClampX_H = i2227[5]
  i2226.ClampY_L = i2227[6]
  i2226.ClampY_H = i2227[7]
  request.r(i2227[8], i2227[9], 0, i2226, 'ToolTapClip')
  i2226.isPlaced = !!i2227[10]
  i2226.OnPicked = request.d('System.Action', i2227[11], i2226.OnPicked)
  i2226.OnReleased = request.d('System.Action', i2227[12], i2226.OnReleased)
  return i2226
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2228 = root || request.c( 'System.Action' )
  var i2229 = data
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2231 = data
  i2230.name = i2231[0]
  i2230.atlasId = i2231[1]
  i2230.mipmapCount = i2231[2]
  i2230.hdr = !!i2231[3]
  i2230.size = i2231[4]
  i2230.anisoLevel = i2231[5]
  i2230.filterMode = i2231[6]
  var i2233 = i2231[7]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 4) {
    i2232.push( UnityEngine.Rect.MinMaxRect(i2233[i + 0], i2233[i + 1], i2233[i + 2], i2233[i + 3]) );
  }
  i2230.rects = i2232
  i2230.wrapU = i2231[8]
  i2230.wrapV = i2231[9]
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2237 = data
  i2236.name = i2237[0]
  i2236.index = i2237[1]
  i2236.startup = !!i2237[2]
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2239 = data
  i2238.aspect = i2239[0]
  i2238.orthographic = !!i2239[1]
  i2238.orthographicSize = i2239[2]
  i2238.backgroundColor = new pc.Color(i2239[3], i2239[4], i2239[5], i2239[6])
  i2238.nearClipPlane = i2239[7]
  i2238.farClipPlane = i2239[8]
  i2238.fieldOfView = i2239[9]
  i2238.depth = i2239[10]
  i2238.clearFlags = i2239[11]
  i2238.cullingMask = i2239[12]
  i2238.rect = i2239[13]
  request.r(i2239[14], i2239[15], 0, i2238, 'targetTexture')
  i2238.usePhysicalProperties = !!i2239[16]
  i2238.focalLength = i2239[17]
  i2238.sensorSize = new pc.Vec2( i2239[18], i2239[19] )
  i2238.lensShift = new pc.Vec2( i2239[20], i2239[21] )
  i2238.gateFit = i2239[22]
  i2238.commandBufferCount = i2239[23]
  i2238.cameraType = i2239[24]
  i2238.enabled = !!i2239[25]
  return i2238
}

Deserializers["CameraController"] = function (request, data, root) {
  var i2240 = root || request.c( 'CameraController' )
  var i2241 = data
  request.r(i2241[0], i2241[1], 0, i2240, 'cam')
  i2240.defaultPosition = new pc.Vec3( i2241[2], i2241[3], i2241[4] )
  i2240.defaultSize = i2241[5]
  i2240.defaultFOV = i2241[6]
  i2240.defaultDuration = i2241[7]
  i2240.defaultEase = i2241[8]
  return i2240
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i2242 = root || request.c( 'MusicSource' )
  var i2243 = data
  request.r(i2243[0], i2243[1], 0, i2242, 'source')
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2245 = data
  request.r(i2245[0], i2245[1], 0, i2244, 'clip')
  request.r(i2245[2], i2245[3], 0, i2244, 'outputAudioMixerGroup')
  i2244.playOnAwake = !!i2245[4]
  i2244.loop = !!i2245[5]
  i2244.time = i2245[6]
  i2244.volume = i2245[7]
  i2244.pitch = i2245[8]
  i2244.enabled = !!i2245[9]
  return i2244
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i2246 = root || request.c( 'UI_Manager' )
  var i2247 = data
  i2246.levelCompleted = !!i2247[0]
  i2246.isPauseActive = !!i2247[1]
  i2246.loadIndex = i2247[2]
  request.r(i2247[3], i2247[4], 0, i2246, 'removeAdsButton')
  request.r(i2247[5], i2247[6], 0, i2246, 'pauseButton')
  request.r(i2247[7], i2247[8], 0, i2246, 'Fade_Img')
  request.r(i2247[9], i2247[10], 0, i2246, 'TopBarAnim')
  request.r(i2247[11], i2247[12], 0, i2246, 'MainPanel')
  request.r(i2247[13], i2247[14], 0, i2246, 'PausePanel')
  request.r(i2247[15], i2247[16], 0, i2246, 'PausePopUp')
  request.r(i2247[17], i2247[18], 0, i2246, 'PauseCanvasGroup')
  request.r(i2247[19], i2247[20], 0, i2246, 'RateUsPanel')
  request.r(i2247[21], i2247[22], 0, i2246, 'RateUsPopUp')
  request.r(i2247[23], i2247[24], 0, i2246, 'RemoveAdsPanel')
  request.r(i2247[25], i2247[26], 0, i2246, 'RemoveAdsPopUp')
  request.r(i2247[27], i2247[28], 0, i2246, 'RemoveAdsCanvasGroup')
  var i2249 = i2247[29]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 2) {
  request.r(i2249[i + 0], i2249[i + 1], 2, i2248, '')
  }
  i2246.RemoveAdsAnims = i2248
  i2246.showCompletePanel = !!i2247[30]
  var i2251 = i2247[31]
  var i2250 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2251.length; i += 2) {
  request.r(i2251[i + 0], i2251[i + 1], 1, i2250, '')
  }
  i2246.thingsToDisableWhenCompletePanel = i2250
  request.r(i2247[32], i2247[33], 0, i2246, 'CompletePanel')
  request.r(i2247[34], i2247[35], 0, i2246, 'LevelIcon')
  request.r(i2247[36], i2247[37], 0, i2246, 'CompleteParticles')
  request.r(i2247[38], i2247[39], 0, i2246, 'progressBar')
  request.r(i2247[40], i2247[41], 0, i2246, 'progressText')
  request.r(i2247[42], i2247[43], 0, i2246, 'toolIcon1')
  request.r(i2247[44], i2247[45], 0, i2246, 'toolIcon2')
  request.r(i2247[46], i2247[47], 0, i2246, 'toolIcon3')
  request.r(i2247[48], i2247[49], 0, i2246, 'toolIcon4')
  request.r(i2247[50], i2247[51], 0, i2246, 'toolHolder')
  i2246.toolHolderRaisedY = i2247[52]
  i2246.toolHolderRaiseDuration = i2247[53]
  request.r(i2247[54], i2247[55], 0, i2246, 'target1')
  request.r(i2247[56], i2247[57], 0, i2246, 'target2')
  i2246.toolMoveDuration = i2247[58]
  i2246.currentIndex = i2247[59]
  var i2253 = i2247[60]
  var i2252 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2253.length; i += 2) {
  request.r(i2253[i + 0], i2253[i + 1], 1, i2252, '')
  }
  i2246.allTools = i2252
  request.r(i2247[61], i2247[62], 0, i2246, 'clockProgress')
  request.r(i2247[63], i2247[64], 0, i2246, 'clockProgressFill')
  request.r(i2247[65], i2247[66], 0, i2246, 'clockAudio')
  i2246.moveDistance = i2247[67]
  i2246.animationDuration = i2247[68]
  i2246.greyBgChildName = i2247[69]
  i2246.pushOffset = i2247[70]
  return i2246
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i2258 = root || request.c( 'GameManagerPlayable' )
  var i2259 = data
  request.r(i2259[0], i2259[1], 0, i2258, 'endParticles')
  request.r(i2259[2], i2259[3], 0, i2258, 'stepCompleteParticles')
  request.r(i2259[4], i2259[5], 0, i2258, 'DefaultMat')
  request.r(i2259[6], i2259[7], 0, i2258, 'BG_Music')
  request.r(i2259[8], i2259[9], 0, i2258, 'restoreEffectShader')
  request.r(i2259[10], i2259[11], 0, i2258, 'stickerEffectShader')
  i2258.isComplete = !!i2259[12]
  i2258.isPaused = !!i2259[13]
  request.r(i2259[14], i2259[15], 0, i2258, 'currentLevel')
  i2258.startLevelOnPlay = !!i2259[16]
  i2258.currentLevelNo = i2259[17]
  return i2258
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2260 = root || request.c( 'AudioController' )
  var i2261 = data
  request.r(i2261[0], i2261[1], 0, i2260, 'MainMixer')
  request.r(i2261[2], i2261[3], 0, i2260, 'UiClick')
  request.r(i2261[4], i2261[5], 0, i2260, 'UiClickSource')
  var i2263 = i2261[6]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 2) {
  request.r(i2263[i + 0], i2263[i + 1], 2, i2262, '')
  }
  i2260.SfxSources = i2262
  var i2265 = i2261[7]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 2) {
  request.r(i2265[i + 0], i2265[i + 1], 2, i2264, '')
  }
  i2260.AllClips = i2264
  return i2260
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i2270 = root || request.c( 'PlayableHudRuntime' )
  var i2271 = data
  return i2270
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2272 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2273 = data
  request.r(i2273[0], i2273[1], 0, i2272, 'm_FirstSelected')
  i2272.m_sendNavigationEvents = !!i2273[2]
  i2272.m_DragThreshold = i2273[3]
  return i2272
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2274 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2275 = data
  i2274.m_HorizontalAxis = i2275[0]
  i2274.m_VerticalAxis = i2275[1]
  i2274.m_SubmitButton = i2275[2]
  i2274.m_CancelButton = i2275[3]
  i2274.m_InputActionsPerSecond = i2275[4]
  i2274.m_RepeatDelay = i2275[5]
  i2274.m_ForceModuleActive = !!i2275[6]
  i2274.m_SendPointerHoverToParent = !!i2275[7]
  return i2274
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i2276 = root || request.c( 'PlayableRouter' )
  var i2277 = data
  var i2279 = i2277[0]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 2) {
  request.r(i2279[i + 0], i2279[i + 1], 2, i2278, '')
  }
  i2276.menuObjects = i2278
  var i2281 = i2277[1]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 2) {
  request.r(i2281[i + 0], i2281[i + 1], 2, i2280, '')
  }
  i2276.gameplayObjects = i2280
  var i2283 = i2277[2]
  var i2282 = []
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.push( request.d('PlayableRouter+SubLevelSlot', i2283[i + 0]) );
  }
  i2276.subLevels = i2282
  i2276.fadeDuration = i2277[3]
  i2276.onIntroStart = request.d('UnityEngine.Events.UnityEvent', i2277[4], i2276.onIntroStart)
  var i2285 = i2277[5]
  var i2284 = []
  for(var i = 0; i < i2285.length; i += 2) {
  request.r(i2285[i + 0], i2285[i + 1], 2, i2284, '')
  }
  i2276.hideDuringIntro = i2284
  i2276.lockedMessage = i2277[6]
  i2276.lockedTapsToCTA = i2277[7]
  return i2276
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i2288 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i2289 = data
  request.r(i2289[0], i2289[1], 0, i2288, 'button')
  request.r(i2289[2], i2289[3], 0, i2288, 'level')
  request.r(i2289[4], i2289[5], 0, i2288, 'intro')
  return i2288
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i2290 = root || request.c( 'ToastManager' )
  var i2291 = data
  request.r(i2291[0], i2291[1], 0, i2290, 'toastPanel')
  request.r(i2291[2], i2291[3], 0, i2290, 'toastPopup')
  request.r(i2291[4], i2291[5], 0, i2290, 'canvasGroup')
  request.r(i2291[6], i2291[7], 0, i2290, 'toastText')
  i2290.startY = i2291[8]
  i2290.visibleY = i2291[9]
  i2290.endY = i2291[10]
  i2290.animationTime = i2291[11]
  i2290.animationTimeUp = i2291[12]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2293 = data
  i2292.m_Alpha = i2293[0]
  i2292.m_Interactable = !!i2293[1]
  i2292.m_BlocksRaycasts = !!i2293[2]
  i2292.m_IgnoreParentGroups = !!i2293[3]
  i2292.enabled = !!i2293[4]
  return i2292
}

Deserializers["Level1_Cloth_Playable_Step1to4"] = function (request, data, root) {
  var i2294 = root || request.c( 'Level1_Cloth_Playable_Step1to4' )
  var i2295 = data
  request.r(i2295[0], i2295[1], 0, i2294, 'WashingView')
  request.r(i2295[2], i2295[3], 0, i2294, 'WashingTools')
  request.r(i2295[4], i2295[5], 0, i2294, 'DressingView')
  request.r(i2295[6], i2295[7], 0, i2294, 'DressingTools')
  i2294.ZoomStep1 = request.d('ZoomPos', i2295[8], i2294.ZoomStep1)
  request.r(i2295[9], i2295[10], 0, i2294, 'ToolStep1')
  request.r(i2295[11], i2295[12], 0, i2294, 'Basket_Cloth')
  request.r(i2295[13], i2295[14], 0, i2294, 'clothInside')
  request.r(i2295[15], i2295[16], 0, i2294, 'clothRound')
  request.r(i2295[17], i2295[18], 0, i2294, 'machineDoor')
  request.r(i2295[19], i2295[20], 0, i2294, 'machineGlass')
  i2294.ZoomStep2 = request.d('ZoomPos', i2295[21], i2294.ZoomStep2)
  i2294.ZoomStep2b = request.d('ZoomPos', i2295[22], i2294.ZoomStep2b)
  request.r(i2295[23], i2295[24], 0, i2294, 'ToolStep2')
  request.r(i2295[25], i2295[26], 0, i2294, 'ToolStep2CamFollow')
  request.r(i2295[27], i2295[28], 0, i2294, 'drawerObj')
  request.r(i2295[29], i2295[30], 0, i2294, 'surfObj')
  request.r(i2295[31], i2295[32], 0, i2294, 'surfPackTop')
  request.r(i2295[33], i2295[34], 0, i2294, 'handStep2')
  request.r(i2295[35], i2295[36], 0, i2294, 'surfController')
  request.r(i2295[37], i2295[38], 0, i2294, 'clothsInside')
  request.r(i2295[39], i2295[40], 0, i2294, 'clothsInsideGlass')
  request.r(i2295[41], i2295[42], 0, i2294, 'clothsStaticClean')
  request.r(i2295[43], i2295[44], 0, i2294, 'wetCloths')
  request.r(i2295[45], i2295[46], 0, i2294, 'clothCleanInside')
  request.r(i2295[47], i2295[48], 0, i2294, 'clothCleanInsideAnim')
  request.r(i2295[49], i2295[50], 0, i2294, 'waterWave')
  request.r(i2295[51], i2295[52], 0, i2294, 'clothCleanInside2')
  request.r(i2295[53], i2295[54], 0, i2294, 'clothCleanInside2Cam')
  request.r(i2295[55], i2295[56], 0, i2294, 'clothBasketTarget')
  request.r(i2295[57], i2295[58], 0, i2294, 'clothBasketTarget2')
  request.r(i2295[59], i2295[60], 0, i2294, 'waterSplash_Vfx')
  request.r(i2295[61], i2295[62], 0, i2294, 'countDownTimerText')
  i2294.countDown = i2295[63]
  request.r(i2295[64], i2295[65], 0, i2294, 'machineTimer')
  request.r(i2295[66], i2295[67], 0, i2294, 'machineTimerRotater')
  request.r(i2295[68], i2295[69], 0, i2294, 'machineTimerIndication')
  request.r(i2295[70], i2295[71], 0, i2294, 'darazOpenSfx')
  request.r(i2295[72], i2295[73], 0, i2294, 'darazCloseSfx')
  request.r(i2295[74], i2295[75], 0, i2294, 'doorOpenSfx')
  request.r(i2295[76], i2295[77], 0, i2294, 'machineStartSfx')
  request.r(i2295[78], i2295[79], 0, i2294, 'machineFinishSfx')
  request.r(i2295[80], i2295[81], 0, i2294, 'waterDrainSfx')
  i2294.levelName = i2295[82]
  i2294.levelReward = i2295[83]
  request.r(i2295[84], i2295[85], 0, i2294, 'LevelIcon')
  request.r(i2295[86], i2295[87], 0, i2294, 'Level_BG')
  var i2297 = i2295[88]
  var i2296 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2297.length; i += 2) {
  request.r(i2297[i + 0], i2297[i + 1], 1, i2296, '')
  }
  i2294.ToolIcons = i2296
  var i2299 = i2295[89]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 2) {
  request.r(i2299[i + 0], i2299[i + 1], 2, i2298, '')
  }
  i2294.AllDrags = i2298
  var i2301 = i2295[90]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 2) {
  request.r(i2301[i + 0], i2301[i + 1], 2, i2300, '')
  }
  i2294.AllSources = i2300
  var i2303 = i2295[91]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 2) {
  request.r(i2303[i + 0], i2303[i + 1], 2, i2302, '')
  }
  i2294.AllScratches = i2302
  i2294.stepsDone = i2295[92]
  i2294.levelNo = i2295[93]
  i2294.partNo = i2295[94]
  request.r(i2295[95], i2295[96], 0, i2294, 'clothSfx')
  request.r(i2295[97], i2295[98], 0, i2294, 'doorCloseSfx')
  return i2294
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i2304 = root || request.c( 'ZoomPos' )
  var i2305 = data
  i2304.CameraPos = new pc.Vec3( i2305[0], i2305[1], i2305[2] )
  i2304.CameraFOV = i2305[3]
  return i2304
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i2310 = root || request.c( 'PlayableCTA' )
  var i2311 = data
  i2310.trigger = i2311[0]
  i2310.afterSeconds = i2311[1]
  i2310.afterTaps = i2311[2]
  request.r(i2311[3], i2311[4], 0, i2310, 'scratchProgress')
  i2310.scratchIndex = i2311[5]
  i2310.progressThreshold = i2311[6]
  request.r(i2311[7], i2311[8], 0, i2310, 'watchedTool')
  i2310.blockInputOnFire = !!i2311[9]
  i2310.refireOnEveryTap = !!i2311[10]
  i2310.refireDelay = i2311[11]
  i2310.showEndCard = !!i2311[12]
  request.r(i2311[13], i2311[14], 0, i2310, 'endCard')
  i2310.showEndCardOnProgressTrigger = !!i2311[15]
  i2310.showEndCardOnToolAppearTrigger = !!i2311[16]
  i2310.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i2311[17], i2310.onCtaFired)
  i2310.logWhenFired = !!i2311[18]
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i2312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i2313 = data
  i2312.textureMode = i2313[0]
  i2312.alignment = i2313[1]
  i2312.widthCurve = new pc.AnimationCurve( { keys_flow: i2313[2] } )
  i2312.colorGradient = i2313[3] ? new pc.ColorGradient(i2313[3][0], i2313[3][1], i2313[3][2]) : null
  var i2315 = i2313[4]
  var i2314 = []
  for(var i = 0; i < i2315.length; i += 3) {
    i2314.push( new pc.Vec3( i2315[i + 0], i2315[i + 1], i2315[i + 2] ) );
  }
  i2312.positions = i2314
  i2312.positionCount = i2313[5]
  i2312.widthMultiplier = i2313[6]
  i2312.startWidth = i2313[7]
  i2312.endWidth = i2313[8]
  i2312.numCornerVertices = i2313[9]
  i2312.numCapVertices = i2313[10]
  i2312.useWorldSpace = !!i2313[11]
  i2312.loop = !!i2313[12]
  i2312.startColor = new pc.Color(i2313[13], i2313[14], i2313[15], i2313[16])
  i2312.endColor = new pc.Color(i2313[17], i2313[18], i2313[19], i2313[20])
  i2312.generateLightingData = !!i2313[21]
  i2312.enabled = !!i2313[22]
  request.r(i2313[23], i2313[24], 0, i2312, 'sharedMaterial')
  var i2317 = i2313[25]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 2) {
  request.r(i2317[i + 0], i2317[i + 1], 2, i2316, '')
  }
  i2312.sharedMaterials = i2316
  i2312.receiveShadows = !!i2313[26]
  i2312.shadowCastingMode = i2313[27]
  i2312.sortingLayerID = i2313[28]
  i2312.sortingOrder = i2313[29]
  i2312.lightmapIndex = i2313[30]
  i2312.lightmapSceneIndex = i2313[31]
  i2312.lightmapScaleOffset = new pc.Vec4( i2313[32], i2313[33], i2313[34], i2313[35] )
  i2312.lightProbeUsage = i2313[36]
  i2312.reflectionProbeUsage = i2313[37]
  return i2312
}

Deserializers["TextureOffsetScroller"] = function (request, data, root) {
  var i2320 = root || request.c( 'TextureOffsetScroller' )
  var i2321 = data
  i2320.scrollSpeed = new pc.Vec2( i2321[0], i2321[1] )
  i2320.smoothStart = !!i2321[2]
  i2320.smoothDuration = i2321[3]
  i2320.textureName = i2321[4]
  i2320.useSharedMaterial = !!i2321[5]
  return i2320
}

Deserializers["RotaryTimerKnob"] = function (request, data, root) {
  var i2322 = root || request.c( 'RotaryTimerKnob' )
  var i2323 = data
  i2322.canDrag = !!i2323[0]
  i2322.numSteps = i2323[1]
  i2322.onlyClockwise = !!i2323[2]
  request.r(i2323[3], i2323[4], 0, i2322, 'clickSound')
  i2322.enableVibration = !!i2323[5]
  request.r(i2323[6], i2323[7], 0, i2322, 'stepText')
  i2322.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2323[8], i2322.OnComplete)
  request.r(i2323[9], i2323[10], 0, i2322, 'handIndication')
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2325 = data
  request.r(i2325[0], i2325[1], 0, i2324, 'additionalVertexStreams')
  i2324.enabled = !!i2325[2]
  request.r(i2325[3], i2325[4], 0, i2324, 'sharedMaterial')
  var i2327 = i2325[5]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 2) {
  request.r(i2327[i + 0], i2327[i + 1], 2, i2326, '')
  }
  i2324.sharedMaterials = i2326
  i2324.receiveShadows = !!i2325[6]
  i2324.shadowCastingMode = i2325[7]
  i2324.sortingLayerID = i2325[8]
  i2324.sortingOrder = i2325[9]
  i2324.lightmapIndex = i2325[10]
  i2324.lightmapSceneIndex = i2325[11]
  i2324.lightmapScaleOffset = new pc.Vec4( i2325[12], i2325[13], i2325[14], i2325[15] )
  i2324.lightProbeUsage = i2325[16]
  i2324.reflectionProbeUsage = i2325[17]
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2329 = data
  i2328.frontSortingLayerID = i2329[0]
  i2328.frontSortingOrder = i2329[1]
  i2328.backSortingLayerID = i2329[2]
  i2328.backSortingOrder = i2329[3]
  i2328.alphaCutoff = i2329[4]
  request.r(i2329[5], i2329[6], 0, i2328, 'sprite')
  i2328.tileMode = i2329[7]
  i2328.isCustomRangeActive = !!i2329[8]
  i2328.spriteSortPoint = i2329[9]
  i2328.enabled = !!i2329[10]
  request.r(i2329[11], i2329[12], 0, i2328, 'sharedMaterial')
  var i2331 = i2329[13]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 2) {
  request.r(i2331[i + 0], i2331[i + 1], 2, i2330, '')
  }
  i2328.sharedMaterials = i2330
  i2328.receiveShadows = !!i2329[14]
  i2328.shadowCastingMode = i2329[15]
  i2328.sortingLayerID = i2329[16]
  i2328.sortingOrder = i2329[17]
  i2328.lightmapIndex = i2329[18]
  i2328.lightmapSceneIndex = i2329[19]
  i2328.lightmapScaleOffset = new pc.Vec4( i2329[20], i2329[21], i2329[22], i2329[23] )
  i2328.lightProbeUsage = i2329[24]
  i2328.reflectionProbeUsage = i2329[25]
  return i2328
}

Deserializers["_2dxFX_Wave"] = function (request, data, root) {
  var i2332 = root || request.c( '_2dxFX_Wave' )
  var i2333 = data
  request.r(i2333[0], i2333[1], 0, i2332, 'ForceMaterial')
  i2332.ActiveChange = !!i2333[2]
  i2332._Alpha = i2333[3]
  i2332._OffsetX = i2333[4]
  i2332._OffsetY = i2333[5]
  i2332._DistanceX = i2333[6]
  i2332._DistanceY = i2333[7]
  i2332._WaveTimeX = i2333[8]
  i2332._WaveTimeY = i2333[9]
  i2332.AutoPlayWaveX = !!i2333[10]
  i2332.AutoPlaySpeedX = i2333[11]
  i2332.AutoPlayWaveY = !!i2333[12]
  i2332.AutoPlaySpeedY = i2333[13]
  i2332.AutoRandom = !!i2333[14]
  i2332.AutoRandomRange = i2333[15]
  i2332.ShaderChange = i2333[16]
  return i2332
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i2334 = root || request.c( 'BasicDrag' )
  var i2335 = data
  i2334.canDrag = !!i2335[0]
  i2334.dragByDelta = !!i2335[1]
  i2334.isDragging = !!i2335[2]
  i2334.moveWithPointer = !!i2335[3]
  i2334.canReturn = !!i2335[4]
  i2334.jumpOnReturn = !!i2335[5]
  i2334.returnTime = i2335[6]
  i2334.Tool_Offset = new pc.Vec3( i2335[7], i2335[8], i2335[9] )
  i2334.canScaleIncrease = !!i2335[10]
  i2334.Self_ScaleNew = new pc.Vec3( i2335[11], i2335[12], i2335[13] )
  i2334.canRotateOnPick = !!i2335[14]
  i2334.startRot = new pc.Vec3( i2335[15], i2335[16], i2335[17] )
  i2334.newRot = new pc.Vec3( i2335[18], i2335[19], i2335[20] )
  var i2337 = i2335[21]
  var i2336 = []
  for(var i = 0; i < i2337.length; i += 2) {
  request.r(i2337[i + 0], i2337[i + 1], 2, i2336, '')
  }
  i2334.childSprite = i2336
  request.r(i2335[22], i2335[23], 0, i2334, 'ToolSelectClip')
  request.r(i2335[24], i2335[25], 0, i2334, 'ToolLoopClip')
  request.r(i2335[26], i2335[27], 0, i2334, 'thisParticles')
  i2334.onDragparticle = !!i2335[28]
  request.r(i2335[29], i2335[30], 0, i2334, 'dragParticles')
  request.r(i2335[31], i2335[32], 0, i2334, 'anim')
  i2334.startPos = new pc.Vec3( i2335[33], i2335[34], i2335[35] )
  i2334.startScale = new pc.Vec3( i2335[36], i2335[37], i2335[38] )
  i2334.Vibration = !!i2335[39]
  i2334.isPlacedCannotMove = !!i2335[40]
  i2334.isObjectMovingWhileDragging = !!i2335[41]
  i2334.OnMouseDownEvent = request.d('System.Action', i2335[42], i2334.OnMouseDownEvent)
  i2334.OnMouseUpEvent = request.d('System.Action', i2335[43], i2334.OnMouseUpEvent)
  i2334.ProgStartEvent = request.d('System.Action', i2335[44], i2334.ProgStartEvent)
  i2334.ProgEndEvent = request.d('System.Action', i2335[45], i2334.ProgEndEvent)
  i2334.canCallMouseUpWhenGamePaused = !!i2335[46]
  i2334.ClampX_L = i2335[47]
  i2334.ClampX_H = i2335[48]
  i2334.ClampY_L = i2335[49]
  i2334.ClampY_H = i2335[50]
  i2334.startOrder = i2335[51]
  i2334.dontResetItIsInCollider = !!i2335[52]
  request.r(i2335[53], i2335[54], 0, i2334, 'thisCollider')
  request.r(i2335[55], i2335[56], 0, i2334, 'thisSR')
  i2334.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i2335[57], i2334.OnMouseDownEventIndependentFromCanDrag)
  return i2334
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i2340 = root || request.c( 'BD_Clamp' )
  var i2341 = data
  i2340.ClampX_L = i2341[0]
  i2340.ClampX_H = i2341[1]
  i2340.ClampY_L = i2341[2]
  i2340.ClampY_H = i2341[3]
  return i2340
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i2342 = root || request.c( 'BD_CameraFollow' )
  var i2343 = data
  request.r(i2343[0], i2343[1], 0, i2342, 'Tool')
  request.r(i2343[2], i2343[3], 0, i2342, 'Pivot')
  i2342.FOV = i2343[4]
  i2342.Y_L = i2343[5]
  i2342.Y_H = i2343[6]
  i2342.X_L = i2343[7]
  i2342.X_R = i2343[8]
  i2342.startDelay = i2343[9]
  i2342.duration = i2343[10]
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2345 = data
  i2344.bodyType = i2345[0]
  request.r(i2345[1], i2345[2], 0, i2344, 'material')
  i2344.simulated = !!i2345[3]
  i2344.useAutoMass = !!i2345[4]
  i2344.mass = i2345[5]
  i2344.drag = i2345[6]
  i2344.angularDrag = i2345[7]
  i2344.gravityScale = i2345[8]
  i2344.collisionDetectionMode = i2345[9]
  i2344.sleepMode = i2345[10]
  i2344.constraints = i2345[11]
  return i2344
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i2346 = root || request.c( 'PlaceItem' )
  var i2347 = data
  request.r(i2347[0], i2347[1], 0, i2346, 'thisDrag')
  request.r(i2347[2], i2347[3], 0, i2346, 'Target')
  request.r(i2347[4], i2347[5], 0, i2346, 'Clip')
  i2346.jumpOnPlace = !!i2347[6]
  i2346.jumpHeight = i2347[7]
  i2346.jumpDuration = i2347[8]
  i2346.settleDuration = i2347[9]
  i2346.isPlaced = !!i2347[10]
  i2346.isInsideCollider = !!i2347[11]
  i2346.changeScaleOnPlace = !!i2347[12]
  request.r(i2347[13], i2347[14], 0, i2346, 'item')
  i2346.newScaleOnPlace = new pc.Vec3( i2347[15], i2347[16], i2347[17] )
  i2346.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i2347[18], i2346.OnPlaced)
  return i2346
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i2348 = root || request.c( 'ActionOnTap' )
  var i2349 = data
  i2348.OnTap = request.d('UnityEngine.Events.UnityEvent', i2349[0], i2348.OnTap)
  i2348.OnTapExtra = request.d('System.Action', i2349[1], i2348.OnTapExtra)
  return i2348
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i2350 = root || request.c( 'BD_Action' )
  var i2351 = data
  i2350.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i2351[0], i2350.OnMouseDownEvent)
  i2350.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i2351[1], i2350.OnMouseUpEvent)
  i2350.setToolLayer = !!i2351[2]
  request.r(i2351[3], i2351[4], 0, i2350, 'tool_SP')
  return i2350
}

Deserializers["Level1_SurfController"] = function (request, data, root) {
  var i2352 = root || request.c( 'Level1_SurfController' )
  var i2353 = data
  i2352.target_rotZ = i2353[0]
  i2352.rotationDuration = i2353[1]
  i2352.rotationEase = i2353[2]
  request.r(i2353[3], i2353[4], 0, i2352, 'maskItem')
  i2352.maskTarget_posY = i2353[5]
  i2352.maskMoveDuration = i2353[6]
  i2352.requiredHoldTime = i2353[7]
  i2352.minRotationForProgress = i2353[8]
  request.r(i2353[9], i2353[10], 0, i2352, 'tipCollider')
  request.r(i2353[11], i2353[12], 0, i2352, 'targetZoneCollider')
  request.r(i2353[13], i2353[14], 0, i2352, 'surf_Particles')
  request.r(i2353[15], i2353[16], 0, i2352, 'surf_SubEmitter')
  request.r(i2353[17], i2353[18], 0, i2352, 'Indication')
  i2352.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2353[19], i2352.OnComplete)
  i2352.currentHoldProgress = i2353[20]
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2355 = data
  i2354.radius = i2355[0]
  i2354.enabled = !!i2355[1]
  i2354.isTrigger = !!i2355[2]
  i2354.usedByEffector = !!i2355[3]
  i2354.density = i2355[4]
  i2354.offset = new pc.Vec2( i2355[5], i2355[6] )
  request.r(i2355[7], i2355[8], 0, i2354, 'material')
  return i2354
}

Deserializers["BD_Fold"] = function (request, data, root) {
  var i2356 = root || request.c( 'BD_Fold' )
  var i2357 = data
  i2356.canDrag = !!i2357[0]
  i2356.canFoldBottomLeft = !!i2357[1]
  i2356.canFoldBottomRight = !!i2357[2]
  i2356.canFoldTopLeft = !!i2357[3]
  i2356.canFoldTopRight = !!i2357[4]
  request.r(i2357[5], i2357[6], 0, i2356, 'Indication')
  request.r(i2357[7], i2357[8], 0, i2356, 'backSideSprite')
  i2356.maxSideOffset = i2357[9]
  i2356.foldBackDuration = i2357[10]
  i2356.instantFoldAmount = i2357[11]
  i2356.useSmoothRelease = !!i2357[12]
  i2356.completionLimit = i2357[13]
  i2356.afterCompletionTravelTo = i2357[14]
  i2356.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2357[15], i2356.OnComplete)
  i2356.currentProgress = i2357[16]
  i2356.innerShadowStrength = i2357[17]
  request.r(i2357[18], i2357[19], 0, i2356, 'dragAudioSource')
  request.r(i2357[20], i2357[21], 0, i2356, 'dragStartClip')
  request.r(i2357[22], i2357[23], 0, i2356, 'completionClip')
  i2356.audioFadeSpeed = i2357[24]
  i2356.audioMoveThreshold = i2357[25]
  i2356.hapticInterval = i2357[26]
  return i2356
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i2358 = root || request.c( 'BD_Progress' )
  var i2359 = data
  var i2361 = i2359[0]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.push( request.d('ScratchData', i2361[i + 0]) );
  }
  i2358.AllScratches = i2360
  i2358.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i2359[1], i2358.OnScratchComplete)
  i2358.isProgDone = !!i2359[2]
  i2358.canCallComplete = !!i2359[3]
  i2358.CollectiveAppear = !!i2359[4]
  i2358.tipControl = !!i2359[5]
  i2358.progressControl = !!i2359[6]
  request.r(i2359[7], i2359[8], 0, i2358, 'thisDrag')
  i2358.CompleteEvent = request.d('System.Action', i2359[9], i2358.CompleteEvent)
  i2358.SubCompleteEvent = request.d('System.Action', i2359[10], i2358.SubCompleteEvent)
  return i2358
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i2364 = root || request.c( 'ScratchData' )
  var i2365 = data
  request.r(i2365[0], i2365[1], 0, i2364, 'ScratchManager')
  i2364.scratchLimit = i2365[2]
  i2364.isComplete = !!i2365[3]
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2367 = data
  request.r(i2367[0], i2367[1], 0, i2366, 'sharedMesh')
  return i2366
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i2368 = root || request.c( 'StaticFixedPipe' )
  var i2369 = data
  request.r(i2369[0], i2369[1], 0, i2368, 'meshRenderer')
  request.r(i2369[2], i2369[3], 0, i2368, 'toolTransform')
  request.r(i2369[4], i2369[5], 0, i2368, 'toolDirectionPoint')
  request.r(i2369[6], i2369[7], 0, i2368, 'fixedEndPoint')
  i2368.segmentCount = i2369[8]
  i2368.totalLength = i2369[9]
  i2368.constraintIterations = i2369[10]
  i2368.gravity = new pc.Vec3( i2369[11], i2369[12], i2369[13] )
  i2368.pipeWidth = i2369[14]
  return i2368
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i2370 = root || request.c( 'BD_SpriteChange' )
  var i2371 = data
  request.r(i2371[0], i2371[1], 0, i2370, 'BD')
  request.r(i2371[2], i2371[3], 0, i2370, 'SR')
  request.r(i2371[4], i2371[5], 0, i2370, 'Default')
  request.r(i2371[6], i2371[7], 0, i2370, 'Picked')
  i2370.resetOnRelease = !!i2371[8]
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2373 = data
  i2372.ambientIntensity = i2373[0]
  i2372.reflectionIntensity = i2373[1]
  i2372.ambientMode = i2373[2]
  i2372.ambientLight = new pc.Color(i2373[3], i2373[4], i2373[5], i2373[6])
  i2372.ambientSkyColor = new pc.Color(i2373[7], i2373[8], i2373[9], i2373[10])
  i2372.ambientGroundColor = new pc.Color(i2373[11], i2373[12], i2373[13], i2373[14])
  i2372.ambientEquatorColor = new pc.Color(i2373[15], i2373[16], i2373[17], i2373[18])
  i2372.fogColor = new pc.Color(i2373[19], i2373[20], i2373[21], i2373[22])
  i2372.fogEndDistance = i2373[23]
  i2372.fogStartDistance = i2373[24]
  i2372.fogDensity = i2373[25]
  i2372.fog = !!i2373[26]
  request.r(i2373[27], i2373[28], 0, i2372, 'skybox')
  i2372.fogMode = i2373[29]
  var i2375 = i2373[30]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2375[i + 0]) );
  }
  i2372.lightmaps = i2374
  i2372.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2373[31], i2372.lightProbes)
  i2372.lightmapsMode = i2373[32]
  i2372.mixedBakeMode = i2373[33]
  i2372.environmentLightingMode = i2373[34]
  i2372.ambientProbe = new pc.SphericalHarmonicsL2(i2373[35])
  request.r(i2373[36], i2373[37], 0, i2372, 'customReflection')
  request.r(i2373[38], i2373[39], 0, i2372, 'defaultReflection')
  i2372.defaultReflectionMode = i2373[40]
  i2372.defaultReflectionResolution = i2373[41]
  i2372.sunLightObjectId = i2373[42]
  i2372.pixelLightCount = i2373[43]
  i2372.defaultReflectionHDR = !!i2373[44]
  i2372.hasLightDataAsset = !!i2373[45]
  i2372.hasManualGenerate = !!i2373[46]
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2379 = data
  request.r(i2379[0], i2379[1], 0, i2378, 'lightmapColor')
  request.r(i2379[2], i2379[3], 0, i2378, 'lightmapDirection')
  request.r(i2379[4], i2379[5], 0, i2378, 'shadowMask')
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2380 = root || new UnityEngine.LightProbes()
  var i2381 = data
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2387 = data
  var i2389 = i2387[0]
  var i2388 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2389.length; i += 1) {
    i2388.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2389[i + 0]));
  }
  i2386.ShaderCompilationErrors = i2388
  i2386.name = i2387[1]
  i2386.guid = i2387[2]
  var i2391 = i2387[3]
  var i2390 = []
  for(var i = 0; i < i2391.length; i += 1) {
    i2390.push( i2391[i + 0] );
  }
  i2386.shaderDefinedKeywords = i2390
  var i2393 = i2387[4]
  var i2392 = []
  for(var i = 0; i < i2393.length; i += 1) {
    i2392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2393[i + 0]) );
  }
  i2386.passes = i2392
  var i2395 = i2387[5]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 1) {
    i2394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2395[i + 0]) );
  }
  i2386.usePasses = i2394
  var i2397 = i2387[6]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2397[i + 0]) );
  }
  i2386.defaultParameterValues = i2396
  request.r(i2387[7], i2387[8], 0, i2386, 'unityFallbackShader')
  i2386.readDepth = !!i2387[9]
  i2386.hasDepthOnlyPass = !!i2387[10]
  i2386.isCreatedByShaderGraph = !!i2387[11]
  i2386.disableBatching = !!i2387[12]
  i2386.compiled = !!i2387[13]
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2401 = data
  i2400.shaderName = i2401[0]
  i2400.errorMessage = i2401[1]
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2406 = root || new pc.UnityShaderPass()
  var i2407 = data
  i2406.id = i2407[0]
  i2406.subShaderIndex = i2407[1]
  i2406.name = i2407[2]
  i2406.passType = i2407[3]
  i2406.grabPassTextureName = i2407[4]
  i2406.usePass = !!i2407[5]
  i2406.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2407[6], i2406.zTest)
  i2406.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2407[7], i2406.zWrite)
  i2406.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2407[8], i2406.culling)
  i2406.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2407[9], i2406.blending)
  i2406.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2407[10], i2406.alphaBlending)
  i2406.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2407[11], i2406.colorWriteMask)
  i2406.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2407[12], i2406.offsetUnits)
  i2406.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2407[13], i2406.offsetFactor)
  i2406.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2407[14], i2406.stencilRef)
  i2406.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2407[15], i2406.stencilReadMask)
  i2406.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2407[16], i2406.stencilWriteMask)
  i2406.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2407[17], i2406.stencilOp)
  i2406.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2407[18], i2406.stencilOpFront)
  i2406.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2407[19], i2406.stencilOpBack)
  var i2409 = i2407[20]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 1) {
    i2408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2409[i + 0]) );
  }
  i2406.tags = i2408
  var i2411 = i2407[21]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 1) {
    i2410.push( i2411[i + 0] );
  }
  i2406.passDefinedKeywords = i2410
  var i2413 = i2407[22]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 1) {
    i2412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2413[i + 0]) );
  }
  i2406.passDefinedKeywordGroups = i2412
  var i2415 = i2407[23]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 1) {
    i2414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2415[i + 0]) );
  }
  i2406.variants = i2414
  var i2417 = i2407[24]
  var i2416 = []
  for(var i = 0; i < i2417.length; i += 1) {
    i2416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2417[i + 0]) );
  }
  i2406.excludedVariants = i2416
  i2406.hasDepthReader = !!i2407[25]
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2419 = data
  i2418.val = i2419[0]
  i2418.name = i2419[1]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2421 = data
  i2420.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2421[0], i2420.src)
  i2420.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2421[1], i2420.dst)
  i2420.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2421[2], i2420.op)
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2423 = data
  i2422.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2423[0], i2422.pass)
  i2422.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2423[1], i2422.fail)
  i2422.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2423[2], i2422.zFail)
  i2422.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2423[3], i2422.comp)
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2427 = data
  i2426.name = i2427[0]
  i2426.value = i2427[1]
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2431 = data
  var i2433 = i2431[0]
  var i2432 = []
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.push( i2433[i + 0] );
  }
  i2430.keywords = i2432
  i2430.hasDiscard = !!i2431[1]
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2437 = data
  i2436.passId = i2437[0]
  i2436.subShaderIndex = i2437[1]
  var i2439 = i2437[2]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 1) {
    i2438.push( i2439[i + 0] );
  }
  i2436.keywords = i2438
  i2436.vertexProgram = i2437[3]
  i2436.fragmentProgram = i2437[4]
  i2436.exportedForWebGl2 = !!i2437[5]
  i2436.readDepth = !!i2437[6]
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2443 = data
  request.r(i2443[0], i2443[1], 0, i2442, 'shader')
  i2442.pass = i2443[2]
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2447 = data
  i2446.name = i2447[0]
  i2446.type = i2447[1]
  i2446.value = new pc.Vec4( i2447[2], i2447[3], i2447[4], i2447[5] )
  i2446.textureValue = i2447[6]
  i2446.shaderPropertyFlag = i2447[7]
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2449 = data
  i2448.name = i2449[0]
  request.r(i2449[1], i2449[2], 0, i2448, 'texture')
  i2448.aabb = i2449[3]
  i2448.vertices = i2449[4]
  i2448.triangles = i2449[5]
  i2448.textureRect = UnityEngine.Rect.MinMaxRect(i2449[6], i2449[7], i2449[8], i2449[9])
  i2448.packedRect = UnityEngine.Rect.MinMaxRect(i2449[10], i2449[11], i2449[12], i2449[13])
  i2448.border = new pc.Vec4( i2449[14], i2449[15], i2449[16], i2449[17] )
  i2448.transparency = i2449[18]
  i2448.bounds = i2449[19]
  i2448.pixelsPerUnit = i2449[20]
  i2448.textureWidth = i2449[21]
  i2448.textureHeight = i2449[22]
  i2448.nativeSize = new pc.Vec2( i2449[23], i2449[24] )
  i2448.pivot = new pc.Vec2( i2449[25], i2449[26] )
  i2448.textureRectOffset = new pc.Vec2( i2449[27], i2449[28] )
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2451 = data
  i2450.name = i2451[0]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2453 = data
  i2452.name = i2453[0]
  i2452.wrapMode = i2453[1]
  i2452.isLooping = !!i2453[2]
  i2452.length = i2453[3]
  var i2455 = i2453[4]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2455[i + 0]) );
  }
  i2452.curves = i2454
  var i2457 = i2453[5]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2457[i + 0]) );
  }
  i2452.events = i2456
  i2452.halfPrecision = !!i2453[6]
  i2452._frameRate = i2453[7]
  i2452.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2453[8], i2452.localBounds)
  i2452.hasMuscleCurves = !!i2453[9]
  var i2459 = i2453[10]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 1) {
    i2458.push( i2459[i + 0] );
  }
  i2452.clipMuscleConstant = i2458
  i2452.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2453[11], i2452.clipBindingConstant)
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2463 = data
  i2462.path = i2463[0]
  i2462.hash = i2463[1]
  i2462.componentType = i2463[2]
  i2462.property = i2463[3]
  i2462.keys = i2463[4]
  var i2465 = i2463[5]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 1) {
    i2464.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2465[i + 0]) );
  }
  i2462.objectReferenceKeys = i2464
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2469 = data
  i2468.time = i2469[0]
  request.r(i2469[1], i2469[2], 0, i2468, 'value')
  return i2468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2473 = data
  i2472.functionName = i2473[0]
  i2472.floatParameter = i2473[1]
  i2472.intParameter = i2473[2]
  i2472.stringParameter = i2473[3]
  request.r(i2473[4], i2473[5], 0, i2472, 'objectReferenceParameter')
  i2472.time = i2473[6]
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2475 = data
  i2474.center = new pc.Vec3( i2475[0], i2475[1], i2475[2] )
  i2474.extends = new pc.Vec3( i2475[3], i2475[4], i2475[5] )
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2479 = data
  var i2481 = i2479[0]
  var i2480 = []
  for(var i = 0; i < i2481.length; i += 1) {
    i2480.push( i2481[i + 0] );
  }
  i2478.genericBindings = i2480
  var i2483 = i2479[1]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.push( i2483[i + 0] );
  }
  i2478.pptrCurveMapping = i2482
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2485 = data
  i2484.name = i2485[0]
  i2484.ascent = i2485[1]
  i2484.originalLineHeight = i2485[2]
  i2484.fontSize = i2485[3]
  var i2487 = i2485[4]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 1) {
    i2486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2487[i + 0]) );
  }
  i2484.characterInfo = i2486
  request.r(i2485[5], i2485[6], 0, i2484, 'texture')
  i2484.originalFontSize = i2485[7]
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2491 = data
  i2490.index = i2491[0]
  i2490.advance = i2491[1]
  i2490.bearing = i2491[2]
  i2490.glyphWidth = i2491[3]
  i2490.glyphHeight = i2491[4]
  i2490.minX = i2491[5]
  i2490.maxX = i2491[6]
  i2490.minY = i2491[7]
  i2490.maxY = i2491[8]
  i2490.uvBottomLeftX = i2491[9]
  i2490.uvBottomLeftY = i2491[10]
  i2490.uvBottomRightX = i2491[11]
  i2490.uvBottomRightY = i2491[12]
  i2490.uvTopLeftX = i2491[13]
  i2490.uvTopLeftY = i2491[14]
  i2490.uvTopRightX = i2491[15]
  i2490.uvTopRightY = i2491[16]
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2493 = data
  i2492.name = i2493[0]
  var i2495 = i2493[1]
  var i2494 = []
  for(var i = 0; i < i2495.length; i += 1) {
    i2494.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2495[i + 0]) );
  }
  i2492.layers = i2494
  var i2497 = i2493[2]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2497[i + 0]) );
  }
  i2492.parameters = i2496
  i2492.animationClips = i2493[3]
  i2492.avatarUnsupported = i2493[4]
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2501 = data
  i2500.name = i2501[0]
  i2500.defaultWeight = i2501[1]
  i2500.blendingMode = i2501[2]
  i2500.avatarMask = i2501[3]
  i2500.syncedLayerIndex = i2501[4]
  i2500.syncedLayerAffectsTiming = !!i2501[5]
  i2500.syncedLayers = i2501[6]
  i2500.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2501[7], i2500.stateMachine)
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2503 = data
  i2502.id = i2503[0]
  i2502.name = i2503[1]
  i2502.path = i2503[2]
  var i2505 = i2503[3]
  var i2504 = []
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2505[i + 0]) );
  }
  i2502.states = i2504
  var i2507 = i2503[4]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2507[i + 0]) );
  }
  i2502.machines = i2506
  var i2509 = i2503[5]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2509[i + 0]) );
  }
  i2502.entryStateTransitions = i2508
  var i2511 = i2503[6]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2511[i + 0]) );
  }
  i2502.exitStateTransitions = i2510
  var i2513 = i2503[7]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2513[i + 0]) );
  }
  i2502.anyStateTransitions = i2512
  i2502.defaultStateId = i2503[8]
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2517 = data
  i2516.id = i2517[0]
  i2516.name = i2517[1]
  i2516.cycleOffset = i2517[2]
  i2516.cycleOffsetParameter = i2517[3]
  i2516.cycleOffsetParameterActive = !!i2517[4]
  i2516.mirror = !!i2517[5]
  i2516.mirrorParameter = i2517[6]
  i2516.mirrorParameterActive = !!i2517[7]
  i2516.motionId = i2517[8]
  i2516.nameHash = i2517[9]
  i2516.fullPathHash = i2517[10]
  i2516.speed = i2517[11]
  i2516.speedParameter = i2517[12]
  i2516.speedParameterActive = !!i2517[13]
  i2516.tag = i2517[14]
  i2516.tagHash = i2517[15]
  i2516.writeDefaultValues = !!i2517[16]
  var i2519 = i2517[17]
  var i2518 = []
  for(var i = 0; i < i2519.length; i += 2) {
  request.r(i2519[i + 0], i2519[i + 1], 2, i2518, '')
  }
  i2516.behaviours = i2518
  var i2521 = i2517[18]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2521[i + 0]) );
  }
  i2516.transitions = i2520
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2527 = data
  i2526.fullPath = i2527[0]
  i2526.canTransitionToSelf = !!i2527[1]
  i2526.duration = i2527[2]
  i2526.exitTime = i2527[3]
  i2526.hasExitTime = !!i2527[4]
  i2526.hasFixedDuration = !!i2527[5]
  i2526.interruptionSource = i2527[6]
  i2526.offset = i2527[7]
  i2526.orderedInterruption = !!i2527[8]
  i2526.destinationStateId = i2527[9]
  i2526.isExit = !!i2527[10]
  i2526.mute = !!i2527[11]
  i2526.solo = !!i2527[12]
  var i2529 = i2527[13]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2529[i + 0]) );
  }
  i2526.conditions = i2528
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2535 = data
  i2534.destinationStateId = i2535[0]
  i2534.isExit = !!i2535[1]
  i2534.mute = !!i2535[2]
  i2534.solo = !!i2535[3]
  var i2537 = i2535[4]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2537[i + 0]) );
  }
  i2534.conditions = i2536
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2541 = data
  i2540.mode = i2541[0]
  i2540.parameter = i2541[1]
  i2540.threshold = i2541[2]
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2545 = data
  i2544.defaultBool = !!i2545[0]
  i2544.defaultFloat = i2545[1]
  i2544.defaultInt = i2545[2]
  i2544.name = i2545[3]
  i2544.nameHash = i2545[4]
  i2544.type = i2545[5]
  return i2544
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2546 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2547 = data
  i2546.useSafeMode = !!i2547[0]
  i2546.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2547[1], i2546.safeModeOptions)
  i2546.timeScale = i2547[2]
  i2546.unscaledTimeScale = i2547[3]
  i2546.useSmoothDeltaTime = !!i2547[4]
  i2546.maxSmoothUnscaledTime = i2547[5]
  i2546.rewindCallbackMode = i2547[6]
  i2546.showUnityEditorReport = !!i2547[7]
  i2546.logBehaviour = i2547[8]
  i2546.drawGizmos = !!i2547[9]
  i2546.defaultRecyclable = !!i2547[10]
  i2546.defaultAutoPlay = i2547[11]
  i2546.defaultUpdateType = i2547[12]
  i2546.defaultTimeScaleIndependent = !!i2547[13]
  i2546.defaultEaseType = i2547[14]
  i2546.defaultEaseOvershootOrAmplitude = i2547[15]
  i2546.defaultEasePeriod = i2547[16]
  i2546.defaultAutoKill = !!i2547[17]
  i2546.defaultLoopType = i2547[18]
  i2546.debugMode = !!i2547[19]
  i2546.debugStoreTargetId = !!i2547[20]
  i2546.showPreviewPanel = !!i2547[21]
  i2546.storeSettingsLocation = i2547[22]
  i2546.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2547[23], i2546.modules)
  i2546.createASMDEF = !!i2547[24]
  i2546.showPlayingTweens = !!i2547[25]
  i2546.showPausedTweens = !!i2547[26]
  return i2546
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2548 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2549 = data
  i2548.logBehaviour = i2549[0]
  i2548.nestedTweenFailureBehaviour = i2549[1]
  return i2548
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2550 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2551 = data
  i2550.showPanel = !!i2551[0]
  i2550.audioEnabled = !!i2551[1]
  i2550.physicsEnabled = !!i2551[2]
  i2550.physics2DEnabled = !!i2551[3]
  i2550.spriteEnabled = !!i2551[4]
  i2550.uiEnabled = !!i2551[5]
  i2550.textMeshProEnabled = !!i2551[6]
  i2550.tk2DEnabled = !!i2551[7]
  i2550.deAudioEnabled = !!i2551[8]
  i2550.deUnityExtendedEnabled = !!i2551[9]
  i2550.epoOutlineEnabled = !!i2551[10]
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2553 = data
  var i2555 = i2553[0]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 1) {
    i2554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2555[i + 0]) );
  }
  i2552.files = i2554
  i2552.componentToPrefabIds = i2553[1]
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2559 = data
  i2558.path = i2559[0]
  request.r(i2559[1], i2559[2], 0, i2558, 'unityObject')
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2561 = data
  var i2563 = i2561[0]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2563[i + 0]) );
  }
  i2560.scriptsExecutionOrder = i2562
  var i2565 = i2561[1]
  var i2564 = []
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2565[i + 0]) );
  }
  i2560.sortingLayers = i2564
  var i2567 = i2561[2]
  var i2566 = []
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2567[i + 0]) );
  }
  i2560.cullingLayers = i2566
  i2560.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2561[3], i2560.timeSettings)
  i2560.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2561[4], i2560.physicsSettings)
  i2560.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2561[5], i2560.physics2DSettings)
  i2560.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2561[6], i2560.qualitySettings)
  i2560.enableRealtimeShadows = !!i2561[7]
  i2560.enableAutoInstancing = !!i2561[8]
  i2560.enableStaticBatching = !!i2561[9]
  i2560.enableDynamicBatching = !!i2561[10]
  i2560.usePreservativeDynamicBatching = !!i2561[11]
  i2560.lightmapEncodingQuality = i2561[12]
  i2560.desiredColorSpace = i2561[13]
  var i2569 = i2561[14]
  var i2568 = []
  for(var i = 0; i < i2569.length; i += 1) {
    i2568.push( i2569[i + 0] );
  }
  i2560.allTags = i2568
  return i2560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2573 = data
  i2572.name = i2573[0]
  i2572.value = i2573[1]
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2577 = data
  i2576.id = i2577[0]
  i2576.name = i2577[1]
  i2576.value = i2577[2]
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2581 = data
  i2580.id = i2581[0]
  i2580.name = i2581[1]
  return i2580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2583 = data
  i2582.fixedDeltaTime = i2583[0]
  i2582.maximumDeltaTime = i2583[1]
  i2582.timeScale = i2583[2]
  i2582.maximumParticleTimestep = i2583[3]
  return i2582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2585 = data
  i2584.gravity = new pc.Vec3( i2585[0], i2585[1], i2585[2] )
  i2584.defaultSolverIterations = i2585[3]
  i2584.bounceThreshold = i2585[4]
  i2584.autoSyncTransforms = !!i2585[5]
  i2584.autoSimulation = !!i2585[6]
  var i2587 = i2585[7]
  var i2586 = []
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2587[i + 0]) );
  }
  i2584.collisionMatrix = i2586
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2591 = data
  i2590.enabled = !!i2591[0]
  i2590.layerId = i2591[1]
  i2590.otherLayerId = i2591[2]
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2593 = data
  request.r(i2593[0], i2593[1], 0, i2592, 'material')
  i2592.gravity = new pc.Vec2( i2593[2], i2593[3] )
  i2592.positionIterations = i2593[4]
  i2592.velocityIterations = i2593[5]
  i2592.velocityThreshold = i2593[6]
  i2592.maxLinearCorrection = i2593[7]
  i2592.maxAngularCorrection = i2593[8]
  i2592.maxTranslationSpeed = i2593[9]
  i2592.maxRotationSpeed = i2593[10]
  i2592.baumgarteScale = i2593[11]
  i2592.baumgarteTOIScale = i2593[12]
  i2592.timeToSleep = i2593[13]
  i2592.linearSleepTolerance = i2593[14]
  i2592.angularSleepTolerance = i2593[15]
  i2592.defaultContactOffset = i2593[16]
  i2592.autoSimulation = !!i2593[17]
  i2592.queriesHitTriggers = !!i2593[18]
  i2592.queriesStartInColliders = !!i2593[19]
  i2592.callbacksOnDisable = !!i2593[20]
  i2592.reuseCollisionCallbacks = !!i2593[21]
  i2592.autoSyncTransforms = !!i2593[22]
  var i2595 = i2593[23]
  var i2594 = []
  for(var i = 0; i < i2595.length; i += 1) {
    i2594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2595[i + 0]) );
  }
  i2592.collisionMatrix = i2594
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2599 = data
  i2598.enabled = !!i2599[0]
  i2598.layerId = i2599[1]
  i2598.otherLayerId = i2599[2]
  return i2598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2601 = data
  var i2603 = i2601[0]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2603[i + 0]) );
  }
  i2600.qualityLevels = i2602
  var i2605 = i2601[1]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( i2605[i + 0] );
  }
  i2600.names = i2604
  i2600.shadows = i2601[2]
  i2600.anisotropicFiltering = i2601[3]
  i2600.antiAliasing = i2601[4]
  i2600.lodBias = i2601[5]
  i2600.shadowCascades = i2601[6]
  i2600.shadowDistance = i2601[7]
  i2600.shadowmaskMode = i2601[8]
  i2600.shadowProjection = i2601[9]
  i2600.shadowResolution = i2601[10]
  i2600.softParticles = !!i2601[11]
  i2600.softVegetation = !!i2601[12]
  i2600.activeColorSpace = i2601[13]
  i2600.desiredColorSpace = i2601[14]
  i2600.masterTextureLimit = i2601[15]
  i2600.maxQueuedFrames = i2601[16]
  i2600.particleRaycastBudget = i2601[17]
  i2600.pixelLightCount = i2601[18]
  i2600.realtimeReflectionProbes = !!i2601[19]
  i2600.shadowCascade2Split = i2601[20]
  i2600.shadowCascade4Split = new pc.Vec3( i2601[21], i2601[22], i2601[23] )
  i2600.streamingMipmapsActive = !!i2601[24]
  i2600.vSyncCount = i2601[25]
  i2600.asyncUploadBufferSize = i2601[26]
  i2600.asyncUploadTimeSlice = i2601[27]
  i2600.billboardsFaceCameraPosition = !!i2601[28]
  i2600.shadowNearPlaneOffset = i2601[29]
  i2600.streamingMipmapsMemoryBudget = i2601[30]
  i2600.maximumLODLevel = i2601[31]
  i2600.streamingMipmapsAddAllCameras = !!i2601[32]
  i2600.streamingMipmapsMaxLevelReduction = i2601[33]
  i2600.streamingMipmapsRenderersPerFrame = i2601[34]
  i2600.resolutionScalingFixedDPIFactor = i2601[35]
  i2600.streamingMipmapsMaxFileIORequests = i2601[36]
  i2600.currentQualityLevel = i2601[37]
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i2608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i2609 = data
  var i2611 = i2609[0]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i2611[i + 0]) );
  }
  i2608.groups = i2610
  var i2613 = i2609[1]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i2613[i + 0]) );
  }
  i2608.snapshots = i2612
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i2617 = data
  i2616.id = i2617[0]
  i2616.childGroupIds = i2617[1]
  i2616.name = i2617[2]
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i2620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i2621 = data
  i2620.id = i2621[0]
  var i2623 = i2621[1]
  var i2622 = []
  for(var i = 0; i < i2623.length; i += 1) {
    i2622.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i2623[i + 0]) );
  }
  i2620.parameters = i2622
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i2626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i2627 = data
  i2626.name = i2627[0]
  i2626.value = i2627[1]
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2631 = data
  i2630.weight = i2631[0]
  i2630.vertices = i2631[1]
  i2630.normals = i2631[2]
  i2630.tangents = i2631[3]
  return i2630
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[82],"83":[9],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[62],"93":[62],"94":[62],"95":[62],"96":[62],"97":[62],"98":[62],"99":[62],"100":[62],"101":[62],"102":[62],"103":[62],"104":[62],"105":[9],"106":[58],"107":[108],"109":[108],"8":[7],"110":[56],"67":[29],"111":[25],"112":[29],"113":[114],"115":[114],"116":[14],"32":[25],"117":[29],"30":[29],"118":[7],"119":[7],"12":[8],"16":[15,7],"120":[7],"11":[8],"121":[7],"122":[7],"123":[7],"124":[7],"125":[7],"126":[7],"127":[7],"128":[7],"129":[7],"130":[15,7],"131":[7],"132":[7],"133":[7],"134":[7],"18":[15,7],"135":[7],"136":[46],"137":[46],"47":[46],"138":[46],"139":[9],"140":[9]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","DG.Tweening.DOTweenAnimation","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Button","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MenuLevel","UnityEngine.GameObject","UnityEngine.BoxCollider2D","UnityEngine.AudioClip","IntroLevelAnim","Level_PoseController","UnityEngine.SpriteRenderer","UnityEngine.U2D.Animation.SpriteSkin","BD_AnimationHelper","SpriteButton","PlayableRouter","DressChangeIntro","MenuDraggable","UnityEngine.AudioListener","CameraController","MusicSource","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","UI_Manager","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Level1_Cloth_Playable_Step1to4","ToastManager","UnityEngine.CanvasGroup","BasicDrag","BD_CameraFollow","Level1_SurfController","RotaryTimerKnob","PlayableCTA","UnityEngine.LineRenderer","TextureOffsetScroller","UnityEngine.MeshRenderer","UnityEngine.SpriteMask","_2dxFX_Wave","BD_Clamp","UnityEngine.Rigidbody2D","PlaceItem","ActionOnTap","BD_Action","UnityEngine.CircleCollider2D","BD_Fold","BD_Progress","UnityEngine.MeshFilter","StaticFixedPipe","BD_SpriteChange","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "14.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "3Sept2026_Lvl1_2_Step_1to2";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1773";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4203";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "HMBL.";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.hmbl.perfect.makeover.fashion.asmr";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "c2d6a8a5-8282-41b4-a55e-26dc7b708db3";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

