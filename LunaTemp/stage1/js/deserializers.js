var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.JointSpring' )
  var i651 = data
  i650.spring = i651[0]
  i650.damper = i651[1]
  i650.targetPosition = i651[2]
  return i650
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.JointMotor' )
  var i653 = data
  i652.m_TargetVelocity = i653[0]
  i652.m_Force = i653[1]
  i652.m_FreeSpin = i653[2]
  return i652
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.JointLimits' )
  var i655 = data
  i654.m_Min = i655[0]
  i654.m_Max = i655[1]
  i654.m_Bounciness = i655[2]
  i654.m_BounceMinVelocity = i655[3]
  i654.m_ContactDistance = i655[4]
  i654.minBounce = i655[5]
  i654.maxBounce = i655[6]
  return i654
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.JointDrive' )
  var i657 = data
  i656.m_PositionSpring = i657[0]
  i656.m_PositionDamper = i657[1]
  i656.m_MaximumForce = i657[2]
  i656.m_UseAcceleration = i657[3]
  return i656
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i659 = data
  i658.m_Spring = i659[0]
  i658.m_Damper = i659[1]
  return i658
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i661 = data
  i660.m_Limit = i661[0]
  i660.m_Bounciness = i661[1]
  i660.m_ContactDistance = i661[2]
  return i660
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i663 = data
  i662.m_ExtremumSlip = i663[0]
  i662.m_ExtremumValue = i663[1]
  i662.m_AsymptoteSlip = i663[2]
  i662.m_AsymptoteValue = i663[3]
  i662.m_Stiffness = i663[4]
  return i662
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i665 = data
  i664.m_LowerAngle = i665[0]
  i664.m_UpperAngle = i665[1]
  return i664
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i667 = data
  i666.m_MotorSpeed = i667[0]
  i666.m_MaximumMotorTorque = i667[1]
  return i666
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i669 = data
  i668.m_DampingRatio = i669[0]
  i668.m_Frequency = i669[1]
  i668.m_Angle = i669[2]
  return i668
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i671 = data
  i670.m_LowerTranslation = i671[0]
  i670.m_UpperTranslation = i671[1]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i672 = root || new pc.UnityMaterial()
  var i673 = data
  i672.name = i673[0]
  request.r(i673[1], i673[2], 0, i672, 'shader')
  i672.renderQueue = i673[3]
  i672.enableInstancing = !!i673[4]
  var i675 = i673[5]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i675[i + 0]) );
  }
  i672.floatParameters = i674
  var i677 = i673[6]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i677[i + 0]) );
  }
  i672.colorParameters = i676
  var i679 = i673[7]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i679[i + 0]) );
  }
  i672.vectorParameters = i678
  var i681 = i673[8]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i681[i + 0]) );
  }
  i672.textureParameters = i680
  var i683 = i673[9]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i683[i + 0]) );
  }
  i672.materialFlags = i682
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i687 = data
  i686.name = i687[0]
  i686.value = i687[1]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i691 = data
  i690.name = i691[0]
  i690.value = new pc.Color(i691[1], i691[2], i691[3], i691[4])
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i695 = data
  i694.name = i695[0]
  i694.value = new pc.Vec4( i695[1], i695[2], i695[3], i695[4] )
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i699 = data
  i698.name = i699[0]
  request.r(i699[1], i699[2], 0, i698, 'value')
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i703 = data
  i702.name = i703[0]
  i702.enabled = !!i703[1]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i705 = data
  i704.name = i705[0]
  i704.width = i705[1]
  i704.height = i705[2]
  i704.mipmapCount = i705[3]
  i704.anisoLevel = i705[4]
  i704.filterMode = i705[5]
  i704.hdr = !!i705[6]
  i704.format = i705[7]
  i704.wrapMode = i705[8]
  i704.alphaIsTransparency = !!i705[9]
  i704.alphaSource = i705[10]
  i704.graphicsFormat = i705[11]
  i704.sRGBTexture = !!i705[12]
  i704.desiredColorSpace = i705[13]
  i704.wrapU = i705[14]
  i704.wrapV = i705[15]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i707 = data
  i706.name = i707[0]
  i706.halfPrecision = !!i707[1]
  i706.useSimplification = !!i707[2]
  i706.useUInt32IndexFormat = !!i707[3]
  i706.vertexCount = i707[4]
  i706.aabb = i707[5]
  var i709 = i707[6]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( !!i709[i + 0] );
  }
  i706.streams = i708
  i706.vertices = i707[7]
  var i711 = i707[8]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i711[i + 0]) );
  }
  i706.subMeshes = i710
  var i713 = i707[9]
  var i712 = []
  for(var i = 0; i < i713.length; i += 16) {
    i712.push( new pc.Mat4().setData(i713[i + 0], i713[i + 1], i713[i + 2], i713[i + 3],  i713[i + 4], i713[i + 5], i713[i + 6], i713[i + 7],  i713[i + 8], i713[i + 9], i713[i + 10], i713[i + 11],  i713[i + 12], i713[i + 13], i713[i + 14], i713[i + 15]) );
  }
  i706.bindposes = i712
  var i715 = i707[10]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i715[i + 0]) );
  }
  i706.blendShapes = i714
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i721 = data
  i720.triangles = i721[0]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i727 = data
  i726.name = i727[0]
  var i729 = i727[1]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i729[i + 0]) );
  }
  i726.frames = i728
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i731 = data
  i730.position = new pc.Vec3( i731[0], i731[1], i731[2] )
  i730.scale = new pc.Vec3( i731[3], i731[4], i731[5] )
  i730.rotation = new pc.Quat(i731[6], i731[7], i731[8], i731[9])
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i733 = data
  i732.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i733[0], i732.main)
  i732.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i733[1], i732.colorBySpeed)
  i732.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i733[2], i732.colorOverLifetime)
  i732.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i733[3], i732.emission)
  i732.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i733[4], i732.rotationBySpeed)
  i732.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i733[5], i732.rotationOverLifetime)
  i732.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i733[6], i732.shape)
  i732.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i733[7], i732.sizeBySpeed)
  i732.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i733[8], i732.sizeOverLifetime)
  i732.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i733[9], i732.textureSheetAnimation)
  i732.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i733[10], i732.velocityOverLifetime)
  i732.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i733[11], i732.noise)
  i732.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i733[12], i732.inheritVelocity)
  i732.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i733[13], i732.forceOverLifetime)
  i732.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i733[14], i732.limitVelocityOverLifetime)
  i732.useAutoRandomSeed = !!i733[15]
  i732.randomSeed = i733[16]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i734 = root || new pc.ParticleSystemMain()
  var i735 = data
  i734.duration = i735[0]
  i734.loop = !!i735[1]
  i734.prewarm = !!i735[2]
  i734.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[3], i734.startDelay)
  i734.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[4], i734.startLifetime)
  i734.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[5], i734.startSpeed)
  i734.startSize3D = !!i735[6]
  i734.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[7], i734.startSizeX)
  i734.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[8], i734.startSizeY)
  i734.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[9], i734.startSizeZ)
  i734.startRotation3D = !!i735[10]
  i734.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[11], i734.startRotationX)
  i734.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[12], i734.startRotationY)
  i734.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[13], i734.startRotationZ)
  i734.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i735[14], i734.startColor)
  i734.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[15], i734.gravityModifier)
  i734.simulationSpace = i735[16]
  request.r(i735[17], i735[18], 0, i734, 'customSimulationSpace')
  i734.simulationSpeed = i735[19]
  i734.useUnscaledTime = !!i735[20]
  i734.scalingMode = i735[21]
  i734.playOnAwake = !!i735[22]
  i734.maxParticles = i735[23]
  i734.emitterVelocityMode = i735[24]
  i734.stopAction = i735[25]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i736 = root || new pc.MinMaxCurve()
  var i737 = data
  i736.mode = i737[0]
  i736.curveMin = new pc.AnimationCurve( { keys_flow: i737[1] } )
  i736.curveMax = new pc.AnimationCurve( { keys_flow: i737[2] } )
  i736.curveMultiplier = i737[3]
  i736.constantMin = i737[4]
  i736.constantMax = i737[5]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i738 = root || new pc.MinMaxGradient()
  var i739 = data
  i738.mode = i739[0]
  i738.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i739[1], i738.gradientMin)
  i738.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i739[2], i738.gradientMax)
  i738.colorMin = new pc.Color(i739[3], i739[4], i739[5], i739[6])
  i738.colorMax = new pc.Color(i739[7], i739[8], i739[9], i739[10])
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i741 = data
  i740.mode = i741[0]
  var i743 = i741[1]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i743[i + 0]) );
  }
  i740.colorKeys = i742
  var i745 = i741[2]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i745[i + 0]) );
  }
  i740.alphaKeys = i744
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemColorBySpeed()
  var i747 = data
  i746.enabled = !!i747[0]
  i746.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i747[1], i746.color)
  i746.range = new pc.Vec2( i747[2], i747[3] )
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i751 = data
  i750.color = new pc.Color(i751[0], i751[1], i751[2], i751[3])
  i750.time = i751[4]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i755 = data
  i754.alpha = i755[0]
  i754.time = i755[1]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemColorOverLifetime()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i757[1], i756.color)
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemEmitter()
  var i759 = data
  i758.enabled = !!i759[0]
  i758.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[1], i758.rateOverTime)
  i758.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[2], i758.rateOverDistance)
  var i761 = i759[3]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i761[i + 0]) );
  }
  i758.bursts = i760
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemBurst()
  var i765 = data
  i764.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[0], i764.count)
  i764.cycleCount = i765[1]
  i764.minCount = i765[2]
  i764.maxCount = i765[3]
  i764.repeatInterval = i765[4]
  i764.time = i765[5]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemRotationBySpeed()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[1], i766.x)
  i766.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[2], i766.y)
  i766.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[3], i766.z)
  i766.separateAxes = !!i767[4]
  i766.range = new pc.Vec2( i767[5], i767[6] )
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemRotationOverLifetime()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[1], i768.x)
  i768.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[2], i768.y)
  i768.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[3], i768.z)
  i768.separateAxes = !!i769[4]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemShape()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.shapeType = i771[1]
  i770.randomDirectionAmount = i771[2]
  i770.sphericalDirectionAmount = i771[3]
  i770.randomPositionAmount = i771[4]
  i770.alignToDirection = !!i771[5]
  i770.radius = i771[6]
  i770.radiusMode = i771[7]
  i770.radiusSpread = i771[8]
  i770.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[9], i770.radiusSpeed)
  i770.radiusThickness = i771[10]
  i770.angle = i771[11]
  i770.length = i771[12]
  i770.boxThickness = new pc.Vec3( i771[13], i771[14], i771[15] )
  i770.meshShapeType = i771[16]
  request.r(i771[17], i771[18], 0, i770, 'mesh')
  request.r(i771[19], i771[20], 0, i770, 'meshRenderer')
  request.r(i771[21], i771[22], 0, i770, 'skinnedMeshRenderer')
  i770.useMeshMaterialIndex = !!i771[23]
  i770.meshMaterialIndex = i771[24]
  i770.useMeshColors = !!i771[25]
  i770.normalOffset = i771[26]
  i770.arc = i771[27]
  i770.arcMode = i771[28]
  i770.arcSpread = i771[29]
  i770.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[30], i770.arcSpeed)
  i770.donutRadius = i771[31]
  i770.position = new pc.Vec3( i771[32], i771[33], i771[34] )
  i770.rotation = new pc.Vec3( i771[35], i771[36], i771[37] )
  i770.scale = new pc.Vec3( i771[38], i771[39], i771[40] )
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemSizeBySpeed()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[1], i772.x)
  i772.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[2], i772.y)
  i772.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[3], i772.z)
  i772.separateAxes = !!i773[4]
  i772.range = new pc.Vec2( i773[5], i773[6] )
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemSizeOverLifetime()
  var i775 = data
  i774.enabled = !!i775[0]
  i774.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[1], i774.x)
  i774.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[2], i774.y)
  i774.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[3], i774.z)
  i774.separateAxes = !!i775[4]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i777 = data
  i776.enabled = !!i777[0]
  i776.mode = i777[1]
  i776.animation = i777[2]
  i776.numTilesX = i777[3]
  i776.numTilesY = i777[4]
  i776.useRandomRow = !!i777[5]
  i776.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[6], i776.frameOverTime)
  i776.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[7], i776.startFrame)
  i776.cycleCount = i777[8]
  i776.rowIndex = i777[9]
  i776.flipU = i777[10]
  i776.flipV = i777[11]
  i776.spriteCount = i777[12]
  var i779 = i777[13]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i776.sprites = i778
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[1], i782.x)
  i782.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[2], i782.y)
  i782.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[3], i782.z)
  i782.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[4], i782.radial)
  i782.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[5], i782.speedModifier)
  i782.space = i783[6]
  i782.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[7], i782.orbitalX)
  i782.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[8], i782.orbitalY)
  i782.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[9], i782.orbitalZ)
  i782.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[10], i782.orbitalOffsetX)
  i782.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[11], i782.orbitalOffsetY)
  i782.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[12], i782.orbitalOffsetZ)
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemNoise()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.separateAxes = !!i785[1]
  i784.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[2], i784.strengthX)
  i784.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[3], i784.strengthY)
  i784.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[4], i784.strengthZ)
  i784.frequency = i785[5]
  i784.damping = !!i785[6]
  i784.octaveCount = i785[7]
  i784.octaveMultiplier = i785[8]
  i784.octaveScale = i785[9]
  i784.quality = i785[10]
  i784.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[11], i784.scrollSpeed)
  i784.scrollSpeedMultiplier = i785[12]
  i784.remapEnabled = !!i785[13]
  i784.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[14], i784.remapX)
  i784.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[15], i784.remapY)
  i784.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[16], i784.remapZ)
  i784.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[17], i784.positionAmount)
  i784.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[18], i784.rotationAmount)
  i784.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[19], i784.sizeAmount)
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemInheritVelocity()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.mode = i787[1]
  i786.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[2], i786.curve)
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemForceOverLifetime()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[1], i788.x)
  i788.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[2], i788.y)
  i788.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[3], i788.z)
  i788.space = i789[4]
  i788.randomized = !!i789[5]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[1], i790.limit)
  i790.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.limitX)
  i790.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.limitY)
  i790.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[4], i790.limitZ)
  i790.dampen = i791[5]
  i790.separateAxes = !!i791[6]
  i790.space = i791[7]
  i790.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[8], i790.drag)
  i790.multiplyDragByParticleSize = !!i791[9]
  i790.multiplyDragByParticleVelocity = !!i791[10]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'mesh')
  i792.meshCount = i793[2]
  i792.activeVertexStreamsCount = i793[3]
  i792.alignment = i793[4]
  i792.renderMode = i793[5]
  i792.sortMode = i793[6]
  i792.lengthScale = i793[7]
  i792.velocityScale = i793[8]
  i792.cameraVelocityScale = i793[9]
  i792.normalDirection = i793[10]
  i792.sortingFudge = i793[11]
  i792.minParticleSize = i793[12]
  i792.maxParticleSize = i793[13]
  i792.pivot = new pc.Vec3( i793[14], i793[15], i793[16] )
  request.r(i793[17], i793[18], 0, i792, 'trailMaterial')
  i792.applyActiveColorSpace = !!i793[19]
  i792.enabled = !!i793[20]
  request.r(i793[21], i793[22], 0, i792, 'sharedMaterial')
  var i795 = i793[23]
  var i794 = []
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 2, i794, '')
  }
  i792.sharedMaterials = i794
  i792.receiveShadows = !!i793[24]
  i792.shadowCastingMode = i793[25]
  i792.sortingLayerID = i793[26]
  i792.sortingOrder = i793[27]
  i792.lightmapIndex = i793[28]
  i792.lightmapSceneIndex = i793[29]
  i792.lightmapScaleOffset = new pc.Vec4( i793[30], i793[31], i793[32], i793[33] )
  i792.lightProbeUsage = i793[34]
  i792.reflectionProbeUsage = i793[35]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i799 = data
  i798.name = i799[0]
  i798.tagId = i799[1]
  i798.enabled = !!i799[2]
  i798.isStatic = !!i799[3]
  i798.layer = i799[4]
  return i798
}

Deserializers["Level3_Crown_Playable"] = function (request, data, root) {
  var i800 = root || request.c( 'Level3_Crown_Playable' )
  var i801 = data
  i800.MainZoom = request.d('ZoomPos', i801[0], i800.MainZoom)
  request.r(i801[1], i801[2], 0, i800, 'View1')
  request.r(i801[3], i801[4], 0, i800, 'View2')
  i800.ZoomStep1 = request.d('ZoomPos', i801[5], i800.ZoomStep1)
  request.r(i801[6], i801[7], 0, i800, 'ToolStep1')
  request.r(i801[8], i801[9], 0, i800, 'ToolStep1CameraFollow')
  request.r(i801[10], i801[11], 0, i800, 'Step1Col')
  request.r(i801[12], i801[13], 0, i800, 'DustSR_1')
  i800.ZoomStep2 = request.d('ZoomPos', i801[14], i800.ZoomStep2)
  request.r(i801[15], i801[16], 0, i800, 'ToolStep2')
  request.r(i801[17], i801[18], 0, i800, 'ToolStep2CameraFollow')
  var i803 = i801[19]
  var i802 = []
  for(var i = 0; i < i803.length; i += 2) {
  request.r(i803[i + 0], i803[i + 1], 2, i802, '')
  }
  i800.SRsToFadeOut_2 = i802
  request.r(i801[20], i801[21], 0, i800, 'SpraySR_2')
  i800.ZoomStep3 = request.d('ZoomPos', i801[22], i800.ZoomStep3)
  request.r(i801[23], i801[24], 0, i800, 'ToolStep3')
  request.r(i801[25], i801[26], 0, i800, 'ToolStep3CameraFollow')
  request.r(i801[27], i801[28], 0, i800, 'Step3Col')
  request.r(i801[29], i801[30], 0, i800, 'Mix')
  request.r(i801[31], i801[32], 0, i800, 'MixE')
  i800.levelName = i801[33]
  i800.levelReward = i801[34]
  request.r(i801[35], i801[36], 0, i800, 'LevelIcon')
  request.r(i801[37], i801[38], 0, i800, 'Level_BG')
  var i805 = i801[39]
  var i804 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 1, i804, '')
  }
  i800.ToolIcons = i804
  var i807 = i801[40]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 2, i806, '')
  }
  i800.AllDrags = i806
  var i809 = i801[41]
  var i808 = []
  for(var i = 0; i < i809.length; i += 2) {
  request.r(i809[i + 0], i809[i + 1], 2, i808, '')
  }
  i800.AllSources = i808
  var i811 = i801[42]
  var i810 = []
  for(var i = 0; i < i811.length; i += 2) {
  request.r(i811[i + 0], i811[i + 1], 2, i810, '')
  }
  i800.AllScratches = i810
  i800.stepsDone = i801[43]
  i800.levelNo = i801[44]
  i800.partNo = i801[45]
  return i800
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i812 = root || request.c( 'ZoomPos' )
  var i813 = data
  i812.CameraPos = new pc.Vec3( i813[0], i813[1], i813[2] )
  i812.CameraFOV = i813[3]
  return i812
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i824 = root || request.c( 'PlayableCTA' )
  var i825 = data
  i824.trigger = i825[0]
  i824.afterSeconds = i825[1]
  i824.afterTaps = i825[2]
  request.r(i825[3], i825[4], 0, i824, 'scratchProgress')
  i824.scratchIndex = i825[5]
  i824.progressThreshold = i825[6]
  request.r(i825[7], i825[8], 0, i824, 'watchedTool')
  i824.blockInputOnFire = !!i825[9]
  i824.refireOnEveryTap = !!i825[10]
  i824.refireDelay = i825[11]
  i824.showEndCard = !!i825[12]
  request.r(i825[13], i825[14], 0, i824, 'endCard')
  var i827 = i825[15]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i824.thingsToDisableOnEndCard = i826
  i824.showEndCardOnProgressTrigger = !!i825[16]
  i824.showEndCardOnToolAppearTrigger = !!i825[17]
  i824.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i825[18], i824.onCtaFired)
  i824.logWhenFired = !!i825[19]
  return i824
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i831 = data
  i830.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i831[0], i830.m_PersistentCalls)
  return i830
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i833 = data
  var i835 = i833[0]
  var i834 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i835.length; i += 1) {
    i834.add(request.d('UnityEngine.Events.PersistentCall', i835[i + 0]));
  }
  i832.m_Calls = i834
  return i832
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'm_Target')
  i838.m_TargetAssemblyTypeName = i839[2]
  i838.m_MethodName = i839[3]
  i838.m_Mode = i839[4]
  i838.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i839[5], i838.m_Arguments)
  i838.m_CallState = i839[6]
  return i838
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i840 = root || request.c( 'PlayableFadeCoverSettings' )
  var i841 = data
  i840.revealDelay = i841[0]
  i840.revealDuration = i841[1]
  return i840
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i842 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'MainCamera')
  i842.RenderType = i843[2]
  request.r(i843[3], i843[4], 0, i842, 'ScratchSurfaceSprite')
  i842.ScratchSurfaceSpriteHasAlpha = !!i843[5]
  i842.MaskProgressCutOffValue = i843[6]
  request.r(i843[7], i843[8], 0, i842, 'EraseTexture')
  i842.EraseTextureScale = new pc.Vec2( i843[9], i843[10] )
  i842.InputEnabled = !!i843[11]
  request.r(i843[12], i843[13], 0, i842, 'Card')
  i842.Mode = i843[14]
  request.r(i843[15], i843[16], 0, i842, 'Progress')
  request.r(i843[17], i843[18], 0, i842, 'MeshCard')
  request.r(i843[19], i843[20], 0, i842, 'SpriteCard')
  request.r(i843[21], i843[22], 0, i842, 'ImageCard')
  request.r(i843[23], i843[24], 0, i842, 'MaskShader')
  request.r(i843[25], i843[26], 0, i842, 'BrushShader')
  request.r(i843[27], i843[28], 0, i842, 'MaskProgressShader')
  request.r(i843[29], i843[30], 0, i842, 'MaskProgressCutOffShader')
  return i842
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i844 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'MainCamera')
  request.r(i845[2], i845[3], 0, i844, 'Surface')
  i844.RenderTextureQuality = i845[4]
  request.r(i845[5], i845[6], 0, i844, 'Eraser')
  request.r(i845[7], i845[8], 0, i844, 'Progress')
  request.r(i845[9], i845[10], 0, i844, 'ScratchSurface')
  request.r(i845[11], i845[12], 0, i844, 'RenderTexture')
  i844.BrushScale = new pc.Vec2( i845[13], i845[14] )
  request.r(i845[15], i845[16], 0, i844, 'ToolTip')
  i844.InputEnabled = !!i845[17]
  i844.IsScratching = !!i845[18]
  i844.useChangingScale = !!i845[19]
  i844.useGivenBrushScale = !!i845[20]
  i844.canSpreadMask = !!i845[21]
  i844.shouldPaintHoles = !!i845[22]
  i844.canRotateTip = !!i845[23]
  i844._mode = i845[24]
  return i844
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i846 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'Card')
  i846.currentProgress = i847[2]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i849 = data
  i848.color = new pc.Color(i849[0], i849[1], i849[2], i849[3])
  request.r(i849[4], i849[5], 0, i848, 'sprite')
  i848.flipX = !!i849[6]
  i848.flipY = !!i849[7]
  i848.drawMode = i849[8]
  i848.size = new pc.Vec2( i849[9], i849[10] )
  i848.tileMode = i849[11]
  i848.adaptiveModeThreshold = i849[12]
  i848.maskInteraction = i849[13]
  i848.spriteSortPoint = i849[14]
  i848.enabled = !!i849[15]
  request.r(i849[16], i849[17], 0, i848, 'sharedMaterial')
  var i851 = i849[18]
  var i850 = []
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 2, i850, '')
  }
  i848.sharedMaterials = i850
  i848.receiveShadows = !!i849[19]
  i848.shadowCastingMode = i849[20]
  i848.sortingLayerID = i849[21]
  i848.sortingOrder = i849[22]
  i848.lightmapIndex = i849[23]
  i848.lightmapSceneIndex = i849[24]
  i848.lightmapScaleOffset = new pc.Vec4( i849[25], i849[26], i849[27], i849[28] )
  i848.lightProbeUsage = i849[29]
  i848.reflectionProbeUsage = i849[30]
  return i848
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i852 = root || request.c( 'PlayParticlesOnCollision' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'Target')
  request.r(i853[2], i853[3], 0, i852, 'ParticlePrefab')
  i852.destroyIt = !!i853[4]
  i852.stayAtPlace = !!i853[5]
  i852.disableOnCollision = !!i853[6]
  i852.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i853[7], i852.OnCollisionEvent)
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i855 = data
  i854.radius = i855[0]
  i854.enabled = !!i855[1]
  i854.isTrigger = !!i855[2]
  i854.usedByEffector = !!i855[3]
  i854.density = i855[4]
  i854.offset = new pc.Vec2( i855[5], i855[6] )
  request.r(i855[7], i855[8], 0, i854, 'material')
  return i854
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i856 = root || request.c( 'PlaySfxOnCollision' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'Tip')
  i856.Mode = i857[2]
  request.r(i857[3], i857[4], 0, i856, 'DragInput')
  request.r(i857[5], i857[6], 0, i856, 'Source')
  i856.startVol = i857[7]
  i856.targetVol = i857[8]
  i856.duration = i857[9]
  request.r(i857[10], i857[11], 0, i856, 'Particles')
  i856.isDone = !!i857[12]
  i856.isInArea = !!i857[13]
  i856.isPlaying = !!i857[14]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'clip')
  request.r(i859[2], i859[3], 0, i858, 'outputAudioMixerGroup')
  i858.playOnAwake = !!i859[4]
  i858.loop = !!i859[5]
  i858.time = i859[6]
  i858.volume = i859[7]
  i858.pitch = i859[8]
  i858.enabled = !!i859[9]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i861 = data
  i860.usedByComposite = !!i861[0]
  i860.autoTiling = !!i861[1]
  var i863 = i861[2]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
  var i865 = i863[i + 0]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
    i864.push( new pc.Vec2( i865[i + 0], i865[i + 1] ) );
  }
    i862.push( i864 );
  }
  i860.points = i862
  i860.enabled = !!i861[3]
  i860.isTrigger = !!i861[4]
  i860.usedByEffector = !!i861[5]
  i860.density = i861[6]
  i860.offset = new pc.Vec2( i861[7], i861[8] )
  request.r(i861[9], i861[10], 0, i860, 'material')
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i873 = data
  i872.usedByComposite = !!i873[0]
  i872.autoTiling = !!i873[1]
  i872.size = new pc.Vec2( i873[2], i873[3] )
  i872.edgeRadius = i873[4]
  i872.enabled = !!i873[5]
  i872.isTrigger = !!i873[6]
  i872.usedByEffector = !!i873[7]
  i872.density = i873[8]
  i872.offset = new pc.Vec2( i873[9], i873[10] )
  request.r(i873[11], i873[12], 0, i872, 'material')
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'animatorController')
  request.r(i875[2], i875[3], 0, i874, 'avatar')
  i874.updateMode = i875[4]
  i874.hasTransformHierarchy = !!i875[5]
  i874.applyRootMotion = !!i875[6]
  var i877 = i875[7]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i874.humanBones = i876
  i874.enabled = !!i875[8]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i881 = data
  i880.frontSortingLayerID = i881[0]
  i880.frontSortingOrder = i881[1]
  i880.backSortingLayerID = i881[2]
  i880.backSortingOrder = i881[3]
  i880.alphaCutoff = i881[4]
  request.r(i881[5], i881[6], 0, i880, 'sprite')
  i880.tileMode = i881[7]
  i880.isCustomRangeActive = !!i881[8]
  i880.spriteSortPoint = i881[9]
  i880.enabled = !!i881[10]
  request.r(i881[11], i881[12], 0, i880, 'sharedMaterial')
  var i883 = i881[13]
  var i882 = []
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 2, i882, '')
  }
  i880.sharedMaterials = i882
  i880.receiveShadows = !!i881[14]
  i880.shadowCastingMode = i881[15]
  i880.sortingLayerID = i881[16]
  i880.sortingOrder = i881[17]
  i880.lightmapIndex = i881[18]
  i880.lightmapSceneIndex = i881[19]
  i880.lightmapScaleOffset = new pc.Vec4( i881[20], i881[21], i881[22], i881[23] )
  i880.lightProbeUsage = i881[24]
  i880.reflectionProbeUsage = i881[25]
  return i880
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i884 = root || request.c( 'BasicDrag' )
  var i885 = data
  i884.canDrag = !!i885[0]
  i884.dragByDelta = !!i885[1]
  i884.isDragging = !!i885[2]
  i884.moveWithPointer = !!i885[3]
  i884.canReturn = !!i885[4]
  i884.jumpOnReturn = !!i885[5]
  i884.returnTime = i885[6]
  i884.Tool_Offset = new pc.Vec3( i885[7], i885[8], i885[9] )
  i884.canScaleIncrease = !!i885[10]
  i884.Self_ScaleNew = new pc.Vec3( i885[11], i885[12], i885[13] )
  i884.canRotateOnPick = !!i885[14]
  i884.startRot = new pc.Vec3( i885[15], i885[16], i885[17] )
  i884.newRot = new pc.Vec3( i885[18], i885[19], i885[20] )
  var i887 = i885[21]
  var i886 = []
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 2, i886, '')
  }
  i884.childSprite = i886
  request.r(i885[22], i885[23], 0, i884, 'ToolSelectClip')
  request.r(i885[24], i885[25], 0, i884, 'ToolLoopClip')
  request.r(i885[26], i885[27], 0, i884, 'thisParticles')
  i884.onDragparticle = !!i885[28]
  request.r(i885[29], i885[30], 0, i884, 'dragParticles')
  request.r(i885[31], i885[32], 0, i884, 'anim')
  i884.startPos = new pc.Vec3( i885[33], i885[34], i885[35] )
  i884.startScale = new pc.Vec3( i885[36], i885[37], i885[38] )
  i884.Vibration = !!i885[39]
  i884.isPlacedCannotMove = !!i885[40]
  i884.isObjectMovingWhileDragging = !!i885[41]
  i884.OnMouseDownEvent = request.d('System.Action', i885[42], i884.OnMouseDownEvent)
  i884.OnMouseUpEvent = request.d('System.Action', i885[43], i884.OnMouseUpEvent)
  i884.ProgStartEvent = request.d('System.Action', i885[44], i884.ProgStartEvent)
  i884.ProgEndEvent = request.d('System.Action', i885[45], i884.ProgEndEvent)
  i884.canCallMouseUpWhenGamePaused = !!i885[46]
  i884.ClampX_L = i885[47]
  i884.ClampX_H = i885[48]
  i884.ClampY_L = i885[49]
  i884.ClampY_H = i885[50]
  i884.startOrder = i885[51]
  i884.dontResetItIsInCollider = !!i885[52]
  request.r(i885[53], i885[54], 0, i884, 'thisCollider')
  request.r(i885[55], i885[56], 0, i884, 'thisSR')
  i884.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i885[57], i884.OnMouseDownEventIndependentFromCanDrag)
  return i884
}

Deserializers["System.Action"] = function (request, data, root) {
  var i888 = root || request.c( 'System.Action' )
  var i889 = data
  return i888
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i890 = root || request.c( 'BD_Progress' )
  var i891 = data
  var i893 = i891[0]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('ScratchData', i893[i + 0]) );
  }
  i890.AllScratches = i892
  i890.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i891[1], i890.OnScratchComplete)
  i890.isProgDone = !!i891[2]
  i890.canCallComplete = !!i891[3]
  i890.CollectiveAppear = !!i891[4]
  i890.tipControl = !!i891[5]
  i890.progressControl = !!i891[6]
  request.r(i891[7], i891[8], 0, i890, 'thisDrag')
  i890.CompleteEvent = request.d('System.Action', i891[9], i890.CompleteEvent)
  i890.SubCompleteEvent = request.d('System.Action', i891[10], i890.SubCompleteEvent)
  return i890
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i896 = root || request.c( 'ScratchData' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'ScratchManager')
  i896.scratchLimit = i897[2]
  i896.isComplete = !!i897[3]
  return i896
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'm_ObjectArgument')
  i898.m_ObjectArgumentAssemblyTypeName = i899[2]
  i898.m_IntArgument = i899[3]
  i898.m_FloatArgument = i899[4]
  i898.m_StringArgument = i899[5]
  i898.m_BoolArgument = !!i899[6]
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

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i902 = root || request.c( 'BD_ToolRotate' )
  var i903 = data
  i902.startDelay = i903[0]
  request.r(i903[1], i903[2], 0, i902, 'Tool')
  request.r(i903[3], i903[4], 0, i902, 'Clamp')
  request.r(i903[5], i903[6], 0, i902, 'Pivot')
  i902.MinAngle = new pc.Vec3( i903[7], i903[8], i903[9] )
  i902.MaxAngle = new pc.Vec3( i903[10], i903[11], i903[12] )
  i902.rotationSpeed = i903[13]
  return i902
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i904 = root || request.c( 'BD_CameraFollow' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'Tool')
  request.r(i905[2], i905[3], 0, i904, 'Pivot')
  i904.FOV = i905[4]
  i904.Y_L = i905[5]
  i904.Y_H = i905[6]
  i904.X_L = i905[7]
  i904.X_R = i905[8]
  i904.startDelay = i905[9]
  i904.duration = i905[10]
  return i904
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i906 = root || request.c( 'BD_AnimatorDrag' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'BD')
  request.r(i907[2], i907[3], 0, i906, 'anim')
  request.r(i907[4], i907[5], 0, i906, 'Source')
  i906.Vibration = !!i907[6]
  i906.isCompletable = !!i907[7]
  i906.completionThreshold = i907[8]
  i906.OnComplete = request.d('UnityEngine.Events.UnityEvent', i907[9], i906.OnComplete)
  return i906
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'm_RootBone')
  var i911 = i909[2]
  var i910 = []
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 2, i910, '')
  }
  i908.m_BoneTransforms = i910
  i908.m_AlwaysUpdate = !!i909[3]
  i908.m_AutoRebind = !!i909[4]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i913 = data
  i912.bodyType = i913[0]
  request.r(i913[1], i913[2], 0, i912, 'material')
  i912.simulated = !!i913[3]
  i912.useAutoMass = !!i913[4]
  i912.mass = i913[5]
  i912.drag = i913[6]
  i912.angularDrag = i913[7]
  i912.gravityScale = i913[8]
  i912.collisionDetectionMode = i913[9]
  i912.sleepMode = i913[10]
  i912.constraints = i913[11]
  return i912
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i914 = root || request.c( 'BD_SpriteChange' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'BD')
  request.r(i915[2], i915[3], 0, i914, 'SR')
  request.r(i915[4], i915[5], 0, i914, 'Default')
  request.r(i915[6], i915[7], 0, i914, 'Picked')
  i914.resetOnRelease = !!i915[8]
  return i914
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i916 = root || request.c( 'BD_ProgressHelper' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'BD_Progress')
  request.r(i917[2], i917[3], 0, i916, 'fadeSprite')
  i916.fadeIn = !!i917[4]
  return i916
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i918 = root || request.c( 'DestroyObj' )
  var i919 = data
  i918.destroyDelay = i919[0]
  return i918
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i920 = root || request.c( 'MenuLevel' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'menuLevelBtnUpdate')
  var i923 = i921[2]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('MenuLevelData', i923[i + 0]) );
  }
  i920.AllSteps = i922
  request.r(i921[3], i921[4], 0, i920, 'buttonparent')
  var i925 = i921[5]
  var i924 = []
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 2, i924, '')
  }
  i920.BtnsDotweenAnims = i924
  var i927 = i921[6]
  var i926 = []
  for(var i = 0; i < i927.length; i += 2) {
  request.r(i927[i + 0], i927[i + 1], 2, i926, '')
  }
  i920.BtnsCols = i926
  request.r(i921[7], i921[8], 0, i920, 'mainGameView')
  request.r(i921[9], i921[10], 0, i920, 'Storyboard')
  request.r(i921[11], i921[12], 0, i920, 'BgMusic')
  request.r(i921[13], i921[14], 0, i920, 'BgStoryMusic')
  request.r(i921[15], i921[16], 0, i920, 'Hand_Tut1')
  var i929 = i921[17]
  var i928 = []
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 2, i928, '')
  }
  i920.itemEnable_Onstart = i928
  var i931 = i921[18]
  var i930 = []
  for(var i = 0; i < i931.length; i += 2) {
  request.r(i931[i + 0], i931[i + 1], 2, i930, '')
  }
  i920.itemDisable_Onstart = i930
  var i933 = i921[19]
  var i932 = []
  for(var i = 0; i < i933.length; i += 2) {
  request.r(i933[i + 0], i933[i + 1], 2, i932, '')
  }
  i920.itemEnable_Oncomplete = i932
  var i935 = i921[20]
  var i934 = []
  for(var i = 0; i < i935.length; i += 2) {
  request.r(i935[i + 0], i935[i + 1], 2, i934, '')
  }
  i920.itemDisable_Oncomplete = i934
  i920.levelKey = i921[21]
  i920.revealDirtyHoldTime = i921[22]
  return i920
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i938 = root || request.c( 'MenuLevelData' )
  var i939 = data
  i938.Name = i939[0]
  request.r(i939[1], i939[2], 0, i938, 'UiBtn')
  request.r(i939[3], i939[4], 0, i938, 'TickBtn')
  request.r(i939[5], i939[6], 0, i938, 'ExclamationIcon')
  var i941 = i939[7]
  var i940 = []
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 2, i940, '')
  }
  i938.Item_Dirty = i940
  var i943 = i939[8]
  var i942 = []
  for(var i = 0; i < i943.length; i += 2) {
  request.r(i943[i + 0], i943[i + 1], 2, i942, '')
  }
  i938.Item_Clean = i942
  request.r(i939[9], i939[10], 0, i938, 'CompleteParticle')
  return i938
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i948 = root || request.c( 'Level_PoseController' )
  var i949 = data
  var i951 = i949[0]
  var i950 = []
  for(var i = 0; i < i951.length; i += 2) {
  request.r(i951[i + 0], i951[i + 1], 2, i950, '')
  }
  i948.itemToShow = i950
  var i953 = i949[1]
  var i952 = []
  for(var i = 0; i < i953.length; i += 2) {
  request.r(i953[i + 0], i953[i + 1], 2, i952, '')
  }
  i948.itemToHide = i952
  i948.stepTarget = i949[2]
  return i948
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i954 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i955 = data
  i954.targetIsSelf = !!i955[0]
  request.r(i955[1], i955[2], 0, i954, 'targetGO')
  i954.tweenTargetIsTargetGO = !!i955[3]
  i954.delay = i955[4]
  i954.duration = i955[5]
  i954.easeType = i955[6]
  i954.easeCurve = new pc.AnimationCurve( { keys_flow: i955[7] } )
  i954.loopType = i955[8]
  i954.loops = i955[9]
  i954.id = i955[10]
  i954.isRelative = !!i955[11]
  i954.isFrom = !!i955[12]
  i954.isIndependentUpdate = !!i955[13]
  i954.autoKill = !!i955[14]
  i954.autoGenerate = !!i955[15]
  i954.isActive = !!i955[16]
  i954.isValid = !!i955[17]
  request.r(i955[18], i955[19], 0, i954, 'target')
  i954.animationType = i955[20]
  i954.targetType = i955[21]
  i954.forcedTargetType = i955[22]
  i954.autoPlay = !!i955[23]
  i954.useTargetAsV3 = !!i955[24]
  i954.endValueFloat = i955[25]
  i954.endValueV3 = new pc.Vec3( i955[26], i955[27], i955[28] )
  i954.endValueV2 = new pc.Vec2( i955[29], i955[30] )
  i954.endValueColor = new pc.Color(i955[31], i955[32], i955[33], i955[34])
  i954.endValueString = i955[35]
  i954.endValueRect = UnityEngine.Rect.MinMaxRect(i955[36], i955[37], i955[38], i955[39])
  request.r(i955[40], i955[41], 0, i954, 'endValueTransform')
  i954.optionalBool0 = !!i955[42]
  i954.optionalBool1 = !!i955[43]
  i954.optionalFloat0 = i955[44]
  i954.optionalInt0 = i955[45]
  i954.optionalRotationMode = i955[46]
  i954.optionalScrambleMode = i955[47]
  i954.optionalShakeRandomnessMode = i955[48]
  i954.optionalString = i955[49]
  i954.updateType = i955[50]
  i954.isSpeedBased = !!i955[51]
  i954.hasOnStart = !!i955[52]
  i954.hasOnPlay = !!i955[53]
  i954.hasOnUpdate = !!i955[54]
  i954.hasOnStepComplete = !!i955[55]
  i954.hasOnComplete = !!i955[56]
  i954.hasOnTweenCreated = !!i955[57]
  i954.hasOnRewind = !!i955[58]
  i954.onStart = request.d('UnityEngine.Events.UnityEvent', i955[59], i954.onStart)
  i954.onPlay = request.d('UnityEngine.Events.UnityEvent', i955[60], i954.onPlay)
  i954.onUpdate = request.d('UnityEngine.Events.UnityEvent', i955[61], i954.onUpdate)
  i954.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i955[62], i954.onStepComplete)
  i954.onComplete = request.d('UnityEngine.Events.UnityEvent', i955[63], i954.onComplete)
  i954.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i955[64], i954.onTweenCreated)
  i954.onRewind = request.d('UnityEngine.Events.UnityEvent', i955[65], i954.onRewind)
  return i954
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i956 = root || request.c( 'SpriteButton' )
  var i957 = data
  i956.isLocked = !!i957[0]
  i956.lockMsg = i957[1]
  i956.onClick = request.d('UnityEngine.Events.UnityEvent', i957[2], i956.onClick)
  i956.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i957[3], i956.onLockedClick)
  i956.isLevelBtnSfx = !!i957[4]
  request.r(i957[5], i957[6], 0, i956, 'pivot')
  i956.reductionChange = i957[7]
  i956.animationDuration = i957[8]
  request.r(i957[9], i957[10], 0, i956, 'entryAnim')
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i959 = data
  i958.name = i959[0]
  i958.atlasId = i959[1]
  i958.mipmapCount = i959[2]
  i958.hdr = !!i959[3]
  i958.size = i959[4]
  i958.anisoLevel = i959[5]
  i958.filterMode = i959[6]
  var i961 = i959[7]
  var i960 = []
  for(var i = 0; i < i961.length; i += 4) {
    i960.push( UnityEngine.Rect.MinMaxRect(i961[i + 0], i961[i + 1], i961[i + 2], i961[i + 3]) );
  }
  i958.rects = i960
  i958.wrapU = i959[8]
  i958.wrapV = i959[9]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i965 = data
  i964.name = i965[0]
  i964.index = i965[1]
  i964.startup = !!i965[2]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i967 = data
  i966.aspect = i967[0]
  i966.orthographic = !!i967[1]
  i966.orthographicSize = i967[2]
  i966.backgroundColor = new pc.Color(i967[3], i967[4], i967[5], i967[6])
  i966.nearClipPlane = i967[7]
  i966.farClipPlane = i967[8]
  i966.fieldOfView = i967[9]
  i966.depth = i967[10]
  i966.clearFlags = i967[11]
  i966.cullingMask = i967[12]
  i966.rect = i967[13]
  request.r(i967[14], i967[15], 0, i966, 'targetTexture')
  i966.usePhysicalProperties = !!i967[16]
  i966.focalLength = i967[17]
  i966.sensorSize = new pc.Vec2( i967[18], i967[19] )
  i966.lensShift = new pc.Vec2( i967[20], i967[21] )
  i966.gateFit = i967[22]
  i966.commandBufferCount = i967[23]
  i966.cameraType = i967[24]
  i966.enabled = !!i967[25]
  return i966
}

Deserializers["CameraController"] = function (request, data, root) {
  var i968 = root || request.c( 'CameraController' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'cam')
  i968.defaultPosition = new pc.Vec3( i969[2], i969[3], i969[4] )
  i968.defaultSize = i969[5]
  i968.defaultFOV = i969[6]
  i968.defaultDuration = i969[7]
  i968.defaultEase = i969[8]
  return i968
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i970 = root || request.c( 'MusicSource' )
  var i971 = data
  request.r(i971[0], i971[1], 0, i970, 'source')
  return i970
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i972 = root || request.c( 'UI_Manager' )
  var i973 = data
  i972.levelCompleted = !!i973[0]
  i972.isPauseActive = !!i973[1]
  i972.loadIndex = i973[2]
  request.r(i973[3], i973[4], 0, i972, 'removeAdsButton')
  request.r(i973[5], i973[6], 0, i972, 'pauseButton')
  request.r(i973[7], i973[8], 0, i972, 'Fade_Img')
  request.r(i973[9], i973[10], 0, i972, 'TopBarAnim')
  request.r(i973[11], i973[12], 0, i972, 'MainPanel')
  request.r(i973[13], i973[14], 0, i972, 'PausePanel')
  request.r(i973[15], i973[16], 0, i972, 'PausePopUp')
  request.r(i973[17], i973[18], 0, i972, 'PauseCanvasGroup')
  request.r(i973[19], i973[20], 0, i972, 'RateUsPanel')
  request.r(i973[21], i973[22], 0, i972, 'RateUsPopUp')
  request.r(i973[23], i973[24], 0, i972, 'RemoveAdsPanel')
  request.r(i973[25], i973[26], 0, i972, 'RemoveAdsPopUp')
  request.r(i973[27], i973[28], 0, i972, 'RemoveAdsCanvasGroup')
  var i975 = i973[29]
  var i974 = []
  for(var i = 0; i < i975.length; i += 2) {
  request.r(i975[i + 0], i975[i + 1], 2, i974, '')
  }
  i972.RemoveAdsAnims = i974
  request.r(i973[30], i973[31], 0, i972, 'CompletePanel')
  request.r(i973[32], i973[33], 0, i972, 'LevelIcon')
  request.r(i973[34], i973[35], 0, i972, 'CompleteParticles')
  request.r(i973[36], i973[37], 0, i972, 'progressBar')
  request.r(i973[38], i973[39], 0, i972, 'progressText')
  request.r(i973[40], i973[41], 0, i972, 'toolIcon1')
  request.r(i973[42], i973[43], 0, i972, 'toolIcon2')
  request.r(i973[44], i973[45], 0, i972, 'toolIcon3')
  request.r(i973[46], i973[47], 0, i972, 'target1')
  request.r(i973[48], i973[49], 0, i972, 'target2')
  i972.toolMoveDuration = i973[50]
  i972.currentIndex = i973[51]
  var i977 = i973[52]
  var i976 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i977.length; i += 2) {
  request.r(i977[i + 0], i977[i + 1], 1, i976, '')
  }
  i972.allTools = i976
  request.r(i973[53], i973[54], 0, i972, 'clockProgress')
  request.r(i973[55], i973[56], 0, i972, 'clockProgressFill')
  request.r(i973[57], i973[58], 0, i972, 'clockAudio')
  i972.moveDistance = i973[59]
  i972.animationDuration = i973[60]
  i972.greyBgChildName = i973[61]
  i972.pushOffset = i973[62]
  return i972
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i978 = root || request.c( 'GameManagerPlayable' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'endParticles')
  request.r(i979[2], i979[3], 0, i978, 'stepCompleteParticles')
  request.r(i979[4], i979[5], 0, i978, 'DefaultMat')
  request.r(i979[6], i979[7], 0, i978, 'BG_Music')
  request.r(i979[8], i979[9], 0, i978, 'restoreEffectShader')
  request.r(i979[10], i979[11], 0, i978, 'stickerEffectShader')
  i978.isComplete = !!i979[12]
  i978.isPaused = !!i979[13]
  request.r(i979[14], i979[15], 0, i978, 'currentLevel')
  i978.startLevelOnPlay = !!i979[16]
  i978.currentLevelNo = i979[17]
  return i978
}

Deserializers["AudioController"] = function (request, data, root) {
  var i980 = root || request.c( 'AudioController' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'MainMixer')
  request.r(i981[2], i981[3], 0, i980, 'UiClick')
  request.r(i981[4], i981[5], 0, i980, 'UiClickSource')
  var i983 = i981[6]
  var i982 = []
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 2, i982, '')
  }
  i980.SfxSources = i982
  var i985 = i981[7]
  var i984 = []
  for(var i = 0; i < i985.length; i += 2) {
  request.r(i985[i + 0], i985[i + 1], 2, i984, '')
  }
  i980.AllClips = i984
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i989 = data
  i988.pivot = new pc.Vec2( i989[0], i989[1] )
  i988.anchorMin = new pc.Vec2( i989[2], i989[3] )
  i988.anchorMax = new pc.Vec2( i989[4], i989[5] )
  i988.sizeDelta = new pc.Vec2( i989[6], i989[7] )
  i988.anchoredPosition3D = new pc.Vec3( i989[8], i989[9], i989[10] )
  i988.rotation = new pc.Quat(i989[11], i989[12], i989[13], i989[14])
  i988.scale = new pc.Vec3( i989[15], i989[16], i989[17] )
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i991 = data
  i990.planeDistance = i991[0]
  i990.referencePixelsPerUnit = i991[1]
  i990.isFallbackOverlay = !!i991[2]
  i990.renderMode = i991[3]
  i990.renderOrder = i991[4]
  i990.sortingLayerName = i991[5]
  i990.sortingOrder = i991[6]
  i990.scaleFactor = i991[7]
  request.r(i991[8], i991[9], 0, i990, 'worldCamera')
  i990.overrideSorting = !!i991[10]
  i990.pixelPerfect = !!i991[11]
  i990.targetDisplay = i991[12]
  i990.overridePixelPerfect = !!i991[13]
  i990.enabled = !!i991[14]
  return i990
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i992 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i993 = data
  i992.m_UiScaleMode = i993[0]
  i992.m_ReferencePixelsPerUnit = i993[1]
  i992.m_ScaleFactor = i993[2]
  i992.m_ReferenceResolution = new pc.Vec2( i993[3], i993[4] )
  i992.m_ScreenMatchMode = i993[5]
  i992.m_MatchWidthOrHeight = i993[6]
  i992.m_PhysicalUnit = i993[7]
  i992.m_FallbackScreenDPI = i993[8]
  i992.m_DefaultSpriteDPI = i993[9]
  i992.m_DynamicPixelsPerUnit = i993[10]
  i992.m_PresetInfoIsWorld = !!i993[11]
  return i992
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i995 = data
  i994.m_IgnoreReversedGraphics = !!i995[0]
  i994.m_BlockingObjects = i995[1]
  i994.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i995[2] )
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i997 = data
  i996.cullTransparentMesh = !!i997[0]
  return i996
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i998 = root || request.c( 'UnityEngine.UI.Image' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'm_Sprite')
  i998.m_Type = i999[2]
  i998.m_PreserveAspect = !!i999[3]
  i998.m_FillCenter = !!i999[4]
  i998.m_FillMethod = i999[5]
  i998.m_FillAmount = i999[6]
  i998.m_FillClockwise = !!i999[7]
  i998.m_FillOrigin = i999[8]
  i998.m_UseSpriteMesh = !!i999[9]
  i998.m_PixelsPerUnitMultiplier = i999[10]
  request.r(i999[11], i999[12], 0, i998, 'm_Material')
  i998.m_Maskable = !!i999[13]
  i998.m_Color = new pc.Color(i999[14], i999[15], i999[16], i999[17])
  i998.m_RaycastTarget = !!i999[18]
  i998.m_RaycastPadding = new pc.Vec4( i999[19], i999[20], i999[21], i999[22] )
  return i998
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.UI.Text' )
  var i1001 = data
  i1000.m_FontData = request.d('UnityEngine.UI.FontData', i1001[0], i1000.m_FontData)
  i1000.m_Text = i1001[1]
  request.r(i1001[2], i1001[3], 0, i1000, 'm_Material')
  i1000.m_Maskable = !!i1001[4]
  i1000.m_Color = new pc.Color(i1001[5], i1001[6], i1001[7], i1001[8])
  i1000.m_RaycastTarget = !!i1001[9]
  i1000.m_RaycastPadding = new pc.Vec4( i1001[10], i1001[11], i1001[12], i1001[13] )
  return i1000
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'm_Font')
  i1002.m_FontSize = i1003[2]
  i1002.m_FontStyle = i1003[3]
  i1002.m_BestFit = !!i1003[4]
  i1002.m_MinSize = i1003[5]
  i1002.m_MaxSize = i1003[6]
  i1002.m_Alignment = i1003[7]
  i1002.m_AlignByGeometry = !!i1003[8]
  i1002.m_RichText = !!i1003[9]
  i1002.m_HorizontalOverflow = i1003[10]
  i1002.m_VerticalOverflow = i1003[11]
  i1002.m_LineSpacing = i1003[12]
  return i1002
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.UI.Button' )
  var i1005 = data
  i1004.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1005[0], i1004.m_OnClick)
  i1004.m_Navigation = request.d('UnityEngine.UI.Navigation', i1005[1], i1004.m_Navigation)
  i1004.m_Transition = i1005[2]
  i1004.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1005[3], i1004.m_Colors)
  i1004.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1005[4], i1004.m_SpriteState)
  i1004.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1005[5], i1004.m_AnimationTriggers)
  i1004.m_Interactable = !!i1005[6]
  request.r(i1005[7], i1005[8], 0, i1004, 'm_TargetGraphic')
  return i1004
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1007 = data
  i1006.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1007[0], i1006.m_PersistentCalls)
  return i1006
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1009 = data
  i1008.m_Mode = i1009[0]
  i1008.m_WrapAround = !!i1009[1]
  request.r(i1009[2], i1009[3], 0, i1008, 'm_SelectOnUp')
  request.r(i1009[4], i1009[5], 0, i1008, 'm_SelectOnDown')
  request.r(i1009[6], i1009[7], 0, i1008, 'm_SelectOnLeft')
  request.r(i1009[8], i1009[9], 0, i1008, 'm_SelectOnRight')
  return i1008
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1011 = data
  i1010.m_NormalColor = new pc.Color(i1011[0], i1011[1], i1011[2], i1011[3])
  i1010.m_HighlightedColor = new pc.Color(i1011[4], i1011[5], i1011[6], i1011[7])
  i1010.m_PressedColor = new pc.Color(i1011[8], i1011[9], i1011[10], i1011[11])
  i1010.m_SelectedColor = new pc.Color(i1011[12], i1011[13], i1011[14], i1011[15])
  i1010.m_DisabledColor = new pc.Color(i1011[16], i1011[17], i1011[18], i1011[19])
  i1010.m_ColorMultiplier = i1011[20]
  i1010.m_FadeDuration = i1011[21]
  return i1010
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'm_HighlightedSprite')
  request.r(i1013[2], i1013[3], 0, i1012, 'm_PressedSprite')
  request.r(i1013[4], i1013[5], 0, i1012, 'm_SelectedSprite')
  request.r(i1013[6], i1013[7], 0, i1012, 'm_DisabledSprite')
  return i1012
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1015 = data
  i1014.m_NormalTrigger = i1015[0]
  i1014.m_HighlightedTrigger = i1015[1]
  i1014.m_PressedTrigger = i1015[2]
  i1014.m_SelectedTrigger = i1015[3]
  i1014.m_DisabledTrigger = i1015[4]
  return i1014
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i1016 = root || request.c( 'PlayableHudRuntime' )
  var i1017 = data
  return i1016
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'm_FirstSelected')
  i1018.m_sendNavigationEvents = !!i1019[2]
  i1018.m_DragThreshold = i1019[3]
  return i1018
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1021 = data
  i1020.m_HorizontalAxis = i1021[0]
  i1020.m_VerticalAxis = i1021[1]
  i1020.m_SubmitButton = i1021[2]
  i1020.m_CancelButton = i1021[3]
  i1020.m_InputActionsPerSecond = i1021[4]
  i1020.m_RepeatDelay = i1021[5]
  i1020.m_ForceModuleActive = !!i1021[6]
  i1020.m_SendPointerHoverToParent = !!i1021[7]
  return i1020
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i1022 = root || request.c( 'PlayableRouter' )
  var i1023 = data
  var i1025 = i1023[0]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 2) {
  request.r(i1025[i + 0], i1025[i + 1], 2, i1024, '')
  }
  i1022.menuObjects = i1024
  var i1027 = i1023[1]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 2) {
  request.r(i1027[i + 0], i1027[i + 1], 2, i1026, '')
  }
  i1022.gameplayObjects = i1026
  var i1029 = i1023[2]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('PlayableRouter+SubLevelSlot', i1029[i + 0]) );
  }
  i1022.subLevels = i1028
  i1022.fadeDuration = i1023[3]
  i1022.lockedMessage = i1023[4]
  i1022.lockedTapsToCTA = i1023[5]
  return i1022
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i1032 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i1033 = data
  request.r(i1033[0], i1033[1], 0, i1032, 'button')
  request.r(i1033[2], i1033[3], 0, i1032, 'level')
  return i1032
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i1034 = root || request.c( 'ToastManager' )
  var i1035 = data
  request.r(i1035[0], i1035[1], 0, i1034, 'toastPanel')
  request.r(i1035[2], i1035[3], 0, i1034, 'toastPopup')
  request.r(i1035[4], i1035[5], 0, i1034, 'canvasGroup')
  request.r(i1035[6], i1035[7], 0, i1034, 'toastText')
  i1034.startY = i1035[8]
  i1034.visibleY = i1035[9]
  i1034.endY = i1035[10]
  i1034.animationTime = i1035[11]
  i1034.animationTimeUp = i1035[12]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1037 = data
  i1036.m_Alpha = i1037[0]
  i1036.m_Interactable = !!i1037[1]
  i1036.m_BlocksRaycasts = !!i1037[2]
  i1036.m_IgnoreParentGroups = !!i1037[3]
  i1036.enabled = !!i1037[4]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1039 = data
  i1038.ambientIntensity = i1039[0]
  i1038.reflectionIntensity = i1039[1]
  i1038.ambientMode = i1039[2]
  i1038.ambientLight = new pc.Color(i1039[3], i1039[4], i1039[5], i1039[6])
  i1038.ambientSkyColor = new pc.Color(i1039[7], i1039[8], i1039[9], i1039[10])
  i1038.ambientGroundColor = new pc.Color(i1039[11], i1039[12], i1039[13], i1039[14])
  i1038.ambientEquatorColor = new pc.Color(i1039[15], i1039[16], i1039[17], i1039[18])
  i1038.fogColor = new pc.Color(i1039[19], i1039[20], i1039[21], i1039[22])
  i1038.fogEndDistance = i1039[23]
  i1038.fogStartDistance = i1039[24]
  i1038.fogDensity = i1039[25]
  i1038.fog = !!i1039[26]
  request.r(i1039[27], i1039[28], 0, i1038, 'skybox')
  i1038.fogMode = i1039[29]
  var i1041 = i1039[30]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1041[i + 0]) );
  }
  i1038.lightmaps = i1040
  i1038.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1039[31], i1038.lightProbes)
  i1038.lightmapsMode = i1039[32]
  i1038.mixedBakeMode = i1039[33]
  i1038.environmentLightingMode = i1039[34]
  i1038.ambientProbe = new pc.SphericalHarmonicsL2(i1039[35])
  request.r(i1039[36], i1039[37], 0, i1038, 'customReflection')
  request.r(i1039[38], i1039[39], 0, i1038, 'defaultReflection')
  i1038.defaultReflectionMode = i1039[40]
  i1038.defaultReflectionResolution = i1039[41]
  i1038.sunLightObjectId = i1039[42]
  i1038.pixelLightCount = i1039[43]
  i1038.defaultReflectionHDR = !!i1039[44]
  i1038.hasLightDataAsset = !!i1039[45]
  i1038.hasManualGenerate = !!i1039[46]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'lightmapColor')
  request.r(i1045[2], i1045[3], 0, i1044, 'lightmapDirection')
  request.r(i1045[4], i1045[5], 0, i1044, 'shadowMask')
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1046 = root || new UnityEngine.LightProbes()
  var i1047 = data
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1055 = data
  var i1057 = i1055[0]
  var i1056 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1057[i + 0]));
  }
  i1054.ShaderCompilationErrors = i1056
  i1054.name = i1055[1]
  i1054.guid = i1055[2]
  var i1059 = i1055[3]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( i1059[i + 0] );
  }
  i1054.shaderDefinedKeywords = i1058
  var i1061 = i1055[4]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1061[i + 0]) );
  }
  i1054.passes = i1060
  var i1063 = i1055[5]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1063[i + 0]) );
  }
  i1054.usePasses = i1062
  var i1065 = i1055[6]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1065[i + 0]) );
  }
  i1054.defaultParameterValues = i1064
  request.r(i1055[7], i1055[8], 0, i1054, 'unityFallbackShader')
  i1054.readDepth = !!i1055[9]
  i1054.hasDepthOnlyPass = !!i1055[10]
  i1054.isCreatedByShaderGraph = !!i1055[11]
  i1054.disableBatching = !!i1055[12]
  i1054.compiled = !!i1055[13]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1069 = data
  i1068.shaderName = i1069[0]
  i1068.errorMessage = i1069[1]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1074 = root || new pc.UnityShaderPass()
  var i1075 = data
  i1074.id = i1075[0]
  i1074.subShaderIndex = i1075[1]
  i1074.name = i1075[2]
  i1074.passType = i1075[3]
  i1074.grabPassTextureName = i1075[4]
  i1074.usePass = !!i1075[5]
  i1074.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[6], i1074.zTest)
  i1074.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[7], i1074.zWrite)
  i1074.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[8], i1074.culling)
  i1074.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1075[9], i1074.blending)
  i1074.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1075[10], i1074.alphaBlending)
  i1074.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[11], i1074.colorWriteMask)
  i1074.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[12], i1074.offsetUnits)
  i1074.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[13], i1074.offsetFactor)
  i1074.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[14], i1074.stencilRef)
  i1074.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[15], i1074.stencilReadMask)
  i1074.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1075[16], i1074.stencilWriteMask)
  i1074.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1075[17], i1074.stencilOp)
  i1074.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1075[18], i1074.stencilOpFront)
  i1074.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1075[19], i1074.stencilOpBack)
  var i1077 = i1075[20]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1077[i + 0]) );
  }
  i1074.tags = i1076
  var i1079 = i1075[21]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( i1079[i + 0] );
  }
  i1074.passDefinedKeywords = i1078
  var i1081 = i1075[22]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1081[i + 0]) );
  }
  i1074.passDefinedKeywordGroups = i1080
  var i1083 = i1075[23]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1083[i + 0]) );
  }
  i1074.variants = i1082
  var i1085 = i1075[24]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1085[i + 0]) );
  }
  i1074.excludedVariants = i1084
  i1074.hasDepthReader = !!i1075[25]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1087 = data
  i1086.val = i1087[0]
  i1086.name = i1087[1]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1089 = data
  i1088.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1089[0], i1088.src)
  i1088.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1089[1], i1088.dst)
  i1088.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1089[2], i1088.op)
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1091 = data
  i1090.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[0], i1090.pass)
  i1090.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[1], i1090.fail)
  i1090.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[2], i1090.zFail)
  i1090.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1091[3], i1090.comp)
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1095 = data
  i1094.name = i1095[0]
  i1094.value = i1095[1]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1099 = data
  var i1101 = i1099[0]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( i1101[i + 0] );
  }
  i1098.keywords = i1100
  i1098.hasDiscard = !!i1099[1]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1105 = data
  i1104.passId = i1105[0]
  i1104.subShaderIndex = i1105[1]
  var i1107 = i1105[2]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( i1107[i + 0] );
  }
  i1104.keywords = i1106
  i1104.vertexProgram = i1105[3]
  i1104.fragmentProgram = i1105[4]
  i1104.exportedForWebGl2 = !!i1105[5]
  i1104.readDepth = !!i1105[6]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'shader')
  i1110.pass = i1111[2]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1115 = data
  i1114.name = i1115[0]
  i1114.type = i1115[1]
  i1114.value = new pc.Vec4( i1115[2], i1115[3], i1115[4], i1115[5] )
  i1114.textureValue = i1115[6]
  i1114.shaderPropertyFlag = i1115[7]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1117 = data
  i1116.name = i1117[0]
  request.r(i1117[1], i1117[2], 0, i1116, 'texture')
  i1116.aabb = i1117[3]
  i1116.vertices = i1117[4]
  i1116.triangles = i1117[5]
  i1116.textureRect = UnityEngine.Rect.MinMaxRect(i1117[6], i1117[7], i1117[8], i1117[9])
  i1116.packedRect = UnityEngine.Rect.MinMaxRect(i1117[10], i1117[11], i1117[12], i1117[13])
  i1116.border = new pc.Vec4( i1117[14], i1117[15], i1117[16], i1117[17] )
  i1116.transparency = i1117[18]
  i1116.bounds = i1117[19]
  i1116.pixelsPerUnit = i1117[20]
  i1116.textureWidth = i1117[21]
  i1116.textureHeight = i1117[22]
  i1116.nativeSize = new pc.Vec2( i1117[23], i1117[24] )
  i1116.pivot = new pc.Vec2( i1117[25], i1117[26] )
  i1116.textureRectOffset = new pc.Vec2( i1117[27], i1117[28] )
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1119 = data
  i1118.name = i1119[0]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1121 = data
  i1120.name = i1121[0]
  i1120.wrapMode = i1121[1]
  i1120.isLooping = !!i1121[2]
  i1120.length = i1121[3]
  var i1123 = i1121[4]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1123[i + 0]) );
  }
  i1120.curves = i1122
  var i1125 = i1121[5]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1125[i + 0]) );
  }
  i1120.events = i1124
  i1120.halfPrecision = !!i1121[6]
  i1120._frameRate = i1121[7]
  i1120.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1121[8], i1120.localBounds)
  i1120.hasMuscleCurves = !!i1121[9]
  var i1127 = i1121[10]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( i1127[i + 0] );
  }
  i1120.clipMuscleConstant = i1126
  i1120.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1121[11], i1120.clipBindingConstant)
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1131 = data
  i1130.path = i1131[0]
  i1130.hash = i1131[1]
  i1130.componentType = i1131[2]
  i1130.property = i1131[3]
  i1130.keys = i1131[4]
  var i1133 = i1131[5]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1133[i + 0]) );
  }
  i1130.objectReferenceKeys = i1132
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1137 = data
  i1136.time = i1137[0]
  request.r(i1137[1], i1137[2], 0, i1136, 'value')
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1141 = data
  i1140.functionName = i1141[0]
  i1140.floatParameter = i1141[1]
  i1140.intParameter = i1141[2]
  i1140.stringParameter = i1141[3]
  request.r(i1141[4], i1141[5], 0, i1140, 'objectReferenceParameter')
  i1140.time = i1141[6]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1143 = data
  i1142.center = new pc.Vec3( i1143[0], i1143[1], i1143[2] )
  i1142.extends = new pc.Vec3( i1143[3], i1143[4], i1143[5] )
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1147 = data
  var i1149 = i1147[0]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( i1149[i + 0] );
  }
  i1146.genericBindings = i1148
  var i1151 = i1147[1]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( i1151[i + 0] );
  }
  i1146.pptrCurveMapping = i1150
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1153 = data
  i1152.name = i1153[0]
  i1152.ascent = i1153[1]
  i1152.originalLineHeight = i1153[2]
  i1152.fontSize = i1153[3]
  var i1155 = i1153[4]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1155[i + 0]) );
  }
  i1152.characterInfo = i1154
  request.r(i1153[5], i1153[6], 0, i1152, 'texture')
  i1152.originalFontSize = i1153[7]
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1159 = data
  i1158.index = i1159[0]
  i1158.advance = i1159[1]
  i1158.bearing = i1159[2]
  i1158.glyphWidth = i1159[3]
  i1158.glyphHeight = i1159[4]
  i1158.minX = i1159[5]
  i1158.maxX = i1159[6]
  i1158.minY = i1159[7]
  i1158.maxY = i1159[8]
  i1158.uvBottomLeftX = i1159[9]
  i1158.uvBottomLeftY = i1159[10]
  i1158.uvBottomRightX = i1159[11]
  i1158.uvBottomRightY = i1159[12]
  i1158.uvTopLeftX = i1159[13]
  i1158.uvTopLeftY = i1159[14]
  i1158.uvTopRightX = i1159[15]
  i1158.uvTopRightY = i1159[16]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1161 = data
  i1160.name = i1161[0]
  var i1163 = i1161[1]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1163[i + 0]) );
  }
  i1160.layers = i1162
  var i1165 = i1161[2]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1165[i + 0]) );
  }
  i1160.parameters = i1164
  i1160.animationClips = i1161[3]
  i1160.avatarUnsupported = i1161[4]
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1169 = data
  i1168.name = i1169[0]
  i1168.defaultWeight = i1169[1]
  i1168.blendingMode = i1169[2]
  i1168.avatarMask = i1169[3]
  i1168.syncedLayerIndex = i1169[4]
  i1168.syncedLayerAffectsTiming = !!i1169[5]
  i1168.syncedLayers = i1169[6]
  i1168.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1169[7], i1168.stateMachine)
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1171 = data
  i1170.id = i1171[0]
  i1170.name = i1171[1]
  i1170.path = i1171[2]
  var i1173 = i1171[3]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1173[i + 0]) );
  }
  i1170.states = i1172
  var i1175 = i1171[4]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1175[i + 0]) );
  }
  i1170.machines = i1174
  var i1177 = i1171[5]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1177[i + 0]) );
  }
  i1170.entryStateTransitions = i1176
  var i1179 = i1171[6]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1179[i + 0]) );
  }
  i1170.exitStateTransitions = i1178
  var i1181 = i1171[7]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1181[i + 0]) );
  }
  i1170.anyStateTransitions = i1180
  i1170.defaultStateId = i1171[8]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1185 = data
  i1184.id = i1185[0]
  i1184.name = i1185[1]
  i1184.cycleOffset = i1185[2]
  i1184.cycleOffsetParameter = i1185[3]
  i1184.cycleOffsetParameterActive = !!i1185[4]
  i1184.mirror = !!i1185[5]
  i1184.mirrorParameter = i1185[6]
  i1184.mirrorParameterActive = !!i1185[7]
  i1184.motionId = i1185[8]
  i1184.nameHash = i1185[9]
  i1184.fullPathHash = i1185[10]
  i1184.speed = i1185[11]
  i1184.speedParameter = i1185[12]
  i1184.speedParameterActive = !!i1185[13]
  i1184.tag = i1185[14]
  i1184.tagHash = i1185[15]
  i1184.writeDefaultValues = !!i1185[16]
  var i1187 = i1185[17]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 2) {
  request.r(i1187[i + 0], i1187[i + 1], 2, i1186, '')
  }
  i1184.behaviours = i1186
  var i1189 = i1185[18]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1189[i + 0]) );
  }
  i1184.transitions = i1188
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1195 = data
  i1194.fullPath = i1195[0]
  i1194.canTransitionToSelf = !!i1195[1]
  i1194.duration = i1195[2]
  i1194.exitTime = i1195[3]
  i1194.hasExitTime = !!i1195[4]
  i1194.hasFixedDuration = !!i1195[5]
  i1194.interruptionSource = i1195[6]
  i1194.offset = i1195[7]
  i1194.orderedInterruption = !!i1195[8]
  i1194.destinationStateId = i1195[9]
  i1194.isExit = !!i1195[10]
  i1194.mute = !!i1195[11]
  i1194.solo = !!i1195[12]
  var i1197 = i1195[13]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1197[i + 0]) );
  }
  i1194.conditions = i1196
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1203 = data
  i1202.destinationStateId = i1203[0]
  i1202.isExit = !!i1203[1]
  i1202.mute = !!i1203[2]
  i1202.solo = !!i1203[3]
  var i1205 = i1203[4]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1205[i + 0]) );
  }
  i1202.conditions = i1204
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1209 = data
  i1208.mode = i1209[0]
  i1208.parameter = i1209[1]
  i1208.threshold = i1209[2]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1213 = data
  i1212.defaultBool = !!i1213[0]
  i1212.defaultFloat = i1213[1]
  i1212.defaultInt = i1213[2]
  i1212.name = i1213[3]
  i1212.nameHash = i1213[4]
  i1212.type = i1213[5]
  return i1212
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1214 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1215 = data
  i1214.useSafeMode = !!i1215[0]
  i1214.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1215[1], i1214.safeModeOptions)
  i1214.timeScale = i1215[2]
  i1214.unscaledTimeScale = i1215[3]
  i1214.useSmoothDeltaTime = !!i1215[4]
  i1214.maxSmoothUnscaledTime = i1215[5]
  i1214.rewindCallbackMode = i1215[6]
  i1214.showUnityEditorReport = !!i1215[7]
  i1214.logBehaviour = i1215[8]
  i1214.drawGizmos = !!i1215[9]
  i1214.defaultRecyclable = !!i1215[10]
  i1214.defaultAutoPlay = i1215[11]
  i1214.defaultUpdateType = i1215[12]
  i1214.defaultTimeScaleIndependent = !!i1215[13]
  i1214.defaultEaseType = i1215[14]
  i1214.defaultEaseOvershootOrAmplitude = i1215[15]
  i1214.defaultEasePeriod = i1215[16]
  i1214.defaultAutoKill = !!i1215[17]
  i1214.defaultLoopType = i1215[18]
  i1214.debugMode = !!i1215[19]
  i1214.debugStoreTargetId = !!i1215[20]
  i1214.showPreviewPanel = !!i1215[21]
  i1214.storeSettingsLocation = i1215[22]
  i1214.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1215[23], i1214.modules)
  i1214.createASMDEF = !!i1215[24]
  i1214.showPlayingTweens = !!i1215[25]
  i1214.showPausedTweens = !!i1215[26]
  return i1214
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1216 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1217 = data
  i1216.logBehaviour = i1217[0]
  i1216.nestedTweenFailureBehaviour = i1217[1]
  return i1216
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1218 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1219 = data
  i1218.showPanel = !!i1219[0]
  i1218.audioEnabled = !!i1219[1]
  i1218.physicsEnabled = !!i1219[2]
  i1218.physics2DEnabled = !!i1219[3]
  i1218.spriteEnabled = !!i1219[4]
  i1218.uiEnabled = !!i1219[5]
  i1218.textMeshProEnabled = !!i1219[6]
  i1218.tk2DEnabled = !!i1219[7]
  i1218.deAudioEnabled = !!i1219[8]
  i1218.deUnityExtendedEnabled = !!i1219[9]
  i1218.epoOutlineEnabled = !!i1219[10]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1221 = data
  var i1223 = i1221[0]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1223[i + 0]) );
  }
  i1220.files = i1222
  i1220.componentToPrefabIds = i1221[1]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1227 = data
  i1226.path = i1227[0]
  request.r(i1227[1], i1227[2], 0, i1226, 'unityObject')
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1229 = data
  var i1231 = i1229[0]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1231[i + 0]) );
  }
  i1228.scriptsExecutionOrder = i1230
  var i1233 = i1229[1]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1233[i + 0]) );
  }
  i1228.sortingLayers = i1232
  var i1235 = i1229[2]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1235[i + 0]) );
  }
  i1228.cullingLayers = i1234
  i1228.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1229[3], i1228.timeSettings)
  i1228.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1229[4], i1228.physicsSettings)
  i1228.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1229[5], i1228.physics2DSettings)
  i1228.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1229[6], i1228.qualitySettings)
  i1228.enableRealtimeShadows = !!i1229[7]
  i1228.enableAutoInstancing = !!i1229[8]
  i1228.enableStaticBatching = !!i1229[9]
  i1228.enableDynamicBatching = !!i1229[10]
  i1228.usePreservativeDynamicBatching = !!i1229[11]
  i1228.lightmapEncodingQuality = i1229[12]
  i1228.desiredColorSpace = i1229[13]
  var i1237 = i1229[14]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( i1237[i + 0] );
  }
  i1228.allTags = i1236
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1241 = data
  i1240.name = i1241[0]
  i1240.value = i1241[1]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1245 = data
  i1244.id = i1245[0]
  i1244.name = i1245[1]
  i1244.value = i1245[2]
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1249 = data
  i1248.id = i1249[0]
  i1248.name = i1249[1]
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1251 = data
  i1250.fixedDeltaTime = i1251[0]
  i1250.maximumDeltaTime = i1251[1]
  i1250.timeScale = i1251[2]
  i1250.maximumParticleTimestep = i1251[3]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1253 = data
  i1252.gravity = new pc.Vec3( i1253[0], i1253[1], i1253[2] )
  i1252.defaultSolverIterations = i1253[3]
  i1252.bounceThreshold = i1253[4]
  i1252.autoSyncTransforms = !!i1253[5]
  i1252.autoSimulation = !!i1253[6]
  var i1255 = i1253[7]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1255[i + 0]) );
  }
  i1252.collisionMatrix = i1254
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1259 = data
  i1258.enabled = !!i1259[0]
  i1258.layerId = i1259[1]
  i1258.otherLayerId = i1259[2]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1261 = data
  request.r(i1261[0], i1261[1], 0, i1260, 'material')
  i1260.gravity = new pc.Vec2( i1261[2], i1261[3] )
  i1260.positionIterations = i1261[4]
  i1260.velocityIterations = i1261[5]
  i1260.velocityThreshold = i1261[6]
  i1260.maxLinearCorrection = i1261[7]
  i1260.maxAngularCorrection = i1261[8]
  i1260.maxTranslationSpeed = i1261[9]
  i1260.maxRotationSpeed = i1261[10]
  i1260.baumgarteScale = i1261[11]
  i1260.baumgarteTOIScale = i1261[12]
  i1260.timeToSleep = i1261[13]
  i1260.linearSleepTolerance = i1261[14]
  i1260.angularSleepTolerance = i1261[15]
  i1260.defaultContactOffset = i1261[16]
  i1260.autoSimulation = !!i1261[17]
  i1260.queriesHitTriggers = !!i1261[18]
  i1260.queriesStartInColliders = !!i1261[19]
  i1260.callbacksOnDisable = !!i1261[20]
  i1260.reuseCollisionCallbacks = !!i1261[21]
  i1260.autoSyncTransforms = !!i1261[22]
  var i1263 = i1261[23]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1263[i + 0]) );
  }
  i1260.collisionMatrix = i1262
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1267 = data
  i1266.enabled = !!i1267[0]
  i1266.layerId = i1267[1]
  i1266.otherLayerId = i1267[2]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1269 = data
  var i1271 = i1269[0]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1271[i + 0]) );
  }
  i1268.qualityLevels = i1270
  var i1273 = i1269[1]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( i1273[i + 0] );
  }
  i1268.names = i1272
  i1268.shadows = i1269[2]
  i1268.anisotropicFiltering = i1269[3]
  i1268.antiAliasing = i1269[4]
  i1268.lodBias = i1269[5]
  i1268.shadowCascades = i1269[6]
  i1268.shadowDistance = i1269[7]
  i1268.shadowmaskMode = i1269[8]
  i1268.shadowProjection = i1269[9]
  i1268.shadowResolution = i1269[10]
  i1268.softParticles = !!i1269[11]
  i1268.softVegetation = !!i1269[12]
  i1268.activeColorSpace = i1269[13]
  i1268.desiredColorSpace = i1269[14]
  i1268.masterTextureLimit = i1269[15]
  i1268.maxQueuedFrames = i1269[16]
  i1268.particleRaycastBudget = i1269[17]
  i1268.pixelLightCount = i1269[18]
  i1268.realtimeReflectionProbes = !!i1269[19]
  i1268.shadowCascade2Split = i1269[20]
  i1268.shadowCascade4Split = new pc.Vec3( i1269[21], i1269[22], i1269[23] )
  i1268.streamingMipmapsActive = !!i1269[24]
  i1268.vSyncCount = i1269[25]
  i1268.asyncUploadBufferSize = i1269[26]
  i1268.asyncUploadTimeSlice = i1269[27]
  i1268.billboardsFaceCameraPosition = !!i1269[28]
  i1268.shadowNearPlaneOffset = i1269[29]
  i1268.streamingMipmapsMemoryBudget = i1269[30]
  i1268.maximumLODLevel = i1269[31]
  i1268.streamingMipmapsAddAllCameras = !!i1269[32]
  i1268.streamingMipmapsMaxLevelReduction = i1269[33]
  i1268.streamingMipmapsRenderersPerFrame = i1269[34]
  i1268.resolutionScalingFixedDPIFactor = i1269[35]
  i1268.streamingMipmapsMaxFileIORequests = i1269[36]
  i1268.currentQualityLevel = i1269[37]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i1277 = data
  var i1279 = i1277[0]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i1279[i + 0]) );
  }
  i1276.groups = i1278
  var i1281 = i1277[1]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i1281[i + 0]) );
  }
  i1276.snapshots = i1280
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i1285 = data
  i1284.id = i1285[0]
  i1284.childGroupIds = i1285[1]
  i1284.name = i1285[2]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i1289 = data
  i1288.id = i1289[0]
  var i1291 = i1289[1]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i1291[i + 0]) );
  }
  i1288.parameters = i1290
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i1295 = data
  i1294.name = i1295[0]
  i1294.value = i1295[1]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1299 = data
  i1298.weight = i1299[0]
  i1298.vertices = i1299[1]
  i1298.normals = i1299[2]
  i1298.tangents = i1299[3]
  return i1298
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[77],"78":[44],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[35],"88":[35],"89":[35],"90":[35],"91":[35],"92":[35],"93":[35],"94":[35],"95":[35],"96":[35],"97":[35],"98":[35],"99":[35],"100":[44],"101":[102],"103":[104],"105":[104],"55":[49],"106":[107],"108":[12],"109":[26],"110":[12],"111":[112],"113":[112],"114":[40],"42":[26],"115":[12],"34":[12],"116":[49],"117":[49],"58":[55],"50":[59,49],"118":[49],"57":[55],"119":[49],"120":[49],"121":[49],"122":[49],"123":[49],"124":[49],"125":[49],"126":[49],"127":[49],"128":[59,49],"129":[49],"130":[49],"131":[49],"132":[49],"51":[59,49],"133":[49],"134":[63],"135":[63],"64":[63],"136":[63],"137":[44],"138":[44]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level3_Crown_Playable","UnityEngine.GameObject","BasicDrag","BD_CameraFollow","UnityEngine.SpriteRenderer","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","PlayParticlesOnCollision","UnityEngine.CircleCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.PolygonCollider2D","UnityEngine.BoxCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SpriteMask","BD_Progress","BD_Clamp","BD_ToolRotate","BD_AnimatorDrag","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.Rigidbody2D","BD_SpriteChange","BD_ProgressHelper","DestroyObj","MenuLevel","DG.Tweening.DOTweenAnimation","Level_PoseController","SpriteButton","PlayableRouter","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "19.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "28Aug2026_Level_3_1_Step_1to3_v4_TEST";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1701";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4765";

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

Deserializers.buildID = "19b76a9c-82d7-4fb0-b2fc-0c03f9ff7f93";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

