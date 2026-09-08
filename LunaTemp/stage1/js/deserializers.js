var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2208 = root || request.c( 'UnityEngine.JointSpring' )
  var i2209 = data
  i2208.spring = i2209[0]
  i2208.damper = i2209[1]
  i2208.targetPosition = i2209[2]
  return i2208
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2210 = root || request.c( 'UnityEngine.JointMotor' )
  var i2211 = data
  i2210.m_TargetVelocity = i2211[0]
  i2210.m_Force = i2211[1]
  i2210.m_FreeSpin = i2211[2]
  return i2210
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2212 = root || request.c( 'UnityEngine.JointLimits' )
  var i2213 = data
  i2212.m_Min = i2213[0]
  i2212.m_Max = i2213[1]
  i2212.m_Bounciness = i2213[2]
  i2212.m_BounceMinVelocity = i2213[3]
  i2212.m_ContactDistance = i2213[4]
  i2212.minBounce = i2213[5]
  i2212.maxBounce = i2213[6]
  return i2212
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2214 = root || request.c( 'UnityEngine.JointDrive' )
  var i2215 = data
  i2214.m_PositionSpring = i2215[0]
  i2214.m_PositionDamper = i2215[1]
  i2214.m_MaximumForce = i2215[2]
  i2214.m_UseAcceleration = i2215[3]
  return i2214
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2216 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2217 = data
  i2216.m_Spring = i2217[0]
  i2216.m_Damper = i2217[1]
  return i2216
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2218 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2219 = data
  i2218.m_Limit = i2219[0]
  i2218.m_Bounciness = i2219[1]
  i2218.m_ContactDistance = i2219[2]
  return i2218
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2220 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2221 = data
  i2220.m_ExtremumSlip = i2221[0]
  i2220.m_ExtremumValue = i2221[1]
  i2220.m_AsymptoteSlip = i2221[2]
  i2220.m_AsymptoteValue = i2221[3]
  i2220.m_Stiffness = i2221[4]
  return i2220
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2222 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2223 = data
  i2222.m_LowerAngle = i2223[0]
  i2222.m_UpperAngle = i2223[1]
  return i2222
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2224 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2225 = data
  i2224.m_MotorSpeed = i2225[0]
  i2224.m_MaximumMotorTorque = i2225[1]
  return i2224
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2226 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2227 = data
  i2226.m_DampingRatio = i2227[0]
  i2226.m_Frequency = i2227[1]
  i2226.m_Angle = i2227[2]
  return i2226
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2228 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2229 = data
  i2228.m_LowerTranslation = i2229[0]
  i2228.m_UpperTranslation = i2229[1]
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2230 = root || new pc.UnityMaterial()
  var i2231 = data
  i2230.name = i2231[0]
  request.r(i2231[1], i2231[2], 0, i2230, 'shader')
  i2230.renderQueue = i2231[3]
  i2230.enableInstancing = !!i2231[4]
  var i2233 = i2231[5]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 1) {
    i2232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2233[i + 0]) );
  }
  i2230.floatParameters = i2232
  var i2235 = i2231[6]
  var i2234 = []
  for(var i = 0; i < i2235.length; i += 1) {
    i2234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2235[i + 0]) );
  }
  i2230.colorParameters = i2234
  var i2237 = i2231[7]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2237[i + 0]) );
  }
  i2230.vectorParameters = i2236
  var i2239 = i2231[8]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2239[i + 0]) );
  }
  i2230.textureParameters = i2238
  var i2241 = i2231[9]
  var i2240 = []
  for(var i = 0; i < i2241.length; i += 1) {
    i2240.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2241[i + 0]) );
  }
  i2230.materialFlags = i2240
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2245 = data
  i2244.name = i2245[0]
  i2244.value = i2245[1]
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2249 = data
  i2248.name = i2249[0]
  i2248.value = new pc.Color(i2249[1], i2249[2], i2249[3], i2249[4])
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2253 = data
  i2252.name = i2253[0]
  i2252.value = new pc.Vec4( i2253[1], i2253[2], i2253[3], i2253[4] )
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2257 = data
  i2256.name = i2257[0]
  request.r(i2257[1], i2257[2], 0, i2256, 'value')
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2261 = data
  i2260.name = i2261[0]
  i2260.enabled = !!i2261[1]
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2263 = data
  i2262.name = i2263[0]
  i2262.width = i2263[1]
  i2262.height = i2263[2]
  i2262.mipmapCount = i2263[3]
  i2262.anisoLevel = i2263[4]
  i2262.filterMode = i2263[5]
  i2262.hdr = !!i2263[6]
  i2262.format = i2263[7]
  i2262.wrapMode = i2263[8]
  i2262.alphaIsTransparency = !!i2263[9]
  i2262.alphaSource = i2263[10]
  i2262.graphicsFormat = i2263[11]
  i2262.sRGBTexture = !!i2263[12]
  i2262.desiredColorSpace = i2263[13]
  i2262.wrapU = i2263[14]
  i2262.wrapV = i2263[15]
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2265 = data
  i2264.name = i2265[0]
  i2264.halfPrecision = !!i2265[1]
  i2264.useSimplification = !!i2265[2]
  i2264.useUInt32IndexFormat = !!i2265[3]
  i2264.vertexCount = i2265[4]
  i2264.aabb = i2265[5]
  var i2267 = i2265[6]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( !!i2267[i + 0] );
  }
  i2264.streams = i2266
  i2264.vertices = i2265[7]
  var i2269 = i2265[8]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 1) {
    i2268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2269[i + 0]) );
  }
  i2264.subMeshes = i2268
  var i2271 = i2265[9]
  var i2270 = []
  for(var i = 0; i < i2271.length; i += 16) {
    i2270.push( new pc.Mat4().setData(i2271[i + 0], i2271[i + 1], i2271[i + 2], i2271[i + 3],  i2271[i + 4], i2271[i + 5], i2271[i + 6], i2271[i + 7],  i2271[i + 8], i2271[i + 9], i2271[i + 10], i2271[i + 11],  i2271[i + 12], i2271[i + 13], i2271[i + 14], i2271[i + 15]) );
  }
  i2264.bindposes = i2270
  var i2273 = i2265[10]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 1) {
    i2272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2273[i + 0]) );
  }
  i2264.blendShapes = i2272
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2279 = data
  i2278.triangles = i2279[0]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2285 = data
  i2284.name = i2285[0]
  var i2287 = i2285[1]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 1) {
    i2286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2287[i + 0]) );
  }
  i2284.frames = i2286
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2289 = data
  i2288.position = new pc.Vec3( i2289[0], i2289[1], i2289[2] )
  i2288.scale = new pc.Vec3( i2289[3], i2289[4], i2289[5] )
  i2288.rotation = new pc.Quat(i2289[6], i2289[7], i2289[8], i2289[9])
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2291 = data
  i2290.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2291[0], i2290.main)
  i2290.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2291[1], i2290.colorBySpeed)
  i2290.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2291[2], i2290.colorOverLifetime)
  i2290.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2291[3], i2290.emission)
  i2290.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2291[4], i2290.rotationBySpeed)
  i2290.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2291[5], i2290.rotationOverLifetime)
  i2290.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2291[6], i2290.shape)
  i2290.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2291[7], i2290.sizeBySpeed)
  i2290.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2291[8], i2290.sizeOverLifetime)
  i2290.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2291[9], i2290.textureSheetAnimation)
  i2290.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2291[10], i2290.velocityOverLifetime)
  i2290.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2291[11], i2290.noise)
  i2290.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2291[12], i2290.inheritVelocity)
  i2290.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2291[13], i2290.forceOverLifetime)
  i2290.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2291[14], i2290.limitVelocityOverLifetime)
  i2290.useAutoRandomSeed = !!i2291[15]
  i2290.randomSeed = i2291[16]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2292 = root || new pc.ParticleSystemMain()
  var i2293 = data
  i2292.duration = i2293[0]
  i2292.loop = !!i2293[1]
  i2292.prewarm = !!i2293[2]
  i2292.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[3], i2292.startDelay)
  i2292.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[4], i2292.startLifetime)
  i2292.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[5], i2292.startSpeed)
  i2292.startSize3D = !!i2293[6]
  i2292.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[7], i2292.startSizeX)
  i2292.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[8], i2292.startSizeY)
  i2292.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[9], i2292.startSizeZ)
  i2292.startRotation3D = !!i2293[10]
  i2292.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[11], i2292.startRotationX)
  i2292.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[12], i2292.startRotationY)
  i2292.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[13], i2292.startRotationZ)
  i2292.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2293[14], i2292.startColor)
  i2292.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[15], i2292.gravityModifier)
  i2292.simulationSpace = i2293[16]
  request.r(i2293[17], i2293[18], 0, i2292, 'customSimulationSpace')
  i2292.simulationSpeed = i2293[19]
  i2292.useUnscaledTime = !!i2293[20]
  i2292.scalingMode = i2293[21]
  i2292.playOnAwake = !!i2293[22]
  i2292.maxParticles = i2293[23]
  i2292.emitterVelocityMode = i2293[24]
  i2292.stopAction = i2293[25]
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2294 = root || new pc.MinMaxCurve()
  var i2295 = data
  i2294.mode = i2295[0]
  i2294.curveMin = new pc.AnimationCurve( { keys_flow: i2295[1] } )
  i2294.curveMax = new pc.AnimationCurve( { keys_flow: i2295[2] } )
  i2294.curveMultiplier = i2295[3]
  i2294.constantMin = i2295[4]
  i2294.constantMax = i2295[5]
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2296 = root || new pc.MinMaxGradient()
  var i2297 = data
  i2296.mode = i2297[0]
  i2296.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2297[1], i2296.gradientMin)
  i2296.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2297[2], i2296.gradientMax)
  i2296.colorMin = new pc.Color(i2297[3], i2297[4], i2297[5], i2297[6])
  i2296.colorMax = new pc.Color(i2297[7], i2297[8], i2297[9], i2297[10])
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2299 = data
  i2298.mode = i2299[0]
  var i2301 = i2299[1]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2301[i + 0]) );
  }
  i2298.colorKeys = i2300
  var i2303 = i2299[2]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2303[i + 0]) );
  }
  i2298.alphaKeys = i2302
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2304 = root || new pc.ParticleSystemColorBySpeed()
  var i2305 = data
  i2304.enabled = !!i2305[0]
  i2304.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2305[1], i2304.color)
  i2304.range = new pc.Vec2( i2305[2], i2305[3] )
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2309 = data
  i2308.color = new pc.Color(i2309[0], i2309[1], i2309[2], i2309[3])
  i2308.time = i2309[4]
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2313 = data
  i2312.alpha = i2313[0]
  i2312.time = i2313[1]
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2314 = root || new pc.ParticleSystemColorOverLifetime()
  var i2315 = data
  i2314.enabled = !!i2315[0]
  i2314.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2315[1], i2314.color)
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2316 = root || new pc.ParticleSystemEmitter()
  var i2317 = data
  i2316.enabled = !!i2317[0]
  i2316.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[1], i2316.rateOverTime)
  i2316.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[2], i2316.rateOverDistance)
  var i2319 = i2317[3]
  var i2318 = []
  for(var i = 0; i < i2319.length; i += 1) {
    i2318.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2319[i + 0]) );
  }
  i2316.bursts = i2318
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2322 = root || new pc.ParticleSystemBurst()
  var i2323 = data
  i2322.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[0], i2322.count)
  i2322.cycleCount = i2323[1]
  i2322.minCount = i2323[2]
  i2322.maxCount = i2323[3]
  i2322.repeatInterval = i2323[4]
  i2322.time = i2323[5]
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2324 = root || new pc.ParticleSystemRotationBySpeed()
  var i2325 = data
  i2324.enabled = !!i2325[0]
  i2324.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2325[1], i2324.x)
  i2324.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2325[2], i2324.y)
  i2324.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2325[3], i2324.z)
  i2324.separateAxes = !!i2325[4]
  i2324.range = new pc.Vec2( i2325[5], i2325[6] )
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2326 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2327 = data
  i2326.enabled = !!i2327[0]
  i2326.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[1], i2326.x)
  i2326.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[2], i2326.y)
  i2326.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2327[3], i2326.z)
  i2326.separateAxes = !!i2327[4]
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2328 = root || new pc.ParticleSystemShape()
  var i2329 = data
  i2328.enabled = !!i2329[0]
  i2328.shapeType = i2329[1]
  i2328.randomDirectionAmount = i2329[2]
  i2328.sphericalDirectionAmount = i2329[3]
  i2328.randomPositionAmount = i2329[4]
  i2328.alignToDirection = !!i2329[5]
  i2328.radius = i2329[6]
  i2328.radiusMode = i2329[7]
  i2328.radiusSpread = i2329[8]
  i2328.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2329[9], i2328.radiusSpeed)
  i2328.radiusThickness = i2329[10]
  i2328.angle = i2329[11]
  i2328.length = i2329[12]
  i2328.boxThickness = new pc.Vec3( i2329[13], i2329[14], i2329[15] )
  i2328.meshShapeType = i2329[16]
  request.r(i2329[17], i2329[18], 0, i2328, 'mesh')
  request.r(i2329[19], i2329[20], 0, i2328, 'meshRenderer')
  request.r(i2329[21], i2329[22], 0, i2328, 'skinnedMeshRenderer')
  i2328.useMeshMaterialIndex = !!i2329[23]
  i2328.meshMaterialIndex = i2329[24]
  i2328.useMeshColors = !!i2329[25]
  i2328.normalOffset = i2329[26]
  i2328.arc = i2329[27]
  i2328.arcMode = i2329[28]
  i2328.arcSpread = i2329[29]
  i2328.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2329[30], i2328.arcSpeed)
  i2328.donutRadius = i2329[31]
  i2328.position = new pc.Vec3( i2329[32], i2329[33], i2329[34] )
  i2328.rotation = new pc.Vec3( i2329[35], i2329[36], i2329[37] )
  i2328.scale = new pc.Vec3( i2329[38], i2329[39], i2329[40] )
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2330 = root || new pc.ParticleSystemSizeBySpeed()
  var i2331 = data
  i2330.enabled = !!i2331[0]
  i2330.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2331[1], i2330.x)
  i2330.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2331[2], i2330.y)
  i2330.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2331[3], i2330.z)
  i2330.separateAxes = !!i2331[4]
  i2330.range = new pc.Vec2( i2331[5], i2331[6] )
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2332 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2333 = data
  i2332.enabled = !!i2333[0]
  i2332.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2333[1], i2332.x)
  i2332.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2333[2], i2332.y)
  i2332.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2333[3], i2332.z)
  i2332.separateAxes = !!i2333[4]
  return i2332
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2334 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2335 = data
  i2334.enabled = !!i2335[0]
  i2334.mode = i2335[1]
  i2334.animation = i2335[2]
  i2334.numTilesX = i2335[3]
  i2334.numTilesY = i2335[4]
  i2334.useRandomRow = !!i2335[5]
  i2334.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2335[6], i2334.frameOverTime)
  i2334.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2335[7], i2334.startFrame)
  i2334.cycleCount = i2335[8]
  i2334.rowIndex = i2335[9]
  i2334.flipU = i2335[10]
  i2334.flipV = i2335[11]
  i2334.spriteCount = i2335[12]
  var i2337 = i2335[13]
  var i2336 = []
  for(var i = 0; i < i2337.length; i += 2) {
  request.r(i2337[i + 0], i2337[i + 1], 2, i2336, '')
  }
  i2334.sprites = i2336
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2340 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2341 = data
  i2340.enabled = !!i2341[0]
  i2340.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[1], i2340.x)
  i2340.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[2], i2340.y)
  i2340.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[3], i2340.z)
  i2340.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[4], i2340.radial)
  i2340.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[5], i2340.speedModifier)
  i2340.space = i2341[6]
  i2340.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[7], i2340.orbitalX)
  i2340.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[8], i2340.orbitalY)
  i2340.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[9], i2340.orbitalZ)
  i2340.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[10], i2340.orbitalOffsetX)
  i2340.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[11], i2340.orbitalOffsetY)
  i2340.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[12], i2340.orbitalOffsetZ)
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2342 = root || new pc.ParticleSystemNoise()
  var i2343 = data
  i2342.enabled = !!i2343[0]
  i2342.separateAxes = !!i2343[1]
  i2342.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2343[2], i2342.strengthX)
  i2342.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2343[3], i2342.strengthY)
  i2342.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2343[4], i2342.strengthZ)
  i2342.frequency = i2343[5]
  i2342.damping = !!i2343[6]
  i2342.octaveCount = i2343[7]
  i2342.octaveMultiplier = i2343[8]
  i2342.octaveScale = i2343[9]
  i2342.quality = i2343[10]
  i2342.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2343[11], i2342.scrollSpeed)
  i2342.scrollSpeedMultiplier = i2343[12]
  i2342.remapEnabled = !!i2343[13]
  i2342.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2343[14], i2342.remapX)
  i2342.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2343[15], i2342.remapY)
  i2342.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2343[16], i2342.remapZ)
  i2342.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2343[17], i2342.positionAmount)
  i2342.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2343[18], i2342.rotationAmount)
  i2342.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2343[19], i2342.sizeAmount)
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2344 = root || new pc.ParticleSystemInheritVelocity()
  var i2345 = data
  i2344.enabled = !!i2345[0]
  i2344.mode = i2345[1]
  i2344.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2345[2], i2344.curve)
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2346 = root || new pc.ParticleSystemForceOverLifetime()
  var i2347 = data
  i2346.enabled = !!i2347[0]
  i2346.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2347[1], i2346.x)
  i2346.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2347[2], i2346.y)
  i2346.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2347[3], i2346.z)
  i2346.space = i2347[4]
  i2346.randomized = !!i2347[5]
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2348 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2349 = data
  i2348.enabled = !!i2349[0]
  i2348.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[1], i2348.limit)
  i2348.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[2], i2348.limitX)
  i2348.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[3], i2348.limitY)
  i2348.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[4], i2348.limitZ)
  i2348.dampen = i2349[5]
  i2348.separateAxes = !!i2349[6]
  i2348.space = i2349[7]
  i2348.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[8], i2348.drag)
  i2348.multiplyDragByParticleSize = !!i2349[9]
  i2348.multiplyDragByParticleVelocity = !!i2349[10]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2351 = data
  request.r(i2351[0], i2351[1], 0, i2350, 'mesh')
  i2350.meshCount = i2351[2]
  i2350.activeVertexStreamsCount = i2351[3]
  i2350.alignment = i2351[4]
  i2350.renderMode = i2351[5]
  i2350.sortMode = i2351[6]
  i2350.lengthScale = i2351[7]
  i2350.velocityScale = i2351[8]
  i2350.cameraVelocityScale = i2351[9]
  i2350.normalDirection = i2351[10]
  i2350.sortingFudge = i2351[11]
  i2350.minParticleSize = i2351[12]
  i2350.maxParticleSize = i2351[13]
  i2350.pivot = new pc.Vec3( i2351[14], i2351[15], i2351[16] )
  request.r(i2351[17], i2351[18], 0, i2350, 'trailMaterial')
  i2350.applyActiveColorSpace = !!i2351[19]
  i2350.enabled = !!i2351[20]
  request.r(i2351[21], i2351[22], 0, i2350, 'sharedMaterial')
  var i2353 = i2351[23]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 2) {
  request.r(i2353[i + 0], i2353[i + 1], 2, i2352, '')
  }
  i2350.sharedMaterials = i2352
  i2350.receiveShadows = !!i2351[24]
  i2350.shadowCastingMode = i2351[25]
  i2350.sortingLayerID = i2351[26]
  i2350.sortingOrder = i2351[27]
  i2350.lightmapIndex = i2351[28]
  i2350.lightmapSceneIndex = i2351[29]
  i2350.lightmapScaleOffset = new pc.Vec4( i2351[30], i2351[31], i2351[32], i2351[33] )
  i2350.lightProbeUsage = i2351[34]
  i2350.reflectionProbeUsage = i2351[35]
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2357 = data
  i2356.name = i2357[0]
  i2356.tagId = i2357[1]
  i2356.enabled = !!i2357[2]
  i2356.isStatic = !!i2357[3]
  i2356.layer = i2357[4]
  return i2356
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i2358 = root || request.c( 'MenuLevel' )
  var i2359 = data
  request.r(i2359[0], i2359[1], 0, i2358, 'menuLevelBtnUpdate')
  var i2361 = i2359[2]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.push( request.d('MenuLevelData', i2361[i + 0]) );
  }
  i2358.AllSteps = i2360
  request.r(i2359[3], i2359[4], 0, i2358, 'buttonparent')
  var i2363 = i2359[5]
  var i2362 = []
  for(var i = 0; i < i2363.length; i += 2) {
  request.r(i2363[i + 0], i2363[i + 1], 2, i2362, '')
  }
  i2358.BtnsDotweenAnims = i2362
  var i2365 = i2359[6]
  var i2364 = []
  for(var i = 0; i < i2365.length; i += 2) {
  request.r(i2365[i + 0], i2365[i + 1], 2, i2364, '')
  }
  i2358.BtnsCols = i2364
  request.r(i2359[7], i2359[8], 0, i2358, 'mainGameView')
  request.r(i2359[9], i2359[10], 0, i2358, 'Storyboard')
  request.r(i2359[11], i2359[12], 0, i2358, 'BgMusic')
  request.r(i2359[13], i2359[14], 0, i2358, 'BgStoryMusic')
  request.r(i2359[15], i2359[16], 0, i2358, 'Hand_Tut1')
  request.r(i2359[17], i2359[18], 0, i2358, 'Button_Hand')
  var i2367 = i2359[19]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 2) {
  request.r(i2367[i + 0], i2367[i + 1], 2, i2366, '')
  }
  i2358.itemEnable_Onstart = i2366
  var i2369 = i2359[20]
  var i2368 = []
  for(var i = 0; i < i2369.length; i += 2) {
  request.r(i2369[i + 0], i2369[i + 1], 2, i2368, '')
  }
  i2358.itemDisable_Onstart = i2368
  var i2371 = i2359[21]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 2) {
  request.r(i2371[i + 0], i2371[i + 1], 2, i2370, '')
  }
  i2358.itemEnable_Oncomplete = i2370
  var i2373 = i2359[22]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 2) {
  request.r(i2373[i + 0], i2373[i + 1], 2, i2372, '')
  }
  i2358.itemDisable_Oncomplete = i2372
  i2358.levelKey = i2359[23]
  i2358.revealDirtyHoldTime = i2359[24]
  return i2358
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i2376 = root || request.c( 'MenuLevelData' )
  var i2377 = data
  i2376.Name = i2377[0]
  request.r(i2377[1], i2377[2], 0, i2376, 'UiBtn')
  request.r(i2377[3], i2377[4], 0, i2376, 'TickBtn')
  request.r(i2377[5], i2377[6], 0, i2376, 'ExclamationIcon')
  var i2379 = i2377[7]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 2) {
  request.r(i2379[i + 0], i2379[i + 1], 2, i2378, '')
  }
  i2376.Item_Dirty = i2378
  var i2381 = i2377[8]
  var i2380 = []
  for(var i = 0; i < i2381.length; i += 2) {
  request.r(i2381[i + 0], i2381[i + 1], 2, i2380, '')
  }
  i2376.Item_Clean = i2380
  request.r(i2377[9], i2377[10], 0, i2376, 'CompleteParticle')
  return i2376
}

Deserializers["IntroLevelAnim"] = function (request, data, root) {
  var i2388 = root || request.c( 'IntroLevelAnim' )
  var i2389 = data
  request.r(i2389[0], i2389[1], 0, i2388, 'menuLevel')
  i2388.lvlkey = i2389[2]
  request.r(i2389[3], i2389[4], 0, i2388, 'DressChangeObj')
  request.r(i2389[5], i2389[6], 0, i2388, 'DressChangeClip')
  return i2388
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i2390 = root || request.c( 'Level_PoseController' )
  var i2391 = data
  var i2393 = i2391[0]
  var i2392 = []
  for(var i = 0; i < i2393.length; i += 2) {
  request.r(i2393[i + 0], i2393[i + 1], 2, i2392, '')
  }
  i2390.itemToShow = i2392
  var i2395 = i2391[1]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 2) {
  request.r(i2395[i + 0], i2395[i + 1], 2, i2394, '')
  }
  i2390.itemToHide = i2394
  i2390.stepTarget = i2391[2]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2397 = data
  i2396.color = new pc.Color(i2397[0], i2397[1], i2397[2], i2397[3])
  request.r(i2397[4], i2397[5], 0, i2396, 'sprite')
  i2396.flipX = !!i2397[6]
  i2396.flipY = !!i2397[7]
  i2396.drawMode = i2397[8]
  i2396.size = new pc.Vec2( i2397[9], i2397[10] )
  i2396.tileMode = i2397[11]
  i2396.adaptiveModeThreshold = i2397[12]
  i2396.maskInteraction = i2397[13]
  i2396.spriteSortPoint = i2397[14]
  i2396.enabled = !!i2397[15]
  request.r(i2397[16], i2397[17], 0, i2396, 'sharedMaterial')
  var i2399 = i2397[18]
  var i2398 = []
  for(var i = 0; i < i2399.length; i += 2) {
  request.r(i2399[i + 0], i2399[i + 1], 2, i2398, '')
  }
  i2396.sharedMaterials = i2398
  i2396.receiveShadows = !!i2397[19]
  i2396.shadowCastingMode = i2397[20]
  i2396.sortingLayerID = i2397[21]
  i2396.sortingOrder = i2397[22]
  i2396.lightmapIndex = i2397[23]
  i2396.lightmapSceneIndex = i2397[24]
  i2396.lightmapScaleOffset = new pc.Vec4( i2397[25], i2397[26], i2397[27], i2397[28] )
  i2396.lightProbeUsage = i2397[29]
  i2396.reflectionProbeUsage = i2397[30]
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2401 = data
  request.r(i2401[0], i2401[1], 0, i2400, 'animatorController')
  request.r(i2401[2], i2401[3], 0, i2400, 'avatar')
  i2400.updateMode = i2401[4]
  i2400.hasTransformHierarchy = !!i2401[5]
  i2400.applyRootMotion = !!i2401[6]
  var i2403 = i2401[7]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 2) {
  request.r(i2403[i + 0], i2403[i + 1], 2, i2402, '')
  }
  i2400.humanBones = i2402
  i2400.enabled = !!i2401[8]
  return i2400
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i2406 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i2407 = data
  request.r(i2407[0], i2407[1], 0, i2406, 'm_RootBone')
  var i2409 = i2407[2]
  var i2408 = []
  for(var i = 0; i < i2409.length; i += 2) {
  request.r(i2409[i + 0], i2409[i + 1], 2, i2408, '')
  }
  i2406.m_BoneTransforms = i2408
  i2406.m_AlwaysUpdate = !!i2407[3]
  i2406.m_AutoRebind = !!i2407[4]
  return i2406
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2410 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2411 = data
  i2410.targetIsSelf = !!i2411[0]
  request.r(i2411[1], i2411[2], 0, i2410, 'targetGO')
  i2410.tweenTargetIsTargetGO = !!i2411[3]
  i2410.delay = i2411[4]
  i2410.duration = i2411[5]
  i2410.easeType = i2411[6]
  i2410.easeCurve = new pc.AnimationCurve( { keys_flow: i2411[7] } )
  i2410.loopType = i2411[8]
  i2410.loops = i2411[9]
  i2410.id = i2411[10]
  i2410.isRelative = !!i2411[11]
  i2410.isFrom = !!i2411[12]
  i2410.isIndependentUpdate = !!i2411[13]
  i2410.autoKill = !!i2411[14]
  i2410.autoGenerate = !!i2411[15]
  i2410.isActive = !!i2411[16]
  i2410.isValid = !!i2411[17]
  request.r(i2411[18], i2411[19], 0, i2410, 'target')
  i2410.animationType = i2411[20]
  i2410.targetType = i2411[21]
  i2410.forcedTargetType = i2411[22]
  i2410.autoPlay = !!i2411[23]
  i2410.useTargetAsV3 = !!i2411[24]
  i2410.endValueFloat = i2411[25]
  i2410.endValueV3 = new pc.Vec3( i2411[26], i2411[27], i2411[28] )
  i2410.endValueV2 = new pc.Vec2( i2411[29], i2411[30] )
  i2410.endValueColor = new pc.Color(i2411[31], i2411[32], i2411[33], i2411[34])
  i2410.endValueString = i2411[35]
  i2410.endValueRect = UnityEngine.Rect.MinMaxRect(i2411[36], i2411[37], i2411[38], i2411[39])
  request.r(i2411[40], i2411[41], 0, i2410, 'endValueTransform')
  i2410.optionalBool0 = !!i2411[42]
  i2410.optionalBool1 = !!i2411[43]
  i2410.optionalFloat0 = i2411[44]
  i2410.optionalInt0 = i2411[45]
  i2410.optionalRotationMode = i2411[46]
  i2410.optionalScrambleMode = i2411[47]
  i2410.optionalShakeRandomnessMode = i2411[48]
  i2410.optionalString = i2411[49]
  i2410.updateType = i2411[50]
  i2410.isSpeedBased = !!i2411[51]
  i2410.hasOnStart = !!i2411[52]
  i2410.hasOnPlay = !!i2411[53]
  i2410.hasOnUpdate = !!i2411[54]
  i2410.hasOnStepComplete = !!i2411[55]
  i2410.hasOnComplete = !!i2411[56]
  i2410.hasOnTweenCreated = !!i2411[57]
  i2410.hasOnRewind = !!i2411[58]
  i2410.onStart = request.d('UnityEngine.Events.UnityEvent', i2411[59], i2410.onStart)
  i2410.onPlay = request.d('UnityEngine.Events.UnityEvent', i2411[60], i2410.onPlay)
  i2410.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2411[61], i2410.onUpdate)
  i2410.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2411[62], i2410.onStepComplete)
  i2410.onComplete = request.d('UnityEngine.Events.UnityEvent', i2411[63], i2410.onComplete)
  i2410.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2411[64], i2410.onTweenCreated)
  i2410.onRewind = request.d('UnityEngine.Events.UnityEvent', i2411[65], i2410.onRewind)
  return i2410
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2412 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2413 = data
  i2412.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2413[0], i2412.m_PersistentCalls)
  return i2412
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2414 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2415 = data
  var i2417 = i2415[0]
  var i2416 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2417.length; i += 1) {
    i2416.add(request.d('UnityEngine.Events.PersistentCall', i2417[i + 0]));
  }
  i2414.m_Calls = i2416
  return i2414
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2420 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2421 = data
  request.r(i2421[0], i2421[1], 0, i2420, 'm_Target')
  i2420.m_TargetAssemblyTypeName = i2421[2]
  i2420.m_MethodName = i2421[3]
  i2420.m_Mode = i2421[4]
  i2420.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2421[5], i2420.m_Arguments)
  i2420.m_CallState = i2421[6]
  return i2420
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i2422 = root || request.c( 'BD_AnimationHelper' )
  var i2423 = data
  i2422.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i2423[0], i2422.OnAnimationComplete)
  request.r(i2423[1], i2423[2], 0, i2422, 'sfxClip')
  return i2422
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2424 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2425 = data
  request.r(i2425[0], i2425[1], 0, i2424, 'm_ObjectArgument')
  i2424.m_ObjectArgumentAssemblyTypeName = i2425[2]
  i2424.m_IntArgument = i2425[3]
  i2424.m_FloatArgument = i2425[4]
  i2424.m_StringArgument = i2425[5]
  i2424.m_BoolArgument = !!i2425[6]
  return i2424
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i2426 = root || request.c( 'SpriteButton' )
  var i2427 = data
  i2426.isLocked = !!i2427[0]
  i2426.lockMsg = i2427[1]
  i2426.onClick = request.d('UnityEngine.Events.UnityEvent', i2427[2], i2426.onClick)
  i2426.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i2427[3], i2426.onLockedClick)
  i2426.isLevelBtnSfx = !!i2427[4]
  request.r(i2427[5], i2427[6], 0, i2426, 'pivot')
  i2426.reductionChange = i2427[7]
  i2426.animationDuration = i2427[8]
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2429 = data
  i2428.usedByComposite = !!i2429[0]
  i2428.autoTiling = !!i2429[1]
  i2428.size = new pc.Vec2( i2429[2], i2429[3] )
  i2428.edgeRadius = i2429[4]
  i2428.enabled = !!i2429[5]
  i2428.isTrigger = !!i2429[6]
  i2428.usedByEffector = !!i2429[7]
  i2428.density = i2429[8]
  i2428.offset = new pc.Vec2( i2429[9], i2429[10] )
  request.r(i2429[11], i2429[12], 0, i2428, 'material')
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i2431 = data
  var i2433 = i2431[0]
  var i2432 = []
  for(var i = 0; i < i2433.length; i += 3) {
    i2432.push( new pc.Vec3( i2433[i + 0], i2433[i + 1], i2433[i + 2] ) );
  }
  i2430.positions = i2432
  i2430.positionCount = i2431[1]
  i2430.time = i2431[2]
  i2430.startWidth = i2431[3]
  i2430.endWidth = i2431[4]
  i2430.widthMultiplier = i2431[5]
  i2430.autodestruct = !!i2431[6]
  i2430.emitting = !!i2431[7]
  i2430.numCornerVertices = i2431[8]
  i2430.numCapVertices = i2431[9]
  i2430.minVertexDistance = i2431[10]
  i2430.colorGradient = i2431[11] ? new pc.ColorGradient(i2431[11][0], i2431[11][1], i2431[11][2]) : null
  i2430.startColor = new pc.Color(i2431[12], i2431[13], i2431[14], i2431[15])
  i2430.endColor = new pc.Color(i2431[16], i2431[17], i2431[18], i2431[19])
  i2430.generateLightingData = !!i2431[20]
  i2430.textureMode = i2431[21]
  i2430.alignment = i2431[22]
  i2430.widthCurve = new pc.AnimationCurve( { keys_flow: i2431[23] } )
  i2430.enabled = !!i2431[24]
  request.r(i2431[25], i2431[26], 0, i2430, 'sharedMaterial')
  var i2435 = i2431[27]
  var i2434 = []
  for(var i = 0; i < i2435.length; i += 2) {
  request.r(i2435[i + 0], i2435[i + 1], 2, i2434, '')
  }
  i2430.sharedMaterials = i2434
  i2430.receiveShadows = !!i2431[28]
  i2430.shadowCastingMode = i2431[29]
  i2430.sortingLayerID = i2431[30]
  i2430.sortingOrder = i2431[31]
  i2430.lightmapIndex = i2431[32]
  i2430.lightmapSceneIndex = i2431[33]
  i2430.lightmapScaleOffset = new pc.Vec4( i2431[34], i2431[35], i2431[36], i2431[37] )
  i2430.lightProbeUsage = i2431[38]
  i2430.reflectionProbeUsage = i2431[39]
  return i2430
}

Deserializers["Level1_Face_Playable"] = function (request, data, root) {
  var i2438 = root || request.c( 'Level1_Face_Playable' )
  var i2439 = data
  i2438.MainZoom = request.d('ZoomPos', i2439[0], i2438.MainZoom)
  request.r(i2439[1], i2439[2], 0, i2438, 'ToolHolder')
  request.r(i2439[3], i2439[4], 0, i2438, 'Tray')
  var i2441 = i2439[5]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 2) {
  request.r(i2441[i + 0], i2441[i + 1], 2, i2440, '')
  }
  i2438.FaceBones = i2440
  request.r(i2439[6], i2439[7], 0, i2438, 'CurrentEye')
  var i2443 = i2439[8]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 2) {
  request.r(i2443[i + 0], i2443[i + 1], 2, i2442, '')
  }
  i2438.EyeSRs = i2442
  var i2445 = i2439[9]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 2) {
  request.r(i2445[i + 0], i2445[i + 1], 2, i2444, '')
  }
  i2438.EyeAnims = i2444
  var i2447 = i2439[10]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 2) {
  request.r(i2447[i + 0], i2447[i + 1], 2, i2446, '')
  }
  i2438.BreathingAnim = i2446
  request.r(i2439[11], i2439[12], 0, i2438, 'brushRubingAudio')
  request.r(i2439[13], i2439[14], 0, i2438, 'brushRubingAudio2')
  i2438.ZoomStep1 = request.d('ZoomPos', i2439[15], i2438.ZoomStep1)
  i2438.ZoomStep1B = request.d('ZoomPos', i2439[16], i2438.ZoomStep1B)
  request.r(i2439[17], i2439[18], 0, i2438, 'Tool1Holder')
  request.r(i2439[19], i2439[20], 0, i2438, 'ToolStep1')
  request.r(i2439[21], i2439[22], 0, i2438, 'ToolStep1CameraFollow')
  request.r(i2439[23], i2439[24], 0, i2438, 'ToolStep1ToolRotate')
  request.r(i2439[25], i2439[26], 0, i2438, 'Holder1')
  request.r(i2439[27], i2439[28], 0, i2438, 'Holder2')
  request.r(i2439[29], i2439[30], 0, i2438, 'Wipe')
  request.r(i2439[31], i2439[32], 0, i2438, 'WipeStart')
  request.r(i2439[33], i2439[34], 0, i2438, 'WipeTarget')
  request.r(i2439[35], i2439[36], 0, i2438, 'BottleAnimator')
  request.r(i2439[37], i2439[38], 0, i2438, 'RemoverBodySR')
  request.r(i2439[39], i2439[40], 0, i2438, 'RemoverBodySprite1')
  request.r(i2439[41], i2439[42], 0, i2438, 'RemoverBodySprite2')
  request.r(i2439[43], i2439[44], 0, i2438, 'HandAnim1')
  request.r(i2439[45], i2439[46], 0, i2438, 'Tap1')
  request.r(i2439[47], i2439[48], 0, i2438, 'DropOnWipe_1')
  request.r(i2439[49], i2439[50], 0, i2438, 'SpreadOnWipe_1')
  request.r(i2439[51], i2439[52], 0, i2438, 'Makeup_1')
  request.r(i2439[53], i2439[54], 0, i2438, 'Eyes_1')
  request.r(i2439[55], i2439[56], 0, i2438, 'makeupRemoverSfx')
  i2438.ZoomStep2 = request.d('ZoomPos', i2439[57], i2438.ZoomStep2)
  i2438.ZoomStep2B = request.d('ZoomPos', i2439[58], i2438.ZoomStep2B)
  request.r(i2439[59], i2439[60], 0, i2438, 'Tool2Holder')
  request.r(i2439[61], i2439[62], 0, i2438, 'CapAnimator_2')
  request.r(i2439[63], i2439[64], 0, i2438, 'ToolStep2')
  request.r(i2439[65], i2439[66], 0, i2438, 'camFollowStep2')
  var i2449 = i2439[67]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 2) {
  request.r(i2449[i + 0], i2449[i + 1], 2, i2448, '')
  }
  i2438.ToolStep2Indications = i2448
  var i2451 = i2439[68]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 2) {
  request.r(i2451[i + 0], i2451[i + 1], 2, i2450, '')
  }
  i2438.Primers2 = i2450
  request.r(i2439[69], i2439[70], 0, i2438, 'primerOpenSfx')
  i2438.ZoomStep3 = request.d('ZoomPos', i2439[71], i2438.ZoomStep3)
  request.r(i2439[72], i2439[73], 0, i2438, 'Tip3')
  request.r(i2439[74], i2439[75], 0, i2438, 'ToolStep3')
  request.r(i2439[76], i2439[77], 0, i2438, 'ToolStep3CameraFollow')
  request.r(i2439[78], i2439[79], 0, i2438, 'HandAnim3')
  var i2453 = i2439[80]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 2) {
  request.r(i2453[i + 0], i2453[i + 1], 2, i2452, '')
  }
  i2438.Primers_3 = i2452
  request.r(i2439[81], i2439[82], 0, i2438, 'PrimerSpread')
  request.r(i2439[83], i2439[84], 0, i2438, 'PrimerAbsorb')
  i2438.ZoomStep4 = request.d('ZoomPos', i2439[85], i2438.ZoomStep4)
  i2438.ZoomStep4B = request.d('ZoomPos', i2439[86], i2438.ZoomStep4B)
  request.r(i2439[87], i2439[88], 0, i2438, 'Tool4Holder')
  request.r(i2439[89], i2439[90], 0, i2438, 'CapAnimator_4')
  request.r(i2439[91], i2439[92], 0, i2438, 'ToolStep4')
  request.r(i2439[93], i2439[94], 0, i2438, 'camFollowStep4')
  request.r(i2439[95], i2439[96], 0, i2438, 'ToolStep4Shadow')
  var i2455 = i2439[97]
  var i2454 = []
  for(var i = 0; i < i2455.length; i += 2) {
  request.r(i2455[i + 0], i2455[i + 1], 2, i2454, '')
  }
  i2438.ToolStep4Indications = i2454
  var i2457 = i2439[98]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 2) {
  request.r(i2457[i + 0], i2457[i + 1], 2, i2456, '')
  }
  i2438.Bases_4 = i2456
  request.r(i2439[99], i2439[100], 0, i2438, 'baseOpenSfx')
  i2438.ZoomStep5 = request.d('ZoomPos', i2439[101], i2438.ZoomStep5)
  request.r(i2439[102], i2439[103], 0, i2438, 'Tool5Holder')
  request.r(i2439[104], i2439[105], 0, i2438, 'Tip5')
  request.r(i2439[106], i2439[107], 0, i2438, 'ToolStep5')
  request.r(i2439[108], i2439[109], 0, i2438, 'ToolStep5CameraFollow')
  request.r(i2439[110], i2439[111], 0, i2438, 'ToolStep5ToolRotate')
  request.r(i2439[112], i2439[113], 0, i2438, 'Tool5Simple')
  request.r(i2439[114], i2439[115], 0, i2438, 'Tool5Picked')
  var i2459 = i2439[116]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 2) {
  request.r(i2459[i + 0], i2459[i + 1], 2, i2458, '')
  }
  i2438.SRsToFade_5 = i2458
  request.r(i2439[117], i2439[118], 0, i2438, 'BaseSpread_5')
  i2438.ZoomStep6 = request.d('ZoomPos', i2439[119], i2438.ZoomStep6)
  i2438.ZoomStep6B = request.d('ZoomPos', i2439[120], i2438.ZoomStep6B)
  request.r(i2439[121], i2439[122], 0, i2438, 'Tap6')
  request.r(i2439[123], i2439[124], 0, i2438, 'Tool6Holder')
  request.r(i2439[125], i2439[126], 0, i2438, 'ToolStep6')
  var i2461 = i2439[127]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 2) {
  request.r(i2461[i + 0], i2461[i + 1], 2, i2460, '')
  }
  i2438.ToolStep6Targets = i2460
  request.r(i2439[128], i2439[129], 0, i2438, 'ToolStep6BrushSR')
  request.r(i2439[130], i2439[131], 0, i2438, 'ToolStep6CameraFollow')
  request.r(i2439[132], i2439[133], 0, i2438, 'ToolStep6ToolRotate')
  request.r(i2439[134], i2439[135], 0, i2438, 'HandAnim6')
  request.r(i2439[136], i2439[137], 0, i2438, 'Particles_6')
  request.r(i2439[138], i2439[139], 0, i2438, 'ObjOpen_6')
  request.r(i2439[140], i2439[141], 0, i2438, 'ObjClose_6')
  request.r(i2439[142], i2439[143], 0, i2438, 'EyeShade_6')
  var i2463 = i2439[144]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 2) {
  request.r(i2463[i + 0], i2463[i + 1], 2, i2462, '')
  }
  i2438.ObjOnHold_6 = i2462
  request.r(i2439[145], i2439[146], 0, i2438, 'EyeColor_6')
  request.r(i2439[147], i2439[148], 0, i2438, 'EyeShadeForOpen_6')
  request.r(i2439[149], i2439[150], 0, i2438, 'EyeShadeOpenSfx')
  i2438.ZoomStep7 = request.d('ZoomPos', i2439[151], i2438.ZoomStep7)
  i2438.ZoomStep7B = request.d('ZoomPos', i2439[152], i2438.ZoomStep7B)
  i2438.ZoomStep7C = request.d('ZoomPos', i2439[153], i2438.ZoomStep7C)
  request.r(i2439[154], i2439[155], 0, i2438, 'Tool7Holder')
  request.r(i2439[156], i2439[157], 0, i2438, 'Tap7')
  request.r(i2439[158], i2439[159], 0, i2438, 'ToolStep7')
  request.r(i2439[160], i2439[161], 0, i2438, 'ToolStep7Actual')
  request.r(i2439[162], i2439[163], 0, i2438, 'ToolStep7Actualb')
  request.r(i2439[164], i2439[165], 0, i2438, 'step7ScratchCard')
  request.r(i2439[166], i2439[167], 0, i2438, 'step7ScratchTip')
  request.r(i2439[168], i2439[169], 0, i2438, 'step7Indication')
  request.r(i2439[170], i2439[171], 0, i2438, 'step7AnimObj')
  request.r(i2439[172], i2439[173], 0, i2438, 'step7AnimObj2')
  request.r(i2439[174], i2439[175], 0, i2438, 'ToolStep7CameraFollow')
  request.r(i2439[176], i2439[177], 0, i2438, 'ToolStep7ToolRotate')
  request.r(i2439[178], i2439[179], 0, i2438, 'ToolStep7Progress')
  request.r(i2439[180], i2439[181], 0, i2438, 'ToolStep7SR')
  var i2465 = i2439[182]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 2) {
  request.r(i2465[i + 0], i2465[i + 1], 2, i2464, '')
  }
  i2438.ObjOpen_7 = i2464
  var i2467 = i2439[183]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 2) {
  request.r(i2467[i + 0], i2467[i + 1], 2, i2466, '')
  }
  i2438.ObjClose_7 = i2466
  var i2469 = i2439[184]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 2) {
  request.r(i2469[i + 0], i2469[i + 1], 2, i2468, '')
  }
  i2438.EyeBones = i2468
  request.r(i2439[185], i2439[186], 0, i2438, 'Tip7')
  var i2471 = i2439[187]
  var i2470 = []
  for(var i = 0; i < i2471.length; i += 2) {
  request.r(i2471[i + 0], i2471[i + 1], 2, i2470, '')
  }
  i2438.ObjOnHold_7 = i2470
  request.r(i2439[188], i2439[189], 0, i2438, 'EyeLine_7')
  request.r(i2439[190], i2439[191], 0, i2438, 'EyeLineForOpen_7')
  request.r(i2439[192], i2439[193], 0, i2438, 'EyeLinerOpenSfx')
  i2438.ZoomStep8 = request.d('ZoomPos', i2439[194], i2438.ZoomStep8)
  i2438.ZoomStep8B = request.d('ZoomPos', i2439[195], i2438.ZoomStep8B)
  i2438.ZoomStep8C = request.d('ZoomPos', i2439[196], i2438.ZoomStep8C)
  request.r(i2439[197], i2439[198], 0, i2438, 'Tool8Holder')
  request.r(i2439[199], i2439[200], 0, i2438, 'Tap8')
  request.r(i2439[201], i2439[202], 0, i2438, 'EyeLashParent_8')
  request.r(i2439[203], i2439[204], 0, i2438, 'ToolStep8')
  request.r(i2439[205], i2439[206], 0, i2438, 'ToolStep8CameraFollow')
  request.r(i2439[207], i2439[208], 0, i2438, 'ToolStep8ToolRotate')
  request.r(i2439[209], i2439[210], 0, i2438, 'ToolStep8Progress')
  request.r(i2439[211], i2439[212], 0, i2438, 'ToolStep8SR')
  request.r(i2439[213], i2439[214], 0, i2438, 'ToolStep8SR2')
  var i2473 = i2439[215]
  var i2472 = []
  for(var i = 0; i < i2473.length; i += 2) {
  request.r(i2473[i + 0], i2473[i + 1], 2, i2472, '')
  }
  i2438.ObjOpen_8 = i2472
  var i2475 = i2439[216]
  var i2474 = []
  for(var i = 0; i < i2475.length; i += 2) {
  request.r(i2475[i + 0], i2475[i + 1], 2, i2474, '')
  }
  i2438.ObjClose_8 = i2474
  request.r(i2439[217], i2439[218], 0, i2438, 'EyeLashes_8')
  request.r(i2439[219], i2439[220], 0, i2438, 'mascaraEyeClose')
  request.r(i2439[221], i2439[222], 0, i2438, 'mascaraIndication')
  request.r(i2439[223], i2439[224], 0, i2438, 'mascaraIndication_R')
  request.r(i2439[225], i2439[226], 0, i2438, 'mascaraOpenSfx')
  i2438.ZoomStep9 = request.d('ZoomPos', i2439[227], i2438.ZoomStep9)
  i2438.ZoomStep9B = request.d('ZoomPos', i2439[228], i2438.ZoomStep9B)
  i2438.ZoomStep9C = request.d('ZoomPos', i2439[229], i2438.ZoomStep9C)
  request.r(i2439[230], i2439[231], 0, i2438, 'Tool9Holder')
  request.r(i2439[232], i2439[233], 0, i2438, 'Tap9')
  request.r(i2439[234], i2439[235], 0, i2438, 'ToolStep9')
  request.r(i2439[236], i2439[237], 0, i2438, 'ToolStep9SR')
  request.r(i2439[238], i2439[239], 0, i2438, 'ToolStep9Sprite')
  request.r(i2439[240], i2439[241], 0, i2438, 'ToolStep9CameraFollow')
  request.r(i2439[242], i2439[243], 0, i2438, 'ToolStep9ToolRotate')
  request.r(i2439[244], i2439[245], 0, i2438, 'ToolStep9Progress')
  request.r(i2439[246], i2439[247], 0, i2438, 'ToolStep9CapAnimator')
  var i2477 = i2439[248]
  var i2476 = []
  for(var i = 0; i < i2477.length; i += 2) {
  request.r(i2477[i + 0], i2477[i + 1], 2, i2476, '')
  }
  i2438.EyeBrowBones = i2476
  request.r(i2439[249], i2439[250], 0, i2438, 'Tip9')
  var i2479 = i2439[251]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 2) {
  request.r(i2479[i + 0], i2479[i + 1], 2, i2478, '')
  }
  i2438.ObjOnHold_9 = i2478
  request.r(i2439[252], i2439[253], 0, i2438, 'EyeBrow_9')
  request.r(i2439[254], i2439[255], 0, i2438, 'EyeBrowIndication')
  request.r(i2439[256], i2439[257], 0, i2438, 'EyeBrowIndication_R')
  request.r(i2439[258], i2439[259], 0, i2438, 'eyeBrowOpenSfx')
  i2438.ZoomStep10 = request.d('ZoomPos', i2439[260], i2438.ZoomStep10)
  i2438.ZoomStep10B = request.d('ZoomPos', i2439[261], i2438.ZoomStep10B)
  request.r(i2439[262], i2439[263], 0, i2438, 'Tool10Holder')
  request.r(i2439[264], i2439[265], 0, i2438, 'Tap10')
  request.r(i2439[266], i2439[267], 0, i2438, 'ToolStep10')
  request.r(i2439[268], i2439[269], 0, i2438, 'ToolStep10CameraFollow')
  request.r(i2439[270], i2439[271], 0, i2438, 'ToolStep10ToolRotate')
  request.r(i2439[272], i2439[273], 0, i2438, 'HandAnim10')
  var i2481 = i2439[274]
  var i2480 = []
  for(var i = 0; i < i2481.length; i += 2) {
  request.r(i2481[i + 0], i2481[i + 1], 2, i2480, '')
  }
  i2438.ToolStep10Tips = i2480
  request.r(i2439[275], i2439[276], 0, i2438, 'Particles_10')
  var i2483 = i2439[277]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 2) {
  request.r(i2483[i + 0], i2483[i + 1], 2, i2482, '')
  }
  i2438.ToolStep10Targets = i2482
  request.r(i2439[278], i2439[279], 0, i2438, 'ToolStep10BrushSR')
  request.r(i2439[280], i2439[281], 0, i2438, 'ObjOpen_10')
  request.r(i2439[282], i2439[283], 0, i2438, 'ObjClose_10')
  var i2485 = i2439[284]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 2) {
  request.r(i2485[i + 0], i2485[i + 1], 2, i2484, '')
  }
  i2438.BlushBones = i2484
  request.r(i2439[285], i2439[286], 0, i2438, 'Tip10')
  request.r(i2439[287], i2439[288], 0, i2438, 'Blush_10')
  request.r(i2439[289], i2439[290], 0, i2438, 'BlushOpenSfx')
  i2438.ZoomStep11 = request.d('ZoomPos', i2439[291], i2438.ZoomStep11)
  i2438.ZoomStep11B = request.d('ZoomPos', i2439[292], i2438.ZoomStep11B)
  request.r(i2439[293], i2439[294], 0, i2438, 'Tool11Holder')
  request.r(i2439[295], i2439[296], 0, i2438, 'Tap11')
  request.r(i2439[297], i2439[298], 0, i2438, 'ToolStep11')
  request.r(i2439[299], i2439[300], 0, i2438, 'ToolStep11Animator')
  request.r(i2439[301], i2439[302], 0, i2438, 'ToolStep11CameraFollow')
  request.r(i2439[303], i2439[304], 0, i2438, 'ToolStep11ToolRotate')
  request.r(i2439[305], i2439[306], 0, i2438, 'HandAnim11')
  request.r(i2439[307], i2439[308], 0, i2438, 'ToolStep11CapAnimator')
  request.r(i2439[309], i2439[310], 0, i2438, 'ToolStep11Shadow')
  var i2487 = i2439[311]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 2) {
  request.r(i2487[i + 0], i2487[i + 1], 2, i2486, '')
  }
  i2438.LipstickBones = i2486
  request.r(i2439[312], i2439[313], 0, i2438, 'Tip11')
  request.r(i2439[314], i2439[315], 0, i2438, 'LipClose')
  request.r(i2439[316], i2439[317], 0, i2438, 'lipstickOpenSfx')
  request.r(i2439[318], i2439[319], 0, i2438, 'lipstickOpenSfx2')
  request.r(i2439[320], i2439[321], 0, i2438, 'lipstickMmmSfx')
  i2438.levelName = i2439[322]
  i2438.levelReward = i2439[323]
  request.r(i2439[324], i2439[325], 0, i2438, 'LevelIcon')
  request.r(i2439[326], i2439[327], 0, i2438, 'Level_BG')
  var i2489 = i2439[328]
  var i2488 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2489.length; i += 2) {
  request.r(i2489[i + 0], i2489[i + 1], 1, i2488, '')
  }
  i2438.ToolIcons = i2488
  var i2491 = i2439[329]
  var i2490 = []
  for(var i = 0; i < i2491.length; i += 2) {
  request.r(i2491[i + 0], i2491[i + 1], 2, i2490, '')
  }
  i2438.AllDrags = i2490
  var i2493 = i2439[330]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 2) {
  request.r(i2493[i + 0], i2493[i + 1], 2, i2492, '')
  }
  i2438.AllSources = i2492
  var i2495 = i2439[331]
  var i2494 = []
  for(var i = 0; i < i2495.length; i += 2) {
  request.r(i2495[i + 0], i2495[i + 1], 2, i2494, '')
  }
  i2438.AllScratches = i2494
  i2438.stepsDone = i2439[332]
  i2438.levelNo = i2439[333]
  i2438.partNo = i2439[334]
  return i2438
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i2496 = root || request.c( 'ZoomPos' )
  var i2497 = data
  i2496.CameraPos = new pc.Vec3( i2497[0], i2497[1], i2497[2] )
  i2496.CameraFOV = i2497[3]
  return i2496
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i2512 = root || request.c( 'PlayableCTA' )
  var i2513 = data
  i2512.trigger = i2513[0]
  i2512.afterSeconds = i2513[1]
  i2512.afterTaps = i2513[2]
  request.r(i2513[3], i2513[4], 0, i2512, 'scratchProgress')
  i2512.scratchIndex = i2513[5]
  i2512.progressThreshold = i2513[6]
  request.r(i2513[7], i2513[8], 0, i2512, 'watchedTool')
  i2512.blockInputOnFire = !!i2513[9]
  i2512.refireOnEveryTap = !!i2513[10]
  i2512.refireDelay = i2513[11]
  i2512.showEndCard = !!i2513[12]
  request.r(i2513[13], i2513[14], 0, i2512, 'endCard')
  i2512.endCardDelay = i2513[15]
  i2512.showEndCardOnProgressTrigger = !!i2513[16]
  i2512.showEndCardOnToolAppearTrigger = !!i2513[17]
  i2512.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i2513[18], i2512.onCtaFired)
  i2512.logWhenFired = !!i2513[19]
  return i2512
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i2514 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i2515 = data
  request.r(i2515[0], i2515[1], 0, i2514, 'MainCamera')
  i2514.RenderType = i2515[2]
  request.r(i2515[3], i2515[4], 0, i2514, 'ScratchSurfaceSprite')
  i2514.ScratchSurfaceSpriteHasAlpha = !!i2515[5]
  i2514.MaskProgressCutOffValue = i2515[6]
  request.r(i2515[7], i2515[8], 0, i2514, 'EraseTexture')
  i2514.EraseTextureScale = new pc.Vec2( i2515[9], i2515[10] )
  i2514.InputEnabled = !!i2515[11]
  request.r(i2515[12], i2515[13], 0, i2514, 'Card')
  i2514.Mode = i2515[14]
  request.r(i2515[15], i2515[16], 0, i2514, 'Progress')
  request.r(i2515[17], i2515[18], 0, i2514, 'MeshCard')
  request.r(i2515[19], i2515[20], 0, i2514, 'SpriteCard')
  request.r(i2515[21], i2515[22], 0, i2514, 'ImageCard')
  request.r(i2515[23], i2515[24], 0, i2514, 'MaskShader')
  request.r(i2515[25], i2515[26], 0, i2514, 'BrushShader')
  request.r(i2515[27], i2515[28], 0, i2514, 'MaskProgressShader')
  request.r(i2515[29], i2515[30], 0, i2514, 'MaskProgressCutOffShader')
  return i2514
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i2516 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i2517 = data
  request.r(i2517[0], i2517[1], 0, i2516, 'MainCamera')
  request.r(i2517[2], i2517[3], 0, i2516, 'Surface')
  i2516.RenderTextureQuality = i2517[4]
  request.r(i2517[5], i2517[6], 0, i2516, 'Eraser')
  request.r(i2517[7], i2517[8], 0, i2516, 'Progress')
  request.r(i2517[9], i2517[10], 0, i2516, 'ScratchSurface')
  request.r(i2517[11], i2517[12], 0, i2516, 'RenderTexture')
  i2516.BrushScale = new pc.Vec2( i2517[13], i2517[14] )
  request.r(i2517[15], i2517[16], 0, i2516, 'ToolTip')
  i2516.InputEnabled = !!i2517[17]
  i2516.IsScratching = !!i2517[18]
  i2516.useChangingScale = !!i2517[19]
  i2516.useGivenBrushScale = !!i2517[20]
  i2516.canSpreadMask = !!i2517[21]
  i2516.shouldPaintHoles = !!i2517[22]
  i2516.canRotateTip = !!i2517[23]
  i2516._mode = i2517[24]
  return i2516
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i2518 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i2519 = data
  request.r(i2519[0], i2519[1], 0, i2518, 'Card')
  i2518.currentProgress = i2519[2]
  return i2518
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i2520 = root || request.c( 'InteractableBones' )
  var i2521 = data
  request.r(i2521[0], i2521[1], 0, i2520, 'Tip')
  i2520.MoveAmount = i2521[2]
  i2520.MoveSpeed = i2521[3]
  i2520.ShakeSpeed = i2521[4]
  i2520.MovementThreshold = i2521[5]
  i2520.MoveX = !!i2521[6]
  i2520.MoveY = !!i2521[7]
  return i2520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i2522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i2523 = data
  i2522.usedByComposite = !!i2523[0]
  i2522.autoTiling = !!i2523[1]
  var i2525 = i2523[2]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
  var i2527 = i2525[i + 0]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 2) {
    i2526.push( new pc.Vec2( i2527[i + 0], i2527[i + 1] ) );
  }
    i2524.push( i2526 );
  }
  i2522.points = i2524
  i2522.enabled = !!i2523[3]
  i2522.isTrigger = !!i2523[4]
  i2522.usedByEffector = !!i2523[5]
  i2522.density = i2523[6]
  i2522.offset = new pc.Vec2( i2523[7], i2523[8] )
  request.r(i2523[9], i2523[10], 0, i2522, 'material')
  return i2522
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i2534 = root || request.c( 'PlaySfxOnCollision' )
  var i2535 = data
  request.r(i2535[0], i2535[1], 0, i2534, 'Tip')
  i2534.Mode = i2535[2]
  request.r(i2535[3], i2535[4], 0, i2534, 'DragInput')
  request.r(i2535[5], i2535[6], 0, i2534, 'Source')
  i2534.startVol = i2535[7]
  i2534.targetVol = i2535[8]
  i2534.duration = i2535[9]
  request.r(i2535[10], i2535[11], 0, i2534, 'Particles')
  i2534.isDone = !!i2535[12]
  i2534.isInArea = !!i2535[13]
  i2534.isPlaying = !!i2535[14]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2537 = data
  request.r(i2537[0], i2537[1], 0, i2536, 'clip')
  request.r(i2537[2], i2537[3], 0, i2536, 'outputAudioMixerGroup')
  i2536.playOnAwake = !!i2537[4]
  i2536.loop = !!i2537[5]
  i2536.time = i2537[6]
  i2536.volume = i2537[7]
  i2536.pitch = i2537[8]
  i2536.enabled = !!i2537[9]
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2539 = data
  i2538.radius = i2539[0]
  i2538.enabled = !!i2539[1]
  i2538.isTrigger = !!i2539[2]
  i2538.usedByEffector = !!i2539[3]
  i2538.density = i2539[4]
  i2538.offset = new pc.Vec2( i2539[5], i2539[6] )
  request.r(i2539[7], i2539[8], 0, i2538, 'material')
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i2541 = data
  i2540.textureMode = i2541[0]
  i2540.alignment = i2541[1]
  i2540.widthCurve = new pc.AnimationCurve( { keys_flow: i2541[2] } )
  i2540.colorGradient = i2541[3] ? new pc.ColorGradient(i2541[3][0], i2541[3][1], i2541[3][2]) : null
  var i2543 = i2541[4]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 3) {
    i2542.push( new pc.Vec3( i2543[i + 0], i2543[i + 1], i2543[i + 2] ) );
  }
  i2540.positions = i2542
  i2540.positionCount = i2541[5]
  i2540.widthMultiplier = i2541[6]
  i2540.startWidth = i2541[7]
  i2540.endWidth = i2541[8]
  i2540.numCornerVertices = i2541[9]
  i2540.numCapVertices = i2541[10]
  i2540.useWorldSpace = !!i2541[11]
  i2540.loop = !!i2541[12]
  i2540.startColor = new pc.Color(i2541[13], i2541[14], i2541[15], i2541[16])
  i2540.endColor = new pc.Color(i2541[17], i2541[18], i2541[19], i2541[20])
  i2540.generateLightingData = !!i2541[21]
  i2540.enabled = !!i2541[22]
  request.r(i2541[23], i2541[24], 0, i2540, 'sharedMaterial')
  var i2545 = i2541[25]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 2) {
  request.r(i2545[i + 0], i2545[i + 1], 2, i2544, '')
  }
  i2540.sharedMaterials = i2544
  i2540.receiveShadows = !!i2541[26]
  i2540.shadowCastingMode = i2541[27]
  i2540.sortingLayerID = i2541[28]
  i2540.sortingOrder = i2541[29]
  i2540.lightmapIndex = i2541[30]
  i2540.lightmapSceneIndex = i2541[31]
  i2540.lightmapScaleOffset = new pc.Vec4( i2541[32], i2541[33], i2541[34], i2541[35] )
  i2540.lightProbeUsage = i2541[36]
  i2540.reflectionProbeUsage = i2541[37]
  return i2540
}

Deserializers["TextureOffsetScroller"] = function (request, data, root) {
  var i2546 = root || request.c( 'TextureOffsetScroller' )
  var i2547 = data
  i2546.scrollSpeed = new pc.Vec2( i2547[0], i2547[1] )
  i2546.smoothStart = !!i2547[2]
  i2546.smoothDuration = i2547[3]
  i2546.textureName = i2547[4]
  i2546.useSharedMaterial = !!i2547[5]
  return i2546
}

Deserializers["Lvl1_EyeOpenClose"] = function (request, data, root) {
  var i2548 = root || request.c( 'Lvl1_EyeOpenClose' )
  var i2549 = data
  request.r(i2549[0], i2549[1], 0, i2548, 'ThisLevel')
  request.r(i2549[2], i2549[3], 0, i2548, 'ThisDrag')
  request.r(i2549[4], i2549[5], 0, i2548, 'Tip')
  return i2548
}

Deserializers["Lvl1_EyeOpenClose_Shampoo"] = function (request, data, root) {
  var i2550 = root || request.c( 'Lvl1_EyeOpenClose_Shampoo' )
  var i2551 = data
  request.r(i2551[0], i2551[1], 0, i2550, 'ThisLevel')
  request.r(i2551[2], i2551[3], 0, i2550, 'ThisDrag')
  request.r(i2551[4], i2551[5], 0, i2550, 'Tip')
  return i2550
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i2552 = root || request.c( 'BD_AnimatorDrag' )
  var i2553 = data
  request.r(i2553[0], i2553[1], 0, i2552, 'BD')
  request.r(i2553[2], i2553[3], 0, i2552, 'anim')
  request.r(i2553[4], i2553[5], 0, i2552, 'Source')
  i2552.Vibration = !!i2553[6]
  i2552.isCompletable = !!i2553[7]
  i2552.completionThreshold = i2553[8]
  i2552.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2553[9], i2552.OnComplete)
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2555 = data
  i2554.bodyType = i2555[0]
  request.r(i2555[1], i2555[2], 0, i2554, 'material')
  i2554.simulated = !!i2555[3]
  i2554.useAutoMass = !!i2555[4]
  i2554.mass = i2555[5]
  i2554.drag = i2555[6]
  i2554.angularDrag = i2555[7]
  i2554.gravityScale = i2555[8]
  i2554.collisionDetectionMode = i2555[9]
  i2554.sleepMode = i2555[10]
  i2554.constraints = i2555[11]
  return i2554
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i2556 = root || request.c( 'BasicDrag' )
  var i2557 = data
  i2556.canDrag = !!i2557[0]
  i2556.dragByDelta = !!i2557[1]
  i2556.isDragging = !!i2557[2]
  i2556.moveWithPointer = !!i2557[3]
  i2556.followSpeed = i2557[4]
  i2556.canReturn = !!i2557[5]
  i2556.jumpOnReturn = !!i2557[6]
  i2556.returnTime = i2557[7]
  i2556.Tool_Offset = new pc.Vec3( i2557[8], i2557[9], i2557[10] )
  i2556.canScaleIncrease = !!i2557[11]
  i2556.Self_ScaleNew = new pc.Vec3( i2557[12], i2557[13], i2557[14] )
  i2556.canRotateOnPick = !!i2557[15]
  i2556.startRot = new pc.Vec3( i2557[16], i2557[17], i2557[18] )
  i2556.newRot = new pc.Vec3( i2557[19], i2557[20], i2557[21] )
  var i2559 = i2557[22]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 2) {
  request.r(i2559[i + 0], i2559[i + 1], 2, i2558, '')
  }
  i2556.childSprite = i2558
  request.r(i2557[23], i2557[24], 0, i2556, 'ToolSelectClip')
  request.r(i2557[25], i2557[26], 0, i2556, 'ToolLoopClip')
  request.r(i2557[27], i2557[28], 0, i2556, 'thisParticles')
  i2556.onDragparticle = !!i2557[29]
  request.r(i2557[30], i2557[31], 0, i2556, 'dragParticles')
  request.r(i2557[32], i2557[33], 0, i2556, 'anim')
  i2556.startPos = new pc.Vec3( i2557[34], i2557[35], i2557[36] )
  i2556.startScale = new pc.Vec3( i2557[37], i2557[38], i2557[39] )
  i2556.Vibration = !!i2557[40]
  i2556.isPlacedCannotMove = !!i2557[41]
  i2556.isObjectMovingWhileDragging = !!i2557[42]
  i2556.OnMouseDownEvent = request.d('System.Action', i2557[43], i2556.OnMouseDownEvent)
  i2556.OnMouseUpEvent = request.d('System.Action', i2557[44], i2556.OnMouseUpEvent)
  i2556.ProgStartEvent = request.d('System.Action', i2557[45], i2556.ProgStartEvent)
  i2556.ProgEndEvent = request.d('System.Action', i2557[46], i2556.ProgEndEvent)
  i2556.canCallMouseUpWhenGamePaused = !!i2557[47]
  i2556.ClampX_L = i2557[48]
  i2556.ClampX_H = i2557[49]
  i2556.ClampY_L = i2557[50]
  i2556.ClampY_H = i2557[51]
  i2556.startOrder = i2557[52]
  i2556.dontResetItIsInCollider = !!i2557[53]
  request.r(i2557[54], i2557[55], 0, i2556, 'thisCollider')
  request.r(i2557[56], i2557[57], 0, i2556, 'thisSR')
  i2556.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i2557[58], i2556.OnMouseDownEventIndependentFromCanDrag)
  return i2556
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2560 = root || request.c( 'System.Action' )
  var i2561 = data
  return i2560
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i2562 = root || request.c( 'BD_Progress' )
  var i2563 = data
  var i2565 = i2563[0]
  var i2564 = []
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.push( request.d('ScratchData', i2565[i + 0]) );
  }
  i2562.AllScratches = i2564
  i2562.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i2563[1], i2562.OnScratchComplete)
  i2562.isProgDone = !!i2563[2]
  i2562.canCallComplete = !!i2563[3]
  i2562.CollectiveAppear = !!i2563[4]
  i2562.tipControl = !!i2563[5]
  i2562.progressControl = !!i2563[6]
  request.r(i2563[7], i2563[8], 0, i2562, 'thisDrag')
  i2562.CompleteEvent = request.d('System.Action', i2563[9], i2562.CompleteEvent)
  i2562.SubCompleteEvent = request.d('System.Action', i2563[10], i2562.SubCompleteEvent)
  return i2562
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i2568 = root || request.c( 'ScratchData' )
  var i2569 = data
  request.r(i2569[0], i2569[1], 0, i2568, 'ScratchManager')
  i2568.scratchLimit = i2569[2]
  i2568.isComplete = !!i2569[3]
  return i2568
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i2570 = root || request.c( 'ActionOnTap' )
  var i2571 = data
  i2570.OnTap = request.d('UnityEngine.Events.UnityEvent', i2571[0], i2570.OnTap)
  i2570.OnTapExtra = request.d('System.Action', i2571[1], i2570.OnTapExtra)
  return i2570
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i2572 = root || request.c( 'BD_ProgressHelper' )
  var i2573 = data
  request.r(i2573[0], i2573[1], 0, i2572, 'BD_Progress')
  request.r(i2573[2], i2573[3], 0, i2572, 'fadeSprite')
  i2572.fadeIn = !!i2573[4]
  return i2572
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i2574 = root || request.c( 'BD_Clamp' )
  var i2575 = data
  i2574.ClampX_L = i2575[0]
  i2574.ClampX_H = i2575[1]
  i2574.ClampY_L = i2575[2]
  i2574.ClampY_H = i2575[3]
  return i2574
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i2576 = root || request.c( 'BD_ToolRotate' )
  var i2577 = data
  i2576.startDelay = i2577[0]
  request.r(i2577[1], i2577[2], 0, i2576, 'Tool')
  request.r(i2577[3], i2577[4], 0, i2576, 'Clamp')
  request.r(i2577[5], i2577[6], 0, i2576, 'Pivot')
  i2576.MinAngle = new pc.Vec3( i2577[7], i2577[8], i2577[9] )
  i2576.MaxAngle = new pc.Vec3( i2577[10], i2577[11], i2577[12] )
  i2576.rotationSpeed = i2577[13]
  return i2576
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i2578 = root || request.c( 'BD_CameraFollow' )
  var i2579 = data
  request.r(i2579[0], i2579[1], 0, i2578, 'Tool')
  request.r(i2579[2], i2579[3], 0, i2578, 'Pivot')
  i2578.FOV = i2579[4]
  i2578.Y_L = i2579[5]
  i2578.Y_H = i2579[6]
  i2578.X_L = i2579[7]
  i2578.X_R = i2579[8]
  i2578.startDelay = i2579[9]
  i2578.duration = i2579[10]
  return i2578
}

Deserializers["DraggableObject"] = function (request, data, root) {
  var i2580 = root || request.c( 'DraggableObject' )
  var i2581 = data
  i2580.dragSpeed = i2581[0]
  i2580.rotateOnPick = !!i2581[1]
  i2580.targetRotationAngle = i2581[2]
  i2580.rotationSpeed = i2581[3]
  request.r(i2581[4], i2581[5], 0, i2580, 'dropPrefab')
  request.r(i2581[6], i2581[7], 0, i2580, 'headPoint')
  request.r(i2581[8], i2581[9], 0, i2580, 'AnimPlayer')
  i2580.AnimName = i2581[10]
  i2580.dropDelay = i2581[11]
  request.r(i2581[12], i2581[13], 0, i2580, 'headTriggerCollider')
  var i2583 = i2581[14]
  var i2582 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Collider2D')))
  for(var i = 0; i < i2583.length; i += 2) {
  request.r(i2583[i + 0], i2583[i + 1], 1, i2582, '')
  }
  i2580.dropTargets = i2582
  var i2585 = i2581[15]
  var i2584 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2585.length; i += 2) {
  request.r(i2585[i + 0], i2585[i + 1], 1, i2584, '')
  }
  i2580.ItemsToActive = i2584
  i2580.delayInActivation = i2581[16]
  i2580.offsetFromTarget = new pc.Vec2( i2581[17], i2581[18] )
  i2580.minX = i2581[19]
  i2580.maxX = i2581[20]
  i2580.minY = i2581[21]
  i2580.maxY = i2581[22]
  i2580.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2581[23], i2580.OnComplete)
  i2580.OnMouseDownEvent = request.d('System.Action', i2581[24], i2580.OnMouseDownEvent)
  i2580.OnMouseUpEvent = request.d('System.Action', i2581[25], i2580.OnMouseUpEvent)
  request.r(i2581[26], i2581[27], 0, i2580, 'hitSfx')
  i2580.isDragging = !!i2581[28]
  return i2580
}

Deserializers["DO_CameraFollow"] = function (request, data, root) {
  var i2590 = root || request.c( 'DO_CameraFollow' )
  var i2591 = data
  request.r(i2591[0], i2591[1], 0, i2590, 'Tool')
  request.r(i2591[2], i2591[3], 0, i2590, 'Pivot')
  i2590.FOV = i2591[4]
  i2590.Y_L = i2591[5]
  i2590.Y_H = i2591[6]
  i2590.X_L = i2591[7]
  i2590.X_R = i2591[8]
  i2590.startDelay = i2591[9]
  i2590.duration = i2591[10]
  return i2590
}

Deserializers["Lvl1_Face_AddPrimer"] = function (request, data, root) {
  var i2592 = root || request.c( 'Lvl1_Face_AddPrimer' )
  var i2593 = data
  request.r(i2593[0], i2593[1], 0, i2592, 'ThisLevel')
  request.r(i2593[2], i2593[3], 0, i2592, 'ThisDrag')
  i2592.liteShakeOnThird = !!i2593[4]
  request.r(i2593[5], i2593[6], 0, i2592, 'Col')
  request.r(i2593[7], i2593[8], 0, i2592, 'AnimPlayer')
  i2592.AnimName = i2593[9]
  var i2595 = i2593[10]
  var i2594 = []
  for(var i = 0; i < i2595.length; i += 2) {
  request.r(i2595[i + 0], i2595[i + 1], 2, i2594, '')
  }
  i2592.Detects = i2594
  var i2597 = i2593[11]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 2) {
  request.r(i2597[i + 0], i2597[i + 1], 2, i2596, '')
  }
  i2592.Anims = i2596
  i2592.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2593[12], i2592.OnComplete)
  request.r(i2593[13], i2593[14], 0, i2592, 'Clip')
  var i2599 = i2593[15]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 2) {
  request.r(i2599[i + 0], i2599[i + 1], 2, i2598, '')
  }
  i2592.BonesToShake = i2598
  i2592.currentPrimer = i2593[16]
  return i2592
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i2600 = root || request.c( 'DestroyObj' )
  var i2601 = data
  i2600.destroyDelay = i2601[0]
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2603 = data
  i2602.name = i2603[0]
  i2602.atlasId = i2603[1]
  i2602.mipmapCount = i2603[2]
  i2602.hdr = !!i2603[3]
  i2602.size = i2603[4]
  i2602.anisoLevel = i2603[5]
  i2602.filterMode = i2603[6]
  var i2605 = i2603[7]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 4) {
    i2604.push( UnityEngine.Rect.MinMaxRect(i2605[i + 0], i2605[i + 1], i2605[i + 2], i2605[i + 3]) );
  }
  i2602.rects = i2604
  i2602.wrapU = i2603[8]
  i2602.wrapV = i2603[9]
  return i2602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2609 = data
  i2608.name = i2609[0]
  i2608.index = i2609[1]
  i2608.startup = !!i2609[2]
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2611 = data
  i2610.aspect = i2611[0]
  i2610.orthographic = !!i2611[1]
  i2610.orthographicSize = i2611[2]
  i2610.backgroundColor = new pc.Color(i2611[3], i2611[4], i2611[5], i2611[6])
  i2610.nearClipPlane = i2611[7]
  i2610.farClipPlane = i2611[8]
  i2610.fieldOfView = i2611[9]
  i2610.depth = i2611[10]
  i2610.clearFlags = i2611[11]
  i2610.cullingMask = i2611[12]
  i2610.rect = i2611[13]
  request.r(i2611[14], i2611[15], 0, i2610, 'targetTexture')
  i2610.usePhysicalProperties = !!i2611[16]
  i2610.focalLength = i2611[17]
  i2610.sensorSize = new pc.Vec2( i2611[18], i2611[19] )
  i2610.lensShift = new pc.Vec2( i2611[20], i2611[21] )
  i2610.gateFit = i2611[22]
  i2610.commandBufferCount = i2611[23]
  i2610.cameraType = i2611[24]
  i2610.enabled = !!i2611[25]
  return i2610
}

Deserializers["CameraController"] = function (request, data, root) {
  var i2612 = root || request.c( 'CameraController' )
  var i2613 = data
  request.r(i2613[0], i2613[1], 0, i2612, 'cam')
  i2612.defaultPosition = new pc.Vec3( i2613[2], i2613[3], i2613[4] )
  i2612.defaultSize = i2613[5]
  i2612.defaultFOV = i2613[6]
  i2612.defaultDuration = i2613[7]
  i2612.defaultEase = i2613[8]
  return i2612
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i2614 = root || request.c( 'MusicSource' )
  var i2615 = data
  request.r(i2615[0], i2615[1], 0, i2614, 'source')
  return i2614
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i2616 = root || request.c( 'UI_Manager' )
  var i2617 = data
  i2616.levelCompleted = !!i2617[0]
  i2616.isPauseActive = !!i2617[1]
  i2616.loadIndex = i2617[2]
  request.r(i2617[3], i2617[4], 0, i2616, 'removeAdsButton')
  request.r(i2617[5], i2617[6], 0, i2616, 'pauseButton')
  request.r(i2617[7], i2617[8], 0, i2616, 'Fade_Img')
  request.r(i2617[9], i2617[10], 0, i2616, 'TopBarAnim')
  request.r(i2617[11], i2617[12], 0, i2616, 'MainPanel')
  request.r(i2617[13], i2617[14], 0, i2616, 'PausePanel')
  request.r(i2617[15], i2617[16], 0, i2616, 'PausePopUp')
  request.r(i2617[17], i2617[18], 0, i2616, 'PauseCanvasGroup')
  request.r(i2617[19], i2617[20], 0, i2616, 'RateUsPanel')
  request.r(i2617[21], i2617[22], 0, i2616, 'RateUsPopUp')
  request.r(i2617[23], i2617[24], 0, i2616, 'RemoveAdsPanel')
  request.r(i2617[25], i2617[26], 0, i2616, 'RemoveAdsPopUp')
  request.r(i2617[27], i2617[28], 0, i2616, 'RemoveAdsCanvasGroup')
  var i2619 = i2617[29]
  var i2618 = []
  for(var i = 0; i < i2619.length; i += 2) {
  request.r(i2619[i + 0], i2619[i + 1], 2, i2618, '')
  }
  i2616.RemoveAdsAnims = i2618
  var i2621 = i2617[30]
  var i2620 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2621.length; i += 2) {
  request.r(i2621[i + 0], i2621[i + 1], 1, i2620, '')
  }
  i2616.thingsToDisableWhenCompletePanel = i2620
  request.r(i2617[31], i2617[32], 0, i2616, 'CompletePanel')
  request.r(i2617[33], i2617[34], 0, i2616, 'LevelIcon')
  request.r(i2617[35], i2617[36], 0, i2616, 'CompleteParticles')
  request.r(i2617[37], i2617[38], 0, i2616, 'progressBar')
  request.r(i2617[39], i2617[40], 0, i2616, 'progressText')
  request.r(i2617[41], i2617[42], 0, i2616, 'toolIcon1')
  request.r(i2617[43], i2617[44], 0, i2616, 'toolIcon2')
  request.r(i2617[45], i2617[46], 0, i2616, 'toolIcon3')
  request.r(i2617[47], i2617[48], 0, i2616, 'toolIcon4')
  request.r(i2617[49], i2617[50], 0, i2616, 'target1')
  request.r(i2617[51], i2617[52], 0, i2616, 'target2')
  i2616.toolMoveDuration = i2617[53]
  i2616.currentIndex = i2617[54]
  var i2623 = i2617[55]
  var i2622 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2623.length; i += 2) {
  request.r(i2623[i + 0], i2623[i + 1], 1, i2622, '')
  }
  i2616.allTools = i2622
  request.r(i2617[56], i2617[57], 0, i2616, 'clockProgress')
  request.r(i2617[58], i2617[59], 0, i2616, 'clockProgressFill')
  request.r(i2617[60], i2617[61], 0, i2616, 'clockAudio')
  i2616.moveDistance = i2617[62]
  i2616.animationDuration = i2617[63]
  i2616.greyBgChildName = i2617[64]
  i2616.pushOffset = i2617[65]
  return i2616
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i2624 = root || request.c( 'GameManagerPlayable' )
  var i2625 = data
  request.r(i2625[0], i2625[1], 0, i2624, 'endParticles')
  request.r(i2625[2], i2625[3], 0, i2624, 'stepCompleteParticles')
  request.r(i2625[4], i2625[5], 0, i2624, 'DefaultMat')
  request.r(i2625[6], i2625[7], 0, i2624, 'BG_Music')
  request.r(i2625[8], i2625[9], 0, i2624, 'restoreEffectShader')
  request.r(i2625[10], i2625[11], 0, i2624, 'stickerEffectShader')
  i2624.isComplete = !!i2625[12]
  i2624.isPaused = !!i2625[13]
  request.r(i2625[14], i2625[15], 0, i2624, 'currentLevel')
  i2624.startLevelOnPlay = !!i2625[16]
  i2624.currentLevelNo = i2625[17]
  return i2624
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2626 = root || request.c( 'AudioController' )
  var i2627 = data
  request.r(i2627[0], i2627[1], 0, i2626, 'MainMixer')
  request.r(i2627[2], i2627[3], 0, i2626, 'UiClick')
  request.r(i2627[4], i2627[5], 0, i2626, 'UiClickSource')
  var i2629 = i2627[6]
  var i2628 = []
  for(var i = 0; i < i2629.length; i += 2) {
  request.r(i2629[i + 0], i2629[i + 1], 2, i2628, '')
  }
  i2626.SfxSources = i2628
  var i2631 = i2627[7]
  var i2630 = []
  for(var i = 0; i < i2631.length; i += 2) {
  request.r(i2631[i + 0], i2631[i + 1], 2, i2630, '')
  }
  i2626.AllClips = i2630
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2635 = data
  i2634.pivot = new pc.Vec2( i2635[0], i2635[1] )
  i2634.anchorMin = new pc.Vec2( i2635[2], i2635[3] )
  i2634.anchorMax = new pc.Vec2( i2635[4], i2635[5] )
  i2634.sizeDelta = new pc.Vec2( i2635[6], i2635[7] )
  i2634.anchoredPosition3D = new pc.Vec3( i2635[8], i2635[9], i2635[10] )
  i2634.rotation = new pc.Quat(i2635[11], i2635[12], i2635[13], i2635[14])
  i2634.scale = new pc.Vec3( i2635[15], i2635[16], i2635[17] )
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2637 = data
  i2636.planeDistance = i2637[0]
  i2636.referencePixelsPerUnit = i2637[1]
  i2636.isFallbackOverlay = !!i2637[2]
  i2636.renderMode = i2637[3]
  i2636.renderOrder = i2637[4]
  i2636.sortingLayerName = i2637[5]
  i2636.sortingOrder = i2637[6]
  i2636.scaleFactor = i2637[7]
  request.r(i2637[8], i2637[9], 0, i2636, 'worldCamera')
  i2636.overrideSorting = !!i2637[10]
  i2636.pixelPerfect = !!i2637[11]
  i2636.targetDisplay = i2637[12]
  i2636.overridePixelPerfect = !!i2637[13]
  i2636.enabled = !!i2637[14]
  return i2636
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2638 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2639 = data
  i2638.m_UiScaleMode = i2639[0]
  i2638.m_ReferencePixelsPerUnit = i2639[1]
  i2638.m_ScaleFactor = i2639[2]
  i2638.m_ReferenceResolution = new pc.Vec2( i2639[3], i2639[4] )
  i2638.m_ScreenMatchMode = i2639[5]
  i2638.m_MatchWidthOrHeight = i2639[6]
  i2638.m_PhysicalUnit = i2639[7]
  i2638.m_FallbackScreenDPI = i2639[8]
  i2638.m_DefaultSpriteDPI = i2639[9]
  i2638.m_DynamicPixelsPerUnit = i2639[10]
  i2638.m_PresetInfoIsWorld = !!i2639[11]
  return i2638
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2640 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2641 = data
  i2640.m_IgnoreReversedGraphics = !!i2641[0]
  i2640.m_BlockingObjects = i2641[1]
  i2640.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2641[2] )
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2643 = data
  i2642.cullTransparentMesh = !!i2643[0]
  return i2642
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2644 = root || request.c( 'UnityEngine.UI.Image' )
  var i2645 = data
  request.r(i2645[0], i2645[1], 0, i2644, 'm_Sprite')
  i2644.m_Type = i2645[2]
  i2644.m_PreserveAspect = !!i2645[3]
  i2644.m_FillCenter = !!i2645[4]
  i2644.m_FillMethod = i2645[5]
  i2644.m_FillAmount = i2645[6]
  i2644.m_FillClockwise = !!i2645[7]
  i2644.m_FillOrigin = i2645[8]
  i2644.m_UseSpriteMesh = !!i2645[9]
  i2644.m_PixelsPerUnitMultiplier = i2645[10]
  request.r(i2645[11], i2645[12], 0, i2644, 'm_Material')
  i2644.m_Maskable = !!i2645[13]
  i2644.m_Color = new pc.Color(i2645[14], i2645[15], i2645[16], i2645[17])
  i2644.m_RaycastTarget = !!i2645[18]
  i2644.m_RaycastPadding = new pc.Vec4( i2645[19], i2645[20], i2645[21], i2645[22] )
  return i2644
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2646 = root || request.c( 'UnityEngine.UI.Text' )
  var i2647 = data
  i2646.m_FontData = request.d('UnityEngine.UI.FontData', i2647[0], i2646.m_FontData)
  i2646.m_Text = i2647[1]
  request.r(i2647[2], i2647[3], 0, i2646, 'm_Material')
  i2646.m_Maskable = !!i2647[4]
  i2646.m_Color = new pc.Color(i2647[5], i2647[6], i2647[7], i2647[8])
  i2646.m_RaycastTarget = !!i2647[9]
  i2646.m_RaycastPadding = new pc.Vec4( i2647[10], i2647[11], i2647[12], i2647[13] )
  return i2646
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2648 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2649 = data
  request.r(i2649[0], i2649[1], 0, i2648, 'm_Font')
  i2648.m_FontSize = i2649[2]
  i2648.m_FontStyle = i2649[3]
  i2648.m_BestFit = !!i2649[4]
  i2648.m_MinSize = i2649[5]
  i2648.m_MaxSize = i2649[6]
  i2648.m_Alignment = i2649[7]
  i2648.m_AlignByGeometry = !!i2649[8]
  i2648.m_RichText = !!i2649[9]
  i2648.m_HorizontalOverflow = i2649[10]
  i2648.m_VerticalOverflow = i2649[11]
  i2648.m_LineSpacing = i2649[12]
  return i2648
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2650 = root || request.c( 'UnityEngine.UI.Button' )
  var i2651 = data
  i2650.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2651[0], i2650.m_OnClick)
  i2650.m_Navigation = request.d('UnityEngine.UI.Navigation', i2651[1], i2650.m_Navigation)
  i2650.m_Transition = i2651[2]
  i2650.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2651[3], i2650.m_Colors)
  i2650.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2651[4], i2650.m_SpriteState)
  i2650.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2651[5], i2650.m_AnimationTriggers)
  i2650.m_Interactable = !!i2651[6]
  request.r(i2651[7], i2651[8], 0, i2650, 'm_TargetGraphic')
  return i2650
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2652 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2653 = data
  i2652.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2653[0], i2652.m_PersistentCalls)
  return i2652
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2654 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2655 = data
  i2654.m_Mode = i2655[0]
  i2654.m_WrapAround = !!i2655[1]
  request.r(i2655[2], i2655[3], 0, i2654, 'm_SelectOnUp')
  request.r(i2655[4], i2655[5], 0, i2654, 'm_SelectOnDown')
  request.r(i2655[6], i2655[7], 0, i2654, 'm_SelectOnLeft')
  request.r(i2655[8], i2655[9], 0, i2654, 'm_SelectOnRight')
  return i2654
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2656 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2657 = data
  i2656.m_NormalColor = new pc.Color(i2657[0], i2657[1], i2657[2], i2657[3])
  i2656.m_HighlightedColor = new pc.Color(i2657[4], i2657[5], i2657[6], i2657[7])
  i2656.m_PressedColor = new pc.Color(i2657[8], i2657[9], i2657[10], i2657[11])
  i2656.m_SelectedColor = new pc.Color(i2657[12], i2657[13], i2657[14], i2657[15])
  i2656.m_DisabledColor = new pc.Color(i2657[16], i2657[17], i2657[18], i2657[19])
  i2656.m_ColorMultiplier = i2657[20]
  i2656.m_FadeDuration = i2657[21]
  return i2656
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2658 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2659 = data
  request.r(i2659[0], i2659[1], 0, i2658, 'm_HighlightedSprite')
  request.r(i2659[2], i2659[3], 0, i2658, 'm_PressedSprite')
  request.r(i2659[4], i2659[5], 0, i2658, 'm_SelectedSprite')
  request.r(i2659[6], i2659[7], 0, i2658, 'm_DisabledSprite')
  return i2658
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2660 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2661 = data
  i2660.m_NormalTrigger = i2661[0]
  i2660.m_HighlightedTrigger = i2661[1]
  i2660.m_PressedTrigger = i2661[2]
  i2660.m_SelectedTrigger = i2661[3]
  i2660.m_DisabledTrigger = i2661[4]
  return i2660
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i2662 = root || request.c( 'PlayableHudRuntime' )
  var i2663 = data
  return i2662
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2664 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2665 = data
  request.r(i2665[0], i2665[1], 0, i2664, 'm_FirstSelected')
  i2664.m_sendNavigationEvents = !!i2665[2]
  i2664.m_DragThreshold = i2665[3]
  return i2664
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2666 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2667 = data
  i2666.m_HorizontalAxis = i2667[0]
  i2666.m_VerticalAxis = i2667[1]
  i2666.m_SubmitButton = i2667[2]
  i2666.m_CancelButton = i2667[3]
  i2666.m_InputActionsPerSecond = i2667[4]
  i2666.m_RepeatDelay = i2667[5]
  i2666.m_ForceModuleActive = !!i2667[6]
  i2666.m_SendPointerHoverToParent = !!i2667[7]
  return i2666
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i2668 = root || request.c( 'PlayableRouter' )
  var i2669 = data
  var i2671 = i2669[0]
  var i2670 = []
  for(var i = 0; i < i2671.length; i += 2) {
  request.r(i2671[i + 0], i2671[i + 1], 2, i2670, '')
  }
  i2668.menuObjects = i2670
  var i2673 = i2669[1]
  var i2672 = []
  for(var i = 0; i < i2673.length; i += 2) {
  request.r(i2673[i + 0], i2673[i + 1], 2, i2672, '')
  }
  i2668.gameplayObjects = i2672
  var i2675 = i2669[2]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.push( request.d('PlayableRouter+SubLevelSlot', i2675[i + 0]) );
  }
  i2668.subLevels = i2674
  i2668.fadeDuration = i2669[3]
  i2668.lockedMessage = i2669[4]
  i2668.lockedTapsToCTA = i2669[5]
  return i2668
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i2678 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i2679 = data
  request.r(i2679[0], i2679[1], 0, i2678, 'button')
  request.r(i2679[2], i2679[3], 0, i2678, 'level')
  return i2678
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i2680 = root || request.c( 'ToastManager' )
  var i2681 = data
  request.r(i2681[0], i2681[1], 0, i2680, 'toastPanel')
  request.r(i2681[2], i2681[3], 0, i2680, 'toastPopup')
  request.r(i2681[4], i2681[5], 0, i2680, 'canvasGroup')
  request.r(i2681[6], i2681[7], 0, i2680, 'toastText')
  i2680.startY = i2681[8]
  i2680.visibleY = i2681[9]
  i2680.endY = i2681[10]
  i2680.animationTime = i2681[11]
  i2680.animationTimeUp = i2681[12]
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2683 = data
  i2682.m_Alpha = i2683[0]
  i2682.m_Interactable = !!i2683[1]
  i2682.m_BlocksRaycasts = !!i2683[2]
  i2682.m_IgnoreParentGroups = !!i2683[3]
  i2682.enabled = !!i2683[4]
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2685 = data
  i2684.ambientIntensity = i2685[0]
  i2684.reflectionIntensity = i2685[1]
  i2684.ambientMode = i2685[2]
  i2684.ambientLight = new pc.Color(i2685[3], i2685[4], i2685[5], i2685[6])
  i2684.ambientSkyColor = new pc.Color(i2685[7], i2685[8], i2685[9], i2685[10])
  i2684.ambientGroundColor = new pc.Color(i2685[11], i2685[12], i2685[13], i2685[14])
  i2684.ambientEquatorColor = new pc.Color(i2685[15], i2685[16], i2685[17], i2685[18])
  i2684.fogColor = new pc.Color(i2685[19], i2685[20], i2685[21], i2685[22])
  i2684.fogEndDistance = i2685[23]
  i2684.fogStartDistance = i2685[24]
  i2684.fogDensity = i2685[25]
  i2684.fog = !!i2685[26]
  request.r(i2685[27], i2685[28], 0, i2684, 'skybox')
  i2684.fogMode = i2685[29]
  var i2687 = i2685[30]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2687[i + 0]) );
  }
  i2684.lightmaps = i2686
  i2684.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2685[31], i2684.lightProbes)
  i2684.lightmapsMode = i2685[32]
  i2684.mixedBakeMode = i2685[33]
  i2684.environmentLightingMode = i2685[34]
  i2684.ambientProbe = new pc.SphericalHarmonicsL2(i2685[35])
  request.r(i2685[36], i2685[37], 0, i2684, 'customReflection')
  request.r(i2685[38], i2685[39], 0, i2684, 'defaultReflection')
  i2684.defaultReflectionMode = i2685[40]
  i2684.defaultReflectionResolution = i2685[41]
  i2684.sunLightObjectId = i2685[42]
  i2684.pixelLightCount = i2685[43]
  i2684.defaultReflectionHDR = !!i2685[44]
  i2684.hasLightDataAsset = !!i2685[45]
  i2684.hasManualGenerate = !!i2685[46]
  return i2684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2691 = data
  request.r(i2691[0], i2691[1], 0, i2690, 'lightmapColor')
  request.r(i2691[2], i2691[3], 0, i2690, 'lightmapDirection')
  request.r(i2691[4], i2691[5], 0, i2690, 'shadowMask')
  return i2690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2692 = root || new UnityEngine.LightProbes()
  var i2693 = data
  return i2692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2699 = data
  var i2701 = i2699[0]
  var i2700 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2701.length; i += 1) {
    i2700.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2701[i + 0]));
  }
  i2698.ShaderCompilationErrors = i2700
  i2698.name = i2699[1]
  i2698.guid = i2699[2]
  var i2703 = i2699[3]
  var i2702 = []
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.push( i2703[i + 0] );
  }
  i2698.shaderDefinedKeywords = i2702
  var i2705 = i2699[4]
  var i2704 = []
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2705[i + 0]) );
  }
  i2698.passes = i2704
  var i2707 = i2699[5]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2707[i + 0]) );
  }
  i2698.usePasses = i2706
  var i2709 = i2699[6]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2709[i + 0]) );
  }
  i2698.defaultParameterValues = i2708
  request.r(i2699[7], i2699[8], 0, i2698, 'unityFallbackShader')
  i2698.readDepth = !!i2699[9]
  i2698.hasDepthOnlyPass = !!i2699[10]
  i2698.isCreatedByShaderGraph = !!i2699[11]
  i2698.disableBatching = !!i2699[12]
  i2698.compiled = !!i2699[13]
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2713 = data
  i2712.shaderName = i2713[0]
  i2712.errorMessage = i2713[1]
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2718 = root || new pc.UnityShaderPass()
  var i2719 = data
  i2718.id = i2719[0]
  i2718.subShaderIndex = i2719[1]
  i2718.name = i2719[2]
  i2718.passType = i2719[3]
  i2718.grabPassTextureName = i2719[4]
  i2718.usePass = !!i2719[5]
  i2718.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2719[6], i2718.zTest)
  i2718.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2719[7], i2718.zWrite)
  i2718.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2719[8], i2718.culling)
  i2718.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2719[9], i2718.blending)
  i2718.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2719[10], i2718.alphaBlending)
  i2718.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2719[11], i2718.colorWriteMask)
  i2718.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2719[12], i2718.offsetUnits)
  i2718.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2719[13], i2718.offsetFactor)
  i2718.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2719[14], i2718.stencilRef)
  i2718.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2719[15], i2718.stencilReadMask)
  i2718.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2719[16], i2718.stencilWriteMask)
  i2718.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2719[17], i2718.stencilOp)
  i2718.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2719[18], i2718.stencilOpFront)
  i2718.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2719[19], i2718.stencilOpBack)
  var i2721 = i2719[20]
  var i2720 = []
  for(var i = 0; i < i2721.length; i += 1) {
    i2720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2721[i + 0]) );
  }
  i2718.tags = i2720
  var i2723 = i2719[21]
  var i2722 = []
  for(var i = 0; i < i2723.length; i += 1) {
    i2722.push( i2723[i + 0] );
  }
  i2718.passDefinedKeywords = i2722
  var i2725 = i2719[22]
  var i2724 = []
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2725[i + 0]) );
  }
  i2718.passDefinedKeywordGroups = i2724
  var i2727 = i2719[23]
  var i2726 = []
  for(var i = 0; i < i2727.length; i += 1) {
    i2726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2727[i + 0]) );
  }
  i2718.variants = i2726
  var i2729 = i2719[24]
  var i2728 = []
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2729[i + 0]) );
  }
  i2718.excludedVariants = i2728
  i2718.hasDepthReader = !!i2719[25]
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2731 = data
  i2730.val = i2731[0]
  i2730.name = i2731[1]
  return i2730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2733 = data
  i2732.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2733[0], i2732.src)
  i2732.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2733[1], i2732.dst)
  i2732.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2733[2], i2732.op)
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2735 = data
  i2734.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2735[0], i2734.pass)
  i2734.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2735[1], i2734.fail)
  i2734.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2735[2], i2734.zFail)
  i2734.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2735[3], i2734.comp)
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2739 = data
  i2738.name = i2739[0]
  i2738.value = i2739[1]
  return i2738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2743 = data
  var i2745 = i2743[0]
  var i2744 = []
  for(var i = 0; i < i2745.length; i += 1) {
    i2744.push( i2745[i + 0] );
  }
  i2742.keywords = i2744
  i2742.hasDiscard = !!i2743[1]
  return i2742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2749 = data
  i2748.passId = i2749[0]
  i2748.subShaderIndex = i2749[1]
  var i2751 = i2749[2]
  var i2750 = []
  for(var i = 0; i < i2751.length; i += 1) {
    i2750.push( i2751[i + 0] );
  }
  i2748.keywords = i2750
  i2748.vertexProgram = i2749[3]
  i2748.fragmentProgram = i2749[4]
  i2748.exportedForWebGl2 = !!i2749[5]
  i2748.readDepth = !!i2749[6]
  return i2748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2755 = data
  request.r(i2755[0], i2755[1], 0, i2754, 'shader')
  i2754.pass = i2755[2]
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2759 = data
  i2758.name = i2759[0]
  i2758.type = i2759[1]
  i2758.value = new pc.Vec4( i2759[2], i2759[3], i2759[4], i2759[5] )
  i2758.textureValue = i2759[6]
  i2758.shaderPropertyFlag = i2759[7]
  return i2758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2761 = data
  i2760.name = i2761[0]
  request.r(i2761[1], i2761[2], 0, i2760, 'texture')
  i2760.aabb = i2761[3]
  i2760.vertices = i2761[4]
  i2760.triangles = i2761[5]
  i2760.textureRect = UnityEngine.Rect.MinMaxRect(i2761[6], i2761[7], i2761[8], i2761[9])
  i2760.packedRect = UnityEngine.Rect.MinMaxRect(i2761[10], i2761[11], i2761[12], i2761[13])
  i2760.border = new pc.Vec4( i2761[14], i2761[15], i2761[16], i2761[17] )
  i2760.transparency = i2761[18]
  i2760.bounds = i2761[19]
  i2760.pixelsPerUnit = i2761[20]
  i2760.textureWidth = i2761[21]
  i2760.textureHeight = i2761[22]
  i2760.nativeSize = new pc.Vec2( i2761[23], i2761[24] )
  i2760.pivot = new pc.Vec2( i2761[25], i2761[26] )
  i2760.textureRectOffset = new pc.Vec2( i2761[27], i2761[28] )
  return i2760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2763 = data
  i2762.name = i2763[0]
  return i2762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2765 = data
  i2764.name = i2765[0]
  i2764.wrapMode = i2765[1]
  i2764.isLooping = !!i2765[2]
  i2764.length = i2765[3]
  var i2767 = i2765[4]
  var i2766 = []
  for(var i = 0; i < i2767.length; i += 1) {
    i2766.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2767[i + 0]) );
  }
  i2764.curves = i2766
  var i2769 = i2765[5]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2769[i + 0]) );
  }
  i2764.events = i2768
  i2764.halfPrecision = !!i2765[6]
  i2764._frameRate = i2765[7]
  i2764.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2765[8], i2764.localBounds)
  i2764.hasMuscleCurves = !!i2765[9]
  var i2771 = i2765[10]
  var i2770 = []
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.push( i2771[i + 0] );
  }
  i2764.clipMuscleConstant = i2770
  i2764.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2765[11], i2764.clipBindingConstant)
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2775 = data
  i2774.path = i2775[0]
  i2774.hash = i2775[1]
  i2774.componentType = i2775[2]
  i2774.property = i2775[3]
  i2774.keys = i2775[4]
  var i2777 = i2775[5]
  var i2776 = []
  for(var i = 0; i < i2777.length; i += 1) {
    i2776.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2777[i + 0]) );
  }
  i2774.objectReferenceKeys = i2776
  return i2774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2781 = data
  i2780.time = i2781[0]
  request.r(i2781[1], i2781[2], 0, i2780, 'value')
  return i2780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2785 = data
  i2784.functionName = i2785[0]
  i2784.floatParameter = i2785[1]
  i2784.intParameter = i2785[2]
  i2784.stringParameter = i2785[3]
  request.r(i2785[4], i2785[5], 0, i2784, 'objectReferenceParameter')
  i2784.time = i2785[6]
  return i2784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2787 = data
  i2786.center = new pc.Vec3( i2787[0], i2787[1], i2787[2] )
  i2786.extends = new pc.Vec3( i2787[3], i2787[4], i2787[5] )
  return i2786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2791 = data
  var i2793 = i2791[0]
  var i2792 = []
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.push( i2793[i + 0] );
  }
  i2790.genericBindings = i2792
  var i2795 = i2791[1]
  var i2794 = []
  for(var i = 0; i < i2795.length; i += 1) {
    i2794.push( i2795[i + 0] );
  }
  i2790.pptrCurveMapping = i2794
  return i2790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2797 = data
  i2796.name = i2797[0]
  i2796.ascent = i2797[1]
  i2796.originalLineHeight = i2797[2]
  i2796.fontSize = i2797[3]
  var i2799 = i2797[4]
  var i2798 = []
  for(var i = 0; i < i2799.length; i += 1) {
    i2798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2799[i + 0]) );
  }
  i2796.characterInfo = i2798
  request.r(i2797[5], i2797[6], 0, i2796, 'texture')
  i2796.originalFontSize = i2797[7]
  return i2796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2803 = data
  i2802.index = i2803[0]
  i2802.advance = i2803[1]
  i2802.bearing = i2803[2]
  i2802.glyphWidth = i2803[3]
  i2802.glyphHeight = i2803[4]
  i2802.minX = i2803[5]
  i2802.maxX = i2803[6]
  i2802.minY = i2803[7]
  i2802.maxY = i2803[8]
  i2802.uvBottomLeftX = i2803[9]
  i2802.uvBottomLeftY = i2803[10]
  i2802.uvBottomRightX = i2803[11]
  i2802.uvBottomRightY = i2803[12]
  i2802.uvTopLeftX = i2803[13]
  i2802.uvTopLeftY = i2803[14]
  i2802.uvTopRightX = i2803[15]
  i2802.uvTopRightY = i2803[16]
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2805 = data
  i2804.name = i2805[0]
  var i2807 = i2805[1]
  var i2806 = []
  for(var i = 0; i < i2807.length; i += 1) {
    i2806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2807[i + 0]) );
  }
  i2804.layers = i2806
  var i2809 = i2805[2]
  var i2808 = []
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2809[i + 0]) );
  }
  i2804.parameters = i2808
  i2804.animationClips = i2805[3]
  i2804.avatarUnsupported = i2805[4]
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2813 = data
  i2812.name = i2813[0]
  i2812.defaultWeight = i2813[1]
  i2812.blendingMode = i2813[2]
  i2812.avatarMask = i2813[3]
  i2812.syncedLayerIndex = i2813[4]
  i2812.syncedLayerAffectsTiming = !!i2813[5]
  i2812.syncedLayers = i2813[6]
  i2812.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2813[7], i2812.stateMachine)
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2815 = data
  i2814.id = i2815[0]
  i2814.name = i2815[1]
  i2814.path = i2815[2]
  var i2817 = i2815[3]
  var i2816 = []
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2817[i + 0]) );
  }
  i2814.states = i2816
  var i2819 = i2815[4]
  var i2818 = []
  for(var i = 0; i < i2819.length; i += 1) {
    i2818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2819[i + 0]) );
  }
  i2814.machines = i2818
  var i2821 = i2815[5]
  var i2820 = []
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2821[i + 0]) );
  }
  i2814.entryStateTransitions = i2820
  var i2823 = i2815[6]
  var i2822 = []
  for(var i = 0; i < i2823.length; i += 1) {
    i2822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2823[i + 0]) );
  }
  i2814.exitStateTransitions = i2822
  var i2825 = i2815[7]
  var i2824 = []
  for(var i = 0; i < i2825.length; i += 1) {
    i2824.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2825[i + 0]) );
  }
  i2814.anyStateTransitions = i2824
  i2814.defaultStateId = i2815[8]
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2829 = data
  i2828.id = i2829[0]
  i2828.name = i2829[1]
  i2828.cycleOffset = i2829[2]
  i2828.cycleOffsetParameter = i2829[3]
  i2828.cycleOffsetParameterActive = !!i2829[4]
  i2828.mirror = !!i2829[5]
  i2828.mirrorParameter = i2829[6]
  i2828.mirrorParameterActive = !!i2829[7]
  i2828.motionId = i2829[8]
  i2828.nameHash = i2829[9]
  i2828.fullPathHash = i2829[10]
  i2828.speed = i2829[11]
  i2828.speedParameter = i2829[12]
  i2828.speedParameterActive = !!i2829[13]
  i2828.tag = i2829[14]
  i2828.tagHash = i2829[15]
  i2828.writeDefaultValues = !!i2829[16]
  var i2831 = i2829[17]
  var i2830 = []
  for(var i = 0; i < i2831.length; i += 2) {
  request.r(i2831[i + 0], i2831[i + 1], 2, i2830, '')
  }
  i2828.behaviours = i2830
  var i2833 = i2829[18]
  var i2832 = []
  for(var i = 0; i < i2833.length; i += 1) {
    i2832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2833[i + 0]) );
  }
  i2828.transitions = i2832
  return i2828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2839 = data
  i2838.fullPath = i2839[0]
  i2838.canTransitionToSelf = !!i2839[1]
  i2838.duration = i2839[2]
  i2838.exitTime = i2839[3]
  i2838.hasExitTime = !!i2839[4]
  i2838.hasFixedDuration = !!i2839[5]
  i2838.interruptionSource = i2839[6]
  i2838.offset = i2839[7]
  i2838.orderedInterruption = !!i2839[8]
  i2838.destinationStateId = i2839[9]
  i2838.isExit = !!i2839[10]
  i2838.mute = !!i2839[11]
  i2838.solo = !!i2839[12]
  var i2841 = i2839[13]
  var i2840 = []
  for(var i = 0; i < i2841.length; i += 1) {
    i2840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2841[i + 0]) );
  }
  i2838.conditions = i2840
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2847 = data
  i2846.destinationStateId = i2847[0]
  i2846.isExit = !!i2847[1]
  i2846.mute = !!i2847[2]
  i2846.solo = !!i2847[3]
  var i2849 = i2847[4]
  var i2848 = []
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2849[i + 0]) );
  }
  i2846.conditions = i2848
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2853 = data
  i2852.mode = i2853[0]
  i2852.parameter = i2853[1]
  i2852.threshold = i2853[2]
  return i2852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2857 = data
  i2856.defaultBool = !!i2857[0]
  i2856.defaultFloat = i2857[1]
  i2856.defaultInt = i2857[2]
  i2856.name = i2857[3]
  i2856.nameHash = i2857[4]
  i2856.type = i2857[5]
  return i2856
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2858 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2859 = data
  i2858.useSafeMode = !!i2859[0]
  i2858.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2859[1], i2858.safeModeOptions)
  i2858.timeScale = i2859[2]
  i2858.unscaledTimeScale = i2859[3]
  i2858.useSmoothDeltaTime = !!i2859[4]
  i2858.maxSmoothUnscaledTime = i2859[5]
  i2858.rewindCallbackMode = i2859[6]
  i2858.showUnityEditorReport = !!i2859[7]
  i2858.logBehaviour = i2859[8]
  i2858.drawGizmos = !!i2859[9]
  i2858.defaultRecyclable = !!i2859[10]
  i2858.defaultAutoPlay = i2859[11]
  i2858.defaultUpdateType = i2859[12]
  i2858.defaultTimeScaleIndependent = !!i2859[13]
  i2858.defaultEaseType = i2859[14]
  i2858.defaultEaseOvershootOrAmplitude = i2859[15]
  i2858.defaultEasePeriod = i2859[16]
  i2858.defaultAutoKill = !!i2859[17]
  i2858.defaultLoopType = i2859[18]
  i2858.debugMode = !!i2859[19]
  i2858.debugStoreTargetId = !!i2859[20]
  i2858.showPreviewPanel = !!i2859[21]
  i2858.storeSettingsLocation = i2859[22]
  i2858.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2859[23], i2858.modules)
  i2858.createASMDEF = !!i2859[24]
  i2858.showPlayingTweens = !!i2859[25]
  i2858.showPausedTweens = !!i2859[26]
  return i2858
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2860 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2861 = data
  i2860.logBehaviour = i2861[0]
  i2860.nestedTweenFailureBehaviour = i2861[1]
  return i2860
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2862 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2863 = data
  i2862.showPanel = !!i2863[0]
  i2862.audioEnabled = !!i2863[1]
  i2862.physicsEnabled = !!i2863[2]
  i2862.physics2DEnabled = !!i2863[3]
  i2862.spriteEnabled = !!i2863[4]
  i2862.uiEnabled = !!i2863[5]
  i2862.textMeshProEnabled = !!i2863[6]
  i2862.tk2DEnabled = !!i2863[7]
  i2862.deAudioEnabled = !!i2863[8]
  i2862.deUnityExtendedEnabled = !!i2863[9]
  i2862.epoOutlineEnabled = !!i2863[10]
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2865 = data
  var i2867 = i2865[0]
  var i2866 = []
  for(var i = 0; i < i2867.length; i += 1) {
    i2866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2867[i + 0]) );
  }
  i2864.files = i2866
  i2864.componentToPrefabIds = i2865[1]
  return i2864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2871 = data
  i2870.path = i2871[0]
  request.r(i2871[1], i2871[2], 0, i2870, 'unityObject')
  return i2870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2873 = data
  var i2875 = i2873[0]
  var i2874 = []
  for(var i = 0; i < i2875.length; i += 1) {
    i2874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2875[i + 0]) );
  }
  i2872.scriptsExecutionOrder = i2874
  var i2877 = i2873[1]
  var i2876 = []
  for(var i = 0; i < i2877.length; i += 1) {
    i2876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2877[i + 0]) );
  }
  i2872.sortingLayers = i2876
  var i2879 = i2873[2]
  var i2878 = []
  for(var i = 0; i < i2879.length; i += 1) {
    i2878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2879[i + 0]) );
  }
  i2872.cullingLayers = i2878
  i2872.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2873[3], i2872.timeSettings)
  i2872.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2873[4], i2872.physicsSettings)
  i2872.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2873[5], i2872.physics2DSettings)
  i2872.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2873[6], i2872.qualitySettings)
  i2872.enableRealtimeShadows = !!i2873[7]
  i2872.enableAutoInstancing = !!i2873[8]
  i2872.enableStaticBatching = !!i2873[9]
  i2872.enableDynamicBatching = !!i2873[10]
  i2872.usePreservativeDynamicBatching = !!i2873[11]
  i2872.lightmapEncodingQuality = i2873[12]
  i2872.desiredColorSpace = i2873[13]
  var i2881 = i2873[14]
  var i2880 = []
  for(var i = 0; i < i2881.length; i += 1) {
    i2880.push( i2881[i + 0] );
  }
  i2872.allTags = i2880
  return i2872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2885 = data
  i2884.name = i2885[0]
  i2884.value = i2885[1]
  return i2884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2889 = data
  i2888.id = i2889[0]
  i2888.name = i2889[1]
  i2888.value = i2889[2]
  return i2888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2893 = data
  i2892.id = i2893[0]
  i2892.name = i2893[1]
  return i2892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2895 = data
  i2894.fixedDeltaTime = i2895[0]
  i2894.maximumDeltaTime = i2895[1]
  i2894.timeScale = i2895[2]
  i2894.maximumParticleTimestep = i2895[3]
  return i2894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2897 = data
  i2896.gravity = new pc.Vec3( i2897[0], i2897[1], i2897[2] )
  i2896.defaultSolverIterations = i2897[3]
  i2896.bounceThreshold = i2897[4]
  i2896.autoSyncTransforms = !!i2897[5]
  i2896.autoSimulation = !!i2897[6]
  var i2899 = i2897[7]
  var i2898 = []
  for(var i = 0; i < i2899.length; i += 1) {
    i2898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2899[i + 0]) );
  }
  i2896.collisionMatrix = i2898
  return i2896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2903 = data
  i2902.enabled = !!i2903[0]
  i2902.layerId = i2903[1]
  i2902.otherLayerId = i2903[2]
  return i2902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2905 = data
  request.r(i2905[0], i2905[1], 0, i2904, 'material')
  i2904.gravity = new pc.Vec2( i2905[2], i2905[3] )
  i2904.positionIterations = i2905[4]
  i2904.velocityIterations = i2905[5]
  i2904.velocityThreshold = i2905[6]
  i2904.maxLinearCorrection = i2905[7]
  i2904.maxAngularCorrection = i2905[8]
  i2904.maxTranslationSpeed = i2905[9]
  i2904.maxRotationSpeed = i2905[10]
  i2904.baumgarteScale = i2905[11]
  i2904.baumgarteTOIScale = i2905[12]
  i2904.timeToSleep = i2905[13]
  i2904.linearSleepTolerance = i2905[14]
  i2904.angularSleepTolerance = i2905[15]
  i2904.defaultContactOffset = i2905[16]
  i2904.autoSimulation = !!i2905[17]
  i2904.queriesHitTriggers = !!i2905[18]
  i2904.queriesStartInColliders = !!i2905[19]
  i2904.callbacksOnDisable = !!i2905[20]
  i2904.reuseCollisionCallbacks = !!i2905[21]
  i2904.autoSyncTransforms = !!i2905[22]
  var i2907 = i2905[23]
  var i2906 = []
  for(var i = 0; i < i2907.length; i += 1) {
    i2906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2907[i + 0]) );
  }
  i2904.collisionMatrix = i2906
  return i2904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2911 = data
  i2910.enabled = !!i2911[0]
  i2910.layerId = i2911[1]
  i2910.otherLayerId = i2911[2]
  return i2910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2913 = data
  var i2915 = i2913[0]
  var i2914 = []
  for(var i = 0; i < i2915.length; i += 1) {
    i2914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2915[i + 0]) );
  }
  i2912.qualityLevels = i2914
  var i2917 = i2913[1]
  var i2916 = []
  for(var i = 0; i < i2917.length; i += 1) {
    i2916.push( i2917[i + 0] );
  }
  i2912.names = i2916
  i2912.shadows = i2913[2]
  i2912.anisotropicFiltering = i2913[3]
  i2912.antiAliasing = i2913[4]
  i2912.lodBias = i2913[5]
  i2912.shadowCascades = i2913[6]
  i2912.shadowDistance = i2913[7]
  i2912.shadowmaskMode = i2913[8]
  i2912.shadowProjection = i2913[9]
  i2912.shadowResolution = i2913[10]
  i2912.softParticles = !!i2913[11]
  i2912.softVegetation = !!i2913[12]
  i2912.activeColorSpace = i2913[13]
  i2912.desiredColorSpace = i2913[14]
  i2912.masterTextureLimit = i2913[15]
  i2912.maxQueuedFrames = i2913[16]
  i2912.particleRaycastBudget = i2913[17]
  i2912.pixelLightCount = i2913[18]
  i2912.realtimeReflectionProbes = !!i2913[19]
  i2912.shadowCascade2Split = i2913[20]
  i2912.shadowCascade4Split = new pc.Vec3( i2913[21], i2913[22], i2913[23] )
  i2912.streamingMipmapsActive = !!i2913[24]
  i2912.vSyncCount = i2913[25]
  i2912.asyncUploadBufferSize = i2913[26]
  i2912.asyncUploadTimeSlice = i2913[27]
  i2912.billboardsFaceCameraPosition = !!i2913[28]
  i2912.shadowNearPlaneOffset = i2913[29]
  i2912.streamingMipmapsMemoryBudget = i2913[30]
  i2912.maximumLODLevel = i2913[31]
  i2912.streamingMipmapsAddAllCameras = !!i2913[32]
  i2912.streamingMipmapsMaxLevelReduction = i2913[33]
  i2912.streamingMipmapsRenderersPerFrame = i2913[34]
  i2912.resolutionScalingFixedDPIFactor = i2913[35]
  i2912.streamingMipmapsMaxFileIORequests = i2913[36]
  i2912.currentQualityLevel = i2913[37]
  return i2912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i2920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i2921 = data
  var i2923 = i2921[0]
  var i2922 = []
  for(var i = 0; i < i2923.length; i += 1) {
    i2922.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i2923[i + 0]) );
  }
  i2920.groups = i2922
  var i2925 = i2921[1]
  var i2924 = []
  for(var i = 0; i < i2925.length; i += 1) {
    i2924.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i2925[i + 0]) );
  }
  i2920.snapshots = i2924
  return i2920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i2928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i2929 = data
  i2928.id = i2929[0]
  i2928.childGroupIds = i2929[1]
  i2928.name = i2929[2]
  return i2928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i2932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i2933 = data
  i2932.id = i2933[0]
  var i2935 = i2933[1]
  var i2934 = []
  for(var i = 0; i < i2935.length; i += 1) {
    i2934.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i2935[i + 0]) );
  }
  i2932.parameters = i2934
  return i2932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i2938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i2939 = data
  i2938.name = i2939[0]
  i2938.value = i2939[1]
  return i2938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2943 = data
  i2942.weight = i2943[0]
  i2942.vertices = i2943[1]
  i2942.normals = i2943[2]
  i2942.tangents = i2943[3]
  return i2942
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[85],"86":[52],"87":[88],"89":[88],"90":[88],"91":[88],"92":[88],"93":[88],"94":[88],"95":[46],"96":[46],"97":[46],"98":[46],"99":[46],"100":[46],"101":[46],"102":[46],"103":[46],"104":[46],"105":[46],"106":[46],"107":[46],"108":[52],"109":[110],"111":[112],"113":[112],"63":[57],"114":[41],"115":[15],"116":[11],"117":[15],"118":[119],"120":[119],"121":[10],"21":[11],"122":[15],"19":[15],"123":[57],"124":[57],"66":[63],"58":[67,57],"125":[57],"65":[63],"126":[57],"127":[57],"128":[57],"129":[57],"130":[57],"131":[57],"132":[57],"133":[57],"134":[57],"135":[67,57],"136":[57],"137":[57],"138":[57],"139":[57],"59":[67,57],"140":[57],"141":[71],"142":[71],"72":[71],"143":[71],"144":[52],"145":[52]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","MenuLevel","UnityEngine.GameObject","DG.Tweening.DOTweenAnimation","UnityEngine.BoxCollider2D","UnityEngine.AudioClip","IntroLevelAnim","Level_PoseController","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.U2D.Animation.SpriteSkin","BD_AnimationHelper","SpriteButton","PlayableRouter","UnityEngine.TrailRenderer","Level1_Face_Playable","InteractableBones","UnityEngine.AudioSource","BasicDrag","BD_CameraFollow","BD_ToolRotate","DraggableObject","DO_CameraFollow","ScratchCardAsset.ScratchCard","BD_Progress","ScratchCardAsset.ScratchCardManager","PlayableCTA","ScratchCardAsset.EraseProgress","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.CircleCollider2D","UnityEngine.LineRenderer","TextureOffsetScroller","Lvl1_EyeOpenClose","Lvl1_EyeOpenClose_Shampoo","BD_AnimatorDrag","UnityEngine.Rigidbody2D","ActionOnTap","BD_ProgressHelper","BD_Clamp","Lvl1_Face_AddPrimer","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "19.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "8Sept2026_CompleteLevel_1_3_v2";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1718";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4375";

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

Deserializers.buildID = "e42a250e-10bd-484c-82ea-543c8681bf50";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

