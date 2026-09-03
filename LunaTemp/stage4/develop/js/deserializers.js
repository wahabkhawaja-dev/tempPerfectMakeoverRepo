var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2172 = root || request.c( 'UnityEngine.JointSpring' )
  var i2173 = data
  i2172.spring = i2173[0]
  i2172.damper = i2173[1]
  i2172.targetPosition = i2173[2]
  return i2172
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2174 = root || request.c( 'UnityEngine.JointMotor' )
  var i2175 = data
  i2174.m_TargetVelocity = i2175[0]
  i2174.m_Force = i2175[1]
  i2174.m_FreeSpin = i2175[2]
  return i2174
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2176 = root || request.c( 'UnityEngine.JointLimits' )
  var i2177 = data
  i2176.m_Min = i2177[0]
  i2176.m_Max = i2177[1]
  i2176.m_Bounciness = i2177[2]
  i2176.m_BounceMinVelocity = i2177[3]
  i2176.m_ContactDistance = i2177[4]
  i2176.minBounce = i2177[5]
  i2176.maxBounce = i2177[6]
  return i2176
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2178 = root || request.c( 'UnityEngine.JointDrive' )
  var i2179 = data
  i2178.m_PositionSpring = i2179[0]
  i2178.m_PositionDamper = i2179[1]
  i2178.m_MaximumForce = i2179[2]
  i2178.m_UseAcceleration = i2179[3]
  return i2178
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2180 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2181 = data
  i2180.m_Spring = i2181[0]
  i2180.m_Damper = i2181[1]
  return i2180
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2182 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2183 = data
  i2182.m_Limit = i2183[0]
  i2182.m_Bounciness = i2183[1]
  i2182.m_ContactDistance = i2183[2]
  return i2182
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2184 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2185 = data
  i2184.m_ExtremumSlip = i2185[0]
  i2184.m_ExtremumValue = i2185[1]
  i2184.m_AsymptoteSlip = i2185[2]
  i2184.m_AsymptoteValue = i2185[3]
  i2184.m_Stiffness = i2185[4]
  return i2184
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2186 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2187 = data
  i2186.m_LowerAngle = i2187[0]
  i2186.m_UpperAngle = i2187[1]
  return i2186
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2188 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2189 = data
  i2188.m_MotorSpeed = i2189[0]
  i2188.m_MaximumMotorTorque = i2189[1]
  return i2188
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2190 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2191 = data
  i2190.m_DampingRatio = i2191[0]
  i2190.m_Frequency = i2191[1]
  i2190.m_Angle = i2191[2]
  return i2190
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2192 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2193 = data
  i2192.m_LowerTranslation = i2193[0]
  i2192.m_UpperTranslation = i2193[1]
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2194 = root || new pc.UnityMaterial()
  var i2195 = data
  i2194.name = i2195[0]
  request.r(i2195[1], i2195[2], 0, i2194, 'shader')
  i2194.renderQueue = i2195[3]
  i2194.enableInstancing = !!i2195[4]
  var i2197 = i2195[5]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 1) {
    i2196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2197[i + 0]) );
  }
  i2194.floatParameters = i2196
  var i2199 = i2195[6]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 1) {
    i2198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2199[i + 0]) );
  }
  i2194.colorParameters = i2198
  var i2201 = i2195[7]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2201[i + 0]) );
  }
  i2194.vectorParameters = i2200
  var i2203 = i2195[8]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2203[i + 0]) );
  }
  i2194.textureParameters = i2202
  var i2205 = i2195[9]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2205[i + 0]) );
  }
  i2194.materialFlags = i2204
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2209 = data
  i2208.name = i2209[0]
  i2208.value = i2209[1]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2213 = data
  i2212.name = i2213[0]
  i2212.value = new pc.Color(i2213[1], i2213[2], i2213[3], i2213[4])
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2217 = data
  i2216.name = i2217[0]
  i2216.value = new pc.Vec4( i2217[1], i2217[2], i2217[3], i2217[4] )
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2221 = data
  i2220.name = i2221[0]
  request.r(i2221[1], i2221[2], 0, i2220, 'value')
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2225 = data
  i2224.name = i2225[0]
  i2224.enabled = !!i2225[1]
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2227 = data
  i2226.name = i2227[0]
  i2226.width = i2227[1]
  i2226.height = i2227[2]
  i2226.mipmapCount = i2227[3]
  i2226.anisoLevel = i2227[4]
  i2226.filterMode = i2227[5]
  i2226.hdr = !!i2227[6]
  i2226.format = i2227[7]
  i2226.wrapMode = i2227[8]
  i2226.alphaIsTransparency = !!i2227[9]
  i2226.alphaSource = i2227[10]
  i2226.graphicsFormat = i2227[11]
  i2226.sRGBTexture = !!i2227[12]
  i2226.desiredColorSpace = i2227[13]
  i2226.wrapU = i2227[14]
  i2226.wrapV = i2227[15]
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2229 = data
  i2228.name = i2229[0]
  i2228.halfPrecision = !!i2229[1]
  i2228.useSimplification = !!i2229[2]
  i2228.useUInt32IndexFormat = !!i2229[3]
  i2228.vertexCount = i2229[4]
  i2228.aabb = i2229[5]
  var i2231 = i2229[6]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 1) {
    i2230.push( !!i2231[i + 0] );
  }
  i2228.streams = i2230
  i2228.vertices = i2229[7]
  var i2233 = i2229[8]
  var i2232 = []
  for(var i = 0; i < i2233.length; i += 1) {
    i2232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2233[i + 0]) );
  }
  i2228.subMeshes = i2232
  var i2235 = i2229[9]
  var i2234 = []
  for(var i = 0; i < i2235.length; i += 16) {
    i2234.push( new pc.Mat4().setData(i2235[i + 0], i2235[i + 1], i2235[i + 2], i2235[i + 3],  i2235[i + 4], i2235[i + 5], i2235[i + 6], i2235[i + 7],  i2235[i + 8], i2235[i + 9], i2235[i + 10], i2235[i + 11],  i2235[i + 12], i2235[i + 13], i2235[i + 14], i2235[i + 15]) );
  }
  i2228.bindposes = i2234
  var i2237 = i2229[10]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2237[i + 0]) );
  }
  i2228.blendShapes = i2236
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2243 = data
  i2242.triangles = i2243[0]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2249 = data
  i2248.name = i2249[0]
  var i2251 = i2249[1]
  var i2250 = []
  for(var i = 0; i < i2251.length; i += 1) {
    i2250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2251[i + 0]) );
  }
  i2248.frames = i2250
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2253 = data
  i2252.position = new pc.Vec3( i2253[0], i2253[1], i2253[2] )
  i2252.scale = new pc.Vec3( i2253[3], i2253[4], i2253[5] )
  i2252.rotation = new pc.Quat(i2253[6], i2253[7], i2253[8], i2253[9])
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2255 = data
  i2254.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2255[0], i2254.main)
  i2254.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2255[1], i2254.colorBySpeed)
  i2254.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2255[2], i2254.colorOverLifetime)
  i2254.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2255[3], i2254.emission)
  i2254.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2255[4], i2254.rotationBySpeed)
  i2254.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2255[5], i2254.rotationOverLifetime)
  i2254.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2255[6], i2254.shape)
  i2254.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2255[7], i2254.sizeBySpeed)
  i2254.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2255[8], i2254.sizeOverLifetime)
  i2254.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2255[9], i2254.textureSheetAnimation)
  i2254.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2255[10], i2254.velocityOverLifetime)
  i2254.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2255[11], i2254.noise)
  i2254.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2255[12], i2254.inheritVelocity)
  i2254.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2255[13], i2254.forceOverLifetime)
  i2254.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2255[14], i2254.limitVelocityOverLifetime)
  i2254.useAutoRandomSeed = !!i2255[15]
  i2254.randomSeed = i2255[16]
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2256 = root || new pc.ParticleSystemMain()
  var i2257 = data
  i2256.duration = i2257[0]
  i2256.loop = !!i2257[1]
  i2256.prewarm = !!i2257[2]
  i2256.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[3], i2256.startDelay)
  i2256.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[4], i2256.startLifetime)
  i2256.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[5], i2256.startSpeed)
  i2256.startSize3D = !!i2257[6]
  i2256.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[7], i2256.startSizeX)
  i2256.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[8], i2256.startSizeY)
  i2256.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[9], i2256.startSizeZ)
  i2256.startRotation3D = !!i2257[10]
  i2256.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[11], i2256.startRotationX)
  i2256.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[12], i2256.startRotationY)
  i2256.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[13], i2256.startRotationZ)
  i2256.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2257[14], i2256.startColor)
  i2256.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2257[15], i2256.gravityModifier)
  i2256.simulationSpace = i2257[16]
  request.r(i2257[17], i2257[18], 0, i2256, 'customSimulationSpace')
  i2256.simulationSpeed = i2257[19]
  i2256.useUnscaledTime = !!i2257[20]
  i2256.scalingMode = i2257[21]
  i2256.playOnAwake = !!i2257[22]
  i2256.maxParticles = i2257[23]
  i2256.emitterVelocityMode = i2257[24]
  i2256.stopAction = i2257[25]
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2258 = root || new pc.MinMaxCurve()
  var i2259 = data
  i2258.mode = i2259[0]
  i2258.curveMin = new pc.AnimationCurve( { keys_flow: i2259[1] } )
  i2258.curveMax = new pc.AnimationCurve( { keys_flow: i2259[2] } )
  i2258.curveMultiplier = i2259[3]
  i2258.constantMin = i2259[4]
  i2258.constantMax = i2259[5]
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2260 = root || new pc.MinMaxGradient()
  var i2261 = data
  i2260.mode = i2261[0]
  i2260.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2261[1], i2260.gradientMin)
  i2260.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2261[2], i2260.gradientMax)
  i2260.colorMin = new pc.Color(i2261[3], i2261[4], i2261[5], i2261[6])
  i2260.colorMax = new pc.Color(i2261[7], i2261[8], i2261[9], i2261[10])
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2263 = data
  i2262.mode = i2263[0]
  var i2265 = i2263[1]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2265[i + 0]) );
  }
  i2262.colorKeys = i2264
  var i2267 = i2263[2]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2267[i + 0]) );
  }
  i2262.alphaKeys = i2266
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2268 = root || new pc.ParticleSystemColorBySpeed()
  var i2269 = data
  i2268.enabled = !!i2269[0]
  i2268.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2269[1], i2268.color)
  i2268.range = new pc.Vec2( i2269[2], i2269[3] )
  return i2268
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2273 = data
  i2272.color = new pc.Color(i2273[0], i2273[1], i2273[2], i2273[3])
  i2272.time = i2273[4]
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2277 = data
  i2276.alpha = i2277[0]
  i2276.time = i2277[1]
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2278 = root || new pc.ParticleSystemColorOverLifetime()
  var i2279 = data
  i2278.enabled = !!i2279[0]
  i2278.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2279[1], i2278.color)
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2280 = root || new pc.ParticleSystemEmitter()
  var i2281 = data
  i2280.enabled = !!i2281[0]
  i2280.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[1], i2280.rateOverTime)
  i2280.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2281[2], i2280.rateOverDistance)
  var i2283 = i2281[3]
  var i2282 = []
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2283[i + 0]) );
  }
  i2280.bursts = i2282
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2286 = root || new pc.ParticleSystemBurst()
  var i2287 = data
  i2286.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2287[0], i2286.count)
  i2286.cycleCount = i2287[1]
  i2286.minCount = i2287[2]
  i2286.maxCount = i2287[3]
  i2286.repeatInterval = i2287[4]
  i2286.time = i2287[5]
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2288 = root || new pc.ParticleSystemRotationBySpeed()
  var i2289 = data
  i2288.enabled = !!i2289[0]
  i2288.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2289[1], i2288.x)
  i2288.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2289[2], i2288.y)
  i2288.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2289[3], i2288.z)
  i2288.separateAxes = !!i2289[4]
  i2288.range = new pc.Vec2( i2289[5], i2289[6] )
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2290 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2291 = data
  i2290.enabled = !!i2291[0]
  i2290.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2291[1], i2290.x)
  i2290.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2291[2], i2290.y)
  i2290.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2291[3], i2290.z)
  i2290.separateAxes = !!i2291[4]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2292 = root || new pc.ParticleSystemShape()
  var i2293 = data
  i2292.enabled = !!i2293[0]
  i2292.shapeType = i2293[1]
  i2292.randomDirectionAmount = i2293[2]
  i2292.sphericalDirectionAmount = i2293[3]
  i2292.randomPositionAmount = i2293[4]
  i2292.alignToDirection = !!i2293[5]
  i2292.radius = i2293[6]
  i2292.radiusMode = i2293[7]
  i2292.radiusSpread = i2293[8]
  i2292.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[9], i2292.radiusSpeed)
  i2292.radiusThickness = i2293[10]
  i2292.angle = i2293[11]
  i2292.length = i2293[12]
  i2292.boxThickness = new pc.Vec3( i2293[13], i2293[14], i2293[15] )
  i2292.meshShapeType = i2293[16]
  request.r(i2293[17], i2293[18], 0, i2292, 'mesh')
  request.r(i2293[19], i2293[20], 0, i2292, 'meshRenderer')
  request.r(i2293[21], i2293[22], 0, i2292, 'skinnedMeshRenderer')
  i2292.useMeshMaterialIndex = !!i2293[23]
  i2292.meshMaterialIndex = i2293[24]
  i2292.useMeshColors = !!i2293[25]
  i2292.normalOffset = i2293[26]
  i2292.arc = i2293[27]
  i2292.arcMode = i2293[28]
  i2292.arcSpread = i2293[29]
  i2292.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2293[30], i2292.arcSpeed)
  i2292.donutRadius = i2293[31]
  i2292.position = new pc.Vec3( i2293[32], i2293[33], i2293[34] )
  i2292.rotation = new pc.Vec3( i2293[35], i2293[36], i2293[37] )
  i2292.scale = new pc.Vec3( i2293[38], i2293[39], i2293[40] )
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2294 = root || new pc.ParticleSystemSizeBySpeed()
  var i2295 = data
  i2294.enabled = !!i2295[0]
  i2294.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2295[1], i2294.x)
  i2294.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2295[2], i2294.y)
  i2294.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2295[3], i2294.z)
  i2294.separateAxes = !!i2295[4]
  i2294.range = new pc.Vec2( i2295[5], i2295[6] )
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2296 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2297 = data
  i2296.enabled = !!i2297[0]
  i2296.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[1], i2296.x)
  i2296.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[2], i2296.y)
  i2296.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2297[3], i2296.z)
  i2296.separateAxes = !!i2297[4]
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2298 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2299 = data
  i2298.enabled = !!i2299[0]
  i2298.mode = i2299[1]
  i2298.animation = i2299[2]
  i2298.numTilesX = i2299[3]
  i2298.numTilesY = i2299[4]
  i2298.useRandomRow = !!i2299[5]
  i2298.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[6], i2298.frameOverTime)
  i2298.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2299[7], i2298.startFrame)
  i2298.cycleCount = i2299[8]
  i2298.rowIndex = i2299[9]
  i2298.flipU = i2299[10]
  i2298.flipV = i2299[11]
  i2298.spriteCount = i2299[12]
  var i2301 = i2299[13]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 2) {
  request.r(i2301[i + 0], i2301[i + 1], 2, i2300, '')
  }
  i2298.sprites = i2300
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2304 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2305 = data
  i2304.enabled = !!i2305[0]
  i2304.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[1], i2304.x)
  i2304.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[2], i2304.y)
  i2304.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[3], i2304.z)
  i2304.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[4], i2304.radial)
  i2304.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[5], i2304.speedModifier)
  i2304.space = i2305[6]
  i2304.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[7], i2304.orbitalX)
  i2304.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[8], i2304.orbitalY)
  i2304.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[9], i2304.orbitalZ)
  i2304.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[10], i2304.orbitalOffsetX)
  i2304.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[11], i2304.orbitalOffsetY)
  i2304.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2305[12], i2304.orbitalOffsetZ)
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2306 = root || new pc.ParticleSystemNoise()
  var i2307 = data
  i2306.enabled = !!i2307[0]
  i2306.separateAxes = !!i2307[1]
  i2306.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[2], i2306.strengthX)
  i2306.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[3], i2306.strengthY)
  i2306.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[4], i2306.strengthZ)
  i2306.frequency = i2307[5]
  i2306.damping = !!i2307[6]
  i2306.octaveCount = i2307[7]
  i2306.octaveMultiplier = i2307[8]
  i2306.octaveScale = i2307[9]
  i2306.quality = i2307[10]
  i2306.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[11], i2306.scrollSpeed)
  i2306.scrollSpeedMultiplier = i2307[12]
  i2306.remapEnabled = !!i2307[13]
  i2306.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[14], i2306.remapX)
  i2306.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[15], i2306.remapY)
  i2306.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[16], i2306.remapZ)
  i2306.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[17], i2306.positionAmount)
  i2306.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[18], i2306.rotationAmount)
  i2306.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[19], i2306.sizeAmount)
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2308 = root || new pc.ParticleSystemInheritVelocity()
  var i2309 = data
  i2308.enabled = !!i2309[0]
  i2308.mode = i2309[1]
  i2308.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2309[2], i2308.curve)
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2310 = root || new pc.ParticleSystemForceOverLifetime()
  var i2311 = data
  i2310.enabled = !!i2311[0]
  i2310.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2311[1], i2310.x)
  i2310.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2311[2], i2310.y)
  i2310.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2311[3], i2310.z)
  i2310.space = i2311[4]
  i2310.randomized = !!i2311[5]
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2312 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2313 = data
  i2312.enabled = !!i2313[0]
  i2312.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[1], i2312.limit)
  i2312.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[2], i2312.limitX)
  i2312.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[3], i2312.limitY)
  i2312.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[4], i2312.limitZ)
  i2312.dampen = i2313[5]
  i2312.separateAxes = !!i2313[6]
  i2312.space = i2313[7]
  i2312.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[8], i2312.drag)
  i2312.multiplyDragByParticleSize = !!i2313[9]
  i2312.multiplyDragByParticleVelocity = !!i2313[10]
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2315 = data
  request.r(i2315[0], i2315[1], 0, i2314, 'mesh')
  i2314.meshCount = i2315[2]
  i2314.activeVertexStreamsCount = i2315[3]
  i2314.alignment = i2315[4]
  i2314.renderMode = i2315[5]
  i2314.sortMode = i2315[6]
  i2314.lengthScale = i2315[7]
  i2314.velocityScale = i2315[8]
  i2314.cameraVelocityScale = i2315[9]
  i2314.normalDirection = i2315[10]
  i2314.sortingFudge = i2315[11]
  i2314.minParticleSize = i2315[12]
  i2314.maxParticleSize = i2315[13]
  i2314.pivot = new pc.Vec3( i2315[14], i2315[15], i2315[16] )
  request.r(i2315[17], i2315[18], 0, i2314, 'trailMaterial')
  i2314.applyActiveColorSpace = !!i2315[19]
  i2314.enabled = !!i2315[20]
  request.r(i2315[21], i2315[22], 0, i2314, 'sharedMaterial')
  var i2317 = i2315[23]
  var i2316 = []
  for(var i = 0; i < i2317.length; i += 2) {
  request.r(i2317[i + 0], i2317[i + 1], 2, i2316, '')
  }
  i2314.sharedMaterials = i2316
  i2314.receiveShadows = !!i2315[24]
  i2314.shadowCastingMode = i2315[25]
  i2314.sortingLayerID = i2315[26]
  i2314.sortingOrder = i2315[27]
  i2314.lightmapIndex = i2315[28]
  i2314.lightmapSceneIndex = i2315[29]
  i2314.lightmapScaleOffset = new pc.Vec4( i2315[30], i2315[31], i2315[32], i2315[33] )
  i2314.lightProbeUsage = i2315[34]
  i2314.reflectionProbeUsage = i2315[35]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2321 = data
  i2320.name = i2321[0]
  i2320.tagId = i2321[1]
  i2320.enabled = !!i2321[2]
  i2320.isStatic = !!i2321[3]
  i2320.layer = i2321[4]
  return i2320
}

Deserializers["Level1_Hair_Playable"] = function (request, data, root) {
  var i2322 = root || request.c( 'Level1_Hair_Playable' )
  var i2323 = data
  request.r(i2323[0], i2323[1], 0, i2322, 'wetCloth')
  request.r(i2323[2], i2323[3], 0, i2322, 'waterDripingParticle')
  i2322.ZoomStep1 = request.d('ZoomPos', i2323[4], i2322.ZoomStep1)
  var i2325 = i2323[5]
  var i2324 = []
  for(var i = 0; i < i2325.length; i += 2) {
  request.r(i2325[i + 0], i2325[i + 1], 2, i2324, '')
  }
  i2322.AllTrash = i2324
  var i2327 = i2323[6]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 2) {
  request.r(i2327[i + 0], i2327[i + 1], 2, i2326, '')
  }
  i2322.AllTrashOutlines = i2326
  i2322.trashDone = !!i2323[7]
  i2322.trashThrown = i2323[8]
  i2322.trashTotal = i2323[9]
  request.r(i2323[10], i2323[11], 0, i2322, 'bd_Sticky')
  i2322.ZoomStep2 = request.d('ZoomPos', i2323[12], i2322.ZoomStep2)
  request.r(i2323[13], i2323[14], 0, i2322, 'ToolStep2')
  request.r(i2323[15], i2323[16], 0, i2322, 'camFollowStep2')
  var i2329 = i2323[17]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 2) {
  request.r(i2329[i + 0], i2329[i + 1], 2, i2328, '')
  }
  i2322.AllBugOutlines = i2328
  i2322.ZoomStep2b = request.d('ZoomPos', i2323[18], i2322.ZoomStep2b)
  request.r(i2323[19], i2323[20], 0, i2322, 'ToolStep2b')
  request.r(i2323[21], i2323[22], 0, i2322, 'camFollowStep2b')
  request.r(i2323[23], i2323[24], 0, i2322, 'dustColStep2')
  request.r(i2323[25], i2323[26], 0, i2322, 'handIndicationShower')
  request.r(i2323[27], i2323[28], 0, i2322, 'hairDirtyStatic')
  request.r(i2323[29], i2323[30], 0, i2322, 'hairDirtyWetStatic')
  request.r(i2323[31], i2323[32], 0, i2322, 'dryHairAnim')
  i2322.ZoomStep3 = request.d('ZoomPos', i2323[33], i2322.ZoomStep3)
  request.r(i2323[34], i2323[35], 0, i2322, 'ShampooOnHand')
  request.r(i2323[36], i2323[37], 0, i2322, 'ShampooInHandCap')
  request.r(i2323[38], i2323[39], 0, i2322, 'ToolStep3')
  request.r(i2323[40], i2323[41], 0, i2322, 'shampooPatch')
  request.r(i2323[42], i2323[43], 0, i2322, 'handSpriteRend')
  request.r(i2323[44], i2323[45], 0, i2322, 'bottleDefault')
  request.r(i2323[46], i2323[47], 0, i2322, 'bottlePressed')
  request.r(i2323[48], i2323[49], 0, i2322, 'shampooDropping')
  request.r(i2323[50], i2323[51], 0, i2322, 'bottleOpenSfx')
  request.r(i2323[52], i2323[53], 0, i2322, 'bottleSqueezSfx')
  request.r(i2323[54], i2323[55], 0, i2322, 'bottlePourSfx')
  i2322.ZoomStep4 = request.d('ZoomPos', i2323[56], i2322.ZoomStep4)
  request.r(i2323[57], i2323[58], 0, i2322, 'ToolStep4')
  request.r(i2323[59], i2323[60], 0, i2322, 'camFollowStep4')
  request.r(i2323[61], i2323[62], 0, i2322, 'foamLight_E')
  request.r(i2323[63], i2323[64], 0, i2322, 'foam2_E')
  request.r(i2323[65], i2323[66], 0, i2322, 'foamCol')
  request.r(i2323[67], i2323[68], 0, i2322, 'handIndicationHands')
  request.r(i2323[69], i2323[70], 0, i2322, 'progressStep4')
  i2322.ZoomStep5a = request.d('ZoomPos', i2323[71], i2322.ZoomStep5a)
  i2322.ZoomStep5b = request.d('ZoomPos', i2323[72], i2322.ZoomStep5b)
  request.r(i2323[73], i2323[74], 0, i2322, 'ShowerDamaged')
  request.r(i2323[75], i2323[76], 0, i2322, 'ShowerDamaged_Drag')
  request.r(i2323[77], i2323[78], 0, i2322, 'ShowerBackDMG')
  request.r(i2323[79], i2323[80], 0, i2322, 'ShowerInner_dirty')
  request.r(i2323[81], i2323[82], 0, i2322, 'ShowerInner_Target')
  request.r(i2323[83], i2323[84], 0, i2322, 'ShowerFrontDMG')
  request.r(i2323[85], i2323[86], 0, i2322, 'OpenShowerIndication')
  request.r(i2323[87], i2323[88], 0, i2322, 'CloseShowerIndication')
  request.r(i2323[89], i2323[90], 0, i2322, 'showrOpenInput')
  request.r(i2323[91], i2323[92], 0, i2322, 'showerDisk')
  request.r(i2323[93], i2323[94], 0, i2322, 'showerFixReverseAnimDrag')
  request.r(i2323[95], i2323[96], 0, i2322, 'showerDragDamage')
  request.r(i2323[97], i2323[98], 0, i2322, 'ToolStep5Rev')
  request.r(i2323[99], i2323[100], 0, i2322, 'handIndicationShowerPlace')
  i2322.ZoomStep5 = request.d('ZoomPos', i2323[101], i2322.ZoomStep5)
  request.r(i2323[102], i2323[103], 0, i2322, 'ToolStep5')
  request.r(i2323[104], i2323[105], 0, i2322, 'ToolStep5Placeable')
  request.r(i2323[106], i2323[107], 0, i2322, 'toolStep5Progress')
  request.r(i2323[108], i2323[109], 0, i2322, 'toolStep5ProgressHelp')
  request.r(i2323[110], i2323[111], 0, i2322, 'camFollowStep5')
  request.r(i2323[112], i2323[113], 0, i2322, 'showerRender')
  request.r(i2323[114], i2323[115], 0, i2322, 'showerDirty')
  request.r(i2323[116], i2323[117], 0, i2322, 'showerClean')
  request.r(i2323[118], i2323[119], 0, i2322, 'waterShotParticle')
  request.r(i2323[120], i2323[121], 0, i2322, 'showerProblemClip')
  request.r(i2323[122], i2323[123], 0, i2322, 'FixErrorClip')
  i2322.ZoomStep6 = request.d('ZoomPos', i2323[124], i2322.ZoomStep6)
  request.r(i2323[125], i2323[126], 0, i2322, 'ToolStep6')
  request.r(i2323[127], i2323[128], 0, i2322, 'camFollowStep6')
  request.r(i2323[129], i2323[130], 0, i2322, 'wetHairs_E')
  request.r(i2323[131], i2323[132], 0, i2322, 'hairDryFade')
  i2322.ZoomStep7 = request.d('ZoomPos', i2323[133], i2322.ZoomStep7)
  request.r(i2323[134], i2323[135], 0, i2322, 'ToolStep7')
  request.r(i2323[136], i2323[137], 0, i2322, 'camFollowStep7')
  request.r(i2323[138], i2323[139], 0, i2322, 'dryHairs_E')
  request.r(i2323[140], i2323[141], 0, i2322, 'dryCombed_BG')
  request.r(i2323[142], i2323[143], 0, i2322, 'brushController')
  request.r(i2323[144], i2323[145], 0, i2322, 'handIndicationBrush')
  i2322.levelName = i2323[146]
  i2322.levelReward = i2323[147]
  request.r(i2323[148], i2323[149], 0, i2322, 'LevelIcon')
  request.r(i2323[150], i2323[151], 0, i2322, 'Level_BG')
  var i2331 = i2323[152]
  var i2330 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2331.length; i += 2) {
  request.r(i2331[i + 0], i2331[i + 1], 1, i2330, '')
  }
  i2322.ToolIcons = i2330
  var i2333 = i2323[153]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 2) {
  request.r(i2333[i + 0], i2333[i + 1], 2, i2332, '')
  }
  i2322.AllDrags = i2332
  var i2335 = i2323[154]
  var i2334 = []
  for(var i = 0; i < i2335.length; i += 2) {
  request.r(i2335[i + 0], i2335[i + 1], 2, i2334, '')
  }
  i2322.AllSources = i2334
  var i2337 = i2323[155]
  var i2336 = []
  for(var i = 0; i < i2337.length; i += 2) {
  request.r(i2337[i + 0], i2337[i + 1], 2, i2336, '')
  }
  i2322.AllScratches = i2336
  i2322.stepsDone = i2323[156]
  i2322.levelNo = i2323[157]
  i2322.partNo = i2323[158]
  var i2339 = i2323[159]
  var i2338 = []
  for(var i = 0; i < i2339.length; i += 2) {
  request.r(i2339[i + 0], i2339[i + 1], 2, i2338, '')
  }
  i2322.disableOnLevelComplete = i2338
  request.r(i2323[160], i2323[161], 0, i2322, 'bubbleGum')
  return i2322
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i2340 = root || request.c( 'ZoomPos' )
  var i2341 = data
  i2340.CameraPos = new pc.Vec3( i2341[0], i2341[1], i2341[2] )
  i2340.CameraFOV = i2341[3]
  return i2340
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i2354 = root || request.c( 'PlayableCTA' )
  var i2355 = data
  i2354.trigger = i2355[0]
  i2354.afterSeconds = i2355[1]
  i2354.afterTaps = i2355[2]
  request.r(i2355[3], i2355[4], 0, i2354, 'scratchProgress')
  i2354.scratchIndex = i2355[5]
  i2354.progressThreshold = i2355[6]
  request.r(i2355[7], i2355[8], 0, i2354, 'watchedTool')
  i2354.blockInputOnFire = !!i2355[9]
  i2354.refireOnEveryTap = !!i2355[10]
  i2354.refireDelay = i2355[11]
  i2354.showEndCard = !!i2355[12]
  request.r(i2355[13], i2355[14], 0, i2354, 'endCard')
  i2354.showEndCardOnProgressTrigger = !!i2355[15]
  i2354.showEndCardOnToolAppearTrigger = !!i2355[16]
  i2354.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i2355[17], i2354.onCtaFired)
  i2354.logWhenFired = !!i2355[18]
  return i2354
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2356 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2357 = data
  i2356.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2357[0], i2356.m_PersistentCalls)
  return i2356
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2358 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2359 = data
  var i2361 = i2359[0]
  var i2360 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.add(request.d('UnityEngine.Events.PersistentCall', i2361[i + 0]));
  }
  i2358.m_Calls = i2360
  return i2358
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2364 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2365 = data
  request.r(i2365[0], i2365[1], 0, i2364, 'm_Target')
  i2364.m_TargetAssemblyTypeName = i2365[2]
  i2364.m_MethodName = i2365[3]
  i2364.m_Mode = i2365[4]
  i2364.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2365[5], i2364.m_Arguments)
  i2364.m_CallState = i2365[6]
  return i2364
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i2366 = root || request.c( 'PlayableFadeCoverSettings' )
  var i2367 = data
  i2366.revealDelay = i2367[0]
  i2366.revealDuration = i2367[1]
  return i2366
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i2368 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i2369 = data
  request.r(i2369[0], i2369[1], 0, i2368, 'MainCamera')
  i2368.RenderType = i2369[2]
  request.r(i2369[3], i2369[4], 0, i2368, 'ScratchSurfaceSprite')
  i2368.ScratchSurfaceSpriteHasAlpha = !!i2369[5]
  i2368.MaskProgressCutOffValue = i2369[6]
  request.r(i2369[7], i2369[8], 0, i2368, 'EraseTexture')
  i2368.EraseTextureScale = new pc.Vec2( i2369[9], i2369[10] )
  i2368.InputEnabled = !!i2369[11]
  request.r(i2369[12], i2369[13], 0, i2368, 'Card')
  i2368.Mode = i2369[14]
  request.r(i2369[15], i2369[16], 0, i2368, 'Progress')
  request.r(i2369[17], i2369[18], 0, i2368, 'MeshCard')
  request.r(i2369[19], i2369[20], 0, i2368, 'SpriteCard')
  request.r(i2369[21], i2369[22], 0, i2368, 'ImageCard')
  request.r(i2369[23], i2369[24], 0, i2368, 'MaskShader')
  request.r(i2369[25], i2369[26], 0, i2368, 'BrushShader')
  request.r(i2369[27], i2369[28], 0, i2368, 'MaskProgressShader')
  request.r(i2369[29], i2369[30], 0, i2368, 'MaskProgressCutOffShader')
  return i2368
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i2370 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i2371 = data
  request.r(i2371[0], i2371[1], 0, i2370, 'MainCamera')
  request.r(i2371[2], i2371[3], 0, i2370, 'Surface')
  i2370.RenderTextureQuality = i2371[4]
  request.r(i2371[5], i2371[6], 0, i2370, 'Eraser')
  request.r(i2371[7], i2371[8], 0, i2370, 'Progress')
  request.r(i2371[9], i2371[10], 0, i2370, 'ScratchSurface')
  request.r(i2371[11], i2371[12], 0, i2370, 'RenderTexture')
  i2370.BrushScale = new pc.Vec2( i2371[13], i2371[14] )
  request.r(i2371[15], i2371[16], 0, i2370, 'ToolTip')
  i2370.InputEnabled = !!i2371[17]
  i2370.IsScratching = !!i2371[18]
  i2370.useChangingScale = !!i2371[19]
  i2370.useGivenBrushScale = !!i2371[20]
  i2370.canSpreadMask = !!i2371[21]
  i2370.shouldPaintHoles = !!i2371[22]
  i2370.canRotateTip = !!i2371[23]
  i2370._mode = i2371[24]
  return i2370
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i2372 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i2373 = data
  request.r(i2373[0], i2373[1], 0, i2372, 'Card')
  i2372.currentProgress = i2373[2]
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2375 = data
  request.r(i2375[0], i2375[1], 0, i2374, 'animatorController')
  request.r(i2375[2], i2375[3], 0, i2374, 'avatar')
  i2374.updateMode = i2375[4]
  i2374.hasTransformHierarchy = !!i2375[5]
  i2374.applyRootMotion = !!i2375[6]
  var i2377 = i2375[7]
  var i2376 = []
  for(var i = 0; i < i2377.length; i += 2) {
  request.r(i2377[i + 0], i2377[i + 1], 2, i2376, '')
  }
  i2374.humanBones = i2376
  i2374.enabled = !!i2375[8]
  return i2374
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i2380 = root || request.c( 'BD_AnimationHelper' )
  var i2381 = data
  i2380.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i2381[0], i2380.OnAnimationComplete)
  request.r(i2381[1], i2381[2], 0, i2380, 'sfxClip')
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2383 = data
  i2382.color = new pc.Color(i2383[0], i2383[1], i2383[2], i2383[3])
  request.r(i2383[4], i2383[5], 0, i2382, 'sprite')
  i2382.flipX = !!i2383[6]
  i2382.flipY = !!i2383[7]
  i2382.drawMode = i2383[8]
  i2382.size = new pc.Vec2( i2383[9], i2383[10] )
  i2382.tileMode = i2383[11]
  i2382.adaptiveModeThreshold = i2383[12]
  i2382.maskInteraction = i2383[13]
  i2382.spriteSortPoint = i2383[14]
  i2382.enabled = !!i2383[15]
  request.r(i2383[16], i2383[17], 0, i2382, 'sharedMaterial')
  var i2385 = i2383[18]
  var i2384 = []
  for(var i = 0; i < i2385.length; i += 2) {
  request.r(i2385[i + 0], i2385[i + 1], 2, i2384, '')
  }
  i2382.sharedMaterials = i2384
  i2382.receiveShadows = !!i2383[19]
  i2382.shadowCastingMode = i2383[20]
  i2382.sortingLayerID = i2383[21]
  i2382.sortingOrder = i2383[22]
  i2382.lightmapIndex = i2383[23]
  i2382.lightmapSceneIndex = i2383[24]
  i2382.lightmapScaleOffset = new pc.Vec4( i2383[25], i2383[26], i2383[27], i2383[28] )
  i2382.lightProbeUsage = i2383[29]
  i2382.reflectionProbeUsage = i2383[30]
  return i2382
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i2386 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i2387 = data
  request.r(i2387[0], i2387[1], 0, i2386, 'm_RootBone')
  var i2389 = i2387[2]
  var i2388 = []
  for(var i = 0; i < i2389.length; i += 2) {
  request.r(i2389[i + 0], i2389[i + 1], 2, i2388, '')
  }
  i2386.m_BoneTransforms = i2388
  i2386.m_AlwaysUpdate = !!i2387[3]
  i2386.m_AutoRebind = !!i2387[4]
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i2391 = data
  var i2393 = i2391[0]
  var i2392 = []
  for(var i = 0; i < i2393.length; i += 3) {
    i2392.push( new pc.Vec3( i2393[i + 0], i2393[i + 1], i2393[i + 2] ) );
  }
  i2390.positions = i2392
  i2390.positionCount = i2391[1]
  i2390.time = i2391[2]
  i2390.startWidth = i2391[3]
  i2390.endWidth = i2391[4]
  i2390.widthMultiplier = i2391[5]
  i2390.autodestruct = !!i2391[6]
  i2390.emitting = !!i2391[7]
  i2390.numCornerVertices = i2391[8]
  i2390.numCapVertices = i2391[9]
  i2390.minVertexDistance = i2391[10]
  i2390.colorGradient = i2391[11] ? new pc.ColorGradient(i2391[11][0], i2391[11][1], i2391[11][2]) : null
  i2390.startColor = new pc.Color(i2391[12], i2391[13], i2391[14], i2391[15])
  i2390.endColor = new pc.Color(i2391[16], i2391[17], i2391[18], i2391[19])
  i2390.generateLightingData = !!i2391[20]
  i2390.textureMode = i2391[21]
  i2390.alignment = i2391[22]
  i2390.widthCurve = new pc.AnimationCurve( { keys_flow: i2391[23] } )
  i2390.enabled = !!i2391[24]
  request.r(i2391[25], i2391[26], 0, i2390, 'sharedMaterial')
  var i2395 = i2391[27]
  var i2394 = []
  for(var i = 0; i < i2395.length; i += 2) {
  request.r(i2395[i + 0], i2395[i + 1], 2, i2394, '')
  }
  i2390.sharedMaterials = i2394
  i2390.receiveShadows = !!i2391[28]
  i2390.shadowCastingMode = i2391[29]
  i2390.sortingLayerID = i2391[30]
  i2390.sortingOrder = i2391[31]
  i2390.lightmapIndex = i2391[32]
  i2390.lightmapSceneIndex = i2391[33]
  i2390.lightmapScaleOffset = new pc.Vec4( i2391[34], i2391[35], i2391[36], i2391[37] )
  i2390.lightProbeUsage = i2391[38]
  i2390.reflectionProbeUsage = i2391[39]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i2399 = data
  i2398.textureMode = i2399[0]
  i2398.alignment = i2399[1]
  i2398.widthCurve = new pc.AnimationCurve( { keys_flow: i2399[2] } )
  i2398.colorGradient = i2399[3] ? new pc.ColorGradient(i2399[3][0], i2399[3][1], i2399[3][2]) : null
  var i2401 = i2399[4]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 3) {
    i2400.push( new pc.Vec3( i2401[i + 0], i2401[i + 1], i2401[i + 2] ) );
  }
  i2398.positions = i2400
  i2398.positionCount = i2399[5]
  i2398.widthMultiplier = i2399[6]
  i2398.startWidth = i2399[7]
  i2398.endWidth = i2399[8]
  i2398.numCornerVertices = i2399[9]
  i2398.numCapVertices = i2399[10]
  i2398.useWorldSpace = !!i2399[11]
  i2398.loop = !!i2399[12]
  i2398.startColor = new pc.Color(i2399[13], i2399[14], i2399[15], i2399[16])
  i2398.endColor = new pc.Color(i2399[17], i2399[18], i2399[19], i2399[20])
  i2398.generateLightingData = !!i2399[21]
  i2398.enabled = !!i2399[22]
  request.r(i2399[23], i2399[24], 0, i2398, 'sharedMaterial')
  var i2403 = i2399[25]
  var i2402 = []
  for(var i = 0; i < i2403.length; i += 2) {
  request.r(i2403[i + 0], i2403[i + 1], 2, i2402, '')
  }
  i2398.sharedMaterials = i2402
  i2398.receiveShadows = !!i2399[26]
  i2398.shadowCastingMode = i2399[27]
  i2398.sortingLayerID = i2399[28]
  i2398.sortingOrder = i2399[29]
  i2398.lightmapIndex = i2399[30]
  i2398.lightmapSceneIndex = i2399[31]
  i2398.lightmapScaleOffset = new pc.Vec4( i2399[32], i2399[33], i2399[34], i2399[35] )
  i2398.lightProbeUsage = i2399[36]
  i2398.reflectionProbeUsage = i2399[37]
  return i2398
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i2404 = root || request.c( 'StaticFixedPipe' )
  var i2405 = data
  request.r(i2405[0], i2405[1], 0, i2404, 'lineRenderer')
  request.r(i2405[2], i2405[3], 0, i2404, 'toolTransform')
  request.r(i2405[4], i2405[5], 0, i2404, 'toolDirectionPoint')
  request.r(i2405[6], i2405[7], 0, i2404, 'fixedEndPoint')
  i2404.segmentCount = i2405[8]
  i2404.totalLength = i2405[9]
  i2404.constraintIterations = i2405[10]
  i2404.gravity = new pc.Vec3( i2405[11], i2405[12], i2405[13] )
  i2404.pipeWidth = i2405[14]
  return i2404
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2406 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2407 = data
  i2406.targetIsSelf = !!i2407[0]
  request.r(i2407[1], i2407[2], 0, i2406, 'targetGO')
  i2406.tweenTargetIsTargetGO = !!i2407[3]
  i2406.delay = i2407[4]
  i2406.duration = i2407[5]
  i2406.easeType = i2407[6]
  i2406.easeCurve = new pc.AnimationCurve( { keys_flow: i2407[7] } )
  i2406.loopType = i2407[8]
  i2406.loops = i2407[9]
  i2406.id = i2407[10]
  i2406.isRelative = !!i2407[11]
  i2406.isFrom = !!i2407[12]
  i2406.isIndependentUpdate = !!i2407[13]
  i2406.autoKill = !!i2407[14]
  i2406.autoGenerate = !!i2407[15]
  i2406.isActive = !!i2407[16]
  i2406.isValid = !!i2407[17]
  request.r(i2407[18], i2407[19], 0, i2406, 'target')
  i2406.animationType = i2407[20]
  i2406.targetType = i2407[21]
  i2406.forcedTargetType = i2407[22]
  i2406.autoPlay = !!i2407[23]
  i2406.useTargetAsV3 = !!i2407[24]
  i2406.endValueFloat = i2407[25]
  i2406.endValueV3 = new pc.Vec3( i2407[26], i2407[27], i2407[28] )
  i2406.endValueV2 = new pc.Vec2( i2407[29], i2407[30] )
  i2406.endValueColor = new pc.Color(i2407[31], i2407[32], i2407[33], i2407[34])
  i2406.endValueString = i2407[35]
  i2406.endValueRect = UnityEngine.Rect.MinMaxRect(i2407[36], i2407[37], i2407[38], i2407[39])
  request.r(i2407[40], i2407[41], 0, i2406, 'endValueTransform')
  i2406.optionalBool0 = !!i2407[42]
  i2406.optionalBool1 = !!i2407[43]
  i2406.optionalFloat0 = i2407[44]
  i2406.optionalInt0 = i2407[45]
  i2406.optionalRotationMode = i2407[46]
  i2406.optionalScrambleMode = i2407[47]
  i2406.optionalShakeRandomnessMode = i2407[48]
  i2406.optionalString = i2407[49]
  i2406.updateType = i2407[50]
  i2406.isSpeedBased = !!i2407[51]
  i2406.hasOnStart = !!i2407[52]
  i2406.hasOnPlay = !!i2407[53]
  i2406.hasOnUpdate = !!i2407[54]
  i2406.hasOnStepComplete = !!i2407[55]
  i2406.hasOnComplete = !!i2407[56]
  i2406.hasOnTweenCreated = !!i2407[57]
  i2406.hasOnRewind = !!i2407[58]
  i2406.onStart = request.d('UnityEngine.Events.UnityEvent', i2407[59], i2406.onStart)
  i2406.onPlay = request.d('UnityEngine.Events.UnityEvent', i2407[60], i2406.onPlay)
  i2406.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2407[61], i2406.onUpdate)
  i2406.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2407[62], i2406.onStepComplete)
  i2406.onComplete = request.d('UnityEngine.Events.UnityEvent', i2407[63], i2406.onComplete)
  i2406.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2407[64], i2406.onTweenCreated)
  i2406.onRewind = request.d('UnityEngine.Events.UnityEvent', i2407[65], i2406.onRewind)
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2409 = data
  i2408.usedByComposite = !!i2409[0]
  i2408.autoTiling = !!i2409[1]
  i2408.size = new pc.Vec2( i2409[2], i2409[3] )
  i2408.edgeRadius = i2409[4]
  i2408.enabled = !!i2409[5]
  i2408.isTrigger = !!i2409[6]
  i2408.usedByEffector = !!i2409[7]
  i2408.density = i2409[8]
  i2408.offset = new pc.Vec2( i2409[9], i2409[10] )
  request.r(i2409[11], i2409[12], 0, i2408, 'material')
  return i2408
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i2410 = root || request.c( 'BasicDrag' )
  var i2411 = data
  i2410.canDrag = !!i2411[0]
  i2410.dragByDelta = !!i2411[1]
  i2410.isDragging = !!i2411[2]
  i2410.moveWithPointer = !!i2411[3]
  i2410.canReturn = !!i2411[4]
  i2410.jumpOnReturn = !!i2411[5]
  i2410.returnTime = i2411[6]
  i2410.Tool_Offset = new pc.Vec3( i2411[7], i2411[8], i2411[9] )
  i2410.canScaleIncrease = !!i2411[10]
  i2410.Self_ScaleNew = new pc.Vec3( i2411[11], i2411[12], i2411[13] )
  i2410.canRotateOnPick = !!i2411[14]
  i2410.startRot = new pc.Vec3( i2411[15], i2411[16], i2411[17] )
  i2410.newRot = new pc.Vec3( i2411[18], i2411[19], i2411[20] )
  var i2413 = i2411[21]
  var i2412 = []
  for(var i = 0; i < i2413.length; i += 2) {
  request.r(i2413[i + 0], i2413[i + 1], 2, i2412, '')
  }
  i2410.childSprite = i2412
  request.r(i2411[22], i2411[23], 0, i2410, 'ToolSelectClip')
  request.r(i2411[24], i2411[25], 0, i2410, 'ToolLoopClip')
  request.r(i2411[26], i2411[27], 0, i2410, 'thisParticles')
  i2410.onDragparticle = !!i2411[28]
  request.r(i2411[29], i2411[30], 0, i2410, 'dragParticles')
  request.r(i2411[31], i2411[32], 0, i2410, 'anim')
  i2410.startPos = new pc.Vec3( i2411[33], i2411[34], i2411[35] )
  i2410.startScale = new pc.Vec3( i2411[36], i2411[37], i2411[38] )
  i2410.Vibration = !!i2411[39]
  i2410.isPlacedCannotMove = !!i2411[40]
  i2410.isObjectMovingWhileDragging = !!i2411[41]
  i2410.OnMouseDownEvent = request.d('System.Action', i2411[42], i2410.OnMouseDownEvent)
  i2410.OnMouseUpEvent = request.d('System.Action', i2411[43], i2410.OnMouseUpEvent)
  i2410.ProgStartEvent = request.d('System.Action', i2411[44], i2410.ProgStartEvent)
  i2410.ProgEndEvent = request.d('System.Action', i2411[45], i2410.ProgEndEvent)
  i2410.canCallMouseUpWhenGamePaused = !!i2411[46]
  i2410.ClampX_L = i2411[47]
  i2410.ClampX_H = i2411[48]
  i2410.ClampY_L = i2411[49]
  i2410.ClampY_H = i2411[50]
  i2410.startOrder = i2411[51]
  i2410.dontResetItIsInCollider = !!i2411[52]
  request.r(i2411[53], i2411[54], 0, i2410, 'thisCollider')
  request.r(i2411[55], i2411[56], 0, i2410, 'thisSR')
  i2410.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i2411[57], i2410.OnMouseDownEventIndependentFromCanDrag)
  return i2410
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2416 = root || request.c( 'System.Action' )
  var i2417 = data
  return i2416
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i2418 = root || request.c( 'BD_Clamp' )
  var i2419 = data
  i2418.ClampX_L = i2419[0]
  i2418.ClampX_H = i2419[1]
  i2418.ClampY_L = i2419[2]
  i2418.ClampY_H = i2419[3]
  return i2418
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i2420 = root || request.c( 'OutlinePulse' )
  var i2421 = data
  i2420.smallThickness = i2421[0]
  i2420.largeThickness = i2421[1]
  i2420.transitionSpeed = i2421[2]
  i2420.animationSpeed = i2421[3]
  i2420.isThickOutline = !!i2421[4]
  i2420.animate = !!i2421[5]
  i2420.hideSpriteOnly = !!i2421[6]
  return i2420
}

Deserializers["BD_ItemPick"] = function (request, data, root) {
  var i2422 = root || request.c( 'BD_ItemPick' )
  var i2423 = data
  request.r(i2423[0], i2423[1], 0, i2422, 'Tool')
  request.r(i2423[2], i2423[3], 0, i2422, 'Outline')
  request.r(i2423[4], i2423[5], 0, i2422, 'itemRend')
  request.r(i2423[6], i2423[7], 0, i2422, 'pick_sp')
  i2422.OnTap = request.d('UnityEngine.Events.UnityEvent', i2423[8], i2422.OnTap)
  i2422.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2423[9], i2422.OnComplete)
  request.r(i2423[10], i2423[11], 0, i2422, 'Clip')
  i2422.minDragDistance = i2423[12]
  i2422.isTaped = !!i2423[13]
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

Deserializers["BD_Sticky"] = function (request, data, root) {
  var i2426 = root || request.c( 'BD_Sticky' )
  var i2427 = data
  request.r(i2427[0], i2427[1], 0, i2426, 'anim')
  i2426.isVerticlePull = !!i2427[2]
  request.r(i2427[3], i2427[4], 0, i2426, 'pickSfx')
  request.r(i2427[5], i2427[6], 0, i2426, 'pulledClip')
  request.r(i2427[7], i2427[8], 0, i2426, 'pullSource')
  i2426.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2427[9], i2426.OnComplete)
  i2426.changeLayerPick = !!i2427[10]
  request.r(i2427[11], i2427[12], 0, i2426, 'sp_rendr')
  i2426.def_layerNo = i2427[13]
  i2426.tar_LayerNo = i2427[14]
  i2426.direction = i2427[15]
  i2426.dragThreshold = i2427[16]
  i2426.pullDistanceToFree = i2427[17]
  i2426.returnSpeed = i2427[18]
  i2426.resistance = i2427[19]
  var i2429 = i2427[20]
  var i2428 = []
  for(var i = 0; i < i2429.length; i += 2) {
  request.r(i2429[i + 0], i2429[i + 1], 2, i2428, '')
  }
  i2426.StartBones = i2428
  var i2431 = i2427[21]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 2) {
  request.r(i2431[i + 0], i2431[i + 1], 2, i2430, '')
  }
  i2426.EndBones = i2430
  request.r(i2427[22], i2427[23], 0, i2426, 'BonePivot')
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2433 = data
  request.r(i2433[0], i2433[1], 0, i2432, 'clip')
  request.r(i2433[2], i2433[3], 0, i2432, 'outputAudioMixerGroup')
  i2432.playOnAwake = !!i2433[4]
  i2432.loop = !!i2433[5]
  i2432.time = i2433[6]
  i2432.volume = i2433[7]
  i2432.pitch = i2433[8]
  i2432.enabled = !!i2433[9]
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2435 = data
  i2434.radius = i2435[0]
  i2434.enabled = !!i2435[1]
  i2434.isTrigger = !!i2435[2]
  i2434.usedByEffector = !!i2435[3]
  i2434.density = i2435[4]
  i2434.offset = new pc.Vec2( i2435[5], i2435[6] )
  request.r(i2435[7], i2435[8], 0, i2434, 'material')
  return i2434
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i2436 = root || request.c( 'PlayParticlesOnCollision' )
  var i2437 = data
  request.r(i2437[0], i2437[1], 0, i2436, 'Target')
  request.r(i2437[2], i2437[3], 0, i2436, 'ParticlePrefab')
  i2436.destroyIt = !!i2437[4]
  i2436.stayAtPlace = !!i2437[5]
  i2436.disableOnCollision = !!i2437[6]
  i2436.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i2437[7], i2436.OnCollisionEvent)
  return i2436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i2439 = data
  i2438.frontSortingLayerID = i2439[0]
  i2438.frontSortingOrder = i2439[1]
  i2438.backSortingLayerID = i2439[2]
  i2438.backSortingOrder = i2439[3]
  i2438.alphaCutoff = i2439[4]
  request.r(i2439[5], i2439[6], 0, i2438, 'sprite')
  i2438.tileMode = i2439[7]
  i2438.isCustomRangeActive = !!i2439[8]
  i2438.spriteSortPoint = i2439[9]
  i2438.enabled = !!i2439[10]
  request.r(i2439[11], i2439[12], 0, i2438, 'sharedMaterial')
  var i2441 = i2439[13]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 2) {
  request.r(i2441[i + 0], i2441[i + 1], 2, i2440, '')
  }
  i2438.sharedMaterials = i2440
  i2438.receiveShadows = !!i2439[14]
  i2438.shadowCastingMode = i2439[15]
  i2438.sortingLayerID = i2439[16]
  i2438.sortingOrder = i2439[17]
  i2438.lightmapIndex = i2439[18]
  i2438.lightmapSceneIndex = i2439[19]
  i2438.lightmapScaleOffset = new pc.Vec4( i2439[20], i2439[21], i2439[22], i2439[23] )
  i2438.lightProbeUsage = i2439[24]
  i2438.reflectionProbeUsage = i2439[25]
  return i2438
}

Deserializers["PlayTweenOnHit"] = function (request, data, root) {
  var i2442 = root || request.c( 'PlayTweenOnHit' )
  var i2443 = data
  i2442.isContinueous = !!i2443[0]
  request.r(i2443[1], i2443[2], 0, i2442, 'tool')
  var i2445 = i2443[3]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 2) {
  request.r(i2445[i + 0], i2445[i + 1], 2, i2444, '')
  }
  i2442.animsToPlay = i2444
  request.r(i2443[4], i2443[5], 0, i2442, 'tipTarget')
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i2449 = data
  i2448.usedByComposite = !!i2449[0]
  i2448.autoTiling = !!i2449[1]
  var i2451 = i2449[2]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
  var i2453 = i2451[i + 0]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 2) {
    i2452.push( new pc.Vec2( i2453[i + 0], i2453[i + 1] ) );
  }
    i2450.push( i2452 );
  }
  i2448.points = i2450
  i2448.enabled = !!i2449[3]
  i2448.isTrigger = !!i2449[4]
  i2448.usedByEffector = !!i2449[5]
  i2448.density = i2449[6]
  i2448.offset = new pc.Vec2( i2449[7], i2449[8] )
  request.r(i2449[9], i2449[10], 0, i2448, 'material')
  return i2448
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i2460 = root || request.c( 'PlaySfxOnCollision' )
  var i2461 = data
  request.r(i2461[0], i2461[1], 0, i2460, 'Tip')
  i2460.Mode = i2461[2]
  request.r(i2461[3], i2461[4], 0, i2460, 'DragInput')
  request.r(i2461[5], i2461[6], 0, i2460, 'Source')
  i2460.startVol = i2461[7]
  i2460.targetVol = i2461[8]
  i2460.duration = i2461[9]
  request.r(i2461[10], i2461[11], 0, i2460, 'Particles')
  i2460.isDone = !!i2461[12]
  i2460.isInArea = !!i2461[13]
  i2460.isPlaying = !!i2461[14]
  return i2460
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i2462 = root || request.c( 'InteractableBones' )
  var i2463 = data
  request.r(i2463[0], i2463[1], 0, i2462, 'Tip')
  i2462.MoveAmount = i2463[2]
  i2462.MoveSpeed = i2463[3]
  i2462.ShakeSpeed = i2463[4]
  i2462.MovementThreshold = i2463[5]
  i2462.MoveX = !!i2463[6]
  i2462.MoveY = !!i2463[7]
  return i2462
}

Deserializers["WaypointFollower"] = function (request, data, root) {
  var i2464 = root || request.c( 'WaypointFollower' )
  var i2465 = data
  var i2467 = i2465[0]
  var i2466 = []
  for(var i = 0; i < i2467.length; i += 2) {
  request.r(i2467[i + 0], i2467[i + 1], 2, i2466, '')
  }
  i2464.waypoints = i2466
  i2464.speed = i2465[1]
  i2464.rotationSpeed = i2465[2]
  i2464.loop = !!i2465[3]
  i2464.reverse = !!i2465[4]
  i2464.canMove = !!i2465[5]
  request.r(i2465[6], i2465[7], 0, i2464, 'movingSfx')
  return i2464
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i2468 = root || request.c( 'BD_Action' )
  var i2469 = data
  i2468.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i2469[0], i2468.OnMouseDownEvent)
  i2468.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i2469[1], i2468.OnMouseUpEvent)
  i2468.setToolLayer = !!i2469[2]
  request.r(i2469[3], i2469[4], 0, i2468, 'tool_SP')
  return i2468
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i2470 = root || request.c( 'BD_CameraFollow' )
  var i2471 = data
  request.r(i2471[0], i2471[1], 0, i2470, 'Tool')
  request.r(i2471[2], i2471[3], 0, i2470, 'Pivot')
  i2470.FOV = i2471[4]
  i2470.Y_L = i2471[5]
  i2470.Y_H = i2471[6]
  i2470.X_L = i2471[7]
  i2470.X_R = i2471[8]
  i2470.startDelay = i2471[9]
  i2470.duration = i2471[10]
  return i2470
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i2472 = root || request.c( 'BD_ToolRotate' )
  var i2473 = data
  i2472.startDelay = i2473[0]
  request.r(i2473[1], i2473[2], 0, i2472, 'Tool')
  request.r(i2473[3], i2473[4], 0, i2472, 'Clamp')
  request.r(i2473[5], i2473[6], 0, i2472, 'Pivot')
  i2472.MinAngle = new pc.Vec3( i2473[7], i2473[8], i2473[9] )
  i2472.MaxAngle = new pc.Vec3( i2473[10], i2473[11], i2473[12] )
  i2472.rotationSpeed = i2473[13]
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2475 = data
  i2474.bodyType = i2475[0]
  request.r(i2475[1], i2475[2], 0, i2474, 'material')
  i2474.simulated = !!i2475[3]
  i2474.useAutoMass = !!i2475[4]
  i2474.mass = i2475[5]
  i2474.drag = i2475[6]
  i2474.angularDrag = i2475[7]
  i2474.gravityScale = i2475[8]
  i2474.collisionDetectionMode = i2475[9]
  i2474.sleepMode = i2475[10]
  i2474.constraints = i2475[11]
  return i2474
}

Deserializers["BugKill_Tip"] = function (request, data, root) {
  var i2476 = root || request.c( 'BugKill_Tip' )
  var i2477 = data
  var i2479 = i2477[0]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 2) {
  request.r(i2479[i + 0], i2479[i + 1], 2, i2478, '')
  }
  i2476.targets = i2478
  i2476.waypointFollower = !!i2477[1]
  i2476.fallSpeed = i2477[2]
  i2476.totalTargets = i2477[3]
  i2476.killCount = i2477[4]
  request.r(i2477[5], i2477[6], 0, i2476, 'bugKillSfx')
  i2476.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2477[7], i2476.OnComplete)
  return i2476
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i2480 = root || request.c( 'BD_Progress' )
  var i2481 = data
  var i2483 = i2481[0]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 1) {
    i2482.push( request.d('ScratchData', i2483[i + 0]) );
  }
  i2480.AllScratches = i2482
  i2480.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i2481[1], i2480.OnScratchComplete)
  i2480.isProgDone = !!i2481[2]
  i2480.canCallComplete = !!i2481[3]
  i2480.CollectiveAppear = !!i2481[4]
  i2480.tipControl = !!i2481[5]
  i2480.progressControl = !!i2481[6]
  request.r(i2481[7], i2481[8], 0, i2480, 'thisDrag')
  i2480.CompleteEvent = request.d('System.Action', i2481[9], i2480.CompleteEvent)
  i2480.SubCompleteEvent = request.d('System.Action', i2481[10], i2480.SubCompleteEvent)
  return i2480
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i2486 = root || request.c( 'ScratchData' )
  var i2487 = data
  request.r(i2487[0], i2487[1], 0, i2486, 'ScratchManager')
  i2486.scratchLimit = i2487[2]
  i2486.isComplete = !!i2487[3]
  return i2486
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i2488 = root || request.c( 'BD_ProgressHelper' )
  var i2489 = data
  request.r(i2489[0], i2489[1], 0, i2488, 'BD_Progress')
  request.r(i2489[2], i2489[3], 0, i2488, 'fadeSprite')
  i2488.fadeIn = !!i2489[4]
  return i2488
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i2490 = root || request.c( 'ActionOnTap' )
  var i2491 = data
  i2490.OnTap = request.d('UnityEngine.Events.UnityEvent', i2491[0], i2490.OnTap)
  i2490.OnTapExtra = request.d('System.Action', i2491[1], i2490.OnTapExtra)
  return i2490
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i2492 = root || request.c( 'BD_SpriteChange' )
  var i2493 = data
  request.r(i2493[0], i2493[1], 0, i2492, 'BD')
  request.r(i2493[2], i2493[3], 0, i2492, 'SR')
  request.r(i2493[4], i2493[5], 0, i2492, 'Default')
  request.r(i2493[6], i2493[7], 0, i2492, 'Picked')
  i2492.resetOnRelease = !!i2493[8]
  return i2492
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i2494 = root || request.c( 'BD_AnimatorDrag' )
  var i2495 = data
  request.r(i2495[0], i2495[1], 0, i2494, 'BD')
  request.r(i2495[2], i2495[3], 0, i2494, 'anim')
  request.r(i2495[4], i2495[5], 0, i2494, 'Source')
  i2494.Vibration = !!i2495[6]
  i2494.isCompletable = !!i2495[7]
  i2494.completionThreshold = i2495[8]
  i2494.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2495[9], i2494.OnComplete)
  return i2494
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i2496 = root || request.c( 'PlaceItem' )
  var i2497 = data
  request.r(i2497[0], i2497[1], 0, i2496, 'thisDrag')
  request.r(i2497[2], i2497[3], 0, i2496, 'Target')
  request.r(i2497[4], i2497[5], 0, i2496, 'Clip')
  i2496.jumpOnPlace = !!i2497[6]
  i2496.jumpHeight = i2497[7]
  i2496.jumpDuration = i2497[8]
  i2496.settleDuration = i2497[9]
  i2496.isPlaced = !!i2497[10]
  i2496.isInsideCollider = !!i2497[11]
  i2496.changeScaleOnPlace = !!i2497[12]
  request.r(i2497[13], i2497[14], 0, i2496, 'item')
  i2496.newScaleOnPlace = new pc.Vec3( i2497[15], i2497[16], i2497[17] )
  i2496.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i2497[18], i2496.OnPlaced)
  return i2496
}

Deserializers["BD_Audio"] = function (request, data, root) {
  var i2498 = root || request.c( 'BD_Audio' )
  var i2499 = data
  request.r(i2499[0], i2499[1], 0, i2498, 'BD')
  request.r(i2499[2], i2499[3], 0, i2498, 'Source')
  i2498.shouldRestart = !!i2499[4]
  i2498.startVol = i2499[5]
  i2498.targetVol = i2499[6]
  i2498.duration = i2499[7]
  i2498.startDelay = i2499[8]
  return i2498
}

Deserializers["Level1_HairAnim"] = function (request, data, root) {
  var i2500 = root || request.c( 'Level1_HairAnim' )
  var i2501 = data
  i2500.holdDuration = i2501[0]
  request.r(i2501[1], i2501[2], 0, i2500, 'targetSprite')
  i2500.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i2501[3], i2500.onHoldComplete)
  i2500.isHolding = !!i2501[4]
  request.r(i2501[5], i2501[6], 0, i2500, 'targetObj')
  request.r(i2501[7], i2501[8], 0, i2500, 'thisTool')
  request.r(i2501[9], i2501[10], 0, i2500, 'thisToolTip')
  var i2503 = i2501[11]
  var i2502 = []
  for(var i = 0; i < i2503.length; i += 2) {
  request.r(i2503[i + 0], i2503[i + 1], 2, i2502, '')
  }
  i2500.hairsAnim = i2502
  var i2505 = i2501[12]
  var i2504 = []
  for(var i = 0; i < i2505.length; i += 2) {
  request.r(i2505[i + 0], i2505[i + 1], 2, i2504, '')
  }
  i2500.hairsRend = i2504
  i2500.hairsRendFadeThreshold = i2501[13]
  request.r(i2501[14], i2501[15], 0, i2500, 'wetHairRend')
  request.r(i2501[16], i2501[17], 0, i2500, 'dryHairRend')
  request.r(i2501[18], i2501[19], 0, i2500, 'dryHairRendBack')
  i2500.hairAnimStopDuration = i2501[20]
  i2500.hairAnimResumeDuration = i2501[21]
  return i2500
}

Deserializers["BD_TapandHold"] = function (request, data, root) {
  var i2506 = root || request.c( 'BD_TapandHold' )
  var i2507 = data
  i2506.holdDuration = i2507[0]
  i2506.updateVisuals = !!i2507[1]
  request.r(i2507[2], i2507[3], 0, i2506, 'targetSprite')
  i2506.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i2507[4], i2506.onHoldComplete)
  i2506.onCompleteProgress = request.d('UnityEngine.Events.UnityEvent', i2507[5], i2506.onCompleteProgress)
  i2506.currentProgress = i2507[6]
  i2506.isHolding = !!i2507[7]
  request.r(i2507[8], i2507[9], 0, i2506, 'targetObj')
  request.r(i2507[10], i2507[11], 0, i2506, 'thisTool')
  request.r(i2507[12], i2507[13], 0, i2506, 'thisToolTip')
  return i2506
}

Deserializers["TapandHold_Simple"] = function (request, data, root) {
  var i2508 = root || request.c( 'TapandHold_Simple' )
  var i2509 = data
  request.r(i2509[0], i2509[1], 0, i2508, 'actionSfx')
  i2508.holdDuration = i2509[2]
  i2508.dragThreshold = i2509[3]
  i2508.fadeInOnHold = !!i2509[4]
  i2508.fadeOutOnRelease = !!i2509[5]
  request.r(i2509[6], i2509[7], 0, i2508, 'targetSprite')
  i2508.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i2509[8], i2508.onHoldComplete)
  i2508.currentProgress = i2509[9]
  i2508.isHolding = !!i2509[10]
  i2508.isCompleted = !!i2509[11]
  request.r(i2509[12], i2509[13], 0, i2508, 'thisTool')
  return i2508
}

Deserializers["DraggableBrush"] = function (request, data, root) {
  var i2510 = root || request.c( 'DraggableBrush' )
  var i2511 = data
  request.r(i2511[0], i2511[1], 0, i2510, 'BD_Progress')
  var i2513 = i2511[2]
  var i2512 = new (System.Collections.Generic.List$1(Bridge.ns('DraggableBrush+Step')))
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.add(request.d('DraggableBrush+Step', i2513[i + 0]));
  }
  i2510.movementSteps = i2512
  i2510.snapSensitivity = i2511[3]
  i2510.OnComplete = request.d('UnityEngine.Events.UnityEvent', i2511[4], i2510.OnComplete)
  return i2510
}

Deserializers["DraggableBrush+Step"] = function (request, data, root) {
  var i2516 = root || request.c( 'DraggableBrush+Step' )
  var i2517 = data
  i2516.stepName = i2517[0]
  i2516.startX = i2517[1]
  i2516.startY = i2517[2]
  i2516.endY = i2517[3]
  return i2516
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i2518 = root || request.c( 'SpriteButton' )
  var i2519 = data
  i2518.isLocked = !!i2519[0]
  i2518.lockMsg = i2519[1]
  i2518.onClick = request.d('UnityEngine.Events.UnityEvent', i2519[2], i2518.onClick)
  i2518.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i2519[3], i2518.onLockedClick)
  i2518.isLevelBtnSfx = !!i2519[4]
  request.r(i2519[5], i2519[6], 0, i2518, 'pivot')
  i2518.reductionChange = i2519[7]
  i2518.animationDuration = i2519[8]
  return i2518
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i2520 = root || request.c( 'DestroyObj' )
  var i2521 = data
  i2520.destroyDelay = i2521[0]
  return i2520
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i2522 = root || request.c( 'MenuLevel' )
  var i2523 = data
  request.r(i2523[0], i2523[1], 0, i2522, 'menuLevelBtnUpdate')
  var i2525 = i2523[2]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('MenuLevelData', i2525[i + 0]) );
  }
  i2522.AllSteps = i2524
  request.r(i2523[3], i2523[4], 0, i2522, 'buttonparent')
  var i2527 = i2523[5]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 2) {
  request.r(i2527[i + 0], i2527[i + 1], 2, i2526, '')
  }
  i2522.BtnsDotweenAnims = i2526
  var i2529 = i2523[6]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 2) {
  request.r(i2529[i + 0], i2529[i + 1], 2, i2528, '')
  }
  i2522.BtnsCols = i2528
  request.r(i2523[7], i2523[8], 0, i2522, 'mainGameView')
  request.r(i2523[9], i2523[10], 0, i2522, 'Storyboard')
  request.r(i2523[11], i2523[12], 0, i2522, 'BgMusic')
  request.r(i2523[13], i2523[14], 0, i2522, 'BgStoryMusic')
  request.r(i2523[15], i2523[16], 0, i2522, 'Hand_Tut1')
  request.r(i2523[17], i2523[18], 0, i2522, 'Button_Hand')
  var i2531 = i2523[19]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 2) {
  request.r(i2531[i + 0], i2531[i + 1], 2, i2530, '')
  }
  i2522.itemEnable_Onstart = i2530
  var i2533 = i2523[20]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 2) {
  request.r(i2533[i + 0], i2533[i + 1], 2, i2532, '')
  }
  i2522.itemDisable_Onstart = i2532
  var i2535 = i2523[21]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 2) {
  request.r(i2535[i + 0], i2535[i + 1], 2, i2534, '')
  }
  i2522.itemEnable_Oncomplete = i2534
  var i2537 = i2523[22]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 2) {
  request.r(i2537[i + 0], i2537[i + 1], 2, i2536, '')
  }
  i2522.itemDisable_Oncomplete = i2536
  i2522.levelKey = i2523[23]
  i2522.revealDirtyHoldTime = i2523[24]
  return i2522
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i2540 = root || request.c( 'MenuLevelData' )
  var i2541 = data
  i2540.Name = i2541[0]
  request.r(i2541[1], i2541[2], 0, i2540, 'UiBtn')
  request.r(i2541[3], i2541[4], 0, i2540, 'TickBtn')
  request.r(i2541[5], i2541[6], 0, i2540, 'ExclamationIcon')
  var i2543 = i2541[7]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 2) {
  request.r(i2543[i + 0], i2543[i + 1], 2, i2542, '')
  }
  i2540.Item_Dirty = i2542
  var i2545 = i2541[8]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 2) {
  request.r(i2545[i + 0], i2545[i + 1], 2, i2544, '')
  }
  i2540.Item_Clean = i2544
  request.r(i2541[9], i2541[10], 0, i2540, 'CompleteParticle')
  return i2540
}

Deserializers["IntroLevelAnim"] = function (request, data, root) {
  var i2548 = root || request.c( 'IntroLevelAnim' )
  var i2549 = data
  request.r(i2549[0], i2549[1], 0, i2548, 'menuLevel')
  i2548.lvlkey = i2549[2]
  request.r(i2549[3], i2549[4], 0, i2548, 'DressChangeObj')
  request.r(i2549[5], i2549[6], 0, i2548, 'DressChangeClip')
  return i2548
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i2550 = root || request.c( 'Level_PoseController' )
  var i2551 = data
  var i2553 = i2551[0]
  var i2552 = []
  for(var i = 0; i < i2553.length; i += 2) {
  request.r(i2553[i + 0], i2553[i + 1], 2, i2552, '')
  }
  i2550.itemToShow = i2552
  var i2555 = i2551[1]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 2) {
  request.r(i2555[i + 0], i2555[i + 1], 2, i2554, '')
  }
  i2550.itemToHide = i2554
  i2550.stepTarget = i2551[2]
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2557 = data
  i2556.name = i2557[0]
  i2556.atlasId = i2557[1]
  i2556.mipmapCount = i2557[2]
  i2556.hdr = !!i2557[3]
  i2556.size = i2557[4]
  i2556.anisoLevel = i2557[5]
  i2556.filterMode = i2557[6]
  var i2559 = i2557[7]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 4) {
    i2558.push( UnityEngine.Rect.MinMaxRect(i2559[i + 0], i2559[i + 1], i2559[i + 2], i2559[i + 3]) );
  }
  i2556.rects = i2558
  i2556.wrapU = i2557[8]
  i2556.wrapV = i2557[9]
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2563 = data
  i2562.name = i2563[0]
  i2562.index = i2563[1]
  i2562.startup = !!i2563[2]
  return i2562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2565 = data
  i2564.aspect = i2565[0]
  i2564.orthographic = !!i2565[1]
  i2564.orthographicSize = i2565[2]
  i2564.backgroundColor = new pc.Color(i2565[3], i2565[4], i2565[5], i2565[6])
  i2564.nearClipPlane = i2565[7]
  i2564.farClipPlane = i2565[8]
  i2564.fieldOfView = i2565[9]
  i2564.depth = i2565[10]
  i2564.clearFlags = i2565[11]
  i2564.cullingMask = i2565[12]
  i2564.rect = i2565[13]
  request.r(i2565[14], i2565[15], 0, i2564, 'targetTexture')
  i2564.usePhysicalProperties = !!i2565[16]
  i2564.focalLength = i2565[17]
  i2564.sensorSize = new pc.Vec2( i2565[18], i2565[19] )
  i2564.lensShift = new pc.Vec2( i2565[20], i2565[21] )
  i2564.gateFit = i2565[22]
  i2564.commandBufferCount = i2565[23]
  i2564.cameraType = i2565[24]
  i2564.enabled = !!i2565[25]
  return i2564
}

Deserializers["CameraController"] = function (request, data, root) {
  var i2566 = root || request.c( 'CameraController' )
  var i2567 = data
  request.r(i2567[0], i2567[1], 0, i2566, 'cam')
  i2566.defaultPosition = new pc.Vec3( i2567[2], i2567[3], i2567[4] )
  i2566.defaultSize = i2567[5]
  i2566.defaultFOV = i2567[6]
  i2566.defaultDuration = i2567[7]
  i2566.defaultEase = i2567[8]
  return i2566
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i2568 = root || request.c( 'MusicSource' )
  var i2569 = data
  request.r(i2569[0], i2569[1], 0, i2568, 'source')
  return i2568
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i2570 = root || request.c( 'UI_Manager' )
  var i2571 = data
  i2570.levelCompleted = !!i2571[0]
  i2570.isPauseActive = !!i2571[1]
  i2570.loadIndex = i2571[2]
  request.r(i2571[3], i2571[4], 0, i2570, 'removeAdsButton')
  request.r(i2571[5], i2571[6], 0, i2570, 'pauseButton')
  request.r(i2571[7], i2571[8], 0, i2570, 'Fade_Img')
  request.r(i2571[9], i2571[10], 0, i2570, 'TopBarAnim')
  request.r(i2571[11], i2571[12], 0, i2570, 'MainPanel')
  request.r(i2571[13], i2571[14], 0, i2570, 'PausePanel')
  request.r(i2571[15], i2571[16], 0, i2570, 'PausePopUp')
  request.r(i2571[17], i2571[18], 0, i2570, 'PauseCanvasGroup')
  request.r(i2571[19], i2571[20], 0, i2570, 'RateUsPanel')
  request.r(i2571[21], i2571[22], 0, i2570, 'RateUsPopUp')
  request.r(i2571[23], i2571[24], 0, i2570, 'RemoveAdsPanel')
  request.r(i2571[25], i2571[26], 0, i2570, 'RemoveAdsPopUp')
  request.r(i2571[27], i2571[28], 0, i2570, 'RemoveAdsCanvasGroup')
  var i2573 = i2571[29]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 2) {
  request.r(i2573[i + 0], i2573[i + 1], 2, i2572, '')
  }
  i2570.RemoveAdsAnims = i2572
  request.r(i2571[30], i2571[31], 0, i2570, 'CompletePanel')
  request.r(i2571[32], i2571[33], 0, i2570, 'LevelIcon')
  request.r(i2571[34], i2571[35], 0, i2570, 'CompleteParticles')
  request.r(i2571[36], i2571[37], 0, i2570, 'progressBar')
  request.r(i2571[38], i2571[39], 0, i2570, 'progressText')
  request.r(i2571[40], i2571[41], 0, i2570, 'toolIcon1')
  request.r(i2571[42], i2571[43], 0, i2570, 'toolIcon2')
  request.r(i2571[44], i2571[45], 0, i2570, 'toolIcon3')
  request.r(i2571[46], i2571[47], 0, i2570, 'toolIcon4')
  request.r(i2571[48], i2571[49], 0, i2570, 'target1')
  request.r(i2571[50], i2571[51], 0, i2570, 'target2')
  i2570.toolMoveDuration = i2571[52]
  i2570.currentIndex = i2571[53]
  var i2575 = i2571[54]
  var i2574 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2575.length; i += 2) {
  request.r(i2575[i + 0], i2575[i + 1], 1, i2574, '')
  }
  i2570.allTools = i2574
  request.r(i2571[55], i2571[56], 0, i2570, 'clockProgress')
  request.r(i2571[57], i2571[58], 0, i2570, 'clockProgressFill')
  request.r(i2571[59], i2571[60], 0, i2570, 'clockAudio')
  i2570.moveDistance = i2571[61]
  i2570.animationDuration = i2571[62]
  i2570.greyBgChildName = i2571[63]
  i2570.pushOffset = i2571[64]
  return i2570
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i2576 = root || request.c( 'GameManagerPlayable' )
  var i2577 = data
  request.r(i2577[0], i2577[1], 0, i2576, 'endParticles')
  request.r(i2577[2], i2577[3], 0, i2576, 'stepCompleteParticles')
  request.r(i2577[4], i2577[5], 0, i2576, 'DefaultMat')
  request.r(i2577[6], i2577[7], 0, i2576, 'BG_Music')
  request.r(i2577[8], i2577[9], 0, i2576, 'restoreEffectShader')
  request.r(i2577[10], i2577[11], 0, i2576, 'stickerEffectShader')
  i2576.isComplete = !!i2577[12]
  i2576.isPaused = !!i2577[13]
  request.r(i2577[14], i2577[15], 0, i2576, 'currentLevel')
  i2576.startLevelOnPlay = !!i2577[16]
  i2576.currentLevelNo = i2577[17]
  return i2576
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2578 = root || request.c( 'AudioController' )
  var i2579 = data
  request.r(i2579[0], i2579[1], 0, i2578, 'MainMixer')
  request.r(i2579[2], i2579[3], 0, i2578, 'UiClick')
  request.r(i2579[4], i2579[5], 0, i2578, 'UiClickSource')
  var i2581 = i2579[6]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 2) {
  request.r(i2581[i + 0], i2581[i + 1], 2, i2580, '')
  }
  i2578.SfxSources = i2580
  var i2583 = i2579[7]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 2) {
  request.r(i2583[i + 0], i2583[i + 1], 2, i2582, '')
  }
  i2578.AllClips = i2582
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2587 = data
  i2586.pivot = new pc.Vec2( i2587[0], i2587[1] )
  i2586.anchorMin = new pc.Vec2( i2587[2], i2587[3] )
  i2586.anchorMax = new pc.Vec2( i2587[4], i2587[5] )
  i2586.sizeDelta = new pc.Vec2( i2587[6], i2587[7] )
  i2586.anchoredPosition3D = new pc.Vec3( i2587[8], i2587[9], i2587[10] )
  i2586.rotation = new pc.Quat(i2587[11], i2587[12], i2587[13], i2587[14])
  i2586.scale = new pc.Vec3( i2587[15], i2587[16], i2587[17] )
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2589 = data
  i2588.planeDistance = i2589[0]
  i2588.referencePixelsPerUnit = i2589[1]
  i2588.isFallbackOverlay = !!i2589[2]
  i2588.renderMode = i2589[3]
  i2588.renderOrder = i2589[4]
  i2588.sortingLayerName = i2589[5]
  i2588.sortingOrder = i2589[6]
  i2588.scaleFactor = i2589[7]
  request.r(i2589[8], i2589[9], 0, i2588, 'worldCamera')
  i2588.overrideSorting = !!i2589[10]
  i2588.pixelPerfect = !!i2589[11]
  i2588.targetDisplay = i2589[12]
  i2588.overridePixelPerfect = !!i2589[13]
  i2588.enabled = !!i2589[14]
  return i2588
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2590 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2591 = data
  i2590.m_UiScaleMode = i2591[0]
  i2590.m_ReferencePixelsPerUnit = i2591[1]
  i2590.m_ScaleFactor = i2591[2]
  i2590.m_ReferenceResolution = new pc.Vec2( i2591[3], i2591[4] )
  i2590.m_ScreenMatchMode = i2591[5]
  i2590.m_MatchWidthOrHeight = i2591[6]
  i2590.m_PhysicalUnit = i2591[7]
  i2590.m_FallbackScreenDPI = i2591[8]
  i2590.m_DefaultSpriteDPI = i2591[9]
  i2590.m_DynamicPixelsPerUnit = i2591[10]
  i2590.m_PresetInfoIsWorld = !!i2591[11]
  return i2590
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2592 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2593 = data
  i2592.m_IgnoreReversedGraphics = !!i2593[0]
  i2592.m_BlockingObjects = i2593[1]
  i2592.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2593[2] )
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2595 = data
  i2594.cullTransparentMesh = !!i2595[0]
  return i2594
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2596 = root || request.c( 'UnityEngine.UI.Image' )
  var i2597 = data
  request.r(i2597[0], i2597[1], 0, i2596, 'm_Sprite')
  i2596.m_Type = i2597[2]
  i2596.m_PreserveAspect = !!i2597[3]
  i2596.m_FillCenter = !!i2597[4]
  i2596.m_FillMethod = i2597[5]
  i2596.m_FillAmount = i2597[6]
  i2596.m_FillClockwise = !!i2597[7]
  i2596.m_FillOrigin = i2597[8]
  i2596.m_UseSpriteMesh = !!i2597[9]
  i2596.m_PixelsPerUnitMultiplier = i2597[10]
  request.r(i2597[11], i2597[12], 0, i2596, 'm_Material')
  i2596.m_Maskable = !!i2597[13]
  i2596.m_Color = new pc.Color(i2597[14], i2597[15], i2597[16], i2597[17])
  i2596.m_RaycastTarget = !!i2597[18]
  i2596.m_RaycastPadding = new pc.Vec4( i2597[19], i2597[20], i2597[21], i2597[22] )
  return i2596
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2598 = root || request.c( 'UnityEngine.UI.Text' )
  var i2599 = data
  i2598.m_FontData = request.d('UnityEngine.UI.FontData', i2599[0], i2598.m_FontData)
  i2598.m_Text = i2599[1]
  request.r(i2599[2], i2599[3], 0, i2598, 'm_Material')
  i2598.m_Maskable = !!i2599[4]
  i2598.m_Color = new pc.Color(i2599[5], i2599[6], i2599[7], i2599[8])
  i2598.m_RaycastTarget = !!i2599[9]
  i2598.m_RaycastPadding = new pc.Vec4( i2599[10], i2599[11], i2599[12], i2599[13] )
  return i2598
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2600 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2601 = data
  request.r(i2601[0], i2601[1], 0, i2600, 'm_Font')
  i2600.m_FontSize = i2601[2]
  i2600.m_FontStyle = i2601[3]
  i2600.m_BestFit = !!i2601[4]
  i2600.m_MinSize = i2601[5]
  i2600.m_MaxSize = i2601[6]
  i2600.m_Alignment = i2601[7]
  i2600.m_AlignByGeometry = !!i2601[8]
  i2600.m_RichText = !!i2601[9]
  i2600.m_HorizontalOverflow = i2601[10]
  i2600.m_VerticalOverflow = i2601[11]
  i2600.m_LineSpacing = i2601[12]
  return i2600
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2602 = root || request.c( 'UnityEngine.UI.Button' )
  var i2603 = data
  i2602.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2603[0], i2602.m_OnClick)
  i2602.m_Navigation = request.d('UnityEngine.UI.Navigation', i2603[1], i2602.m_Navigation)
  i2602.m_Transition = i2603[2]
  i2602.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2603[3], i2602.m_Colors)
  i2602.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2603[4], i2602.m_SpriteState)
  i2602.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2603[5], i2602.m_AnimationTriggers)
  i2602.m_Interactable = !!i2603[6]
  request.r(i2603[7], i2603[8], 0, i2602, 'm_TargetGraphic')
  return i2602
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2604 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2605 = data
  i2604.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2605[0], i2604.m_PersistentCalls)
  return i2604
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2606 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2607 = data
  i2606.m_Mode = i2607[0]
  i2606.m_WrapAround = !!i2607[1]
  request.r(i2607[2], i2607[3], 0, i2606, 'm_SelectOnUp')
  request.r(i2607[4], i2607[5], 0, i2606, 'm_SelectOnDown')
  request.r(i2607[6], i2607[7], 0, i2606, 'm_SelectOnLeft')
  request.r(i2607[8], i2607[9], 0, i2606, 'm_SelectOnRight')
  return i2606
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2608 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2609 = data
  i2608.m_NormalColor = new pc.Color(i2609[0], i2609[1], i2609[2], i2609[3])
  i2608.m_HighlightedColor = new pc.Color(i2609[4], i2609[5], i2609[6], i2609[7])
  i2608.m_PressedColor = new pc.Color(i2609[8], i2609[9], i2609[10], i2609[11])
  i2608.m_SelectedColor = new pc.Color(i2609[12], i2609[13], i2609[14], i2609[15])
  i2608.m_DisabledColor = new pc.Color(i2609[16], i2609[17], i2609[18], i2609[19])
  i2608.m_ColorMultiplier = i2609[20]
  i2608.m_FadeDuration = i2609[21]
  return i2608
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2610 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2611 = data
  request.r(i2611[0], i2611[1], 0, i2610, 'm_HighlightedSprite')
  request.r(i2611[2], i2611[3], 0, i2610, 'm_PressedSprite')
  request.r(i2611[4], i2611[5], 0, i2610, 'm_SelectedSprite')
  request.r(i2611[6], i2611[7], 0, i2610, 'm_DisabledSprite')
  return i2610
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2612 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2613 = data
  i2612.m_NormalTrigger = i2613[0]
  i2612.m_HighlightedTrigger = i2613[1]
  i2612.m_PressedTrigger = i2613[2]
  i2612.m_SelectedTrigger = i2613[3]
  i2612.m_DisabledTrigger = i2613[4]
  return i2612
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i2614 = root || request.c( 'PlayableHudRuntime' )
  var i2615 = data
  return i2614
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2616 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2617 = data
  request.r(i2617[0], i2617[1], 0, i2616, 'm_FirstSelected')
  i2616.m_sendNavigationEvents = !!i2617[2]
  i2616.m_DragThreshold = i2617[3]
  return i2616
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2618 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2619 = data
  i2618.m_HorizontalAxis = i2619[0]
  i2618.m_VerticalAxis = i2619[1]
  i2618.m_SubmitButton = i2619[2]
  i2618.m_CancelButton = i2619[3]
  i2618.m_InputActionsPerSecond = i2619[4]
  i2618.m_RepeatDelay = i2619[5]
  i2618.m_ForceModuleActive = !!i2619[6]
  i2618.m_SendPointerHoverToParent = !!i2619[7]
  return i2618
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i2620 = root || request.c( 'PlayableRouter' )
  var i2621 = data
  var i2623 = i2621[0]
  var i2622 = []
  for(var i = 0; i < i2623.length; i += 2) {
  request.r(i2623[i + 0], i2623[i + 1], 2, i2622, '')
  }
  i2620.menuObjects = i2622
  var i2625 = i2621[1]
  var i2624 = []
  for(var i = 0; i < i2625.length; i += 2) {
  request.r(i2625[i + 0], i2625[i + 1], 2, i2624, '')
  }
  i2620.gameplayObjects = i2624
  var i2627 = i2621[2]
  var i2626 = []
  for(var i = 0; i < i2627.length; i += 1) {
    i2626.push( request.d('PlayableRouter+SubLevelSlot', i2627[i + 0]) );
  }
  i2620.subLevels = i2626
  i2620.fadeDuration = i2621[3]
  i2620.onMenuClosing = request.d('UnityEngine.Events.UnityEvent', i2621[4], i2620.onMenuClosing)
  i2620.lockedMessage = i2621[5]
  i2620.lockedTapsToCTA = i2621[6]
  return i2620
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i2630 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i2631 = data
  request.r(i2631[0], i2631[1], 0, i2630, 'button')
  request.r(i2631[2], i2631[3], 0, i2630, 'level')
  return i2630
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i2632 = root || request.c( 'ToastManager' )
  var i2633 = data
  request.r(i2633[0], i2633[1], 0, i2632, 'toastPanel')
  request.r(i2633[2], i2633[3], 0, i2632, 'toastPopup')
  request.r(i2633[4], i2633[5], 0, i2632, 'canvasGroup')
  request.r(i2633[6], i2633[7], 0, i2632, 'toastText')
  i2632.startY = i2633[8]
  i2632.visibleY = i2633[9]
  i2632.endY = i2633[10]
  i2632.animationTime = i2633[11]
  i2632.animationTimeUp = i2633[12]
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2635 = data
  i2634.m_Alpha = i2635[0]
  i2634.m_Interactable = !!i2635[1]
  i2634.m_BlocksRaycasts = !!i2635[2]
  i2634.m_IgnoreParentGroups = !!i2635[3]
  i2634.enabled = !!i2635[4]
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2637 = data
  i2636.ambientIntensity = i2637[0]
  i2636.reflectionIntensity = i2637[1]
  i2636.ambientMode = i2637[2]
  i2636.ambientLight = new pc.Color(i2637[3], i2637[4], i2637[5], i2637[6])
  i2636.ambientSkyColor = new pc.Color(i2637[7], i2637[8], i2637[9], i2637[10])
  i2636.ambientGroundColor = new pc.Color(i2637[11], i2637[12], i2637[13], i2637[14])
  i2636.ambientEquatorColor = new pc.Color(i2637[15], i2637[16], i2637[17], i2637[18])
  i2636.fogColor = new pc.Color(i2637[19], i2637[20], i2637[21], i2637[22])
  i2636.fogEndDistance = i2637[23]
  i2636.fogStartDistance = i2637[24]
  i2636.fogDensity = i2637[25]
  i2636.fog = !!i2637[26]
  request.r(i2637[27], i2637[28], 0, i2636, 'skybox')
  i2636.fogMode = i2637[29]
  var i2639 = i2637[30]
  var i2638 = []
  for(var i = 0; i < i2639.length; i += 1) {
    i2638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2639[i + 0]) );
  }
  i2636.lightmaps = i2638
  i2636.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2637[31], i2636.lightProbes)
  i2636.lightmapsMode = i2637[32]
  i2636.mixedBakeMode = i2637[33]
  i2636.environmentLightingMode = i2637[34]
  i2636.ambientProbe = new pc.SphericalHarmonicsL2(i2637[35])
  request.r(i2637[36], i2637[37], 0, i2636, 'customReflection')
  request.r(i2637[38], i2637[39], 0, i2636, 'defaultReflection')
  i2636.defaultReflectionMode = i2637[40]
  i2636.defaultReflectionResolution = i2637[41]
  i2636.sunLightObjectId = i2637[42]
  i2636.pixelLightCount = i2637[43]
  i2636.defaultReflectionHDR = !!i2637[44]
  i2636.hasLightDataAsset = !!i2637[45]
  i2636.hasManualGenerate = !!i2637[46]
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2643 = data
  request.r(i2643[0], i2643[1], 0, i2642, 'lightmapColor')
  request.r(i2643[2], i2643[3], 0, i2642, 'lightmapDirection')
  request.r(i2643[4], i2643[5], 0, i2642, 'shadowMask')
  return i2642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2644 = root || new UnityEngine.LightProbes()
  var i2645 = data
  return i2644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2651 = data
  var i2653 = i2651[0]
  var i2652 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2653.length; i += 1) {
    i2652.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2653[i + 0]));
  }
  i2650.ShaderCompilationErrors = i2652
  i2650.name = i2651[1]
  i2650.guid = i2651[2]
  var i2655 = i2651[3]
  var i2654 = []
  for(var i = 0; i < i2655.length; i += 1) {
    i2654.push( i2655[i + 0] );
  }
  i2650.shaderDefinedKeywords = i2654
  var i2657 = i2651[4]
  var i2656 = []
  for(var i = 0; i < i2657.length; i += 1) {
    i2656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2657[i + 0]) );
  }
  i2650.passes = i2656
  var i2659 = i2651[5]
  var i2658 = []
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2659[i + 0]) );
  }
  i2650.usePasses = i2658
  var i2661 = i2651[6]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2661[i + 0]) );
  }
  i2650.defaultParameterValues = i2660
  request.r(i2651[7], i2651[8], 0, i2650, 'unityFallbackShader')
  i2650.readDepth = !!i2651[9]
  i2650.hasDepthOnlyPass = !!i2651[10]
  i2650.isCreatedByShaderGraph = !!i2651[11]
  i2650.disableBatching = !!i2651[12]
  i2650.compiled = !!i2651[13]
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2665 = data
  i2664.shaderName = i2665[0]
  i2664.errorMessage = i2665[1]
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2670 = root || new pc.UnityShaderPass()
  var i2671 = data
  i2670.id = i2671[0]
  i2670.subShaderIndex = i2671[1]
  i2670.name = i2671[2]
  i2670.passType = i2671[3]
  i2670.grabPassTextureName = i2671[4]
  i2670.usePass = !!i2671[5]
  i2670.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2671[6], i2670.zTest)
  i2670.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2671[7], i2670.zWrite)
  i2670.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2671[8], i2670.culling)
  i2670.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2671[9], i2670.blending)
  i2670.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2671[10], i2670.alphaBlending)
  i2670.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2671[11], i2670.colorWriteMask)
  i2670.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2671[12], i2670.offsetUnits)
  i2670.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2671[13], i2670.offsetFactor)
  i2670.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2671[14], i2670.stencilRef)
  i2670.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2671[15], i2670.stencilReadMask)
  i2670.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2671[16], i2670.stencilWriteMask)
  i2670.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2671[17], i2670.stencilOp)
  i2670.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2671[18], i2670.stencilOpFront)
  i2670.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2671[19], i2670.stencilOpBack)
  var i2673 = i2671[20]
  var i2672 = []
  for(var i = 0; i < i2673.length; i += 1) {
    i2672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2673[i + 0]) );
  }
  i2670.tags = i2672
  var i2675 = i2671[21]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.push( i2675[i + 0] );
  }
  i2670.passDefinedKeywords = i2674
  var i2677 = i2671[22]
  var i2676 = []
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2677[i + 0]) );
  }
  i2670.passDefinedKeywordGroups = i2676
  var i2679 = i2671[23]
  var i2678 = []
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2679[i + 0]) );
  }
  i2670.variants = i2678
  var i2681 = i2671[24]
  var i2680 = []
  for(var i = 0; i < i2681.length; i += 1) {
    i2680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2681[i + 0]) );
  }
  i2670.excludedVariants = i2680
  i2670.hasDepthReader = !!i2671[25]
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2683 = data
  i2682.val = i2683[0]
  i2682.name = i2683[1]
  return i2682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2685 = data
  i2684.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2685[0], i2684.src)
  i2684.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2685[1], i2684.dst)
  i2684.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2685[2], i2684.op)
  return i2684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2687 = data
  i2686.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2687[0], i2686.pass)
  i2686.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2687[1], i2686.fail)
  i2686.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2687[2], i2686.zFail)
  i2686.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2687[3], i2686.comp)
  return i2686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2691 = data
  i2690.name = i2691[0]
  i2690.value = i2691[1]
  return i2690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2695 = data
  var i2697 = i2695[0]
  var i2696 = []
  for(var i = 0; i < i2697.length; i += 1) {
    i2696.push( i2697[i + 0] );
  }
  i2694.keywords = i2696
  i2694.hasDiscard = !!i2695[1]
  return i2694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2701 = data
  i2700.passId = i2701[0]
  i2700.subShaderIndex = i2701[1]
  var i2703 = i2701[2]
  var i2702 = []
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.push( i2703[i + 0] );
  }
  i2700.keywords = i2702
  i2700.vertexProgram = i2701[3]
  i2700.fragmentProgram = i2701[4]
  i2700.exportedForWebGl2 = !!i2701[5]
  i2700.readDepth = !!i2701[6]
  return i2700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2707 = data
  request.r(i2707[0], i2707[1], 0, i2706, 'shader')
  i2706.pass = i2707[2]
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2711 = data
  i2710.name = i2711[0]
  i2710.type = i2711[1]
  i2710.value = new pc.Vec4( i2711[2], i2711[3], i2711[4], i2711[5] )
  i2710.textureValue = i2711[6]
  i2710.shaderPropertyFlag = i2711[7]
  return i2710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2713 = data
  i2712.name = i2713[0]
  request.r(i2713[1], i2713[2], 0, i2712, 'texture')
  i2712.aabb = i2713[3]
  i2712.vertices = i2713[4]
  i2712.triangles = i2713[5]
  i2712.textureRect = UnityEngine.Rect.MinMaxRect(i2713[6], i2713[7], i2713[8], i2713[9])
  i2712.packedRect = UnityEngine.Rect.MinMaxRect(i2713[10], i2713[11], i2713[12], i2713[13])
  i2712.border = new pc.Vec4( i2713[14], i2713[15], i2713[16], i2713[17] )
  i2712.transparency = i2713[18]
  i2712.bounds = i2713[19]
  i2712.pixelsPerUnit = i2713[20]
  i2712.textureWidth = i2713[21]
  i2712.textureHeight = i2713[22]
  i2712.nativeSize = new pc.Vec2( i2713[23], i2713[24] )
  i2712.pivot = new pc.Vec2( i2713[25], i2713[26] )
  i2712.textureRectOffset = new pc.Vec2( i2713[27], i2713[28] )
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2715 = data
  i2714.name = i2715[0]
  return i2714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2717 = data
  i2716.name = i2717[0]
  i2716.wrapMode = i2717[1]
  i2716.isLooping = !!i2717[2]
  i2716.length = i2717[3]
  var i2719 = i2717[4]
  var i2718 = []
  for(var i = 0; i < i2719.length; i += 1) {
    i2718.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2719[i + 0]) );
  }
  i2716.curves = i2718
  var i2721 = i2717[5]
  var i2720 = []
  for(var i = 0; i < i2721.length; i += 1) {
    i2720.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2721[i + 0]) );
  }
  i2716.events = i2720
  i2716.halfPrecision = !!i2717[6]
  i2716._frameRate = i2717[7]
  i2716.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2717[8], i2716.localBounds)
  i2716.hasMuscleCurves = !!i2717[9]
  var i2723 = i2717[10]
  var i2722 = []
  for(var i = 0; i < i2723.length; i += 1) {
    i2722.push( i2723[i + 0] );
  }
  i2716.clipMuscleConstant = i2722
  i2716.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2717[11], i2716.clipBindingConstant)
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2727 = data
  i2726.path = i2727[0]
  i2726.hash = i2727[1]
  i2726.componentType = i2727[2]
  i2726.property = i2727[3]
  i2726.keys = i2727[4]
  var i2729 = i2727[5]
  var i2728 = []
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2729[i + 0]) );
  }
  i2726.objectReferenceKeys = i2728
  return i2726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2733 = data
  i2732.time = i2733[0]
  request.r(i2733[1], i2733[2], 0, i2732, 'value')
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2737 = data
  i2736.functionName = i2737[0]
  i2736.floatParameter = i2737[1]
  i2736.intParameter = i2737[2]
  i2736.stringParameter = i2737[3]
  request.r(i2737[4], i2737[5], 0, i2736, 'objectReferenceParameter')
  i2736.time = i2737[6]
  return i2736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2739 = data
  i2738.center = new pc.Vec3( i2739[0], i2739[1], i2739[2] )
  i2738.extends = new pc.Vec3( i2739[3], i2739[4], i2739[5] )
  return i2738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2743 = data
  var i2745 = i2743[0]
  var i2744 = []
  for(var i = 0; i < i2745.length; i += 1) {
    i2744.push( i2745[i + 0] );
  }
  i2742.genericBindings = i2744
  var i2747 = i2743[1]
  var i2746 = []
  for(var i = 0; i < i2747.length; i += 1) {
    i2746.push( i2747[i + 0] );
  }
  i2742.pptrCurveMapping = i2746
  return i2742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2749 = data
  i2748.name = i2749[0]
  i2748.ascent = i2749[1]
  i2748.originalLineHeight = i2749[2]
  i2748.fontSize = i2749[3]
  var i2751 = i2749[4]
  var i2750 = []
  for(var i = 0; i < i2751.length; i += 1) {
    i2750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2751[i + 0]) );
  }
  i2748.characterInfo = i2750
  request.r(i2749[5], i2749[6], 0, i2748, 'texture')
  i2748.originalFontSize = i2749[7]
  return i2748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2755 = data
  i2754.index = i2755[0]
  i2754.advance = i2755[1]
  i2754.bearing = i2755[2]
  i2754.glyphWidth = i2755[3]
  i2754.glyphHeight = i2755[4]
  i2754.minX = i2755[5]
  i2754.maxX = i2755[6]
  i2754.minY = i2755[7]
  i2754.maxY = i2755[8]
  i2754.uvBottomLeftX = i2755[9]
  i2754.uvBottomLeftY = i2755[10]
  i2754.uvBottomRightX = i2755[11]
  i2754.uvBottomRightY = i2755[12]
  i2754.uvTopLeftX = i2755[13]
  i2754.uvTopLeftY = i2755[14]
  i2754.uvTopRightX = i2755[15]
  i2754.uvTopRightY = i2755[16]
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2757 = data
  i2756.name = i2757[0]
  var i2759 = i2757[1]
  var i2758 = []
  for(var i = 0; i < i2759.length; i += 1) {
    i2758.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2759[i + 0]) );
  }
  i2756.layers = i2758
  var i2761 = i2757[2]
  var i2760 = []
  for(var i = 0; i < i2761.length; i += 1) {
    i2760.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2761[i + 0]) );
  }
  i2756.parameters = i2760
  i2756.animationClips = i2757[3]
  i2756.avatarUnsupported = i2757[4]
  return i2756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2765 = data
  i2764.name = i2765[0]
  i2764.defaultWeight = i2765[1]
  i2764.blendingMode = i2765[2]
  i2764.avatarMask = i2765[3]
  i2764.syncedLayerIndex = i2765[4]
  i2764.syncedLayerAffectsTiming = !!i2765[5]
  i2764.syncedLayers = i2765[6]
  i2764.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2765[7], i2764.stateMachine)
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2767 = data
  i2766.id = i2767[0]
  i2766.name = i2767[1]
  i2766.path = i2767[2]
  var i2769 = i2767[3]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2769[i + 0]) );
  }
  i2766.states = i2768
  var i2771 = i2767[4]
  var i2770 = []
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2771[i + 0]) );
  }
  i2766.machines = i2770
  var i2773 = i2767[5]
  var i2772 = []
  for(var i = 0; i < i2773.length; i += 1) {
    i2772.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2773[i + 0]) );
  }
  i2766.entryStateTransitions = i2772
  var i2775 = i2767[6]
  var i2774 = []
  for(var i = 0; i < i2775.length; i += 1) {
    i2774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2775[i + 0]) );
  }
  i2766.exitStateTransitions = i2774
  var i2777 = i2767[7]
  var i2776 = []
  for(var i = 0; i < i2777.length; i += 1) {
    i2776.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2777[i + 0]) );
  }
  i2766.anyStateTransitions = i2776
  i2766.defaultStateId = i2767[8]
  return i2766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2781 = data
  i2780.id = i2781[0]
  i2780.name = i2781[1]
  i2780.cycleOffset = i2781[2]
  i2780.cycleOffsetParameter = i2781[3]
  i2780.cycleOffsetParameterActive = !!i2781[4]
  i2780.mirror = !!i2781[5]
  i2780.mirrorParameter = i2781[6]
  i2780.mirrorParameterActive = !!i2781[7]
  i2780.motionId = i2781[8]
  i2780.nameHash = i2781[9]
  i2780.fullPathHash = i2781[10]
  i2780.speed = i2781[11]
  i2780.speedParameter = i2781[12]
  i2780.speedParameterActive = !!i2781[13]
  i2780.tag = i2781[14]
  i2780.tagHash = i2781[15]
  i2780.writeDefaultValues = !!i2781[16]
  var i2783 = i2781[17]
  var i2782 = []
  for(var i = 0; i < i2783.length; i += 2) {
  request.r(i2783[i + 0], i2783[i + 1], 2, i2782, '')
  }
  i2780.behaviours = i2782
  var i2785 = i2781[18]
  var i2784 = []
  for(var i = 0; i < i2785.length; i += 1) {
    i2784.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2785[i + 0]) );
  }
  i2780.transitions = i2784
  return i2780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2791 = data
  i2790.fullPath = i2791[0]
  i2790.canTransitionToSelf = !!i2791[1]
  i2790.duration = i2791[2]
  i2790.exitTime = i2791[3]
  i2790.hasExitTime = !!i2791[4]
  i2790.hasFixedDuration = !!i2791[5]
  i2790.interruptionSource = i2791[6]
  i2790.offset = i2791[7]
  i2790.orderedInterruption = !!i2791[8]
  i2790.destinationStateId = i2791[9]
  i2790.isExit = !!i2791[10]
  i2790.mute = !!i2791[11]
  i2790.solo = !!i2791[12]
  var i2793 = i2791[13]
  var i2792 = []
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2793[i + 0]) );
  }
  i2790.conditions = i2792
  return i2790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2799 = data
  i2798.destinationStateId = i2799[0]
  i2798.isExit = !!i2799[1]
  i2798.mute = !!i2799[2]
  i2798.solo = !!i2799[3]
  var i2801 = i2799[4]
  var i2800 = []
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2801[i + 0]) );
  }
  i2798.conditions = i2800
  return i2798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2805 = data
  i2804.mode = i2805[0]
  i2804.parameter = i2805[1]
  i2804.threshold = i2805[2]
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2809 = data
  i2808.defaultBool = !!i2809[0]
  i2808.defaultFloat = i2809[1]
  i2808.defaultInt = i2809[2]
  i2808.name = i2809[3]
  i2808.nameHash = i2809[4]
  i2808.type = i2809[5]
  return i2808
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2810 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2811 = data
  i2810.useSafeMode = !!i2811[0]
  i2810.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2811[1], i2810.safeModeOptions)
  i2810.timeScale = i2811[2]
  i2810.unscaledTimeScale = i2811[3]
  i2810.useSmoothDeltaTime = !!i2811[4]
  i2810.maxSmoothUnscaledTime = i2811[5]
  i2810.rewindCallbackMode = i2811[6]
  i2810.showUnityEditorReport = !!i2811[7]
  i2810.logBehaviour = i2811[8]
  i2810.drawGizmos = !!i2811[9]
  i2810.defaultRecyclable = !!i2811[10]
  i2810.defaultAutoPlay = i2811[11]
  i2810.defaultUpdateType = i2811[12]
  i2810.defaultTimeScaleIndependent = !!i2811[13]
  i2810.defaultEaseType = i2811[14]
  i2810.defaultEaseOvershootOrAmplitude = i2811[15]
  i2810.defaultEasePeriod = i2811[16]
  i2810.defaultAutoKill = !!i2811[17]
  i2810.defaultLoopType = i2811[18]
  i2810.debugMode = !!i2811[19]
  i2810.debugStoreTargetId = !!i2811[20]
  i2810.showPreviewPanel = !!i2811[21]
  i2810.storeSettingsLocation = i2811[22]
  i2810.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2811[23], i2810.modules)
  i2810.createASMDEF = !!i2811[24]
  i2810.showPlayingTweens = !!i2811[25]
  i2810.showPausedTweens = !!i2811[26]
  return i2810
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2812 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2813 = data
  i2812.logBehaviour = i2813[0]
  i2812.nestedTweenFailureBehaviour = i2813[1]
  return i2812
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2814 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2815 = data
  i2814.showPanel = !!i2815[0]
  i2814.audioEnabled = !!i2815[1]
  i2814.physicsEnabled = !!i2815[2]
  i2814.physics2DEnabled = !!i2815[3]
  i2814.spriteEnabled = !!i2815[4]
  i2814.uiEnabled = !!i2815[5]
  i2814.textMeshProEnabled = !!i2815[6]
  i2814.tk2DEnabled = !!i2815[7]
  i2814.deAudioEnabled = !!i2815[8]
  i2814.deUnityExtendedEnabled = !!i2815[9]
  i2814.epoOutlineEnabled = !!i2815[10]
  return i2814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2817 = data
  var i2819 = i2817[0]
  var i2818 = []
  for(var i = 0; i < i2819.length; i += 1) {
    i2818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2819[i + 0]) );
  }
  i2816.files = i2818
  i2816.componentToPrefabIds = i2817[1]
  return i2816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2823 = data
  i2822.path = i2823[0]
  request.r(i2823[1], i2823[2], 0, i2822, 'unityObject')
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2825 = data
  var i2827 = i2825[0]
  var i2826 = []
  for(var i = 0; i < i2827.length; i += 1) {
    i2826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2827[i + 0]) );
  }
  i2824.scriptsExecutionOrder = i2826
  var i2829 = i2825[1]
  var i2828 = []
  for(var i = 0; i < i2829.length; i += 1) {
    i2828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2829[i + 0]) );
  }
  i2824.sortingLayers = i2828
  var i2831 = i2825[2]
  var i2830 = []
  for(var i = 0; i < i2831.length; i += 1) {
    i2830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2831[i + 0]) );
  }
  i2824.cullingLayers = i2830
  i2824.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2825[3], i2824.timeSettings)
  i2824.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2825[4], i2824.physicsSettings)
  i2824.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2825[5], i2824.physics2DSettings)
  i2824.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2825[6], i2824.qualitySettings)
  i2824.enableRealtimeShadows = !!i2825[7]
  i2824.enableAutoInstancing = !!i2825[8]
  i2824.enableStaticBatching = !!i2825[9]
  i2824.enableDynamicBatching = !!i2825[10]
  i2824.usePreservativeDynamicBatching = !!i2825[11]
  i2824.lightmapEncodingQuality = i2825[12]
  i2824.desiredColorSpace = i2825[13]
  var i2833 = i2825[14]
  var i2832 = []
  for(var i = 0; i < i2833.length; i += 1) {
    i2832.push( i2833[i + 0] );
  }
  i2824.allTags = i2832
  return i2824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2837 = data
  i2836.name = i2837[0]
  i2836.value = i2837[1]
  return i2836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2841 = data
  i2840.id = i2841[0]
  i2840.name = i2841[1]
  i2840.value = i2841[2]
  return i2840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2845 = data
  i2844.id = i2845[0]
  i2844.name = i2845[1]
  return i2844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2847 = data
  i2846.fixedDeltaTime = i2847[0]
  i2846.maximumDeltaTime = i2847[1]
  i2846.timeScale = i2847[2]
  i2846.maximumParticleTimestep = i2847[3]
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2849 = data
  i2848.gravity = new pc.Vec3( i2849[0], i2849[1], i2849[2] )
  i2848.defaultSolverIterations = i2849[3]
  i2848.bounceThreshold = i2849[4]
  i2848.autoSyncTransforms = !!i2849[5]
  i2848.autoSimulation = !!i2849[6]
  var i2851 = i2849[7]
  var i2850 = []
  for(var i = 0; i < i2851.length; i += 1) {
    i2850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2851[i + 0]) );
  }
  i2848.collisionMatrix = i2850
  return i2848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2855 = data
  i2854.enabled = !!i2855[0]
  i2854.layerId = i2855[1]
  i2854.otherLayerId = i2855[2]
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2857 = data
  request.r(i2857[0], i2857[1], 0, i2856, 'material')
  i2856.gravity = new pc.Vec2( i2857[2], i2857[3] )
  i2856.positionIterations = i2857[4]
  i2856.velocityIterations = i2857[5]
  i2856.velocityThreshold = i2857[6]
  i2856.maxLinearCorrection = i2857[7]
  i2856.maxAngularCorrection = i2857[8]
  i2856.maxTranslationSpeed = i2857[9]
  i2856.maxRotationSpeed = i2857[10]
  i2856.baumgarteScale = i2857[11]
  i2856.baumgarteTOIScale = i2857[12]
  i2856.timeToSleep = i2857[13]
  i2856.linearSleepTolerance = i2857[14]
  i2856.angularSleepTolerance = i2857[15]
  i2856.defaultContactOffset = i2857[16]
  i2856.autoSimulation = !!i2857[17]
  i2856.queriesHitTriggers = !!i2857[18]
  i2856.queriesStartInColliders = !!i2857[19]
  i2856.callbacksOnDisable = !!i2857[20]
  i2856.reuseCollisionCallbacks = !!i2857[21]
  i2856.autoSyncTransforms = !!i2857[22]
  var i2859 = i2857[23]
  var i2858 = []
  for(var i = 0; i < i2859.length; i += 1) {
    i2858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2859[i + 0]) );
  }
  i2856.collisionMatrix = i2858
  return i2856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2863 = data
  i2862.enabled = !!i2863[0]
  i2862.layerId = i2863[1]
  i2862.otherLayerId = i2863[2]
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2865 = data
  var i2867 = i2865[0]
  var i2866 = []
  for(var i = 0; i < i2867.length; i += 1) {
    i2866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2867[i + 0]) );
  }
  i2864.qualityLevels = i2866
  var i2869 = i2865[1]
  var i2868 = []
  for(var i = 0; i < i2869.length; i += 1) {
    i2868.push( i2869[i + 0] );
  }
  i2864.names = i2868
  i2864.shadows = i2865[2]
  i2864.anisotropicFiltering = i2865[3]
  i2864.antiAliasing = i2865[4]
  i2864.lodBias = i2865[5]
  i2864.shadowCascades = i2865[6]
  i2864.shadowDistance = i2865[7]
  i2864.shadowmaskMode = i2865[8]
  i2864.shadowProjection = i2865[9]
  i2864.shadowResolution = i2865[10]
  i2864.softParticles = !!i2865[11]
  i2864.softVegetation = !!i2865[12]
  i2864.activeColorSpace = i2865[13]
  i2864.desiredColorSpace = i2865[14]
  i2864.masterTextureLimit = i2865[15]
  i2864.maxQueuedFrames = i2865[16]
  i2864.particleRaycastBudget = i2865[17]
  i2864.pixelLightCount = i2865[18]
  i2864.realtimeReflectionProbes = !!i2865[19]
  i2864.shadowCascade2Split = i2865[20]
  i2864.shadowCascade4Split = new pc.Vec3( i2865[21], i2865[22], i2865[23] )
  i2864.streamingMipmapsActive = !!i2865[24]
  i2864.vSyncCount = i2865[25]
  i2864.asyncUploadBufferSize = i2865[26]
  i2864.asyncUploadTimeSlice = i2865[27]
  i2864.billboardsFaceCameraPosition = !!i2865[28]
  i2864.shadowNearPlaneOffset = i2865[29]
  i2864.streamingMipmapsMemoryBudget = i2865[30]
  i2864.maximumLODLevel = i2865[31]
  i2864.streamingMipmapsAddAllCameras = !!i2865[32]
  i2864.streamingMipmapsMaxLevelReduction = i2865[33]
  i2864.streamingMipmapsRenderersPerFrame = i2865[34]
  i2864.resolutionScalingFixedDPIFactor = i2865[35]
  i2864.streamingMipmapsMaxFileIORequests = i2865[36]
  i2864.currentQualityLevel = i2865[37]
  return i2864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i2872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i2873 = data
  var i2875 = i2873[0]
  var i2874 = []
  for(var i = 0; i < i2875.length; i += 1) {
    i2874.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i2875[i + 0]) );
  }
  i2872.groups = i2874
  var i2877 = i2873[1]
  var i2876 = []
  for(var i = 0; i < i2877.length; i += 1) {
    i2876.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i2877[i + 0]) );
  }
  i2872.snapshots = i2876
  return i2872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i2880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i2881 = data
  i2880.id = i2881[0]
  i2880.childGroupIds = i2881[1]
  i2880.name = i2881[2]
  return i2880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i2884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i2885 = data
  i2884.id = i2885[0]
  var i2887 = i2885[1]
  var i2886 = []
  for(var i = 0; i < i2887.length; i += 1) {
    i2886.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i2887[i + 0]) );
  }
  i2884.parameters = i2886
  return i2884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i2890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i2891 = data
  i2890.name = i2891[0]
  i2890.value = i2891[1]
  return i2890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2895 = data
  i2894.weight = i2895[0]
  i2894.vertices = i2895[1]
  i2894.normals = i2895[2]
  i2894.tangents = i2895[3]
  return i2894
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[97],"98":[64],"99":[100],"101":[100],"102":[100],"103":[100],"104":[100],"105":[100],"106":[100],"107":[48],"108":[48],"109":[48],"110":[48],"111":[48],"112":[48],"113":[48],"114":[48],"115":[48],"116":[48],"117":[48],"118":[48],"119":[48],"120":[64],"121":[122],"123":[124],"125":[124],"75":[69],"126":[31],"127":[9],"36":[33],"128":[9],"129":[130],"131":[130],"40":[14],"58":[33],"132":[9],"29":[9],"133":[69],"134":[69],"78":[75],"70":[79,69],"135":[69],"77":[75],"136":[69],"137":[69],"138":[69],"139":[69],"140":[69],"141":[69],"142":[69],"143":[69],"144":[69],"145":[79,69],"146":[69],"147":[69],"148":[69],"149":[69],"71":[79,69],"150":[69],"151":[83],"152":[83],"84":[83],"153":[83],"154":[64],"155":[64]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level1_Hair_Playable","UnityEngine.SpriteRenderer","BasicDrag","OutlinePulse","UnityEngine.GameObject","BD_CameraFollow","DG.Tweening.DOTweenAnimation","UnityEngine.Sprite","UnityEngine.AudioClip","BD_Progress","BD_ProgressHelper","DraggableBrush","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","BD_AnimationHelper","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.TrailRenderer","UnityEngine.LineRenderer","StaticFixedPipe","UnityEngine.BoxCollider2D","BD_Clamp","BD_ItemPick","BD_Sticky","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.SpriteMask","PlayTweenOnHit","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","InteractableBones","WaypointFollower","UnityEditor.Audio.AudioMixerGroupController","BD_Action","BD_ToolRotate","UnityEngine.Rigidbody2D","BugKill_Tip","ActionOnTap","BD_SpriteChange","BD_AnimatorDrag","PlaceItem","BD_Audio","Level1_HairAnim","BD_TapandHold","TapandHold_Simple","SpriteButton","DestroyObj","MenuLevel","IntroLevelAnim","Level_PoseController","PlayableRouter","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Fold","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "13.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "3Sept2026_Level1_1_CompleteLevel_v2";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1721";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4258";

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

Deserializers.buildID = "84cd26ee-9613-46da-840c-6e7cfb90d0d2";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

