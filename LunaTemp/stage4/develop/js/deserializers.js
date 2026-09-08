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

Deserializers["Level3_Crown_Playable"] = function (request, data, root) {
  var i2100 = root || request.c( 'Level3_Crown_Playable' )
  var i2101 = data
  i2100.MainZoom = request.d('ZoomPos', i2101[0], i2100.MainZoom)
  request.r(i2101[1], i2101[2], 0, i2100, 'View1')
  request.r(i2101[3], i2101[4], 0, i2100, 'View2')
  i2100.ZoomStep1 = request.d('ZoomPos', i2101[5], i2100.ZoomStep1)
  request.r(i2101[6], i2101[7], 0, i2100, 'ToolStep1')
  request.r(i2101[8], i2101[9], 0, i2100, 'ToolStep1CameraFollow')
  request.r(i2101[10], i2101[11], 0, i2100, 'Step1Col')
  request.r(i2101[12], i2101[13], 0, i2100, 'DustSR_1')
  i2100.ZoomStep2 = request.d('ZoomPos', i2101[14], i2100.ZoomStep2)
  request.r(i2101[15], i2101[16], 0, i2100, 'ToolStep2')
  request.r(i2101[17], i2101[18], 0, i2100, 'ToolStep2CameraFollow')
  var i2103 = i2101[19]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 2) {
  request.r(i2103[i + 0], i2103[i + 1], 2, i2102, '')
  }
  i2100.SRsToFadeOut_2 = i2102
  request.r(i2101[20], i2101[21], 0, i2100, 'SpraySR_2')
  i2100.ZoomStep3 = request.d('ZoomPos', i2101[22], i2100.ZoomStep3)
  request.r(i2101[23], i2101[24], 0, i2100, 'ToolStep3')
  request.r(i2101[25], i2101[26], 0, i2100, 'ToolStep3CameraFollow')
  request.r(i2101[27], i2101[28], 0, i2100, 'Step3Col')
  request.r(i2101[29], i2101[30], 0, i2100, 'Mix')
  request.r(i2101[31], i2101[32], 0, i2100, 'MixE')
  i2100.levelName = i2101[33]
  i2100.levelReward = i2101[34]
  request.r(i2101[35], i2101[36], 0, i2100, 'LevelIcon')
  request.r(i2101[37], i2101[38], 0, i2100, 'Level_BG')
  var i2105 = i2101[39]
  var i2104 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2105.length; i += 2) {
  request.r(i2105[i + 0], i2105[i + 1], 1, i2104, '')
  }
  i2100.ToolIcons = i2104
  var i2107 = i2101[40]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 2) {
  request.r(i2107[i + 0], i2107[i + 1], 2, i2106, '')
  }
  i2100.AllDrags = i2106
  var i2109 = i2101[41]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 2) {
  request.r(i2109[i + 0], i2109[i + 1], 2, i2108, '')
  }
  i2100.AllSources = i2108
  var i2111 = i2101[42]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 2) {
  request.r(i2111[i + 0], i2111[i + 1], 2, i2110, '')
  }
  i2100.AllScratches = i2110
  i2100.stepsDone = i2101[43]
  i2100.levelNo = i2101[44]
  i2100.partNo = i2101[45]
  return i2100
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i2112 = root || request.c( 'ZoomPos' )
  var i2113 = data
  i2112.CameraPos = new pc.Vec3( i2113[0], i2113[1], i2113[2] )
  i2112.CameraFOV = i2113[3]
  return i2112
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i2124 = root || request.c( 'PlayableCTA' )
  var i2125 = data
  i2124.trigger = i2125[0]
  i2124.afterSeconds = i2125[1]
  i2124.afterTaps = i2125[2]
  request.r(i2125[3], i2125[4], 0, i2124, 'scratchProgress')
  i2124.scratchIndex = i2125[5]
  i2124.progressThreshold = i2125[6]
  request.r(i2125[7], i2125[8], 0, i2124, 'watchedTool')
  i2124.blockInputOnFire = !!i2125[9]
  i2124.refireOnEveryTap = !!i2125[10]
  i2124.refireDelay = i2125[11]
  i2124.showEndCard = !!i2125[12]
  request.r(i2125[13], i2125[14], 0, i2124, 'endCard')
  var i2127 = i2125[15]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 2) {
  request.r(i2127[i + 0], i2127[i + 1], 2, i2126, '')
  }
  i2124.thingsToDisableOnEndCard = i2126
  i2124.showEndCardOnProgressTrigger = !!i2125[16]
  i2124.showEndCardOnToolAppearTrigger = !!i2125[17]
  i2124.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i2125[18], i2124.onCtaFired)
  i2124.logWhenFired = !!i2125[19]
  return i2124
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2130 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2131 = data
  i2130.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2131[0], i2130.m_PersistentCalls)
  return i2130
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2132 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2133 = data
  var i2135 = i2133[0]
  var i2134 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2135.length; i += 1) {
    i2134.add(request.d('UnityEngine.Events.PersistentCall', i2135[i + 0]));
  }
  i2132.m_Calls = i2134
  return i2132
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2138 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2139 = data
  request.r(i2139[0], i2139[1], 0, i2138, 'm_Target')
  i2138.m_TargetAssemblyTypeName = i2139[2]
  i2138.m_MethodName = i2139[3]
  i2138.m_Mode = i2139[4]
  i2138.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2139[5], i2138.m_Arguments)
  i2138.m_CallState = i2139[6]
  return i2138
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i2140 = root || request.c( 'PlayableFadeCoverSettings' )
  var i2141 = data
  i2140.revealDelay = i2141[0]
  i2140.revealDuration = i2141[1]
  return i2140
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i2142 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i2143 = data
  request.r(i2143[0], i2143[1], 0, i2142, 'MainCamera')
  i2142.RenderType = i2143[2]
  request.r(i2143[3], i2143[4], 0, i2142, 'ScratchSurfaceSprite')
  i2142.ScratchSurfaceSpriteHasAlpha = !!i2143[5]
  i2142.MaskProgressCutOffValue = i2143[6]
  request.r(i2143[7], i2143[8], 0, i2142, 'EraseTexture')
  i2142.EraseTextureScale = new pc.Vec2( i2143[9], i2143[10] )
  i2142.InputEnabled = !!i2143[11]
  request.r(i2143[12], i2143[13], 0, i2142, 'Card')
  i2142.Mode = i2143[14]
  request.r(i2143[15], i2143[16], 0, i2142, 'Progress')
  request.r(i2143[17], i2143[18], 0, i2142, 'MeshCard')
  request.r(i2143[19], i2143[20], 0, i2142, 'SpriteCard')
  request.r(i2143[21], i2143[22], 0, i2142, 'ImageCard')
  request.r(i2143[23], i2143[24], 0, i2142, 'MaskShader')
  request.r(i2143[25], i2143[26], 0, i2142, 'BrushShader')
  request.r(i2143[27], i2143[28], 0, i2142, 'MaskProgressShader')
  request.r(i2143[29], i2143[30], 0, i2142, 'MaskProgressCutOffShader')
  return i2142
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i2144 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i2145 = data
  request.r(i2145[0], i2145[1], 0, i2144, 'MainCamera')
  request.r(i2145[2], i2145[3], 0, i2144, 'Surface')
  i2144.RenderTextureQuality = i2145[4]
  request.r(i2145[5], i2145[6], 0, i2144, 'Eraser')
  request.r(i2145[7], i2145[8], 0, i2144, 'Progress')
  request.r(i2145[9], i2145[10], 0, i2144, 'ScratchSurface')
  request.r(i2145[11], i2145[12], 0, i2144, 'RenderTexture')
  i2144.BrushScale = new pc.Vec2( i2145[13], i2145[14] )
  request.r(i2145[15], i2145[16], 0, i2144, 'ToolTip')
  i2144.InputEnabled = !!i2145[17]
  i2144.IsScratching = !!i2145[18]
  i2144.useChangingScale = !!i2145[19]
  i2144.useGivenBrushScale = !!i2145[20]
  i2144.canSpreadMask = !!i2145[21]
  i2144.shouldPaintHoles = !!i2145[22]
  i2144.canRotateTip = !!i2145[23]
  i2144._mode = i2145[24]
  return i2144
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i2146 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i2147 = data
  request.r(i2147[0], i2147[1], 0, i2146, 'Card')
  i2146.currentProgress = i2147[2]
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2149 = data
  i2148.color = new pc.Color(i2149[0], i2149[1], i2149[2], i2149[3])
  request.r(i2149[4], i2149[5], 0, i2148, 'sprite')
  i2148.flipX = !!i2149[6]
  i2148.flipY = !!i2149[7]
  i2148.drawMode = i2149[8]
  i2148.size = new pc.Vec2( i2149[9], i2149[10] )
  i2148.tileMode = i2149[11]
  i2148.adaptiveModeThreshold = i2149[12]
  i2148.maskInteraction = i2149[13]
  i2148.spriteSortPoint = i2149[14]
  i2148.enabled = !!i2149[15]
  request.r(i2149[16], i2149[17], 0, i2148, 'sharedMaterial')
  var i2151 = i2149[18]
  var i2150 = []
  for(var i = 0; i < i2151.length; i += 2) {
  request.r(i2151[i + 0], i2151[i + 1], 2, i2150, '')
  }
  i2148.sharedMaterials = i2150
  i2148.receiveShadows = !!i2149[19]
  i2148.shadowCastingMode = i2149[20]
  i2148.sortingLayerID = i2149[21]
  i2148.sortingOrder = i2149[22]
  i2148.lightmapIndex = i2149[23]
  i2148.lightmapSceneIndex = i2149[24]
  i2148.lightmapScaleOffset = new pc.Vec4( i2149[25], i2149[26], i2149[27], i2149[28] )
  i2148.lightProbeUsage = i2149[29]
  i2148.reflectionProbeUsage = i2149[30]
  return i2148
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i2152 = root || request.c( 'PlayParticlesOnCollision' )
  var i2153 = data
  request.r(i2153[0], i2153[1], 0, i2152, 'Target')
  request.r(i2153[2], i2153[3], 0, i2152, 'ParticlePrefab')
  i2152.destroyIt = !!i2153[4]
  i2152.stayAtPlace = !!i2153[5]
  i2152.disableOnCollision = !!i2153[6]
  i2152.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i2153[7], i2152.OnCollisionEvent)
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2155 = data
  i2154.radius = i2155[0]
  i2154.enabled = !!i2155[1]
  i2154.isTrigger = !!i2155[2]
  i2154.usedByEffector = !!i2155[3]
  i2154.density = i2155[4]
  i2154.offset = new pc.Vec2( i2155[5], i2155[6] )
  request.r(i2155[7], i2155[8], 0, i2154, 'material')
  return i2154
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i2156 = root || request.c( 'PlaySfxOnCollision' )
  var i2157 = data
  request.r(i2157[0], i2157[1], 0, i2156, 'Tip')
  i2156.Mode = i2157[2]
  request.r(i2157[3], i2157[4], 0, i2156, 'DragInput')
  request.r(i2157[5], i2157[6], 0, i2156, 'Source')
  i2156.startVol = i2157[7]
  i2156.targetVol = i2157[8]
  i2156.duration = i2157[9]
  request.r(i2157[10], i2157[11], 0, i2156, 'Particles')
  i2156.isDone = !!i2157[12]
  i2156.isInArea = !!i2157[13]
  i2156.isPlaying = !!i2157[14]
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2159 = data
  request.r(i2159[0], i2159[1], 0, i2158, 'clip')
  request.r(i2159[2], i2159[3], 0, i2158, 'outputAudioMixerGroup')
  i2158.playOnAwake = !!i2159[4]
  i2158.loop = !!i2159[5]
  i2158.time = i2159[6]
  i2158.volume = i2159[7]
  i2158.pitch = i2159[8]
  i2158.enabled = !!i2159[9]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i2161 = data
  i2160.usedByComposite = !!i2161[0]
  i2160.autoTiling = !!i2161[1]
  var i2163 = i2161[2]
  var i2162 = []
  for(var i = 0; i < i2163.length; i += 1) {
  var i2165 = i2163[i + 0]
  var i2164 = []
  for(var i = 0; i < i2165.length; i += 2) {
    i2164.push( new pc.Vec2( i2165[i + 0], i2165[i + 1] ) );
  }
    i2162.push( i2164 );
  }
  i2160.points = i2162
  i2160.enabled = !!i2161[3]
  i2160.isTrigger = !!i2161[4]
  i2160.usedByEffector = !!i2161[5]
  i2160.density = i2161[6]
  i2160.offset = new pc.Vec2( i2161[7], i2161[8] )
  request.r(i2161[9], i2161[10], 0, i2160, 'material')
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2173 = data
  i2172.usedByComposite = !!i2173[0]
  i2172.autoTiling = !!i2173[1]
  i2172.size = new pc.Vec2( i2173[2], i2173[3] )
  i2172.edgeRadius = i2173[4]
  i2172.enabled = !!i2173[5]
  i2172.isTrigger = !!i2173[6]
  i2172.usedByEffector = !!i2173[7]
  i2172.density = i2173[8]
  i2172.offset = new pc.Vec2( i2173[9], i2173[10] )
  request.r(i2173[11], i2173[12], 0, i2172, 'material')
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2175 = data
  request.r(i2175[0], i2175[1], 0, i2174, 'animatorController')
  request.r(i2175[2], i2175[3], 0, i2174, 'avatar')
  i2174.updateMode = i2175[4]
  i2174.hasTransformHierarchy = !!i2175[5]
  i2174.applyRootMotion = !!i2175[6]
  var i2177 = i2175[7]
  var i2176 = []
  for(var i = 0; i < i2177.length; i += 2) {
  request.r(i2177[i + 0], i2177[i + 1], 2, i2176, '')
  }
  i2174.humanBones = i2176
  i2174.enabled = !!i2175[8]
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2181 = data
  i2180.frontSortingLayerID = i2181[0]
  i2180.frontSortingOrder = i2181[1]
  i2180.backSortingLayerID = i2181[2]
  i2180.backSortingOrder = i2181[3]
  i2180.alphaCutoff = i2181[4]
  request.r(i2181[5], i2181[6], 0, i2180, 'sprite')
  i2180.tileMode = i2181[7]
  i2180.isCustomRangeActive = !!i2181[8]
  i2180.spriteSortPoint = i2181[9]
  i2180.enabled = !!i2181[10]
  request.r(i2181[11], i2181[12], 0, i2180, 'sharedMaterial')
  var i2183 = i2181[13]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 2) {
  request.r(i2183[i + 0], i2183[i + 1], 2, i2182, '')
  }
  i2180.sharedMaterials = i2182
  i2180.receiveShadows = !!i2181[14]
  i2180.shadowCastingMode = i2181[15]
  i2180.sortingLayerID = i2181[16]
  i2180.sortingOrder = i2181[17]
  i2180.lightmapIndex = i2181[18]
  i2180.lightmapSceneIndex = i2181[19]
  i2180.lightmapScaleOffset = new pc.Vec4( i2181[20], i2181[21], i2181[22], i2181[23] )
  i2180.lightProbeUsage = i2181[24]
  i2180.reflectionProbeUsage = i2181[25]
  return i2180
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i2184 = root || request.c( 'BasicDrag' )
  var i2185 = data
  i2184.canDrag = !!i2185[0]
  i2184.dragByDelta = !!i2185[1]
  i2184.isDragging = !!i2185[2]
  i2184.moveWithPointer = !!i2185[3]
  i2184.canReturn = !!i2185[4]
  i2184.jumpOnReturn = !!i2185[5]
  i2184.returnTime = i2185[6]
  i2184.Tool_Offset = new pc.Vec3( i2185[7], i2185[8], i2185[9] )
  i2184.canScaleIncrease = !!i2185[10]
  i2184.Self_ScaleNew = new pc.Vec3( i2185[11], i2185[12], i2185[13] )
  i2184.canRotateOnPick = !!i2185[14]
  i2184.startRot = new pc.Vec3( i2185[15], i2185[16], i2185[17] )
  i2184.newRot = new pc.Vec3( i2185[18], i2185[19], i2185[20] )
  var i2187 = i2185[21]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 2) {
  request.r(i2187[i + 0], i2187[i + 1], 2, i2186, '')
  }
  i2184.childSprite = i2186
  request.r(i2185[22], i2185[23], 0, i2184, 'ToolSelectClip')
  request.r(i2185[24], i2185[25], 0, i2184, 'ToolLoopClip')
  request.r(i2185[26], i2185[27], 0, i2184, 'thisParticles')
  i2184.onDragparticle = !!i2185[28]
  request.r(i2185[29], i2185[30], 0, i2184, 'dragParticles')
  request.r(i2185[31], i2185[32], 0, i2184, 'anim')
  i2184.startPos = new pc.Vec3( i2185[33], i2185[34], i2185[35] )
  i2184.startScale = new pc.Vec3( i2185[36], i2185[37], i2185[38] )
  i2184.Vibration = !!i2185[39]
  i2184.isPlacedCannotMove = !!i2185[40]
  i2184.isObjectMovingWhileDragging = !!i2185[41]
  i2184.OnMouseDownEvent = request.d('System.Action', i2185[42], i2184.OnMouseDownEvent)
  i2184.OnMouseUpEvent = request.d('System.Action', i2185[43], i2184.OnMouseUpEvent)
  i2184.ProgStartEvent = request.d('System.Action', i2185[44], i2184.ProgStartEvent)
  i2184.ProgEndEvent = request.d('System.Action', i2185[45], i2184.ProgEndEvent)
  i2184.canCallMouseUpWhenGamePaused = !!i2185[46]
  i2184.ClampX_L = i2185[47]
  i2184.ClampX_H = i2185[48]
  i2184.ClampY_L = i2185[49]
  i2184.ClampY_H = i2185[50]
  i2184.startOrder = i2185[51]
  i2184.dontResetItIsInCollider = !!i2185[52]
  request.r(i2185[53], i2185[54], 0, i2184, 'thisCollider')
  request.r(i2185[55], i2185[56], 0, i2184, 'thisSR')
  i2184.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i2185[57], i2184.OnMouseDownEventIndependentFromCanDrag)
  return i2184
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2188 = root || request.c( 'System.Action' )
  var i2189 = data
  return i2188
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i2190 = root || request.c( 'BD_Progress' )
  var i2191 = data
  var i2193 = i2191[0]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 1) {
    i2192.push( request.d('ScratchData', i2193[i + 0]) );
  }
  i2190.AllScratches = i2192
  i2190.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i2191[1], i2190.OnScratchComplete)
  i2190.isProgDone = !!i2191[2]
  i2190.canCallComplete = !!i2191[3]
  i2190.CollectiveAppear = !!i2191[4]
  i2190.tipControl = !!i2191[5]
  i2190.progressControl = !!i2191[6]
  request.r(i2191[7], i2191[8], 0, i2190, 'thisDrag')
  i2190.CompleteEvent = request.d('System.Action', i2191[9], i2190.CompleteEvent)
  i2190.SubCompleteEvent = request.d('System.Action', i2191[10], i2190.SubCompleteEvent)
  return i2190
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i2196 = root || request.c( 'ScratchData' )
  var i2197 = data
  request.r(i2197[0], i2197[1], 0, i2196, 'ScratchManager')
  i2196.scratchLimit = i2197[2]
  i2196.isComplete = !!i2197[3]
  return i2196
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2198 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2199 = data
  request.r(i2199[0], i2199[1], 0, i2198, 'm_ObjectArgument')
  i2198.m_ObjectArgumentAssemblyTypeName = i2199[2]
  i2198.m_IntArgument = i2199[3]
  i2198.m_FloatArgument = i2199[4]
  i2198.m_StringArgument = i2199[5]
  i2198.m_BoolArgument = !!i2199[6]
  return i2198
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i2200 = root || request.c( 'BD_Clamp' )
  var i2201 = data
  i2200.ClampX_L = i2201[0]
  i2200.ClampX_H = i2201[1]
  i2200.ClampY_L = i2201[2]
  i2200.ClampY_H = i2201[3]
  return i2200
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i2202 = root || request.c( 'BD_ToolRotate' )
  var i2203 = data
  i2202.startDelay = i2203[0]
  request.r(i2203[1], i2203[2], 0, i2202, 'Tool')
  request.r(i2203[3], i2203[4], 0, i2202, 'Clamp')
  request.r(i2203[5], i2203[6], 0, i2202, 'Pivot')
  i2202.MinAngle = new pc.Vec3( i2203[7], i2203[8], i2203[9] )
  i2202.MaxAngle = new pc.Vec3( i2203[10], i2203[11], i2203[12] )
  i2202.rotationSpeed = i2203[13]
  return i2202
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i2204 = root || request.c( 'BD_CameraFollow' )
  var i2205 = data
  request.r(i2205[0], i2205[1], 0, i2204, 'Tool')
  request.r(i2205[2], i2205[3], 0, i2204, 'Pivot')
  i2204.FOV = i2205[4]
  i2204.Y_L = i2205[5]
  i2204.Y_H = i2205[6]
  i2204.X_L = i2205[7]
  i2204.X_R = i2205[8]
  i2204.startDelay = i2205[9]
  i2204.duration = i2205[10]
  return i2204
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i2206 = root || request.c( 'BD_AnimatorDrag' )
  var i2207 = data
  request.r(i2207[0], i2207[1], 0, i2206, 'BD')
  request.r(i2207[2], i2207[3], 0, i2206, 'anim')
  request.r(i2207[4], i2207[5], 0, i2206, 'Source')
  i2206.Vibration = !!i2207[6]
  i2206.isCompletable = !!i2207[7]
  i2206.completionThreshold = i2207[8]
  i2206.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2207[9], i2206.OnComplete)
  return i2206
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i2208 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i2209 = data
  request.r(i2209[0], i2209[1], 0, i2208, 'm_RootBone')
  var i2211 = i2209[2]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 2) {
  request.r(i2211[i + 0], i2211[i + 1], 2, i2210, '')
  }
  i2208.m_BoneTransforms = i2210
  i2208.m_AlwaysUpdate = !!i2209[3]
  i2208.m_AutoRebind = !!i2209[4]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2213 = data
  i2212.bodyType = i2213[0]
  request.r(i2213[1], i2213[2], 0, i2212, 'material')
  i2212.simulated = !!i2213[3]
  i2212.useAutoMass = !!i2213[4]
  i2212.mass = i2213[5]
  i2212.drag = i2213[6]
  i2212.angularDrag = i2213[7]
  i2212.gravityScale = i2213[8]
  i2212.collisionDetectionMode = i2213[9]
  i2212.sleepMode = i2213[10]
  i2212.constraints = i2213[11]
  return i2212
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i2214 = root || request.c( 'BD_SpriteChange' )
  var i2215 = data
  request.r(i2215[0], i2215[1], 0, i2214, 'BD')
  request.r(i2215[2], i2215[3], 0, i2214, 'SR')
  request.r(i2215[4], i2215[5], 0, i2214, 'Default')
  request.r(i2215[6], i2215[7], 0, i2214, 'Picked')
  i2214.resetOnRelease = !!i2215[8]
  return i2214
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i2216 = root || request.c( 'BD_ProgressHelper' )
  var i2217 = data
  request.r(i2217[0], i2217[1], 0, i2216, 'BD_Progress')
  request.r(i2217[2], i2217[3], 0, i2216, 'fadeSprite')
  i2216.fadeIn = !!i2217[4]
  return i2216
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i2218 = root || request.c( 'DestroyObj' )
  var i2219 = data
  i2218.destroyDelay = i2219[0]
  return i2218
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i2220 = root || request.c( 'MenuLevel' )
  var i2221 = data
  request.r(i2221[0], i2221[1], 0, i2220, 'menuLevelBtnUpdate')
  var i2223 = i2221[2]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('MenuLevelData', i2223[i + 0]) );
  }
  i2220.AllSteps = i2222
  request.r(i2221[3], i2221[4], 0, i2220, 'buttonparent')
  var i2225 = i2221[5]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 2) {
  request.r(i2225[i + 0], i2225[i + 1], 2, i2224, '')
  }
  i2220.BtnsDotweenAnims = i2224
  var i2227 = i2221[6]
  var i2226 = []
  for(var i = 0; i < i2227.length; i += 2) {
  request.r(i2227[i + 0], i2227[i + 1], 2, i2226, '')
  }
  i2220.BtnsCols = i2226
  request.r(i2221[7], i2221[8], 0, i2220, 'mainGameView')
  request.r(i2221[9], i2221[10], 0, i2220, 'Storyboard')
  request.r(i2221[11], i2221[12], 0, i2220, 'BgMusic')
  request.r(i2221[13], i2221[14], 0, i2220, 'BgStoryMusic')
  request.r(i2221[15], i2221[16], 0, i2220, 'Hand_Tut1')
  var i2229 = i2221[17]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 2) {
  request.r(i2229[i + 0], i2229[i + 1], 2, i2228, '')
  }
  i2220.itemEnable_Onstart = i2228
  var i2231 = i2221[18]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 2) {
  request.r(i2231[i + 0], i2231[i + 1], 2, i2230, '')
  }
  i2220.itemDisable_Onstart = i2230
  var i2233 = i2221[19]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 2) {
  request.r(i2233[i + 0], i2233[i + 1], 2, i2232, '')
  }
  i2220.itemEnable_Oncomplete = i2232
  var i2235 = i2221[20]
  var i2234 = []
  for(var i = 0; i < i2235.length; i += 2) {
  request.r(i2235[i + 0], i2235[i + 1], 2, i2234, '')
  }
  i2220.itemDisable_Oncomplete = i2234
  i2220.levelKey = i2221[21]
  i2220.revealDirtyHoldTime = i2221[22]
  return i2220
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i2238 = root || request.c( 'MenuLevelData' )
  var i2239 = data
  i2238.Name = i2239[0]
  request.r(i2239[1], i2239[2], 0, i2238, 'UiBtn')
  request.r(i2239[3], i2239[4], 0, i2238, 'TickBtn')
  request.r(i2239[5], i2239[6], 0, i2238, 'ExclamationIcon')
  var i2241 = i2239[7]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 2) {
  request.r(i2241[i + 0], i2241[i + 1], 2, i2240, '')
  }
  i2238.Item_Dirty = i2240
  var i2243 = i2239[8]
  var i2242 = []
  for(var i = 0; i < i2243.length; i += 2) {
  request.r(i2243[i + 0], i2243[i + 1], 2, i2242, '')
  }
  i2238.Item_Clean = i2242
  request.r(i2239[9], i2239[10], 0, i2238, 'CompleteParticle')
  return i2238
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i2248 = root || request.c( 'Level_PoseController' )
  var i2249 = data
  var i2251 = i2249[0]
  var i2250 = []
  for(var i = 0; i < i2251.length; i += 2) {
  request.r(i2251[i + 0], i2251[i + 1], 2, i2250, '')
  }
  i2248.itemToShow = i2250
  var i2253 = i2249[1]
  var i2252 = []
  for(var i = 0; i < i2253.length; i += 2) {
  request.r(i2253[i + 0], i2253[i + 1], 2, i2252, '')
  }
  i2248.itemToHide = i2252
  i2248.stepTarget = i2249[2]
  return i2248
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2254 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2255 = data
  i2254.targetIsSelf = !!i2255[0]
  request.r(i2255[1], i2255[2], 0, i2254, 'targetGO')
  i2254.tweenTargetIsTargetGO = !!i2255[3]
  i2254.delay = i2255[4]
  i2254.duration = i2255[5]
  i2254.easeType = i2255[6]
  i2254.easeCurve = new pc.AnimationCurve( { keys_flow: i2255[7] } )
  i2254.loopType = i2255[8]
  i2254.loops = i2255[9]
  i2254.id = i2255[10]
  i2254.isRelative = !!i2255[11]
  i2254.isFrom = !!i2255[12]
  i2254.isIndependentUpdate = !!i2255[13]
  i2254.autoKill = !!i2255[14]
  i2254.autoGenerate = !!i2255[15]
  i2254.isActive = !!i2255[16]
  i2254.isValid = !!i2255[17]
  request.r(i2255[18], i2255[19], 0, i2254, 'target')
  i2254.animationType = i2255[20]
  i2254.targetType = i2255[21]
  i2254.forcedTargetType = i2255[22]
  i2254.autoPlay = !!i2255[23]
  i2254.useTargetAsV3 = !!i2255[24]
  i2254.endValueFloat = i2255[25]
  i2254.endValueV3 = new pc.Vec3( i2255[26], i2255[27], i2255[28] )
  i2254.endValueV2 = new pc.Vec2( i2255[29], i2255[30] )
  i2254.endValueColor = new pc.Color(i2255[31], i2255[32], i2255[33], i2255[34])
  i2254.endValueString = i2255[35]
  i2254.endValueRect = UnityEngine.Rect.MinMaxRect(i2255[36], i2255[37], i2255[38], i2255[39])
  request.r(i2255[40], i2255[41], 0, i2254, 'endValueTransform')
  i2254.optionalBool0 = !!i2255[42]
  i2254.optionalBool1 = !!i2255[43]
  i2254.optionalFloat0 = i2255[44]
  i2254.optionalInt0 = i2255[45]
  i2254.optionalRotationMode = i2255[46]
  i2254.optionalScrambleMode = i2255[47]
  i2254.optionalShakeRandomnessMode = i2255[48]
  i2254.optionalString = i2255[49]
  i2254.updateType = i2255[50]
  i2254.isSpeedBased = !!i2255[51]
  i2254.hasOnStart = !!i2255[52]
  i2254.hasOnPlay = !!i2255[53]
  i2254.hasOnUpdate = !!i2255[54]
  i2254.hasOnStepComplete = !!i2255[55]
  i2254.hasOnComplete = !!i2255[56]
  i2254.hasOnTweenCreated = !!i2255[57]
  i2254.hasOnRewind = !!i2255[58]
  i2254.onStart = request.d('UnityEngine.Events.UnityEvent', i2255[59], i2254.onStart)
  i2254.onPlay = request.d('UnityEngine.Events.UnityEvent', i2255[60], i2254.onPlay)
  i2254.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2255[61], i2254.onUpdate)
  i2254.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2255[62], i2254.onStepComplete)
  i2254.onComplete = request.d('UnityEngine.Events.UnityEvent', i2255[63], i2254.onComplete)
  i2254.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2255[64], i2254.onTweenCreated)
  i2254.onRewind = request.d('UnityEngine.Events.UnityEvent', i2255[65], i2254.onRewind)
  return i2254
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i2256 = root || request.c( 'SpriteButton' )
  var i2257 = data
  i2256.isLocked = !!i2257[0]
  i2256.lockMsg = i2257[1]
  i2256.onClick = request.d('UnityEngine.Events.UnityEvent', i2257[2], i2256.onClick)
  i2256.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i2257[3], i2256.onLockedClick)
  i2256.isLevelBtnSfx = !!i2257[4]
  request.r(i2257[5], i2257[6], 0, i2256, 'pivot')
  i2256.reductionChange = i2257[7]
  i2256.animationDuration = i2257[8]
  request.r(i2257[9], i2257[10], 0, i2256, 'entryAnim')
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2259 = data
  i2258.name = i2259[0]
  i2258.atlasId = i2259[1]
  i2258.mipmapCount = i2259[2]
  i2258.hdr = !!i2259[3]
  i2258.size = i2259[4]
  i2258.anisoLevel = i2259[5]
  i2258.filterMode = i2259[6]
  var i2261 = i2259[7]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 4) {
    i2260.push( UnityEngine.Rect.MinMaxRect(i2261[i + 0], i2261[i + 1], i2261[i + 2], i2261[i + 3]) );
  }
  i2258.rects = i2260
  i2258.wrapU = i2259[8]
  i2258.wrapV = i2259[9]
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2265 = data
  i2264.name = i2265[0]
  i2264.index = i2265[1]
  i2264.startup = !!i2265[2]
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2267 = data
  i2266.aspect = i2267[0]
  i2266.orthographic = !!i2267[1]
  i2266.orthographicSize = i2267[2]
  i2266.backgroundColor = new pc.Color(i2267[3], i2267[4], i2267[5], i2267[6])
  i2266.nearClipPlane = i2267[7]
  i2266.farClipPlane = i2267[8]
  i2266.fieldOfView = i2267[9]
  i2266.depth = i2267[10]
  i2266.clearFlags = i2267[11]
  i2266.cullingMask = i2267[12]
  i2266.rect = i2267[13]
  request.r(i2267[14], i2267[15], 0, i2266, 'targetTexture')
  i2266.usePhysicalProperties = !!i2267[16]
  i2266.focalLength = i2267[17]
  i2266.sensorSize = new pc.Vec2( i2267[18], i2267[19] )
  i2266.lensShift = new pc.Vec2( i2267[20], i2267[21] )
  i2266.gateFit = i2267[22]
  i2266.commandBufferCount = i2267[23]
  i2266.cameraType = i2267[24]
  i2266.enabled = !!i2267[25]
  return i2266
}

Deserializers["CameraController"] = function (request, data, root) {
  var i2268 = root || request.c( 'CameraController' )
  var i2269 = data
  request.r(i2269[0], i2269[1], 0, i2268, 'cam')
  i2268.defaultPosition = new pc.Vec3( i2269[2], i2269[3], i2269[4] )
  i2268.defaultSize = i2269[5]
  i2268.defaultFOV = i2269[6]
  i2268.defaultDuration = i2269[7]
  i2268.defaultEase = i2269[8]
  return i2268
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i2270 = root || request.c( 'MusicSource' )
  var i2271 = data
  request.r(i2271[0], i2271[1], 0, i2270, 'source')
  return i2270
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i2272 = root || request.c( 'UI_Manager' )
  var i2273 = data
  i2272.levelCompleted = !!i2273[0]
  i2272.isPauseActive = !!i2273[1]
  i2272.loadIndex = i2273[2]
  request.r(i2273[3], i2273[4], 0, i2272, 'removeAdsButton')
  request.r(i2273[5], i2273[6], 0, i2272, 'pauseButton')
  request.r(i2273[7], i2273[8], 0, i2272, 'Fade_Img')
  request.r(i2273[9], i2273[10], 0, i2272, 'TopBarAnim')
  request.r(i2273[11], i2273[12], 0, i2272, 'MainPanel')
  request.r(i2273[13], i2273[14], 0, i2272, 'PausePanel')
  request.r(i2273[15], i2273[16], 0, i2272, 'PausePopUp')
  request.r(i2273[17], i2273[18], 0, i2272, 'PauseCanvasGroup')
  request.r(i2273[19], i2273[20], 0, i2272, 'RateUsPanel')
  request.r(i2273[21], i2273[22], 0, i2272, 'RateUsPopUp')
  request.r(i2273[23], i2273[24], 0, i2272, 'RemoveAdsPanel')
  request.r(i2273[25], i2273[26], 0, i2272, 'RemoveAdsPopUp')
  request.r(i2273[27], i2273[28], 0, i2272, 'RemoveAdsCanvasGroup')
  var i2275 = i2273[29]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 2) {
  request.r(i2275[i + 0], i2275[i + 1], 2, i2274, '')
  }
  i2272.RemoveAdsAnims = i2274
  request.r(i2273[30], i2273[31], 0, i2272, 'CompletePanel')
  request.r(i2273[32], i2273[33], 0, i2272, 'LevelIcon')
  request.r(i2273[34], i2273[35], 0, i2272, 'CompleteParticles')
  request.r(i2273[36], i2273[37], 0, i2272, 'progressBar')
  request.r(i2273[38], i2273[39], 0, i2272, 'progressText')
  request.r(i2273[40], i2273[41], 0, i2272, 'toolIcon1')
  request.r(i2273[42], i2273[43], 0, i2272, 'toolIcon2')
  request.r(i2273[44], i2273[45], 0, i2272, 'toolIcon3')
  request.r(i2273[46], i2273[47], 0, i2272, 'target1')
  request.r(i2273[48], i2273[49], 0, i2272, 'target2')
  i2272.toolMoveDuration = i2273[50]
  i2272.currentIndex = i2273[51]
  var i2277 = i2273[52]
  var i2276 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2277.length; i += 2) {
  request.r(i2277[i + 0], i2277[i + 1], 1, i2276, '')
  }
  i2272.allTools = i2276
  request.r(i2273[53], i2273[54], 0, i2272, 'clockProgress')
  request.r(i2273[55], i2273[56], 0, i2272, 'clockProgressFill')
  request.r(i2273[57], i2273[58], 0, i2272, 'clockAudio')
  i2272.moveDistance = i2273[59]
  i2272.animationDuration = i2273[60]
  i2272.greyBgChildName = i2273[61]
  i2272.pushOffset = i2273[62]
  return i2272
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i2278 = root || request.c( 'GameManagerPlayable' )
  var i2279 = data
  request.r(i2279[0], i2279[1], 0, i2278, 'endParticles')
  request.r(i2279[2], i2279[3], 0, i2278, 'stepCompleteParticles')
  request.r(i2279[4], i2279[5], 0, i2278, 'DefaultMat')
  request.r(i2279[6], i2279[7], 0, i2278, 'BG_Music')
  request.r(i2279[8], i2279[9], 0, i2278, 'restoreEffectShader')
  request.r(i2279[10], i2279[11], 0, i2278, 'stickerEffectShader')
  i2278.isComplete = !!i2279[12]
  i2278.isPaused = !!i2279[13]
  request.r(i2279[14], i2279[15], 0, i2278, 'currentLevel')
  i2278.startLevelOnPlay = !!i2279[16]
  i2278.currentLevelNo = i2279[17]
  return i2278
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2280 = root || request.c( 'AudioController' )
  var i2281 = data
  request.r(i2281[0], i2281[1], 0, i2280, 'MainMixer')
  request.r(i2281[2], i2281[3], 0, i2280, 'UiClick')
  request.r(i2281[4], i2281[5], 0, i2280, 'UiClickSource')
  var i2283 = i2281[6]
  var i2282 = []
  for(var i = 0; i < i2283.length; i += 2) {
  request.r(i2283[i + 0], i2283[i + 1], 2, i2282, '')
  }
  i2280.SfxSources = i2282
  var i2285 = i2281[7]
  var i2284 = []
  for(var i = 0; i < i2285.length; i += 2) {
  request.r(i2285[i + 0], i2285[i + 1], 2, i2284, '')
  }
  i2280.AllClips = i2284
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2289 = data
  i2288.pivot = new pc.Vec2( i2289[0], i2289[1] )
  i2288.anchorMin = new pc.Vec2( i2289[2], i2289[3] )
  i2288.anchorMax = new pc.Vec2( i2289[4], i2289[5] )
  i2288.sizeDelta = new pc.Vec2( i2289[6], i2289[7] )
  i2288.anchoredPosition3D = new pc.Vec3( i2289[8], i2289[9], i2289[10] )
  i2288.rotation = new pc.Quat(i2289[11], i2289[12], i2289[13], i2289[14])
  i2288.scale = new pc.Vec3( i2289[15], i2289[16], i2289[17] )
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2291 = data
  i2290.planeDistance = i2291[0]
  i2290.referencePixelsPerUnit = i2291[1]
  i2290.isFallbackOverlay = !!i2291[2]
  i2290.renderMode = i2291[3]
  i2290.renderOrder = i2291[4]
  i2290.sortingLayerName = i2291[5]
  i2290.sortingOrder = i2291[6]
  i2290.scaleFactor = i2291[7]
  request.r(i2291[8], i2291[9], 0, i2290, 'worldCamera')
  i2290.overrideSorting = !!i2291[10]
  i2290.pixelPerfect = !!i2291[11]
  i2290.targetDisplay = i2291[12]
  i2290.overridePixelPerfect = !!i2291[13]
  i2290.enabled = !!i2291[14]
  return i2290
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2292 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2293 = data
  i2292.m_UiScaleMode = i2293[0]
  i2292.m_ReferencePixelsPerUnit = i2293[1]
  i2292.m_ScaleFactor = i2293[2]
  i2292.m_ReferenceResolution = new pc.Vec2( i2293[3], i2293[4] )
  i2292.m_ScreenMatchMode = i2293[5]
  i2292.m_MatchWidthOrHeight = i2293[6]
  i2292.m_PhysicalUnit = i2293[7]
  i2292.m_FallbackScreenDPI = i2293[8]
  i2292.m_DefaultSpriteDPI = i2293[9]
  i2292.m_DynamicPixelsPerUnit = i2293[10]
  i2292.m_PresetInfoIsWorld = !!i2293[11]
  return i2292
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2294 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2295 = data
  i2294.m_IgnoreReversedGraphics = !!i2295[0]
  i2294.m_BlockingObjects = i2295[1]
  i2294.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2295[2] )
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2297 = data
  i2296.cullTransparentMesh = !!i2297[0]
  return i2296
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2298 = root || request.c( 'UnityEngine.UI.Image' )
  var i2299 = data
  request.r(i2299[0], i2299[1], 0, i2298, 'm_Sprite')
  i2298.m_Type = i2299[2]
  i2298.m_PreserveAspect = !!i2299[3]
  i2298.m_FillCenter = !!i2299[4]
  i2298.m_FillMethod = i2299[5]
  i2298.m_FillAmount = i2299[6]
  i2298.m_FillClockwise = !!i2299[7]
  i2298.m_FillOrigin = i2299[8]
  i2298.m_UseSpriteMesh = !!i2299[9]
  i2298.m_PixelsPerUnitMultiplier = i2299[10]
  request.r(i2299[11], i2299[12], 0, i2298, 'm_Material')
  i2298.m_Maskable = !!i2299[13]
  i2298.m_Color = new pc.Color(i2299[14], i2299[15], i2299[16], i2299[17])
  i2298.m_RaycastTarget = !!i2299[18]
  i2298.m_RaycastPadding = new pc.Vec4( i2299[19], i2299[20], i2299[21], i2299[22] )
  return i2298
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2300 = root || request.c( 'UnityEngine.UI.Text' )
  var i2301 = data
  i2300.m_FontData = request.d('UnityEngine.UI.FontData', i2301[0], i2300.m_FontData)
  i2300.m_Text = i2301[1]
  request.r(i2301[2], i2301[3], 0, i2300, 'm_Material')
  i2300.m_Maskable = !!i2301[4]
  i2300.m_Color = new pc.Color(i2301[5], i2301[6], i2301[7], i2301[8])
  i2300.m_RaycastTarget = !!i2301[9]
  i2300.m_RaycastPadding = new pc.Vec4( i2301[10], i2301[11], i2301[12], i2301[13] )
  return i2300
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2302 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2303 = data
  request.r(i2303[0], i2303[1], 0, i2302, 'm_Font')
  i2302.m_FontSize = i2303[2]
  i2302.m_FontStyle = i2303[3]
  i2302.m_BestFit = !!i2303[4]
  i2302.m_MinSize = i2303[5]
  i2302.m_MaxSize = i2303[6]
  i2302.m_Alignment = i2303[7]
  i2302.m_AlignByGeometry = !!i2303[8]
  i2302.m_RichText = !!i2303[9]
  i2302.m_HorizontalOverflow = i2303[10]
  i2302.m_VerticalOverflow = i2303[11]
  i2302.m_LineSpacing = i2303[12]
  return i2302
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2304 = root || request.c( 'UnityEngine.UI.Button' )
  var i2305 = data
  i2304.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2305[0], i2304.m_OnClick)
  i2304.m_Navigation = request.d('UnityEngine.UI.Navigation', i2305[1], i2304.m_Navigation)
  i2304.m_Transition = i2305[2]
  i2304.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2305[3], i2304.m_Colors)
  i2304.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2305[4], i2304.m_SpriteState)
  i2304.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2305[5], i2304.m_AnimationTriggers)
  i2304.m_Interactable = !!i2305[6]
  request.r(i2305[7], i2305[8], 0, i2304, 'm_TargetGraphic')
  return i2304
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2306 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2307 = data
  i2306.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2307[0], i2306.m_PersistentCalls)
  return i2306
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2308 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2309 = data
  i2308.m_Mode = i2309[0]
  i2308.m_WrapAround = !!i2309[1]
  request.r(i2309[2], i2309[3], 0, i2308, 'm_SelectOnUp')
  request.r(i2309[4], i2309[5], 0, i2308, 'm_SelectOnDown')
  request.r(i2309[6], i2309[7], 0, i2308, 'm_SelectOnLeft')
  request.r(i2309[8], i2309[9], 0, i2308, 'm_SelectOnRight')
  return i2308
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2310 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2311 = data
  i2310.m_NormalColor = new pc.Color(i2311[0], i2311[1], i2311[2], i2311[3])
  i2310.m_HighlightedColor = new pc.Color(i2311[4], i2311[5], i2311[6], i2311[7])
  i2310.m_PressedColor = new pc.Color(i2311[8], i2311[9], i2311[10], i2311[11])
  i2310.m_SelectedColor = new pc.Color(i2311[12], i2311[13], i2311[14], i2311[15])
  i2310.m_DisabledColor = new pc.Color(i2311[16], i2311[17], i2311[18], i2311[19])
  i2310.m_ColorMultiplier = i2311[20]
  i2310.m_FadeDuration = i2311[21]
  return i2310
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2312 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2313 = data
  request.r(i2313[0], i2313[1], 0, i2312, 'm_HighlightedSprite')
  request.r(i2313[2], i2313[3], 0, i2312, 'm_PressedSprite')
  request.r(i2313[4], i2313[5], 0, i2312, 'm_SelectedSprite')
  request.r(i2313[6], i2313[7], 0, i2312, 'm_DisabledSprite')
  return i2312
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2314 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2315 = data
  i2314.m_NormalTrigger = i2315[0]
  i2314.m_HighlightedTrigger = i2315[1]
  i2314.m_PressedTrigger = i2315[2]
  i2314.m_SelectedTrigger = i2315[3]
  i2314.m_DisabledTrigger = i2315[4]
  return i2314
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i2316 = root || request.c( 'PlayableHudRuntime' )
  var i2317 = data
  return i2316
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2318 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2319 = data
  request.r(i2319[0], i2319[1], 0, i2318, 'm_FirstSelected')
  i2318.m_sendNavigationEvents = !!i2319[2]
  i2318.m_DragThreshold = i2319[3]
  return i2318
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2320 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2321 = data
  i2320.m_HorizontalAxis = i2321[0]
  i2320.m_VerticalAxis = i2321[1]
  i2320.m_SubmitButton = i2321[2]
  i2320.m_CancelButton = i2321[3]
  i2320.m_InputActionsPerSecond = i2321[4]
  i2320.m_RepeatDelay = i2321[5]
  i2320.m_ForceModuleActive = !!i2321[6]
  i2320.m_SendPointerHoverToParent = !!i2321[7]
  return i2320
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i2322 = root || request.c( 'PlayableRouter' )
  var i2323 = data
  var i2325 = i2323[0]
  var i2324 = []
  for(var i = 0; i < i2325.length; i += 2) {
  request.r(i2325[i + 0], i2325[i + 1], 2, i2324, '')
  }
  i2322.menuObjects = i2324
  var i2327 = i2323[1]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 2) {
  request.r(i2327[i + 0], i2327[i + 1], 2, i2326, '')
  }
  i2322.gameplayObjects = i2326
  var i2329 = i2323[2]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 1) {
    i2328.push( request.d('PlayableRouter+SubLevelSlot', i2329[i + 0]) );
  }
  i2322.subLevels = i2328
  i2322.fadeDuration = i2323[3]
  i2322.lockedMessage = i2323[4]
  i2322.lockedTapsToCTA = i2323[5]
  return i2322
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i2332 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i2333 = data
  request.r(i2333[0], i2333[1], 0, i2332, 'button')
  request.r(i2333[2], i2333[3], 0, i2332, 'level')
  return i2332
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i2334 = root || request.c( 'ToastManager' )
  var i2335 = data
  request.r(i2335[0], i2335[1], 0, i2334, 'toastPanel')
  request.r(i2335[2], i2335[3], 0, i2334, 'toastPopup')
  request.r(i2335[4], i2335[5], 0, i2334, 'canvasGroup')
  request.r(i2335[6], i2335[7], 0, i2334, 'toastText')
  i2334.startY = i2335[8]
  i2334.visibleY = i2335[9]
  i2334.endY = i2335[10]
  i2334.animationTime = i2335[11]
  i2334.animationTimeUp = i2335[12]
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2337 = data
  i2336.m_Alpha = i2337[0]
  i2336.m_Interactable = !!i2337[1]
  i2336.m_BlocksRaycasts = !!i2337[2]
  i2336.m_IgnoreParentGroups = !!i2337[3]
  i2336.enabled = !!i2337[4]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2339 = data
  i2338.ambientIntensity = i2339[0]
  i2338.reflectionIntensity = i2339[1]
  i2338.ambientMode = i2339[2]
  i2338.ambientLight = new pc.Color(i2339[3], i2339[4], i2339[5], i2339[6])
  i2338.ambientSkyColor = new pc.Color(i2339[7], i2339[8], i2339[9], i2339[10])
  i2338.ambientGroundColor = new pc.Color(i2339[11], i2339[12], i2339[13], i2339[14])
  i2338.ambientEquatorColor = new pc.Color(i2339[15], i2339[16], i2339[17], i2339[18])
  i2338.fogColor = new pc.Color(i2339[19], i2339[20], i2339[21], i2339[22])
  i2338.fogEndDistance = i2339[23]
  i2338.fogStartDistance = i2339[24]
  i2338.fogDensity = i2339[25]
  i2338.fog = !!i2339[26]
  request.r(i2339[27], i2339[28], 0, i2338, 'skybox')
  i2338.fogMode = i2339[29]
  var i2341 = i2339[30]
  var i2340 = []
  for(var i = 0; i < i2341.length; i += 1) {
    i2340.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2341[i + 0]) );
  }
  i2338.lightmaps = i2340
  i2338.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2339[31], i2338.lightProbes)
  i2338.lightmapsMode = i2339[32]
  i2338.mixedBakeMode = i2339[33]
  i2338.environmentLightingMode = i2339[34]
  i2338.ambientProbe = new pc.SphericalHarmonicsL2(i2339[35])
  request.r(i2339[36], i2339[37], 0, i2338, 'customReflection')
  request.r(i2339[38], i2339[39], 0, i2338, 'defaultReflection')
  i2338.defaultReflectionMode = i2339[40]
  i2338.defaultReflectionResolution = i2339[41]
  i2338.sunLightObjectId = i2339[42]
  i2338.pixelLightCount = i2339[43]
  i2338.defaultReflectionHDR = !!i2339[44]
  i2338.hasLightDataAsset = !!i2339[45]
  i2338.hasManualGenerate = !!i2339[46]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2345 = data
  request.r(i2345[0], i2345[1], 0, i2344, 'lightmapColor')
  request.r(i2345[2], i2345[3], 0, i2344, 'lightmapDirection')
  request.r(i2345[4], i2345[5], 0, i2344, 'shadowMask')
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2346 = root || new UnityEngine.LightProbes()
  var i2347 = data
  return i2346
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

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[77],"78":[44],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[35],"88":[35],"89":[35],"90":[35],"91":[35],"92":[35],"93":[35],"94":[35],"95":[35],"96":[35],"97":[35],"98":[35],"99":[35],"100":[44],"101":[102],"103":[104],"105":[104],"55":[49],"106":[107],"108":[12],"109":[26],"110":[12],"111":[112],"113":[112],"114":[40],"42":[26],"115":[12],"34":[12],"116":[49],"117":[49],"58":[55],"50":[59,49],"118":[49],"57":[55],"119":[49],"120":[49],"121":[49],"122":[49],"123":[49],"124":[49],"125":[49],"126":[49],"127":[49],"128":[59,49],"129":[49],"130":[49],"131":[49],"132":[49],"51":[59,49],"133":[49],"134":[63],"135":[63],"64":[63],"136":[63],"137":[44],"138":[44]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level3_Crown_Playable","UnityEngine.GameObject","BasicDrag","BD_CameraFollow","UnityEngine.SpriteRenderer","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","PlayParticlesOnCollision","UnityEngine.CircleCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.PolygonCollider2D","UnityEngine.BoxCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SpriteMask","BD_Progress","BD_Clamp","BD_ToolRotate","BD_AnimatorDrag","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.Rigidbody2D","BD_SpriteChange","BD_ProgressHelper","DestroyObj","MenuLevel","DG.Tweening.DOTweenAnimation","Level_PoseController","SpriteButton","PlayableRouter","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "18.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "28Aug2026_Level_3_1_Step_1to3_v4_TEST";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1701";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4765";

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

Deserializers.buildID = "9de1418b-56a1-4850-85cb-71df5aca0fab";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

