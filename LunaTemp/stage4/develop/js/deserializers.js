var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i11186 = root || request.c( 'UnityEngine.JointSpring' )
  var i11187 = data
  i11186.spring = i11187[0]
  i11186.damper = i11187[1]
  i11186.targetPosition = i11187[2]
  return i11186
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i11188 = root || request.c( 'UnityEngine.JointMotor' )
  var i11189 = data
  i11188.m_TargetVelocity = i11189[0]
  i11188.m_Force = i11189[1]
  i11188.m_FreeSpin = i11189[2]
  return i11188
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i11190 = root || request.c( 'UnityEngine.JointLimits' )
  var i11191 = data
  i11190.m_Min = i11191[0]
  i11190.m_Max = i11191[1]
  i11190.m_Bounciness = i11191[2]
  i11190.m_BounceMinVelocity = i11191[3]
  i11190.m_ContactDistance = i11191[4]
  i11190.minBounce = i11191[5]
  i11190.maxBounce = i11191[6]
  return i11190
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i11192 = root || request.c( 'UnityEngine.JointDrive' )
  var i11193 = data
  i11192.m_PositionSpring = i11193[0]
  i11192.m_PositionDamper = i11193[1]
  i11192.m_MaximumForce = i11193[2]
  i11192.m_UseAcceleration = i11193[3]
  return i11192
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i11194 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i11195 = data
  i11194.m_Spring = i11195[0]
  i11194.m_Damper = i11195[1]
  return i11194
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i11196 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i11197 = data
  i11196.m_Limit = i11197[0]
  i11196.m_Bounciness = i11197[1]
  i11196.m_ContactDistance = i11197[2]
  return i11196
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i11198 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i11199 = data
  i11198.m_ExtremumSlip = i11199[0]
  i11198.m_ExtremumValue = i11199[1]
  i11198.m_AsymptoteSlip = i11199[2]
  i11198.m_AsymptoteValue = i11199[3]
  i11198.m_Stiffness = i11199[4]
  return i11198
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i11200 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i11201 = data
  i11200.m_LowerAngle = i11201[0]
  i11200.m_UpperAngle = i11201[1]
  return i11200
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i11202 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i11203 = data
  i11202.m_MotorSpeed = i11203[0]
  i11202.m_MaximumMotorTorque = i11203[1]
  return i11202
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i11204 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i11205 = data
  i11204.m_DampingRatio = i11205[0]
  i11204.m_Frequency = i11205[1]
  i11204.m_Angle = i11205[2]
  return i11204
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i11206 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i11207 = data
  i11206.m_LowerTranslation = i11207[0]
  i11206.m_UpperTranslation = i11207[1]
  return i11206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i11208 = root || new pc.UnityMaterial()
  var i11209 = data
  i11208.name = i11209[0]
  request.r(i11209[1], i11209[2], 0, i11208, 'shader')
  i11208.renderQueue = i11209[3]
  i11208.enableInstancing = !!i11209[4]
  var i11211 = i11209[5]
  var i11210 = []
  for(var i = 0; i < i11211.length; i += 1) {
    i11210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i11211[i + 0]) );
  }
  i11208.floatParameters = i11210
  var i11213 = i11209[6]
  var i11212 = []
  for(var i = 0; i < i11213.length; i += 1) {
    i11212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i11213[i + 0]) );
  }
  i11208.colorParameters = i11212
  var i11215 = i11209[7]
  var i11214 = []
  for(var i = 0; i < i11215.length; i += 1) {
    i11214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i11215[i + 0]) );
  }
  i11208.vectorParameters = i11214
  var i11217 = i11209[8]
  var i11216 = []
  for(var i = 0; i < i11217.length; i += 1) {
    i11216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i11217[i + 0]) );
  }
  i11208.textureParameters = i11216
  var i11219 = i11209[9]
  var i11218 = []
  for(var i = 0; i < i11219.length; i += 1) {
    i11218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i11219[i + 0]) );
  }
  i11208.materialFlags = i11218
  return i11208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i11222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i11223 = data
  i11222.name = i11223[0]
  i11222.value = i11223[1]
  return i11222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i11226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i11227 = data
  i11226.name = i11227[0]
  i11226.value = new pc.Color(i11227[1], i11227[2], i11227[3], i11227[4])
  return i11226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i11230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i11231 = data
  i11230.name = i11231[0]
  i11230.value = new pc.Vec4( i11231[1], i11231[2], i11231[3], i11231[4] )
  return i11230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i11234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i11235 = data
  i11234.name = i11235[0]
  request.r(i11235[1], i11235[2], 0, i11234, 'value')
  return i11234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i11238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i11239 = data
  i11238.name = i11239[0]
  i11238.enabled = !!i11239[1]
  return i11238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i11240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i11241 = data
  i11240.name = i11241[0]
  i11240.width = i11241[1]
  i11240.height = i11241[2]
  i11240.mipmapCount = i11241[3]
  i11240.anisoLevel = i11241[4]
  i11240.filterMode = i11241[5]
  i11240.hdr = !!i11241[6]
  i11240.format = i11241[7]
  i11240.wrapMode = i11241[8]
  i11240.alphaIsTransparency = !!i11241[9]
  i11240.alphaSource = i11241[10]
  i11240.graphicsFormat = i11241[11]
  i11240.sRGBTexture = !!i11241[12]
  i11240.desiredColorSpace = i11241[13]
  i11240.wrapU = i11241[14]
  i11240.wrapV = i11241[15]
  return i11240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i11242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i11243 = data
  i11242.name = i11243[0]
  i11242.halfPrecision = !!i11243[1]
  i11242.useSimplification = !!i11243[2]
  i11242.useUInt32IndexFormat = !!i11243[3]
  i11242.vertexCount = i11243[4]
  i11242.aabb = i11243[5]
  var i11245 = i11243[6]
  var i11244 = []
  for(var i = 0; i < i11245.length; i += 1) {
    i11244.push( !!i11245[i + 0] );
  }
  i11242.streams = i11244
  i11242.vertices = i11243[7]
  var i11247 = i11243[8]
  var i11246 = []
  for(var i = 0; i < i11247.length; i += 1) {
    i11246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i11247[i + 0]) );
  }
  i11242.subMeshes = i11246
  var i11249 = i11243[9]
  var i11248 = []
  for(var i = 0; i < i11249.length; i += 16) {
    i11248.push( new pc.Mat4().setData(i11249[i + 0], i11249[i + 1], i11249[i + 2], i11249[i + 3],  i11249[i + 4], i11249[i + 5], i11249[i + 6], i11249[i + 7],  i11249[i + 8], i11249[i + 9], i11249[i + 10], i11249[i + 11],  i11249[i + 12], i11249[i + 13], i11249[i + 14], i11249[i + 15]) );
  }
  i11242.bindposes = i11248
  var i11251 = i11243[10]
  var i11250 = []
  for(var i = 0; i < i11251.length; i += 1) {
    i11250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i11251[i + 0]) );
  }
  i11242.blendShapes = i11250
  return i11242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i11256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i11257 = data
  i11256.triangles = i11257[0]
  return i11256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i11262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i11263 = data
  i11262.name = i11263[0]
  var i11265 = i11263[1]
  var i11264 = []
  for(var i = 0; i < i11265.length; i += 1) {
    i11264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i11265[i + 0]) );
  }
  i11262.frames = i11264
  return i11262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i11266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i11267 = data
  i11266.position = new pc.Vec3( i11267[0], i11267[1], i11267[2] )
  i11266.scale = new pc.Vec3( i11267[3], i11267[4], i11267[5] )
  i11266.rotation = new pc.Quat(i11267[6], i11267[7], i11267[8], i11267[9])
  return i11266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i11268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i11269 = data
  i11268.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i11269[0], i11268.main)
  i11268.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i11269[1], i11268.colorBySpeed)
  i11268.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i11269[2], i11268.colorOverLifetime)
  i11268.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i11269[3], i11268.emission)
  i11268.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i11269[4], i11268.rotationBySpeed)
  i11268.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i11269[5], i11268.rotationOverLifetime)
  i11268.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i11269[6], i11268.shape)
  i11268.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i11269[7], i11268.sizeBySpeed)
  i11268.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i11269[8], i11268.sizeOverLifetime)
  i11268.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i11269[9], i11268.textureSheetAnimation)
  i11268.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i11269[10], i11268.velocityOverLifetime)
  i11268.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i11269[11], i11268.noise)
  i11268.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i11269[12], i11268.inheritVelocity)
  i11268.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i11269[13], i11268.forceOverLifetime)
  i11268.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i11269[14], i11268.limitVelocityOverLifetime)
  i11268.useAutoRandomSeed = !!i11269[15]
  i11268.randomSeed = i11269[16]
  return i11268
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i11270 = root || new pc.ParticleSystemMain()
  var i11271 = data
  i11270.duration = i11271[0]
  i11270.loop = !!i11271[1]
  i11270.prewarm = !!i11271[2]
  i11270.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11271[3], i11270.startDelay)
  i11270.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11271[4], i11270.startLifetime)
  i11270.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11271[5], i11270.startSpeed)
  i11270.startSize3D = !!i11271[6]
  i11270.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11271[7], i11270.startSizeX)
  i11270.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11271[8], i11270.startSizeY)
  i11270.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11271[9], i11270.startSizeZ)
  i11270.startRotation3D = !!i11271[10]
  i11270.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11271[11], i11270.startRotationX)
  i11270.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11271[12], i11270.startRotationY)
  i11270.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11271[13], i11270.startRotationZ)
  i11270.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i11271[14], i11270.startColor)
  i11270.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11271[15], i11270.gravityModifier)
  i11270.simulationSpace = i11271[16]
  request.r(i11271[17], i11271[18], 0, i11270, 'customSimulationSpace')
  i11270.simulationSpeed = i11271[19]
  i11270.useUnscaledTime = !!i11271[20]
  i11270.scalingMode = i11271[21]
  i11270.playOnAwake = !!i11271[22]
  i11270.maxParticles = i11271[23]
  i11270.emitterVelocityMode = i11271[24]
  i11270.stopAction = i11271[25]
  return i11270
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i11272 = root || new pc.MinMaxCurve()
  var i11273 = data
  i11272.mode = i11273[0]
  i11272.curveMin = new pc.AnimationCurve( { keys_flow: i11273[1] } )
  i11272.curveMax = new pc.AnimationCurve( { keys_flow: i11273[2] } )
  i11272.curveMultiplier = i11273[3]
  i11272.constantMin = i11273[4]
  i11272.constantMax = i11273[5]
  return i11272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i11274 = root || new pc.MinMaxGradient()
  var i11275 = data
  i11274.mode = i11275[0]
  i11274.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i11275[1], i11274.gradientMin)
  i11274.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i11275[2], i11274.gradientMax)
  i11274.colorMin = new pc.Color(i11275[3], i11275[4], i11275[5], i11275[6])
  i11274.colorMax = new pc.Color(i11275[7], i11275[8], i11275[9], i11275[10])
  return i11274
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i11276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i11277 = data
  i11276.mode = i11277[0]
  var i11279 = i11277[1]
  var i11278 = []
  for(var i = 0; i < i11279.length; i += 1) {
    i11278.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i11279[i + 0]) );
  }
  i11276.colorKeys = i11278
  var i11281 = i11277[2]
  var i11280 = []
  for(var i = 0; i < i11281.length; i += 1) {
    i11280.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i11281[i + 0]) );
  }
  i11276.alphaKeys = i11280
  return i11276
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i11282 = root || new pc.ParticleSystemColorBySpeed()
  var i11283 = data
  i11282.enabled = !!i11283[0]
  i11282.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i11283[1], i11282.color)
  i11282.range = new pc.Vec2( i11283[2], i11283[3] )
  return i11282
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i11286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i11287 = data
  i11286.color = new pc.Color(i11287[0], i11287[1], i11287[2], i11287[3])
  i11286.time = i11287[4]
  return i11286
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i11290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i11291 = data
  i11290.alpha = i11291[0]
  i11290.time = i11291[1]
  return i11290
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i11292 = root || new pc.ParticleSystemColorOverLifetime()
  var i11293 = data
  i11292.enabled = !!i11293[0]
  i11292.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i11293[1], i11292.color)
  return i11292
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i11294 = root || new pc.ParticleSystemEmitter()
  var i11295 = data
  i11294.enabled = !!i11295[0]
  i11294.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11295[1], i11294.rateOverTime)
  i11294.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11295[2], i11294.rateOverDistance)
  var i11297 = i11295[3]
  var i11296 = []
  for(var i = 0; i < i11297.length; i += 1) {
    i11296.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i11297[i + 0]) );
  }
  i11294.bursts = i11296
  return i11294
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i11300 = root || new pc.ParticleSystemBurst()
  var i11301 = data
  i11300.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11301[0], i11300.count)
  i11300.cycleCount = i11301[1]
  i11300.minCount = i11301[2]
  i11300.maxCount = i11301[3]
  i11300.repeatInterval = i11301[4]
  i11300.time = i11301[5]
  return i11300
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i11302 = root || new pc.ParticleSystemRotationBySpeed()
  var i11303 = data
  i11302.enabled = !!i11303[0]
  i11302.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11303[1], i11302.x)
  i11302.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11303[2], i11302.y)
  i11302.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11303[3], i11302.z)
  i11302.separateAxes = !!i11303[4]
  i11302.range = new pc.Vec2( i11303[5], i11303[6] )
  return i11302
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i11304 = root || new pc.ParticleSystemRotationOverLifetime()
  var i11305 = data
  i11304.enabled = !!i11305[0]
  i11304.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11305[1], i11304.x)
  i11304.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11305[2], i11304.y)
  i11304.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11305[3], i11304.z)
  i11304.separateAxes = !!i11305[4]
  return i11304
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i11306 = root || new pc.ParticleSystemShape()
  var i11307 = data
  i11306.enabled = !!i11307[0]
  i11306.shapeType = i11307[1]
  i11306.randomDirectionAmount = i11307[2]
  i11306.sphericalDirectionAmount = i11307[3]
  i11306.randomPositionAmount = i11307[4]
  i11306.alignToDirection = !!i11307[5]
  i11306.radius = i11307[6]
  i11306.radiusMode = i11307[7]
  i11306.radiusSpread = i11307[8]
  i11306.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11307[9], i11306.radiusSpeed)
  i11306.radiusThickness = i11307[10]
  i11306.angle = i11307[11]
  i11306.length = i11307[12]
  i11306.boxThickness = new pc.Vec3( i11307[13], i11307[14], i11307[15] )
  i11306.meshShapeType = i11307[16]
  request.r(i11307[17], i11307[18], 0, i11306, 'mesh')
  request.r(i11307[19], i11307[20], 0, i11306, 'meshRenderer')
  request.r(i11307[21], i11307[22], 0, i11306, 'skinnedMeshRenderer')
  i11306.useMeshMaterialIndex = !!i11307[23]
  i11306.meshMaterialIndex = i11307[24]
  i11306.useMeshColors = !!i11307[25]
  i11306.normalOffset = i11307[26]
  i11306.arc = i11307[27]
  i11306.arcMode = i11307[28]
  i11306.arcSpread = i11307[29]
  i11306.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11307[30], i11306.arcSpeed)
  i11306.donutRadius = i11307[31]
  i11306.position = new pc.Vec3( i11307[32], i11307[33], i11307[34] )
  i11306.rotation = new pc.Vec3( i11307[35], i11307[36], i11307[37] )
  i11306.scale = new pc.Vec3( i11307[38], i11307[39], i11307[40] )
  return i11306
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i11308 = root || new pc.ParticleSystemSizeBySpeed()
  var i11309 = data
  i11308.enabled = !!i11309[0]
  i11308.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11309[1], i11308.x)
  i11308.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11309[2], i11308.y)
  i11308.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11309[3], i11308.z)
  i11308.separateAxes = !!i11309[4]
  i11308.range = new pc.Vec2( i11309[5], i11309[6] )
  return i11308
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i11310 = root || new pc.ParticleSystemSizeOverLifetime()
  var i11311 = data
  i11310.enabled = !!i11311[0]
  i11310.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11311[1], i11310.x)
  i11310.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11311[2], i11310.y)
  i11310.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11311[3], i11310.z)
  i11310.separateAxes = !!i11311[4]
  return i11310
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i11312 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i11313 = data
  i11312.enabled = !!i11313[0]
  i11312.mode = i11313[1]
  i11312.animation = i11313[2]
  i11312.numTilesX = i11313[3]
  i11312.numTilesY = i11313[4]
  i11312.useRandomRow = !!i11313[5]
  i11312.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11313[6], i11312.frameOverTime)
  i11312.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11313[7], i11312.startFrame)
  i11312.cycleCount = i11313[8]
  i11312.rowIndex = i11313[9]
  i11312.flipU = i11313[10]
  i11312.flipV = i11313[11]
  i11312.spriteCount = i11313[12]
  var i11315 = i11313[13]
  var i11314 = []
  for(var i = 0; i < i11315.length; i += 2) {
  request.r(i11315[i + 0], i11315[i + 1], 2, i11314, '')
  }
  i11312.sprites = i11314
  return i11312
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i11318 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i11319 = data
  i11318.enabled = !!i11319[0]
  i11318.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11319[1], i11318.x)
  i11318.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11319[2], i11318.y)
  i11318.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11319[3], i11318.z)
  i11318.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11319[4], i11318.radial)
  i11318.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11319[5], i11318.speedModifier)
  i11318.space = i11319[6]
  i11318.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11319[7], i11318.orbitalX)
  i11318.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11319[8], i11318.orbitalY)
  i11318.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11319[9], i11318.orbitalZ)
  i11318.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11319[10], i11318.orbitalOffsetX)
  i11318.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11319[11], i11318.orbitalOffsetY)
  i11318.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11319[12], i11318.orbitalOffsetZ)
  return i11318
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i11320 = root || new pc.ParticleSystemNoise()
  var i11321 = data
  i11320.enabled = !!i11321[0]
  i11320.separateAxes = !!i11321[1]
  i11320.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11321[2], i11320.strengthX)
  i11320.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11321[3], i11320.strengthY)
  i11320.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11321[4], i11320.strengthZ)
  i11320.frequency = i11321[5]
  i11320.damping = !!i11321[6]
  i11320.octaveCount = i11321[7]
  i11320.octaveMultiplier = i11321[8]
  i11320.octaveScale = i11321[9]
  i11320.quality = i11321[10]
  i11320.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11321[11], i11320.scrollSpeed)
  i11320.scrollSpeedMultiplier = i11321[12]
  i11320.remapEnabled = !!i11321[13]
  i11320.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11321[14], i11320.remapX)
  i11320.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11321[15], i11320.remapY)
  i11320.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11321[16], i11320.remapZ)
  i11320.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11321[17], i11320.positionAmount)
  i11320.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11321[18], i11320.rotationAmount)
  i11320.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11321[19], i11320.sizeAmount)
  return i11320
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i11322 = root || new pc.ParticleSystemInheritVelocity()
  var i11323 = data
  i11322.enabled = !!i11323[0]
  i11322.mode = i11323[1]
  i11322.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11323[2], i11322.curve)
  return i11322
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i11324 = root || new pc.ParticleSystemForceOverLifetime()
  var i11325 = data
  i11324.enabled = !!i11325[0]
  i11324.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11325[1], i11324.x)
  i11324.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11325[2], i11324.y)
  i11324.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11325[3], i11324.z)
  i11324.space = i11325[4]
  i11324.randomized = !!i11325[5]
  return i11324
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i11326 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i11327 = data
  i11326.enabled = !!i11327[0]
  i11326.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11327[1], i11326.limit)
  i11326.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11327[2], i11326.limitX)
  i11326.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11327[3], i11326.limitY)
  i11326.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11327[4], i11326.limitZ)
  i11326.dampen = i11327[5]
  i11326.separateAxes = !!i11327[6]
  i11326.space = i11327[7]
  i11326.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i11327[8], i11326.drag)
  i11326.multiplyDragByParticleSize = !!i11327[9]
  i11326.multiplyDragByParticleVelocity = !!i11327[10]
  return i11326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i11328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i11329 = data
  request.r(i11329[0], i11329[1], 0, i11328, 'mesh')
  i11328.meshCount = i11329[2]
  i11328.activeVertexStreamsCount = i11329[3]
  i11328.alignment = i11329[4]
  i11328.renderMode = i11329[5]
  i11328.sortMode = i11329[6]
  i11328.lengthScale = i11329[7]
  i11328.velocityScale = i11329[8]
  i11328.cameraVelocityScale = i11329[9]
  i11328.normalDirection = i11329[10]
  i11328.sortingFudge = i11329[11]
  i11328.minParticleSize = i11329[12]
  i11328.maxParticleSize = i11329[13]
  i11328.pivot = new pc.Vec3( i11329[14], i11329[15], i11329[16] )
  request.r(i11329[17], i11329[18], 0, i11328, 'trailMaterial')
  i11328.applyActiveColorSpace = !!i11329[19]
  i11328.enabled = !!i11329[20]
  request.r(i11329[21], i11329[22], 0, i11328, 'sharedMaterial')
  var i11331 = i11329[23]
  var i11330 = []
  for(var i = 0; i < i11331.length; i += 2) {
  request.r(i11331[i + 0], i11331[i + 1], 2, i11330, '')
  }
  i11328.sharedMaterials = i11330
  i11328.receiveShadows = !!i11329[24]
  i11328.shadowCastingMode = i11329[25]
  i11328.sortingLayerID = i11329[26]
  i11328.sortingOrder = i11329[27]
  i11328.lightmapIndex = i11329[28]
  i11328.lightmapSceneIndex = i11329[29]
  i11328.lightmapScaleOffset = new pc.Vec4( i11329[30], i11329[31], i11329[32], i11329[33] )
  i11328.lightProbeUsage = i11329[34]
  i11328.reflectionProbeUsage = i11329[35]
  return i11328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i11334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i11335 = data
  i11334.name = i11335[0]
  i11334.tagId = i11335[1]
  i11334.enabled = !!i11335[2]
  i11334.isStatic = !!i11335[3]
  i11334.layer = i11335[4]
  return i11334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i11336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i11337 = data
  i11336.pivot = new pc.Vec2( i11337[0], i11337[1] )
  i11336.anchorMin = new pc.Vec2( i11337[2], i11337[3] )
  i11336.anchorMax = new pc.Vec2( i11337[4], i11337[5] )
  i11336.sizeDelta = new pc.Vec2( i11337[6], i11337[7] )
  i11336.anchoredPosition3D = new pc.Vec3( i11337[8], i11337[9], i11337[10] )
  i11336.rotation = new pc.Quat(i11337[11], i11337[12], i11337[13], i11337[14])
  i11336.scale = new pc.Vec3( i11337[15], i11337[16], i11337[17] )
  return i11336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i11338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i11339 = data
  i11338.planeDistance = i11339[0]
  i11338.referencePixelsPerUnit = i11339[1]
  i11338.isFallbackOverlay = !!i11339[2]
  i11338.renderMode = i11339[3]
  i11338.renderOrder = i11339[4]
  i11338.sortingLayerName = i11339[5]
  i11338.sortingOrder = i11339[6]
  i11338.scaleFactor = i11339[7]
  request.r(i11339[8], i11339[9], 0, i11338, 'worldCamera')
  i11338.overrideSorting = !!i11339[10]
  i11338.pixelPerfect = !!i11339[11]
  i11338.targetDisplay = i11339[12]
  i11338.overridePixelPerfect = !!i11339[13]
  i11338.enabled = !!i11339[14]
  return i11338
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i11340 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i11341 = data
  i11340.m_UiScaleMode = i11341[0]
  i11340.m_ReferencePixelsPerUnit = i11341[1]
  i11340.m_ScaleFactor = i11341[2]
  i11340.m_ReferenceResolution = new pc.Vec2( i11341[3], i11341[4] )
  i11340.m_ScreenMatchMode = i11341[5]
  i11340.m_MatchWidthOrHeight = i11341[6]
  i11340.m_PhysicalUnit = i11341[7]
  i11340.m_FallbackScreenDPI = i11341[8]
  i11340.m_DefaultSpriteDPI = i11341[9]
  i11340.m_DynamicPixelsPerUnit = i11341[10]
  i11340.m_PresetInfoIsWorld = !!i11341[11]
  return i11340
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i11342 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i11343 = data
  i11342.m_IgnoreReversedGraphics = !!i11343[0]
  i11342.m_BlockingObjects = i11343[1]
  i11342.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i11343[2] )
  return i11342
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i11344 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i11345 = data
  i11344.targetIsSelf = !!i11345[0]
  request.r(i11345[1], i11345[2], 0, i11344, 'targetGO')
  i11344.tweenTargetIsTargetGO = !!i11345[3]
  i11344.delay = i11345[4]
  i11344.duration = i11345[5]
  i11344.easeType = i11345[6]
  i11344.easeCurve = new pc.AnimationCurve( { keys_flow: i11345[7] } )
  i11344.loopType = i11345[8]
  i11344.loops = i11345[9]
  i11344.id = i11345[10]
  i11344.isRelative = !!i11345[11]
  i11344.isFrom = !!i11345[12]
  i11344.isIndependentUpdate = !!i11345[13]
  i11344.autoKill = !!i11345[14]
  i11344.autoGenerate = !!i11345[15]
  i11344.isActive = !!i11345[16]
  i11344.isValid = !!i11345[17]
  request.r(i11345[18], i11345[19], 0, i11344, 'target')
  i11344.animationType = i11345[20]
  i11344.targetType = i11345[21]
  i11344.forcedTargetType = i11345[22]
  i11344.autoPlay = !!i11345[23]
  i11344.useTargetAsV3 = !!i11345[24]
  i11344.endValueFloat = i11345[25]
  i11344.endValueV3 = new pc.Vec3( i11345[26], i11345[27], i11345[28] )
  i11344.endValueV2 = new pc.Vec2( i11345[29], i11345[30] )
  i11344.endValueColor = new pc.Color(i11345[31], i11345[32], i11345[33], i11345[34])
  i11344.endValueString = i11345[35]
  i11344.endValueRect = UnityEngine.Rect.MinMaxRect(i11345[36], i11345[37], i11345[38], i11345[39])
  request.r(i11345[40], i11345[41], 0, i11344, 'endValueTransform')
  i11344.optionalBool0 = !!i11345[42]
  i11344.optionalBool1 = !!i11345[43]
  i11344.optionalFloat0 = i11345[44]
  i11344.optionalInt0 = i11345[45]
  i11344.optionalRotationMode = i11345[46]
  i11344.optionalScrambleMode = i11345[47]
  i11344.optionalShakeRandomnessMode = i11345[48]
  i11344.optionalString = i11345[49]
  i11344.updateType = i11345[50]
  i11344.isSpeedBased = !!i11345[51]
  i11344.hasOnStart = !!i11345[52]
  i11344.hasOnPlay = !!i11345[53]
  i11344.hasOnUpdate = !!i11345[54]
  i11344.hasOnStepComplete = !!i11345[55]
  i11344.hasOnComplete = !!i11345[56]
  i11344.hasOnTweenCreated = !!i11345[57]
  i11344.hasOnRewind = !!i11345[58]
  i11344.onStart = request.d('UnityEngine.Events.UnityEvent', i11345[59], i11344.onStart)
  i11344.onPlay = request.d('UnityEngine.Events.UnityEvent', i11345[60], i11344.onPlay)
  i11344.onUpdate = request.d('UnityEngine.Events.UnityEvent', i11345[61], i11344.onUpdate)
  i11344.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i11345[62], i11344.onStepComplete)
  i11344.onComplete = request.d('UnityEngine.Events.UnityEvent', i11345[63], i11344.onComplete)
  i11344.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i11345[64], i11344.onTweenCreated)
  i11344.onRewind = request.d('UnityEngine.Events.UnityEvent', i11345[65], i11344.onRewind)
  return i11344
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i11346 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i11347 = data
  i11346.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i11347[0], i11346.m_PersistentCalls)
  return i11346
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i11348 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i11349 = data
  var i11351 = i11349[0]
  var i11350 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i11351.length; i += 1) {
    i11350.add(request.d('UnityEngine.Events.PersistentCall', i11351[i + 0]));
  }
  i11348.m_Calls = i11350
  return i11348
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i11354 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i11355 = data
  request.r(i11355[0], i11355[1], 0, i11354, 'm_Target')
  i11354.m_TargetAssemblyTypeName = i11355[2]
  i11354.m_MethodName = i11355[3]
  i11354.m_Mode = i11355[4]
  i11354.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i11355[5], i11354.m_Arguments)
  i11354.m_CallState = i11355[6]
  return i11354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i11356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i11357 = data
  i11356.cullTransparentMesh = !!i11357[0]
  return i11356
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i11358 = root || request.c( 'UnityEngine.UI.Image' )
  var i11359 = data
  request.r(i11359[0], i11359[1], 0, i11358, 'm_Sprite')
  i11358.m_Type = i11359[2]
  i11358.m_PreserveAspect = !!i11359[3]
  i11358.m_FillCenter = !!i11359[4]
  i11358.m_FillMethod = i11359[5]
  i11358.m_FillAmount = i11359[6]
  i11358.m_FillClockwise = !!i11359[7]
  i11358.m_FillOrigin = i11359[8]
  i11358.m_UseSpriteMesh = !!i11359[9]
  i11358.m_PixelsPerUnitMultiplier = i11359[10]
  request.r(i11359[11], i11359[12], 0, i11358, 'm_Material')
  i11358.m_Maskable = !!i11359[13]
  i11358.m_Color = new pc.Color(i11359[14], i11359[15], i11359[16], i11359[17])
  i11358.m_RaycastTarget = !!i11359[18]
  i11358.m_RaycastPadding = new pc.Vec4( i11359[19], i11359[20], i11359[21], i11359[22] )
  return i11358
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i11360 = root || request.c( 'UnityEngine.UI.Text' )
  var i11361 = data
  i11360.m_FontData = request.d('UnityEngine.UI.FontData', i11361[0], i11360.m_FontData)
  i11360.m_Text = i11361[1]
  request.r(i11361[2], i11361[3], 0, i11360, 'm_Material')
  i11360.m_Maskable = !!i11361[4]
  i11360.m_Color = new pc.Color(i11361[5], i11361[6], i11361[7], i11361[8])
  i11360.m_RaycastTarget = !!i11361[9]
  i11360.m_RaycastPadding = new pc.Vec4( i11361[10], i11361[11], i11361[12], i11361[13] )
  return i11360
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i11362 = root || request.c( 'UnityEngine.UI.FontData' )
  var i11363 = data
  request.r(i11363[0], i11363[1], 0, i11362, 'm_Font')
  i11362.m_FontSize = i11363[2]
  i11362.m_FontStyle = i11363[3]
  i11362.m_BestFit = !!i11363[4]
  i11362.m_MinSize = i11363[5]
  i11362.m_MaxSize = i11363[6]
  i11362.m_Alignment = i11363[7]
  i11362.m_AlignByGeometry = !!i11363[8]
  i11362.m_RichText = !!i11363[9]
  i11362.m_HorizontalOverflow = i11363[10]
  i11362.m_VerticalOverflow = i11363[11]
  i11362.m_LineSpacing = i11363[12]
  return i11362
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i11364 = root || request.c( 'UnityEngine.UI.Button' )
  var i11365 = data
  i11364.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i11365[0], i11364.m_OnClick)
  i11364.m_Navigation = request.d('UnityEngine.UI.Navigation', i11365[1], i11364.m_Navigation)
  i11364.m_Transition = i11365[2]
  i11364.m_Colors = request.d('UnityEngine.UI.ColorBlock', i11365[3], i11364.m_Colors)
  i11364.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i11365[4], i11364.m_SpriteState)
  i11364.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i11365[5], i11364.m_AnimationTriggers)
  i11364.m_Interactable = !!i11365[6]
  request.r(i11365[7], i11365[8], 0, i11364, 'm_TargetGraphic')
  return i11364
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i11366 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i11367 = data
  i11366.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i11367[0], i11366.m_PersistentCalls)
  return i11366
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i11368 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i11369 = data
  request.r(i11369[0], i11369[1], 0, i11368, 'm_ObjectArgument')
  i11368.m_ObjectArgumentAssemblyTypeName = i11369[2]
  i11368.m_IntArgument = i11369[3]
  i11368.m_FloatArgument = i11369[4]
  i11368.m_StringArgument = i11369[5]
  i11368.m_BoolArgument = !!i11369[6]
  return i11368
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i11370 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i11371 = data
  i11370.m_Mode = i11371[0]
  i11370.m_WrapAround = !!i11371[1]
  request.r(i11371[2], i11371[3], 0, i11370, 'm_SelectOnUp')
  request.r(i11371[4], i11371[5], 0, i11370, 'm_SelectOnDown')
  request.r(i11371[6], i11371[7], 0, i11370, 'm_SelectOnLeft')
  request.r(i11371[8], i11371[9], 0, i11370, 'm_SelectOnRight')
  return i11370
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i11372 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i11373 = data
  i11372.m_NormalColor = new pc.Color(i11373[0], i11373[1], i11373[2], i11373[3])
  i11372.m_HighlightedColor = new pc.Color(i11373[4], i11373[5], i11373[6], i11373[7])
  i11372.m_PressedColor = new pc.Color(i11373[8], i11373[9], i11373[10], i11373[11])
  i11372.m_SelectedColor = new pc.Color(i11373[12], i11373[13], i11373[14], i11373[15])
  i11372.m_DisabledColor = new pc.Color(i11373[16], i11373[17], i11373[18], i11373[19])
  i11372.m_ColorMultiplier = i11373[20]
  i11372.m_FadeDuration = i11373[21]
  return i11372
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i11374 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i11375 = data
  request.r(i11375[0], i11375[1], 0, i11374, 'm_HighlightedSprite')
  request.r(i11375[2], i11375[3], 0, i11374, 'm_PressedSprite')
  request.r(i11375[4], i11375[5], 0, i11374, 'm_SelectedSprite')
  request.r(i11375[6], i11375[7], 0, i11374, 'm_DisabledSprite')
  return i11374
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i11376 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i11377 = data
  i11376.m_NormalTrigger = i11377[0]
  i11376.m_HighlightedTrigger = i11377[1]
  i11376.m_PressedTrigger = i11377[2]
  i11376.m_SelectedTrigger = i11377[3]
  i11376.m_DisabledTrigger = i11377[4]
  return i11376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i11378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i11379 = data
  request.r(i11379[0], i11379[1], 0, i11378, 'animatorController')
  request.r(i11379[2], i11379[3], 0, i11378, 'avatar')
  i11378.updateMode = i11379[4]
  i11378.hasTransformHierarchy = !!i11379[5]
  i11378.applyRootMotion = !!i11379[6]
  var i11381 = i11379[7]
  var i11380 = []
  for(var i = 0; i < i11381.length; i += 2) {
  request.r(i11381[i + 0], i11381[i + 1], 2, i11380, '')
  }
  i11378.humanBones = i11380
  i11378.enabled = !!i11379[8]
  return i11378
}

Deserializers["Level1_Cloth_Playable_Step1to4"] = function (request, data, root) {
  var i11384 = root || request.c( 'Level1_Cloth_Playable_Step1to4' )
  var i11385 = data
  request.r(i11385[0], i11385[1], 0, i11384, 'WashingView')
  request.r(i11385[2], i11385[3], 0, i11384, 'WashingTools')
  request.r(i11385[4], i11385[5], 0, i11384, 'DressingView')
  request.r(i11385[6], i11385[7], 0, i11384, 'DressingTools')
  i11384.ZoomStep1 = request.d('ZoomPos', i11385[8], i11384.ZoomStep1)
  request.r(i11385[9], i11385[10], 0, i11384, 'ToolStep1')
  request.r(i11385[11], i11385[12], 0, i11384, 'Basket_Cloth')
  request.r(i11385[13], i11385[14], 0, i11384, 'clothInside')
  request.r(i11385[15], i11385[16], 0, i11384, 'clothRound')
  request.r(i11385[17], i11385[18], 0, i11384, 'machineDoor')
  request.r(i11385[19], i11385[20], 0, i11384, 'machineGlass')
  i11384.ZoomStep2 = request.d('ZoomPos', i11385[21], i11384.ZoomStep2)
  i11384.ZoomStep2b = request.d('ZoomPos', i11385[22], i11384.ZoomStep2b)
  request.r(i11385[23], i11385[24], 0, i11384, 'ToolStep2')
  request.r(i11385[25], i11385[26], 0, i11384, 'ToolStep2CamFollow')
  request.r(i11385[27], i11385[28], 0, i11384, 'drawerObj')
  request.r(i11385[29], i11385[30], 0, i11384, 'surfObj')
  request.r(i11385[31], i11385[32], 0, i11384, 'surfPackTop')
  request.r(i11385[33], i11385[34], 0, i11384, 'handStep2')
  request.r(i11385[35], i11385[36], 0, i11384, 'surfController')
  request.r(i11385[37], i11385[38], 0, i11384, 'clothsInside')
  request.r(i11385[39], i11385[40], 0, i11384, 'clothsInsideGlass')
  request.r(i11385[41], i11385[42], 0, i11384, 'clothsStaticClean')
  request.r(i11385[43], i11385[44], 0, i11384, 'wetCloths')
  request.r(i11385[45], i11385[46], 0, i11384, 'clothCleanInside')
  request.r(i11385[47], i11385[48], 0, i11384, 'clothCleanInsideAnim')
  request.r(i11385[49], i11385[50], 0, i11384, 'waterWave')
  request.r(i11385[51], i11385[52], 0, i11384, 'clothCleanInside2')
  request.r(i11385[53], i11385[54], 0, i11384, 'clothCleanInside2Cam')
  request.r(i11385[55], i11385[56], 0, i11384, 'clothBasketTarget')
  request.r(i11385[57], i11385[58], 0, i11384, 'clothBasketTarget2')
  request.r(i11385[59], i11385[60], 0, i11384, 'waterSplash_Vfx')
  request.r(i11385[61], i11385[62], 0, i11384, 'countDownTimerText')
  i11384.countDown = i11385[63]
  request.r(i11385[64], i11385[65], 0, i11384, 'machineTimer')
  request.r(i11385[66], i11385[67], 0, i11384, 'machineTimerRotater')
  request.r(i11385[68], i11385[69], 0, i11384, 'machineTimerIndication')
  request.r(i11385[70], i11385[71], 0, i11384, 'darazOpenSfx')
  request.r(i11385[72], i11385[73], 0, i11384, 'darazCloseSfx')
  request.r(i11385[74], i11385[75], 0, i11384, 'doorOpenSfx')
  request.r(i11385[76], i11385[77], 0, i11384, 'machineStartSfx')
  request.r(i11385[78], i11385[79], 0, i11384, 'machineFinishSfx')
  request.r(i11385[80], i11385[81], 0, i11384, 'waterDrainSfx')
  i11384.levelName = i11385[82]
  i11384.levelReward = i11385[83]
  request.r(i11385[84], i11385[85], 0, i11384, 'LevelIcon')
  request.r(i11385[86], i11385[87], 0, i11384, 'Level_BG')
  var i11387 = i11385[88]
  var i11386 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i11387.length; i += 2) {
  request.r(i11387[i + 0], i11387[i + 1], 1, i11386, '')
  }
  i11384.ToolIcons = i11386
  var i11389 = i11385[89]
  var i11388 = []
  for(var i = 0; i < i11389.length; i += 2) {
  request.r(i11389[i + 0], i11389[i + 1], 2, i11388, '')
  }
  i11384.AllDrags = i11388
  var i11391 = i11385[90]
  var i11390 = []
  for(var i = 0; i < i11391.length; i += 2) {
  request.r(i11391[i + 0], i11391[i + 1], 2, i11390, '')
  }
  i11384.AllSources = i11390
  var i11393 = i11385[91]
  var i11392 = []
  for(var i = 0; i < i11393.length; i += 2) {
  request.r(i11393[i + 0], i11393[i + 1], 2, i11392, '')
  }
  i11384.AllScratches = i11392
  i11384.stepsDone = i11385[92]
  i11384.levelNo = i11385[93]
  i11384.partNo = i11385[94]
  request.r(i11385[95], i11385[96], 0, i11384, 'clothSfx')
  request.r(i11385[97], i11385[98], 0, i11384, 'doorCloseSfx')
  return i11384
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i11394 = root || request.c( 'ZoomPos' )
  var i11395 = data
  i11394.CameraPos = new pc.Vec3( i11395[0], i11395[1], i11395[2] )
  i11394.CameraFOV = i11395[3]
  return i11394
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i11404 = root || request.c( 'PlayableCTA' )
  var i11405 = data
  i11404.trigger = i11405[0]
  i11404.afterSeconds = i11405[1]
  i11404.afterTaps = i11405[2]
  request.r(i11405[3], i11405[4], 0, i11404, 'scratchProgress')
  i11404.scratchIndex = i11405[5]
  i11404.progressThreshold = i11405[6]
  request.r(i11405[7], i11405[8], 0, i11404, 'watchedTool')
  i11404.blockInputOnFire = !!i11405[9]
  i11404.refireOnEveryTap = !!i11405[10]
  i11404.refireDelay = i11405[11]
  i11404.showEndCard = !!i11405[12]
  request.r(i11405[13], i11405[14], 0, i11404, 'endCard')
  i11404.endCardDelay = i11405[15]
  i11404.showEndCardOnProgressTrigger = !!i11405[16]
  i11404.showEndCardOnToolAppearTrigger = !!i11405[17]
  i11404.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i11405[18], i11404.onCtaFired)
  i11404.logWhenFired = !!i11405[19]
  return i11404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i11406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i11407 = data
  i11406.textureMode = i11407[0]
  i11406.alignment = i11407[1]
  i11406.widthCurve = new pc.AnimationCurve( { keys_flow: i11407[2] } )
  i11406.colorGradient = i11407[3] ? new pc.ColorGradient(i11407[3][0], i11407[3][1], i11407[3][2]) : null
  var i11409 = i11407[4]
  var i11408 = []
  for(var i = 0; i < i11409.length; i += 3) {
    i11408.push( new pc.Vec3( i11409[i + 0], i11409[i + 1], i11409[i + 2] ) );
  }
  i11406.positions = i11408
  i11406.positionCount = i11407[5]
  i11406.widthMultiplier = i11407[6]
  i11406.startWidth = i11407[7]
  i11406.endWidth = i11407[8]
  i11406.numCornerVertices = i11407[9]
  i11406.numCapVertices = i11407[10]
  i11406.useWorldSpace = !!i11407[11]
  i11406.loop = !!i11407[12]
  i11406.startColor = new pc.Color(i11407[13], i11407[14], i11407[15], i11407[16])
  i11406.endColor = new pc.Color(i11407[17], i11407[18], i11407[19], i11407[20])
  i11406.generateLightingData = !!i11407[21]
  i11406.enabled = !!i11407[22]
  request.r(i11407[23], i11407[24], 0, i11406, 'sharedMaterial')
  var i11411 = i11407[25]
  var i11410 = []
  for(var i = 0; i < i11411.length; i += 2) {
  request.r(i11411[i + 0], i11411[i + 1], 2, i11410, '')
  }
  i11406.sharedMaterials = i11410
  i11406.receiveShadows = !!i11407[26]
  i11406.shadowCastingMode = i11407[27]
  i11406.sortingLayerID = i11407[28]
  i11406.sortingOrder = i11407[29]
  i11406.lightmapIndex = i11407[30]
  i11406.lightmapSceneIndex = i11407[31]
  i11406.lightmapScaleOffset = new pc.Vec4( i11407[32], i11407[33], i11407[34], i11407[35] )
  i11406.lightProbeUsage = i11407[36]
  i11406.reflectionProbeUsage = i11407[37]
  return i11406
}

Deserializers["TextureOffsetScroller"] = function (request, data, root) {
  var i11414 = root || request.c( 'TextureOffsetScroller' )
  var i11415 = data
  i11414.scrollSpeed = new pc.Vec2( i11415[0], i11415[1] )
  i11414.smoothStart = !!i11415[2]
  i11414.smoothDuration = i11415[3]
  i11414.textureName = i11415[4]
  i11414.useSharedMaterial = !!i11415[5]
  return i11414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i11416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i11417 = data
  i11416.color = new pc.Color(i11417[0], i11417[1], i11417[2], i11417[3])
  request.r(i11417[4], i11417[5], 0, i11416, 'sprite')
  i11416.flipX = !!i11417[6]
  i11416.flipY = !!i11417[7]
  i11416.drawMode = i11417[8]
  i11416.size = new pc.Vec2( i11417[9], i11417[10] )
  i11416.tileMode = i11417[11]
  i11416.adaptiveModeThreshold = i11417[12]
  i11416.maskInteraction = i11417[13]
  i11416.spriteSortPoint = i11417[14]
  i11416.enabled = !!i11417[15]
  request.r(i11417[16], i11417[17], 0, i11416, 'sharedMaterial')
  var i11419 = i11417[18]
  var i11418 = []
  for(var i = 0; i < i11419.length; i += 2) {
  request.r(i11419[i + 0], i11419[i + 1], 2, i11418, '')
  }
  i11416.sharedMaterials = i11418
  i11416.receiveShadows = !!i11417[19]
  i11416.shadowCastingMode = i11417[20]
  i11416.sortingLayerID = i11417[21]
  i11416.sortingOrder = i11417[22]
  i11416.lightmapIndex = i11417[23]
  i11416.lightmapSceneIndex = i11417[24]
  i11416.lightmapScaleOffset = new pc.Vec4( i11417[25], i11417[26], i11417[27], i11417[28] )
  i11416.lightProbeUsage = i11417[29]
  i11416.reflectionProbeUsage = i11417[30]
  return i11416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i11420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i11421 = data
  i11420.usedByComposite = !!i11421[0]
  i11420.autoTiling = !!i11421[1]
  i11420.size = new pc.Vec2( i11421[2], i11421[3] )
  i11420.edgeRadius = i11421[4]
  i11420.enabled = !!i11421[5]
  i11420.isTrigger = !!i11421[6]
  i11420.usedByEffector = !!i11421[7]
  i11420.density = i11421[8]
  i11420.offset = new pc.Vec2( i11421[9], i11421[10] )
  request.r(i11421[11], i11421[12], 0, i11420, 'material')
  return i11420
}

Deserializers["RotaryTimerKnob"] = function (request, data, root) {
  var i11422 = root || request.c( 'RotaryTimerKnob' )
  var i11423 = data
  i11422.canDrag = !!i11423[0]
  i11422.numSteps = i11423[1]
  i11422.onlyClockwise = !!i11423[2]
  request.r(i11423[3], i11423[4], 0, i11422, 'clickSound')
  i11422.enableVibration = !!i11423[5]
  request.r(i11423[6], i11423[7], 0, i11422, 'stepText')
  i11422.OnComplete = request.d('UnityEngine.Events.UnityEvent', i11423[8], i11422.OnComplete)
  request.r(i11423[9], i11423[10], 0, i11422, 'handIndication')
  return i11422
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i11424 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i11425 = data
  request.r(i11425[0], i11425[1], 0, i11424, 'm_RootBone')
  var i11427 = i11425[2]
  var i11426 = []
  for(var i = 0; i < i11427.length; i += 2) {
  request.r(i11427[i + 0], i11427[i + 1], 2, i11426, '')
  }
  i11424.m_BoneTransforms = i11426
  i11424.m_AlwaysUpdate = !!i11425[3]
  i11424.m_AutoRebind = !!i11425[4]
  return i11424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i11428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i11429 = data
  i11428.frontSortingLayerID = i11429[0]
  i11428.frontSortingOrder = i11429[1]
  i11428.backSortingLayerID = i11429[2]
  i11428.backSortingOrder = i11429[3]
  i11428.alphaCutoff = i11429[4]
  request.r(i11429[5], i11429[6], 0, i11428, 'sprite')
  i11428.tileMode = i11429[7]
  i11428.isCustomRangeActive = !!i11429[8]
  i11428.spriteSortPoint = i11429[9]
  i11428.enabled = !!i11429[10]
  request.r(i11429[11], i11429[12], 0, i11428, 'sharedMaterial')
  var i11431 = i11429[13]
  var i11430 = []
  for(var i = 0; i < i11431.length; i += 2) {
  request.r(i11431[i + 0], i11431[i + 1], 2, i11430, '')
  }
  i11428.sharedMaterials = i11430
  i11428.receiveShadows = !!i11429[14]
  i11428.shadowCastingMode = i11429[15]
  i11428.sortingLayerID = i11429[16]
  i11428.sortingOrder = i11429[17]
  i11428.lightmapIndex = i11429[18]
  i11428.lightmapSceneIndex = i11429[19]
  i11428.lightmapScaleOffset = new pc.Vec4( i11429[20], i11429[21], i11429[22], i11429[23] )
  i11428.lightProbeUsage = i11429[24]
  i11428.reflectionProbeUsage = i11429[25]
  return i11428
}

Deserializers["_2dxFX_Wave"] = function (request, data, root) {
  var i11432 = root || request.c( '_2dxFX_Wave' )
  var i11433 = data
  request.r(i11433[0], i11433[1], 0, i11432, 'ForceMaterial')
  i11432.ActiveChange = !!i11433[2]
  i11432._Alpha = i11433[3]
  i11432._OffsetX = i11433[4]
  i11432._OffsetY = i11433[5]
  i11432._DistanceX = i11433[6]
  i11432._DistanceY = i11433[7]
  i11432._WaveTimeX = i11433[8]
  i11432._WaveTimeY = i11433[9]
  i11432.AutoPlayWaveX = !!i11433[10]
  i11432.AutoPlaySpeedX = i11433[11]
  i11432.AutoPlayWaveY = !!i11433[12]
  i11432.AutoPlaySpeedY = i11433[13]
  i11432.AutoRandom = !!i11433[14]
  i11432.AutoRandomRange = i11433[15]
  i11432.ShaderChange = i11433[16]
  return i11432
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i11434 = root || request.c( 'BasicDrag' )
  var i11435 = data
  i11434.canDrag = !!i11435[0]
  i11434.dragByDelta = !!i11435[1]
  i11434.isDragging = !!i11435[2]
  i11434.moveWithPointer = !!i11435[3]
  i11434.canReturn = !!i11435[4]
  i11434.jumpOnReturn = !!i11435[5]
  i11434.returnTime = i11435[6]
  i11434.Tool_Offset = new pc.Vec3( i11435[7], i11435[8], i11435[9] )
  i11434.canScaleIncrease = !!i11435[10]
  i11434.Self_ScaleNew = new pc.Vec3( i11435[11], i11435[12], i11435[13] )
  i11434.canRotateOnPick = !!i11435[14]
  i11434.startRot = new pc.Vec3( i11435[15], i11435[16], i11435[17] )
  i11434.newRot = new pc.Vec3( i11435[18], i11435[19], i11435[20] )
  var i11437 = i11435[21]
  var i11436 = []
  for(var i = 0; i < i11437.length; i += 2) {
  request.r(i11437[i + 0], i11437[i + 1], 2, i11436, '')
  }
  i11434.childSprite = i11436
  request.r(i11435[22], i11435[23], 0, i11434, 'ToolSelectClip')
  request.r(i11435[24], i11435[25], 0, i11434, 'ToolLoopClip')
  request.r(i11435[26], i11435[27], 0, i11434, 'thisParticles')
  i11434.onDragparticle = !!i11435[28]
  request.r(i11435[29], i11435[30], 0, i11434, 'dragParticles')
  request.r(i11435[31], i11435[32], 0, i11434, 'anim')
  i11434.startPos = new pc.Vec3( i11435[33], i11435[34], i11435[35] )
  i11434.startScale = new pc.Vec3( i11435[36], i11435[37], i11435[38] )
  i11434.Vibration = !!i11435[39]
  i11434.isPlacedCannotMove = !!i11435[40]
  i11434.isObjectMovingWhileDragging = !!i11435[41]
  i11434.OnMouseDownEvent = request.d('System.Action', i11435[42], i11434.OnMouseDownEvent)
  i11434.OnMouseUpEvent = request.d('System.Action', i11435[43], i11434.OnMouseUpEvent)
  i11434.ProgStartEvent = request.d('System.Action', i11435[44], i11434.ProgStartEvent)
  i11434.ProgEndEvent = request.d('System.Action', i11435[45], i11434.ProgEndEvent)
  i11434.canCallMouseUpWhenGamePaused = !!i11435[46]
  i11434.ClampX_L = i11435[47]
  i11434.ClampX_H = i11435[48]
  i11434.ClampY_L = i11435[49]
  i11434.ClampY_H = i11435[50]
  i11434.startOrder = i11435[51]
  i11434.dontResetItIsInCollider = !!i11435[52]
  request.r(i11435[53], i11435[54], 0, i11434, 'thisCollider')
  request.r(i11435[55], i11435[56], 0, i11434, 'thisSR')
  i11434.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i11435[57], i11434.OnMouseDownEventIndependentFromCanDrag)
  return i11434
}

Deserializers["System.Action"] = function (request, data, root) {
  var i11440 = root || request.c( 'System.Action' )
  var i11441 = data
  return i11440
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i11442 = root || request.c( 'BD_Clamp' )
  var i11443 = data
  i11442.ClampX_L = i11443[0]
  i11442.ClampX_H = i11443[1]
  i11442.ClampY_L = i11443[2]
  i11442.ClampY_H = i11443[3]
  return i11442
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i11444 = root || request.c( 'BD_CameraFollow' )
  var i11445 = data
  request.r(i11445[0], i11445[1], 0, i11444, 'Tool')
  request.r(i11445[2], i11445[3], 0, i11444, 'Pivot')
  i11444.FOV = i11445[4]
  i11444.Y_L = i11445[5]
  i11444.Y_H = i11445[6]
  i11444.X_L = i11445[7]
  i11444.X_R = i11445[8]
  i11444.startDelay = i11445[9]
  i11444.duration = i11445[10]
  return i11444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i11446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i11447 = data
  i11446.bodyType = i11447[0]
  request.r(i11447[1], i11447[2], 0, i11446, 'material')
  i11446.simulated = !!i11447[3]
  i11446.useAutoMass = !!i11447[4]
  i11446.mass = i11447[5]
  i11446.drag = i11447[6]
  i11446.angularDrag = i11447[7]
  i11446.gravityScale = i11447[8]
  i11446.collisionDetectionMode = i11447[9]
  i11446.sleepMode = i11447[10]
  i11446.constraints = i11447[11]
  return i11446
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i11448 = root || request.c( 'PlaceItem' )
  var i11449 = data
  request.r(i11449[0], i11449[1], 0, i11448, 'thisDrag')
  request.r(i11449[2], i11449[3], 0, i11448, 'Target')
  request.r(i11449[4], i11449[5], 0, i11448, 'Clip')
  i11448.jumpOnPlace = !!i11449[6]
  i11448.jumpHeight = i11449[7]
  i11448.jumpDuration = i11449[8]
  i11448.settleDuration = i11449[9]
  i11448.isPlaced = !!i11449[10]
  i11448.isInsideCollider = !!i11449[11]
  i11448.changeScaleOnPlace = !!i11449[12]
  request.r(i11449[13], i11449[14], 0, i11448, 'item')
  i11448.newScaleOnPlace = new pc.Vec3( i11449[15], i11449[16], i11449[17] )
  i11448.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i11449[18], i11448.OnPlaced)
  return i11448
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i11450 = root || request.c( 'ActionOnTap' )
  var i11451 = data
  i11450.OnTap = request.d('UnityEngine.Events.UnityEvent', i11451[0], i11450.OnTap)
  i11450.OnTapExtra = request.d('System.Action', i11451[1], i11450.OnTapExtra)
  return i11450
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i11452 = root || request.c( 'BD_Action' )
  var i11453 = data
  i11452.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i11453[0], i11452.OnMouseDownEvent)
  i11452.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i11453[1], i11452.OnMouseUpEvent)
  i11452.setToolLayer = !!i11453[2]
  request.r(i11453[3], i11453[4], 0, i11452, 'tool_SP')
  return i11452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i11454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i11455 = data
  request.r(i11455[0], i11455[1], 0, i11454, 'clip')
  request.r(i11455[2], i11455[3], 0, i11454, 'outputAudioMixerGroup')
  i11454.playOnAwake = !!i11455[4]
  i11454.loop = !!i11455[5]
  i11454.time = i11455[6]
  i11454.volume = i11455[7]
  i11454.pitch = i11455[8]
  i11454.enabled = !!i11455[9]
  return i11454
}

Deserializers["Level1_SurfController"] = function (request, data, root) {
  var i11456 = root || request.c( 'Level1_SurfController' )
  var i11457 = data
  i11456.target_rotZ = i11457[0]
  i11456.rotationDuration = i11457[1]
  i11456.rotationEase = i11457[2]
  request.r(i11457[3], i11457[4], 0, i11456, 'maskItem')
  i11456.maskTarget_posY = i11457[5]
  i11456.maskMoveDuration = i11457[6]
  i11456.requiredHoldTime = i11457[7]
  i11456.minRotationForProgress = i11457[8]
  request.r(i11457[9], i11457[10], 0, i11456, 'tipCollider')
  request.r(i11457[11], i11457[12], 0, i11456, 'targetZoneCollider')
  request.r(i11457[13], i11457[14], 0, i11456, 'surf_Particles')
  request.r(i11457[15], i11457[16], 0, i11456, 'surf_SubEmitter')
  request.r(i11457[17], i11457[18], 0, i11456, 'Indication')
  i11456.OnComplete = request.d('UnityEngine.Events.UnityEvent', i11457[19], i11456.OnComplete)
  i11456.currentHoldProgress = i11457[20]
  return i11456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i11458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i11459 = data
  i11458.radius = i11459[0]
  i11458.enabled = !!i11459[1]
  i11458.isTrigger = !!i11459[2]
  i11458.usedByEffector = !!i11459[3]
  i11458.density = i11459[4]
  i11458.offset = new pc.Vec2( i11459[5], i11459[6] )
  request.r(i11459[7], i11459[8], 0, i11458, 'material')
  return i11458
}

Deserializers["BD_Fold"] = function (request, data, root) {
  var i11460 = root || request.c( 'BD_Fold' )
  var i11461 = data
  i11460.canDrag = !!i11461[0]
  i11460.canFoldBottomLeft = !!i11461[1]
  i11460.canFoldBottomRight = !!i11461[2]
  i11460.canFoldTopLeft = !!i11461[3]
  i11460.canFoldTopRight = !!i11461[4]
  request.r(i11461[5], i11461[6], 0, i11460, 'Indication')
  request.r(i11461[7], i11461[8], 0, i11460, 'backSideSprite')
  i11460.maxSideOffset = i11461[9]
  i11460.foldBackDuration = i11461[10]
  i11460.instantFoldAmount = i11461[11]
  i11460.useSmoothRelease = !!i11461[12]
  i11460.completionLimit = i11461[13]
  i11460.afterCompletionTravelTo = i11461[14]
  i11460.OnComplete = request.d('UnityEngine.Events.UnityEvent', i11461[15], i11460.OnComplete)
  i11460.currentProgress = i11461[16]
  i11460.innerShadowStrength = i11461[17]
  request.r(i11461[18], i11461[19], 0, i11460, 'dragAudioSource')
  request.r(i11461[20], i11461[21], 0, i11460, 'dragStartClip')
  request.r(i11461[22], i11461[23], 0, i11460, 'completionClip')
  i11460.audioFadeSpeed = i11461[24]
  i11460.audioMoveThreshold = i11461[25]
  i11460.hapticInterval = i11461[26]
  return i11460
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i11462 = root || request.c( 'BD_Progress' )
  var i11463 = data
  var i11465 = i11463[0]
  var i11464 = []
  for(var i = 0; i < i11465.length; i += 1) {
    i11464.push( request.d('ScratchData', i11465[i + 0]) );
  }
  i11462.AllScratches = i11464
  i11462.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i11463[1], i11462.OnScratchComplete)
  i11462.isProgDone = !!i11463[2]
  i11462.canCallComplete = !!i11463[3]
  i11462.CollectiveAppear = !!i11463[4]
  i11462.tipControl = !!i11463[5]
  i11462.progressControl = !!i11463[6]
  request.r(i11463[7], i11463[8], 0, i11462, 'thisDrag')
  i11462.CompleteEvent = request.d('System.Action', i11463[9], i11462.CompleteEvent)
  i11462.SubCompleteEvent = request.d('System.Action', i11463[10], i11462.SubCompleteEvent)
  return i11462
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i11468 = root || request.c( 'ScratchData' )
  var i11469 = data
  request.r(i11469[0], i11469[1], 0, i11468, 'ScratchManager')
  i11468.scratchLimit = i11469[2]
  i11468.isComplete = !!i11469[3]
  return i11468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i11470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i11471 = data
  request.r(i11471[0], i11471[1], 0, i11470, 'sharedMesh')
  return i11470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i11472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i11473 = data
  request.r(i11473[0], i11473[1], 0, i11472, 'additionalVertexStreams')
  i11472.enabled = !!i11473[2]
  request.r(i11473[3], i11473[4], 0, i11472, 'sharedMaterial')
  var i11475 = i11473[5]
  var i11474 = []
  for(var i = 0; i < i11475.length; i += 2) {
  request.r(i11475[i + 0], i11475[i + 1], 2, i11474, '')
  }
  i11472.sharedMaterials = i11474
  i11472.receiveShadows = !!i11473[6]
  i11472.shadowCastingMode = i11473[7]
  i11472.sortingLayerID = i11473[8]
  i11472.sortingOrder = i11473[9]
  i11472.lightmapIndex = i11473[10]
  i11472.lightmapSceneIndex = i11473[11]
  i11472.lightmapScaleOffset = new pc.Vec4( i11473[12], i11473[13], i11473[14], i11473[15] )
  i11472.lightProbeUsage = i11473[16]
  i11472.reflectionProbeUsage = i11473[17]
  return i11472
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i11476 = root || request.c( 'StaticFixedPipe' )
  var i11477 = data
  request.r(i11477[0], i11477[1], 0, i11476, 'meshRenderer')
  request.r(i11477[2], i11477[3], 0, i11476, 'toolTransform')
  request.r(i11477[4], i11477[5], 0, i11476, 'toolDirectionPoint')
  request.r(i11477[6], i11477[7], 0, i11476, 'fixedEndPoint')
  i11476.segmentCount = i11477[8]
  i11476.totalLength = i11477[9]
  i11476.constraintIterations = i11477[10]
  i11476.gravity = new pc.Vec3( i11477[11], i11477[12], i11477[13] )
  i11476.pipeWidth = i11477[14]
  return i11476
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i11478 = root || request.c( 'BD_SpriteChange' )
  var i11479 = data
  request.r(i11479[0], i11479[1], 0, i11478, 'BD')
  request.r(i11479[2], i11479[3], 0, i11478, 'SR')
  request.r(i11479[4], i11479[5], 0, i11478, 'Default')
  request.r(i11479[6], i11479[7], 0, i11478, 'Picked')
  i11478.resetOnRelease = !!i11479[8]
  return i11478
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i11480 = root || request.c( 'MenuLevel' )
  var i11481 = data
  request.r(i11481[0], i11481[1], 0, i11480, 'menuLevelBtnUpdate')
  var i11483 = i11481[2]
  var i11482 = []
  for(var i = 0; i < i11483.length; i += 1) {
    i11482.push( request.d('MenuLevelData', i11483[i + 0]) );
  }
  i11480.AllSteps = i11482
  request.r(i11481[3], i11481[4], 0, i11480, 'buttonparent')
  var i11485 = i11481[5]
  var i11484 = []
  for(var i = 0; i < i11485.length; i += 2) {
  request.r(i11485[i + 0], i11485[i + 1], 2, i11484, '')
  }
  i11480.BtnsDotweenAnims = i11484
  var i11487 = i11481[6]
  var i11486 = []
  for(var i = 0; i < i11487.length; i += 2) {
  request.r(i11487[i + 0], i11487[i + 1], 2, i11486, '')
  }
  i11480.BtnsCols = i11486
  request.r(i11481[7], i11481[8], 0, i11480, 'mainGameView')
  request.r(i11481[9], i11481[10], 0, i11480, 'Storyboard')
  request.r(i11481[11], i11481[12], 0, i11480, 'BgMusic')
  request.r(i11481[13], i11481[14], 0, i11480, 'BgStoryMusic')
  request.r(i11481[15], i11481[16], 0, i11480, 'Hand_Tut1')
  request.r(i11481[17], i11481[18], 0, i11480, 'Button_Hand')
  var i11489 = i11481[19]
  var i11488 = []
  for(var i = 0; i < i11489.length; i += 2) {
  request.r(i11489[i + 0], i11489[i + 1], 2, i11488, '')
  }
  i11480.itemEnable_Onstart = i11488
  var i11491 = i11481[20]
  var i11490 = []
  for(var i = 0; i < i11491.length; i += 2) {
  request.r(i11491[i + 0], i11491[i + 1], 2, i11490, '')
  }
  i11480.itemDisable_Onstart = i11490
  var i11493 = i11481[21]
  var i11492 = []
  for(var i = 0; i < i11493.length; i += 2) {
  request.r(i11493[i + 0], i11493[i + 1], 2, i11492, '')
  }
  i11480.itemEnable_Oncomplete = i11492
  var i11495 = i11481[22]
  var i11494 = []
  for(var i = 0; i < i11495.length; i += 2) {
  request.r(i11495[i + 0], i11495[i + 1], 2, i11494, '')
  }
  i11480.itemDisable_Oncomplete = i11494
  i11480.levelKey = i11481[23]
  i11480.revealDirtyHoldTime = i11481[24]
  return i11480
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i11498 = root || request.c( 'MenuLevelData' )
  var i11499 = data
  i11498.Name = i11499[0]
  request.r(i11499[1], i11499[2], 0, i11498, 'UiBtn')
  request.r(i11499[3], i11499[4], 0, i11498, 'TickBtn')
  request.r(i11499[5], i11499[6], 0, i11498, 'ExclamationIcon')
  var i11501 = i11499[7]
  var i11500 = []
  for(var i = 0; i < i11501.length; i += 2) {
  request.r(i11501[i + 0], i11501[i + 1], 2, i11500, '')
  }
  i11498.Item_Dirty = i11500
  var i11503 = i11499[8]
  var i11502 = []
  for(var i = 0; i < i11503.length; i += 2) {
  request.r(i11503[i + 0], i11503[i + 1], 2, i11502, '')
  }
  i11498.Item_Clean = i11502
  request.r(i11499[9], i11499[10], 0, i11498, 'CompleteParticle')
  return i11498
}

Deserializers["IntroLevelAnim"] = function (request, data, root) {
  var i11510 = root || request.c( 'IntroLevelAnim' )
  var i11511 = data
  request.r(i11511[0], i11511[1], 0, i11510, 'menuLevel')
  i11510.lvlkey = i11511[2]
  request.r(i11511[3], i11511[4], 0, i11510, 'DressChangeObj')
  request.r(i11511[5], i11511[6], 0, i11510, 'DressChangeClip')
  return i11510
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i11512 = root || request.c( 'Level_PoseController' )
  var i11513 = data
  var i11515 = i11513[0]
  var i11514 = []
  for(var i = 0; i < i11515.length; i += 2) {
  request.r(i11515[i + 0], i11515[i + 1], 2, i11514, '')
  }
  i11512.itemToShow = i11514
  var i11517 = i11513[1]
  var i11516 = []
  for(var i = 0; i < i11517.length; i += 2) {
  request.r(i11517[i + 0], i11517[i + 1], 2, i11516, '')
  }
  i11512.itemToHide = i11516
  i11512.stepTarget = i11513[2]
  return i11512
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i11518 = root || request.c( 'BD_AnimationHelper' )
  var i11519 = data
  i11518.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i11519[0], i11518.OnAnimationComplete)
  request.r(i11519[1], i11519[2], 0, i11518, 'sfxClip')
  i11518.progBar = !!i11519[3]
  return i11518
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i11520 = root || request.c( 'SpriteButton' )
  var i11521 = data
  i11520.isLocked = !!i11521[0]
  i11520.lockMsg = i11521[1]
  i11520.onClick = request.d('UnityEngine.Events.UnityEvent', i11521[2], i11520.onClick)
  i11520.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i11521[3], i11520.onLockedClick)
  i11520.isLevelBtnSfx = !!i11521[4]
  request.r(i11521[5], i11521[6], 0, i11520, 'pivot')
  i11520.reductionChange = i11521[7]
  i11520.animationDuration = i11521[8]
  return i11520
}

Deserializers["DressChangeIntro"] = function (request, data, root) {
  var i11522 = root || request.c( 'DressChangeIntro' )
  var i11523 = data
  request.r(i11523[0], i11523[1], 0, i11522, 'menuLevel')
  request.r(i11523[2], i11523[3], 0, i11522, 'curtainMoveable')
  request.r(i11523[4], i11523[5], 0, i11522, 'curtainStatic')
  i11522.staticCurtainOnly = !!i11523[6]
  i11522.curtainFadeInDuration = i11523[7]
  i11522.curtainFadeInDelay = i11523[8]
  i11522.slideInOffsetX = i11523[9]
  i11522.slideInDuration = i11523[10]
  i11522.slideInEase = i11523[11]
  i11522.startDelay = i11523[12]
  request.r(i11523[13], i11523[14], 0, i11522, 'handSmall')
  request.r(i11523[15], i11523[16], 0, i11522, 'bone_3')
  i11522.handSmallBackwardAmount = i11523[17]
  i11522.bone3BackwardAmount = i11523[18]
  i11522.handPeekDuration = i11523[19]
  i11522.handPeekEase = i11523[20]
  request.r(i11523[21], i11523[22], 0, i11522, 'armCloth')
  i11522.armClothDelay = i11523[23]
  i11522.armClothDuration = i11523[24]
  i11522.armClothEase = i11523[25]
  request.r(i11523[26], i11523[27], 0, i11522, 'basket')
  i11522.basketOffsetX = i11523[28]
  i11522.basketSlideDelay = i11523[29]
  i11522.basketSlideDuration = i11523[30]
  i11522.basketSlideEase = i11523[31]
  request.r(i11523[32], i11523[33], 0, i11522, 'cloth')
  request.r(i11523[34], i11523[35], 0, i11522, 'clothRenderer')
  request.r(i11523[36], i11523[37], 0, i11522, 'clothPickedSprite')
  request.r(i11523[38], i11523[39], 0, i11522, 'clothBasketSprite')
  request.r(i11523[40], i11523[41], 0, i11522, 'handIndication')
  request.r(i11523[42], i11523[43], 0, i11522, 'basketDropTarget')
  i11522.dropRadius = i11523[44]
  i11522.dropJumpHeight = i11523[45]
  i11522.dropJumpDuration = i11523[46]
  i11522.dropSinkDuration = i11523[47]
  i11522.clothPickedSortingOrder = i11523[48]
  request.r(i11523[49], i11523[50], 0, i11522, 'ToolPlaceClip')
  i11522.OnIntroComplete = request.d('UnityEngine.Events.UnityEvent', i11523[51], i11522.OnIntroComplete)
  return i11522
}

Deserializers["MenuDraggable"] = function (request, data, root) {
  var i11524 = root || request.c( 'MenuDraggable' )
  var i11525 = data
  i11524.canDrag = !!i11525[0]
  i11524.returnToStartPosition = !!i11525[1]
  i11524.returnDuration = i11525[2]
  i11524.returnEase = i11525[3]
  i11524.ClampX_L = i11525[4]
  i11524.ClampX_H = i11525[5]
  i11524.ClampY_L = i11525[6]
  i11524.ClampY_H = i11525[7]
  request.r(i11525[8], i11525[9], 0, i11524, 'ToolTapClip')
  i11524.isPlaced = !!i11525[10]
  i11524.OnPicked = request.d('System.Action', i11525[11], i11524.OnPicked)
  i11524.OnReleased = request.d('System.Action', i11525[12], i11524.OnReleased)
  return i11524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i11526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i11527 = data
  i11526.name = i11527[0]
  i11526.atlasId = i11527[1]
  i11526.mipmapCount = i11527[2]
  i11526.hdr = !!i11527[3]
  i11526.size = i11527[4]
  i11526.anisoLevel = i11527[5]
  i11526.filterMode = i11527[6]
  var i11529 = i11527[7]
  var i11528 = []
  for(var i = 0; i < i11529.length; i += 4) {
    i11528.push( UnityEngine.Rect.MinMaxRect(i11529[i + 0], i11529[i + 1], i11529[i + 2], i11529[i + 3]) );
  }
  i11526.rects = i11528
  i11526.wrapU = i11527[8]
  i11526.wrapV = i11527[9]
  return i11526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i11532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i11533 = data
  i11532.name = i11533[0]
  i11532.index = i11533[1]
  i11532.startup = !!i11533[2]
  return i11532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i11534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i11535 = data
  i11534.aspect = i11535[0]
  i11534.orthographic = !!i11535[1]
  i11534.orthographicSize = i11535[2]
  i11534.backgroundColor = new pc.Color(i11535[3], i11535[4], i11535[5], i11535[6])
  i11534.nearClipPlane = i11535[7]
  i11534.farClipPlane = i11535[8]
  i11534.fieldOfView = i11535[9]
  i11534.depth = i11535[10]
  i11534.clearFlags = i11535[11]
  i11534.cullingMask = i11535[12]
  i11534.rect = i11535[13]
  request.r(i11535[14], i11535[15], 0, i11534, 'targetTexture')
  i11534.usePhysicalProperties = !!i11535[16]
  i11534.focalLength = i11535[17]
  i11534.sensorSize = new pc.Vec2( i11535[18], i11535[19] )
  i11534.lensShift = new pc.Vec2( i11535[20], i11535[21] )
  i11534.gateFit = i11535[22]
  i11534.commandBufferCount = i11535[23]
  i11534.cameraType = i11535[24]
  i11534.enabled = !!i11535[25]
  return i11534
}

Deserializers["CameraController"] = function (request, data, root) {
  var i11536 = root || request.c( 'CameraController' )
  var i11537 = data
  request.r(i11537[0], i11537[1], 0, i11536, 'cam')
  i11536.defaultPosition = new pc.Vec3( i11537[2], i11537[3], i11537[4] )
  i11536.defaultSize = i11537[5]
  i11536.defaultFOV = i11537[6]
  i11536.defaultDuration = i11537[7]
  i11536.defaultEase = i11537[8]
  return i11536
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i11538 = root || request.c( 'MusicSource' )
  var i11539 = data
  request.r(i11539[0], i11539[1], 0, i11538, 'source')
  return i11538
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i11540 = root || request.c( 'UI_Manager' )
  var i11541 = data
  i11540.levelCompleted = !!i11541[0]
  i11540.isPauseActive = !!i11541[1]
  i11540.loadIndex = i11541[2]
  request.r(i11541[3], i11541[4], 0, i11540, 'removeAdsButton')
  request.r(i11541[5], i11541[6], 0, i11540, 'pauseButton')
  request.r(i11541[7], i11541[8], 0, i11540, 'Fade_Img')
  request.r(i11541[9], i11541[10], 0, i11540, 'TopBarAnim')
  request.r(i11541[11], i11541[12], 0, i11540, 'MainPanel')
  request.r(i11541[13], i11541[14], 0, i11540, 'PausePanel')
  request.r(i11541[15], i11541[16], 0, i11540, 'PausePopUp')
  request.r(i11541[17], i11541[18], 0, i11540, 'PauseCanvasGroup')
  request.r(i11541[19], i11541[20], 0, i11540, 'RateUsPanel')
  request.r(i11541[21], i11541[22], 0, i11540, 'RateUsPopUp')
  request.r(i11541[23], i11541[24], 0, i11540, 'RemoveAdsPanel')
  request.r(i11541[25], i11541[26], 0, i11540, 'RemoveAdsPopUp')
  request.r(i11541[27], i11541[28], 0, i11540, 'RemoveAdsCanvasGroup')
  var i11543 = i11541[29]
  var i11542 = []
  for(var i = 0; i < i11543.length; i += 2) {
  request.r(i11543[i + 0], i11543[i + 1], 2, i11542, '')
  }
  i11540.RemoveAdsAnims = i11542
  i11540.showCompletePanel = !!i11541[30]
  var i11545 = i11541[31]
  var i11544 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i11545.length; i += 2) {
  request.r(i11545[i + 0], i11545[i + 1], 1, i11544, '')
  }
  i11540.thingsToDisableWhenCompletePanel = i11544
  request.r(i11541[32], i11541[33], 0, i11540, 'CompletePanel')
  request.r(i11541[34], i11541[35], 0, i11540, 'LevelIcon')
  request.r(i11541[36], i11541[37], 0, i11540, 'CompleteParticles')
  request.r(i11541[38], i11541[39], 0, i11540, 'progressBar')
  request.r(i11541[40], i11541[41], 0, i11540, 'progressText')
  request.r(i11541[42], i11541[43], 0, i11540, 'toolIcon1')
  request.r(i11541[44], i11541[45], 0, i11540, 'toolIcon2')
  request.r(i11541[46], i11541[47], 0, i11540, 'toolIcon3')
  request.r(i11541[48], i11541[49], 0, i11540, 'toolIcon4')
  request.r(i11541[50], i11541[51], 0, i11540, 'toolHolder')
  i11540.toolHolderRaisedY = i11541[52]
  i11540.toolHolderRaiseDuration = i11541[53]
  request.r(i11541[54], i11541[55], 0, i11540, 'target1')
  request.r(i11541[56], i11541[57], 0, i11540, 'target2')
  i11540.toolMoveDuration = i11541[58]
  i11540.currentIndex = i11541[59]
  var i11547 = i11541[60]
  var i11546 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i11547.length; i += 2) {
  request.r(i11547[i + 0], i11547[i + 1], 1, i11546, '')
  }
  i11540.allTools = i11546
  request.r(i11541[61], i11541[62], 0, i11540, 'clockProgress')
  request.r(i11541[63], i11541[64], 0, i11540, 'clockProgressFill')
  request.r(i11541[65], i11541[66], 0, i11540, 'clockAudio')
  i11540.moveDistance = i11541[67]
  i11540.animationDuration = i11541[68]
  i11540.greyBgChildName = i11541[69]
  i11540.pushOffset = i11541[70]
  return i11540
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i11550 = root || request.c( 'GameManagerPlayable' )
  var i11551 = data
  request.r(i11551[0], i11551[1], 0, i11550, 'endParticles')
  request.r(i11551[2], i11551[3], 0, i11550, 'stepCompleteParticles')
  request.r(i11551[4], i11551[5], 0, i11550, 'DefaultMat')
  request.r(i11551[6], i11551[7], 0, i11550, 'BG_Music')
  request.r(i11551[8], i11551[9], 0, i11550, 'restoreEffectShader')
  request.r(i11551[10], i11551[11], 0, i11550, 'stickerEffectShader')
  i11550.isComplete = !!i11551[12]
  i11550.isPaused = !!i11551[13]
  request.r(i11551[14], i11551[15], 0, i11550, 'currentLevel')
  i11550.startLevelOnPlay = !!i11551[16]
  i11550.currentLevelNo = i11551[17]
  return i11550
}

Deserializers["AudioController"] = function (request, data, root) {
  var i11552 = root || request.c( 'AudioController' )
  var i11553 = data
  request.r(i11553[0], i11553[1], 0, i11552, 'MainMixer')
  request.r(i11553[2], i11553[3], 0, i11552, 'UiClick')
  request.r(i11553[4], i11553[5], 0, i11552, 'UiClickSource')
  var i11555 = i11553[6]
  var i11554 = []
  for(var i = 0; i < i11555.length; i += 2) {
  request.r(i11555[i + 0], i11555[i + 1], 2, i11554, '')
  }
  i11552.SfxSources = i11554
  var i11557 = i11553[7]
  var i11556 = []
  for(var i = 0; i < i11557.length; i += 2) {
  request.r(i11557[i + 0], i11557[i + 1], 2, i11556, '')
  }
  i11552.AllClips = i11556
  return i11552
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i11560 = root || request.c( 'PlayableHudRuntime' )
  var i11561 = data
  return i11560
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i11562 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i11563 = data
  request.r(i11563[0], i11563[1], 0, i11562, 'm_FirstSelected')
  i11562.m_sendNavigationEvents = !!i11563[2]
  i11562.m_DragThreshold = i11563[3]
  return i11562
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i11564 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i11565 = data
  i11564.m_HorizontalAxis = i11565[0]
  i11564.m_VerticalAxis = i11565[1]
  i11564.m_SubmitButton = i11565[2]
  i11564.m_CancelButton = i11565[3]
  i11564.m_InputActionsPerSecond = i11565[4]
  i11564.m_RepeatDelay = i11565[5]
  i11564.m_ForceModuleActive = !!i11565[6]
  i11564.m_SendPointerHoverToParent = !!i11565[7]
  return i11564
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i11566 = root || request.c( 'PlayableRouter' )
  var i11567 = data
  var i11569 = i11567[0]
  var i11568 = []
  for(var i = 0; i < i11569.length; i += 2) {
  request.r(i11569[i + 0], i11569[i + 1], 2, i11568, '')
  }
  i11566.menuObjects = i11568
  var i11571 = i11567[1]
  var i11570 = []
  for(var i = 0; i < i11571.length; i += 2) {
  request.r(i11571[i + 0], i11571[i + 1], 2, i11570, '')
  }
  i11566.gameplayObjects = i11570
  var i11573 = i11567[2]
  var i11572 = []
  for(var i = 0; i < i11573.length; i += 1) {
    i11572.push( request.d('PlayableRouter+SubLevelSlot', i11573[i + 0]) );
  }
  i11566.subLevels = i11572
  i11566.fadeDuration = i11567[3]
  i11566.onIntroStart = request.d('UnityEngine.Events.UnityEvent', i11567[4], i11566.onIntroStart)
  var i11575 = i11567[5]
  var i11574 = []
  for(var i = 0; i < i11575.length; i += 2) {
  request.r(i11575[i + 0], i11575[i + 1], 2, i11574, '')
  }
  i11566.hideDuringIntro = i11574
  i11566.lockedMessage = i11567[6]
  i11566.lockedTapsToCTA = i11567[7]
  return i11566
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i11578 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i11579 = data
  request.r(i11579[0], i11579[1], 0, i11578, 'button')
  request.r(i11579[2], i11579[3], 0, i11578, 'level')
  request.r(i11579[4], i11579[5], 0, i11578, 'intro')
  return i11578
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i11580 = root || request.c( 'ToastManager' )
  var i11581 = data
  request.r(i11581[0], i11581[1], 0, i11580, 'toastPanel')
  request.r(i11581[2], i11581[3], 0, i11580, 'toastPopup')
  request.r(i11581[4], i11581[5], 0, i11580, 'canvasGroup')
  request.r(i11581[6], i11581[7], 0, i11580, 'toastText')
  i11580.startY = i11581[8]
  i11580.visibleY = i11581[9]
  i11580.endY = i11581[10]
  i11580.animationTime = i11581[11]
  i11580.animationTimeUp = i11581[12]
  return i11580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i11582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i11583 = data
  i11582.m_Alpha = i11583[0]
  i11582.m_Interactable = !!i11583[1]
  i11582.m_BlocksRaycasts = !!i11583[2]
  i11582.m_IgnoreParentGroups = !!i11583[3]
  i11582.enabled = !!i11583[4]
  return i11582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i11584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i11585 = data
  i11584.ambientIntensity = i11585[0]
  i11584.reflectionIntensity = i11585[1]
  i11584.ambientMode = i11585[2]
  i11584.ambientLight = new pc.Color(i11585[3], i11585[4], i11585[5], i11585[6])
  i11584.ambientSkyColor = new pc.Color(i11585[7], i11585[8], i11585[9], i11585[10])
  i11584.ambientGroundColor = new pc.Color(i11585[11], i11585[12], i11585[13], i11585[14])
  i11584.ambientEquatorColor = new pc.Color(i11585[15], i11585[16], i11585[17], i11585[18])
  i11584.fogColor = new pc.Color(i11585[19], i11585[20], i11585[21], i11585[22])
  i11584.fogEndDistance = i11585[23]
  i11584.fogStartDistance = i11585[24]
  i11584.fogDensity = i11585[25]
  i11584.fog = !!i11585[26]
  request.r(i11585[27], i11585[28], 0, i11584, 'skybox')
  i11584.fogMode = i11585[29]
  var i11587 = i11585[30]
  var i11586 = []
  for(var i = 0; i < i11587.length; i += 1) {
    i11586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i11587[i + 0]) );
  }
  i11584.lightmaps = i11586
  i11584.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i11585[31], i11584.lightProbes)
  i11584.lightmapsMode = i11585[32]
  i11584.mixedBakeMode = i11585[33]
  i11584.environmentLightingMode = i11585[34]
  i11584.ambientProbe = new pc.SphericalHarmonicsL2(i11585[35])
  request.r(i11585[36], i11585[37], 0, i11584, 'customReflection')
  request.r(i11585[38], i11585[39], 0, i11584, 'defaultReflection')
  i11584.defaultReflectionMode = i11585[40]
  i11584.defaultReflectionResolution = i11585[41]
  i11584.sunLightObjectId = i11585[42]
  i11584.pixelLightCount = i11585[43]
  i11584.defaultReflectionHDR = !!i11585[44]
  i11584.hasLightDataAsset = !!i11585[45]
  i11584.hasManualGenerate = !!i11585[46]
  return i11584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i11590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i11591 = data
  request.r(i11591[0], i11591[1], 0, i11590, 'lightmapColor')
  request.r(i11591[2], i11591[3], 0, i11590, 'lightmapDirection')
  request.r(i11591[4], i11591[5], 0, i11590, 'shadowMask')
  return i11590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i11592 = root || new UnityEngine.LightProbes()
  var i11593 = data
  return i11592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i11598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i11599 = data
  var i11601 = i11599[0]
  var i11600 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i11601.length; i += 1) {
    i11600.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i11601[i + 0]));
  }
  i11598.ShaderCompilationErrors = i11600
  i11598.name = i11599[1]
  i11598.guid = i11599[2]
  var i11603 = i11599[3]
  var i11602 = []
  for(var i = 0; i < i11603.length; i += 1) {
    i11602.push( i11603[i + 0] );
  }
  i11598.shaderDefinedKeywords = i11602
  var i11605 = i11599[4]
  var i11604 = []
  for(var i = 0; i < i11605.length; i += 1) {
    i11604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i11605[i + 0]) );
  }
  i11598.passes = i11604
  var i11607 = i11599[5]
  var i11606 = []
  for(var i = 0; i < i11607.length; i += 1) {
    i11606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i11607[i + 0]) );
  }
  i11598.usePasses = i11606
  var i11609 = i11599[6]
  var i11608 = []
  for(var i = 0; i < i11609.length; i += 1) {
    i11608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i11609[i + 0]) );
  }
  i11598.defaultParameterValues = i11608
  request.r(i11599[7], i11599[8], 0, i11598, 'unityFallbackShader')
  i11598.readDepth = !!i11599[9]
  i11598.hasDepthOnlyPass = !!i11599[10]
  i11598.isCreatedByShaderGraph = !!i11599[11]
  i11598.disableBatching = !!i11599[12]
  i11598.compiled = !!i11599[13]
  return i11598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i11612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i11613 = data
  i11612.shaderName = i11613[0]
  i11612.errorMessage = i11613[1]
  return i11612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i11618 = root || new pc.UnityShaderPass()
  var i11619 = data
  i11618.id = i11619[0]
  i11618.subShaderIndex = i11619[1]
  i11618.name = i11619[2]
  i11618.passType = i11619[3]
  i11618.grabPassTextureName = i11619[4]
  i11618.usePass = !!i11619[5]
  i11618.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11619[6], i11618.zTest)
  i11618.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11619[7], i11618.zWrite)
  i11618.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11619[8], i11618.culling)
  i11618.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i11619[9], i11618.blending)
  i11618.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i11619[10], i11618.alphaBlending)
  i11618.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11619[11], i11618.colorWriteMask)
  i11618.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11619[12], i11618.offsetUnits)
  i11618.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11619[13], i11618.offsetFactor)
  i11618.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11619[14], i11618.stencilRef)
  i11618.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11619[15], i11618.stencilReadMask)
  i11618.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11619[16], i11618.stencilWriteMask)
  i11618.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i11619[17], i11618.stencilOp)
  i11618.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i11619[18], i11618.stencilOpFront)
  i11618.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i11619[19], i11618.stencilOpBack)
  var i11621 = i11619[20]
  var i11620 = []
  for(var i = 0; i < i11621.length; i += 1) {
    i11620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i11621[i + 0]) );
  }
  i11618.tags = i11620
  var i11623 = i11619[21]
  var i11622 = []
  for(var i = 0; i < i11623.length; i += 1) {
    i11622.push( i11623[i + 0] );
  }
  i11618.passDefinedKeywords = i11622
  var i11625 = i11619[22]
  var i11624 = []
  for(var i = 0; i < i11625.length; i += 1) {
    i11624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i11625[i + 0]) );
  }
  i11618.passDefinedKeywordGroups = i11624
  var i11627 = i11619[23]
  var i11626 = []
  for(var i = 0; i < i11627.length; i += 1) {
    i11626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i11627[i + 0]) );
  }
  i11618.variants = i11626
  var i11629 = i11619[24]
  var i11628 = []
  for(var i = 0; i < i11629.length; i += 1) {
    i11628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i11629[i + 0]) );
  }
  i11618.excludedVariants = i11628
  i11618.hasDepthReader = !!i11619[25]
  return i11618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i11630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i11631 = data
  i11630.val = i11631[0]
  i11630.name = i11631[1]
  return i11630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i11632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i11633 = data
  i11632.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11633[0], i11632.src)
  i11632.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11633[1], i11632.dst)
  i11632.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11633[2], i11632.op)
  return i11632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i11634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i11635 = data
  i11634.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11635[0], i11634.pass)
  i11634.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11635[1], i11634.fail)
  i11634.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11635[2], i11634.zFail)
  i11634.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i11635[3], i11634.comp)
  return i11634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i11638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i11639 = data
  i11638.name = i11639[0]
  i11638.value = i11639[1]
  return i11638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i11642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i11643 = data
  var i11645 = i11643[0]
  var i11644 = []
  for(var i = 0; i < i11645.length; i += 1) {
    i11644.push( i11645[i + 0] );
  }
  i11642.keywords = i11644
  i11642.hasDiscard = !!i11643[1]
  return i11642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i11648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i11649 = data
  i11648.passId = i11649[0]
  i11648.subShaderIndex = i11649[1]
  var i11651 = i11649[2]
  var i11650 = []
  for(var i = 0; i < i11651.length; i += 1) {
    i11650.push( i11651[i + 0] );
  }
  i11648.keywords = i11650
  i11648.vertexProgram = i11649[3]
  i11648.fragmentProgram = i11649[4]
  i11648.exportedForWebGl2 = !!i11649[5]
  i11648.readDepth = !!i11649[6]
  return i11648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i11654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i11655 = data
  request.r(i11655[0], i11655[1], 0, i11654, 'shader')
  i11654.pass = i11655[2]
  return i11654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i11658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i11659 = data
  i11658.name = i11659[0]
  i11658.type = i11659[1]
  i11658.value = new pc.Vec4( i11659[2], i11659[3], i11659[4], i11659[5] )
  i11658.textureValue = i11659[6]
  i11658.shaderPropertyFlag = i11659[7]
  return i11658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i11660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i11661 = data
  i11660.name = i11661[0]
  request.r(i11661[1], i11661[2], 0, i11660, 'texture')
  i11660.aabb = i11661[3]
  i11660.vertices = i11661[4]
  i11660.triangles = i11661[5]
  i11660.textureRect = UnityEngine.Rect.MinMaxRect(i11661[6], i11661[7], i11661[8], i11661[9])
  i11660.packedRect = UnityEngine.Rect.MinMaxRect(i11661[10], i11661[11], i11661[12], i11661[13])
  i11660.border = new pc.Vec4( i11661[14], i11661[15], i11661[16], i11661[17] )
  i11660.transparency = i11661[18]
  i11660.bounds = i11661[19]
  i11660.pixelsPerUnit = i11661[20]
  i11660.textureWidth = i11661[21]
  i11660.textureHeight = i11661[22]
  i11660.nativeSize = new pc.Vec2( i11661[23], i11661[24] )
  i11660.pivot = new pc.Vec2( i11661[25], i11661[26] )
  i11660.textureRectOffset = new pc.Vec2( i11661[27], i11661[28] )
  return i11660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i11662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i11663 = data
  i11662.name = i11663[0]
  return i11662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i11664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i11665 = data
  i11664.name = i11665[0]
  i11664.wrapMode = i11665[1]
  i11664.isLooping = !!i11665[2]
  i11664.length = i11665[3]
  var i11667 = i11665[4]
  var i11666 = []
  for(var i = 0; i < i11667.length; i += 1) {
    i11666.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i11667[i + 0]) );
  }
  i11664.curves = i11666
  var i11669 = i11665[5]
  var i11668 = []
  for(var i = 0; i < i11669.length; i += 1) {
    i11668.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i11669[i + 0]) );
  }
  i11664.events = i11668
  i11664.halfPrecision = !!i11665[6]
  i11664._frameRate = i11665[7]
  i11664.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i11665[8], i11664.localBounds)
  i11664.hasMuscleCurves = !!i11665[9]
  var i11671 = i11665[10]
  var i11670 = []
  for(var i = 0; i < i11671.length; i += 1) {
    i11670.push( i11671[i + 0] );
  }
  i11664.clipMuscleConstant = i11670
  i11664.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i11665[11], i11664.clipBindingConstant)
  return i11664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i11674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i11675 = data
  i11674.path = i11675[0]
  i11674.hash = i11675[1]
  i11674.componentType = i11675[2]
  i11674.property = i11675[3]
  i11674.keys = i11675[4]
  var i11677 = i11675[5]
  var i11676 = []
  for(var i = 0; i < i11677.length; i += 1) {
    i11676.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i11677[i + 0]) );
  }
  i11674.objectReferenceKeys = i11676
  return i11674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i11680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i11681 = data
  i11680.time = i11681[0]
  request.r(i11681[1], i11681[2], 0, i11680, 'value')
  return i11680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i11684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i11685 = data
  i11684.functionName = i11685[0]
  i11684.floatParameter = i11685[1]
  i11684.intParameter = i11685[2]
  i11684.stringParameter = i11685[3]
  request.r(i11685[4], i11685[5], 0, i11684, 'objectReferenceParameter')
  i11684.time = i11685[6]
  return i11684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i11686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i11687 = data
  i11686.center = new pc.Vec3( i11687[0], i11687[1], i11687[2] )
  i11686.extends = new pc.Vec3( i11687[3], i11687[4], i11687[5] )
  return i11686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i11690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i11691 = data
  var i11693 = i11691[0]
  var i11692 = []
  for(var i = 0; i < i11693.length; i += 1) {
    i11692.push( i11693[i + 0] );
  }
  i11690.genericBindings = i11692
  var i11695 = i11691[1]
  var i11694 = []
  for(var i = 0; i < i11695.length; i += 1) {
    i11694.push( i11695[i + 0] );
  }
  i11690.pptrCurveMapping = i11694
  return i11690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i11696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i11697 = data
  i11696.name = i11697[0]
  i11696.ascent = i11697[1]
  i11696.originalLineHeight = i11697[2]
  i11696.fontSize = i11697[3]
  var i11699 = i11697[4]
  var i11698 = []
  for(var i = 0; i < i11699.length; i += 1) {
    i11698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i11699[i + 0]) );
  }
  i11696.characterInfo = i11698
  request.r(i11697[5], i11697[6], 0, i11696, 'texture')
  i11696.originalFontSize = i11697[7]
  return i11696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i11702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i11703 = data
  i11702.index = i11703[0]
  i11702.advance = i11703[1]
  i11702.bearing = i11703[2]
  i11702.glyphWidth = i11703[3]
  i11702.glyphHeight = i11703[4]
  i11702.minX = i11703[5]
  i11702.maxX = i11703[6]
  i11702.minY = i11703[7]
  i11702.maxY = i11703[8]
  i11702.uvBottomLeftX = i11703[9]
  i11702.uvBottomLeftY = i11703[10]
  i11702.uvBottomRightX = i11703[11]
  i11702.uvBottomRightY = i11703[12]
  i11702.uvTopLeftX = i11703[13]
  i11702.uvTopLeftY = i11703[14]
  i11702.uvTopRightX = i11703[15]
  i11702.uvTopRightY = i11703[16]
  return i11702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i11704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i11705 = data
  i11704.name = i11705[0]
  var i11707 = i11705[1]
  var i11706 = []
  for(var i = 0; i < i11707.length; i += 1) {
    i11706.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i11707[i + 0]) );
  }
  i11704.layers = i11706
  var i11709 = i11705[2]
  var i11708 = []
  for(var i = 0; i < i11709.length; i += 1) {
    i11708.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i11709[i + 0]) );
  }
  i11704.parameters = i11708
  i11704.animationClips = i11705[3]
  i11704.avatarUnsupported = i11705[4]
  return i11704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i11712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i11713 = data
  i11712.name = i11713[0]
  i11712.defaultWeight = i11713[1]
  i11712.blendingMode = i11713[2]
  i11712.avatarMask = i11713[3]
  i11712.syncedLayerIndex = i11713[4]
  i11712.syncedLayerAffectsTiming = !!i11713[5]
  i11712.syncedLayers = i11713[6]
  i11712.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i11713[7], i11712.stateMachine)
  return i11712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i11714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i11715 = data
  i11714.id = i11715[0]
  i11714.name = i11715[1]
  i11714.path = i11715[2]
  var i11717 = i11715[3]
  var i11716 = []
  for(var i = 0; i < i11717.length; i += 1) {
    i11716.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i11717[i + 0]) );
  }
  i11714.states = i11716
  var i11719 = i11715[4]
  var i11718 = []
  for(var i = 0; i < i11719.length; i += 1) {
    i11718.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i11719[i + 0]) );
  }
  i11714.machines = i11718
  var i11721 = i11715[5]
  var i11720 = []
  for(var i = 0; i < i11721.length; i += 1) {
    i11720.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i11721[i + 0]) );
  }
  i11714.entryStateTransitions = i11720
  var i11723 = i11715[6]
  var i11722 = []
  for(var i = 0; i < i11723.length; i += 1) {
    i11722.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i11723[i + 0]) );
  }
  i11714.exitStateTransitions = i11722
  var i11725 = i11715[7]
  var i11724 = []
  for(var i = 0; i < i11725.length; i += 1) {
    i11724.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i11725[i + 0]) );
  }
  i11714.anyStateTransitions = i11724
  i11714.defaultStateId = i11715[8]
  return i11714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i11728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i11729 = data
  i11728.id = i11729[0]
  i11728.name = i11729[1]
  i11728.cycleOffset = i11729[2]
  i11728.cycleOffsetParameter = i11729[3]
  i11728.cycleOffsetParameterActive = !!i11729[4]
  i11728.mirror = !!i11729[5]
  i11728.mirrorParameter = i11729[6]
  i11728.mirrorParameterActive = !!i11729[7]
  i11728.motionId = i11729[8]
  i11728.nameHash = i11729[9]
  i11728.fullPathHash = i11729[10]
  i11728.speed = i11729[11]
  i11728.speedParameter = i11729[12]
  i11728.speedParameterActive = !!i11729[13]
  i11728.tag = i11729[14]
  i11728.tagHash = i11729[15]
  i11728.writeDefaultValues = !!i11729[16]
  var i11731 = i11729[17]
  var i11730 = []
  for(var i = 0; i < i11731.length; i += 2) {
  request.r(i11731[i + 0], i11731[i + 1], 2, i11730, '')
  }
  i11728.behaviours = i11730
  var i11733 = i11729[18]
  var i11732 = []
  for(var i = 0; i < i11733.length; i += 1) {
    i11732.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i11733[i + 0]) );
  }
  i11728.transitions = i11732
  return i11728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i11738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i11739 = data
  i11738.fullPath = i11739[0]
  i11738.canTransitionToSelf = !!i11739[1]
  i11738.duration = i11739[2]
  i11738.exitTime = i11739[3]
  i11738.hasExitTime = !!i11739[4]
  i11738.hasFixedDuration = !!i11739[5]
  i11738.interruptionSource = i11739[6]
  i11738.offset = i11739[7]
  i11738.orderedInterruption = !!i11739[8]
  i11738.destinationStateId = i11739[9]
  i11738.isExit = !!i11739[10]
  i11738.mute = !!i11739[11]
  i11738.solo = !!i11739[12]
  var i11741 = i11739[13]
  var i11740 = []
  for(var i = 0; i < i11741.length; i += 1) {
    i11740.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i11741[i + 0]) );
  }
  i11738.conditions = i11740
  return i11738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i11746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i11747 = data
  i11746.destinationStateId = i11747[0]
  i11746.isExit = !!i11747[1]
  i11746.mute = !!i11747[2]
  i11746.solo = !!i11747[3]
  var i11749 = i11747[4]
  var i11748 = []
  for(var i = 0; i < i11749.length; i += 1) {
    i11748.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i11749[i + 0]) );
  }
  i11746.conditions = i11748
  return i11746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i11752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i11753 = data
  i11752.mode = i11753[0]
  i11752.parameter = i11753[1]
  i11752.threshold = i11753[2]
  return i11752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i11756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i11757 = data
  i11756.defaultBool = !!i11757[0]
  i11756.defaultFloat = i11757[1]
  i11756.defaultInt = i11757[2]
  i11756.name = i11757[3]
  i11756.nameHash = i11757[4]
  i11756.type = i11757[5]
  return i11756
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i11758 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i11759 = data
  i11758.useSafeMode = !!i11759[0]
  i11758.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i11759[1], i11758.safeModeOptions)
  i11758.timeScale = i11759[2]
  i11758.unscaledTimeScale = i11759[3]
  i11758.useSmoothDeltaTime = !!i11759[4]
  i11758.maxSmoothUnscaledTime = i11759[5]
  i11758.rewindCallbackMode = i11759[6]
  i11758.showUnityEditorReport = !!i11759[7]
  i11758.logBehaviour = i11759[8]
  i11758.drawGizmos = !!i11759[9]
  i11758.defaultRecyclable = !!i11759[10]
  i11758.defaultAutoPlay = i11759[11]
  i11758.defaultUpdateType = i11759[12]
  i11758.defaultTimeScaleIndependent = !!i11759[13]
  i11758.defaultEaseType = i11759[14]
  i11758.defaultEaseOvershootOrAmplitude = i11759[15]
  i11758.defaultEasePeriod = i11759[16]
  i11758.defaultAutoKill = !!i11759[17]
  i11758.defaultLoopType = i11759[18]
  i11758.debugMode = !!i11759[19]
  i11758.debugStoreTargetId = !!i11759[20]
  i11758.showPreviewPanel = !!i11759[21]
  i11758.storeSettingsLocation = i11759[22]
  i11758.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i11759[23], i11758.modules)
  i11758.createASMDEF = !!i11759[24]
  i11758.showPlayingTweens = !!i11759[25]
  i11758.showPausedTweens = !!i11759[26]
  return i11758
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i11760 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i11761 = data
  i11760.logBehaviour = i11761[0]
  i11760.nestedTweenFailureBehaviour = i11761[1]
  return i11760
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i11762 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i11763 = data
  i11762.showPanel = !!i11763[0]
  i11762.audioEnabled = !!i11763[1]
  i11762.physicsEnabled = !!i11763[2]
  i11762.physics2DEnabled = !!i11763[3]
  i11762.spriteEnabled = !!i11763[4]
  i11762.uiEnabled = !!i11763[5]
  i11762.textMeshProEnabled = !!i11763[6]
  i11762.tk2DEnabled = !!i11763[7]
  i11762.deAudioEnabled = !!i11763[8]
  i11762.deUnityExtendedEnabled = !!i11763[9]
  i11762.epoOutlineEnabled = !!i11763[10]
  return i11762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i11764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i11765 = data
  var i11767 = i11765[0]
  var i11766 = []
  for(var i = 0; i < i11767.length; i += 1) {
    i11766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i11767[i + 0]) );
  }
  i11764.files = i11766
  i11764.componentToPrefabIds = i11765[1]
  return i11764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i11770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i11771 = data
  i11770.path = i11771[0]
  request.r(i11771[1], i11771[2], 0, i11770, 'unityObject')
  return i11770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i11772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i11773 = data
  var i11775 = i11773[0]
  var i11774 = []
  for(var i = 0; i < i11775.length; i += 1) {
    i11774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i11775[i + 0]) );
  }
  i11772.scriptsExecutionOrder = i11774
  var i11777 = i11773[1]
  var i11776 = []
  for(var i = 0; i < i11777.length; i += 1) {
    i11776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i11777[i + 0]) );
  }
  i11772.sortingLayers = i11776
  var i11779 = i11773[2]
  var i11778 = []
  for(var i = 0; i < i11779.length; i += 1) {
    i11778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i11779[i + 0]) );
  }
  i11772.cullingLayers = i11778
  i11772.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i11773[3], i11772.timeSettings)
  i11772.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i11773[4], i11772.physicsSettings)
  i11772.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i11773[5], i11772.physics2DSettings)
  i11772.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i11773[6], i11772.qualitySettings)
  i11772.enableRealtimeShadows = !!i11773[7]
  i11772.enableAutoInstancing = !!i11773[8]
  i11772.enableStaticBatching = !!i11773[9]
  i11772.enableDynamicBatching = !!i11773[10]
  i11772.usePreservativeDynamicBatching = !!i11773[11]
  i11772.lightmapEncodingQuality = i11773[12]
  i11772.desiredColorSpace = i11773[13]
  var i11781 = i11773[14]
  var i11780 = []
  for(var i = 0; i < i11781.length; i += 1) {
    i11780.push( i11781[i + 0] );
  }
  i11772.allTags = i11780
  return i11772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i11784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i11785 = data
  i11784.name = i11785[0]
  i11784.value = i11785[1]
  return i11784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i11788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i11789 = data
  i11788.id = i11789[0]
  i11788.name = i11789[1]
  i11788.value = i11789[2]
  return i11788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i11792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i11793 = data
  i11792.id = i11793[0]
  i11792.name = i11793[1]
  return i11792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i11794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i11795 = data
  i11794.fixedDeltaTime = i11795[0]
  i11794.maximumDeltaTime = i11795[1]
  i11794.timeScale = i11795[2]
  i11794.maximumParticleTimestep = i11795[3]
  return i11794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i11796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i11797 = data
  i11796.gravity = new pc.Vec3( i11797[0], i11797[1], i11797[2] )
  i11796.defaultSolverIterations = i11797[3]
  i11796.bounceThreshold = i11797[4]
  i11796.autoSyncTransforms = !!i11797[5]
  i11796.autoSimulation = !!i11797[6]
  var i11799 = i11797[7]
  var i11798 = []
  for(var i = 0; i < i11799.length; i += 1) {
    i11798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i11799[i + 0]) );
  }
  i11796.collisionMatrix = i11798
  return i11796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i11802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i11803 = data
  i11802.enabled = !!i11803[0]
  i11802.layerId = i11803[1]
  i11802.otherLayerId = i11803[2]
  return i11802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i11804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i11805 = data
  request.r(i11805[0], i11805[1], 0, i11804, 'material')
  i11804.gravity = new pc.Vec2( i11805[2], i11805[3] )
  i11804.positionIterations = i11805[4]
  i11804.velocityIterations = i11805[5]
  i11804.velocityThreshold = i11805[6]
  i11804.maxLinearCorrection = i11805[7]
  i11804.maxAngularCorrection = i11805[8]
  i11804.maxTranslationSpeed = i11805[9]
  i11804.maxRotationSpeed = i11805[10]
  i11804.baumgarteScale = i11805[11]
  i11804.baumgarteTOIScale = i11805[12]
  i11804.timeToSleep = i11805[13]
  i11804.linearSleepTolerance = i11805[14]
  i11804.angularSleepTolerance = i11805[15]
  i11804.defaultContactOffset = i11805[16]
  i11804.autoSimulation = !!i11805[17]
  i11804.queriesHitTriggers = !!i11805[18]
  i11804.queriesStartInColliders = !!i11805[19]
  i11804.callbacksOnDisable = !!i11805[20]
  i11804.reuseCollisionCallbacks = !!i11805[21]
  i11804.autoSyncTransforms = !!i11805[22]
  var i11807 = i11805[23]
  var i11806 = []
  for(var i = 0; i < i11807.length; i += 1) {
    i11806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i11807[i + 0]) );
  }
  i11804.collisionMatrix = i11806
  return i11804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i11810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i11811 = data
  i11810.enabled = !!i11811[0]
  i11810.layerId = i11811[1]
  i11810.otherLayerId = i11811[2]
  return i11810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i11812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i11813 = data
  var i11815 = i11813[0]
  var i11814 = []
  for(var i = 0; i < i11815.length; i += 1) {
    i11814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i11815[i + 0]) );
  }
  i11812.qualityLevels = i11814
  var i11817 = i11813[1]
  var i11816 = []
  for(var i = 0; i < i11817.length; i += 1) {
    i11816.push( i11817[i + 0] );
  }
  i11812.names = i11816
  i11812.shadows = i11813[2]
  i11812.anisotropicFiltering = i11813[3]
  i11812.antiAliasing = i11813[4]
  i11812.lodBias = i11813[5]
  i11812.shadowCascades = i11813[6]
  i11812.shadowDistance = i11813[7]
  i11812.shadowmaskMode = i11813[8]
  i11812.shadowProjection = i11813[9]
  i11812.shadowResolution = i11813[10]
  i11812.softParticles = !!i11813[11]
  i11812.softVegetation = !!i11813[12]
  i11812.activeColorSpace = i11813[13]
  i11812.desiredColorSpace = i11813[14]
  i11812.masterTextureLimit = i11813[15]
  i11812.maxQueuedFrames = i11813[16]
  i11812.particleRaycastBudget = i11813[17]
  i11812.pixelLightCount = i11813[18]
  i11812.realtimeReflectionProbes = !!i11813[19]
  i11812.shadowCascade2Split = i11813[20]
  i11812.shadowCascade4Split = new pc.Vec3( i11813[21], i11813[22], i11813[23] )
  i11812.streamingMipmapsActive = !!i11813[24]
  i11812.vSyncCount = i11813[25]
  i11812.asyncUploadBufferSize = i11813[26]
  i11812.asyncUploadTimeSlice = i11813[27]
  i11812.billboardsFaceCameraPosition = !!i11813[28]
  i11812.shadowNearPlaneOffset = i11813[29]
  i11812.streamingMipmapsMemoryBudget = i11813[30]
  i11812.maximumLODLevel = i11813[31]
  i11812.streamingMipmapsAddAllCameras = !!i11813[32]
  i11812.streamingMipmapsMaxLevelReduction = i11813[33]
  i11812.streamingMipmapsRenderersPerFrame = i11813[34]
  i11812.resolutionScalingFixedDPIFactor = i11813[35]
  i11812.streamingMipmapsMaxFileIORequests = i11813[36]
  i11812.currentQualityLevel = i11813[37]
  return i11812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i11820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i11821 = data
  var i11823 = i11821[0]
  var i11822 = []
  for(var i = 0; i < i11823.length; i += 1) {
    i11822.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i11823[i + 0]) );
  }
  i11820.groups = i11822
  var i11825 = i11821[1]
  var i11824 = []
  for(var i = 0; i < i11825.length; i += 1) {
    i11824.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i11825[i + 0]) );
  }
  i11820.snapshots = i11824
  return i11820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i11828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i11829 = data
  i11828.id = i11829[0]
  i11828.childGroupIds = i11829[1]
  i11828.name = i11829[2]
  return i11828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i11832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i11833 = data
  i11832.id = i11833[0]
  var i11835 = i11833[1]
  var i11834 = []
  for(var i = 0; i < i11835.length; i += 1) {
    i11834.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i11835[i + 0]) );
  }
  i11832.parameters = i11834
  return i11832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i11838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i11839 = data
  i11838.name = i11839[0]
  i11838.value = i11839[1]
  return i11838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i11842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i11843 = data
  i11842.weight = i11843[0]
  i11842.vertices = i11843[1]
  i11842.normals = i11843[2]
  i11842.tangents = i11843[3]
  return i11842
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[82],"83":[9],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[40],"93":[40],"94":[40],"95":[40],"96":[40],"97":[40],"98":[40],"99":[40],"100":[40],"101":[40],"102":[40],"103":[40],"104":[40],"105":[9],"106":[49],"107":[108],"109":[108],"8":[7],"110":[34],"46":[26],"111":[29],"112":[26],"113":[114],"115":[114],"116":[14],"56":[29],"117":[26],"118":[25],"36":[26],"119":[7],"120":[7],"12":[8],"16":[15,7],"121":[7],"11":[8],"122":[7],"123":[7],"124":[7],"125":[7],"126":[7],"127":[7],"128":[7],"129":[7],"130":[7],"131":[15,7],"132":[7],"133":[7],"134":[7],"135":[7],"18":[15,7],"136":[7],"137":[68],"138":[68],"69":[68],"139":[68],"140":[9],"141":[9]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","DG.Tweening.DOTweenAnimation","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Button","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Level1_Cloth_Playable_Step1to4","UnityEngine.GameObject","BasicDrag","UnityEngine.SpriteRenderer","BD_CameraFollow","Level1_SurfController","UnityEngine.BoxCollider2D","RotaryTimerKnob","UnityEngine.AudioClip","UnityEngine.AudioSource","PlayableCTA","UnityEngine.LineRenderer","TextureOffsetScroller","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteMask","_2dxFX_Wave","BD_Clamp","UnityEngine.Rigidbody2D","PlaceItem","ActionOnTap","BD_Action","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.CircleCollider2D","BD_Fold","BD_Progress","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","StaticFixedPipe","BD_SpriteChange","MenuLevel","IntroLevelAnim","Level_PoseController","BD_AnimationHelper","SpriteButton","PlayableRouter","DressChangeIntro","MenuDraggable","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","RadialCircleFill","TeaseTapCTA","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "15.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "4Sept2026_Lvl1_2_Step_1to2_v1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1757";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4267";

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

Deserializers.buildID = "8f9c9057-8348-42a0-9f90-16e6068aa5db";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

