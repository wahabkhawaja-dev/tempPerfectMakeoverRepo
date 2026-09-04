var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.JointSpring' )
  var i643 = data
  i642.spring = i643[0]
  i642.damper = i643[1]
  i642.targetPosition = i643[2]
  return i642
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.JointMotor' )
  var i645 = data
  i644.m_TargetVelocity = i645[0]
  i644.m_Force = i645[1]
  i644.m_FreeSpin = i645[2]
  return i644
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.JointLimits' )
  var i647 = data
  i646.m_Min = i647[0]
  i646.m_Max = i647[1]
  i646.m_Bounciness = i647[2]
  i646.m_BounceMinVelocity = i647[3]
  i646.m_ContactDistance = i647[4]
  i646.minBounce = i647[5]
  i646.maxBounce = i647[6]
  return i646
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.JointDrive' )
  var i649 = data
  i648.m_PositionSpring = i649[0]
  i648.m_PositionDamper = i649[1]
  i648.m_MaximumForce = i649[2]
  i648.m_UseAcceleration = i649[3]
  return i648
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i651 = data
  i650.m_Spring = i651[0]
  i650.m_Damper = i651[1]
  return i650
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i653 = data
  i652.m_Limit = i653[0]
  i652.m_Bounciness = i653[1]
  i652.m_ContactDistance = i653[2]
  return i652
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i655 = data
  i654.m_ExtremumSlip = i655[0]
  i654.m_ExtremumValue = i655[1]
  i654.m_AsymptoteSlip = i655[2]
  i654.m_AsymptoteValue = i655[3]
  i654.m_Stiffness = i655[4]
  return i654
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i657 = data
  i656.m_LowerAngle = i657[0]
  i656.m_UpperAngle = i657[1]
  return i656
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i659 = data
  i658.m_MotorSpeed = i659[0]
  i658.m_MaximumMotorTorque = i659[1]
  return i658
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i661 = data
  i660.m_DampingRatio = i661[0]
  i660.m_Frequency = i661[1]
  i660.m_Angle = i661[2]
  return i660
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i663 = data
  i662.m_LowerTranslation = i663[0]
  i662.m_UpperTranslation = i663[1]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i664 = root || new pc.UnityMaterial()
  var i665 = data
  i664.name = i665[0]
  request.r(i665[1], i665[2], 0, i664, 'shader')
  i664.renderQueue = i665[3]
  i664.enableInstancing = !!i665[4]
  var i667 = i665[5]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i667[i + 0]) );
  }
  i664.floatParameters = i666
  var i669 = i665[6]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i669[i + 0]) );
  }
  i664.colorParameters = i668
  var i671 = i665[7]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i671[i + 0]) );
  }
  i664.vectorParameters = i670
  var i673 = i665[8]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i673[i + 0]) );
  }
  i664.textureParameters = i672
  var i675 = i665[9]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i675[i + 0]) );
  }
  i664.materialFlags = i674
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i679 = data
  i678.name = i679[0]
  i678.value = i679[1]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i683 = data
  i682.name = i683[0]
  i682.value = new pc.Color(i683[1], i683[2], i683[3], i683[4])
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i687 = data
  i686.name = i687[0]
  i686.value = new pc.Vec4( i687[1], i687[2], i687[3], i687[4] )
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i691 = data
  i690.name = i691[0]
  request.r(i691[1], i691[2], 0, i690, 'value')
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i695 = data
  i694.name = i695[0]
  i694.enabled = !!i695[1]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i697 = data
  i696.name = i697[0]
  i696.width = i697[1]
  i696.height = i697[2]
  i696.mipmapCount = i697[3]
  i696.anisoLevel = i697[4]
  i696.filterMode = i697[5]
  i696.hdr = !!i697[6]
  i696.format = i697[7]
  i696.wrapMode = i697[8]
  i696.alphaIsTransparency = !!i697[9]
  i696.alphaSource = i697[10]
  i696.graphicsFormat = i697[11]
  i696.sRGBTexture = !!i697[12]
  i696.desiredColorSpace = i697[13]
  i696.wrapU = i697[14]
  i696.wrapV = i697[15]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i699 = data
  i698.name = i699[0]
  i698.halfPrecision = !!i699[1]
  i698.useSimplification = !!i699[2]
  i698.useUInt32IndexFormat = !!i699[3]
  i698.vertexCount = i699[4]
  i698.aabb = i699[5]
  var i701 = i699[6]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( !!i701[i + 0] );
  }
  i698.streams = i700
  i698.vertices = i699[7]
  var i703 = i699[8]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i703[i + 0]) );
  }
  i698.subMeshes = i702
  var i705 = i699[9]
  var i704 = []
  for(var i = 0; i < i705.length; i += 16) {
    i704.push( new pc.Mat4().setData(i705[i + 0], i705[i + 1], i705[i + 2], i705[i + 3],  i705[i + 4], i705[i + 5], i705[i + 6], i705[i + 7],  i705[i + 8], i705[i + 9], i705[i + 10], i705[i + 11],  i705[i + 12], i705[i + 13], i705[i + 14], i705[i + 15]) );
  }
  i698.bindposes = i704
  var i707 = i699[10]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i707[i + 0]) );
  }
  i698.blendShapes = i706
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i713 = data
  i712.triangles = i713[0]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i719 = data
  i718.name = i719[0]
  var i721 = i719[1]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i721[i + 0]) );
  }
  i718.frames = i720
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i723 = data
  i722.position = new pc.Vec3( i723[0], i723[1], i723[2] )
  i722.scale = new pc.Vec3( i723[3], i723[4], i723[5] )
  i722.rotation = new pc.Quat(i723[6], i723[7], i723[8], i723[9])
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i725 = data
  i724.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i725[0], i724.main)
  i724.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i725[1], i724.colorBySpeed)
  i724.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i725[2], i724.colorOverLifetime)
  i724.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i725[3], i724.emission)
  i724.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i725[4], i724.rotationBySpeed)
  i724.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i725[5], i724.rotationOverLifetime)
  i724.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i725[6], i724.shape)
  i724.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i725[7], i724.sizeBySpeed)
  i724.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i725[8], i724.sizeOverLifetime)
  i724.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i725[9], i724.textureSheetAnimation)
  i724.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i725[10], i724.velocityOverLifetime)
  i724.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i725[11], i724.noise)
  i724.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i725[12], i724.inheritVelocity)
  i724.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i725[13], i724.forceOverLifetime)
  i724.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i725[14], i724.limitVelocityOverLifetime)
  i724.useAutoRandomSeed = !!i725[15]
  i724.randomSeed = i725[16]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i726 = root || new pc.ParticleSystemMain()
  var i727 = data
  i726.duration = i727[0]
  i726.loop = !!i727[1]
  i726.prewarm = !!i727[2]
  i726.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[3], i726.startDelay)
  i726.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[4], i726.startLifetime)
  i726.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[5], i726.startSpeed)
  i726.startSize3D = !!i727[6]
  i726.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[7], i726.startSizeX)
  i726.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[8], i726.startSizeY)
  i726.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[9], i726.startSizeZ)
  i726.startRotation3D = !!i727[10]
  i726.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[11], i726.startRotationX)
  i726.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[12], i726.startRotationY)
  i726.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[13], i726.startRotationZ)
  i726.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i727[14], i726.startColor)
  i726.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[15], i726.gravityModifier)
  i726.simulationSpace = i727[16]
  request.r(i727[17], i727[18], 0, i726, 'customSimulationSpace')
  i726.simulationSpeed = i727[19]
  i726.useUnscaledTime = !!i727[20]
  i726.scalingMode = i727[21]
  i726.playOnAwake = !!i727[22]
  i726.maxParticles = i727[23]
  i726.emitterVelocityMode = i727[24]
  i726.stopAction = i727[25]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i728 = root || new pc.MinMaxCurve()
  var i729 = data
  i728.mode = i729[0]
  i728.curveMin = new pc.AnimationCurve( { keys_flow: i729[1] } )
  i728.curveMax = new pc.AnimationCurve( { keys_flow: i729[2] } )
  i728.curveMultiplier = i729[3]
  i728.constantMin = i729[4]
  i728.constantMax = i729[5]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i730 = root || new pc.MinMaxGradient()
  var i731 = data
  i730.mode = i731[0]
  i730.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i731[1], i730.gradientMin)
  i730.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i731[2], i730.gradientMax)
  i730.colorMin = new pc.Color(i731[3], i731[4], i731[5], i731[6])
  i730.colorMax = new pc.Color(i731[7], i731[8], i731[9], i731[10])
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i733 = data
  i732.mode = i733[0]
  var i735 = i733[1]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i735[i + 0]) );
  }
  i732.colorKeys = i734
  var i737 = i733[2]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i737[i + 0]) );
  }
  i732.alphaKeys = i736
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i738 = root || new pc.ParticleSystemColorBySpeed()
  var i739 = data
  i738.enabled = !!i739[0]
  i738.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i739[1], i738.color)
  i738.range = new pc.Vec2( i739[2], i739[3] )
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i743 = data
  i742.color = new pc.Color(i743[0], i743[1], i743[2], i743[3])
  i742.time = i743[4]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i747 = data
  i746.alpha = i747[0]
  i746.time = i747[1]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i748 = root || new pc.ParticleSystemColorOverLifetime()
  var i749 = data
  i748.enabled = !!i749[0]
  i748.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i749[1], i748.color)
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i750 = root || new pc.ParticleSystemEmitter()
  var i751 = data
  i750.enabled = !!i751[0]
  i750.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[1], i750.rateOverTime)
  i750.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[2], i750.rateOverDistance)
  var i753 = i751[3]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i753[i + 0]) );
  }
  i750.bursts = i752
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemBurst()
  var i757 = data
  i756.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[0], i756.count)
  i756.cycleCount = i757[1]
  i756.minCount = i757[2]
  i756.maxCount = i757[3]
  i756.repeatInterval = i757[4]
  i756.time = i757[5]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemRotationBySpeed()
  var i759 = data
  i758.enabled = !!i759[0]
  i758.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[1], i758.x)
  i758.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[2], i758.y)
  i758.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[3], i758.z)
  i758.separateAxes = !!i759[4]
  i758.range = new pc.Vec2( i759[5], i759[6] )
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i760 = root || new pc.ParticleSystemRotationOverLifetime()
  var i761 = data
  i760.enabled = !!i761[0]
  i760.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[1], i760.x)
  i760.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[2], i760.y)
  i760.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[3], i760.z)
  i760.separateAxes = !!i761[4]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemShape()
  var i763 = data
  i762.enabled = !!i763[0]
  i762.shapeType = i763[1]
  i762.randomDirectionAmount = i763[2]
  i762.sphericalDirectionAmount = i763[3]
  i762.randomPositionAmount = i763[4]
  i762.alignToDirection = !!i763[5]
  i762.radius = i763[6]
  i762.radiusMode = i763[7]
  i762.radiusSpread = i763[8]
  i762.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[9], i762.radiusSpeed)
  i762.radiusThickness = i763[10]
  i762.angle = i763[11]
  i762.length = i763[12]
  i762.boxThickness = new pc.Vec3( i763[13], i763[14], i763[15] )
  i762.meshShapeType = i763[16]
  request.r(i763[17], i763[18], 0, i762, 'mesh')
  request.r(i763[19], i763[20], 0, i762, 'meshRenderer')
  request.r(i763[21], i763[22], 0, i762, 'skinnedMeshRenderer')
  i762.useMeshMaterialIndex = !!i763[23]
  i762.meshMaterialIndex = i763[24]
  i762.useMeshColors = !!i763[25]
  i762.normalOffset = i763[26]
  i762.arc = i763[27]
  i762.arcMode = i763[28]
  i762.arcSpread = i763[29]
  i762.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[30], i762.arcSpeed)
  i762.donutRadius = i763[31]
  i762.position = new pc.Vec3( i763[32], i763[33], i763[34] )
  i762.rotation = new pc.Vec3( i763[35], i763[36], i763[37] )
  i762.scale = new pc.Vec3( i763[38], i763[39], i763[40] )
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemSizeBySpeed()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[1], i764.x)
  i764.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[2], i764.y)
  i764.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[3], i764.z)
  i764.separateAxes = !!i765[4]
  i764.range = new pc.Vec2( i765[5], i765[6] )
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemSizeOverLifetime()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[1], i766.x)
  i766.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[2], i766.y)
  i766.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[3], i766.z)
  i766.separateAxes = !!i767[4]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.mode = i769[1]
  i768.animation = i769[2]
  i768.numTilesX = i769[3]
  i768.numTilesY = i769[4]
  i768.useRandomRow = !!i769[5]
  i768.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[6], i768.frameOverTime)
  i768.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[7], i768.startFrame)
  i768.cycleCount = i769[8]
  i768.rowIndex = i769[9]
  i768.flipU = i769[10]
  i768.flipV = i769[11]
  i768.spriteCount = i769[12]
  var i771 = i769[13]
  var i770 = []
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 2, i770, '')
  }
  i768.sprites = i770
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i775 = data
  i774.enabled = !!i775[0]
  i774.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[1], i774.x)
  i774.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[2], i774.y)
  i774.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[3], i774.z)
  i774.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[4], i774.radial)
  i774.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[5], i774.speedModifier)
  i774.space = i775[6]
  i774.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[7], i774.orbitalX)
  i774.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[8], i774.orbitalY)
  i774.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[9], i774.orbitalZ)
  i774.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[10], i774.orbitalOffsetX)
  i774.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[11], i774.orbitalOffsetY)
  i774.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[12], i774.orbitalOffsetZ)
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemNoise()
  var i777 = data
  i776.enabled = !!i777[0]
  i776.separateAxes = !!i777[1]
  i776.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[2], i776.strengthX)
  i776.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[3], i776.strengthY)
  i776.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[4], i776.strengthZ)
  i776.frequency = i777[5]
  i776.damping = !!i777[6]
  i776.octaveCount = i777[7]
  i776.octaveMultiplier = i777[8]
  i776.octaveScale = i777[9]
  i776.quality = i777[10]
  i776.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[11], i776.scrollSpeed)
  i776.scrollSpeedMultiplier = i777[12]
  i776.remapEnabled = !!i777[13]
  i776.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[14], i776.remapX)
  i776.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[15], i776.remapY)
  i776.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[16], i776.remapZ)
  i776.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[17], i776.positionAmount)
  i776.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[18], i776.rotationAmount)
  i776.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[19], i776.sizeAmount)
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemInheritVelocity()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.mode = i779[1]
  i778.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[2], i778.curve)
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemForceOverLifetime()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[1], i780.x)
  i780.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[2], i780.y)
  i780.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[3], i780.z)
  i780.space = i781[4]
  i780.randomized = !!i781[5]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[1], i782.limit)
  i782.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[2], i782.limitX)
  i782.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[3], i782.limitY)
  i782.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[4], i782.limitZ)
  i782.dampen = i783[5]
  i782.separateAxes = !!i783[6]
  i782.space = i783[7]
  i782.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[8], i782.drag)
  i782.multiplyDragByParticleSize = !!i783[9]
  i782.multiplyDragByParticleVelocity = !!i783[10]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'mesh')
  i784.meshCount = i785[2]
  i784.activeVertexStreamsCount = i785[3]
  i784.alignment = i785[4]
  i784.renderMode = i785[5]
  i784.sortMode = i785[6]
  i784.lengthScale = i785[7]
  i784.velocityScale = i785[8]
  i784.cameraVelocityScale = i785[9]
  i784.normalDirection = i785[10]
  i784.sortingFudge = i785[11]
  i784.minParticleSize = i785[12]
  i784.maxParticleSize = i785[13]
  i784.pivot = new pc.Vec3( i785[14], i785[15], i785[16] )
  request.r(i785[17], i785[18], 0, i784, 'trailMaterial')
  i784.applyActiveColorSpace = !!i785[19]
  i784.enabled = !!i785[20]
  request.r(i785[21], i785[22], 0, i784, 'sharedMaterial')
  var i787 = i785[23]
  var i786 = []
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 2, i786, '')
  }
  i784.sharedMaterials = i786
  i784.receiveShadows = !!i785[24]
  i784.shadowCastingMode = i785[25]
  i784.sortingLayerID = i785[26]
  i784.sortingOrder = i785[27]
  i784.lightmapIndex = i785[28]
  i784.lightmapSceneIndex = i785[29]
  i784.lightmapScaleOffset = new pc.Vec4( i785[30], i785[31], i785[32], i785[33] )
  i784.lightProbeUsage = i785[34]
  i784.reflectionProbeUsage = i785[35]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i791 = data
  i790.name = i791[0]
  i790.tagId = i791[1]
  i790.enabled = !!i791[2]
  i790.isStatic = !!i791[3]
  i790.layer = i791[4]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i793 = data
  i792.pivot = new pc.Vec2( i793[0], i793[1] )
  i792.anchorMin = new pc.Vec2( i793[2], i793[3] )
  i792.anchorMax = new pc.Vec2( i793[4], i793[5] )
  i792.sizeDelta = new pc.Vec2( i793[6], i793[7] )
  i792.anchoredPosition3D = new pc.Vec3( i793[8], i793[9], i793[10] )
  i792.rotation = new pc.Quat(i793[11], i793[12], i793[13], i793[14])
  i792.scale = new pc.Vec3( i793[15], i793[16], i793[17] )
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i795 = data
  i794.planeDistance = i795[0]
  i794.referencePixelsPerUnit = i795[1]
  i794.isFallbackOverlay = !!i795[2]
  i794.renderMode = i795[3]
  i794.renderOrder = i795[4]
  i794.sortingLayerName = i795[5]
  i794.sortingOrder = i795[6]
  i794.scaleFactor = i795[7]
  request.r(i795[8], i795[9], 0, i794, 'worldCamera')
  i794.overrideSorting = !!i795[10]
  i794.pixelPerfect = !!i795[11]
  i794.targetDisplay = i795[12]
  i794.overridePixelPerfect = !!i795[13]
  i794.enabled = !!i795[14]
  return i794
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i797 = data
  i796.m_UiScaleMode = i797[0]
  i796.m_ReferencePixelsPerUnit = i797[1]
  i796.m_ScaleFactor = i797[2]
  i796.m_ReferenceResolution = new pc.Vec2( i797[3], i797[4] )
  i796.m_ScreenMatchMode = i797[5]
  i796.m_MatchWidthOrHeight = i797[6]
  i796.m_PhysicalUnit = i797[7]
  i796.m_FallbackScreenDPI = i797[8]
  i796.m_DefaultSpriteDPI = i797[9]
  i796.m_DynamicPixelsPerUnit = i797[10]
  i796.m_PresetInfoIsWorld = !!i797[11]
  return i796
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i799 = data
  i798.m_IgnoreReversedGraphics = !!i799[0]
  i798.m_BlockingObjects = i799[1]
  i798.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i799[2] )
  return i798
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i800 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i801 = data
  i800.targetIsSelf = !!i801[0]
  request.r(i801[1], i801[2], 0, i800, 'targetGO')
  i800.tweenTargetIsTargetGO = !!i801[3]
  i800.delay = i801[4]
  i800.duration = i801[5]
  i800.easeType = i801[6]
  i800.easeCurve = new pc.AnimationCurve( { keys_flow: i801[7] } )
  i800.loopType = i801[8]
  i800.loops = i801[9]
  i800.id = i801[10]
  i800.isRelative = !!i801[11]
  i800.isFrom = !!i801[12]
  i800.isIndependentUpdate = !!i801[13]
  i800.autoKill = !!i801[14]
  i800.autoGenerate = !!i801[15]
  i800.isActive = !!i801[16]
  i800.isValid = !!i801[17]
  request.r(i801[18], i801[19], 0, i800, 'target')
  i800.animationType = i801[20]
  i800.targetType = i801[21]
  i800.forcedTargetType = i801[22]
  i800.autoPlay = !!i801[23]
  i800.useTargetAsV3 = !!i801[24]
  i800.endValueFloat = i801[25]
  i800.endValueV3 = new pc.Vec3( i801[26], i801[27], i801[28] )
  i800.endValueV2 = new pc.Vec2( i801[29], i801[30] )
  i800.endValueColor = new pc.Color(i801[31], i801[32], i801[33], i801[34])
  i800.endValueString = i801[35]
  i800.endValueRect = UnityEngine.Rect.MinMaxRect(i801[36], i801[37], i801[38], i801[39])
  request.r(i801[40], i801[41], 0, i800, 'endValueTransform')
  i800.optionalBool0 = !!i801[42]
  i800.optionalBool1 = !!i801[43]
  i800.optionalFloat0 = i801[44]
  i800.optionalInt0 = i801[45]
  i800.optionalRotationMode = i801[46]
  i800.optionalScrambleMode = i801[47]
  i800.optionalShakeRandomnessMode = i801[48]
  i800.optionalString = i801[49]
  i800.updateType = i801[50]
  i800.isSpeedBased = !!i801[51]
  i800.hasOnStart = !!i801[52]
  i800.hasOnPlay = !!i801[53]
  i800.hasOnUpdate = !!i801[54]
  i800.hasOnStepComplete = !!i801[55]
  i800.hasOnComplete = !!i801[56]
  i800.hasOnTweenCreated = !!i801[57]
  i800.hasOnRewind = !!i801[58]
  i800.onStart = request.d('UnityEngine.Events.UnityEvent', i801[59], i800.onStart)
  i800.onPlay = request.d('UnityEngine.Events.UnityEvent', i801[60], i800.onPlay)
  i800.onUpdate = request.d('UnityEngine.Events.UnityEvent', i801[61], i800.onUpdate)
  i800.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i801[62], i800.onStepComplete)
  i800.onComplete = request.d('UnityEngine.Events.UnityEvent', i801[63], i800.onComplete)
  i800.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i801[64], i800.onTweenCreated)
  i800.onRewind = request.d('UnityEngine.Events.UnityEvent', i801[65], i800.onRewind)
  return i800
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i803 = data
  i802.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i803[0], i802.m_PersistentCalls)
  return i802
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i805 = data
  var i807 = i805[0]
  var i806 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i807.length; i += 1) {
    i806.add(request.d('UnityEngine.Events.PersistentCall', i807[i + 0]));
  }
  i804.m_Calls = i806
  return i804
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'm_Target')
  i810.m_TargetAssemblyTypeName = i811[2]
  i810.m_MethodName = i811[3]
  i810.m_Mode = i811[4]
  i810.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i811[5], i810.m_Arguments)
  i810.m_CallState = i811[6]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i813 = data
  i812.cullTransparentMesh = !!i813[0]
  return i812
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.UI.Image' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'm_Sprite')
  i814.m_Type = i815[2]
  i814.m_PreserveAspect = !!i815[3]
  i814.m_FillCenter = !!i815[4]
  i814.m_FillMethod = i815[5]
  i814.m_FillAmount = i815[6]
  i814.m_FillClockwise = !!i815[7]
  i814.m_FillOrigin = i815[8]
  i814.m_UseSpriteMesh = !!i815[9]
  i814.m_PixelsPerUnitMultiplier = i815[10]
  request.r(i815[11], i815[12], 0, i814, 'm_Material')
  i814.m_Maskable = !!i815[13]
  i814.m_Color = new pc.Color(i815[14], i815[15], i815[16], i815[17])
  i814.m_RaycastTarget = !!i815[18]
  i814.m_RaycastPadding = new pc.Vec4( i815[19], i815[20], i815[21], i815[22] )
  return i814
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.UI.Text' )
  var i817 = data
  i816.m_FontData = request.d('UnityEngine.UI.FontData', i817[0], i816.m_FontData)
  i816.m_Text = i817[1]
  request.r(i817[2], i817[3], 0, i816, 'm_Material')
  i816.m_Maskable = !!i817[4]
  i816.m_Color = new pc.Color(i817[5], i817[6], i817[7], i817[8])
  i816.m_RaycastTarget = !!i817[9]
  i816.m_RaycastPadding = new pc.Vec4( i817[10], i817[11], i817[12], i817[13] )
  return i816
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.UI.FontData' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'm_Font')
  i818.m_FontSize = i819[2]
  i818.m_FontStyle = i819[3]
  i818.m_BestFit = !!i819[4]
  i818.m_MinSize = i819[5]
  i818.m_MaxSize = i819[6]
  i818.m_Alignment = i819[7]
  i818.m_AlignByGeometry = !!i819[8]
  i818.m_RichText = !!i819[9]
  i818.m_HorizontalOverflow = i819[10]
  i818.m_VerticalOverflow = i819[11]
  i818.m_LineSpacing = i819[12]
  return i818
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.UI.Button' )
  var i821 = data
  i820.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i821[0], i820.m_OnClick)
  i820.m_Navigation = request.d('UnityEngine.UI.Navigation', i821[1], i820.m_Navigation)
  i820.m_Transition = i821[2]
  i820.m_Colors = request.d('UnityEngine.UI.ColorBlock', i821[3], i820.m_Colors)
  i820.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i821[4], i820.m_SpriteState)
  i820.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i821[5], i820.m_AnimationTriggers)
  i820.m_Interactable = !!i821[6]
  request.r(i821[7], i821[8], 0, i820, 'm_TargetGraphic')
  return i820
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i823 = data
  i822.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i823[0], i822.m_PersistentCalls)
  return i822
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'm_ObjectArgument')
  i824.m_ObjectArgumentAssemblyTypeName = i825[2]
  i824.m_IntArgument = i825[3]
  i824.m_FloatArgument = i825[4]
  i824.m_StringArgument = i825[5]
  i824.m_BoolArgument = !!i825[6]
  return i824
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i827 = data
  i826.m_Mode = i827[0]
  i826.m_WrapAround = !!i827[1]
  request.r(i827[2], i827[3], 0, i826, 'm_SelectOnUp')
  request.r(i827[4], i827[5], 0, i826, 'm_SelectOnDown')
  request.r(i827[6], i827[7], 0, i826, 'm_SelectOnLeft')
  request.r(i827[8], i827[9], 0, i826, 'm_SelectOnRight')
  return i826
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i829 = data
  i828.m_NormalColor = new pc.Color(i829[0], i829[1], i829[2], i829[3])
  i828.m_HighlightedColor = new pc.Color(i829[4], i829[5], i829[6], i829[7])
  i828.m_PressedColor = new pc.Color(i829[8], i829[9], i829[10], i829[11])
  i828.m_SelectedColor = new pc.Color(i829[12], i829[13], i829[14], i829[15])
  i828.m_DisabledColor = new pc.Color(i829[16], i829[17], i829[18], i829[19])
  i828.m_ColorMultiplier = i829[20]
  i828.m_FadeDuration = i829[21]
  return i828
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'm_HighlightedSprite')
  request.r(i831[2], i831[3], 0, i830, 'm_PressedSprite')
  request.r(i831[4], i831[5], 0, i830, 'm_SelectedSprite')
  request.r(i831[6], i831[7], 0, i830, 'm_DisabledSprite')
  return i830
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i833 = data
  i832.m_NormalTrigger = i833[0]
  i832.m_HighlightedTrigger = i833[1]
  i832.m_PressedTrigger = i833[2]
  i832.m_SelectedTrigger = i833[3]
  i832.m_DisabledTrigger = i833[4]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'animatorController')
  request.r(i835[2], i835[3], 0, i834, 'avatar')
  i834.updateMode = i835[4]
  i834.hasTransformHierarchy = !!i835[5]
  i834.applyRootMotion = !!i835[6]
  var i837 = i835[7]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i834.humanBones = i836
  i834.enabled = !!i835[8]
  return i834
}

Deserializers["Level1_Cloth_Playable_Step45"] = function (request, data, root) {
  var i840 = root || request.c( 'Level1_Cloth_Playable_Step45' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'WashingView')
  request.r(i841[2], i841[3], 0, i840, 'WashingTools')
  request.r(i841[4], i841[5], 0, i840, 'DressingView')
  request.r(i841[6], i841[7], 0, i840, 'DressingTools')
  i840.ZoomStep1 = request.d('ZoomPos', i841[8], i840.ZoomStep1)
  request.r(i841[9], i841[10], 0, i840, 'ToolStep1')
  request.r(i841[11], i841[12], 0, i840, 'Basket_Cloth')
  request.r(i841[13], i841[14], 0, i840, 'clothInside')
  request.r(i841[15], i841[16], 0, i840, 'clothRound')
  request.r(i841[17], i841[18], 0, i840, 'machineDoor')
  request.r(i841[19], i841[20], 0, i840, 'machineGlass')
  i840.ZoomStep2 = request.d('ZoomPos', i841[21], i840.ZoomStep2)
  i840.ZoomStep2b = request.d('ZoomPos', i841[22], i840.ZoomStep2b)
  request.r(i841[23], i841[24], 0, i840, 'ToolStep2')
  request.r(i841[25], i841[26], 0, i840, 'ToolStep2CamFollow')
  request.r(i841[27], i841[28], 0, i840, 'drawerObj')
  request.r(i841[29], i841[30], 0, i840, 'surfObj')
  request.r(i841[31], i841[32], 0, i840, 'surfPackTop')
  request.r(i841[33], i841[34], 0, i840, 'handStep2')
  request.r(i841[35], i841[36], 0, i840, 'surfController')
  request.r(i841[37], i841[38], 0, i840, 'clothsInside')
  request.r(i841[39], i841[40], 0, i840, 'clothsInsideGlass')
  request.r(i841[41], i841[42], 0, i840, 'clothsStaticClean')
  request.r(i841[43], i841[44], 0, i840, 'wetCloths')
  request.r(i841[45], i841[46], 0, i840, 'clothCleanInside')
  request.r(i841[47], i841[48], 0, i840, 'clothCleanInsideAnim')
  request.r(i841[49], i841[50], 0, i840, 'waterWave')
  request.r(i841[51], i841[52], 0, i840, 'clothCleanInside2')
  request.r(i841[53], i841[54], 0, i840, 'clothCleanInside2Cam')
  request.r(i841[55], i841[56], 0, i840, 'clothBasketTarget')
  request.r(i841[57], i841[58], 0, i840, 'clothBasketTarget2')
  request.r(i841[59], i841[60], 0, i840, 'waterSplash_Vfx')
  request.r(i841[61], i841[62], 0, i840, 'countDownTimerText')
  i840.countDown = i841[63]
  request.r(i841[64], i841[65], 0, i840, 'machineTimer')
  request.r(i841[66], i841[67], 0, i840, 'machineTimerRotater')
  request.r(i841[68], i841[69], 0, i840, 'machineTimerIndication')
  request.r(i841[70], i841[71], 0, i840, 'darazOpenSfx')
  request.r(i841[72], i841[73], 0, i840, 'darazCloseSfx')
  request.r(i841[74], i841[75], 0, i840, 'doorOpenSfx')
  request.r(i841[76], i841[77], 0, i840, 'machineStartSfx')
  request.r(i841[78], i841[79], 0, i840, 'machineFinishSfx')
  request.r(i841[80], i841[81], 0, i840, 'waterDrainSfx')
  i840.ZoomStep3a = request.d('ZoomPos', i841[82], i840.ZoomStep3a)
  request.r(i841[83], i841[84], 0, i840, 'ToolStep3a')
  request.r(i841[85], i841[86], 0, i840, 'ToolStep3aRend')
  request.r(i841[87], i841[88], 0, i840, 'dressingBasket')
  request.r(i841[89], i841[90], 0, i840, 'dummyFullParent')
  request.r(i841[91], i841[92], 0, i840, 'DressParent')
  i840.ZoomStep3 = request.d('ZoomPos', i841[93], i840.ZoomStep3)
  request.r(i841[94], i841[95], 0, i840, 'ToolStep3')
  request.r(i841[96], i841[97], 0, i840, 'tornPatch')
  request.r(i841[98], i841[99], 0, i840, 'patchCompleted')
  request.r(i841[100], i841[101], 0, i840, 'patchOutline')
  i840.ZoomStep4 = request.d('ZoomPos', i841[102], i840.ZoomStep4)
  request.r(i841[103], i841[104], 0, i840, 'ToolStep4')
  request.r(i841[105], i841[106], 0, i840, 'camFollowStep4')
  request.r(i841[107], i841[108], 0, i840, 'SteamerBottom')
  i840.ZoomStep5 = request.d('ZoomPos', i841[109], i840.ZoomStep5)
  request.r(i841[110], i841[111], 0, i840, 'ToolStep5')
  request.r(i841[112], i841[113], 0, i840, 'ribbonFinalTarget')
  request.r(i841[114], i841[115], 0, i840, 'ribbonFinal')
  request.r(i841[116], i841[117], 0, i840, 'handIndication5')
  i840.levelName = i841[118]
  i840.levelReward = i841[119]
  request.r(i841[120], i841[121], 0, i840, 'LevelIcon')
  request.r(i841[122], i841[123], 0, i840, 'Level_BG')
  var i843 = i841[124]
  var i842 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 1, i842, '')
  }
  i840.ToolIcons = i842
  var i845 = i841[125]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i840.AllDrags = i844
  var i847 = i841[126]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i840.AllSources = i846
  var i849 = i841[127]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i840.AllScratches = i848
  i840.stepsDone = i841[128]
  i840.levelNo = i841[129]
  i840.partNo = i841[130]
  request.r(i841[131], i841[132], 0, i840, 'clothSfx')
  request.r(i841[133], i841[134], 0, i840, 'doorCloseSfx')
  return i840
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i850 = root || request.c( 'ZoomPos' )
  var i851 = data
  i850.CameraPos = new pc.Vec3( i851[0], i851[1], i851[2] )
  i850.CameraFOV = i851[3]
  return i850
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i860 = root || request.c( 'PlayableCTA' )
  var i861 = data
  i860.trigger = i861[0]
  i860.afterSeconds = i861[1]
  i860.afterTaps = i861[2]
  request.r(i861[3], i861[4], 0, i860, 'scratchProgress')
  i860.scratchIndex = i861[5]
  i860.progressThreshold = i861[6]
  request.r(i861[7], i861[8], 0, i860, 'watchedTool')
  i860.blockInputOnFire = !!i861[9]
  i860.refireOnEveryTap = !!i861[10]
  i860.refireDelay = i861[11]
  i860.showEndCard = !!i861[12]
  request.r(i861[13], i861[14], 0, i860, 'endCard')
  i860.endCardDelay = i861[15]
  i860.showEndCardOnProgressTrigger = !!i861[16]
  i860.showEndCardOnToolAppearTrigger = !!i861[17]
  i860.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i861[18], i860.onCtaFired)
  i860.logWhenFired = !!i861[19]
  return i860
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i862 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'MainCamera')
  i862.RenderType = i863[2]
  request.r(i863[3], i863[4], 0, i862, 'ScratchSurfaceSprite')
  i862.ScratchSurfaceSpriteHasAlpha = !!i863[5]
  i862.MaskProgressCutOffValue = i863[6]
  request.r(i863[7], i863[8], 0, i862, 'EraseTexture')
  i862.EraseTextureScale = new pc.Vec2( i863[9], i863[10] )
  i862.InputEnabled = !!i863[11]
  request.r(i863[12], i863[13], 0, i862, 'Card')
  i862.Mode = i863[14]
  request.r(i863[15], i863[16], 0, i862, 'Progress')
  request.r(i863[17], i863[18], 0, i862, 'MeshCard')
  request.r(i863[19], i863[20], 0, i862, 'SpriteCard')
  request.r(i863[21], i863[22], 0, i862, 'ImageCard')
  request.r(i863[23], i863[24], 0, i862, 'MaskShader')
  request.r(i863[25], i863[26], 0, i862, 'BrushShader')
  request.r(i863[27], i863[28], 0, i862, 'MaskProgressShader')
  request.r(i863[29], i863[30], 0, i862, 'MaskProgressCutOffShader')
  return i862
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i864 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'MainCamera')
  request.r(i865[2], i865[3], 0, i864, 'Surface')
  i864.RenderTextureQuality = i865[4]
  request.r(i865[5], i865[6], 0, i864, 'Eraser')
  request.r(i865[7], i865[8], 0, i864, 'Progress')
  request.r(i865[9], i865[10], 0, i864, 'ScratchSurface')
  request.r(i865[11], i865[12], 0, i864, 'RenderTexture')
  i864.BrushScale = new pc.Vec2( i865[13], i865[14] )
  request.r(i865[15], i865[16], 0, i864, 'ToolTip')
  i864.InputEnabled = !!i865[17]
  i864.IsScratching = !!i865[18]
  i864.useChangingScale = !!i865[19]
  i864.useGivenBrushScale = !!i865[20]
  i864.canSpreadMask = !!i865[21]
  i864.shouldPaintHoles = !!i865[22]
  i864.canRotateTip = !!i865[23]
  i864._mode = i865[24]
  return i864
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i866 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'Card')
  i866.currentProgress = i867[2]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i869 = data
  i868.color = new pc.Color(i869[0], i869[1], i869[2], i869[3])
  request.r(i869[4], i869[5], 0, i868, 'sprite')
  i868.flipX = !!i869[6]
  i868.flipY = !!i869[7]
  i868.drawMode = i869[8]
  i868.size = new pc.Vec2( i869[9], i869[10] )
  i868.tileMode = i869[11]
  i868.adaptiveModeThreshold = i869[12]
  i868.maskInteraction = i869[13]
  i868.spriteSortPoint = i869[14]
  i868.enabled = !!i869[15]
  request.r(i869[16], i869[17], 0, i868, 'sharedMaterial')
  var i871 = i869[18]
  var i870 = []
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 2, i870, '')
  }
  i868.sharedMaterials = i870
  i868.receiveShadows = !!i869[19]
  i868.shadowCastingMode = i869[20]
  i868.sortingLayerID = i869[21]
  i868.sortingOrder = i869[22]
  i868.lightmapIndex = i869[23]
  i868.lightmapSceneIndex = i869[24]
  i868.lightmapScaleOffset = new pc.Vec4( i869[25], i869[26], i869[27], i869[28] )
  i868.lightProbeUsage = i869[29]
  i868.reflectionProbeUsage = i869[30]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i873 = data
  var i875 = i873[0]
  var i874 = []
  for(var i = 0; i < i875.length; i += 3) {
    i874.push( new pc.Vec3( i875[i + 0], i875[i + 1], i875[i + 2] ) );
  }
  i872.positions = i874
  i872.positionCount = i873[1]
  i872.time = i873[2]
  i872.startWidth = i873[3]
  i872.endWidth = i873[4]
  i872.widthMultiplier = i873[5]
  i872.autodestruct = !!i873[6]
  i872.emitting = !!i873[7]
  i872.numCornerVertices = i873[8]
  i872.numCapVertices = i873[9]
  i872.minVertexDistance = i873[10]
  i872.colorGradient = i873[11] ? new pc.ColorGradient(i873[11][0], i873[11][1], i873[11][2]) : null
  i872.startColor = new pc.Color(i873[12], i873[13], i873[14], i873[15])
  i872.endColor = new pc.Color(i873[16], i873[17], i873[18], i873[19])
  i872.generateLightingData = !!i873[20]
  i872.textureMode = i873[21]
  i872.alignment = i873[22]
  i872.widthCurve = new pc.AnimationCurve( { keys_flow: i873[23] } )
  i872.enabled = !!i873[24]
  request.r(i873[25], i873[26], 0, i872, 'sharedMaterial')
  var i877 = i873[27]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i872.sharedMaterials = i876
  i872.receiveShadows = !!i873[28]
  i872.shadowCastingMode = i873[29]
  i872.sortingLayerID = i873[30]
  i872.sortingOrder = i873[31]
  i872.lightmapIndex = i873[32]
  i872.lightmapSceneIndex = i873[33]
  i872.lightmapScaleOffset = new pc.Vec4( i873[34], i873[35], i873[36], i873[37] )
  i872.lightProbeUsage = i873[38]
  i872.reflectionProbeUsage = i873[39]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i881 = data
  i880.usedByComposite = !!i881[0]
  i880.autoTiling = !!i881[1]
  i880.size = new pc.Vec2( i881[2], i881[3] )
  i880.edgeRadius = i881[4]
  i880.enabled = !!i881[5]
  i880.isTrigger = !!i881[6]
  i880.usedByEffector = !!i881[7]
  i880.density = i881[8]
  i880.offset = new pc.Vec2( i881[9], i881[10] )
  request.r(i881[11], i881[12], 0, i880, 'material')
  return i880
}

Deserializers["RotaryTimerKnob"] = function (request, data, root) {
  var i882 = root || request.c( 'RotaryTimerKnob' )
  var i883 = data
  i882.canDrag = !!i883[0]
  i882.numSteps = i883[1]
  i882.onlyClockwise = !!i883[2]
  request.r(i883[3], i883[4], 0, i882, 'clickSound')
  i882.enableVibration = !!i883[5]
  request.r(i883[6], i883[7], 0, i882, 'stepText')
  i882.OnComplete = request.d('UnityEngine.Events.UnityEvent', i883[8], i882.OnComplete)
  request.r(i883[9], i883[10], 0, i882, 'handIndication')
  return i882
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'm_RootBone')
  var i887 = i885[2]
  var i886 = []
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 2, i886, '')
  }
  i884.m_BoneTransforms = i886
  i884.m_AlwaysUpdate = !!i885[3]
  i884.m_AutoRebind = !!i885[4]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i889 = data
  i888.frontSortingLayerID = i889[0]
  i888.frontSortingOrder = i889[1]
  i888.backSortingLayerID = i889[2]
  i888.backSortingOrder = i889[3]
  i888.alphaCutoff = i889[4]
  request.r(i889[5], i889[6], 0, i888, 'sprite')
  i888.tileMode = i889[7]
  i888.isCustomRangeActive = !!i889[8]
  i888.spriteSortPoint = i889[9]
  i888.enabled = !!i889[10]
  request.r(i889[11], i889[12], 0, i888, 'sharedMaterial')
  var i891 = i889[13]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i888.sharedMaterials = i890
  i888.receiveShadows = !!i889[14]
  i888.shadowCastingMode = i889[15]
  i888.sortingLayerID = i889[16]
  i888.sortingOrder = i889[17]
  i888.lightmapIndex = i889[18]
  i888.lightmapSceneIndex = i889[19]
  i888.lightmapScaleOffset = new pc.Vec4( i889[20], i889[21], i889[22], i889[23] )
  i888.lightProbeUsage = i889[24]
  i888.reflectionProbeUsage = i889[25]
  return i888
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i892 = root || request.c( 'BasicDrag' )
  var i893 = data
  i892.canDrag = !!i893[0]
  i892.dragByDelta = !!i893[1]
  i892.isDragging = !!i893[2]
  i892.moveWithPointer = !!i893[3]
  i892.canReturn = !!i893[4]
  i892.jumpOnReturn = !!i893[5]
  i892.returnTime = i893[6]
  i892.Tool_Offset = new pc.Vec3( i893[7], i893[8], i893[9] )
  i892.canScaleIncrease = !!i893[10]
  i892.Self_ScaleNew = new pc.Vec3( i893[11], i893[12], i893[13] )
  i892.canRotateOnPick = !!i893[14]
  i892.startRot = new pc.Vec3( i893[15], i893[16], i893[17] )
  i892.newRot = new pc.Vec3( i893[18], i893[19], i893[20] )
  var i895 = i893[21]
  var i894 = []
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 2, i894, '')
  }
  i892.childSprite = i894
  request.r(i893[22], i893[23], 0, i892, 'ToolSelectClip')
  request.r(i893[24], i893[25], 0, i892, 'ToolLoopClip')
  request.r(i893[26], i893[27], 0, i892, 'thisParticles')
  i892.onDragparticle = !!i893[28]
  request.r(i893[29], i893[30], 0, i892, 'dragParticles')
  request.r(i893[31], i893[32], 0, i892, 'anim')
  i892.startPos = new pc.Vec3( i893[33], i893[34], i893[35] )
  i892.startScale = new pc.Vec3( i893[36], i893[37], i893[38] )
  i892.Vibration = !!i893[39]
  i892.isPlacedCannotMove = !!i893[40]
  i892.isObjectMovingWhileDragging = !!i893[41]
  i892.OnMouseDownEvent = request.d('System.Action', i893[42], i892.OnMouseDownEvent)
  i892.OnMouseUpEvent = request.d('System.Action', i893[43], i892.OnMouseUpEvent)
  i892.ProgStartEvent = request.d('System.Action', i893[44], i892.ProgStartEvent)
  i892.ProgEndEvent = request.d('System.Action', i893[45], i892.ProgEndEvent)
  i892.canCallMouseUpWhenGamePaused = !!i893[46]
  i892.ClampX_L = i893[47]
  i892.ClampX_H = i893[48]
  i892.ClampY_L = i893[49]
  i892.ClampY_H = i893[50]
  i892.startOrder = i893[51]
  i892.dontResetItIsInCollider = !!i893[52]
  request.r(i893[53], i893[54], 0, i892, 'thisCollider')
  request.r(i893[55], i893[56], 0, i892, 'thisSR')
  i892.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i893[57], i892.OnMouseDownEventIndependentFromCanDrag)
  return i892
}

Deserializers["System.Action"] = function (request, data, root) {
  var i898 = root || request.c( 'System.Action' )
  var i899 = data
  return i898
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i900 = root || request.c( 'BD_Clamp' )
  var i901 = data
  i900.ClampX_L = i901[0]
  i900.ClampX_H = i901[1]
  i900.ClampY_L = i901[2]
  i900.ClampY_H = i901[3]
  return i900
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i902 = root || request.c( 'BD_CameraFollow' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'Tool')
  request.r(i903[2], i903[3], 0, i902, 'Pivot')
  i902.FOV = i903[4]
  i902.Y_L = i903[5]
  i902.Y_H = i903[6]
  i902.X_L = i903[7]
  i902.X_R = i903[8]
  i902.startDelay = i903[9]
  i902.duration = i903[10]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i905 = data
  i904.bodyType = i905[0]
  request.r(i905[1], i905[2], 0, i904, 'material')
  i904.simulated = !!i905[3]
  i904.useAutoMass = !!i905[4]
  i904.mass = i905[5]
  i904.drag = i905[6]
  i904.angularDrag = i905[7]
  i904.gravityScale = i905[8]
  i904.collisionDetectionMode = i905[9]
  i904.sleepMode = i905[10]
  i904.constraints = i905[11]
  return i904
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i906 = root || request.c( 'PlaceItem' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'thisDrag')
  request.r(i907[2], i907[3], 0, i906, 'Target')
  request.r(i907[4], i907[5], 0, i906, 'Clip')
  i906.jumpOnPlace = !!i907[6]
  i906.jumpHeight = i907[7]
  i906.jumpDuration = i907[8]
  i906.settleDuration = i907[9]
  i906.isPlaced = !!i907[10]
  i906.isInsideCollider = !!i907[11]
  i906.changeScaleOnPlace = !!i907[12]
  request.r(i907[13], i907[14], 0, i906, 'item')
  i906.newScaleOnPlace = new pc.Vec3( i907[15], i907[16], i907[17] )
  i906.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i907[18], i906.OnPlaced)
  return i906
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i908 = root || request.c( 'ActionOnTap' )
  var i909 = data
  i908.OnTap = request.d('UnityEngine.Events.UnityEvent', i909[0], i908.OnTap)
  i908.OnTapExtra = request.d('System.Action', i909[1], i908.OnTapExtra)
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i911 = data
  i910.radius = i911[0]
  i910.enabled = !!i911[1]
  i910.isTrigger = !!i911[2]
  i910.usedByEffector = !!i911[3]
  i910.density = i911[4]
  i910.offset = new pc.Vec2( i911[5], i911[6] )
  request.r(i911[7], i911[8], 0, i910, 'material')
  return i910
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i912 = root || request.c( 'PlayParticlesOnCollision' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'Target')
  request.r(i913[2], i913[3], 0, i912, 'ParticlePrefab')
  i912.destroyIt = !!i913[4]
  i912.stayAtPlace = !!i913[5]
  i912.disableOnCollision = !!i913[6]
  i912.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i913[7], i912.OnCollisionEvent)
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i915 = data
  i914.usedByComposite = !!i915[0]
  i914.autoTiling = !!i915[1]
  var i917 = i915[2]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
  var i919 = i917[i + 0]
  var i918 = []
  for(var i = 0; i < i919.length; i += 2) {
    i918.push( new pc.Vec2( i919[i + 0], i919[i + 1] ) );
  }
    i916.push( i918 );
  }
  i914.points = i916
  i914.enabled = !!i915[3]
  i914.isTrigger = !!i915[4]
  i914.usedByEffector = !!i915[5]
  i914.density = i915[6]
  i914.offset = new pc.Vec2( i915[7], i915[8] )
  request.r(i915[9], i915[10], 0, i914, 'material')
  return i914
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i926 = root || request.c( 'PlaySfxOnCollision' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'Tip')
  i926.Mode = i927[2]
  request.r(i927[3], i927[4], 0, i926, 'DragInput')
  request.r(i927[5], i927[6], 0, i926, 'Source')
  i926.startVol = i927[7]
  i926.targetVol = i927[8]
  i926.duration = i927[9]
  request.r(i927[10], i927[11], 0, i926, 'Particles')
  i926.isDone = !!i927[12]
  i926.isInArea = !!i927[13]
  i926.isPlaying = !!i927[14]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'clip')
  request.r(i929[2], i929[3], 0, i928, 'outputAudioMixerGroup')
  i928.playOnAwake = !!i929[4]
  i928.loop = !!i929[5]
  i928.time = i929[6]
  i928.volume = i929[7]
  i928.pitch = i929[8]
  i928.enabled = !!i929[9]
  return i928
}

Deserializers["SewingCol"] = function (request, data, root) {
  var i930 = root || request.c( 'SewingCol' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'targetTip')
  var i933 = i931[2]
  var i932 = []
  for(var i = 0; i < i933.length; i += 2) {
  request.r(i933[i + 0], i933[i + 1], 2, i932, '')
  }
  i930.Anim_Items = i932
  i930.isDone = !!i931[3]
  request.r(i931[4], i931[5], 0, i930, 'sfx')
  return i930
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i936 = root || request.c( 'OutlinePulse' )
  var i937 = data
  i936.smallThickness = i937[0]
  i936.largeThickness = i937[1]
  i936.transitionSpeed = i937[2]
  i936.animationSpeed = i937[3]
  i936.isThickOutline = !!i937[4]
  i936.animate = !!i937[5]
  i936.hideSpriteOnly = !!i937[6]
  return i936
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i938 = root || request.c( 'BD_Action' )
  var i939 = data
  i938.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i939[0], i938.OnMouseDownEvent)
  i938.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i939[1], i938.OnMouseUpEvent)
  i938.setToolLayer = !!i939[2]
  request.r(i939[3], i939[4], 0, i938, 'tool_SP')
  return i938
}

Deserializers["Level1_SurfController"] = function (request, data, root) {
  var i940 = root || request.c( 'Level1_SurfController' )
  var i941 = data
  i940.target_rotZ = i941[0]
  i940.rotationDuration = i941[1]
  i940.rotationEase = i941[2]
  request.r(i941[3], i941[4], 0, i940, 'maskItem')
  i940.maskTarget_posY = i941[5]
  i940.maskMoveDuration = i941[6]
  i940.requiredHoldTime = i941[7]
  i940.minRotationForProgress = i941[8]
  request.r(i941[9], i941[10], 0, i940, 'tipCollider')
  request.r(i941[11], i941[12], 0, i940, 'targetZoneCollider')
  request.r(i941[13], i941[14], 0, i940, 'surf_Particles')
  request.r(i941[15], i941[16], 0, i940, 'surf_SubEmitter')
  request.r(i941[17], i941[18], 0, i940, 'Indication')
  i940.OnComplete = request.d('UnityEngine.Events.UnityEvent', i941[19], i940.OnComplete)
  i940.currentHoldProgress = i941[20]
  return i940
}

Deserializers["BD_Fold"] = function (request, data, root) {
  var i942 = root || request.c( 'BD_Fold' )
  var i943 = data
  i942.canDrag = !!i943[0]
  i942.canFoldBottomLeft = !!i943[1]
  i942.canFoldBottomRight = !!i943[2]
  i942.canFoldTopLeft = !!i943[3]
  i942.canFoldTopRight = !!i943[4]
  request.r(i943[5], i943[6], 0, i942, 'Indication')
  request.r(i943[7], i943[8], 0, i942, 'backSideSprite')
  i942.maxSideOffset = i943[9]
  i942.foldBackDuration = i943[10]
  i942.instantFoldAmount = i943[11]
  i942.useSmoothRelease = !!i943[12]
  i942.completionLimit = i943[13]
  i942.afterCompletionTravelTo = i943[14]
  i942.OnComplete = request.d('UnityEngine.Events.UnityEvent', i943[15], i942.OnComplete)
  i942.currentProgress = i943[16]
  i942.innerShadowStrength = i943[17]
  request.r(i943[18], i943[19], 0, i942, 'dragAudioSource')
  request.r(i943[20], i943[21], 0, i942, 'dragStartClip')
  request.r(i943[22], i943[23], 0, i942, 'completionClip')
  i942.audioFadeSpeed = i943[24]
  i942.audioMoveThreshold = i943[25]
  i942.hapticInterval = i943[26]
  return i942
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i944 = root || request.c( 'BD_Progress' )
  var i945 = data
  var i947 = i945[0]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('ScratchData', i947[i + 0]) );
  }
  i944.AllScratches = i946
  i944.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i945[1], i944.OnScratchComplete)
  i944.isProgDone = !!i945[2]
  i944.canCallComplete = !!i945[3]
  i944.CollectiveAppear = !!i945[4]
  i944.tipControl = !!i945[5]
  i944.progressControl = !!i945[6]
  request.r(i945[7], i945[8], 0, i944, 'thisDrag')
  i944.CompleteEvent = request.d('System.Action', i945[9], i944.CompleteEvent)
  i944.SubCompleteEvent = request.d('System.Action', i945[10], i944.SubCompleteEvent)
  return i944
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i950 = root || request.c( 'ScratchData' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'ScratchManager')
  i950.scratchLimit = i951[2]
  i950.isComplete = !!i951[3]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'sharedMesh')
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'additionalVertexStreams')
  i954.enabled = !!i955[2]
  request.r(i955[3], i955[4], 0, i954, 'sharedMaterial')
  var i957 = i955[5]
  var i956 = []
  for(var i = 0; i < i957.length; i += 2) {
  request.r(i957[i + 0], i957[i + 1], 2, i956, '')
  }
  i954.sharedMaterials = i956
  i954.receiveShadows = !!i955[6]
  i954.shadowCastingMode = i955[7]
  i954.sortingLayerID = i955[8]
  i954.sortingOrder = i955[9]
  i954.lightmapIndex = i955[10]
  i954.lightmapSceneIndex = i955[11]
  i954.lightmapScaleOffset = new pc.Vec4( i955[12], i955[13], i955[14], i955[15] )
  i954.lightProbeUsage = i955[16]
  i954.reflectionProbeUsage = i955[17]
  return i954
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i958 = root || request.c( 'StaticFixedPipe' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'meshRenderer')
  request.r(i959[2], i959[3], 0, i958, 'toolTransform')
  request.r(i959[4], i959[5], 0, i958, 'toolDirectionPoint')
  request.r(i959[6], i959[7], 0, i958, 'fixedEndPoint')
  i958.segmentCount = i959[8]
  i958.totalLength = i959[9]
  i958.constraintIterations = i959[10]
  i958.gravity = new pc.Vec3( i959[11], i959[12], i959[13] )
  i958.pipeWidth = i959[14]
  return i958
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i960 = root || request.c( 'BD_SpriteChange' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'BD')
  request.r(i961[2], i961[3], 0, i960, 'SR')
  request.r(i961[4], i961[5], 0, i960, 'Default')
  request.r(i961[6], i961[7], 0, i960, 'Picked')
  i960.resetOnRelease = !!i961[8]
  return i960
}

Deserializers["TeaseTapCTA"] = function (request, data, root) {
  var i962 = root || request.c( 'TeaseTapCTA' )
  var i963 = data
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i965 = data
  i964.name = i965[0]
  i964.atlasId = i965[1]
  i964.mipmapCount = i965[2]
  i964.hdr = !!i965[3]
  i964.size = i965[4]
  i964.anisoLevel = i965[5]
  i964.filterMode = i965[6]
  var i967 = i965[7]
  var i966 = []
  for(var i = 0; i < i967.length; i += 4) {
    i966.push( UnityEngine.Rect.MinMaxRect(i967[i + 0], i967[i + 1], i967[i + 2], i967[i + 3]) );
  }
  i964.rects = i966
  i964.wrapU = i965[8]
  i964.wrapV = i965[9]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i971 = data
  i970.name = i971[0]
  i970.index = i971[1]
  i970.startup = !!i971[2]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i973 = data
  i972.aspect = i973[0]
  i972.orthographic = !!i973[1]
  i972.orthographicSize = i973[2]
  i972.backgroundColor = new pc.Color(i973[3], i973[4], i973[5], i973[6])
  i972.nearClipPlane = i973[7]
  i972.farClipPlane = i973[8]
  i972.fieldOfView = i973[9]
  i972.depth = i973[10]
  i972.clearFlags = i973[11]
  i972.cullingMask = i973[12]
  i972.rect = i973[13]
  request.r(i973[14], i973[15], 0, i972, 'targetTexture')
  i972.usePhysicalProperties = !!i973[16]
  i972.focalLength = i973[17]
  i972.sensorSize = new pc.Vec2( i973[18], i973[19] )
  i972.lensShift = new pc.Vec2( i973[20], i973[21] )
  i972.gateFit = i973[22]
  i972.commandBufferCount = i973[23]
  i972.cameraType = i973[24]
  i972.enabled = !!i973[25]
  return i972
}

Deserializers["CameraController"] = function (request, data, root) {
  var i974 = root || request.c( 'CameraController' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'cam')
  i974.defaultPosition = new pc.Vec3( i975[2], i975[3], i975[4] )
  i974.defaultSize = i975[5]
  i974.defaultFOV = i975[6]
  i974.defaultDuration = i975[7]
  i974.defaultEase = i975[8]
  return i974
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i976 = root || request.c( 'MusicSource' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'source')
  return i976
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i978 = root || request.c( 'UI_Manager' )
  var i979 = data
  i978.levelCompleted = !!i979[0]
  i978.isPauseActive = !!i979[1]
  i978.loadIndex = i979[2]
  request.r(i979[3], i979[4], 0, i978, 'removeAdsButton')
  request.r(i979[5], i979[6], 0, i978, 'pauseButton')
  request.r(i979[7], i979[8], 0, i978, 'Fade_Img')
  request.r(i979[9], i979[10], 0, i978, 'TopBarAnim')
  request.r(i979[11], i979[12], 0, i978, 'MainPanel')
  request.r(i979[13], i979[14], 0, i978, 'PausePanel')
  request.r(i979[15], i979[16], 0, i978, 'PausePopUp')
  request.r(i979[17], i979[18], 0, i978, 'PauseCanvasGroup')
  request.r(i979[19], i979[20], 0, i978, 'RateUsPanel')
  request.r(i979[21], i979[22], 0, i978, 'RateUsPopUp')
  request.r(i979[23], i979[24], 0, i978, 'RemoveAdsPanel')
  request.r(i979[25], i979[26], 0, i978, 'RemoveAdsPopUp')
  request.r(i979[27], i979[28], 0, i978, 'RemoveAdsCanvasGroup')
  var i981 = i979[29]
  var i980 = []
  for(var i = 0; i < i981.length; i += 2) {
  request.r(i981[i + 0], i981[i + 1], 2, i980, '')
  }
  i978.RemoveAdsAnims = i980
  i978.showCompletePanel = !!i979[30]
  var i983 = i979[31]
  var i982 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 1, i982, '')
  }
  i978.thingsToDisableWhenCompletePanel = i982
  request.r(i979[32], i979[33], 0, i978, 'CompletePanel')
  request.r(i979[34], i979[35], 0, i978, 'LevelIcon')
  request.r(i979[36], i979[37], 0, i978, 'CompleteParticles')
  request.r(i979[38], i979[39], 0, i978, 'progressBar')
  request.r(i979[40], i979[41], 0, i978, 'progressText')
  request.r(i979[42], i979[43], 0, i978, 'toolIcon1')
  request.r(i979[44], i979[45], 0, i978, 'toolIcon2')
  request.r(i979[46], i979[47], 0, i978, 'toolIcon3')
  request.r(i979[48], i979[49], 0, i978, 'toolIcon4')
  request.r(i979[50], i979[51], 0, i978, 'toolHolder')
  i978.toolHolderRaisedY = i979[52]
  i978.toolHolderRaiseDuration = i979[53]
  request.r(i979[54], i979[55], 0, i978, 'target1')
  request.r(i979[56], i979[57], 0, i978, 'target2')
  i978.toolMoveDuration = i979[58]
  i978.currentIndex = i979[59]
  var i985 = i979[60]
  var i984 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i985.length; i += 2) {
  request.r(i985[i + 0], i985[i + 1], 1, i984, '')
  }
  i978.allTools = i984
  request.r(i979[61], i979[62], 0, i978, 'clockProgress')
  request.r(i979[63], i979[64], 0, i978, 'clockProgressFill')
  request.r(i979[65], i979[66], 0, i978, 'clockAudio')
  i978.moveDistance = i979[67]
  i978.animationDuration = i979[68]
  i978.greyBgChildName = i979[69]
  i978.pushOffset = i979[70]
  return i978
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i988 = root || request.c( 'GameManagerPlayable' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'endParticles')
  request.r(i989[2], i989[3], 0, i988, 'stepCompleteParticles')
  request.r(i989[4], i989[5], 0, i988, 'DefaultMat')
  request.r(i989[6], i989[7], 0, i988, 'BG_Music')
  request.r(i989[8], i989[9], 0, i988, 'restoreEffectShader')
  request.r(i989[10], i989[11], 0, i988, 'stickerEffectShader')
  i988.isComplete = !!i989[12]
  i988.isPaused = !!i989[13]
  request.r(i989[14], i989[15], 0, i988, 'currentLevel')
  i988.startLevelOnPlay = !!i989[16]
  i988.currentLevelNo = i989[17]
  return i988
}

Deserializers["AudioController"] = function (request, data, root) {
  var i990 = root || request.c( 'AudioController' )
  var i991 = data
  request.r(i991[0], i991[1], 0, i990, 'MainMixer')
  request.r(i991[2], i991[3], 0, i990, 'UiClick')
  request.r(i991[4], i991[5], 0, i990, 'UiClickSource')
  var i993 = i991[6]
  var i992 = []
  for(var i = 0; i < i993.length; i += 2) {
  request.r(i993[i + 0], i993[i + 1], 2, i992, '')
  }
  i990.SfxSources = i992
  var i995 = i991[7]
  var i994 = []
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 2, i994, '')
  }
  i990.AllClips = i994
  return i990
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i998 = root || request.c( 'PlayableHudRuntime' )
  var i999 = data
  return i998
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'm_FirstSelected')
  i1000.m_sendNavigationEvents = !!i1001[2]
  i1000.m_DragThreshold = i1001[3]
  return i1000
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1003 = data
  i1002.m_HorizontalAxis = i1003[0]
  i1002.m_VerticalAxis = i1003[1]
  i1002.m_SubmitButton = i1003[2]
  i1002.m_CancelButton = i1003[3]
  i1002.m_InputActionsPerSecond = i1003[4]
  i1002.m_RepeatDelay = i1003[5]
  i1002.m_ForceModuleActive = !!i1003[6]
  i1002.m_SendPointerHoverToParent = !!i1003[7]
  return i1002
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i1004 = root || request.c( 'PlayableRouter' )
  var i1005 = data
  var i1007 = i1005[0]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 2, i1006, '')
  }
  i1004.menuObjects = i1006
  var i1009 = i1005[1]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 2) {
  request.r(i1009[i + 0], i1009[i + 1], 2, i1008, '')
  }
  i1004.gameplayObjects = i1008
  var i1011 = i1005[2]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('PlayableRouter+SubLevelSlot', i1011[i + 0]) );
  }
  i1004.subLevels = i1010
  i1004.fadeDuration = i1005[3]
  i1004.onIntroStart = request.d('UnityEngine.Events.UnityEvent', i1005[4], i1004.onIntroStart)
  var i1013 = i1005[5]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 2) {
  request.r(i1013[i + 0], i1013[i + 1], 2, i1012, '')
  }
  i1004.hideDuringIntro = i1012
  i1004.lockedMessage = i1005[6]
  i1004.lockedTapsToCTA = i1005[7]
  return i1004
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i1018 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'button')
  request.r(i1019[2], i1019[3], 0, i1018, 'level')
  request.r(i1019[4], i1019[5], 0, i1018, 'intro')
  return i1018
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i1020 = root || request.c( 'ToastManager' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'toastPanel')
  request.r(i1021[2], i1021[3], 0, i1020, 'toastPopup')
  request.r(i1021[4], i1021[5], 0, i1020, 'canvasGroup')
  request.r(i1021[6], i1021[7], 0, i1020, 'toastText')
  i1020.startY = i1021[8]
  i1020.visibleY = i1021[9]
  i1020.endY = i1021[10]
  i1020.animationTime = i1021[11]
  i1020.animationTimeUp = i1021[12]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1023 = data
  i1022.m_Alpha = i1023[0]
  i1022.m_Interactable = !!i1023[1]
  i1022.m_BlocksRaycasts = !!i1023[2]
  i1022.m_IgnoreParentGroups = !!i1023[3]
  i1022.enabled = !!i1023[4]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1025 = data
  i1024.ambientIntensity = i1025[0]
  i1024.reflectionIntensity = i1025[1]
  i1024.ambientMode = i1025[2]
  i1024.ambientLight = new pc.Color(i1025[3], i1025[4], i1025[5], i1025[6])
  i1024.ambientSkyColor = new pc.Color(i1025[7], i1025[8], i1025[9], i1025[10])
  i1024.ambientGroundColor = new pc.Color(i1025[11], i1025[12], i1025[13], i1025[14])
  i1024.ambientEquatorColor = new pc.Color(i1025[15], i1025[16], i1025[17], i1025[18])
  i1024.fogColor = new pc.Color(i1025[19], i1025[20], i1025[21], i1025[22])
  i1024.fogEndDistance = i1025[23]
  i1024.fogStartDistance = i1025[24]
  i1024.fogDensity = i1025[25]
  i1024.fog = !!i1025[26]
  request.r(i1025[27], i1025[28], 0, i1024, 'skybox')
  i1024.fogMode = i1025[29]
  var i1027 = i1025[30]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1027[i + 0]) );
  }
  i1024.lightmaps = i1026
  i1024.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1025[31], i1024.lightProbes)
  i1024.lightmapsMode = i1025[32]
  i1024.mixedBakeMode = i1025[33]
  i1024.environmentLightingMode = i1025[34]
  i1024.ambientProbe = new pc.SphericalHarmonicsL2(i1025[35])
  request.r(i1025[36], i1025[37], 0, i1024, 'customReflection')
  request.r(i1025[38], i1025[39], 0, i1024, 'defaultReflection')
  i1024.defaultReflectionMode = i1025[40]
  i1024.defaultReflectionResolution = i1025[41]
  i1024.sunLightObjectId = i1025[42]
  i1024.pixelLightCount = i1025[43]
  i1024.defaultReflectionHDR = !!i1025[44]
  i1024.hasLightDataAsset = !!i1025[45]
  i1024.hasManualGenerate = !!i1025[46]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1031 = data
  request.r(i1031[0], i1031[1], 0, i1030, 'lightmapColor')
  request.r(i1031[2], i1031[3], 0, i1030, 'lightmapDirection')
  request.r(i1031[4], i1031[5], 0, i1030, 'shadowMask')
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1032 = root || new UnityEngine.LightProbes()
  var i1033 = data
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1039 = data
  var i1041 = i1039[0]
  var i1040 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1041[i + 0]));
  }
  i1038.ShaderCompilationErrors = i1040
  i1038.name = i1039[1]
  i1038.guid = i1039[2]
  var i1043 = i1039[3]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( i1043[i + 0] );
  }
  i1038.shaderDefinedKeywords = i1042
  var i1045 = i1039[4]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1045[i + 0]) );
  }
  i1038.passes = i1044
  var i1047 = i1039[5]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1047[i + 0]) );
  }
  i1038.usePasses = i1046
  var i1049 = i1039[6]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1049[i + 0]) );
  }
  i1038.defaultParameterValues = i1048
  request.r(i1039[7], i1039[8], 0, i1038, 'unityFallbackShader')
  i1038.readDepth = !!i1039[9]
  i1038.hasDepthOnlyPass = !!i1039[10]
  i1038.isCreatedByShaderGraph = !!i1039[11]
  i1038.disableBatching = !!i1039[12]
  i1038.compiled = !!i1039[13]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1053 = data
  i1052.shaderName = i1053[0]
  i1052.errorMessage = i1053[1]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1058 = root || new pc.UnityShaderPass()
  var i1059 = data
  i1058.id = i1059[0]
  i1058.subShaderIndex = i1059[1]
  i1058.name = i1059[2]
  i1058.passType = i1059[3]
  i1058.grabPassTextureName = i1059[4]
  i1058.usePass = !!i1059[5]
  i1058.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1059[6], i1058.zTest)
  i1058.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1059[7], i1058.zWrite)
  i1058.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1059[8], i1058.culling)
  i1058.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1059[9], i1058.blending)
  i1058.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1059[10], i1058.alphaBlending)
  i1058.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1059[11], i1058.colorWriteMask)
  i1058.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1059[12], i1058.offsetUnits)
  i1058.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1059[13], i1058.offsetFactor)
  i1058.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1059[14], i1058.stencilRef)
  i1058.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1059[15], i1058.stencilReadMask)
  i1058.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1059[16], i1058.stencilWriteMask)
  i1058.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1059[17], i1058.stencilOp)
  i1058.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1059[18], i1058.stencilOpFront)
  i1058.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1059[19], i1058.stencilOpBack)
  var i1061 = i1059[20]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1061[i + 0]) );
  }
  i1058.tags = i1060
  var i1063 = i1059[21]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( i1063[i + 0] );
  }
  i1058.passDefinedKeywords = i1062
  var i1065 = i1059[22]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1065[i + 0]) );
  }
  i1058.passDefinedKeywordGroups = i1064
  var i1067 = i1059[23]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1067[i + 0]) );
  }
  i1058.variants = i1066
  var i1069 = i1059[24]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1069[i + 0]) );
  }
  i1058.excludedVariants = i1068
  i1058.hasDepthReader = !!i1059[25]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1071 = data
  i1070.val = i1071[0]
  i1070.name = i1071[1]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1073 = data
  i1072.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1073[0], i1072.src)
  i1072.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1073[1], i1072.dst)
  i1072.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1073[2], i1072.op)
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1075 = data
  i1074.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[0], i1074.pass)
  i1074.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[1], i1074.fail)
  i1074.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[2], i1074.zFail)
  i1074.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[3], i1074.comp)
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1079 = data
  i1078.name = i1079[0]
  i1078.value = i1079[1]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1083 = data
  var i1085 = i1083[0]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( i1085[i + 0] );
  }
  i1082.keywords = i1084
  i1082.hasDiscard = !!i1083[1]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1089 = data
  i1088.passId = i1089[0]
  i1088.subShaderIndex = i1089[1]
  var i1091 = i1089[2]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( i1091[i + 0] );
  }
  i1088.keywords = i1090
  i1088.vertexProgram = i1089[3]
  i1088.fragmentProgram = i1089[4]
  i1088.exportedForWebGl2 = !!i1089[5]
  i1088.readDepth = !!i1089[6]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1095 = data
  request.r(i1095[0], i1095[1], 0, i1094, 'shader')
  i1094.pass = i1095[2]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1099 = data
  i1098.name = i1099[0]
  i1098.type = i1099[1]
  i1098.value = new pc.Vec4( i1099[2], i1099[3], i1099[4], i1099[5] )
  i1098.textureValue = i1099[6]
  i1098.shaderPropertyFlag = i1099[7]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1101 = data
  i1100.name = i1101[0]
  request.r(i1101[1], i1101[2], 0, i1100, 'texture')
  i1100.aabb = i1101[3]
  i1100.vertices = i1101[4]
  i1100.triangles = i1101[5]
  i1100.textureRect = UnityEngine.Rect.MinMaxRect(i1101[6], i1101[7], i1101[8], i1101[9])
  i1100.packedRect = UnityEngine.Rect.MinMaxRect(i1101[10], i1101[11], i1101[12], i1101[13])
  i1100.border = new pc.Vec4( i1101[14], i1101[15], i1101[16], i1101[17] )
  i1100.transparency = i1101[18]
  i1100.bounds = i1101[19]
  i1100.pixelsPerUnit = i1101[20]
  i1100.textureWidth = i1101[21]
  i1100.textureHeight = i1101[22]
  i1100.nativeSize = new pc.Vec2( i1101[23], i1101[24] )
  i1100.pivot = new pc.Vec2( i1101[25], i1101[26] )
  i1100.textureRectOffset = new pc.Vec2( i1101[27], i1101[28] )
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1103 = data
  i1102.name = i1103[0]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1105 = data
  i1104.name = i1105[0]
  i1104.wrapMode = i1105[1]
  i1104.isLooping = !!i1105[2]
  i1104.length = i1105[3]
  var i1107 = i1105[4]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1107[i + 0]) );
  }
  i1104.curves = i1106
  var i1109 = i1105[5]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1109[i + 0]) );
  }
  i1104.events = i1108
  i1104.halfPrecision = !!i1105[6]
  i1104._frameRate = i1105[7]
  i1104.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1105[8], i1104.localBounds)
  i1104.hasMuscleCurves = !!i1105[9]
  var i1111 = i1105[10]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( i1111[i + 0] );
  }
  i1104.clipMuscleConstant = i1110
  i1104.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1105[11], i1104.clipBindingConstant)
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1115 = data
  i1114.path = i1115[0]
  i1114.hash = i1115[1]
  i1114.componentType = i1115[2]
  i1114.property = i1115[3]
  i1114.keys = i1115[4]
  var i1117 = i1115[5]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1117[i + 0]) );
  }
  i1114.objectReferenceKeys = i1116
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1121 = data
  i1120.time = i1121[0]
  request.r(i1121[1], i1121[2], 0, i1120, 'value')
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1125 = data
  i1124.functionName = i1125[0]
  i1124.floatParameter = i1125[1]
  i1124.intParameter = i1125[2]
  i1124.stringParameter = i1125[3]
  request.r(i1125[4], i1125[5], 0, i1124, 'objectReferenceParameter')
  i1124.time = i1125[6]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1127 = data
  i1126.center = new pc.Vec3( i1127[0], i1127[1], i1127[2] )
  i1126.extends = new pc.Vec3( i1127[3], i1127[4], i1127[5] )
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1131 = data
  var i1133 = i1131[0]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( i1133[i + 0] );
  }
  i1130.genericBindings = i1132
  var i1135 = i1131[1]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( i1135[i + 0] );
  }
  i1130.pptrCurveMapping = i1134
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1137 = data
  i1136.name = i1137[0]
  i1136.ascent = i1137[1]
  i1136.originalLineHeight = i1137[2]
  i1136.fontSize = i1137[3]
  var i1139 = i1137[4]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1139[i + 0]) );
  }
  i1136.characterInfo = i1138
  request.r(i1137[5], i1137[6], 0, i1136, 'texture')
  i1136.originalFontSize = i1137[7]
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1143 = data
  i1142.index = i1143[0]
  i1142.advance = i1143[1]
  i1142.bearing = i1143[2]
  i1142.glyphWidth = i1143[3]
  i1142.glyphHeight = i1143[4]
  i1142.minX = i1143[5]
  i1142.maxX = i1143[6]
  i1142.minY = i1143[7]
  i1142.maxY = i1143[8]
  i1142.uvBottomLeftX = i1143[9]
  i1142.uvBottomLeftY = i1143[10]
  i1142.uvBottomRightX = i1143[11]
  i1142.uvBottomRightY = i1143[12]
  i1142.uvTopLeftX = i1143[13]
  i1142.uvTopLeftY = i1143[14]
  i1142.uvTopRightX = i1143[15]
  i1142.uvTopRightY = i1143[16]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1145 = data
  i1144.name = i1145[0]
  var i1147 = i1145[1]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1147[i + 0]) );
  }
  i1144.layers = i1146
  var i1149 = i1145[2]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1149[i + 0]) );
  }
  i1144.parameters = i1148
  i1144.animationClips = i1145[3]
  i1144.avatarUnsupported = i1145[4]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1153 = data
  i1152.name = i1153[0]
  i1152.defaultWeight = i1153[1]
  i1152.blendingMode = i1153[2]
  i1152.avatarMask = i1153[3]
  i1152.syncedLayerIndex = i1153[4]
  i1152.syncedLayerAffectsTiming = !!i1153[5]
  i1152.syncedLayers = i1153[6]
  i1152.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1153[7], i1152.stateMachine)
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1155 = data
  i1154.id = i1155[0]
  i1154.name = i1155[1]
  i1154.path = i1155[2]
  var i1157 = i1155[3]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1157[i + 0]) );
  }
  i1154.states = i1156
  var i1159 = i1155[4]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1159[i + 0]) );
  }
  i1154.machines = i1158
  var i1161 = i1155[5]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1161[i + 0]) );
  }
  i1154.entryStateTransitions = i1160
  var i1163 = i1155[6]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1163[i + 0]) );
  }
  i1154.exitStateTransitions = i1162
  var i1165 = i1155[7]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1165[i + 0]) );
  }
  i1154.anyStateTransitions = i1164
  i1154.defaultStateId = i1155[8]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1169 = data
  i1168.id = i1169[0]
  i1168.name = i1169[1]
  i1168.cycleOffset = i1169[2]
  i1168.cycleOffsetParameter = i1169[3]
  i1168.cycleOffsetParameterActive = !!i1169[4]
  i1168.mirror = !!i1169[5]
  i1168.mirrorParameter = i1169[6]
  i1168.mirrorParameterActive = !!i1169[7]
  i1168.motionId = i1169[8]
  i1168.nameHash = i1169[9]
  i1168.fullPathHash = i1169[10]
  i1168.speed = i1169[11]
  i1168.speedParameter = i1169[12]
  i1168.speedParameterActive = !!i1169[13]
  i1168.tag = i1169[14]
  i1168.tagHash = i1169[15]
  i1168.writeDefaultValues = !!i1169[16]
  var i1171 = i1169[17]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 2) {
  request.r(i1171[i + 0], i1171[i + 1], 2, i1170, '')
  }
  i1168.behaviours = i1170
  var i1173 = i1169[18]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1173[i + 0]) );
  }
  i1168.transitions = i1172
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1179 = data
  i1178.fullPath = i1179[0]
  i1178.canTransitionToSelf = !!i1179[1]
  i1178.duration = i1179[2]
  i1178.exitTime = i1179[3]
  i1178.hasExitTime = !!i1179[4]
  i1178.hasFixedDuration = !!i1179[5]
  i1178.interruptionSource = i1179[6]
  i1178.offset = i1179[7]
  i1178.orderedInterruption = !!i1179[8]
  i1178.destinationStateId = i1179[9]
  i1178.isExit = !!i1179[10]
  i1178.mute = !!i1179[11]
  i1178.solo = !!i1179[12]
  var i1181 = i1179[13]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1181[i + 0]) );
  }
  i1178.conditions = i1180
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1187 = data
  i1186.destinationStateId = i1187[0]
  i1186.isExit = !!i1187[1]
  i1186.mute = !!i1187[2]
  i1186.solo = !!i1187[3]
  var i1189 = i1187[4]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1189[i + 0]) );
  }
  i1186.conditions = i1188
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1193 = data
  i1192.mode = i1193[0]
  i1192.parameter = i1193[1]
  i1192.threshold = i1193[2]
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1197 = data
  i1196.defaultBool = !!i1197[0]
  i1196.defaultFloat = i1197[1]
  i1196.defaultInt = i1197[2]
  i1196.name = i1197[3]
  i1196.nameHash = i1197[4]
  i1196.type = i1197[5]
  return i1196
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1198 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1199 = data
  i1198.useSafeMode = !!i1199[0]
  i1198.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1199[1], i1198.safeModeOptions)
  i1198.timeScale = i1199[2]
  i1198.unscaledTimeScale = i1199[3]
  i1198.useSmoothDeltaTime = !!i1199[4]
  i1198.maxSmoothUnscaledTime = i1199[5]
  i1198.rewindCallbackMode = i1199[6]
  i1198.showUnityEditorReport = !!i1199[7]
  i1198.logBehaviour = i1199[8]
  i1198.drawGizmos = !!i1199[9]
  i1198.defaultRecyclable = !!i1199[10]
  i1198.defaultAutoPlay = i1199[11]
  i1198.defaultUpdateType = i1199[12]
  i1198.defaultTimeScaleIndependent = !!i1199[13]
  i1198.defaultEaseType = i1199[14]
  i1198.defaultEaseOvershootOrAmplitude = i1199[15]
  i1198.defaultEasePeriod = i1199[16]
  i1198.defaultAutoKill = !!i1199[17]
  i1198.defaultLoopType = i1199[18]
  i1198.debugMode = !!i1199[19]
  i1198.debugStoreTargetId = !!i1199[20]
  i1198.showPreviewPanel = !!i1199[21]
  i1198.storeSettingsLocation = i1199[22]
  i1198.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1199[23], i1198.modules)
  i1198.createASMDEF = !!i1199[24]
  i1198.showPlayingTweens = !!i1199[25]
  i1198.showPausedTweens = !!i1199[26]
  return i1198
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1200 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1201 = data
  i1200.logBehaviour = i1201[0]
  i1200.nestedTweenFailureBehaviour = i1201[1]
  return i1200
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1202 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1203 = data
  i1202.showPanel = !!i1203[0]
  i1202.audioEnabled = !!i1203[1]
  i1202.physicsEnabled = !!i1203[2]
  i1202.physics2DEnabled = !!i1203[3]
  i1202.spriteEnabled = !!i1203[4]
  i1202.uiEnabled = !!i1203[5]
  i1202.textMeshProEnabled = !!i1203[6]
  i1202.tk2DEnabled = !!i1203[7]
  i1202.deAudioEnabled = !!i1203[8]
  i1202.deUnityExtendedEnabled = !!i1203[9]
  i1202.epoOutlineEnabled = !!i1203[10]
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1205 = data
  var i1207 = i1205[0]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1207[i + 0]) );
  }
  i1204.files = i1206
  i1204.componentToPrefabIds = i1205[1]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1211 = data
  i1210.path = i1211[0]
  request.r(i1211[1], i1211[2], 0, i1210, 'unityObject')
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1213 = data
  var i1215 = i1213[0]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1215[i + 0]) );
  }
  i1212.scriptsExecutionOrder = i1214
  var i1217 = i1213[1]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1217[i + 0]) );
  }
  i1212.sortingLayers = i1216
  var i1219 = i1213[2]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1219[i + 0]) );
  }
  i1212.cullingLayers = i1218
  i1212.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1213[3], i1212.timeSettings)
  i1212.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1213[4], i1212.physicsSettings)
  i1212.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1213[5], i1212.physics2DSettings)
  i1212.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1213[6], i1212.qualitySettings)
  i1212.enableRealtimeShadows = !!i1213[7]
  i1212.enableAutoInstancing = !!i1213[8]
  i1212.enableStaticBatching = !!i1213[9]
  i1212.enableDynamicBatching = !!i1213[10]
  i1212.usePreservativeDynamicBatching = !!i1213[11]
  i1212.lightmapEncodingQuality = i1213[12]
  i1212.desiredColorSpace = i1213[13]
  var i1221 = i1213[14]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( i1221[i + 0] );
  }
  i1212.allTags = i1220
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1225 = data
  i1224.name = i1225[0]
  i1224.value = i1225[1]
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1229 = data
  i1228.id = i1229[0]
  i1228.name = i1229[1]
  i1228.value = i1229[2]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1233 = data
  i1232.id = i1233[0]
  i1232.name = i1233[1]
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1235 = data
  i1234.fixedDeltaTime = i1235[0]
  i1234.maximumDeltaTime = i1235[1]
  i1234.timeScale = i1235[2]
  i1234.maximumParticleTimestep = i1235[3]
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1237 = data
  i1236.gravity = new pc.Vec3( i1237[0], i1237[1], i1237[2] )
  i1236.defaultSolverIterations = i1237[3]
  i1236.bounceThreshold = i1237[4]
  i1236.autoSyncTransforms = !!i1237[5]
  i1236.autoSimulation = !!i1237[6]
  var i1239 = i1237[7]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1239[i + 0]) );
  }
  i1236.collisionMatrix = i1238
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1243 = data
  i1242.enabled = !!i1243[0]
  i1242.layerId = i1243[1]
  i1242.otherLayerId = i1243[2]
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1245 = data
  request.r(i1245[0], i1245[1], 0, i1244, 'material')
  i1244.gravity = new pc.Vec2( i1245[2], i1245[3] )
  i1244.positionIterations = i1245[4]
  i1244.velocityIterations = i1245[5]
  i1244.velocityThreshold = i1245[6]
  i1244.maxLinearCorrection = i1245[7]
  i1244.maxAngularCorrection = i1245[8]
  i1244.maxTranslationSpeed = i1245[9]
  i1244.maxRotationSpeed = i1245[10]
  i1244.baumgarteScale = i1245[11]
  i1244.baumgarteTOIScale = i1245[12]
  i1244.timeToSleep = i1245[13]
  i1244.linearSleepTolerance = i1245[14]
  i1244.angularSleepTolerance = i1245[15]
  i1244.defaultContactOffset = i1245[16]
  i1244.autoSimulation = !!i1245[17]
  i1244.queriesHitTriggers = !!i1245[18]
  i1244.queriesStartInColliders = !!i1245[19]
  i1244.callbacksOnDisable = !!i1245[20]
  i1244.reuseCollisionCallbacks = !!i1245[21]
  i1244.autoSyncTransforms = !!i1245[22]
  var i1247 = i1245[23]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1247[i + 0]) );
  }
  i1244.collisionMatrix = i1246
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1251 = data
  i1250.enabled = !!i1251[0]
  i1250.layerId = i1251[1]
  i1250.otherLayerId = i1251[2]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1253 = data
  var i1255 = i1253[0]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1255[i + 0]) );
  }
  i1252.qualityLevels = i1254
  var i1257 = i1253[1]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( i1257[i + 0] );
  }
  i1252.names = i1256
  i1252.shadows = i1253[2]
  i1252.anisotropicFiltering = i1253[3]
  i1252.antiAliasing = i1253[4]
  i1252.lodBias = i1253[5]
  i1252.shadowCascades = i1253[6]
  i1252.shadowDistance = i1253[7]
  i1252.shadowmaskMode = i1253[8]
  i1252.shadowProjection = i1253[9]
  i1252.shadowResolution = i1253[10]
  i1252.softParticles = !!i1253[11]
  i1252.softVegetation = !!i1253[12]
  i1252.activeColorSpace = i1253[13]
  i1252.desiredColorSpace = i1253[14]
  i1252.masterTextureLimit = i1253[15]
  i1252.maxQueuedFrames = i1253[16]
  i1252.particleRaycastBudget = i1253[17]
  i1252.pixelLightCount = i1253[18]
  i1252.realtimeReflectionProbes = !!i1253[19]
  i1252.shadowCascade2Split = i1253[20]
  i1252.shadowCascade4Split = new pc.Vec3( i1253[21], i1253[22], i1253[23] )
  i1252.streamingMipmapsActive = !!i1253[24]
  i1252.vSyncCount = i1253[25]
  i1252.asyncUploadBufferSize = i1253[26]
  i1252.asyncUploadTimeSlice = i1253[27]
  i1252.billboardsFaceCameraPosition = !!i1253[28]
  i1252.shadowNearPlaneOffset = i1253[29]
  i1252.streamingMipmapsMemoryBudget = i1253[30]
  i1252.maximumLODLevel = i1253[31]
  i1252.streamingMipmapsAddAllCameras = !!i1253[32]
  i1252.streamingMipmapsMaxLevelReduction = i1253[33]
  i1252.streamingMipmapsRenderersPerFrame = i1253[34]
  i1252.resolutionScalingFixedDPIFactor = i1253[35]
  i1252.streamingMipmapsMaxFileIORequests = i1253[36]
  i1252.currentQualityLevel = i1253[37]
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i1261 = data
  var i1263 = i1261[0]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i1263[i + 0]) );
  }
  i1260.groups = i1262
  var i1265 = i1261[1]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i1265[i + 0]) );
  }
  i1260.snapshots = i1264
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i1269 = data
  i1268.id = i1269[0]
  i1268.childGroupIds = i1269[1]
  i1268.name = i1269[2]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i1273 = data
  i1272.id = i1273[0]
  var i1275 = i1273[1]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i1275[i + 0]) );
  }
  i1272.parameters = i1274
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i1279 = data
  i1278.name = i1279[0]
  i1278.value = i1279[1]
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1283 = data
  i1282.weight = i1283[0]
  i1282.vertices = i1283[1]
  i1282.normals = i1283[2]
  i1282.tangents = i1283[3]
  return i1282
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[82],"83":[9],"84":[85],"86":[85],"87":[85],"88":[85],"89":[85],"90":[85],"91":[85],"92":[41],"93":[41],"94":[41],"95":[41],"96":[41],"97":[41],"98":[41],"99":[41],"100":[41],"101":[41],"102":[41],"103":[41],"104":[41],"105":[9],"106":[55],"107":[108],"109":[108],"8":[7],"110":[111],"52":[26],"112":[29],"113":[26],"114":[115],"116":[115],"117":[14],"118":[29],"119":[26],"58":[25],"38":[26],"120":[7],"121":[7],"12":[8],"16":[15,7],"122":[7],"11":[8],"123":[7],"124":[7],"125":[7],"126":[7],"127":[7],"128":[7],"129":[7],"130":[7],"131":[7],"132":[15,7],"133":[7],"134":[7],"135":[7],"136":[7],"18":[15,7],"137":[7],"138":[67],"139":[67],"68":[67],"140":[67],"141":[9],"142":[9]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","DG.Tweening.DOTweenAnimation","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Button","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Level1_Cloth_Playable_Step45","UnityEngine.GameObject","BasicDrag","UnityEngine.SpriteRenderer","BD_CameraFollow","Level1_SurfController","UnityEngine.BoxCollider2D","RotaryTimerKnob","UnityEngine.AudioClip","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.TrailRenderer","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteMask","BD_Clamp","UnityEngine.Rigidbody2D","PlaceItem","ActionOnTap","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","SewingCol","OutlinePulse","BD_Action","BD_Fold","BD_Progress","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","StaticFixedPipe","BD_SpriteChange","TeaseTapCTA","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableRouter","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "15.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "4Sept2026_Lvl1_2_Step_4to5";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1766";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4209";

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

Deserializers.buildID = "23bfb4ab-310c-42f7-9442-ad352f63bfd6";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

