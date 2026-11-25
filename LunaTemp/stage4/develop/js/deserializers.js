var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.JointSpring' )
  var i621 = data
  i620.spring = i621[0]
  i620.damper = i621[1]
  i620.targetPosition = i621[2]
  return i620
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.JointMotor' )
  var i623 = data
  i622.m_TargetVelocity = i623[0]
  i622.m_Force = i623[1]
  i622.m_FreeSpin = i623[2]
  return i622
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.JointLimits' )
  var i625 = data
  i624.m_Min = i625[0]
  i624.m_Max = i625[1]
  i624.m_Bounciness = i625[2]
  i624.m_BounceMinVelocity = i625[3]
  i624.m_ContactDistance = i625[4]
  i624.minBounce = i625[5]
  i624.maxBounce = i625[6]
  return i624
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.JointDrive' )
  var i627 = data
  i626.m_PositionSpring = i627[0]
  i626.m_PositionDamper = i627[1]
  i626.m_MaximumForce = i627[2]
  i626.m_UseAcceleration = i627[3]
  return i626
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i629 = data
  i628.m_Spring = i629[0]
  i628.m_Damper = i629[1]
  return i628
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i631 = data
  i630.m_Limit = i631[0]
  i630.m_Bounciness = i631[1]
  i630.m_ContactDistance = i631[2]
  return i630
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i633 = data
  i632.m_ExtremumSlip = i633[0]
  i632.m_ExtremumValue = i633[1]
  i632.m_AsymptoteSlip = i633[2]
  i632.m_AsymptoteValue = i633[3]
  i632.m_Stiffness = i633[4]
  return i632
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i635 = data
  i634.m_LowerAngle = i635[0]
  i634.m_UpperAngle = i635[1]
  return i634
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i637 = data
  i636.m_MotorSpeed = i637[0]
  i636.m_MaximumMotorTorque = i637[1]
  return i636
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i639 = data
  i638.m_DampingRatio = i639[0]
  i638.m_Frequency = i639[1]
  i638.m_Angle = i639[2]
  return i638
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i641 = data
  i640.m_LowerTranslation = i641[0]
  i640.m_UpperTranslation = i641[1]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i642 = root || new pc.UnityMaterial()
  var i643 = data
  i642.name = i643[0]
  request.r(i643[1], i643[2], 0, i642, 'shader')
  i642.renderQueue = i643[3]
  i642.enableInstancing = !!i643[4]
  var i645 = i643[5]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i645[i + 0]) );
  }
  i642.floatParameters = i644
  var i647 = i643[6]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i647[i + 0]) );
  }
  i642.colorParameters = i646
  var i649 = i643[7]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i649[i + 0]) );
  }
  i642.vectorParameters = i648
  var i651 = i643[8]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i651[i + 0]) );
  }
  i642.textureParameters = i650
  var i653 = i643[9]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i653[i + 0]) );
  }
  i642.materialFlags = i652
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i657 = data
  i656.name = i657[0]
  i656.value = i657[1]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i661 = data
  i660.name = i661[0]
  i660.value = new pc.Color(i661[1], i661[2], i661[3], i661[4])
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i665 = data
  i664.name = i665[0]
  i664.value = new pc.Vec4( i665[1], i665[2], i665[3], i665[4] )
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i669 = data
  i668.name = i669[0]
  request.r(i669[1], i669[2], 0, i668, 'value')
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i673 = data
  i672.name = i673[0]
  i672.enabled = !!i673[1]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i675 = data
  i674.name = i675[0]
  i674.width = i675[1]
  i674.height = i675[2]
  i674.mipmapCount = i675[3]
  i674.anisoLevel = i675[4]
  i674.filterMode = i675[5]
  i674.hdr = !!i675[6]
  i674.format = i675[7]
  i674.wrapMode = i675[8]
  i674.alphaIsTransparency = !!i675[9]
  i674.alphaSource = i675[10]
  i674.graphicsFormat = i675[11]
  i674.sRGBTexture = !!i675[12]
  i674.desiredColorSpace = i675[13]
  i674.wrapU = i675[14]
  i674.wrapV = i675[15]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i677 = data
  i676.name = i677[0]
  i676.halfPrecision = !!i677[1]
  i676.useSimplification = !!i677[2]
  i676.useUInt32IndexFormat = !!i677[3]
  i676.vertexCount = i677[4]
  i676.aabb = i677[5]
  var i679 = i677[6]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( !!i679[i + 0] );
  }
  i676.streams = i678
  i676.vertices = i677[7]
  var i681 = i677[8]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i681[i + 0]) );
  }
  i676.subMeshes = i680
  var i683 = i677[9]
  var i682 = []
  for(var i = 0; i < i683.length; i += 16) {
    i682.push( new pc.Mat4().setData(i683[i + 0], i683[i + 1], i683[i + 2], i683[i + 3],  i683[i + 4], i683[i + 5], i683[i + 6], i683[i + 7],  i683[i + 8], i683[i + 9], i683[i + 10], i683[i + 11],  i683[i + 12], i683[i + 13], i683[i + 14], i683[i + 15]) );
  }
  i676.bindposes = i682
  var i685 = i677[10]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i685[i + 0]) );
  }
  i676.blendShapes = i684
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i691 = data
  i690.triangles = i691[0]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i697 = data
  i696.name = i697[0]
  var i699 = i697[1]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i699[i + 0]) );
  }
  i696.frames = i698
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i701 = data
  i700.position = new pc.Vec3( i701[0], i701[1], i701[2] )
  i700.scale = new pc.Vec3( i701[3], i701[4], i701[5] )
  i700.rotation = new pc.Quat(i701[6], i701[7], i701[8], i701[9])
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i703 = data
  i702.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i703[0], i702.main)
  i702.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i703[1], i702.colorBySpeed)
  i702.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i703[2], i702.colorOverLifetime)
  i702.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i703[3], i702.emission)
  i702.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i703[4], i702.rotationBySpeed)
  i702.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i703[5], i702.rotationOverLifetime)
  i702.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i703[6], i702.shape)
  i702.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i703[7], i702.sizeBySpeed)
  i702.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i703[8], i702.sizeOverLifetime)
  i702.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i703[9], i702.textureSheetAnimation)
  i702.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i703[10], i702.velocityOverLifetime)
  i702.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i703[11], i702.noise)
  i702.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i703[12], i702.inheritVelocity)
  i702.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i703[13], i702.forceOverLifetime)
  i702.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i703[14], i702.limitVelocityOverLifetime)
  i702.useAutoRandomSeed = !!i703[15]
  i702.randomSeed = i703[16]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i704 = root || new pc.ParticleSystemMain()
  var i705 = data
  i704.duration = i705[0]
  i704.loop = !!i705[1]
  i704.prewarm = !!i705[2]
  i704.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[3], i704.startDelay)
  i704.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[4], i704.startLifetime)
  i704.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[5], i704.startSpeed)
  i704.startSize3D = !!i705[6]
  i704.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[7], i704.startSizeX)
  i704.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[8], i704.startSizeY)
  i704.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[9], i704.startSizeZ)
  i704.startRotation3D = !!i705[10]
  i704.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[11], i704.startRotationX)
  i704.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[12], i704.startRotationY)
  i704.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[13], i704.startRotationZ)
  i704.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i705[14], i704.startColor)
  i704.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[15], i704.gravityModifier)
  i704.simulationSpace = i705[16]
  request.r(i705[17], i705[18], 0, i704, 'customSimulationSpace')
  i704.simulationSpeed = i705[19]
  i704.useUnscaledTime = !!i705[20]
  i704.scalingMode = i705[21]
  i704.playOnAwake = !!i705[22]
  i704.maxParticles = i705[23]
  i704.emitterVelocityMode = i705[24]
  i704.stopAction = i705[25]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i706 = root || new pc.MinMaxCurve()
  var i707 = data
  i706.mode = i707[0]
  i706.curveMin = new pc.AnimationCurve( { keys_flow: i707[1] } )
  i706.curveMax = new pc.AnimationCurve( { keys_flow: i707[2] } )
  i706.curveMultiplier = i707[3]
  i706.constantMin = i707[4]
  i706.constantMax = i707[5]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i708 = root || new pc.MinMaxGradient()
  var i709 = data
  i708.mode = i709[0]
  i708.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i709[1], i708.gradientMin)
  i708.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i709[2], i708.gradientMax)
  i708.colorMin = new pc.Color(i709[3], i709[4], i709[5], i709[6])
  i708.colorMax = new pc.Color(i709[7], i709[8], i709[9], i709[10])
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i711 = data
  i710.mode = i711[0]
  var i713 = i711[1]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i713[i + 0]) );
  }
  i710.colorKeys = i712
  var i715 = i711[2]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i715[i + 0]) );
  }
  i710.alphaKeys = i714
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i716 = root || new pc.ParticleSystemColorBySpeed()
  var i717 = data
  i716.enabled = !!i717[0]
  i716.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i717[1], i716.color)
  i716.range = new pc.Vec2( i717[2], i717[3] )
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i721 = data
  i720.color = new pc.Color(i721[0], i721[1], i721[2], i721[3])
  i720.time = i721[4]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i725 = data
  i724.alpha = i725[0]
  i724.time = i725[1]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i726 = root || new pc.ParticleSystemColorOverLifetime()
  var i727 = data
  i726.enabled = !!i727[0]
  i726.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i727[1], i726.color)
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i728 = root || new pc.ParticleSystemEmitter()
  var i729 = data
  i728.enabled = !!i729[0]
  i728.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[1], i728.rateOverTime)
  i728.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[2], i728.rateOverDistance)
  var i731 = i729[3]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i731[i + 0]) );
  }
  i728.bursts = i730
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i734 = root || new pc.ParticleSystemBurst()
  var i735 = data
  i734.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[0], i734.count)
  i734.cycleCount = i735[1]
  i734.minCount = i735[2]
  i734.maxCount = i735[3]
  i734.repeatInterval = i735[4]
  i734.time = i735[5]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i736 = root || new pc.ParticleSystemRotationBySpeed()
  var i737 = data
  i736.enabled = !!i737[0]
  i736.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[1], i736.x)
  i736.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[2], i736.y)
  i736.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[3], i736.z)
  i736.separateAxes = !!i737[4]
  i736.range = new pc.Vec2( i737[5], i737[6] )
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i738 = root || new pc.ParticleSystemRotationOverLifetime()
  var i739 = data
  i738.enabled = !!i739[0]
  i738.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[1], i738.x)
  i738.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[2], i738.y)
  i738.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[3], i738.z)
  i738.separateAxes = !!i739[4]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i740 = root || new pc.ParticleSystemShape()
  var i741 = data
  i740.enabled = !!i741[0]
  i740.shapeType = i741[1]
  i740.randomDirectionAmount = i741[2]
  i740.sphericalDirectionAmount = i741[3]
  i740.randomPositionAmount = i741[4]
  i740.alignToDirection = !!i741[5]
  i740.radius = i741[6]
  i740.radiusMode = i741[7]
  i740.radiusSpread = i741[8]
  i740.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[9], i740.radiusSpeed)
  i740.radiusThickness = i741[10]
  i740.angle = i741[11]
  i740.length = i741[12]
  i740.boxThickness = new pc.Vec3( i741[13], i741[14], i741[15] )
  i740.meshShapeType = i741[16]
  request.r(i741[17], i741[18], 0, i740, 'mesh')
  request.r(i741[19], i741[20], 0, i740, 'meshRenderer')
  request.r(i741[21], i741[22], 0, i740, 'skinnedMeshRenderer')
  i740.useMeshMaterialIndex = !!i741[23]
  i740.meshMaterialIndex = i741[24]
  i740.useMeshColors = !!i741[25]
  i740.normalOffset = i741[26]
  i740.arc = i741[27]
  i740.arcMode = i741[28]
  i740.arcSpread = i741[29]
  i740.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[30], i740.arcSpeed)
  i740.donutRadius = i741[31]
  i740.position = new pc.Vec3( i741[32], i741[33], i741[34] )
  i740.rotation = new pc.Vec3( i741[35], i741[36], i741[37] )
  i740.scale = new pc.Vec3( i741[38], i741[39], i741[40] )
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i742 = root || new pc.ParticleSystemSizeBySpeed()
  var i743 = data
  i742.enabled = !!i743[0]
  i742.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[1], i742.x)
  i742.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[2], i742.y)
  i742.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[3], i742.z)
  i742.separateAxes = !!i743[4]
  i742.range = new pc.Vec2( i743[5], i743[6] )
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i744 = root || new pc.ParticleSystemSizeOverLifetime()
  var i745 = data
  i744.enabled = !!i745[0]
  i744.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[1], i744.x)
  i744.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[2], i744.y)
  i744.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[3], i744.z)
  i744.separateAxes = !!i745[4]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i747 = data
  i746.enabled = !!i747[0]
  i746.mode = i747[1]
  i746.animation = i747[2]
  i746.numTilesX = i747[3]
  i746.numTilesY = i747[4]
  i746.useRandomRow = !!i747[5]
  i746.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[6], i746.frameOverTime)
  i746.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[7], i746.startFrame)
  i746.cycleCount = i747[8]
  i746.rowIndex = i747[9]
  i746.flipU = i747[10]
  i746.flipV = i747[11]
  i746.spriteCount = i747[12]
  var i749 = i747[13]
  var i748 = []
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 2, i748, '')
  }
  i746.sprites = i748
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i753 = data
  i752.enabled = !!i753[0]
  i752.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[1], i752.x)
  i752.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[2], i752.y)
  i752.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[3], i752.z)
  i752.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[4], i752.radial)
  i752.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[5], i752.speedModifier)
  i752.space = i753[6]
  i752.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[7], i752.orbitalX)
  i752.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[8], i752.orbitalY)
  i752.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[9], i752.orbitalZ)
  i752.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[10], i752.orbitalOffsetX)
  i752.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[11], i752.orbitalOffsetY)
  i752.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[12], i752.orbitalOffsetZ)
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemNoise()
  var i755 = data
  i754.enabled = !!i755[0]
  i754.separateAxes = !!i755[1]
  i754.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[2], i754.strengthX)
  i754.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[3], i754.strengthY)
  i754.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[4], i754.strengthZ)
  i754.frequency = i755[5]
  i754.damping = !!i755[6]
  i754.octaveCount = i755[7]
  i754.octaveMultiplier = i755[8]
  i754.octaveScale = i755[9]
  i754.quality = i755[10]
  i754.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[11], i754.scrollSpeed)
  i754.scrollSpeedMultiplier = i755[12]
  i754.remapEnabled = !!i755[13]
  i754.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[14], i754.remapX)
  i754.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[15], i754.remapY)
  i754.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[16], i754.remapZ)
  i754.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[17], i754.positionAmount)
  i754.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[18], i754.rotationAmount)
  i754.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[19], i754.sizeAmount)
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemInheritVelocity()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.mode = i757[1]
  i756.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[2], i756.curve)
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemForceOverLifetime()
  var i759 = data
  i758.enabled = !!i759[0]
  i758.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[1], i758.x)
  i758.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[2], i758.y)
  i758.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[3], i758.z)
  i758.space = i759[4]
  i758.randomized = !!i759[5]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i760 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i761 = data
  i760.enabled = !!i761[0]
  i760.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[1], i760.limit)
  i760.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[2], i760.limitX)
  i760.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[3], i760.limitY)
  i760.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[4], i760.limitZ)
  i760.dampen = i761[5]
  i760.separateAxes = !!i761[6]
  i760.space = i761[7]
  i760.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[8], i760.drag)
  i760.multiplyDragByParticleSize = !!i761[9]
  i760.multiplyDragByParticleVelocity = !!i761[10]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'mesh')
  i762.meshCount = i763[2]
  i762.activeVertexStreamsCount = i763[3]
  i762.alignment = i763[4]
  i762.renderMode = i763[5]
  i762.sortMode = i763[6]
  i762.lengthScale = i763[7]
  i762.velocityScale = i763[8]
  i762.cameraVelocityScale = i763[9]
  i762.normalDirection = i763[10]
  i762.sortingFudge = i763[11]
  i762.minParticleSize = i763[12]
  i762.maxParticleSize = i763[13]
  i762.pivot = new pc.Vec3( i763[14], i763[15], i763[16] )
  request.r(i763[17], i763[18], 0, i762, 'trailMaterial')
  i762.applyActiveColorSpace = !!i763[19]
  i762.enabled = !!i763[20]
  request.r(i763[21], i763[22], 0, i762, 'sharedMaterial')
  var i765 = i763[23]
  var i764 = []
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 2, i764, '')
  }
  i762.sharedMaterials = i764
  i762.receiveShadows = !!i763[24]
  i762.shadowCastingMode = i763[25]
  i762.sortingLayerID = i763[26]
  i762.sortingOrder = i763[27]
  i762.lightmapIndex = i763[28]
  i762.lightmapSceneIndex = i763[29]
  i762.lightmapScaleOffset = new pc.Vec4( i763[30], i763[31], i763[32], i763[33] )
  i762.lightProbeUsage = i763[34]
  i762.reflectionProbeUsage = i763[35]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i769 = data
  i768.name = i769[0]
  i768.tagId = i769[1]
  i768.enabled = !!i769[2]
  i768.isStatic = !!i769[3]
  i768.layer = i769[4]
  return i768
}

Deserializers["Level1_Cloth_Playable_PlayableStep1to2"] = function (request, data, root) {
  var i770 = root || request.c( 'Level1_Cloth_Playable_PlayableStep1to2' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'WashingView')
  request.r(i771[2], i771[3], 0, i770, 'WashingTools')
  request.r(i771[4], i771[5], 0, i770, 'DressingView')
  request.r(i771[6], i771[7], 0, i770, 'DressingTools')
  i770.ZoomStep1 = request.d('ZoomPos', i771[8], i770.ZoomStep1)
  request.r(i771[9], i771[10], 0, i770, 'ToolStep1')
  request.r(i771[11], i771[12], 0, i770, 'Basket_Cloth')
  request.r(i771[13], i771[14], 0, i770, 'clothInside')
  request.r(i771[15], i771[16], 0, i770, 'clothRound')
  request.r(i771[17], i771[18], 0, i770, 'machineDoor')
  request.r(i771[19], i771[20], 0, i770, 'machineGlass')
  i770.ZoomStep2 = request.d('ZoomPos', i771[21], i770.ZoomStep2)
  i770.ZoomStep2b = request.d('ZoomPos', i771[22], i770.ZoomStep2b)
  request.r(i771[23], i771[24], 0, i770, 'ToolStep2')
  request.r(i771[25], i771[26], 0, i770, 'ToolStep2CamFollow')
  request.r(i771[27], i771[28], 0, i770, 'drawerObj')
  request.r(i771[29], i771[30], 0, i770, 'surfObj')
  request.r(i771[31], i771[32], 0, i770, 'surfPackTop')
  request.r(i771[33], i771[34], 0, i770, 'handStep2')
  request.r(i771[35], i771[36], 0, i770, 'surfController')
  request.r(i771[37], i771[38], 0, i770, 'clothsInside')
  request.r(i771[39], i771[40], 0, i770, 'clothsInsideGlass')
  request.r(i771[41], i771[42], 0, i770, 'clothsStaticClean')
  request.r(i771[43], i771[44], 0, i770, 'wetCloths')
  request.r(i771[45], i771[46], 0, i770, 'clothCleanInside')
  request.r(i771[47], i771[48], 0, i770, 'clothCleanInsideAnim')
  request.r(i771[49], i771[50], 0, i770, 'waterWave')
  request.r(i771[51], i771[52], 0, i770, 'clothCleanInside2')
  request.r(i771[53], i771[54], 0, i770, 'clothCleanInside2Cam')
  request.r(i771[55], i771[56], 0, i770, 'clothBasketTarget')
  request.r(i771[57], i771[58], 0, i770, 'clothBasketTarget2')
  request.r(i771[59], i771[60], 0, i770, 'waterSplash_Vfx')
  request.r(i771[61], i771[62], 0, i770, 'countDownTimerText')
  i770.countDown = i771[63]
  request.r(i771[64], i771[65], 0, i770, 'machineTimer')
  request.r(i771[66], i771[67], 0, i770, 'machineTimerIndication')
  request.r(i771[68], i771[69], 0, i770, 'darazOpenSfx')
  request.r(i771[70], i771[71], 0, i770, 'darazCloseSfx')
  request.r(i771[72], i771[73], 0, i770, 'doorOpenSfx')
  request.r(i771[74], i771[75], 0, i770, 'machineStartSfx')
  request.r(i771[76], i771[77], 0, i770, 'machineFinishSfx')
  request.r(i771[78], i771[79], 0, i770, 'waterDrainSfx')
  i770.levelName = i771[80]
  i770.levelReward = i771[81]
  request.r(i771[82], i771[83], 0, i770, 'LevelIcon')
  request.r(i771[84], i771[85], 0, i770, 'Level_BG')
  var i773 = i771[86]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 1, i772, '')
  }
  i770.ToolIcons = i772
  var i775 = i771[87]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i770.AllDrags = i774
  var i777 = i771[88]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i770.AllSources = i776
  var i779 = i771[89]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i770.AllScratches = i778
  i770.stepsDone = i771[90]
  i770.levelNo = i771[91]
  i770.partNo = i771[92]
  var i781 = i771[93]
  var i780 = []
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 2, i780, '')
  }
  i770.disableOnLevelComplete = i780
  i770.zoomBeforeComplete = !!i771[94]
  i770.completionZoom = request.d('ZoomPos', i771[95], i770.completionZoom)
  i770.completionZoomDuration = i771[96]
  request.r(i771[97], i771[98], 0, i770, 'clothSfx')
  request.r(i771[99], i771[100], 0, i770, 'doorCloseSfx')
  return i770
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i782 = root || request.c( 'ZoomPos' )
  var i783 = data
  i782.CameraPos = new pc.Vec3( i783[0], i783[1], i783[2] )
  i782.CameraFOV = i783[3]
  return i782
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i794 = root || request.c( 'PlayableCTA' )
  var i795 = data
  i794.trigger = i795[0]
  i794.autoCtaOnLevelComplete = !!i795[1]
  i794.afterSeconds = i795[2]
  i794.afterTaps = i795[3]
  request.r(i795[4], i795[5], 0, i794, 'scratchProgress')
  i794.scratchIndex = i795[6]
  i794.progressThreshold = i795[7]
  i794.blockInputOnFire = !!i795[8]
  i794.refireOnEveryTap = !!i795[9]
  i794.refireDelay = i795[10]
  i794.showEndCard = !!i795[11]
  request.r(i795[12], i795[13], 0, i794, 'endCard')
  var i797 = i795[14]
  var i796 = []
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 2, i796, '')
  }
  i794.thingsToDisableOnEndCard = i796
  i794.endCardDelay = i795[15]
  i794.showEndCardOnProgressTrigger = !!i795[16]
  i794.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i795[17], i794.onCtaFired)
  i794.logWhenFired = !!i795[18]
  return i794
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i799 = data
  i798.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i799[0], i798.m_PersistentCalls)
  return i798
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i801 = data
  var i803 = i801[0]
  var i802 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i803.length; i += 1) {
    i802.add(request.d('UnityEngine.Events.PersistentCall', i803[i + 0]));
  }
  i800.m_Calls = i802
  return i800
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'm_Target')
  i806.m_TargetAssemblyTypeName = i807[2]
  i806.m_MethodName = i807[3]
  i806.m_Mode = i807[4]
  i806.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i807[5], i806.m_Arguments)
  i806.m_CallState = i807[6]
  return i806
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i808 = root || request.c( 'PlayableFadeCoverSettings' )
  var i809 = data
  i808.revealDelay = i809[0]
  i808.revealDuration = i809[1]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'animatorController')
  request.r(i811[2], i811[3], 0, i810, 'avatar')
  i810.updateMode = i811[4]
  i810.hasTransformHierarchy = !!i811[5]
  i810.applyRootMotion = !!i811[6]
  var i813 = i811[7]
  var i812 = []
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 2, i812, '')
  }
  i810.humanBones = i812
  i810.enabled = !!i811[8]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i817 = data
  i816.color = new pc.Color(i817[0], i817[1], i817[2], i817[3])
  request.r(i817[4], i817[5], 0, i816, 'sprite')
  i816.flipX = !!i817[6]
  i816.flipY = !!i817[7]
  i816.drawMode = i817[8]
  i816.size = new pc.Vec2( i817[9], i817[10] )
  i816.tileMode = i817[11]
  i816.adaptiveModeThreshold = i817[12]
  i816.maskInteraction = i817[13]
  i816.spriteSortPoint = i817[14]
  i816.enabled = !!i817[15]
  request.r(i817[16], i817[17], 0, i816, 'sharedMaterial')
  var i819 = i817[18]
  var i818 = []
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 2, i818, '')
  }
  i816.sharedMaterials = i818
  i816.receiveShadows = !!i817[19]
  i816.shadowCastingMode = i817[20]
  i816.sortingLayerID = i817[21]
  i816.sortingOrder = i817[22]
  i816.lightmapIndex = i817[23]
  i816.lightmapSceneIndex = i817[24]
  i816.lightmapScaleOffset = new pc.Vec4( i817[25], i817[26], i817[27], i817[28] )
  i816.lightProbeUsage = i817[29]
  i816.reflectionProbeUsage = i817[30]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i821 = data
  i820.pivot = new pc.Vec2( i821[0], i821[1] )
  i820.anchorMin = new pc.Vec2( i821[2], i821[3] )
  i820.anchorMax = new pc.Vec2( i821[4], i821[5] )
  i820.sizeDelta = new pc.Vec2( i821[6], i821[7] )
  i820.anchoredPosition3D = new pc.Vec3( i821[8], i821[9], i821[10] )
  i820.rotation = new pc.Quat(i821[11], i821[12], i821[13], i821[14])
  i820.scale = new pc.Vec3( i821[15], i821[16], i821[17] )
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i823 = data
  i822.planeDistance = i823[0]
  i822.referencePixelsPerUnit = i823[1]
  i822.isFallbackOverlay = !!i823[2]
  i822.renderMode = i823[3]
  i822.renderOrder = i823[4]
  i822.sortingLayerName = i823[5]
  i822.sortingOrder = i823[6]
  i822.scaleFactor = i823[7]
  request.r(i823[8], i823[9], 0, i822, 'worldCamera')
  i822.overrideSorting = !!i823[10]
  i822.pixelPerfect = !!i823[11]
  i822.targetDisplay = i823[12]
  i822.overridePixelPerfect = !!i823[13]
  i822.enabled = !!i823[14]
  return i822
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i825 = data
  i824.m_UiScaleMode = i825[0]
  i824.m_ReferencePixelsPerUnit = i825[1]
  i824.m_ScaleFactor = i825[2]
  i824.m_ReferenceResolution = new pc.Vec2( i825[3], i825[4] )
  i824.m_ScreenMatchMode = i825[5]
  i824.m_MatchWidthOrHeight = i825[6]
  i824.m_PhysicalUnit = i825[7]
  i824.m_FallbackScreenDPI = i825[8]
  i824.m_DefaultSpriteDPI = i825[9]
  i824.m_DynamicPixelsPerUnit = i825[10]
  i824.m_PresetInfoIsWorld = !!i825[11]
  return i824
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i827 = data
  i826.m_IgnoreReversedGraphics = !!i827[0]
  i826.m_BlockingObjects = i827[1]
  i826.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i827[2] )
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i829 = data
  i828.usedByComposite = !!i829[0]
  i828.autoTiling = !!i829[1]
  i828.size = new pc.Vec2( i829[2], i829[3] )
  i828.edgeRadius = i829[4]
  i828.enabled = !!i829[5]
  i828.isTrigger = !!i829[6]
  i828.usedByEffector = !!i829[7]
  i828.density = i829[8]
  i828.offset = new pc.Vec2( i829[9], i829[10] )
  request.r(i829[11], i829[12], 0, i828, 'material')
  return i828
}

Deserializers["RotaryTimerKnob"] = function (request, data, root) {
  var i830 = root || request.c( 'RotaryTimerKnob' )
  var i831 = data
  i830.numSteps = i831[0]
  i830.onlyClockwise = !!i831[1]
  request.r(i831[2], i831[3], 0, i830, 'clickSound')
  i830.enableVibration = !!i831[4]
  request.r(i831[5], i831[6], 0, i830, 'stepText')
  i830.OnComplete = request.d('UnityEngine.Events.UnityEvent', i831[7], i830.OnComplete)
  request.r(i831[8], i831[9], 0, i830, 'handIndication')
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'additionalVertexStreams')
  i834.enabled = !!i835[2]
  request.r(i835[3], i835[4], 0, i834, 'sharedMaterial')
  var i837 = i835[5]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i834.sharedMaterials = i836
  i834.receiveShadows = !!i835[6]
  i834.shadowCastingMode = i835[7]
  i834.sortingLayerID = i835[8]
  i834.sortingOrder = i835[9]
  i834.lightmapIndex = i835[10]
  i834.lightmapSceneIndex = i835[11]
  i834.lightmapScaleOffset = new pc.Vec4( i835[12], i835[13], i835[14], i835[15] )
  i834.lightProbeUsage = i835[16]
  i834.reflectionProbeUsage = i835[17]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i839 = data
  i838.cullTransparentMesh = !!i839[0]
  return i838
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.UI.Text' )
  var i841 = data
  i840.m_FontData = request.d('UnityEngine.UI.FontData', i841[0], i840.m_FontData)
  i840.m_Text = i841[1]
  request.r(i841[2], i841[3], 0, i840, 'm_Material')
  i840.m_Maskable = !!i841[4]
  i840.m_Color = new pc.Color(i841[5], i841[6], i841[7], i841[8])
  i840.m_RaycastTarget = !!i841[9]
  i840.m_RaycastPadding = new pc.Vec4( i841[10], i841[11], i841[12], i841[13] )
  return i840
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.UI.FontData' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'm_Font')
  i842.m_FontSize = i843[2]
  i842.m_FontStyle = i843[3]
  i842.m_BestFit = !!i843[4]
  i842.m_MinSize = i843[5]
  i842.m_MaxSize = i843[6]
  i842.m_Alignment = i843[7]
  i842.m_AlignByGeometry = !!i843[8]
  i842.m_RichText = !!i843[9]
  i842.m_HorizontalOverflow = i843[10]
  i842.m_VerticalOverflow = i843[11]
  i842.m_LineSpacing = i843[12]
  return i842
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'm_RootBone')
  var i847 = i845[2]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i844.m_BoneTransforms = i846
  i844.m_AlwaysUpdate = !!i845[3]
  i844.m_AutoRebind = !!i845[4]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i849 = data
  i848.frontSortingLayerID = i849[0]
  i848.frontSortingOrder = i849[1]
  i848.backSortingLayerID = i849[2]
  i848.backSortingOrder = i849[3]
  i848.alphaCutoff = i849[4]
  request.r(i849[5], i849[6], 0, i848, 'sprite')
  i848.tileMode = i849[7]
  i848.isCustomRangeActive = !!i849[8]
  i848.spriteSortPoint = i849[9]
  i848.enabled = !!i849[10]
  request.r(i849[11], i849[12], 0, i848, 'sharedMaterial')
  var i851 = i849[13]
  var i850 = []
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 2, i850, '')
  }
  i848.sharedMaterials = i850
  i848.receiveShadows = !!i849[14]
  i848.shadowCastingMode = i849[15]
  i848.sortingLayerID = i849[16]
  i848.sortingOrder = i849[17]
  i848.lightmapIndex = i849[18]
  i848.lightmapSceneIndex = i849[19]
  i848.lightmapScaleOffset = new pc.Vec4( i849[20], i849[21], i849[22], i849[23] )
  i848.lightProbeUsage = i849[24]
  i848.reflectionProbeUsage = i849[25]
  return i848
}

Deserializers["_2dxFX_Wave"] = function (request, data, root) {
  var i852 = root || request.c( '_2dxFX_Wave' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'ForceMaterial')
  i852.ActiveChange = !!i853[2]
  i852._Alpha = i853[3]
  i852._OffsetX = i853[4]
  i852._OffsetY = i853[5]
  i852._DistanceX = i853[6]
  i852._DistanceY = i853[7]
  i852._WaveTimeX = i853[8]
  i852._WaveTimeY = i853[9]
  i852.AutoPlayWaveX = !!i853[10]
  i852.AutoPlaySpeedX = i853[11]
  i852.AutoPlayWaveY = !!i853[12]
  i852.AutoPlaySpeedY = i853[13]
  i852.AutoRandom = !!i853[14]
  i852.AutoRandomRange = i853[15]
  i852.ShaderChange = i853[16]
  return i852
}

Deserializers["PlayableSpriteMask"] = function (request, data, root) {
  var i854 = root || request.c( 'PlayableSpriteMask' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'template')
  var i857 = i855[2]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('PlayableSpriteMask+Mask', i857[i + 0]) );
  }
  i854.masks = i856
  i854.outside = !!i855[3]
  return i854
}

Deserializers["PlayableSpriteMask+Mask"] = function (request, data, root) {
  var i860 = root || request.c( 'PlayableSpriteMask+Mask' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'transform')
  request.r(i861[2], i861[3], 0, i860, 'sprite')
  i860.cutoff = i861[4]
  return i860
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i862 = root || request.c( 'BasicDrag' )
  var i863 = data
  i862.canDrag = !!i863[0]
  i862.dragByDelta = !!i863[1]
  i862.isDragging = !!i863[2]
  i862.moveWithPointer = !!i863[3]
  i862.canReturn = !!i863[4]
  i862.jumpOnReturn = !!i863[5]
  i862.returnTime = i863[6]
  i862.Tool_Offset = new pc.Vec3( i863[7], i863[8], i863[9] )
  i862.canScaleIncrease = !!i863[10]
  i862.Self_ScaleNew = new pc.Vec3( i863[11], i863[12], i863[13] )
  i862.canRotateOnPick = !!i863[14]
  i862.startRot = new pc.Vec3( i863[15], i863[16], i863[17] )
  i862.newRot = new pc.Vec3( i863[18], i863[19], i863[20] )
  var i865 = i863[21]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 2, i864, '')
  }
  i862.childSprite = i864
  request.r(i863[22], i863[23], 0, i862, 'ToolSelectClip')
  request.r(i863[24], i863[25], 0, i862, 'ToolLoopClip')
  request.r(i863[26], i863[27], 0, i862, 'thisParticles')
  i862.onDragparticle = !!i863[28]
  request.r(i863[29], i863[30], 0, i862, 'dragParticles')
  request.r(i863[31], i863[32], 0, i862, 'anim')
  i862.startPos = new pc.Vec3( i863[33], i863[34], i863[35] )
  i862.startScale = new pc.Vec3( i863[36], i863[37], i863[38] )
  i862.Vibration = !!i863[39]
  i862.isPlacedCannotMove = !!i863[40]
  i862.isObjectMovingWhileDragging = !!i863[41]
  i862.OnMouseDownEvent = request.d('System.Action', i863[42], i862.OnMouseDownEvent)
  i862.OnMouseUpEvent = request.d('System.Action', i863[43], i862.OnMouseUpEvent)
  i862.ProgStartEvent = request.d('System.Action', i863[44], i862.ProgStartEvent)
  i862.ProgEndEvent = request.d('System.Action', i863[45], i862.ProgEndEvent)
  i862.canCallMouseUpWhenGamePaused = !!i863[46]
  i862.ClampX_L = i863[47]
  i862.ClampX_H = i863[48]
  i862.ClampY_L = i863[49]
  i862.ClampY_H = i863[50]
  i862.startOrder = i863[51]
  i862.dontResetItIsInCollider = !!i863[52]
  request.r(i863[53], i863[54], 0, i862, 'thisCollider')
  request.r(i863[55], i863[56], 0, i862, 'thisSR')
  i862.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i863[57], i862.OnMouseDownEventIndependentFromCanDrag)
  return i862
}

Deserializers["System.Action"] = function (request, data, root) {
  var i868 = root || request.c( 'System.Action' )
  var i869 = data
  return i868
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i870 = root || request.c( 'BD_Clamp' )
  var i871 = data
  i870.ClampX_L = i871[0]
  i870.ClampX_H = i871[1]
  i870.ClampY_L = i871[2]
  i870.ClampY_H = i871[3]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i873 = data
  i872.bodyType = i873[0]
  request.r(i873[1], i873[2], 0, i872, 'material')
  i872.simulated = !!i873[3]
  i872.useAutoMass = !!i873[4]
  i872.mass = i873[5]
  i872.drag = i873[6]
  i872.angularDrag = i873[7]
  i872.gravityScale = i873[8]
  i872.collisionDetectionMode = i873[9]
  i872.sleepMode = i873[10]
  i872.constraints = i873[11]
  return i872
}

Deserializers["PlaceItem"] = function (request, data, root) {
  var i874 = root || request.c( 'PlaceItem' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'thisDrag')
  request.r(i875[2], i875[3], 0, i874, 'Target')
  request.r(i875[4], i875[5], 0, i874, 'Clip')
  i874.jumpOnPlace = !!i875[6]
  i874.jumpHeight = i875[7]
  i874.jumpDuration = i875[8]
  i874.settleDuration = i875[9]
  i874.isPlaced = !!i875[10]
  i874.isInsideCollider = !!i875[11]
  i874.changeScaleOnPlace = !!i875[12]
  request.r(i875[13], i875[14], 0, i874, 'item')
  i874.newScaleOnPlace = new pc.Vec3( i875[15], i875[16], i875[17] )
  i874.OnPlaced = request.d('UnityEngine.Events.UnityEvent', i875[18], i874.OnPlaced)
  return i874
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i876 = root || request.c( 'ActionOnTap' )
  var i877 = data
  i876.OnTap = request.d('UnityEngine.Events.UnityEvent', i877[0], i876.OnTap)
  i876.OnTapExtra = request.d('System.Action', i877[1], i876.OnTapExtra)
  return i876
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i878 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i879 = data
  i878.targetIsSelf = !!i879[0]
  request.r(i879[1], i879[2], 0, i878, 'targetGO')
  i878.tweenTargetIsTargetGO = !!i879[3]
  i878.delay = i879[4]
  i878.duration = i879[5]
  i878.easeType = i879[6]
  i878.easeCurve = new pc.AnimationCurve( { keys_flow: i879[7] } )
  i878.loopType = i879[8]
  i878.loops = i879[9]
  i878.id = i879[10]
  i878.isRelative = !!i879[11]
  i878.isFrom = !!i879[12]
  i878.isIndependentUpdate = !!i879[13]
  i878.autoKill = !!i879[14]
  i878.autoGenerate = !!i879[15]
  i878.isActive = !!i879[16]
  i878.isValid = !!i879[17]
  request.r(i879[18], i879[19], 0, i878, 'target')
  i878.animationType = i879[20]
  i878.targetType = i879[21]
  i878.forcedTargetType = i879[22]
  i878.autoPlay = !!i879[23]
  i878.useTargetAsV3 = !!i879[24]
  i878.endValueFloat = i879[25]
  i878.endValueV3 = new pc.Vec3( i879[26], i879[27], i879[28] )
  i878.endValueV2 = new pc.Vec2( i879[29], i879[30] )
  i878.endValueColor = new pc.Color(i879[31], i879[32], i879[33], i879[34])
  i878.endValueString = i879[35]
  i878.endValueRect = UnityEngine.Rect.MinMaxRect(i879[36], i879[37], i879[38], i879[39])
  request.r(i879[40], i879[41], 0, i878, 'endValueTransform')
  i878.optionalBool0 = !!i879[42]
  i878.optionalBool1 = !!i879[43]
  i878.optionalFloat0 = i879[44]
  i878.optionalInt0 = i879[45]
  i878.optionalRotationMode = i879[46]
  i878.optionalScrambleMode = i879[47]
  i878.optionalShakeRandomnessMode = i879[48]
  i878.optionalString = i879[49]
  i878.updateType = i879[50]
  i878.isSpeedBased = !!i879[51]
  i878.hasOnStart = !!i879[52]
  i878.hasOnPlay = !!i879[53]
  i878.hasOnUpdate = !!i879[54]
  i878.hasOnStepComplete = !!i879[55]
  i878.hasOnComplete = !!i879[56]
  i878.hasOnTweenCreated = !!i879[57]
  i878.hasOnRewind = !!i879[58]
  i878.onStart = request.d('UnityEngine.Events.UnityEvent', i879[59], i878.onStart)
  i878.onPlay = request.d('UnityEngine.Events.UnityEvent', i879[60], i878.onPlay)
  i878.onUpdate = request.d('UnityEngine.Events.UnityEvent', i879[61], i878.onUpdate)
  i878.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i879[62], i878.onStepComplete)
  i878.onComplete = request.d('UnityEngine.Events.UnityEvent', i879[63], i878.onComplete)
  i878.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i879[64], i878.onTweenCreated)
  i878.onRewind = request.d('UnityEngine.Events.UnityEvent', i879[65], i878.onRewind)
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i881 = data
  i880.radius = i881[0]
  i880.enabled = !!i881[1]
  i880.isTrigger = !!i881[2]
  i880.usedByEffector = !!i881[3]
  i880.density = i881[4]
  i880.offset = new pc.Vec2( i881[5], i881[6] )
  request.r(i881[7], i881[8], 0, i880, 'material')
  return i880
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i882 = root || request.c( 'PlayParticlesOnCollision' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'Target')
  request.r(i883[2], i883[3], 0, i882, 'ParticlePrefab')
  i882.destroyIt = !!i883[4]
  i882.stayAtPlace = !!i883[5]
  i882.disableOnCollision = !!i883[6]
  i882.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i883[7], i882.OnCollisionEvent)
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i885 = data
  i884.usedByComposite = !!i885[0]
  i884.autoTiling = !!i885[1]
  var i887 = i885[2]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
  var i889 = i887[i + 0]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
    i888.push( new pc.Vec2( i889[i + 0], i889[i + 1] ) );
  }
    i886.push( i888 );
  }
  i884.points = i886
  i884.enabled = !!i885[3]
  i884.isTrigger = !!i885[4]
  i884.usedByEffector = !!i885[5]
  i884.density = i885[6]
  i884.offset = new pc.Vec2( i885[7], i885[8] )
  request.r(i885[9], i885[10], 0, i884, 'material')
  return i884
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i896 = root || request.c( 'PlaySfxOnCollision' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'Tip')
  i896.Mode = i897[2]
  request.r(i897[3], i897[4], 0, i896, 'DragInput')
  request.r(i897[5], i897[6], 0, i896, 'Source')
  i896.startVol = i897[7]
  i896.targetVol = i897[8]
  i896.duration = i897[9]
  request.r(i897[10], i897[11], 0, i896, 'Particles')
  i896.isDone = !!i897[12]
  i896.isInArea = !!i897[13]
  i896.isPlaying = !!i897[14]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'clip')
  request.r(i899[2], i899[3], 0, i898, 'outputAudioMixerGroup')
  i898.playOnAwake = !!i899[4]
  i898.loop = !!i899[5]
  i898.time = i899[6]
  i898.volume = i899[7]
  i898.pitch = i899[8]
  i898.enabled = !!i899[9]
  return i898
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i900 = root || request.c( 'BD_Action' )
  var i901 = data
  i900.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i901[0], i900.OnMouseDownEvent)
  i900.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i901[1], i900.OnMouseUpEvent)
  i900.setToolLayer = !!i901[2]
  request.r(i901[3], i901[4], 0, i900, 'tool_SP')
  return i900
}

Deserializers["Level1_SurfController"] = function (request, data, root) {
  var i902 = root || request.c( 'Level1_SurfController' )
  var i903 = data
  i902.target_rotZ = i903[0]
  i902.rotationDuration = i903[1]
  i902.rotationEase = i903[2]
  request.r(i903[3], i903[4], 0, i902, 'maskItem')
  i902.maskTarget_posY = i903[5]
  i902.maskMoveDuration = i903[6]
  i902.requiredHoldTime = i903[7]
  i902.minRotationForProgress = i903[8]
  request.r(i903[9], i903[10], 0, i902, 'tipCollider')
  request.r(i903[11], i903[12], 0, i902, 'targetZoneCollider')
  request.r(i903[13], i903[14], 0, i902, 'surf_Particles')
  request.r(i903[15], i903[16], 0, i902, 'surf_SubEmitter')
  request.r(i903[17], i903[18], 0, i902, 'Indication')
  i902.OnComplete = request.d('UnityEngine.Events.UnityEvent', i903[19], i902.OnComplete)
  i902.currentHoldProgress = i903[20]
  return i902
}

Deserializers["BD_Fold"] = function (request, data, root) {
  var i904 = root || request.c( 'BD_Fold' )
  var i905 = data
  i904.canDrag = !!i905[0]
  i904.canFoldBottomLeft = !!i905[1]
  i904.canFoldBottomRight = !!i905[2]
  i904.canFoldTopLeft = !!i905[3]
  i904.canFoldTopRight = !!i905[4]
  request.r(i905[5], i905[6], 0, i904, 'Indication')
  request.r(i905[7], i905[8], 0, i904, 'backSideSprite')
  i904.maxSideOffset = i905[9]
  i904.foldBackDuration = i905[10]
  i904.instantFoldAmount = i905[11]
  i904.useSmoothRelease = !!i905[12]
  i904.completionLimit = i905[13]
  i904.afterCompletionTravelTo = i905[14]
  i904.OnComplete = request.d('UnityEngine.Events.UnityEvent', i905[15], i904.OnComplete)
  i904.currentProgress = i905[16]
  i904.innerShadowStrength = i905[17]
  request.r(i905[18], i905[19], 0, i904, 'dragAudioSource')
  request.r(i905[20], i905[21], 0, i904, 'dragStartClip')
  request.r(i905[22], i905[23], 0, i904, 'completionClip')
  i904.audioFadeSpeed = i905[24]
  i904.audioMoveThreshold = i905[25]
  i904.hapticInterval = i905[26]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'sharedMesh')
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

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i911 = data
  i910.name = i911[0]
  i910.atlasId = i911[1]
  i910.mipmapCount = i911[2]
  i910.hdr = !!i911[3]
  i910.size = i911[4]
  i910.anisoLevel = i911[5]
  i910.filterMode = i911[6]
  var i913 = i911[7]
  var i912 = []
  for(var i = 0; i < i913.length; i += 4) {
    i912.push( UnityEngine.Rect.MinMaxRect(i913[i + 0], i913[i + 1], i913[i + 2], i913[i + 3]) );
  }
  i910.rects = i912
  i910.wrapU = i911[8]
  i910.wrapV = i911[9]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i917 = data
  i916.name = i917[0]
  i916.index = i917[1]
  i916.startup = !!i917[2]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i919 = data
  i918.aspect = i919[0]
  i918.orthographic = !!i919[1]
  i918.orthographicSize = i919[2]
  i918.backgroundColor = new pc.Color(i919[3], i919[4], i919[5], i919[6])
  i918.nearClipPlane = i919[7]
  i918.farClipPlane = i919[8]
  i918.fieldOfView = i919[9]
  i918.depth = i919[10]
  i918.clearFlags = i919[11]
  i918.cullingMask = i919[12]
  i918.rect = i919[13]
  request.r(i919[14], i919[15], 0, i918, 'targetTexture')
  i918.usePhysicalProperties = !!i919[16]
  i918.focalLength = i919[17]
  i918.sensorSize = new pc.Vec2( i919[18], i919[19] )
  i918.lensShift = new pc.Vec2( i919[20], i919[21] )
  i918.gateFit = i919[22]
  i918.commandBufferCount = i919[23]
  i918.cameraType = i919[24]
  i918.enabled = !!i919[25]
  return i918
}

Deserializers["CameraController"] = function (request, data, root) {
  var i920 = root || request.c( 'CameraController' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'cam')
  i920.defaultPosition = new pc.Vec3( i921[2], i921[3], i921[4] )
  i920.defaultSize = i921[5]
  i920.defaultFOV = i921[6]
  i920.defaultDuration = i921[7]
  i920.defaultEase = i921[8]
  return i920
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i922 = root || request.c( 'MusicSource' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'source')
  return i922
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i924 = root || request.c( 'UI_Manager' )
  var i925 = data
  i924.levelCompleted = !!i925[0]
  i924.isPauseActive = !!i925[1]
  i924.loadIndex = i925[2]
  request.r(i925[3], i925[4], 0, i924, 'removeAdsButton')
  request.r(i925[5], i925[6], 0, i924, 'pauseButton')
  request.r(i925[7], i925[8], 0, i924, 'Fade_Img')
  request.r(i925[9], i925[10], 0, i924, 'TopBarAnim')
  request.r(i925[11], i925[12], 0, i924, 'MainPanel')
  request.r(i925[13], i925[14], 0, i924, 'PausePanel')
  request.r(i925[15], i925[16], 0, i924, 'PausePopUp')
  request.r(i925[17], i925[18], 0, i924, 'PauseCanvasGroup')
  request.r(i925[19], i925[20], 0, i924, 'RateUsPanel')
  request.r(i925[21], i925[22], 0, i924, 'RateUsPopUp')
  request.r(i925[23], i925[24], 0, i924, 'RemoveAdsPanel')
  request.r(i925[25], i925[26], 0, i924, 'RemoveAdsPopUp')
  request.r(i925[27], i925[28], 0, i924, 'RemoveAdsCanvasGroup')
  var i927 = i925[29]
  var i926 = []
  for(var i = 0; i < i927.length; i += 2) {
  request.r(i927[i + 0], i927[i + 1], 2, i926, '')
  }
  i924.RemoveAdsAnims = i926
  request.r(i925[30], i925[31], 0, i924, 'CompletePanel')
  request.r(i925[32], i925[33], 0, i924, 'LevelIcon')
  request.r(i925[34], i925[35], 0, i924, 'CompleteParticles')
  request.r(i925[36], i925[37], 0, i924, 'progressBar')
  request.r(i925[38], i925[39], 0, i924, 'progressText')
  request.r(i925[40], i925[41], 0, i924, 'toolIcon1')
  request.r(i925[42], i925[43], 0, i924, 'toolIcon2')
  request.r(i925[44], i925[45], 0, i924, 'toolIcon3')
  request.r(i925[46], i925[47], 0, i924, 'toolIcon4')
  request.r(i925[48], i925[49], 0, i924, 'target1')
  request.r(i925[50], i925[51], 0, i924, 'target2')
  i924.toolMoveDuration = i925[52]
  i924.currentIndex = i925[53]
  var i929 = i925[54]
  var i928 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 1, i928, '')
  }
  i924.allTools = i928
  request.r(i925[55], i925[56], 0, i924, 'clockProgress')
  request.r(i925[57], i925[58], 0, i924, 'clockProgressFill')
  request.r(i925[59], i925[60], 0, i924, 'clockAudio')
  i924.moveDistance = i925[61]
  i924.animationDuration = i925[62]
  i924.greyBgChildName = i925[63]
  i924.pushOffset = i925[64]
  return i924
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i932 = root || request.c( 'GameManagerPlayable' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'endParticles')
  request.r(i933[2], i933[3], 0, i932, 'stepCompleteParticles')
  request.r(i933[4], i933[5], 0, i932, 'DefaultMat')
  request.r(i933[6], i933[7], 0, i932, 'BG_Music')
  request.r(i933[8], i933[9], 0, i932, 'restoreEffectShader')
  request.r(i933[10], i933[11], 0, i932, 'stickerEffectShader')
  i932.isComplete = !!i933[12]
  i932.isPaused = !!i933[13]
  request.r(i933[14], i933[15], 0, i932, 'currentLevel')
  i932.startLevelOnPlay = !!i933[16]
  i932.currentLevelNo = i933[17]
  return i932
}

Deserializers["AudioController"] = function (request, data, root) {
  var i934 = root || request.c( 'AudioController' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'MainMixer')
  request.r(i935[2], i935[3], 0, i934, 'UiClick')
  request.r(i935[4], i935[5], 0, i934, 'UiClickSource')
  var i937 = i935[6]
  var i936 = []
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 2, i936, '')
  }
  i934.SfxSources = i936
  var i939 = i935[7]
  var i938 = []
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 2, i938, '')
  }
  i934.AllClips = i938
  return i934
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.UI.Image' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'm_Sprite')
  i942.m_Type = i943[2]
  i942.m_PreserveAspect = !!i943[3]
  i942.m_FillCenter = !!i943[4]
  i942.m_FillMethod = i943[5]
  i942.m_FillAmount = i943[6]
  i942.m_FillClockwise = !!i943[7]
  i942.m_FillOrigin = i943[8]
  i942.m_UseSpriteMesh = !!i943[9]
  i942.m_PixelsPerUnitMultiplier = i943[10]
  request.r(i943[11], i943[12], 0, i942, 'm_Material')
  i942.m_Maskable = !!i943[13]
  i942.m_Color = new pc.Color(i943[14], i943[15], i943[16], i943[17])
  i942.m_RaycastTarget = !!i943[18]
  i942.m_RaycastPadding = new pc.Vec4( i943[19], i943[20], i943[21], i943[22] )
  return i942
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.UI.Button' )
  var i945 = data
  i944.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i945[0], i944.m_OnClick)
  i944.m_Navigation = request.d('UnityEngine.UI.Navigation', i945[1], i944.m_Navigation)
  i944.m_Transition = i945[2]
  i944.m_Colors = request.d('UnityEngine.UI.ColorBlock', i945[3], i944.m_Colors)
  i944.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i945[4], i944.m_SpriteState)
  i944.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i945[5], i944.m_AnimationTriggers)
  i944.m_Interactable = !!i945[6]
  request.r(i945[7], i945[8], 0, i944, 'm_TargetGraphic')
  return i944
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i947 = data
  i946.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i947[0], i946.m_PersistentCalls)
  return i946
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i949 = data
  i948.m_Mode = i949[0]
  i948.m_WrapAround = !!i949[1]
  request.r(i949[2], i949[3], 0, i948, 'm_SelectOnUp')
  request.r(i949[4], i949[5], 0, i948, 'm_SelectOnDown')
  request.r(i949[6], i949[7], 0, i948, 'm_SelectOnLeft')
  request.r(i949[8], i949[9], 0, i948, 'm_SelectOnRight')
  return i948
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i951 = data
  i950.m_NormalColor = new pc.Color(i951[0], i951[1], i951[2], i951[3])
  i950.m_HighlightedColor = new pc.Color(i951[4], i951[5], i951[6], i951[7])
  i950.m_PressedColor = new pc.Color(i951[8], i951[9], i951[10], i951[11])
  i950.m_SelectedColor = new pc.Color(i951[12], i951[13], i951[14], i951[15])
  i950.m_DisabledColor = new pc.Color(i951[16], i951[17], i951[18], i951[19])
  i950.m_ColorMultiplier = i951[20]
  i950.m_FadeDuration = i951[21]
  return i950
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'm_HighlightedSprite')
  request.r(i953[2], i953[3], 0, i952, 'm_PressedSprite')
  request.r(i953[4], i953[5], 0, i952, 'm_SelectedSprite')
  request.r(i953[6], i953[7], 0, i952, 'm_DisabledSprite')
  return i952
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i955 = data
  i954.m_NormalTrigger = i955[0]
  i954.m_HighlightedTrigger = i955[1]
  i954.m_PressedTrigger = i955[2]
  i954.m_SelectedTrigger = i955[3]
  i954.m_DisabledTrigger = i955[4]
  return i954
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i956 = root || request.c( 'PlayableHudRuntime' )
  var i957 = data
  return i956
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'm_FirstSelected')
  i958.m_sendNavigationEvents = !!i959[2]
  i958.m_DragThreshold = i959[3]
  return i958
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i961 = data
  i960.m_HorizontalAxis = i961[0]
  i960.m_VerticalAxis = i961[1]
  i960.m_SubmitButton = i961[2]
  i960.m_CancelButton = i961[3]
  i960.m_InputActionsPerSecond = i961[4]
  i960.m_RepeatDelay = i961[5]
  i960.m_ForceModuleActive = !!i961[6]
  i960.m_SendPointerHoverToParent = !!i961[7]
  return i960
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i962 = root || request.c( 'PlayableRouter' )
  var i963 = data
  var i965 = i963[0]
  var i964 = []
  for(var i = 0; i < i965.length; i += 2) {
  request.r(i965[i + 0], i965[i + 1], 2, i964, '')
  }
  i962.menuObjects = i964
  var i967 = i963[1]
  var i966 = []
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 2, i966, '')
  }
  i962.gameplayObjects = i966
  var i969 = i963[2]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('PlayableRouter+SubLevelSlot', i969[i + 0]) );
  }
  i962.subLevels = i968
  i962.fadeDuration = i963[3]
  i962.onMenuClosing = request.d('UnityEngine.Events.UnityEvent', i963[4], i962.onMenuClosing)
  i962.lockedMessage = i963[5]
  i962.lockedTapsToCTA = i963[6]
  return i962
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i972 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'button')
  request.r(i973[2], i973[3], 0, i972, 'level')
  return i972
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i974 = root || request.c( 'ToastManager' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'toastPanel')
  request.r(i975[2], i975[3], 0, i974, 'toastPopup')
  request.r(i975[4], i975[5], 0, i974, 'canvasGroup')
  request.r(i975[6], i975[7], 0, i974, 'toastText')
  i974.startY = i975[8]
  i974.visibleY = i975[9]
  i974.endY = i975[10]
  i974.animationTime = i975[11]
  i974.animationTimeUp = i975[12]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i977 = data
  i976.m_Alpha = i977[0]
  i976.m_Interactable = !!i977[1]
  i976.m_BlocksRaycasts = !!i977[2]
  i976.m_IgnoreParentGroups = !!i977[3]
  i976.enabled = !!i977[4]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i979 = data
  i978.ambientIntensity = i979[0]
  i978.reflectionIntensity = i979[1]
  i978.ambientMode = i979[2]
  i978.ambientLight = new pc.Color(i979[3], i979[4], i979[5], i979[6])
  i978.ambientSkyColor = new pc.Color(i979[7], i979[8], i979[9], i979[10])
  i978.ambientGroundColor = new pc.Color(i979[11], i979[12], i979[13], i979[14])
  i978.ambientEquatorColor = new pc.Color(i979[15], i979[16], i979[17], i979[18])
  i978.fogColor = new pc.Color(i979[19], i979[20], i979[21], i979[22])
  i978.fogEndDistance = i979[23]
  i978.fogStartDistance = i979[24]
  i978.fogDensity = i979[25]
  i978.fog = !!i979[26]
  request.r(i979[27], i979[28], 0, i978, 'skybox')
  i978.fogMode = i979[29]
  var i981 = i979[30]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i981[i + 0]) );
  }
  i978.lightmaps = i980
  i978.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i979[31], i978.lightProbes)
  i978.lightmapsMode = i979[32]
  i978.mixedBakeMode = i979[33]
  i978.environmentLightingMode = i979[34]
  i978.ambientProbe = new pc.SphericalHarmonicsL2(i979[35])
  request.r(i979[36], i979[37], 0, i978, 'customReflection')
  request.r(i979[38], i979[39], 0, i978, 'defaultReflection')
  i978.defaultReflectionMode = i979[40]
  i978.defaultReflectionResolution = i979[41]
  i978.sunLightObjectId = i979[42]
  i978.pixelLightCount = i979[43]
  i978.defaultReflectionHDR = !!i979[44]
  i978.hasLightDataAsset = !!i979[45]
  i978.hasManualGenerate = !!i979[46]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'lightmapColor')
  request.r(i985[2], i985[3], 0, i984, 'lightmapDirection')
  request.r(i985[4], i985[5], 0, i984, 'shadowMask')
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i986 = root || new UnityEngine.LightProbes()
  var i987 = data
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i995 = data
  var i997 = i995[0]
  var i996 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i997.length; i += 1) {
    i996.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i997[i + 0]));
  }
  i994.ShaderCompilationErrors = i996
  i994.name = i995[1]
  i994.guid = i995[2]
  var i999 = i995[3]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( i999[i + 0] );
  }
  i994.shaderDefinedKeywords = i998
  var i1001 = i995[4]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1001[i + 0]) );
  }
  i994.passes = i1000
  var i1003 = i995[5]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1003[i + 0]) );
  }
  i994.usePasses = i1002
  var i1005 = i995[6]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1005[i + 0]) );
  }
  i994.defaultParameterValues = i1004
  request.r(i995[7], i995[8], 0, i994, 'unityFallbackShader')
  i994.readDepth = !!i995[9]
  i994.hasDepthOnlyPass = !!i995[10]
  i994.isCreatedByShaderGraph = !!i995[11]
  i994.disableBatching = !!i995[12]
  i994.compiled = !!i995[13]
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1009 = data
  i1008.shaderName = i1009[0]
  i1008.errorMessage = i1009[1]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1014 = root || new pc.UnityShaderPass()
  var i1015 = data
  i1014.id = i1015[0]
  i1014.subShaderIndex = i1015[1]
  i1014.name = i1015[2]
  i1014.passType = i1015[3]
  i1014.grabPassTextureName = i1015[4]
  i1014.usePass = !!i1015[5]
  i1014.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1015[6], i1014.zTest)
  i1014.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1015[7], i1014.zWrite)
  i1014.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1015[8], i1014.culling)
  i1014.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1015[9], i1014.blending)
  i1014.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1015[10], i1014.alphaBlending)
  i1014.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1015[11], i1014.colorWriteMask)
  i1014.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1015[12], i1014.offsetUnits)
  i1014.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1015[13], i1014.offsetFactor)
  i1014.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1015[14], i1014.stencilRef)
  i1014.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1015[15], i1014.stencilReadMask)
  i1014.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1015[16], i1014.stencilWriteMask)
  i1014.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1015[17], i1014.stencilOp)
  i1014.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1015[18], i1014.stencilOpFront)
  i1014.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1015[19], i1014.stencilOpBack)
  var i1017 = i1015[20]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1017[i + 0]) );
  }
  i1014.tags = i1016
  var i1019 = i1015[21]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( i1019[i + 0] );
  }
  i1014.passDefinedKeywords = i1018
  var i1021 = i1015[22]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1021[i + 0]) );
  }
  i1014.passDefinedKeywordGroups = i1020
  var i1023 = i1015[23]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1023[i + 0]) );
  }
  i1014.variants = i1022
  var i1025 = i1015[24]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1025[i + 0]) );
  }
  i1014.excludedVariants = i1024
  i1014.hasDepthReader = !!i1015[25]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1027 = data
  i1026.val = i1027[0]
  i1026.name = i1027[1]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1029 = data
  i1028.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1029[0], i1028.src)
  i1028.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1029[1], i1028.dst)
  i1028.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1029[2], i1028.op)
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1031 = data
  i1030.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1031[0], i1030.pass)
  i1030.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1031[1], i1030.fail)
  i1030.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1031[2], i1030.zFail)
  i1030.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1031[3], i1030.comp)
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1035 = data
  i1034.name = i1035[0]
  i1034.value = i1035[1]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1039 = data
  var i1041 = i1039[0]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( i1041[i + 0] );
  }
  i1038.keywords = i1040
  i1038.hasDiscard = !!i1039[1]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1045 = data
  i1044.passId = i1045[0]
  i1044.subShaderIndex = i1045[1]
  var i1047 = i1045[2]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( i1047[i + 0] );
  }
  i1044.keywords = i1046
  i1044.vertexProgram = i1045[3]
  i1044.fragmentProgram = i1045[4]
  i1044.exportedForWebGl2 = !!i1045[5]
  i1044.readDepth = !!i1045[6]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1051 = data
  request.r(i1051[0], i1051[1], 0, i1050, 'shader')
  i1050.pass = i1051[2]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1055 = data
  i1054.name = i1055[0]
  i1054.type = i1055[1]
  i1054.value = new pc.Vec4( i1055[2], i1055[3], i1055[4], i1055[5] )
  i1054.textureValue = i1055[6]
  i1054.shaderPropertyFlag = i1055[7]
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1057 = data
  i1056.name = i1057[0]
  request.r(i1057[1], i1057[2], 0, i1056, 'texture')
  i1056.aabb = i1057[3]
  i1056.vertices = i1057[4]
  i1056.triangles = i1057[5]
  i1056.textureRect = UnityEngine.Rect.MinMaxRect(i1057[6], i1057[7], i1057[8], i1057[9])
  i1056.packedRect = UnityEngine.Rect.MinMaxRect(i1057[10], i1057[11], i1057[12], i1057[13])
  i1056.border = new pc.Vec4( i1057[14], i1057[15], i1057[16], i1057[17] )
  i1056.transparency = i1057[18]
  i1056.bounds = i1057[19]
  i1056.pixelsPerUnit = i1057[20]
  i1056.textureWidth = i1057[21]
  i1056.textureHeight = i1057[22]
  i1056.nativeSize = new pc.Vec2( i1057[23], i1057[24] )
  i1056.pivot = new pc.Vec2( i1057[25], i1057[26] )
  i1056.textureRectOffset = new pc.Vec2( i1057[27], i1057[28] )
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1059 = data
  i1058.name = i1059[0]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1061 = data
  i1060.name = i1061[0]
  i1060.wrapMode = i1061[1]
  i1060.isLooping = !!i1061[2]
  i1060.length = i1061[3]
  var i1063 = i1061[4]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1063[i + 0]) );
  }
  i1060.curves = i1062
  var i1065 = i1061[5]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1065[i + 0]) );
  }
  i1060.events = i1064
  i1060.halfPrecision = !!i1061[6]
  i1060._frameRate = i1061[7]
  i1060.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1061[8], i1060.localBounds)
  i1060.hasMuscleCurves = !!i1061[9]
  var i1067 = i1061[10]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( i1067[i + 0] );
  }
  i1060.clipMuscleConstant = i1066
  i1060.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1061[11], i1060.clipBindingConstant)
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1071 = data
  i1070.path = i1071[0]
  i1070.hash = i1071[1]
  i1070.componentType = i1071[2]
  i1070.property = i1071[3]
  i1070.keys = i1071[4]
  var i1073 = i1071[5]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1073[i + 0]) );
  }
  i1070.objectReferenceKeys = i1072
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1077 = data
  i1076.time = i1077[0]
  request.r(i1077[1], i1077[2], 0, i1076, 'value')
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1081 = data
  i1080.functionName = i1081[0]
  i1080.floatParameter = i1081[1]
  i1080.intParameter = i1081[2]
  i1080.stringParameter = i1081[3]
  request.r(i1081[4], i1081[5], 0, i1080, 'objectReferenceParameter')
  i1080.time = i1081[6]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1083 = data
  i1082.center = new pc.Vec3( i1083[0], i1083[1], i1083[2] )
  i1082.extends = new pc.Vec3( i1083[3], i1083[4], i1083[5] )
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1087 = data
  var i1089 = i1087[0]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( i1089[i + 0] );
  }
  i1086.genericBindings = i1088
  var i1091 = i1087[1]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( i1091[i + 0] );
  }
  i1086.pptrCurveMapping = i1090
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1093 = data
  i1092.name = i1093[0]
  i1092.ascent = i1093[1]
  i1092.originalLineHeight = i1093[2]
  i1092.fontSize = i1093[3]
  var i1095 = i1093[4]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1095[i + 0]) );
  }
  i1092.characterInfo = i1094
  request.r(i1093[5], i1093[6], 0, i1092, 'texture')
  i1092.originalFontSize = i1093[7]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1099 = data
  i1098.index = i1099[0]
  i1098.advance = i1099[1]
  i1098.bearing = i1099[2]
  i1098.glyphWidth = i1099[3]
  i1098.glyphHeight = i1099[4]
  i1098.minX = i1099[5]
  i1098.maxX = i1099[6]
  i1098.minY = i1099[7]
  i1098.maxY = i1099[8]
  i1098.uvBottomLeftX = i1099[9]
  i1098.uvBottomLeftY = i1099[10]
  i1098.uvBottomRightX = i1099[11]
  i1098.uvBottomRightY = i1099[12]
  i1098.uvTopLeftX = i1099[13]
  i1098.uvTopLeftY = i1099[14]
  i1098.uvTopRightX = i1099[15]
  i1098.uvTopRightY = i1099[16]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1101 = data
  i1100.name = i1101[0]
  var i1103 = i1101[1]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1103[i + 0]) );
  }
  i1100.layers = i1102
  var i1105 = i1101[2]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1105[i + 0]) );
  }
  i1100.parameters = i1104
  i1100.animationClips = i1101[3]
  i1100.avatarUnsupported = i1101[4]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1109 = data
  i1108.name = i1109[0]
  i1108.defaultWeight = i1109[1]
  i1108.blendingMode = i1109[2]
  i1108.avatarMask = i1109[3]
  i1108.syncedLayerIndex = i1109[4]
  i1108.syncedLayerAffectsTiming = !!i1109[5]
  i1108.syncedLayers = i1109[6]
  i1108.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1109[7], i1108.stateMachine)
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1111 = data
  i1110.id = i1111[0]
  i1110.name = i1111[1]
  i1110.path = i1111[2]
  var i1113 = i1111[3]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1113[i + 0]) );
  }
  i1110.states = i1112
  var i1115 = i1111[4]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1115[i + 0]) );
  }
  i1110.machines = i1114
  var i1117 = i1111[5]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1117[i + 0]) );
  }
  i1110.entryStateTransitions = i1116
  var i1119 = i1111[6]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1119[i + 0]) );
  }
  i1110.exitStateTransitions = i1118
  var i1121 = i1111[7]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1121[i + 0]) );
  }
  i1110.anyStateTransitions = i1120
  i1110.defaultStateId = i1111[8]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1125 = data
  i1124.id = i1125[0]
  i1124.name = i1125[1]
  i1124.cycleOffset = i1125[2]
  i1124.cycleOffsetParameter = i1125[3]
  i1124.cycleOffsetParameterActive = !!i1125[4]
  i1124.mirror = !!i1125[5]
  i1124.mirrorParameter = i1125[6]
  i1124.mirrorParameterActive = !!i1125[7]
  i1124.motionId = i1125[8]
  i1124.nameHash = i1125[9]
  i1124.fullPathHash = i1125[10]
  i1124.speed = i1125[11]
  i1124.speedParameter = i1125[12]
  i1124.speedParameterActive = !!i1125[13]
  i1124.tag = i1125[14]
  i1124.tagHash = i1125[15]
  i1124.writeDefaultValues = !!i1125[16]
  var i1127 = i1125[17]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 2) {
  request.r(i1127[i + 0], i1127[i + 1], 2, i1126, '')
  }
  i1124.behaviours = i1126
  var i1129 = i1125[18]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1129[i + 0]) );
  }
  i1124.transitions = i1128
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1135 = data
  i1134.fullPath = i1135[0]
  i1134.canTransitionToSelf = !!i1135[1]
  i1134.duration = i1135[2]
  i1134.exitTime = i1135[3]
  i1134.hasExitTime = !!i1135[4]
  i1134.hasFixedDuration = !!i1135[5]
  i1134.interruptionSource = i1135[6]
  i1134.offset = i1135[7]
  i1134.orderedInterruption = !!i1135[8]
  i1134.destinationStateId = i1135[9]
  i1134.isExit = !!i1135[10]
  i1134.mute = !!i1135[11]
  i1134.solo = !!i1135[12]
  var i1137 = i1135[13]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1137[i + 0]) );
  }
  i1134.conditions = i1136
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1143 = data
  i1142.destinationStateId = i1143[0]
  i1142.isExit = !!i1143[1]
  i1142.mute = !!i1143[2]
  i1142.solo = !!i1143[3]
  var i1145 = i1143[4]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1145[i + 0]) );
  }
  i1142.conditions = i1144
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1149 = data
  i1148.mode = i1149[0]
  i1148.parameter = i1149[1]
  i1148.threshold = i1149[2]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1153 = data
  i1152.defaultBool = !!i1153[0]
  i1152.defaultFloat = i1153[1]
  i1152.defaultInt = i1153[2]
  i1152.name = i1153[3]
  i1152.nameHash = i1153[4]
  i1152.type = i1153[5]
  return i1152
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1154 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1155 = data
  i1154.useSafeMode = !!i1155[0]
  i1154.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1155[1], i1154.safeModeOptions)
  i1154.timeScale = i1155[2]
  i1154.unscaledTimeScale = i1155[3]
  i1154.useSmoothDeltaTime = !!i1155[4]
  i1154.maxSmoothUnscaledTime = i1155[5]
  i1154.rewindCallbackMode = i1155[6]
  i1154.showUnityEditorReport = !!i1155[7]
  i1154.logBehaviour = i1155[8]
  i1154.drawGizmos = !!i1155[9]
  i1154.defaultRecyclable = !!i1155[10]
  i1154.defaultAutoPlay = i1155[11]
  i1154.defaultUpdateType = i1155[12]
  i1154.defaultTimeScaleIndependent = !!i1155[13]
  i1154.defaultEaseType = i1155[14]
  i1154.defaultEaseOvershootOrAmplitude = i1155[15]
  i1154.defaultEasePeriod = i1155[16]
  i1154.defaultAutoKill = !!i1155[17]
  i1154.defaultLoopType = i1155[18]
  i1154.debugMode = !!i1155[19]
  i1154.debugStoreTargetId = !!i1155[20]
  i1154.showPreviewPanel = !!i1155[21]
  i1154.storeSettingsLocation = i1155[22]
  i1154.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1155[23], i1154.modules)
  i1154.createASMDEF = !!i1155[24]
  i1154.showPlayingTweens = !!i1155[25]
  i1154.showPausedTweens = !!i1155[26]
  return i1154
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1156 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1157 = data
  i1156.logBehaviour = i1157[0]
  i1156.nestedTweenFailureBehaviour = i1157[1]
  return i1156
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1158 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1159 = data
  i1158.showPanel = !!i1159[0]
  i1158.audioEnabled = !!i1159[1]
  i1158.physicsEnabled = !!i1159[2]
  i1158.physics2DEnabled = !!i1159[3]
  i1158.spriteEnabled = !!i1159[4]
  i1158.uiEnabled = !!i1159[5]
  i1158.textMeshProEnabled = !!i1159[6]
  i1158.tk2DEnabled = !!i1159[7]
  i1158.deAudioEnabled = !!i1159[8]
  i1158.deUnityExtendedEnabled = !!i1159[9]
  i1158.epoOutlineEnabled = !!i1159[10]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1161 = data
  var i1163 = i1161[0]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1163[i + 0]) );
  }
  i1160.files = i1162
  i1160.componentToPrefabIds = i1161[1]
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1167 = data
  i1166.path = i1167[0]
  request.r(i1167[1], i1167[2], 0, i1166, 'unityObject')
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1169 = data
  var i1171 = i1169[0]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1171[i + 0]) );
  }
  i1168.scriptsExecutionOrder = i1170
  var i1173 = i1169[1]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1173[i + 0]) );
  }
  i1168.sortingLayers = i1172
  var i1175 = i1169[2]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1175[i + 0]) );
  }
  i1168.cullingLayers = i1174
  i1168.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1169[3], i1168.timeSettings)
  i1168.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1169[4], i1168.physicsSettings)
  i1168.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1169[5], i1168.physics2DSettings)
  i1168.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1169[6], i1168.qualitySettings)
  i1168.enableRealtimeShadows = !!i1169[7]
  i1168.enableAutoInstancing = !!i1169[8]
  i1168.enableStaticBatching = !!i1169[9]
  i1168.enableDynamicBatching = !!i1169[10]
  i1168.usePreservativeDynamicBatching = !!i1169[11]
  i1168.lightmapEncodingQuality = i1169[12]
  i1168.desiredColorSpace = i1169[13]
  var i1177 = i1169[14]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( i1177[i + 0] );
  }
  i1168.allTags = i1176
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1181 = data
  i1180.name = i1181[0]
  i1180.value = i1181[1]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1185 = data
  i1184.id = i1185[0]
  i1184.name = i1185[1]
  i1184.value = i1185[2]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1189 = data
  i1188.id = i1189[0]
  i1188.name = i1189[1]
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1191 = data
  i1190.fixedDeltaTime = i1191[0]
  i1190.maximumDeltaTime = i1191[1]
  i1190.timeScale = i1191[2]
  i1190.maximumParticleTimestep = i1191[3]
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1193 = data
  i1192.gravity = new pc.Vec3( i1193[0], i1193[1], i1193[2] )
  i1192.defaultSolverIterations = i1193[3]
  i1192.bounceThreshold = i1193[4]
  i1192.autoSyncTransforms = !!i1193[5]
  i1192.autoSimulation = !!i1193[6]
  var i1195 = i1193[7]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1195[i + 0]) );
  }
  i1192.collisionMatrix = i1194
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1199 = data
  i1198.enabled = !!i1199[0]
  i1198.layerId = i1199[1]
  i1198.otherLayerId = i1199[2]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1201 = data
  request.r(i1201[0], i1201[1], 0, i1200, 'material')
  i1200.gravity = new pc.Vec2( i1201[2], i1201[3] )
  i1200.positionIterations = i1201[4]
  i1200.velocityIterations = i1201[5]
  i1200.velocityThreshold = i1201[6]
  i1200.maxLinearCorrection = i1201[7]
  i1200.maxAngularCorrection = i1201[8]
  i1200.maxTranslationSpeed = i1201[9]
  i1200.maxRotationSpeed = i1201[10]
  i1200.baumgarteScale = i1201[11]
  i1200.baumgarteTOIScale = i1201[12]
  i1200.timeToSleep = i1201[13]
  i1200.linearSleepTolerance = i1201[14]
  i1200.angularSleepTolerance = i1201[15]
  i1200.defaultContactOffset = i1201[16]
  i1200.autoSimulation = !!i1201[17]
  i1200.queriesHitTriggers = !!i1201[18]
  i1200.queriesStartInColliders = !!i1201[19]
  i1200.callbacksOnDisable = !!i1201[20]
  i1200.reuseCollisionCallbacks = !!i1201[21]
  i1200.autoSyncTransforms = !!i1201[22]
  var i1203 = i1201[23]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1203[i + 0]) );
  }
  i1200.collisionMatrix = i1202
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1207 = data
  i1206.enabled = !!i1207[0]
  i1206.layerId = i1207[1]
  i1206.otherLayerId = i1207[2]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1209 = data
  var i1211 = i1209[0]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1211[i + 0]) );
  }
  i1208.qualityLevels = i1210
  var i1213 = i1209[1]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( i1213[i + 0] );
  }
  i1208.names = i1212
  i1208.shadows = i1209[2]
  i1208.anisotropicFiltering = i1209[3]
  i1208.antiAliasing = i1209[4]
  i1208.lodBias = i1209[5]
  i1208.shadowCascades = i1209[6]
  i1208.shadowDistance = i1209[7]
  i1208.shadowmaskMode = i1209[8]
  i1208.shadowProjection = i1209[9]
  i1208.shadowResolution = i1209[10]
  i1208.softParticles = !!i1209[11]
  i1208.softVegetation = !!i1209[12]
  i1208.activeColorSpace = i1209[13]
  i1208.desiredColorSpace = i1209[14]
  i1208.masterTextureLimit = i1209[15]
  i1208.maxQueuedFrames = i1209[16]
  i1208.particleRaycastBudget = i1209[17]
  i1208.pixelLightCount = i1209[18]
  i1208.realtimeReflectionProbes = !!i1209[19]
  i1208.shadowCascade2Split = i1209[20]
  i1208.shadowCascade4Split = new pc.Vec3( i1209[21], i1209[22], i1209[23] )
  i1208.streamingMipmapsActive = !!i1209[24]
  i1208.vSyncCount = i1209[25]
  i1208.asyncUploadBufferSize = i1209[26]
  i1208.asyncUploadTimeSlice = i1209[27]
  i1208.billboardsFaceCameraPosition = !!i1209[28]
  i1208.shadowNearPlaneOffset = i1209[29]
  i1208.streamingMipmapsMemoryBudget = i1209[30]
  i1208.maximumLODLevel = i1209[31]
  i1208.streamingMipmapsAddAllCameras = !!i1209[32]
  i1208.streamingMipmapsMaxLevelReduction = i1209[33]
  i1208.streamingMipmapsRenderersPerFrame = i1209[34]
  i1208.resolutionScalingFixedDPIFactor = i1209[35]
  i1208.streamingMipmapsMaxFileIORequests = i1209[36]
  i1208.currentQualityLevel = i1209[37]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i1217 = data
  var i1219 = i1217[0]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i1219[i + 0]) );
  }
  i1216.groups = i1218
  var i1221 = i1217[1]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i1221[i + 0]) );
  }
  i1216.snapshots = i1220
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i1225 = data
  i1224.id = i1225[0]
  i1224.childGroupIds = i1225[1]
  i1224.name = i1225[2]
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i1229 = data
  i1228.id = i1229[0]
  var i1231 = i1229[1]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i1231[i + 0]) );
  }
  i1228.parameters = i1230
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i1235 = data
  i1234.name = i1235[0]
  i1234.value = i1235[1]
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1239 = data
  i1238.weight = i1239[0]
  i1238.vertices = i1239[1]
  i1238.normals = i1239[2]
  i1238.tangents = i1239[3]
  return i1238
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[75],"76":[49],"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[78],"85":[36],"86":[36],"87":[36],"88":[36],"89":[36],"90":[36],"91":[36],"92":[36],"93":[36],"94":[36],"95":[36],"96":[36],"97":[36],"98":[49],"99":[28],"100":[101],"102":[101],"23":[22],"103":[104],"46":[11],"105":[14],"106":[11],"107":[108],"109":[108],"110":[39],"111":[14],"112":[11],"113":[10],"31":[11],"114":[22],"115":[22],"26":[23],"54":[29,22],"116":[22],"25":[23],"117":[22],"118":[22],"119":[22],"120":[22],"121":[22],"122":[22],"123":[22],"124":[22],"125":[22],"126":[29,22],"127":[22],"128":[22],"129":[22],"130":[22],"13":[29,22],"131":[22],"132":[60],"133":[60],"61":[60],"134":[60],"135":[49],"136":[49]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level1_Cloth_Playable_PlayableStep1to2","UnityEngine.GameObject","BasicDrag","UnityEngine.SpriteRenderer","Level1_SurfController","UnityEngine.UI.Text","UnityEngine.BoxCollider2D","UnityEngine.AudioClip","UnityEngine.Sprite","UnityEngine.AudioSource","PlayableCTA","PlayableFadeCoverSettings","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","RotaryTimerKnob","UnityEngine.MeshRenderer","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteMask","_2dxFX_Wave","PlayableSpriteMask","BD_Clamp","UnityEngine.Rigidbody2D","PlaceItem","ActionOnTap","DG.Tweening.DOTweenAnimation","UnityEngine.CircleCollider2D","PlayParticlesOnCollision","UnityEngine.PolygonCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","BD_Action","BD_Fold","UnityEngine.MeshFilter","BD_SpriteChange","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.UI.Image","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableRouter","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","TeaseTapCTA","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "10/28/2026 09:44:32";

Deserializers.lunaDaysRunning = "28.1";

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

Deserializers.buildID = "8012bda3-72ab-46d8-8287-be6373d8bd09";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

