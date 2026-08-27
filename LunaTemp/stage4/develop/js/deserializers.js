var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.JointSpring' )
  var i649 = data
  i648.spring = i649[0]
  i648.damper = i649[1]
  i648.targetPosition = i649[2]
  return i648
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.JointMotor' )
  var i651 = data
  i650.m_TargetVelocity = i651[0]
  i650.m_Force = i651[1]
  i650.m_FreeSpin = i651[2]
  return i650
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.JointLimits' )
  var i653 = data
  i652.m_Min = i653[0]
  i652.m_Max = i653[1]
  i652.m_Bounciness = i653[2]
  i652.m_BounceMinVelocity = i653[3]
  i652.m_ContactDistance = i653[4]
  i652.minBounce = i653[5]
  i652.maxBounce = i653[6]
  return i652
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.JointDrive' )
  var i655 = data
  i654.m_PositionSpring = i655[0]
  i654.m_PositionDamper = i655[1]
  i654.m_MaximumForce = i655[2]
  i654.m_UseAcceleration = i655[3]
  return i654
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i657 = data
  i656.m_Spring = i657[0]
  i656.m_Damper = i657[1]
  return i656
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i659 = data
  i658.m_Limit = i659[0]
  i658.m_Bounciness = i659[1]
  i658.m_ContactDistance = i659[2]
  return i658
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i661 = data
  i660.m_ExtremumSlip = i661[0]
  i660.m_ExtremumValue = i661[1]
  i660.m_AsymptoteSlip = i661[2]
  i660.m_AsymptoteValue = i661[3]
  i660.m_Stiffness = i661[4]
  return i660
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i663 = data
  i662.m_LowerAngle = i663[0]
  i662.m_UpperAngle = i663[1]
  return i662
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i665 = data
  i664.m_MotorSpeed = i665[0]
  i664.m_MaximumMotorTorque = i665[1]
  return i664
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i667 = data
  i666.m_DampingRatio = i667[0]
  i666.m_Frequency = i667[1]
  i666.m_Angle = i667[2]
  return i666
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i669 = data
  i668.m_LowerTranslation = i669[0]
  i668.m_UpperTranslation = i669[1]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i670 = root || new pc.UnityMaterial()
  var i671 = data
  i670.name = i671[0]
  request.r(i671[1], i671[2], 0, i670, 'shader')
  i670.renderQueue = i671[3]
  i670.enableInstancing = !!i671[4]
  var i673 = i671[5]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i673[i + 0]) );
  }
  i670.floatParameters = i672
  var i675 = i671[6]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i675[i + 0]) );
  }
  i670.colorParameters = i674
  var i677 = i671[7]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i677[i + 0]) );
  }
  i670.vectorParameters = i676
  var i679 = i671[8]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i679[i + 0]) );
  }
  i670.textureParameters = i678
  var i681 = i671[9]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i681[i + 0]) );
  }
  i670.materialFlags = i680
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i685 = data
  i684.name = i685[0]
  i684.value = i685[1]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i689 = data
  i688.name = i689[0]
  i688.value = new pc.Color(i689[1], i689[2], i689[3], i689[4])
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i693 = data
  i692.name = i693[0]
  i692.value = new pc.Vec4( i693[1], i693[2], i693[3], i693[4] )
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i697 = data
  i696.name = i697[0]
  request.r(i697[1], i697[2], 0, i696, 'value')
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i701 = data
  i700.name = i701[0]
  i700.enabled = !!i701[1]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i703 = data
  i702.name = i703[0]
  i702.width = i703[1]
  i702.height = i703[2]
  i702.mipmapCount = i703[3]
  i702.anisoLevel = i703[4]
  i702.filterMode = i703[5]
  i702.hdr = !!i703[6]
  i702.format = i703[7]
  i702.wrapMode = i703[8]
  i702.alphaIsTransparency = !!i703[9]
  i702.alphaSource = i703[10]
  i702.graphicsFormat = i703[11]
  i702.sRGBTexture = !!i703[12]
  i702.desiredColorSpace = i703[13]
  i702.wrapU = i703[14]
  i702.wrapV = i703[15]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i705 = data
  i704.name = i705[0]
  i704.halfPrecision = !!i705[1]
  i704.useSimplification = !!i705[2]
  i704.useUInt32IndexFormat = !!i705[3]
  i704.vertexCount = i705[4]
  i704.aabb = i705[5]
  var i707 = i705[6]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( !!i707[i + 0] );
  }
  i704.streams = i706
  i704.vertices = i705[7]
  var i709 = i705[8]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i709[i + 0]) );
  }
  i704.subMeshes = i708
  var i711 = i705[9]
  var i710 = []
  for(var i = 0; i < i711.length; i += 16) {
    i710.push( new pc.Mat4().setData(i711[i + 0], i711[i + 1], i711[i + 2], i711[i + 3],  i711[i + 4], i711[i + 5], i711[i + 6], i711[i + 7],  i711[i + 8], i711[i + 9], i711[i + 10], i711[i + 11],  i711[i + 12], i711[i + 13], i711[i + 14], i711[i + 15]) );
  }
  i704.bindposes = i710
  var i713 = i705[10]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i713[i + 0]) );
  }
  i704.blendShapes = i712
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i719 = data
  i718.triangles = i719[0]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i725 = data
  i724.name = i725[0]
  var i727 = i725[1]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i727[i + 0]) );
  }
  i724.frames = i726
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i729 = data
  i728.position = new pc.Vec3( i729[0], i729[1], i729[2] )
  i728.scale = new pc.Vec3( i729[3], i729[4], i729[5] )
  i728.rotation = new pc.Quat(i729[6], i729[7], i729[8], i729[9])
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i731 = data
  i730.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i731[0], i730.main)
  i730.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i731[1], i730.colorBySpeed)
  i730.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i731[2], i730.colorOverLifetime)
  i730.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i731[3], i730.emission)
  i730.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i731[4], i730.rotationBySpeed)
  i730.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i731[5], i730.rotationOverLifetime)
  i730.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i731[6], i730.shape)
  i730.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i731[7], i730.sizeBySpeed)
  i730.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i731[8], i730.sizeOverLifetime)
  i730.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i731[9], i730.textureSheetAnimation)
  i730.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i731[10], i730.velocityOverLifetime)
  i730.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i731[11], i730.noise)
  i730.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i731[12], i730.inheritVelocity)
  i730.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i731[13], i730.forceOverLifetime)
  i730.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i731[14], i730.limitVelocityOverLifetime)
  i730.useAutoRandomSeed = !!i731[15]
  i730.randomSeed = i731[16]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i732 = root || new pc.ParticleSystemMain()
  var i733 = data
  i732.duration = i733[0]
  i732.loop = !!i733[1]
  i732.prewarm = !!i733[2]
  i732.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[3], i732.startDelay)
  i732.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[4], i732.startLifetime)
  i732.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[5], i732.startSpeed)
  i732.startSize3D = !!i733[6]
  i732.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[7], i732.startSizeX)
  i732.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[8], i732.startSizeY)
  i732.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[9], i732.startSizeZ)
  i732.startRotation3D = !!i733[10]
  i732.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[11], i732.startRotationX)
  i732.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[12], i732.startRotationY)
  i732.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[13], i732.startRotationZ)
  i732.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i733[14], i732.startColor)
  i732.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[15], i732.gravityModifier)
  i732.simulationSpace = i733[16]
  request.r(i733[17], i733[18], 0, i732, 'customSimulationSpace')
  i732.simulationSpeed = i733[19]
  i732.useUnscaledTime = !!i733[20]
  i732.scalingMode = i733[21]
  i732.playOnAwake = !!i733[22]
  i732.maxParticles = i733[23]
  i732.emitterVelocityMode = i733[24]
  i732.stopAction = i733[25]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i734 = root || new pc.MinMaxCurve()
  var i735 = data
  i734.mode = i735[0]
  i734.curveMin = new pc.AnimationCurve( { keys_flow: i735[1] } )
  i734.curveMax = new pc.AnimationCurve( { keys_flow: i735[2] } )
  i734.curveMultiplier = i735[3]
  i734.constantMin = i735[4]
  i734.constantMax = i735[5]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i736 = root || new pc.MinMaxGradient()
  var i737 = data
  i736.mode = i737[0]
  i736.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i737[1], i736.gradientMin)
  i736.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i737[2], i736.gradientMax)
  i736.colorMin = new pc.Color(i737[3], i737[4], i737[5], i737[6])
  i736.colorMax = new pc.Color(i737[7], i737[8], i737[9], i737[10])
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i739 = data
  i738.mode = i739[0]
  var i741 = i739[1]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i741[i + 0]) );
  }
  i738.colorKeys = i740
  var i743 = i739[2]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i743[i + 0]) );
  }
  i738.alphaKeys = i742
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i744 = root || new pc.ParticleSystemColorBySpeed()
  var i745 = data
  i744.enabled = !!i745[0]
  i744.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i745[1], i744.color)
  i744.range = new pc.Vec2( i745[2], i745[3] )
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i749 = data
  i748.color = new pc.Color(i749[0], i749[1], i749[2], i749[3])
  i748.time = i749[4]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i753 = data
  i752.alpha = i753[0]
  i752.time = i753[1]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemColorOverLifetime()
  var i755 = data
  i754.enabled = !!i755[0]
  i754.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i755[1], i754.color)
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemEmitter()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[1], i756.rateOverTime)
  i756.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[2], i756.rateOverDistance)
  var i759 = i757[3]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i759[i + 0]) );
  }
  i756.bursts = i758
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemBurst()
  var i763 = data
  i762.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[0], i762.count)
  i762.cycleCount = i763[1]
  i762.minCount = i763[2]
  i762.maxCount = i763[3]
  i762.repeatInterval = i763[4]
  i762.time = i763[5]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemRotationBySpeed()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[1], i764.x)
  i764.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[2], i764.y)
  i764.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[3], i764.z)
  i764.separateAxes = !!i765[4]
  i764.range = new pc.Vec2( i765[5], i765[6] )
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemRotationOverLifetime()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[1], i766.x)
  i766.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[2], i766.y)
  i766.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[3], i766.z)
  i766.separateAxes = !!i767[4]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemShape()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.shapeType = i769[1]
  i768.randomDirectionAmount = i769[2]
  i768.sphericalDirectionAmount = i769[3]
  i768.randomPositionAmount = i769[4]
  i768.alignToDirection = !!i769[5]
  i768.radius = i769[6]
  i768.radiusMode = i769[7]
  i768.radiusSpread = i769[8]
  i768.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[9], i768.radiusSpeed)
  i768.radiusThickness = i769[10]
  i768.angle = i769[11]
  i768.length = i769[12]
  i768.boxThickness = new pc.Vec3( i769[13], i769[14], i769[15] )
  i768.meshShapeType = i769[16]
  request.r(i769[17], i769[18], 0, i768, 'mesh')
  request.r(i769[19], i769[20], 0, i768, 'meshRenderer')
  request.r(i769[21], i769[22], 0, i768, 'skinnedMeshRenderer')
  i768.useMeshMaterialIndex = !!i769[23]
  i768.meshMaterialIndex = i769[24]
  i768.useMeshColors = !!i769[25]
  i768.normalOffset = i769[26]
  i768.arc = i769[27]
  i768.arcMode = i769[28]
  i768.arcSpread = i769[29]
  i768.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[30], i768.arcSpeed)
  i768.donutRadius = i769[31]
  i768.position = new pc.Vec3( i769[32], i769[33], i769[34] )
  i768.rotation = new pc.Vec3( i769[35], i769[36], i769[37] )
  i768.scale = new pc.Vec3( i769[38], i769[39], i769[40] )
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemSizeBySpeed()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[1], i770.x)
  i770.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[2], i770.y)
  i770.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[3], i770.z)
  i770.separateAxes = !!i771[4]
  i770.range = new pc.Vec2( i771[5], i771[6] )
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemSizeOverLifetime()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[1], i772.x)
  i772.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[2], i772.y)
  i772.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[3], i772.z)
  i772.separateAxes = !!i773[4]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i775 = data
  i774.enabled = !!i775[0]
  i774.mode = i775[1]
  i774.animation = i775[2]
  i774.numTilesX = i775[3]
  i774.numTilesY = i775[4]
  i774.useRandomRow = !!i775[5]
  i774.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[6], i774.frameOverTime)
  i774.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[7], i774.startFrame)
  i774.cycleCount = i775[8]
  i774.rowIndex = i775[9]
  i774.flipU = i775[10]
  i774.flipV = i775[11]
  i774.spriteCount = i775[12]
  var i777 = i775[13]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i774.sprites = i776
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[1], i780.x)
  i780.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[2], i780.y)
  i780.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[3], i780.z)
  i780.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[4], i780.radial)
  i780.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[5], i780.speedModifier)
  i780.space = i781[6]
  i780.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[7], i780.orbitalX)
  i780.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[8], i780.orbitalY)
  i780.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[9], i780.orbitalZ)
  i780.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[10], i780.orbitalOffsetX)
  i780.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[11], i780.orbitalOffsetY)
  i780.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[12], i780.orbitalOffsetZ)
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemNoise()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.separateAxes = !!i783[1]
  i782.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[2], i782.strengthX)
  i782.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[3], i782.strengthY)
  i782.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[4], i782.strengthZ)
  i782.frequency = i783[5]
  i782.damping = !!i783[6]
  i782.octaveCount = i783[7]
  i782.octaveMultiplier = i783[8]
  i782.octaveScale = i783[9]
  i782.quality = i783[10]
  i782.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[11], i782.scrollSpeed)
  i782.scrollSpeedMultiplier = i783[12]
  i782.remapEnabled = !!i783[13]
  i782.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[14], i782.remapX)
  i782.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[15], i782.remapY)
  i782.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[16], i782.remapZ)
  i782.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[17], i782.positionAmount)
  i782.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[18], i782.rotationAmount)
  i782.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[19], i782.sizeAmount)
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemInheritVelocity()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.mode = i785[1]
  i784.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[2], i784.curve)
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemForceOverLifetime()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[1], i786.x)
  i786.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[2], i786.y)
  i786.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[3], i786.z)
  i786.space = i787[4]
  i786.randomized = !!i787[5]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[1], i788.limit)
  i788.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[2], i788.limitX)
  i788.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[3], i788.limitY)
  i788.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[4], i788.limitZ)
  i788.dampen = i789[5]
  i788.separateAxes = !!i789[6]
  i788.space = i789[7]
  i788.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[8], i788.drag)
  i788.multiplyDragByParticleSize = !!i789[9]
  i788.multiplyDragByParticleVelocity = !!i789[10]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'mesh')
  i790.meshCount = i791[2]
  i790.activeVertexStreamsCount = i791[3]
  i790.alignment = i791[4]
  i790.renderMode = i791[5]
  i790.sortMode = i791[6]
  i790.lengthScale = i791[7]
  i790.velocityScale = i791[8]
  i790.cameraVelocityScale = i791[9]
  i790.normalDirection = i791[10]
  i790.sortingFudge = i791[11]
  i790.minParticleSize = i791[12]
  i790.maxParticleSize = i791[13]
  i790.pivot = new pc.Vec3( i791[14], i791[15], i791[16] )
  request.r(i791[17], i791[18], 0, i790, 'trailMaterial')
  i790.applyActiveColorSpace = !!i791[19]
  i790.enabled = !!i791[20]
  request.r(i791[21], i791[22], 0, i790, 'sharedMaterial')
  var i793 = i791[23]
  var i792 = []
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 2, i792, '')
  }
  i790.sharedMaterials = i792
  i790.receiveShadows = !!i791[24]
  i790.shadowCastingMode = i791[25]
  i790.sortingLayerID = i791[26]
  i790.sortingOrder = i791[27]
  i790.lightmapIndex = i791[28]
  i790.lightmapSceneIndex = i791[29]
  i790.lightmapScaleOffset = new pc.Vec4( i791[30], i791[31], i791[32], i791[33] )
  i790.lightProbeUsage = i791[34]
  i790.reflectionProbeUsage = i791[35]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i797 = data
  i796.name = i797[0]
  i796.tagId = i797[1]
  i796.enabled = !!i797[2]
  i796.isStatic = !!i797[3]
  i796.layer = i797[4]
  return i796
}

Deserializers["Level3_Crown_Playable"] = function (request, data, root) {
  var i798 = root || request.c( 'Level3_Crown_Playable' )
  var i799 = data
  i798.MainZoom = request.d('ZoomPos', i799[0], i798.MainZoom)
  request.r(i799[1], i799[2], 0, i798, 'View1')
  request.r(i799[3], i799[4], 0, i798, 'View2')
  i798.ZoomStep1 = request.d('ZoomPos', i799[5], i798.ZoomStep1)
  request.r(i799[6], i799[7], 0, i798, 'ToolStep1')
  request.r(i799[8], i799[9], 0, i798, 'ToolStep1CameraFollow')
  request.r(i799[10], i799[11], 0, i798, 'Step1Col')
  request.r(i799[12], i799[13], 0, i798, 'DustSR_1')
  i798.ZoomStep2 = request.d('ZoomPos', i799[14], i798.ZoomStep2)
  request.r(i799[15], i799[16], 0, i798, 'ToolStep2')
  request.r(i799[17], i799[18], 0, i798, 'ToolStep2CameraFollow')
  var i801 = i799[19]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 2, i800, '')
  }
  i798.SRsToFadeOut_2 = i800
  request.r(i799[20], i799[21], 0, i798, 'SpraySR_2')
  i798.ZoomStep3 = request.d('ZoomPos', i799[22], i798.ZoomStep3)
  request.r(i799[23], i799[24], 0, i798, 'ToolStep3')
  request.r(i799[25], i799[26], 0, i798, 'ToolStep3CameraFollow')
  request.r(i799[27], i799[28], 0, i798, 'Step3Col')
  request.r(i799[29], i799[30], 0, i798, 'Mix')
  request.r(i799[31], i799[32], 0, i798, 'MixE')
  i798.levelName = i799[33]
  i798.levelReward = i799[34]
  request.r(i799[35], i799[36], 0, i798, 'LevelIcon')
  request.r(i799[37], i799[38], 0, i798, 'Level_BG')
  var i803 = i799[39]
  var i802 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i803.length; i += 2) {
  request.r(i803[i + 0], i803[i + 1], 1, i802, '')
  }
  i798.ToolIcons = i802
  var i805 = i799[40]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i798.AllDrags = i804
  var i807 = i799[41]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 2, i806, '')
  }
  i798.AllSources = i806
  var i809 = i799[42]
  var i808 = []
  for(var i = 0; i < i809.length; i += 2) {
  request.r(i809[i + 0], i809[i + 1], 2, i808, '')
  }
  i798.AllScratches = i808
  i798.stepsDone = i799[43]
  i798.levelNo = i799[44]
  i798.partNo = i799[45]
  return i798
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i810 = root || request.c( 'ZoomPos' )
  var i811 = data
  i810.CameraPos = new pc.Vec3( i811[0], i811[1], i811[2] )
  i810.CameraFOV = i811[3]
  return i810
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i822 = root || request.c( 'PlayableCTA' )
  var i823 = data
  i822.trigger = i823[0]
  i822.afterSeconds = i823[1]
  i822.afterTaps = i823[2]
  request.r(i823[3], i823[4], 0, i822, 'scratchProgress')
  i822.scratchIndex = i823[5]
  i822.progressThreshold = i823[6]
  request.r(i823[7], i823[8], 0, i822, 'watchedTool')
  i822.blockInputOnFire = !!i823[9]
  i822.refireOnEveryTap = !!i823[10]
  i822.refireDelay = i823[11]
  i822.showEndCard = !!i823[12]
  request.r(i823[13], i823[14], 0, i822, 'endCard')
  i822.showEndCardOnProgressTrigger = !!i823[15]
  i822.showEndCardOnToolAppearTrigger = !!i823[16]
  i822.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i823[17], i822.onCtaFired)
  i822.logWhenFired = !!i823[18]
  return i822
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i825 = data
  i824.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i825[0], i824.m_PersistentCalls)
  return i824
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i827 = data
  var i829 = i827[0]
  var i828 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i829.length; i += 1) {
    i828.add(request.d('UnityEngine.Events.PersistentCall', i829[i + 0]));
  }
  i826.m_Calls = i828
  return i826
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'm_Target')
  i832.m_TargetAssemblyTypeName = i833[2]
  i832.m_MethodName = i833[3]
  i832.m_Mode = i833[4]
  i832.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i833[5], i832.m_Arguments)
  i832.m_CallState = i833[6]
  return i832
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i834 = root || request.c( 'PlayableFadeCoverSettings' )
  var i835 = data
  i834.revealDelay = i835[0]
  i834.revealDuration = i835[1]
  return i834
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i836 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'MainCamera')
  i836.RenderType = i837[2]
  request.r(i837[3], i837[4], 0, i836, 'ScratchSurfaceSprite')
  i836.ScratchSurfaceSpriteHasAlpha = !!i837[5]
  i836.MaskProgressCutOffValue = i837[6]
  request.r(i837[7], i837[8], 0, i836, 'EraseTexture')
  i836.EraseTextureScale = new pc.Vec2( i837[9], i837[10] )
  i836.InputEnabled = !!i837[11]
  request.r(i837[12], i837[13], 0, i836, 'Card')
  i836.Mode = i837[14]
  request.r(i837[15], i837[16], 0, i836, 'Progress')
  request.r(i837[17], i837[18], 0, i836, 'MeshCard')
  request.r(i837[19], i837[20], 0, i836, 'SpriteCard')
  request.r(i837[21], i837[22], 0, i836, 'ImageCard')
  request.r(i837[23], i837[24], 0, i836, 'MaskShader')
  request.r(i837[25], i837[26], 0, i836, 'BrushShader')
  request.r(i837[27], i837[28], 0, i836, 'MaskProgressShader')
  request.r(i837[29], i837[30], 0, i836, 'MaskProgressCutOffShader')
  return i836
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i838 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'MainCamera')
  request.r(i839[2], i839[3], 0, i838, 'Surface')
  i838.RenderTextureQuality = i839[4]
  request.r(i839[5], i839[6], 0, i838, 'Eraser')
  request.r(i839[7], i839[8], 0, i838, 'Progress')
  request.r(i839[9], i839[10], 0, i838, 'ScratchSurface')
  request.r(i839[11], i839[12], 0, i838, 'RenderTexture')
  i838.BrushScale = new pc.Vec2( i839[13], i839[14] )
  request.r(i839[15], i839[16], 0, i838, 'ToolTip')
  i838.InputEnabled = !!i839[17]
  i838.IsScratching = !!i839[18]
  i838.useChangingScale = !!i839[19]
  i838.useGivenBrushScale = !!i839[20]
  i838.canSpreadMask = !!i839[21]
  i838.shouldPaintHoles = !!i839[22]
  i838.canRotateTip = !!i839[23]
  i838._mode = i839[24]
  return i838
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i840 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'Card')
  i840.currentProgress = i841[2]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i843 = data
  i842.color = new pc.Color(i843[0], i843[1], i843[2], i843[3])
  request.r(i843[4], i843[5], 0, i842, 'sprite')
  i842.flipX = !!i843[6]
  i842.flipY = !!i843[7]
  i842.drawMode = i843[8]
  i842.size = new pc.Vec2( i843[9], i843[10] )
  i842.tileMode = i843[11]
  i842.adaptiveModeThreshold = i843[12]
  i842.maskInteraction = i843[13]
  i842.spriteSortPoint = i843[14]
  i842.enabled = !!i843[15]
  request.r(i843[16], i843[17], 0, i842, 'sharedMaterial')
  var i845 = i843[18]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i842.sharedMaterials = i844
  i842.receiveShadows = !!i843[19]
  i842.shadowCastingMode = i843[20]
  i842.sortingLayerID = i843[21]
  i842.sortingOrder = i843[22]
  i842.lightmapIndex = i843[23]
  i842.lightmapSceneIndex = i843[24]
  i842.lightmapScaleOffset = new pc.Vec4( i843[25], i843[26], i843[27], i843[28] )
  i842.lightProbeUsage = i843[29]
  i842.reflectionProbeUsage = i843[30]
  return i842
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i846 = root || request.c( 'PlayParticlesOnCollision' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'Target')
  request.r(i847[2], i847[3], 0, i846, 'ParticlePrefab')
  i846.destroyIt = !!i847[4]
  i846.stayAtPlace = !!i847[5]
  i846.disableOnCollision = !!i847[6]
  i846.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i847[7], i846.OnCollisionEvent)
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i849 = data
  i848.radius = i849[0]
  i848.enabled = !!i849[1]
  i848.isTrigger = !!i849[2]
  i848.usedByEffector = !!i849[3]
  i848.density = i849[4]
  i848.offset = new pc.Vec2( i849[5], i849[6] )
  request.r(i849[7], i849[8], 0, i848, 'material')
  return i848
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i850 = root || request.c( 'PlaySfxOnCollision' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'Tip')
  i850.Mode = i851[2]
  request.r(i851[3], i851[4], 0, i850, 'DragInput')
  request.r(i851[5], i851[6], 0, i850, 'Source')
  i850.startVol = i851[7]
  i850.targetVol = i851[8]
  i850.duration = i851[9]
  request.r(i851[10], i851[11], 0, i850, 'Particles')
  i850.isDone = !!i851[12]
  i850.isInArea = !!i851[13]
  i850.isPlaying = !!i851[14]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'clip')
  request.r(i853[2], i853[3], 0, i852, 'outputAudioMixerGroup')
  i852.playOnAwake = !!i853[4]
  i852.loop = !!i853[5]
  i852.time = i853[6]
  i852.volume = i853[7]
  i852.pitch = i853[8]
  i852.enabled = !!i853[9]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i855 = data
  i854.usedByComposite = !!i855[0]
  i854.autoTiling = !!i855[1]
  var i857 = i855[2]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
  var i859 = i857[i + 0]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
    i858.push( new pc.Vec2( i859[i + 0], i859[i + 1] ) );
  }
    i856.push( i858 );
  }
  i854.points = i856
  i854.enabled = !!i855[3]
  i854.isTrigger = !!i855[4]
  i854.usedByEffector = !!i855[5]
  i854.density = i855[6]
  i854.offset = new pc.Vec2( i855[7], i855[8] )
  request.r(i855[9], i855[10], 0, i854, 'material')
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i867 = data
  i866.usedByComposite = !!i867[0]
  i866.autoTiling = !!i867[1]
  i866.size = new pc.Vec2( i867[2], i867[3] )
  i866.edgeRadius = i867[4]
  i866.enabled = !!i867[5]
  i866.isTrigger = !!i867[6]
  i866.usedByEffector = !!i867[7]
  i866.density = i867[8]
  i866.offset = new pc.Vec2( i867[9], i867[10] )
  request.r(i867[11], i867[12], 0, i866, 'material')
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'animatorController')
  request.r(i869[2], i869[3], 0, i868, 'avatar')
  i868.updateMode = i869[4]
  i868.hasTransformHierarchy = !!i869[5]
  i868.applyRootMotion = !!i869[6]
  var i871 = i869[7]
  var i870 = []
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 2, i870, '')
  }
  i868.humanBones = i870
  i868.enabled = !!i869[8]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i875 = data
  i874.frontSortingLayerID = i875[0]
  i874.frontSortingOrder = i875[1]
  i874.backSortingLayerID = i875[2]
  i874.backSortingOrder = i875[3]
  i874.alphaCutoff = i875[4]
  request.r(i875[5], i875[6], 0, i874, 'sprite')
  i874.tileMode = i875[7]
  i874.isCustomRangeActive = !!i875[8]
  i874.spriteSortPoint = i875[9]
  i874.enabled = !!i875[10]
  request.r(i875[11], i875[12], 0, i874, 'sharedMaterial')
  var i877 = i875[13]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i874.sharedMaterials = i876
  i874.receiveShadows = !!i875[14]
  i874.shadowCastingMode = i875[15]
  i874.sortingLayerID = i875[16]
  i874.sortingOrder = i875[17]
  i874.lightmapIndex = i875[18]
  i874.lightmapSceneIndex = i875[19]
  i874.lightmapScaleOffset = new pc.Vec4( i875[20], i875[21], i875[22], i875[23] )
  i874.lightProbeUsage = i875[24]
  i874.reflectionProbeUsage = i875[25]
  return i874
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i878 = root || request.c( 'BasicDrag' )
  var i879 = data
  i878.canDrag = !!i879[0]
  i878.dragByDelta = !!i879[1]
  i878.isDragging = !!i879[2]
  i878.moveWithPointer = !!i879[3]
  i878.canReturn = !!i879[4]
  i878.jumpOnReturn = !!i879[5]
  i878.returnTime = i879[6]
  i878.Tool_Offset = new pc.Vec3( i879[7], i879[8], i879[9] )
  i878.canScaleIncrease = !!i879[10]
  i878.Self_ScaleNew = new pc.Vec3( i879[11], i879[12], i879[13] )
  i878.canRotateOnPick = !!i879[14]
  i878.startRot = new pc.Vec3( i879[15], i879[16], i879[17] )
  i878.newRot = new pc.Vec3( i879[18], i879[19], i879[20] )
  var i881 = i879[21]
  var i880 = []
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 2, i880, '')
  }
  i878.childSprite = i880
  request.r(i879[22], i879[23], 0, i878, 'ToolSelectClip')
  request.r(i879[24], i879[25], 0, i878, 'ToolLoopClip')
  request.r(i879[26], i879[27], 0, i878, 'thisParticles')
  i878.onDragparticle = !!i879[28]
  request.r(i879[29], i879[30], 0, i878, 'dragParticles')
  request.r(i879[31], i879[32], 0, i878, 'anim')
  i878.startPos = new pc.Vec3( i879[33], i879[34], i879[35] )
  i878.startScale = new pc.Vec3( i879[36], i879[37], i879[38] )
  i878.Vibration = !!i879[39]
  i878.isPlacedCannotMove = !!i879[40]
  i878.isObjectMovingWhileDragging = !!i879[41]
  i878.OnMouseDownEvent = request.d('System.Action', i879[42], i878.OnMouseDownEvent)
  i878.OnMouseUpEvent = request.d('System.Action', i879[43], i878.OnMouseUpEvent)
  i878.ProgStartEvent = request.d('System.Action', i879[44], i878.ProgStartEvent)
  i878.ProgEndEvent = request.d('System.Action', i879[45], i878.ProgEndEvent)
  i878.canCallMouseUpWhenGamePaused = !!i879[46]
  i878.ClampX_L = i879[47]
  i878.ClampX_H = i879[48]
  i878.ClampY_L = i879[49]
  i878.ClampY_H = i879[50]
  i878.startOrder = i879[51]
  i878.dontResetItIsInCollider = !!i879[52]
  request.r(i879[53], i879[54], 0, i878, 'thisCollider')
  request.r(i879[55], i879[56], 0, i878, 'thisSR')
  i878.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i879[57], i878.OnMouseDownEventIndependentFromCanDrag)
  return i878
}

Deserializers["System.Action"] = function (request, data, root) {
  var i882 = root || request.c( 'System.Action' )
  var i883 = data
  return i882
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i884 = root || request.c( 'BD_Progress' )
  var i885 = data
  var i887 = i885[0]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('ScratchData', i887[i + 0]) );
  }
  i884.AllScratches = i886
  i884.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i885[1], i884.OnScratchComplete)
  i884.isProgDone = !!i885[2]
  i884.canCallComplete = !!i885[3]
  i884.CollectiveAppear = !!i885[4]
  i884.tipControl = !!i885[5]
  i884.progressControl = !!i885[6]
  request.r(i885[7], i885[8], 0, i884, 'thisDrag')
  i884.CompleteEvent = request.d('System.Action', i885[9], i884.CompleteEvent)
  i884.SubCompleteEvent = request.d('System.Action', i885[10], i884.SubCompleteEvent)
  return i884
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i890 = root || request.c( 'ScratchData' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'ScratchManager')
  i890.scratchLimit = i891[2]
  i890.isComplete = !!i891[3]
  return i890
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'm_ObjectArgument')
  i892.m_ObjectArgumentAssemblyTypeName = i893[2]
  i892.m_IntArgument = i893[3]
  i892.m_FloatArgument = i893[4]
  i892.m_StringArgument = i893[5]
  i892.m_BoolArgument = !!i893[6]
  return i892
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i894 = root || request.c( 'BD_Clamp' )
  var i895 = data
  i894.ClampX_L = i895[0]
  i894.ClampX_H = i895[1]
  i894.ClampY_L = i895[2]
  i894.ClampY_H = i895[3]
  return i894
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i896 = root || request.c( 'BD_ToolRotate' )
  var i897 = data
  i896.startDelay = i897[0]
  request.r(i897[1], i897[2], 0, i896, 'Tool')
  request.r(i897[3], i897[4], 0, i896, 'Clamp')
  request.r(i897[5], i897[6], 0, i896, 'Pivot')
  i896.MinAngle = new pc.Vec3( i897[7], i897[8], i897[9] )
  i896.MaxAngle = new pc.Vec3( i897[10], i897[11], i897[12] )
  i896.rotationSpeed = i897[13]
  return i896
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i898 = root || request.c( 'BD_CameraFollow' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'Tool')
  request.r(i899[2], i899[3], 0, i898, 'Pivot')
  i898.FOV = i899[4]
  i898.Y_L = i899[5]
  i898.Y_H = i899[6]
  i898.X_L = i899[7]
  i898.X_R = i899[8]
  i898.startDelay = i899[9]
  i898.duration = i899[10]
  return i898
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i900 = root || request.c( 'BD_AnimatorDrag' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'BD')
  request.r(i901[2], i901[3], 0, i900, 'anim')
  request.r(i901[4], i901[5], 0, i900, 'Source')
  i900.Vibration = !!i901[6]
  i900.isCompletable = !!i901[7]
  i900.completionThreshold = i901[8]
  i900.OnComplete = request.d('UnityEngine.Events.UnityEvent', i901[9], i900.OnComplete)
  return i900
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'm_RootBone')
  var i905 = i903[2]
  var i904 = []
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 2, i904, '')
  }
  i902.m_BoneTransforms = i904
  i902.m_AlwaysUpdate = !!i903[3]
  i902.m_AutoRebind = !!i903[4]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i907 = data
  i906.bodyType = i907[0]
  request.r(i907[1], i907[2], 0, i906, 'material')
  i906.simulated = !!i907[3]
  i906.useAutoMass = !!i907[4]
  i906.mass = i907[5]
  i906.drag = i907[6]
  i906.angularDrag = i907[7]
  i906.gravityScale = i907[8]
  i906.collisionDetectionMode = i907[9]
  i906.sleepMode = i907[10]
  i906.constraints = i907[11]
  return i906
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i908 = root || request.c( 'BD_SpriteChange' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'BD')
  request.r(i909[2], i909[3], 0, i908, 'SR')
  request.r(i909[4], i909[5], 0, i908, 'Default')
  request.r(i909[6], i909[7], 0, i908, 'Picked')
  i908.resetOnRelease = !!i909[8]
  return i908
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i910 = root || request.c( 'BD_ProgressHelper' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'BD_Progress')
  request.r(i911[2], i911[3], 0, i910, 'fadeSprite')
  i910.fadeIn = !!i911[4]
  return i910
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i912 = root || request.c( 'DestroyObj' )
  var i913 = data
  i912.destroyDelay = i913[0]
  return i912
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i914 = root || request.c( 'MenuLevel' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'menuLevelBtnUpdate')
  var i917 = i915[2]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('MenuLevelData', i917[i + 0]) );
  }
  i914.AllSteps = i916
  request.r(i915[3], i915[4], 0, i914, 'buttonparent')
  var i919 = i915[5]
  var i918 = []
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 2, i918, '')
  }
  i914.BtnsDotweenAnims = i918
  var i921 = i915[6]
  var i920 = []
  for(var i = 0; i < i921.length; i += 2) {
  request.r(i921[i + 0], i921[i + 1], 2, i920, '')
  }
  i914.BtnsCols = i920
  request.r(i915[7], i915[8], 0, i914, 'mainGameView')
  request.r(i915[9], i915[10], 0, i914, 'Storyboard')
  request.r(i915[11], i915[12], 0, i914, 'BgMusic')
  request.r(i915[13], i915[14], 0, i914, 'BgStoryMusic')
  request.r(i915[15], i915[16], 0, i914, 'Hand_Tut1')
  var i923 = i915[17]
  var i922 = []
  for(var i = 0; i < i923.length; i += 2) {
  request.r(i923[i + 0], i923[i + 1], 2, i922, '')
  }
  i914.itemEnable_Onstart = i922
  var i925 = i915[18]
  var i924 = []
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 2, i924, '')
  }
  i914.itemDisable_Onstart = i924
  var i927 = i915[19]
  var i926 = []
  for(var i = 0; i < i927.length; i += 2) {
  request.r(i927[i + 0], i927[i + 1], 2, i926, '')
  }
  i914.itemEnable_Oncomplete = i926
  var i929 = i915[20]
  var i928 = []
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 2, i928, '')
  }
  i914.itemDisable_Oncomplete = i928
  i914.levelKey = i915[21]
  i914.revealDirtyHoldTime = i915[22]
  return i914
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i932 = root || request.c( 'MenuLevelData' )
  var i933 = data
  i932.Name = i933[0]
  request.r(i933[1], i933[2], 0, i932, 'UiBtn')
  request.r(i933[3], i933[4], 0, i932, 'TickBtn')
  request.r(i933[5], i933[6], 0, i932, 'ExclamationIcon')
  var i935 = i933[7]
  var i934 = []
  for(var i = 0; i < i935.length; i += 2) {
  request.r(i935[i + 0], i935[i + 1], 2, i934, '')
  }
  i932.Item_Dirty = i934
  var i937 = i933[8]
  var i936 = []
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 2, i936, '')
  }
  i932.Item_Clean = i936
  request.r(i933[9], i933[10], 0, i932, 'CompleteParticle')
  return i932
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i944 = root || request.c( 'Level_PoseController' )
  var i945 = data
  var i947 = i945[0]
  var i946 = []
  for(var i = 0; i < i947.length; i += 2) {
  request.r(i947[i + 0], i947[i + 1], 2, i946, '')
  }
  i944.itemToShow = i946
  var i949 = i945[1]
  var i948 = []
  for(var i = 0; i < i949.length; i += 2) {
  request.r(i949[i + 0], i949[i + 1], 2, i948, '')
  }
  i944.itemToHide = i948
  i944.stepTarget = i945[2]
  return i944
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i950 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i951 = data
  i950.targetIsSelf = !!i951[0]
  request.r(i951[1], i951[2], 0, i950, 'targetGO')
  i950.tweenTargetIsTargetGO = !!i951[3]
  i950.delay = i951[4]
  i950.duration = i951[5]
  i950.easeType = i951[6]
  i950.easeCurve = new pc.AnimationCurve( { keys_flow: i951[7] } )
  i950.loopType = i951[8]
  i950.loops = i951[9]
  i950.id = i951[10]
  i950.isRelative = !!i951[11]
  i950.isFrom = !!i951[12]
  i950.isIndependentUpdate = !!i951[13]
  i950.autoKill = !!i951[14]
  i950.autoGenerate = !!i951[15]
  i950.isActive = !!i951[16]
  i950.isValid = !!i951[17]
  request.r(i951[18], i951[19], 0, i950, 'target')
  i950.animationType = i951[20]
  i950.targetType = i951[21]
  i950.forcedTargetType = i951[22]
  i950.autoPlay = !!i951[23]
  i950.useTargetAsV3 = !!i951[24]
  i950.endValueFloat = i951[25]
  i950.endValueV3 = new pc.Vec3( i951[26], i951[27], i951[28] )
  i950.endValueV2 = new pc.Vec2( i951[29], i951[30] )
  i950.endValueColor = new pc.Color(i951[31], i951[32], i951[33], i951[34])
  i950.endValueString = i951[35]
  i950.endValueRect = UnityEngine.Rect.MinMaxRect(i951[36], i951[37], i951[38], i951[39])
  request.r(i951[40], i951[41], 0, i950, 'endValueTransform')
  i950.optionalBool0 = !!i951[42]
  i950.optionalBool1 = !!i951[43]
  i950.optionalFloat0 = i951[44]
  i950.optionalInt0 = i951[45]
  i950.optionalRotationMode = i951[46]
  i950.optionalScrambleMode = i951[47]
  i950.optionalShakeRandomnessMode = i951[48]
  i950.optionalString = i951[49]
  i950.updateType = i951[50]
  i950.isSpeedBased = !!i951[51]
  i950.hasOnStart = !!i951[52]
  i950.hasOnPlay = !!i951[53]
  i950.hasOnUpdate = !!i951[54]
  i950.hasOnStepComplete = !!i951[55]
  i950.hasOnComplete = !!i951[56]
  i950.hasOnTweenCreated = !!i951[57]
  i950.hasOnRewind = !!i951[58]
  i950.onStart = request.d('UnityEngine.Events.UnityEvent', i951[59], i950.onStart)
  i950.onPlay = request.d('UnityEngine.Events.UnityEvent', i951[60], i950.onPlay)
  i950.onUpdate = request.d('UnityEngine.Events.UnityEvent', i951[61], i950.onUpdate)
  i950.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i951[62], i950.onStepComplete)
  i950.onComplete = request.d('UnityEngine.Events.UnityEvent', i951[63], i950.onComplete)
  i950.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i951[64], i950.onTweenCreated)
  i950.onRewind = request.d('UnityEngine.Events.UnityEvent', i951[65], i950.onRewind)
  return i950
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i952 = root || request.c( 'SpriteButton' )
  var i953 = data
  i952.isLocked = !!i953[0]
  i952.lockMsg = i953[1]
  i952.onClick = request.d('UnityEngine.Events.UnityEvent', i953[2], i952.onClick)
  i952.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i953[3], i952.onLockedClick)
  i952.isLevelBtnSfx = !!i953[4]
  request.r(i953[5], i953[6], 0, i952, 'pivot')
  i952.reductionChange = i953[7]
  i952.animationDuration = i953[8]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i955 = data
  i954.name = i955[0]
  i954.atlasId = i955[1]
  i954.mipmapCount = i955[2]
  i954.hdr = !!i955[3]
  i954.size = i955[4]
  i954.anisoLevel = i955[5]
  i954.filterMode = i955[6]
  var i957 = i955[7]
  var i956 = []
  for(var i = 0; i < i957.length; i += 4) {
    i956.push( UnityEngine.Rect.MinMaxRect(i957[i + 0], i957[i + 1], i957[i + 2], i957[i + 3]) );
  }
  i954.rects = i956
  i954.wrapU = i955[8]
  i954.wrapV = i955[9]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i961 = data
  i960.name = i961[0]
  i960.index = i961[1]
  i960.startup = !!i961[2]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i963 = data
  i962.aspect = i963[0]
  i962.orthographic = !!i963[1]
  i962.orthographicSize = i963[2]
  i962.backgroundColor = new pc.Color(i963[3], i963[4], i963[5], i963[6])
  i962.nearClipPlane = i963[7]
  i962.farClipPlane = i963[8]
  i962.fieldOfView = i963[9]
  i962.depth = i963[10]
  i962.clearFlags = i963[11]
  i962.cullingMask = i963[12]
  i962.rect = i963[13]
  request.r(i963[14], i963[15], 0, i962, 'targetTexture')
  i962.usePhysicalProperties = !!i963[16]
  i962.focalLength = i963[17]
  i962.sensorSize = new pc.Vec2( i963[18], i963[19] )
  i962.lensShift = new pc.Vec2( i963[20], i963[21] )
  i962.gateFit = i963[22]
  i962.commandBufferCount = i963[23]
  i962.cameraType = i963[24]
  i962.enabled = !!i963[25]
  return i962
}

Deserializers["CameraController"] = function (request, data, root) {
  var i964 = root || request.c( 'CameraController' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'cam')
  i964.defaultPosition = new pc.Vec3( i965[2], i965[3], i965[4] )
  i964.defaultSize = i965[5]
  i964.defaultFOV = i965[6]
  i964.defaultDuration = i965[7]
  i964.defaultEase = i965[8]
  return i964
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i966 = root || request.c( 'MusicSource' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'source')
  return i966
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i968 = root || request.c( 'UI_Manager' )
  var i969 = data
  i968.levelCompleted = !!i969[0]
  i968.isPauseActive = !!i969[1]
  i968.loadIndex = i969[2]
  request.r(i969[3], i969[4], 0, i968, 'removeAdsButton')
  request.r(i969[5], i969[6], 0, i968, 'pauseButton')
  request.r(i969[7], i969[8], 0, i968, 'Fade_Img')
  request.r(i969[9], i969[10], 0, i968, 'TopBarAnim')
  request.r(i969[11], i969[12], 0, i968, 'MainPanel')
  request.r(i969[13], i969[14], 0, i968, 'PausePanel')
  request.r(i969[15], i969[16], 0, i968, 'PausePopUp')
  request.r(i969[17], i969[18], 0, i968, 'PauseCanvasGroup')
  request.r(i969[19], i969[20], 0, i968, 'RateUsPanel')
  request.r(i969[21], i969[22], 0, i968, 'RateUsPopUp')
  request.r(i969[23], i969[24], 0, i968, 'RemoveAdsPanel')
  request.r(i969[25], i969[26], 0, i968, 'RemoveAdsPopUp')
  request.r(i969[27], i969[28], 0, i968, 'RemoveAdsCanvasGroup')
  var i971 = i969[29]
  var i970 = []
  for(var i = 0; i < i971.length; i += 2) {
  request.r(i971[i + 0], i971[i + 1], 2, i970, '')
  }
  i968.RemoveAdsAnims = i970
  request.r(i969[30], i969[31], 0, i968, 'CompletePanel')
  request.r(i969[32], i969[33], 0, i968, 'LevelIcon')
  request.r(i969[34], i969[35], 0, i968, 'CompleteParticles')
  request.r(i969[36], i969[37], 0, i968, 'progressBar')
  request.r(i969[38], i969[39], 0, i968, 'progressText')
  request.r(i969[40], i969[41], 0, i968, 'toolIcon1')
  request.r(i969[42], i969[43], 0, i968, 'toolIcon2')
  request.r(i969[44], i969[45], 0, i968, 'toolIcon3')
  request.r(i969[46], i969[47], 0, i968, 'target1')
  request.r(i969[48], i969[49], 0, i968, 'target2')
  i968.toolMoveDuration = i969[50]
  i968.currentIndex = i969[51]
  var i973 = i969[52]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 1, i972, '')
  }
  i968.allTools = i972
  request.r(i969[53], i969[54], 0, i968, 'clockProgress')
  request.r(i969[55], i969[56], 0, i968, 'clockProgressFill')
  request.r(i969[57], i969[58], 0, i968, 'clockAudio')
  i968.moveDistance = i969[59]
  i968.animationDuration = i969[60]
  i968.greyBgChildName = i969[61]
  i968.pushOffset = i969[62]
  return i968
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i974 = root || request.c( 'GameManagerPlayable' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'endParticles')
  request.r(i975[2], i975[3], 0, i974, 'stepCompleteParticles')
  request.r(i975[4], i975[5], 0, i974, 'DefaultMat')
  request.r(i975[6], i975[7], 0, i974, 'BG_Music')
  request.r(i975[8], i975[9], 0, i974, 'restoreEffectShader')
  request.r(i975[10], i975[11], 0, i974, 'stickerEffectShader')
  i974.isComplete = !!i975[12]
  i974.isPaused = !!i975[13]
  request.r(i975[14], i975[15], 0, i974, 'currentLevel')
  i974.startLevelOnPlay = !!i975[16]
  i974.currentLevelNo = i975[17]
  return i974
}

Deserializers["AudioController"] = function (request, data, root) {
  var i976 = root || request.c( 'AudioController' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'MainMixer')
  request.r(i977[2], i977[3], 0, i976, 'UiClick')
  request.r(i977[4], i977[5], 0, i976, 'UiClickSource')
  var i979 = i977[6]
  var i978 = []
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 2, i978, '')
  }
  i976.SfxSources = i978
  var i981 = i977[7]
  var i980 = []
  for(var i = 0; i < i981.length; i += 2) {
  request.r(i981[i + 0], i981[i + 1], 2, i980, '')
  }
  i976.AllClips = i980
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i985 = data
  i984.pivot = new pc.Vec2( i985[0], i985[1] )
  i984.anchorMin = new pc.Vec2( i985[2], i985[3] )
  i984.anchorMax = new pc.Vec2( i985[4], i985[5] )
  i984.sizeDelta = new pc.Vec2( i985[6], i985[7] )
  i984.anchoredPosition3D = new pc.Vec3( i985[8], i985[9], i985[10] )
  i984.rotation = new pc.Quat(i985[11], i985[12], i985[13], i985[14])
  i984.scale = new pc.Vec3( i985[15], i985[16], i985[17] )
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i987 = data
  i986.planeDistance = i987[0]
  i986.referencePixelsPerUnit = i987[1]
  i986.isFallbackOverlay = !!i987[2]
  i986.renderMode = i987[3]
  i986.renderOrder = i987[4]
  i986.sortingLayerName = i987[5]
  i986.sortingOrder = i987[6]
  i986.scaleFactor = i987[7]
  request.r(i987[8], i987[9], 0, i986, 'worldCamera')
  i986.overrideSorting = !!i987[10]
  i986.pixelPerfect = !!i987[11]
  i986.targetDisplay = i987[12]
  i986.overridePixelPerfect = !!i987[13]
  i986.enabled = !!i987[14]
  return i986
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i989 = data
  i988.m_UiScaleMode = i989[0]
  i988.m_ReferencePixelsPerUnit = i989[1]
  i988.m_ScaleFactor = i989[2]
  i988.m_ReferenceResolution = new pc.Vec2( i989[3], i989[4] )
  i988.m_ScreenMatchMode = i989[5]
  i988.m_MatchWidthOrHeight = i989[6]
  i988.m_PhysicalUnit = i989[7]
  i988.m_FallbackScreenDPI = i989[8]
  i988.m_DefaultSpriteDPI = i989[9]
  i988.m_DynamicPixelsPerUnit = i989[10]
  i988.m_PresetInfoIsWorld = !!i989[11]
  return i988
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i990 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i991 = data
  i990.m_IgnoreReversedGraphics = !!i991[0]
  i990.m_BlockingObjects = i991[1]
  i990.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i991[2] )
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i993 = data
  i992.cullTransparentMesh = !!i993[0]
  return i992
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.UI.Image' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'm_Sprite')
  i994.m_Type = i995[2]
  i994.m_PreserveAspect = !!i995[3]
  i994.m_FillCenter = !!i995[4]
  i994.m_FillMethod = i995[5]
  i994.m_FillAmount = i995[6]
  i994.m_FillClockwise = !!i995[7]
  i994.m_FillOrigin = i995[8]
  i994.m_UseSpriteMesh = !!i995[9]
  i994.m_PixelsPerUnitMultiplier = i995[10]
  request.r(i995[11], i995[12], 0, i994, 'm_Material')
  i994.m_Maskable = !!i995[13]
  i994.m_Color = new pc.Color(i995[14], i995[15], i995[16], i995[17])
  i994.m_RaycastTarget = !!i995[18]
  i994.m_RaycastPadding = new pc.Vec4( i995[19], i995[20], i995[21], i995[22] )
  return i994
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.UI.Text' )
  var i997 = data
  i996.m_FontData = request.d('UnityEngine.UI.FontData', i997[0], i996.m_FontData)
  i996.m_Text = i997[1]
  request.r(i997[2], i997[3], 0, i996, 'm_Material')
  i996.m_Maskable = !!i997[4]
  i996.m_Color = new pc.Color(i997[5], i997[6], i997[7], i997[8])
  i996.m_RaycastTarget = !!i997[9]
  i996.m_RaycastPadding = new pc.Vec4( i997[10], i997[11], i997[12], i997[13] )
  return i996
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i998 = root || request.c( 'UnityEngine.UI.FontData' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'm_Font')
  i998.m_FontSize = i999[2]
  i998.m_FontStyle = i999[3]
  i998.m_BestFit = !!i999[4]
  i998.m_MinSize = i999[5]
  i998.m_MaxSize = i999[6]
  i998.m_Alignment = i999[7]
  i998.m_AlignByGeometry = !!i999[8]
  i998.m_RichText = !!i999[9]
  i998.m_HorizontalOverflow = i999[10]
  i998.m_VerticalOverflow = i999[11]
  i998.m_LineSpacing = i999[12]
  return i998
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.UI.Button' )
  var i1001 = data
  i1000.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1001[0], i1000.m_OnClick)
  i1000.m_Navigation = request.d('UnityEngine.UI.Navigation', i1001[1], i1000.m_Navigation)
  i1000.m_Transition = i1001[2]
  i1000.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1001[3], i1000.m_Colors)
  i1000.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1001[4], i1000.m_SpriteState)
  i1000.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1001[5], i1000.m_AnimationTriggers)
  i1000.m_Interactable = !!i1001[6]
  request.r(i1001[7], i1001[8], 0, i1000, 'm_TargetGraphic')
  return i1000
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1003 = data
  i1002.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1003[0], i1002.m_PersistentCalls)
  return i1002
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1005 = data
  i1004.m_Mode = i1005[0]
  i1004.m_WrapAround = !!i1005[1]
  request.r(i1005[2], i1005[3], 0, i1004, 'm_SelectOnUp')
  request.r(i1005[4], i1005[5], 0, i1004, 'm_SelectOnDown')
  request.r(i1005[6], i1005[7], 0, i1004, 'm_SelectOnLeft')
  request.r(i1005[8], i1005[9], 0, i1004, 'm_SelectOnRight')
  return i1004
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1007 = data
  i1006.m_NormalColor = new pc.Color(i1007[0], i1007[1], i1007[2], i1007[3])
  i1006.m_HighlightedColor = new pc.Color(i1007[4], i1007[5], i1007[6], i1007[7])
  i1006.m_PressedColor = new pc.Color(i1007[8], i1007[9], i1007[10], i1007[11])
  i1006.m_SelectedColor = new pc.Color(i1007[12], i1007[13], i1007[14], i1007[15])
  i1006.m_DisabledColor = new pc.Color(i1007[16], i1007[17], i1007[18], i1007[19])
  i1006.m_ColorMultiplier = i1007[20]
  i1006.m_FadeDuration = i1007[21]
  return i1006
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'm_HighlightedSprite')
  request.r(i1009[2], i1009[3], 0, i1008, 'm_PressedSprite')
  request.r(i1009[4], i1009[5], 0, i1008, 'm_SelectedSprite')
  request.r(i1009[6], i1009[7], 0, i1008, 'm_DisabledSprite')
  return i1008
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1011 = data
  i1010.m_NormalTrigger = i1011[0]
  i1010.m_HighlightedTrigger = i1011[1]
  i1010.m_PressedTrigger = i1011[2]
  i1010.m_SelectedTrigger = i1011[3]
  i1010.m_DisabledTrigger = i1011[4]
  return i1010
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i1012 = root || request.c( 'PlayableHudRuntime' )
  var i1013 = data
  return i1012
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'm_FirstSelected')
  i1014.m_sendNavigationEvents = !!i1015[2]
  i1014.m_DragThreshold = i1015[3]
  return i1014
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1017 = data
  i1016.m_HorizontalAxis = i1017[0]
  i1016.m_VerticalAxis = i1017[1]
  i1016.m_SubmitButton = i1017[2]
  i1016.m_CancelButton = i1017[3]
  i1016.m_InputActionsPerSecond = i1017[4]
  i1016.m_RepeatDelay = i1017[5]
  i1016.m_ForceModuleActive = !!i1017[6]
  i1016.m_SendPointerHoverToParent = !!i1017[7]
  return i1016
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i1018 = root || request.c( 'PlayableRouter' )
  var i1019 = data
  var i1021 = i1019[0]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 2, i1020, '')
  }
  i1018.menuObjects = i1020
  var i1023 = i1019[1]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 2) {
  request.r(i1023[i + 0], i1023[i + 1], 2, i1022, '')
  }
  i1018.gameplayObjects = i1022
  var i1025 = i1019[2]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('PlayableRouter+SubLevelSlot', i1025[i + 0]) );
  }
  i1018.subLevels = i1024
  i1018.fadeDuration = i1019[3]
  i1018.lockedMessage = i1019[4]
  i1018.lockedTapsToCTA = i1019[5]
  return i1018
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i1028 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'button')
  request.r(i1029[2], i1029[3], 0, i1028, 'level')
  return i1028
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i1030 = root || request.c( 'ToastManager' )
  var i1031 = data
  request.r(i1031[0], i1031[1], 0, i1030, 'toastPanel')
  request.r(i1031[2], i1031[3], 0, i1030, 'toastPopup')
  request.r(i1031[4], i1031[5], 0, i1030, 'canvasGroup')
  request.r(i1031[6], i1031[7], 0, i1030, 'toastText')
  i1030.startY = i1031[8]
  i1030.visibleY = i1031[9]
  i1030.endY = i1031[10]
  i1030.animationTime = i1031[11]
  i1030.animationTimeUp = i1031[12]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1033 = data
  i1032.m_Alpha = i1033[0]
  i1032.m_Interactable = !!i1033[1]
  i1032.m_BlocksRaycasts = !!i1033[2]
  i1032.m_IgnoreParentGroups = !!i1033[3]
  i1032.enabled = !!i1033[4]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1035 = data
  i1034.ambientIntensity = i1035[0]
  i1034.reflectionIntensity = i1035[1]
  i1034.ambientMode = i1035[2]
  i1034.ambientLight = new pc.Color(i1035[3], i1035[4], i1035[5], i1035[6])
  i1034.ambientSkyColor = new pc.Color(i1035[7], i1035[8], i1035[9], i1035[10])
  i1034.ambientGroundColor = new pc.Color(i1035[11], i1035[12], i1035[13], i1035[14])
  i1034.ambientEquatorColor = new pc.Color(i1035[15], i1035[16], i1035[17], i1035[18])
  i1034.fogColor = new pc.Color(i1035[19], i1035[20], i1035[21], i1035[22])
  i1034.fogEndDistance = i1035[23]
  i1034.fogStartDistance = i1035[24]
  i1034.fogDensity = i1035[25]
  i1034.fog = !!i1035[26]
  request.r(i1035[27], i1035[28], 0, i1034, 'skybox')
  i1034.fogMode = i1035[29]
  var i1037 = i1035[30]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1037[i + 0]) );
  }
  i1034.lightmaps = i1036
  i1034.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1035[31], i1034.lightProbes)
  i1034.lightmapsMode = i1035[32]
  i1034.mixedBakeMode = i1035[33]
  i1034.environmentLightingMode = i1035[34]
  i1034.ambientProbe = new pc.SphericalHarmonicsL2(i1035[35])
  request.r(i1035[36], i1035[37], 0, i1034, 'customReflection')
  request.r(i1035[38], i1035[39], 0, i1034, 'defaultReflection')
  i1034.defaultReflectionMode = i1035[40]
  i1034.defaultReflectionResolution = i1035[41]
  i1034.sunLightObjectId = i1035[42]
  i1034.pixelLightCount = i1035[43]
  i1034.defaultReflectionHDR = !!i1035[44]
  i1034.hasLightDataAsset = !!i1035[45]
  i1034.hasManualGenerate = !!i1035[46]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'lightmapColor')
  request.r(i1041[2], i1041[3], 0, i1040, 'lightmapDirection')
  request.r(i1041[4], i1041[5], 0, i1040, 'shadowMask')
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1042 = root || new UnityEngine.LightProbes()
  var i1043 = data
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1051 = data
  var i1053 = i1051[0]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1053[i + 0]));
  }
  i1050.ShaderCompilationErrors = i1052
  i1050.name = i1051[1]
  i1050.guid = i1051[2]
  var i1055 = i1051[3]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( i1055[i + 0] );
  }
  i1050.shaderDefinedKeywords = i1054
  var i1057 = i1051[4]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1057[i + 0]) );
  }
  i1050.passes = i1056
  var i1059 = i1051[5]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1059[i + 0]) );
  }
  i1050.usePasses = i1058
  var i1061 = i1051[6]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1061[i + 0]) );
  }
  i1050.defaultParameterValues = i1060
  request.r(i1051[7], i1051[8], 0, i1050, 'unityFallbackShader')
  i1050.readDepth = !!i1051[9]
  i1050.hasDepthOnlyPass = !!i1051[10]
  i1050.isCreatedByShaderGraph = !!i1051[11]
  i1050.disableBatching = !!i1051[12]
  i1050.compiled = !!i1051[13]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1065 = data
  i1064.shaderName = i1065[0]
  i1064.errorMessage = i1065[1]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1070 = root || new pc.UnityShaderPass()
  var i1071 = data
  i1070.id = i1071[0]
  i1070.subShaderIndex = i1071[1]
  i1070.name = i1071[2]
  i1070.passType = i1071[3]
  i1070.grabPassTextureName = i1071[4]
  i1070.usePass = !!i1071[5]
  i1070.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[6], i1070.zTest)
  i1070.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[7], i1070.zWrite)
  i1070.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[8], i1070.culling)
  i1070.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1071[9], i1070.blending)
  i1070.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1071[10], i1070.alphaBlending)
  i1070.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[11], i1070.colorWriteMask)
  i1070.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[12], i1070.offsetUnits)
  i1070.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[13], i1070.offsetFactor)
  i1070.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[14], i1070.stencilRef)
  i1070.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[15], i1070.stencilReadMask)
  i1070.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1071[16], i1070.stencilWriteMask)
  i1070.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1071[17], i1070.stencilOp)
  i1070.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1071[18], i1070.stencilOpFront)
  i1070.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1071[19], i1070.stencilOpBack)
  var i1073 = i1071[20]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1073[i + 0]) );
  }
  i1070.tags = i1072
  var i1075 = i1071[21]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( i1075[i + 0] );
  }
  i1070.passDefinedKeywords = i1074
  var i1077 = i1071[22]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1077[i + 0]) );
  }
  i1070.passDefinedKeywordGroups = i1076
  var i1079 = i1071[23]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1079[i + 0]) );
  }
  i1070.variants = i1078
  var i1081 = i1071[24]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1081[i + 0]) );
  }
  i1070.excludedVariants = i1080
  i1070.hasDepthReader = !!i1071[25]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1083 = data
  i1082.val = i1083[0]
  i1082.name = i1083[1]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1085 = data
  i1084.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[0], i1084.src)
  i1084.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[1], i1084.dst)
  i1084.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1085[2], i1084.op)
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1087 = data
  i1086.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[0], i1086.pass)
  i1086.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[1], i1086.fail)
  i1086.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[2], i1086.zFail)
  i1086.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[3], i1086.comp)
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1091 = data
  i1090.name = i1091[0]
  i1090.value = i1091[1]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1095 = data
  var i1097 = i1095[0]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( i1097[i + 0] );
  }
  i1094.keywords = i1096
  i1094.hasDiscard = !!i1095[1]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1101 = data
  i1100.passId = i1101[0]
  i1100.subShaderIndex = i1101[1]
  var i1103 = i1101[2]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( i1103[i + 0] );
  }
  i1100.keywords = i1102
  i1100.vertexProgram = i1101[3]
  i1100.fragmentProgram = i1101[4]
  i1100.exportedForWebGl2 = !!i1101[5]
  i1100.readDepth = !!i1101[6]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1107 = data
  request.r(i1107[0], i1107[1], 0, i1106, 'shader')
  i1106.pass = i1107[2]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1111 = data
  i1110.name = i1111[0]
  i1110.type = i1111[1]
  i1110.value = new pc.Vec4( i1111[2], i1111[3], i1111[4], i1111[5] )
  i1110.textureValue = i1111[6]
  i1110.shaderPropertyFlag = i1111[7]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1113 = data
  i1112.name = i1113[0]
  request.r(i1113[1], i1113[2], 0, i1112, 'texture')
  i1112.aabb = i1113[3]
  i1112.vertices = i1113[4]
  i1112.triangles = i1113[5]
  i1112.textureRect = UnityEngine.Rect.MinMaxRect(i1113[6], i1113[7], i1113[8], i1113[9])
  i1112.packedRect = UnityEngine.Rect.MinMaxRect(i1113[10], i1113[11], i1113[12], i1113[13])
  i1112.border = new pc.Vec4( i1113[14], i1113[15], i1113[16], i1113[17] )
  i1112.transparency = i1113[18]
  i1112.bounds = i1113[19]
  i1112.pixelsPerUnit = i1113[20]
  i1112.textureWidth = i1113[21]
  i1112.textureHeight = i1113[22]
  i1112.nativeSize = new pc.Vec2( i1113[23], i1113[24] )
  i1112.pivot = new pc.Vec2( i1113[25], i1113[26] )
  i1112.textureRectOffset = new pc.Vec2( i1113[27], i1113[28] )
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1115 = data
  i1114.name = i1115[0]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1117 = data
  i1116.name = i1117[0]
  i1116.wrapMode = i1117[1]
  i1116.isLooping = !!i1117[2]
  i1116.length = i1117[3]
  var i1119 = i1117[4]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1119[i + 0]) );
  }
  i1116.curves = i1118
  var i1121 = i1117[5]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1121[i + 0]) );
  }
  i1116.events = i1120
  i1116.halfPrecision = !!i1117[6]
  i1116._frameRate = i1117[7]
  i1116.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1117[8], i1116.localBounds)
  i1116.hasMuscleCurves = !!i1117[9]
  var i1123 = i1117[10]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( i1123[i + 0] );
  }
  i1116.clipMuscleConstant = i1122
  i1116.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1117[11], i1116.clipBindingConstant)
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1127 = data
  i1126.path = i1127[0]
  i1126.hash = i1127[1]
  i1126.componentType = i1127[2]
  i1126.property = i1127[3]
  i1126.keys = i1127[4]
  var i1129 = i1127[5]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1129[i + 0]) );
  }
  i1126.objectReferenceKeys = i1128
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1133 = data
  i1132.time = i1133[0]
  request.r(i1133[1], i1133[2], 0, i1132, 'value')
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1137 = data
  i1136.functionName = i1137[0]
  i1136.floatParameter = i1137[1]
  i1136.intParameter = i1137[2]
  i1136.stringParameter = i1137[3]
  request.r(i1137[4], i1137[5], 0, i1136, 'objectReferenceParameter')
  i1136.time = i1137[6]
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1139 = data
  i1138.center = new pc.Vec3( i1139[0], i1139[1], i1139[2] )
  i1138.extends = new pc.Vec3( i1139[3], i1139[4], i1139[5] )
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1143 = data
  var i1145 = i1143[0]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( i1145[i + 0] );
  }
  i1142.genericBindings = i1144
  var i1147 = i1143[1]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( i1147[i + 0] );
  }
  i1142.pptrCurveMapping = i1146
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1149 = data
  i1148.name = i1149[0]
  i1148.ascent = i1149[1]
  i1148.originalLineHeight = i1149[2]
  i1148.fontSize = i1149[3]
  var i1151 = i1149[4]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1151[i + 0]) );
  }
  i1148.characterInfo = i1150
  request.r(i1149[5], i1149[6], 0, i1148, 'texture')
  i1148.originalFontSize = i1149[7]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1155 = data
  i1154.index = i1155[0]
  i1154.advance = i1155[1]
  i1154.bearing = i1155[2]
  i1154.glyphWidth = i1155[3]
  i1154.glyphHeight = i1155[4]
  i1154.minX = i1155[5]
  i1154.maxX = i1155[6]
  i1154.minY = i1155[7]
  i1154.maxY = i1155[8]
  i1154.uvBottomLeftX = i1155[9]
  i1154.uvBottomLeftY = i1155[10]
  i1154.uvBottomRightX = i1155[11]
  i1154.uvBottomRightY = i1155[12]
  i1154.uvTopLeftX = i1155[13]
  i1154.uvTopLeftY = i1155[14]
  i1154.uvTopRightX = i1155[15]
  i1154.uvTopRightY = i1155[16]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1157 = data
  i1156.name = i1157[0]
  var i1159 = i1157[1]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1159[i + 0]) );
  }
  i1156.layers = i1158
  var i1161 = i1157[2]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1161[i + 0]) );
  }
  i1156.parameters = i1160
  i1156.animationClips = i1157[3]
  i1156.avatarUnsupported = i1157[4]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1165 = data
  i1164.name = i1165[0]
  i1164.defaultWeight = i1165[1]
  i1164.blendingMode = i1165[2]
  i1164.avatarMask = i1165[3]
  i1164.syncedLayerIndex = i1165[4]
  i1164.syncedLayerAffectsTiming = !!i1165[5]
  i1164.syncedLayers = i1165[6]
  i1164.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1165[7], i1164.stateMachine)
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1167 = data
  i1166.id = i1167[0]
  i1166.name = i1167[1]
  i1166.path = i1167[2]
  var i1169 = i1167[3]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1169[i + 0]) );
  }
  i1166.states = i1168
  var i1171 = i1167[4]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1171[i + 0]) );
  }
  i1166.machines = i1170
  var i1173 = i1167[5]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1173[i + 0]) );
  }
  i1166.entryStateTransitions = i1172
  var i1175 = i1167[6]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1175[i + 0]) );
  }
  i1166.exitStateTransitions = i1174
  var i1177 = i1167[7]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1177[i + 0]) );
  }
  i1166.anyStateTransitions = i1176
  i1166.defaultStateId = i1167[8]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1181 = data
  i1180.id = i1181[0]
  i1180.name = i1181[1]
  i1180.cycleOffset = i1181[2]
  i1180.cycleOffsetParameter = i1181[3]
  i1180.cycleOffsetParameterActive = !!i1181[4]
  i1180.mirror = !!i1181[5]
  i1180.mirrorParameter = i1181[6]
  i1180.mirrorParameterActive = !!i1181[7]
  i1180.motionId = i1181[8]
  i1180.nameHash = i1181[9]
  i1180.fullPathHash = i1181[10]
  i1180.speed = i1181[11]
  i1180.speedParameter = i1181[12]
  i1180.speedParameterActive = !!i1181[13]
  i1180.tag = i1181[14]
  i1180.tagHash = i1181[15]
  i1180.writeDefaultValues = !!i1181[16]
  var i1183 = i1181[17]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 2) {
  request.r(i1183[i + 0], i1183[i + 1], 2, i1182, '')
  }
  i1180.behaviours = i1182
  var i1185 = i1181[18]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1185[i + 0]) );
  }
  i1180.transitions = i1184
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1191 = data
  i1190.fullPath = i1191[0]
  i1190.canTransitionToSelf = !!i1191[1]
  i1190.duration = i1191[2]
  i1190.exitTime = i1191[3]
  i1190.hasExitTime = !!i1191[4]
  i1190.hasFixedDuration = !!i1191[5]
  i1190.interruptionSource = i1191[6]
  i1190.offset = i1191[7]
  i1190.orderedInterruption = !!i1191[8]
  i1190.destinationStateId = i1191[9]
  i1190.isExit = !!i1191[10]
  i1190.mute = !!i1191[11]
  i1190.solo = !!i1191[12]
  var i1193 = i1191[13]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1193[i + 0]) );
  }
  i1190.conditions = i1192
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1199 = data
  i1198.destinationStateId = i1199[0]
  i1198.isExit = !!i1199[1]
  i1198.mute = !!i1199[2]
  i1198.solo = !!i1199[3]
  var i1201 = i1199[4]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1201[i + 0]) );
  }
  i1198.conditions = i1200
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1205 = data
  i1204.mode = i1205[0]
  i1204.parameter = i1205[1]
  i1204.threshold = i1205[2]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1209 = data
  i1208.defaultBool = !!i1209[0]
  i1208.defaultFloat = i1209[1]
  i1208.defaultInt = i1209[2]
  i1208.name = i1209[3]
  i1208.nameHash = i1209[4]
  i1208.type = i1209[5]
  return i1208
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1210 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1211 = data
  i1210.useSafeMode = !!i1211[0]
  i1210.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1211[1], i1210.safeModeOptions)
  i1210.timeScale = i1211[2]
  i1210.unscaledTimeScale = i1211[3]
  i1210.useSmoothDeltaTime = !!i1211[4]
  i1210.maxSmoothUnscaledTime = i1211[5]
  i1210.rewindCallbackMode = i1211[6]
  i1210.showUnityEditorReport = !!i1211[7]
  i1210.logBehaviour = i1211[8]
  i1210.drawGizmos = !!i1211[9]
  i1210.defaultRecyclable = !!i1211[10]
  i1210.defaultAutoPlay = i1211[11]
  i1210.defaultUpdateType = i1211[12]
  i1210.defaultTimeScaleIndependent = !!i1211[13]
  i1210.defaultEaseType = i1211[14]
  i1210.defaultEaseOvershootOrAmplitude = i1211[15]
  i1210.defaultEasePeriod = i1211[16]
  i1210.defaultAutoKill = !!i1211[17]
  i1210.defaultLoopType = i1211[18]
  i1210.debugMode = !!i1211[19]
  i1210.debugStoreTargetId = !!i1211[20]
  i1210.showPreviewPanel = !!i1211[21]
  i1210.storeSettingsLocation = i1211[22]
  i1210.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1211[23], i1210.modules)
  i1210.createASMDEF = !!i1211[24]
  i1210.showPlayingTweens = !!i1211[25]
  i1210.showPausedTweens = !!i1211[26]
  return i1210
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1212 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1213 = data
  i1212.logBehaviour = i1213[0]
  i1212.nestedTweenFailureBehaviour = i1213[1]
  return i1212
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1214 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1215 = data
  i1214.showPanel = !!i1215[0]
  i1214.audioEnabled = !!i1215[1]
  i1214.physicsEnabled = !!i1215[2]
  i1214.physics2DEnabled = !!i1215[3]
  i1214.spriteEnabled = !!i1215[4]
  i1214.uiEnabled = !!i1215[5]
  i1214.textMeshProEnabled = !!i1215[6]
  i1214.tk2DEnabled = !!i1215[7]
  i1214.deAudioEnabled = !!i1215[8]
  i1214.deUnityExtendedEnabled = !!i1215[9]
  i1214.epoOutlineEnabled = !!i1215[10]
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1217 = data
  var i1219 = i1217[0]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1219[i + 0]) );
  }
  i1216.files = i1218
  i1216.componentToPrefabIds = i1217[1]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1223 = data
  i1222.path = i1223[0]
  request.r(i1223[1], i1223[2], 0, i1222, 'unityObject')
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1225 = data
  var i1227 = i1225[0]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1227[i + 0]) );
  }
  i1224.scriptsExecutionOrder = i1226
  var i1229 = i1225[1]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1229[i + 0]) );
  }
  i1224.sortingLayers = i1228
  var i1231 = i1225[2]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1231[i + 0]) );
  }
  i1224.cullingLayers = i1230
  i1224.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1225[3], i1224.timeSettings)
  i1224.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1225[4], i1224.physicsSettings)
  i1224.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1225[5], i1224.physics2DSettings)
  i1224.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1225[6], i1224.qualitySettings)
  i1224.enableRealtimeShadows = !!i1225[7]
  i1224.enableAutoInstancing = !!i1225[8]
  i1224.enableStaticBatching = !!i1225[9]
  i1224.enableDynamicBatching = !!i1225[10]
  i1224.usePreservativeDynamicBatching = !!i1225[11]
  i1224.lightmapEncodingQuality = i1225[12]
  i1224.desiredColorSpace = i1225[13]
  var i1233 = i1225[14]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( i1233[i + 0] );
  }
  i1224.allTags = i1232
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1237 = data
  i1236.name = i1237[0]
  i1236.value = i1237[1]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1241 = data
  i1240.id = i1241[0]
  i1240.name = i1241[1]
  i1240.value = i1241[2]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1245 = data
  i1244.id = i1245[0]
  i1244.name = i1245[1]
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1247 = data
  i1246.fixedDeltaTime = i1247[0]
  i1246.maximumDeltaTime = i1247[1]
  i1246.timeScale = i1247[2]
  i1246.maximumParticleTimestep = i1247[3]
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1249 = data
  i1248.gravity = new pc.Vec3( i1249[0], i1249[1], i1249[2] )
  i1248.defaultSolverIterations = i1249[3]
  i1248.bounceThreshold = i1249[4]
  i1248.autoSyncTransforms = !!i1249[5]
  i1248.autoSimulation = !!i1249[6]
  var i1251 = i1249[7]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1251[i + 0]) );
  }
  i1248.collisionMatrix = i1250
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1255 = data
  i1254.enabled = !!i1255[0]
  i1254.layerId = i1255[1]
  i1254.otherLayerId = i1255[2]
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1257 = data
  request.r(i1257[0], i1257[1], 0, i1256, 'material')
  i1256.gravity = new pc.Vec2( i1257[2], i1257[3] )
  i1256.positionIterations = i1257[4]
  i1256.velocityIterations = i1257[5]
  i1256.velocityThreshold = i1257[6]
  i1256.maxLinearCorrection = i1257[7]
  i1256.maxAngularCorrection = i1257[8]
  i1256.maxTranslationSpeed = i1257[9]
  i1256.maxRotationSpeed = i1257[10]
  i1256.baumgarteScale = i1257[11]
  i1256.baumgarteTOIScale = i1257[12]
  i1256.timeToSleep = i1257[13]
  i1256.linearSleepTolerance = i1257[14]
  i1256.angularSleepTolerance = i1257[15]
  i1256.defaultContactOffset = i1257[16]
  i1256.autoSimulation = !!i1257[17]
  i1256.queriesHitTriggers = !!i1257[18]
  i1256.queriesStartInColliders = !!i1257[19]
  i1256.callbacksOnDisable = !!i1257[20]
  i1256.reuseCollisionCallbacks = !!i1257[21]
  i1256.autoSyncTransforms = !!i1257[22]
  var i1259 = i1257[23]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1259[i + 0]) );
  }
  i1256.collisionMatrix = i1258
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1263 = data
  i1262.enabled = !!i1263[0]
  i1262.layerId = i1263[1]
  i1262.otherLayerId = i1263[2]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1265 = data
  var i1267 = i1265[0]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1267[i + 0]) );
  }
  i1264.qualityLevels = i1266
  var i1269 = i1265[1]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( i1269[i + 0] );
  }
  i1264.names = i1268
  i1264.shadows = i1265[2]
  i1264.anisotropicFiltering = i1265[3]
  i1264.antiAliasing = i1265[4]
  i1264.lodBias = i1265[5]
  i1264.shadowCascades = i1265[6]
  i1264.shadowDistance = i1265[7]
  i1264.shadowmaskMode = i1265[8]
  i1264.shadowProjection = i1265[9]
  i1264.shadowResolution = i1265[10]
  i1264.softParticles = !!i1265[11]
  i1264.softVegetation = !!i1265[12]
  i1264.activeColorSpace = i1265[13]
  i1264.desiredColorSpace = i1265[14]
  i1264.masterTextureLimit = i1265[15]
  i1264.maxQueuedFrames = i1265[16]
  i1264.particleRaycastBudget = i1265[17]
  i1264.pixelLightCount = i1265[18]
  i1264.realtimeReflectionProbes = !!i1265[19]
  i1264.shadowCascade2Split = i1265[20]
  i1264.shadowCascade4Split = new pc.Vec3( i1265[21], i1265[22], i1265[23] )
  i1264.streamingMipmapsActive = !!i1265[24]
  i1264.vSyncCount = i1265[25]
  i1264.asyncUploadBufferSize = i1265[26]
  i1264.asyncUploadTimeSlice = i1265[27]
  i1264.billboardsFaceCameraPosition = !!i1265[28]
  i1264.shadowNearPlaneOffset = i1265[29]
  i1264.streamingMipmapsMemoryBudget = i1265[30]
  i1264.maximumLODLevel = i1265[31]
  i1264.streamingMipmapsAddAllCameras = !!i1265[32]
  i1264.streamingMipmapsMaxLevelReduction = i1265[33]
  i1264.streamingMipmapsRenderersPerFrame = i1265[34]
  i1264.resolutionScalingFixedDPIFactor = i1265[35]
  i1264.streamingMipmapsMaxFileIORequests = i1265[36]
  i1264.currentQualityLevel = i1265[37]
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i1273 = data
  var i1275 = i1273[0]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i1275[i + 0]) );
  }
  i1272.groups = i1274
  var i1277 = i1273[1]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i1277[i + 0]) );
  }
  i1272.snapshots = i1276
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i1281 = data
  i1280.id = i1281[0]
  i1280.childGroupIds = i1281[1]
  i1280.name = i1281[2]
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i1285 = data
  i1284.id = i1285[0]
  var i1287 = i1285[1]
  var i1286 = []
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i1287[i + 0]) );
  }
  i1284.parameters = i1286
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i1290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i1291 = data
  i1290.name = i1291[0]
  i1290.value = i1291[1]
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1295 = data
  i1294.weight = i1295[0]
  i1294.vertices = i1295[1]
  i1294.normals = i1295[2]
  i1294.tangents = i1295[3]
  return i1294
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[77],"78":[44],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[35],"88":[35],"89":[35],"90":[35],"91":[35],"92":[35],"93":[35],"94":[35],"95":[35],"96":[35],"97":[35],"98":[35],"99":[35],"100":[44],"101":[102],"103":[104],"105":[104],"55":[49],"106":[107],"108":[12],"109":[26],"110":[12],"111":[112],"113":[112],"114":[40],"42":[26],"115":[12],"34":[12],"116":[49],"117":[49],"58":[55],"50":[59,49],"118":[49],"57":[55],"119":[49],"120":[49],"121":[49],"122":[49],"123":[49],"124":[49],"125":[49],"126":[49],"127":[49],"128":[59,49],"129":[49],"130":[49],"131":[49],"132":[49],"51":[59,49],"133":[49],"134":[63],"135":[63],"64":[63],"136":[63],"137":[44],"138":[44]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level3_Crown_Playable","UnityEngine.GameObject","BasicDrag","BD_CameraFollow","UnityEngine.SpriteRenderer","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","PlayParticlesOnCollision","UnityEngine.CircleCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.PolygonCollider2D","UnityEngine.BoxCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SpriteMask","BD_Progress","BD_Clamp","BD_ToolRotate","BD_AnimatorDrag","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.Rigidbody2D","BD_SpriteChange","BD_ProgressHelper","DestroyObj","MenuLevel","DG.Tweening.DOTweenAnimation","Level_PoseController","SpriteButton","PlayableRouter","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "7.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "27Aug2026_Level_3_1_Step_1to3";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1665";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4523";

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

Deserializers.buildID = "33603f75-c8f2-4ad8-a24a-e461cd089db2";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

