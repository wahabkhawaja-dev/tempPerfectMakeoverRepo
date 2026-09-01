var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2034 = root || request.c( 'UnityEngine.JointSpring' )
  var i2035 = data
  i2034.spring = i2035[0]
  i2034.damper = i2035[1]
  i2034.targetPosition = i2035[2]
  return i2034
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2036 = root || request.c( 'UnityEngine.JointMotor' )
  var i2037 = data
  i2036.m_TargetVelocity = i2037[0]
  i2036.m_Force = i2037[1]
  i2036.m_FreeSpin = i2037[2]
  return i2036
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2038 = root || request.c( 'UnityEngine.JointLimits' )
  var i2039 = data
  i2038.m_Min = i2039[0]
  i2038.m_Max = i2039[1]
  i2038.m_Bounciness = i2039[2]
  i2038.m_BounceMinVelocity = i2039[3]
  i2038.m_ContactDistance = i2039[4]
  i2038.minBounce = i2039[5]
  i2038.maxBounce = i2039[6]
  return i2038
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2040 = root || request.c( 'UnityEngine.JointDrive' )
  var i2041 = data
  i2040.m_PositionSpring = i2041[0]
  i2040.m_PositionDamper = i2041[1]
  i2040.m_MaximumForce = i2041[2]
  i2040.m_UseAcceleration = i2041[3]
  return i2040
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2042 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2043 = data
  i2042.m_Spring = i2043[0]
  i2042.m_Damper = i2043[1]
  return i2042
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2044 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2045 = data
  i2044.m_Limit = i2045[0]
  i2044.m_Bounciness = i2045[1]
  i2044.m_ContactDistance = i2045[2]
  return i2044
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2046 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2047 = data
  i2046.m_ExtremumSlip = i2047[0]
  i2046.m_ExtremumValue = i2047[1]
  i2046.m_AsymptoteSlip = i2047[2]
  i2046.m_AsymptoteValue = i2047[3]
  i2046.m_Stiffness = i2047[4]
  return i2046
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2048 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2049 = data
  i2048.m_LowerAngle = i2049[0]
  i2048.m_UpperAngle = i2049[1]
  return i2048
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2050 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2051 = data
  i2050.m_MotorSpeed = i2051[0]
  i2050.m_MaximumMotorTorque = i2051[1]
  return i2050
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2052 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2053 = data
  i2052.m_DampingRatio = i2053[0]
  i2052.m_Frequency = i2053[1]
  i2052.m_Angle = i2053[2]
  return i2052
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2054 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2055 = data
  i2054.m_LowerTranslation = i2055[0]
  i2054.m_UpperTranslation = i2055[1]
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2056 = root || new pc.UnityMaterial()
  var i2057 = data
  i2056.name = i2057[0]
  request.r(i2057[1], i2057[2], 0, i2056, 'shader')
  i2056.renderQueue = i2057[3]
  i2056.enableInstancing = !!i2057[4]
  var i2059 = i2057[5]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2059[i + 0]) );
  }
  i2056.floatParameters = i2058
  var i2061 = i2057[6]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2061[i + 0]) );
  }
  i2056.colorParameters = i2060
  var i2063 = i2057[7]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2063[i + 0]) );
  }
  i2056.vectorParameters = i2062
  var i2065 = i2057[8]
  var i2064 = []
  for(var i = 0; i < i2065.length; i += 1) {
    i2064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2065[i + 0]) );
  }
  i2056.textureParameters = i2064
  var i2067 = i2057[9]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2067[i + 0]) );
  }
  i2056.materialFlags = i2066
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2071 = data
  i2070.name = i2071[0]
  i2070.value = i2071[1]
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2075 = data
  i2074.name = i2075[0]
  i2074.value = new pc.Color(i2075[1], i2075[2], i2075[3], i2075[4])
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2079 = data
  i2078.name = i2079[0]
  i2078.value = new pc.Vec4( i2079[1], i2079[2], i2079[3], i2079[4] )
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2083 = data
  i2082.name = i2083[0]
  request.r(i2083[1], i2083[2], 0, i2082, 'value')
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2087 = data
  i2086.name = i2087[0]
  i2086.enabled = !!i2087[1]
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2089 = data
  i2088.name = i2089[0]
  i2088.width = i2089[1]
  i2088.height = i2089[2]
  i2088.mipmapCount = i2089[3]
  i2088.anisoLevel = i2089[4]
  i2088.filterMode = i2089[5]
  i2088.hdr = !!i2089[6]
  i2088.format = i2089[7]
  i2088.wrapMode = i2089[8]
  i2088.alphaIsTransparency = !!i2089[9]
  i2088.alphaSource = i2089[10]
  i2088.graphicsFormat = i2089[11]
  i2088.sRGBTexture = !!i2089[12]
  i2088.desiredColorSpace = i2089[13]
  i2088.wrapU = i2089[14]
  i2088.wrapV = i2089[15]
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2091 = data
  i2090.name = i2091[0]
  i2090.halfPrecision = !!i2091[1]
  i2090.useSimplification = !!i2091[2]
  i2090.useUInt32IndexFormat = !!i2091[3]
  i2090.vertexCount = i2091[4]
  i2090.aabb = i2091[5]
  var i2093 = i2091[6]
  var i2092 = []
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.push( !!i2093[i + 0] );
  }
  i2090.streams = i2092
  i2090.vertices = i2091[7]
  var i2095 = i2091[8]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2095[i + 0]) );
  }
  i2090.subMeshes = i2094
  var i2097 = i2091[9]
  var i2096 = []
  for(var i = 0; i < i2097.length; i += 16) {
    i2096.push( new pc.Mat4().setData(i2097[i + 0], i2097[i + 1], i2097[i + 2], i2097[i + 3],  i2097[i + 4], i2097[i + 5], i2097[i + 6], i2097[i + 7],  i2097[i + 8], i2097[i + 9], i2097[i + 10], i2097[i + 11],  i2097[i + 12], i2097[i + 13], i2097[i + 14], i2097[i + 15]) );
  }
  i2090.bindposes = i2096
  var i2099 = i2091[10]
  var i2098 = []
  for(var i = 0; i < i2099.length; i += 1) {
    i2098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2099[i + 0]) );
  }
  i2090.blendShapes = i2098
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2105 = data
  i2104.triangles = i2105[0]
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2111 = data
  i2110.name = i2111[0]
  var i2113 = i2111[1]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2113[i + 0]) );
  }
  i2110.frames = i2112
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2115 = data
  i2114.position = new pc.Vec3( i2115[0], i2115[1], i2115[2] )
  i2114.scale = new pc.Vec3( i2115[3], i2115[4], i2115[5] )
  i2114.rotation = new pc.Quat(i2115[6], i2115[7], i2115[8], i2115[9])
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2117 = data
  i2116.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2117[0], i2116.main)
  i2116.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2117[1], i2116.colorBySpeed)
  i2116.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2117[2], i2116.colorOverLifetime)
  i2116.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2117[3], i2116.emission)
  i2116.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2117[4], i2116.rotationBySpeed)
  i2116.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2117[5], i2116.rotationOverLifetime)
  i2116.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2117[6], i2116.shape)
  i2116.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2117[7], i2116.sizeBySpeed)
  i2116.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2117[8], i2116.sizeOverLifetime)
  i2116.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2117[9], i2116.textureSheetAnimation)
  i2116.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2117[10], i2116.velocityOverLifetime)
  i2116.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2117[11], i2116.noise)
  i2116.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2117[12], i2116.inheritVelocity)
  i2116.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2117[13], i2116.forceOverLifetime)
  i2116.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2117[14], i2116.limitVelocityOverLifetime)
  i2116.useAutoRandomSeed = !!i2117[15]
  i2116.randomSeed = i2117[16]
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2118 = root || new pc.ParticleSystemMain()
  var i2119 = data
  i2118.duration = i2119[0]
  i2118.loop = !!i2119[1]
  i2118.prewarm = !!i2119[2]
  i2118.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2119[3], i2118.startDelay)
  i2118.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2119[4], i2118.startLifetime)
  i2118.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2119[5], i2118.startSpeed)
  i2118.startSize3D = !!i2119[6]
  i2118.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2119[7], i2118.startSizeX)
  i2118.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2119[8], i2118.startSizeY)
  i2118.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2119[9], i2118.startSizeZ)
  i2118.startRotation3D = !!i2119[10]
  i2118.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2119[11], i2118.startRotationX)
  i2118.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2119[12], i2118.startRotationY)
  i2118.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2119[13], i2118.startRotationZ)
  i2118.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2119[14], i2118.startColor)
  i2118.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2119[15], i2118.gravityModifier)
  i2118.simulationSpace = i2119[16]
  request.r(i2119[17], i2119[18], 0, i2118, 'customSimulationSpace')
  i2118.simulationSpeed = i2119[19]
  i2118.useUnscaledTime = !!i2119[20]
  i2118.scalingMode = i2119[21]
  i2118.playOnAwake = !!i2119[22]
  i2118.maxParticles = i2119[23]
  i2118.emitterVelocityMode = i2119[24]
  i2118.stopAction = i2119[25]
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2120 = root || new pc.MinMaxCurve()
  var i2121 = data
  i2120.mode = i2121[0]
  i2120.curveMin = new pc.AnimationCurve( { keys_flow: i2121[1] } )
  i2120.curveMax = new pc.AnimationCurve( { keys_flow: i2121[2] } )
  i2120.curveMultiplier = i2121[3]
  i2120.constantMin = i2121[4]
  i2120.constantMax = i2121[5]
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2122 = root || new pc.MinMaxGradient()
  var i2123 = data
  i2122.mode = i2123[0]
  i2122.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2123[1], i2122.gradientMin)
  i2122.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2123[2], i2122.gradientMax)
  i2122.colorMin = new pc.Color(i2123[3], i2123[4], i2123[5], i2123[6])
  i2122.colorMax = new pc.Color(i2123[7], i2123[8], i2123[9], i2123[10])
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2125 = data
  i2124.mode = i2125[0]
  var i2127 = i2125[1]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 1) {
    i2126.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2127[i + 0]) );
  }
  i2124.colorKeys = i2126
  var i2129 = i2125[2]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2129[i + 0]) );
  }
  i2124.alphaKeys = i2128
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2130 = root || new pc.ParticleSystemColorBySpeed()
  var i2131 = data
  i2130.enabled = !!i2131[0]
  i2130.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2131[1], i2130.color)
  i2130.range = new pc.Vec2( i2131[2], i2131[3] )
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2135 = data
  i2134.color = new pc.Color(i2135[0], i2135[1], i2135[2], i2135[3])
  i2134.time = i2135[4]
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2139 = data
  i2138.alpha = i2139[0]
  i2138.time = i2139[1]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2140 = root || new pc.ParticleSystemColorOverLifetime()
  var i2141 = data
  i2140.enabled = !!i2141[0]
  i2140.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2141[1], i2140.color)
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2142 = root || new pc.ParticleSystemEmitter()
  var i2143 = data
  i2142.enabled = !!i2143[0]
  i2142.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2143[1], i2142.rateOverTime)
  i2142.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2143[2], i2142.rateOverDistance)
  var i2145 = i2143[3]
  var i2144 = []
  for(var i = 0; i < i2145.length; i += 1) {
    i2144.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2145[i + 0]) );
  }
  i2142.bursts = i2144
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2148 = root || new pc.ParticleSystemBurst()
  var i2149 = data
  i2148.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2149[0], i2148.count)
  i2148.cycleCount = i2149[1]
  i2148.minCount = i2149[2]
  i2148.maxCount = i2149[3]
  i2148.repeatInterval = i2149[4]
  i2148.time = i2149[5]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2150 = root || new pc.ParticleSystemRotationBySpeed()
  var i2151 = data
  i2150.enabled = !!i2151[0]
  i2150.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2151[1], i2150.x)
  i2150.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2151[2], i2150.y)
  i2150.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2151[3], i2150.z)
  i2150.separateAxes = !!i2151[4]
  i2150.range = new pc.Vec2( i2151[5], i2151[6] )
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2152 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2153 = data
  i2152.enabled = !!i2153[0]
  i2152.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[1], i2152.x)
  i2152.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[2], i2152.y)
  i2152.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2153[3], i2152.z)
  i2152.separateAxes = !!i2153[4]
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2154 = root || new pc.ParticleSystemShape()
  var i2155 = data
  i2154.enabled = !!i2155[0]
  i2154.shapeType = i2155[1]
  i2154.randomDirectionAmount = i2155[2]
  i2154.sphericalDirectionAmount = i2155[3]
  i2154.randomPositionAmount = i2155[4]
  i2154.alignToDirection = !!i2155[5]
  i2154.radius = i2155[6]
  i2154.radiusMode = i2155[7]
  i2154.radiusSpread = i2155[8]
  i2154.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2155[9], i2154.radiusSpeed)
  i2154.radiusThickness = i2155[10]
  i2154.angle = i2155[11]
  i2154.length = i2155[12]
  i2154.boxThickness = new pc.Vec3( i2155[13], i2155[14], i2155[15] )
  i2154.meshShapeType = i2155[16]
  request.r(i2155[17], i2155[18], 0, i2154, 'mesh')
  request.r(i2155[19], i2155[20], 0, i2154, 'meshRenderer')
  request.r(i2155[21], i2155[22], 0, i2154, 'skinnedMeshRenderer')
  i2154.useMeshMaterialIndex = !!i2155[23]
  i2154.meshMaterialIndex = i2155[24]
  i2154.useMeshColors = !!i2155[25]
  i2154.normalOffset = i2155[26]
  i2154.arc = i2155[27]
  i2154.arcMode = i2155[28]
  i2154.arcSpread = i2155[29]
  i2154.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2155[30], i2154.arcSpeed)
  i2154.donutRadius = i2155[31]
  i2154.position = new pc.Vec3( i2155[32], i2155[33], i2155[34] )
  i2154.rotation = new pc.Vec3( i2155[35], i2155[36], i2155[37] )
  i2154.scale = new pc.Vec3( i2155[38], i2155[39], i2155[40] )
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2156 = root || new pc.ParticleSystemSizeBySpeed()
  var i2157 = data
  i2156.enabled = !!i2157[0]
  i2156.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2157[1], i2156.x)
  i2156.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2157[2], i2156.y)
  i2156.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2157[3], i2156.z)
  i2156.separateAxes = !!i2157[4]
  i2156.range = new pc.Vec2( i2157[5], i2157[6] )
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2158 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2159 = data
  i2158.enabled = !!i2159[0]
  i2158.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2159[1], i2158.x)
  i2158.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2159[2], i2158.y)
  i2158.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2159[3], i2158.z)
  i2158.separateAxes = !!i2159[4]
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2160 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2161 = data
  i2160.enabled = !!i2161[0]
  i2160.mode = i2161[1]
  i2160.animation = i2161[2]
  i2160.numTilesX = i2161[3]
  i2160.numTilesY = i2161[4]
  i2160.useRandomRow = !!i2161[5]
  i2160.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2161[6], i2160.frameOverTime)
  i2160.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2161[7], i2160.startFrame)
  i2160.cycleCount = i2161[8]
  i2160.rowIndex = i2161[9]
  i2160.flipU = i2161[10]
  i2160.flipV = i2161[11]
  i2160.spriteCount = i2161[12]
  var i2163 = i2161[13]
  var i2162 = []
  for(var i = 0; i < i2163.length; i += 2) {
  request.r(i2163[i + 0], i2163[i + 1], 2, i2162, '')
  }
  i2160.sprites = i2162
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2166 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2167 = data
  i2166.enabled = !!i2167[0]
  i2166.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2167[1], i2166.x)
  i2166.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2167[2], i2166.y)
  i2166.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2167[3], i2166.z)
  i2166.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2167[4], i2166.radial)
  i2166.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2167[5], i2166.speedModifier)
  i2166.space = i2167[6]
  i2166.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2167[7], i2166.orbitalX)
  i2166.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2167[8], i2166.orbitalY)
  i2166.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2167[9], i2166.orbitalZ)
  i2166.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2167[10], i2166.orbitalOffsetX)
  i2166.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2167[11], i2166.orbitalOffsetY)
  i2166.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2167[12], i2166.orbitalOffsetZ)
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2168 = root || new pc.ParticleSystemNoise()
  var i2169 = data
  i2168.enabled = !!i2169[0]
  i2168.separateAxes = !!i2169[1]
  i2168.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2169[2], i2168.strengthX)
  i2168.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2169[3], i2168.strengthY)
  i2168.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2169[4], i2168.strengthZ)
  i2168.frequency = i2169[5]
  i2168.damping = !!i2169[6]
  i2168.octaveCount = i2169[7]
  i2168.octaveMultiplier = i2169[8]
  i2168.octaveScale = i2169[9]
  i2168.quality = i2169[10]
  i2168.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2169[11], i2168.scrollSpeed)
  i2168.scrollSpeedMultiplier = i2169[12]
  i2168.remapEnabled = !!i2169[13]
  i2168.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2169[14], i2168.remapX)
  i2168.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2169[15], i2168.remapY)
  i2168.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2169[16], i2168.remapZ)
  i2168.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2169[17], i2168.positionAmount)
  i2168.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2169[18], i2168.rotationAmount)
  i2168.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2169[19], i2168.sizeAmount)
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2170 = root || new pc.ParticleSystemInheritVelocity()
  var i2171 = data
  i2170.enabled = !!i2171[0]
  i2170.mode = i2171[1]
  i2170.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2171[2], i2170.curve)
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2172 = root || new pc.ParticleSystemForceOverLifetime()
  var i2173 = data
  i2172.enabled = !!i2173[0]
  i2172.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[1], i2172.x)
  i2172.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[2], i2172.y)
  i2172.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[3], i2172.z)
  i2172.space = i2173[4]
  i2172.randomized = !!i2173[5]
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2174 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2175 = data
  i2174.enabled = !!i2175[0]
  i2174.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2175[1], i2174.limit)
  i2174.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2175[2], i2174.limitX)
  i2174.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2175[3], i2174.limitY)
  i2174.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2175[4], i2174.limitZ)
  i2174.dampen = i2175[5]
  i2174.separateAxes = !!i2175[6]
  i2174.space = i2175[7]
  i2174.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2175[8], i2174.drag)
  i2174.multiplyDragByParticleSize = !!i2175[9]
  i2174.multiplyDragByParticleVelocity = !!i2175[10]
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2177 = data
  request.r(i2177[0], i2177[1], 0, i2176, 'mesh')
  i2176.meshCount = i2177[2]
  i2176.activeVertexStreamsCount = i2177[3]
  i2176.alignment = i2177[4]
  i2176.renderMode = i2177[5]
  i2176.sortMode = i2177[6]
  i2176.lengthScale = i2177[7]
  i2176.velocityScale = i2177[8]
  i2176.cameraVelocityScale = i2177[9]
  i2176.normalDirection = i2177[10]
  i2176.sortingFudge = i2177[11]
  i2176.minParticleSize = i2177[12]
  i2176.maxParticleSize = i2177[13]
  i2176.pivot = new pc.Vec3( i2177[14], i2177[15], i2177[16] )
  request.r(i2177[17], i2177[18], 0, i2176, 'trailMaterial')
  i2176.applyActiveColorSpace = !!i2177[19]
  i2176.enabled = !!i2177[20]
  request.r(i2177[21], i2177[22], 0, i2176, 'sharedMaterial')
  var i2179 = i2177[23]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 2) {
  request.r(i2179[i + 0], i2179[i + 1], 2, i2178, '')
  }
  i2176.sharedMaterials = i2178
  i2176.receiveShadows = !!i2177[24]
  i2176.shadowCastingMode = i2177[25]
  i2176.sortingLayerID = i2177[26]
  i2176.sortingOrder = i2177[27]
  i2176.lightmapIndex = i2177[28]
  i2176.lightmapSceneIndex = i2177[29]
  i2176.lightmapScaleOffset = new pc.Vec4( i2177[30], i2177[31], i2177[32], i2177[33] )
  i2176.lightProbeUsage = i2177[34]
  i2176.reflectionProbeUsage = i2177[35]
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2183 = data
  i2182.name = i2183[0]
  i2182.tagId = i2183[1]
  i2182.enabled = !!i2183[2]
  i2182.isStatic = !!i2183[3]
  i2182.layer = i2183[4]
  return i2182
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i2184 = root || request.c( 'MenuLevel' )
  var i2185 = data
  request.r(i2185[0], i2185[1], 0, i2184, 'menuLevelBtnUpdate')
  var i2187 = i2185[2]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( request.d('MenuLevelData', i2187[i + 0]) );
  }
  i2184.AllSteps = i2186
  request.r(i2185[3], i2185[4], 0, i2184, 'buttonparent')
  var i2189 = i2185[5]
  var i2188 = []
  for(var i = 0; i < i2189.length; i += 2) {
  request.r(i2189[i + 0], i2189[i + 1], 2, i2188, '')
  }
  i2184.BtnsDotweenAnims = i2188
  var i2191 = i2185[6]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 2) {
  request.r(i2191[i + 0], i2191[i + 1], 2, i2190, '')
  }
  i2184.BtnsCols = i2190
  request.r(i2185[7], i2185[8], 0, i2184, 'mainGameView')
  request.r(i2185[9], i2185[10], 0, i2184, 'Storyboard')
  request.r(i2185[11], i2185[12], 0, i2184, 'BgMusic')
  request.r(i2185[13], i2185[14], 0, i2184, 'BgStoryMusic')
  request.r(i2185[15], i2185[16], 0, i2184, 'Hand_Tut1')
  request.r(i2185[17], i2185[18], 0, i2184, 'Button_Hand')
  var i2193 = i2185[19]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 2) {
  request.r(i2193[i + 0], i2193[i + 1], 2, i2192, '')
  }
  i2184.itemEnable_Onstart = i2192
  var i2195 = i2185[20]
  var i2194 = []
  for(var i = 0; i < i2195.length; i += 2) {
  request.r(i2195[i + 0], i2195[i + 1], 2, i2194, '')
  }
  i2184.itemDisable_Onstart = i2194
  var i2197 = i2185[21]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 2) {
  request.r(i2197[i + 0], i2197[i + 1], 2, i2196, '')
  }
  i2184.itemEnable_Oncomplete = i2196
  var i2199 = i2185[22]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 2) {
  request.r(i2199[i + 0], i2199[i + 1], 2, i2198, '')
  }
  i2184.itemDisable_Oncomplete = i2198
  i2184.levelKey = i2185[23]
  i2184.revealDirtyHoldTime = i2185[24]
  return i2184
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i2202 = root || request.c( 'MenuLevelData' )
  var i2203 = data
  i2202.Name = i2203[0]
  request.r(i2203[1], i2203[2], 0, i2202, 'UiBtn')
  request.r(i2203[3], i2203[4], 0, i2202, 'TickBtn')
  request.r(i2203[5], i2203[6], 0, i2202, 'ExclamationIcon')
  var i2205 = i2203[7]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 2) {
  request.r(i2205[i + 0], i2205[i + 1], 2, i2204, '')
  }
  i2202.Item_Dirty = i2204
  var i2207 = i2203[8]
  var i2206 = []
  for(var i = 0; i < i2207.length; i += 2) {
  request.r(i2207[i + 0], i2207[i + 1], 2, i2206, '')
  }
  i2202.Item_Clean = i2206
  request.r(i2203[9], i2203[10], 0, i2202, 'CompleteParticle')
  return i2202
}

Deserializers["IntroLevelAnim"] = function (request, data, root) {
  var i2214 = root || request.c( 'IntroLevelAnim' )
  var i2215 = data
  request.r(i2215[0], i2215[1], 0, i2214, 'menuLevel')
  i2214.lvlkey = i2215[2]
  request.r(i2215[3], i2215[4], 0, i2214, 'DressChangeObj')
  request.r(i2215[5], i2215[6], 0, i2214, 'DressChangeClip')
  return i2214
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i2216 = root || request.c( 'Level_PoseController' )
  var i2217 = data
  var i2219 = i2217[0]
  var i2218 = []
  for(var i = 0; i < i2219.length; i += 2) {
  request.r(i2219[i + 0], i2219[i + 1], 2, i2218, '')
  }
  i2216.itemToShow = i2218
  var i2221 = i2217[1]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 2) {
  request.r(i2221[i + 0], i2221[i + 1], 2, i2220, '')
  }
  i2216.itemToHide = i2220
  i2216.stepTarget = i2217[2]
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2223 = data
  i2222.color = new pc.Color(i2223[0], i2223[1], i2223[2], i2223[3])
  request.r(i2223[4], i2223[5], 0, i2222, 'sprite')
  i2222.flipX = !!i2223[6]
  i2222.flipY = !!i2223[7]
  i2222.drawMode = i2223[8]
  i2222.size = new pc.Vec2( i2223[9], i2223[10] )
  i2222.tileMode = i2223[11]
  i2222.adaptiveModeThreshold = i2223[12]
  i2222.maskInteraction = i2223[13]
  i2222.spriteSortPoint = i2223[14]
  i2222.enabled = !!i2223[15]
  request.r(i2223[16], i2223[17], 0, i2222, 'sharedMaterial')
  var i2225 = i2223[18]
  var i2224 = []
  for(var i = 0; i < i2225.length; i += 2) {
  request.r(i2225[i + 0], i2225[i + 1], 2, i2224, '')
  }
  i2222.sharedMaterials = i2224
  i2222.receiveShadows = !!i2223[19]
  i2222.shadowCastingMode = i2223[20]
  i2222.sortingLayerID = i2223[21]
  i2222.sortingOrder = i2223[22]
  i2222.lightmapIndex = i2223[23]
  i2222.lightmapSceneIndex = i2223[24]
  i2222.lightmapScaleOffset = new pc.Vec4( i2223[25], i2223[26], i2223[27], i2223[28] )
  i2222.lightProbeUsage = i2223[29]
  i2222.reflectionProbeUsage = i2223[30]
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2227 = data
  request.r(i2227[0], i2227[1], 0, i2226, 'animatorController')
  request.r(i2227[2], i2227[3], 0, i2226, 'avatar')
  i2226.updateMode = i2227[4]
  i2226.hasTransformHierarchy = !!i2227[5]
  i2226.applyRootMotion = !!i2227[6]
  var i2229 = i2227[7]
  var i2228 = []
  for(var i = 0; i < i2229.length; i += 2) {
  request.r(i2229[i + 0], i2229[i + 1], 2, i2228, '')
  }
  i2226.humanBones = i2228
  i2226.enabled = !!i2227[8]
  return i2226
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i2232 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i2233 = data
  request.r(i2233[0], i2233[1], 0, i2232, 'm_RootBone')
  var i2235 = i2233[2]
  var i2234 = []
  for(var i = 0; i < i2235.length; i += 2) {
  request.r(i2235[i + 0], i2235[i + 1], 2, i2234, '')
  }
  i2232.m_BoneTransforms = i2234
  i2232.m_AlwaysUpdate = !!i2233[3]
  i2232.m_AutoRebind = !!i2233[4]
  return i2232
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2236 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2237 = data
  i2236.targetIsSelf = !!i2237[0]
  request.r(i2237[1], i2237[2], 0, i2236, 'targetGO')
  i2236.tweenTargetIsTargetGO = !!i2237[3]
  i2236.delay = i2237[4]
  i2236.duration = i2237[5]
  i2236.easeType = i2237[6]
  i2236.easeCurve = new pc.AnimationCurve( { keys_flow: i2237[7] } )
  i2236.loopType = i2237[8]
  i2236.loops = i2237[9]
  i2236.id = i2237[10]
  i2236.isRelative = !!i2237[11]
  i2236.isFrom = !!i2237[12]
  i2236.isIndependentUpdate = !!i2237[13]
  i2236.autoKill = !!i2237[14]
  i2236.autoGenerate = !!i2237[15]
  i2236.isActive = !!i2237[16]
  i2236.isValid = !!i2237[17]
  request.r(i2237[18], i2237[19], 0, i2236, 'target')
  i2236.animationType = i2237[20]
  i2236.targetType = i2237[21]
  i2236.forcedTargetType = i2237[22]
  i2236.autoPlay = !!i2237[23]
  i2236.useTargetAsV3 = !!i2237[24]
  i2236.endValueFloat = i2237[25]
  i2236.endValueV3 = new pc.Vec3( i2237[26], i2237[27], i2237[28] )
  i2236.endValueV2 = new pc.Vec2( i2237[29], i2237[30] )
  i2236.endValueColor = new pc.Color(i2237[31], i2237[32], i2237[33], i2237[34])
  i2236.endValueString = i2237[35]
  i2236.endValueRect = UnityEngine.Rect.MinMaxRect(i2237[36], i2237[37], i2237[38], i2237[39])
  request.r(i2237[40], i2237[41], 0, i2236, 'endValueTransform')
  i2236.optionalBool0 = !!i2237[42]
  i2236.optionalBool1 = !!i2237[43]
  i2236.optionalFloat0 = i2237[44]
  i2236.optionalInt0 = i2237[45]
  i2236.optionalRotationMode = i2237[46]
  i2236.optionalScrambleMode = i2237[47]
  i2236.optionalShakeRandomnessMode = i2237[48]
  i2236.optionalString = i2237[49]
  i2236.updateType = i2237[50]
  i2236.isSpeedBased = !!i2237[51]
  i2236.hasOnStart = !!i2237[52]
  i2236.hasOnPlay = !!i2237[53]
  i2236.hasOnUpdate = !!i2237[54]
  i2236.hasOnStepComplete = !!i2237[55]
  i2236.hasOnComplete = !!i2237[56]
  i2236.hasOnTweenCreated = !!i2237[57]
  i2236.hasOnRewind = !!i2237[58]
  i2236.onStart = request.d('UnityEngine.Events.UnityEvent', i2237[59], i2236.onStart)
  i2236.onPlay = request.d('UnityEngine.Events.UnityEvent', i2237[60], i2236.onPlay)
  i2236.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2237[61], i2236.onUpdate)
  i2236.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2237[62], i2236.onStepComplete)
  i2236.onComplete = request.d('UnityEngine.Events.UnityEvent', i2237[63], i2236.onComplete)
  i2236.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2237[64], i2236.onTweenCreated)
  i2236.onRewind = request.d('UnityEngine.Events.UnityEvent', i2237[65], i2236.onRewind)
  return i2236
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2238 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2239 = data
  i2238.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2239[0], i2238.m_PersistentCalls)
  return i2238
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2240 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2241 = data
  var i2243 = i2241[0]
  var i2242 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2243.length; i += 1) {
    i2242.add(request.d('UnityEngine.Events.PersistentCall', i2243[i + 0]));
  }
  i2240.m_Calls = i2242
  return i2240
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2246 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2247 = data
  request.r(i2247[0], i2247[1], 0, i2246, 'm_Target')
  i2246.m_TargetAssemblyTypeName = i2247[2]
  i2246.m_MethodName = i2247[3]
  i2246.m_Mode = i2247[4]
  i2246.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2247[5], i2246.m_Arguments)
  i2246.m_CallState = i2247[6]
  return i2246
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i2248 = root || request.c( 'BD_AnimationHelper' )
  var i2249 = data
  i2248.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i2249[0], i2248.OnAnimationComplete)
  request.r(i2249[1], i2249[2], 0, i2248, 'sfxClip')
  return i2248
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2250 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2251 = data
  request.r(i2251[0], i2251[1], 0, i2250, 'm_ObjectArgument')
  i2250.m_ObjectArgumentAssemblyTypeName = i2251[2]
  i2250.m_IntArgument = i2251[3]
  i2250.m_FloatArgument = i2251[4]
  i2250.m_StringArgument = i2251[5]
  i2250.m_BoolArgument = !!i2251[6]
  return i2250
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i2252 = root || request.c( 'SpriteButton' )
  var i2253 = data
  i2252.isLocked = !!i2253[0]
  i2252.lockMsg = i2253[1]
  i2252.onClick = request.d('UnityEngine.Events.UnityEvent', i2253[2], i2252.onClick)
  i2252.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i2253[3], i2252.onLockedClick)
  i2252.isLevelBtnSfx = !!i2253[4]
  request.r(i2253[5], i2253[6], 0, i2252, 'pivot')
  i2252.reductionChange = i2253[7]
  i2252.animationDuration = i2253[8]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2255 = data
  i2254.usedByComposite = !!i2255[0]
  i2254.autoTiling = !!i2255[1]
  i2254.size = new pc.Vec2( i2255[2], i2255[3] )
  i2254.edgeRadius = i2255[4]
  i2254.enabled = !!i2255[5]
  i2254.isTrigger = !!i2255[6]
  i2254.usedByEffector = !!i2255[7]
  i2254.density = i2255[8]
  i2254.offset = new pc.Vec2( i2255[9], i2255[10] )
  request.r(i2255[11], i2255[12], 0, i2254, 'material')
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i2257 = data
  var i2259 = i2257[0]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 3) {
    i2258.push( new pc.Vec3( i2259[i + 0], i2259[i + 1], i2259[i + 2] ) );
  }
  i2256.positions = i2258
  i2256.positionCount = i2257[1]
  i2256.time = i2257[2]
  i2256.startWidth = i2257[3]
  i2256.endWidth = i2257[4]
  i2256.widthMultiplier = i2257[5]
  i2256.autodestruct = !!i2257[6]
  i2256.emitting = !!i2257[7]
  i2256.numCornerVertices = i2257[8]
  i2256.numCapVertices = i2257[9]
  i2256.minVertexDistance = i2257[10]
  i2256.colorGradient = i2257[11] ? new pc.ColorGradient(i2257[11][0], i2257[11][1], i2257[11][2]) : null
  i2256.startColor = new pc.Color(i2257[12], i2257[13], i2257[14], i2257[15])
  i2256.endColor = new pc.Color(i2257[16], i2257[17], i2257[18], i2257[19])
  i2256.generateLightingData = !!i2257[20]
  i2256.textureMode = i2257[21]
  i2256.alignment = i2257[22]
  i2256.widthCurve = new pc.AnimationCurve( { keys_flow: i2257[23] } )
  i2256.enabled = !!i2257[24]
  request.r(i2257[25], i2257[26], 0, i2256, 'sharedMaterial')
  var i2261 = i2257[27]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 2) {
  request.r(i2261[i + 0], i2261[i + 1], 2, i2260, '')
  }
  i2256.sharedMaterials = i2260
  i2256.receiveShadows = !!i2257[28]
  i2256.shadowCastingMode = i2257[29]
  i2256.sortingLayerID = i2257[30]
  i2256.sortingOrder = i2257[31]
  i2256.lightmapIndex = i2257[32]
  i2256.lightmapSceneIndex = i2257[33]
  i2256.lightmapScaleOffset = new pc.Vec4( i2257[34], i2257[35], i2257[36], i2257[37] )
  i2256.lightProbeUsage = i2257[38]
  i2256.reflectionProbeUsage = i2257[39]
  return i2256
}

Deserializers["Level1_Cloth_Playable"] = function (request, data, root) {
  var i2264 = root || request.c( 'Level1_Cloth_Playable' )
  var i2265 = data
  request.r(i2265[0], i2265[1], 0, i2264, 'WashingView')
  request.r(i2265[2], i2265[3], 0, i2264, 'WashingTools')
  request.r(i2265[4], i2265[5], 0, i2264, 'DressingView')
  request.r(i2265[6], i2265[7], 0, i2264, 'DressingTools')
  i2264.ZoomStep1 = request.d('ZoomPos', i2265[8], i2264.ZoomStep1)
  request.r(i2265[9], i2265[10], 0, i2264, 'ToolStep1')
  request.r(i2265[11], i2265[12], 0, i2264, 'Basket_Cloth')
  request.r(i2265[13], i2265[14], 0, i2264, 'clothInside')
  request.r(i2265[15], i2265[16], 0, i2264, 'clothRound')
  request.r(i2265[17], i2265[18], 0, i2264, 'machineDoor')
  request.r(i2265[19], i2265[20], 0, i2264, 'machineGlass')
  i2264.ZoomStep2 = request.d('ZoomPos', i2265[21], i2264.ZoomStep2)
  i2264.ZoomStep2b = request.d('ZoomPos', i2265[22], i2264.ZoomStep2b)
  request.r(i2265[23], i2265[24], 0, i2264, 'ToolStep2')
  request.r(i2265[25], i2265[26], 0, i2264, 'ToolStep2CamFollow')
  request.r(i2265[27], i2265[28], 0, i2264, 'drawerObj')
  request.r(i2265[29], i2265[30], 0, i2264, 'surfObj')
  request.r(i2265[31], i2265[32], 0, i2264, 'surfPackTop')
  request.r(i2265[33], i2265[34], 0, i2264, 'handStep2')
  request.r(i2265[35], i2265[36], 0, i2264, 'surfController')
  request.r(i2265[37], i2265[38], 0, i2264, 'clothsInside')
  request.r(i2265[39], i2265[40], 0, i2264, 'clothsInsideGlass')
  request.r(i2265[41], i2265[42], 0, i2264, 'clothsStaticClean')
  request.r(i2265[43], i2265[44], 0, i2264, 'wetCloths')
  request.r(i2265[45], i2265[46], 0, i2264, 'clothCleanInside')
  request.r(i2265[47], i2265[48], 0, i2264, 'clothCleanInsideAnim')
  request.r(i2265[49], i2265[50], 0, i2264, 'waterWave')
  request.r(i2265[51], i2265[52], 0, i2264, 'clothCleanInside2')
  request.r(i2265[53], i2265[54], 0, i2264, 'clothCleanInside2Cam')
  request.r(i2265[55], i2265[56], 0, i2264, 'clothBasketTarget')
  request.r(i2265[57], i2265[58], 0, i2264, 'clothBasketTarget2')
  request.r(i2265[59], i2265[60], 0, i2264, 'waterSplash_Vfx')
  request.r(i2265[61], i2265[62], 0, i2264, 'countDownTimerText')
  i2264.countDown = i2265[63]
  request.r(i2265[64], i2265[65], 0, i2264, 'machineTimer')
  request.r(i2265[66], i2265[67], 0, i2264, 'machineTimerRotater')
  request.r(i2265[68], i2265[69], 0, i2264, 'machineTimerIndication')
  request.r(i2265[70], i2265[71], 0, i2264, 'darazOpenSfx')
  request.r(i2265[72], i2265[73], 0, i2264, 'darazCloseSfx')
  request.r(i2265[74], i2265[75], 0, i2264, 'doorOpenSfx')
  request.r(i2265[76], i2265[77], 0, i2264, 'machineStartSfx')
  request.r(i2265[78], i2265[79], 0, i2264, 'machineFinishSfx')
  request.r(i2265[80], i2265[81], 0, i2264, 'waterDrainSfx')
  i2264.ZoomStep3a = request.d('ZoomPos', i2265[82], i2264.ZoomStep3a)
  request.r(i2265[83], i2265[84], 0, i2264, 'ToolStep3a')
  request.r(i2265[85], i2265[86], 0, i2264, 'ToolStep3aRend')
  request.r(i2265[87], i2265[88], 0, i2264, 'dressingBasket')
  request.r(i2265[89], i2265[90], 0, i2264, 'dummyFullParent')
  request.r(i2265[91], i2265[92], 0, i2264, 'DressParent')
  i2264.ZoomStep3 = request.d('ZoomPos', i2265[93], i2264.ZoomStep3)
  request.r(i2265[94], i2265[95], 0, i2264, 'ToolStep3')
  request.r(i2265[96], i2265[97], 0, i2264, 'tornPatch')
  request.r(i2265[98], i2265[99], 0, i2264, 'patchCompleted')
  request.r(i2265[100], i2265[101], 0, i2264, 'patchOutline')
  i2264.ZoomStep4 = request.d('ZoomPos', i2265[102], i2264.ZoomStep4)
  request.r(i2265[103], i2265[104], 0, i2264, 'ToolStep4')
  request.r(i2265[105], i2265[106], 0, i2264, 'camFollowStep4')
  request.r(i2265[107], i2265[108], 0, i2264, 'SteamerBottom')
  i2264.ZoomStep5 = request.d('ZoomPos', i2265[109], i2264.ZoomStep5)
  request.r(i2265[110], i2265[111], 0, i2264, 'ToolStep5')
  request.r(i2265[112], i2265[113], 0, i2264, 'ribbonFinalTarget')
  request.r(i2265[114], i2265[115], 0, i2264, 'ribbonFinal')
  request.r(i2265[116], i2265[117], 0, i2264, 'handIndication5')
  i2264.levelName = i2265[118]
  i2264.levelReward = i2265[119]
  request.r(i2265[120], i2265[121], 0, i2264, 'LevelIcon')
  request.r(i2265[122], i2265[123], 0, i2264, 'Level_BG')
  var i2267 = i2265[124]
  var i2266 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2267.length; i += 2) {
  request.r(i2267[i + 0], i2267[i + 1], 1, i2266, '')
  }
  i2264.ToolIcons = i2266
  var i2269 = i2265[125]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 2) {
  request.r(i2269[i + 0], i2269[i + 1], 2, i2268, '')
  }
  i2264.AllDrags = i2268
  var i2271 = i2265[126]
  var i2270 = []
  for(var i = 0; i < i2271.length; i += 2) {
  request.r(i2271[i + 0], i2271[i + 1], 2, i2270, '')
  }
  i2264.AllSources = i2270
  var i2273 = i2265[127]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 2) {
  request.r(i2273[i + 0], i2273[i + 1], 2, i2272, '')
  }
  i2264.AllScratches = i2272
  i2264.stepsDone = i2265[128]
  i2264.levelNo = i2265[129]
  i2264.partNo = i2265[130]
  request.r(i2265[131], i2265[132], 0, i2264, 'clothSfx')
  request.r(i2265[133], i2265[134], 0, i2264, 'doorCloseSfx')
  return i2264
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i2274 = root || request.c( 'ZoomPos' )
  var i2275 = data
  i2274.CameraPos = new pc.Vec3( i2275[0], i2275[1], i2275[2] )
  i2274.CameraFOV = i2275[3]
  return i2274
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i2284 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i2285 = data
  request.r(i2285[0], i2285[1], 0, i2284, 'MainCamera')
  i2284.RenderType = i2285[2]
  request.r(i2285[3], i2285[4], 0, i2284, 'ScratchSurfaceSprite')
  i2284.ScratchSurfaceSpriteHasAlpha = !!i2285[5]
  i2284.MaskProgressCutOffValue = i2285[6]
  request.r(i2285[7], i2285[8], 0, i2284, 'EraseTexture')
  i2284.EraseTextureScale = new pc.Vec2( i2285[9], i2285[10] )
  i2284.InputEnabled = !!i2285[11]
  request.r(i2285[12], i2285[13], 0, i2284, 'Card')
  i2284.Mode = i2285[14]
  request.r(i2285[15], i2285[16], 0, i2284, 'Progress')
  request.r(i2285[17], i2285[18], 0, i2284, 'MeshCard')
  request.r(i2285[19], i2285[20], 0, i2284, 'SpriteCard')
  request.r(i2285[21], i2285[22], 0, i2284, 'ImageCard')
  request.r(i2285[23], i2285[24], 0, i2284, 'MaskShader')
  request.r(i2285[25], i2285[26], 0, i2284, 'BrushShader')
  request.r(i2285[27], i2285[28], 0, i2284, 'MaskProgressShader')
  request.r(i2285[29], i2285[30], 0, i2284, 'MaskProgressCutOffShader')
  return i2284
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i2286 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i2287 = data
  request.r(i2287[0], i2287[1], 0, i2286, 'MainCamera')
  request.r(i2287[2], i2287[3], 0, i2286, 'Surface')
  i2286.RenderTextureQuality = i2287[4]
  request.r(i2287[5], i2287[6], 0, i2286, 'Eraser')
  request.r(i2287[7], i2287[8], 0, i2286, 'Progress')
  request.r(i2287[9], i2287[10], 0, i2286, 'ScratchSurface')
  request.r(i2287[11], i2287[12], 0, i2286, 'RenderTexture')
  i2286.BrushScale = new pc.Vec2( i2287[13], i2287[14] )
  request.r(i2287[15], i2287[16], 0, i2286, 'ToolTip')
  i2286.InputEnabled = !!i2287[17]
  i2286.IsScratching = !!i2287[18]
  i2286.useChangingScale = !!i2287[19]
  i2286.useGivenBrushScale = !!i2287[20]
  i2286.canSpreadMask = !!i2287[21]
  i2286.shouldPaintHoles = !!i2287[22]
  i2286.canRotateTip = !!i2287[23]
  i2286._mode = i2287[24]
  return i2286
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i2288 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i2289 = data
  request.r(i2289[0], i2289[1], 0, i2288, 'Card')
  i2288.currentProgress = i2289[2]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i2291 = data
  i2290.textureMode = i2291[0]
  i2290.alignment = i2291[1]
  i2290.widthCurve = new pc.AnimationCurve( { keys_flow: i2291[2] } )
  i2290.colorGradient = i2291[3] ? new pc.ColorGradient(i2291[3][0], i2291[3][1], i2291[3][2]) : null
  var i2293 = i2291[4]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 3) {
    i2292.push( new pc.Vec3( i2293[i + 0], i2293[i + 1], i2293[i + 2] ) );
  }
  i2290.positions = i2292
  i2290.positionCount = i2291[5]
  i2290.widthMultiplier = i2291[6]
  i2290.startWidth = i2291[7]
  i2290.endWidth = i2291[8]
  i2290.numCornerVertices = i2291[9]
  i2290.numCapVertices = i2291[10]
  i2290.useWorldSpace = !!i2291[11]
  i2290.loop = !!i2291[12]
  i2290.startColor = new pc.Color(i2291[13], i2291[14], i2291[15], i2291[16])
  i2290.endColor = new pc.Color(i2291[17], i2291[18], i2291[19], i2291[20])
  i2290.generateLightingData = !!i2291[21]
  i2290.enabled = !!i2291[22]
  request.r(i2291[23], i2291[24], 0, i2290, 'sharedMaterial')
  var i2295 = i2291[25]
  var i2294 = []
  for(var i = 0; i < i2295.length; i += 2) {
  request.r(i2295[i + 0], i2295[i + 1], 2, i2294, '')
  }
  i2290.sharedMaterials = i2294
  i2290.receiveShadows = !!i2291[26]
  i2290.shadowCastingMode = i2291[27]
  i2290.sortingLayerID = i2291[28]
  i2290.sortingOrder = i2291[29]
  i2290.lightmapIndex = i2291[30]
  i2290.lightmapSceneIndex = i2291[31]
  i2290.lightmapScaleOffset = new pc.Vec4( i2291[32], i2291[33], i2291[34], i2291[35] )
  i2290.lightProbeUsage = i2291[36]
  i2290.reflectionProbeUsage = i2291[37]
  return i2290
}

Deserializers["TextureOffsetScroller"] = function (request, data, root) {
  var i2296 = root || request.c( 'TextureOffsetScroller' )
  var i2297 = data
  i2296.scrollSpeed = new pc.Vec2( i2297[0], i2297[1] )
  i2296.smoothStart = !!i2297[2]
  i2296.smoothDuration = i2297[3]
  i2296.textureName = i2297[4]
  i2296.useSharedMaterial = !!i2297[5]
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2299 = data
  i2298.pivot = new pc.Vec2( i2299[0], i2299[1] )
  i2298.anchorMin = new pc.Vec2( i2299[2], i2299[3] )
  i2298.anchorMax = new pc.Vec2( i2299[4], i2299[5] )
  i2298.sizeDelta = new pc.Vec2( i2299[6], i2299[7] )
  i2298.anchoredPosition3D = new pc.Vec3( i2299[8], i2299[9], i2299[10] )
  i2298.rotation = new pc.Quat(i2299[11], i2299[12], i2299[13], i2299[14])
  i2298.scale = new pc.Vec3( i2299[15], i2299[16], i2299[17] )
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2301 = data
  i2300.planeDistance = i2301[0]
  i2300.referencePixelsPerUnit = i2301[1]
  i2300.isFallbackOverlay = !!i2301[2]
  i2300.renderMode = i2301[3]
  i2300.renderOrder = i2301[4]
  i2300.sortingLayerName = i2301[5]
  i2300.sortingOrder = i2301[6]
  i2300.scaleFactor = i2301[7]
  request.r(i2301[8], i2301[9], 0, i2300, 'worldCamera')
  i2300.overrideSorting = !!i2301[10]
  i2300.pixelPerfect = !!i2301[11]
  i2300.targetDisplay = i2301[12]
  i2300.overridePixelPerfect = !!i2301[13]
  i2300.enabled = !!i2301[14]
  return i2300
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2302 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2303 = data
  i2302.m_UiScaleMode = i2303[0]
  i2302.m_ReferencePixelsPerUnit = i2303[1]
  i2302.m_ScaleFactor = i2303[2]
  i2302.m_ReferenceResolution = new pc.Vec2( i2303[3], i2303[4] )
  i2302.m_ScreenMatchMode = i2303[5]
  i2302.m_MatchWidthOrHeight = i2303[6]
  i2302.m_PhysicalUnit = i2303[7]
  i2302.m_FallbackScreenDPI = i2303[8]
  i2302.m_DefaultSpriteDPI = i2303[9]
  i2302.m_DynamicPixelsPerUnit = i2303[10]
  i2302.m_PresetInfoIsWorld = !!i2303[11]
  return i2302
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2304 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2305 = data
  i2304.m_IgnoreReversedGraphics = !!i2305[0]
  i2304.m_BlockingObjects = i2305[1]
  i2304.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2305[2] )
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2307 = data
  i2306.cullTransparentMesh = !!i2307[0]
  return i2306
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2308 = root || request.c( 'UnityEngine.UI.Text' )
  var i2309 = data
  i2308.m_FontData = request.d('UnityEngine.UI.FontData', i2309[0], i2308.m_FontData)
  i2308.m_Text = i2309[1]
  request.r(i2309[2], i2309[3], 0, i2308, 'm_Material')
  i2308.m_Maskable = !!i2309[4]
  i2308.m_Color = new pc.Color(i2309[5], i2309[6], i2309[7], i2309[8])
  i2308.m_RaycastTarget = !!i2309[9]
  i2308.m_RaycastPadding = new pc.Vec4( i2309[10], i2309[11], i2309[12], i2309[13] )
  return i2308
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2310 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2311 = data
  request.r(i2311[0], i2311[1], 0, i2310, 'm_Font')
  i2310.m_FontSize = i2311[2]
  i2310.m_FontStyle = i2311[3]
  i2310.m_BestFit = !!i2311[4]
  i2310.m_MinSize = i2311[5]
  i2310.m_MaxSize = i2311[6]
  i2310.m_Alignment = i2311[7]
  i2310.m_AlignByGeometry = !!i2311[8]
  i2310.m_RichText = !!i2311[9]
  i2310.m_HorizontalOverflow = i2311[10]
  i2310.m_VerticalOverflow = i2311[11]
  i2310.m_LineSpacing = i2311[12]
  return i2310
}

Deserializers["RotaryTimerKnob"] = function (request, data, root) {
  var i2312 = root || request.c( 'RotaryTimerKnob' )
  var i2313 = data
  i2312.canDrag = !!i2313[0]
  i2312.numSteps = i2313[1]
  i2312.onlyClockwise = !!i2313[2]
  request.r(i2313[3], i2313[4], 0, i2312, 'clickSound')
  i2312.enableVibration = !!i2313[5]
  request.r(i2313[6], i2313[7], 0, i2312, 'stepText')
  i2312.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2313[8], i2312.OnComplete)
  request.r(i2313[9], i2313[10], 0, i2312, 'handIndication')
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2315 = data
  i2314.frontSortingLayerID = i2315[0]
  i2314.frontSortingOrder = i2315[1]
  i2314.backSortingLayerID = i2315[2]
  i2314.backSortingOrder = i2315[3]
  i2314.alphaCutoff = i2315[4]
  request.r(i2315[5], i2315[6], 0, i2314, 'sprite')
  i2314.tileMode = i2315[7]
  i2314.isCustomRangeActive = !!i2315[8]
  i2314.spriteSortPoint = i2315[9]
  i2314.enabled = !!i2315[10]
  request.r(i2315[11], i2315[12], 0, i2314, 'sharedMaterial')
  var i2317 = i2315[13]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 2) {
  request.r(i2317[i + 0], i2317[i + 1], 2, i2316, '')
  }
  i2314.sharedMaterials = i2316
  i2314.receiveShadows = !!i2315[14]
  i2314.shadowCastingMode = i2315[15]
  i2314.sortingLayerID = i2315[16]
  i2314.sortingOrder = i2315[17]
  i2314.lightmapIndex = i2315[18]
  i2314.lightmapSceneIndex = i2315[19]
  i2314.lightmapScaleOffset = new pc.Vec4( i2315[20], i2315[21], i2315[22], i2315[23] )
  i2314.lightProbeUsage = i2315[24]
  i2314.reflectionProbeUsage = i2315[25]
  return i2314
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i2318 = root || request.c( 'BasicDrag' )
  var i2319 = data
  i2318.canDrag = !!i2319[0]
  i2318.dragByDelta = !!i2319[1]
  i2318.isDragging = !!i2319[2]
  i2318.moveWithPointer = !!i2319[3]
  i2318.canReturn = !!i2319[4]
  i2318.jumpOnReturn = !!i2319[5]
  i2318.returnTime = i2319[6]
  i2318.Tool_Offset = new pc.Vec3( i2319[7], i2319[8], i2319[9] )
  i2318.canScaleIncrease = !!i2319[10]
  i2318.Self_ScaleNew = new pc.Vec3( i2319[11], i2319[12], i2319[13] )
  i2318.canRotateOnPick = !!i2319[14]
  i2318.startRot = new pc.Vec3( i2319[15], i2319[16], i2319[17] )
  i2318.newRot = new pc.Vec3( i2319[18], i2319[19], i2319[20] )
  var i2321 = i2319[21]
  var i2320 = []
  for(var i = 0; i < i2321.length; i += 2) {
  request.r(i2321[i + 0], i2321[i + 1], 2, i2320, '')
  }
  i2318.childSprite = i2320
  request.r(i2319[22], i2319[23], 0, i2318, 'ToolSelectClip')
  request.r(i2319[24], i2319[25], 0, i2318, 'ToolLoopClip')
  request.r(i2319[26], i2319[27], 0, i2318, 'thisParticles')
  i2318.onDragparticle = !!i2319[28]
  request.r(i2319[29], i2319[30], 0, i2318, 'dragParticles')
  request.r(i2319[31], i2319[32], 0, i2318, 'anim')
  i2318.startPos = new pc.Vec3( i2319[33], i2319[34], i2319[35] )
  i2318.startScale = new pc.Vec3( i2319[36], i2319[37], i2319[38] )
  i2318.Vibration = !!i2319[39]
  i2318.isPlacedCannotMove = !!i2319[40]
  i2318.isObjectMovingWhileDragging = !!i2319[41]
  i2318.OnMouseDownEvent = request.d('System.Action', i2319[42], i2318.OnMouseDownEvent)
  i2318.OnMouseUpEvent = request.d('System.Action', i2319[43], i2318.OnMouseUpEvent)
  i2318.ProgStartEvent = request.d('System.Action', i2319[44], i2318.ProgStartEvent)
  i2318.ProgEndEvent = request.d('System.Action', i2319[45], i2318.ProgEndEvent)
  i2318.canCallMouseUpWhenGamePaused = !!i2319[46]
  i2318.ClampX_L = i2319[47]
  i2318.ClampX_H = i2319[48]
  i2318.ClampY_L = i2319[49]
  i2318.ClampY_H = i2319[50]
  i2318.startOrder = i2319[51]
  i2318.dontResetItIsInCollider = !!i2319[52]
  request.r(i2319[53], i2319[54], 0, i2318, 'thisCollider')
  request.r(i2319[55], i2319[56], 0, i2318, 'thisSR')
  i2318.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i2319[57], i2318.OnMouseDownEventIndependentFromCanDrag)
  return i2318
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2324 = root || request.c( 'System.Action' )
  var i2325 = data
  return i2324
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i2326 = root || request.c( 'BD_Clamp' )
  var i2327 = data
  i2326.ClampX_L = i2327[0]
  i2326.ClampX_H = i2327[1]
  i2326.ClampY_L = i2327[2]
  i2326.ClampY_H = i2327[3]
  return i2326
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i2328 = root || request.c( 'BD_CameraFollow' )
  var i2329 = data
  request.r(i2329[0], i2329[1], 0, i2328, 'Tool')
  request.r(i2329[2], i2329[3], 0, i2328, 'Pivot')
  i2328.FOV = i2329[4]
  i2328.Y_L = i2329[5]
  i2328.Y_H = i2329[6]
  i2328.X_L = i2329[7]
  i2328.X_R = i2329[8]
  i2328.startDelay = i2329[9]
  i2328.duration = i2329[10]
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2331 = data
  i2330.bodyType = i2331[0]
  request.r(i2331[1], i2331[2], 0, i2330, 'material')
  i2330.simulated = !!i2331[3]
  i2330.useAutoMass = !!i2331[4]
  i2330.mass = i2331[5]
  i2330.drag = i2331[6]
  i2330.angularDrag = i2331[7]
  i2330.gravityScale = i2331[8]
  i2330.collisionDetectionMode = i2331[9]
  i2330.sleepMode = i2331[10]
  i2330.constraints = i2331[11]
  return i2330
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i2332 = root || request.c( 'PlaceItem' )
  var i2333 = data
  request.r(i2333[0], i2333[1], 0, i2332, 'thisDrag')
  request.r(i2333[2], i2333[3], 0, i2332, 'Target')
  request.r(i2333[4], i2333[5], 0, i2332, 'Clip')
  i2332.jumpOnPlace = !!i2333[6]
  i2332.jumpHeight = i2333[7]
  i2332.jumpDuration = i2333[8]
  i2332.settleDuration = i2333[9]
  i2332.isPlaced = !!i2333[10]
  i2332.isInsideCollider = !!i2333[11]
  i2332.changeScaleOnPlace = !!i2333[12]
  request.r(i2333[13], i2333[14], 0, i2332, 'item')
  i2332.newScaleOnPlace = new pc.Vec3( i2333[15], i2333[16], i2333[17] )
  i2332.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i2333[18], i2332.OnPlaced)
  return i2332
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i2334 = root || request.c( 'ActionOnTap' )
  var i2335 = data
  i2334.OnTap = request.d('UnityEngine.Events.UnityEvent', i2335[0], i2334.OnTap)
  i2334.OnTapExtra = request.d('System.Action', i2335[1], i2334.OnTapExtra)
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2337 = data
  i2336.radius = i2337[0]
  i2336.enabled = !!i2337[1]
  i2336.isTrigger = !!i2337[2]
  i2336.usedByEffector = !!i2337[3]
  i2336.density = i2337[4]
  i2336.offset = new pc.Vec2( i2337[5], i2337[6] )
  request.r(i2337[7], i2337[8], 0, i2336, 'material')
  return i2336
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i2338 = root || request.c( 'PlayParticlesOnCollision' )
  var i2339 = data
  request.r(i2339[0], i2339[1], 0, i2338, 'Target')
  request.r(i2339[2], i2339[3], 0, i2338, 'ParticlePrefab')
  i2338.destroyIt = !!i2339[4]
  i2338.stayAtPlace = !!i2339[5]
  i2338.disableOnCollision = !!i2339[6]
  i2338.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i2339[7], i2338.OnCollisionEvent)
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i2341 = data
  i2340.usedByComposite = !!i2341[0]
  i2340.autoTiling = !!i2341[1]
  var i2343 = i2341[2]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 1) {
  var i2345 = i2343[i + 0]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 2) {
    i2344.push( new pc.Vec2( i2345[i + 0], i2345[i + 1] ) );
  }
    i2342.push( i2344 );
  }
  i2340.points = i2342
  i2340.enabled = !!i2341[3]
  i2340.isTrigger = !!i2341[4]
  i2340.usedByEffector = !!i2341[5]
  i2340.density = i2341[6]
  i2340.offset = new pc.Vec2( i2341[7], i2341[8] )
  request.r(i2341[9], i2341[10], 0, i2340, 'material')
  return i2340
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i2352 = root || request.c( 'PlaySfxOnCollision' )
  var i2353 = data
  request.r(i2353[0], i2353[1], 0, i2352, 'Tip')
  i2352.Mode = i2353[2]
  request.r(i2353[3], i2353[4], 0, i2352, 'DragInput')
  request.r(i2353[5], i2353[6], 0, i2352, 'Source')
  i2352.startVol = i2353[7]
  i2352.targetVol = i2353[8]
  i2352.duration = i2353[9]
  request.r(i2353[10], i2353[11], 0, i2352, 'Particles')
  i2352.isDone = !!i2353[12]
  i2352.isInArea = !!i2353[13]
  i2352.isPlaying = !!i2353[14]
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2355 = data
  request.r(i2355[0], i2355[1], 0, i2354, 'clip')
  request.r(i2355[2], i2355[3], 0, i2354, 'outputAudioMixerGroup')
  i2354.playOnAwake = !!i2355[4]
  i2354.loop = !!i2355[5]
  i2354.time = i2355[6]
  i2354.volume = i2355[7]
  i2354.pitch = i2355[8]
  i2354.enabled = !!i2355[9]
  return i2354
}

Deserializers["SewingCol"] = function (request, data, root) {
  var i2356 = root || request.c( 'SewingCol' )
  var i2357 = data
  request.r(i2357[0], i2357[1], 0, i2356, 'targetTip')
  var i2359 = i2357[2]
  var i2358 = []
  for(var i = 0; i < i2359.length; i += 2) {
  request.r(i2359[i + 0], i2359[i + 1], 2, i2358, '')
  }
  i2356.Anim_Items = i2358
  i2356.isDone = !!i2357[3]
  request.r(i2357[4], i2357[5], 0, i2356, 'sfx')
  return i2356
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i2360 = root || request.c( 'OutlinePulse' )
  var i2361 = data
  i2360.smallThickness = i2361[0]
  i2360.largeThickness = i2361[1]
  i2360.transitionSpeed = i2361[2]
  i2360.animationSpeed = i2361[3]
  i2360.isThickOutline = !!i2361[4]
  i2360.animate = !!i2361[5]
  i2360.hideSpriteOnly = !!i2361[6]
  return i2360
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i2362 = root || request.c( 'BD_Action' )
  var i2363 = data
  i2362.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i2363[0], i2362.OnMouseDownEvent)
  i2362.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i2363[1], i2362.OnMouseUpEvent)
  i2362.setToolLayer = !!i2363[2]
  request.r(i2363[3], i2363[4], 0, i2362, 'tool_SP')
  return i2362
}

Deserializers["Level1_SurfController"] = function (request, data, root) {
  var i2364 = root || request.c( 'Level1_SurfController' )
  var i2365 = data
  i2364.target_rotZ = i2365[0]
  i2364.rotationDuration = i2365[1]
  i2364.rotationEase = i2365[2]
  request.r(i2365[3], i2365[4], 0, i2364, 'maskItem')
  i2364.maskTarget_posY = i2365[5]
  i2364.maskMoveDuration = i2365[6]
  i2364.requiredHoldTime = i2365[7]
  i2364.minRotationForProgress = i2365[8]
  request.r(i2365[9], i2365[10], 0, i2364, 'tipCollider')
  request.r(i2365[11], i2365[12], 0, i2364, 'targetZoneCollider')
  request.r(i2365[13], i2365[14], 0, i2364, 'surf_Particles')
  request.r(i2365[15], i2365[16], 0, i2364, 'surf_SubEmitter')
  request.r(i2365[17], i2365[18], 0, i2364, 'Indication')
  i2364.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2365[19], i2364.OnComplete)
  i2364.currentHoldProgress = i2365[20]
  return i2364
}

Deserializers["BD_Fold"] = function (request, data, root) {
  var i2366 = root || request.c( 'BD_Fold' )
  var i2367 = data
  i2366.canDrag = !!i2367[0]
  i2366.canFoldBottomLeft = !!i2367[1]
  i2366.canFoldBottomRight = !!i2367[2]
  i2366.canFoldTopLeft = !!i2367[3]
  i2366.canFoldTopRight = !!i2367[4]
  request.r(i2367[5], i2367[6], 0, i2366, 'Indication')
  request.r(i2367[7], i2367[8], 0, i2366, 'backSideSprite')
  i2366.maxSideOffset = i2367[9]
  i2366.foldBackDuration = i2367[10]
  i2366.instantFoldAmount = i2367[11]
  i2366.useSmoothRelease = !!i2367[12]
  i2366.completionLimit = i2367[13]
  i2366.afterCompletionTravelTo = i2367[14]
  i2366.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2367[15], i2366.OnComplete)
  i2366.currentProgress = i2367[16]
  i2366.innerShadowStrength = i2367[17]
  request.r(i2367[18], i2367[19], 0, i2366, 'dragAudioSource')
  request.r(i2367[20], i2367[21], 0, i2366, 'dragStartClip')
  request.r(i2367[22], i2367[23], 0, i2366, 'completionClip')
  i2366.audioFadeSpeed = i2367[24]
  i2366.audioMoveThreshold = i2367[25]
  i2366.hapticInterval = i2367[26]
  return i2366
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i2368 = root || request.c( 'BD_Progress' )
  var i2369 = data
  var i2371 = i2369[0]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.push( request.d('ScratchData', i2371[i + 0]) );
  }
  i2368.AllScratches = i2370
  i2368.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i2369[1], i2368.OnScratchComplete)
  i2368.isProgDone = !!i2369[2]
  i2368.canCallComplete = !!i2369[3]
  i2368.CollectiveAppear = !!i2369[4]
  i2368.tipControl = !!i2369[5]
  i2368.progressControl = !!i2369[6]
  request.r(i2369[7], i2369[8], 0, i2368, 'thisDrag')
  i2368.CompleteEvent = request.d('System.Action', i2369[9], i2368.CompleteEvent)
  i2368.SubCompleteEvent = request.d('System.Action', i2369[10], i2368.SubCompleteEvent)
  return i2368
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i2374 = root || request.c( 'ScratchData' )
  var i2375 = data
  request.r(i2375[0], i2375[1], 0, i2374, 'ScratchManager')
  i2374.scratchLimit = i2375[2]
  i2374.isComplete = !!i2375[3]
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2377 = data
  request.r(i2377[0], i2377[1], 0, i2376, 'sharedMesh')
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2379 = data
  request.r(i2379[0], i2379[1], 0, i2378, 'additionalVertexStreams')
  i2378.enabled = !!i2379[2]
  request.r(i2379[3], i2379[4], 0, i2378, 'sharedMaterial')
  var i2381 = i2379[5]
  var i2380 = []
  for(var i = 0; i < i2381.length; i += 2) {
  request.r(i2381[i + 0], i2381[i + 1], 2, i2380, '')
  }
  i2378.sharedMaterials = i2380
  i2378.receiveShadows = !!i2379[6]
  i2378.shadowCastingMode = i2379[7]
  i2378.sortingLayerID = i2379[8]
  i2378.sortingOrder = i2379[9]
  i2378.lightmapIndex = i2379[10]
  i2378.lightmapSceneIndex = i2379[11]
  i2378.lightmapScaleOffset = new pc.Vec4( i2379[12], i2379[13], i2379[14], i2379[15] )
  i2378.lightProbeUsage = i2379[16]
  i2378.reflectionProbeUsage = i2379[17]
  return i2378
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i2382 = root || request.c( 'StaticFixedPipe' )
  var i2383 = data
  request.r(i2383[0], i2383[1], 0, i2382, 'meshRenderer')
  request.r(i2383[2], i2383[3], 0, i2382, 'toolTransform')
  request.r(i2383[4], i2383[5], 0, i2382, 'toolDirectionPoint')
  request.r(i2383[6], i2383[7], 0, i2382, 'fixedEndPoint')
  i2382.segmentCount = i2383[8]
  i2382.totalLength = i2383[9]
  i2382.constraintIterations = i2383[10]
  i2382.gravity = new pc.Vec3( i2383[11], i2383[12], i2383[13] )
  i2382.pipeWidth = i2383[14]
  return i2382
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i2384 = root || request.c( 'BD_SpriteChange' )
  var i2385 = data
  request.r(i2385[0], i2385[1], 0, i2384, 'BD')
  request.r(i2385[2], i2385[3], 0, i2384, 'SR')
  request.r(i2385[4], i2385[5], 0, i2384, 'Default')
  request.r(i2385[6], i2385[7], 0, i2384, 'Picked')
  i2384.resetOnRelease = !!i2385[8]
  return i2384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2387 = data
  i2386.name = i2387[0]
  i2386.atlasId = i2387[1]
  i2386.mipmapCount = i2387[2]
  i2386.hdr = !!i2387[3]
  i2386.size = i2387[4]
  i2386.anisoLevel = i2387[5]
  i2386.filterMode = i2387[6]
  var i2389 = i2387[7]
  var i2388 = []
  for(var i = 0; i < i2389.length; i += 4) {
    i2388.push( UnityEngine.Rect.MinMaxRect(i2389[i + 0], i2389[i + 1], i2389[i + 2], i2389[i + 3]) );
  }
  i2386.rects = i2388
  i2386.wrapU = i2387[8]
  i2386.wrapV = i2387[9]
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2393 = data
  i2392.name = i2393[0]
  i2392.index = i2393[1]
  i2392.startup = !!i2393[2]
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2395 = data
  i2394.aspect = i2395[0]
  i2394.orthographic = !!i2395[1]
  i2394.orthographicSize = i2395[2]
  i2394.backgroundColor = new pc.Color(i2395[3], i2395[4], i2395[5], i2395[6])
  i2394.nearClipPlane = i2395[7]
  i2394.farClipPlane = i2395[8]
  i2394.fieldOfView = i2395[9]
  i2394.depth = i2395[10]
  i2394.clearFlags = i2395[11]
  i2394.cullingMask = i2395[12]
  i2394.rect = i2395[13]
  request.r(i2395[14], i2395[15], 0, i2394, 'targetTexture')
  i2394.usePhysicalProperties = !!i2395[16]
  i2394.focalLength = i2395[17]
  i2394.sensorSize = new pc.Vec2( i2395[18], i2395[19] )
  i2394.lensShift = new pc.Vec2( i2395[20], i2395[21] )
  i2394.gateFit = i2395[22]
  i2394.commandBufferCount = i2395[23]
  i2394.cameraType = i2395[24]
  i2394.enabled = !!i2395[25]
  return i2394
}

Deserializers["CameraController"] = function (request, data, root) {
  var i2396 = root || request.c( 'CameraController' )
  var i2397 = data
  request.r(i2397[0], i2397[1], 0, i2396, 'cam')
  i2396.defaultPosition = new pc.Vec3( i2397[2], i2397[3], i2397[4] )
  i2396.defaultSize = i2397[5]
  i2396.defaultFOV = i2397[6]
  i2396.defaultDuration = i2397[7]
  i2396.defaultEase = i2397[8]
  return i2396
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i2398 = root || request.c( 'MusicSource' )
  var i2399 = data
  request.r(i2399[0], i2399[1], 0, i2398, 'source')
  return i2398
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i2400 = root || request.c( 'UI_Manager' )
  var i2401 = data
  i2400.levelCompleted = !!i2401[0]
  i2400.isPauseActive = !!i2401[1]
  i2400.loadIndex = i2401[2]
  request.r(i2401[3], i2401[4], 0, i2400, 'removeAdsButton')
  request.r(i2401[5], i2401[6], 0, i2400, 'pauseButton')
  request.r(i2401[7], i2401[8], 0, i2400, 'Fade_Img')
  request.r(i2401[9], i2401[10], 0, i2400, 'TopBarAnim')
  request.r(i2401[11], i2401[12], 0, i2400, 'MainPanel')
  request.r(i2401[13], i2401[14], 0, i2400, 'PausePanel')
  request.r(i2401[15], i2401[16], 0, i2400, 'PausePopUp')
  request.r(i2401[17], i2401[18], 0, i2400, 'PauseCanvasGroup')
  request.r(i2401[19], i2401[20], 0, i2400, 'RateUsPanel')
  request.r(i2401[21], i2401[22], 0, i2400, 'RateUsPopUp')
  request.r(i2401[23], i2401[24], 0, i2400, 'RemoveAdsPanel')
  request.r(i2401[25], i2401[26], 0, i2400, 'RemoveAdsPopUp')
  request.r(i2401[27], i2401[28], 0, i2400, 'RemoveAdsCanvasGroup')
  var i2403 = i2401[29]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 2) {
  request.r(i2403[i + 0], i2403[i + 1], 2, i2402, '')
  }
  i2400.RemoveAdsAnims = i2402
  request.r(i2401[30], i2401[31], 0, i2400, 'CompletePanel')
  request.r(i2401[32], i2401[33], 0, i2400, 'LevelIcon')
  request.r(i2401[34], i2401[35], 0, i2400, 'CompleteParticles')
  request.r(i2401[36], i2401[37], 0, i2400, 'progressBar')
  request.r(i2401[38], i2401[39], 0, i2400, 'progressText')
  request.r(i2401[40], i2401[41], 0, i2400, 'toolIcon1')
  request.r(i2401[42], i2401[43], 0, i2400, 'toolIcon2')
  request.r(i2401[44], i2401[45], 0, i2400, 'toolIcon3')
  request.r(i2401[46], i2401[47], 0, i2400, 'target1')
  request.r(i2401[48], i2401[49], 0, i2400, 'target2')
  i2400.toolMoveDuration = i2401[50]
  i2400.currentIndex = i2401[51]
  var i2405 = i2401[52]
  var i2404 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2405.length; i += 2) {
  request.r(i2405[i + 0], i2405[i + 1], 1, i2404, '')
  }
  i2400.allTools = i2404
  request.r(i2401[53], i2401[54], 0, i2400, 'clockProgress')
  request.r(i2401[55], i2401[56], 0, i2400, 'clockProgressFill')
  request.r(i2401[57], i2401[58], 0, i2400, 'clockAudio')
  i2400.moveDistance = i2401[59]
  i2400.animationDuration = i2401[60]
  i2400.greyBgChildName = i2401[61]
  i2400.pushOffset = i2401[62]
  return i2400
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i2406 = root || request.c( 'GameManagerPlayable' )
  var i2407 = data
  request.r(i2407[0], i2407[1], 0, i2406, 'endParticles')
  request.r(i2407[2], i2407[3], 0, i2406, 'stepCompleteParticles')
  request.r(i2407[4], i2407[5], 0, i2406, 'DefaultMat')
  request.r(i2407[6], i2407[7], 0, i2406, 'BG_Music')
  request.r(i2407[8], i2407[9], 0, i2406, 'restoreEffectShader')
  request.r(i2407[10], i2407[11], 0, i2406, 'stickerEffectShader')
  i2406.isComplete = !!i2407[12]
  i2406.isPaused = !!i2407[13]
  request.r(i2407[14], i2407[15], 0, i2406, 'currentLevel')
  i2406.startLevelOnPlay = !!i2407[16]
  i2406.currentLevelNo = i2407[17]
  return i2406
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2408 = root || request.c( 'AudioController' )
  var i2409 = data
  request.r(i2409[0], i2409[1], 0, i2408, 'MainMixer')
  request.r(i2409[2], i2409[3], 0, i2408, 'UiClick')
  request.r(i2409[4], i2409[5], 0, i2408, 'UiClickSource')
  var i2411 = i2409[6]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 2) {
  request.r(i2411[i + 0], i2411[i + 1], 2, i2410, '')
  }
  i2408.SfxSources = i2410
  var i2413 = i2409[7]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 2) {
  request.r(i2413[i + 0], i2413[i + 1], 2, i2412, '')
  }
  i2408.AllClips = i2412
  return i2408
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2416 = root || request.c( 'UnityEngine.UI.Image' )
  var i2417 = data
  request.r(i2417[0], i2417[1], 0, i2416, 'm_Sprite')
  i2416.m_Type = i2417[2]
  i2416.m_PreserveAspect = !!i2417[3]
  i2416.m_FillCenter = !!i2417[4]
  i2416.m_FillMethod = i2417[5]
  i2416.m_FillAmount = i2417[6]
  i2416.m_FillClockwise = !!i2417[7]
  i2416.m_FillOrigin = i2417[8]
  i2416.m_UseSpriteMesh = !!i2417[9]
  i2416.m_PixelsPerUnitMultiplier = i2417[10]
  request.r(i2417[11], i2417[12], 0, i2416, 'm_Material')
  i2416.m_Maskable = !!i2417[13]
  i2416.m_Color = new pc.Color(i2417[14], i2417[15], i2417[16], i2417[17])
  i2416.m_RaycastTarget = !!i2417[18]
  i2416.m_RaycastPadding = new pc.Vec4( i2417[19], i2417[20], i2417[21], i2417[22] )
  return i2416
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2418 = root || request.c( 'UnityEngine.UI.Button' )
  var i2419 = data
  i2418.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2419[0], i2418.m_OnClick)
  i2418.m_Navigation = request.d('UnityEngine.UI.Navigation', i2419[1], i2418.m_Navigation)
  i2418.m_Transition = i2419[2]
  i2418.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2419[3], i2418.m_Colors)
  i2418.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2419[4], i2418.m_SpriteState)
  i2418.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2419[5], i2418.m_AnimationTriggers)
  i2418.m_Interactable = !!i2419[6]
  request.r(i2419[7], i2419[8], 0, i2418, 'm_TargetGraphic')
  return i2418
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2420 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2421 = data
  i2420.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2421[0], i2420.m_PersistentCalls)
  return i2420
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2422 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2423 = data
  i2422.m_Mode = i2423[0]
  i2422.m_WrapAround = !!i2423[1]
  request.r(i2423[2], i2423[3], 0, i2422, 'm_SelectOnUp')
  request.r(i2423[4], i2423[5], 0, i2422, 'm_SelectOnDown')
  request.r(i2423[6], i2423[7], 0, i2422, 'm_SelectOnLeft')
  request.r(i2423[8], i2423[9], 0, i2422, 'm_SelectOnRight')
  return i2422
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2424 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2425 = data
  i2424.m_NormalColor = new pc.Color(i2425[0], i2425[1], i2425[2], i2425[3])
  i2424.m_HighlightedColor = new pc.Color(i2425[4], i2425[5], i2425[6], i2425[7])
  i2424.m_PressedColor = new pc.Color(i2425[8], i2425[9], i2425[10], i2425[11])
  i2424.m_SelectedColor = new pc.Color(i2425[12], i2425[13], i2425[14], i2425[15])
  i2424.m_DisabledColor = new pc.Color(i2425[16], i2425[17], i2425[18], i2425[19])
  i2424.m_ColorMultiplier = i2425[20]
  i2424.m_FadeDuration = i2425[21]
  return i2424
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2426 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2427 = data
  request.r(i2427[0], i2427[1], 0, i2426, 'm_HighlightedSprite')
  request.r(i2427[2], i2427[3], 0, i2426, 'm_PressedSprite')
  request.r(i2427[4], i2427[5], 0, i2426, 'm_SelectedSprite')
  request.r(i2427[6], i2427[7], 0, i2426, 'm_DisabledSprite')
  return i2426
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2428 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2429 = data
  i2428.m_NormalTrigger = i2429[0]
  i2428.m_HighlightedTrigger = i2429[1]
  i2428.m_PressedTrigger = i2429[2]
  i2428.m_SelectedTrigger = i2429[3]
  i2428.m_DisabledTrigger = i2429[4]
  return i2428
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i2430 = root || request.c( 'PlayableHudRuntime' )
  var i2431 = data
  return i2430
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2432 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2433 = data
  request.r(i2433[0], i2433[1], 0, i2432, 'm_FirstSelected')
  i2432.m_sendNavigationEvents = !!i2433[2]
  i2432.m_DragThreshold = i2433[3]
  return i2432
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2434 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2435 = data
  i2434.m_HorizontalAxis = i2435[0]
  i2434.m_VerticalAxis = i2435[1]
  i2434.m_SubmitButton = i2435[2]
  i2434.m_CancelButton = i2435[3]
  i2434.m_InputActionsPerSecond = i2435[4]
  i2434.m_RepeatDelay = i2435[5]
  i2434.m_ForceModuleActive = !!i2435[6]
  i2434.m_SendPointerHoverToParent = !!i2435[7]
  return i2434
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i2436 = root || request.c( 'PlayableRouter' )
  var i2437 = data
  var i2439 = i2437[0]
  var i2438 = []
  for(var i = 0; i < i2439.length; i += 2) {
  request.r(i2439[i + 0], i2439[i + 1], 2, i2438, '')
  }
  i2436.menuObjects = i2438
  var i2441 = i2437[1]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 2) {
  request.r(i2441[i + 0], i2441[i + 1], 2, i2440, '')
  }
  i2436.gameplayObjects = i2440
  var i2443 = i2437[2]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 1) {
    i2442.push( request.d('PlayableRouter+SubLevelSlot', i2443[i + 0]) );
  }
  i2436.subLevels = i2442
  i2436.fadeDuration = i2437[3]
  i2436.lockedMessage = i2437[4]
  i2436.lockedTapsToCTA = i2437[5]
  return i2436
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i2446 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i2447 = data
  request.r(i2447[0], i2447[1], 0, i2446, 'button')
  request.r(i2447[2], i2447[3], 0, i2446, 'level')
  return i2446
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i2448 = root || request.c( 'ToastManager' )
  var i2449 = data
  request.r(i2449[0], i2449[1], 0, i2448, 'toastPanel')
  request.r(i2449[2], i2449[3], 0, i2448, 'toastPopup')
  request.r(i2449[4], i2449[5], 0, i2448, 'canvasGroup')
  request.r(i2449[6], i2449[7], 0, i2448, 'toastText')
  i2448.startY = i2449[8]
  i2448.visibleY = i2449[9]
  i2448.endY = i2449[10]
  i2448.animationTime = i2449[11]
  i2448.animationTimeUp = i2449[12]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2451 = data
  i2450.m_Alpha = i2451[0]
  i2450.m_Interactable = !!i2451[1]
  i2450.m_BlocksRaycasts = !!i2451[2]
  i2450.m_IgnoreParentGroups = !!i2451[3]
  i2450.enabled = !!i2451[4]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2453 = data
  i2452.ambientIntensity = i2453[0]
  i2452.reflectionIntensity = i2453[1]
  i2452.ambientMode = i2453[2]
  i2452.ambientLight = new pc.Color(i2453[3], i2453[4], i2453[5], i2453[6])
  i2452.ambientSkyColor = new pc.Color(i2453[7], i2453[8], i2453[9], i2453[10])
  i2452.ambientGroundColor = new pc.Color(i2453[11], i2453[12], i2453[13], i2453[14])
  i2452.ambientEquatorColor = new pc.Color(i2453[15], i2453[16], i2453[17], i2453[18])
  i2452.fogColor = new pc.Color(i2453[19], i2453[20], i2453[21], i2453[22])
  i2452.fogEndDistance = i2453[23]
  i2452.fogStartDistance = i2453[24]
  i2452.fogDensity = i2453[25]
  i2452.fog = !!i2453[26]
  request.r(i2453[27], i2453[28], 0, i2452, 'skybox')
  i2452.fogMode = i2453[29]
  var i2455 = i2453[30]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 1) {
    i2454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2455[i + 0]) );
  }
  i2452.lightmaps = i2454
  i2452.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2453[31], i2452.lightProbes)
  i2452.lightmapsMode = i2453[32]
  i2452.mixedBakeMode = i2453[33]
  i2452.environmentLightingMode = i2453[34]
  i2452.ambientProbe = new pc.SphericalHarmonicsL2(i2453[35])
  request.r(i2453[36], i2453[37], 0, i2452, 'customReflection')
  request.r(i2453[38], i2453[39], 0, i2452, 'defaultReflection')
  i2452.defaultReflectionMode = i2453[40]
  i2452.defaultReflectionResolution = i2453[41]
  i2452.sunLightObjectId = i2453[42]
  i2452.pixelLightCount = i2453[43]
  i2452.defaultReflectionHDR = !!i2453[44]
  i2452.hasLightDataAsset = !!i2453[45]
  i2452.hasManualGenerate = !!i2453[46]
  return i2452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2459 = data
  request.r(i2459[0], i2459[1], 0, i2458, 'lightmapColor')
  request.r(i2459[2], i2459[3], 0, i2458, 'lightmapDirection')
  request.r(i2459[4], i2459[5], 0, i2458, 'shadowMask')
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2460 = root || new UnityEngine.LightProbes()
  var i2461 = data
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2467 = data
  var i2469 = i2467[0]
  var i2468 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2469[i + 0]));
  }
  i2466.ShaderCompilationErrors = i2468
  i2466.name = i2467[1]
  i2466.guid = i2467[2]
  var i2471 = i2467[3]
  var i2470 = []
  for(var i = 0; i < i2471.length; i += 1) {
    i2470.push( i2471[i + 0] );
  }
  i2466.shaderDefinedKeywords = i2470
  var i2473 = i2467[4]
  var i2472 = []
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2473[i + 0]) );
  }
  i2466.passes = i2472
  var i2475 = i2467[5]
  var i2474 = []
  for(var i = 0; i < i2475.length; i += 1) {
    i2474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2475[i + 0]) );
  }
  i2466.usePasses = i2474
  var i2477 = i2467[6]
  var i2476 = []
  for(var i = 0; i < i2477.length; i += 1) {
    i2476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2477[i + 0]) );
  }
  i2466.defaultParameterValues = i2476
  request.r(i2467[7], i2467[8], 0, i2466, 'unityFallbackShader')
  i2466.readDepth = !!i2467[9]
  i2466.hasDepthOnlyPass = !!i2467[10]
  i2466.isCreatedByShaderGraph = !!i2467[11]
  i2466.disableBatching = !!i2467[12]
  i2466.compiled = !!i2467[13]
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2481 = data
  i2480.shaderName = i2481[0]
  i2480.errorMessage = i2481[1]
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2486 = root || new pc.UnityShaderPass()
  var i2487 = data
  i2486.id = i2487[0]
  i2486.subShaderIndex = i2487[1]
  i2486.name = i2487[2]
  i2486.passType = i2487[3]
  i2486.grabPassTextureName = i2487[4]
  i2486.usePass = !!i2487[5]
  i2486.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2487[6], i2486.zTest)
  i2486.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2487[7], i2486.zWrite)
  i2486.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2487[8], i2486.culling)
  i2486.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2487[9], i2486.blending)
  i2486.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2487[10], i2486.alphaBlending)
  i2486.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2487[11], i2486.colorWriteMask)
  i2486.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2487[12], i2486.offsetUnits)
  i2486.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2487[13], i2486.offsetFactor)
  i2486.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2487[14], i2486.stencilRef)
  i2486.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2487[15], i2486.stencilReadMask)
  i2486.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2487[16], i2486.stencilWriteMask)
  i2486.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2487[17], i2486.stencilOp)
  i2486.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2487[18], i2486.stencilOpFront)
  i2486.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2487[19], i2486.stencilOpBack)
  var i2489 = i2487[20]
  var i2488 = []
  for(var i = 0; i < i2489.length; i += 1) {
    i2488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2489[i + 0]) );
  }
  i2486.tags = i2488
  var i2491 = i2487[21]
  var i2490 = []
  for(var i = 0; i < i2491.length; i += 1) {
    i2490.push( i2491[i + 0] );
  }
  i2486.passDefinedKeywords = i2490
  var i2493 = i2487[22]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2493[i + 0]) );
  }
  i2486.passDefinedKeywordGroups = i2492
  var i2495 = i2487[23]
  var i2494 = []
  for(var i = 0; i < i2495.length; i += 1) {
    i2494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2495[i + 0]) );
  }
  i2486.variants = i2494
  var i2497 = i2487[24]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2497[i + 0]) );
  }
  i2486.excludedVariants = i2496
  i2486.hasDepthReader = !!i2487[25]
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2499 = data
  i2498.val = i2499[0]
  i2498.name = i2499[1]
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2501 = data
  i2500.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2501[0], i2500.src)
  i2500.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2501[1], i2500.dst)
  i2500.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2501[2], i2500.op)
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2503 = data
  i2502.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2503[0], i2502.pass)
  i2502.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2503[1], i2502.fail)
  i2502.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2503[2], i2502.zFail)
  i2502.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2503[3], i2502.comp)
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2507 = data
  i2506.name = i2507[0]
  i2506.value = i2507[1]
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2511 = data
  var i2513 = i2511[0]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( i2513[i + 0] );
  }
  i2510.keywords = i2512
  i2510.hasDiscard = !!i2511[1]
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2517 = data
  i2516.passId = i2517[0]
  i2516.subShaderIndex = i2517[1]
  var i2519 = i2517[2]
  var i2518 = []
  for(var i = 0; i < i2519.length; i += 1) {
    i2518.push( i2519[i + 0] );
  }
  i2516.keywords = i2518
  i2516.vertexProgram = i2517[3]
  i2516.fragmentProgram = i2517[4]
  i2516.exportedForWebGl2 = !!i2517[5]
  i2516.readDepth = !!i2517[6]
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2523 = data
  request.r(i2523[0], i2523[1], 0, i2522, 'shader')
  i2522.pass = i2523[2]
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2527 = data
  i2526.name = i2527[0]
  i2526.type = i2527[1]
  i2526.value = new pc.Vec4( i2527[2], i2527[3], i2527[4], i2527[5] )
  i2526.textureValue = i2527[6]
  i2526.shaderPropertyFlag = i2527[7]
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2529 = data
  i2528.name = i2529[0]
  request.r(i2529[1], i2529[2], 0, i2528, 'texture')
  i2528.aabb = i2529[3]
  i2528.vertices = i2529[4]
  i2528.triangles = i2529[5]
  i2528.textureRect = UnityEngine.Rect.MinMaxRect(i2529[6], i2529[7], i2529[8], i2529[9])
  i2528.packedRect = UnityEngine.Rect.MinMaxRect(i2529[10], i2529[11], i2529[12], i2529[13])
  i2528.border = new pc.Vec4( i2529[14], i2529[15], i2529[16], i2529[17] )
  i2528.transparency = i2529[18]
  i2528.bounds = i2529[19]
  i2528.pixelsPerUnit = i2529[20]
  i2528.textureWidth = i2529[21]
  i2528.textureHeight = i2529[22]
  i2528.nativeSize = new pc.Vec2( i2529[23], i2529[24] )
  i2528.pivot = new pc.Vec2( i2529[25], i2529[26] )
  i2528.textureRectOffset = new pc.Vec2( i2529[27], i2529[28] )
  return i2528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2531 = data
  i2530.name = i2531[0]
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2533 = data
  i2532.name = i2533[0]
  i2532.wrapMode = i2533[1]
  i2532.isLooping = !!i2533[2]
  i2532.length = i2533[3]
  var i2535 = i2533[4]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2535[i + 0]) );
  }
  i2532.curves = i2534
  var i2537 = i2533[5]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2537[i + 0]) );
  }
  i2532.events = i2536
  i2532.halfPrecision = !!i2533[6]
  i2532._frameRate = i2533[7]
  i2532.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2533[8], i2532.localBounds)
  i2532.hasMuscleCurves = !!i2533[9]
  var i2539 = i2533[10]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 1) {
    i2538.push( i2539[i + 0] );
  }
  i2532.clipMuscleConstant = i2538
  i2532.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2533[11], i2532.clipBindingConstant)
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2543 = data
  i2542.path = i2543[0]
  i2542.hash = i2543[1]
  i2542.componentType = i2543[2]
  i2542.property = i2543[3]
  i2542.keys = i2543[4]
  var i2545 = i2543[5]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2545[i + 0]) );
  }
  i2542.objectReferenceKeys = i2544
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2549 = data
  i2548.time = i2549[0]
  request.r(i2549[1], i2549[2], 0, i2548, 'value')
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2553 = data
  i2552.functionName = i2553[0]
  i2552.floatParameter = i2553[1]
  i2552.intParameter = i2553[2]
  i2552.stringParameter = i2553[3]
  request.r(i2553[4], i2553[5], 0, i2552, 'objectReferenceParameter')
  i2552.time = i2553[6]
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2555 = data
  i2554.center = new pc.Vec3( i2555[0], i2555[1], i2555[2] )
  i2554.extends = new pc.Vec3( i2555[3], i2555[4], i2555[5] )
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2559 = data
  var i2561 = i2559[0]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( i2561[i + 0] );
  }
  i2558.genericBindings = i2560
  var i2563 = i2559[1]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( i2563[i + 0] );
  }
  i2558.pptrCurveMapping = i2562
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2565 = data
  i2564.name = i2565[0]
  i2564.ascent = i2565[1]
  i2564.originalLineHeight = i2565[2]
  i2564.fontSize = i2565[3]
  var i2567 = i2565[4]
  var i2566 = []
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2567[i + 0]) );
  }
  i2564.characterInfo = i2566
  request.r(i2565[5], i2565[6], 0, i2564, 'texture')
  i2564.originalFontSize = i2565[7]
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2571 = data
  i2570.index = i2571[0]
  i2570.advance = i2571[1]
  i2570.bearing = i2571[2]
  i2570.glyphWidth = i2571[3]
  i2570.glyphHeight = i2571[4]
  i2570.minX = i2571[5]
  i2570.maxX = i2571[6]
  i2570.minY = i2571[7]
  i2570.maxY = i2571[8]
  i2570.uvBottomLeftX = i2571[9]
  i2570.uvBottomLeftY = i2571[10]
  i2570.uvBottomRightX = i2571[11]
  i2570.uvBottomRightY = i2571[12]
  i2570.uvTopLeftX = i2571[13]
  i2570.uvTopLeftY = i2571[14]
  i2570.uvTopRightX = i2571[15]
  i2570.uvTopRightY = i2571[16]
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2573 = data
  i2572.name = i2573[0]
  var i2575 = i2573[1]
  var i2574 = []
  for(var i = 0; i < i2575.length; i += 1) {
    i2574.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2575[i + 0]) );
  }
  i2572.layers = i2574
  var i2577 = i2573[2]
  var i2576 = []
  for(var i = 0; i < i2577.length; i += 1) {
    i2576.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2577[i + 0]) );
  }
  i2572.parameters = i2576
  i2572.animationClips = i2573[3]
  i2572.avatarUnsupported = i2573[4]
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2581 = data
  i2580.name = i2581[0]
  i2580.defaultWeight = i2581[1]
  i2580.blendingMode = i2581[2]
  i2580.avatarMask = i2581[3]
  i2580.syncedLayerIndex = i2581[4]
  i2580.syncedLayerAffectsTiming = !!i2581[5]
  i2580.syncedLayers = i2581[6]
  i2580.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2581[7], i2580.stateMachine)
  return i2580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2583 = data
  i2582.id = i2583[0]
  i2582.name = i2583[1]
  i2582.path = i2583[2]
  var i2585 = i2583[3]
  var i2584 = []
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2585[i + 0]) );
  }
  i2582.states = i2584
  var i2587 = i2583[4]
  var i2586 = []
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2587[i + 0]) );
  }
  i2582.machines = i2586
  var i2589 = i2583[5]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2589[i + 0]) );
  }
  i2582.entryStateTransitions = i2588
  var i2591 = i2583[6]
  var i2590 = []
  for(var i = 0; i < i2591.length; i += 1) {
    i2590.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2591[i + 0]) );
  }
  i2582.exitStateTransitions = i2590
  var i2593 = i2583[7]
  var i2592 = []
  for(var i = 0; i < i2593.length; i += 1) {
    i2592.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2593[i + 0]) );
  }
  i2582.anyStateTransitions = i2592
  i2582.defaultStateId = i2583[8]
  return i2582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2597 = data
  i2596.id = i2597[0]
  i2596.name = i2597[1]
  i2596.cycleOffset = i2597[2]
  i2596.cycleOffsetParameter = i2597[3]
  i2596.cycleOffsetParameterActive = !!i2597[4]
  i2596.mirror = !!i2597[5]
  i2596.mirrorParameter = i2597[6]
  i2596.mirrorParameterActive = !!i2597[7]
  i2596.motionId = i2597[8]
  i2596.nameHash = i2597[9]
  i2596.fullPathHash = i2597[10]
  i2596.speed = i2597[11]
  i2596.speedParameter = i2597[12]
  i2596.speedParameterActive = !!i2597[13]
  i2596.tag = i2597[14]
  i2596.tagHash = i2597[15]
  i2596.writeDefaultValues = !!i2597[16]
  var i2599 = i2597[17]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 2) {
  request.r(i2599[i + 0], i2599[i + 1], 2, i2598, '')
  }
  i2596.behaviours = i2598
  var i2601 = i2597[18]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2601[i + 0]) );
  }
  i2596.transitions = i2600
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2607 = data
  i2606.fullPath = i2607[0]
  i2606.canTransitionToSelf = !!i2607[1]
  i2606.duration = i2607[2]
  i2606.exitTime = i2607[3]
  i2606.hasExitTime = !!i2607[4]
  i2606.hasFixedDuration = !!i2607[5]
  i2606.interruptionSource = i2607[6]
  i2606.offset = i2607[7]
  i2606.orderedInterruption = !!i2607[8]
  i2606.destinationStateId = i2607[9]
  i2606.isExit = !!i2607[10]
  i2606.mute = !!i2607[11]
  i2606.solo = !!i2607[12]
  var i2609 = i2607[13]
  var i2608 = []
  for(var i = 0; i < i2609.length; i += 1) {
    i2608.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2609[i + 0]) );
  }
  i2606.conditions = i2608
  return i2606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2615 = data
  i2614.destinationStateId = i2615[0]
  i2614.isExit = !!i2615[1]
  i2614.mute = !!i2615[2]
  i2614.solo = !!i2615[3]
  var i2617 = i2615[4]
  var i2616 = []
  for(var i = 0; i < i2617.length; i += 1) {
    i2616.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2617[i + 0]) );
  }
  i2614.conditions = i2616
  return i2614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2621 = data
  i2620.mode = i2621[0]
  i2620.parameter = i2621[1]
  i2620.threshold = i2621[2]
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2625 = data
  i2624.defaultBool = !!i2625[0]
  i2624.defaultFloat = i2625[1]
  i2624.defaultInt = i2625[2]
  i2624.name = i2625[3]
  i2624.nameHash = i2625[4]
  i2624.type = i2625[5]
  return i2624
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2626 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2627 = data
  i2626.useSafeMode = !!i2627[0]
  i2626.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2627[1], i2626.safeModeOptions)
  i2626.timeScale = i2627[2]
  i2626.unscaledTimeScale = i2627[3]
  i2626.useSmoothDeltaTime = !!i2627[4]
  i2626.maxSmoothUnscaledTime = i2627[5]
  i2626.rewindCallbackMode = i2627[6]
  i2626.showUnityEditorReport = !!i2627[7]
  i2626.logBehaviour = i2627[8]
  i2626.drawGizmos = !!i2627[9]
  i2626.defaultRecyclable = !!i2627[10]
  i2626.defaultAutoPlay = i2627[11]
  i2626.defaultUpdateType = i2627[12]
  i2626.defaultTimeScaleIndependent = !!i2627[13]
  i2626.defaultEaseType = i2627[14]
  i2626.defaultEaseOvershootOrAmplitude = i2627[15]
  i2626.defaultEasePeriod = i2627[16]
  i2626.defaultAutoKill = !!i2627[17]
  i2626.defaultLoopType = i2627[18]
  i2626.debugMode = !!i2627[19]
  i2626.debugStoreTargetId = !!i2627[20]
  i2626.showPreviewPanel = !!i2627[21]
  i2626.storeSettingsLocation = i2627[22]
  i2626.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2627[23], i2626.modules)
  i2626.createASMDEF = !!i2627[24]
  i2626.showPlayingTweens = !!i2627[25]
  i2626.showPausedTweens = !!i2627[26]
  return i2626
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2628 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2629 = data
  i2628.logBehaviour = i2629[0]
  i2628.nestedTweenFailureBehaviour = i2629[1]
  return i2628
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2630 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2631 = data
  i2630.showPanel = !!i2631[0]
  i2630.audioEnabled = !!i2631[1]
  i2630.physicsEnabled = !!i2631[2]
  i2630.physics2DEnabled = !!i2631[3]
  i2630.spriteEnabled = !!i2631[4]
  i2630.uiEnabled = !!i2631[5]
  i2630.textMeshProEnabled = !!i2631[6]
  i2630.tk2DEnabled = !!i2631[7]
  i2630.deAudioEnabled = !!i2631[8]
  i2630.deUnityExtendedEnabled = !!i2631[9]
  i2630.epoOutlineEnabled = !!i2631[10]
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2633 = data
  var i2635 = i2633[0]
  var i2634 = []
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2635[i + 0]) );
  }
  i2632.files = i2634
  i2632.componentToPrefabIds = i2633[1]
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2639 = data
  i2638.path = i2639[0]
  request.r(i2639[1], i2639[2], 0, i2638, 'unityObject')
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2641 = data
  var i2643 = i2641[0]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2643[i + 0]) );
  }
  i2640.scriptsExecutionOrder = i2642
  var i2645 = i2641[1]
  var i2644 = []
  for(var i = 0; i < i2645.length; i += 1) {
    i2644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2645[i + 0]) );
  }
  i2640.sortingLayers = i2644
  var i2647 = i2641[2]
  var i2646 = []
  for(var i = 0; i < i2647.length; i += 1) {
    i2646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2647[i + 0]) );
  }
  i2640.cullingLayers = i2646
  i2640.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2641[3], i2640.timeSettings)
  i2640.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2641[4], i2640.physicsSettings)
  i2640.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2641[5], i2640.physics2DSettings)
  i2640.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2641[6], i2640.qualitySettings)
  i2640.enableRealtimeShadows = !!i2641[7]
  i2640.enableAutoInstancing = !!i2641[8]
  i2640.enableStaticBatching = !!i2641[9]
  i2640.enableDynamicBatching = !!i2641[10]
  i2640.usePreservativeDynamicBatching = !!i2641[11]
  i2640.lightmapEncodingQuality = i2641[12]
  i2640.desiredColorSpace = i2641[13]
  var i2649 = i2641[14]
  var i2648 = []
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.push( i2649[i + 0] );
  }
  i2640.allTags = i2648
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2653 = data
  i2652.name = i2653[0]
  i2652.value = i2653[1]
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2657 = data
  i2656.id = i2657[0]
  i2656.name = i2657[1]
  i2656.value = i2657[2]
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2661 = data
  i2660.id = i2661[0]
  i2660.name = i2661[1]
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2663 = data
  i2662.fixedDeltaTime = i2663[0]
  i2662.maximumDeltaTime = i2663[1]
  i2662.timeScale = i2663[2]
  i2662.maximumParticleTimestep = i2663[3]
  return i2662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2665 = data
  i2664.gravity = new pc.Vec3( i2665[0], i2665[1], i2665[2] )
  i2664.defaultSolverIterations = i2665[3]
  i2664.bounceThreshold = i2665[4]
  i2664.autoSyncTransforms = !!i2665[5]
  i2664.autoSimulation = !!i2665[6]
  var i2667 = i2665[7]
  var i2666 = []
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2667[i + 0]) );
  }
  i2664.collisionMatrix = i2666
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2671 = data
  i2670.enabled = !!i2671[0]
  i2670.layerId = i2671[1]
  i2670.otherLayerId = i2671[2]
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2673 = data
  request.r(i2673[0], i2673[1], 0, i2672, 'material')
  i2672.gravity = new pc.Vec2( i2673[2], i2673[3] )
  i2672.positionIterations = i2673[4]
  i2672.velocityIterations = i2673[5]
  i2672.velocityThreshold = i2673[6]
  i2672.maxLinearCorrection = i2673[7]
  i2672.maxAngularCorrection = i2673[8]
  i2672.maxTranslationSpeed = i2673[9]
  i2672.maxRotationSpeed = i2673[10]
  i2672.baumgarteScale = i2673[11]
  i2672.baumgarteTOIScale = i2673[12]
  i2672.timeToSleep = i2673[13]
  i2672.linearSleepTolerance = i2673[14]
  i2672.angularSleepTolerance = i2673[15]
  i2672.defaultContactOffset = i2673[16]
  i2672.autoSimulation = !!i2673[17]
  i2672.queriesHitTriggers = !!i2673[18]
  i2672.queriesStartInColliders = !!i2673[19]
  i2672.callbacksOnDisable = !!i2673[20]
  i2672.reuseCollisionCallbacks = !!i2673[21]
  i2672.autoSyncTransforms = !!i2673[22]
  var i2675 = i2673[23]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2675[i + 0]) );
  }
  i2672.collisionMatrix = i2674
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2679 = data
  i2678.enabled = !!i2679[0]
  i2678.layerId = i2679[1]
  i2678.otherLayerId = i2679[2]
  return i2678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2681 = data
  var i2683 = i2681[0]
  var i2682 = []
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2683[i + 0]) );
  }
  i2680.qualityLevels = i2682
  var i2685 = i2681[1]
  var i2684 = []
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.push( i2685[i + 0] );
  }
  i2680.names = i2684
  i2680.shadows = i2681[2]
  i2680.anisotropicFiltering = i2681[3]
  i2680.antiAliasing = i2681[4]
  i2680.lodBias = i2681[5]
  i2680.shadowCascades = i2681[6]
  i2680.shadowDistance = i2681[7]
  i2680.shadowmaskMode = i2681[8]
  i2680.shadowProjection = i2681[9]
  i2680.shadowResolution = i2681[10]
  i2680.softParticles = !!i2681[11]
  i2680.softVegetation = !!i2681[12]
  i2680.activeColorSpace = i2681[13]
  i2680.desiredColorSpace = i2681[14]
  i2680.masterTextureLimit = i2681[15]
  i2680.maxQueuedFrames = i2681[16]
  i2680.particleRaycastBudget = i2681[17]
  i2680.pixelLightCount = i2681[18]
  i2680.realtimeReflectionProbes = !!i2681[19]
  i2680.shadowCascade2Split = i2681[20]
  i2680.shadowCascade4Split = new pc.Vec3( i2681[21], i2681[22], i2681[23] )
  i2680.streamingMipmapsActive = !!i2681[24]
  i2680.vSyncCount = i2681[25]
  i2680.asyncUploadBufferSize = i2681[26]
  i2680.asyncUploadTimeSlice = i2681[27]
  i2680.billboardsFaceCameraPosition = !!i2681[28]
  i2680.shadowNearPlaneOffset = i2681[29]
  i2680.streamingMipmapsMemoryBudget = i2681[30]
  i2680.maximumLODLevel = i2681[31]
  i2680.streamingMipmapsAddAllCameras = !!i2681[32]
  i2680.streamingMipmapsMaxLevelReduction = i2681[33]
  i2680.streamingMipmapsRenderersPerFrame = i2681[34]
  i2680.resolutionScalingFixedDPIFactor = i2681[35]
  i2680.streamingMipmapsMaxFileIORequests = i2681[36]
  i2680.currentQualityLevel = i2681[37]
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i2688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i2689 = data
  var i2691 = i2689[0]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i2691[i + 0]) );
  }
  i2688.groups = i2690
  var i2693 = i2689[1]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i2693[i + 0]) );
  }
  i2688.snapshots = i2692
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i2696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i2697 = data
  i2696.id = i2697[0]
  i2696.childGroupIds = i2697[1]
  i2696.name = i2697[2]
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i2700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i2701 = data
  i2700.id = i2701[0]
  var i2703 = i2701[1]
  var i2702 = []
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i2703[i + 0]) );
  }
  i2700.parameters = i2702
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i2706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i2707 = data
  i2706.name = i2707[0]
  i2706.value = i2707[1]
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2711 = data
  i2710.weight = i2711[0]
  i2710.vertices = i2711[1]
  i2710.normals = i2711[2]
  i2710.tangents = i2711[3]
  return i2710
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[87],"88":[38],"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[90],"97":[46],"98":[46],"99":[46],"100":[46],"101":[46],"102":[46],"103":[46],"104":[46],"105":[46],"106":[46],"107":[46],"108":[46],"109":[46],"110":[38],"111":[60],"112":[113],"114":[113],"37":[36],"115":[34],"57":[15],"116":[11],"117":[15],"118":[119],"120":[119],"121":[10],"21":[11],"122":[15],"19":[15],"123":[36],"124":[36],"41":[37],"67":[42,36],"125":[36],"40":[37],"126":[36],"127":[36],"128":[36],"129":[36],"130":[36],"131":[36],"132":[36],"133":[36],"134":[36],"135":[42,36],"136":[36],"137":[36],"138":[36],"139":[36],"28":[42,36],"140":[36],"141":[73],"142":[73],"74":[73],"143":[73],"144":[38],"145":[38]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","MenuLevel","UnityEngine.GameObject","DG.Tweening.DOTweenAnimation","UnityEngine.BoxCollider2D","UnityEngine.AudioClip","IntroLevelAnim","Level_PoseController","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.U2D.Animation.SpriteSkin","BD_AnimationHelper","SpriteButton","PlayableRouter","UnityEngine.TrailRenderer","Level1_Cloth_Playable","BasicDrag","BD_CameraFollow","Level1_SurfController","UnityEngine.UI.Text","RotaryTimerKnob","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.LineRenderer","TextureOffsetScroller","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.SpriteMask","BD_Clamp","UnityEngine.Rigidbody2D","PlaceItem","ActionOnTap","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","SewingCol","OutlinePulse","BD_Action","BD_Fold","BD_Progress","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","StaticFixedPipe","BD_SpriteChange","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.UI.Image","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "12.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "1Sept2026_CompleteLevel_1_2_v1_Final";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1737";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4389";

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

Deserializers.buildID = "c549e94e-a98f-4412-8f10-7553aad94f2c";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

