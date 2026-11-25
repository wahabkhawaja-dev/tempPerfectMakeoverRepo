var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.JointSpring' )
  var i631 = data
  i630.spring = i631[0]
  i630.damper = i631[1]
  i630.targetPosition = i631[2]
  return i630
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.JointMotor' )
  var i633 = data
  i632.m_TargetVelocity = i633[0]
  i632.m_Force = i633[1]
  i632.m_FreeSpin = i633[2]
  return i632
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.JointLimits' )
  var i635 = data
  i634.m_Min = i635[0]
  i634.m_Max = i635[1]
  i634.m_Bounciness = i635[2]
  i634.m_BounceMinVelocity = i635[3]
  i634.m_ContactDistance = i635[4]
  i634.minBounce = i635[5]
  i634.maxBounce = i635[6]
  return i634
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.JointDrive' )
  var i637 = data
  i636.m_PositionSpring = i637[0]
  i636.m_PositionDamper = i637[1]
  i636.m_MaximumForce = i637[2]
  i636.m_UseAcceleration = i637[3]
  return i636
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i639 = data
  i638.m_Spring = i639[0]
  i638.m_Damper = i639[1]
  return i638
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i641 = data
  i640.m_Limit = i641[0]
  i640.m_Bounciness = i641[1]
  i640.m_ContactDistance = i641[2]
  return i640
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i643 = data
  i642.m_ExtremumSlip = i643[0]
  i642.m_ExtremumValue = i643[1]
  i642.m_AsymptoteSlip = i643[2]
  i642.m_AsymptoteValue = i643[3]
  i642.m_Stiffness = i643[4]
  return i642
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i645 = data
  i644.m_LowerAngle = i645[0]
  i644.m_UpperAngle = i645[1]
  return i644
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i647 = data
  i646.m_MotorSpeed = i647[0]
  i646.m_MaximumMotorTorque = i647[1]
  return i646
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i649 = data
  i648.m_DampingRatio = i649[0]
  i648.m_Frequency = i649[1]
  i648.m_Angle = i649[2]
  return i648
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i651 = data
  i650.m_LowerTranslation = i651[0]
  i650.m_UpperTranslation = i651[1]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i652 = root || new pc.UnityMaterial()
  var i653 = data
  i652.name = i653[0]
  request.r(i653[1], i653[2], 0, i652, 'shader')
  i652.renderQueue = i653[3]
  i652.enableInstancing = !!i653[4]
  var i655 = i653[5]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i655[i + 0]) );
  }
  i652.floatParameters = i654
  var i657 = i653[6]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i657[i + 0]) );
  }
  i652.colorParameters = i656
  var i659 = i653[7]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i659[i + 0]) );
  }
  i652.vectorParameters = i658
  var i661 = i653[8]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i661[i + 0]) );
  }
  i652.textureParameters = i660
  var i663 = i653[9]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i663[i + 0]) );
  }
  i652.materialFlags = i662
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i667 = data
  i666.name = i667[0]
  i666.value = i667[1]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i671 = data
  i670.name = i671[0]
  i670.value = new pc.Color(i671[1], i671[2], i671[3], i671[4])
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i675 = data
  i674.name = i675[0]
  i674.value = new pc.Vec4( i675[1], i675[2], i675[3], i675[4] )
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i679 = data
  i678.name = i679[0]
  request.r(i679[1], i679[2], 0, i678, 'value')
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i683 = data
  i682.name = i683[0]
  i682.enabled = !!i683[1]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i685 = data
  i684.name = i685[0]
  i684.width = i685[1]
  i684.height = i685[2]
  i684.mipmapCount = i685[3]
  i684.anisoLevel = i685[4]
  i684.filterMode = i685[5]
  i684.hdr = !!i685[6]
  i684.format = i685[7]
  i684.wrapMode = i685[8]
  i684.alphaIsTransparency = !!i685[9]
  i684.alphaSource = i685[10]
  i684.graphicsFormat = i685[11]
  i684.sRGBTexture = !!i685[12]
  i684.desiredColorSpace = i685[13]
  i684.wrapU = i685[14]
  i684.wrapV = i685[15]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i687 = data
  i686.name = i687[0]
  i686.halfPrecision = !!i687[1]
  i686.useSimplification = !!i687[2]
  i686.useUInt32IndexFormat = !!i687[3]
  i686.vertexCount = i687[4]
  i686.aabb = i687[5]
  var i689 = i687[6]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( !!i689[i + 0] );
  }
  i686.streams = i688
  i686.vertices = i687[7]
  var i691 = i687[8]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i691[i + 0]) );
  }
  i686.subMeshes = i690
  var i693 = i687[9]
  var i692 = []
  for(var i = 0; i < i693.length; i += 16) {
    i692.push( new pc.Mat4().setData(i693[i + 0], i693[i + 1], i693[i + 2], i693[i + 3],  i693[i + 4], i693[i + 5], i693[i + 6], i693[i + 7],  i693[i + 8], i693[i + 9], i693[i + 10], i693[i + 11],  i693[i + 12], i693[i + 13], i693[i + 14], i693[i + 15]) );
  }
  i686.bindposes = i692
  var i695 = i687[10]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i695[i + 0]) );
  }
  i686.blendShapes = i694
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i701 = data
  i700.triangles = i701[0]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i707 = data
  i706.name = i707[0]
  var i709 = i707[1]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i709[i + 0]) );
  }
  i706.frames = i708
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i711 = data
  i710.position = new pc.Vec3( i711[0], i711[1], i711[2] )
  i710.scale = new pc.Vec3( i711[3], i711[4], i711[5] )
  i710.rotation = new pc.Quat(i711[6], i711[7], i711[8], i711[9])
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i713 = data
  i712.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i713[0], i712.main)
  i712.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i713[1], i712.colorBySpeed)
  i712.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i713[2], i712.colorOverLifetime)
  i712.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i713[3], i712.emission)
  i712.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i713[4], i712.rotationBySpeed)
  i712.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i713[5], i712.rotationOverLifetime)
  i712.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i713[6], i712.shape)
  i712.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i713[7], i712.sizeBySpeed)
  i712.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i713[8], i712.sizeOverLifetime)
  i712.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i713[9], i712.textureSheetAnimation)
  i712.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i713[10], i712.velocityOverLifetime)
  i712.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i713[11], i712.noise)
  i712.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i713[12], i712.inheritVelocity)
  i712.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i713[13], i712.forceOverLifetime)
  i712.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i713[14], i712.limitVelocityOverLifetime)
  i712.useAutoRandomSeed = !!i713[15]
  i712.randomSeed = i713[16]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i714 = root || new pc.ParticleSystemMain()
  var i715 = data
  i714.duration = i715[0]
  i714.loop = !!i715[1]
  i714.prewarm = !!i715[2]
  i714.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[3], i714.startDelay)
  i714.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[4], i714.startLifetime)
  i714.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[5], i714.startSpeed)
  i714.startSize3D = !!i715[6]
  i714.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[7], i714.startSizeX)
  i714.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[8], i714.startSizeY)
  i714.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[9], i714.startSizeZ)
  i714.startRotation3D = !!i715[10]
  i714.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[11], i714.startRotationX)
  i714.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[12], i714.startRotationY)
  i714.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[13], i714.startRotationZ)
  i714.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i715[14], i714.startColor)
  i714.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[15], i714.gravityModifier)
  i714.simulationSpace = i715[16]
  request.r(i715[17], i715[18], 0, i714, 'customSimulationSpace')
  i714.simulationSpeed = i715[19]
  i714.useUnscaledTime = !!i715[20]
  i714.scalingMode = i715[21]
  i714.playOnAwake = !!i715[22]
  i714.maxParticles = i715[23]
  i714.emitterVelocityMode = i715[24]
  i714.stopAction = i715[25]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i716 = root || new pc.MinMaxCurve()
  var i717 = data
  i716.mode = i717[0]
  i716.curveMin = new pc.AnimationCurve( { keys_flow: i717[1] } )
  i716.curveMax = new pc.AnimationCurve( { keys_flow: i717[2] } )
  i716.curveMultiplier = i717[3]
  i716.constantMin = i717[4]
  i716.constantMax = i717[5]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i718 = root || new pc.MinMaxGradient()
  var i719 = data
  i718.mode = i719[0]
  i718.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i719[1], i718.gradientMin)
  i718.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i719[2], i718.gradientMax)
  i718.colorMin = new pc.Color(i719[3], i719[4], i719[5], i719[6])
  i718.colorMax = new pc.Color(i719[7], i719[8], i719[9], i719[10])
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i721 = data
  i720.mode = i721[0]
  var i723 = i721[1]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i723[i + 0]) );
  }
  i720.colorKeys = i722
  var i725 = i721[2]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i725[i + 0]) );
  }
  i720.alphaKeys = i724
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i726 = root || new pc.ParticleSystemColorBySpeed()
  var i727 = data
  i726.enabled = !!i727[0]
  i726.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i727[1], i726.color)
  i726.range = new pc.Vec2( i727[2], i727[3] )
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i731 = data
  i730.color = new pc.Color(i731[0], i731[1], i731[2], i731[3])
  i730.time = i731[4]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i735 = data
  i734.alpha = i735[0]
  i734.time = i735[1]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i736 = root || new pc.ParticleSystemColorOverLifetime()
  var i737 = data
  i736.enabled = !!i737[0]
  i736.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i737[1], i736.color)
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i738 = root || new pc.ParticleSystemEmitter()
  var i739 = data
  i738.enabled = !!i739[0]
  i738.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[1], i738.rateOverTime)
  i738.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[2], i738.rateOverDistance)
  var i741 = i739[3]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i741[i + 0]) );
  }
  i738.bursts = i740
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i744 = root || new pc.ParticleSystemBurst()
  var i745 = data
  i744.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[0], i744.count)
  i744.cycleCount = i745[1]
  i744.minCount = i745[2]
  i744.maxCount = i745[3]
  i744.repeatInterval = i745[4]
  i744.time = i745[5]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemRotationBySpeed()
  var i747 = data
  i746.enabled = !!i747[0]
  i746.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[1], i746.x)
  i746.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[2], i746.y)
  i746.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[3], i746.z)
  i746.separateAxes = !!i747[4]
  i746.range = new pc.Vec2( i747[5], i747[6] )
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i748 = root || new pc.ParticleSystemRotationOverLifetime()
  var i749 = data
  i748.enabled = !!i749[0]
  i748.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[1], i748.x)
  i748.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[2], i748.y)
  i748.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[3], i748.z)
  i748.separateAxes = !!i749[4]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i750 = root || new pc.ParticleSystemShape()
  var i751 = data
  i750.enabled = !!i751[0]
  i750.shapeType = i751[1]
  i750.randomDirectionAmount = i751[2]
  i750.sphericalDirectionAmount = i751[3]
  i750.randomPositionAmount = i751[4]
  i750.alignToDirection = !!i751[5]
  i750.radius = i751[6]
  i750.radiusMode = i751[7]
  i750.radiusSpread = i751[8]
  i750.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[9], i750.radiusSpeed)
  i750.radiusThickness = i751[10]
  i750.angle = i751[11]
  i750.length = i751[12]
  i750.boxThickness = new pc.Vec3( i751[13], i751[14], i751[15] )
  i750.meshShapeType = i751[16]
  request.r(i751[17], i751[18], 0, i750, 'mesh')
  request.r(i751[19], i751[20], 0, i750, 'meshRenderer')
  request.r(i751[21], i751[22], 0, i750, 'skinnedMeshRenderer')
  i750.useMeshMaterialIndex = !!i751[23]
  i750.meshMaterialIndex = i751[24]
  i750.useMeshColors = !!i751[25]
  i750.normalOffset = i751[26]
  i750.arc = i751[27]
  i750.arcMode = i751[28]
  i750.arcSpread = i751[29]
  i750.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[30], i750.arcSpeed)
  i750.donutRadius = i751[31]
  i750.position = new pc.Vec3( i751[32], i751[33], i751[34] )
  i750.rotation = new pc.Vec3( i751[35], i751[36], i751[37] )
  i750.scale = new pc.Vec3( i751[38], i751[39], i751[40] )
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemSizeBySpeed()
  var i753 = data
  i752.enabled = !!i753[0]
  i752.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[1], i752.x)
  i752.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[2], i752.y)
  i752.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[3], i752.z)
  i752.separateAxes = !!i753[4]
  i752.range = new pc.Vec2( i753[5], i753[6] )
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemSizeOverLifetime()
  var i755 = data
  i754.enabled = !!i755[0]
  i754.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[1], i754.x)
  i754.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[2], i754.y)
  i754.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[3], i754.z)
  i754.separateAxes = !!i755[4]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.mode = i757[1]
  i756.animation = i757[2]
  i756.numTilesX = i757[3]
  i756.numTilesY = i757[4]
  i756.useRandomRow = !!i757[5]
  i756.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[6], i756.frameOverTime)
  i756.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[7], i756.startFrame)
  i756.cycleCount = i757[8]
  i756.rowIndex = i757[9]
  i756.flipU = i757[10]
  i756.flipV = i757[11]
  i756.spriteCount = i757[12]
  var i759 = i757[13]
  var i758 = []
  for(var i = 0; i < i759.length; i += 2) {
  request.r(i759[i + 0], i759[i + 1], 2, i758, '')
  }
  i756.sprites = i758
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i763 = data
  i762.enabled = !!i763[0]
  i762.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[1], i762.x)
  i762.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[2], i762.y)
  i762.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[3], i762.z)
  i762.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[4], i762.radial)
  i762.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[5], i762.speedModifier)
  i762.space = i763[6]
  i762.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[7], i762.orbitalX)
  i762.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[8], i762.orbitalY)
  i762.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[9], i762.orbitalZ)
  i762.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[10], i762.orbitalOffsetX)
  i762.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[11], i762.orbitalOffsetY)
  i762.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[12], i762.orbitalOffsetZ)
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemNoise()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.separateAxes = !!i765[1]
  i764.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[2], i764.strengthX)
  i764.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[3], i764.strengthY)
  i764.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[4], i764.strengthZ)
  i764.frequency = i765[5]
  i764.damping = !!i765[6]
  i764.octaveCount = i765[7]
  i764.octaveMultiplier = i765[8]
  i764.octaveScale = i765[9]
  i764.quality = i765[10]
  i764.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[11], i764.scrollSpeed)
  i764.scrollSpeedMultiplier = i765[12]
  i764.remapEnabled = !!i765[13]
  i764.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[14], i764.remapX)
  i764.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[15], i764.remapY)
  i764.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[16], i764.remapZ)
  i764.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[17], i764.positionAmount)
  i764.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[18], i764.rotationAmount)
  i764.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[19], i764.sizeAmount)
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemInheritVelocity()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.mode = i767[1]
  i766.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[2], i766.curve)
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemForceOverLifetime()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[1], i768.x)
  i768.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[2], i768.y)
  i768.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[3], i768.z)
  i768.space = i769[4]
  i768.randomized = !!i769[5]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[1], i770.limit)
  i770.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[2], i770.limitX)
  i770.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[3], i770.limitY)
  i770.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[4], i770.limitZ)
  i770.dampen = i771[5]
  i770.separateAxes = !!i771[6]
  i770.space = i771[7]
  i770.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i771[8], i770.drag)
  i770.multiplyDragByParticleSize = !!i771[9]
  i770.multiplyDragByParticleVelocity = !!i771[10]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'mesh')
  i772.meshCount = i773[2]
  i772.activeVertexStreamsCount = i773[3]
  i772.alignment = i773[4]
  i772.renderMode = i773[5]
  i772.sortMode = i773[6]
  i772.lengthScale = i773[7]
  i772.velocityScale = i773[8]
  i772.cameraVelocityScale = i773[9]
  i772.normalDirection = i773[10]
  i772.sortingFudge = i773[11]
  i772.minParticleSize = i773[12]
  i772.maxParticleSize = i773[13]
  i772.pivot = new pc.Vec3( i773[14], i773[15], i773[16] )
  request.r(i773[17], i773[18], 0, i772, 'trailMaterial')
  i772.applyActiveColorSpace = !!i773[19]
  i772.enabled = !!i773[20]
  request.r(i773[21], i773[22], 0, i772, 'sharedMaterial')
  var i775 = i773[23]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i772.sharedMaterials = i774
  i772.receiveShadows = !!i773[24]
  i772.shadowCastingMode = i773[25]
  i772.sortingLayerID = i773[26]
  i772.sortingOrder = i773[27]
  i772.lightmapIndex = i773[28]
  i772.lightmapSceneIndex = i773[29]
  i772.lightmapScaleOffset = new pc.Vec4( i773[30], i773[31], i773[32], i773[33] )
  i772.lightProbeUsage = i773[34]
  i772.reflectionProbeUsage = i773[35]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i779 = data
  i778.name = i779[0]
  i778.tagId = i779[1]
  i778.enabled = !!i779[2]
  i778.isStatic = !!i779[3]
  i778.layer = i779[4]
  return i778
}

Deserializers["Level1_Cloth_Playable_PlayableStep4"] = function (request, data, root) {
  var i780 = root || request.c( 'Level1_Cloth_Playable_PlayableStep4' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'WashingView')
  request.r(i781[2], i781[3], 0, i780, 'WashingTools')
  request.r(i781[4], i781[5], 0, i780, 'DressingView')
  request.r(i781[6], i781[7], 0, i780, 'DressingTools')
  i780.ZoomStep1 = request.d('ZoomPos', i781[8], i780.ZoomStep1)
  request.r(i781[9], i781[10], 0, i780, 'ToolStep1')
  request.r(i781[11], i781[12], 0, i780, 'Basket_Cloth')
  request.r(i781[13], i781[14], 0, i780, 'clothInside')
  request.r(i781[15], i781[16], 0, i780, 'clothRound')
  request.r(i781[17], i781[18], 0, i780, 'machineDoor')
  request.r(i781[19], i781[20], 0, i780, 'machineGlass')
  i780.ZoomStep2 = request.d('ZoomPos', i781[21], i780.ZoomStep2)
  i780.ZoomStep2b = request.d('ZoomPos', i781[22], i780.ZoomStep2b)
  request.r(i781[23], i781[24], 0, i780, 'ToolStep2')
  request.r(i781[25], i781[26], 0, i780, 'ToolStep2CamFollow')
  request.r(i781[27], i781[28], 0, i780, 'drawerObj')
  request.r(i781[29], i781[30], 0, i780, 'surfObj')
  request.r(i781[31], i781[32], 0, i780, 'surfPackTop')
  request.r(i781[33], i781[34], 0, i780, 'handStep2')
  request.r(i781[35], i781[36], 0, i780, 'surfController')
  request.r(i781[37], i781[38], 0, i780, 'clothsInside')
  request.r(i781[39], i781[40], 0, i780, 'clothsInsideGlass')
  request.r(i781[41], i781[42], 0, i780, 'clothsStaticClean')
  request.r(i781[43], i781[44], 0, i780, 'wetCloths')
  request.r(i781[45], i781[46], 0, i780, 'clothCleanInside')
  request.r(i781[47], i781[48], 0, i780, 'clothCleanInsideAnim')
  request.r(i781[49], i781[50], 0, i780, 'waterWave')
  request.r(i781[51], i781[52], 0, i780, 'clothCleanInside2')
  request.r(i781[53], i781[54], 0, i780, 'clothCleanInside2Cam')
  request.r(i781[55], i781[56], 0, i780, 'clothBasketTarget')
  request.r(i781[57], i781[58], 0, i780, 'clothBasketTarget2')
  request.r(i781[59], i781[60], 0, i780, 'waterSplash_Vfx')
  request.r(i781[61], i781[62], 0, i780, 'countDownTimerText')
  i780.countDown = i781[63]
  request.r(i781[64], i781[65], 0, i780, 'machineTimer')
  request.r(i781[66], i781[67], 0, i780, 'machineTimerIndication')
  request.r(i781[68], i781[69], 0, i780, 'darazOpenSfx')
  request.r(i781[70], i781[71], 0, i780, 'darazCloseSfx')
  request.r(i781[72], i781[73], 0, i780, 'doorOpenSfx')
  request.r(i781[74], i781[75], 0, i780, 'machineStartSfx')
  request.r(i781[76], i781[77], 0, i780, 'machineFinishSfx')
  request.r(i781[78], i781[79], 0, i780, 'waterDrainSfx')
  i780.ZoomStep3a = request.d('ZoomPos', i781[80], i780.ZoomStep3a)
  request.r(i781[81], i781[82], 0, i780, 'ToolStep3a')
  request.r(i781[83], i781[84], 0, i780, 'ToolStep3aRend')
  request.r(i781[85], i781[86], 0, i780, 'dressingBasket')
  request.r(i781[87], i781[88], 0, i780, 'dummyFullParent')
  request.r(i781[89], i781[90], 0, i780, 'DressParent')
  i780.ZoomStep3 = request.d('ZoomPos', i781[91], i780.ZoomStep3)
  request.r(i781[92], i781[93], 0, i780, 'ToolStep3')
  request.r(i781[94], i781[95], 0, i780, 'tornPatch')
  request.r(i781[96], i781[97], 0, i780, 'patchCompleted')
  request.r(i781[98], i781[99], 0, i780, 'patchOutline')
  i780.ZoomStep4 = request.d('ZoomPos', i781[100], i780.ZoomStep4)
  request.r(i781[101], i781[102], 0, i780, 'ToolStep4')
  request.r(i781[103], i781[104], 0, i780, 'camFollowStep4')
  request.r(i781[105], i781[106], 0, i780, 'SteamerBottom')
  i780.levelName = i781[107]
  i780.levelReward = i781[108]
  request.r(i781[109], i781[110], 0, i780, 'LevelIcon')
  request.r(i781[111], i781[112], 0, i780, 'Level_BG')
  var i783 = i781[113]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 1, i782, '')
  }
  i780.ToolIcons = i782
  var i785 = i781[114]
  var i784 = []
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 2, i784, '')
  }
  i780.AllDrags = i784
  var i787 = i781[115]
  var i786 = []
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 2, i786, '')
  }
  i780.AllSources = i786
  var i789 = i781[116]
  var i788 = []
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 2, i788, '')
  }
  i780.AllScratches = i788
  i780.stepsDone = i781[117]
  i780.levelNo = i781[118]
  i780.partNo = i781[119]
  var i791 = i781[120]
  var i790 = []
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 2, i790, '')
  }
  i780.disableOnLevelComplete = i790
  i780.zoomBeforeComplete = !!i781[121]
  i780.completionZoom = request.d('ZoomPos', i781[122], i780.completionZoom)
  i780.completionZoomDuration = i781[123]
  request.r(i781[124], i781[125], 0, i780, 'clothSfx')
  request.r(i781[126], i781[127], 0, i780, 'doorCloseSfx')
  return i780
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i792 = root || request.c( 'ZoomPos' )
  var i793 = data
  i792.CameraPos = new pc.Vec3( i793[0], i793[1], i793[2] )
  i792.CameraFOV = i793[3]
  return i792
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i804 = root || request.c( 'PlayableCTA' )
  var i805 = data
  i804.trigger = i805[0]
  i804.autoCtaOnLevelComplete = !!i805[1]
  i804.afterSeconds = i805[2]
  i804.afterTaps = i805[3]
  request.r(i805[4], i805[5], 0, i804, 'scratchProgress')
  i804.scratchIndex = i805[6]
  i804.progressThreshold = i805[7]
  i804.blockInputOnFire = !!i805[8]
  i804.refireOnEveryTap = !!i805[9]
  i804.refireDelay = i805[10]
  i804.showEndCard = !!i805[11]
  request.r(i805[12], i805[13], 0, i804, 'endCard')
  var i807 = i805[14]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 2, i806, '')
  }
  i804.thingsToDisableOnEndCard = i806
  i804.endCardDelay = i805[15]
  i804.showEndCardOnProgressTrigger = !!i805[16]
  i804.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i805[17], i804.onCtaFired)
  i804.logWhenFired = !!i805[18]
  return i804
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i809 = data
  i808.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i809[0], i808.m_PersistentCalls)
  return i808
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i811 = data
  var i813 = i811[0]
  var i812 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i813.length; i += 1) {
    i812.add(request.d('UnityEngine.Events.PersistentCall', i813[i + 0]));
  }
  i810.m_Calls = i812
  return i810
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'm_Target')
  i816.m_TargetAssemblyTypeName = i817[2]
  i816.m_MethodName = i817[3]
  i816.m_Mode = i817[4]
  i816.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i817[5], i816.m_Arguments)
  i816.m_CallState = i817[6]
  return i816
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i818 = root || request.c( 'PlayableFadeCoverSettings' )
  var i819 = data
  i818.revealDelay = i819[0]
  i818.revealDuration = i819[1]
  return i818
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i820 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'MainCamera')
  i820.RenderType = i821[2]
  request.r(i821[3], i821[4], 0, i820, 'ScratchSurfaceSprite')
  i820.ScratchSurfaceSpriteHasAlpha = !!i821[5]
  i820.MaskProgressCutOffValue = i821[6]
  request.r(i821[7], i821[8], 0, i820, 'EraseTexture')
  i820.EraseTextureScale = new pc.Vec2( i821[9], i821[10] )
  i820.InputEnabled = !!i821[11]
  request.r(i821[12], i821[13], 0, i820, 'Card')
  i820.Mode = i821[14]
  request.r(i821[15], i821[16], 0, i820, 'Progress')
  request.r(i821[17], i821[18], 0, i820, 'MeshCard')
  request.r(i821[19], i821[20], 0, i820, 'SpriteCard')
  request.r(i821[21], i821[22], 0, i820, 'ImageCard')
  request.r(i821[23], i821[24], 0, i820, 'MaskShader')
  request.r(i821[25], i821[26], 0, i820, 'BrushShader')
  request.r(i821[27], i821[28], 0, i820, 'MaskProgressShader')
  request.r(i821[29], i821[30], 0, i820, 'MaskProgressCutOffShader')
  return i820
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i822 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'MainCamera')
  request.r(i823[2], i823[3], 0, i822, 'Surface')
  i822.RenderTextureQuality = i823[4]
  request.r(i823[5], i823[6], 0, i822, 'Eraser')
  request.r(i823[7], i823[8], 0, i822, 'Progress')
  request.r(i823[9], i823[10], 0, i822, 'ScratchSurface')
  request.r(i823[11], i823[12], 0, i822, 'RenderTexture')
  i822.BrushScale = new pc.Vec2( i823[13], i823[14] )
  request.r(i823[15], i823[16], 0, i822, 'ToolTip')
  i822.InputEnabled = !!i823[17]
  i822.IsScratching = !!i823[18]
  i822.useChangingScale = !!i823[19]
  i822.useGivenBrushScale = !!i823[20]
  i822.canSpreadMask = !!i823[21]
  i822.shouldPaintHoles = !!i823[22]
  i822.canRotateTip = !!i823[23]
  i822._mode = i823[24]
  return i822
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i824 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'Card')
  i824.currentProgress = i825[2]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i827 = data
  i826.color = new pc.Color(i827[0], i827[1], i827[2], i827[3])
  request.r(i827[4], i827[5], 0, i826, 'sprite')
  i826.flipX = !!i827[6]
  i826.flipY = !!i827[7]
  i826.drawMode = i827[8]
  i826.size = new pc.Vec2( i827[9], i827[10] )
  i826.tileMode = i827[11]
  i826.adaptiveModeThreshold = i827[12]
  i826.maskInteraction = i827[13]
  i826.spriteSortPoint = i827[14]
  i826.enabled = !!i827[15]
  request.r(i827[16], i827[17], 0, i826, 'sharedMaterial')
  var i829 = i827[18]
  var i828 = []
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 2, i828, '')
  }
  i826.sharedMaterials = i828
  i826.receiveShadows = !!i827[19]
  i826.shadowCastingMode = i827[20]
  i826.sortingLayerID = i827[21]
  i826.sortingOrder = i827[22]
  i826.lightmapIndex = i827[23]
  i826.lightmapSceneIndex = i827[24]
  i826.lightmapScaleOffset = new pc.Vec4( i827[25], i827[26], i827[27], i827[28] )
  i826.lightProbeUsage = i827[29]
  i826.reflectionProbeUsage = i827[30]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i831 = data
  i830.pivot = new pc.Vec2( i831[0], i831[1] )
  i830.anchorMin = new pc.Vec2( i831[2], i831[3] )
  i830.anchorMax = new pc.Vec2( i831[4], i831[5] )
  i830.sizeDelta = new pc.Vec2( i831[6], i831[7] )
  i830.anchoredPosition3D = new pc.Vec3( i831[8], i831[9], i831[10] )
  i830.rotation = new pc.Quat(i831[11], i831[12], i831[13], i831[14])
  i830.scale = new pc.Vec3( i831[15], i831[16], i831[17] )
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i833 = data
  i832.planeDistance = i833[0]
  i832.referencePixelsPerUnit = i833[1]
  i832.isFallbackOverlay = !!i833[2]
  i832.renderMode = i833[3]
  i832.renderOrder = i833[4]
  i832.sortingLayerName = i833[5]
  i832.sortingOrder = i833[6]
  i832.scaleFactor = i833[7]
  request.r(i833[8], i833[9], 0, i832, 'worldCamera')
  i832.overrideSorting = !!i833[10]
  i832.pixelPerfect = !!i833[11]
  i832.targetDisplay = i833[12]
  i832.overridePixelPerfect = !!i833[13]
  i832.enabled = !!i833[14]
  return i832
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i835 = data
  i834.m_UiScaleMode = i835[0]
  i834.m_ReferencePixelsPerUnit = i835[1]
  i834.m_ScaleFactor = i835[2]
  i834.m_ReferenceResolution = new pc.Vec2( i835[3], i835[4] )
  i834.m_ScreenMatchMode = i835[5]
  i834.m_MatchWidthOrHeight = i835[6]
  i834.m_PhysicalUnit = i835[7]
  i834.m_FallbackScreenDPI = i835[8]
  i834.m_DefaultSpriteDPI = i835[9]
  i834.m_DynamicPixelsPerUnit = i835[10]
  i834.m_PresetInfoIsWorld = !!i835[11]
  return i834
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i837 = data
  i836.m_IgnoreReversedGraphics = !!i837[0]
  i836.m_BlockingObjects = i837[1]
  i836.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i837[2] )
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i839 = data
  i838.usedByComposite = !!i839[0]
  i838.autoTiling = !!i839[1]
  i838.size = new pc.Vec2( i839[2], i839[3] )
  i838.edgeRadius = i839[4]
  i838.enabled = !!i839[5]
  i838.isTrigger = !!i839[6]
  i838.usedByEffector = !!i839[7]
  i838.density = i839[8]
  i838.offset = new pc.Vec2( i839[9], i839[10] )
  request.r(i839[11], i839[12], 0, i838, 'material')
  return i838
}

Deserializers["RotaryTimerKnob"] = function (request, data, root) {
  var i840 = root || request.c( 'RotaryTimerKnob' )
  var i841 = data
  i840.numSteps = i841[0]
  i840.onlyClockwise = !!i841[1]
  request.r(i841[2], i841[3], 0, i840, 'clickSound')
  i840.enableVibration = !!i841[4]
  request.r(i841[5], i841[6], 0, i840, 'stepText')
  i840.OnComplete = request.d('UnityEngine.Events.UnityEvent', i841[7], i840.OnComplete)
  request.r(i841[8], i841[9], 0, i840, 'handIndication')
  return i840
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'm_ObjectArgument')
  i842.m_ObjectArgumentAssemblyTypeName = i843[2]
  i842.m_IntArgument = i843[3]
  i842.m_FloatArgument = i843[4]
  i842.m_StringArgument = i843[5]
  i842.m_BoolArgument = !!i843[6]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'additionalVertexStreams')
  i844.enabled = !!i845[2]
  request.r(i845[3], i845[4], 0, i844, 'sharedMaterial')
  var i847 = i845[5]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i844.sharedMaterials = i846
  i844.receiveShadows = !!i845[6]
  i844.shadowCastingMode = i845[7]
  i844.sortingLayerID = i845[8]
  i844.sortingOrder = i845[9]
  i844.lightmapIndex = i845[10]
  i844.lightmapSceneIndex = i845[11]
  i844.lightmapScaleOffset = new pc.Vec4( i845[12], i845[13], i845[14], i845[15] )
  i844.lightProbeUsage = i845[16]
  i844.reflectionProbeUsage = i845[17]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i849 = data
  i848.cullTransparentMesh = !!i849[0]
  return i848
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.UI.Text' )
  var i851 = data
  i850.m_FontData = request.d('UnityEngine.UI.FontData', i851[0], i850.m_FontData)
  i850.m_Text = i851[1]
  request.r(i851[2], i851[3], 0, i850, 'm_Material')
  i850.m_Maskable = !!i851[4]
  i850.m_Color = new pc.Color(i851[5], i851[6], i851[7], i851[8])
  i850.m_RaycastTarget = !!i851[9]
  i850.m_RaycastPadding = new pc.Vec4( i851[10], i851[11], i851[12], i851[13] )
  return i850
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.UI.FontData' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'm_Font')
  i852.m_FontSize = i853[2]
  i852.m_FontStyle = i853[3]
  i852.m_BestFit = !!i853[4]
  i852.m_MinSize = i853[5]
  i852.m_MaxSize = i853[6]
  i852.m_Alignment = i853[7]
  i852.m_AlignByGeometry = !!i853[8]
  i852.m_RichText = !!i853[9]
  i852.m_HorizontalOverflow = i853[10]
  i852.m_VerticalOverflow = i853[11]
  i852.m_LineSpacing = i853[12]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'animatorController')
  request.r(i855[2], i855[3], 0, i854, 'avatar')
  i854.updateMode = i855[4]
  i854.hasTransformHierarchy = !!i855[5]
  i854.applyRootMotion = !!i855[6]
  var i857 = i855[7]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i854.humanBones = i856
  i854.enabled = !!i855[8]
  return i854
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'm_RootBone')
  var i863 = i861[2]
  var i862 = []
  for(var i = 0; i < i863.length; i += 2) {
  request.r(i863[i + 0], i863[i + 1], 2, i862, '')
  }
  i860.m_BoneTransforms = i862
  i860.m_AlwaysUpdate = !!i861[3]
  i860.m_AutoRebind = !!i861[4]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i865 = data
  i864.frontSortingLayerID = i865[0]
  i864.frontSortingOrder = i865[1]
  i864.backSortingLayerID = i865[2]
  i864.backSortingOrder = i865[3]
  i864.alphaCutoff = i865[4]
  request.r(i865[5], i865[6], 0, i864, 'sprite')
  i864.tileMode = i865[7]
  i864.isCustomRangeActive = !!i865[8]
  i864.spriteSortPoint = i865[9]
  i864.enabled = !!i865[10]
  request.r(i865[11], i865[12], 0, i864, 'sharedMaterial')
  var i867 = i865[13]
  var i866 = []
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 2, i866, '')
  }
  i864.sharedMaterials = i866
  i864.receiveShadows = !!i865[14]
  i864.shadowCastingMode = i865[15]
  i864.sortingLayerID = i865[16]
  i864.sortingOrder = i865[17]
  i864.lightmapIndex = i865[18]
  i864.lightmapSceneIndex = i865[19]
  i864.lightmapScaleOffset = new pc.Vec4( i865[20], i865[21], i865[22], i865[23] )
  i864.lightProbeUsage = i865[24]
  i864.reflectionProbeUsage = i865[25]
  return i864
}

Deserializers["_2dxFX_Wave"] = function (request, data, root) {
  var i868 = root || request.c( '_2dxFX_Wave' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'ForceMaterial')
  i868.ActiveChange = !!i869[2]
  i868._Alpha = i869[3]
  i868._OffsetX = i869[4]
  i868._OffsetY = i869[5]
  i868._DistanceX = i869[6]
  i868._DistanceY = i869[7]
  i868._WaveTimeX = i869[8]
  i868._WaveTimeY = i869[9]
  i868.AutoPlayWaveX = !!i869[10]
  i868.AutoPlaySpeedX = i869[11]
  i868.AutoPlayWaveY = !!i869[12]
  i868.AutoPlaySpeedY = i869[13]
  i868.AutoRandom = !!i869[14]
  i868.AutoRandomRange = i869[15]
  i868.ShaderChange = i869[16]
  return i868
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i870 = root || request.c( 'BasicDrag' )
  var i871 = data
  i870.canDrag = !!i871[0]
  i870.dragByDelta = !!i871[1]
  i870.isDragging = !!i871[2]
  i870.moveWithPointer = !!i871[3]
  i870.canReturn = !!i871[4]
  i870.jumpOnReturn = !!i871[5]
  i870.returnTime = i871[6]
  i870.Tool_Offset = new pc.Vec3( i871[7], i871[8], i871[9] )
  i870.canScaleIncrease = !!i871[10]
  i870.Self_ScaleNew = new pc.Vec3( i871[11], i871[12], i871[13] )
  i870.canRotateOnPick = !!i871[14]
  i870.startRot = new pc.Vec3( i871[15], i871[16], i871[17] )
  i870.newRot = new pc.Vec3( i871[18], i871[19], i871[20] )
  var i873 = i871[21]
  var i872 = []
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 2, i872, '')
  }
  i870.childSprite = i872
  request.r(i871[22], i871[23], 0, i870, 'ToolSelectClip')
  request.r(i871[24], i871[25], 0, i870, 'ToolLoopClip')
  request.r(i871[26], i871[27], 0, i870, 'thisParticles')
  i870.onDragparticle = !!i871[28]
  request.r(i871[29], i871[30], 0, i870, 'dragParticles')
  request.r(i871[31], i871[32], 0, i870, 'anim')
  i870.startPos = new pc.Vec3( i871[33], i871[34], i871[35] )
  i870.startScale = new pc.Vec3( i871[36], i871[37], i871[38] )
  i870.Vibration = !!i871[39]
  i870.isPlacedCannotMove = !!i871[40]
  i870.isObjectMovingWhileDragging = !!i871[41]
  i870.OnMouseDownEvent = request.d('System.Action', i871[42], i870.OnMouseDownEvent)
  i870.OnMouseUpEvent = request.d('System.Action', i871[43], i870.OnMouseUpEvent)
  i870.ProgStartEvent = request.d('System.Action', i871[44], i870.ProgStartEvent)
  i870.ProgEndEvent = request.d('System.Action', i871[45], i870.ProgEndEvent)
  i870.canCallMouseUpWhenGamePaused = !!i871[46]
  i870.ClampX_L = i871[47]
  i870.ClampX_H = i871[48]
  i870.ClampY_L = i871[49]
  i870.ClampY_H = i871[50]
  i870.startOrder = i871[51]
  i870.dontResetItIsInCollider = !!i871[52]
  request.r(i871[53], i871[54], 0, i870, 'thisCollider')
  request.r(i871[55], i871[56], 0, i870, 'thisSR')
  i870.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i871[57], i870.OnMouseDownEventIndependentFromCanDrag)
  return i870
}

Deserializers["System.Action"] = function (request, data, root) {
  var i876 = root || request.c( 'System.Action' )
  var i877 = data
  return i876
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i878 = root || request.c( 'BD_Clamp' )
  var i879 = data
  i878.ClampX_L = i879[0]
  i878.ClampX_H = i879[1]
  i878.ClampY_L = i879[2]
  i878.ClampY_H = i879[3]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i881 = data
  i880.bodyType = i881[0]
  request.r(i881[1], i881[2], 0, i880, 'material')
  i880.simulated = !!i881[3]
  i880.useAutoMass = !!i881[4]
  i880.mass = i881[5]
  i880.drag = i881[6]
  i880.angularDrag = i881[7]
  i880.gravityScale = i881[8]
  i880.collisionDetectionMode = i881[9]
  i880.sleepMode = i881[10]
  i880.constraints = i881[11]
  return i880
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i882 = root || request.c( 'PlaceItem' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'thisDrag')
  request.r(i883[2], i883[3], 0, i882, 'Target')
  request.r(i883[4], i883[5], 0, i882, 'Clip')
  i882.jumpOnPlace = !!i883[6]
  i882.jumpHeight = i883[7]
  i882.jumpDuration = i883[8]
  i882.settleDuration = i883[9]
  i882.isPlaced = !!i883[10]
  i882.isInsideCollider = !!i883[11]
  i882.changeScaleOnPlace = !!i883[12]
  request.r(i883[13], i883[14], 0, i882, 'item')
  i882.newScaleOnPlace = new pc.Vec3( i883[15], i883[16], i883[17] )
  i882.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i883[18], i882.OnPlaced)
  return i882
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i884 = root || request.c( 'ActionOnTap' )
  var i885 = data
  i884.OnTap = request.d('UnityEngine.Events.UnityEvent', i885[0], i884.OnTap)
  i884.OnTapExtra = request.d('System.Action', i885[1], i884.OnTapExtra)
  return i884
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i886 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i887 = data
  i886.targetIsSelf = !!i887[0]
  request.r(i887[1], i887[2], 0, i886, 'targetGO')
  i886.tweenTargetIsTargetGO = !!i887[3]
  i886.delay = i887[4]
  i886.duration = i887[5]
  i886.easeType = i887[6]
  i886.easeCurve = new pc.AnimationCurve( { keys_flow: i887[7] } )
  i886.loopType = i887[8]
  i886.loops = i887[9]
  i886.id = i887[10]
  i886.isRelative = !!i887[11]
  i886.isFrom = !!i887[12]
  i886.isIndependentUpdate = !!i887[13]
  i886.autoKill = !!i887[14]
  i886.autoGenerate = !!i887[15]
  i886.isActive = !!i887[16]
  i886.isValid = !!i887[17]
  request.r(i887[18], i887[19], 0, i886, 'target')
  i886.animationType = i887[20]
  i886.targetType = i887[21]
  i886.forcedTargetType = i887[22]
  i886.autoPlay = !!i887[23]
  i886.useTargetAsV3 = !!i887[24]
  i886.endValueFloat = i887[25]
  i886.endValueV3 = new pc.Vec3( i887[26], i887[27], i887[28] )
  i886.endValueV2 = new pc.Vec2( i887[29], i887[30] )
  i886.endValueColor = new pc.Color(i887[31], i887[32], i887[33], i887[34])
  i886.endValueString = i887[35]
  i886.endValueRect = UnityEngine.Rect.MinMaxRect(i887[36], i887[37], i887[38], i887[39])
  request.r(i887[40], i887[41], 0, i886, 'endValueTransform')
  i886.optionalBool0 = !!i887[42]
  i886.optionalBool1 = !!i887[43]
  i886.optionalFloat0 = i887[44]
  i886.optionalInt0 = i887[45]
  i886.optionalRotationMode = i887[46]
  i886.optionalScrambleMode = i887[47]
  i886.optionalShakeRandomnessMode = i887[48]
  i886.optionalString = i887[49]
  i886.updateType = i887[50]
  i886.isSpeedBased = !!i887[51]
  i886.hasOnStart = !!i887[52]
  i886.hasOnPlay = !!i887[53]
  i886.hasOnUpdate = !!i887[54]
  i886.hasOnStepComplete = !!i887[55]
  i886.hasOnComplete = !!i887[56]
  i886.hasOnTweenCreated = !!i887[57]
  i886.hasOnRewind = !!i887[58]
  i886.onStart = request.d('UnityEngine.Events.UnityEvent', i887[59], i886.onStart)
  i886.onPlay = request.d('UnityEngine.Events.UnityEvent', i887[60], i886.onPlay)
  i886.onUpdate = request.d('UnityEngine.Events.UnityEvent', i887[61], i886.onUpdate)
  i886.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i887[62], i886.onStepComplete)
  i886.onComplete = request.d('UnityEngine.Events.UnityEvent', i887[63], i886.onComplete)
  i886.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i887[64], i886.onTweenCreated)
  i886.onRewind = request.d('UnityEngine.Events.UnityEvent', i887[65], i886.onRewind)
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i889 = data
  i888.radius = i889[0]
  i888.enabled = !!i889[1]
  i888.isTrigger = !!i889[2]
  i888.usedByEffector = !!i889[3]
  i888.density = i889[4]
  i888.offset = new pc.Vec2( i889[5], i889[6] )
  request.r(i889[7], i889[8], 0, i888, 'material')
  return i888
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i890 = root || request.c( 'PlayParticlesOnCollision' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'Target')
  request.r(i891[2], i891[3], 0, i890, 'ParticlePrefab')
  i890.destroyIt = !!i891[4]
  i890.stayAtPlace = !!i891[5]
  i890.disableOnCollision = !!i891[6]
  i890.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i891[7], i890.OnCollisionEvent)
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i893 = data
  i892.usedByComposite = !!i893[0]
  i892.autoTiling = !!i893[1]
  var i895 = i893[2]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
  var i897 = i895[i + 0]
  var i896 = []
  for(var i = 0; i < i897.length; i += 2) {
    i896.push( new pc.Vec2( i897[i + 0], i897[i + 1] ) );
  }
    i894.push( i896 );
  }
  i892.points = i894
  i892.enabled = !!i893[3]
  i892.isTrigger = !!i893[4]
  i892.usedByEffector = !!i893[5]
  i892.density = i893[6]
  i892.offset = new pc.Vec2( i893[7], i893[8] )
  request.r(i893[9], i893[10], 0, i892, 'material')
  return i892
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i904 = root || request.c( 'PlaySfxOnCollision' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'Tip')
  i904.Mode = i905[2]
  request.r(i905[3], i905[4], 0, i904, 'DragInput')
  request.r(i905[5], i905[6], 0, i904, 'Source')
  i904.startVol = i905[7]
  i904.targetVol = i905[8]
  i904.duration = i905[9]
  request.r(i905[10], i905[11], 0, i904, 'Particles')
  i904.isDone = !!i905[12]
  i904.isInArea = !!i905[13]
  i904.isPlaying = !!i905[14]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'clip')
  request.r(i907[2], i907[3], 0, i906, 'outputAudioMixerGroup')
  i906.playOnAwake = !!i907[4]
  i906.loop = !!i907[5]
  i906.time = i907[6]
  i906.volume = i907[7]
  i906.pitch = i907[8]
  i906.enabled = !!i907[9]
  return i906
}

Deserializers["SewingCol"] = function (request, data, root) {
  var i908 = root || request.c( 'SewingCol' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'targetTip')
  var i911 = i909[2]
  var i910 = []
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 2, i910, '')
  }
  i908.Anim_Items = i910
  i908.isDone = !!i909[3]
  request.r(i909[4], i909[5], 0, i908, 'sfx')
  return i908
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i914 = root || request.c( 'BD_Progress' )
  var i915 = data
  var i917 = i915[0]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('ScratchData', i917[i + 0]) );
  }
  i914.AllScratches = i916
  i914.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i915[1], i914.OnScratchComplete)
  i914.isProgDone = !!i915[2]
  i914.canCallComplete = !!i915[3]
  i914.CollectiveAppear = !!i915[4]
  i914.tipControl = !!i915[5]
  i914.progressControl = !!i915[6]
  request.r(i915[7], i915[8], 0, i914, 'thisDrag')
  i914.CompleteEvent = request.d('System.Action', i915[9], i914.CompleteEvent)
  i914.SubCompleteEvent = request.d('System.Action', i915[10], i914.SubCompleteEvent)
  return i914
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i920 = root || request.c( 'ScratchData' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'ScratchManager')
  i920.scratchLimit = i921[2]
  i920.isComplete = !!i921[3]
  return i920
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i922 = root || request.c( 'BD_CameraFollow' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'Tool')
  request.r(i923[2], i923[3], 0, i922, 'Pivot')
  i922.FOV = i923[4]
  i922.Y_L = i923[5]
  i922.Y_H = i923[6]
  i922.X_L = i923[7]
  i922.X_R = i923[8]
  i922.startDelay = i923[9]
  i922.duration = i923[10]
  return i922
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i924 = root || request.c( 'BD_Action' )
  var i925 = data
  i924.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i925[0], i924.OnMouseDownEvent)
  i924.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i925[1], i924.OnMouseUpEvent)
  i924.setToolLayer = !!i925[2]
  request.r(i925[3], i925[4], 0, i924, 'tool_SP')
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'sharedMesh')
  return i926
}

Deserializers["StaticFixedPipe"] = function (request, data, root) {
  var i928 = root || request.c( 'StaticFixedPipe' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'meshRenderer')
  request.r(i929[2], i929[3], 0, i928, 'toolTransform')
  request.r(i929[4], i929[5], 0, i928, 'toolDirectionPoint')
  request.r(i929[6], i929[7], 0, i928, 'fixedEndPoint')
  i928.segmentCount = i929[8]
  i928.totalLength = i929[9]
  i928.constraintIterations = i929[10]
  i928.gravity = new pc.Vec3( i929[11], i929[12], i929[13] )
  i928.pipeWidth = i929[14]
  return i928
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i930 = root || request.c( 'BD_SpriteChange' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'BD')
  request.r(i931[2], i931[3], 0, i930, 'SR')
  request.r(i931[4], i931[5], 0, i930, 'Default')
  request.r(i931[6], i931[7], 0, i930, 'Picked')
  i930.resetOnRelease = !!i931[8]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i933 = data
  i932.name = i933[0]
  i932.atlasId = i933[1]
  i932.mipmapCount = i933[2]
  i932.hdr = !!i933[3]
  i932.size = i933[4]
  i932.anisoLevel = i933[5]
  i932.filterMode = i933[6]
  var i935 = i933[7]
  var i934 = []
  for(var i = 0; i < i935.length; i += 4) {
    i934.push( UnityEngine.Rect.MinMaxRect(i935[i + 0], i935[i + 1], i935[i + 2], i935[i + 3]) );
  }
  i932.rects = i934
  i932.wrapU = i933[8]
  i932.wrapV = i933[9]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i939 = data
  i938.name = i939[0]
  i938.index = i939[1]
  i938.startup = !!i939[2]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i941 = data
  i940.aspect = i941[0]
  i940.orthographic = !!i941[1]
  i940.orthographicSize = i941[2]
  i940.backgroundColor = new pc.Color(i941[3], i941[4], i941[5], i941[6])
  i940.nearClipPlane = i941[7]
  i940.farClipPlane = i941[8]
  i940.fieldOfView = i941[9]
  i940.depth = i941[10]
  i940.clearFlags = i941[11]
  i940.cullingMask = i941[12]
  i940.rect = i941[13]
  request.r(i941[14], i941[15], 0, i940, 'targetTexture')
  i940.usePhysicalProperties = !!i941[16]
  i940.focalLength = i941[17]
  i940.sensorSize = new pc.Vec2( i941[18], i941[19] )
  i940.lensShift = new pc.Vec2( i941[20], i941[21] )
  i940.gateFit = i941[22]
  i940.commandBufferCount = i941[23]
  i940.cameraType = i941[24]
  i940.enabled = !!i941[25]
  return i940
}

Deserializers["CameraController"] = function (request, data, root) {
  var i942 = root || request.c( 'CameraController' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'cam')
  i942.defaultPosition = new pc.Vec3( i943[2], i943[3], i943[4] )
  i942.defaultSize = i943[5]
  i942.defaultFOV = i943[6]
  i942.defaultDuration = i943[7]
  i942.defaultEase = i943[8]
  return i942
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i944 = root || request.c( 'MusicSource' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'source')
  return i944
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i946 = root || request.c( 'UI_Manager' )
  var i947 = data
  i946.levelCompleted = !!i947[0]
  i946.isPauseActive = !!i947[1]
  i946.loadIndex = i947[2]
  request.r(i947[3], i947[4], 0, i946, 'removeAdsButton')
  request.r(i947[5], i947[6], 0, i946, 'pauseButton')
  request.r(i947[7], i947[8], 0, i946, 'Fade_Img')
  request.r(i947[9], i947[10], 0, i946, 'TopBarAnim')
  request.r(i947[11], i947[12], 0, i946, 'MainPanel')
  request.r(i947[13], i947[14], 0, i946, 'PausePanel')
  request.r(i947[15], i947[16], 0, i946, 'PausePopUp')
  request.r(i947[17], i947[18], 0, i946, 'PauseCanvasGroup')
  request.r(i947[19], i947[20], 0, i946, 'RateUsPanel')
  request.r(i947[21], i947[22], 0, i946, 'RateUsPopUp')
  request.r(i947[23], i947[24], 0, i946, 'RemoveAdsPanel')
  request.r(i947[25], i947[26], 0, i946, 'RemoveAdsPopUp')
  request.r(i947[27], i947[28], 0, i946, 'RemoveAdsCanvasGroup')
  var i949 = i947[29]
  var i948 = []
  for(var i = 0; i < i949.length; i += 2) {
  request.r(i949[i + 0], i949[i + 1], 2, i948, '')
  }
  i946.RemoveAdsAnims = i948
  request.r(i947[30], i947[31], 0, i946, 'CompletePanel')
  request.r(i947[32], i947[33], 0, i946, 'LevelIcon')
  request.r(i947[34], i947[35], 0, i946, 'CompleteParticles')
  request.r(i947[36], i947[37], 0, i946, 'progressBar')
  request.r(i947[38], i947[39], 0, i946, 'progressText')
  request.r(i947[40], i947[41], 0, i946, 'toolIcon1')
  request.r(i947[42], i947[43], 0, i946, 'toolIcon2')
  request.r(i947[44], i947[45], 0, i946, 'toolIcon3')
  request.r(i947[46], i947[47], 0, i946, 'toolIcon4')
  request.r(i947[48], i947[49], 0, i946, 'target1')
  request.r(i947[50], i947[51], 0, i946, 'target2')
  i946.toolMoveDuration = i947[52]
  i946.currentIndex = i947[53]
  var i951 = i947[54]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i951.length; i += 2) {
  request.r(i951[i + 0], i951[i + 1], 1, i950, '')
  }
  i946.allTools = i950
  request.r(i947[55], i947[56], 0, i946, 'clockProgress')
  request.r(i947[57], i947[58], 0, i946, 'clockProgressFill')
  request.r(i947[59], i947[60], 0, i946, 'clockAudio')
  i946.moveDistance = i947[61]
  i946.animationDuration = i947[62]
  i946.greyBgChildName = i947[63]
  i946.pushOffset = i947[64]
  return i946
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i952 = root || request.c( 'GameManagerPlayable' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'endParticles')
  request.r(i953[2], i953[3], 0, i952, 'stepCompleteParticles')
  request.r(i953[4], i953[5], 0, i952, 'DefaultMat')
  request.r(i953[6], i953[7], 0, i952, 'BG_Music')
  request.r(i953[8], i953[9], 0, i952, 'restoreEffectShader')
  request.r(i953[10], i953[11], 0, i952, 'stickerEffectShader')
  i952.isComplete = !!i953[12]
  i952.isPaused = !!i953[13]
  request.r(i953[14], i953[15], 0, i952, 'currentLevel')
  i952.startLevelOnPlay = !!i953[16]
  i952.currentLevelNo = i953[17]
  return i952
}

Deserializers["AudioController"] = function (request, data, root) {
  var i954 = root || request.c( 'AudioController' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'MainMixer')
  request.r(i955[2], i955[3], 0, i954, 'UiClick')
  request.r(i955[4], i955[5], 0, i954, 'UiClickSource')
  var i957 = i955[6]
  var i956 = []
  for(var i = 0; i < i957.length; i += 2) {
  request.r(i957[i + 0], i957[i + 1], 2, i956, '')
  }
  i954.SfxSources = i956
  var i959 = i955[7]
  var i958 = []
  for(var i = 0; i < i959.length; i += 2) {
  request.r(i959[i + 0], i959[i + 1], 2, i958, '')
  }
  i954.AllClips = i958
  return i954
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.UI.Image' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'm_Sprite')
  i962.m_Type = i963[2]
  i962.m_PreserveAspect = !!i963[3]
  i962.m_FillCenter = !!i963[4]
  i962.m_FillMethod = i963[5]
  i962.m_FillAmount = i963[6]
  i962.m_FillClockwise = !!i963[7]
  i962.m_FillOrigin = i963[8]
  i962.m_UseSpriteMesh = !!i963[9]
  i962.m_PixelsPerUnitMultiplier = i963[10]
  request.r(i963[11], i963[12], 0, i962, 'm_Material')
  i962.m_Maskable = !!i963[13]
  i962.m_Color = new pc.Color(i963[14], i963[15], i963[16], i963[17])
  i962.m_RaycastTarget = !!i963[18]
  i962.m_RaycastPadding = new pc.Vec4( i963[19], i963[20], i963[21], i963[22] )
  return i962
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.UI.Button' )
  var i965 = data
  i964.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i965[0], i964.m_OnClick)
  i964.m_Navigation = request.d('UnityEngine.UI.Navigation', i965[1], i964.m_Navigation)
  i964.m_Transition = i965[2]
  i964.m_Colors = request.d('UnityEngine.UI.ColorBlock', i965[3], i964.m_Colors)
  i964.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i965[4], i964.m_SpriteState)
  i964.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i965[5], i964.m_AnimationTriggers)
  i964.m_Interactable = !!i965[6]
  request.r(i965[7], i965[8], 0, i964, 'm_TargetGraphic')
  return i964
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i967 = data
  i966.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i967[0], i966.m_PersistentCalls)
  return i966
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i969 = data
  i968.m_Mode = i969[0]
  i968.m_WrapAround = !!i969[1]
  request.r(i969[2], i969[3], 0, i968, 'm_SelectOnUp')
  request.r(i969[4], i969[5], 0, i968, 'm_SelectOnDown')
  request.r(i969[6], i969[7], 0, i968, 'm_SelectOnLeft')
  request.r(i969[8], i969[9], 0, i968, 'm_SelectOnRight')
  return i968
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i971 = data
  i970.m_NormalColor = new pc.Color(i971[0], i971[1], i971[2], i971[3])
  i970.m_HighlightedColor = new pc.Color(i971[4], i971[5], i971[6], i971[7])
  i970.m_PressedColor = new pc.Color(i971[8], i971[9], i971[10], i971[11])
  i970.m_SelectedColor = new pc.Color(i971[12], i971[13], i971[14], i971[15])
  i970.m_DisabledColor = new pc.Color(i971[16], i971[17], i971[18], i971[19])
  i970.m_ColorMultiplier = i971[20]
  i970.m_FadeDuration = i971[21]
  return i970
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i972 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'm_HighlightedSprite')
  request.r(i973[2], i973[3], 0, i972, 'm_PressedSprite')
  request.r(i973[4], i973[5], 0, i972, 'm_SelectedSprite')
  request.r(i973[6], i973[7], 0, i972, 'm_DisabledSprite')
  return i972
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i975 = data
  i974.m_NormalTrigger = i975[0]
  i974.m_HighlightedTrigger = i975[1]
  i974.m_PressedTrigger = i975[2]
  i974.m_SelectedTrigger = i975[3]
  i974.m_DisabledTrigger = i975[4]
  return i974
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i976 = root || request.c( 'PlayableHudRuntime' )
  var i977 = data
  return i976
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i978 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'm_FirstSelected')
  i978.m_sendNavigationEvents = !!i979[2]
  i978.m_DragThreshold = i979[3]
  return i978
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i981 = data
  i980.m_HorizontalAxis = i981[0]
  i980.m_VerticalAxis = i981[1]
  i980.m_SubmitButton = i981[2]
  i980.m_CancelButton = i981[3]
  i980.m_InputActionsPerSecond = i981[4]
  i980.m_RepeatDelay = i981[5]
  i980.m_ForceModuleActive = !!i981[6]
  i980.m_SendPointerHoverToParent = !!i981[7]
  return i980
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i982 = root || request.c( 'PlayableRouter' )
  var i983 = data
  var i985 = i983[0]
  var i984 = []
  for(var i = 0; i < i985.length; i += 2) {
  request.r(i985[i + 0], i985[i + 1], 2, i984, '')
  }
  i982.menuObjects = i984
  var i987 = i983[1]
  var i986 = []
  for(var i = 0; i < i987.length; i += 2) {
  request.r(i987[i + 0], i987[i + 1], 2, i986, '')
  }
  i982.gameplayObjects = i986
  var i989 = i983[2]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('PlayableRouter+SubLevelSlot', i989[i + 0]) );
  }
  i982.subLevels = i988
  i982.fadeDuration = i983[3]
  i982.onMenuClosing = request.d('UnityEngine.Events.UnityEvent', i983[4], i982.onMenuClosing)
  i982.lockedMessage = i983[5]
  i982.lockedTapsToCTA = i983[6]
  return i982
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i992 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'button')
  request.r(i993[2], i993[3], 0, i992, 'level')
  return i992
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i994 = root || request.c( 'ToastManager' )
  var i995 = data
  request.r(i995[0], i995[1], 0, i994, 'toastPanel')
  request.r(i995[2], i995[3], 0, i994, 'toastPopup')
  request.r(i995[4], i995[5], 0, i994, 'canvasGroup')
  request.r(i995[6], i995[7], 0, i994, 'toastText')
  i994.startY = i995[8]
  i994.visibleY = i995[9]
  i994.endY = i995[10]
  i994.animationTime = i995[11]
  i994.animationTimeUp = i995[12]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i997 = data
  i996.m_Alpha = i997[0]
  i996.m_Interactable = !!i997[1]
  i996.m_BlocksRaycasts = !!i997[2]
  i996.m_IgnoreParentGroups = !!i997[3]
  i996.enabled = !!i997[4]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i999 = data
  i998.ambientIntensity = i999[0]
  i998.reflectionIntensity = i999[1]
  i998.ambientMode = i999[2]
  i998.ambientLight = new pc.Color(i999[3], i999[4], i999[5], i999[6])
  i998.ambientSkyColor = new pc.Color(i999[7], i999[8], i999[9], i999[10])
  i998.ambientGroundColor = new pc.Color(i999[11], i999[12], i999[13], i999[14])
  i998.ambientEquatorColor = new pc.Color(i999[15], i999[16], i999[17], i999[18])
  i998.fogColor = new pc.Color(i999[19], i999[20], i999[21], i999[22])
  i998.fogEndDistance = i999[23]
  i998.fogStartDistance = i999[24]
  i998.fogDensity = i999[25]
  i998.fog = !!i999[26]
  request.r(i999[27], i999[28], 0, i998, 'skybox')
  i998.fogMode = i999[29]
  var i1001 = i999[30]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1001[i + 0]) );
  }
  i998.lightmaps = i1000
  i998.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i999[31], i998.lightProbes)
  i998.lightmapsMode = i999[32]
  i998.mixedBakeMode = i999[33]
  i998.environmentLightingMode = i999[34]
  i998.ambientProbe = new pc.SphericalHarmonicsL2(i999[35])
  request.r(i999[36], i999[37], 0, i998, 'customReflection')
  request.r(i999[38], i999[39], 0, i998, 'defaultReflection')
  i998.defaultReflectionMode = i999[40]
  i998.defaultReflectionResolution = i999[41]
  i998.sunLightObjectId = i999[42]
  i998.pixelLightCount = i999[43]
  i998.defaultReflectionHDR = !!i999[44]
  i998.hasLightDataAsset = !!i999[45]
  i998.hasManualGenerate = !!i999[46]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1005 = data
  request.r(i1005[0], i1005[1], 0, i1004, 'lightmapColor')
  request.r(i1005[2], i1005[3], 0, i1004, 'lightmapDirection')
  request.r(i1005[4], i1005[5], 0, i1004, 'shadowMask')
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1006 = root || new UnityEngine.LightProbes()
  var i1007 = data
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1015 = data
  var i1017 = i1015[0]
  var i1016 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1017[i + 0]));
  }
  i1014.ShaderCompilationErrors = i1016
  i1014.name = i1015[1]
  i1014.guid = i1015[2]
  var i1019 = i1015[3]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( i1019[i + 0] );
  }
  i1014.shaderDefinedKeywords = i1018
  var i1021 = i1015[4]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1021[i + 0]) );
  }
  i1014.passes = i1020
  var i1023 = i1015[5]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1023[i + 0]) );
  }
  i1014.usePasses = i1022
  var i1025 = i1015[6]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1025[i + 0]) );
  }
  i1014.defaultParameterValues = i1024
  request.r(i1015[7], i1015[8], 0, i1014, 'unityFallbackShader')
  i1014.readDepth = !!i1015[9]
  i1014.hasDepthOnlyPass = !!i1015[10]
  i1014.isCreatedByShaderGraph = !!i1015[11]
  i1014.disableBatching = !!i1015[12]
  i1014.compiled = !!i1015[13]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1029 = data
  i1028.shaderName = i1029[0]
  i1028.errorMessage = i1029[1]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1034 = root || new pc.UnityShaderPass()
  var i1035 = data
  i1034.id = i1035[0]
  i1034.subShaderIndex = i1035[1]
  i1034.name = i1035[2]
  i1034.passType = i1035[3]
  i1034.grabPassTextureName = i1035[4]
  i1034.usePass = !!i1035[5]
  i1034.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1035[6], i1034.zTest)
  i1034.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1035[7], i1034.zWrite)
  i1034.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1035[8], i1034.culling)
  i1034.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1035[9], i1034.blending)
  i1034.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1035[10], i1034.alphaBlending)
  i1034.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1035[11], i1034.colorWriteMask)
  i1034.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1035[12], i1034.offsetUnits)
  i1034.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1035[13], i1034.offsetFactor)
  i1034.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1035[14], i1034.stencilRef)
  i1034.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1035[15], i1034.stencilReadMask)
  i1034.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1035[16], i1034.stencilWriteMask)
  i1034.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1035[17], i1034.stencilOp)
  i1034.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1035[18], i1034.stencilOpFront)
  i1034.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1035[19], i1034.stencilOpBack)
  var i1037 = i1035[20]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1037[i + 0]) );
  }
  i1034.tags = i1036
  var i1039 = i1035[21]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( i1039[i + 0] );
  }
  i1034.passDefinedKeywords = i1038
  var i1041 = i1035[22]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1041[i + 0]) );
  }
  i1034.passDefinedKeywordGroups = i1040
  var i1043 = i1035[23]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1043[i + 0]) );
  }
  i1034.variants = i1042
  var i1045 = i1035[24]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1045[i + 0]) );
  }
  i1034.excludedVariants = i1044
  i1034.hasDepthReader = !!i1035[25]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1047 = data
  i1046.val = i1047[0]
  i1046.name = i1047[1]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1049 = data
  i1048.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1049[0], i1048.src)
  i1048.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1049[1], i1048.dst)
  i1048.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1049[2], i1048.op)
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1051 = data
  i1050.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[0], i1050.pass)
  i1050.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[1], i1050.fail)
  i1050.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[2], i1050.zFail)
  i1050.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1051[3], i1050.comp)
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1055 = data
  i1054.name = i1055[0]
  i1054.value = i1055[1]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1059 = data
  var i1061 = i1059[0]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( i1061[i + 0] );
  }
  i1058.keywords = i1060
  i1058.hasDiscard = !!i1059[1]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1065 = data
  i1064.passId = i1065[0]
  i1064.subShaderIndex = i1065[1]
  var i1067 = i1065[2]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( i1067[i + 0] );
  }
  i1064.keywords = i1066
  i1064.vertexProgram = i1065[3]
  i1064.fragmentProgram = i1065[4]
  i1064.exportedForWebGl2 = !!i1065[5]
  i1064.readDepth = !!i1065[6]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1071 = data
  request.r(i1071[0], i1071[1], 0, i1070, 'shader')
  i1070.pass = i1071[2]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1075 = data
  i1074.name = i1075[0]
  i1074.type = i1075[1]
  i1074.value = new pc.Vec4( i1075[2], i1075[3], i1075[4], i1075[5] )
  i1074.textureValue = i1075[6]
  i1074.shaderPropertyFlag = i1075[7]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1077 = data
  i1076.name = i1077[0]
  request.r(i1077[1], i1077[2], 0, i1076, 'texture')
  i1076.aabb = i1077[3]
  i1076.vertices = i1077[4]
  i1076.triangles = i1077[5]
  i1076.textureRect = UnityEngine.Rect.MinMaxRect(i1077[6], i1077[7], i1077[8], i1077[9])
  i1076.packedRect = UnityEngine.Rect.MinMaxRect(i1077[10], i1077[11], i1077[12], i1077[13])
  i1076.border = new pc.Vec4( i1077[14], i1077[15], i1077[16], i1077[17] )
  i1076.transparency = i1077[18]
  i1076.bounds = i1077[19]
  i1076.pixelsPerUnit = i1077[20]
  i1076.textureWidth = i1077[21]
  i1076.textureHeight = i1077[22]
  i1076.nativeSize = new pc.Vec2( i1077[23], i1077[24] )
  i1076.pivot = new pc.Vec2( i1077[25], i1077[26] )
  i1076.textureRectOffset = new pc.Vec2( i1077[27], i1077[28] )
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1079 = data
  i1078.name = i1079[0]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1081 = data
  i1080.name = i1081[0]
  i1080.wrapMode = i1081[1]
  i1080.isLooping = !!i1081[2]
  i1080.length = i1081[3]
  var i1083 = i1081[4]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1083[i + 0]) );
  }
  i1080.curves = i1082
  var i1085 = i1081[5]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1085[i + 0]) );
  }
  i1080.events = i1084
  i1080.halfPrecision = !!i1081[6]
  i1080._frameRate = i1081[7]
  i1080.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1081[8], i1080.localBounds)
  i1080.hasMuscleCurves = !!i1081[9]
  var i1087 = i1081[10]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( i1087[i + 0] );
  }
  i1080.clipMuscleConstant = i1086
  i1080.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1081[11], i1080.clipBindingConstant)
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1091 = data
  i1090.path = i1091[0]
  i1090.hash = i1091[1]
  i1090.componentType = i1091[2]
  i1090.property = i1091[3]
  i1090.keys = i1091[4]
  var i1093 = i1091[5]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1093[i + 0]) );
  }
  i1090.objectReferenceKeys = i1092
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1097 = data
  i1096.time = i1097[0]
  request.r(i1097[1], i1097[2], 0, i1096, 'value')
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1101 = data
  i1100.functionName = i1101[0]
  i1100.floatParameter = i1101[1]
  i1100.intParameter = i1101[2]
  i1100.stringParameter = i1101[3]
  request.r(i1101[4], i1101[5], 0, i1100, 'objectReferenceParameter')
  i1100.time = i1101[6]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1103 = data
  i1102.center = new pc.Vec3( i1103[0], i1103[1], i1103[2] )
  i1102.extends = new pc.Vec3( i1103[3], i1103[4], i1103[5] )
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1107 = data
  var i1109 = i1107[0]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( i1109[i + 0] );
  }
  i1106.genericBindings = i1108
  var i1111 = i1107[1]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( i1111[i + 0] );
  }
  i1106.pptrCurveMapping = i1110
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1113 = data
  i1112.name = i1113[0]
  i1112.ascent = i1113[1]
  i1112.originalLineHeight = i1113[2]
  i1112.fontSize = i1113[3]
  var i1115 = i1113[4]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1115[i + 0]) );
  }
  i1112.characterInfo = i1114
  request.r(i1113[5], i1113[6], 0, i1112, 'texture')
  i1112.originalFontSize = i1113[7]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1119 = data
  i1118.index = i1119[0]
  i1118.advance = i1119[1]
  i1118.bearing = i1119[2]
  i1118.glyphWidth = i1119[3]
  i1118.glyphHeight = i1119[4]
  i1118.minX = i1119[5]
  i1118.maxX = i1119[6]
  i1118.minY = i1119[7]
  i1118.maxY = i1119[8]
  i1118.uvBottomLeftX = i1119[9]
  i1118.uvBottomLeftY = i1119[10]
  i1118.uvBottomRightX = i1119[11]
  i1118.uvBottomRightY = i1119[12]
  i1118.uvTopLeftX = i1119[13]
  i1118.uvTopLeftY = i1119[14]
  i1118.uvTopRightX = i1119[15]
  i1118.uvTopRightY = i1119[16]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1121 = data
  i1120.name = i1121[0]
  var i1123 = i1121[1]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1123[i + 0]) );
  }
  i1120.layers = i1122
  var i1125 = i1121[2]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1125[i + 0]) );
  }
  i1120.parameters = i1124
  i1120.animationClips = i1121[3]
  i1120.avatarUnsupported = i1121[4]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1129 = data
  i1128.name = i1129[0]
  i1128.defaultWeight = i1129[1]
  i1128.blendingMode = i1129[2]
  i1128.avatarMask = i1129[3]
  i1128.syncedLayerIndex = i1129[4]
  i1128.syncedLayerAffectsTiming = !!i1129[5]
  i1128.syncedLayers = i1129[6]
  i1128.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1129[7], i1128.stateMachine)
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1131 = data
  i1130.id = i1131[0]
  i1130.name = i1131[1]
  i1130.path = i1131[2]
  var i1133 = i1131[3]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1133[i + 0]) );
  }
  i1130.states = i1132
  var i1135 = i1131[4]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1135[i + 0]) );
  }
  i1130.machines = i1134
  var i1137 = i1131[5]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1137[i + 0]) );
  }
  i1130.entryStateTransitions = i1136
  var i1139 = i1131[6]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1139[i + 0]) );
  }
  i1130.exitStateTransitions = i1138
  var i1141 = i1131[7]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1141[i + 0]) );
  }
  i1130.anyStateTransitions = i1140
  i1130.defaultStateId = i1131[8]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1145 = data
  i1144.id = i1145[0]
  i1144.name = i1145[1]
  i1144.cycleOffset = i1145[2]
  i1144.cycleOffsetParameter = i1145[3]
  i1144.cycleOffsetParameterActive = !!i1145[4]
  i1144.mirror = !!i1145[5]
  i1144.mirrorParameter = i1145[6]
  i1144.mirrorParameterActive = !!i1145[7]
  i1144.motionId = i1145[8]
  i1144.nameHash = i1145[9]
  i1144.fullPathHash = i1145[10]
  i1144.speed = i1145[11]
  i1144.speedParameter = i1145[12]
  i1144.speedParameterActive = !!i1145[13]
  i1144.tag = i1145[14]
  i1144.tagHash = i1145[15]
  i1144.writeDefaultValues = !!i1145[16]
  var i1147 = i1145[17]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 2) {
  request.r(i1147[i + 0], i1147[i + 1], 2, i1146, '')
  }
  i1144.behaviours = i1146
  var i1149 = i1145[18]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1149[i + 0]) );
  }
  i1144.transitions = i1148
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1155 = data
  i1154.fullPath = i1155[0]
  i1154.canTransitionToSelf = !!i1155[1]
  i1154.duration = i1155[2]
  i1154.exitTime = i1155[3]
  i1154.hasExitTime = !!i1155[4]
  i1154.hasFixedDuration = !!i1155[5]
  i1154.interruptionSource = i1155[6]
  i1154.offset = i1155[7]
  i1154.orderedInterruption = !!i1155[8]
  i1154.destinationStateId = i1155[9]
  i1154.isExit = !!i1155[10]
  i1154.mute = !!i1155[11]
  i1154.solo = !!i1155[12]
  var i1157 = i1155[13]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1157[i + 0]) );
  }
  i1154.conditions = i1156
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1163 = data
  i1162.destinationStateId = i1163[0]
  i1162.isExit = !!i1163[1]
  i1162.mute = !!i1163[2]
  i1162.solo = !!i1163[3]
  var i1165 = i1163[4]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1165[i + 0]) );
  }
  i1162.conditions = i1164
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1169 = data
  i1168.mode = i1169[0]
  i1168.parameter = i1169[1]
  i1168.threshold = i1169[2]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1173 = data
  i1172.defaultBool = !!i1173[0]
  i1172.defaultFloat = i1173[1]
  i1172.defaultInt = i1173[2]
  i1172.name = i1173[3]
  i1172.nameHash = i1173[4]
  i1172.type = i1173[5]
  return i1172
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1174 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1175 = data
  i1174.useSafeMode = !!i1175[0]
  i1174.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1175[1], i1174.safeModeOptions)
  i1174.timeScale = i1175[2]
  i1174.unscaledTimeScale = i1175[3]
  i1174.useSmoothDeltaTime = !!i1175[4]
  i1174.maxSmoothUnscaledTime = i1175[5]
  i1174.rewindCallbackMode = i1175[6]
  i1174.showUnityEditorReport = !!i1175[7]
  i1174.logBehaviour = i1175[8]
  i1174.drawGizmos = !!i1175[9]
  i1174.defaultRecyclable = !!i1175[10]
  i1174.defaultAutoPlay = i1175[11]
  i1174.defaultUpdateType = i1175[12]
  i1174.defaultTimeScaleIndependent = !!i1175[13]
  i1174.defaultEaseType = i1175[14]
  i1174.defaultEaseOvershootOrAmplitude = i1175[15]
  i1174.defaultEasePeriod = i1175[16]
  i1174.defaultAutoKill = !!i1175[17]
  i1174.defaultLoopType = i1175[18]
  i1174.debugMode = !!i1175[19]
  i1174.debugStoreTargetId = !!i1175[20]
  i1174.showPreviewPanel = !!i1175[21]
  i1174.storeSettingsLocation = i1175[22]
  i1174.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1175[23], i1174.modules)
  i1174.createASMDEF = !!i1175[24]
  i1174.showPlayingTweens = !!i1175[25]
  i1174.showPausedTweens = !!i1175[26]
  return i1174
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1176 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1177 = data
  i1176.logBehaviour = i1177[0]
  i1176.nestedTweenFailureBehaviour = i1177[1]
  return i1176
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1178 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1179 = data
  i1178.showPanel = !!i1179[0]
  i1178.audioEnabled = !!i1179[1]
  i1178.physicsEnabled = !!i1179[2]
  i1178.physics2DEnabled = !!i1179[3]
  i1178.spriteEnabled = !!i1179[4]
  i1178.uiEnabled = !!i1179[5]
  i1178.textMeshProEnabled = !!i1179[6]
  i1178.tk2DEnabled = !!i1179[7]
  i1178.deAudioEnabled = !!i1179[8]
  i1178.deUnityExtendedEnabled = !!i1179[9]
  i1178.epoOutlineEnabled = !!i1179[10]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1181 = data
  var i1183 = i1181[0]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1183[i + 0]) );
  }
  i1180.files = i1182
  i1180.componentToPrefabIds = i1181[1]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1187 = data
  i1186.path = i1187[0]
  request.r(i1187[1], i1187[2], 0, i1186, 'unityObject')
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1189 = data
  var i1191 = i1189[0]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1191[i + 0]) );
  }
  i1188.scriptsExecutionOrder = i1190
  var i1193 = i1189[1]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1193[i + 0]) );
  }
  i1188.sortingLayers = i1192
  var i1195 = i1189[2]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1195[i + 0]) );
  }
  i1188.cullingLayers = i1194
  i1188.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1189[3], i1188.timeSettings)
  i1188.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1189[4], i1188.physicsSettings)
  i1188.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1189[5], i1188.physics2DSettings)
  i1188.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1189[6], i1188.qualitySettings)
  i1188.enableRealtimeShadows = !!i1189[7]
  i1188.enableAutoInstancing = !!i1189[8]
  i1188.enableStaticBatching = !!i1189[9]
  i1188.enableDynamicBatching = !!i1189[10]
  i1188.usePreservativeDynamicBatching = !!i1189[11]
  i1188.lightmapEncodingQuality = i1189[12]
  i1188.desiredColorSpace = i1189[13]
  var i1197 = i1189[14]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( i1197[i + 0] );
  }
  i1188.allTags = i1196
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1201 = data
  i1200.name = i1201[0]
  i1200.value = i1201[1]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1205 = data
  i1204.id = i1205[0]
  i1204.name = i1205[1]
  i1204.value = i1205[2]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1209 = data
  i1208.id = i1209[0]
  i1208.name = i1209[1]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1211 = data
  i1210.fixedDeltaTime = i1211[0]
  i1210.maximumDeltaTime = i1211[1]
  i1210.timeScale = i1211[2]
  i1210.maximumParticleTimestep = i1211[3]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1213 = data
  i1212.gravity = new pc.Vec3( i1213[0], i1213[1], i1213[2] )
  i1212.defaultSolverIterations = i1213[3]
  i1212.bounceThreshold = i1213[4]
  i1212.autoSyncTransforms = !!i1213[5]
  i1212.autoSimulation = !!i1213[6]
  var i1215 = i1213[7]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1215[i + 0]) );
  }
  i1212.collisionMatrix = i1214
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1219 = data
  i1218.enabled = !!i1219[0]
  i1218.layerId = i1219[1]
  i1218.otherLayerId = i1219[2]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1221 = data
  request.r(i1221[0], i1221[1], 0, i1220, 'material')
  i1220.gravity = new pc.Vec2( i1221[2], i1221[3] )
  i1220.positionIterations = i1221[4]
  i1220.velocityIterations = i1221[5]
  i1220.velocityThreshold = i1221[6]
  i1220.maxLinearCorrection = i1221[7]
  i1220.maxAngularCorrection = i1221[8]
  i1220.maxTranslationSpeed = i1221[9]
  i1220.maxRotationSpeed = i1221[10]
  i1220.baumgarteScale = i1221[11]
  i1220.baumgarteTOIScale = i1221[12]
  i1220.timeToSleep = i1221[13]
  i1220.linearSleepTolerance = i1221[14]
  i1220.angularSleepTolerance = i1221[15]
  i1220.defaultContactOffset = i1221[16]
  i1220.autoSimulation = !!i1221[17]
  i1220.queriesHitTriggers = !!i1221[18]
  i1220.queriesStartInColliders = !!i1221[19]
  i1220.callbacksOnDisable = !!i1221[20]
  i1220.reuseCollisionCallbacks = !!i1221[21]
  i1220.autoSyncTransforms = !!i1221[22]
  var i1223 = i1221[23]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1223[i + 0]) );
  }
  i1220.collisionMatrix = i1222
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1227 = data
  i1226.enabled = !!i1227[0]
  i1226.layerId = i1227[1]
  i1226.otherLayerId = i1227[2]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1229 = data
  var i1231 = i1229[0]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1231[i + 0]) );
  }
  i1228.qualityLevels = i1230
  var i1233 = i1229[1]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( i1233[i + 0] );
  }
  i1228.names = i1232
  i1228.shadows = i1229[2]
  i1228.anisotropicFiltering = i1229[3]
  i1228.antiAliasing = i1229[4]
  i1228.lodBias = i1229[5]
  i1228.shadowCascades = i1229[6]
  i1228.shadowDistance = i1229[7]
  i1228.shadowmaskMode = i1229[8]
  i1228.shadowProjection = i1229[9]
  i1228.shadowResolution = i1229[10]
  i1228.softParticles = !!i1229[11]
  i1228.softVegetation = !!i1229[12]
  i1228.activeColorSpace = i1229[13]
  i1228.desiredColorSpace = i1229[14]
  i1228.masterTextureLimit = i1229[15]
  i1228.maxQueuedFrames = i1229[16]
  i1228.particleRaycastBudget = i1229[17]
  i1228.pixelLightCount = i1229[18]
  i1228.realtimeReflectionProbes = !!i1229[19]
  i1228.shadowCascade2Split = i1229[20]
  i1228.shadowCascade4Split = new pc.Vec3( i1229[21], i1229[22], i1229[23] )
  i1228.streamingMipmapsActive = !!i1229[24]
  i1228.vSyncCount = i1229[25]
  i1228.asyncUploadBufferSize = i1229[26]
  i1228.asyncUploadTimeSlice = i1229[27]
  i1228.billboardsFaceCameraPosition = !!i1229[28]
  i1228.shadowNearPlaneOffset = i1229[29]
  i1228.streamingMipmapsMemoryBudget = i1229[30]
  i1228.maximumLODLevel = i1229[31]
  i1228.streamingMipmapsAddAllCameras = !!i1229[32]
  i1228.streamingMipmapsMaxLevelReduction = i1229[33]
  i1228.streamingMipmapsRenderersPerFrame = i1229[34]
  i1228.resolutionScalingFixedDPIFactor = i1229[35]
  i1228.streamingMipmapsMaxFileIORequests = i1229[36]
  i1228.currentQualityLevel = i1229[37]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i1237 = data
  var i1239 = i1237[0]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i1239[i + 0]) );
  }
  i1236.groups = i1238
  var i1241 = i1237[1]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i1241[i + 0]) );
  }
  i1236.snapshots = i1240
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i1245 = data
  i1244.id = i1245[0]
  i1244.childGroupIds = i1245[1]
  i1244.name = i1245[2]
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i1249 = data
  i1248.id = i1249[0]
  var i1251 = i1249[1]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i1251[i + 0]) );
  }
  i1248.parameters = i1250
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i1255 = data
  i1254.name = i1255[0]
  i1254.value = i1255[1]
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1259 = data
  i1258.weight = i1259[0]
  i1258.vertices = i1259[1]
  i1258.normals = i1259[2]
  i1258.tangents = i1259[3]
  return i1258
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[79],"80":[53],"81":[82],"83":[82],"84":[82],"85":[82],"86":[82],"87":[82],"88":[82],"89":[38],"90":[38],"91":[38],"92":[38],"93":[38],"94":[38],"95":[38],"96":[38],"97":[38],"98":[38],"99":[38],"100":[38],"101":[38],"102":[53],"103":[29],"104":[105],"106":[105],"24":[23],"107":[108],"109":[11],"110":[13],"111":[11],"112":[113],"114":[113],"115":[41],"116":[13],"117":[11],"118":[10],"34":[11],"119":[23],"120":[23],"27":[24],"58":[30,23],"121":[23],"26":[24],"122":[23],"123":[23],"124":[23],"125":[23],"126":[23],"127":[23],"128":[23],"129":[23],"130":[23],"131":[30,23],"132":[23],"133":[23],"134":[23],"135":[23],"12":[30,23],"136":[23],"137":[64],"138":[64],"65":[64],"139":[64],"140":[53],"141":[53]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level1_Cloth_Playable_PlayableStep4","UnityEngine.GameObject","BasicDrag","UnityEngine.SpriteRenderer","UnityEngine.UI.Text","UnityEngine.BoxCollider2D","UnityEngine.AudioClip","BD_CameraFollow","UnityEngine.Sprite","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","RotaryTimerKnob","UnityEngine.MeshRenderer","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteMask","_2dxFX_Wave","BD_Clamp","UnityEngine.Rigidbody2D","PlaceItem","ActionOnTap","DG.Tweening.DOTweenAnimation","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","SewingCol","BD_Progress","BD_Action","UnityEngine.MeshFilter","StaticFixedPipe","BD_SpriteChange","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.UI.Image","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableRouter","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","TeaseTapCTA","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "10/28/2026 09:44:32";

Deserializers.lunaDaysRunning = "28.0";

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

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1762";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4379";

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

Deserializers.buildID = "669bc7af-386d-498d-9737-e56417a8291a";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

