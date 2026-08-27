var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.JointSpring' )
  var i629 = data
  i628.spring = i629[0]
  i628.damper = i629[1]
  i628.targetPosition = i629[2]
  return i628
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.JointMotor' )
  var i631 = data
  i630.m_TargetVelocity = i631[0]
  i630.m_Force = i631[1]
  i630.m_FreeSpin = i631[2]
  return i630
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.JointLimits' )
  var i633 = data
  i632.m_Min = i633[0]
  i632.m_Max = i633[1]
  i632.m_Bounciness = i633[2]
  i632.m_BounceMinVelocity = i633[3]
  i632.m_ContactDistance = i633[4]
  i632.minBounce = i633[5]
  i632.maxBounce = i633[6]
  return i632
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.JointDrive' )
  var i635 = data
  i634.m_PositionSpring = i635[0]
  i634.m_PositionDamper = i635[1]
  i634.m_MaximumForce = i635[2]
  i634.m_UseAcceleration = i635[3]
  return i634
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i637 = data
  i636.m_Spring = i637[0]
  i636.m_Damper = i637[1]
  return i636
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i639 = data
  i638.m_Limit = i639[0]
  i638.m_Bounciness = i639[1]
  i638.m_ContactDistance = i639[2]
  return i638
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i641 = data
  i640.m_ExtremumSlip = i641[0]
  i640.m_ExtremumValue = i641[1]
  i640.m_AsymptoteSlip = i641[2]
  i640.m_AsymptoteValue = i641[3]
  i640.m_Stiffness = i641[4]
  return i640
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i643 = data
  i642.m_LowerAngle = i643[0]
  i642.m_UpperAngle = i643[1]
  return i642
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i645 = data
  i644.m_MotorSpeed = i645[0]
  i644.m_MaximumMotorTorque = i645[1]
  return i644
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i647 = data
  i646.m_DampingRatio = i647[0]
  i646.m_Frequency = i647[1]
  i646.m_Angle = i647[2]
  return i646
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i649 = data
  i648.m_LowerTranslation = i649[0]
  i648.m_UpperTranslation = i649[1]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i650 = root || new pc.UnityMaterial()
  var i651 = data
  i650.name = i651[0]
  request.r(i651[1], i651[2], 0, i650, 'shader')
  i650.renderQueue = i651[3]
  i650.enableInstancing = !!i651[4]
  var i653 = i651[5]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i653[i + 0]) );
  }
  i650.floatParameters = i652
  var i655 = i651[6]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i655[i + 0]) );
  }
  i650.colorParameters = i654
  var i657 = i651[7]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i657[i + 0]) );
  }
  i650.vectorParameters = i656
  var i659 = i651[8]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i659[i + 0]) );
  }
  i650.textureParameters = i658
  var i661 = i651[9]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i661[i + 0]) );
  }
  i650.materialFlags = i660
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i665 = data
  i664.name = i665[0]
  i664.value = i665[1]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i669 = data
  i668.name = i669[0]
  i668.value = new pc.Color(i669[1], i669[2], i669[3], i669[4])
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i673 = data
  i672.name = i673[0]
  i672.value = new pc.Vec4( i673[1], i673[2], i673[3], i673[4] )
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i677 = data
  i676.name = i677[0]
  request.r(i677[1], i677[2], 0, i676, 'value')
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i681 = data
  i680.name = i681[0]
  i680.enabled = !!i681[1]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i683 = data
  i682.name = i683[0]
  i682.width = i683[1]
  i682.height = i683[2]
  i682.mipmapCount = i683[3]
  i682.anisoLevel = i683[4]
  i682.filterMode = i683[5]
  i682.hdr = !!i683[6]
  i682.format = i683[7]
  i682.wrapMode = i683[8]
  i682.alphaIsTransparency = !!i683[9]
  i682.alphaSource = i683[10]
  i682.graphicsFormat = i683[11]
  i682.sRGBTexture = !!i683[12]
  i682.desiredColorSpace = i683[13]
  i682.wrapU = i683[14]
  i682.wrapV = i683[15]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i685 = data
  i684.name = i685[0]
  i684.halfPrecision = !!i685[1]
  i684.useSimplification = !!i685[2]
  i684.useUInt32IndexFormat = !!i685[3]
  i684.vertexCount = i685[4]
  i684.aabb = i685[5]
  var i687 = i685[6]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( !!i687[i + 0] );
  }
  i684.streams = i686
  i684.vertices = i685[7]
  var i689 = i685[8]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i689[i + 0]) );
  }
  i684.subMeshes = i688
  var i691 = i685[9]
  var i690 = []
  for(var i = 0; i < i691.length; i += 16) {
    i690.push( new pc.Mat4().setData(i691[i + 0], i691[i + 1], i691[i + 2], i691[i + 3],  i691[i + 4], i691[i + 5], i691[i + 6], i691[i + 7],  i691[i + 8], i691[i + 9], i691[i + 10], i691[i + 11],  i691[i + 12], i691[i + 13], i691[i + 14], i691[i + 15]) );
  }
  i684.bindposes = i690
  var i693 = i685[10]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i693[i + 0]) );
  }
  i684.blendShapes = i692
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i699 = data
  i698.triangles = i699[0]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i705 = data
  i704.name = i705[0]
  var i707 = i705[1]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i707[i + 0]) );
  }
  i704.frames = i706
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i709 = data
  i708.position = new pc.Vec3( i709[0], i709[1], i709[2] )
  i708.scale = new pc.Vec3( i709[3], i709[4], i709[5] )
  i708.rotation = new pc.Quat(i709[6], i709[7], i709[8], i709[9])
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i711 = data
  i710.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i711[0], i710.main)
  i710.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i711[1], i710.colorBySpeed)
  i710.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i711[2], i710.colorOverLifetime)
  i710.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i711[3], i710.emission)
  i710.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i711[4], i710.rotationBySpeed)
  i710.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i711[5], i710.rotationOverLifetime)
  i710.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i711[6], i710.shape)
  i710.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i711[7], i710.sizeBySpeed)
  i710.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i711[8], i710.sizeOverLifetime)
  i710.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i711[9], i710.textureSheetAnimation)
  i710.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i711[10], i710.velocityOverLifetime)
  i710.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i711[11], i710.noise)
  i710.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i711[12], i710.inheritVelocity)
  i710.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i711[13], i710.forceOverLifetime)
  i710.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i711[14], i710.limitVelocityOverLifetime)
  i710.useAutoRandomSeed = !!i711[15]
  i710.randomSeed = i711[16]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i712 = root || new pc.ParticleSystemMain()
  var i713 = data
  i712.duration = i713[0]
  i712.loop = !!i713[1]
  i712.prewarm = !!i713[2]
  i712.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[3], i712.startDelay)
  i712.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[4], i712.startLifetime)
  i712.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[5], i712.startSpeed)
  i712.startSize3D = !!i713[6]
  i712.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[7], i712.startSizeX)
  i712.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[8], i712.startSizeY)
  i712.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[9], i712.startSizeZ)
  i712.startRotation3D = !!i713[10]
  i712.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[11], i712.startRotationX)
  i712.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[12], i712.startRotationY)
  i712.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[13], i712.startRotationZ)
  i712.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i713[14], i712.startColor)
  i712.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[15], i712.gravityModifier)
  i712.simulationSpace = i713[16]
  request.r(i713[17], i713[18], 0, i712, 'customSimulationSpace')
  i712.simulationSpeed = i713[19]
  i712.useUnscaledTime = !!i713[20]
  i712.scalingMode = i713[21]
  i712.playOnAwake = !!i713[22]
  i712.maxParticles = i713[23]
  i712.emitterVelocityMode = i713[24]
  i712.stopAction = i713[25]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i714 = root || new pc.MinMaxCurve()
  var i715 = data
  i714.mode = i715[0]
  i714.curveMin = new pc.AnimationCurve( { keys_flow: i715[1] } )
  i714.curveMax = new pc.AnimationCurve( { keys_flow: i715[2] } )
  i714.curveMultiplier = i715[3]
  i714.constantMin = i715[4]
  i714.constantMax = i715[5]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i716 = root || new pc.MinMaxGradient()
  var i717 = data
  i716.mode = i717[0]
  i716.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i717[1], i716.gradientMin)
  i716.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i717[2], i716.gradientMax)
  i716.colorMin = new pc.Color(i717[3], i717[4], i717[5], i717[6])
  i716.colorMax = new pc.Color(i717[7], i717[8], i717[9], i717[10])
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i719 = data
  i718.mode = i719[0]
  var i721 = i719[1]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i721[i + 0]) );
  }
  i718.colorKeys = i720
  var i723 = i719[2]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i723[i + 0]) );
  }
  i718.alphaKeys = i722
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i724 = root || new pc.ParticleSystemColorBySpeed()
  var i725 = data
  i724.enabled = !!i725[0]
  i724.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i725[1], i724.color)
  i724.range = new pc.Vec2( i725[2], i725[3] )
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i729 = data
  i728.color = new pc.Color(i729[0], i729[1], i729[2], i729[3])
  i728.time = i729[4]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i733 = data
  i732.alpha = i733[0]
  i732.time = i733[1]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i734 = root || new pc.ParticleSystemColorOverLifetime()
  var i735 = data
  i734.enabled = !!i735[0]
  i734.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i735[1], i734.color)
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i736 = root || new pc.ParticleSystemEmitter()
  var i737 = data
  i736.enabled = !!i737[0]
  i736.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[1], i736.rateOverTime)
  i736.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[2], i736.rateOverDistance)
  var i739 = i737[3]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i739[i + 0]) );
  }
  i736.bursts = i738
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i742 = root || new pc.ParticleSystemBurst()
  var i743 = data
  i742.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[0], i742.count)
  i742.cycleCount = i743[1]
  i742.minCount = i743[2]
  i742.maxCount = i743[3]
  i742.repeatInterval = i743[4]
  i742.time = i743[5]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i744 = root || new pc.ParticleSystemRotationBySpeed()
  var i745 = data
  i744.enabled = !!i745[0]
  i744.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[1], i744.x)
  i744.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[2], i744.y)
  i744.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[3], i744.z)
  i744.separateAxes = !!i745[4]
  i744.range = new pc.Vec2( i745[5], i745[6] )
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemRotationOverLifetime()
  var i747 = data
  i746.enabled = !!i747[0]
  i746.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[1], i746.x)
  i746.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[2], i746.y)
  i746.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[3], i746.z)
  i746.separateAxes = !!i747[4]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i748 = root || new pc.ParticleSystemShape()
  var i749 = data
  i748.enabled = !!i749[0]
  i748.shapeType = i749[1]
  i748.randomDirectionAmount = i749[2]
  i748.sphericalDirectionAmount = i749[3]
  i748.randomPositionAmount = i749[4]
  i748.alignToDirection = !!i749[5]
  i748.radius = i749[6]
  i748.radiusMode = i749[7]
  i748.radiusSpread = i749[8]
  i748.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[9], i748.radiusSpeed)
  i748.radiusThickness = i749[10]
  i748.angle = i749[11]
  i748.length = i749[12]
  i748.boxThickness = new pc.Vec3( i749[13], i749[14], i749[15] )
  i748.meshShapeType = i749[16]
  request.r(i749[17], i749[18], 0, i748, 'mesh')
  request.r(i749[19], i749[20], 0, i748, 'meshRenderer')
  request.r(i749[21], i749[22], 0, i748, 'skinnedMeshRenderer')
  i748.useMeshMaterialIndex = !!i749[23]
  i748.meshMaterialIndex = i749[24]
  i748.useMeshColors = !!i749[25]
  i748.normalOffset = i749[26]
  i748.arc = i749[27]
  i748.arcMode = i749[28]
  i748.arcSpread = i749[29]
  i748.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[30], i748.arcSpeed)
  i748.donutRadius = i749[31]
  i748.position = new pc.Vec3( i749[32], i749[33], i749[34] )
  i748.rotation = new pc.Vec3( i749[35], i749[36], i749[37] )
  i748.scale = new pc.Vec3( i749[38], i749[39], i749[40] )
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i750 = root || new pc.ParticleSystemSizeBySpeed()
  var i751 = data
  i750.enabled = !!i751[0]
  i750.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[1], i750.x)
  i750.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[2], i750.y)
  i750.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[3], i750.z)
  i750.separateAxes = !!i751[4]
  i750.range = new pc.Vec2( i751[5], i751[6] )
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemSizeOverLifetime()
  var i753 = data
  i752.enabled = !!i753[0]
  i752.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[1], i752.x)
  i752.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[2], i752.y)
  i752.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[3], i752.z)
  i752.separateAxes = !!i753[4]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i755 = data
  i754.enabled = !!i755[0]
  i754.mode = i755[1]
  i754.animation = i755[2]
  i754.numTilesX = i755[3]
  i754.numTilesY = i755[4]
  i754.useRandomRow = !!i755[5]
  i754.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[6], i754.frameOverTime)
  i754.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[7], i754.startFrame)
  i754.cycleCount = i755[8]
  i754.rowIndex = i755[9]
  i754.flipU = i755[10]
  i754.flipV = i755[11]
  i754.spriteCount = i755[12]
  var i757 = i755[13]
  var i756 = []
  for(var i = 0; i < i757.length; i += 2) {
  request.r(i757[i + 0], i757[i + 1], 2, i756, '')
  }
  i754.sprites = i756
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i760 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i761 = data
  i760.enabled = !!i761[0]
  i760.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[1], i760.x)
  i760.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[2], i760.y)
  i760.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[3], i760.z)
  i760.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[4], i760.radial)
  i760.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[5], i760.speedModifier)
  i760.space = i761[6]
  i760.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[7], i760.orbitalX)
  i760.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[8], i760.orbitalY)
  i760.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[9], i760.orbitalZ)
  i760.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[10], i760.orbitalOffsetX)
  i760.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[11], i760.orbitalOffsetY)
  i760.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[12], i760.orbitalOffsetZ)
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemNoise()
  var i763 = data
  i762.enabled = !!i763[0]
  i762.separateAxes = !!i763[1]
  i762.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[2], i762.strengthX)
  i762.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[3], i762.strengthY)
  i762.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[4], i762.strengthZ)
  i762.frequency = i763[5]
  i762.damping = !!i763[6]
  i762.octaveCount = i763[7]
  i762.octaveMultiplier = i763[8]
  i762.octaveScale = i763[9]
  i762.quality = i763[10]
  i762.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[11], i762.scrollSpeed)
  i762.scrollSpeedMultiplier = i763[12]
  i762.remapEnabled = !!i763[13]
  i762.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[14], i762.remapX)
  i762.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[15], i762.remapY)
  i762.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[16], i762.remapZ)
  i762.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[17], i762.positionAmount)
  i762.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[18], i762.rotationAmount)
  i762.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[19], i762.sizeAmount)
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemInheritVelocity()
  var i765 = data
  i764.enabled = !!i765[0]
  i764.mode = i765[1]
  i764.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[2], i764.curve)
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemForceOverLifetime()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[1], i766.x)
  i766.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[2], i766.y)
  i766.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[3], i766.z)
  i766.space = i767[4]
  i766.randomized = !!i767[5]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[1], i768.limit)
  i768.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[2], i768.limitX)
  i768.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[3], i768.limitY)
  i768.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[4], i768.limitZ)
  i768.dampen = i769[5]
  i768.separateAxes = !!i769[6]
  i768.space = i769[7]
  i768.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i769[8], i768.drag)
  i768.multiplyDragByParticleSize = !!i769[9]
  i768.multiplyDragByParticleVelocity = !!i769[10]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'mesh')
  i770.meshCount = i771[2]
  i770.activeVertexStreamsCount = i771[3]
  i770.alignment = i771[4]
  i770.renderMode = i771[5]
  i770.sortMode = i771[6]
  i770.lengthScale = i771[7]
  i770.velocityScale = i771[8]
  i770.cameraVelocityScale = i771[9]
  i770.normalDirection = i771[10]
  i770.sortingFudge = i771[11]
  i770.minParticleSize = i771[12]
  i770.maxParticleSize = i771[13]
  i770.pivot = new pc.Vec3( i771[14], i771[15], i771[16] )
  request.r(i771[17], i771[18], 0, i770, 'trailMaterial')
  i770.applyActiveColorSpace = !!i771[19]
  i770.enabled = !!i771[20]
  request.r(i771[21], i771[22], 0, i770, 'sharedMaterial')
  var i773 = i771[23]
  var i772 = []
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 2, i772, '')
  }
  i770.sharedMaterials = i772
  i770.receiveShadows = !!i771[24]
  i770.shadowCastingMode = i771[25]
  i770.sortingLayerID = i771[26]
  i770.sortingOrder = i771[27]
  i770.lightmapIndex = i771[28]
  i770.lightmapSceneIndex = i771[29]
  i770.lightmapScaleOffset = new pc.Vec4( i771[30], i771[31], i771[32], i771[33] )
  i770.lightProbeUsage = i771[34]
  i770.reflectionProbeUsage = i771[35]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i777 = data
  i776.name = i777[0]
  i776.tagId = i777[1]
  i776.enabled = !!i777[2]
  i776.isStatic = !!i777[3]
  i776.layer = i777[4]
  return i776
}

Deserializers["Level3_Manicure_Playable"] = function (request, data, root) {
  var i778 = root || request.c( 'Level3_Manicure_Playable' )
  var i779 = data
  i778.MainZoom = request.d('ZoomPos', i779[0], i778.MainZoom)
  var i781 = i779[1]
  var i780 = []
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 2, i780, '')
  }
  i778.AllBones = i780
  request.r(i779[2], i779[3], 0, i778, 'View1')
  request.r(i779[4], i779[5], 0, i778, 'View2')
  i778.ZoomStep1 = request.d('ZoomPos', i779[6], i778.ZoomStep1)
  request.r(i779[7], i779[8], 0, i778, 'ToolStep1')
  request.r(i779[9], i779[10], 0, i778, 'ToolStep1Body')
  request.r(i779[11], i779[12], 0, i778, 'ToolStep1Tip')
  request.r(i779[13], i779[14], 0, i778, 'ToolStep1CameraFollow')
  request.r(i779[15], i779[16], 0, i778, 'Step1Col')
  request.r(i779[17], i779[18], 0, i778, 'Hairs_1')
  i778.ZoomStep2 = request.d('ZoomPos', i779[19], i778.ZoomStep2)
  i778.ZoomStep2B = request.d('ZoomPos', i779[20], i778.ZoomStep2B)
  request.r(i779[21], i779[22], 0, i778, 'Tool2Holder')
  request.r(i779[23], i779[24], 0, i778, 'Tool2Indication')
  request.r(i779[25], i779[26], 0, i778, 'ToolStep2')
  request.r(i779[27], i779[28], 0, i778, 'ToolStep2Tip')
  request.r(i779[29], i779[30], 0, i778, 'ToolStep2CameraFollow')
  request.r(i779[31], i779[32], 0, i778, 'ToolStep2ToolRotate')
  request.r(i779[33], i779[34], 0, i778, 'Holder1')
  request.r(i779[35], i779[36], 0, i778, 'Holder2')
  request.r(i779[37], i779[38], 0, i778, 'Wipe')
  request.r(i779[39], i779[40], 0, i778, 'BottleAnimator')
  request.r(i779[41], i779[42], 0, i778, 'SpreadOnWipe_2')
  request.r(i779[43], i779[44], 0, i778, 'PolishHolder_2')
  request.r(i779[45], i779[46], 0, i778, 'makeupRemoverSfx')
  i778.ZoomStep3 = request.d('ZoomPos', i779[47], i778.ZoomStep3)
  request.r(i779[48], i779[49], 0, i778, 'ToolStep3')
  request.r(i779[50], i779[51], 0, i778, 'ToolStep3CameraFollow')
  var i783 = i779[52]
  var i782 = []
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 2, i782, '')
  }
  i778.Indications_3 = i782
  request.r(i779[53], i779[54], 0, i778, 'NailsHolder_3')
  i778.levelName = i779[55]
  i778.levelReward = i779[56]
  request.r(i779[57], i779[58], 0, i778, 'LevelIcon')
  request.r(i779[59], i779[60], 0, i778, 'Level_BG')
  var i785 = i779[61]
  var i784 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 1, i784, '')
  }
  i778.ToolIcons = i784
  var i787 = i779[62]
  var i786 = []
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 2, i786, '')
  }
  i778.AllDrags = i786
  var i789 = i779[63]
  var i788 = []
  for(var i = 0; i < i789.length; i += 2) {
  request.r(i789[i + 0], i789[i + 1], 2, i788, '')
  }
  i778.AllSources = i788
  var i791 = i779[64]
  var i790 = []
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 2, i790, '')
  }
  i778.AllScratches = i790
  i778.stepsDone = i779[65]
  i778.levelNo = i779[66]
  i778.partNo = i779[67]
  return i778
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i792 = root || request.c( 'ZoomPos' )
  var i793 = data
  i792.CameraPos = new pc.Vec3( i793[0], i793[1], i793[2] )
  i792.CameraFOV = i793[3]
  return i792
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i806 = root || request.c( 'PlayableCTA' )
  var i807 = data
  i806.trigger = i807[0]
  i806.afterSeconds = i807[1]
  i806.afterTaps = i807[2]
  request.r(i807[3], i807[4], 0, i806, 'scratchProgress')
  i806.scratchIndex = i807[5]
  i806.progressThreshold = i807[6]
  request.r(i807[7], i807[8], 0, i806, 'watchedTool')
  i806.blockInputOnFire = !!i807[9]
  i806.refireOnEveryTap = !!i807[10]
  i806.refireDelay = i807[11]
  i806.showEndCard = !!i807[12]
  request.r(i807[13], i807[14], 0, i806, 'endCard')
  i806.showEndCardOnProgressTrigger = !!i807[15]
  i806.showEndCardOnToolAppearTrigger = !!i807[16]
  i806.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i807[17], i806.onCtaFired)
  i806.logWhenFired = !!i807[18]
  return i806
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

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i830 = root || request.c( 'PlayParticlesOnCollision' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'Target')
  request.r(i831[2], i831[3], 0, i830, 'ParticlePrefab')
  i830.destroyIt = !!i831[4]
  i830.stayAtPlace = !!i831[5]
  i830.disableOnCollision = !!i831[6]
  i830.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i831[7], i830.OnCollisionEvent)
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i833 = data
  i832.radius = i833[0]
  i832.enabled = !!i833[1]
  i832.isTrigger = !!i833[2]
  i832.usedByEffector = !!i833[3]
  i832.density = i833[4]
  i832.offset = new pc.Vec2( i833[5], i833[6] )
  request.r(i833[7], i833[8], 0, i832, 'material')
  return i832
}

Deserializers["ActionOnTriggerStay"] = function (request, data, root) {
  var i834 = root || request.c( 'ActionOnTriggerStay' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'Tip')
  i834.OnEnter = request.d('UnityEngine.Events.UnityEvent', i835[2], i834.OnEnter)
  i834.OnExit = request.d('UnityEngine.Events.UnityEvent', i835[3], i834.OnExit)
  return i834
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'm_ObjectArgument')
  i836.m_ObjectArgumentAssemblyTypeName = i837[2]
  i836.m_IntArgument = i837[3]
  i836.m_FloatArgument = i837[4]
  i836.m_StringArgument = i837[5]
  i836.m_BoolArgument = !!i837[6]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i839 = data
  i838.usedByComposite = !!i839[0]
  i838.autoTiling = !!i839[1]
  var i841 = i839[2]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
  var i843 = i841[i + 0]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
    i842.push( new pc.Vec2( i843[i + 0], i843[i + 1] ) );
  }
    i840.push( i842 );
  }
  i838.points = i840
  i838.enabled = !!i839[3]
  i838.isTrigger = !!i839[4]
  i838.usedByEffector = !!i839[5]
  i838.density = i839[6]
  i838.offset = new pc.Vec2( i839[7], i839[8] )
  request.r(i839[9], i839[10], 0, i838, 'material')
  return i838
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i855 = data
  i854.textureMode = i855[0]
  i854.alignment = i855[1]
  i854.widthCurve = new pc.AnimationCurve( { keys_flow: i855[2] } )
  i854.colorGradient = i855[3] ? new pc.ColorGradient(i855[3][0], i855[3][1], i855[3][2]) : null
  var i857 = i855[4]
  var i856 = []
  for(var i = 0; i < i857.length; i += 3) {
    i856.push( new pc.Vec3( i857[i + 0], i857[i + 1], i857[i + 2] ) );
  }
  i854.positions = i856
  i854.positionCount = i855[5]
  i854.widthMultiplier = i855[6]
  i854.startWidth = i855[7]
  i854.endWidth = i855[8]
  i854.numCornerVertices = i855[9]
  i854.numCapVertices = i855[10]
  i854.useWorldSpace = !!i855[11]
  i854.loop = !!i855[12]
  i854.startColor = new pc.Color(i855[13], i855[14], i855[15], i855[16])
  i854.endColor = new pc.Color(i855[17], i855[18], i855[19], i855[20])
  i854.generateLightingData = !!i855[21]
  i854.enabled = !!i855[22]
  request.r(i855[23], i855[24], 0, i854, 'sharedMaterial')
  var i859 = i855[25]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i854.sharedMaterials = i858
  i854.receiveShadows = !!i855[26]
  i854.shadowCastingMode = i855[27]
  i854.sortingLayerID = i855[28]
  i854.sortingOrder = i855[29]
  i854.lightmapIndex = i855[30]
  i854.lightmapSceneIndex = i855[31]
  i854.lightmapScaleOffset = new pc.Vec4( i855[32], i855[33], i855[34], i855[35] )
  i854.lightProbeUsage = i855[36]
  i854.reflectionProbeUsage = i855[37]
  return i854
}

Deserializers["TextureOffsetScroller"] = function (request, data, root) {
  var i862 = root || request.c( 'TextureOffsetScroller' )
  var i863 = data
  i862.scrollSpeed = new pc.Vec2( i863[0], i863[1] )
  i862.smoothStart = !!i863[2]
  i862.smoothDuration = i863[3]
  i862.textureName = i863[4]
  i862.useSharedMaterial = !!i863[5]
  return i862
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'm_RootBone')
  var i867 = i865[2]
  var i866 = []
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 2, i866, '')
  }
  i864.m_BoneTransforms = i866
  i864.m_AlwaysUpdate = !!i865[3]
  i864.m_AutoRebind = !!i865[4]
  return i864
}

Deserializers["InteractableBones"] = function (request, data, root) {
  var i870 = root || request.c( 'InteractableBones' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'Tip')
  i870.MoveAmount = i871[2]
  i870.MoveSpeed = i871[3]
  i870.ShakeSpeed = i871[4]
  i870.MovementThreshold = i871[5]
  i870.MoveX = !!i871[6]
  i870.MoveY = !!i871[7]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'animatorController')
  request.r(i873[2], i873[3], 0, i872, 'avatar')
  i872.updateMode = i873[4]
  i872.hasTransformHierarchy = !!i873[5]
  i872.applyRootMotion = !!i873[6]
  var i875 = i873[7]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i872.humanBones = i874
  i872.enabled = !!i873[8]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i877 = data
  i876.frontSortingLayerID = i877[0]
  i876.frontSortingOrder = i877[1]
  i876.backSortingLayerID = i877[2]
  i876.backSortingOrder = i877[3]
  i876.alphaCutoff = i877[4]
  request.r(i877[5], i877[6], 0, i876, 'sprite')
  i876.tileMode = i877[7]
  i876.isCustomRangeActive = !!i877[8]
  i876.spriteSortPoint = i877[9]
  i876.enabled = !!i877[10]
  request.r(i877[11], i877[12], 0, i876, 'sharedMaterial')
  var i879 = i877[13]
  var i878 = []
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 2, i878, '')
  }
  i876.sharedMaterials = i878
  i876.receiveShadows = !!i877[14]
  i876.shadowCastingMode = i877[15]
  i876.sortingLayerID = i877[16]
  i876.sortingOrder = i877[17]
  i876.lightmapIndex = i877[18]
  i876.lightmapSceneIndex = i877[19]
  i876.lightmapScaleOffset = new pc.Vec4( i877[20], i877[21], i877[22], i877[23] )
  i876.lightProbeUsage = i877[24]
  i876.reflectionProbeUsage = i877[25]
  return i876
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i880 = root || request.c( 'ActionOnTap' )
  var i881 = data
  i880.OnTap = request.d('UnityEngine.Events.UnityEvent', i881[0], i880.OnTap)
  i880.OnTapExtra = request.d('System.Action', i881[1], i880.OnTapExtra)
  return i880
}

Deserializers["System.Action"] = function (request, data, root) {
  var i882 = root || request.c( 'System.Action' )
  var i883 = data
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

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i886 = root || request.c( 'BD_AnimationHelper' )
  var i887 = data
  i886.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i887[0], i886.OnAnimationComplete)
  request.r(i887[1], i887[2], 0, i886, 'sfxClip')
  return i886
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i888 = root || request.c( 'BasicDrag' )
  var i889 = data
  i888.canDrag = !!i889[0]
  i888.dragByDelta = !!i889[1]
  i888.isDragging = !!i889[2]
  i888.moveWithPointer = !!i889[3]
  i888.canReturn = !!i889[4]
  i888.jumpOnReturn = !!i889[5]
  i888.returnTime = i889[6]
  i888.Tool_Offset = new pc.Vec3( i889[7], i889[8], i889[9] )
  i888.canScaleIncrease = !!i889[10]
  i888.Self_ScaleNew = new pc.Vec3( i889[11], i889[12], i889[13] )
  i888.canRotateOnPick = !!i889[14]
  i888.startRot = new pc.Vec3( i889[15], i889[16], i889[17] )
  i888.newRot = new pc.Vec3( i889[18], i889[19], i889[20] )
  var i891 = i889[21]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i888.childSprite = i890
  request.r(i889[22], i889[23], 0, i888, 'ToolSelectClip')
  request.r(i889[24], i889[25], 0, i888, 'ToolLoopClip')
  request.r(i889[26], i889[27], 0, i888, 'thisParticles')
  i888.onDragparticle = !!i889[28]
  request.r(i889[29], i889[30], 0, i888, 'dragParticles')
  request.r(i889[31], i889[32], 0, i888, 'anim')
  i888.startPos = new pc.Vec3( i889[33], i889[34], i889[35] )
  i888.startScale = new pc.Vec3( i889[36], i889[37], i889[38] )
  i888.Vibration = !!i889[39]
  i888.isPlacedCannotMove = !!i889[40]
  i888.isObjectMovingWhileDragging = !!i889[41]
  i888.OnMouseDownEvent = request.d('System.Action', i889[42], i888.OnMouseDownEvent)
  i888.OnMouseUpEvent = request.d('System.Action', i889[43], i888.OnMouseUpEvent)
  i888.ProgStartEvent = request.d('System.Action', i889[44], i888.ProgStartEvent)
  i888.ProgEndEvent = request.d('System.Action', i889[45], i888.ProgEndEvent)
  i888.canCallMouseUpWhenGamePaused = !!i889[46]
  i888.ClampX_L = i889[47]
  i888.ClampX_H = i889[48]
  i888.ClampY_L = i889[49]
  i888.ClampY_H = i889[50]
  i888.startOrder = i889[51]
  i888.dontResetItIsInCollider = !!i889[52]
  request.r(i889[53], i889[54], 0, i888, 'thisCollider')
  request.r(i889[55], i889[56], 0, i888, 'thisSR')
  i888.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i889[57], i888.OnMouseDownEventIndependentFromCanDrag)
  return i888
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i894 = root || request.c( 'BD_Progress' )
  var i895 = data
  var i897 = i895[0]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('ScratchData', i897[i + 0]) );
  }
  i894.AllScratches = i896
  i894.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i895[1], i894.OnScratchComplete)
  i894.isProgDone = !!i895[2]
  i894.canCallComplete = !!i895[3]
  i894.CollectiveAppear = !!i895[4]
  i894.tipControl = !!i895[5]
  i894.progressControl = !!i895[6]
  request.r(i895[7], i895[8], 0, i894, 'thisDrag')
  i894.CompleteEvent = request.d('System.Action', i895[9], i894.CompleteEvent)
  i894.SubCompleteEvent = request.d('System.Action', i895[10], i894.SubCompleteEvent)
  return i894
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i900 = root || request.c( 'ScratchData' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'ScratchManager')
  i900.scratchLimit = i901[2]
  i900.isComplete = !!i901[3]
  return i900
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i902 = root || request.c( 'BD_Clamp' )
  var i903 = data
  i902.ClampX_L = i903[0]
  i902.ClampX_H = i903[1]
  i902.ClampY_L = i903[2]
  i902.ClampY_H = i903[3]
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

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i908 = root || request.c( 'BD_ProgressHelper' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'BD_Progress')
  request.r(i909[2], i909[3], 0, i908, 'fadeSprite')
  i908.fadeIn = !!i909[4]
  return i908
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i910 = root || request.c( 'BD_ToolRotate' )
  var i911 = data
  i910.startDelay = i911[0]
  request.r(i911[1], i911[2], 0, i910, 'Tool')
  request.r(i911[3], i911[4], 0, i910, 'Clamp')
  request.r(i911[5], i911[6], 0, i910, 'Pivot')
  i910.MinAngle = new pc.Vec3( i911[7], i911[8], i911[9] )
  i910.MaxAngle = new pc.Vec3( i911[10], i911[11], i911[12] )
  i910.rotationSpeed = i911[13]
  return i910
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i912 = root || request.c( 'BD_Action' )
  var i913 = data
  i912.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i913[0], i912.OnMouseDownEvent)
  i912.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i913[1], i912.OnMouseUpEvent)
  i912.setToolLayer = !!i913[2]
  request.r(i913[3], i913[4], 0, i912, 'tool_SP')
  return i912
}

Deserializers["Lvl3_NailTrim"] = function (request, data, root) {
  var i914 = root || request.c( 'Lvl3_NailTrim' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'Tool')
  request.r(i915[2], i915[3], 0, i914, 'thisCol')
  var i917 = i915[4]
  var i916 = []
  for(var i = 0; i < i917.length; i += 2) {
  request.r(i917[i + 0], i917[i + 1], 2, i916, '')
  }
  i914.Targets = i916
  var i919 = i915[5]
  var i918 = []
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 2, i918, '')
  }
  i914.Nails = i918
  var i921 = i915[6]
  var i920 = []
  for(var i = 0; i < i921.length; i += 2) {
  request.r(i921[i + 0], i921[i + 1], 2, i920, '')
  }
  i914.NailParticles = i920
  var i923 = i915[7]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( !!i923[i + 0] );
  }
  i914.NailsStatus = i922
  i914.OnComplete = request.d('UnityEngine.Events.UnityEvent', i915[8], i914.OnComplete)
  request.r(i915[9], i915[10], 0, i914, 'TrimClip')
  return i914
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i926 = root || request.c( 'DestroyObj' )
  var i927 = data
  i926.destroyDelay = i927[0]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i929 = data
  i928.name = i929[0]
  i928.atlasId = i929[1]
  i928.mipmapCount = i929[2]
  i928.hdr = !!i929[3]
  i928.size = i929[4]
  i928.anisoLevel = i929[5]
  i928.filterMode = i929[6]
  var i931 = i929[7]
  var i930 = []
  for(var i = 0; i < i931.length; i += 4) {
    i930.push( UnityEngine.Rect.MinMaxRect(i931[i + 0], i931[i + 1], i931[i + 2], i931[i + 3]) );
  }
  i928.rects = i930
  i928.wrapU = i929[8]
  i928.wrapV = i929[9]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i935 = data
  i934.name = i935[0]
  i934.index = i935[1]
  i934.startup = !!i935[2]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i937 = data
  i936.aspect = i937[0]
  i936.orthographic = !!i937[1]
  i936.orthographicSize = i937[2]
  i936.backgroundColor = new pc.Color(i937[3], i937[4], i937[5], i937[6])
  i936.nearClipPlane = i937[7]
  i936.farClipPlane = i937[8]
  i936.fieldOfView = i937[9]
  i936.depth = i937[10]
  i936.clearFlags = i937[11]
  i936.cullingMask = i937[12]
  i936.rect = i937[13]
  request.r(i937[14], i937[15], 0, i936, 'targetTexture')
  i936.usePhysicalProperties = !!i937[16]
  i936.focalLength = i937[17]
  i936.sensorSize = new pc.Vec2( i937[18], i937[19] )
  i936.lensShift = new pc.Vec2( i937[20], i937[21] )
  i936.gateFit = i937[22]
  i936.commandBufferCount = i937[23]
  i936.cameraType = i937[24]
  i936.enabled = !!i937[25]
  return i936
}

Deserializers["CameraController"] = function (request, data, root) {
  var i938 = root || request.c( 'CameraController' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'cam')
  i938.defaultPosition = new pc.Vec3( i939[2], i939[3], i939[4] )
  i938.defaultSize = i939[5]
  i938.defaultFOV = i939[6]
  i938.defaultDuration = i939[7]
  i938.defaultEase = i939[8]
  return i938
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i940 = root || request.c( 'MusicSource' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'source')
  return i940
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i942 = root || request.c( 'UI_Manager' )
  var i943 = data
  i942.levelCompleted = !!i943[0]
  i942.isPauseActive = !!i943[1]
  i942.loadIndex = i943[2]
  request.r(i943[3], i943[4], 0, i942, 'removeAdsButton')
  request.r(i943[5], i943[6], 0, i942, 'pauseButton')
  request.r(i943[7], i943[8], 0, i942, 'Fade_Img')
  request.r(i943[9], i943[10], 0, i942, 'TopBarAnim')
  request.r(i943[11], i943[12], 0, i942, 'MainPanel')
  request.r(i943[13], i943[14], 0, i942, 'PausePanel')
  request.r(i943[15], i943[16], 0, i942, 'PausePopUp')
  request.r(i943[17], i943[18], 0, i942, 'PauseCanvasGroup')
  request.r(i943[19], i943[20], 0, i942, 'RateUsPanel')
  request.r(i943[21], i943[22], 0, i942, 'RateUsPopUp')
  request.r(i943[23], i943[24], 0, i942, 'RemoveAdsPanel')
  request.r(i943[25], i943[26], 0, i942, 'RemoveAdsPopUp')
  request.r(i943[27], i943[28], 0, i942, 'RemoveAdsCanvasGroup')
  var i945 = i943[29]
  var i944 = []
  for(var i = 0; i < i945.length; i += 2) {
  request.r(i945[i + 0], i945[i + 1], 2, i944, '')
  }
  i942.RemoveAdsAnims = i944
  request.r(i943[30], i943[31], 0, i942, 'CompletePanel')
  request.r(i943[32], i943[33], 0, i942, 'LevelIcon')
  request.r(i943[34], i943[35], 0, i942, 'CompleteParticles')
  request.r(i943[36], i943[37], 0, i942, 'progressBar')
  request.r(i943[38], i943[39], 0, i942, 'progressText')
  request.r(i943[40], i943[41], 0, i942, 'toolIcon1')
  request.r(i943[42], i943[43], 0, i942, 'toolIcon2')
  request.r(i943[44], i943[45], 0, i942, 'toolIcon3')
  request.r(i943[46], i943[47], 0, i942, 'target1')
  request.r(i943[48], i943[49], 0, i942, 'target2')
  i942.toolMoveDuration = i943[50]
  i942.currentIndex = i943[51]
  var i947 = i943[52]
  var i946 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i947.length; i += 2) {
  request.r(i947[i + 0], i947[i + 1], 1, i946, '')
  }
  i942.allTools = i946
  request.r(i943[53], i943[54], 0, i942, 'clockProgress')
  request.r(i943[55], i943[56], 0, i942, 'clockProgressFill')
  request.r(i943[57], i943[58], 0, i942, 'clockAudio')
  i942.moveDistance = i943[59]
  i942.animationDuration = i943[60]
  i942.greyBgChildName = i943[61]
  i942.pushOffset = i943[62]
  return i942
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i950 = root || request.c( 'GameManagerPlayable' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'endParticles')
  request.r(i951[2], i951[3], 0, i950, 'stepCompleteParticles')
  request.r(i951[4], i951[5], 0, i950, 'DefaultMat')
  request.r(i951[6], i951[7], 0, i950, 'BG_Music')
  request.r(i951[8], i951[9], 0, i950, 'restoreEffectShader')
  request.r(i951[10], i951[11], 0, i950, 'stickerEffectShader')
  i950.isComplete = !!i951[12]
  i950.isPaused = !!i951[13]
  request.r(i951[14], i951[15], 0, i950, 'currentLevel')
  return i950
}

Deserializers["AudioController"] = function (request, data, root) {
  var i952 = root || request.c( 'AudioController' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'MainMixer')
  request.r(i953[2], i953[3], 0, i952, 'UiClick')
  request.r(i953[4], i953[5], 0, i952, 'UiClickSource')
  var i955 = i953[6]
  var i954 = []
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 2, i954, '')
  }
  i952.SfxSources = i954
  var i957 = i953[7]
  var i956 = []
  for(var i = 0; i < i957.length; i += 2) {
  request.r(i957[i + 0], i957[i + 1], 2, i956, '')
  }
  i952.AllClips = i956
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i961 = data
  i960.pivot = new pc.Vec2( i961[0], i961[1] )
  i960.anchorMin = new pc.Vec2( i961[2], i961[3] )
  i960.anchorMax = new pc.Vec2( i961[4], i961[5] )
  i960.sizeDelta = new pc.Vec2( i961[6], i961[7] )
  i960.anchoredPosition3D = new pc.Vec3( i961[8], i961[9], i961[10] )
  i960.rotation = new pc.Quat(i961[11], i961[12], i961[13], i961[14])
  i960.scale = new pc.Vec3( i961[15], i961[16], i961[17] )
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i963 = data
  i962.planeDistance = i963[0]
  i962.referencePixelsPerUnit = i963[1]
  i962.isFallbackOverlay = !!i963[2]
  i962.renderMode = i963[3]
  i962.renderOrder = i963[4]
  i962.sortingLayerName = i963[5]
  i962.sortingOrder = i963[6]
  i962.scaleFactor = i963[7]
  request.r(i963[8], i963[9], 0, i962, 'worldCamera')
  i962.overrideSorting = !!i963[10]
  i962.pixelPerfect = !!i963[11]
  i962.targetDisplay = i963[12]
  i962.overridePixelPerfect = !!i963[13]
  i962.enabled = !!i963[14]
  return i962
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i965 = data
  i964.m_UiScaleMode = i965[0]
  i964.m_ReferencePixelsPerUnit = i965[1]
  i964.m_ScaleFactor = i965[2]
  i964.m_ReferenceResolution = new pc.Vec2( i965[3], i965[4] )
  i964.m_ScreenMatchMode = i965[5]
  i964.m_MatchWidthOrHeight = i965[6]
  i964.m_PhysicalUnit = i965[7]
  i964.m_FallbackScreenDPI = i965[8]
  i964.m_DefaultSpriteDPI = i965[9]
  i964.m_DynamicPixelsPerUnit = i965[10]
  i964.m_PresetInfoIsWorld = !!i965[11]
  return i964
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i967 = data
  i966.m_IgnoreReversedGraphics = !!i967[0]
  i966.m_BlockingObjects = i967[1]
  i966.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i967[2] )
  return i966
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i968 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i969 = data
  i968.targetIsSelf = !!i969[0]
  request.r(i969[1], i969[2], 0, i968, 'targetGO')
  i968.tweenTargetIsTargetGO = !!i969[3]
  i968.delay = i969[4]
  i968.duration = i969[5]
  i968.easeType = i969[6]
  i968.easeCurve = new pc.AnimationCurve( { keys_flow: i969[7] } )
  i968.loopType = i969[8]
  i968.loops = i969[9]
  i968.id = i969[10]
  i968.isRelative = !!i969[11]
  i968.isFrom = !!i969[12]
  i968.isIndependentUpdate = !!i969[13]
  i968.autoKill = !!i969[14]
  i968.autoGenerate = !!i969[15]
  i968.isActive = !!i969[16]
  i968.isValid = !!i969[17]
  request.r(i969[18], i969[19], 0, i968, 'target')
  i968.animationType = i969[20]
  i968.targetType = i969[21]
  i968.forcedTargetType = i969[22]
  i968.autoPlay = !!i969[23]
  i968.useTargetAsV3 = !!i969[24]
  i968.endValueFloat = i969[25]
  i968.endValueV3 = new pc.Vec3( i969[26], i969[27], i969[28] )
  i968.endValueV2 = new pc.Vec2( i969[29], i969[30] )
  i968.endValueColor = new pc.Color(i969[31], i969[32], i969[33], i969[34])
  i968.endValueString = i969[35]
  i968.endValueRect = UnityEngine.Rect.MinMaxRect(i969[36], i969[37], i969[38], i969[39])
  request.r(i969[40], i969[41], 0, i968, 'endValueTransform')
  i968.optionalBool0 = !!i969[42]
  i968.optionalBool1 = !!i969[43]
  i968.optionalFloat0 = i969[44]
  i968.optionalInt0 = i969[45]
  i968.optionalRotationMode = i969[46]
  i968.optionalScrambleMode = i969[47]
  i968.optionalShakeRandomnessMode = i969[48]
  i968.optionalString = i969[49]
  i968.updateType = i969[50]
  i968.isSpeedBased = !!i969[51]
  i968.hasOnStart = !!i969[52]
  i968.hasOnPlay = !!i969[53]
  i968.hasOnUpdate = !!i969[54]
  i968.hasOnStepComplete = !!i969[55]
  i968.hasOnComplete = !!i969[56]
  i968.hasOnTweenCreated = !!i969[57]
  i968.hasOnRewind = !!i969[58]
  i968.onStart = request.d('UnityEngine.Events.UnityEvent', i969[59], i968.onStart)
  i968.onPlay = request.d('UnityEngine.Events.UnityEvent', i969[60], i968.onPlay)
  i968.onUpdate = request.d('UnityEngine.Events.UnityEvent', i969[61], i968.onUpdate)
  i968.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i969[62], i968.onStepComplete)
  i968.onComplete = request.d('UnityEngine.Events.UnityEvent', i969[63], i968.onComplete)
  i968.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i969[64], i968.onTweenCreated)
  i968.onRewind = request.d('UnityEngine.Events.UnityEvent', i969[65], i968.onRewind)
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i971 = data
  i970.cullTransparentMesh = !!i971[0]
  return i970
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i972 = root || request.c( 'UnityEngine.UI.Image' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'm_Sprite')
  i972.m_Type = i973[2]
  i972.m_PreserveAspect = !!i973[3]
  i972.m_FillCenter = !!i973[4]
  i972.m_FillMethod = i973[5]
  i972.m_FillAmount = i973[6]
  i972.m_FillClockwise = !!i973[7]
  i972.m_FillOrigin = i973[8]
  i972.m_UseSpriteMesh = !!i973[9]
  i972.m_PixelsPerUnitMultiplier = i973[10]
  request.r(i973[11], i973[12], 0, i972, 'm_Material')
  i972.m_Maskable = !!i973[13]
  i972.m_Color = new pc.Color(i973[14], i973[15], i973[16], i973[17])
  i972.m_RaycastTarget = !!i973[18]
  i972.m_RaycastPadding = new pc.Vec4( i973[19], i973[20], i973[21], i973[22] )
  return i972
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.UI.Text' )
  var i975 = data
  i974.m_FontData = request.d('UnityEngine.UI.FontData', i975[0], i974.m_FontData)
  i974.m_Text = i975[1]
  request.r(i975[2], i975[3], 0, i974, 'm_Material')
  i974.m_Maskable = !!i975[4]
  i974.m_Color = new pc.Color(i975[5], i975[6], i975[7], i975[8])
  i974.m_RaycastTarget = !!i975[9]
  i974.m_RaycastPadding = new pc.Vec4( i975[10], i975[11], i975[12], i975[13] )
  return i974
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.UI.FontData' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'm_Font')
  i976.m_FontSize = i977[2]
  i976.m_FontStyle = i977[3]
  i976.m_BestFit = !!i977[4]
  i976.m_MinSize = i977[5]
  i976.m_MaxSize = i977[6]
  i976.m_Alignment = i977[7]
  i976.m_AlignByGeometry = !!i977[8]
  i976.m_RichText = !!i977[9]
  i976.m_HorizontalOverflow = i977[10]
  i976.m_VerticalOverflow = i977[11]
  i976.m_LineSpacing = i977[12]
  return i976
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i978 = root || request.c( 'UnityEngine.UI.Button' )
  var i979 = data
  i978.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i979[0], i978.m_OnClick)
  i978.m_Navigation = request.d('UnityEngine.UI.Navigation', i979[1], i978.m_Navigation)
  i978.m_Transition = i979[2]
  i978.m_Colors = request.d('UnityEngine.UI.ColorBlock', i979[3], i978.m_Colors)
  i978.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i979[4], i978.m_SpriteState)
  i978.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i979[5], i978.m_AnimationTriggers)
  i978.m_Interactable = !!i979[6]
  request.r(i979[7], i979[8], 0, i978, 'm_TargetGraphic')
  return i978
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i981 = data
  i980.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i981[0], i980.m_PersistentCalls)
  return i980
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i983 = data
  i982.m_Mode = i983[0]
  i982.m_WrapAround = !!i983[1]
  request.r(i983[2], i983[3], 0, i982, 'm_SelectOnUp')
  request.r(i983[4], i983[5], 0, i982, 'm_SelectOnDown')
  request.r(i983[6], i983[7], 0, i982, 'm_SelectOnLeft')
  request.r(i983[8], i983[9], 0, i982, 'm_SelectOnRight')
  return i982
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i984 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i985 = data
  i984.m_NormalColor = new pc.Color(i985[0], i985[1], i985[2], i985[3])
  i984.m_HighlightedColor = new pc.Color(i985[4], i985[5], i985[6], i985[7])
  i984.m_PressedColor = new pc.Color(i985[8], i985[9], i985[10], i985[11])
  i984.m_SelectedColor = new pc.Color(i985[12], i985[13], i985[14], i985[15])
  i984.m_DisabledColor = new pc.Color(i985[16], i985[17], i985[18], i985[19])
  i984.m_ColorMultiplier = i985[20]
  i984.m_FadeDuration = i985[21]
  return i984
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i986 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'm_HighlightedSprite')
  request.r(i987[2], i987[3], 0, i986, 'm_PressedSprite')
  request.r(i987[4], i987[5], 0, i986, 'm_SelectedSprite')
  request.r(i987[6], i987[7], 0, i986, 'm_DisabledSprite')
  return i986
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i989 = data
  i988.m_NormalTrigger = i989[0]
  i988.m_HighlightedTrigger = i989[1]
  i988.m_PressedTrigger = i989[2]
  i988.m_SelectedTrigger = i989[3]
  i988.m_DisabledTrigger = i989[4]
  return i988
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i990 = root || request.c( 'PlayableHudRuntime' )
  var i991 = data
  return i990
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i992 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'm_FirstSelected')
  i992.m_sendNavigationEvents = !!i993[2]
  i992.m_DragThreshold = i993[3]
  return i992
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i995 = data
  i994.m_HorizontalAxis = i995[0]
  i994.m_VerticalAxis = i995[1]
  i994.m_SubmitButton = i995[2]
  i994.m_CancelButton = i995[3]
  i994.m_InputActionsPerSecond = i995[4]
  i994.m_RepeatDelay = i995[5]
  i994.m_ForceModuleActive = !!i995[6]
  i994.m_SendPointerHoverToParent = !!i995[7]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i997 = data
  i996.ambientIntensity = i997[0]
  i996.reflectionIntensity = i997[1]
  i996.ambientMode = i997[2]
  i996.ambientLight = new pc.Color(i997[3], i997[4], i997[5], i997[6])
  i996.ambientSkyColor = new pc.Color(i997[7], i997[8], i997[9], i997[10])
  i996.ambientGroundColor = new pc.Color(i997[11], i997[12], i997[13], i997[14])
  i996.ambientEquatorColor = new pc.Color(i997[15], i997[16], i997[17], i997[18])
  i996.fogColor = new pc.Color(i997[19], i997[20], i997[21], i997[22])
  i996.fogEndDistance = i997[23]
  i996.fogStartDistance = i997[24]
  i996.fogDensity = i997[25]
  i996.fog = !!i997[26]
  request.r(i997[27], i997[28], 0, i996, 'skybox')
  i996.fogMode = i997[29]
  var i999 = i997[30]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i999[i + 0]) );
  }
  i996.lightmaps = i998
  i996.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i997[31], i996.lightProbes)
  i996.lightmapsMode = i997[32]
  i996.mixedBakeMode = i997[33]
  i996.environmentLightingMode = i997[34]
  i996.ambientProbe = new pc.SphericalHarmonicsL2(i997[35])
  request.r(i997[36], i997[37], 0, i996, 'customReflection')
  request.r(i997[38], i997[39], 0, i996, 'defaultReflection')
  i996.defaultReflectionMode = i997[40]
  i996.defaultReflectionResolution = i997[41]
  i996.sunLightObjectId = i997[42]
  i996.pixelLightCount = i997[43]
  i996.defaultReflectionHDR = !!i997[44]
  i996.hasLightDataAsset = !!i997[45]
  i996.hasManualGenerate = !!i997[46]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'lightmapColor')
  request.r(i1003[2], i1003[3], 0, i1002, 'lightmapDirection')
  request.r(i1003[4], i1003[5], 0, i1002, 'shadowMask')
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1004 = root || new UnityEngine.LightProbes()
  var i1005 = data
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1011 = data
  var i1013 = i1011[0]
  var i1012 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1013[i + 0]));
  }
  i1010.ShaderCompilationErrors = i1012
  i1010.name = i1011[1]
  i1010.guid = i1011[2]
  var i1015 = i1011[3]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( i1015[i + 0] );
  }
  i1010.shaderDefinedKeywords = i1014
  var i1017 = i1011[4]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1017[i + 0]) );
  }
  i1010.passes = i1016
  var i1019 = i1011[5]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1019[i + 0]) );
  }
  i1010.usePasses = i1018
  var i1021 = i1011[6]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1021[i + 0]) );
  }
  i1010.defaultParameterValues = i1020
  request.r(i1011[7], i1011[8], 0, i1010, 'unityFallbackShader')
  i1010.readDepth = !!i1011[9]
  i1010.hasDepthOnlyPass = !!i1011[10]
  i1010.isCreatedByShaderGraph = !!i1011[11]
  i1010.disableBatching = !!i1011[12]
  i1010.compiled = !!i1011[13]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1025 = data
  i1024.shaderName = i1025[0]
  i1024.errorMessage = i1025[1]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1030 = root || new pc.UnityShaderPass()
  var i1031 = data
  i1030.id = i1031[0]
  i1030.subShaderIndex = i1031[1]
  i1030.name = i1031[2]
  i1030.passType = i1031[3]
  i1030.grabPassTextureName = i1031[4]
  i1030.usePass = !!i1031[5]
  i1030.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1031[6], i1030.zTest)
  i1030.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1031[7], i1030.zWrite)
  i1030.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1031[8], i1030.culling)
  i1030.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1031[9], i1030.blending)
  i1030.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1031[10], i1030.alphaBlending)
  i1030.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1031[11], i1030.colorWriteMask)
  i1030.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1031[12], i1030.offsetUnits)
  i1030.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1031[13], i1030.offsetFactor)
  i1030.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1031[14], i1030.stencilRef)
  i1030.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1031[15], i1030.stencilReadMask)
  i1030.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1031[16], i1030.stencilWriteMask)
  i1030.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1031[17], i1030.stencilOp)
  i1030.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1031[18], i1030.stencilOpFront)
  i1030.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1031[19], i1030.stencilOpBack)
  var i1033 = i1031[20]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1033[i + 0]) );
  }
  i1030.tags = i1032
  var i1035 = i1031[21]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( i1035[i + 0] );
  }
  i1030.passDefinedKeywords = i1034
  var i1037 = i1031[22]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1037[i + 0]) );
  }
  i1030.passDefinedKeywordGroups = i1036
  var i1039 = i1031[23]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1039[i + 0]) );
  }
  i1030.variants = i1038
  var i1041 = i1031[24]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1041[i + 0]) );
  }
  i1030.excludedVariants = i1040
  i1030.hasDepthReader = !!i1031[25]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1043 = data
  i1042.val = i1043[0]
  i1042.name = i1043[1]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1045 = data
  i1044.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[0], i1044.src)
  i1044.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[1], i1044.dst)
  i1044.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1045[2], i1044.op)
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1047 = data
  i1046.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[0], i1046.pass)
  i1046.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[1], i1046.fail)
  i1046.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[2], i1046.zFail)
  i1046.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1047[3], i1046.comp)
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1051 = data
  i1050.name = i1051[0]
  i1050.value = i1051[1]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1055 = data
  var i1057 = i1055[0]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( i1057[i + 0] );
  }
  i1054.keywords = i1056
  i1054.hasDiscard = !!i1055[1]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1061 = data
  i1060.passId = i1061[0]
  i1060.subShaderIndex = i1061[1]
  var i1063 = i1061[2]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( i1063[i + 0] );
  }
  i1060.keywords = i1062
  i1060.vertexProgram = i1061[3]
  i1060.fragmentProgram = i1061[4]
  i1060.exportedForWebGl2 = !!i1061[5]
  i1060.readDepth = !!i1061[6]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1067 = data
  request.r(i1067[0], i1067[1], 0, i1066, 'shader')
  i1066.pass = i1067[2]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1071 = data
  i1070.name = i1071[0]
  i1070.type = i1071[1]
  i1070.value = new pc.Vec4( i1071[2], i1071[3], i1071[4], i1071[5] )
  i1070.textureValue = i1071[6]
  i1070.shaderPropertyFlag = i1071[7]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1073 = data
  i1072.name = i1073[0]
  request.r(i1073[1], i1073[2], 0, i1072, 'texture')
  i1072.aabb = i1073[3]
  i1072.vertices = i1073[4]
  i1072.triangles = i1073[5]
  i1072.textureRect = UnityEngine.Rect.MinMaxRect(i1073[6], i1073[7], i1073[8], i1073[9])
  i1072.packedRect = UnityEngine.Rect.MinMaxRect(i1073[10], i1073[11], i1073[12], i1073[13])
  i1072.border = new pc.Vec4( i1073[14], i1073[15], i1073[16], i1073[17] )
  i1072.transparency = i1073[18]
  i1072.bounds = i1073[19]
  i1072.pixelsPerUnit = i1073[20]
  i1072.textureWidth = i1073[21]
  i1072.textureHeight = i1073[22]
  i1072.nativeSize = new pc.Vec2( i1073[23], i1073[24] )
  i1072.pivot = new pc.Vec2( i1073[25], i1073[26] )
  i1072.textureRectOffset = new pc.Vec2( i1073[27], i1073[28] )
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1075 = data
  i1074.name = i1075[0]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1077 = data
  i1076.name = i1077[0]
  i1076.wrapMode = i1077[1]
  i1076.isLooping = !!i1077[2]
  i1076.length = i1077[3]
  var i1079 = i1077[4]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1079[i + 0]) );
  }
  i1076.curves = i1078
  var i1081 = i1077[5]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1081[i + 0]) );
  }
  i1076.events = i1080
  i1076.halfPrecision = !!i1077[6]
  i1076._frameRate = i1077[7]
  i1076.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1077[8], i1076.localBounds)
  i1076.hasMuscleCurves = !!i1077[9]
  var i1083 = i1077[10]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( i1083[i + 0] );
  }
  i1076.clipMuscleConstant = i1082
  i1076.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1077[11], i1076.clipBindingConstant)
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1087 = data
  i1086.path = i1087[0]
  i1086.hash = i1087[1]
  i1086.componentType = i1087[2]
  i1086.property = i1087[3]
  i1086.keys = i1087[4]
  var i1089 = i1087[5]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1089[i + 0]) );
  }
  i1086.objectReferenceKeys = i1088
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1093 = data
  i1092.time = i1093[0]
  request.r(i1093[1], i1093[2], 0, i1092, 'value')
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1097 = data
  i1096.functionName = i1097[0]
  i1096.floatParameter = i1097[1]
  i1096.intParameter = i1097[2]
  i1096.stringParameter = i1097[3]
  request.r(i1097[4], i1097[5], 0, i1096, 'objectReferenceParameter')
  i1096.time = i1097[6]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1099 = data
  i1098.center = new pc.Vec3( i1099[0], i1099[1], i1099[2] )
  i1098.extends = new pc.Vec3( i1099[3], i1099[4], i1099[5] )
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1103 = data
  var i1105 = i1103[0]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( i1105[i + 0] );
  }
  i1102.genericBindings = i1104
  var i1107 = i1103[1]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( i1107[i + 0] );
  }
  i1102.pptrCurveMapping = i1106
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1109 = data
  i1108.name = i1109[0]
  i1108.ascent = i1109[1]
  i1108.originalLineHeight = i1109[2]
  i1108.fontSize = i1109[3]
  var i1111 = i1109[4]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1111[i + 0]) );
  }
  i1108.characterInfo = i1110
  request.r(i1109[5], i1109[6], 0, i1108, 'texture')
  i1108.originalFontSize = i1109[7]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1115 = data
  i1114.index = i1115[0]
  i1114.advance = i1115[1]
  i1114.bearing = i1115[2]
  i1114.glyphWidth = i1115[3]
  i1114.glyphHeight = i1115[4]
  i1114.minX = i1115[5]
  i1114.maxX = i1115[6]
  i1114.minY = i1115[7]
  i1114.maxY = i1115[8]
  i1114.uvBottomLeftX = i1115[9]
  i1114.uvBottomLeftY = i1115[10]
  i1114.uvBottomRightX = i1115[11]
  i1114.uvBottomRightY = i1115[12]
  i1114.uvTopLeftX = i1115[13]
  i1114.uvTopLeftY = i1115[14]
  i1114.uvTopRightX = i1115[15]
  i1114.uvTopRightY = i1115[16]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1117 = data
  i1116.name = i1117[0]
  var i1119 = i1117[1]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1119[i + 0]) );
  }
  i1116.layers = i1118
  var i1121 = i1117[2]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1121[i + 0]) );
  }
  i1116.parameters = i1120
  i1116.animationClips = i1117[3]
  i1116.avatarUnsupported = i1117[4]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1125 = data
  i1124.name = i1125[0]
  i1124.defaultWeight = i1125[1]
  i1124.blendingMode = i1125[2]
  i1124.avatarMask = i1125[3]
  i1124.syncedLayerIndex = i1125[4]
  i1124.syncedLayerAffectsTiming = !!i1125[5]
  i1124.syncedLayers = i1125[6]
  i1124.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1125[7], i1124.stateMachine)
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1127 = data
  i1126.id = i1127[0]
  i1126.name = i1127[1]
  i1126.path = i1127[2]
  var i1129 = i1127[3]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1129[i + 0]) );
  }
  i1126.states = i1128
  var i1131 = i1127[4]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1131[i + 0]) );
  }
  i1126.machines = i1130
  var i1133 = i1127[5]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1133[i + 0]) );
  }
  i1126.entryStateTransitions = i1132
  var i1135 = i1127[6]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1135[i + 0]) );
  }
  i1126.exitStateTransitions = i1134
  var i1137 = i1127[7]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1137[i + 0]) );
  }
  i1126.anyStateTransitions = i1136
  i1126.defaultStateId = i1127[8]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1141 = data
  i1140.id = i1141[0]
  i1140.name = i1141[1]
  i1140.cycleOffset = i1141[2]
  i1140.cycleOffsetParameter = i1141[3]
  i1140.cycleOffsetParameterActive = !!i1141[4]
  i1140.mirror = !!i1141[5]
  i1140.mirrorParameter = i1141[6]
  i1140.mirrorParameterActive = !!i1141[7]
  i1140.motionId = i1141[8]
  i1140.nameHash = i1141[9]
  i1140.fullPathHash = i1141[10]
  i1140.speed = i1141[11]
  i1140.speedParameter = i1141[12]
  i1140.speedParameterActive = !!i1141[13]
  i1140.tag = i1141[14]
  i1140.tagHash = i1141[15]
  i1140.writeDefaultValues = !!i1141[16]
  var i1143 = i1141[17]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 2) {
  request.r(i1143[i + 0], i1143[i + 1], 2, i1142, '')
  }
  i1140.behaviours = i1142
  var i1145 = i1141[18]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1145[i + 0]) );
  }
  i1140.transitions = i1144
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1151 = data
  i1150.fullPath = i1151[0]
  i1150.canTransitionToSelf = !!i1151[1]
  i1150.duration = i1151[2]
  i1150.exitTime = i1151[3]
  i1150.hasExitTime = !!i1151[4]
  i1150.hasFixedDuration = !!i1151[5]
  i1150.interruptionSource = i1151[6]
  i1150.offset = i1151[7]
  i1150.orderedInterruption = !!i1151[8]
  i1150.destinationStateId = i1151[9]
  i1150.isExit = !!i1151[10]
  i1150.mute = !!i1151[11]
  i1150.solo = !!i1151[12]
  var i1153 = i1151[13]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1153[i + 0]) );
  }
  i1150.conditions = i1152
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1159 = data
  i1158.destinationStateId = i1159[0]
  i1158.isExit = !!i1159[1]
  i1158.mute = !!i1159[2]
  i1158.solo = !!i1159[3]
  var i1161 = i1159[4]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1161[i + 0]) );
  }
  i1158.conditions = i1160
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1165 = data
  i1164.mode = i1165[0]
  i1164.parameter = i1165[1]
  i1164.threshold = i1165[2]
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1169 = data
  i1168.defaultBool = !!i1169[0]
  i1168.defaultFloat = i1169[1]
  i1168.defaultInt = i1169[2]
  i1168.name = i1169[3]
  i1168.nameHash = i1169[4]
  i1168.type = i1169[5]
  return i1168
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1170 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1171 = data
  i1170.useSafeMode = !!i1171[0]
  i1170.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1171[1], i1170.safeModeOptions)
  i1170.timeScale = i1171[2]
  i1170.unscaledTimeScale = i1171[3]
  i1170.useSmoothDeltaTime = !!i1171[4]
  i1170.maxSmoothUnscaledTime = i1171[5]
  i1170.rewindCallbackMode = i1171[6]
  i1170.showUnityEditorReport = !!i1171[7]
  i1170.logBehaviour = i1171[8]
  i1170.drawGizmos = !!i1171[9]
  i1170.defaultRecyclable = !!i1171[10]
  i1170.defaultAutoPlay = i1171[11]
  i1170.defaultUpdateType = i1171[12]
  i1170.defaultTimeScaleIndependent = !!i1171[13]
  i1170.defaultEaseType = i1171[14]
  i1170.defaultEaseOvershootOrAmplitude = i1171[15]
  i1170.defaultEasePeriod = i1171[16]
  i1170.defaultAutoKill = !!i1171[17]
  i1170.defaultLoopType = i1171[18]
  i1170.debugMode = !!i1171[19]
  i1170.debugStoreTargetId = !!i1171[20]
  i1170.showPreviewPanel = !!i1171[21]
  i1170.storeSettingsLocation = i1171[22]
  i1170.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1171[23], i1170.modules)
  i1170.createASMDEF = !!i1171[24]
  i1170.showPlayingTweens = !!i1171[25]
  i1170.showPausedTweens = !!i1171[26]
  return i1170
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1172 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1173 = data
  i1172.logBehaviour = i1173[0]
  i1172.nestedTweenFailureBehaviour = i1173[1]
  return i1172
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1174 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1175 = data
  i1174.showPanel = !!i1175[0]
  i1174.audioEnabled = !!i1175[1]
  i1174.physicsEnabled = !!i1175[2]
  i1174.physics2DEnabled = !!i1175[3]
  i1174.spriteEnabled = !!i1175[4]
  i1174.uiEnabled = !!i1175[5]
  i1174.textMeshProEnabled = !!i1175[6]
  i1174.tk2DEnabled = !!i1175[7]
  i1174.deAudioEnabled = !!i1175[8]
  i1174.deUnityExtendedEnabled = !!i1175[9]
  i1174.epoOutlineEnabled = !!i1175[10]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1177 = data
  var i1179 = i1177[0]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1179[i + 0]) );
  }
  i1176.files = i1178
  i1176.componentToPrefabIds = i1177[1]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1183 = data
  i1182.path = i1183[0]
  request.r(i1183[1], i1183[2], 0, i1182, 'unityObject')
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1185 = data
  var i1187 = i1185[0]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1187[i + 0]) );
  }
  i1184.scriptsExecutionOrder = i1186
  var i1189 = i1185[1]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1189[i + 0]) );
  }
  i1184.sortingLayers = i1188
  var i1191 = i1185[2]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1191[i + 0]) );
  }
  i1184.cullingLayers = i1190
  i1184.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1185[3], i1184.timeSettings)
  i1184.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1185[4], i1184.physicsSettings)
  i1184.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1185[5], i1184.physics2DSettings)
  i1184.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1185[6], i1184.qualitySettings)
  i1184.enableRealtimeShadows = !!i1185[7]
  i1184.enableAutoInstancing = !!i1185[8]
  i1184.enableStaticBatching = !!i1185[9]
  i1184.enableDynamicBatching = !!i1185[10]
  i1184.usePreservativeDynamicBatching = !!i1185[11]
  i1184.lightmapEncodingQuality = i1185[12]
  i1184.desiredColorSpace = i1185[13]
  var i1193 = i1185[14]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( i1193[i + 0] );
  }
  i1184.allTags = i1192
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1197 = data
  i1196.name = i1197[0]
  i1196.value = i1197[1]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1201 = data
  i1200.id = i1201[0]
  i1200.name = i1201[1]
  i1200.value = i1201[2]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1205 = data
  i1204.id = i1205[0]
  i1204.name = i1205[1]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1207 = data
  i1206.fixedDeltaTime = i1207[0]
  i1206.maximumDeltaTime = i1207[1]
  i1206.timeScale = i1207[2]
  i1206.maximumParticleTimestep = i1207[3]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1209 = data
  i1208.gravity = new pc.Vec3( i1209[0], i1209[1], i1209[2] )
  i1208.defaultSolverIterations = i1209[3]
  i1208.bounceThreshold = i1209[4]
  i1208.autoSyncTransforms = !!i1209[5]
  i1208.autoSimulation = !!i1209[6]
  var i1211 = i1209[7]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1211[i + 0]) );
  }
  i1208.collisionMatrix = i1210
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1215 = data
  i1214.enabled = !!i1215[0]
  i1214.layerId = i1215[1]
  i1214.otherLayerId = i1215[2]
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1217 = data
  request.r(i1217[0], i1217[1], 0, i1216, 'material')
  i1216.gravity = new pc.Vec2( i1217[2], i1217[3] )
  i1216.positionIterations = i1217[4]
  i1216.velocityIterations = i1217[5]
  i1216.velocityThreshold = i1217[6]
  i1216.maxLinearCorrection = i1217[7]
  i1216.maxAngularCorrection = i1217[8]
  i1216.maxTranslationSpeed = i1217[9]
  i1216.maxRotationSpeed = i1217[10]
  i1216.baumgarteScale = i1217[11]
  i1216.baumgarteTOIScale = i1217[12]
  i1216.timeToSleep = i1217[13]
  i1216.linearSleepTolerance = i1217[14]
  i1216.angularSleepTolerance = i1217[15]
  i1216.defaultContactOffset = i1217[16]
  i1216.autoSimulation = !!i1217[17]
  i1216.queriesHitTriggers = !!i1217[18]
  i1216.queriesStartInColliders = !!i1217[19]
  i1216.callbacksOnDisable = !!i1217[20]
  i1216.reuseCollisionCallbacks = !!i1217[21]
  i1216.autoSyncTransforms = !!i1217[22]
  var i1219 = i1217[23]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1219[i + 0]) );
  }
  i1216.collisionMatrix = i1218
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1223 = data
  i1222.enabled = !!i1223[0]
  i1222.layerId = i1223[1]
  i1222.otherLayerId = i1223[2]
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1225 = data
  var i1227 = i1225[0]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1227[i + 0]) );
  }
  i1224.qualityLevels = i1226
  var i1229 = i1225[1]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( i1229[i + 0] );
  }
  i1224.names = i1228
  i1224.shadows = i1225[2]
  i1224.anisotropicFiltering = i1225[3]
  i1224.antiAliasing = i1225[4]
  i1224.lodBias = i1225[5]
  i1224.shadowCascades = i1225[6]
  i1224.shadowDistance = i1225[7]
  i1224.shadowmaskMode = i1225[8]
  i1224.shadowProjection = i1225[9]
  i1224.shadowResolution = i1225[10]
  i1224.softParticles = !!i1225[11]
  i1224.softVegetation = !!i1225[12]
  i1224.activeColorSpace = i1225[13]
  i1224.desiredColorSpace = i1225[14]
  i1224.masterTextureLimit = i1225[15]
  i1224.maxQueuedFrames = i1225[16]
  i1224.particleRaycastBudget = i1225[17]
  i1224.pixelLightCount = i1225[18]
  i1224.realtimeReflectionProbes = !!i1225[19]
  i1224.shadowCascade2Split = i1225[20]
  i1224.shadowCascade4Split = new pc.Vec3( i1225[21], i1225[22], i1225[23] )
  i1224.streamingMipmapsActive = !!i1225[24]
  i1224.vSyncCount = i1225[25]
  i1224.asyncUploadBufferSize = i1225[26]
  i1224.asyncUploadTimeSlice = i1225[27]
  i1224.billboardsFaceCameraPosition = !!i1225[28]
  i1224.shadowNearPlaneOffset = i1225[29]
  i1224.streamingMipmapsMemoryBudget = i1225[30]
  i1224.maximumLODLevel = i1225[31]
  i1224.streamingMipmapsAddAllCameras = !!i1225[32]
  i1224.streamingMipmapsMaxLevelReduction = i1225[33]
  i1224.streamingMipmapsRenderersPerFrame = i1225[34]
  i1224.resolutionScalingFixedDPIFactor = i1225[35]
  i1224.streamingMipmapsMaxFileIORequests = i1225[36]
  i1224.currentQualityLevel = i1225[37]
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i1233 = data
  var i1235 = i1233[0]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i1235[i + 0]) );
  }
  i1232.groups = i1234
  var i1237 = i1233[1]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i1237[i + 0]) );
  }
  i1232.snapshots = i1236
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i1241 = data
  i1240.id = i1241[0]
  i1240.childGroupIds = i1241[1]
  i1240.name = i1241[2]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i1245 = data
  i1244.id = i1245[0]
  var i1247 = i1245[1]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i1247[i + 0]) );
  }
  i1244.parameters = i1246
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i1251 = data
  i1250.name = i1251[0]
  i1250.value = i1251[1]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1255 = data
  i1254.weight = i1255[0]
  i1254.vertices = i1255[1]
  i1254.normals = i1255[2]
  i1254.tangents = i1255[3]
  return i1254
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[77],"78":[45],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[40],"88":[40],"89":[40],"90":[40],"91":[40],"92":[40],"93":[40],"94":[40],"95":[40],"96":[40],"97":[40],"98":[40],"99":[40],"100":[45],"101":[102],"103":[104],"105":[104],"57":[50],"106":[30],"107":[15],"108":[36],"109":[15],"110":[111],"112":[111],"113":[52],"114":[36],"115":[15],"32":[15],"116":[50],"117":[50],"60":[57],"51":[61,50],"118":[50],"59":[57],"119":[50],"120":[50],"121":[50],"122":[50],"123":[50],"124":[50],"125":[50],"126":[50],"127":[50],"128":[61,50],"129":[50],"130":[50],"131":[50],"132":[50],"53":[61,50],"133":[50],"134":[65],"135":[65],"66":[65],"136":[65],"137":[45],"138":[45]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level3_Manicure_Playable","InteractableBones","UnityEngine.GameObject","BasicDrag","BD_CameraFollow","BD_ToolRotate","UnityEngine.Animator","UnityEngine.SpriteRenderer","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","PlayParticlesOnCollision","UnityEngine.CircleCollider2D","ActionOnTriggerStay","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.LineRenderer","TextureOffsetScroller","UnityEngine.U2D.Animation.SpriteSkin","UnityEditor.Animations.AnimatorController","UnityEngine.SpriteMask","ActionOnTap","UnityEngine.BoxCollider2D","BD_AnimationHelper","BD_Progress","BD_Clamp","UnityEngine.Rigidbody2D","BD_ProgressHelper","BD_Action","Lvl3_NailTrim","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "6.9";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "27Aug2026_Level_3_2_Step_1to3";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1702";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4597";

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

Deserializers.buildID = "ba1c4e0f-da2a-4e8b-9860-94249f79d514";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

