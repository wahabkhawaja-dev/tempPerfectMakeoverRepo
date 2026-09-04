var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1950 = root || request.c( 'UnityEngine.JointSpring' )
  var i1951 = data
  i1950.spring = i1951[0]
  i1950.damper = i1951[1]
  i1950.targetPosition = i1951[2]
  return i1950
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1952 = root || request.c( 'UnityEngine.JointMotor' )
  var i1953 = data
  i1952.m_TargetVelocity = i1953[0]
  i1952.m_Force = i1953[1]
  i1952.m_FreeSpin = i1953[2]
  return i1952
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1954 = root || request.c( 'UnityEngine.JointLimits' )
  var i1955 = data
  i1954.m_Min = i1955[0]
  i1954.m_Max = i1955[1]
  i1954.m_Bounciness = i1955[2]
  i1954.m_BounceMinVelocity = i1955[3]
  i1954.m_ContactDistance = i1955[4]
  i1954.minBounce = i1955[5]
  i1954.maxBounce = i1955[6]
  return i1954
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1956 = root || request.c( 'UnityEngine.JointDrive' )
  var i1957 = data
  i1956.m_PositionSpring = i1957[0]
  i1956.m_PositionDamper = i1957[1]
  i1956.m_MaximumForce = i1957[2]
  i1956.m_UseAcceleration = i1957[3]
  return i1956
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1958 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1959 = data
  i1958.m_Spring = i1959[0]
  i1958.m_Damper = i1959[1]
  return i1958
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1960 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1961 = data
  i1960.m_Limit = i1961[0]
  i1960.m_Bounciness = i1961[1]
  i1960.m_ContactDistance = i1961[2]
  return i1960
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1962 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1963 = data
  i1962.m_ExtremumSlip = i1963[0]
  i1962.m_ExtremumValue = i1963[1]
  i1962.m_AsymptoteSlip = i1963[2]
  i1962.m_AsymptoteValue = i1963[3]
  i1962.m_Stiffness = i1963[4]
  return i1962
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1964 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1965 = data
  i1964.m_LowerAngle = i1965[0]
  i1964.m_UpperAngle = i1965[1]
  return i1964
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1966 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1967 = data
  i1966.m_MotorSpeed = i1967[0]
  i1966.m_MaximumMotorTorque = i1967[1]
  return i1966
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1968 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1969 = data
  i1968.m_DampingRatio = i1969[0]
  i1968.m_Frequency = i1969[1]
  i1968.m_Angle = i1969[2]
  return i1968
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1970 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1971 = data
  i1970.m_LowerTranslation = i1971[0]
  i1970.m_UpperTranslation = i1971[1]
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1972 = root || new pc.UnityMaterial()
  var i1973 = data
  i1972.name = i1973[0]
  request.r(i1973[1], i1973[2], 0, i1972, 'shader')
  i1972.renderQueue = i1973[3]
  i1972.enableInstancing = !!i1973[4]
  var i1975 = i1973[5]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1975[i + 0]) );
  }
  i1972.floatParameters = i1974
  var i1977 = i1973[6]
  var i1976 = []
  for(var i = 0; i < i1977.length; i += 1) {
    i1976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1977[i + 0]) );
  }
  i1972.colorParameters = i1976
  var i1979 = i1973[7]
  var i1978 = []
  for(var i = 0; i < i1979.length; i += 1) {
    i1978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1979[i + 0]) );
  }
  i1972.vectorParameters = i1978
  var i1981 = i1973[8]
  var i1980 = []
  for(var i = 0; i < i1981.length; i += 1) {
    i1980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1981[i + 0]) );
  }
  i1972.textureParameters = i1980
  var i1983 = i1973[9]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1983[i + 0]) );
  }
  i1972.materialFlags = i1982
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1987 = data
  i1986.name = i1987[0]
  i1986.value = i1987[1]
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1991 = data
  i1990.name = i1991[0]
  i1990.value = new pc.Color(i1991[1], i1991[2], i1991[3], i1991[4])
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1995 = data
  i1994.name = i1995[0]
  i1994.value = new pc.Vec4( i1995[1], i1995[2], i1995[3], i1995[4] )
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1999 = data
  i1998.name = i1999[0]
  request.r(i1999[1], i1999[2], 0, i1998, 'value')
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2003 = data
  i2002.name = i2003[0]
  i2002.enabled = !!i2003[1]
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2005 = data
  i2004.name = i2005[0]
  i2004.width = i2005[1]
  i2004.height = i2005[2]
  i2004.mipmapCount = i2005[3]
  i2004.anisoLevel = i2005[4]
  i2004.filterMode = i2005[5]
  i2004.hdr = !!i2005[6]
  i2004.format = i2005[7]
  i2004.wrapMode = i2005[8]
  i2004.alphaIsTransparency = !!i2005[9]
  i2004.alphaSource = i2005[10]
  i2004.graphicsFormat = i2005[11]
  i2004.sRGBTexture = !!i2005[12]
  i2004.desiredColorSpace = i2005[13]
  i2004.wrapU = i2005[14]
  i2004.wrapV = i2005[15]
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2007 = data
  i2006.name = i2007[0]
  i2006.halfPrecision = !!i2007[1]
  i2006.useSimplification = !!i2007[2]
  i2006.useUInt32IndexFormat = !!i2007[3]
  i2006.vertexCount = i2007[4]
  i2006.aabb = i2007[5]
  var i2009 = i2007[6]
  var i2008 = []
  for(var i = 0; i < i2009.length; i += 1) {
    i2008.push( !!i2009[i + 0] );
  }
  i2006.streams = i2008
  i2006.vertices = i2007[7]
  var i2011 = i2007[8]
  var i2010 = []
  for(var i = 0; i < i2011.length; i += 1) {
    i2010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2011[i + 0]) );
  }
  i2006.subMeshes = i2010
  var i2013 = i2007[9]
  var i2012 = []
  for(var i = 0; i < i2013.length; i += 16) {
    i2012.push( new pc.Mat4().setData(i2013[i + 0], i2013[i + 1], i2013[i + 2], i2013[i + 3],  i2013[i + 4], i2013[i + 5], i2013[i + 6], i2013[i + 7],  i2013[i + 8], i2013[i + 9], i2013[i + 10], i2013[i + 11],  i2013[i + 12], i2013[i + 13], i2013[i + 14], i2013[i + 15]) );
  }
  i2006.bindposes = i2012
  var i2015 = i2007[10]
  var i2014 = []
  for(var i = 0; i < i2015.length; i += 1) {
    i2014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2015[i + 0]) );
  }
  i2006.blendShapes = i2014
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2021 = data
  i2020.triangles = i2021[0]
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2027 = data
  i2026.name = i2027[0]
  var i2029 = i2027[1]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2029[i + 0]) );
  }
  i2026.frames = i2028
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2031 = data
  i2030.position = new pc.Vec3( i2031[0], i2031[1], i2031[2] )
  i2030.scale = new pc.Vec3( i2031[3], i2031[4], i2031[5] )
  i2030.rotation = new pc.Quat(i2031[6], i2031[7], i2031[8], i2031[9])
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2033 = data
  i2032.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2033[0], i2032.main)
  i2032.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2033[1], i2032.colorBySpeed)
  i2032.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2033[2], i2032.colorOverLifetime)
  i2032.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2033[3], i2032.emission)
  i2032.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2033[4], i2032.rotationBySpeed)
  i2032.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2033[5], i2032.rotationOverLifetime)
  i2032.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2033[6], i2032.shape)
  i2032.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2033[7], i2032.sizeBySpeed)
  i2032.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2033[8], i2032.sizeOverLifetime)
  i2032.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2033[9], i2032.textureSheetAnimation)
  i2032.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2033[10], i2032.velocityOverLifetime)
  i2032.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2033[11], i2032.noise)
  i2032.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2033[12], i2032.inheritVelocity)
  i2032.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2033[13], i2032.forceOverLifetime)
  i2032.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2033[14], i2032.limitVelocityOverLifetime)
  i2032.useAutoRandomSeed = !!i2033[15]
  i2032.randomSeed = i2033[16]
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2034 = root || new pc.ParticleSystemMain()
  var i2035 = data
  i2034.duration = i2035[0]
  i2034.loop = !!i2035[1]
  i2034.prewarm = !!i2035[2]
  i2034.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2035[3], i2034.startDelay)
  i2034.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2035[4], i2034.startLifetime)
  i2034.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2035[5], i2034.startSpeed)
  i2034.startSize3D = !!i2035[6]
  i2034.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2035[7], i2034.startSizeX)
  i2034.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2035[8], i2034.startSizeY)
  i2034.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2035[9], i2034.startSizeZ)
  i2034.startRotation3D = !!i2035[10]
  i2034.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2035[11], i2034.startRotationX)
  i2034.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2035[12], i2034.startRotationY)
  i2034.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2035[13], i2034.startRotationZ)
  i2034.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2035[14], i2034.startColor)
  i2034.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2035[15], i2034.gravityModifier)
  i2034.simulationSpace = i2035[16]
  request.r(i2035[17], i2035[18], 0, i2034, 'customSimulationSpace')
  i2034.simulationSpeed = i2035[19]
  i2034.useUnscaledTime = !!i2035[20]
  i2034.scalingMode = i2035[21]
  i2034.playOnAwake = !!i2035[22]
  i2034.maxParticles = i2035[23]
  i2034.emitterVelocityMode = i2035[24]
  i2034.stopAction = i2035[25]
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2036 = root || new pc.MinMaxCurve()
  var i2037 = data
  i2036.mode = i2037[0]
  i2036.curveMin = new pc.AnimationCurve( { keys_flow: i2037[1] } )
  i2036.curveMax = new pc.AnimationCurve( { keys_flow: i2037[2] } )
  i2036.curveMultiplier = i2037[3]
  i2036.constantMin = i2037[4]
  i2036.constantMax = i2037[5]
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2038 = root || new pc.MinMaxGradient()
  var i2039 = data
  i2038.mode = i2039[0]
  i2038.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2039[1], i2038.gradientMin)
  i2038.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2039[2], i2038.gradientMax)
  i2038.colorMin = new pc.Color(i2039[3], i2039[4], i2039[5], i2039[6])
  i2038.colorMax = new pc.Color(i2039[7], i2039[8], i2039[9], i2039[10])
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2041 = data
  i2040.mode = i2041[0]
  var i2043 = i2041[1]
  var i2042 = []
  for(var i = 0; i < i2043.length; i += 1) {
    i2042.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2043[i + 0]) );
  }
  i2040.colorKeys = i2042
  var i2045 = i2041[2]
  var i2044 = []
  for(var i = 0; i < i2045.length; i += 1) {
    i2044.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2045[i + 0]) );
  }
  i2040.alphaKeys = i2044
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2046 = root || new pc.ParticleSystemColorBySpeed()
  var i2047 = data
  i2046.enabled = !!i2047[0]
  i2046.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2047[1], i2046.color)
  i2046.range = new pc.Vec2( i2047[2], i2047[3] )
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2051 = data
  i2050.color = new pc.Color(i2051[0], i2051[1], i2051[2], i2051[3])
  i2050.time = i2051[4]
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2055 = data
  i2054.alpha = i2055[0]
  i2054.time = i2055[1]
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2056 = root || new pc.ParticleSystemColorOverLifetime()
  var i2057 = data
  i2056.enabled = !!i2057[0]
  i2056.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2057[1], i2056.color)
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2058 = root || new pc.ParticleSystemEmitter()
  var i2059 = data
  i2058.enabled = !!i2059[0]
  i2058.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[1], i2058.rateOverTime)
  i2058.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2059[2], i2058.rateOverDistance)
  var i2061 = i2059[3]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2061[i + 0]) );
  }
  i2058.bursts = i2060
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2064 = root || new pc.ParticleSystemBurst()
  var i2065 = data
  i2064.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2065[0], i2064.count)
  i2064.cycleCount = i2065[1]
  i2064.minCount = i2065[2]
  i2064.maxCount = i2065[3]
  i2064.repeatInterval = i2065[4]
  i2064.time = i2065[5]
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2066 = root || new pc.ParticleSystemRotationBySpeed()
  var i2067 = data
  i2066.enabled = !!i2067[0]
  i2066.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2067[1], i2066.x)
  i2066.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2067[2], i2066.y)
  i2066.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2067[3], i2066.z)
  i2066.separateAxes = !!i2067[4]
  i2066.range = new pc.Vec2( i2067[5], i2067[6] )
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2068 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2069 = data
  i2068.enabled = !!i2069[0]
  i2068.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2069[1], i2068.x)
  i2068.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2069[2], i2068.y)
  i2068.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2069[3], i2068.z)
  i2068.separateAxes = !!i2069[4]
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2070 = root || new pc.ParticleSystemShape()
  var i2071 = data
  i2070.enabled = !!i2071[0]
  i2070.shapeType = i2071[1]
  i2070.randomDirectionAmount = i2071[2]
  i2070.sphericalDirectionAmount = i2071[3]
  i2070.randomPositionAmount = i2071[4]
  i2070.alignToDirection = !!i2071[5]
  i2070.radius = i2071[6]
  i2070.radiusMode = i2071[7]
  i2070.radiusSpread = i2071[8]
  i2070.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2071[9], i2070.radiusSpeed)
  i2070.radiusThickness = i2071[10]
  i2070.angle = i2071[11]
  i2070.length = i2071[12]
  i2070.boxThickness = new pc.Vec3( i2071[13], i2071[14], i2071[15] )
  i2070.meshShapeType = i2071[16]
  request.r(i2071[17], i2071[18], 0, i2070, 'mesh')
  request.r(i2071[19], i2071[20], 0, i2070, 'meshRenderer')
  request.r(i2071[21], i2071[22], 0, i2070, 'skinnedMeshRenderer')
  i2070.useMeshMaterialIndex = !!i2071[23]
  i2070.meshMaterialIndex = i2071[24]
  i2070.useMeshColors = !!i2071[25]
  i2070.normalOffset = i2071[26]
  i2070.arc = i2071[27]
  i2070.arcMode = i2071[28]
  i2070.arcSpread = i2071[29]
  i2070.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2071[30], i2070.arcSpeed)
  i2070.donutRadius = i2071[31]
  i2070.position = new pc.Vec3( i2071[32], i2071[33], i2071[34] )
  i2070.rotation = new pc.Vec3( i2071[35], i2071[36], i2071[37] )
  i2070.scale = new pc.Vec3( i2071[38], i2071[39], i2071[40] )
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2072 = root || new pc.ParticleSystemSizeBySpeed()
  var i2073 = data
  i2072.enabled = !!i2073[0]
  i2072.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[1], i2072.x)
  i2072.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[2], i2072.y)
  i2072.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2073[3], i2072.z)
  i2072.separateAxes = !!i2073[4]
  i2072.range = new pc.Vec2( i2073[5], i2073[6] )
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2074 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2075 = data
  i2074.enabled = !!i2075[0]
  i2074.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[1], i2074.x)
  i2074.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[2], i2074.y)
  i2074.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2075[3], i2074.z)
  i2074.separateAxes = !!i2075[4]
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2076 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2077 = data
  i2076.enabled = !!i2077[0]
  i2076.mode = i2077[1]
  i2076.animation = i2077[2]
  i2076.numTilesX = i2077[3]
  i2076.numTilesY = i2077[4]
  i2076.useRandomRow = !!i2077[5]
  i2076.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[6], i2076.frameOverTime)
  i2076.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2077[7], i2076.startFrame)
  i2076.cycleCount = i2077[8]
  i2076.rowIndex = i2077[9]
  i2076.flipU = i2077[10]
  i2076.flipV = i2077[11]
  i2076.spriteCount = i2077[12]
  var i2079 = i2077[13]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 2) {
  request.r(i2079[i + 0], i2079[i + 1], 2, i2078, '')
  }
  i2076.sprites = i2078
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2082 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2083 = data
  i2082.enabled = !!i2083[0]
  i2082.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[1], i2082.x)
  i2082.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[2], i2082.y)
  i2082.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[3], i2082.z)
  i2082.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[4], i2082.radial)
  i2082.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[5], i2082.speedModifier)
  i2082.space = i2083[6]
  i2082.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[7], i2082.orbitalX)
  i2082.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[8], i2082.orbitalY)
  i2082.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[9], i2082.orbitalZ)
  i2082.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[10], i2082.orbitalOffsetX)
  i2082.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[11], i2082.orbitalOffsetY)
  i2082.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2083[12], i2082.orbitalOffsetZ)
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2084 = root || new pc.ParticleSystemNoise()
  var i2085 = data
  i2084.enabled = !!i2085[0]
  i2084.separateAxes = !!i2085[1]
  i2084.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[2], i2084.strengthX)
  i2084.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[3], i2084.strengthY)
  i2084.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[4], i2084.strengthZ)
  i2084.frequency = i2085[5]
  i2084.damping = !!i2085[6]
  i2084.octaveCount = i2085[7]
  i2084.octaveMultiplier = i2085[8]
  i2084.octaveScale = i2085[9]
  i2084.quality = i2085[10]
  i2084.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[11], i2084.scrollSpeed)
  i2084.scrollSpeedMultiplier = i2085[12]
  i2084.remapEnabled = !!i2085[13]
  i2084.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[14], i2084.remapX)
  i2084.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[15], i2084.remapY)
  i2084.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[16], i2084.remapZ)
  i2084.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[17], i2084.positionAmount)
  i2084.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[18], i2084.rotationAmount)
  i2084.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2085[19], i2084.sizeAmount)
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2086 = root || new pc.ParticleSystemInheritVelocity()
  var i2087 = data
  i2086.enabled = !!i2087[0]
  i2086.mode = i2087[1]
  i2086.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2087[2], i2086.curve)
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2088 = root || new pc.ParticleSystemForceOverLifetime()
  var i2089 = data
  i2088.enabled = !!i2089[0]
  i2088.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[1], i2088.x)
  i2088.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[2], i2088.y)
  i2088.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2089[3], i2088.z)
  i2088.space = i2089[4]
  i2088.randomized = !!i2089[5]
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2090 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2091 = data
  i2090.enabled = !!i2091[0]
  i2090.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[1], i2090.limit)
  i2090.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[2], i2090.limitX)
  i2090.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[3], i2090.limitY)
  i2090.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[4], i2090.limitZ)
  i2090.dampen = i2091[5]
  i2090.separateAxes = !!i2091[6]
  i2090.space = i2091[7]
  i2090.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2091[8], i2090.drag)
  i2090.multiplyDragByParticleSize = !!i2091[9]
  i2090.multiplyDragByParticleVelocity = !!i2091[10]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2093 = data
  request.r(i2093[0], i2093[1], 0, i2092, 'mesh')
  i2092.meshCount = i2093[2]
  i2092.activeVertexStreamsCount = i2093[3]
  i2092.alignment = i2093[4]
  i2092.renderMode = i2093[5]
  i2092.sortMode = i2093[6]
  i2092.lengthScale = i2093[7]
  i2092.velocityScale = i2093[8]
  i2092.cameraVelocityScale = i2093[9]
  i2092.normalDirection = i2093[10]
  i2092.sortingFudge = i2093[11]
  i2092.minParticleSize = i2093[12]
  i2092.maxParticleSize = i2093[13]
  i2092.pivot = new pc.Vec3( i2093[14], i2093[15], i2093[16] )
  request.r(i2093[17], i2093[18], 0, i2092, 'trailMaterial')
  i2092.applyActiveColorSpace = !!i2093[19]
  i2092.enabled = !!i2093[20]
  request.r(i2093[21], i2093[22], 0, i2092, 'sharedMaterial')
  var i2095 = i2093[23]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 2) {
  request.r(i2095[i + 0], i2095[i + 1], 2, i2094, '')
  }
  i2092.sharedMaterials = i2094
  i2092.receiveShadows = !!i2093[24]
  i2092.shadowCastingMode = i2093[25]
  i2092.sortingLayerID = i2093[26]
  i2092.sortingOrder = i2093[27]
  i2092.lightmapIndex = i2093[28]
  i2092.lightmapSceneIndex = i2093[29]
  i2092.lightmapScaleOffset = new pc.Vec4( i2093[30], i2093[31], i2093[32], i2093[33] )
  i2092.lightProbeUsage = i2093[34]
  i2092.reflectionProbeUsage = i2093[35]
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2099 = data
  i2098.name = i2099[0]
  i2098.tagId = i2099[1]
  i2098.enabled = !!i2099[2]
  i2098.isStatic = !!i2099[3]
  i2098.layer = i2099[4]
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2101 = data
  i2100.pivot = new pc.Vec2( i2101[0], i2101[1] )
  i2100.anchorMin = new pc.Vec2( i2101[2], i2101[3] )
  i2100.anchorMax = new pc.Vec2( i2101[4], i2101[5] )
  i2100.sizeDelta = new pc.Vec2( i2101[6], i2101[7] )
  i2100.anchoredPosition3D = new pc.Vec3( i2101[8], i2101[9], i2101[10] )
  i2100.rotation = new pc.Quat(i2101[11], i2101[12], i2101[13], i2101[14])
  i2100.scale = new pc.Vec3( i2101[15], i2101[16], i2101[17] )
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2103 = data
  i2102.planeDistance = i2103[0]
  i2102.referencePixelsPerUnit = i2103[1]
  i2102.isFallbackOverlay = !!i2103[2]
  i2102.renderMode = i2103[3]
  i2102.renderOrder = i2103[4]
  i2102.sortingLayerName = i2103[5]
  i2102.sortingOrder = i2103[6]
  i2102.scaleFactor = i2103[7]
  request.r(i2103[8], i2103[9], 0, i2102, 'worldCamera')
  i2102.overrideSorting = !!i2103[10]
  i2102.pixelPerfect = !!i2103[11]
  i2102.targetDisplay = i2103[12]
  i2102.overridePixelPerfect = !!i2103[13]
  i2102.enabled = !!i2103[14]
  return i2102
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2104 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2105 = data
  i2104.m_UiScaleMode = i2105[0]
  i2104.m_ReferencePixelsPerUnit = i2105[1]
  i2104.m_ScaleFactor = i2105[2]
  i2104.m_ReferenceResolution = new pc.Vec2( i2105[3], i2105[4] )
  i2104.m_ScreenMatchMode = i2105[5]
  i2104.m_MatchWidthOrHeight = i2105[6]
  i2104.m_PhysicalUnit = i2105[7]
  i2104.m_FallbackScreenDPI = i2105[8]
  i2104.m_DefaultSpriteDPI = i2105[9]
  i2104.m_DynamicPixelsPerUnit = i2105[10]
  i2104.m_PresetInfoIsWorld = !!i2105[11]
  return i2104
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2106 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2107 = data
  i2106.m_IgnoreReversedGraphics = !!i2107[0]
  i2106.m_BlockingObjects = i2107[1]
  i2106.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2107[2] )
  return i2106
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2108 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2109 = data
  i2108.targetIsSelf = !!i2109[0]
  request.r(i2109[1], i2109[2], 0, i2108, 'targetGO')
  i2108.tweenTargetIsTargetGO = !!i2109[3]
  i2108.delay = i2109[4]
  i2108.duration = i2109[5]
  i2108.easeType = i2109[6]
  i2108.easeCurve = new pc.AnimationCurve( { keys_flow: i2109[7] } )
  i2108.loopType = i2109[8]
  i2108.loops = i2109[9]
  i2108.id = i2109[10]
  i2108.isRelative = !!i2109[11]
  i2108.isFrom = !!i2109[12]
  i2108.isIndependentUpdate = !!i2109[13]
  i2108.autoKill = !!i2109[14]
  i2108.autoGenerate = !!i2109[15]
  i2108.isActive = !!i2109[16]
  i2108.isValid = !!i2109[17]
  request.r(i2109[18], i2109[19], 0, i2108, 'target')
  i2108.animationType = i2109[20]
  i2108.targetType = i2109[21]
  i2108.forcedTargetType = i2109[22]
  i2108.autoPlay = !!i2109[23]
  i2108.useTargetAsV3 = !!i2109[24]
  i2108.endValueFloat = i2109[25]
  i2108.endValueV3 = new pc.Vec3( i2109[26], i2109[27], i2109[28] )
  i2108.endValueV2 = new pc.Vec2( i2109[29], i2109[30] )
  i2108.endValueColor = new pc.Color(i2109[31], i2109[32], i2109[33], i2109[34])
  i2108.endValueString = i2109[35]
  i2108.endValueRect = UnityEngine.Rect.MinMaxRect(i2109[36], i2109[37], i2109[38], i2109[39])
  request.r(i2109[40], i2109[41], 0, i2108, 'endValueTransform')
  i2108.optionalBool0 = !!i2109[42]
  i2108.optionalBool1 = !!i2109[43]
  i2108.optionalFloat0 = i2109[44]
  i2108.optionalInt0 = i2109[45]
  i2108.optionalRotationMode = i2109[46]
  i2108.optionalScrambleMode = i2109[47]
  i2108.optionalShakeRandomnessMode = i2109[48]
  i2108.optionalString = i2109[49]
  i2108.updateType = i2109[50]
  i2108.isSpeedBased = !!i2109[51]
  i2108.hasOnStart = !!i2109[52]
  i2108.hasOnPlay = !!i2109[53]
  i2108.hasOnUpdate = !!i2109[54]
  i2108.hasOnStepComplete = !!i2109[55]
  i2108.hasOnComplete = !!i2109[56]
  i2108.hasOnTweenCreated = !!i2109[57]
  i2108.hasOnRewind = !!i2109[58]
  i2108.onStart = request.d('UnityEngine.Events.UnityEvent', i2109[59], i2108.onStart)
  i2108.onPlay = request.d('UnityEngine.Events.UnityEvent', i2109[60], i2108.onPlay)
  i2108.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2109[61], i2108.onUpdate)
  i2108.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2109[62], i2108.onStepComplete)
  i2108.onComplete = request.d('UnityEngine.Events.UnityEvent', i2109[63], i2108.onComplete)
  i2108.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2109[64], i2108.onTweenCreated)
  i2108.onRewind = request.d('UnityEngine.Events.UnityEvent', i2109[65], i2108.onRewind)
  return i2108
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2110 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2111 = data
  i2110.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2111[0], i2110.m_PersistentCalls)
  return i2110
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2112 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2113 = data
  var i2115 = i2113[0]
  var i2114 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2115.length; i += 1) {
    i2114.add(request.d('UnityEngine.Events.PersistentCall', i2115[i + 0]));
  }
  i2112.m_Calls = i2114
  return i2112
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2118 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2119 = data
  request.r(i2119[0], i2119[1], 0, i2118, 'm_Target')
  i2118.m_TargetAssemblyTypeName = i2119[2]
  i2118.m_MethodName = i2119[3]
  i2118.m_Mode = i2119[4]
  i2118.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2119[5], i2118.m_Arguments)
  i2118.m_CallState = i2119[6]
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2121 = data
  i2120.cullTransparentMesh = !!i2121[0]
  return i2120
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2122 = root || request.c( 'UnityEngine.UI.Image' )
  var i2123 = data
  request.r(i2123[0], i2123[1], 0, i2122, 'm_Sprite')
  i2122.m_Type = i2123[2]
  i2122.m_PreserveAspect = !!i2123[3]
  i2122.m_FillCenter = !!i2123[4]
  i2122.m_FillMethod = i2123[5]
  i2122.m_FillAmount = i2123[6]
  i2122.m_FillClockwise = !!i2123[7]
  i2122.m_FillOrigin = i2123[8]
  i2122.m_UseSpriteMesh = !!i2123[9]
  i2122.m_PixelsPerUnitMultiplier = i2123[10]
  request.r(i2123[11], i2123[12], 0, i2122, 'm_Material')
  i2122.m_Maskable = !!i2123[13]
  i2122.m_Color = new pc.Color(i2123[14], i2123[15], i2123[16], i2123[17])
  i2122.m_RaycastTarget = !!i2123[18]
  i2122.m_RaycastPadding = new pc.Vec4( i2123[19], i2123[20], i2123[21], i2123[22] )
  return i2122
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2124 = root || request.c( 'UnityEngine.UI.Text' )
  var i2125 = data
  i2124.m_FontData = request.d('UnityEngine.UI.FontData', i2125[0], i2124.m_FontData)
  i2124.m_Text = i2125[1]
  request.r(i2125[2], i2125[3], 0, i2124, 'm_Material')
  i2124.m_Maskable = !!i2125[4]
  i2124.m_Color = new pc.Color(i2125[5], i2125[6], i2125[7], i2125[8])
  i2124.m_RaycastTarget = !!i2125[9]
  i2124.m_RaycastPadding = new pc.Vec4( i2125[10], i2125[11], i2125[12], i2125[13] )
  return i2124
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2126 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2127 = data
  request.r(i2127[0], i2127[1], 0, i2126, 'm_Font')
  i2126.m_FontSize = i2127[2]
  i2126.m_FontStyle = i2127[3]
  i2126.m_BestFit = !!i2127[4]
  i2126.m_MinSize = i2127[5]
  i2126.m_MaxSize = i2127[6]
  i2126.m_Alignment = i2127[7]
  i2126.m_AlignByGeometry = !!i2127[8]
  i2126.m_RichText = !!i2127[9]
  i2126.m_HorizontalOverflow = i2127[10]
  i2126.m_VerticalOverflow = i2127[11]
  i2126.m_LineSpacing = i2127[12]
  return i2126
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2128 = root || request.c( 'UnityEngine.UI.Button' )
  var i2129 = data
  i2128.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2129[0], i2128.m_OnClick)
  i2128.m_Navigation = request.d('UnityEngine.UI.Navigation', i2129[1], i2128.m_Navigation)
  i2128.m_Transition = i2129[2]
  i2128.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2129[3], i2128.m_Colors)
  i2128.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2129[4], i2128.m_SpriteState)
  i2128.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2129[5], i2128.m_AnimationTriggers)
  i2128.m_Interactable = !!i2129[6]
  request.r(i2129[7], i2129[8], 0, i2128, 'm_TargetGraphic')
  return i2128
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2130 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2131 = data
  i2130.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2131[0], i2130.m_PersistentCalls)
  return i2130
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2132 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2133 = data
  request.r(i2133[0], i2133[1], 0, i2132, 'm_ObjectArgument')
  i2132.m_ObjectArgumentAssemblyTypeName = i2133[2]
  i2132.m_IntArgument = i2133[3]
  i2132.m_FloatArgument = i2133[4]
  i2132.m_StringArgument = i2133[5]
  i2132.m_BoolArgument = !!i2133[6]
  return i2132
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2134 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2135 = data
  i2134.m_Mode = i2135[0]
  i2134.m_WrapAround = !!i2135[1]
  request.r(i2135[2], i2135[3], 0, i2134, 'm_SelectOnUp')
  request.r(i2135[4], i2135[5], 0, i2134, 'm_SelectOnDown')
  request.r(i2135[6], i2135[7], 0, i2134, 'm_SelectOnLeft')
  request.r(i2135[8], i2135[9], 0, i2134, 'm_SelectOnRight')
  return i2134
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2136 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2137 = data
  i2136.m_NormalColor = new pc.Color(i2137[0], i2137[1], i2137[2], i2137[3])
  i2136.m_HighlightedColor = new pc.Color(i2137[4], i2137[5], i2137[6], i2137[7])
  i2136.m_PressedColor = new pc.Color(i2137[8], i2137[9], i2137[10], i2137[11])
  i2136.m_SelectedColor = new pc.Color(i2137[12], i2137[13], i2137[14], i2137[15])
  i2136.m_DisabledColor = new pc.Color(i2137[16], i2137[17], i2137[18], i2137[19])
  i2136.m_ColorMultiplier = i2137[20]
  i2136.m_FadeDuration = i2137[21]
  return i2136
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2138 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2139 = data
  request.r(i2139[0], i2139[1], 0, i2138, 'm_HighlightedSprite')
  request.r(i2139[2], i2139[3], 0, i2138, 'm_PressedSprite')
  request.r(i2139[4], i2139[5], 0, i2138, 'm_SelectedSprite')
  request.r(i2139[6], i2139[7], 0, i2138, 'm_DisabledSprite')
  return i2138
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2140 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2141 = data
  i2140.m_NormalTrigger = i2141[0]
  i2140.m_HighlightedTrigger = i2141[1]
  i2140.m_PressedTrigger = i2141[2]
  i2140.m_SelectedTrigger = i2141[3]
  i2140.m_DisabledTrigger = i2141[4]
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2143 = data
  request.r(i2143[0], i2143[1], 0, i2142, 'animatorController')
  request.r(i2143[2], i2143[3], 0, i2142, 'avatar')
  i2142.updateMode = i2143[4]
  i2142.hasTransformHierarchy = !!i2143[5]
  i2142.applyRootMotion = !!i2143[6]
  var i2145 = i2143[7]
  var i2144 = []
  for(var i = 0; i < i2145.length; i += 2) {
  request.r(i2145[i + 0], i2145[i + 1], 2, i2144, '')
  }
  i2142.humanBones = i2144
  i2142.enabled = !!i2143[8]
  return i2142
}

Deserializers["Level1_Cloth_Playable_Step4"] = function (request, data, root) {
  var i2148 = root || request.c( 'Level1_Cloth_Playable_Step4' )
  var i2149 = data
  request.r(i2149[0], i2149[1], 0, i2148, 'WashingView')
  request.r(i2149[2], i2149[3], 0, i2148, 'WashingTools')
  request.r(i2149[4], i2149[5], 0, i2148, 'DressingView')
  request.r(i2149[6], i2149[7], 0, i2148, 'DressingTools')
  i2148.ZoomStep1 = request.d('ZoomPos', i2149[8], i2148.ZoomStep1)
  request.r(i2149[9], i2149[10], 0, i2148, 'ToolStep1')
  request.r(i2149[11], i2149[12], 0, i2148, 'Basket_Cloth')
  request.r(i2149[13], i2149[14], 0, i2148, 'clothInside')
  request.r(i2149[15], i2149[16], 0, i2148, 'clothRound')
  request.r(i2149[17], i2149[18], 0, i2148, 'machineDoor')
  request.r(i2149[19], i2149[20], 0, i2148, 'machineGlass')
  i2148.ZoomStep2 = request.d('ZoomPos', i2149[21], i2148.ZoomStep2)
  i2148.ZoomStep2b = request.d('ZoomPos', i2149[22], i2148.ZoomStep2b)
  request.r(i2149[23], i2149[24], 0, i2148, 'ToolStep2')
  request.r(i2149[25], i2149[26], 0, i2148, 'ToolStep2CamFollow')
  request.r(i2149[27], i2149[28], 0, i2148, 'drawerObj')
  request.r(i2149[29], i2149[30], 0, i2148, 'surfObj')
  request.r(i2149[31], i2149[32], 0, i2148, 'surfPackTop')
  request.r(i2149[33], i2149[34], 0, i2148, 'handStep2')
  request.r(i2149[35], i2149[36], 0, i2148, 'surfController')
  request.r(i2149[37], i2149[38], 0, i2148, 'clothsInside')
  request.r(i2149[39], i2149[40], 0, i2148, 'clothsInsideGlass')
  request.r(i2149[41], i2149[42], 0, i2148, 'clothsStaticClean')
  request.r(i2149[43], i2149[44], 0, i2148, 'wetCloths')
  request.r(i2149[45], i2149[46], 0, i2148, 'clothCleanInside')
  request.r(i2149[47], i2149[48], 0, i2148, 'clothCleanInsideAnim')
  request.r(i2149[49], i2149[50], 0, i2148, 'waterWave')
  request.r(i2149[51], i2149[52], 0, i2148, 'clothCleanInside2')
  request.r(i2149[53], i2149[54], 0, i2148, 'clothCleanInside2Cam')
  request.r(i2149[55], i2149[56], 0, i2148, 'clothBasketTarget')
  request.r(i2149[57], i2149[58], 0, i2148, 'clothBasketTarget2')
  request.r(i2149[59], i2149[60], 0, i2148, 'waterSplash_Vfx')
  request.r(i2149[61], i2149[62], 0, i2148, 'countDownTimerText')
  i2148.countDown = i2149[63]
  request.r(i2149[64], i2149[65], 0, i2148, 'machineTimer')
  request.r(i2149[66], i2149[67], 0, i2148, 'machineTimerRotater')
  request.r(i2149[68], i2149[69], 0, i2148, 'machineTimerIndication')
  request.r(i2149[70], i2149[71], 0, i2148, 'darazOpenSfx')
  request.r(i2149[72], i2149[73], 0, i2148, 'darazCloseSfx')
  request.r(i2149[74], i2149[75], 0, i2148, 'doorOpenSfx')
  request.r(i2149[76], i2149[77], 0, i2148, 'machineStartSfx')
  request.r(i2149[78], i2149[79], 0, i2148, 'machineFinishSfx')
  request.r(i2149[80], i2149[81], 0, i2148, 'waterDrainSfx')
  i2148.ZoomStep3a = request.d('ZoomPos', i2149[82], i2148.ZoomStep3a)
  request.r(i2149[83], i2149[84], 0, i2148, 'ToolStep3a')
  request.r(i2149[85], i2149[86], 0, i2148, 'ToolStep3aRend')
  request.r(i2149[87], i2149[88], 0, i2148, 'dressingBasket')
  request.r(i2149[89], i2149[90], 0, i2148, 'dummyFullParent')
  request.r(i2149[91], i2149[92], 0, i2148, 'DressParent')
  i2148.ZoomStep3 = request.d('ZoomPos', i2149[93], i2148.ZoomStep3)
  request.r(i2149[94], i2149[95], 0, i2148, 'ToolStep3')
  request.r(i2149[96], i2149[97], 0, i2148, 'tornPatch')
  request.r(i2149[98], i2149[99], 0, i2148, 'patchCompleted')
  request.r(i2149[100], i2149[101], 0, i2148, 'patchOutline')
  i2148.ZoomStep4 = request.d('ZoomPos', i2149[102], i2148.ZoomStep4)
  request.r(i2149[103], i2149[104], 0, i2148, 'ToolStep4')
  request.r(i2149[105], i2149[106], 0, i2148, 'camFollowStep4')
  request.r(i2149[107], i2149[108], 0, i2148, 'SteamerBottom')
  i2148.levelName = i2149[109]
  i2148.levelReward = i2149[110]
  request.r(i2149[111], i2149[112], 0, i2148, 'LevelIcon')
  request.r(i2149[113], i2149[114], 0, i2148, 'Level_BG')
  var i2151 = i2149[115]
  var i2150 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2151.length; i += 2) {
  request.r(i2151[i + 0], i2151[i + 1], 1, i2150, '')
  }
  i2148.ToolIcons = i2150
  var i2153 = i2149[116]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 2) {
  request.r(i2153[i + 0], i2153[i + 1], 2, i2152, '')
  }
  i2148.AllDrags = i2152
  var i2155 = i2149[117]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 2) {
  request.r(i2155[i + 0], i2155[i + 1], 2, i2154, '')
  }
  i2148.AllSources = i2154
  var i2157 = i2149[118]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 2) {
  request.r(i2157[i + 0], i2157[i + 1], 2, i2156, '')
  }
  i2148.AllScratches = i2156
  i2148.stepsDone = i2149[119]
  i2148.levelNo = i2149[120]
  i2148.partNo = i2149[121]
  request.r(i2149[122], i2149[123], 0, i2148, 'clothSfx')
  request.r(i2149[124], i2149[125], 0, i2148, 'doorCloseSfx')
  return i2148
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i2158 = root || request.c( 'ZoomPos' )
  var i2159 = data
  i2158.CameraPos = new pc.Vec3( i2159[0], i2159[1], i2159[2] )
  i2158.CameraFOV = i2159[3]
  return i2158
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i2168 = root || request.c( 'PlayableCTA' )
  var i2169 = data
  i2168.trigger = i2169[0]
  i2168.afterSeconds = i2169[1]
  i2168.afterTaps = i2169[2]
  request.r(i2169[3], i2169[4], 0, i2168, 'scratchProgress')
  i2168.scratchIndex = i2169[5]
  i2168.progressThreshold = i2169[6]
  request.r(i2169[7], i2169[8], 0, i2168, 'watchedTool')
  i2168.blockInputOnFire = !!i2169[9]
  i2168.refireOnEveryTap = !!i2169[10]
  i2168.refireDelay = i2169[11]
  i2168.showEndCard = !!i2169[12]
  request.r(i2169[13], i2169[14], 0, i2168, 'endCard')
  i2168.showEndCardOnProgressTrigger = !!i2169[15]
  i2168.showEndCardOnToolAppearTrigger = !!i2169[16]
  i2168.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i2169[17], i2168.onCtaFired)
  i2168.logWhenFired = !!i2169[18]
  return i2168
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i2170 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i2171 = data
  request.r(i2171[0], i2171[1], 0, i2170, 'MainCamera')
  i2170.RenderType = i2171[2]
  request.r(i2171[3], i2171[4], 0, i2170, 'ScratchSurfaceSprite')
  i2170.ScratchSurfaceSpriteHasAlpha = !!i2171[5]
  i2170.MaskProgressCutOffValue = i2171[6]
  request.r(i2171[7], i2171[8], 0, i2170, 'EraseTexture')
  i2170.EraseTextureScale = new pc.Vec2( i2171[9], i2171[10] )
  i2170.InputEnabled = !!i2171[11]
  request.r(i2171[12], i2171[13], 0, i2170, 'Card')
  i2170.Mode = i2171[14]
  request.r(i2171[15], i2171[16], 0, i2170, 'Progress')
  request.r(i2171[17], i2171[18], 0, i2170, 'MeshCard')
  request.r(i2171[19], i2171[20], 0, i2170, 'SpriteCard')
  request.r(i2171[21], i2171[22], 0, i2170, 'ImageCard')
  request.r(i2171[23], i2171[24], 0, i2170, 'MaskShader')
  request.r(i2171[25], i2171[26], 0, i2170, 'BrushShader')
  request.r(i2171[27], i2171[28], 0, i2170, 'MaskProgressShader')
  request.r(i2171[29], i2171[30], 0, i2170, 'MaskProgressCutOffShader')
  return i2170
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i2172 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i2173 = data
  request.r(i2173[0], i2173[1], 0, i2172, 'MainCamera')
  request.r(i2173[2], i2173[3], 0, i2172, 'Surface')
  i2172.RenderTextureQuality = i2173[4]
  request.r(i2173[5], i2173[6], 0, i2172, 'Eraser')
  request.r(i2173[7], i2173[8], 0, i2172, 'Progress')
  request.r(i2173[9], i2173[10], 0, i2172, 'ScratchSurface')
  request.r(i2173[11], i2173[12], 0, i2172, 'RenderTexture')
  i2172.BrushScale = new pc.Vec2( i2173[13], i2173[14] )
  request.r(i2173[15], i2173[16], 0, i2172, 'ToolTip')
  i2172.InputEnabled = !!i2173[17]
  i2172.IsScratching = !!i2173[18]
  i2172.useChangingScale = !!i2173[19]
  i2172.useGivenBrushScale = !!i2173[20]
  i2172.canSpreadMask = !!i2173[21]
  i2172.shouldPaintHoles = !!i2173[22]
  i2172.canRotateTip = !!i2173[23]
  i2172._mode = i2173[24]
  return i2172
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i2174 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i2175 = data
  request.r(i2175[0], i2175[1], 0, i2174, 'Card')
  i2174.currentProgress = i2175[2]
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i2177 = data
  i2176.textureMode = i2177[0]
  i2176.alignment = i2177[1]
  i2176.widthCurve = new pc.AnimationCurve( { keys_flow: i2177[2] } )
  i2176.colorGradient = i2177[3] ? new pc.ColorGradient(i2177[3][0], i2177[3][1], i2177[3][2]) : null
  var i2179 = i2177[4]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 3) {
    i2178.push( new pc.Vec3( i2179[i + 0], i2179[i + 1], i2179[i + 2] ) );
  }
  i2176.positions = i2178
  i2176.positionCount = i2177[5]
  i2176.widthMultiplier = i2177[6]
  i2176.startWidth = i2177[7]
  i2176.endWidth = i2177[8]
  i2176.numCornerVertices = i2177[9]
  i2176.numCapVertices = i2177[10]
  i2176.useWorldSpace = !!i2177[11]
  i2176.loop = !!i2177[12]
  i2176.startColor = new pc.Color(i2177[13], i2177[14], i2177[15], i2177[16])
  i2176.endColor = new pc.Color(i2177[17], i2177[18], i2177[19], i2177[20])
  i2176.generateLightingData = !!i2177[21]
  i2176.enabled = !!i2177[22]
  request.r(i2177[23], i2177[24], 0, i2176, 'sharedMaterial')
  var i2181 = i2177[25]
  var i2180 = []
  for(var i = 0; i < i2181.length; i += 2) {
  request.r(i2181[i + 0], i2181[i + 1], 2, i2180, '')
  }
  i2176.sharedMaterials = i2180
  i2176.receiveShadows = !!i2177[26]
  i2176.shadowCastingMode = i2177[27]
  i2176.sortingLayerID = i2177[28]
  i2176.sortingOrder = i2177[29]
  i2176.lightmapIndex = i2177[30]
  i2176.lightmapSceneIndex = i2177[31]
  i2176.lightmapScaleOffset = new pc.Vec4( i2177[32], i2177[33], i2177[34], i2177[35] )
  i2176.lightProbeUsage = i2177[36]
  i2176.reflectionProbeUsage = i2177[37]
  return i2176
}

Deserializers["TextureOffsetScroller"] = function (request, data, root) {
  var i2184 = root || request.c( 'TextureOffsetScroller' )
  var i2185 = data
  i2184.scrollSpeed = new pc.Vec2( i2185[0], i2185[1] )
  i2184.smoothStart = !!i2185[2]
  i2184.smoothDuration = i2185[3]
  i2184.textureName = i2185[4]
  i2184.useSharedMaterial = !!i2185[5]
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2187 = data
  i2186.color = new pc.Color(i2187[0], i2187[1], i2187[2], i2187[3])
  request.r(i2187[4], i2187[5], 0, i2186, 'sprite')
  i2186.flipX = !!i2187[6]
  i2186.flipY = !!i2187[7]
  i2186.drawMode = i2187[8]
  i2186.size = new pc.Vec2( i2187[9], i2187[10] )
  i2186.tileMode = i2187[11]
  i2186.adaptiveModeThreshold = i2187[12]
  i2186.maskInteraction = i2187[13]
  i2186.spriteSortPoint = i2187[14]
  i2186.enabled = !!i2187[15]
  request.r(i2187[16], i2187[17], 0, i2186, 'sharedMaterial')
  var i2189 = i2187[18]
  var i2188 = []
  for(var i = 0; i < i2189.length; i += 2) {
  request.r(i2189[i + 0], i2189[i + 1], 2, i2188, '')
  }
  i2186.sharedMaterials = i2188
  i2186.receiveShadows = !!i2187[19]
  i2186.shadowCastingMode = i2187[20]
  i2186.sortingLayerID = i2187[21]
  i2186.sortingOrder = i2187[22]
  i2186.lightmapIndex = i2187[23]
  i2186.lightmapSceneIndex = i2187[24]
  i2186.lightmapScaleOffset = new pc.Vec4( i2187[25], i2187[26], i2187[27], i2187[28] )
  i2186.lightProbeUsage = i2187[29]
  i2186.reflectionProbeUsage = i2187[30]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i2191 = data
  var i2193 = i2191[0]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 3) {
    i2192.push( new pc.Vec3( i2193[i + 0], i2193[i + 1], i2193[i + 2] ) );
  }
  i2190.positions = i2192
  i2190.positionCount = i2191[1]
  i2190.time = i2191[2]
  i2190.startWidth = i2191[3]
  i2190.endWidth = i2191[4]
  i2190.widthMultiplier = i2191[5]
  i2190.autodestruct = !!i2191[6]
  i2190.emitting = !!i2191[7]
  i2190.numCornerVertices = i2191[8]
  i2190.numCapVertices = i2191[9]
  i2190.minVertexDistance = i2191[10]
  i2190.colorGradient = i2191[11] ? new pc.ColorGradient(i2191[11][0], i2191[11][1], i2191[11][2]) : null
  i2190.startColor = new pc.Color(i2191[12], i2191[13], i2191[14], i2191[15])
  i2190.endColor = new pc.Color(i2191[16], i2191[17], i2191[18], i2191[19])
  i2190.generateLightingData = !!i2191[20]
  i2190.textureMode = i2191[21]
  i2190.alignment = i2191[22]
  i2190.widthCurve = new pc.AnimationCurve( { keys_flow: i2191[23] } )
  i2190.enabled = !!i2191[24]
  request.r(i2191[25], i2191[26], 0, i2190, 'sharedMaterial')
  var i2195 = i2191[27]
  var i2194 = []
  for(var i = 0; i < i2195.length; i += 2) {
  request.r(i2195[i + 0], i2195[i + 1], 2, i2194, '')
  }
  i2190.sharedMaterials = i2194
  i2190.receiveShadows = !!i2191[28]
  i2190.shadowCastingMode = i2191[29]
  i2190.sortingLayerID = i2191[30]
  i2190.sortingOrder = i2191[31]
  i2190.lightmapIndex = i2191[32]
  i2190.lightmapSceneIndex = i2191[33]
  i2190.lightmapScaleOffset = new pc.Vec4( i2191[34], i2191[35], i2191[36], i2191[37] )
  i2190.lightProbeUsage = i2191[38]
  i2190.reflectionProbeUsage = i2191[39]
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2197 = data
  i2196.usedByComposite = !!i2197[0]
  i2196.autoTiling = !!i2197[1]
  i2196.size = new pc.Vec2( i2197[2], i2197[3] )
  i2196.edgeRadius = i2197[4]
  i2196.enabled = !!i2197[5]
  i2196.isTrigger = !!i2197[6]
  i2196.usedByEffector = !!i2197[7]
  i2196.density = i2197[8]
  i2196.offset = new pc.Vec2( i2197[9], i2197[10] )
  request.r(i2197[11], i2197[12], 0, i2196, 'material')
  return i2196
}

Deserializers["RotaryTimerKnob"] = function (request, data, root) {
  var i2198 = root || request.c( 'RotaryTimerKnob' )
  var i2199 = data
  i2198.canDrag = !!i2199[0]
  i2198.numSteps = i2199[1]
  i2198.onlyClockwise = !!i2199[2]
  request.r(i2199[3], i2199[4], 0, i2198, 'clickSound')
  i2198.enableVibration = !!i2199[5]
  request.r(i2199[6], i2199[7], 0, i2198, 'stepText')
  i2198.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2199[8], i2198.OnComplete)
  request.r(i2199[9], i2199[10], 0, i2198, 'handIndication')
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2201 = data
  request.r(i2201[0], i2201[1], 0, i2200, 'additionalVertexStreams')
  i2200.enabled = !!i2201[2]
  request.r(i2201[3], i2201[4], 0, i2200, 'sharedMaterial')
  var i2203 = i2201[5]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 2) {
  request.r(i2203[i + 0], i2203[i + 1], 2, i2202, '')
  }
  i2200.sharedMaterials = i2202
  i2200.receiveShadows = !!i2201[6]
  i2200.shadowCastingMode = i2201[7]
  i2200.sortingLayerID = i2201[8]
  i2200.sortingOrder = i2201[9]
  i2200.lightmapIndex = i2201[10]
  i2200.lightmapSceneIndex = i2201[11]
  i2200.lightmapScaleOffset = new pc.Vec4( i2201[12], i2201[13], i2201[14], i2201[15] )
  i2200.lightProbeUsage = i2201[16]
  i2200.reflectionProbeUsage = i2201[17]
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2205 = data
  i2204.frontSortingLayerID = i2205[0]
  i2204.frontSortingOrder = i2205[1]
  i2204.backSortingLayerID = i2205[2]
  i2204.backSortingOrder = i2205[3]
  i2204.alphaCutoff = i2205[4]
  request.r(i2205[5], i2205[6], 0, i2204, 'sprite')
  i2204.tileMode = i2205[7]
  i2204.isCustomRangeActive = !!i2205[8]
  i2204.spriteSortPoint = i2205[9]
  i2204.enabled = !!i2205[10]
  request.r(i2205[11], i2205[12], 0, i2204, 'sharedMaterial')
  var i2207 = i2205[13]
  var i2206 = []
  for(var i = 0; i < i2207.length; i += 2) {
  request.r(i2207[i + 0], i2207[i + 1], 2, i2206, '')
  }
  i2204.sharedMaterials = i2206
  i2204.receiveShadows = !!i2205[14]
  i2204.shadowCastingMode = i2205[15]
  i2204.sortingLayerID = i2205[16]
  i2204.sortingOrder = i2205[17]
  i2204.lightmapIndex = i2205[18]
  i2204.lightmapSceneIndex = i2205[19]
  i2204.lightmapScaleOffset = new pc.Vec4( i2205[20], i2205[21], i2205[22], i2205[23] )
  i2204.lightProbeUsage = i2205[24]
  i2204.reflectionProbeUsage = i2205[25]
  return i2204
}

Deserializers["_2dxFX_Wave"] = function (request, data, root) {
  var i2208 = root || request.c( '_2dxFX_Wave' )
  var i2209 = data
  request.r(i2209[0], i2209[1], 0, i2208, 'ForceMaterial')
  i2208.ActiveChange = !!i2209[2]
  i2208._Alpha = i2209[3]
  i2208._OffsetX = i2209[4]
  i2208._OffsetY = i2209[5]
  i2208._DistanceX = i2209[6]
  i2208._DistanceY = i2209[7]
  i2208._WaveTimeX = i2209[8]
  i2208._WaveTimeY = i2209[9]
  i2208.AutoPlayWaveX = !!i2209[10]
  i2208.AutoPlaySpeedX = i2209[11]
  i2208.AutoPlayWaveY = !!i2209[12]
  i2208.AutoPlaySpeedY = i2209[13]
  i2208.AutoRandom = !!i2209[14]
  i2208.AutoRandomRange = i2209[15]
  i2208.ShaderChange = i2209[16]
  return i2208
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i2210 = root || request.c( 'BasicDrag' )
  var i2211 = data
  i2210.canDrag = !!i2211[0]
  i2210.dragByDelta = !!i2211[1]
  i2210.isDragging = !!i2211[2]
  i2210.moveWithPointer = !!i2211[3]
  i2210.canReturn = !!i2211[4]
  i2210.jumpOnReturn = !!i2211[5]
  i2210.returnTime = i2211[6]
  i2210.Tool_Offset = new pc.Vec3( i2211[7], i2211[8], i2211[9] )
  i2210.canScaleIncrease = !!i2211[10]
  i2210.Self_ScaleNew = new pc.Vec3( i2211[11], i2211[12], i2211[13] )
  i2210.canRotateOnPick = !!i2211[14]
  i2210.startRot = new pc.Vec3( i2211[15], i2211[16], i2211[17] )
  i2210.newRot = new pc.Vec3( i2211[18], i2211[19], i2211[20] )
  var i2213 = i2211[21]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 2) {
  request.r(i2213[i + 0], i2213[i + 1], 2, i2212, '')
  }
  i2210.childSprite = i2212
  request.r(i2211[22], i2211[23], 0, i2210, 'ToolSelectClip')
  request.r(i2211[24], i2211[25], 0, i2210, 'ToolLoopClip')
  request.r(i2211[26], i2211[27], 0, i2210, 'thisParticles')
  i2210.onDragparticle = !!i2211[28]
  request.r(i2211[29], i2211[30], 0, i2210, 'dragParticles')
  request.r(i2211[31], i2211[32], 0, i2210, 'anim')
  i2210.startPos = new pc.Vec3( i2211[33], i2211[34], i2211[35] )
  i2210.startScale = new pc.Vec3( i2211[36], i2211[37], i2211[38] )
  i2210.Vibration = !!i2211[39]
  i2210.isPlacedCannotMove = !!i2211[40]
  i2210.isObjectMovingWhileDragging = !!i2211[41]
  i2210.OnMouseDownEvent = request.d('System.Action', i2211[42], i2210.OnMouseDownEvent)
  i2210.OnMouseUpEvent = request.d('System.Action', i2211[43], i2210.OnMouseUpEvent)
  i2210.ProgStartEvent = request.d('System.Action', i2211[44], i2210.ProgStartEvent)
  i2210.ProgEndEvent = request.d('System.Action', i2211[45], i2210.ProgEndEvent)
  i2210.canCallMouseUpWhenGamePaused = !!i2211[46]
  i2210.ClampX_L = i2211[47]
  i2210.ClampX_H = i2211[48]
  i2210.ClampY_L = i2211[49]
  i2210.ClampY_H = i2211[50]
  i2210.startOrder = i2211[51]
  i2210.dontResetItIsInCollider = !!i2211[52]
  request.r(i2211[53], i2211[54], 0, i2210, 'thisCollider')
  request.r(i2211[55], i2211[56], 0, i2210, 'thisSR')
  i2210.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i2211[57], i2210.OnMouseDownEventIndependentFromCanDrag)
  return i2210
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2216 = root || request.c( 'System.Action' )
  var i2217 = data
  return i2216
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i2218 = root || request.c( 'BD_Clamp' )
  var i2219 = data
  i2218.ClampX_L = i2219[0]
  i2218.ClampX_H = i2219[1]
  i2218.ClampY_L = i2219[2]
  i2218.ClampY_H = i2219[3]
  return i2218
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i2220 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i2221 = data
  request.r(i2221[0], i2221[1], 0, i2220, 'm_RootBone')
  var i2223 = i2221[2]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 2) {
  request.r(i2223[i + 0], i2223[i + 1], 2, i2222, '')
  }
  i2220.m_BoneTransforms = i2222
  i2220.m_AlwaysUpdate = !!i2221[3]
  i2220.m_AutoRebind = !!i2221[4]
  return i2220
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i2224 = root || request.c( 'BD_CameraFollow' )
  var i2225 = data
  request.r(i2225[0], i2225[1], 0, i2224, 'Tool')
  request.r(i2225[2], i2225[3], 0, i2224, 'Pivot')
  i2224.FOV = i2225[4]
  i2224.Y_L = i2225[5]
  i2224.Y_H = i2225[6]
  i2224.X_L = i2225[7]
  i2224.X_R = i2225[8]
  i2224.startDelay = i2225[9]
  i2224.duration = i2225[10]
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2227 = data
  i2226.bodyType = i2227[0]
  request.r(i2227[1], i2227[2], 0, i2226, 'material')
  i2226.simulated = !!i2227[3]
  i2226.useAutoMass = !!i2227[4]
  i2226.mass = i2227[5]
  i2226.drag = i2227[6]
  i2226.angularDrag = i2227[7]
  i2226.gravityScale = i2227[8]
  i2226.collisionDetectionMode = i2227[9]
  i2226.sleepMode = i2227[10]
  i2226.constraints = i2227[11]
  return i2226
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i2228 = root || request.c( 'PlaceItem' )
  var i2229 = data
  request.r(i2229[0], i2229[1], 0, i2228, 'thisDrag')
  request.r(i2229[2], i2229[3], 0, i2228, 'Target')
  request.r(i2229[4], i2229[5], 0, i2228, 'Clip')
  i2228.jumpOnPlace = !!i2229[6]
  i2228.jumpHeight = i2229[7]
  i2228.jumpDuration = i2229[8]
  i2228.settleDuration = i2229[9]
  i2228.isPlaced = !!i2229[10]
  i2228.isInsideCollider = !!i2229[11]
  i2228.changeScaleOnPlace = !!i2229[12]
  request.r(i2229[13], i2229[14], 0, i2228, 'item')
  i2228.newScaleOnPlace = new pc.Vec3( i2229[15], i2229[16], i2229[17] )
  i2228.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i2229[18], i2228.OnPlaced)
  return i2228
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i2230 = root || request.c( 'ActionOnTap' )
  var i2231 = data
  i2230.OnTap = request.d('UnityEngine.Events.UnityEvent', i2231[0], i2230.OnTap)
  i2230.OnTapExtra = request.d('System.Action', i2231[1], i2230.OnTapExtra)
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2233 = data
  i2232.radius = i2233[0]
  i2232.enabled = !!i2233[1]
  i2232.isTrigger = !!i2233[2]
  i2232.usedByEffector = !!i2233[3]
  i2232.density = i2233[4]
  i2232.offset = new pc.Vec2( i2233[5], i2233[6] )
  request.r(i2233[7], i2233[8], 0, i2232, 'material')
  return i2232
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i2234 = root || request.c( 'PlayParticlesOnCollision' )
  var i2235 = data
  request.r(i2235[0], i2235[1], 0, i2234, 'Target')
  request.r(i2235[2], i2235[3], 0, i2234, 'ParticlePrefab')
  i2234.destroyIt = !!i2235[4]
  i2234.stayAtPlace = !!i2235[5]
  i2234.disableOnCollision = !!i2235[6]
  i2234.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i2235[7], i2234.OnCollisionEvent)
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i2237 = data
  i2236.usedByComposite = !!i2237[0]
  i2236.autoTiling = !!i2237[1]
  var i2239 = i2237[2]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
  var i2241 = i2239[i + 0]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 2) {
    i2240.push( new pc.Vec2( i2241[i + 0], i2241[i + 1] ) );
  }
    i2238.push( i2240 );
  }
  i2236.points = i2238
  i2236.enabled = !!i2237[3]
  i2236.isTrigger = !!i2237[4]
  i2236.usedByEffector = !!i2237[5]
  i2236.density = i2237[6]
  i2236.offset = new pc.Vec2( i2237[7], i2237[8] )
  request.r(i2237[9], i2237[10], 0, i2236, 'material')
  return i2236
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i2248 = root || request.c( 'PlaySfxOnCollision' )
  var i2249 = data
  request.r(i2249[0], i2249[1], 0, i2248, 'Tip')
  i2248.Mode = i2249[2]
  request.r(i2249[3], i2249[4], 0, i2248, 'DragInput')
  request.r(i2249[5], i2249[6], 0, i2248, 'Source')
  i2248.startVol = i2249[7]
  i2248.targetVol = i2249[8]
  i2248.duration = i2249[9]
  request.r(i2249[10], i2249[11], 0, i2248, 'Particles')
  i2248.isDone = !!i2249[12]
  i2248.isInArea = !!i2249[13]
  i2248.isPlaying = !!i2249[14]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2251 = data
  request.r(i2251[0], i2251[1], 0, i2250, 'clip')
  request.r(i2251[2], i2251[3], 0, i2250, 'outputAudioMixerGroup')
  i2250.playOnAwake = !!i2251[4]
  i2250.loop = !!i2251[5]
  i2250.time = i2251[6]
  i2250.volume = i2251[7]
  i2250.pitch = i2251[8]
  i2250.enabled = !!i2251[9]
  return i2250
}

Deserializers["SewingCol"] = function (request, data, root) {
  var i2252 = root || request.c( 'SewingCol' )
  var i2253 = data
  request.r(i2253[0], i2253[1], 0, i2252, 'targetTip')
  var i2255 = i2253[2]
  var i2254 = []
  for(var i = 0; i < i2255.length; i += 2) {
  request.r(i2255[i + 0], i2255[i + 1], 2, i2254, '')
  }
  i2252.Anim_Items = i2254
  i2252.isDone = !!i2253[3]
  request.r(i2253[4], i2253[5], 0, i2252, 'sfx')
  return i2252
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i2258 = root || request.c( 'OutlinePulse' )
  var i2259 = data
  i2258.smallThickness = i2259[0]
  i2258.largeThickness = i2259[1]
  i2258.transitionSpeed = i2259[2]
  i2258.animationSpeed = i2259[3]
  i2258.isThickOutline = !!i2259[4]
  i2258.animate = !!i2259[5]
  i2258.hideSpriteOnly = !!i2259[6]
  return i2258
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i2260 = root || request.c( 'BD_Action' )
  var i2261 = data
  i2260.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i2261[0], i2260.OnMouseDownEvent)
  i2260.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i2261[1], i2260.OnMouseUpEvent)
  i2260.setToolLayer = !!i2261[2]
  request.r(i2261[3], i2261[4], 0, i2260, 'tool_SP')
  return i2260
}

Deserializers["Level1_SurfController"] = function (request, data, root) {
  var i2262 = root || request.c( 'Level1_SurfController' )
  var i2263 = data
  i2262.target_rotZ = i2263[0]
  i2262.rotationDuration = i2263[1]
  i2262.rotationEase = i2263[2]
  request.r(i2263[3], i2263[4], 0, i2262, 'maskItem')
  i2262.maskTarget_posY = i2263[5]
  i2262.maskMoveDuration = i2263[6]
  i2262.requiredHoldTime = i2263[7]
  i2262.minRotationForProgress = i2263[8]
  request.r(i2263[9], i2263[10], 0, i2262, 'tipCollider')
  request.r(i2263[11], i2263[12], 0, i2262, 'targetZoneCollider')
  request.r(i2263[13], i2263[14], 0, i2262, 'surf_Particles')
  request.r(i2263[15], i2263[16], 0, i2262, 'surf_SubEmitter')
  request.r(i2263[17], i2263[18], 0, i2262, 'Indication')
  i2262.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2263[19], i2262.OnComplete)
  i2262.currentHoldProgress = i2263[20]
  return i2262
}

Deserializers["BD_Fold"] = function (request, data, root) {
  var i2264 = root || request.c( 'BD_Fold' )
  var i2265 = data
  i2264.canDrag = !!i2265[0]
  i2264.canFoldBottomLeft = !!i2265[1]
  i2264.canFoldBottomRight = !!i2265[2]
  i2264.canFoldTopLeft = !!i2265[3]
  i2264.canFoldTopRight = !!i2265[4]
  request.r(i2265[5], i2265[6], 0, i2264, 'Indication')
  request.r(i2265[7], i2265[8], 0, i2264, 'backSideSprite')
  i2264.maxSideOffset = i2265[9]
  i2264.foldBackDuration = i2265[10]
  i2264.instantFoldAmount = i2265[11]
  i2264.useSmoothRelease = !!i2265[12]
  i2264.completionLimit = i2265[13]
  i2264.afterCompletionTravelTo = i2265[14]
  i2264.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2265[15], i2264.OnComplete)
  i2264.currentProgress = i2265[16]
  i2264.innerShadowStrength = i2265[17]
  request.r(i2265[18], i2265[19], 0, i2264, 'dragAudioSource')
  request.r(i2265[20], i2265[21], 0, i2264, 'dragStartClip')
  request.r(i2265[22], i2265[23], 0, i2264, 'completionClip')
  i2264.audioFadeSpeed = i2265[24]
  i2264.audioMoveThreshold = i2265[25]
  i2264.hapticInterval = i2265[26]
  return i2264
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i2266 = root || request.c( 'BD_Progress' )
  var i2267 = data
  var i2269 = i2267[0]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 1) {
    i2268.push( request.d('ScratchData', i2269[i + 0]) );
  }
  i2266.AllScratches = i2268
  i2266.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i2267[1], i2266.OnScratchComplete)
  i2266.isProgDone = !!i2267[2]
  i2266.canCallComplete = !!i2267[3]
  i2266.CollectiveAppear = !!i2267[4]
  i2266.tipControl = !!i2267[5]
  i2266.progressControl = !!i2267[6]
  request.r(i2267[7], i2267[8], 0, i2266, 'thisDrag')
  i2266.CompleteEvent = request.d('System.Action', i2267[9], i2266.CompleteEvent)
  i2266.SubCompleteEvent = request.d('System.Action', i2267[10], i2266.SubCompleteEvent)
  return i2266
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i2272 = root || request.c( 'ScratchData' )
  var i2273 = data
  request.r(i2273[0], i2273[1], 0, i2272, 'ScratchManager')
  i2272.scratchLimit = i2273[2]
  i2272.isComplete = !!i2273[3]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2275 = data
  request.r(i2275[0], i2275[1], 0, i2274, 'sharedMesh')
  return i2274
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i2276 = root || request.c( 'StaticFixedPipe' )
  var i2277 = data
  request.r(i2277[0], i2277[1], 0, i2276, 'meshRenderer')
  request.r(i2277[2], i2277[3], 0, i2276, 'toolTransform')
  request.r(i2277[4], i2277[5], 0, i2276, 'toolDirectionPoint')
  request.r(i2277[6], i2277[7], 0, i2276, 'fixedEndPoint')
  i2276.segmentCount = i2277[8]
  i2276.totalLength = i2277[9]
  i2276.constraintIterations = i2277[10]
  i2276.gravity = new pc.Vec3( i2277[11], i2277[12], i2277[13] )
  i2276.pipeWidth = i2277[14]
  return i2276
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i2278 = root || request.c( 'BD_SpriteChange' )
  var i2279 = data
  request.r(i2279[0], i2279[1], 0, i2278, 'BD')
  request.r(i2279[2], i2279[3], 0, i2278, 'SR')
  request.r(i2279[4], i2279[5], 0, i2278, 'Default')
  request.r(i2279[6], i2279[7], 0, i2278, 'Picked')
  i2278.resetOnRelease = !!i2279[8]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2281 = data
  i2280.name = i2281[0]
  i2280.atlasId = i2281[1]
  i2280.mipmapCount = i2281[2]
  i2280.hdr = !!i2281[3]
  i2280.size = i2281[4]
  i2280.anisoLevel = i2281[5]
  i2280.filterMode = i2281[6]
  var i2283 = i2281[7]
  var i2282 = []
  for(var i = 0; i < i2283.length; i += 4) {
    i2282.push( UnityEngine.Rect.MinMaxRect(i2283[i + 0], i2283[i + 1], i2283[i + 2], i2283[i + 3]) );
  }
  i2280.rects = i2282
  i2280.wrapU = i2281[8]
  i2280.wrapV = i2281[9]
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2287 = data
  i2286.name = i2287[0]
  i2286.index = i2287[1]
  i2286.startup = !!i2287[2]
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2289 = data
  i2288.aspect = i2289[0]
  i2288.orthographic = !!i2289[1]
  i2288.orthographicSize = i2289[2]
  i2288.backgroundColor = new pc.Color(i2289[3], i2289[4], i2289[5], i2289[6])
  i2288.nearClipPlane = i2289[7]
  i2288.farClipPlane = i2289[8]
  i2288.fieldOfView = i2289[9]
  i2288.depth = i2289[10]
  i2288.clearFlags = i2289[11]
  i2288.cullingMask = i2289[12]
  i2288.rect = i2289[13]
  request.r(i2289[14], i2289[15], 0, i2288, 'targetTexture')
  i2288.usePhysicalProperties = !!i2289[16]
  i2288.focalLength = i2289[17]
  i2288.sensorSize = new pc.Vec2( i2289[18], i2289[19] )
  i2288.lensShift = new pc.Vec2( i2289[20], i2289[21] )
  i2288.gateFit = i2289[22]
  i2288.commandBufferCount = i2289[23]
  i2288.cameraType = i2289[24]
  i2288.enabled = !!i2289[25]
  return i2288
}

Deserializers["CameraController"] = function (request, data, root) {
  var i2290 = root || request.c( 'CameraController' )
  var i2291 = data
  request.r(i2291[0], i2291[1], 0, i2290, 'cam')
  i2290.defaultPosition = new pc.Vec3( i2291[2], i2291[3], i2291[4] )
  i2290.defaultSize = i2291[5]
  i2290.defaultFOV = i2291[6]
  i2290.defaultDuration = i2291[7]
  i2290.defaultEase = i2291[8]
  return i2290
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i2292 = root || request.c( 'MusicSource' )
  var i2293 = data
  request.r(i2293[0], i2293[1], 0, i2292, 'source')
  return i2292
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i2294 = root || request.c( 'UI_Manager' )
  var i2295 = data
  i2294.levelCompleted = !!i2295[0]
  i2294.isPauseActive = !!i2295[1]
  i2294.loadIndex = i2295[2]
  request.r(i2295[3], i2295[4], 0, i2294, 'removeAdsButton')
  request.r(i2295[5], i2295[6], 0, i2294, 'pauseButton')
  request.r(i2295[7], i2295[8], 0, i2294, 'Fade_Img')
  request.r(i2295[9], i2295[10], 0, i2294, 'TopBarAnim')
  request.r(i2295[11], i2295[12], 0, i2294, 'MainPanel')
  request.r(i2295[13], i2295[14], 0, i2294, 'PausePanel')
  request.r(i2295[15], i2295[16], 0, i2294, 'PausePopUp')
  request.r(i2295[17], i2295[18], 0, i2294, 'PauseCanvasGroup')
  request.r(i2295[19], i2295[20], 0, i2294, 'RateUsPanel')
  request.r(i2295[21], i2295[22], 0, i2294, 'RateUsPopUp')
  request.r(i2295[23], i2295[24], 0, i2294, 'RemoveAdsPanel')
  request.r(i2295[25], i2295[26], 0, i2294, 'RemoveAdsPopUp')
  request.r(i2295[27], i2295[28], 0, i2294, 'RemoveAdsCanvasGroup')
  var i2297 = i2295[29]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 2) {
  request.r(i2297[i + 0], i2297[i + 1], 2, i2296, '')
  }
  i2294.RemoveAdsAnims = i2296
  i2294.showCompletePanel = !!i2295[30]
  var i2299 = i2295[31]
  var i2298 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2299.length; i += 2) {
  request.r(i2299[i + 0], i2299[i + 1], 1, i2298, '')
  }
  i2294.thingsToDisableWhenCompletePanel = i2298
  request.r(i2295[32], i2295[33], 0, i2294, 'CompletePanel')
  request.r(i2295[34], i2295[35], 0, i2294, 'LevelIcon')
  request.r(i2295[36], i2295[37], 0, i2294, 'CompleteParticles')
  request.r(i2295[38], i2295[39], 0, i2294, 'progressBar')
  request.r(i2295[40], i2295[41], 0, i2294, 'progressText')
  request.r(i2295[42], i2295[43], 0, i2294, 'toolIcon1')
  request.r(i2295[44], i2295[45], 0, i2294, 'toolIcon2')
  request.r(i2295[46], i2295[47], 0, i2294, 'toolIcon3')
  request.r(i2295[48], i2295[49], 0, i2294, 'toolIcon4')
  request.r(i2295[50], i2295[51], 0, i2294, 'toolHolder')
  i2294.toolHolderRaisedY = i2295[52]
  i2294.toolHolderRaiseDuration = i2295[53]
  request.r(i2295[54], i2295[55], 0, i2294, 'target1')
  request.r(i2295[56], i2295[57], 0, i2294, 'target2')
  i2294.toolMoveDuration = i2295[58]
  i2294.currentIndex = i2295[59]
  var i2301 = i2295[60]
  var i2300 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2301.length; i += 2) {
  request.r(i2301[i + 0], i2301[i + 1], 1, i2300, '')
  }
  i2294.allTools = i2300
  request.r(i2295[61], i2295[62], 0, i2294, 'clockProgress')
  request.r(i2295[63], i2295[64], 0, i2294, 'clockProgressFill')
  request.r(i2295[65], i2295[66], 0, i2294, 'clockAudio')
  i2294.moveDistance = i2295[67]
  i2294.animationDuration = i2295[68]
  i2294.greyBgChildName = i2295[69]
  i2294.pushOffset = i2295[70]
  return i2294
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i2304 = root || request.c( 'GameManagerPlayable' )
  var i2305 = data
  request.r(i2305[0], i2305[1], 0, i2304, 'endParticles')
  request.r(i2305[2], i2305[3], 0, i2304, 'stepCompleteParticles')
  request.r(i2305[4], i2305[5], 0, i2304, 'DefaultMat')
  request.r(i2305[6], i2305[7], 0, i2304, 'BG_Music')
  request.r(i2305[8], i2305[9], 0, i2304, 'restoreEffectShader')
  request.r(i2305[10], i2305[11], 0, i2304, 'stickerEffectShader')
  i2304.isComplete = !!i2305[12]
  i2304.isPaused = !!i2305[13]
  request.r(i2305[14], i2305[15], 0, i2304, 'currentLevel')
  i2304.startLevelOnPlay = !!i2305[16]
  i2304.currentLevelNo = i2305[17]
  return i2304
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2306 = root || request.c( 'AudioController' )
  var i2307 = data
  request.r(i2307[0], i2307[1], 0, i2306, 'MainMixer')
  request.r(i2307[2], i2307[3], 0, i2306, 'UiClick')
  request.r(i2307[4], i2307[5], 0, i2306, 'UiClickSource')
  var i2309 = i2307[6]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 2) {
  request.r(i2309[i + 0], i2309[i + 1], 2, i2308, '')
  }
  i2306.SfxSources = i2308
  var i2311 = i2307[7]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 2) {
  request.r(i2311[i + 0], i2311[i + 1], 2, i2310, '')
  }
  i2306.AllClips = i2310
  return i2306
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i2314 = root || request.c( 'PlayableHudRuntime' )
  var i2315 = data
  return i2314
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2316 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2317 = data
  request.r(i2317[0], i2317[1], 0, i2316, 'm_FirstSelected')
  i2316.m_sendNavigationEvents = !!i2317[2]
  i2316.m_DragThreshold = i2317[3]
  return i2316
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2318 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2319 = data
  i2318.m_HorizontalAxis = i2319[0]
  i2318.m_VerticalAxis = i2319[1]
  i2318.m_SubmitButton = i2319[2]
  i2318.m_CancelButton = i2319[3]
  i2318.m_InputActionsPerSecond = i2319[4]
  i2318.m_RepeatDelay = i2319[5]
  i2318.m_ForceModuleActive = !!i2319[6]
  i2318.m_SendPointerHoverToParent = !!i2319[7]
  return i2318
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i2320 = root || request.c( 'PlayableRouter' )
  var i2321 = data
  var i2323 = i2321[0]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 2) {
  request.r(i2323[i + 0], i2323[i + 1], 2, i2322, '')
  }
  i2320.menuObjects = i2322
  var i2325 = i2321[1]
  var i2324 = []
  for(var i = 0; i < i2325.length; i += 2) {
  request.r(i2325[i + 0], i2325[i + 1], 2, i2324, '')
  }
  i2320.gameplayObjects = i2324
  var i2327 = i2321[2]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.push( request.d('PlayableRouter+SubLevelSlot', i2327[i + 0]) );
  }
  i2320.subLevels = i2326
  i2320.fadeDuration = i2321[3]
  i2320.onIntroStart = request.d('UnityEngine.Events.UnityEvent', i2321[4], i2320.onIntroStart)
  var i2329 = i2321[5]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 2) {
  request.r(i2329[i + 0], i2329[i + 1], 2, i2328, '')
  }
  i2320.hideDuringIntro = i2328
  i2320.lockedMessage = i2321[6]
  i2320.lockedTapsToCTA = i2321[7]
  return i2320
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i2334 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i2335 = data
  request.r(i2335[0], i2335[1], 0, i2334, 'button')
  request.r(i2335[2], i2335[3], 0, i2334, 'level')
  request.r(i2335[4], i2335[5], 0, i2334, 'intro')
  return i2334
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i2336 = root || request.c( 'ToastManager' )
  var i2337 = data
  request.r(i2337[0], i2337[1], 0, i2336, 'toastPanel')
  request.r(i2337[2], i2337[3], 0, i2336, 'toastPopup')
  request.r(i2337[4], i2337[5], 0, i2336, 'canvasGroup')
  request.r(i2337[6], i2337[7], 0, i2336, 'toastText')
  i2336.startY = i2337[8]
  i2336.visibleY = i2337[9]
  i2336.endY = i2337[10]
  i2336.animationTime = i2337[11]
  i2336.animationTimeUp = i2337[12]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2339 = data
  i2338.m_Alpha = i2339[0]
  i2338.m_Interactable = !!i2339[1]
  i2338.m_BlocksRaycasts = !!i2339[2]
  i2338.m_IgnoreParentGroups = !!i2339[3]
  i2338.enabled = !!i2339[4]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2341 = data
  i2340.ambientIntensity = i2341[0]
  i2340.reflectionIntensity = i2341[1]
  i2340.ambientMode = i2341[2]
  i2340.ambientLight = new pc.Color(i2341[3], i2341[4], i2341[5], i2341[6])
  i2340.ambientSkyColor = new pc.Color(i2341[7], i2341[8], i2341[9], i2341[10])
  i2340.ambientGroundColor = new pc.Color(i2341[11], i2341[12], i2341[13], i2341[14])
  i2340.ambientEquatorColor = new pc.Color(i2341[15], i2341[16], i2341[17], i2341[18])
  i2340.fogColor = new pc.Color(i2341[19], i2341[20], i2341[21], i2341[22])
  i2340.fogEndDistance = i2341[23]
  i2340.fogStartDistance = i2341[24]
  i2340.fogDensity = i2341[25]
  i2340.fog = !!i2341[26]
  request.r(i2341[27], i2341[28], 0, i2340, 'skybox')
  i2340.fogMode = i2341[29]
  var i2343 = i2341[30]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 1) {
    i2342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2343[i + 0]) );
  }
  i2340.lightmaps = i2342
  i2340.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2341[31], i2340.lightProbes)
  i2340.lightmapsMode = i2341[32]
  i2340.mixedBakeMode = i2341[33]
  i2340.environmentLightingMode = i2341[34]
  i2340.ambientProbe = new pc.SphericalHarmonicsL2(i2341[35])
  request.r(i2341[36], i2341[37], 0, i2340, 'customReflection')
  request.r(i2341[38], i2341[39], 0, i2340, 'defaultReflection')
  i2340.defaultReflectionMode = i2341[40]
  i2340.defaultReflectionResolution = i2341[41]
  i2340.sunLightObjectId = i2341[42]
  i2340.pixelLightCount = i2341[43]
  i2340.defaultReflectionHDR = !!i2341[44]
  i2340.hasLightDataAsset = !!i2341[45]
  i2340.hasManualGenerate = !!i2341[46]
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2347 = data
  request.r(i2347[0], i2347[1], 0, i2346, 'lightmapColor')
  request.r(i2347[2], i2347[3], 0, i2346, 'lightmapDirection')
  request.r(i2347[4], i2347[5], 0, i2346, 'shadowMask')
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2348 = root || new UnityEngine.LightProbes()
  var i2349 = data
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2355 = data
  var i2357 = i2355[0]
  var i2356 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2357.length; i += 1) {
    i2356.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2357[i + 0]));
  }
  i2354.ShaderCompilationErrors = i2356
  i2354.name = i2355[1]
  i2354.guid = i2355[2]
  var i2359 = i2355[3]
  var i2358 = []
  for(var i = 0; i < i2359.length; i += 1) {
    i2358.push( i2359[i + 0] );
  }
  i2354.shaderDefinedKeywords = i2358
  var i2361 = i2355[4]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2361[i + 0]) );
  }
  i2354.passes = i2360
  var i2363 = i2355[5]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 1) {
    i2362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2363[i + 0]) );
  }
  i2354.usePasses = i2362
  var i2365 = i2355[6]
  var i2364 = []
  for(var i = 0; i < i2365.length; i += 1) {
    i2364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2365[i + 0]) );
  }
  i2354.defaultParameterValues = i2364
  request.r(i2355[7], i2355[8], 0, i2354, 'unityFallbackShader')
  i2354.readDepth = !!i2355[9]
  i2354.hasDepthOnlyPass = !!i2355[10]
  i2354.isCreatedByShaderGraph = !!i2355[11]
  i2354.disableBatching = !!i2355[12]
  i2354.compiled = !!i2355[13]
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2369 = data
  i2368.shaderName = i2369[0]
  i2368.errorMessage = i2369[1]
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2374 = root || new pc.UnityShaderPass()
  var i2375 = data
  i2374.id = i2375[0]
  i2374.subShaderIndex = i2375[1]
  i2374.name = i2375[2]
  i2374.passType = i2375[3]
  i2374.grabPassTextureName = i2375[4]
  i2374.usePass = !!i2375[5]
  i2374.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[6], i2374.zTest)
  i2374.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[7], i2374.zWrite)
  i2374.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[8], i2374.culling)
  i2374.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2375[9], i2374.blending)
  i2374.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2375[10], i2374.alphaBlending)
  i2374.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[11], i2374.colorWriteMask)
  i2374.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[12], i2374.offsetUnits)
  i2374.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[13], i2374.offsetFactor)
  i2374.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[14], i2374.stencilRef)
  i2374.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[15], i2374.stencilReadMask)
  i2374.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2375[16], i2374.stencilWriteMask)
  i2374.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2375[17], i2374.stencilOp)
  i2374.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2375[18], i2374.stencilOpFront)
  i2374.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2375[19], i2374.stencilOpBack)
  var i2377 = i2375[20]
  var i2376 = []
  for(var i = 0; i < i2377.length; i += 1) {
    i2376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2377[i + 0]) );
  }
  i2374.tags = i2376
  var i2379 = i2375[21]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.push( i2379[i + 0] );
  }
  i2374.passDefinedKeywords = i2378
  var i2381 = i2375[22]
  var i2380 = []
  for(var i = 0; i < i2381.length; i += 1) {
    i2380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2381[i + 0]) );
  }
  i2374.passDefinedKeywordGroups = i2380
  var i2383 = i2375[23]
  var i2382 = []
  for(var i = 0; i < i2383.length; i += 1) {
    i2382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2383[i + 0]) );
  }
  i2374.variants = i2382
  var i2385 = i2375[24]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 1) {
    i2384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2385[i + 0]) );
  }
  i2374.excludedVariants = i2384
  i2374.hasDepthReader = !!i2375[25]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2387 = data
  i2386.val = i2387[0]
  i2386.name = i2387[1]
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2389 = data
  i2388.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2389[0], i2388.src)
  i2388.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2389[1], i2388.dst)
  i2388.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2389[2], i2388.op)
  return i2388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2391 = data
  i2390.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2391[0], i2390.pass)
  i2390.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2391[1], i2390.fail)
  i2390.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2391[2], i2390.zFail)
  i2390.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2391[3], i2390.comp)
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2395 = data
  i2394.name = i2395[0]
  i2394.value = i2395[1]
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2399 = data
  var i2401 = i2399[0]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 1) {
    i2400.push( i2401[i + 0] );
  }
  i2398.keywords = i2400
  i2398.hasDiscard = !!i2399[1]
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2405 = data
  i2404.passId = i2405[0]
  i2404.subShaderIndex = i2405[1]
  var i2407 = i2405[2]
  var i2406 = []
  for(var i = 0; i < i2407.length; i += 1) {
    i2406.push( i2407[i + 0] );
  }
  i2404.keywords = i2406
  i2404.vertexProgram = i2405[3]
  i2404.fragmentProgram = i2405[4]
  i2404.exportedForWebGl2 = !!i2405[5]
  i2404.readDepth = !!i2405[6]
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2411 = data
  request.r(i2411[0], i2411[1], 0, i2410, 'shader')
  i2410.pass = i2411[2]
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2415 = data
  i2414.name = i2415[0]
  i2414.type = i2415[1]
  i2414.value = new pc.Vec4( i2415[2], i2415[3], i2415[4], i2415[5] )
  i2414.textureValue = i2415[6]
  i2414.shaderPropertyFlag = i2415[7]
  return i2414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2417 = data
  i2416.name = i2417[0]
  request.r(i2417[1], i2417[2], 0, i2416, 'texture')
  i2416.aabb = i2417[3]
  i2416.vertices = i2417[4]
  i2416.triangles = i2417[5]
  i2416.textureRect = UnityEngine.Rect.MinMaxRect(i2417[6], i2417[7], i2417[8], i2417[9])
  i2416.packedRect = UnityEngine.Rect.MinMaxRect(i2417[10], i2417[11], i2417[12], i2417[13])
  i2416.border = new pc.Vec4( i2417[14], i2417[15], i2417[16], i2417[17] )
  i2416.transparency = i2417[18]
  i2416.bounds = i2417[19]
  i2416.pixelsPerUnit = i2417[20]
  i2416.textureWidth = i2417[21]
  i2416.textureHeight = i2417[22]
  i2416.nativeSize = new pc.Vec2( i2417[23], i2417[24] )
  i2416.pivot = new pc.Vec2( i2417[25], i2417[26] )
  i2416.textureRectOffset = new pc.Vec2( i2417[27], i2417[28] )
  return i2416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2419 = data
  i2418.name = i2419[0]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2421 = data
  i2420.name = i2421[0]
  i2420.wrapMode = i2421[1]
  i2420.isLooping = !!i2421[2]
  i2420.length = i2421[3]
  var i2423 = i2421[4]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2423[i + 0]) );
  }
  i2420.curves = i2422
  var i2425 = i2421[5]
  var i2424 = []
  for(var i = 0; i < i2425.length; i += 1) {
    i2424.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2425[i + 0]) );
  }
  i2420.events = i2424
  i2420.halfPrecision = !!i2421[6]
  i2420._frameRate = i2421[7]
  i2420.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2421[8], i2420.localBounds)
  i2420.hasMuscleCurves = !!i2421[9]
  var i2427 = i2421[10]
  var i2426 = []
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.push( i2427[i + 0] );
  }
  i2420.clipMuscleConstant = i2426
  i2420.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2421[11], i2420.clipBindingConstant)
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2431 = data
  i2430.path = i2431[0]
  i2430.hash = i2431[1]
  i2430.componentType = i2431[2]
  i2430.property = i2431[3]
  i2430.keys = i2431[4]
  var i2433 = i2431[5]
  var i2432 = []
  for(var i = 0; i < i2433.length; i += 1) {
    i2432.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2433[i + 0]) );
  }
  i2430.objectReferenceKeys = i2432
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2437 = data
  i2436.time = i2437[0]
  request.r(i2437[1], i2437[2], 0, i2436, 'value')
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2441 = data
  i2440.functionName = i2441[0]
  i2440.floatParameter = i2441[1]
  i2440.intParameter = i2441[2]
  i2440.stringParameter = i2441[3]
  request.r(i2441[4], i2441[5], 0, i2440, 'objectReferenceParameter')
  i2440.time = i2441[6]
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2443 = data
  i2442.center = new pc.Vec3( i2443[0], i2443[1], i2443[2] )
  i2442.extends = new pc.Vec3( i2443[3], i2443[4], i2443[5] )
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2447 = data
  var i2449 = i2447[0]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.push( i2449[i + 0] );
  }
  i2446.genericBindings = i2448
  var i2451 = i2447[1]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( i2451[i + 0] );
  }
  i2446.pptrCurveMapping = i2450
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2453 = data
  i2452.name = i2453[0]
  i2452.ascent = i2453[1]
  i2452.originalLineHeight = i2453[2]
  i2452.fontSize = i2453[3]
  var i2455 = i2453[4]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2455[i + 0]) );
  }
  i2452.characterInfo = i2454
  request.r(i2453[5], i2453[6], 0, i2452, 'texture')
  i2452.originalFontSize = i2453[7]
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2459 = data
  i2458.index = i2459[0]
  i2458.advance = i2459[1]
  i2458.bearing = i2459[2]
  i2458.glyphWidth = i2459[3]
  i2458.glyphHeight = i2459[4]
  i2458.minX = i2459[5]
  i2458.maxX = i2459[6]
  i2458.minY = i2459[7]
  i2458.maxY = i2459[8]
  i2458.uvBottomLeftX = i2459[9]
  i2458.uvBottomLeftY = i2459[10]
  i2458.uvBottomRightX = i2459[11]
  i2458.uvBottomRightY = i2459[12]
  i2458.uvTopLeftX = i2459[13]
  i2458.uvTopLeftY = i2459[14]
  i2458.uvTopRightX = i2459[15]
  i2458.uvTopRightY = i2459[16]
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2461 = data
  i2460.name = i2461[0]
  var i2463 = i2461[1]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 1) {
    i2462.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2463[i + 0]) );
  }
  i2460.layers = i2462
  var i2465 = i2461[2]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 1) {
    i2464.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2465[i + 0]) );
  }
  i2460.parameters = i2464
  i2460.animationClips = i2461[3]
  i2460.avatarUnsupported = i2461[4]
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2469 = data
  i2468.name = i2469[0]
  i2468.defaultWeight = i2469[1]
  i2468.blendingMode = i2469[2]
  i2468.avatarMask = i2469[3]
  i2468.syncedLayerIndex = i2469[4]
  i2468.syncedLayerAffectsTiming = !!i2469[5]
  i2468.syncedLayers = i2469[6]
  i2468.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2469[7], i2468.stateMachine)
  return i2468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2471 = data
  i2470.id = i2471[0]
  i2470.name = i2471[1]
  i2470.path = i2471[2]
  var i2473 = i2471[3]
  var i2472 = []
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2473[i + 0]) );
  }
  i2470.states = i2472
  var i2475 = i2471[4]
  var i2474 = []
  for(var i = 0; i < i2475.length; i += 1) {
    i2474.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2475[i + 0]) );
  }
  i2470.machines = i2474
  var i2477 = i2471[5]
  var i2476 = []
  for(var i = 0; i < i2477.length; i += 1) {
    i2476.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2477[i + 0]) );
  }
  i2470.entryStateTransitions = i2476
  var i2479 = i2471[6]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 1) {
    i2478.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2479[i + 0]) );
  }
  i2470.exitStateTransitions = i2478
  var i2481 = i2471[7]
  var i2480 = []
  for(var i = 0; i < i2481.length; i += 1) {
    i2480.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2481[i + 0]) );
  }
  i2470.anyStateTransitions = i2480
  i2470.defaultStateId = i2471[8]
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2485 = data
  i2484.id = i2485[0]
  i2484.name = i2485[1]
  i2484.cycleOffset = i2485[2]
  i2484.cycleOffsetParameter = i2485[3]
  i2484.cycleOffsetParameterActive = !!i2485[4]
  i2484.mirror = !!i2485[5]
  i2484.mirrorParameter = i2485[6]
  i2484.mirrorParameterActive = !!i2485[7]
  i2484.motionId = i2485[8]
  i2484.nameHash = i2485[9]
  i2484.fullPathHash = i2485[10]
  i2484.speed = i2485[11]
  i2484.speedParameter = i2485[12]
  i2484.speedParameterActive = !!i2485[13]
  i2484.tag = i2485[14]
  i2484.tagHash = i2485[15]
  i2484.writeDefaultValues = !!i2485[16]
  var i2487 = i2485[17]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 2) {
  request.r(i2487[i + 0], i2487[i + 1], 2, i2486, '')
  }
  i2484.behaviours = i2486
  var i2489 = i2485[18]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2489[i + 0]) );
  }
  i2484.transitions = i2488
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2495 = data
  i2494.fullPath = i2495[0]
  i2494.canTransitionToSelf = !!i2495[1]
  i2494.duration = i2495[2]
  i2494.exitTime = i2495[3]
  i2494.hasExitTime = !!i2495[4]
  i2494.hasFixedDuration = !!i2495[5]
  i2494.interruptionSource = i2495[6]
  i2494.offset = i2495[7]
  i2494.orderedInterruption = !!i2495[8]
  i2494.destinationStateId = i2495[9]
  i2494.isExit = !!i2495[10]
  i2494.mute = !!i2495[11]
  i2494.solo = !!i2495[12]
  var i2497 = i2495[13]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2497[i + 0]) );
  }
  i2494.conditions = i2496
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2503 = data
  i2502.destinationStateId = i2503[0]
  i2502.isExit = !!i2503[1]
  i2502.mute = !!i2503[2]
  i2502.solo = !!i2503[3]
  var i2505 = i2503[4]
  var i2504 = []
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2505[i + 0]) );
  }
  i2502.conditions = i2504
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2509 = data
  i2508.mode = i2509[0]
  i2508.parameter = i2509[1]
  i2508.threshold = i2509[2]
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2513 = data
  i2512.defaultBool = !!i2513[0]
  i2512.defaultFloat = i2513[1]
  i2512.defaultInt = i2513[2]
  i2512.name = i2513[3]
  i2512.nameHash = i2513[4]
  i2512.type = i2513[5]
  return i2512
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2514 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2515 = data
  i2514.useSafeMode = !!i2515[0]
  i2514.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2515[1], i2514.safeModeOptions)
  i2514.timeScale = i2515[2]
  i2514.unscaledTimeScale = i2515[3]
  i2514.useSmoothDeltaTime = !!i2515[4]
  i2514.maxSmoothUnscaledTime = i2515[5]
  i2514.rewindCallbackMode = i2515[6]
  i2514.showUnityEditorReport = !!i2515[7]
  i2514.logBehaviour = i2515[8]
  i2514.drawGizmos = !!i2515[9]
  i2514.defaultRecyclable = !!i2515[10]
  i2514.defaultAutoPlay = i2515[11]
  i2514.defaultUpdateType = i2515[12]
  i2514.defaultTimeScaleIndependent = !!i2515[13]
  i2514.defaultEaseType = i2515[14]
  i2514.defaultEaseOvershootOrAmplitude = i2515[15]
  i2514.defaultEasePeriod = i2515[16]
  i2514.defaultAutoKill = !!i2515[17]
  i2514.defaultLoopType = i2515[18]
  i2514.debugMode = !!i2515[19]
  i2514.debugStoreTargetId = !!i2515[20]
  i2514.showPreviewPanel = !!i2515[21]
  i2514.storeSettingsLocation = i2515[22]
  i2514.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2515[23], i2514.modules)
  i2514.createASMDEF = !!i2515[24]
  i2514.showPlayingTweens = !!i2515[25]
  i2514.showPausedTweens = !!i2515[26]
  return i2514
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2516 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2517 = data
  i2516.logBehaviour = i2517[0]
  i2516.nestedTweenFailureBehaviour = i2517[1]
  return i2516
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2518 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2519 = data
  i2518.showPanel = !!i2519[0]
  i2518.audioEnabled = !!i2519[1]
  i2518.physicsEnabled = !!i2519[2]
  i2518.physics2DEnabled = !!i2519[3]
  i2518.spriteEnabled = !!i2519[4]
  i2518.uiEnabled = !!i2519[5]
  i2518.textMeshProEnabled = !!i2519[6]
  i2518.tk2DEnabled = !!i2519[7]
  i2518.deAudioEnabled = !!i2519[8]
  i2518.deUnityExtendedEnabled = !!i2519[9]
  i2518.epoOutlineEnabled = !!i2519[10]
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2521 = data
  var i2523 = i2521[0]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2523[i + 0]) );
  }
  i2520.files = i2522
  i2520.componentToPrefabIds = i2521[1]
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2527 = data
  i2526.path = i2527[0]
  request.r(i2527[1], i2527[2], 0, i2526, 'unityObject')
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2529 = data
  var i2531 = i2529[0]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2531[i + 0]) );
  }
  i2528.scriptsExecutionOrder = i2530
  var i2533 = i2529[1]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2533[i + 0]) );
  }
  i2528.sortingLayers = i2532
  var i2535 = i2529[2]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2535[i + 0]) );
  }
  i2528.cullingLayers = i2534
  i2528.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2529[3], i2528.timeSettings)
  i2528.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2529[4], i2528.physicsSettings)
  i2528.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2529[5], i2528.physics2DSettings)
  i2528.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2529[6], i2528.qualitySettings)
  i2528.enableRealtimeShadows = !!i2529[7]
  i2528.enableAutoInstancing = !!i2529[8]
  i2528.enableStaticBatching = !!i2529[9]
  i2528.enableDynamicBatching = !!i2529[10]
  i2528.usePreservativeDynamicBatching = !!i2529[11]
  i2528.lightmapEncodingQuality = i2529[12]
  i2528.desiredColorSpace = i2529[13]
  var i2537 = i2529[14]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.push( i2537[i + 0] );
  }
  i2528.allTags = i2536
  return i2528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2541 = data
  i2540.name = i2541[0]
  i2540.value = i2541[1]
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2545 = data
  i2544.id = i2545[0]
  i2544.name = i2545[1]
  i2544.value = i2545[2]
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2549 = data
  i2548.id = i2549[0]
  i2548.name = i2549[1]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2551 = data
  i2550.fixedDeltaTime = i2551[0]
  i2550.maximumDeltaTime = i2551[1]
  i2550.timeScale = i2551[2]
  i2550.maximumParticleTimestep = i2551[3]
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2553 = data
  i2552.gravity = new pc.Vec3( i2553[0], i2553[1], i2553[2] )
  i2552.defaultSolverIterations = i2553[3]
  i2552.bounceThreshold = i2553[4]
  i2552.autoSyncTransforms = !!i2553[5]
  i2552.autoSimulation = !!i2553[6]
  var i2555 = i2553[7]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 1) {
    i2554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2555[i + 0]) );
  }
  i2552.collisionMatrix = i2554
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2559 = data
  i2558.enabled = !!i2559[0]
  i2558.layerId = i2559[1]
  i2558.otherLayerId = i2559[2]
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2561 = data
  request.r(i2561[0], i2561[1], 0, i2560, 'material')
  i2560.gravity = new pc.Vec2( i2561[2], i2561[3] )
  i2560.positionIterations = i2561[4]
  i2560.velocityIterations = i2561[5]
  i2560.velocityThreshold = i2561[6]
  i2560.maxLinearCorrection = i2561[7]
  i2560.maxAngularCorrection = i2561[8]
  i2560.maxTranslationSpeed = i2561[9]
  i2560.maxRotationSpeed = i2561[10]
  i2560.baumgarteScale = i2561[11]
  i2560.baumgarteTOIScale = i2561[12]
  i2560.timeToSleep = i2561[13]
  i2560.linearSleepTolerance = i2561[14]
  i2560.angularSleepTolerance = i2561[15]
  i2560.defaultContactOffset = i2561[16]
  i2560.autoSimulation = !!i2561[17]
  i2560.queriesHitTriggers = !!i2561[18]
  i2560.queriesStartInColliders = !!i2561[19]
  i2560.callbacksOnDisable = !!i2561[20]
  i2560.reuseCollisionCallbacks = !!i2561[21]
  i2560.autoSyncTransforms = !!i2561[22]
  var i2563 = i2561[23]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2563[i + 0]) );
  }
  i2560.collisionMatrix = i2562
  return i2560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2567 = data
  i2566.enabled = !!i2567[0]
  i2566.layerId = i2567[1]
  i2566.otherLayerId = i2567[2]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2569 = data
  var i2571 = i2569[0]
  var i2570 = []
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2571[i + 0]) );
  }
  i2568.qualityLevels = i2570
  var i2573 = i2569[1]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( i2573[i + 0] );
  }
  i2568.names = i2572
  i2568.shadows = i2569[2]
  i2568.anisotropicFiltering = i2569[3]
  i2568.antiAliasing = i2569[4]
  i2568.lodBias = i2569[5]
  i2568.shadowCascades = i2569[6]
  i2568.shadowDistance = i2569[7]
  i2568.shadowmaskMode = i2569[8]
  i2568.shadowProjection = i2569[9]
  i2568.shadowResolution = i2569[10]
  i2568.softParticles = !!i2569[11]
  i2568.softVegetation = !!i2569[12]
  i2568.activeColorSpace = i2569[13]
  i2568.desiredColorSpace = i2569[14]
  i2568.masterTextureLimit = i2569[15]
  i2568.maxQueuedFrames = i2569[16]
  i2568.particleRaycastBudget = i2569[17]
  i2568.pixelLightCount = i2569[18]
  i2568.realtimeReflectionProbes = !!i2569[19]
  i2568.shadowCascade2Split = i2569[20]
  i2568.shadowCascade4Split = new pc.Vec3( i2569[21], i2569[22], i2569[23] )
  i2568.streamingMipmapsActive = !!i2569[24]
  i2568.vSyncCount = i2569[25]
  i2568.asyncUploadBufferSize = i2569[26]
  i2568.asyncUploadTimeSlice = i2569[27]
  i2568.billboardsFaceCameraPosition = !!i2569[28]
  i2568.shadowNearPlaneOffset = i2569[29]
  i2568.streamingMipmapsMemoryBudget = i2569[30]
  i2568.maximumLODLevel = i2569[31]
  i2568.streamingMipmapsAddAllCameras = !!i2569[32]
  i2568.streamingMipmapsMaxLevelReduction = i2569[33]
  i2568.streamingMipmapsRenderersPerFrame = i2569[34]
  i2568.resolutionScalingFixedDPIFactor = i2569[35]
  i2568.streamingMipmapsMaxFileIORequests = i2569[36]
  i2568.currentQualityLevel = i2569[37]
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i2577 = data
  var i2579 = i2577[0]
  var i2578 = []
  for(var i = 0; i < i2579.length; i += 1) {
    i2578.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i2579[i + 0]) );
  }
  i2576.groups = i2578
  var i2581 = i2577[1]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i2581[i + 0]) );
  }
  i2576.snapshots = i2580
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i2585 = data
  i2584.id = i2585[0]
  i2584.childGroupIds = i2585[1]
  i2584.name = i2585[2]
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i2588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i2589 = data
  i2588.id = i2589[0]
  var i2591 = i2589[1]
  var i2590 = []
  for(var i = 0; i < i2591.length; i += 1) {
    i2590.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i2591[i + 0]) );
  }
  i2588.parameters = i2590
  return i2588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i2595 = data
  i2594.name = i2595[0]
  i2594.value = i2595[1]
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2599 = data
  i2598.weight = i2599[0]
  i2598.vertices = i2599[1]
  i2598.normals = i2599[2]
  i2598.tangents = i2599[3]
  return i2598
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[84],"85":[9],"86":[87],"88":[87],"89":[87],"90":[87],"91":[87],"92":[87],"93":[87],"94":[45],"95":[45],"96":[45],"97":[45],"98":[45],"99":[45],"100":[45],"101":[45],"102":[45],"103":[45],"104":[45],"105":[45],"106":[45],"107":[9],"108":[40],"109":[110],"111":[110],"8":[7],"112":[37],"56":[26],"113":[29],"114":[26],"115":[116],"117":[116],"118":[14],"119":[29],"120":[26],"44":[26],"121":[7],"122":[7],"12":[8],"16":[15,7],"123":[7],"11":[8],"124":[7],"125":[7],"126":[7],"127":[7],"128":[7],"129":[7],"130":[7],"131":[7],"132":[7],"133":[15,7],"134":[7],"135":[7],"136":[7],"137":[7],"18":[15,7],"138":[7],"139":[69],"140":[69],"70":[69],"141":[69],"142":[9],"143":[9]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","DG.Tweening.DOTweenAnimation","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Button","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Level1_Cloth_Playable_Step4","UnityEngine.GameObject","BasicDrag","UnityEngine.SpriteRenderer","BD_CameraFollow","Level1_SurfController","UnityEngine.BoxCollider2D","RotaryTimerKnob","UnityEngine.AudioClip","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.LineRenderer","TextureOffsetScroller","UnityEngine.TrailRenderer","UnityEngine.MeshRenderer","UnityEngine.SpriteMask","_2dxFX_Wave","BD_Clamp","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.Rigidbody2D","PlaceItem","ActionOnTap","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","SewingCol","OutlinePulse","BD_Action","BD_Fold","BD_Progress","UnityEngine.MeshFilter","StaticFixedPipe","BD_SpriteChange","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableRouter","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "14.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "4Sept2026_Lvl1_2_Step_4";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1766";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4209";

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

Deserializers.buildID = "34219c44-7660-432d-8bf0-6504f66a9441";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

