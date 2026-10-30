var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.JointSpring' )
  var i617 = data
  i616.spring = i617[0]
  i616.damper = i617[1]
  i616.targetPosition = i617[2]
  return i616
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.JointMotor' )
  var i619 = data
  i618.m_TargetVelocity = i619[0]
  i618.m_Force = i619[1]
  i618.m_FreeSpin = i619[2]
  return i618
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.JointLimits' )
  var i621 = data
  i620.m_Min = i621[0]
  i620.m_Max = i621[1]
  i620.m_Bounciness = i621[2]
  i620.m_BounceMinVelocity = i621[3]
  i620.m_ContactDistance = i621[4]
  i620.minBounce = i621[5]
  i620.maxBounce = i621[6]
  return i620
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.JointDrive' )
  var i623 = data
  i622.m_PositionSpring = i623[0]
  i622.m_PositionDamper = i623[1]
  i622.m_MaximumForce = i623[2]
  i622.m_UseAcceleration = i623[3]
  return i622
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i625 = data
  i624.m_Spring = i625[0]
  i624.m_Damper = i625[1]
  return i624
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i627 = data
  i626.m_Limit = i627[0]
  i626.m_Bounciness = i627[1]
  i626.m_ContactDistance = i627[2]
  return i626
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i629 = data
  i628.m_ExtremumSlip = i629[0]
  i628.m_ExtremumValue = i629[1]
  i628.m_AsymptoteSlip = i629[2]
  i628.m_AsymptoteValue = i629[3]
  i628.m_Stiffness = i629[4]
  return i628
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i631 = data
  i630.m_LowerAngle = i631[0]
  i630.m_UpperAngle = i631[1]
  return i630
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i633 = data
  i632.m_MotorSpeed = i633[0]
  i632.m_MaximumMotorTorque = i633[1]
  return i632
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i635 = data
  i634.m_DampingRatio = i635[0]
  i634.m_Frequency = i635[1]
  i634.m_Angle = i635[2]
  return i634
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i637 = data
  i636.m_LowerTranslation = i637[0]
  i636.m_UpperTranslation = i637[1]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i638 = root || new pc.UnityMaterial()
  var i639 = data
  i638.name = i639[0]
  request.r(i639[1], i639[2], 0, i638, 'shader')
  i638.renderQueue = i639[3]
  i638.enableInstancing = !!i639[4]
  var i641 = i639[5]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i641[i + 0]) );
  }
  i638.floatParameters = i640
  var i643 = i639[6]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i643[i + 0]) );
  }
  i638.colorParameters = i642
  var i645 = i639[7]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i645[i + 0]) );
  }
  i638.vectorParameters = i644
  var i647 = i639[8]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i647[i + 0]) );
  }
  i638.textureParameters = i646
  var i649 = i639[9]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i649[i + 0]) );
  }
  i638.materialFlags = i648
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i653 = data
  i652.name = i653[0]
  i652.value = i653[1]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i657 = data
  i656.name = i657[0]
  i656.value = new pc.Color(i657[1], i657[2], i657[3], i657[4])
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i661 = data
  i660.name = i661[0]
  i660.value = new pc.Vec4( i661[1], i661[2], i661[3], i661[4] )
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i665 = data
  i664.name = i665[0]
  request.r(i665[1], i665[2], 0, i664, 'value')
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i669 = data
  i668.name = i669[0]
  i668.enabled = !!i669[1]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i671 = data
  i670.name = i671[0]
  i670.width = i671[1]
  i670.height = i671[2]
  i670.mipmapCount = i671[3]
  i670.anisoLevel = i671[4]
  i670.filterMode = i671[5]
  i670.hdr = !!i671[6]
  i670.format = i671[7]
  i670.wrapMode = i671[8]
  i670.alphaIsTransparency = !!i671[9]
  i670.alphaSource = i671[10]
  i670.graphicsFormat = i671[11]
  i670.sRGBTexture = !!i671[12]
  i670.desiredColorSpace = i671[13]
  i670.wrapU = i671[14]
  i670.wrapV = i671[15]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i673 = data
  i672.name = i673[0]
  i672.halfPrecision = !!i673[1]
  i672.useSimplification = !!i673[2]
  i672.useUInt32IndexFormat = !!i673[3]
  i672.vertexCount = i673[4]
  i672.aabb = i673[5]
  var i675 = i673[6]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( !!i675[i + 0] );
  }
  i672.streams = i674
  i672.vertices = i673[7]
  var i677 = i673[8]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i677[i + 0]) );
  }
  i672.subMeshes = i676
  var i679 = i673[9]
  var i678 = []
  for(var i = 0; i < i679.length; i += 16) {
    i678.push( new pc.Mat4().setData(i679[i + 0], i679[i + 1], i679[i + 2], i679[i + 3],  i679[i + 4], i679[i + 5], i679[i + 6], i679[i + 7],  i679[i + 8], i679[i + 9], i679[i + 10], i679[i + 11],  i679[i + 12], i679[i + 13], i679[i + 14], i679[i + 15]) );
  }
  i672.bindposes = i678
  var i681 = i673[10]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i681[i + 0]) );
  }
  i672.blendShapes = i680
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i687 = data
  i686.triangles = i687[0]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i693 = data
  i692.name = i693[0]
  var i695 = i693[1]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i695[i + 0]) );
  }
  i692.frames = i694
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i697 = data
  i696.position = new pc.Vec3( i697[0], i697[1], i697[2] )
  i696.scale = new pc.Vec3( i697[3], i697[4], i697[5] )
  i696.rotation = new pc.Quat(i697[6], i697[7], i697[8], i697[9])
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i699 = data
  i698.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i699[0], i698.main)
  i698.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i699[1], i698.colorBySpeed)
  i698.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i699[2], i698.colorOverLifetime)
  i698.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i699[3], i698.emission)
  i698.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i699[4], i698.rotationBySpeed)
  i698.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i699[5], i698.rotationOverLifetime)
  i698.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i699[6], i698.shape)
  i698.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i699[7], i698.sizeBySpeed)
  i698.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i699[8], i698.sizeOverLifetime)
  i698.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i699[9], i698.textureSheetAnimation)
  i698.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i699[10], i698.velocityOverLifetime)
  i698.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i699[11], i698.noise)
  i698.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i699[12], i698.inheritVelocity)
  i698.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i699[13], i698.forceOverLifetime)
  i698.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i699[14], i698.limitVelocityOverLifetime)
  i698.useAutoRandomSeed = !!i699[15]
  i698.randomSeed = i699[16]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i700 = root || new pc.ParticleSystemMain()
  var i701 = data
  i700.duration = i701[0]
  i700.loop = !!i701[1]
  i700.prewarm = !!i701[2]
  i700.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[3], i700.startDelay)
  i700.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[4], i700.startLifetime)
  i700.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[5], i700.startSpeed)
  i700.startSize3D = !!i701[6]
  i700.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[7], i700.startSizeX)
  i700.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[8], i700.startSizeY)
  i700.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[9], i700.startSizeZ)
  i700.startRotation3D = !!i701[10]
  i700.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[11], i700.startRotationX)
  i700.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[12], i700.startRotationY)
  i700.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[13], i700.startRotationZ)
  i700.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i701[14], i700.startColor)
  i700.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[15], i700.gravityModifier)
  i700.simulationSpace = i701[16]
  request.r(i701[17], i701[18], 0, i700, 'customSimulationSpace')
  i700.simulationSpeed = i701[19]
  i700.useUnscaledTime = !!i701[20]
  i700.scalingMode = i701[21]
  i700.playOnAwake = !!i701[22]
  i700.maxParticles = i701[23]
  i700.emitterVelocityMode = i701[24]
  i700.stopAction = i701[25]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i702 = root || new pc.MinMaxCurve()
  var i703 = data
  i702.mode = i703[0]
  i702.curveMin = new pc.AnimationCurve( { keys_flow: i703[1] } )
  i702.curveMax = new pc.AnimationCurve( { keys_flow: i703[2] } )
  i702.curveMultiplier = i703[3]
  i702.constantMin = i703[4]
  i702.constantMax = i703[5]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i704 = root || new pc.MinMaxGradient()
  var i705 = data
  i704.mode = i705[0]
  i704.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i705[1], i704.gradientMin)
  i704.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i705[2], i704.gradientMax)
  i704.colorMin = new pc.Color(i705[3], i705[4], i705[5], i705[6])
  i704.colorMax = new pc.Color(i705[7], i705[8], i705[9], i705[10])
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i707 = data
  i706.mode = i707[0]
  var i709 = i707[1]
  var i708 = []
  for(var i = 0; i < i709.length; i += 1) {
    i708.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i709[i + 0]) );
  }
  i706.colorKeys = i708
  var i711 = i707[2]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i711[i + 0]) );
  }
  i706.alphaKeys = i710
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i712 = root || new pc.ParticleSystemColorBySpeed()
  var i713 = data
  i712.enabled = !!i713[0]
  i712.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i713[1], i712.color)
  i712.range = new pc.Vec2( i713[2], i713[3] )
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i717 = data
  i716.color = new pc.Color(i717[0], i717[1], i717[2], i717[3])
  i716.time = i717[4]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i721 = data
  i720.alpha = i721[0]
  i720.time = i721[1]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i722 = root || new pc.ParticleSystemColorOverLifetime()
  var i723 = data
  i722.enabled = !!i723[0]
  i722.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i723[1], i722.color)
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i724 = root || new pc.ParticleSystemEmitter()
  var i725 = data
  i724.enabled = !!i725[0]
  i724.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[1], i724.rateOverTime)
  i724.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[2], i724.rateOverDistance)
  var i727 = i725[3]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i727[i + 0]) );
  }
  i724.bursts = i726
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i730 = root || new pc.ParticleSystemBurst()
  var i731 = data
  i730.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[0], i730.count)
  i730.cycleCount = i731[1]
  i730.minCount = i731[2]
  i730.maxCount = i731[3]
  i730.repeatInterval = i731[4]
  i730.time = i731[5]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i732 = root || new pc.ParticleSystemRotationBySpeed()
  var i733 = data
  i732.enabled = !!i733[0]
  i732.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[1], i732.x)
  i732.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[2], i732.y)
  i732.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[3], i732.z)
  i732.separateAxes = !!i733[4]
  i732.range = new pc.Vec2( i733[5], i733[6] )
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i734 = root || new pc.ParticleSystemRotationOverLifetime()
  var i735 = data
  i734.enabled = !!i735[0]
  i734.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[1], i734.x)
  i734.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[2], i734.y)
  i734.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[3], i734.z)
  i734.separateAxes = !!i735[4]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i736 = root || new pc.ParticleSystemShape()
  var i737 = data
  i736.enabled = !!i737[0]
  i736.shapeType = i737[1]
  i736.randomDirectionAmount = i737[2]
  i736.sphericalDirectionAmount = i737[3]
  i736.randomPositionAmount = i737[4]
  i736.alignToDirection = !!i737[5]
  i736.radius = i737[6]
  i736.radiusMode = i737[7]
  i736.radiusSpread = i737[8]
  i736.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[9], i736.radiusSpeed)
  i736.radiusThickness = i737[10]
  i736.angle = i737[11]
  i736.length = i737[12]
  i736.boxThickness = new pc.Vec3( i737[13], i737[14], i737[15] )
  i736.meshShapeType = i737[16]
  request.r(i737[17], i737[18], 0, i736, 'mesh')
  request.r(i737[19], i737[20], 0, i736, 'meshRenderer')
  request.r(i737[21], i737[22], 0, i736, 'skinnedMeshRenderer')
  i736.useMeshMaterialIndex = !!i737[23]
  i736.meshMaterialIndex = i737[24]
  i736.useMeshColors = !!i737[25]
  i736.normalOffset = i737[26]
  i736.arc = i737[27]
  i736.arcMode = i737[28]
  i736.arcSpread = i737[29]
  i736.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[30], i736.arcSpeed)
  i736.donutRadius = i737[31]
  i736.position = new pc.Vec3( i737[32], i737[33], i737[34] )
  i736.rotation = new pc.Vec3( i737[35], i737[36], i737[37] )
  i736.scale = new pc.Vec3( i737[38], i737[39], i737[40] )
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i738 = root || new pc.ParticleSystemSizeBySpeed()
  var i739 = data
  i738.enabled = !!i739[0]
  i738.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[1], i738.x)
  i738.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[2], i738.y)
  i738.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[3], i738.z)
  i738.separateAxes = !!i739[4]
  i738.range = new pc.Vec2( i739[5], i739[6] )
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i740 = root || new pc.ParticleSystemSizeOverLifetime()
  var i741 = data
  i740.enabled = !!i741[0]
  i740.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[1], i740.x)
  i740.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[2], i740.y)
  i740.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[3], i740.z)
  i740.separateAxes = !!i741[4]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i742 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i743 = data
  i742.enabled = !!i743[0]
  i742.mode = i743[1]
  i742.animation = i743[2]
  i742.numTilesX = i743[3]
  i742.numTilesY = i743[4]
  i742.useRandomRow = !!i743[5]
  i742.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[6], i742.frameOverTime)
  i742.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[7], i742.startFrame)
  i742.cycleCount = i743[8]
  i742.rowIndex = i743[9]
  i742.flipU = i743[10]
  i742.flipV = i743[11]
  i742.spriteCount = i743[12]
  var i745 = i743[13]
  var i744 = []
  for(var i = 0; i < i745.length; i += 2) {
  request.r(i745[i + 0], i745[i + 1], 2, i744, '')
  }
  i742.sprites = i744
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i748 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i749 = data
  i748.enabled = !!i749[0]
  i748.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[1], i748.x)
  i748.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[2], i748.y)
  i748.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[3], i748.z)
  i748.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[4], i748.radial)
  i748.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[5], i748.speedModifier)
  i748.space = i749[6]
  i748.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[7], i748.orbitalX)
  i748.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[8], i748.orbitalY)
  i748.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[9], i748.orbitalZ)
  i748.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[10], i748.orbitalOffsetX)
  i748.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[11], i748.orbitalOffsetY)
  i748.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[12], i748.orbitalOffsetZ)
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i750 = root || new pc.ParticleSystemNoise()
  var i751 = data
  i750.enabled = !!i751[0]
  i750.separateAxes = !!i751[1]
  i750.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[2], i750.strengthX)
  i750.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[3], i750.strengthY)
  i750.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[4], i750.strengthZ)
  i750.frequency = i751[5]
  i750.damping = !!i751[6]
  i750.octaveCount = i751[7]
  i750.octaveMultiplier = i751[8]
  i750.octaveScale = i751[9]
  i750.quality = i751[10]
  i750.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[11], i750.scrollSpeed)
  i750.scrollSpeedMultiplier = i751[12]
  i750.remapEnabled = !!i751[13]
  i750.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[14], i750.remapX)
  i750.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[15], i750.remapY)
  i750.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[16], i750.remapZ)
  i750.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[17], i750.positionAmount)
  i750.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[18], i750.rotationAmount)
  i750.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i751[19], i750.sizeAmount)
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemInheritVelocity()
  var i753 = data
  i752.enabled = !!i753[0]
  i752.mode = i753[1]
  i752.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[2], i752.curve)
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemForceOverLifetime()
  var i755 = data
  i754.enabled = !!i755[0]
  i754.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[1], i754.x)
  i754.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[2], i754.y)
  i754.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[3], i754.z)
  i754.space = i755[4]
  i754.randomized = !!i755[5]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[1], i756.limit)
  i756.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[2], i756.limitX)
  i756.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[3], i756.limitY)
  i756.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[4], i756.limitZ)
  i756.dampen = i757[5]
  i756.separateAxes = !!i757[6]
  i756.space = i757[7]
  i756.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[8], i756.drag)
  i756.multiplyDragByParticleSize = !!i757[9]
  i756.multiplyDragByParticleVelocity = !!i757[10]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'mesh')
  i758.meshCount = i759[2]
  i758.activeVertexStreamsCount = i759[3]
  i758.alignment = i759[4]
  i758.renderMode = i759[5]
  i758.sortMode = i759[6]
  i758.lengthScale = i759[7]
  i758.velocityScale = i759[8]
  i758.cameraVelocityScale = i759[9]
  i758.normalDirection = i759[10]
  i758.sortingFudge = i759[11]
  i758.minParticleSize = i759[12]
  i758.maxParticleSize = i759[13]
  i758.pivot = new pc.Vec3( i759[14], i759[15], i759[16] )
  request.r(i759[17], i759[18], 0, i758, 'trailMaterial')
  i758.applyActiveColorSpace = !!i759[19]
  i758.enabled = !!i759[20]
  request.r(i759[21], i759[22], 0, i758, 'sharedMaterial')
  var i761 = i759[23]
  var i760 = []
  for(var i = 0; i < i761.length; i += 2) {
  request.r(i761[i + 0], i761[i + 1], 2, i760, '')
  }
  i758.sharedMaterials = i760
  i758.receiveShadows = !!i759[24]
  i758.shadowCastingMode = i759[25]
  i758.sortingLayerID = i759[26]
  i758.sortingOrder = i759[27]
  i758.lightmapIndex = i759[28]
  i758.lightmapSceneIndex = i759[29]
  i758.lightmapScaleOffset = new pc.Vec4( i759[30], i759[31], i759[32], i759[33] )
  i758.lightProbeUsage = i759[34]
  i758.reflectionProbeUsage = i759[35]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i765 = data
  i764.name = i765[0]
  i764.tagId = i765[1]
  i764.enabled = !!i765[2]
  i764.isStatic = !!i765[3]
  i764.layer = i765[4]
  return i764
}

Deserializers["Level3_Crown_Playable"] = function (request, data, root) {
  var i766 = root || request.c( 'Level3_Crown_Playable' )
  var i767 = data
  i766.MainZoom = request.d('ZoomPos', i767[0], i766.MainZoom)
  request.r(i767[1], i767[2], 0, i766, 'View1')
  request.r(i767[3], i767[4], 0, i766, 'View2')
  i766.ZoomStep1 = request.d('ZoomPos', i767[5], i766.ZoomStep1)
  request.r(i767[6], i767[7], 0, i766, 'ToolStep1')
  request.r(i767[8], i767[9], 0, i766, 'ToolStep1CameraFollow')
  request.r(i767[10], i767[11], 0, i766, 'Step1Col')
  request.r(i767[12], i767[13], 0, i766, 'DustSR_1')
  i766.ZoomStep2 = request.d('ZoomPos', i767[14], i766.ZoomStep2)
  request.r(i767[15], i767[16], 0, i766, 'ToolStep2')
  request.r(i767[17], i767[18], 0, i766, 'ToolStep2CameraFollow')
  var i769 = i767[19]
  var i768 = []
  for(var i = 0; i < i769.length; i += 2) {
  request.r(i769[i + 0], i769[i + 1], 2, i768, '')
  }
  i766.SRsToFadeOut_2 = i768
  request.r(i767[20], i767[21], 0, i766, 'SpraySR_2')
  i766.ZoomStep3 = request.d('ZoomPos', i767[22], i766.ZoomStep3)
  request.r(i767[23], i767[24], 0, i766, 'ToolStep3')
  request.r(i767[25], i767[26], 0, i766, 'ToolStep3CameraFollow')
  request.r(i767[27], i767[28], 0, i766, 'Step3Col')
  request.r(i767[29], i767[30], 0, i766, 'Mix')
  request.r(i767[31], i767[32], 0, i766, 'MixE')
  i766.levelName = i767[33]
  i766.levelReward = i767[34]
  request.r(i767[35], i767[36], 0, i766, 'LevelIcon')
  request.r(i767[37], i767[38], 0, i766, 'Level_BG')
  var i771 = i767[39]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 1, i770, '')
  }
  i766.ToolIcons = i770
  var i773 = i767[40]
  var i772 = []
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 2, i772, '')
  }
  i766.AllDrags = i772
  var i775 = i767[41]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i766.AllSources = i774
  var i777 = i767[42]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i766.AllScratches = i776
  i766.stepsDone = i767[43]
  i766.levelNo = i767[44]
  i766.partNo = i767[45]
  var i779 = i767[46]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i766.disableOnLevelComplete = i778
  return i766
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i780 = root || request.c( 'ZoomPos' )
  var i781 = data
  i780.CameraPos = new pc.Vec3( i781[0], i781[1], i781[2] )
  i780.CameraFOV = i781[3]
  return i780
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i794 = root || request.c( 'PlayableCTA' )
  var i795 = data
  i794.trigger = i795[0]
  i794.afterSeconds = i795[1]
  i794.afterTaps = i795[2]
  request.r(i795[3], i795[4], 0, i794, 'scratchProgress')
  i794.scratchIndex = i795[5]
  i794.progressThreshold = i795[6]
  i794.blockInputOnFire = !!i795[7]
  i794.refireOnEveryTap = !!i795[8]
  i794.refireDelay = i795[9]
  i794.showEndCard = !!i795[10]
  request.r(i795[11], i795[12], 0, i794, 'endCard')
  var i797 = i795[13]
  var i796 = []
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 2, i796, '')
  }
  i794.thingsToDisableOnEndCard = i796
  i794.endCardDelay = i795[14]
  i794.showEndCardOnProgressTrigger = !!i795[15]
  i794.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i795[16], i794.onCtaFired)
  i794.logWhenFired = !!i795[17]
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

Deserializers["HalloweenCrownWipe"] = function (request, data, root) {
  var i810 = root || request.c( 'HalloweenCrownWipe' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'level')
  request.r(i811[2], i811[3], 0, i810, 'clothTool')
  request.r(i811[4], i811[5], 0, i810, 'wipeTip')
  request.r(i811[6], i811[7], 0, i810, 'foamSurface')
  request.r(i811[8], i811[9], 0, i810, 'cleanCrown')
  var i813 = i811[10]
  var i812 = []
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 2, i812, '')
  }
  i810.priorLayers = i812
  i810.dockPosition = new pc.Vec3( i811[11], i811[12], i811[13] )
  i810.finishThreshold = i811[14]
  return i810
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i814 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'MainCamera')
  i814.RenderType = i815[2]
  request.r(i815[3], i815[4], 0, i814, 'ScratchSurfaceSprite')
  i814.ScratchSurfaceSpriteHasAlpha = !!i815[5]
  i814.MaskProgressCutOffValue = i815[6]
  request.r(i815[7], i815[8], 0, i814, 'EraseTexture')
  i814.EraseTextureScale = new pc.Vec2( i815[9], i815[10] )
  i814.InputEnabled = !!i815[11]
  request.r(i815[12], i815[13], 0, i814, 'Card')
  i814.Mode = i815[14]
  request.r(i815[15], i815[16], 0, i814, 'Progress')
  request.r(i815[17], i815[18], 0, i814, 'MeshCard')
  request.r(i815[19], i815[20], 0, i814, 'SpriteCard')
  request.r(i815[21], i815[22], 0, i814, 'ImageCard')
  request.r(i815[23], i815[24], 0, i814, 'MaskShader')
  request.r(i815[25], i815[26], 0, i814, 'BrushShader')
  request.r(i815[27], i815[28], 0, i814, 'MaskProgressShader')
  request.r(i815[29], i815[30], 0, i814, 'MaskProgressCutOffShader')
  return i814
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i816 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'MainCamera')
  request.r(i817[2], i817[3], 0, i816, 'Surface')
  i816.RenderTextureQuality = i817[4]
  request.r(i817[5], i817[6], 0, i816, 'Eraser')
  request.r(i817[7], i817[8], 0, i816, 'Progress')
  request.r(i817[9], i817[10], 0, i816, 'ScratchSurface')
  request.r(i817[11], i817[12], 0, i816, 'RenderTexture')
  i816.BrushScale = new pc.Vec2( i817[13], i817[14] )
  request.r(i817[15], i817[16], 0, i816, 'ToolTip')
  i816.InputEnabled = !!i817[17]
  i816.IsScratching = !!i817[18]
  i816.useChangingScale = !!i817[19]
  i816.useGivenBrushScale = !!i817[20]
  i816.canSpreadMask = !!i817[21]
  i816.shouldPaintHoles = !!i817[22]
  i816.canRotateTip = !!i817[23]
  i816._mode = i817[24]
  return i816
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i818 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'Card')
  i818.currentProgress = i819[2]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i821 = data
  i820.color = new pc.Color(i821[0], i821[1], i821[2], i821[3])
  request.r(i821[4], i821[5], 0, i820, 'sprite')
  i820.flipX = !!i821[6]
  i820.flipY = !!i821[7]
  i820.drawMode = i821[8]
  i820.size = new pc.Vec2( i821[9], i821[10] )
  i820.tileMode = i821[11]
  i820.adaptiveModeThreshold = i821[12]
  i820.maskInteraction = i821[13]
  i820.spriteSortPoint = i821[14]
  i820.enabled = !!i821[15]
  request.r(i821[16], i821[17], 0, i820, 'sharedMaterial')
  var i823 = i821[18]
  var i822 = []
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 2, i822, '')
  }
  i820.sharedMaterials = i822
  i820.receiveShadows = !!i821[19]
  i820.shadowCastingMode = i821[20]
  i820.sortingLayerID = i821[21]
  i820.sortingOrder = i821[22]
  i820.lightmapIndex = i821[23]
  i820.lightmapSceneIndex = i821[24]
  i820.lightmapScaleOffset = new pc.Vec4( i821[25], i821[26], i821[27], i821[28] )
  i820.lightProbeUsage = i821[29]
  i820.reflectionProbeUsage = i821[30]
  return i820
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i824 = root || request.c( 'PlayParticlesOnCollision' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'Target')
  request.r(i825[2], i825[3], 0, i824, 'ParticlePrefab')
  i824.destroyIt = !!i825[4]
  i824.stayAtPlace = !!i825[5]
  i824.disableOnCollision = !!i825[6]
  i824.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i825[7], i824.OnCollisionEvent)
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i827 = data
  i826.radius = i827[0]
  i826.enabled = !!i827[1]
  i826.isTrigger = !!i827[2]
  i826.usedByEffector = !!i827[3]
  i826.density = i827[4]
  i826.offset = new pc.Vec2( i827[5], i827[6] )
  request.r(i827[7], i827[8], 0, i826, 'material')
  return i826
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i828 = root || request.c( 'PlaySfxOnCollision' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'Tip')
  i828.Mode = i829[2]
  request.r(i829[3], i829[4], 0, i828, 'DragInput')
  request.r(i829[5], i829[6], 0, i828, 'Source')
  i828.startVol = i829[7]
  i828.targetVol = i829[8]
  i828.duration = i829[9]
  request.r(i829[10], i829[11], 0, i828, 'Particles')
  i828.isDone = !!i829[12]
  i828.isInArea = !!i829[13]
  i828.isPlaying = !!i829[14]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'clip')
  request.r(i831[2], i831[3], 0, i830, 'outputAudioMixerGroup')
  i830.playOnAwake = !!i831[4]
  i830.loop = !!i831[5]
  i830.time = i831[6]
  i830.volume = i831[7]
  i830.pitch = i831[8]
  i830.enabled = !!i831[9]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i833 = data
  i832.usedByComposite = !!i833[0]
  i832.autoTiling = !!i833[1]
  var i835 = i833[2]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
  var i837 = i835[i + 0]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
    i836.push( new pc.Vec2( i837[i + 0], i837[i + 1] ) );
  }
    i834.push( i836 );
  }
  i832.points = i834
  i832.enabled = !!i833[3]
  i832.isTrigger = !!i833[4]
  i832.usedByEffector = !!i833[5]
  i832.density = i833[6]
  i832.offset = new pc.Vec2( i833[7], i833[8] )
  request.r(i833[9], i833[10], 0, i832, 'material')
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i845 = data
  i844.usedByComposite = !!i845[0]
  i844.autoTiling = !!i845[1]
  i844.size = new pc.Vec2( i845[2], i845[3] )
  i844.edgeRadius = i845[4]
  i844.enabled = !!i845[5]
  i844.isTrigger = !!i845[6]
  i844.usedByEffector = !!i845[7]
  i844.density = i845[8]
  i844.offset = new pc.Vec2( i845[9], i845[10] )
  request.r(i845[11], i845[12], 0, i844, 'material')
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'animatorController')
  request.r(i847[2], i847[3], 0, i846, 'avatar')
  i846.updateMode = i847[4]
  i846.hasTransformHierarchy = !!i847[5]
  i846.applyRootMotion = !!i847[6]
  var i849 = i847[7]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i846.humanBones = i848
  i846.enabled = !!i847[8]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i853 = data
  i852.frontSortingLayerID = i853[0]
  i852.frontSortingOrder = i853[1]
  i852.backSortingLayerID = i853[2]
  i852.backSortingOrder = i853[3]
  i852.alphaCutoff = i853[4]
  request.r(i853[5], i853[6], 0, i852, 'sprite')
  i852.tileMode = i853[7]
  i852.isCustomRangeActive = !!i853[8]
  i852.spriteSortPoint = i853[9]
  i852.enabled = !!i853[10]
  request.r(i853[11], i853[12], 0, i852, 'sharedMaterial')
  var i855 = i853[13]
  var i854 = []
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 2, i854, '')
  }
  i852.sharedMaterials = i854
  i852.receiveShadows = !!i853[14]
  i852.shadowCastingMode = i853[15]
  i852.sortingLayerID = i853[16]
  i852.sortingOrder = i853[17]
  i852.lightmapIndex = i853[18]
  i852.lightmapSceneIndex = i853[19]
  i852.lightmapScaleOffset = new pc.Vec4( i853[20], i853[21], i853[22], i853[23] )
  i852.lightProbeUsage = i853[24]
  i852.reflectionProbeUsage = i853[25]
  return i852
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i856 = root || request.c( 'ActionOnTap' )
  var i857 = data
  i856.OnTap = request.d('UnityEngine.Events.UnityEvent', i857[0], i856.OnTap)
  i856.OnTapExtra = request.d('System.Action', i857[1], i856.OnTapExtra)
  return i856
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'm_ObjectArgument')
  i858.m_ObjectArgumentAssemblyTypeName = i859[2]
  i858.m_IntArgument = i859[3]
  i858.m_FloatArgument = i859[4]
  i858.m_StringArgument = i859[5]
  i858.m_BoolArgument = !!i859[6]
  return i858
}

Deserializers["System.Action"] = function (request, data, root) {
  var i860 = root || request.c( 'System.Action' )
  var i861 = data
  return i860
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i862 = root || request.c( 'BD_AnimationHelper' )
  var i863 = data
  i862.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i863[0], i862.OnAnimationComplete)
  request.r(i863[1], i863[2], 0, i862, 'sfxClip')
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

Deserializers["BasicDrag"] = function (request, data, root) {
  var i868 = root || request.c( 'BasicDrag' )
  var i869 = data
  i868.canDrag = !!i869[0]
  i868.dragByDelta = !!i869[1]
  i868.isDragging = !!i869[2]
  i868.moveWithPointer = !!i869[3]
  i868.canReturn = !!i869[4]
  i868.jumpOnReturn = !!i869[5]
  i868.returnTime = i869[6]
  i868.Tool_Offset = new pc.Vec3( i869[7], i869[8], i869[9] )
  i868.canScaleIncrease = !!i869[10]
  i868.Self_ScaleNew = new pc.Vec3( i869[11], i869[12], i869[13] )
  i868.canRotateOnPick = !!i869[14]
  i868.startRot = new pc.Vec3( i869[15], i869[16], i869[17] )
  i868.newRot = new pc.Vec3( i869[18], i869[19], i869[20] )
  var i871 = i869[21]
  var i870 = []
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 2, i870, '')
  }
  i868.childSprite = i870
  request.r(i869[22], i869[23], 0, i868, 'ToolSelectClip')
  request.r(i869[24], i869[25], 0, i868, 'ToolLoopClip')
  request.r(i869[26], i869[27], 0, i868, 'thisParticles')
  i868.onDragparticle = !!i869[28]
  request.r(i869[29], i869[30], 0, i868, 'dragParticles')
  request.r(i869[31], i869[32], 0, i868, 'anim')
  i868.startPos = new pc.Vec3( i869[33], i869[34], i869[35] )
  i868.startScale = new pc.Vec3( i869[36], i869[37], i869[38] )
  i868.Vibration = !!i869[39]
  i868.isPlacedCannotMove = !!i869[40]
  i868.isObjectMovingWhileDragging = !!i869[41]
  i868.OnMouseDownEvent = request.d('System.Action', i869[42], i868.OnMouseDownEvent)
  i868.OnMouseUpEvent = request.d('System.Action', i869[43], i868.OnMouseUpEvent)
  i868.ProgStartEvent = request.d('System.Action', i869[44], i868.ProgStartEvent)
  i868.ProgEndEvent = request.d('System.Action', i869[45], i868.ProgEndEvent)
  i868.canCallMouseUpWhenGamePaused = !!i869[46]
  i868.ClampX_L = i869[47]
  i868.ClampX_H = i869[48]
  i868.ClampY_L = i869[49]
  i868.ClampY_H = i869[50]
  i868.startOrder = i869[51]
  i868.dontResetItIsInCollider = !!i869[52]
  request.r(i869[53], i869[54], 0, i868, 'thisCollider')
  request.r(i869[55], i869[56], 0, i868, 'thisSR')
  i868.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i869[57], i868.OnMouseDownEventIndependentFromCanDrag)
  return i868
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i872 = root || request.c( 'BD_Progress' )
  var i873 = data
  var i875 = i873[0]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('ScratchData', i875[i + 0]) );
  }
  i872.AllScratches = i874
  i872.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i873[1], i872.OnScratchComplete)
  i872.isProgDone = !!i873[2]
  i872.canCallComplete = !!i873[3]
  i872.CollectiveAppear = !!i873[4]
  i872.tipControl = !!i873[5]
  i872.progressControl = !!i873[6]
  request.r(i873[7], i873[8], 0, i872, 'thisDrag')
  i872.CompleteEvent = request.d('System.Action', i873[9], i872.CompleteEvent)
  i872.SubCompleteEvent = request.d('System.Action', i873[10], i872.SubCompleteEvent)
  return i872
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i878 = root || request.c( 'ScratchData' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'ScratchManager')
  i878.scratchLimit = i879[2]
  i878.isComplete = !!i879[3]
  return i878
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i880 = root || request.c( 'BD_Clamp' )
  var i881 = data
  i880.ClampX_L = i881[0]
  i880.ClampX_H = i881[1]
  i880.ClampY_L = i881[2]
  i880.ClampY_H = i881[3]
  return i880
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i882 = root || request.c( 'BD_ToolRotate' )
  var i883 = data
  i882.startDelay = i883[0]
  request.r(i883[1], i883[2], 0, i882, 'Tool')
  request.r(i883[3], i883[4], 0, i882, 'Clamp')
  request.r(i883[5], i883[6], 0, i882, 'Pivot')
  i882.MinAngle = new pc.Vec3( i883[7], i883[8], i883[9] )
  i882.MaxAngle = new pc.Vec3( i883[10], i883[11], i883[12] )
  i882.rotationSpeed = i883[13]
  return i882
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i884 = root || request.c( 'BD_CameraFollow' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'Tool')
  request.r(i885[2], i885[3], 0, i884, 'Pivot')
  i884.FOV = i885[4]
  i884.Y_L = i885[5]
  i884.Y_H = i885[6]
  i884.X_L = i885[7]
  i884.X_R = i885[8]
  i884.startDelay = i885[9]
  i884.duration = i885[10]
  return i884
}

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i886 = root || request.c( 'BD_AnimatorDrag' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'BD')
  request.r(i887[2], i887[3], 0, i886, 'anim')
  request.r(i887[4], i887[5], 0, i886, 'Source')
  i886.Vibration = !!i887[6]
  i886.isCompletable = !!i887[7]
  i886.completionThreshold = i887[8]
  i886.OnComplete = request.d('UnityEngine.Events.UnityEvent', i887[9], i886.OnComplete)
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i889 = data
  i888.bodyType = i889[0]
  request.r(i889[1], i889[2], 0, i888, 'material')
  i888.simulated = !!i889[3]
  i888.useAutoMass = !!i889[4]
  i888.mass = i889[5]
  i888.drag = i889[6]
  i888.angularDrag = i889[7]
  i888.gravityScale = i889[8]
  i888.collisionDetectionMode = i889[9]
  i888.sleepMode = i889[10]
  i888.constraints = i889[11]
  return i888
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i890 = root || request.c( 'BD_SpriteChange' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'BD')
  request.r(i891[2], i891[3], 0, i890, 'SR')
  request.r(i891[4], i891[5], 0, i890, 'Default')
  request.r(i891[6], i891[7], 0, i890, 'Picked')
  i890.resetOnRelease = !!i891[8]
  return i890
}

Deserializers["HalloweenToolRigFit"] = function (request, data, root) {
  var i892 = root || request.c( 'HalloweenToolRigFit' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'skinRoot')
  i892.authoredSize = new pc.Vec2( i893[2], i893[3] )
  i892.authoredCenter = new pc.Vec2( i893[4], i893[5] )
  return i892
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i894 = root || request.c( 'BD_ProgressHelper' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'BD_Progress')
  request.r(i895[2], i895[3], 0, i894, 'fadeSprite')
  i894.fadeIn = !!i895[4]
  return i894
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i896 = root || request.c( 'DestroyObj' )
  var i897 = data
  i896.destroyDelay = i897[0]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i899 = data
  i898.name = i899[0]
  i898.atlasId = i899[1]
  i898.mipmapCount = i899[2]
  i898.hdr = !!i899[3]
  i898.size = i899[4]
  i898.anisoLevel = i899[5]
  i898.filterMode = i899[6]
  var i901 = i899[7]
  var i900 = []
  for(var i = 0; i < i901.length; i += 4) {
    i900.push( UnityEngine.Rect.MinMaxRect(i901[i + 0], i901[i + 1], i901[i + 2], i901[i + 3]) );
  }
  i898.rects = i900
  i898.wrapU = i899[8]
  i898.wrapV = i899[9]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i905 = data
  i904.name = i905[0]
  i904.index = i905[1]
  i904.startup = !!i905[2]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i907 = data
  i906.aspect = i907[0]
  i906.orthographic = !!i907[1]
  i906.orthographicSize = i907[2]
  i906.backgroundColor = new pc.Color(i907[3], i907[4], i907[5], i907[6])
  i906.nearClipPlane = i907[7]
  i906.farClipPlane = i907[8]
  i906.fieldOfView = i907[9]
  i906.depth = i907[10]
  i906.clearFlags = i907[11]
  i906.cullingMask = i907[12]
  i906.rect = i907[13]
  request.r(i907[14], i907[15], 0, i906, 'targetTexture')
  i906.usePhysicalProperties = !!i907[16]
  i906.focalLength = i907[17]
  i906.sensorSize = new pc.Vec2( i907[18], i907[19] )
  i906.lensShift = new pc.Vec2( i907[20], i907[21] )
  i906.gateFit = i907[22]
  i906.commandBufferCount = i907[23]
  i906.cameraType = i907[24]
  i906.enabled = !!i907[25]
  return i906
}

Deserializers["CameraController"] = function (request, data, root) {
  var i908 = root || request.c( 'CameraController' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'cam')
  i908.defaultPosition = new pc.Vec3( i909[2], i909[3], i909[4] )
  i908.defaultSize = i909[5]
  i908.defaultFOV = i909[6]
  i908.defaultDuration = i909[7]
  i908.defaultEase = i909[8]
  return i908
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i910 = root || request.c( 'MusicSource' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'source')
  return i910
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i912 = root || request.c( 'UI_Manager' )
  var i913 = data
  i912.levelCompleted = !!i913[0]
  i912.isPauseActive = !!i913[1]
  i912.loadIndex = i913[2]
  request.r(i913[3], i913[4], 0, i912, 'removeAdsButton')
  request.r(i913[5], i913[6], 0, i912, 'pauseButton')
  request.r(i913[7], i913[8], 0, i912, 'Fade_Img')
  request.r(i913[9], i913[10], 0, i912, 'TopBarAnim')
  request.r(i913[11], i913[12], 0, i912, 'MainPanel')
  request.r(i913[13], i913[14], 0, i912, 'PausePanel')
  request.r(i913[15], i913[16], 0, i912, 'PausePopUp')
  request.r(i913[17], i913[18], 0, i912, 'PauseCanvasGroup')
  request.r(i913[19], i913[20], 0, i912, 'RateUsPanel')
  request.r(i913[21], i913[22], 0, i912, 'RateUsPopUp')
  request.r(i913[23], i913[24], 0, i912, 'RemoveAdsPanel')
  request.r(i913[25], i913[26], 0, i912, 'RemoveAdsPopUp')
  request.r(i913[27], i913[28], 0, i912, 'RemoveAdsCanvasGroup')
  var i915 = i913[29]
  var i914 = []
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 2, i914, '')
  }
  i912.RemoveAdsAnims = i914
  request.r(i913[30], i913[31], 0, i912, 'CompletePanel')
  request.r(i913[32], i913[33], 0, i912, 'LevelIcon')
  request.r(i913[34], i913[35], 0, i912, 'CompleteParticles')
  request.r(i913[36], i913[37], 0, i912, 'progressBar')
  request.r(i913[38], i913[39], 0, i912, 'progressText')
  request.r(i913[40], i913[41], 0, i912, 'toolIcon1')
  request.r(i913[42], i913[43], 0, i912, 'toolIcon2')
  request.r(i913[44], i913[45], 0, i912, 'toolIcon3')
  request.r(i913[46], i913[47], 0, i912, 'toolIcon4')
  request.r(i913[48], i913[49], 0, i912, 'target1')
  request.r(i913[50], i913[51], 0, i912, 'target2')
  i912.toolMoveDuration = i913[52]
  i912.currentIndex = i913[53]
  var i917 = i913[54]
  var i916 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i917.length; i += 2) {
  request.r(i917[i + 0], i917[i + 1], 1, i916, '')
  }
  i912.allTools = i916
  request.r(i913[55], i913[56], 0, i912, 'clockProgress')
  request.r(i913[57], i913[58], 0, i912, 'clockProgressFill')
  request.r(i913[59], i913[60], 0, i912, 'clockAudio')
  i912.moveDistance = i913[61]
  i912.animationDuration = i913[62]
  i912.greyBgChildName = i913[63]
  i912.pushOffset = i913[64]
  return i912
}

Deserializers["HalloweenCrownGameManager"] = function (request, data, root) {
  var i920 = root || request.c( 'HalloweenCrownGameManager' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'wipe')
  request.r(i921[2], i921[3], 0, i920, 'endParticles')
  request.r(i921[4], i921[5], 0, i920, 'stepCompleteParticles')
  request.r(i921[6], i921[7], 0, i920, 'DefaultMat')
  request.r(i921[8], i921[9], 0, i920, 'BG_Music')
  request.r(i921[10], i921[11], 0, i920, 'restoreEffectShader')
  request.r(i921[12], i921[13], 0, i920, 'stickerEffectShader')
  i920.isComplete = !!i921[14]
  i920.isPaused = !!i921[15]
  request.r(i921[16], i921[17], 0, i920, 'currentLevel')
  i920.startLevelOnPlay = !!i921[18]
  i920.currentLevelNo = i921[19]
  return i920
}

Deserializers["AudioController"] = function (request, data, root) {
  var i922 = root || request.c( 'AudioController' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'MainMixer')
  request.r(i923[2], i923[3], 0, i922, 'UiClick')
  request.r(i923[4], i923[5], 0, i922, 'UiClickSource')
  var i925 = i923[6]
  var i924 = []
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 2, i924, '')
  }
  i922.SfxSources = i924
  var i927 = i923[7]
  var i926 = []
  for(var i = 0; i < i927.length; i += 2) {
  request.r(i927[i + 0], i927[i + 1], 2, i926, '')
  }
  i922.AllClips = i926
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i931 = data
  i930.pivot = new pc.Vec2( i931[0], i931[1] )
  i930.anchorMin = new pc.Vec2( i931[2], i931[3] )
  i930.anchorMax = new pc.Vec2( i931[4], i931[5] )
  i930.sizeDelta = new pc.Vec2( i931[6], i931[7] )
  i930.anchoredPosition3D = new pc.Vec3( i931[8], i931[9], i931[10] )
  i930.rotation = new pc.Quat(i931[11], i931[12], i931[13], i931[14])
  i930.scale = new pc.Vec3( i931[15], i931[16], i931[17] )
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i933 = data
  i932.planeDistance = i933[0]
  i932.referencePixelsPerUnit = i933[1]
  i932.isFallbackOverlay = !!i933[2]
  i932.renderMode = i933[3]
  i932.renderOrder = i933[4]
  i932.sortingLayerName = i933[5]
  i932.sortingOrder = i933[6]
  i932.scaleFactor = i933[7]
  request.r(i933[8], i933[9], 0, i932, 'worldCamera')
  i932.overrideSorting = !!i933[10]
  i932.pixelPerfect = !!i933[11]
  i932.targetDisplay = i933[12]
  i932.overridePixelPerfect = !!i933[13]
  i932.enabled = !!i933[14]
  return i932
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i935 = data
  i934.m_UiScaleMode = i935[0]
  i934.m_ReferencePixelsPerUnit = i935[1]
  i934.m_ScaleFactor = i935[2]
  i934.m_ReferenceResolution = new pc.Vec2( i935[3], i935[4] )
  i934.m_ScreenMatchMode = i935[5]
  i934.m_MatchWidthOrHeight = i935[6]
  i934.m_PhysicalUnit = i935[7]
  i934.m_FallbackScreenDPI = i935[8]
  i934.m_DefaultSpriteDPI = i935[9]
  i934.m_DynamicPixelsPerUnit = i935[10]
  i934.m_PresetInfoIsWorld = !!i935[11]
  return i934
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i937 = data
  i936.m_IgnoreReversedGraphics = !!i937[0]
  i936.m_BlockingObjects = i937[1]
  i936.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i937[2] )
  return i936
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i938 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i939 = data
  i938.targetIsSelf = !!i939[0]
  request.r(i939[1], i939[2], 0, i938, 'targetGO')
  i938.tweenTargetIsTargetGO = !!i939[3]
  i938.delay = i939[4]
  i938.duration = i939[5]
  i938.easeType = i939[6]
  i938.easeCurve = new pc.AnimationCurve( { keys_flow: i939[7] } )
  i938.loopType = i939[8]
  i938.loops = i939[9]
  i938.id = i939[10]
  i938.isRelative = !!i939[11]
  i938.isFrom = !!i939[12]
  i938.isIndependentUpdate = !!i939[13]
  i938.autoKill = !!i939[14]
  i938.autoGenerate = !!i939[15]
  i938.isActive = !!i939[16]
  i938.isValid = !!i939[17]
  request.r(i939[18], i939[19], 0, i938, 'target')
  i938.animationType = i939[20]
  i938.targetType = i939[21]
  i938.forcedTargetType = i939[22]
  i938.autoPlay = !!i939[23]
  i938.useTargetAsV3 = !!i939[24]
  i938.endValueFloat = i939[25]
  i938.endValueV3 = new pc.Vec3( i939[26], i939[27], i939[28] )
  i938.endValueV2 = new pc.Vec2( i939[29], i939[30] )
  i938.endValueColor = new pc.Color(i939[31], i939[32], i939[33], i939[34])
  i938.endValueString = i939[35]
  i938.endValueRect = UnityEngine.Rect.MinMaxRect(i939[36], i939[37], i939[38], i939[39])
  request.r(i939[40], i939[41], 0, i938, 'endValueTransform')
  i938.optionalBool0 = !!i939[42]
  i938.optionalBool1 = !!i939[43]
  i938.optionalFloat0 = i939[44]
  i938.optionalInt0 = i939[45]
  i938.optionalRotationMode = i939[46]
  i938.optionalScrambleMode = i939[47]
  i938.optionalShakeRandomnessMode = i939[48]
  i938.optionalString = i939[49]
  i938.updateType = i939[50]
  i938.isSpeedBased = !!i939[51]
  i938.hasOnStart = !!i939[52]
  i938.hasOnPlay = !!i939[53]
  i938.hasOnUpdate = !!i939[54]
  i938.hasOnStepComplete = !!i939[55]
  i938.hasOnComplete = !!i939[56]
  i938.hasOnTweenCreated = !!i939[57]
  i938.hasOnRewind = !!i939[58]
  i938.onStart = request.d('UnityEngine.Events.UnityEvent', i939[59], i938.onStart)
  i938.onPlay = request.d('UnityEngine.Events.UnityEvent', i939[60], i938.onPlay)
  i938.onUpdate = request.d('UnityEngine.Events.UnityEvent', i939[61], i938.onUpdate)
  i938.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i939[62], i938.onStepComplete)
  i938.onComplete = request.d('UnityEngine.Events.UnityEvent', i939[63], i938.onComplete)
  i938.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i939[64], i938.onTweenCreated)
  i938.onRewind = request.d('UnityEngine.Events.UnityEvent', i939[65], i938.onRewind)
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i941 = data
  i940.cullTransparentMesh = !!i941[0]
  return i940
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

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.UI.Text' )
  var i945 = data
  i944.m_FontData = request.d('UnityEngine.UI.FontData', i945[0], i944.m_FontData)
  i944.m_Text = i945[1]
  request.r(i945[2], i945[3], 0, i944, 'm_Material')
  i944.m_Maskable = !!i945[4]
  i944.m_Color = new pc.Color(i945[5], i945[6], i945[7], i945[8])
  i944.m_RaycastTarget = !!i945[9]
  i944.m_RaycastPadding = new pc.Vec4( i945[10], i945[11], i945[12], i945[13] )
  return i944
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.UI.FontData' )
  var i947 = data
  request.r(i947[0], i947[1], 0, i946, 'm_Font')
  i946.m_FontSize = i947[2]
  i946.m_FontStyle = i947[3]
  i946.m_BestFit = !!i947[4]
  i946.m_MinSize = i947[5]
  i946.m_MaxSize = i947[6]
  i946.m_Alignment = i947[7]
  i946.m_AlignByGeometry = !!i947[8]
  i946.m_RichText = !!i947[9]
  i946.m_HorizontalOverflow = i947[10]
  i946.m_VerticalOverflow = i947[11]
  i946.m_LineSpacing = i947[12]
  return i946
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.UI.Button' )
  var i949 = data
  i948.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i949[0], i948.m_OnClick)
  i948.m_Navigation = request.d('UnityEngine.UI.Navigation', i949[1], i948.m_Navigation)
  i948.m_Transition = i949[2]
  i948.m_Colors = request.d('UnityEngine.UI.ColorBlock', i949[3], i948.m_Colors)
  i948.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i949[4], i948.m_SpriteState)
  i948.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i949[5], i948.m_AnimationTriggers)
  i948.m_Interactable = !!i949[6]
  request.r(i949[7], i949[8], 0, i948, 'm_TargetGraphic')
  return i948
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i951 = data
  i950.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i951[0], i950.m_PersistentCalls)
  return i950
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i953 = data
  i952.m_Mode = i953[0]
  i952.m_WrapAround = !!i953[1]
  request.r(i953[2], i953[3], 0, i952, 'm_SelectOnUp')
  request.r(i953[4], i953[5], 0, i952, 'm_SelectOnDown')
  request.r(i953[6], i953[7], 0, i952, 'm_SelectOnLeft')
  request.r(i953[8], i953[9], 0, i952, 'm_SelectOnRight')
  return i952
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i955 = data
  i954.m_NormalColor = new pc.Color(i955[0], i955[1], i955[2], i955[3])
  i954.m_HighlightedColor = new pc.Color(i955[4], i955[5], i955[6], i955[7])
  i954.m_PressedColor = new pc.Color(i955[8], i955[9], i955[10], i955[11])
  i954.m_SelectedColor = new pc.Color(i955[12], i955[13], i955[14], i955[15])
  i954.m_DisabledColor = new pc.Color(i955[16], i955[17], i955[18], i955[19])
  i954.m_ColorMultiplier = i955[20]
  i954.m_FadeDuration = i955[21]
  return i954
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'm_HighlightedSprite')
  request.r(i957[2], i957[3], 0, i956, 'm_PressedSprite')
  request.r(i957[4], i957[5], 0, i956, 'm_SelectedSprite')
  request.r(i957[6], i957[7], 0, i956, 'm_DisabledSprite')
  return i956
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i959 = data
  i958.m_NormalTrigger = i959[0]
  i958.m_HighlightedTrigger = i959[1]
  i958.m_PressedTrigger = i959[2]
  i958.m_SelectedTrigger = i959[3]
  i958.m_DisabledTrigger = i959[4]
  return i958
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i960 = root || request.c( 'PlayableHudRuntime' )
  var i961 = data
  return i960
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'm_FirstSelected')
  i962.m_sendNavigationEvents = !!i963[2]
  i962.m_DragThreshold = i963[3]
  return i962
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i965 = data
  i964.m_HorizontalAxis = i965[0]
  i964.m_VerticalAxis = i965[1]
  i964.m_SubmitButton = i965[2]
  i964.m_CancelButton = i965[3]
  i964.m_InputActionsPerSecond = i965[4]
  i964.m_RepeatDelay = i965[5]
  i964.m_ForceModuleActive = !!i965[6]
  i964.m_SendPointerHoverToParent = !!i965[7]
  return i964
}

Deserializers["ToastManager"] = function (request, data, root) {
  var i966 = root || request.c( 'ToastManager' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'toastPanel')
  request.r(i967[2], i967[3], 0, i966, 'toastPopup')
  request.r(i967[4], i967[5], 0, i966, 'canvasGroup')
  request.r(i967[6], i967[7], 0, i966, 'toastText')
  i966.startY = i967[8]
  i966.visibleY = i967[9]
  i966.endY = i967[10]
  i966.animationTime = i967[11]
  i966.animationTimeUp = i967[12]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i969 = data
  i968.m_Alpha = i969[0]
  i968.m_Interactable = !!i969[1]
  i968.m_BlocksRaycasts = !!i969[2]
  i968.m_IgnoreParentGroups = !!i969[3]
  i968.enabled = !!i969[4]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i971 = data
  i970.ambientIntensity = i971[0]
  i970.reflectionIntensity = i971[1]
  i970.ambientMode = i971[2]
  i970.ambientLight = new pc.Color(i971[3], i971[4], i971[5], i971[6])
  i970.ambientSkyColor = new pc.Color(i971[7], i971[8], i971[9], i971[10])
  i970.ambientGroundColor = new pc.Color(i971[11], i971[12], i971[13], i971[14])
  i970.ambientEquatorColor = new pc.Color(i971[15], i971[16], i971[17], i971[18])
  i970.fogColor = new pc.Color(i971[19], i971[20], i971[21], i971[22])
  i970.fogEndDistance = i971[23]
  i970.fogStartDistance = i971[24]
  i970.fogDensity = i971[25]
  i970.fog = !!i971[26]
  request.r(i971[27], i971[28], 0, i970, 'skybox')
  i970.fogMode = i971[29]
  var i973 = i971[30]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i973[i + 0]) );
  }
  i970.lightmaps = i972
  i970.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i971[31], i970.lightProbes)
  i970.lightmapsMode = i971[32]
  i970.mixedBakeMode = i971[33]
  i970.environmentLightingMode = i971[34]
  i970.ambientProbe = new pc.SphericalHarmonicsL2(i971[35])
  request.r(i971[36], i971[37], 0, i970, 'customReflection')
  request.r(i971[38], i971[39], 0, i970, 'defaultReflection')
  i970.defaultReflectionMode = i971[40]
  i970.defaultReflectionResolution = i971[41]
  i970.sunLightObjectId = i971[42]
  i970.pixelLightCount = i971[43]
  i970.defaultReflectionHDR = !!i971[44]
  i970.hasLightDataAsset = !!i971[45]
  i970.hasManualGenerate = !!i971[46]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'lightmapColor')
  request.r(i977[2], i977[3], 0, i976, 'lightmapDirection')
  request.r(i977[4], i977[5], 0, i976, 'shadowMask')
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i978 = root || new UnityEngine.LightProbes()
  var i979 = data
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i987 = data
  var i989 = i987[0]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i989.length; i += 1) {
    i988.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i989[i + 0]));
  }
  i986.ShaderCompilationErrors = i988
  i986.name = i987[1]
  i986.guid = i987[2]
  var i991 = i987[3]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( i991[i + 0] );
  }
  i986.shaderDefinedKeywords = i990
  var i993 = i987[4]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i993[i + 0]) );
  }
  i986.passes = i992
  var i995 = i987[5]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i995[i + 0]) );
  }
  i986.usePasses = i994
  var i997 = i987[6]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i997[i + 0]) );
  }
  i986.defaultParameterValues = i996
  request.r(i987[7], i987[8], 0, i986, 'unityFallbackShader')
  i986.readDepth = !!i987[9]
  i986.hasDepthOnlyPass = !!i987[10]
  i986.isCreatedByShaderGraph = !!i987[11]
  i986.disableBatching = !!i987[12]
  i986.compiled = !!i987[13]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1001 = data
  i1000.shaderName = i1001[0]
  i1000.errorMessage = i1001[1]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1006 = root || new pc.UnityShaderPass()
  var i1007 = data
  i1006.id = i1007[0]
  i1006.subShaderIndex = i1007[1]
  i1006.name = i1007[2]
  i1006.passType = i1007[3]
  i1006.grabPassTextureName = i1007[4]
  i1006.usePass = !!i1007[5]
  i1006.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[6], i1006.zTest)
  i1006.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[7], i1006.zWrite)
  i1006.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[8], i1006.culling)
  i1006.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1007[9], i1006.blending)
  i1006.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1007[10], i1006.alphaBlending)
  i1006.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[11], i1006.colorWriteMask)
  i1006.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[12], i1006.offsetUnits)
  i1006.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[13], i1006.offsetFactor)
  i1006.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[14], i1006.stencilRef)
  i1006.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[15], i1006.stencilReadMask)
  i1006.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1007[16], i1006.stencilWriteMask)
  i1006.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1007[17], i1006.stencilOp)
  i1006.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1007[18], i1006.stencilOpFront)
  i1006.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1007[19], i1006.stencilOpBack)
  var i1009 = i1007[20]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1009[i + 0]) );
  }
  i1006.tags = i1008
  var i1011 = i1007[21]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( i1011[i + 0] );
  }
  i1006.passDefinedKeywords = i1010
  var i1013 = i1007[22]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1013[i + 0]) );
  }
  i1006.passDefinedKeywordGroups = i1012
  var i1015 = i1007[23]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1015[i + 0]) );
  }
  i1006.variants = i1014
  var i1017 = i1007[24]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1017[i + 0]) );
  }
  i1006.excludedVariants = i1016
  i1006.hasDepthReader = !!i1007[25]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1019 = data
  i1018.val = i1019[0]
  i1018.name = i1019[1]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1021 = data
  i1020.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1021[0], i1020.src)
  i1020.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1021[1], i1020.dst)
  i1020.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1021[2], i1020.op)
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1023 = data
  i1022.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[0], i1022.pass)
  i1022.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[1], i1022.fail)
  i1022.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[2], i1022.zFail)
  i1022.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1023[3], i1022.comp)
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1027 = data
  i1026.name = i1027[0]
  i1026.value = i1027[1]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1031 = data
  var i1033 = i1031[0]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( i1033[i + 0] );
  }
  i1030.keywords = i1032
  i1030.hasDiscard = !!i1031[1]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1037 = data
  i1036.passId = i1037[0]
  i1036.subShaderIndex = i1037[1]
  var i1039 = i1037[2]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( i1039[i + 0] );
  }
  i1036.keywords = i1038
  i1036.vertexProgram = i1037[3]
  i1036.fragmentProgram = i1037[4]
  i1036.exportedForWebGl2 = !!i1037[5]
  i1036.readDepth = !!i1037[6]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1043 = data
  request.r(i1043[0], i1043[1], 0, i1042, 'shader')
  i1042.pass = i1043[2]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1047 = data
  i1046.name = i1047[0]
  i1046.type = i1047[1]
  i1046.value = new pc.Vec4( i1047[2], i1047[3], i1047[4], i1047[5] )
  i1046.textureValue = i1047[6]
  i1046.shaderPropertyFlag = i1047[7]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1049 = data
  i1048.name = i1049[0]
  request.r(i1049[1], i1049[2], 0, i1048, 'texture')
  i1048.aabb = i1049[3]
  i1048.vertices = i1049[4]
  i1048.triangles = i1049[5]
  i1048.textureRect = UnityEngine.Rect.MinMaxRect(i1049[6], i1049[7], i1049[8], i1049[9])
  i1048.packedRect = UnityEngine.Rect.MinMaxRect(i1049[10], i1049[11], i1049[12], i1049[13])
  i1048.border = new pc.Vec4( i1049[14], i1049[15], i1049[16], i1049[17] )
  i1048.transparency = i1049[18]
  i1048.bounds = i1049[19]
  i1048.pixelsPerUnit = i1049[20]
  i1048.textureWidth = i1049[21]
  i1048.textureHeight = i1049[22]
  i1048.nativeSize = new pc.Vec2( i1049[23], i1049[24] )
  i1048.pivot = new pc.Vec2( i1049[25], i1049[26] )
  i1048.textureRectOffset = new pc.Vec2( i1049[27], i1049[28] )
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1051 = data
  i1050.name = i1051[0]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1053 = data
  i1052.name = i1053[0]
  i1052.wrapMode = i1053[1]
  i1052.isLooping = !!i1053[2]
  i1052.length = i1053[3]
  var i1055 = i1053[4]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1055[i + 0]) );
  }
  i1052.curves = i1054
  var i1057 = i1053[5]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1057[i + 0]) );
  }
  i1052.events = i1056
  i1052.halfPrecision = !!i1053[6]
  i1052._frameRate = i1053[7]
  i1052.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1053[8], i1052.localBounds)
  i1052.hasMuscleCurves = !!i1053[9]
  var i1059 = i1053[10]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( i1059[i + 0] );
  }
  i1052.clipMuscleConstant = i1058
  i1052.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1053[11], i1052.clipBindingConstant)
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1063 = data
  i1062.path = i1063[0]
  i1062.hash = i1063[1]
  i1062.componentType = i1063[2]
  i1062.property = i1063[3]
  i1062.keys = i1063[4]
  var i1065 = i1063[5]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1065[i + 0]) );
  }
  i1062.objectReferenceKeys = i1064
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1069 = data
  i1068.time = i1069[0]
  request.r(i1069[1], i1069[2], 0, i1068, 'value')
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1073 = data
  i1072.functionName = i1073[0]
  i1072.floatParameter = i1073[1]
  i1072.intParameter = i1073[2]
  i1072.stringParameter = i1073[3]
  request.r(i1073[4], i1073[5], 0, i1072, 'objectReferenceParameter')
  i1072.time = i1073[6]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1075 = data
  i1074.center = new pc.Vec3( i1075[0], i1075[1], i1075[2] )
  i1074.extends = new pc.Vec3( i1075[3], i1075[4], i1075[5] )
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1079 = data
  var i1081 = i1079[0]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( i1081[i + 0] );
  }
  i1078.genericBindings = i1080
  var i1083 = i1079[1]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( i1083[i + 0] );
  }
  i1078.pptrCurveMapping = i1082
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1085 = data
  i1084.name = i1085[0]
  i1084.ascent = i1085[1]
  i1084.originalLineHeight = i1085[2]
  i1084.fontSize = i1085[3]
  var i1087 = i1085[4]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1087[i + 0]) );
  }
  i1084.characterInfo = i1086
  request.r(i1085[5], i1085[6], 0, i1084, 'texture')
  i1084.originalFontSize = i1085[7]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1091 = data
  i1090.index = i1091[0]
  i1090.advance = i1091[1]
  i1090.bearing = i1091[2]
  i1090.glyphWidth = i1091[3]
  i1090.glyphHeight = i1091[4]
  i1090.minX = i1091[5]
  i1090.maxX = i1091[6]
  i1090.minY = i1091[7]
  i1090.maxY = i1091[8]
  i1090.uvBottomLeftX = i1091[9]
  i1090.uvBottomLeftY = i1091[10]
  i1090.uvBottomRightX = i1091[11]
  i1090.uvBottomRightY = i1091[12]
  i1090.uvTopLeftX = i1091[13]
  i1090.uvTopLeftY = i1091[14]
  i1090.uvTopRightX = i1091[15]
  i1090.uvTopRightY = i1091[16]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1093 = data
  i1092.name = i1093[0]
  var i1095 = i1093[1]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1095[i + 0]) );
  }
  i1092.layers = i1094
  var i1097 = i1093[2]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1097[i + 0]) );
  }
  i1092.parameters = i1096
  i1092.animationClips = i1093[3]
  i1092.avatarUnsupported = i1093[4]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1101 = data
  i1100.name = i1101[0]
  i1100.defaultWeight = i1101[1]
  i1100.blendingMode = i1101[2]
  i1100.avatarMask = i1101[3]
  i1100.syncedLayerIndex = i1101[4]
  i1100.syncedLayerAffectsTiming = !!i1101[5]
  i1100.syncedLayers = i1101[6]
  i1100.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1101[7], i1100.stateMachine)
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1103 = data
  i1102.id = i1103[0]
  i1102.name = i1103[1]
  i1102.path = i1103[2]
  var i1105 = i1103[3]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1105[i + 0]) );
  }
  i1102.states = i1104
  var i1107 = i1103[4]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1107[i + 0]) );
  }
  i1102.machines = i1106
  var i1109 = i1103[5]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1109[i + 0]) );
  }
  i1102.entryStateTransitions = i1108
  var i1111 = i1103[6]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1111[i + 0]) );
  }
  i1102.exitStateTransitions = i1110
  var i1113 = i1103[7]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1113[i + 0]) );
  }
  i1102.anyStateTransitions = i1112
  i1102.defaultStateId = i1103[8]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1117 = data
  i1116.id = i1117[0]
  i1116.name = i1117[1]
  i1116.cycleOffset = i1117[2]
  i1116.cycleOffsetParameter = i1117[3]
  i1116.cycleOffsetParameterActive = !!i1117[4]
  i1116.mirror = !!i1117[5]
  i1116.mirrorParameter = i1117[6]
  i1116.mirrorParameterActive = !!i1117[7]
  i1116.motionId = i1117[8]
  i1116.nameHash = i1117[9]
  i1116.fullPathHash = i1117[10]
  i1116.speed = i1117[11]
  i1116.speedParameter = i1117[12]
  i1116.speedParameterActive = !!i1117[13]
  i1116.tag = i1117[14]
  i1116.tagHash = i1117[15]
  i1116.writeDefaultValues = !!i1117[16]
  var i1119 = i1117[17]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 2) {
  request.r(i1119[i + 0], i1119[i + 1], 2, i1118, '')
  }
  i1116.behaviours = i1118
  var i1121 = i1117[18]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1121[i + 0]) );
  }
  i1116.transitions = i1120
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1127 = data
  i1126.fullPath = i1127[0]
  i1126.canTransitionToSelf = !!i1127[1]
  i1126.duration = i1127[2]
  i1126.exitTime = i1127[3]
  i1126.hasExitTime = !!i1127[4]
  i1126.hasFixedDuration = !!i1127[5]
  i1126.interruptionSource = i1127[6]
  i1126.offset = i1127[7]
  i1126.orderedInterruption = !!i1127[8]
  i1126.destinationStateId = i1127[9]
  i1126.isExit = !!i1127[10]
  i1126.mute = !!i1127[11]
  i1126.solo = !!i1127[12]
  var i1129 = i1127[13]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1129[i + 0]) );
  }
  i1126.conditions = i1128
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1135 = data
  i1134.destinationStateId = i1135[0]
  i1134.isExit = !!i1135[1]
  i1134.mute = !!i1135[2]
  i1134.solo = !!i1135[3]
  var i1137 = i1135[4]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1137[i + 0]) );
  }
  i1134.conditions = i1136
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1141 = data
  i1140.mode = i1141[0]
  i1140.parameter = i1141[1]
  i1140.threshold = i1141[2]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1145 = data
  i1144.defaultBool = !!i1145[0]
  i1144.defaultFloat = i1145[1]
  i1144.defaultInt = i1145[2]
  i1144.name = i1145[3]
  i1144.nameHash = i1145[4]
  i1144.type = i1145[5]
  return i1144
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1146 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1147 = data
  i1146.useSafeMode = !!i1147[0]
  i1146.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1147[1], i1146.safeModeOptions)
  i1146.timeScale = i1147[2]
  i1146.unscaledTimeScale = i1147[3]
  i1146.useSmoothDeltaTime = !!i1147[4]
  i1146.maxSmoothUnscaledTime = i1147[5]
  i1146.rewindCallbackMode = i1147[6]
  i1146.showUnityEditorReport = !!i1147[7]
  i1146.logBehaviour = i1147[8]
  i1146.drawGizmos = !!i1147[9]
  i1146.defaultRecyclable = !!i1147[10]
  i1146.defaultAutoPlay = i1147[11]
  i1146.defaultUpdateType = i1147[12]
  i1146.defaultTimeScaleIndependent = !!i1147[13]
  i1146.defaultEaseType = i1147[14]
  i1146.defaultEaseOvershootOrAmplitude = i1147[15]
  i1146.defaultEasePeriod = i1147[16]
  i1146.defaultAutoKill = !!i1147[17]
  i1146.defaultLoopType = i1147[18]
  i1146.debugMode = !!i1147[19]
  i1146.debugStoreTargetId = !!i1147[20]
  i1146.showPreviewPanel = !!i1147[21]
  i1146.storeSettingsLocation = i1147[22]
  i1146.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1147[23], i1146.modules)
  i1146.createASMDEF = !!i1147[24]
  i1146.showPlayingTweens = !!i1147[25]
  i1146.showPausedTweens = !!i1147[26]
  return i1146
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1148 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1149 = data
  i1148.logBehaviour = i1149[0]
  i1148.nestedTweenFailureBehaviour = i1149[1]
  return i1148
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1150 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1151 = data
  i1150.showPanel = !!i1151[0]
  i1150.audioEnabled = !!i1151[1]
  i1150.physicsEnabled = !!i1151[2]
  i1150.physics2DEnabled = !!i1151[3]
  i1150.spriteEnabled = !!i1151[4]
  i1150.uiEnabled = !!i1151[5]
  i1150.textMeshProEnabled = !!i1151[6]
  i1150.tk2DEnabled = !!i1151[7]
  i1150.deAudioEnabled = !!i1151[8]
  i1150.deUnityExtendedEnabled = !!i1151[9]
  i1150.epoOutlineEnabled = !!i1151[10]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1153 = data
  var i1155 = i1153[0]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1155[i + 0]) );
  }
  i1152.files = i1154
  i1152.componentToPrefabIds = i1153[1]
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1159 = data
  i1158.path = i1159[0]
  request.r(i1159[1], i1159[2], 0, i1158, 'unityObject')
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1161 = data
  var i1163 = i1161[0]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1163[i + 0]) );
  }
  i1160.scriptsExecutionOrder = i1162
  var i1165 = i1161[1]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1165[i + 0]) );
  }
  i1160.sortingLayers = i1164
  var i1167 = i1161[2]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1167[i + 0]) );
  }
  i1160.cullingLayers = i1166
  i1160.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1161[3], i1160.timeSettings)
  i1160.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1161[4], i1160.physicsSettings)
  i1160.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1161[5], i1160.physics2DSettings)
  i1160.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1161[6], i1160.qualitySettings)
  i1160.enableRealtimeShadows = !!i1161[7]
  i1160.enableAutoInstancing = !!i1161[8]
  i1160.enableStaticBatching = !!i1161[9]
  i1160.enableDynamicBatching = !!i1161[10]
  i1160.usePreservativeDynamicBatching = !!i1161[11]
  i1160.lightmapEncodingQuality = i1161[12]
  i1160.desiredColorSpace = i1161[13]
  var i1169 = i1161[14]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( i1169[i + 0] );
  }
  i1160.allTags = i1168
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1173 = data
  i1172.name = i1173[0]
  i1172.value = i1173[1]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1177 = data
  i1176.id = i1177[0]
  i1176.name = i1177[1]
  i1176.value = i1177[2]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1181 = data
  i1180.id = i1181[0]
  i1180.name = i1181[1]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1183 = data
  i1182.fixedDeltaTime = i1183[0]
  i1182.maximumDeltaTime = i1183[1]
  i1182.timeScale = i1183[2]
  i1182.maximumParticleTimestep = i1183[3]
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1185 = data
  i1184.gravity = new pc.Vec3( i1185[0], i1185[1], i1185[2] )
  i1184.defaultSolverIterations = i1185[3]
  i1184.bounceThreshold = i1185[4]
  i1184.autoSyncTransforms = !!i1185[5]
  i1184.autoSimulation = !!i1185[6]
  var i1187 = i1185[7]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1187[i + 0]) );
  }
  i1184.collisionMatrix = i1186
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1191 = data
  i1190.enabled = !!i1191[0]
  i1190.layerId = i1191[1]
  i1190.otherLayerId = i1191[2]
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1193 = data
  request.r(i1193[0], i1193[1], 0, i1192, 'material')
  i1192.gravity = new pc.Vec2( i1193[2], i1193[3] )
  i1192.positionIterations = i1193[4]
  i1192.velocityIterations = i1193[5]
  i1192.velocityThreshold = i1193[6]
  i1192.maxLinearCorrection = i1193[7]
  i1192.maxAngularCorrection = i1193[8]
  i1192.maxTranslationSpeed = i1193[9]
  i1192.maxRotationSpeed = i1193[10]
  i1192.baumgarteScale = i1193[11]
  i1192.baumgarteTOIScale = i1193[12]
  i1192.timeToSleep = i1193[13]
  i1192.linearSleepTolerance = i1193[14]
  i1192.angularSleepTolerance = i1193[15]
  i1192.defaultContactOffset = i1193[16]
  i1192.autoSimulation = !!i1193[17]
  i1192.queriesHitTriggers = !!i1193[18]
  i1192.queriesStartInColliders = !!i1193[19]
  i1192.callbacksOnDisable = !!i1193[20]
  i1192.reuseCollisionCallbacks = !!i1193[21]
  i1192.autoSyncTransforms = !!i1193[22]
  var i1195 = i1193[23]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1195[i + 0]) );
  }
  i1192.collisionMatrix = i1194
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1199 = data
  i1198.enabled = !!i1199[0]
  i1198.layerId = i1199[1]
  i1198.otherLayerId = i1199[2]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1201 = data
  var i1203 = i1201[0]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1203[i + 0]) );
  }
  i1200.qualityLevels = i1202
  var i1205 = i1201[1]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( i1205[i + 0] );
  }
  i1200.names = i1204
  i1200.shadows = i1201[2]
  i1200.anisotropicFiltering = i1201[3]
  i1200.antiAliasing = i1201[4]
  i1200.lodBias = i1201[5]
  i1200.shadowCascades = i1201[6]
  i1200.shadowDistance = i1201[7]
  i1200.shadowmaskMode = i1201[8]
  i1200.shadowProjection = i1201[9]
  i1200.shadowResolution = i1201[10]
  i1200.softParticles = !!i1201[11]
  i1200.softVegetation = !!i1201[12]
  i1200.activeColorSpace = i1201[13]
  i1200.desiredColorSpace = i1201[14]
  i1200.masterTextureLimit = i1201[15]
  i1200.maxQueuedFrames = i1201[16]
  i1200.particleRaycastBudget = i1201[17]
  i1200.pixelLightCount = i1201[18]
  i1200.realtimeReflectionProbes = !!i1201[19]
  i1200.shadowCascade2Split = i1201[20]
  i1200.shadowCascade4Split = new pc.Vec3( i1201[21], i1201[22], i1201[23] )
  i1200.streamingMipmapsActive = !!i1201[24]
  i1200.vSyncCount = i1201[25]
  i1200.asyncUploadBufferSize = i1201[26]
  i1200.asyncUploadTimeSlice = i1201[27]
  i1200.billboardsFaceCameraPosition = !!i1201[28]
  i1200.shadowNearPlaneOffset = i1201[29]
  i1200.streamingMipmapsMemoryBudget = i1201[30]
  i1200.maximumLODLevel = i1201[31]
  i1200.streamingMipmapsAddAllCameras = !!i1201[32]
  i1200.streamingMipmapsMaxLevelReduction = i1201[33]
  i1200.streamingMipmapsRenderersPerFrame = i1201[34]
  i1200.resolutionScalingFixedDPIFactor = i1201[35]
  i1200.streamingMipmapsMaxFileIORequests = i1201[36]
  i1200.currentQualityLevel = i1201[37]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i1209 = data
  var i1211 = i1209[0]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i1211[i + 0]) );
  }
  i1208.groups = i1210
  var i1213 = i1209[1]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i1213[i + 0]) );
  }
  i1208.snapshots = i1212
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i1217 = data
  i1216.id = i1217[0]
  i1216.childGroupIds = i1217[1]
  i1216.name = i1217[2]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i1221 = data
  i1220.id = i1221[0]
  var i1223 = i1221[1]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i1223[i + 0]) );
  }
  i1220.parameters = i1222
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i1227 = data
  i1226.name = i1227[0]
  i1226.value = i1227[1]
  return i1226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1231 = data
  i1230.weight = i1231[0]
  i1230.vertices = i1231[1]
  i1230.normals = i1231[2]
  i1230.tangents = i1231[3]
  return i1230
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[77],"78":[43],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[38],"88":[38],"89":[38],"90":[38],"91":[38],"92":[38],"93":[38],"94":[38],"95":[38],"96":[38],"97":[38],"98":[38],"99":[38],"100":[43],"101":[102],"103":[104],"105":[104],"55":[48],"106":[107],"108":[12],"109":[27],"110":[12],"111":[112],"113":[112],"114":[50],"115":[27],"116":[12],"40":[12],"117":[10],"33":[12],"118":[48],"119":[48],"58":[55],"49":[59,48],"120":[48],"57":[55],"121":[48],"122":[48],"123":[48],"124":[48],"125":[48],"126":[48],"127":[48],"128":[48],"129":[48],"130":[59,48],"131":[48],"132":[48],"133":[48],"134":[48],"51":[59,48],"135":[48],"136":[63],"137":[63],"64":[63],"138":[63],"139":[43],"140":[43]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level3_Crown_Playable","UnityEngine.GameObject","BasicDrag","BD_CameraFollow","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.AudioClip","UnityEngine.AudioSource","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","HalloweenCrownWipe","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","PlayParticlesOnCollision","UnityEngine.CircleCollider2D","PlaySfxOnCollision","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.PolygonCollider2D","UnityEngine.BoxCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.SpriteMask","ActionOnTap","BD_AnimationHelper","UnityEngine.U2D.Animation.SpriteSkin","BD_Progress","BD_Clamp","BD_ToolRotate","BD_AnimatorDrag","UnityEngine.Rigidbody2D","BD_SpriteChange","HalloweenToolRigFit","BD_ProgressHelper","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Text","HalloweenCrownGameManager","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","TeaseTapCTA","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "10/30/2026 12:52:35";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "MakeoverFashionASMRThemes_004_CrownHalloween_CTAComplete_30Oct2026";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1580";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4039";

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

Deserializers.buildID = "9d923971-8abc-41b9-848e-a05220feabe7";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

