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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i801 = data
  i800.pivot = new pc.Vec2( i801[0], i801[1] )
  i800.anchorMin = new pc.Vec2( i801[2], i801[3] )
  i800.anchorMax = new pc.Vec2( i801[4], i801[5] )
  i800.sizeDelta = new pc.Vec2( i801[6], i801[7] )
  i800.anchoredPosition3D = new pc.Vec3( i801[8], i801[9], i801[10] )
  i800.rotation = new pc.Quat(i801[11], i801[12], i801[13], i801[14])
  i800.scale = new pc.Vec3( i801[15], i801[16], i801[17] )
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i803 = data
  i802.planeDistance = i803[0]
  i802.referencePixelsPerUnit = i803[1]
  i802.isFallbackOverlay = !!i803[2]
  i802.renderMode = i803[3]
  i802.renderOrder = i803[4]
  i802.sortingLayerName = i803[5]
  i802.sortingOrder = i803[6]
  i802.scaleFactor = i803[7]
  request.r(i803[8], i803[9], 0, i802, 'worldCamera')
  i802.overrideSorting = !!i803[10]
  i802.pixelPerfect = !!i803[11]
  i802.targetDisplay = i803[12]
  i802.overridePixelPerfect = !!i803[13]
  i802.enabled = !!i803[14]
  return i802
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i805 = data
  i804.m_UiScaleMode = i805[0]
  i804.m_ReferencePixelsPerUnit = i805[1]
  i804.m_ScaleFactor = i805[2]
  i804.m_ReferenceResolution = new pc.Vec2( i805[3], i805[4] )
  i804.m_ScreenMatchMode = i805[5]
  i804.m_MatchWidthOrHeight = i805[6]
  i804.m_PhysicalUnit = i805[7]
  i804.m_FallbackScreenDPI = i805[8]
  i804.m_DefaultSpriteDPI = i805[9]
  i804.m_DynamicPixelsPerUnit = i805[10]
  i804.m_PresetInfoIsWorld = !!i805[11]
  return i804
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i807 = data
  i806.m_IgnoreReversedGraphics = !!i807[0]
  i806.m_BlockingObjects = i807[1]
  i806.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i807[2] )
  return i806
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i808 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i809 = data
  i808.targetIsSelf = !!i809[0]
  request.r(i809[1], i809[2], 0, i808, 'targetGO')
  i808.tweenTargetIsTargetGO = !!i809[3]
  i808.delay = i809[4]
  i808.duration = i809[5]
  i808.easeType = i809[6]
  i808.easeCurve = new pc.AnimationCurve( { keys_flow: i809[7] } )
  i808.loopType = i809[8]
  i808.loops = i809[9]
  i808.id = i809[10]
  i808.isRelative = !!i809[11]
  i808.isFrom = !!i809[12]
  i808.isIndependentUpdate = !!i809[13]
  i808.autoKill = !!i809[14]
  i808.autoGenerate = !!i809[15]
  i808.isActive = !!i809[16]
  i808.isValid = !!i809[17]
  request.r(i809[18], i809[19], 0, i808, 'target')
  i808.animationType = i809[20]
  i808.targetType = i809[21]
  i808.forcedTargetType = i809[22]
  i808.autoPlay = !!i809[23]
  i808.useTargetAsV3 = !!i809[24]
  i808.endValueFloat = i809[25]
  i808.endValueV3 = new pc.Vec3( i809[26], i809[27], i809[28] )
  i808.endValueV2 = new pc.Vec2( i809[29], i809[30] )
  i808.endValueColor = new pc.Color(i809[31], i809[32], i809[33], i809[34])
  i808.endValueString = i809[35]
  i808.endValueRect = UnityEngine.Rect.MinMaxRect(i809[36], i809[37], i809[38], i809[39])
  request.r(i809[40], i809[41], 0, i808, 'endValueTransform')
  i808.optionalBool0 = !!i809[42]
  i808.optionalBool1 = !!i809[43]
  i808.optionalFloat0 = i809[44]
  i808.optionalInt0 = i809[45]
  i808.optionalRotationMode = i809[46]
  i808.optionalScrambleMode = i809[47]
  i808.optionalShakeRandomnessMode = i809[48]
  i808.optionalString = i809[49]
  i808.updateType = i809[50]
  i808.isSpeedBased = !!i809[51]
  i808.hasOnStart = !!i809[52]
  i808.hasOnPlay = !!i809[53]
  i808.hasOnUpdate = !!i809[54]
  i808.hasOnStepComplete = !!i809[55]
  i808.hasOnComplete = !!i809[56]
  i808.hasOnTweenCreated = !!i809[57]
  i808.hasOnRewind = !!i809[58]
  i808.onStart = request.d('UnityEngine.Events.UnityEvent', i809[59], i808.onStart)
  i808.onPlay = request.d('UnityEngine.Events.UnityEvent', i809[60], i808.onPlay)
  i808.onUpdate = request.d('UnityEngine.Events.UnityEvent', i809[61], i808.onUpdate)
  i808.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i809[62], i808.onStepComplete)
  i808.onComplete = request.d('UnityEngine.Events.UnityEvent', i809[63], i808.onComplete)
  i808.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i809[64], i808.onTweenCreated)
  i808.onRewind = request.d('UnityEngine.Events.UnityEvent', i809[65], i808.onRewind)
  return i808
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i811 = data
  i810.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i811[0], i810.m_PersistentCalls)
  return i810
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i813 = data
  var i815 = i813[0]
  var i814 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i815.length; i += 1) {
    i814.add(request.d('UnityEngine.Events.PersistentCall', i815[i + 0]));
  }
  i812.m_Calls = i814
  return i812
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'm_Target')
  i818.m_TargetAssemblyTypeName = i819[2]
  i818.m_MethodName = i819[3]
  i818.m_Mode = i819[4]
  i818.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i819[5], i818.m_Arguments)
  i818.m_CallState = i819[6]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i821 = data
  i820.cullTransparentMesh = !!i821[0]
  return i820
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.UI.Image' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'm_Sprite')
  i822.m_Type = i823[2]
  i822.m_PreserveAspect = !!i823[3]
  i822.m_FillCenter = !!i823[4]
  i822.m_FillMethod = i823[5]
  i822.m_FillAmount = i823[6]
  i822.m_FillClockwise = !!i823[7]
  i822.m_FillOrigin = i823[8]
  i822.m_UseSpriteMesh = !!i823[9]
  i822.m_PixelsPerUnitMultiplier = i823[10]
  request.r(i823[11], i823[12], 0, i822, 'm_Material')
  i822.m_Maskable = !!i823[13]
  i822.m_Color = new pc.Color(i823[14], i823[15], i823[16], i823[17])
  i822.m_RaycastTarget = !!i823[18]
  i822.m_RaycastPadding = new pc.Vec4( i823[19], i823[20], i823[21], i823[22] )
  return i822
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.UI.Text' )
  var i825 = data
  i824.m_FontData = request.d('UnityEngine.UI.FontData', i825[0], i824.m_FontData)
  i824.m_Text = i825[1]
  request.r(i825[2], i825[3], 0, i824, 'm_Material')
  i824.m_Maskable = !!i825[4]
  i824.m_Color = new pc.Color(i825[5], i825[6], i825[7], i825[8])
  i824.m_RaycastTarget = !!i825[9]
  i824.m_RaycastPadding = new pc.Vec4( i825[10], i825[11], i825[12], i825[13] )
  return i824
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.UI.FontData' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'm_Font')
  i826.m_FontSize = i827[2]
  i826.m_FontStyle = i827[3]
  i826.m_BestFit = !!i827[4]
  i826.m_MinSize = i827[5]
  i826.m_MaxSize = i827[6]
  i826.m_Alignment = i827[7]
  i826.m_AlignByGeometry = !!i827[8]
  i826.m_RichText = !!i827[9]
  i826.m_HorizontalOverflow = i827[10]
  i826.m_VerticalOverflow = i827[11]
  i826.m_LineSpacing = i827[12]
  return i826
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.UI.Button' )
  var i829 = data
  i828.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i829[0], i828.m_OnClick)
  i828.m_Navigation = request.d('UnityEngine.UI.Navigation', i829[1], i828.m_Navigation)
  i828.m_Transition = i829[2]
  i828.m_Colors = request.d('UnityEngine.UI.ColorBlock', i829[3], i828.m_Colors)
  i828.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i829[4], i828.m_SpriteState)
  i828.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i829[5], i828.m_AnimationTriggers)
  i828.m_Interactable = !!i829[6]
  request.r(i829[7], i829[8], 0, i828, 'm_TargetGraphic')
  return i828
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i831 = data
  i830.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i831[0], i830.m_PersistentCalls)
  return i830
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'm_ObjectArgument')
  i832.m_ObjectArgumentAssemblyTypeName = i833[2]
  i832.m_IntArgument = i833[3]
  i832.m_FloatArgument = i833[4]
  i832.m_StringArgument = i833[5]
  i832.m_BoolArgument = !!i833[6]
  return i832
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i835 = data
  i834.m_Mode = i835[0]
  i834.m_WrapAround = !!i835[1]
  request.r(i835[2], i835[3], 0, i834, 'm_SelectOnUp')
  request.r(i835[4], i835[5], 0, i834, 'm_SelectOnDown')
  request.r(i835[6], i835[7], 0, i834, 'm_SelectOnLeft')
  request.r(i835[8], i835[9], 0, i834, 'm_SelectOnRight')
  return i834
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i837 = data
  i836.m_NormalColor = new pc.Color(i837[0], i837[1], i837[2], i837[3])
  i836.m_HighlightedColor = new pc.Color(i837[4], i837[5], i837[6], i837[7])
  i836.m_PressedColor = new pc.Color(i837[8], i837[9], i837[10], i837[11])
  i836.m_SelectedColor = new pc.Color(i837[12], i837[13], i837[14], i837[15])
  i836.m_DisabledColor = new pc.Color(i837[16], i837[17], i837[18], i837[19])
  i836.m_ColorMultiplier = i837[20]
  i836.m_FadeDuration = i837[21]
  return i836
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'm_HighlightedSprite')
  request.r(i839[2], i839[3], 0, i838, 'm_PressedSprite')
  request.r(i839[4], i839[5], 0, i838, 'm_SelectedSprite')
  request.r(i839[6], i839[7], 0, i838, 'm_DisabledSprite')
  return i838
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i841 = data
  i840.m_NormalTrigger = i841[0]
  i840.m_HighlightedTrigger = i841[1]
  i840.m_PressedTrigger = i841[2]
  i840.m_SelectedTrigger = i841[3]
  i840.m_DisabledTrigger = i841[4]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'animatorController')
  request.r(i843[2], i843[3], 0, i842, 'avatar')
  i842.updateMode = i843[4]
  i842.hasTransformHierarchy = !!i843[5]
  i842.applyRootMotion = !!i843[6]
  var i845 = i843[7]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i842.humanBones = i844
  i842.enabled = !!i843[8]
  return i842
}

Deserializers["Level1_Cloth_Playable_Step4"] = function (request, data, root) {
  var i848 = root || request.c( 'Level1_Cloth_Playable_Step4' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'WashingView')
  request.r(i849[2], i849[3], 0, i848, 'WashingTools')
  request.r(i849[4], i849[5], 0, i848, 'DressingView')
  request.r(i849[6], i849[7], 0, i848, 'DressingTools')
  i848.ZoomStep1 = request.d('ZoomPos', i849[8], i848.ZoomStep1)
  request.r(i849[9], i849[10], 0, i848, 'ToolStep1')
  request.r(i849[11], i849[12], 0, i848, 'Basket_Cloth')
  request.r(i849[13], i849[14], 0, i848, 'clothInside')
  request.r(i849[15], i849[16], 0, i848, 'clothRound')
  request.r(i849[17], i849[18], 0, i848, 'machineDoor')
  request.r(i849[19], i849[20], 0, i848, 'machineGlass')
  i848.ZoomStep2 = request.d('ZoomPos', i849[21], i848.ZoomStep2)
  i848.ZoomStep2b = request.d('ZoomPos', i849[22], i848.ZoomStep2b)
  request.r(i849[23], i849[24], 0, i848, 'ToolStep2')
  request.r(i849[25], i849[26], 0, i848, 'ToolStep2CamFollow')
  request.r(i849[27], i849[28], 0, i848, 'drawerObj')
  request.r(i849[29], i849[30], 0, i848, 'surfObj')
  request.r(i849[31], i849[32], 0, i848, 'surfPackTop')
  request.r(i849[33], i849[34], 0, i848, 'handStep2')
  request.r(i849[35], i849[36], 0, i848, 'surfController')
  request.r(i849[37], i849[38], 0, i848, 'clothsInside')
  request.r(i849[39], i849[40], 0, i848, 'clothsInsideGlass')
  request.r(i849[41], i849[42], 0, i848, 'clothsStaticClean')
  request.r(i849[43], i849[44], 0, i848, 'wetCloths')
  request.r(i849[45], i849[46], 0, i848, 'clothCleanInside')
  request.r(i849[47], i849[48], 0, i848, 'clothCleanInsideAnim')
  request.r(i849[49], i849[50], 0, i848, 'waterWave')
  request.r(i849[51], i849[52], 0, i848, 'clothCleanInside2')
  request.r(i849[53], i849[54], 0, i848, 'clothCleanInside2Cam')
  request.r(i849[55], i849[56], 0, i848, 'clothBasketTarget')
  request.r(i849[57], i849[58], 0, i848, 'clothBasketTarget2')
  request.r(i849[59], i849[60], 0, i848, 'waterSplash_Vfx')
  request.r(i849[61], i849[62], 0, i848, 'countDownTimerText')
  i848.countDown = i849[63]
  request.r(i849[64], i849[65], 0, i848, 'machineTimer')
  request.r(i849[66], i849[67], 0, i848, 'machineTimerRotater')
  request.r(i849[68], i849[69], 0, i848, 'machineTimerIndication')
  request.r(i849[70], i849[71], 0, i848, 'darazOpenSfx')
  request.r(i849[72], i849[73], 0, i848, 'darazCloseSfx')
  request.r(i849[74], i849[75], 0, i848, 'doorOpenSfx')
  request.r(i849[76], i849[77], 0, i848, 'machineStartSfx')
  request.r(i849[78], i849[79], 0, i848, 'machineFinishSfx')
  request.r(i849[80], i849[81], 0, i848, 'waterDrainSfx')
  i848.ZoomStep3a = request.d('ZoomPos', i849[82], i848.ZoomStep3a)
  request.r(i849[83], i849[84], 0, i848, 'ToolStep3a')
  request.r(i849[85], i849[86], 0, i848, 'ToolStep3aRend')
  request.r(i849[87], i849[88], 0, i848, 'dressingBasket')
  request.r(i849[89], i849[90], 0, i848, 'dummyFullParent')
  request.r(i849[91], i849[92], 0, i848, 'DressParent')
  i848.ZoomStep3 = request.d('ZoomPos', i849[93], i848.ZoomStep3)
  request.r(i849[94], i849[95], 0, i848, 'ToolStep3')
  request.r(i849[96], i849[97], 0, i848, 'tornPatch')
  request.r(i849[98], i849[99], 0, i848, 'patchCompleted')
  request.r(i849[100], i849[101], 0, i848, 'patchOutline')
  i848.ZoomStep4 = request.d('ZoomPos', i849[102], i848.ZoomStep4)
  request.r(i849[103], i849[104], 0, i848, 'ToolStep4')
  request.r(i849[105], i849[106], 0, i848, 'camFollowStep4')
  request.r(i849[107], i849[108], 0, i848, 'SteamerBottom')
  i848.levelName = i849[109]
  i848.levelReward = i849[110]
  request.r(i849[111], i849[112], 0, i848, 'LevelIcon')
  request.r(i849[113], i849[114], 0, i848, 'Level_BG')
  var i851 = i849[115]
  var i850 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 1, i850, '')
  }
  i848.ToolIcons = i850
  var i853 = i849[116]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 2, i852, '')
  }
  i848.AllDrags = i852
  var i855 = i849[117]
  var i854 = []
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 2, i854, '')
  }
  i848.AllSources = i854
  var i857 = i849[118]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i848.AllScratches = i856
  i848.stepsDone = i849[119]
  i848.levelNo = i849[120]
  i848.partNo = i849[121]
  request.r(i849[122], i849[123], 0, i848, 'clothSfx')
  request.r(i849[124], i849[125], 0, i848, 'doorCloseSfx')
  return i848
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i858 = root || request.c( 'ZoomPos' )
  var i859 = data
  i858.CameraPos = new pc.Vec3( i859[0], i859[1], i859[2] )
  i858.CameraFOV = i859[3]
  return i858
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i868 = root || request.c( 'PlayableCTA' )
  var i869 = data
  i868.trigger = i869[0]
  i868.afterSeconds = i869[1]
  i868.afterTaps = i869[2]
  request.r(i869[3], i869[4], 0, i868, 'scratchProgress')
  i868.scratchIndex = i869[5]
  i868.progressThreshold = i869[6]
  request.r(i869[7], i869[8], 0, i868, 'watchedTool')
  i868.blockInputOnFire = !!i869[9]
  i868.refireOnEveryTap = !!i869[10]
  i868.refireDelay = i869[11]
  i868.showEndCard = !!i869[12]
  request.r(i869[13], i869[14], 0, i868, 'endCard')
  i868.showEndCardOnProgressTrigger = !!i869[15]
  i868.showEndCardOnToolAppearTrigger = !!i869[16]
  i868.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i869[17], i868.onCtaFired)
  i868.logWhenFired = !!i869[18]
  return i868
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i870 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'MainCamera')
  i870.RenderType = i871[2]
  request.r(i871[3], i871[4], 0, i870, 'ScratchSurfaceSprite')
  i870.ScratchSurfaceSpriteHasAlpha = !!i871[5]
  i870.MaskProgressCutOffValue = i871[6]
  request.r(i871[7], i871[8], 0, i870, 'EraseTexture')
  i870.EraseTextureScale = new pc.Vec2( i871[9], i871[10] )
  i870.InputEnabled = !!i871[11]
  request.r(i871[12], i871[13], 0, i870, 'Card')
  i870.Mode = i871[14]
  request.r(i871[15], i871[16], 0, i870, 'Progress')
  request.r(i871[17], i871[18], 0, i870, 'MeshCard')
  request.r(i871[19], i871[20], 0, i870, 'SpriteCard')
  request.r(i871[21], i871[22], 0, i870, 'ImageCard')
  request.r(i871[23], i871[24], 0, i870, 'MaskShader')
  request.r(i871[25], i871[26], 0, i870, 'BrushShader')
  request.r(i871[27], i871[28], 0, i870, 'MaskProgressShader')
  request.r(i871[29], i871[30], 0, i870, 'MaskProgressCutOffShader')
  return i870
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i872 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'MainCamera')
  request.r(i873[2], i873[3], 0, i872, 'Surface')
  i872.RenderTextureQuality = i873[4]
  request.r(i873[5], i873[6], 0, i872, 'Eraser')
  request.r(i873[7], i873[8], 0, i872, 'Progress')
  request.r(i873[9], i873[10], 0, i872, 'ScratchSurface')
  request.r(i873[11], i873[12], 0, i872, 'RenderTexture')
  i872.BrushScale = new pc.Vec2( i873[13], i873[14] )
  request.r(i873[15], i873[16], 0, i872, 'ToolTip')
  i872.InputEnabled = !!i873[17]
  i872.IsScratching = !!i873[18]
  i872.useChangingScale = !!i873[19]
  i872.useGivenBrushScale = !!i873[20]
  i872.canSpreadMask = !!i873[21]
  i872.shouldPaintHoles = !!i873[22]
  i872.canRotateTip = !!i873[23]
  i872._mode = i873[24]
  return i872
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i874 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'Card')
  i874.currentProgress = i875[2]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i877 = data
  i876.textureMode = i877[0]
  i876.alignment = i877[1]
  i876.widthCurve = new pc.AnimationCurve( { keys_flow: i877[2] } )
  i876.colorGradient = i877[3] ? new pc.ColorGradient(i877[3][0], i877[3][1], i877[3][2]) : null
  var i879 = i877[4]
  var i878 = []
  for(var i = 0; i < i879.length; i += 3) {
    i878.push( new pc.Vec3( i879[i + 0], i879[i + 1], i879[i + 2] ) );
  }
  i876.positions = i878
  i876.positionCount = i877[5]
  i876.widthMultiplier = i877[6]
  i876.startWidth = i877[7]
  i876.endWidth = i877[8]
  i876.numCornerVertices = i877[9]
  i876.numCapVertices = i877[10]
  i876.useWorldSpace = !!i877[11]
  i876.loop = !!i877[12]
  i876.startColor = new pc.Color(i877[13], i877[14], i877[15], i877[16])
  i876.endColor = new pc.Color(i877[17], i877[18], i877[19], i877[20])
  i876.generateLightingData = !!i877[21]
  i876.enabled = !!i877[22]
  request.r(i877[23], i877[24], 0, i876, 'sharedMaterial')
  var i881 = i877[25]
  var i880 = []
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 2, i880, '')
  }
  i876.sharedMaterials = i880
  i876.receiveShadows = !!i877[26]
  i876.shadowCastingMode = i877[27]
  i876.sortingLayerID = i877[28]
  i876.sortingOrder = i877[29]
  i876.lightmapIndex = i877[30]
  i876.lightmapSceneIndex = i877[31]
  i876.lightmapScaleOffset = new pc.Vec4( i877[32], i877[33], i877[34], i877[35] )
  i876.lightProbeUsage = i877[36]
  i876.reflectionProbeUsage = i877[37]
  return i876
}

Deserializers["TextureOffsetScroller"] = function (request, data, root) {
  var i884 = root || request.c( 'TextureOffsetScroller' )
  var i885 = data
  i884.scrollSpeed = new pc.Vec2( i885[0], i885[1] )
  i884.smoothStart = !!i885[2]
  i884.smoothDuration = i885[3]
  i884.textureName = i885[4]
  i884.useSharedMaterial = !!i885[5]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i887 = data
  i886.color = new pc.Color(i887[0], i887[1], i887[2], i887[3])
  request.r(i887[4], i887[5], 0, i886, 'sprite')
  i886.flipX = !!i887[6]
  i886.flipY = !!i887[7]
  i886.drawMode = i887[8]
  i886.size = new pc.Vec2( i887[9], i887[10] )
  i886.tileMode = i887[11]
  i886.adaptiveModeThreshold = i887[12]
  i886.maskInteraction = i887[13]
  i886.spriteSortPoint = i887[14]
  i886.enabled = !!i887[15]
  request.r(i887[16], i887[17], 0, i886, 'sharedMaterial')
  var i889 = i887[18]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i886.sharedMaterials = i888
  i886.receiveShadows = !!i887[19]
  i886.shadowCastingMode = i887[20]
  i886.sortingLayerID = i887[21]
  i886.sortingOrder = i887[22]
  i886.lightmapIndex = i887[23]
  i886.lightmapSceneIndex = i887[24]
  i886.lightmapScaleOffset = new pc.Vec4( i887[25], i887[26], i887[27], i887[28] )
  i886.lightProbeUsage = i887[29]
  i886.reflectionProbeUsage = i887[30]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i891 = data
  var i893 = i891[0]
  var i892 = []
  for(var i = 0; i < i893.length; i += 3) {
    i892.push( new pc.Vec3( i893[i + 0], i893[i + 1], i893[i + 2] ) );
  }
  i890.positions = i892
  i890.positionCount = i891[1]
  i890.time = i891[2]
  i890.startWidth = i891[3]
  i890.endWidth = i891[4]
  i890.widthMultiplier = i891[5]
  i890.autodestruct = !!i891[6]
  i890.emitting = !!i891[7]
  i890.numCornerVertices = i891[8]
  i890.numCapVertices = i891[9]
  i890.minVertexDistance = i891[10]
  i890.colorGradient = i891[11] ? new pc.ColorGradient(i891[11][0], i891[11][1], i891[11][2]) : null
  i890.startColor = new pc.Color(i891[12], i891[13], i891[14], i891[15])
  i890.endColor = new pc.Color(i891[16], i891[17], i891[18], i891[19])
  i890.generateLightingData = !!i891[20]
  i890.textureMode = i891[21]
  i890.alignment = i891[22]
  i890.widthCurve = new pc.AnimationCurve( { keys_flow: i891[23] } )
  i890.enabled = !!i891[24]
  request.r(i891[25], i891[26], 0, i890, 'sharedMaterial')
  var i895 = i891[27]
  var i894 = []
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 2, i894, '')
  }
  i890.sharedMaterials = i894
  i890.receiveShadows = !!i891[28]
  i890.shadowCastingMode = i891[29]
  i890.sortingLayerID = i891[30]
  i890.sortingOrder = i891[31]
  i890.lightmapIndex = i891[32]
  i890.lightmapSceneIndex = i891[33]
  i890.lightmapScaleOffset = new pc.Vec4( i891[34], i891[35], i891[36], i891[37] )
  i890.lightProbeUsage = i891[38]
  i890.reflectionProbeUsage = i891[39]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i897 = data
  i896.usedByComposite = !!i897[0]
  i896.autoTiling = !!i897[1]
  i896.size = new pc.Vec2( i897[2], i897[3] )
  i896.edgeRadius = i897[4]
  i896.enabled = !!i897[5]
  i896.isTrigger = !!i897[6]
  i896.usedByEffector = !!i897[7]
  i896.density = i897[8]
  i896.offset = new pc.Vec2( i897[9], i897[10] )
  request.r(i897[11], i897[12], 0, i896, 'material')
  return i896
}

Deserializers["RotaryTimerKnob"] = function (request, data, root) {
  var i898 = root || request.c( 'RotaryTimerKnob' )
  var i899 = data
  i898.canDrag = !!i899[0]
  i898.numSteps = i899[1]
  i898.onlyClockwise = !!i899[2]
  request.r(i899[3], i899[4], 0, i898, 'clickSound')
  i898.enableVibration = !!i899[5]
  request.r(i899[6], i899[7], 0, i898, 'stepText')
  i898.OnComplete = request.d('UnityEngine.Events.UnityEvent', i899[8], i898.OnComplete)
  request.r(i899[9], i899[10], 0, i898, 'handIndication')
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'additionalVertexStreams')
  i900.enabled = !!i901[2]
  request.r(i901[3], i901[4], 0, i900, 'sharedMaterial')
  var i903 = i901[5]
  var i902 = []
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 2, i902, '')
  }
  i900.sharedMaterials = i902
  i900.receiveShadows = !!i901[6]
  i900.shadowCastingMode = i901[7]
  i900.sortingLayerID = i901[8]
  i900.sortingOrder = i901[9]
  i900.lightmapIndex = i901[10]
  i900.lightmapSceneIndex = i901[11]
  i900.lightmapScaleOffset = new pc.Vec4( i901[12], i901[13], i901[14], i901[15] )
  i900.lightProbeUsage = i901[16]
  i900.reflectionProbeUsage = i901[17]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i905 = data
  i904.frontSortingLayerID = i905[0]
  i904.frontSortingOrder = i905[1]
  i904.backSortingLayerID = i905[2]
  i904.backSortingOrder = i905[3]
  i904.alphaCutoff = i905[4]
  request.r(i905[5], i905[6], 0, i904, 'sprite')
  i904.tileMode = i905[7]
  i904.isCustomRangeActive = !!i905[8]
  i904.spriteSortPoint = i905[9]
  i904.enabled = !!i905[10]
  request.r(i905[11], i905[12], 0, i904, 'sharedMaterial')
  var i907 = i905[13]
  var i906 = []
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 2, i906, '')
  }
  i904.sharedMaterials = i906
  i904.receiveShadows = !!i905[14]
  i904.shadowCastingMode = i905[15]
  i904.sortingLayerID = i905[16]
  i904.sortingOrder = i905[17]
  i904.lightmapIndex = i905[18]
  i904.lightmapSceneIndex = i905[19]
  i904.lightmapScaleOffset = new pc.Vec4( i905[20], i905[21], i905[22], i905[23] )
  i904.lightProbeUsage = i905[24]
  i904.reflectionProbeUsage = i905[25]
  return i904
}

Deserializers["_2dxFX_Wave"] = function (request, data, root) {
  var i908 = root || request.c( '_2dxFX_Wave' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'ForceMaterial')
  i908.ActiveChange = !!i909[2]
  i908._Alpha = i909[3]
  i908._OffsetX = i909[4]
  i908._OffsetY = i909[5]
  i908._DistanceX = i909[6]
  i908._DistanceY = i909[7]
  i908._WaveTimeX = i909[8]
  i908._WaveTimeY = i909[9]
  i908.AutoPlayWaveX = !!i909[10]
  i908.AutoPlaySpeedX = i909[11]
  i908.AutoPlayWaveY = !!i909[12]
  i908.AutoPlaySpeedY = i909[13]
  i908.AutoRandom = !!i909[14]
  i908.AutoRandomRange = i909[15]
  i908.ShaderChange = i909[16]
  return i908
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i910 = root || request.c( 'BasicDrag' )
  var i911 = data
  i910.canDrag = !!i911[0]
  i910.dragByDelta = !!i911[1]
  i910.isDragging = !!i911[2]
  i910.moveWithPointer = !!i911[3]
  i910.canReturn = !!i911[4]
  i910.jumpOnReturn = !!i911[5]
  i910.returnTime = i911[6]
  i910.Tool_Offset = new pc.Vec3( i911[7], i911[8], i911[9] )
  i910.canScaleIncrease = !!i911[10]
  i910.Self_ScaleNew = new pc.Vec3( i911[11], i911[12], i911[13] )
  i910.canRotateOnPick = !!i911[14]
  i910.startRot = new pc.Vec3( i911[15], i911[16], i911[17] )
  i910.newRot = new pc.Vec3( i911[18], i911[19], i911[20] )
  var i913 = i911[21]
  var i912 = []
  for(var i = 0; i < i913.length; i += 2) {
  request.r(i913[i + 0], i913[i + 1], 2, i912, '')
  }
  i910.childSprite = i912
  request.r(i911[22], i911[23], 0, i910, 'ToolSelectClip')
  request.r(i911[24], i911[25], 0, i910, 'ToolLoopClip')
  request.r(i911[26], i911[27], 0, i910, 'thisParticles')
  i910.onDragparticle = !!i911[28]
  request.r(i911[29], i911[30], 0, i910, 'dragParticles')
  request.r(i911[31], i911[32], 0, i910, 'anim')
  i910.startPos = new pc.Vec3( i911[33], i911[34], i911[35] )
  i910.startScale = new pc.Vec3( i911[36], i911[37], i911[38] )
  i910.Vibration = !!i911[39]
  i910.isPlacedCannotMove = !!i911[40]
  i910.isObjectMovingWhileDragging = !!i911[41]
  i910.OnMouseDownEvent = request.d('System.Action', i911[42], i910.OnMouseDownEvent)
  i910.OnMouseUpEvent = request.d('System.Action', i911[43], i910.OnMouseUpEvent)
  i910.ProgStartEvent = request.d('System.Action', i911[44], i910.ProgStartEvent)
  i910.ProgEndEvent = request.d('System.Action', i911[45], i910.ProgEndEvent)
  i910.canCallMouseUpWhenGamePaused = !!i911[46]
  i910.ClampX_L = i911[47]
  i910.ClampX_H = i911[48]
  i910.ClampY_L = i911[49]
  i910.ClampY_H = i911[50]
  i910.startOrder = i911[51]
  i910.dontResetItIsInCollider = !!i911[52]
  request.r(i911[53], i911[54], 0, i910, 'thisCollider')
  request.r(i911[55], i911[56], 0, i910, 'thisSR')
  i910.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i911[57], i910.OnMouseDownEventIndependentFromCanDrag)
  return i910
}

Deserializers["System.Action"] = function (request, data, root) {
  var i916 = root || request.c( 'System.Action' )
  var i917 = data
  return i916
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i918 = root || request.c( 'BD_Clamp' )
  var i919 = data
  i918.ClampX_L = i919[0]
  i918.ClampX_H = i919[1]
  i918.ClampY_L = i919[2]
  i918.ClampY_H = i919[3]
  return i918
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'm_RootBone')
  var i923 = i921[2]
  var i922 = []
  for(var i = 0; i < i923.length; i += 2) {
  request.r(i923[i + 0], i923[i + 1], 2, i922, '')
  }
  i920.m_BoneTransforms = i922
  i920.m_AlwaysUpdate = !!i921[3]
  i920.m_AutoRebind = !!i921[4]
  return i920
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i924 = root || request.c( 'BD_CameraFollow' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'Tool')
  request.r(i925[2], i925[3], 0, i924, 'Pivot')
  i924.FOV = i925[4]
  i924.Y_L = i925[5]
  i924.Y_H = i925[6]
  i924.X_L = i925[7]
  i924.X_R = i925[8]
  i924.startDelay = i925[9]
  i924.duration = i925[10]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i927 = data
  i926.bodyType = i927[0]
  request.r(i927[1], i927[2], 0, i926, 'material')
  i926.simulated = !!i927[3]
  i926.useAutoMass = !!i927[4]
  i926.mass = i927[5]
  i926.drag = i927[6]
  i926.angularDrag = i927[7]
  i926.gravityScale = i927[8]
  i926.collisionDetectionMode = i927[9]
  i926.sleepMode = i927[10]
  i926.constraints = i927[11]
  return i926
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i928 = root || request.c( 'PlaceItem' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'thisDrag')
  request.r(i929[2], i929[3], 0, i928, 'Target')
  request.r(i929[4], i929[5], 0, i928, 'Clip')
  i928.jumpOnPlace = !!i929[6]
  i928.jumpHeight = i929[7]
  i928.jumpDuration = i929[8]
  i928.settleDuration = i929[9]
  i928.isPlaced = !!i929[10]
  i928.isInsideCollider = !!i929[11]
  i928.changeScaleOnPlace = !!i929[12]
  request.r(i929[13], i929[14], 0, i928, 'item')
  i928.newScaleOnPlace = new pc.Vec3( i929[15], i929[16], i929[17] )
  i928.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i929[18], i928.OnPlaced)
  return i928
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i930 = root || request.c( 'ActionOnTap' )
  var i931 = data
  i930.OnTap = request.d('UnityEngine.Events.UnityEvent', i931[0], i930.OnTap)
  i930.OnTapExtra = request.d('System.Action', i931[1], i930.OnTapExtra)
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i933 = data
  i932.radius = i933[0]
  i932.enabled = !!i933[1]
  i932.isTrigger = !!i933[2]
  i932.usedByEffector = !!i933[3]
  i932.density = i933[4]
  i932.offset = new pc.Vec2( i933[5], i933[6] )
  request.r(i933[7], i933[8], 0, i932, 'material')
  return i932
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i934 = root || request.c( 'PlayParticlesOnCollision' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'Target')
  request.r(i935[2], i935[3], 0, i934, 'ParticlePrefab')
  i934.destroyIt = !!i935[4]
  i934.stayAtPlace = !!i935[5]
  i934.disableOnCollision = !!i935[6]
  i934.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i935[7], i934.OnCollisionEvent)
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i937 = data
  i936.usedByComposite = !!i937[0]
  i936.autoTiling = !!i937[1]
  var i939 = i937[2]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
  var i941 = i939[i + 0]
  var i940 = []
  for(var i = 0; i < i941.length; i += 2) {
    i940.push( new pc.Vec2( i941[i + 0], i941[i + 1] ) );
  }
    i938.push( i940 );
  }
  i936.points = i938
  i936.enabled = !!i937[3]
  i936.isTrigger = !!i937[4]
  i936.usedByEffector = !!i937[5]
  i936.density = i937[6]
  i936.offset = new pc.Vec2( i937[7], i937[8] )
  request.r(i937[9], i937[10], 0, i936, 'material')
  return i936
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i948 = root || request.c( 'PlaySfxOnCollision' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'Tip')
  i948.Mode = i949[2]
  request.r(i949[3], i949[4], 0, i948, 'DragInput')
  request.r(i949[5], i949[6], 0, i948, 'Source')
  i948.startVol = i949[7]
  i948.targetVol = i949[8]
  i948.duration = i949[9]
  request.r(i949[10], i949[11], 0, i948, 'Particles')
  i948.isDone = !!i949[12]
  i948.isInArea = !!i949[13]
  i948.isPlaying = !!i949[14]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'clip')
  request.r(i951[2], i951[3], 0, i950, 'outputAudioMixerGroup')
  i950.playOnAwake = !!i951[4]
  i950.loop = !!i951[5]
  i950.time = i951[6]
  i950.volume = i951[7]
  i950.pitch = i951[8]
  i950.enabled = !!i951[9]
  return i950
}

Deserializers["SewingCol"] = function (request, data, root) {
  var i952 = root || request.c( 'SewingCol' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'targetTip')
  var i955 = i953[2]
  var i954 = []
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 2, i954, '')
  }
  i952.Anim_Items = i954
  i952.isDone = !!i953[3]
  request.r(i953[4], i953[5], 0, i952, 'sfx')
  return i952
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i958 = root || request.c( 'OutlinePulse' )
  var i959 = data
  i958.smallThickness = i959[0]
  i958.largeThickness = i959[1]
  i958.transitionSpeed = i959[2]
  i958.animationSpeed = i959[3]
  i958.isThickOutline = !!i959[4]
  i958.animate = !!i959[5]
  i958.hideSpriteOnly = !!i959[6]
  return i958
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i960 = root || request.c( 'BD_Action' )
  var i961 = data
  i960.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i961[0], i960.OnMouseDownEvent)
  i960.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i961[1], i960.OnMouseUpEvent)
  i960.setToolLayer = !!i961[2]
  request.r(i961[3], i961[4], 0, i960, 'tool_SP')
  return i960
}

Deserializers["Level1_SurfController"] = function (request, data, root) {
  var i962 = root || request.c( 'Level1_SurfController' )
  var i963 = data
  i962.target_rotZ = i963[0]
  i962.rotationDuration = i963[1]
  i962.rotationEase = i963[2]
  request.r(i963[3], i963[4], 0, i962, 'maskItem')
  i962.maskTarget_posY = i963[5]
  i962.maskMoveDuration = i963[6]
  i962.requiredHoldTime = i963[7]
  i962.minRotationForProgress = i963[8]
  request.r(i963[9], i963[10], 0, i962, 'tipCollider')
  request.r(i963[11], i963[12], 0, i962, 'targetZoneCollider')
  request.r(i963[13], i963[14], 0, i962, 'surf_Particles')
  request.r(i963[15], i963[16], 0, i962, 'surf_SubEmitter')
  request.r(i963[17], i963[18], 0, i962, 'Indication')
  i962.OnComplete = request.d('UnityEngine.Events.UnityEvent', i963[19], i962.OnComplete)
  i962.currentHoldProgress = i963[20]
  return i962
}

Deserializers["BD_Fold"] = function (request, data, root) {
  var i964 = root || request.c( 'BD_Fold' )
  var i965 = data
  i964.canDrag = !!i965[0]
  i964.canFoldBottomLeft = !!i965[1]
  i964.canFoldBottomRight = !!i965[2]
  i964.canFoldTopLeft = !!i965[3]
  i964.canFoldTopRight = !!i965[4]
  request.r(i965[5], i965[6], 0, i964, 'Indication')
  request.r(i965[7], i965[8], 0, i964, 'backSideSprite')
  i964.maxSideOffset = i965[9]
  i964.foldBackDuration = i965[10]
  i964.instantFoldAmount = i965[11]
  i964.useSmoothRelease = !!i965[12]
  i964.completionLimit = i965[13]
  i964.afterCompletionTravelTo = i965[14]
  i964.OnComplete = request.d('UnityEngine.Events.UnityEvent', i965[15], i964.OnComplete)
  i964.currentProgress = i965[16]
  i964.innerShadowStrength = i965[17]
  request.r(i965[18], i965[19], 0, i964, 'dragAudioSource')
  request.r(i965[20], i965[21], 0, i964, 'dragStartClip')
  request.r(i965[22], i965[23], 0, i964, 'completionClip')
  i964.audioFadeSpeed = i965[24]
  i964.audioMoveThreshold = i965[25]
  i964.hapticInterval = i965[26]
  return i964
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i966 = root || request.c( 'BD_Progress' )
  var i967 = data
  var i969 = i967[0]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('ScratchData', i969[i + 0]) );
  }
  i966.AllScratches = i968
  i966.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i967[1], i966.OnScratchComplete)
  i966.isProgDone = !!i967[2]
  i966.canCallComplete = !!i967[3]
  i966.CollectiveAppear = !!i967[4]
  i966.tipControl = !!i967[5]
  i966.progressControl = !!i967[6]
  request.r(i967[7], i967[8], 0, i966, 'thisDrag')
  i966.CompleteEvent = request.d('System.Action', i967[9], i966.CompleteEvent)
  i966.SubCompleteEvent = request.d('System.Action', i967[10], i966.SubCompleteEvent)
  return i966
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i972 = root || request.c( 'ScratchData' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'ScratchManager')
  i972.scratchLimit = i973[2]
  i972.isComplete = !!i973[3]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'sharedMesh')
  return i974
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i976 = root || request.c( 'StaticFixedPipe' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'meshRenderer')
  request.r(i977[2], i977[3], 0, i976, 'toolTransform')
  request.r(i977[4], i977[5], 0, i976, 'toolDirectionPoint')
  request.r(i977[6], i977[7], 0, i976, 'fixedEndPoint')
  i976.segmentCount = i977[8]
  i976.totalLength = i977[9]
  i976.constraintIterations = i977[10]
  i976.gravity = new pc.Vec3( i977[11], i977[12], i977[13] )
  i976.pipeWidth = i977[14]
  return i976
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i978 = root || request.c( 'BD_SpriteChange' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'BD')
  request.r(i979[2], i979[3], 0, i978, 'SR')
  request.r(i979[4], i979[5], 0, i978, 'Default')
  request.r(i979[6], i979[7], 0, i978, 'Picked')
  i978.resetOnRelease = !!i979[8]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i981 = data
  i980.name = i981[0]
  i980.atlasId = i981[1]
  i980.mipmapCount = i981[2]
  i980.hdr = !!i981[3]
  i980.size = i981[4]
  i980.anisoLevel = i981[5]
  i980.filterMode = i981[6]
  var i983 = i981[7]
  var i982 = []
  for(var i = 0; i < i983.length; i += 4) {
    i982.push( UnityEngine.Rect.MinMaxRect(i983[i + 0], i983[i + 1], i983[i + 2], i983[i + 3]) );
  }
  i980.rects = i982
  i980.wrapU = i981[8]
  i980.wrapV = i981[9]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i987 = data
  i986.name = i987[0]
  i986.index = i987[1]
  i986.startup = !!i987[2]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i989 = data
  i988.aspect = i989[0]
  i988.orthographic = !!i989[1]
  i988.orthographicSize = i989[2]
  i988.backgroundColor = new pc.Color(i989[3], i989[4], i989[5], i989[6])
  i988.nearClipPlane = i989[7]
  i988.farClipPlane = i989[8]
  i988.fieldOfView = i989[9]
  i988.depth = i989[10]
  i988.clearFlags = i989[11]
  i988.cullingMask = i989[12]
  i988.rect = i989[13]
  request.r(i989[14], i989[15], 0, i988, 'targetTexture')
  i988.usePhysicalProperties = !!i989[16]
  i988.focalLength = i989[17]
  i988.sensorSize = new pc.Vec2( i989[18], i989[19] )
  i988.lensShift = new pc.Vec2( i989[20], i989[21] )
  i988.gateFit = i989[22]
  i988.commandBufferCount = i989[23]
  i988.cameraType = i989[24]
  i988.enabled = !!i989[25]
  return i988
}

Deserializers["CameraController"] = function (request, data, root) {
  var i990 = root || request.c( 'CameraController' )
  var i991 = data
  request.r(i991[0], i991[1], 0, i990, 'cam')
  i990.defaultPosition = new pc.Vec3( i991[2], i991[3], i991[4] )
  i990.defaultSize = i991[5]
  i990.defaultFOV = i991[6]
  i990.defaultDuration = i991[7]
  i990.defaultEase = i991[8]
  return i990
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i992 = root || request.c( 'MusicSource' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'source')
  return i992
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i994 = root || request.c( 'UI_Manager' )
  var i995 = data
  i994.levelCompleted = !!i995[0]
  i994.isPauseActive = !!i995[1]
  i994.loadIndex = i995[2]
  request.r(i995[3], i995[4], 0, i994, 'removeAdsButton')
  request.r(i995[5], i995[6], 0, i994, 'pauseButton')
  request.r(i995[7], i995[8], 0, i994, 'Fade_Img')
  request.r(i995[9], i995[10], 0, i994, 'TopBarAnim')
  request.r(i995[11], i995[12], 0, i994, 'MainPanel')
  request.r(i995[13], i995[14], 0, i994, 'PausePanel')
  request.r(i995[15], i995[16], 0, i994, 'PausePopUp')
  request.r(i995[17], i995[18], 0, i994, 'PauseCanvasGroup')
  request.r(i995[19], i995[20], 0, i994, 'RateUsPanel')
  request.r(i995[21], i995[22], 0, i994, 'RateUsPopUp')
  request.r(i995[23], i995[24], 0, i994, 'RemoveAdsPanel')
  request.r(i995[25], i995[26], 0, i994, 'RemoveAdsPopUp')
  request.r(i995[27], i995[28], 0, i994, 'RemoveAdsCanvasGroup')
  var i997 = i995[29]
  var i996 = []
  for(var i = 0; i < i997.length; i += 2) {
  request.r(i997[i + 0], i997[i + 1], 2, i996, '')
  }
  i994.RemoveAdsAnims = i996
  i994.showCompletePanel = !!i995[30]
  var i999 = i995[31]
  var i998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 1, i998, '')
  }
  i994.thingsToDisableWhenCompletePanel = i998
  request.r(i995[32], i995[33], 0, i994, 'CompletePanel')
  request.r(i995[34], i995[35], 0, i994, 'LevelIcon')
  request.r(i995[36], i995[37], 0, i994, 'CompleteParticles')
  request.r(i995[38], i995[39], 0, i994, 'progressBar')
  request.r(i995[40], i995[41], 0, i994, 'progressText')
  request.r(i995[42], i995[43], 0, i994, 'toolIcon1')
  request.r(i995[44], i995[45], 0, i994, 'toolIcon2')
  request.r(i995[46], i995[47], 0, i994, 'toolIcon3')
  request.r(i995[48], i995[49], 0, i994, 'toolIcon4')
  request.r(i995[50], i995[51], 0, i994, 'toolHolder')
  i994.toolHolderRaisedY = i995[52]
  i994.toolHolderRaiseDuration = i995[53]
  request.r(i995[54], i995[55], 0, i994, 'target1')
  request.r(i995[56], i995[57], 0, i994, 'target2')
  i994.toolMoveDuration = i995[58]
  i994.currentIndex = i995[59]
  var i1001 = i995[60]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1001.length; i += 2) {
  request.r(i1001[i + 0], i1001[i + 1], 1, i1000, '')
  }
  i994.allTools = i1000
  request.r(i995[61], i995[62], 0, i994, 'clockProgress')
  request.r(i995[63], i995[64], 0, i994, 'clockProgressFill')
  request.r(i995[65], i995[66], 0, i994, 'clockAudio')
  i994.moveDistance = i995[67]
  i994.animationDuration = i995[68]
  i994.greyBgChildName = i995[69]
  i994.pushOffset = i995[70]
  return i994
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i1004 = root || request.c( 'GameManagerPlayable' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'endParticles')
  request.r(i1005[2], i1005[3], 0, i1004, 'stepCompleteParticles')
  request.r(i1005[4], i1005[5], 0, i1004, 'DefaultMat')
  request.r(i1005[6], i1005[7], 0, i1004, 'BG_Music')
  request.r(i1005[8], i1005[9], 0, i1004, 'restoreEffectShader')
  request.r(i1005[10], i1005[11], 0, i1004, 'stickerEffectShader')
  i1004.isComplete = !!i1005[12]
  i1004.isPaused = !!i1005[13]
  request.r(i1005[14], i1005[15], 0, i1004, 'currentLevel')
  i1004.startLevelOnPlay = !!i1005[16]
  i1004.currentLevelNo = i1005[17]
  return i1004
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1006 = root || request.c( 'AudioController' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'MainMixer')
  request.r(i1007[2], i1007[3], 0, i1006, 'UiClick')
  request.r(i1007[4], i1007[5], 0, i1006, 'UiClickSource')
  var i1009 = i1007[6]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 2) {
  request.r(i1009[i + 0], i1009[i + 1], 2, i1008, '')
  }
  i1006.SfxSources = i1008
  var i1011 = i1007[7]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 2, i1010, '')
  }
  i1006.AllClips = i1010
  return i1006
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i1014 = root || request.c( 'PlayableHudRuntime' )
  var i1015 = data
  return i1014
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'm_FirstSelected')
  i1016.m_sendNavigationEvents = !!i1017[2]
  i1016.m_DragThreshold = i1017[3]
  return i1016
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1019 = data
  i1018.m_HorizontalAxis = i1019[0]
  i1018.m_VerticalAxis = i1019[1]
  i1018.m_SubmitButton = i1019[2]
  i1018.m_CancelButton = i1019[3]
  i1018.m_InputActionsPerSecond = i1019[4]
  i1018.m_RepeatDelay = i1019[5]
  i1018.m_ForceModuleActive = !!i1019[6]
  i1018.m_SendPointerHoverToParent = !!i1019[7]
  return i1018
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i1020 = root || request.c( 'PlayableRouter' )
  var i1021 = data
  var i1023 = i1021[0]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 2) {
  request.r(i1023[i + 0], i1023[i + 1], 2, i1022, '')
  }
  i1020.menuObjects = i1022
  var i1025 = i1021[1]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 2) {
  request.r(i1025[i + 0], i1025[i + 1], 2, i1024, '')
  }
  i1020.gameplayObjects = i1024
  var i1027 = i1021[2]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('PlayableRouter+SubLevelSlot', i1027[i + 0]) );
  }
  i1020.subLevels = i1026
  i1020.fadeDuration = i1021[3]
  i1020.onIntroStart = request.d('UnityEngine.Events.UnityEvent', i1021[4], i1020.onIntroStart)
  var i1029 = i1021[5]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 2) {
  request.r(i1029[i + 0], i1029[i + 1], 2, i1028, '')
  }
  i1020.hideDuringIntro = i1028
  i1020.lockedMessage = i1021[6]
  i1020.lockedTapsToCTA = i1021[7]
  return i1020
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i1034 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i1035 = data
  request.r(i1035[0], i1035[1], 0, i1034, 'button')
  request.r(i1035[2], i1035[3], 0, i1034, 'level')
  request.r(i1035[4], i1035[5], 0, i1034, 'intro')
  return i1034
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i1036 = root || request.c( 'ToastManager' )
  var i1037 = data
  request.r(i1037[0], i1037[1], 0, i1036, 'toastPanel')
  request.r(i1037[2], i1037[3], 0, i1036, 'toastPopup')
  request.r(i1037[4], i1037[5], 0, i1036, 'canvasGroup')
  request.r(i1037[6], i1037[7], 0, i1036, 'toastText')
  i1036.startY = i1037[8]
  i1036.visibleY = i1037[9]
  i1036.endY = i1037[10]
  i1036.animationTime = i1037[11]
  i1036.animationTimeUp = i1037[12]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1039 = data
  i1038.m_Alpha = i1039[0]
  i1038.m_Interactable = !!i1039[1]
  i1038.m_BlocksRaycasts = !!i1039[2]
  i1038.m_IgnoreParentGroups = !!i1039[3]
  i1038.enabled = !!i1039[4]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1041 = data
  i1040.ambientIntensity = i1041[0]
  i1040.reflectionIntensity = i1041[1]
  i1040.ambientMode = i1041[2]
  i1040.ambientLight = new pc.Color(i1041[3], i1041[4], i1041[5], i1041[6])
  i1040.ambientSkyColor = new pc.Color(i1041[7], i1041[8], i1041[9], i1041[10])
  i1040.ambientGroundColor = new pc.Color(i1041[11], i1041[12], i1041[13], i1041[14])
  i1040.ambientEquatorColor = new pc.Color(i1041[15], i1041[16], i1041[17], i1041[18])
  i1040.fogColor = new pc.Color(i1041[19], i1041[20], i1041[21], i1041[22])
  i1040.fogEndDistance = i1041[23]
  i1040.fogStartDistance = i1041[24]
  i1040.fogDensity = i1041[25]
  i1040.fog = !!i1041[26]
  request.r(i1041[27], i1041[28], 0, i1040, 'skybox')
  i1040.fogMode = i1041[29]
  var i1043 = i1041[30]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1043[i + 0]) );
  }
  i1040.lightmaps = i1042
  i1040.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1041[31], i1040.lightProbes)
  i1040.lightmapsMode = i1041[32]
  i1040.mixedBakeMode = i1041[33]
  i1040.environmentLightingMode = i1041[34]
  i1040.ambientProbe = new pc.SphericalHarmonicsL2(i1041[35])
  request.r(i1041[36], i1041[37], 0, i1040, 'customReflection')
  request.r(i1041[38], i1041[39], 0, i1040, 'defaultReflection')
  i1040.defaultReflectionMode = i1041[40]
  i1040.defaultReflectionResolution = i1041[41]
  i1040.sunLightObjectId = i1041[42]
  i1040.pixelLightCount = i1041[43]
  i1040.defaultReflectionHDR = !!i1041[44]
  i1040.hasLightDataAsset = !!i1041[45]
  i1040.hasManualGenerate = !!i1041[46]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'lightmapColor')
  request.r(i1047[2], i1047[3], 0, i1046, 'lightmapDirection')
  request.r(i1047[4], i1047[5], 0, i1046, 'shadowMask')
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1048 = root || new UnityEngine.LightProbes()
  var i1049 = data
  return i1048
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

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[84],"85":[9],"86":[87],"88":[87],"89":[87],"90":[87],"91":[87],"92":[87],"93":[87],"94":[45],"95":[45],"96":[45],"97":[45],"98":[45],"99":[45],"100":[45],"101":[45],"102":[45],"103":[45],"104":[45],"105":[45],"106":[45],"107":[9],"108":[40],"109":[110],"111":[110],"8":[7],"112":[37],"56":[26],"113":[29],"114":[26],"115":[116],"117":[116],"118":[14],"119":[29],"120":[26],"44":[26],"121":[7],"122":[7],"12":[8],"16":[15,7],"123":[7],"11":[8],"124":[7],"125":[7],"126":[7],"127":[7],"128":[7],"129":[7],"130":[7],"131":[7],"132":[7],"133":[15,7],"134":[7],"135":[7],"136":[7],"137":[7],"18":[15,7],"138":[7],"139":[69],"140":[69],"70":[69],"141":[69],"142":[9],"143":[9]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","DG.Tweening.DOTweenAnimation","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Button","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","Level1_Cloth_Playable_Step4","UnityEngine.GameObject","BasicDrag","UnityEngine.SpriteRenderer","BD_CameraFollow","Level1_SurfController","UnityEngine.BoxCollider2D","RotaryTimerKnob","UnityEngine.AudioClip","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.LineRenderer","TextureOffsetScroller","UnityEngine.TrailRenderer","UnityEngine.MeshRenderer","UnityEngine.SpriteMask","_2dxFX_Wave","BD_Clamp","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.Rigidbody2D","PlaceItem","ActionOnTap","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","SewingCol","OutlinePulse","BD_Action","BD_Fold","BD_Progress","UnityEngine.MeshFilter","StaticFixedPipe","BD_SpriteChange","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableRouter","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "14.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "3Sept2026_Lvl1_2_Step_1to2";

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

Deserializers.buildID = "26cd4e5a-a85c-4df7-9094-234bec3be2e6";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

