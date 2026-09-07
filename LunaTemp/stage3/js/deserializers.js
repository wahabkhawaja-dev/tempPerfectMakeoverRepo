var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i5152 = root || request.c( 'UnityEngine.JointSpring' )
  var i5153 = data
  i5152.spring = i5153[0]
  i5152.damper = i5153[1]
  i5152.targetPosition = i5153[2]
  return i5152
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i5154 = root || request.c( 'UnityEngine.JointMotor' )
  var i5155 = data
  i5154.m_TargetVelocity = i5155[0]
  i5154.m_Force = i5155[1]
  i5154.m_FreeSpin = i5155[2]
  return i5154
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i5156 = root || request.c( 'UnityEngine.JointLimits' )
  var i5157 = data
  i5156.m_Min = i5157[0]
  i5156.m_Max = i5157[1]
  i5156.m_Bounciness = i5157[2]
  i5156.m_BounceMinVelocity = i5157[3]
  i5156.m_ContactDistance = i5157[4]
  i5156.minBounce = i5157[5]
  i5156.maxBounce = i5157[6]
  return i5156
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i5158 = root || request.c( 'UnityEngine.JointDrive' )
  var i5159 = data
  i5158.m_PositionSpring = i5159[0]
  i5158.m_PositionDamper = i5159[1]
  i5158.m_MaximumForce = i5159[2]
  i5158.m_UseAcceleration = i5159[3]
  return i5158
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i5160 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i5161 = data
  i5160.m_Spring = i5161[0]
  i5160.m_Damper = i5161[1]
  return i5160
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i5162 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i5163 = data
  i5162.m_Limit = i5163[0]
  i5162.m_Bounciness = i5163[1]
  i5162.m_ContactDistance = i5163[2]
  return i5162
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i5164 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i5165 = data
  i5164.m_ExtremumSlip = i5165[0]
  i5164.m_ExtremumValue = i5165[1]
  i5164.m_AsymptoteSlip = i5165[2]
  i5164.m_AsymptoteValue = i5165[3]
  i5164.m_Stiffness = i5165[4]
  return i5164
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i5166 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i5167 = data
  i5166.m_LowerAngle = i5167[0]
  i5166.m_UpperAngle = i5167[1]
  return i5166
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i5168 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i5169 = data
  i5168.m_MotorSpeed = i5169[0]
  i5168.m_MaximumMotorTorque = i5169[1]
  return i5168
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i5170 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i5171 = data
  i5170.m_DampingRatio = i5171[0]
  i5170.m_Frequency = i5171[1]
  i5170.m_Angle = i5171[2]
  return i5170
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i5172 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i5173 = data
  i5172.m_LowerTranslation = i5173[0]
  i5172.m_UpperTranslation = i5173[1]
  return i5172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i5174 = root || new pc.UnityMaterial()
  var i5175 = data
  i5174.name = i5175[0]
  request.r(i5175[1], i5175[2], 0, i5174, 'shader')
  i5174.renderQueue = i5175[3]
  i5174.enableInstancing = !!i5175[4]
  var i5177 = i5175[5]
  var i5176 = []
  for(var i = 0; i < i5177.length; i += 1) {
    i5176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i5177[i + 0]) );
  }
  i5174.floatParameters = i5176
  var i5179 = i5175[6]
  var i5178 = []
  for(var i = 0; i < i5179.length; i += 1) {
    i5178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i5179[i + 0]) );
  }
  i5174.colorParameters = i5178
  var i5181 = i5175[7]
  var i5180 = []
  for(var i = 0; i < i5181.length; i += 1) {
    i5180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i5181[i + 0]) );
  }
  i5174.vectorParameters = i5180
  var i5183 = i5175[8]
  var i5182 = []
  for(var i = 0; i < i5183.length; i += 1) {
    i5182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i5183[i + 0]) );
  }
  i5174.textureParameters = i5182
  var i5185 = i5175[9]
  var i5184 = []
  for(var i = 0; i < i5185.length; i += 1) {
    i5184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i5185[i + 0]) );
  }
  i5174.materialFlags = i5184
  return i5174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i5188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i5189 = data
  i5188.name = i5189[0]
  i5188.value = i5189[1]
  return i5188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i5192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i5193 = data
  i5192.name = i5193[0]
  i5192.value = new pc.Color(i5193[1], i5193[2], i5193[3], i5193[4])
  return i5192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i5196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i5197 = data
  i5196.name = i5197[0]
  i5196.value = new pc.Vec4( i5197[1], i5197[2], i5197[3], i5197[4] )
  return i5196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i5200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i5201 = data
  i5200.name = i5201[0]
  request.r(i5201[1], i5201[2], 0, i5200, 'value')
  return i5200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i5204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i5205 = data
  i5204.name = i5205[0]
  i5204.enabled = !!i5205[1]
  return i5204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i5206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i5207 = data
  i5206.name = i5207[0]
  i5206.width = i5207[1]
  i5206.height = i5207[2]
  i5206.mipmapCount = i5207[3]
  i5206.anisoLevel = i5207[4]
  i5206.filterMode = i5207[5]
  i5206.hdr = !!i5207[6]
  i5206.format = i5207[7]
  i5206.wrapMode = i5207[8]
  i5206.alphaIsTransparency = !!i5207[9]
  i5206.alphaSource = i5207[10]
  i5206.graphicsFormat = i5207[11]
  i5206.sRGBTexture = !!i5207[12]
  i5206.desiredColorSpace = i5207[13]
  i5206.wrapU = i5207[14]
  i5206.wrapV = i5207[15]
  return i5206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i5208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i5209 = data
  i5208.name = i5209[0]
  i5208.halfPrecision = !!i5209[1]
  i5208.useSimplification = !!i5209[2]
  i5208.useUInt32IndexFormat = !!i5209[3]
  i5208.vertexCount = i5209[4]
  i5208.aabb = i5209[5]
  var i5211 = i5209[6]
  var i5210 = []
  for(var i = 0; i < i5211.length; i += 1) {
    i5210.push( !!i5211[i + 0] );
  }
  i5208.streams = i5210
  i5208.vertices = i5209[7]
  var i5213 = i5209[8]
  var i5212 = []
  for(var i = 0; i < i5213.length; i += 1) {
    i5212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i5213[i + 0]) );
  }
  i5208.subMeshes = i5212
  var i5215 = i5209[9]
  var i5214 = []
  for(var i = 0; i < i5215.length; i += 16) {
    i5214.push( new pc.Mat4().setData(i5215[i + 0], i5215[i + 1], i5215[i + 2], i5215[i + 3],  i5215[i + 4], i5215[i + 5], i5215[i + 6], i5215[i + 7],  i5215[i + 8], i5215[i + 9], i5215[i + 10], i5215[i + 11],  i5215[i + 12], i5215[i + 13], i5215[i + 14], i5215[i + 15]) );
  }
  i5208.bindposes = i5214
  var i5217 = i5209[10]
  var i5216 = []
  for(var i = 0; i < i5217.length; i += 1) {
    i5216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i5217[i + 0]) );
  }
  i5208.blendShapes = i5216
  return i5208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i5222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i5223 = data
  i5222.triangles = i5223[0]
  return i5222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i5228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i5229 = data
  i5228.name = i5229[0]
  var i5231 = i5229[1]
  var i5230 = []
  for(var i = 0; i < i5231.length; i += 1) {
    i5230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i5231[i + 0]) );
  }
  i5228.frames = i5230
  return i5228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i5232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i5233 = data
  i5232.position = new pc.Vec3( i5233[0], i5233[1], i5233[2] )
  i5232.scale = new pc.Vec3( i5233[3], i5233[4], i5233[5] )
  i5232.rotation = new pc.Quat(i5233[6], i5233[7], i5233[8], i5233[9])
  return i5232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i5234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i5235 = data
  i5234.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i5235[0], i5234.main)
  i5234.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i5235[1], i5234.colorBySpeed)
  i5234.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i5235[2], i5234.colorOverLifetime)
  i5234.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i5235[3], i5234.emission)
  i5234.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i5235[4], i5234.rotationBySpeed)
  i5234.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i5235[5], i5234.rotationOverLifetime)
  i5234.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i5235[6], i5234.shape)
  i5234.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i5235[7], i5234.sizeBySpeed)
  i5234.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i5235[8], i5234.sizeOverLifetime)
  i5234.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i5235[9], i5234.textureSheetAnimation)
  i5234.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i5235[10], i5234.velocityOverLifetime)
  i5234.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i5235[11], i5234.noise)
  i5234.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i5235[12], i5234.inheritVelocity)
  i5234.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i5235[13], i5234.forceOverLifetime)
  i5234.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i5235[14], i5234.limitVelocityOverLifetime)
  i5234.useAutoRandomSeed = !!i5235[15]
  i5234.randomSeed = i5235[16]
  return i5234
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i5236 = root || new pc.ParticleSystemMain()
  var i5237 = data
  i5236.duration = i5237[0]
  i5236.loop = !!i5237[1]
  i5236.prewarm = !!i5237[2]
  i5236.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5237[3], i5236.startDelay)
  i5236.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5237[4], i5236.startLifetime)
  i5236.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5237[5], i5236.startSpeed)
  i5236.startSize3D = !!i5237[6]
  i5236.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5237[7], i5236.startSizeX)
  i5236.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5237[8], i5236.startSizeY)
  i5236.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5237[9], i5236.startSizeZ)
  i5236.startRotation3D = !!i5237[10]
  i5236.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5237[11], i5236.startRotationX)
  i5236.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5237[12], i5236.startRotationY)
  i5236.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5237[13], i5236.startRotationZ)
  i5236.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5237[14], i5236.startColor)
  i5236.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5237[15], i5236.gravityModifier)
  i5236.simulationSpace = i5237[16]
  request.r(i5237[17], i5237[18], 0, i5236, 'customSimulationSpace')
  i5236.simulationSpeed = i5237[19]
  i5236.useUnscaledTime = !!i5237[20]
  i5236.scalingMode = i5237[21]
  i5236.playOnAwake = !!i5237[22]
  i5236.maxParticles = i5237[23]
  i5236.emitterVelocityMode = i5237[24]
  i5236.stopAction = i5237[25]
  return i5236
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i5238 = root || new pc.MinMaxCurve()
  var i5239 = data
  i5238.mode = i5239[0]
  i5238.curveMin = new pc.AnimationCurve( { keys_flow: i5239[1] } )
  i5238.curveMax = new pc.AnimationCurve( { keys_flow: i5239[2] } )
  i5238.curveMultiplier = i5239[3]
  i5238.constantMin = i5239[4]
  i5238.constantMax = i5239[5]
  return i5238
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i5240 = root || new pc.MinMaxGradient()
  var i5241 = data
  i5240.mode = i5241[0]
  i5240.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5241[1], i5240.gradientMin)
  i5240.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i5241[2], i5240.gradientMax)
  i5240.colorMin = new pc.Color(i5241[3], i5241[4], i5241[5], i5241[6])
  i5240.colorMax = new pc.Color(i5241[7], i5241[8], i5241[9], i5241[10])
  return i5240
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i5242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i5243 = data
  i5242.mode = i5243[0]
  var i5245 = i5243[1]
  var i5244 = []
  for(var i = 0; i < i5245.length; i += 1) {
    i5244.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i5245[i + 0]) );
  }
  i5242.colorKeys = i5244
  var i5247 = i5243[2]
  var i5246 = []
  for(var i = 0; i < i5247.length; i += 1) {
    i5246.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i5247[i + 0]) );
  }
  i5242.alphaKeys = i5246
  return i5242
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i5248 = root || new pc.ParticleSystemColorBySpeed()
  var i5249 = data
  i5248.enabled = !!i5249[0]
  i5248.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5249[1], i5248.color)
  i5248.range = new pc.Vec2( i5249[2], i5249[3] )
  return i5248
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i5252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i5253 = data
  i5252.color = new pc.Color(i5253[0], i5253[1], i5253[2], i5253[3])
  i5252.time = i5253[4]
  return i5252
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i5256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i5257 = data
  i5256.alpha = i5257[0]
  i5256.time = i5257[1]
  return i5256
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i5258 = root || new pc.ParticleSystemColorOverLifetime()
  var i5259 = data
  i5258.enabled = !!i5259[0]
  i5258.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i5259[1], i5258.color)
  return i5258
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i5260 = root || new pc.ParticleSystemEmitter()
  var i5261 = data
  i5260.enabled = !!i5261[0]
  i5260.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5261[1], i5260.rateOverTime)
  i5260.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5261[2], i5260.rateOverDistance)
  var i5263 = i5261[3]
  var i5262 = []
  for(var i = 0; i < i5263.length; i += 1) {
    i5262.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i5263[i + 0]) );
  }
  i5260.bursts = i5262
  return i5260
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i5266 = root || new pc.ParticleSystemBurst()
  var i5267 = data
  i5266.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5267[0], i5266.count)
  i5266.cycleCount = i5267[1]
  i5266.minCount = i5267[2]
  i5266.maxCount = i5267[3]
  i5266.repeatInterval = i5267[4]
  i5266.time = i5267[5]
  return i5266
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i5268 = root || new pc.ParticleSystemRotationBySpeed()
  var i5269 = data
  i5268.enabled = !!i5269[0]
  i5268.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5269[1], i5268.x)
  i5268.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5269[2], i5268.y)
  i5268.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5269[3], i5268.z)
  i5268.separateAxes = !!i5269[4]
  i5268.range = new pc.Vec2( i5269[5], i5269[6] )
  return i5268
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i5270 = root || new pc.ParticleSystemRotationOverLifetime()
  var i5271 = data
  i5270.enabled = !!i5271[0]
  i5270.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5271[1], i5270.x)
  i5270.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5271[2], i5270.y)
  i5270.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5271[3], i5270.z)
  i5270.separateAxes = !!i5271[4]
  return i5270
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i5272 = root || new pc.ParticleSystemShape()
  var i5273 = data
  i5272.enabled = !!i5273[0]
  i5272.shapeType = i5273[1]
  i5272.randomDirectionAmount = i5273[2]
  i5272.sphericalDirectionAmount = i5273[3]
  i5272.randomPositionAmount = i5273[4]
  i5272.alignToDirection = !!i5273[5]
  i5272.radius = i5273[6]
  i5272.radiusMode = i5273[7]
  i5272.radiusSpread = i5273[8]
  i5272.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5273[9], i5272.radiusSpeed)
  i5272.radiusThickness = i5273[10]
  i5272.angle = i5273[11]
  i5272.length = i5273[12]
  i5272.boxThickness = new pc.Vec3( i5273[13], i5273[14], i5273[15] )
  i5272.meshShapeType = i5273[16]
  request.r(i5273[17], i5273[18], 0, i5272, 'mesh')
  request.r(i5273[19], i5273[20], 0, i5272, 'meshRenderer')
  request.r(i5273[21], i5273[22], 0, i5272, 'skinnedMeshRenderer')
  i5272.useMeshMaterialIndex = !!i5273[23]
  i5272.meshMaterialIndex = i5273[24]
  i5272.useMeshColors = !!i5273[25]
  i5272.normalOffset = i5273[26]
  i5272.arc = i5273[27]
  i5272.arcMode = i5273[28]
  i5272.arcSpread = i5273[29]
  i5272.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5273[30], i5272.arcSpeed)
  i5272.donutRadius = i5273[31]
  i5272.position = new pc.Vec3( i5273[32], i5273[33], i5273[34] )
  i5272.rotation = new pc.Vec3( i5273[35], i5273[36], i5273[37] )
  i5272.scale = new pc.Vec3( i5273[38], i5273[39], i5273[40] )
  return i5272
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i5274 = root || new pc.ParticleSystemSizeBySpeed()
  var i5275 = data
  i5274.enabled = !!i5275[0]
  i5274.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5275[1], i5274.x)
  i5274.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5275[2], i5274.y)
  i5274.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5275[3], i5274.z)
  i5274.separateAxes = !!i5275[4]
  i5274.range = new pc.Vec2( i5275[5], i5275[6] )
  return i5274
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i5276 = root || new pc.ParticleSystemSizeOverLifetime()
  var i5277 = data
  i5276.enabled = !!i5277[0]
  i5276.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5277[1], i5276.x)
  i5276.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5277[2], i5276.y)
  i5276.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5277[3], i5276.z)
  i5276.separateAxes = !!i5277[4]
  return i5276
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i5278 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i5279 = data
  i5278.enabled = !!i5279[0]
  i5278.mode = i5279[1]
  i5278.animation = i5279[2]
  i5278.numTilesX = i5279[3]
  i5278.numTilesY = i5279[4]
  i5278.useRandomRow = !!i5279[5]
  i5278.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5279[6], i5278.frameOverTime)
  i5278.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5279[7], i5278.startFrame)
  i5278.cycleCount = i5279[8]
  i5278.rowIndex = i5279[9]
  i5278.flipU = i5279[10]
  i5278.flipV = i5279[11]
  i5278.spriteCount = i5279[12]
  var i5281 = i5279[13]
  var i5280 = []
  for(var i = 0; i < i5281.length; i += 2) {
  request.r(i5281[i + 0], i5281[i + 1], 2, i5280, '')
  }
  i5278.sprites = i5280
  return i5278
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i5284 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i5285 = data
  i5284.enabled = !!i5285[0]
  i5284.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5285[1], i5284.x)
  i5284.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5285[2], i5284.y)
  i5284.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5285[3], i5284.z)
  i5284.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5285[4], i5284.radial)
  i5284.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5285[5], i5284.speedModifier)
  i5284.space = i5285[6]
  i5284.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5285[7], i5284.orbitalX)
  i5284.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5285[8], i5284.orbitalY)
  i5284.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5285[9], i5284.orbitalZ)
  i5284.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5285[10], i5284.orbitalOffsetX)
  i5284.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5285[11], i5284.orbitalOffsetY)
  i5284.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5285[12], i5284.orbitalOffsetZ)
  return i5284
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i5286 = root || new pc.ParticleSystemNoise()
  var i5287 = data
  i5286.enabled = !!i5287[0]
  i5286.separateAxes = !!i5287[1]
  i5286.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5287[2], i5286.strengthX)
  i5286.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5287[3], i5286.strengthY)
  i5286.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5287[4], i5286.strengthZ)
  i5286.frequency = i5287[5]
  i5286.damping = !!i5287[6]
  i5286.octaveCount = i5287[7]
  i5286.octaveMultiplier = i5287[8]
  i5286.octaveScale = i5287[9]
  i5286.quality = i5287[10]
  i5286.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5287[11], i5286.scrollSpeed)
  i5286.scrollSpeedMultiplier = i5287[12]
  i5286.remapEnabled = !!i5287[13]
  i5286.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5287[14], i5286.remapX)
  i5286.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5287[15], i5286.remapY)
  i5286.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5287[16], i5286.remapZ)
  i5286.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5287[17], i5286.positionAmount)
  i5286.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5287[18], i5286.rotationAmount)
  i5286.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5287[19], i5286.sizeAmount)
  return i5286
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i5288 = root || new pc.ParticleSystemInheritVelocity()
  var i5289 = data
  i5288.enabled = !!i5289[0]
  i5288.mode = i5289[1]
  i5288.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5289[2], i5288.curve)
  return i5288
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i5290 = root || new pc.ParticleSystemForceOverLifetime()
  var i5291 = data
  i5290.enabled = !!i5291[0]
  i5290.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5291[1], i5290.x)
  i5290.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5291[2], i5290.y)
  i5290.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5291[3], i5290.z)
  i5290.space = i5291[4]
  i5290.randomized = !!i5291[5]
  return i5290
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i5292 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i5293 = data
  i5292.enabled = !!i5293[0]
  i5292.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5293[1], i5292.limit)
  i5292.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5293[2], i5292.limitX)
  i5292.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5293[3], i5292.limitY)
  i5292.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5293[4], i5292.limitZ)
  i5292.dampen = i5293[5]
  i5292.separateAxes = !!i5293[6]
  i5292.space = i5293[7]
  i5292.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i5293[8], i5292.drag)
  i5292.multiplyDragByParticleSize = !!i5293[9]
  i5292.multiplyDragByParticleVelocity = !!i5293[10]
  return i5292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i5294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i5295 = data
  request.r(i5295[0], i5295[1], 0, i5294, 'mesh')
  i5294.meshCount = i5295[2]
  i5294.activeVertexStreamsCount = i5295[3]
  i5294.alignment = i5295[4]
  i5294.renderMode = i5295[5]
  i5294.sortMode = i5295[6]
  i5294.lengthScale = i5295[7]
  i5294.velocityScale = i5295[8]
  i5294.cameraVelocityScale = i5295[9]
  i5294.normalDirection = i5295[10]
  i5294.sortingFudge = i5295[11]
  i5294.minParticleSize = i5295[12]
  i5294.maxParticleSize = i5295[13]
  i5294.pivot = new pc.Vec3( i5295[14], i5295[15], i5295[16] )
  request.r(i5295[17], i5295[18], 0, i5294, 'trailMaterial')
  i5294.applyActiveColorSpace = !!i5295[19]
  i5294.enabled = !!i5295[20]
  request.r(i5295[21], i5295[22], 0, i5294, 'sharedMaterial')
  var i5297 = i5295[23]
  var i5296 = []
  for(var i = 0; i < i5297.length; i += 2) {
  request.r(i5297[i + 0], i5297[i + 1], 2, i5296, '')
  }
  i5294.sharedMaterials = i5296
  i5294.receiveShadows = !!i5295[24]
  i5294.shadowCastingMode = i5295[25]
  i5294.sortingLayerID = i5295[26]
  i5294.sortingOrder = i5295[27]
  i5294.lightmapIndex = i5295[28]
  i5294.lightmapSceneIndex = i5295[29]
  i5294.lightmapScaleOffset = new pc.Vec4( i5295[30], i5295[31], i5295[32], i5295[33] )
  i5294.lightProbeUsage = i5295[34]
  i5294.reflectionProbeUsage = i5295[35]
  return i5294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i5300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i5301 = data
  i5300.name = i5301[0]
  i5300.tagId = i5301[1]
  i5300.enabled = !!i5301[2]
  i5300.isStatic = !!i5301[3]
  i5300.layer = i5301[4]
  return i5300
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i5302 = root || request.c( 'MenuLevel' )
  var i5303 = data
  request.r(i5303[0], i5303[1], 0, i5302, 'menuLevelBtnUpdate')
  var i5305 = i5303[2]
  var i5304 = []
  for(var i = 0; i < i5305.length; i += 1) {
    i5304.push( request.d('MenuLevelData', i5305[i + 0]) );
  }
  i5302.AllSteps = i5304
  request.r(i5303[3], i5303[4], 0, i5302, 'buttonparent')
  var i5307 = i5303[5]
  var i5306 = []
  for(var i = 0; i < i5307.length; i += 2) {
  request.r(i5307[i + 0], i5307[i + 1], 2, i5306, '')
  }
  i5302.BtnsDotweenAnims = i5306
  var i5309 = i5303[6]
  var i5308 = []
  for(var i = 0; i < i5309.length; i += 2) {
  request.r(i5309[i + 0], i5309[i + 1], 2, i5308, '')
  }
  i5302.BtnsCols = i5308
  request.r(i5303[7], i5303[8], 0, i5302, 'mainGameView')
  request.r(i5303[9], i5303[10], 0, i5302, 'Storyboard')
  request.r(i5303[11], i5303[12], 0, i5302, 'BgMusic')
  request.r(i5303[13], i5303[14], 0, i5302, 'BgStoryMusic')
  request.r(i5303[15], i5303[16], 0, i5302, 'Hand_Tut1')
  request.r(i5303[17], i5303[18], 0, i5302, 'Button_Hand')
  var i5311 = i5303[19]
  var i5310 = []
  for(var i = 0; i < i5311.length; i += 2) {
  request.r(i5311[i + 0], i5311[i + 1], 2, i5310, '')
  }
  i5302.itemEnable_Onstart = i5310
  var i5313 = i5303[20]
  var i5312 = []
  for(var i = 0; i < i5313.length; i += 2) {
  request.r(i5313[i + 0], i5313[i + 1], 2, i5312, '')
  }
  i5302.itemDisable_Onstart = i5312
  var i5315 = i5303[21]
  var i5314 = []
  for(var i = 0; i < i5315.length; i += 2) {
  request.r(i5315[i + 0], i5315[i + 1], 2, i5314, '')
  }
  i5302.itemEnable_Oncomplete = i5314
  var i5317 = i5303[22]
  var i5316 = []
  for(var i = 0; i < i5317.length; i += 2) {
  request.r(i5317[i + 0], i5317[i + 1], 2, i5316, '')
  }
  i5302.itemDisable_Oncomplete = i5316
  i5302.levelKey = i5303[23]
  i5302.revealDirtyHoldTime = i5303[24]
  return i5302
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i5320 = root || request.c( 'MenuLevelData' )
  var i5321 = data
  i5320.Name = i5321[0]
  request.r(i5321[1], i5321[2], 0, i5320, 'UiBtn')
  request.r(i5321[3], i5321[4], 0, i5320, 'TickBtn')
  request.r(i5321[5], i5321[6], 0, i5320, 'ExclamationIcon')
  var i5323 = i5321[7]
  var i5322 = []
  for(var i = 0; i < i5323.length; i += 2) {
  request.r(i5323[i + 0], i5323[i + 1], 2, i5322, '')
  }
  i5320.Item_Dirty = i5322
  var i5325 = i5321[8]
  var i5324 = []
  for(var i = 0; i < i5325.length; i += 2) {
  request.r(i5325[i + 0], i5325[i + 1], 2, i5324, '')
  }
  i5320.Item_Clean = i5324
  request.r(i5321[9], i5321[10], 0, i5320, 'CompleteParticle')
  return i5320
}

Deserializers["IntroLevelAnim"] = function (request, data, root) {
  var i5332 = root || request.c( 'IntroLevelAnim' )
  var i5333 = data
  request.r(i5333[0], i5333[1], 0, i5332, 'menuLevel')
  i5332.lvlkey = i5333[2]
  request.r(i5333[3], i5333[4], 0, i5332, 'DressChangeObj')
  request.r(i5333[5], i5333[6], 0, i5332, 'DressChangeClip')
  return i5332
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i5334 = root || request.c( 'Level_PoseController' )
  var i5335 = data
  var i5337 = i5335[0]
  var i5336 = []
  for(var i = 0; i < i5337.length; i += 2) {
  request.r(i5337[i + 0], i5337[i + 1], 2, i5336, '')
  }
  i5334.itemToShow = i5336
  var i5339 = i5335[1]
  var i5338 = []
  for(var i = 0; i < i5339.length; i += 2) {
  request.r(i5339[i + 0], i5339[i + 1], 2, i5338, '')
  }
  i5334.itemToHide = i5338
  i5334.stepTarget = i5335[2]
  return i5334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i5340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i5341 = data
  i5340.color = new pc.Color(i5341[0], i5341[1], i5341[2], i5341[3])
  request.r(i5341[4], i5341[5], 0, i5340, 'sprite')
  i5340.flipX = !!i5341[6]
  i5340.flipY = !!i5341[7]
  i5340.drawMode = i5341[8]
  i5340.size = new pc.Vec2( i5341[9], i5341[10] )
  i5340.tileMode = i5341[11]
  i5340.adaptiveModeThreshold = i5341[12]
  i5340.maskInteraction = i5341[13]
  i5340.spriteSortPoint = i5341[14]
  i5340.enabled = !!i5341[15]
  request.r(i5341[16], i5341[17], 0, i5340, 'sharedMaterial')
  var i5343 = i5341[18]
  var i5342 = []
  for(var i = 0; i < i5343.length; i += 2) {
  request.r(i5343[i + 0], i5343[i + 1], 2, i5342, '')
  }
  i5340.sharedMaterials = i5342
  i5340.receiveShadows = !!i5341[19]
  i5340.shadowCastingMode = i5341[20]
  i5340.sortingLayerID = i5341[21]
  i5340.sortingOrder = i5341[22]
  i5340.lightmapIndex = i5341[23]
  i5340.lightmapSceneIndex = i5341[24]
  i5340.lightmapScaleOffset = new pc.Vec4( i5341[25], i5341[26], i5341[27], i5341[28] )
  i5340.lightProbeUsage = i5341[29]
  i5340.reflectionProbeUsage = i5341[30]
  return i5340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i5344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i5345 = data
  request.r(i5345[0], i5345[1], 0, i5344, 'animatorController')
  request.r(i5345[2], i5345[3], 0, i5344, 'avatar')
  i5344.updateMode = i5345[4]
  i5344.hasTransformHierarchy = !!i5345[5]
  i5344.applyRootMotion = !!i5345[6]
  var i5347 = i5345[7]
  var i5346 = []
  for(var i = 0; i < i5347.length; i += 2) {
  request.r(i5347[i + 0], i5347[i + 1], 2, i5346, '')
  }
  i5344.humanBones = i5346
  i5344.enabled = !!i5345[8]
  return i5344
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i5350 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i5351 = data
  request.r(i5351[0], i5351[1], 0, i5350, 'm_RootBone')
  var i5353 = i5351[2]
  var i5352 = []
  for(var i = 0; i < i5353.length; i += 2) {
  request.r(i5353[i + 0], i5353[i + 1], 2, i5352, '')
  }
  i5350.m_BoneTransforms = i5352
  i5350.m_AlwaysUpdate = !!i5351[3]
  i5350.m_AutoRebind = !!i5351[4]
  return i5350
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i5354 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i5355 = data
  i5354.targetIsSelf = !!i5355[0]
  request.r(i5355[1], i5355[2], 0, i5354, 'targetGO')
  i5354.tweenTargetIsTargetGO = !!i5355[3]
  i5354.delay = i5355[4]
  i5354.duration = i5355[5]
  i5354.easeType = i5355[6]
  i5354.easeCurve = new pc.AnimationCurve( { keys_flow: i5355[7] } )
  i5354.loopType = i5355[8]
  i5354.loops = i5355[9]
  i5354.id = i5355[10]
  i5354.isRelative = !!i5355[11]
  i5354.isFrom = !!i5355[12]
  i5354.isIndependentUpdate = !!i5355[13]
  i5354.autoKill = !!i5355[14]
  i5354.autoGenerate = !!i5355[15]
  i5354.isActive = !!i5355[16]
  i5354.isValid = !!i5355[17]
  request.r(i5355[18], i5355[19], 0, i5354, 'target')
  i5354.animationType = i5355[20]
  i5354.targetType = i5355[21]
  i5354.forcedTargetType = i5355[22]
  i5354.autoPlay = !!i5355[23]
  i5354.useTargetAsV3 = !!i5355[24]
  i5354.endValueFloat = i5355[25]
  i5354.endValueV3 = new pc.Vec3( i5355[26], i5355[27], i5355[28] )
  i5354.endValueV2 = new pc.Vec2( i5355[29], i5355[30] )
  i5354.endValueColor = new pc.Color(i5355[31], i5355[32], i5355[33], i5355[34])
  i5354.endValueString = i5355[35]
  i5354.endValueRect = UnityEngine.Rect.MinMaxRect(i5355[36], i5355[37], i5355[38], i5355[39])
  request.r(i5355[40], i5355[41], 0, i5354, 'endValueTransform')
  i5354.optionalBool0 = !!i5355[42]
  i5354.optionalBool1 = !!i5355[43]
  i5354.optionalFloat0 = i5355[44]
  i5354.optionalInt0 = i5355[45]
  i5354.optionalRotationMode = i5355[46]
  i5354.optionalScrambleMode = i5355[47]
  i5354.optionalShakeRandomnessMode = i5355[48]
  i5354.optionalString = i5355[49]
  i5354.updateType = i5355[50]
  i5354.isSpeedBased = !!i5355[51]
  i5354.hasOnStart = !!i5355[52]
  i5354.hasOnPlay = !!i5355[53]
  i5354.hasOnUpdate = !!i5355[54]
  i5354.hasOnStepComplete = !!i5355[55]
  i5354.hasOnComplete = !!i5355[56]
  i5354.hasOnTweenCreated = !!i5355[57]
  i5354.hasOnRewind = !!i5355[58]
  i5354.onStart = request.d('UnityEngine.Events.UnityEvent', i5355[59], i5354.onStart)
  i5354.onPlay = request.d('UnityEngine.Events.UnityEvent', i5355[60], i5354.onPlay)
  i5354.onUpdate = request.d('UnityEngine.Events.UnityEvent', i5355[61], i5354.onUpdate)
  i5354.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i5355[62], i5354.onStepComplete)
  i5354.onComplete = request.d('UnityEngine.Events.UnityEvent', i5355[63], i5354.onComplete)
  i5354.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i5355[64], i5354.onTweenCreated)
  i5354.onRewind = request.d('UnityEngine.Events.UnityEvent', i5355[65], i5354.onRewind)
  return i5354
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i5356 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i5357 = data
  i5356.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5357[0], i5356.m_PersistentCalls)
  return i5356
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i5358 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i5359 = data
  var i5361 = i5359[0]
  var i5360 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i5361.length; i += 1) {
    i5360.add(request.d('UnityEngine.Events.PersistentCall', i5361[i + 0]));
  }
  i5358.m_Calls = i5360
  return i5358
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i5364 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i5365 = data
  request.r(i5365[0], i5365[1], 0, i5364, 'm_Target')
  i5364.m_TargetAssemblyTypeName = i5365[2]
  i5364.m_MethodName = i5365[3]
  i5364.m_Mode = i5365[4]
  i5364.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i5365[5], i5364.m_Arguments)
  i5364.m_CallState = i5365[6]
  return i5364
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i5366 = root || request.c( 'BD_AnimationHelper' )
  var i5367 = data
  i5366.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i5367[0], i5366.OnAnimationComplete)
  request.r(i5367[1], i5367[2], 0, i5366, 'sfxClip')
  return i5366
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5368 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5369 = data
  request.r(i5369[0], i5369[1], 0, i5368, 'm_ObjectArgument')
  i5368.m_ObjectArgumentAssemblyTypeName = i5369[2]
  i5368.m_IntArgument = i5369[3]
  i5368.m_FloatArgument = i5369[4]
  i5368.m_StringArgument = i5369[5]
  i5368.m_BoolArgument = !!i5369[6]
  return i5368
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i5370 = root || request.c( 'SpriteButton' )
  var i5371 = data
  i5370.isLocked = !!i5371[0]
  i5370.lockMsg = i5371[1]
  i5370.onClick = request.d('UnityEngine.Events.UnityEvent', i5371[2], i5370.onClick)
  i5370.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i5371[3], i5370.onLockedClick)
  i5370.isLevelBtnSfx = !!i5371[4]
  request.r(i5371[5], i5371[6], 0, i5370, 'pivot')
  i5370.reductionChange = i5371[7]
  i5370.animationDuration = i5371[8]
  return i5370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i5372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i5373 = data
  i5372.usedByComposite = !!i5373[0]
  i5372.autoTiling = !!i5373[1]
  i5372.size = new pc.Vec2( i5373[2], i5373[3] )
  i5372.edgeRadius = i5373[4]
  i5372.enabled = !!i5373[5]
  i5372.isTrigger = !!i5373[6]
  i5372.usedByEffector = !!i5373[7]
  i5372.density = i5373[8]
  i5372.offset = new pc.Vec2( i5373[9], i5373[10] )
  request.r(i5373[11], i5373[12], 0, i5372, 'material')
  return i5372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i5374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i5375 = data
  var i5377 = i5375[0]
  var i5376 = []
  for(var i = 0; i < i5377.length; i += 3) {
    i5376.push( new pc.Vec3( i5377[i + 0], i5377[i + 1], i5377[i + 2] ) );
  }
  i5374.positions = i5376
  i5374.positionCount = i5375[1]
  i5374.time = i5375[2]
  i5374.startWidth = i5375[3]
  i5374.endWidth = i5375[4]
  i5374.widthMultiplier = i5375[5]
  i5374.autodestruct = !!i5375[6]
  i5374.emitting = !!i5375[7]
  i5374.numCornerVertices = i5375[8]
  i5374.numCapVertices = i5375[9]
  i5374.minVertexDistance = i5375[10]
  i5374.colorGradient = i5375[11] ? new pc.ColorGradient(i5375[11][0], i5375[11][1], i5375[11][2]) : null
  i5374.startColor = new pc.Color(i5375[12], i5375[13], i5375[14], i5375[15])
  i5374.endColor = new pc.Color(i5375[16], i5375[17], i5375[18], i5375[19])
  i5374.generateLightingData = !!i5375[20]
  i5374.textureMode = i5375[21]
  i5374.alignment = i5375[22]
  i5374.widthCurve = new pc.AnimationCurve( { keys_flow: i5375[23] } )
  i5374.enabled = !!i5375[24]
  request.r(i5375[25], i5375[26], 0, i5374, 'sharedMaterial')
  var i5379 = i5375[27]
  var i5378 = []
  for(var i = 0; i < i5379.length; i += 2) {
  request.r(i5379[i + 0], i5379[i + 1], 2, i5378, '')
  }
  i5374.sharedMaterials = i5378
  i5374.receiveShadows = !!i5375[28]
  i5374.shadowCastingMode = i5375[29]
  i5374.sortingLayerID = i5375[30]
  i5374.sortingOrder = i5375[31]
  i5374.lightmapIndex = i5375[32]
  i5374.lightmapSceneIndex = i5375[33]
  i5374.lightmapScaleOffset = new pc.Vec4( i5375[34], i5375[35], i5375[36], i5375[37] )
  i5374.lightProbeUsage = i5375[38]
  i5374.reflectionProbeUsage = i5375[39]
  return i5374
}

Deserializers["Level1_Face_Playable"] = function (request, data, root) {
  var i5382 = root || request.c( 'Level1_Face_Playable' )
  var i5383 = data
  i5382.MainZoom = request.d('ZoomPos', i5383[0], i5382.MainZoom)
  request.r(i5383[1], i5383[2], 0, i5382, 'ToolHolder')
  request.r(i5383[3], i5383[4], 0, i5382, 'Tray')
  var i5385 = i5383[5]
  var i5384 = []
  for(var i = 0; i < i5385.length; i += 2) {
  request.r(i5385[i + 0], i5385[i + 1], 2, i5384, '')
  }
  i5382.FaceBones = i5384
  request.r(i5383[6], i5383[7], 0, i5382, 'CurrentEye')
  var i5387 = i5383[8]
  var i5386 = []
  for(var i = 0; i < i5387.length; i += 2) {
  request.r(i5387[i + 0], i5387[i + 1], 2, i5386, '')
  }
  i5382.EyeSRs = i5386
  var i5389 = i5383[9]
  var i5388 = []
  for(var i = 0; i < i5389.length; i += 2) {
  request.r(i5389[i + 0], i5389[i + 1], 2, i5388, '')
  }
  i5382.EyeAnims = i5388
  var i5391 = i5383[10]
  var i5390 = []
  for(var i = 0; i < i5391.length; i += 2) {
  request.r(i5391[i + 0], i5391[i + 1], 2, i5390, '')
  }
  i5382.BreathingAnim = i5390
  request.r(i5383[11], i5383[12], 0, i5382, 'brushRubingAudio')
  request.r(i5383[13], i5383[14], 0, i5382, 'brushRubingAudio2')
  i5382.ZoomStep1 = request.d('ZoomPos', i5383[15], i5382.ZoomStep1)
  i5382.ZoomStep1B = request.d('ZoomPos', i5383[16], i5382.ZoomStep1B)
  request.r(i5383[17], i5383[18], 0, i5382, 'Tool1Holder')
  request.r(i5383[19], i5383[20], 0, i5382, 'ToolStep1')
  request.r(i5383[21], i5383[22], 0, i5382, 'ToolStep1CameraFollow')
  request.r(i5383[23], i5383[24], 0, i5382, 'ToolStep1ToolRotate')
  request.r(i5383[25], i5383[26], 0, i5382, 'Holder1')
  request.r(i5383[27], i5383[28], 0, i5382, 'Holder2')
  request.r(i5383[29], i5383[30], 0, i5382, 'Wipe')
  request.r(i5383[31], i5383[32], 0, i5382, 'WipeStart')
  request.r(i5383[33], i5383[34], 0, i5382, 'WipeTarget')
  request.r(i5383[35], i5383[36], 0, i5382, 'BottleAnimator')
  request.r(i5383[37], i5383[38], 0, i5382, 'RemoverBodySR')
  request.r(i5383[39], i5383[40], 0, i5382, 'RemoverBodySprite1')
  request.r(i5383[41], i5383[42], 0, i5382, 'RemoverBodySprite2')
  request.r(i5383[43], i5383[44], 0, i5382, 'HandAnim1')
  request.r(i5383[45], i5383[46], 0, i5382, 'Tap1')
  request.r(i5383[47], i5383[48], 0, i5382, 'DropOnWipe_1')
  request.r(i5383[49], i5383[50], 0, i5382, 'SpreadOnWipe_1')
  request.r(i5383[51], i5383[52], 0, i5382, 'Makeup_1')
  request.r(i5383[53], i5383[54], 0, i5382, 'Eyes_1')
  request.r(i5383[55], i5383[56], 0, i5382, 'makeupRemoverSfx')
  i5382.ZoomStep2 = request.d('ZoomPos', i5383[57], i5382.ZoomStep2)
  i5382.ZoomStep2B = request.d('ZoomPos', i5383[58], i5382.ZoomStep2B)
  request.r(i5383[59], i5383[60], 0, i5382, 'Tool2Holder')
  request.r(i5383[61], i5383[62], 0, i5382, 'CapAnimator_2')
  request.r(i5383[63], i5383[64], 0, i5382, 'ToolStep2')
  request.r(i5383[65], i5383[66], 0, i5382, 'camFollowStep2')
  var i5393 = i5383[67]
  var i5392 = []
  for(var i = 0; i < i5393.length; i += 2) {
  request.r(i5393[i + 0], i5393[i + 1], 2, i5392, '')
  }
  i5382.ToolStep2Indications = i5392
  var i5395 = i5383[68]
  var i5394 = []
  for(var i = 0; i < i5395.length; i += 2) {
  request.r(i5395[i + 0], i5395[i + 1], 2, i5394, '')
  }
  i5382.Primers2 = i5394
  request.r(i5383[69], i5383[70], 0, i5382, 'primerOpenSfx')
  i5382.ZoomStep3 = request.d('ZoomPos', i5383[71], i5382.ZoomStep3)
  request.r(i5383[72], i5383[73], 0, i5382, 'Tip3')
  request.r(i5383[74], i5383[75], 0, i5382, 'ToolStep3')
  request.r(i5383[76], i5383[77], 0, i5382, 'ToolStep3CameraFollow')
  request.r(i5383[78], i5383[79], 0, i5382, 'HandAnim3')
  var i5397 = i5383[80]
  var i5396 = []
  for(var i = 0; i < i5397.length; i += 2) {
  request.r(i5397[i + 0], i5397[i + 1], 2, i5396, '')
  }
  i5382.Primers_3 = i5396
  request.r(i5383[81], i5383[82], 0, i5382, 'PrimerSpread')
  request.r(i5383[83], i5383[84], 0, i5382, 'PrimerAbsorb')
  i5382.ZoomStep4 = request.d('ZoomPos', i5383[85], i5382.ZoomStep4)
  i5382.ZoomStep4B = request.d('ZoomPos', i5383[86], i5382.ZoomStep4B)
  request.r(i5383[87], i5383[88], 0, i5382, 'Tool4Holder')
  request.r(i5383[89], i5383[90], 0, i5382, 'CapAnimator_4')
  request.r(i5383[91], i5383[92], 0, i5382, 'ToolStep4')
  request.r(i5383[93], i5383[94], 0, i5382, 'camFollowStep4')
  request.r(i5383[95], i5383[96], 0, i5382, 'ToolStep4Shadow')
  var i5399 = i5383[97]
  var i5398 = []
  for(var i = 0; i < i5399.length; i += 2) {
  request.r(i5399[i + 0], i5399[i + 1], 2, i5398, '')
  }
  i5382.ToolStep4Indications = i5398
  var i5401 = i5383[98]
  var i5400 = []
  for(var i = 0; i < i5401.length; i += 2) {
  request.r(i5401[i + 0], i5401[i + 1], 2, i5400, '')
  }
  i5382.Bases_4 = i5400
  request.r(i5383[99], i5383[100], 0, i5382, 'baseOpenSfx')
  i5382.ZoomStep5 = request.d('ZoomPos', i5383[101], i5382.ZoomStep5)
  request.r(i5383[102], i5383[103], 0, i5382, 'Tool5Holder')
  request.r(i5383[104], i5383[105], 0, i5382, 'Tip5')
  request.r(i5383[106], i5383[107], 0, i5382, 'ToolStep5')
  request.r(i5383[108], i5383[109], 0, i5382, 'ToolStep5CameraFollow')
  request.r(i5383[110], i5383[111], 0, i5382, 'ToolStep5ToolRotate')
  request.r(i5383[112], i5383[113], 0, i5382, 'Tool5Simple')
  request.r(i5383[114], i5383[115], 0, i5382, 'Tool5Picked')
  var i5403 = i5383[116]
  var i5402 = []
  for(var i = 0; i < i5403.length; i += 2) {
  request.r(i5403[i + 0], i5403[i + 1], 2, i5402, '')
  }
  i5382.SRsToFade_5 = i5402
  request.r(i5383[117], i5383[118], 0, i5382, 'BaseSpread_5')
  i5382.ZoomStep6 = request.d('ZoomPos', i5383[119], i5382.ZoomStep6)
  i5382.ZoomStep6B = request.d('ZoomPos', i5383[120], i5382.ZoomStep6B)
  request.r(i5383[121], i5383[122], 0, i5382, 'Tap6')
  request.r(i5383[123], i5383[124], 0, i5382, 'Tool6Holder')
  request.r(i5383[125], i5383[126], 0, i5382, 'ToolStep6')
  var i5405 = i5383[127]
  var i5404 = []
  for(var i = 0; i < i5405.length; i += 2) {
  request.r(i5405[i + 0], i5405[i + 1], 2, i5404, '')
  }
  i5382.ToolStep6Targets = i5404
  request.r(i5383[128], i5383[129], 0, i5382, 'ToolStep6BrushSR')
  request.r(i5383[130], i5383[131], 0, i5382, 'ToolStep6CameraFollow')
  request.r(i5383[132], i5383[133], 0, i5382, 'ToolStep6ToolRotate')
  request.r(i5383[134], i5383[135], 0, i5382, 'HandAnim6')
  request.r(i5383[136], i5383[137], 0, i5382, 'Particles_6')
  request.r(i5383[138], i5383[139], 0, i5382, 'ObjOpen_6')
  request.r(i5383[140], i5383[141], 0, i5382, 'ObjClose_6')
  request.r(i5383[142], i5383[143], 0, i5382, 'EyeShade_6')
  var i5407 = i5383[144]
  var i5406 = []
  for(var i = 0; i < i5407.length; i += 2) {
  request.r(i5407[i + 0], i5407[i + 1], 2, i5406, '')
  }
  i5382.ObjOnHold_6 = i5406
  request.r(i5383[145], i5383[146], 0, i5382, 'EyeColor_6')
  request.r(i5383[147], i5383[148], 0, i5382, 'EyeShadeForOpen_6')
  request.r(i5383[149], i5383[150], 0, i5382, 'EyeShadeOpenSfx')
  i5382.ZoomStep7 = request.d('ZoomPos', i5383[151], i5382.ZoomStep7)
  i5382.ZoomStep7B = request.d('ZoomPos', i5383[152], i5382.ZoomStep7B)
  i5382.ZoomStep7C = request.d('ZoomPos', i5383[153], i5382.ZoomStep7C)
  request.r(i5383[154], i5383[155], 0, i5382, 'Tool7Holder')
  request.r(i5383[156], i5383[157], 0, i5382, 'Tap7')
  request.r(i5383[158], i5383[159], 0, i5382, 'ToolStep7')
  request.r(i5383[160], i5383[161], 0, i5382, 'ToolStep7Actual')
  request.r(i5383[162], i5383[163], 0, i5382, 'ToolStep7Actualb')
  request.r(i5383[164], i5383[165], 0, i5382, 'step7ScratchCard')
  request.r(i5383[166], i5383[167], 0, i5382, 'step7ScratchTip')
  request.r(i5383[168], i5383[169], 0, i5382, 'step7Indication')
  request.r(i5383[170], i5383[171], 0, i5382, 'step7AnimObj')
  request.r(i5383[172], i5383[173], 0, i5382, 'step7AnimObj2')
  request.r(i5383[174], i5383[175], 0, i5382, 'ToolStep7CameraFollow')
  request.r(i5383[176], i5383[177], 0, i5382, 'ToolStep7ToolRotate')
  request.r(i5383[178], i5383[179], 0, i5382, 'ToolStep7Progress')
  request.r(i5383[180], i5383[181], 0, i5382, 'ToolStep7SR')
  var i5409 = i5383[182]
  var i5408 = []
  for(var i = 0; i < i5409.length; i += 2) {
  request.r(i5409[i + 0], i5409[i + 1], 2, i5408, '')
  }
  i5382.ObjOpen_7 = i5408
  var i5411 = i5383[183]
  var i5410 = []
  for(var i = 0; i < i5411.length; i += 2) {
  request.r(i5411[i + 0], i5411[i + 1], 2, i5410, '')
  }
  i5382.ObjClose_7 = i5410
  var i5413 = i5383[184]
  var i5412 = []
  for(var i = 0; i < i5413.length; i += 2) {
  request.r(i5413[i + 0], i5413[i + 1], 2, i5412, '')
  }
  i5382.EyeBones = i5412
  request.r(i5383[185], i5383[186], 0, i5382, 'Tip7')
  var i5415 = i5383[187]
  var i5414 = []
  for(var i = 0; i < i5415.length; i += 2) {
  request.r(i5415[i + 0], i5415[i + 1], 2, i5414, '')
  }
  i5382.ObjOnHold_7 = i5414
  request.r(i5383[188], i5383[189], 0, i5382, 'EyeLine_7')
  request.r(i5383[190], i5383[191], 0, i5382, 'EyeLineForOpen_7')
  request.r(i5383[192], i5383[193], 0, i5382, 'EyeLinerOpenSfx')
  i5382.ZoomStep8 = request.d('ZoomPos', i5383[194], i5382.ZoomStep8)
  i5382.ZoomStep8B = request.d('ZoomPos', i5383[195], i5382.ZoomStep8B)
  i5382.ZoomStep8C = request.d('ZoomPos', i5383[196], i5382.ZoomStep8C)
  request.r(i5383[197], i5383[198], 0, i5382, 'Tool8Holder')
  request.r(i5383[199], i5383[200], 0, i5382, 'Tap8')
  request.r(i5383[201], i5383[202], 0, i5382, 'EyeLashParent_8')
  request.r(i5383[203], i5383[204], 0, i5382, 'ToolStep8')
  request.r(i5383[205], i5383[206], 0, i5382, 'ToolStep8CameraFollow')
  request.r(i5383[207], i5383[208], 0, i5382, 'ToolStep8ToolRotate')
  request.r(i5383[209], i5383[210], 0, i5382, 'ToolStep8Progress')
  request.r(i5383[211], i5383[212], 0, i5382, 'ToolStep8SR')
  request.r(i5383[213], i5383[214], 0, i5382, 'ToolStep8SR2')
  var i5417 = i5383[215]
  var i5416 = []
  for(var i = 0; i < i5417.length; i += 2) {
  request.r(i5417[i + 0], i5417[i + 1], 2, i5416, '')
  }
  i5382.ObjOpen_8 = i5416
  var i5419 = i5383[216]
  var i5418 = []
  for(var i = 0; i < i5419.length; i += 2) {
  request.r(i5419[i + 0], i5419[i + 1], 2, i5418, '')
  }
  i5382.ObjClose_8 = i5418
  request.r(i5383[217], i5383[218], 0, i5382, 'EyeLashes_8')
  request.r(i5383[219], i5383[220], 0, i5382, 'mascaraEyeClose')
  request.r(i5383[221], i5383[222], 0, i5382, 'mascaraIndication')
  request.r(i5383[223], i5383[224], 0, i5382, 'mascaraIndication_R')
  request.r(i5383[225], i5383[226], 0, i5382, 'mascaraOpenSfx')
  i5382.ZoomStep9 = request.d('ZoomPos', i5383[227], i5382.ZoomStep9)
  i5382.ZoomStep9B = request.d('ZoomPos', i5383[228], i5382.ZoomStep9B)
  i5382.ZoomStep9C = request.d('ZoomPos', i5383[229], i5382.ZoomStep9C)
  request.r(i5383[230], i5383[231], 0, i5382, 'Tool9Holder')
  request.r(i5383[232], i5383[233], 0, i5382, 'Tap9')
  request.r(i5383[234], i5383[235], 0, i5382, 'ToolStep9')
  request.r(i5383[236], i5383[237], 0, i5382, 'ToolStep9SR')
  request.r(i5383[238], i5383[239], 0, i5382, 'ToolStep9Sprite')
  request.r(i5383[240], i5383[241], 0, i5382, 'ToolStep9CameraFollow')
  request.r(i5383[242], i5383[243], 0, i5382, 'ToolStep9ToolRotate')
  request.r(i5383[244], i5383[245], 0, i5382, 'ToolStep9Progress')
  request.r(i5383[246], i5383[247], 0, i5382, 'ToolStep9CapAnimator')
  var i5421 = i5383[248]
  var i5420 = []
  for(var i = 0; i < i5421.length; i += 2) {
  request.r(i5421[i + 0], i5421[i + 1], 2, i5420, '')
  }
  i5382.EyeBrowBones = i5420
  request.r(i5383[249], i5383[250], 0, i5382, 'Tip9')
  var i5423 = i5383[251]
  var i5422 = []
  for(var i = 0; i < i5423.length; i += 2) {
  request.r(i5423[i + 0], i5423[i + 1], 2, i5422, '')
  }
  i5382.ObjOnHold_9 = i5422
  request.r(i5383[252], i5383[253], 0, i5382, 'EyeBrow_9')
  request.r(i5383[254], i5383[255], 0, i5382, 'EyeBrowIndication')
  request.r(i5383[256], i5383[257], 0, i5382, 'EyeBrowIndication_R')
  request.r(i5383[258], i5383[259], 0, i5382, 'eyeBrowOpenSfx')
  i5382.ZoomStep10 = request.d('ZoomPos', i5383[260], i5382.ZoomStep10)
  i5382.ZoomStep10B = request.d('ZoomPos', i5383[261], i5382.ZoomStep10B)
  request.r(i5383[262], i5383[263], 0, i5382, 'Tool10Holder')
  request.r(i5383[264], i5383[265], 0, i5382, 'Tap10')
  request.r(i5383[266], i5383[267], 0, i5382, 'ToolStep10')
  request.r(i5383[268], i5383[269], 0, i5382, 'ToolStep10CameraFollow')
  request.r(i5383[270], i5383[271], 0, i5382, 'ToolStep10ToolRotate')
  request.r(i5383[272], i5383[273], 0, i5382, 'HandAnim10')
  var i5425 = i5383[274]
  var i5424 = []
  for(var i = 0; i < i5425.length; i += 2) {
  request.r(i5425[i + 0], i5425[i + 1], 2, i5424, '')
  }
  i5382.ToolStep10Tips = i5424
  request.r(i5383[275], i5383[276], 0, i5382, 'Particles_10')
  var i5427 = i5383[277]
  var i5426 = []
  for(var i = 0; i < i5427.length; i += 2) {
  request.r(i5427[i + 0], i5427[i + 1], 2, i5426, '')
  }
  i5382.ToolStep10Targets = i5426
  request.r(i5383[278], i5383[279], 0, i5382, 'ToolStep10BrushSR')
  request.r(i5383[280], i5383[281], 0, i5382, 'ObjOpen_10')
  request.r(i5383[282], i5383[283], 0, i5382, 'ObjClose_10')
  var i5429 = i5383[284]
  var i5428 = []
  for(var i = 0; i < i5429.length; i += 2) {
  request.r(i5429[i + 0], i5429[i + 1], 2, i5428, '')
  }
  i5382.BlushBones = i5428
  request.r(i5383[285], i5383[286], 0, i5382, 'Tip10')
  request.r(i5383[287], i5383[288], 0, i5382, 'Blush_10')
  request.r(i5383[289], i5383[290], 0, i5382, 'BlushOpenSfx')
  i5382.ZoomStep11 = request.d('ZoomPos', i5383[291], i5382.ZoomStep11)
  i5382.ZoomStep11B = request.d('ZoomPos', i5383[292], i5382.ZoomStep11B)
  request.r(i5383[293], i5383[294], 0, i5382, 'Tool11Holder')
  request.r(i5383[295], i5383[296], 0, i5382, 'Tap11')
  request.r(i5383[297], i5383[298], 0, i5382, 'ToolStep11')
  request.r(i5383[299], i5383[300], 0, i5382, 'ToolStep11Animator')
  request.r(i5383[301], i5383[302], 0, i5382, 'ToolStep11CameraFollow')
  request.r(i5383[303], i5383[304], 0, i5382, 'ToolStep11ToolRotate')
  request.r(i5383[305], i5383[306], 0, i5382, 'HandAnim11')
  request.r(i5383[307], i5383[308], 0, i5382, 'ToolStep11CapAnimator')
  request.r(i5383[309], i5383[310], 0, i5382, 'ToolStep11Shadow')
  var i5431 = i5383[311]
  var i5430 = []
  for(var i = 0; i < i5431.length; i += 2) {
  request.r(i5431[i + 0], i5431[i + 1], 2, i5430, '')
  }
  i5382.LipstickBones = i5430
  request.r(i5383[312], i5383[313], 0, i5382, 'Tip11')
  request.r(i5383[314], i5383[315], 0, i5382, 'LipClose')
  request.r(i5383[316], i5383[317], 0, i5382, 'lipstickOpenSfx')
  request.r(i5383[318], i5383[319], 0, i5382, 'lipstickOpenSfx2')
  request.r(i5383[320], i5383[321], 0, i5382, 'lipstickMmmSfx')
  i5382.levelName = i5383[322]
  i5382.levelReward = i5383[323]
  request.r(i5383[324], i5383[325], 0, i5382, 'LevelIcon')
  request.r(i5383[326], i5383[327], 0, i5382, 'Level_BG')
  var i5433 = i5383[328]
  var i5432 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i5433.length; i += 2) {
  request.r(i5433[i + 0], i5433[i + 1], 1, i5432, '')
  }
  i5382.ToolIcons = i5432
  var i5435 = i5383[329]
  var i5434 = []
  for(var i = 0; i < i5435.length; i += 2) {
  request.r(i5435[i + 0], i5435[i + 1], 2, i5434, '')
  }
  i5382.AllDrags = i5434
  var i5437 = i5383[330]
  var i5436 = []
  for(var i = 0; i < i5437.length; i += 2) {
  request.r(i5437[i + 0], i5437[i + 1], 2, i5436, '')
  }
  i5382.AllSources = i5436
  var i5439 = i5383[331]
  var i5438 = []
  for(var i = 0; i < i5439.length; i += 2) {
  request.r(i5439[i + 0], i5439[i + 1], 2, i5438, '')
  }
  i5382.AllScratches = i5438
  i5382.stepsDone = i5383[332]
  i5382.levelNo = i5383[333]
  i5382.partNo = i5383[334]
  return i5382
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i5440 = root || request.c( 'ZoomPos' )
  var i5441 = data
  i5440.CameraPos = new pc.Vec3( i5441[0], i5441[1], i5441[2] )
  i5440.CameraFOV = i5441[3]
  return i5440
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i5456 = root || request.c( 'PlayableCTA' )
  var i5457 = data
  i5456.trigger = i5457[0]
  i5456.afterSeconds = i5457[1]
  i5456.afterTaps = i5457[2]
  request.r(i5457[3], i5457[4], 0, i5456, 'scratchProgress')
  i5456.scratchIndex = i5457[5]
  i5456.progressThreshold = i5457[6]
  request.r(i5457[7], i5457[8], 0, i5456, 'watchedTool')
  i5456.blockInputOnFire = !!i5457[9]
  i5456.refireOnEveryTap = !!i5457[10]
  i5456.refireDelay = i5457[11]
  i5456.showEndCard = !!i5457[12]
  request.r(i5457[13], i5457[14], 0, i5456, 'endCard')
  i5456.endCardDelay = i5457[15]
  i5456.showEndCardOnProgressTrigger = !!i5457[16]
  i5456.showEndCardOnToolAppearTrigger = !!i5457[17]
  i5456.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i5457[18], i5456.onCtaFired)
  i5456.logWhenFired = !!i5457[19]
  return i5456
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i5458 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i5459 = data
  request.r(i5459[0], i5459[1], 0, i5458, 'MainCamera')
  i5458.RenderType = i5459[2]
  request.r(i5459[3], i5459[4], 0, i5458, 'ScratchSurfaceSprite')
  i5458.ScratchSurfaceSpriteHasAlpha = !!i5459[5]
  i5458.MaskProgressCutOffValue = i5459[6]
  request.r(i5459[7], i5459[8], 0, i5458, 'EraseTexture')
  i5458.EraseTextureScale = new pc.Vec2( i5459[9], i5459[10] )
  i5458.InputEnabled = !!i5459[11]
  request.r(i5459[12], i5459[13], 0, i5458, 'Card')
  i5458.Mode = i5459[14]
  request.r(i5459[15], i5459[16], 0, i5458, 'Progress')
  request.r(i5459[17], i5459[18], 0, i5458, 'MeshCard')
  request.r(i5459[19], i5459[20], 0, i5458, 'SpriteCard')
  request.r(i5459[21], i5459[22], 0, i5458, 'ImageCard')
  request.r(i5459[23], i5459[24], 0, i5458, 'MaskShader')
  request.r(i5459[25], i5459[26], 0, i5458, 'BrushShader')
  request.r(i5459[27], i5459[28], 0, i5458, 'MaskProgressShader')
  request.r(i5459[29], i5459[30], 0, i5458, 'MaskProgressCutOffShader')
  return i5458
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i5460 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i5461 = data
  request.r(i5461[0], i5461[1], 0, i5460, 'MainCamera')
  request.r(i5461[2], i5461[3], 0, i5460, 'Surface')
  i5460.RenderTextureQuality = i5461[4]
  request.r(i5461[5], i5461[6], 0, i5460, 'Eraser')
  request.r(i5461[7], i5461[8], 0, i5460, 'Progress')
  request.r(i5461[9], i5461[10], 0, i5460, 'ScratchSurface')
  request.r(i5461[11], i5461[12], 0, i5460, 'RenderTexture')
  i5460.BrushScale = new pc.Vec2( i5461[13], i5461[14] )
  request.r(i5461[15], i5461[16], 0, i5460, 'ToolTip')
  i5460.InputEnabled = !!i5461[17]
  i5460.IsScratching = !!i5461[18]
  i5460.useChangingScale = !!i5461[19]
  i5460.useGivenBrushScale = !!i5461[20]
  i5460.canSpreadMask = !!i5461[21]
  i5460.shouldPaintHoles = !!i5461[22]
  i5460.canRotateTip = !!i5461[23]
  i5460._mode = i5461[24]
  return i5460
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i5462 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i5463 = data
  request.r(i5463[0], i5463[1], 0, i5462, 'Card')
  i5462.currentProgress = i5463[2]
  return i5462
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i5464 = root || request.c( 'InteractableBones' )
  var i5465 = data
  request.r(i5465[0], i5465[1], 0, i5464, 'Tip')
  i5464.MoveAmount = i5465[2]
  i5464.MoveSpeed = i5465[3]
  i5464.ShakeSpeed = i5465[4]
  i5464.MovementThreshold = i5465[5]
  i5464.MoveX = !!i5465[6]
  i5464.MoveY = !!i5465[7]
  return i5464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i5466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i5467 = data
  i5466.usedByComposite = !!i5467[0]
  i5466.autoTiling = !!i5467[1]
  var i5469 = i5467[2]
  var i5468 = []
  for(var i = 0; i < i5469.length; i += 1) {
  var i5471 = i5469[i + 0]
  var i5470 = []
  for(var i = 0; i < i5471.length; i += 2) {
    i5470.push( new pc.Vec2( i5471[i + 0], i5471[i + 1] ) );
  }
    i5468.push( i5470 );
  }
  i5466.points = i5468
  i5466.enabled = !!i5467[3]
  i5466.isTrigger = !!i5467[4]
  i5466.usedByEffector = !!i5467[5]
  i5466.density = i5467[6]
  i5466.offset = new pc.Vec2( i5467[7], i5467[8] )
  request.r(i5467[9], i5467[10], 0, i5466, 'material')
  return i5466
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i5478 = root || request.c( 'PlaySfxOnCollision' )
  var i5479 = data
  request.r(i5479[0], i5479[1], 0, i5478, 'Tip')
  i5478.Mode = i5479[2]
  request.r(i5479[3], i5479[4], 0, i5478, 'DragInput')
  request.r(i5479[5], i5479[6], 0, i5478, 'Source')
  i5478.startVol = i5479[7]
  i5478.targetVol = i5479[8]
  i5478.duration = i5479[9]
  request.r(i5479[10], i5479[11], 0, i5478, 'Particles')
  i5478.isDone = !!i5479[12]
  i5478.isInArea = !!i5479[13]
  i5478.isPlaying = !!i5479[14]
  return i5478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i5480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i5481 = data
  request.r(i5481[0], i5481[1], 0, i5480, 'clip')
  request.r(i5481[2], i5481[3], 0, i5480, 'outputAudioMixerGroup')
  i5480.playOnAwake = !!i5481[4]
  i5480.loop = !!i5481[5]
  i5480.time = i5481[6]
  i5480.volume = i5481[7]
  i5480.pitch = i5481[8]
  i5480.enabled = !!i5481[9]
  return i5480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i5482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i5483 = data
  i5482.radius = i5483[0]
  i5482.enabled = !!i5483[1]
  i5482.isTrigger = !!i5483[2]
  i5482.usedByEffector = !!i5483[3]
  i5482.density = i5483[4]
  i5482.offset = new pc.Vec2( i5483[5], i5483[6] )
  request.r(i5483[7], i5483[8], 0, i5482, 'material')
  return i5482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i5484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i5485 = data
  i5484.textureMode = i5485[0]
  i5484.alignment = i5485[1]
  i5484.widthCurve = new pc.AnimationCurve( { keys_flow: i5485[2] } )
  i5484.colorGradient = i5485[3] ? new pc.ColorGradient(i5485[3][0], i5485[3][1], i5485[3][2]) : null
  var i5487 = i5485[4]
  var i5486 = []
  for(var i = 0; i < i5487.length; i += 3) {
    i5486.push( new pc.Vec3( i5487[i + 0], i5487[i + 1], i5487[i + 2] ) );
  }
  i5484.positions = i5486
  i5484.positionCount = i5485[5]
  i5484.widthMultiplier = i5485[6]
  i5484.startWidth = i5485[7]
  i5484.endWidth = i5485[8]
  i5484.numCornerVertices = i5485[9]
  i5484.numCapVertices = i5485[10]
  i5484.useWorldSpace = !!i5485[11]
  i5484.loop = !!i5485[12]
  i5484.startColor = new pc.Color(i5485[13], i5485[14], i5485[15], i5485[16])
  i5484.endColor = new pc.Color(i5485[17], i5485[18], i5485[19], i5485[20])
  i5484.generateLightingData = !!i5485[21]
  i5484.enabled = !!i5485[22]
  request.r(i5485[23], i5485[24], 0, i5484, 'sharedMaterial')
  var i5489 = i5485[25]
  var i5488 = []
  for(var i = 0; i < i5489.length; i += 2) {
  request.r(i5489[i + 0], i5489[i + 1], 2, i5488, '')
  }
  i5484.sharedMaterials = i5488
  i5484.receiveShadows = !!i5485[26]
  i5484.shadowCastingMode = i5485[27]
  i5484.sortingLayerID = i5485[28]
  i5484.sortingOrder = i5485[29]
  i5484.lightmapIndex = i5485[30]
  i5484.lightmapSceneIndex = i5485[31]
  i5484.lightmapScaleOffset = new pc.Vec4( i5485[32], i5485[33], i5485[34], i5485[35] )
  i5484.lightProbeUsage = i5485[36]
  i5484.reflectionProbeUsage = i5485[37]
  return i5484
}

Deserializers["TextureOffsetScroller"] = function (request, data, root) {
  var i5490 = root || request.c( 'TextureOffsetScroller' )
  var i5491 = data
  i5490.scrollSpeed = new pc.Vec2( i5491[0], i5491[1] )
  i5490.smoothStart = !!i5491[2]
  i5490.smoothDuration = i5491[3]
  i5490.textureName = i5491[4]
  i5490.useSharedMaterial = !!i5491[5]
  return i5490
}

Deserializers["Lvl1_EyeOpenClose"] = function (request, data, root) {
  var i5492 = root || request.c( 'Lvl1_EyeOpenClose' )
  var i5493 = data
  request.r(i5493[0], i5493[1], 0, i5492, 'ThisLevel')
  request.r(i5493[2], i5493[3], 0, i5492, 'ThisDrag')
  request.r(i5493[4], i5493[5], 0, i5492, 'Tip')
  return i5492
}

Deserializers["Lvl1_EyeOpenClose_Shampoo"] = function (request, data, root) {
  var i5494 = root || request.c( 'Lvl1_EyeOpenClose_Shampoo' )
  var i5495 = data
  request.r(i5495[0], i5495[1], 0, i5494, 'ThisLevel')
  request.r(i5495[2], i5495[3], 0, i5494, 'ThisDrag')
  request.r(i5495[4], i5495[5], 0, i5494, 'Tip')
  return i5494
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i5496 = root || request.c( 'BD_AnimatorDrag' )
  var i5497 = data
  request.r(i5497[0], i5497[1], 0, i5496, 'BD')
  request.r(i5497[2], i5497[3], 0, i5496, 'anim')
  request.r(i5497[4], i5497[5], 0, i5496, 'Source')
  i5496.Vibration = !!i5497[6]
  i5496.isCompletable = !!i5497[7]
  i5496.completionThreshold = i5497[8]
  i5496.OnComplete = request.d('UnityEngine.Events.UnityEvent', i5497[9], i5496.OnComplete)
  return i5496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i5498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i5499 = data
  i5498.bodyType = i5499[0]
  request.r(i5499[1], i5499[2], 0, i5498, 'material')
  i5498.simulated = !!i5499[3]
  i5498.useAutoMass = !!i5499[4]
  i5498.mass = i5499[5]
  i5498.drag = i5499[6]
  i5498.angularDrag = i5499[7]
  i5498.gravityScale = i5499[8]
  i5498.collisionDetectionMode = i5499[9]
  i5498.sleepMode = i5499[10]
  i5498.constraints = i5499[11]
  return i5498
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i5500 = root || request.c( 'BasicDrag' )
  var i5501 = data
  i5500.canDrag = !!i5501[0]
  i5500.dragByDelta = !!i5501[1]
  i5500.isDragging = !!i5501[2]
  i5500.moveWithPointer = !!i5501[3]
  i5500.canReturn = !!i5501[4]
  i5500.jumpOnReturn = !!i5501[5]
  i5500.returnTime = i5501[6]
  i5500.Tool_Offset = new pc.Vec3( i5501[7], i5501[8], i5501[9] )
  i5500.canScaleIncrease = !!i5501[10]
  i5500.Self_ScaleNew = new pc.Vec3( i5501[11], i5501[12], i5501[13] )
  i5500.canRotateOnPick = !!i5501[14]
  i5500.startRot = new pc.Vec3( i5501[15], i5501[16], i5501[17] )
  i5500.newRot = new pc.Vec3( i5501[18], i5501[19], i5501[20] )
  var i5503 = i5501[21]
  var i5502 = []
  for(var i = 0; i < i5503.length; i += 2) {
  request.r(i5503[i + 0], i5503[i + 1], 2, i5502, '')
  }
  i5500.childSprite = i5502
  request.r(i5501[22], i5501[23], 0, i5500, 'ToolSelectClip')
  request.r(i5501[24], i5501[25], 0, i5500, 'ToolLoopClip')
  request.r(i5501[26], i5501[27], 0, i5500, 'thisParticles')
  i5500.onDragparticle = !!i5501[28]
  request.r(i5501[29], i5501[30], 0, i5500, 'dragParticles')
  request.r(i5501[31], i5501[32], 0, i5500, 'anim')
  i5500.startPos = new pc.Vec3( i5501[33], i5501[34], i5501[35] )
  i5500.startScale = new pc.Vec3( i5501[36], i5501[37], i5501[38] )
  i5500.Vibration = !!i5501[39]
  i5500.isPlacedCannotMove = !!i5501[40]
  i5500.isObjectMovingWhileDragging = !!i5501[41]
  i5500.OnMouseDownEvent = request.d('System.Action', i5501[42], i5500.OnMouseDownEvent)
  i5500.OnMouseUpEvent = request.d('System.Action', i5501[43], i5500.OnMouseUpEvent)
  i5500.ProgStartEvent = request.d('System.Action', i5501[44], i5500.ProgStartEvent)
  i5500.ProgEndEvent = request.d('System.Action', i5501[45], i5500.ProgEndEvent)
  i5500.canCallMouseUpWhenGamePaused = !!i5501[46]
  i5500.ClampX_L = i5501[47]
  i5500.ClampX_H = i5501[48]
  i5500.ClampY_L = i5501[49]
  i5500.ClampY_H = i5501[50]
  i5500.startOrder = i5501[51]
  i5500.dontResetItIsInCollider = !!i5501[52]
  request.r(i5501[53], i5501[54], 0, i5500, 'thisCollider')
  request.r(i5501[55], i5501[56], 0, i5500, 'thisSR')
  i5500.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i5501[57], i5500.OnMouseDownEventIndependentFromCanDrag)
  return i5500
}

Deserializers["System.Action"] = function (request, data, root) {
  var i5504 = root || request.c( 'System.Action' )
  var i5505 = data
  return i5504
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i5506 = root || request.c( 'BD_Progress' )
  var i5507 = data
  var i5509 = i5507[0]
  var i5508 = []
  for(var i = 0; i < i5509.length; i += 1) {
    i5508.push( request.d('ScratchData', i5509[i + 0]) );
  }
  i5506.AllScratches = i5508
  i5506.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i5507[1], i5506.OnScratchComplete)
  i5506.isProgDone = !!i5507[2]
  i5506.canCallComplete = !!i5507[3]
  i5506.CollectiveAppear = !!i5507[4]
  i5506.tipControl = !!i5507[5]
  i5506.progressControl = !!i5507[6]
  request.r(i5507[7], i5507[8], 0, i5506, 'thisDrag')
  i5506.CompleteEvent = request.d('System.Action', i5507[9], i5506.CompleteEvent)
  i5506.SubCompleteEvent = request.d('System.Action', i5507[10], i5506.SubCompleteEvent)
  return i5506
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i5512 = root || request.c( 'ScratchData' )
  var i5513 = data
  request.r(i5513[0], i5513[1], 0, i5512, 'ScratchManager')
  i5512.scratchLimit = i5513[2]
  i5512.isComplete = !!i5513[3]
  return i5512
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i5514 = root || request.c( 'ActionOnTap' )
  var i5515 = data
  i5514.OnTap = request.d('UnityEngine.Events.UnityEvent', i5515[0], i5514.OnTap)
  i5514.OnTapExtra = request.d('System.Action', i5515[1], i5514.OnTapExtra)
  return i5514
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i5516 = root || request.c( 'BD_ProgressHelper' )
  var i5517 = data
  request.r(i5517[0], i5517[1], 0, i5516, 'BD_Progress')
  request.r(i5517[2], i5517[3], 0, i5516, 'fadeSprite')
  i5516.fadeIn = !!i5517[4]
  return i5516
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i5518 = root || request.c( 'BD_Clamp' )
  var i5519 = data
  i5518.ClampX_L = i5519[0]
  i5518.ClampX_H = i5519[1]
  i5518.ClampY_L = i5519[2]
  i5518.ClampY_H = i5519[3]
  return i5518
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i5520 = root || request.c( 'BD_ToolRotate' )
  var i5521 = data
  i5520.startDelay = i5521[0]
  request.r(i5521[1], i5521[2], 0, i5520, 'Tool')
  request.r(i5521[3], i5521[4], 0, i5520, 'Clamp')
  request.r(i5521[5], i5521[6], 0, i5520, 'Pivot')
  i5520.MinAngle = new pc.Vec3( i5521[7], i5521[8], i5521[9] )
  i5520.MaxAngle = new pc.Vec3( i5521[10], i5521[11], i5521[12] )
  i5520.rotationSpeed = i5521[13]
  return i5520
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i5522 = root || request.c( 'BD_CameraFollow' )
  var i5523 = data
  request.r(i5523[0], i5523[1], 0, i5522, 'Tool')
  request.r(i5523[2], i5523[3], 0, i5522, 'Pivot')
  i5522.FOV = i5523[4]
  i5522.Y_L = i5523[5]
  i5522.Y_H = i5523[6]
  i5522.X_L = i5523[7]
  i5522.X_R = i5523[8]
  i5522.startDelay = i5523[9]
  i5522.duration = i5523[10]
  return i5522
}

Deserializers["DraggableObject"] = function (request, data, root) {
  var i5524 = root || request.c( 'DraggableObject' )
  var i5525 = data
  i5524.dragSpeed = i5525[0]
  i5524.rotateOnPick = !!i5525[1]
  i5524.targetRotationAngle = i5525[2]
  i5524.rotationSpeed = i5525[3]
  request.r(i5525[4], i5525[5], 0, i5524, 'dropPrefab')
  request.r(i5525[6], i5525[7], 0, i5524, 'headPoint')
  request.r(i5525[8], i5525[9], 0, i5524, 'AnimPlayer')
  i5524.AnimName = i5525[10]
  i5524.dropDelay = i5525[11]
  request.r(i5525[12], i5525[13], 0, i5524, 'headTriggerCollider')
  var i5527 = i5525[14]
  var i5526 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Collider2D')))
  for(var i = 0; i < i5527.length; i += 2) {
  request.r(i5527[i + 0], i5527[i + 1], 1, i5526, '')
  }
  i5524.dropTargets = i5526
  var i5529 = i5525[15]
  var i5528 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5529.length; i += 2) {
  request.r(i5529[i + 0], i5529[i + 1], 1, i5528, '')
  }
  i5524.ItemsToActive = i5528
  i5524.delayInActivation = i5525[16]
  i5524.offsetFromTarget = new pc.Vec2( i5525[17], i5525[18] )
  i5524.minX = i5525[19]
  i5524.maxX = i5525[20]
  i5524.minY = i5525[21]
  i5524.maxY = i5525[22]
  i5524.OnComplete = request.d('UnityEngine.Events.UnityEvent', i5525[23], i5524.OnComplete)
  i5524.OnMouseDownEvent = request.d('System.Action', i5525[24], i5524.OnMouseDownEvent)
  i5524.OnMouseUpEvent = request.d('System.Action', i5525[25], i5524.OnMouseUpEvent)
  request.r(i5525[26], i5525[27], 0, i5524, 'hitSfx')
  i5524.isDragging = !!i5525[28]
  return i5524
}

Deserializers["DO_CameraFollow"] = function (request, data, root) {
  var i5534 = root || request.c( 'DO_CameraFollow' )
  var i5535 = data
  request.r(i5535[0], i5535[1], 0, i5534, 'Tool')
  request.r(i5535[2], i5535[3], 0, i5534, 'Pivot')
  i5534.FOV = i5535[4]
  i5534.Y_L = i5535[5]
  i5534.Y_H = i5535[6]
  i5534.X_L = i5535[7]
  i5534.X_R = i5535[8]
  i5534.startDelay = i5535[9]
  i5534.duration = i5535[10]
  return i5534
}

Deserializers["Lvl1_Face_AddPrimer"] = function (request, data, root) {
  var i5536 = root || request.c( 'Lvl1_Face_AddPrimer' )
  var i5537 = data
  request.r(i5537[0], i5537[1], 0, i5536, 'ThisLevel')
  request.r(i5537[2], i5537[3], 0, i5536, 'ThisDrag')
  i5536.liteShakeOnThird = !!i5537[4]
  request.r(i5537[5], i5537[6], 0, i5536, 'Col')
  request.r(i5537[7], i5537[8], 0, i5536, 'AnimPlayer')
  i5536.AnimName = i5537[9]
  var i5539 = i5537[10]
  var i5538 = []
  for(var i = 0; i < i5539.length; i += 2) {
  request.r(i5539[i + 0], i5539[i + 1], 2, i5538, '')
  }
  i5536.Detects = i5538
  var i5541 = i5537[11]
  var i5540 = []
  for(var i = 0; i < i5541.length; i += 2) {
  request.r(i5541[i + 0], i5541[i + 1], 2, i5540, '')
  }
  i5536.Anims = i5540
  i5536.OnComplete = request.d('UnityEngine.Events.UnityEvent', i5537[12], i5536.OnComplete)
  request.r(i5537[13], i5537[14], 0, i5536, 'Clip')
  var i5543 = i5537[15]
  var i5542 = []
  for(var i = 0; i < i5543.length; i += 2) {
  request.r(i5543[i + 0], i5543[i + 1], 2, i5542, '')
  }
  i5536.BonesToShake = i5542
  i5536.currentPrimer = i5537[16]
  return i5536
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i5544 = root || request.c( 'DestroyObj' )
  var i5545 = data
  i5544.destroyDelay = i5545[0]
  return i5544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i5546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i5547 = data
  i5546.name = i5547[0]
  i5546.atlasId = i5547[1]
  i5546.mipmapCount = i5547[2]
  i5546.hdr = !!i5547[3]
  i5546.size = i5547[4]
  i5546.anisoLevel = i5547[5]
  i5546.filterMode = i5547[6]
  var i5549 = i5547[7]
  var i5548 = []
  for(var i = 0; i < i5549.length; i += 4) {
    i5548.push( UnityEngine.Rect.MinMaxRect(i5549[i + 0], i5549[i + 1], i5549[i + 2], i5549[i + 3]) );
  }
  i5546.rects = i5548
  i5546.wrapU = i5547[8]
  i5546.wrapV = i5547[9]
  return i5546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i5552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i5553 = data
  i5552.name = i5553[0]
  i5552.index = i5553[1]
  i5552.startup = !!i5553[2]
  return i5552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i5554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i5555 = data
  i5554.aspect = i5555[0]
  i5554.orthographic = !!i5555[1]
  i5554.orthographicSize = i5555[2]
  i5554.backgroundColor = new pc.Color(i5555[3], i5555[4], i5555[5], i5555[6])
  i5554.nearClipPlane = i5555[7]
  i5554.farClipPlane = i5555[8]
  i5554.fieldOfView = i5555[9]
  i5554.depth = i5555[10]
  i5554.clearFlags = i5555[11]
  i5554.cullingMask = i5555[12]
  i5554.rect = i5555[13]
  request.r(i5555[14], i5555[15], 0, i5554, 'targetTexture')
  i5554.usePhysicalProperties = !!i5555[16]
  i5554.focalLength = i5555[17]
  i5554.sensorSize = new pc.Vec2( i5555[18], i5555[19] )
  i5554.lensShift = new pc.Vec2( i5555[20], i5555[21] )
  i5554.gateFit = i5555[22]
  i5554.commandBufferCount = i5555[23]
  i5554.cameraType = i5555[24]
  i5554.enabled = !!i5555[25]
  return i5554
}

Deserializers["CameraController"] = function (request, data, root) {
  var i5556 = root || request.c( 'CameraController' )
  var i5557 = data
  request.r(i5557[0], i5557[1], 0, i5556, 'cam')
  i5556.defaultPosition = new pc.Vec3( i5557[2], i5557[3], i5557[4] )
  i5556.defaultSize = i5557[5]
  i5556.defaultFOV = i5557[6]
  i5556.defaultDuration = i5557[7]
  i5556.defaultEase = i5557[8]
  return i5556
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i5558 = root || request.c( 'MusicSource' )
  var i5559 = data
  request.r(i5559[0], i5559[1], 0, i5558, 'source')
  return i5558
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i5560 = root || request.c( 'UI_Manager' )
  var i5561 = data
  i5560.levelCompleted = !!i5561[0]
  i5560.isPauseActive = !!i5561[1]
  i5560.loadIndex = i5561[2]
  request.r(i5561[3], i5561[4], 0, i5560, 'removeAdsButton')
  request.r(i5561[5], i5561[6], 0, i5560, 'pauseButton')
  request.r(i5561[7], i5561[8], 0, i5560, 'Fade_Img')
  request.r(i5561[9], i5561[10], 0, i5560, 'TopBarAnim')
  request.r(i5561[11], i5561[12], 0, i5560, 'MainPanel')
  request.r(i5561[13], i5561[14], 0, i5560, 'PausePanel')
  request.r(i5561[15], i5561[16], 0, i5560, 'PausePopUp')
  request.r(i5561[17], i5561[18], 0, i5560, 'PauseCanvasGroup')
  request.r(i5561[19], i5561[20], 0, i5560, 'RateUsPanel')
  request.r(i5561[21], i5561[22], 0, i5560, 'RateUsPopUp')
  request.r(i5561[23], i5561[24], 0, i5560, 'RemoveAdsPanel')
  request.r(i5561[25], i5561[26], 0, i5560, 'RemoveAdsPopUp')
  request.r(i5561[27], i5561[28], 0, i5560, 'RemoveAdsCanvasGroup')
  var i5563 = i5561[29]
  var i5562 = []
  for(var i = 0; i < i5563.length; i += 2) {
  request.r(i5563[i + 0], i5563[i + 1], 2, i5562, '')
  }
  i5560.RemoveAdsAnims = i5562
  var i5565 = i5561[30]
  var i5564 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i5565.length; i += 2) {
  request.r(i5565[i + 0], i5565[i + 1], 1, i5564, '')
  }
  i5560.thingsToDisableWhenCompletePanel = i5564
  request.r(i5561[31], i5561[32], 0, i5560, 'CompletePanel')
  request.r(i5561[33], i5561[34], 0, i5560, 'LevelIcon')
  request.r(i5561[35], i5561[36], 0, i5560, 'CompleteParticles')
  request.r(i5561[37], i5561[38], 0, i5560, 'progressBar')
  request.r(i5561[39], i5561[40], 0, i5560, 'progressText')
  request.r(i5561[41], i5561[42], 0, i5560, 'toolIcon1')
  request.r(i5561[43], i5561[44], 0, i5560, 'toolIcon2')
  request.r(i5561[45], i5561[46], 0, i5560, 'toolIcon3')
  request.r(i5561[47], i5561[48], 0, i5560, 'toolIcon4')
  request.r(i5561[49], i5561[50], 0, i5560, 'target1')
  request.r(i5561[51], i5561[52], 0, i5560, 'target2')
  i5560.toolMoveDuration = i5561[53]
  i5560.currentIndex = i5561[54]
  var i5567 = i5561[55]
  var i5566 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i5567.length; i += 2) {
  request.r(i5567[i + 0], i5567[i + 1], 1, i5566, '')
  }
  i5560.allTools = i5566
  request.r(i5561[56], i5561[57], 0, i5560, 'clockProgress')
  request.r(i5561[58], i5561[59], 0, i5560, 'clockProgressFill')
  request.r(i5561[60], i5561[61], 0, i5560, 'clockAudio')
  i5560.moveDistance = i5561[62]
  i5560.animationDuration = i5561[63]
  i5560.greyBgChildName = i5561[64]
  i5560.pushOffset = i5561[65]
  return i5560
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i5568 = root || request.c( 'GameManagerPlayable' )
  var i5569 = data
  request.r(i5569[0], i5569[1], 0, i5568, 'endParticles')
  request.r(i5569[2], i5569[3], 0, i5568, 'stepCompleteParticles')
  request.r(i5569[4], i5569[5], 0, i5568, 'DefaultMat')
  request.r(i5569[6], i5569[7], 0, i5568, 'BG_Music')
  request.r(i5569[8], i5569[9], 0, i5568, 'restoreEffectShader')
  request.r(i5569[10], i5569[11], 0, i5568, 'stickerEffectShader')
  i5568.isComplete = !!i5569[12]
  i5568.isPaused = !!i5569[13]
  request.r(i5569[14], i5569[15], 0, i5568, 'currentLevel')
  i5568.startLevelOnPlay = !!i5569[16]
  i5568.currentLevelNo = i5569[17]
  return i5568
}

Deserializers["AudioController"] = function (request, data, root) {
  var i5570 = root || request.c( 'AudioController' )
  var i5571 = data
  request.r(i5571[0], i5571[1], 0, i5570, 'MainMixer')
  request.r(i5571[2], i5571[3], 0, i5570, 'UiClick')
  request.r(i5571[4], i5571[5], 0, i5570, 'UiClickSource')
  var i5573 = i5571[6]
  var i5572 = []
  for(var i = 0; i < i5573.length; i += 2) {
  request.r(i5573[i + 0], i5573[i + 1], 2, i5572, '')
  }
  i5570.SfxSources = i5572
  var i5575 = i5571[7]
  var i5574 = []
  for(var i = 0; i < i5575.length; i += 2) {
  request.r(i5575[i + 0], i5575[i + 1], 2, i5574, '')
  }
  i5570.AllClips = i5574
  return i5570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i5578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i5579 = data
  i5578.pivot = new pc.Vec2( i5579[0], i5579[1] )
  i5578.anchorMin = new pc.Vec2( i5579[2], i5579[3] )
  i5578.anchorMax = new pc.Vec2( i5579[4], i5579[5] )
  i5578.sizeDelta = new pc.Vec2( i5579[6], i5579[7] )
  i5578.anchoredPosition3D = new pc.Vec3( i5579[8], i5579[9], i5579[10] )
  i5578.rotation = new pc.Quat(i5579[11], i5579[12], i5579[13], i5579[14])
  i5578.scale = new pc.Vec3( i5579[15], i5579[16], i5579[17] )
  return i5578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i5580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i5581 = data
  i5580.planeDistance = i5581[0]
  i5580.referencePixelsPerUnit = i5581[1]
  i5580.isFallbackOverlay = !!i5581[2]
  i5580.renderMode = i5581[3]
  i5580.renderOrder = i5581[4]
  i5580.sortingLayerName = i5581[5]
  i5580.sortingOrder = i5581[6]
  i5580.scaleFactor = i5581[7]
  request.r(i5581[8], i5581[9], 0, i5580, 'worldCamera')
  i5580.overrideSorting = !!i5581[10]
  i5580.pixelPerfect = !!i5581[11]
  i5580.targetDisplay = i5581[12]
  i5580.overridePixelPerfect = !!i5581[13]
  i5580.enabled = !!i5581[14]
  return i5580
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i5582 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i5583 = data
  i5582.m_UiScaleMode = i5583[0]
  i5582.m_ReferencePixelsPerUnit = i5583[1]
  i5582.m_ScaleFactor = i5583[2]
  i5582.m_ReferenceResolution = new pc.Vec2( i5583[3], i5583[4] )
  i5582.m_ScreenMatchMode = i5583[5]
  i5582.m_MatchWidthOrHeight = i5583[6]
  i5582.m_PhysicalUnit = i5583[7]
  i5582.m_FallbackScreenDPI = i5583[8]
  i5582.m_DefaultSpriteDPI = i5583[9]
  i5582.m_DynamicPixelsPerUnit = i5583[10]
  i5582.m_PresetInfoIsWorld = !!i5583[11]
  return i5582
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i5584 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i5585 = data
  i5584.m_IgnoreReversedGraphics = !!i5585[0]
  i5584.m_BlockingObjects = i5585[1]
  i5584.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i5585[2] )
  return i5584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i5586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i5587 = data
  i5586.cullTransparentMesh = !!i5587[0]
  return i5586
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i5588 = root || request.c( 'UnityEngine.UI.Image' )
  var i5589 = data
  request.r(i5589[0], i5589[1], 0, i5588, 'm_Sprite')
  i5588.m_Type = i5589[2]
  i5588.m_PreserveAspect = !!i5589[3]
  i5588.m_FillCenter = !!i5589[4]
  i5588.m_FillMethod = i5589[5]
  i5588.m_FillAmount = i5589[6]
  i5588.m_FillClockwise = !!i5589[7]
  i5588.m_FillOrigin = i5589[8]
  i5588.m_UseSpriteMesh = !!i5589[9]
  i5588.m_PixelsPerUnitMultiplier = i5589[10]
  request.r(i5589[11], i5589[12], 0, i5588, 'm_Material')
  i5588.m_Maskable = !!i5589[13]
  i5588.m_Color = new pc.Color(i5589[14], i5589[15], i5589[16], i5589[17])
  i5588.m_RaycastTarget = !!i5589[18]
  i5588.m_RaycastPadding = new pc.Vec4( i5589[19], i5589[20], i5589[21], i5589[22] )
  return i5588
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i5590 = root || request.c( 'UnityEngine.UI.Text' )
  var i5591 = data
  i5590.m_FontData = request.d('UnityEngine.UI.FontData', i5591[0], i5590.m_FontData)
  i5590.m_Text = i5591[1]
  request.r(i5591[2], i5591[3], 0, i5590, 'm_Material')
  i5590.m_Maskable = !!i5591[4]
  i5590.m_Color = new pc.Color(i5591[5], i5591[6], i5591[7], i5591[8])
  i5590.m_RaycastTarget = !!i5591[9]
  i5590.m_RaycastPadding = new pc.Vec4( i5591[10], i5591[11], i5591[12], i5591[13] )
  return i5590
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i5592 = root || request.c( 'UnityEngine.UI.FontData' )
  var i5593 = data
  request.r(i5593[0], i5593[1], 0, i5592, 'm_Font')
  i5592.m_FontSize = i5593[2]
  i5592.m_FontStyle = i5593[3]
  i5592.m_BestFit = !!i5593[4]
  i5592.m_MinSize = i5593[5]
  i5592.m_MaxSize = i5593[6]
  i5592.m_Alignment = i5593[7]
  i5592.m_AlignByGeometry = !!i5593[8]
  i5592.m_RichText = !!i5593[9]
  i5592.m_HorizontalOverflow = i5593[10]
  i5592.m_VerticalOverflow = i5593[11]
  i5592.m_LineSpacing = i5593[12]
  return i5592
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i5594 = root || request.c( 'UnityEngine.UI.Button' )
  var i5595 = data
  i5594.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i5595[0], i5594.m_OnClick)
  i5594.m_Navigation = request.d('UnityEngine.UI.Navigation', i5595[1], i5594.m_Navigation)
  i5594.m_Transition = i5595[2]
  i5594.m_Colors = request.d('UnityEngine.UI.ColorBlock', i5595[3], i5594.m_Colors)
  i5594.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i5595[4], i5594.m_SpriteState)
  i5594.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i5595[5], i5594.m_AnimationTriggers)
  i5594.m_Interactable = !!i5595[6]
  request.r(i5595[7], i5595[8], 0, i5594, 'm_TargetGraphic')
  return i5594
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i5596 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i5597 = data
  i5596.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i5597[0], i5596.m_PersistentCalls)
  return i5596
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i5598 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i5599 = data
  i5598.m_Mode = i5599[0]
  i5598.m_WrapAround = !!i5599[1]
  request.r(i5599[2], i5599[3], 0, i5598, 'm_SelectOnUp')
  request.r(i5599[4], i5599[5], 0, i5598, 'm_SelectOnDown')
  request.r(i5599[6], i5599[7], 0, i5598, 'm_SelectOnLeft')
  request.r(i5599[8], i5599[9], 0, i5598, 'm_SelectOnRight')
  return i5598
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i5600 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i5601 = data
  i5600.m_NormalColor = new pc.Color(i5601[0], i5601[1], i5601[2], i5601[3])
  i5600.m_HighlightedColor = new pc.Color(i5601[4], i5601[5], i5601[6], i5601[7])
  i5600.m_PressedColor = new pc.Color(i5601[8], i5601[9], i5601[10], i5601[11])
  i5600.m_SelectedColor = new pc.Color(i5601[12], i5601[13], i5601[14], i5601[15])
  i5600.m_DisabledColor = new pc.Color(i5601[16], i5601[17], i5601[18], i5601[19])
  i5600.m_ColorMultiplier = i5601[20]
  i5600.m_FadeDuration = i5601[21]
  return i5600
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i5602 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i5603 = data
  request.r(i5603[0], i5603[1], 0, i5602, 'm_HighlightedSprite')
  request.r(i5603[2], i5603[3], 0, i5602, 'm_PressedSprite')
  request.r(i5603[4], i5603[5], 0, i5602, 'm_SelectedSprite')
  request.r(i5603[6], i5603[7], 0, i5602, 'm_DisabledSprite')
  return i5602
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i5604 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i5605 = data
  i5604.m_NormalTrigger = i5605[0]
  i5604.m_HighlightedTrigger = i5605[1]
  i5604.m_PressedTrigger = i5605[2]
  i5604.m_SelectedTrigger = i5605[3]
  i5604.m_DisabledTrigger = i5605[4]
  return i5604
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i5606 = root || request.c( 'PlayableHudRuntime' )
  var i5607 = data
  return i5606
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i5608 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i5609 = data
  request.r(i5609[0], i5609[1], 0, i5608, 'm_FirstSelected')
  i5608.m_sendNavigationEvents = !!i5609[2]
  i5608.m_DragThreshold = i5609[3]
  return i5608
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i5610 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i5611 = data
  i5610.m_HorizontalAxis = i5611[0]
  i5610.m_VerticalAxis = i5611[1]
  i5610.m_SubmitButton = i5611[2]
  i5610.m_CancelButton = i5611[3]
  i5610.m_InputActionsPerSecond = i5611[4]
  i5610.m_RepeatDelay = i5611[5]
  i5610.m_ForceModuleActive = !!i5611[6]
  i5610.m_SendPointerHoverToParent = !!i5611[7]
  return i5610
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i5612 = root || request.c( 'PlayableRouter' )
  var i5613 = data
  var i5615 = i5613[0]
  var i5614 = []
  for(var i = 0; i < i5615.length; i += 2) {
  request.r(i5615[i + 0], i5615[i + 1], 2, i5614, '')
  }
  i5612.menuObjects = i5614
  var i5617 = i5613[1]
  var i5616 = []
  for(var i = 0; i < i5617.length; i += 2) {
  request.r(i5617[i + 0], i5617[i + 1], 2, i5616, '')
  }
  i5612.gameplayObjects = i5616
  var i5619 = i5613[2]
  var i5618 = []
  for(var i = 0; i < i5619.length; i += 1) {
    i5618.push( request.d('PlayableRouter+SubLevelSlot', i5619[i + 0]) );
  }
  i5612.subLevels = i5618
  i5612.fadeDuration = i5613[3]
  i5612.lockedMessage = i5613[4]
  i5612.lockedTapsToCTA = i5613[5]
  return i5612
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i5622 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i5623 = data
  request.r(i5623[0], i5623[1], 0, i5622, 'button')
  request.r(i5623[2], i5623[3], 0, i5622, 'level')
  return i5622
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i5624 = root || request.c( 'ToastManager' )
  var i5625 = data
  request.r(i5625[0], i5625[1], 0, i5624, 'toastPanel')
  request.r(i5625[2], i5625[3], 0, i5624, 'toastPopup')
  request.r(i5625[4], i5625[5], 0, i5624, 'canvasGroup')
  request.r(i5625[6], i5625[7], 0, i5624, 'toastText')
  i5624.startY = i5625[8]
  i5624.visibleY = i5625[9]
  i5624.endY = i5625[10]
  i5624.animationTime = i5625[11]
  i5624.animationTimeUp = i5625[12]
  return i5624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i5626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i5627 = data
  i5626.m_Alpha = i5627[0]
  i5626.m_Interactable = !!i5627[1]
  i5626.m_BlocksRaycasts = !!i5627[2]
  i5626.m_IgnoreParentGroups = !!i5627[3]
  i5626.enabled = !!i5627[4]
  return i5626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i5628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i5629 = data
  i5628.ambientIntensity = i5629[0]
  i5628.reflectionIntensity = i5629[1]
  i5628.ambientMode = i5629[2]
  i5628.ambientLight = new pc.Color(i5629[3], i5629[4], i5629[5], i5629[6])
  i5628.ambientSkyColor = new pc.Color(i5629[7], i5629[8], i5629[9], i5629[10])
  i5628.ambientGroundColor = new pc.Color(i5629[11], i5629[12], i5629[13], i5629[14])
  i5628.ambientEquatorColor = new pc.Color(i5629[15], i5629[16], i5629[17], i5629[18])
  i5628.fogColor = new pc.Color(i5629[19], i5629[20], i5629[21], i5629[22])
  i5628.fogEndDistance = i5629[23]
  i5628.fogStartDistance = i5629[24]
  i5628.fogDensity = i5629[25]
  i5628.fog = !!i5629[26]
  request.r(i5629[27], i5629[28], 0, i5628, 'skybox')
  i5628.fogMode = i5629[29]
  var i5631 = i5629[30]
  var i5630 = []
  for(var i = 0; i < i5631.length; i += 1) {
    i5630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i5631[i + 0]) );
  }
  i5628.lightmaps = i5630
  i5628.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i5629[31], i5628.lightProbes)
  i5628.lightmapsMode = i5629[32]
  i5628.mixedBakeMode = i5629[33]
  i5628.environmentLightingMode = i5629[34]
  i5628.ambientProbe = new pc.SphericalHarmonicsL2(i5629[35])
  request.r(i5629[36], i5629[37], 0, i5628, 'customReflection')
  request.r(i5629[38], i5629[39], 0, i5628, 'defaultReflection')
  i5628.defaultReflectionMode = i5629[40]
  i5628.defaultReflectionResolution = i5629[41]
  i5628.sunLightObjectId = i5629[42]
  i5628.pixelLightCount = i5629[43]
  i5628.defaultReflectionHDR = !!i5629[44]
  i5628.hasLightDataAsset = !!i5629[45]
  i5628.hasManualGenerate = !!i5629[46]
  return i5628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i5634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i5635 = data
  request.r(i5635[0], i5635[1], 0, i5634, 'lightmapColor')
  request.r(i5635[2], i5635[3], 0, i5634, 'lightmapDirection')
  request.r(i5635[4], i5635[5], 0, i5634, 'shadowMask')
  return i5634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i5636 = root || new UnityEngine.LightProbes()
  var i5637 = data
  return i5636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i5642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i5643 = data
  var i5645 = i5643[0]
  var i5644 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i5645.length; i += 1) {
    i5644.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i5645[i + 0]));
  }
  i5642.ShaderCompilationErrors = i5644
  i5642.name = i5643[1]
  i5642.guid = i5643[2]
  var i5647 = i5643[3]
  var i5646 = []
  for(var i = 0; i < i5647.length; i += 1) {
    i5646.push( i5647[i + 0] );
  }
  i5642.shaderDefinedKeywords = i5646
  var i5649 = i5643[4]
  var i5648 = []
  for(var i = 0; i < i5649.length; i += 1) {
    i5648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i5649[i + 0]) );
  }
  i5642.passes = i5648
  var i5651 = i5643[5]
  var i5650 = []
  for(var i = 0; i < i5651.length; i += 1) {
    i5650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i5651[i + 0]) );
  }
  i5642.usePasses = i5650
  var i5653 = i5643[6]
  var i5652 = []
  for(var i = 0; i < i5653.length; i += 1) {
    i5652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i5653[i + 0]) );
  }
  i5642.defaultParameterValues = i5652
  request.r(i5643[7], i5643[8], 0, i5642, 'unityFallbackShader')
  i5642.readDepth = !!i5643[9]
  i5642.hasDepthOnlyPass = !!i5643[10]
  i5642.isCreatedByShaderGraph = !!i5643[11]
  i5642.disableBatching = !!i5643[12]
  i5642.compiled = !!i5643[13]
  return i5642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i5656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i5657 = data
  i5656.shaderName = i5657[0]
  i5656.errorMessage = i5657[1]
  return i5656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5662 = root || new pc.UnityShaderPass()
  var i5663 = data
  i5662.id = i5663[0]
  i5662.subShaderIndex = i5663[1]
  i5662.name = i5663[2]
  i5662.passType = i5663[3]
  i5662.grabPassTextureName = i5663[4]
  i5662.usePass = !!i5663[5]
  i5662.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5663[6], i5662.zTest)
  i5662.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5663[7], i5662.zWrite)
  i5662.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5663[8], i5662.culling)
  i5662.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5663[9], i5662.blending)
  i5662.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5663[10], i5662.alphaBlending)
  i5662.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5663[11], i5662.colorWriteMask)
  i5662.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5663[12], i5662.offsetUnits)
  i5662.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5663[13], i5662.offsetFactor)
  i5662.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5663[14], i5662.stencilRef)
  i5662.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5663[15], i5662.stencilReadMask)
  i5662.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5663[16], i5662.stencilWriteMask)
  i5662.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5663[17], i5662.stencilOp)
  i5662.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5663[18], i5662.stencilOpFront)
  i5662.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5663[19], i5662.stencilOpBack)
  var i5665 = i5663[20]
  var i5664 = []
  for(var i = 0; i < i5665.length; i += 1) {
    i5664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5665[i + 0]) );
  }
  i5662.tags = i5664
  var i5667 = i5663[21]
  var i5666 = []
  for(var i = 0; i < i5667.length; i += 1) {
    i5666.push( i5667[i + 0] );
  }
  i5662.passDefinedKeywords = i5666
  var i5669 = i5663[22]
  var i5668 = []
  for(var i = 0; i < i5669.length; i += 1) {
    i5668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5669[i + 0]) );
  }
  i5662.passDefinedKeywordGroups = i5668
  var i5671 = i5663[23]
  var i5670 = []
  for(var i = 0; i < i5671.length; i += 1) {
    i5670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5671[i + 0]) );
  }
  i5662.variants = i5670
  var i5673 = i5663[24]
  var i5672 = []
  for(var i = 0; i < i5673.length; i += 1) {
    i5672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5673[i + 0]) );
  }
  i5662.excludedVariants = i5672
  i5662.hasDepthReader = !!i5663[25]
  return i5662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5675 = data
  i5674.val = i5675[0]
  i5674.name = i5675[1]
  return i5674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5677 = data
  i5676.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5677[0], i5676.src)
  i5676.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5677[1], i5676.dst)
  i5676.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5677[2], i5676.op)
  return i5676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5679 = data
  i5678.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5679[0], i5678.pass)
  i5678.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5679[1], i5678.fail)
  i5678.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5679[2], i5678.zFail)
  i5678.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5679[3], i5678.comp)
  return i5678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5683 = data
  i5682.name = i5683[0]
  i5682.value = i5683[1]
  return i5682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5687 = data
  var i5689 = i5687[0]
  var i5688 = []
  for(var i = 0; i < i5689.length; i += 1) {
    i5688.push( i5689[i + 0] );
  }
  i5686.keywords = i5688
  i5686.hasDiscard = !!i5687[1]
  return i5686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5693 = data
  i5692.passId = i5693[0]
  i5692.subShaderIndex = i5693[1]
  var i5695 = i5693[2]
  var i5694 = []
  for(var i = 0; i < i5695.length; i += 1) {
    i5694.push( i5695[i + 0] );
  }
  i5692.keywords = i5694
  i5692.vertexProgram = i5693[3]
  i5692.fragmentProgram = i5693[4]
  i5692.exportedForWebGl2 = !!i5693[5]
  i5692.readDepth = !!i5693[6]
  return i5692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5699 = data
  request.r(i5699[0], i5699[1], 0, i5698, 'shader')
  i5698.pass = i5699[2]
  return i5698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5703 = data
  i5702.name = i5703[0]
  i5702.type = i5703[1]
  i5702.value = new pc.Vec4( i5703[2], i5703[3], i5703[4], i5703[5] )
  i5702.textureValue = i5703[6]
  i5702.shaderPropertyFlag = i5703[7]
  return i5702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5705 = data
  i5704.name = i5705[0]
  request.r(i5705[1], i5705[2], 0, i5704, 'texture')
  i5704.aabb = i5705[3]
  i5704.vertices = i5705[4]
  i5704.triangles = i5705[5]
  i5704.textureRect = UnityEngine.Rect.MinMaxRect(i5705[6], i5705[7], i5705[8], i5705[9])
  i5704.packedRect = UnityEngine.Rect.MinMaxRect(i5705[10], i5705[11], i5705[12], i5705[13])
  i5704.border = new pc.Vec4( i5705[14], i5705[15], i5705[16], i5705[17] )
  i5704.transparency = i5705[18]
  i5704.bounds = i5705[19]
  i5704.pixelsPerUnit = i5705[20]
  i5704.textureWidth = i5705[21]
  i5704.textureHeight = i5705[22]
  i5704.nativeSize = new pc.Vec2( i5705[23], i5705[24] )
  i5704.pivot = new pc.Vec2( i5705[25], i5705[26] )
  i5704.textureRectOffset = new pc.Vec2( i5705[27], i5705[28] )
  return i5704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5707 = data
  i5706.name = i5707[0]
  return i5706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i5708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i5709 = data
  i5708.name = i5709[0]
  i5708.wrapMode = i5709[1]
  i5708.isLooping = !!i5709[2]
  i5708.length = i5709[3]
  var i5711 = i5709[4]
  var i5710 = []
  for(var i = 0; i < i5711.length; i += 1) {
    i5710.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i5711[i + 0]) );
  }
  i5708.curves = i5710
  var i5713 = i5709[5]
  var i5712 = []
  for(var i = 0; i < i5713.length; i += 1) {
    i5712.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i5713[i + 0]) );
  }
  i5708.events = i5712
  i5708.halfPrecision = !!i5709[6]
  i5708._frameRate = i5709[7]
  i5708.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i5709[8], i5708.localBounds)
  i5708.hasMuscleCurves = !!i5709[9]
  var i5715 = i5709[10]
  var i5714 = []
  for(var i = 0; i < i5715.length; i += 1) {
    i5714.push( i5715[i + 0] );
  }
  i5708.clipMuscleConstant = i5714
  i5708.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i5709[11], i5708.clipBindingConstant)
  return i5708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i5718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i5719 = data
  i5718.path = i5719[0]
  i5718.hash = i5719[1]
  i5718.componentType = i5719[2]
  i5718.property = i5719[3]
  i5718.keys = i5719[4]
  var i5721 = i5719[5]
  var i5720 = []
  for(var i = 0; i < i5721.length; i += 1) {
    i5720.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i5721[i + 0]) );
  }
  i5718.objectReferenceKeys = i5720
  return i5718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i5724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i5725 = data
  i5724.time = i5725[0]
  request.r(i5725[1], i5725[2], 0, i5724, 'value')
  return i5724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i5728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i5729 = data
  i5728.functionName = i5729[0]
  i5728.floatParameter = i5729[1]
  i5728.intParameter = i5729[2]
  i5728.stringParameter = i5729[3]
  request.r(i5729[4], i5729[5], 0, i5728, 'objectReferenceParameter')
  i5728.time = i5729[6]
  return i5728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i5730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i5731 = data
  i5730.center = new pc.Vec3( i5731[0], i5731[1], i5731[2] )
  i5730.extends = new pc.Vec3( i5731[3], i5731[4], i5731[5] )
  return i5730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i5734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i5735 = data
  var i5737 = i5735[0]
  var i5736 = []
  for(var i = 0; i < i5737.length; i += 1) {
    i5736.push( i5737[i + 0] );
  }
  i5734.genericBindings = i5736
  var i5739 = i5735[1]
  var i5738 = []
  for(var i = 0; i < i5739.length; i += 1) {
    i5738.push( i5739[i + 0] );
  }
  i5734.pptrCurveMapping = i5738
  return i5734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5741 = data
  i5740.name = i5741[0]
  i5740.ascent = i5741[1]
  i5740.originalLineHeight = i5741[2]
  i5740.fontSize = i5741[3]
  var i5743 = i5741[4]
  var i5742 = []
  for(var i = 0; i < i5743.length; i += 1) {
    i5742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5743[i + 0]) );
  }
  i5740.characterInfo = i5742
  request.r(i5741[5], i5741[6], 0, i5740, 'texture')
  i5740.originalFontSize = i5741[7]
  return i5740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5747 = data
  i5746.index = i5747[0]
  i5746.advance = i5747[1]
  i5746.bearing = i5747[2]
  i5746.glyphWidth = i5747[3]
  i5746.glyphHeight = i5747[4]
  i5746.minX = i5747[5]
  i5746.maxX = i5747[6]
  i5746.minY = i5747[7]
  i5746.maxY = i5747[8]
  i5746.uvBottomLeftX = i5747[9]
  i5746.uvBottomLeftY = i5747[10]
  i5746.uvBottomRightX = i5747[11]
  i5746.uvBottomRightY = i5747[12]
  i5746.uvTopLeftX = i5747[13]
  i5746.uvTopLeftY = i5747[14]
  i5746.uvTopRightX = i5747[15]
  i5746.uvTopRightY = i5747[16]
  return i5746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i5748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i5749 = data
  i5748.name = i5749[0]
  var i5751 = i5749[1]
  var i5750 = []
  for(var i = 0; i < i5751.length; i += 1) {
    i5750.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i5751[i + 0]) );
  }
  i5748.layers = i5750
  var i5753 = i5749[2]
  var i5752 = []
  for(var i = 0; i < i5753.length; i += 1) {
    i5752.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i5753[i + 0]) );
  }
  i5748.parameters = i5752
  i5748.animationClips = i5749[3]
  i5748.avatarUnsupported = i5749[4]
  return i5748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i5756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i5757 = data
  i5756.name = i5757[0]
  i5756.defaultWeight = i5757[1]
  i5756.blendingMode = i5757[2]
  i5756.avatarMask = i5757[3]
  i5756.syncedLayerIndex = i5757[4]
  i5756.syncedLayerAffectsTiming = !!i5757[5]
  i5756.syncedLayers = i5757[6]
  i5756.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5757[7], i5756.stateMachine)
  return i5756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i5758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i5759 = data
  i5758.id = i5759[0]
  i5758.name = i5759[1]
  i5758.path = i5759[2]
  var i5761 = i5759[3]
  var i5760 = []
  for(var i = 0; i < i5761.length; i += 1) {
    i5760.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i5761[i + 0]) );
  }
  i5758.states = i5760
  var i5763 = i5759[4]
  var i5762 = []
  for(var i = 0; i < i5763.length; i += 1) {
    i5762.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i5763[i + 0]) );
  }
  i5758.machines = i5762
  var i5765 = i5759[5]
  var i5764 = []
  for(var i = 0; i < i5765.length; i += 1) {
    i5764.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5765[i + 0]) );
  }
  i5758.entryStateTransitions = i5764
  var i5767 = i5759[6]
  var i5766 = []
  for(var i = 0; i < i5767.length; i += 1) {
    i5766.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i5767[i + 0]) );
  }
  i5758.exitStateTransitions = i5766
  var i5769 = i5759[7]
  var i5768 = []
  for(var i = 0; i < i5769.length; i += 1) {
    i5768.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5769[i + 0]) );
  }
  i5758.anyStateTransitions = i5768
  i5758.defaultStateId = i5759[8]
  return i5758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i5772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i5773 = data
  i5772.id = i5773[0]
  i5772.name = i5773[1]
  i5772.cycleOffset = i5773[2]
  i5772.cycleOffsetParameter = i5773[3]
  i5772.cycleOffsetParameterActive = !!i5773[4]
  i5772.mirror = !!i5773[5]
  i5772.mirrorParameter = i5773[6]
  i5772.mirrorParameterActive = !!i5773[7]
  i5772.motionId = i5773[8]
  i5772.nameHash = i5773[9]
  i5772.fullPathHash = i5773[10]
  i5772.speed = i5773[11]
  i5772.speedParameter = i5773[12]
  i5772.speedParameterActive = !!i5773[13]
  i5772.tag = i5773[14]
  i5772.tagHash = i5773[15]
  i5772.writeDefaultValues = !!i5773[16]
  var i5775 = i5773[17]
  var i5774 = []
  for(var i = 0; i < i5775.length; i += 2) {
  request.r(i5775[i + 0], i5775[i + 1], 2, i5774, '')
  }
  i5772.behaviours = i5774
  var i5777 = i5773[18]
  var i5776 = []
  for(var i = 0; i < i5777.length; i += 1) {
    i5776.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i5777[i + 0]) );
  }
  i5772.transitions = i5776
  return i5772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i5782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i5783 = data
  i5782.fullPath = i5783[0]
  i5782.canTransitionToSelf = !!i5783[1]
  i5782.duration = i5783[2]
  i5782.exitTime = i5783[3]
  i5782.hasExitTime = !!i5783[4]
  i5782.hasFixedDuration = !!i5783[5]
  i5782.interruptionSource = i5783[6]
  i5782.offset = i5783[7]
  i5782.orderedInterruption = !!i5783[8]
  i5782.destinationStateId = i5783[9]
  i5782.isExit = !!i5783[10]
  i5782.mute = !!i5783[11]
  i5782.solo = !!i5783[12]
  var i5785 = i5783[13]
  var i5784 = []
  for(var i = 0; i < i5785.length; i += 1) {
    i5784.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5785[i + 0]) );
  }
  i5782.conditions = i5784
  return i5782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i5790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i5791 = data
  i5790.destinationStateId = i5791[0]
  i5790.isExit = !!i5791[1]
  i5790.mute = !!i5791[2]
  i5790.solo = !!i5791[3]
  var i5793 = i5791[4]
  var i5792 = []
  for(var i = 0; i < i5793.length; i += 1) {
    i5792.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i5793[i + 0]) );
  }
  i5790.conditions = i5792
  return i5790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i5796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i5797 = data
  i5796.mode = i5797[0]
  i5796.parameter = i5797[1]
  i5796.threshold = i5797[2]
  return i5796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i5800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i5801 = data
  i5800.defaultBool = !!i5801[0]
  i5800.defaultFloat = i5801[1]
  i5800.defaultInt = i5801[2]
  i5800.name = i5801[3]
  i5800.nameHash = i5801[4]
  i5800.type = i5801[5]
  return i5800
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5802 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5803 = data
  i5802.useSafeMode = !!i5803[0]
  i5802.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5803[1], i5802.safeModeOptions)
  i5802.timeScale = i5803[2]
  i5802.unscaledTimeScale = i5803[3]
  i5802.useSmoothDeltaTime = !!i5803[4]
  i5802.maxSmoothUnscaledTime = i5803[5]
  i5802.rewindCallbackMode = i5803[6]
  i5802.showUnityEditorReport = !!i5803[7]
  i5802.logBehaviour = i5803[8]
  i5802.drawGizmos = !!i5803[9]
  i5802.defaultRecyclable = !!i5803[10]
  i5802.defaultAutoPlay = i5803[11]
  i5802.defaultUpdateType = i5803[12]
  i5802.defaultTimeScaleIndependent = !!i5803[13]
  i5802.defaultEaseType = i5803[14]
  i5802.defaultEaseOvershootOrAmplitude = i5803[15]
  i5802.defaultEasePeriod = i5803[16]
  i5802.defaultAutoKill = !!i5803[17]
  i5802.defaultLoopType = i5803[18]
  i5802.debugMode = !!i5803[19]
  i5802.debugStoreTargetId = !!i5803[20]
  i5802.showPreviewPanel = !!i5803[21]
  i5802.storeSettingsLocation = i5803[22]
  i5802.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5803[23], i5802.modules)
  i5802.createASMDEF = !!i5803[24]
  i5802.showPlayingTweens = !!i5803[25]
  i5802.showPausedTweens = !!i5803[26]
  return i5802
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5804 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5805 = data
  i5804.logBehaviour = i5805[0]
  i5804.nestedTweenFailureBehaviour = i5805[1]
  return i5804
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5806 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5807 = data
  i5806.showPanel = !!i5807[0]
  i5806.audioEnabled = !!i5807[1]
  i5806.physicsEnabled = !!i5807[2]
  i5806.physics2DEnabled = !!i5807[3]
  i5806.spriteEnabled = !!i5807[4]
  i5806.uiEnabled = !!i5807[5]
  i5806.textMeshProEnabled = !!i5807[6]
  i5806.tk2DEnabled = !!i5807[7]
  i5806.deAudioEnabled = !!i5807[8]
  i5806.deUnityExtendedEnabled = !!i5807[9]
  i5806.epoOutlineEnabled = !!i5807[10]
  return i5806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5809 = data
  var i5811 = i5809[0]
  var i5810 = []
  for(var i = 0; i < i5811.length; i += 1) {
    i5810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5811[i + 0]) );
  }
  i5808.files = i5810
  i5808.componentToPrefabIds = i5809[1]
  return i5808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5815 = data
  i5814.path = i5815[0]
  request.r(i5815[1], i5815[2], 0, i5814, 'unityObject')
  return i5814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5817 = data
  var i5819 = i5817[0]
  var i5818 = []
  for(var i = 0; i < i5819.length; i += 1) {
    i5818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5819[i + 0]) );
  }
  i5816.scriptsExecutionOrder = i5818
  var i5821 = i5817[1]
  var i5820 = []
  for(var i = 0; i < i5821.length; i += 1) {
    i5820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5821[i + 0]) );
  }
  i5816.sortingLayers = i5820
  var i5823 = i5817[2]
  var i5822 = []
  for(var i = 0; i < i5823.length; i += 1) {
    i5822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5823[i + 0]) );
  }
  i5816.cullingLayers = i5822
  i5816.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5817[3], i5816.timeSettings)
  i5816.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5817[4], i5816.physicsSettings)
  i5816.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5817[5], i5816.physics2DSettings)
  i5816.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5817[6], i5816.qualitySettings)
  i5816.enableRealtimeShadows = !!i5817[7]
  i5816.enableAutoInstancing = !!i5817[8]
  i5816.enableStaticBatching = !!i5817[9]
  i5816.enableDynamicBatching = !!i5817[10]
  i5816.usePreservativeDynamicBatching = !!i5817[11]
  i5816.lightmapEncodingQuality = i5817[12]
  i5816.desiredColorSpace = i5817[13]
  var i5825 = i5817[14]
  var i5824 = []
  for(var i = 0; i < i5825.length; i += 1) {
    i5824.push( i5825[i + 0] );
  }
  i5816.allTags = i5824
  return i5816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5829 = data
  i5828.name = i5829[0]
  i5828.value = i5829[1]
  return i5828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5833 = data
  i5832.id = i5833[0]
  i5832.name = i5833[1]
  i5832.value = i5833[2]
  return i5832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5837 = data
  i5836.id = i5837[0]
  i5836.name = i5837[1]
  return i5836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5839 = data
  i5838.fixedDeltaTime = i5839[0]
  i5838.maximumDeltaTime = i5839[1]
  i5838.timeScale = i5839[2]
  i5838.maximumParticleTimestep = i5839[3]
  return i5838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5841 = data
  i5840.gravity = new pc.Vec3( i5841[0], i5841[1], i5841[2] )
  i5840.defaultSolverIterations = i5841[3]
  i5840.bounceThreshold = i5841[4]
  i5840.autoSyncTransforms = !!i5841[5]
  i5840.autoSimulation = !!i5841[6]
  var i5843 = i5841[7]
  var i5842 = []
  for(var i = 0; i < i5843.length; i += 1) {
    i5842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5843[i + 0]) );
  }
  i5840.collisionMatrix = i5842
  return i5840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5847 = data
  i5846.enabled = !!i5847[0]
  i5846.layerId = i5847[1]
  i5846.otherLayerId = i5847[2]
  return i5846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5849 = data
  request.r(i5849[0], i5849[1], 0, i5848, 'material')
  i5848.gravity = new pc.Vec2( i5849[2], i5849[3] )
  i5848.positionIterations = i5849[4]
  i5848.velocityIterations = i5849[5]
  i5848.velocityThreshold = i5849[6]
  i5848.maxLinearCorrection = i5849[7]
  i5848.maxAngularCorrection = i5849[8]
  i5848.maxTranslationSpeed = i5849[9]
  i5848.maxRotationSpeed = i5849[10]
  i5848.baumgarteScale = i5849[11]
  i5848.baumgarteTOIScale = i5849[12]
  i5848.timeToSleep = i5849[13]
  i5848.linearSleepTolerance = i5849[14]
  i5848.angularSleepTolerance = i5849[15]
  i5848.defaultContactOffset = i5849[16]
  i5848.autoSimulation = !!i5849[17]
  i5848.queriesHitTriggers = !!i5849[18]
  i5848.queriesStartInColliders = !!i5849[19]
  i5848.callbacksOnDisable = !!i5849[20]
  i5848.reuseCollisionCallbacks = !!i5849[21]
  i5848.autoSyncTransforms = !!i5849[22]
  var i5851 = i5849[23]
  var i5850 = []
  for(var i = 0; i < i5851.length; i += 1) {
    i5850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5851[i + 0]) );
  }
  i5848.collisionMatrix = i5850
  return i5848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5855 = data
  i5854.enabled = !!i5855[0]
  i5854.layerId = i5855[1]
  i5854.otherLayerId = i5855[2]
  return i5854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5857 = data
  var i5859 = i5857[0]
  var i5858 = []
  for(var i = 0; i < i5859.length; i += 1) {
    i5858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5859[i + 0]) );
  }
  i5856.qualityLevels = i5858
  var i5861 = i5857[1]
  var i5860 = []
  for(var i = 0; i < i5861.length; i += 1) {
    i5860.push( i5861[i + 0] );
  }
  i5856.names = i5860
  i5856.shadows = i5857[2]
  i5856.anisotropicFiltering = i5857[3]
  i5856.antiAliasing = i5857[4]
  i5856.lodBias = i5857[5]
  i5856.shadowCascades = i5857[6]
  i5856.shadowDistance = i5857[7]
  i5856.shadowmaskMode = i5857[8]
  i5856.shadowProjection = i5857[9]
  i5856.shadowResolution = i5857[10]
  i5856.softParticles = !!i5857[11]
  i5856.softVegetation = !!i5857[12]
  i5856.activeColorSpace = i5857[13]
  i5856.desiredColorSpace = i5857[14]
  i5856.masterTextureLimit = i5857[15]
  i5856.maxQueuedFrames = i5857[16]
  i5856.particleRaycastBudget = i5857[17]
  i5856.pixelLightCount = i5857[18]
  i5856.realtimeReflectionProbes = !!i5857[19]
  i5856.shadowCascade2Split = i5857[20]
  i5856.shadowCascade4Split = new pc.Vec3( i5857[21], i5857[22], i5857[23] )
  i5856.streamingMipmapsActive = !!i5857[24]
  i5856.vSyncCount = i5857[25]
  i5856.asyncUploadBufferSize = i5857[26]
  i5856.asyncUploadTimeSlice = i5857[27]
  i5856.billboardsFaceCameraPosition = !!i5857[28]
  i5856.shadowNearPlaneOffset = i5857[29]
  i5856.streamingMipmapsMemoryBudget = i5857[30]
  i5856.maximumLODLevel = i5857[31]
  i5856.streamingMipmapsAddAllCameras = !!i5857[32]
  i5856.streamingMipmapsMaxLevelReduction = i5857[33]
  i5856.streamingMipmapsRenderersPerFrame = i5857[34]
  i5856.resolutionScalingFixedDPIFactor = i5857[35]
  i5856.streamingMipmapsMaxFileIORequests = i5857[36]
  i5856.currentQualityLevel = i5857[37]
  return i5856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i5864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i5865 = data
  var i5867 = i5865[0]
  var i5866 = []
  for(var i = 0; i < i5867.length; i += 1) {
    i5866.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i5867[i + 0]) );
  }
  i5864.groups = i5866
  var i5869 = i5865[1]
  var i5868 = []
  for(var i = 0; i < i5869.length; i += 1) {
    i5868.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i5869[i + 0]) );
  }
  i5864.snapshots = i5868
  return i5864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i5872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i5873 = data
  i5872.id = i5873[0]
  i5872.childGroupIds = i5873[1]
  i5872.name = i5873[2]
  return i5872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i5876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i5877 = data
  i5876.id = i5877[0]
  var i5879 = i5877[1]
  var i5878 = []
  for(var i = 0; i < i5879.length; i += 1) {
    i5878.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i5879[i + 0]) );
  }
  i5876.parameters = i5878
  return i5876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i5882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i5883 = data
  i5882.name = i5883[0]
  i5882.value = i5883[1]
  return i5882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5887 = data
  i5886.weight = i5887[0]
  i5886.vertices = i5887[1]
  i5886.normals = i5887[2]
  i5886.tangents = i5887[3]
  return i5886
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[85],"86":[52],"87":[88],"89":[88],"90":[88],"91":[88],"92":[88],"93":[88],"94":[88],"95":[46],"96":[46],"97":[46],"98":[46],"99":[46],"100":[46],"101":[46],"102":[46],"103":[46],"104":[46],"105":[46],"106":[46],"107":[46],"108":[52],"109":[110],"111":[112],"113":[112],"63":[57],"114":[41],"115":[15],"116":[11],"117":[15],"118":[119],"120":[119],"121":[10],"21":[11],"122":[15],"19":[15],"123":[57],"124":[57],"66":[63],"58":[67,57],"125":[57],"65":[63],"126":[57],"127":[57],"128":[57],"129":[57],"130":[57],"131":[57],"132":[57],"133":[57],"134":[57],"135":[67,57],"136":[57],"137":[57],"138":[57],"139":[57],"59":[67,57],"140":[57],"141":[71],"142":[71],"72":[71],"143":[71],"144":[52],"145":[52]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","MenuLevel","UnityEngine.GameObject","DG.Tweening.DOTweenAnimation","UnityEngine.BoxCollider2D","UnityEngine.AudioClip","IntroLevelAnim","Level_PoseController","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.U2D.Animation.SpriteSkin","BD_AnimationHelper","SpriteButton","PlayableRouter","UnityEngine.TrailRenderer","Level1_Face_Playable","InteractableBones","UnityEngine.AudioSource","BasicDrag","BD_CameraFollow","BD_ToolRotate","DraggableObject","DO_CameraFollow","ScratchCardAsset.ScratchCard","BD_Progress","ScratchCardAsset.ScratchCardManager","PlayableCTA","ScratchCardAsset.EraseProgress","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.CircleCollider2D","UnityEngine.LineRenderer","TextureOffsetScroller","Lvl1_EyeOpenClose","Lvl1_EyeOpenClose_Shampoo","BD_AnimatorDrag","UnityEngine.Rigidbody2D","ActionOnTap","BD_ProgressHelper","BD_Clamp","Lvl1_Face_AddPrimer","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "18.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "7Sept2026_CompleteLevel_1_3_v1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1720";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4364";

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

Deserializers.buildID = "9b7ec1a3-6056-4eef-9a4b-6a2a4e9aee3f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

