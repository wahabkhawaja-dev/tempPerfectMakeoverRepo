var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1942 = root || request.c( 'UnityEngine.JointSpring' )
  var i1943 = data
  i1942.spring = i1943[0]
  i1942.damper = i1943[1]
  i1942.targetPosition = i1943[2]
  return i1942
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1944 = root || request.c( 'UnityEngine.JointMotor' )
  var i1945 = data
  i1944.m_TargetVelocity = i1945[0]
  i1944.m_Force = i1945[1]
  i1944.m_FreeSpin = i1945[2]
  return i1944
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1946 = root || request.c( 'UnityEngine.JointLimits' )
  var i1947 = data
  i1946.m_Min = i1947[0]
  i1946.m_Max = i1947[1]
  i1946.m_Bounciness = i1947[2]
  i1946.m_BounceMinVelocity = i1947[3]
  i1946.m_ContactDistance = i1947[4]
  i1946.minBounce = i1947[5]
  i1946.maxBounce = i1947[6]
  return i1946
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1948 = root || request.c( 'UnityEngine.JointDrive' )
  var i1949 = data
  i1948.m_PositionSpring = i1949[0]
  i1948.m_PositionDamper = i1949[1]
  i1948.m_MaximumForce = i1949[2]
  i1948.m_UseAcceleration = i1949[3]
  return i1948
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1950 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1951 = data
  i1950.m_Spring = i1951[0]
  i1950.m_Damper = i1951[1]
  return i1950
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1952 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1953 = data
  i1952.m_Limit = i1953[0]
  i1952.m_Bounciness = i1953[1]
  i1952.m_ContactDistance = i1953[2]
  return i1952
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1954 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1955 = data
  i1954.m_ExtremumSlip = i1955[0]
  i1954.m_ExtremumValue = i1955[1]
  i1954.m_AsymptoteSlip = i1955[2]
  i1954.m_AsymptoteValue = i1955[3]
  i1954.m_Stiffness = i1955[4]
  return i1954
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1956 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1957 = data
  i1956.m_LowerAngle = i1957[0]
  i1956.m_UpperAngle = i1957[1]
  return i1956
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1958 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1959 = data
  i1958.m_MotorSpeed = i1959[0]
  i1958.m_MaximumMotorTorque = i1959[1]
  return i1958
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1960 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1961 = data
  i1960.m_DampingRatio = i1961[0]
  i1960.m_Frequency = i1961[1]
  i1960.m_Angle = i1961[2]
  return i1960
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1962 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1963 = data
  i1962.m_LowerTranslation = i1963[0]
  i1962.m_UpperTranslation = i1963[1]
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1964 = root || new pc.UnityMaterial()
  var i1965 = data
  i1964.name = i1965[0]
  request.r(i1965[1], i1965[2], 0, i1964, 'shader')
  i1964.renderQueue = i1965[3]
  i1964.enableInstancing = !!i1965[4]
  var i1967 = i1965[5]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1967[i + 0]) );
  }
  i1964.floatParameters = i1966
  var i1969 = i1965[6]
  var i1968 = []
  for(var i = 0; i < i1969.length; i += 1) {
    i1968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1969[i + 0]) );
  }
  i1964.colorParameters = i1968
  var i1971 = i1965[7]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1971[i + 0]) );
  }
  i1964.vectorParameters = i1970
  var i1973 = i1965[8]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 1) {
    i1972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1973[i + 0]) );
  }
  i1964.textureParameters = i1972
  var i1975 = i1965[9]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1975[i + 0]) );
  }
  i1964.materialFlags = i1974
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1979 = data
  i1978.name = i1979[0]
  i1978.value = i1979[1]
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1983 = data
  i1982.name = i1983[0]
  i1982.value = new pc.Color(i1983[1], i1983[2], i1983[3], i1983[4])
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1987 = data
  i1986.name = i1987[0]
  i1986.value = new pc.Vec4( i1987[1], i1987[2], i1987[3], i1987[4] )
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1991 = data
  i1990.name = i1991[0]
  request.r(i1991[1], i1991[2], 0, i1990, 'value')
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1995 = data
  i1994.name = i1995[0]
  i1994.enabled = !!i1995[1]
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1997 = data
  i1996.name = i1997[0]
  i1996.width = i1997[1]
  i1996.height = i1997[2]
  i1996.mipmapCount = i1997[3]
  i1996.anisoLevel = i1997[4]
  i1996.filterMode = i1997[5]
  i1996.hdr = !!i1997[6]
  i1996.format = i1997[7]
  i1996.wrapMode = i1997[8]
  i1996.alphaIsTransparency = !!i1997[9]
  i1996.alphaSource = i1997[10]
  i1996.graphicsFormat = i1997[11]
  i1996.sRGBTexture = !!i1997[12]
  i1996.desiredColorSpace = i1997[13]
  i1996.wrapU = i1997[14]
  i1996.wrapV = i1997[15]
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1999 = data
  i1998.name = i1999[0]
  i1998.halfPrecision = !!i1999[1]
  i1998.useSimplification = !!i1999[2]
  i1998.useUInt32IndexFormat = !!i1999[3]
  i1998.vertexCount = i1999[4]
  i1998.aabb = i1999[5]
  var i2001 = i1999[6]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( !!i2001[i + 0] );
  }
  i1998.streams = i2000
  i1998.vertices = i1999[7]
  var i2003 = i1999[8]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2003[i + 0]) );
  }
  i1998.subMeshes = i2002
  var i2005 = i1999[9]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 16) {
    i2004.push( new pc.Mat4().setData(i2005[i + 0], i2005[i + 1], i2005[i + 2], i2005[i + 3],  i2005[i + 4], i2005[i + 5], i2005[i + 6], i2005[i + 7],  i2005[i + 8], i2005[i + 9], i2005[i + 10], i2005[i + 11],  i2005[i + 12], i2005[i + 13], i2005[i + 14], i2005[i + 15]) );
  }
  i1998.bindposes = i2004
  var i2007 = i1999[10]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 1) {
    i2006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2007[i + 0]) );
  }
  i1998.blendShapes = i2006
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2013 = data
  i2012.triangles = i2013[0]
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2019 = data
  i2018.name = i2019[0]
  var i2021 = i2019[1]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 1) {
    i2020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2021[i + 0]) );
  }
  i2018.frames = i2020
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2023 = data
  i2022.position = new pc.Vec3( i2023[0], i2023[1], i2023[2] )
  i2022.scale = new pc.Vec3( i2023[3], i2023[4], i2023[5] )
  i2022.rotation = new pc.Quat(i2023[6], i2023[7], i2023[8], i2023[9])
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2025 = data
  i2024.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2025[0], i2024.main)
  i2024.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2025[1], i2024.colorBySpeed)
  i2024.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2025[2], i2024.colorOverLifetime)
  i2024.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2025[3], i2024.emission)
  i2024.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2025[4], i2024.rotationBySpeed)
  i2024.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2025[5], i2024.rotationOverLifetime)
  i2024.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2025[6], i2024.shape)
  i2024.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2025[7], i2024.sizeBySpeed)
  i2024.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2025[8], i2024.sizeOverLifetime)
  i2024.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2025[9], i2024.textureSheetAnimation)
  i2024.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2025[10], i2024.velocityOverLifetime)
  i2024.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2025[11], i2024.noise)
  i2024.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2025[12], i2024.inheritVelocity)
  i2024.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2025[13], i2024.forceOverLifetime)
  i2024.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2025[14], i2024.limitVelocityOverLifetime)
  i2024.useAutoRandomSeed = !!i2025[15]
  i2024.randomSeed = i2025[16]
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2026 = root || new pc.ParticleSystemMain()
  var i2027 = data
  i2026.duration = i2027[0]
  i2026.loop = !!i2027[1]
  i2026.prewarm = !!i2027[2]
  i2026.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[3], i2026.startDelay)
  i2026.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[4], i2026.startLifetime)
  i2026.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[5], i2026.startSpeed)
  i2026.startSize3D = !!i2027[6]
  i2026.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[7], i2026.startSizeX)
  i2026.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[8], i2026.startSizeY)
  i2026.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[9], i2026.startSizeZ)
  i2026.startRotation3D = !!i2027[10]
  i2026.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[11], i2026.startRotationX)
  i2026.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[12], i2026.startRotationY)
  i2026.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[13], i2026.startRotationZ)
  i2026.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2027[14], i2026.startColor)
  i2026.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2027[15], i2026.gravityModifier)
  i2026.simulationSpace = i2027[16]
  request.r(i2027[17], i2027[18], 0, i2026, 'customSimulationSpace')
  i2026.simulationSpeed = i2027[19]
  i2026.useUnscaledTime = !!i2027[20]
  i2026.scalingMode = i2027[21]
  i2026.playOnAwake = !!i2027[22]
  i2026.maxParticles = i2027[23]
  i2026.emitterVelocityMode = i2027[24]
  i2026.stopAction = i2027[25]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2028 = root || new pc.MinMaxCurve()
  var i2029 = data
  i2028.mode = i2029[0]
  i2028.curveMin = new pc.AnimationCurve( { keys_flow: i2029[1] } )
  i2028.curveMax = new pc.AnimationCurve( { keys_flow: i2029[2] } )
  i2028.curveMultiplier = i2029[3]
  i2028.constantMin = i2029[4]
  i2028.constantMax = i2029[5]
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2030 = root || new pc.MinMaxGradient()
  var i2031 = data
  i2030.mode = i2031[0]
  i2030.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2031[1], i2030.gradientMin)
  i2030.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2031[2], i2030.gradientMax)
  i2030.colorMin = new pc.Color(i2031[3], i2031[4], i2031[5], i2031[6])
  i2030.colorMax = new pc.Color(i2031[7], i2031[8], i2031[9], i2031[10])
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2033 = data
  i2032.mode = i2033[0]
  var i2035 = i2033[1]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 1) {
    i2034.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2035[i + 0]) );
  }
  i2032.colorKeys = i2034
  var i2037 = i2033[2]
  var i2036 = []
  for(var i = 0; i < i2037.length; i += 1) {
    i2036.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2037[i + 0]) );
  }
  i2032.alphaKeys = i2036
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2038 = root || new pc.ParticleSystemColorBySpeed()
  var i2039 = data
  i2038.enabled = !!i2039[0]
  i2038.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2039[1], i2038.color)
  i2038.range = new pc.Vec2( i2039[2], i2039[3] )
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2043 = data
  i2042.color = new pc.Color(i2043[0], i2043[1], i2043[2], i2043[3])
  i2042.time = i2043[4]
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2047 = data
  i2046.alpha = i2047[0]
  i2046.time = i2047[1]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2048 = root || new pc.ParticleSystemColorOverLifetime()
  var i2049 = data
  i2048.enabled = !!i2049[0]
  i2048.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2049[1], i2048.color)
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2050 = root || new pc.ParticleSystemEmitter()
  var i2051 = data
  i2050.enabled = !!i2051[0]
  i2050.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2051[1], i2050.rateOverTime)
  i2050.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2051[2], i2050.rateOverDistance)
  var i2053 = i2051[3]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2053[i + 0]) );
  }
  i2050.bursts = i2052
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2056 = root || new pc.ParticleSystemBurst()
  var i2057 = data
  i2056.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2057[0], i2056.count)
  i2056.cycleCount = i2057[1]
  i2056.minCount = i2057[2]
  i2056.maxCount = i2057[3]
  i2056.repeatInterval = i2057[4]
  i2056.time = i2057[5]
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2058 = root || new pc.ParticleSystemRotationBySpeed()
  var i2059 = data
  i2058.enabled = !!i2059[0]
  i2058.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[1], i2058.x)
  i2058.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[2], i2058.y)
  i2058.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[3], i2058.z)
  i2058.separateAxes = !!i2059[4]
  i2058.range = new pc.Vec2( i2059[5], i2059[6] )
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2060 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2061 = data
  i2060.enabled = !!i2061[0]
  i2060.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2061[1], i2060.x)
  i2060.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2061[2], i2060.y)
  i2060.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2061[3], i2060.z)
  i2060.separateAxes = !!i2061[4]
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2062 = root || new pc.ParticleSystemShape()
  var i2063 = data
  i2062.enabled = !!i2063[0]
  i2062.shapeType = i2063[1]
  i2062.randomDirectionAmount = i2063[2]
  i2062.sphericalDirectionAmount = i2063[3]
  i2062.randomPositionAmount = i2063[4]
  i2062.alignToDirection = !!i2063[5]
  i2062.radius = i2063[6]
  i2062.radiusMode = i2063[7]
  i2062.radiusSpread = i2063[8]
  i2062.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2063[9], i2062.radiusSpeed)
  i2062.radiusThickness = i2063[10]
  i2062.angle = i2063[11]
  i2062.length = i2063[12]
  i2062.boxThickness = new pc.Vec3( i2063[13], i2063[14], i2063[15] )
  i2062.meshShapeType = i2063[16]
  request.r(i2063[17], i2063[18], 0, i2062, 'mesh')
  request.r(i2063[19], i2063[20], 0, i2062, 'meshRenderer')
  request.r(i2063[21], i2063[22], 0, i2062, 'skinnedMeshRenderer')
  i2062.useMeshMaterialIndex = !!i2063[23]
  i2062.meshMaterialIndex = i2063[24]
  i2062.useMeshColors = !!i2063[25]
  i2062.normalOffset = i2063[26]
  i2062.arc = i2063[27]
  i2062.arcMode = i2063[28]
  i2062.arcSpread = i2063[29]
  i2062.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2063[30], i2062.arcSpeed)
  i2062.donutRadius = i2063[31]
  i2062.position = new pc.Vec3( i2063[32], i2063[33], i2063[34] )
  i2062.rotation = new pc.Vec3( i2063[35], i2063[36], i2063[37] )
  i2062.scale = new pc.Vec3( i2063[38], i2063[39], i2063[40] )
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2064 = root || new pc.ParticleSystemSizeBySpeed()
  var i2065 = data
  i2064.enabled = !!i2065[0]
  i2064.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2065[1], i2064.x)
  i2064.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2065[2], i2064.y)
  i2064.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2065[3], i2064.z)
  i2064.separateAxes = !!i2065[4]
  i2064.range = new pc.Vec2( i2065[5], i2065[6] )
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2066 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2067 = data
  i2066.enabled = !!i2067[0]
  i2066.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2067[1], i2066.x)
  i2066.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2067[2], i2066.y)
  i2066.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2067[3], i2066.z)
  i2066.separateAxes = !!i2067[4]
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2068 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2069 = data
  i2068.enabled = !!i2069[0]
  i2068.mode = i2069[1]
  i2068.animation = i2069[2]
  i2068.numTilesX = i2069[3]
  i2068.numTilesY = i2069[4]
  i2068.useRandomRow = !!i2069[5]
  i2068.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2069[6], i2068.frameOverTime)
  i2068.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2069[7], i2068.startFrame)
  i2068.cycleCount = i2069[8]
  i2068.rowIndex = i2069[9]
  i2068.flipU = i2069[10]
  i2068.flipV = i2069[11]
  i2068.spriteCount = i2069[12]
  var i2071 = i2069[13]
  var i2070 = []
  for(var i = 0; i < i2071.length; i += 2) {
  request.r(i2071[i + 0], i2071[i + 1], 2, i2070, '')
  }
  i2068.sprites = i2070
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2074 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2075 = data
  i2074.enabled = !!i2075[0]
  i2074.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[1], i2074.x)
  i2074.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[2], i2074.y)
  i2074.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[3], i2074.z)
  i2074.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[4], i2074.radial)
  i2074.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[5], i2074.speedModifier)
  i2074.space = i2075[6]
  i2074.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[7], i2074.orbitalX)
  i2074.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[8], i2074.orbitalY)
  i2074.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[9], i2074.orbitalZ)
  i2074.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[10], i2074.orbitalOffsetX)
  i2074.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[11], i2074.orbitalOffsetY)
  i2074.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[12], i2074.orbitalOffsetZ)
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2076 = root || new pc.ParticleSystemNoise()
  var i2077 = data
  i2076.enabled = !!i2077[0]
  i2076.separateAxes = !!i2077[1]
  i2076.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[2], i2076.strengthX)
  i2076.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[3], i2076.strengthY)
  i2076.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[4], i2076.strengthZ)
  i2076.frequency = i2077[5]
  i2076.damping = !!i2077[6]
  i2076.octaveCount = i2077[7]
  i2076.octaveMultiplier = i2077[8]
  i2076.octaveScale = i2077[9]
  i2076.quality = i2077[10]
  i2076.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[11], i2076.scrollSpeed)
  i2076.scrollSpeedMultiplier = i2077[12]
  i2076.remapEnabled = !!i2077[13]
  i2076.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[14], i2076.remapX)
  i2076.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[15], i2076.remapY)
  i2076.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[16], i2076.remapZ)
  i2076.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[17], i2076.positionAmount)
  i2076.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[18], i2076.rotationAmount)
  i2076.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[19], i2076.sizeAmount)
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2078 = root || new pc.ParticleSystemInheritVelocity()
  var i2079 = data
  i2078.enabled = !!i2079[0]
  i2078.mode = i2079[1]
  i2078.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2079[2], i2078.curve)
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2080 = root || new pc.ParticleSystemForceOverLifetime()
  var i2081 = data
  i2080.enabled = !!i2081[0]
  i2080.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2081[1], i2080.x)
  i2080.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2081[2], i2080.y)
  i2080.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2081[3], i2080.z)
  i2080.space = i2081[4]
  i2080.randomized = !!i2081[5]
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2082 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2083 = data
  i2082.enabled = !!i2083[0]
  i2082.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[1], i2082.limit)
  i2082.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[2], i2082.limitX)
  i2082.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[3], i2082.limitY)
  i2082.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[4], i2082.limitZ)
  i2082.dampen = i2083[5]
  i2082.separateAxes = !!i2083[6]
  i2082.space = i2083[7]
  i2082.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[8], i2082.drag)
  i2082.multiplyDragByParticleSize = !!i2083[9]
  i2082.multiplyDragByParticleVelocity = !!i2083[10]
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2085 = data
  request.r(i2085[0], i2085[1], 0, i2084, 'mesh')
  i2084.meshCount = i2085[2]
  i2084.activeVertexStreamsCount = i2085[3]
  i2084.alignment = i2085[4]
  i2084.renderMode = i2085[5]
  i2084.sortMode = i2085[6]
  i2084.lengthScale = i2085[7]
  i2084.velocityScale = i2085[8]
  i2084.cameraVelocityScale = i2085[9]
  i2084.normalDirection = i2085[10]
  i2084.sortingFudge = i2085[11]
  i2084.minParticleSize = i2085[12]
  i2084.maxParticleSize = i2085[13]
  i2084.pivot = new pc.Vec3( i2085[14], i2085[15], i2085[16] )
  request.r(i2085[17], i2085[18], 0, i2084, 'trailMaterial')
  i2084.applyActiveColorSpace = !!i2085[19]
  i2084.enabled = !!i2085[20]
  request.r(i2085[21], i2085[22], 0, i2084, 'sharedMaterial')
  var i2087 = i2085[23]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 2) {
  request.r(i2087[i + 0], i2087[i + 1], 2, i2086, '')
  }
  i2084.sharedMaterials = i2086
  i2084.receiveShadows = !!i2085[24]
  i2084.shadowCastingMode = i2085[25]
  i2084.sortingLayerID = i2085[26]
  i2084.sortingOrder = i2085[27]
  i2084.lightmapIndex = i2085[28]
  i2084.lightmapSceneIndex = i2085[29]
  i2084.lightmapScaleOffset = new pc.Vec4( i2085[30], i2085[31], i2085[32], i2085[33] )
  i2084.lightProbeUsage = i2085[34]
  i2084.reflectionProbeUsage = i2085[35]
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2091 = data
  i2090.name = i2091[0]
  i2090.tagId = i2091[1]
  i2090.enabled = !!i2091[2]
  i2090.isStatic = !!i2091[3]
  i2090.layer = i2091[4]
  return i2090
}

Deserializers["Level3_Crown_Playable_NewTest"] = function (request, data, root) {
  var i2092 = root || request.c( 'Level3_Crown_Playable_NewTest' )
  var i2093 = data
  i2092.MainZoom = request.d('ZoomPos', i2093[0], i2092.MainZoom)
  request.r(i2093[1], i2093[2], 0, i2092, 'View1')
  request.r(i2093[3], i2093[4], 0, i2092, 'View2')
  i2092.ZoomStep1 = request.d('ZoomPos', i2093[5], i2092.ZoomStep1)
  request.r(i2093[6], i2093[7], 0, i2092, 'ToolStep1')
  request.r(i2093[8], i2093[9], 0, i2092, 'ToolStep1CameraFollow')
  request.r(i2093[10], i2093[11], 0, i2092, 'Step1Col')
  request.r(i2093[12], i2093[13], 0, i2092, 'DustSR_1')
  i2092.ZoomStep2 = request.d('ZoomPos', i2093[14], i2092.ZoomStep2)
  request.r(i2093[15], i2093[16], 0, i2092, 'ToolStep2')
  request.r(i2093[17], i2093[18], 0, i2092, 'ToolStep2CameraFollow')
  var i2095 = i2093[19]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 2) {
  request.r(i2095[i + 0], i2095[i + 1], 2, i2094, '')
  }
  i2092.SRsToFadeOut_2 = i2094
  request.r(i2093[20], i2093[21], 0, i2092, 'SpraySR_2')
  i2092.ZoomStep3 = request.d('ZoomPos', i2093[22], i2092.ZoomStep3)
  request.r(i2093[23], i2093[24], 0, i2092, 'ToolStep3')
  request.r(i2093[25], i2093[26], 0, i2092, 'ToolStep3CameraFollow')
  request.r(i2093[27], i2093[28], 0, i2092, 'Step3Col')
  request.r(i2093[29], i2093[30], 0, i2092, 'Mix')
  request.r(i2093[31], i2093[32], 0, i2092, 'MixE')
  i2092.levelName = i2093[33]
  i2092.levelReward = i2093[34]
  request.r(i2093[35], i2093[36], 0, i2092, 'LevelIcon')
  request.r(i2093[37], i2093[38], 0, i2092, 'Level_BG')
  var i2097 = i2093[39]
  var i2096 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2097.length; i += 2) {
  request.r(i2097[i + 0], i2097[i + 1], 1, i2096, '')
  }
  i2092.ToolIcons = i2096
  var i2099 = i2093[40]
  var i2098 = []
  for(var i = 0; i < i2099.length; i += 2) {
  request.r(i2099[i + 0], i2099[i + 1], 2, i2098, '')
  }
  i2092.AllDrags = i2098
  var i2101 = i2093[41]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 2) {
  request.r(i2101[i + 0], i2101[i + 1], 2, i2100, '')
  }
  i2092.AllSources = i2100
  var i2103 = i2093[42]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 2) {
  request.r(i2103[i + 0], i2103[i + 1], 2, i2102, '')
  }
  i2092.AllScratches = i2102
  i2092.stepsDone = i2093[43]
  i2092.levelNo = i2093[44]
  i2092.partNo = i2093[45]
  var i2105 = i2093[46]
  var i2104 = []
  for(var i = 0; i < i2105.length; i += 2) {
  request.r(i2105[i + 0], i2105[i + 1], 2, i2104, '')
  }
  i2092.disableOnLevelComplete = i2104
  i2092.zoomBeforeComplete = !!i2093[47]
  i2092.completionZoom = request.d('ZoomPos', i2093[48], i2092.completionZoom)
  i2092.completionZoomDuration = i2093[49]
  return i2092
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i2106 = root || request.c( 'ZoomPos' )
  var i2107 = data
  i2106.CameraPos = new pc.Vec3( i2107[0], i2107[1], i2107[2] )
  i2106.CameraFOV = i2107[3]
  return i2106
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i2120 = root || request.c( 'PlayableCTA' )
  var i2121 = data
  i2120.trigger = i2121[0]
  i2120.autoCtaOnLevelComplete = !!i2121[1]
  i2120.afterSeconds = i2121[2]
  i2120.afterTaps = i2121[3]
  request.r(i2121[4], i2121[5], 0, i2120, 'scratchProgress')
  i2120.scratchIndex = i2121[6]
  i2120.progressThreshold = i2121[7]
  i2120.blockInputOnFire = !!i2121[8]
  i2120.refireOnEveryTap = !!i2121[9]
  i2120.refireDelay = i2121[10]
  i2120.showEndCard = !!i2121[11]
  request.r(i2121[12], i2121[13], 0, i2120, 'endCard')
  var i2123 = i2121[14]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 2) {
  request.r(i2123[i + 0], i2123[i + 1], 2, i2122, '')
  }
  i2120.thingsToDisableOnEndCard = i2122
  i2120.endCardDelay = i2121[15]
  i2120.showEndCardOnProgressTrigger = !!i2121[16]
  i2120.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i2121[17], i2120.onCtaFired)
  i2120.logWhenFired = !!i2121[18]
  return i2120
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2124 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2125 = data
  i2124.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2125[0], i2124.m_PersistentCalls)
  return i2124
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2126 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2127 = data
  var i2129 = i2127[0]
  var i2128 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.add(request.d('UnityEngine.Events.PersistentCall', i2129[i + 0]));
  }
  i2126.m_Calls = i2128
  return i2126
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2132 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2133 = data
  request.r(i2133[0], i2133[1], 0, i2132, 'm_Target')
  i2132.m_TargetAssemblyTypeName = i2133[2]
  i2132.m_MethodName = i2133[3]
  i2132.m_Mode = i2133[4]
  i2132.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2133[5], i2132.m_Arguments)
  i2132.m_CallState = i2133[6]
  return i2132
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i2134 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i2135 = data
  request.r(i2135[0], i2135[1], 0, i2134, 'MainCamera')
  i2134.RenderType = i2135[2]
  request.r(i2135[3], i2135[4], 0, i2134, 'ScratchSurfaceSprite')
  i2134.ScratchSurfaceSpriteHasAlpha = !!i2135[5]
  i2134.MaskProgressCutOffValue = i2135[6]
  request.r(i2135[7], i2135[8], 0, i2134, 'EraseTexture')
  i2134.EraseTextureScale = new pc.Vec2( i2135[9], i2135[10] )
  i2134.InputEnabled = !!i2135[11]
  request.r(i2135[12], i2135[13], 0, i2134, 'Card')
  i2134.Mode = i2135[14]
  request.r(i2135[15], i2135[16], 0, i2134, 'Progress')
  request.r(i2135[17], i2135[18], 0, i2134, 'MeshCard')
  request.r(i2135[19], i2135[20], 0, i2134, 'SpriteCard')
  request.r(i2135[21], i2135[22], 0, i2134, 'ImageCard')
  request.r(i2135[23], i2135[24], 0, i2134, 'MaskShader')
  request.r(i2135[25], i2135[26], 0, i2134, 'BrushShader')
  request.r(i2135[27], i2135[28], 0, i2134, 'MaskProgressShader')
  request.r(i2135[29], i2135[30], 0, i2134, 'MaskProgressCutOffShader')
  return i2134
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i2136 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i2137 = data
  request.r(i2137[0], i2137[1], 0, i2136, 'MainCamera')
  request.r(i2137[2], i2137[3], 0, i2136, 'Surface')
  i2136.RenderTextureQuality = i2137[4]
  request.r(i2137[5], i2137[6], 0, i2136, 'Eraser')
  request.r(i2137[7], i2137[8], 0, i2136, 'Progress')
  request.r(i2137[9], i2137[10], 0, i2136, 'ScratchSurface')
  request.r(i2137[11], i2137[12], 0, i2136, 'RenderTexture')
  i2136.BrushScale = new pc.Vec2( i2137[13], i2137[14] )
  request.r(i2137[15], i2137[16], 0, i2136, 'ToolTip')
  i2136.InputEnabled = !!i2137[17]
  i2136.IsScratching = !!i2137[18]
  i2136.useChangingScale = !!i2137[19]
  i2136.useGivenBrushScale = !!i2137[20]
  i2136.canSpreadMask = !!i2137[21]
  i2136.shouldPaintHoles = !!i2137[22]
  i2136.canRotateTip = !!i2137[23]
  i2136._mode = i2137[24]
  return i2136
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i2138 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i2139 = data
  request.r(i2139[0], i2139[1], 0, i2138, 'Card')
  i2138.currentProgress = i2139[2]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2141 = data
  i2140.color = new pc.Color(i2141[0], i2141[1], i2141[2], i2141[3])
  request.r(i2141[4], i2141[5], 0, i2140, 'sprite')
  i2140.flipX = !!i2141[6]
  i2140.flipY = !!i2141[7]
  i2140.drawMode = i2141[8]
  i2140.size = new pc.Vec2( i2141[9], i2141[10] )
  i2140.tileMode = i2141[11]
  i2140.adaptiveModeThreshold = i2141[12]
  i2140.maskInteraction = i2141[13]
  i2140.spriteSortPoint = i2141[14]
  i2140.enabled = !!i2141[15]
  request.r(i2141[16], i2141[17], 0, i2140, 'sharedMaterial')
  var i2143 = i2141[18]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 2) {
  request.r(i2143[i + 0], i2143[i + 1], 2, i2142, '')
  }
  i2140.sharedMaterials = i2142
  i2140.receiveShadows = !!i2141[19]
  i2140.shadowCastingMode = i2141[20]
  i2140.sortingLayerID = i2141[21]
  i2140.sortingOrder = i2141[22]
  i2140.lightmapIndex = i2141[23]
  i2140.lightmapSceneIndex = i2141[24]
  i2140.lightmapScaleOffset = new pc.Vec4( i2141[25], i2141[26], i2141[27], i2141[28] )
  i2140.lightProbeUsage = i2141[29]
  i2140.reflectionProbeUsage = i2141[30]
  return i2140
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i2144 = root || request.c( 'PlayParticlesOnCollision' )
  var i2145 = data
  request.r(i2145[0], i2145[1], 0, i2144, 'Target')
  request.r(i2145[2], i2145[3], 0, i2144, 'ParticlePrefab')
  i2144.destroyIt = !!i2145[4]
  i2144.stayAtPlace = !!i2145[5]
  i2144.disableOnCollision = !!i2145[6]
  i2144.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i2145[7], i2144.OnCollisionEvent)
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2147 = data
  i2146.radius = i2147[0]
  i2146.enabled = !!i2147[1]
  i2146.isTrigger = !!i2147[2]
  i2146.usedByEffector = !!i2147[3]
  i2146.density = i2147[4]
  i2146.offset = new pc.Vec2( i2147[5], i2147[6] )
  request.r(i2147[7], i2147[8], 0, i2146, 'material')
  return i2146
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i2148 = root || request.c( 'PlaySfxOnCollision' )
  var i2149 = data
  request.r(i2149[0], i2149[1], 0, i2148, 'Tip')
  i2148.Mode = i2149[2]
  request.r(i2149[3], i2149[4], 0, i2148, 'DragInput')
  request.r(i2149[5], i2149[6], 0, i2148, 'Source')
  i2148.startVol = i2149[7]
  i2148.targetVol = i2149[8]
  i2148.duration = i2149[9]
  request.r(i2149[10], i2149[11], 0, i2148, 'Particles')
  i2148.isDone = !!i2149[12]
  i2148.isInArea = !!i2149[13]
  i2148.isPlaying = !!i2149[14]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2151 = data
  request.r(i2151[0], i2151[1], 0, i2150, 'clip')
  request.r(i2151[2], i2151[3], 0, i2150, 'outputAudioMixerGroup')
  i2150.playOnAwake = !!i2151[4]
  i2150.loop = !!i2151[5]
  i2150.time = i2151[6]
  i2150.volume = i2151[7]
  i2150.pitch = i2151[8]
  i2150.enabled = !!i2151[9]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i2153 = data
  i2152.usedByComposite = !!i2153[0]
  i2152.autoTiling = !!i2153[1]
  var i2155 = i2153[2]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 1) {
  var i2157 = i2155[i + 0]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 2) {
    i2156.push( new pc.Vec2( i2157[i + 0], i2157[i + 1] ) );
  }
    i2154.push( i2156 );
  }
  i2152.points = i2154
  i2152.enabled = !!i2153[3]
  i2152.isTrigger = !!i2153[4]
  i2152.usedByEffector = !!i2153[5]
  i2152.density = i2153[6]
  i2152.offset = new pc.Vec2( i2153[7], i2153[8] )
  request.r(i2153[9], i2153[10], 0, i2152, 'material')
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2165 = data
  i2164.usedByComposite = !!i2165[0]
  i2164.autoTiling = !!i2165[1]
  i2164.size = new pc.Vec2( i2165[2], i2165[3] )
  i2164.edgeRadius = i2165[4]
  i2164.enabled = !!i2165[5]
  i2164.isTrigger = !!i2165[6]
  i2164.usedByEffector = !!i2165[7]
  i2164.density = i2165[8]
  i2164.offset = new pc.Vec2( i2165[9], i2165[10] )
  request.r(i2165[11], i2165[12], 0, i2164, 'material')
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2173 = data
  i2172.frontSortingLayerID = i2173[0]
  i2172.frontSortingOrder = i2173[1]
  i2172.backSortingLayerID = i2173[2]
  i2172.backSortingOrder = i2173[3]
  i2172.alphaCutoff = i2173[4]
  request.r(i2173[5], i2173[6], 0, i2172, 'sprite')
  i2172.tileMode = i2173[7]
  i2172.isCustomRangeActive = !!i2173[8]
  i2172.spriteSortPoint = i2173[9]
  i2172.enabled = !!i2173[10]
  request.r(i2173[11], i2173[12], 0, i2172, 'sharedMaterial')
  var i2175 = i2173[13]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 2) {
  request.r(i2175[i + 0], i2175[i + 1], 2, i2174, '')
  }
  i2172.sharedMaterials = i2174
  i2172.receiveShadows = !!i2173[14]
  i2172.shadowCastingMode = i2173[15]
  i2172.sortingLayerID = i2173[16]
  i2172.sortingOrder = i2173[17]
  i2172.lightmapIndex = i2173[18]
  i2172.lightmapSceneIndex = i2173[19]
  i2172.lightmapScaleOffset = new pc.Vec4( i2173[20], i2173[21], i2173[22], i2173[23] )
  i2172.lightProbeUsage = i2173[24]
  i2172.reflectionProbeUsage = i2173[25]
  return i2172
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i2176 = root || request.c( 'ActionOnTap' )
  var i2177 = data
  i2176.OnTap = request.d('UnityEngine.Events.UnityEvent', i2177[0], i2176.OnTap)
  i2176.OnTapExtra = request.d('System.Action', i2177[1], i2176.OnTapExtra)
  return i2176
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2178 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2179 = data
  request.r(i2179[0], i2179[1], 0, i2178, 'm_ObjectArgument')
  i2178.m_ObjectArgumentAssemblyTypeName = i2179[2]
  i2178.m_IntArgument = i2179[3]
  i2178.m_FloatArgument = i2179[4]
  i2178.m_StringArgument = i2179[5]
  i2178.m_BoolArgument = !!i2179[6]
  return i2178
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2180 = root || request.c( 'System.Action' )
  var i2181 = data
  return i2180
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i2182 = root || request.c( 'BD_AnimationHelper' )
  var i2183 = data
  i2182.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i2183[0], i2182.OnAnimationComplete)
  request.r(i2183[1], i2183[2], 0, i2182, 'sfxClip')
  return i2182
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i2184 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i2185 = data
  request.r(i2185[0], i2185[1], 0, i2184, 'm_RootBone')
  var i2187 = i2185[2]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 2) {
  request.r(i2187[i + 0], i2187[i + 1], 2, i2186, '')
  }
  i2184.m_BoneTransforms = i2186
  i2184.m_AlwaysUpdate = !!i2185[3]
  i2184.m_AutoRebind = !!i2185[4]
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i2189 = data
  var i2191 = i2189[0]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 3) {
    i2190.push( new pc.Vec3( i2191[i + 0], i2191[i + 1], i2191[i + 2] ) );
  }
  i2188.positions = i2190
  i2188.positionCount = i2189[1]
  i2188.time = i2189[2]
  i2188.startWidth = i2189[3]
  i2188.endWidth = i2189[4]
  i2188.widthMultiplier = i2189[5]
  i2188.autodestruct = !!i2189[6]
  i2188.emitting = !!i2189[7]
  i2188.numCornerVertices = i2189[8]
  i2188.numCapVertices = i2189[9]
  i2188.minVertexDistance = i2189[10]
  i2188.colorGradient = i2189[11] ? new pc.ColorGradient(i2189[11][0], i2189[11][1], i2189[11][2]) : null
  i2188.startColor = new pc.Color(i2189[12], i2189[13], i2189[14], i2189[15])
  i2188.endColor = new pc.Color(i2189[16], i2189[17], i2189[18], i2189[19])
  i2188.generateLightingData = !!i2189[20]
  i2188.textureMode = i2189[21]
  i2188.alignment = i2189[22]
  i2188.widthCurve = new pc.AnimationCurve( { keys_flow: i2189[23] } )
  i2188.enabled = !!i2189[24]
  request.r(i2189[25], i2189[26], 0, i2188, 'sharedMaterial')
  var i2193 = i2189[27]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 2) {
  request.r(i2193[i + 0], i2193[i + 1], 2, i2192, '')
  }
  i2188.sharedMaterials = i2192
  i2188.receiveShadows = !!i2189[28]
  i2188.shadowCastingMode = i2189[29]
  i2188.sortingLayerID = i2189[30]
  i2188.sortingOrder = i2189[31]
  i2188.lightmapIndex = i2189[32]
  i2188.lightmapSceneIndex = i2189[33]
  i2188.lightmapScaleOffset = new pc.Vec4( i2189[34], i2189[35], i2189[36], i2189[37] )
  i2188.lightProbeUsage = i2189[38]
  i2188.reflectionProbeUsage = i2189[39]
  return i2188
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i2196 = root || request.c( 'BasicDrag' )
  var i2197 = data
  i2196.canDrag = !!i2197[0]
  i2196.dragByDelta = !!i2197[1]
  i2196.isDragging = !!i2197[2]
  i2196.moveWithPointer = !!i2197[3]
  i2196.canReturn = !!i2197[4]
  i2196.jumpOnReturn = !!i2197[5]
  i2196.returnTime = i2197[6]
  i2196.Tool_Offset = new pc.Vec3( i2197[7], i2197[8], i2197[9] )
  i2196.canScaleIncrease = !!i2197[10]
  i2196.Self_ScaleNew = new pc.Vec3( i2197[11], i2197[12], i2197[13] )
  i2196.canRotateOnPick = !!i2197[14]
  i2196.startRot = new pc.Vec3( i2197[15], i2197[16], i2197[17] )
  i2196.newRot = new pc.Vec3( i2197[18], i2197[19], i2197[20] )
  var i2199 = i2197[21]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 2) {
  request.r(i2199[i + 0], i2199[i + 1], 2, i2198, '')
  }
  i2196.childSprite = i2198
  request.r(i2197[22], i2197[23], 0, i2196, 'ToolSelectClip')
  request.r(i2197[24], i2197[25], 0, i2196, 'ToolLoopClip')
  request.r(i2197[26], i2197[27], 0, i2196, 'thisParticles')
  i2196.onDragparticle = !!i2197[28]
  request.r(i2197[29], i2197[30], 0, i2196, 'dragParticles')
  request.r(i2197[31], i2197[32], 0, i2196, 'anim')
  i2196.startPos = new pc.Vec3( i2197[33], i2197[34], i2197[35] )
  i2196.startScale = new pc.Vec3( i2197[36], i2197[37], i2197[38] )
  i2196.Vibration = !!i2197[39]
  i2196.isPlacedCannotMove = !!i2197[40]
  i2196.isObjectMovingWhileDragging = !!i2197[41]
  i2196.OnMouseDownEvent = request.d('System.Action', i2197[42], i2196.OnMouseDownEvent)
  i2196.OnMouseUpEvent = request.d('System.Action', i2197[43], i2196.OnMouseUpEvent)
  i2196.ProgStartEvent = request.d('System.Action', i2197[44], i2196.ProgStartEvent)
  i2196.ProgEndEvent = request.d('System.Action', i2197[45], i2196.ProgEndEvent)
  i2196.canCallMouseUpWhenGamePaused = !!i2197[46]
  i2196.ClampX_L = i2197[47]
  i2196.ClampX_H = i2197[48]
  i2196.ClampY_L = i2197[49]
  i2196.ClampY_H = i2197[50]
  i2196.startOrder = i2197[51]
  i2196.dontResetItIsInCollider = !!i2197[52]
  request.r(i2197[53], i2197[54], 0, i2196, 'thisCollider')
  request.r(i2197[55], i2197[56], 0, i2196, 'thisSR')
  i2196.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i2197[57], i2196.OnMouseDownEventIndependentFromCanDrag)
  return i2196
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i2200 = root || request.c( 'BD_Progress' )
  var i2201 = data
  var i2203 = i2201[0]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.push( request.d('ScratchData', i2203[i + 0]) );
  }
  i2200.AllScratches = i2202
  i2200.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i2201[1], i2200.OnScratchComplete)
  i2200.isProgDone = !!i2201[2]
  i2200.canCallComplete = !!i2201[3]
  i2200.CollectiveAppear = !!i2201[4]
  i2200.tipControl = !!i2201[5]
  i2200.progressControl = !!i2201[6]
  request.r(i2201[7], i2201[8], 0, i2200, 'thisDrag')
  i2200.CompleteEvent = request.d('System.Action', i2201[9], i2200.CompleteEvent)
  i2200.SubCompleteEvent = request.d('System.Action', i2201[10], i2200.SubCompleteEvent)
  return i2200
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i2206 = root || request.c( 'ScratchData' )
  var i2207 = data
  request.r(i2207[0], i2207[1], 0, i2206, 'ScratchManager')
  i2206.scratchLimit = i2207[2]
  i2206.isComplete = !!i2207[3]
  return i2206
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i2208 = root || request.c( 'BD_Clamp' )
  var i2209 = data
  i2208.ClampX_L = i2209[0]
  i2208.ClampX_H = i2209[1]
  i2208.ClampY_L = i2209[2]
  i2208.ClampY_H = i2209[3]
  return i2208
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i2210 = root || request.c( 'BD_ToolRotate' )
  var i2211 = data
  i2210.startDelay = i2211[0]
  request.r(i2211[1], i2211[2], 0, i2210, 'Tool')
  request.r(i2211[3], i2211[4], 0, i2210, 'Clamp')
  request.r(i2211[5], i2211[6], 0, i2210, 'Pivot')
  i2210.MinAngle = new pc.Vec3( i2211[7], i2211[8], i2211[9] )
  i2210.MaxAngle = new pc.Vec3( i2211[10], i2211[11], i2211[12] )
  i2210.rotationSpeed = i2211[13]
  return i2210
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i2212 = root || request.c( 'BD_CameraFollow' )
  var i2213 = data
  request.r(i2213[0], i2213[1], 0, i2212, 'Tool')
  request.r(i2213[2], i2213[3], 0, i2212, 'Pivot')
  i2212.FOV = i2213[4]
  i2212.Y_L = i2213[5]
  i2212.Y_H = i2213[6]
  i2212.X_L = i2213[7]
  i2212.X_R = i2213[8]
  i2212.startDelay = i2213[9]
  i2212.duration = i2213[10]
  return i2212
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i2214 = root || request.c( 'BD_AnimatorDrag' )
  var i2215 = data
  request.r(i2215[0], i2215[1], 0, i2214, 'BD')
  request.r(i2215[2], i2215[3], 0, i2214, 'anim')
  request.r(i2215[4], i2215[5], 0, i2214, 'Source')
  i2214.Vibration = !!i2215[6]
  i2214.isCompletable = !!i2215[7]
  i2214.completionThreshold = i2215[8]
  i2214.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2215[9], i2214.OnComplete)
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2217 = data
  i2216.bodyType = i2217[0]
  request.r(i2217[1], i2217[2], 0, i2216, 'material')
  i2216.simulated = !!i2217[3]
  i2216.useAutoMass = !!i2217[4]
  i2216.mass = i2217[5]
  i2216.drag = i2217[6]
  i2216.angularDrag = i2217[7]
  i2216.gravityScale = i2217[8]
  i2216.collisionDetectionMode = i2217[9]
  i2216.sleepMode = i2217[10]
  i2216.constraints = i2217[11]
  return i2216
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i2218 = root || request.c( 'BD_SpriteChange' )
  var i2219 = data
  request.r(i2219[0], i2219[1], 0, i2218, 'BD')
  request.r(i2219[2], i2219[3], 0, i2218, 'SR')
  request.r(i2219[4], i2219[5], 0, i2218, 'Default')
  request.r(i2219[6], i2219[7], 0, i2218, 'Picked')
  i2218.resetOnRelease = !!i2219[8]
  return i2218
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i2220 = root || request.c( 'BD_ProgressHelper' )
  var i2221 = data
  request.r(i2221[0], i2221[1], 0, i2220, 'BD_Progress')
  request.r(i2221[2], i2221[3], 0, i2220, 'fadeSprite')
  i2220.fadeIn = !!i2221[4]
  return i2220
}

Deserializers["Lvl3_PlaceGlue"] = function (request, data, root) {
  var i2222 = root || request.c( 'Lvl3_PlaceGlue' )
  var i2223 = data
  request.r(i2223[0], i2223[1], 0, i2222, 'Tool')
  request.r(i2223[2], i2223[3], 0, i2222, 'Detect')
  request.r(i2223[4], i2223[5], 0, i2222, 'Target')
  i2222.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2223[6], i2222.OnComplete)
  request.r(i2223[7], i2223[8], 0, i2222, 'PlaceClip')
  return i2222
}

Deserializers["Lvl3_PlaceItem"] = function (request, data, root) {
  var i2224 = root || request.c( 'Lvl3_PlaceItem' )
  var i2225 = data
  request.r(i2225[0], i2225[1], 0, i2224, 'Tool')
  request.r(i2225[2], i2225[3], 0, i2224, 'Detect')
  request.r(i2225[4], i2225[5], 0, i2224, 'Target')
  i2224.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2225[6], i2224.OnComplete)
  request.r(i2225[7], i2225[8], 0, i2224, 'PlaceClip')
  return i2224
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i2226 = root || request.c( 'DestroyObj' )
  var i2227 = data
  i2226.destroyDelay = i2227[0]
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2229 = data
  i2228.name = i2229[0]
  i2228.atlasId = i2229[1]
  i2228.mipmapCount = i2229[2]
  i2228.hdr = !!i2229[3]
  i2228.size = i2229[4]
  i2228.anisoLevel = i2229[5]
  i2228.filterMode = i2229[6]
  var i2231 = i2229[7]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 4) {
    i2230.push( UnityEngine.Rect.MinMaxRect(i2231[i + 0], i2231[i + 1], i2231[i + 2], i2231[i + 3]) );
  }
  i2228.rects = i2230
  i2228.wrapU = i2229[8]
  i2228.wrapV = i2229[9]
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2235 = data
  i2234.name = i2235[0]
  i2234.index = i2235[1]
  i2234.startup = !!i2235[2]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2237 = data
  i2236.aspect = i2237[0]
  i2236.orthographic = !!i2237[1]
  i2236.orthographicSize = i2237[2]
  i2236.backgroundColor = new pc.Color(i2237[3], i2237[4], i2237[5], i2237[6])
  i2236.nearClipPlane = i2237[7]
  i2236.farClipPlane = i2237[8]
  i2236.fieldOfView = i2237[9]
  i2236.depth = i2237[10]
  i2236.clearFlags = i2237[11]
  i2236.cullingMask = i2237[12]
  i2236.rect = i2237[13]
  request.r(i2237[14], i2237[15], 0, i2236, 'targetTexture')
  i2236.usePhysicalProperties = !!i2237[16]
  i2236.focalLength = i2237[17]
  i2236.sensorSize = new pc.Vec2( i2237[18], i2237[19] )
  i2236.lensShift = new pc.Vec2( i2237[20], i2237[21] )
  i2236.gateFit = i2237[22]
  i2236.commandBufferCount = i2237[23]
  i2236.cameraType = i2237[24]
  i2236.enabled = !!i2237[25]
  return i2236
}

Deserializers["CameraController"] = function (request, data, root) {
  var i2238 = root || request.c( 'CameraController' )
  var i2239 = data
  request.r(i2239[0], i2239[1], 0, i2238, 'cam')
  i2238.defaultPosition = new pc.Vec3( i2239[2], i2239[3], i2239[4] )
  i2238.defaultSize = i2239[5]
  i2238.defaultFOV = i2239[6]
  i2238.defaultDuration = i2239[7]
  i2238.defaultEase = i2239[8]
  return i2238
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i2240 = root || request.c( 'MusicSource' )
  var i2241 = data
  request.r(i2241[0], i2241[1], 0, i2240, 'source')
  return i2240
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i2242 = root || request.c( 'UI_Manager' )
  var i2243 = data
  i2242.levelCompleted = !!i2243[0]
  i2242.isPauseActive = !!i2243[1]
  i2242.loadIndex = i2243[2]
  request.r(i2243[3], i2243[4], 0, i2242, 'removeAdsButton')
  request.r(i2243[5], i2243[6], 0, i2242, 'pauseButton')
  request.r(i2243[7], i2243[8], 0, i2242, 'Fade_Img')
  request.r(i2243[9], i2243[10], 0, i2242, 'TopBarAnim')
  request.r(i2243[11], i2243[12], 0, i2242, 'MainPanel')
  request.r(i2243[13], i2243[14], 0, i2242, 'PausePanel')
  request.r(i2243[15], i2243[16], 0, i2242, 'PausePopUp')
  request.r(i2243[17], i2243[18], 0, i2242, 'PauseCanvasGroup')
  request.r(i2243[19], i2243[20], 0, i2242, 'RateUsPanel')
  request.r(i2243[21], i2243[22], 0, i2242, 'RateUsPopUp')
  request.r(i2243[23], i2243[24], 0, i2242, 'RemoveAdsPanel')
  request.r(i2243[25], i2243[26], 0, i2242, 'RemoveAdsPopUp')
  request.r(i2243[27], i2243[28], 0, i2242, 'RemoveAdsCanvasGroup')
  var i2245 = i2243[29]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 2) {
  request.r(i2245[i + 0], i2245[i + 1], 2, i2244, '')
  }
  i2242.RemoveAdsAnims = i2244
  request.r(i2243[30], i2243[31], 0, i2242, 'CompletePanel')
  request.r(i2243[32], i2243[33], 0, i2242, 'LevelIcon')
  request.r(i2243[34], i2243[35], 0, i2242, 'CompleteParticles')
  request.r(i2243[36], i2243[37], 0, i2242, 'progressBar')
  request.r(i2243[38], i2243[39], 0, i2242, 'progressText')
  request.r(i2243[40], i2243[41], 0, i2242, 'toolIcon1')
  request.r(i2243[42], i2243[43], 0, i2242, 'toolIcon2')
  request.r(i2243[44], i2243[45], 0, i2242, 'toolIcon3')
  request.r(i2243[46], i2243[47], 0, i2242, 'toolIcon4')
  request.r(i2243[48], i2243[49], 0, i2242, 'target1')
  request.r(i2243[50], i2243[51], 0, i2242, 'target2')
  i2242.toolMoveDuration = i2243[52]
  i2242.currentIndex = i2243[53]
  var i2247 = i2243[54]
  var i2246 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2247.length; i += 2) {
  request.r(i2247[i + 0], i2247[i + 1], 1, i2246, '')
  }
  i2242.allTools = i2246
  request.r(i2243[55], i2243[56], 0, i2242, 'clockProgress')
  request.r(i2243[57], i2243[58], 0, i2242, 'clockProgressFill')
  request.r(i2243[59], i2243[60], 0, i2242, 'clockAudio')
  i2242.moveDistance = i2243[61]
  i2242.animationDuration = i2243[62]
  i2242.greyBgChildName = i2243[63]
  i2242.pushOffset = i2243[64]
  return i2242
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i2250 = root || request.c( 'GameManagerPlayable' )
  var i2251 = data
  request.r(i2251[0], i2251[1], 0, i2250, 'endParticles')
  request.r(i2251[2], i2251[3], 0, i2250, 'stepCompleteParticles')
  request.r(i2251[4], i2251[5], 0, i2250, 'DefaultMat')
  request.r(i2251[6], i2251[7], 0, i2250, 'BG_Music')
  request.r(i2251[8], i2251[9], 0, i2250, 'restoreEffectShader')
  request.r(i2251[10], i2251[11], 0, i2250, 'stickerEffectShader')
  i2250.isComplete = !!i2251[12]
  i2250.isPaused = !!i2251[13]
  request.r(i2251[14], i2251[15], 0, i2250, 'currentLevel')
  i2250.startLevelOnPlay = !!i2251[16]
  i2250.currentLevelNo = i2251[17]
  return i2250
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2252 = root || request.c( 'AudioController' )
  var i2253 = data
  request.r(i2253[0], i2253[1], 0, i2252, 'MainMixer')
  request.r(i2253[2], i2253[3], 0, i2252, 'UiClick')
  request.r(i2253[4], i2253[5], 0, i2252, 'UiClickSource')
  var i2255 = i2253[6]
  var i2254 = []
  for(var i = 0; i < i2255.length; i += 2) {
  request.r(i2255[i + 0], i2255[i + 1], 2, i2254, '')
  }
  i2252.SfxSources = i2254
  var i2257 = i2253[7]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 2) {
  request.r(i2257[i + 0], i2257[i + 1], 2, i2256, '')
  }
  i2252.AllClips = i2256
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2261 = data
  i2260.pivot = new pc.Vec2( i2261[0], i2261[1] )
  i2260.anchorMin = new pc.Vec2( i2261[2], i2261[3] )
  i2260.anchorMax = new pc.Vec2( i2261[4], i2261[5] )
  i2260.sizeDelta = new pc.Vec2( i2261[6], i2261[7] )
  i2260.anchoredPosition3D = new pc.Vec3( i2261[8], i2261[9], i2261[10] )
  i2260.rotation = new pc.Quat(i2261[11], i2261[12], i2261[13], i2261[14])
  i2260.scale = new pc.Vec3( i2261[15], i2261[16], i2261[17] )
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2263 = data
  i2262.planeDistance = i2263[0]
  i2262.referencePixelsPerUnit = i2263[1]
  i2262.isFallbackOverlay = !!i2263[2]
  i2262.renderMode = i2263[3]
  i2262.renderOrder = i2263[4]
  i2262.sortingLayerName = i2263[5]
  i2262.sortingOrder = i2263[6]
  i2262.scaleFactor = i2263[7]
  request.r(i2263[8], i2263[9], 0, i2262, 'worldCamera')
  i2262.overrideSorting = !!i2263[10]
  i2262.pixelPerfect = !!i2263[11]
  i2262.targetDisplay = i2263[12]
  i2262.overridePixelPerfect = !!i2263[13]
  i2262.enabled = !!i2263[14]
  return i2262
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2264 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2265 = data
  i2264.m_UiScaleMode = i2265[0]
  i2264.m_ReferencePixelsPerUnit = i2265[1]
  i2264.m_ScaleFactor = i2265[2]
  i2264.m_ReferenceResolution = new pc.Vec2( i2265[3], i2265[4] )
  i2264.m_ScreenMatchMode = i2265[5]
  i2264.m_MatchWidthOrHeight = i2265[6]
  i2264.m_PhysicalUnit = i2265[7]
  i2264.m_FallbackScreenDPI = i2265[8]
  i2264.m_DefaultSpriteDPI = i2265[9]
  i2264.m_DynamicPixelsPerUnit = i2265[10]
  i2264.m_PresetInfoIsWorld = !!i2265[11]
  return i2264
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2266 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2267 = data
  i2266.m_IgnoreReversedGraphics = !!i2267[0]
  i2266.m_BlockingObjects = i2267[1]
  i2266.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2267[2] )
  return i2266
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2268 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2269 = data
  i2268.targetIsSelf = !!i2269[0]
  request.r(i2269[1], i2269[2], 0, i2268, 'targetGO')
  i2268.tweenTargetIsTargetGO = !!i2269[3]
  i2268.delay = i2269[4]
  i2268.duration = i2269[5]
  i2268.easeType = i2269[6]
  i2268.easeCurve = new pc.AnimationCurve( { keys_flow: i2269[7] } )
  i2268.loopType = i2269[8]
  i2268.loops = i2269[9]
  i2268.id = i2269[10]
  i2268.isRelative = !!i2269[11]
  i2268.isFrom = !!i2269[12]
  i2268.isIndependentUpdate = !!i2269[13]
  i2268.autoKill = !!i2269[14]
  i2268.autoGenerate = !!i2269[15]
  i2268.isActive = !!i2269[16]
  i2268.isValid = !!i2269[17]
  request.r(i2269[18], i2269[19], 0, i2268, 'target')
  i2268.animationType = i2269[20]
  i2268.targetType = i2269[21]
  i2268.forcedTargetType = i2269[22]
  i2268.autoPlay = !!i2269[23]
  i2268.useTargetAsV3 = !!i2269[24]
  i2268.endValueFloat = i2269[25]
  i2268.endValueV3 = new pc.Vec3( i2269[26], i2269[27], i2269[28] )
  i2268.endValueV2 = new pc.Vec2( i2269[29], i2269[30] )
  i2268.endValueColor = new pc.Color(i2269[31], i2269[32], i2269[33], i2269[34])
  i2268.endValueString = i2269[35]
  i2268.endValueRect = UnityEngine.Rect.MinMaxRect(i2269[36], i2269[37], i2269[38], i2269[39])
  request.r(i2269[40], i2269[41], 0, i2268, 'endValueTransform')
  i2268.optionalBool0 = !!i2269[42]
  i2268.optionalBool1 = !!i2269[43]
  i2268.optionalFloat0 = i2269[44]
  i2268.optionalInt0 = i2269[45]
  i2268.optionalRotationMode = i2269[46]
  i2268.optionalScrambleMode = i2269[47]
  i2268.optionalShakeRandomnessMode = i2269[48]
  i2268.optionalString = i2269[49]
  i2268.updateType = i2269[50]
  i2268.isSpeedBased = !!i2269[51]
  i2268.hasOnStart = !!i2269[52]
  i2268.hasOnPlay = !!i2269[53]
  i2268.hasOnUpdate = !!i2269[54]
  i2268.hasOnStepComplete = !!i2269[55]
  i2268.hasOnComplete = !!i2269[56]
  i2268.hasOnTweenCreated = !!i2269[57]
  i2268.hasOnRewind = !!i2269[58]
  i2268.onStart = request.d('UnityEngine.Events.UnityEvent', i2269[59], i2268.onStart)
  i2268.onPlay = request.d('UnityEngine.Events.UnityEvent', i2269[60], i2268.onPlay)
  i2268.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2269[61], i2268.onUpdate)
  i2268.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2269[62], i2268.onStepComplete)
  i2268.onComplete = request.d('UnityEngine.Events.UnityEvent', i2269[63], i2268.onComplete)
  i2268.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2269[64], i2268.onTweenCreated)
  i2268.onRewind = request.d('UnityEngine.Events.UnityEvent', i2269[65], i2268.onRewind)
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2271 = data
  i2270.cullTransparentMesh = !!i2271[0]
  return i2270
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2272 = root || request.c( 'UnityEngine.UI.Image' )
  var i2273 = data
  request.r(i2273[0], i2273[1], 0, i2272, 'm_Sprite')
  i2272.m_Type = i2273[2]
  i2272.m_PreserveAspect = !!i2273[3]
  i2272.m_FillCenter = !!i2273[4]
  i2272.m_FillMethod = i2273[5]
  i2272.m_FillAmount = i2273[6]
  i2272.m_FillClockwise = !!i2273[7]
  i2272.m_FillOrigin = i2273[8]
  i2272.m_UseSpriteMesh = !!i2273[9]
  i2272.m_PixelsPerUnitMultiplier = i2273[10]
  request.r(i2273[11], i2273[12], 0, i2272, 'm_Material')
  i2272.m_Maskable = !!i2273[13]
  i2272.m_Color = new pc.Color(i2273[14], i2273[15], i2273[16], i2273[17])
  i2272.m_RaycastTarget = !!i2273[18]
  i2272.m_RaycastPadding = new pc.Vec4( i2273[19], i2273[20], i2273[21], i2273[22] )
  return i2272
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2274 = root || request.c( 'UnityEngine.UI.Text' )
  var i2275 = data
  i2274.m_FontData = request.d('UnityEngine.UI.FontData', i2275[0], i2274.m_FontData)
  i2274.m_Text = i2275[1]
  request.r(i2275[2], i2275[3], 0, i2274, 'm_Material')
  i2274.m_Maskable = !!i2275[4]
  i2274.m_Color = new pc.Color(i2275[5], i2275[6], i2275[7], i2275[8])
  i2274.m_RaycastTarget = !!i2275[9]
  i2274.m_RaycastPadding = new pc.Vec4( i2275[10], i2275[11], i2275[12], i2275[13] )
  return i2274
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2276 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2277 = data
  request.r(i2277[0], i2277[1], 0, i2276, 'm_Font')
  i2276.m_FontSize = i2277[2]
  i2276.m_FontStyle = i2277[3]
  i2276.m_BestFit = !!i2277[4]
  i2276.m_MinSize = i2277[5]
  i2276.m_MaxSize = i2277[6]
  i2276.m_Alignment = i2277[7]
  i2276.m_AlignByGeometry = !!i2277[8]
  i2276.m_RichText = !!i2277[9]
  i2276.m_HorizontalOverflow = i2277[10]
  i2276.m_VerticalOverflow = i2277[11]
  i2276.m_LineSpacing = i2277[12]
  return i2276
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2278 = root || request.c( 'UnityEngine.UI.Button' )
  var i2279 = data
  i2278.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2279[0], i2278.m_OnClick)
  i2278.m_Navigation = request.d('UnityEngine.UI.Navigation', i2279[1], i2278.m_Navigation)
  i2278.m_Transition = i2279[2]
  i2278.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2279[3], i2278.m_Colors)
  i2278.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2279[4], i2278.m_SpriteState)
  i2278.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2279[5], i2278.m_AnimationTriggers)
  i2278.m_Interactable = !!i2279[6]
  request.r(i2279[7], i2279[8], 0, i2278, 'm_TargetGraphic')
  return i2278
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2280 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2281 = data
  i2280.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2281[0], i2280.m_PersistentCalls)
  return i2280
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2282 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2283 = data
  i2282.m_Mode = i2283[0]
  i2282.m_WrapAround = !!i2283[1]
  request.r(i2283[2], i2283[3], 0, i2282, 'm_SelectOnUp')
  request.r(i2283[4], i2283[5], 0, i2282, 'm_SelectOnDown')
  request.r(i2283[6], i2283[7], 0, i2282, 'm_SelectOnLeft')
  request.r(i2283[8], i2283[9], 0, i2282, 'm_SelectOnRight')
  return i2282
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2285 = data
  i2284.m_NormalColor = new pc.Color(i2285[0], i2285[1], i2285[2], i2285[3])
  i2284.m_HighlightedColor = new pc.Color(i2285[4], i2285[5], i2285[6], i2285[7])
  i2284.m_PressedColor = new pc.Color(i2285[8], i2285[9], i2285[10], i2285[11])
  i2284.m_SelectedColor = new pc.Color(i2285[12], i2285[13], i2285[14], i2285[15])
  i2284.m_DisabledColor = new pc.Color(i2285[16], i2285[17], i2285[18], i2285[19])
  i2284.m_ColorMultiplier = i2285[20]
  i2284.m_FadeDuration = i2285[21]
  return i2284
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2286 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2287 = data
  request.r(i2287[0], i2287[1], 0, i2286, 'm_HighlightedSprite')
  request.r(i2287[2], i2287[3], 0, i2286, 'm_PressedSprite')
  request.r(i2287[4], i2287[5], 0, i2286, 'm_SelectedSprite')
  request.r(i2287[6], i2287[7], 0, i2286, 'm_DisabledSprite')
  return i2286
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2288 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2289 = data
  i2288.m_NormalTrigger = i2289[0]
  i2288.m_HighlightedTrigger = i2289[1]
  i2288.m_PressedTrigger = i2289[2]
  i2288.m_SelectedTrigger = i2289[3]
  i2288.m_DisabledTrigger = i2289[4]
  return i2288
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i2290 = root || request.c( 'PlayableHudRuntime' )
  var i2291 = data
  return i2290
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2292 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2293 = data
  request.r(i2293[0], i2293[1], 0, i2292, 'm_FirstSelected')
  i2292.m_sendNavigationEvents = !!i2293[2]
  i2292.m_DragThreshold = i2293[3]
  return i2292
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2294 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2295 = data
  i2294.m_HorizontalAxis = i2295[0]
  i2294.m_VerticalAxis = i2295[1]
  i2294.m_SubmitButton = i2295[2]
  i2294.m_CancelButton = i2295[3]
  i2294.m_InputActionsPerSecond = i2295[4]
  i2294.m_RepeatDelay = i2295[5]
  i2294.m_ForceModuleActive = !!i2295[6]
  i2294.m_SendPointerHoverToParent = !!i2295[7]
  return i2294
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i2296 = root || request.c( 'PlayableRouter' )
  var i2297 = data
  var i2299 = i2297[0]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 2) {
  request.r(i2299[i + 0], i2299[i + 1], 2, i2298, '')
  }
  i2296.menuObjects = i2298
  var i2301 = i2297[1]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 2) {
  request.r(i2301[i + 0], i2301[i + 1], 2, i2300, '')
  }
  i2296.gameplayObjects = i2300
  var i2303 = i2297[2]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.push( request.d('PlayableRouter+SubLevelSlot', i2303[i + 0]) );
  }
  i2296.subLevels = i2302
  i2296.fadeDuration = i2297[3]
  i2296.onMenuClosing = request.d('UnityEngine.Events.UnityEvent', i2297[4], i2296.onMenuClosing)
  i2296.lockedMessage = i2297[5]
  i2296.lockedTapsToCTA = i2297[6]
  return i2296
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i2306 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i2307 = data
  request.r(i2307[0], i2307[1], 0, i2306, 'button')
  request.r(i2307[2], i2307[3], 0, i2306, 'level')
  return i2306
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i2308 = root || request.c( 'ToastManager' )
  var i2309 = data
  request.r(i2309[0], i2309[1], 0, i2308, 'toastPanel')
  request.r(i2309[2], i2309[3], 0, i2308, 'toastPopup')
  request.r(i2309[4], i2309[5], 0, i2308, 'canvasGroup')
  request.r(i2309[6], i2309[7], 0, i2308, 'toastText')
  i2308.startY = i2309[8]
  i2308.visibleY = i2309[9]
  i2308.endY = i2309[10]
  i2308.animationTime = i2309[11]
  i2308.animationTimeUp = i2309[12]
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2311 = data
  i2310.m_Alpha = i2311[0]
  i2310.m_Interactable = !!i2311[1]
  i2310.m_BlocksRaycasts = !!i2311[2]
  i2310.m_IgnoreParentGroups = !!i2311[3]
  i2310.enabled = !!i2311[4]
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2313 = data
  i2312.ambientIntensity = i2313[0]
  i2312.reflectionIntensity = i2313[1]
  i2312.ambientMode = i2313[2]
  i2312.ambientLight = new pc.Color(i2313[3], i2313[4], i2313[5], i2313[6])
  i2312.ambientSkyColor = new pc.Color(i2313[7], i2313[8], i2313[9], i2313[10])
  i2312.ambientGroundColor = new pc.Color(i2313[11], i2313[12], i2313[13], i2313[14])
  i2312.ambientEquatorColor = new pc.Color(i2313[15], i2313[16], i2313[17], i2313[18])
  i2312.fogColor = new pc.Color(i2313[19], i2313[20], i2313[21], i2313[22])
  i2312.fogEndDistance = i2313[23]
  i2312.fogStartDistance = i2313[24]
  i2312.fogDensity = i2313[25]
  i2312.fog = !!i2313[26]
  request.r(i2313[27], i2313[28], 0, i2312, 'skybox')
  i2312.fogMode = i2313[29]
  var i2315 = i2313[30]
  var i2314 = []
  for(var i = 0; i < i2315.length; i += 1) {
    i2314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2315[i + 0]) );
  }
  i2312.lightmaps = i2314
  i2312.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2313[31], i2312.lightProbes)
  i2312.lightmapsMode = i2313[32]
  i2312.mixedBakeMode = i2313[33]
  i2312.environmentLightingMode = i2313[34]
  i2312.ambientProbe = new pc.SphericalHarmonicsL2(i2313[35])
  request.r(i2313[36], i2313[37], 0, i2312, 'customReflection')
  request.r(i2313[38], i2313[39], 0, i2312, 'defaultReflection')
  i2312.defaultReflectionMode = i2313[40]
  i2312.defaultReflectionResolution = i2313[41]
  i2312.sunLightObjectId = i2313[42]
  i2312.pixelLightCount = i2313[43]
  i2312.defaultReflectionHDR = !!i2313[44]
  i2312.hasLightDataAsset = !!i2313[45]
  i2312.hasManualGenerate = !!i2313[46]
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2319 = data
  request.r(i2319[0], i2319[1], 0, i2318, 'lightmapColor')
  request.r(i2319[2], i2319[3], 0, i2318, 'lightmapDirection')
  request.r(i2319[4], i2319[5], 0, i2318, 'shadowMask')
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2320 = root || new UnityEngine.LightProbes()
  var i2321 = data
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2327 = data
  var i2329 = i2327[0]
  var i2328 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2329.length; i += 1) {
    i2328.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2329[i + 0]));
  }
  i2326.ShaderCompilationErrors = i2328
  i2326.name = i2327[1]
  i2326.guid = i2327[2]
  var i2331 = i2327[3]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 1) {
    i2330.push( i2331[i + 0] );
  }
  i2326.shaderDefinedKeywords = i2330
  var i2333 = i2327[4]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 1) {
    i2332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2333[i + 0]) );
  }
  i2326.passes = i2332
  var i2335 = i2327[5]
  var i2334 = []
  for(var i = 0; i < i2335.length; i += 1) {
    i2334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2335[i + 0]) );
  }
  i2326.usePasses = i2334
  var i2337 = i2327[6]
  var i2336 = []
  for(var i = 0; i < i2337.length; i += 1) {
    i2336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2337[i + 0]) );
  }
  i2326.defaultParameterValues = i2336
  request.r(i2327[7], i2327[8], 0, i2326, 'unityFallbackShader')
  i2326.readDepth = !!i2327[9]
  i2326.hasDepthOnlyPass = !!i2327[10]
  i2326.isCreatedByShaderGraph = !!i2327[11]
  i2326.disableBatching = !!i2327[12]
  i2326.compiled = !!i2327[13]
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2341 = data
  i2340.shaderName = i2341[0]
  i2340.errorMessage = i2341[1]
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2346 = root || new pc.UnityShaderPass()
  var i2347 = data
  i2346.id = i2347[0]
  i2346.subShaderIndex = i2347[1]
  i2346.name = i2347[2]
  i2346.passType = i2347[3]
  i2346.grabPassTextureName = i2347[4]
  i2346.usePass = !!i2347[5]
  i2346.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2347[6], i2346.zTest)
  i2346.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2347[7], i2346.zWrite)
  i2346.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2347[8], i2346.culling)
  i2346.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2347[9], i2346.blending)
  i2346.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2347[10], i2346.alphaBlending)
  i2346.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2347[11], i2346.colorWriteMask)
  i2346.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2347[12], i2346.offsetUnits)
  i2346.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2347[13], i2346.offsetFactor)
  i2346.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2347[14], i2346.stencilRef)
  i2346.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2347[15], i2346.stencilReadMask)
  i2346.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2347[16], i2346.stencilWriteMask)
  i2346.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2347[17], i2346.stencilOp)
  i2346.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2347[18], i2346.stencilOpFront)
  i2346.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2347[19], i2346.stencilOpBack)
  var i2349 = i2347[20]
  var i2348 = []
  for(var i = 0; i < i2349.length; i += 1) {
    i2348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2349[i + 0]) );
  }
  i2346.tags = i2348
  var i2351 = i2347[21]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( i2351[i + 0] );
  }
  i2346.passDefinedKeywords = i2350
  var i2353 = i2347[22]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 1) {
    i2352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2353[i + 0]) );
  }
  i2346.passDefinedKeywordGroups = i2352
  var i2355 = i2347[23]
  var i2354 = []
  for(var i = 0; i < i2355.length; i += 1) {
    i2354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2355[i + 0]) );
  }
  i2346.variants = i2354
  var i2357 = i2347[24]
  var i2356 = []
  for(var i = 0; i < i2357.length; i += 1) {
    i2356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2357[i + 0]) );
  }
  i2346.excludedVariants = i2356
  i2346.hasDepthReader = !!i2347[25]
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2359 = data
  i2358.val = i2359[0]
  i2358.name = i2359[1]
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2361 = data
  i2360.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2361[0], i2360.src)
  i2360.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2361[1], i2360.dst)
  i2360.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2361[2], i2360.op)
  return i2360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2363 = data
  i2362.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2363[0], i2362.pass)
  i2362.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2363[1], i2362.fail)
  i2362.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2363[2], i2362.zFail)
  i2362.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2363[3], i2362.comp)
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2367 = data
  i2366.name = i2367[0]
  i2366.value = i2367[1]
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2371 = data
  var i2373 = i2371[0]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 1) {
    i2372.push( i2373[i + 0] );
  }
  i2370.keywords = i2372
  i2370.hasDiscard = !!i2371[1]
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2377 = data
  i2376.passId = i2377[0]
  i2376.subShaderIndex = i2377[1]
  var i2379 = i2377[2]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.push( i2379[i + 0] );
  }
  i2376.keywords = i2378
  i2376.vertexProgram = i2377[3]
  i2376.fragmentProgram = i2377[4]
  i2376.exportedForWebGl2 = !!i2377[5]
  i2376.readDepth = !!i2377[6]
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2383 = data
  request.r(i2383[0], i2383[1], 0, i2382, 'shader')
  i2382.pass = i2383[2]
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2387 = data
  i2386.name = i2387[0]
  i2386.type = i2387[1]
  i2386.value = new pc.Vec4( i2387[2], i2387[3], i2387[4], i2387[5] )
  i2386.textureValue = i2387[6]
  i2386.shaderPropertyFlag = i2387[7]
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2389 = data
  i2388.name = i2389[0]
  request.r(i2389[1], i2389[2], 0, i2388, 'texture')
  i2388.aabb = i2389[3]
  i2388.vertices = i2389[4]
  i2388.triangles = i2389[5]
  i2388.textureRect = UnityEngine.Rect.MinMaxRect(i2389[6], i2389[7], i2389[8], i2389[9])
  i2388.packedRect = UnityEngine.Rect.MinMaxRect(i2389[10], i2389[11], i2389[12], i2389[13])
  i2388.border = new pc.Vec4( i2389[14], i2389[15], i2389[16], i2389[17] )
  i2388.transparency = i2389[18]
  i2388.bounds = i2389[19]
  i2388.pixelsPerUnit = i2389[20]
  i2388.textureWidth = i2389[21]
  i2388.textureHeight = i2389[22]
  i2388.nativeSize = new pc.Vec2( i2389[23], i2389[24] )
  i2388.pivot = new pc.Vec2( i2389[25], i2389[26] )
  i2388.textureRectOffset = new pc.Vec2( i2389[27], i2389[28] )
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2391 = data
  i2390.name = i2391[0]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2393 = data
  i2392.name = i2393[0]
  i2392.wrapMode = i2393[1]
  i2392.isLooping = !!i2393[2]
  i2392.length = i2393[3]
  var i2395 = i2393[4]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 1) {
    i2394.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2395[i + 0]) );
  }
  i2392.curves = i2394
  var i2397 = i2393[5]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2397[i + 0]) );
  }
  i2392.events = i2396
  i2392.halfPrecision = !!i2393[6]
  i2392._frameRate = i2393[7]
  i2392.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2393[8], i2392.localBounds)
  i2392.hasMuscleCurves = !!i2393[9]
  var i2399 = i2393[10]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 1) {
    i2398.push( i2399[i + 0] );
  }
  i2392.clipMuscleConstant = i2398
  i2392.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2393[11], i2392.clipBindingConstant)
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2403 = data
  i2402.path = i2403[0]
  i2402.hash = i2403[1]
  i2402.componentType = i2403[2]
  i2402.property = i2403[3]
  i2402.keys = i2403[4]
  var i2405 = i2403[5]
  var i2404 = []
  for(var i = 0; i < i2405.length; i += 1) {
    i2404.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2405[i + 0]) );
  }
  i2402.objectReferenceKeys = i2404
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2409 = data
  i2408.time = i2409[0]
  request.r(i2409[1], i2409[2], 0, i2408, 'value')
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2413 = data
  i2412.functionName = i2413[0]
  i2412.floatParameter = i2413[1]
  i2412.intParameter = i2413[2]
  i2412.stringParameter = i2413[3]
  request.r(i2413[4], i2413[5], 0, i2412, 'objectReferenceParameter')
  i2412.time = i2413[6]
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2415 = data
  i2414.center = new pc.Vec3( i2415[0], i2415[1], i2415[2] )
  i2414.extends = new pc.Vec3( i2415[3], i2415[4], i2415[5] )
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2419 = data
  var i2421 = i2419[0]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.push( i2421[i + 0] );
  }
  i2418.genericBindings = i2420
  var i2423 = i2419[1]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.push( i2423[i + 0] );
  }
  i2418.pptrCurveMapping = i2422
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2425 = data
  i2424.name = i2425[0]
  i2424.ascent = i2425[1]
  i2424.originalLineHeight = i2425[2]
  i2424.fontSize = i2425[3]
  var i2427 = i2425[4]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2427[i + 0]) );
  }
  i2424.characterInfo = i2426
  request.r(i2425[5], i2425[6], 0, i2424, 'texture')
  i2424.originalFontSize = i2425[7]
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2431 = data
  i2430.index = i2431[0]
  i2430.advance = i2431[1]
  i2430.bearing = i2431[2]
  i2430.glyphWidth = i2431[3]
  i2430.glyphHeight = i2431[4]
  i2430.minX = i2431[5]
  i2430.maxX = i2431[6]
  i2430.minY = i2431[7]
  i2430.maxY = i2431[8]
  i2430.uvBottomLeftX = i2431[9]
  i2430.uvBottomLeftY = i2431[10]
  i2430.uvBottomRightX = i2431[11]
  i2430.uvBottomRightY = i2431[12]
  i2430.uvTopLeftX = i2431[13]
  i2430.uvTopLeftY = i2431[14]
  i2430.uvTopRightX = i2431[15]
  i2430.uvTopRightY = i2431[16]
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2433 = data
  i2432.name = i2433[0]
  var i2435 = i2433[1]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 1) {
    i2434.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2435[i + 0]) );
  }
  i2432.layers = i2434
  var i2437 = i2433[2]
  var i2436 = []
  for(var i = 0; i < i2437.length; i += 1) {
    i2436.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2437[i + 0]) );
  }
  i2432.parameters = i2436
  i2432.animationClips = i2433[3]
  i2432.avatarUnsupported = i2433[4]
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2441 = data
  i2440.name = i2441[0]
  i2440.defaultWeight = i2441[1]
  i2440.blendingMode = i2441[2]
  i2440.avatarMask = i2441[3]
  i2440.syncedLayerIndex = i2441[4]
  i2440.syncedLayerAffectsTiming = !!i2441[5]
  i2440.syncedLayers = i2441[6]
  i2440.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2441[7], i2440.stateMachine)
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2443 = data
  i2442.id = i2443[0]
  i2442.name = i2443[1]
  i2442.path = i2443[2]
  var i2445 = i2443[3]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2445[i + 0]) );
  }
  i2442.states = i2444
  var i2447 = i2443[4]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2447[i + 0]) );
  }
  i2442.machines = i2446
  var i2449 = i2443[5]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2449[i + 0]) );
  }
  i2442.entryStateTransitions = i2448
  var i2451 = i2443[6]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2451[i + 0]) );
  }
  i2442.exitStateTransitions = i2450
  var i2453 = i2443[7]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2453[i + 0]) );
  }
  i2442.anyStateTransitions = i2452
  i2442.defaultStateId = i2443[8]
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2457 = data
  i2456.id = i2457[0]
  i2456.name = i2457[1]
  i2456.cycleOffset = i2457[2]
  i2456.cycleOffsetParameter = i2457[3]
  i2456.cycleOffsetParameterActive = !!i2457[4]
  i2456.mirror = !!i2457[5]
  i2456.mirrorParameter = i2457[6]
  i2456.mirrorParameterActive = !!i2457[7]
  i2456.motionId = i2457[8]
  i2456.nameHash = i2457[9]
  i2456.fullPathHash = i2457[10]
  i2456.speed = i2457[11]
  i2456.speedParameter = i2457[12]
  i2456.speedParameterActive = !!i2457[13]
  i2456.tag = i2457[14]
  i2456.tagHash = i2457[15]
  i2456.writeDefaultValues = !!i2457[16]
  var i2459 = i2457[17]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 2) {
  request.r(i2459[i + 0], i2459[i + 1], 2, i2458, '')
  }
  i2456.behaviours = i2458
  var i2461 = i2457[18]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 1) {
    i2460.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2461[i + 0]) );
  }
  i2456.transitions = i2460
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2467 = data
  i2466.fullPath = i2467[0]
  i2466.canTransitionToSelf = !!i2467[1]
  i2466.duration = i2467[2]
  i2466.exitTime = i2467[3]
  i2466.hasExitTime = !!i2467[4]
  i2466.hasFixedDuration = !!i2467[5]
  i2466.interruptionSource = i2467[6]
  i2466.offset = i2467[7]
  i2466.orderedInterruption = !!i2467[8]
  i2466.destinationStateId = i2467[9]
  i2466.isExit = !!i2467[10]
  i2466.mute = !!i2467[11]
  i2466.solo = !!i2467[12]
  var i2469 = i2467[13]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2469[i + 0]) );
  }
  i2466.conditions = i2468
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2475 = data
  i2474.destinationStateId = i2475[0]
  i2474.isExit = !!i2475[1]
  i2474.mute = !!i2475[2]
  i2474.solo = !!i2475[3]
  var i2477 = i2475[4]
  var i2476 = []
  for(var i = 0; i < i2477.length; i += 1) {
    i2476.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2477[i + 0]) );
  }
  i2474.conditions = i2476
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2481 = data
  i2480.mode = i2481[0]
  i2480.parameter = i2481[1]
  i2480.threshold = i2481[2]
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2485 = data
  i2484.defaultBool = !!i2485[0]
  i2484.defaultFloat = i2485[1]
  i2484.defaultInt = i2485[2]
  i2484.name = i2485[3]
  i2484.nameHash = i2485[4]
  i2484.type = i2485[5]
  return i2484
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2486 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2487 = data
  i2486.useSafeMode = !!i2487[0]
  i2486.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2487[1], i2486.safeModeOptions)
  i2486.timeScale = i2487[2]
  i2486.unscaledTimeScale = i2487[3]
  i2486.useSmoothDeltaTime = !!i2487[4]
  i2486.maxSmoothUnscaledTime = i2487[5]
  i2486.rewindCallbackMode = i2487[6]
  i2486.showUnityEditorReport = !!i2487[7]
  i2486.logBehaviour = i2487[8]
  i2486.drawGizmos = !!i2487[9]
  i2486.defaultRecyclable = !!i2487[10]
  i2486.defaultAutoPlay = i2487[11]
  i2486.defaultUpdateType = i2487[12]
  i2486.defaultTimeScaleIndependent = !!i2487[13]
  i2486.defaultEaseType = i2487[14]
  i2486.defaultEaseOvershootOrAmplitude = i2487[15]
  i2486.defaultEasePeriod = i2487[16]
  i2486.defaultAutoKill = !!i2487[17]
  i2486.defaultLoopType = i2487[18]
  i2486.debugMode = !!i2487[19]
  i2486.debugStoreTargetId = !!i2487[20]
  i2486.showPreviewPanel = !!i2487[21]
  i2486.storeSettingsLocation = i2487[22]
  i2486.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2487[23], i2486.modules)
  i2486.createASMDEF = !!i2487[24]
  i2486.showPlayingTweens = !!i2487[25]
  i2486.showPausedTweens = !!i2487[26]
  return i2486
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2488 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2489 = data
  i2488.logBehaviour = i2489[0]
  i2488.nestedTweenFailureBehaviour = i2489[1]
  return i2488
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2490 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2491 = data
  i2490.showPanel = !!i2491[0]
  i2490.audioEnabled = !!i2491[1]
  i2490.physicsEnabled = !!i2491[2]
  i2490.physics2DEnabled = !!i2491[3]
  i2490.spriteEnabled = !!i2491[4]
  i2490.uiEnabled = !!i2491[5]
  i2490.textMeshProEnabled = !!i2491[6]
  i2490.tk2DEnabled = !!i2491[7]
  i2490.deAudioEnabled = !!i2491[8]
  i2490.deUnityExtendedEnabled = !!i2491[9]
  i2490.epoOutlineEnabled = !!i2491[10]
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2493 = data
  var i2495 = i2493[0]
  var i2494 = []
  for(var i = 0; i < i2495.length; i += 1) {
    i2494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2495[i + 0]) );
  }
  i2492.files = i2494
  i2492.componentToPrefabIds = i2493[1]
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2499 = data
  i2498.path = i2499[0]
  request.r(i2499[1], i2499[2], 0, i2498, 'unityObject')
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2501 = data
  var i2503 = i2501[0]
  var i2502 = []
  for(var i = 0; i < i2503.length; i += 1) {
    i2502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2503[i + 0]) );
  }
  i2500.scriptsExecutionOrder = i2502
  var i2505 = i2501[1]
  var i2504 = []
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2505[i + 0]) );
  }
  i2500.sortingLayers = i2504
  var i2507 = i2501[2]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2507[i + 0]) );
  }
  i2500.cullingLayers = i2506
  i2500.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2501[3], i2500.timeSettings)
  i2500.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2501[4], i2500.physicsSettings)
  i2500.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2501[5], i2500.physics2DSettings)
  i2500.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2501[6], i2500.qualitySettings)
  i2500.enableRealtimeShadows = !!i2501[7]
  i2500.enableAutoInstancing = !!i2501[8]
  i2500.enableStaticBatching = !!i2501[9]
  i2500.enableDynamicBatching = !!i2501[10]
  i2500.usePreservativeDynamicBatching = !!i2501[11]
  i2500.lightmapEncodingQuality = i2501[12]
  i2500.desiredColorSpace = i2501[13]
  var i2509 = i2501[14]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( i2509[i + 0] );
  }
  i2500.allTags = i2508
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2513 = data
  i2512.name = i2513[0]
  i2512.value = i2513[1]
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2517 = data
  i2516.id = i2517[0]
  i2516.name = i2517[1]
  i2516.value = i2517[2]
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2521 = data
  i2520.id = i2521[0]
  i2520.name = i2521[1]
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2523 = data
  i2522.fixedDeltaTime = i2523[0]
  i2522.maximumDeltaTime = i2523[1]
  i2522.timeScale = i2523[2]
  i2522.maximumParticleTimestep = i2523[3]
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2525 = data
  i2524.gravity = new pc.Vec3( i2525[0], i2525[1], i2525[2] )
  i2524.defaultSolverIterations = i2525[3]
  i2524.bounceThreshold = i2525[4]
  i2524.autoSyncTransforms = !!i2525[5]
  i2524.autoSimulation = !!i2525[6]
  var i2527 = i2525[7]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2527[i + 0]) );
  }
  i2524.collisionMatrix = i2526
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2531 = data
  i2530.enabled = !!i2531[0]
  i2530.layerId = i2531[1]
  i2530.otherLayerId = i2531[2]
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2533 = data
  request.r(i2533[0], i2533[1], 0, i2532, 'material')
  i2532.gravity = new pc.Vec2( i2533[2], i2533[3] )
  i2532.positionIterations = i2533[4]
  i2532.velocityIterations = i2533[5]
  i2532.velocityThreshold = i2533[6]
  i2532.maxLinearCorrection = i2533[7]
  i2532.maxAngularCorrection = i2533[8]
  i2532.maxTranslationSpeed = i2533[9]
  i2532.maxRotationSpeed = i2533[10]
  i2532.baumgarteScale = i2533[11]
  i2532.baumgarteTOIScale = i2533[12]
  i2532.timeToSleep = i2533[13]
  i2532.linearSleepTolerance = i2533[14]
  i2532.angularSleepTolerance = i2533[15]
  i2532.defaultContactOffset = i2533[16]
  i2532.autoSimulation = !!i2533[17]
  i2532.queriesHitTriggers = !!i2533[18]
  i2532.queriesStartInColliders = !!i2533[19]
  i2532.callbacksOnDisable = !!i2533[20]
  i2532.reuseCollisionCallbacks = !!i2533[21]
  i2532.autoSyncTransforms = !!i2533[22]
  var i2535 = i2533[23]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2535[i + 0]) );
  }
  i2532.collisionMatrix = i2534
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2539 = data
  i2538.enabled = !!i2539[0]
  i2538.layerId = i2539[1]
  i2538.otherLayerId = i2539[2]
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2541 = data
  var i2543 = i2541[0]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2543[i + 0]) );
  }
  i2540.qualityLevels = i2542
  var i2545 = i2541[1]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.push( i2545[i + 0] );
  }
  i2540.names = i2544
  i2540.shadows = i2541[2]
  i2540.anisotropicFiltering = i2541[3]
  i2540.antiAliasing = i2541[4]
  i2540.lodBias = i2541[5]
  i2540.shadowCascades = i2541[6]
  i2540.shadowDistance = i2541[7]
  i2540.shadowmaskMode = i2541[8]
  i2540.shadowProjection = i2541[9]
  i2540.shadowResolution = i2541[10]
  i2540.softParticles = !!i2541[11]
  i2540.softVegetation = !!i2541[12]
  i2540.activeColorSpace = i2541[13]
  i2540.desiredColorSpace = i2541[14]
  i2540.masterTextureLimit = i2541[15]
  i2540.maxQueuedFrames = i2541[16]
  i2540.particleRaycastBudget = i2541[17]
  i2540.pixelLightCount = i2541[18]
  i2540.realtimeReflectionProbes = !!i2541[19]
  i2540.shadowCascade2Split = i2541[20]
  i2540.shadowCascade4Split = new pc.Vec3( i2541[21], i2541[22], i2541[23] )
  i2540.streamingMipmapsActive = !!i2541[24]
  i2540.vSyncCount = i2541[25]
  i2540.asyncUploadBufferSize = i2541[26]
  i2540.asyncUploadTimeSlice = i2541[27]
  i2540.billboardsFaceCameraPosition = !!i2541[28]
  i2540.shadowNearPlaneOffset = i2541[29]
  i2540.streamingMipmapsMemoryBudget = i2541[30]
  i2540.maximumLODLevel = i2541[31]
  i2540.streamingMipmapsAddAllCameras = !!i2541[32]
  i2540.streamingMipmapsMaxLevelReduction = i2541[33]
  i2540.streamingMipmapsRenderersPerFrame = i2541[34]
  i2540.resolutionScalingFixedDPIFactor = i2541[35]
  i2540.streamingMipmapsMaxFileIORequests = i2541[36]
  i2540.currentQualityLevel = i2541[37]
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i2549 = data
  var i2551 = i2549[0]
  var i2550 = []
  for(var i = 0; i < i2551.length; i += 1) {
    i2550.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i2551[i + 0]) );
  }
  i2548.groups = i2550
  var i2553 = i2549[1]
  var i2552 = []
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i2553[i + 0]) );
  }
  i2548.snapshots = i2552
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i2557 = data
  i2556.id = i2557[0]
  i2556.childGroupIds = i2557[1]
  i2556.name = i2557[2]
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i2561 = data
  i2560.id = i2561[0]
  var i2563 = i2561[1]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i2563[i + 0]) );
  }
  i2560.parameters = i2562
  return i2560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i2567 = data
  i2566.name = i2567[0]
  i2566.value = i2567[1]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2571 = data
  i2570.weight = i2571[0]
  i2570.vertices = i2571[1]
  i2570.normals = i2571[2]
  i2570.tangents = i2571[3]
  return i2570
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[78],"79":[43],"80":[81],"82":[81],"83":[81],"84":[81],"85":[81],"86":[81],"87":[81],"88":[37],"89":[37],"90":[37],"91":[37],"92":[37],"93":[37],"94":[37],"95":[37],"96":[37],"97":[37],"98":[37],"99":[37],"100":[37],"101":[43],"102":[103],"104":[105],"106":[105],"55":[48],"107":[108],"109":[12],"110":[25],"111":[12],"112":[113],"114":[113],"115":[50],"116":[25],"117":[12],"118":[10],"31":[12],"119":[48],"120":[48],"58":[55],"49":[59,48],"121":[48],"57":[55],"122":[48],"123":[48],"124":[48],"125":[48],"126":[48],"127":[48],"128":[48],"129":[48],"130":[48],"131":[59,48],"132":[48],"133":[48],"134":[48],"135":[48],"51":[59,48],"136":[48],"137":[63],"138":[63],"64":[63],"139":[63],"140":[43],"141":[43]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level3_Crown_Playable_NewTest","UnityEngine.GameObject","BasicDrag","BD_CameraFollow","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.AudioClip","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","PlayParticlesOnCollision","UnityEngine.CircleCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.PolygonCollider2D","UnityEngine.BoxCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SpriteMask","ActionOnTap","BD_AnimationHelper","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.TrailRenderer","BD_Progress","BD_Clamp","BD_ToolRotate","BD_AnimatorDrag","UnityEngine.Rigidbody2D","BD_SpriteChange","BD_ProgressHelper","Lvl3_PlaceGlue","Lvl3_PlaceItem","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableRouter","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","TeaseTapCTA","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "10/28/2026 09:44:32";

Deserializers.lunaDaysRunning = "27.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "MakeoverFashionASMR_Lvl3_1_Step_1to2_25Nov2026";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1780";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4291";

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

Deserializers.buildID = "150e6f1a-0785-4c5e-83fd-e20085ded093";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

