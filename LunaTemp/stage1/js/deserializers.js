var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.JointSpring' )
  var i723 = data
  i722.spring = i723[0]
  i722.damper = i723[1]
  i722.targetPosition = i723[2]
  return i722
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.JointMotor' )
  var i725 = data
  i724.m_TargetVelocity = i725[0]
  i724.m_Force = i725[1]
  i724.m_FreeSpin = i725[2]
  return i724
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.JointLimits' )
  var i727 = data
  i726.m_Min = i727[0]
  i726.m_Max = i727[1]
  i726.m_Bounciness = i727[2]
  i726.m_BounceMinVelocity = i727[3]
  i726.m_ContactDistance = i727[4]
  i726.minBounce = i727[5]
  i726.maxBounce = i727[6]
  return i726
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.JointDrive' )
  var i729 = data
  i728.m_PositionSpring = i729[0]
  i728.m_PositionDamper = i729[1]
  i728.m_MaximumForce = i729[2]
  i728.m_UseAcceleration = i729[3]
  return i728
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i731 = data
  i730.m_Spring = i731[0]
  i730.m_Damper = i731[1]
  return i730
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i733 = data
  i732.m_Limit = i733[0]
  i732.m_Bounciness = i733[1]
  i732.m_ContactDistance = i733[2]
  return i732
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i735 = data
  i734.m_ExtremumSlip = i735[0]
  i734.m_ExtremumValue = i735[1]
  i734.m_AsymptoteSlip = i735[2]
  i734.m_AsymptoteValue = i735[3]
  i734.m_Stiffness = i735[4]
  return i734
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i737 = data
  i736.m_LowerAngle = i737[0]
  i736.m_UpperAngle = i737[1]
  return i736
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i739 = data
  i738.m_MotorSpeed = i739[0]
  i738.m_MaximumMotorTorque = i739[1]
  return i738
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i741 = data
  i740.m_DampingRatio = i741[0]
  i740.m_Frequency = i741[1]
  i740.m_Angle = i741[2]
  return i740
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i743 = data
  i742.m_LowerTranslation = i743[0]
  i742.m_UpperTranslation = i743[1]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i744 = root || new pc.UnityMaterial()
  var i745 = data
  i744.name = i745[0]
  request.r(i745[1], i745[2], 0, i744, 'shader')
  i744.renderQueue = i745[3]
  i744.enableInstancing = !!i745[4]
  var i747 = i745[5]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i747[i + 0]) );
  }
  i744.floatParameters = i746
  var i749 = i745[6]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i749[i + 0]) );
  }
  i744.colorParameters = i748
  var i751 = i745[7]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i751[i + 0]) );
  }
  i744.vectorParameters = i750
  var i753 = i745[8]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i753[i + 0]) );
  }
  i744.textureParameters = i752
  var i755 = i745[9]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i755[i + 0]) );
  }
  i744.materialFlags = i754
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i759 = data
  i758.name = i759[0]
  i758.value = i759[1]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i763 = data
  i762.name = i763[0]
  i762.value = new pc.Color(i763[1], i763[2], i763[3], i763[4])
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i767 = data
  i766.name = i767[0]
  i766.value = new pc.Vec4( i767[1], i767[2], i767[3], i767[4] )
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i771 = data
  i770.name = i771[0]
  request.r(i771[1], i771[2], 0, i770, 'value')
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i775 = data
  i774.name = i775[0]
  i774.enabled = !!i775[1]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i777 = data
  i776.name = i777[0]
  i776.width = i777[1]
  i776.height = i777[2]
  i776.mipmapCount = i777[3]
  i776.anisoLevel = i777[4]
  i776.filterMode = i777[5]
  i776.hdr = !!i777[6]
  i776.format = i777[7]
  i776.wrapMode = i777[8]
  i776.alphaIsTransparency = !!i777[9]
  i776.alphaSource = i777[10]
  i776.graphicsFormat = i777[11]
  i776.sRGBTexture = !!i777[12]
  i776.desiredColorSpace = i777[13]
  i776.wrapU = i777[14]
  i776.wrapV = i777[15]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i779 = data
  i778.name = i779[0]
  i778.halfPrecision = !!i779[1]
  i778.useSimplification = !!i779[2]
  i778.useUInt32IndexFormat = !!i779[3]
  i778.vertexCount = i779[4]
  i778.aabb = i779[5]
  var i781 = i779[6]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( !!i781[i + 0] );
  }
  i778.streams = i780
  i778.vertices = i779[7]
  var i783 = i779[8]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i783[i + 0]) );
  }
  i778.subMeshes = i782
  var i785 = i779[9]
  var i784 = []
  for(var i = 0; i < i785.length; i += 16) {
    i784.push( new pc.Mat4().setData(i785[i + 0], i785[i + 1], i785[i + 2], i785[i + 3],  i785[i + 4], i785[i + 5], i785[i + 6], i785[i + 7],  i785[i + 8], i785[i + 9], i785[i + 10], i785[i + 11],  i785[i + 12], i785[i + 13], i785[i + 14], i785[i + 15]) );
  }
  i778.bindposes = i784
  var i787 = i779[10]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i787[i + 0]) );
  }
  i778.blendShapes = i786
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i793 = data
  i792.triangles = i793[0]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i799 = data
  i798.name = i799[0]
  var i801 = i799[1]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i801[i + 0]) );
  }
  i798.frames = i800
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i803 = data
  i802.position = new pc.Vec3( i803[0], i803[1], i803[2] )
  i802.scale = new pc.Vec3( i803[3], i803[4], i803[5] )
  i802.rotation = new pc.Quat(i803[6], i803[7], i803[8], i803[9])
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i805 = data
  i804.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i805[0], i804.main)
  i804.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i805[1], i804.colorBySpeed)
  i804.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i805[2], i804.colorOverLifetime)
  i804.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i805[3], i804.emission)
  i804.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i805[4], i804.rotationBySpeed)
  i804.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i805[5], i804.rotationOverLifetime)
  i804.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i805[6], i804.shape)
  i804.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i805[7], i804.sizeBySpeed)
  i804.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i805[8], i804.sizeOverLifetime)
  i804.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i805[9], i804.textureSheetAnimation)
  i804.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i805[10], i804.velocityOverLifetime)
  i804.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i805[11], i804.noise)
  i804.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i805[12], i804.inheritVelocity)
  i804.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i805[13], i804.forceOverLifetime)
  i804.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i805[14], i804.limitVelocityOverLifetime)
  i804.useAutoRandomSeed = !!i805[15]
  i804.randomSeed = i805[16]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemMain()
  var i807 = data
  i806.duration = i807[0]
  i806.loop = !!i807[1]
  i806.prewarm = !!i807[2]
  i806.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.startDelay)
  i806.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[4], i806.startLifetime)
  i806.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[5], i806.startSpeed)
  i806.startSize3D = !!i807[6]
  i806.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[7], i806.startSizeX)
  i806.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[8], i806.startSizeY)
  i806.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[9], i806.startSizeZ)
  i806.startRotation3D = !!i807[10]
  i806.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[11], i806.startRotationX)
  i806.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[12], i806.startRotationY)
  i806.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[13], i806.startRotationZ)
  i806.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i807[14], i806.startColor)
  i806.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[15], i806.gravityModifier)
  i806.simulationSpace = i807[16]
  request.r(i807[17], i807[18], 0, i806, 'customSimulationSpace')
  i806.simulationSpeed = i807[19]
  i806.useUnscaledTime = !!i807[20]
  i806.scalingMode = i807[21]
  i806.playOnAwake = !!i807[22]
  i806.maxParticles = i807[23]
  i806.emitterVelocityMode = i807[24]
  i806.stopAction = i807[25]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i808 = root || new pc.MinMaxCurve()
  var i809 = data
  i808.mode = i809[0]
  i808.curveMin = new pc.AnimationCurve( { keys_flow: i809[1] } )
  i808.curveMax = new pc.AnimationCurve( { keys_flow: i809[2] } )
  i808.curveMultiplier = i809[3]
  i808.constantMin = i809[4]
  i808.constantMax = i809[5]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i810 = root || new pc.MinMaxGradient()
  var i811 = data
  i810.mode = i811[0]
  i810.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i811[1], i810.gradientMin)
  i810.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i811[2], i810.gradientMax)
  i810.colorMin = new pc.Color(i811[3], i811[4], i811[5], i811[6])
  i810.colorMax = new pc.Color(i811[7], i811[8], i811[9], i811[10])
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i813 = data
  i812.mode = i813[0]
  var i815 = i813[1]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i815[i + 0]) );
  }
  i812.colorKeys = i814
  var i817 = i813[2]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i817[i + 0]) );
  }
  i812.alphaKeys = i816
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemColorBySpeed()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i819[1], i818.color)
  i818.range = new pc.Vec2( i819[2], i819[3] )
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i823 = data
  i822.color = new pc.Color(i823[0], i823[1], i823[2], i823[3])
  i822.time = i823[4]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i827 = data
  i826.alpha = i827[0]
  i826.time = i827[1]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemColorOverLifetime()
  var i829 = data
  i828.enabled = !!i829[0]
  i828.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i829[1], i828.color)
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i830 = root || new pc.ParticleSystemEmitter()
  var i831 = data
  i830.enabled = !!i831[0]
  i830.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[1], i830.rateOverTime)
  i830.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i831[2], i830.rateOverDistance)
  var i833 = i831[3]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i833[i + 0]) );
  }
  i830.bursts = i832
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i836 = root || new pc.ParticleSystemBurst()
  var i837 = data
  i836.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i837[0], i836.count)
  i836.cycleCount = i837[1]
  i836.minCount = i837[2]
  i836.maxCount = i837[3]
  i836.repeatInterval = i837[4]
  i836.time = i837[5]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i838 = root || new pc.ParticleSystemRotationBySpeed()
  var i839 = data
  i838.enabled = !!i839[0]
  i838.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[1], i838.x)
  i838.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[2], i838.y)
  i838.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i839[3], i838.z)
  i838.separateAxes = !!i839[4]
  i838.range = new pc.Vec2( i839[5], i839[6] )
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i840 = root || new pc.ParticleSystemRotationOverLifetime()
  var i841 = data
  i840.enabled = !!i841[0]
  i840.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[1], i840.x)
  i840.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[2], i840.y)
  i840.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i841[3], i840.z)
  i840.separateAxes = !!i841[4]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i842 = root || new pc.ParticleSystemShape()
  var i843 = data
  i842.enabled = !!i843[0]
  i842.shapeType = i843[1]
  i842.randomDirectionAmount = i843[2]
  i842.sphericalDirectionAmount = i843[3]
  i842.randomPositionAmount = i843[4]
  i842.alignToDirection = !!i843[5]
  i842.radius = i843[6]
  i842.radiusMode = i843[7]
  i842.radiusSpread = i843[8]
  i842.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[9], i842.radiusSpeed)
  i842.radiusThickness = i843[10]
  i842.angle = i843[11]
  i842.length = i843[12]
  i842.boxThickness = new pc.Vec3( i843[13], i843[14], i843[15] )
  i842.meshShapeType = i843[16]
  request.r(i843[17], i843[18], 0, i842, 'mesh')
  request.r(i843[19], i843[20], 0, i842, 'meshRenderer')
  request.r(i843[21], i843[22], 0, i842, 'skinnedMeshRenderer')
  i842.useMeshMaterialIndex = !!i843[23]
  i842.meshMaterialIndex = i843[24]
  i842.useMeshColors = !!i843[25]
  i842.normalOffset = i843[26]
  i842.arc = i843[27]
  i842.arcMode = i843[28]
  i842.arcSpread = i843[29]
  i842.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i843[30], i842.arcSpeed)
  i842.donutRadius = i843[31]
  i842.position = new pc.Vec3( i843[32], i843[33], i843[34] )
  i842.rotation = new pc.Vec3( i843[35], i843[36], i843[37] )
  i842.scale = new pc.Vec3( i843[38], i843[39], i843[40] )
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i844 = root || new pc.ParticleSystemSizeBySpeed()
  var i845 = data
  i844.enabled = !!i845[0]
  i844.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[1], i844.x)
  i844.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[2], i844.y)
  i844.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[3], i844.z)
  i844.separateAxes = !!i845[4]
  i844.range = new pc.Vec2( i845[5], i845[6] )
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i846 = root || new pc.ParticleSystemSizeOverLifetime()
  var i847 = data
  i846.enabled = !!i847[0]
  i846.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[1], i846.x)
  i846.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[2], i846.y)
  i846.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i847[3], i846.z)
  i846.separateAxes = !!i847[4]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i848 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i849 = data
  i848.enabled = !!i849[0]
  i848.mode = i849[1]
  i848.animation = i849[2]
  i848.numTilesX = i849[3]
  i848.numTilesY = i849[4]
  i848.useRandomRow = !!i849[5]
  i848.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[6], i848.frameOverTime)
  i848.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i849[7], i848.startFrame)
  i848.cycleCount = i849[8]
  i848.rowIndex = i849[9]
  i848.flipU = i849[10]
  i848.flipV = i849[11]
  i848.spriteCount = i849[12]
  var i851 = i849[13]
  var i850 = []
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 2, i850, '')
  }
  i848.sprites = i850
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i854 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i855 = data
  i854.enabled = !!i855[0]
  i854.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[1], i854.x)
  i854.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[2], i854.y)
  i854.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[3], i854.z)
  i854.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[4], i854.radial)
  i854.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[5], i854.speedModifier)
  i854.space = i855[6]
  i854.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[7], i854.orbitalX)
  i854.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[8], i854.orbitalY)
  i854.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[9], i854.orbitalZ)
  i854.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[10], i854.orbitalOffsetX)
  i854.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[11], i854.orbitalOffsetY)
  i854.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[12], i854.orbitalOffsetZ)
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i856 = root || new pc.ParticleSystemNoise()
  var i857 = data
  i856.enabled = !!i857[0]
  i856.separateAxes = !!i857[1]
  i856.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[2], i856.strengthX)
  i856.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[3], i856.strengthY)
  i856.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[4], i856.strengthZ)
  i856.frequency = i857[5]
  i856.damping = !!i857[6]
  i856.octaveCount = i857[7]
  i856.octaveMultiplier = i857[8]
  i856.octaveScale = i857[9]
  i856.quality = i857[10]
  i856.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[11], i856.scrollSpeed)
  i856.scrollSpeedMultiplier = i857[12]
  i856.remapEnabled = !!i857[13]
  i856.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[14], i856.remapX)
  i856.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[15], i856.remapY)
  i856.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[16], i856.remapZ)
  i856.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[17], i856.positionAmount)
  i856.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[18], i856.rotationAmount)
  i856.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[19], i856.sizeAmount)
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i858 = root || new pc.ParticleSystemInheritVelocity()
  var i859 = data
  i858.enabled = !!i859[0]
  i858.mode = i859[1]
  i858.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[2], i858.curve)
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i860 = root || new pc.ParticleSystemForceOverLifetime()
  var i861 = data
  i860.enabled = !!i861[0]
  i860.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[1], i860.x)
  i860.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[2], i860.y)
  i860.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[3], i860.z)
  i860.space = i861[4]
  i860.randomized = !!i861[5]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i862 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i863 = data
  i862.enabled = !!i863[0]
  i862.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[1], i862.limit)
  i862.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[2], i862.limitX)
  i862.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[3], i862.limitY)
  i862.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[4], i862.limitZ)
  i862.dampen = i863[5]
  i862.separateAxes = !!i863[6]
  i862.space = i863[7]
  i862.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[8], i862.drag)
  i862.multiplyDragByParticleSize = !!i863[9]
  i862.multiplyDragByParticleVelocity = !!i863[10]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'mesh')
  i864.meshCount = i865[2]
  i864.activeVertexStreamsCount = i865[3]
  i864.alignment = i865[4]
  i864.renderMode = i865[5]
  i864.sortMode = i865[6]
  i864.lengthScale = i865[7]
  i864.velocityScale = i865[8]
  i864.cameraVelocityScale = i865[9]
  i864.normalDirection = i865[10]
  i864.sortingFudge = i865[11]
  i864.minParticleSize = i865[12]
  i864.maxParticleSize = i865[13]
  i864.pivot = new pc.Vec3( i865[14], i865[15], i865[16] )
  request.r(i865[17], i865[18], 0, i864, 'trailMaterial')
  i864.applyActiveColorSpace = !!i865[19]
  i864.enabled = !!i865[20]
  request.r(i865[21], i865[22], 0, i864, 'sharedMaterial')
  var i867 = i865[23]
  var i866 = []
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 2, i866, '')
  }
  i864.sharedMaterials = i866
  i864.receiveShadows = !!i865[24]
  i864.shadowCastingMode = i865[25]
  i864.sortingLayerID = i865[26]
  i864.sortingOrder = i865[27]
  i864.lightmapIndex = i865[28]
  i864.lightmapSceneIndex = i865[29]
  i864.lightmapScaleOffset = new pc.Vec4( i865[30], i865[31], i865[32], i865[33] )
  i864.lightProbeUsage = i865[34]
  i864.reflectionProbeUsage = i865[35]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i871 = data
  i870.name = i871[0]
  i870.tagId = i871[1]
  i870.enabled = !!i871[2]
  i870.isStatic = !!i871[3]
  i870.layer = i871[4]
  return i870
}

Deserializers["Level1_Hair_Playable"] = function (request, data, root) {
  var i872 = root || request.c( 'Level1_Hair_Playable' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'wetCloth')
  request.r(i873[2], i873[3], 0, i872, 'waterDripingParticle')
  i872.ZoomStep1 = request.d('ZoomPos', i873[4], i872.ZoomStep1)
  var i875 = i873[5]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i872.AllTrash = i874
  var i877 = i873[6]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i872.AllTrashOutlines = i876
  i872.trashDone = !!i873[7]
  i872.trashThrown = i873[8]
  i872.trashTotal = i873[9]
  request.r(i873[10], i873[11], 0, i872, 'bd_Sticky')
  i872.ZoomStep2 = request.d('ZoomPos', i873[12], i872.ZoomStep2)
  request.r(i873[13], i873[14], 0, i872, 'ToolStep2')
  request.r(i873[15], i873[16], 0, i872, 'camFollowStep2')
  var i879 = i873[17]
  var i878 = []
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 2, i878, '')
  }
  i872.AllBugOutlines = i878
  i872.ZoomStep2b = request.d('ZoomPos', i873[18], i872.ZoomStep2b)
  request.r(i873[19], i873[20], 0, i872, 'ToolStep2b')
  request.r(i873[21], i873[22], 0, i872, 'camFollowStep2b')
  request.r(i873[23], i873[24], 0, i872, 'dustColStep2')
  request.r(i873[25], i873[26], 0, i872, 'handIndicationShower')
  request.r(i873[27], i873[28], 0, i872, 'hairDirtyStatic')
  request.r(i873[29], i873[30], 0, i872, 'hairDirtyWetStatic')
  request.r(i873[31], i873[32], 0, i872, 'dryHairAnim')
  i872.ZoomStep3 = request.d('ZoomPos', i873[33], i872.ZoomStep3)
  request.r(i873[34], i873[35], 0, i872, 'ShampooOnHand')
  request.r(i873[36], i873[37], 0, i872, 'ShampooInHandCap')
  request.r(i873[38], i873[39], 0, i872, 'ToolStep3')
  request.r(i873[40], i873[41], 0, i872, 'shampooPatch')
  request.r(i873[42], i873[43], 0, i872, 'handSpriteRend')
  request.r(i873[44], i873[45], 0, i872, 'bottleDefault')
  request.r(i873[46], i873[47], 0, i872, 'bottlePressed')
  request.r(i873[48], i873[49], 0, i872, 'shampooDropping')
  request.r(i873[50], i873[51], 0, i872, 'bottleOpenSfx')
  request.r(i873[52], i873[53], 0, i872, 'bottleSqueezSfx')
  request.r(i873[54], i873[55], 0, i872, 'bottlePourSfx')
  i872.ZoomStep4 = request.d('ZoomPos', i873[56], i872.ZoomStep4)
  request.r(i873[57], i873[58], 0, i872, 'ToolStep4')
  request.r(i873[59], i873[60], 0, i872, 'camFollowStep4')
  request.r(i873[61], i873[62], 0, i872, 'foamLight_E')
  request.r(i873[63], i873[64], 0, i872, 'foam2_E')
  request.r(i873[65], i873[66], 0, i872, 'foamCol')
  request.r(i873[67], i873[68], 0, i872, 'handIndicationHands')
  request.r(i873[69], i873[70], 0, i872, 'progressStep4')
  i872.ZoomStep5a = request.d('ZoomPos', i873[71], i872.ZoomStep5a)
  i872.ZoomStep5b = request.d('ZoomPos', i873[72], i872.ZoomStep5b)
  request.r(i873[73], i873[74], 0, i872, 'ShowerDamaged')
  request.r(i873[75], i873[76], 0, i872, 'ShowerDamaged_Drag')
  request.r(i873[77], i873[78], 0, i872, 'ShowerBackDMG')
  request.r(i873[79], i873[80], 0, i872, 'ShowerInner_dirty')
  request.r(i873[81], i873[82], 0, i872, 'ShowerInner_Target')
  request.r(i873[83], i873[84], 0, i872, 'ShowerFrontDMG')
  request.r(i873[85], i873[86], 0, i872, 'OpenShowerIndication')
  request.r(i873[87], i873[88], 0, i872, 'CloseShowerIndication')
  request.r(i873[89], i873[90], 0, i872, 'showrOpenInput')
  request.r(i873[91], i873[92], 0, i872, 'showerDisk')
  request.r(i873[93], i873[94], 0, i872, 'showerFixReverseAnimDrag')
  request.r(i873[95], i873[96], 0, i872, 'showerDragDamage')
  request.r(i873[97], i873[98], 0, i872, 'ToolStep5Rev')
  request.r(i873[99], i873[100], 0, i872, 'handIndicationShowerPlace')
  i872.ZoomStep5 = request.d('ZoomPos', i873[101], i872.ZoomStep5)
  request.r(i873[102], i873[103], 0, i872, 'ToolStep5')
  request.r(i873[104], i873[105], 0, i872, 'ToolStep5Placeable')
  request.r(i873[106], i873[107], 0, i872, 'toolStep5Progress')
  request.r(i873[108], i873[109], 0, i872, 'toolStep5ProgressHelp')
  request.r(i873[110], i873[111], 0, i872, 'camFollowStep5')
  request.r(i873[112], i873[113], 0, i872, 'showerRender')
  request.r(i873[114], i873[115], 0, i872, 'showerDirty')
  request.r(i873[116], i873[117], 0, i872, 'showerClean')
  request.r(i873[118], i873[119], 0, i872, 'waterShotParticle')
  request.r(i873[120], i873[121], 0, i872, 'showerProblemClip')
  request.r(i873[122], i873[123], 0, i872, 'FixErrorClip')
  i872.ZoomStep6 = request.d('ZoomPos', i873[124], i872.ZoomStep6)
  request.r(i873[125], i873[126], 0, i872, 'ToolStep6')
  request.r(i873[127], i873[128], 0, i872, 'camFollowStep6')
  request.r(i873[129], i873[130], 0, i872, 'wetHairs_E')
  request.r(i873[131], i873[132], 0, i872, 'hairDryFade')
  i872.ZoomStep7 = request.d('ZoomPos', i873[133], i872.ZoomStep7)
  request.r(i873[134], i873[135], 0, i872, 'ToolStep7')
  request.r(i873[136], i873[137], 0, i872, 'camFollowStep7')
  request.r(i873[138], i873[139], 0, i872, 'dryHairs_E')
  request.r(i873[140], i873[141], 0, i872, 'dryCombed_BG')
  request.r(i873[142], i873[143], 0, i872, 'brushController')
  request.r(i873[144], i873[145], 0, i872, 'handIndicationBrush')
  i872.levelName = i873[146]
  i872.levelReward = i873[147]
  request.r(i873[148], i873[149], 0, i872, 'LevelIcon')
  request.r(i873[150], i873[151], 0, i872, 'Level_BG')
  var i881 = i873[152]
  var i880 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 1, i880, '')
  }
  i872.ToolIcons = i880
  var i883 = i873[153]
  var i882 = []
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 2, i882, '')
  }
  i872.AllDrags = i882
  var i885 = i873[154]
  var i884 = []
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 2, i884, '')
  }
  i872.AllSources = i884
  var i887 = i873[155]
  var i886 = []
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 2, i886, '')
  }
  i872.AllScratches = i886
  i872.stepsDone = i873[156]
  i872.levelNo = i873[157]
  i872.partNo = i873[158]
  request.r(i873[159], i873[160], 0, i872, 'bubbleGum')
  return i872
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i888 = root || request.c( 'ZoomPos' )
  var i889 = data
  i888.CameraPos = new pc.Vec3( i889[0], i889[1], i889[2] )
  i888.CameraFOV = i889[3]
  return i888
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i900 = root || request.c( 'PlayableCTA' )
  var i901 = data
  i900.trigger = i901[0]
  i900.afterSeconds = i901[1]
  i900.afterTaps = i901[2]
  request.r(i901[3], i901[4], 0, i900, 'scratchProgress')
  i900.scratchIndex = i901[5]
  i900.progressThreshold = i901[6]
  request.r(i901[7], i901[8], 0, i900, 'watchedTool')
  i900.blockInputOnFire = !!i901[9]
  i900.refireOnEveryTap = !!i901[10]
  i900.refireDelay = i901[11]
  i900.showEndCard = !!i901[12]
  request.r(i901[13], i901[14], 0, i900, 'endCard')
  i900.showEndCardOnProgressTrigger = !!i901[15]
  i900.showEndCardOnToolAppearTrigger = !!i901[16]
  i900.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i901[17], i900.onCtaFired)
  i900.logWhenFired = !!i901[18]
  return i900
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i903 = data
  i902.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i903[0], i902.m_PersistentCalls)
  return i902
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i905 = data
  var i907 = i905[0]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i907.length; i += 1) {
    i906.add(request.d('UnityEngine.Events.PersistentCall', i907[i + 0]));
  }
  i904.m_Calls = i906
  return i904
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'm_Target')
  i910.m_TargetAssemblyTypeName = i911[2]
  i910.m_MethodName = i911[3]
  i910.m_Mode = i911[4]
  i910.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i911[5], i910.m_Arguments)
  i910.m_CallState = i911[6]
  return i910
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i912 = root || request.c( 'PlayableFadeCoverSettings' )
  var i913 = data
  i912.revealDelay = i913[0]
  i912.revealDuration = i913[1]
  return i912
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i914 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'MainCamera')
  i914.RenderType = i915[2]
  request.r(i915[3], i915[4], 0, i914, 'ScratchSurfaceSprite')
  i914.ScratchSurfaceSpriteHasAlpha = !!i915[5]
  i914.MaskProgressCutOffValue = i915[6]
  request.r(i915[7], i915[8], 0, i914, 'EraseTexture')
  i914.EraseTextureScale = new pc.Vec2( i915[9], i915[10] )
  i914.InputEnabled = !!i915[11]
  request.r(i915[12], i915[13], 0, i914, 'Card')
  i914.Mode = i915[14]
  request.r(i915[15], i915[16], 0, i914, 'Progress')
  request.r(i915[17], i915[18], 0, i914, 'MeshCard')
  request.r(i915[19], i915[20], 0, i914, 'SpriteCard')
  request.r(i915[21], i915[22], 0, i914, 'ImageCard')
  request.r(i915[23], i915[24], 0, i914, 'MaskShader')
  request.r(i915[25], i915[26], 0, i914, 'BrushShader')
  request.r(i915[27], i915[28], 0, i914, 'MaskProgressShader')
  request.r(i915[29], i915[30], 0, i914, 'MaskProgressCutOffShader')
  return i914
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i916 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'MainCamera')
  request.r(i917[2], i917[3], 0, i916, 'Surface')
  i916.RenderTextureQuality = i917[4]
  request.r(i917[5], i917[6], 0, i916, 'Eraser')
  request.r(i917[7], i917[8], 0, i916, 'Progress')
  request.r(i917[9], i917[10], 0, i916, 'ScratchSurface')
  request.r(i917[11], i917[12], 0, i916, 'RenderTexture')
  i916.BrushScale = new pc.Vec2( i917[13], i917[14] )
  request.r(i917[15], i917[16], 0, i916, 'ToolTip')
  i916.InputEnabled = !!i917[17]
  i916.IsScratching = !!i917[18]
  i916.useChangingScale = !!i917[19]
  i916.useGivenBrushScale = !!i917[20]
  i916.canSpreadMask = !!i917[21]
  i916.shouldPaintHoles = !!i917[22]
  i916.canRotateTip = !!i917[23]
  i916._mode = i917[24]
  return i916
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i918 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'Card')
  i918.currentProgress = i919[2]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'animatorController')
  request.r(i921[2], i921[3], 0, i920, 'avatar')
  i920.updateMode = i921[4]
  i920.hasTransformHierarchy = !!i921[5]
  i920.applyRootMotion = !!i921[6]
  var i923 = i921[7]
  var i922 = []
  for(var i = 0; i < i923.length; i += 2) {
  request.r(i923[i + 0], i923[i + 1], 2, i922, '')
  }
  i920.humanBones = i922
  i920.enabled = !!i921[8]
  return i920
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i926 = root || request.c( 'BD_AnimationHelper' )
  var i927 = data
  i926.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i927[0], i926.OnAnimationComplete)
  request.r(i927[1], i927[2], 0, i926, 'sfxClip')
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i929 = data
  i928.color = new pc.Color(i929[0], i929[1], i929[2], i929[3])
  request.r(i929[4], i929[5], 0, i928, 'sprite')
  i928.flipX = !!i929[6]
  i928.flipY = !!i929[7]
  i928.drawMode = i929[8]
  i928.size = new pc.Vec2( i929[9], i929[10] )
  i928.tileMode = i929[11]
  i928.adaptiveModeThreshold = i929[12]
  i928.maskInteraction = i929[13]
  i928.spriteSortPoint = i929[14]
  i928.enabled = !!i929[15]
  request.r(i929[16], i929[17], 0, i928, 'sharedMaterial')
  var i931 = i929[18]
  var i930 = []
  for(var i = 0; i < i931.length; i += 2) {
  request.r(i931[i + 0], i931[i + 1], 2, i930, '')
  }
  i928.sharedMaterials = i930
  i928.receiveShadows = !!i929[19]
  i928.shadowCastingMode = i929[20]
  i928.sortingLayerID = i929[21]
  i928.sortingOrder = i929[22]
  i928.lightmapIndex = i929[23]
  i928.lightmapSceneIndex = i929[24]
  i928.lightmapScaleOffset = new pc.Vec4( i929[25], i929[26], i929[27], i929[28] )
  i928.lightProbeUsage = i929[29]
  i928.reflectionProbeUsage = i929[30]
  return i928
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'm_RootBone')
  var i935 = i933[2]
  var i934 = []
  for(var i = 0; i < i935.length; i += 2) {
  request.r(i935[i + 0], i935[i + 1], 2, i934, '')
  }
  i932.m_BoneTransforms = i934
  i932.m_AlwaysUpdate = !!i933[3]
  i932.m_AutoRebind = !!i933[4]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i937 = data
  var i939 = i937[0]
  var i938 = []
  for(var i = 0; i < i939.length; i += 3) {
    i938.push( new pc.Vec3( i939[i + 0], i939[i + 1], i939[i + 2] ) );
  }
  i936.positions = i938
  i936.positionCount = i937[1]
  i936.time = i937[2]
  i936.startWidth = i937[3]
  i936.endWidth = i937[4]
  i936.widthMultiplier = i937[5]
  i936.autodestruct = !!i937[6]
  i936.emitting = !!i937[7]
  i936.numCornerVertices = i937[8]
  i936.numCapVertices = i937[9]
  i936.minVertexDistance = i937[10]
  i936.colorGradient = i937[11] ? new pc.ColorGradient(i937[11][0], i937[11][1], i937[11][2]) : null
  i936.startColor = new pc.Color(i937[12], i937[13], i937[14], i937[15])
  i936.endColor = new pc.Color(i937[16], i937[17], i937[18], i937[19])
  i936.generateLightingData = !!i937[20]
  i936.textureMode = i937[21]
  i936.alignment = i937[22]
  i936.widthCurve = new pc.AnimationCurve( { keys_flow: i937[23] } )
  i936.enabled = !!i937[24]
  request.r(i937[25], i937[26], 0, i936, 'sharedMaterial')
  var i941 = i937[27]
  var i940 = []
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 2, i940, '')
  }
  i936.sharedMaterials = i940
  i936.receiveShadows = !!i937[28]
  i936.shadowCastingMode = i937[29]
  i936.sortingLayerID = i937[30]
  i936.sortingOrder = i937[31]
  i936.lightmapIndex = i937[32]
  i936.lightmapSceneIndex = i937[33]
  i936.lightmapScaleOffset = new pc.Vec4( i937[34], i937[35], i937[36], i937[37] )
  i936.lightProbeUsage = i937[38]
  i936.reflectionProbeUsage = i937[39]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i945 = data
  i944.textureMode = i945[0]
  i944.alignment = i945[1]
  i944.widthCurve = new pc.AnimationCurve( { keys_flow: i945[2] } )
  i944.colorGradient = i945[3] ? new pc.ColorGradient(i945[3][0], i945[3][1], i945[3][2]) : null
  var i947 = i945[4]
  var i946 = []
  for(var i = 0; i < i947.length; i += 3) {
    i946.push( new pc.Vec3( i947[i + 0], i947[i + 1], i947[i + 2] ) );
  }
  i944.positions = i946
  i944.positionCount = i945[5]
  i944.widthMultiplier = i945[6]
  i944.startWidth = i945[7]
  i944.endWidth = i945[8]
  i944.numCornerVertices = i945[9]
  i944.numCapVertices = i945[10]
  i944.useWorldSpace = !!i945[11]
  i944.loop = !!i945[12]
  i944.startColor = new pc.Color(i945[13], i945[14], i945[15], i945[16])
  i944.endColor = new pc.Color(i945[17], i945[18], i945[19], i945[20])
  i944.generateLightingData = !!i945[21]
  i944.enabled = !!i945[22]
  request.r(i945[23], i945[24], 0, i944, 'sharedMaterial')
  var i949 = i945[25]
  var i948 = []
  for(var i = 0; i < i949.length; i += 2) {
  request.r(i949[i + 0], i949[i + 1], 2, i948, '')
  }
  i944.sharedMaterials = i948
  i944.receiveShadows = !!i945[26]
  i944.shadowCastingMode = i945[27]
  i944.sortingLayerID = i945[28]
  i944.sortingOrder = i945[29]
  i944.lightmapIndex = i945[30]
  i944.lightmapSceneIndex = i945[31]
  i944.lightmapScaleOffset = new pc.Vec4( i945[32], i945[33], i945[34], i945[35] )
  i944.lightProbeUsage = i945[36]
  i944.reflectionProbeUsage = i945[37]
  return i944
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i950 = root || request.c( 'StaticFixedPipe' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'lineRenderer')
  request.r(i951[2], i951[3], 0, i950, 'toolTransform')
  request.r(i951[4], i951[5], 0, i950, 'toolDirectionPoint')
  request.r(i951[6], i951[7], 0, i950, 'fixedEndPoint')
  i950.segmentCount = i951[8]
  i950.totalLength = i951[9]
  i950.constraintIterations = i951[10]
  i950.gravity = new pc.Vec3( i951[11], i951[12], i951[13] )
  i950.pipeWidth = i951[14]
  return i950
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i952 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i953 = data
  i952.targetIsSelf = !!i953[0]
  request.r(i953[1], i953[2], 0, i952, 'targetGO')
  i952.tweenTargetIsTargetGO = !!i953[3]
  i952.delay = i953[4]
  i952.duration = i953[5]
  i952.easeType = i953[6]
  i952.easeCurve = new pc.AnimationCurve( { keys_flow: i953[7] } )
  i952.loopType = i953[8]
  i952.loops = i953[9]
  i952.id = i953[10]
  i952.isRelative = !!i953[11]
  i952.isFrom = !!i953[12]
  i952.isIndependentUpdate = !!i953[13]
  i952.autoKill = !!i953[14]
  i952.autoGenerate = !!i953[15]
  i952.isActive = !!i953[16]
  i952.isValid = !!i953[17]
  request.r(i953[18], i953[19], 0, i952, 'target')
  i952.animationType = i953[20]
  i952.targetType = i953[21]
  i952.forcedTargetType = i953[22]
  i952.autoPlay = !!i953[23]
  i952.useTargetAsV3 = !!i953[24]
  i952.endValueFloat = i953[25]
  i952.endValueV3 = new pc.Vec3( i953[26], i953[27], i953[28] )
  i952.endValueV2 = new pc.Vec2( i953[29], i953[30] )
  i952.endValueColor = new pc.Color(i953[31], i953[32], i953[33], i953[34])
  i952.endValueString = i953[35]
  i952.endValueRect = UnityEngine.Rect.MinMaxRect(i953[36], i953[37], i953[38], i953[39])
  request.r(i953[40], i953[41], 0, i952, 'endValueTransform')
  i952.optionalBool0 = !!i953[42]
  i952.optionalBool1 = !!i953[43]
  i952.optionalFloat0 = i953[44]
  i952.optionalInt0 = i953[45]
  i952.optionalRotationMode = i953[46]
  i952.optionalScrambleMode = i953[47]
  i952.optionalShakeRandomnessMode = i953[48]
  i952.optionalString = i953[49]
  i952.updateType = i953[50]
  i952.isSpeedBased = !!i953[51]
  i952.hasOnStart = !!i953[52]
  i952.hasOnPlay = !!i953[53]
  i952.hasOnUpdate = !!i953[54]
  i952.hasOnStepComplete = !!i953[55]
  i952.hasOnComplete = !!i953[56]
  i952.hasOnTweenCreated = !!i953[57]
  i952.hasOnRewind = !!i953[58]
  i952.onStart = request.d('UnityEngine.Events.UnityEvent', i953[59], i952.onStart)
  i952.onPlay = request.d('UnityEngine.Events.UnityEvent', i953[60], i952.onPlay)
  i952.onUpdate = request.d('UnityEngine.Events.UnityEvent', i953[61], i952.onUpdate)
  i952.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i953[62], i952.onStepComplete)
  i952.onComplete = request.d('UnityEngine.Events.UnityEvent', i953[63], i952.onComplete)
  i952.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i953[64], i952.onTweenCreated)
  i952.onRewind = request.d('UnityEngine.Events.UnityEvent', i953[65], i952.onRewind)
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i955 = data
  i954.usedByComposite = !!i955[0]
  i954.autoTiling = !!i955[1]
  i954.size = new pc.Vec2( i955[2], i955[3] )
  i954.edgeRadius = i955[4]
  i954.enabled = !!i955[5]
  i954.isTrigger = !!i955[6]
  i954.usedByEffector = !!i955[7]
  i954.density = i955[8]
  i954.offset = new pc.Vec2( i955[9], i955[10] )
  request.r(i955[11], i955[12], 0, i954, 'material')
  return i954
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i956 = root || request.c( 'BasicDrag' )
  var i957 = data
  i956.canDrag = !!i957[0]
  i956.dragByDelta = !!i957[1]
  i956.isDragging = !!i957[2]
  i956.moveWithPointer = !!i957[3]
  i956.canReturn = !!i957[4]
  i956.jumpOnReturn = !!i957[5]
  i956.returnTime = i957[6]
  i956.Tool_Offset = new pc.Vec3( i957[7], i957[8], i957[9] )
  i956.canScaleIncrease = !!i957[10]
  i956.Self_ScaleNew = new pc.Vec3( i957[11], i957[12], i957[13] )
  i956.canRotateOnPick = !!i957[14]
  i956.startRot = new pc.Vec3( i957[15], i957[16], i957[17] )
  i956.newRot = new pc.Vec3( i957[18], i957[19], i957[20] )
  var i959 = i957[21]
  var i958 = []
  for(var i = 0; i < i959.length; i += 2) {
  request.r(i959[i + 0], i959[i + 1], 2, i958, '')
  }
  i956.childSprite = i958
  request.r(i957[22], i957[23], 0, i956, 'ToolSelectClip')
  request.r(i957[24], i957[25], 0, i956, 'ToolLoopClip')
  request.r(i957[26], i957[27], 0, i956, 'thisParticles')
  i956.onDragparticle = !!i957[28]
  request.r(i957[29], i957[30], 0, i956, 'dragParticles')
  request.r(i957[31], i957[32], 0, i956, 'anim')
  i956.startPos = new pc.Vec3( i957[33], i957[34], i957[35] )
  i956.startScale = new pc.Vec3( i957[36], i957[37], i957[38] )
  i956.Vibration = !!i957[39]
  i956.isPlacedCannotMove = !!i957[40]
  i956.isObjectMovingWhileDragging = !!i957[41]
  i956.OnMouseDownEvent = request.d('System.Action', i957[42], i956.OnMouseDownEvent)
  i956.OnMouseUpEvent = request.d('System.Action', i957[43], i956.OnMouseUpEvent)
  i956.ProgStartEvent = request.d('System.Action', i957[44], i956.ProgStartEvent)
  i956.ProgEndEvent = request.d('System.Action', i957[45], i956.ProgEndEvent)
  i956.canCallMouseUpWhenGamePaused = !!i957[46]
  i956.ClampX_L = i957[47]
  i956.ClampX_H = i957[48]
  i956.ClampY_L = i957[49]
  i956.ClampY_H = i957[50]
  i956.startOrder = i957[51]
  i956.dontResetItIsInCollider = !!i957[52]
  request.r(i957[53], i957[54], 0, i956, 'thisCollider')
  request.r(i957[55], i957[56], 0, i956, 'thisSR')
  i956.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i957[57], i956.OnMouseDownEventIndependentFromCanDrag)
  return i956
}

Deserializers["System.Action"] = function (request, data, root) {
  var i962 = root || request.c( 'System.Action' )
  var i963 = data
  return i962
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i964 = root || request.c( 'BD_Clamp' )
  var i965 = data
  i964.ClampX_L = i965[0]
  i964.ClampX_H = i965[1]
  i964.ClampY_L = i965[2]
  i964.ClampY_H = i965[3]
  return i964
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i966 = root || request.c( 'OutlinePulse' )
  var i967 = data
  i966.smallThickness = i967[0]
  i966.largeThickness = i967[1]
  i966.transitionSpeed = i967[2]
  i966.animationSpeed = i967[3]
  i966.isThickOutline = !!i967[4]
  i966.animate = !!i967[5]
  i966.hideSpriteOnly = !!i967[6]
  return i966
}

Deserializers["BD_ItemPick"] = function (request, data, root) {
  var i968 = root || request.c( 'BD_ItemPick' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'Tool')
  request.r(i969[2], i969[3], 0, i968, 'Outline')
  request.r(i969[4], i969[5], 0, i968, 'itemRend')
  request.r(i969[6], i969[7], 0, i968, 'pick_sp')
  i968.OnTap = request.d('UnityEngine.Events.UnityEvent', i969[8], i968.OnTap)
  i968.OnComplete = request.d('UnityEngine.Events.UnityEvent', i969[9], i968.OnComplete)
  request.r(i969[10], i969[11], 0, i968, 'Clip')
  i968.minDragDistance = i969[12]
  i968.isTaped = !!i969[13]
  return i968
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i971 = data
  request.r(i971[0], i971[1], 0, i970, 'm_ObjectArgument')
  i970.m_ObjectArgumentAssemblyTypeName = i971[2]
  i970.m_IntArgument = i971[3]
  i970.m_FloatArgument = i971[4]
  i970.m_StringArgument = i971[5]
  i970.m_BoolArgument = !!i971[6]
  return i970
}

Deserializers["BD_Sticky"] = function (request, data, root) {
  var i972 = root || request.c( 'BD_Sticky' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'anim')
  i972.isVerticlePull = !!i973[2]
  request.r(i973[3], i973[4], 0, i972, 'pickSfx')
  request.r(i973[5], i973[6], 0, i972, 'pulledClip')
  request.r(i973[7], i973[8], 0, i972, 'pullSource')
  i972.OnComplete = request.d('UnityEngine.Events.UnityEvent', i973[9], i972.OnComplete)
  i972.changeLayerPick = !!i973[10]
  request.r(i973[11], i973[12], 0, i972, 'sp_rendr')
  i972.def_layerNo = i973[13]
  i972.tar_LayerNo = i973[14]
  i972.direction = i973[15]
  i972.dragThreshold = i973[16]
  i972.pullDistanceToFree = i973[17]
  i972.returnSpeed = i973[18]
  i972.resistance = i973[19]
  var i975 = i973[20]
  var i974 = []
  for(var i = 0; i < i975.length; i += 2) {
  request.r(i975[i + 0], i975[i + 1], 2, i974, '')
  }
  i972.StartBones = i974
  var i977 = i973[21]
  var i976 = []
  for(var i = 0; i < i977.length; i += 2) {
  request.r(i977[i + 0], i977[i + 1], 2, i976, '')
  }
  i972.EndBones = i976
  request.r(i973[22], i973[23], 0, i972, 'BonePivot')
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'clip')
  request.r(i979[2], i979[3], 0, i978, 'outputAudioMixerGroup')
  i978.playOnAwake = !!i979[4]
  i978.loop = !!i979[5]
  i978.time = i979[6]
  i978.volume = i979[7]
  i978.pitch = i979[8]
  i978.enabled = !!i979[9]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i981 = data
  i980.radius = i981[0]
  i980.enabled = !!i981[1]
  i980.isTrigger = !!i981[2]
  i980.usedByEffector = !!i981[3]
  i980.density = i981[4]
  i980.offset = new pc.Vec2( i981[5], i981[6] )
  request.r(i981[7], i981[8], 0, i980, 'material')
  return i980
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i982 = root || request.c( 'PlayParticlesOnCollision' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'Target')
  request.r(i983[2], i983[3], 0, i982, 'ParticlePrefab')
  i982.destroyIt = !!i983[4]
  i982.stayAtPlace = !!i983[5]
  i982.disableOnCollision = !!i983[6]
  i982.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i983[7], i982.OnCollisionEvent)
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i985 = data
  i984.frontSortingLayerID = i985[0]
  i984.frontSortingOrder = i985[1]
  i984.backSortingLayerID = i985[2]
  i984.backSortingOrder = i985[3]
  i984.alphaCutoff = i985[4]
  request.r(i985[5], i985[6], 0, i984, 'sprite')
  i984.tileMode = i985[7]
  i984.isCustomRangeActive = !!i985[8]
  i984.spriteSortPoint = i985[9]
  i984.enabled = !!i985[10]
  request.r(i985[11], i985[12], 0, i984, 'sharedMaterial')
  var i987 = i985[13]
  var i986 = []
  for(var i = 0; i < i987.length; i += 2) {
  request.r(i987[i + 0], i987[i + 1], 2, i986, '')
  }
  i984.sharedMaterials = i986
  i984.receiveShadows = !!i985[14]
  i984.shadowCastingMode = i985[15]
  i984.sortingLayerID = i985[16]
  i984.sortingOrder = i985[17]
  i984.lightmapIndex = i985[18]
  i984.lightmapSceneIndex = i985[19]
  i984.lightmapScaleOffset = new pc.Vec4( i985[20], i985[21], i985[22], i985[23] )
  i984.lightProbeUsage = i985[24]
  i984.reflectionProbeUsage = i985[25]
  return i984
}

Deserializers["PlayTweenOnHit"] = function (request, data, root) {
  var i988 = root || request.c( 'PlayTweenOnHit' )
  var i989 = data
  i988.isContinueous = !!i989[0]
  request.r(i989[1], i989[2], 0, i988, 'tool')
  var i991 = i989[3]
  var i990 = []
  for(var i = 0; i < i991.length; i += 2) {
  request.r(i991[i + 0], i991[i + 1], 2, i990, '')
  }
  i988.animsToPlay = i990
  request.r(i989[4], i989[5], 0, i988, 'tipTarget')
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i995 = data
  i994.usedByComposite = !!i995[0]
  i994.autoTiling = !!i995[1]
  var i997 = i995[2]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
  var i999 = i997[i + 0]
  var i998 = []
  for(var i = 0; i < i999.length; i += 2) {
    i998.push( new pc.Vec2( i999[i + 0], i999[i + 1] ) );
  }
    i996.push( i998 );
  }
  i994.points = i996
  i994.enabled = !!i995[3]
  i994.isTrigger = !!i995[4]
  i994.usedByEffector = !!i995[5]
  i994.density = i995[6]
  i994.offset = new pc.Vec2( i995[7], i995[8] )
  request.r(i995[9], i995[10], 0, i994, 'material')
  return i994
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i1006 = root || request.c( 'PlaySfxOnCollision' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'Tip')
  i1006.Mode = i1007[2]
  request.r(i1007[3], i1007[4], 0, i1006, 'DragInput')
  request.r(i1007[5], i1007[6], 0, i1006, 'Source')
  i1006.startVol = i1007[7]
  i1006.targetVol = i1007[8]
  i1006.duration = i1007[9]
  request.r(i1007[10], i1007[11], 0, i1006, 'Particles')
  i1006.isDone = !!i1007[12]
  i1006.isInArea = !!i1007[13]
  i1006.isPlaying = !!i1007[14]
  return i1006
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i1008 = root || request.c( 'InteractableBones' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'Tip')
  i1008.MoveAmount = i1009[2]
  i1008.MoveSpeed = i1009[3]
  i1008.ShakeSpeed = i1009[4]
  i1008.MovementThreshold = i1009[5]
  i1008.MoveX = !!i1009[6]
  i1008.MoveY = !!i1009[7]
  return i1008
}

Deserializers["WaypointFollower"] = function (request, data, root) {
  var i1010 = root || request.c( 'WaypointFollower' )
  var i1011 = data
  var i1013 = i1011[0]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 2) {
  request.r(i1013[i + 0], i1013[i + 1], 2, i1012, '')
  }
  i1010.waypoints = i1012
  i1010.speed = i1011[1]
  i1010.rotationSpeed = i1011[2]
  i1010.loop = !!i1011[3]
  i1010.reverse = !!i1011[4]
  i1010.canMove = !!i1011[5]
  request.r(i1011[6], i1011[7], 0, i1010, 'movingSfx')
  return i1010
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i1014 = root || request.c( 'BD_Action' )
  var i1015 = data
  i1014.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i1015[0], i1014.OnMouseDownEvent)
  i1014.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i1015[1], i1014.OnMouseUpEvent)
  i1014.setToolLayer = !!i1015[2]
  request.r(i1015[3], i1015[4], 0, i1014, 'tool_SP')
  return i1014
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i1016 = root || request.c( 'BD_CameraFollow' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'Tool')
  request.r(i1017[2], i1017[3], 0, i1016, 'Pivot')
  i1016.FOV = i1017[4]
  i1016.Y_L = i1017[5]
  i1016.Y_H = i1017[6]
  i1016.X_L = i1017[7]
  i1016.X_R = i1017[8]
  i1016.startDelay = i1017[9]
  i1016.duration = i1017[10]
  return i1016
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i1018 = root || request.c( 'BD_ToolRotate' )
  var i1019 = data
  i1018.startDelay = i1019[0]
  request.r(i1019[1], i1019[2], 0, i1018, 'Tool')
  request.r(i1019[3], i1019[4], 0, i1018, 'Clamp')
  request.r(i1019[5], i1019[6], 0, i1018, 'Pivot')
  i1018.MinAngle = new pc.Vec3( i1019[7], i1019[8], i1019[9] )
  i1018.MaxAngle = new pc.Vec3( i1019[10], i1019[11], i1019[12] )
  i1018.rotationSpeed = i1019[13]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1021 = data
  i1020.bodyType = i1021[0]
  request.r(i1021[1], i1021[2], 0, i1020, 'material')
  i1020.simulated = !!i1021[3]
  i1020.useAutoMass = !!i1021[4]
  i1020.mass = i1021[5]
  i1020.drag = i1021[6]
  i1020.angularDrag = i1021[7]
  i1020.gravityScale = i1021[8]
  i1020.collisionDetectionMode = i1021[9]
  i1020.sleepMode = i1021[10]
  i1020.constraints = i1021[11]
  return i1020
}

Deserializers["BugKill_Tip"] = function (request, data, root) {
  var i1022 = root || request.c( 'BugKill_Tip' )
  var i1023 = data
  var i1025 = i1023[0]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 2) {
  request.r(i1025[i + 0], i1025[i + 1], 2, i1024, '')
  }
  i1022.targets = i1024
  i1022.waypointFollower = !!i1023[1]
  i1022.fallSpeed = i1023[2]
  i1022.totalTargets = i1023[3]
  i1022.killCount = i1023[4]
  request.r(i1023[5], i1023[6], 0, i1022, 'bugKillSfx')
  i1022.OnComplete = request.d('UnityEngine.Events.UnityEvent', i1023[7], i1022.OnComplete)
  return i1022
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i1028 = root || request.c( 'BD_Progress' )
  var i1029 = data
  var i1031 = i1029[0]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( request.d('ScratchData', i1031[i + 0]) );
  }
  i1028.AllScratches = i1030
  i1028.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i1029[1], i1028.OnScratchComplete)
  i1028.isProgDone = !!i1029[2]
  i1028.canCallComplete = !!i1029[3]
  i1028.CollectiveAppear = !!i1029[4]
  i1028.tipControl = !!i1029[5]
  i1028.progressControl = !!i1029[6]
  request.r(i1029[7], i1029[8], 0, i1028, 'thisDrag')
  i1028.CompleteEvent = request.d('System.Action', i1029[9], i1028.CompleteEvent)
  i1028.SubCompleteEvent = request.d('System.Action', i1029[10], i1028.SubCompleteEvent)
  return i1028
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i1034 = root || request.c( 'ScratchData' )
  var i1035 = data
  request.r(i1035[0], i1035[1], 0, i1034, 'ScratchManager')
  i1034.scratchLimit = i1035[2]
  i1034.isComplete = !!i1035[3]
  return i1034
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i1036 = root || request.c( 'BD_ProgressHelper' )
  var i1037 = data
  request.r(i1037[0], i1037[1], 0, i1036, 'BD_Progress')
  request.r(i1037[2], i1037[3], 0, i1036, 'fadeSprite')
  i1036.fadeIn = !!i1037[4]
  return i1036
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i1038 = root || request.c( 'ActionOnTap' )
  var i1039 = data
  i1038.OnTap = request.d('UnityEngine.Events.UnityEvent', i1039[0], i1038.OnTap)
  i1038.OnTapExtra = request.d('System.Action', i1039[1], i1038.OnTapExtra)
  return i1038
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i1040 = root || request.c( 'BD_SpriteChange' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'BD')
  request.r(i1041[2], i1041[3], 0, i1040, 'SR')
  request.r(i1041[4], i1041[5], 0, i1040, 'Default')
  request.r(i1041[6], i1041[7], 0, i1040, 'Picked')
  i1040.resetOnRelease = !!i1041[8]
  return i1040
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i1042 = root || request.c( 'BD_AnimatorDrag' )
  var i1043 = data
  request.r(i1043[0], i1043[1], 0, i1042, 'BD')
  request.r(i1043[2], i1043[3], 0, i1042, 'anim')
  request.r(i1043[4], i1043[5], 0, i1042, 'Source')
  i1042.Vibration = !!i1043[6]
  i1042.isCompletable = !!i1043[7]
  i1042.completionThreshold = i1043[8]
  i1042.OnComplete = request.d('UnityEngine.Events.UnityEvent', i1043[9], i1042.OnComplete)
  return i1042
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i1044 = root || request.c( 'PlaceItem' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'thisDrag')
  request.r(i1045[2], i1045[3], 0, i1044, 'Target')
  request.r(i1045[4], i1045[5], 0, i1044, 'Clip')
  i1044.jumpOnPlace = !!i1045[6]
  i1044.jumpHeight = i1045[7]
  i1044.jumpDuration = i1045[8]
  i1044.settleDuration = i1045[9]
  i1044.isPlaced = !!i1045[10]
  i1044.isInsideCollider = !!i1045[11]
  i1044.changeScaleOnPlace = !!i1045[12]
  request.r(i1045[13], i1045[14], 0, i1044, 'item')
  i1044.newScaleOnPlace = new pc.Vec3( i1045[15], i1045[16], i1045[17] )
  i1044.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i1045[18], i1044.OnPlaced)
  return i1044
}

Deserializers["BD_Audio"] = function (request, data, root) {
  var i1046 = root || request.c( 'BD_Audio' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'BD')
  request.r(i1047[2], i1047[3], 0, i1046, 'Source')
  i1046.shouldRestart = !!i1047[4]
  i1046.startVol = i1047[5]
  i1046.targetVol = i1047[6]
  i1046.duration = i1047[7]
  i1046.startDelay = i1047[8]
  return i1046
}

Deserializers["Level1_HairAnim"] = function (request, data, root) {
  var i1048 = root || request.c( 'Level1_HairAnim' )
  var i1049 = data
  i1048.holdDuration = i1049[0]
  request.r(i1049[1], i1049[2], 0, i1048, 'targetSprite')
  i1048.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i1049[3], i1048.onHoldComplete)
  i1048.isHolding = !!i1049[4]
  request.r(i1049[5], i1049[6], 0, i1048, 'targetObj')
  request.r(i1049[7], i1049[8], 0, i1048, 'thisTool')
  request.r(i1049[9], i1049[10], 0, i1048, 'thisToolTip')
  var i1051 = i1049[11]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 2) {
  request.r(i1051[i + 0], i1051[i + 1], 2, i1050, '')
  }
  i1048.hairsAnim = i1050
  var i1053 = i1049[12]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 2) {
  request.r(i1053[i + 0], i1053[i + 1], 2, i1052, '')
  }
  i1048.hairsRend = i1052
  i1048.hairsRendFadeThreshold = i1049[13]
  request.r(i1049[14], i1049[15], 0, i1048, 'wetHairRend')
  request.r(i1049[16], i1049[17], 0, i1048, 'dryHairRend')
  request.r(i1049[18], i1049[19], 0, i1048, 'dryHairRendBack')
  i1048.hairAnimStopDuration = i1049[20]
  i1048.hairAnimResumeDuration = i1049[21]
  return i1048
}

Deserializers["BD_TapandHold"] = function (request, data, root) {
  var i1054 = root || request.c( 'BD_TapandHold' )
  var i1055 = data
  i1054.holdDuration = i1055[0]
  i1054.updateVisuals = !!i1055[1]
  request.r(i1055[2], i1055[3], 0, i1054, 'targetSprite')
  i1054.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i1055[4], i1054.onHoldComplete)
  i1054.onCompleteProgress = request.d('UnityEngine.Events.UnityEvent', i1055[5], i1054.onCompleteProgress)
  i1054.currentProgress = i1055[6]
  i1054.isHolding = !!i1055[7]
  request.r(i1055[8], i1055[9], 0, i1054, 'targetObj')
  request.r(i1055[10], i1055[11], 0, i1054, 'thisTool')
  request.r(i1055[12], i1055[13], 0, i1054, 'thisToolTip')
  return i1054
}

Deserializers["TapandHold_Simple"] = function (request, data, root) {
  var i1056 = root || request.c( 'TapandHold_Simple' )
  var i1057 = data
  request.r(i1057[0], i1057[1], 0, i1056, 'actionSfx')
  i1056.holdDuration = i1057[2]
  i1056.dragThreshold = i1057[3]
  i1056.fadeInOnHold = !!i1057[4]
  i1056.fadeOutOnRelease = !!i1057[5]
  request.r(i1057[6], i1057[7], 0, i1056, 'targetSprite')
  i1056.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i1057[8], i1056.onHoldComplete)
  i1056.currentProgress = i1057[9]
  i1056.isHolding = !!i1057[10]
  i1056.isCompleted = !!i1057[11]
  request.r(i1057[12], i1057[13], 0, i1056, 'thisTool')
  return i1056
}

Deserializers["DraggableBrush"] = function (request, data, root) {
  var i1058 = root || request.c( 'DraggableBrush' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'BD_Progress')
  var i1061 = i1059[2]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('DraggableBrush+Step')))
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.add(request.d('DraggableBrush+Step', i1061[i + 0]));
  }
  i1058.movementSteps = i1060
  i1058.snapSensitivity = i1059[3]
  i1058.OnComplete = request.d('UnityEngine.Events.UnityEvent', i1059[4], i1058.OnComplete)
  return i1058
}

Deserializers["DraggableBrush+Step"] = function (request, data, root) {
  var i1064 = root || request.c( 'DraggableBrush+Step' )
  var i1065 = data
  i1064.stepName = i1065[0]
  i1064.startX = i1065[1]
  i1064.startY = i1065[2]
  i1064.endY = i1065[3]
  return i1064
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i1066 = root || request.c( 'SpriteButton' )
  var i1067 = data
  i1066.isLocked = !!i1067[0]
  i1066.lockMsg = i1067[1]
  i1066.onClick = request.d('UnityEngine.Events.UnityEvent', i1067[2], i1066.onClick)
  i1066.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i1067[3], i1066.onLockedClick)
  i1066.isLevelBtnSfx = !!i1067[4]
  request.r(i1067[5], i1067[6], 0, i1066, 'pivot')
  i1066.reductionChange = i1067[7]
  i1066.animationDuration = i1067[8]
  return i1066
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i1068 = root || request.c( 'DestroyObj' )
  var i1069 = data
  i1068.destroyDelay = i1069[0]
  return i1068
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i1070 = root || request.c( 'MenuLevel' )
  var i1071 = data
  request.r(i1071[0], i1071[1], 0, i1070, 'menuLevelBtnUpdate')
  var i1073 = i1071[2]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('MenuLevelData', i1073[i + 0]) );
  }
  i1070.AllSteps = i1072
  request.r(i1071[3], i1071[4], 0, i1070, 'buttonparent')
  var i1075 = i1071[5]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 2) {
  request.r(i1075[i + 0], i1075[i + 1], 2, i1074, '')
  }
  i1070.BtnsDotweenAnims = i1074
  var i1077 = i1071[6]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 2) {
  request.r(i1077[i + 0], i1077[i + 1], 2, i1076, '')
  }
  i1070.BtnsCols = i1076
  request.r(i1071[7], i1071[8], 0, i1070, 'mainGameView')
  request.r(i1071[9], i1071[10], 0, i1070, 'Storyboard')
  request.r(i1071[11], i1071[12], 0, i1070, 'BgMusic')
  request.r(i1071[13], i1071[14], 0, i1070, 'BgStoryMusic')
  request.r(i1071[15], i1071[16], 0, i1070, 'Hand_Tut1')
  request.r(i1071[17], i1071[18], 0, i1070, 'Button_Hand')
  var i1079 = i1071[19]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 2) {
  request.r(i1079[i + 0], i1079[i + 1], 2, i1078, '')
  }
  i1070.itemEnable_Onstart = i1078
  var i1081 = i1071[20]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 2) {
  request.r(i1081[i + 0], i1081[i + 1], 2, i1080, '')
  }
  i1070.itemDisable_Onstart = i1080
  var i1083 = i1071[21]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 2) {
  request.r(i1083[i + 0], i1083[i + 1], 2, i1082, '')
  }
  i1070.itemEnable_Oncomplete = i1082
  var i1085 = i1071[22]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 2) {
  request.r(i1085[i + 0], i1085[i + 1], 2, i1084, '')
  }
  i1070.itemDisable_Oncomplete = i1084
  i1070.levelKey = i1071[23]
  i1070.revealDirtyHoldTime = i1071[24]
  return i1070
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i1088 = root || request.c( 'MenuLevelData' )
  var i1089 = data
  i1088.Name = i1089[0]
  request.r(i1089[1], i1089[2], 0, i1088, 'UiBtn')
  request.r(i1089[3], i1089[4], 0, i1088, 'TickBtn')
  request.r(i1089[5], i1089[6], 0, i1088, 'ExclamationIcon')
  var i1091 = i1089[7]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 2) {
  request.r(i1091[i + 0], i1091[i + 1], 2, i1090, '')
  }
  i1088.Item_Dirty = i1090
  var i1093 = i1089[8]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 2) {
  request.r(i1093[i + 0], i1093[i + 1], 2, i1092, '')
  }
  i1088.Item_Clean = i1092
  request.r(i1089[9], i1089[10], 0, i1088, 'CompleteParticle')
  return i1088
}

Deserializers["IntroLevelAnim"] = function (request, data, root) {
  var i1096 = root || request.c( 'IntroLevelAnim' )
  var i1097 = data
  request.r(i1097[0], i1097[1], 0, i1096, 'menuLevel')
  i1096.lvlkey = i1097[2]
  request.r(i1097[3], i1097[4], 0, i1096, 'DressChangeObj')
  request.r(i1097[5], i1097[6], 0, i1096, 'DressChangeClip')
  return i1096
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i1098 = root || request.c( 'Level_PoseController' )
  var i1099 = data
  var i1101 = i1099[0]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 2) {
  request.r(i1101[i + 0], i1101[i + 1], 2, i1100, '')
  }
  i1098.itemToShow = i1100
  var i1103 = i1099[1]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 2) {
  request.r(i1103[i + 0], i1103[i + 1], 2, i1102, '')
  }
  i1098.itemToHide = i1102
  i1098.stepTarget = i1099[2]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1105 = data
  i1104.name = i1105[0]
  i1104.atlasId = i1105[1]
  i1104.mipmapCount = i1105[2]
  i1104.hdr = !!i1105[3]
  i1104.size = i1105[4]
  i1104.anisoLevel = i1105[5]
  i1104.filterMode = i1105[6]
  var i1107 = i1105[7]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 4) {
    i1106.push( UnityEngine.Rect.MinMaxRect(i1107[i + 0], i1107[i + 1], i1107[i + 2], i1107[i + 3]) );
  }
  i1104.rects = i1106
  i1104.wrapU = i1105[8]
  i1104.wrapV = i1105[9]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1111 = data
  i1110.name = i1111[0]
  i1110.index = i1111[1]
  i1110.startup = !!i1111[2]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1113 = data
  i1112.aspect = i1113[0]
  i1112.orthographic = !!i1113[1]
  i1112.orthographicSize = i1113[2]
  i1112.backgroundColor = new pc.Color(i1113[3], i1113[4], i1113[5], i1113[6])
  i1112.nearClipPlane = i1113[7]
  i1112.farClipPlane = i1113[8]
  i1112.fieldOfView = i1113[9]
  i1112.depth = i1113[10]
  i1112.clearFlags = i1113[11]
  i1112.cullingMask = i1113[12]
  i1112.rect = i1113[13]
  request.r(i1113[14], i1113[15], 0, i1112, 'targetTexture')
  i1112.usePhysicalProperties = !!i1113[16]
  i1112.focalLength = i1113[17]
  i1112.sensorSize = new pc.Vec2( i1113[18], i1113[19] )
  i1112.lensShift = new pc.Vec2( i1113[20], i1113[21] )
  i1112.gateFit = i1113[22]
  i1112.commandBufferCount = i1113[23]
  i1112.cameraType = i1113[24]
  i1112.enabled = !!i1113[25]
  return i1112
}

Deserializers["CameraController"] = function (request, data, root) {
  var i1114 = root || request.c( 'CameraController' )
  var i1115 = data
  request.r(i1115[0], i1115[1], 0, i1114, 'cam')
  i1114.defaultPosition = new pc.Vec3( i1115[2], i1115[3], i1115[4] )
  i1114.defaultSize = i1115[5]
  i1114.defaultFOV = i1115[6]
  i1114.defaultDuration = i1115[7]
  i1114.defaultEase = i1115[8]
  return i1114
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i1116 = root || request.c( 'MusicSource' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'source')
  return i1116
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i1118 = root || request.c( 'UI_Manager' )
  var i1119 = data
  i1118.levelCompleted = !!i1119[0]
  i1118.isPauseActive = !!i1119[1]
  i1118.loadIndex = i1119[2]
  request.r(i1119[3], i1119[4], 0, i1118, 'removeAdsButton')
  request.r(i1119[5], i1119[6], 0, i1118, 'pauseButton')
  request.r(i1119[7], i1119[8], 0, i1118, 'Fade_Img')
  request.r(i1119[9], i1119[10], 0, i1118, 'TopBarAnim')
  request.r(i1119[11], i1119[12], 0, i1118, 'MainPanel')
  request.r(i1119[13], i1119[14], 0, i1118, 'PausePanel')
  request.r(i1119[15], i1119[16], 0, i1118, 'PausePopUp')
  request.r(i1119[17], i1119[18], 0, i1118, 'PauseCanvasGroup')
  request.r(i1119[19], i1119[20], 0, i1118, 'RateUsPanel')
  request.r(i1119[21], i1119[22], 0, i1118, 'RateUsPopUp')
  request.r(i1119[23], i1119[24], 0, i1118, 'RemoveAdsPanel')
  request.r(i1119[25], i1119[26], 0, i1118, 'RemoveAdsPopUp')
  request.r(i1119[27], i1119[28], 0, i1118, 'RemoveAdsCanvasGroup')
  var i1121 = i1119[29]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 2) {
  request.r(i1121[i + 0], i1121[i + 1], 2, i1120, '')
  }
  i1118.RemoveAdsAnims = i1120
  request.r(i1119[30], i1119[31], 0, i1118, 'CompletePanel')
  request.r(i1119[32], i1119[33], 0, i1118, 'LevelIcon')
  request.r(i1119[34], i1119[35], 0, i1118, 'CompleteParticles')
  request.r(i1119[36], i1119[37], 0, i1118, 'progressBar')
  request.r(i1119[38], i1119[39], 0, i1118, 'progressText')
  request.r(i1119[40], i1119[41], 0, i1118, 'toolIcon1')
  request.r(i1119[42], i1119[43], 0, i1118, 'toolIcon2')
  request.r(i1119[44], i1119[45], 0, i1118, 'toolIcon3')
  request.r(i1119[46], i1119[47], 0, i1118, 'target1')
  request.r(i1119[48], i1119[49], 0, i1118, 'target2')
  i1118.toolMoveDuration = i1119[50]
  i1118.currentIndex = i1119[51]
  var i1123 = i1119[52]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1123.length; i += 2) {
  request.r(i1123[i + 0], i1123[i + 1], 1, i1122, '')
  }
  i1118.allTools = i1122
  request.r(i1119[53], i1119[54], 0, i1118, 'clockProgress')
  request.r(i1119[55], i1119[56], 0, i1118, 'clockProgressFill')
  request.r(i1119[57], i1119[58], 0, i1118, 'clockAudio')
  i1118.moveDistance = i1119[59]
  i1118.animationDuration = i1119[60]
  i1118.greyBgChildName = i1119[61]
  i1118.pushOffset = i1119[62]
  return i1118
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i1124 = root || request.c( 'GameManagerPlayable' )
  var i1125 = data
  request.r(i1125[0], i1125[1], 0, i1124, 'endParticles')
  request.r(i1125[2], i1125[3], 0, i1124, 'stepCompleteParticles')
  request.r(i1125[4], i1125[5], 0, i1124, 'DefaultMat')
  request.r(i1125[6], i1125[7], 0, i1124, 'BG_Music')
  request.r(i1125[8], i1125[9], 0, i1124, 'restoreEffectShader')
  request.r(i1125[10], i1125[11], 0, i1124, 'stickerEffectShader')
  i1124.isComplete = !!i1125[12]
  i1124.isPaused = !!i1125[13]
  request.r(i1125[14], i1125[15], 0, i1124, 'currentLevel')
  i1124.startLevelOnPlay = !!i1125[16]
  i1124.currentLevelNo = i1125[17]
  return i1124
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1126 = root || request.c( 'AudioController' )
  var i1127 = data
  request.r(i1127[0], i1127[1], 0, i1126, 'MainMixer')
  request.r(i1127[2], i1127[3], 0, i1126, 'UiClick')
  request.r(i1127[4], i1127[5], 0, i1126, 'UiClickSource')
  var i1129 = i1127[6]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 2) {
  request.r(i1129[i + 0], i1129[i + 1], 2, i1128, '')
  }
  i1126.SfxSources = i1128
  var i1131 = i1127[7]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 2) {
  request.r(i1131[i + 0], i1131[i + 1], 2, i1130, '')
  }
  i1126.AllClips = i1130
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1135 = data
  i1134.pivot = new pc.Vec2( i1135[0], i1135[1] )
  i1134.anchorMin = new pc.Vec2( i1135[2], i1135[3] )
  i1134.anchorMax = new pc.Vec2( i1135[4], i1135[5] )
  i1134.sizeDelta = new pc.Vec2( i1135[6], i1135[7] )
  i1134.anchoredPosition3D = new pc.Vec3( i1135[8], i1135[9], i1135[10] )
  i1134.rotation = new pc.Quat(i1135[11], i1135[12], i1135[13], i1135[14])
  i1134.scale = new pc.Vec3( i1135[15], i1135[16], i1135[17] )
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1137 = data
  i1136.planeDistance = i1137[0]
  i1136.referencePixelsPerUnit = i1137[1]
  i1136.isFallbackOverlay = !!i1137[2]
  i1136.renderMode = i1137[3]
  i1136.renderOrder = i1137[4]
  i1136.sortingLayerName = i1137[5]
  i1136.sortingOrder = i1137[6]
  i1136.scaleFactor = i1137[7]
  request.r(i1137[8], i1137[9], 0, i1136, 'worldCamera')
  i1136.overrideSorting = !!i1137[10]
  i1136.pixelPerfect = !!i1137[11]
  i1136.targetDisplay = i1137[12]
  i1136.overridePixelPerfect = !!i1137[13]
  i1136.enabled = !!i1137[14]
  return i1136
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1138 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1139 = data
  i1138.m_UiScaleMode = i1139[0]
  i1138.m_ReferencePixelsPerUnit = i1139[1]
  i1138.m_ScaleFactor = i1139[2]
  i1138.m_ReferenceResolution = new pc.Vec2( i1139[3], i1139[4] )
  i1138.m_ScreenMatchMode = i1139[5]
  i1138.m_MatchWidthOrHeight = i1139[6]
  i1138.m_PhysicalUnit = i1139[7]
  i1138.m_FallbackScreenDPI = i1139[8]
  i1138.m_DefaultSpriteDPI = i1139[9]
  i1138.m_DynamicPixelsPerUnit = i1139[10]
  i1138.m_PresetInfoIsWorld = !!i1139[11]
  return i1138
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1140 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1141 = data
  i1140.m_IgnoreReversedGraphics = !!i1141[0]
  i1140.m_BlockingObjects = i1141[1]
  i1140.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1141[2] )
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1143 = data
  i1142.cullTransparentMesh = !!i1143[0]
  return i1142
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.UI.Image' )
  var i1145 = data
  request.r(i1145[0], i1145[1], 0, i1144, 'm_Sprite')
  i1144.m_Type = i1145[2]
  i1144.m_PreserveAspect = !!i1145[3]
  i1144.m_FillCenter = !!i1145[4]
  i1144.m_FillMethod = i1145[5]
  i1144.m_FillAmount = i1145[6]
  i1144.m_FillClockwise = !!i1145[7]
  i1144.m_FillOrigin = i1145[8]
  i1144.m_UseSpriteMesh = !!i1145[9]
  i1144.m_PixelsPerUnitMultiplier = i1145[10]
  request.r(i1145[11], i1145[12], 0, i1144, 'm_Material')
  i1144.m_Maskable = !!i1145[13]
  i1144.m_Color = new pc.Color(i1145[14], i1145[15], i1145[16], i1145[17])
  i1144.m_RaycastTarget = !!i1145[18]
  i1144.m_RaycastPadding = new pc.Vec4( i1145[19], i1145[20], i1145[21], i1145[22] )
  return i1144
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1146 = root || request.c( 'UnityEngine.UI.Text' )
  var i1147 = data
  i1146.m_FontData = request.d('UnityEngine.UI.FontData', i1147[0], i1146.m_FontData)
  i1146.m_Text = i1147[1]
  request.r(i1147[2], i1147[3], 0, i1146, 'm_Material')
  i1146.m_Maskable = !!i1147[4]
  i1146.m_Color = new pc.Color(i1147[5], i1147[6], i1147[7], i1147[8])
  i1146.m_RaycastTarget = !!i1147[9]
  i1146.m_RaycastPadding = new pc.Vec4( i1147[10], i1147[11], i1147[12], i1147[13] )
  return i1146
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1149 = data
  request.r(i1149[0], i1149[1], 0, i1148, 'm_Font')
  i1148.m_FontSize = i1149[2]
  i1148.m_FontStyle = i1149[3]
  i1148.m_BestFit = !!i1149[4]
  i1148.m_MinSize = i1149[5]
  i1148.m_MaxSize = i1149[6]
  i1148.m_Alignment = i1149[7]
  i1148.m_AlignByGeometry = !!i1149[8]
  i1148.m_RichText = !!i1149[9]
  i1148.m_HorizontalOverflow = i1149[10]
  i1148.m_VerticalOverflow = i1149[11]
  i1148.m_LineSpacing = i1149[12]
  return i1148
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1150 = root || request.c( 'UnityEngine.UI.Button' )
  var i1151 = data
  i1150.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1151[0], i1150.m_OnClick)
  i1150.m_Navigation = request.d('UnityEngine.UI.Navigation', i1151[1], i1150.m_Navigation)
  i1150.m_Transition = i1151[2]
  i1150.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1151[3], i1150.m_Colors)
  i1150.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1151[4], i1150.m_SpriteState)
  i1150.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1151[5], i1150.m_AnimationTriggers)
  i1150.m_Interactable = !!i1151[6]
  request.r(i1151[7], i1151[8], 0, i1150, 'm_TargetGraphic')
  return i1150
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1152 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1153 = data
  i1152.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1153[0], i1152.m_PersistentCalls)
  return i1152
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1154 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1155 = data
  i1154.m_Mode = i1155[0]
  i1154.m_WrapAround = !!i1155[1]
  request.r(i1155[2], i1155[3], 0, i1154, 'm_SelectOnUp')
  request.r(i1155[4], i1155[5], 0, i1154, 'm_SelectOnDown')
  request.r(i1155[6], i1155[7], 0, i1154, 'm_SelectOnLeft')
  request.r(i1155[8], i1155[9], 0, i1154, 'm_SelectOnRight')
  return i1154
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1156 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1157 = data
  i1156.m_NormalColor = new pc.Color(i1157[0], i1157[1], i1157[2], i1157[3])
  i1156.m_HighlightedColor = new pc.Color(i1157[4], i1157[5], i1157[6], i1157[7])
  i1156.m_PressedColor = new pc.Color(i1157[8], i1157[9], i1157[10], i1157[11])
  i1156.m_SelectedColor = new pc.Color(i1157[12], i1157[13], i1157[14], i1157[15])
  i1156.m_DisabledColor = new pc.Color(i1157[16], i1157[17], i1157[18], i1157[19])
  i1156.m_ColorMultiplier = i1157[20]
  i1156.m_FadeDuration = i1157[21]
  return i1156
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1158 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1159 = data
  request.r(i1159[0], i1159[1], 0, i1158, 'm_HighlightedSprite')
  request.r(i1159[2], i1159[3], 0, i1158, 'm_PressedSprite')
  request.r(i1159[4], i1159[5], 0, i1158, 'm_SelectedSprite')
  request.r(i1159[6], i1159[7], 0, i1158, 'm_DisabledSprite')
  return i1158
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1160 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1161 = data
  i1160.m_NormalTrigger = i1161[0]
  i1160.m_HighlightedTrigger = i1161[1]
  i1160.m_PressedTrigger = i1161[2]
  i1160.m_SelectedTrigger = i1161[3]
  i1160.m_DisabledTrigger = i1161[4]
  return i1160
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i1162 = root || request.c( 'PlayableHudRuntime' )
  var i1163 = data
  return i1162
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1164 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1165 = data
  request.r(i1165[0], i1165[1], 0, i1164, 'm_FirstSelected')
  i1164.m_sendNavigationEvents = !!i1165[2]
  i1164.m_DragThreshold = i1165[3]
  return i1164
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1166 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1167 = data
  i1166.m_HorizontalAxis = i1167[0]
  i1166.m_VerticalAxis = i1167[1]
  i1166.m_SubmitButton = i1167[2]
  i1166.m_CancelButton = i1167[3]
  i1166.m_InputActionsPerSecond = i1167[4]
  i1166.m_RepeatDelay = i1167[5]
  i1166.m_ForceModuleActive = !!i1167[6]
  i1166.m_SendPointerHoverToParent = !!i1167[7]
  return i1166
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i1168 = root || request.c( 'PlayableRouter' )
  var i1169 = data
  var i1171 = i1169[0]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 2) {
  request.r(i1171[i + 0], i1171[i + 1], 2, i1170, '')
  }
  i1168.menuObjects = i1170
  var i1173 = i1169[1]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 2) {
  request.r(i1173[i + 0], i1173[i + 1], 2, i1172, '')
  }
  i1168.gameplayObjects = i1172
  var i1175 = i1169[2]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('PlayableRouter+SubLevelSlot', i1175[i + 0]) );
  }
  i1168.subLevels = i1174
  i1168.fadeDuration = i1169[3]
  i1168.lockedMessage = i1169[4]
  i1168.lockedTapsToCTA = i1169[5]
  return i1168
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i1178 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i1179 = data
  request.r(i1179[0], i1179[1], 0, i1178, 'button')
  request.r(i1179[2], i1179[3], 0, i1178, 'level')
  return i1178
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i1180 = root || request.c( 'ToastManager' )
  var i1181 = data
  request.r(i1181[0], i1181[1], 0, i1180, 'toastPanel')
  request.r(i1181[2], i1181[3], 0, i1180, 'toastPopup')
  request.r(i1181[4], i1181[5], 0, i1180, 'canvasGroup')
  request.r(i1181[6], i1181[7], 0, i1180, 'toastText')
  i1180.startY = i1181[8]
  i1180.visibleY = i1181[9]
  i1180.endY = i1181[10]
  i1180.animationTime = i1181[11]
  i1180.animationTimeUp = i1181[12]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1183 = data
  i1182.m_Alpha = i1183[0]
  i1182.m_Interactable = !!i1183[1]
  i1182.m_BlocksRaycasts = !!i1183[2]
  i1182.m_IgnoreParentGroups = !!i1183[3]
  i1182.enabled = !!i1183[4]
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1185 = data
  i1184.ambientIntensity = i1185[0]
  i1184.reflectionIntensity = i1185[1]
  i1184.ambientMode = i1185[2]
  i1184.ambientLight = new pc.Color(i1185[3], i1185[4], i1185[5], i1185[6])
  i1184.ambientSkyColor = new pc.Color(i1185[7], i1185[8], i1185[9], i1185[10])
  i1184.ambientGroundColor = new pc.Color(i1185[11], i1185[12], i1185[13], i1185[14])
  i1184.ambientEquatorColor = new pc.Color(i1185[15], i1185[16], i1185[17], i1185[18])
  i1184.fogColor = new pc.Color(i1185[19], i1185[20], i1185[21], i1185[22])
  i1184.fogEndDistance = i1185[23]
  i1184.fogStartDistance = i1185[24]
  i1184.fogDensity = i1185[25]
  i1184.fog = !!i1185[26]
  request.r(i1185[27], i1185[28], 0, i1184, 'skybox')
  i1184.fogMode = i1185[29]
  var i1187 = i1185[30]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1187[i + 0]) );
  }
  i1184.lightmaps = i1186
  i1184.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1185[31], i1184.lightProbes)
  i1184.lightmapsMode = i1185[32]
  i1184.mixedBakeMode = i1185[33]
  i1184.environmentLightingMode = i1185[34]
  i1184.ambientProbe = new pc.SphericalHarmonicsL2(i1185[35])
  request.r(i1185[36], i1185[37], 0, i1184, 'customReflection')
  request.r(i1185[38], i1185[39], 0, i1184, 'defaultReflection')
  i1184.defaultReflectionMode = i1185[40]
  i1184.defaultReflectionResolution = i1185[41]
  i1184.sunLightObjectId = i1185[42]
  i1184.pixelLightCount = i1185[43]
  i1184.defaultReflectionHDR = !!i1185[44]
  i1184.hasLightDataAsset = !!i1185[45]
  i1184.hasManualGenerate = !!i1185[46]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1191 = data
  request.r(i1191[0], i1191[1], 0, i1190, 'lightmapColor')
  request.r(i1191[2], i1191[3], 0, i1190, 'lightmapDirection')
  request.r(i1191[4], i1191[5], 0, i1190, 'shadowMask')
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1192 = root || new UnityEngine.LightProbes()
  var i1193 = data
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1199 = data
  var i1201 = i1199[0]
  var i1200 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1201[i + 0]));
  }
  i1198.ShaderCompilationErrors = i1200
  i1198.name = i1199[1]
  i1198.guid = i1199[2]
  var i1203 = i1199[3]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( i1203[i + 0] );
  }
  i1198.shaderDefinedKeywords = i1202
  var i1205 = i1199[4]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1205[i + 0]) );
  }
  i1198.passes = i1204
  var i1207 = i1199[5]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1207[i + 0]) );
  }
  i1198.usePasses = i1206
  var i1209 = i1199[6]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1209[i + 0]) );
  }
  i1198.defaultParameterValues = i1208
  request.r(i1199[7], i1199[8], 0, i1198, 'unityFallbackShader')
  i1198.readDepth = !!i1199[9]
  i1198.hasDepthOnlyPass = !!i1199[10]
  i1198.isCreatedByShaderGraph = !!i1199[11]
  i1198.disableBatching = !!i1199[12]
  i1198.compiled = !!i1199[13]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1213 = data
  i1212.shaderName = i1213[0]
  i1212.errorMessage = i1213[1]
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1218 = root || new pc.UnityShaderPass()
  var i1219 = data
  i1218.id = i1219[0]
  i1218.subShaderIndex = i1219[1]
  i1218.name = i1219[2]
  i1218.passType = i1219[3]
  i1218.grabPassTextureName = i1219[4]
  i1218.usePass = !!i1219[5]
  i1218.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1219[6], i1218.zTest)
  i1218.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1219[7], i1218.zWrite)
  i1218.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1219[8], i1218.culling)
  i1218.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1219[9], i1218.blending)
  i1218.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1219[10], i1218.alphaBlending)
  i1218.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1219[11], i1218.colorWriteMask)
  i1218.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1219[12], i1218.offsetUnits)
  i1218.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1219[13], i1218.offsetFactor)
  i1218.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1219[14], i1218.stencilRef)
  i1218.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1219[15], i1218.stencilReadMask)
  i1218.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1219[16], i1218.stencilWriteMask)
  i1218.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1219[17], i1218.stencilOp)
  i1218.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1219[18], i1218.stencilOpFront)
  i1218.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1219[19], i1218.stencilOpBack)
  var i1221 = i1219[20]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1221[i + 0]) );
  }
  i1218.tags = i1220
  var i1223 = i1219[21]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( i1223[i + 0] );
  }
  i1218.passDefinedKeywords = i1222
  var i1225 = i1219[22]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1225[i + 0]) );
  }
  i1218.passDefinedKeywordGroups = i1224
  var i1227 = i1219[23]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1227[i + 0]) );
  }
  i1218.variants = i1226
  var i1229 = i1219[24]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1229[i + 0]) );
  }
  i1218.excludedVariants = i1228
  i1218.hasDepthReader = !!i1219[25]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1231 = data
  i1230.val = i1231[0]
  i1230.name = i1231[1]
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1233 = data
  i1232.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[0], i1232.src)
  i1232.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[1], i1232.dst)
  i1232.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1233[2], i1232.op)
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1235 = data
  i1234.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1235[0], i1234.pass)
  i1234.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1235[1], i1234.fail)
  i1234.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1235[2], i1234.zFail)
  i1234.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1235[3], i1234.comp)
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1239 = data
  i1238.name = i1239[0]
  i1238.value = i1239[1]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1243 = data
  var i1245 = i1243[0]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( i1245[i + 0] );
  }
  i1242.keywords = i1244
  i1242.hasDiscard = !!i1243[1]
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1249 = data
  i1248.passId = i1249[0]
  i1248.subShaderIndex = i1249[1]
  var i1251 = i1249[2]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( i1251[i + 0] );
  }
  i1248.keywords = i1250
  i1248.vertexProgram = i1249[3]
  i1248.fragmentProgram = i1249[4]
  i1248.exportedForWebGl2 = !!i1249[5]
  i1248.readDepth = !!i1249[6]
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1255 = data
  request.r(i1255[0], i1255[1], 0, i1254, 'shader')
  i1254.pass = i1255[2]
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1259 = data
  i1258.name = i1259[0]
  i1258.type = i1259[1]
  i1258.value = new pc.Vec4( i1259[2], i1259[3], i1259[4], i1259[5] )
  i1258.textureValue = i1259[6]
  i1258.shaderPropertyFlag = i1259[7]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1261 = data
  i1260.name = i1261[0]
  request.r(i1261[1], i1261[2], 0, i1260, 'texture')
  i1260.aabb = i1261[3]
  i1260.vertices = i1261[4]
  i1260.triangles = i1261[5]
  i1260.textureRect = UnityEngine.Rect.MinMaxRect(i1261[6], i1261[7], i1261[8], i1261[9])
  i1260.packedRect = UnityEngine.Rect.MinMaxRect(i1261[10], i1261[11], i1261[12], i1261[13])
  i1260.border = new pc.Vec4( i1261[14], i1261[15], i1261[16], i1261[17] )
  i1260.transparency = i1261[18]
  i1260.bounds = i1261[19]
  i1260.pixelsPerUnit = i1261[20]
  i1260.textureWidth = i1261[21]
  i1260.textureHeight = i1261[22]
  i1260.nativeSize = new pc.Vec2( i1261[23], i1261[24] )
  i1260.pivot = new pc.Vec2( i1261[25], i1261[26] )
  i1260.textureRectOffset = new pc.Vec2( i1261[27], i1261[28] )
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1263 = data
  i1262.name = i1263[0]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1265 = data
  i1264.name = i1265[0]
  i1264.wrapMode = i1265[1]
  i1264.isLooping = !!i1265[2]
  i1264.length = i1265[3]
  var i1267 = i1265[4]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1267[i + 0]) );
  }
  i1264.curves = i1266
  var i1269 = i1265[5]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1269[i + 0]) );
  }
  i1264.events = i1268
  i1264.halfPrecision = !!i1265[6]
  i1264._frameRate = i1265[7]
  i1264.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1265[8], i1264.localBounds)
  i1264.hasMuscleCurves = !!i1265[9]
  var i1271 = i1265[10]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.push( i1271[i + 0] );
  }
  i1264.clipMuscleConstant = i1270
  i1264.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1265[11], i1264.clipBindingConstant)
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1275 = data
  i1274.path = i1275[0]
  i1274.hash = i1275[1]
  i1274.componentType = i1275[2]
  i1274.property = i1275[3]
  i1274.keys = i1275[4]
  var i1277 = i1275[5]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1277[i + 0]) );
  }
  i1274.objectReferenceKeys = i1276
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1281 = data
  i1280.time = i1281[0]
  request.r(i1281[1], i1281[2], 0, i1280, 'value')
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1285 = data
  i1284.functionName = i1285[0]
  i1284.floatParameter = i1285[1]
  i1284.intParameter = i1285[2]
  i1284.stringParameter = i1285[3]
  request.r(i1285[4], i1285[5], 0, i1284, 'objectReferenceParameter')
  i1284.time = i1285[6]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1287 = data
  i1286.center = new pc.Vec3( i1287[0], i1287[1], i1287[2] )
  i1286.extends = new pc.Vec3( i1287[3], i1287[4], i1287[5] )
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1291 = data
  var i1293 = i1291[0]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.push( i1293[i + 0] );
  }
  i1290.genericBindings = i1292
  var i1295 = i1291[1]
  var i1294 = []
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.push( i1295[i + 0] );
  }
  i1290.pptrCurveMapping = i1294
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1297 = data
  i1296.name = i1297[0]
  i1296.ascent = i1297[1]
  i1296.originalLineHeight = i1297[2]
  i1296.fontSize = i1297[3]
  var i1299 = i1297[4]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1299[i + 0]) );
  }
  i1296.characterInfo = i1298
  request.r(i1297[5], i1297[6], 0, i1296, 'texture')
  i1296.originalFontSize = i1297[7]
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1303 = data
  i1302.index = i1303[0]
  i1302.advance = i1303[1]
  i1302.bearing = i1303[2]
  i1302.glyphWidth = i1303[3]
  i1302.glyphHeight = i1303[4]
  i1302.minX = i1303[5]
  i1302.maxX = i1303[6]
  i1302.minY = i1303[7]
  i1302.maxY = i1303[8]
  i1302.uvBottomLeftX = i1303[9]
  i1302.uvBottomLeftY = i1303[10]
  i1302.uvBottomRightX = i1303[11]
  i1302.uvBottomRightY = i1303[12]
  i1302.uvTopLeftX = i1303[13]
  i1302.uvTopLeftY = i1303[14]
  i1302.uvTopRightX = i1303[15]
  i1302.uvTopRightY = i1303[16]
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1305 = data
  i1304.name = i1305[0]
  var i1307 = i1305[1]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1307[i + 0]) );
  }
  i1304.layers = i1306
  var i1309 = i1305[2]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1309[i + 0]) );
  }
  i1304.parameters = i1308
  i1304.animationClips = i1305[3]
  i1304.avatarUnsupported = i1305[4]
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1313 = data
  i1312.name = i1313[0]
  i1312.defaultWeight = i1313[1]
  i1312.blendingMode = i1313[2]
  i1312.avatarMask = i1313[3]
  i1312.syncedLayerIndex = i1313[4]
  i1312.syncedLayerAffectsTiming = !!i1313[5]
  i1312.syncedLayers = i1313[6]
  i1312.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1313[7], i1312.stateMachine)
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1315 = data
  i1314.id = i1315[0]
  i1314.name = i1315[1]
  i1314.path = i1315[2]
  var i1317 = i1315[3]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1317[i + 0]) );
  }
  i1314.states = i1316
  var i1319 = i1315[4]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1319[i + 0]) );
  }
  i1314.machines = i1318
  var i1321 = i1315[5]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1321[i + 0]) );
  }
  i1314.entryStateTransitions = i1320
  var i1323 = i1315[6]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1323[i + 0]) );
  }
  i1314.exitStateTransitions = i1322
  var i1325 = i1315[7]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1325[i + 0]) );
  }
  i1314.anyStateTransitions = i1324
  i1314.defaultStateId = i1315[8]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1329 = data
  i1328.id = i1329[0]
  i1328.name = i1329[1]
  i1328.cycleOffset = i1329[2]
  i1328.cycleOffsetParameter = i1329[3]
  i1328.cycleOffsetParameterActive = !!i1329[4]
  i1328.mirror = !!i1329[5]
  i1328.mirrorParameter = i1329[6]
  i1328.mirrorParameterActive = !!i1329[7]
  i1328.motionId = i1329[8]
  i1328.nameHash = i1329[9]
  i1328.fullPathHash = i1329[10]
  i1328.speed = i1329[11]
  i1328.speedParameter = i1329[12]
  i1328.speedParameterActive = !!i1329[13]
  i1328.tag = i1329[14]
  i1328.tagHash = i1329[15]
  i1328.writeDefaultValues = !!i1329[16]
  var i1331 = i1329[17]
  var i1330 = []
  for(var i = 0; i < i1331.length; i += 2) {
  request.r(i1331[i + 0], i1331[i + 1], 2, i1330, '')
  }
  i1328.behaviours = i1330
  var i1333 = i1329[18]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1333[i + 0]) );
  }
  i1328.transitions = i1332
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1339 = data
  i1338.fullPath = i1339[0]
  i1338.canTransitionToSelf = !!i1339[1]
  i1338.duration = i1339[2]
  i1338.exitTime = i1339[3]
  i1338.hasExitTime = !!i1339[4]
  i1338.hasFixedDuration = !!i1339[5]
  i1338.interruptionSource = i1339[6]
  i1338.offset = i1339[7]
  i1338.orderedInterruption = !!i1339[8]
  i1338.destinationStateId = i1339[9]
  i1338.isExit = !!i1339[10]
  i1338.mute = !!i1339[11]
  i1338.solo = !!i1339[12]
  var i1341 = i1339[13]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1341[i + 0]) );
  }
  i1338.conditions = i1340
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1347 = data
  i1346.destinationStateId = i1347[0]
  i1346.isExit = !!i1347[1]
  i1346.mute = !!i1347[2]
  i1346.solo = !!i1347[3]
  var i1349 = i1347[4]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1349[i + 0]) );
  }
  i1346.conditions = i1348
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1353 = data
  i1352.mode = i1353[0]
  i1352.parameter = i1353[1]
  i1352.threshold = i1353[2]
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1357 = data
  i1356.defaultBool = !!i1357[0]
  i1356.defaultFloat = i1357[1]
  i1356.defaultInt = i1357[2]
  i1356.name = i1357[3]
  i1356.nameHash = i1357[4]
  i1356.type = i1357[5]
  return i1356
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1358 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1359 = data
  i1358.useSafeMode = !!i1359[0]
  i1358.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1359[1], i1358.safeModeOptions)
  i1358.timeScale = i1359[2]
  i1358.unscaledTimeScale = i1359[3]
  i1358.useSmoothDeltaTime = !!i1359[4]
  i1358.maxSmoothUnscaledTime = i1359[5]
  i1358.rewindCallbackMode = i1359[6]
  i1358.showUnityEditorReport = !!i1359[7]
  i1358.logBehaviour = i1359[8]
  i1358.drawGizmos = !!i1359[9]
  i1358.defaultRecyclable = !!i1359[10]
  i1358.defaultAutoPlay = i1359[11]
  i1358.defaultUpdateType = i1359[12]
  i1358.defaultTimeScaleIndependent = !!i1359[13]
  i1358.defaultEaseType = i1359[14]
  i1358.defaultEaseOvershootOrAmplitude = i1359[15]
  i1358.defaultEasePeriod = i1359[16]
  i1358.defaultAutoKill = !!i1359[17]
  i1358.defaultLoopType = i1359[18]
  i1358.debugMode = !!i1359[19]
  i1358.debugStoreTargetId = !!i1359[20]
  i1358.showPreviewPanel = !!i1359[21]
  i1358.storeSettingsLocation = i1359[22]
  i1358.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1359[23], i1358.modules)
  i1358.createASMDEF = !!i1359[24]
  i1358.showPlayingTweens = !!i1359[25]
  i1358.showPausedTweens = !!i1359[26]
  return i1358
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1360 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1361 = data
  i1360.logBehaviour = i1361[0]
  i1360.nestedTweenFailureBehaviour = i1361[1]
  return i1360
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1362 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1363 = data
  i1362.showPanel = !!i1363[0]
  i1362.audioEnabled = !!i1363[1]
  i1362.physicsEnabled = !!i1363[2]
  i1362.physics2DEnabled = !!i1363[3]
  i1362.spriteEnabled = !!i1363[4]
  i1362.uiEnabled = !!i1363[5]
  i1362.textMeshProEnabled = !!i1363[6]
  i1362.tk2DEnabled = !!i1363[7]
  i1362.deAudioEnabled = !!i1363[8]
  i1362.deUnityExtendedEnabled = !!i1363[9]
  i1362.epoOutlineEnabled = !!i1363[10]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1365 = data
  var i1367 = i1365[0]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1367[i + 0]) );
  }
  i1364.files = i1366
  i1364.componentToPrefabIds = i1365[1]
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1371 = data
  i1370.path = i1371[0]
  request.r(i1371[1], i1371[2], 0, i1370, 'unityObject')
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1373 = data
  var i1375 = i1373[0]
  var i1374 = []
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1375[i + 0]) );
  }
  i1372.scriptsExecutionOrder = i1374
  var i1377 = i1373[1]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1377[i + 0]) );
  }
  i1372.sortingLayers = i1376
  var i1379 = i1373[2]
  var i1378 = []
  for(var i = 0; i < i1379.length; i += 1) {
    i1378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1379[i + 0]) );
  }
  i1372.cullingLayers = i1378
  i1372.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1373[3], i1372.timeSettings)
  i1372.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1373[4], i1372.physicsSettings)
  i1372.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1373[5], i1372.physics2DSettings)
  i1372.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1373[6], i1372.qualitySettings)
  i1372.enableRealtimeShadows = !!i1373[7]
  i1372.enableAutoInstancing = !!i1373[8]
  i1372.enableStaticBatching = !!i1373[9]
  i1372.enableDynamicBatching = !!i1373[10]
  i1372.usePreservativeDynamicBatching = !!i1373[11]
  i1372.lightmapEncodingQuality = i1373[12]
  i1372.desiredColorSpace = i1373[13]
  var i1381 = i1373[14]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( i1381[i + 0] );
  }
  i1372.allTags = i1380
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1385 = data
  i1384.name = i1385[0]
  i1384.value = i1385[1]
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1389 = data
  i1388.id = i1389[0]
  i1388.name = i1389[1]
  i1388.value = i1389[2]
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1393 = data
  i1392.id = i1393[0]
  i1392.name = i1393[1]
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1395 = data
  i1394.fixedDeltaTime = i1395[0]
  i1394.maximumDeltaTime = i1395[1]
  i1394.timeScale = i1395[2]
  i1394.maximumParticleTimestep = i1395[3]
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1397 = data
  i1396.gravity = new pc.Vec3( i1397[0], i1397[1], i1397[2] )
  i1396.defaultSolverIterations = i1397[3]
  i1396.bounceThreshold = i1397[4]
  i1396.autoSyncTransforms = !!i1397[5]
  i1396.autoSimulation = !!i1397[6]
  var i1399 = i1397[7]
  var i1398 = []
  for(var i = 0; i < i1399.length; i += 1) {
    i1398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1399[i + 0]) );
  }
  i1396.collisionMatrix = i1398
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1403 = data
  i1402.enabled = !!i1403[0]
  i1402.layerId = i1403[1]
  i1402.otherLayerId = i1403[2]
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1405 = data
  request.r(i1405[0], i1405[1], 0, i1404, 'material')
  i1404.gravity = new pc.Vec2( i1405[2], i1405[3] )
  i1404.positionIterations = i1405[4]
  i1404.velocityIterations = i1405[5]
  i1404.velocityThreshold = i1405[6]
  i1404.maxLinearCorrection = i1405[7]
  i1404.maxAngularCorrection = i1405[8]
  i1404.maxTranslationSpeed = i1405[9]
  i1404.maxRotationSpeed = i1405[10]
  i1404.baumgarteScale = i1405[11]
  i1404.baumgarteTOIScale = i1405[12]
  i1404.timeToSleep = i1405[13]
  i1404.linearSleepTolerance = i1405[14]
  i1404.angularSleepTolerance = i1405[15]
  i1404.defaultContactOffset = i1405[16]
  i1404.autoSimulation = !!i1405[17]
  i1404.queriesHitTriggers = !!i1405[18]
  i1404.queriesStartInColliders = !!i1405[19]
  i1404.callbacksOnDisable = !!i1405[20]
  i1404.reuseCollisionCallbacks = !!i1405[21]
  i1404.autoSyncTransforms = !!i1405[22]
  var i1407 = i1405[23]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1407[i + 0]) );
  }
  i1404.collisionMatrix = i1406
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1411 = data
  i1410.enabled = !!i1411[0]
  i1410.layerId = i1411[1]
  i1410.otherLayerId = i1411[2]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1413 = data
  var i1415 = i1413[0]
  var i1414 = []
  for(var i = 0; i < i1415.length; i += 1) {
    i1414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1415[i + 0]) );
  }
  i1412.qualityLevels = i1414
  var i1417 = i1413[1]
  var i1416 = []
  for(var i = 0; i < i1417.length; i += 1) {
    i1416.push( i1417[i + 0] );
  }
  i1412.names = i1416
  i1412.shadows = i1413[2]
  i1412.anisotropicFiltering = i1413[3]
  i1412.antiAliasing = i1413[4]
  i1412.lodBias = i1413[5]
  i1412.shadowCascades = i1413[6]
  i1412.shadowDistance = i1413[7]
  i1412.shadowmaskMode = i1413[8]
  i1412.shadowProjection = i1413[9]
  i1412.shadowResolution = i1413[10]
  i1412.softParticles = !!i1413[11]
  i1412.softVegetation = !!i1413[12]
  i1412.activeColorSpace = i1413[13]
  i1412.desiredColorSpace = i1413[14]
  i1412.masterTextureLimit = i1413[15]
  i1412.maxQueuedFrames = i1413[16]
  i1412.particleRaycastBudget = i1413[17]
  i1412.pixelLightCount = i1413[18]
  i1412.realtimeReflectionProbes = !!i1413[19]
  i1412.shadowCascade2Split = i1413[20]
  i1412.shadowCascade4Split = new pc.Vec3( i1413[21], i1413[22], i1413[23] )
  i1412.streamingMipmapsActive = !!i1413[24]
  i1412.vSyncCount = i1413[25]
  i1412.asyncUploadBufferSize = i1413[26]
  i1412.asyncUploadTimeSlice = i1413[27]
  i1412.billboardsFaceCameraPosition = !!i1413[28]
  i1412.shadowNearPlaneOffset = i1413[29]
  i1412.streamingMipmapsMemoryBudget = i1413[30]
  i1412.maximumLODLevel = i1413[31]
  i1412.streamingMipmapsAddAllCameras = !!i1413[32]
  i1412.streamingMipmapsMaxLevelReduction = i1413[33]
  i1412.streamingMipmapsRenderersPerFrame = i1413[34]
  i1412.resolutionScalingFixedDPIFactor = i1413[35]
  i1412.streamingMipmapsMaxFileIORequests = i1413[36]
  i1412.currentQualityLevel = i1413[37]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i1421 = data
  var i1423 = i1421[0]
  var i1422 = []
  for(var i = 0; i < i1423.length; i += 1) {
    i1422.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i1423[i + 0]) );
  }
  i1420.groups = i1422
  var i1425 = i1421[1]
  var i1424 = []
  for(var i = 0; i < i1425.length; i += 1) {
    i1424.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i1425[i + 0]) );
  }
  i1420.snapshots = i1424
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i1429 = data
  i1428.id = i1429[0]
  i1428.childGroupIds = i1429[1]
  i1428.name = i1429[2]
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i1433 = data
  i1432.id = i1433[0]
  var i1435 = i1433[1]
  var i1434 = []
  for(var i = 0; i < i1435.length; i += 1) {
    i1434.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i1435[i + 0]) );
  }
  i1432.parameters = i1434
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i1439 = data
  i1438.name = i1439[0]
  i1438.value = i1439[1]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1443 = data
  i1442.weight = i1443[0]
  i1442.vertices = i1443[1]
  i1442.normals = i1443[2]
  i1442.tangents = i1443[3]
  return i1442
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[97],"98":[64],"99":[100],"101":[100],"102":[100],"103":[100],"104":[100],"105":[100],"106":[100],"107":[48],"108":[48],"109":[48],"110":[48],"111":[48],"112":[48],"113":[48],"114":[48],"115":[48],"116":[48],"117":[48],"118":[48],"119":[48],"120":[64],"121":[122],"123":[124],"125":[124],"75":[69],"126":[31],"127":[9],"36":[33],"128":[9],"129":[130],"131":[130],"40":[14],"58":[33],"132":[9],"29":[9],"133":[69],"134":[69],"78":[75],"70":[79,69],"135":[69],"77":[75],"136":[69],"137":[69],"138":[69],"139":[69],"140":[69],"141":[69],"142":[69],"143":[69],"144":[69],"145":[79,69],"146":[69],"147":[69],"148":[69],"149":[69],"71":[79,69],"150":[69],"151":[83],"152":[83],"84":[83],"153":[83],"154":[64],"155":[64]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level1_Hair_Playable","UnityEngine.SpriteRenderer","BasicDrag","OutlinePulse","UnityEngine.GameObject","BD_CameraFollow","DG.Tweening.DOTweenAnimation","UnityEngine.Sprite","UnityEngine.AudioClip","BD_Progress","BD_ProgressHelper","DraggableBrush","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","BD_AnimationHelper","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.TrailRenderer","UnityEngine.LineRenderer","StaticFixedPipe","UnityEngine.BoxCollider2D","BD_Clamp","BD_ItemPick","BD_Sticky","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.SpriteMask","PlayTweenOnHit","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","InteractableBones","WaypointFollower","UnityEditor.Audio.AudioMixerGroupController","BD_Action","BD_ToolRotate","UnityEngine.Rigidbody2D","BugKill_Tip","ActionOnTap","BD_SpriteChange","BD_AnimatorDrag","PlaceItem","BD_Audio","Level1_HairAnim","BD_TapandHold","TapandHold_Simple","SpriteButton","DestroyObj","MenuLevel","IntroLevelAnim","Level_PoseController","PlayableRouter","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Fold","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "11.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "31Aug2026_Level1_1_CompleteLevel";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1659";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4392";

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

Deserializers.buildID = "d5bcbad5-c35e-4746-9be8-9fdd653de18b";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

