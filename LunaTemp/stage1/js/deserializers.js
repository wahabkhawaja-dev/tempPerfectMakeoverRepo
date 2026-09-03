var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.JointSpring' )
  var i689 = data
  i688.spring = i689[0]
  i688.damper = i689[1]
  i688.targetPosition = i689[2]
  return i688
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.JointMotor' )
  var i691 = data
  i690.m_TargetVelocity = i691[0]
  i690.m_Force = i691[1]
  i690.m_FreeSpin = i691[2]
  return i690
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.JointLimits' )
  var i693 = data
  i692.m_Min = i693[0]
  i692.m_Max = i693[1]
  i692.m_Bounciness = i693[2]
  i692.m_BounceMinVelocity = i693[3]
  i692.m_ContactDistance = i693[4]
  i692.minBounce = i693[5]
  i692.maxBounce = i693[6]
  return i692
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.JointDrive' )
  var i695 = data
  i694.m_PositionSpring = i695[0]
  i694.m_PositionDamper = i695[1]
  i694.m_MaximumForce = i695[2]
  i694.m_UseAcceleration = i695[3]
  return i694
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i697 = data
  i696.m_Spring = i697[0]
  i696.m_Damper = i697[1]
  return i696
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i699 = data
  i698.m_Limit = i699[0]
  i698.m_Bounciness = i699[1]
  i698.m_ContactDistance = i699[2]
  return i698
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i701 = data
  i700.m_ExtremumSlip = i701[0]
  i700.m_ExtremumValue = i701[1]
  i700.m_AsymptoteSlip = i701[2]
  i700.m_AsymptoteValue = i701[3]
  i700.m_Stiffness = i701[4]
  return i700
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i703 = data
  i702.m_LowerAngle = i703[0]
  i702.m_UpperAngle = i703[1]
  return i702
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i705 = data
  i704.m_MotorSpeed = i705[0]
  i704.m_MaximumMotorTorque = i705[1]
  return i704
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i707 = data
  i706.m_DampingRatio = i707[0]
  i706.m_Frequency = i707[1]
  i706.m_Angle = i707[2]
  return i706
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i709 = data
  i708.m_LowerTranslation = i709[0]
  i708.m_UpperTranslation = i709[1]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i710 = root || new pc.UnityMaterial()
  var i711 = data
  i710.name = i711[0]
  request.r(i711[1], i711[2], 0, i710, 'shader')
  i710.renderQueue = i711[3]
  i710.enableInstancing = !!i711[4]
  var i713 = i711[5]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i713[i + 0]) );
  }
  i710.floatParameters = i712
  var i715 = i711[6]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i715[i + 0]) );
  }
  i710.colorParameters = i714
  var i717 = i711[7]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i717[i + 0]) );
  }
  i710.vectorParameters = i716
  var i719 = i711[8]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i719[i + 0]) );
  }
  i710.textureParameters = i718
  var i721 = i711[9]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i721[i + 0]) );
  }
  i710.materialFlags = i720
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i725 = data
  i724.name = i725[0]
  i724.value = i725[1]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i729 = data
  i728.name = i729[0]
  i728.value = new pc.Color(i729[1], i729[2], i729[3], i729[4])
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i733 = data
  i732.name = i733[0]
  i732.value = new pc.Vec4( i733[1], i733[2], i733[3], i733[4] )
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i737 = data
  i736.name = i737[0]
  request.r(i737[1], i737[2], 0, i736, 'value')
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i741 = data
  i740.name = i741[0]
  i740.enabled = !!i741[1]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i743 = data
  i742.name = i743[0]
  i742.width = i743[1]
  i742.height = i743[2]
  i742.mipmapCount = i743[3]
  i742.anisoLevel = i743[4]
  i742.filterMode = i743[5]
  i742.hdr = !!i743[6]
  i742.format = i743[7]
  i742.wrapMode = i743[8]
  i742.alphaIsTransparency = !!i743[9]
  i742.alphaSource = i743[10]
  i742.graphicsFormat = i743[11]
  i742.sRGBTexture = !!i743[12]
  i742.desiredColorSpace = i743[13]
  i742.wrapU = i743[14]
  i742.wrapV = i743[15]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i745 = data
  i744.name = i745[0]
  i744.halfPrecision = !!i745[1]
  i744.useSimplification = !!i745[2]
  i744.useUInt32IndexFormat = !!i745[3]
  i744.vertexCount = i745[4]
  i744.aabb = i745[5]
  var i747 = i745[6]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( !!i747[i + 0] );
  }
  i744.streams = i746
  i744.vertices = i745[7]
  var i749 = i745[8]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i749[i + 0]) );
  }
  i744.subMeshes = i748
  var i751 = i745[9]
  var i750 = []
  for(var i = 0; i < i751.length; i += 16) {
    i750.push( new pc.Mat4().setData(i751[i + 0], i751[i + 1], i751[i + 2], i751[i + 3],  i751[i + 4], i751[i + 5], i751[i + 6], i751[i + 7],  i751[i + 8], i751[i + 9], i751[i + 10], i751[i + 11],  i751[i + 12], i751[i + 13], i751[i + 14], i751[i + 15]) );
  }
  i744.bindposes = i750
  var i753 = i745[10]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i753[i + 0]) );
  }
  i744.blendShapes = i752
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i759 = data
  i758.triangles = i759[0]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i765 = data
  i764.name = i765[0]
  var i767 = i765[1]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i767[i + 0]) );
  }
  i764.frames = i766
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i769 = data
  i768.position = new pc.Vec3( i769[0], i769[1], i769[2] )
  i768.scale = new pc.Vec3( i769[3], i769[4], i769[5] )
  i768.rotation = new pc.Quat(i769[6], i769[7], i769[8], i769[9])
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i771 = data
  i770.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i771[0], i770.main)
  i770.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i771[1], i770.colorBySpeed)
  i770.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i771[2], i770.colorOverLifetime)
  i770.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i771[3], i770.emission)
  i770.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i771[4], i770.rotationBySpeed)
  i770.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i771[5], i770.rotationOverLifetime)
  i770.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i771[6], i770.shape)
  i770.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i771[7], i770.sizeBySpeed)
  i770.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i771[8], i770.sizeOverLifetime)
  i770.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i771[9], i770.textureSheetAnimation)
  i770.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i771[10], i770.velocityOverLifetime)
  i770.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i771[11], i770.noise)
  i770.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i771[12], i770.inheritVelocity)
  i770.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i771[13], i770.forceOverLifetime)
  i770.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i771[14], i770.limitVelocityOverLifetime)
  i770.useAutoRandomSeed = !!i771[15]
  i770.randomSeed = i771[16]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemMain()
  var i773 = data
  i772.duration = i773[0]
  i772.loop = !!i773[1]
  i772.prewarm = !!i773[2]
  i772.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[3], i772.startDelay)
  i772.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[4], i772.startLifetime)
  i772.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[5], i772.startSpeed)
  i772.startSize3D = !!i773[6]
  i772.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[7], i772.startSizeX)
  i772.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[8], i772.startSizeY)
  i772.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[9], i772.startSizeZ)
  i772.startRotation3D = !!i773[10]
  i772.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[11], i772.startRotationX)
  i772.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[12], i772.startRotationY)
  i772.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[13], i772.startRotationZ)
  i772.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i773[14], i772.startColor)
  i772.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[15], i772.gravityModifier)
  i772.simulationSpace = i773[16]
  request.r(i773[17], i773[18], 0, i772, 'customSimulationSpace')
  i772.simulationSpeed = i773[19]
  i772.useUnscaledTime = !!i773[20]
  i772.scalingMode = i773[21]
  i772.playOnAwake = !!i773[22]
  i772.maxParticles = i773[23]
  i772.emitterVelocityMode = i773[24]
  i772.stopAction = i773[25]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i774 = root || new pc.MinMaxCurve()
  var i775 = data
  i774.mode = i775[0]
  i774.curveMin = new pc.AnimationCurve( { keys_flow: i775[1] } )
  i774.curveMax = new pc.AnimationCurve( { keys_flow: i775[2] } )
  i774.curveMultiplier = i775[3]
  i774.constantMin = i775[4]
  i774.constantMax = i775[5]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i776 = root || new pc.MinMaxGradient()
  var i777 = data
  i776.mode = i777[0]
  i776.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i777[1], i776.gradientMin)
  i776.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i777[2], i776.gradientMax)
  i776.colorMin = new pc.Color(i777[3], i777[4], i777[5], i777[6])
  i776.colorMax = new pc.Color(i777[7], i777[8], i777[9], i777[10])
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i779 = data
  i778.mode = i779[0]
  var i781 = i779[1]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i781[i + 0]) );
  }
  i778.colorKeys = i780
  var i783 = i779[2]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i783[i + 0]) );
  }
  i778.alphaKeys = i782
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemColorBySpeed()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i785[1], i784.color)
  i784.range = new pc.Vec2( i785[2], i785[3] )
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i789 = data
  i788.color = new pc.Color(i789[0], i789[1], i789[2], i789[3])
  i788.time = i789[4]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i793 = data
  i792.alpha = i793[0]
  i792.time = i793[1]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemColorOverLifetime()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i795[1], i794.color)
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemEmitter()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.rateOverTime)
  i796.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.rateOverDistance)
  var i799 = i797[3]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i799[i + 0]) );
  }
  i796.bursts = i798
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemBurst()
  var i803 = data
  i802.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[0], i802.count)
  i802.cycleCount = i803[1]
  i802.minCount = i803[2]
  i802.maxCount = i803[3]
  i802.repeatInterval = i803[4]
  i802.time = i803[5]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemRotationBySpeed()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[1], i804.x)
  i804.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[2], i804.y)
  i804.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[3], i804.z)
  i804.separateAxes = !!i805[4]
  i804.range = new pc.Vec2( i805[5], i805[6] )
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemRotationOverLifetime()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[1], i806.x)
  i806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.y)
  i806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.z)
  i806.separateAxes = !!i807[4]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemShape()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.shapeType = i809[1]
  i808.randomDirectionAmount = i809[2]
  i808.sphericalDirectionAmount = i809[3]
  i808.randomPositionAmount = i809[4]
  i808.alignToDirection = !!i809[5]
  i808.radius = i809[6]
  i808.radiusMode = i809[7]
  i808.radiusSpread = i809[8]
  i808.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[9], i808.radiusSpeed)
  i808.radiusThickness = i809[10]
  i808.angle = i809[11]
  i808.length = i809[12]
  i808.boxThickness = new pc.Vec3( i809[13], i809[14], i809[15] )
  i808.meshShapeType = i809[16]
  request.r(i809[17], i809[18], 0, i808, 'mesh')
  request.r(i809[19], i809[20], 0, i808, 'meshRenderer')
  request.r(i809[21], i809[22], 0, i808, 'skinnedMeshRenderer')
  i808.useMeshMaterialIndex = !!i809[23]
  i808.meshMaterialIndex = i809[24]
  i808.useMeshColors = !!i809[25]
  i808.normalOffset = i809[26]
  i808.arc = i809[27]
  i808.arcMode = i809[28]
  i808.arcSpread = i809[29]
  i808.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[30], i808.arcSpeed)
  i808.donutRadius = i809[31]
  i808.position = new pc.Vec3( i809[32], i809[33], i809[34] )
  i808.rotation = new pc.Vec3( i809[35], i809[36], i809[37] )
  i808.scale = new pc.Vec3( i809[38], i809[39], i809[40] )
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemSizeBySpeed()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[1], i810.x)
  i810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.y)
  i810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.z)
  i810.separateAxes = !!i811[4]
  i810.range = new pc.Vec2( i811[5], i811[6] )
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemSizeOverLifetime()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[1], i812.x)
  i812.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.y)
  i812.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[3], i812.z)
  i812.separateAxes = !!i813[4]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.mode = i815[1]
  i814.animation = i815[2]
  i814.numTilesX = i815[3]
  i814.numTilesY = i815[4]
  i814.useRandomRow = !!i815[5]
  i814.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[6], i814.frameOverTime)
  i814.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[7], i814.startFrame)
  i814.cycleCount = i815[8]
  i814.rowIndex = i815[9]
  i814.flipU = i815[10]
  i814.flipV = i815[11]
  i814.spriteCount = i815[12]
  var i817 = i815[13]
  var i816 = []
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 2, i816, '')
  }
  i814.sprites = i816
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[1], i820.x)
  i820.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[2], i820.y)
  i820.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[3], i820.z)
  i820.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[4], i820.radial)
  i820.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[5], i820.speedModifier)
  i820.space = i821[6]
  i820.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[7], i820.orbitalX)
  i820.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[8], i820.orbitalY)
  i820.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[9], i820.orbitalZ)
  i820.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[10], i820.orbitalOffsetX)
  i820.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[11], i820.orbitalOffsetY)
  i820.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[12], i820.orbitalOffsetZ)
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemNoise()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.separateAxes = !!i823[1]
  i822.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[2], i822.strengthX)
  i822.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[3], i822.strengthY)
  i822.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[4], i822.strengthZ)
  i822.frequency = i823[5]
  i822.damping = !!i823[6]
  i822.octaveCount = i823[7]
  i822.octaveMultiplier = i823[8]
  i822.octaveScale = i823[9]
  i822.quality = i823[10]
  i822.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[11], i822.scrollSpeed)
  i822.scrollSpeedMultiplier = i823[12]
  i822.remapEnabled = !!i823[13]
  i822.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[14], i822.remapX)
  i822.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[15], i822.remapY)
  i822.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[16], i822.remapZ)
  i822.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[17], i822.positionAmount)
  i822.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[18], i822.rotationAmount)
  i822.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[19], i822.sizeAmount)
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemInheritVelocity()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.mode = i825[1]
  i824.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[2], i824.curve)
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemForceOverLifetime()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[1], i826.x)
  i826.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[2], i826.y)
  i826.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[3], i826.z)
  i826.space = i827[4]
  i826.randomized = !!i827[5]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i828 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i829 = data
  i828.enabled = !!i829[0]
  i828.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[1], i828.limit)
  i828.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[2], i828.limitX)
  i828.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[3], i828.limitY)
  i828.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[4], i828.limitZ)
  i828.dampen = i829[5]
  i828.separateAxes = !!i829[6]
  i828.space = i829[7]
  i828.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i829[8], i828.drag)
  i828.multiplyDragByParticleSize = !!i829[9]
  i828.multiplyDragByParticleVelocity = !!i829[10]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'mesh')
  i830.meshCount = i831[2]
  i830.activeVertexStreamsCount = i831[3]
  i830.alignment = i831[4]
  i830.renderMode = i831[5]
  i830.sortMode = i831[6]
  i830.lengthScale = i831[7]
  i830.velocityScale = i831[8]
  i830.cameraVelocityScale = i831[9]
  i830.normalDirection = i831[10]
  i830.sortingFudge = i831[11]
  i830.minParticleSize = i831[12]
  i830.maxParticleSize = i831[13]
  i830.pivot = new pc.Vec3( i831[14], i831[15], i831[16] )
  request.r(i831[17], i831[18], 0, i830, 'trailMaterial')
  i830.applyActiveColorSpace = !!i831[19]
  i830.enabled = !!i831[20]
  request.r(i831[21], i831[22], 0, i830, 'sharedMaterial')
  var i833 = i831[23]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i830.sharedMaterials = i832
  i830.receiveShadows = !!i831[24]
  i830.shadowCastingMode = i831[25]
  i830.sortingLayerID = i831[26]
  i830.sortingOrder = i831[27]
  i830.lightmapIndex = i831[28]
  i830.lightmapSceneIndex = i831[29]
  i830.lightmapScaleOffset = new pc.Vec4( i831[30], i831[31], i831[32], i831[33] )
  i830.lightProbeUsage = i831[34]
  i830.reflectionProbeUsage = i831[35]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i837 = data
  i836.name = i837[0]
  i836.tagId = i837[1]
  i836.enabled = !!i837[2]
  i836.isStatic = !!i837[3]
  i836.layer = i837[4]
  return i836
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i838 = root || request.c( 'MenuLevel' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'menuLevelBtnUpdate')
  var i841 = i839[2]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('MenuLevelData', i841[i + 0]) );
  }
  i838.AllSteps = i840
  request.r(i839[3], i839[4], 0, i838, 'buttonparent')
  var i843 = i839[5]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i838.BtnsDotweenAnims = i842
  var i845 = i839[6]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i838.BtnsCols = i844
  request.r(i839[7], i839[8], 0, i838, 'mainGameView')
  request.r(i839[9], i839[10], 0, i838, 'Storyboard')
  request.r(i839[11], i839[12], 0, i838, 'BgMusic')
  request.r(i839[13], i839[14], 0, i838, 'BgStoryMusic')
  request.r(i839[15], i839[16], 0, i838, 'Hand_Tut1')
  request.r(i839[17], i839[18], 0, i838, 'Button_Hand')
  var i847 = i839[19]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i838.itemEnable_Onstart = i846
  var i849 = i839[20]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i838.itemDisable_Onstart = i848
  var i851 = i839[21]
  var i850 = []
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 2, i850, '')
  }
  i838.itemEnable_Oncomplete = i850
  var i853 = i839[22]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 2, i852, '')
  }
  i838.itemDisable_Oncomplete = i852
  i838.levelKey = i839[23]
  i838.revealDirtyHoldTime = i839[24]
  return i838
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i856 = root || request.c( 'MenuLevelData' )
  var i857 = data
  i856.Name = i857[0]
  request.r(i857[1], i857[2], 0, i856, 'UiBtn')
  request.r(i857[3], i857[4], 0, i856, 'TickBtn')
  request.r(i857[5], i857[6], 0, i856, 'ExclamationIcon')
  var i859 = i857[7]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i856.Item_Dirty = i858
  var i861 = i857[8]
  var i860 = []
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 2, i860, '')
  }
  i856.Item_Clean = i860
  request.r(i857[9], i857[10], 0, i856, 'CompleteParticle')
  return i856
}

Deserializers["IntroLevelAnim"] = function (request, data, root) {
  var i868 = root || request.c( 'IntroLevelAnim' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'menuLevel')
  i868.lvlkey = i869[2]
  request.r(i869[3], i869[4], 0, i868, 'DressChangeObj')
  request.r(i869[5], i869[6], 0, i868, 'DressChangeClip')
  return i868
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i870 = root || request.c( 'Level_PoseController' )
  var i871 = data
  var i873 = i871[0]
  var i872 = []
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 2, i872, '')
  }
  i870.itemToShow = i872
  var i875 = i871[1]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i870.itemToHide = i874
  i870.stepTarget = i871[2]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i877 = data
  i876.color = new pc.Color(i877[0], i877[1], i877[2], i877[3])
  request.r(i877[4], i877[5], 0, i876, 'sprite')
  i876.flipX = !!i877[6]
  i876.flipY = !!i877[7]
  i876.drawMode = i877[8]
  i876.size = new pc.Vec2( i877[9], i877[10] )
  i876.tileMode = i877[11]
  i876.adaptiveModeThreshold = i877[12]
  i876.maskInteraction = i877[13]
  i876.spriteSortPoint = i877[14]
  i876.enabled = !!i877[15]
  request.r(i877[16], i877[17], 0, i876, 'sharedMaterial')
  var i879 = i877[18]
  var i878 = []
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 2, i878, '')
  }
  i876.sharedMaterials = i878
  i876.receiveShadows = !!i877[19]
  i876.shadowCastingMode = i877[20]
  i876.sortingLayerID = i877[21]
  i876.sortingOrder = i877[22]
  i876.lightmapIndex = i877[23]
  i876.lightmapSceneIndex = i877[24]
  i876.lightmapScaleOffset = new pc.Vec4( i877[25], i877[26], i877[27], i877[28] )
  i876.lightProbeUsage = i877[29]
  i876.reflectionProbeUsage = i877[30]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'animatorController')
  request.r(i881[2], i881[3], 0, i880, 'avatar')
  i880.updateMode = i881[4]
  i880.hasTransformHierarchy = !!i881[5]
  i880.applyRootMotion = !!i881[6]
  var i883 = i881[7]
  var i882 = []
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 2, i882, '')
  }
  i880.humanBones = i882
  i880.enabled = !!i881[8]
  return i880
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'm_RootBone')
  var i889 = i887[2]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i886.m_BoneTransforms = i888
  i886.m_AlwaysUpdate = !!i887[3]
  i886.m_AutoRebind = !!i887[4]
  return i886
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i890 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i891 = data
  i890.targetIsSelf = !!i891[0]
  request.r(i891[1], i891[2], 0, i890, 'targetGO')
  i890.tweenTargetIsTargetGO = !!i891[3]
  i890.delay = i891[4]
  i890.duration = i891[5]
  i890.easeType = i891[6]
  i890.easeCurve = new pc.AnimationCurve( { keys_flow: i891[7] } )
  i890.loopType = i891[8]
  i890.loops = i891[9]
  i890.id = i891[10]
  i890.isRelative = !!i891[11]
  i890.isFrom = !!i891[12]
  i890.isIndependentUpdate = !!i891[13]
  i890.autoKill = !!i891[14]
  i890.autoGenerate = !!i891[15]
  i890.isActive = !!i891[16]
  i890.isValid = !!i891[17]
  request.r(i891[18], i891[19], 0, i890, 'target')
  i890.animationType = i891[20]
  i890.targetType = i891[21]
  i890.forcedTargetType = i891[22]
  i890.autoPlay = !!i891[23]
  i890.useTargetAsV3 = !!i891[24]
  i890.endValueFloat = i891[25]
  i890.endValueV3 = new pc.Vec3( i891[26], i891[27], i891[28] )
  i890.endValueV2 = new pc.Vec2( i891[29], i891[30] )
  i890.endValueColor = new pc.Color(i891[31], i891[32], i891[33], i891[34])
  i890.endValueString = i891[35]
  i890.endValueRect = UnityEngine.Rect.MinMaxRect(i891[36], i891[37], i891[38], i891[39])
  request.r(i891[40], i891[41], 0, i890, 'endValueTransform')
  i890.optionalBool0 = !!i891[42]
  i890.optionalBool1 = !!i891[43]
  i890.optionalFloat0 = i891[44]
  i890.optionalInt0 = i891[45]
  i890.optionalRotationMode = i891[46]
  i890.optionalScrambleMode = i891[47]
  i890.optionalShakeRandomnessMode = i891[48]
  i890.optionalString = i891[49]
  i890.updateType = i891[50]
  i890.isSpeedBased = !!i891[51]
  i890.hasOnStart = !!i891[52]
  i890.hasOnPlay = !!i891[53]
  i890.hasOnUpdate = !!i891[54]
  i890.hasOnStepComplete = !!i891[55]
  i890.hasOnComplete = !!i891[56]
  i890.hasOnTweenCreated = !!i891[57]
  i890.hasOnRewind = !!i891[58]
  i890.onStart = request.d('UnityEngine.Events.UnityEvent', i891[59], i890.onStart)
  i890.onPlay = request.d('UnityEngine.Events.UnityEvent', i891[60], i890.onPlay)
  i890.onUpdate = request.d('UnityEngine.Events.UnityEvent', i891[61], i890.onUpdate)
  i890.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i891[62], i890.onStepComplete)
  i890.onComplete = request.d('UnityEngine.Events.UnityEvent', i891[63], i890.onComplete)
  i890.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i891[64], i890.onTweenCreated)
  i890.onRewind = request.d('UnityEngine.Events.UnityEvent', i891[65], i890.onRewind)
  return i890
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i893 = data
  i892.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i893[0], i892.m_PersistentCalls)
  return i892
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i895 = data
  var i897 = i895[0]
  var i896 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i897.length; i += 1) {
    i896.add(request.d('UnityEngine.Events.PersistentCall', i897[i + 0]));
  }
  i894.m_Calls = i896
  return i894
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'm_Target')
  i900.m_TargetAssemblyTypeName = i901[2]
  i900.m_MethodName = i901[3]
  i900.m_Mode = i901[4]
  i900.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i901[5], i900.m_Arguments)
  i900.m_CallState = i901[6]
  return i900
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i902 = root || request.c( 'BD_AnimationHelper' )
  var i903 = data
  i902.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i903[0], i902.OnAnimationComplete)
  request.r(i903[1], i903[2], 0, i902, 'sfxClip')
  i902.progressPerStep = i903[3]
  i902.progressCap = i903[4]
  request.r(i903[5], i903[6], 0, i902, 'progressGate')
  return i902
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'm_ObjectArgument')
  i904.m_ObjectArgumentAssemblyTypeName = i905[2]
  i904.m_IntArgument = i905[3]
  i904.m_FloatArgument = i905[4]
  i904.m_StringArgument = i905[5]
  i904.m_BoolArgument = !!i905[6]
  return i904
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i906 = root || request.c( 'SpriteButton' )
  var i907 = data
  i906.isLocked = !!i907[0]
  i906.lockMsg = i907[1]
  i906.onClick = request.d('UnityEngine.Events.UnityEvent', i907[2], i906.onClick)
  i906.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i907[3], i906.onLockedClick)
  i906.isLevelBtnSfx = !!i907[4]
  request.r(i907[5], i907[6], 0, i906, 'pivot')
  i906.reductionChange = i907[7]
  i906.animationDuration = i907[8]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i909 = data
  i908.usedByComposite = !!i909[0]
  i908.autoTiling = !!i909[1]
  i908.size = new pc.Vec2( i909[2], i909[3] )
  i908.edgeRadius = i909[4]
  i908.enabled = !!i909[5]
  i908.isTrigger = !!i909[6]
  i908.usedByEffector = !!i909[7]
  i908.density = i909[8]
  i908.offset = new pc.Vec2( i909[9], i909[10] )
  request.r(i909[11], i909[12], 0, i908, 'material')
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i911 = data
  var i913 = i911[0]
  var i912 = []
  for(var i = 0; i < i913.length; i += 3) {
    i912.push( new pc.Vec3( i913[i + 0], i913[i + 1], i913[i + 2] ) );
  }
  i910.positions = i912
  i910.positionCount = i911[1]
  i910.time = i911[2]
  i910.startWidth = i911[3]
  i910.endWidth = i911[4]
  i910.widthMultiplier = i911[5]
  i910.autodestruct = !!i911[6]
  i910.emitting = !!i911[7]
  i910.numCornerVertices = i911[8]
  i910.numCapVertices = i911[9]
  i910.minVertexDistance = i911[10]
  i910.colorGradient = i911[11] ? new pc.ColorGradient(i911[11][0], i911[11][1], i911[11][2]) : null
  i910.startColor = new pc.Color(i911[12], i911[13], i911[14], i911[15])
  i910.endColor = new pc.Color(i911[16], i911[17], i911[18], i911[19])
  i910.generateLightingData = !!i911[20]
  i910.textureMode = i911[21]
  i910.alignment = i911[22]
  i910.widthCurve = new pc.AnimationCurve( { keys_flow: i911[23] } )
  i910.enabled = !!i911[24]
  request.r(i911[25], i911[26], 0, i910, 'sharedMaterial')
  var i915 = i911[27]
  var i914 = []
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 2, i914, '')
  }
  i910.sharedMaterials = i914
  i910.receiveShadows = !!i911[28]
  i910.shadowCastingMode = i911[29]
  i910.sortingLayerID = i911[30]
  i910.sortingOrder = i911[31]
  i910.lightmapIndex = i911[32]
  i910.lightmapSceneIndex = i911[33]
  i910.lightmapScaleOffset = new pc.Vec4( i911[34], i911[35], i911[36], i911[37] )
  i910.lightProbeUsage = i911[38]
  i910.reflectionProbeUsage = i911[39]
  return i910
}

Deserializers["Level1_Armpit_Playable"] = function (request, data, root) {
  var i918 = root || request.c( 'Level1_Armpit_Playable' )
  var i919 = data
  i918.MainZoom = request.d('ZoomPos', i919[0], i918.MainZoom)
  request.r(i919[1], i919[2], 0, i918, 'view1')
  request.r(i919[3], i919[4], 0, i918, 'view2')
  request.r(i919[5], i919[6], 0, i918, 'hairArmpit')
  i918.ZoomStep1 = request.d('ZoomPos', i919[7], i918.ZoomStep1)
  request.r(i919[8], i919[9], 0, i918, 'ToolStep1')
  request.r(i919[10], i919[11], 0, i918, 'ToolStep1CameraFollow')
  request.r(i919[12], i919[13], 0, i918, 'eraserSfx')
  i918.ZoomStep2 = request.d('ZoomPos', i919[14], i918.ZoomStep2)
  request.r(i919[15], i919[16], 0, i918, 'ToolStep2Parent')
  request.r(i919[17], i919[18], 0, i918, 'BeansParent')
  i918.ZoomStep3 = request.d('ZoomPos', i919[19], i918.ZoomStep3)
  request.r(i919[20], i919[21], 0, i918, 'JarHandIndication')
  request.r(i919[22], i919[23], 0, i918, 'GreenBtnCol_Damaged')
  request.r(i919[24], i919[25], 0, i918, 'GreenBtnCol_Fixed')
  request.r(i919[26], i919[27], 0, i918, 'HandTap1_3')
  request.r(i919[28], i919[29], 0, i918, 'GreenBtn')
  request.r(i919[30], i919[31], 0, i918, 'GreenBtnIndication')
  request.r(i919[32], i919[33], 0, i918, 'machineDamage')
  request.r(i919[34], i919[35], 0, i918, 'machineBlackImg')
  request.r(i919[36], i919[37], 0, i918, 'blackSmokeVfx')
  request.r(i919[38], i919[39], 0, i918, 'fixItErrorSfx')
  request.r(i919[40], i919[41], 0, i918, 'boilingWax')
  request.r(i919[42], i919[43], 0, i918, 'boilingParticle')
  var i921 = i919[44]
  var i920 = []
  for(var i = 0; i < i921.length; i += 2) {
  request.r(i921[i + 0], i921[i + 1], 2, i920, '')
  }
  i918.AllBeans = i920
  request.r(i919[45], i919[46], 0, i918, 'machineBtnSfx')
  request.r(i919[47], i919[48], 0, i918, 'boilingSfx')
  i918.ZoomStep4 = request.d('ZoomPos', i919[49], i918.ZoomStep4)
  request.r(i919[50], i919[51], 0, i918, 'ToolStep4')
  request.r(i919[52], i919[53], 0, i918, 'spatulaFull')
  request.r(i919[54], i919[55], 0, i918, 'spatulaFaded')
  request.r(i919[56], i919[57], 0, i918, 'waxMixControler')
  request.r(i919[58], i919[59], 0, i918, 'toolStep4')
  request.r(i919[60], i919[61], 0, i918, 'waxOnSpatula')
  request.r(i919[62], i919[63], 0, i918, 'waxMixIndication')
  request.r(i919[64], i919[65], 0, i918, 'waxDrippinfParticle')
  request.r(i919[66], i919[67], 0, i918, 'spatulaClamp')
  request.r(i919[68], i919[69], 0, i918, 'spatulaPickIndication')
  request.r(i919[70], i919[71], 0, i918, 'spatulaParent')
  request.r(i919[72], i919[73], 0, i918, 'finalSpatula')
  request.r(i919[74], i919[75], 0, i918, 'DropClip')
  i918.ZoomStep5 = request.d('ZoomPos', i919[76], i918.ZoomStep5)
  request.r(i919[77], i919[78], 0, i918, 'ToolStep5')
  request.r(i919[79], i919[80], 0, i918, 'hairSmall')
  request.r(i919[81], i919[82], 0, i918, 'skinBumpy')
  request.r(i919[83], i919[84], 0, i918, 'waxRestore')
  request.r(i919[85], i919[86], 0, i918, 'waxErase')
  request.r(i919[87], i919[88], 0, i918, 'waxEraseIndication')
  request.r(i919[89], i919[90], 0, i918, 'handIndication5')
  i918.ZoomStep6 = request.d('ZoomPos', i919[91], i918.ZoomStep6)
  request.r(i919[92], i919[93], 0, i918, 'ToolStep6Parent')
  request.r(i919[94], i919[95], 0, i918, 'ToolStep6')
  request.r(i919[96], i919[97], 0, i918, 'ToolStep6Anim')
  request.r(i919[98], i919[99], 0, i918, 'BottleStep6')
  request.r(i919[100], i919[101], 0, i918, 'ToolsStep6transparent')
  request.r(i919[102], i919[103], 0, i918, 'ToolsStep6Liquid')
  request.r(i919[104], i919[105], 0, i918, 'ToolsStep6Rend')
  request.r(i919[106], i919[107], 0, i918, 'dropperTapobj')
  request.r(i919[108], i919[109], 0, i918, 'dropperTarget')
  request.r(i919[110], i919[111], 0, i918, 'droperPressed')
  request.r(i919[112], i919[113], 0, i918, 'dropletAnim')
  request.r(i919[114], i919[115], 0, i918, 'droperPlaceIndication')
  request.r(i919[116], i919[117], 0, i918, 'ToolStep6Actual')
  request.r(i919[118], i919[119], 0, i918, 'serumCapSfx')
  i918.ZoomStep7 = request.d('ZoomPos', i919[120], i918.ZoomStep7)
  request.r(i919[121], i919[122], 0, i918, 'ToolStep7')
  request.r(i919[123], i919[124], 0, i918, 'ToolStep7CameraFollow')
  request.r(i919[125], i919[126], 0, i918, 'serumDropped')
  request.r(i919[127], i919[128], 0, i918, 'SerumRubbed')
  i918.ZoomStep8 = request.d('ZoomPos', i919[129], i918.ZoomStep8)
  request.r(i919[130], i919[131], 0, i918, 'ToolStep8')
  request.r(i919[132], i919[133], 0, i918, 'perfumeCap')
  request.r(i919[134], i919[135], 0, i918, 'perfumeBtnTriger')
  request.r(i919[136], i919[137], 0, i918, 'perfumeCapAnim')
  request.r(i919[138], i919[139], 0, i918, 'perfumeButton')
  request.r(i919[140], i919[141], 0, i918, 'perfumeParticles')
  request.r(i919[142], i919[143], 0, i918, 'starsParticles')
  request.r(i919[144], i919[145], 0, i918, 'bodyStright')
  request.r(i919[146], i919[147], 0, i918, 'bodyTilt')
  request.r(i919[148], i919[149], 0, i918, 'PerfumeCapOpen')
  request.r(i919[150], i919[151], 0, i918, 'PerfumeSfx')
  request.r(i919[152], i919[153], 0, i918, 'fixItPrompt')
  request.r(i919[154], i919[155], 0, i918, 'fixItPromptHand')
  i918.levelName = i919[156]
  i918.levelReward = i919[157]
  request.r(i919[158], i919[159], 0, i918, 'LevelIcon')
  request.r(i919[160], i919[161], 0, i918, 'Level_BG')
  var i923 = i919[162]
  var i922 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i923.length; i += 2) {
  request.r(i923[i + 0], i923[i + 1], 1, i922, '')
  }
  i918.ToolIcons = i922
  var i925 = i919[163]
  var i924 = []
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 2, i924, '')
  }
  i918.AllDrags = i924
  var i927 = i919[164]
  var i926 = []
  for(var i = 0; i < i927.length; i += 2) {
  request.r(i927[i + 0], i927[i + 1], 2, i926, '')
  }
  i918.AllSources = i926
  var i929 = i919[165]
  var i928 = []
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 2, i928, '')
  }
  i918.AllScratches = i928
  i918.stepsDone = i919[166]
  i918.levelNo = i919[167]
  i918.partNo = i919[168]
  return i918
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i930 = root || request.c( 'ZoomPos' )
  var i931 = data
  i930.CameraPos = new pc.Vec3( i931[0], i931[1], i931[2] )
  i930.CameraFOV = i931[3]
  return i930
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i942 = root || request.c( 'PlayableCTA' )
  var i943 = data
  i942.trigger = i943[0]
  i942.afterSeconds = i943[1]
  i942.afterTaps = i943[2]
  request.r(i943[3], i943[4], 0, i942, 'scratchProgress')
  i942.scratchIndex = i943[5]
  i942.progressThreshold = i943[6]
  request.r(i943[7], i943[8], 0, i942, 'watchedTool')
  i942.blockInputOnFire = !!i943[9]
  i942.refireOnEveryTap = !!i943[10]
  i942.refireDelay = i943[11]
  i942.showEndCard = !!i943[12]
  request.r(i943[13], i943[14], 0, i942, 'endCard')
  i942.showEndCardOnProgressTrigger = !!i943[15]
  i942.showEndCardOnToolAppearTrigger = !!i943[16]
  i942.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i943[17], i942.onCtaFired)
  i942.logWhenFired = !!i943[18]
  return i942
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i944 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'MainCamera')
  i944.RenderType = i945[2]
  request.r(i945[3], i945[4], 0, i944, 'ScratchSurfaceSprite')
  i944.ScratchSurfaceSpriteHasAlpha = !!i945[5]
  i944.MaskProgressCutOffValue = i945[6]
  request.r(i945[7], i945[8], 0, i944, 'EraseTexture')
  i944.EraseTextureScale = new pc.Vec2( i945[9], i945[10] )
  i944.InputEnabled = !!i945[11]
  request.r(i945[12], i945[13], 0, i944, 'Card')
  i944.Mode = i945[14]
  request.r(i945[15], i945[16], 0, i944, 'Progress')
  request.r(i945[17], i945[18], 0, i944, 'MeshCard')
  request.r(i945[19], i945[20], 0, i944, 'SpriteCard')
  request.r(i945[21], i945[22], 0, i944, 'ImageCard')
  request.r(i945[23], i945[24], 0, i944, 'MaskShader')
  request.r(i945[25], i945[26], 0, i944, 'BrushShader')
  request.r(i945[27], i945[28], 0, i944, 'MaskProgressShader')
  request.r(i945[29], i945[30], 0, i944, 'MaskProgressCutOffShader')
  return i944
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i946 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'MainCamera')
  request.r(i947[2], i947[3], 0, i946, 'Surface')
  i946.RenderTextureQuality = i947[4]
  request.r(i947[5], i947[6], 0, i946, 'Eraser')
  request.r(i947[7], i947[8], 0, i946, 'Progress')
  request.r(i947[9], i947[10], 0, i946, 'ScratchSurface')
  request.r(i947[11], i947[12], 0, i946, 'RenderTexture')
  i946.BrushScale = new pc.Vec2( i947[13], i947[14] )
  request.r(i947[15], i947[16], 0, i946, 'ToolTip')
  i946.InputEnabled = !!i947[17]
  i946.IsScratching = !!i947[18]
  i946.useChangingScale = !!i947[19]
  i946.useGivenBrushScale = !!i947[20]
  i946.canSpreadMask = !!i947[21]
  i946.shouldPaintHoles = !!i947[22]
  i946.canRotateTip = !!i947[23]
  i946._mode = i947[24]
  return i946
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i948 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'Card')
  i948.currentProgress = i949[2]
  return i948
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

Deserializers["TextureOffsetScroller"] = function (request, data, root) {
  var i956 = root || request.c( 'TextureOffsetScroller' )
  var i957 = data
  i956.scrollSpeed = new pc.Vec2( i957[0], i957[1] )
  i956.smoothStart = !!i957[2]
  i956.smoothDuration = i957[3]
  i956.textureName = i957[4]
  i956.useSharedMaterial = !!i957[5]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'clip')
  request.r(i959[2], i959[3], 0, i958, 'outputAudioMixerGroup')
  i958.playOnAwake = !!i959[4]
  i958.loop = !!i959[5]
  i958.time = i959[6]
  i958.volume = i959[7]
  i958.pitch = i959[8]
  i958.enabled = !!i959[9]
  return i958
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i960 = root || request.c( 'PlaySfxOnCollision' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'Tip')
  i960.Mode = i961[2]
  request.r(i961[3], i961[4], 0, i960, 'DragInput')
  request.r(i961[5], i961[6], 0, i960, 'Source')
  i960.startVol = i961[7]
  i960.targetVol = i961[8]
  i960.duration = i961[9]
  request.r(i961[10], i961[11], 0, i960, 'Particles')
  i960.isDone = !!i961[12]
  i960.isInArea = !!i961[13]
  i960.isPlaying = !!i961[14]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i963 = data
  i962.radius = i963[0]
  i962.enabled = !!i963[1]
  i962.isTrigger = !!i963[2]
  i962.usedByEffector = !!i963[3]
  i962.density = i963[4]
  i962.offset = new pc.Vec2( i963[5], i963[6] )
  request.r(i963[7], i963[8], 0, i962, 'material')
  return i962
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i964 = root || request.c( 'PlayParticlesOnCollision' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'Target')
  request.r(i965[2], i965[3], 0, i964, 'ParticlePrefab')
  i964.destroyIt = !!i965[4]
  i964.stayAtPlace = !!i965[5]
  i964.disableOnCollision = !!i965[6]
  i964.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i965[7], i964.OnCollisionEvent)
  return i964
}

Deserializers["BD_Fold"] = function (request, data, root) {
  var i966 = root || request.c( 'BD_Fold' )
  var i967 = data
  i966.canDrag = !!i967[0]
  i966.canFoldBottomLeft = !!i967[1]
  i966.canFoldBottomRight = !!i967[2]
  i966.canFoldTopLeft = !!i967[3]
  i966.canFoldTopRight = !!i967[4]
  request.r(i967[5], i967[6], 0, i966, 'Indication')
  request.r(i967[7], i967[8], 0, i966, 'backSideSprite')
  i966.maxSideOffset = i967[9]
  i966.foldBackDuration = i967[10]
  i966.instantFoldAmount = i967[11]
  i966.useSmoothRelease = !!i967[12]
  i966.completionLimit = i967[13]
  i966.afterCompletionTravelTo = i967[14]
  i966.OnComplete = request.d('UnityEngine.Events.UnityEvent', i967[15], i966.OnComplete)
  i966.currentProgress = i967[16]
  i966.innerShadowStrength = i967[17]
  request.r(i967[18], i967[19], 0, i966, 'dragAudioSource')
  request.r(i967[20], i967[21], 0, i966, 'dragStartClip')
  request.r(i967[22], i967[23], 0, i966, 'completionClip')
  i966.audioFadeSpeed = i967[24]
  i966.audioMoveThreshold = i967[25]
  i966.hapticInterval = i967[26]
  return i966
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i968 = root || request.c( 'ActionOnTap' )
  var i969 = data
  i968.OnTap = request.d('UnityEngine.Events.UnityEvent', i969[0], i968.OnTap)
  i968.OnTapExtra = request.d('System.Action', i969[1], i968.OnTapExtra)
  return i968
}

Deserializers["System.Action"] = function (request, data, root) {
  var i970 = root || request.c( 'System.Action' )
  var i971 = data
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i973 = data
  i972.usedByComposite = !!i973[0]
  i972.autoTiling = !!i973[1]
  var i975 = i973[2]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
  var i977 = i975[i + 0]
  var i976 = []
  for(var i = 0; i < i977.length; i += 2) {
    i976.push( new pc.Vec2( i977[i + 0], i977[i + 1] ) );
  }
    i974.push( i976 );
  }
  i972.points = i974
  i972.enabled = !!i973[3]
  i972.isTrigger = !!i973[4]
  i972.usedByEffector = !!i973[5]
  i972.density = i973[6]
  i972.offset = new pc.Vec2( i973[7], i973[8] )
  request.r(i973[9], i973[10], 0, i972, 'material')
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i985 = data
  i984.edgeRadius = i985[0]
  var i987 = i985[1]
  var i986 = []
  for(var i = 0; i < i987.length; i += 2) {
    i986.push( new pc.Vec2( i987[i + 0], i987[i + 1] ) );
  }
  i984.points = i986
  i984.useAdjacentStartPoint = !!i985[2]
  i984.adjacentStartPoint = new pc.Vec2( i985[3], i985[4] )
  i984.useAdjacentEndPoint = !!i985[5]
  i984.adjacentEndPoint = new pc.Vec2( i985[6], i985[7] )
  i984.enabled = !!i985[8]
  i984.isTrigger = !!i985[9]
  i984.usedByEffector = !!i985[10]
  i984.density = i985[11]
  i984.offset = new pc.Vec2( i985[12], i985[13] )
  request.r(i985[14], i985[15], 0, i984, 'material')
  return i984
}

Deserializers["JarRotator"] = function (request, data, root) {
  var i988 = root || request.c( 'JarRotator' )
  var i989 = data
  i988.rotationMode = i989[0]
  i988.maxRotation = i989[1]
  i988.rotationSpeed = i989[2]
  i988.invertRotation = !!i989[3]
  request.r(i989[4], i989[5], 0, i988, 'tapClip')
  request.r(i989[6], i989[7], 0, i988, 'dragAudioSource')
  i988.OnComplete = request.d('UnityEngine.Events.UnityEvent', i989[8], i988.OnComplete)
  i988.completed = !!i989[9]
  request.r(i989[10], i989[11], 0, i988, 'jarIndication')
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i991 = data
  i990.bodyType = i991[0]
  request.r(i991[1], i991[2], 0, i990, 'material')
  i990.simulated = !!i991[3]
  i990.useAutoMass = !!i991[4]
  i990.mass = i991[5]
  i990.drag = i991[6]
  i990.angularDrag = i991[7]
  i990.gravityScale = i991[8]
  i990.collisionDetectionMode = i991[9]
  i990.sleepMode = i991[10]
  i990.constraints = i991[11]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i993 = data
  i992.frontSortingLayerID = i993[0]
  i992.frontSortingOrder = i993[1]
  i992.backSortingLayerID = i993[2]
  i992.backSortingOrder = i993[3]
  i992.alphaCutoff = i993[4]
  request.r(i993[5], i993[6], 0, i992, 'sprite')
  i992.tileMode = i993[7]
  i992.isCustomRangeActive = !!i993[8]
  i992.spriteSortPoint = i993[9]
  i992.enabled = !!i993[10]
  request.r(i993[11], i993[12], 0, i992, 'sharedMaterial')
  var i995 = i993[13]
  var i994 = []
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 2, i994, '')
  }
  i992.sharedMaterials = i994
  i992.receiveShadows = !!i993[14]
  i992.shadowCastingMode = i993[15]
  i992.sortingLayerID = i993[16]
  i992.sortingOrder = i993[17]
  i992.lightmapIndex = i993[18]
  i992.lightmapSceneIndex = i993[19]
  i992.lightmapScaleOffset = new pc.Vec4( i993[20], i993[21], i993[22], i993[23] )
  i992.lightProbeUsage = i993[24]
  i992.reflectionProbeUsage = i993[25]
  return i992
}

Deserializers["Level1_Armpit_WaxCount"] = function (request, data, root) {
  var i996 = root || request.c( 'Level1_Armpit_WaxCount' )
  var i997 = data
  i996.waxCount = i997[0]
  i996.waxTotal = i997[1]
  var i999 = i997[2]
  var i998 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 1, i998, '')
  }
  i996.targetWaxObjects = i998
  request.r(i997[3], i997[4], 0, i996, 'rotator')
  i996.vibration = !!i997[5]
  i996.delayInVibration = i997[6]
  var i1001 = i997[7]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 2) {
  request.r(i1001[i + 0], i1001[i + 1], 2, i1000, '')
  }
  i996.waxDropSfx = i1000
  return i996
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i1006 = root || request.c( 'BasicDrag' )
  var i1007 = data
  i1006.canDrag = !!i1007[0]
  i1006.dragByDelta = !!i1007[1]
  i1006.isDragging = !!i1007[2]
  i1006.moveWithPointer = !!i1007[3]
  i1006.canReturn = !!i1007[4]
  i1006.jumpOnReturn = !!i1007[5]
  i1006.returnTime = i1007[6]
  i1006.Tool_Offset = new pc.Vec3( i1007[7], i1007[8], i1007[9] )
  i1006.canScaleIncrease = !!i1007[10]
  i1006.Self_ScaleNew = new pc.Vec3( i1007[11], i1007[12], i1007[13] )
  i1006.canRotateOnPick = !!i1007[14]
  i1006.startRot = new pc.Vec3( i1007[15], i1007[16], i1007[17] )
  i1006.newRot = new pc.Vec3( i1007[18], i1007[19], i1007[20] )
  var i1009 = i1007[21]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 2) {
  request.r(i1009[i + 0], i1009[i + 1], 2, i1008, '')
  }
  i1006.childSprite = i1008
  request.r(i1007[22], i1007[23], 0, i1006, 'ToolSelectClip')
  request.r(i1007[24], i1007[25], 0, i1006, 'ToolLoopClip')
  request.r(i1007[26], i1007[27], 0, i1006, 'thisParticles')
  i1006.onDragparticle = !!i1007[28]
  request.r(i1007[29], i1007[30], 0, i1006, 'dragParticles')
  request.r(i1007[31], i1007[32], 0, i1006, 'anim')
  i1006.startPos = new pc.Vec3( i1007[33], i1007[34], i1007[35] )
  i1006.startScale = new pc.Vec3( i1007[36], i1007[37], i1007[38] )
  i1006.Vibration = !!i1007[39]
  i1006.isPlacedCannotMove = !!i1007[40]
  i1006.isObjectMovingWhileDragging = !!i1007[41]
  i1006.OnMouseDownEvent = request.d('System.Action', i1007[42], i1006.OnMouseDownEvent)
  i1006.OnMouseUpEvent = request.d('System.Action', i1007[43], i1006.OnMouseUpEvent)
  i1006.ProgStartEvent = request.d('System.Action', i1007[44], i1006.ProgStartEvent)
  i1006.ProgEndEvent = request.d('System.Action', i1007[45], i1006.ProgEndEvent)
  i1006.canCallMouseUpWhenGamePaused = !!i1007[46]
  i1006.ClampX_L = i1007[47]
  i1006.ClampX_H = i1007[48]
  i1006.ClampY_L = i1007[49]
  i1006.ClampY_H = i1007[50]
  i1006.startOrder = i1007[51]
  i1006.dontResetItIsInCollider = !!i1007[52]
  request.r(i1007[53], i1007[54], 0, i1006, 'thisCollider')
  request.r(i1007[55], i1007[56], 0, i1006, 'thisSR')
  i1006.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i1007[57], i1006.OnMouseDownEventIndependentFromCanDrag)
  return i1006
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i1010 = root || request.c( 'BD_AnimatorDrag' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'BD')
  request.r(i1011[2], i1011[3], 0, i1010, 'anim')
  request.r(i1011[4], i1011[5], 0, i1010, 'Source')
  i1010.Vibration = !!i1011[6]
  i1010.isCompletable = !!i1011[7]
  i1010.completionThreshold = i1011[8]
  i1010.OnComplete = request.d('UnityEngine.Events.UnityEvent', i1011[9], i1010.OnComplete)
  return i1010
}

Deserializers["TapandHold_Simple"] = function (request, data, root) {
  var i1012 = root || request.c( 'TapandHold_Simple' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'actionSfx')
  i1012.holdDuration = i1013[2]
  i1012.dragThreshold = i1013[3]
  i1012.fadeInOnHold = !!i1013[4]
  i1012.fadeOutOnRelease = !!i1013[5]
  request.r(i1013[6], i1013[7], 0, i1012, 'targetSprite')
  i1012.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i1013[8], i1012.onHoldComplete)
  i1012.currentProgress = i1013[9]
  i1012.isHolding = !!i1013[10]
  i1012.isCompleted = !!i1013[11]
  request.r(i1013[12], i1013[13], 0, i1012, 'thisTool')
  return i1012
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i1014 = root || request.c( 'BD_Progress' )
  var i1015 = data
  var i1017 = i1015[0]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('ScratchData', i1017[i + 0]) );
  }
  i1014.AllScratches = i1016
  i1014.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i1015[1], i1014.OnScratchComplete)
  i1014.isProgDone = !!i1015[2]
  i1014.canCallComplete = !!i1015[3]
  i1014.CollectiveAppear = !!i1015[4]
  i1014.tipControl = !!i1015[5]
  i1014.progressControl = !!i1015[6]
  request.r(i1015[7], i1015[8], 0, i1014, 'thisDrag')
  i1014.CompleteEvent = request.d('System.Action', i1015[9], i1014.CompleteEvent)
  i1014.SubCompleteEvent = request.d('System.Action', i1015[10], i1014.SubCompleteEvent)
  return i1014
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i1020 = root || request.c( 'ScratchData' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'ScratchManager')
  i1020.scratchLimit = i1021[2]
  i1020.isComplete = !!i1021[3]
  return i1020
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i1022 = root || request.c( 'BD_Clamp' )
  var i1023 = data
  i1022.ClampX_L = i1023[0]
  i1022.ClampX_H = i1023[1]
  i1022.ClampY_L = i1023[2]
  i1022.ClampY_H = i1023[3]
  return i1022
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i1024 = root || request.c( 'BD_CameraFollow' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'Tool')
  request.r(i1025[2], i1025[3], 0, i1024, 'Pivot')
  i1024.FOV = i1025[4]
  i1024.Y_L = i1025[5]
  i1024.Y_H = i1025[6]
  i1024.X_L = i1025[7]
  i1024.X_R = i1025[8]
  i1024.startDelay = i1025[9]
  i1024.duration = i1025[10]
  return i1024
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i1026 = root || request.c( 'BD_ToolRotate' )
  var i1027 = data
  i1026.startDelay = i1027[0]
  request.r(i1027[1], i1027[2], 0, i1026, 'Tool')
  request.r(i1027[3], i1027[4], 0, i1026, 'Clamp')
  request.r(i1027[5], i1027[6], 0, i1026, 'Pivot')
  i1026.MinAngle = new pc.Vec3( i1027[7], i1027[8], i1027[9] )
  i1026.MaxAngle = new pc.Vec3( i1027[10], i1027[11], i1027[12] )
  i1026.rotationSpeed = i1027[13]
  return i1026
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i1028 = root || request.c( 'PlaceItem' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'thisDrag')
  request.r(i1029[2], i1029[3], 0, i1028, 'Target')
  request.r(i1029[4], i1029[5], 0, i1028, 'Clip')
  i1028.jumpOnPlace = !!i1029[6]
  i1028.jumpHeight = i1029[7]
  i1028.jumpDuration = i1029[8]
  i1028.settleDuration = i1029[9]
  i1028.isPlaced = !!i1029[10]
  i1028.isInsideCollider = !!i1029[11]
  i1028.changeScaleOnPlace = !!i1029[12]
  request.r(i1029[13], i1029[14], 0, i1028, 'item')
  i1028.newScaleOnPlace = new pc.Vec3( i1029[15], i1029[16], i1029[17] )
  i1028.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i1029[18], i1028.OnPlaced)
  return i1028
}

Deserializers["BD_Dropper"] = function (request, data, root) {
  var i1030 = root || request.c( 'BD_Dropper' )
  var i1031 = data
  i1030.OnComplete = request.d('UnityEngine.Events.UnityEvent', i1031[0], i1030.OnComplete)
  request.r(i1031[1], i1031[2], 0, i1030, 'thisDrag')
  request.r(i1031[3], i1031[4], 0, i1030, 'toolRend')
  request.r(i1031[5], i1031[6], 0, i1030, 'toolDef_sp')
  request.r(i1031[7], i1031[8], 0, i1030, 'toolPick_sp')
  request.r(i1031[9], i1031[10], 0, i1030, 'animator')
  request.r(i1031[11], i1031[12], 0, i1030, 'tipCol')
  request.r(i1031[13], i1031[14], 0, i1030, 'targetCol')
  request.r(i1031[15], i1031[16], 0, i1030, 'particleEffect')
  i1030.FadeIn = !!i1031[17]
  i1030.fadeDuration = i1031[18]
  var i1033 = i1031[19]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 2) {
  request.r(i1033[i + 0], i1033[i + 1], 2, i1032, '')
  }
  i1030.itemsToFade = i1032
  i1030.progressSpeed = i1031[20]
  i1030.holdGrace = i1031[21]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1035 = data
  i1034.name = i1035[0]
  i1034.atlasId = i1035[1]
  i1034.mipmapCount = i1035[2]
  i1034.hdr = !!i1035[3]
  i1034.size = i1035[4]
  i1034.anisoLevel = i1035[5]
  i1034.filterMode = i1035[6]
  var i1037 = i1035[7]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 4) {
    i1036.push( UnityEngine.Rect.MinMaxRect(i1037[i + 0], i1037[i + 1], i1037[i + 2], i1037[i + 3]) );
  }
  i1034.rects = i1036
  i1034.wrapU = i1035[8]
  i1034.wrapV = i1035[9]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1041 = data
  i1040.name = i1041[0]
  i1040.index = i1041[1]
  i1040.startup = !!i1041[2]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1043 = data
  i1042.aspect = i1043[0]
  i1042.orthographic = !!i1043[1]
  i1042.orthographicSize = i1043[2]
  i1042.backgroundColor = new pc.Color(i1043[3], i1043[4], i1043[5], i1043[6])
  i1042.nearClipPlane = i1043[7]
  i1042.farClipPlane = i1043[8]
  i1042.fieldOfView = i1043[9]
  i1042.depth = i1043[10]
  i1042.clearFlags = i1043[11]
  i1042.cullingMask = i1043[12]
  i1042.rect = i1043[13]
  request.r(i1043[14], i1043[15], 0, i1042, 'targetTexture')
  i1042.usePhysicalProperties = !!i1043[16]
  i1042.focalLength = i1043[17]
  i1042.sensorSize = new pc.Vec2( i1043[18], i1043[19] )
  i1042.lensShift = new pc.Vec2( i1043[20], i1043[21] )
  i1042.gateFit = i1043[22]
  i1042.commandBufferCount = i1043[23]
  i1042.cameraType = i1043[24]
  i1042.enabled = !!i1043[25]
  return i1042
}

Deserializers["CameraController"] = function (request, data, root) {
  var i1044 = root || request.c( 'CameraController' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'cam')
  i1044.defaultPosition = new pc.Vec3( i1045[2], i1045[3], i1045[4] )
  i1044.defaultSize = i1045[5]
  i1044.defaultFOV = i1045[6]
  i1044.defaultDuration = i1045[7]
  i1044.defaultEase = i1045[8]
  return i1044
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i1046 = root || request.c( 'MusicSource' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'source')
  return i1046
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i1048 = root || request.c( 'UI_Manager' )
  var i1049 = data
  i1048.levelCompleted = !!i1049[0]
  i1048.isPauseActive = !!i1049[1]
  i1048.loadIndex = i1049[2]
  request.r(i1049[3], i1049[4], 0, i1048, 'removeAdsButton')
  request.r(i1049[5], i1049[6], 0, i1048, 'pauseButton')
  request.r(i1049[7], i1049[8], 0, i1048, 'Fade_Img')
  request.r(i1049[9], i1049[10], 0, i1048, 'TopBarAnim')
  request.r(i1049[11], i1049[12], 0, i1048, 'MainPanel')
  request.r(i1049[13], i1049[14], 0, i1048, 'PausePanel')
  request.r(i1049[15], i1049[16], 0, i1048, 'PausePopUp')
  request.r(i1049[17], i1049[18], 0, i1048, 'PauseCanvasGroup')
  request.r(i1049[19], i1049[20], 0, i1048, 'RateUsPanel')
  request.r(i1049[21], i1049[22], 0, i1048, 'RateUsPopUp')
  request.r(i1049[23], i1049[24], 0, i1048, 'RemoveAdsPanel')
  request.r(i1049[25], i1049[26], 0, i1048, 'RemoveAdsPopUp')
  request.r(i1049[27], i1049[28], 0, i1048, 'RemoveAdsCanvasGroup')
  var i1051 = i1049[29]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 2) {
  request.r(i1051[i + 0], i1051[i + 1], 2, i1050, '')
  }
  i1048.RemoveAdsAnims = i1050
  var i1053 = i1049[30]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1053.length; i += 2) {
  request.r(i1053[i + 0], i1053[i + 1], 1, i1052, '')
  }
  i1048.thingsToDisableWhenCompletePanel = i1052
  request.r(i1049[31], i1049[32], 0, i1048, 'CompletePanel')
  request.r(i1049[33], i1049[34], 0, i1048, 'LevelIcon')
  request.r(i1049[35], i1049[36], 0, i1048, 'CompleteParticles')
  request.r(i1049[37], i1049[38], 0, i1048, 'progressBar')
  request.r(i1049[39], i1049[40], 0, i1048, 'progressText')
  request.r(i1049[41], i1049[42], 0, i1048, 'toolIcon1')
  request.r(i1049[43], i1049[44], 0, i1048, 'toolIcon2')
  request.r(i1049[45], i1049[46], 0, i1048, 'toolIcon3')
  request.r(i1049[47], i1049[48], 0, i1048, 'toolIcon4')
  request.r(i1049[49], i1049[50], 0, i1048, 'target1')
  request.r(i1049[51], i1049[52], 0, i1048, 'target2')
  i1048.toolMoveDuration = i1049[53]
  i1048.currentIndex = i1049[54]
  var i1055 = i1049[55]
  var i1054 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1055.length; i += 2) {
  request.r(i1055[i + 0], i1055[i + 1], 1, i1054, '')
  }
  i1048.allTools = i1054
  request.r(i1049[56], i1049[57], 0, i1048, 'clockProgress')
  request.r(i1049[58], i1049[59], 0, i1048, 'clockProgressFill')
  request.r(i1049[60], i1049[61], 0, i1048, 'clockAudio')
  i1048.moveDistance = i1049[62]
  i1048.animationDuration = i1049[63]
  i1048.greyBgChildName = i1049[64]
  i1048.pushOffset = i1049[65]
  return i1048
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i1056 = root || request.c( 'GameManagerPlayable' )
  var i1057 = data
  request.r(i1057[0], i1057[1], 0, i1056, 'endParticles')
  request.r(i1057[2], i1057[3], 0, i1056, 'stepCompleteParticles')
  request.r(i1057[4], i1057[5], 0, i1056, 'DefaultMat')
  request.r(i1057[6], i1057[7], 0, i1056, 'BG_Music')
  request.r(i1057[8], i1057[9], 0, i1056, 'restoreEffectShader')
  request.r(i1057[10], i1057[11], 0, i1056, 'stickerEffectShader')
  i1056.isComplete = !!i1057[12]
  i1056.isPaused = !!i1057[13]
  request.r(i1057[14], i1057[15], 0, i1056, 'currentLevel')
  i1056.startLevelOnPlay = !!i1057[16]
  i1056.currentLevelNo = i1057[17]
  return i1056
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1058 = root || request.c( 'AudioController' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'MainMixer')
  request.r(i1059[2], i1059[3], 0, i1058, 'UiClick')
  request.r(i1059[4], i1059[5], 0, i1058, 'UiClickSource')
  var i1061 = i1059[6]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 2) {
  request.r(i1061[i + 0], i1061[i + 1], 2, i1060, '')
  }
  i1058.SfxSources = i1060
  var i1063 = i1059[7]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 2) {
  request.r(i1063[i + 0], i1063[i + 1], 2, i1062, '')
  }
  i1058.AllClips = i1062
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1065 = data
  i1064.pivot = new pc.Vec2( i1065[0], i1065[1] )
  i1064.anchorMin = new pc.Vec2( i1065[2], i1065[3] )
  i1064.anchorMax = new pc.Vec2( i1065[4], i1065[5] )
  i1064.sizeDelta = new pc.Vec2( i1065[6], i1065[7] )
  i1064.anchoredPosition3D = new pc.Vec3( i1065[8], i1065[9], i1065[10] )
  i1064.rotation = new pc.Quat(i1065[11], i1065[12], i1065[13], i1065[14])
  i1064.scale = new pc.Vec3( i1065[15], i1065[16], i1065[17] )
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1067 = data
  i1066.planeDistance = i1067[0]
  i1066.referencePixelsPerUnit = i1067[1]
  i1066.isFallbackOverlay = !!i1067[2]
  i1066.renderMode = i1067[3]
  i1066.renderOrder = i1067[4]
  i1066.sortingLayerName = i1067[5]
  i1066.sortingOrder = i1067[6]
  i1066.scaleFactor = i1067[7]
  request.r(i1067[8], i1067[9], 0, i1066, 'worldCamera')
  i1066.overrideSorting = !!i1067[10]
  i1066.pixelPerfect = !!i1067[11]
  i1066.targetDisplay = i1067[12]
  i1066.overridePixelPerfect = !!i1067[13]
  i1066.enabled = !!i1067[14]
  return i1066
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1068 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1069 = data
  i1068.m_UiScaleMode = i1069[0]
  i1068.m_ReferencePixelsPerUnit = i1069[1]
  i1068.m_ScaleFactor = i1069[2]
  i1068.m_ReferenceResolution = new pc.Vec2( i1069[3], i1069[4] )
  i1068.m_ScreenMatchMode = i1069[5]
  i1068.m_MatchWidthOrHeight = i1069[6]
  i1068.m_PhysicalUnit = i1069[7]
  i1068.m_FallbackScreenDPI = i1069[8]
  i1068.m_DefaultSpriteDPI = i1069[9]
  i1068.m_DynamicPixelsPerUnit = i1069[10]
  i1068.m_PresetInfoIsWorld = !!i1069[11]
  return i1068
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1070 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1071 = data
  i1070.m_IgnoreReversedGraphics = !!i1071[0]
  i1070.m_BlockingObjects = i1071[1]
  i1070.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1071[2] )
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1073 = data
  i1072.cullTransparentMesh = !!i1073[0]
  return i1072
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.UI.Image' )
  var i1075 = data
  request.r(i1075[0], i1075[1], 0, i1074, 'm_Sprite')
  i1074.m_Type = i1075[2]
  i1074.m_PreserveAspect = !!i1075[3]
  i1074.m_FillCenter = !!i1075[4]
  i1074.m_FillMethod = i1075[5]
  i1074.m_FillAmount = i1075[6]
  i1074.m_FillClockwise = !!i1075[7]
  i1074.m_FillOrigin = i1075[8]
  i1074.m_UseSpriteMesh = !!i1075[9]
  i1074.m_PixelsPerUnitMultiplier = i1075[10]
  request.r(i1075[11], i1075[12], 0, i1074, 'm_Material')
  i1074.m_Maskable = !!i1075[13]
  i1074.m_Color = new pc.Color(i1075[14], i1075[15], i1075[16], i1075[17])
  i1074.m_RaycastTarget = !!i1075[18]
  i1074.m_RaycastPadding = new pc.Vec4( i1075[19], i1075[20], i1075[21], i1075[22] )
  return i1074
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1076 = root || request.c( 'UnityEngine.UI.Text' )
  var i1077 = data
  i1076.m_FontData = request.d('UnityEngine.UI.FontData', i1077[0], i1076.m_FontData)
  i1076.m_Text = i1077[1]
  request.r(i1077[2], i1077[3], 0, i1076, 'm_Material')
  i1076.m_Maskable = !!i1077[4]
  i1076.m_Color = new pc.Color(i1077[5], i1077[6], i1077[7], i1077[8])
  i1076.m_RaycastTarget = !!i1077[9]
  i1076.m_RaycastPadding = new pc.Vec4( i1077[10], i1077[11], i1077[12], i1077[13] )
  return i1076
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1079 = data
  request.r(i1079[0], i1079[1], 0, i1078, 'm_Font')
  i1078.m_FontSize = i1079[2]
  i1078.m_FontStyle = i1079[3]
  i1078.m_BestFit = !!i1079[4]
  i1078.m_MinSize = i1079[5]
  i1078.m_MaxSize = i1079[6]
  i1078.m_Alignment = i1079[7]
  i1078.m_AlignByGeometry = !!i1079[8]
  i1078.m_RichText = !!i1079[9]
  i1078.m_HorizontalOverflow = i1079[10]
  i1078.m_VerticalOverflow = i1079[11]
  i1078.m_LineSpacing = i1079[12]
  return i1078
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1080 = root || request.c( 'UnityEngine.UI.Button' )
  var i1081 = data
  i1080.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1081[0], i1080.m_OnClick)
  i1080.m_Navigation = request.d('UnityEngine.UI.Navigation', i1081[1], i1080.m_Navigation)
  i1080.m_Transition = i1081[2]
  i1080.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1081[3], i1080.m_Colors)
  i1080.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1081[4], i1080.m_SpriteState)
  i1080.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1081[5], i1080.m_AnimationTriggers)
  i1080.m_Interactable = !!i1081[6]
  request.r(i1081[7], i1081[8], 0, i1080, 'm_TargetGraphic')
  return i1080
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1082 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1083 = data
  i1082.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1083[0], i1082.m_PersistentCalls)
  return i1082
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1084 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1085 = data
  i1084.m_Mode = i1085[0]
  i1084.m_WrapAround = !!i1085[1]
  request.r(i1085[2], i1085[3], 0, i1084, 'm_SelectOnUp')
  request.r(i1085[4], i1085[5], 0, i1084, 'm_SelectOnDown')
  request.r(i1085[6], i1085[7], 0, i1084, 'm_SelectOnLeft')
  request.r(i1085[8], i1085[9], 0, i1084, 'm_SelectOnRight')
  return i1084
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1086 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1087 = data
  i1086.m_NormalColor = new pc.Color(i1087[0], i1087[1], i1087[2], i1087[3])
  i1086.m_HighlightedColor = new pc.Color(i1087[4], i1087[5], i1087[6], i1087[7])
  i1086.m_PressedColor = new pc.Color(i1087[8], i1087[9], i1087[10], i1087[11])
  i1086.m_SelectedColor = new pc.Color(i1087[12], i1087[13], i1087[14], i1087[15])
  i1086.m_DisabledColor = new pc.Color(i1087[16], i1087[17], i1087[18], i1087[19])
  i1086.m_ColorMultiplier = i1087[20]
  i1086.m_FadeDuration = i1087[21]
  return i1086
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1088 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1089 = data
  request.r(i1089[0], i1089[1], 0, i1088, 'm_HighlightedSprite')
  request.r(i1089[2], i1089[3], 0, i1088, 'm_PressedSprite')
  request.r(i1089[4], i1089[5], 0, i1088, 'm_SelectedSprite')
  request.r(i1089[6], i1089[7], 0, i1088, 'm_DisabledSprite')
  return i1088
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1090 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1091 = data
  i1090.m_NormalTrigger = i1091[0]
  i1090.m_HighlightedTrigger = i1091[1]
  i1090.m_PressedTrigger = i1091[2]
  i1090.m_SelectedTrigger = i1091[3]
  i1090.m_DisabledTrigger = i1091[4]
  return i1090
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i1092 = root || request.c( 'PlayableHudRuntime' )
  var i1093 = data
  return i1092
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1094 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1095 = data
  request.r(i1095[0], i1095[1], 0, i1094, 'm_FirstSelected')
  i1094.m_sendNavigationEvents = !!i1095[2]
  i1094.m_DragThreshold = i1095[3]
  return i1094
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1096 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1097 = data
  i1096.m_HorizontalAxis = i1097[0]
  i1096.m_VerticalAxis = i1097[1]
  i1096.m_SubmitButton = i1097[2]
  i1096.m_CancelButton = i1097[3]
  i1096.m_InputActionsPerSecond = i1097[4]
  i1096.m_RepeatDelay = i1097[5]
  i1096.m_ForceModuleActive = !!i1097[6]
  i1096.m_SendPointerHoverToParent = !!i1097[7]
  return i1096
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i1098 = root || request.c( 'PlayableRouter' )
  var i1099 = data
  var i1101 = i1099[0]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 2) {
  request.r(i1101[i + 0], i1101[i + 1], 2, i1100, '')
  }
  i1098.menuObjects = i1100
  var i1103 = i1099[1]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 2) {
  request.r(i1103[i + 0], i1103[i + 1], 2, i1102, '')
  }
  i1098.gameplayObjects = i1102
  var i1105 = i1099[2]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('PlayableRouter+SubLevelSlot', i1105[i + 0]) );
  }
  i1098.subLevels = i1104
  i1098.fadeDuration = i1099[3]
  i1098.onMenuClosing = request.d('UnityEngine.Events.UnityEvent', i1099[4], i1098.onMenuClosing)
  i1098.lockedMessage = i1099[5]
  i1098.lockedTapsToCTA = i1099[6]
  return i1098
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i1108 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i1109 = data
  request.r(i1109[0], i1109[1], 0, i1108, 'button')
  request.r(i1109[2], i1109[3], 0, i1108, 'level')
  return i1108
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i1110 = root || request.c( 'ToastManager' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'toastPanel')
  request.r(i1111[2], i1111[3], 0, i1110, 'toastPopup')
  request.r(i1111[4], i1111[5], 0, i1110, 'canvasGroup')
  request.r(i1111[6], i1111[7], 0, i1110, 'toastText')
  i1110.startY = i1111[8]
  i1110.visibleY = i1111[9]
  i1110.endY = i1111[10]
  i1110.animationTime = i1111[11]
  i1110.animationTimeUp = i1111[12]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1113 = data
  i1112.m_Alpha = i1113[0]
  i1112.m_Interactable = !!i1113[1]
  i1112.m_BlocksRaycasts = !!i1113[2]
  i1112.m_IgnoreParentGroups = !!i1113[3]
  i1112.enabled = !!i1113[4]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1115 = data
  i1114.ambientIntensity = i1115[0]
  i1114.reflectionIntensity = i1115[1]
  i1114.ambientMode = i1115[2]
  i1114.ambientLight = new pc.Color(i1115[3], i1115[4], i1115[5], i1115[6])
  i1114.ambientSkyColor = new pc.Color(i1115[7], i1115[8], i1115[9], i1115[10])
  i1114.ambientGroundColor = new pc.Color(i1115[11], i1115[12], i1115[13], i1115[14])
  i1114.ambientEquatorColor = new pc.Color(i1115[15], i1115[16], i1115[17], i1115[18])
  i1114.fogColor = new pc.Color(i1115[19], i1115[20], i1115[21], i1115[22])
  i1114.fogEndDistance = i1115[23]
  i1114.fogStartDistance = i1115[24]
  i1114.fogDensity = i1115[25]
  i1114.fog = !!i1115[26]
  request.r(i1115[27], i1115[28], 0, i1114, 'skybox')
  i1114.fogMode = i1115[29]
  var i1117 = i1115[30]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1117[i + 0]) );
  }
  i1114.lightmaps = i1116
  i1114.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1115[31], i1114.lightProbes)
  i1114.lightmapsMode = i1115[32]
  i1114.mixedBakeMode = i1115[33]
  i1114.environmentLightingMode = i1115[34]
  i1114.ambientProbe = new pc.SphericalHarmonicsL2(i1115[35])
  request.r(i1115[36], i1115[37], 0, i1114, 'customReflection')
  request.r(i1115[38], i1115[39], 0, i1114, 'defaultReflection')
  i1114.defaultReflectionMode = i1115[40]
  i1114.defaultReflectionResolution = i1115[41]
  i1114.sunLightObjectId = i1115[42]
  i1114.pixelLightCount = i1115[43]
  i1114.defaultReflectionHDR = !!i1115[44]
  i1114.hasLightDataAsset = !!i1115[45]
  i1114.hasManualGenerate = !!i1115[46]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1121 = data
  request.r(i1121[0], i1121[1], 0, i1120, 'lightmapColor')
  request.r(i1121[2], i1121[3], 0, i1120, 'lightmapDirection')
  request.r(i1121[4], i1121[5], 0, i1120, 'shadowMask')
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1122 = root || new UnityEngine.LightProbes()
  var i1123 = data
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i1129 = data
  i1128.name = i1129[0]
  i1128.bounciness = i1129[1]
  i1128.friction = i1129[2]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1131 = data
  var i1133 = i1131[0]
  var i1132 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1133[i + 0]));
  }
  i1130.ShaderCompilationErrors = i1132
  i1130.name = i1131[1]
  i1130.guid = i1131[2]
  var i1135 = i1131[3]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( i1135[i + 0] );
  }
  i1130.shaderDefinedKeywords = i1134
  var i1137 = i1131[4]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1137[i + 0]) );
  }
  i1130.passes = i1136
  var i1139 = i1131[5]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1139[i + 0]) );
  }
  i1130.usePasses = i1138
  var i1141 = i1131[6]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1141[i + 0]) );
  }
  i1130.defaultParameterValues = i1140
  request.r(i1131[7], i1131[8], 0, i1130, 'unityFallbackShader')
  i1130.readDepth = !!i1131[9]
  i1130.hasDepthOnlyPass = !!i1131[10]
  i1130.isCreatedByShaderGraph = !!i1131[11]
  i1130.disableBatching = !!i1131[12]
  i1130.compiled = !!i1131[13]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1145 = data
  i1144.shaderName = i1145[0]
  i1144.errorMessage = i1145[1]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1150 = root || new pc.UnityShaderPass()
  var i1151 = data
  i1150.id = i1151[0]
  i1150.subShaderIndex = i1151[1]
  i1150.name = i1151[2]
  i1150.passType = i1151[3]
  i1150.grabPassTextureName = i1151[4]
  i1150.usePass = !!i1151[5]
  i1150.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1151[6], i1150.zTest)
  i1150.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1151[7], i1150.zWrite)
  i1150.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1151[8], i1150.culling)
  i1150.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1151[9], i1150.blending)
  i1150.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1151[10], i1150.alphaBlending)
  i1150.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1151[11], i1150.colorWriteMask)
  i1150.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1151[12], i1150.offsetUnits)
  i1150.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1151[13], i1150.offsetFactor)
  i1150.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1151[14], i1150.stencilRef)
  i1150.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1151[15], i1150.stencilReadMask)
  i1150.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1151[16], i1150.stencilWriteMask)
  i1150.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1151[17], i1150.stencilOp)
  i1150.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1151[18], i1150.stencilOpFront)
  i1150.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1151[19], i1150.stencilOpBack)
  var i1153 = i1151[20]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1153[i + 0]) );
  }
  i1150.tags = i1152
  var i1155 = i1151[21]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( i1155[i + 0] );
  }
  i1150.passDefinedKeywords = i1154
  var i1157 = i1151[22]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1157[i + 0]) );
  }
  i1150.passDefinedKeywordGroups = i1156
  var i1159 = i1151[23]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1159[i + 0]) );
  }
  i1150.variants = i1158
  var i1161 = i1151[24]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1161[i + 0]) );
  }
  i1150.excludedVariants = i1160
  i1150.hasDepthReader = !!i1151[25]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1163 = data
  i1162.val = i1163[0]
  i1162.name = i1163[1]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1165 = data
  i1164.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1165[0], i1164.src)
  i1164.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1165[1], i1164.dst)
  i1164.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1165[2], i1164.op)
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1167 = data
  i1166.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1167[0], i1166.pass)
  i1166.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1167[1], i1166.fail)
  i1166.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1167[2], i1166.zFail)
  i1166.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1167[3], i1166.comp)
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1171 = data
  i1170.name = i1171[0]
  i1170.value = i1171[1]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1175 = data
  var i1177 = i1175[0]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( i1177[i + 0] );
  }
  i1174.keywords = i1176
  i1174.hasDiscard = !!i1175[1]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1181 = data
  i1180.passId = i1181[0]
  i1180.subShaderIndex = i1181[1]
  var i1183 = i1181[2]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( i1183[i + 0] );
  }
  i1180.keywords = i1182
  i1180.vertexProgram = i1181[3]
  i1180.fragmentProgram = i1181[4]
  i1180.exportedForWebGl2 = !!i1181[5]
  i1180.readDepth = !!i1181[6]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1187 = data
  request.r(i1187[0], i1187[1], 0, i1186, 'shader')
  i1186.pass = i1187[2]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1191 = data
  i1190.name = i1191[0]
  i1190.type = i1191[1]
  i1190.value = new pc.Vec4( i1191[2], i1191[3], i1191[4], i1191[5] )
  i1190.textureValue = i1191[6]
  i1190.shaderPropertyFlag = i1191[7]
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1193 = data
  i1192.name = i1193[0]
  request.r(i1193[1], i1193[2], 0, i1192, 'texture')
  i1192.aabb = i1193[3]
  i1192.vertices = i1193[4]
  i1192.triangles = i1193[5]
  i1192.textureRect = UnityEngine.Rect.MinMaxRect(i1193[6], i1193[7], i1193[8], i1193[9])
  i1192.packedRect = UnityEngine.Rect.MinMaxRect(i1193[10], i1193[11], i1193[12], i1193[13])
  i1192.border = new pc.Vec4( i1193[14], i1193[15], i1193[16], i1193[17] )
  i1192.transparency = i1193[18]
  i1192.bounds = i1193[19]
  i1192.pixelsPerUnit = i1193[20]
  i1192.textureWidth = i1193[21]
  i1192.textureHeight = i1193[22]
  i1192.nativeSize = new pc.Vec2( i1193[23], i1193[24] )
  i1192.pivot = new pc.Vec2( i1193[25], i1193[26] )
  i1192.textureRectOffset = new pc.Vec2( i1193[27], i1193[28] )
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1195 = data
  i1194.name = i1195[0]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1197 = data
  i1196.name = i1197[0]
  i1196.wrapMode = i1197[1]
  i1196.isLooping = !!i1197[2]
  i1196.length = i1197[3]
  var i1199 = i1197[4]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1199[i + 0]) );
  }
  i1196.curves = i1198
  var i1201 = i1197[5]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1201[i + 0]) );
  }
  i1196.events = i1200
  i1196.halfPrecision = !!i1197[6]
  i1196._frameRate = i1197[7]
  i1196.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1197[8], i1196.localBounds)
  i1196.hasMuscleCurves = !!i1197[9]
  var i1203 = i1197[10]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( i1203[i + 0] );
  }
  i1196.clipMuscleConstant = i1202
  i1196.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1197[11], i1196.clipBindingConstant)
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1207 = data
  i1206.path = i1207[0]
  i1206.hash = i1207[1]
  i1206.componentType = i1207[2]
  i1206.property = i1207[3]
  i1206.keys = i1207[4]
  var i1209 = i1207[5]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1209[i + 0]) );
  }
  i1206.objectReferenceKeys = i1208
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1213 = data
  i1212.time = i1213[0]
  request.r(i1213[1], i1213[2], 0, i1212, 'value')
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1217 = data
  i1216.functionName = i1217[0]
  i1216.floatParameter = i1217[1]
  i1216.intParameter = i1217[2]
  i1216.stringParameter = i1217[3]
  request.r(i1217[4], i1217[5], 0, i1216, 'objectReferenceParameter')
  i1216.time = i1217[6]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1219 = data
  i1218.center = new pc.Vec3( i1219[0], i1219[1], i1219[2] )
  i1218.extends = new pc.Vec3( i1219[3], i1219[4], i1219[5] )
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1223 = data
  var i1225 = i1223[0]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( i1225[i + 0] );
  }
  i1222.genericBindings = i1224
  var i1227 = i1223[1]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( i1227[i + 0] );
  }
  i1222.pptrCurveMapping = i1226
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1229 = data
  i1228.name = i1229[0]
  i1228.ascent = i1229[1]
  i1228.originalLineHeight = i1229[2]
  i1228.fontSize = i1229[3]
  var i1231 = i1229[4]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1231[i + 0]) );
  }
  i1228.characterInfo = i1230
  request.r(i1229[5], i1229[6], 0, i1228, 'texture')
  i1228.originalFontSize = i1229[7]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1235 = data
  i1234.index = i1235[0]
  i1234.advance = i1235[1]
  i1234.bearing = i1235[2]
  i1234.glyphWidth = i1235[3]
  i1234.glyphHeight = i1235[4]
  i1234.minX = i1235[5]
  i1234.maxX = i1235[6]
  i1234.minY = i1235[7]
  i1234.maxY = i1235[8]
  i1234.uvBottomLeftX = i1235[9]
  i1234.uvBottomLeftY = i1235[10]
  i1234.uvBottomRightX = i1235[11]
  i1234.uvBottomRightY = i1235[12]
  i1234.uvTopLeftX = i1235[13]
  i1234.uvTopLeftY = i1235[14]
  i1234.uvTopRightX = i1235[15]
  i1234.uvTopRightY = i1235[16]
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1237 = data
  i1236.name = i1237[0]
  var i1239 = i1237[1]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1239[i + 0]) );
  }
  i1236.layers = i1238
  var i1241 = i1237[2]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1241[i + 0]) );
  }
  i1236.parameters = i1240
  i1236.animationClips = i1237[3]
  i1236.avatarUnsupported = i1237[4]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1245 = data
  i1244.name = i1245[0]
  i1244.defaultWeight = i1245[1]
  i1244.blendingMode = i1245[2]
  i1244.avatarMask = i1245[3]
  i1244.syncedLayerIndex = i1245[4]
  i1244.syncedLayerAffectsTiming = !!i1245[5]
  i1244.syncedLayers = i1245[6]
  i1244.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1245[7], i1244.stateMachine)
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1247 = data
  i1246.id = i1247[0]
  i1246.name = i1247[1]
  i1246.path = i1247[2]
  var i1249 = i1247[3]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1249[i + 0]) );
  }
  i1246.states = i1248
  var i1251 = i1247[4]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1251[i + 0]) );
  }
  i1246.machines = i1250
  var i1253 = i1247[5]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1253[i + 0]) );
  }
  i1246.entryStateTransitions = i1252
  var i1255 = i1247[6]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1255[i + 0]) );
  }
  i1246.exitStateTransitions = i1254
  var i1257 = i1247[7]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1257[i + 0]) );
  }
  i1246.anyStateTransitions = i1256
  i1246.defaultStateId = i1247[8]
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1261 = data
  i1260.id = i1261[0]
  i1260.name = i1261[1]
  i1260.cycleOffset = i1261[2]
  i1260.cycleOffsetParameter = i1261[3]
  i1260.cycleOffsetParameterActive = !!i1261[4]
  i1260.mirror = !!i1261[5]
  i1260.mirrorParameter = i1261[6]
  i1260.mirrorParameterActive = !!i1261[7]
  i1260.motionId = i1261[8]
  i1260.nameHash = i1261[9]
  i1260.fullPathHash = i1261[10]
  i1260.speed = i1261[11]
  i1260.speedParameter = i1261[12]
  i1260.speedParameterActive = !!i1261[13]
  i1260.tag = i1261[14]
  i1260.tagHash = i1261[15]
  i1260.writeDefaultValues = !!i1261[16]
  var i1263 = i1261[17]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 2) {
  request.r(i1263[i + 0], i1263[i + 1], 2, i1262, '')
  }
  i1260.behaviours = i1262
  var i1265 = i1261[18]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1265[i + 0]) );
  }
  i1260.transitions = i1264
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1271 = data
  i1270.fullPath = i1271[0]
  i1270.canTransitionToSelf = !!i1271[1]
  i1270.duration = i1271[2]
  i1270.exitTime = i1271[3]
  i1270.hasExitTime = !!i1271[4]
  i1270.hasFixedDuration = !!i1271[5]
  i1270.interruptionSource = i1271[6]
  i1270.offset = i1271[7]
  i1270.orderedInterruption = !!i1271[8]
  i1270.destinationStateId = i1271[9]
  i1270.isExit = !!i1271[10]
  i1270.mute = !!i1271[11]
  i1270.solo = !!i1271[12]
  var i1273 = i1271[13]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1273[i + 0]) );
  }
  i1270.conditions = i1272
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1279 = data
  i1278.destinationStateId = i1279[0]
  i1278.isExit = !!i1279[1]
  i1278.mute = !!i1279[2]
  i1278.solo = !!i1279[3]
  var i1281 = i1279[4]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1281[i + 0]) );
  }
  i1278.conditions = i1280
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1285 = data
  i1284.mode = i1285[0]
  i1284.parameter = i1285[1]
  i1284.threshold = i1285[2]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1289 = data
  i1288.defaultBool = !!i1289[0]
  i1288.defaultFloat = i1289[1]
  i1288.defaultInt = i1289[2]
  i1288.name = i1289[3]
  i1288.nameHash = i1289[4]
  i1288.type = i1289[5]
  return i1288
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1290 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1291 = data
  i1290.useSafeMode = !!i1291[0]
  i1290.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1291[1], i1290.safeModeOptions)
  i1290.timeScale = i1291[2]
  i1290.unscaledTimeScale = i1291[3]
  i1290.useSmoothDeltaTime = !!i1291[4]
  i1290.maxSmoothUnscaledTime = i1291[5]
  i1290.rewindCallbackMode = i1291[6]
  i1290.showUnityEditorReport = !!i1291[7]
  i1290.logBehaviour = i1291[8]
  i1290.drawGizmos = !!i1291[9]
  i1290.defaultRecyclable = !!i1291[10]
  i1290.defaultAutoPlay = i1291[11]
  i1290.defaultUpdateType = i1291[12]
  i1290.defaultTimeScaleIndependent = !!i1291[13]
  i1290.defaultEaseType = i1291[14]
  i1290.defaultEaseOvershootOrAmplitude = i1291[15]
  i1290.defaultEasePeriod = i1291[16]
  i1290.defaultAutoKill = !!i1291[17]
  i1290.defaultLoopType = i1291[18]
  i1290.debugMode = !!i1291[19]
  i1290.debugStoreTargetId = !!i1291[20]
  i1290.showPreviewPanel = !!i1291[21]
  i1290.storeSettingsLocation = i1291[22]
  i1290.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1291[23], i1290.modules)
  i1290.createASMDEF = !!i1291[24]
  i1290.showPlayingTweens = !!i1291[25]
  i1290.showPausedTweens = !!i1291[26]
  return i1290
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1292 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1293 = data
  i1292.logBehaviour = i1293[0]
  i1292.nestedTweenFailureBehaviour = i1293[1]
  return i1292
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1294 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1295 = data
  i1294.showPanel = !!i1295[0]
  i1294.audioEnabled = !!i1295[1]
  i1294.physicsEnabled = !!i1295[2]
  i1294.physics2DEnabled = !!i1295[3]
  i1294.spriteEnabled = !!i1295[4]
  i1294.uiEnabled = !!i1295[5]
  i1294.textMeshProEnabled = !!i1295[6]
  i1294.tk2DEnabled = !!i1295[7]
  i1294.deAudioEnabled = !!i1295[8]
  i1294.deUnityExtendedEnabled = !!i1295[9]
  i1294.epoOutlineEnabled = !!i1295[10]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1297 = data
  var i1299 = i1297[0]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1299[i + 0]) );
  }
  i1296.files = i1298
  i1296.componentToPrefabIds = i1297[1]
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1303 = data
  i1302.path = i1303[0]
  request.r(i1303[1], i1303[2], 0, i1302, 'unityObject')
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1305 = data
  var i1307 = i1305[0]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1307[i + 0]) );
  }
  i1304.scriptsExecutionOrder = i1306
  var i1309 = i1305[1]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1309[i + 0]) );
  }
  i1304.sortingLayers = i1308
  var i1311 = i1305[2]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1311[i + 0]) );
  }
  i1304.cullingLayers = i1310
  i1304.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1305[3], i1304.timeSettings)
  i1304.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1305[4], i1304.physicsSettings)
  i1304.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1305[5], i1304.physics2DSettings)
  i1304.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1305[6], i1304.qualitySettings)
  i1304.enableRealtimeShadows = !!i1305[7]
  i1304.enableAutoInstancing = !!i1305[8]
  i1304.enableStaticBatching = !!i1305[9]
  i1304.enableDynamicBatching = !!i1305[10]
  i1304.usePreservativeDynamicBatching = !!i1305[11]
  i1304.lightmapEncodingQuality = i1305[12]
  i1304.desiredColorSpace = i1305[13]
  var i1313 = i1305[14]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( i1313[i + 0] );
  }
  i1304.allTags = i1312
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1317 = data
  i1316.name = i1317[0]
  i1316.value = i1317[1]
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1321 = data
  i1320.id = i1321[0]
  i1320.name = i1321[1]
  i1320.value = i1321[2]
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1325 = data
  i1324.id = i1325[0]
  i1324.name = i1325[1]
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1327 = data
  i1326.fixedDeltaTime = i1327[0]
  i1326.maximumDeltaTime = i1327[1]
  i1326.timeScale = i1327[2]
  i1326.maximumParticleTimestep = i1327[3]
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1329 = data
  i1328.gravity = new pc.Vec3( i1329[0], i1329[1], i1329[2] )
  i1328.defaultSolverIterations = i1329[3]
  i1328.bounceThreshold = i1329[4]
  i1328.autoSyncTransforms = !!i1329[5]
  i1328.autoSimulation = !!i1329[6]
  var i1331 = i1329[7]
  var i1330 = []
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1331[i + 0]) );
  }
  i1328.collisionMatrix = i1330
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1335 = data
  i1334.enabled = !!i1335[0]
  i1334.layerId = i1335[1]
  i1334.otherLayerId = i1335[2]
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1337 = data
  request.r(i1337[0], i1337[1], 0, i1336, 'material')
  i1336.gravity = new pc.Vec2( i1337[2], i1337[3] )
  i1336.positionIterations = i1337[4]
  i1336.velocityIterations = i1337[5]
  i1336.velocityThreshold = i1337[6]
  i1336.maxLinearCorrection = i1337[7]
  i1336.maxAngularCorrection = i1337[8]
  i1336.maxTranslationSpeed = i1337[9]
  i1336.maxRotationSpeed = i1337[10]
  i1336.baumgarteScale = i1337[11]
  i1336.baumgarteTOIScale = i1337[12]
  i1336.timeToSleep = i1337[13]
  i1336.linearSleepTolerance = i1337[14]
  i1336.angularSleepTolerance = i1337[15]
  i1336.defaultContactOffset = i1337[16]
  i1336.autoSimulation = !!i1337[17]
  i1336.queriesHitTriggers = !!i1337[18]
  i1336.queriesStartInColliders = !!i1337[19]
  i1336.callbacksOnDisable = !!i1337[20]
  i1336.reuseCollisionCallbacks = !!i1337[21]
  i1336.autoSyncTransforms = !!i1337[22]
  var i1339 = i1337[23]
  var i1338 = []
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1339[i + 0]) );
  }
  i1336.collisionMatrix = i1338
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1343 = data
  i1342.enabled = !!i1343[0]
  i1342.layerId = i1343[1]
  i1342.otherLayerId = i1343[2]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1345 = data
  var i1347 = i1345[0]
  var i1346 = []
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1347[i + 0]) );
  }
  i1344.qualityLevels = i1346
  var i1349 = i1345[1]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( i1349[i + 0] );
  }
  i1344.names = i1348
  i1344.shadows = i1345[2]
  i1344.anisotropicFiltering = i1345[3]
  i1344.antiAliasing = i1345[4]
  i1344.lodBias = i1345[5]
  i1344.shadowCascades = i1345[6]
  i1344.shadowDistance = i1345[7]
  i1344.shadowmaskMode = i1345[8]
  i1344.shadowProjection = i1345[9]
  i1344.shadowResolution = i1345[10]
  i1344.softParticles = !!i1345[11]
  i1344.softVegetation = !!i1345[12]
  i1344.activeColorSpace = i1345[13]
  i1344.desiredColorSpace = i1345[14]
  i1344.masterTextureLimit = i1345[15]
  i1344.maxQueuedFrames = i1345[16]
  i1344.particleRaycastBudget = i1345[17]
  i1344.pixelLightCount = i1345[18]
  i1344.realtimeReflectionProbes = !!i1345[19]
  i1344.shadowCascade2Split = i1345[20]
  i1344.shadowCascade4Split = new pc.Vec3( i1345[21], i1345[22], i1345[23] )
  i1344.streamingMipmapsActive = !!i1345[24]
  i1344.vSyncCount = i1345[25]
  i1344.asyncUploadBufferSize = i1345[26]
  i1344.asyncUploadTimeSlice = i1345[27]
  i1344.billboardsFaceCameraPosition = !!i1345[28]
  i1344.shadowNearPlaneOffset = i1345[29]
  i1344.streamingMipmapsMemoryBudget = i1345[30]
  i1344.maximumLODLevel = i1345[31]
  i1344.streamingMipmapsAddAllCameras = !!i1345[32]
  i1344.streamingMipmapsMaxLevelReduction = i1345[33]
  i1344.streamingMipmapsRenderersPerFrame = i1345[34]
  i1344.resolutionScalingFixedDPIFactor = i1345[35]
  i1344.streamingMipmapsMaxFileIORequests = i1345[36]
  i1344.currentQualityLevel = i1345[37]
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i1353 = data
  var i1355 = i1353[0]
  var i1354 = []
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i1355[i + 0]) );
  }
  i1352.groups = i1354
  var i1357 = i1353[1]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i1357[i + 0]) );
  }
  i1352.snapshots = i1356
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i1361 = data
  i1360.id = i1361[0]
  i1360.childGroupIds = i1361[1]
  i1360.name = i1361[2]
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i1365 = data
  i1364.id = i1365[0]
  var i1367 = i1365[1]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i1367[i + 0]) );
  }
  i1364.parameters = i1366
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i1371 = data
  i1370.name = i1371[0]
  i1370.value = i1371[1]
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1375 = data
  i1374.weight = i1375[0]
  i1374.vertices = i1375[1]
  i1374.normals = i1375[2]
  i1374.tangents = i1375[3]
  return i1374
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"edgeRadius":0,"points":1,"useAdjacentStartPoint":2,"adjacentStartPoint":3,"useAdjacentEndPoint":5,"adjacentEndPoint":6,"enabled":8,"isTrigger":9,"usedByEffector":10,"density":11,"offset":12,"material":14},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[87],"88":[54],"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[90],"97":[45],"98":[45],"99":[45],"100":[45],"101":[45],"102":[45],"103":[45],"104":[45],"105":[45],"106":[45],"107":[45],"108":[45],"109":[45],"110":[54],"111":[112],"113":[114],"115":[114],"65":[59],"116":[34],"40":[15],"117":[11],"118":[15],"119":[120],"121":[120],"122":[10],"21":[11],"123":[15],"19":[15],"124":[59],"125":[59],"68":[65],"60":[69,59],"126":[59],"67":[65],"127":[59],"128":[59],"129":[59],"130":[59],"131":[59],"132":[59],"133":[59],"134":[59],"135":[59],"136":[69,59],"137":[59],"138":[59],"139":[59],"140":[59],"61":[69,59],"141":[59],"142":[73],"143":[73],"74":[73],"144":[73],"145":[54],"146":[54]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","MenuLevel","UnityEngine.GameObject","DG.Tweening.DOTweenAnimation","UnityEngine.BoxCollider2D","UnityEngine.AudioClip","IntroLevelAnim","Level_PoseController","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.U2D.Animation.SpriteSkin","BD_AnimationHelper","SpriteButton","PlayableRouter","UnityEngine.TrailRenderer","Level1_Armpit_Playable","BasicDrag","BD_CameraFollow","ActionOnTap","UnityEngine.AudioSource","BD_Clamp","ScratchCardAsset.ScratchCardManager","PlayableCTA","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.LineRenderer","TextureOffsetScroller","UnityEditor.Audio.AudioMixerGroupController","PlaySfxOnCollision","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","BD_Fold","UnityEngine.PolygonCollider2D","UnityEngine.EdgeCollider2D","UnityEngine.PhysicsMaterial2D","JarRotator","UnityEngine.Rigidbody2D","UnityEngine.SpriteMask","Level1_Armpit_WaxCount","BD_AnimatorDrag","TapandHold_Simple","BD_Progress","BD_ToolRotate","PlaceItem","BD_Dropper","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "13.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "3Sept2026_CompleteLevel_1_4_v3";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1711";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4444";

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

Deserializers.buildID = "94547cf8-8b06-46c0-9ac8-766ef7f44c53";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

