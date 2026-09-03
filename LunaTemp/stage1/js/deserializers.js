var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.JointSpring' )
  var i725 = data
  i724.spring = i725[0]
  i724.damper = i725[1]
  i724.targetPosition = i725[2]
  return i724
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.JointMotor' )
  var i727 = data
  i726.m_TargetVelocity = i727[0]
  i726.m_Force = i727[1]
  i726.m_FreeSpin = i727[2]
  return i726
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.JointLimits' )
  var i729 = data
  i728.m_Min = i729[0]
  i728.m_Max = i729[1]
  i728.m_Bounciness = i729[2]
  i728.m_BounceMinVelocity = i729[3]
  i728.m_ContactDistance = i729[4]
  i728.minBounce = i729[5]
  i728.maxBounce = i729[6]
  return i728
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.JointDrive' )
  var i731 = data
  i730.m_PositionSpring = i731[0]
  i730.m_PositionDamper = i731[1]
  i730.m_MaximumForce = i731[2]
  i730.m_UseAcceleration = i731[3]
  return i730
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i733 = data
  i732.m_Spring = i733[0]
  i732.m_Damper = i733[1]
  return i732
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i735 = data
  i734.m_Limit = i735[0]
  i734.m_Bounciness = i735[1]
  i734.m_ContactDistance = i735[2]
  return i734
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i737 = data
  i736.m_ExtremumSlip = i737[0]
  i736.m_ExtremumValue = i737[1]
  i736.m_AsymptoteSlip = i737[2]
  i736.m_AsymptoteValue = i737[3]
  i736.m_Stiffness = i737[4]
  return i736
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i739 = data
  i738.m_LowerAngle = i739[0]
  i738.m_UpperAngle = i739[1]
  return i738
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i741 = data
  i740.m_MotorSpeed = i741[0]
  i740.m_MaximumMotorTorque = i741[1]
  return i740
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i743 = data
  i742.m_DampingRatio = i743[0]
  i742.m_Frequency = i743[1]
  i742.m_Angle = i743[2]
  return i742
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i745 = data
  i744.m_LowerTranslation = i745[0]
  i744.m_UpperTranslation = i745[1]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i746 = root || new pc.UnityMaterial()
  var i747 = data
  i746.name = i747[0]
  request.r(i747[1], i747[2], 0, i746, 'shader')
  i746.renderQueue = i747[3]
  i746.enableInstancing = !!i747[4]
  var i749 = i747[5]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i749[i + 0]) );
  }
  i746.floatParameters = i748
  var i751 = i747[6]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i751[i + 0]) );
  }
  i746.colorParameters = i750
  var i753 = i747[7]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i753[i + 0]) );
  }
  i746.vectorParameters = i752
  var i755 = i747[8]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i755[i + 0]) );
  }
  i746.textureParameters = i754
  var i757 = i747[9]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i757[i + 0]) );
  }
  i746.materialFlags = i756
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i761 = data
  i760.name = i761[0]
  i760.value = i761[1]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i765 = data
  i764.name = i765[0]
  i764.value = new pc.Color(i765[1], i765[2], i765[3], i765[4])
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i769 = data
  i768.name = i769[0]
  i768.value = new pc.Vec4( i769[1], i769[2], i769[3], i769[4] )
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i773 = data
  i772.name = i773[0]
  request.r(i773[1], i773[2], 0, i772, 'value')
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i777 = data
  i776.name = i777[0]
  i776.enabled = !!i777[1]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i779 = data
  i778.name = i779[0]
  i778.width = i779[1]
  i778.height = i779[2]
  i778.mipmapCount = i779[3]
  i778.anisoLevel = i779[4]
  i778.filterMode = i779[5]
  i778.hdr = !!i779[6]
  i778.format = i779[7]
  i778.wrapMode = i779[8]
  i778.alphaIsTransparency = !!i779[9]
  i778.alphaSource = i779[10]
  i778.graphicsFormat = i779[11]
  i778.sRGBTexture = !!i779[12]
  i778.desiredColorSpace = i779[13]
  i778.wrapU = i779[14]
  i778.wrapV = i779[15]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i781 = data
  i780.name = i781[0]
  i780.halfPrecision = !!i781[1]
  i780.useSimplification = !!i781[2]
  i780.useUInt32IndexFormat = !!i781[3]
  i780.vertexCount = i781[4]
  i780.aabb = i781[5]
  var i783 = i781[6]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( !!i783[i + 0] );
  }
  i780.streams = i782
  i780.vertices = i781[7]
  var i785 = i781[8]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i785[i + 0]) );
  }
  i780.subMeshes = i784
  var i787 = i781[9]
  var i786 = []
  for(var i = 0; i < i787.length; i += 16) {
    i786.push( new pc.Mat4().setData(i787[i + 0], i787[i + 1], i787[i + 2], i787[i + 3],  i787[i + 4], i787[i + 5], i787[i + 6], i787[i + 7],  i787[i + 8], i787[i + 9], i787[i + 10], i787[i + 11],  i787[i + 12], i787[i + 13], i787[i + 14], i787[i + 15]) );
  }
  i780.bindposes = i786
  var i789 = i781[10]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i789[i + 0]) );
  }
  i780.blendShapes = i788
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i795 = data
  i794.triangles = i795[0]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i801 = data
  i800.name = i801[0]
  var i803 = i801[1]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i803[i + 0]) );
  }
  i800.frames = i802
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i805 = data
  i804.position = new pc.Vec3( i805[0], i805[1], i805[2] )
  i804.scale = new pc.Vec3( i805[3], i805[4], i805[5] )
  i804.rotation = new pc.Quat(i805[6], i805[7], i805[8], i805[9])
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i807 = data
  i806.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i807[0], i806.main)
  i806.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i807[1], i806.colorBySpeed)
  i806.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i807[2], i806.colorOverLifetime)
  i806.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i807[3], i806.emission)
  i806.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i807[4], i806.rotationBySpeed)
  i806.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i807[5], i806.rotationOverLifetime)
  i806.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i807[6], i806.shape)
  i806.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i807[7], i806.sizeBySpeed)
  i806.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i807[8], i806.sizeOverLifetime)
  i806.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i807[9], i806.textureSheetAnimation)
  i806.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i807[10], i806.velocityOverLifetime)
  i806.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i807[11], i806.noise)
  i806.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i807[12], i806.inheritVelocity)
  i806.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i807[13], i806.forceOverLifetime)
  i806.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i807[14], i806.limitVelocityOverLifetime)
  i806.useAutoRandomSeed = !!i807[15]
  i806.randomSeed = i807[16]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemMain()
  var i809 = data
  i808.duration = i809[0]
  i808.loop = !!i809[1]
  i808.prewarm = !!i809[2]
  i808.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[3], i808.startDelay)
  i808.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[4], i808.startLifetime)
  i808.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[5], i808.startSpeed)
  i808.startSize3D = !!i809[6]
  i808.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[7], i808.startSizeX)
  i808.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[8], i808.startSizeY)
  i808.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[9], i808.startSizeZ)
  i808.startRotation3D = !!i809[10]
  i808.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[11], i808.startRotationX)
  i808.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[12], i808.startRotationY)
  i808.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[13], i808.startRotationZ)
  i808.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i809[14], i808.startColor)
  i808.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[15], i808.gravityModifier)
  i808.simulationSpace = i809[16]
  request.r(i809[17], i809[18], 0, i808, 'customSimulationSpace')
  i808.simulationSpeed = i809[19]
  i808.useUnscaledTime = !!i809[20]
  i808.scalingMode = i809[21]
  i808.playOnAwake = !!i809[22]
  i808.maxParticles = i809[23]
  i808.emitterVelocityMode = i809[24]
  i808.stopAction = i809[25]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i810 = root || new pc.MinMaxCurve()
  var i811 = data
  i810.mode = i811[0]
  i810.curveMin = new pc.AnimationCurve( { keys_flow: i811[1] } )
  i810.curveMax = new pc.AnimationCurve( { keys_flow: i811[2] } )
  i810.curveMultiplier = i811[3]
  i810.constantMin = i811[4]
  i810.constantMax = i811[5]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i812 = root || new pc.MinMaxGradient()
  var i813 = data
  i812.mode = i813[0]
  i812.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i813[1], i812.gradientMin)
  i812.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i813[2], i812.gradientMax)
  i812.colorMin = new pc.Color(i813[3], i813[4], i813[5], i813[6])
  i812.colorMax = new pc.Color(i813[7], i813[8], i813[9], i813[10])
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i815 = data
  i814.mode = i815[0]
  var i817 = i815[1]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i817[i + 0]) );
  }
  i814.colorKeys = i816
  var i819 = i815[2]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i819[i + 0]) );
  }
  i814.alphaKeys = i818
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemColorBySpeed()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i821[1], i820.color)
  i820.range = new pc.Vec2( i821[2], i821[3] )
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i825 = data
  i824.color = new pc.Color(i825[0], i825[1], i825[2], i825[3])
  i824.time = i825[4]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i829 = data
  i828.alpha = i829[0]
  i828.time = i829[1]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i830 = root || new pc.ParticleSystemColorOverLifetime()
  var i831 = data
  i830.enabled = !!i831[0]
  i830.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i831[1], i830.color)
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i832 = root || new pc.ParticleSystemEmitter()
  var i833 = data
  i832.enabled = !!i833[0]
  i832.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[1], i832.rateOverTime)
  i832.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i833[2], i832.rateOverDistance)
  var i835 = i833[3]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i835[i + 0]) );
  }
  i832.bursts = i834
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i838 = root || new pc.ParticleSystemBurst()
  var i839 = data
  i838.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[0], i838.count)
  i838.cycleCount = i839[1]
  i838.minCount = i839[2]
  i838.maxCount = i839[3]
  i838.repeatInterval = i839[4]
  i838.time = i839[5]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i840 = root || new pc.ParticleSystemRotationBySpeed()
  var i841 = data
  i840.enabled = !!i841[0]
  i840.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[1], i840.x)
  i840.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[2], i840.y)
  i840.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[3], i840.z)
  i840.separateAxes = !!i841[4]
  i840.range = new pc.Vec2( i841[5], i841[6] )
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i842 = root || new pc.ParticleSystemRotationOverLifetime()
  var i843 = data
  i842.enabled = !!i843[0]
  i842.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[1], i842.x)
  i842.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[2], i842.y)
  i842.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[3], i842.z)
  i842.separateAxes = !!i843[4]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i844 = root || new pc.ParticleSystemShape()
  var i845 = data
  i844.enabled = !!i845[0]
  i844.shapeType = i845[1]
  i844.randomDirectionAmount = i845[2]
  i844.sphericalDirectionAmount = i845[3]
  i844.randomPositionAmount = i845[4]
  i844.alignToDirection = !!i845[5]
  i844.radius = i845[6]
  i844.radiusMode = i845[7]
  i844.radiusSpread = i845[8]
  i844.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[9], i844.radiusSpeed)
  i844.radiusThickness = i845[10]
  i844.angle = i845[11]
  i844.length = i845[12]
  i844.boxThickness = new pc.Vec3( i845[13], i845[14], i845[15] )
  i844.meshShapeType = i845[16]
  request.r(i845[17], i845[18], 0, i844, 'mesh')
  request.r(i845[19], i845[20], 0, i844, 'meshRenderer')
  request.r(i845[21], i845[22], 0, i844, 'skinnedMeshRenderer')
  i844.useMeshMaterialIndex = !!i845[23]
  i844.meshMaterialIndex = i845[24]
  i844.useMeshColors = !!i845[25]
  i844.normalOffset = i845[26]
  i844.arc = i845[27]
  i844.arcMode = i845[28]
  i844.arcSpread = i845[29]
  i844.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[30], i844.arcSpeed)
  i844.donutRadius = i845[31]
  i844.position = new pc.Vec3( i845[32], i845[33], i845[34] )
  i844.rotation = new pc.Vec3( i845[35], i845[36], i845[37] )
  i844.scale = new pc.Vec3( i845[38], i845[39], i845[40] )
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i846 = root || new pc.ParticleSystemSizeBySpeed()
  var i847 = data
  i846.enabled = !!i847[0]
  i846.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[1], i846.x)
  i846.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[2], i846.y)
  i846.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[3], i846.z)
  i846.separateAxes = !!i847[4]
  i846.range = new pc.Vec2( i847[5], i847[6] )
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i848 = root || new pc.ParticleSystemSizeOverLifetime()
  var i849 = data
  i848.enabled = !!i849[0]
  i848.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[1], i848.x)
  i848.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[2], i848.y)
  i848.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[3], i848.z)
  i848.separateAxes = !!i849[4]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i850 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i851 = data
  i850.enabled = !!i851[0]
  i850.mode = i851[1]
  i850.animation = i851[2]
  i850.numTilesX = i851[3]
  i850.numTilesY = i851[4]
  i850.useRandomRow = !!i851[5]
  i850.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[6], i850.frameOverTime)
  i850.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[7], i850.startFrame)
  i850.cycleCount = i851[8]
  i850.rowIndex = i851[9]
  i850.flipU = i851[10]
  i850.flipV = i851[11]
  i850.spriteCount = i851[12]
  var i853 = i851[13]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 2, i852, '')
  }
  i850.sprites = i852
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i856 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i857 = data
  i856.enabled = !!i857[0]
  i856.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[1], i856.x)
  i856.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[2], i856.y)
  i856.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[3], i856.z)
  i856.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[4], i856.radial)
  i856.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[5], i856.speedModifier)
  i856.space = i857[6]
  i856.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[7], i856.orbitalX)
  i856.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[8], i856.orbitalY)
  i856.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[9], i856.orbitalZ)
  i856.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[10], i856.orbitalOffsetX)
  i856.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[11], i856.orbitalOffsetY)
  i856.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[12], i856.orbitalOffsetZ)
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i858 = root || new pc.ParticleSystemNoise()
  var i859 = data
  i858.enabled = !!i859[0]
  i858.separateAxes = !!i859[1]
  i858.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[2], i858.strengthX)
  i858.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[3], i858.strengthY)
  i858.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[4], i858.strengthZ)
  i858.frequency = i859[5]
  i858.damping = !!i859[6]
  i858.octaveCount = i859[7]
  i858.octaveMultiplier = i859[8]
  i858.octaveScale = i859[9]
  i858.quality = i859[10]
  i858.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[11], i858.scrollSpeed)
  i858.scrollSpeedMultiplier = i859[12]
  i858.remapEnabled = !!i859[13]
  i858.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[14], i858.remapX)
  i858.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[15], i858.remapY)
  i858.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[16], i858.remapZ)
  i858.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[17], i858.positionAmount)
  i858.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[18], i858.rotationAmount)
  i858.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[19], i858.sizeAmount)
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i860 = root || new pc.ParticleSystemInheritVelocity()
  var i861 = data
  i860.enabled = !!i861[0]
  i860.mode = i861[1]
  i860.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[2], i860.curve)
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i862 = root || new pc.ParticleSystemForceOverLifetime()
  var i863 = data
  i862.enabled = !!i863[0]
  i862.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[1], i862.x)
  i862.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[2], i862.y)
  i862.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[3], i862.z)
  i862.space = i863[4]
  i862.randomized = !!i863[5]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i864 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i865 = data
  i864.enabled = !!i865[0]
  i864.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i865[1], i864.limit)
  i864.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i865[2], i864.limitX)
  i864.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i865[3], i864.limitY)
  i864.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i865[4], i864.limitZ)
  i864.dampen = i865[5]
  i864.separateAxes = !!i865[6]
  i864.space = i865[7]
  i864.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i865[8], i864.drag)
  i864.multiplyDragByParticleSize = !!i865[9]
  i864.multiplyDragByParticleVelocity = !!i865[10]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'mesh')
  i866.meshCount = i867[2]
  i866.activeVertexStreamsCount = i867[3]
  i866.alignment = i867[4]
  i866.renderMode = i867[5]
  i866.sortMode = i867[6]
  i866.lengthScale = i867[7]
  i866.velocityScale = i867[8]
  i866.cameraVelocityScale = i867[9]
  i866.normalDirection = i867[10]
  i866.sortingFudge = i867[11]
  i866.minParticleSize = i867[12]
  i866.maxParticleSize = i867[13]
  i866.pivot = new pc.Vec3( i867[14], i867[15], i867[16] )
  request.r(i867[17], i867[18], 0, i866, 'trailMaterial')
  i866.applyActiveColorSpace = !!i867[19]
  i866.enabled = !!i867[20]
  request.r(i867[21], i867[22], 0, i866, 'sharedMaterial')
  var i869 = i867[23]
  var i868 = []
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 2, i868, '')
  }
  i866.sharedMaterials = i868
  i866.receiveShadows = !!i867[24]
  i866.shadowCastingMode = i867[25]
  i866.sortingLayerID = i867[26]
  i866.sortingOrder = i867[27]
  i866.lightmapIndex = i867[28]
  i866.lightmapSceneIndex = i867[29]
  i866.lightmapScaleOffset = new pc.Vec4( i867[30], i867[31], i867[32], i867[33] )
  i866.lightProbeUsage = i867[34]
  i866.reflectionProbeUsage = i867[35]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i873 = data
  i872.name = i873[0]
  i872.tagId = i873[1]
  i872.enabled = !!i873[2]
  i872.isStatic = !!i873[3]
  i872.layer = i873[4]
  return i872
}

Deserializers["Level1_Hair_Playable"] = function (request, data, root) {
  var i874 = root || request.c( 'Level1_Hair_Playable' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'wetCloth')
  request.r(i875[2], i875[3], 0, i874, 'waterDripingParticle')
  i874.ZoomStep1 = request.d('ZoomPos', i875[4], i874.ZoomStep1)
  var i877 = i875[5]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i874.AllTrash = i876
  var i879 = i875[6]
  var i878 = []
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 2, i878, '')
  }
  i874.AllTrashOutlines = i878
  i874.trashDone = !!i875[7]
  i874.trashThrown = i875[8]
  i874.trashTotal = i875[9]
  request.r(i875[10], i875[11], 0, i874, 'bd_Sticky')
  i874.ZoomStep2 = request.d('ZoomPos', i875[12], i874.ZoomStep2)
  request.r(i875[13], i875[14], 0, i874, 'ToolStep2')
  request.r(i875[15], i875[16], 0, i874, 'camFollowStep2')
  var i881 = i875[17]
  var i880 = []
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 2, i880, '')
  }
  i874.AllBugOutlines = i880
  i874.ZoomStep2b = request.d('ZoomPos', i875[18], i874.ZoomStep2b)
  request.r(i875[19], i875[20], 0, i874, 'ToolStep2b')
  request.r(i875[21], i875[22], 0, i874, 'camFollowStep2b')
  request.r(i875[23], i875[24], 0, i874, 'dustColStep2')
  request.r(i875[25], i875[26], 0, i874, 'handIndicationShower')
  request.r(i875[27], i875[28], 0, i874, 'hairDirtyStatic')
  request.r(i875[29], i875[30], 0, i874, 'hairDirtyWetStatic')
  request.r(i875[31], i875[32], 0, i874, 'dryHairAnim')
  i874.ZoomStep3 = request.d('ZoomPos', i875[33], i874.ZoomStep3)
  request.r(i875[34], i875[35], 0, i874, 'ShampooOnHand')
  request.r(i875[36], i875[37], 0, i874, 'ShampooInHandCap')
  request.r(i875[38], i875[39], 0, i874, 'ToolStep3')
  request.r(i875[40], i875[41], 0, i874, 'shampooPatch')
  request.r(i875[42], i875[43], 0, i874, 'handSpriteRend')
  request.r(i875[44], i875[45], 0, i874, 'bottleDefault')
  request.r(i875[46], i875[47], 0, i874, 'bottlePressed')
  request.r(i875[48], i875[49], 0, i874, 'shampooDropping')
  request.r(i875[50], i875[51], 0, i874, 'bottleOpenSfx')
  request.r(i875[52], i875[53], 0, i874, 'bottleSqueezSfx')
  request.r(i875[54], i875[55], 0, i874, 'bottlePourSfx')
  i874.ZoomStep4 = request.d('ZoomPos', i875[56], i874.ZoomStep4)
  request.r(i875[57], i875[58], 0, i874, 'ToolStep4')
  request.r(i875[59], i875[60], 0, i874, 'camFollowStep4')
  request.r(i875[61], i875[62], 0, i874, 'foamLight_E')
  request.r(i875[63], i875[64], 0, i874, 'foam2_E')
  request.r(i875[65], i875[66], 0, i874, 'foamCol')
  request.r(i875[67], i875[68], 0, i874, 'handIndicationHands')
  request.r(i875[69], i875[70], 0, i874, 'progressStep4')
  i874.ZoomStep5a = request.d('ZoomPos', i875[71], i874.ZoomStep5a)
  i874.ZoomStep5b = request.d('ZoomPos', i875[72], i874.ZoomStep5b)
  request.r(i875[73], i875[74], 0, i874, 'ShowerDamaged')
  request.r(i875[75], i875[76], 0, i874, 'ShowerDamaged_Drag')
  request.r(i875[77], i875[78], 0, i874, 'ShowerBackDMG')
  request.r(i875[79], i875[80], 0, i874, 'ShowerInner_dirty')
  request.r(i875[81], i875[82], 0, i874, 'ShowerInner_Target')
  request.r(i875[83], i875[84], 0, i874, 'ShowerFrontDMG')
  request.r(i875[85], i875[86], 0, i874, 'OpenShowerIndication')
  request.r(i875[87], i875[88], 0, i874, 'CloseShowerIndication')
  request.r(i875[89], i875[90], 0, i874, 'showrOpenInput')
  request.r(i875[91], i875[92], 0, i874, 'showerDisk')
  request.r(i875[93], i875[94], 0, i874, 'showerFixReverseAnimDrag')
  request.r(i875[95], i875[96], 0, i874, 'showerDragDamage')
  request.r(i875[97], i875[98], 0, i874, 'ToolStep5Rev')
  request.r(i875[99], i875[100], 0, i874, 'handIndicationShowerPlace')
  i874.ZoomStep5 = request.d('ZoomPos', i875[101], i874.ZoomStep5)
  request.r(i875[102], i875[103], 0, i874, 'ToolStep5')
  request.r(i875[104], i875[105], 0, i874, 'ToolStep5Placeable')
  request.r(i875[106], i875[107], 0, i874, 'toolStep5Progress')
  request.r(i875[108], i875[109], 0, i874, 'toolStep5ProgressHelp')
  request.r(i875[110], i875[111], 0, i874, 'camFollowStep5')
  request.r(i875[112], i875[113], 0, i874, 'showerRender')
  request.r(i875[114], i875[115], 0, i874, 'showerDirty')
  request.r(i875[116], i875[117], 0, i874, 'showerClean')
  request.r(i875[118], i875[119], 0, i874, 'waterShotParticle')
  request.r(i875[120], i875[121], 0, i874, 'showerProblemClip')
  request.r(i875[122], i875[123], 0, i874, 'FixErrorClip')
  i874.ZoomStep6 = request.d('ZoomPos', i875[124], i874.ZoomStep6)
  request.r(i875[125], i875[126], 0, i874, 'ToolStep6')
  request.r(i875[127], i875[128], 0, i874, 'camFollowStep6')
  request.r(i875[129], i875[130], 0, i874, 'wetHairs_E')
  request.r(i875[131], i875[132], 0, i874, 'hairDryFade')
  i874.ZoomStep7 = request.d('ZoomPos', i875[133], i874.ZoomStep7)
  request.r(i875[134], i875[135], 0, i874, 'ToolStep7')
  request.r(i875[136], i875[137], 0, i874, 'camFollowStep7')
  request.r(i875[138], i875[139], 0, i874, 'dryHairs_E')
  request.r(i875[140], i875[141], 0, i874, 'dryCombed_BG')
  request.r(i875[142], i875[143], 0, i874, 'brushController')
  request.r(i875[144], i875[145], 0, i874, 'handIndicationBrush')
  i874.levelName = i875[146]
  i874.levelReward = i875[147]
  request.r(i875[148], i875[149], 0, i874, 'LevelIcon')
  request.r(i875[150], i875[151], 0, i874, 'Level_BG')
  var i883 = i875[152]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 1, i882, '')
  }
  i874.ToolIcons = i882
  var i885 = i875[153]
  var i884 = []
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 2, i884, '')
  }
  i874.AllDrags = i884
  var i887 = i875[154]
  var i886 = []
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 2, i886, '')
  }
  i874.AllSources = i886
  var i889 = i875[155]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i874.AllScratches = i888
  i874.stepsDone = i875[156]
  i874.levelNo = i875[157]
  i874.partNo = i875[158]
  var i891 = i875[159]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i874.disableOnLevelComplete = i890
  request.r(i875[160], i875[161], 0, i874, 'bubbleGum')
  return i874
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i892 = root || request.c( 'ZoomPos' )
  var i893 = data
  i892.CameraPos = new pc.Vec3( i893[0], i893[1], i893[2] )
  i892.CameraFOV = i893[3]
  return i892
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i906 = root || request.c( 'PlayableCTA' )
  var i907 = data
  i906.trigger = i907[0]
  i906.afterSeconds = i907[1]
  i906.afterTaps = i907[2]
  request.r(i907[3], i907[4], 0, i906, 'scratchProgress')
  i906.scratchIndex = i907[5]
  i906.progressThreshold = i907[6]
  request.r(i907[7], i907[8], 0, i906, 'watchedTool')
  i906.blockInputOnFire = !!i907[9]
  i906.refireOnEveryTap = !!i907[10]
  i906.refireDelay = i907[11]
  i906.showEndCard = !!i907[12]
  request.r(i907[13], i907[14], 0, i906, 'endCard')
  i906.showEndCardOnProgressTrigger = !!i907[15]
  i906.showEndCardOnToolAppearTrigger = !!i907[16]
  i906.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i907[17], i906.onCtaFired)
  i906.logWhenFired = !!i907[18]
  return i906
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i909 = data
  i908.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i909[0], i908.m_PersistentCalls)
  return i908
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i911 = data
  var i913 = i911[0]
  var i912 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i913.length; i += 1) {
    i912.add(request.d('UnityEngine.Events.PersistentCall', i913[i + 0]));
  }
  i910.m_Calls = i912
  return i910
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'm_Target')
  i916.m_TargetAssemblyTypeName = i917[2]
  i916.m_MethodName = i917[3]
  i916.m_Mode = i917[4]
  i916.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i917[5], i916.m_Arguments)
  i916.m_CallState = i917[6]
  return i916
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i918 = root || request.c( 'PlayableFadeCoverSettings' )
  var i919 = data
  i918.revealDelay = i919[0]
  i918.revealDuration = i919[1]
  return i918
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i920 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'MainCamera')
  i920.RenderType = i921[2]
  request.r(i921[3], i921[4], 0, i920, 'ScratchSurfaceSprite')
  i920.ScratchSurfaceSpriteHasAlpha = !!i921[5]
  i920.MaskProgressCutOffValue = i921[6]
  request.r(i921[7], i921[8], 0, i920, 'EraseTexture')
  i920.EraseTextureScale = new pc.Vec2( i921[9], i921[10] )
  i920.InputEnabled = !!i921[11]
  request.r(i921[12], i921[13], 0, i920, 'Card')
  i920.Mode = i921[14]
  request.r(i921[15], i921[16], 0, i920, 'Progress')
  request.r(i921[17], i921[18], 0, i920, 'MeshCard')
  request.r(i921[19], i921[20], 0, i920, 'SpriteCard')
  request.r(i921[21], i921[22], 0, i920, 'ImageCard')
  request.r(i921[23], i921[24], 0, i920, 'MaskShader')
  request.r(i921[25], i921[26], 0, i920, 'BrushShader')
  request.r(i921[27], i921[28], 0, i920, 'MaskProgressShader')
  request.r(i921[29], i921[30], 0, i920, 'MaskProgressCutOffShader')
  return i920
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i922 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'MainCamera')
  request.r(i923[2], i923[3], 0, i922, 'Surface')
  i922.RenderTextureQuality = i923[4]
  request.r(i923[5], i923[6], 0, i922, 'Eraser')
  request.r(i923[7], i923[8], 0, i922, 'Progress')
  request.r(i923[9], i923[10], 0, i922, 'ScratchSurface')
  request.r(i923[11], i923[12], 0, i922, 'RenderTexture')
  i922.BrushScale = new pc.Vec2( i923[13], i923[14] )
  request.r(i923[15], i923[16], 0, i922, 'ToolTip')
  i922.InputEnabled = !!i923[17]
  i922.IsScratching = !!i923[18]
  i922.useChangingScale = !!i923[19]
  i922.useGivenBrushScale = !!i923[20]
  i922.canSpreadMask = !!i923[21]
  i922.shouldPaintHoles = !!i923[22]
  i922.canRotateTip = !!i923[23]
  i922._mode = i923[24]
  return i922
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i924 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'Card')
  i924.currentProgress = i925[2]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'animatorController')
  request.r(i927[2], i927[3], 0, i926, 'avatar')
  i926.updateMode = i927[4]
  i926.hasTransformHierarchy = !!i927[5]
  i926.applyRootMotion = !!i927[6]
  var i929 = i927[7]
  var i928 = []
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 2, i928, '')
  }
  i926.humanBones = i928
  i926.enabled = !!i927[8]
  return i926
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i932 = root || request.c( 'BD_AnimationHelper' )
  var i933 = data
  i932.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i933[0], i932.OnAnimationComplete)
  request.r(i933[1], i933[2], 0, i932, 'sfxClip')
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i935 = data
  i934.color = new pc.Color(i935[0], i935[1], i935[2], i935[3])
  request.r(i935[4], i935[5], 0, i934, 'sprite')
  i934.flipX = !!i935[6]
  i934.flipY = !!i935[7]
  i934.drawMode = i935[8]
  i934.size = new pc.Vec2( i935[9], i935[10] )
  i934.tileMode = i935[11]
  i934.adaptiveModeThreshold = i935[12]
  i934.maskInteraction = i935[13]
  i934.spriteSortPoint = i935[14]
  i934.enabled = !!i935[15]
  request.r(i935[16], i935[17], 0, i934, 'sharedMaterial')
  var i937 = i935[18]
  var i936 = []
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 2, i936, '')
  }
  i934.sharedMaterials = i936
  i934.receiveShadows = !!i935[19]
  i934.shadowCastingMode = i935[20]
  i934.sortingLayerID = i935[21]
  i934.sortingOrder = i935[22]
  i934.lightmapIndex = i935[23]
  i934.lightmapSceneIndex = i935[24]
  i934.lightmapScaleOffset = new pc.Vec4( i935[25], i935[26], i935[27], i935[28] )
  i934.lightProbeUsage = i935[29]
  i934.reflectionProbeUsage = i935[30]
  return i934
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'm_RootBone')
  var i941 = i939[2]
  var i940 = []
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 2, i940, '')
  }
  i938.m_BoneTransforms = i940
  i938.m_AlwaysUpdate = !!i939[3]
  i938.m_AutoRebind = !!i939[4]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i943 = data
  var i945 = i943[0]
  var i944 = []
  for(var i = 0; i < i945.length; i += 3) {
    i944.push( new pc.Vec3( i945[i + 0], i945[i + 1], i945[i + 2] ) );
  }
  i942.positions = i944
  i942.positionCount = i943[1]
  i942.time = i943[2]
  i942.startWidth = i943[3]
  i942.endWidth = i943[4]
  i942.widthMultiplier = i943[5]
  i942.autodestruct = !!i943[6]
  i942.emitting = !!i943[7]
  i942.numCornerVertices = i943[8]
  i942.numCapVertices = i943[9]
  i942.minVertexDistance = i943[10]
  i942.colorGradient = i943[11] ? new pc.ColorGradient(i943[11][0], i943[11][1], i943[11][2]) : null
  i942.startColor = new pc.Color(i943[12], i943[13], i943[14], i943[15])
  i942.endColor = new pc.Color(i943[16], i943[17], i943[18], i943[19])
  i942.generateLightingData = !!i943[20]
  i942.textureMode = i943[21]
  i942.alignment = i943[22]
  i942.widthCurve = new pc.AnimationCurve( { keys_flow: i943[23] } )
  i942.enabled = !!i943[24]
  request.r(i943[25], i943[26], 0, i942, 'sharedMaterial')
  var i947 = i943[27]
  var i946 = []
  for(var i = 0; i < i947.length; i += 2) {
  request.r(i947[i + 0], i947[i + 1], 2, i946, '')
  }
  i942.sharedMaterials = i946
  i942.receiveShadows = !!i943[28]
  i942.shadowCastingMode = i943[29]
  i942.sortingLayerID = i943[30]
  i942.sortingOrder = i943[31]
  i942.lightmapIndex = i943[32]
  i942.lightmapSceneIndex = i943[33]
  i942.lightmapScaleOffset = new pc.Vec4( i943[34], i943[35], i943[36], i943[37] )
  i942.lightProbeUsage = i943[38]
  i942.reflectionProbeUsage = i943[39]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i951 = data
  i950.textureMode = i951[0]
  i950.alignment = i951[1]
  i950.widthCurve = new pc.AnimationCurve( { keys_flow: i951[2] } )
  i950.colorGradient = i951[3] ? new pc.ColorGradient(i951[3][0], i951[3][1], i951[3][2]) : null
  var i953 = i951[4]
  var i952 = []
  for(var i = 0; i < i953.length; i += 3) {
    i952.push( new pc.Vec3( i953[i + 0], i953[i + 1], i953[i + 2] ) );
  }
  i950.positions = i952
  i950.positionCount = i951[5]
  i950.widthMultiplier = i951[6]
  i950.startWidth = i951[7]
  i950.endWidth = i951[8]
  i950.numCornerVertices = i951[9]
  i950.numCapVertices = i951[10]
  i950.useWorldSpace = !!i951[11]
  i950.loop = !!i951[12]
  i950.startColor = new pc.Color(i951[13], i951[14], i951[15], i951[16])
  i950.endColor = new pc.Color(i951[17], i951[18], i951[19], i951[20])
  i950.generateLightingData = !!i951[21]
  i950.enabled = !!i951[22]
  request.r(i951[23], i951[24], 0, i950, 'sharedMaterial')
  var i955 = i951[25]
  var i954 = []
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 2, i954, '')
  }
  i950.sharedMaterials = i954
  i950.receiveShadows = !!i951[26]
  i950.shadowCastingMode = i951[27]
  i950.sortingLayerID = i951[28]
  i950.sortingOrder = i951[29]
  i950.lightmapIndex = i951[30]
  i950.lightmapSceneIndex = i951[31]
  i950.lightmapScaleOffset = new pc.Vec4( i951[32], i951[33], i951[34], i951[35] )
  i950.lightProbeUsage = i951[36]
  i950.reflectionProbeUsage = i951[37]
  return i950
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i956 = root || request.c( 'StaticFixedPipe' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'lineRenderer')
  request.r(i957[2], i957[3], 0, i956, 'toolTransform')
  request.r(i957[4], i957[5], 0, i956, 'toolDirectionPoint')
  request.r(i957[6], i957[7], 0, i956, 'fixedEndPoint')
  i956.segmentCount = i957[8]
  i956.totalLength = i957[9]
  i956.constraintIterations = i957[10]
  i956.gravity = new pc.Vec3( i957[11], i957[12], i957[13] )
  i956.pipeWidth = i957[14]
  return i956
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i958 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i959 = data
  i958.targetIsSelf = !!i959[0]
  request.r(i959[1], i959[2], 0, i958, 'targetGO')
  i958.tweenTargetIsTargetGO = !!i959[3]
  i958.delay = i959[4]
  i958.duration = i959[5]
  i958.easeType = i959[6]
  i958.easeCurve = new pc.AnimationCurve( { keys_flow: i959[7] } )
  i958.loopType = i959[8]
  i958.loops = i959[9]
  i958.id = i959[10]
  i958.isRelative = !!i959[11]
  i958.isFrom = !!i959[12]
  i958.isIndependentUpdate = !!i959[13]
  i958.autoKill = !!i959[14]
  i958.autoGenerate = !!i959[15]
  i958.isActive = !!i959[16]
  i958.isValid = !!i959[17]
  request.r(i959[18], i959[19], 0, i958, 'target')
  i958.animationType = i959[20]
  i958.targetType = i959[21]
  i958.forcedTargetType = i959[22]
  i958.autoPlay = !!i959[23]
  i958.useTargetAsV3 = !!i959[24]
  i958.endValueFloat = i959[25]
  i958.endValueV3 = new pc.Vec3( i959[26], i959[27], i959[28] )
  i958.endValueV2 = new pc.Vec2( i959[29], i959[30] )
  i958.endValueColor = new pc.Color(i959[31], i959[32], i959[33], i959[34])
  i958.endValueString = i959[35]
  i958.endValueRect = UnityEngine.Rect.MinMaxRect(i959[36], i959[37], i959[38], i959[39])
  request.r(i959[40], i959[41], 0, i958, 'endValueTransform')
  i958.optionalBool0 = !!i959[42]
  i958.optionalBool1 = !!i959[43]
  i958.optionalFloat0 = i959[44]
  i958.optionalInt0 = i959[45]
  i958.optionalRotationMode = i959[46]
  i958.optionalScrambleMode = i959[47]
  i958.optionalShakeRandomnessMode = i959[48]
  i958.optionalString = i959[49]
  i958.updateType = i959[50]
  i958.isSpeedBased = !!i959[51]
  i958.hasOnStart = !!i959[52]
  i958.hasOnPlay = !!i959[53]
  i958.hasOnUpdate = !!i959[54]
  i958.hasOnStepComplete = !!i959[55]
  i958.hasOnComplete = !!i959[56]
  i958.hasOnTweenCreated = !!i959[57]
  i958.hasOnRewind = !!i959[58]
  i958.onStart = request.d('UnityEngine.Events.UnityEvent', i959[59], i958.onStart)
  i958.onPlay = request.d('UnityEngine.Events.UnityEvent', i959[60], i958.onPlay)
  i958.onUpdate = request.d('UnityEngine.Events.UnityEvent', i959[61], i958.onUpdate)
  i958.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i959[62], i958.onStepComplete)
  i958.onComplete = request.d('UnityEngine.Events.UnityEvent', i959[63], i958.onComplete)
  i958.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i959[64], i958.onTweenCreated)
  i958.onRewind = request.d('UnityEngine.Events.UnityEvent', i959[65], i958.onRewind)
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i961 = data
  i960.usedByComposite = !!i961[0]
  i960.autoTiling = !!i961[1]
  i960.size = new pc.Vec2( i961[2], i961[3] )
  i960.edgeRadius = i961[4]
  i960.enabled = !!i961[5]
  i960.isTrigger = !!i961[6]
  i960.usedByEffector = !!i961[7]
  i960.density = i961[8]
  i960.offset = new pc.Vec2( i961[9], i961[10] )
  request.r(i961[11], i961[12], 0, i960, 'material')
  return i960
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i962 = root || request.c( 'BasicDrag' )
  var i963 = data
  i962.canDrag = !!i963[0]
  i962.dragByDelta = !!i963[1]
  i962.isDragging = !!i963[2]
  i962.moveWithPointer = !!i963[3]
  i962.canReturn = !!i963[4]
  i962.jumpOnReturn = !!i963[5]
  i962.returnTime = i963[6]
  i962.Tool_Offset = new pc.Vec3( i963[7], i963[8], i963[9] )
  i962.canScaleIncrease = !!i963[10]
  i962.Self_ScaleNew = new pc.Vec3( i963[11], i963[12], i963[13] )
  i962.canRotateOnPick = !!i963[14]
  i962.startRot = new pc.Vec3( i963[15], i963[16], i963[17] )
  i962.newRot = new pc.Vec3( i963[18], i963[19], i963[20] )
  var i965 = i963[21]
  var i964 = []
  for(var i = 0; i < i965.length; i += 2) {
  request.r(i965[i + 0], i965[i + 1], 2, i964, '')
  }
  i962.childSprite = i964
  request.r(i963[22], i963[23], 0, i962, 'ToolSelectClip')
  request.r(i963[24], i963[25], 0, i962, 'ToolLoopClip')
  request.r(i963[26], i963[27], 0, i962, 'thisParticles')
  i962.onDragparticle = !!i963[28]
  request.r(i963[29], i963[30], 0, i962, 'dragParticles')
  request.r(i963[31], i963[32], 0, i962, 'anim')
  i962.startPos = new pc.Vec3( i963[33], i963[34], i963[35] )
  i962.startScale = new pc.Vec3( i963[36], i963[37], i963[38] )
  i962.Vibration = !!i963[39]
  i962.isPlacedCannotMove = !!i963[40]
  i962.isObjectMovingWhileDragging = !!i963[41]
  i962.OnMouseDownEvent = request.d('System.Action', i963[42], i962.OnMouseDownEvent)
  i962.OnMouseUpEvent = request.d('System.Action', i963[43], i962.OnMouseUpEvent)
  i962.ProgStartEvent = request.d('System.Action', i963[44], i962.ProgStartEvent)
  i962.ProgEndEvent = request.d('System.Action', i963[45], i962.ProgEndEvent)
  i962.canCallMouseUpWhenGamePaused = !!i963[46]
  i962.ClampX_L = i963[47]
  i962.ClampX_H = i963[48]
  i962.ClampY_L = i963[49]
  i962.ClampY_H = i963[50]
  i962.startOrder = i963[51]
  i962.dontResetItIsInCollider = !!i963[52]
  request.r(i963[53], i963[54], 0, i962, 'thisCollider')
  request.r(i963[55], i963[56], 0, i962, 'thisSR')
  i962.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i963[57], i962.OnMouseDownEventIndependentFromCanDrag)
  return i962
}

Deserializers["System.Action"] = function (request, data, root) {
  var i968 = root || request.c( 'System.Action' )
  var i969 = data
  return i968
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i970 = root || request.c( 'BD_Clamp' )
  var i971 = data
  i970.ClampX_L = i971[0]
  i970.ClampX_H = i971[1]
  i970.ClampY_L = i971[2]
  i970.ClampY_H = i971[3]
  return i970
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i972 = root || request.c( 'OutlinePulse' )
  var i973 = data
  i972.smallThickness = i973[0]
  i972.largeThickness = i973[1]
  i972.transitionSpeed = i973[2]
  i972.animationSpeed = i973[3]
  i972.isThickOutline = !!i973[4]
  i972.animate = !!i973[5]
  i972.hideSpriteOnly = !!i973[6]
  return i972
}

Deserializers["BD_ItemPick"] = function (request, data, root) {
  var i974 = root || request.c( 'BD_ItemPick' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'Tool')
  request.r(i975[2], i975[3], 0, i974, 'Outline')
  request.r(i975[4], i975[5], 0, i974, 'itemRend')
  request.r(i975[6], i975[7], 0, i974, 'pick_sp')
  i974.OnTap = request.d('UnityEngine.Events.UnityEvent', i975[8], i974.OnTap)
  i974.OnComplete = request.d('UnityEngine.Events.UnityEvent', i975[9], i974.OnComplete)
  request.r(i975[10], i975[11], 0, i974, 'Clip')
  i974.minDragDistance = i975[12]
  i974.isTaped = !!i975[13]
  return i974
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'm_ObjectArgument')
  i976.m_ObjectArgumentAssemblyTypeName = i977[2]
  i976.m_IntArgument = i977[3]
  i976.m_FloatArgument = i977[4]
  i976.m_StringArgument = i977[5]
  i976.m_BoolArgument = !!i977[6]
  return i976
}

Deserializers["BD_Sticky"] = function (request, data, root) {
  var i978 = root || request.c( 'BD_Sticky' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'anim')
  i978.isVerticlePull = !!i979[2]
  request.r(i979[3], i979[4], 0, i978, 'pickSfx')
  request.r(i979[5], i979[6], 0, i978, 'pulledClip')
  request.r(i979[7], i979[8], 0, i978, 'pullSource')
  i978.OnComplete = request.d('UnityEngine.Events.UnityEvent', i979[9], i978.OnComplete)
  i978.changeLayerPick = !!i979[10]
  request.r(i979[11], i979[12], 0, i978, 'sp_rendr')
  i978.def_layerNo = i979[13]
  i978.tar_LayerNo = i979[14]
  i978.direction = i979[15]
  i978.dragThreshold = i979[16]
  i978.pullDistanceToFree = i979[17]
  i978.returnSpeed = i979[18]
  i978.resistance = i979[19]
  var i981 = i979[20]
  var i980 = []
  for(var i = 0; i < i981.length; i += 2) {
  request.r(i981[i + 0], i981[i + 1], 2, i980, '')
  }
  i978.StartBones = i980
  var i983 = i979[21]
  var i982 = []
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 2, i982, '')
  }
  i978.EndBones = i982
  request.r(i979[22], i979[23], 0, i978, 'BonePivot')
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'clip')
  request.r(i985[2], i985[3], 0, i984, 'outputAudioMixerGroup')
  i984.playOnAwake = !!i985[4]
  i984.loop = !!i985[5]
  i984.time = i985[6]
  i984.volume = i985[7]
  i984.pitch = i985[8]
  i984.enabled = !!i985[9]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i987 = data
  i986.radius = i987[0]
  i986.enabled = !!i987[1]
  i986.isTrigger = !!i987[2]
  i986.usedByEffector = !!i987[3]
  i986.density = i987[4]
  i986.offset = new pc.Vec2( i987[5], i987[6] )
  request.r(i987[7], i987[8], 0, i986, 'material')
  return i986
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i988 = root || request.c( 'PlayParticlesOnCollision' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'Target')
  request.r(i989[2], i989[3], 0, i988, 'ParticlePrefab')
  i988.destroyIt = !!i989[4]
  i988.stayAtPlace = !!i989[5]
  i988.disableOnCollision = !!i989[6]
  i988.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i989[7], i988.OnCollisionEvent)
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i991 = data
  i990.frontSortingLayerID = i991[0]
  i990.frontSortingOrder = i991[1]
  i990.backSortingLayerID = i991[2]
  i990.backSortingOrder = i991[3]
  i990.alphaCutoff = i991[4]
  request.r(i991[5], i991[6], 0, i990, 'sprite')
  i990.tileMode = i991[7]
  i990.isCustomRangeActive = !!i991[8]
  i990.spriteSortPoint = i991[9]
  i990.enabled = !!i991[10]
  request.r(i991[11], i991[12], 0, i990, 'sharedMaterial')
  var i993 = i991[13]
  var i992 = []
  for(var i = 0; i < i993.length; i += 2) {
  request.r(i993[i + 0], i993[i + 1], 2, i992, '')
  }
  i990.sharedMaterials = i992
  i990.receiveShadows = !!i991[14]
  i990.shadowCastingMode = i991[15]
  i990.sortingLayerID = i991[16]
  i990.sortingOrder = i991[17]
  i990.lightmapIndex = i991[18]
  i990.lightmapSceneIndex = i991[19]
  i990.lightmapScaleOffset = new pc.Vec4( i991[20], i991[21], i991[22], i991[23] )
  i990.lightProbeUsage = i991[24]
  i990.reflectionProbeUsage = i991[25]
  return i990
}

Deserializers["PlayTweenOnHit"] = function (request, data, root) {
  var i994 = root || request.c( 'PlayTweenOnHit' )
  var i995 = data
  i994.isContinueous = !!i995[0]
  request.r(i995[1], i995[2], 0, i994, 'tool')
  var i997 = i995[3]
  var i996 = []
  for(var i = 0; i < i997.length; i += 2) {
  request.r(i997[i + 0], i997[i + 1], 2, i996, '')
  }
  i994.animsToPlay = i996
  request.r(i995[4], i995[5], 0, i994, 'tipTarget')
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1001 = data
  i1000.usedByComposite = !!i1001[0]
  i1000.autoTiling = !!i1001[1]
  var i1003 = i1001[2]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
  var i1005 = i1003[i + 0]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 2) {
    i1004.push( new pc.Vec2( i1005[i + 0], i1005[i + 1] ) );
  }
    i1002.push( i1004 );
  }
  i1000.points = i1002
  i1000.enabled = !!i1001[3]
  i1000.isTrigger = !!i1001[4]
  i1000.usedByEffector = !!i1001[5]
  i1000.density = i1001[6]
  i1000.offset = new pc.Vec2( i1001[7], i1001[8] )
  request.r(i1001[9], i1001[10], 0, i1000, 'material')
  return i1000
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i1012 = root || request.c( 'PlaySfxOnCollision' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'Tip')
  i1012.Mode = i1013[2]
  request.r(i1013[3], i1013[4], 0, i1012, 'DragInput')
  request.r(i1013[5], i1013[6], 0, i1012, 'Source')
  i1012.startVol = i1013[7]
  i1012.targetVol = i1013[8]
  i1012.duration = i1013[9]
  request.r(i1013[10], i1013[11], 0, i1012, 'Particles')
  i1012.isDone = !!i1013[12]
  i1012.isInArea = !!i1013[13]
  i1012.isPlaying = !!i1013[14]
  return i1012
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i1014 = root || request.c( 'InteractableBones' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'Tip')
  i1014.MoveAmount = i1015[2]
  i1014.MoveSpeed = i1015[3]
  i1014.ShakeSpeed = i1015[4]
  i1014.MovementThreshold = i1015[5]
  i1014.MoveX = !!i1015[6]
  i1014.MoveY = !!i1015[7]
  return i1014
}

Deserializers["WaypointFollower"] = function (request, data, root) {
  var i1016 = root || request.c( 'WaypointFollower' )
  var i1017 = data
  var i1019 = i1017[0]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 2) {
  request.r(i1019[i + 0], i1019[i + 1], 2, i1018, '')
  }
  i1016.waypoints = i1018
  i1016.speed = i1017[1]
  i1016.rotationSpeed = i1017[2]
  i1016.loop = !!i1017[3]
  i1016.reverse = !!i1017[4]
  i1016.canMove = !!i1017[5]
  request.r(i1017[6], i1017[7], 0, i1016, 'movingSfx')
  return i1016
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i1020 = root || request.c( 'BD_Action' )
  var i1021 = data
  i1020.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i1021[0], i1020.OnMouseDownEvent)
  i1020.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i1021[1], i1020.OnMouseUpEvent)
  i1020.setToolLayer = !!i1021[2]
  request.r(i1021[3], i1021[4], 0, i1020, 'tool_SP')
  return i1020
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i1022 = root || request.c( 'BD_CameraFollow' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'Tool')
  request.r(i1023[2], i1023[3], 0, i1022, 'Pivot')
  i1022.FOV = i1023[4]
  i1022.Y_L = i1023[5]
  i1022.Y_H = i1023[6]
  i1022.X_L = i1023[7]
  i1022.X_R = i1023[8]
  i1022.startDelay = i1023[9]
  i1022.duration = i1023[10]
  return i1022
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i1024 = root || request.c( 'BD_ToolRotate' )
  var i1025 = data
  i1024.startDelay = i1025[0]
  request.r(i1025[1], i1025[2], 0, i1024, 'Tool')
  request.r(i1025[3], i1025[4], 0, i1024, 'Clamp')
  request.r(i1025[5], i1025[6], 0, i1024, 'Pivot')
  i1024.MinAngle = new pc.Vec3( i1025[7], i1025[8], i1025[9] )
  i1024.MaxAngle = new pc.Vec3( i1025[10], i1025[11], i1025[12] )
  i1024.rotationSpeed = i1025[13]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1027 = data
  i1026.bodyType = i1027[0]
  request.r(i1027[1], i1027[2], 0, i1026, 'material')
  i1026.simulated = !!i1027[3]
  i1026.useAutoMass = !!i1027[4]
  i1026.mass = i1027[5]
  i1026.drag = i1027[6]
  i1026.angularDrag = i1027[7]
  i1026.gravityScale = i1027[8]
  i1026.collisionDetectionMode = i1027[9]
  i1026.sleepMode = i1027[10]
  i1026.constraints = i1027[11]
  return i1026
}

Deserializers["BugKill_Tip"] = function (request, data, root) {
  var i1028 = root || request.c( 'BugKill_Tip' )
  var i1029 = data
  var i1031 = i1029[0]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 2) {
  request.r(i1031[i + 0], i1031[i + 1], 2, i1030, '')
  }
  i1028.targets = i1030
  i1028.waypointFollower = !!i1029[1]
  i1028.fallSpeed = i1029[2]
  i1028.totalTargets = i1029[3]
  i1028.killCount = i1029[4]
  request.r(i1029[5], i1029[6], 0, i1028, 'bugKillSfx')
  i1028.OnComplete = request.d('UnityEngine.Events.UnityEvent', i1029[7], i1028.OnComplete)
  return i1028
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i1032 = root || request.c( 'BD_Progress' )
  var i1033 = data
  var i1035 = i1033[0]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('ScratchData', i1035[i + 0]) );
  }
  i1032.AllScratches = i1034
  i1032.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i1033[1], i1032.OnScratchComplete)
  i1032.isProgDone = !!i1033[2]
  i1032.canCallComplete = !!i1033[3]
  i1032.CollectiveAppear = !!i1033[4]
  i1032.tipControl = !!i1033[5]
  i1032.progressControl = !!i1033[6]
  request.r(i1033[7], i1033[8], 0, i1032, 'thisDrag')
  i1032.CompleteEvent = request.d('System.Action', i1033[9], i1032.CompleteEvent)
  i1032.SubCompleteEvent = request.d('System.Action', i1033[10], i1032.SubCompleteEvent)
  return i1032
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i1038 = root || request.c( 'ScratchData' )
  var i1039 = data
  request.r(i1039[0], i1039[1], 0, i1038, 'ScratchManager')
  i1038.scratchLimit = i1039[2]
  i1038.isComplete = !!i1039[3]
  return i1038
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i1040 = root || request.c( 'BD_ProgressHelper' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'BD_Progress')
  request.r(i1041[2], i1041[3], 0, i1040, 'fadeSprite')
  i1040.fadeIn = !!i1041[4]
  return i1040
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i1042 = root || request.c( 'ActionOnTap' )
  var i1043 = data
  i1042.OnTap = request.d('UnityEngine.Events.UnityEvent', i1043[0], i1042.OnTap)
  i1042.OnTapExtra = request.d('System.Action', i1043[1], i1042.OnTapExtra)
  return i1042
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i1044 = root || request.c( 'BD_SpriteChange' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'BD')
  request.r(i1045[2], i1045[3], 0, i1044, 'SR')
  request.r(i1045[4], i1045[5], 0, i1044, 'Default')
  request.r(i1045[6], i1045[7], 0, i1044, 'Picked')
  i1044.resetOnRelease = !!i1045[8]
  return i1044
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i1046 = root || request.c( 'BD_AnimatorDrag' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'BD')
  request.r(i1047[2], i1047[3], 0, i1046, 'anim')
  request.r(i1047[4], i1047[5], 0, i1046, 'Source')
  i1046.Vibration = !!i1047[6]
  i1046.isCompletable = !!i1047[7]
  i1046.completionThreshold = i1047[8]
  i1046.OnComplete = request.d('UnityEngine.Events.UnityEvent', i1047[9], i1046.OnComplete)
  return i1046
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i1048 = root || request.c( 'PlaceItem' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'thisDrag')
  request.r(i1049[2], i1049[3], 0, i1048, 'Target')
  request.r(i1049[4], i1049[5], 0, i1048, 'Clip')
  i1048.jumpOnPlace = !!i1049[6]
  i1048.jumpHeight = i1049[7]
  i1048.jumpDuration = i1049[8]
  i1048.settleDuration = i1049[9]
  i1048.isPlaced = !!i1049[10]
  i1048.isInsideCollider = !!i1049[11]
  i1048.changeScaleOnPlace = !!i1049[12]
  request.r(i1049[13], i1049[14], 0, i1048, 'item')
  i1048.newScaleOnPlace = new pc.Vec3( i1049[15], i1049[16], i1049[17] )
  i1048.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i1049[18], i1048.OnPlaced)
  return i1048
}

Deserializers["BD_Audio"] = function (request, data, root) {
  var i1050 = root || request.c( 'BD_Audio' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'BD')
  request.r(i1051[2], i1051[3], 0, i1050, 'Source')
  i1050.shouldRestart = !!i1051[4]
  i1050.startVol = i1051[5]
  i1050.targetVol = i1051[6]
  i1050.duration = i1051[7]
  i1050.startDelay = i1051[8]
  return i1050
}

Deserializers["Level1_HairAnim"] = function (request, data, root) {
  var i1052 = root || request.c( 'Level1_HairAnim' )
  var i1053 = data
  i1052.holdDuration = i1053[0]
  request.r(i1053[1], i1053[2], 0, i1052, 'targetSprite')
  i1052.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i1053[3], i1052.onHoldComplete)
  i1052.isHolding = !!i1053[4]
  request.r(i1053[5], i1053[6], 0, i1052, 'targetObj')
  request.r(i1053[7], i1053[8], 0, i1052, 'thisTool')
  request.r(i1053[9], i1053[10], 0, i1052, 'thisToolTip')
  var i1055 = i1053[11]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 2) {
  request.r(i1055[i + 0], i1055[i + 1], 2, i1054, '')
  }
  i1052.hairsAnim = i1054
  var i1057 = i1053[12]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 2) {
  request.r(i1057[i + 0], i1057[i + 1], 2, i1056, '')
  }
  i1052.hairsRend = i1056
  i1052.hairsRendFadeThreshold = i1053[13]
  request.r(i1053[14], i1053[15], 0, i1052, 'wetHairRend')
  request.r(i1053[16], i1053[17], 0, i1052, 'dryHairRend')
  request.r(i1053[18], i1053[19], 0, i1052, 'dryHairRendBack')
  i1052.hairAnimStopDuration = i1053[20]
  i1052.hairAnimResumeDuration = i1053[21]
  return i1052
}

Deserializers["BD_TapandHold"] = function (request, data, root) {
  var i1058 = root || request.c( 'BD_TapandHold' )
  var i1059 = data
  i1058.holdDuration = i1059[0]
  i1058.updateVisuals = !!i1059[1]
  request.r(i1059[2], i1059[3], 0, i1058, 'targetSprite')
  i1058.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i1059[4], i1058.onHoldComplete)
  i1058.onCompleteProgress = request.d('UnityEngine.Events.UnityEvent', i1059[5], i1058.onCompleteProgress)
  i1058.currentProgress = i1059[6]
  i1058.isHolding = !!i1059[7]
  request.r(i1059[8], i1059[9], 0, i1058, 'targetObj')
  request.r(i1059[10], i1059[11], 0, i1058, 'thisTool')
  request.r(i1059[12], i1059[13], 0, i1058, 'thisToolTip')
  return i1058
}

Deserializers["TapandHold_Simple"] = function (request, data, root) {
  var i1060 = root || request.c( 'TapandHold_Simple' )
  var i1061 = data
  request.r(i1061[0], i1061[1], 0, i1060, 'actionSfx')
  i1060.holdDuration = i1061[2]
  i1060.dragThreshold = i1061[3]
  i1060.fadeInOnHold = !!i1061[4]
  i1060.fadeOutOnRelease = !!i1061[5]
  request.r(i1061[6], i1061[7], 0, i1060, 'targetSprite')
  i1060.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i1061[8], i1060.onHoldComplete)
  i1060.currentProgress = i1061[9]
  i1060.isHolding = !!i1061[10]
  i1060.isCompleted = !!i1061[11]
  request.r(i1061[12], i1061[13], 0, i1060, 'thisTool')
  return i1060
}

Deserializers["DraggableBrush"] = function (request, data, root) {
  var i1062 = root || request.c( 'DraggableBrush' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, 'BD_Progress')
  var i1065 = i1063[2]
  var i1064 = new (System.Collections.Generic.List$1(Bridge.ns('DraggableBrush+Step')))
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.add(request.d('DraggableBrush+Step', i1065[i + 0]));
  }
  i1062.movementSteps = i1064
  i1062.snapSensitivity = i1063[3]
  i1062.OnComplete = request.d('UnityEngine.Events.UnityEvent', i1063[4], i1062.OnComplete)
  return i1062
}

Deserializers["DraggableBrush+Step"] = function (request, data, root) {
  var i1068 = root || request.c( 'DraggableBrush+Step' )
  var i1069 = data
  i1068.stepName = i1069[0]
  i1068.startX = i1069[1]
  i1068.startY = i1069[2]
  i1068.endY = i1069[3]
  return i1068
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i1070 = root || request.c( 'SpriteButton' )
  var i1071 = data
  i1070.isLocked = !!i1071[0]
  i1070.lockMsg = i1071[1]
  i1070.onClick = request.d('UnityEngine.Events.UnityEvent', i1071[2], i1070.onClick)
  i1070.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i1071[3], i1070.onLockedClick)
  i1070.isLevelBtnSfx = !!i1071[4]
  request.r(i1071[5], i1071[6], 0, i1070, 'pivot')
  i1070.reductionChange = i1071[7]
  i1070.animationDuration = i1071[8]
  return i1070
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i1072 = root || request.c( 'DestroyObj' )
  var i1073 = data
  i1072.destroyDelay = i1073[0]
  return i1072
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i1074 = root || request.c( 'MenuLevel' )
  var i1075 = data
  request.r(i1075[0], i1075[1], 0, i1074, 'menuLevelBtnUpdate')
  var i1077 = i1075[2]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('MenuLevelData', i1077[i + 0]) );
  }
  i1074.AllSteps = i1076
  request.r(i1075[3], i1075[4], 0, i1074, 'buttonparent')
  var i1079 = i1075[5]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 2) {
  request.r(i1079[i + 0], i1079[i + 1], 2, i1078, '')
  }
  i1074.BtnsDotweenAnims = i1078
  var i1081 = i1075[6]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 2) {
  request.r(i1081[i + 0], i1081[i + 1], 2, i1080, '')
  }
  i1074.BtnsCols = i1080
  request.r(i1075[7], i1075[8], 0, i1074, 'mainGameView')
  request.r(i1075[9], i1075[10], 0, i1074, 'Storyboard')
  request.r(i1075[11], i1075[12], 0, i1074, 'BgMusic')
  request.r(i1075[13], i1075[14], 0, i1074, 'BgStoryMusic')
  request.r(i1075[15], i1075[16], 0, i1074, 'Hand_Tut1')
  request.r(i1075[17], i1075[18], 0, i1074, 'Button_Hand')
  var i1083 = i1075[19]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 2) {
  request.r(i1083[i + 0], i1083[i + 1], 2, i1082, '')
  }
  i1074.itemEnable_Onstart = i1082
  var i1085 = i1075[20]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 2) {
  request.r(i1085[i + 0], i1085[i + 1], 2, i1084, '')
  }
  i1074.itemDisable_Onstart = i1084
  var i1087 = i1075[21]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 2) {
  request.r(i1087[i + 0], i1087[i + 1], 2, i1086, '')
  }
  i1074.itemEnable_Oncomplete = i1086
  var i1089 = i1075[22]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 2) {
  request.r(i1089[i + 0], i1089[i + 1], 2, i1088, '')
  }
  i1074.itemDisable_Oncomplete = i1088
  i1074.levelKey = i1075[23]
  i1074.revealDirtyHoldTime = i1075[24]
  return i1074
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i1092 = root || request.c( 'MenuLevelData' )
  var i1093 = data
  i1092.Name = i1093[0]
  request.r(i1093[1], i1093[2], 0, i1092, 'UiBtn')
  request.r(i1093[3], i1093[4], 0, i1092, 'TickBtn')
  request.r(i1093[5], i1093[6], 0, i1092, 'ExclamationIcon')
  var i1095 = i1093[7]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 2) {
  request.r(i1095[i + 0], i1095[i + 1], 2, i1094, '')
  }
  i1092.Item_Dirty = i1094
  var i1097 = i1093[8]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 2) {
  request.r(i1097[i + 0], i1097[i + 1], 2, i1096, '')
  }
  i1092.Item_Clean = i1096
  request.r(i1093[9], i1093[10], 0, i1092, 'CompleteParticle')
  return i1092
}

Deserializers["IntroLevelAnim"] = function (request, data, root) {
  var i1100 = root || request.c( 'IntroLevelAnim' )
  var i1101 = data
  request.r(i1101[0], i1101[1], 0, i1100, 'menuLevel')
  i1100.lvlkey = i1101[2]
  request.r(i1101[3], i1101[4], 0, i1100, 'DressChangeObj')
  request.r(i1101[5], i1101[6], 0, i1100, 'DressChangeClip')
  return i1100
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i1102 = root || request.c( 'Level_PoseController' )
  var i1103 = data
  var i1105 = i1103[0]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 2) {
  request.r(i1105[i + 0], i1105[i + 1], 2, i1104, '')
  }
  i1102.itemToShow = i1104
  var i1107 = i1103[1]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 2) {
  request.r(i1107[i + 0], i1107[i + 1], 2, i1106, '')
  }
  i1102.itemToHide = i1106
  i1102.stepTarget = i1103[2]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1109 = data
  i1108.name = i1109[0]
  i1108.atlasId = i1109[1]
  i1108.mipmapCount = i1109[2]
  i1108.hdr = !!i1109[3]
  i1108.size = i1109[4]
  i1108.anisoLevel = i1109[5]
  i1108.filterMode = i1109[6]
  var i1111 = i1109[7]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 4) {
    i1110.push( UnityEngine.Rect.MinMaxRect(i1111[i + 0], i1111[i + 1], i1111[i + 2], i1111[i + 3]) );
  }
  i1108.rects = i1110
  i1108.wrapU = i1109[8]
  i1108.wrapV = i1109[9]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1115 = data
  i1114.name = i1115[0]
  i1114.index = i1115[1]
  i1114.startup = !!i1115[2]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1117 = data
  i1116.aspect = i1117[0]
  i1116.orthographic = !!i1117[1]
  i1116.orthographicSize = i1117[2]
  i1116.backgroundColor = new pc.Color(i1117[3], i1117[4], i1117[5], i1117[6])
  i1116.nearClipPlane = i1117[7]
  i1116.farClipPlane = i1117[8]
  i1116.fieldOfView = i1117[9]
  i1116.depth = i1117[10]
  i1116.clearFlags = i1117[11]
  i1116.cullingMask = i1117[12]
  i1116.rect = i1117[13]
  request.r(i1117[14], i1117[15], 0, i1116, 'targetTexture')
  i1116.usePhysicalProperties = !!i1117[16]
  i1116.focalLength = i1117[17]
  i1116.sensorSize = new pc.Vec2( i1117[18], i1117[19] )
  i1116.lensShift = new pc.Vec2( i1117[20], i1117[21] )
  i1116.gateFit = i1117[22]
  i1116.commandBufferCount = i1117[23]
  i1116.cameraType = i1117[24]
  i1116.enabled = !!i1117[25]
  return i1116
}

Deserializers["CameraController"] = function (request, data, root) {
  var i1118 = root || request.c( 'CameraController' )
  var i1119 = data
  request.r(i1119[0], i1119[1], 0, i1118, 'cam')
  i1118.defaultPosition = new pc.Vec3( i1119[2], i1119[3], i1119[4] )
  i1118.defaultSize = i1119[5]
  i1118.defaultFOV = i1119[6]
  i1118.defaultDuration = i1119[7]
  i1118.defaultEase = i1119[8]
  return i1118
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i1120 = root || request.c( 'MusicSource' )
  var i1121 = data
  request.r(i1121[0], i1121[1], 0, i1120, 'source')
  return i1120
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i1122 = root || request.c( 'UI_Manager' )
  var i1123 = data
  i1122.levelCompleted = !!i1123[0]
  i1122.isPauseActive = !!i1123[1]
  i1122.loadIndex = i1123[2]
  request.r(i1123[3], i1123[4], 0, i1122, 'removeAdsButton')
  request.r(i1123[5], i1123[6], 0, i1122, 'pauseButton')
  request.r(i1123[7], i1123[8], 0, i1122, 'Fade_Img')
  request.r(i1123[9], i1123[10], 0, i1122, 'TopBarAnim')
  request.r(i1123[11], i1123[12], 0, i1122, 'MainPanel')
  request.r(i1123[13], i1123[14], 0, i1122, 'PausePanel')
  request.r(i1123[15], i1123[16], 0, i1122, 'PausePopUp')
  request.r(i1123[17], i1123[18], 0, i1122, 'PauseCanvasGroup')
  request.r(i1123[19], i1123[20], 0, i1122, 'RateUsPanel')
  request.r(i1123[21], i1123[22], 0, i1122, 'RateUsPopUp')
  request.r(i1123[23], i1123[24], 0, i1122, 'RemoveAdsPanel')
  request.r(i1123[25], i1123[26], 0, i1122, 'RemoveAdsPopUp')
  request.r(i1123[27], i1123[28], 0, i1122, 'RemoveAdsCanvasGroup')
  var i1125 = i1123[29]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 2) {
  request.r(i1125[i + 0], i1125[i + 1], 2, i1124, '')
  }
  i1122.RemoveAdsAnims = i1124
  request.r(i1123[30], i1123[31], 0, i1122, 'CompletePanel')
  request.r(i1123[32], i1123[33], 0, i1122, 'LevelIcon')
  request.r(i1123[34], i1123[35], 0, i1122, 'CompleteParticles')
  request.r(i1123[36], i1123[37], 0, i1122, 'progressBar')
  request.r(i1123[38], i1123[39], 0, i1122, 'progressText')
  request.r(i1123[40], i1123[41], 0, i1122, 'toolIcon1')
  request.r(i1123[42], i1123[43], 0, i1122, 'toolIcon2')
  request.r(i1123[44], i1123[45], 0, i1122, 'toolIcon3')
  request.r(i1123[46], i1123[47], 0, i1122, 'toolIcon4')
  request.r(i1123[48], i1123[49], 0, i1122, 'target1')
  request.r(i1123[50], i1123[51], 0, i1122, 'target2')
  i1122.toolMoveDuration = i1123[52]
  i1122.currentIndex = i1123[53]
  var i1127 = i1123[54]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1127.length; i += 2) {
  request.r(i1127[i + 0], i1127[i + 1], 1, i1126, '')
  }
  i1122.allTools = i1126
  request.r(i1123[55], i1123[56], 0, i1122, 'clockProgress')
  request.r(i1123[57], i1123[58], 0, i1122, 'clockProgressFill')
  request.r(i1123[59], i1123[60], 0, i1122, 'clockAudio')
  i1122.moveDistance = i1123[61]
  i1122.animationDuration = i1123[62]
  i1122.greyBgChildName = i1123[63]
  i1122.pushOffset = i1123[64]
  return i1122
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i1128 = root || request.c( 'GameManagerPlayable' )
  var i1129 = data
  request.r(i1129[0], i1129[1], 0, i1128, 'endParticles')
  request.r(i1129[2], i1129[3], 0, i1128, 'stepCompleteParticles')
  request.r(i1129[4], i1129[5], 0, i1128, 'DefaultMat')
  request.r(i1129[6], i1129[7], 0, i1128, 'BG_Music')
  request.r(i1129[8], i1129[9], 0, i1128, 'restoreEffectShader')
  request.r(i1129[10], i1129[11], 0, i1128, 'stickerEffectShader')
  i1128.isComplete = !!i1129[12]
  i1128.isPaused = !!i1129[13]
  request.r(i1129[14], i1129[15], 0, i1128, 'currentLevel')
  i1128.startLevelOnPlay = !!i1129[16]
  i1128.currentLevelNo = i1129[17]
  return i1128
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1130 = root || request.c( 'AudioController' )
  var i1131 = data
  request.r(i1131[0], i1131[1], 0, i1130, 'MainMixer')
  request.r(i1131[2], i1131[3], 0, i1130, 'UiClick')
  request.r(i1131[4], i1131[5], 0, i1130, 'UiClickSource')
  var i1133 = i1131[6]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 2) {
  request.r(i1133[i + 0], i1133[i + 1], 2, i1132, '')
  }
  i1130.SfxSources = i1132
  var i1135 = i1131[7]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 2) {
  request.r(i1135[i + 0], i1135[i + 1], 2, i1134, '')
  }
  i1130.AllClips = i1134
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1139 = data
  i1138.pivot = new pc.Vec2( i1139[0], i1139[1] )
  i1138.anchorMin = new pc.Vec2( i1139[2], i1139[3] )
  i1138.anchorMax = new pc.Vec2( i1139[4], i1139[5] )
  i1138.sizeDelta = new pc.Vec2( i1139[6], i1139[7] )
  i1138.anchoredPosition3D = new pc.Vec3( i1139[8], i1139[9], i1139[10] )
  i1138.rotation = new pc.Quat(i1139[11], i1139[12], i1139[13], i1139[14])
  i1138.scale = new pc.Vec3( i1139[15], i1139[16], i1139[17] )
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1141 = data
  i1140.planeDistance = i1141[0]
  i1140.referencePixelsPerUnit = i1141[1]
  i1140.isFallbackOverlay = !!i1141[2]
  i1140.renderMode = i1141[3]
  i1140.renderOrder = i1141[4]
  i1140.sortingLayerName = i1141[5]
  i1140.sortingOrder = i1141[6]
  i1140.scaleFactor = i1141[7]
  request.r(i1141[8], i1141[9], 0, i1140, 'worldCamera')
  i1140.overrideSorting = !!i1141[10]
  i1140.pixelPerfect = !!i1141[11]
  i1140.targetDisplay = i1141[12]
  i1140.overridePixelPerfect = !!i1141[13]
  i1140.enabled = !!i1141[14]
  return i1140
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1142 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1143 = data
  i1142.m_UiScaleMode = i1143[0]
  i1142.m_ReferencePixelsPerUnit = i1143[1]
  i1142.m_ScaleFactor = i1143[2]
  i1142.m_ReferenceResolution = new pc.Vec2( i1143[3], i1143[4] )
  i1142.m_ScreenMatchMode = i1143[5]
  i1142.m_MatchWidthOrHeight = i1143[6]
  i1142.m_PhysicalUnit = i1143[7]
  i1142.m_FallbackScreenDPI = i1143[8]
  i1142.m_DefaultSpriteDPI = i1143[9]
  i1142.m_DynamicPixelsPerUnit = i1143[10]
  i1142.m_PresetInfoIsWorld = !!i1143[11]
  return i1142
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1145 = data
  i1144.m_IgnoreReversedGraphics = !!i1145[0]
  i1144.m_BlockingObjects = i1145[1]
  i1144.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1145[2] )
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1147 = data
  i1146.cullTransparentMesh = !!i1147[0]
  return i1146
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.UI.Image' )
  var i1149 = data
  request.r(i1149[0], i1149[1], 0, i1148, 'm_Sprite')
  i1148.m_Type = i1149[2]
  i1148.m_PreserveAspect = !!i1149[3]
  i1148.m_FillCenter = !!i1149[4]
  i1148.m_FillMethod = i1149[5]
  i1148.m_FillAmount = i1149[6]
  i1148.m_FillClockwise = !!i1149[7]
  i1148.m_FillOrigin = i1149[8]
  i1148.m_UseSpriteMesh = !!i1149[9]
  i1148.m_PixelsPerUnitMultiplier = i1149[10]
  request.r(i1149[11], i1149[12], 0, i1148, 'm_Material')
  i1148.m_Maskable = !!i1149[13]
  i1148.m_Color = new pc.Color(i1149[14], i1149[15], i1149[16], i1149[17])
  i1148.m_RaycastTarget = !!i1149[18]
  i1148.m_RaycastPadding = new pc.Vec4( i1149[19], i1149[20], i1149[21], i1149[22] )
  return i1148
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1150 = root || request.c( 'UnityEngine.UI.Text' )
  var i1151 = data
  i1150.m_FontData = request.d('UnityEngine.UI.FontData', i1151[0], i1150.m_FontData)
  i1150.m_Text = i1151[1]
  request.r(i1151[2], i1151[3], 0, i1150, 'm_Material')
  i1150.m_Maskable = !!i1151[4]
  i1150.m_Color = new pc.Color(i1151[5], i1151[6], i1151[7], i1151[8])
  i1150.m_RaycastTarget = !!i1151[9]
  i1150.m_RaycastPadding = new pc.Vec4( i1151[10], i1151[11], i1151[12], i1151[13] )
  return i1150
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1152 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1153 = data
  request.r(i1153[0], i1153[1], 0, i1152, 'm_Font')
  i1152.m_FontSize = i1153[2]
  i1152.m_FontStyle = i1153[3]
  i1152.m_BestFit = !!i1153[4]
  i1152.m_MinSize = i1153[5]
  i1152.m_MaxSize = i1153[6]
  i1152.m_Alignment = i1153[7]
  i1152.m_AlignByGeometry = !!i1153[8]
  i1152.m_RichText = !!i1153[9]
  i1152.m_HorizontalOverflow = i1153[10]
  i1152.m_VerticalOverflow = i1153[11]
  i1152.m_LineSpacing = i1153[12]
  return i1152
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1154 = root || request.c( 'UnityEngine.UI.Button' )
  var i1155 = data
  i1154.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1155[0], i1154.m_OnClick)
  i1154.m_Navigation = request.d('UnityEngine.UI.Navigation', i1155[1], i1154.m_Navigation)
  i1154.m_Transition = i1155[2]
  i1154.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1155[3], i1154.m_Colors)
  i1154.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1155[4], i1154.m_SpriteState)
  i1154.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1155[5], i1154.m_AnimationTriggers)
  i1154.m_Interactable = !!i1155[6]
  request.r(i1155[7], i1155[8], 0, i1154, 'm_TargetGraphic')
  return i1154
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1156 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1157 = data
  i1156.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1157[0], i1156.m_PersistentCalls)
  return i1156
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1158 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1159 = data
  i1158.m_Mode = i1159[0]
  i1158.m_WrapAround = !!i1159[1]
  request.r(i1159[2], i1159[3], 0, i1158, 'm_SelectOnUp')
  request.r(i1159[4], i1159[5], 0, i1158, 'm_SelectOnDown')
  request.r(i1159[6], i1159[7], 0, i1158, 'm_SelectOnLeft')
  request.r(i1159[8], i1159[9], 0, i1158, 'm_SelectOnRight')
  return i1158
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1160 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1161 = data
  i1160.m_NormalColor = new pc.Color(i1161[0], i1161[1], i1161[2], i1161[3])
  i1160.m_HighlightedColor = new pc.Color(i1161[4], i1161[5], i1161[6], i1161[7])
  i1160.m_PressedColor = new pc.Color(i1161[8], i1161[9], i1161[10], i1161[11])
  i1160.m_SelectedColor = new pc.Color(i1161[12], i1161[13], i1161[14], i1161[15])
  i1160.m_DisabledColor = new pc.Color(i1161[16], i1161[17], i1161[18], i1161[19])
  i1160.m_ColorMultiplier = i1161[20]
  i1160.m_FadeDuration = i1161[21]
  return i1160
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1162 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1163 = data
  request.r(i1163[0], i1163[1], 0, i1162, 'm_HighlightedSprite')
  request.r(i1163[2], i1163[3], 0, i1162, 'm_PressedSprite')
  request.r(i1163[4], i1163[5], 0, i1162, 'm_SelectedSprite')
  request.r(i1163[6], i1163[7], 0, i1162, 'm_DisabledSprite')
  return i1162
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1164 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1165 = data
  i1164.m_NormalTrigger = i1165[0]
  i1164.m_HighlightedTrigger = i1165[1]
  i1164.m_PressedTrigger = i1165[2]
  i1164.m_SelectedTrigger = i1165[3]
  i1164.m_DisabledTrigger = i1165[4]
  return i1164
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i1166 = root || request.c( 'PlayableHudRuntime' )
  var i1167 = data
  return i1166
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1168 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1169 = data
  request.r(i1169[0], i1169[1], 0, i1168, 'm_FirstSelected')
  i1168.m_sendNavigationEvents = !!i1169[2]
  i1168.m_DragThreshold = i1169[3]
  return i1168
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1170 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1171 = data
  i1170.m_HorizontalAxis = i1171[0]
  i1170.m_VerticalAxis = i1171[1]
  i1170.m_SubmitButton = i1171[2]
  i1170.m_CancelButton = i1171[3]
  i1170.m_InputActionsPerSecond = i1171[4]
  i1170.m_RepeatDelay = i1171[5]
  i1170.m_ForceModuleActive = !!i1171[6]
  i1170.m_SendPointerHoverToParent = !!i1171[7]
  return i1170
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i1172 = root || request.c( 'PlayableRouter' )
  var i1173 = data
  var i1175 = i1173[0]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 2) {
  request.r(i1175[i + 0], i1175[i + 1], 2, i1174, '')
  }
  i1172.menuObjects = i1174
  var i1177 = i1173[1]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 2) {
  request.r(i1177[i + 0], i1177[i + 1], 2, i1176, '')
  }
  i1172.gameplayObjects = i1176
  var i1179 = i1173[2]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('PlayableRouter+SubLevelSlot', i1179[i + 0]) );
  }
  i1172.subLevels = i1178
  i1172.fadeDuration = i1173[3]
  i1172.onMenuClosing = request.d('UnityEngine.Events.UnityEvent', i1173[4], i1172.onMenuClosing)
  i1172.lockedMessage = i1173[5]
  i1172.lockedTapsToCTA = i1173[6]
  return i1172
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i1182 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i1183 = data
  request.r(i1183[0], i1183[1], 0, i1182, 'button')
  request.r(i1183[2], i1183[3], 0, i1182, 'level')
  return i1182
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i1184 = root || request.c( 'ToastManager' )
  var i1185 = data
  request.r(i1185[0], i1185[1], 0, i1184, 'toastPanel')
  request.r(i1185[2], i1185[3], 0, i1184, 'toastPopup')
  request.r(i1185[4], i1185[5], 0, i1184, 'canvasGroup')
  request.r(i1185[6], i1185[7], 0, i1184, 'toastText')
  i1184.startY = i1185[8]
  i1184.visibleY = i1185[9]
  i1184.endY = i1185[10]
  i1184.animationTime = i1185[11]
  i1184.animationTimeUp = i1185[12]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1187 = data
  i1186.m_Alpha = i1187[0]
  i1186.m_Interactable = !!i1187[1]
  i1186.m_BlocksRaycasts = !!i1187[2]
  i1186.m_IgnoreParentGroups = !!i1187[3]
  i1186.enabled = !!i1187[4]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1189 = data
  i1188.ambientIntensity = i1189[0]
  i1188.reflectionIntensity = i1189[1]
  i1188.ambientMode = i1189[2]
  i1188.ambientLight = new pc.Color(i1189[3], i1189[4], i1189[5], i1189[6])
  i1188.ambientSkyColor = new pc.Color(i1189[7], i1189[8], i1189[9], i1189[10])
  i1188.ambientGroundColor = new pc.Color(i1189[11], i1189[12], i1189[13], i1189[14])
  i1188.ambientEquatorColor = new pc.Color(i1189[15], i1189[16], i1189[17], i1189[18])
  i1188.fogColor = new pc.Color(i1189[19], i1189[20], i1189[21], i1189[22])
  i1188.fogEndDistance = i1189[23]
  i1188.fogStartDistance = i1189[24]
  i1188.fogDensity = i1189[25]
  i1188.fog = !!i1189[26]
  request.r(i1189[27], i1189[28], 0, i1188, 'skybox')
  i1188.fogMode = i1189[29]
  var i1191 = i1189[30]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1191[i + 0]) );
  }
  i1188.lightmaps = i1190
  i1188.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1189[31], i1188.lightProbes)
  i1188.lightmapsMode = i1189[32]
  i1188.mixedBakeMode = i1189[33]
  i1188.environmentLightingMode = i1189[34]
  i1188.ambientProbe = new pc.SphericalHarmonicsL2(i1189[35])
  request.r(i1189[36], i1189[37], 0, i1188, 'customReflection')
  request.r(i1189[38], i1189[39], 0, i1188, 'defaultReflection')
  i1188.defaultReflectionMode = i1189[40]
  i1188.defaultReflectionResolution = i1189[41]
  i1188.sunLightObjectId = i1189[42]
  i1188.pixelLightCount = i1189[43]
  i1188.defaultReflectionHDR = !!i1189[44]
  i1188.hasLightDataAsset = !!i1189[45]
  i1188.hasManualGenerate = !!i1189[46]
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1195 = data
  request.r(i1195[0], i1195[1], 0, i1194, 'lightmapColor')
  request.r(i1195[2], i1195[3], 0, i1194, 'lightmapDirection')
  request.r(i1195[4], i1195[5], 0, i1194, 'shadowMask')
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1196 = root || new UnityEngine.LightProbes()
  var i1197 = data
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1203 = data
  var i1205 = i1203[0]
  var i1204 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1205[i + 0]));
  }
  i1202.ShaderCompilationErrors = i1204
  i1202.name = i1203[1]
  i1202.guid = i1203[2]
  var i1207 = i1203[3]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( i1207[i + 0] );
  }
  i1202.shaderDefinedKeywords = i1206
  var i1209 = i1203[4]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1209[i + 0]) );
  }
  i1202.passes = i1208
  var i1211 = i1203[5]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1211[i + 0]) );
  }
  i1202.usePasses = i1210
  var i1213 = i1203[6]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1213[i + 0]) );
  }
  i1202.defaultParameterValues = i1212
  request.r(i1203[7], i1203[8], 0, i1202, 'unityFallbackShader')
  i1202.readDepth = !!i1203[9]
  i1202.hasDepthOnlyPass = !!i1203[10]
  i1202.isCreatedByShaderGraph = !!i1203[11]
  i1202.disableBatching = !!i1203[12]
  i1202.compiled = !!i1203[13]
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1217 = data
  i1216.shaderName = i1217[0]
  i1216.errorMessage = i1217[1]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1222 = root || new pc.UnityShaderPass()
  var i1223 = data
  i1222.id = i1223[0]
  i1222.subShaderIndex = i1223[1]
  i1222.name = i1223[2]
  i1222.passType = i1223[3]
  i1222.grabPassTextureName = i1223[4]
  i1222.usePass = !!i1223[5]
  i1222.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1223[6], i1222.zTest)
  i1222.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1223[7], i1222.zWrite)
  i1222.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1223[8], i1222.culling)
  i1222.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1223[9], i1222.blending)
  i1222.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1223[10], i1222.alphaBlending)
  i1222.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1223[11], i1222.colorWriteMask)
  i1222.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1223[12], i1222.offsetUnits)
  i1222.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1223[13], i1222.offsetFactor)
  i1222.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1223[14], i1222.stencilRef)
  i1222.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1223[15], i1222.stencilReadMask)
  i1222.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1223[16], i1222.stencilWriteMask)
  i1222.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1223[17], i1222.stencilOp)
  i1222.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1223[18], i1222.stencilOpFront)
  i1222.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1223[19], i1222.stencilOpBack)
  var i1225 = i1223[20]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1225[i + 0]) );
  }
  i1222.tags = i1224
  var i1227 = i1223[21]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( i1227[i + 0] );
  }
  i1222.passDefinedKeywords = i1226
  var i1229 = i1223[22]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1229[i + 0]) );
  }
  i1222.passDefinedKeywordGroups = i1228
  var i1231 = i1223[23]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1231[i + 0]) );
  }
  i1222.variants = i1230
  var i1233 = i1223[24]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1233[i + 0]) );
  }
  i1222.excludedVariants = i1232
  i1222.hasDepthReader = !!i1223[25]
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1235 = data
  i1234.val = i1235[0]
  i1234.name = i1235[1]
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1237 = data
  i1236.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1237[0], i1236.src)
  i1236.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1237[1], i1236.dst)
  i1236.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1237[2], i1236.op)
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1239 = data
  i1238.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1239[0], i1238.pass)
  i1238.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1239[1], i1238.fail)
  i1238.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1239[2], i1238.zFail)
  i1238.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1239[3], i1238.comp)
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1243 = data
  i1242.name = i1243[0]
  i1242.value = i1243[1]
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1247 = data
  var i1249 = i1247[0]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( i1249[i + 0] );
  }
  i1246.keywords = i1248
  i1246.hasDiscard = !!i1247[1]
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1253 = data
  i1252.passId = i1253[0]
  i1252.subShaderIndex = i1253[1]
  var i1255 = i1253[2]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( i1255[i + 0] );
  }
  i1252.keywords = i1254
  i1252.vertexProgram = i1253[3]
  i1252.fragmentProgram = i1253[4]
  i1252.exportedForWebGl2 = !!i1253[5]
  i1252.readDepth = !!i1253[6]
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1259 = data
  request.r(i1259[0], i1259[1], 0, i1258, 'shader')
  i1258.pass = i1259[2]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1263 = data
  i1262.name = i1263[0]
  i1262.type = i1263[1]
  i1262.value = new pc.Vec4( i1263[2], i1263[3], i1263[4], i1263[5] )
  i1262.textureValue = i1263[6]
  i1262.shaderPropertyFlag = i1263[7]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1265 = data
  i1264.name = i1265[0]
  request.r(i1265[1], i1265[2], 0, i1264, 'texture')
  i1264.aabb = i1265[3]
  i1264.vertices = i1265[4]
  i1264.triangles = i1265[5]
  i1264.textureRect = UnityEngine.Rect.MinMaxRect(i1265[6], i1265[7], i1265[8], i1265[9])
  i1264.packedRect = UnityEngine.Rect.MinMaxRect(i1265[10], i1265[11], i1265[12], i1265[13])
  i1264.border = new pc.Vec4( i1265[14], i1265[15], i1265[16], i1265[17] )
  i1264.transparency = i1265[18]
  i1264.bounds = i1265[19]
  i1264.pixelsPerUnit = i1265[20]
  i1264.textureWidth = i1265[21]
  i1264.textureHeight = i1265[22]
  i1264.nativeSize = new pc.Vec2( i1265[23], i1265[24] )
  i1264.pivot = new pc.Vec2( i1265[25], i1265[26] )
  i1264.textureRectOffset = new pc.Vec2( i1265[27], i1265[28] )
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1267 = data
  i1266.name = i1267[0]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1269 = data
  i1268.name = i1269[0]
  i1268.wrapMode = i1269[1]
  i1268.isLooping = !!i1269[2]
  i1268.length = i1269[3]
  var i1271 = i1269[4]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1271[i + 0]) );
  }
  i1268.curves = i1270
  var i1273 = i1269[5]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1273[i + 0]) );
  }
  i1268.events = i1272
  i1268.halfPrecision = !!i1269[6]
  i1268._frameRate = i1269[7]
  i1268.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1269[8], i1268.localBounds)
  i1268.hasMuscleCurves = !!i1269[9]
  var i1275 = i1269[10]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( i1275[i + 0] );
  }
  i1268.clipMuscleConstant = i1274
  i1268.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1269[11], i1268.clipBindingConstant)
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1279 = data
  i1278.path = i1279[0]
  i1278.hash = i1279[1]
  i1278.componentType = i1279[2]
  i1278.property = i1279[3]
  i1278.keys = i1279[4]
  var i1281 = i1279[5]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1281[i + 0]) );
  }
  i1278.objectReferenceKeys = i1280
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1285 = data
  i1284.time = i1285[0]
  request.r(i1285[1], i1285[2], 0, i1284, 'value')
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1289 = data
  i1288.functionName = i1289[0]
  i1288.floatParameter = i1289[1]
  i1288.intParameter = i1289[2]
  i1288.stringParameter = i1289[3]
  request.r(i1289[4], i1289[5], 0, i1288, 'objectReferenceParameter')
  i1288.time = i1289[6]
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1291 = data
  i1290.center = new pc.Vec3( i1291[0], i1291[1], i1291[2] )
  i1290.extends = new pc.Vec3( i1291[3], i1291[4], i1291[5] )
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1295 = data
  var i1297 = i1295[0]
  var i1296 = []
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.push( i1297[i + 0] );
  }
  i1294.genericBindings = i1296
  var i1299 = i1295[1]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( i1299[i + 0] );
  }
  i1294.pptrCurveMapping = i1298
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1301 = data
  i1300.name = i1301[0]
  i1300.ascent = i1301[1]
  i1300.originalLineHeight = i1301[2]
  i1300.fontSize = i1301[3]
  var i1303 = i1301[4]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1303[i + 0]) );
  }
  i1300.characterInfo = i1302
  request.r(i1301[5], i1301[6], 0, i1300, 'texture')
  i1300.originalFontSize = i1301[7]
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1307 = data
  i1306.index = i1307[0]
  i1306.advance = i1307[1]
  i1306.bearing = i1307[2]
  i1306.glyphWidth = i1307[3]
  i1306.glyphHeight = i1307[4]
  i1306.minX = i1307[5]
  i1306.maxX = i1307[6]
  i1306.minY = i1307[7]
  i1306.maxY = i1307[8]
  i1306.uvBottomLeftX = i1307[9]
  i1306.uvBottomLeftY = i1307[10]
  i1306.uvBottomRightX = i1307[11]
  i1306.uvBottomRightY = i1307[12]
  i1306.uvTopLeftX = i1307[13]
  i1306.uvTopLeftY = i1307[14]
  i1306.uvTopRightX = i1307[15]
  i1306.uvTopRightY = i1307[16]
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1309 = data
  i1308.name = i1309[0]
  var i1311 = i1309[1]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1311[i + 0]) );
  }
  i1308.layers = i1310
  var i1313 = i1309[2]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1313[i + 0]) );
  }
  i1308.parameters = i1312
  i1308.animationClips = i1309[3]
  i1308.avatarUnsupported = i1309[4]
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1317 = data
  i1316.name = i1317[0]
  i1316.defaultWeight = i1317[1]
  i1316.blendingMode = i1317[2]
  i1316.avatarMask = i1317[3]
  i1316.syncedLayerIndex = i1317[4]
  i1316.syncedLayerAffectsTiming = !!i1317[5]
  i1316.syncedLayers = i1317[6]
  i1316.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1317[7], i1316.stateMachine)
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1319 = data
  i1318.id = i1319[0]
  i1318.name = i1319[1]
  i1318.path = i1319[2]
  var i1321 = i1319[3]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1321[i + 0]) );
  }
  i1318.states = i1320
  var i1323 = i1319[4]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1323[i + 0]) );
  }
  i1318.machines = i1322
  var i1325 = i1319[5]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1325[i + 0]) );
  }
  i1318.entryStateTransitions = i1324
  var i1327 = i1319[6]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1327[i + 0]) );
  }
  i1318.exitStateTransitions = i1326
  var i1329 = i1319[7]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1329[i + 0]) );
  }
  i1318.anyStateTransitions = i1328
  i1318.defaultStateId = i1319[8]
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1333 = data
  i1332.id = i1333[0]
  i1332.name = i1333[1]
  i1332.cycleOffset = i1333[2]
  i1332.cycleOffsetParameter = i1333[3]
  i1332.cycleOffsetParameterActive = !!i1333[4]
  i1332.mirror = !!i1333[5]
  i1332.mirrorParameter = i1333[6]
  i1332.mirrorParameterActive = !!i1333[7]
  i1332.motionId = i1333[8]
  i1332.nameHash = i1333[9]
  i1332.fullPathHash = i1333[10]
  i1332.speed = i1333[11]
  i1332.speedParameter = i1333[12]
  i1332.speedParameterActive = !!i1333[13]
  i1332.tag = i1333[14]
  i1332.tagHash = i1333[15]
  i1332.writeDefaultValues = !!i1333[16]
  var i1335 = i1333[17]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 2) {
  request.r(i1335[i + 0], i1335[i + 1], 2, i1334, '')
  }
  i1332.behaviours = i1334
  var i1337 = i1333[18]
  var i1336 = []
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1337[i + 0]) );
  }
  i1332.transitions = i1336
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1343 = data
  i1342.fullPath = i1343[0]
  i1342.canTransitionToSelf = !!i1343[1]
  i1342.duration = i1343[2]
  i1342.exitTime = i1343[3]
  i1342.hasExitTime = !!i1343[4]
  i1342.hasFixedDuration = !!i1343[5]
  i1342.interruptionSource = i1343[6]
  i1342.offset = i1343[7]
  i1342.orderedInterruption = !!i1343[8]
  i1342.destinationStateId = i1343[9]
  i1342.isExit = !!i1343[10]
  i1342.mute = !!i1343[11]
  i1342.solo = !!i1343[12]
  var i1345 = i1343[13]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1345[i + 0]) );
  }
  i1342.conditions = i1344
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1351 = data
  i1350.destinationStateId = i1351[0]
  i1350.isExit = !!i1351[1]
  i1350.mute = !!i1351[2]
  i1350.solo = !!i1351[3]
  var i1353 = i1351[4]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1353[i + 0]) );
  }
  i1350.conditions = i1352
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1357 = data
  i1356.mode = i1357[0]
  i1356.parameter = i1357[1]
  i1356.threshold = i1357[2]
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1361 = data
  i1360.defaultBool = !!i1361[0]
  i1360.defaultFloat = i1361[1]
  i1360.defaultInt = i1361[2]
  i1360.name = i1361[3]
  i1360.nameHash = i1361[4]
  i1360.type = i1361[5]
  return i1360
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1362 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1363 = data
  i1362.useSafeMode = !!i1363[0]
  i1362.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1363[1], i1362.safeModeOptions)
  i1362.timeScale = i1363[2]
  i1362.unscaledTimeScale = i1363[3]
  i1362.useSmoothDeltaTime = !!i1363[4]
  i1362.maxSmoothUnscaledTime = i1363[5]
  i1362.rewindCallbackMode = i1363[6]
  i1362.showUnityEditorReport = !!i1363[7]
  i1362.logBehaviour = i1363[8]
  i1362.drawGizmos = !!i1363[9]
  i1362.defaultRecyclable = !!i1363[10]
  i1362.defaultAutoPlay = i1363[11]
  i1362.defaultUpdateType = i1363[12]
  i1362.defaultTimeScaleIndependent = !!i1363[13]
  i1362.defaultEaseType = i1363[14]
  i1362.defaultEaseOvershootOrAmplitude = i1363[15]
  i1362.defaultEasePeriod = i1363[16]
  i1362.defaultAutoKill = !!i1363[17]
  i1362.defaultLoopType = i1363[18]
  i1362.debugMode = !!i1363[19]
  i1362.debugStoreTargetId = !!i1363[20]
  i1362.showPreviewPanel = !!i1363[21]
  i1362.storeSettingsLocation = i1363[22]
  i1362.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1363[23], i1362.modules)
  i1362.createASMDEF = !!i1363[24]
  i1362.showPlayingTweens = !!i1363[25]
  i1362.showPausedTweens = !!i1363[26]
  return i1362
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1364 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1365 = data
  i1364.logBehaviour = i1365[0]
  i1364.nestedTweenFailureBehaviour = i1365[1]
  return i1364
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1366 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1367 = data
  i1366.showPanel = !!i1367[0]
  i1366.audioEnabled = !!i1367[1]
  i1366.physicsEnabled = !!i1367[2]
  i1366.physics2DEnabled = !!i1367[3]
  i1366.spriteEnabled = !!i1367[4]
  i1366.uiEnabled = !!i1367[5]
  i1366.textMeshProEnabled = !!i1367[6]
  i1366.tk2DEnabled = !!i1367[7]
  i1366.deAudioEnabled = !!i1367[8]
  i1366.deUnityExtendedEnabled = !!i1367[9]
  i1366.epoOutlineEnabled = !!i1367[10]
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1369 = data
  var i1371 = i1369[0]
  var i1370 = []
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1371[i + 0]) );
  }
  i1368.files = i1370
  i1368.componentToPrefabIds = i1369[1]
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1375 = data
  i1374.path = i1375[0]
  request.r(i1375[1], i1375[2], 0, i1374, 'unityObject')
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1377 = data
  var i1379 = i1377[0]
  var i1378 = []
  for(var i = 0; i < i1379.length; i += 1) {
    i1378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1379[i + 0]) );
  }
  i1376.scriptsExecutionOrder = i1378
  var i1381 = i1377[1]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1381[i + 0]) );
  }
  i1376.sortingLayers = i1380
  var i1383 = i1377[2]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1383[i + 0]) );
  }
  i1376.cullingLayers = i1382
  i1376.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1377[3], i1376.timeSettings)
  i1376.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1377[4], i1376.physicsSettings)
  i1376.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1377[5], i1376.physics2DSettings)
  i1376.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1377[6], i1376.qualitySettings)
  i1376.enableRealtimeShadows = !!i1377[7]
  i1376.enableAutoInstancing = !!i1377[8]
  i1376.enableStaticBatching = !!i1377[9]
  i1376.enableDynamicBatching = !!i1377[10]
  i1376.usePreservativeDynamicBatching = !!i1377[11]
  i1376.lightmapEncodingQuality = i1377[12]
  i1376.desiredColorSpace = i1377[13]
  var i1385 = i1377[14]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( i1385[i + 0] );
  }
  i1376.allTags = i1384
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1389 = data
  i1388.name = i1389[0]
  i1388.value = i1389[1]
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1393 = data
  i1392.id = i1393[0]
  i1392.name = i1393[1]
  i1392.value = i1393[2]
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1397 = data
  i1396.id = i1397[0]
  i1396.name = i1397[1]
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1399 = data
  i1398.fixedDeltaTime = i1399[0]
  i1398.maximumDeltaTime = i1399[1]
  i1398.timeScale = i1399[2]
  i1398.maximumParticleTimestep = i1399[3]
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1401 = data
  i1400.gravity = new pc.Vec3( i1401[0], i1401[1], i1401[2] )
  i1400.defaultSolverIterations = i1401[3]
  i1400.bounceThreshold = i1401[4]
  i1400.autoSyncTransforms = !!i1401[5]
  i1400.autoSimulation = !!i1401[6]
  var i1403 = i1401[7]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1403[i + 0]) );
  }
  i1400.collisionMatrix = i1402
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1407 = data
  i1406.enabled = !!i1407[0]
  i1406.layerId = i1407[1]
  i1406.otherLayerId = i1407[2]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1409 = data
  request.r(i1409[0], i1409[1], 0, i1408, 'material')
  i1408.gravity = new pc.Vec2( i1409[2], i1409[3] )
  i1408.positionIterations = i1409[4]
  i1408.velocityIterations = i1409[5]
  i1408.velocityThreshold = i1409[6]
  i1408.maxLinearCorrection = i1409[7]
  i1408.maxAngularCorrection = i1409[8]
  i1408.maxTranslationSpeed = i1409[9]
  i1408.maxRotationSpeed = i1409[10]
  i1408.baumgarteScale = i1409[11]
  i1408.baumgarteTOIScale = i1409[12]
  i1408.timeToSleep = i1409[13]
  i1408.linearSleepTolerance = i1409[14]
  i1408.angularSleepTolerance = i1409[15]
  i1408.defaultContactOffset = i1409[16]
  i1408.autoSimulation = !!i1409[17]
  i1408.queriesHitTriggers = !!i1409[18]
  i1408.queriesStartInColliders = !!i1409[19]
  i1408.callbacksOnDisable = !!i1409[20]
  i1408.reuseCollisionCallbacks = !!i1409[21]
  i1408.autoSyncTransforms = !!i1409[22]
  var i1411 = i1409[23]
  var i1410 = []
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1411[i + 0]) );
  }
  i1408.collisionMatrix = i1410
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1415 = data
  i1414.enabled = !!i1415[0]
  i1414.layerId = i1415[1]
  i1414.otherLayerId = i1415[2]
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1417 = data
  var i1419 = i1417[0]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1419[i + 0]) );
  }
  i1416.qualityLevels = i1418
  var i1421 = i1417[1]
  var i1420 = []
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.push( i1421[i + 0] );
  }
  i1416.names = i1420
  i1416.shadows = i1417[2]
  i1416.anisotropicFiltering = i1417[3]
  i1416.antiAliasing = i1417[4]
  i1416.lodBias = i1417[5]
  i1416.shadowCascades = i1417[6]
  i1416.shadowDistance = i1417[7]
  i1416.shadowmaskMode = i1417[8]
  i1416.shadowProjection = i1417[9]
  i1416.shadowResolution = i1417[10]
  i1416.softParticles = !!i1417[11]
  i1416.softVegetation = !!i1417[12]
  i1416.activeColorSpace = i1417[13]
  i1416.desiredColorSpace = i1417[14]
  i1416.masterTextureLimit = i1417[15]
  i1416.maxQueuedFrames = i1417[16]
  i1416.particleRaycastBudget = i1417[17]
  i1416.pixelLightCount = i1417[18]
  i1416.realtimeReflectionProbes = !!i1417[19]
  i1416.shadowCascade2Split = i1417[20]
  i1416.shadowCascade4Split = new pc.Vec3( i1417[21], i1417[22], i1417[23] )
  i1416.streamingMipmapsActive = !!i1417[24]
  i1416.vSyncCount = i1417[25]
  i1416.asyncUploadBufferSize = i1417[26]
  i1416.asyncUploadTimeSlice = i1417[27]
  i1416.billboardsFaceCameraPosition = !!i1417[28]
  i1416.shadowNearPlaneOffset = i1417[29]
  i1416.streamingMipmapsMemoryBudget = i1417[30]
  i1416.maximumLODLevel = i1417[31]
  i1416.streamingMipmapsAddAllCameras = !!i1417[32]
  i1416.streamingMipmapsMaxLevelReduction = i1417[33]
  i1416.streamingMipmapsRenderersPerFrame = i1417[34]
  i1416.resolutionScalingFixedDPIFactor = i1417[35]
  i1416.streamingMipmapsMaxFileIORequests = i1417[36]
  i1416.currentQualityLevel = i1417[37]
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i1425 = data
  var i1427 = i1425[0]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i1427[i + 0]) );
  }
  i1424.groups = i1426
  var i1429 = i1425[1]
  var i1428 = []
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i1429[i + 0]) );
  }
  i1424.snapshots = i1428
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i1433 = data
  i1432.id = i1433[0]
  i1432.childGroupIds = i1433[1]
  i1432.name = i1433[2]
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i1436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i1437 = data
  i1436.id = i1437[0]
  var i1439 = i1437[1]
  var i1438 = []
  for(var i = 0; i < i1439.length; i += 1) {
    i1438.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i1439[i + 0]) );
  }
  i1436.parameters = i1438
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i1443 = data
  i1442.name = i1443[0]
  i1442.value = i1443[1]
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1447 = data
  i1446.weight = i1447[0]
  i1446.vertices = i1447[1]
  i1446.normals = i1447[2]
  i1446.tangents = i1447[3]
  return i1446
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[97],"98":[64],"99":[100],"101":[100],"102":[100],"103":[100],"104":[100],"105":[100],"106":[100],"107":[48],"108":[48],"109":[48],"110":[48],"111":[48],"112":[48],"113":[48],"114":[48],"115":[48],"116":[48],"117":[48],"118":[48],"119":[48],"120":[64],"121":[122],"123":[124],"125":[124],"75":[69],"126":[31],"127":[9],"36":[33],"128":[9],"129":[130],"131":[130],"40":[14],"58":[33],"132":[9],"29":[9],"133":[69],"134":[69],"78":[75],"70":[79,69],"135":[69],"77":[75],"136":[69],"137":[69],"138":[69],"139":[69],"140":[69],"141":[69],"142":[69],"143":[69],"144":[69],"145":[79,69],"146":[69],"147":[69],"148":[69],"149":[69],"71":[79,69],"150":[69],"151":[83],"152":[83],"84":[83],"153":[83],"154":[64],"155":[64]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level1_Hair_Playable","UnityEngine.SpriteRenderer","BasicDrag","OutlinePulse","UnityEngine.GameObject","BD_CameraFollow","DG.Tweening.DOTweenAnimation","UnityEngine.Sprite","UnityEngine.AudioClip","BD_Progress","BD_ProgressHelper","DraggableBrush","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","BD_AnimationHelper","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.TrailRenderer","UnityEngine.LineRenderer","StaticFixedPipe","UnityEngine.BoxCollider2D","BD_Clamp","BD_ItemPick","BD_Sticky","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.SpriteMask","PlayTweenOnHit","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","InteractableBones","WaypointFollower","UnityEditor.Audio.AudioMixerGroupController","BD_Action","BD_ToolRotate","UnityEngine.Rigidbody2D","BugKill_Tip","ActionOnTap","BD_SpriteChange","BD_AnimatorDrag","PlaceItem","BD_Audio","Level1_HairAnim","BD_TapandHold","TapandHold_Simple","SpriteButton","DestroyObj","MenuLevel","IntroLevelAnim","Level_PoseController","PlayableRouter","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Fold","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "14.0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1719";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4267";

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

Deserializers.buildID = "5dbf21b0-ca79-4f0c-81fc-bdb63073ad51";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

