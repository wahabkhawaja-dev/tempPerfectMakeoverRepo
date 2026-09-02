var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.JointSpring' )
  var i687 = data
  i686.spring = i687[0]
  i686.damper = i687[1]
  i686.targetPosition = i687[2]
  return i686
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.JointMotor' )
  var i689 = data
  i688.m_TargetVelocity = i689[0]
  i688.m_Force = i689[1]
  i688.m_FreeSpin = i689[2]
  return i688
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.JointLimits' )
  var i691 = data
  i690.m_Min = i691[0]
  i690.m_Max = i691[1]
  i690.m_Bounciness = i691[2]
  i690.m_BounceMinVelocity = i691[3]
  i690.m_ContactDistance = i691[4]
  i690.minBounce = i691[5]
  i690.maxBounce = i691[6]
  return i690
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.JointDrive' )
  var i693 = data
  i692.m_PositionSpring = i693[0]
  i692.m_PositionDamper = i693[1]
  i692.m_MaximumForce = i693[2]
  i692.m_UseAcceleration = i693[3]
  return i692
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i695 = data
  i694.m_Spring = i695[0]
  i694.m_Damper = i695[1]
  return i694
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i697 = data
  i696.m_Limit = i697[0]
  i696.m_Bounciness = i697[1]
  i696.m_ContactDistance = i697[2]
  return i696
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i699 = data
  i698.m_ExtremumSlip = i699[0]
  i698.m_ExtremumValue = i699[1]
  i698.m_AsymptoteSlip = i699[2]
  i698.m_AsymptoteValue = i699[3]
  i698.m_Stiffness = i699[4]
  return i698
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i701 = data
  i700.m_LowerAngle = i701[0]
  i700.m_UpperAngle = i701[1]
  return i700
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i703 = data
  i702.m_MotorSpeed = i703[0]
  i702.m_MaximumMotorTorque = i703[1]
  return i702
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i705 = data
  i704.m_DampingRatio = i705[0]
  i704.m_Frequency = i705[1]
  i704.m_Angle = i705[2]
  return i704
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i707 = data
  i706.m_LowerTranslation = i707[0]
  i706.m_UpperTranslation = i707[1]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i708 = root || new pc.UnityMaterial()
  var i709 = data
  i708.name = i709[0]
  request.r(i709[1], i709[2], 0, i708, 'shader')
  i708.renderQueue = i709[3]
  i708.enableInstancing = !!i709[4]
  var i711 = i709[5]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i711[i + 0]) );
  }
  i708.floatParameters = i710
  var i713 = i709[6]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i713[i + 0]) );
  }
  i708.colorParameters = i712
  var i715 = i709[7]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i715[i + 0]) );
  }
  i708.vectorParameters = i714
  var i717 = i709[8]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i717[i + 0]) );
  }
  i708.textureParameters = i716
  var i719 = i709[9]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i719[i + 0]) );
  }
  i708.materialFlags = i718
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i723 = data
  i722.name = i723[0]
  i722.value = i723[1]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i727 = data
  i726.name = i727[0]
  i726.value = new pc.Color(i727[1], i727[2], i727[3], i727[4])
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i731 = data
  i730.name = i731[0]
  i730.value = new pc.Vec4( i731[1], i731[2], i731[3], i731[4] )
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i735 = data
  i734.name = i735[0]
  request.r(i735[1], i735[2], 0, i734, 'value')
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i739 = data
  i738.name = i739[0]
  i738.enabled = !!i739[1]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i741 = data
  i740.name = i741[0]
  i740.width = i741[1]
  i740.height = i741[2]
  i740.mipmapCount = i741[3]
  i740.anisoLevel = i741[4]
  i740.filterMode = i741[5]
  i740.hdr = !!i741[6]
  i740.format = i741[7]
  i740.wrapMode = i741[8]
  i740.alphaIsTransparency = !!i741[9]
  i740.alphaSource = i741[10]
  i740.graphicsFormat = i741[11]
  i740.sRGBTexture = !!i741[12]
  i740.desiredColorSpace = i741[13]
  i740.wrapU = i741[14]
  i740.wrapV = i741[15]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i743 = data
  i742.name = i743[0]
  i742.halfPrecision = !!i743[1]
  i742.useSimplification = !!i743[2]
  i742.useUInt32IndexFormat = !!i743[3]
  i742.vertexCount = i743[4]
  i742.aabb = i743[5]
  var i745 = i743[6]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( !!i745[i + 0] );
  }
  i742.streams = i744
  i742.vertices = i743[7]
  var i747 = i743[8]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i747[i + 0]) );
  }
  i742.subMeshes = i746
  var i749 = i743[9]
  var i748 = []
  for(var i = 0; i < i749.length; i += 16) {
    i748.push( new pc.Mat4().setData(i749[i + 0], i749[i + 1], i749[i + 2], i749[i + 3],  i749[i + 4], i749[i + 5], i749[i + 6], i749[i + 7],  i749[i + 8], i749[i + 9], i749[i + 10], i749[i + 11],  i749[i + 12], i749[i + 13], i749[i + 14], i749[i + 15]) );
  }
  i742.bindposes = i748
  var i751 = i743[10]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i751[i + 0]) );
  }
  i742.blendShapes = i750
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i757 = data
  i756.triangles = i757[0]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i763 = data
  i762.name = i763[0]
  var i765 = i763[1]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i765[i + 0]) );
  }
  i762.frames = i764
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i767 = data
  i766.position = new pc.Vec3( i767[0], i767[1], i767[2] )
  i766.scale = new pc.Vec3( i767[3], i767[4], i767[5] )
  i766.rotation = new pc.Quat(i767[6], i767[7], i767[8], i767[9])
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i769 = data
  i768.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i769[0], i768.main)
  i768.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i769[1], i768.colorBySpeed)
  i768.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i769[2], i768.colorOverLifetime)
  i768.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i769[3], i768.emission)
  i768.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i769[4], i768.rotationBySpeed)
  i768.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i769[5], i768.rotationOverLifetime)
  i768.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i769[6], i768.shape)
  i768.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i769[7], i768.sizeBySpeed)
  i768.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i769[8], i768.sizeOverLifetime)
  i768.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i769[9], i768.textureSheetAnimation)
  i768.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i769[10], i768.velocityOverLifetime)
  i768.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i769[11], i768.noise)
  i768.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i769[12], i768.inheritVelocity)
  i768.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i769[13], i768.forceOverLifetime)
  i768.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i769[14], i768.limitVelocityOverLifetime)
  i768.useAutoRandomSeed = !!i769[15]
  i768.randomSeed = i769[16]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemMain()
  var i771 = data
  i770.duration = i771[0]
  i770.loop = !!i771[1]
  i770.prewarm = !!i771[2]
  i770.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[3], i770.startDelay)
  i770.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[4], i770.startLifetime)
  i770.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[5], i770.startSpeed)
  i770.startSize3D = !!i771[6]
  i770.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[7], i770.startSizeX)
  i770.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[8], i770.startSizeY)
  i770.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[9], i770.startSizeZ)
  i770.startRotation3D = !!i771[10]
  i770.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[11], i770.startRotationX)
  i770.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[12], i770.startRotationY)
  i770.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[13], i770.startRotationZ)
  i770.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i771[14], i770.startColor)
  i770.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[15], i770.gravityModifier)
  i770.simulationSpace = i771[16]
  request.r(i771[17], i771[18], 0, i770, 'customSimulationSpace')
  i770.simulationSpeed = i771[19]
  i770.useUnscaledTime = !!i771[20]
  i770.scalingMode = i771[21]
  i770.playOnAwake = !!i771[22]
  i770.maxParticles = i771[23]
  i770.emitterVelocityMode = i771[24]
  i770.stopAction = i771[25]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i772 = root || new pc.MinMaxCurve()
  var i773 = data
  i772.mode = i773[0]
  i772.curveMin = new pc.AnimationCurve( { keys_flow: i773[1] } )
  i772.curveMax = new pc.AnimationCurve( { keys_flow: i773[2] } )
  i772.curveMultiplier = i773[3]
  i772.constantMin = i773[4]
  i772.constantMax = i773[5]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i774 = root || new pc.MinMaxGradient()
  var i775 = data
  i774.mode = i775[0]
  i774.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i775[1], i774.gradientMin)
  i774.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i775[2], i774.gradientMax)
  i774.colorMin = new pc.Color(i775[3], i775[4], i775[5], i775[6])
  i774.colorMax = new pc.Color(i775[7], i775[8], i775[9], i775[10])
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i777 = data
  i776.mode = i777[0]
  var i779 = i777[1]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i779[i + 0]) );
  }
  i776.colorKeys = i778
  var i781 = i777[2]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i781[i + 0]) );
  }
  i776.alphaKeys = i780
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemColorBySpeed()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i783[1], i782.color)
  i782.range = new pc.Vec2( i783[2], i783[3] )
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i787 = data
  i786.color = new pc.Color(i787[0], i787[1], i787[2], i787[3])
  i786.time = i787[4]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i791 = data
  i790.alpha = i791[0]
  i790.time = i791[1]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemColorOverLifetime()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i793[1], i792.color)
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemEmitter()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[1], i794.rateOverTime)
  i794.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.rateOverDistance)
  var i797 = i795[3]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i797[i + 0]) );
  }
  i794.bursts = i796
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemBurst()
  var i801 = data
  i800.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[0], i800.count)
  i800.cycleCount = i801[1]
  i800.minCount = i801[2]
  i800.maxCount = i801[3]
  i800.repeatInterval = i801[4]
  i800.time = i801[5]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemRotationBySpeed()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[1], i802.x)
  i802.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[2], i802.y)
  i802.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[3], i802.z)
  i802.separateAxes = !!i803[4]
  i802.range = new pc.Vec2( i803[5], i803[6] )
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemRotationOverLifetime()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[1], i804.x)
  i804.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[2], i804.y)
  i804.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[3], i804.z)
  i804.separateAxes = !!i805[4]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemShape()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.shapeType = i807[1]
  i806.randomDirectionAmount = i807[2]
  i806.sphericalDirectionAmount = i807[3]
  i806.randomPositionAmount = i807[4]
  i806.alignToDirection = !!i807[5]
  i806.radius = i807[6]
  i806.radiusMode = i807[7]
  i806.radiusSpread = i807[8]
  i806.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[9], i806.radiusSpeed)
  i806.radiusThickness = i807[10]
  i806.angle = i807[11]
  i806.length = i807[12]
  i806.boxThickness = new pc.Vec3( i807[13], i807[14], i807[15] )
  i806.meshShapeType = i807[16]
  request.r(i807[17], i807[18], 0, i806, 'mesh')
  request.r(i807[19], i807[20], 0, i806, 'meshRenderer')
  request.r(i807[21], i807[22], 0, i806, 'skinnedMeshRenderer')
  i806.useMeshMaterialIndex = !!i807[23]
  i806.meshMaterialIndex = i807[24]
  i806.useMeshColors = !!i807[25]
  i806.normalOffset = i807[26]
  i806.arc = i807[27]
  i806.arcMode = i807[28]
  i806.arcSpread = i807[29]
  i806.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[30], i806.arcSpeed)
  i806.donutRadius = i807[31]
  i806.position = new pc.Vec3( i807[32], i807[33], i807[34] )
  i806.rotation = new pc.Vec3( i807[35], i807[36], i807[37] )
  i806.scale = new pc.Vec3( i807[38], i807[39], i807[40] )
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemSizeBySpeed()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[1], i808.x)
  i808.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.y)
  i808.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[3], i808.z)
  i808.separateAxes = !!i809[4]
  i808.range = new pc.Vec2( i809[5], i809[6] )
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemSizeOverLifetime()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[1], i810.x)
  i810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.y)
  i810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.z)
  i810.separateAxes = !!i811[4]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.mode = i813[1]
  i812.animation = i813[2]
  i812.numTilesX = i813[3]
  i812.numTilesY = i813[4]
  i812.useRandomRow = !!i813[5]
  i812.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[6], i812.frameOverTime)
  i812.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[7], i812.startFrame)
  i812.cycleCount = i813[8]
  i812.rowIndex = i813[9]
  i812.flipU = i813[10]
  i812.flipV = i813[11]
  i812.spriteCount = i813[12]
  var i815 = i813[13]
  var i814 = []
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 2, i814, '')
  }
  i812.sprites = i814
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[1], i818.x)
  i818.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.y)
  i818.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[3], i818.z)
  i818.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[4], i818.radial)
  i818.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[5], i818.speedModifier)
  i818.space = i819[6]
  i818.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[7], i818.orbitalX)
  i818.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[8], i818.orbitalY)
  i818.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[9], i818.orbitalZ)
  i818.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[10], i818.orbitalOffsetX)
  i818.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[11], i818.orbitalOffsetY)
  i818.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[12], i818.orbitalOffsetZ)
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemNoise()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.separateAxes = !!i821[1]
  i820.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[2], i820.strengthX)
  i820.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[3], i820.strengthY)
  i820.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[4], i820.strengthZ)
  i820.frequency = i821[5]
  i820.damping = !!i821[6]
  i820.octaveCount = i821[7]
  i820.octaveMultiplier = i821[8]
  i820.octaveScale = i821[9]
  i820.quality = i821[10]
  i820.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[11], i820.scrollSpeed)
  i820.scrollSpeedMultiplier = i821[12]
  i820.remapEnabled = !!i821[13]
  i820.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[14], i820.remapX)
  i820.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[15], i820.remapY)
  i820.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[16], i820.remapZ)
  i820.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[17], i820.positionAmount)
  i820.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[18], i820.rotationAmount)
  i820.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[19], i820.sizeAmount)
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemInheritVelocity()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.mode = i823[1]
  i822.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[2], i822.curve)
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemForceOverLifetime()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[1], i824.x)
  i824.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[2], i824.y)
  i824.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[3], i824.z)
  i824.space = i825[4]
  i824.randomized = !!i825[5]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i826 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i827 = data
  i826.enabled = !!i827[0]
  i826.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[1], i826.limit)
  i826.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[2], i826.limitX)
  i826.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[3], i826.limitY)
  i826.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[4], i826.limitZ)
  i826.dampen = i827[5]
  i826.separateAxes = !!i827[6]
  i826.space = i827[7]
  i826.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i827[8], i826.drag)
  i826.multiplyDragByParticleSize = !!i827[9]
  i826.multiplyDragByParticleVelocity = !!i827[10]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'mesh')
  i828.meshCount = i829[2]
  i828.activeVertexStreamsCount = i829[3]
  i828.alignment = i829[4]
  i828.renderMode = i829[5]
  i828.sortMode = i829[6]
  i828.lengthScale = i829[7]
  i828.velocityScale = i829[8]
  i828.cameraVelocityScale = i829[9]
  i828.normalDirection = i829[10]
  i828.sortingFudge = i829[11]
  i828.minParticleSize = i829[12]
  i828.maxParticleSize = i829[13]
  i828.pivot = new pc.Vec3( i829[14], i829[15], i829[16] )
  request.r(i829[17], i829[18], 0, i828, 'trailMaterial')
  i828.applyActiveColorSpace = !!i829[19]
  i828.enabled = !!i829[20]
  request.r(i829[21], i829[22], 0, i828, 'sharedMaterial')
  var i831 = i829[23]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i828.sharedMaterials = i830
  i828.receiveShadows = !!i829[24]
  i828.shadowCastingMode = i829[25]
  i828.sortingLayerID = i829[26]
  i828.sortingOrder = i829[27]
  i828.lightmapIndex = i829[28]
  i828.lightmapSceneIndex = i829[29]
  i828.lightmapScaleOffset = new pc.Vec4( i829[30], i829[31], i829[32], i829[33] )
  i828.lightProbeUsage = i829[34]
  i828.reflectionProbeUsage = i829[35]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i835 = data
  i834.name = i835[0]
  i834.tagId = i835[1]
  i834.enabled = !!i835[2]
  i834.isStatic = !!i835[3]
  i834.layer = i835[4]
  return i834
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i836 = root || request.c( 'MenuLevel' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'menuLevelBtnUpdate')
  var i839 = i837[2]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('MenuLevelData', i839[i + 0]) );
  }
  i836.AllSteps = i838
  request.r(i837[3], i837[4], 0, i836, 'buttonparent')
  var i841 = i837[5]
  var i840 = []
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 2, i840, '')
  }
  i836.BtnsDotweenAnims = i840
  var i843 = i837[6]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i836.BtnsCols = i842
  request.r(i837[7], i837[8], 0, i836, 'mainGameView')
  request.r(i837[9], i837[10], 0, i836, 'Storyboard')
  request.r(i837[11], i837[12], 0, i836, 'BgMusic')
  request.r(i837[13], i837[14], 0, i836, 'BgStoryMusic')
  request.r(i837[15], i837[16], 0, i836, 'Hand_Tut1')
  request.r(i837[17], i837[18], 0, i836, 'Button_Hand')
  var i845 = i837[19]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i836.itemEnable_Onstart = i844
  var i847 = i837[20]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i836.itemDisable_Onstart = i846
  var i849 = i837[21]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i836.itemEnable_Oncomplete = i848
  var i851 = i837[22]
  var i850 = []
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 2, i850, '')
  }
  i836.itemDisable_Oncomplete = i850
  i836.levelKey = i837[23]
  i836.revealDirtyHoldTime = i837[24]
  return i836
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i854 = root || request.c( 'MenuLevelData' )
  var i855 = data
  i854.Name = i855[0]
  request.r(i855[1], i855[2], 0, i854, 'UiBtn')
  request.r(i855[3], i855[4], 0, i854, 'TickBtn')
  request.r(i855[5], i855[6], 0, i854, 'ExclamationIcon')
  var i857 = i855[7]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i854.Item_Dirty = i856
  var i859 = i855[8]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i854.Item_Clean = i858
  request.r(i855[9], i855[10], 0, i854, 'CompleteParticle')
  return i854
}

Deserializers["IntroLevelAnim"] = function (request, data, root) {
  var i866 = root || request.c( 'IntroLevelAnim' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'menuLevel')
  i866.lvlkey = i867[2]
  request.r(i867[3], i867[4], 0, i866, 'DressChangeObj')
  request.r(i867[5], i867[6], 0, i866, 'DressChangeClip')
  return i866
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i868 = root || request.c( 'Level_PoseController' )
  var i869 = data
  var i871 = i869[0]
  var i870 = []
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 2, i870, '')
  }
  i868.itemToShow = i870
  var i873 = i869[1]
  var i872 = []
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 2, i872, '')
  }
  i868.itemToHide = i872
  i868.stepTarget = i869[2]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i875 = data
  i874.color = new pc.Color(i875[0], i875[1], i875[2], i875[3])
  request.r(i875[4], i875[5], 0, i874, 'sprite')
  i874.flipX = !!i875[6]
  i874.flipY = !!i875[7]
  i874.drawMode = i875[8]
  i874.size = new pc.Vec2( i875[9], i875[10] )
  i874.tileMode = i875[11]
  i874.adaptiveModeThreshold = i875[12]
  i874.maskInteraction = i875[13]
  i874.spriteSortPoint = i875[14]
  i874.enabled = !!i875[15]
  request.r(i875[16], i875[17], 0, i874, 'sharedMaterial')
  var i877 = i875[18]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i874.sharedMaterials = i876
  i874.receiveShadows = !!i875[19]
  i874.shadowCastingMode = i875[20]
  i874.sortingLayerID = i875[21]
  i874.sortingOrder = i875[22]
  i874.lightmapIndex = i875[23]
  i874.lightmapSceneIndex = i875[24]
  i874.lightmapScaleOffset = new pc.Vec4( i875[25], i875[26], i875[27], i875[28] )
  i874.lightProbeUsage = i875[29]
  i874.reflectionProbeUsage = i875[30]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'animatorController')
  request.r(i879[2], i879[3], 0, i878, 'avatar')
  i878.updateMode = i879[4]
  i878.hasTransformHierarchy = !!i879[5]
  i878.applyRootMotion = !!i879[6]
  var i881 = i879[7]
  var i880 = []
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 2, i880, '')
  }
  i878.humanBones = i880
  i878.enabled = !!i879[8]
  return i878
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

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i888 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i889 = data
  i888.targetIsSelf = !!i889[0]
  request.r(i889[1], i889[2], 0, i888, 'targetGO')
  i888.tweenTargetIsTargetGO = !!i889[3]
  i888.delay = i889[4]
  i888.duration = i889[5]
  i888.easeType = i889[6]
  i888.easeCurve = new pc.AnimationCurve( { keys_flow: i889[7] } )
  i888.loopType = i889[8]
  i888.loops = i889[9]
  i888.id = i889[10]
  i888.isRelative = !!i889[11]
  i888.isFrom = !!i889[12]
  i888.isIndependentUpdate = !!i889[13]
  i888.autoKill = !!i889[14]
  i888.autoGenerate = !!i889[15]
  i888.isActive = !!i889[16]
  i888.isValid = !!i889[17]
  request.r(i889[18], i889[19], 0, i888, 'target')
  i888.animationType = i889[20]
  i888.targetType = i889[21]
  i888.forcedTargetType = i889[22]
  i888.autoPlay = !!i889[23]
  i888.useTargetAsV3 = !!i889[24]
  i888.endValueFloat = i889[25]
  i888.endValueV3 = new pc.Vec3( i889[26], i889[27], i889[28] )
  i888.endValueV2 = new pc.Vec2( i889[29], i889[30] )
  i888.endValueColor = new pc.Color(i889[31], i889[32], i889[33], i889[34])
  i888.endValueString = i889[35]
  i888.endValueRect = UnityEngine.Rect.MinMaxRect(i889[36], i889[37], i889[38], i889[39])
  request.r(i889[40], i889[41], 0, i888, 'endValueTransform')
  i888.optionalBool0 = !!i889[42]
  i888.optionalBool1 = !!i889[43]
  i888.optionalFloat0 = i889[44]
  i888.optionalInt0 = i889[45]
  i888.optionalRotationMode = i889[46]
  i888.optionalScrambleMode = i889[47]
  i888.optionalShakeRandomnessMode = i889[48]
  i888.optionalString = i889[49]
  i888.updateType = i889[50]
  i888.isSpeedBased = !!i889[51]
  i888.hasOnStart = !!i889[52]
  i888.hasOnPlay = !!i889[53]
  i888.hasOnUpdate = !!i889[54]
  i888.hasOnStepComplete = !!i889[55]
  i888.hasOnComplete = !!i889[56]
  i888.hasOnTweenCreated = !!i889[57]
  i888.hasOnRewind = !!i889[58]
  i888.onStart = request.d('UnityEngine.Events.UnityEvent', i889[59], i888.onStart)
  i888.onPlay = request.d('UnityEngine.Events.UnityEvent', i889[60], i888.onPlay)
  i888.onUpdate = request.d('UnityEngine.Events.UnityEvent', i889[61], i888.onUpdate)
  i888.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i889[62], i888.onStepComplete)
  i888.onComplete = request.d('UnityEngine.Events.UnityEvent', i889[63], i888.onComplete)
  i888.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i889[64], i888.onTweenCreated)
  i888.onRewind = request.d('UnityEngine.Events.UnityEvent', i889[65], i888.onRewind)
  return i888
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i890 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i891 = data
  i890.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i891[0], i890.m_PersistentCalls)
  return i890
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i893 = data
  var i895 = i893[0]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i895.length; i += 1) {
    i894.add(request.d('UnityEngine.Events.PersistentCall', i895[i + 0]));
  }
  i892.m_Calls = i894
  return i892
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'm_Target')
  i898.m_TargetAssemblyTypeName = i899[2]
  i898.m_MethodName = i899[3]
  i898.m_Mode = i899[4]
  i898.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i899[5], i898.m_Arguments)
  i898.m_CallState = i899[6]
  return i898
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i900 = root || request.c( 'BD_AnimationHelper' )
  var i901 = data
  i900.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i901[0], i900.OnAnimationComplete)
  request.r(i901[1], i901[2], 0, i900, 'sfxClip')
  return i900
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'm_ObjectArgument')
  i902.m_ObjectArgumentAssemblyTypeName = i903[2]
  i902.m_IntArgument = i903[3]
  i902.m_FloatArgument = i903[4]
  i902.m_StringArgument = i903[5]
  i902.m_BoolArgument = !!i903[6]
  return i902
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i904 = root || request.c( 'SpriteButton' )
  var i905 = data
  i904.isLocked = !!i905[0]
  i904.lockMsg = i905[1]
  i904.onClick = request.d('UnityEngine.Events.UnityEvent', i905[2], i904.onClick)
  i904.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i905[3], i904.onLockedClick)
  i904.isLevelBtnSfx = !!i905[4]
  request.r(i905[5], i905[6], 0, i904, 'pivot')
  i904.reductionChange = i905[7]
  i904.animationDuration = i905[8]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i907 = data
  i906.usedByComposite = !!i907[0]
  i906.autoTiling = !!i907[1]
  i906.size = new pc.Vec2( i907[2], i907[3] )
  i906.edgeRadius = i907[4]
  i906.enabled = !!i907[5]
  i906.isTrigger = !!i907[6]
  i906.usedByEffector = !!i907[7]
  i906.density = i907[8]
  i906.offset = new pc.Vec2( i907[9], i907[10] )
  request.r(i907[11], i907[12], 0, i906, 'material')
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i909 = data
  var i911 = i909[0]
  var i910 = []
  for(var i = 0; i < i911.length; i += 3) {
    i910.push( new pc.Vec3( i911[i + 0], i911[i + 1], i911[i + 2] ) );
  }
  i908.positions = i910
  i908.positionCount = i909[1]
  i908.time = i909[2]
  i908.startWidth = i909[3]
  i908.endWidth = i909[4]
  i908.widthMultiplier = i909[5]
  i908.autodestruct = !!i909[6]
  i908.emitting = !!i909[7]
  i908.numCornerVertices = i909[8]
  i908.numCapVertices = i909[9]
  i908.minVertexDistance = i909[10]
  i908.colorGradient = i909[11] ? new pc.ColorGradient(i909[11][0], i909[11][1], i909[11][2]) : null
  i908.startColor = new pc.Color(i909[12], i909[13], i909[14], i909[15])
  i908.endColor = new pc.Color(i909[16], i909[17], i909[18], i909[19])
  i908.generateLightingData = !!i909[20]
  i908.textureMode = i909[21]
  i908.alignment = i909[22]
  i908.widthCurve = new pc.AnimationCurve( { keys_flow: i909[23] } )
  i908.enabled = !!i909[24]
  request.r(i909[25], i909[26], 0, i908, 'sharedMaterial')
  var i913 = i909[27]
  var i912 = []
  for(var i = 0; i < i913.length; i += 2) {
  request.r(i913[i + 0], i913[i + 1], 2, i912, '')
  }
  i908.sharedMaterials = i912
  i908.receiveShadows = !!i909[28]
  i908.shadowCastingMode = i909[29]
  i908.sortingLayerID = i909[30]
  i908.sortingOrder = i909[31]
  i908.lightmapIndex = i909[32]
  i908.lightmapSceneIndex = i909[33]
  i908.lightmapScaleOffset = new pc.Vec4( i909[34], i909[35], i909[36], i909[37] )
  i908.lightProbeUsage = i909[38]
  i908.reflectionProbeUsage = i909[39]
  return i908
}

Deserializers["Level1_Armpit_Playable"] = function (request, data, root) {
  var i916 = root || request.c( 'Level1_Armpit_Playable' )
  var i917 = data
  i916.MainZoom = request.d('ZoomPos', i917[0], i916.MainZoom)
  request.r(i917[1], i917[2], 0, i916, 'view1')
  request.r(i917[3], i917[4], 0, i916, 'view2')
  request.r(i917[5], i917[6], 0, i916, 'hairArmpit')
  i916.ZoomStep1 = request.d('ZoomPos', i917[7], i916.ZoomStep1)
  request.r(i917[8], i917[9], 0, i916, 'ToolStep1')
  request.r(i917[10], i917[11], 0, i916, 'ToolStep1CameraFollow')
  request.r(i917[12], i917[13], 0, i916, 'eraserSfx')
  i916.ZoomStep2 = request.d('ZoomPos', i917[14], i916.ZoomStep2)
  request.r(i917[15], i917[16], 0, i916, 'ToolStep2Parent')
  request.r(i917[17], i917[18], 0, i916, 'BeansParent')
  i916.ZoomStep3 = request.d('ZoomPos', i917[19], i916.ZoomStep3)
  request.r(i917[20], i917[21], 0, i916, 'JarHandIndication')
  request.r(i917[22], i917[23], 0, i916, 'GreenBtnCol_Damaged')
  request.r(i917[24], i917[25], 0, i916, 'GreenBtnCol_Fixed')
  request.r(i917[26], i917[27], 0, i916, 'HandTap1_3')
  request.r(i917[28], i917[29], 0, i916, 'GreenBtn')
  request.r(i917[30], i917[31], 0, i916, 'GreenBtnIndication')
  request.r(i917[32], i917[33], 0, i916, 'machineDamage')
  request.r(i917[34], i917[35], 0, i916, 'machineBlackImg')
  request.r(i917[36], i917[37], 0, i916, 'blackSmokeVfx')
  request.r(i917[38], i917[39], 0, i916, 'fixItErrorSfx')
  request.r(i917[40], i917[41], 0, i916, 'boilingWax')
  request.r(i917[42], i917[43], 0, i916, 'boilingParticle')
  var i919 = i917[44]
  var i918 = []
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 2, i918, '')
  }
  i916.AllBeans = i918
  request.r(i917[45], i917[46], 0, i916, 'machineBtnSfx')
  request.r(i917[47], i917[48], 0, i916, 'boilingSfx')
  i916.ZoomStep4 = request.d('ZoomPos', i917[49], i916.ZoomStep4)
  request.r(i917[50], i917[51], 0, i916, 'ToolStep4')
  request.r(i917[52], i917[53], 0, i916, 'spatulaFull')
  request.r(i917[54], i917[55], 0, i916, 'spatulaFaded')
  request.r(i917[56], i917[57], 0, i916, 'waxMixControler')
  request.r(i917[58], i917[59], 0, i916, 'toolStep4')
  request.r(i917[60], i917[61], 0, i916, 'waxOnSpatula')
  request.r(i917[62], i917[63], 0, i916, 'waxMixIndication')
  request.r(i917[64], i917[65], 0, i916, 'waxDrippinfParticle')
  request.r(i917[66], i917[67], 0, i916, 'spatulaClamp')
  request.r(i917[68], i917[69], 0, i916, 'spatulaPickIndication')
  request.r(i917[70], i917[71], 0, i916, 'spatulaParent')
  request.r(i917[72], i917[73], 0, i916, 'finalSpatula')
  request.r(i917[74], i917[75], 0, i916, 'DropClip')
  i916.ZoomStep5 = request.d('ZoomPos', i917[76], i916.ZoomStep5)
  request.r(i917[77], i917[78], 0, i916, 'ToolStep5')
  request.r(i917[79], i917[80], 0, i916, 'hairSmall')
  request.r(i917[81], i917[82], 0, i916, 'skinBumpy')
  request.r(i917[83], i917[84], 0, i916, 'waxRestore')
  request.r(i917[85], i917[86], 0, i916, 'waxErase')
  request.r(i917[87], i917[88], 0, i916, 'waxEraseIndication')
  request.r(i917[89], i917[90], 0, i916, 'handIndication5')
  i916.ZoomStep6 = request.d('ZoomPos', i917[91], i916.ZoomStep6)
  request.r(i917[92], i917[93], 0, i916, 'ToolStep6Parent')
  request.r(i917[94], i917[95], 0, i916, 'ToolStep6')
  request.r(i917[96], i917[97], 0, i916, 'ToolStep6Anim')
  request.r(i917[98], i917[99], 0, i916, 'BottleStep6')
  request.r(i917[100], i917[101], 0, i916, 'ToolsStep6transparent')
  request.r(i917[102], i917[103], 0, i916, 'ToolsStep6Liquid')
  request.r(i917[104], i917[105], 0, i916, 'ToolsStep6Rend')
  request.r(i917[106], i917[107], 0, i916, 'dropperTapobj')
  request.r(i917[108], i917[109], 0, i916, 'dropperTarget')
  request.r(i917[110], i917[111], 0, i916, 'droperPressed')
  request.r(i917[112], i917[113], 0, i916, 'dropletAnim')
  request.r(i917[114], i917[115], 0, i916, 'droperPlaceIndication')
  request.r(i917[116], i917[117], 0, i916, 'ToolStep6Actual')
  request.r(i917[118], i917[119], 0, i916, 'serumCapSfx')
  i916.ZoomStep7 = request.d('ZoomPos', i917[120], i916.ZoomStep7)
  request.r(i917[121], i917[122], 0, i916, 'ToolStep7')
  request.r(i917[123], i917[124], 0, i916, 'ToolStep7CameraFollow')
  request.r(i917[125], i917[126], 0, i916, 'serumDropped')
  request.r(i917[127], i917[128], 0, i916, 'SerumRubbed')
  i916.ZoomStep8 = request.d('ZoomPos', i917[129], i916.ZoomStep8)
  request.r(i917[130], i917[131], 0, i916, 'ToolStep8')
  request.r(i917[132], i917[133], 0, i916, 'perfumeCap')
  request.r(i917[134], i917[135], 0, i916, 'perfumeBtnTriger')
  request.r(i917[136], i917[137], 0, i916, 'perfumeCapAnim')
  request.r(i917[138], i917[139], 0, i916, 'perfumeButton')
  request.r(i917[140], i917[141], 0, i916, 'perfumeParticles')
  request.r(i917[142], i917[143], 0, i916, 'starsParticles')
  request.r(i917[144], i917[145], 0, i916, 'bodyStright')
  request.r(i917[146], i917[147], 0, i916, 'bodyTilt')
  request.r(i917[148], i917[149], 0, i916, 'PerfumeCapOpen')
  request.r(i917[150], i917[151], 0, i916, 'PerfumeSfx')
  request.r(i917[152], i917[153], 0, i916, 'fixItPrompt')
  request.r(i917[154], i917[155], 0, i916, 'fixItPromptHand')
  i916.levelName = i917[156]
  i916.levelReward = i917[157]
  request.r(i917[158], i917[159], 0, i916, 'LevelIcon')
  request.r(i917[160], i917[161], 0, i916, 'Level_BG')
  var i921 = i917[162]
  var i920 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i921.length; i += 2) {
  request.r(i921[i + 0], i921[i + 1], 1, i920, '')
  }
  i916.ToolIcons = i920
  var i923 = i917[163]
  var i922 = []
  for(var i = 0; i < i923.length; i += 2) {
  request.r(i923[i + 0], i923[i + 1], 2, i922, '')
  }
  i916.AllDrags = i922
  var i925 = i917[164]
  var i924 = []
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 2, i924, '')
  }
  i916.AllSources = i924
  var i927 = i917[165]
  var i926 = []
  for(var i = 0; i < i927.length; i += 2) {
  request.r(i927[i + 0], i927[i + 1], 2, i926, '')
  }
  i916.AllScratches = i926
  i916.stepsDone = i917[166]
  i916.levelNo = i917[167]
  i916.partNo = i917[168]
  return i916
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i928 = root || request.c( 'ZoomPos' )
  var i929 = data
  i928.CameraPos = new pc.Vec3( i929[0], i929[1], i929[2] )
  i928.CameraFOV = i929[3]
  return i928
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i940 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'MainCamera')
  i940.RenderType = i941[2]
  request.r(i941[3], i941[4], 0, i940, 'ScratchSurfaceSprite')
  i940.ScratchSurfaceSpriteHasAlpha = !!i941[5]
  i940.MaskProgressCutOffValue = i941[6]
  request.r(i941[7], i941[8], 0, i940, 'EraseTexture')
  i940.EraseTextureScale = new pc.Vec2( i941[9], i941[10] )
  i940.InputEnabled = !!i941[11]
  request.r(i941[12], i941[13], 0, i940, 'Card')
  i940.Mode = i941[14]
  request.r(i941[15], i941[16], 0, i940, 'Progress')
  request.r(i941[17], i941[18], 0, i940, 'MeshCard')
  request.r(i941[19], i941[20], 0, i940, 'SpriteCard')
  request.r(i941[21], i941[22], 0, i940, 'ImageCard')
  request.r(i941[23], i941[24], 0, i940, 'MaskShader')
  request.r(i941[25], i941[26], 0, i940, 'BrushShader')
  request.r(i941[27], i941[28], 0, i940, 'MaskProgressShader')
  request.r(i941[29], i941[30], 0, i940, 'MaskProgressCutOffShader')
  return i940
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i942 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'MainCamera')
  request.r(i943[2], i943[3], 0, i942, 'Surface')
  i942.RenderTextureQuality = i943[4]
  request.r(i943[5], i943[6], 0, i942, 'Eraser')
  request.r(i943[7], i943[8], 0, i942, 'Progress')
  request.r(i943[9], i943[10], 0, i942, 'ScratchSurface')
  request.r(i943[11], i943[12], 0, i942, 'RenderTexture')
  i942.BrushScale = new pc.Vec2( i943[13], i943[14] )
  request.r(i943[15], i943[16], 0, i942, 'ToolTip')
  i942.InputEnabled = !!i943[17]
  i942.IsScratching = !!i943[18]
  i942.useChangingScale = !!i943[19]
  i942.useGivenBrushScale = !!i943[20]
  i942.canSpreadMask = !!i943[21]
  i942.shouldPaintHoles = !!i943[22]
  i942.canRotateTip = !!i943[23]
  i942._mode = i943[24]
  return i942
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i944 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'Card')
  i944.currentProgress = i945[2]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i947 = data
  i946.textureMode = i947[0]
  i946.alignment = i947[1]
  i946.widthCurve = new pc.AnimationCurve( { keys_flow: i947[2] } )
  i946.colorGradient = i947[3] ? new pc.ColorGradient(i947[3][0], i947[3][1], i947[3][2]) : null
  var i949 = i947[4]
  var i948 = []
  for(var i = 0; i < i949.length; i += 3) {
    i948.push( new pc.Vec3( i949[i + 0], i949[i + 1], i949[i + 2] ) );
  }
  i946.positions = i948
  i946.positionCount = i947[5]
  i946.widthMultiplier = i947[6]
  i946.startWidth = i947[7]
  i946.endWidth = i947[8]
  i946.numCornerVertices = i947[9]
  i946.numCapVertices = i947[10]
  i946.useWorldSpace = !!i947[11]
  i946.loop = !!i947[12]
  i946.startColor = new pc.Color(i947[13], i947[14], i947[15], i947[16])
  i946.endColor = new pc.Color(i947[17], i947[18], i947[19], i947[20])
  i946.generateLightingData = !!i947[21]
  i946.enabled = !!i947[22]
  request.r(i947[23], i947[24], 0, i946, 'sharedMaterial')
  var i951 = i947[25]
  var i950 = []
  for(var i = 0; i < i951.length; i += 2) {
  request.r(i951[i + 0], i951[i + 1], 2, i950, '')
  }
  i946.sharedMaterials = i950
  i946.receiveShadows = !!i947[26]
  i946.shadowCastingMode = i947[27]
  i946.sortingLayerID = i947[28]
  i946.sortingOrder = i947[29]
  i946.lightmapIndex = i947[30]
  i946.lightmapSceneIndex = i947[31]
  i946.lightmapScaleOffset = new pc.Vec4( i947[32], i947[33], i947[34], i947[35] )
  i946.lightProbeUsage = i947[36]
  i946.reflectionProbeUsage = i947[37]
  return i946
}

Deserializers["TextureOffsetScroller"] = function (request, data, root) {
  var i952 = root || request.c( 'TextureOffsetScroller' )
  var i953 = data
  i952.scrollSpeed = new pc.Vec2( i953[0], i953[1] )
  i952.smoothStart = !!i953[2]
  i952.smoothDuration = i953[3]
  i952.textureName = i953[4]
  i952.useSharedMaterial = !!i953[5]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'clip')
  request.r(i955[2], i955[3], 0, i954, 'outputAudioMixerGroup')
  i954.playOnAwake = !!i955[4]
  i954.loop = !!i955[5]
  i954.time = i955[6]
  i954.volume = i955[7]
  i954.pitch = i955[8]
  i954.enabled = !!i955[9]
  return i954
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i956 = root || request.c( 'PlaySfxOnCollision' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'Tip')
  i956.Mode = i957[2]
  request.r(i957[3], i957[4], 0, i956, 'DragInput')
  request.r(i957[5], i957[6], 0, i956, 'Source')
  i956.startVol = i957[7]
  i956.targetVol = i957[8]
  i956.duration = i957[9]
  request.r(i957[10], i957[11], 0, i956, 'Particles')
  i956.isDone = !!i957[12]
  i956.isInArea = !!i957[13]
  i956.isPlaying = !!i957[14]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i959 = data
  i958.radius = i959[0]
  i958.enabled = !!i959[1]
  i958.isTrigger = !!i959[2]
  i958.usedByEffector = !!i959[3]
  i958.density = i959[4]
  i958.offset = new pc.Vec2( i959[5], i959[6] )
  request.r(i959[7], i959[8], 0, i958, 'material')
  return i958
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i960 = root || request.c( 'PlayParticlesOnCollision' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'Target')
  request.r(i961[2], i961[3], 0, i960, 'ParticlePrefab')
  i960.destroyIt = !!i961[4]
  i960.stayAtPlace = !!i961[5]
  i960.disableOnCollision = !!i961[6]
  i960.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i961[7], i960.OnCollisionEvent)
  return i960
}

Deserializers["BD_Fold"] = function (request, data, root) {
  var i962 = root || request.c( 'BD_Fold' )
  var i963 = data
  i962.canDrag = !!i963[0]
  i962.canFoldBottomLeft = !!i963[1]
  i962.canFoldBottomRight = !!i963[2]
  i962.canFoldTopLeft = !!i963[3]
  i962.canFoldTopRight = !!i963[4]
  request.r(i963[5], i963[6], 0, i962, 'Indication')
  request.r(i963[7], i963[8], 0, i962, 'backSideSprite')
  i962.maxSideOffset = i963[9]
  i962.foldBackDuration = i963[10]
  i962.instantFoldAmount = i963[11]
  i962.useSmoothRelease = !!i963[12]
  i962.completionLimit = i963[13]
  i962.afterCompletionTravelTo = i963[14]
  i962.OnComplete = request.d('UnityEngine.Events.UnityEvent', i963[15], i962.OnComplete)
  i962.currentProgress = i963[16]
  i962.innerShadowStrength = i963[17]
  request.r(i963[18], i963[19], 0, i962, 'dragAudioSource')
  request.r(i963[20], i963[21], 0, i962, 'dragStartClip')
  request.r(i963[22], i963[23], 0, i962, 'completionClip')
  i962.audioFadeSpeed = i963[24]
  i962.audioMoveThreshold = i963[25]
  i962.hapticInterval = i963[26]
  return i962
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i964 = root || request.c( 'ActionOnTap' )
  var i965 = data
  i964.OnTap = request.d('UnityEngine.Events.UnityEvent', i965[0], i964.OnTap)
  i964.OnTapExtra = request.d('System.Action', i965[1], i964.OnTapExtra)
  return i964
}

Deserializers["System.Action"] = function (request, data, root) {
  var i966 = root || request.c( 'System.Action' )
  var i967 = data
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i969 = data
  i968.usedByComposite = !!i969[0]
  i968.autoTiling = !!i969[1]
  var i971 = i969[2]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
  var i973 = i971[i + 0]
  var i972 = []
  for(var i = 0; i < i973.length; i += 2) {
    i972.push( new pc.Vec2( i973[i + 0], i973[i + 1] ) );
  }
    i970.push( i972 );
  }
  i968.points = i970
  i968.enabled = !!i969[3]
  i968.isTrigger = !!i969[4]
  i968.usedByEffector = !!i969[5]
  i968.density = i969[6]
  i968.offset = new pc.Vec2( i969[7], i969[8] )
  request.r(i969[9], i969[10], 0, i968, 'material')
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i981 = data
  i980.edgeRadius = i981[0]
  var i983 = i981[1]
  var i982 = []
  for(var i = 0; i < i983.length; i += 2) {
    i982.push( new pc.Vec2( i983[i + 0], i983[i + 1] ) );
  }
  i980.points = i982
  i980.useAdjacentStartPoint = !!i981[2]
  i980.adjacentStartPoint = new pc.Vec2( i981[3], i981[4] )
  i980.useAdjacentEndPoint = !!i981[5]
  i980.adjacentEndPoint = new pc.Vec2( i981[6], i981[7] )
  i980.enabled = !!i981[8]
  i980.isTrigger = !!i981[9]
  i980.usedByEffector = !!i981[10]
  i980.density = i981[11]
  i980.offset = new pc.Vec2( i981[12], i981[13] )
  request.r(i981[14], i981[15], 0, i980, 'material')
  return i980
}

Deserializers["JarRotator"] = function (request, data, root) {
  var i984 = root || request.c( 'JarRotator' )
  var i985 = data
  i984.rotationMode = i985[0]
  i984.maxRotation = i985[1]
  i984.rotationSpeed = i985[2]
  i984.invertRotation = !!i985[3]
  request.r(i985[4], i985[5], 0, i984, 'tapClip')
  request.r(i985[6], i985[7], 0, i984, 'dragAudioSource')
  i984.OnComplete = request.d('UnityEngine.Events.UnityEvent', i985[8], i984.OnComplete)
  i984.completed = !!i985[9]
  request.r(i985[10], i985[11], 0, i984, 'jarIndication')
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i987 = data
  i986.bodyType = i987[0]
  request.r(i987[1], i987[2], 0, i986, 'material')
  i986.simulated = !!i987[3]
  i986.useAutoMass = !!i987[4]
  i986.mass = i987[5]
  i986.drag = i987[6]
  i986.angularDrag = i987[7]
  i986.gravityScale = i987[8]
  i986.collisionDetectionMode = i987[9]
  i986.sleepMode = i987[10]
  i986.constraints = i987[11]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i989 = data
  i988.frontSortingLayerID = i989[0]
  i988.frontSortingOrder = i989[1]
  i988.backSortingLayerID = i989[2]
  i988.backSortingOrder = i989[3]
  i988.alphaCutoff = i989[4]
  request.r(i989[5], i989[6], 0, i988, 'sprite')
  i988.tileMode = i989[7]
  i988.isCustomRangeActive = !!i989[8]
  i988.spriteSortPoint = i989[9]
  i988.enabled = !!i989[10]
  request.r(i989[11], i989[12], 0, i988, 'sharedMaterial')
  var i991 = i989[13]
  var i990 = []
  for(var i = 0; i < i991.length; i += 2) {
  request.r(i991[i + 0], i991[i + 1], 2, i990, '')
  }
  i988.sharedMaterials = i990
  i988.receiveShadows = !!i989[14]
  i988.shadowCastingMode = i989[15]
  i988.sortingLayerID = i989[16]
  i988.sortingOrder = i989[17]
  i988.lightmapIndex = i989[18]
  i988.lightmapSceneIndex = i989[19]
  i988.lightmapScaleOffset = new pc.Vec4( i989[20], i989[21], i989[22], i989[23] )
  i988.lightProbeUsage = i989[24]
  i988.reflectionProbeUsage = i989[25]
  return i988
}

Deserializers["Level1_Armpit_WaxCount"] = function (request, data, root) {
  var i992 = root || request.c( 'Level1_Armpit_WaxCount' )
  var i993 = data
  i992.waxCount = i993[0]
  i992.waxTotal = i993[1]
  var i995 = i993[2]
  var i994 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i995.length; i += 2) {
  request.r(i995[i + 0], i995[i + 1], 1, i994, '')
  }
  i992.targetWaxObjects = i994
  request.r(i993[3], i993[4], 0, i992, 'rotator')
  i992.vibration = !!i993[5]
  i992.delayInVibration = i993[6]
  var i997 = i993[7]
  var i996 = []
  for(var i = 0; i < i997.length; i += 2) {
  request.r(i997[i + 0], i997[i + 1], 2, i996, '')
  }
  i992.waxDropSfx = i996
  return i992
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i1002 = root || request.c( 'BasicDrag' )
  var i1003 = data
  i1002.canDrag = !!i1003[0]
  i1002.dragByDelta = !!i1003[1]
  i1002.isDragging = !!i1003[2]
  i1002.moveWithPointer = !!i1003[3]
  i1002.canReturn = !!i1003[4]
  i1002.jumpOnReturn = !!i1003[5]
  i1002.returnTime = i1003[6]
  i1002.Tool_Offset = new pc.Vec3( i1003[7], i1003[8], i1003[9] )
  i1002.canScaleIncrease = !!i1003[10]
  i1002.Self_ScaleNew = new pc.Vec3( i1003[11], i1003[12], i1003[13] )
  i1002.canRotateOnPick = !!i1003[14]
  i1002.startRot = new pc.Vec3( i1003[15], i1003[16], i1003[17] )
  i1002.newRot = new pc.Vec3( i1003[18], i1003[19], i1003[20] )
  var i1005 = i1003[21]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 2) {
  request.r(i1005[i + 0], i1005[i + 1], 2, i1004, '')
  }
  i1002.childSprite = i1004
  request.r(i1003[22], i1003[23], 0, i1002, 'ToolSelectClip')
  request.r(i1003[24], i1003[25], 0, i1002, 'ToolLoopClip')
  request.r(i1003[26], i1003[27], 0, i1002, 'thisParticles')
  i1002.onDragparticle = !!i1003[28]
  request.r(i1003[29], i1003[30], 0, i1002, 'dragParticles')
  request.r(i1003[31], i1003[32], 0, i1002, 'anim')
  i1002.startPos = new pc.Vec3( i1003[33], i1003[34], i1003[35] )
  i1002.startScale = new pc.Vec3( i1003[36], i1003[37], i1003[38] )
  i1002.Vibration = !!i1003[39]
  i1002.isPlacedCannotMove = !!i1003[40]
  i1002.isObjectMovingWhileDragging = !!i1003[41]
  i1002.OnMouseDownEvent = request.d('System.Action', i1003[42], i1002.OnMouseDownEvent)
  i1002.OnMouseUpEvent = request.d('System.Action', i1003[43], i1002.OnMouseUpEvent)
  i1002.ProgStartEvent = request.d('System.Action', i1003[44], i1002.ProgStartEvent)
  i1002.ProgEndEvent = request.d('System.Action', i1003[45], i1002.ProgEndEvent)
  i1002.canCallMouseUpWhenGamePaused = !!i1003[46]
  i1002.ClampX_L = i1003[47]
  i1002.ClampX_H = i1003[48]
  i1002.ClampY_L = i1003[49]
  i1002.ClampY_H = i1003[50]
  i1002.startOrder = i1003[51]
  i1002.dontResetItIsInCollider = !!i1003[52]
  request.r(i1003[53], i1003[54], 0, i1002, 'thisCollider')
  request.r(i1003[55], i1003[56], 0, i1002, 'thisSR')
  i1002.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i1003[57], i1002.OnMouseDownEventIndependentFromCanDrag)
  return i1002
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i1006 = root || request.c( 'BD_AnimatorDrag' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'BD')
  request.r(i1007[2], i1007[3], 0, i1006, 'anim')
  request.r(i1007[4], i1007[5], 0, i1006, 'Source')
  i1006.Vibration = !!i1007[6]
  i1006.isCompletable = !!i1007[7]
  i1006.completionThreshold = i1007[8]
  i1006.OnComplete = request.d('UnityEngine.Events.UnityEvent', i1007[9], i1006.OnComplete)
  return i1006
}

Deserializers["TapandHold_Simple"] = function (request, data, root) {
  var i1008 = root || request.c( 'TapandHold_Simple' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'actionSfx')
  i1008.holdDuration = i1009[2]
  i1008.dragThreshold = i1009[3]
  i1008.fadeInOnHold = !!i1009[4]
  i1008.fadeOutOnRelease = !!i1009[5]
  request.r(i1009[6], i1009[7], 0, i1008, 'targetSprite')
  i1008.onHoldComplete = request.d('UnityEngine.Events.UnityEvent', i1009[8], i1008.onHoldComplete)
  i1008.currentProgress = i1009[9]
  i1008.isHolding = !!i1009[10]
  i1008.isCompleted = !!i1009[11]
  request.r(i1009[12], i1009[13], 0, i1008, 'thisTool')
  return i1008
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i1010 = root || request.c( 'BD_Progress' )
  var i1011 = data
  var i1013 = i1011[0]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('ScratchData', i1013[i + 0]) );
  }
  i1010.AllScratches = i1012
  i1010.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i1011[1], i1010.OnScratchComplete)
  i1010.isProgDone = !!i1011[2]
  i1010.canCallComplete = !!i1011[3]
  i1010.CollectiveAppear = !!i1011[4]
  i1010.tipControl = !!i1011[5]
  i1010.progressControl = !!i1011[6]
  request.r(i1011[7], i1011[8], 0, i1010, 'thisDrag')
  i1010.CompleteEvent = request.d('System.Action', i1011[9], i1010.CompleteEvent)
  i1010.SubCompleteEvent = request.d('System.Action', i1011[10], i1010.SubCompleteEvent)
  return i1010
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i1016 = root || request.c( 'ScratchData' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'ScratchManager')
  i1016.scratchLimit = i1017[2]
  i1016.isComplete = !!i1017[3]
  return i1016
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i1018 = root || request.c( 'BD_Clamp' )
  var i1019 = data
  i1018.ClampX_L = i1019[0]
  i1018.ClampX_H = i1019[1]
  i1018.ClampY_L = i1019[2]
  i1018.ClampY_H = i1019[3]
  return i1018
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i1020 = root || request.c( 'BD_CameraFollow' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'Tool')
  request.r(i1021[2], i1021[3], 0, i1020, 'Pivot')
  i1020.FOV = i1021[4]
  i1020.Y_L = i1021[5]
  i1020.Y_H = i1021[6]
  i1020.X_L = i1021[7]
  i1020.X_R = i1021[8]
  i1020.startDelay = i1021[9]
  i1020.duration = i1021[10]
  return i1020
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i1022 = root || request.c( 'BD_ToolRotate' )
  var i1023 = data
  i1022.startDelay = i1023[0]
  request.r(i1023[1], i1023[2], 0, i1022, 'Tool')
  request.r(i1023[3], i1023[4], 0, i1022, 'Clamp')
  request.r(i1023[5], i1023[6], 0, i1022, 'Pivot')
  i1022.MinAngle = new pc.Vec3( i1023[7], i1023[8], i1023[9] )
  i1022.MaxAngle = new pc.Vec3( i1023[10], i1023[11], i1023[12] )
  i1022.rotationSpeed = i1023[13]
  return i1022
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i1024 = root || request.c( 'PlaceItem' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'thisDrag')
  request.r(i1025[2], i1025[3], 0, i1024, 'Target')
  request.r(i1025[4], i1025[5], 0, i1024, 'Clip')
  i1024.jumpOnPlace = !!i1025[6]
  i1024.jumpHeight = i1025[7]
  i1024.jumpDuration = i1025[8]
  i1024.settleDuration = i1025[9]
  i1024.isPlaced = !!i1025[10]
  i1024.isInsideCollider = !!i1025[11]
  i1024.changeScaleOnPlace = !!i1025[12]
  request.r(i1025[13], i1025[14], 0, i1024, 'item')
  i1024.newScaleOnPlace = new pc.Vec3( i1025[15], i1025[16], i1025[17] )
  i1024.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i1025[18], i1024.OnPlaced)
  return i1024
}

Deserializers["BD_Dropper"] = function (request, data, root) {
  var i1026 = root || request.c( 'BD_Dropper' )
  var i1027 = data
  i1026.OnComplete = request.d('UnityEngine.Events.UnityEvent', i1027[0], i1026.OnComplete)
  request.r(i1027[1], i1027[2], 0, i1026, 'thisDrag')
  request.r(i1027[3], i1027[4], 0, i1026, 'toolRend')
  request.r(i1027[5], i1027[6], 0, i1026, 'toolDef_sp')
  request.r(i1027[7], i1027[8], 0, i1026, 'toolPick_sp')
  request.r(i1027[9], i1027[10], 0, i1026, 'animator')
  request.r(i1027[11], i1027[12], 0, i1026, 'tipCol')
  request.r(i1027[13], i1027[14], 0, i1026, 'targetCol')
  request.r(i1027[15], i1027[16], 0, i1026, 'particleEffect')
  i1026.FadeIn = !!i1027[17]
  i1026.fadeDuration = i1027[18]
  var i1029 = i1027[19]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 2) {
  request.r(i1029[i + 0], i1029[i + 1], 2, i1028, '')
  }
  i1026.itemsToFade = i1028
  return i1026
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
  var i1049 = i1045[30]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1049.length; i += 2) {
  request.r(i1049[i + 0], i1049[i + 1], 1, i1048, '')
  }
  i1044.thingsToDisableWhenCompletePanel = i1048
  request.r(i1045[31], i1045[32], 0, i1044, 'CompletePanel')
  request.r(i1045[33], i1045[34], 0, i1044, 'LevelIcon')
  request.r(i1045[35], i1045[36], 0, i1044, 'CompleteParticles')
  request.r(i1045[37], i1045[38], 0, i1044, 'progressBar')
  request.r(i1045[39], i1045[40], 0, i1044, 'progressText')
  request.r(i1045[41], i1045[42], 0, i1044, 'toolIcon1')
  request.r(i1045[43], i1045[44], 0, i1044, 'toolIcon2')
  request.r(i1045[45], i1045[46], 0, i1044, 'toolIcon3')
  request.r(i1045[47], i1045[48], 0, i1044, 'target1')
  request.r(i1045[49], i1045[50], 0, i1044, 'target2')
  i1044.toolMoveDuration = i1045[51]
  i1044.currentIndex = i1045[52]
  var i1051 = i1045[53]
  var i1050 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1051.length; i += 2) {
  request.r(i1051[i + 0], i1051[i + 1], 1, i1050, '')
  }
  i1044.allTools = i1050
  request.r(i1045[54], i1045[55], 0, i1044, 'clockProgress')
  request.r(i1045[56], i1045[57], 0, i1044, 'clockProgressFill')
  request.r(i1045[58], i1045[59], 0, i1044, 'clockAudio')
  i1044.moveDistance = i1045[60]
  i1044.animationDuration = i1045[61]
  i1044.greyBgChildName = i1045[62]
  i1044.pushOffset = i1045[63]
  return i1044
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i1052 = root || request.c( 'GameManagerPlayable' )
  var i1053 = data
  request.r(i1053[0], i1053[1], 0, i1052, 'endParticles')
  request.r(i1053[2], i1053[3], 0, i1052, 'stepCompleteParticles')
  request.r(i1053[4], i1053[5], 0, i1052, 'DefaultMat')
  request.r(i1053[6], i1053[7], 0, i1052, 'BG_Music')
  request.r(i1053[8], i1053[9], 0, i1052, 'restoreEffectShader')
  request.r(i1053[10], i1053[11], 0, i1052, 'stickerEffectShader')
  i1052.isComplete = !!i1053[12]
  i1052.isPaused = !!i1053[13]
  request.r(i1053[14], i1053[15], 0, i1052, 'currentLevel')
  i1052.startLevelOnPlay = !!i1053[16]
  i1052.currentLevelNo = i1053[17]
  return i1052
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1054 = root || request.c( 'AudioController' )
  var i1055 = data
  request.r(i1055[0], i1055[1], 0, i1054, 'MainMixer')
  request.r(i1055[2], i1055[3], 0, i1054, 'UiClick')
  request.r(i1055[4], i1055[5], 0, i1054, 'UiClickSource')
  var i1057 = i1055[6]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 2) {
  request.r(i1057[i + 0], i1057[i + 1], 2, i1056, '')
  }
  i1054.SfxSources = i1056
  var i1059 = i1055[7]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 2) {
  request.r(i1059[i + 0], i1059[i + 1], 2, i1058, '')
  }
  i1054.AllClips = i1058
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1061 = data
  i1060.pivot = new pc.Vec2( i1061[0], i1061[1] )
  i1060.anchorMin = new pc.Vec2( i1061[2], i1061[3] )
  i1060.anchorMax = new pc.Vec2( i1061[4], i1061[5] )
  i1060.sizeDelta = new pc.Vec2( i1061[6], i1061[7] )
  i1060.anchoredPosition3D = new pc.Vec3( i1061[8], i1061[9], i1061[10] )
  i1060.rotation = new pc.Quat(i1061[11], i1061[12], i1061[13], i1061[14])
  i1060.scale = new pc.Vec3( i1061[15], i1061[16], i1061[17] )
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1063 = data
  i1062.planeDistance = i1063[0]
  i1062.referencePixelsPerUnit = i1063[1]
  i1062.isFallbackOverlay = !!i1063[2]
  i1062.renderMode = i1063[3]
  i1062.renderOrder = i1063[4]
  i1062.sortingLayerName = i1063[5]
  i1062.sortingOrder = i1063[6]
  i1062.scaleFactor = i1063[7]
  request.r(i1063[8], i1063[9], 0, i1062, 'worldCamera')
  i1062.overrideSorting = !!i1063[10]
  i1062.pixelPerfect = !!i1063[11]
  i1062.targetDisplay = i1063[12]
  i1062.overridePixelPerfect = !!i1063[13]
  i1062.enabled = !!i1063[14]
  return i1062
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1064 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1065 = data
  i1064.m_UiScaleMode = i1065[0]
  i1064.m_ReferencePixelsPerUnit = i1065[1]
  i1064.m_ScaleFactor = i1065[2]
  i1064.m_ReferenceResolution = new pc.Vec2( i1065[3], i1065[4] )
  i1064.m_ScreenMatchMode = i1065[5]
  i1064.m_MatchWidthOrHeight = i1065[6]
  i1064.m_PhysicalUnit = i1065[7]
  i1064.m_FallbackScreenDPI = i1065[8]
  i1064.m_DefaultSpriteDPI = i1065[9]
  i1064.m_DynamicPixelsPerUnit = i1065[10]
  i1064.m_PresetInfoIsWorld = !!i1065[11]
  return i1064
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1067 = data
  i1066.m_IgnoreReversedGraphics = !!i1067[0]
  i1066.m_BlockingObjects = i1067[1]
  i1066.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1067[2] )
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1069 = data
  i1068.cullTransparentMesh = !!i1069[0]
  return i1068
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1070 = root || request.c( 'UnityEngine.UI.Image' )
  var i1071 = data
  request.r(i1071[0], i1071[1], 0, i1070, 'm_Sprite')
  i1070.m_Type = i1071[2]
  i1070.m_PreserveAspect = !!i1071[3]
  i1070.m_FillCenter = !!i1071[4]
  i1070.m_FillMethod = i1071[5]
  i1070.m_FillAmount = i1071[6]
  i1070.m_FillClockwise = !!i1071[7]
  i1070.m_FillOrigin = i1071[8]
  i1070.m_UseSpriteMesh = !!i1071[9]
  i1070.m_PixelsPerUnitMultiplier = i1071[10]
  request.r(i1071[11], i1071[12], 0, i1070, 'm_Material')
  i1070.m_Maskable = !!i1071[13]
  i1070.m_Color = new pc.Color(i1071[14], i1071[15], i1071[16], i1071[17])
  i1070.m_RaycastTarget = !!i1071[18]
  i1070.m_RaycastPadding = new pc.Vec4( i1071[19], i1071[20], i1071[21], i1071[22] )
  return i1070
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1072 = root || request.c( 'UnityEngine.UI.Text' )
  var i1073 = data
  i1072.m_FontData = request.d('UnityEngine.UI.FontData', i1073[0], i1072.m_FontData)
  i1072.m_Text = i1073[1]
  request.r(i1073[2], i1073[3], 0, i1072, 'm_Material')
  i1072.m_Maskable = !!i1073[4]
  i1072.m_Color = new pc.Color(i1073[5], i1073[6], i1073[7], i1073[8])
  i1072.m_RaycastTarget = !!i1073[9]
  i1072.m_RaycastPadding = new pc.Vec4( i1073[10], i1073[11], i1073[12], i1073[13] )
  return i1072
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1075 = data
  request.r(i1075[0], i1075[1], 0, i1074, 'm_Font')
  i1074.m_FontSize = i1075[2]
  i1074.m_FontStyle = i1075[3]
  i1074.m_BestFit = !!i1075[4]
  i1074.m_MinSize = i1075[5]
  i1074.m_MaxSize = i1075[6]
  i1074.m_Alignment = i1075[7]
  i1074.m_AlignByGeometry = !!i1075[8]
  i1074.m_RichText = !!i1075[9]
  i1074.m_HorizontalOverflow = i1075[10]
  i1074.m_VerticalOverflow = i1075[11]
  i1074.m_LineSpacing = i1075[12]
  return i1074
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1076 = root || request.c( 'UnityEngine.UI.Button' )
  var i1077 = data
  i1076.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1077[0], i1076.m_OnClick)
  i1076.m_Navigation = request.d('UnityEngine.UI.Navigation', i1077[1], i1076.m_Navigation)
  i1076.m_Transition = i1077[2]
  i1076.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1077[3], i1076.m_Colors)
  i1076.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1077[4], i1076.m_SpriteState)
  i1076.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1077[5], i1076.m_AnimationTriggers)
  i1076.m_Interactable = !!i1077[6]
  request.r(i1077[7], i1077[8], 0, i1076, 'm_TargetGraphic')
  return i1076
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1079 = data
  i1078.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1079[0], i1078.m_PersistentCalls)
  return i1078
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1080 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1081 = data
  i1080.m_Mode = i1081[0]
  i1080.m_WrapAround = !!i1081[1]
  request.r(i1081[2], i1081[3], 0, i1080, 'm_SelectOnUp')
  request.r(i1081[4], i1081[5], 0, i1080, 'm_SelectOnDown')
  request.r(i1081[6], i1081[7], 0, i1080, 'm_SelectOnLeft')
  request.r(i1081[8], i1081[9], 0, i1080, 'm_SelectOnRight')
  return i1080
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1082 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1083 = data
  i1082.m_NormalColor = new pc.Color(i1083[0], i1083[1], i1083[2], i1083[3])
  i1082.m_HighlightedColor = new pc.Color(i1083[4], i1083[5], i1083[6], i1083[7])
  i1082.m_PressedColor = new pc.Color(i1083[8], i1083[9], i1083[10], i1083[11])
  i1082.m_SelectedColor = new pc.Color(i1083[12], i1083[13], i1083[14], i1083[15])
  i1082.m_DisabledColor = new pc.Color(i1083[16], i1083[17], i1083[18], i1083[19])
  i1082.m_ColorMultiplier = i1083[20]
  i1082.m_FadeDuration = i1083[21]
  return i1082
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1084 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1085 = data
  request.r(i1085[0], i1085[1], 0, i1084, 'm_HighlightedSprite')
  request.r(i1085[2], i1085[3], 0, i1084, 'm_PressedSprite')
  request.r(i1085[4], i1085[5], 0, i1084, 'm_SelectedSprite')
  request.r(i1085[6], i1085[7], 0, i1084, 'm_DisabledSprite')
  return i1084
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1086 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1087 = data
  i1086.m_NormalTrigger = i1087[0]
  i1086.m_HighlightedTrigger = i1087[1]
  i1086.m_PressedTrigger = i1087[2]
  i1086.m_SelectedTrigger = i1087[3]
  i1086.m_DisabledTrigger = i1087[4]
  return i1086
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i1088 = root || request.c( 'PlayableHudRuntime' )
  var i1089 = data
  return i1088
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1090 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'm_FirstSelected')
  i1090.m_sendNavigationEvents = !!i1091[2]
  i1090.m_DragThreshold = i1091[3]
  return i1090
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1093 = data
  i1092.m_HorizontalAxis = i1093[0]
  i1092.m_VerticalAxis = i1093[1]
  i1092.m_SubmitButton = i1093[2]
  i1092.m_CancelButton = i1093[3]
  i1092.m_InputActionsPerSecond = i1093[4]
  i1092.m_RepeatDelay = i1093[5]
  i1092.m_ForceModuleActive = !!i1093[6]
  i1092.m_SendPointerHoverToParent = !!i1093[7]
  return i1092
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i1094 = root || request.c( 'PlayableRouter' )
  var i1095 = data
  var i1097 = i1095[0]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 2) {
  request.r(i1097[i + 0], i1097[i + 1], 2, i1096, '')
  }
  i1094.menuObjects = i1096
  var i1099 = i1095[1]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 2) {
  request.r(i1099[i + 0], i1099[i + 1], 2, i1098, '')
  }
  i1094.gameplayObjects = i1098
  var i1101 = i1095[2]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('PlayableRouter+SubLevelSlot', i1101[i + 0]) );
  }
  i1094.subLevels = i1100
  i1094.fadeDuration = i1095[3]
  i1094.lockedMessage = i1095[4]
  i1094.lockedTapsToCTA = i1095[5]
  return i1094
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i1104 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i1105 = data
  request.r(i1105[0], i1105[1], 0, i1104, 'button')
  request.r(i1105[2], i1105[3], 0, i1104, 'level')
  return i1104
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i1106 = root || request.c( 'ToastManager' )
  var i1107 = data
  request.r(i1107[0], i1107[1], 0, i1106, 'toastPanel')
  request.r(i1107[2], i1107[3], 0, i1106, 'toastPopup')
  request.r(i1107[4], i1107[5], 0, i1106, 'canvasGroup')
  request.r(i1107[6], i1107[7], 0, i1106, 'toastText')
  i1106.startY = i1107[8]
  i1106.visibleY = i1107[9]
  i1106.endY = i1107[10]
  i1106.animationTime = i1107[11]
  i1106.animationTimeUp = i1107[12]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1109 = data
  i1108.m_Alpha = i1109[0]
  i1108.m_Interactable = !!i1109[1]
  i1108.m_BlocksRaycasts = !!i1109[2]
  i1108.m_IgnoreParentGroups = !!i1109[3]
  i1108.enabled = !!i1109[4]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1111 = data
  i1110.ambientIntensity = i1111[0]
  i1110.reflectionIntensity = i1111[1]
  i1110.ambientMode = i1111[2]
  i1110.ambientLight = new pc.Color(i1111[3], i1111[4], i1111[5], i1111[6])
  i1110.ambientSkyColor = new pc.Color(i1111[7], i1111[8], i1111[9], i1111[10])
  i1110.ambientGroundColor = new pc.Color(i1111[11], i1111[12], i1111[13], i1111[14])
  i1110.ambientEquatorColor = new pc.Color(i1111[15], i1111[16], i1111[17], i1111[18])
  i1110.fogColor = new pc.Color(i1111[19], i1111[20], i1111[21], i1111[22])
  i1110.fogEndDistance = i1111[23]
  i1110.fogStartDistance = i1111[24]
  i1110.fogDensity = i1111[25]
  i1110.fog = !!i1111[26]
  request.r(i1111[27], i1111[28], 0, i1110, 'skybox')
  i1110.fogMode = i1111[29]
  var i1113 = i1111[30]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1113[i + 0]) );
  }
  i1110.lightmaps = i1112
  i1110.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1111[31], i1110.lightProbes)
  i1110.lightmapsMode = i1111[32]
  i1110.mixedBakeMode = i1111[33]
  i1110.environmentLightingMode = i1111[34]
  i1110.ambientProbe = new pc.SphericalHarmonicsL2(i1111[35])
  request.r(i1111[36], i1111[37], 0, i1110, 'customReflection')
  request.r(i1111[38], i1111[39], 0, i1110, 'defaultReflection')
  i1110.defaultReflectionMode = i1111[40]
  i1110.defaultReflectionResolution = i1111[41]
  i1110.sunLightObjectId = i1111[42]
  i1110.pixelLightCount = i1111[43]
  i1110.defaultReflectionHDR = !!i1111[44]
  i1110.hasLightDataAsset = !!i1111[45]
  i1110.hasManualGenerate = !!i1111[46]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'lightmapColor')
  request.r(i1117[2], i1117[3], 0, i1116, 'lightmapDirection')
  request.r(i1117[4], i1117[5], 0, i1116, 'shadowMask')
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1118 = root || new UnityEngine.LightProbes()
  var i1119 = data
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D' )
  var i1125 = data
  i1124.name = i1125[0]
  i1124.bounciness = i1125[1]
  i1124.friction = i1125[2]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1127 = data
  var i1129 = i1127[0]
  var i1128 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1129[i + 0]));
  }
  i1126.ShaderCompilationErrors = i1128
  i1126.name = i1127[1]
  i1126.guid = i1127[2]
  var i1131 = i1127[3]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( i1131[i + 0] );
  }
  i1126.shaderDefinedKeywords = i1130
  var i1133 = i1127[4]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1133[i + 0]) );
  }
  i1126.passes = i1132
  var i1135 = i1127[5]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1135[i + 0]) );
  }
  i1126.usePasses = i1134
  var i1137 = i1127[6]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1137[i + 0]) );
  }
  i1126.defaultParameterValues = i1136
  request.r(i1127[7], i1127[8], 0, i1126, 'unityFallbackShader')
  i1126.readDepth = !!i1127[9]
  i1126.hasDepthOnlyPass = !!i1127[10]
  i1126.isCreatedByShaderGraph = !!i1127[11]
  i1126.disableBatching = !!i1127[12]
  i1126.compiled = !!i1127[13]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1141 = data
  i1140.shaderName = i1141[0]
  i1140.errorMessage = i1141[1]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1146 = root || new pc.UnityShaderPass()
  var i1147 = data
  i1146.id = i1147[0]
  i1146.subShaderIndex = i1147[1]
  i1146.name = i1147[2]
  i1146.passType = i1147[3]
  i1146.grabPassTextureName = i1147[4]
  i1146.usePass = !!i1147[5]
  i1146.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[6], i1146.zTest)
  i1146.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[7], i1146.zWrite)
  i1146.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[8], i1146.culling)
  i1146.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1147[9], i1146.blending)
  i1146.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1147[10], i1146.alphaBlending)
  i1146.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[11], i1146.colorWriteMask)
  i1146.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[12], i1146.offsetUnits)
  i1146.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[13], i1146.offsetFactor)
  i1146.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[14], i1146.stencilRef)
  i1146.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[15], i1146.stencilReadMask)
  i1146.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1147[16], i1146.stencilWriteMask)
  i1146.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1147[17], i1146.stencilOp)
  i1146.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1147[18], i1146.stencilOpFront)
  i1146.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1147[19], i1146.stencilOpBack)
  var i1149 = i1147[20]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1149[i + 0]) );
  }
  i1146.tags = i1148
  var i1151 = i1147[21]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( i1151[i + 0] );
  }
  i1146.passDefinedKeywords = i1150
  var i1153 = i1147[22]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1153[i + 0]) );
  }
  i1146.passDefinedKeywordGroups = i1152
  var i1155 = i1147[23]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1155[i + 0]) );
  }
  i1146.variants = i1154
  var i1157 = i1147[24]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1157[i + 0]) );
  }
  i1146.excludedVariants = i1156
  i1146.hasDepthReader = !!i1147[25]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1159 = data
  i1158.val = i1159[0]
  i1158.name = i1159[1]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1161 = data
  i1160.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1161[0], i1160.src)
  i1160.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1161[1], i1160.dst)
  i1160.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1161[2], i1160.op)
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1163 = data
  i1162.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[0], i1162.pass)
  i1162.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[1], i1162.fail)
  i1162.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[2], i1162.zFail)
  i1162.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1163[3], i1162.comp)
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1167 = data
  i1166.name = i1167[0]
  i1166.value = i1167[1]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1171 = data
  var i1173 = i1171[0]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( i1173[i + 0] );
  }
  i1170.keywords = i1172
  i1170.hasDiscard = !!i1171[1]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1177 = data
  i1176.passId = i1177[0]
  i1176.subShaderIndex = i1177[1]
  var i1179 = i1177[2]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( i1179[i + 0] );
  }
  i1176.keywords = i1178
  i1176.vertexProgram = i1177[3]
  i1176.fragmentProgram = i1177[4]
  i1176.exportedForWebGl2 = !!i1177[5]
  i1176.readDepth = !!i1177[6]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1183 = data
  request.r(i1183[0], i1183[1], 0, i1182, 'shader')
  i1182.pass = i1183[2]
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1187 = data
  i1186.name = i1187[0]
  i1186.type = i1187[1]
  i1186.value = new pc.Vec4( i1187[2], i1187[3], i1187[4], i1187[5] )
  i1186.textureValue = i1187[6]
  i1186.shaderPropertyFlag = i1187[7]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1189 = data
  i1188.name = i1189[0]
  request.r(i1189[1], i1189[2], 0, i1188, 'texture')
  i1188.aabb = i1189[3]
  i1188.vertices = i1189[4]
  i1188.triangles = i1189[5]
  i1188.textureRect = UnityEngine.Rect.MinMaxRect(i1189[6], i1189[7], i1189[8], i1189[9])
  i1188.packedRect = UnityEngine.Rect.MinMaxRect(i1189[10], i1189[11], i1189[12], i1189[13])
  i1188.border = new pc.Vec4( i1189[14], i1189[15], i1189[16], i1189[17] )
  i1188.transparency = i1189[18]
  i1188.bounds = i1189[19]
  i1188.pixelsPerUnit = i1189[20]
  i1188.textureWidth = i1189[21]
  i1188.textureHeight = i1189[22]
  i1188.nativeSize = new pc.Vec2( i1189[23], i1189[24] )
  i1188.pivot = new pc.Vec2( i1189[25], i1189[26] )
  i1188.textureRectOffset = new pc.Vec2( i1189[27], i1189[28] )
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1191 = data
  i1190.name = i1191[0]
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1193 = data
  i1192.name = i1193[0]
  i1192.wrapMode = i1193[1]
  i1192.isLooping = !!i1193[2]
  i1192.length = i1193[3]
  var i1195 = i1193[4]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1195[i + 0]) );
  }
  i1192.curves = i1194
  var i1197 = i1193[5]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1197[i + 0]) );
  }
  i1192.events = i1196
  i1192.halfPrecision = !!i1193[6]
  i1192._frameRate = i1193[7]
  i1192.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1193[8], i1192.localBounds)
  i1192.hasMuscleCurves = !!i1193[9]
  var i1199 = i1193[10]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( i1199[i + 0] );
  }
  i1192.clipMuscleConstant = i1198
  i1192.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1193[11], i1192.clipBindingConstant)
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1203 = data
  i1202.path = i1203[0]
  i1202.hash = i1203[1]
  i1202.componentType = i1203[2]
  i1202.property = i1203[3]
  i1202.keys = i1203[4]
  var i1205 = i1203[5]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1205[i + 0]) );
  }
  i1202.objectReferenceKeys = i1204
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1209 = data
  i1208.time = i1209[0]
  request.r(i1209[1], i1209[2], 0, i1208, 'value')
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1213 = data
  i1212.functionName = i1213[0]
  i1212.floatParameter = i1213[1]
  i1212.intParameter = i1213[2]
  i1212.stringParameter = i1213[3]
  request.r(i1213[4], i1213[5], 0, i1212, 'objectReferenceParameter')
  i1212.time = i1213[6]
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1215 = data
  i1214.center = new pc.Vec3( i1215[0], i1215[1], i1215[2] )
  i1214.extends = new pc.Vec3( i1215[3], i1215[4], i1215[5] )
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1219 = data
  var i1221 = i1219[0]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( i1221[i + 0] );
  }
  i1218.genericBindings = i1220
  var i1223 = i1219[1]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( i1223[i + 0] );
  }
  i1218.pptrCurveMapping = i1222
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1225 = data
  i1224.name = i1225[0]
  i1224.ascent = i1225[1]
  i1224.originalLineHeight = i1225[2]
  i1224.fontSize = i1225[3]
  var i1227 = i1225[4]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1227[i + 0]) );
  }
  i1224.characterInfo = i1226
  request.r(i1225[5], i1225[6], 0, i1224, 'texture')
  i1224.originalFontSize = i1225[7]
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1231 = data
  i1230.index = i1231[0]
  i1230.advance = i1231[1]
  i1230.bearing = i1231[2]
  i1230.glyphWidth = i1231[3]
  i1230.glyphHeight = i1231[4]
  i1230.minX = i1231[5]
  i1230.maxX = i1231[6]
  i1230.minY = i1231[7]
  i1230.maxY = i1231[8]
  i1230.uvBottomLeftX = i1231[9]
  i1230.uvBottomLeftY = i1231[10]
  i1230.uvBottomRightX = i1231[11]
  i1230.uvBottomRightY = i1231[12]
  i1230.uvTopLeftX = i1231[13]
  i1230.uvTopLeftY = i1231[14]
  i1230.uvTopRightX = i1231[15]
  i1230.uvTopRightY = i1231[16]
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1233 = data
  i1232.name = i1233[0]
  var i1235 = i1233[1]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1235[i + 0]) );
  }
  i1232.layers = i1234
  var i1237 = i1233[2]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1237[i + 0]) );
  }
  i1232.parameters = i1236
  i1232.animationClips = i1233[3]
  i1232.avatarUnsupported = i1233[4]
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1241 = data
  i1240.name = i1241[0]
  i1240.defaultWeight = i1241[1]
  i1240.blendingMode = i1241[2]
  i1240.avatarMask = i1241[3]
  i1240.syncedLayerIndex = i1241[4]
  i1240.syncedLayerAffectsTiming = !!i1241[5]
  i1240.syncedLayers = i1241[6]
  i1240.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1241[7], i1240.stateMachine)
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1243 = data
  i1242.id = i1243[0]
  i1242.name = i1243[1]
  i1242.path = i1243[2]
  var i1245 = i1243[3]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1245[i + 0]) );
  }
  i1242.states = i1244
  var i1247 = i1243[4]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1247[i + 0]) );
  }
  i1242.machines = i1246
  var i1249 = i1243[5]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1249[i + 0]) );
  }
  i1242.entryStateTransitions = i1248
  var i1251 = i1243[6]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1251[i + 0]) );
  }
  i1242.exitStateTransitions = i1250
  var i1253 = i1243[7]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1253[i + 0]) );
  }
  i1242.anyStateTransitions = i1252
  i1242.defaultStateId = i1243[8]
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1257 = data
  i1256.id = i1257[0]
  i1256.name = i1257[1]
  i1256.cycleOffset = i1257[2]
  i1256.cycleOffsetParameter = i1257[3]
  i1256.cycleOffsetParameterActive = !!i1257[4]
  i1256.mirror = !!i1257[5]
  i1256.mirrorParameter = i1257[6]
  i1256.mirrorParameterActive = !!i1257[7]
  i1256.motionId = i1257[8]
  i1256.nameHash = i1257[9]
  i1256.fullPathHash = i1257[10]
  i1256.speed = i1257[11]
  i1256.speedParameter = i1257[12]
  i1256.speedParameterActive = !!i1257[13]
  i1256.tag = i1257[14]
  i1256.tagHash = i1257[15]
  i1256.writeDefaultValues = !!i1257[16]
  var i1259 = i1257[17]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 2) {
  request.r(i1259[i + 0], i1259[i + 1], 2, i1258, '')
  }
  i1256.behaviours = i1258
  var i1261 = i1257[18]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1261[i + 0]) );
  }
  i1256.transitions = i1260
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1267 = data
  i1266.fullPath = i1267[0]
  i1266.canTransitionToSelf = !!i1267[1]
  i1266.duration = i1267[2]
  i1266.exitTime = i1267[3]
  i1266.hasExitTime = !!i1267[4]
  i1266.hasFixedDuration = !!i1267[5]
  i1266.interruptionSource = i1267[6]
  i1266.offset = i1267[7]
  i1266.orderedInterruption = !!i1267[8]
  i1266.destinationStateId = i1267[9]
  i1266.isExit = !!i1267[10]
  i1266.mute = !!i1267[11]
  i1266.solo = !!i1267[12]
  var i1269 = i1267[13]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1269[i + 0]) );
  }
  i1266.conditions = i1268
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1275 = data
  i1274.destinationStateId = i1275[0]
  i1274.isExit = !!i1275[1]
  i1274.mute = !!i1275[2]
  i1274.solo = !!i1275[3]
  var i1277 = i1275[4]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1277[i + 0]) );
  }
  i1274.conditions = i1276
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1281 = data
  i1280.mode = i1281[0]
  i1280.parameter = i1281[1]
  i1280.threshold = i1281[2]
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1285 = data
  i1284.defaultBool = !!i1285[0]
  i1284.defaultFloat = i1285[1]
  i1284.defaultInt = i1285[2]
  i1284.name = i1285[3]
  i1284.nameHash = i1285[4]
  i1284.type = i1285[5]
  return i1284
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1286 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1287 = data
  i1286.useSafeMode = !!i1287[0]
  i1286.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1287[1], i1286.safeModeOptions)
  i1286.timeScale = i1287[2]
  i1286.unscaledTimeScale = i1287[3]
  i1286.useSmoothDeltaTime = !!i1287[4]
  i1286.maxSmoothUnscaledTime = i1287[5]
  i1286.rewindCallbackMode = i1287[6]
  i1286.showUnityEditorReport = !!i1287[7]
  i1286.logBehaviour = i1287[8]
  i1286.drawGizmos = !!i1287[9]
  i1286.defaultRecyclable = !!i1287[10]
  i1286.defaultAutoPlay = i1287[11]
  i1286.defaultUpdateType = i1287[12]
  i1286.defaultTimeScaleIndependent = !!i1287[13]
  i1286.defaultEaseType = i1287[14]
  i1286.defaultEaseOvershootOrAmplitude = i1287[15]
  i1286.defaultEasePeriod = i1287[16]
  i1286.defaultAutoKill = !!i1287[17]
  i1286.defaultLoopType = i1287[18]
  i1286.debugMode = !!i1287[19]
  i1286.debugStoreTargetId = !!i1287[20]
  i1286.showPreviewPanel = !!i1287[21]
  i1286.storeSettingsLocation = i1287[22]
  i1286.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1287[23], i1286.modules)
  i1286.createASMDEF = !!i1287[24]
  i1286.showPlayingTweens = !!i1287[25]
  i1286.showPausedTweens = !!i1287[26]
  return i1286
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1288 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1289 = data
  i1288.logBehaviour = i1289[0]
  i1288.nestedTweenFailureBehaviour = i1289[1]
  return i1288
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1290 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1291 = data
  i1290.showPanel = !!i1291[0]
  i1290.audioEnabled = !!i1291[1]
  i1290.physicsEnabled = !!i1291[2]
  i1290.physics2DEnabled = !!i1291[3]
  i1290.spriteEnabled = !!i1291[4]
  i1290.uiEnabled = !!i1291[5]
  i1290.textMeshProEnabled = !!i1291[6]
  i1290.tk2DEnabled = !!i1291[7]
  i1290.deAudioEnabled = !!i1291[8]
  i1290.deUnityExtendedEnabled = !!i1291[9]
  i1290.epoOutlineEnabled = !!i1291[10]
  return i1290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1293 = data
  var i1295 = i1293[0]
  var i1294 = []
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1295[i + 0]) );
  }
  i1292.files = i1294
  i1292.componentToPrefabIds = i1293[1]
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1299 = data
  i1298.path = i1299[0]
  request.r(i1299[1], i1299[2], 0, i1298, 'unityObject')
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1301 = data
  var i1303 = i1301[0]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1303[i + 0]) );
  }
  i1300.scriptsExecutionOrder = i1302
  var i1305 = i1301[1]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1305[i + 0]) );
  }
  i1300.sortingLayers = i1304
  var i1307 = i1301[2]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1307[i + 0]) );
  }
  i1300.cullingLayers = i1306
  i1300.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1301[3], i1300.timeSettings)
  i1300.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1301[4], i1300.physicsSettings)
  i1300.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1301[5], i1300.physics2DSettings)
  i1300.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1301[6], i1300.qualitySettings)
  i1300.enableRealtimeShadows = !!i1301[7]
  i1300.enableAutoInstancing = !!i1301[8]
  i1300.enableStaticBatching = !!i1301[9]
  i1300.enableDynamicBatching = !!i1301[10]
  i1300.usePreservativeDynamicBatching = !!i1301[11]
  i1300.lightmapEncodingQuality = i1301[12]
  i1300.desiredColorSpace = i1301[13]
  var i1309 = i1301[14]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.push( i1309[i + 0] );
  }
  i1300.allTags = i1308
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1313 = data
  i1312.name = i1313[0]
  i1312.value = i1313[1]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1317 = data
  i1316.id = i1317[0]
  i1316.name = i1317[1]
  i1316.value = i1317[2]
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1321 = data
  i1320.id = i1321[0]
  i1320.name = i1321[1]
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1323 = data
  i1322.fixedDeltaTime = i1323[0]
  i1322.maximumDeltaTime = i1323[1]
  i1322.timeScale = i1323[2]
  i1322.maximumParticleTimestep = i1323[3]
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1325 = data
  i1324.gravity = new pc.Vec3( i1325[0], i1325[1], i1325[2] )
  i1324.defaultSolverIterations = i1325[3]
  i1324.bounceThreshold = i1325[4]
  i1324.autoSyncTransforms = !!i1325[5]
  i1324.autoSimulation = !!i1325[6]
  var i1327 = i1325[7]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1327[i + 0]) );
  }
  i1324.collisionMatrix = i1326
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1331 = data
  i1330.enabled = !!i1331[0]
  i1330.layerId = i1331[1]
  i1330.otherLayerId = i1331[2]
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1333 = data
  request.r(i1333[0], i1333[1], 0, i1332, 'material')
  i1332.gravity = new pc.Vec2( i1333[2], i1333[3] )
  i1332.positionIterations = i1333[4]
  i1332.velocityIterations = i1333[5]
  i1332.velocityThreshold = i1333[6]
  i1332.maxLinearCorrection = i1333[7]
  i1332.maxAngularCorrection = i1333[8]
  i1332.maxTranslationSpeed = i1333[9]
  i1332.maxRotationSpeed = i1333[10]
  i1332.baumgarteScale = i1333[11]
  i1332.baumgarteTOIScale = i1333[12]
  i1332.timeToSleep = i1333[13]
  i1332.linearSleepTolerance = i1333[14]
  i1332.angularSleepTolerance = i1333[15]
  i1332.defaultContactOffset = i1333[16]
  i1332.autoSimulation = !!i1333[17]
  i1332.queriesHitTriggers = !!i1333[18]
  i1332.queriesStartInColliders = !!i1333[19]
  i1332.callbacksOnDisable = !!i1333[20]
  i1332.reuseCollisionCallbacks = !!i1333[21]
  i1332.autoSyncTransforms = !!i1333[22]
  var i1335 = i1333[23]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1335[i + 0]) );
  }
  i1332.collisionMatrix = i1334
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1339 = data
  i1338.enabled = !!i1339[0]
  i1338.layerId = i1339[1]
  i1338.otherLayerId = i1339[2]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1341 = data
  var i1343 = i1341[0]
  var i1342 = []
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1343[i + 0]) );
  }
  i1340.qualityLevels = i1342
  var i1345 = i1341[1]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( i1345[i + 0] );
  }
  i1340.names = i1344
  i1340.shadows = i1341[2]
  i1340.anisotropicFiltering = i1341[3]
  i1340.antiAliasing = i1341[4]
  i1340.lodBias = i1341[5]
  i1340.shadowCascades = i1341[6]
  i1340.shadowDistance = i1341[7]
  i1340.shadowmaskMode = i1341[8]
  i1340.shadowProjection = i1341[9]
  i1340.shadowResolution = i1341[10]
  i1340.softParticles = !!i1341[11]
  i1340.softVegetation = !!i1341[12]
  i1340.activeColorSpace = i1341[13]
  i1340.desiredColorSpace = i1341[14]
  i1340.masterTextureLimit = i1341[15]
  i1340.maxQueuedFrames = i1341[16]
  i1340.particleRaycastBudget = i1341[17]
  i1340.pixelLightCount = i1341[18]
  i1340.realtimeReflectionProbes = !!i1341[19]
  i1340.shadowCascade2Split = i1341[20]
  i1340.shadowCascade4Split = new pc.Vec3( i1341[21], i1341[22], i1341[23] )
  i1340.streamingMipmapsActive = !!i1341[24]
  i1340.vSyncCount = i1341[25]
  i1340.asyncUploadBufferSize = i1341[26]
  i1340.asyncUploadTimeSlice = i1341[27]
  i1340.billboardsFaceCameraPosition = !!i1341[28]
  i1340.shadowNearPlaneOffset = i1341[29]
  i1340.streamingMipmapsMemoryBudget = i1341[30]
  i1340.maximumLODLevel = i1341[31]
  i1340.streamingMipmapsAddAllCameras = !!i1341[32]
  i1340.streamingMipmapsMaxLevelReduction = i1341[33]
  i1340.streamingMipmapsRenderersPerFrame = i1341[34]
  i1340.resolutionScalingFixedDPIFactor = i1341[35]
  i1340.streamingMipmapsMaxFileIORequests = i1341[36]
  i1340.currentQualityLevel = i1341[37]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i1349 = data
  var i1351 = i1349[0]
  var i1350 = []
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i1351[i + 0]) );
  }
  i1348.groups = i1350
  var i1353 = i1349[1]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i1353[i + 0]) );
  }
  i1348.snapshots = i1352
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i1357 = data
  i1356.id = i1357[0]
  i1356.childGroupIds = i1357[1]
  i1356.name = i1357[2]
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i1361 = data
  i1360.id = i1361[0]
  var i1363 = i1361[1]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i1363[i + 0]) );
  }
  i1360.parameters = i1362
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i1367 = data
  i1366.name = i1367[0]
  i1366.value = i1367[1]
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1371 = data
  i1370.weight = i1371[0]
  i1370.vertices = i1371[1]
  i1370.normals = i1371[2]
  i1370.tangents = i1371[3]
  return i1370
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"edgeRadius":0,"points":1,"useAdjacentStartPoint":2,"adjacentStartPoint":3,"useAdjacentEndPoint":5,"adjacentEndPoint":6,"enabled":8,"isTrigger":9,"usedByEffector":10,"density":11,"offset":12,"material":14},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicsMaterial2D":{"name":0,"bounciness":1,"friction":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"78":[79],"80":[79],"81":[79],"82":[79],"83":[79],"84":[79],"85":[86],"87":[53],"88":[89],"90":[89],"91":[89],"92":[89],"93":[89],"94":[89],"95":[89],"96":[44],"97":[44],"98":[44],"99":[44],"100":[44],"101":[44],"102":[44],"103":[44],"104":[44],"105":[44],"106":[44],"107":[44],"108":[44],"109":[53],"110":[111],"112":[113],"114":[113],"64":[58],"115":[33],"39":[15],"116":[11],"117":[15],"118":[119],"120":[119],"121":[10],"21":[11],"122":[15],"19":[15],"123":[58],"124":[58],"67":[64],"59":[68,58],"125":[58],"66":[64],"126":[58],"127":[58],"128":[58],"129":[58],"130":[58],"131":[58],"132":[58],"133":[58],"134":[58],"135":[68,58],"136":[58],"137":[58],"138":[58],"139":[58],"60":[68,58],"140":[58],"141":[72],"142":[72],"73":[72],"143":[72],"144":[53],"145":[53]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","MenuLevel","UnityEngine.GameObject","DG.Tweening.DOTweenAnimation","UnityEngine.BoxCollider2D","UnityEngine.AudioClip","IntroLevelAnim","Level_PoseController","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.U2D.Animation.SpriteSkin","BD_AnimationHelper","SpriteButton","PlayableRouter","UnityEngine.TrailRenderer","Level1_Armpit_Playable","BasicDrag","BD_CameraFollow","ActionOnTap","UnityEngine.AudioSource","BD_Clamp","ScratchCardAsset.ScratchCardManager","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.LineRenderer","TextureOffsetScroller","UnityEditor.Audio.AudioMixerGroupController","PlaySfxOnCollision","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","BD_Fold","UnityEngine.PolygonCollider2D","UnityEngine.EdgeCollider2D","UnityEngine.PhysicsMaterial2D","JarRotator","UnityEngine.Rigidbody2D","UnityEngine.SpriteMask","Level1_Armpit_WaxCount","BD_AnimatorDrag","TapandHold_Simple","BD_Progress","BD_ToolRotate","PlaceItem","BD_Dropper","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "13.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "2Sept2026_CompleteLevel_1_4_v1";

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

Deserializers.buildID = "95d75819-bfd8-4e0e-894f-acc0d5867cad";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

