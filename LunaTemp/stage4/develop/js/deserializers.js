var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3142 = root || request.c( 'UnityEngine.JointSpring' )
  var i3143 = data
  i3142.spring = i3143[0]
  i3142.damper = i3143[1]
  i3142.targetPosition = i3143[2]
  return i3142
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3144 = root || request.c( 'UnityEngine.JointMotor' )
  var i3145 = data
  i3144.m_TargetVelocity = i3145[0]
  i3144.m_Force = i3145[1]
  i3144.m_FreeSpin = i3145[2]
  return i3144
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3146 = root || request.c( 'UnityEngine.JointLimits' )
  var i3147 = data
  i3146.m_Min = i3147[0]
  i3146.m_Max = i3147[1]
  i3146.m_Bounciness = i3147[2]
  i3146.m_BounceMinVelocity = i3147[3]
  i3146.m_ContactDistance = i3147[4]
  i3146.minBounce = i3147[5]
  i3146.maxBounce = i3147[6]
  return i3146
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3148 = root || request.c( 'UnityEngine.JointDrive' )
  var i3149 = data
  i3148.m_PositionSpring = i3149[0]
  i3148.m_PositionDamper = i3149[1]
  i3148.m_MaximumForce = i3149[2]
  i3148.m_UseAcceleration = i3149[3]
  return i3148
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3150 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3151 = data
  i3150.m_Spring = i3151[0]
  i3150.m_Damper = i3151[1]
  return i3150
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3152 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3153 = data
  i3152.m_Limit = i3153[0]
  i3152.m_Bounciness = i3153[1]
  i3152.m_ContactDistance = i3153[2]
  return i3152
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3154 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3155 = data
  i3154.m_ExtremumSlip = i3155[0]
  i3154.m_ExtremumValue = i3155[1]
  i3154.m_AsymptoteSlip = i3155[2]
  i3154.m_AsymptoteValue = i3155[3]
  i3154.m_Stiffness = i3155[4]
  return i3154
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3156 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3157 = data
  i3156.m_LowerAngle = i3157[0]
  i3156.m_UpperAngle = i3157[1]
  return i3156
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3158 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3159 = data
  i3158.m_MotorSpeed = i3159[0]
  i3158.m_MaximumMotorTorque = i3159[1]
  return i3158
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3160 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3161 = data
  i3160.m_DampingRatio = i3161[0]
  i3160.m_Frequency = i3161[1]
  i3160.m_Angle = i3161[2]
  return i3160
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3162 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3163 = data
  i3162.m_LowerTranslation = i3163[0]
  i3162.m_UpperTranslation = i3163[1]
  return i3162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3164 = root || new pc.UnityMaterial()
  var i3165 = data
  i3164.name = i3165[0]
  request.r(i3165[1], i3165[2], 0, i3164, 'shader')
  i3164.renderQueue = i3165[3]
  i3164.enableInstancing = !!i3165[4]
  var i3167 = i3165[5]
  var i3166 = []
  for(var i = 0; i < i3167.length; i += 1) {
    i3166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3167[i + 0]) );
  }
  i3164.floatParameters = i3166
  var i3169 = i3165[6]
  var i3168 = []
  for(var i = 0; i < i3169.length; i += 1) {
    i3168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3169[i + 0]) );
  }
  i3164.colorParameters = i3168
  var i3171 = i3165[7]
  var i3170 = []
  for(var i = 0; i < i3171.length; i += 1) {
    i3170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3171[i + 0]) );
  }
  i3164.vectorParameters = i3170
  var i3173 = i3165[8]
  var i3172 = []
  for(var i = 0; i < i3173.length; i += 1) {
    i3172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3173[i + 0]) );
  }
  i3164.textureParameters = i3172
  var i3175 = i3165[9]
  var i3174 = []
  for(var i = 0; i < i3175.length; i += 1) {
    i3174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3175[i + 0]) );
  }
  i3164.materialFlags = i3174
  return i3164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3179 = data
  i3178.name = i3179[0]
  i3178.value = i3179[1]
  return i3178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3183 = data
  i3182.name = i3183[0]
  i3182.value = new pc.Color(i3183[1], i3183[2], i3183[3], i3183[4])
  return i3182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3187 = data
  i3186.name = i3187[0]
  i3186.value = new pc.Vec4( i3187[1], i3187[2], i3187[3], i3187[4] )
  return i3186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3191 = data
  i3190.name = i3191[0]
  request.r(i3191[1], i3191[2], 0, i3190, 'value')
  return i3190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3195 = data
  i3194.name = i3195[0]
  i3194.enabled = !!i3195[1]
  return i3194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3197 = data
  i3196.name = i3197[0]
  i3196.width = i3197[1]
  i3196.height = i3197[2]
  i3196.mipmapCount = i3197[3]
  i3196.anisoLevel = i3197[4]
  i3196.filterMode = i3197[5]
  i3196.hdr = !!i3197[6]
  i3196.format = i3197[7]
  i3196.wrapMode = i3197[8]
  i3196.alphaIsTransparency = !!i3197[9]
  i3196.alphaSource = i3197[10]
  i3196.graphicsFormat = i3197[11]
  i3196.sRGBTexture = !!i3197[12]
  i3196.desiredColorSpace = i3197[13]
  i3196.wrapU = i3197[14]
  i3196.wrapV = i3197[15]
  return i3196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3199 = data
  i3198.name = i3199[0]
  i3198.halfPrecision = !!i3199[1]
  i3198.useSimplification = !!i3199[2]
  i3198.useUInt32IndexFormat = !!i3199[3]
  i3198.vertexCount = i3199[4]
  i3198.aabb = i3199[5]
  var i3201 = i3199[6]
  var i3200 = []
  for(var i = 0; i < i3201.length; i += 1) {
    i3200.push( !!i3201[i + 0] );
  }
  i3198.streams = i3200
  i3198.vertices = i3199[7]
  var i3203 = i3199[8]
  var i3202 = []
  for(var i = 0; i < i3203.length; i += 1) {
    i3202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3203[i + 0]) );
  }
  i3198.subMeshes = i3202
  var i3205 = i3199[9]
  var i3204 = []
  for(var i = 0; i < i3205.length; i += 16) {
    i3204.push( new pc.Mat4().setData(i3205[i + 0], i3205[i + 1], i3205[i + 2], i3205[i + 3],  i3205[i + 4], i3205[i + 5], i3205[i + 6], i3205[i + 7],  i3205[i + 8], i3205[i + 9], i3205[i + 10], i3205[i + 11],  i3205[i + 12], i3205[i + 13], i3205[i + 14], i3205[i + 15]) );
  }
  i3198.bindposes = i3204
  var i3207 = i3199[10]
  var i3206 = []
  for(var i = 0; i < i3207.length; i += 1) {
    i3206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3207[i + 0]) );
  }
  i3198.blendShapes = i3206
  return i3198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3213 = data
  i3212.triangles = i3213[0]
  return i3212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3219 = data
  i3218.name = i3219[0]
  var i3221 = i3219[1]
  var i3220 = []
  for(var i = 0; i < i3221.length; i += 1) {
    i3220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3221[i + 0]) );
  }
  i3218.frames = i3220
  return i3218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3223 = data
  i3222.position = new pc.Vec3( i3223[0], i3223[1], i3223[2] )
  i3222.scale = new pc.Vec3( i3223[3], i3223[4], i3223[5] )
  i3222.rotation = new pc.Quat(i3223[6], i3223[7], i3223[8], i3223[9])
  return i3222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3225 = data
  i3224.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3225[0], i3224.main)
  i3224.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3225[1], i3224.colorBySpeed)
  i3224.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3225[2], i3224.colorOverLifetime)
  i3224.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3225[3], i3224.emission)
  i3224.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3225[4], i3224.rotationBySpeed)
  i3224.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3225[5], i3224.rotationOverLifetime)
  i3224.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3225[6], i3224.shape)
  i3224.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3225[7], i3224.sizeBySpeed)
  i3224.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3225[8], i3224.sizeOverLifetime)
  i3224.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3225[9], i3224.textureSheetAnimation)
  i3224.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3225[10], i3224.velocityOverLifetime)
  i3224.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3225[11], i3224.noise)
  i3224.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3225[12], i3224.inheritVelocity)
  i3224.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3225[13], i3224.forceOverLifetime)
  i3224.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3225[14], i3224.limitVelocityOverLifetime)
  i3224.useAutoRandomSeed = !!i3225[15]
  i3224.randomSeed = i3225[16]
  return i3224
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3226 = root || new pc.ParticleSystemMain()
  var i3227 = data
  i3226.duration = i3227[0]
  i3226.loop = !!i3227[1]
  i3226.prewarm = !!i3227[2]
  i3226.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3227[3], i3226.startDelay)
  i3226.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3227[4], i3226.startLifetime)
  i3226.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3227[5], i3226.startSpeed)
  i3226.startSize3D = !!i3227[6]
  i3226.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3227[7], i3226.startSizeX)
  i3226.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3227[8], i3226.startSizeY)
  i3226.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3227[9], i3226.startSizeZ)
  i3226.startRotation3D = !!i3227[10]
  i3226.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3227[11], i3226.startRotationX)
  i3226.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3227[12], i3226.startRotationY)
  i3226.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3227[13], i3226.startRotationZ)
  i3226.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3227[14], i3226.startColor)
  i3226.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3227[15], i3226.gravityModifier)
  i3226.simulationSpace = i3227[16]
  request.r(i3227[17], i3227[18], 0, i3226, 'customSimulationSpace')
  i3226.simulationSpeed = i3227[19]
  i3226.useUnscaledTime = !!i3227[20]
  i3226.scalingMode = i3227[21]
  i3226.playOnAwake = !!i3227[22]
  i3226.maxParticles = i3227[23]
  i3226.emitterVelocityMode = i3227[24]
  i3226.stopAction = i3227[25]
  return i3226
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3228 = root || new pc.MinMaxCurve()
  var i3229 = data
  i3228.mode = i3229[0]
  i3228.curveMin = new pc.AnimationCurve( { keys_flow: i3229[1] } )
  i3228.curveMax = new pc.AnimationCurve( { keys_flow: i3229[2] } )
  i3228.curveMultiplier = i3229[3]
  i3228.constantMin = i3229[4]
  i3228.constantMax = i3229[5]
  return i3228
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3230 = root || new pc.MinMaxGradient()
  var i3231 = data
  i3230.mode = i3231[0]
  i3230.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3231[1], i3230.gradientMin)
  i3230.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3231[2], i3230.gradientMax)
  i3230.colorMin = new pc.Color(i3231[3], i3231[4], i3231[5], i3231[6])
  i3230.colorMax = new pc.Color(i3231[7], i3231[8], i3231[9], i3231[10])
  return i3230
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3233 = data
  i3232.mode = i3233[0]
  var i3235 = i3233[1]
  var i3234 = []
  for(var i = 0; i < i3235.length; i += 1) {
    i3234.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3235[i + 0]) );
  }
  i3232.colorKeys = i3234
  var i3237 = i3233[2]
  var i3236 = []
  for(var i = 0; i < i3237.length; i += 1) {
    i3236.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3237[i + 0]) );
  }
  i3232.alphaKeys = i3236
  return i3232
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3238 = root || new pc.ParticleSystemColorBySpeed()
  var i3239 = data
  i3238.enabled = !!i3239[0]
  i3238.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3239[1], i3238.color)
  i3238.range = new pc.Vec2( i3239[2], i3239[3] )
  return i3238
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3243 = data
  i3242.color = new pc.Color(i3243[0], i3243[1], i3243[2], i3243[3])
  i3242.time = i3243[4]
  return i3242
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3247 = data
  i3246.alpha = i3247[0]
  i3246.time = i3247[1]
  return i3246
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3248 = root || new pc.ParticleSystemColorOverLifetime()
  var i3249 = data
  i3248.enabled = !!i3249[0]
  i3248.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3249[1], i3248.color)
  return i3248
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3250 = root || new pc.ParticleSystemEmitter()
  var i3251 = data
  i3250.enabled = !!i3251[0]
  i3250.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3251[1], i3250.rateOverTime)
  i3250.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3251[2], i3250.rateOverDistance)
  var i3253 = i3251[3]
  var i3252 = []
  for(var i = 0; i < i3253.length; i += 1) {
    i3252.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3253[i + 0]) );
  }
  i3250.bursts = i3252
  return i3250
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3256 = root || new pc.ParticleSystemBurst()
  var i3257 = data
  i3256.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3257[0], i3256.count)
  i3256.cycleCount = i3257[1]
  i3256.minCount = i3257[2]
  i3256.maxCount = i3257[3]
  i3256.repeatInterval = i3257[4]
  i3256.time = i3257[5]
  return i3256
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3258 = root || new pc.ParticleSystemRotationBySpeed()
  var i3259 = data
  i3258.enabled = !!i3259[0]
  i3258.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3259[1], i3258.x)
  i3258.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3259[2], i3258.y)
  i3258.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3259[3], i3258.z)
  i3258.separateAxes = !!i3259[4]
  i3258.range = new pc.Vec2( i3259[5], i3259[6] )
  return i3258
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3260 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3261 = data
  i3260.enabled = !!i3261[0]
  i3260.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3261[1], i3260.x)
  i3260.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3261[2], i3260.y)
  i3260.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3261[3], i3260.z)
  i3260.separateAxes = !!i3261[4]
  return i3260
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3262 = root || new pc.ParticleSystemShape()
  var i3263 = data
  i3262.enabled = !!i3263[0]
  i3262.shapeType = i3263[1]
  i3262.randomDirectionAmount = i3263[2]
  i3262.sphericalDirectionAmount = i3263[3]
  i3262.randomPositionAmount = i3263[4]
  i3262.alignToDirection = !!i3263[5]
  i3262.radius = i3263[6]
  i3262.radiusMode = i3263[7]
  i3262.radiusSpread = i3263[8]
  i3262.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3263[9], i3262.radiusSpeed)
  i3262.radiusThickness = i3263[10]
  i3262.angle = i3263[11]
  i3262.length = i3263[12]
  i3262.boxThickness = new pc.Vec3( i3263[13], i3263[14], i3263[15] )
  i3262.meshShapeType = i3263[16]
  request.r(i3263[17], i3263[18], 0, i3262, 'mesh')
  request.r(i3263[19], i3263[20], 0, i3262, 'meshRenderer')
  request.r(i3263[21], i3263[22], 0, i3262, 'skinnedMeshRenderer')
  i3262.useMeshMaterialIndex = !!i3263[23]
  i3262.meshMaterialIndex = i3263[24]
  i3262.useMeshColors = !!i3263[25]
  i3262.normalOffset = i3263[26]
  i3262.arc = i3263[27]
  i3262.arcMode = i3263[28]
  i3262.arcSpread = i3263[29]
  i3262.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3263[30], i3262.arcSpeed)
  i3262.donutRadius = i3263[31]
  i3262.position = new pc.Vec3( i3263[32], i3263[33], i3263[34] )
  i3262.rotation = new pc.Vec3( i3263[35], i3263[36], i3263[37] )
  i3262.scale = new pc.Vec3( i3263[38], i3263[39], i3263[40] )
  return i3262
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3264 = root || new pc.ParticleSystemSizeBySpeed()
  var i3265 = data
  i3264.enabled = !!i3265[0]
  i3264.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3265[1], i3264.x)
  i3264.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3265[2], i3264.y)
  i3264.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3265[3], i3264.z)
  i3264.separateAxes = !!i3265[4]
  i3264.range = new pc.Vec2( i3265[5], i3265[6] )
  return i3264
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3266 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3267 = data
  i3266.enabled = !!i3267[0]
  i3266.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3267[1], i3266.x)
  i3266.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3267[2], i3266.y)
  i3266.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3267[3], i3266.z)
  i3266.separateAxes = !!i3267[4]
  return i3266
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3268 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3269 = data
  i3268.enabled = !!i3269[0]
  i3268.mode = i3269[1]
  i3268.animation = i3269[2]
  i3268.numTilesX = i3269[3]
  i3268.numTilesY = i3269[4]
  i3268.useRandomRow = !!i3269[5]
  i3268.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3269[6], i3268.frameOverTime)
  i3268.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3269[7], i3268.startFrame)
  i3268.cycleCount = i3269[8]
  i3268.rowIndex = i3269[9]
  i3268.flipU = i3269[10]
  i3268.flipV = i3269[11]
  i3268.spriteCount = i3269[12]
  var i3271 = i3269[13]
  var i3270 = []
  for(var i = 0; i < i3271.length; i += 2) {
  request.r(i3271[i + 0], i3271[i + 1], 2, i3270, '')
  }
  i3268.sprites = i3270
  return i3268
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3274 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3275 = data
  i3274.enabled = !!i3275[0]
  i3274.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3275[1], i3274.x)
  i3274.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3275[2], i3274.y)
  i3274.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3275[3], i3274.z)
  i3274.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3275[4], i3274.radial)
  i3274.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3275[5], i3274.speedModifier)
  i3274.space = i3275[6]
  i3274.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3275[7], i3274.orbitalX)
  i3274.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3275[8], i3274.orbitalY)
  i3274.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3275[9], i3274.orbitalZ)
  i3274.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3275[10], i3274.orbitalOffsetX)
  i3274.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3275[11], i3274.orbitalOffsetY)
  i3274.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3275[12], i3274.orbitalOffsetZ)
  return i3274
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3276 = root || new pc.ParticleSystemNoise()
  var i3277 = data
  i3276.enabled = !!i3277[0]
  i3276.separateAxes = !!i3277[1]
  i3276.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3277[2], i3276.strengthX)
  i3276.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3277[3], i3276.strengthY)
  i3276.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3277[4], i3276.strengthZ)
  i3276.frequency = i3277[5]
  i3276.damping = !!i3277[6]
  i3276.octaveCount = i3277[7]
  i3276.octaveMultiplier = i3277[8]
  i3276.octaveScale = i3277[9]
  i3276.quality = i3277[10]
  i3276.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3277[11], i3276.scrollSpeed)
  i3276.scrollSpeedMultiplier = i3277[12]
  i3276.remapEnabled = !!i3277[13]
  i3276.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3277[14], i3276.remapX)
  i3276.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3277[15], i3276.remapY)
  i3276.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3277[16], i3276.remapZ)
  i3276.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3277[17], i3276.positionAmount)
  i3276.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3277[18], i3276.rotationAmount)
  i3276.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3277[19], i3276.sizeAmount)
  return i3276
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3278 = root || new pc.ParticleSystemInheritVelocity()
  var i3279 = data
  i3278.enabled = !!i3279[0]
  i3278.mode = i3279[1]
  i3278.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3279[2], i3278.curve)
  return i3278
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3280 = root || new pc.ParticleSystemForceOverLifetime()
  var i3281 = data
  i3280.enabled = !!i3281[0]
  i3280.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3281[1], i3280.x)
  i3280.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3281[2], i3280.y)
  i3280.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3281[3], i3280.z)
  i3280.space = i3281[4]
  i3280.randomized = !!i3281[5]
  return i3280
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3282 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3283 = data
  i3282.enabled = !!i3283[0]
  i3282.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3283[1], i3282.limit)
  i3282.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3283[2], i3282.limitX)
  i3282.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3283[3], i3282.limitY)
  i3282.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3283[4], i3282.limitZ)
  i3282.dampen = i3283[5]
  i3282.separateAxes = !!i3283[6]
  i3282.space = i3283[7]
  i3282.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3283[8], i3282.drag)
  i3282.multiplyDragByParticleSize = !!i3283[9]
  i3282.multiplyDragByParticleVelocity = !!i3283[10]
  return i3282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3285 = data
  request.r(i3285[0], i3285[1], 0, i3284, 'mesh')
  i3284.meshCount = i3285[2]
  i3284.activeVertexStreamsCount = i3285[3]
  i3284.alignment = i3285[4]
  i3284.renderMode = i3285[5]
  i3284.sortMode = i3285[6]
  i3284.lengthScale = i3285[7]
  i3284.velocityScale = i3285[8]
  i3284.cameraVelocityScale = i3285[9]
  i3284.normalDirection = i3285[10]
  i3284.sortingFudge = i3285[11]
  i3284.minParticleSize = i3285[12]
  i3284.maxParticleSize = i3285[13]
  i3284.pivot = new pc.Vec3( i3285[14], i3285[15], i3285[16] )
  request.r(i3285[17], i3285[18], 0, i3284, 'trailMaterial')
  i3284.applyActiveColorSpace = !!i3285[19]
  i3284.enabled = !!i3285[20]
  request.r(i3285[21], i3285[22], 0, i3284, 'sharedMaterial')
  var i3287 = i3285[23]
  var i3286 = []
  for(var i = 0; i < i3287.length; i += 2) {
  request.r(i3287[i + 0], i3287[i + 1], 2, i3286, '')
  }
  i3284.sharedMaterials = i3286
  i3284.receiveShadows = !!i3285[24]
  i3284.shadowCastingMode = i3285[25]
  i3284.sortingLayerID = i3285[26]
  i3284.sortingOrder = i3285[27]
  i3284.lightmapIndex = i3285[28]
  i3284.lightmapSceneIndex = i3285[29]
  i3284.lightmapScaleOffset = new pc.Vec4( i3285[30], i3285[31], i3285[32], i3285[33] )
  i3284.lightProbeUsage = i3285[34]
  i3284.reflectionProbeUsage = i3285[35]
  return i3284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3291 = data
  i3290.name = i3291[0]
  i3290.tagId = i3291[1]
  i3290.enabled = !!i3291[2]
  i3290.isStatic = !!i3291[3]
  i3290.layer = i3291[4]
  return i3290
}

Deserializers["Level3_Crown_Playable_NewTest"] = function (request, data, root) {
  var i3292 = root || request.c( 'Level3_Crown_Playable_NewTest' )
  var i3293 = data
  i3292.MainZoom = request.d('ZoomPos', i3293[0], i3292.MainZoom)
  request.r(i3293[1], i3293[2], 0, i3292, 'View1')
  request.r(i3293[3], i3293[4], 0, i3292, 'View2')
  i3292.ZoomStep1 = request.d('ZoomPos', i3293[5], i3292.ZoomStep1)
  request.r(i3293[6], i3293[7], 0, i3292, 'ToolStep1')
  request.r(i3293[8], i3293[9], 0, i3292, 'ToolStep1CameraFollow')
  request.r(i3293[10], i3293[11], 0, i3292, 'Step1Col')
  request.r(i3293[12], i3293[13], 0, i3292, 'DustSR_1')
  i3292.ZoomStep2 = request.d('ZoomPos', i3293[14], i3292.ZoomStep2)
  request.r(i3293[15], i3293[16], 0, i3292, 'ToolStep2')
  request.r(i3293[17], i3293[18], 0, i3292, 'ToolStep2CameraFollow')
  var i3295 = i3293[19]
  var i3294 = []
  for(var i = 0; i < i3295.length; i += 2) {
  request.r(i3295[i + 0], i3295[i + 1], 2, i3294, '')
  }
  i3292.SRsToFadeOut_2 = i3294
  request.r(i3293[20], i3293[21], 0, i3292, 'SpraySR_2')
  i3292.ZoomStep3 = request.d('ZoomPos', i3293[22], i3292.ZoomStep3)
  request.r(i3293[23], i3293[24], 0, i3292, 'ToolStep3')
  request.r(i3293[25], i3293[26], 0, i3292, 'ToolStep3CameraFollow')
  request.r(i3293[27], i3293[28], 0, i3292, 'Step3Col')
  request.r(i3293[29], i3293[30], 0, i3292, 'Mix')
  request.r(i3293[31], i3293[32], 0, i3292, 'MixE')
  i3292.levelName = i3293[33]
  i3292.levelReward = i3293[34]
  request.r(i3293[35], i3293[36], 0, i3292, 'LevelIcon')
  request.r(i3293[37], i3293[38], 0, i3292, 'Level_BG')
  var i3297 = i3293[39]
  var i3296 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3297.length; i += 2) {
  request.r(i3297[i + 0], i3297[i + 1], 1, i3296, '')
  }
  i3292.ToolIcons = i3296
  var i3299 = i3293[40]
  var i3298 = []
  for(var i = 0; i < i3299.length; i += 2) {
  request.r(i3299[i + 0], i3299[i + 1], 2, i3298, '')
  }
  i3292.AllDrags = i3298
  var i3301 = i3293[41]
  var i3300 = []
  for(var i = 0; i < i3301.length; i += 2) {
  request.r(i3301[i + 0], i3301[i + 1], 2, i3300, '')
  }
  i3292.AllSources = i3300
  var i3303 = i3293[42]
  var i3302 = []
  for(var i = 0; i < i3303.length; i += 2) {
  request.r(i3303[i + 0], i3303[i + 1], 2, i3302, '')
  }
  i3292.AllScratches = i3302
  i3292.stepsDone = i3293[43]
  i3292.levelNo = i3293[44]
  i3292.partNo = i3293[45]
  var i3305 = i3293[46]
  var i3304 = []
  for(var i = 0; i < i3305.length; i += 2) {
  request.r(i3305[i + 0], i3305[i + 1], 2, i3304, '')
  }
  i3292.disableOnLevelComplete = i3304
  return i3292
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i3306 = root || request.c( 'ZoomPos' )
  var i3307 = data
  i3306.CameraPos = new pc.Vec3( i3307[0], i3307[1], i3307[2] )
  i3306.CameraFOV = i3307[3]
  return i3306
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i3320 = root || request.c( 'PlayableCTA' )
  var i3321 = data
  i3320.trigger = i3321[0]
  i3320.afterSeconds = i3321[1]
  i3320.afterTaps = i3321[2]
  request.r(i3321[3], i3321[4], 0, i3320, 'scratchProgress')
  i3320.scratchIndex = i3321[5]
  i3320.progressThreshold = i3321[6]
  request.r(i3321[7], i3321[8], 0, i3320, 'watchedTool')
  i3320.blockInputOnFire = !!i3321[9]
  i3320.refireOnEveryTap = !!i3321[10]
  i3320.refireDelay = i3321[11]
  i3320.showEndCard = !!i3321[12]
  request.r(i3321[13], i3321[14], 0, i3320, 'endCard')
  var i3323 = i3321[15]
  var i3322 = []
  for(var i = 0; i < i3323.length; i += 2) {
  request.r(i3323[i + 0], i3323[i + 1], 2, i3322, '')
  }
  i3320.thingsToDisableOnEndCard = i3322
  i3320.endCardDelay = i3321[16]
  i3320.showEndCardOnProgressTrigger = !!i3321[17]
  i3320.showEndCardOnToolAppearTrigger = !!i3321[18]
  i3320.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i3321[19], i3320.onCtaFired)
  i3320.logWhenFired = !!i3321[20]
  return i3320
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3324 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3325 = data
  i3324.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3325[0], i3324.m_PersistentCalls)
  return i3324
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3326 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3327 = data
  var i3329 = i3327[0]
  var i3328 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3329.length; i += 1) {
    i3328.add(request.d('UnityEngine.Events.PersistentCall', i3329[i + 0]));
  }
  i3326.m_Calls = i3328
  return i3326
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3332 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3333 = data
  request.r(i3333[0], i3333[1], 0, i3332, 'm_Target')
  i3332.m_TargetAssemblyTypeName = i3333[2]
  i3332.m_MethodName = i3333[3]
  i3332.m_Mode = i3333[4]
  i3332.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3333[5], i3332.m_Arguments)
  i3332.m_CallState = i3333[6]
  return i3332
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i3334 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i3335 = data
  request.r(i3335[0], i3335[1], 0, i3334, 'MainCamera')
  i3334.RenderType = i3335[2]
  request.r(i3335[3], i3335[4], 0, i3334, 'ScratchSurfaceSprite')
  i3334.ScratchSurfaceSpriteHasAlpha = !!i3335[5]
  i3334.MaskProgressCutOffValue = i3335[6]
  request.r(i3335[7], i3335[8], 0, i3334, 'EraseTexture')
  i3334.EraseTextureScale = new pc.Vec2( i3335[9], i3335[10] )
  i3334.InputEnabled = !!i3335[11]
  request.r(i3335[12], i3335[13], 0, i3334, 'Card')
  i3334.Mode = i3335[14]
  request.r(i3335[15], i3335[16], 0, i3334, 'Progress')
  request.r(i3335[17], i3335[18], 0, i3334, 'MeshCard')
  request.r(i3335[19], i3335[20], 0, i3334, 'SpriteCard')
  request.r(i3335[21], i3335[22], 0, i3334, 'ImageCard')
  request.r(i3335[23], i3335[24], 0, i3334, 'MaskShader')
  request.r(i3335[25], i3335[26], 0, i3334, 'BrushShader')
  request.r(i3335[27], i3335[28], 0, i3334, 'MaskProgressShader')
  request.r(i3335[29], i3335[30], 0, i3334, 'MaskProgressCutOffShader')
  return i3334
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i3336 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i3337 = data
  request.r(i3337[0], i3337[1], 0, i3336, 'MainCamera')
  request.r(i3337[2], i3337[3], 0, i3336, 'Surface')
  i3336.RenderTextureQuality = i3337[4]
  request.r(i3337[5], i3337[6], 0, i3336, 'Eraser')
  request.r(i3337[7], i3337[8], 0, i3336, 'Progress')
  request.r(i3337[9], i3337[10], 0, i3336, 'ScratchSurface')
  request.r(i3337[11], i3337[12], 0, i3336, 'RenderTexture')
  i3336.BrushScale = new pc.Vec2( i3337[13], i3337[14] )
  request.r(i3337[15], i3337[16], 0, i3336, 'ToolTip')
  i3336.InputEnabled = !!i3337[17]
  i3336.IsScratching = !!i3337[18]
  i3336.useChangingScale = !!i3337[19]
  i3336.useGivenBrushScale = !!i3337[20]
  i3336.canSpreadMask = !!i3337[21]
  i3336.shouldPaintHoles = !!i3337[22]
  i3336.canRotateTip = !!i3337[23]
  i3336._mode = i3337[24]
  return i3336
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i3338 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i3339 = data
  request.r(i3339[0], i3339[1], 0, i3338, 'Card')
  i3338.currentProgress = i3339[2]
  return i3338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3341 = data
  i3340.color = new pc.Color(i3341[0], i3341[1], i3341[2], i3341[3])
  request.r(i3341[4], i3341[5], 0, i3340, 'sprite')
  i3340.flipX = !!i3341[6]
  i3340.flipY = !!i3341[7]
  i3340.drawMode = i3341[8]
  i3340.size = new pc.Vec2( i3341[9], i3341[10] )
  i3340.tileMode = i3341[11]
  i3340.adaptiveModeThreshold = i3341[12]
  i3340.maskInteraction = i3341[13]
  i3340.spriteSortPoint = i3341[14]
  i3340.enabled = !!i3341[15]
  request.r(i3341[16], i3341[17], 0, i3340, 'sharedMaterial')
  var i3343 = i3341[18]
  var i3342 = []
  for(var i = 0; i < i3343.length; i += 2) {
  request.r(i3343[i + 0], i3343[i + 1], 2, i3342, '')
  }
  i3340.sharedMaterials = i3342
  i3340.receiveShadows = !!i3341[19]
  i3340.shadowCastingMode = i3341[20]
  i3340.sortingLayerID = i3341[21]
  i3340.sortingOrder = i3341[22]
  i3340.lightmapIndex = i3341[23]
  i3340.lightmapSceneIndex = i3341[24]
  i3340.lightmapScaleOffset = new pc.Vec4( i3341[25], i3341[26], i3341[27], i3341[28] )
  i3340.lightProbeUsage = i3341[29]
  i3340.reflectionProbeUsage = i3341[30]
  return i3340
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i3344 = root || request.c( 'PlayParticlesOnCollision' )
  var i3345 = data
  request.r(i3345[0], i3345[1], 0, i3344, 'Target')
  request.r(i3345[2], i3345[3], 0, i3344, 'ParticlePrefab')
  i3344.destroyIt = !!i3345[4]
  i3344.stayAtPlace = !!i3345[5]
  i3344.disableOnCollision = !!i3345[6]
  i3344.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i3345[7], i3344.OnCollisionEvent)
  return i3344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i3346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i3347 = data
  i3346.radius = i3347[0]
  i3346.enabled = !!i3347[1]
  i3346.isTrigger = !!i3347[2]
  i3346.usedByEffector = !!i3347[3]
  i3346.density = i3347[4]
  i3346.offset = new pc.Vec2( i3347[5], i3347[6] )
  request.r(i3347[7], i3347[8], 0, i3346, 'material')
  return i3346
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i3348 = root || request.c( 'PlaySfxOnCollision' )
  var i3349 = data
  request.r(i3349[0], i3349[1], 0, i3348, 'Tip')
  i3348.Mode = i3349[2]
  request.r(i3349[3], i3349[4], 0, i3348, 'DragInput')
  request.r(i3349[5], i3349[6], 0, i3348, 'Source')
  i3348.startVol = i3349[7]
  i3348.targetVol = i3349[8]
  i3348.duration = i3349[9]
  request.r(i3349[10], i3349[11], 0, i3348, 'Particles')
  i3348.isDone = !!i3349[12]
  i3348.isInArea = !!i3349[13]
  i3348.isPlaying = !!i3349[14]
  return i3348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i3350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i3351 = data
  request.r(i3351[0], i3351[1], 0, i3350, 'clip')
  request.r(i3351[2], i3351[3], 0, i3350, 'outputAudioMixerGroup')
  i3350.playOnAwake = !!i3351[4]
  i3350.loop = !!i3351[5]
  i3350.time = i3351[6]
  i3350.volume = i3351[7]
  i3350.pitch = i3351[8]
  i3350.enabled = !!i3351[9]
  return i3350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i3352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i3353 = data
  i3352.usedByComposite = !!i3353[0]
  i3352.autoTiling = !!i3353[1]
  var i3355 = i3353[2]
  var i3354 = []
  for(var i = 0; i < i3355.length; i += 1) {
  var i3357 = i3355[i + 0]
  var i3356 = []
  for(var i = 0; i < i3357.length; i += 2) {
    i3356.push( new pc.Vec2( i3357[i + 0], i3357[i + 1] ) );
  }
    i3354.push( i3356 );
  }
  i3352.points = i3354
  i3352.enabled = !!i3353[3]
  i3352.isTrigger = !!i3353[4]
  i3352.usedByEffector = !!i3353[5]
  i3352.density = i3353[6]
  i3352.offset = new pc.Vec2( i3353[7], i3353[8] )
  request.r(i3353[9], i3353[10], 0, i3352, 'material')
  return i3352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i3364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i3365 = data
  i3364.usedByComposite = !!i3365[0]
  i3364.autoTiling = !!i3365[1]
  i3364.size = new pc.Vec2( i3365[2], i3365[3] )
  i3364.edgeRadius = i3365[4]
  i3364.enabled = !!i3365[5]
  i3364.isTrigger = !!i3365[6]
  i3364.usedByEffector = !!i3365[7]
  i3364.density = i3365[8]
  i3364.offset = new pc.Vec2( i3365[9], i3365[10] )
  request.r(i3365[11], i3365[12], 0, i3364, 'material')
  return i3364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3367 = data
  request.r(i3367[0], i3367[1], 0, i3366, 'animatorController')
  request.r(i3367[2], i3367[3], 0, i3366, 'avatar')
  i3366.updateMode = i3367[4]
  i3366.hasTransformHierarchy = !!i3367[5]
  i3366.applyRootMotion = !!i3367[6]
  var i3369 = i3367[7]
  var i3368 = []
  for(var i = 0; i < i3369.length; i += 2) {
  request.r(i3369[i + 0], i3369[i + 1], 2, i3368, '')
  }
  i3366.humanBones = i3368
  i3366.enabled = !!i3367[8]
  return i3366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i3372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i3373 = data
  i3372.frontSortingLayerID = i3373[0]
  i3372.frontSortingOrder = i3373[1]
  i3372.backSortingLayerID = i3373[2]
  i3372.backSortingOrder = i3373[3]
  i3372.alphaCutoff = i3373[4]
  request.r(i3373[5], i3373[6], 0, i3372, 'sprite')
  i3372.tileMode = i3373[7]
  i3372.isCustomRangeActive = !!i3373[8]
  i3372.spriteSortPoint = i3373[9]
  i3372.enabled = !!i3373[10]
  request.r(i3373[11], i3373[12], 0, i3372, 'sharedMaterial')
  var i3375 = i3373[13]
  var i3374 = []
  for(var i = 0; i < i3375.length; i += 2) {
  request.r(i3375[i + 0], i3375[i + 1], 2, i3374, '')
  }
  i3372.sharedMaterials = i3374
  i3372.receiveShadows = !!i3373[14]
  i3372.shadowCastingMode = i3373[15]
  i3372.sortingLayerID = i3373[16]
  i3372.sortingOrder = i3373[17]
  i3372.lightmapIndex = i3373[18]
  i3372.lightmapSceneIndex = i3373[19]
  i3372.lightmapScaleOffset = new pc.Vec4( i3373[20], i3373[21], i3373[22], i3373[23] )
  i3372.lightProbeUsage = i3373[24]
  i3372.reflectionProbeUsage = i3373[25]
  return i3372
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i3376 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i3377 = data
  request.r(i3377[0], i3377[1], 0, i3376, 'm_RootBone')
  var i3379 = i3377[2]
  var i3378 = []
  for(var i = 0; i < i3379.length; i += 2) {
  request.r(i3379[i + 0], i3379[i + 1], 2, i3378, '')
  }
  i3376.m_BoneTransforms = i3378
  i3376.m_AlwaysUpdate = !!i3377[3]
  i3376.m_AutoRebind = !!i3377[4]
  return i3376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i3380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i3381 = data
  var i3383 = i3381[0]
  var i3382 = []
  for(var i = 0; i < i3383.length; i += 3) {
    i3382.push( new pc.Vec3( i3383[i + 0], i3383[i + 1], i3383[i + 2] ) );
  }
  i3380.positions = i3382
  i3380.positionCount = i3381[1]
  i3380.time = i3381[2]
  i3380.startWidth = i3381[3]
  i3380.endWidth = i3381[4]
  i3380.widthMultiplier = i3381[5]
  i3380.autodestruct = !!i3381[6]
  i3380.emitting = !!i3381[7]
  i3380.numCornerVertices = i3381[8]
  i3380.numCapVertices = i3381[9]
  i3380.minVertexDistance = i3381[10]
  i3380.colorGradient = i3381[11] ? new pc.ColorGradient(i3381[11][0], i3381[11][1], i3381[11][2]) : null
  i3380.startColor = new pc.Color(i3381[12], i3381[13], i3381[14], i3381[15])
  i3380.endColor = new pc.Color(i3381[16], i3381[17], i3381[18], i3381[19])
  i3380.generateLightingData = !!i3381[20]
  i3380.textureMode = i3381[21]
  i3380.alignment = i3381[22]
  i3380.widthCurve = new pc.AnimationCurve( { keys_flow: i3381[23] } )
  i3380.enabled = !!i3381[24]
  request.r(i3381[25], i3381[26], 0, i3380, 'sharedMaterial')
  var i3385 = i3381[27]
  var i3384 = []
  for(var i = 0; i < i3385.length; i += 2) {
  request.r(i3385[i + 0], i3385[i + 1], 2, i3384, '')
  }
  i3380.sharedMaterials = i3384
  i3380.receiveShadows = !!i3381[28]
  i3380.shadowCastingMode = i3381[29]
  i3380.sortingLayerID = i3381[30]
  i3380.sortingOrder = i3381[31]
  i3380.lightmapIndex = i3381[32]
  i3380.lightmapSceneIndex = i3381[33]
  i3380.lightmapScaleOffset = new pc.Vec4( i3381[34], i3381[35], i3381[36], i3381[37] )
  i3380.lightProbeUsage = i3381[38]
  i3380.reflectionProbeUsage = i3381[39]
  return i3380
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i3388 = root || request.c( 'BasicDrag' )
  var i3389 = data
  i3388.canDrag = !!i3389[0]
  i3388.dragByDelta = !!i3389[1]
  i3388.isDragging = !!i3389[2]
  i3388.moveWithPointer = !!i3389[3]
  i3388.canReturn = !!i3389[4]
  i3388.jumpOnReturn = !!i3389[5]
  i3388.returnTime = i3389[6]
  i3388.Tool_Offset = new pc.Vec3( i3389[7], i3389[8], i3389[9] )
  i3388.canScaleIncrease = !!i3389[10]
  i3388.Self_ScaleNew = new pc.Vec3( i3389[11], i3389[12], i3389[13] )
  i3388.canRotateOnPick = !!i3389[14]
  i3388.startRot = new pc.Vec3( i3389[15], i3389[16], i3389[17] )
  i3388.newRot = new pc.Vec3( i3389[18], i3389[19], i3389[20] )
  var i3391 = i3389[21]
  var i3390 = []
  for(var i = 0; i < i3391.length; i += 2) {
  request.r(i3391[i + 0], i3391[i + 1], 2, i3390, '')
  }
  i3388.childSprite = i3390
  request.r(i3389[22], i3389[23], 0, i3388, 'ToolSelectClip')
  request.r(i3389[24], i3389[25], 0, i3388, 'ToolLoopClip')
  request.r(i3389[26], i3389[27], 0, i3388, 'thisParticles')
  i3388.onDragparticle = !!i3389[28]
  request.r(i3389[29], i3389[30], 0, i3388, 'dragParticles')
  request.r(i3389[31], i3389[32], 0, i3388, 'anim')
  i3388.startPos = new pc.Vec3( i3389[33], i3389[34], i3389[35] )
  i3388.startScale = new pc.Vec3( i3389[36], i3389[37], i3389[38] )
  i3388.Vibration = !!i3389[39]
  i3388.isPlacedCannotMove = !!i3389[40]
  i3388.isObjectMovingWhileDragging = !!i3389[41]
  i3388.OnMouseDownEvent = request.d('System.Action', i3389[42], i3388.OnMouseDownEvent)
  i3388.OnMouseUpEvent = request.d('System.Action', i3389[43], i3388.OnMouseUpEvent)
  i3388.ProgStartEvent = request.d('System.Action', i3389[44], i3388.ProgStartEvent)
  i3388.ProgEndEvent = request.d('System.Action', i3389[45], i3388.ProgEndEvent)
  i3388.canCallMouseUpWhenGamePaused = !!i3389[46]
  i3388.ClampX_L = i3389[47]
  i3388.ClampX_H = i3389[48]
  i3388.ClampY_L = i3389[49]
  i3388.ClampY_H = i3389[50]
  i3388.startOrder = i3389[51]
  i3388.dontResetItIsInCollider = !!i3389[52]
  request.r(i3389[53], i3389[54], 0, i3388, 'thisCollider')
  request.r(i3389[55], i3389[56], 0, i3388, 'thisSR')
  i3388.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i3389[57], i3388.OnMouseDownEventIndependentFromCanDrag)
  return i3388
}

Deserializers["System.Action"] = function (request, data, root) {
  var i3392 = root || request.c( 'System.Action' )
  var i3393 = data
  return i3392
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i3394 = root || request.c( 'BD_Progress' )
  var i3395 = data
  var i3397 = i3395[0]
  var i3396 = []
  for(var i = 0; i < i3397.length; i += 1) {
    i3396.push( request.d('ScratchData', i3397[i + 0]) );
  }
  i3394.AllScratches = i3396
  i3394.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i3395[1], i3394.OnScratchComplete)
  i3394.isProgDone = !!i3395[2]
  i3394.canCallComplete = !!i3395[3]
  i3394.CollectiveAppear = !!i3395[4]
  i3394.tipControl = !!i3395[5]
  i3394.progressControl = !!i3395[6]
  request.r(i3395[7], i3395[8], 0, i3394, 'thisDrag')
  i3394.CompleteEvent = request.d('System.Action', i3395[9], i3394.CompleteEvent)
  i3394.SubCompleteEvent = request.d('System.Action', i3395[10], i3394.SubCompleteEvent)
  return i3394
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i3400 = root || request.c( 'ScratchData' )
  var i3401 = data
  request.r(i3401[0], i3401[1], 0, i3400, 'ScratchManager')
  i3400.scratchLimit = i3401[2]
  i3400.isComplete = !!i3401[3]
  return i3400
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3402 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3403 = data
  request.r(i3403[0], i3403[1], 0, i3402, 'm_ObjectArgument')
  i3402.m_ObjectArgumentAssemblyTypeName = i3403[2]
  i3402.m_IntArgument = i3403[3]
  i3402.m_FloatArgument = i3403[4]
  i3402.m_StringArgument = i3403[5]
  i3402.m_BoolArgument = !!i3403[6]
  return i3402
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i3404 = root || request.c( 'BD_Clamp' )
  var i3405 = data
  i3404.ClampX_L = i3405[0]
  i3404.ClampX_H = i3405[1]
  i3404.ClampY_L = i3405[2]
  i3404.ClampY_H = i3405[3]
  return i3404
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i3406 = root || request.c( 'BD_ToolRotate' )
  var i3407 = data
  i3406.startDelay = i3407[0]
  request.r(i3407[1], i3407[2], 0, i3406, 'Tool')
  request.r(i3407[3], i3407[4], 0, i3406, 'Clamp')
  request.r(i3407[5], i3407[6], 0, i3406, 'Pivot')
  i3406.MinAngle = new pc.Vec3( i3407[7], i3407[8], i3407[9] )
  i3406.MaxAngle = new pc.Vec3( i3407[10], i3407[11], i3407[12] )
  i3406.rotationSpeed = i3407[13]
  return i3406
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i3408 = root || request.c( 'BD_CameraFollow' )
  var i3409 = data
  request.r(i3409[0], i3409[1], 0, i3408, 'Tool')
  request.r(i3409[2], i3409[3], 0, i3408, 'Pivot')
  i3408.FOV = i3409[4]
  i3408.Y_L = i3409[5]
  i3408.Y_H = i3409[6]
  i3408.X_L = i3409[7]
  i3408.X_R = i3409[8]
  i3408.startDelay = i3409[9]
  i3408.duration = i3409[10]
  return i3408
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i3410 = root || request.c( 'BD_AnimatorDrag' )
  var i3411 = data
  request.r(i3411[0], i3411[1], 0, i3410, 'BD')
  request.r(i3411[2], i3411[3], 0, i3410, 'anim')
  request.r(i3411[4], i3411[5], 0, i3410, 'Source')
  i3410.Vibration = !!i3411[6]
  i3410.isCompletable = !!i3411[7]
  i3410.completionThreshold = i3411[8]
  i3410.OnComplete = request.d('UnityEngine.Events.UnityEvent', i3411[9], i3410.OnComplete)
  return i3410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i3412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i3413 = data
  i3412.bodyType = i3413[0]
  request.r(i3413[1], i3413[2], 0, i3412, 'material')
  i3412.simulated = !!i3413[3]
  i3412.useAutoMass = !!i3413[4]
  i3412.mass = i3413[5]
  i3412.drag = i3413[6]
  i3412.angularDrag = i3413[7]
  i3412.gravityScale = i3413[8]
  i3412.collisionDetectionMode = i3413[9]
  i3412.sleepMode = i3413[10]
  i3412.constraints = i3413[11]
  return i3412
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i3414 = root || request.c( 'BD_SpriteChange' )
  var i3415 = data
  request.r(i3415[0], i3415[1], 0, i3414, 'BD')
  request.r(i3415[2], i3415[3], 0, i3414, 'SR')
  request.r(i3415[4], i3415[5], 0, i3414, 'Default')
  request.r(i3415[6], i3415[7], 0, i3414, 'Picked')
  i3414.resetOnRelease = !!i3415[8]
  return i3414
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i3416 = root || request.c( 'BD_ProgressHelper' )
  var i3417 = data
  request.r(i3417[0], i3417[1], 0, i3416, 'BD_Progress')
  request.r(i3417[2], i3417[3], 0, i3416, 'fadeSprite')
  i3416.fadeIn = !!i3417[4]
  return i3416
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i3418 = root || request.c( 'DestroyObj' )
  var i3419 = data
  i3418.destroyDelay = i3419[0]
  return i3418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3421 = data
  i3420.name = i3421[0]
  i3420.atlasId = i3421[1]
  i3420.mipmapCount = i3421[2]
  i3420.hdr = !!i3421[3]
  i3420.size = i3421[4]
  i3420.anisoLevel = i3421[5]
  i3420.filterMode = i3421[6]
  var i3423 = i3421[7]
  var i3422 = []
  for(var i = 0; i < i3423.length; i += 4) {
    i3422.push( UnityEngine.Rect.MinMaxRect(i3423[i + 0], i3423[i + 1], i3423[i + 2], i3423[i + 3]) );
  }
  i3420.rects = i3422
  i3420.wrapU = i3421[8]
  i3420.wrapV = i3421[9]
  return i3420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3427 = data
  i3426.name = i3427[0]
  i3426.index = i3427[1]
  i3426.startup = !!i3427[2]
  return i3426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3429 = data
  i3428.aspect = i3429[0]
  i3428.orthographic = !!i3429[1]
  i3428.orthographicSize = i3429[2]
  i3428.backgroundColor = new pc.Color(i3429[3], i3429[4], i3429[5], i3429[6])
  i3428.nearClipPlane = i3429[7]
  i3428.farClipPlane = i3429[8]
  i3428.fieldOfView = i3429[9]
  i3428.depth = i3429[10]
  i3428.clearFlags = i3429[11]
  i3428.cullingMask = i3429[12]
  i3428.rect = i3429[13]
  request.r(i3429[14], i3429[15], 0, i3428, 'targetTexture')
  i3428.usePhysicalProperties = !!i3429[16]
  i3428.focalLength = i3429[17]
  i3428.sensorSize = new pc.Vec2( i3429[18], i3429[19] )
  i3428.lensShift = new pc.Vec2( i3429[20], i3429[21] )
  i3428.gateFit = i3429[22]
  i3428.commandBufferCount = i3429[23]
  i3428.cameraType = i3429[24]
  i3428.enabled = !!i3429[25]
  return i3428
}

Deserializers["CameraController"] = function (request, data, root) {
  var i3430 = root || request.c( 'CameraController' )
  var i3431 = data
  request.r(i3431[0], i3431[1], 0, i3430, 'cam')
  i3430.defaultPosition = new pc.Vec3( i3431[2], i3431[3], i3431[4] )
  i3430.defaultSize = i3431[5]
  i3430.defaultFOV = i3431[6]
  i3430.defaultDuration = i3431[7]
  i3430.defaultEase = i3431[8]
  return i3430
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i3432 = root || request.c( 'MusicSource' )
  var i3433 = data
  request.r(i3433[0], i3433[1], 0, i3432, 'source')
  return i3432
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i3434 = root || request.c( 'UI_Manager' )
  var i3435 = data
  i3434.levelCompleted = !!i3435[0]
  i3434.isPauseActive = !!i3435[1]
  i3434.loadIndex = i3435[2]
  request.r(i3435[3], i3435[4], 0, i3434, 'removeAdsButton')
  request.r(i3435[5], i3435[6], 0, i3434, 'pauseButton')
  request.r(i3435[7], i3435[8], 0, i3434, 'Fade_Img')
  request.r(i3435[9], i3435[10], 0, i3434, 'TopBarAnim')
  request.r(i3435[11], i3435[12], 0, i3434, 'MainPanel')
  request.r(i3435[13], i3435[14], 0, i3434, 'PausePanel')
  request.r(i3435[15], i3435[16], 0, i3434, 'PausePopUp')
  request.r(i3435[17], i3435[18], 0, i3434, 'PauseCanvasGroup')
  request.r(i3435[19], i3435[20], 0, i3434, 'RateUsPanel')
  request.r(i3435[21], i3435[22], 0, i3434, 'RateUsPopUp')
  request.r(i3435[23], i3435[24], 0, i3434, 'RemoveAdsPanel')
  request.r(i3435[25], i3435[26], 0, i3434, 'RemoveAdsPopUp')
  request.r(i3435[27], i3435[28], 0, i3434, 'RemoveAdsCanvasGroup')
  var i3437 = i3435[29]
  var i3436 = []
  for(var i = 0; i < i3437.length; i += 2) {
  request.r(i3437[i + 0], i3437[i + 1], 2, i3436, '')
  }
  i3434.RemoveAdsAnims = i3436
  request.r(i3435[30], i3435[31], 0, i3434, 'CompletePanel')
  request.r(i3435[32], i3435[33], 0, i3434, 'LevelIcon')
  request.r(i3435[34], i3435[35], 0, i3434, 'CompleteParticles')
  request.r(i3435[36], i3435[37], 0, i3434, 'progressBar')
  request.r(i3435[38], i3435[39], 0, i3434, 'progressText')
  request.r(i3435[40], i3435[41], 0, i3434, 'toolIcon1')
  request.r(i3435[42], i3435[43], 0, i3434, 'toolIcon2')
  request.r(i3435[44], i3435[45], 0, i3434, 'toolIcon3')
  request.r(i3435[46], i3435[47], 0, i3434, 'toolIcon4')
  request.r(i3435[48], i3435[49], 0, i3434, 'target1')
  request.r(i3435[50], i3435[51], 0, i3434, 'target2')
  i3434.toolMoveDuration = i3435[52]
  i3434.currentIndex = i3435[53]
  var i3439 = i3435[54]
  var i3438 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i3439.length; i += 2) {
  request.r(i3439[i + 0], i3439[i + 1], 1, i3438, '')
  }
  i3434.allTools = i3438
  request.r(i3435[55], i3435[56], 0, i3434, 'clockProgress')
  request.r(i3435[57], i3435[58], 0, i3434, 'clockProgressFill')
  request.r(i3435[59], i3435[60], 0, i3434, 'clockAudio')
  i3434.moveDistance = i3435[61]
  i3434.animationDuration = i3435[62]
  i3434.greyBgChildName = i3435[63]
  i3434.pushOffset = i3435[64]
  return i3434
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i3442 = root || request.c( 'GameManagerPlayable' )
  var i3443 = data
  request.r(i3443[0], i3443[1], 0, i3442, 'endParticles')
  request.r(i3443[2], i3443[3], 0, i3442, 'stepCompleteParticles')
  request.r(i3443[4], i3443[5], 0, i3442, 'DefaultMat')
  request.r(i3443[6], i3443[7], 0, i3442, 'BG_Music')
  request.r(i3443[8], i3443[9], 0, i3442, 'restoreEffectShader')
  request.r(i3443[10], i3443[11], 0, i3442, 'stickerEffectShader')
  i3442.isComplete = !!i3443[12]
  i3442.isPaused = !!i3443[13]
  request.r(i3443[14], i3443[15], 0, i3442, 'currentLevel')
  i3442.startLevelOnPlay = !!i3443[16]
  i3442.currentLevelNo = i3443[17]
  return i3442
}

Deserializers["AudioController"] = function (request, data, root) {
  var i3444 = root || request.c( 'AudioController' )
  var i3445 = data
  request.r(i3445[0], i3445[1], 0, i3444, 'MainMixer')
  request.r(i3445[2], i3445[3], 0, i3444, 'UiClick')
  request.r(i3445[4], i3445[5], 0, i3444, 'UiClickSource')
  var i3447 = i3445[6]
  var i3446 = []
  for(var i = 0; i < i3447.length; i += 2) {
  request.r(i3447[i + 0], i3447[i + 1], 2, i3446, '')
  }
  i3444.SfxSources = i3446
  var i3449 = i3445[7]
  var i3448 = []
  for(var i = 0; i < i3449.length; i += 2) {
  request.r(i3449[i + 0], i3449[i + 1], 2, i3448, '')
  }
  i3444.AllClips = i3448
  return i3444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3453 = data
  i3452.pivot = new pc.Vec2( i3453[0], i3453[1] )
  i3452.anchorMin = new pc.Vec2( i3453[2], i3453[3] )
  i3452.anchorMax = new pc.Vec2( i3453[4], i3453[5] )
  i3452.sizeDelta = new pc.Vec2( i3453[6], i3453[7] )
  i3452.anchoredPosition3D = new pc.Vec3( i3453[8], i3453[9], i3453[10] )
  i3452.rotation = new pc.Quat(i3453[11], i3453[12], i3453[13], i3453[14])
  i3452.scale = new pc.Vec3( i3453[15], i3453[16], i3453[17] )
  return i3452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3455 = data
  i3454.planeDistance = i3455[0]
  i3454.referencePixelsPerUnit = i3455[1]
  i3454.isFallbackOverlay = !!i3455[2]
  i3454.renderMode = i3455[3]
  i3454.renderOrder = i3455[4]
  i3454.sortingLayerName = i3455[5]
  i3454.sortingOrder = i3455[6]
  i3454.scaleFactor = i3455[7]
  request.r(i3455[8], i3455[9], 0, i3454, 'worldCamera')
  i3454.overrideSorting = !!i3455[10]
  i3454.pixelPerfect = !!i3455[11]
  i3454.targetDisplay = i3455[12]
  i3454.overridePixelPerfect = !!i3455[13]
  i3454.enabled = !!i3455[14]
  return i3454
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3456 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3457 = data
  i3456.m_UiScaleMode = i3457[0]
  i3456.m_ReferencePixelsPerUnit = i3457[1]
  i3456.m_ScaleFactor = i3457[2]
  i3456.m_ReferenceResolution = new pc.Vec2( i3457[3], i3457[4] )
  i3456.m_ScreenMatchMode = i3457[5]
  i3456.m_MatchWidthOrHeight = i3457[6]
  i3456.m_PhysicalUnit = i3457[7]
  i3456.m_FallbackScreenDPI = i3457[8]
  i3456.m_DefaultSpriteDPI = i3457[9]
  i3456.m_DynamicPixelsPerUnit = i3457[10]
  i3456.m_PresetInfoIsWorld = !!i3457[11]
  return i3456
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3458 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3459 = data
  i3458.m_IgnoreReversedGraphics = !!i3459[0]
  i3458.m_BlockingObjects = i3459[1]
  i3458.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3459[2] )
  return i3458
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i3460 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i3461 = data
  i3460.targetIsSelf = !!i3461[0]
  request.r(i3461[1], i3461[2], 0, i3460, 'targetGO')
  i3460.tweenTargetIsTargetGO = !!i3461[3]
  i3460.delay = i3461[4]
  i3460.duration = i3461[5]
  i3460.easeType = i3461[6]
  i3460.easeCurve = new pc.AnimationCurve( { keys_flow: i3461[7] } )
  i3460.loopType = i3461[8]
  i3460.loops = i3461[9]
  i3460.id = i3461[10]
  i3460.isRelative = !!i3461[11]
  i3460.isFrom = !!i3461[12]
  i3460.isIndependentUpdate = !!i3461[13]
  i3460.autoKill = !!i3461[14]
  i3460.autoGenerate = !!i3461[15]
  i3460.isActive = !!i3461[16]
  i3460.isValid = !!i3461[17]
  request.r(i3461[18], i3461[19], 0, i3460, 'target')
  i3460.animationType = i3461[20]
  i3460.targetType = i3461[21]
  i3460.forcedTargetType = i3461[22]
  i3460.autoPlay = !!i3461[23]
  i3460.useTargetAsV3 = !!i3461[24]
  i3460.endValueFloat = i3461[25]
  i3460.endValueV3 = new pc.Vec3( i3461[26], i3461[27], i3461[28] )
  i3460.endValueV2 = new pc.Vec2( i3461[29], i3461[30] )
  i3460.endValueColor = new pc.Color(i3461[31], i3461[32], i3461[33], i3461[34])
  i3460.endValueString = i3461[35]
  i3460.endValueRect = UnityEngine.Rect.MinMaxRect(i3461[36], i3461[37], i3461[38], i3461[39])
  request.r(i3461[40], i3461[41], 0, i3460, 'endValueTransform')
  i3460.optionalBool0 = !!i3461[42]
  i3460.optionalBool1 = !!i3461[43]
  i3460.optionalFloat0 = i3461[44]
  i3460.optionalInt0 = i3461[45]
  i3460.optionalRotationMode = i3461[46]
  i3460.optionalScrambleMode = i3461[47]
  i3460.optionalShakeRandomnessMode = i3461[48]
  i3460.optionalString = i3461[49]
  i3460.updateType = i3461[50]
  i3460.isSpeedBased = !!i3461[51]
  i3460.hasOnStart = !!i3461[52]
  i3460.hasOnPlay = !!i3461[53]
  i3460.hasOnUpdate = !!i3461[54]
  i3460.hasOnStepComplete = !!i3461[55]
  i3460.hasOnComplete = !!i3461[56]
  i3460.hasOnTweenCreated = !!i3461[57]
  i3460.hasOnRewind = !!i3461[58]
  i3460.onStart = request.d('UnityEngine.Events.UnityEvent', i3461[59], i3460.onStart)
  i3460.onPlay = request.d('UnityEngine.Events.UnityEvent', i3461[60], i3460.onPlay)
  i3460.onUpdate = request.d('UnityEngine.Events.UnityEvent', i3461[61], i3460.onUpdate)
  i3460.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i3461[62], i3460.onStepComplete)
  i3460.onComplete = request.d('UnityEngine.Events.UnityEvent', i3461[63], i3460.onComplete)
  i3460.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i3461[64], i3460.onTweenCreated)
  i3460.onRewind = request.d('UnityEngine.Events.UnityEvent', i3461[65], i3460.onRewind)
  return i3460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3463 = data
  i3462.cullTransparentMesh = !!i3463[0]
  return i3462
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3464 = root || request.c( 'UnityEngine.UI.Image' )
  var i3465 = data
  request.r(i3465[0], i3465[1], 0, i3464, 'm_Sprite')
  i3464.m_Type = i3465[2]
  i3464.m_PreserveAspect = !!i3465[3]
  i3464.m_FillCenter = !!i3465[4]
  i3464.m_FillMethod = i3465[5]
  i3464.m_FillAmount = i3465[6]
  i3464.m_FillClockwise = !!i3465[7]
  i3464.m_FillOrigin = i3465[8]
  i3464.m_UseSpriteMesh = !!i3465[9]
  i3464.m_PixelsPerUnitMultiplier = i3465[10]
  request.r(i3465[11], i3465[12], 0, i3464, 'm_Material')
  i3464.m_Maskable = !!i3465[13]
  i3464.m_Color = new pc.Color(i3465[14], i3465[15], i3465[16], i3465[17])
  i3464.m_RaycastTarget = !!i3465[18]
  i3464.m_RaycastPadding = new pc.Vec4( i3465[19], i3465[20], i3465[21], i3465[22] )
  return i3464
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i3466 = root || request.c( 'UnityEngine.UI.Text' )
  var i3467 = data
  i3466.m_FontData = request.d('UnityEngine.UI.FontData', i3467[0], i3466.m_FontData)
  i3466.m_Text = i3467[1]
  request.r(i3467[2], i3467[3], 0, i3466, 'm_Material')
  i3466.m_Maskable = !!i3467[4]
  i3466.m_Color = new pc.Color(i3467[5], i3467[6], i3467[7], i3467[8])
  i3466.m_RaycastTarget = !!i3467[9]
  i3466.m_RaycastPadding = new pc.Vec4( i3467[10], i3467[11], i3467[12], i3467[13] )
  return i3466
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i3468 = root || request.c( 'UnityEngine.UI.FontData' )
  var i3469 = data
  request.r(i3469[0], i3469[1], 0, i3468, 'm_Font')
  i3468.m_FontSize = i3469[2]
  i3468.m_FontStyle = i3469[3]
  i3468.m_BestFit = !!i3469[4]
  i3468.m_MinSize = i3469[5]
  i3468.m_MaxSize = i3469[6]
  i3468.m_Alignment = i3469[7]
  i3468.m_AlignByGeometry = !!i3469[8]
  i3468.m_RichText = !!i3469[9]
  i3468.m_HorizontalOverflow = i3469[10]
  i3468.m_VerticalOverflow = i3469[11]
  i3468.m_LineSpacing = i3469[12]
  return i3468
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3470 = root || request.c( 'UnityEngine.UI.Button' )
  var i3471 = data
  i3470.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3471[0], i3470.m_OnClick)
  i3470.m_Navigation = request.d('UnityEngine.UI.Navigation', i3471[1], i3470.m_Navigation)
  i3470.m_Transition = i3471[2]
  i3470.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3471[3], i3470.m_Colors)
  i3470.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3471[4], i3470.m_SpriteState)
  i3470.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3471[5], i3470.m_AnimationTriggers)
  i3470.m_Interactable = !!i3471[6]
  request.r(i3471[7], i3471[8], 0, i3470, 'm_TargetGraphic')
  return i3470
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3472 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3473 = data
  i3472.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3473[0], i3472.m_PersistentCalls)
  return i3472
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3474 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3475 = data
  i3474.m_Mode = i3475[0]
  i3474.m_WrapAround = !!i3475[1]
  request.r(i3475[2], i3475[3], 0, i3474, 'm_SelectOnUp')
  request.r(i3475[4], i3475[5], 0, i3474, 'm_SelectOnDown')
  request.r(i3475[6], i3475[7], 0, i3474, 'm_SelectOnLeft')
  request.r(i3475[8], i3475[9], 0, i3474, 'm_SelectOnRight')
  return i3474
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3476 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3477 = data
  i3476.m_NormalColor = new pc.Color(i3477[0], i3477[1], i3477[2], i3477[3])
  i3476.m_HighlightedColor = new pc.Color(i3477[4], i3477[5], i3477[6], i3477[7])
  i3476.m_PressedColor = new pc.Color(i3477[8], i3477[9], i3477[10], i3477[11])
  i3476.m_SelectedColor = new pc.Color(i3477[12], i3477[13], i3477[14], i3477[15])
  i3476.m_DisabledColor = new pc.Color(i3477[16], i3477[17], i3477[18], i3477[19])
  i3476.m_ColorMultiplier = i3477[20]
  i3476.m_FadeDuration = i3477[21]
  return i3476
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3478 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3479 = data
  request.r(i3479[0], i3479[1], 0, i3478, 'm_HighlightedSprite')
  request.r(i3479[2], i3479[3], 0, i3478, 'm_PressedSprite')
  request.r(i3479[4], i3479[5], 0, i3478, 'm_SelectedSprite')
  request.r(i3479[6], i3479[7], 0, i3478, 'm_DisabledSprite')
  return i3478
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3480 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3481 = data
  i3480.m_NormalTrigger = i3481[0]
  i3480.m_HighlightedTrigger = i3481[1]
  i3480.m_PressedTrigger = i3481[2]
  i3480.m_SelectedTrigger = i3481[3]
  i3480.m_DisabledTrigger = i3481[4]
  return i3480
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i3482 = root || request.c( 'PlayableHudRuntime' )
  var i3483 = data
  return i3482
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3484 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3485 = data
  request.r(i3485[0], i3485[1], 0, i3484, 'm_FirstSelected')
  i3484.m_sendNavigationEvents = !!i3485[2]
  i3484.m_DragThreshold = i3485[3]
  return i3484
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3486 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3487 = data
  i3486.m_HorizontalAxis = i3487[0]
  i3486.m_VerticalAxis = i3487[1]
  i3486.m_SubmitButton = i3487[2]
  i3486.m_CancelButton = i3487[3]
  i3486.m_InputActionsPerSecond = i3487[4]
  i3486.m_RepeatDelay = i3487[5]
  i3486.m_ForceModuleActive = !!i3487[6]
  i3486.m_SendPointerHoverToParent = !!i3487[7]
  return i3486
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i3488 = root || request.c( 'PlayableRouter' )
  var i3489 = data
  var i3491 = i3489[0]
  var i3490 = []
  for(var i = 0; i < i3491.length; i += 2) {
  request.r(i3491[i + 0], i3491[i + 1], 2, i3490, '')
  }
  i3488.menuObjects = i3490
  var i3493 = i3489[1]
  var i3492 = []
  for(var i = 0; i < i3493.length; i += 2) {
  request.r(i3493[i + 0], i3493[i + 1], 2, i3492, '')
  }
  i3488.gameplayObjects = i3492
  var i3495 = i3489[2]
  var i3494 = []
  for(var i = 0; i < i3495.length; i += 1) {
    i3494.push( request.d('PlayableRouter+SubLevelSlot', i3495[i + 0]) );
  }
  i3488.subLevels = i3494
  i3488.fadeDuration = i3489[3]
  i3488.onMenuClosing = request.d('UnityEngine.Events.UnityEvent', i3489[4], i3488.onMenuClosing)
  i3488.lockedMessage = i3489[5]
  i3488.lockedTapsToCTA = i3489[6]
  return i3488
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i3498 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i3499 = data
  request.r(i3499[0], i3499[1], 0, i3498, 'button')
  request.r(i3499[2], i3499[3], 0, i3498, 'level')
  return i3498
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i3500 = root || request.c( 'ToastManager' )
  var i3501 = data
  request.r(i3501[0], i3501[1], 0, i3500, 'toastPanel')
  request.r(i3501[2], i3501[3], 0, i3500, 'toastPopup')
  request.r(i3501[4], i3501[5], 0, i3500, 'canvasGroup')
  request.r(i3501[6], i3501[7], 0, i3500, 'toastText')
  i3500.startY = i3501[8]
  i3500.visibleY = i3501[9]
  i3500.endY = i3501[10]
  i3500.animationTime = i3501[11]
  i3500.animationTimeUp = i3501[12]
  return i3500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i3502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i3503 = data
  i3502.m_Alpha = i3503[0]
  i3502.m_Interactable = !!i3503[1]
  i3502.m_BlocksRaycasts = !!i3503[2]
  i3502.m_IgnoreParentGroups = !!i3503[3]
  i3502.enabled = !!i3503[4]
  return i3502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3505 = data
  i3504.ambientIntensity = i3505[0]
  i3504.reflectionIntensity = i3505[1]
  i3504.ambientMode = i3505[2]
  i3504.ambientLight = new pc.Color(i3505[3], i3505[4], i3505[5], i3505[6])
  i3504.ambientSkyColor = new pc.Color(i3505[7], i3505[8], i3505[9], i3505[10])
  i3504.ambientGroundColor = new pc.Color(i3505[11], i3505[12], i3505[13], i3505[14])
  i3504.ambientEquatorColor = new pc.Color(i3505[15], i3505[16], i3505[17], i3505[18])
  i3504.fogColor = new pc.Color(i3505[19], i3505[20], i3505[21], i3505[22])
  i3504.fogEndDistance = i3505[23]
  i3504.fogStartDistance = i3505[24]
  i3504.fogDensity = i3505[25]
  i3504.fog = !!i3505[26]
  request.r(i3505[27], i3505[28], 0, i3504, 'skybox')
  i3504.fogMode = i3505[29]
  var i3507 = i3505[30]
  var i3506 = []
  for(var i = 0; i < i3507.length; i += 1) {
    i3506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3507[i + 0]) );
  }
  i3504.lightmaps = i3506
  i3504.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3505[31], i3504.lightProbes)
  i3504.lightmapsMode = i3505[32]
  i3504.mixedBakeMode = i3505[33]
  i3504.environmentLightingMode = i3505[34]
  i3504.ambientProbe = new pc.SphericalHarmonicsL2(i3505[35])
  request.r(i3505[36], i3505[37], 0, i3504, 'customReflection')
  request.r(i3505[38], i3505[39], 0, i3504, 'defaultReflection')
  i3504.defaultReflectionMode = i3505[40]
  i3504.defaultReflectionResolution = i3505[41]
  i3504.sunLightObjectId = i3505[42]
  i3504.pixelLightCount = i3505[43]
  i3504.defaultReflectionHDR = !!i3505[44]
  i3504.hasLightDataAsset = !!i3505[45]
  i3504.hasManualGenerate = !!i3505[46]
  return i3504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3511 = data
  request.r(i3511[0], i3511[1], 0, i3510, 'lightmapColor')
  request.r(i3511[2], i3511[3], 0, i3510, 'lightmapDirection')
  request.r(i3511[4], i3511[5], 0, i3510, 'shadowMask')
  return i3510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3512 = root || new UnityEngine.LightProbes()
  var i3513 = data
  return i3512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3519 = data
  var i3521 = i3519[0]
  var i3520 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i3521.length; i += 1) {
    i3520.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i3521[i + 0]));
  }
  i3518.ShaderCompilationErrors = i3520
  i3518.name = i3519[1]
  i3518.guid = i3519[2]
  var i3523 = i3519[3]
  var i3522 = []
  for(var i = 0; i < i3523.length; i += 1) {
    i3522.push( i3523[i + 0] );
  }
  i3518.shaderDefinedKeywords = i3522
  var i3525 = i3519[4]
  var i3524 = []
  for(var i = 0; i < i3525.length; i += 1) {
    i3524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3525[i + 0]) );
  }
  i3518.passes = i3524
  var i3527 = i3519[5]
  var i3526 = []
  for(var i = 0; i < i3527.length; i += 1) {
    i3526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3527[i + 0]) );
  }
  i3518.usePasses = i3526
  var i3529 = i3519[6]
  var i3528 = []
  for(var i = 0; i < i3529.length; i += 1) {
    i3528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3529[i + 0]) );
  }
  i3518.defaultParameterValues = i3528
  request.r(i3519[7], i3519[8], 0, i3518, 'unityFallbackShader')
  i3518.readDepth = !!i3519[9]
  i3518.hasDepthOnlyPass = !!i3519[10]
  i3518.isCreatedByShaderGraph = !!i3519[11]
  i3518.disableBatching = !!i3519[12]
  i3518.compiled = !!i3519[13]
  return i3518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i3532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i3533 = data
  i3532.shaderName = i3533[0]
  i3532.errorMessage = i3533[1]
  return i3532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3538 = root || new pc.UnityShaderPass()
  var i3539 = data
  i3538.id = i3539[0]
  i3538.subShaderIndex = i3539[1]
  i3538.name = i3539[2]
  i3538.passType = i3539[3]
  i3538.grabPassTextureName = i3539[4]
  i3538.usePass = !!i3539[5]
  i3538.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3539[6], i3538.zTest)
  i3538.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3539[7], i3538.zWrite)
  i3538.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3539[8], i3538.culling)
  i3538.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3539[9], i3538.blending)
  i3538.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3539[10], i3538.alphaBlending)
  i3538.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3539[11], i3538.colorWriteMask)
  i3538.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3539[12], i3538.offsetUnits)
  i3538.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3539[13], i3538.offsetFactor)
  i3538.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3539[14], i3538.stencilRef)
  i3538.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3539[15], i3538.stencilReadMask)
  i3538.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3539[16], i3538.stencilWriteMask)
  i3538.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3539[17], i3538.stencilOp)
  i3538.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3539[18], i3538.stencilOpFront)
  i3538.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3539[19], i3538.stencilOpBack)
  var i3541 = i3539[20]
  var i3540 = []
  for(var i = 0; i < i3541.length; i += 1) {
    i3540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3541[i + 0]) );
  }
  i3538.tags = i3540
  var i3543 = i3539[21]
  var i3542 = []
  for(var i = 0; i < i3543.length; i += 1) {
    i3542.push( i3543[i + 0] );
  }
  i3538.passDefinedKeywords = i3542
  var i3545 = i3539[22]
  var i3544 = []
  for(var i = 0; i < i3545.length; i += 1) {
    i3544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3545[i + 0]) );
  }
  i3538.passDefinedKeywordGroups = i3544
  var i3547 = i3539[23]
  var i3546 = []
  for(var i = 0; i < i3547.length; i += 1) {
    i3546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3547[i + 0]) );
  }
  i3538.variants = i3546
  var i3549 = i3539[24]
  var i3548 = []
  for(var i = 0; i < i3549.length; i += 1) {
    i3548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3549[i + 0]) );
  }
  i3538.excludedVariants = i3548
  i3538.hasDepthReader = !!i3539[25]
  return i3538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3551 = data
  i3550.val = i3551[0]
  i3550.name = i3551[1]
  return i3550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3553 = data
  i3552.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3553[0], i3552.src)
  i3552.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3553[1], i3552.dst)
  i3552.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3553[2], i3552.op)
  return i3552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3555 = data
  i3554.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3555[0], i3554.pass)
  i3554.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3555[1], i3554.fail)
  i3554.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3555[2], i3554.zFail)
  i3554.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3555[3], i3554.comp)
  return i3554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3559 = data
  i3558.name = i3559[0]
  i3558.value = i3559[1]
  return i3558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3563 = data
  var i3565 = i3563[0]
  var i3564 = []
  for(var i = 0; i < i3565.length; i += 1) {
    i3564.push( i3565[i + 0] );
  }
  i3562.keywords = i3564
  i3562.hasDiscard = !!i3563[1]
  return i3562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3569 = data
  i3568.passId = i3569[0]
  i3568.subShaderIndex = i3569[1]
  var i3571 = i3569[2]
  var i3570 = []
  for(var i = 0; i < i3571.length; i += 1) {
    i3570.push( i3571[i + 0] );
  }
  i3568.keywords = i3570
  i3568.vertexProgram = i3569[3]
  i3568.fragmentProgram = i3569[4]
  i3568.exportedForWebGl2 = !!i3569[5]
  i3568.readDepth = !!i3569[6]
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3575 = data
  request.r(i3575[0], i3575[1], 0, i3574, 'shader')
  i3574.pass = i3575[2]
  return i3574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3579 = data
  i3578.name = i3579[0]
  i3578.type = i3579[1]
  i3578.value = new pc.Vec4( i3579[2], i3579[3], i3579[4], i3579[5] )
  i3578.textureValue = i3579[6]
  i3578.shaderPropertyFlag = i3579[7]
  return i3578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3581 = data
  i3580.name = i3581[0]
  request.r(i3581[1], i3581[2], 0, i3580, 'texture')
  i3580.aabb = i3581[3]
  i3580.vertices = i3581[4]
  i3580.triangles = i3581[5]
  i3580.textureRect = UnityEngine.Rect.MinMaxRect(i3581[6], i3581[7], i3581[8], i3581[9])
  i3580.packedRect = UnityEngine.Rect.MinMaxRect(i3581[10], i3581[11], i3581[12], i3581[13])
  i3580.border = new pc.Vec4( i3581[14], i3581[15], i3581[16], i3581[17] )
  i3580.transparency = i3581[18]
  i3580.bounds = i3581[19]
  i3580.pixelsPerUnit = i3581[20]
  i3580.textureWidth = i3581[21]
  i3580.textureHeight = i3581[22]
  i3580.nativeSize = new pc.Vec2( i3581[23], i3581[24] )
  i3580.pivot = new pc.Vec2( i3581[25], i3581[26] )
  i3580.textureRectOffset = new pc.Vec2( i3581[27], i3581[28] )
  return i3580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i3582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i3583 = data
  i3582.name = i3583[0]
  return i3582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3585 = data
  i3584.name = i3585[0]
  i3584.wrapMode = i3585[1]
  i3584.isLooping = !!i3585[2]
  i3584.length = i3585[3]
  var i3587 = i3585[4]
  var i3586 = []
  for(var i = 0; i < i3587.length; i += 1) {
    i3586.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3587[i + 0]) );
  }
  i3584.curves = i3586
  var i3589 = i3585[5]
  var i3588 = []
  for(var i = 0; i < i3589.length; i += 1) {
    i3588.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3589[i + 0]) );
  }
  i3584.events = i3588
  i3584.halfPrecision = !!i3585[6]
  i3584._frameRate = i3585[7]
  i3584.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i3585[8], i3584.localBounds)
  i3584.hasMuscleCurves = !!i3585[9]
  var i3591 = i3585[10]
  var i3590 = []
  for(var i = 0; i < i3591.length; i += 1) {
    i3590.push( i3591[i + 0] );
  }
  i3584.clipMuscleConstant = i3590
  i3584.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i3585[11], i3584.clipBindingConstant)
  return i3584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3595 = data
  i3594.path = i3595[0]
  i3594.hash = i3595[1]
  i3594.componentType = i3595[2]
  i3594.property = i3595[3]
  i3594.keys = i3595[4]
  var i3597 = i3595[5]
  var i3596 = []
  for(var i = 0; i < i3597.length; i += 1) {
    i3596.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3597[i + 0]) );
  }
  i3594.objectReferenceKeys = i3596
  return i3594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3601 = data
  i3600.time = i3601[0]
  request.r(i3601[1], i3601[2], 0, i3600, 'value')
  return i3600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3605 = data
  i3604.functionName = i3605[0]
  i3604.floatParameter = i3605[1]
  i3604.intParameter = i3605[2]
  i3604.stringParameter = i3605[3]
  request.r(i3605[4], i3605[5], 0, i3604, 'objectReferenceParameter')
  i3604.time = i3605[6]
  return i3604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i3606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i3607 = data
  i3606.center = new pc.Vec3( i3607[0], i3607[1], i3607[2] )
  i3606.extends = new pc.Vec3( i3607[3], i3607[4], i3607[5] )
  return i3606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i3610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i3611 = data
  var i3613 = i3611[0]
  var i3612 = []
  for(var i = 0; i < i3613.length; i += 1) {
    i3612.push( i3613[i + 0] );
  }
  i3610.genericBindings = i3612
  var i3615 = i3611[1]
  var i3614 = []
  for(var i = 0; i < i3615.length; i += 1) {
    i3614.push( i3615[i + 0] );
  }
  i3610.pptrCurveMapping = i3614
  return i3610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3617 = data
  i3616.name = i3617[0]
  i3616.ascent = i3617[1]
  i3616.originalLineHeight = i3617[2]
  i3616.fontSize = i3617[3]
  var i3619 = i3617[4]
  var i3618 = []
  for(var i = 0; i < i3619.length; i += 1) {
    i3618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3619[i + 0]) );
  }
  i3616.characterInfo = i3618
  request.r(i3617[5], i3617[6], 0, i3616, 'texture')
  i3616.originalFontSize = i3617[7]
  return i3616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3623 = data
  i3622.index = i3623[0]
  i3622.advance = i3623[1]
  i3622.bearing = i3623[2]
  i3622.glyphWidth = i3623[3]
  i3622.glyphHeight = i3623[4]
  i3622.minX = i3623[5]
  i3622.maxX = i3623[6]
  i3622.minY = i3623[7]
  i3622.maxY = i3623[8]
  i3622.uvBottomLeftX = i3623[9]
  i3622.uvBottomLeftY = i3623[10]
  i3622.uvBottomRightX = i3623[11]
  i3622.uvBottomRightY = i3623[12]
  i3622.uvTopLeftX = i3623[13]
  i3622.uvTopLeftY = i3623[14]
  i3622.uvTopRightX = i3623[15]
  i3622.uvTopRightY = i3623[16]
  return i3622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3625 = data
  i3624.name = i3625[0]
  var i3627 = i3625[1]
  var i3626 = []
  for(var i = 0; i < i3627.length; i += 1) {
    i3626.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3627[i + 0]) );
  }
  i3624.layers = i3626
  var i3629 = i3625[2]
  var i3628 = []
  for(var i = 0; i < i3629.length; i += 1) {
    i3628.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3629[i + 0]) );
  }
  i3624.parameters = i3628
  i3624.animationClips = i3625[3]
  i3624.avatarUnsupported = i3625[4]
  return i3624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i3632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i3633 = data
  i3632.name = i3633[0]
  i3632.defaultWeight = i3633[1]
  i3632.blendingMode = i3633[2]
  i3632.avatarMask = i3633[3]
  i3632.syncedLayerIndex = i3633[4]
  i3632.syncedLayerAffectsTiming = !!i3633[5]
  i3632.syncedLayers = i3633[6]
  i3632.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3633[7], i3632.stateMachine)
  return i3632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i3634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i3635 = data
  i3634.id = i3635[0]
  i3634.name = i3635[1]
  i3634.path = i3635[2]
  var i3637 = i3635[3]
  var i3636 = []
  for(var i = 0; i < i3637.length; i += 1) {
    i3636.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3637[i + 0]) );
  }
  i3634.states = i3636
  var i3639 = i3635[4]
  var i3638 = []
  for(var i = 0; i < i3639.length; i += 1) {
    i3638.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i3639[i + 0]) );
  }
  i3634.machines = i3638
  var i3641 = i3635[5]
  var i3640 = []
  for(var i = 0; i < i3641.length; i += 1) {
    i3640.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3641[i + 0]) );
  }
  i3634.entryStateTransitions = i3640
  var i3643 = i3635[6]
  var i3642 = []
  for(var i = 0; i < i3643.length; i += 1) {
    i3642.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i3643[i + 0]) );
  }
  i3634.exitStateTransitions = i3642
  var i3645 = i3635[7]
  var i3644 = []
  for(var i = 0; i < i3645.length; i += 1) {
    i3644.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3645[i + 0]) );
  }
  i3634.anyStateTransitions = i3644
  i3634.defaultStateId = i3635[8]
  return i3634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3649 = data
  i3648.id = i3649[0]
  i3648.name = i3649[1]
  i3648.cycleOffset = i3649[2]
  i3648.cycleOffsetParameter = i3649[3]
  i3648.cycleOffsetParameterActive = !!i3649[4]
  i3648.mirror = !!i3649[5]
  i3648.mirrorParameter = i3649[6]
  i3648.mirrorParameterActive = !!i3649[7]
  i3648.motionId = i3649[8]
  i3648.nameHash = i3649[9]
  i3648.fullPathHash = i3649[10]
  i3648.speed = i3649[11]
  i3648.speedParameter = i3649[12]
  i3648.speedParameterActive = !!i3649[13]
  i3648.tag = i3649[14]
  i3648.tagHash = i3649[15]
  i3648.writeDefaultValues = !!i3649[16]
  var i3651 = i3649[17]
  var i3650 = []
  for(var i = 0; i < i3651.length; i += 2) {
  request.r(i3651[i + 0], i3651[i + 1], 2, i3650, '')
  }
  i3648.behaviours = i3650
  var i3653 = i3649[18]
  var i3652 = []
  for(var i = 0; i < i3653.length; i += 1) {
    i3652.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i3653[i + 0]) );
  }
  i3648.transitions = i3652
  return i3648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i3658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i3659 = data
  i3658.fullPath = i3659[0]
  i3658.canTransitionToSelf = !!i3659[1]
  i3658.duration = i3659[2]
  i3658.exitTime = i3659[3]
  i3658.hasExitTime = !!i3659[4]
  i3658.hasFixedDuration = !!i3659[5]
  i3658.interruptionSource = i3659[6]
  i3658.offset = i3659[7]
  i3658.orderedInterruption = !!i3659[8]
  i3658.destinationStateId = i3659[9]
  i3658.isExit = !!i3659[10]
  i3658.mute = !!i3659[11]
  i3658.solo = !!i3659[12]
  var i3661 = i3659[13]
  var i3660 = []
  for(var i = 0; i < i3661.length; i += 1) {
    i3660.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3661[i + 0]) );
  }
  i3658.conditions = i3660
  return i3658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i3666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i3667 = data
  i3666.destinationStateId = i3667[0]
  i3666.isExit = !!i3667[1]
  i3666.mute = !!i3667[2]
  i3666.solo = !!i3667[3]
  var i3669 = i3667[4]
  var i3668 = []
  for(var i = 0; i < i3669.length; i += 1) {
    i3668.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i3669[i + 0]) );
  }
  i3666.conditions = i3668
  return i3666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i3672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i3673 = data
  i3672.mode = i3673[0]
  i3672.parameter = i3673[1]
  i3672.threshold = i3673[2]
  return i3672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i3676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i3677 = data
  i3676.defaultBool = !!i3677[0]
  i3676.defaultFloat = i3677[1]
  i3676.defaultInt = i3677[2]
  i3676.name = i3677[3]
  i3676.nameHash = i3677[4]
  i3676.type = i3677[5]
  return i3676
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i3678 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i3679 = data
  i3678.useSafeMode = !!i3679[0]
  i3678.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i3679[1], i3678.safeModeOptions)
  i3678.timeScale = i3679[2]
  i3678.unscaledTimeScale = i3679[3]
  i3678.useSmoothDeltaTime = !!i3679[4]
  i3678.maxSmoothUnscaledTime = i3679[5]
  i3678.rewindCallbackMode = i3679[6]
  i3678.showUnityEditorReport = !!i3679[7]
  i3678.logBehaviour = i3679[8]
  i3678.drawGizmos = !!i3679[9]
  i3678.defaultRecyclable = !!i3679[10]
  i3678.defaultAutoPlay = i3679[11]
  i3678.defaultUpdateType = i3679[12]
  i3678.defaultTimeScaleIndependent = !!i3679[13]
  i3678.defaultEaseType = i3679[14]
  i3678.defaultEaseOvershootOrAmplitude = i3679[15]
  i3678.defaultEasePeriod = i3679[16]
  i3678.defaultAutoKill = !!i3679[17]
  i3678.defaultLoopType = i3679[18]
  i3678.debugMode = !!i3679[19]
  i3678.debugStoreTargetId = !!i3679[20]
  i3678.showPreviewPanel = !!i3679[21]
  i3678.storeSettingsLocation = i3679[22]
  i3678.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i3679[23], i3678.modules)
  i3678.createASMDEF = !!i3679[24]
  i3678.showPlayingTweens = !!i3679[25]
  i3678.showPausedTweens = !!i3679[26]
  return i3678
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i3680 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i3681 = data
  i3680.logBehaviour = i3681[0]
  i3680.nestedTweenFailureBehaviour = i3681[1]
  return i3680
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i3682 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i3683 = data
  i3682.showPanel = !!i3683[0]
  i3682.audioEnabled = !!i3683[1]
  i3682.physicsEnabled = !!i3683[2]
  i3682.physics2DEnabled = !!i3683[3]
  i3682.spriteEnabled = !!i3683[4]
  i3682.uiEnabled = !!i3683[5]
  i3682.textMeshProEnabled = !!i3683[6]
  i3682.tk2DEnabled = !!i3683[7]
  i3682.deAudioEnabled = !!i3683[8]
  i3682.deUnityExtendedEnabled = !!i3683[9]
  i3682.epoOutlineEnabled = !!i3683[10]
  return i3682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i3684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i3685 = data
  var i3687 = i3685[0]
  var i3686 = []
  for(var i = 0; i < i3687.length; i += 1) {
    i3686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i3687[i + 0]) );
  }
  i3684.files = i3686
  i3684.componentToPrefabIds = i3685[1]
  return i3684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i3690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i3691 = data
  i3690.path = i3691[0]
  request.r(i3691[1], i3691[2], 0, i3690, 'unityObject')
  return i3690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i3692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i3693 = data
  var i3695 = i3693[0]
  var i3694 = []
  for(var i = 0; i < i3695.length; i += 1) {
    i3694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i3695[i + 0]) );
  }
  i3692.scriptsExecutionOrder = i3694
  var i3697 = i3693[1]
  var i3696 = []
  for(var i = 0; i < i3697.length; i += 1) {
    i3696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i3697[i + 0]) );
  }
  i3692.sortingLayers = i3696
  var i3699 = i3693[2]
  var i3698 = []
  for(var i = 0; i < i3699.length; i += 1) {
    i3698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i3699[i + 0]) );
  }
  i3692.cullingLayers = i3698
  i3692.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i3693[3], i3692.timeSettings)
  i3692.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i3693[4], i3692.physicsSettings)
  i3692.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i3693[5], i3692.physics2DSettings)
  i3692.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3693[6], i3692.qualitySettings)
  i3692.enableRealtimeShadows = !!i3693[7]
  i3692.enableAutoInstancing = !!i3693[8]
  i3692.enableStaticBatching = !!i3693[9]
  i3692.enableDynamicBatching = !!i3693[10]
  i3692.usePreservativeDynamicBatching = !!i3693[11]
  i3692.lightmapEncodingQuality = i3693[12]
  i3692.desiredColorSpace = i3693[13]
  var i3701 = i3693[14]
  var i3700 = []
  for(var i = 0; i < i3701.length; i += 1) {
    i3700.push( i3701[i + 0] );
  }
  i3692.allTags = i3700
  return i3692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i3704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i3705 = data
  i3704.name = i3705[0]
  i3704.value = i3705[1]
  return i3704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i3708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i3709 = data
  i3708.id = i3709[0]
  i3708.name = i3709[1]
  i3708.value = i3709[2]
  return i3708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i3712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i3713 = data
  i3712.id = i3713[0]
  i3712.name = i3713[1]
  return i3712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i3714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i3715 = data
  i3714.fixedDeltaTime = i3715[0]
  i3714.maximumDeltaTime = i3715[1]
  i3714.timeScale = i3715[2]
  i3714.maximumParticleTimestep = i3715[3]
  return i3714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i3716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i3717 = data
  i3716.gravity = new pc.Vec3( i3717[0], i3717[1], i3717[2] )
  i3716.defaultSolverIterations = i3717[3]
  i3716.bounceThreshold = i3717[4]
  i3716.autoSyncTransforms = !!i3717[5]
  i3716.autoSimulation = !!i3717[6]
  var i3719 = i3717[7]
  var i3718 = []
  for(var i = 0; i < i3719.length; i += 1) {
    i3718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i3719[i + 0]) );
  }
  i3716.collisionMatrix = i3718
  return i3716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i3722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i3723 = data
  i3722.enabled = !!i3723[0]
  i3722.layerId = i3723[1]
  i3722.otherLayerId = i3723[2]
  return i3722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i3724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i3725 = data
  request.r(i3725[0], i3725[1], 0, i3724, 'material')
  i3724.gravity = new pc.Vec2( i3725[2], i3725[3] )
  i3724.positionIterations = i3725[4]
  i3724.velocityIterations = i3725[5]
  i3724.velocityThreshold = i3725[6]
  i3724.maxLinearCorrection = i3725[7]
  i3724.maxAngularCorrection = i3725[8]
  i3724.maxTranslationSpeed = i3725[9]
  i3724.maxRotationSpeed = i3725[10]
  i3724.baumgarteScale = i3725[11]
  i3724.baumgarteTOIScale = i3725[12]
  i3724.timeToSleep = i3725[13]
  i3724.linearSleepTolerance = i3725[14]
  i3724.angularSleepTolerance = i3725[15]
  i3724.defaultContactOffset = i3725[16]
  i3724.autoSimulation = !!i3725[17]
  i3724.queriesHitTriggers = !!i3725[18]
  i3724.queriesStartInColliders = !!i3725[19]
  i3724.callbacksOnDisable = !!i3725[20]
  i3724.reuseCollisionCallbacks = !!i3725[21]
  i3724.autoSyncTransforms = !!i3725[22]
  var i3727 = i3725[23]
  var i3726 = []
  for(var i = 0; i < i3727.length; i += 1) {
    i3726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i3727[i + 0]) );
  }
  i3724.collisionMatrix = i3726
  return i3724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i3730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i3731 = data
  i3730.enabled = !!i3731[0]
  i3730.layerId = i3731[1]
  i3730.otherLayerId = i3731[2]
  return i3730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i3732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i3733 = data
  var i3735 = i3733[0]
  var i3734 = []
  for(var i = 0; i < i3735.length; i += 1) {
    i3734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i3735[i + 0]) );
  }
  i3732.qualityLevels = i3734
  var i3737 = i3733[1]
  var i3736 = []
  for(var i = 0; i < i3737.length; i += 1) {
    i3736.push( i3737[i + 0] );
  }
  i3732.names = i3736
  i3732.shadows = i3733[2]
  i3732.anisotropicFiltering = i3733[3]
  i3732.antiAliasing = i3733[4]
  i3732.lodBias = i3733[5]
  i3732.shadowCascades = i3733[6]
  i3732.shadowDistance = i3733[7]
  i3732.shadowmaskMode = i3733[8]
  i3732.shadowProjection = i3733[9]
  i3732.shadowResolution = i3733[10]
  i3732.softParticles = !!i3733[11]
  i3732.softVegetation = !!i3733[12]
  i3732.activeColorSpace = i3733[13]
  i3732.desiredColorSpace = i3733[14]
  i3732.masterTextureLimit = i3733[15]
  i3732.maxQueuedFrames = i3733[16]
  i3732.particleRaycastBudget = i3733[17]
  i3732.pixelLightCount = i3733[18]
  i3732.realtimeReflectionProbes = !!i3733[19]
  i3732.shadowCascade2Split = i3733[20]
  i3732.shadowCascade4Split = new pc.Vec3( i3733[21], i3733[22], i3733[23] )
  i3732.streamingMipmapsActive = !!i3733[24]
  i3732.vSyncCount = i3733[25]
  i3732.asyncUploadBufferSize = i3733[26]
  i3732.asyncUploadTimeSlice = i3733[27]
  i3732.billboardsFaceCameraPosition = !!i3733[28]
  i3732.shadowNearPlaneOffset = i3733[29]
  i3732.streamingMipmapsMemoryBudget = i3733[30]
  i3732.maximumLODLevel = i3733[31]
  i3732.streamingMipmapsAddAllCameras = !!i3733[32]
  i3732.streamingMipmapsMaxLevelReduction = i3733[33]
  i3732.streamingMipmapsRenderersPerFrame = i3733[34]
  i3732.resolutionScalingFixedDPIFactor = i3733[35]
  i3732.streamingMipmapsMaxFileIORequests = i3733[36]
  i3732.currentQualityLevel = i3733[37]
  return i3732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i3740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i3741 = data
  var i3743 = i3741[0]
  var i3742 = []
  for(var i = 0; i < i3743.length; i += 1) {
    i3742.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i3743[i + 0]) );
  }
  i3740.groups = i3742
  var i3745 = i3741[1]
  var i3744 = []
  for(var i = 0; i < i3745.length; i += 1) {
    i3744.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i3745[i + 0]) );
  }
  i3740.snapshots = i3744
  return i3740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i3748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i3749 = data
  i3748.id = i3749[0]
  i3748.childGroupIds = i3749[1]
  i3748.name = i3749[2]
  return i3748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i3752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i3753 = data
  i3752.id = i3753[0]
  var i3755 = i3753[1]
  var i3754 = []
  for(var i = 0; i < i3755.length; i += 1) {
    i3754.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i3755[i + 0]) );
  }
  i3752.parameters = i3754
  return i3752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i3758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i3759 = data
  i3758.name = i3759[0]
  i3758.value = i3759[1]
  return i3758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3763 = data
  i3762.weight = i3763[0]
  i3762.vertices = i3763[1]
  i3762.normals = i3763[2]
  i3762.tangents = i3763[3]
  return i3762
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[74],"75":[39],"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[77],"84":[35],"85":[35],"86":[35],"87":[35],"88":[35],"89":[35],"90":[35],"91":[35],"92":[35],"93":[35],"94":[35],"95":[35],"96":[35],"97":[39],"98":[99],"100":[101],"102":[101],"51":[44],"103":[104],"105":[12],"106":[25],"107":[12],"108":[109],"110":[109],"111":[46],"112":[25],"113":[12],"114":[10],"29":[12],"115":[44],"116":[44],"54":[51],"45":[55,44],"117":[44],"53":[51],"118":[44],"119":[44],"120":[44],"121":[44],"122":[44],"123":[44],"124":[44],"125":[44],"126":[44],"127":[55,44],"128":[44],"129":[44],"130":[44],"131":[44],"47":[55,44],"132":[44],"133":[59],"134":[59],"60":[59],"135":[59],"136":[39],"137":[39]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level3_Crown_Playable_NewTest","UnityEngine.GameObject","BasicDrag","BD_CameraFollow","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.AudioClip","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","PlayParticlesOnCollision","UnityEngine.CircleCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.PolygonCollider2D","UnityEngine.BoxCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SpriteMask","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.TrailRenderer","BD_Progress","BD_Clamp","BD_ToolRotate","BD_AnimatorDrag","UnityEngine.Rigidbody2D","BD_SpriteChange","BD_ProgressHelper","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableRouter","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","TeaseTapCTA","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "27.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "CrownTesting-v2";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1696";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3876";

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

Deserializers.buildID = "f2d405d3-9528-44c6-8bb2-52584d5f9ba7";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

