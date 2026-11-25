var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.JointSpring' )
  var i657 = data
  i656.spring = i657[0]
  i656.damper = i657[1]
  i656.targetPosition = i657[2]
  return i656
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.JointMotor' )
  var i659 = data
  i658.m_TargetVelocity = i659[0]
  i658.m_Force = i659[1]
  i658.m_FreeSpin = i659[2]
  return i658
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.JointLimits' )
  var i661 = data
  i660.m_Min = i661[0]
  i660.m_Max = i661[1]
  i660.m_Bounciness = i661[2]
  i660.m_BounceMinVelocity = i661[3]
  i660.m_ContactDistance = i661[4]
  i660.minBounce = i661[5]
  i660.maxBounce = i661[6]
  return i660
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.JointDrive' )
  var i663 = data
  i662.m_PositionSpring = i663[0]
  i662.m_PositionDamper = i663[1]
  i662.m_MaximumForce = i663[2]
  i662.m_UseAcceleration = i663[3]
  return i662
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i665 = data
  i664.m_Spring = i665[0]
  i664.m_Damper = i665[1]
  return i664
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i667 = data
  i666.m_Limit = i667[0]
  i666.m_Bounciness = i667[1]
  i666.m_ContactDistance = i667[2]
  return i666
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i669 = data
  i668.m_ExtremumSlip = i669[0]
  i668.m_ExtremumValue = i669[1]
  i668.m_AsymptoteSlip = i669[2]
  i668.m_AsymptoteValue = i669[3]
  i668.m_Stiffness = i669[4]
  return i668
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i671 = data
  i670.m_LowerAngle = i671[0]
  i670.m_UpperAngle = i671[1]
  return i670
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i673 = data
  i672.m_MotorSpeed = i673[0]
  i672.m_MaximumMotorTorque = i673[1]
  return i672
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i675 = data
  i674.m_DampingRatio = i675[0]
  i674.m_Frequency = i675[1]
  i674.m_Angle = i675[2]
  return i674
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i677 = data
  i676.m_LowerTranslation = i677[0]
  i676.m_UpperTranslation = i677[1]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i678 = root || new pc.UnityMaterial()
  var i679 = data
  i678.name = i679[0]
  request.r(i679[1], i679[2], 0, i678, 'shader')
  i678.renderQueue = i679[3]
  i678.enableInstancing = !!i679[4]
  var i681 = i679[5]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i681[i + 0]) );
  }
  i678.floatParameters = i680
  var i683 = i679[6]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i683[i + 0]) );
  }
  i678.colorParameters = i682
  var i685 = i679[7]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i685[i + 0]) );
  }
  i678.vectorParameters = i684
  var i687 = i679[8]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i687[i + 0]) );
  }
  i678.textureParameters = i686
  var i689 = i679[9]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i689[i + 0]) );
  }
  i678.materialFlags = i688
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i693 = data
  i692.name = i693[0]
  i692.value = i693[1]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i697 = data
  i696.name = i697[0]
  i696.value = new pc.Color(i697[1], i697[2], i697[3], i697[4])
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i701 = data
  i700.name = i701[0]
  i700.value = new pc.Vec4( i701[1], i701[2], i701[3], i701[4] )
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i705 = data
  i704.name = i705[0]
  request.r(i705[1], i705[2], 0, i704, 'value')
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i709 = data
  i708.name = i709[0]
  i708.enabled = !!i709[1]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i711 = data
  i710.name = i711[0]
  i710.width = i711[1]
  i710.height = i711[2]
  i710.mipmapCount = i711[3]
  i710.anisoLevel = i711[4]
  i710.filterMode = i711[5]
  i710.hdr = !!i711[6]
  i710.format = i711[7]
  i710.wrapMode = i711[8]
  i710.alphaIsTransparency = !!i711[9]
  i710.alphaSource = i711[10]
  i710.graphicsFormat = i711[11]
  i710.sRGBTexture = !!i711[12]
  i710.desiredColorSpace = i711[13]
  i710.wrapU = i711[14]
  i710.wrapV = i711[15]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i713 = data
  i712.name = i713[0]
  i712.halfPrecision = !!i713[1]
  i712.useSimplification = !!i713[2]
  i712.useUInt32IndexFormat = !!i713[3]
  i712.vertexCount = i713[4]
  i712.aabb = i713[5]
  var i715 = i713[6]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( !!i715[i + 0] );
  }
  i712.streams = i714
  i712.vertices = i713[7]
  var i717 = i713[8]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i717[i + 0]) );
  }
  i712.subMeshes = i716
  var i719 = i713[9]
  var i718 = []
  for(var i = 0; i < i719.length; i += 16) {
    i718.push( new pc.Mat4().setData(i719[i + 0], i719[i + 1], i719[i + 2], i719[i + 3],  i719[i + 4], i719[i + 5], i719[i + 6], i719[i + 7],  i719[i + 8], i719[i + 9], i719[i + 10], i719[i + 11],  i719[i + 12], i719[i + 13], i719[i + 14], i719[i + 15]) );
  }
  i712.bindposes = i718
  var i721 = i713[10]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i721[i + 0]) );
  }
  i712.blendShapes = i720
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i727 = data
  i726.triangles = i727[0]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i733 = data
  i732.name = i733[0]
  var i735 = i733[1]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i735[i + 0]) );
  }
  i732.frames = i734
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i737 = data
  i736.position = new pc.Vec3( i737[0], i737[1], i737[2] )
  i736.scale = new pc.Vec3( i737[3], i737[4], i737[5] )
  i736.rotation = new pc.Quat(i737[6], i737[7], i737[8], i737[9])
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i739 = data
  i738.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i739[0], i738.main)
  i738.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i739[1], i738.colorBySpeed)
  i738.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i739[2], i738.colorOverLifetime)
  i738.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i739[3], i738.emission)
  i738.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i739[4], i738.rotationBySpeed)
  i738.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i739[5], i738.rotationOverLifetime)
  i738.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i739[6], i738.shape)
  i738.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i739[7], i738.sizeBySpeed)
  i738.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i739[8], i738.sizeOverLifetime)
  i738.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i739[9], i738.textureSheetAnimation)
  i738.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i739[10], i738.velocityOverLifetime)
  i738.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i739[11], i738.noise)
  i738.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i739[12], i738.inheritVelocity)
  i738.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i739[13], i738.forceOverLifetime)
  i738.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i739[14], i738.limitVelocityOverLifetime)
  i738.useAutoRandomSeed = !!i739[15]
  i738.randomSeed = i739[16]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i740 = root || new pc.ParticleSystemMain()
  var i741 = data
  i740.duration = i741[0]
  i740.loop = !!i741[1]
  i740.prewarm = !!i741[2]
  i740.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[3], i740.startDelay)
  i740.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[4], i740.startLifetime)
  i740.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[5], i740.startSpeed)
  i740.startSize3D = !!i741[6]
  i740.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[7], i740.startSizeX)
  i740.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[8], i740.startSizeY)
  i740.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[9], i740.startSizeZ)
  i740.startRotation3D = !!i741[10]
  i740.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[11], i740.startRotationX)
  i740.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[12], i740.startRotationY)
  i740.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[13], i740.startRotationZ)
  i740.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i741[14], i740.startColor)
  i740.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[15], i740.gravityModifier)
  i740.simulationSpace = i741[16]
  request.r(i741[17], i741[18], 0, i740, 'customSimulationSpace')
  i740.simulationSpeed = i741[19]
  i740.useUnscaledTime = !!i741[20]
  i740.scalingMode = i741[21]
  i740.playOnAwake = !!i741[22]
  i740.maxParticles = i741[23]
  i740.emitterVelocityMode = i741[24]
  i740.stopAction = i741[25]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i742 = root || new pc.MinMaxCurve()
  var i743 = data
  i742.mode = i743[0]
  i742.curveMin = new pc.AnimationCurve( { keys_flow: i743[1] } )
  i742.curveMax = new pc.AnimationCurve( { keys_flow: i743[2] } )
  i742.curveMultiplier = i743[3]
  i742.constantMin = i743[4]
  i742.constantMax = i743[5]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i744 = root || new pc.MinMaxGradient()
  var i745 = data
  i744.mode = i745[0]
  i744.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i745[1], i744.gradientMin)
  i744.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i745[2], i744.gradientMax)
  i744.colorMin = new pc.Color(i745[3], i745[4], i745[5], i745[6])
  i744.colorMax = new pc.Color(i745[7], i745[8], i745[9], i745[10])
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i747 = data
  i746.mode = i747[0]
  var i749 = i747[1]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i749[i + 0]) );
  }
  i746.colorKeys = i748
  var i751 = i747[2]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i751[i + 0]) );
  }
  i746.alphaKeys = i750
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemColorBySpeed()
  var i753 = data
  i752.enabled = !!i753[0]
  i752.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i753[1], i752.color)
  i752.range = new pc.Vec2( i753[2], i753[3] )
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i757 = data
  i756.color = new pc.Color(i757[0], i757[1], i757[2], i757[3])
  i756.time = i757[4]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i761 = data
  i760.alpha = i761[0]
  i760.time = i761[1]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemColorOverLifetime()
  var i763 = data
  i762.enabled = !!i763[0]
  i762.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i763[1], i762.color)
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemEmitter()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[1], i764.rateOverTime)
  i764.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[2], i764.rateOverDistance)
  var i767 = i765[3]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i767[i + 0]) );
  }
  i764.bursts = i766
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemBurst()
  var i771 = data
  i770.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[0], i770.count)
  i770.cycleCount = i771[1]
  i770.minCount = i771[2]
  i770.maxCount = i771[3]
  i770.repeatInterval = i771[4]
  i770.time = i771[5]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i772 = root || new pc.ParticleSystemRotationBySpeed()
  var i773 = data
  i772.enabled = !!i773[0]
  i772.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[1], i772.x)
  i772.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[2], i772.y)
  i772.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i773[3], i772.z)
  i772.separateAxes = !!i773[4]
  i772.range = new pc.Vec2( i773[5], i773[6] )
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemRotationOverLifetime()
  var i775 = data
  i774.enabled = !!i775[0]
  i774.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[1], i774.x)
  i774.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[2], i774.y)
  i774.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i775[3], i774.z)
  i774.separateAxes = !!i775[4]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemShape()
  var i777 = data
  i776.enabled = !!i777[0]
  i776.shapeType = i777[1]
  i776.randomDirectionAmount = i777[2]
  i776.sphericalDirectionAmount = i777[3]
  i776.randomPositionAmount = i777[4]
  i776.alignToDirection = !!i777[5]
  i776.radius = i777[6]
  i776.radiusMode = i777[7]
  i776.radiusSpread = i777[8]
  i776.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[9], i776.radiusSpeed)
  i776.radiusThickness = i777[10]
  i776.angle = i777[11]
  i776.length = i777[12]
  i776.boxThickness = new pc.Vec3( i777[13], i777[14], i777[15] )
  i776.meshShapeType = i777[16]
  request.r(i777[17], i777[18], 0, i776, 'mesh')
  request.r(i777[19], i777[20], 0, i776, 'meshRenderer')
  request.r(i777[21], i777[22], 0, i776, 'skinnedMeshRenderer')
  i776.useMeshMaterialIndex = !!i777[23]
  i776.meshMaterialIndex = i777[24]
  i776.useMeshColors = !!i777[25]
  i776.normalOffset = i777[26]
  i776.arc = i777[27]
  i776.arcMode = i777[28]
  i776.arcSpread = i777[29]
  i776.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i777[30], i776.arcSpeed)
  i776.donutRadius = i777[31]
  i776.position = new pc.Vec3( i777[32], i777[33], i777[34] )
  i776.rotation = new pc.Vec3( i777[35], i777[36], i777[37] )
  i776.scale = new pc.Vec3( i777[38], i777[39], i777[40] )
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemSizeBySpeed()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[1], i778.x)
  i778.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[2], i778.y)
  i778.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[3], i778.z)
  i778.separateAxes = !!i779[4]
  i778.range = new pc.Vec2( i779[5], i779[6] )
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemSizeOverLifetime()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[1], i780.x)
  i780.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[2], i780.y)
  i780.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[3], i780.z)
  i780.separateAxes = !!i781[4]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.mode = i783[1]
  i782.animation = i783[2]
  i782.numTilesX = i783[3]
  i782.numTilesY = i783[4]
  i782.useRandomRow = !!i783[5]
  i782.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[6], i782.frameOverTime)
  i782.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[7], i782.startFrame)
  i782.cycleCount = i783[8]
  i782.rowIndex = i783[9]
  i782.flipU = i783[10]
  i782.flipV = i783[11]
  i782.spriteCount = i783[12]
  var i785 = i783[13]
  var i784 = []
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 2, i784, '')
  }
  i782.sprites = i784
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[1], i788.x)
  i788.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[2], i788.y)
  i788.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[3], i788.z)
  i788.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[4], i788.radial)
  i788.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[5], i788.speedModifier)
  i788.space = i789[6]
  i788.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[7], i788.orbitalX)
  i788.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[8], i788.orbitalY)
  i788.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[9], i788.orbitalZ)
  i788.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[10], i788.orbitalOffsetX)
  i788.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[11], i788.orbitalOffsetY)
  i788.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[12], i788.orbitalOffsetZ)
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemNoise()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.separateAxes = !!i791[1]
  i790.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.strengthX)
  i790.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.strengthY)
  i790.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[4], i790.strengthZ)
  i790.frequency = i791[5]
  i790.damping = !!i791[6]
  i790.octaveCount = i791[7]
  i790.octaveMultiplier = i791[8]
  i790.octaveScale = i791[9]
  i790.quality = i791[10]
  i790.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[11], i790.scrollSpeed)
  i790.scrollSpeedMultiplier = i791[12]
  i790.remapEnabled = !!i791[13]
  i790.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[14], i790.remapX)
  i790.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[15], i790.remapY)
  i790.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[16], i790.remapZ)
  i790.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[17], i790.positionAmount)
  i790.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[18], i790.rotationAmount)
  i790.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[19], i790.sizeAmount)
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemInheritVelocity()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.mode = i793[1]
  i792.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.curve)
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemForceOverLifetime()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[1], i794.x)
  i794.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.y)
  i794.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[3], i794.z)
  i794.space = i795[4]
  i794.randomized = !!i795[5]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.limit)
  i796.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.limitX)
  i796.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[3], i796.limitY)
  i796.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[4], i796.limitZ)
  i796.dampen = i797[5]
  i796.separateAxes = !!i797[6]
  i796.space = i797[7]
  i796.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[8], i796.drag)
  i796.multiplyDragByParticleSize = !!i797[9]
  i796.multiplyDragByParticleVelocity = !!i797[10]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'mesh')
  i798.meshCount = i799[2]
  i798.activeVertexStreamsCount = i799[3]
  i798.alignment = i799[4]
  i798.renderMode = i799[5]
  i798.sortMode = i799[6]
  i798.lengthScale = i799[7]
  i798.velocityScale = i799[8]
  i798.cameraVelocityScale = i799[9]
  i798.normalDirection = i799[10]
  i798.sortingFudge = i799[11]
  i798.minParticleSize = i799[12]
  i798.maxParticleSize = i799[13]
  i798.pivot = new pc.Vec3( i799[14], i799[15], i799[16] )
  request.r(i799[17], i799[18], 0, i798, 'trailMaterial')
  i798.applyActiveColorSpace = !!i799[19]
  i798.enabled = !!i799[20]
  request.r(i799[21], i799[22], 0, i798, 'sharedMaterial')
  var i801 = i799[23]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 2, i800, '')
  }
  i798.sharedMaterials = i800
  i798.receiveShadows = !!i799[24]
  i798.shadowCastingMode = i799[25]
  i798.sortingLayerID = i799[26]
  i798.sortingOrder = i799[27]
  i798.lightmapIndex = i799[28]
  i798.lightmapSceneIndex = i799[29]
  i798.lightmapScaleOffset = new pc.Vec4( i799[30], i799[31], i799[32], i799[33] )
  i798.lightProbeUsage = i799[34]
  i798.reflectionProbeUsage = i799[35]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i805 = data
  i804.name = i805[0]
  i804.tagId = i805[1]
  i804.enabled = !!i805[2]
  i804.isStatic = !!i805[3]
  i804.layer = i805[4]
  return i804
}

Deserializers["Level1_Hair_Playable_Step34"] = function (request, data, root) {
  var i806 = root || request.c( 'Level1_Hair_Playable_Step34' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'wetCloth')
  request.r(i807[2], i807[3], 0, i806, 'waterDripingParticle')
  i806.ZoomStep1 = request.d('ZoomPos', i807[4], i806.ZoomStep1)
  var i809 = i807[5]
  var i808 = []
  for(var i = 0; i < i809.length; i += 2) {
  request.r(i809[i + 0], i809[i + 1], 2, i808, '')
  }
  i806.AllTrash = i808
  var i811 = i807[6]
  var i810 = []
  for(var i = 0; i < i811.length; i += 2) {
  request.r(i811[i + 0], i811[i + 1], 2, i810, '')
  }
  i806.AllTrashOutlines = i810
  i806.trashDone = !!i807[7]
  i806.trashThrown = i807[8]
  i806.trashTotal = i807[9]
  request.r(i807[10], i807[11], 0, i806, 'bd_Sticky')
  i806.ZoomStep2 = request.d('ZoomPos', i807[12], i806.ZoomStep2)
  request.r(i807[13], i807[14], 0, i806, 'ToolStep2')
  request.r(i807[15], i807[16], 0, i806, 'camFollowStep2')
  var i813 = i807[17]
  var i812 = []
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 2, i812, '')
  }
  i806.AllBugOutlines = i812
  i806.ZoomStep2b = request.d('ZoomPos', i807[18], i806.ZoomStep2b)
  request.r(i807[19], i807[20], 0, i806, 'ToolStep2b')
  request.r(i807[21], i807[22], 0, i806, 'camFollowStep2b')
  request.r(i807[23], i807[24], 0, i806, 'dustColStep2')
  request.r(i807[25], i807[26], 0, i806, 'handIndicationShower')
  request.r(i807[27], i807[28], 0, i806, 'hairDirtyStatic')
  request.r(i807[29], i807[30], 0, i806, 'hairDirtyWetStatic')
  request.r(i807[31], i807[32], 0, i806, 'dryHairAnim')
  i806.ZoomStep3 = request.d('ZoomPos', i807[33], i806.ZoomStep3)
  request.r(i807[34], i807[35], 0, i806, 'ShampooOnHand')
  request.r(i807[36], i807[37], 0, i806, 'ShampooInHandCap')
  request.r(i807[38], i807[39], 0, i806, 'ToolStep3')
  request.r(i807[40], i807[41], 0, i806, 'shampooPatch')
  request.r(i807[42], i807[43], 0, i806, 'handSpriteRend')
  request.r(i807[44], i807[45], 0, i806, 'bottleDefault')
  request.r(i807[46], i807[47], 0, i806, 'bottlePressed')
  request.r(i807[48], i807[49], 0, i806, 'shampooDropping')
  request.r(i807[50], i807[51], 0, i806, 'bottleOpenSfx')
  request.r(i807[52], i807[53], 0, i806, 'bottleSqueezSfx')
  request.r(i807[54], i807[55], 0, i806, 'bottlePourSfx')
  i806.ZoomStep4 = request.d('ZoomPos', i807[56], i806.ZoomStep4)
  request.r(i807[57], i807[58], 0, i806, 'ToolStep4')
  request.r(i807[59], i807[60], 0, i806, 'camFollowStep4')
  request.r(i807[61], i807[62], 0, i806, 'foamLight_E')
  request.r(i807[63], i807[64], 0, i806, 'foam2_E')
  request.r(i807[65], i807[66], 0, i806, 'foamCol')
  request.r(i807[67], i807[68], 0, i806, 'handIndicationHands')
  request.r(i807[69], i807[70], 0, i806, 'progressStep4')
  i806.levelName = i807[71]
  i806.levelReward = i807[72]
  request.r(i807[73], i807[74], 0, i806, 'LevelIcon')
  request.r(i807[75], i807[76], 0, i806, 'Level_BG')
  var i815 = i807[77]
  var i814 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 1, i814, '')
  }
  i806.ToolIcons = i814
  var i817 = i807[78]
  var i816 = []
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 2, i816, '')
  }
  i806.AllDrags = i816
  var i819 = i807[79]
  var i818 = []
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 2, i818, '')
  }
  i806.AllSources = i818
  var i821 = i807[80]
  var i820 = []
  for(var i = 0; i < i821.length; i += 2) {
  request.r(i821[i + 0], i821[i + 1], 2, i820, '')
  }
  i806.AllScratches = i820
  i806.stepsDone = i807[81]
  i806.levelNo = i807[82]
  i806.partNo = i807[83]
  var i823 = i807[84]
  var i822 = []
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 2, i822, '')
  }
  i806.disableOnLevelComplete = i822
  i806.zoomBeforeComplete = !!i807[85]
  i806.completionZoom = request.d('ZoomPos', i807[86], i806.completionZoom)
  i806.completionZoomDuration = i807[87]
  request.r(i807[88], i807[89], 0, i806, 'bubbleGum')
  return i806
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i824 = root || request.c( 'ZoomPos' )
  var i825 = data
  i824.CameraPos = new pc.Vec3( i825[0], i825[1], i825[2] )
  i824.CameraFOV = i825[3]
  return i824
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i838 = root || request.c( 'PlayableCTA' )
  var i839 = data
  i838.trigger = i839[0]
  i838.autoCtaOnLevelComplete = !!i839[1]
  i838.afterSeconds = i839[2]
  i838.afterTaps = i839[3]
  request.r(i839[4], i839[5], 0, i838, 'scratchProgress')
  i838.scratchIndex = i839[6]
  i838.progressThreshold = i839[7]
  i838.blockInputOnFire = !!i839[8]
  i838.refireOnEveryTap = !!i839[9]
  i838.refireDelay = i839[10]
  i838.showEndCard = !!i839[11]
  request.r(i839[12], i839[13], 0, i838, 'endCard')
  var i841 = i839[14]
  var i840 = []
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 2, i840, '')
  }
  i838.thingsToDisableOnEndCard = i840
  i838.endCardDelay = i839[15]
  i838.showEndCardOnProgressTrigger = !!i839[16]
  i838.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i839[17], i838.onCtaFired)
  i838.logWhenFired = !!i839[18]
  return i838
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i843 = data
  i842.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i843[0], i842.m_PersistentCalls)
  return i842
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i845 = data
  var i847 = i845[0]
  var i846 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i847.length; i += 1) {
    i846.add(request.d('UnityEngine.Events.PersistentCall', i847[i + 0]));
  }
  i844.m_Calls = i846
  return i844
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'm_Target')
  i850.m_TargetAssemblyTypeName = i851[2]
  i850.m_MethodName = i851[3]
  i850.m_Mode = i851[4]
  i850.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i851[5], i850.m_Arguments)
  i850.m_CallState = i851[6]
  return i850
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i852 = root || request.c( 'PlayableFadeCoverSettings' )
  var i853 = data
  i852.revealDelay = i853[0]
  i852.revealDuration = i853[1]
  return i852
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i854 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'MainCamera')
  i854.RenderType = i855[2]
  request.r(i855[3], i855[4], 0, i854, 'ScratchSurfaceSprite')
  i854.ScratchSurfaceSpriteHasAlpha = !!i855[5]
  i854.MaskProgressCutOffValue = i855[6]
  request.r(i855[7], i855[8], 0, i854, 'EraseTexture')
  i854.EraseTextureScale = new pc.Vec2( i855[9], i855[10] )
  i854.InputEnabled = !!i855[11]
  request.r(i855[12], i855[13], 0, i854, 'Card')
  i854.Mode = i855[14]
  request.r(i855[15], i855[16], 0, i854, 'Progress')
  request.r(i855[17], i855[18], 0, i854, 'MeshCard')
  request.r(i855[19], i855[20], 0, i854, 'SpriteCard')
  request.r(i855[21], i855[22], 0, i854, 'ImageCard')
  request.r(i855[23], i855[24], 0, i854, 'MaskShader')
  request.r(i855[25], i855[26], 0, i854, 'BrushShader')
  request.r(i855[27], i855[28], 0, i854, 'MaskProgressShader')
  request.r(i855[29], i855[30], 0, i854, 'MaskProgressCutOffShader')
  return i854
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i856 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'MainCamera')
  request.r(i857[2], i857[3], 0, i856, 'Surface')
  i856.RenderTextureQuality = i857[4]
  request.r(i857[5], i857[6], 0, i856, 'Eraser')
  request.r(i857[7], i857[8], 0, i856, 'Progress')
  request.r(i857[9], i857[10], 0, i856, 'ScratchSurface')
  request.r(i857[11], i857[12], 0, i856, 'RenderTexture')
  i856.BrushScale = new pc.Vec2( i857[13], i857[14] )
  request.r(i857[15], i857[16], 0, i856, 'ToolTip')
  i856.InputEnabled = !!i857[17]
  i856.IsScratching = !!i857[18]
  i856.useChangingScale = !!i857[19]
  i856.useGivenBrushScale = !!i857[20]
  i856.canSpreadMask = !!i857[21]
  i856.shouldPaintHoles = !!i857[22]
  i856.canRotateTip = !!i857[23]
  i856._mode = i857[24]
  return i856
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i858 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'Card')
  i858.currentProgress = i859[2]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i861 = data
  i860.color = new pc.Color(i861[0], i861[1], i861[2], i861[3])
  request.r(i861[4], i861[5], 0, i860, 'sprite')
  i860.flipX = !!i861[6]
  i860.flipY = !!i861[7]
  i860.drawMode = i861[8]
  i860.size = new pc.Vec2( i861[9], i861[10] )
  i860.tileMode = i861[11]
  i860.adaptiveModeThreshold = i861[12]
  i860.maskInteraction = i861[13]
  i860.spriteSortPoint = i861[14]
  i860.enabled = !!i861[15]
  request.r(i861[16], i861[17], 0, i860, 'sharedMaterial')
  var i863 = i861[18]
  var i862 = []
  for(var i = 0; i < i863.length; i += 2) {
  request.r(i863[i + 0], i863[i + 1], 2, i862, '')
  }
  i860.sharedMaterials = i862
  i860.receiveShadows = !!i861[19]
  i860.shadowCastingMode = i861[20]
  i860.sortingLayerID = i861[21]
  i860.sortingOrder = i861[22]
  i860.lightmapIndex = i861[23]
  i860.lightmapSceneIndex = i861[24]
  i860.lightmapScaleOffset = new pc.Vec4( i861[25], i861[26], i861[27], i861[28] )
  i860.lightProbeUsage = i861[29]
  i860.reflectionProbeUsage = i861[30]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'animatorController')
  request.r(i865[2], i865[3], 0, i864, 'avatar')
  i864.updateMode = i865[4]
  i864.hasTransformHierarchy = !!i865[5]
  i864.applyRootMotion = !!i865[6]
  var i867 = i865[7]
  var i866 = []
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 2, i866, '')
  }
  i864.humanBones = i866
  i864.enabled = !!i865[8]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i871 = data
  var i873 = i871[0]
  var i872 = []
  for(var i = 0; i < i873.length; i += 3) {
    i872.push( new pc.Vec3( i873[i + 0], i873[i + 1], i873[i + 2] ) );
  }
  i870.positions = i872
  i870.positionCount = i871[1]
  i870.time = i871[2]
  i870.startWidth = i871[3]
  i870.endWidth = i871[4]
  i870.widthMultiplier = i871[5]
  i870.autodestruct = !!i871[6]
  i870.emitting = !!i871[7]
  i870.numCornerVertices = i871[8]
  i870.numCapVertices = i871[9]
  i870.minVertexDistance = i871[10]
  i870.colorGradient = i871[11] ? new pc.ColorGradient(i871[11][0], i871[11][1], i871[11][2]) : null
  i870.startColor = new pc.Color(i871[12], i871[13], i871[14], i871[15])
  i870.endColor = new pc.Color(i871[16], i871[17], i871[18], i871[19])
  i870.generateLightingData = !!i871[20]
  i870.textureMode = i871[21]
  i870.alignment = i871[22]
  i870.widthCurve = new pc.AnimationCurve( { keys_flow: i871[23] } )
  i870.enabled = !!i871[24]
  request.r(i871[25], i871[26], 0, i870, 'sharedMaterial')
  var i875 = i871[27]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i870.sharedMaterials = i874
  i870.receiveShadows = !!i871[28]
  i870.shadowCastingMode = i871[29]
  i870.sortingLayerID = i871[30]
  i870.sortingOrder = i871[31]
  i870.lightmapIndex = i871[32]
  i870.lightmapSceneIndex = i871[33]
  i870.lightmapScaleOffset = new pc.Vec4( i871[34], i871[35], i871[36], i871[37] )
  i870.lightProbeUsage = i871[38]
  i870.reflectionProbeUsage = i871[39]
  return i870
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'm_RootBone')
  var i881 = i879[2]
  var i880 = []
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 2, i880, '')
  }
  i878.m_BoneTransforms = i880
  i878.m_AlwaysUpdate = !!i879[3]
  i878.m_AutoRebind = !!i879[4]
  return i878
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i882 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i883 = data
  i882.targetIsSelf = !!i883[0]
  request.r(i883[1], i883[2], 0, i882, 'targetGO')
  i882.tweenTargetIsTargetGO = !!i883[3]
  i882.delay = i883[4]
  i882.duration = i883[5]
  i882.easeType = i883[6]
  i882.easeCurve = new pc.AnimationCurve( { keys_flow: i883[7] } )
  i882.loopType = i883[8]
  i882.loops = i883[9]
  i882.id = i883[10]
  i882.isRelative = !!i883[11]
  i882.isFrom = !!i883[12]
  i882.isIndependentUpdate = !!i883[13]
  i882.autoKill = !!i883[14]
  i882.autoGenerate = !!i883[15]
  i882.isActive = !!i883[16]
  i882.isValid = !!i883[17]
  request.r(i883[18], i883[19], 0, i882, 'target')
  i882.animationType = i883[20]
  i882.targetType = i883[21]
  i882.forcedTargetType = i883[22]
  i882.autoPlay = !!i883[23]
  i882.useTargetAsV3 = !!i883[24]
  i882.endValueFloat = i883[25]
  i882.endValueV3 = new pc.Vec3( i883[26], i883[27], i883[28] )
  i882.endValueV2 = new pc.Vec2( i883[29], i883[30] )
  i882.endValueColor = new pc.Color(i883[31], i883[32], i883[33], i883[34])
  i882.endValueString = i883[35]
  i882.endValueRect = UnityEngine.Rect.MinMaxRect(i883[36], i883[37], i883[38], i883[39])
  request.r(i883[40], i883[41], 0, i882, 'endValueTransform')
  i882.optionalBool0 = !!i883[42]
  i882.optionalBool1 = !!i883[43]
  i882.optionalFloat0 = i883[44]
  i882.optionalInt0 = i883[45]
  i882.optionalRotationMode = i883[46]
  i882.optionalScrambleMode = i883[47]
  i882.optionalShakeRandomnessMode = i883[48]
  i882.optionalString = i883[49]
  i882.updateType = i883[50]
  i882.isSpeedBased = !!i883[51]
  i882.hasOnStart = !!i883[52]
  i882.hasOnPlay = !!i883[53]
  i882.hasOnUpdate = !!i883[54]
  i882.hasOnStepComplete = !!i883[55]
  i882.hasOnComplete = !!i883[56]
  i882.hasOnTweenCreated = !!i883[57]
  i882.hasOnRewind = !!i883[58]
  i882.onStart = request.d('UnityEngine.Events.UnityEvent', i883[59], i882.onStart)
  i882.onPlay = request.d('UnityEngine.Events.UnityEvent', i883[60], i882.onPlay)
  i882.onUpdate = request.d('UnityEngine.Events.UnityEvent', i883[61], i882.onUpdate)
  i882.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i883[62], i882.onStepComplete)
  i882.onComplete = request.d('UnityEngine.Events.UnityEvent', i883[63], i882.onComplete)
  i882.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i883[64], i882.onTweenCreated)
  i882.onRewind = request.d('UnityEngine.Events.UnityEvent', i883[65], i882.onRewind)
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i885 = data
  i884.usedByComposite = !!i885[0]
  i884.autoTiling = !!i885[1]
  i884.size = new pc.Vec2( i885[2], i885[3] )
  i884.edgeRadius = i885[4]
  i884.enabled = !!i885[5]
  i884.isTrigger = !!i885[6]
  i884.usedByEffector = !!i885[7]
  i884.density = i885[8]
  i884.offset = new pc.Vec2( i885[9], i885[10] )
  request.r(i885[11], i885[12], 0, i884, 'material')
  return i884
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i886 = root || request.c( 'BasicDrag' )
  var i887 = data
  i886.canDrag = !!i887[0]
  i886.dragByDelta = !!i887[1]
  i886.isDragging = !!i887[2]
  i886.moveWithPointer = !!i887[3]
  i886.canReturn = !!i887[4]
  i886.jumpOnReturn = !!i887[5]
  i886.returnTime = i887[6]
  i886.Tool_Offset = new pc.Vec3( i887[7], i887[8], i887[9] )
  i886.canScaleIncrease = !!i887[10]
  i886.Self_ScaleNew = new pc.Vec3( i887[11], i887[12], i887[13] )
  i886.canRotateOnPick = !!i887[14]
  i886.startRot = new pc.Vec3( i887[15], i887[16], i887[17] )
  i886.newRot = new pc.Vec3( i887[18], i887[19], i887[20] )
  var i889 = i887[21]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i886.childSprite = i888
  request.r(i887[22], i887[23], 0, i886, 'ToolSelectClip')
  request.r(i887[24], i887[25], 0, i886, 'ToolLoopClip')
  request.r(i887[26], i887[27], 0, i886, 'thisParticles')
  i886.onDragparticle = !!i887[28]
  request.r(i887[29], i887[30], 0, i886, 'dragParticles')
  request.r(i887[31], i887[32], 0, i886, 'anim')
  i886.startPos = new pc.Vec3( i887[33], i887[34], i887[35] )
  i886.startScale = new pc.Vec3( i887[36], i887[37], i887[38] )
  i886.Vibration = !!i887[39]
  i886.isPlacedCannotMove = !!i887[40]
  i886.isObjectMovingWhileDragging = !!i887[41]
  i886.OnMouseDownEvent = request.d('System.Action', i887[42], i886.OnMouseDownEvent)
  i886.OnMouseUpEvent = request.d('System.Action', i887[43], i886.OnMouseUpEvent)
  i886.ProgStartEvent = request.d('System.Action', i887[44], i886.ProgStartEvent)
  i886.ProgEndEvent = request.d('System.Action', i887[45], i886.ProgEndEvent)
  i886.canCallMouseUpWhenGamePaused = !!i887[46]
  i886.ClampX_L = i887[47]
  i886.ClampX_H = i887[48]
  i886.ClampY_L = i887[49]
  i886.ClampY_H = i887[50]
  i886.startOrder = i887[51]
  i886.dontResetItIsInCollider = !!i887[52]
  request.r(i887[53], i887[54], 0, i886, 'thisCollider')
  request.r(i887[55], i887[56], 0, i886, 'thisSR')
  i886.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i887[57], i886.OnMouseDownEventIndependentFromCanDrag)
  return i886
}

Deserializers["System.Action"] = function (request, data, root) {
  var i892 = root || request.c( 'System.Action' )
  var i893 = data
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

Deserializers["OutlinePulse"] = function (request, data, root) {
  var i896 = root || request.c( 'OutlinePulse' )
  var i897 = data
  i896.smallThickness = i897[0]
  i896.largeThickness = i897[1]
  i896.transitionSpeed = i897[2]
  i896.animationSpeed = i897[3]
  i896.isThickOutline = !!i897[4]
  i896.animate = !!i897[5]
  i896.hideSpriteOnly = !!i897[6]
  return i896
}

Deserializers["BD_ItemPick"] = function (request, data, root) {
  var i898 = root || request.c( 'BD_ItemPick' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'Tool')
  request.r(i899[2], i899[3], 0, i898, 'Outline')
  request.r(i899[4], i899[5], 0, i898, 'itemRend')
  request.r(i899[6], i899[7], 0, i898, 'pick_sp')
  i898.OnTap = request.d('UnityEngine.Events.UnityEvent', i899[8], i898.OnTap)
  i898.OnComplete = request.d('UnityEngine.Events.UnityEvent', i899[9], i898.OnComplete)
  request.r(i899[10], i899[11], 0, i898, 'Clip')
  i898.minDragDistance = i899[12]
  i898.isTaped = !!i899[13]
  return i898
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'm_ObjectArgument')
  i900.m_ObjectArgumentAssemblyTypeName = i901[2]
  i900.m_IntArgument = i901[3]
  i900.m_FloatArgument = i901[4]
  i900.m_StringArgument = i901[5]
  i900.m_BoolArgument = !!i901[6]
  return i900
}

Deserializers["BD_Sticky"] = function (request, data, root) {
  var i902 = root || request.c( 'BD_Sticky' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, 'anim')
  i902.isVerticlePull = !!i903[2]
  request.r(i903[3], i903[4], 0, i902, 'pickSfx')
  request.r(i903[5], i903[6], 0, i902, 'pulledClip')
  request.r(i903[7], i903[8], 0, i902, 'pullSource')
  i902.OnComplete = request.d('UnityEngine.Events.UnityEvent', i903[9], i902.OnComplete)
  i902.changeLayerPick = !!i903[10]
  request.r(i903[11], i903[12], 0, i902, 'sp_rendr')
  i902.def_layerNo = i903[13]
  i902.tar_LayerNo = i903[14]
  i902.direction = i903[15]
  i902.dragThreshold = i903[16]
  i902.pullDistanceToFree = i903[17]
  i902.returnSpeed = i903[18]
  i902.resistance = i903[19]
  var i905 = i903[20]
  var i904 = []
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 2, i904, '')
  }
  i902.StartBones = i904
  var i907 = i903[21]
  var i906 = []
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 2, i906, '')
  }
  i902.EndBones = i906
  request.r(i903[22], i903[23], 0, i902, 'BonePivot')
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'clip')
  request.r(i909[2], i909[3], 0, i908, 'outputAudioMixerGroup')
  i908.playOnAwake = !!i909[4]
  i908.loop = !!i909[5]
  i908.time = i909[6]
  i908.volume = i909[7]
  i908.pitch = i909[8]
  i908.enabled = !!i909[9]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i915 = data
  i914.frontSortingLayerID = i915[0]
  i914.frontSortingOrder = i915[1]
  i914.backSortingLayerID = i915[2]
  i914.backSortingOrder = i915[3]
  i914.alphaCutoff = i915[4]
  request.r(i915[5], i915[6], 0, i914, 'sprite')
  i914.tileMode = i915[7]
  i914.isCustomRangeActive = !!i915[8]
  i914.spriteSortPoint = i915[9]
  i914.enabled = !!i915[10]
  request.r(i915[11], i915[12], 0, i914, 'sharedMaterial')
  var i917 = i915[13]
  var i916 = []
  for(var i = 0; i < i917.length; i += 2) {
  request.r(i917[i + 0], i917[i + 1], 2, i916, '')
  }
  i914.sharedMaterials = i916
  i914.receiveShadows = !!i915[14]
  i914.shadowCastingMode = i915[15]
  i914.sortingLayerID = i915[16]
  i914.sortingOrder = i915[17]
  i914.lightmapIndex = i915[18]
  i914.lightmapSceneIndex = i915[19]
  i914.lightmapScaleOffset = new pc.Vec4( i915[20], i915[21], i915[22], i915[23] )
  i914.lightProbeUsage = i915[24]
  i914.reflectionProbeUsage = i915[25]
  return i914
}

Deserializers["PlayTweenOnHit"] = function (request, data, root) {
  var i918 = root || request.c( 'PlayTweenOnHit' )
  var i919 = data
  i918.isContinueous = !!i919[0]
  request.r(i919[1], i919[2], 0, i918, 'tool')
  var i921 = i919[3]
  var i920 = []
  for(var i = 0; i < i921.length; i += 2) {
  request.r(i921[i + 0], i921[i + 1], 2, i920, '')
  }
  i918.animsToPlay = i920
  request.r(i919[4], i919[5], 0, i918, 'tipTarget')
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i925 = data
  i924.usedByComposite = !!i925[0]
  i924.autoTiling = !!i925[1]
  var i927 = i925[2]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
  var i929 = i927[i + 0]
  var i928 = []
  for(var i = 0; i < i929.length; i += 2) {
    i928.push( new pc.Vec2( i929[i + 0], i929[i + 1] ) );
  }
    i926.push( i928 );
  }
  i924.points = i926
  i924.enabled = !!i925[3]
  i924.isTrigger = !!i925[4]
  i924.usedByEffector = !!i925[5]
  i924.density = i925[6]
  i924.offset = new pc.Vec2( i925[7], i925[8] )
  request.r(i925[9], i925[10], 0, i924, 'material')
  return i924
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i936 = root || request.c( 'PlaySfxOnCollision' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'Tip')
  i936.Mode = i937[2]
  request.r(i937[3], i937[4], 0, i936, 'DragInput')
  request.r(i937[5], i937[6], 0, i936, 'Source')
  i936.startVol = i937[7]
  i936.targetVol = i937[8]
  i936.duration = i937[9]
  request.r(i937[10], i937[11], 0, i936, 'Particles')
  i936.isDone = !!i937[12]
  i936.isInArea = !!i937[13]
  i936.isPlaying = !!i937[14]
  return i936
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i938 = root || request.c( 'InteractableBones' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'Tip')
  i938.MoveAmount = i939[2]
  i938.MoveSpeed = i939[3]
  i938.ShakeSpeed = i939[4]
  i938.MovementThreshold = i939[5]
  i938.MoveX = !!i939[6]
  i938.MoveY = !!i939[7]
  return i938
}

Deserializers["WaypointFollower"] = function (request, data, root) {
  var i940 = root || request.c( 'WaypointFollower' )
  var i941 = data
  var i943 = i941[0]
  var i942 = []
  for(var i = 0; i < i943.length; i += 2) {
  request.r(i943[i + 0], i943[i + 1], 2, i942, '')
  }
  i940.waypoints = i942
  i940.speed = i941[1]
  i940.rotationSpeed = i941[2]
  i940.loop = !!i941[3]
  i940.reverse = !!i941[4]
  i940.canMove = !!i941[5]
  request.r(i941[6], i941[7], 0, i940, 'movingSfx')
  return i940
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i944 = root || request.c( 'ActionOnTap' )
  var i945 = data
  i944.OnTap = request.d('UnityEngine.Events.UnityEvent', i945[0], i944.OnTap)
  i944.OnTapExtra = request.d('System.Action', i945[1], i944.OnTapExtra)
  return i944
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i946 = root || request.c( 'BD_Progress' )
  var i947 = data
  var i949 = i947[0]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('ScratchData', i949[i + 0]) );
  }
  i946.AllScratches = i948
  i946.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i947[1], i946.OnScratchComplete)
  i946.isProgDone = !!i947[2]
  i946.canCallComplete = !!i947[3]
  i946.CollectiveAppear = !!i947[4]
  i946.tipControl = !!i947[5]
  i946.progressControl = !!i947[6]
  request.r(i947[7], i947[8], 0, i946, 'thisDrag')
  i946.CompleteEvent = request.d('System.Action', i947[9], i946.CompleteEvent)
  i946.SubCompleteEvent = request.d('System.Action', i947[10], i946.SubCompleteEvent)
  return i946
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i952 = root || request.c( 'ScratchData' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'ScratchManager')
  i952.scratchLimit = i953[2]
  i952.isComplete = !!i953[3]
  return i952
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i954 = root || request.c( 'BD_CameraFollow' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'Tool')
  request.r(i955[2], i955[3], 0, i954, 'Pivot')
  i954.FOV = i955[4]
  i954.Y_L = i955[5]
  i954.Y_H = i955[6]
  i954.X_L = i955[7]
  i954.X_R = i955[8]
  i954.startDelay = i955[9]
  i954.duration = i955[10]
  return i954
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i956 = root || request.c( 'BD_ProgressHelper' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'BD_Progress')
  request.r(i957[2], i957[3], 0, i956, 'fadeSprite')
  i956.fadeIn = !!i957[4]
  return i956
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i958 = root || request.c( 'BD_SpriteChange' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'BD')
  request.r(i959[2], i959[3], 0, i958, 'SR')
  request.r(i959[4], i959[5], 0, i958, 'Default')
  request.r(i959[6], i959[7], 0, i958, 'Picked')
  i958.resetOnRelease = !!i959[8]
  return i958
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i960 = root || request.c( 'BD_AnimatorDrag' )
  var i961 = data
  request.r(i961[0], i961[1], 0, i960, 'BD')
  request.r(i961[2], i961[3], 0, i960, 'anim')
  request.r(i961[4], i961[5], 0, i960, 'Source')
  i960.Vibration = !!i961[6]
  i960.isCompletable = !!i961[7]
  i960.completionThreshold = i961[8]
  i960.OnComplete = request.d('UnityEngine.Events.UnityEvent', i961[9], i960.OnComplete)
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i963 = data
  i962.bodyType = i963[0]
  request.r(i963[1], i963[2], 0, i962, 'material')
  i962.simulated = !!i963[3]
  i962.useAutoMass = !!i963[4]
  i962.mass = i963[5]
  i962.drag = i963[6]
  i962.angularDrag = i963[7]
  i962.gravityScale = i963[8]
  i962.collisionDetectionMode = i963[9]
  i962.sleepMode = i963[10]
  i962.constraints = i963[11]
  return i962
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i964 = root || request.c( 'PlaceItem' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'thisDrag')
  request.r(i965[2], i965[3], 0, i964, 'Target')
  request.r(i965[4], i965[5], 0, i964, 'Clip')
  i964.jumpOnPlace = !!i965[6]
  i964.jumpHeight = i965[7]
  i964.jumpDuration = i965[8]
  i964.settleDuration = i965[9]
  i964.isPlaced = !!i965[10]
  i964.isInsideCollider = !!i965[11]
  i964.changeScaleOnPlace = !!i965[12]
  request.r(i965[13], i965[14], 0, i964, 'item')
  i964.newScaleOnPlace = new pc.Vec3( i965[15], i965[16], i965[17] )
  i964.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i965[18], i964.OnPlaced)
  return i964
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i966 = root || request.c( 'BD_Action' )
  var i967 = data
  i966.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i967[0], i966.OnMouseDownEvent)
  i966.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i967[1], i966.OnMouseUpEvent)
  i966.setToolLayer = !!i967[2]
  request.r(i967[3], i967[4], 0, i966, 'tool_SP')
  return i966
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i968 = root || request.c( 'SpriteButton' )
  var i969 = data
  i968.isLocked = !!i969[0]
  i968.lockMsg = i969[1]
  i968.onClick = request.d('UnityEngine.Events.UnityEvent', i969[2], i968.onClick)
  i968.onLockedClick = request.d('UnityEngine.Events.UnityEvent', i969[3], i968.onLockedClick)
  i968.isLevelBtnSfx = !!i969[4]
  request.r(i969[5], i969[6], 0, i968, 'pivot')
  i968.reductionChange = i969[7]
  i968.animationDuration = i969[8]
  return i968
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i970 = root || request.c( 'DestroyObj' )
  var i971 = data
  i970.destroyDelay = i971[0]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i973 = data
  i972.name = i973[0]
  i972.atlasId = i973[1]
  i972.mipmapCount = i973[2]
  i972.hdr = !!i973[3]
  i972.size = i973[4]
  i972.anisoLevel = i973[5]
  i972.filterMode = i973[6]
  var i975 = i973[7]
  var i974 = []
  for(var i = 0; i < i975.length; i += 4) {
    i974.push( UnityEngine.Rect.MinMaxRect(i975[i + 0], i975[i + 1], i975[i + 2], i975[i + 3]) );
  }
  i972.rects = i974
  i972.wrapU = i973[8]
  i972.wrapV = i973[9]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i979 = data
  i978.name = i979[0]
  i978.index = i979[1]
  i978.startup = !!i979[2]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i981 = data
  i980.aspect = i981[0]
  i980.orthographic = !!i981[1]
  i980.orthographicSize = i981[2]
  i980.backgroundColor = new pc.Color(i981[3], i981[4], i981[5], i981[6])
  i980.nearClipPlane = i981[7]
  i980.farClipPlane = i981[8]
  i980.fieldOfView = i981[9]
  i980.depth = i981[10]
  i980.clearFlags = i981[11]
  i980.cullingMask = i981[12]
  i980.rect = i981[13]
  request.r(i981[14], i981[15], 0, i980, 'targetTexture')
  i980.usePhysicalProperties = !!i981[16]
  i980.focalLength = i981[17]
  i980.sensorSize = new pc.Vec2( i981[18], i981[19] )
  i980.lensShift = new pc.Vec2( i981[20], i981[21] )
  i980.gateFit = i981[22]
  i980.commandBufferCount = i981[23]
  i980.cameraType = i981[24]
  i980.enabled = !!i981[25]
  return i980
}

Deserializers["CameraController"] = function (request, data, root) {
  var i982 = root || request.c( 'CameraController' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'cam')
  i982.defaultPosition = new pc.Vec3( i983[2], i983[3], i983[4] )
  i982.defaultSize = i983[5]
  i982.defaultFOV = i983[6]
  i982.defaultDuration = i983[7]
  i982.defaultEase = i983[8]
  return i982
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i984 = root || request.c( 'MusicSource' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'source')
  return i984
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i986 = root || request.c( 'UI_Manager' )
  var i987 = data
  i986.levelCompleted = !!i987[0]
  i986.isPauseActive = !!i987[1]
  i986.loadIndex = i987[2]
  request.r(i987[3], i987[4], 0, i986, 'removeAdsButton')
  request.r(i987[5], i987[6], 0, i986, 'pauseButton')
  request.r(i987[7], i987[8], 0, i986, 'Fade_Img')
  request.r(i987[9], i987[10], 0, i986, 'TopBarAnim')
  request.r(i987[11], i987[12], 0, i986, 'MainPanel')
  request.r(i987[13], i987[14], 0, i986, 'PausePanel')
  request.r(i987[15], i987[16], 0, i986, 'PausePopUp')
  request.r(i987[17], i987[18], 0, i986, 'PauseCanvasGroup')
  request.r(i987[19], i987[20], 0, i986, 'RateUsPanel')
  request.r(i987[21], i987[22], 0, i986, 'RateUsPopUp')
  request.r(i987[23], i987[24], 0, i986, 'RemoveAdsPanel')
  request.r(i987[25], i987[26], 0, i986, 'RemoveAdsPopUp')
  request.r(i987[27], i987[28], 0, i986, 'RemoveAdsCanvasGroup')
  var i989 = i987[29]
  var i988 = []
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 2, i988, '')
  }
  i986.RemoveAdsAnims = i988
  request.r(i987[30], i987[31], 0, i986, 'CompletePanel')
  request.r(i987[32], i987[33], 0, i986, 'LevelIcon')
  request.r(i987[34], i987[35], 0, i986, 'CompleteParticles')
  request.r(i987[36], i987[37], 0, i986, 'progressBar')
  request.r(i987[38], i987[39], 0, i986, 'progressText')
  request.r(i987[40], i987[41], 0, i986, 'toolIcon1')
  request.r(i987[42], i987[43], 0, i986, 'toolIcon2')
  request.r(i987[44], i987[45], 0, i986, 'toolIcon3')
  request.r(i987[46], i987[47], 0, i986, 'toolIcon4')
  request.r(i987[48], i987[49], 0, i986, 'target1')
  request.r(i987[50], i987[51], 0, i986, 'target2')
  i986.toolMoveDuration = i987[52]
  i986.currentIndex = i987[53]
  var i991 = i987[54]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i991.length; i += 2) {
  request.r(i991[i + 0], i991[i + 1], 1, i990, '')
  }
  i986.allTools = i990
  request.r(i987[55], i987[56], 0, i986, 'clockProgress')
  request.r(i987[57], i987[58], 0, i986, 'clockProgressFill')
  request.r(i987[59], i987[60], 0, i986, 'clockAudio')
  i986.moveDistance = i987[61]
  i986.animationDuration = i987[62]
  i986.greyBgChildName = i987[63]
  i986.pushOffset = i987[64]
  return i986
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i992 = root || request.c( 'GameManagerPlayable' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'endParticles')
  request.r(i993[2], i993[3], 0, i992, 'stepCompleteParticles')
  request.r(i993[4], i993[5], 0, i992, 'DefaultMat')
  request.r(i993[6], i993[7], 0, i992, 'BG_Music')
  request.r(i993[8], i993[9], 0, i992, 'restoreEffectShader')
  request.r(i993[10], i993[11], 0, i992, 'stickerEffectShader')
  i992.isComplete = !!i993[12]
  i992.isPaused = !!i993[13]
  request.r(i993[14], i993[15], 0, i992, 'currentLevel')
  i992.startLevelOnPlay = !!i993[16]
  i992.currentLevelNo = i993[17]
  return i992
}

Deserializers["AudioController"] = function (request, data, root) {
  var i994 = root || request.c( 'AudioController' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'MainMixer')
  request.r(i995[2], i995[3], 0, i994, 'UiClick')
  request.r(i995[4], i995[5], 0, i994, 'UiClickSource')
  var i997 = i995[6]
  var i996 = []
  for(var i = 0; i < i997.length; i += 2) {
  request.r(i997[i + 0], i997[i + 1], 2, i996, '')
  }
  i994.SfxSources = i996
  var i999 = i995[7]
  var i998 = []
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 2, i998, '')
  }
  i994.AllClips = i998
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1003 = data
  i1002.pivot = new pc.Vec2( i1003[0], i1003[1] )
  i1002.anchorMin = new pc.Vec2( i1003[2], i1003[3] )
  i1002.anchorMax = new pc.Vec2( i1003[4], i1003[5] )
  i1002.sizeDelta = new pc.Vec2( i1003[6], i1003[7] )
  i1002.anchoredPosition3D = new pc.Vec3( i1003[8], i1003[9], i1003[10] )
  i1002.rotation = new pc.Quat(i1003[11], i1003[12], i1003[13], i1003[14])
  i1002.scale = new pc.Vec3( i1003[15], i1003[16], i1003[17] )
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1005 = data
  i1004.planeDistance = i1005[0]
  i1004.referencePixelsPerUnit = i1005[1]
  i1004.isFallbackOverlay = !!i1005[2]
  i1004.renderMode = i1005[3]
  i1004.renderOrder = i1005[4]
  i1004.sortingLayerName = i1005[5]
  i1004.sortingOrder = i1005[6]
  i1004.scaleFactor = i1005[7]
  request.r(i1005[8], i1005[9], 0, i1004, 'worldCamera')
  i1004.overrideSorting = !!i1005[10]
  i1004.pixelPerfect = !!i1005[11]
  i1004.targetDisplay = i1005[12]
  i1004.overridePixelPerfect = !!i1005[13]
  i1004.enabled = !!i1005[14]
  return i1004
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1007 = data
  i1006.m_UiScaleMode = i1007[0]
  i1006.m_ReferencePixelsPerUnit = i1007[1]
  i1006.m_ScaleFactor = i1007[2]
  i1006.m_ReferenceResolution = new pc.Vec2( i1007[3], i1007[4] )
  i1006.m_ScreenMatchMode = i1007[5]
  i1006.m_MatchWidthOrHeight = i1007[6]
  i1006.m_PhysicalUnit = i1007[7]
  i1006.m_FallbackScreenDPI = i1007[8]
  i1006.m_DefaultSpriteDPI = i1007[9]
  i1006.m_DynamicPixelsPerUnit = i1007[10]
  i1006.m_PresetInfoIsWorld = !!i1007[11]
  return i1006
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1009 = data
  i1008.m_IgnoreReversedGraphics = !!i1009[0]
  i1008.m_BlockingObjects = i1009[1]
  i1008.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1009[2] )
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1011 = data
  i1010.cullTransparentMesh = !!i1011[0]
  return i1010
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.UI.Image' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'm_Sprite')
  i1012.m_Type = i1013[2]
  i1012.m_PreserveAspect = !!i1013[3]
  i1012.m_FillCenter = !!i1013[4]
  i1012.m_FillMethod = i1013[5]
  i1012.m_FillAmount = i1013[6]
  i1012.m_FillClockwise = !!i1013[7]
  i1012.m_FillOrigin = i1013[8]
  i1012.m_UseSpriteMesh = !!i1013[9]
  i1012.m_PixelsPerUnitMultiplier = i1013[10]
  request.r(i1013[11], i1013[12], 0, i1012, 'm_Material')
  i1012.m_Maskable = !!i1013[13]
  i1012.m_Color = new pc.Color(i1013[14], i1013[15], i1013[16], i1013[17])
  i1012.m_RaycastTarget = !!i1013[18]
  i1012.m_RaycastPadding = new pc.Vec4( i1013[19], i1013[20], i1013[21], i1013[22] )
  return i1012
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.UI.Text' )
  var i1015 = data
  i1014.m_FontData = request.d('UnityEngine.UI.FontData', i1015[0], i1014.m_FontData)
  i1014.m_Text = i1015[1]
  request.r(i1015[2], i1015[3], 0, i1014, 'm_Material')
  i1014.m_Maskable = !!i1015[4]
  i1014.m_Color = new pc.Color(i1015[5], i1015[6], i1015[7], i1015[8])
  i1014.m_RaycastTarget = !!i1015[9]
  i1014.m_RaycastPadding = new pc.Vec4( i1015[10], i1015[11], i1015[12], i1015[13] )
  return i1014
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'm_Font')
  i1016.m_FontSize = i1017[2]
  i1016.m_FontStyle = i1017[3]
  i1016.m_BestFit = !!i1017[4]
  i1016.m_MinSize = i1017[5]
  i1016.m_MaxSize = i1017[6]
  i1016.m_Alignment = i1017[7]
  i1016.m_AlignByGeometry = !!i1017[8]
  i1016.m_RichText = !!i1017[9]
  i1016.m_HorizontalOverflow = i1017[10]
  i1016.m_VerticalOverflow = i1017[11]
  i1016.m_LineSpacing = i1017[12]
  return i1016
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.UI.Button' )
  var i1019 = data
  i1018.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1019[0], i1018.m_OnClick)
  i1018.m_Navigation = request.d('UnityEngine.UI.Navigation', i1019[1], i1018.m_Navigation)
  i1018.m_Transition = i1019[2]
  i1018.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1019[3], i1018.m_Colors)
  i1018.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1019[4], i1018.m_SpriteState)
  i1018.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1019[5], i1018.m_AnimationTriggers)
  i1018.m_Interactable = !!i1019[6]
  request.r(i1019[7], i1019[8], 0, i1018, 'm_TargetGraphic')
  return i1018
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1021 = data
  i1020.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1021[0], i1020.m_PersistentCalls)
  return i1020
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1022 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1023 = data
  i1022.m_Mode = i1023[0]
  i1022.m_WrapAround = !!i1023[1]
  request.r(i1023[2], i1023[3], 0, i1022, 'm_SelectOnUp')
  request.r(i1023[4], i1023[5], 0, i1022, 'm_SelectOnDown')
  request.r(i1023[6], i1023[7], 0, i1022, 'm_SelectOnLeft')
  request.r(i1023[8], i1023[9], 0, i1022, 'm_SelectOnRight')
  return i1022
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1025 = data
  i1024.m_NormalColor = new pc.Color(i1025[0], i1025[1], i1025[2], i1025[3])
  i1024.m_HighlightedColor = new pc.Color(i1025[4], i1025[5], i1025[6], i1025[7])
  i1024.m_PressedColor = new pc.Color(i1025[8], i1025[9], i1025[10], i1025[11])
  i1024.m_SelectedColor = new pc.Color(i1025[12], i1025[13], i1025[14], i1025[15])
  i1024.m_DisabledColor = new pc.Color(i1025[16], i1025[17], i1025[18], i1025[19])
  i1024.m_ColorMultiplier = i1025[20]
  i1024.m_FadeDuration = i1025[21]
  return i1024
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'm_HighlightedSprite')
  request.r(i1027[2], i1027[3], 0, i1026, 'm_PressedSprite')
  request.r(i1027[4], i1027[5], 0, i1026, 'm_SelectedSprite')
  request.r(i1027[6], i1027[7], 0, i1026, 'm_DisabledSprite')
  return i1026
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1028 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1029 = data
  i1028.m_NormalTrigger = i1029[0]
  i1028.m_HighlightedTrigger = i1029[1]
  i1028.m_PressedTrigger = i1029[2]
  i1028.m_SelectedTrigger = i1029[3]
  i1028.m_DisabledTrigger = i1029[4]
  return i1028
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i1030 = root || request.c( 'PlayableHudRuntime' )
  var i1031 = data
  return i1030
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1033 = data
  request.r(i1033[0], i1033[1], 0, i1032, 'm_FirstSelected')
  i1032.m_sendNavigationEvents = !!i1033[2]
  i1032.m_DragThreshold = i1033[3]
  return i1032
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1034 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1035 = data
  i1034.m_HorizontalAxis = i1035[0]
  i1034.m_VerticalAxis = i1035[1]
  i1034.m_SubmitButton = i1035[2]
  i1034.m_CancelButton = i1035[3]
  i1034.m_InputActionsPerSecond = i1035[4]
  i1034.m_RepeatDelay = i1035[5]
  i1034.m_ForceModuleActive = !!i1035[6]
  i1034.m_SendPointerHoverToParent = !!i1035[7]
  return i1034
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i1036 = root || request.c( 'PlayableRouter' )
  var i1037 = data
  var i1039 = i1037[0]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 2) {
  request.r(i1039[i + 0], i1039[i + 1], 2, i1038, '')
  }
  i1036.menuObjects = i1038
  var i1041 = i1037[1]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 2) {
  request.r(i1041[i + 0], i1041[i + 1], 2, i1040, '')
  }
  i1036.gameplayObjects = i1040
  var i1043 = i1037[2]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('PlayableRouter+SubLevelSlot', i1043[i + 0]) );
  }
  i1036.subLevels = i1042
  i1036.fadeDuration = i1037[3]
  i1036.onMenuClosing = request.d('UnityEngine.Events.UnityEvent', i1037[4], i1036.onMenuClosing)
  i1036.lockedMessage = i1037[5]
  i1036.lockedTapsToCTA = i1037[6]
  return i1036
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i1046 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'button')
  request.r(i1047[2], i1047[3], 0, i1046, 'level')
  return i1046
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i1048 = root || request.c( 'ToastManager' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'toastPanel')
  request.r(i1049[2], i1049[3], 0, i1048, 'toastPopup')
  request.r(i1049[4], i1049[5], 0, i1048, 'canvasGroup')
  request.r(i1049[6], i1049[7], 0, i1048, 'toastText')
  i1048.startY = i1049[8]
  i1048.visibleY = i1049[9]
  i1048.endY = i1049[10]
  i1048.animationTime = i1049[11]
  i1048.animationTimeUp = i1049[12]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1051 = data
  i1050.m_Alpha = i1051[0]
  i1050.m_Interactable = !!i1051[1]
  i1050.m_BlocksRaycasts = !!i1051[2]
  i1050.m_IgnoreParentGroups = !!i1051[3]
  i1050.enabled = !!i1051[4]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1053 = data
  i1052.ambientIntensity = i1053[0]
  i1052.reflectionIntensity = i1053[1]
  i1052.ambientMode = i1053[2]
  i1052.ambientLight = new pc.Color(i1053[3], i1053[4], i1053[5], i1053[6])
  i1052.ambientSkyColor = new pc.Color(i1053[7], i1053[8], i1053[9], i1053[10])
  i1052.ambientGroundColor = new pc.Color(i1053[11], i1053[12], i1053[13], i1053[14])
  i1052.ambientEquatorColor = new pc.Color(i1053[15], i1053[16], i1053[17], i1053[18])
  i1052.fogColor = new pc.Color(i1053[19], i1053[20], i1053[21], i1053[22])
  i1052.fogEndDistance = i1053[23]
  i1052.fogStartDistance = i1053[24]
  i1052.fogDensity = i1053[25]
  i1052.fog = !!i1053[26]
  request.r(i1053[27], i1053[28], 0, i1052, 'skybox')
  i1052.fogMode = i1053[29]
  var i1055 = i1053[30]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1055[i + 0]) );
  }
  i1052.lightmaps = i1054
  i1052.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1053[31], i1052.lightProbes)
  i1052.lightmapsMode = i1053[32]
  i1052.mixedBakeMode = i1053[33]
  i1052.environmentLightingMode = i1053[34]
  i1052.ambientProbe = new pc.SphericalHarmonicsL2(i1053[35])
  request.r(i1053[36], i1053[37], 0, i1052, 'customReflection')
  request.r(i1053[38], i1053[39], 0, i1052, 'defaultReflection')
  i1052.defaultReflectionMode = i1053[40]
  i1052.defaultReflectionResolution = i1053[41]
  i1052.sunLightObjectId = i1053[42]
  i1052.pixelLightCount = i1053[43]
  i1052.defaultReflectionHDR = !!i1053[44]
  i1052.hasLightDataAsset = !!i1053[45]
  i1052.hasManualGenerate = !!i1053[46]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'lightmapColor')
  request.r(i1059[2], i1059[3], 0, i1058, 'lightmapDirection')
  request.r(i1059[4], i1059[5], 0, i1058, 'shadowMask')
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1060 = root || new UnityEngine.LightProbes()
  var i1061 = data
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1067 = data
  var i1069 = i1067[0]
  var i1068 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1069[i + 0]));
  }
  i1066.ShaderCompilationErrors = i1068
  i1066.name = i1067[1]
  i1066.guid = i1067[2]
  var i1071 = i1067[3]
  var i1070 = []
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.push( i1071[i + 0] );
  }
  i1066.shaderDefinedKeywords = i1070
  var i1073 = i1067[4]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1073[i + 0]) );
  }
  i1066.passes = i1072
  var i1075 = i1067[5]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1075[i + 0]) );
  }
  i1066.usePasses = i1074
  var i1077 = i1067[6]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1077[i + 0]) );
  }
  i1066.defaultParameterValues = i1076
  request.r(i1067[7], i1067[8], 0, i1066, 'unityFallbackShader')
  i1066.readDepth = !!i1067[9]
  i1066.hasDepthOnlyPass = !!i1067[10]
  i1066.isCreatedByShaderGraph = !!i1067[11]
  i1066.disableBatching = !!i1067[12]
  i1066.compiled = !!i1067[13]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1081 = data
  i1080.shaderName = i1081[0]
  i1080.errorMessage = i1081[1]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1086 = root || new pc.UnityShaderPass()
  var i1087 = data
  i1086.id = i1087[0]
  i1086.subShaderIndex = i1087[1]
  i1086.name = i1087[2]
  i1086.passType = i1087[3]
  i1086.grabPassTextureName = i1087[4]
  i1086.usePass = !!i1087[5]
  i1086.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[6], i1086.zTest)
  i1086.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[7], i1086.zWrite)
  i1086.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[8], i1086.culling)
  i1086.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1087[9], i1086.blending)
  i1086.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1087[10], i1086.alphaBlending)
  i1086.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[11], i1086.colorWriteMask)
  i1086.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[12], i1086.offsetUnits)
  i1086.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[13], i1086.offsetFactor)
  i1086.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[14], i1086.stencilRef)
  i1086.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[15], i1086.stencilReadMask)
  i1086.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1087[16], i1086.stencilWriteMask)
  i1086.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1087[17], i1086.stencilOp)
  i1086.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1087[18], i1086.stencilOpFront)
  i1086.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1087[19], i1086.stencilOpBack)
  var i1089 = i1087[20]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1089[i + 0]) );
  }
  i1086.tags = i1088
  var i1091 = i1087[21]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( i1091[i + 0] );
  }
  i1086.passDefinedKeywords = i1090
  var i1093 = i1087[22]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1093[i + 0]) );
  }
  i1086.passDefinedKeywordGroups = i1092
  var i1095 = i1087[23]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1095[i + 0]) );
  }
  i1086.variants = i1094
  var i1097 = i1087[24]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1097[i + 0]) );
  }
  i1086.excludedVariants = i1096
  i1086.hasDepthReader = !!i1087[25]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1099 = data
  i1098.val = i1099[0]
  i1098.name = i1099[1]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1101 = data
  i1100.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[0], i1100.src)
  i1100.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[1], i1100.dst)
  i1100.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[2], i1100.op)
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1103 = data
  i1102.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[0], i1102.pass)
  i1102.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[1], i1102.fail)
  i1102.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[2], i1102.zFail)
  i1102.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1103[3], i1102.comp)
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1107 = data
  i1106.name = i1107[0]
  i1106.value = i1107[1]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1111 = data
  var i1113 = i1111[0]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( i1113[i + 0] );
  }
  i1110.keywords = i1112
  i1110.hasDiscard = !!i1111[1]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1117 = data
  i1116.passId = i1117[0]
  i1116.subShaderIndex = i1117[1]
  var i1119 = i1117[2]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( i1119[i + 0] );
  }
  i1116.keywords = i1118
  i1116.vertexProgram = i1117[3]
  i1116.fragmentProgram = i1117[4]
  i1116.exportedForWebGl2 = !!i1117[5]
  i1116.readDepth = !!i1117[6]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1123 = data
  request.r(i1123[0], i1123[1], 0, i1122, 'shader')
  i1122.pass = i1123[2]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1127 = data
  i1126.name = i1127[0]
  i1126.type = i1127[1]
  i1126.value = new pc.Vec4( i1127[2], i1127[3], i1127[4], i1127[5] )
  i1126.textureValue = i1127[6]
  i1126.shaderPropertyFlag = i1127[7]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1129 = data
  i1128.name = i1129[0]
  request.r(i1129[1], i1129[2], 0, i1128, 'texture')
  i1128.aabb = i1129[3]
  i1128.vertices = i1129[4]
  i1128.triangles = i1129[5]
  i1128.textureRect = UnityEngine.Rect.MinMaxRect(i1129[6], i1129[7], i1129[8], i1129[9])
  i1128.packedRect = UnityEngine.Rect.MinMaxRect(i1129[10], i1129[11], i1129[12], i1129[13])
  i1128.border = new pc.Vec4( i1129[14], i1129[15], i1129[16], i1129[17] )
  i1128.transparency = i1129[18]
  i1128.bounds = i1129[19]
  i1128.pixelsPerUnit = i1129[20]
  i1128.textureWidth = i1129[21]
  i1128.textureHeight = i1129[22]
  i1128.nativeSize = new pc.Vec2( i1129[23], i1129[24] )
  i1128.pivot = new pc.Vec2( i1129[25], i1129[26] )
  i1128.textureRectOffset = new pc.Vec2( i1129[27], i1129[28] )
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1131 = data
  i1130.name = i1131[0]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1133 = data
  i1132.name = i1133[0]
  i1132.wrapMode = i1133[1]
  i1132.isLooping = !!i1133[2]
  i1132.length = i1133[3]
  var i1135 = i1133[4]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1135[i + 0]) );
  }
  i1132.curves = i1134
  var i1137 = i1133[5]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1137[i + 0]) );
  }
  i1132.events = i1136
  i1132.halfPrecision = !!i1133[6]
  i1132._frameRate = i1133[7]
  i1132.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1133[8], i1132.localBounds)
  i1132.hasMuscleCurves = !!i1133[9]
  var i1139 = i1133[10]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( i1139[i + 0] );
  }
  i1132.clipMuscleConstant = i1138
  i1132.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1133[11], i1132.clipBindingConstant)
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1143 = data
  i1142.path = i1143[0]
  i1142.hash = i1143[1]
  i1142.componentType = i1143[2]
  i1142.property = i1143[3]
  i1142.keys = i1143[4]
  var i1145 = i1143[5]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1145[i + 0]) );
  }
  i1142.objectReferenceKeys = i1144
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1149 = data
  i1148.time = i1149[0]
  request.r(i1149[1], i1149[2], 0, i1148, 'value')
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1153 = data
  i1152.functionName = i1153[0]
  i1152.floatParameter = i1153[1]
  i1152.intParameter = i1153[2]
  i1152.stringParameter = i1153[3]
  request.r(i1153[4], i1153[5], 0, i1152, 'objectReferenceParameter')
  i1152.time = i1153[6]
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1155 = data
  i1154.center = new pc.Vec3( i1155[0], i1155[1], i1155[2] )
  i1154.extends = new pc.Vec3( i1155[3], i1155[4], i1155[5] )
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1159 = data
  var i1161 = i1159[0]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( i1161[i + 0] );
  }
  i1158.genericBindings = i1160
  var i1163 = i1159[1]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( i1163[i + 0] );
  }
  i1158.pptrCurveMapping = i1162
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1165 = data
  i1164.name = i1165[0]
  i1164.ascent = i1165[1]
  i1164.originalLineHeight = i1165[2]
  i1164.fontSize = i1165[3]
  var i1167 = i1165[4]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1167[i + 0]) );
  }
  i1164.characterInfo = i1166
  request.r(i1165[5], i1165[6], 0, i1164, 'texture')
  i1164.originalFontSize = i1165[7]
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1171 = data
  i1170.index = i1171[0]
  i1170.advance = i1171[1]
  i1170.bearing = i1171[2]
  i1170.glyphWidth = i1171[3]
  i1170.glyphHeight = i1171[4]
  i1170.minX = i1171[5]
  i1170.maxX = i1171[6]
  i1170.minY = i1171[7]
  i1170.maxY = i1171[8]
  i1170.uvBottomLeftX = i1171[9]
  i1170.uvBottomLeftY = i1171[10]
  i1170.uvBottomRightX = i1171[11]
  i1170.uvBottomRightY = i1171[12]
  i1170.uvTopLeftX = i1171[13]
  i1170.uvTopLeftY = i1171[14]
  i1170.uvTopRightX = i1171[15]
  i1170.uvTopRightY = i1171[16]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1173 = data
  i1172.name = i1173[0]
  var i1175 = i1173[1]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1175[i + 0]) );
  }
  i1172.layers = i1174
  var i1177 = i1173[2]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1177[i + 0]) );
  }
  i1172.parameters = i1176
  i1172.animationClips = i1173[3]
  i1172.avatarUnsupported = i1173[4]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1181 = data
  i1180.name = i1181[0]
  i1180.defaultWeight = i1181[1]
  i1180.blendingMode = i1181[2]
  i1180.avatarMask = i1181[3]
  i1180.syncedLayerIndex = i1181[4]
  i1180.syncedLayerAffectsTiming = !!i1181[5]
  i1180.syncedLayers = i1181[6]
  i1180.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1181[7], i1180.stateMachine)
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1183 = data
  i1182.id = i1183[0]
  i1182.name = i1183[1]
  i1182.path = i1183[2]
  var i1185 = i1183[3]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1185[i + 0]) );
  }
  i1182.states = i1184
  var i1187 = i1183[4]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1187[i + 0]) );
  }
  i1182.machines = i1186
  var i1189 = i1183[5]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1189[i + 0]) );
  }
  i1182.entryStateTransitions = i1188
  var i1191 = i1183[6]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1191[i + 0]) );
  }
  i1182.exitStateTransitions = i1190
  var i1193 = i1183[7]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1193[i + 0]) );
  }
  i1182.anyStateTransitions = i1192
  i1182.defaultStateId = i1183[8]
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1197 = data
  i1196.id = i1197[0]
  i1196.name = i1197[1]
  i1196.cycleOffset = i1197[2]
  i1196.cycleOffsetParameter = i1197[3]
  i1196.cycleOffsetParameterActive = !!i1197[4]
  i1196.mirror = !!i1197[5]
  i1196.mirrorParameter = i1197[6]
  i1196.mirrorParameterActive = !!i1197[7]
  i1196.motionId = i1197[8]
  i1196.nameHash = i1197[9]
  i1196.fullPathHash = i1197[10]
  i1196.speed = i1197[11]
  i1196.speedParameter = i1197[12]
  i1196.speedParameterActive = !!i1197[13]
  i1196.tag = i1197[14]
  i1196.tagHash = i1197[15]
  i1196.writeDefaultValues = !!i1197[16]
  var i1199 = i1197[17]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 2) {
  request.r(i1199[i + 0], i1199[i + 1], 2, i1198, '')
  }
  i1196.behaviours = i1198
  var i1201 = i1197[18]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1201[i + 0]) );
  }
  i1196.transitions = i1200
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1207 = data
  i1206.fullPath = i1207[0]
  i1206.canTransitionToSelf = !!i1207[1]
  i1206.duration = i1207[2]
  i1206.exitTime = i1207[3]
  i1206.hasExitTime = !!i1207[4]
  i1206.hasFixedDuration = !!i1207[5]
  i1206.interruptionSource = i1207[6]
  i1206.offset = i1207[7]
  i1206.orderedInterruption = !!i1207[8]
  i1206.destinationStateId = i1207[9]
  i1206.isExit = !!i1207[10]
  i1206.mute = !!i1207[11]
  i1206.solo = !!i1207[12]
  var i1209 = i1207[13]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1209[i + 0]) );
  }
  i1206.conditions = i1208
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1215 = data
  i1214.destinationStateId = i1215[0]
  i1214.isExit = !!i1215[1]
  i1214.mute = !!i1215[2]
  i1214.solo = !!i1215[3]
  var i1217 = i1215[4]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1217[i + 0]) );
  }
  i1214.conditions = i1216
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1221 = data
  i1220.mode = i1221[0]
  i1220.parameter = i1221[1]
  i1220.threshold = i1221[2]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1225 = data
  i1224.defaultBool = !!i1225[0]
  i1224.defaultFloat = i1225[1]
  i1224.defaultInt = i1225[2]
  i1224.name = i1225[3]
  i1224.nameHash = i1225[4]
  i1224.type = i1225[5]
  return i1224
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1226 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1227 = data
  i1226.useSafeMode = !!i1227[0]
  i1226.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1227[1], i1226.safeModeOptions)
  i1226.timeScale = i1227[2]
  i1226.unscaledTimeScale = i1227[3]
  i1226.useSmoothDeltaTime = !!i1227[4]
  i1226.maxSmoothUnscaledTime = i1227[5]
  i1226.rewindCallbackMode = i1227[6]
  i1226.showUnityEditorReport = !!i1227[7]
  i1226.logBehaviour = i1227[8]
  i1226.drawGizmos = !!i1227[9]
  i1226.defaultRecyclable = !!i1227[10]
  i1226.defaultAutoPlay = i1227[11]
  i1226.defaultUpdateType = i1227[12]
  i1226.defaultTimeScaleIndependent = !!i1227[13]
  i1226.defaultEaseType = i1227[14]
  i1226.defaultEaseOvershootOrAmplitude = i1227[15]
  i1226.defaultEasePeriod = i1227[16]
  i1226.defaultAutoKill = !!i1227[17]
  i1226.defaultLoopType = i1227[18]
  i1226.debugMode = !!i1227[19]
  i1226.debugStoreTargetId = !!i1227[20]
  i1226.showPreviewPanel = !!i1227[21]
  i1226.storeSettingsLocation = i1227[22]
  i1226.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1227[23], i1226.modules)
  i1226.createASMDEF = !!i1227[24]
  i1226.showPlayingTweens = !!i1227[25]
  i1226.showPausedTweens = !!i1227[26]
  return i1226
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1228 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1229 = data
  i1228.logBehaviour = i1229[0]
  i1228.nestedTweenFailureBehaviour = i1229[1]
  return i1228
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1230 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1231 = data
  i1230.showPanel = !!i1231[0]
  i1230.audioEnabled = !!i1231[1]
  i1230.physicsEnabled = !!i1231[2]
  i1230.physics2DEnabled = !!i1231[3]
  i1230.spriteEnabled = !!i1231[4]
  i1230.uiEnabled = !!i1231[5]
  i1230.textMeshProEnabled = !!i1231[6]
  i1230.tk2DEnabled = !!i1231[7]
  i1230.deAudioEnabled = !!i1231[8]
  i1230.deUnityExtendedEnabled = !!i1231[9]
  i1230.epoOutlineEnabled = !!i1231[10]
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1233 = data
  var i1235 = i1233[0]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1235[i + 0]) );
  }
  i1232.files = i1234
  i1232.componentToPrefabIds = i1233[1]
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1239 = data
  i1238.path = i1239[0]
  request.r(i1239[1], i1239[2], 0, i1238, 'unityObject')
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1241 = data
  var i1243 = i1241[0]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1243[i + 0]) );
  }
  i1240.scriptsExecutionOrder = i1242
  var i1245 = i1241[1]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1245[i + 0]) );
  }
  i1240.sortingLayers = i1244
  var i1247 = i1241[2]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1247[i + 0]) );
  }
  i1240.cullingLayers = i1246
  i1240.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1241[3], i1240.timeSettings)
  i1240.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1241[4], i1240.physicsSettings)
  i1240.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1241[5], i1240.physics2DSettings)
  i1240.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1241[6], i1240.qualitySettings)
  i1240.enableRealtimeShadows = !!i1241[7]
  i1240.enableAutoInstancing = !!i1241[8]
  i1240.enableStaticBatching = !!i1241[9]
  i1240.enableDynamicBatching = !!i1241[10]
  i1240.usePreservativeDynamicBatching = !!i1241[11]
  i1240.lightmapEncodingQuality = i1241[12]
  i1240.desiredColorSpace = i1241[13]
  var i1249 = i1241[14]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( i1249[i + 0] );
  }
  i1240.allTags = i1248
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1253 = data
  i1252.name = i1253[0]
  i1252.value = i1253[1]
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1257 = data
  i1256.id = i1257[0]
  i1256.name = i1257[1]
  i1256.value = i1257[2]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1261 = data
  i1260.id = i1261[0]
  i1260.name = i1261[1]
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1263 = data
  i1262.fixedDeltaTime = i1263[0]
  i1262.maximumDeltaTime = i1263[1]
  i1262.timeScale = i1263[2]
  i1262.maximumParticleTimestep = i1263[3]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1265 = data
  i1264.gravity = new pc.Vec3( i1265[0], i1265[1], i1265[2] )
  i1264.defaultSolverIterations = i1265[3]
  i1264.bounceThreshold = i1265[4]
  i1264.autoSyncTransforms = !!i1265[5]
  i1264.autoSimulation = !!i1265[6]
  var i1267 = i1265[7]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1267[i + 0]) );
  }
  i1264.collisionMatrix = i1266
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1271 = data
  i1270.enabled = !!i1271[0]
  i1270.layerId = i1271[1]
  i1270.otherLayerId = i1271[2]
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1273 = data
  request.r(i1273[0], i1273[1], 0, i1272, 'material')
  i1272.gravity = new pc.Vec2( i1273[2], i1273[3] )
  i1272.positionIterations = i1273[4]
  i1272.velocityIterations = i1273[5]
  i1272.velocityThreshold = i1273[6]
  i1272.maxLinearCorrection = i1273[7]
  i1272.maxAngularCorrection = i1273[8]
  i1272.maxTranslationSpeed = i1273[9]
  i1272.maxRotationSpeed = i1273[10]
  i1272.baumgarteScale = i1273[11]
  i1272.baumgarteTOIScale = i1273[12]
  i1272.timeToSleep = i1273[13]
  i1272.linearSleepTolerance = i1273[14]
  i1272.angularSleepTolerance = i1273[15]
  i1272.defaultContactOffset = i1273[16]
  i1272.autoSimulation = !!i1273[17]
  i1272.queriesHitTriggers = !!i1273[18]
  i1272.queriesStartInColliders = !!i1273[19]
  i1272.callbacksOnDisable = !!i1273[20]
  i1272.reuseCollisionCallbacks = !!i1273[21]
  i1272.autoSyncTransforms = !!i1273[22]
  var i1275 = i1273[23]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1275[i + 0]) );
  }
  i1272.collisionMatrix = i1274
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1279 = data
  i1278.enabled = !!i1279[0]
  i1278.layerId = i1279[1]
  i1278.otherLayerId = i1279[2]
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1281 = data
  var i1283 = i1281[0]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1283[i + 0]) );
  }
  i1280.qualityLevels = i1282
  var i1285 = i1281[1]
  var i1284 = []
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.push( i1285[i + 0] );
  }
  i1280.names = i1284
  i1280.shadows = i1281[2]
  i1280.anisotropicFiltering = i1281[3]
  i1280.antiAliasing = i1281[4]
  i1280.lodBias = i1281[5]
  i1280.shadowCascades = i1281[6]
  i1280.shadowDistance = i1281[7]
  i1280.shadowmaskMode = i1281[8]
  i1280.shadowProjection = i1281[9]
  i1280.shadowResolution = i1281[10]
  i1280.softParticles = !!i1281[11]
  i1280.softVegetation = !!i1281[12]
  i1280.activeColorSpace = i1281[13]
  i1280.desiredColorSpace = i1281[14]
  i1280.masterTextureLimit = i1281[15]
  i1280.maxQueuedFrames = i1281[16]
  i1280.particleRaycastBudget = i1281[17]
  i1280.pixelLightCount = i1281[18]
  i1280.realtimeReflectionProbes = !!i1281[19]
  i1280.shadowCascade2Split = i1281[20]
  i1280.shadowCascade4Split = new pc.Vec3( i1281[21], i1281[22], i1281[23] )
  i1280.streamingMipmapsActive = !!i1281[24]
  i1280.vSyncCount = i1281[25]
  i1280.asyncUploadBufferSize = i1281[26]
  i1280.asyncUploadTimeSlice = i1281[27]
  i1280.billboardsFaceCameraPosition = !!i1281[28]
  i1280.shadowNearPlaneOffset = i1281[29]
  i1280.streamingMipmapsMemoryBudget = i1281[30]
  i1280.maximumLODLevel = i1281[31]
  i1280.streamingMipmapsAddAllCameras = !!i1281[32]
  i1280.streamingMipmapsMaxLevelReduction = i1281[33]
  i1280.streamingMipmapsRenderersPerFrame = i1281[34]
  i1280.resolutionScalingFixedDPIFactor = i1281[35]
  i1280.streamingMipmapsMaxFileIORequests = i1281[36]
  i1280.currentQualityLevel = i1281[37]
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i1289 = data
  var i1291 = i1289[0]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i1291[i + 0]) );
  }
  i1288.groups = i1290
  var i1293 = i1289[1]
  var i1292 = []
  for(var i = 0; i < i1293.length; i += 1) {
    i1292.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i1293[i + 0]) );
  }
  i1288.snapshots = i1292
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i1297 = data
  i1296.id = i1297[0]
  i1296.childGroupIds = i1297[1]
  i1296.name = i1297[2]
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i1301 = data
  i1300.id = i1301[0]
  var i1303 = i1301[1]
  var i1302 = []
  for(var i = 0; i < i1303.length; i += 1) {
    i1302.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i1303[i + 0]) );
  }
  i1300.parameters = i1302
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i1307 = data
  i1306.name = i1307[0]
  i1306.value = i1307[1]
  return i1306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1311 = data
  i1310.weight = i1311[0]
  i1310.vertices = i1311[1]
  i1310.normals = i1311[2]
  i1310.tangents = i1311[3]
  return i1310
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"positions":0,"positionCount":1,"time":2,"startWidth":3,"endWidth":4,"widthMultiplier":5,"autodestruct":6,"emitting":7,"numCornerVertices":8,"numCapVertices":9,"minVertexDistance":10,"colorGradient":11,"startColor":12,"endColor":16,"generateLightingData":20,"textureMode":21,"alignment":22,"widthCurve":23,"enabled":24,"sharedMaterial":25,"sharedMaterials":27,"receiveShadows":28,"shadowCastingMode":29,"sortingLayerID":30,"sortingOrder":31,"lightmapIndex":32,"lightmapSceneIndex":33,"lightmapScaleOffset":34,"lightProbeUsage":38,"reflectionProbeUsage":39},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[84],"85":[50],"86":[87],"88":[87],"89":[87],"90":[87],"91":[87],"92":[87],"93":[87],"94":[45],"95":[45],"96":[45],"97":[45],"98":[45],"99":[45],"100":[45],"101":[45],"102":[45],"103":[45],"104":[45],"105":[45],"106":[45],"107":[50],"108":[109],"110":[111],"112":[111],"61":[55],"113":[114],"115":[9],"31":[28],"116":[9],"117":[118],"119":[118],"35":[13],"48":[28],"120":[9],"121":[10],"27":[9],"122":[55],"123":[55],"64":[61],"56":[65,55],"124":[55],"63":[61],"125":[55],"126":[55],"127":[55],"128":[55],"129":[55],"130":[55],"131":[55],"132":[55],"133":[55],"134":[65,55],"135":[55],"136":[55],"137":[55],"138":[55],"57":[65,55],"139":[55],"140":[69],"141":[69],"70":[69],"142":[69],"143":[50],"144":[50]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level1_Hair_Playable_Step34","UnityEngine.SpriteRenderer","BasicDrag","OutlinePulse","UnityEngine.GameObject","DG.Tweening.DOTweenAnimation","UnityEngine.Sprite","UnityEngine.AudioClip","BD_CameraFollow","BD_Progress","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.TrailRenderer","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.BoxCollider2D","BD_Clamp","BD_ItemPick","BD_Sticky","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.SpriteMask","PlayTweenOnHit","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","InteractableBones","WaypointFollower","ActionOnTap","UnityEditor.Audio.AudioMixerGroupController","BD_ProgressHelper","BD_SpriteChange","BD_AnimatorDrag","UnityEngine.Rigidbody2D","PlaceItem","BD_Action","SpriteButton","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableRouter","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Fold","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","RadialCircleFill","TeaseTapCTA","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "10/28/2026 09:44:32";

Deserializers.lunaDaysRunning = "27.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "MakeoverFashionASMR_Lvl1_1_Step_3to4_25Nov2026";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1780";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4291";

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

Deserializers.buildID = "6c2a4998-6e77-4952-8f81-7bfcafb141d1";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

