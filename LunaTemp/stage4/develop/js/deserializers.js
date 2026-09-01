var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.JointSpring' )
  var i679 = data
  i678.spring = i679[0]
  i678.damper = i679[1]
  i678.targetPosition = i679[2]
  return i678
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.JointMotor' )
  var i681 = data
  i680.m_TargetVelocity = i681[0]
  i680.m_Force = i681[1]
  i680.m_FreeSpin = i681[2]
  return i680
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.JointLimits' )
  var i683 = data
  i682.m_Min = i683[0]
  i682.m_Max = i683[1]
  i682.m_Bounciness = i683[2]
  i682.m_BounceMinVelocity = i683[3]
  i682.m_ContactDistance = i683[4]
  i682.minBounce = i683[5]
  i682.maxBounce = i683[6]
  return i682
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.JointDrive' )
  var i685 = data
  i684.m_PositionSpring = i685[0]
  i684.m_PositionDamper = i685[1]
  i684.m_MaximumForce = i685[2]
  i684.m_UseAcceleration = i685[3]
  return i684
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i687 = data
  i686.m_Spring = i687[0]
  i686.m_Damper = i687[1]
  return i686
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i689 = data
  i688.m_Limit = i689[0]
  i688.m_Bounciness = i689[1]
  i688.m_ContactDistance = i689[2]
  return i688
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i691 = data
  i690.m_ExtremumSlip = i691[0]
  i690.m_ExtremumValue = i691[1]
  i690.m_AsymptoteSlip = i691[2]
  i690.m_AsymptoteValue = i691[3]
  i690.m_Stiffness = i691[4]
  return i690
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i693 = data
  i692.m_LowerAngle = i693[0]
  i692.m_UpperAngle = i693[1]
  return i692
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i695 = data
  i694.m_MotorSpeed = i695[0]
  i694.m_MaximumMotorTorque = i695[1]
  return i694
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i697 = data
  i696.m_DampingRatio = i697[0]
  i696.m_Frequency = i697[1]
  i696.m_Angle = i697[2]
  return i696
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i699 = data
  i698.m_LowerTranslation = i699[0]
  i698.m_UpperTranslation = i699[1]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i700 = root || new pc.UnityMaterial()
  var i701 = data
  i700.name = i701[0]
  request.r(i701[1], i701[2], 0, i700, 'shader')
  i700.renderQueue = i701[3]
  i700.enableInstancing = !!i701[4]
  var i703 = i701[5]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i703[i + 0]) );
  }
  i700.floatParameters = i702
  var i705 = i701[6]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i705[i + 0]) );
  }
  i700.colorParameters = i704
  var i707 = i701[7]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i707[i + 0]) );
  }
  i700.vectorParameters = i706
  var i709 = i701[8]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i709[i + 0]) );
  }
  i700.textureParameters = i708
  var i711 = i701[9]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i711[i + 0]) );
  }
  i700.materialFlags = i710
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i715 = data
  i714.name = i715[0]
  i714.value = i715[1]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i719 = data
  i718.name = i719[0]
  i718.value = new pc.Color(i719[1], i719[2], i719[3], i719[4])
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i723 = data
  i722.name = i723[0]
  i722.value = new pc.Vec4( i723[1], i723[2], i723[3], i723[4] )
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i727 = data
  i726.name = i727[0]
  request.r(i727[1], i727[2], 0, i726, 'value')
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i731 = data
  i730.name = i731[0]
  i730.enabled = !!i731[1]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i733 = data
  i732.name = i733[0]
  i732.width = i733[1]
  i732.height = i733[2]
  i732.mipmapCount = i733[3]
  i732.anisoLevel = i733[4]
  i732.filterMode = i733[5]
  i732.hdr = !!i733[6]
  i732.format = i733[7]
  i732.wrapMode = i733[8]
  i732.alphaIsTransparency = !!i733[9]
  i732.alphaSource = i733[10]
  i732.graphicsFormat = i733[11]
  i732.sRGBTexture = !!i733[12]
  i732.desiredColorSpace = i733[13]
  i732.wrapU = i733[14]
  i732.wrapV = i733[15]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i735 = data
  i734.name = i735[0]
  i734.halfPrecision = !!i735[1]
  i734.useSimplification = !!i735[2]
  i734.useUInt32IndexFormat = !!i735[3]
  i734.vertexCount = i735[4]
  i734.aabb = i735[5]
  var i737 = i735[6]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( !!i737[i + 0] );
  }
  i734.streams = i736
  i734.vertices = i735[7]
  var i739 = i735[8]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i739[i + 0]) );
  }
  i734.subMeshes = i738
  var i741 = i735[9]
  var i740 = []
  for(var i = 0; i < i741.length; i += 16) {
    i740.push( new pc.Mat4().setData(i741[i + 0], i741[i + 1], i741[i + 2], i741[i + 3],  i741[i + 4], i741[i + 5], i741[i + 6], i741[i + 7],  i741[i + 8], i741[i + 9], i741[i + 10], i741[i + 11],  i741[i + 12], i741[i + 13], i741[i + 14], i741[i + 15]) );
  }
  i734.bindposes = i740
  var i743 = i735[10]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i743[i + 0]) );
  }
  i734.blendShapes = i742
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i749 = data
  i748.triangles = i749[0]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i755 = data
  i754.name = i755[0]
  var i757 = i755[1]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i757[i + 0]) );
  }
  i754.frames = i756
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i759 = data
  i758.position = new pc.Vec3( i759[0], i759[1], i759[2] )
  i758.scale = new pc.Vec3( i759[3], i759[4], i759[5] )
  i758.rotation = new pc.Quat(i759[6], i759[7], i759[8], i759[9])
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i761 = data
  i760.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i761[0], i760.main)
  i760.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i761[1], i760.colorBySpeed)
  i760.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i761[2], i760.colorOverLifetime)
  i760.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i761[3], i760.emission)
  i760.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i761[4], i760.rotationBySpeed)
  i760.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i761[5], i760.rotationOverLifetime)
  i760.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i761[6], i760.shape)
  i760.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i761[7], i760.sizeBySpeed)
  i760.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i761[8], i760.sizeOverLifetime)
  i760.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i761[9], i760.textureSheetAnimation)
  i760.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i761[10], i760.velocityOverLifetime)
  i760.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i761[11], i760.noise)
  i760.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i761[12], i760.inheritVelocity)
  i760.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i761[13], i760.forceOverLifetime)
  i760.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i761[14], i760.limitVelocityOverLifetime)
  i760.useAutoRandomSeed = !!i761[15]
  i760.randomSeed = i761[16]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemMain()
  var i763 = data
  i762.duration = i763[0]
  i762.loop = !!i763[1]
  i762.prewarm = !!i763[2]
  i762.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[3], i762.startDelay)
  i762.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[4], i762.startLifetime)
  i762.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[5], i762.startSpeed)
  i762.startSize3D = !!i763[6]
  i762.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[7], i762.startSizeX)
  i762.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[8], i762.startSizeY)
  i762.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[9], i762.startSizeZ)
  i762.startRotation3D = !!i763[10]
  i762.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[11], i762.startRotationX)
  i762.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[12], i762.startRotationY)
  i762.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[13], i762.startRotationZ)
  i762.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i763[14], i762.startColor)
  i762.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[15], i762.gravityModifier)
  i762.simulationSpace = i763[16]
  request.r(i763[17], i763[18], 0, i762, 'customSimulationSpace')
  i762.simulationSpeed = i763[19]
  i762.useUnscaledTime = !!i763[20]
  i762.scalingMode = i763[21]
  i762.playOnAwake = !!i763[22]
  i762.maxParticles = i763[23]
  i762.emitterVelocityMode = i763[24]
  i762.stopAction = i763[25]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i764 = root || new pc.MinMaxCurve()
  var i765 = data
  i764.mode = i765[0]
  i764.curveMin = new pc.AnimationCurve( { keys_flow: i765[1] } )
  i764.curveMax = new pc.AnimationCurve( { keys_flow: i765[2] } )
  i764.curveMultiplier = i765[3]
  i764.constantMin = i765[4]
  i764.constantMax = i765[5]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i766 = root || new pc.MinMaxGradient()
  var i767 = data
  i766.mode = i767[0]
  i766.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i767[1], i766.gradientMin)
  i766.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i767[2], i766.gradientMax)
  i766.colorMin = new pc.Color(i767[3], i767[4], i767[5], i767[6])
  i766.colorMax = new pc.Color(i767[7], i767[8], i767[9], i767[10])
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i769 = data
  i768.mode = i769[0]
  var i771 = i769[1]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i771[i + 0]) );
  }
  i768.colorKeys = i770
  var i773 = i769[2]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i773[i + 0]) );
  }
  i768.alphaKeys = i772
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemColorBySpeed()
  var i775 = data
  i774.enabled = !!i775[0]
  i774.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i775[1], i774.color)
  i774.range = new pc.Vec2( i775[2], i775[3] )
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i779 = data
  i778.color = new pc.Color(i779[0], i779[1], i779[2], i779[3])
  i778.time = i779[4]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i783 = data
  i782.alpha = i783[0]
  i782.time = i783[1]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemColorOverLifetime()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i785[1], i784.color)
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemEmitter()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[1], i786.rateOverTime)
  i786.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[2], i786.rateOverDistance)
  var i789 = i787[3]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i789[i + 0]) );
  }
  i786.bursts = i788
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemBurst()
  var i793 = data
  i792.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[0], i792.count)
  i792.cycleCount = i793[1]
  i792.minCount = i793[2]
  i792.maxCount = i793[3]
  i792.repeatInterval = i793[4]
  i792.time = i793[5]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemRotationBySpeed()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[1], i794.x)
  i794.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.y)
  i794.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[3], i794.z)
  i794.separateAxes = !!i795[4]
  i794.range = new pc.Vec2( i795[5], i795[6] )
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemRotationOverLifetime()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.x)
  i796.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.y)
  i796.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[3], i796.z)
  i796.separateAxes = !!i797[4]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemShape()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.shapeType = i799[1]
  i798.randomDirectionAmount = i799[2]
  i798.sphericalDirectionAmount = i799[3]
  i798.randomPositionAmount = i799[4]
  i798.alignToDirection = !!i799[5]
  i798.radius = i799[6]
  i798.radiusMode = i799[7]
  i798.radiusSpread = i799[8]
  i798.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[9], i798.radiusSpeed)
  i798.radiusThickness = i799[10]
  i798.angle = i799[11]
  i798.length = i799[12]
  i798.boxThickness = new pc.Vec3( i799[13], i799[14], i799[15] )
  i798.meshShapeType = i799[16]
  request.r(i799[17], i799[18], 0, i798, 'mesh')
  request.r(i799[19], i799[20], 0, i798, 'meshRenderer')
  request.r(i799[21], i799[22], 0, i798, 'skinnedMeshRenderer')
  i798.useMeshMaterialIndex = !!i799[23]
  i798.meshMaterialIndex = i799[24]
  i798.useMeshColors = !!i799[25]
  i798.normalOffset = i799[26]
  i798.arc = i799[27]
  i798.arcMode = i799[28]
  i798.arcSpread = i799[29]
  i798.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[30], i798.arcSpeed)
  i798.donutRadius = i799[31]
  i798.position = new pc.Vec3( i799[32], i799[33], i799[34] )
  i798.rotation = new pc.Vec3( i799[35], i799[36], i799[37] )
  i798.scale = new pc.Vec3( i799[38], i799[39], i799[40] )
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemSizeBySpeed()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[1], i800.x)
  i800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[2], i800.y)
  i800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[3], i800.z)
  i800.separateAxes = !!i801[4]
  i800.range = new pc.Vec2( i801[5], i801[6] )
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemSizeOverLifetime()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[1], i802.x)
  i802.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[2], i802.y)
  i802.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[3], i802.z)
  i802.separateAxes = !!i803[4]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.mode = i805[1]
  i804.animation = i805[2]
  i804.numTilesX = i805[3]
  i804.numTilesY = i805[4]
  i804.useRandomRow = !!i805[5]
  i804.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[6], i804.frameOverTime)
  i804.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[7], i804.startFrame)
  i804.cycleCount = i805[8]
  i804.rowIndex = i805[9]
  i804.flipU = i805[10]
  i804.flipV = i805[11]
  i804.spriteCount = i805[12]
  var i807 = i805[13]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 2, i806, '')
  }
  i804.sprites = i806
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[1], i810.x)
  i810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.y)
  i810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.z)
  i810.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[4], i810.radial)
  i810.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[5], i810.speedModifier)
  i810.space = i811[6]
  i810.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[7], i810.orbitalX)
  i810.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[8], i810.orbitalY)
  i810.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[9], i810.orbitalZ)
  i810.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[10], i810.orbitalOffsetX)
  i810.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[11], i810.orbitalOffsetY)
  i810.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[12], i810.orbitalOffsetZ)
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemNoise()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.separateAxes = !!i813[1]
  i812.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.strengthX)
  i812.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[3], i812.strengthY)
  i812.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[4], i812.strengthZ)
  i812.frequency = i813[5]
  i812.damping = !!i813[6]
  i812.octaveCount = i813[7]
  i812.octaveMultiplier = i813[8]
  i812.octaveScale = i813[9]
  i812.quality = i813[10]
  i812.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[11], i812.scrollSpeed)
  i812.scrollSpeedMultiplier = i813[12]
  i812.remapEnabled = !!i813[13]
  i812.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[14], i812.remapX)
  i812.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[15], i812.remapY)
  i812.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[16], i812.remapZ)
  i812.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[17], i812.positionAmount)
  i812.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[18], i812.rotationAmount)
  i812.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[19], i812.sizeAmount)
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemInheritVelocity()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.mode = i815[1]
  i814.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[2], i814.curve)
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemForceOverLifetime()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[1], i816.x)
  i816.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.y)
  i816.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[3], i816.z)
  i816.space = i817[4]
  i816.randomized = !!i817[5]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[1], i818.limit)
  i818.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.limitX)
  i818.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[3], i818.limitY)
  i818.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[4], i818.limitZ)
  i818.dampen = i819[5]
  i818.separateAxes = !!i819[6]
  i818.space = i819[7]
  i818.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[8], i818.drag)
  i818.multiplyDragByParticleSize = !!i819[9]
  i818.multiplyDragByParticleVelocity = !!i819[10]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'mesh')
  i820.meshCount = i821[2]
  i820.activeVertexStreamsCount = i821[3]
  i820.alignment = i821[4]
  i820.renderMode = i821[5]
  i820.sortMode = i821[6]
  i820.lengthScale = i821[7]
  i820.velocityScale = i821[8]
  i820.cameraVelocityScale = i821[9]
  i820.normalDirection = i821[10]
  i820.sortingFudge = i821[11]
  i820.minParticleSize = i821[12]
  i820.maxParticleSize = i821[13]
  i820.pivot = new pc.Vec3( i821[14], i821[15], i821[16] )
  request.r(i821[17], i821[18], 0, i820, 'trailMaterial')
  i820.applyActiveColorSpace = !!i821[19]
  i820.enabled = !!i821[20]
  request.r(i821[21], i821[22], 0, i820, 'sharedMaterial')
  var i823 = i821[23]
  var i822 = []
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 2, i822, '')
  }
  i820.sharedMaterials = i822
  i820.receiveShadows = !!i821[24]
  i820.shadowCastingMode = i821[25]
  i820.sortingLayerID = i821[26]
  i820.sortingOrder = i821[27]
  i820.lightmapIndex = i821[28]
  i820.lightmapSceneIndex = i821[29]
  i820.lightmapScaleOffset = new pc.Vec4( i821[30], i821[31], i821[32], i821[33] )
  i820.lightProbeUsage = i821[34]
  i820.reflectionProbeUsage = i821[35]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i827 = data
  i826.name = i827[0]
  i826.tagId = i827[1]
  i826.enabled = !!i827[2]
  i826.isStatic = !!i827[3]
  i826.layer = i827[4]
  return i826
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i828 = root || request.c( 'MenuLevel' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'menuLevelBtnUpdate')
  var i831 = i829[2]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('MenuLevelData', i831[i + 0]) );
  }
  i828.AllSteps = i830
  request.r(i829[3], i829[4], 0, i828, 'buttonparent')
  var i833 = i829[5]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i828.BtnsDotweenAnims = i832
  var i835 = i829[6]
  var i834 = []
  for(var i = 0; i < i835.length; i += 2) {
  request.r(i835[i + 0], i835[i + 1], 2, i834, '')
  }
  i828.BtnsCols = i834
  request.r(i829[7], i829[8], 0, i828, 'mainGameView')
  request.r(i829[9], i829[10], 0, i828, 'Storyboard')
  request.r(i829[11], i829[12], 0, i828, 'BgMusic')
  request.r(i829[13], i829[14], 0, i828, 'BgStoryMusic')
  request.r(i829[15], i829[16], 0, i828, 'Hand_Tut1')
  request.r(i829[17], i829[18], 0, i828, 'Button_Hand')
  var i837 = i829[19]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i828.itemEnable_Onstart = i836
  var i839 = i829[20]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i828.itemDisable_Onstart = i838
  var i841 = i829[21]
  var i840 = []
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 2, i840, '')
  }
  i828.itemEnable_Oncomplete = i840
  var i843 = i829[22]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i828.itemDisable_Oncomplete = i842
  i828.levelKey = i829[23]
  i828.revealDirtyHoldTime = i829[24]
  return i828
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i846 = root || request.c( 'MenuLevelData' )
  var i847 = data
  i846.Name = i847[0]
  request.r(i847[1], i847[2], 0, i846, 'UiBtn')
  request.r(i847[3], i847[4], 0, i846, 'TickBtn')
  request.r(i847[5], i847[6], 0, i846, 'ExclamationIcon')
  var i849 = i847[7]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i846.Item_Dirty = i848
  var i851 = i847[8]
  var i850 = []
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 2, i850, '')
  }
  i846.Item_Clean = i850
  request.r(i847[9], i847[10], 0, i846, 'CompleteParticle')
  return i846
}

Deserializers["IntroLevelAnim"] = function (request, data, root) {
  var i858 = root || request.c( 'IntroLevelAnim' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'menuLevel')
  i858.lvlkey = i859[2]
  request.r(i859[3], i859[4], 0, i858, 'DressChangeObj')
  request.r(i859[5], i859[6], 0, i858, 'DressChangeClip')
  return i858
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i860 = root || request.c( 'Level_PoseController' )
  var i861 = data
  var i863 = i861[0]
  var i862 = []
  for(var i = 0; i < i863.length; i += 2) {
  request.r(i863[i + 0], i863[i + 1], 2, i862, '')
  }
  i860.itemToShow = i862
  var i865 = i861[1]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 2, i864, '')
  }
  i860.itemToHide = i864
  i860.stepTarget = i861[2]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i867 = data
  i866.color = new pc.Color(i867[0], i867[1], i867[2], i867[3])
  request.r(i867[4], i867[5], 0, i866, 'sprite')
  i866.flipX = !!i867[6]
  i866.flipY = !!i867[7]
  i866.drawMode = i867[8]
  i866.size = new pc.Vec2( i867[9], i867[10] )
  i866.tileMode = i867[11]
  i866.adaptiveModeThreshold = i867[12]
  i866.maskInteraction = i867[13]
  i866.spriteSortPoint = i867[14]
  i866.enabled = !!i867[15]
  request.r(i867[16], i867[17], 0, i866, 'sharedMaterial')
  var i869 = i867[18]
  var i868 = []
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 2, i868, '')
  }
  i866.sharedMaterials = i868
  i866.receiveShadows = !!i867[19]
  i866.shadowCastingMode = i867[20]
  i866.sortingLayerID = i867[21]
  i866.sortingOrder = i867[22]
  i866.lightmapIndex = i867[23]
  i866.lightmapSceneIndex = i867[24]
  i866.lightmapScaleOffset = new pc.Vec4( i867[25], i867[26], i867[27], i867[28] )
  i866.lightProbeUsage = i867[29]
  i866.reflectionProbeUsage = i867[30]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'animatorController')
  request.r(i871[2], i871[3], 0, i870, 'avatar')
  i870.updateMode = i871[4]
  i870.hasTransformHierarchy = !!i871[5]
  i870.applyRootMotion = !!i871[6]
  var i873 = i871[7]
  var i872 = []
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 2, i872, '')
  }
  i870.humanBones = i872
  i870.enabled = !!i871[8]
  return i870
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'm_RootBone')
  var i879 = i877[2]
  var i878 = []
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 2, i878, '')
  }
  i876.m_BoneTransforms = i878
  i876.m_AlwaysUpdate = !!i877[3]
  i876.m_AutoRebind = !!i877[4]
  return i876
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i880 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i881 = data
  i880.targetIsSelf = !!i881[0]
  request.r(i881[1], i881[2], 0, i880, 'targetGO')
  i880.tweenTargetIsTargetGO = !!i881[3]
  i880.delay = i881[4]
  i880.duration = i881[5]
  i880.easeType = i881[6]
  i880.easeCurve = new pc.AnimationCurve( { keys_flow: i881[7] } )
  i880.loopType = i881[8]
  i880.loops = i881[9]
  i880.id = i881[10]
  i880.isRelative = !!i881[11]
  i880.isFrom = !!i881[12]
  i880.isIndependentUpdate = !!i881[13]
  i880.autoKill = !!i881[14]
  i880.autoGenerate = !!i881[15]
  i880.isActive = !!i881[16]
  i880.isValid = !!i881[17]
  request.r(i881[18], i881[19], 0, i880, 'target')
  i880.animationType = i881[20]
  i880.targetType = i881[21]
  i880.forcedTargetType = i881[22]
  i880.autoPlay = !!i881[23]
  i880.useTargetAsV3 = !!i881[24]
  i880.endValueFloat = i881[25]
  i880.endValueV3 = new pc.Vec3( i881[26], i881[27], i881[28] )
  i880.endValueV2 = new pc.Vec2( i881[29], i881[30] )
  i880.endValueColor = new pc.Color(i881[31], i881[32], i881[33], i881[34])
  i880.endValueString = i881[35]
  i880.endValueRect = UnityEngine.Rect.MinMaxRect(i881[36], i881[37], i881[38], i881[39])
  request.r(i881[40], i881[41], 0, i880, 'endValueTransform')
  i880.optionalBool0 = !!i881[42]
  i880.optionalBool1 = !!i881[43]
  i880.optionalFloat0 = i881[44]
  i880.optionalInt0 = i881[45]
  i880.optionalRotationMode = i881[46]
  i880.optionalScrambleMode = i881[47]
  i880.optionalShakeRandomnessMode = i881[48]
  i880.optionalString = i881[49]
  i880.updateType = i881[50]
  i880.isSpeedBased = !!i881[51]
  i880.hasOnStart = !!i881[52]
  i880.hasOnPlay = !!i881[53]
  i880.hasOnUpdate = !!i881[54]
  i880.hasOnStepComplete = !!i881[55]
  i880.hasOnComplete = !!i881[56]
  i880.hasOnTweenCreated = !!i881[57]
  i880.hasOnRewind = !!i881[58]
  i880.onStart = request.d('UnityEngine.Events.UnityEvent', i881[59], i880.onStart)
  i880.onPlay = request.d('UnityEngine.Events.UnityEvent', i881[60], i880.onPlay)
  i880.onUpdate = request.d('UnityEngine.Events.UnityEvent', i881[61], i880.onUpdate)
  i880.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i881[62], i880.onStepComplete)
  i880.onComplete = request.d('UnityEngine.Events.UnityEvent', i881[63], i880.onComplete)
  i880.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i881[64], i880.onTweenCreated)
  i880.onRewind = request.d('UnityEngine.Events.UnityEvent', i881[65], i880.onRewind)
  return i880
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i883 = data
  i882.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i883[0], i882.m_PersistentCalls)
  return i882
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i885 = data
  var i887 = i885[0]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i887.length; i += 1) {
    i886.add(request.d('UnityEngine.Events.PersistentCall', i887[i + 0]));
  }
  i884.m_Calls = i886
  return i884
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'm_Target')
  i890.m_TargetAssemblyTypeName = i891[2]
  i890.m_MethodName = i891[3]
  i890.m_Mode = i891[4]
  i890.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i891[5], i890.m_Arguments)
  i890.m_CallState = i891[6]
  return i890
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i892 = root || request.c( 'BD_AnimationHelper' )
  var i893 = data
  i892.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i893[0], i892.OnAnimationComplete)
  request.r(i893[1], i893[2], 0, i892, 'sfxClip')
  return i892
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'm_ObjectArgument')
  i894.m_ObjectArgumentAssemblyTypeName = i895[2]
  i894.m_IntArgument = i895[3]
  i894.m_FloatArgument = i895[4]
  i894.m_StringArgument = i895[5]
  i894.m_BoolArgument = !!i895[6]
  return i894
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i896 = root || request.c( 'SpriteButton' )
  var i897 = data
  i896.isLocked = !!i897[0]
  i896.lockMsg = i897[1]
  i896.onClick = request.d('UnityEngine.Events.UnityEvent', i897[2], i896.onClick)
  i896.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i897[3], i896.onLockedClick)
  i896.isLevelBtnSfx = !!i897[4]
  request.r(i897[5], i897[6], 0, i896, 'pivot')
  i896.reductionChange = i897[7]
  i896.animationDuration = i897[8]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i899 = data
  i898.usedByComposite = !!i899[0]
  i898.autoTiling = !!i899[1]
  i898.size = new pc.Vec2( i899[2], i899[3] )
  i898.edgeRadius = i899[4]
  i898.enabled = !!i899[5]
  i898.isTrigger = !!i899[6]
  i898.usedByEffector = !!i899[7]
  i898.density = i899[8]
  i898.offset = new pc.Vec2( i899[9], i899[10] )
  request.r(i899[11], i899[12], 0, i898, 'material')
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i901 = data
  var i903 = i901[0]
  var i902 = []
  for(var i = 0; i < i903.length; i += 3) {
    i902.push( new pc.Vec3( i903[i + 0], i903[i + 1], i903[i + 2] ) );
  }
  i900.positions = i902
  i900.positionCount = i901[1]
  i900.time = i901[2]
  i900.startWidth = i901[3]
  i900.endWidth = i901[4]
  i900.widthMultiplier = i901[5]
  i900.autodestruct = !!i901[6]
  i900.emitting = !!i901[7]
  i900.numCornerVertices = i901[8]
  i900.numCapVertices = i901[9]
  i900.minVertexDistance = i901[10]
  i900.colorGradient = i901[11] ? new pc.ColorGradient(i901[11][0], i901[11][1], i901[11][2]) : null
  i900.startColor = new pc.Color(i901[12], i901[13], i901[14], i901[15])
  i900.endColor = new pc.Color(i901[16], i901[17], i901[18], i901[19])
  i900.generateLightingData = !!i901[20]
  i900.textureMode = i901[21]
  i900.alignment = i901[22]
  i900.widthCurve = new pc.AnimationCurve( { keys_flow: i901[23] } )
  i900.enabled = !!i901[24]
  request.r(i901[25], i901[26], 0, i900, 'sharedMaterial')
  var i905 = i901[27]
  var i904 = []
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 2, i904, '')
  }
  i900.sharedMaterials = i904
  i900.receiveShadows = !!i901[28]
  i900.shadowCastingMode = i901[29]
  i900.sortingLayerID = i901[30]
  i900.sortingOrder = i901[31]
  i900.lightmapIndex = i901[32]
  i900.lightmapSceneIndex = i901[33]
  i900.lightmapScaleOffset = new pc.Vec4( i901[34], i901[35], i901[36], i901[37] )
  i900.lightProbeUsage = i901[38]
  i900.reflectionProbeUsage = i901[39]
  return i900
}

Deserializers["Level1_Cloth_Playable"] = function (request, data, root) {
  var i908 = root || request.c( 'Level1_Cloth_Playable' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'WashingView')
  request.r(i909[2], i909[3], 0, i908, 'WashingTools')
  request.r(i909[4], i909[5], 0, i908, 'DressingView')
  request.r(i909[6], i909[7], 0, i908, 'DressingTools')
  i908.ZoomStep1 = request.d('ZoomPos', i909[8], i908.ZoomStep1)
  request.r(i909[9], i909[10], 0, i908, 'ToolStep1')
  request.r(i909[11], i909[12], 0, i908, 'Basket_Cloth')
  request.r(i909[13], i909[14], 0, i908, 'clothInside')
  request.r(i909[15], i909[16], 0, i908, 'clothRound')
  request.r(i909[17], i909[18], 0, i908, 'machineDoor')
  request.r(i909[19], i909[20], 0, i908, 'machineGlass')
  i908.ZoomStep2 = request.d('ZoomPos', i909[21], i908.ZoomStep2)
  i908.ZoomStep2b = request.d('ZoomPos', i909[22], i908.ZoomStep2b)
  request.r(i909[23], i909[24], 0, i908, 'ToolStep2')
  request.r(i909[25], i909[26], 0, i908, 'ToolStep2CamFollow')
  request.r(i909[27], i909[28], 0, i908, 'drawerObj')
  request.r(i909[29], i909[30], 0, i908, 'surfObj')
  request.r(i909[31], i909[32], 0, i908, 'surfPackTop')
  request.r(i909[33], i909[34], 0, i908, 'handStep2')
  request.r(i909[35], i909[36], 0, i908, 'surfController')
  request.r(i909[37], i909[38], 0, i908, 'clothsInside')
  request.r(i909[39], i909[40], 0, i908, 'clothsInsideGlass')
  request.r(i909[41], i909[42], 0, i908, 'clothsStaticClean')
  request.r(i909[43], i909[44], 0, i908, 'wetCloths')
  request.r(i909[45], i909[46], 0, i908, 'clothCleanInside')
  request.r(i909[47], i909[48], 0, i908, 'clothCleanInsideAnim')
  request.r(i909[49], i909[50], 0, i908, 'waterWave')
  request.r(i909[51], i909[52], 0, i908, 'clothCleanInside2')
  request.r(i909[53], i909[54], 0, i908, 'clothCleanInside2Cam')
  request.r(i909[55], i909[56], 0, i908, 'clothBasketTarget')
  request.r(i909[57], i909[58], 0, i908, 'clothBasketTarget2')
  request.r(i909[59], i909[60], 0, i908, 'waterSplash_Vfx')
  request.r(i909[61], i909[62], 0, i908, 'countDownTimerText')
  i908.countDown = i909[63]
  request.r(i909[64], i909[65], 0, i908, 'machineTimer')
  request.r(i909[66], i909[67], 0, i908, 'machineTimerRotater')
  request.r(i909[68], i909[69], 0, i908, 'machineTimerIndication')
  request.r(i909[70], i909[71], 0, i908, 'darazOpenSfx')
  request.r(i909[72], i909[73], 0, i908, 'darazCloseSfx')
  request.r(i909[74], i909[75], 0, i908, 'doorOpenSfx')
  request.r(i909[76], i909[77], 0, i908, 'machineStartSfx')
  request.r(i909[78], i909[79], 0, i908, 'machineFinishSfx')
  request.r(i909[80], i909[81], 0, i908, 'waterDrainSfx')
  i908.ZoomStep3a = request.d('ZoomPos', i909[82], i908.ZoomStep3a)
  request.r(i909[83], i909[84], 0, i908, 'ToolStep3a')
  request.r(i909[85], i909[86], 0, i908, 'ToolStep3aRend')
  request.r(i909[87], i909[88], 0, i908, 'dressingBasket')
  request.r(i909[89], i909[90], 0, i908, 'dummyFullParent')
  request.r(i909[91], i909[92], 0, i908, 'DressParent')
  i908.ZoomStep3 = request.d('ZoomPos', i909[93], i908.ZoomStep3)
  request.r(i909[94], i909[95], 0, i908, 'ToolStep3')
  request.r(i909[96], i909[97], 0, i908, 'tornPatch')
  request.r(i909[98], i909[99], 0, i908, 'patchCompleted')
  request.r(i909[100], i909[101], 0, i908, 'patchOutline')
  i908.ZoomStep4 = request.d('ZoomPos', i909[102], i908.ZoomStep4)
  request.r(i909[103], i909[104], 0, i908, 'ToolStep4')
  request.r(i909[105], i909[106], 0, i908, 'camFollowStep4')
  request.r(i909[107], i909[108], 0, i908, 'SteamerBottom')
  i908.ZoomStep5 = request.d('ZoomPos', i909[109], i908.ZoomStep5)
  request.r(i909[110], i909[111], 0, i908, 'ToolStep5')
  request.r(i909[112], i909[113], 0, i908, 'ribbonFinalTarget')
  request.r(i909[114], i909[115], 0, i908, 'ribbonFinal')
  request.r(i909[116], i909[117], 0, i908, 'handIndication5')
  i908.levelName = i909[118]
  i908.levelReward = i909[119]
  request.r(i909[120], i909[121], 0, i908, 'LevelIcon')
  request.r(i909[122], i909[123], 0, i908, 'Level_BG')
  var i911 = i909[124]
  var i910 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 1, i910, '')
  }
  i908.ToolIcons = i910
  var i913 = i909[125]
  var i912 = []
  for(var i = 0; i < i913.length; i += 2) {
  request.r(i913[i + 0], i913[i + 1], 2, i912, '')
  }
  i908.AllDrags = i912
  var i915 = i909[126]
  var i914 = []
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 2, i914, '')
  }
  i908.AllSources = i914
  var i917 = i909[127]
  var i916 = []
  for(var i = 0; i < i917.length; i += 2) {
  request.r(i917[i + 0], i917[i + 1], 2, i916, '')
  }
  i908.AllScratches = i916
  i908.stepsDone = i909[128]
  i908.levelNo = i909[129]
  i908.partNo = i909[130]
  request.r(i909[131], i909[132], 0, i908, 'clothSfx')
  request.r(i909[133], i909[134], 0, i908, 'doorCloseSfx')
  return i908
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i918 = root || request.c( 'ZoomPos' )
  var i919 = data
  i918.CameraPos = new pc.Vec3( i919[0], i919[1], i919[2] )
  i918.CameraFOV = i919[3]
  return i918
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i928 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'MainCamera')
  i928.RenderType = i929[2]
  request.r(i929[3], i929[4], 0, i928, 'ScratchSurfaceSprite')
  i928.ScratchSurfaceSpriteHasAlpha = !!i929[5]
  i928.MaskProgressCutOffValue = i929[6]
  request.r(i929[7], i929[8], 0, i928, 'EraseTexture')
  i928.EraseTextureScale = new pc.Vec2( i929[9], i929[10] )
  i928.InputEnabled = !!i929[11]
  request.r(i929[12], i929[13], 0, i928, 'Card')
  i928.Mode = i929[14]
  request.r(i929[15], i929[16], 0, i928, 'Progress')
  request.r(i929[17], i929[18], 0, i928, 'MeshCard')
  request.r(i929[19], i929[20], 0, i928, 'SpriteCard')
  request.r(i929[21], i929[22], 0, i928, 'ImageCard')
  request.r(i929[23], i929[24], 0, i928, 'MaskShader')
  request.r(i929[25], i929[26], 0, i928, 'BrushShader')
  request.r(i929[27], i929[28], 0, i928, 'MaskProgressShader')
  request.r(i929[29], i929[30], 0, i928, 'MaskProgressCutOffShader')
  return i928
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i930 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'MainCamera')
  request.r(i931[2], i931[3], 0, i930, 'Surface')
  i930.RenderTextureQuality = i931[4]
  request.r(i931[5], i931[6], 0, i930, 'Eraser')
  request.r(i931[7], i931[8], 0, i930, 'Progress')
  request.r(i931[9], i931[10], 0, i930, 'ScratchSurface')
  request.r(i931[11], i931[12], 0, i930, 'RenderTexture')
  i930.BrushScale = new pc.Vec2( i931[13], i931[14] )
  request.r(i931[15], i931[16], 0, i930, 'ToolTip')
  i930.InputEnabled = !!i931[17]
  i930.IsScratching = !!i931[18]
  i930.useChangingScale = !!i931[19]
  i930.useGivenBrushScale = !!i931[20]
  i930.canSpreadMask = !!i931[21]
  i930.shouldPaintHoles = !!i931[22]
  i930.canRotateTip = !!i931[23]
  i930._mode = i931[24]
  return i930
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i932 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'Card')
  i932.currentProgress = i933[2]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i935 = data
  i934.textureMode = i935[0]
  i934.alignment = i935[1]
  i934.widthCurve = new pc.AnimationCurve( { keys_flow: i935[2] } )
  i934.colorGradient = i935[3] ? new pc.ColorGradient(i935[3][0], i935[3][1], i935[3][2]) : null
  var i937 = i935[4]
  var i936 = []
  for(var i = 0; i < i937.length; i += 3) {
    i936.push( new pc.Vec3( i937[i + 0], i937[i + 1], i937[i + 2] ) );
  }
  i934.positions = i936
  i934.positionCount = i935[5]
  i934.widthMultiplier = i935[6]
  i934.startWidth = i935[7]
  i934.endWidth = i935[8]
  i934.numCornerVertices = i935[9]
  i934.numCapVertices = i935[10]
  i934.useWorldSpace = !!i935[11]
  i934.loop = !!i935[12]
  i934.startColor = new pc.Color(i935[13], i935[14], i935[15], i935[16])
  i934.endColor = new pc.Color(i935[17], i935[18], i935[19], i935[20])
  i934.generateLightingData = !!i935[21]
  i934.enabled = !!i935[22]
  request.r(i935[23], i935[24], 0, i934, 'sharedMaterial')
  var i939 = i935[25]
  var i938 = []
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 2, i938, '')
  }
  i934.sharedMaterials = i938
  i934.receiveShadows = !!i935[26]
  i934.shadowCastingMode = i935[27]
  i934.sortingLayerID = i935[28]
  i934.sortingOrder = i935[29]
  i934.lightmapIndex = i935[30]
  i934.lightmapSceneIndex = i935[31]
  i934.lightmapScaleOffset = new pc.Vec4( i935[32], i935[33], i935[34], i935[35] )
  i934.lightProbeUsage = i935[36]
  i934.reflectionProbeUsage = i935[37]
  return i934
}

Deserializers["TextureOffsetScroller"] = function (request, data, root) {
  var i940 = root || request.c( 'TextureOffsetScroller' )
  var i941 = data
  i940.scrollSpeed = new pc.Vec2( i941[0], i941[1] )
  i940.smoothStart = !!i941[2]
  i940.smoothDuration = i941[3]
  i940.textureName = i941[4]
  i940.useSharedMaterial = !!i941[5]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i943 = data
  i942.pivot = new pc.Vec2( i943[0], i943[1] )
  i942.anchorMin = new pc.Vec2( i943[2], i943[3] )
  i942.anchorMax = new pc.Vec2( i943[4], i943[5] )
  i942.sizeDelta = new pc.Vec2( i943[6], i943[7] )
  i942.anchoredPosition3D = new pc.Vec3( i943[8], i943[9], i943[10] )
  i942.rotation = new pc.Quat(i943[11], i943[12], i943[13], i943[14])
  i942.scale = new pc.Vec3( i943[15], i943[16], i943[17] )
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i945 = data
  i944.planeDistance = i945[0]
  i944.referencePixelsPerUnit = i945[1]
  i944.isFallbackOverlay = !!i945[2]
  i944.renderMode = i945[3]
  i944.renderOrder = i945[4]
  i944.sortingLayerName = i945[5]
  i944.sortingOrder = i945[6]
  i944.scaleFactor = i945[7]
  request.r(i945[8], i945[9], 0, i944, 'worldCamera')
  i944.overrideSorting = !!i945[10]
  i944.pixelPerfect = !!i945[11]
  i944.targetDisplay = i945[12]
  i944.overridePixelPerfect = !!i945[13]
  i944.enabled = !!i945[14]
  return i944
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i947 = data
  i946.m_UiScaleMode = i947[0]
  i946.m_ReferencePixelsPerUnit = i947[1]
  i946.m_ScaleFactor = i947[2]
  i946.m_ReferenceResolution = new pc.Vec2( i947[3], i947[4] )
  i946.m_ScreenMatchMode = i947[5]
  i946.m_MatchWidthOrHeight = i947[6]
  i946.m_PhysicalUnit = i947[7]
  i946.m_FallbackScreenDPI = i947[8]
  i946.m_DefaultSpriteDPI = i947[9]
  i946.m_DynamicPixelsPerUnit = i947[10]
  i946.m_PresetInfoIsWorld = !!i947[11]
  return i946
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i949 = data
  i948.m_IgnoreReversedGraphics = !!i949[0]
  i948.m_BlockingObjects = i949[1]
  i948.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i949[2] )
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i951 = data
  i950.cullTransparentMesh = !!i951[0]
  return i950
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.UI.Text' )
  var i953 = data
  i952.m_FontData = request.d('UnityEngine.UI.FontData', i953[0], i952.m_FontData)
  i952.m_Text = i953[1]
  request.r(i953[2], i953[3], 0, i952, 'm_Material')
  i952.m_Maskable = !!i953[4]
  i952.m_Color = new pc.Color(i953[5], i953[6], i953[7], i953[8])
  i952.m_RaycastTarget = !!i953[9]
  i952.m_RaycastPadding = new pc.Vec4( i953[10], i953[11], i953[12], i953[13] )
  return i952
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.UI.FontData' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'm_Font')
  i954.m_FontSize = i955[2]
  i954.m_FontStyle = i955[3]
  i954.m_BestFit = !!i955[4]
  i954.m_MinSize = i955[5]
  i954.m_MaxSize = i955[6]
  i954.m_Alignment = i955[7]
  i954.m_AlignByGeometry = !!i955[8]
  i954.m_RichText = !!i955[9]
  i954.m_HorizontalOverflow = i955[10]
  i954.m_VerticalOverflow = i955[11]
  i954.m_LineSpacing = i955[12]
  return i954
}

Deserializers["RotaryTimerKnob"] = function (request, data, root) {
  var i956 = root || request.c( 'RotaryTimerKnob' )
  var i957 = data
  i956.canDrag = !!i957[0]
  i956.numSteps = i957[1]
  i956.onlyClockwise = !!i957[2]
  request.r(i957[3], i957[4], 0, i956, 'clickSound')
  i956.enableVibration = !!i957[5]
  request.r(i957[6], i957[7], 0, i956, 'stepText')
  i956.OnComplete = request.d('UnityEngine.Events.UnityEvent', i957[8], i956.OnComplete)
  request.r(i957[9], i957[10], 0, i956, 'handIndication')
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i959 = data
  i958.frontSortingLayerID = i959[0]
  i958.frontSortingOrder = i959[1]
  i958.backSortingLayerID = i959[2]
  i958.backSortingOrder = i959[3]
  i958.alphaCutoff = i959[4]
  request.r(i959[5], i959[6], 0, i958, 'sprite')
  i958.tileMode = i959[7]
  i958.isCustomRangeActive = !!i959[8]
  i958.spriteSortPoint = i959[9]
  i958.enabled = !!i959[10]
  request.r(i959[11], i959[12], 0, i958, 'sharedMaterial')
  var i961 = i959[13]
  var i960 = []
  for(var i = 0; i < i961.length; i += 2) {
  request.r(i961[i + 0], i961[i + 1], 2, i960, '')
  }
  i958.sharedMaterials = i960
  i958.receiveShadows = !!i959[14]
  i958.shadowCastingMode = i959[15]
  i958.sortingLayerID = i959[16]
  i958.sortingOrder = i959[17]
  i958.lightmapIndex = i959[18]
  i958.lightmapSceneIndex = i959[19]
  i958.lightmapScaleOffset = new pc.Vec4( i959[20], i959[21], i959[22], i959[23] )
  i958.lightProbeUsage = i959[24]
  i958.reflectionProbeUsage = i959[25]
  return i958
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

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i972 = root || request.c( 'BD_CameraFollow' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'Tool')
  request.r(i973[2], i973[3], 0, i972, 'Pivot')
  i972.FOV = i973[4]
  i972.Y_L = i973[5]
  i972.Y_H = i973[6]
  i972.X_L = i973[7]
  i972.X_R = i973[8]
  i972.startDelay = i973[9]
  i972.duration = i973[10]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i975 = data
  i974.bodyType = i975[0]
  request.r(i975[1], i975[2], 0, i974, 'material')
  i974.simulated = !!i975[3]
  i974.useAutoMass = !!i975[4]
  i974.mass = i975[5]
  i974.drag = i975[6]
  i974.angularDrag = i975[7]
  i974.gravityScale = i975[8]
  i974.collisionDetectionMode = i975[9]
  i974.sleepMode = i975[10]
  i974.constraints = i975[11]
  return i974
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i976 = root || request.c( 'PlaceItem' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'thisDrag')
  request.r(i977[2], i977[3], 0, i976, 'Target')
  request.r(i977[4], i977[5], 0, i976, 'Clip')
  i976.jumpOnPlace = !!i977[6]
  i976.jumpHeight = i977[7]
  i976.jumpDuration = i977[8]
  i976.settleDuration = i977[9]
  i976.isPlaced = !!i977[10]
  i976.isInsideCollider = !!i977[11]
  i976.changeScaleOnPlace = !!i977[12]
  request.r(i977[13], i977[14], 0, i976, 'item')
  i976.newScaleOnPlace = new pc.Vec3( i977[15], i977[16], i977[17] )
  i976.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i977[18], i976.OnPlaced)
  return i976
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i978 = root || request.c( 'ActionOnTap' )
  var i979 = data
  i978.OnTap = request.d('UnityEngine.Events.UnityEvent', i979[0], i978.OnTap)
  i978.OnTapExtra = request.d('System.Action', i979[1], i978.OnTapExtra)
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i985 = data
  i984.usedByComposite = !!i985[0]
  i984.autoTiling = !!i985[1]
  var i987 = i985[2]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
  var i989 = i987[i + 0]
  var i988 = []
  for(var i = 0; i < i989.length; i += 2) {
    i988.push( new pc.Vec2( i989[i + 0], i989[i + 1] ) );
  }
    i986.push( i988 );
  }
  i984.points = i986
  i984.enabled = !!i985[3]
  i984.isTrigger = !!i985[4]
  i984.usedByEffector = !!i985[5]
  i984.density = i985[6]
  i984.offset = new pc.Vec2( i985[7], i985[8] )
  request.r(i985[9], i985[10], 0, i984, 'material')
  return i984
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i996 = root || request.c( 'PlaySfxOnCollision' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'Tip')
  i996.Mode = i997[2]
  request.r(i997[3], i997[4], 0, i996, 'DragInput')
  request.r(i997[5], i997[6], 0, i996, 'Source')
  i996.startVol = i997[7]
  i996.targetVol = i997[8]
  i996.duration = i997[9]
  request.r(i997[10], i997[11], 0, i996, 'Particles')
  i996.isDone = !!i997[12]
  i996.isInArea = !!i997[13]
  i996.isPlaying = !!i997[14]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'clip')
  request.r(i999[2], i999[3], 0, i998, 'outputAudioMixerGroup')
  i998.playOnAwake = !!i999[4]
  i998.loop = !!i999[5]
  i998.time = i999[6]
  i998.volume = i999[7]
  i998.pitch = i999[8]
  i998.enabled = !!i999[9]
  return i998
}

Deserializers["SewingCol"] = function (request, data, root) {
  var i1000 = root || request.c( 'SewingCol' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'targetTip')
  var i1003 = i1001[2]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 2) {
  request.r(i1003[i + 0], i1003[i + 1], 2, i1002, '')
  }
  i1000.Anim_Items = i1002
  i1000.isDone = !!i1001[3]
  request.r(i1001[4], i1001[5], 0, i1000, 'sfx')
  return i1000
}

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i1004 = root || request.c( 'OutlinePulse' )
  var i1005 = data
  i1004.smallThickness = i1005[0]
  i1004.largeThickness = i1005[1]
  i1004.transitionSpeed = i1005[2]
  i1004.animationSpeed = i1005[3]
  i1004.isThickOutline = !!i1005[4]
  i1004.animate = !!i1005[5]
  i1004.hideSpriteOnly = !!i1005[6]
  return i1004
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i1006 = root || request.c( 'BD_Action' )
  var i1007 = data
  i1006.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i1007[0], i1006.OnMouseDownEvent)
  i1006.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i1007[1], i1006.OnMouseUpEvent)
  i1006.setToolLayer = !!i1007[2]
  request.r(i1007[3], i1007[4], 0, i1006, 'tool_SP')
  return i1006
}

Deserializers["Level1_SurfController"] = function (request, data, root) {
  var i1008 = root || request.c( 'Level1_SurfController' )
  var i1009 = data
  i1008.target_rotZ = i1009[0]
  i1008.rotationDuration = i1009[1]
  i1008.rotationEase = i1009[2]
  request.r(i1009[3], i1009[4], 0, i1008, 'maskItem')
  i1008.maskTarget_posY = i1009[5]
  i1008.maskMoveDuration = i1009[6]
  i1008.requiredHoldTime = i1009[7]
  i1008.minRotationForProgress = i1009[8]
  request.r(i1009[9], i1009[10], 0, i1008, 'tipCollider')
  request.r(i1009[11], i1009[12], 0, i1008, 'targetZoneCollider')
  request.r(i1009[13], i1009[14], 0, i1008, 'surf_Particles')
  request.r(i1009[15], i1009[16], 0, i1008, 'surf_SubEmitter')
  request.r(i1009[17], i1009[18], 0, i1008, 'Indication')
  i1008.OnComplete = request.d('UnityEngine.Events.UnityEvent', i1009[19], i1008.OnComplete)
  i1008.currentHoldProgress = i1009[20]
  return i1008
}

Deserializers["BD_Fold"] = function (request, data, root) {
  var i1010 = root || request.c( 'BD_Fold' )
  var i1011 = data
  i1010.canDrag = !!i1011[0]
  i1010.canFoldBottomLeft = !!i1011[1]
  i1010.canFoldBottomRight = !!i1011[2]
  i1010.canFoldTopLeft = !!i1011[3]
  i1010.canFoldTopRight = !!i1011[4]
  request.r(i1011[5], i1011[6], 0, i1010, 'Indication')
  request.r(i1011[7], i1011[8], 0, i1010, 'backSideSprite')
  i1010.maxSideOffset = i1011[9]
  i1010.foldBackDuration = i1011[10]
  i1010.instantFoldAmount = i1011[11]
  i1010.useSmoothRelease = !!i1011[12]
  i1010.completionLimit = i1011[13]
  i1010.afterCompletionTravelTo = i1011[14]
  i1010.OnComplete = request.d('UnityEngine.Events.UnityEvent', i1011[15], i1010.OnComplete)
  i1010.currentProgress = i1011[16]
  i1010.innerShadowStrength = i1011[17]
  request.r(i1011[18], i1011[19], 0, i1010, 'dragAudioSource')
  request.r(i1011[20], i1011[21], 0, i1010, 'dragStartClip')
  request.r(i1011[22], i1011[23], 0, i1010, 'completionClip')
  i1010.audioFadeSpeed = i1011[24]
  i1010.audioMoveThreshold = i1011[25]
  i1010.hapticInterval = i1011[26]
  return i1010
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i1012 = root || request.c( 'BD_Progress' )
  var i1013 = data
  var i1015 = i1013[0]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('ScratchData', i1015[i + 0]) );
  }
  i1012.AllScratches = i1014
  i1012.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i1013[1], i1012.OnScratchComplete)
  i1012.isProgDone = !!i1013[2]
  i1012.canCallComplete = !!i1013[3]
  i1012.CollectiveAppear = !!i1013[4]
  i1012.tipControl = !!i1013[5]
  i1012.progressControl = !!i1013[6]
  request.r(i1013[7], i1013[8], 0, i1012, 'thisDrag')
  i1012.CompleteEvent = request.d('System.Action', i1013[9], i1012.CompleteEvent)
  i1012.SubCompleteEvent = request.d('System.Action', i1013[10], i1012.SubCompleteEvent)
  return i1012
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i1018 = root || request.c( 'ScratchData' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'ScratchManager')
  i1018.scratchLimit = i1019[2]
  i1018.isComplete = !!i1019[3]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'sharedMesh')
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'additionalVertexStreams')
  i1022.enabled = !!i1023[2]
  request.r(i1023[3], i1023[4], 0, i1022, 'sharedMaterial')
  var i1025 = i1023[5]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 2) {
  request.r(i1025[i + 0], i1025[i + 1], 2, i1024, '')
  }
  i1022.sharedMaterials = i1024
  i1022.receiveShadows = !!i1023[6]
  i1022.shadowCastingMode = i1023[7]
  i1022.sortingLayerID = i1023[8]
  i1022.sortingOrder = i1023[9]
  i1022.lightmapIndex = i1023[10]
  i1022.lightmapSceneIndex = i1023[11]
  i1022.lightmapScaleOffset = new pc.Vec4( i1023[12], i1023[13], i1023[14], i1023[15] )
  i1022.lightProbeUsage = i1023[16]
  i1022.reflectionProbeUsage = i1023[17]
  return i1022
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i1026 = root || request.c( 'StaticFixedPipe' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'meshRenderer')
  request.r(i1027[2], i1027[3], 0, i1026, 'toolTransform')
  request.r(i1027[4], i1027[5], 0, i1026, 'toolDirectionPoint')
  request.r(i1027[6], i1027[7], 0, i1026, 'fixedEndPoint')
  i1026.segmentCount = i1027[8]
  i1026.totalLength = i1027[9]
  i1026.constraintIterations = i1027[10]
  i1026.gravity = new pc.Vec3( i1027[11], i1027[12], i1027[13] )
  i1026.pipeWidth = i1027[14]
  return i1026
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i1028 = root || request.c( 'BD_SpriteChange' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'BD')
  request.r(i1029[2], i1029[3], 0, i1028, 'SR')
  request.r(i1029[4], i1029[5], 0, i1028, 'Default')
  request.r(i1029[6], i1029[7], 0, i1028, 'Picked')
  i1028.resetOnRelease = !!i1029[8]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1031 = data
  i1030.name = i1031[0]
  i1030.atlasId = i1031[1]
  i1030.mipmapCount = i1031[2]
  i1030.hdr = !!i1031[3]
  i1030.size = i1031[4]
  i1030.anisoLevel = i1031[5]
  i1030.filterMode = i1031[6]
  var i1033 = i1031[7]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 4) {
    i1032.push( UnityEngine.Rect.MinMaxRect(i1033[i + 0], i1033[i + 1], i1033[i + 2], i1033[i + 3]) );
  }
  i1030.rects = i1032
  i1030.wrapU = i1031[8]
  i1030.wrapV = i1031[9]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1037 = data
  i1036.name = i1037[0]
  i1036.index = i1037[1]
  i1036.startup = !!i1037[2]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1039 = data
  i1038.aspect = i1039[0]
  i1038.orthographic = !!i1039[1]
  i1038.orthographicSize = i1039[2]
  i1038.backgroundColor = new pc.Color(i1039[3], i1039[4], i1039[5], i1039[6])
  i1038.nearClipPlane = i1039[7]
  i1038.farClipPlane = i1039[8]
  i1038.fieldOfView = i1039[9]
  i1038.depth = i1039[10]
  i1038.clearFlags = i1039[11]
  i1038.cullingMask = i1039[12]
  i1038.rect = i1039[13]
  request.r(i1039[14], i1039[15], 0, i1038, 'targetTexture')
  i1038.usePhysicalProperties = !!i1039[16]
  i1038.focalLength = i1039[17]
  i1038.sensorSize = new pc.Vec2( i1039[18], i1039[19] )
  i1038.lensShift = new pc.Vec2( i1039[20], i1039[21] )
  i1038.gateFit = i1039[22]
  i1038.commandBufferCount = i1039[23]
  i1038.cameraType = i1039[24]
  i1038.enabled = !!i1039[25]
  return i1038
}

Deserializers["CameraController"] = function (request, data, root) {
  var i1040 = root || request.c( 'CameraController' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'cam')
  i1040.defaultPosition = new pc.Vec3( i1041[2], i1041[3], i1041[4] )
  i1040.defaultSize = i1041[5]
  i1040.defaultFOV = i1041[6]
  i1040.defaultDuration = i1041[7]
  i1040.defaultEase = i1041[8]
  return i1040
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i1042 = root || request.c( 'MusicSource' )
  var i1043 = data
  request.r(i1043[0], i1043[1], 0, i1042, 'source')
  return i1042
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i1044 = root || request.c( 'UI_Manager' )
  var i1045 = data
  i1044.levelCompleted = !!i1045[0]
  i1044.isPauseActive = !!i1045[1]
  i1044.loadIndex = i1045[2]
  request.r(i1045[3], i1045[4], 0, i1044, 'removeAdsButton')
  request.r(i1045[5], i1045[6], 0, i1044, 'pauseButton')
  request.r(i1045[7], i1045[8], 0, i1044, 'Fade_Img')
  request.r(i1045[9], i1045[10], 0, i1044, 'TopBarAnim')
  request.r(i1045[11], i1045[12], 0, i1044, 'MainPanel')
  request.r(i1045[13], i1045[14], 0, i1044, 'PausePanel')
  request.r(i1045[15], i1045[16], 0, i1044, 'PausePopUp')
  request.r(i1045[17], i1045[18], 0, i1044, 'PauseCanvasGroup')
  request.r(i1045[19], i1045[20], 0, i1044, 'RateUsPanel')
  request.r(i1045[21], i1045[22], 0, i1044, 'RateUsPopUp')
  request.r(i1045[23], i1045[24], 0, i1044, 'RemoveAdsPanel')
  request.r(i1045[25], i1045[26], 0, i1044, 'RemoveAdsPopUp')
  request.r(i1045[27], i1045[28], 0, i1044, 'RemoveAdsCanvasGroup')
  var i1047 = i1045[29]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 2) {
  request.r(i1047[i + 0], i1047[i + 1], 2, i1046, '')
  }
  i1044.RemoveAdsAnims = i1046
  request.r(i1045[30], i1045[31], 0, i1044, 'CompletePanel')
  request.r(i1045[32], i1045[33], 0, i1044, 'LevelIcon')
  request.r(i1045[34], i1045[35], 0, i1044, 'CompleteParticles')
  request.r(i1045[36], i1045[37], 0, i1044, 'progressBar')
  request.r(i1045[38], i1045[39], 0, i1044, 'progressText')
  request.r(i1045[40], i1045[41], 0, i1044, 'toolIcon1')
  request.r(i1045[42], i1045[43], 0, i1044, 'toolIcon2')
  request.r(i1045[44], i1045[45], 0, i1044, 'toolIcon3')
  request.r(i1045[46], i1045[47], 0, i1044, 'target1')
  request.r(i1045[48], i1045[49], 0, i1044, 'target2')
  i1044.toolMoveDuration = i1045[50]
  i1044.currentIndex = i1045[51]
  var i1049 = i1045[52]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1049.length; i += 2) {
  request.r(i1049[i + 0], i1049[i + 1], 1, i1048, '')
  }
  i1044.allTools = i1048
  request.r(i1045[53], i1045[54], 0, i1044, 'clockProgress')
  request.r(i1045[55], i1045[56], 0, i1044, 'clockProgressFill')
  request.r(i1045[57], i1045[58], 0, i1044, 'clockAudio')
  i1044.moveDistance = i1045[59]
  i1044.animationDuration = i1045[60]
  i1044.greyBgChildName = i1045[61]
  i1044.pushOffset = i1045[62]
  return i1044
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i1050 = root || request.c( 'GameManagerPlayable' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'endParticles')
  request.r(i1051[2], i1051[3], 0, i1050, 'stepCompleteParticles')
  request.r(i1051[4], i1051[5], 0, i1050, 'DefaultMat')
  request.r(i1051[6], i1051[7], 0, i1050, 'BG_Music')
  request.r(i1051[8], i1051[9], 0, i1050, 'restoreEffectShader')
  request.r(i1051[10], i1051[11], 0, i1050, 'stickerEffectShader')
  i1050.isComplete = !!i1051[12]
  i1050.isPaused = !!i1051[13]
  request.r(i1051[14], i1051[15], 0, i1050, 'currentLevel')
  i1050.startLevelOnPlay = !!i1051[16]
  i1050.currentLevelNo = i1051[17]
  return i1050
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1052 = root || request.c( 'AudioController' )
  var i1053 = data
  request.r(i1053[0], i1053[1], 0, i1052, 'MainMixer')
  request.r(i1053[2], i1053[3], 0, i1052, 'UiClick')
  request.r(i1053[4], i1053[5], 0, i1052, 'UiClickSource')
  var i1055 = i1053[6]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 2) {
  request.r(i1055[i + 0], i1055[i + 1], 2, i1054, '')
  }
  i1052.SfxSources = i1054
  var i1057 = i1053[7]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 2) {
  request.r(i1057[i + 0], i1057[i + 1], 2, i1056, '')
  }
  i1052.AllClips = i1056
  return i1052
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1060 = root || request.c( 'UnityEngine.UI.Image' )
  var i1061 = data
  request.r(i1061[0], i1061[1], 0, i1060, 'm_Sprite')
  i1060.m_Type = i1061[2]
  i1060.m_PreserveAspect = !!i1061[3]
  i1060.m_FillCenter = !!i1061[4]
  i1060.m_FillMethod = i1061[5]
  i1060.m_FillAmount = i1061[6]
  i1060.m_FillClockwise = !!i1061[7]
  i1060.m_FillOrigin = i1061[8]
  i1060.m_UseSpriteMesh = !!i1061[9]
  i1060.m_PixelsPerUnitMultiplier = i1061[10]
  request.r(i1061[11], i1061[12], 0, i1060, 'm_Material')
  i1060.m_Maskable = !!i1061[13]
  i1060.m_Color = new pc.Color(i1061[14], i1061[15], i1061[16], i1061[17])
  i1060.m_RaycastTarget = !!i1061[18]
  i1060.m_RaycastPadding = new pc.Vec4( i1061[19], i1061[20], i1061[21], i1061[22] )
  return i1060
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1062 = root || request.c( 'UnityEngine.UI.Button' )
  var i1063 = data
  i1062.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1063[0], i1062.m_OnClick)
  i1062.m_Navigation = request.d('UnityEngine.UI.Navigation', i1063[1], i1062.m_Navigation)
  i1062.m_Transition = i1063[2]
  i1062.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1063[3], i1062.m_Colors)
  i1062.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1063[4], i1062.m_SpriteState)
  i1062.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1063[5], i1062.m_AnimationTriggers)
  i1062.m_Interactable = !!i1063[6]
  request.r(i1063[7], i1063[8], 0, i1062, 'm_TargetGraphic')
  return i1062
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1064 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1065 = data
  i1064.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1065[0], i1064.m_PersistentCalls)
  return i1064
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1067 = data
  i1066.m_Mode = i1067[0]
  i1066.m_WrapAround = !!i1067[1]
  request.r(i1067[2], i1067[3], 0, i1066, 'm_SelectOnUp')
  request.r(i1067[4], i1067[5], 0, i1066, 'm_SelectOnDown')
  request.r(i1067[6], i1067[7], 0, i1066, 'm_SelectOnLeft')
  request.r(i1067[8], i1067[9], 0, i1066, 'm_SelectOnRight')
  return i1066
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1068 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1069 = data
  i1068.m_NormalColor = new pc.Color(i1069[0], i1069[1], i1069[2], i1069[3])
  i1068.m_HighlightedColor = new pc.Color(i1069[4], i1069[5], i1069[6], i1069[7])
  i1068.m_PressedColor = new pc.Color(i1069[8], i1069[9], i1069[10], i1069[11])
  i1068.m_SelectedColor = new pc.Color(i1069[12], i1069[13], i1069[14], i1069[15])
  i1068.m_DisabledColor = new pc.Color(i1069[16], i1069[17], i1069[18], i1069[19])
  i1068.m_ColorMultiplier = i1069[20]
  i1068.m_FadeDuration = i1069[21]
  return i1068
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1070 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1071 = data
  request.r(i1071[0], i1071[1], 0, i1070, 'm_HighlightedSprite')
  request.r(i1071[2], i1071[3], 0, i1070, 'm_PressedSprite')
  request.r(i1071[4], i1071[5], 0, i1070, 'm_SelectedSprite')
  request.r(i1071[6], i1071[7], 0, i1070, 'm_DisabledSprite')
  return i1070
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1072 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1073 = data
  i1072.m_NormalTrigger = i1073[0]
  i1072.m_HighlightedTrigger = i1073[1]
  i1072.m_PressedTrigger = i1073[2]
  i1072.m_SelectedTrigger = i1073[3]
  i1072.m_DisabledTrigger = i1073[4]
  return i1072
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i1074 = root || request.c( 'PlayableHudRuntime' )
  var i1075 = data
  return i1074
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1076 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'm_FirstSelected')
  i1076.m_sendNavigationEvents = !!i1077[2]
  i1076.m_DragThreshold = i1077[3]
  return i1076
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1079 = data
  i1078.m_HorizontalAxis = i1079[0]
  i1078.m_VerticalAxis = i1079[1]
  i1078.m_SubmitButton = i1079[2]
  i1078.m_CancelButton = i1079[3]
  i1078.m_InputActionsPerSecond = i1079[4]
  i1078.m_RepeatDelay = i1079[5]
  i1078.m_ForceModuleActive = !!i1079[6]
  i1078.m_SendPointerHoverToParent = !!i1079[7]
  return i1078
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i1080 = root || request.c( 'PlayableRouter' )
  var i1081 = data
  var i1083 = i1081[0]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 2) {
  request.r(i1083[i + 0], i1083[i + 1], 2, i1082, '')
  }
  i1080.menuObjects = i1082
  var i1085 = i1081[1]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 2) {
  request.r(i1085[i + 0], i1085[i + 1], 2, i1084, '')
  }
  i1080.gameplayObjects = i1084
  var i1087 = i1081[2]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('PlayableRouter+SubLevelSlot', i1087[i + 0]) );
  }
  i1080.subLevels = i1086
  i1080.fadeDuration = i1081[3]
  i1080.lockedMessage = i1081[4]
  i1080.lockedTapsToCTA = i1081[5]
  return i1080
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i1090 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'button')
  request.r(i1091[2], i1091[3], 0, i1090, 'level')
  return i1090
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i1092 = root || request.c( 'ToastManager' )
  var i1093 = data
  request.r(i1093[0], i1093[1], 0, i1092, 'toastPanel')
  request.r(i1093[2], i1093[3], 0, i1092, 'toastPopup')
  request.r(i1093[4], i1093[5], 0, i1092, 'canvasGroup')
  request.r(i1093[6], i1093[7], 0, i1092, 'toastText')
  i1092.startY = i1093[8]
  i1092.visibleY = i1093[9]
  i1092.endY = i1093[10]
  i1092.animationTime = i1093[11]
  i1092.animationTimeUp = i1093[12]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1095 = data
  i1094.m_Alpha = i1095[0]
  i1094.m_Interactable = !!i1095[1]
  i1094.m_BlocksRaycasts = !!i1095[2]
  i1094.m_IgnoreParentGroups = !!i1095[3]
  i1094.enabled = !!i1095[4]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1097 = data
  i1096.ambientIntensity = i1097[0]
  i1096.reflectionIntensity = i1097[1]
  i1096.ambientMode = i1097[2]
  i1096.ambientLight = new pc.Color(i1097[3], i1097[4], i1097[5], i1097[6])
  i1096.ambientSkyColor = new pc.Color(i1097[7], i1097[8], i1097[9], i1097[10])
  i1096.ambientGroundColor = new pc.Color(i1097[11], i1097[12], i1097[13], i1097[14])
  i1096.ambientEquatorColor = new pc.Color(i1097[15], i1097[16], i1097[17], i1097[18])
  i1096.fogColor = new pc.Color(i1097[19], i1097[20], i1097[21], i1097[22])
  i1096.fogEndDistance = i1097[23]
  i1096.fogStartDistance = i1097[24]
  i1096.fogDensity = i1097[25]
  i1096.fog = !!i1097[26]
  request.r(i1097[27], i1097[28], 0, i1096, 'skybox')
  i1096.fogMode = i1097[29]
  var i1099 = i1097[30]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1099[i + 0]) );
  }
  i1096.lightmaps = i1098
  i1096.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1097[31], i1096.lightProbes)
  i1096.lightmapsMode = i1097[32]
  i1096.mixedBakeMode = i1097[33]
  i1096.environmentLightingMode = i1097[34]
  i1096.ambientProbe = new pc.SphericalHarmonicsL2(i1097[35])
  request.r(i1097[36], i1097[37], 0, i1096, 'customReflection')
  request.r(i1097[38], i1097[39], 0, i1096, 'defaultReflection')
  i1096.defaultReflectionMode = i1097[40]
  i1096.defaultReflectionResolution = i1097[41]
  i1096.sunLightObjectId = i1097[42]
  i1096.pixelLightCount = i1097[43]
  i1096.defaultReflectionHDR = !!i1097[44]
  i1096.hasLightDataAsset = !!i1097[45]
  i1096.hasManualGenerate = !!i1097[46]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1103 = data
  request.r(i1103[0], i1103[1], 0, i1102, 'lightmapColor')
  request.r(i1103[2], i1103[3], 0, i1102, 'lightmapDirection')
  request.r(i1103[4], i1103[5], 0, i1102, 'shadowMask')
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1104 = root || new UnityEngine.LightProbes()
  var i1105 = data
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1111 = data
  var i1113 = i1111[0]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1113[i + 0]));
  }
  i1110.ShaderCompilationErrors = i1112
  i1110.name = i1111[1]
  i1110.guid = i1111[2]
  var i1115 = i1111[3]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( i1115[i + 0] );
  }
  i1110.shaderDefinedKeywords = i1114
  var i1117 = i1111[4]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1117[i + 0]) );
  }
  i1110.passes = i1116
  var i1119 = i1111[5]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1119[i + 0]) );
  }
  i1110.usePasses = i1118
  var i1121 = i1111[6]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1121[i + 0]) );
  }
  i1110.defaultParameterValues = i1120
  request.r(i1111[7], i1111[8], 0, i1110, 'unityFallbackShader')
  i1110.readDepth = !!i1111[9]
  i1110.hasDepthOnlyPass = !!i1111[10]
  i1110.isCreatedByShaderGraph = !!i1111[11]
  i1110.disableBatching = !!i1111[12]
  i1110.compiled = !!i1111[13]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1125 = data
  i1124.shaderName = i1125[0]
  i1124.errorMessage = i1125[1]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1130 = root || new pc.UnityShaderPass()
  var i1131 = data
  i1130.id = i1131[0]
  i1130.subShaderIndex = i1131[1]
  i1130.name = i1131[2]
  i1130.passType = i1131[3]
  i1130.grabPassTextureName = i1131[4]
  i1130.usePass = !!i1131[5]
  i1130.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1131[6], i1130.zTest)
  i1130.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1131[7], i1130.zWrite)
  i1130.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1131[8], i1130.culling)
  i1130.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1131[9], i1130.blending)
  i1130.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1131[10], i1130.alphaBlending)
  i1130.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1131[11], i1130.colorWriteMask)
  i1130.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1131[12], i1130.offsetUnits)
  i1130.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1131[13], i1130.offsetFactor)
  i1130.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1131[14], i1130.stencilRef)
  i1130.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1131[15], i1130.stencilReadMask)
  i1130.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1131[16], i1130.stencilWriteMask)
  i1130.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1131[17], i1130.stencilOp)
  i1130.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1131[18], i1130.stencilOpFront)
  i1130.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1131[19], i1130.stencilOpBack)
  var i1133 = i1131[20]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1133[i + 0]) );
  }
  i1130.tags = i1132
  var i1135 = i1131[21]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( i1135[i + 0] );
  }
  i1130.passDefinedKeywords = i1134
  var i1137 = i1131[22]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1137[i + 0]) );
  }
  i1130.passDefinedKeywordGroups = i1136
  var i1139 = i1131[23]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1139[i + 0]) );
  }
  i1130.variants = i1138
  var i1141 = i1131[24]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1141[i + 0]) );
  }
  i1130.excludedVariants = i1140
  i1130.hasDepthReader = !!i1131[25]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1143 = data
  i1142.val = i1143[0]
  i1142.name = i1143[1]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1145 = data
  i1144.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1145[0], i1144.src)
  i1144.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1145[1], i1144.dst)
  i1144.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1145[2], i1144.op)
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1147 = data
  i1146.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[0], i1146.pass)
  i1146.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[1], i1146.fail)
  i1146.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[2], i1146.zFail)
  i1146.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[3], i1146.comp)
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1151 = data
  i1150.name = i1151[0]
  i1150.value = i1151[1]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1155 = data
  var i1157 = i1155[0]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( i1157[i + 0] );
  }
  i1154.keywords = i1156
  i1154.hasDiscard = !!i1155[1]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1161 = data
  i1160.passId = i1161[0]
  i1160.subShaderIndex = i1161[1]
  var i1163 = i1161[2]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( i1163[i + 0] );
  }
  i1160.keywords = i1162
  i1160.vertexProgram = i1161[3]
  i1160.fragmentProgram = i1161[4]
  i1160.exportedForWebGl2 = !!i1161[5]
  i1160.readDepth = !!i1161[6]
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1167 = data
  request.r(i1167[0], i1167[1], 0, i1166, 'shader')
  i1166.pass = i1167[2]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1171 = data
  i1170.name = i1171[0]
  i1170.type = i1171[1]
  i1170.value = new pc.Vec4( i1171[2], i1171[3], i1171[4], i1171[5] )
  i1170.textureValue = i1171[6]
  i1170.shaderPropertyFlag = i1171[7]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1173 = data
  i1172.name = i1173[0]
  request.r(i1173[1], i1173[2], 0, i1172, 'texture')
  i1172.aabb = i1173[3]
  i1172.vertices = i1173[4]
  i1172.triangles = i1173[5]
  i1172.textureRect = UnityEngine.Rect.MinMaxRect(i1173[6], i1173[7], i1173[8], i1173[9])
  i1172.packedRect = UnityEngine.Rect.MinMaxRect(i1173[10], i1173[11], i1173[12], i1173[13])
  i1172.border = new pc.Vec4( i1173[14], i1173[15], i1173[16], i1173[17] )
  i1172.transparency = i1173[18]
  i1172.bounds = i1173[19]
  i1172.pixelsPerUnit = i1173[20]
  i1172.textureWidth = i1173[21]
  i1172.textureHeight = i1173[22]
  i1172.nativeSize = new pc.Vec2( i1173[23], i1173[24] )
  i1172.pivot = new pc.Vec2( i1173[25], i1173[26] )
  i1172.textureRectOffset = new pc.Vec2( i1173[27], i1173[28] )
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1175 = data
  i1174.name = i1175[0]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1177 = data
  i1176.name = i1177[0]
  i1176.wrapMode = i1177[1]
  i1176.isLooping = !!i1177[2]
  i1176.length = i1177[3]
  var i1179 = i1177[4]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1179[i + 0]) );
  }
  i1176.curves = i1178
  var i1181 = i1177[5]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1181[i + 0]) );
  }
  i1176.events = i1180
  i1176.halfPrecision = !!i1177[6]
  i1176._frameRate = i1177[7]
  i1176.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1177[8], i1176.localBounds)
  i1176.hasMuscleCurves = !!i1177[9]
  var i1183 = i1177[10]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( i1183[i + 0] );
  }
  i1176.clipMuscleConstant = i1182
  i1176.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1177[11], i1176.clipBindingConstant)
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1187 = data
  i1186.path = i1187[0]
  i1186.hash = i1187[1]
  i1186.componentType = i1187[2]
  i1186.property = i1187[3]
  i1186.keys = i1187[4]
  var i1189 = i1187[5]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1189[i + 0]) );
  }
  i1186.objectReferenceKeys = i1188
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1193 = data
  i1192.time = i1193[0]
  request.r(i1193[1], i1193[2], 0, i1192, 'value')
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1197 = data
  i1196.functionName = i1197[0]
  i1196.floatParameter = i1197[1]
  i1196.intParameter = i1197[2]
  i1196.stringParameter = i1197[3]
  request.r(i1197[4], i1197[5], 0, i1196, 'objectReferenceParameter')
  i1196.time = i1197[6]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1199 = data
  i1198.center = new pc.Vec3( i1199[0], i1199[1], i1199[2] )
  i1198.extends = new pc.Vec3( i1199[3], i1199[4], i1199[5] )
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1203 = data
  var i1205 = i1203[0]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( i1205[i + 0] );
  }
  i1202.genericBindings = i1204
  var i1207 = i1203[1]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( i1207[i + 0] );
  }
  i1202.pptrCurveMapping = i1206
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1209 = data
  i1208.name = i1209[0]
  i1208.ascent = i1209[1]
  i1208.originalLineHeight = i1209[2]
  i1208.fontSize = i1209[3]
  var i1211 = i1209[4]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1211[i + 0]) );
  }
  i1208.characterInfo = i1210
  request.r(i1209[5], i1209[6], 0, i1208, 'texture')
  i1208.originalFontSize = i1209[7]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1215 = data
  i1214.index = i1215[0]
  i1214.advance = i1215[1]
  i1214.bearing = i1215[2]
  i1214.glyphWidth = i1215[3]
  i1214.glyphHeight = i1215[4]
  i1214.minX = i1215[5]
  i1214.maxX = i1215[6]
  i1214.minY = i1215[7]
  i1214.maxY = i1215[8]
  i1214.uvBottomLeftX = i1215[9]
  i1214.uvBottomLeftY = i1215[10]
  i1214.uvBottomRightX = i1215[11]
  i1214.uvBottomRightY = i1215[12]
  i1214.uvTopLeftX = i1215[13]
  i1214.uvTopLeftY = i1215[14]
  i1214.uvTopRightX = i1215[15]
  i1214.uvTopRightY = i1215[16]
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1217 = data
  i1216.name = i1217[0]
  var i1219 = i1217[1]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1219[i + 0]) );
  }
  i1216.layers = i1218
  var i1221 = i1217[2]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1221[i + 0]) );
  }
  i1216.parameters = i1220
  i1216.animationClips = i1217[3]
  i1216.avatarUnsupported = i1217[4]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1225 = data
  i1224.name = i1225[0]
  i1224.defaultWeight = i1225[1]
  i1224.blendingMode = i1225[2]
  i1224.avatarMask = i1225[3]
  i1224.syncedLayerIndex = i1225[4]
  i1224.syncedLayerAffectsTiming = !!i1225[5]
  i1224.syncedLayers = i1225[6]
  i1224.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1225[7], i1224.stateMachine)
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1227 = data
  i1226.id = i1227[0]
  i1226.name = i1227[1]
  i1226.path = i1227[2]
  var i1229 = i1227[3]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1229[i + 0]) );
  }
  i1226.states = i1228
  var i1231 = i1227[4]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1231[i + 0]) );
  }
  i1226.machines = i1230
  var i1233 = i1227[5]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1233[i + 0]) );
  }
  i1226.entryStateTransitions = i1232
  var i1235 = i1227[6]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1235[i + 0]) );
  }
  i1226.exitStateTransitions = i1234
  var i1237 = i1227[7]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1237[i + 0]) );
  }
  i1226.anyStateTransitions = i1236
  i1226.defaultStateId = i1227[8]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1241 = data
  i1240.id = i1241[0]
  i1240.name = i1241[1]
  i1240.cycleOffset = i1241[2]
  i1240.cycleOffsetParameter = i1241[3]
  i1240.cycleOffsetParameterActive = !!i1241[4]
  i1240.mirror = !!i1241[5]
  i1240.mirrorParameter = i1241[6]
  i1240.mirrorParameterActive = !!i1241[7]
  i1240.motionId = i1241[8]
  i1240.nameHash = i1241[9]
  i1240.fullPathHash = i1241[10]
  i1240.speed = i1241[11]
  i1240.speedParameter = i1241[12]
  i1240.speedParameterActive = !!i1241[13]
  i1240.tag = i1241[14]
  i1240.tagHash = i1241[15]
  i1240.writeDefaultValues = !!i1241[16]
  var i1243 = i1241[17]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 2) {
  request.r(i1243[i + 0], i1243[i + 1], 2, i1242, '')
  }
  i1240.behaviours = i1242
  var i1245 = i1241[18]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1245[i + 0]) );
  }
  i1240.transitions = i1244
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1251 = data
  i1250.fullPath = i1251[0]
  i1250.canTransitionToSelf = !!i1251[1]
  i1250.duration = i1251[2]
  i1250.exitTime = i1251[3]
  i1250.hasExitTime = !!i1251[4]
  i1250.hasFixedDuration = !!i1251[5]
  i1250.interruptionSource = i1251[6]
  i1250.offset = i1251[7]
  i1250.orderedInterruption = !!i1251[8]
  i1250.destinationStateId = i1251[9]
  i1250.isExit = !!i1251[10]
  i1250.mute = !!i1251[11]
  i1250.solo = !!i1251[12]
  var i1253 = i1251[13]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1253[i + 0]) );
  }
  i1250.conditions = i1252
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1259 = data
  i1258.destinationStateId = i1259[0]
  i1258.isExit = !!i1259[1]
  i1258.mute = !!i1259[2]
  i1258.solo = !!i1259[3]
  var i1261 = i1259[4]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1261[i + 0]) );
  }
  i1258.conditions = i1260
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1265 = data
  i1264.mode = i1265[0]
  i1264.parameter = i1265[1]
  i1264.threshold = i1265[2]
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1269 = data
  i1268.defaultBool = !!i1269[0]
  i1268.defaultFloat = i1269[1]
  i1268.defaultInt = i1269[2]
  i1268.name = i1269[3]
  i1268.nameHash = i1269[4]
  i1268.type = i1269[5]
  return i1268
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1270 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1271 = data
  i1270.useSafeMode = !!i1271[0]
  i1270.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1271[1], i1270.safeModeOptions)
  i1270.timeScale = i1271[2]
  i1270.unscaledTimeScale = i1271[3]
  i1270.useSmoothDeltaTime = !!i1271[4]
  i1270.maxSmoothUnscaledTime = i1271[5]
  i1270.rewindCallbackMode = i1271[6]
  i1270.showUnityEditorReport = !!i1271[7]
  i1270.logBehaviour = i1271[8]
  i1270.drawGizmos = !!i1271[9]
  i1270.defaultRecyclable = !!i1271[10]
  i1270.defaultAutoPlay = i1271[11]
  i1270.defaultUpdateType = i1271[12]
  i1270.defaultTimeScaleIndependent = !!i1271[13]
  i1270.defaultEaseType = i1271[14]
  i1270.defaultEaseOvershootOrAmplitude = i1271[15]
  i1270.defaultEasePeriod = i1271[16]
  i1270.defaultAutoKill = !!i1271[17]
  i1270.defaultLoopType = i1271[18]
  i1270.debugMode = !!i1271[19]
  i1270.debugStoreTargetId = !!i1271[20]
  i1270.showPreviewPanel = !!i1271[21]
  i1270.storeSettingsLocation = i1271[22]
  i1270.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1271[23], i1270.modules)
  i1270.createASMDEF = !!i1271[24]
  i1270.showPlayingTweens = !!i1271[25]
  i1270.showPausedTweens = !!i1271[26]
  return i1270
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1272 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1273 = data
  i1272.logBehaviour = i1273[0]
  i1272.nestedTweenFailureBehaviour = i1273[1]
  return i1272
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1274 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1275 = data
  i1274.showPanel = !!i1275[0]
  i1274.audioEnabled = !!i1275[1]
  i1274.physicsEnabled = !!i1275[2]
  i1274.physics2DEnabled = !!i1275[3]
  i1274.spriteEnabled = !!i1275[4]
  i1274.uiEnabled = !!i1275[5]
  i1274.textMeshProEnabled = !!i1275[6]
  i1274.tk2DEnabled = !!i1275[7]
  i1274.deAudioEnabled = !!i1275[8]
  i1274.deUnityExtendedEnabled = !!i1275[9]
  i1274.epoOutlineEnabled = !!i1275[10]
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1277 = data
  var i1279 = i1277[0]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1279[i + 0]) );
  }
  i1276.files = i1278
  i1276.componentToPrefabIds = i1277[1]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1283 = data
  i1282.path = i1283[0]
  request.r(i1283[1], i1283[2], 0, i1282, 'unityObject')
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1285 = data
  var i1287 = i1285[0]
  var i1286 = []
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1287[i + 0]) );
  }
  i1284.scriptsExecutionOrder = i1286
  var i1289 = i1285[1]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1289[i + 0]) );
  }
  i1284.sortingLayers = i1288
  var i1291 = i1285[2]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1291[i + 0]) );
  }
  i1284.cullingLayers = i1290
  i1284.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1285[3], i1284.timeSettings)
  i1284.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1285[4], i1284.physicsSettings)
  i1284.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1285[5], i1284.physics2DSettings)
  i1284.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1285[6], i1284.qualitySettings)
  i1284.enableRealtimeShadows = !!i1285[7]
  i1284.enableAutoInstancing = !!i1285[8]
  i1284.enableStaticBatching = !!i1285[9]
  i1284.enableDynamicBatching = !!i1285[10]
  i1284.usePreservativeDynamicBatching = !!i1285[11]
  i1284.lightmapEncodingQuality = i1285[12]
  i1284.desiredColorSpace = i1285[13]
  var i1293 = i1285[14]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.push( i1293[i + 0] );
  }
  i1284.allTags = i1292
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1297 = data
  i1296.name = i1297[0]
  i1296.value = i1297[1]
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1301 = data
  i1300.id = i1301[0]
  i1300.name = i1301[1]
  i1300.value = i1301[2]
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1305 = data
  i1304.id = i1305[0]
  i1304.name = i1305[1]
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1307 = data
  i1306.fixedDeltaTime = i1307[0]
  i1306.maximumDeltaTime = i1307[1]
  i1306.timeScale = i1307[2]
  i1306.maximumParticleTimestep = i1307[3]
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1309 = data
  i1308.gravity = new pc.Vec3( i1309[0], i1309[1], i1309[2] )
  i1308.defaultSolverIterations = i1309[3]
  i1308.bounceThreshold = i1309[4]
  i1308.autoSyncTransforms = !!i1309[5]
  i1308.autoSimulation = !!i1309[6]
  var i1311 = i1309[7]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1311[i + 0]) );
  }
  i1308.collisionMatrix = i1310
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1315 = data
  i1314.enabled = !!i1315[0]
  i1314.layerId = i1315[1]
  i1314.otherLayerId = i1315[2]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1317 = data
  request.r(i1317[0], i1317[1], 0, i1316, 'material')
  i1316.gravity = new pc.Vec2( i1317[2], i1317[3] )
  i1316.positionIterations = i1317[4]
  i1316.velocityIterations = i1317[5]
  i1316.velocityThreshold = i1317[6]
  i1316.maxLinearCorrection = i1317[7]
  i1316.maxAngularCorrection = i1317[8]
  i1316.maxTranslationSpeed = i1317[9]
  i1316.maxRotationSpeed = i1317[10]
  i1316.baumgarteScale = i1317[11]
  i1316.baumgarteTOIScale = i1317[12]
  i1316.timeToSleep = i1317[13]
  i1316.linearSleepTolerance = i1317[14]
  i1316.angularSleepTolerance = i1317[15]
  i1316.defaultContactOffset = i1317[16]
  i1316.autoSimulation = !!i1317[17]
  i1316.queriesHitTriggers = !!i1317[18]
  i1316.queriesStartInColliders = !!i1317[19]
  i1316.callbacksOnDisable = !!i1317[20]
  i1316.reuseCollisionCallbacks = !!i1317[21]
  i1316.autoSyncTransforms = !!i1317[22]
  var i1319 = i1317[23]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1319[i + 0]) );
  }
  i1316.collisionMatrix = i1318
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1323 = data
  i1322.enabled = !!i1323[0]
  i1322.layerId = i1323[1]
  i1322.otherLayerId = i1323[2]
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1325 = data
  var i1327 = i1325[0]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1327[i + 0]) );
  }
  i1324.qualityLevels = i1326
  var i1329 = i1325[1]
  var i1328 = []
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.push( i1329[i + 0] );
  }
  i1324.names = i1328
  i1324.shadows = i1325[2]
  i1324.anisotropicFiltering = i1325[3]
  i1324.antiAliasing = i1325[4]
  i1324.lodBias = i1325[5]
  i1324.shadowCascades = i1325[6]
  i1324.shadowDistance = i1325[7]
  i1324.shadowmaskMode = i1325[8]
  i1324.shadowProjection = i1325[9]
  i1324.shadowResolution = i1325[10]
  i1324.softParticles = !!i1325[11]
  i1324.softVegetation = !!i1325[12]
  i1324.activeColorSpace = i1325[13]
  i1324.desiredColorSpace = i1325[14]
  i1324.masterTextureLimit = i1325[15]
  i1324.maxQueuedFrames = i1325[16]
  i1324.particleRaycastBudget = i1325[17]
  i1324.pixelLightCount = i1325[18]
  i1324.realtimeReflectionProbes = !!i1325[19]
  i1324.shadowCascade2Split = i1325[20]
  i1324.shadowCascade4Split = new pc.Vec3( i1325[21], i1325[22], i1325[23] )
  i1324.streamingMipmapsActive = !!i1325[24]
  i1324.vSyncCount = i1325[25]
  i1324.asyncUploadBufferSize = i1325[26]
  i1324.asyncUploadTimeSlice = i1325[27]
  i1324.billboardsFaceCameraPosition = !!i1325[28]
  i1324.shadowNearPlaneOffset = i1325[29]
  i1324.streamingMipmapsMemoryBudget = i1325[30]
  i1324.maximumLODLevel = i1325[31]
  i1324.streamingMipmapsAddAllCameras = !!i1325[32]
  i1324.streamingMipmapsMaxLevelReduction = i1325[33]
  i1324.streamingMipmapsRenderersPerFrame = i1325[34]
  i1324.resolutionScalingFixedDPIFactor = i1325[35]
  i1324.streamingMipmapsMaxFileIORequests = i1325[36]
  i1324.currentQualityLevel = i1325[37]
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i1333 = data
  var i1335 = i1333[0]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i1335[i + 0]) );
  }
  i1332.groups = i1334
  var i1337 = i1333[1]
  var i1336 = []
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i1337[i + 0]) );
  }
  i1332.snapshots = i1336
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i1341 = data
  i1340.id = i1341[0]
  i1340.childGroupIds = i1341[1]
  i1340.name = i1341[2]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i1345 = data
  i1344.id = i1345[0]
  var i1347 = i1345[1]
  var i1346 = []
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i1347[i + 0]) );
  }
  i1344.parameters = i1346
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i1351 = data
  i1350.name = i1351[0]
  i1350.value = i1351[1]
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1355 = data
  i1354.weight = i1355[0]
  i1354.vertices = i1355[1]
  i1354.normals = i1355[2]
  i1354.tangents = i1355[3]
  return i1354
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[87],"88":[38],"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[90],"97":[46],"98":[46],"99":[46],"100":[46],"101":[46],"102":[46],"103":[46],"104":[46],"105":[46],"106":[46],"107":[46],"108":[46],"109":[46],"110":[38],"111":[60],"112":[113],"114":[113],"37":[36],"115":[34],"57":[15],"116":[11],"117":[15],"118":[119],"120":[119],"121":[10],"21":[11],"122":[15],"19":[15],"123":[36],"124":[36],"41":[37],"67":[42,36],"125":[36],"40":[37],"126":[36],"127":[36],"128":[36],"129":[36],"130":[36],"131":[36],"132":[36],"133":[36],"134":[36],"135":[42,36],"136":[36],"137":[36],"138":[36],"139":[36],"28":[42,36],"140":[36],"141":[73],"142":[73],"74":[73],"143":[73],"144":[38],"145":[38]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","MenuLevel","UnityEngine.GameObject","DG.Tweening.DOTweenAnimation","UnityEngine.BoxCollider2D","UnityEngine.AudioClip","IntroLevelAnim","Level_PoseController","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.U2D.Animation.SpriteSkin","BD_AnimationHelper","SpriteButton","PlayableRouter","UnityEngine.TrailRenderer","Level1_Cloth_Playable","BasicDrag","BD_CameraFollow","Level1_SurfController","UnityEngine.UI.Text","RotaryTimerKnob","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.LineRenderer","TextureOffsetScroller","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.SpriteMask","BD_Clamp","UnityEngine.Rigidbody2D","PlaceItem","ActionOnTap","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","SewingCol","OutlinePulse","BD_Action","BD_Fold","BD_Progress","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","StaticFixedPipe","BD_SpriteChange","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.UI.Image","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "12.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "23908";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1744";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4396";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "HMBL.";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.hmbl.perfect.makeover.fashion.asmr";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "dcb1f02d-201e-413f-b665-2dcb73d4b86e";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

