var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2052 = root || request.c( 'UnityEngine.JointSpring' )
  var i2053 = data
  i2052.spring = i2053[0]
  i2052.damper = i2053[1]
  i2052.targetPosition = i2053[2]
  return i2052
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2054 = root || request.c( 'UnityEngine.JointMotor' )
  var i2055 = data
  i2054.m_TargetVelocity = i2055[0]
  i2054.m_Force = i2055[1]
  i2054.m_FreeSpin = i2055[2]
  return i2054
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2056 = root || request.c( 'UnityEngine.JointLimits' )
  var i2057 = data
  i2056.m_Min = i2057[0]
  i2056.m_Max = i2057[1]
  i2056.m_Bounciness = i2057[2]
  i2056.m_BounceMinVelocity = i2057[3]
  i2056.m_ContactDistance = i2057[4]
  i2056.minBounce = i2057[5]
  i2056.maxBounce = i2057[6]
  return i2056
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2058 = root || request.c( 'UnityEngine.JointDrive' )
  var i2059 = data
  i2058.m_PositionSpring = i2059[0]
  i2058.m_PositionDamper = i2059[1]
  i2058.m_MaximumForce = i2059[2]
  i2058.m_UseAcceleration = i2059[3]
  return i2058
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2060 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2061 = data
  i2060.m_Spring = i2061[0]
  i2060.m_Damper = i2061[1]
  return i2060
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2062 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2063 = data
  i2062.m_Limit = i2063[0]
  i2062.m_Bounciness = i2063[1]
  i2062.m_ContactDistance = i2063[2]
  return i2062
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2064 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2065 = data
  i2064.m_ExtremumSlip = i2065[0]
  i2064.m_ExtremumValue = i2065[1]
  i2064.m_AsymptoteSlip = i2065[2]
  i2064.m_AsymptoteValue = i2065[3]
  i2064.m_Stiffness = i2065[4]
  return i2064
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2066 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2067 = data
  i2066.m_LowerAngle = i2067[0]
  i2066.m_UpperAngle = i2067[1]
  return i2066
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2068 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2069 = data
  i2068.m_MotorSpeed = i2069[0]
  i2068.m_MaximumMotorTorque = i2069[1]
  return i2068
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2070 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2071 = data
  i2070.m_DampingRatio = i2071[0]
  i2070.m_Frequency = i2071[1]
  i2070.m_Angle = i2071[2]
  return i2070
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2072 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2073 = data
  i2072.m_LowerTranslation = i2073[0]
  i2072.m_UpperTranslation = i2073[1]
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2074 = root || new pc.UnityMaterial()
  var i2075 = data
  i2074.name = i2075[0]
  request.r(i2075[1], i2075[2], 0, i2074, 'shader')
  i2074.renderQueue = i2075[3]
  i2074.enableInstancing = !!i2075[4]
  var i2077 = i2075[5]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2077[i + 0]) );
  }
  i2074.floatParameters = i2076
  var i2079 = i2075[6]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2079[i + 0]) );
  }
  i2074.colorParameters = i2078
  var i2081 = i2075[7]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2081[i + 0]) );
  }
  i2074.vectorParameters = i2080
  var i2083 = i2075[8]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2083[i + 0]) );
  }
  i2074.textureParameters = i2082
  var i2085 = i2075[9]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2085[i + 0]) );
  }
  i2074.materialFlags = i2084
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2089 = data
  i2088.name = i2089[0]
  i2088.value = i2089[1]
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2093 = data
  i2092.name = i2093[0]
  i2092.value = new pc.Color(i2093[1], i2093[2], i2093[3], i2093[4])
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2097 = data
  i2096.name = i2097[0]
  i2096.value = new pc.Vec4( i2097[1], i2097[2], i2097[3], i2097[4] )
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2101 = data
  i2100.name = i2101[0]
  request.r(i2101[1], i2101[2], 0, i2100, 'value')
  return i2100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2105 = data
  i2104.name = i2105[0]
  i2104.enabled = !!i2105[1]
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2107 = data
  i2106.name = i2107[0]
  i2106.width = i2107[1]
  i2106.height = i2107[2]
  i2106.mipmapCount = i2107[3]
  i2106.anisoLevel = i2107[4]
  i2106.filterMode = i2107[5]
  i2106.hdr = !!i2107[6]
  i2106.format = i2107[7]
  i2106.wrapMode = i2107[8]
  i2106.alphaIsTransparency = !!i2107[9]
  i2106.alphaSource = i2107[10]
  i2106.graphicsFormat = i2107[11]
  i2106.sRGBTexture = !!i2107[12]
  i2106.desiredColorSpace = i2107[13]
  i2106.wrapU = i2107[14]
  i2106.wrapV = i2107[15]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2109 = data
  i2108.name = i2109[0]
  i2108.halfPrecision = !!i2109[1]
  i2108.useSimplification = !!i2109[2]
  i2108.useUInt32IndexFormat = !!i2109[3]
  i2108.vertexCount = i2109[4]
  i2108.aabb = i2109[5]
  var i2111 = i2109[6]
  var i2110 = []
  for(var i = 0; i < i2111.length; i += 1) {
    i2110.push( !!i2111[i + 0] );
  }
  i2108.streams = i2110
  i2108.vertices = i2109[7]
  var i2113 = i2109[8]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2113[i + 0]) );
  }
  i2108.subMeshes = i2112
  var i2115 = i2109[9]
  var i2114 = []
  for(var i = 0; i < i2115.length; i += 16) {
    i2114.push( new pc.Mat4().setData(i2115[i + 0], i2115[i + 1], i2115[i + 2], i2115[i + 3],  i2115[i + 4], i2115[i + 5], i2115[i + 6], i2115[i + 7],  i2115[i + 8], i2115[i + 9], i2115[i + 10], i2115[i + 11],  i2115[i + 12], i2115[i + 13], i2115[i + 14], i2115[i + 15]) );
  }
  i2108.bindposes = i2114
  var i2117 = i2109[10]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2117[i + 0]) );
  }
  i2108.blendShapes = i2116
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2123 = data
  i2122.triangles = i2123[0]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2129 = data
  i2128.name = i2129[0]
  var i2131 = i2129[1]
  var i2130 = []
  for(var i = 0; i < i2131.length; i += 1) {
    i2130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2131[i + 0]) );
  }
  i2128.frames = i2130
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2133 = data
  i2132.position = new pc.Vec3( i2133[0], i2133[1], i2133[2] )
  i2132.scale = new pc.Vec3( i2133[3], i2133[4], i2133[5] )
  i2132.rotation = new pc.Quat(i2133[6], i2133[7], i2133[8], i2133[9])
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2135 = data
  i2134.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2135[0], i2134.main)
  i2134.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2135[1], i2134.colorBySpeed)
  i2134.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2135[2], i2134.colorOverLifetime)
  i2134.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2135[3], i2134.emission)
  i2134.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2135[4], i2134.rotationBySpeed)
  i2134.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2135[5], i2134.rotationOverLifetime)
  i2134.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2135[6], i2134.shape)
  i2134.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2135[7], i2134.sizeBySpeed)
  i2134.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2135[8], i2134.sizeOverLifetime)
  i2134.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2135[9], i2134.textureSheetAnimation)
  i2134.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2135[10], i2134.velocityOverLifetime)
  i2134.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2135[11], i2134.noise)
  i2134.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2135[12], i2134.inheritVelocity)
  i2134.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2135[13], i2134.forceOverLifetime)
  i2134.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2135[14], i2134.limitVelocityOverLifetime)
  i2134.useAutoRandomSeed = !!i2135[15]
  i2134.randomSeed = i2135[16]
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2136 = root || new pc.ParticleSystemMain()
  var i2137 = data
  i2136.duration = i2137[0]
  i2136.loop = !!i2137[1]
  i2136.prewarm = !!i2137[2]
  i2136.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2137[3], i2136.startDelay)
  i2136.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2137[4], i2136.startLifetime)
  i2136.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2137[5], i2136.startSpeed)
  i2136.startSize3D = !!i2137[6]
  i2136.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2137[7], i2136.startSizeX)
  i2136.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2137[8], i2136.startSizeY)
  i2136.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2137[9], i2136.startSizeZ)
  i2136.startRotation3D = !!i2137[10]
  i2136.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2137[11], i2136.startRotationX)
  i2136.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2137[12], i2136.startRotationY)
  i2136.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2137[13], i2136.startRotationZ)
  i2136.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2137[14], i2136.startColor)
  i2136.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2137[15], i2136.gravityModifier)
  i2136.simulationSpace = i2137[16]
  request.r(i2137[17], i2137[18], 0, i2136, 'customSimulationSpace')
  i2136.simulationSpeed = i2137[19]
  i2136.useUnscaledTime = !!i2137[20]
  i2136.scalingMode = i2137[21]
  i2136.playOnAwake = !!i2137[22]
  i2136.maxParticles = i2137[23]
  i2136.emitterVelocityMode = i2137[24]
  i2136.stopAction = i2137[25]
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2138 = root || new pc.MinMaxCurve()
  var i2139 = data
  i2138.mode = i2139[0]
  i2138.curveMin = new pc.AnimationCurve( { keys_flow: i2139[1] } )
  i2138.curveMax = new pc.AnimationCurve( { keys_flow: i2139[2] } )
  i2138.curveMultiplier = i2139[3]
  i2138.constantMin = i2139[4]
  i2138.constantMax = i2139[5]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2140 = root || new pc.MinMaxGradient()
  var i2141 = data
  i2140.mode = i2141[0]
  i2140.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2141[1], i2140.gradientMin)
  i2140.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2141[2], i2140.gradientMax)
  i2140.colorMin = new pc.Color(i2141[3], i2141[4], i2141[5], i2141[6])
  i2140.colorMax = new pc.Color(i2141[7], i2141[8], i2141[9], i2141[10])
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2143 = data
  i2142.mode = i2143[0]
  var i2145 = i2143[1]
  var i2144 = []
  for(var i = 0; i < i2145.length; i += 1) {
    i2144.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2145[i + 0]) );
  }
  i2142.colorKeys = i2144
  var i2147 = i2143[2]
  var i2146 = []
  for(var i = 0; i < i2147.length; i += 1) {
    i2146.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2147[i + 0]) );
  }
  i2142.alphaKeys = i2146
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2148 = root || new pc.ParticleSystemColorBySpeed()
  var i2149 = data
  i2148.enabled = !!i2149[0]
  i2148.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2149[1], i2148.color)
  i2148.range = new pc.Vec2( i2149[2], i2149[3] )
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2153 = data
  i2152.color = new pc.Color(i2153[0], i2153[1], i2153[2], i2153[3])
  i2152.time = i2153[4]
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2157 = data
  i2156.alpha = i2157[0]
  i2156.time = i2157[1]
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2158 = root || new pc.ParticleSystemColorOverLifetime()
  var i2159 = data
  i2158.enabled = !!i2159[0]
  i2158.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2159[1], i2158.color)
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2160 = root || new pc.ParticleSystemEmitter()
  var i2161 = data
  i2160.enabled = !!i2161[0]
  i2160.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2161[1], i2160.rateOverTime)
  i2160.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2161[2], i2160.rateOverDistance)
  var i2163 = i2161[3]
  var i2162 = []
  for(var i = 0; i < i2163.length; i += 1) {
    i2162.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2163[i + 0]) );
  }
  i2160.bursts = i2162
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2166 = root || new pc.ParticleSystemBurst()
  var i2167 = data
  i2166.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2167[0], i2166.count)
  i2166.cycleCount = i2167[1]
  i2166.minCount = i2167[2]
  i2166.maxCount = i2167[3]
  i2166.repeatInterval = i2167[4]
  i2166.time = i2167[5]
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2168 = root || new pc.ParticleSystemRotationBySpeed()
  var i2169 = data
  i2168.enabled = !!i2169[0]
  i2168.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2169[1], i2168.x)
  i2168.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2169[2], i2168.y)
  i2168.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2169[3], i2168.z)
  i2168.separateAxes = !!i2169[4]
  i2168.range = new pc.Vec2( i2169[5], i2169[6] )
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2170 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2171 = data
  i2170.enabled = !!i2171[0]
  i2170.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2171[1], i2170.x)
  i2170.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2171[2], i2170.y)
  i2170.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2171[3], i2170.z)
  i2170.separateAxes = !!i2171[4]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2172 = root || new pc.ParticleSystemShape()
  var i2173 = data
  i2172.enabled = !!i2173[0]
  i2172.shapeType = i2173[1]
  i2172.randomDirectionAmount = i2173[2]
  i2172.sphericalDirectionAmount = i2173[3]
  i2172.randomPositionAmount = i2173[4]
  i2172.alignToDirection = !!i2173[5]
  i2172.radius = i2173[6]
  i2172.radiusMode = i2173[7]
  i2172.radiusSpread = i2173[8]
  i2172.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[9], i2172.radiusSpeed)
  i2172.radiusThickness = i2173[10]
  i2172.angle = i2173[11]
  i2172.length = i2173[12]
  i2172.boxThickness = new pc.Vec3( i2173[13], i2173[14], i2173[15] )
  i2172.meshShapeType = i2173[16]
  request.r(i2173[17], i2173[18], 0, i2172, 'mesh')
  request.r(i2173[19], i2173[20], 0, i2172, 'meshRenderer')
  request.r(i2173[21], i2173[22], 0, i2172, 'skinnedMeshRenderer')
  i2172.useMeshMaterialIndex = !!i2173[23]
  i2172.meshMaterialIndex = i2173[24]
  i2172.useMeshColors = !!i2173[25]
  i2172.normalOffset = i2173[26]
  i2172.arc = i2173[27]
  i2172.arcMode = i2173[28]
  i2172.arcSpread = i2173[29]
  i2172.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2173[30], i2172.arcSpeed)
  i2172.donutRadius = i2173[31]
  i2172.position = new pc.Vec3( i2173[32], i2173[33], i2173[34] )
  i2172.rotation = new pc.Vec3( i2173[35], i2173[36], i2173[37] )
  i2172.scale = new pc.Vec3( i2173[38], i2173[39], i2173[40] )
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2174 = root || new pc.ParticleSystemSizeBySpeed()
  var i2175 = data
  i2174.enabled = !!i2175[0]
  i2174.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2175[1], i2174.x)
  i2174.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2175[2], i2174.y)
  i2174.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2175[3], i2174.z)
  i2174.separateAxes = !!i2175[4]
  i2174.range = new pc.Vec2( i2175[5], i2175[6] )
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2176 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2177 = data
  i2176.enabled = !!i2177[0]
  i2176.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2177[1], i2176.x)
  i2176.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2177[2], i2176.y)
  i2176.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2177[3], i2176.z)
  i2176.separateAxes = !!i2177[4]
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2178 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2179 = data
  i2178.enabled = !!i2179[0]
  i2178.mode = i2179[1]
  i2178.animation = i2179[2]
  i2178.numTilesX = i2179[3]
  i2178.numTilesY = i2179[4]
  i2178.useRandomRow = !!i2179[5]
  i2178.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2179[6], i2178.frameOverTime)
  i2178.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2179[7], i2178.startFrame)
  i2178.cycleCount = i2179[8]
  i2178.rowIndex = i2179[9]
  i2178.flipU = i2179[10]
  i2178.flipV = i2179[11]
  i2178.spriteCount = i2179[12]
  var i2181 = i2179[13]
  var i2180 = []
  for(var i = 0; i < i2181.length; i += 2) {
  request.r(i2181[i + 0], i2181[i + 1], 2, i2180, '')
  }
  i2178.sprites = i2180
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2184 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2185 = data
  i2184.enabled = !!i2185[0]
  i2184.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[1], i2184.x)
  i2184.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[2], i2184.y)
  i2184.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[3], i2184.z)
  i2184.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[4], i2184.radial)
  i2184.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[5], i2184.speedModifier)
  i2184.space = i2185[6]
  i2184.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[7], i2184.orbitalX)
  i2184.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[8], i2184.orbitalY)
  i2184.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[9], i2184.orbitalZ)
  i2184.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[10], i2184.orbitalOffsetX)
  i2184.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[11], i2184.orbitalOffsetY)
  i2184.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2185[12], i2184.orbitalOffsetZ)
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2186 = root || new pc.ParticleSystemNoise()
  var i2187 = data
  i2186.enabled = !!i2187[0]
  i2186.separateAxes = !!i2187[1]
  i2186.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[2], i2186.strengthX)
  i2186.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[3], i2186.strengthY)
  i2186.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[4], i2186.strengthZ)
  i2186.frequency = i2187[5]
  i2186.damping = !!i2187[6]
  i2186.octaveCount = i2187[7]
  i2186.octaveMultiplier = i2187[8]
  i2186.octaveScale = i2187[9]
  i2186.quality = i2187[10]
  i2186.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[11], i2186.scrollSpeed)
  i2186.scrollSpeedMultiplier = i2187[12]
  i2186.remapEnabled = !!i2187[13]
  i2186.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[14], i2186.remapX)
  i2186.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[15], i2186.remapY)
  i2186.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[16], i2186.remapZ)
  i2186.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[17], i2186.positionAmount)
  i2186.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[18], i2186.rotationAmount)
  i2186.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2187[19], i2186.sizeAmount)
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2188 = root || new pc.ParticleSystemInheritVelocity()
  var i2189 = data
  i2188.enabled = !!i2189[0]
  i2188.mode = i2189[1]
  i2188.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2189[2], i2188.curve)
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2190 = root || new pc.ParticleSystemForceOverLifetime()
  var i2191 = data
  i2190.enabled = !!i2191[0]
  i2190.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2191[1], i2190.x)
  i2190.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2191[2], i2190.y)
  i2190.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2191[3], i2190.z)
  i2190.space = i2191[4]
  i2190.randomized = !!i2191[5]
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2192 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2193 = data
  i2192.enabled = !!i2193[0]
  i2192.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2193[1], i2192.limit)
  i2192.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2193[2], i2192.limitX)
  i2192.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2193[3], i2192.limitY)
  i2192.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2193[4], i2192.limitZ)
  i2192.dampen = i2193[5]
  i2192.separateAxes = !!i2193[6]
  i2192.space = i2193[7]
  i2192.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2193[8], i2192.drag)
  i2192.multiplyDragByParticleSize = !!i2193[9]
  i2192.multiplyDragByParticleVelocity = !!i2193[10]
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2195 = data
  request.r(i2195[0], i2195[1], 0, i2194, 'mesh')
  i2194.meshCount = i2195[2]
  i2194.activeVertexStreamsCount = i2195[3]
  i2194.alignment = i2195[4]
  i2194.renderMode = i2195[5]
  i2194.sortMode = i2195[6]
  i2194.lengthScale = i2195[7]
  i2194.velocityScale = i2195[8]
  i2194.cameraVelocityScale = i2195[9]
  i2194.normalDirection = i2195[10]
  i2194.sortingFudge = i2195[11]
  i2194.minParticleSize = i2195[12]
  i2194.maxParticleSize = i2195[13]
  i2194.pivot = new pc.Vec3( i2195[14], i2195[15], i2195[16] )
  request.r(i2195[17], i2195[18], 0, i2194, 'trailMaterial')
  i2194.applyActiveColorSpace = !!i2195[19]
  i2194.enabled = !!i2195[20]
  request.r(i2195[21], i2195[22], 0, i2194, 'sharedMaterial')
  var i2197 = i2195[23]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 2) {
  request.r(i2197[i + 0], i2197[i + 1], 2, i2196, '')
  }
  i2194.sharedMaterials = i2196
  i2194.receiveShadows = !!i2195[24]
  i2194.shadowCastingMode = i2195[25]
  i2194.sortingLayerID = i2195[26]
  i2194.sortingOrder = i2195[27]
  i2194.lightmapIndex = i2195[28]
  i2194.lightmapSceneIndex = i2195[29]
  i2194.lightmapScaleOffset = new pc.Vec4( i2195[30], i2195[31], i2195[32], i2195[33] )
  i2194.lightProbeUsage = i2195[34]
  i2194.reflectionProbeUsage = i2195[35]
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2201 = data
  i2200.name = i2201[0]
  i2200.tagId = i2201[1]
  i2200.enabled = !!i2201[2]
  i2200.isStatic = !!i2201[3]
  i2200.layer = i2201[4]
  return i2200
}

Deserializers["Level1_Cloth_Playable"] = function (request, data, root) {
  var i2202 = root || request.c( 'Level1_Cloth_Playable' )
  var i2203 = data
  request.r(i2203[0], i2203[1], 0, i2202, 'WashingView')
  request.r(i2203[2], i2203[3], 0, i2202, 'WashingTools')
  request.r(i2203[4], i2203[5], 0, i2202, 'DressingView')
  request.r(i2203[6], i2203[7], 0, i2202, 'DressingTools')
  i2202.ZoomStep1 = request.d('ZoomPos', i2203[8], i2202.ZoomStep1)
  request.r(i2203[9], i2203[10], 0, i2202, 'ToolStep1')
  request.r(i2203[11], i2203[12], 0, i2202, 'Basket_Cloth')
  request.r(i2203[13], i2203[14], 0, i2202, 'clothInside')
  request.r(i2203[15], i2203[16], 0, i2202, 'clothRound')
  request.r(i2203[17], i2203[18], 0, i2202, 'machineDoor')
  request.r(i2203[19], i2203[20], 0, i2202, 'machineGlass')
  i2202.ZoomStep2 = request.d('ZoomPos', i2203[21], i2202.ZoomStep2)
  i2202.ZoomStep2b = request.d('ZoomPos', i2203[22], i2202.ZoomStep2b)
  request.r(i2203[23], i2203[24], 0, i2202, 'ToolStep2')
  request.r(i2203[25], i2203[26], 0, i2202, 'ToolStep2CamFollow')
  request.r(i2203[27], i2203[28], 0, i2202, 'drawerObj')
  request.r(i2203[29], i2203[30], 0, i2202, 'surfObj')
  request.r(i2203[31], i2203[32], 0, i2202, 'surfPackTop')
  request.r(i2203[33], i2203[34], 0, i2202, 'handStep2')
  request.r(i2203[35], i2203[36], 0, i2202, 'surfController')
  request.r(i2203[37], i2203[38], 0, i2202, 'clothsInside')
  request.r(i2203[39], i2203[40], 0, i2202, 'clothsInsideGlass')
  request.r(i2203[41], i2203[42], 0, i2202, 'clothsStaticClean')
  request.r(i2203[43], i2203[44], 0, i2202, 'wetCloths')
  request.r(i2203[45], i2203[46], 0, i2202, 'clothCleanInside')
  request.r(i2203[47], i2203[48], 0, i2202, 'clothCleanInsideAnim')
  request.r(i2203[49], i2203[50], 0, i2202, 'waterWave')
  request.r(i2203[51], i2203[52], 0, i2202, 'clothCleanInside2')
  request.r(i2203[53], i2203[54], 0, i2202, 'clothCleanInside2Cam')
  request.r(i2203[55], i2203[56], 0, i2202, 'clothBasketTarget')
  request.r(i2203[57], i2203[58], 0, i2202, 'clothBasketTarget2')
  request.r(i2203[59], i2203[60], 0, i2202, 'waterSplash_Vfx')
  request.r(i2203[61], i2203[62], 0, i2202, 'countDownTimerText')
  i2202.countDown = i2203[63]
  request.r(i2203[64], i2203[65], 0, i2202, 'machineTimer')
  request.r(i2203[66], i2203[67], 0, i2202, 'machineTimerRotater')
  request.r(i2203[68], i2203[69], 0, i2202, 'machineTimerIndication')
  request.r(i2203[70], i2203[71], 0, i2202, 'darazOpenSfx')
  request.r(i2203[72], i2203[73], 0, i2202, 'darazCloseSfx')
  request.r(i2203[74], i2203[75], 0, i2202, 'doorOpenSfx')
  request.r(i2203[76], i2203[77], 0, i2202, 'machineStartSfx')
  request.r(i2203[78], i2203[79], 0, i2202, 'machineFinishSfx')
  request.r(i2203[80], i2203[81], 0, i2202, 'waterDrainSfx')
  i2202.ZoomStep3a = request.d('ZoomPos', i2203[82], i2202.ZoomStep3a)
  request.r(i2203[83], i2203[84], 0, i2202, 'ToolStep3a')
  request.r(i2203[85], i2203[86], 0, i2202, 'ToolStep3aRend')
  request.r(i2203[87], i2203[88], 0, i2202, 'dressingBasket')
  request.r(i2203[89], i2203[90], 0, i2202, 'dummyFullParent')
  request.r(i2203[91], i2203[92], 0, i2202, 'DressParent')
  i2202.ZoomStep3 = request.d('ZoomPos', i2203[93], i2202.ZoomStep3)
  request.r(i2203[94], i2203[95], 0, i2202, 'ToolStep3')
  request.r(i2203[96], i2203[97], 0, i2202, 'tornPatch')
  request.r(i2203[98], i2203[99], 0, i2202, 'patchCompleted')
  request.r(i2203[100], i2203[101], 0, i2202, 'patchOutline')
  i2202.ZoomStep4 = request.d('ZoomPos', i2203[102], i2202.ZoomStep4)
  request.r(i2203[103], i2203[104], 0, i2202, 'ToolStep4')
  request.r(i2203[105], i2203[106], 0, i2202, 'camFollowStep4')
  request.r(i2203[107], i2203[108], 0, i2202, 'SteamerBottom')
  i2202.ZoomStep5 = request.d('ZoomPos', i2203[109], i2202.ZoomStep5)
  request.r(i2203[110], i2203[111], 0, i2202, 'ToolStep5')
  request.r(i2203[112], i2203[113], 0, i2202, 'ribbonFinalTarget')
  request.r(i2203[114], i2203[115], 0, i2202, 'ribbonFinal')
  request.r(i2203[116], i2203[117], 0, i2202, 'handIndication5')
  i2202.levelName = i2203[118]
  i2202.levelReward = i2203[119]
  request.r(i2203[120], i2203[121], 0, i2202, 'LevelIcon')
  request.r(i2203[122], i2203[123], 0, i2202, 'Level_BG')
  var i2205 = i2203[124]
  var i2204 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2205.length; i += 2) {
  request.r(i2205[i + 0], i2205[i + 1], 1, i2204, '')
  }
  i2202.ToolIcons = i2204
  var i2207 = i2203[125]
  var i2206 = []
  for(var i = 0; i < i2207.length; i += 2) {
  request.r(i2207[i + 0], i2207[i + 1], 2, i2206, '')
  }
  i2202.AllDrags = i2206
  var i2209 = i2203[126]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 2) {
  request.r(i2209[i + 0], i2209[i + 1], 2, i2208, '')
  }
  i2202.AllSources = i2208
  var i2211 = i2203[127]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 2) {
  request.r(i2211[i + 0], i2211[i + 1], 2, i2210, '')
  }
  i2202.AllScratches = i2210
  i2202.stepsDone = i2203[128]
  i2202.levelNo = i2203[129]
  i2202.partNo = i2203[130]
  request.r(i2203[131], i2203[132], 0, i2202, 'clothSfx')
  request.r(i2203[133], i2203[134], 0, i2202, 'doorCloseSfx')
  return i2202
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i2212 = root || request.c( 'ZoomPos' )
  var i2213 = data
  i2212.CameraPos = new pc.Vec3( i2213[0], i2213[1], i2213[2] )
  i2212.CameraFOV = i2213[3]
  return i2212
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i2222 = root || request.c( 'PlayableCTA' )
  var i2223 = data
  i2222.trigger = i2223[0]
  i2222.afterSeconds = i2223[1]
  i2222.afterTaps = i2223[2]
  request.r(i2223[3], i2223[4], 0, i2222, 'scratchProgress')
  i2222.scratchIndex = i2223[5]
  i2222.progressThreshold = i2223[6]
  request.r(i2223[7], i2223[8], 0, i2222, 'watchedTool')
  i2222.blockInputOnFire = !!i2223[9]
  i2222.refireOnEveryTap = !!i2223[10]
  i2222.refireDelay = i2223[11]
  i2222.showEndCard = !!i2223[12]
  request.r(i2223[13], i2223[14], 0, i2222, 'endCard')
  i2222.showEndCardOnProgressTrigger = !!i2223[15]
  i2222.showEndCardOnToolAppearTrigger = !!i2223[16]
  i2222.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i2223[17], i2222.onCtaFired)
  i2222.logWhenFired = !!i2223[18]
  return i2222
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2224 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2225 = data
  i2224.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2225[0], i2224.m_PersistentCalls)
  return i2224
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2226 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2227 = data
  var i2229 = i2227[0]
  var i2228 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2229.length; i += 1) {
    i2228.add(request.d('UnityEngine.Events.PersistentCall', i2229[i + 0]));
  }
  i2226.m_Calls = i2228
  return i2226
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2232 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2233 = data
  request.r(i2233[0], i2233[1], 0, i2232, 'm_Target')
  i2232.m_TargetAssemblyTypeName = i2233[2]
  i2232.m_MethodName = i2233[3]
  i2232.m_Mode = i2233[4]
  i2232.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2233[5], i2232.m_Arguments)
  i2232.m_CallState = i2233[6]
  return i2232
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i2234 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i2235 = data
  request.r(i2235[0], i2235[1], 0, i2234, 'MainCamera')
  i2234.RenderType = i2235[2]
  request.r(i2235[3], i2235[4], 0, i2234, 'ScratchSurfaceSprite')
  i2234.ScratchSurfaceSpriteHasAlpha = !!i2235[5]
  i2234.MaskProgressCutOffValue = i2235[6]
  request.r(i2235[7], i2235[8], 0, i2234, 'EraseTexture')
  i2234.EraseTextureScale = new pc.Vec2( i2235[9], i2235[10] )
  i2234.InputEnabled = !!i2235[11]
  request.r(i2235[12], i2235[13], 0, i2234, 'Card')
  i2234.Mode = i2235[14]
  request.r(i2235[15], i2235[16], 0, i2234, 'Progress')
  request.r(i2235[17], i2235[18], 0, i2234, 'MeshCard')
  request.r(i2235[19], i2235[20], 0, i2234, 'SpriteCard')
  request.r(i2235[21], i2235[22], 0, i2234, 'ImageCard')
  request.r(i2235[23], i2235[24], 0, i2234, 'MaskShader')
  request.r(i2235[25], i2235[26], 0, i2234, 'BrushShader')
  request.r(i2235[27], i2235[28], 0, i2234, 'MaskProgressShader')
  request.r(i2235[29], i2235[30], 0, i2234, 'MaskProgressCutOffShader')
  return i2234
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i2236 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i2237 = data
  request.r(i2237[0], i2237[1], 0, i2236, 'MainCamera')
  request.r(i2237[2], i2237[3], 0, i2236, 'Surface')
  i2236.RenderTextureQuality = i2237[4]
  request.r(i2237[5], i2237[6], 0, i2236, 'Eraser')
  request.r(i2237[7], i2237[8], 0, i2236, 'Progress')
  request.r(i2237[9], i2237[10], 0, i2236, 'ScratchSurface')
  request.r(i2237[11], i2237[12], 0, i2236, 'RenderTexture')
  i2236.BrushScale = new pc.Vec2( i2237[13], i2237[14] )
  request.r(i2237[15], i2237[16], 0, i2236, 'ToolTip')
  i2236.InputEnabled = !!i2237[17]
  i2236.IsScratching = !!i2237[18]
  i2236.useChangingScale = !!i2237[19]
  i2236.useGivenBrushScale = !!i2237[20]
  i2236.canSpreadMask = !!i2237[21]
  i2236.shouldPaintHoles = !!i2237[22]
  i2236.canRotateTip = !!i2237[23]
  i2236._mode = i2237[24]
  return i2236
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i2238 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i2239 = data
  request.r(i2239[0], i2239[1], 0, i2238, 'Card')
  i2238.currentProgress = i2239[2]
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i2241 = data
  i2240.textureMode = i2241[0]
  i2240.alignment = i2241[1]
  i2240.widthCurve = new pc.AnimationCurve( { keys_flow: i2241[2] } )
  i2240.colorGradient = i2241[3] ? new pc.ColorGradient(i2241[3][0], i2241[3][1], i2241[3][2]) : null
  var i2243 = i2241[4]
  var i2242 = []
  for(var i = 0; i < i2243.length; i += 3) {
    i2242.push( new pc.Vec3( i2243[i + 0], i2243[i + 1], i2243[i + 2] ) );
  }
  i2240.positions = i2242
  i2240.positionCount = i2241[5]
  i2240.widthMultiplier = i2241[6]
  i2240.startWidth = i2241[7]
  i2240.endWidth = i2241[8]
  i2240.numCornerVertices = i2241[9]
  i2240.numCapVertices = i2241[10]
  i2240.useWorldSpace = !!i2241[11]
  i2240.loop = !!i2241[12]
  i2240.startColor = new pc.Color(i2241[13], i2241[14], i2241[15], i2241[16])
  i2240.endColor = new pc.Color(i2241[17], i2241[18], i2241[19], i2241[20])
  i2240.generateLightingData = !!i2241[21]
  i2240.enabled = !!i2241[22]
  request.r(i2241[23], i2241[24], 0, i2240, 'sharedMaterial')
  var i2245 = i2241[25]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 2) {
  request.r(i2245[i + 0], i2245[i + 1], 2, i2244, '')
  }
  i2240.sharedMaterials = i2244
  i2240.receiveShadows = !!i2241[26]
  i2240.shadowCastingMode = i2241[27]
  i2240.sortingLayerID = i2241[28]
  i2240.sortingOrder = i2241[29]
  i2240.lightmapIndex = i2241[30]
  i2240.lightmapSceneIndex = i2241[31]
  i2240.lightmapScaleOffset = new pc.Vec4( i2241[32], i2241[33], i2241[34], i2241[35] )
  i2240.lightProbeUsage = i2241[36]
  i2240.reflectionProbeUsage = i2241[37]
  return i2240
}

Deserializers["TextureOffsetScroller"] = function (request, data, root) {
  var i2248 = root || request.c( 'TextureOffsetScroller' )
  var i2249 = data
  i2248.scrollSpeed = new pc.Vec2( i2249[0], i2249[1] )
  i2248.smoothStart = !!i2249[2]
  i2248.smoothDuration = i2249[3]
  i2248.textureName = i2249[4]
  i2248.useSharedMaterial = !!i2249[5]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2251 = data
  request.r(i2251[0], i2251[1], 0, i2250, 'animatorController')
  request.r(i2251[2], i2251[3], 0, i2250, 'avatar')
  i2250.updateMode = i2251[4]
  i2250.hasTransformHierarchy = !!i2251[5]
  i2250.applyRootMotion = !!i2251[6]
  var i2253 = i2251[7]
  var i2252 = []
  for(var i = 0; i < i2253.length; i += 2) {
  request.r(i2253[i + 0], i2253[i + 1], 2, i2252, '')
  }
  i2250.humanBones = i2252
  i2250.enabled = !!i2251[8]
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2257 = data
  i2256.color = new pc.Color(i2257[0], i2257[1], i2257[2], i2257[3])
  request.r(i2257[4], i2257[5], 0, i2256, 'sprite')
  i2256.flipX = !!i2257[6]
  i2256.flipY = !!i2257[7]
  i2256.drawMode = i2257[8]
  i2256.size = new pc.Vec2( i2257[9], i2257[10] )
  i2256.tileMode = i2257[11]
  i2256.adaptiveModeThreshold = i2257[12]
  i2256.maskInteraction = i2257[13]
  i2256.spriteSortPoint = i2257[14]
  i2256.enabled = !!i2257[15]
  request.r(i2257[16], i2257[17], 0, i2256, 'sharedMaterial')
  var i2259 = i2257[18]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 2) {
  request.r(i2259[i + 0], i2259[i + 1], 2, i2258, '')
  }
  i2256.sharedMaterials = i2258
  i2256.receiveShadows = !!i2257[19]
  i2256.shadowCastingMode = i2257[20]
  i2256.sortingLayerID = i2257[21]
  i2256.sortingOrder = i2257[22]
  i2256.lightmapIndex = i2257[23]
  i2256.lightmapSceneIndex = i2257[24]
  i2256.lightmapScaleOffset = new pc.Vec4( i2257[25], i2257[26], i2257[27], i2257[28] )
  i2256.lightProbeUsage = i2257[29]
  i2256.reflectionProbeUsage = i2257[30]
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i2261 = data
  var i2263 = i2261[0]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 3) {
    i2262.push( new pc.Vec3( i2263[i + 0], i2263[i + 1], i2263[i + 2] ) );
  }
  i2260.positions = i2262
  i2260.positionCount = i2261[1]
  i2260.time = i2261[2]
  i2260.startWidth = i2261[3]
  i2260.endWidth = i2261[4]
  i2260.widthMultiplier = i2261[5]
  i2260.autodestruct = !!i2261[6]
  i2260.emitting = !!i2261[7]
  i2260.numCornerVertices = i2261[8]
  i2260.numCapVertices = i2261[9]
  i2260.minVertexDistance = i2261[10]
  i2260.colorGradient = i2261[11] ? new pc.ColorGradient(i2261[11][0], i2261[11][1], i2261[11][2]) : null
  i2260.startColor = new pc.Color(i2261[12], i2261[13], i2261[14], i2261[15])
  i2260.endColor = new pc.Color(i2261[16], i2261[17], i2261[18], i2261[19])
  i2260.generateLightingData = !!i2261[20]
  i2260.textureMode = i2261[21]
  i2260.alignment = i2261[22]
  i2260.widthCurve = new pc.AnimationCurve( { keys_flow: i2261[23] } )
  i2260.enabled = !!i2261[24]
  request.r(i2261[25], i2261[26], 0, i2260, 'sharedMaterial')
  var i2265 = i2261[27]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 2) {
  request.r(i2265[i + 0], i2265[i + 1], 2, i2264, '')
  }
  i2260.sharedMaterials = i2264
  i2260.receiveShadows = !!i2261[28]
  i2260.shadowCastingMode = i2261[29]
  i2260.sortingLayerID = i2261[30]
  i2260.sortingOrder = i2261[31]
  i2260.lightmapIndex = i2261[32]
  i2260.lightmapSceneIndex = i2261[33]
  i2260.lightmapScaleOffset = new pc.Vec4( i2261[34], i2261[35], i2261[36], i2261[37] )
  i2260.lightProbeUsage = i2261[38]
  i2260.reflectionProbeUsage = i2261[39]
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2267 = data
  i2266.pivot = new pc.Vec2( i2267[0], i2267[1] )
  i2266.anchorMin = new pc.Vec2( i2267[2], i2267[3] )
  i2266.anchorMax = new pc.Vec2( i2267[4], i2267[5] )
  i2266.sizeDelta = new pc.Vec2( i2267[6], i2267[7] )
  i2266.anchoredPosition3D = new pc.Vec3( i2267[8], i2267[9], i2267[10] )
  i2266.rotation = new pc.Quat(i2267[11], i2267[12], i2267[13], i2267[14])
  i2266.scale = new pc.Vec3( i2267[15], i2267[16], i2267[17] )
  return i2266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2269 = data
  i2268.planeDistance = i2269[0]
  i2268.referencePixelsPerUnit = i2269[1]
  i2268.isFallbackOverlay = !!i2269[2]
  i2268.renderMode = i2269[3]
  i2268.renderOrder = i2269[4]
  i2268.sortingLayerName = i2269[5]
  i2268.sortingOrder = i2269[6]
  i2268.scaleFactor = i2269[7]
  request.r(i2269[8], i2269[9], 0, i2268, 'worldCamera')
  i2268.overrideSorting = !!i2269[10]
  i2268.pixelPerfect = !!i2269[11]
  i2268.targetDisplay = i2269[12]
  i2268.overridePixelPerfect = !!i2269[13]
  i2268.enabled = !!i2269[14]
  return i2268
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2270 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2271 = data
  i2270.m_UiScaleMode = i2271[0]
  i2270.m_ReferencePixelsPerUnit = i2271[1]
  i2270.m_ScaleFactor = i2271[2]
  i2270.m_ReferenceResolution = new pc.Vec2( i2271[3], i2271[4] )
  i2270.m_ScreenMatchMode = i2271[5]
  i2270.m_MatchWidthOrHeight = i2271[6]
  i2270.m_PhysicalUnit = i2271[7]
  i2270.m_FallbackScreenDPI = i2271[8]
  i2270.m_DefaultSpriteDPI = i2271[9]
  i2270.m_DynamicPixelsPerUnit = i2271[10]
  i2270.m_PresetInfoIsWorld = !!i2271[11]
  return i2270
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2272 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2273 = data
  i2272.m_IgnoreReversedGraphics = !!i2273[0]
  i2272.m_BlockingObjects = i2273[1]
  i2272.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2273[2] )
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2275 = data
  i2274.cullTransparentMesh = !!i2275[0]
  return i2274
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2276 = root || request.c( 'UnityEngine.UI.Text' )
  var i2277 = data
  i2276.m_FontData = request.d('UnityEngine.UI.FontData', i2277[0], i2276.m_FontData)
  i2276.m_Text = i2277[1]
  request.r(i2277[2], i2277[3], 0, i2276, 'm_Material')
  i2276.m_Maskable = !!i2277[4]
  i2276.m_Color = new pc.Color(i2277[5], i2277[6], i2277[7], i2277[8])
  i2276.m_RaycastTarget = !!i2277[9]
  i2276.m_RaycastPadding = new pc.Vec4( i2277[10], i2277[11], i2277[12], i2277[13] )
  return i2276
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2278 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2279 = data
  request.r(i2279[0], i2279[1], 0, i2278, 'm_Font')
  i2278.m_FontSize = i2279[2]
  i2278.m_FontStyle = i2279[3]
  i2278.m_BestFit = !!i2279[4]
  i2278.m_MinSize = i2279[5]
  i2278.m_MaxSize = i2279[6]
  i2278.m_Alignment = i2279[7]
  i2278.m_AlignByGeometry = !!i2279[8]
  i2278.m_RichText = !!i2279[9]
  i2278.m_HorizontalOverflow = i2279[10]
  i2278.m_VerticalOverflow = i2279[11]
  i2278.m_LineSpacing = i2279[12]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2281 = data
  i2280.usedByComposite = !!i2281[0]
  i2280.autoTiling = !!i2281[1]
  i2280.size = new pc.Vec2( i2281[2], i2281[3] )
  i2280.edgeRadius = i2281[4]
  i2280.enabled = !!i2281[5]
  i2280.isTrigger = !!i2281[6]
  i2280.usedByEffector = !!i2281[7]
  i2280.density = i2281[8]
  i2280.offset = new pc.Vec2( i2281[9], i2281[10] )
  request.r(i2281[11], i2281[12], 0, i2280, 'material')
  return i2280
}

Deserializers["RotaryTimerKnob"] = function (request, data, root) {
  var i2282 = root || request.c( 'RotaryTimerKnob' )
  var i2283 = data
  i2282.canDrag = !!i2283[0]
  i2282.numSteps = i2283[1]
  i2282.onlyClockwise = !!i2283[2]
  request.r(i2283[3], i2283[4], 0, i2282, 'clickSound')
  i2282.enableVibration = !!i2283[5]
  request.r(i2283[6], i2283[7], 0, i2282, 'stepText')
  i2282.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2283[8], i2282.OnComplete)
  request.r(i2283[9], i2283[10], 0, i2282, 'handIndication')
  return i2282
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2284 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2285 = data
  request.r(i2285[0], i2285[1], 0, i2284, 'm_ObjectArgument')
  i2284.m_ObjectArgumentAssemblyTypeName = i2285[2]
  i2284.m_IntArgument = i2285[3]
  i2284.m_FloatArgument = i2285[4]
  i2284.m_StringArgument = i2285[5]
  i2284.m_BoolArgument = !!i2285[6]
  return i2284
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i2286 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i2287 = data
  request.r(i2287[0], i2287[1], 0, i2286, 'm_RootBone')
  var i2289 = i2287[2]
  var i2288 = []
  for(var i = 0; i < i2289.length; i += 2) {
  request.r(i2289[i + 0], i2289[i + 1], 2, i2288, '')
  }
  i2286.m_BoneTransforms = i2288
  i2286.m_AlwaysUpdate = !!i2287[3]
  i2286.m_AutoRebind = !!i2287[4]
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2291 = data
  i2290.frontSortingLayerID = i2291[0]
  i2290.frontSortingOrder = i2291[1]
  i2290.backSortingLayerID = i2291[2]
  i2290.backSortingOrder = i2291[3]
  i2290.alphaCutoff = i2291[4]
  request.r(i2291[5], i2291[6], 0, i2290, 'sprite')
  i2290.tileMode = i2291[7]
  i2290.isCustomRangeActive = !!i2291[8]
  i2290.spriteSortPoint = i2291[9]
  i2290.enabled = !!i2291[10]
  request.r(i2291[11], i2291[12], 0, i2290, 'sharedMaterial')
  var i2293 = i2291[13]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 2) {
  request.r(i2293[i + 0], i2293[i + 1], 2, i2292, '')
  }
  i2290.sharedMaterials = i2292
  i2290.receiveShadows = !!i2291[14]
  i2290.shadowCastingMode = i2291[15]
  i2290.sortingLayerID = i2291[16]
  i2290.sortingOrder = i2291[17]
  i2290.lightmapIndex = i2291[18]
  i2290.lightmapSceneIndex = i2291[19]
  i2290.lightmapScaleOffset = new pc.Vec4( i2291[20], i2291[21], i2291[22], i2291[23] )
  i2290.lightProbeUsage = i2291[24]
  i2290.reflectionProbeUsage = i2291[25]
  return i2290
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i2294 = root || request.c( 'BasicDrag' )
  var i2295 = data
  i2294.canDrag = !!i2295[0]
  i2294.dragByDelta = !!i2295[1]
  i2294.isDragging = !!i2295[2]
  i2294.moveWithPointer = !!i2295[3]
  i2294.canReturn = !!i2295[4]
  i2294.jumpOnReturn = !!i2295[5]
  i2294.returnTime = i2295[6]
  i2294.Tool_Offset = new pc.Vec3( i2295[7], i2295[8], i2295[9] )
  i2294.canScaleIncrease = !!i2295[10]
  i2294.Self_ScaleNew = new pc.Vec3( i2295[11], i2295[12], i2295[13] )
  i2294.canRotateOnPick = !!i2295[14]
  i2294.startRot = new pc.Vec3( i2295[15], i2295[16], i2295[17] )
  i2294.newRot = new pc.Vec3( i2295[18], i2295[19], i2295[20] )
  var i2297 = i2295[21]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 2) {
  request.r(i2297[i + 0], i2297[i + 1], 2, i2296, '')
  }
  i2294.childSprite = i2296
  request.r(i2295[22], i2295[23], 0, i2294, 'ToolSelectClip')
  request.r(i2295[24], i2295[25], 0, i2294, 'ToolLoopClip')
  request.r(i2295[26], i2295[27], 0, i2294, 'thisParticles')
  i2294.onDragparticle = !!i2295[28]
  request.r(i2295[29], i2295[30], 0, i2294, 'dragParticles')
  request.r(i2295[31], i2295[32], 0, i2294, 'anim')
  i2294.startPos = new pc.Vec3( i2295[33], i2295[34], i2295[35] )
  i2294.startScale = new pc.Vec3( i2295[36], i2295[37], i2295[38] )
  i2294.Vibration = !!i2295[39]
  i2294.isPlacedCannotMove = !!i2295[40]
  i2294.isObjectMovingWhileDragging = !!i2295[41]
  i2294.OnMouseDownEvent = request.d('System.Action', i2295[42], i2294.OnMouseDownEvent)
  i2294.OnMouseUpEvent = request.d('System.Action', i2295[43], i2294.OnMouseUpEvent)
  i2294.ProgStartEvent = request.d('System.Action', i2295[44], i2294.ProgStartEvent)
  i2294.ProgEndEvent = request.d('System.Action', i2295[45], i2294.ProgEndEvent)
  i2294.canCallMouseUpWhenGamePaused = !!i2295[46]
  i2294.ClampX_L = i2295[47]
  i2294.ClampX_H = i2295[48]
  i2294.ClampY_L = i2295[49]
  i2294.ClampY_H = i2295[50]
  i2294.startOrder = i2295[51]
  i2294.dontResetItIsInCollider = !!i2295[52]
  request.r(i2295[53], i2295[54], 0, i2294, 'thisCollider')
  request.r(i2295[55], i2295[56], 0, i2294, 'thisSR')
  i2294.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i2295[57], i2294.OnMouseDownEventIndependentFromCanDrag)
  return i2294
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2300 = root || request.c( 'System.Action' )
  var i2301 = data
  return i2300
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i2302 = root || request.c( 'BD_Clamp' )
  var i2303 = data
  i2302.ClampX_L = i2303[0]
  i2302.ClampX_H = i2303[1]
  i2302.ClampY_L = i2303[2]
  i2302.ClampY_H = i2303[3]
  return i2302
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i2304 = root || request.c( 'BD_CameraFollow' )
  var i2305 = data
  request.r(i2305[0], i2305[1], 0, i2304, 'Tool')
  request.r(i2305[2], i2305[3], 0, i2304, 'Pivot')
  i2304.FOV = i2305[4]
  i2304.Y_L = i2305[5]
  i2304.Y_H = i2305[6]
  i2304.X_L = i2305[7]
  i2304.X_R = i2305[8]
  i2304.startDelay = i2305[9]
  i2304.duration = i2305[10]
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2307 = data
  i2306.bodyType = i2307[0]
  request.r(i2307[1], i2307[2], 0, i2306, 'material')
  i2306.simulated = !!i2307[3]
  i2306.useAutoMass = !!i2307[4]
  i2306.mass = i2307[5]
  i2306.drag = i2307[6]
  i2306.angularDrag = i2307[7]
  i2306.gravityScale = i2307[8]
  i2306.collisionDetectionMode = i2307[9]
  i2306.sleepMode = i2307[10]
  i2306.constraints = i2307[11]
  return i2306
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i2308 = root || request.c( 'PlaceItem' )
  var i2309 = data
  request.r(i2309[0], i2309[1], 0, i2308, 'thisDrag')
  request.r(i2309[2], i2309[3], 0, i2308, 'Target')
  request.r(i2309[4], i2309[5], 0, i2308, 'Clip')
  i2308.jumpOnPlace = !!i2309[6]
  i2308.jumpHeight = i2309[7]
  i2308.jumpDuration = i2309[8]
  i2308.settleDuration = i2309[9]
  i2308.isPlaced = !!i2309[10]
  i2308.isInsideCollider = !!i2309[11]
  i2308.changeScaleOnPlace = !!i2309[12]
  request.r(i2309[13], i2309[14], 0, i2308, 'item')
  i2308.newScaleOnPlace = new pc.Vec3( i2309[15], i2309[16], i2309[17] )
  i2308.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i2309[18], i2308.OnPlaced)
  return i2308
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i2310 = root || request.c( 'ActionOnTap' )
  var i2311 = data
  i2310.OnTap = request.d('UnityEngine.Events.UnityEvent', i2311[0], i2310.OnTap)
  i2310.OnTapExtra = request.d('System.Action', i2311[1], i2310.OnTapExtra)
  return i2310
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2312 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2313 = data
  i2312.targetIsSelf = !!i2313[0]
  request.r(i2313[1], i2313[2], 0, i2312, 'targetGO')
  i2312.tweenTargetIsTargetGO = !!i2313[3]
  i2312.delay = i2313[4]
  i2312.duration = i2313[5]
  i2312.easeType = i2313[6]
  i2312.easeCurve = new pc.AnimationCurve( { keys_flow: i2313[7] } )
  i2312.loopType = i2313[8]
  i2312.loops = i2313[9]
  i2312.id = i2313[10]
  i2312.isRelative = !!i2313[11]
  i2312.isFrom = !!i2313[12]
  i2312.isIndependentUpdate = !!i2313[13]
  i2312.autoKill = !!i2313[14]
  i2312.autoGenerate = !!i2313[15]
  i2312.isActive = !!i2313[16]
  i2312.isValid = !!i2313[17]
  request.r(i2313[18], i2313[19], 0, i2312, 'target')
  i2312.animationType = i2313[20]
  i2312.targetType = i2313[21]
  i2312.forcedTargetType = i2313[22]
  i2312.autoPlay = !!i2313[23]
  i2312.useTargetAsV3 = !!i2313[24]
  i2312.endValueFloat = i2313[25]
  i2312.endValueV3 = new pc.Vec3( i2313[26], i2313[27], i2313[28] )
  i2312.endValueV2 = new pc.Vec2( i2313[29], i2313[30] )
  i2312.endValueColor = new pc.Color(i2313[31], i2313[32], i2313[33], i2313[34])
  i2312.endValueString = i2313[35]
  i2312.endValueRect = UnityEngine.Rect.MinMaxRect(i2313[36], i2313[37], i2313[38], i2313[39])
  request.r(i2313[40], i2313[41], 0, i2312, 'endValueTransform')
  i2312.optionalBool0 = !!i2313[42]
  i2312.optionalBool1 = !!i2313[43]
  i2312.optionalFloat0 = i2313[44]
  i2312.optionalInt0 = i2313[45]
  i2312.optionalRotationMode = i2313[46]
  i2312.optionalScrambleMode = i2313[47]
  i2312.optionalShakeRandomnessMode = i2313[48]
  i2312.optionalString = i2313[49]
  i2312.updateType = i2313[50]
  i2312.isSpeedBased = !!i2313[51]
  i2312.hasOnStart = !!i2313[52]
  i2312.hasOnPlay = !!i2313[53]
  i2312.hasOnUpdate = !!i2313[54]
  i2312.hasOnStepComplete = !!i2313[55]
  i2312.hasOnComplete = !!i2313[56]
  i2312.hasOnTweenCreated = !!i2313[57]
  i2312.hasOnRewind = !!i2313[58]
  i2312.onStart = request.d('UnityEngine.Events.UnityEvent', i2313[59], i2312.onStart)
  i2312.onPlay = request.d('UnityEngine.Events.UnityEvent', i2313[60], i2312.onPlay)
  i2312.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2313[61], i2312.onUpdate)
  i2312.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2313[62], i2312.onStepComplete)
  i2312.onComplete = request.d('UnityEngine.Events.UnityEvent', i2313[63], i2312.onComplete)
  i2312.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2313[64], i2312.onTweenCreated)
  i2312.onRewind = request.d('UnityEngine.Events.UnityEvent', i2313[65], i2312.onRewind)
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2315 = data
  i2314.radius = i2315[0]
  i2314.enabled = !!i2315[1]
  i2314.isTrigger = !!i2315[2]
  i2314.usedByEffector = !!i2315[3]
  i2314.density = i2315[4]
  i2314.offset = new pc.Vec2( i2315[5], i2315[6] )
  request.r(i2315[7], i2315[8], 0, i2314, 'material')
  return i2314
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i2316 = root || request.c( 'PlayParticlesOnCollision' )
  var i2317 = data
  request.r(i2317[0], i2317[1], 0, i2316, 'Target')
  request.r(i2317[2], i2317[3], 0, i2316, 'ParticlePrefab')
  i2316.destroyIt = !!i2317[4]
  i2316.stayAtPlace = !!i2317[5]
  i2316.disableOnCollision = !!i2317[6]
  i2316.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i2317[7], i2316.OnCollisionEvent)
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i2319 = data
  i2318.usedByComposite = !!i2319[0]
  i2318.autoTiling = !!i2319[1]
  var i2321 = i2319[2]
  var i2320 = []
  for(var i = 0; i < i2321.length; i += 1) {
  var i2323 = i2321[i + 0]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 2) {
    i2322.push( new pc.Vec2( i2323[i + 0], i2323[i + 1] ) );
  }
    i2320.push( i2322 );
  }
  i2318.points = i2320
  i2318.enabled = !!i2319[3]
  i2318.isTrigger = !!i2319[4]
  i2318.usedByEffector = !!i2319[5]
  i2318.density = i2319[6]
  i2318.offset = new pc.Vec2( i2319[7], i2319[8] )
  request.r(i2319[9], i2319[10], 0, i2318, 'material')
  return i2318
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i2330 = root || request.c( 'PlaySfxOnCollision' )
  var i2331 = data
  request.r(i2331[0], i2331[1], 0, i2330, 'Tip')
  i2330.Mode = i2331[2]
  request.r(i2331[3], i2331[4], 0, i2330, 'DragInput')
  request.r(i2331[5], i2331[6], 0, i2330, 'Source')
  i2330.startVol = i2331[7]
  i2330.targetVol = i2331[8]
  i2330.duration = i2331[9]
  request.r(i2331[10], i2331[11], 0, i2330, 'Particles')
  i2330.isDone = !!i2331[12]
  i2330.isInArea = !!i2331[13]
  i2330.isPlaying = !!i2331[14]
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2333 = data
  request.r(i2333[0], i2333[1], 0, i2332, 'clip')
  request.r(i2333[2], i2333[3], 0, i2332, 'outputAudioMixerGroup')
  i2332.playOnAwake = !!i2333[4]
  i2332.loop = !!i2333[5]
  i2332.time = i2333[6]
  i2332.volume = i2333[7]
  i2332.pitch = i2333[8]
  i2332.enabled = !!i2333[9]
  return i2332
}

Deserializers["SewingCol"] = function (request, data, root) {
  var i2334 = root || request.c( 'SewingCol' )
  var i2335 = data
  request.r(i2335[0], i2335[1], 0, i2334, 'targetTip')
  var i2337 = i2335[2]
  var i2336 = []
  for(var i = 0; i < i2337.length; i += 2) {
  request.r(i2337[i + 0], i2337[i + 1], 2, i2336, '')
  }
  i2334.Anim_Items = i2336
  i2334.isDone = !!i2335[3]
  request.r(i2335[4], i2335[5], 0, i2334, 'sfx')
  return i2334
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i2340 = root || request.c( 'OutlinePulse' )
  var i2341 = data
  i2340.smallThickness = i2341[0]
  i2340.largeThickness = i2341[1]
  i2340.transitionSpeed = i2341[2]
  i2340.animationSpeed = i2341[3]
  i2340.isThickOutline = !!i2341[4]
  i2340.animate = !!i2341[5]
  i2340.hideSpriteOnly = !!i2341[6]
  return i2340
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i2342 = root || request.c( 'BD_Action' )
  var i2343 = data
  i2342.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i2343[0], i2342.OnMouseDownEvent)
  i2342.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i2343[1], i2342.OnMouseUpEvent)
  i2342.setToolLayer = !!i2343[2]
  request.r(i2343[3], i2343[4], 0, i2342, 'tool_SP')
  return i2342
}

Deserializers["Level1_SurfController"] = function (request, data, root) {
  var i2344 = root || request.c( 'Level1_SurfController' )
  var i2345 = data
  i2344.target_rotZ = i2345[0]
  i2344.rotationDuration = i2345[1]
  i2344.rotationEase = i2345[2]
  request.r(i2345[3], i2345[4], 0, i2344, 'maskItem')
  i2344.maskTarget_posY = i2345[5]
  i2344.maskMoveDuration = i2345[6]
  i2344.requiredHoldTime = i2345[7]
  i2344.minRotationForProgress = i2345[8]
  request.r(i2345[9], i2345[10], 0, i2344, 'tipCollider')
  request.r(i2345[11], i2345[12], 0, i2344, 'targetZoneCollider')
  request.r(i2345[13], i2345[14], 0, i2344, 'surf_Particles')
  request.r(i2345[15], i2345[16], 0, i2344, 'surf_SubEmitter')
  request.r(i2345[17], i2345[18], 0, i2344, 'Indication')
  i2344.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2345[19], i2344.OnComplete)
  i2344.currentHoldProgress = i2345[20]
  return i2344
}

Deserializers["BD_Fold"] = function (request, data, root) {
  var i2346 = root || request.c( 'BD_Fold' )
  var i2347 = data
  i2346.canDrag = !!i2347[0]
  i2346.canFoldBottomLeft = !!i2347[1]
  i2346.canFoldBottomRight = !!i2347[2]
  i2346.canFoldTopLeft = !!i2347[3]
  i2346.canFoldTopRight = !!i2347[4]
  request.r(i2347[5], i2347[6], 0, i2346, 'Indication')
  request.r(i2347[7], i2347[8], 0, i2346, 'backSideSprite')
  i2346.maxSideOffset = i2347[9]
  i2346.foldBackDuration = i2347[10]
  i2346.instantFoldAmount = i2347[11]
  i2346.useSmoothRelease = !!i2347[12]
  i2346.completionLimit = i2347[13]
  i2346.afterCompletionTravelTo = i2347[14]
  i2346.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2347[15], i2346.OnComplete)
  i2346.currentProgress = i2347[16]
  i2346.innerShadowStrength = i2347[17]
  request.r(i2347[18], i2347[19], 0, i2346, 'dragAudioSource')
  request.r(i2347[20], i2347[21], 0, i2346, 'dragStartClip')
  request.r(i2347[22], i2347[23], 0, i2346, 'completionClip')
  i2346.audioFadeSpeed = i2347[24]
  i2346.audioMoveThreshold = i2347[25]
  i2346.hapticInterval = i2347[26]
  return i2346
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i2348 = root || request.c( 'BD_Progress' )
  var i2349 = data
  var i2351 = i2349[0]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 1) {
    i2350.push( request.d('ScratchData', i2351[i + 0]) );
  }
  i2348.AllScratches = i2350
  i2348.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i2349[1], i2348.OnScratchComplete)
  i2348.isProgDone = !!i2349[2]
  i2348.canCallComplete = !!i2349[3]
  i2348.CollectiveAppear = !!i2349[4]
  i2348.tipControl = !!i2349[5]
  i2348.progressControl = !!i2349[6]
  request.r(i2349[7], i2349[8], 0, i2348, 'thisDrag')
  i2348.CompleteEvent = request.d('System.Action', i2349[9], i2348.CompleteEvent)
  i2348.SubCompleteEvent = request.d('System.Action', i2349[10], i2348.SubCompleteEvent)
  return i2348
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i2354 = root || request.c( 'ScratchData' )
  var i2355 = data
  request.r(i2355[0], i2355[1], 0, i2354, 'ScratchManager')
  i2354.scratchLimit = i2355[2]
  i2354.isComplete = !!i2355[3]
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2357 = data
  request.r(i2357[0], i2357[1], 0, i2356, 'sharedMesh')
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2359 = data
  request.r(i2359[0], i2359[1], 0, i2358, 'additionalVertexStreams')
  i2358.enabled = !!i2359[2]
  request.r(i2359[3], i2359[4], 0, i2358, 'sharedMaterial')
  var i2361 = i2359[5]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 2) {
  request.r(i2361[i + 0], i2361[i + 1], 2, i2360, '')
  }
  i2358.sharedMaterials = i2360
  i2358.receiveShadows = !!i2359[6]
  i2358.shadowCastingMode = i2359[7]
  i2358.sortingLayerID = i2359[8]
  i2358.sortingOrder = i2359[9]
  i2358.lightmapIndex = i2359[10]
  i2358.lightmapSceneIndex = i2359[11]
  i2358.lightmapScaleOffset = new pc.Vec4( i2359[12], i2359[13], i2359[14], i2359[15] )
  i2358.lightProbeUsage = i2359[16]
  i2358.reflectionProbeUsage = i2359[17]
  return i2358
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i2362 = root || request.c( 'StaticFixedPipe' )
  var i2363 = data
  request.r(i2363[0], i2363[1], 0, i2362, 'meshRenderer')
  request.r(i2363[2], i2363[3], 0, i2362, 'toolTransform')
  request.r(i2363[4], i2363[5], 0, i2362, 'toolDirectionPoint')
  request.r(i2363[6], i2363[7], 0, i2362, 'fixedEndPoint')
  i2362.segmentCount = i2363[8]
  i2362.totalLength = i2363[9]
  i2362.constraintIterations = i2363[10]
  i2362.gravity = new pc.Vec3( i2363[11], i2363[12], i2363[13] )
  i2362.pipeWidth = i2363[14]
  return i2362
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i2364 = root || request.c( 'BD_SpriteChange' )
  var i2365 = data
  request.r(i2365[0], i2365[1], 0, i2364, 'BD')
  request.r(i2365[2], i2365[3], 0, i2364, 'SR')
  request.r(i2365[4], i2365[5], 0, i2364, 'Default')
  request.r(i2365[6], i2365[7], 0, i2364, 'Picked')
  i2364.resetOnRelease = !!i2365[8]
  return i2364
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i2366 = root || request.c( 'MenuLevel' )
  var i2367 = data
  request.r(i2367[0], i2367[1], 0, i2366, 'menuLevelBtnUpdate')
  var i2369 = i2367[2]
  var i2368 = []
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.push( request.d('MenuLevelData', i2369[i + 0]) );
  }
  i2366.AllSteps = i2368
  request.r(i2367[3], i2367[4], 0, i2366, 'buttonparent')
  var i2371 = i2367[5]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 2) {
  request.r(i2371[i + 0], i2371[i + 1], 2, i2370, '')
  }
  i2366.BtnsDotweenAnims = i2370
  var i2373 = i2367[6]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 2) {
  request.r(i2373[i + 0], i2373[i + 1], 2, i2372, '')
  }
  i2366.BtnsCols = i2372
  request.r(i2367[7], i2367[8], 0, i2366, 'mainGameView')
  request.r(i2367[9], i2367[10], 0, i2366, 'Storyboard')
  request.r(i2367[11], i2367[12], 0, i2366, 'BgMusic')
  request.r(i2367[13], i2367[14], 0, i2366, 'BgStoryMusic')
  request.r(i2367[15], i2367[16], 0, i2366, 'Hand_Tut1')
  request.r(i2367[17], i2367[18], 0, i2366, 'Button_Hand')
  var i2375 = i2367[19]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 2) {
  request.r(i2375[i + 0], i2375[i + 1], 2, i2374, '')
  }
  i2366.itemEnable_Onstart = i2374
  var i2377 = i2367[20]
  var i2376 = []
  for(var i = 0; i < i2377.length; i += 2) {
  request.r(i2377[i + 0], i2377[i + 1], 2, i2376, '')
  }
  i2366.itemDisable_Onstart = i2376
  var i2379 = i2367[21]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 2) {
  request.r(i2379[i + 0], i2379[i + 1], 2, i2378, '')
  }
  i2366.itemEnable_Oncomplete = i2378
  var i2381 = i2367[22]
  var i2380 = []
  for(var i = 0; i < i2381.length; i += 2) {
  request.r(i2381[i + 0], i2381[i + 1], 2, i2380, '')
  }
  i2366.itemDisable_Oncomplete = i2380
  i2366.levelKey = i2367[23]
  i2366.revealDirtyHoldTime = i2367[24]
  return i2366
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i2384 = root || request.c( 'MenuLevelData' )
  var i2385 = data
  i2384.Name = i2385[0]
  request.r(i2385[1], i2385[2], 0, i2384, 'UiBtn')
  request.r(i2385[3], i2385[4], 0, i2384, 'TickBtn')
  request.r(i2385[5], i2385[6], 0, i2384, 'ExclamationIcon')
  var i2387 = i2385[7]
  var i2386 = []
  for(var i = 0; i < i2387.length; i += 2) {
  request.r(i2387[i + 0], i2387[i + 1], 2, i2386, '')
  }
  i2384.Item_Dirty = i2386
  var i2389 = i2385[8]
  var i2388 = []
  for(var i = 0; i < i2389.length; i += 2) {
  request.r(i2389[i + 0], i2389[i + 1], 2, i2388, '')
  }
  i2384.Item_Clean = i2388
  request.r(i2385[9], i2385[10], 0, i2384, 'CompleteParticle')
  return i2384
}

Deserializers["IntroLevelAnim"] = function (request, data, root) {
  var i2394 = root || request.c( 'IntroLevelAnim' )
  var i2395 = data
  request.r(i2395[0], i2395[1], 0, i2394, 'menuLevel')
  i2394.lvlkey = i2395[2]
  request.r(i2395[3], i2395[4], 0, i2394, 'DressChangeObj')
  request.r(i2395[5], i2395[6], 0, i2394, 'DressChangeClip')
  return i2394
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i2396 = root || request.c( 'Level_PoseController' )
  var i2397 = data
  var i2399 = i2397[0]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 2) {
  request.r(i2399[i + 0], i2399[i + 1], 2, i2398, '')
  }
  i2396.itemToShow = i2398
  var i2401 = i2397[1]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 2) {
  request.r(i2401[i + 0], i2401[i + 1], 2, i2400, '')
  }
  i2396.itemToHide = i2400
  i2396.stepTarget = i2397[2]
  return i2396
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i2402 = root || request.c( 'BD_AnimationHelper' )
  var i2403 = data
  i2402.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i2403[0], i2402.OnAnimationComplete)
  request.r(i2403[1], i2403[2], 0, i2402, 'sfxClip')
  return i2402
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i2404 = root || request.c( 'SpriteButton' )
  var i2405 = data
  i2404.isLocked = !!i2405[0]
  i2404.lockMsg = i2405[1]
  i2404.onClick = request.d('UnityEngine.Events.UnityEvent', i2405[2], i2404.onClick)
  i2404.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i2405[3], i2404.onLockedClick)
  i2404.isLevelBtnSfx = !!i2405[4]
  request.r(i2405[5], i2405[6], 0, i2404, 'pivot')
  i2404.reductionChange = i2405[7]
  i2404.animationDuration = i2405[8]
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2407 = data
  i2406.name = i2407[0]
  i2406.atlasId = i2407[1]
  i2406.mipmapCount = i2407[2]
  i2406.hdr = !!i2407[3]
  i2406.size = i2407[4]
  i2406.anisoLevel = i2407[5]
  i2406.filterMode = i2407[6]
  var i2409 = i2407[7]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 4) {
    i2408.push( UnityEngine.Rect.MinMaxRect(i2409[i + 0], i2409[i + 1], i2409[i + 2], i2409[i + 3]) );
  }
  i2406.rects = i2408
  i2406.wrapU = i2407[8]
  i2406.wrapV = i2407[9]
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2413 = data
  i2412.name = i2413[0]
  i2412.index = i2413[1]
  i2412.startup = !!i2413[2]
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2415 = data
  i2414.aspect = i2415[0]
  i2414.orthographic = !!i2415[1]
  i2414.orthographicSize = i2415[2]
  i2414.backgroundColor = new pc.Color(i2415[3], i2415[4], i2415[5], i2415[6])
  i2414.nearClipPlane = i2415[7]
  i2414.farClipPlane = i2415[8]
  i2414.fieldOfView = i2415[9]
  i2414.depth = i2415[10]
  i2414.clearFlags = i2415[11]
  i2414.cullingMask = i2415[12]
  i2414.rect = i2415[13]
  request.r(i2415[14], i2415[15], 0, i2414, 'targetTexture')
  i2414.usePhysicalProperties = !!i2415[16]
  i2414.focalLength = i2415[17]
  i2414.sensorSize = new pc.Vec2( i2415[18], i2415[19] )
  i2414.lensShift = new pc.Vec2( i2415[20], i2415[21] )
  i2414.gateFit = i2415[22]
  i2414.commandBufferCount = i2415[23]
  i2414.cameraType = i2415[24]
  i2414.enabled = !!i2415[25]
  return i2414
}

Deserializers["CameraController"] = function (request, data, root) {
  var i2416 = root || request.c( 'CameraController' )
  var i2417 = data
  request.r(i2417[0], i2417[1], 0, i2416, 'cam')
  i2416.defaultPosition = new pc.Vec3( i2417[2], i2417[3], i2417[4] )
  i2416.defaultSize = i2417[5]
  i2416.defaultFOV = i2417[6]
  i2416.defaultDuration = i2417[7]
  i2416.defaultEase = i2417[8]
  return i2416
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i2418 = root || request.c( 'MusicSource' )
  var i2419 = data
  request.r(i2419[0], i2419[1], 0, i2418, 'source')
  return i2418
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i2420 = root || request.c( 'UI_Manager' )
  var i2421 = data
  i2420.levelCompleted = !!i2421[0]
  i2420.isPauseActive = !!i2421[1]
  i2420.loadIndex = i2421[2]
  request.r(i2421[3], i2421[4], 0, i2420, 'removeAdsButton')
  request.r(i2421[5], i2421[6], 0, i2420, 'pauseButton')
  request.r(i2421[7], i2421[8], 0, i2420, 'Fade_Img')
  request.r(i2421[9], i2421[10], 0, i2420, 'TopBarAnim')
  request.r(i2421[11], i2421[12], 0, i2420, 'MainPanel')
  request.r(i2421[13], i2421[14], 0, i2420, 'PausePanel')
  request.r(i2421[15], i2421[16], 0, i2420, 'PausePopUp')
  request.r(i2421[17], i2421[18], 0, i2420, 'PauseCanvasGroup')
  request.r(i2421[19], i2421[20], 0, i2420, 'RateUsPanel')
  request.r(i2421[21], i2421[22], 0, i2420, 'RateUsPopUp')
  request.r(i2421[23], i2421[24], 0, i2420, 'RemoveAdsPanel')
  request.r(i2421[25], i2421[26], 0, i2420, 'RemoveAdsPopUp')
  request.r(i2421[27], i2421[28], 0, i2420, 'RemoveAdsCanvasGroup')
  var i2423 = i2421[29]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 2) {
  request.r(i2423[i + 0], i2423[i + 1], 2, i2422, '')
  }
  i2420.RemoveAdsAnims = i2422
  var i2425 = i2421[30]
  var i2424 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2425.length; i += 2) {
  request.r(i2425[i + 0], i2425[i + 1], 1, i2424, '')
  }
  i2420.thingsToDisableWhenCompletePanel = i2424
  request.r(i2421[31], i2421[32], 0, i2420, 'CompletePanel')
  request.r(i2421[33], i2421[34], 0, i2420, 'LevelIcon')
  request.r(i2421[35], i2421[36], 0, i2420, 'CompleteParticles')
  request.r(i2421[37], i2421[38], 0, i2420, 'progressBar')
  request.r(i2421[39], i2421[40], 0, i2420, 'progressText')
  request.r(i2421[41], i2421[42], 0, i2420, 'toolIcon1')
  request.r(i2421[43], i2421[44], 0, i2420, 'toolIcon2')
  request.r(i2421[45], i2421[46], 0, i2420, 'toolIcon3')
  request.r(i2421[47], i2421[48], 0, i2420, 'target1')
  request.r(i2421[49], i2421[50], 0, i2420, 'target2')
  i2420.toolMoveDuration = i2421[51]
  i2420.currentIndex = i2421[52]
  var i2427 = i2421[53]
  var i2426 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2427.length; i += 2) {
  request.r(i2427[i + 0], i2427[i + 1], 1, i2426, '')
  }
  i2420.allTools = i2426
  request.r(i2421[54], i2421[55], 0, i2420, 'clockProgress')
  request.r(i2421[56], i2421[57], 0, i2420, 'clockProgressFill')
  request.r(i2421[58], i2421[59], 0, i2420, 'clockAudio')
  i2420.moveDistance = i2421[60]
  i2420.animationDuration = i2421[61]
  i2420.greyBgChildName = i2421[62]
  i2420.pushOffset = i2421[63]
  return i2420
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i2430 = root || request.c( 'GameManagerPlayable' )
  var i2431 = data
  request.r(i2431[0], i2431[1], 0, i2430, 'endParticles')
  request.r(i2431[2], i2431[3], 0, i2430, 'stepCompleteParticles')
  request.r(i2431[4], i2431[5], 0, i2430, 'DefaultMat')
  request.r(i2431[6], i2431[7], 0, i2430, 'BG_Music')
  request.r(i2431[8], i2431[9], 0, i2430, 'restoreEffectShader')
  request.r(i2431[10], i2431[11], 0, i2430, 'stickerEffectShader')
  i2430.isComplete = !!i2431[12]
  i2430.isPaused = !!i2431[13]
  request.r(i2431[14], i2431[15], 0, i2430, 'currentLevel')
  i2430.startLevelOnPlay = !!i2431[16]
  i2430.currentLevelNo = i2431[17]
  return i2430
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2432 = root || request.c( 'AudioController' )
  var i2433 = data
  request.r(i2433[0], i2433[1], 0, i2432, 'MainMixer')
  request.r(i2433[2], i2433[3], 0, i2432, 'UiClick')
  request.r(i2433[4], i2433[5], 0, i2432, 'UiClickSource')
  var i2435 = i2433[6]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 2) {
  request.r(i2435[i + 0], i2435[i + 1], 2, i2434, '')
  }
  i2432.SfxSources = i2434
  var i2437 = i2433[7]
  var i2436 = []
  for(var i = 0; i < i2437.length; i += 2) {
  request.r(i2437[i + 0], i2437[i + 1], 2, i2436, '')
  }
  i2432.AllClips = i2436
  return i2432
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2440 = root || request.c( 'UnityEngine.UI.Image' )
  var i2441 = data
  request.r(i2441[0], i2441[1], 0, i2440, 'm_Sprite')
  i2440.m_Type = i2441[2]
  i2440.m_PreserveAspect = !!i2441[3]
  i2440.m_FillCenter = !!i2441[4]
  i2440.m_FillMethod = i2441[5]
  i2440.m_FillAmount = i2441[6]
  i2440.m_FillClockwise = !!i2441[7]
  i2440.m_FillOrigin = i2441[8]
  i2440.m_UseSpriteMesh = !!i2441[9]
  i2440.m_PixelsPerUnitMultiplier = i2441[10]
  request.r(i2441[11], i2441[12], 0, i2440, 'm_Material')
  i2440.m_Maskable = !!i2441[13]
  i2440.m_Color = new pc.Color(i2441[14], i2441[15], i2441[16], i2441[17])
  i2440.m_RaycastTarget = !!i2441[18]
  i2440.m_RaycastPadding = new pc.Vec4( i2441[19], i2441[20], i2441[21], i2441[22] )
  return i2440
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2442 = root || request.c( 'UnityEngine.UI.Button' )
  var i2443 = data
  i2442.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2443[0], i2442.m_OnClick)
  i2442.m_Navigation = request.d('UnityEngine.UI.Navigation', i2443[1], i2442.m_Navigation)
  i2442.m_Transition = i2443[2]
  i2442.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2443[3], i2442.m_Colors)
  i2442.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2443[4], i2442.m_SpriteState)
  i2442.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2443[5], i2442.m_AnimationTriggers)
  i2442.m_Interactable = !!i2443[6]
  request.r(i2443[7], i2443[8], 0, i2442, 'm_TargetGraphic')
  return i2442
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2444 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2445 = data
  i2444.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2445[0], i2444.m_PersistentCalls)
  return i2444
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2446 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2447 = data
  i2446.m_Mode = i2447[0]
  i2446.m_WrapAround = !!i2447[1]
  request.r(i2447[2], i2447[3], 0, i2446, 'm_SelectOnUp')
  request.r(i2447[4], i2447[5], 0, i2446, 'm_SelectOnDown')
  request.r(i2447[6], i2447[7], 0, i2446, 'm_SelectOnLeft')
  request.r(i2447[8], i2447[9], 0, i2446, 'm_SelectOnRight')
  return i2446
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2448 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2449 = data
  i2448.m_NormalColor = new pc.Color(i2449[0], i2449[1], i2449[2], i2449[3])
  i2448.m_HighlightedColor = new pc.Color(i2449[4], i2449[5], i2449[6], i2449[7])
  i2448.m_PressedColor = new pc.Color(i2449[8], i2449[9], i2449[10], i2449[11])
  i2448.m_SelectedColor = new pc.Color(i2449[12], i2449[13], i2449[14], i2449[15])
  i2448.m_DisabledColor = new pc.Color(i2449[16], i2449[17], i2449[18], i2449[19])
  i2448.m_ColorMultiplier = i2449[20]
  i2448.m_FadeDuration = i2449[21]
  return i2448
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2450 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2451 = data
  request.r(i2451[0], i2451[1], 0, i2450, 'm_HighlightedSprite')
  request.r(i2451[2], i2451[3], 0, i2450, 'm_PressedSprite')
  request.r(i2451[4], i2451[5], 0, i2450, 'm_SelectedSprite')
  request.r(i2451[6], i2451[7], 0, i2450, 'm_DisabledSprite')
  return i2450
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2452 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2453 = data
  i2452.m_NormalTrigger = i2453[0]
  i2452.m_HighlightedTrigger = i2453[1]
  i2452.m_PressedTrigger = i2453[2]
  i2452.m_SelectedTrigger = i2453[3]
  i2452.m_DisabledTrigger = i2453[4]
  return i2452
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i2454 = root || request.c( 'PlayableHudRuntime' )
  var i2455 = data
  return i2454
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2456 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2457 = data
  request.r(i2457[0], i2457[1], 0, i2456, 'm_FirstSelected')
  i2456.m_sendNavigationEvents = !!i2457[2]
  i2456.m_DragThreshold = i2457[3]
  return i2456
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2458 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2459 = data
  i2458.m_HorizontalAxis = i2459[0]
  i2458.m_VerticalAxis = i2459[1]
  i2458.m_SubmitButton = i2459[2]
  i2458.m_CancelButton = i2459[3]
  i2458.m_InputActionsPerSecond = i2459[4]
  i2458.m_RepeatDelay = i2459[5]
  i2458.m_ForceModuleActive = !!i2459[6]
  i2458.m_SendPointerHoverToParent = !!i2459[7]
  return i2458
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i2460 = root || request.c( 'PlayableRouter' )
  var i2461 = data
  var i2463 = i2461[0]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 2) {
  request.r(i2463[i + 0], i2463[i + 1], 2, i2462, '')
  }
  i2460.menuObjects = i2462
  var i2465 = i2461[1]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 2) {
  request.r(i2465[i + 0], i2465[i + 1], 2, i2464, '')
  }
  i2460.gameplayObjects = i2464
  var i2467 = i2461[2]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 1) {
    i2466.push( request.d('PlayableRouter+SubLevelSlot', i2467[i + 0]) );
  }
  i2460.subLevels = i2466
  i2460.fadeDuration = i2461[3]
  i2460.lockedMessage = i2461[4]
  i2460.lockedTapsToCTA = i2461[5]
  return i2460
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i2470 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i2471 = data
  request.r(i2471[0], i2471[1], 0, i2470, 'button')
  request.r(i2471[2], i2471[3], 0, i2470, 'level')
  return i2470
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i2472 = root || request.c( 'ToastManager' )
  var i2473 = data
  request.r(i2473[0], i2473[1], 0, i2472, 'toastPanel')
  request.r(i2473[2], i2473[3], 0, i2472, 'toastPopup')
  request.r(i2473[4], i2473[5], 0, i2472, 'canvasGroup')
  request.r(i2473[6], i2473[7], 0, i2472, 'toastText')
  i2472.startY = i2473[8]
  i2472.visibleY = i2473[9]
  i2472.endY = i2473[10]
  i2472.animationTime = i2473[11]
  i2472.animationTimeUp = i2473[12]
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2475 = data
  i2474.m_Alpha = i2475[0]
  i2474.m_Interactable = !!i2475[1]
  i2474.m_BlocksRaycasts = !!i2475[2]
  i2474.m_IgnoreParentGroups = !!i2475[3]
  i2474.enabled = !!i2475[4]
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2477 = data
  i2476.ambientIntensity = i2477[0]
  i2476.reflectionIntensity = i2477[1]
  i2476.ambientMode = i2477[2]
  i2476.ambientLight = new pc.Color(i2477[3], i2477[4], i2477[5], i2477[6])
  i2476.ambientSkyColor = new pc.Color(i2477[7], i2477[8], i2477[9], i2477[10])
  i2476.ambientGroundColor = new pc.Color(i2477[11], i2477[12], i2477[13], i2477[14])
  i2476.ambientEquatorColor = new pc.Color(i2477[15], i2477[16], i2477[17], i2477[18])
  i2476.fogColor = new pc.Color(i2477[19], i2477[20], i2477[21], i2477[22])
  i2476.fogEndDistance = i2477[23]
  i2476.fogStartDistance = i2477[24]
  i2476.fogDensity = i2477[25]
  i2476.fog = !!i2477[26]
  request.r(i2477[27], i2477[28], 0, i2476, 'skybox')
  i2476.fogMode = i2477[29]
  var i2479 = i2477[30]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 1) {
    i2478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2479[i + 0]) );
  }
  i2476.lightmaps = i2478
  i2476.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2477[31], i2476.lightProbes)
  i2476.lightmapsMode = i2477[32]
  i2476.mixedBakeMode = i2477[33]
  i2476.environmentLightingMode = i2477[34]
  i2476.ambientProbe = new pc.SphericalHarmonicsL2(i2477[35])
  request.r(i2477[36], i2477[37], 0, i2476, 'customReflection')
  request.r(i2477[38], i2477[39], 0, i2476, 'defaultReflection')
  i2476.defaultReflectionMode = i2477[40]
  i2476.defaultReflectionResolution = i2477[41]
  i2476.sunLightObjectId = i2477[42]
  i2476.pixelLightCount = i2477[43]
  i2476.defaultReflectionHDR = !!i2477[44]
  i2476.hasLightDataAsset = !!i2477[45]
  i2476.hasManualGenerate = !!i2477[46]
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2483 = data
  request.r(i2483[0], i2483[1], 0, i2482, 'lightmapColor')
  request.r(i2483[2], i2483[3], 0, i2482, 'lightmapDirection')
  request.r(i2483[4], i2483[5], 0, i2482, 'shadowMask')
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2484 = root || new UnityEngine.LightProbes()
  var i2485 = data
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2491 = data
  var i2493 = i2491[0]
  var i2492 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2493[i + 0]));
  }
  i2490.ShaderCompilationErrors = i2492
  i2490.name = i2491[1]
  i2490.guid = i2491[2]
  var i2495 = i2491[3]
  var i2494 = []
  for(var i = 0; i < i2495.length; i += 1) {
    i2494.push( i2495[i + 0] );
  }
  i2490.shaderDefinedKeywords = i2494
  var i2497 = i2491[4]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2497[i + 0]) );
  }
  i2490.passes = i2496
  var i2499 = i2491[5]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 1) {
    i2498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2499[i + 0]) );
  }
  i2490.usePasses = i2498
  var i2501 = i2491[6]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2501[i + 0]) );
  }
  i2490.defaultParameterValues = i2500
  request.r(i2491[7], i2491[8], 0, i2490, 'unityFallbackShader')
  i2490.readDepth = !!i2491[9]
  i2490.hasDepthOnlyPass = !!i2491[10]
  i2490.isCreatedByShaderGraph = !!i2491[11]
  i2490.disableBatching = !!i2491[12]
  i2490.compiled = !!i2491[13]
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2505 = data
  i2504.shaderName = i2505[0]
  i2504.errorMessage = i2505[1]
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2510 = root || new pc.UnityShaderPass()
  var i2511 = data
  i2510.id = i2511[0]
  i2510.subShaderIndex = i2511[1]
  i2510.name = i2511[2]
  i2510.passType = i2511[3]
  i2510.grabPassTextureName = i2511[4]
  i2510.usePass = !!i2511[5]
  i2510.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2511[6], i2510.zTest)
  i2510.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2511[7], i2510.zWrite)
  i2510.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2511[8], i2510.culling)
  i2510.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2511[9], i2510.blending)
  i2510.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2511[10], i2510.alphaBlending)
  i2510.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2511[11], i2510.colorWriteMask)
  i2510.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2511[12], i2510.offsetUnits)
  i2510.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2511[13], i2510.offsetFactor)
  i2510.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2511[14], i2510.stencilRef)
  i2510.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2511[15], i2510.stencilReadMask)
  i2510.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2511[16], i2510.stencilWriteMask)
  i2510.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2511[17], i2510.stencilOp)
  i2510.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2511[18], i2510.stencilOpFront)
  i2510.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2511[19], i2510.stencilOpBack)
  var i2513 = i2511[20]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2513[i + 0]) );
  }
  i2510.tags = i2512
  var i2515 = i2511[21]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.push( i2515[i + 0] );
  }
  i2510.passDefinedKeywords = i2514
  var i2517 = i2511[22]
  var i2516 = []
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2517[i + 0]) );
  }
  i2510.passDefinedKeywordGroups = i2516
  var i2519 = i2511[23]
  var i2518 = []
  for(var i = 0; i < i2519.length; i += 1) {
    i2518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2519[i + 0]) );
  }
  i2510.variants = i2518
  var i2521 = i2511[24]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2521[i + 0]) );
  }
  i2510.excludedVariants = i2520
  i2510.hasDepthReader = !!i2511[25]
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2523 = data
  i2522.val = i2523[0]
  i2522.name = i2523[1]
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2525 = data
  i2524.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[0], i2524.src)
  i2524.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[1], i2524.dst)
  i2524.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2525[2], i2524.op)
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2527 = data
  i2526.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2527[0], i2526.pass)
  i2526.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2527[1], i2526.fail)
  i2526.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2527[2], i2526.zFail)
  i2526.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2527[3], i2526.comp)
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2531 = data
  i2530.name = i2531[0]
  i2530.value = i2531[1]
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2535 = data
  var i2537 = i2535[0]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.push( i2537[i + 0] );
  }
  i2534.keywords = i2536
  i2534.hasDiscard = !!i2535[1]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2541 = data
  i2540.passId = i2541[0]
  i2540.subShaderIndex = i2541[1]
  var i2543 = i2541[2]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.push( i2543[i + 0] );
  }
  i2540.keywords = i2542
  i2540.vertexProgram = i2541[3]
  i2540.fragmentProgram = i2541[4]
  i2540.exportedForWebGl2 = !!i2541[5]
  i2540.readDepth = !!i2541[6]
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2547 = data
  request.r(i2547[0], i2547[1], 0, i2546, 'shader')
  i2546.pass = i2547[2]
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2551 = data
  i2550.name = i2551[0]
  i2550.type = i2551[1]
  i2550.value = new pc.Vec4( i2551[2], i2551[3], i2551[4], i2551[5] )
  i2550.textureValue = i2551[6]
  i2550.shaderPropertyFlag = i2551[7]
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2553 = data
  i2552.name = i2553[0]
  request.r(i2553[1], i2553[2], 0, i2552, 'texture')
  i2552.aabb = i2553[3]
  i2552.vertices = i2553[4]
  i2552.triangles = i2553[5]
  i2552.textureRect = UnityEngine.Rect.MinMaxRect(i2553[6], i2553[7], i2553[8], i2553[9])
  i2552.packedRect = UnityEngine.Rect.MinMaxRect(i2553[10], i2553[11], i2553[12], i2553[13])
  i2552.border = new pc.Vec4( i2553[14], i2553[15], i2553[16], i2553[17] )
  i2552.transparency = i2553[18]
  i2552.bounds = i2553[19]
  i2552.pixelsPerUnit = i2553[20]
  i2552.textureWidth = i2553[21]
  i2552.textureHeight = i2553[22]
  i2552.nativeSize = new pc.Vec2( i2553[23], i2553[24] )
  i2552.pivot = new pc.Vec2( i2553[25], i2553[26] )
  i2552.textureRectOffset = new pc.Vec2( i2553[27], i2553[28] )
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2555 = data
  i2554.name = i2555[0]
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2557 = data
  i2556.name = i2557[0]
  i2556.wrapMode = i2557[1]
  i2556.isLooping = !!i2557[2]
  i2556.length = i2557[3]
  var i2559 = i2557[4]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2559[i + 0]) );
  }
  i2556.curves = i2558
  var i2561 = i2557[5]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2561[i + 0]) );
  }
  i2556.events = i2560
  i2556.halfPrecision = !!i2557[6]
  i2556._frameRate = i2557[7]
  i2556.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2557[8], i2556.localBounds)
  i2556.hasMuscleCurves = !!i2557[9]
  var i2563 = i2557[10]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 1) {
    i2562.push( i2563[i + 0] );
  }
  i2556.clipMuscleConstant = i2562
  i2556.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2557[11], i2556.clipBindingConstant)
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2567 = data
  i2566.path = i2567[0]
  i2566.hash = i2567[1]
  i2566.componentType = i2567[2]
  i2566.property = i2567[3]
  i2566.keys = i2567[4]
  var i2569 = i2567[5]
  var i2568 = []
  for(var i = 0; i < i2569.length; i += 1) {
    i2568.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2569[i + 0]) );
  }
  i2566.objectReferenceKeys = i2568
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2573 = data
  i2572.time = i2573[0]
  request.r(i2573[1], i2573[2], 0, i2572, 'value')
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2577 = data
  i2576.functionName = i2577[0]
  i2576.floatParameter = i2577[1]
  i2576.intParameter = i2577[2]
  i2576.stringParameter = i2577[3]
  request.r(i2577[4], i2577[5], 0, i2576, 'objectReferenceParameter')
  i2576.time = i2577[6]
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2579 = data
  i2578.center = new pc.Vec3( i2579[0], i2579[1], i2579[2] )
  i2578.extends = new pc.Vec3( i2579[3], i2579[4], i2579[5] )
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2583 = data
  var i2585 = i2583[0]
  var i2584 = []
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.push( i2585[i + 0] );
  }
  i2582.genericBindings = i2584
  var i2587 = i2583[1]
  var i2586 = []
  for(var i = 0; i < i2587.length; i += 1) {
    i2586.push( i2587[i + 0] );
  }
  i2582.pptrCurveMapping = i2586
  return i2582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2589 = data
  i2588.name = i2589[0]
  i2588.ascent = i2589[1]
  i2588.originalLineHeight = i2589[2]
  i2588.fontSize = i2589[3]
  var i2591 = i2589[4]
  var i2590 = []
  for(var i = 0; i < i2591.length; i += 1) {
    i2590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2591[i + 0]) );
  }
  i2588.characterInfo = i2590
  request.r(i2589[5], i2589[6], 0, i2588, 'texture')
  i2588.originalFontSize = i2589[7]
  return i2588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2595 = data
  i2594.index = i2595[0]
  i2594.advance = i2595[1]
  i2594.bearing = i2595[2]
  i2594.glyphWidth = i2595[3]
  i2594.glyphHeight = i2595[4]
  i2594.minX = i2595[5]
  i2594.maxX = i2595[6]
  i2594.minY = i2595[7]
  i2594.maxY = i2595[8]
  i2594.uvBottomLeftX = i2595[9]
  i2594.uvBottomLeftY = i2595[10]
  i2594.uvBottomRightX = i2595[11]
  i2594.uvBottomRightY = i2595[12]
  i2594.uvTopLeftX = i2595[13]
  i2594.uvTopLeftY = i2595[14]
  i2594.uvTopRightX = i2595[15]
  i2594.uvTopRightY = i2595[16]
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2597 = data
  i2596.name = i2597[0]
  var i2599 = i2597[1]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2599[i + 0]) );
  }
  i2596.layers = i2598
  var i2601 = i2597[2]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2601[i + 0]) );
  }
  i2596.parameters = i2600
  i2596.animationClips = i2597[3]
  i2596.avatarUnsupported = i2597[4]
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2605 = data
  i2604.name = i2605[0]
  i2604.defaultWeight = i2605[1]
  i2604.blendingMode = i2605[2]
  i2604.avatarMask = i2605[3]
  i2604.syncedLayerIndex = i2605[4]
  i2604.syncedLayerAffectsTiming = !!i2605[5]
  i2604.syncedLayers = i2605[6]
  i2604.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2605[7], i2604.stateMachine)
  return i2604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2607 = data
  i2606.id = i2607[0]
  i2606.name = i2607[1]
  i2606.path = i2607[2]
  var i2609 = i2607[3]
  var i2608 = []
  for(var i = 0; i < i2609.length; i += 1) {
    i2608.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2609[i + 0]) );
  }
  i2606.states = i2608
  var i2611 = i2607[4]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2611[i + 0]) );
  }
  i2606.machines = i2610
  var i2613 = i2607[5]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2613[i + 0]) );
  }
  i2606.entryStateTransitions = i2612
  var i2615 = i2607[6]
  var i2614 = []
  for(var i = 0; i < i2615.length; i += 1) {
    i2614.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2615[i + 0]) );
  }
  i2606.exitStateTransitions = i2614
  var i2617 = i2607[7]
  var i2616 = []
  for(var i = 0; i < i2617.length; i += 1) {
    i2616.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2617[i + 0]) );
  }
  i2606.anyStateTransitions = i2616
  i2606.defaultStateId = i2607[8]
  return i2606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2621 = data
  i2620.id = i2621[0]
  i2620.name = i2621[1]
  i2620.cycleOffset = i2621[2]
  i2620.cycleOffsetParameter = i2621[3]
  i2620.cycleOffsetParameterActive = !!i2621[4]
  i2620.mirror = !!i2621[5]
  i2620.mirrorParameter = i2621[6]
  i2620.mirrorParameterActive = !!i2621[7]
  i2620.motionId = i2621[8]
  i2620.nameHash = i2621[9]
  i2620.fullPathHash = i2621[10]
  i2620.speed = i2621[11]
  i2620.speedParameter = i2621[12]
  i2620.speedParameterActive = !!i2621[13]
  i2620.tag = i2621[14]
  i2620.tagHash = i2621[15]
  i2620.writeDefaultValues = !!i2621[16]
  var i2623 = i2621[17]
  var i2622 = []
  for(var i = 0; i < i2623.length; i += 2) {
  request.r(i2623[i + 0], i2623[i + 1], 2, i2622, '')
  }
  i2620.behaviours = i2622
  var i2625 = i2621[18]
  var i2624 = []
  for(var i = 0; i < i2625.length; i += 1) {
    i2624.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2625[i + 0]) );
  }
  i2620.transitions = i2624
  return i2620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2631 = data
  i2630.fullPath = i2631[0]
  i2630.canTransitionToSelf = !!i2631[1]
  i2630.duration = i2631[2]
  i2630.exitTime = i2631[3]
  i2630.hasExitTime = !!i2631[4]
  i2630.hasFixedDuration = !!i2631[5]
  i2630.interruptionSource = i2631[6]
  i2630.offset = i2631[7]
  i2630.orderedInterruption = !!i2631[8]
  i2630.destinationStateId = i2631[9]
  i2630.isExit = !!i2631[10]
  i2630.mute = !!i2631[11]
  i2630.solo = !!i2631[12]
  var i2633 = i2631[13]
  var i2632 = []
  for(var i = 0; i < i2633.length; i += 1) {
    i2632.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2633[i + 0]) );
  }
  i2630.conditions = i2632
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2639 = data
  i2638.destinationStateId = i2639[0]
  i2638.isExit = !!i2639[1]
  i2638.mute = !!i2639[2]
  i2638.solo = !!i2639[3]
  var i2641 = i2639[4]
  var i2640 = []
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2641[i + 0]) );
  }
  i2638.conditions = i2640
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2645 = data
  i2644.mode = i2645[0]
  i2644.parameter = i2645[1]
  i2644.threshold = i2645[2]
  return i2644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2649 = data
  i2648.defaultBool = !!i2649[0]
  i2648.defaultFloat = i2649[1]
  i2648.defaultInt = i2649[2]
  i2648.name = i2649[3]
  i2648.nameHash = i2649[4]
  i2648.type = i2649[5]
  return i2648
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2650 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2651 = data
  i2650.useSafeMode = !!i2651[0]
  i2650.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2651[1], i2650.safeModeOptions)
  i2650.timeScale = i2651[2]
  i2650.unscaledTimeScale = i2651[3]
  i2650.useSmoothDeltaTime = !!i2651[4]
  i2650.maxSmoothUnscaledTime = i2651[5]
  i2650.rewindCallbackMode = i2651[6]
  i2650.showUnityEditorReport = !!i2651[7]
  i2650.logBehaviour = i2651[8]
  i2650.drawGizmos = !!i2651[9]
  i2650.defaultRecyclable = !!i2651[10]
  i2650.defaultAutoPlay = i2651[11]
  i2650.defaultUpdateType = i2651[12]
  i2650.defaultTimeScaleIndependent = !!i2651[13]
  i2650.defaultEaseType = i2651[14]
  i2650.defaultEaseOvershootOrAmplitude = i2651[15]
  i2650.defaultEasePeriod = i2651[16]
  i2650.defaultAutoKill = !!i2651[17]
  i2650.defaultLoopType = i2651[18]
  i2650.debugMode = !!i2651[19]
  i2650.debugStoreTargetId = !!i2651[20]
  i2650.showPreviewPanel = !!i2651[21]
  i2650.storeSettingsLocation = i2651[22]
  i2650.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2651[23], i2650.modules)
  i2650.createASMDEF = !!i2651[24]
  i2650.showPlayingTweens = !!i2651[25]
  i2650.showPausedTweens = !!i2651[26]
  return i2650
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2652 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2653 = data
  i2652.logBehaviour = i2653[0]
  i2652.nestedTweenFailureBehaviour = i2653[1]
  return i2652
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2654 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2655 = data
  i2654.showPanel = !!i2655[0]
  i2654.audioEnabled = !!i2655[1]
  i2654.physicsEnabled = !!i2655[2]
  i2654.physics2DEnabled = !!i2655[3]
  i2654.spriteEnabled = !!i2655[4]
  i2654.uiEnabled = !!i2655[5]
  i2654.textMeshProEnabled = !!i2655[6]
  i2654.tk2DEnabled = !!i2655[7]
  i2654.deAudioEnabled = !!i2655[8]
  i2654.deUnityExtendedEnabled = !!i2655[9]
  i2654.epoOutlineEnabled = !!i2655[10]
  return i2654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2657 = data
  var i2659 = i2657[0]
  var i2658 = []
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2659[i + 0]) );
  }
  i2656.files = i2658
  i2656.componentToPrefabIds = i2657[1]
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2663 = data
  i2662.path = i2663[0]
  request.r(i2663[1], i2663[2], 0, i2662, 'unityObject')
  return i2662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2665 = data
  var i2667 = i2665[0]
  var i2666 = []
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2667[i + 0]) );
  }
  i2664.scriptsExecutionOrder = i2666
  var i2669 = i2665[1]
  var i2668 = []
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2669[i + 0]) );
  }
  i2664.sortingLayers = i2668
  var i2671 = i2665[2]
  var i2670 = []
  for(var i = 0; i < i2671.length; i += 1) {
    i2670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2671[i + 0]) );
  }
  i2664.cullingLayers = i2670
  i2664.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2665[3], i2664.timeSettings)
  i2664.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2665[4], i2664.physicsSettings)
  i2664.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2665[5], i2664.physics2DSettings)
  i2664.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2665[6], i2664.qualitySettings)
  i2664.enableRealtimeShadows = !!i2665[7]
  i2664.enableAutoInstancing = !!i2665[8]
  i2664.enableStaticBatching = !!i2665[9]
  i2664.enableDynamicBatching = !!i2665[10]
  i2664.usePreservativeDynamicBatching = !!i2665[11]
  i2664.lightmapEncodingQuality = i2665[12]
  i2664.desiredColorSpace = i2665[13]
  var i2673 = i2665[14]
  var i2672 = []
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.push( i2673[i + 0] );
  }
  i2664.allTags = i2672
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2677 = data
  i2676.name = i2677[0]
  i2676.value = i2677[1]
  return i2676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2681 = data
  i2680.id = i2681[0]
  i2680.name = i2681[1]
  i2680.value = i2681[2]
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2685 = data
  i2684.id = i2685[0]
  i2684.name = i2685[1]
  return i2684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2687 = data
  i2686.fixedDeltaTime = i2687[0]
  i2686.maximumDeltaTime = i2687[1]
  i2686.timeScale = i2687[2]
  i2686.maximumParticleTimestep = i2687[3]
  return i2686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2689 = data
  i2688.gravity = new pc.Vec3( i2689[0], i2689[1], i2689[2] )
  i2688.defaultSolverIterations = i2689[3]
  i2688.bounceThreshold = i2689[4]
  i2688.autoSyncTransforms = !!i2689[5]
  i2688.autoSimulation = !!i2689[6]
  var i2691 = i2689[7]
  var i2690 = []
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2691[i + 0]) );
  }
  i2688.collisionMatrix = i2690
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2695 = data
  i2694.enabled = !!i2695[0]
  i2694.layerId = i2695[1]
  i2694.otherLayerId = i2695[2]
  return i2694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2697 = data
  request.r(i2697[0], i2697[1], 0, i2696, 'material')
  i2696.gravity = new pc.Vec2( i2697[2], i2697[3] )
  i2696.positionIterations = i2697[4]
  i2696.velocityIterations = i2697[5]
  i2696.velocityThreshold = i2697[6]
  i2696.maxLinearCorrection = i2697[7]
  i2696.maxAngularCorrection = i2697[8]
  i2696.maxTranslationSpeed = i2697[9]
  i2696.maxRotationSpeed = i2697[10]
  i2696.baumgarteScale = i2697[11]
  i2696.baumgarteTOIScale = i2697[12]
  i2696.timeToSleep = i2697[13]
  i2696.linearSleepTolerance = i2697[14]
  i2696.angularSleepTolerance = i2697[15]
  i2696.defaultContactOffset = i2697[16]
  i2696.autoSimulation = !!i2697[17]
  i2696.queriesHitTriggers = !!i2697[18]
  i2696.queriesStartInColliders = !!i2697[19]
  i2696.callbacksOnDisable = !!i2697[20]
  i2696.reuseCollisionCallbacks = !!i2697[21]
  i2696.autoSyncTransforms = !!i2697[22]
  var i2699 = i2697[23]
  var i2698 = []
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2699[i + 0]) );
  }
  i2696.collisionMatrix = i2698
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2703 = data
  i2702.enabled = !!i2703[0]
  i2702.layerId = i2703[1]
  i2702.otherLayerId = i2703[2]
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2705 = data
  var i2707 = i2705[0]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2707[i + 0]) );
  }
  i2704.qualityLevels = i2706
  var i2709 = i2705[1]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( i2709[i + 0] );
  }
  i2704.names = i2708
  i2704.shadows = i2705[2]
  i2704.anisotropicFiltering = i2705[3]
  i2704.antiAliasing = i2705[4]
  i2704.lodBias = i2705[5]
  i2704.shadowCascades = i2705[6]
  i2704.shadowDistance = i2705[7]
  i2704.shadowmaskMode = i2705[8]
  i2704.shadowProjection = i2705[9]
  i2704.shadowResolution = i2705[10]
  i2704.softParticles = !!i2705[11]
  i2704.softVegetation = !!i2705[12]
  i2704.activeColorSpace = i2705[13]
  i2704.desiredColorSpace = i2705[14]
  i2704.masterTextureLimit = i2705[15]
  i2704.maxQueuedFrames = i2705[16]
  i2704.particleRaycastBudget = i2705[17]
  i2704.pixelLightCount = i2705[18]
  i2704.realtimeReflectionProbes = !!i2705[19]
  i2704.shadowCascade2Split = i2705[20]
  i2704.shadowCascade4Split = new pc.Vec3( i2705[21], i2705[22], i2705[23] )
  i2704.streamingMipmapsActive = !!i2705[24]
  i2704.vSyncCount = i2705[25]
  i2704.asyncUploadBufferSize = i2705[26]
  i2704.asyncUploadTimeSlice = i2705[27]
  i2704.billboardsFaceCameraPosition = !!i2705[28]
  i2704.shadowNearPlaneOffset = i2705[29]
  i2704.streamingMipmapsMemoryBudget = i2705[30]
  i2704.maximumLODLevel = i2705[31]
  i2704.streamingMipmapsAddAllCameras = !!i2705[32]
  i2704.streamingMipmapsMaxLevelReduction = i2705[33]
  i2704.streamingMipmapsRenderersPerFrame = i2705[34]
  i2704.resolutionScalingFixedDPIFactor = i2705[35]
  i2704.streamingMipmapsMaxFileIORequests = i2705[36]
  i2704.currentQualityLevel = i2705[37]
  return i2704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i2713 = data
  var i2715 = i2713[0]
  var i2714 = []
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i2715[i + 0]) );
  }
  i2712.groups = i2714
  var i2717 = i2713[1]
  var i2716 = []
  for(var i = 0; i < i2717.length; i += 1) {
    i2716.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i2717[i + 0]) );
  }
  i2712.snapshots = i2716
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i2720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i2721 = data
  i2720.id = i2721[0]
  i2720.childGroupIds = i2721[1]
  i2720.name = i2721[2]
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i2724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i2725 = data
  i2724.id = i2725[0]
  var i2727 = i2725[1]
  var i2726 = []
  for(var i = 0; i < i2727.length; i += 1) {
    i2726.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i2727[i + 0]) );
  }
  i2724.parameters = i2726
  return i2724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i2730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i2731 = data
  i2730.name = i2731[0]
  i2730.value = i2731[1]
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2735 = data
  i2734.weight = i2735[0]
  i2734.vertices = i2735[1]
  i2734.normals = i2735[2]
  i2734.tangents = i2735[3]
  return i2734
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"80":[81],"82":[81],"83":[81],"84":[81],"85":[81],"86":[81],"87":[88],"89":[31],"90":[91],"92":[91],"93":[91],"94":[91],"95":[91],"96":[91],"97":[91],"98":[40],"99":[40],"100":[40],"101":[40],"102":[40],"103":[40],"104":[40],"105":[40],"106":[40],"107":[40],"108":[40],"109":[40],"110":[40],"111":[31],"112":[55],"113":[114],"115":[114],"30":[29],"116":[24],"52":[11],"117":[15],"118":[11],"119":[120],"121":[120],"122":[43],"62":[15],"123":[11],"37":[11],"124":[29],"125":[29],"34":[30],"68":[35,29],"126":[29],"33":[30],"127":[29],"128":[29],"129":[29],"130":[29],"131":[29],"132":[29],"133":[29],"134":[29],"135":[29],"136":[35,29],"137":[29],"138":[29],"139":[29],"140":[29],"14":[35,29],"141":[29],"142":[74],"143":[74],"75":[74],"144":[74],"145":[31],"146":[31]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level1_Cloth_Playable","UnityEngine.GameObject","BasicDrag","UnityEngine.SpriteRenderer","BD_CameraFollow","Level1_SurfController","UnityEngine.UI.Text","UnityEngine.BoxCollider2D","RotaryTimerKnob","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.LineRenderer","TextureOffsetScroller","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.TrailRenderer","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteMask","BD_Clamp","UnityEngine.Rigidbody2D","PlaceItem","ActionOnTap","DG.Tweening.DOTweenAnimation","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","SewingCol","OutlinePulse","BD_Action","BD_Fold","BD_Progress","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","StaticFixedPipe","BD_SpriteChange","MenuLevel","IntroLevelAnim","Level_PoseController","BD_AnimationHelper","SpriteButton","PlayableRouter","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.UI.Image","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "12.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "1Sept2026_CompleteLevel_1_2_v1_Final_v1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1739";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4360";

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

Deserializers.buildID = "2a395d5c-e843-4119-aa84-a11f1c4995ab";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

