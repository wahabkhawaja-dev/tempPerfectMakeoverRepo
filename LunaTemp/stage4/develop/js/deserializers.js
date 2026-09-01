var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.JointSpring' )
  var i685 = data
  i684.spring = i685[0]
  i684.damper = i685[1]
  i684.targetPosition = i685[2]
  return i684
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.JointMotor' )
  var i687 = data
  i686.m_TargetVelocity = i687[0]
  i686.m_Force = i687[1]
  i686.m_FreeSpin = i687[2]
  return i686
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.JointLimits' )
  var i689 = data
  i688.m_Min = i689[0]
  i688.m_Max = i689[1]
  i688.m_Bounciness = i689[2]
  i688.m_BounceMinVelocity = i689[3]
  i688.m_ContactDistance = i689[4]
  i688.minBounce = i689[5]
  i688.maxBounce = i689[6]
  return i688
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.JointDrive' )
  var i691 = data
  i690.m_PositionSpring = i691[0]
  i690.m_PositionDamper = i691[1]
  i690.m_MaximumForce = i691[2]
  i690.m_UseAcceleration = i691[3]
  return i690
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i693 = data
  i692.m_Spring = i693[0]
  i692.m_Damper = i693[1]
  return i692
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i695 = data
  i694.m_Limit = i695[0]
  i694.m_Bounciness = i695[1]
  i694.m_ContactDistance = i695[2]
  return i694
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i697 = data
  i696.m_ExtremumSlip = i697[0]
  i696.m_ExtremumValue = i697[1]
  i696.m_AsymptoteSlip = i697[2]
  i696.m_AsymptoteValue = i697[3]
  i696.m_Stiffness = i697[4]
  return i696
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i699 = data
  i698.m_LowerAngle = i699[0]
  i698.m_UpperAngle = i699[1]
  return i698
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i701 = data
  i700.m_MotorSpeed = i701[0]
  i700.m_MaximumMotorTorque = i701[1]
  return i700
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i703 = data
  i702.m_DampingRatio = i703[0]
  i702.m_Frequency = i703[1]
  i702.m_Angle = i703[2]
  return i702
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i705 = data
  i704.m_LowerTranslation = i705[0]
  i704.m_UpperTranslation = i705[1]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i706 = root || new pc.UnityMaterial()
  var i707 = data
  i706.name = i707[0]
  request.r(i707[1], i707[2], 0, i706, 'shader')
  i706.renderQueue = i707[3]
  i706.enableInstancing = !!i707[4]
  var i709 = i707[5]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i709[i + 0]) );
  }
  i706.floatParameters = i708
  var i711 = i707[6]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i711[i + 0]) );
  }
  i706.colorParameters = i710
  var i713 = i707[7]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i713[i + 0]) );
  }
  i706.vectorParameters = i712
  var i715 = i707[8]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i715[i + 0]) );
  }
  i706.textureParameters = i714
  var i717 = i707[9]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i717[i + 0]) );
  }
  i706.materialFlags = i716
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i721 = data
  i720.name = i721[0]
  i720.value = i721[1]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i725 = data
  i724.name = i725[0]
  i724.value = new pc.Color(i725[1], i725[2], i725[3], i725[4])
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i729 = data
  i728.name = i729[0]
  i728.value = new pc.Vec4( i729[1], i729[2], i729[3], i729[4] )
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i733 = data
  i732.name = i733[0]
  request.r(i733[1], i733[2], 0, i732, 'value')
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i737 = data
  i736.name = i737[0]
  i736.enabled = !!i737[1]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i739 = data
  i738.name = i739[0]
  i738.width = i739[1]
  i738.height = i739[2]
  i738.mipmapCount = i739[3]
  i738.anisoLevel = i739[4]
  i738.filterMode = i739[5]
  i738.hdr = !!i739[6]
  i738.format = i739[7]
  i738.wrapMode = i739[8]
  i738.alphaIsTransparency = !!i739[9]
  i738.alphaSource = i739[10]
  i738.graphicsFormat = i739[11]
  i738.sRGBTexture = !!i739[12]
  i738.desiredColorSpace = i739[13]
  i738.wrapU = i739[14]
  i738.wrapV = i739[15]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i741 = data
  i740.name = i741[0]
  i740.halfPrecision = !!i741[1]
  i740.useSimplification = !!i741[2]
  i740.useUInt32IndexFormat = !!i741[3]
  i740.vertexCount = i741[4]
  i740.aabb = i741[5]
  var i743 = i741[6]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( !!i743[i + 0] );
  }
  i740.streams = i742
  i740.vertices = i741[7]
  var i745 = i741[8]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i745[i + 0]) );
  }
  i740.subMeshes = i744
  var i747 = i741[9]
  var i746 = []
  for(var i = 0; i < i747.length; i += 16) {
    i746.push( new pc.Mat4().setData(i747[i + 0], i747[i + 1], i747[i + 2], i747[i + 3],  i747[i + 4], i747[i + 5], i747[i + 6], i747[i + 7],  i747[i + 8], i747[i + 9], i747[i + 10], i747[i + 11],  i747[i + 12], i747[i + 13], i747[i + 14], i747[i + 15]) );
  }
  i740.bindposes = i746
  var i749 = i741[10]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i749[i + 0]) );
  }
  i740.blendShapes = i748
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i755 = data
  i754.triangles = i755[0]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i761 = data
  i760.name = i761[0]
  var i763 = i761[1]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i763[i + 0]) );
  }
  i760.frames = i762
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i765 = data
  i764.position = new pc.Vec3( i765[0], i765[1], i765[2] )
  i764.scale = new pc.Vec3( i765[3], i765[4], i765[5] )
  i764.rotation = new pc.Quat(i765[6], i765[7], i765[8], i765[9])
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i767 = data
  i766.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i767[0], i766.main)
  i766.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i767[1], i766.colorBySpeed)
  i766.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i767[2], i766.colorOverLifetime)
  i766.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i767[3], i766.emission)
  i766.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i767[4], i766.rotationBySpeed)
  i766.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i767[5], i766.rotationOverLifetime)
  i766.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i767[6], i766.shape)
  i766.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i767[7], i766.sizeBySpeed)
  i766.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i767[8], i766.sizeOverLifetime)
  i766.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i767[9], i766.textureSheetAnimation)
  i766.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i767[10], i766.velocityOverLifetime)
  i766.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i767[11], i766.noise)
  i766.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i767[12], i766.inheritVelocity)
  i766.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i767[13], i766.forceOverLifetime)
  i766.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i767[14], i766.limitVelocityOverLifetime)
  i766.useAutoRandomSeed = !!i767[15]
  i766.randomSeed = i767[16]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemMain()
  var i769 = data
  i768.duration = i769[0]
  i768.loop = !!i769[1]
  i768.prewarm = !!i769[2]
  i768.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[3], i768.startDelay)
  i768.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[4], i768.startLifetime)
  i768.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[5], i768.startSpeed)
  i768.startSize3D = !!i769[6]
  i768.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[7], i768.startSizeX)
  i768.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[8], i768.startSizeY)
  i768.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[9], i768.startSizeZ)
  i768.startRotation3D = !!i769[10]
  i768.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[11], i768.startRotationX)
  i768.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[12], i768.startRotationY)
  i768.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[13], i768.startRotationZ)
  i768.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i769[14], i768.startColor)
  i768.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[15], i768.gravityModifier)
  i768.simulationSpace = i769[16]
  request.r(i769[17], i769[18], 0, i768, 'customSimulationSpace')
  i768.simulationSpeed = i769[19]
  i768.useUnscaledTime = !!i769[20]
  i768.scalingMode = i769[21]
  i768.playOnAwake = !!i769[22]
  i768.maxParticles = i769[23]
  i768.emitterVelocityMode = i769[24]
  i768.stopAction = i769[25]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i770 = root || new pc.MinMaxCurve()
  var i771 = data
  i770.mode = i771[0]
  i770.curveMin = new pc.AnimationCurve( { keys_flow: i771[1] } )
  i770.curveMax = new pc.AnimationCurve( { keys_flow: i771[2] } )
  i770.curveMultiplier = i771[3]
  i770.constantMin = i771[4]
  i770.constantMax = i771[5]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i772 = root || new pc.MinMaxGradient()
  var i773 = data
  i772.mode = i773[0]
  i772.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i773[1], i772.gradientMin)
  i772.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i773[2], i772.gradientMax)
  i772.colorMin = new pc.Color(i773[3], i773[4], i773[5], i773[6])
  i772.colorMax = new pc.Color(i773[7], i773[8], i773[9], i773[10])
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i775 = data
  i774.mode = i775[0]
  var i777 = i775[1]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i777[i + 0]) );
  }
  i774.colorKeys = i776
  var i779 = i775[2]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i779[i + 0]) );
  }
  i774.alphaKeys = i778
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemColorBySpeed()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i781[1], i780.color)
  i780.range = new pc.Vec2( i781[2], i781[3] )
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i785 = data
  i784.color = new pc.Color(i785[0], i785[1], i785[2], i785[3])
  i784.time = i785[4]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i789 = data
  i788.alpha = i789[0]
  i788.time = i789[1]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemColorOverLifetime()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i791[1], i790.color)
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemEmitter()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[1], i792.rateOverTime)
  i792.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.rateOverDistance)
  var i795 = i793[3]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i795[i + 0]) );
  }
  i792.bursts = i794
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemBurst()
  var i799 = data
  i798.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[0], i798.count)
  i798.cycleCount = i799[1]
  i798.minCount = i799[2]
  i798.maxCount = i799[3]
  i798.repeatInterval = i799[4]
  i798.time = i799[5]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemRotationBySpeed()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[1], i800.x)
  i800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[2], i800.y)
  i800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[3], i800.z)
  i800.separateAxes = !!i801[4]
  i800.range = new pc.Vec2( i801[5], i801[6] )
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemRotationOverLifetime()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[1], i802.x)
  i802.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[2], i802.y)
  i802.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[3], i802.z)
  i802.separateAxes = !!i803[4]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemShape()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.shapeType = i805[1]
  i804.randomDirectionAmount = i805[2]
  i804.sphericalDirectionAmount = i805[3]
  i804.randomPositionAmount = i805[4]
  i804.alignToDirection = !!i805[5]
  i804.radius = i805[6]
  i804.radiusMode = i805[7]
  i804.radiusSpread = i805[8]
  i804.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[9], i804.radiusSpeed)
  i804.radiusThickness = i805[10]
  i804.angle = i805[11]
  i804.length = i805[12]
  i804.boxThickness = new pc.Vec3( i805[13], i805[14], i805[15] )
  i804.meshShapeType = i805[16]
  request.r(i805[17], i805[18], 0, i804, 'mesh')
  request.r(i805[19], i805[20], 0, i804, 'meshRenderer')
  request.r(i805[21], i805[22], 0, i804, 'skinnedMeshRenderer')
  i804.useMeshMaterialIndex = !!i805[23]
  i804.meshMaterialIndex = i805[24]
  i804.useMeshColors = !!i805[25]
  i804.normalOffset = i805[26]
  i804.arc = i805[27]
  i804.arcMode = i805[28]
  i804.arcSpread = i805[29]
  i804.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[30], i804.arcSpeed)
  i804.donutRadius = i805[31]
  i804.position = new pc.Vec3( i805[32], i805[33], i805[34] )
  i804.rotation = new pc.Vec3( i805[35], i805[36], i805[37] )
  i804.scale = new pc.Vec3( i805[38], i805[39], i805[40] )
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemSizeBySpeed()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[1], i806.x)
  i806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.y)
  i806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.z)
  i806.separateAxes = !!i807[4]
  i806.range = new pc.Vec2( i807[5], i807[6] )
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemSizeOverLifetime()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[1], i808.x)
  i808.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.y)
  i808.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[3], i808.z)
  i808.separateAxes = !!i809[4]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.mode = i811[1]
  i810.animation = i811[2]
  i810.numTilesX = i811[3]
  i810.numTilesY = i811[4]
  i810.useRandomRow = !!i811[5]
  i810.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[6], i810.frameOverTime)
  i810.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[7], i810.startFrame)
  i810.cycleCount = i811[8]
  i810.rowIndex = i811[9]
  i810.flipU = i811[10]
  i810.flipV = i811[11]
  i810.spriteCount = i811[12]
  var i813 = i811[13]
  var i812 = []
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 2, i812, '')
  }
  i810.sprites = i812
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[1], i816.x)
  i816.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.y)
  i816.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[3], i816.z)
  i816.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[4], i816.radial)
  i816.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[5], i816.speedModifier)
  i816.space = i817[6]
  i816.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[7], i816.orbitalX)
  i816.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[8], i816.orbitalY)
  i816.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[9], i816.orbitalZ)
  i816.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[10], i816.orbitalOffsetX)
  i816.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[11], i816.orbitalOffsetY)
  i816.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[12], i816.orbitalOffsetZ)
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemNoise()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.separateAxes = !!i819[1]
  i818.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.strengthX)
  i818.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[3], i818.strengthY)
  i818.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[4], i818.strengthZ)
  i818.frequency = i819[5]
  i818.damping = !!i819[6]
  i818.octaveCount = i819[7]
  i818.octaveMultiplier = i819[8]
  i818.octaveScale = i819[9]
  i818.quality = i819[10]
  i818.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[11], i818.scrollSpeed)
  i818.scrollSpeedMultiplier = i819[12]
  i818.remapEnabled = !!i819[13]
  i818.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[14], i818.remapX)
  i818.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[15], i818.remapY)
  i818.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[16], i818.remapZ)
  i818.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[17], i818.positionAmount)
  i818.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[18], i818.rotationAmount)
  i818.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[19], i818.sizeAmount)
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemInheritVelocity()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.mode = i821[1]
  i820.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[2], i820.curve)
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemForceOverLifetime()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[1], i822.x)
  i822.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[2], i822.y)
  i822.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[3], i822.z)
  i822.space = i823[4]
  i822.randomized = !!i823[5]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i824 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i825 = data
  i824.enabled = !!i825[0]
  i824.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[1], i824.limit)
  i824.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[2], i824.limitX)
  i824.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[3], i824.limitY)
  i824.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[4], i824.limitZ)
  i824.dampen = i825[5]
  i824.separateAxes = !!i825[6]
  i824.space = i825[7]
  i824.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i825[8], i824.drag)
  i824.multiplyDragByParticleSize = !!i825[9]
  i824.multiplyDragByParticleVelocity = !!i825[10]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'mesh')
  i826.meshCount = i827[2]
  i826.activeVertexStreamsCount = i827[3]
  i826.alignment = i827[4]
  i826.renderMode = i827[5]
  i826.sortMode = i827[6]
  i826.lengthScale = i827[7]
  i826.velocityScale = i827[8]
  i826.cameraVelocityScale = i827[9]
  i826.normalDirection = i827[10]
  i826.sortingFudge = i827[11]
  i826.minParticleSize = i827[12]
  i826.maxParticleSize = i827[13]
  i826.pivot = new pc.Vec3( i827[14], i827[15], i827[16] )
  request.r(i827[17], i827[18], 0, i826, 'trailMaterial')
  i826.applyActiveColorSpace = !!i827[19]
  i826.enabled = !!i827[20]
  request.r(i827[21], i827[22], 0, i826, 'sharedMaterial')
  var i829 = i827[23]
  var i828 = []
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 2, i828, '')
  }
  i826.sharedMaterials = i828
  i826.receiveShadows = !!i827[24]
  i826.shadowCastingMode = i827[25]
  i826.sortingLayerID = i827[26]
  i826.sortingOrder = i827[27]
  i826.lightmapIndex = i827[28]
  i826.lightmapSceneIndex = i827[29]
  i826.lightmapScaleOffset = new pc.Vec4( i827[30], i827[31], i827[32], i827[33] )
  i826.lightProbeUsage = i827[34]
  i826.reflectionProbeUsage = i827[35]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i833 = data
  i832.name = i833[0]
  i832.tagId = i833[1]
  i832.enabled = !!i833[2]
  i832.isStatic = !!i833[3]
  i832.layer = i833[4]
  return i832
}

Deserializers["Level1_Cloth_Playable"] = function (request, data, root) {
  var i834 = root || request.c( 'Level1_Cloth_Playable' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'WashingView')
  request.r(i835[2], i835[3], 0, i834, 'WashingTools')
  request.r(i835[4], i835[5], 0, i834, 'DressingView')
  request.r(i835[6], i835[7], 0, i834, 'DressingTools')
  i834.ZoomStep1 = request.d('ZoomPos', i835[8], i834.ZoomStep1)
  request.r(i835[9], i835[10], 0, i834, 'ToolStep1')
  request.r(i835[11], i835[12], 0, i834, 'Basket_Cloth')
  request.r(i835[13], i835[14], 0, i834, 'clothInside')
  request.r(i835[15], i835[16], 0, i834, 'clothRound')
  request.r(i835[17], i835[18], 0, i834, 'machineDoor')
  request.r(i835[19], i835[20], 0, i834, 'machineGlass')
  i834.ZoomStep2 = request.d('ZoomPos', i835[21], i834.ZoomStep2)
  i834.ZoomStep2b = request.d('ZoomPos', i835[22], i834.ZoomStep2b)
  request.r(i835[23], i835[24], 0, i834, 'ToolStep2')
  request.r(i835[25], i835[26], 0, i834, 'ToolStep2CamFollow')
  request.r(i835[27], i835[28], 0, i834, 'drawerObj')
  request.r(i835[29], i835[30], 0, i834, 'surfObj')
  request.r(i835[31], i835[32], 0, i834, 'surfPackTop')
  request.r(i835[33], i835[34], 0, i834, 'handStep2')
  request.r(i835[35], i835[36], 0, i834, 'surfController')
  request.r(i835[37], i835[38], 0, i834, 'clothsInside')
  request.r(i835[39], i835[40], 0, i834, 'clothsInsideGlass')
  request.r(i835[41], i835[42], 0, i834, 'clothsStaticClean')
  request.r(i835[43], i835[44], 0, i834, 'wetCloths')
  request.r(i835[45], i835[46], 0, i834, 'clothCleanInside')
  request.r(i835[47], i835[48], 0, i834, 'clothCleanInsideAnim')
  request.r(i835[49], i835[50], 0, i834, 'waterWave')
  request.r(i835[51], i835[52], 0, i834, 'clothCleanInside2')
  request.r(i835[53], i835[54], 0, i834, 'clothCleanInside2Cam')
  request.r(i835[55], i835[56], 0, i834, 'clothBasketTarget')
  request.r(i835[57], i835[58], 0, i834, 'clothBasketTarget2')
  request.r(i835[59], i835[60], 0, i834, 'waterSplash_Vfx')
  request.r(i835[61], i835[62], 0, i834, 'countDownTimerText')
  i834.countDown = i835[63]
  request.r(i835[64], i835[65], 0, i834, 'machineTimer')
  request.r(i835[66], i835[67], 0, i834, 'machineTimerRotater')
  request.r(i835[68], i835[69], 0, i834, 'machineTimerIndication')
  request.r(i835[70], i835[71], 0, i834, 'darazOpenSfx')
  request.r(i835[72], i835[73], 0, i834, 'darazCloseSfx')
  request.r(i835[74], i835[75], 0, i834, 'doorOpenSfx')
  request.r(i835[76], i835[77], 0, i834, 'machineStartSfx')
  request.r(i835[78], i835[79], 0, i834, 'machineFinishSfx')
  request.r(i835[80], i835[81], 0, i834, 'waterDrainSfx')
  i834.ZoomStep3a = request.d('ZoomPos', i835[82], i834.ZoomStep3a)
  request.r(i835[83], i835[84], 0, i834, 'ToolStep3a')
  request.r(i835[85], i835[86], 0, i834, 'ToolStep3aRend')
  request.r(i835[87], i835[88], 0, i834, 'dressingBasket')
  request.r(i835[89], i835[90], 0, i834, 'dummyFullParent')
  request.r(i835[91], i835[92], 0, i834, 'DressParent')
  i834.ZoomStep3 = request.d('ZoomPos', i835[93], i834.ZoomStep3)
  request.r(i835[94], i835[95], 0, i834, 'ToolStep3')
  request.r(i835[96], i835[97], 0, i834, 'tornPatch')
  request.r(i835[98], i835[99], 0, i834, 'patchCompleted')
  request.r(i835[100], i835[101], 0, i834, 'patchOutline')
  i834.ZoomStep4 = request.d('ZoomPos', i835[102], i834.ZoomStep4)
  request.r(i835[103], i835[104], 0, i834, 'ToolStep4')
  request.r(i835[105], i835[106], 0, i834, 'camFollowStep4')
  request.r(i835[107], i835[108], 0, i834, 'SteamerBottom')
  i834.ZoomStep5 = request.d('ZoomPos', i835[109], i834.ZoomStep5)
  request.r(i835[110], i835[111], 0, i834, 'ToolStep5')
  request.r(i835[112], i835[113], 0, i834, 'ribbonFinalTarget')
  request.r(i835[114], i835[115], 0, i834, 'ribbonFinal')
  request.r(i835[116], i835[117], 0, i834, 'handIndication5')
  i834.levelName = i835[118]
  i834.levelReward = i835[119]
  request.r(i835[120], i835[121], 0, i834, 'LevelIcon')
  request.r(i835[122], i835[123], 0, i834, 'Level_BG')
  var i837 = i835[124]
  var i836 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 1, i836, '')
  }
  i834.ToolIcons = i836
  var i839 = i835[125]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i834.AllDrags = i838
  var i841 = i835[126]
  var i840 = []
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 2, i840, '')
  }
  i834.AllSources = i840
  var i843 = i835[127]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i834.AllScratches = i842
  i834.stepsDone = i835[128]
  i834.levelNo = i835[129]
  i834.partNo = i835[130]
  request.r(i835[131], i835[132], 0, i834, 'clothSfx')
  request.r(i835[133], i835[134], 0, i834, 'doorCloseSfx')
  return i834
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i844 = root || request.c( 'ZoomPos' )
  var i845 = data
  i844.CameraPos = new pc.Vec3( i845[0], i845[1], i845[2] )
  i844.CameraFOV = i845[3]
  return i844
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i854 = root || request.c( 'PlayableCTA' )
  var i855 = data
  i854.trigger = i855[0]
  i854.afterSeconds = i855[1]
  i854.afterTaps = i855[2]
  request.r(i855[3], i855[4], 0, i854, 'scratchProgress')
  i854.scratchIndex = i855[5]
  i854.progressThreshold = i855[6]
  request.r(i855[7], i855[8], 0, i854, 'watchedTool')
  i854.blockInputOnFire = !!i855[9]
  i854.refireOnEveryTap = !!i855[10]
  i854.refireDelay = i855[11]
  i854.showEndCard = !!i855[12]
  request.r(i855[13], i855[14], 0, i854, 'endCard')
  i854.showEndCardOnProgressTrigger = !!i855[15]
  i854.showEndCardOnToolAppearTrigger = !!i855[16]
  i854.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i855[17], i854.onCtaFired)
  i854.logWhenFired = !!i855[18]
  return i854
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i857 = data
  i856.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i857[0], i856.m_PersistentCalls)
  return i856
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i859 = data
  var i861 = i859[0]
  var i860 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i861.length; i += 1) {
    i860.add(request.d('UnityEngine.Events.PersistentCall', i861[i + 0]));
  }
  i858.m_Calls = i860
  return i858
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'm_Target')
  i864.m_TargetAssemblyTypeName = i865[2]
  i864.m_MethodName = i865[3]
  i864.m_Mode = i865[4]
  i864.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i865[5], i864.m_Arguments)
  i864.m_CallState = i865[6]
  return i864
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i866 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'MainCamera')
  i866.RenderType = i867[2]
  request.r(i867[3], i867[4], 0, i866, 'ScratchSurfaceSprite')
  i866.ScratchSurfaceSpriteHasAlpha = !!i867[5]
  i866.MaskProgressCutOffValue = i867[6]
  request.r(i867[7], i867[8], 0, i866, 'EraseTexture')
  i866.EraseTextureScale = new pc.Vec2( i867[9], i867[10] )
  i866.InputEnabled = !!i867[11]
  request.r(i867[12], i867[13], 0, i866, 'Card')
  i866.Mode = i867[14]
  request.r(i867[15], i867[16], 0, i866, 'Progress')
  request.r(i867[17], i867[18], 0, i866, 'MeshCard')
  request.r(i867[19], i867[20], 0, i866, 'SpriteCard')
  request.r(i867[21], i867[22], 0, i866, 'ImageCard')
  request.r(i867[23], i867[24], 0, i866, 'MaskShader')
  request.r(i867[25], i867[26], 0, i866, 'BrushShader')
  request.r(i867[27], i867[28], 0, i866, 'MaskProgressShader')
  request.r(i867[29], i867[30], 0, i866, 'MaskProgressCutOffShader')
  return i866
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i868 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'MainCamera')
  request.r(i869[2], i869[3], 0, i868, 'Surface')
  i868.RenderTextureQuality = i869[4]
  request.r(i869[5], i869[6], 0, i868, 'Eraser')
  request.r(i869[7], i869[8], 0, i868, 'Progress')
  request.r(i869[9], i869[10], 0, i868, 'ScratchSurface')
  request.r(i869[11], i869[12], 0, i868, 'RenderTexture')
  i868.BrushScale = new pc.Vec2( i869[13], i869[14] )
  request.r(i869[15], i869[16], 0, i868, 'ToolTip')
  i868.InputEnabled = !!i869[17]
  i868.IsScratching = !!i869[18]
  i868.useChangingScale = !!i869[19]
  i868.useGivenBrushScale = !!i869[20]
  i868.canSpreadMask = !!i869[21]
  i868.shouldPaintHoles = !!i869[22]
  i868.canRotateTip = !!i869[23]
  i868._mode = i869[24]
  return i868
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i870 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'Card')
  i870.currentProgress = i871[2]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i873 = data
  i872.textureMode = i873[0]
  i872.alignment = i873[1]
  i872.widthCurve = new pc.AnimationCurve( { keys_flow: i873[2] } )
  i872.colorGradient = i873[3] ? new pc.ColorGradient(i873[3][0], i873[3][1], i873[3][2]) : null
  var i875 = i873[4]
  var i874 = []
  for(var i = 0; i < i875.length; i += 3) {
    i874.push( new pc.Vec3( i875[i + 0], i875[i + 1], i875[i + 2] ) );
  }
  i872.positions = i874
  i872.positionCount = i873[5]
  i872.widthMultiplier = i873[6]
  i872.startWidth = i873[7]
  i872.endWidth = i873[8]
  i872.numCornerVertices = i873[9]
  i872.numCapVertices = i873[10]
  i872.useWorldSpace = !!i873[11]
  i872.loop = !!i873[12]
  i872.startColor = new pc.Color(i873[13], i873[14], i873[15], i873[16])
  i872.endColor = new pc.Color(i873[17], i873[18], i873[19], i873[20])
  i872.generateLightingData = !!i873[21]
  i872.enabled = !!i873[22]
  request.r(i873[23], i873[24], 0, i872, 'sharedMaterial')
  var i877 = i873[25]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i872.sharedMaterials = i876
  i872.receiveShadows = !!i873[26]
  i872.shadowCastingMode = i873[27]
  i872.sortingLayerID = i873[28]
  i872.sortingOrder = i873[29]
  i872.lightmapIndex = i873[30]
  i872.lightmapSceneIndex = i873[31]
  i872.lightmapScaleOffset = new pc.Vec4( i873[32], i873[33], i873[34], i873[35] )
  i872.lightProbeUsage = i873[36]
  i872.reflectionProbeUsage = i873[37]
  return i872
}

Deserializers["TextureOffsetScroller"] = function (request, data, root) {
  var i880 = root || request.c( 'TextureOffsetScroller' )
  var i881 = data
  i880.scrollSpeed = new pc.Vec2( i881[0], i881[1] )
  i880.smoothStart = !!i881[2]
  i880.smoothDuration = i881[3]
  i880.textureName = i881[4]
  i880.useSharedMaterial = !!i881[5]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'animatorController')
  request.r(i883[2], i883[3], 0, i882, 'avatar')
  i882.updateMode = i883[4]
  i882.hasTransformHierarchy = !!i883[5]
  i882.applyRootMotion = !!i883[6]
  var i885 = i883[7]
  var i884 = []
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 2, i884, '')
  }
  i882.humanBones = i884
  i882.enabled = !!i883[8]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i889 = data
  i888.color = new pc.Color(i889[0], i889[1], i889[2], i889[3])
  request.r(i889[4], i889[5], 0, i888, 'sprite')
  i888.flipX = !!i889[6]
  i888.flipY = !!i889[7]
  i888.drawMode = i889[8]
  i888.size = new pc.Vec2( i889[9], i889[10] )
  i888.tileMode = i889[11]
  i888.adaptiveModeThreshold = i889[12]
  i888.maskInteraction = i889[13]
  i888.spriteSortPoint = i889[14]
  i888.enabled = !!i889[15]
  request.r(i889[16], i889[17], 0, i888, 'sharedMaterial')
  var i891 = i889[18]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i888.sharedMaterials = i890
  i888.receiveShadows = !!i889[19]
  i888.shadowCastingMode = i889[20]
  i888.sortingLayerID = i889[21]
  i888.sortingOrder = i889[22]
  i888.lightmapIndex = i889[23]
  i888.lightmapSceneIndex = i889[24]
  i888.lightmapScaleOffset = new pc.Vec4( i889[25], i889[26], i889[27], i889[28] )
  i888.lightProbeUsage = i889[29]
  i888.reflectionProbeUsage = i889[30]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i893 = data
  var i895 = i893[0]
  var i894 = []
  for(var i = 0; i < i895.length; i += 3) {
    i894.push( new pc.Vec3( i895[i + 0], i895[i + 1], i895[i + 2] ) );
  }
  i892.positions = i894
  i892.positionCount = i893[1]
  i892.time = i893[2]
  i892.startWidth = i893[3]
  i892.endWidth = i893[4]
  i892.widthMultiplier = i893[5]
  i892.autodestruct = !!i893[6]
  i892.emitting = !!i893[7]
  i892.numCornerVertices = i893[8]
  i892.numCapVertices = i893[9]
  i892.minVertexDistance = i893[10]
  i892.colorGradient = i893[11] ? new pc.ColorGradient(i893[11][0], i893[11][1], i893[11][2]) : null
  i892.startColor = new pc.Color(i893[12], i893[13], i893[14], i893[15])
  i892.endColor = new pc.Color(i893[16], i893[17], i893[18], i893[19])
  i892.generateLightingData = !!i893[20]
  i892.textureMode = i893[21]
  i892.alignment = i893[22]
  i892.widthCurve = new pc.AnimationCurve( { keys_flow: i893[23] } )
  i892.enabled = !!i893[24]
  request.r(i893[25], i893[26], 0, i892, 'sharedMaterial')
  var i897 = i893[27]
  var i896 = []
  for(var i = 0; i < i897.length; i += 2) {
  request.r(i897[i + 0], i897[i + 1], 2, i896, '')
  }
  i892.sharedMaterials = i896
  i892.receiveShadows = !!i893[28]
  i892.shadowCastingMode = i893[29]
  i892.sortingLayerID = i893[30]
  i892.sortingOrder = i893[31]
  i892.lightmapIndex = i893[32]
  i892.lightmapSceneIndex = i893[33]
  i892.lightmapScaleOffset = new pc.Vec4( i893[34], i893[35], i893[36], i893[37] )
  i892.lightProbeUsage = i893[38]
  i892.reflectionProbeUsage = i893[39]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i899 = data
  i898.pivot = new pc.Vec2( i899[0], i899[1] )
  i898.anchorMin = new pc.Vec2( i899[2], i899[3] )
  i898.anchorMax = new pc.Vec2( i899[4], i899[5] )
  i898.sizeDelta = new pc.Vec2( i899[6], i899[7] )
  i898.anchoredPosition3D = new pc.Vec3( i899[8], i899[9], i899[10] )
  i898.rotation = new pc.Quat(i899[11], i899[12], i899[13], i899[14])
  i898.scale = new pc.Vec3( i899[15], i899[16], i899[17] )
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i901 = data
  i900.planeDistance = i901[0]
  i900.referencePixelsPerUnit = i901[1]
  i900.isFallbackOverlay = !!i901[2]
  i900.renderMode = i901[3]
  i900.renderOrder = i901[4]
  i900.sortingLayerName = i901[5]
  i900.sortingOrder = i901[6]
  i900.scaleFactor = i901[7]
  request.r(i901[8], i901[9], 0, i900, 'worldCamera')
  i900.overrideSorting = !!i901[10]
  i900.pixelPerfect = !!i901[11]
  i900.targetDisplay = i901[12]
  i900.overridePixelPerfect = !!i901[13]
  i900.enabled = !!i901[14]
  return i900
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i903 = data
  i902.m_UiScaleMode = i903[0]
  i902.m_ReferencePixelsPerUnit = i903[1]
  i902.m_ScaleFactor = i903[2]
  i902.m_ReferenceResolution = new pc.Vec2( i903[3], i903[4] )
  i902.m_ScreenMatchMode = i903[5]
  i902.m_MatchWidthOrHeight = i903[6]
  i902.m_PhysicalUnit = i903[7]
  i902.m_FallbackScreenDPI = i903[8]
  i902.m_DefaultSpriteDPI = i903[9]
  i902.m_DynamicPixelsPerUnit = i903[10]
  i902.m_PresetInfoIsWorld = !!i903[11]
  return i902
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i905 = data
  i904.m_IgnoreReversedGraphics = !!i905[0]
  i904.m_BlockingObjects = i905[1]
  i904.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i905[2] )
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i907 = data
  i906.cullTransparentMesh = !!i907[0]
  return i906
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.UI.Text' )
  var i909 = data
  i908.m_FontData = request.d('UnityEngine.UI.FontData', i909[0], i908.m_FontData)
  i908.m_Text = i909[1]
  request.r(i909[2], i909[3], 0, i908, 'm_Material')
  i908.m_Maskable = !!i909[4]
  i908.m_Color = new pc.Color(i909[5], i909[6], i909[7], i909[8])
  i908.m_RaycastTarget = !!i909[9]
  i908.m_RaycastPadding = new pc.Vec4( i909[10], i909[11], i909[12], i909[13] )
  return i908
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.UI.FontData' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'm_Font')
  i910.m_FontSize = i911[2]
  i910.m_FontStyle = i911[3]
  i910.m_BestFit = !!i911[4]
  i910.m_MinSize = i911[5]
  i910.m_MaxSize = i911[6]
  i910.m_Alignment = i911[7]
  i910.m_AlignByGeometry = !!i911[8]
  i910.m_RichText = !!i911[9]
  i910.m_HorizontalOverflow = i911[10]
  i910.m_VerticalOverflow = i911[11]
  i910.m_LineSpacing = i911[12]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i913 = data
  i912.usedByComposite = !!i913[0]
  i912.autoTiling = !!i913[1]
  i912.size = new pc.Vec2( i913[2], i913[3] )
  i912.edgeRadius = i913[4]
  i912.enabled = !!i913[5]
  i912.isTrigger = !!i913[6]
  i912.usedByEffector = !!i913[7]
  i912.density = i913[8]
  i912.offset = new pc.Vec2( i913[9], i913[10] )
  request.r(i913[11], i913[12], 0, i912, 'material')
  return i912
}

Deserializers["RotaryTimerKnob"] = function (request, data, root) {
  var i914 = root || request.c( 'RotaryTimerKnob' )
  var i915 = data
  i914.canDrag = !!i915[0]
  i914.numSteps = i915[1]
  i914.onlyClockwise = !!i915[2]
  request.r(i915[3], i915[4], 0, i914, 'clickSound')
  i914.enableVibration = !!i915[5]
  request.r(i915[6], i915[7], 0, i914, 'stepText')
  i914.OnComplete = request.d('UnityEngine.Events.UnityEvent', i915[8], i914.OnComplete)
  request.r(i915[9], i915[10], 0, i914, 'handIndication')
  return i914
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'm_ObjectArgument')
  i916.m_ObjectArgumentAssemblyTypeName = i917[2]
  i916.m_IntArgument = i917[3]
  i916.m_FloatArgument = i917[4]
  i916.m_StringArgument = i917[5]
  i916.m_BoolArgument = !!i917[6]
  return i916
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i918 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'm_RootBone')
  var i921 = i919[2]
  var i920 = []
  for(var i = 0; i < i921.length; i += 2) {
  request.r(i921[i + 0], i921[i + 1], 2, i920, '')
  }
  i918.m_BoneTransforms = i920
  i918.m_AlwaysUpdate = !!i919[3]
  i918.m_AutoRebind = !!i919[4]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i923 = data
  i922.frontSortingLayerID = i923[0]
  i922.frontSortingOrder = i923[1]
  i922.backSortingLayerID = i923[2]
  i922.backSortingOrder = i923[3]
  i922.alphaCutoff = i923[4]
  request.r(i923[5], i923[6], 0, i922, 'sprite')
  i922.tileMode = i923[7]
  i922.isCustomRangeActive = !!i923[8]
  i922.spriteSortPoint = i923[9]
  i922.enabled = !!i923[10]
  request.r(i923[11], i923[12], 0, i922, 'sharedMaterial')
  var i925 = i923[13]
  var i924 = []
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 2, i924, '')
  }
  i922.sharedMaterials = i924
  i922.receiveShadows = !!i923[14]
  i922.shadowCastingMode = i923[15]
  i922.sortingLayerID = i923[16]
  i922.sortingOrder = i923[17]
  i922.lightmapIndex = i923[18]
  i922.lightmapSceneIndex = i923[19]
  i922.lightmapScaleOffset = new pc.Vec4( i923[20], i923[21], i923[22], i923[23] )
  i922.lightProbeUsage = i923[24]
  i922.reflectionProbeUsage = i923[25]
  return i922
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i926 = root || request.c( 'BasicDrag' )
  var i927 = data
  i926.canDrag = !!i927[0]
  i926.dragByDelta = !!i927[1]
  i926.isDragging = !!i927[2]
  i926.moveWithPointer = !!i927[3]
  i926.canReturn = !!i927[4]
  i926.jumpOnReturn = !!i927[5]
  i926.returnTime = i927[6]
  i926.Tool_Offset = new pc.Vec3( i927[7], i927[8], i927[9] )
  i926.canScaleIncrease = !!i927[10]
  i926.Self_ScaleNew = new pc.Vec3( i927[11], i927[12], i927[13] )
  i926.canRotateOnPick = !!i927[14]
  i926.startRot = new pc.Vec3( i927[15], i927[16], i927[17] )
  i926.newRot = new pc.Vec3( i927[18], i927[19], i927[20] )
  var i929 = i927[21]
  var i928 = []
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 2, i928, '')
  }
  i926.childSprite = i928
  request.r(i927[22], i927[23], 0, i926, 'ToolSelectClip')
  request.r(i927[24], i927[25], 0, i926, 'ToolLoopClip')
  request.r(i927[26], i927[27], 0, i926, 'thisParticles')
  i926.onDragparticle = !!i927[28]
  request.r(i927[29], i927[30], 0, i926, 'dragParticles')
  request.r(i927[31], i927[32], 0, i926, 'anim')
  i926.startPos = new pc.Vec3( i927[33], i927[34], i927[35] )
  i926.startScale = new pc.Vec3( i927[36], i927[37], i927[38] )
  i926.Vibration = !!i927[39]
  i926.isPlacedCannotMove = !!i927[40]
  i926.isObjectMovingWhileDragging = !!i927[41]
  i926.OnMouseDownEvent = request.d('System.Action', i927[42], i926.OnMouseDownEvent)
  i926.OnMouseUpEvent = request.d('System.Action', i927[43], i926.OnMouseUpEvent)
  i926.ProgStartEvent = request.d('System.Action', i927[44], i926.ProgStartEvent)
  i926.ProgEndEvent = request.d('System.Action', i927[45], i926.ProgEndEvent)
  i926.canCallMouseUpWhenGamePaused = !!i927[46]
  i926.ClampX_L = i927[47]
  i926.ClampX_H = i927[48]
  i926.ClampY_L = i927[49]
  i926.ClampY_H = i927[50]
  i926.startOrder = i927[51]
  i926.dontResetItIsInCollider = !!i927[52]
  request.r(i927[53], i927[54], 0, i926, 'thisCollider')
  request.r(i927[55], i927[56], 0, i926, 'thisSR')
  i926.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i927[57], i926.OnMouseDownEventIndependentFromCanDrag)
  return i926
}

Deserializers["System.Action"] = function (request, data, root) {
  var i932 = root || request.c( 'System.Action' )
  var i933 = data
  return i932
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i934 = root || request.c( 'BD_Clamp' )
  var i935 = data
  i934.ClampX_L = i935[0]
  i934.ClampX_H = i935[1]
  i934.ClampY_L = i935[2]
  i934.ClampY_H = i935[3]
  return i934
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i936 = root || request.c( 'BD_CameraFollow' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'Tool')
  request.r(i937[2], i937[3], 0, i936, 'Pivot')
  i936.FOV = i937[4]
  i936.Y_L = i937[5]
  i936.Y_H = i937[6]
  i936.X_L = i937[7]
  i936.X_R = i937[8]
  i936.startDelay = i937[9]
  i936.duration = i937[10]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i939 = data
  i938.bodyType = i939[0]
  request.r(i939[1], i939[2], 0, i938, 'material')
  i938.simulated = !!i939[3]
  i938.useAutoMass = !!i939[4]
  i938.mass = i939[5]
  i938.drag = i939[6]
  i938.angularDrag = i939[7]
  i938.gravityScale = i939[8]
  i938.collisionDetectionMode = i939[9]
  i938.sleepMode = i939[10]
  i938.constraints = i939[11]
  return i938
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i940 = root || request.c( 'PlaceItem' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'thisDrag')
  request.r(i941[2], i941[3], 0, i940, 'Target')
  request.r(i941[4], i941[5], 0, i940, 'Clip')
  i940.jumpOnPlace = !!i941[6]
  i940.jumpHeight = i941[7]
  i940.jumpDuration = i941[8]
  i940.settleDuration = i941[9]
  i940.isPlaced = !!i941[10]
  i940.isInsideCollider = !!i941[11]
  i940.changeScaleOnPlace = !!i941[12]
  request.r(i941[13], i941[14], 0, i940, 'item')
  i940.newScaleOnPlace = new pc.Vec3( i941[15], i941[16], i941[17] )
  i940.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i941[18], i940.OnPlaced)
  return i940
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i942 = root || request.c( 'ActionOnTap' )
  var i943 = data
  i942.OnTap = request.d('UnityEngine.Events.UnityEvent', i943[0], i942.OnTap)
  i942.OnTapExtra = request.d('System.Action', i943[1], i942.OnTapExtra)
  return i942
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i944 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i945 = data
  i944.targetIsSelf = !!i945[0]
  request.r(i945[1], i945[2], 0, i944, 'targetGO')
  i944.tweenTargetIsTargetGO = !!i945[3]
  i944.delay = i945[4]
  i944.duration = i945[5]
  i944.easeType = i945[6]
  i944.easeCurve = new pc.AnimationCurve( { keys_flow: i945[7] } )
  i944.loopType = i945[8]
  i944.loops = i945[9]
  i944.id = i945[10]
  i944.isRelative = !!i945[11]
  i944.isFrom = !!i945[12]
  i944.isIndependentUpdate = !!i945[13]
  i944.autoKill = !!i945[14]
  i944.autoGenerate = !!i945[15]
  i944.isActive = !!i945[16]
  i944.isValid = !!i945[17]
  request.r(i945[18], i945[19], 0, i944, 'target')
  i944.animationType = i945[20]
  i944.targetType = i945[21]
  i944.forcedTargetType = i945[22]
  i944.autoPlay = !!i945[23]
  i944.useTargetAsV3 = !!i945[24]
  i944.endValueFloat = i945[25]
  i944.endValueV3 = new pc.Vec3( i945[26], i945[27], i945[28] )
  i944.endValueV2 = new pc.Vec2( i945[29], i945[30] )
  i944.endValueColor = new pc.Color(i945[31], i945[32], i945[33], i945[34])
  i944.endValueString = i945[35]
  i944.endValueRect = UnityEngine.Rect.MinMaxRect(i945[36], i945[37], i945[38], i945[39])
  request.r(i945[40], i945[41], 0, i944, 'endValueTransform')
  i944.optionalBool0 = !!i945[42]
  i944.optionalBool1 = !!i945[43]
  i944.optionalFloat0 = i945[44]
  i944.optionalInt0 = i945[45]
  i944.optionalRotationMode = i945[46]
  i944.optionalScrambleMode = i945[47]
  i944.optionalShakeRandomnessMode = i945[48]
  i944.optionalString = i945[49]
  i944.updateType = i945[50]
  i944.isSpeedBased = !!i945[51]
  i944.hasOnStart = !!i945[52]
  i944.hasOnPlay = !!i945[53]
  i944.hasOnUpdate = !!i945[54]
  i944.hasOnStepComplete = !!i945[55]
  i944.hasOnComplete = !!i945[56]
  i944.hasOnTweenCreated = !!i945[57]
  i944.hasOnRewind = !!i945[58]
  i944.onStart = request.d('UnityEngine.Events.UnityEvent', i945[59], i944.onStart)
  i944.onPlay = request.d('UnityEngine.Events.UnityEvent', i945[60], i944.onPlay)
  i944.onUpdate = request.d('UnityEngine.Events.UnityEvent', i945[61], i944.onUpdate)
  i944.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i945[62], i944.onStepComplete)
  i944.onComplete = request.d('UnityEngine.Events.UnityEvent', i945[63], i944.onComplete)
  i944.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i945[64], i944.onTweenCreated)
  i944.onRewind = request.d('UnityEngine.Events.UnityEvent', i945[65], i944.onRewind)
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i947 = data
  i946.radius = i947[0]
  i946.enabled = !!i947[1]
  i946.isTrigger = !!i947[2]
  i946.usedByEffector = !!i947[3]
  i946.density = i947[4]
  i946.offset = new pc.Vec2( i947[5], i947[6] )
  request.r(i947[7], i947[8], 0, i946, 'material')
  return i946
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i948 = root || request.c( 'PlayParticlesOnCollision' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'Target')
  request.r(i949[2], i949[3], 0, i948, 'ParticlePrefab')
  i948.destroyIt = !!i949[4]
  i948.stayAtPlace = !!i949[5]
  i948.disableOnCollision = !!i949[6]
  i948.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i949[7], i948.OnCollisionEvent)
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i951 = data
  i950.usedByComposite = !!i951[0]
  i950.autoTiling = !!i951[1]
  var i953 = i951[2]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
  var i955 = i953[i + 0]
  var i954 = []
  for(var i = 0; i < i955.length; i += 2) {
    i954.push( new pc.Vec2( i955[i + 0], i955[i + 1] ) );
  }
    i952.push( i954 );
  }
  i950.points = i952
  i950.enabled = !!i951[3]
  i950.isTrigger = !!i951[4]
  i950.usedByEffector = !!i951[5]
  i950.density = i951[6]
  i950.offset = new pc.Vec2( i951[7], i951[8] )
  request.r(i951[9], i951[10], 0, i950, 'material')
  return i950
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i962 = root || request.c( 'PlaySfxOnCollision' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'Tip')
  i962.Mode = i963[2]
  request.r(i963[3], i963[4], 0, i962, 'DragInput')
  request.r(i963[5], i963[6], 0, i962, 'Source')
  i962.startVol = i963[7]
  i962.targetVol = i963[8]
  i962.duration = i963[9]
  request.r(i963[10], i963[11], 0, i962, 'Particles')
  i962.isDone = !!i963[12]
  i962.isInArea = !!i963[13]
  i962.isPlaying = !!i963[14]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'clip')
  request.r(i965[2], i965[3], 0, i964, 'outputAudioMixerGroup')
  i964.playOnAwake = !!i965[4]
  i964.loop = !!i965[5]
  i964.time = i965[6]
  i964.volume = i965[7]
  i964.pitch = i965[8]
  i964.enabled = !!i965[9]
  return i964
}

Deserializers["SewingCol"] = function (request, data, root) {
  var i966 = root || request.c( 'SewingCol' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'targetTip')
  var i969 = i967[2]
  var i968 = []
  for(var i = 0; i < i969.length; i += 2) {
  request.r(i969[i + 0], i969[i + 1], 2, i968, '')
  }
  i966.Anim_Items = i968
  i966.isDone = !!i967[3]
  request.r(i967[4], i967[5], 0, i966, 'sfx')
  return i966
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

Deserializers["BD_Action"] = function (request, data, root) {
  var i974 = root || request.c( 'BD_Action' )
  var i975 = data
  i974.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i975[0], i974.OnMouseDownEvent)
  i974.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i975[1], i974.OnMouseUpEvent)
  i974.setToolLayer = !!i975[2]
  request.r(i975[3], i975[4], 0, i974, 'tool_SP')
  return i974
}

Deserializers["Level1_SurfController"] = function (request, data, root) {
  var i976 = root || request.c( 'Level1_SurfController' )
  var i977 = data
  i976.target_rotZ = i977[0]
  i976.rotationDuration = i977[1]
  i976.rotationEase = i977[2]
  request.r(i977[3], i977[4], 0, i976, 'maskItem')
  i976.maskTarget_posY = i977[5]
  i976.maskMoveDuration = i977[6]
  i976.requiredHoldTime = i977[7]
  i976.minRotationForProgress = i977[8]
  request.r(i977[9], i977[10], 0, i976, 'tipCollider')
  request.r(i977[11], i977[12], 0, i976, 'targetZoneCollider')
  request.r(i977[13], i977[14], 0, i976, 'surf_Particles')
  request.r(i977[15], i977[16], 0, i976, 'surf_SubEmitter')
  request.r(i977[17], i977[18], 0, i976, 'Indication')
  i976.OnComplete = request.d('UnityEngine.Events.UnityEvent', i977[19], i976.OnComplete)
  i976.currentHoldProgress = i977[20]
  return i976
}

Deserializers["BD_Fold"] = function (request, data, root) {
  var i978 = root || request.c( 'BD_Fold' )
  var i979 = data
  i978.canDrag = !!i979[0]
  i978.canFoldBottomLeft = !!i979[1]
  i978.canFoldBottomRight = !!i979[2]
  i978.canFoldTopLeft = !!i979[3]
  i978.canFoldTopRight = !!i979[4]
  request.r(i979[5], i979[6], 0, i978, 'Indication')
  request.r(i979[7], i979[8], 0, i978, 'backSideSprite')
  i978.maxSideOffset = i979[9]
  i978.foldBackDuration = i979[10]
  i978.instantFoldAmount = i979[11]
  i978.useSmoothRelease = !!i979[12]
  i978.completionLimit = i979[13]
  i978.afterCompletionTravelTo = i979[14]
  i978.OnComplete = request.d('UnityEngine.Events.UnityEvent', i979[15], i978.OnComplete)
  i978.currentProgress = i979[16]
  i978.innerShadowStrength = i979[17]
  request.r(i979[18], i979[19], 0, i978, 'dragAudioSource')
  request.r(i979[20], i979[21], 0, i978, 'dragStartClip')
  request.r(i979[22], i979[23], 0, i978, 'completionClip')
  i978.audioFadeSpeed = i979[24]
  i978.audioMoveThreshold = i979[25]
  i978.hapticInterval = i979[26]
  return i978
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i980 = root || request.c( 'BD_Progress' )
  var i981 = data
  var i983 = i981[0]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('ScratchData', i983[i + 0]) );
  }
  i980.AllScratches = i982
  i980.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i981[1], i980.OnScratchComplete)
  i980.isProgDone = !!i981[2]
  i980.canCallComplete = !!i981[3]
  i980.CollectiveAppear = !!i981[4]
  i980.tipControl = !!i981[5]
  i980.progressControl = !!i981[6]
  request.r(i981[7], i981[8], 0, i980, 'thisDrag')
  i980.CompleteEvent = request.d('System.Action', i981[9], i980.CompleteEvent)
  i980.SubCompleteEvent = request.d('System.Action', i981[10], i980.SubCompleteEvent)
  return i980
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i986 = root || request.c( 'ScratchData' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'ScratchManager')
  i986.scratchLimit = i987[2]
  i986.isComplete = !!i987[3]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'sharedMesh')
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i991 = data
  request.r(i991[0], i991[1], 0, i990, 'additionalVertexStreams')
  i990.enabled = !!i991[2]
  request.r(i991[3], i991[4], 0, i990, 'sharedMaterial')
  var i993 = i991[5]
  var i992 = []
  for(var i = 0; i < i993.length; i += 2) {
  request.r(i993[i + 0], i993[i + 1], 2, i992, '')
  }
  i990.sharedMaterials = i992
  i990.receiveShadows = !!i991[6]
  i990.shadowCastingMode = i991[7]
  i990.sortingLayerID = i991[8]
  i990.sortingOrder = i991[9]
  i990.lightmapIndex = i991[10]
  i990.lightmapSceneIndex = i991[11]
  i990.lightmapScaleOffset = new pc.Vec4( i991[12], i991[13], i991[14], i991[15] )
  i990.lightProbeUsage = i991[16]
  i990.reflectionProbeUsage = i991[17]
  return i990
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i994 = root || request.c( 'StaticFixedPipe' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'meshRenderer')
  request.r(i995[2], i995[3], 0, i994, 'toolTransform')
  request.r(i995[4], i995[5], 0, i994, 'toolDirectionPoint')
  request.r(i995[6], i995[7], 0, i994, 'fixedEndPoint')
  i994.segmentCount = i995[8]
  i994.totalLength = i995[9]
  i994.constraintIterations = i995[10]
  i994.gravity = new pc.Vec3( i995[11], i995[12], i995[13] )
  i994.pipeWidth = i995[14]
  return i994
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i996 = root || request.c( 'BD_SpriteChange' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'BD')
  request.r(i997[2], i997[3], 0, i996, 'SR')
  request.r(i997[4], i997[5], 0, i996, 'Default')
  request.r(i997[6], i997[7], 0, i996, 'Picked')
  i996.resetOnRelease = !!i997[8]
  return i996
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i998 = root || request.c( 'MenuLevel' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'menuLevelBtnUpdate')
  var i1001 = i999[2]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('MenuLevelData', i1001[i + 0]) );
  }
  i998.AllSteps = i1000
  request.r(i999[3], i999[4], 0, i998, 'buttonparent')
  var i1003 = i999[5]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 2) {
  request.r(i1003[i + 0], i1003[i + 1], 2, i1002, '')
  }
  i998.BtnsDotweenAnims = i1002
  var i1005 = i999[6]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 2) {
  request.r(i1005[i + 0], i1005[i + 1], 2, i1004, '')
  }
  i998.BtnsCols = i1004
  request.r(i999[7], i999[8], 0, i998, 'mainGameView')
  request.r(i999[9], i999[10], 0, i998, 'Storyboard')
  request.r(i999[11], i999[12], 0, i998, 'BgMusic')
  request.r(i999[13], i999[14], 0, i998, 'BgStoryMusic')
  request.r(i999[15], i999[16], 0, i998, 'Hand_Tut1')
  request.r(i999[17], i999[18], 0, i998, 'Button_Hand')
  var i1007 = i999[19]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 2, i1006, '')
  }
  i998.itemEnable_Onstart = i1006
  var i1009 = i999[20]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 2) {
  request.r(i1009[i + 0], i1009[i + 1], 2, i1008, '')
  }
  i998.itemDisable_Onstart = i1008
  var i1011 = i999[21]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 2, i1010, '')
  }
  i998.itemEnable_Oncomplete = i1010
  var i1013 = i999[22]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 2) {
  request.r(i1013[i + 0], i1013[i + 1], 2, i1012, '')
  }
  i998.itemDisable_Oncomplete = i1012
  i998.levelKey = i999[23]
  i998.revealDirtyHoldTime = i999[24]
  return i998
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i1016 = root || request.c( 'MenuLevelData' )
  var i1017 = data
  i1016.Name = i1017[0]
  request.r(i1017[1], i1017[2], 0, i1016, 'UiBtn')
  request.r(i1017[3], i1017[4], 0, i1016, 'TickBtn')
  request.r(i1017[5], i1017[6], 0, i1016, 'ExclamationIcon')
  var i1019 = i1017[7]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 2) {
  request.r(i1019[i + 0], i1019[i + 1], 2, i1018, '')
  }
  i1016.Item_Dirty = i1018
  var i1021 = i1017[8]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 2, i1020, '')
  }
  i1016.Item_Clean = i1020
  request.r(i1017[9], i1017[10], 0, i1016, 'CompleteParticle')
  return i1016
}

Deserializers["IntroLevelAnim"] = function (request, data, root) {
  var i1026 = root || request.c( 'IntroLevelAnim' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'menuLevel')
  i1026.lvlkey = i1027[2]
  request.r(i1027[3], i1027[4], 0, i1026, 'DressChangeObj')
  request.r(i1027[5], i1027[6], 0, i1026, 'DressChangeClip')
  return i1026
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i1028 = root || request.c( 'Level_PoseController' )
  var i1029 = data
  var i1031 = i1029[0]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 2) {
  request.r(i1031[i + 0], i1031[i + 1], 2, i1030, '')
  }
  i1028.itemToShow = i1030
  var i1033 = i1029[1]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 2) {
  request.r(i1033[i + 0], i1033[i + 1], 2, i1032, '')
  }
  i1028.itemToHide = i1032
  i1028.stepTarget = i1029[2]
  return i1028
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i1034 = root || request.c( 'BD_AnimationHelper' )
  var i1035 = data
  i1034.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i1035[0], i1034.OnAnimationComplete)
  request.r(i1035[1], i1035[2], 0, i1034, 'sfxClip')
  return i1034
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i1036 = root || request.c( 'SpriteButton' )
  var i1037 = data
  i1036.isLocked = !!i1037[0]
  i1036.lockMsg = i1037[1]
  i1036.onClick = request.d('UnityEngine.Events.UnityEvent', i1037[2], i1036.onClick)
  i1036.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i1037[3], i1036.onLockedClick)
  i1036.isLevelBtnSfx = !!i1037[4]
  request.r(i1037[5], i1037[6], 0, i1036, 'pivot')
  i1036.reductionChange = i1037[7]
  i1036.animationDuration = i1037[8]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1039 = data
  i1038.name = i1039[0]
  i1038.atlasId = i1039[1]
  i1038.mipmapCount = i1039[2]
  i1038.hdr = !!i1039[3]
  i1038.size = i1039[4]
  i1038.anisoLevel = i1039[5]
  i1038.filterMode = i1039[6]
  var i1041 = i1039[7]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 4) {
    i1040.push( UnityEngine.Rect.MinMaxRect(i1041[i + 0], i1041[i + 1], i1041[i + 2], i1041[i + 3]) );
  }
  i1038.rects = i1040
  i1038.wrapU = i1039[8]
  i1038.wrapV = i1039[9]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1045 = data
  i1044.name = i1045[0]
  i1044.index = i1045[1]
  i1044.startup = !!i1045[2]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1047 = data
  i1046.aspect = i1047[0]
  i1046.orthographic = !!i1047[1]
  i1046.orthographicSize = i1047[2]
  i1046.backgroundColor = new pc.Color(i1047[3], i1047[4], i1047[5], i1047[6])
  i1046.nearClipPlane = i1047[7]
  i1046.farClipPlane = i1047[8]
  i1046.fieldOfView = i1047[9]
  i1046.depth = i1047[10]
  i1046.clearFlags = i1047[11]
  i1046.cullingMask = i1047[12]
  i1046.rect = i1047[13]
  request.r(i1047[14], i1047[15], 0, i1046, 'targetTexture')
  i1046.usePhysicalProperties = !!i1047[16]
  i1046.focalLength = i1047[17]
  i1046.sensorSize = new pc.Vec2( i1047[18], i1047[19] )
  i1046.lensShift = new pc.Vec2( i1047[20], i1047[21] )
  i1046.gateFit = i1047[22]
  i1046.commandBufferCount = i1047[23]
  i1046.cameraType = i1047[24]
  i1046.enabled = !!i1047[25]
  return i1046
}

Deserializers["CameraController"] = function (request, data, root) {
  var i1048 = root || request.c( 'CameraController' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'cam')
  i1048.defaultPosition = new pc.Vec3( i1049[2], i1049[3], i1049[4] )
  i1048.defaultSize = i1049[5]
  i1048.defaultFOV = i1049[6]
  i1048.defaultDuration = i1049[7]
  i1048.defaultEase = i1049[8]
  return i1048
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i1050 = root || request.c( 'MusicSource' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'source')
  return i1050
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i1052 = root || request.c( 'UI_Manager' )
  var i1053 = data
  i1052.levelCompleted = !!i1053[0]
  i1052.isPauseActive = !!i1053[1]
  i1052.loadIndex = i1053[2]
  request.r(i1053[3], i1053[4], 0, i1052, 'removeAdsButton')
  request.r(i1053[5], i1053[6], 0, i1052, 'pauseButton')
  request.r(i1053[7], i1053[8], 0, i1052, 'Fade_Img')
  request.r(i1053[9], i1053[10], 0, i1052, 'TopBarAnim')
  request.r(i1053[11], i1053[12], 0, i1052, 'MainPanel')
  request.r(i1053[13], i1053[14], 0, i1052, 'PausePanel')
  request.r(i1053[15], i1053[16], 0, i1052, 'PausePopUp')
  request.r(i1053[17], i1053[18], 0, i1052, 'PauseCanvasGroup')
  request.r(i1053[19], i1053[20], 0, i1052, 'RateUsPanel')
  request.r(i1053[21], i1053[22], 0, i1052, 'RateUsPopUp')
  request.r(i1053[23], i1053[24], 0, i1052, 'RemoveAdsPanel')
  request.r(i1053[25], i1053[26], 0, i1052, 'RemoveAdsPopUp')
  request.r(i1053[27], i1053[28], 0, i1052, 'RemoveAdsCanvasGroup')
  var i1055 = i1053[29]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 2) {
  request.r(i1055[i + 0], i1055[i + 1], 2, i1054, '')
  }
  i1052.RemoveAdsAnims = i1054
  var i1057 = i1053[30]
  var i1056 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1057.length; i += 2) {
  request.r(i1057[i + 0], i1057[i + 1], 1, i1056, '')
  }
  i1052.thingsToDisableWhenCompletePanel = i1056
  request.r(i1053[31], i1053[32], 0, i1052, 'CompletePanel')
  request.r(i1053[33], i1053[34], 0, i1052, 'LevelIcon')
  request.r(i1053[35], i1053[36], 0, i1052, 'CompleteParticles')
  request.r(i1053[37], i1053[38], 0, i1052, 'progressBar')
  request.r(i1053[39], i1053[40], 0, i1052, 'progressText')
  request.r(i1053[41], i1053[42], 0, i1052, 'toolIcon1')
  request.r(i1053[43], i1053[44], 0, i1052, 'toolIcon2')
  request.r(i1053[45], i1053[46], 0, i1052, 'toolIcon3')
  request.r(i1053[47], i1053[48], 0, i1052, 'target1')
  request.r(i1053[49], i1053[50], 0, i1052, 'target2')
  i1052.toolMoveDuration = i1053[51]
  i1052.currentIndex = i1053[52]
  var i1059 = i1053[53]
  var i1058 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1059.length; i += 2) {
  request.r(i1059[i + 0], i1059[i + 1], 1, i1058, '')
  }
  i1052.allTools = i1058
  request.r(i1053[54], i1053[55], 0, i1052, 'clockProgress')
  request.r(i1053[56], i1053[57], 0, i1052, 'clockProgressFill')
  request.r(i1053[58], i1053[59], 0, i1052, 'clockAudio')
  i1052.moveDistance = i1053[60]
  i1052.animationDuration = i1053[61]
  i1052.greyBgChildName = i1053[62]
  i1052.pushOffset = i1053[63]
  return i1052
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i1062 = root || request.c( 'GameManagerPlayable' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, 'endParticles')
  request.r(i1063[2], i1063[3], 0, i1062, 'stepCompleteParticles')
  request.r(i1063[4], i1063[5], 0, i1062, 'DefaultMat')
  request.r(i1063[6], i1063[7], 0, i1062, 'BG_Music')
  request.r(i1063[8], i1063[9], 0, i1062, 'restoreEffectShader')
  request.r(i1063[10], i1063[11], 0, i1062, 'stickerEffectShader')
  i1062.isComplete = !!i1063[12]
  i1062.isPaused = !!i1063[13]
  request.r(i1063[14], i1063[15], 0, i1062, 'currentLevel')
  i1062.startLevelOnPlay = !!i1063[16]
  i1062.currentLevelNo = i1063[17]
  return i1062
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1064 = root || request.c( 'AudioController' )
  var i1065 = data
  request.r(i1065[0], i1065[1], 0, i1064, 'MainMixer')
  request.r(i1065[2], i1065[3], 0, i1064, 'UiClick')
  request.r(i1065[4], i1065[5], 0, i1064, 'UiClickSource')
  var i1067 = i1065[6]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 2) {
  request.r(i1067[i + 0], i1067[i + 1], 2, i1066, '')
  }
  i1064.SfxSources = i1066
  var i1069 = i1065[7]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 2) {
  request.r(i1069[i + 0], i1069[i + 1], 2, i1068, '')
  }
  i1064.AllClips = i1068
  return i1064
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1072 = root || request.c( 'UnityEngine.UI.Image' )
  var i1073 = data
  request.r(i1073[0], i1073[1], 0, i1072, 'm_Sprite')
  i1072.m_Type = i1073[2]
  i1072.m_PreserveAspect = !!i1073[3]
  i1072.m_FillCenter = !!i1073[4]
  i1072.m_FillMethod = i1073[5]
  i1072.m_FillAmount = i1073[6]
  i1072.m_FillClockwise = !!i1073[7]
  i1072.m_FillOrigin = i1073[8]
  i1072.m_UseSpriteMesh = !!i1073[9]
  i1072.m_PixelsPerUnitMultiplier = i1073[10]
  request.r(i1073[11], i1073[12], 0, i1072, 'm_Material')
  i1072.m_Maskable = !!i1073[13]
  i1072.m_Color = new pc.Color(i1073[14], i1073[15], i1073[16], i1073[17])
  i1072.m_RaycastTarget = !!i1073[18]
  i1072.m_RaycastPadding = new pc.Vec4( i1073[19], i1073[20], i1073[21], i1073[22] )
  return i1072
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.UI.Button' )
  var i1075 = data
  i1074.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1075[0], i1074.m_OnClick)
  i1074.m_Navigation = request.d('UnityEngine.UI.Navigation', i1075[1], i1074.m_Navigation)
  i1074.m_Transition = i1075[2]
  i1074.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1075[3], i1074.m_Colors)
  i1074.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1075[4], i1074.m_SpriteState)
  i1074.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1075[5], i1074.m_AnimationTriggers)
  i1074.m_Interactable = !!i1075[6]
  request.r(i1075[7], i1075[8], 0, i1074, 'm_TargetGraphic')
  return i1074
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1076 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1077 = data
  i1076.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1077[0], i1076.m_PersistentCalls)
  return i1076
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1079 = data
  i1078.m_Mode = i1079[0]
  i1078.m_WrapAround = !!i1079[1]
  request.r(i1079[2], i1079[3], 0, i1078, 'm_SelectOnUp')
  request.r(i1079[4], i1079[5], 0, i1078, 'm_SelectOnDown')
  request.r(i1079[6], i1079[7], 0, i1078, 'm_SelectOnLeft')
  request.r(i1079[8], i1079[9], 0, i1078, 'm_SelectOnRight')
  return i1078
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1080 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1081 = data
  i1080.m_NormalColor = new pc.Color(i1081[0], i1081[1], i1081[2], i1081[3])
  i1080.m_HighlightedColor = new pc.Color(i1081[4], i1081[5], i1081[6], i1081[7])
  i1080.m_PressedColor = new pc.Color(i1081[8], i1081[9], i1081[10], i1081[11])
  i1080.m_SelectedColor = new pc.Color(i1081[12], i1081[13], i1081[14], i1081[15])
  i1080.m_DisabledColor = new pc.Color(i1081[16], i1081[17], i1081[18], i1081[19])
  i1080.m_ColorMultiplier = i1081[20]
  i1080.m_FadeDuration = i1081[21]
  return i1080
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1082 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1083 = data
  request.r(i1083[0], i1083[1], 0, i1082, 'm_HighlightedSprite')
  request.r(i1083[2], i1083[3], 0, i1082, 'm_PressedSprite')
  request.r(i1083[4], i1083[5], 0, i1082, 'm_SelectedSprite')
  request.r(i1083[6], i1083[7], 0, i1082, 'm_DisabledSprite')
  return i1082
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1084 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1085 = data
  i1084.m_NormalTrigger = i1085[0]
  i1084.m_HighlightedTrigger = i1085[1]
  i1084.m_PressedTrigger = i1085[2]
  i1084.m_SelectedTrigger = i1085[3]
  i1084.m_DisabledTrigger = i1085[4]
  return i1084
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i1086 = root || request.c( 'PlayableHudRuntime' )
  var i1087 = data
  return i1086
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1088 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1089 = data
  request.r(i1089[0], i1089[1], 0, i1088, 'm_FirstSelected')
  i1088.m_sendNavigationEvents = !!i1089[2]
  i1088.m_DragThreshold = i1089[3]
  return i1088
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1090 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1091 = data
  i1090.m_HorizontalAxis = i1091[0]
  i1090.m_VerticalAxis = i1091[1]
  i1090.m_SubmitButton = i1091[2]
  i1090.m_CancelButton = i1091[3]
  i1090.m_InputActionsPerSecond = i1091[4]
  i1090.m_RepeatDelay = i1091[5]
  i1090.m_ForceModuleActive = !!i1091[6]
  i1090.m_SendPointerHoverToParent = !!i1091[7]
  return i1090
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i1092 = root || request.c( 'PlayableRouter' )
  var i1093 = data
  var i1095 = i1093[0]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 2) {
  request.r(i1095[i + 0], i1095[i + 1], 2, i1094, '')
  }
  i1092.menuObjects = i1094
  var i1097 = i1093[1]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 2) {
  request.r(i1097[i + 0], i1097[i + 1], 2, i1096, '')
  }
  i1092.gameplayObjects = i1096
  var i1099 = i1093[2]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('PlayableRouter+SubLevelSlot', i1099[i + 0]) );
  }
  i1092.subLevels = i1098
  i1092.fadeDuration = i1093[3]
  i1092.lockedMessage = i1093[4]
  i1092.lockedTapsToCTA = i1093[5]
  return i1092
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i1102 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i1103 = data
  request.r(i1103[0], i1103[1], 0, i1102, 'button')
  request.r(i1103[2], i1103[3], 0, i1102, 'level')
  return i1102
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i1104 = root || request.c( 'ToastManager' )
  var i1105 = data
  request.r(i1105[0], i1105[1], 0, i1104, 'toastPanel')
  request.r(i1105[2], i1105[3], 0, i1104, 'toastPopup')
  request.r(i1105[4], i1105[5], 0, i1104, 'canvasGroup')
  request.r(i1105[6], i1105[7], 0, i1104, 'toastText')
  i1104.startY = i1105[8]
  i1104.visibleY = i1105[9]
  i1104.endY = i1105[10]
  i1104.animationTime = i1105[11]
  i1104.animationTimeUp = i1105[12]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1107 = data
  i1106.m_Alpha = i1107[0]
  i1106.m_Interactable = !!i1107[1]
  i1106.m_BlocksRaycasts = !!i1107[2]
  i1106.m_IgnoreParentGroups = !!i1107[3]
  i1106.enabled = !!i1107[4]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1109 = data
  i1108.ambientIntensity = i1109[0]
  i1108.reflectionIntensity = i1109[1]
  i1108.ambientMode = i1109[2]
  i1108.ambientLight = new pc.Color(i1109[3], i1109[4], i1109[5], i1109[6])
  i1108.ambientSkyColor = new pc.Color(i1109[7], i1109[8], i1109[9], i1109[10])
  i1108.ambientGroundColor = new pc.Color(i1109[11], i1109[12], i1109[13], i1109[14])
  i1108.ambientEquatorColor = new pc.Color(i1109[15], i1109[16], i1109[17], i1109[18])
  i1108.fogColor = new pc.Color(i1109[19], i1109[20], i1109[21], i1109[22])
  i1108.fogEndDistance = i1109[23]
  i1108.fogStartDistance = i1109[24]
  i1108.fogDensity = i1109[25]
  i1108.fog = !!i1109[26]
  request.r(i1109[27], i1109[28], 0, i1108, 'skybox')
  i1108.fogMode = i1109[29]
  var i1111 = i1109[30]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1111[i + 0]) );
  }
  i1108.lightmaps = i1110
  i1108.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1109[31], i1108.lightProbes)
  i1108.lightmapsMode = i1109[32]
  i1108.mixedBakeMode = i1109[33]
  i1108.environmentLightingMode = i1109[34]
  i1108.ambientProbe = new pc.SphericalHarmonicsL2(i1109[35])
  request.r(i1109[36], i1109[37], 0, i1108, 'customReflection')
  request.r(i1109[38], i1109[39], 0, i1108, 'defaultReflection')
  i1108.defaultReflectionMode = i1109[40]
  i1108.defaultReflectionResolution = i1109[41]
  i1108.sunLightObjectId = i1109[42]
  i1108.pixelLightCount = i1109[43]
  i1108.defaultReflectionHDR = !!i1109[44]
  i1108.hasLightDataAsset = !!i1109[45]
  i1108.hasManualGenerate = !!i1109[46]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1115 = data
  request.r(i1115[0], i1115[1], 0, i1114, 'lightmapColor')
  request.r(i1115[2], i1115[3], 0, i1114, 'lightmapDirection')
  request.r(i1115[4], i1115[5], 0, i1114, 'shadowMask')
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1116 = root || new UnityEngine.LightProbes()
  var i1117 = data
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1123 = data
  var i1125 = i1123[0]
  var i1124 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1125[i + 0]));
  }
  i1122.ShaderCompilationErrors = i1124
  i1122.name = i1123[1]
  i1122.guid = i1123[2]
  var i1127 = i1123[3]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( i1127[i + 0] );
  }
  i1122.shaderDefinedKeywords = i1126
  var i1129 = i1123[4]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1129[i + 0]) );
  }
  i1122.passes = i1128
  var i1131 = i1123[5]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1131[i + 0]) );
  }
  i1122.usePasses = i1130
  var i1133 = i1123[6]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1133[i + 0]) );
  }
  i1122.defaultParameterValues = i1132
  request.r(i1123[7], i1123[8], 0, i1122, 'unityFallbackShader')
  i1122.readDepth = !!i1123[9]
  i1122.hasDepthOnlyPass = !!i1123[10]
  i1122.isCreatedByShaderGraph = !!i1123[11]
  i1122.disableBatching = !!i1123[12]
  i1122.compiled = !!i1123[13]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1137 = data
  i1136.shaderName = i1137[0]
  i1136.errorMessage = i1137[1]
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1142 = root || new pc.UnityShaderPass()
  var i1143 = data
  i1142.id = i1143[0]
  i1142.subShaderIndex = i1143[1]
  i1142.name = i1143[2]
  i1142.passType = i1143[3]
  i1142.grabPassTextureName = i1143[4]
  i1142.usePass = !!i1143[5]
  i1142.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1143[6], i1142.zTest)
  i1142.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1143[7], i1142.zWrite)
  i1142.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1143[8], i1142.culling)
  i1142.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1143[9], i1142.blending)
  i1142.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1143[10], i1142.alphaBlending)
  i1142.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1143[11], i1142.colorWriteMask)
  i1142.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1143[12], i1142.offsetUnits)
  i1142.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1143[13], i1142.offsetFactor)
  i1142.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1143[14], i1142.stencilRef)
  i1142.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1143[15], i1142.stencilReadMask)
  i1142.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1143[16], i1142.stencilWriteMask)
  i1142.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1143[17], i1142.stencilOp)
  i1142.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1143[18], i1142.stencilOpFront)
  i1142.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1143[19], i1142.stencilOpBack)
  var i1145 = i1143[20]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1145[i + 0]) );
  }
  i1142.tags = i1144
  var i1147 = i1143[21]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( i1147[i + 0] );
  }
  i1142.passDefinedKeywords = i1146
  var i1149 = i1143[22]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1149[i + 0]) );
  }
  i1142.passDefinedKeywordGroups = i1148
  var i1151 = i1143[23]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1151[i + 0]) );
  }
  i1142.variants = i1150
  var i1153 = i1143[24]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1153[i + 0]) );
  }
  i1142.excludedVariants = i1152
  i1142.hasDepthReader = !!i1143[25]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1155 = data
  i1154.val = i1155[0]
  i1154.name = i1155[1]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1157 = data
  i1156.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1157[0], i1156.src)
  i1156.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1157[1], i1156.dst)
  i1156.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1157[2], i1156.op)
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1159 = data
  i1158.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1159[0], i1158.pass)
  i1158.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1159[1], i1158.fail)
  i1158.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1159[2], i1158.zFail)
  i1158.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1159[3], i1158.comp)
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1163 = data
  i1162.name = i1163[0]
  i1162.value = i1163[1]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1167 = data
  var i1169 = i1167[0]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( i1169[i + 0] );
  }
  i1166.keywords = i1168
  i1166.hasDiscard = !!i1167[1]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1173 = data
  i1172.passId = i1173[0]
  i1172.subShaderIndex = i1173[1]
  var i1175 = i1173[2]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( i1175[i + 0] );
  }
  i1172.keywords = i1174
  i1172.vertexProgram = i1173[3]
  i1172.fragmentProgram = i1173[4]
  i1172.exportedForWebGl2 = !!i1173[5]
  i1172.readDepth = !!i1173[6]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1179 = data
  request.r(i1179[0], i1179[1], 0, i1178, 'shader')
  i1178.pass = i1179[2]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1183 = data
  i1182.name = i1183[0]
  i1182.type = i1183[1]
  i1182.value = new pc.Vec4( i1183[2], i1183[3], i1183[4], i1183[5] )
  i1182.textureValue = i1183[6]
  i1182.shaderPropertyFlag = i1183[7]
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1185 = data
  i1184.name = i1185[0]
  request.r(i1185[1], i1185[2], 0, i1184, 'texture')
  i1184.aabb = i1185[3]
  i1184.vertices = i1185[4]
  i1184.triangles = i1185[5]
  i1184.textureRect = UnityEngine.Rect.MinMaxRect(i1185[6], i1185[7], i1185[8], i1185[9])
  i1184.packedRect = UnityEngine.Rect.MinMaxRect(i1185[10], i1185[11], i1185[12], i1185[13])
  i1184.border = new pc.Vec4( i1185[14], i1185[15], i1185[16], i1185[17] )
  i1184.transparency = i1185[18]
  i1184.bounds = i1185[19]
  i1184.pixelsPerUnit = i1185[20]
  i1184.textureWidth = i1185[21]
  i1184.textureHeight = i1185[22]
  i1184.nativeSize = new pc.Vec2( i1185[23], i1185[24] )
  i1184.pivot = new pc.Vec2( i1185[25], i1185[26] )
  i1184.textureRectOffset = new pc.Vec2( i1185[27], i1185[28] )
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1187 = data
  i1186.name = i1187[0]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1189 = data
  i1188.name = i1189[0]
  i1188.wrapMode = i1189[1]
  i1188.isLooping = !!i1189[2]
  i1188.length = i1189[3]
  var i1191 = i1189[4]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1191[i + 0]) );
  }
  i1188.curves = i1190
  var i1193 = i1189[5]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1193[i + 0]) );
  }
  i1188.events = i1192
  i1188.halfPrecision = !!i1189[6]
  i1188._frameRate = i1189[7]
  i1188.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1189[8], i1188.localBounds)
  i1188.hasMuscleCurves = !!i1189[9]
  var i1195 = i1189[10]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( i1195[i + 0] );
  }
  i1188.clipMuscleConstant = i1194
  i1188.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1189[11], i1188.clipBindingConstant)
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1199 = data
  i1198.path = i1199[0]
  i1198.hash = i1199[1]
  i1198.componentType = i1199[2]
  i1198.property = i1199[3]
  i1198.keys = i1199[4]
  var i1201 = i1199[5]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1201[i + 0]) );
  }
  i1198.objectReferenceKeys = i1200
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1205 = data
  i1204.time = i1205[0]
  request.r(i1205[1], i1205[2], 0, i1204, 'value')
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1209 = data
  i1208.functionName = i1209[0]
  i1208.floatParameter = i1209[1]
  i1208.intParameter = i1209[2]
  i1208.stringParameter = i1209[3]
  request.r(i1209[4], i1209[5], 0, i1208, 'objectReferenceParameter')
  i1208.time = i1209[6]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1211 = data
  i1210.center = new pc.Vec3( i1211[0], i1211[1], i1211[2] )
  i1210.extends = new pc.Vec3( i1211[3], i1211[4], i1211[5] )
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1215 = data
  var i1217 = i1215[0]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( i1217[i + 0] );
  }
  i1214.genericBindings = i1216
  var i1219 = i1215[1]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( i1219[i + 0] );
  }
  i1214.pptrCurveMapping = i1218
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1221 = data
  i1220.name = i1221[0]
  i1220.ascent = i1221[1]
  i1220.originalLineHeight = i1221[2]
  i1220.fontSize = i1221[3]
  var i1223 = i1221[4]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1223[i + 0]) );
  }
  i1220.characterInfo = i1222
  request.r(i1221[5], i1221[6], 0, i1220, 'texture')
  i1220.originalFontSize = i1221[7]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1227 = data
  i1226.index = i1227[0]
  i1226.advance = i1227[1]
  i1226.bearing = i1227[2]
  i1226.glyphWidth = i1227[3]
  i1226.glyphHeight = i1227[4]
  i1226.minX = i1227[5]
  i1226.maxX = i1227[6]
  i1226.minY = i1227[7]
  i1226.maxY = i1227[8]
  i1226.uvBottomLeftX = i1227[9]
  i1226.uvBottomLeftY = i1227[10]
  i1226.uvBottomRightX = i1227[11]
  i1226.uvBottomRightY = i1227[12]
  i1226.uvTopLeftX = i1227[13]
  i1226.uvTopLeftY = i1227[14]
  i1226.uvTopRightX = i1227[15]
  i1226.uvTopRightY = i1227[16]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1229 = data
  i1228.name = i1229[0]
  var i1231 = i1229[1]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1231[i + 0]) );
  }
  i1228.layers = i1230
  var i1233 = i1229[2]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1233[i + 0]) );
  }
  i1228.parameters = i1232
  i1228.animationClips = i1229[3]
  i1228.avatarUnsupported = i1229[4]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1237 = data
  i1236.name = i1237[0]
  i1236.defaultWeight = i1237[1]
  i1236.blendingMode = i1237[2]
  i1236.avatarMask = i1237[3]
  i1236.syncedLayerIndex = i1237[4]
  i1236.syncedLayerAffectsTiming = !!i1237[5]
  i1236.syncedLayers = i1237[6]
  i1236.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1237[7], i1236.stateMachine)
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1239 = data
  i1238.id = i1239[0]
  i1238.name = i1239[1]
  i1238.path = i1239[2]
  var i1241 = i1239[3]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1241[i + 0]) );
  }
  i1238.states = i1240
  var i1243 = i1239[4]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1243[i + 0]) );
  }
  i1238.machines = i1242
  var i1245 = i1239[5]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1245[i + 0]) );
  }
  i1238.entryStateTransitions = i1244
  var i1247 = i1239[6]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1247[i + 0]) );
  }
  i1238.exitStateTransitions = i1246
  var i1249 = i1239[7]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1249[i + 0]) );
  }
  i1238.anyStateTransitions = i1248
  i1238.defaultStateId = i1239[8]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1253 = data
  i1252.id = i1253[0]
  i1252.name = i1253[1]
  i1252.cycleOffset = i1253[2]
  i1252.cycleOffsetParameter = i1253[3]
  i1252.cycleOffsetParameterActive = !!i1253[4]
  i1252.mirror = !!i1253[5]
  i1252.mirrorParameter = i1253[6]
  i1252.mirrorParameterActive = !!i1253[7]
  i1252.motionId = i1253[8]
  i1252.nameHash = i1253[9]
  i1252.fullPathHash = i1253[10]
  i1252.speed = i1253[11]
  i1252.speedParameter = i1253[12]
  i1252.speedParameterActive = !!i1253[13]
  i1252.tag = i1253[14]
  i1252.tagHash = i1253[15]
  i1252.writeDefaultValues = !!i1253[16]
  var i1255 = i1253[17]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 2) {
  request.r(i1255[i + 0], i1255[i + 1], 2, i1254, '')
  }
  i1252.behaviours = i1254
  var i1257 = i1253[18]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1257[i + 0]) );
  }
  i1252.transitions = i1256
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1263 = data
  i1262.fullPath = i1263[0]
  i1262.canTransitionToSelf = !!i1263[1]
  i1262.duration = i1263[2]
  i1262.exitTime = i1263[3]
  i1262.hasExitTime = !!i1263[4]
  i1262.hasFixedDuration = !!i1263[5]
  i1262.interruptionSource = i1263[6]
  i1262.offset = i1263[7]
  i1262.orderedInterruption = !!i1263[8]
  i1262.destinationStateId = i1263[9]
  i1262.isExit = !!i1263[10]
  i1262.mute = !!i1263[11]
  i1262.solo = !!i1263[12]
  var i1265 = i1263[13]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1265[i + 0]) );
  }
  i1262.conditions = i1264
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1271 = data
  i1270.destinationStateId = i1271[0]
  i1270.isExit = !!i1271[1]
  i1270.mute = !!i1271[2]
  i1270.solo = !!i1271[3]
  var i1273 = i1271[4]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1273[i + 0]) );
  }
  i1270.conditions = i1272
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1277 = data
  i1276.mode = i1277[0]
  i1276.parameter = i1277[1]
  i1276.threshold = i1277[2]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1281 = data
  i1280.defaultBool = !!i1281[0]
  i1280.defaultFloat = i1281[1]
  i1280.defaultInt = i1281[2]
  i1280.name = i1281[3]
  i1280.nameHash = i1281[4]
  i1280.type = i1281[5]
  return i1280
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1282 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1283 = data
  i1282.useSafeMode = !!i1283[0]
  i1282.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1283[1], i1282.safeModeOptions)
  i1282.timeScale = i1283[2]
  i1282.unscaledTimeScale = i1283[3]
  i1282.useSmoothDeltaTime = !!i1283[4]
  i1282.maxSmoothUnscaledTime = i1283[5]
  i1282.rewindCallbackMode = i1283[6]
  i1282.showUnityEditorReport = !!i1283[7]
  i1282.logBehaviour = i1283[8]
  i1282.drawGizmos = !!i1283[9]
  i1282.defaultRecyclable = !!i1283[10]
  i1282.defaultAutoPlay = i1283[11]
  i1282.defaultUpdateType = i1283[12]
  i1282.defaultTimeScaleIndependent = !!i1283[13]
  i1282.defaultEaseType = i1283[14]
  i1282.defaultEaseOvershootOrAmplitude = i1283[15]
  i1282.defaultEasePeriod = i1283[16]
  i1282.defaultAutoKill = !!i1283[17]
  i1282.defaultLoopType = i1283[18]
  i1282.debugMode = !!i1283[19]
  i1282.debugStoreTargetId = !!i1283[20]
  i1282.showPreviewPanel = !!i1283[21]
  i1282.storeSettingsLocation = i1283[22]
  i1282.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1283[23], i1282.modules)
  i1282.createASMDEF = !!i1283[24]
  i1282.showPlayingTweens = !!i1283[25]
  i1282.showPausedTweens = !!i1283[26]
  return i1282
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1284 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1285 = data
  i1284.logBehaviour = i1285[0]
  i1284.nestedTweenFailureBehaviour = i1285[1]
  return i1284
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1286 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1287 = data
  i1286.showPanel = !!i1287[0]
  i1286.audioEnabled = !!i1287[1]
  i1286.physicsEnabled = !!i1287[2]
  i1286.physics2DEnabled = !!i1287[3]
  i1286.spriteEnabled = !!i1287[4]
  i1286.uiEnabled = !!i1287[5]
  i1286.textMeshProEnabled = !!i1287[6]
  i1286.tk2DEnabled = !!i1287[7]
  i1286.deAudioEnabled = !!i1287[8]
  i1286.deUnityExtendedEnabled = !!i1287[9]
  i1286.epoOutlineEnabled = !!i1287[10]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1289 = data
  var i1291 = i1289[0]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1291[i + 0]) );
  }
  i1288.files = i1290
  i1288.componentToPrefabIds = i1289[1]
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1295 = data
  i1294.path = i1295[0]
  request.r(i1295[1], i1295[2], 0, i1294, 'unityObject')
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1297 = data
  var i1299 = i1297[0]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1299[i + 0]) );
  }
  i1296.scriptsExecutionOrder = i1298
  var i1301 = i1297[1]
  var i1300 = []
  for(var i = 0; i < i1301.length; i += 1) {
    i1300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1301[i + 0]) );
  }
  i1296.sortingLayers = i1300
  var i1303 = i1297[2]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1303[i + 0]) );
  }
  i1296.cullingLayers = i1302
  i1296.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1297[3], i1296.timeSettings)
  i1296.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1297[4], i1296.physicsSettings)
  i1296.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1297[5], i1296.physics2DSettings)
  i1296.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1297[6], i1296.qualitySettings)
  i1296.enableRealtimeShadows = !!i1297[7]
  i1296.enableAutoInstancing = !!i1297[8]
  i1296.enableStaticBatching = !!i1297[9]
  i1296.enableDynamicBatching = !!i1297[10]
  i1296.usePreservativeDynamicBatching = !!i1297[11]
  i1296.lightmapEncodingQuality = i1297[12]
  i1296.desiredColorSpace = i1297[13]
  var i1305 = i1297[14]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.push( i1305[i + 0] );
  }
  i1296.allTags = i1304
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1309 = data
  i1308.name = i1309[0]
  i1308.value = i1309[1]
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1313 = data
  i1312.id = i1313[0]
  i1312.name = i1313[1]
  i1312.value = i1313[2]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1317 = data
  i1316.id = i1317[0]
  i1316.name = i1317[1]
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1319 = data
  i1318.fixedDeltaTime = i1319[0]
  i1318.maximumDeltaTime = i1319[1]
  i1318.timeScale = i1319[2]
  i1318.maximumParticleTimestep = i1319[3]
  return i1318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1321 = data
  i1320.gravity = new pc.Vec3( i1321[0], i1321[1], i1321[2] )
  i1320.defaultSolverIterations = i1321[3]
  i1320.bounceThreshold = i1321[4]
  i1320.autoSyncTransforms = !!i1321[5]
  i1320.autoSimulation = !!i1321[6]
  var i1323 = i1321[7]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1323[i + 0]) );
  }
  i1320.collisionMatrix = i1322
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1327 = data
  i1326.enabled = !!i1327[0]
  i1326.layerId = i1327[1]
  i1326.otherLayerId = i1327[2]
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1329 = data
  request.r(i1329[0], i1329[1], 0, i1328, 'material')
  i1328.gravity = new pc.Vec2( i1329[2], i1329[3] )
  i1328.positionIterations = i1329[4]
  i1328.velocityIterations = i1329[5]
  i1328.velocityThreshold = i1329[6]
  i1328.maxLinearCorrection = i1329[7]
  i1328.maxAngularCorrection = i1329[8]
  i1328.maxTranslationSpeed = i1329[9]
  i1328.maxRotationSpeed = i1329[10]
  i1328.baumgarteScale = i1329[11]
  i1328.baumgarteTOIScale = i1329[12]
  i1328.timeToSleep = i1329[13]
  i1328.linearSleepTolerance = i1329[14]
  i1328.angularSleepTolerance = i1329[15]
  i1328.defaultContactOffset = i1329[16]
  i1328.autoSimulation = !!i1329[17]
  i1328.queriesHitTriggers = !!i1329[18]
  i1328.queriesStartInColliders = !!i1329[19]
  i1328.callbacksOnDisable = !!i1329[20]
  i1328.reuseCollisionCallbacks = !!i1329[21]
  i1328.autoSyncTransforms = !!i1329[22]
  var i1331 = i1329[23]
  var i1330 = []
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1331[i + 0]) );
  }
  i1328.collisionMatrix = i1330
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1335 = data
  i1334.enabled = !!i1335[0]
  i1334.layerId = i1335[1]
  i1334.otherLayerId = i1335[2]
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1337 = data
  var i1339 = i1337[0]
  var i1338 = []
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1339[i + 0]) );
  }
  i1336.qualityLevels = i1338
  var i1341 = i1337[1]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.push( i1341[i + 0] );
  }
  i1336.names = i1340
  i1336.shadows = i1337[2]
  i1336.anisotropicFiltering = i1337[3]
  i1336.antiAliasing = i1337[4]
  i1336.lodBias = i1337[5]
  i1336.shadowCascades = i1337[6]
  i1336.shadowDistance = i1337[7]
  i1336.shadowmaskMode = i1337[8]
  i1336.shadowProjection = i1337[9]
  i1336.shadowResolution = i1337[10]
  i1336.softParticles = !!i1337[11]
  i1336.softVegetation = !!i1337[12]
  i1336.activeColorSpace = i1337[13]
  i1336.desiredColorSpace = i1337[14]
  i1336.masterTextureLimit = i1337[15]
  i1336.maxQueuedFrames = i1337[16]
  i1336.particleRaycastBudget = i1337[17]
  i1336.pixelLightCount = i1337[18]
  i1336.realtimeReflectionProbes = !!i1337[19]
  i1336.shadowCascade2Split = i1337[20]
  i1336.shadowCascade4Split = new pc.Vec3( i1337[21], i1337[22], i1337[23] )
  i1336.streamingMipmapsActive = !!i1337[24]
  i1336.vSyncCount = i1337[25]
  i1336.asyncUploadBufferSize = i1337[26]
  i1336.asyncUploadTimeSlice = i1337[27]
  i1336.billboardsFaceCameraPosition = !!i1337[28]
  i1336.shadowNearPlaneOffset = i1337[29]
  i1336.streamingMipmapsMemoryBudget = i1337[30]
  i1336.maximumLODLevel = i1337[31]
  i1336.streamingMipmapsAddAllCameras = !!i1337[32]
  i1336.streamingMipmapsMaxLevelReduction = i1337[33]
  i1336.streamingMipmapsRenderersPerFrame = i1337[34]
  i1336.resolutionScalingFixedDPIFactor = i1337[35]
  i1336.streamingMipmapsMaxFileIORequests = i1337[36]
  i1336.currentQualityLevel = i1337[37]
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i1345 = data
  var i1347 = i1345[0]
  var i1346 = []
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i1347[i + 0]) );
  }
  i1344.groups = i1346
  var i1349 = i1345[1]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i1349[i + 0]) );
  }
  i1344.snapshots = i1348
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i1353 = data
  i1352.id = i1353[0]
  i1352.childGroupIds = i1353[1]
  i1352.name = i1353[2]
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i1357 = data
  i1356.id = i1357[0]
  var i1359 = i1357[1]
  var i1358 = []
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i1359[i + 0]) );
  }
  i1356.parameters = i1358
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i1363 = data
  i1362.name = i1363[0]
  i1362.value = i1363[1]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1367 = data
  i1366.weight = i1367[0]
  i1366.vertices = i1367[1]
  i1366.normals = i1367[2]
  i1366.tangents = i1367[3]
  return i1366
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"80":[81],"82":[81],"83":[81],"84":[81],"85":[81],"86":[81],"87":[88],"89":[31],"90":[91],"92":[91],"93":[91],"94":[91],"95":[91],"96":[91],"97":[91],"98":[40],"99":[40],"100":[40],"101":[40],"102":[40],"103":[40],"104":[40],"105":[40],"106":[40],"107":[40],"108":[40],"109":[40],"110":[40],"111":[31],"112":[55],"113":[114],"115":[114],"30":[29],"116":[24],"52":[11],"117":[15],"118":[11],"119":[120],"121":[120],"122":[43],"62":[15],"123":[11],"37":[11],"124":[29],"125":[29],"34":[30],"68":[35,29],"126":[29],"33":[30],"127":[29],"128":[29],"129":[29],"130":[29],"131":[29],"132":[29],"133":[29],"134":[29],"135":[29],"136":[35,29],"137":[29],"138":[29],"139":[29],"140":[29],"14":[35,29],"141":[29],"142":[74],"143":[74],"75":[74],"144":[74],"145":[31],"146":[31]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level1_Cloth_Playable","UnityEngine.GameObject","BasicDrag","UnityEngine.SpriteRenderer","BD_CameraFollow","Level1_SurfController","UnityEngine.UI.Text","UnityEngine.BoxCollider2D","RotaryTimerKnob","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.LineRenderer","TextureOffsetScroller","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.TrailRenderer","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteMask","BD_Clamp","UnityEngine.Rigidbody2D","PlaceItem","ActionOnTap","DG.Tweening.DOTweenAnimation","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","SewingCol","OutlinePulse","BD_Action","BD_Fold","BD_Progress","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","StaticFixedPipe","BD_SpriteChange","MenuLevel","IntroLevelAnim","Level_PoseController","BD_AnimationHelper","SpriteButton","PlayableRouter","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.UI.Image","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "12.1";

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

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "HMBL.";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.hmbl.perfect.makeover.fashion.asmr";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "43e14cf3-9fda-421a-858e-7210787a4bb4";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

