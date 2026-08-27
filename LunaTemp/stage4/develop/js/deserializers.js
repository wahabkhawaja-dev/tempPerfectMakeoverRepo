var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i8164 = root || request.c( 'UnityEngine.JointSpring' )
  var i8165 = data
  i8164.spring = i8165[0]
  i8164.damper = i8165[1]
  i8164.targetPosition = i8165[2]
  return i8164
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i8166 = root || request.c( 'UnityEngine.JointMotor' )
  var i8167 = data
  i8166.m_TargetVelocity = i8167[0]
  i8166.m_Force = i8167[1]
  i8166.m_FreeSpin = i8167[2]
  return i8166
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i8168 = root || request.c( 'UnityEngine.JointLimits' )
  var i8169 = data
  i8168.m_Min = i8169[0]
  i8168.m_Max = i8169[1]
  i8168.m_Bounciness = i8169[2]
  i8168.m_BounceMinVelocity = i8169[3]
  i8168.m_ContactDistance = i8169[4]
  i8168.minBounce = i8169[5]
  i8168.maxBounce = i8169[6]
  return i8168
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i8170 = root || request.c( 'UnityEngine.JointDrive' )
  var i8171 = data
  i8170.m_PositionSpring = i8171[0]
  i8170.m_PositionDamper = i8171[1]
  i8170.m_MaximumForce = i8171[2]
  i8170.m_UseAcceleration = i8171[3]
  return i8170
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i8172 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i8173 = data
  i8172.m_Spring = i8173[0]
  i8172.m_Damper = i8173[1]
  return i8172
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i8174 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i8175 = data
  i8174.m_Limit = i8175[0]
  i8174.m_Bounciness = i8175[1]
  i8174.m_ContactDistance = i8175[2]
  return i8174
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i8176 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i8177 = data
  i8176.m_ExtremumSlip = i8177[0]
  i8176.m_ExtremumValue = i8177[1]
  i8176.m_AsymptoteSlip = i8177[2]
  i8176.m_AsymptoteValue = i8177[3]
  i8176.m_Stiffness = i8177[4]
  return i8176
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i8178 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i8179 = data
  i8178.m_LowerAngle = i8179[0]
  i8178.m_UpperAngle = i8179[1]
  return i8178
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i8180 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i8181 = data
  i8180.m_MotorSpeed = i8181[0]
  i8180.m_MaximumMotorTorque = i8181[1]
  return i8180
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i8182 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i8183 = data
  i8182.m_DampingRatio = i8183[0]
  i8182.m_Frequency = i8183[1]
  i8182.m_Angle = i8183[2]
  return i8182
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i8184 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i8185 = data
  i8184.m_LowerTranslation = i8185[0]
  i8184.m_UpperTranslation = i8185[1]
  return i8184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i8186 = root || new pc.UnityMaterial()
  var i8187 = data
  i8186.name = i8187[0]
  request.r(i8187[1], i8187[2], 0, i8186, 'shader')
  i8186.renderQueue = i8187[3]
  i8186.enableInstancing = !!i8187[4]
  var i8189 = i8187[5]
  var i8188 = []
  for(var i = 0; i < i8189.length; i += 1) {
    i8188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i8189[i + 0]) );
  }
  i8186.floatParameters = i8188
  var i8191 = i8187[6]
  var i8190 = []
  for(var i = 0; i < i8191.length; i += 1) {
    i8190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i8191[i + 0]) );
  }
  i8186.colorParameters = i8190
  var i8193 = i8187[7]
  var i8192 = []
  for(var i = 0; i < i8193.length; i += 1) {
    i8192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i8193[i + 0]) );
  }
  i8186.vectorParameters = i8192
  var i8195 = i8187[8]
  var i8194 = []
  for(var i = 0; i < i8195.length; i += 1) {
    i8194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i8195[i + 0]) );
  }
  i8186.textureParameters = i8194
  var i8197 = i8187[9]
  var i8196 = []
  for(var i = 0; i < i8197.length; i += 1) {
    i8196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i8197[i + 0]) );
  }
  i8186.materialFlags = i8196
  return i8186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i8200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i8201 = data
  i8200.name = i8201[0]
  i8200.value = i8201[1]
  return i8200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i8204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i8205 = data
  i8204.name = i8205[0]
  i8204.value = new pc.Color(i8205[1], i8205[2], i8205[3], i8205[4])
  return i8204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i8208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i8209 = data
  i8208.name = i8209[0]
  i8208.value = new pc.Vec4( i8209[1], i8209[2], i8209[3], i8209[4] )
  return i8208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i8212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i8213 = data
  i8212.name = i8213[0]
  request.r(i8213[1], i8213[2], 0, i8212, 'value')
  return i8212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i8216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i8217 = data
  i8216.name = i8217[0]
  i8216.enabled = !!i8217[1]
  return i8216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i8218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i8219 = data
  i8218.name = i8219[0]
  i8218.width = i8219[1]
  i8218.height = i8219[2]
  i8218.mipmapCount = i8219[3]
  i8218.anisoLevel = i8219[4]
  i8218.filterMode = i8219[5]
  i8218.hdr = !!i8219[6]
  i8218.format = i8219[7]
  i8218.wrapMode = i8219[8]
  i8218.alphaIsTransparency = !!i8219[9]
  i8218.alphaSource = i8219[10]
  i8218.graphicsFormat = i8219[11]
  i8218.sRGBTexture = !!i8219[12]
  i8218.desiredColorSpace = i8219[13]
  i8218.wrapU = i8219[14]
  i8218.wrapV = i8219[15]
  return i8218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i8220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i8221 = data
  i8220.name = i8221[0]
  i8220.halfPrecision = !!i8221[1]
  i8220.useSimplification = !!i8221[2]
  i8220.useUInt32IndexFormat = !!i8221[3]
  i8220.vertexCount = i8221[4]
  i8220.aabb = i8221[5]
  var i8223 = i8221[6]
  var i8222 = []
  for(var i = 0; i < i8223.length; i += 1) {
    i8222.push( !!i8223[i + 0] );
  }
  i8220.streams = i8222
  i8220.vertices = i8221[7]
  var i8225 = i8221[8]
  var i8224 = []
  for(var i = 0; i < i8225.length; i += 1) {
    i8224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i8225[i + 0]) );
  }
  i8220.subMeshes = i8224
  var i8227 = i8221[9]
  var i8226 = []
  for(var i = 0; i < i8227.length; i += 16) {
    i8226.push( new pc.Mat4().setData(i8227[i + 0], i8227[i + 1], i8227[i + 2], i8227[i + 3],  i8227[i + 4], i8227[i + 5], i8227[i + 6], i8227[i + 7],  i8227[i + 8], i8227[i + 9], i8227[i + 10], i8227[i + 11],  i8227[i + 12], i8227[i + 13], i8227[i + 14], i8227[i + 15]) );
  }
  i8220.bindposes = i8226
  var i8229 = i8221[10]
  var i8228 = []
  for(var i = 0; i < i8229.length; i += 1) {
    i8228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i8229[i + 0]) );
  }
  i8220.blendShapes = i8228
  return i8220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i8234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i8235 = data
  i8234.triangles = i8235[0]
  return i8234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i8240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i8241 = data
  i8240.name = i8241[0]
  var i8243 = i8241[1]
  var i8242 = []
  for(var i = 0; i < i8243.length; i += 1) {
    i8242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i8243[i + 0]) );
  }
  i8240.frames = i8242
  return i8240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i8244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i8245 = data
  i8244.position = new pc.Vec3( i8245[0], i8245[1], i8245[2] )
  i8244.scale = new pc.Vec3( i8245[3], i8245[4], i8245[5] )
  i8244.rotation = new pc.Quat(i8245[6], i8245[7], i8245[8], i8245[9])
  return i8244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i8246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i8247 = data
  i8246.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i8247[0], i8246.main)
  i8246.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i8247[1], i8246.colorBySpeed)
  i8246.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i8247[2], i8246.colorOverLifetime)
  i8246.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i8247[3], i8246.emission)
  i8246.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i8247[4], i8246.rotationBySpeed)
  i8246.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i8247[5], i8246.rotationOverLifetime)
  i8246.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i8247[6], i8246.shape)
  i8246.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i8247[7], i8246.sizeBySpeed)
  i8246.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i8247[8], i8246.sizeOverLifetime)
  i8246.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i8247[9], i8246.textureSheetAnimation)
  i8246.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i8247[10], i8246.velocityOverLifetime)
  i8246.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i8247[11], i8246.noise)
  i8246.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i8247[12], i8246.inheritVelocity)
  i8246.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i8247[13], i8246.forceOverLifetime)
  i8246.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i8247[14], i8246.limitVelocityOverLifetime)
  i8246.useAutoRandomSeed = !!i8247[15]
  i8246.randomSeed = i8247[16]
  return i8246
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i8248 = root || new pc.ParticleSystemMain()
  var i8249 = data
  i8248.duration = i8249[0]
  i8248.loop = !!i8249[1]
  i8248.prewarm = !!i8249[2]
  i8248.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8249[3], i8248.startDelay)
  i8248.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8249[4], i8248.startLifetime)
  i8248.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8249[5], i8248.startSpeed)
  i8248.startSize3D = !!i8249[6]
  i8248.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8249[7], i8248.startSizeX)
  i8248.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8249[8], i8248.startSizeY)
  i8248.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8249[9], i8248.startSizeZ)
  i8248.startRotation3D = !!i8249[10]
  i8248.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8249[11], i8248.startRotationX)
  i8248.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8249[12], i8248.startRotationY)
  i8248.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8249[13], i8248.startRotationZ)
  i8248.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8249[14], i8248.startColor)
  i8248.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8249[15], i8248.gravityModifier)
  i8248.simulationSpace = i8249[16]
  request.r(i8249[17], i8249[18], 0, i8248, 'customSimulationSpace')
  i8248.simulationSpeed = i8249[19]
  i8248.useUnscaledTime = !!i8249[20]
  i8248.scalingMode = i8249[21]
  i8248.playOnAwake = !!i8249[22]
  i8248.maxParticles = i8249[23]
  i8248.emitterVelocityMode = i8249[24]
  i8248.stopAction = i8249[25]
  return i8248
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i8250 = root || new pc.MinMaxCurve()
  var i8251 = data
  i8250.mode = i8251[0]
  i8250.curveMin = new pc.AnimationCurve( { keys_flow: i8251[1] } )
  i8250.curveMax = new pc.AnimationCurve( { keys_flow: i8251[2] } )
  i8250.curveMultiplier = i8251[3]
  i8250.constantMin = i8251[4]
  i8250.constantMax = i8251[5]
  return i8250
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i8252 = root || new pc.MinMaxGradient()
  var i8253 = data
  i8252.mode = i8253[0]
  i8252.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i8253[1], i8252.gradientMin)
  i8252.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i8253[2], i8252.gradientMax)
  i8252.colorMin = new pc.Color(i8253[3], i8253[4], i8253[5], i8253[6])
  i8252.colorMax = new pc.Color(i8253[7], i8253[8], i8253[9], i8253[10])
  return i8252
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i8254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i8255 = data
  i8254.mode = i8255[0]
  var i8257 = i8255[1]
  var i8256 = []
  for(var i = 0; i < i8257.length; i += 1) {
    i8256.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i8257[i + 0]) );
  }
  i8254.colorKeys = i8256
  var i8259 = i8255[2]
  var i8258 = []
  for(var i = 0; i < i8259.length; i += 1) {
    i8258.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i8259[i + 0]) );
  }
  i8254.alphaKeys = i8258
  return i8254
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i8260 = root || new pc.ParticleSystemColorBySpeed()
  var i8261 = data
  i8260.enabled = !!i8261[0]
  i8260.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8261[1], i8260.color)
  i8260.range = new pc.Vec2( i8261[2], i8261[3] )
  return i8260
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i8264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i8265 = data
  i8264.color = new pc.Color(i8265[0], i8265[1], i8265[2], i8265[3])
  i8264.time = i8265[4]
  return i8264
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i8268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i8269 = data
  i8268.alpha = i8269[0]
  i8268.time = i8269[1]
  return i8268
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i8270 = root || new pc.ParticleSystemColorOverLifetime()
  var i8271 = data
  i8270.enabled = !!i8271[0]
  i8270.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i8271[1], i8270.color)
  return i8270
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i8272 = root || new pc.ParticleSystemEmitter()
  var i8273 = data
  i8272.enabled = !!i8273[0]
  i8272.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8273[1], i8272.rateOverTime)
  i8272.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8273[2], i8272.rateOverDistance)
  var i8275 = i8273[3]
  var i8274 = []
  for(var i = 0; i < i8275.length; i += 1) {
    i8274.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i8275[i + 0]) );
  }
  i8272.bursts = i8274
  return i8272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i8278 = root || new pc.ParticleSystemBurst()
  var i8279 = data
  i8278.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8279[0], i8278.count)
  i8278.cycleCount = i8279[1]
  i8278.minCount = i8279[2]
  i8278.maxCount = i8279[3]
  i8278.repeatInterval = i8279[4]
  i8278.time = i8279[5]
  return i8278
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i8280 = root || new pc.ParticleSystemRotationBySpeed()
  var i8281 = data
  i8280.enabled = !!i8281[0]
  i8280.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8281[1], i8280.x)
  i8280.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8281[2], i8280.y)
  i8280.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8281[3], i8280.z)
  i8280.separateAxes = !!i8281[4]
  i8280.range = new pc.Vec2( i8281[5], i8281[6] )
  return i8280
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i8282 = root || new pc.ParticleSystemRotationOverLifetime()
  var i8283 = data
  i8282.enabled = !!i8283[0]
  i8282.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8283[1], i8282.x)
  i8282.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8283[2], i8282.y)
  i8282.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8283[3], i8282.z)
  i8282.separateAxes = !!i8283[4]
  return i8282
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i8284 = root || new pc.ParticleSystemShape()
  var i8285 = data
  i8284.enabled = !!i8285[0]
  i8284.shapeType = i8285[1]
  i8284.randomDirectionAmount = i8285[2]
  i8284.sphericalDirectionAmount = i8285[3]
  i8284.randomPositionAmount = i8285[4]
  i8284.alignToDirection = !!i8285[5]
  i8284.radius = i8285[6]
  i8284.radiusMode = i8285[7]
  i8284.radiusSpread = i8285[8]
  i8284.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8285[9], i8284.radiusSpeed)
  i8284.radiusThickness = i8285[10]
  i8284.angle = i8285[11]
  i8284.length = i8285[12]
  i8284.boxThickness = new pc.Vec3( i8285[13], i8285[14], i8285[15] )
  i8284.meshShapeType = i8285[16]
  request.r(i8285[17], i8285[18], 0, i8284, 'mesh')
  request.r(i8285[19], i8285[20], 0, i8284, 'meshRenderer')
  request.r(i8285[21], i8285[22], 0, i8284, 'skinnedMeshRenderer')
  i8284.useMeshMaterialIndex = !!i8285[23]
  i8284.meshMaterialIndex = i8285[24]
  i8284.useMeshColors = !!i8285[25]
  i8284.normalOffset = i8285[26]
  i8284.arc = i8285[27]
  i8284.arcMode = i8285[28]
  i8284.arcSpread = i8285[29]
  i8284.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8285[30], i8284.arcSpeed)
  i8284.donutRadius = i8285[31]
  i8284.position = new pc.Vec3( i8285[32], i8285[33], i8285[34] )
  i8284.rotation = new pc.Vec3( i8285[35], i8285[36], i8285[37] )
  i8284.scale = new pc.Vec3( i8285[38], i8285[39], i8285[40] )
  return i8284
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i8286 = root || new pc.ParticleSystemSizeBySpeed()
  var i8287 = data
  i8286.enabled = !!i8287[0]
  i8286.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8287[1], i8286.x)
  i8286.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8287[2], i8286.y)
  i8286.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8287[3], i8286.z)
  i8286.separateAxes = !!i8287[4]
  i8286.range = new pc.Vec2( i8287[5], i8287[6] )
  return i8286
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i8288 = root || new pc.ParticleSystemSizeOverLifetime()
  var i8289 = data
  i8288.enabled = !!i8289[0]
  i8288.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8289[1], i8288.x)
  i8288.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8289[2], i8288.y)
  i8288.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8289[3], i8288.z)
  i8288.separateAxes = !!i8289[4]
  return i8288
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i8290 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i8291 = data
  i8290.enabled = !!i8291[0]
  i8290.mode = i8291[1]
  i8290.animation = i8291[2]
  i8290.numTilesX = i8291[3]
  i8290.numTilesY = i8291[4]
  i8290.useRandomRow = !!i8291[5]
  i8290.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8291[6], i8290.frameOverTime)
  i8290.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8291[7], i8290.startFrame)
  i8290.cycleCount = i8291[8]
  i8290.rowIndex = i8291[9]
  i8290.flipU = i8291[10]
  i8290.flipV = i8291[11]
  i8290.spriteCount = i8291[12]
  var i8293 = i8291[13]
  var i8292 = []
  for(var i = 0; i < i8293.length; i += 2) {
  request.r(i8293[i + 0], i8293[i + 1], 2, i8292, '')
  }
  i8290.sprites = i8292
  return i8290
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i8296 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i8297 = data
  i8296.enabled = !!i8297[0]
  i8296.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8297[1], i8296.x)
  i8296.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8297[2], i8296.y)
  i8296.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8297[3], i8296.z)
  i8296.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8297[4], i8296.radial)
  i8296.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8297[5], i8296.speedModifier)
  i8296.space = i8297[6]
  i8296.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8297[7], i8296.orbitalX)
  i8296.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8297[8], i8296.orbitalY)
  i8296.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8297[9], i8296.orbitalZ)
  i8296.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8297[10], i8296.orbitalOffsetX)
  i8296.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8297[11], i8296.orbitalOffsetY)
  i8296.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8297[12], i8296.orbitalOffsetZ)
  return i8296
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i8298 = root || new pc.ParticleSystemNoise()
  var i8299 = data
  i8298.enabled = !!i8299[0]
  i8298.separateAxes = !!i8299[1]
  i8298.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8299[2], i8298.strengthX)
  i8298.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8299[3], i8298.strengthY)
  i8298.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8299[4], i8298.strengthZ)
  i8298.frequency = i8299[5]
  i8298.damping = !!i8299[6]
  i8298.octaveCount = i8299[7]
  i8298.octaveMultiplier = i8299[8]
  i8298.octaveScale = i8299[9]
  i8298.quality = i8299[10]
  i8298.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8299[11], i8298.scrollSpeed)
  i8298.scrollSpeedMultiplier = i8299[12]
  i8298.remapEnabled = !!i8299[13]
  i8298.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8299[14], i8298.remapX)
  i8298.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8299[15], i8298.remapY)
  i8298.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8299[16], i8298.remapZ)
  i8298.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8299[17], i8298.positionAmount)
  i8298.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8299[18], i8298.rotationAmount)
  i8298.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8299[19], i8298.sizeAmount)
  return i8298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i8300 = root || new pc.ParticleSystemInheritVelocity()
  var i8301 = data
  i8300.enabled = !!i8301[0]
  i8300.mode = i8301[1]
  i8300.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8301[2], i8300.curve)
  return i8300
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i8302 = root || new pc.ParticleSystemForceOverLifetime()
  var i8303 = data
  i8302.enabled = !!i8303[0]
  i8302.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8303[1], i8302.x)
  i8302.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8303[2], i8302.y)
  i8302.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8303[3], i8302.z)
  i8302.space = i8303[4]
  i8302.randomized = !!i8303[5]
  return i8302
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i8304 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i8305 = data
  i8304.enabled = !!i8305[0]
  i8304.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8305[1], i8304.limit)
  i8304.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8305[2], i8304.limitX)
  i8304.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8305[3], i8304.limitY)
  i8304.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8305[4], i8304.limitZ)
  i8304.dampen = i8305[5]
  i8304.separateAxes = !!i8305[6]
  i8304.space = i8305[7]
  i8304.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i8305[8], i8304.drag)
  i8304.multiplyDragByParticleSize = !!i8305[9]
  i8304.multiplyDragByParticleVelocity = !!i8305[10]
  return i8304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i8306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i8307 = data
  request.r(i8307[0], i8307[1], 0, i8306, 'mesh')
  i8306.meshCount = i8307[2]
  i8306.activeVertexStreamsCount = i8307[3]
  i8306.alignment = i8307[4]
  i8306.renderMode = i8307[5]
  i8306.sortMode = i8307[6]
  i8306.lengthScale = i8307[7]
  i8306.velocityScale = i8307[8]
  i8306.cameraVelocityScale = i8307[9]
  i8306.normalDirection = i8307[10]
  i8306.sortingFudge = i8307[11]
  i8306.minParticleSize = i8307[12]
  i8306.maxParticleSize = i8307[13]
  i8306.pivot = new pc.Vec3( i8307[14], i8307[15], i8307[16] )
  request.r(i8307[17], i8307[18], 0, i8306, 'trailMaterial')
  i8306.applyActiveColorSpace = !!i8307[19]
  i8306.enabled = !!i8307[20]
  request.r(i8307[21], i8307[22], 0, i8306, 'sharedMaterial')
  var i8309 = i8307[23]
  var i8308 = []
  for(var i = 0; i < i8309.length; i += 2) {
  request.r(i8309[i + 0], i8309[i + 1], 2, i8308, '')
  }
  i8306.sharedMaterials = i8308
  i8306.receiveShadows = !!i8307[24]
  i8306.shadowCastingMode = i8307[25]
  i8306.sortingLayerID = i8307[26]
  i8306.sortingOrder = i8307[27]
  i8306.lightmapIndex = i8307[28]
  i8306.lightmapSceneIndex = i8307[29]
  i8306.lightmapScaleOffset = new pc.Vec4( i8307[30], i8307[31], i8307[32], i8307[33] )
  i8306.lightProbeUsage = i8307[34]
  i8306.reflectionProbeUsage = i8307[35]
  return i8306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i8312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i8313 = data
  i8312.name = i8313[0]
  i8312.tagId = i8313[1]
  i8312.enabled = !!i8313[2]
  i8312.isStatic = !!i8313[3]
  i8312.layer = i8313[4]
  return i8312
}

Deserializers["Level3_Manicure_Playable"] = function (request, data, root) {
  var i8314 = root || request.c( 'Level3_Manicure_Playable' )
  var i8315 = data
  i8314.MainZoom = request.d('ZoomPos', i8315[0], i8314.MainZoom)
  var i8317 = i8315[1]
  var i8316 = []
  for(var i = 0; i < i8317.length; i += 2) {
  request.r(i8317[i + 0], i8317[i + 1], 2, i8316, '')
  }
  i8314.AllBones = i8316
  request.r(i8315[2], i8315[3], 0, i8314, 'View1')
  request.r(i8315[4], i8315[5], 0, i8314, 'View2')
  i8314.ZoomStep1 = request.d('ZoomPos', i8315[6], i8314.ZoomStep1)
  request.r(i8315[7], i8315[8], 0, i8314, 'ToolStep1')
  request.r(i8315[9], i8315[10], 0, i8314, 'ToolStep1Body')
  request.r(i8315[11], i8315[12], 0, i8314, 'ToolStep1Tip')
  request.r(i8315[13], i8315[14], 0, i8314, 'ToolStep1CameraFollow')
  request.r(i8315[15], i8315[16], 0, i8314, 'Step1Col')
  request.r(i8315[17], i8315[18], 0, i8314, 'Hairs_1')
  i8314.ZoomStep2 = request.d('ZoomPos', i8315[19], i8314.ZoomStep2)
  i8314.ZoomStep2B = request.d('ZoomPos', i8315[20], i8314.ZoomStep2B)
  request.r(i8315[21], i8315[22], 0, i8314, 'Tool2Holder')
  request.r(i8315[23], i8315[24], 0, i8314, 'Tool2Indication')
  request.r(i8315[25], i8315[26], 0, i8314, 'ToolStep2')
  request.r(i8315[27], i8315[28], 0, i8314, 'ToolStep2Tip')
  request.r(i8315[29], i8315[30], 0, i8314, 'ToolStep2CameraFollow')
  request.r(i8315[31], i8315[32], 0, i8314, 'ToolStep2ToolRotate')
  request.r(i8315[33], i8315[34], 0, i8314, 'Holder1')
  request.r(i8315[35], i8315[36], 0, i8314, 'Holder2')
  request.r(i8315[37], i8315[38], 0, i8314, 'Wipe')
  request.r(i8315[39], i8315[40], 0, i8314, 'BottleAnimator')
  request.r(i8315[41], i8315[42], 0, i8314, 'SpreadOnWipe_2')
  request.r(i8315[43], i8315[44], 0, i8314, 'PolishHolder_2')
  request.r(i8315[45], i8315[46], 0, i8314, 'makeupRemoverSfx')
  i8314.ZoomStep3 = request.d('ZoomPos', i8315[47], i8314.ZoomStep3)
  request.r(i8315[48], i8315[49], 0, i8314, 'ToolStep3')
  request.r(i8315[50], i8315[51], 0, i8314, 'ToolStep3CameraFollow')
  var i8319 = i8315[52]
  var i8318 = []
  for(var i = 0; i < i8319.length; i += 2) {
  request.r(i8319[i + 0], i8319[i + 1], 2, i8318, '')
  }
  i8314.Indications_3 = i8318
  request.r(i8315[53], i8315[54], 0, i8314, 'NailsHolder_3')
  i8314.levelName = i8315[55]
  i8314.levelReward = i8315[56]
  request.r(i8315[57], i8315[58], 0, i8314, 'LevelIcon')
  request.r(i8315[59], i8315[60], 0, i8314, 'Level_BG')
  var i8321 = i8315[61]
  var i8320 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i8321.length; i += 2) {
  request.r(i8321[i + 0], i8321[i + 1], 1, i8320, '')
  }
  i8314.ToolIcons = i8320
  var i8323 = i8315[62]
  var i8322 = []
  for(var i = 0; i < i8323.length; i += 2) {
  request.r(i8323[i + 0], i8323[i + 1], 2, i8322, '')
  }
  i8314.AllDrags = i8322
  var i8325 = i8315[63]
  var i8324 = []
  for(var i = 0; i < i8325.length; i += 2) {
  request.r(i8325[i + 0], i8325[i + 1], 2, i8324, '')
  }
  i8314.AllSources = i8324
  var i8327 = i8315[64]
  var i8326 = []
  for(var i = 0; i < i8327.length; i += 2) {
  request.r(i8327[i + 0], i8327[i + 1], 2, i8326, '')
  }
  i8314.AllScratches = i8326
  i8314.stepsDone = i8315[65]
  i8314.levelNo = i8315[66]
  i8314.partNo = i8315[67]
  return i8314
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i8328 = root || request.c( 'ZoomPos' )
  var i8329 = data
  i8328.CameraPos = new pc.Vec3( i8329[0], i8329[1], i8329[2] )
  i8328.CameraFOV = i8329[3]
  return i8328
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i8342 = root || request.c( 'PlayableCTA' )
  var i8343 = data
  i8342.trigger = i8343[0]
  i8342.afterSeconds = i8343[1]
  i8342.afterTaps = i8343[2]
  request.r(i8343[3], i8343[4], 0, i8342, 'scratchProgress')
  i8342.scratchIndex = i8343[5]
  i8342.progressThreshold = i8343[6]
  request.r(i8343[7], i8343[8], 0, i8342, 'watchedTool')
  i8342.blockInputOnFire = !!i8343[9]
  i8342.refireOnEveryTap = !!i8343[10]
  i8342.refireDelay = i8343[11]
  i8342.showEndCard = !!i8343[12]
  request.r(i8343[13], i8343[14], 0, i8342, 'endCard')
  i8342.showEndCardOnProgressTrigger = !!i8343[15]
  i8342.showEndCardOnToolAppearTrigger = !!i8343[16]
  i8342.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i8343[17], i8342.onCtaFired)
  i8342.logWhenFired = !!i8343[18]
  return i8342
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i8344 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i8345 = data
  i8344.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8345[0], i8344.m_PersistentCalls)
  return i8344
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i8346 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i8347 = data
  var i8349 = i8347[0]
  var i8348 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i8349.length; i += 1) {
    i8348.add(request.d('UnityEngine.Events.PersistentCall', i8349[i + 0]));
  }
  i8346.m_Calls = i8348
  return i8346
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i8352 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i8353 = data
  request.r(i8353[0], i8353[1], 0, i8352, 'm_Target')
  i8352.m_TargetAssemblyTypeName = i8353[2]
  i8352.m_MethodName = i8353[3]
  i8352.m_Mode = i8353[4]
  i8352.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i8353[5], i8352.m_Arguments)
  i8352.m_CallState = i8353[6]
  return i8352
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i8354 = root || request.c( 'PlayableFadeCoverSettings' )
  var i8355 = data
  i8354.revealDelay = i8355[0]
  i8354.revealDuration = i8355[1]
  return i8354
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i8356 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i8357 = data
  request.r(i8357[0], i8357[1], 0, i8356, 'MainCamera')
  i8356.RenderType = i8357[2]
  request.r(i8357[3], i8357[4], 0, i8356, 'ScratchSurfaceSprite')
  i8356.ScratchSurfaceSpriteHasAlpha = !!i8357[5]
  i8356.MaskProgressCutOffValue = i8357[6]
  request.r(i8357[7], i8357[8], 0, i8356, 'EraseTexture')
  i8356.EraseTextureScale = new pc.Vec2( i8357[9], i8357[10] )
  i8356.InputEnabled = !!i8357[11]
  request.r(i8357[12], i8357[13], 0, i8356, 'Card')
  i8356.Mode = i8357[14]
  request.r(i8357[15], i8357[16], 0, i8356, 'Progress')
  request.r(i8357[17], i8357[18], 0, i8356, 'MeshCard')
  request.r(i8357[19], i8357[20], 0, i8356, 'SpriteCard')
  request.r(i8357[21], i8357[22], 0, i8356, 'ImageCard')
  request.r(i8357[23], i8357[24], 0, i8356, 'MaskShader')
  request.r(i8357[25], i8357[26], 0, i8356, 'BrushShader')
  request.r(i8357[27], i8357[28], 0, i8356, 'MaskProgressShader')
  request.r(i8357[29], i8357[30], 0, i8356, 'MaskProgressCutOffShader')
  return i8356
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i8358 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i8359 = data
  request.r(i8359[0], i8359[1], 0, i8358, 'MainCamera')
  request.r(i8359[2], i8359[3], 0, i8358, 'Surface')
  i8358.RenderTextureQuality = i8359[4]
  request.r(i8359[5], i8359[6], 0, i8358, 'Eraser')
  request.r(i8359[7], i8359[8], 0, i8358, 'Progress')
  request.r(i8359[9], i8359[10], 0, i8358, 'ScratchSurface')
  request.r(i8359[11], i8359[12], 0, i8358, 'RenderTexture')
  i8358.BrushScale = new pc.Vec2( i8359[13], i8359[14] )
  request.r(i8359[15], i8359[16], 0, i8358, 'ToolTip')
  i8358.InputEnabled = !!i8359[17]
  i8358.IsScratching = !!i8359[18]
  i8358.useChangingScale = !!i8359[19]
  i8358.useGivenBrushScale = !!i8359[20]
  i8358.canSpreadMask = !!i8359[21]
  i8358.shouldPaintHoles = !!i8359[22]
  i8358.canRotateTip = !!i8359[23]
  i8358._mode = i8359[24]
  return i8358
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i8360 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i8361 = data
  request.r(i8361[0], i8361[1], 0, i8360, 'Card')
  i8360.currentProgress = i8361[2]
  return i8360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i8362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i8363 = data
  i8362.color = new pc.Color(i8363[0], i8363[1], i8363[2], i8363[3])
  request.r(i8363[4], i8363[5], 0, i8362, 'sprite')
  i8362.flipX = !!i8363[6]
  i8362.flipY = !!i8363[7]
  i8362.drawMode = i8363[8]
  i8362.size = new pc.Vec2( i8363[9], i8363[10] )
  i8362.tileMode = i8363[11]
  i8362.adaptiveModeThreshold = i8363[12]
  i8362.maskInteraction = i8363[13]
  i8362.spriteSortPoint = i8363[14]
  i8362.enabled = !!i8363[15]
  request.r(i8363[16], i8363[17], 0, i8362, 'sharedMaterial')
  var i8365 = i8363[18]
  var i8364 = []
  for(var i = 0; i < i8365.length; i += 2) {
  request.r(i8365[i + 0], i8365[i + 1], 2, i8364, '')
  }
  i8362.sharedMaterials = i8364
  i8362.receiveShadows = !!i8363[19]
  i8362.shadowCastingMode = i8363[20]
  i8362.sortingLayerID = i8363[21]
  i8362.sortingOrder = i8363[22]
  i8362.lightmapIndex = i8363[23]
  i8362.lightmapSceneIndex = i8363[24]
  i8362.lightmapScaleOffset = new pc.Vec4( i8363[25], i8363[26], i8363[27], i8363[28] )
  i8362.lightProbeUsage = i8363[29]
  i8362.reflectionProbeUsage = i8363[30]
  return i8362
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i8366 = root || request.c( 'PlayParticlesOnCollision' )
  var i8367 = data
  request.r(i8367[0], i8367[1], 0, i8366, 'Target')
  request.r(i8367[2], i8367[3], 0, i8366, 'ParticlePrefab')
  i8366.destroyIt = !!i8367[4]
  i8366.stayAtPlace = !!i8367[5]
  i8366.disableOnCollision = !!i8367[6]
  i8366.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i8367[7], i8366.OnCollisionEvent)
  return i8366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i8368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i8369 = data
  i8368.radius = i8369[0]
  i8368.enabled = !!i8369[1]
  i8368.isTrigger = !!i8369[2]
  i8368.usedByEffector = !!i8369[3]
  i8368.density = i8369[4]
  i8368.offset = new pc.Vec2( i8369[5], i8369[6] )
  request.r(i8369[7], i8369[8], 0, i8368, 'material')
  return i8368
}

Deserializers["ActionOnTriggerStay"] = function (request, data, root) {
  var i8370 = root || request.c( 'ActionOnTriggerStay' )
  var i8371 = data
  request.r(i8371[0], i8371[1], 0, i8370, 'Tip')
  i8370.OnEnter = request.d('UnityEngine.Events.UnityEvent', i8371[2], i8370.OnEnter)
  i8370.OnExit = request.d('UnityEngine.Events.UnityEvent', i8371[3], i8370.OnExit)
  return i8370
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i8372 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i8373 = data
  request.r(i8373[0], i8373[1], 0, i8372, 'm_ObjectArgument')
  i8372.m_ObjectArgumentAssemblyTypeName = i8373[2]
  i8372.m_IntArgument = i8373[3]
  i8372.m_FloatArgument = i8373[4]
  i8372.m_StringArgument = i8373[5]
  i8372.m_BoolArgument = !!i8373[6]
  return i8372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i8374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i8375 = data
  i8374.usedByComposite = !!i8375[0]
  i8374.autoTiling = !!i8375[1]
  var i8377 = i8375[2]
  var i8376 = []
  for(var i = 0; i < i8377.length; i += 1) {
  var i8379 = i8377[i + 0]
  var i8378 = []
  for(var i = 0; i < i8379.length; i += 2) {
    i8378.push( new pc.Vec2( i8379[i + 0], i8379[i + 1] ) );
  }
    i8376.push( i8378 );
  }
  i8374.points = i8376
  i8374.enabled = !!i8375[3]
  i8374.isTrigger = !!i8375[4]
  i8374.usedByEffector = !!i8375[5]
  i8374.density = i8375[6]
  i8374.offset = new pc.Vec2( i8375[7], i8375[8] )
  request.r(i8375[9], i8375[10], 0, i8374, 'material')
  return i8374
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i8386 = root || request.c( 'PlaySfxOnCollision' )
  var i8387 = data
  request.r(i8387[0], i8387[1], 0, i8386, 'Tip')
  i8386.Mode = i8387[2]
  request.r(i8387[3], i8387[4], 0, i8386, 'DragInput')
  request.r(i8387[5], i8387[6], 0, i8386, 'Source')
  i8386.startVol = i8387[7]
  i8386.targetVol = i8387[8]
  i8386.duration = i8387[9]
  request.r(i8387[10], i8387[11], 0, i8386, 'Particles')
  i8386.isDone = !!i8387[12]
  i8386.isInArea = !!i8387[13]
  i8386.isPlaying = !!i8387[14]
  return i8386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i8388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i8389 = data
  request.r(i8389[0], i8389[1], 0, i8388, 'clip')
  request.r(i8389[2], i8389[3], 0, i8388, 'outputAudioMixerGroup')
  i8388.playOnAwake = !!i8389[4]
  i8388.loop = !!i8389[5]
  i8388.time = i8389[6]
  i8388.volume = i8389[7]
  i8388.pitch = i8389[8]
  i8388.enabled = !!i8389[9]
  return i8388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i8390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i8391 = data
  i8390.textureMode = i8391[0]
  i8390.alignment = i8391[1]
  i8390.widthCurve = new pc.AnimationCurve( { keys_flow: i8391[2] } )
  i8390.colorGradient = i8391[3] ? new pc.ColorGradient(i8391[3][0], i8391[3][1], i8391[3][2]) : null
  var i8393 = i8391[4]
  var i8392 = []
  for(var i = 0; i < i8393.length; i += 3) {
    i8392.push( new pc.Vec3( i8393[i + 0], i8393[i + 1], i8393[i + 2] ) );
  }
  i8390.positions = i8392
  i8390.positionCount = i8391[5]
  i8390.widthMultiplier = i8391[6]
  i8390.startWidth = i8391[7]
  i8390.endWidth = i8391[8]
  i8390.numCornerVertices = i8391[9]
  i8390.numCapVertices = i8391[10]
  i8390.useWorldSpace = !!i8391[11]
  i8390.loop = !!i8391[12]
  i8390.startColor = new pc.Color(i8391[13], i8391[14], i8391[15], i8391[16])
  i8390.endColor = new pc.Color(i8391[17], i8391[18], i8391[19], i8391[20])
  i8390.generateLightingData = !!i8391[21]
  i8390.enabled = !!i8391[22]
  request.r(i8391[23], i8391[24], 0, i8390, 'sharedMaterial')
  var i8395 = i8391[25]
  var i8394 = []
  for(var i = 0; i < i8395.length; i += 2) {
  request.r(i8395[i + 0], i8395[i + 1], 2, i8394, '')
  }
  i8390.sharedMaterials = i8394
  i8390.receiveShadows = !!i8391[26]
  i8390.shadowCastingMode = i8391[27]
  i8390.sortingLayerID = i8391[28]
  i8390.sortingOrder = i8391[29]
  i8390.lightmapIndex = i8391[30]
  i8390.lightmapSceneIndex = i8391[31]
  i8390.lightmapScaleOffset = new pc.Vec4( i8391[32], i8391[33], i8391[34], i8391[35] )
  i8390.lightProbeUsage = i8391[36]
  i8390.reflectionProbeUsage = i8391[37]
  return i8390
}

Deserializers["TextureOffsetScroller"] = function (request, data, root) {
  var i8398 = root || request.c( 'TextureOffsetScroller' )
  var i8399 = data
  i8398.scrollSpeed = new pc.Vec2( i8399[0], i8399[1] )
  i8398.smoothStart = !!i8399[2]
  i8398.smoothDuration = i8399[3]
  i8398.textureName = i8399[4]
  i8398.useSharedMaterial = !!i8399[5]
  return i8398
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i8400 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i8401 = data
  request.r(i8401[0], i8401[1], 0, i8400, 'm_RootBone')
  var i8403 = i8401[2]
  var i8402 = []
  for(var i = 0; i < i8403.length; i += 2) {
  request.r(i8403[i + 0], i8403[i + 1], 2, i8402, '')
  }
  i8400.m_BoneTransforms = i8402
  i8400.m_AlwaysUpdate = !!i8401[3]
  i8400.m_AutoRebind = !!i8401[4]
  return i8400
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i8406 = root || request.c( 'InteractableBones' )
  var i8407 = data
  request.r(i8407[0], i8407[1], 0, i8406, 'Tip')
  i8406.MoveAmount = i8407[2]
  i8406.MoveSpeed = i8407[3]
  i8406.ShakeSpeed = i8407[4]
  i8406.MovementThreshold = i8407[5]
  i8406.MoveX = !!i8407[6]
  i8406.MoveY = !!i8407[7]
  return i8406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i8408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i8409 = data
  request.r(i8409[0], i8409[1], 0, i8408, 'animatorController')
  request.r(i8409[2], i8409[3], 0, i8408, 'avatar')
  i8408.updateMode = i8409[4]
  i8408.hasTransformHierarchy = !!i8409[5]
  i8408.applyRootMotion = !!i8409[6]
  var i8411 = i8409[7]
  var i8410 = []
  for(var i = 0; i < i8411.length; i += 2) {
  request.r(i8411[i + 0], i8411[i + 1], 2, i8410, '')
  }
  i8408.humanBones = i8410
  i8408.enabled = !!i8409[8]
  return i8408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i8412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i8413 = data
  i8412.frontSortingLayerID = i8413[0]
  i8412.frontSortingOrder = i8413[1]
  i8412.backSortingLayerID = i8413[2]
  i8412.backSortingOrder = i8413[3]
  i8412.alphaCutoff = i8413[4]
  request.r(i8413[5], i8413[6], 0, i8412, 'sprite')
  i8412.tileMode = i8413[7]
  i8412.isCustomRangeActive = !!i8413[8]
  i8412.spriteSortPoint = i8413[9]
  i8412.enabled = !!i8413[10]
  request.r(i8413[11], i8413[12], 0, i8412, 'sharedMaterial')
  var i8415 = i8413[13]
  var i8414 = []
  for(var i = 0; i < i8415.length; i += 2) {
  request.r(i8415[i + 0], i8415[i + 1], 2, i8414, '')
  }
  i8412.sharedMaterials = i8414
  i8412.receiveShadows = !!i8413[14]
  i8412.shadowCastingMode = i8413[15]
  i8412.sortingLayerID = i8413[16]
  i8412.sortingOrder = i8413[17]
  i8412.lightmapIndex = i8413[18]
  i8412.lightmapSceneIndex = i8413[19]
  i8412.lightmapScaleOffset = new pc.Vec4( i8413[20], i8413[21], i8413[22], i8413[23] )
  i8412.lightProbeUsage = i8413[24]
  i8412.reflectionProbeUsage = i8413[25]
  return i8412
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i8416 = root || request.c( 'ActionOnTap' )
  var i8417 = data
  i8416.OnTap = request.d('UnityEngine.Events.UnityEvent', i8417[0], i8416.OnTap)
  i8416.OnTapExtra = request.d('System.Action', i8417[1], i8416.OnTapExtra)
  return i8416
}

Deserializers["System.Action"] = function (request, data, root) {
  var i8418 = root || request.c( 'System.Action' )
  var i8419 = data
  return i8418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i8420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i8421 = data
  i8420.usedByComposite = !!i8421[0]
  i8420.autoTiling = !!i8421[1]
  i8420.size = new pc.Vec2( i8421[2], i8421[3] )
  i8420.edgeRadius = i8421[4]
  i8420.enabled = !!i8421[5]
  i8420.isTrigger = !!i8421[6]
  i8420.usedByEffector = !!i8421[7]
  i8420.density = i8421[8]
  i8420.offset = new pc.Vec2( i8421[9], i8421[10] )
  request.r(i8421[11], i8421[12], 0, i8420, 'material')
  return i8420
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i8422 = root || request.c( 'BD_AnimationHelper' )
  var i8423 = data
  i8422.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i8423[0], i8422.OnAnimationComplete)
  request.r(i8423[1], i8423[2], 0, i8422, 'sfxClip')
  return i8422
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i8424 = root || request.c( 'BasicDrag' )
  var i8425 = data
  i8424.canDrag = !!i8425[0]
  i8424.dragByDelta = !!i8425[1]
  i8424.isDragging = !!i8425[2]
  i8424.moveWithPointer = !!i8425[3]
  i8424.canReturn = !!i8425[4]
  i8424.jumpOnReturn = !!i8425[5]
  i8424.returnTime = i8425[6]
  i8424.Tool_Offset = new pc.Vec3( i8425[7], i8425[8], i8425[9] )
  i8424.canScaleIncrease = !!i8425[10]
  i8424.Self_ScaleNew = new pc.Vec3( i8425[11], i8425[12], i8425[13] )
  i8424.canRotateOnPick = !!i8425[14]
  i8424.startRot = new pc.Vec3( i8425[15], i8425[16], i8425[17] )
  i8424.newRot = new pc.Vec3( i8425[18], i8425[19], i8425[20] )
  var i8427 = i8425[21]
  var i8426 = []
  for(var i = 0; i < i8427.length; i += 2) {
  request.r(i8427[i + 0], i8427[i + 1], 2, i8426, '')
  }
  i8424.childSprite = i8426
  request.r(i8425[22], i8425[23], 0, i8424, 'ToolSelectClip')
  request.r(i8425[24], i8425[25], 0, i8424, 'ToolLoopClip')
  request.r(i8425[26], i8425[27], 0, i8424, 'thisParticles')
  i8424.onDragparticle = !!i8425[28]
  request.r(i8425[29], i8425[30], 0, i8424, 'dragParticles')
  request.r(i8425[31], i8425[32], 0, i8424, 'anim')
  i8424.startPos = new pc.Vec3( i8425[33], i8425[34], i8425[35] )
  i8424.startScale = new pc.Vec3( i8425[36], i8425[37], i8425[38] )
  i8424.Vibration = !!i8425[39]
  i8424.isPlacedCannotMove = !!i8425[40]
  i8424.isObjectMovingWhileDragging = !!i8425[41]
  i8424.OnMouseDownEvent = request.d('System.Action', i8425[42], i8424.OnMouseDownEvent)
  i8424.OnMouseUpEvent = request.d('System.Action', i8425[43], i8424.OnMouseUpEvent)
  i8424.ProgStartEvent = request.d('System.Action', i8425[44], i8424.ProgStartEvent)
  i8424.ProgEndEvent = request.d('System.Action', i8425[45], i8424.ProgEndEvent)
  i8424.canCallMouseUpWhenGamePaused = !!i8425[46]
  i8424.ClampX_L = i8425[47]
  i8424.ClampX_H = i8425[48]
  i8424.ClampY_L = i8425[49]
  i8424.ClampY_H = i8425[50]
  i8424.startOrder = i8425[51]
  i8424.dontResetItIsInCollider = !!i8425[52]
  request.r(i8425[53], i8425[54], 0, i8424, 'thisCollider')
  request.r(i8425[55], i8425[56], 0, i8424, 'thisSR')
  i8424.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i8425[57], i8424.OnMouseDownEventIndependentFromCanDrag)
  return i8424
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i8430 = root || request.c( 'BD_Progress' )
  var i8431 = data
  var i8433 = i8431[0]
  var i8432 = []
  for(var i = 0; i < i8433.length; i += 1) {
    i8432.push( request.d('ScratchData', i8433[i + 0]) );
  }
  i8430.AllScratches = i8432
  i8430.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i8431[1], i8430.OnScratchComplete)
  i8430.isProgDone = !!i8431[2]
  i8430.canCallComplete = !!i8431[3]
  i8430.CollectiveAppear = !!i8431[4]
  i8430.tipControl = !!i8431[5]
  i8430.progressControl = !!i8431[6]
  request.r(i8431[7], i8431[8], 0, i8430, 'thisDrag')
  i8430.CompleteEvent = request.d('System.Action', i8431[9], i8430.CompleteEvent)
  i8430.SubCompleteEvent = request.d('System.Action', i8431[10], i8430.SubCompleteEvent)
  return i8430
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i8436 = root || request.c( 'ScratchData' )
  var i8437 = data
  request.r(i8437[0], i8437[1], 0, i8436, 'ScratchManager')
  i8436.scratchLimit = i8437[2]
  i8436.isComplete = !!i8437[3]
  return i8436
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i8438 = root || request.c( 'BD_Clamp' )
  var i8439 = data
  i8438.ClampX_L = i8439[0]
  i8438.ClampX_H = i8439[1]
  i8438.ClampY_L = i8439[2]
  i8438.ClampY_H = i8439[3]
  return i8438
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i8440 = root || request.c( 'BD_CameraFollow' )
  var i8441 = data
  request.r(i8441[0], i8441[1], 0, i8440, 'Tool')
  request.r(i8441[2], i8441[3], 0, i8440, 'Pivot')
  i8440.FOV = i8441[4]
  i8440.Y_L = i8441[5]
  i8440.Y_H = i8441[6]
  i8440.X_L = i8441[7]
  i8440.X_R = i8441[8]
  i8440.startDelay = i8441[9]
  i8440.duration = i8441[10]
  return i8440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i8442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i8443 = data
  i8442.bodyType = i8443[0]
  request.r(i8443[1], i8443[2], 0, i8442, 'material')
  i8442.simulated = !!i8443[3]
  i8442.useAutoMass = !!i8443[4]
  i8442.mass = i8443[5]
  i8442.drag = i8443[6]
  i8442.angularDrag = i8443[7]
  i8442.gravityScale = i8443[8]
  i8442.collisionDetectionMode = i8443[9]
  i8442.sleepMode = i8443[10]
  i8442.constraints = i8443[11]
  return i8442
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i8444 = root || request.c( 'BD_ProgressHelper' )
  var i8445 = data
  request.r(i8445[0], i8445[1], 0, i8444, 'BD_Progress')
  request.r(i8445[2], i8445[3], 0, i8444, 'fadeSprite')
  i8444.fadeIn = !!i8445[4]
  return i8444
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i8446 = root || request.c( 'BD_ToolRotate' )
  var i8447 = data
  i8446.startDelay = i8447[0]
  request.r(i8447[1], i8447[2], 0, i8446, 'Tool')
  request.r(i8447[3], i8447[4], 0, i8446, 'Clamp')
  request.r(i8447[5], i8447[6], 0, i8446, 'Pivot')
  i8446.MinAngle = new pc.Vec3( i8447[7], i8447[8], i8447[9] )
  i8446.MaxAngle = new pc.Vec3( i8447[10], i8447[11], i8447[12] )
  i8446.rotationSpeed = i8447[13]
  return i8446
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i8448 = root || request.c( 'BD_Action' )
  var i8449 = data
  i8448.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i8449[0], i8448.OnMouseDownEvent)
  i8448.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i8449[1], i8448.OnMouseUpEvent)
  i8448.setToolLayer = !!i8449[2]
  request.r(i8449[3], i8449[4], 0, i8448, 'tool_SP')
  return i8448
}

Deserializers["Lvl3_NailTrim"] = function (request, data, root) {
  var i8450 = root || request.c( 'Lvl3_NailTrim' )
  var i8451 = data
  request.r(i8451[0], i8451[1], 0, i8450, 'Tool')
  request.r(i8451[2], i8451[3], 0, i8450, 'thisCol')
  var i8453 = i8451[4]
  var i8452 = []
  for(var i = 0; i < i8453.length; i += 2) {
  request.r(i8453[i + 0], i8453[i + 1], 2, i8452, '')
  }
  i8450.Targets = i8452
  var i8455 = i8451[5]
  var i8454 = []
  for(var i = 0; i < i8455.length; i += 2) {
  request.r(i8455[i + 0], i8455[i + 1], 2, i8454, '')
  }
  i8450.Nails = i8454
  var i8457 = i8451[6]
  var i8456 = []
  for(var i = 0; i < i8457.length; i += 2) {
  request.r(i8457[i + 0], i8457[i + 1], 2, i8456, '')
  }
  i8450.NailParticles = i8456
  var i8459 = i8451[7]
  var i8458 = []
  for(var i = 0; i < i8459.length; i += 1) {
    i8458.push( !!i8459[i + 0] );
  }
  i8450.NailsStatus = i8458
  i8450.OnComplete = request.d('UnityEngine.Events.UnityEvent', i8451[8], i8450.OnComplete)
  request.r(i8451[9], i8451[10], 0, i8450, 'TrimClip')
  return i8450
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i8462 = root || request.c( 'DestroyObj' )
  var i8463 = data
  i8462.destroyDelay = i8463[0]
  return i8462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i8464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i8465 = data
  i8464.name = i8465[0]
  i8464.atlasId = i8465[1]
  i8464.mipmapCount = i8465[2]
  i8464.hdr = !!i8465[3]
  i8464.size = i8465[4]
  i8464.anisoLevel = i8465[5]
  i8464.filterMode = i8465[6]
  var i8467 = i8465[7]
  var i8466 = []
  for(var i = 0; i < i8467.length; i += 4) {
    i8466.push( UnityEngine.Rect.MinMaxRect(i8467[i + 0], i8467[i + 1], i8467[i + 2], i8467[i + 3]) );
  }
  i8464.rects = i8466
  i8464.wrapU = i8465[8]
  i8464.wrapV = i8465[9]
  return i8464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i8470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i8471 = data
  i8470.name = i8471[0]
  i8470.index = i8471[1]
  i8470.startup = !!i8471[2]
  return i8470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i8472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i8473 = data
  i8472.aspect = i8473[0]
  i8472.orthographic = !!i8473[1]
  i8472.orthographicSize = i8473[2]
  i8472.backgroundColor = new pc.Color(i8473[3], i8473[4], i8473[5], i8473[6])
  i8472.nearClipPlane = i8473[7]
  i8472.farClipPlane = i8473[8]
  i8472.fieldOfView = i8473[9]
  i8472.depth = i8473[10]
  i8472.clearFlags = i8473[11]
  i8472.cullingMask = i8473[12]
  i8472.rect = i8473[13]
  request.r(i8473[14], i8473[15], 0, i8472, 'targetTexture')
  i8472.usePhysicalProperties = !!i8473[16]
  i8472.focalLength = i8473[17]
  i8472.sensorSize = new pc.Vec2( i8473[18], i8473[19] )
  i8472.lensShift = new pc.Vec2( i8473[20], i8473[21] )
  i8472.gateFit = i8473[22]
  i8472.commandBufferCount = i8473[23]
  i8472.cameraType = i8473[24]
  i8472.enabled = !!i8473[25]
  return i8472
}

Deserializers["CameraController"] = function (request, data, root) {
  var i8474 = root || request.c( 'CameraController' )
  var i8475 = data
  request.r(i8475[0], i8475[1], 0, i8474, 'cam')
  i8474.defaultPosition = new pc.Vec3( i8475[2], i8475[3], i8475[4] )
  i8474.defaultSize = i8475[5]
  i8474.defaultFOV = i8475[6]
  i8474.defaultDuration = i8475[7]
  i8474.defaultEase = i8475[8]
  return i8474
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i8476 = root || request.c( 'MusicSource' )
  var i8477 = data
  request.r(i8477[0], i8477[1], 0, i8476, 'source')
  return i8476
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i8478 = root || request.c( 'UI_Manager' )
  var i8479 = data
  i8478.levelCompleted = !!i8479[0]
  i8478.isPauseActive = !!i8479[1]
  i8478.loadIndex = i8479[2]
  request.r(i8479[3], i8479[4], 0, i8478, 'removeAdsButton')
  request.r(i8479[5], i8479[6], 0, i8478, 'pauseButton')
  request.r(i8479[7], i8479[8], 0, i8478, 'Fade_Img')
  request.r(i8479[9], i8479[10], 0, i8478, 'TopBarAnim')
  request.r(i8479[11], i8479[12], 0, i8478, 'MainPanel')
  request.r(i8479[13], i8479[14], 0, i8478, 'PausePanel')
  request.r(i8479[15], i8479[16], 0, i8478, 'PausePopUp')
  request.r(i8479[17], i8479[18], 0, i8478, 'PauseCanvasGroup')
  request.r(i8479[19], i8479[20], 0, i8478, 'RateUsPanel')
  request.r(i8479[21], i8479[22], 0, i8478, 'RateUsPopUp')
  request.r(i8479[23], i8479[24], 0, i8478, 'RemoveAdsPanel')
  request.r(i8479[25], i8479[26], 0, i8478, 'RemoveAdsPopUp')
  request.r(i8479[27], i8479[28], 0, i8478, 'RemoveAdsCanvasGroup')
  var i8481 = i8479[29]
  var i8480 = []
  for(var i = 0; i < i8481.length; i += 2) {
  request.r(i8481[i + 0], i8481[i + 1], 2, i8480, '')
  }
  i8478.RemoveAdsAnims = i8480
  request.r(i8479[30], i8479[31], 0, i8478, 'CompletePanel')
  request.r(i8479[32], i8479[33], 0, i8478, 'LevelIcon')
  request.r(i8479[34], i8479[35], 0, i8478, 'CompleteParticles')
  request.r(i8479[36], i8479[37], 0, i8478, 'progressBar')
  request.r(i8479[38], i8479[39], 0, i8478, 'progressText')
  request.r(i8479[40], i8479[41], 0, i8478, 'toolIcon1')
  request.r(i8479[42], i8479[43], 0, i8478, 'toolIcon2')
  request.r(i8479[44], i8479[45], 0, i8478, 'toolIcon3')
  request.r(i8479[46], i8479[47], 0, i8478, 'target1')
  request.r(i8479[48], i8479[49], 0, i8478, 'target2')
  i8478.toolMoveDuration = i8479[50]
  i8478.currentIndex = i8479[51]
  var i8483 = i8479[52]
  var i8482 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i8483.length; i += 2) {
  request.r(i8483[i + 0], i8483[i + 1], 1, i8482, '')
  }
  i8478.allTools = i8482
  request.r(i8479[53], i8479[54], 0, i8478, 'clockProgress')
  request.r(i8479[55], i8479[56], 0, i8478, 'clockProgressFill')
  request.r(i8479[57], i8479[58], 0, i8478, 'clockAudio')
  i8478.moveDistance = i8479[59]
  i8478.animationDuration = i8479[60]
  i8478.greyBgChildName = i8479[61]
  i8478.pushOffset = i8479[62]
  return i8478
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i8486 = root || request.c( 'GameManagerPlayable' )
  var i8487 = data
  request.r(i8487[0], i8487[1], 0, i8486, 'endParticles')
  request.r(i8487[2], i8487[3], 0, i8486, 'stepCompleteParticles')
  request.r(i8487[4], i8487[5], 0, i8486, 'DefaultMat')
  request.r(i8487[6], i8487[7], 0, i8486, 'BG_Music')
  request.r(i8487[8], i8487[9], 0, i8486, 'restoreEffectShader')
  request.r(i8487[10], i8487[11], 0, i8486, 'stickerEffectShader')
  i8486.isComplete = !!i8487[12]
  i8486.isPaused = !!i8487[13]
  request.r(i8487[14], i8487[15], 0, i8486, 'currentLevel')
  return i8486
}

Deserializers["AudioController"] = function (request, data, root) {
  var i8488 = root || request.c( 'AudioController' )
  var i8489 = data
  request.r(i8489[0], i8489[1], 0, i8488, 'MainMixer')
  request.r(i8489[2], i8489[3], 0, i8488, 'UiClick')
  request.r(i8489[4], i8489[5], 0, i8488, 'UiClickSource')
  var i8491 = i8489[6]
  var i8490 = []
  for(var i = 0; i < i8491.length; i += 2) {
  request.r(i8491[i + 0], i8491[i + 1], 2, i8490, '')
  }
  i8488.SfxSources = i8490
  var i8493 = i8489[7]
  var i8492 = []
  for(var i = 0; i < i8493.length; i += 2) {
  request.r(i8493[i + 0], i8493[i + 1], 2, i8492, '')
  }
  i8488.AllClips = i8492
  return i8488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i8496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i8497 = data
  i8496.pivot = new pc.Vec2( i8497[0], i8497[1] )
  i8496.anchorMin = new pc.Vec2( i8497[2], i8497[3] )
  i8496.anchorMax = new pc.Vec2( i8497[4], i8497[5] )
  i8496.sizeDelta = new pc.Vec2( i8497[6], i8497[7] )
  i8496.anchoredPosition3D = new pc.Vec3( i8497[8], i8497[9], i8497[10] )
  i8496.rotation = new pc.Quat(i8497[11], i8497[12], i8497[13], i8497[14])
  i8496.scale = new pc.Vec3( i8497[15], i8497[16], i8497[17] )
  return i8496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i8498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i8499 = data
  i8498.planeDistance = i8499[0]
  i8498.referencePixelsPerUnit = i8499[1]
  i8498.isFallbackOverlay = !!i8499[2]
  i8498.renderMode = i8499[3]
  i8498.renderOrder = i8499[4]
  i8498.sortingLayerName = i8499[5]
  i8498.sortingOrder = i8499[6]
  i8498.scaleFactor = i8499[7]
  request.r(i8499[8], i8499[9], 0, i8498, 'worldCamera')
  i8498.overrideSorting = !!i8499[10]
  i8498.pixelPerfect = !!i8499[11]
  i8498.targetDisplay = i8499[12]
  i8498.overridePixelPerfect = !!i8499[13]
  i8498.enabled = !!i8499[14]
  return i8498
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i8500 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i8501 = data
  i8500.m_UiScaleMode = i8501[0]
  i8500.m_ReferencePixelsPerUnit = i8501[1]
  i8500.m_ScaleFactor = i8501[2]
  i8500.m_ReferenceResolution = new pc.Vec2( i8501[3], i8501[4] )
  i8500.m_ScreenMatchMode = i8501[5]
  i8500.m_MatchWidthOrHeight = i8501[6]
  i8500.m_PhysicalUnit = i8501[7]
  i8500.m_FallbackScreenDPI = i8501[8]
  i8500.m_DefaultSpriteDPI = i8501[9]
  i8500.m_DynamicPixelsPerUnit = i8501[10]
  i8500.m_PresetInfoIsWorld = !!i8501[11]
  return i8500
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i8502 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i8503 = data
  i8502.m_IgnoreReversedGraphics = !!i8503[0]
  i8502.m_BlockingObjects = i8503[1]
  i8502.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i8503[2] )
  return i8502
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i8504 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i8505 = data
  i8504.targetIsSelf = !!i8505[0]
  request.r(i8505[1], i8505[2], 0, i8504, 'targetGO')
  i8504.tweenTargetIsTargetGO = !!i8505[3]
  i8504.delay = i8505[4]
  i8504.duration = i8505[5]
  i8504.easeType = i8505[6]
  i8504.easeCurve = new pc.AnimationCurve( { keys_flow: i8505[7] } )
  i8504.loopType = i8505[8]
  i8504.loops = i8505[9]
  i8504.id = i8505[10]
  i8504.isRelative = !!i8505[11]
  i8504.isFrom = !!i8505[12]
  i8504.isIndependentUpdate = !!i8505[13]
  i8504.autoKill = !!i8505[14]
  i8504.autoGenerate = !!i8505[15]
  i8504.isActive = !!i8505[16]
  i8504.isValid = !!i8505[17]
  request.r(i8505[18], i8505[19], 0, i8504, 'target')
  i8504.animationType = i8505[20]
  i8504.targetType = i8505[21]
  i8504.forcedTargetType = i8505[22]
  i8504.autoPlay = !!i8505[23]
  i8504.useTargetAsV3 = !!i8505[24]
  i8504.endValueFloat = i8505[25]
  i8504.endValueV3 = new pc.Vec3( i8505[26], i8505[27], i8505[28] )
  i8504.endValueV2 = new pc.Vec2( i8505[29], i8505[30] )
  i8504.endValueColor = new pc.Color(i8505[31], i8505[32], i8505[33], i8505[34])
  i8504.endValueString = i8505[35]
  i8504.endValueRect = UnityEngine.Rect.MinMaxRect(i8505[36], i8505[37], i8505[38], i8505[39])
  request.r(i8505[40], i8505[41], 0, i8504, 'endValueTransform')
  i8504.optionalBool0 = !!i8505[42]
  i8504.optionalBool1 = !!i8505[43]
  i8504.optionalFloat0 = i8505[44]
  i8504.optionalInt0 = i8505[45]
  i8504.optionalRotationMode = i8505[46]
  i8504.optionalScrambleMode = i8505[47]
  i8504.optionalShakeRandomnessMode = i8505[48]
  i8504.optionalString = i8505[49]
  i8504.updateType = i8505[50]
  i8504.isSpeedBased = !!i8505[51]
  i8504.hasOnStart = !!i8505[52]
  i8504.hasOnPlay = !!i8505[53]
  i8504.hasOnUpdate = !!i8505[54]
  i8504.hasOnStepComplete = !!i8505[55]
  i8504.hasOnComplete = !!i8505[56]
  i8504.hasOnTweenCreated = !!i8505[57]
  i8504.hasOnRewind = !!i8505[58]
  i8504.onStart = request.d('UnityEngine.Events.UnityEvent', i8505[59], i8504.onStart)
  i8504.onPlay = request.d('UnityEngine.Events.UnityEvent', i8505[60], i8504.onPlay)
  i8504.onUpdate = request.d('UnityEngine.Events.UnityEvent', i8505[61], i8504.onUpdate)
  i8504.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i8505[62], i8504.onStepComplete)
  i8504.onComplete = request.d('UnityEngine.Events.UnityEvent', i8505[63], i8504.onComplete)
  i8504.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i8505[64], i8504.onTweenCreated)
  i8504.onRewind = request.d('UnityEngine.Events.UnityEvent', i8505[65], i8504.onRewind)
  return i8504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i8506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i8507 = data
  i8506.cullTransparentMesh = !!i8507[0]
  return i8506
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i8508 = root || request.c( 'UnityEngine.UI.Image' )
  var i8509 = data
  request.r(i8509[0], i8509[1], 0, i8508, 'm_Sprite')
  i8508.m_Type = i8509[2]
  i8508.m_PreserveAspect = !!i8509[3]
  i8508.m_FillCenter = !!i8509[4]
  i8508.m_FillMethod = i8509[5]
  i8508.m_FillAmount = i8509[6]
  i8508.m_FillClockwise = !!i8509[7]
  i8508.m_FillOrigin = i8509[8]
  i8508.m_UseSpriteMesh = !!i8509[9]
  i8508.m_PixelsPerUnitMultiplier = i8509[10]
  request.r(i8509[11], i8509[12], 0, i8508, 'm_Material')
  i8508.m_Maskable = !!i8509[13]
  i8508.m_Color = new pc.Color(i8509[14], i8509[15], i8509[16], i8509[17])
  i8508.m_RaycastTarget = !!i8509[18]
  i8508.m_RaycastPadding = new pc.Vec4( i8509[19], i8509[20], i8509[21], i8509[22] )
  return i8508
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i8510 = root || request.c( 'UnityEngine.UI.Text' )
  var i8511 = data
  i8510.m_FontData = request.d('UnityEngine.UI.FontData', i8511[0], i8510.m_FontData)
  i8510.m_Text = i8511[1]
  request.r(i8511[2], i8511[3], 0, i8510, 'm_Material')
  i8510.m_Maskable = !!i8511[4]
  i8510.m_Color = new pc.Color(i8511[5], i8511[6], i8511[7], i8511[8])
  i8510.m_RaycastTarget = !!i8511[9]
  i8510.m_RaycastPadding = new pc.Vec4( i8511[10], i8511[11], i8511[12], i8511[13] )
  return i8510
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i8512 = root || request.c( 'UnityEngine.UI.FontData' )
  var i8513 = data
  request.r(i8513[0], i8513[1], 0, i8512, 'm_Font')
  i8512.m_FontSize = i8513[2]
  i8512.m_FontStyle = i8513[3]
  i8512.m_BestFit = !!i8513[4]
  i8512.m_MinSize = i8513[5]
  i8512.m_MaxSize = i8513[6]
  i8512.m_Alignment = i8513[7]
  i8512.m_AlignByGeometry = !!i8513[8]
  i8512.m_RichText = !!i8513[9]
  i8512.m_HorizontalOverflow = i8513[10]
  i8512.m_VerticalOverflow = i8513[11]
  i8512.m_LineSpacing = i8513[12]
  return i8512
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i8514 = root || request.c( 'UnityEngine.UI.Button' )
  var i8515 = data
  i8514.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i8515[0], i8514.m_OnClick)
  i8514.m_Navigation = request.d('UnityEngine.UI.Navigation', i8515[1], i8514.m_Navigation)
  i8514.m_Transition = i8515[2]
  i8514.m_Colors = request.d('UnityEngine.UI.ColorBlock', i8515[3], i8514.m_Colors)
  i8514.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i8515[4], i8514.m_SpriteState)
  i8514.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i8515[5], i8514.m_AnimationTriggers)
  i8514.m_Interactable = !!i8515[6]
  request.r(i8515[7], i8515[8], 0, i8514, 'm_TargetGraphic')
  return i8514
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i8516 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i8517 = data
  i8516.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i8517[0], i8516.m_PersistentCalls)
  return i8516
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i8518 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i8519 = data
  i8518.m_Mode = i8519[0]
  i8518.m_WrapAround = !!i8519[1]
  request.r(i8519[2], i8519[3], 0, i8518, 'm_SelectOnUp')
  request.r(i8519[4], i8519[5], 0, i8518, 'm_SelectOnDown')
  request.r(i8519[6], i8519[7], 0, i8518, 'm_SelectOnLeft')
  request.r(i8519[8], i8519[9], 0, i8518, 'm_SelectOnRight')
  return i8518
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i8520 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i8521 = data
  i8520.m_NormalColor = new pc.Color(i8521[0], i8521[1], i8521[2], i8521[3])
  i8520.m_HighlightedColor = new pc.Color(i8521[4], i8521[5], i8521[6], i8521[7])
  i8520.m_PressedColor = new pc.Color(i8521[8], i8521[9], i8521[10], i8521[11])
  i8520.m_SelectedColor = new pc.Color(i8521[12], i8521[13], i8521[14], i8521[15])
  i8520.m_DisabledColor = new pc.Color(i8521[16], i8521[17], i8521[18], i8521[19])
  i8520.m_ColorMultiplier = i8521[20]
  i8520.m_FadeDuration = i8521[21]
  return i8520
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i8522 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i8523 = data
  request.r(i8523[0], i8523[1], 0, i8522, 'm_HighlightedSprite')
  request.r(i8523[2], i8523[3], 0, i8522, 'm_PressedSprite')
  request.r(i8523[4], i8523[5], 0, i8522, 'm_SelectedSprite')
  request.r(i8523[6], i8523[7], 0, i8522, 'm_DisabledSprite')
  return i8522
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i8524 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i8525 = data
  i8524.m_NormalTrigger = i8525[0]
  i8524.m_HighlightedTrigger = i8525[1]
  i8524.m_PressedTrigger = i8525[2]
  i8524.m_SelectedTrigger = i8525[3]
  i8524.m_DisabledTrigger = i8525[4]
  return i8524
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i8526 = root || request.c( 'PlayableHudRuntime' )
  var i8527 = data
  return i8526
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i8528 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i8529 = data
  request.r(i8529[0], i8529[1], 0, i8528, 'm_FirstSelected')
  i8528.m_sendNavigationEvents = !!i8529[2]
  i8528.m_DragThreshold = i8529[3]
  return i8528
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i8530 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i8531 = data
  i8530.m_HorizontalAxis = i8531[0]
  i8530.m_VerticalAxis = i8531[1]
  i8530.m_SubmitButton = i8531[2]
  i8530.m_CancelButton = i8531[3]
  i8530.m_InputActionsPerSecond = i8531[4]
  i8530.m_RepeatDelay = i8531[5]
  i8530.m_ForceModuleActive = !!i8531[6]
  i8530.m_SendPointerHoverToParent = !!i8531[7]
  return i8530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i8532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i8533 = data
  i8532.ambientIntensity = i8533[0]
  i8532.reflectionIntensity = i8533[1]
  i8532.ambientMode = i8533[2]
  i8532.ambientLight = new pc.Color(i8533[3], i8533[4], i8533[5], i8533[6])
  i8532.ambientSkyColor = new pc.Color(i8533[7], i8533[8], i8533[9], i8533[10])
  i8532.ambientGroundColor = new pc.Color(i8533[11], i8533[12], i8533[13], i8533[14])
  i8532.ambientEquatorColor = new pc.Color(i8533[15], i8533[16], i8533[17], i8533[18])
  i8532.fogColor = new pc.Color(i8533[19], i8533[20], i8533[21], i8533[22])
  i8532.fogEndDistance = i8533[23]
  i8532.fogStartDistance = i8533[24]
  i8532.fogDensity = i8533[25]
  i8532.fog = !!i8533[26]
  request.r(i8533[27], i8533[28], 0, i8532, 'skybox')
  i8532.fogMode = i8533[29]
  var i8535 = i8533[30]
  var i8534 = []
  for(var i = 0; i < i8535.length; i += 1) {
    i8534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i8535[i + 0]) );
  }
  i8532.lightmaps = i8534
  i8532.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i8533[31], i8532.lightProbes)
  i8532.lightmapsMode = i8533[32]
  i8532.mixedBakeMode = i8533[33]
  i8532.environmentLightingMode = i8533[34]
  i8532.ambientProbe = new pc.SphericalHarmonicsL2(i8533[35])
  request.r(i8533[36], i8533[37], 0, i8532, 'customReflection')
  request.r(i8533[38], i8533[39], 0, i8532, 'defaultReflection')
  i8532.defaultReflectionMode = i8533[40]
  i8532.defaultReflectionResolution = i8533[41]
  i8532.sunLightObjectId = i8533[42]
  i8532.pixelLightCount = i8533[43]
  i8532.defaultReflectionHDR = !!i8533[44]
  i8532.hasLightDataAsset = !!i8533[45]
  i8532.hasManualGenerate = !!i8533[46]
  return i8532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i8538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i8539 = data
  request.r(i8539[0], i8539[1], 0, i8538, 'lightmapColor')
  request.r(i8539[2], i8539[3], 0, i8538, 'lightmapDirection')
  request.r(i8539[4], i8539[5], 0, i8538, 'shadowMask')
  return i8538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i8540 = root || new UnityEngine.LightProbes()
  var i8541 = data
  return i8540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i8546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i8547 = data
  var i8549 = i8547[0]
  var i8548 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i8549.length; i += 1) {
    i8548.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i8549[i + 0]));
  }
  i8546.ShaderCompilationErrors = i8548
  i8546.name = i8547[1]
  i8546.guid = i8547[2]
  var i8551 = i8547[3]
  var i8550 = []
  for(var i = 0; i < i8551.length; i += 1) {
    i8550.push( i8551[i + 0] );
  }
  i8546.shaderDefinedKeywords = i8550
  var i8553 = i8547[4]
  var i8552 = []
  for(var i = 0; i < i8553.length; i += 1) {
    i8552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i8553[i + 0]) );
  }
  i8546.passes = i8552
  var i8555 = i8547[5]
  var i8554 = []
  for(var i = 0; i < i8555.length; i += 1) {
    i8554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i8555[i + 0]) );
  }
  i8546.usePasses = i8554
  var i8557 = i8547[6]
  var i8556 = []
  for(var i = 0; i < i8557.length; i += 1) {
    i8556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i8557[i + 0]) );
  }
  i8546.defaultParameterValues = i8556
  request.r(i8547[7], i8547[8], 0, i8546, 'unityFallbackShader')
  i8546.readDepth = !!i8547[9]
  i8546.hasDepthOnlyPass = !!i8547[10]
  i8546.isCreatedByShaderGraph = !!i8547[11]
  i8546.disableBatching = !!i8547[12]
  i8546.compiled = !!i8547[13]
  return i8546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i8560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i8561 = data
  i8560.shaderName = i8561[0]
  i8560.errorMessage = i8561[1]
  return i8560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i8566 = root || new pc.UnityShaderPass()
  var i8567 = data
  i8566.id = i8567[0]
  i8566.subShaderIndex = i8567[1]
  i8566.name = i8567[2]
  i8566.passType = i8567[3]
  i8566.grabPassTextureName = i8567[4]
  i8566.usePass = !!i8567[5]
  i8566.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8567[6], i8566.zTest)
  i8566.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8567[7], i8566.zWrite)
  i8566.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8567[8], i8566.culling)
  i8566.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8567[9], i8566.blending)
  i8566.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i8567[10], i8566.alphaBlending)
  i8566.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8567[11], i8566.colorWriteMask)
  i8566.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8567[12], i8566.offsetUnits)
  i8566.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8567[13], i8566.offsetFactor)
  i8566.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8567[14], i8566.stencilRef)
  i8566.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8567[15], i8566.stencilReadMask)
  i8566.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8567[16], i8566.stencilWriteMask)
  i8566.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8567[17], i8566.stencilOp)
  i8566.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8567[18], i8566.stencilOpFront)
  i8566.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i8567[19], i8566.stencilOpBack)
  var i8569 = i8567[20]
  var i8568 = []
  for(var i = 0; i < i8569.length; i += 1) {
    i8568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i8569[i + 0]) );
  }
  i8566.tags = i8568
  var i8571 = i8567[21]
  var i8570 = []
  for(var i = 0; i < i8571.length; i += 1) {
    i8570.push( i8571[i + 0] );
  }
  i8566.passDefinedKeywords = i8570
  var i8573 = i8567[22]
  var i8572 = []
  for(var i = 0; i < i8573.length; i += 1) {
    i8572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i8573[i + 0]) );
  }
  i8566.passDefinedKeywordGroups = i8572
  var i8575 = i8567[23]
  var i8574 = []
  for(var i = 0; i < i8575.length; i += 1) {
    i8574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8575[i + 0]) );
  }
  i8566.variants = i8574
  var i8577 = i8567[24]
  var i8576 = []
  for(var i = 0; i < i8577.length; i += 1) {
    i8576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i8577[i + 0]) );
  }
  i8566.excludedVariants = i8576
  i8566.hasDepthReader = !!i8567[25]
  return i8566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i8578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i8579 = data
  i8578.val = i8579[0]
  i8578.name = i8579[1]
  return i8578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i8580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i8581 = data
  i8580.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8581[0], i8580.src)
  i8580.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8581[1], i8580.dst)
  i8580.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8581[2], i8580.op)
  return i8580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i8582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i8583 = data
  i8582.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8583[0], i8582.pass)
  i8582.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8583[1], i8582.fail)
  i8582.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8583[2], i8582.zFail)
  i8582.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i8583[3], i8582.comp)
  return i8582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i8586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i8587 = data
  i8586.name = i8587[0]
  i8586.value = i8587[1]
  return i8586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i8590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i8591 = data
  var i8593 = i8591[0]
  var i8592 = []
  for(var i = 0; i < i8593.length; i += 1) {
    i8592.push( i8593[i + 0] );
  }
  i8590.keywords = i8592
  i8590.hasDiscard = !!i8591[1]
  return i8590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i8596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i8597 = data
  i8596.passId = i8597[0]
  i8596.subShaderIndex = i8597[1]
  var i8599 = i8597[2]
  var i8598 = []
  for(var i = 0; i < i8599.length; i += 1) {
    i8598.push( i8599[i + 0] );
  }
  i8596.keywords = i8598
  i8596.vertexProgram = i8597[3]
  i8596.fragmentProgram = i8597[4]
  i8596.exportedForWebGl2 = !!i8597[5]
  i8596.readDepth = !!i8597[6]
  return i8596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i8602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i8603 = data
  request.r(i8603[0], i8603[1], 0, i8602, 'shader')
  i8602.pass = i8603[2]
  return i8602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i8606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i8607 = data
  i8606.name = i8607[0]
  i8606.type = i8607[1]
  i8606.value = new pc.Vec4( i8607[2], i8607[3], i8607[4], i8607[5] )
  i8606.textureValue = i8607[6]
  i8606.shaderPropertyFlag = i8607[7]
  return i8606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i8608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i8609 = data
  i8608.name = i8609[0]
  request.r(i8609[1], i8609[2], 0, i8608, 'texture')
  i8608.aabb = i8609[3]
  i8608.vertices = i8609[4]
  i8608.triangles = i8609[5]
  i8608.textureRect = UnityEngine.Rect.MinMaxRect(i8609[6], i8609[7], i8609[8], i8609[9])
  i8608.packedRect = UnityEngine.Rect.MinMaxRect(i8609[10], i8609[11], i8609[12], i8609[13])
  i8608.border = new pc.Vec4( i8609[14], i8609[15], i8609[16], i8609[17] )
  i8608.transparency = i8609[18]
  i8608.bounds = i8609[19]
  i8608.pixelsPerUnit = i8609[20]
  i8608.textureWidth = i8609[21]
  i8608.textureHeight = i8609[22]
  i8608.nativeSize = new pc.Vec2( i8609[23], i8609[24] )
  i8608.pivot = new pc.Vec2( i8609[25], i8609[26] )
  i8608.textureRectOffset = new pc.Vec2( i8609[27], i8609[28] )
  return i8608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i8610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i8611 = data
  i8610.name = i8611[0]
  return i8610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i8612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i8613 = data
  i8612.name = i8613[0]
  i8612.wrapMode = i8613[1]
  i8612.isLooping = !!i8613[2]
  i8612.length = i8613[3]
  var i8615 = i8613[4]
  var i8614 = []
  for(var i = 0; i < i8615.length; i += 1) {
    i8614.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i8615[i + 0]) );
  }
  i8612.curves = i8614
  var i8617 = i8613[5]
  var i8616 = []
  for(var i = 0; i < i8617.length; i += 1) {
    i8616.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i8617[i + 0]) );
  }
  i8612.events = i8616
  i8612.halfPrecision = !!i8613[6]
  i8612._frameRate = i8613[7]
  i8612.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i8613[8], i8612.localBounds)
  i8612.hasMuscleCurves = !!i8613[9]
  var i8619 = i8613[10]
  var i8618 = []
  for(var i = 0; i < i8619.length; i += 1) {
    i8618.push( i8619[i + 0] );
  }
  i8612.clipMuscleConstant = i8618
  i8612.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i8613[11], i8612.clipBindingConstant)
  return i8612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i8622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i8623 = data
  i8622.path = i8623[0]
  i8622.hash = i8623[1]
  i8622.componentType = i8623[2]
  i8622.property = i8623[3]
  i8622.keys = i8623[4]
  var i8625 = i8623[5]
  var i8624 = []
  for(var i = 0; i < i8625.length; i += 1) {
    i8624.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i8625[i + 0]) );
  }
  i8622.objectReferenceKeys = i8624
  return i8622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i8628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i8629 = data
  i8628.time = i8629[0]
  request.r(i8629[1], i8629[2], 0, i8628, 'value')
  return i8628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i8632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i8633 = data
  i8632.functionName = i8633[0]
  i8632.floatParameter = i8633[1]
  i8632.intParameter = i8633[2]
  i8632.stringParameter = i8633[3]
  request.r(i8633[4], i8633[5], 0, i8632, 'objectReferenceParameter')
  i8632.time = i8633[6]
  return i8632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i8634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i8635 = data
  i8634.center = new pc.Vec3( i8635[0], i8635[1], i8635[2] )
  i8634.extends = new pc.Vec3( i8635[3], i8635[4], i8635[5] )
  return i8634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i8638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i8639 = data
  var i8641 = i8639[0]
  var i8640 = []
  for(var i = 0; i < i8641.length; i += 1) {
    i8640.push( i8641[i + 0] );
  }
  i8638.genericBindings = i8640
  var i8643 = i8639[1]
  var i8642 = []
  for(var i = 0; i < i8643.length; i += 1) {
    i8642.push( i8643[i + 0] );
  }
  i8638.pptrCurveMapping = i8642
  return i8638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i8644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i8645 = data
  i8644.name = i8645[0]
  i8644.ascent = i8645[1]
  i8644.originalLineHeight = i8645[2]
  i8644.fontSize = i8645[3]
  var i8647 = i8645[4]
  var i8646 = []
  for(var i = 0; i < i8647.length; i += 1) {
    i8646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i8647[i + 0]) );
  }
  i8644.characterInfo = i8646
  request.r(i8645[5], i8645[6], 0, i8644, 'texture')
  i8644.originalFontSize = i8645[7]
  return i8644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i8650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i8651 = data
  i8650.index = i8651[0]
  i8650.advance = i8651[1]
  i8650.bearing = i8651[2]
  i8650.glyphWidth = i8651[3]
  i8650.glyphHeight = i8651[4]
  i8650.minX = i8651[5]
  i8650.maxX = i8651[6]
  i8650.minY = i8651[7]
  i8650.maxY = i8651[8]
  i8650.uvBottomLeftX = i8651[9]
  i8650.uvBottomLeftY = i8651[10]
  i8650.uvBottomRightX = i8651[11]
  i8650.uvBottomRightY = i8651[12]
  i8650.uvTopLeftX = i8651[13]
  i8650.uvTopLeftY = i8651[14]
  i8650.uvTopRightX = i8651[15]
  i8650.uvTopRightY = i8651[16]
  return i8650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i8652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i8653 = data
  i8652.name = i8653[0]
  var i8655 = i8653[1]
  var i8654 = []
  for(var i = 0; i < i8655.length; i += 1) {
    i8654.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i8655[i + 0]) );
  }
  i8652.layers = i8654
  var i8657 = i8653[2]
  var i8656 = []
  for(var i = 0; i < i8657.length; i += 1) {
    i8656.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i8657[i + 0]) );
  }
  i8652.parameters = i8656
  i8652.animationClips = i8653[3]
  i8652.avatarUnsupported = i8653[4]
  return i8652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i8660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i8661 = data
  i8660.name = i8661[0]
  i8660.defaultWeight = i8661[1]
  i8660.blendingMode = i8661[2]
  i8660.avatarMask = i8661[3]
  i8660.syncedLayerIndex = i8661[4]
  i8660.syncedLayerAffectsTiming = !!i8661[5]
  i8660.syncedLayers = i8661[6]
  i8660.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8661[7], i8660.stateMachine)
  return i8660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i8662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i8663 = data
  i8662.id = i8663[0]
  i8662.name = i8663[1]
  i8662.path = i8663[2]
  var i8665 = i8663[3]
  var i8664 = []
  for(var i = 0; i < i8665.length; i += 1) {
    i8664.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i8665[i + 0]) );
  }
  i8662.states = i8664
  var i8667 = i8663[4]
  var i8666 = []
  for(var i = 0; i < i8667.length; i += 1) {
    i8666.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i8667[i + 0]) );
  }
  i8662.machines = i8666
  var i8669 = i8663[5]
  var i8668 = []
  for(var i = 0; i < i8669.length; i += 1) {
    i8668.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8669[i + 0]) );
  }
  i8662.entryStateTransitions = i8668
  var i8671 = i8663[6]
  var i8670 = []
  for(var i = 0; i < i8671.length; i += 1) {
    i8670.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i8671[i + 0]) );
  }
  i8662.exitStateTransitions = i8670
  var i8673 = i8663[7]
  var i8672 = []
  for(var i = 0; i < i8673.length; i += 1) {
    i8672.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8673[i + 0]) );
  }
  i8662.anyStateTransitions = i8672
  i8662.defaultStateId = i8663[8]
  return i8662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i8676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i8677 = data
  i8676.id = i8677[0]
  i8676.name = i8677[1]
  i8676.cycleOffset = i8677[2]
  i8676.cycleOffsetParameter = i8677[3]
  i8676.cycleOffsetParameterActive = !!i8677[4]
  i8676.mirror = !!i8677[5]
  i8676.mirrorParameter = i8677[6]
  i8676.mirrorParameterActive = !!i8677[7]
  i8676.motionId = i8677[8]
  i8676.nameHash = i8677[9]
  i8676.fullPathHash = i8677[10]
  i8676.speed = i8677[11]
  i8676.speedParameter = i8677[12]
  i8676.speedParameterActive = !!i8677[13]
  i8676.tag = i8677[14]
  i8676.tagHash = i8677[15]
  i8676.writeDefaultValues = !!i8677[16]
  var i8679 = i8677[17]
  var i8678 = []
  for(var i = 0; i < i8679.length; i += 2) {
  request.r(i8679[i + 0], i8679[i + 1], 2, i8678, '')
  }
  i8676.behaviours = i8678
  var i8681 = i8677[18]
  var i8680 = []
  for(var i = 0; i < i8681.length; i += 1) {
    i8680.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i8681[i + 0]) );
  }
  i8676.transitions = i8680
  return i8676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i8686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i8687 = data
  i8686.fullPath = i8687[0]
  i8686.canTransitionToSelf = !!i8687[1]
  i8686.duration = i8687[2]
  i8686.exitTime = i8687[3]
  i8686.hasExitTime = !!i8687[4]
  i8686.hasFixedDuration = !!i8687[5]
  i8686.interruptionSource = i8687[6]
  i8686.offset = i8687[7]
  i8686.orderedInterruption = !!i8687[8]
  i8686.destinationStateId = i8687[9]
  i8686.isExit = !!i8687[10]
  i8686.mute = !!i8687[11]
  i8686.solo = !!i8687[12]
  var i8689 = i8687[13]
  var i8688 = []
  for(var i = 0; i < i8689.length; i += 1) {
    i8688.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8689[i + 0]) );
  }
  i8686.conditions = i8688
  return i8686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i8694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i8695 = data
  i8694.destinationStateId = i8695[0]
  i8694.isExit = !!i8695[1]
  i8694.mute = !!i8695[2]
  i8694.solo = !!i8695[3]
  var i8697 = i8695[4]
  var i8696 = []
  for(var i = 0; i < i8697.length; i += 1) {
    i8696.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i8697[i + 0]) );
  }
  i8694.conditions = i8696
  return i8694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i8700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i8701 = data
  i8700.mode = i8701[0]
  i8700.parameter = i8701[1]
  i8700.threshold = i8701[2]
  return i8700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i8704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i8705 = data
  i8704.defaultBool = !!i8705[0]
  i8704.defaultFloat = i8705[1]
  i8704.defaultInt = i8705[2]
  i8704.name = i8705[3]
  i8704.nameHash = i8705[4]
  i8704.type = i8705[5]
  return i8704
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i8706 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i8707 = data
  i8706.useSafeMode = !!i8707[0]
  i8706.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i8707[1], i8706.safeModeOptions)
  i8706.timeScale = i8707[2]
  i8706.unscaledTimeScale = i8707[3]
  i8706.useSmoothDeltaTime = !!i8707[4]
  i8706.maxSmoothUnscaledTime = i8707[5]
  i8706.rewindCallbackMode = i8707[6]
  i8706.showUnityEditorReport = !!i8707[7]
  i8706.logBehaviour = i8707[8]
  i8706.drawGizmos = !!i8707[9]
  i8706.defaultRecyclable = !!i8707[10]
  i8706.defaultAutoPlay = i8707[11]
  i8706.defaultUpdateType = i8707[12]
  i8706.defaultTimeScaleIndependent = !!i8707[13]
  i8706.defaultEaseType = i8707[14]
  i8706.defaultEaseOvershootOrAmplitude = i8707[15]
  i8706.defaultEasePeriod = i8707[16]
  i8706.defaultAutoKill = !!i8707[17]
  i8706.defaultLoopType = i8707[18]
  i8706.debugMode = !!i8707[19]
  i8706.debugStoreTargetId = !!i8707[20]
  i8706.showPreviewPanel = !!i8707[21]
  i8706.storeSettingsLocation = i8707[22]
  i8706.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i8707[23], i8706.modules)
  i8706.createASMDEF = !!i8707[24]
  i8706.showPlayingTweens = !!i8707[25]
  i8706.showPausedTweens = !!i8707[26]
  return i8706
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i8708 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i8709 = data
  i8708.logBehaviour = i8709[0]
  i8708.nestedTweenFailureBehaviour = i8709[1]
  return i8708
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i8710 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i8711 = data
  i8710.showPanel = !!i8711[0]
  i8710.audioEnabled = !!i8711[1]
  i8710.physicsEnabled = !!i8711[2]
  i8710.physics2DEnabled = !!i8711[3]
  i8710.spriteEnabled = !!i8711[4]
  i8710.uiEnabled = !!i8711[5]
  i8710.textMeshProEnabled = !!i8711[6]
  i8710.tk2DEnabled = !!i8711[7]
  i8710.deAudioEnabled = !!i8711[8]
  i8710.deUnityExtendedEnabled = !!i8711[9]
  i8710.epoOutlineEnabled = !!i8711[10]
  return i8710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i8712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i8713 = data
  var i8715 = i8713[0]
  var i8714 = []
  for(var i = 0; i < i8715.length; i += 1) {
    i8714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i8715[i + 0]) );
  }
  i8712.files = i8714
  i8712.componentToPrefabIds = i8713[1]
  return i8712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i8718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i8719 = data
  i8718.path = i8719[0]
  request.r(i8719[1], i8719[2], 0, i8718, 'unityObject')
  return i8718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i8720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i8721 = data
  var i8723 = i8721[0]
  var i8722 = []
  for(var i = 0; i < i8723.length; i += 1) {
    i8722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i8723[i + 0]) );
  }
  i8720.scriptsExecutionOrder = i8722
  var i8725 = i8721[1]
  var i8724 = []
  for(var i = 0; i < i8725.length; i += 1) {
    i8724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i8725[i + 0]) );
  }
  i8720.sortingLayers = i8724
  var i8727 = i8721[2]
  var i8726 = []
  for(var i = 0; i < i8727.length; i += 1) {
    i8726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i8727[i + 0]) );
  }
  i8720.cullingLayers = i8726
  i8720.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i8721[3], i8720.timeSettings)
  i8720.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i8721[4], i8720.physicsSettings)
  i8720.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i8721[5], i8720.physics2DSettings)
  i8720.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8721[6], i8720.qualitySettings)
  i8720.enableRealtimeShadows = !!i8721[7]
  i8720.enableAutoInstancing = !!i8721[8]
  i8720.enableStaticBatching = !!i8721[9]
  i8720.enableDynamicBatching = !!i8721[10]
  i8720.usePreservativeDynamicBatching = !!i8721[11]
  i8720.lightmapEncodingQuality = i8721[12]
  i8720.desiredColorSpace = i8721[13]
  var i8729 = i8721[14]
  var i8728 = []
  for(var i = 0; i < i8729.length; i += 1) {
    i8728.push( i8729[i + 0] );
  }
  i8720.allTags = i8728
  return i8720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i8732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i8733 = data
  i8732.name = i8733[0]
  i8732.value = i8733[1]
  return i8732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i8736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i8737 = data
  i8736.id = i8737[0]
  i8736.name = i8737[1]
  i8736.value = i8737[2]
  return i8736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i8740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i8741 = data
  i8740.id = i8741[0]
  i8740.name = i8741[1]
  return i8740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i8742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i8743 = data
  i8742.fixedDeltaTime = i8743[0]
  i8742.maximumDeltaTime = i8743[1]
  i8742.timeScale = i8743[2]
  i8742.maximumParticleTimestep = i8743[3]
  return i8742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i8744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i8745 = data
  i8744.gravity = new pc.Vec3( i8745[0], i8745[1], i8745[2] )
  i8744.defaultSolverIterations = i8745[3]
  i8744.bounceThreshold = i8745[4]
  i8744.autoSyncTransforms = !!i8745[5]
  i8744.autoSimulation = !!i8745[6]
  var i8747 = i8745[7]
  var i8746 = []
  for(var i = 0; i < i8747.length; i += 1) {
    i8746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i8747[i + 0]) );
  }
  i8744.collisionMatrix = i8746
  return i8744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i8750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i8751 = data
  i8750.enabled = !!i8751[0]
  i8750.layerId = i8751[1]
  i8750.otherLayerId = i8751[2]
  return i8750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i8752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i8753 = data
  request.r(i8753[0], i8753[1], 0, i8752, 'material')
  i8752.gravity = new pc.Vec2( i8753[2], i8753[3] )
  i8752.positionIterations = i8753[4]
  i8752.velocityIterations = i8753[5]
  i8752.velocityThreshold = i8753[6]
  i8752.maxLinearCorrection = i8753[7]
  i8752.maxAngularCorrection = i8753[8]
  i8752.maxTranslationSpeed = i8753[9]
  i8752.maxRotationSpeed = i8753[10]
  i8752.baumgarteScale = i8753[11]
  i8752.baumgarteTOIScale = i8753[12]
  i8752.timeToSleep = i8753[13]
  i8752.linearSleepTolerance = i8753[14]
  i8752.angularSleepTolerance = i8753[15]
  i8752.defaultContactOffset = i8753[16]
  i8752.autoSimulation = !!i8753[17]
  i8752.queriesHitTriggers = !!i8753[18]
  i8752.queriesStartInColliders = !!i8753[19]
  i8752.callbacksOnDisable = !!i8753[20]
  i8752.reuseCollisionCallbacks = !!i8753[21]
  i8752.autoSyncTransforms = !!i8753[22]
  var i8755 = i8753[23]
  var i8754 = []
  for(var i = 0; i < i8755.length; i += 1) {
    i8754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i8755[i + 0]) );
  }
  i8752.collisionMatrix = i8754
  return i8752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i8758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i8759 = data
  i8758.enabled = !!i8759[0]
  i8758.layerId = i8759[1]
  i8758.otherLayerId = i8759[2]
  return i8758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i8760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i8761 = data
  var i8763 = i8761[0]
  var i8762 = []
  for(var i = 0; i < i8763.length; i += 1) {
    i8762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i8763[i + 0]) );
  }
  i8760.qualityLevels = i8762
  var i8765 = i8761[1]
  var i8764 = []
  for(var i = 0; i < i8765.length; i += 1) {
    i8764.push( i8765[i + 0] );
  }
  i8760.names = i8764
  i8760.shadows = i8761[2]
  i8760.anisotropicFiltering = i8761[3]
  i8760.antiAliasing = i8761[4]
  i8760.lodBias = i8761[5]
  i8760.shadowCascades = i8761[6]
  i8760.shadowDistance = i8761[7]
  i8760.shadowmaskMode = i8761[8]
  i8760.shadowProjection = i8761[9]
  i8760.shadowResolution = i8761[10]
  i8760.softParticles = !!i8761[11]
  i8760.softVegetation = !!i8761[12]
  i8760.activeColorSpace = i8761[13]
  i8760.desiredColorSpace = i8761[14]
  i8760.masterTextureLimit = i8761[15]
  i8760.maxQueuedFrames = i8761[16]
  i8760.particleRaycastBudget = i8761[17]
  i8760.pixelLightCount = i8761[18]
  i8760.realtimeReflectionProbes = !!i8761[19]
  i8760.shadowCascade2Split = i8761[20]
  i8760.shadowCascade4Split = new pc.Vec3( i8761[21], i8761[22], i8761[23] )
  i8760.streamingMipmapsActive = !!i8761[24]
  i8760.vSyncCount = i8761[25]
  i8760.asyncUploadBufferSize = i8761[26]
  i8760.asyncUploadTimeSlice = i8761[27]
  i8760.billboardsFaceCameraPosition = !!i8761[28]
  i8760.shadowNearPlaneOffset = i8761[29]
  i8760.streamingMipmapsMemoryBudget = i8761[30]
  i8760.maximumLODLevel = i8761[31]
  i8760.streamingMipmapsAddAllCameras = !!i8761[32]
  i8760.streamingMipmapsMaxLevelReduction = i8761[33]
  i8760.streamingMipmapsRenderersPerFrame = i8761[34]
  i8760.resolutionScalingFixedDPIFactor = i8761[35]
  i8760.streamingMipmapsMaxFileIORequests = i8761[36]
  i8760.currentQualityLevel = i8761[37]
  return i8760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i8768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i8769 = data
  var i8771 = i8769[0]
  var i8770 = []
  for(var i = 0; i < i8771.length; i += 1) {
    i8770.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i8771[i + 0]) );
  }
  i8768.groups = i8770
  var i8773 = i8769[1]
  var i8772 = []
  for(var i = 0; i < i8773.length; i += 1) {
    i8772.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i8773[i + 0]) );
  }
  i8768.snapshots = i8772
  return i8768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i8776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i8777 = data
  i8776.id = i8777[0]
  i8776.childGroupIds = i8777[1]
  i8776.name = i8777[2]
  return i8776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i8780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i8781 = data
  i8780.id = i8781[0]
  var i8783 = i8781[1]
  var i8782 = []
  for(var i = 0; i < i8783.length; i += 1) {
    i8782.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i8783[i + 0]) );
  }
  i8780.parameters = i8782
  return i8780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i8786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i8787 = data
  i8786.name = i8787[0]
  i8786.value = i8787[1]
  return i8786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i8790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i8791 = data
  i8790.weight = i8791[0]
  i8790.vertices = i8791[1]
  i8790.normals = i8791[2]
  i8790.tangents = i8791[3]
  return i8790
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[77],"78":[45],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[40],"88":[40],"89":[40],"90":[40],"91":[40],"92":[40],"93":[40],"94":[40],"95":[40],"96":[40],"97":[40],"98":[40],"99":[40],"100":[45],"101":[102],"103":[104],"105":[104],"57":[50],"106":[30],"107":[15],"108":[36],"109":[15],"110":[111],"112":[111],"113":[52],"114":[36],"115":[15],"32":[15],"116":[50],"117":[50],"60":[57],"51":[61,50],"118":[50],"59":[57],"119":[50],"120":[50],"121":[50],"122":[50],"123":[50],"124":[50],"125":[50],"126":[50],"127":[50],"128":[61,50],"129":[50],"130":[50],"131":[50],"132":[50],"53":[61,50],"133":[50],"134":[65],"135":[65],"66":[65],"136":[65],"137":[45],"138":[45]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level3_Manicure_Playable","InteractableBones","UnityEngine.GameObject","BasicDrag","BD_CameraFollow","BD_ToolRotate","UnityEngine.Animator","UnityEngine.SpriteRenderer","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","PlayParticlesOnCollision","UnityEngine.CircleCollider2D","ActionOnTriggerStay","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.LineRenderer","TextureOffsetScroller","UnityEngine.U2D.Animation.SpriteSkin","UnityEditor.Animations.AnimatorController","UnityEngine.SpriteMask","ActionOnTap","UnityEngine.BoxCollider2D","BD_AnimationHelper","BD_Progress","BD_Clamp","UnityEngine.Rigidbody2D","BD_ProgressHelper","BD_Action","Lvl3_NailTrim","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "6.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "27Aug2026_Level_3_2_Step_1to3";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1702";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4597";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "False";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "HMBL.";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "874bf8a3-c092-48a9-acb9-728f43fb1893";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

