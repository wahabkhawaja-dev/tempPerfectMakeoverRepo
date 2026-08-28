var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1944 = root || request.c( 'UnityEngine.JointSpring' )
  var i1945 = data
  i1944.spring = i1945[0]
  i1944.damper = i1945[1]
  i1944.targetPosition = i1945[2]
  return i1944
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1946 = root || request.c( 'UnityEngine.JointMotor' )
  var i1947 = data
  i1946.m_TargetVelocity = i1947[0]
  i1946.m_Force = i1947[1]
  i1946.m_FreeSpin = i1947[2]
  return i1946
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1948 = root || request.c( 'UnityEngine.JointLimits' )
  var i1949 = data
  i1948.m_Min = i1949[0]
  i1948.m_Max = i1949[1]
  i1948.m_Bounciness = i1949[2]
  i1948.m_BounceMinVelocity = i1949[3]
  i1948.m_ContactDistance = i1949[4]
  i1948.minBounce = i1949[5]
  i1948.maxBounce = i1949[6]
  return i1948
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1950 = root || request.c( 'UnityEngine.JointDrive' )
  var i1951 = data
  i1950.m_PositionSpring = i1951[0]
  i1950.m_PositionDamper = i1951[1]
  i1950.m_MaximumForce = i1951[2]
  i1950.m_UseAcceleration = i1951[3]
  return i1950
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1952 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1953 = data
  i1952.m_Spring = i1953[0]
  i1952.m_Damper = i1953[1]
  return i1952
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1954 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1955 = data
  i1954.m_Limit = i1955[0]
  i1954.m_Bounciness = i1955[1]
  i1954.m_ContactDistance = i1955[2]
  return i1954
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1956 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1957 = data
  i1956.m_ExtremumSlip = i1957[0]
  i1956.m_ExtremumValue = i1957[1]
  i1956.m_AsymptoteSlip = i1957[2]
  i1956.m_AsymptoteValue = i1957[3]
  i1956.m_Stiffness = i1957[4]
  return i1956
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1958 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1959 = data
  i1958.m_LowerAngle = i1959[0]
  i1958.m_UpperAngle = i1959[1]
  return i1958
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1960 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1961 = data
  i1960.m_MotorSpeed = i1961[0]
  i1960.m_MaximumMotorTorque = i1961[1]
  return i1960
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1962 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1963 = data
  i1962.m_DampingRatio = i1963[0]
  i1962.m_Frequency = i1963[1]
  i1962.m_Angle = i1963[2]
  return i1962
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1964 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1965 = data
  i1964.m_LowerTranslation = i1965[0]
  i1964.m_UpperTranslation = i1965[1]
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1966 = root || new pc.UnityMaterial()
  var i1967 = data
  i1966.name = i1967[0]
  request.r(i1967[1], i1967[2], 0, i1966, 'shader')
  i1966.renderQueue = i1967[3]
  i1966.enableInstancing = !!i1967[4]
  var i1969 = i1967[5]
  var i1968 = []
  for(var i = 0; i < i1969.length; i += 1) {
    i1968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1969[i + 0]) );
  }
  i1966.floatParameters = i1968
  var i1971 = i1967[6]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1971[i + 0]) );
  }
  i1966.colorParameters = i1970
  var i1973 = i1967[7]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 1) {
    i1972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1973[i + 0]) );
  }
  i1966.vectorParameters = i1972
  var i1975 = i1967[8]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1975[i + 0]) );
  }
  i1966.textureParameters = i1974
  var i1977 = i1967[9]
  var i1976 = []
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1977[i + 0]) );
  }
  i1966.materialFlags = i1976
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1981 = data
  i1980.name = i1981[0]
  i1980.value = i1981[1]
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1985 = data
  i1984.name = i1985[0]
  i1984.value = new pc.Color(i1985[1], i1985[2], i1985[3], i1985[4])
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1989 = data
  i1988.name = i1989[0]
  i1988.value = new pc.Vec4( i1989[1], i1989[2], i1989[3], i1989[4] )
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1993 = data
  i1992.name = i1993[0]
  request.r(i1993[1], i1993[2], 0, i1992, 'value')
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1997 = data
  i1996.name = i1997[0]
  i1996.enabled = !!i1997[1]
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1999 = data
  i1998.name = i1999[0]
  i1998.width = i1999[1]
  i1998.height = i1999[2]
  i1998.mipmapCount = i1999[3]
  i1998.anisoLevel = i1999[4]
  i1998.filterMode = i1999[5]
  i1998.hdr = !!i1999[6]
  i1998.format = i1999[7]
  i1998.wrapMode = i1999[8]
  i1998.alphaIsTransparency = !!i1999[9]
  i1998.alphaSource = i1999[10]
  i1998.graphicsFormat = i1999[11]
  i1998.sRGBTexture = !!i1999[12]
  i1998.desiredColorSpace = i1999[13]
  i1998.wrapU = i1999[14]
  i1998.wrapV = i1999[15]
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2001 = data
  i2000.name = i2001[0]
  i2000.halfPrecision = !!i2001[1]
  i2000.useSimplification = !!i2001[2]
  i2000.useUInt32IndexFormat = !!i2001[3]
  i2000.vertexCount = i2001[4]
  i2000.aabb = i2001[5]
  var i2003 = i2001[6]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( !!i2003[i + 0] );
  }
  i2000.streams = i2002
  i2000.vertices = i2001[7]
  var i2005 = i2001[8]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2005[i + 0]) );
  }
  i2000.subMeshes = i2004
  var i2007 = i2001[9]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 16) {
    i2006.push( new pc.Mat4().setData(i2007[i + 0], i2007[i + 1], i2007[i + 2], i2007[i + 3],  i2007[i + 4], i2007[i + 5], i2007[i + 6], i2007[i + 7],  i2007[i + 8], i2007[i + 9], i2007[i + 10], i2007[i + 11],  i2007[i + 12], i2007[i + 13], i2007[i + 14], i2007[i + 15]) );
  }
  i2000.bindposes = i2006
  var i2009 = i2001[10]
  var i2008 = []
  for(var i = 0; i < i2009.length; i += 1) {
    i2008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2009[i + 0]) );
  }
  i2000.blendShapes = i2008
  return i2000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2015 = data
  i2014.triangles = i2015[0]
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2021 = data
  i2020.name = i2021[0]
  var i2023 = i2021[1]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2023[i + 0]) );
  }
  i2020.frames = i2022
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2025 = data
  i2024.position = new pc.Vec3( i2025[0], i2025[1], i2025[2] )
  i2024.scale = new pc.Vec3( i2025[3], i2025[4], i2025[5] )
  i2024.rotation = new pc.Quat(i2025[6], i2025[7], i2025[8], i2025[9])
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2027 = data
  i2026.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2027[0], i2026.main)
  i2026.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2027[1], i2026.colorBySpeed)
  i2026.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2027[2], i2026.colorOverLifetime)
  i2026.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2027[3], i2026.emission)
  i2026.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2027[4], i2026.rotationBySpeed)
  i2026.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2027[5], i2026.rotationOverLifetime)
  i2026.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2027[6], i2026.shape)
  i2026.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2027[7], i2026.sizeBySpeed)
  i2026.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2027[8], i2026.sizeOverLifetime)
  i2026.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2027[9], i2026.textureSheetAnimation)
  i2026.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2027[10], i2026.velocityOverLifetime)
  i2026.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2027[11], i2026.noise)
  i2026.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2027[12], i2026.inheritVelocity)
  i2026.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2027[13], i2026.forceOverLifetime)
  i2026.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2027[14], i2026.limitVelocityOverLifetime)
  i2026.useAutoRandomSeed = !!i2027[15]
  i2026.randomSeed = i2027[16]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2028 = root || new pc.ParticleSystemMain()
  var i2029 = data
  i2028.duration = i2029[0]
  i2028.loop = !!i2029[1]
  i2028.prewarm = !!i2029[2]
  i2028.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[3], i2028.startDelay)
  i2028.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[4], i2028.startLifetime)
  i2028.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[5], i2028.startSpeed)
  i2028.startSize3D = !!i2029[6]
  i2028.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[7], i2028.startSizeX)
  i2028.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[8], i2028.startSizeY)
  i2028.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[9], i2028.startSizeZ)
  i2028.startRotation3D = !!i2029[10]
  i2028.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[11], i2028.startRotationX)
  i2028.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[12], i2028.startRotationY)
  i2028.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[13], i2028.startRotationZ)
  i2028.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2029[14], i2028.startColor)
  i2028.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2029[15], i2028.gravityModifier)
  i2028.simulationSpace = i2029[16]
  request.r(i2029[17], i2029[18], 0, i2028, 'customSimulationSpace')
  i2028.simulationSpeed = i2029[19]
  i2028.useUnscaledTime = !!i2029[20]
  i2028.scalingMode = i2029[21]
  i2028.playOnAwake = !!i2029[22]
  i2028.maxParticles = i2029[23]
  i2028.emitterVelocityMode = i2029[24]
  i2028.stopAction = i2029[25]
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2030 = root || new pc.MinMaxCurve()
  var i2031 = data
  i2030.mode = i2031[0]
  i2030.curveMin = new pc.AnimationCurve( { keys_flow: i2031[1] } )
  i2030.curveMax = new pc.AnimationCurve( { keys_flow: i2031[2] } )
  i2030.curveMultiplier = i2031[3]
  i2030.constantMin = i2031[4]
  i2030.constantMax = i2031[5]
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2032 = root || new pc.MinMaxGradient()
  var i2033 = data
  i2032.mode = i2033[0]
  i2032.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2033[1], i2032.gradientMin)
  i2032.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2033[2], i2032.gradientMax)
  i2032.colorMin = new pc.Color(i2033[3], i2033[4], i2033[5], i2033[6])
  i2032.colorMax = new pc.Color(i2033[7], i2033[8], i2033[9], i2033[10])
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2035 = data
  i2034.mode = i2035[0]
  var i2037 = i2035[1]
  var i2036 = []
  for(var i = 0; i < i2037.length; i += 1) {
    i2036.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2037[i + 0]) );
  }
  i2034.colorKeys = i2036
  var i2039 = i2035[2]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 1) {
    i2038.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2039[i + 0]) );
  }
  i2034.alphaKeys = i2038
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2040 = root || new pc.ParticleSystemColorBySpeed()
  var i2041 = data
  i2040.enabled = !!i2041[0]
  i2040.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2041[1], i2040.color)
  i2040.range = new pc.Vec2( i2041[2], i2041[3] )
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2045 = data
  i2044.color = new pc.Color(i2045[0], i2045[1], i2045[2], i2045[3])
  i2044.time = i2045[4]
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2049 = data
  i2048.alpha = i2049[0]
  i2048.time = i2049[1]
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2050 = root || new pc.ParticleSystemColorOverLifetime()
  var i2051 = data
  i2050.enabled = !!i2051[0]
  i2050.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2051[1], i2050.color)
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2052 = root || new pc.ParticleSystemEmitter()
  var i2053 = data
  i2052.enabled = !!i2053[0]
  i2052.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2053[1], i2052.rateOverTime)
  i2052.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2053[2], i2052.rateOverDistance)
  var i2055 = i2053[3]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2055[i + 0]) );
  }
  i2052.bursts = i2054
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2058 = root || new pc.ParticleSystemBurst()
  var i2059 = data
  i2058.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[0], i2058.count)
  i2058.cycleCount = i2059[1]
  i2058.minCount = i2059[2]
  i2058.maxCount = i2059[3]
  i2058.repeatInterval = i2059[4]
  i2058.time = i2059[5]
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2060 = root || new pc.ParticleSystemRotationBySpeed()
  var i2061 = data
  i2060.enabled = !!i2061[0]
  i2060.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2061[1], i2060.x)
  i2060.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2061[2], i2060.y)
  i2060.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2061[3], i2060.z)
  i2060.separateAxes = !!i2061[4]
  i2060.range = new pc.Vec2( i2061[5], i2061[6] )
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2062 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2063 = data
  i2062.enabled = !!i2063[0]
  i2062.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2063[1], i2062.x)
  i2062.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2063[2], i2062.y)
  i2062.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2063[3], i2062.z)
  i2062.separateAxes = !!i2063[4]
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2064 = root || new pc.ParticleSystemShape()
  var i2065 = data
  i2064.enabled = !!i2065[0]
  i2064.shapeType = i2065[1]
  i2064.randomDirectionAmount = i2065[2]
  i2064.sphericalDirectionAmount = i2065[3]
  i2064.randomPositionAmount = i2065[4]
  i2064.alignToDirection = !!i2065[5]
  i2064.radius = i2065[6]
  i2064.radiusMode = i2065[7]
  i2064.radiusSpread = i2065[8]
  i2064.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2065[9], i2064.radiusSpeed)
  i2064.radiusThickness = i2065[10]
  i2064.angle = i2065[11]
  i2064.length = i2065[12]
  i2064.boxThickness = new pc.Vec3( i2065[13], i2065[14], i2065[15] )
  i2064.meshShapeType = i2065[16]
  request.r(i2065[17], i2065[18], 0, i2064, 'mesh')
  request.r(i2065[19], i2065[20], 0, i2064, 'meshRenderer')
  request.r(i2065[21], i2065[22], 0, i2064, 'skinnedMeshRenderer')
  i2064.useMeshMaterialIndex = !!i2065[23]
  i2064.meshMaterialIndex = i2065[24]
  i2064.useMeshColors = !!i2065[25]
  i2064.normalOffset = i2065[26]
  i2064.arc = i2065[27]
  i2064.arcMode = i2065[28]
  i2064.arcSpread = i2065[29]
  i2064.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2065[30], i2064.arcSpeed)
  i2064.donutRadius = i2065[31]
  i2064.position = new pc.Vec3( i2065[32], i2065[33], i2065[34] )
  i2064.rotation = new pc.Vec3( i2065[35], i2065[36], i2065[37] )
  i2064.scale = new pc.Vec3( i2065[38], i2065[39], i2065[40] )
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2066 = root || new pc.ParticleSystemSizeBySpeed()
  var i2067 = data
  i2066.enabled = !!i2067[0]
  i2066.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2067[1], i2066.x)
  i2066.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2067[2], i2066.y)
  i2066.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2067[3], i2066.z)
  i2066.separateAxes = !!i2067[4]
  i2066.range = new pc.Vec2( i2067[5], i2067[6] )
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2068 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2069 = data
  i2068.enabled = !!i2069[0]
  i2068.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2069[1], i2068.x)
  i2068.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2069[2], i2068.y)
  i2068.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2069[3], i2068.z)
  i2068.separateAxes = !!i2069[4]
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2070 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2071 = data
  i2070.enabled = !!i2071[0]
  i2070.mode = i2071[1]
  i2070.animation = i2071[2]
  i2070.numTilesX = i2071[3]
  i2070.numTilesY = i2071[4]
  i2070.useRandomRow = !!i2071[5]
  i2070.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2071[6], i2070.frameOverTime)
  i2070.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2071[7], i2070.startFrame)
  i2070.cycleCount = i2071[8]
  i2070.rowIndex = i2071[9]
  i2070.flipU = i2071[10]
  i2070.flipV = i2071[11]
  i2070.spriteCount = i2071[12]
  var i2073 = i2071[13]
  var i2072 = []
  for(var i = 0; i < i2073.length; i += 2) {
  request.r(i2073[i + 0], i2073[i + 1], 2, i2072, '')
  }
  i2070.sprites = i2072
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2076 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2077 = data
  i2076.enabled = !!i2077[0]
  i2076.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[1], i2076.x)
  i2076.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[2], i2076.y)
  i2076.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[3], i2076.z)
  i2076.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[4], i2076.radial)
  i2076.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[5], i2076.speedModifier)
  i2076.space = i2077[6]
  i2076.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[7], i2076.orbitalX)
  i2076.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[8], i2076.orbitalY)
  i2076.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[9], i2076.orbitalZ)
  i2076.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[10], i2076.orbitalOffsetX)
  i2076.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[11], i2076.orbitalOffsetY)
  i2076.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[12], i2076.orbitalOffsetZ)
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2078 = root || new pc.ParticleSystemNoise()
  var i2079 = data
  i2078.enabled = !!i2079[0]
  i2078.separateAxes = !!i2079[1]
  i2078.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[2], i2078.strengthX)
  i2078.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[3], i2078.strengthY)
  i2078.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[4], i2078.strengthZ)
  i2078.frequency = i2079[5]
  i2078.damping = !!i2079[6]
  i2078.octaveCount = i2079[7]
  i2078.octaveMultiplier = i2079[8]
  i2078.octaveScale = i2079[9]
  i2078.quality = i2079[10]
  i2078.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[11], i2078.scrollSpeed)
  i2078.scrollSpeedMultiplier = i2079[12]
  i2078.remapEnabled = !!i2079[13]
  i2078.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[14], i2078.remapX)
  i2078.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[15], i2078.remapY)
  i2078.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[16], i2078.remapZ)
  i2078.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[17], i2078.positionAmount)
  i2078.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[18], i2078.rotationAmount)
  i2078.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[19], i2078.sizeAmount)
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2080 = root || new pc.ParticleSystemInheritVelocity()
  var i2081 = data
  i2080.enabled = !!i2081[0]
  i2080.mode = i2081[1]
  i2080.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2081[2], i2080.curve)
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2082 = root || new pc.ParticleSystemForceOverLifetime()
  var i2083 = data
  i2082.enabled = !!i2083[0]
  i2082.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[1], i2082.x)
  i2082.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[2], i2082.y)
  i2082.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[3], i2082.z)
  i2082.space = i2083[4]
  i2082.randomized = !!i2083[5]
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2084 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2085 = data
  i2084.enabled = !!i2085[0]
  i2084.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[1], i2084.limit)
  i2084.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[2], i2084.limitX)
  i2084.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[3], i2084.limitY)
  i2084.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[4], i2084.limitZ)
  i2084.dampen = i2085[5]
  i2084.separateAxes = !!i2085[6]
  i2084.space = i2085[7]
  i2084.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[8], i2084.drag)
  i2084.multiplyDragByParticleSize = !!i2085[9]
  i2084.multiplyDragByParticleVelocity = !!i2085[10]
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2087 = data
  request.r(i2087[0], i2087[1], 0, i2086, 'mesh')
  i2086.meshCount = i2087[2]
  i2086.activeVertexStreamsCount = i2087[3]
  i2086.alignment = i2087[4]
  i2086.renderMode = i2087[5]
  i2086.sortMode = i2087[6]
  i2086.lengthScale = i2087[7]
  i2086.velocityScale = i2087[8]
  i2086.cameraVelocityScale = i2087[9]
  i2086.normalDirection = i2087[10]
  i2086.sortingFudge = i2087[11]
  i2086.minParticleSize = i2087[12]
  i2086.maxParticleSize = i2087[13]
  i2086.pivot = new pc.Vec3( i2087[14], i2087[15], i2087[16] )
  request.r(i2087[17], i2087[18], 0, i2086, 'trailMaterial')
  i2086.applyActiveColorSpace = !!i2087[19]
  i2086.enabled = !!i2087[20]
  request.r(i2087[21], i2087[22], 0, i2086, 'sharedMaterial')
  var i2089 = i2087[23]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 2) {
  request.r(i2089[i + 0], i2089[i + 1], 2, i2088, '')
  }
  i2086.sharedMaterials = i2088
  i2086.receiveShadows = !!i2087[24]
  i2086.shadowCastingMode = i2087[25]
  i2086.sortingLayerID = i2087[26]
  i2086.sortingOrder = i2087[27]
  i2086.lightmapIndex = i2087[28]
  i2086.lightmapSceneIndex = i2087[29]
  i2086.lightmapScaleOffset = new pc.Vec4( i2087[30], i2087[31], i2087[32], i2087[33] )
  i2086.lightProbeUsage = i2087[34]
  i2086.reflectionProbeUsage = i2087[35]
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2093 = data
  i2092.name = i2093[0]
  i2092.tagId = i2093[1]
  i2092.enabled = !!i2093[2]
  i2092.isStatic = !!i2093[3]
  i2092.layer = i2093[4]
  return i2092
}

Deserializers["Level3_Crown_Playable"] = function (request, data, root) {
  var i2094 = root || request.c( 'Level3_Crown_Playable' )
  var i2095 = data
  i2094.MainZoom = request.d('ZoomPos', i2095[0], i2094.MainZoom)
  request.r(i2095[1], i2095[2], 0, i2094, 'View1')
  request.r(i2095[3], i2095[4], 0, i2094, 'View2')
  i2094.ZoomStep1 = request.d('ZoomPos', i2095[5], i2094.ZoomStep1)
  request.r(i2095[6], i2095[7], 0, i2094, 'ToolStep1')
  request.r(i2095[8], i2095[9], 0, i2094, 'ToolStep1CameraFollow')
  request.r(i2095[10], i2095[11], 0, i2094, 'Step1Col')
  request.r(i2095[12], i2095[13], 0, i2094, 'DustSR_1')
  i2094.ZoomStep2 = request.d('ZoomPos', i2095[14], i2094.ZoomStep2)
  request.r(i2095[15], i2095[16], 0, i2094, 'ToolStep2')
  request.r(i2095[17], i2095[18], 0, i2094, 'ToolStep2CameraFollow')
  var i2097 = i2095[19]
  var i2096 = []
  for(var i = 0; i < i2097.length; i += 2) {
  request.r(i2097[i + 0], i2097[i + 1], 2, i2096, '')
  }
  i2094.SRsToFadeOut_2 = i2096
  request.r(i2095[20], i2095[21], 0, i2094, 'SpraySR_2')
  i2094.ZoomStep3 = request.d('ZoomPos', i2095[22], i2094.ZoomStep3)
  request.r(i2095[23], i2095[24], 0, i2094, 'ToolStep3')
  request.r(i2095[25], i2095[26], 0, i2094, 'ToolStep3CameraFollow')
  request.r(i2095[27], i2095[28], 0, i2094, 'Step3Col')
  request.r(i2095[29], i2095[30], 0, i2094, 'Mix')
  request.r(i2095[31], i2095[32], 0, i2094, 'MixE')
  i2094.levelName = i2095[33]
  i2094.levelReward = i2095[34]
  request.r(i2095[35], i2095[36], 0, i2094, 'LevelIcon')
  request.r(i2095[37], i2095[38], 0, i2094, 'Level_BG')
  var i2099 = i2095[39]
  var i2098 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2099.length; i += 2) {
  request.r(i2099[i + 0], i2099[i + 1], 1, i2098, '')
  }
  i2094.ToolIcons = i2098
  var i2101 = i2095[40]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 2) {
  request.r(i2101[i + 0], i2101[i + 1], 2, i2100, '')
  }
  i2094.AllDrags = i2100
  var i2103 = i2095[41]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 2) {
  request.r(i2103[i + 0], i2103[i + 1], 2, i2102, '')
  }
  i2094.AllSources = i2102
  var i2105 = i2095[42]
  var i2104 = []
  for(var i = 0; i < i2105.length; i += 2) {
  request.r(i2105[i + 0], i2105[i + 1], 2, i2104, '')
  }
  i2094.AllScratches = i2104
  i2094.stepsDone = i2095[43]
  i2094.levelNo = i2095[44]
  i2094.partNo = i2095[45]
  return i2094
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i2106 = root || request.c( 'ZoomPos' )
  var i2107 = data
  i2106.CameraPos = new pc.Vec3( i2107[0], i2107[1], i2107[2] )
  i2106.CameraFOV = i2107[3]
  return i2106
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i2118 = root || request.c( 'PlayableCTA' )
  var i2119 = data
  i2118.trigger = i2119[0]
  i2118.afterSeconds = i2119[1]
  i2118.afterTaps = i2119[2]
  request.r(i2119[3], i2119[4], 0, i2118, 'scratchProgress')
  i2118.scratchIndex = i2119[5]
  i2118.progressThreshold = i2119[6]
  request.r(i2119[7], i2119[8], 0, i2118, 'watchedTool')
  i2118.blockInputOnFire = !!i2119[9]
  i2118.refireOnEveryTap = !!i2119[10]
  i2118.refireDelay = i2119[11]
  i2118.showEndCard = !!i2119[12]
  request.r(i2119[13], i2119[14], 0, i2118, 'endCard')
  i2118.showEndCardOnProgressTrigger = !!i2119[15]
  i2118.showEndCardOnToolAppearTrigger = !!i2119[16]
  i2118.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i2119[17], i2118.onCtaFired)
  i2118.logWhenFired = !!i2119[18]
  return i2118
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2120 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2121 = data
  i2120.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2121[0], i2120.m_PersistentCalls)
  return i2120
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2122 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2123 = data
  var i2125 = i2123[0]
  var i2124 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.add(request.d('UnityEngine.Events.PersistentCall', i2125[i + 0]));
  }
  i2122.m_Calls = i2124
  return i2122
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2128 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2129 = data
  request.r(i2129[0], i2129[1], 0, i2128, 'm_Target')
  i2128.m_TargetAssemblyTypeName = i2129[2]
  i2128.m_MethodName = i2129[3]
  i2128.m_Mode = i2129[4]
  i2128.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2129[5], i2128.m_Arguments)
  i2128.m_CallState = i2129[6]
  return i2128
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i2130 = root || request.c( 'PlayableFadeCoverSettings' )
  var i2131 = data
  i2130.revealDelay = i2131[0]
  i2130.revealDuration = i2131[1]
  return i2130
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i2132 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i2133 = data
  request.r(i2133[0], i2133[1], 0, i2132, 'MainCamera')
  i2132.RenderType = i2133[2]
  request.r(i2133[3], i2133[4], 0, i2132, 'ScratchSurfaceSprite')
  i2132.ScratchSurfaceSpriteHasAlpha = !!i2133[5]
  i2132.MaskProgressCutOffValue = i2133[6]
  request.r(i2133[7], i2133[8], 0, i2132, 'EraseTexture')
  i2132.EraseTextureScale = new pc.Vec2( i2133[9], i2133[10] )
  i2132.InputEnabled = !!i2133[11]
  request.r(i2133[12], i2133[13], 0, i2132, 'Card')
  i2132.Mode = i2133[14]
  request.r(i2133[15], i2133[16], 0, i2132, 'Progress')
  request.r(i2133[17], i2133[18], 0, i2132, 'MeshCard')
  request.r(i2133[19], i2133[20], 0, i2132, 'SpriteCard')
  request.r(i2133[21], i2133[22], 0, i2132, 'ImageCard')
  request.r(i2133[23], i2133[24], 0, i2132, 'MaskShader')
  request.r(i2133[25], i2133[26], 0, i2132, 'BrushShader')
  request.r(i2133[27], i2133[28], 0, i2132, 'MaskProgressShader')
  request.r(i2133[29], i2133[30], 0, i2132, 'MaskProgressCutOffShader')
  return i2132
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i2134 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i2135 = data
  request.r(i2135[0], i2135[1], 0, i2134, 'MainCamera')
  request.r(i2135[2], i2135[3], 0, i2134, 'Surface')
  i2134.RenderTextureQuality = i2135[4]
  request.r(i2135[5], i2135[6], 0, i2134, 'Eraser')
  request.r(i2135[7], i2135[8], 0, i2134, 'Progress')
  request.r(i2135[9], i2135[10], 0, i2134, 'ScratchSurface')
  request.r(i2135[11], i2135[12], 0, i2134, 'RenderTexture')
  i2134.BrushScale = new pc.Vec2( i2135[13], i2135[14] )
  request.r(i2135[15], i2135[16], 0, i2134, 'ToolTip')
  i2134.InputEnabled = !!i2135[17]
  i2134.IsScratching = !!i2135[18]
  i2134.useChangingScale = !!i2135[19]
  i2134.useGivenBrushScale = !!i2135[20]
  i2134.canSpreadMask = !!i2135[21]
  i2134.shouldPaintHoles = !!i2135[22]
  i2134.canRotateTip = !!i2135[23]
  i2134._mode = i2135[24]
  return i2134
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i2136 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i2137 = data
  request.r(i2137[0], i2137[1], 0, i2136, 'Card')
  i2136.currentProgress = i2137[2]
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2139 = data
  i2138.color = new pc.Color(i2139[0], i2139[1], i2139[2], i2139[3])
  request.r(i2139[4], i2139[5], 0, i2138, 'sprite')
  i2138.flipX = !!i2139[6]
  i2138.flipY = !!i2139[7]
  i2138.drawMode = i2139[8]
  i2138.size = new pc.Vec2( i2139[9], i2139[10] )
  i2138.tileMode = i2139[11]
  i2138.adaptiveModeThreshold = i2139[12]
  i2138.maskInteraction = i2139[13]
  i2138.spriteSortPoint = i2139[14]
  i2138.enabled = !!i2139[15]
  request.r(i2139[16], i2139[17], 0, i2138, 'sharedMaterial')
  var i2141 = i2139[18]
  var i2140 = []
  for(var i = 0; i < i2141.length; i += 2) {
  request.r(i2141[i + 0], i2141[i + 1], 2, i2140, '')
  }
  i2138.sharedMaterials = i2140
  i2138.receiveShadows = !!i2139[19]
  i2138.shadowCastingMode = i2139[20]
  i2138.sortingLayerID = i2139[21]
  i2138.sortingOrder = i2139[22]
  i2138.lightmapIndex = i2139[23]
  i2138.lightmapSceneIndex = i2139[24]
  i2138.lightmapScaleOffset = new pc.Vec4( i2139[25], i2139[26], i2139[27], i2139[28] )
  i2138.lightProbeUsage = i2139[29]
  i2138.reflectionProbeUsage = i2139[30]
  return i2138
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i2142 = root || request.c( 'PlayParticlesOnCollision' )
  var i2143 = data
  request.r(i2143[0], i2143[1], 0, i2142, 'Target')
  request.r(i2143[2], i2143[3], 0, i2142, 'ParticlePrefab')
  i2142.destroyIt = !!i2143[4]
  i2142.stayAtPlace = !!i2143[5]
  i2142.disableOnCollision = !!i2143[6]
  i2142.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i2143[7], i2142.OnCollisionEvent)
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2145 = data
  i2144.radius = i2145[0]
  i2144.enabled = !!i2145[1]
  i2144.isTrigger = !!i2145[2]
  i2144.usedByEffector = !!i2145[3]
  i2144.density = i2145[4]
  i2144.offset = new pc.Vec2( i2145[5], i2145[6] )
  request.r(i2145[7], i2145[8], 0, i2144, 'material')
  return i2144
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i2146 = root || request.c( 'PlaySfxOnCollision' )
  var i2147 = data
  request.r(i2147[0], i2147[1], 0, i2146, 'Tip')
  i2146.Mode = i2147[2]
  request.r(i2147[3], i2147[4], 0, i2146, 'DragInput')
  request.r(i2147[5], i2147[6], 0, i2146, 'Source')
  i2146.startVol = i2147[7]
  i2146.targetVol = i2147[8]
  i2146.duration = i2147[9]
  request.r(i2147[10], i2147[11], 0, i2146, 'Particles')
  i2146.isDone = !!i2147[12]
  i2146.isInArea = !!i2147[13]
  i2146.isPlaying = !!i2147[14]
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2149 = data
  request.r(i2149[0], i2149[1], 0, i2148, 'clip')
  request.r(i2149[2], i2149[3], 0, i2148, 'outputAudioMixerGroup')
  i2148.playOnAwake = !!i2149[4]
  i2148.loop = !!i2149[5]
  i2148.time = i2149[6]
  i2148.volume = i2149[7]
  i2148.pitch = i2149[8]
  i2148.enabled = !!i2149[9]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i2151 = data
  i2150.usedByComposite = !!i2151[0]
  i2150.autoTiling = !!i2151[1]
  var i2153 = i2151[2]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 1) {
  var i2155 = i2153[i + 0]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 2) {
    i2154.push( new pc.Vec2( i2155[i + 0], i2155[i + 1] ) );
  }
    i2152.push( i2154 );
  }
  i2150.points = i2152
  i2150.enabled = !!i2151[3]
  i2150.isTrigger = !!i2151[4]
  i2150.usedByEffector = !!i2151[5]
  i2150.density = i2151[6]
  i2150.offset = new pc.Vec2( i2151[7], i2151[8] )
  request.r(i2151[9], i2151[10], 0, i2150, 'material')
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2163 = data
  i2162.usedByComposite = !!i2163[0]
  i2162.autoTiling = !!i2163[1]
  i2162.size = new pc.Vec2( i2163[2], i2163[3] )
  i2162.edgeRadius = i2163[4]
  i2162.enabled = !!i2163[5]
  i2162.isTrigger = !!i2163[6]
  i2162.usedByEffector = !!i2163[7]
  i2162.density = i2163[8]
  i2162.offset = new pc.Vec2( i2163[9], i2163[10] )
  request.r(i2163[11], i2163[12], 0, i2162, 'material')
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2165 = data
  request.r(i2165[0], i2165[1], 0, i2164, 'animatorController')
  request.r(i2165[2], i2165[3], 0, i2164, 'avatar')
  i2164.updateMode = i2165[4]
  i2164.hasTransformHierarchy = !!i2165[5]
  i2164.applyRootMotion = !!i2165[6]
  var i2167 = i2165[7]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 2) {
  request.r(i2167[i + 0], i2167[i + 1], 2, i2166, '')
  }
  i2164.humanBones = i2166
  i2164.enabled = !!i2165[8]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2171 = data
  i2170.frontSortingLayerID = i2171[0]
  i2170.frontSortingOrder = i2171[1]
  i2170.backSortingLayerID = i2171[2]
  i2170.backSortingOrder = i2171[3]
  i2170.alphaCutoff = i2171[4]
  request.r(i2171[5], i2171[6], 0, i2170, 'sprite')
  i2170.tileMode = i2171[7]
  i2170.isCustomRangeActive = !!i2171[8]
  i2170.spriteSortPoint = i2171[9]
  i2170.enabled = !!i2171[10]
  request.r(i2171[11], i2171[12], 0, i2170, 'sharedMaterial')
  var i2173 = i2171[13]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 2) {
  request.r(i2173[i + 0], i2173[i + 1], 2, i2172, '')
  }
  i2170.sharedMaterials = i2172
  i2170.receiveShadows = !!i2171[14]
  i2170.shadowCastingMode = i2171[15]
  i2170.sortingLayerID = i2171[16]
  i2170.sortingOrder = i2171[17]
  i2170.lightmapIndex = i2171[18]
  i2170.lightmapSceneIndex = i2171[19]
  i2170.lightmapScaleOffset = new pc.Vec4( i2171[20], i2171[21], i2171[22], i2171[23] )
  i2170.lightProbeUsage = i2171[24]
  i2170.reflectionProbeUsage = i2171[25]
  return i2170
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i2174 = root || request.c( 'BasicDrag' )
  var i2175 = data
  i2174.canDrag = !!i2175[0]
  i2174.dragByDelta = !!i2175[1]
  i2174.isDragging = !!i2175[2]
  i2174.moveWithPointer = !!i2175[3]
  i2174.canReturn = !!i2175[4]
  i2174.jumpOnReturn = !!i2175[5]
  i2174.returnTime = i2175[6]
  i2174.Tool_Offset = new pc.Vec3( i2175[7], i2175[8], i2175[9] )
  i2174.canScaleIncrease = !!i2175[10]
  i2174.Self_ScaleNew = new pc.Vec3( i2175[11], i2175[12], i2175[13] )
  i2174.canRotateOnPick = !!i2175[14]
  i2174.startRot = new pc.Vec3( i2175[15], i2175[16], i2175[17] )
  i2174.newRot = new pc.Vec3( i2175[18], i2175[19], i2175[20] )
  var i2177 = i2175[21]
  var i2176 = []
  for(var i = 0; i < i2177.length; i += 2) {
  request.r(i2177[i + 0], i2177[i + 1], 2, i2176, '')
  }
  i2174.childSprite = i2176
  request.r(i2175[22], i2175[23], 0, i2174, 'ToolSelectClip')
  request.r(i2175[24], i2175[25], 0, i2174, 'ToolLoopClip')
  request.r(i2175[26], i2175[27], 0, i2174, 'thisParticles')
  i2174.onDragparticle = !!i2175[28]
  request.r(i2175[29], i2175[30], 0, i2174, 'dragParticles')
  request.r(i2175[31], i2175[32], 0, i2174, 'anim')
  i2174.startPos = new pc.Vec3( i2175[33], i2175[34], i2175[35] )
  i2174.startScale = new pc.Vec3( i2175[36], i2175[37], i2175[38] )
  i2174.Vibration = !!i2175[39]
  i2174.isPlacedCannotMove = !!i2175[40]
  i2174.isObjectMovingWhileDragging = !!i2175[41]
  i2174.OnMouseDownEvent = request.d('System.Action', i2175[42], i2174.OnMouseDownEvent)
  i2174.OnMouseUpEvent = request.d('System.Action', i2175[43], i2174.OnMouseUpEvent)
  i2174.ProgStartEvent = request.d('System.Action', i2175[44], i2174.ProgStartEvent)
  i2174.ProgEndEvent = request.d('System.Action', i2175[45], i2174.ProgEndEvent)
  i2174.canCallMouseUpWhenGamePaused = !!i2175[46]
  i2174.ClampX_L = i2175[47]
  i2174.ClampX_H = i2175[48]
  i2174.ClampY_L = i2175[49]
  i2174.ClampY_H = i2175[50]
  i2174.startOrder = i2175[51]
  i2174.dontResetItIsInCollider = !!i2175[52]
  request.r(i2175[53], i2175[54], 0, i2174, 'thisCollider')
  request.r(i2175[55], i2175[56], 0, i2174, 'thisSR')
  i2174.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i2175[57], i2174.OnMouseDownEventIndependentFromCanDrag)
  return i2174
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2178 = root || request.c( 'System.Action' )
  var i2179 = data
  return i2178
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i2180 = root || request.c( 'BD_Progress' )
  var i2181 = data
  var i2183 = i2181[0]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.push( request.d('ScratchData', i2183[i + 0]) );
  }
  i2180.AllScratches = i2182
  i2180.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i2181[1], i2180.OnScratchComplete)
  i2180.isProgDone = !!i2181[2]
  i2180.canCallComplete = !!i2181[3]
  i2180.CollectiveAppear = !!i2181[4]
  i2180.tipControl = !!i2181[5]
  i2180.progressControl = !!i2181[6]
  request.r(i2181[7], i2181[8], 0, i2180, 'thisDrag')
  i2180.CompleteEvent = request.d('System.Action', i2181[9], i2180.CompleteEvent)
  i2180.SubCompleteEvent = request.d('System.Action', i2181[10], i2180.SubCompleteEvent)
  return i2180
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i2186 = root || request.c( 'ScratchData' )
  var i2187 = data
  request.r(i2187[0], i2187[1], 0, i2186, 'ScratchManager')
  i2186.scratchLimit = i2187[2]
  i2186.isComplete = !!i2187[3]
  return i2186
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2188 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2189 = data
  request.r(i2189[0], i2189[1], 0, i2188, 'm_ObjectArgument')
  i2188.m_ObjectArgumentAssemblyTypeName = i2189[2]
  i2188.m_IntArgument = i2189[3]
  i2188.m_FloatArgument = i2189[4]
  i2188.m_StringArgument = i2189[5]
  i2188.m_BoolArgument = !!i2189[6]
  return i2188
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i2190 = root || request.c( 'BD_Clamp' )
  var i2191 = data
  i2190.ClampX_L = i2191[0]
  i2190.ClampX_H = i2191[1]
  i2190.ClampY_L = i2191[2]
  i2190.ClampY_H = i2191[3]
  return i2190
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i2192 = root || request.c( 'BD_ToolRotate' )
  var i2193 = data
  i2192.startDelay = i2193[0]
  request.r(i2193[1], i2193[2], 0, i2192, 'Tool')
  request.r(i2193[3], i2193[4], 0, i2192, 'Clamp')
  request.r(i2193[5], i2193[6], 0, i2192, 'Pivot')
  i2192.MinAngle = new pc.Vec3( i2193[7], i2193[8], i2193[9] )
  i2192.MaxAngle = new pc.Vec3( i2193[10], i2193[11], i2193[12] )
  i2192.rotationSpeed = i2193[13]
  return i2192
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i2194 = root || request.c( 'BD_CameraFollow' )
  var i2195 = data
  request.r(i2195[0], i2195[1], 0, i2194, 'Tool')
  request.r(i2195[2], i2195[3], 0, i2194, 'Pivot')
  i2194.FOV = i2195[4]
  i2194.Y_L = i2195[5]
  i2194.Y_H = i2195[6]
  i2194.X_L = i2195[7]
  i2194.X_R = i2195[8]
  i2194.startDelay = i2195[9]
  i2194.duration = i2195[10]
  return i2194
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i2196 = root || request.c( 'BD_AnimatorDrag' )
  var i2197 = data
  request.r(i2197[0], i2197[1], 0, i2196, 'BD')
  request.r(i2197[2], i2197[3], 0, i2196, 'anim')
  request.r(i2197[4], i2197[5], 0, i2196, 'Source')
  i2196.Vibration = !!i2197[6]
  i2196.isCompletable = !!i2197[7]
  i2196.completionThreshold = i2197[8]
  i2196.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2197[9], i2196.OnComplete)
  return i2196
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i2198 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i2199 = data
  request.r(i2199[0], i2199[1], 0, i2198, 'm_RootBone')
  var i2201 = i2199[2]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 2) {
  request.r(i2201[i + 0], i2201[i + 1], 2, i2200, '')
  }
  i2198.m_BoneTransforms = i2200
  i2198.m_AlwaysUpdate = !!i2199[3]
  i2198.m_AutoRebind = !!i2199[4]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2203 = data
  i2202.bodyType = i2203[0]
  request.r(i2203[1], i2203[2], 0, i2202, 'material')
  i2202.simulated = !!i2203[3]
  i2202.useAutoMass = !!i2203[4]
  i2202.mass = i2203[5]
  i2202.drag = i2203[6]
  i2202.angularDrag = i2203[7]
  i2202.gravityScale = i2203[8]
  i2202.collisionDetectionMode = i2203[9]
  i2202.sleepMode = i2203[10]
  i2202.constraints = i2203[11]
  return i2202
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i2204 = root || request.c( 'BD_SpriteChange' )
  var i2205 = data
  request.r(i2205[0], i2205[1], 0, i2204, 'BD')
  request.r(i2205[2], i2205[3], 0, i2204, 'SR')
  request.r(i2205[4], i2205[5], 0, i2204, 'Default')
  request.r(i2205[6], i2205[7], 0, i2204, 'Picked')
  i2204.resetOnRelease = !!i2205[8]
  return i2204
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i2206 = root || request.c( 'BD_ProgressHelper' )
  var i2207 = data
  request.r(i2207[0], i2207[1], 0, i2206, 'BD_Progress')
  request.r(i2207[2], i2207[3], 0, i2206, 'fadeSprite')
  i2206.fadeIn = !!i2207[4]
  return i2206
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i2208 = root || request.c( 'DestroyObj' )
  var i2209 = data
  i2208.destroyDelay = i2209[0]
  return i2208
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i2210 = root || request.c( 'MenuLevel' )
  var i2211 = data
  request.r(i2211[0], i2211[1], 0, i2210, 'menuLevelBtnUpdate')
  var i2213 = i2211[2]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( request.d('MenuLevelData', i2213[i + 0]) );
  }
  i2210.AllSteps = i2212
  request.r(i2211[3], i2211[4], 0, i2210, 'buttonparent')
  var i2215 = i2211[5]
  var i2214 = []
  for(var i = 0; i < i2215.length; i += 2) {
  request.r(i2215[i + 0], i2215[i + 1], 2, i2214, '')
  }
  i2210.BtnsDotweenAnims = i2214
  var i2217 = i2211[6]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 2) {
  request.r(i2217[i + 0], i2217[i + 1], 2, i2216, '')
  }
  i2210.BtnsCols = i2216
  request.r(i2211[7], i2211[8], 0, i2210, 'mainGameView')
  request.r(i2211[9], i2211[10], 0, i2210, 'Storyboard')
  request.r(i2211[11], i2211[12], 0, i2210, 'BgMusic')
  request.r(i2211[13], i2211[14], 0, i2210, 'BgStoryMusic')
  request.r(i2211[15], i2211[16], 0, i2210, 'Hand_Tut1')
  var i2219 = i2211[17]
  var i2218 = []
  for(var i = 0; i < i2219.length; i += 2) {
  request.r(i2219[i + 0], i2219[i + 1], 2, i2218, '')
  }
  i2210.itemEnable_Onstart = i2218
  var i2221 = i2211[18]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 2) {
  request.r(i2221[i + 0], i2221[i + 1], 2, i2220, '')
  }
  i2210.itemDisable_Onstart = i2220
  var i2223 = i2211[19]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 2) {
  request.r(i2223[i + 0], i2223[i + 1], 2, i2222, '')
  }
  i2210.itemEnable_Oncomplete = i2222
  var i2225 = i2211[20]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 2) {
  request.r(i2225[i + 0], i2225[i + 1], 2, i2224, '')
  }
  i2210.itemDisable_Oncomplete = i2224
  i2210.levelKey = i2211[21]
  i2210.revealDirtyHoldTime = i2211[22]
  return i2210
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i2228 = root || request.c( 'MenuLevelData' )
  var i2229 = data
  i2228.Name = i2229[0]
  request.r(i2229[1], i2229[2], 0, i2228, 'UiBtn')
  request.r(i2229[3], i2229[4], 0, i2228, 'TickBtn')
  request.r(i2229[5], i2229[6], 0, i2228, 'ExclamationIcon')
  var i2231 = i2229[7]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 2) {
  request.r(i2231[i + 0], i2231[i + 1], 2, i2230, '')
  }
  i2228.Item_Dirty = i2230
  var i2233 = i2229[8]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 2) {
  request.r(i2233[i + 0], i2233[i + 1], 2, i2232, '')
  }
  i2228.Item_Clean = i2232
  request.r(i2229[9], i2229[10], 0, i2228, 'CompleteParticle')
  return i2228
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i2240 = root || request.c( 'Level_PoseController' )
  var i2241 = data
  var i2243 = i2241[0]
  var i2242 = []
  for(var i = 0; i < i2243.length; i += 2) {
  request.r(i2243[i + 0], i2243[i + 1], 2, i2242, '')
  }
  i2240.itemToShow = i2242
  var i2245 = i2241[1]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 2) {
  request.r(i2245[i + 0], i2245[i + 1], 2, i2244, '')
  }
  i2240.itemToHide = i2244
  i2240.stepTarget = i2241[2]
  return i2240
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2246 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2247 = data
  i2246.targetIsSelf = !!i2247[0]
  request.r(i2247[1], i2247[2], 0, i2246, 'targetGO')
  i2246.tweenTargetIsTargetGO = !!i2247[3]
  i2246.delay = i2247[4]
  i2246.duration = i2247[5]
  i2246.easeType = i2247[6]
  i2246.easeCurve = new pc.AnimationCurve( { keys_flow: i2247[7] } )
  i2246.loopType = i2247[8]
  i2246.loops = i2247[9]
  i2246.id = i2247[10]
  i2246.isRelative = !!i2247[11]
  i2246.isFrom = !!i2247[12]
  i2246.isIndependentUpdate = !!i2247[13]
  i2246.autoKill = !!i2247[14]
  i2246.autoGenerate = !!i2247[15]
  i2246.isActive = !!i2247[16]
  i2246.isValid = !!i2247[17]
  request.r(i2247[18], i2247[19], 0, i2246, 'target')
  i2246.animationType = i2247[20]
  i2246.targetType = i2247[21]
  i2246.forcedTargetType = i2247[22]
  i2246.autoPlay = !!i2247[23]
  i2246.useTargetAsV3 = !!i2247[24]
  i2246.endValueFloat = i2247[25]
  i2246.endValueV3 = new pc.Vec3( i2247[26], i2247[27], i2247[28] )
  i2246.endValueV2 = new pc.Vec2( i2247[29], i2247[30] )
  i2246.endValueColor = new pc.Color(i2247[31], i2247[32], i2247[33], i2247[34])
  i2246.endValueString = i2247[35]
  i2246.endValueRect = UnityEngine.Rect.MinMaxRect(i2247[36], i2247[37], i2247[38], i2247[39])
  request.r(i2247[40], i2247[41], 0, i2246, 'endValueTransform')
  i2246.optionalBool0 = !!i2247[42]
  i2246.optionalBool1 = !!i2247[43]
  i2246.optionalFloat0 = i2247[44]
  i2246.optionalInt0 = i2247[45]
  i2246.optionalRotationMode = i2247[46]
  i2246.optionalScrambleMode = i2247[47]
  i2246.optionalShakeRandomnessMode = i2247[48]
  i2246.optionalString = i2247[49]
  i2246.updateType = i2247[50]
  i2246.isSpeedBased = !!i2247[51]
  i2246.hasOnStart = !!i2247[52]
  i2246.hasOnPlay = !!i2247[53]
  i2246.hasOnUpdate = !!i2247[54]
  i2246.hasOnStepComplete = !!i2247[55]
  i2246.hasOnComplete = !!i2247[56]
  i2246.hasOnTweenCreated = !!i2247[57]
  i2246.hasOnRewind = !!i2247[58]
  i2246.onStart = request.d('UnityEngine.Events.UnityEvent', i2247[59], i2246.onStart)
  i2246.onPlay = request.d('UnityEngine.Events.UnityEvent', i2247[60], i2246.onPlay)
  i2246.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2247[61], i2246.onUpdate)
  i2246.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2247[62], i2246.onStepComplete)
  i2246.onComplete = request.d('UnityEngine.Events.UnityEvent', i2247[63], i2246.onComplete)
  i2246.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2247[64], i2246.onTweenCreated)
  i2246.onRewind = request.d('UnityEngine.Events.UnityEvent', i2247[65], i2246.onRewind)
  return i2246
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i2248 = root || request.c( 'SpriteButton' )
  var i2249 = data
  i2248.isLocked = !!i2249[0]
  i2248.lockMsg = i2249[1]
  i2248.onClick = request.d('UnityEngine.Events.UnityEvent', i2249[2], i2248.onClick)
  i2248.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i2249[3], i2248.onLockedClick)
  i2248.isLevelBtnSfx = !!i2249[4]
  request.r(i2249[5], i2249[6], 0, i2248, 'pivot')
  i2248.reductionChange = i2249[7]
  i2248.animationDuration = i2249[8]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2251 = data
  i2250.name = i2251[0]
  i2250.atlasId = i2251[1]
  i2250.mipmapCount = i2251[2]
  i2250.hdr = !!i2251[3]
  i2250.size = i2251[4]
  i2250.anisoLevel = i2251[5]
  i2250.filterMode = i2251[6]
  var i2253 = i2251[7]
  var i2252 = []
  for(var i = 0; i < i2253.length; i += 4) {
    i2252.push( UnityEngine.Rect.MinMaxRect(i2253[i + 0], i2253[i + 1], i2253[i + 2], i2253[i + 3]) );
  }
  i2250.rects = i2252
  i2250.wrapU = i2251[8]
  i2250.wrapV = i2251[9]
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2257 = data
  i2256.name = i2257[0]
  i2256.index = i2257[1]
  i2256.startup = !!i2257[2]
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2259 = data
  i2258.aspect = i2259[0]
  i2258.orthographic = !!i2259[1]
  i2258.orthographicSize = i2259[2]
  i2258.backgroundColor = new pc.Color(i2259[3], i2259[4], i2259[5], i2259[6])
  i2258.nearClipPlane = i2259[7]
  i2258.farClipPlane = i2259[8]
  i2258.fieldOfView = i2259[9]
  i2258.depth = i2259[10]
  i2258.clearFlags = i2259[11]
  i2258.cullingMask = i2259[12]
  i2258.rect = i2259[13]
  request.r(i2259[14], i2259[15], 0, i2258, 'targetTexture')
  i2258.usePhysicalProperties = !!i2259[16]
  i2258.focalLength = i2259[17]
  i2258.sensorSize = new pc.Vec2( i2259[18], i2259[19] )
  i2258.lensShift = new pc.Vec2( i2259[20], i2259[21] )
  i2258.gateFit = i2259[22]
  i2258.commandBufferCount = i2259[23]
  i2258.cameraType = i2259[24]
  i2258.enabled = !!i2259[25]
  return i2258
}

Deserializers["CameraController"] = function (request, data, root) {
  var i2260 = root || request.c( 'CameraController' )
  var i2261 = data
  request.r(i2261[0], i2261[1], 0, i2260, 'cam')
  i2260.defaultPosition = new pc.Vec3( i2261[2], i2261[3], i2261[4] )
  i2260.defaultSize = i2261[5]
  i2260.defaultFOV = i2261[6]
  i2260.defaultDuration = i2261[7]
  i2260.defaultEase = i2261[8]
  return i2260
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i2262 = root || request.c( 'MusicSource' )
  var i2263 = data
  request.r(i2263[0], i2263[1], 0, i2262, 'source')
  return i2262
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i2264 = root || request.c( 'UI_Manager' )
  var i2265 = data
  i2264.levelCompleted = !!i2265[0]
  i2264.isPauseActive = !!i2265[1]
  i2264.loadIndex = i2265[2]
  request.r(i2265[3], i2265[4], 0, i2264, 'removeAdsButton')
  request.r(i2265[5], i2265[6], 0, i2264, 'pauseButton')
  request.r(i2265[7], i2265[8], 0, i2264, 'Fade_Img')
  request.r(i2265[9], i2265[10], 0, i2264, 'TopBarAnim')
  request.r(i2265[11], i2265[12], 0, i2264, 'MainPanel')
  request.r(i2265[13], i2265[14], 0, i2264, 'PausePanel')
  request.r(i2265[15], i2265[16], 0, i2264, 'PausePopUp')
  request.r(i2265[17], i2265[18], 0, i2264, 'PauseCanvasGroup')
  request.r(i2265[19], i2265[20], 0, i2264, 'RateUsPanel')
  request.r(i2265[21], i2265[22], 0, i2264, 'RateUsPopUp')
  request.r(i2265[23], i2265[24], 0, i2264, 'RemoveAdsPanel')
  request.r(i2265[25], i2265[26], 0, i2264, 'RemoveAdsPopUp')
  request.r(i2265[27], i2265[28], 0, i2264, 'RemoveAdsCanvasGroup')
  var i2267 = i2265[29]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 2) {
  request.r(i2267[i + 0], i2267[i + 1], 2, i2266, '')
  }
  i2264.RemoveAdsAnims = i2266
  request.r(i2265[30], i2265[31], 0, i2264, 'CompletePanel')
  request.r(i2265[32], i2265[33], 0, i2264, 'LevelIcon')
  request.r(i2265[34], i2265[35], 0, i2264, 'CompleteParticles')
  request.r(i2265[36], i2265[37], 0, i2264, 'progressBar')
  request.r(i2265[38], i2265[39], 0, i2264, 'progressText')
  request.r(i2265[40], i2265[41], 0, i2264, 'toolIcon1')
  request.r(i2265[42], i2265[43], 0, i2264, 'toolIcon2')
  request.r(i2265[44], i2265[45], 0, i2264, 'toolIcon3')
  request.r(i2265[46], i2265[47], 0, i2264, 'target1')
  request.r(i2265[48], i2265[49], 0, i2264, 'target2')
  i2264.toolMoveDuration = i2265[50]
  i2264.currentIndex = i2265[51]
  var i2269 = i2265[52]
  var i2268 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2269.length; i += 2) {
  request.r(i2269[i + 0], i2269[i + 1], 1, i2268, '')
  }
  i2264.allTools = i2268
  request.r(i2265[53], i2265[54], 0, i2264, 'clockProgress')
  request.r(i2265[55], i2265[56], 0, i2264, 'clockProgressFill')
  request.r(i2265[57], i2265[58], 0, i2264, 'clockAudio')
  i2264.moveDistance = i2265[59]
  i2264.animationDuration = i2265[60]
  i2264.greyBgChildName = i2265[61]
  i2264.pushOffset = i2265[62]
  return i2264
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i2270 = root || request.c( 'GameManagerPlayable' )
  var i2271 = data
  request.r(i2271[0], i2271[1], 0, i2270, 'endParticles')
  request.r(i2271[2], i2271[3], 0, i2270, 'stepCompleteParticles')
  request.r(i2271[4], i2271[5], 0, i2270, 'DefaultMat')
  request.r(i2271[6], i2271[7], 0, i2270, 'BG_Music')
  request.r(i2271[8], i2271[9], 0, i2270, 'restoreEffectShader')
  request.r(i2271[10], i2271[11], 0, i2270, 'stickerEffectShader')
  i2270.isComplete = !!i2271[12]
  i2270.isPaused = !!i2271[13]
  request.r(i2271[14], i2271[15], 0, i2270, 'currentLevel')
  i2270.startLevelOnPlay = !!i2271[16]
  i2270.currentLevelNo = i2271[17]
  return i2270
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2272 = root || request.c( 'AudioController' )
  var i2273 = data
  request.r(i2273[0], i2273[1], 0, i2272, 'MainMixer')
  request.r(i2273[2], i2273[3], 0, i2272, 'UiClick')
  request.r(i2273[4], i2273[5], 0, i2272, 'UiClickSource')
  var i2275 = i2273[6]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 2) {
  request.r(i2275[i + 0], i2275[i + 1], 2, i2274, '')
  }
  i2272.SfxSources = i2274
  var i2277 = i2273[7]
  var i2276 = []
  for(var i = 0; i < i2277.length; i += 2) {
  request.r(i2277[i + 0], i2277[i + 1], 2, i2276, '')
  }
  i2272.AllClips = i2276
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2281 = data
  i2280.pivot = new pc.Vec2( i2281[0], i2281[1] )
  i2280.anchorMin = new pc.Vec2( i2281[2], i2281[3] )
  i2280.anchorMax = new pc.Vec2( i2281[4], i2281[5] )
  i2280.sizeDelta = new pc.Vec2( i2281[6], i2281[7] )
  i2280.anchoredPosition3D = new pc.Vec3( i2281[8], i2281[9], i2281[10] )
  i2280.rotation = new pc.Quat(i2281[11], i2281[12], i2281[13], i2281[14])
  i2280.scale = new pc.Vec3( i2281[15], i2281[16], i2281[17] )
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2283 = data
  i2282.planeDistance = i2283[0]
  i2282.referencePixelsPerUnit = i2283[1]
  i2282.isFallbackOverlay = !!i2283[2]
  i2282.renderMode = i2283[3]
  i2282.renderOrder = i2283[4]
  i2282.sortingLayerName = i2283[5]
  i2282.sortingOrder = i2283[6]
  i2282.scaleFactor = i2283[7]
  request.r(i2283[8], i2283[9], 0, i2282, 'worldCamera')
  i2282.overrideSorting = !!i2283[10]
  i2282.pixelPerfect = !!i2283[11]
  i2282.targetDisplay = i2283[12]
  i2282.overridePixelPerfect = !!i2283[13]
  i2282.enabled = !!i2283[14]
  return i2282
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2285 = data
  i2284.m_UiScaleMode = i2285[0]
  i2284.m_ReferencePixelsPerUnit = i2285[1]
  i2284.m_ScaleFactor = i2285[2]
  i2284.m_ReferenceResolution = new pc.Vec2( i2285[3], i2285[4] )
  i2284.m_ScreenMatchMode = i2285[5]
  i2284.m_MatchWidthOrHeight = i2285[6]
  i2284.m_PhysicalUnit = i2285[7]
  i2284.m_FallbackScreenDPI = i2285[8]
  i2284.m_DefaultSpriteDPI = i2285[9]
  i2284.m_DynamicPixelsPerUnit = i2285[10]
  i2284.m_PresetInfoIsWorld = !!i2285[11]
  return i2284
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2286 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2287 = data
  i2286.m_IgnoreReversedGraphics = !!i2287[0]
  i2286.m_BlockingObjects = i2287[1]
  i2286.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2287[2] )
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2289 = data
  i2288.cullTransparentMesh = !!i2289[0]
  return i2288
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2290 = root || request.c( 'UnityEngine.UI.Image' )
  var i2291 = data
  request.r(i2291[0], i2291[1], 0, i2290, 'm_Sprite')
  i2290.m_Type = i2291[2]
  i2290.m_PreserveAspect = !!i2291[3]
  i2290.m_FillCenter = !!i2291[4]
  i2290.m_FillMethod = i2291[5]
  i2290.m_FillAmount = i2291[6]
  i2290.m_FillClockwise = !!i2291[7]
  i2290.m_FillOrigin = i2291[8]
  i2290.m_UseSpriteMesh = !!i2291[9]
  i2290.m_PixelsPerUnitMultiplier = i2291[10]
  request.r(i2291[11], i2291[12], 0, i2290, 'm_Material')
  i2290.m_Maskable = !!i2291[13]
  i2290.m_Color = new pc.Color(i2291[14], i2291[15], i2291[16], i2291[17])
  i2290.m_RaycastTarget = !!i2291[18]
  i2290.m_RaycastPadding = new pc.Vec4( i2291[19], i2291[20], i2291[21], i2291[22] )
  return i2290
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2292 = root || request.c( 'UnityEngine.UI.Text' )
  var i2293 = data
  i2292.m_FontData = request.d('UnityEngine.UI.FontData', i2293[0], i2292.m_FontData)
  i2292.m_Text = i2293[1]
  request.r(i2293[2], i2293[3], 0, i2292, 'm_Material')
  i2292.m_Maskable = !!i2293[4]
  i2292.m_Color = new pc.Color(i2293[5], i2293[6], i2293[7], i2293[8])
  i2292.m_RaycastTarget = !!i2293[9]
  i2292.m_RaycastPadding = new pc.Vec4( i2293[10], i2293[11], i2293[12], i2293[13] )
  return i2292
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2294 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2295 = data
  request.r(i2295[0], i2295[1], 0, i2294, 'm_Font')
  i2294.m_FontSize = i2295[2]
  i2294.m_FontStyle = i2295[3]
  i2294.m_BestFit = !!i2295[4]
  i2294.m_MinSize = i2295[5]
  i2294.m_MaxSize = i2295[6]
  i2294.m_Alignment = i2295[7]
  i2294.m_AlignByGeometry = !!i2295[8]
  i2294.m_RichText = !!i2295[9]
  i2294.m_HorizontalOverflow = i2295[10]
  i2294.m_VerticalOverflow = i2295[11]
  i2294.m_LineSpacing = i2295[12]
  return i2294
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2296 = root || request.c( 'UnityEngine.UI.Button' )
  var i2297 = data
  i2296.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2297[0], i2296.m_OnClick)
  i2296.m_Navigation = request.d('UnityEngine.UI.Navigation', i2297[1], i2296.m_Navigation)
  i2296.m_Transition = i2297[2]
  i2296.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2297[3], i2296.m_Colors)
  i2296.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2297[4], i2296.m_SpriteState)
  i2296.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2297[5], i2296.m_AnimationTriggers)
  i2296.m_Interactable = !!i2297[6]
  request.r(i2297[7], i2297[8], 0, i2296, 'm_TargetGraphic')
  return i2296
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2298 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2299 = data
  i2298.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2299[0], i2298.m_PersistentCalls)
  return i2298
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2300 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2301 = data
  i2300.m_Mode = i2301[0]
  i2300.m_WrapAround = !!i2301[1]
  request.r(i2301[2], i2301[3], 0, i2300, 'm_SelectOnUp')
  request.r(i2301[4], i2301[5], 0, i2300, 'm_SelectOnDown')
  request.r(i2301[6], i2301[7], 0, i2300, 'm_SelectOnLeft')
  request.r(i2301[8], i2301[9], 0, i2300, 'm_SelectOnRight')
  return i2300
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2302 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2303 = data
  i2302.m_NormalColor = new pc.Color(i2303[0], i2303[1], i2303[2], i2303[3])
  i2302.m_HighlightedColor = new pc.Color(i2303[4], i2303[5], i2303[6], i2303[7])
  i2302.m_PressedColor = new pc.Color(i2303[8], i2303[9], i2303[10], i2303[11])
  i2302.m_SelectedColor = new pc.Color(i2303[12], i2303[13], i2303[14], i2303[15])
  i2302.m_DisabledColor = new pc.Color(i2303[16], i2303[17], i2303[18], i2303[19])
  i2302.m_ColorMultiplier = i2303[20]
  i2302.m_FadeDuration = i2303[21]
  return i2302
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2304 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2305 = data
  request.r(i2305[0], i2305[1], 0, i2304, 'm_HighlightedSprite')
  request.r(i2305[2], i2305[3], 0, i2304, 'm_PressedSprite')
  request.r(i2305[4], i2305[5], 0, i2304, 'm_SelectedSprite')
  request.r(i2305[6], i2305[7], 0, i2304, 'm_DisabledSprite')
  return i2304
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2306 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2307 = data
  i2306.m_NormalTrigger = i2307[0]
  i2306.m_HighlightedTrigger = i2307[1]
  i2306.m_PressedTrigger = i2307[2]
  i2306.m_SelectedTrigger = i2307[3]
  i2306.m_DisabledTrigger = i2307[4]
  return i2306
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i2308 = root || request.c( 'PlayableHudRuntime' )
  var i2309 = data
  return i2308
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2310 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2311 = data
  request.r(i2311[0], i2311[1], 0, i2310, 'm_FirstSelected')
  i2310.m_sendNavigationEvents = !!i2311[2]
  i2310.m_DragThreshold = i2311[3]
  return i2310
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2312 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2313 = data
  i2312.m_HorizontalAxis = i2313[0]
  i2312.m_VerticalAxis = i2313[1]
  i2312.m_SubmitButton = i2313[2]
  i2312.m_CancelButton = i2313[3]
  i2312.m_InputActionsPerSecond = i2313[4]
  i2312.m_RepeatDelay = i2313[5]
  i2312.m_ForceModuleActive = !!i2313[6]
  i2312.m_SendPointerHoverToParent = !!i2313[7]
  return i2312
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i2314 = root || request.c( 'PlayableRouter' )
  var i2315 = data
  var i2317 = i2315[0]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 2) {
  request.r(i2317[i + 0], i2317[i + 1], 2, i2316, '')
  }
  i2314.menuObjects = i2316
  var i2319 = i2315[1]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 2) {
  request.r(i2319[i + 0], i2319[i + 1], 2, i2318, '')
  }
  i2314.gameplayObjects = i2318
  var i2321 = i2315[2]
  var i2320 = []
  for(var i = 0; i < i2321.length; i += 1) {
    i2320.push( request.d('PlayableRouter+SubLevelSlot', i2321[i + 0]) );
  }
  i2314.subLevels = i2320
  i2314.fadeDuration = i2315[3]
  i2314.lockedMessage = i2315[4]
  i2314.lockedTapsToCTA = i2315[5]
  return i2314
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i2324 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i2325 = data
  request.r(i2325[0], i2325[1], 0, i2324, 'button')
  request.r(i2325[2], i2325[3], 0, i2324, 'level')
  return i2324
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i2326 = root || request.c( 'ToastManager' )
  var i2327 = data
  request.r(i2327[0], i2327[1], 0, i2326, 'toastPanel')
  request.r(i2327[2], i2327[3], 0, i2326, 'toastPopup')
  request.r(i2327[4], i2327[5], 0, i2326, 'canvasGroup')
  request.r(i2327[6], i2327[7], 0, i2326, 'toastText')
  i2326.startY = i2327[8]
  i2326.visibleY = i2327[9]
  i2326.endY = i2327[10]
  i2326.animationTime = i2327[11]
  i2326.animationTimeUp = i2327[12]
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2329 = data
  i2328.m_Alpha = i2329[0]
  i2328.m_Interactable = !!i2329[1]
  i2328.m_BlocksRaycasts = !!i2329[2]
  i2328.m_IgnoreParentGroups = !!i2329[3]
  i2328.enabled = !!i2329[4]
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2331 = data
  i2330.ambientIntensity = i2331[0]
  i2330.reflectionIntensity = i2331[1]
  i2330.ambientMode = i2331[2]
  i2330.ambientLight = new pc.Color(i2331[3], i2331[4], i2331[5], i2331[6])
  i2330.ambientSkyColor = new pc.Color(i2331[7], i2331[8], i2331[9], i2331[10])
  i2330.ambientGroundColor = new pc.Color(i2331[11], i2331[12], i2331[13], i2331[14])
  i2330.ambientEquatorColor = new pc.Color(i2331[15], i2331[16], i2331[17], i2331[18])
  i2330.fogColor = new pc.Color(i2331[19], i2331[20], i2331[21], i2331[22])
  i2330.fogEndDistance = i2331[23]
  i2330.fogStartDistance = i2331[24]
  i2330.fogDensity = i2331[25]
  i2330.fog = !!i2331[26]
  request.r(i2331[27], i2331[28], 0, i2330, 'skybox')
  i2330.fogMode = i2331[29]
  var i2333 = i2331[30]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 1) {
    i2332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2333[i + 0]) );
  }
  i2330.lightmaps = i2332
  i2330.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2331[31], i2330.lightProbes)
  i2330.lightmapsMode = i2331[32]
  i2330.mixedBakeMode = i2331[33]
  i2330.environmentLightingMode = i2331[34]
  i2330.ambientProbe = new pc.SphericalHarmonicsL2(i2331[35])
  request.r(i2331[36], i2331[37], 0, i2330, 'customReflection')
  request.r(i2331[38], i2331[39], 0, i2330, 'defaultReflection')
  i2330.defaultReflectionMode = i2331[40]
  i2330.defaultReflectionResolution = i2331[41]
  i2330.sunLightObjectId = i2331[42]
  i2330.pixelLightCount = i2331[43]
  i2330.defaultReflectionHDR = !!i2331[44]
  i2330.hasLightDataAsset = !!i2331[45]
  i2330.hasManualGenerate = !!i2331[46]
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2337 = data
  request.r(i2337[0], i2337[1], 0, i2336, 'lightmapColor')
  request.r(i2337[2], i2337[3], 0, i2336, 'lightmapDirection')
  request.r(i2337[4], i2337[5], 0, i2336, 'shadowMask')
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2338 = root || new UnityEngine.LightProbes()
  var i2339 = data
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2347 = data
  var i2349 = i2347[0]
  var i2348 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2349[i + 0]));
  }
  i2346.ShaderCompilationErrors = i2348
  i2346.name = i2347[1]
  i2346.guid = i2347[2]
  var i2351 = i2347[3]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( i2351[i + 0] );
  }
  i2346.shaderDefinedKeywords = i2350
  var i2353 = i2347[4]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2353[i + 0]) );
  }
  i2346.passes = i2352
  var i2355 = i2347[5]
  var i2354 = []
  for(var i = 0; i < i2355.length; i += 1) {
    i2354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2355[i + 0]) );
  }
  i2346.usePasses = i2354
  var i2357 = i2347[6]
  var i2356 = []
  for(var i = 0; i < i2357.length; i += 1) {
    i2356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2357[i + 0]) );
  }
  i2346.defaultParameterValues = i2356
  request.r(i2347[7], i2347[8], 0, i2346, 'unityFallbackShader')
  i2346.readDepth = !!i2347[9]
  i2346.hasDepthOnlyPass = !!i2347[10]
  i2346.isCreatedByShaderGraph = !!i2347[11]
  i2346.disableBatching = !!i2347[12]
  i2346.compiled = !!i2347[13]
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2361 = data
  i2360.shaderName = i2361[0]
  i2360.errorMessage = i2361[1]
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2366 = root || new pc.UnityShaderPass()
  var i2367 = data
  i2366.id = i2367[0]
  i2366.subShaderIndex = i2367[1]
  i2366.name = i2367[2]
  i2366.passType = i2367[3]
  i2366.grabPassTextureName = i2367[4]
  i2366.usePass = !!i2367[5]
  i2366.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2367[6], i2366.zTest)
  i2366.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2367[7], i2366.zWrite)
  i2366.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2367[8], i2366.culling)
  i2366.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2367[9], i2366.blending)
  i2366.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2367[10], i2366.alphaBlending)
  i2366.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2367[11], i2366.colorWriteMask)
  i2366.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2367[12], i2366.offsetUnits)
  i2366.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2367[13], i2366.offsetFactor)
  i2366.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2367[14], i2366.stencilRef)
  i2366.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2367[15], i2366.stencilReadMask)
  i2366.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2367[16], i2366.stencilWriteMask)
  i2366.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2367[17], i2366.stencilOp)
  i2366.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2367[18], i2366.stencilOpFront)
  i2366.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2367[19], i2366.stencilOpBack)
  var i2369 = i2367[20]
  var i2368 = []
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2369[i + 0]) );
  }
  i2366.tags = i2368
  var i2371 = i2367[21]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.push( i2371[i + 0] );
  }
  i2366.passDefinedKeywords = i2370
  var i2373 = i2367[22]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 1) {
    i2372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2373[i + 0]) );
  }
  i2366.passDefinedKeywordGroups = i2372
  var i2375 = i2367[23]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2375[i + 0]) );
  }
  i2366.variants = i2374
  var i2377 = i2367[24]
  var i2376 = []
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2377[i + 0]) );
  }
  i2366.excludedVariants = i2376
  i2366.hasDepthReader = !!i2367[25]
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2379 = data
  i2378.val = i2379[0]
  i2378.name = i2379[1]
  return i2378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2381 = data
  i2380.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2381[0], i2380.src)
  i2380.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2381[1], i2380.dst)
  i2380.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2381[2], i2380.op)
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2383 = data
  i2382.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2383[0], i2382.pass)
  i2382.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2383[1], i2382.fail)
  i2382.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2383[2], i2382.zFail)
  i2382.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2383[3], i2382.comp)
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2387 = data
  i2386.name = i2387[0]
  i2386.value = i2387[1]
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2391 = data
  var i2393 = i2391[0]
  var i2392 = []
  for(var i = 0; i < i2393.length; i += 1) {
    i2392.push( i2393[i + 0] );
  }
  i2390.keywords = i2392
  i2390.hasDiscard = !!i2391[1]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2397 = data
  i2396.passId = i2397[0]
  i2396.subShaderIndex = i2397[1]
  var i2399 = i2397[2]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 1) {
    i2398.push( i2399[i + 0] );
  }
  i2396.keywords = i2398
  i2396.vertexProgram = i2397[3]
  i2396.fragmentProgram = i2397[4]
  i2396.exportedForWebGl2 = !!i2397[5]
  i2396.readDepth = !!i2397[6]
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2403 = data
  request.r(i2403[0], i2403[1], 0, i2402, 'shader')
  i2402.pass = i2403[2]
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2407 = data
  i2406.name = i2407[0]
  i2406.type = i2407[1]
  i2406.value = new pc.Vec4( i2407[2], i2407[3], i2407[4], i2407[5] )
  i2406.textureValue = i2407[6]
  i2406.shaderPropertyFlag = i2407[7]
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2409 = data
  i2408.name = i2409[0]
  request.r(i2409[1], i2409[2], 0, i2408, 'texture')
  i2408.aabb = i2409[3]
  i2408.vertices = i2409[4]
  i2408.triangles = i2409[5]
  i2408.textureRect = UnityEngine.Rect.MinMaxRect(i2409[6], i2409[7], i2409[8], i2409[9])
  i2408.packedRect = UnityEngine.Rect.MinMaxRect(i2409[10], i2409[11], i2409[12], i2409[13])
  i2408.border = new pc.Vec4( i2409[14], i2409[15], i2409[16], i2409[17] )
  i2408.transparency = i2409[18]
  i2408.bounds = i2409[19]
  i2408.pixelsPerUnit = i2409[20]
  i2408.textureWidth = i2409[21]
  i2408.textureHeight = i2409[22]
  i2408.nativeSize = new pc.Vec2( i2409[23], i2409[24] )
  i2408.pivot = new pc.Vec2( i2409[25], i2409[26] )
  i2408.textureRectOffset = new pc.Vec2( i2409[27], i2409[28] )
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2411 = data
  i2410.name = i2411[0]
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2413 = data
  i2412.name = i2413[0]
  i2412.wrapMode = i2413[1]
  i2412.isLooping = !!i2413[2]
  i2412.length = i2413[3]
  var i2415 = i2413[4]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 1) {
    i2414.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2415[i + 0]) );
  }
  i2412.curves = i2414
  var i2417 = i2413[5]
  var i2416 = []
  for(var i = 0; i < i2417.length; i += 1) {
    i2416.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2417[i + 0]) );
  }
  i2412.events = i2416
  i2412.halfPrecision = !!i2413[6]
  i2412._frameRate = i2413[7]
  i2412.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2413[8], i2412.localBounds)
  i2412.hasMuscleCurves = !!i2413[9]
  var i2419 = i2413[10]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 1) {
    i2418.push( i2419[i + 0] );
  }
  i2412.clipMuscleConstant = i2418
  i2412.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2413[11], i2412.clipBindingConstant)
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2423 = data
  i2422.path = i2423[0]
  i2422.hash = i2423[1]
  i2422.componentType = i2423[2]
  i2422.property = i2423[3]
  i2422.keys = i2423[4]
  var i2425 = i2423[5]
  var i2424 = []
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2425[i + 0]) );
  }
  i2422.objectReferenceKeys = i2424
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2429 = data
  i2428.time = i2429[0]
  request.r(i2429[1], i2429[2], 0, i2428, 'value')
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2433 = data
  i2432.functionName = i2433[0]
  i2432.floatParameter = i2433[1]
  i2432.intParameter = i2433[2]
  i2432.stringParameter = i2433[3]
  request.r(i2433[4], i2433[5], 0, i2432, 'objectReferenceParameter')
  i2432.time = i2433[6]
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2435 = data
  i2434.center = new pc.Vec3( i2435[0], i2435[1], i2435[2] )
  i2434.extends = new pc.Vec3( i2435[3], i2435[4], i2435[5] )
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2439 = data
  var i2441 = i2439[0]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 1) {
    i2440.push( i2441[i + 0] );
  }
  i2438.genericBindings = i2440
  var i2443 = i2439[1]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 1) {
    i2442.push( i2443[i + 0] );
  }
  i2438.pptrCurveMapping = i2442
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2445 = data
  i2444.name = i2445[0]
  i2444.ascent = i2445[1]
  i2444.originalLineHeight = i2445[2]
  i2444.fontSize = i2445[3]
  var i2447 = i2445[4]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2447[i + 0]) );
  }
  i2444.characterInfo = i2446
  request.r(i2445[5], i2445[6], 0, i2444, 'texture')
  i2444.originalFontSize = i2445[7]
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2451 = data
  i2450.index = i2451[0]
  i2450.advance = i2451[1]
  i2450.bearing = i2451[2]
  i2450.glyphWidth = i2451[3]
  i2450.glyphHeight = i2451[4]
  i2450.minX = i2451[5]
  i2450.maxX = i2451[6]
  i2450.minY = i2451[7]
  i2450.maxY = i2451[8]
  i2450.uvBottomLeftX = i2451[9]
  i2450.uvBottomLeftY = i2451[10]
  i2450.uvBottomRightX = i2451[11]
  i2450.uvBottomRightY = i2451[12]
  i2450.uvTopLeftX = i2451[13]
  i2450.uvTopLeftY = i2451[14]
  i2450.uvTopRightX = i2451[15]
  i2450.uvTopRightY = i2451[16]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2453 = data
  i2452.name = i2453[0]
  var i2455 = i2453[1]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2455[i + 0]) );
  }
  i2452.layers = i2454
  var i2457 = i2453[2]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2457[i + 0]) );
  }
  i2452.parameters = i2456
  i2452.animationClips = i2453[3]
  i2452.avatarUnsupported = i2453[4]
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2461 = data
  i2460.name = i2461[0]
  i2460.defaultWeight = i2461[1]
  i2460.blendingMode = i2461[2]
  i2460.avatarMask = i2461[3]
  i2460.syncedLayerIndex = i2461[4]
  i2460.syncedLayerAffectsTiming = !!i2461[5]
  i2460.syncedLayers = i2461[6]
  i2460.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2461[7], i2460.stateMachine)
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2463 = data
  i2462.id = i2463[0]
  i2462.name = i2463[1]
  i2462.path = i2463[2]
  var i2465 = i2463[3]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 1) {
    i2464.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2465[i + 0]) );
  }
  i2462.states = i2464
  var i2467 = i2463[4]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2467[i + 0]) );
  }
  i2462.machines = i2466
  var i2469 = i2463[5]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2469[i + 0]) );
  }
  i2462.entryStateTransitions = i2468
  var i2471 = i2463[6]
  var i2470 = []
  for(var i = 0; i < i2471.length; i += 1) {
    i2470.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2471[i + 0]) );
  }
  i2462.exitStateTransitions = i2470
  var i2473 = i2463[7]
  var i2472 = []
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2473[i + 0]) );
  }
  i2462.anyStateTransitions = i2472
  i2462.defaultStateId = i2463[8]
  return i2462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2477 = data
  i2476.id = i2477[0]
  i2476.name = i2477[1]
  i2476.cycleOffset = i2477[2]
  i2476.cycleOffsetParameter = i2477[3]
  i2476.cycleOffsetParameterActive = !!i2477[4]
  i2476.mirror = !!i2477[5]
  i2476.mirrorParameter = i2477[6]
  i2476.mirrorParameterActive = !!i2477[7]
  i2476.motionId = i2477[8]
  i2476.nameHash = i2477[9]
  i2476.fullPathHash = i2477[10]
  i2476.speed = i2477[11]
  i2476.speedParameter = i2477[12]
  i2476.speedParameterActive = !!i2477[13]
  i2476.tag = i2477[14]
  i2476.tagHash = i2477[15]
  i2476.writeDefaultValues = !!i2477[16]
  var i2479 = i2477[17]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 2) {
  request.r(i2479[i + 0], i2479[i + 1], 2, i2478, '')
  }
  i2476.behaviours = i2478
  var i2481 = i2477[18]
  var i2480 = []
  for(var i = 0; i < i2481.length; i += 1) {
    i2480.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2481[i + 0]) );
  }
  i2476.transitions = i2480
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2487 = data
  i2486.fullPath = i2487[0]
  i2486.canTransitionToSelf = !!i2487[1]
  i2486.duration = i2487[2]
  i2486.exitTime = i2487[3]
  i2486.hasExitTime = !!i2487[4]
  i2486.hasFixedDuration = !!i2487[5]
  i2486.interruptionSource = i2487[6]
  i2486.offset = i2487[7]
  i2486.orderedInterruption = !!i2487[8]
  i2486.destinationStateId = i2487[9]
  i2486.isExit = !!i2487[10]
  i2486.mute = !!i2487[11]
  i2486.solo = !!i2487[12]
  var i2489 = i2487[13]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2489[i + 0]) );
  }
  i2486.conditions = i2488
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2495 = data
  i2494.destinationStateId = i2495[0]
  i2494.isExit = !!i2495[1]
  i2494.mute = !!i2495[2]
  i2494.solo = !!i2495[3]
  var i2497 = i2495[4]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2497[i + 0]) );
  }
  i2494.conditions = i2496
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2501 = data
  i2500.mode = i2501[0]
  i2500.parameter = i2501[1]
  i2500.threshold = i2501[2]
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2505 = data
  i2504.defaultBool = !!i2505[0]
  i2504.defaultFloat = i2505[1]
  i2504.defaultInt = i2505[2]
  i2504.name = i2505[3]
  i2504.nameHash = i2505[4]
  i2504.type = i2505[5]
  return i2504
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2506 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2507 = data
  i2506.useSafeMode = !!i2507[0]
  i2506.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2507[1], i2506.safeModeOptions)
  i2506.timeScale = i2507[2]
  i2506.unscaledTimeScale = i2507[3]
  i2506.useSmoothDeltaTime = !!i2507[4]
  i2506.maxSmoothUnscaledTime = i2507[5]
  i2506.rewindCallbackMode = i2507[6]
  i2506.showUnityEditorReport = !!i2507[7]
  i2506.logBehaviour = i2507[8]
  i2506.drawGizmos = !!i2507[9]
  i2506.defaultRecyclable = !!i2507[10]
  i2506.defaultAutoPlay = i2507[11]
  i2506.defaultUpdateType = i2507[12]
  i2506.defaultTimeScaleIndependent = !!i2507[13]
  i2506.defaultEaseType = i2507[14]
  i2506.defaultEaseOvershootOrAmplitude = i2507[15]
  i2506.defaultEasePeriod = i2507[16]
  i2506.defaultAutoKill = !!i2507[17]
  i2506.defaultLoopType = i2507[18]
  i2506.debugMode = !!i2507[19]
  i2506.debugStoreTargetId = !!i2507[20]
  i2506.showPreviewPanel = !!i2507[21]
  i2506.storeSettingsLocation = i2507[22]
  i2506.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2507[23], i2506.modules)
  i2506.createASMDEF = !!i2507[24]
  i2506.showPlayingTweens = !!i2507[25]
  i2506.showPausedTweens = !!i2507[26]
  return i2506
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2508 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2509 = data
  i2508.logBehaviour = i2509[0]
  i2508.nestedTweenFailureBehaviour = i2509[1]
  return i2508
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2510 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2511 = data
  i2510.showPanel = !!i2511[0]
  i2510.audioEnabled = !!i2511[1]
  i2510.physicsEnabled = !!i2511[2]
  i2510.physics2DEnabled = !!i2511[3]
  i2510.spriteEnabled = !!i2511[4]
  i2510.uiEnabled = !!i2511[5]
  i2510.textMeshProEnabled = !!i2511[6]
  i2510.tk2DEnabled = !!i2511[7]
  i2510.deAudioEnabled = !!i2511[8]
  i2510.deUnityExtendedEnabled = !!i2511[9]
  i2510.epoOutlineEnabled = !!i2511[10]
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2513 = data
  var i2515 = i2513[0]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2515[i + 0]) );
  }
  i2512.files = i2514
  i2512.componentToPrefabIds = i2513[1]
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2519 = data
  i2518.path = i2519[0]
  request.r(i2519[1], i2519[2], 0, i2518, 'unityObject')
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2521 = data
  var i2523 = i2521[0]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2523[i + 0]) );
  }
  i2520.scriptsExecutionOrder = i2522
  var i2525 = i2521[1]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2525[i + 0]) );
  }
  i2520.sortingLayers = i2524
  var i2527 = i2521[2]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2527[i + 0]) );
  }
  i2520.cullingLayers = i2526
  i2520.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2521[3], i2520.timeSettings)
  i2520.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2521[4], i2520.physicsSettings)
  i2520.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2521[5], i2520.physics2DSettings)
  i2520.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2521[6], i2520.qualitySettings)
  i2520.enableRealtimeShadows = !!i2521[7]
  i2520.enableAutoInstancing = !!i2521[8]
  i2520.enableStaticBatching = !!i2521[9]
  i2520.enableDynamicBatching = !!i2521[10]
  i2520.usePreservativeDynamicBatching = !!i2521[11]
  i2520.lightmapEncodingQuality = i2521[12]
  i2520.desiredColorSpace = i2521[13]
  var i2529 = i2521[14]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( i2529[i + 0] );
  }
  i2520.allTags = i2528
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2533 = data
  i2532.name = i2533[0]
  i2532.value = i2533[1]
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2537 = data
  i2536.id = i2537[0]
  i2536.name = i2537[1]
  i2536.value = i2537[2]
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2541 = data
  i2540.id = i2541[0]
  i2540.name = i2541[1]
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2543 = data
  i2542.fixedDeltaTime = i2543[0]
  i2542.maximumDeltaTime = i2543[1]
  i2542.timeScale = i2543[2]
  i2542.maximumParticleTimestep = i2543[3]
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2545 = data
  i2544.gravity = new pc.Vec3( i2545[0], i2545[1], i2545[2] )
  i2544.defaultSolverIterations = i2545[3]
  i2544.bounceThreshold = i2545[4]
  i2544.autoSyncTransforms = !!i2545[5]
  i2544.autoSimulation = !!i2545[6]
  var i2547 = i2545[7]
  var i2546 = []
  for(var i = 0; i < i2547.length; i += 1) {
    i2546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2547[i + 0]) );
  }
  i2544.collisionMatrix = i2546
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2551 = data
  i2550.enabled = !!i2551[0]
  i2550.layerId = i2551[1]
  i2550.otherLayerId = i2551[2]
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2553 = data
  request.r(i2553[0], i2553[1], 0, i2552, 'material')
  i2552.gravity = new pc.Vec2( i2553[2], i2553[3] )
  i2552.positionIterations = i2553[4]
  i2552.velocityIterations = i2553[5]
  i2552.velocityThreshold = i2553[6]
  i2552.maxLinearCorrection = i2553[7]
  i2552.maxAngularCorrection = i2553[8]
  i2552.maxTranslationSpeed = i2553[9]
  i2552.maxRotationSpeed = i2553[10]
  i2552.baumgarteScale = i2553[11]
  i2552.baumgarteTOIScale = i2553[12]
  i2552.timeToSleep = i2553[13]
  i2552.linearSleepTolerance = i2553[14]
  i2552.angularSleepTolerance = i2553[15]
  i2552.defaultContactOffset = i2553[16]
  i2552.autoSimulation = !!i2553[17]
  i2552.queriesHitTriggers = !!i2553[18]
  i2552.queriesStartInColliders = !!i2553[19]
  i2552.callbacksOnDisable = !!i2553[20]
  i2552.reuseCollisionCallbacks = !!i2553[21]
  i2552.autoSyncTransforms = !!i2553[22]
  var i2555 = i2553[23]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 1) {
    i2554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2555[i + 0]) );
  }
  i2552.collisionMatrix = i2554
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2559 = data
  i2558.enabled = !!i2559[0]
  i2558.layerId = i2559[1]
  i2558.otherLayerId = i2559[2]
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2561 = data
  var i2563 = i2561[0]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2563[i + 0]) );
  }
  i2560.qualityLevels = i2562
  var i2565 = i2561[1]
  var i2564 = []
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.push( i2565[i + 0] );
  }
  i2560.names = i2564
  i2560.shadows = i2561[2]
  i2560.anisotropicFiltering = i2561[3]
  i2560.antiAliasing = i2561[4]
  i2560.lodBias = i2561[5]
  i2560.shadowCascades = i2561[6]
  i2560.shadowDistance = i2561[7]
  i2560.shadowmaskMode = i2561[8]
  i2560.shadowProjection = i2561[9]
  i2560.shadowResolution = i2561[10]
  i2560.softParticles = !!i2561[11]
  i2560.softVegetation = !!i2561[12]
  i2560.activeColorSpace = i2561[13]
  i2560.desiredColorSpace = i2561[14]
  i2560.masterTextureLimit = i2561[15]
  i2560.maxQueuedFrames = i2561[16]
  i2560.particleRaycastBudget = i2561[17]
  i2560.pixelLightCount = i2561[18]
  i2560.realtimeReflectionProbes = !!i2561[19]
  i2560.shadowCascade2Split = i2561[20]
  i2560.shadowCascade4Split = new pc.Vec3( i2561[21], i2561[22], i2561[23] )
  i2560.streamingMipmapsActive = !!i2561[24]
  i2560.vSyncCount = i2561[25]
  i2560.asyncUploadBufferSize = i2561[26]
  i2560.asyncUploadTimeSlice = i2561[27]
  i2560.billboardsFaceCameraPosition = !!i2561[28]
  i2560.shadowNearPlaneOffset = i2561[29]
  i2560.streamingMipmapsMemoryBudget = i2561[30]
  i2560.maximumLODLevel = i2561[31]
  i2560.streamingMipmapsAddAllCameras = !!i2561[32]
  i2560.streamingMipmapsMaxLevelReduction = i2561[33]
  i2560.streamingMipmapsRenderersPerFrame = i2561[34]
  i2560.resolutionScalingFixedDPIFactor = i2561[35]
  i2560.streamingMipmapsMaxFileIORequests = i2561[36]
  i2560.currentQualityLevel = i2561[37]
  return i2560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i2569 = data
  var i2571 = i2569[0]
  var i2570 = []
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i2571[i + 0]) );
  }
  i2568.groups = i2570
  var i2573 = i2569[1]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i2573[i + 0]) );
  }
  i2568.snapshots = i2572
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i2577 = data
  i2576.id = i2577[0]
  i2576.childGroupIds = i2577[1]
  i2576.name = i2577[2]
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i2580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i2581 = data
  i2580.id = i2581[0]
  var i2583 = i2581[1]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i2583[i + 0]) );
  }
  i2580.parameters = i2582
  return i2580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i2587 = data
  i2586.name = i2587[0]
  i2586.value = i2587[1]
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2591 = data
  i2590.weight = i2591[0]
  i2590.vertices = i2591[1]
  i2590.normals = i2591[2]
  i2590.tangents = i2591[3]
  return i2590
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[77],"78":[44],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[35],"88":[35],"89":[35],"90":[35],"91":[35],"92":[35],"93":[35],"94":[35],"95":[35],"96":[35],"97":[35],"98":[35],"99":[35],"100":[44],"101":[102],"103":[104],"105":[104],"55":[49],"106":[107],"108":[12],"109":[26],"110":[12],"111":[112],"113":[112],"114":[40],"42":[26],"115":[12],"34":[12],"116":[49],"117":[49],"58":[55],"50":[59,49],"118":[49],"57":[55],"119":[49],"120":[49],"121":[49],"122":[49],"123":[49],"124":[49],"125":[49],"126":[49],"127":[49],"128":[59,49],"129":[49],"130":[49],"131":[49],"132":[49],"51":[59,49],"133":[49],"134":[63],"135":[63],"64":[63],"136":[63],"137":[44],"138":[44]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level3_Crown_Playable","UnityEngine.GameObject","BasicDrag","BD_CameraFollow","UnityEngine.SpriteRenderer","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","PlayParticlesOnCollision","UnityEngine.CircleCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.PolygonCollider2D","UnityEngine.BoxCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SpriteMask","BD_Progress","BD_Clamp","BD_ToolRotate","BD_AnimatorDrag","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.Rigidbody2D","BD_SpriteChange","BD_ProgressHelper","DestroyObj","MenuLevel","DG.Tweening.DOTweenAnimation","Level_PoseController","SpriteButton","PlayableRouter","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "8.3";

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

Deserializers.buildID = "92f9a69e-f09b-4177-b681-0e63fa76b596";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

