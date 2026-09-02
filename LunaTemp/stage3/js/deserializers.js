var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.JointSpring' )
  var i737 = data
  i736.spring = i737[0]
  i736.damper = i737[1]
  i736.targetPosition = i737[2]
  return i736
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.JointMotor' )
  var i739 = data
  i738.m_TargetVelocity = i739[0]
  i738.m_Force = i739[1]
  i738.m_FreeSpin = i739[2]
  return i738
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.JointLimits' )
  var i741 = data
  i740.m_Min = i741[0]
  i740.m_Max = i741[1]
  i740.m_Bounciness = i741[2]
  i740.m_BounceMinVelocity = i741[3]
  i740.m_ContactDistance = i741[4]
  i740.minBounce = i741[5]
  i740.maxBounce = i741[6]
  return i740
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.JointDrive' )
  var i743 = data
  i742.m_PositionSpring = i743[0]
  i742.m_PositionDamper = i743[1]
  i742.m_MaximumForce = i743[2]
  i742.m_UseAcceleration = i743[3]
  return i742
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i745 = data
  i744.m_Spring = i745[0]
  i744.m_Damper = i745[1]
  return i744
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i747 = data
  i746.m_Limit = i747[0]
  i746.m_Bounciness = i747[1]
  i746.m_ContactDistance = i747[2]
  return i746
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i749 = data
  i748.m_ExtremumSlip = i749[0]
  i748.m_ExtremumValue = i749[1]
  i748.m_AsymptoteSlip = i749[2]
  i748.m_AsymptoteValue = i749[3]
  i748.m_Stiffness = i749[4]
  return i748
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i751 = data
  i750.m_LowerAngle = i751[0]
  i750.m_UpperAngle = i751[1]
  return i750
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i753 = data
  i752.m_MotorSpeed = i753[0]
  i752.m_MaximumMotorTorque = i753[1]
  return i752
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i755 = data
  i754.m_DampingRatio = i755[0]
  i754.m_Frequency = i755[1]
  i754.m_Angle = i755[2]
  return i754
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i757 = data
  i756.m_LowerTranslation = i757[0]
  i756.m_UpperTranslation = i757[1]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i758 = root || new pc.UnityMaterial()
  var i759 = data
  i758.name = i759[0]
  request.r(i759[1], i759[2], 0, i758, 'shader')
  i758.renderQueue = i759[3]
  i758.enableInstancing = !!i759[4]
  var i761 = i759[5]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i761[i + 0]) );
  }
  i758.floatParameters = i760
  var i763 = i759[6]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i763[i + 0]) );
  }
  i758.colorParameters = i762
  var i765 = i759[7]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i765[i + 0]) );
  }
  i758.vectorParameters = i764
  var i767 = i759[8]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i767[i + 0]) );
  }
  i758.textureParameters = i766
  var i769 = i759[9]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i769[i + 0]) );
  }
  i758.materialFlags = i768
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i773 = data
  i772.name = i773[0]
  i772.value = i773[1]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i777 = data
  i776.name = i777[0]
  i776.value = new pc.Color(i777[1], i777[2], i777[3], i777[4])
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i781 = data
  i780.name = i781[0]
  i780.value = new pc.Vec4( i781[1], i781[2], i781[3], i781[4] )
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i785 = data
  i784.name = i785[0]
  request.r(i785[1], i785[2], 0, i784, 'value')
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i789 = data
  i788.name = i789[0]
  i788.enabled = !!i789[1]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i791 = data
  i790.name = i791[0]
  i790.width = i791[1]
  i790.height = i791[2]
  i790.mipmapCount = i791[3]
  i790.anisoLevel = i791[4]
  i790.filterMode = i791[5]
  i790.hdr = !!i791[6]
  i790.format = i791[7]
  i790.wrapMode = i791[8]
  i790.alphaIsTransparency = !!i791[9]
  i790.alphaSource = i791[10]
  i790.graphicsFormat = i791[11]
  i790.sRGBTexture = !!i791[12]
  i790.desiredColorSpace = i791[13]
  i790.wrapU = i791[14]
  i790.wrapV = i791[15]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i793 = data
  i792.name = i793[0]
  i792.halfPrecision = !!i793[1]
  i792.useSimplification = !!i793[2]
  i792.useUInt32IndexFormat = !!i793[3]
  i792.vertexCount = i793[4]
  i792.aabb = i793[5]
  var i795 = i793[6]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( !!i795[i + 0] );
  }
  i792.streams = i794
  i792.vertices = i793[7]
  var i797 = i793[8]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i797[i + 0]) );
  }
  i792.subMeshes = i796
  var i799 = i793[9]
  var i798 = []
  for(var i = 0; i < i799.length; i += 16) {
    i798.push( new pc.Mat4().setData(i799[i + 0], i799[i + 1], i799[i + 2], i799[i + 3],  i799[i + 4], i799[i + 5], i799[i + 6], i799[i + 7],  i799[i + 8], i799[i + 9], i799[i + 10], i799[i + 11],  i799[i + 12], i799[i + 13], i799[i + 14], i799[i + 15]) );
  }
  i792.bindposes = i798
  var i801 = i793[10]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i801[i + 0]) );
  }
  i792.blendShapes = i800
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i807 = data
  i806.triangles = i807[0]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i813 = data
  i812.name = i813[0]
  var i815 = i813[1]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i815[i + 0]) );
  }
  i812.frames = i814
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i817 = data
  i816.position = new pc.Vec3( i817[0], i817[1], i817[2] )
  i816.scale = new pc.Vec3( i817[3], i817[4], i817[5] )
  i816.rotation = new pc.Quat(i817[6], i817[7], i817[8], i817[9])
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i819 = data
  i818.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i819[0], i818.main)
  i818.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i819[1], i818.colorBySpeed)
  i818.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i819[2], i818.colorOverLifetime)
  i818.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i819[3], i818.emission)
  i818.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i819[4], i818.rotationBySpeed)
  i818.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i819[5], i818.rotationOverLifetime)
  i818.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i819[6], i818.shape)
  i818.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i819[7], i818.sizeBySpeed)
  i818.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i819[8], i818.sizeOverLifetime)
  i818.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i819[9], i818.textureSheetAnimation)
  i818.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i819[10], i818.velocityOverLifetime)
  i818.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i819[11], i818.noise)
  i818.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i819[12], i818.inheritVelocity)
  i818.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i819[13], i818.forceOverLifetime)
  i818.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i819[14], i818.limitVelocityOverLifetime)
  i818.useAutoRandomSeed = !!i819[15]
  i818.randomSeed = i819[16]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemMain()
  var i821 = data
  i820.duration = i821[0]
  i820.loop = !!i821[1]
  i820.prewarm = !!i821[2]
  i820.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[3], i820.startDelay)
  i820.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[4], i820.startLifetime)
  i820.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[5], i820.startSpeed)
  i820.startSize3D = !!i821[6]
  i820.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[7], i820.startSizeX)
  i820.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[8], i820.startSizeY)
  i820.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[9], i820.startSizeZ)
  i820.startRotation3D = !!i821[10]
  i820.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[11], i820.startRotationX)
  i820.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[12], i820.startRotationY)
  i820.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[13], i820.startRotationZ)
  i820.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i821[14], i820.startColor)
  i820.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[15], i820.gravityModifier)
  i820.simulationSpace = i821[16]
  request.r(i821[17], i821[18], 0, i820, 'customSimulationSpace')
  i820.simulationSpeed = i821[19]
  i820.useUnscaledTime = !!i821[20]
  i820.scalingMode = i821[21]
  i820.playOnAwake = !!i821[22]
  i820.maxParticles = i821[23]
  i820.emitterVelocityMode = i821[24]
  i820.stopAction = i821[25]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i822 = root || new pc.MinMaxCurve()
  var i823 = data
  i822.mode = i823[0]
  i822.curveMin = new pc.AnimationCurve( { keys_flow: i823[1] } )
  i822.curveMax = new pc.AnimationCurve( { keys_flow: i823[2] } )
  i822.curveMultiplier = i823[3]
  i822.constantMin = i823[4]
  i822.constantMax = i823[5]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i824 = root || new pc.MinMaxGradient()
  var i825 = data
  i824.mode = i825[0]
  i824.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i825[1], i824.gradientMin)
  i824.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i825[2], i824.gradientMax)
  i824.colorMin = new pc.Color(i825[3], i825[4], i825[5], i825[6])
  i824.colorMax = new pc.Color(i825[7], i825[8], i825[9], i825[10])
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i827 = data
  i826.mode = i827[0]
  var i829 = i827[1]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i829[i + 0]) );
  }
  i826.colorKeys = i828
  var i831 = i827[2]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i831[i + 0]) );
  }
  i826.alphaKeys = i830
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i832 = root || new pc.ParticleSystemColorBySpeed()
  var i833 = data
  i832.enabled = !!i833[0]
  i832.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i833[1], i832.color)
  i832.range = new pc.Vec2( i833[2], i833[3] )
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i837 = data
  i836.color = new pc.Color(i837[0], i837[1], i837[2], i837[3])
  i836.time = i837[4]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i841 = data
  i840.alpha = i841[0]
  i840.time = i841[1]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i842 = root || new pc.ParticleSystemColorOverLifetime()
  var i843 = data
  i842.enabled = !!i843[0]
  i842.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i843[1], i842.color)
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i844 = root || new pc.ParticleSystemEmitter()
  var i845 = data
  i844.enabled = !!i845[0]
  i844.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[1], i844.rateOverTime)
  i844.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i845[2], i844.rateOverDistance)
  var i847 = i845[3]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i847[i + 0]) );
  }
  i844.bursts = i846
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i850 = root || new pc.ParticleSystemBurst()
  var i851 = data
  i850.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[0], i850.count)
  i850.cycleCount = i851[1]
  i850.minCount = i851[2]
  i850.maxCount = i851[3]
  i850.repeatInterval = i851[4]
  i850.time = i851[5]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i852 = root || new pc.ParticleSystemRotationBySpeed()
  var i853 = data
  i852.enabled = !!i853[0]
  i852.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[1], i852.x)
  i852.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[2], i852.y)
  i852.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i853[3], i852.z)
  i852.separateAxes = !!i853[4]
  i852.range = new pc.Vec2( i853[5], i853[6] )
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i854 = root || new pc.ParticleSystemRotationOverLifetime()
  var i855 = data
  i854.enabled = !!i855[0]
  i854.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[1], i854.x)
  i854.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[2], i854.y)
  i854.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i855[3], i854.z)
  i854.separateAxes = !!i855[4]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i856 = root || new pc.ParticleSystemShape()
  var i857 = data
  i856.enabled = !!i857[0]
  i856.shapeType = i857[1]
  i856.randomDirectionAmount = i857[2]
  i856.sphericalDirectionAmount = i857[3]
  i856.randomPositionAmount = i857[4]
  i856.alignToDirection = !!i857[5]
  i856.radius = i857[6]
  i856.radiusMode = i857[7]
  i856.radiusSpread = i857[8]
  i856.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[9], i856.radiusSpeed)
  i856.radiusThickness = i857[10]
  i856.angle = i857[11]
  i856.length = i857[12]
  i856.boxThickness = new pc.Vec3( i857[13], i857[14], i857[15] )
  i856.meshShapeType = i857[16]
  request.r(i857[17], i857[18], 0, i856, 'mesh')
  request.r(i857[19], i857[20], 0, i856, 'meshRenderer')
  request.r(i857[21], i857[22], 0, i856, 'skinnedMeshRenderer')
  i856.useMeshMaterialIndex = !!i857[23]
  i856.meshMaterialIndex = i857[24]
  i856.useMeshColors = !!i857[25]
  i856.normalOffset = i857[26]
  i856.arc = i857[27]
  i856.arcMode = i857[28]
  i856.arcSpread = i857[29]
  i856.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i857[30], i856.arcSpeed)
  i856.donutRadius = i857[31]
  i856.position = new pc.Vec3( i857[32], i857[33], i857[34] )
  i856.rotation = new pc.Vec3( i857[35], i857[36], i857[37] )
  i856.scale = new pc.Vec3( i857[38], i857[39], i857[40] )
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i858 = root || new pc.ParticleSystemSizeBySpeed()
  var i859 = data
  i858.enabled = !!i859[0]
  i858.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[1], i858.x)
  i858.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[2], i858.y)
  i858.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i859[3], i858.z)
  i858.separateAxes = !!i859[4]
  i858.range = new pc.Vec2( i859[5], i859[6] )
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i860 = root || new pc.ParticleSystemSizeOverLifetime()
  var i861 = data
  i860.enabled = !!i861[0]
  i860.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[1], i860.x)
  i860.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[2], i860.y)
  i860.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i861[3], i860.z)
  i860.separateAxes = !!i861[4]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i862 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i863 = data
  i862.enabled = !!i863[0]
  i862.mode = i863[1]
  i862.animation = i863[2]
  i862.numTilesX = i863[3]
  i862.numTilesY = i863[4]
  i862.useRandomRow = !!i863[5]
  i862.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[6], i862.frameOverTime)
  i862.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i863[7], i862.startFrame)
  i862.cycleCount = i863[8]
  i862.rowIndex = i863[9]
  i862.flipU = i863[10]
  i862.flipV = i863[11]
  i862.spriteCount = i863[12]
  var i865 = i863[13]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 2, i864, '')
  }
  i862.sprites = i864
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i868 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i869 = data
  i868.enabled = !!i869[0]
  i868.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[1], i868.x)
  i868.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[2], i868.y)
  i868.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[3], i868.z)
  i868.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[4], i868.radial)
  i868.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[5], i868.speedModifier)
  i868.space = i869[6]
  i868.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[7], i868.orbitalX)
  i868.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[8], i868.orbitalY)
  i868.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[9], i868.orbitalZ)
  i868.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[10], i868.orbitalOffsetX)
  i868.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[11], i868.orbitalOffsetY)
  i868.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i869[12], i868.orbitalOffsetZ)
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i870 = root || new pc.ParticleSystemNoise()
  var i871 = data
  i870.enabled = !!i871[0]
  i870.separateAxes = !!i871[1]
  i870.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[2], i870.strengthX)
  i870.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[3], i870.strengthY)
  i870.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[4], i870.strengthZ)
  i870.frequency = i871[5]
  i870.damping = !!i871[6]
  i870.octaveCount = i871[7]
  i870.octaveMultiplier = i871[8]
  i870.octaveScale = i871[9]
  i870.quality = i871[10]
  i870.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[11], i870.scrollSpeed)
  i870.scrollSpeedMultiplier = i871[12]
  i870.remapEnabled = !!i871[13]
  i870.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[14], i870.remapX)
  i870.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[15], i870.remapY)
  i870.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[16], i870.remapZ)
  i870.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[17], i870.positionAmount)
  i870.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[18], i870.rotationAmount)
  i870.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i871[19], i870.sizeAmount)
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i872 = root || new pc.ParticleSystemInheritVelocity()
  var i873 = data
  i872.enabled = !!i873[0]
  i872.mode = i873[1]
  i872.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i873[2], i872.curve)
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i874 = root || new pc.ParticleSystemForceOverLifetime()
  var i875 = data
  i874.enabled = !!i875[0]
  i874.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[1], i874.x)
  i874.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[2], i874.y)
  i874.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[3], i874.z)
  i874.space = i875[4]
  i874.randomized = !!i875[5]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i876 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i877 = data
  i876.enabled = !!i877[0]
  i876.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[1], i876.limit)
  i876.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[2], i876.limitX)
  i876.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[3], i876.limitY)
  i876.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[4], i876.limitZ)
  i876.dampen = i877[5]
  i876.separateAxes = !!i877[6]
  i876.space = i877[7]
  i876.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i877[8], i876.drag)
  i876.multiplyDragByParticleSize = !!i877[9]
  i876.multiplyDragByParticleVelocity = !!i877[10]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'mesh')
  i878.meshCount = i879[2]
  i878.activeVertexStreamsCount = i879[3]
  i878.alignment = i879[4]
  i878.renderMode = i879[5]
  i878.sortMode = i879[6]
  i878.lengthScale = i879[7]
  i878.velocityScale = i879[8]
  i878.cameraVelocityScale = i879[9]
  i878.normalDirection = i879[10]
  i878.sortingFudge = i879[11]
  i878.minParticleSize = i879[12]
  i878.maxParticleSize = i879[13]
  i878.pivot = new pc.Vec3( i879[14], i879[15], i879[16] )
  request.r(i879[17], i879[18], 0, i878, 'trailMaterial')
  i878.applyActiveColorSpace = !!i879[19]
  i878.enabled = !!i879[20]
  request.r(i879[21], i879[22], 0, i878, 'sharedMaterial')
  var i881 = i879[23]
  var i880 = []
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 2, i880, '')
  }
  i878.sharedMaterials = i880
  i878.receiveShadows = !!i879[24]
  i878.shadowCastingMode = i879[25]
  i878.sortingLayerID = i879[26]
  i878.sortingOrder = i879[27]
  i878.lightmapIndex = i879[28]
  i878.lightmapSceneIndex = i879[29]
  i878.lightmapScaleOffset = new pc.Vec4( i879[30], i879[31], i879[32], i879[33] )
  i878.lightProbeUsage = i879[34]
  i878.reflectionProbeUsage = i879[35]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i885 = data
  i884.name = i885[0]
  i884.tagId = i885[1]
  i884.enabled = !!i885[2]
  i884.isStatic = !!i885[3]
  i884.layer = i885[4]
  return i884
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i886 = root || request.c( 'MenuLevel' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'menuLevelBtnUpdate')
  var i889 = i887[2]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('MenuLevelData', i889[i + 0]) );
  }
  i886.AllSteps = i888
  request.r(i887[3], i887[4], 0, i886, 'buttonparent')
  var i891 = i887[5]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i886.BtnsDotweenAnims = i890
  var i893 = i887[6]
  var i892 = []
  for(var i = 0; i < i893.length; i += 2) {
  request.r(i893[i + 0], i893[i + 1], 2, i892, '')
  }
  i886.BtnsCols = i892
  request.r(i887[7], i887[8], 0, i886, 'mainGameView')
  request.r(i887[9], i887[10], 0, i886, 'Storyboard')
  request.r(i887[11], i887[12], 0, i886, 'BgMusic')
  request.r(i887[13], i887[14], 0, i886, 'BgStoryMusic')
  request.r(i887[15], i887[16], 0, i886, 'Hand_Tut1')
  request.r(i887[17], i887[18], 0, i886, 'Button_Hand')
  var i895 = i887[19]
  var i894 = []
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 2, i894, '')
  }
  i886.itemEnable_Onstart = i894
  var i897 = i887[20]
  var i896 = []
  for(var i = 0; i < i897.length; i += 2) {
  request.r(i897[i + 0], i897[i + 1], 2, i896, '')
  }
  i886.itemDisable_Onstart = i896
  var i899 = i887[21]
  var i898 = []
  for(var i = 0; i < i899.length; i += 2) {
  request.r(i899[i + 0], i899[i + 1], 2, i898, '')
  }
  i886.itemEnable_Oncomplete = i898
  var i901 = i887[22]
  var i900 = []
  for(var i = 0; i < i901.length; i += 2) {
  request.r(i901[i + 0], i901[i + 1], 2, i900, '')
  }
  i886.itemDisable_Oncomplete = i900
  i886.levelKey = i887[23]
  i886.revealDirtyHoldTime = i887[24]
  return i886
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i904 = root || request.c( 'MenuLevelData' )
  var i905 = data
  i904.Name = i905[0]
  request.r(i905[1], i905[2], 0, i904, 'UiBtn')
  request.r(i905[3], i905[4], 0, i904, 'TickBtn')
  request.r(i905[5], i905[6], 0, i904, 'ExclamationIcon')
  var i907 = i905[7]
  var i906 = []
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 2, i906, '')
  }
  i904.Item_Dirty = i906
  var i909 = i905[8]
  var i908 = []
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 2, i908, '')
  }
  i904.Item_Clean = i908
  request.r(i905[9], i905[10], 0, i904, 'CompleteParticle')
  return i904
}

Deserializers["IntroLevelAnim"] = function (request, data, root) {
  var i916 = root || request.c( 'IntroLevelAnim' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'menuLevel')
  i916.lvlkey = i917[2]
  request.r(i917[3], i917[4], 0, i916, 'DressChangeObj')
  request.r(i917[5], i917[6], 0, i916, 'DressChangeClip')
  return i916
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i918 = root || request.c( 'Level_PoseController' )
  var i919 = data
  var i921 = i919[0]
  var i920 = []
  for(var i = 0; i < i921.length; i += 2) {
  request.r(i921[i + 0], i921[i + 1], 2, i920, '')
  }
  i918.itemToShow = i920
  var i923 = i919[1]
  var i922 = []
  for(var i = 0; i < i923.length; i += 2) {
  request.r(i923[i + 0], i923[i + 1], 2, i922, '')
  }
  i918.itemToHide = i922
  i918.stepTarget = i919[2]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i925 = data
  i924.color = new pc.Color(i925[0], i925[1], i925[2], i925[3])
  request.r(i925[4], i925[5], 0, i924, 'sprite')
  i924.flipX = !!i925[6]
  i924.flipY = !!i925[7]
  i924.drawMode = i925[8]
  i924.size = new pc.Vec2( i925[9], i925[10] )
  i924.tileMode = i925[11]
  i924.adaptiveModeThreshold = i925[12]
  i924.maskInteraction = i925[13]
  i924.spriteSortPoint = i925[14]
  i924.enabled = !!i925[15]
  request.r(i925[16], i925[17], 0, i924, 'sharedMaterial')
  var i927 = i925[18]
  var i926 = []
  for(var i = 0; i < i927.length; i += 2) {
  request.r(i927[i + 0], i927[i + 1], 2, i926, '')
  }
  i924.sharedMaterials = i926
  i924.receiveShadows = !!i925[19]
  i924.shadowCastingMode = i925[20]
  i924.sortingLayerID = i925[21]
  i924.sortingOrder = i925[22]
  i924.lightmapIndex = i925[23]
  i924.lightmapSceneIndex = i925[24]
  i924.lightmapScaleOffset = new pc.Vec4( i925[25], i925[26], i925[27], i925[28] )
  i924.lightProbeUsage = i925[29]
  i924.reflectionProbeUsage = i925[30]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'animatorController')
  request.r(i929[2], i929[3], 0, i928, 'avatar')
  i928.updateMode = i929[4]
  i928.hasTransformHierarchy = !!i929[5]
  i928.applyRootMotion = !!i929[6]
  var i931 = i929[7]
  var i930 = []
  for(var i = 0; i < i931.length; i += 2) {
  request.r(i931[i + 0], i931[i + 1], 2, i930, '')
  }
  i928.humanBones = i930
  i928.enabled = !!i929[8]
  return i928
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'm_RootBone')
  var i937 = i935[2]
  var i936 = []
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 2, i936, '')
  }
  i934.m_BoneTransforms = i936
  i934.m_AlwaysUpdate = !!i935[3]
  i934.m_AutoRebind = !!i935[4]
  return i934
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i938 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i939 = data
  i938.targetIsSelf = !!i939[0]
  request.r(i939[1], i939[2], 0, i938, 'targetGO')
  i938.tweenTargetIsTargetGO = !!i939[3]
  i938.delay = i939[4]
  i938.duration = i939[5]
  i938.easeType = i939[6]
  i938.easeCurve = new pc.AnimationCurve( { keys_flow: i939[7] } )
  i938.loopType = i939[8]
  i938.loops = i939[9]
  i938.id = i939[10]
  i938.isRelative = !!i939[11]
  i938.isFrom = !!i939[12]
  i938.isIndependentUpdate = !!i939[13]
  i938.autoKill = !!i939[14]
  i938.autoGenerate = !!i939[15]
  i938.isActive = !!i939[16]
  i938.isValid = !!i939[17]
  request.r(i939[18], i939[19], 0, i938, 'target')
  i938.animationType = i939[20]
  i938.targetType = i939[21]
  i938.forcedTargetType = i939[22]
  i938.autoPlay = !!i939[23]
  i938.useTargetAsV3 = !!i939[24]
  i938.endValueFloat = i939[25]
  i938.endValueV3 = new pc.Vec3( i939[26], i939[27], i939[28] )
  i938.endValueV2 = new pc.Vec2( i939[29], i939[30] )
  i938.endValueColor = new pc.Color(i939[31], i939[32], i939[33], i939[34])
  i938.endValueString = i939[35]
  i938.endValueRect = UnityEngine.Rect.MinMaxRect(i939[36], i939[37], i939[38], i939[39])
  request.r(i939[40], i939[41], 0, i938, 'endValueTransform')
  i938.optionalBool0 = !!i939[42]
  i938.optionalBool1 = !!i939[43]
  i938.optionalFloat0 = i939[44]
  i938.optionalInt0 = i939[45]
  i938.optionalRotationMode = i939[46]
  i938.optionalScrambleMode = i939[47]
  i938.optionalShakeRandomnessMode = i939[48]
  i938.optionalString = i939[49]
  i938.updateType = i939[50]
  i938.isSpeedBased = !!i939[51]
  i938.hasOnStart = !!i939[52]
  i938.hasOnPlay = !!i939[53]
  i938.hasOnUpdate = !!i939[54]
  i938.hasOnStepComplete = !!i939[55]
  i938.hasOnComplete = !!i939[56]
  i938.hasOnTweenCreated = !!i939[57]
  i938.hasOnRewind = !!i939[58]
  i938.onStart = request.d('UnityEngine.Events.UnityEvent', i939[59], i938.onStart)
  i938.onPlay = request.d('UnityEngine.Events.UnityEvent', i939[60], i938.onPlay)
  i938.onUpdate = request.d('UnityEngine.Events.UnityEvent', i939[61], i938.onUpdate)
  i938.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i939[62], i938.onStepComplete)
  i938.onComplete = request.d('UnityEngine.Events.UnityEvent', i939[63], i938.onComplete)
  i938.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i939[64], i938.onTweenCreated)
  i938.onRewind = request.d('UnityEngine.Events.UnityEvent', i939[65], i938.onRewind)
  return i938
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i941 = data
  i940.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i941[0], i940.m_PersistentCalls)
  return i940
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i943 = data
  var i945 = i943[0]
  var i944 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i945.length; i += 1) {
    i944.add(request.d('UnityEngine.Events.PersistentCall', i945[i + 0]));
  }
  i942.m_Calls = i944
  return i942
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'm_Target')
  i948.m_TargetAssemblyTypeName = i949[2]
  i948.m_MethodName = i949[3]
  i948.m_Mode = i949[4]
  i948.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i949[5], i948.m_Arguments)
  i948.m_CallState = i949[6]
  return i948
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i950 = root || request.c( 'BD_AnimationHelper' )
  var i951 = data
  i950.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i951[0], i950.OnAnimationComplete)
  request.r(i951[1], i951[2], 0, i950, 'sfxClip')
  return i950
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'm_ObjectArgument')
  i952.m_ObjectArgumentAssemblyTypeName = i953[2]
  i952.m_IntArgument = i953[3]
  i952.m_FloatArgument = i953[4]
  i952.m_StringArgument = i953[5]
  i952.m_BoolArgument = !!i953[6]
  return i952
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i954 = root || request.c( 'SpriteButton' )
  var i955 = data
  i954.isLocked = !!i955[0]
  i954.lockMsg = i955[1]
  i954.onClick = request.d('UnityEngine.Events.UnityEvent', i955[2], i954.onClick)
  i954.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i955[3], i954.onLockedClick)
  i954.isLevelBtnSfx = !!i955[4]
  request.r(i955[5], i955[6], 0, i954, 'pivot')
  i954.reductionChange = i955[7]
  i954.animationDuration = i955[8]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i957 = data
  i956.usedByComposite = !!i957[0]
  i956.autoTiling = !!i957[1]
  i956.size = new pc.Vec2( i957[2], i957[3] )
  i956.edgeRadius = i957[4]
  i956.enabled = !!i957[5]
  i956.isTrigger = !!i957[6]
  i956.usedByEffector = !!i957[7]
  i956.density = i957[8]
  i956.offset = new pc.Vec2( i957[9], i957[10] )
  request.r(i957[11], i957[12], 0, i956, 'material')
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i959 = data
  var i961 = i959[0]
  var i960 = []
  for(var i = 0; i < i961.length; i += 3) {
    i960.push( new pc.Vec3( i961[i + 0], i961[i + 1], i961[i + 2] ) );
  }
  i958.positions = i960
  i958.positionCount = i959[1]
  i958.time = i959[2]
  i958.startWidth = i959[3]
  i958.endWidth = i959[4]
  i958.widthMultiplier = i959[5]
  i958.autodestruct = !!i959[6]
  i958.emitting = !!i959[7]
  i958.numCornerVertices = i959[8]
  i958.numCapVertices = i959[9]
  i958.minVertexDistance = i959[10]
  i958.colorGradient = i959[11] ? new pc.ColorGradient(i959[11][0], i959[11][1], i959[11][2]) : null
  i958.startColor = new pc.Color(i959[12], i959[13], i959[14], i959[15])
  i958.endColor = new pc.Color(i959[16], i959[17], i959[18], i959[19])
  i958.generateLightingData = !!i959[20]
  i958.textureMode = i959[21]
  i958.alignment = i959[22]
  i958.widthCurve = new pc.AnimationCurve( { keys_flow: i959[23] } )
  i958.enabled = !!i959[24]
  request.r(i959[25], i959[26], 0, i958, 'sharedMaterial')
  var i963 = i959[27]
  var i962 = []
  for(var i = 0; i < i963.length; i += 2) {
  request.r(i963[i + 0], i963[i + 1], 2, i962, '')
  }
  i958.sharedMaterials = i962
  i958.receiveShadows = !!i959[28]
  i958.shadowCastingMode = i959[29]
  i958.sortingLayerID = i959[30]
  i958.sortingOrder = i959[31]
  i958.lightmapIndex = i959[32]
  i958.lightmapSceneIndex = i959[33]
  i958.lightmapScaleOffset = new pc.Vec4( i959[34], i959[35], i959[36], i959[37] )
  i958.lightProbeUsage = i959[38]
  i958.reflectionProbeUsage = i959[39]
  return i958
}

Deserializers["Level1_Face_Playable"] = function (request, data, root) {
  var i966 = root || request.c( 'Level1_Face_Playable' )
  var i967 = data
  i966.MainZoom = request.d('ZoomPos', i967[0], i966.MainZoom)
  request.r(i967[1], i967[2], 0, i966, 'ToolHolder')
  request.r(i967[3], i967[4], 0, i966, 'Tray')
  var i969 = i967[5]
  var i968 = []
  for(var i = 0; i < i969.length; i += 2) {
  request.r(i969[i + 0], i969[i + 1], 2, i968, '')
  }
  i966.FaceBones = i968
  request.r(i967[6], i967[7], 0, i966, 'CurrentEye')
  var i971 = i967[8]
  var i970 = []
  for(var i = 0; i < i971.length; i += 2) {
  request.r(i971[i + 0], i971[i + 1], 2, i970, '')
  }
  i966.EyeSRs = i970
  var i973 = i967[9]
  var i972 = []
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 2, i972, '')
  }
  i966.EyeAnims = i972
  var i975 = i967[10]
  var i974 = []
  for(var i = 0; i < i975.length; i += 2) {
  request.r(i975[i + 0], i975[i + 1], 2, i974, '')
  }
  i966.BreathingAnim = i974
  request.r(i967[11], i967[12], 0, i966, 'brushRubingAudio')
  request.r(i967[13], i967[14], 0, i966, 'brushRubingAudio2')
  i966.ZoomStep1 = request.d('ZoomPos', i967[15], i966.ZoomStep1)
  i966.ZoomStep1B = request.d('ZoomPos', i967[16], i966.ZoomStep1B)
  request.r(i967[17], i967[18], 0, i966, 'Tool1Holder')
  request.r(i967[19], i967[20], 0, i966, 'ToolStep1')
  request.r(i967[21], i967[22], 0, i966, 'ToolStep1CameraFollow')
  request.r(i967[23], i967[24], 0, i966, 'ToolStep1ToolRotate')
  request.r(i967[25], i967[26], 0, i966, 'Holder1')
  request.r(i967[27], i967[28], 0, i966, 'Holder2')
  request.r(i967[29], i967[30], 0, i966, 'Wipe')
  request.r(i967[31], i967[32], 0, i966, 'WipeStart')
  request.r(i967[33], i967[34], 0, i966, 'WipeTarget')
  request.r(i967[35], i967[36], 0, i966, 'BottleAnimator')
  request.r(i967[37], i967[38], 0, i966, 'RemoverBodySR')
  request.r(i967[39], i967[40], 0, i966, 'RemoverBodySprite1')
  request.r(i967[41], i967[42], 0, i966, 'RemoverBodySprite2')
  request.r(i967[43], i967[44], 0, i966, 'HandAnim1')
  request.r(i967[45], i967[46], 0, i966, 'Tap1')
  request.r(i967[47], i967[48], 0, i966, 'DropOnWipe_1')
  request.r(i967[49], i967[50], 0, i966, 'SpreadOnWipe_1')
  request.r(i967[51], i967[52], 0, i966, 'Makeup_1')
  request.r(i967[53], i967[54], 0, i966, 'Eyes_1')
  request.r(i967[55], i967[56], 0, i966, 'makeupRemoverSfx')
  i966.ZoomStep2 = request.d('ZoomPos', i967[57], i966.ZoomStep2)
  i966.ZoomStep2B = request.d('ZoomPos', i967[58], i966.ZoomStep2B)
  request.r(i967[59], i967[60], 0, i966, 'Tool2Holder')
  request.r(i967[61], i967[62], 0, i966, 'CapAnimator_2')
  request.r(i967[63], i967[64], 0, i966, 'ToolStep2')
  request.r(i967[65], i967[66], 0, i966, 'camFollowStep2')
  var i977 = i967[67]
  var i976 = []
  for(var i = 0; i < i977.length; i += 2) {
  request.r(i977[i + 0], i977[i + 1], 2, i976, '')
  }
  i966.ToolStep2Indications = i976
  var i979 = i967[68]
  var i978 = []
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 2, i978, '')
  }
  i966.Primers2 = i978
  request.r(i967[69], i967[70], 0, i966, 'primerOpenSfx')
  i966.ZoomStep3 = request.d('ZoomPos', i967[71], i966.ZoomStep3)
  request.r(i967[72], i967[73], 0, i966, 'Tip3')
  request.r(i967[74], i967[75], 0, i966, 'ToolStep3')
  request.r(i967[76], i967[77], 0, i966, 'ToolStep3CameraFollow')
  request.r(i967[78], i967[79], 0, i966, 'HandAnim3')
  var i981 = i967[80]
  var i980 = []
  for(var i = 0; i < i981.length; i += 2) {
  request.r(i981[i + 0], i981[i + 1], 2, i980, '')
  }
  i966.Primers_3 = i980
  request.r(i967[81], i967[82], 0, i966, 'PrimerSpread')
  request.r(i967[83], i967[84], 0, i966, 'PrimerAbsorb')
  i966.ZoomStep4 = request.d('ZoomPos', i967[85], i966.ZoomStep4)
  i966.ZoomStep4B = request.d('ZoomPos', i967[86], i966.ZoomStep4B)
  request.r(i967[87], i967[88], 0, i966, 'Tool4Holder')
  request.r(i967[89], i967[90], 0, i966, 'CapAnimator_4')
  request.r(i967[91], i967[92], 0, i966, 'ToolStep4')
  request.r(i967[93], i967[94], 0, i966, 'camFollowStep4')
  request.r(i967[95], i967[96], 0, i966, 'ToolStep4Shadow')
  var i983 = i967[97]
  var i982 = []
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 2, i982, '')
  }
  i966.ToolStep4Indications = i982
  var i985 = i967[98]
  var i984 = []
  for(var i = 0; i < i985.length; i += 2) {
  request.r(i985[i + 0], i985[i + 1], 2, i984, '')
  }
  i966.Bases_4 = i984
  request.r(i967[99], i967[100], 0, i966, 'baseOpenSfx')
  i966.ZoomStep5 = request.d('ZoomPos', i967[101], i966.ZoomStep5)
  request.r(i967[102], i967[103], 0, i966, 'Tool5Holder')
  request.r(i967[104], i967[105], 0, i966, 'Tip5')
  request.r(i967[106], i967[107], 0, i966, 'ToolStep5')
  request.r(i967[108], i967[109], 0, i966, 'ToolStep5CameraFollow')
  request.r(i967[110], i967[111], 0, i966, 'ToolStep5ToolRotate')
  request.r(i967[112], i967[113], 0, i966, 'Tool5Simple')
  request.r(i967[114], i967[115], 0, i966, 'Tool5Picked')
  var i987 = i967[116]
  var i986 = []
  for(var i = 0; i < i987.length; i += 2) {
  request.r(i987[i + 0], i987[i + 1], 2, i986, '')
  }
  i966.SRsToFade_5 = i986
  request.r(i967[117], i967[118], 0, i966, 'BaseSpread_5')
  i966.ZoomStep6 = request.d('ZoomPos', i967[119], i966.ZoomStep6)
  i966.ZoomStep6B = request.d('ZoomPos', i967[120], i966.ZoomStep6B)
  request.r(i967[121], i967[122], 0, i966, 'Tap6')
  request.r(i967[123], i967[124], 0, i966, 'Tool6Holder')
  request.r(i967[125], i967[126], 0, i966, 'ToolStep6')
  var i989 = i967[127]
  var i988 = []
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 2, i988, '')
  }
  i966.ToolStep6Targets = i988
  request.r(i967[128], i967[129], 0, i966, 'ToolStep6BrushSR')
  request.r(i967[130], i967[131], 0, i966, 'ToolStep6CameraFollow')
  request.r(i967[132], i967[133], 0, i966, 'ToolStep6ToolRotate')
  request.r(i967[134], i967[135], 0, i966, 'HandAnim6')
  request.r(i967[136], i967[137], 0, i966, 'Particles_6')
  request.r(i967[138], i967[139], 0, i966, 'ObjOpen_6')
  request.r(i967[140], i967[141], 0, i966, 'ObjClose_6')
  request.r(i967[142], i967[143], 0, i966, 'EyeShade_6')
  var i991 = i967[144]
  var i990 = []
  for(var i = 0; i < i991.length; i += 2) {
  request.r(i991[i + 0], i991[i + 1], 2, i990, '')
  }
  i966.ObjOnHold_6 = i990
  request.r(i967[145], i967[146], 0, i966, 'EyeColor_6')
  request.r(i967[147], i967[148], 0, i966, 'EyeShadeForOpen_6')
  request.r(i967[149], i967[150], 0, i966, 'EyeShadeOpenSfx')
  i966.ZoomStep7 = request.d('ZoomPos', i967[151], i966.ZoomStep7)
  i966.ZoomStep7B = request.d('ZoomPos', i967[152], i966.ZoomStep7B)
  i966.ZoomStep7C = request.d('ZoomPos', i967[153], i966.ZoomStep7C)
  request.r(i967[154], i967[155], 0, i966, 'Tool7Holder')
  request.r(i967[156], i967[157], 0, i966, 'Tap7')
  request.r(i967[158], i967[159], 0, i966, 'ToolStep7')
  request.r(i967[160], i967[161], 0, i966, 'ToolStep7Actual')
  request.r(i967[162], i967[163], 0, i966, 'ToolStep7Actualb')
  request.r(i967[164], i967[165], 0, i966, 'step7ScratchCard')
  request.r(i967[166], i967[167], 0, i966, 'step7ScratchTip')
  request.r(i967[168], i967[169], 0, i966, 'step7Indication')
  request.r(i967[170], i967[171], 0, i966, 'step7AnimObj')
  request.r(i967[172], i967[173], 0, i966, 'step7AnimObj2')
  request.r(i967[174], i967[175], 0, i966, 'ToolStep7CameraFollow')
  request.r(i967[176], i967[177], 0, i966, 'ToolStep7ToolRotate')
  request.r(i967[178], i967[179], 0, i966, 'ToolStep7Progress')
  request.r(i967[180], i967[181], 0, i966, 'ToolStep7SR')
  var i993 = i967[182]
  var i992 = []
  for(var i = 0; i < i993.length; i += 2) {
  request.r(i993[i + 0], i993[i + 1], 2, i992, '')
  }
  i966.ObjOpen_7 = i992
  var i995 = i967[183]
  var i994 = []
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 2, i994, '')
  }
  i966.ObjClose_7 = i994
  var i997 = i967[184]
  var i996 = []
  for(var i = 0; i < i997.length; i += 2) {
  request.r(i997[i + 0], i997[i + 1], 2, i996, '')
  }
  i966.EyeBones = i996
  request.r(i967[185], i967[186], 0, i966, 'Tip7')
  var i999 = i967[187]
  var i998 = []
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 2, i998, '')
  }
  i966.ObjOnHold_7 = i998
  request.r(i967[188], i967[189], 0, i966, 'EyeLine_7')
  request.r(i967[190], i967[191], 0, i966, 'EyeLineForOpen_7')
  request.r(i967[192], i967[193], 0, i966, 'EyeLinerOpenSfx')
  i966.ZoomStep8 = request.d('ZoomPos', i967[194], i966.ZoomStep8)
  i966.ZoomStep8B = request.d('ZoomPos', i967[195], i966.ZoomStep8B)
  i966.ZoomStep8C = request.d('ZoomPos', i967[196], i966.ZoomStep8C)
  request.r(i967[197], i967[198], 0, i966, 'Tool8Holder')
  request.r(i967[199], i967[200], 0, i966, 'Tap8')
  request.r(i967[201], i967[202], 0, i966, 'EyeLashParent_8')
  request.r(i967[203], i967[204], 0, i966, 'ToolStep8')
  request.r(i967[205], i967[206], 0, i966, 'ToolStep8CameraFollow')
  request.r(i967[207], i967[208], 0, i966, 'ToolStep8ToolRotate')
  request.r(i967[209], i967[210], 0, i966, 'ToolStep8Progress')
  request.r(i967[211], i967[212], 0, i966, 'ToolStep8SR')
  request.r(i967[213], i967[214], 0, i966, 'ToolStep8SR2')
  var i1001 = i967[215]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 2) {
  request.r(i1001[i + 0], i1001[i + 1], 2, i1000, '')
  }
  i966.ObjOpen_8 = i1000
  var i1003 = i967[216]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 2) {
  request.r(i1003[i + 0], i1003[i + 1], 2, i1002, '')
  }
  i966.ObjClose_8 = i1002
  request.r(i967[217], i967[218], 0, i966, 'EyeLashes_8')
  request.r(i967[219], i967[220], 0, i966, 'mascaraEyeClose')
  request.r(i967[221], i967[222], 0, i966, 'mascaraIndication')
  request.r(i967[223], i967[224], 0, i966, 'mascaraIndication_R')
  request.r(i967[225], i967[226], 0, i966, 'mascaraOpenSfx')
  i966.ZoomStep9 = request.d('ZoomPos', i967[227], i966.ZoomStep9)
  i966.ZoomStep9B = request.d('ZoomPos', i967[228], i966.ZoomStep9B)
  i966.ZoomStep9C = request.d('ZoomPos', i967[229], i966.ZoomStep9C)
  request.r(i967[230], i967[231], 0, i966, 'Tool9Holder')
  request.r(i967[232], i967[233], 0, i966, 'Tap9')
  request.r(i967[234], i967[235], 0, i966, 'ToolStep9')
  request.r(i967[236], i967[237], 0, i966, 'ToolStep9SR')
  request.r(i967[238], i967[239], 0, i966, 'ToolStep9Sprite')
  request.r(i967[240], i967[241], 0, i966, 'ToolStep9CameraFollow')
  request.r(i967[242], i967[243], 0, i966, 'ToolStep9ToolRotate')
  request.r(i967[244], i967[245], 0, i966, 'ToolStep9Progress')
  request.r(i967[246], i967[247], 0, i966, 'ToolStep9CapAnimator')
  var i1005 = i967[248]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 2) {
  request.r(i1005[i + 0], i1005[i + 1], 2, i1004, '')
  }
  i966.EyeBrowBones = i1004
  request.r(i967[249], i967[250], 0, i966, 'Tip9')
  var i1007 = i967[251]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 2, i1006, '')
  }
  i966.ObjOnHold_9 = i1006
  request.r(i967[252], i967[253], 0, i966, 'EyeBrow_9')
  request.r(i967[254], i967[255], 0, i966, 'EyeBrowIndication')
  request.r(i967[256], i967[257], 0, i966, 'EyeBrowIndication_R')
  request.r(i967[258], i967[259], 0, i966, 'eyeBrowOpenSfx')
  i966.ZoomStep10 = request.d('ZoomPos', i967[260], i966.ZoomStep10)
  i966.ZoomStep10B = request.d('ZoomPos', i967[261], i966.ZoomStep10B)
  request.r(i967[262], i967[263], 0, i966, 'Tool10Holder')
  request.r(i967[264], i967[265], 0, i966, 'Tap10')
  request.r(i967[266], i967[267], 0, i966, 'ToolStep10')
  request.r(i967[268], i967[269], 0, i966, 'ToolStep10CameraFollow')
  request.r(i967[270], i967[271], 0, i966, 'ToolStep10ToolRotate')
  request.r(i967[272], i967[273], 0, i966, 'HandAnim10')
  var i1009 = i967[274]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 2) {
  request.r(i1009[i + 0], i1009[i + 1], 2, i1008, '')
  }
  i966.ToolStep10Tips = i1008
  request.r(i967[275], i967[276], 0, i966, 'Particles_10')
  var i1011 = i967[277]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 2, i1010, '')
  }
  i966.ToolStep10Targets = i1010
  request.r(i967[278], i967[279], 0, i966, 'ToolStep10BrushSR')
  request.r(i967[280], i967[281], 0, i966, 'ObjOpen_10')
  request.r(i967[282], i967[283], 0, i966, 'ObjClose_10')
  var i1013 = i967[284]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 2) {
  request.r(i1013[i + 0], i1013[i + 1], 2, i1012, '')
  }
  i966.BlushBones = i1012
  request.r(i967[285], i967[286], 0, i966, 'Tip10')
  request.r(i967[287], i967[288], 0, i966, 'Blush_10')
  request.r(i967[289], i967[290], 0, i966, 'BlushOpenSfx')
  i966.ZoomStep11 = request.d('ZoomPos', i967[291], i966.ZoomStep11)
  i966.ZoomStep11B = request.d('ZoomPos', i967[292], i966.ZoomStep11B)
  request.r(i967[293], i967[294], 0, i966, 'Tool11Holder')
  request.r(i967[295], i967[296], 0, i966, 'Tap11')
  request.r(i967[297], i967[298], 0, i966, 'ToolStep11')
  request.r(i967[299], i967[300], 0, i966, 'ToolStep11Animator')
  request.r(i967[301], i967[302], 0, i966, 'ToolStep11CameraFollow')
  request.r(i967[303], i967[304], 0, i966, 'ToolStep11ToolRotate')
  request.r(i967[305], i967[306], 0, i966, 'HandAnim11')
  request.r(i967[307], i967[308], 0, i966, 'ToolStep11CapAnimator')
  request.r(i967[309], i967[310], 0, i966, 'ToolStep11Shadow')
  var i1015 = i967[311]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 2) {
  request.r(i1015[i + 0], i1015[i + 1], 2, i1014, '')
  }
  i966.LipstickBones = i1014
  request.r(i967[312], i967[313], 0, i966, 'Tip11')
  request.r(i967[314], i967[315], 0, i966, 'LipClose')
  request.r(i967[316], i967[317], 0, i966, 'lipstickOpenSfx')
  request.r(i967[318], i967[319], 0, i966, 'lipstickOpenSfx2')
  request.r(i967[320], i967[321], 0, i966, 'lipstickMmmSfx')
  i966.levelName = i967[322]
  i966.levelReward = i967[323]
  request.r(i967[324], i967[325], 0, i966, 'LevelIcon')
  request.r(i967[326], i967[327], 0, i966, 'Level_BG')
  var i1017 = i967[328]
  var i1016 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1017.length; i += 2) {
  request.r(i1017[i + 0], i1017[i + 1], 1, i1016, '')
  }
  i966.ToolIcons = i1016
  var i1019 = i967[329]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 2) {
  request.r(i1019[i + 0], i1019[i + 1], 2, i1018, '')
  }
  i966.AllDrags = i1018
  var i1021 = i967[330]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 2, i1020, '')
  }
  i966.AllSources = i1020
  var i1023 = i967[331]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 2) {
  request.r(i1023[i + 0], i1023[i + 1], 2, i1022, '')
  }
  i966.AllScratches = i1022
  i966.stepsDone = i967[332]
  i966.levelNo = i967[333]
  i966.partNo = i967[334]
  return i966
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i1024 = root || request.c( 'ZoomPos' )
  var i1025 = data
  i1024.CameraPos = new pc.Vec3( i1025[0], i1025[1], i1025[2] )
  i1024.CameraFOV = i1025[3]
  return i1024
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i1040 = root || request.c( 'PlayableCTA' )
  var i1041 = data
  i1040.trigger = i1041[0]
  i1040.afterSeconds = i1041[1]
  i1040.afterTaps = i1041[2]
  request.r(i1041[3], i1041[4], 0, i1040, 'scratchProgress')
  i1040.scratchIndex = i1041[5]
  i1040.progressThreshold = i1041[6]
  request.r(i1041[7], i1041[8], 0, i1040, 'watchedTool')
  i1040.blockInputOnFire = !!i1041[9]
  i1040.refireOnEveryTap = !!i1041[10]
  i1040.refireDelay = i1041[11]
  i1040.showEndCard = !!i1041[12]
  request.r(i1041[13], i1041[14], 0, i1040, 'endCard')
  i1040.showEndCardOnProgressTrigger = !!i1041[15]
  i1040.showEndCardOnToolAppearTrigger = !!i1041[16]
  i1040.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i1041[17], i1040.onCtaFired)
  i1040.logWhenFired = !!i1041[18]
  return i1040
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i1042 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i1043 = data
  request.r(i1043[0], i1043[1], 0, i1042, 'MainCamera')
  i1042.RenderType = i1043[2]
  request.r(i1043[3], i1043[4], 0, i1042, 'ScratchSurfaceSprite')
  i1042.ScratchSurfaceSpriteHasAlpha = !!i1043[5]
  i1042.MaskProgressCutOffValue = i1043[6]
  request.r(i1043[7], i1043[8], 0, i1042, 'EraseTexture')
  i1042.EraseTextureScale = new pc.Vec2( i1043[9], i1043[10] )
  i1042.InputEnabled = !!i1043[11]
  request.r(i1043[12], i1043[13], 0, i1042, 'Card')
  i1042.Mode = i1043[14]
  request.r(i1043[15], i1043[16], 0, i1042, 'Progress')
  request.r(i1043[17], i1043[18], 0, i1042, 'MeshCard')
  request.r(i1043[19], i1043[20], 0, i1042, 'SpriteCard')
  request.r(i1043[21], i1043[22], 0, i1042, 'ImageCard')
  request.r(i1043[23], i1043[24], 0, i1042, 'MaskShader')
  request.r(i1043[25], i1043[26], 0, i1042, 'BrushShader')
  request.r(i1043[27], i1043[28], 0, i1042, 'MaskProgressShader')
  request.r(i1043[29], i1043[30], 0, i1042, 'MaskProgressCutOffShader')
  return i1042
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i1044 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'MainCamera')
  request.r(i1045[2], i1045[3], 0, i1044, 'Surface')
  i1044.RenderTextureQuality = i1045[4]
  request.r(i1045[5], i1045[6], 0, i1044, 'Eraser')
  request.r(i1045[7], i1045[8], 0, i1044, 'Progress')
  request.r(i1045[9], i1045[10], 0, i1044, 'ScratchSurface')
  request.r(i1045[11], i1045[12], 0, i1044, 'RenderTexture')
  i1044.BrushScale = new pc.Vec2( i1045[13], i1045[14] )
  request.r(i1045[15], i1045[16], 0, i1044, 'ToolTip')
  i1044.InputEnabled = !!i1045[17]
  i1044.IsScratching = !!i1045[18]
  i1044.useChangingScale = !!i1045[19]
  i1044.useGivenBrushScale = !!i1045[20]
  i1044.canSpreadMask = !!i1045[21]
  i1044.shouldPaintHoles = !!i1045[22]
  i1044.canRotateTip = !!i1045[23]
  i1044._mode = i1045[24]
  return i1044
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i1046 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'Card')
  i1046.currentProgress = i1047[2]
  return i1046
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i1048 = root || request.c( 'InteractableBones' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'Tip')
  i1048.MoveAmount = i1049[2]
  i1048.MoveSpeed = i1049[3]
  i1048.ShakeSpeed = i1049[4]
  i1048.MovementThreshold = i1049[5]
  i1048.MoveX = !!i1049[6]
  i1048.MoveY = !!i1049[7]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1051 = data
  i1050.usedByComposite = !!i1051[0]
  i1050.autoTiling = !!i1051[1]
  var i1053 = i1051[2]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
  var i1055 = i1053[i + 0]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 2) {
    i1054.push( new pc.Vec2( i1055[i + 0], i1055[i + 1] ) );
  }
    i1052.push( i1054 );
  }
  i1050.points = i1052
  i1050.enabled = !!i1051[3]
  i1050.isTrigger = !!i1051[4]
  i1050.usedByEffector = !!i1051[5]
  i1050.density = i1051[6]
  i1050.offset = new pc.Vec2( i1051[7], i1051[8] )
  request.r(i1051[9], i1051[10], 0, i1050, 'material')
  return i1050
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i1062 = root || request.c( 'PlaySfxOnCollision' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, 'Tip')
  i1062.Mode = i1063[2]
  request.r(i1063[3], i1063[4], 0, i1062, 'DragInput')
  request.r(i1063[5], i1063[6], 0, i1062, 'Source')
  i1062.startVol = i1063[7]
  i1062.targetVol = i1063[8]
  i1062.duration = i1063[9]
  request.r(i1063[10], i1063[11], 0, i1062, 'Particles')
  i1062.isDone = !!i1063[12]
  i1062.isInArea = !!i1063[13]
  i1062.isPlaying = !!i1063[14]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1065 = data
  request.r(i1065[0], i1065[1], 0, i1064, 'clip')
  request.r(i1065[2], i1065[3], 0, i1064, 'outputAudioMixerGroup')
  i1064.playOnAwake = !!i1065[4]
  i1064.loop = !!i1065[5]
  i1064.time = i1065[6]
  i1064.volume = i1065[7]
  i1064.pitch = i1065[8]
  i1064.enabled = !!i1065[9]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1067 = data
  i1066.radius = i1067[0]
  i1066.enabled = !!i1067[1]
  i1066.isTrigger = !!i1067[2]
  i1066.usedByEffector = !!i1067[3]
  i1066.density = i1067[4]
  i1066.offset = new pc.Vec2( i1067[5], i1067[6] )
  request.r(i1067[7], i1067[8], 0, i1066, 'material')
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i1069 = data
  i1068.textureMode = i1069[0]
  i1068.alignment = i1069[1]
  i1068.widthCurve = new pc.AnimationCurve( { keys_flow: i1069[2] } )
  i1068.colorGradient = i1069[3] ? new pc.ColorGradient(i1069[3][0], i1069[3][1], i1069[3][2]) : null
  var i1071 = i1069[4]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 3) {
    i1070.push( new pc.Vec3( i1071[i + 0], i1071[i + 1], i1071[i + 2] ) );
  }
  i1068.positions = i1070
  i1068.positionCount = i1069[5]
  i1068.widthMultiplier = i1069[6]
  i1068.startWidth = i1069[7]
  i1068.endWidth = i1069[8]
  i1068.numCornerVertices = i1069[9]
  i1068.numCapVertices = i1069[10]
  i1068.useWorldSpace = !!i1069[11]
  i1068.loop = !!i1069[12]
  i1068.startColor = new pc.Color(i1069[13], i1069[14], i1069[15], i1069[16])
  i1068.endColor = new pc.Color(i1069[17], i1069[18], i1069[19], i1069[20])
  i1068.generateLightingData = !!i1069[21]
  i1068.enabled = !!i1069[22]
  request.r(i1069[23], i1069[24], 0, i1068, 'sharedMaterial')
  var i1073 = i1069[25]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 2) {
  request.r(i1073[i + 0], i1073[i + 1], 2, i1072, '')
  }
  i1068.sharedMaterials = i1072
  i1068.receiveShadows = !!i1069[26]
  i1068.shadowCastingMode = i1069[27]
  i1068.sortingLayerID = i1069[28]
  i1068.sortingOrder = i1069[29]
  i1068.lightmapIndex = i1069[30]
  i1068.lightmapSceneIndex = i1069[31]
  i1068.lightmapScaleOffset = new pc.Vec4( i1069[32], i1069[33], i1069[34], i1069[35] )
  i1068.lightProbeUsage = i1069[36]
  i1068.reflectionProbeUsage = i1069[37]
  return i1068
}

Deserializers["TextureOffsetScroller"] = function (request, data, root) {
  var i1074 = root || request.c( 'TextureOffsetScroller' )
  var i1075 = data
  i1074.scrollSpeed = new pc.Vec2( i1075[0], i1075[1] )
  i1074.smoothStart = !!i1075[2]
  i1074.smoothDuration = i1075[3]
  i1074.textureName = i1075[4]
  i1074.useSharedMaterial = !!i1075[5]
  return i1074
}

Deserializers["Lvl1_EyeOpenClose"] = function (request, data, root) {
  var i1076 = root || request.c( 'Lvl1_EyeOpenClose' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'ThisLevel')
  request.r(i1077[2], i1077[3], 0, i1076, 'ThisDrag')
  request.r(i1077[4], i1077[5], 0, i1076, 'Tip')
  return i1076
}

Deserializers["Lvl1_EyeOpenClose_Shampoo"] = function (request, data, root) {
  var i1078 = root || request.c( 'Lvl1_EyeOpenClose_Shampoo' )
  var i1079 = data
  request.r(i1079[0], i1079[1], 0, i1078, 'ThisLevel')
  request.r(i1079[2], i1079[3], 0, i1078, 'ThisDrag')
  request.r(i1079[4], i1079[5], 0, i1078, 'Tip')
  return i1078
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i1080 = root || request.c( 'BD_AnimatorDrag' )
  var i1081 = data
  request.r(i1081[0], i1081[1], 0, i1080, 'BD')
  request.r(i1081[2], i1081[3], 0, i1080, 'anim')
  request.r(i1081[4], i1081[5], 0, i1080, 'Source')
  i1080.Vibration = !!i1081[6]
  i1080.isCompletable = !!i1081[7]
  i1080.completionThreshold = i1081[8]
  i1080.OnComplete = request.d('UnityEngine.Events.UnityEvent', i1081[9], i1080.OnComplete)
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1083 = data
  i1082.bodyType = i1083[0]
  request.r(i1083[1], i1083[2], 0, i1082, 'material')
  i1082.simulated = !!i1083[3]
  i1082.useAutoMass = !!i1083[4]
  i1082.mass = i1083[5]
  i1082.drag = i1083[6]
  i1082.angularDrag = i1083[7]
  i1082.gravityScale = i1083[8]
  i1082.collisionDetectionMode = i1083[9]
  i1082.sleepMode = i1083[10]
  i1082.constraints = i1083[11]
  return i1082
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i1084 = root || request.c( 'BasicDrag' )
  var i1085 = data
  i1084.canDrag = !!i1085[0]
  i1084.dragByDelta = !!i1085[1]
  i1084.isDragging = !!i1085[2]
  i1084.moveWithPointer = !!i1085[3]
  i1084.canReturn = !!i1085[4]
  i1084.jumpOnReturn = !!i1085[5]
  i1084.returnTime = i1085[6]
  i1084.Tool_Offset = new pc.Vec3( i1085[7], i1085[8], i1085[9] )
  i1084.canScaleIncrease = !!i1085[10]
  i1084.Self_ScaleNew = new pc.Vec3( i1085[11], i1085[12], i1085[13] )
  i1084.canRotateOnPick = !!i1085[14]
  i1084.startRot = new pc.Vec3( i1085[15], i1085[16], i1085[17] )
  i1084.newRot = new pc.Vec3( i1085[18], i1085[19], i1085[20] )
  var i1087 = i1085[21]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 2) {
  request.r(i1087[i + 0], i1087[i + 1], 2, i1086, '')
  }
  i1084.childSprite = i1086
  request.r(i1085[22], i1085[23], 0, i1084, 'ToolSelectClip')
  request.r(i1085[24], i1085[25], 0, i1084, 'ToolLoopClip')
  request.r(i1085[26], i1085[27], 0, i1084, 'thisParticles')
  i1084.onDragparticle = !!i1085[28]
  request.r(i1085[29], i1085[30], 0, i1084, 'dragParticles')
  request.r(i1085[31], i1085[32], 0, i1084, 'anim')
  i1084.startPos = new pc.Vec3( i1085[33], i1085[34], i1085[35] )
  i1084.startScale = new pc.Vec3( i1085[36], i1085[37], i1085[38] )
  i1084.Vibration = !!i1085[39]
  i1084.isPlacedCannotMove = !!i1085[40]
  i1084.isObjectMovingWhileDragging = !!i1085[41]
  i1084.OnMouseDownEvent = request.d('System.Action', i1085[42], i1084.OnMouseDownEvent)
  i1084.OnMouseUpEvent = request.d('System.Action', i1085[43], i1084.OnMouseUpEvent)
  i1084.ProgStartEvent = request.d('System.Action', i1085[44], i1084.ProgStartEvent)
  i1084.ProgEndEvent = request.d('System.Action', i1085[45], i1084.ProgEndEvent)
  i1084.canCallMouseUpWhenGamePaused = !!i1085[46]
  i1084.ClampX_L = i1085[47]
  i1084.ClampX_H = i1085[48]
  i1084.ClampY_L = i1085[49]
  i1084.ClampY_H = i1085[50]
  i1084.startOrder = i1085[51]
  i1084.dontResetItIsInCollider = !!i1085[52]
  request.r(i1085[53], i1085[54], 0, i1084, 'thisCollider')
  request.r(i1085[55], i1085[56], 0, i1084, 'thisSR')
  i1084.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i1085[57], i1084.OnMouseDownEventIndependentFromCanDrag)
  return i1084
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1088 = root || request.c( 'System.Action' )
  var i1089 = data
  return i1088
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i1090 = root || request.c( 'BD_Progress' )
  var i1091 = data
  var i1093 = i1091[0]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('ScratchData', i1093[i + 0]) );
  }
  i1090.AllScratches = i1092
  i1090.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i1091[1], i1090.OnScratchComplete)
  i1090.isProgDone = !!i1091[2]
  i1090.canCallComplete = !!i1091[3]
  i1090.CollectiveAppear = !!i1091[4]
  i1090.tipControl = !!i1091[5]
  i1090.progressControl = !!i1091[6]
  request.r(i1091[7], i1091[8], 0, i1090, 'thisDrag')
  i1090.CompleteEvent = request.d('System.Action', i1091[9], i1090.CompleteEvent)
  i1090.SubCompleteEvent = request.d('System.Action', i1091[10], i1090.SubCompleteEvent)
  return i1090
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i1096 = root || request.c( 'ScratchData' )
  var i1097 = data
  request.r(i1097[0], i1097[1], 0, i1096, 'ScratchManager')
  i1096.scratchLimit = i1097[2]
  i1096.isComplete = !!i1097[3]
  return i1096
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i1098 = root || request.c( 'ActionOnTap' )
  var i1099 = data
  i1098.OnTap = request.d('UnityEngine.Events.UnityEvent', i1099[0], i1098.OnTap)
  i1098.OnTapExtra = request.d('System.Action', i1099[1], i1098.OnTapExtra)
  return i1098
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i1100 = root || request.c( 'BD_ProgressHelper' )
  var i1101 = data
  request.r(i1101[0], i1101[1], 0, i1100, 'BD_Progress')
  request.r(i1101[2], i1101[3], 0, i1100, 'fadeSprite')
  i1100.fadeIn = !!i1101[4]
  return i1100
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i1102 = root || request.c( 'BD_Clamp' )
  var i1103 = data
  i1102.ClampX_L = i1103[0]
  i1102.ClampX_H = i1103[1]
  i1102.ClampY_L = i1103[2]
  i1102.ClampY_H = i1103[3]
  return i1102
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i1104 = root || request.c( 'BD_ToolRotate' )
  var i1105 = data
  i1104.startDelay = i1105[0]
  request.r(i1105[1], i1105[2], 0, i1104, 'Tool')
  request.r(i1105[3], i1105[4], 0, i1104, 'Clamp')
  request.r(i1105[5], i1105[6], 0, i1104, 'Pivot')
  i1104.MinAngle = new pc.Vec3( i1105[7], i1105[8], i1105[9] )
  i1104.MaxAngle = new pc.Vec3( i1105[10], i1105[11], i1105[12] )
  i1104.rotationSpeed = i1105[13]
  return i1104
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i1106 = root || request.c( 'BD_CameraFollow' )
  var i1107 = data
  request.r(i1107[0], i1107[1], 0, i1106, 'Tool')
  request.r(i1107[2], i1107[3], 0, i1106, 'Pivot')
  i1106.FOV = i1107[4]
  i1106.Y_L = i1107[5]
  i1106.Y_H = i1107[6]
  i1106.X_L = i1107[7]
  i1106.X_R = i1107[8]
  i1106.startDelay = i1107[9]
  i1106.duration = i1107[10]
  return i1106
}

Deserializers["DraggableObject"] = function (request, data, root) {
  var i1108 = root || request.c( 'DraggableObject' )
  var i1109 = data
  i1108.dragSpeed = i1109[0]
  i1108.rotateOnPick = !!i1109[1]
  i1108.targetRotationAngle = i1109[2]
  i1108.rotationSpeed = i1109[3]
  request.r(i1109[4], i1109[5], 0, i1108, 'dropPrefab')
  request.r(i1109[6], i1109[7], 0, i1108, 'headPoint')
  request.r(i1109[8], i1109[9], 0, i1108, 'AnimPlayer')
  i1108.AnimName = i1109[10]
  i1108.dropDelay = i1109[11]
  request.r(i1109[12], i1109[13], 0, i1108, 'headTriggerCollider')
  var i1111 = i1109[14]
  var i1110 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Collider2D')))
  for(var i = 0; i < i1111.length; i += 2) {
  request.r(i1111[i + 0], i1111[i + 1], 1, i1110, '')
  }
  i1108.dropTargets = i1110
  var i1113 = i1109[15]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1113.length; i += 2) {
  request.r(i1113[i + 0], i1113[i + 1], 1, i1112, '')
  }
  i1108.ItemsToActive = i1112
  i1108.delayInActivation = i1109[16]
  i1108.offsetFromTarget = new pc.Vec2( i1109[17], i1109[18] )
  i1108.minX = i1109[19]
  i1108.maxX = i1109[20]
  i1108.minY = i1109[21]
  i1108.maxY = i1109[22]
  i1108.OnComplete = request.d('UnityEngine.Events.UnityEvent', i1109[23], i1108.OnComplete)
  i1108.OnMouseDownEvent = request.d('System.Action', i1109[24], i1108.OnMouseDownEvent)
  i1108.OnMouseUpEvent = request.d('System.Action', i1109[25], i1108.OnMouseUpEvent)
  request.r(i1109[26], i1109[27], 0, i1108, 'hitSfx')
  i1108.isDragging = !!i1109[28]
  return i1108
}

Deserializers["DO_CameraFollow"] = function (request, data, root) {
  var i1118 = root || request.c( 'DO_CameraFollow' )
  var i1119 = data
  request.r(i1119[0], i1119[1], 0, i1118, 'Tool')
  request.r(i1119[2], i1119[3], 0, i1118, 'Pivot')
  i1118.FOV = i1119[4]
  i1118.Y_L = i1119[5]
  i1118.Y_H = i1119[6]
  i1118.X_L = i1119[7]
  i1118.X_R = i1119[8]
  i1118.startDelay = i1119[9]
  i1118.duration = i1119[10]
  return i1118
}

Deserializers["Lvl1_Face_AddPrimer"] = function (request, data, root) {
  var i1120 = root || request.c( 'Lvl1_Face_AddPrimer' )
  var i1121 = data
  request.r(i1121[0], i1121[1], 0, i1120, 'ThisLevel')
  request.r(i1121[2], i1121[3], 0, i1120, 'ThisDrag')
  i1120.liteShakeOnThird = !!i1121[4]
  request.r(i1121[5], i1121[6], 0, i1120, 'Col')
  request.r(i1121[7], i1121[8], 0, i1120, 'AnimPlayer')
  i1120.AnimName = i1121[9]
  var i1123 = i1121[10]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 2) {
  request.r(i1123[i + 0], i1123[i + 1], 2, i1122, '')
  }
  i1120.Detects = i1122
  var i1125 = i1121[11]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 2) {
  request.r(i1125[i + 0], i1125[i + 1], 2, i1124, '')
  }
  i1120.Anims = i1124
  i1120.OnComplete = request.d('UnityEngine.Events.UnityEvent', i1121[12], i1120.OnComplete)
  request.r(i1121[13], i1121[14], 0, i1120, 'Clip')
  var i1127 = i1121[15]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 2) {
  request.r(i1127[i + 0], i1127[i + 1], 2, i1126, '')
  }
  i1120.BonesToShake = i1126
  i1120.currentPrimer = i1121[16]
  return i1120
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i1128 = root || request.c( 'DestroyObj' )
  var i1129 = data
  i1128.destroyDelay = i1129[0]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1131 = data
  i1130.name = i1131[0]
  i1130.atlasId = i1131[1]
  i1130.mipmapCount = i1131[2]
  i1130.hdr = !!i1131[3]
  i1130.size = i1131[4]
  i1130.anisoLevel = i1131[5]
  i1130.filterMode = i1131[6]
  var i1133 = i1131[7]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 4) {
    i1132.push( UnityEngine.Rect.MinMaxRect(i1133[i + 0], i1133[i + 1], i1133[i + 2], i1133[i + 3]) );
  }
  i1130.rects = i1132
  i1130.wrapU = i1131[8]
  i1130.wrapV = i1131[9]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1137 = data
  i1136.name = i1137[0]
  i1136.index = i1137[1]
  i1136.startup = !!i1137[2]
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1139 = data
  i1138.aspect = i1139[0]
  i1138.orthographic = !!i1139[1]
  i1138.orthographicSize = i1139[2]
  i1138.backgroundColor = new pc.Color(i1139[3], i1139[4], i1139[5], i1139[6])
  i1138.nearClipPlane = i1139[7]
  i1138.farClipPlane = i1139[8]
  i1138.fieldOfView = i1139[9]
  i1138.depth = i1139[10]
  i1138.clearFlags = i1139[11]
  i1138.cullingMask = i1139[12]
  i1138.rect = i1139[13]
  request.r(i1139[14], i1139[15], 0, i1138, 'targetTexture')
  i1138.usePhysicalProperties = !!i1139[16]
  i1138.focalLength = i1139[17]
  i1138.sensorSize = new pc.Vec2( i1139[18], i1139[19] )
  i1138.lensShift = new pc.Vec2( i1139[20], i1139[21] )
  i1138.gateFit = i1139[22]
  i1138.commandBufferCount = i1139[23]
  i1138.cameraType = i1139[24]
  i1138.enabled = !!i1139[25]
  return i1138
}

Deserializers["CameraController"] = function (request, data, root) {
  var i1140 = root || request.c( 'CameraController' )
  var i1141 = data
  request.r(i1141[0], i1141[1], 0, i1140, 'cam')
  i1140.defaultPosition = new pc.Vec3( i1141[2], i1141[3], i1141[4] )
  i1140.defaultSize = i1141[5]
  i1140.defaultFOV = i1141[6]
  i1140.defaultDuration = i1141[7]
  i1140.defaultEase = i1141[8]
  return i1140
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i1142 = root || request.c( 'MusicSource' )
  var i1143 = data
  request.r(i1143[0], i1143[1], 0, i1142, 'source')
  return i1142
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i1144 = root || request.c( 'UI_Manager' )
  var i1145 = data
  i1144.levelCompleted = !!i1145[0]
  i1144.isPauseActive = !!i1145[1]
  i1144.loadIndex = i1145[2]
  request.r(i1145[3], i1145[4], 0, i1144, 'removeAdsButton')
  request.r(i1145[5], i1145[6], 0, i1144, 'pauseButton')
  request.r(i1145[7], i1145[8], 0, i1144, 'Fade_Img')
  request.r(i1145[9], i1145[10], 0, i1144, 'TopBarAnim')
  request.r(i1145[11], i1145[12], 0, i1144, 'MainPanel')
  request.r(i1145[13], i1145[14], 0, i1144, 'PausePanel')
  request.r(i1145[15], i1145[16], 0, i1144, 'PausePopUp')
  request.r(i1145[17], i1145[18], 0, i1144, 'PauseCanvasGroup')
  request.r(i1145[19], i1145[20], 0, i1144, 'RateUsPanel')
  request.r(i1145[21], i1145[22], 0, i1144, 'RateUsPopUp')
  request.r(i1145[23], i1145[24], 0, i1144, 'RemoveAdsPanel')
  request.r(i1145[25], i1145[26], 0, i1144, 'RemoveAdsPopUp')
  request.r(i1145[27], i1145[28], 0, i1144, 'RemoveAdsCanvasGroup')
  var i1147 = i1145[29]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 2) {
  request.r(i1147[i + 0], i1147[i + 1], 2, i1146, '')
  }
  i1144.RemoveAdsAnims = i1146
  var i1149 = i1145[30]
  var i1148 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1149.length; i += 2) {
  request.r(i1149[i + 0], i1149[i + 1], 1, i1148, '')
  }
  i1144.thingsToDisableWhenCompletePanel = i1148
  request.r(i1145[31], i1145[32], 0, i1144, 'CompletePanel')
  request.r(i1145[33], i1145[34], 0, i1144, 'LevelIcon')
  request.r(i1145[35], i1145[36], 0, i1144, 'CompleteParticles')
  request.r(i1145[37], i1145[38], 0, i1144, 'progressBar')
  request.r(i1145[39], i1145[40], 0, i1144, 'progressText')
  request.r(i1145[41], i1145[42], 0, i1144, 'toolIcon1')
  request.r(i1145[43], i1145[44], 0, i1144, 'toolIcon2')
  request.r(i1145[45], i1145[46], 0, i1144, 'toolIcon3')
  request.r(i1145[47], i1145[48], 0, i1144, 'target1')
  request.r(i1145[49], i1145[50], 0, i1144, 'target2')
  i1144.toolMoveDuration = i1145[51]
  i1144.currentIndex = i1145[52]
  var i1151 = i1145[53]
  var i1150 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1151.length; i += 2) {
  request.r(i1151[i + 0], i1151[i + 1], 1, i1150, '')
  }
  i1144.allTools = i1150
  request.r(i1145[54], i1145[55], 0, i1144, 'clockProgress')
  request.r(i1145[56], i1145[57], 0, i1144, 'clockProgressFill')
  request.r(i1145[58], i1145[59], 0, i1144, 'clockAudio')
  i1144.moveDistance = i1145[60]
  i1144.animationDuration = i1145[61]
  i1144.greyBgChildName = i1145[62]
  i1144.pushOffset = i1145[63]
  return i1144
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i1152 = root || request.c( 'GameManagerPlayable' )
  var i1153 = data
  request.r(i1153[0], i1153[1], 0, i1152, 'endParticles')
  request.r(i1153[2], i1153[3], 0, i1152, 'stepCompleteParticles')
  request.r(i1153[4], i1153[5], 0, i1152, 'DefaultMat')
  request.r(i1153[6], i1153[7], 0, i1152, 'BG_Music')
  request.r(i1153[8], i1153[9], 0, i1152, 'restoreEffectShader')
  request.r(i1153[10], i1153[11], 0, i1152, 'stickerEffectShader')
  i1152.isComplete = !!i1153[12]
  i1152.isPaused = !!i1153[13]
  request.r(i1153[14], i1153[15], 0, i1152, 'currentLevel')
  i1152.startLevelOnPlay = !!i1153[16]
  i1152.currentLevelNo = i1153[17]
  return i1152
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1154 = root || request.c( 'AudioController' )
  var i1155 = data
  request.r(i1155[0], i1155[1], 0, i1154, 'MainMixer')
  request.r(i1155[2], i1155[3], 0, i1154, 'UiClick')
  request.r(i1155[4], i1155[5], 0, i1154, 'UiClickSource')
  var i1157 = i1155[6]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 2) {
  request.r(i1157[i + 0], i1157[i + 1], 2, i1156, '')
  }
  i1154.SfxSources = i1156
  var i1159 = i1155[7]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 2) {
  request.r(i1159[i + 0], i1159[i + 1], 2, i1158, '')
  }
  i1154.AllClips = i1158
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1163 = data
  i1162.pivot = new pc.Vec2( i1163[0], i1163[1] )
  i1162.anchorMin = new pc.Vec2( i1163[2], i1163[3] )
  i1162.anchorMax = new pc.Vec2( i1163[4], i1163[5] )
  i1162.sizeDelta = new pc.Vec2( i1163[6], i1163[7] )
  i1162.anchoredPosition3D = new pc.Vec3( i1163[8], i1163[9], i1163[10] )
  i1162.rotation = new pc.Quat(i1163[11], i1163[12], i1163[13], i1163[14])
  i1162.scale = new pc.Vec3( i1163[15], i1163[16], i1163[17] )
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1165 = data
  i1164.planeDistance = i1165[0]
  i1164.referencePixelsPerUnit = i1165[1]
  i1164.isFallbackOverlay = !!i1165[2]
  i1164.renderMode = i1165[3]
  i1164.renderOrder = i1165[4]
  i1164.sortingLayerName = i1165[5]
  i1164.sortingOrder = i1165[6]
  i1164.scaleFactor = i1165[7]
  request.r(i1165[8], i1165[9], 0, i1164, 'worldCamera')
  i1164.overrideSorting = !!i1165[10]
  i1164.pixelPerfect = !!i1165[11]
  i1164.targetDisplay = i1165[12]
  i1164.overridePixelPerfect = !!i1165[13]
  i1164.enabled = !!i1165[14]
  return i1164
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1166 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1167 = data
  i1166.m_UiScaleMode = i1167[0]
  i1166.m_ReferencePixelsPerUnit = i1167[1]
  i1166.m_ScaleFactor = i1167[2]
  i1166.m_ReferenceResolution = new pc.Vec2( i1167[3], i1167[4] )
  i1166.m_ScreenMatchMode = i1167[5]
  i1166.m_MatchWidthOrHeight = i1167[6]
  i1166.m_PhysicalUnit = i1167[7]
  i1166.m_FallbackScreenDPI = i1167[8]
  i1166.m_DefaultSpriteDPI = i1167[9]
  i1166.m_DynamicPixelsPerUnit = i1167[10]
  i1166.m_PresetInfoIsWorld = !!i1167[11]
  return i1166
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1168 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1169 = data
  i1168.m_IgnoreReversedGraphics = !!i1169[0]
  i1168.m_BlockingObjects = i1169[1]
  i1168.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1169[2] )
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1171 = data
  i1170.cullTransparentMesh = !!i1171[0]
  return i1170
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1172 = root || request.c( 'UnityEngine.UI.Image' )
  var i1173 = data
  request.r(i1173[0], i1173[1], 0, i1172, 'm_Sprite')
  i1172.m_Type = i1173[2]
  i1172.m_PreserveAspect = !!i1173[3]
  i1172.m_FillCenter = !!i1173[4]
  i1172.m_FillMethod = i1173[5]
  i1172.m_FillAmount = i1173[6]
  i1172.m_FillClockwise = !!i1173[7]
  i1172.m_FillOrigin = i1173[8]
  i1172.m_UseSpriteMesh = !!i1173[9]
  i1172.m_PixelsPerUnitMultiplier = i1173[10]
  request.r(i1173[11], i1173[12], 0, i1172, 'm_Material')
  i1172.m_Maskable = !!i1173[13]
  i1172.m_Color = new pc.Color(i1173[14], i1173[15], i1173[16], i1173[17])
  i1172.m_RaycastTarget = !!i1173[18]
  i1172.m_RaycastPadding = new pc.Vec4( i1173[19], i1173[20], i1173[21], i1173[22] )
  return i1172
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1174 = root || request.c( 'UnityEngine.UI.Text' )
  var i1175 = data
  i1174.m_FontData = request.d('UnityEngine.UI.FontData', i1175[0], i1174.m_FontData)
  i1174.m_Text = i1175[1]
  request.r(i1175[2], i1175[3], 0, i1174, 'm_Material')
  i1174.m_Maskable = !!i1175[4]
  i1174.m_Color = new pc.Color(i1175[5], i1175[6], i1175[7], i1175[8])
  i1174.m_RaycastTarget = !!i1175[9]
  i1174.m_RaycastPadding = new pc.Vec4( i1175[10], i1175[11], i1175[12], i1175[13] )
  return i1174
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1176 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1177 = data
  request.r(i1177[0], i1177[1], 0, i1176, 'm_Font')
  i1176.m_FontSize = i1177[2]
  i1176.m_FontStyle = i1177[3]
  i1176.m_BestFit = !!i1177[4]
  i1176.m_MinSize = i1177[5]
  i1176.m_MaxSize = i1177[6]
  i1176.m_Alignment = i1177[7]
  i1176.m_AlignByGeometry = !!i1177[8]
  i1176.m_RichText = !!i1177[9]
  i1176.m_HorizontalOverflow = i1177[10]
  i1176.m_VerticalOverflow = i1177[11]
  i1176.m_LineSpacing = i1177[12]
  return i1176
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1178 = root || request.c( 'UnityEngine.UI.Button' )
  var i1179 = data
  i1178.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1179[0], i1178.m_OnClick)
  i1178.m_Navigation = request.d('UnityEngine.UI.Navigation', i1179[1], i1178.m_Navigation)
  i1178.m_Transition = i1179[2]
  i1178.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1179[3], i1178.m_Colors)
  i1178.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1179[4], i1178.m_SpriteState)
  i1178.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1179[5], i1178.m_AnimationTriggers)
  i1178.m_Interactable = !!i1179[6]
  request.r(i1179[7], i1179[8], 0, i1178, 'm_TargetGraphic')
  return i1178
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1180 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1181 = data
  i1180.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1181[0], i1180.m_PersistentCalls)
  return i1180
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1182 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1183 = data
  i1182.m_Mode = i1183[0]
  i1182.m_WrapAround = !!i1183[1]
  request.r(i1183[2], i1183[3], 0, i1182, 'm_SelectOnUp')
  request.r(i1183[4], i1183[5], 0, i1182, 'm_SelectOnDown')
  request.r(i1183[6], i1183[7], 0, i1182, 'm_SelectOnLeft')
  request.r(i1183[8], i1183[9], 0, i1182, 'm_SelectOnRight')
  return i1182
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1184 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1185 = data
  i1184.m_NormalColor = new pc.Color(i1185[0], i1185[1], i1185[2], i1185[3])
  i1184.m_HighlightedColor = new pc.Color(i1185[4], i1185[5], i1185[6], i1185[7])
  i1184.m_PressedColor = new pc.Color(i1185[8], i1185[9], i1185[10], i1185[11])
  i1184.m_SelectedColor = new pc.Color(i1185[12], i1185[13], i1185[14], i1185[15])
  i1184.m_DisabledColor = new pc.Color(i1185[16], i1185[17], i1185[18], i1185[19])
  i1184.m_ColorMultiplier = i1185[20]
  i1184.m_FadeDuration = i1185[21]
  return i1184
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1186 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1187 = data
  request.r(i1187[0], i1187[1], 0, i1186, 'm_HighlightedSprite')
  request.r(i1187[2], i1187[3], 0, i1186, 'm_PressedSprite')
  request.r(i1187[4], i1187[5], 0, i1186, 'm_SelectedSprite')
  request.r(i1187[6], i1187[7], 0, i1186, 'm_DisabledSprite')
  return i1186
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1188 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1189 = data
  i1188.m_NormalTrigger = i1189[0]
  i1188.m_HighlightedTrigger = i1189[1]
  i1188.m_PressedTrigger = i1189[2]
  i1188.m_SelectedTrigger = i1189[3]
  i1188.m_DisabledTrigger = i1189[4]
  return i1188
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i1190 = root || request.c( 'PlayableHudRuntime' )
  var i1191 = data
  return i1190
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1192 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1193 = data
  request.r(i1193[0], i1193[1], 0, i1192, 'm_FirstSelected')
  i1192.m_sendNavigationEvents = !!i1193[2]
  i1192.m_DragThreshold = i1193[3]
  return i1192
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1194 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1195 = data
  i1194.m_HorizontalAxis = i1195[0]
  i1194.m_VerticalAxis = i1195[1]
  i1194.m_SubmitButton = i1195[2]
  i1194.m_CancelButton = i1195[3]
  i1194.m_InputActionsPerSecond = i1195[4]
  i1194.m_RepeatDelay = i1195[5]
  i1194.m_ForceModuleActive = !!i1195[6]
  i1194.m_SendPointerHoverToParent = !!i1195[7]
  return i1194
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i1196 = root || request.c( 'PlayableRouter' )
  var i1197 = data
  var i1199 = i1197[0]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 2) {
  request.r(i1199[i + 0], i1199[i + 1], 2, i1198, '')
  }
  i1196.menuObjects = i1198
  var i1201 = i1197[1]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 2) {
  request.r(i1201[i + 0], i1201[i + 1], 2, i1200, '')
  }
  i1196.gameplayObjects = i1200
  var i1203 = i1197[2]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( request.d('PlayableRouter+SubLevelSlot', i1203[i + 0]) );
  }
  i1196.subLevels = i1202
  i1196.fadeDuration = i1197[3]
  i1196.lockedMessage = i1197[4]
  i1196.lockedTapsToCTA = i1197[5]
  return i1196
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i1206 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i1207 = data
  request.r(i1207[0], i1207[1], 0, i1206, 'button')
  request.r(i1207[2], i1207[3], 0, i1206, 'level')
  return i1206
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i1208 = root || request.c( 'ToastManager' )
  var i1209 = data
  request.r(i1209[0], i1209[1], 0, i1208, 'toastPanel')
  request.r(i1209[2], i1209[3], 0, i1208, 'toastPopup')
  request.r(i1209[4], i1209[5], 0, i1208, 'canvasGroup')
  request.r(i1209[6], i1209[7], 0, i1208, 'toastText')
  i1208.startY = i1209[8]
  i1208.visibleY = i1209[9]
  i1208.endY = i1209[10]
  i1208.animationTime = i1209[11]
  i1208.animationTimeUp = i1209[12]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1211 = data
  i1210.m_Alpha = i1211[0]
  i1210.m_Interactable = !!i1211[1]
  i1210.m_BlocksRaycasts = !!i1211[2]
  i1210.m_IgnoreParentGroups = !!i1211[3]
  i1210.enabled = !!i1211[4]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1213 = data
  i1212.ambientIntensity = i1213[0]
  i1212.reflectionIntensity = i1213[1]
  i1212.ambientMode = i1213[2]
  i1212.ambientLight = new pc.Color(i1213[3], i1213[4], i1213[5], i1213[6])
  i1212.ambientSkyColor = new pc.Color(i1213[7], i1213[8], i1213[9], i1213[10])
  i1212.ambientGroundColor = new pc.Color(i1213[11], i1213[12], i1213[13], i1213[14])
  i1212.ambientEquatorColor = new pc.Color(i1213[15], i1213[16], i1213[17], i1213[18])
  i1212.fogColor = new pc.Color(i1213[19], i1213[20], i1213[21], i1213[22])
  i1212.fogEndDistance = i1213[23]
  i1212.fogStartDistance = i1213[24]
  i1212.fogDensity = i1213[25]
  i1212.fog = !!i1213[26]
  request.r(i1213[27], i1213[28], 0, i1212, 'skybox')
  i1212.fogMode = i1213[29]
  var i1215 = i1213[30]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1215[i + 0]) );
  }
  i1212.lightmaps = i1214
  i1212.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1213[31], i1212.lightProbes)
  i1212.lightmapsMode = i1213[32]
  i1212.mixedBakeMode = i1213[33]
  i1212.environmentLightingMode = i1213[34]
  i1212.ambientProbe = new pc.SphericalHarmonicsL2(i1213[35])
  request.r(i1213[36], i1213[37], 0, i1212, 'customReflection')
  request.r(i1213[38], i1213[39], 0, i1212, 'defaultReflection')
  i1212.defaultReflectionMode = i1213[40]
  i1212.defaultReflectionResolution = i1213[41]
  i1212.sunLightObjectId = i1213[42]
  i1212.pixelLightCount = i1213[43]
  i1212.defaultReflectionHDR = !!i1213[44]
  i1212.hasLightDataAsset = !!i1213[45]
  i1212.hasManualGenerate = !!i1213[46]
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1219 = data
  request.r(i1219[0], i1219[1], 0, i1218, 'lightmapColor')
  request.r(i1219[2], i1219[3], 0, i1218, 'lightmapDirection')
  request.r(i1219[4], i1219[5], 0, i1218, 'shadowMask')
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1220 = root || new UnityEngine.LightProbes()
  var i1221 = data
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1227 = data
  var i1229 = i1227[0]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1229[i + 0]));
  }
  i1226.ShaderCompilationErrors = i1228
  i1226.name = i1227[1]
  i1226.guid = i1227[2]
  var i1231 = i1227[3]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( i1231[i + 0] );
  }
  i1226.shaderDefinedKeywords = i1230
  var i1233 = i1227[4]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1233[i + 0]) );
  }
  i1226.passes = i1232
  var i1235 = i1227[5]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1235[i + 0]) );
  }
  i1226.usePasses = i1234
  var i1237 = i1227[6]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1237[i + 0]) );
  }
  i1226.defaultParameterValues = i1236
  request.r(i1227[7], i1227[8], 0, i1226, 'unityFallbackShader')
  i1226.readDepth = !!i1227[9]
  i1226.hasDepthOnlyPass = !!i1227[10]
  i1226.isCreatedByShaderGraph = !!i1227[11]
  i1226.disableBatching = !!i1227[12]
  i1226.compiled = !!i1227[13]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1241 = data
  i1240.shaderName = i1241[0]
  i1240.errorMessage = i1241[1]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1246 = root || new pc.UnityShaderPass()
  var i1247 = data
  i1246.id = i1247[0]
  i1246.subShaderIndex = i1247[1]
  i1246.name = i1247[2]
  i1246.passType = i1247[3]
  i1246.grabPassTextureName = i1247[4]
  i1246.usePass = !!i1247[5]
  i1246.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1247[6], i1246.zTest)
  i1246.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1247[7], i1246.zWrite)
  i1246.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1247[8], i1246.culling)
  i1246.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1247[9], i1246.blending)
  i1246.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1247[10], i1246.alphaBlending)
  i1246.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1247[11], i1246.colorWriteMask)
  i1246.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1247[12], i1246.offsetUnits)
  i1246.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1247[13], i1246.offsetFactor)
  i1246.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1247[14], i1246.stencilRef)
  i1246.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1247[15], i1246.stencilReadMask)
  i1246.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1247[16], i1246.stencilWriteMask)
  i1246.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1247[17], i1246.stencilOp)
  i1246.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1247[18], i1246.stencilOpFront)
  i1246.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1247[19], i1246.stencilOpBack)
  var i1249 = i1247[20]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1249[i + 0]) );
  }
  i1246.tags = i1248
  var i1251 = i1247[21]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( i1251[i + 0] );
  }
  i1246.passDefinedKeywords = i1250
  var i1253 = i1247[22]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1253[i + 0]) );
  }
  i1246.passDefinedKeywordGroups = i1252
  var i1255 = i1247[23]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1255[i + 0]) );
  }
  i1246.variants = i1254
  var i1257 = i1247[24]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1257[i + 0]) );
  }
  i1246.excludedVariants = i1256
  i1246.hasDepthReader = !!i1247[25]
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1259 = data
  i1258.val = i1259[0]
  i1258.name = i1259[1]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1261 = data
  i1260.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1261[0], i1260.src)
  i1260.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1261[1], i1260.dst)
  i1260.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1261[2], i1260.op)
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1263 = data
  i1262.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1263[0], i1262.pass)
  i1262.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1263[1], i1262.fail)
  i1262.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1263[2], i1262.zFail)
  i1262.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1263[3], i1262.comp)
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1267 = data
  i1266.name = i1267[0]
  i1266.value = i1267[1]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1271 = data
  var i1273 = i1271[0]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( i1273[i + 0] );
  }
  i1270.keywords = i1272
  i1270.hasDiscard = !!i1271[1]
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1277 = data
  i1276.passId = i1277[0]
  i1276.subShaderIndex = i1277[1]
  var i1279 = i1277[2]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.push( i1279[i + 0] );
  }
  i1276.keywords = i1278
  i1276.vertexProgram = i1277[3]
  i1276.fragmentProgram = i1277[4]
  i1276.exportedForWebGl2 = !!i1277[5]
  i1276.readDepth = !!i1277[6]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1283 = data
  request.r(i1283[0], i1283[1], 0, i1282, 'shader')
  i1282.pass = i1283[2]
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1287 = data
  i1286.name = i1287[0]
  i1286.type = i1287[1]
  i1286.value = new pc.Vec4( i1287[2], i1287[3], i1287[4], i1287[5] )
  i1286.textureValue = i1287[6]
  i1286.shaderPropertyFlag = i1287[7]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1289 = data
  i1288.name = i1289[0]
  request.r(i1289[1], i1289[2], 0, i1288, 'texture')
  i1288.aabb = i1289[3]
  i1288.vertices = i1289[4]
  i1288.triangles = i1289[5]
  i1288.textureRect = UnityEngine.Rect.MinMaxRect(i1289[6], i1289[7], i1289[8], i1289[9])
  i1288.packedRect = UnityEngine.Rect.MinMaxRect(i1289[10], i1289[11], i1289[12], i1289[13])
  i1288.border = new pc.Vec4( i1289[14], i1289[15], i1289[16], i1289[17] )
  i1288.transparency = i1289[18]
  i1288.bounds = i1289[19]
  i1288.pixelsPerUnit = i1289[20]
  i1288.textureWidth = i1289[21]
  i1288.textureHeight = i1289[22]
  i1288.nativeSize = new pc.Vec2( i1289[23], i1289[24] )
  i1288.pivot = new pc.Vec2( i1289[25], i1289[26] )
  i1288.textureRectOffset = new pc.Vec2( i1289[27], i1289[28] )
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1291 = data
  i1290.name = i1291[0]
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1293 = data
  i1292.name = i1293[0]
  i1292.wrapMode = i1293[1]
  i1292.isLooping = !!i1293[2]
  i1292.length = i1293[3]
  var i1295 = i1293[4]
  var i1294 = []
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1295[i + 0]) );
  }
  i1292.curves = i1294
  var i1297 = i1293[5]
  var i1296 = []
  for(var i = 0; i < i1297.length; i += 1) {
    i1296.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1297[i + 0]) );
  }
  i1292.events = i1296
  i1292.halfPrecision = !!i1293[6]
  i1292._frameRate = i1293[7]
  i1292.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1293[8], i1292.localBounds)
  i1292.hasMuscleCurves = !!i1293[9]
  var i1299 = i1293[10]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( i1299[i + 0] );
  }
  i1292.clipMuscleConstant = i1298
  i1292.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1293[11], i1292.clipBindingConstant)
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1303 = data
  i1302.path = i1303[0]
  i1302.hash = i1303[1]
  i1302.componentType = i1303[2]
  i1302.property = i1303[3]
  i1302.keys = i1303[4]
  var i1305 = i1303[5]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1305[i + 0]) );
  }
  i1302.objectReferenceKeys = i1304
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1309 = data
  i1308.time = i1309[0]
  request.r(i1309[1], i1309[2], 0, i1308, 'value')
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1313 = data
  i1312.functionName = i1313[0]
  i1312.floatParameter = i1313[1]
  i1312.intParameter = i1313[2]
  i1312.stringParameter = i1313[3]
  request.r(i1313[4], i1313[5], 0, i1312, 'objectReferenceParameter')
  i1312.time = i1313[6]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1315 = data
  i1314.center = new pc.Vec3( i1315[0], i1315[1], i1315[2] )
  i1314.extends = new pc.Vec3( i1315[3], i1315[4], i1315[5] )
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1319 = data
  var i1321 = i1319[0]
  var i1320 = []
  for(var i = 0; i < i1321.length; i += 1) {
    i1320.push( i1321[i + 0] );
  }
  i1318.genericBindings = i1320
  var i1323 = i1319[1]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( i1323[i + 0] );
  }
  i1318.pptrCurveMapping = i1322
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1325 = data
  i1324.name = i1325[0]
  i1324.ascent = i1325[1]
  i1324.originalLineHeight = i1325[2]
  i1324.fontSize = i1325[3]
  var i1327 = i1325[4]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1327[i + 0]) );
  }
  i1324.characterInfo = i1326
  request.r(i1325[5], i1325[6], 0, i1324, 'texture')
  i1324.originalFontSize = i1325[7]
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1331 = data
  i1330.index = i1331[0]
  i1330.advance = i1331[1]
  i1330.bearing = i1331[2]
  i1330.glyphWidth = i1331[3]
  i1330.glyphHeight = i1331[4]
  i1330.minX = i1331[5]
  i1330.maxX = i1331[6]
  i1330.minY = i1331[7]
  i1330.maxY = i1331[8]
  i1330.uvBottomLeftX = i1331[9]
  i1330.uvBottomLeftY = i1331[10]
  i1330.uvBottomRightX = i1331[11]
  i1330.uvBottomRightY = i1331[12]
  i1330.uvTopLeftX = i1331[13]
  i1330.uvTopLeftY = i1331[14]
  i1330.uvTopRightX = i1331[15]
  i1330.uvTopRightY = i1331[16]
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1333 = data
  i1332.name = i1333[0]
  var i1335 = i1333[1]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1335[i + 0]) );
  }
  i1332.layers = i1334
  var i1337 = i1333[2]
  var i1336 = []
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1337[i + 0]) );
  }
  i1332.parameters = i1336
  i1332.animationClips = i1333[3]
  i1332.avatarUnsupported = i1333[4]
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1341 = data
  i1340.name = i1341[0]
  i1340.defaultWeight = i1341[1]
  i1340.blendingMode = i1341[2]
  i1340.avatarMask = i1341[3]
  i1340.syncedLayerIndex = i1341[4]
  i1340.syncedLayerAffectsTiming = !!i1341[5]
  i1340.syncedLayers = i1341[6]
  i1340.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1341[7], i1340.stateMachine)
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1343 = data
  i1342.id = i1343[0]
  i1342.name = i1343[1]
  i1342.path = i1343[2]
  var i1345 = i1343[3]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1345[i + 0]) );
  }
  i1342.states = i1344
  var i1347 = i1343[4]
  var i1346 = []
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1347[i + 0]) );
  }
  i1342.machines = i1346
  var i1349 = i1343[5]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1349[i + 0]) );
  }
  i1342.entryStateTransitions = i1348
  var i1351 = i1343[6]
  var i1350 = []
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1351[i + 0]) );
  }
  i1342.exitStateTransitions = i1350
  var i1353 = i1343[7]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1353[i + 0]) );
  }
  i1342.anyStateTransitions = i1352
  i1342.defaultStateId = i1343[8]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1357 = data
  i1356.id = i1357[0]
  i1356.name = i1357[1]
  i1356.cycleOffset = i1357[2]
  i1356.cycleOffsetParameter = i1357[3]
  i1356.cycleOffsetParameterActive = !!i1357[4]
  i1356.mirror = !!i1357[5]
  i1356.mirrorParameter = i1357[6]
  i1356.mirrorParameterActive = !!i1357[7]
  i1356.motionId = i1357[8]
  i1356.nameHash = i1357[9]
  i1356.fullPathHash = i1357[10]
  i1356.speed = i1357[11]
  i1356.speedParameter = i1357[12]
  i1356.speedParameterActive = !!i1357[13]
  i1356.tag = i1357[14]
  i1356.tagHash = i1357[15]
  i1356.writeDefaultValues = !!i1357[16]
  var i1359 = i1357[17]
  var i1358 = []
  for(var i = 0; i < i1359.length; i += 2) {
  request.r(i1359[i + 0], i1359[i + 1], 2, i1358, '')
  }
  i1356.behaviours = i1358
  var i1361 = i1357[18]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1361[i + 0]) );
  }
  i1356.transitions = i1360
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1367 = data
  i1366.fullPath = i1367[0]
  i1366.canTransitionToSelf = !!i1367[1]
  i1366.duration = i1367[2]
  i1366.exitTime = i1367[3]
  i1366.hasExitTime = !!i1367[4]
  i1366.hasFixedDuration = !!i1367[5]
  i1366.interruptionSource = i1367[6]
  i1366.offset = i1367[7]
  i1366.orderedInterruption = !!i1367[8]
  i1366.destinationStateId = i1367[9]
  i1366.isExit = !!i1367[10]
  i1366.mute = !!i1367[11]
  i1366.solo = !!i1367[12]
  var i1369 = i1367[13]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1369[i + 0]) );
  }
  i1366.conditions = i1368
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1375 = data
  i1374.destinationStateId = i1375[0]
  i1374.isExit = !!i1375[1]
  i1374.mute = !!i1375[2]
  i1374.solo = !!i1375[3]
  var i1377 = i1375[4]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1377[i + 0]) );
  }
  i1374.conditions = i1376
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1381 = data
  i1380.mode = i1381[0]
  i1380.parameter = i1381[1]
  i1380.threshold = i1381[2]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1385 = data
  i1384.defaultBool = !!i1385[0]
  i1384.defaultFloat = i1385[1]
  i1384.defaultInt = i1385[2]
  i1384.name = i1385[3]
  i1384.nameHash = i1385[4]
  i1384.type = i1385[5]
  return i1384
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1386 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1387 = data
  i1386.useSafeMode = !!i1387[0]
  i1386.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1387[1], i1386.safeModeOptions)
  i1386.timeScale = i1387[2]
  i1386.unscaledTimeScale = i1387[3]
  i1386.useSmoothDeltaTime = !!i1387[4]
  i1386.maxSmoothUnscaledTime = i1387[5]
  i1386.rewindCallbackMode = i1387[6]
  i1386.showUnityEditorReport = !!i1387[7]
  i1386.logBehaviour = i1387[8]
  i1386.drawGizmos = !!i1387[9]
  i1386.defaultRecyclable = !!i1387[10]
  i1386.defaultAutoPlay = i1387[11]
  i1386.defaultUpdateType = i1387[12]
  i1386.defaultTimeScaleIndependent = !!i1387[13]
  i1386.defaultEaseType = i1387[14]
  i1386.defaultEaseOvershootOrAmplitude = i1387[15]
  i1386.defaultEasePeriod = i1387[16]
  i1386.defaultAutoKill = !!i1387[17]
  i1386.defaultLoopType = i1387[18]
  i1386.debugMode = !!i1387[19]
  i1386.debugStoreTargetId = !!i1387[20]
  i1386.showPreviewPanel = !!i1387[21]
  i1386.storeSettingsLocation = i1387[22]
  i1386.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1387[23], i1386.modules)
  i1386.createASMDEF = !!i1387[24]
  i1386.showPlayingTweens = !!i1387[25]
  i1386.showPausedTweens = !!i1387[26]
  return i1386
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1388 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1389 = data
  i1388.logBehaviour = i1389[0]
  i1388.nestedTweenFailureBehaviour = i1389[1]
  return i1388
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1390 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1391 = data
  i1390.showPanel = !!i1391[0]
  i1390.audioEnabled = !!i1391[1]
  i1390.physicsEnabled = !!i1391[2]
  i1390.physics2DEnabled = !!i1391[3]
  i1390.spriteEnabled = !!i1391[4]
  i1390.uiEnabled = !!i1391[5]
  i1390.textMeshProEnabled = !!i1391[6]
  i1390.tk2DEnabled = !!i1391[7]
  i1390.deAudioEnabled = !!i1391[8]
  i1390.deUnityExtendedEnabled = !!i1391[9]
  i1390.epoOutlineEnabled = !!i1391[10]
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1393 = data
  var i1395 = i1393[0]
  var i1394 = []
  for(var i = 0; i < i1395.length; i += 1) {
    i1394.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1395[i + 0]) );
  }
  i1392.files = i1394
  i1392.componentToPrefabIds = i1393[1]
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1399 = data
  i1398.path = i1399[0]
  request.r(i1399[1], i1399[2], 0, i1398, 'unityObject')
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1401 = data
  var i1403 = i1401[0]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1403[i + 0]) );
  }
  i1400.scriptsExecutionOrder = i1402
  var i1405 = i1401[1]
  var i1404 = []
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1405[i + 0]) );
  }
  i1400.sortingLayers = i1404
  var i1407 = i1401[2]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1407[i + 0]) );
  }
  i1400.cullingLayers = i1406
  i1400.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1401[3], i1400.timeSettings)
  i1400.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1401[4], i1400.physicsSettings)
  i1400.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1401[5], i1400.physics2DSettings)
  i1400.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1401[6], i1400.qualitySettings)
  i1400.enableRealtimeShadows = !!i1401[7]
  i1400.enableAutoInstancing = !!i1401[8]
  i1400.enableStaticBatching = !!i1401[9]
  i1400.enableDynamicBatching = !!i1401[10]
  i1400.usePreservativeDynamicBatching = !!i1401[11]
  i1400.lightmapEncodingQuality = i1401[12]
  i1400.desiredColorSpace = i1401[13]
  var i1409 = i1401[14]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.push( i1409[i + 0] );
  }
  i1400.allTags = i1408
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1413 = data
  i1412.name = i1413[0]
  i1412.value = i1413[1]
  return i1412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1417 = data
  i1416.id = i1417[0]
  i1416.name = i1417[1]
  i1416.value = i1417[2]
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1421 = data
  i1420.id = i1421[0]
  i1420.name = i1421[1]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1423 = data
  i1422.fixedDeltaTime = i1423[0]
  i1422.maximumDeltaTime = i1423[1]
  i1422.timeScale = i1423[2]
  i1422.maximumParticleTimestep = i1423[3]
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1425 = data
  i1424.gravity = new pc.Vec3( i1425[0], i1425[1], i1425[2] )
  i1424.defaultSolverIterations = i1425[3]
  i1424.bounceThreshold = i1425[4]
  i1424.autoSyncTransforms = !!i1425[5]
  i1424.autoSimulation = !!i1425[6]
  var i1427 = i1425[7]
  var i1426 = []
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1427[i + 0]) );
  }
  i1424.collisionMatrix = i1426
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1431 = data
  i1430.enabled = !!i1431[0]
  i1430.layerId = i1431[1]
  i1430.otherLayerId = i1431[2]
  return i1430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1433 = data
  request.r(i1433[0], i1433[1], 0, i1432, 'material')
  i1432.gravity = new pc.Vec2( i1433[2], i1433[3] )
  i1432.positionIterations = i1433[4]
  i1432.velocityIterations = i1433[5]
  i1432.velocityThreshold = i1433[6]
  i1432.maxLinearCorrection = i1433[7]
  i1432.maxAngularCorrection = i1433[8]
  i1432.maxTranslationSpeed = i1433[9]
  i1432.maxRotationSpeed = i1433[10]
  i1432.baumgarteScale = i1433[11]
  i1432.baumgarteTOIScale = i1433[12]
  i1432.timeToSleep = i1433[13]
  i1432.linearSleepTolerance = i1433[14]
  i1432.angularSleepTolerance = i1433[15]
  i1432.defaultContactOffset = i1433[16]
  i1432.autoSimulation = !!i1433[17]
  i1432.queriesHitTriggers = !!i1433[18]
  i1432.queriesStartInColliders = !!i1433[19]
  i1432.callbacksOnDisable = !!i1433[20]
  i1432.reuseCollisionCallbacks = !!i1433[21]
  i1432.autoSyncTransforms = !!i1433[22]
  var i1435 = i1433[23]
  var i1434 = []
  for(var i = 0; i < i1435.length; i += 1) {
    i1434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1435[i + 0]) );
  }
  i1432.collisionMatrix = i1434
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1439 = data
  i1438.enabled = !!i1439[0]
  i1438.layerId = i1439[1]
  i1438.otherLayerId = i1439[2]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1441 = data
  var i1443 = i1441[0]
  var i1442 = []
  for(var i = 0; i < i1443.length; i += 1) {
    i1442.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1443[i + 0]) );
  }
  i1440.qualityLevels = i1442
  var i1445 = i1441[1]
  var i1444 = []
  for(var i = 0; i < i1445.length; i += 1) {
    i1444.push( i1445[i + 0] );
  }
  i1440.names = i1444
  i1440.shadows = i1441[2]
  i1440.anisotropicFiltering = i1441[3]
  i1440.antiAliasing = i1441[4]
  i1440.lodBias = i1441[5]
  i1440.shadowCascades = i1441[6]
  i1440.shadowDistance = i1441[7]
  i1440.shadowmaskMode = i1441[8]
  i1440.shadowProjection = i1441[9]
  i1440.shadowResolution = i1441[10]
  i1440.softParticles = !!i1441[11]
  i1440.softVegetation = !!i1441[12]
  i1440.activeColorSpace = i1441[13]
  i1440.desiredColorSpace = i1441[14]
  i1440.masterTextureLimit = i1441[15]
  i1440.maxQueuedFrames = i1441[16]
  i1440.particleRaycastBudget = i1441[17]
  i1440.pixelLightCount = i1441[18]
  i1440.realtimeReflectionProbes = !!i1441[19]
  i1440.shadowCascade2Split = i1441[20]
  i1440.shadowCascade4Split = new pc.Vec3( i1441[21], i1441[22], i1441[23] )
  i1440.streamingMipmapsActive = !!i1441[24]
  i1440.vSyncCount = i1441[25]
  i1440.asyncUploadBufferSize = i1441[26]
  i1440.asyncUploadTimeSlice = i1441[27]
  i1440.billboardsFaceCameraPosition = !!i1441[28]
  i1440.shadowNearPlaneOffset = i1441[29]
  i1440.streamingMipmapsMemoryBudget = i1441[30]
  i1440.maximumLODLevel = i1441[31]
  i1440.streamingMipmapsAddAllCameras = !!i1441[32]
  i1440.streamingMipmapsMaxLevelReduction = i1441[33]
  i1440.streamingMipmapsRenderersPerFrame = i1441[34]
  i1440.resolutionScalingFixedDPIFactor = i1441[35]
  i1440.streamingMipmapsMaxFileIORequests = i1441[36]
  i1440.currentQualityLevel = i1441[37]
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i1449 = data
  var i1451 = i1449[0]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i1451[i + 0]) );
  }
  i1448.groups = i1450
  var i1453 = i1449[1]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i1453[i + 0]) );
  }
  i1448.snapshots = i1452
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i1456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i1457 = data
  i1456.id = i1457[0]
  i1456.childGroupIds = i1457[1]
  i1456.name = i1457[2]
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i1461 = data
  i1460.id = i1461[0]
  var i1463 = i1461[1]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i1463[i + 0]) );
  }
  i1460.parameters = i1462
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i1467 = data
  i1466.name = i1467[0]
  i1466.value = i1467[1]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1471 = data
  i1470.weight = i1471[0]
  i1470.vertices = i1471[1]
  i1470.normals = i1471[2]
  i1470.tangents = i1471[3]
  return i1470
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[85],"86":[52],"87":[88],"89":[88],"90":[88],"91":[88],"92":[88],"93":[88],"94":[88],"95":[46],"96":[46],"97":[46],"98":[46],"99":[46],"100":[46],"101":[46],"102":[46],"103":[46],"104":[46],"105":[46],"106":[46],"107":[46],"108":[52],"109":[110],"111":[112],"113":[112],"63":[57],"114":[41],"115":[15],"116":[11],"117":[15],"118":[119],"120":[119],"121":[10],"21":[11],"122":[15],"19":[15],"123":[57],"124":[57],"66":[63],"58":[67,57],"125":[57],"65":[63],"126":[57],"127":[57],"128":[57],"129":[57],"130":[57],"131":[57],"132":[57],"133":[57],"134":[57],"135":[67,57],"136":[57],"137":[57],"138":[57],"139":[57],"59":[67,57],"140":[57],"141":[71],"142":[71],"72":[71],"143":[71],"144":[52],"145":[52]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","MenuLevel","UnityEngine.GameObject","DG.Tweening.DOTweenAnimation","UnityEngine.BoxCollider2D","UnityEngine.AudioClip","IntroLevelAnim","Level_PoseController","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.U2D.Animation.SpriteSkin","BD_AnimationHelper","SpriteButton","PlayableRouter","UnityEngine.TrailRenderer","Level1_Face_Playable","InteractableBones","UnityEngine.AudioSource","BasicDrag","BD_CameraFollow","BD_ToolRotate","DraggableObject","DO_CameraFollow","ScratchCardAsset.ScratchCard","BD_Progress","ScratchCardAsset.ScratchCardManager","PlayableCTA","ScratchCardAsset.EraseProgress","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.CircleCollider2D","UnityEngine.LineRenderer","TextureOffsetScroller","Lvl1_EyeOpenClose","Lvl1_EyeOpenClose_Shampoo","BD_AnimatorDrag","UnityEngine.Rigidbody2D","ActionOnTap","BD_ProgressHelper","BD_Clamp","Lvl1_Face_AddPrimer","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "12.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "1Sept2026_CompleteLevel_1_3_v1";

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

Deserializers.buildID = "4c3030da-769a-450d-810e-0507cc2277de";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

