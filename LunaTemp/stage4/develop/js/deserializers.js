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

Deserializers["Level1_Shower_Playable"] = function (request, data, root) {
  var i766 = root || request.c( 'Level1_Shower_Playable' )
  var i767 = data
  i766.MainZoom = request.d('ZoomPos', i767[0], i766.MainZoom)
  request.r(i767[1], i767[2], 0, i766, 'view1')
  request.r(i767[3], i767[4], 0, i766, 'view2')
  i766.ZoomStep1 = request.d('ZoomPos', i767[5], i766.ZoomStep1)
  request.r(i767[6], i767[7], 0, i766, 'ToolStep1')
  request.r(i767[8], i767[9], 0, i766, 'ToolStep1CameraFollow')
  request.r(i767[10], i767[11], 0, i766, 'jarRenderer')
  request.r(i767[12], i767[13], 0, i766, 'insideJarPosition')
  i766.jarJumpHeight = i767[14]
  i766.jarJumpDuration = i767[15]
  i766.jarDropDuration = i767[16]
  request.r(i767[17], i767[18], 0, i766, 'ShowerDropClip')
  i766.ZoomStep2 = request.d('ZoomPos', i767[19], i766.ZoomStep2)
  request.r(i767[20], i767[21], 0, i766, 'ToolStep2')
  request.r(i767[22], i767[23], 0, i766, 'ToolStep2_CapAnim')
  var i769 = i767[24]
  var i768 = []
  for(var i = 0; i < i769.length; i += 2) {
  request.r(i769[i + 0], i769[i + 1], 2, i768, '')
  }
  i766.cleanAcid = i768
  var i771 = i767[25]
  var i770 = []
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 2, i770, '')
  }
  i766.dirtyAcid = i770
  request.r(i767[26], i767[27], 0, i766, 'boilingParticles')
  request.r(i767[28], i767[29], 0, i766, 'showerBeforeAcid')
  request.r(i767[30], i767[31], 0, i766, 'showerAfterAcid')
  request.r(i767[32], i767[33], 0, i766, 'CapOpenClip')
  request.r(i767[34], i767[35], 0, i766, 'ShowerOutClip')
  request.r(i767[36], i767[37], 0, i766, 'BoilingSource')
  i766.ZoomStep3 = request.d('ZoomPos', i767[38], i766.ZoomStep3)
  request.r(i767[39], i767[40], 0, i766, 'ToolStep3')
  request.r(i767[41], i767[42], 0, i766, 'camFollowStep3')
  request.r(i767[43], i767[44], 0, i766, 'wrinkleLayer')
  i766.ZoomStep4 = request.d('ZoomPos', i767[45], i766.ZoomStep4)
  request.r(i767[46], i767[47], 0, i766, 'ToolStep4')
  request.r(i767[48], i767[49], 0, i766, 'camFollowStep4')
  request.r(i767[50], i767[51], 0, i766, 'starsParticles')
  i766.levelName = i767[52]
  i766.levelReward = i767[53]
  request.r(i767[54], i767[55], 0, i766, 'LevelIcon')
  request.r(i767[56], i767[57], 0, i766, 'Level_BG')
  var i773 = i767[58]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 1, i772, '')
  }
  i766.ToolIcons = i772
  var i775 = i767[59]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i766.AllDrags = i774
  var i777 = i767[60]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i766.AllSources = i776
  var i779 = i767[61]
  var i778 = []
  for(var i = 0; i < i779.length; i += 2) {
  request.r(i779[i + 0], i779[i + 1], 2, i778, '')
  }
  i766.AllScratches = i778
  i766.stepsDone = i767[62]
  i766.levelNo = i767[63]
  i766.partNo = i767[64]
  var i781 = i767[65]
  var i780 = []
  for(var i = 0; i < i781.length; i += 2) {
  request.r(i781[i + 0], i781[i + 1], 2, i780, '')
  }
  i766.disableOnLevelComplete = i780
  return i766
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i782 = root || request.c( 'ZoomPos' )
  var i783 = data
  i782.CameraPos = new pc.Vec3( i783[0], i783[1], i783[2] )
  i782.CameraFOV = i783[3]
  return i782
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i796 = root || request.c( 'PlayableCTA' )
  var i797 = data
  i796.trigger = i797[0]
  i796.afterSeconds = i797[1]
  i796.afterTaps = i797[2]
  request.r(i797[3], i797[4], 0, i796, 'scratchProgress')
  i796.scratchIndex = i797[5]
  i796.progressThreshold = i797[6]
  request.r(i797[7], i797[8], 0, i796, 'watchedTool')
  i796.blockInputOnFire = !!i797[9]
  i796.refireOnEveryTap = !!i797[10]
  i796.refireDelay = i797[11]
  i796.showEndCard = !!i797[12]
  request.r(i797[13], i797[14], 0, i796, 'endCard')
  var i799 = i797[15]
  var i798 = []
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 2, i798, '')
  }
  i796.thingsToDisableOnEndCard = i798
  i796.endCardDelay = i797[16]
  i796.showEndCardOnProgressTrigger = !!i797[17]
  i796.showEndCardOnToolAppearTrigger = !!i797[18]
  i796.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i797[19], i796.onCtaFired)
  i796.logWhenFired = !!i797[20]
  return i796
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i801 = data
  i800.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i801[0], i800.m_PersistentCalls)
  return i800
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i803 = data
  var i805 = i803[0]
  var i804 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i805.length; i += 1) {
    i804.add(request.d('UnityEngine.Events.PersistentCall', i805[i + 0]));
  }
  i802.m_Calls = i804
  return i802
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'm_Target')
  i808.m_TargetAssemblyTypeName = i809[2]
  i808.m_MethodName = i809[3]
  i808.m_Mode = i809[4]
  i808.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i809[5], i808.m_Arguments)
  i808.m_CallState = i809[6]
  return i808
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i810 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'MainCamera')
  i810.RenderType = i811[2]
  request.r(i811[3], i811[4], 0, i810, 'ScratchSurfaceSprite')
  i810.ScratchSurfaceSpriteHasAlpha = !!i811[5]
  i810.MaskProgressCutOffValue = i811[6]
  request.r(i811[7], i811[8], 0, i810, 'EraseTexture')
  i810.EraseTextureScale = new pc.Vec2( i811[9], i811[10] )
  i810.InputEnabled = !!i811[11]
  request.r(i811[12], i811[13], 0, i810, 'Card')
  i810.Mode = i811[14]
  request.r(i811[15], i811[16], 0, i810, 'Progress')
  request.r(i811[17], i811[18], 0, i810, 'MeshCard')
  request.r(i811[19], i811[20], 0, i810, 'SpriteCard')
  request.r(i811[21], i811[22], 0, i810, 'ImageCard')
  request.r(i811[23], i811[24], 0, i810, 'MaskShader')
  request.r(i811[25], i811[26], 0, i810, 'BrushShader')
  request.r(i811[27], i811[28], 0, i810, 'MaskProgressShader')
  request.r(i811[29], i811[30], 0, i810, 'MaskProgressCutOffShader')
  return i810
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i812 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'MainCamera')
  request.r(i813[2], i813[3], 0, i812, 'Surface')
  i812.RenderTextureQuality = i813[4]
  request.r(i813[5], i813[6], 0, i812, 'Eraser')
  request.r(i813[7], i813[8], 0, i812, 'Progress')
  request.r(i813[9], i813[10], 0, i812, 'ScratchSurface')
  request.r(i813[11], i813[12], 0, i812, 'RenderTexture')
  i812.BrushScale = new pc.Vec2( i813[13], i813[14] )
  request.r(i813[15], i813[16], 0, i812, 'ToolTip')
  i812.InputEnabled = !!i813[17]
  i812.IsScratching = !!i813[18]
  i812.useChangingScale = !!i813[19]
  i812.useGivenBrushScale = !!i813[20]
  i812.canSpreadMask = !!i813[21]
  i812.shouldPaintHoles = !!i813[22]
  i812.canRotateTip = !!i813[23]
  i812._mode = i813[24]
  return i812
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i814 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'Card')
  i814.currentProgress = i815[2]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'animatorController')
  request.r(i817[2], i817[3], 0, i816, 'avatar')
  i816.updateMode = i817[4]
  i816.hasTransformHierarchy = !!i817[5]
  i816.applyRootMotion = !!i817[6]
  var i819 = i817[7]
  var i818 = []
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 2, i818, '')
  }
  i816.humanBones = i818
  i816.enabled = !!i817[8]
  return i816
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i822 = root || request.c( 'BD_AnimationHelper' )
  var i823 = data
  i822.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i823[0], i822.OnAnimationComplete)
  request.r(i823[1], i823[2], 0, i822, 'sfxClip')
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i825 = data
  i824.color = new pc.Color(i825[0], i825[1], i825[2], i825[3])
  request.r(i825[4], i825[5], 0, i824, 'sprite')
  i824.flipX = !!i825[6]
  i824.flipY = !!i825[7]
  i824.drawMode = i825[8]
  i824.size = new pc.Vec2( i825[9], i825[10] )
  i824.tileMode = i825[11]
  i824.adaptiveModeThreshold = i825[12]
  i824.maskInteraction = i825[13]
  i824.spriteSortPoint = i825[14]
  i824.enabled = !!i825[15]
  request.r(i825[16], i825[17], 0, i824, 'sharedMaterial')
  var i827 = i825[18]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i824.sharedMaterials = i826
  i824.receiveShadows = !!i825[19]
  i824.shadowCastingMode = i825[20]
  i824.sortingLayerID = i825[21]
  i824.sortingOrder = i825[22]
  i824.lightmapIndex = i825[23]
  i824.lightmapSceneIndex = i825[24]
  i824.lightmapScaleOffset = new pc.Vec4( i825[25], i825[26], i825[27], i825[28] )
  i824.lightProbeUsage = i825[29]
  i824.reflectionProbeUsage = i825[30]
  return i824
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'm_RootBone')
  var i831 = i829[2]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i828.m_BoneTransforms = i830
  i828.m_AlwaysUpdate = !!i829[3]
  i828.m_AutoRebind = !!i829[4]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'clip')
  request.r(i833[2], i833[3], 0, i832, 'outputAudioMixerGroup')
  i832.playOnAwake = !!i833[4]
  i832.loop = !!i833[5]
  i832.time = i833[6]
  i832.volume = i833[7]
  i832.pitch = i833[8]
  i832.enabled = !!i833[9]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i835 = data
  i834.usedByComposite = !!i835[0]
  i834.autoTiling = !!i835[1]
  i834.size = new pc.Vec2( i835[2], i835[3] )
  i834.edgeRadius = i835[4]
  i834.enabled = !!i835[5]
  i834.isTrigger = !!i835[6]
  i834.usedByEffector = !!i835[7]
  i834.density = i835[8]
  i834.offset = new pc.Vec2( i835[9], i835[10] )
  request.r(i835[11], i835[12], 0, i834, 'material')
  return i834
}

Deserializers["JarFillNoMask"] = function (request, data, root) {
  var i836 = root || request.c( 'JarFillNoMask' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'water')
  request.r(i837[2], i837[3], 0, i836, 'jarFloor')
  request.r(i837[4], i837[5], 0, i836, 'stream')
  request.r(i837[6], i837[7], 0, i836, 'surface')
  i836.surfaceOffset = i837[8]
  request.r(i837[9], i837[10], 0, i836, 'showWhenFull')
  return i836
}

Deserializers["MatchTargetXPosition"] = function (request, data, root) {
  var i838 = root || request.c( 'MatchTargetXPosition' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'target')
  i838.ClampX_L = i839[2]
  i838.ClampX_H = i839[3]
  i838.smoothFollow = !!i839[4]
  i838.smoothSpeed = i839[5]
  i838.useClamp = !!i839[6]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i841 = data
  i840.radius = i841[0]
  i840.enabled = !!i841[1]
  i840.isTrigger = !!i841[2]
  i840.usedByEffector = !!i841[3]
  i840.density = i841[4]
  i840.offset = new pc.Vec2( i841[5], i841[6] )
  request.r(i841[7], i841[8], 0, i840, 'material')
  return i840
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i842 = root || request.c( 'PlaySfxOnCollision' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'Tip')
  i842.Mode = i843[2]
  request.r(i843[3], i843[4], 0, i842, 'DragInput')
  request.r(i843[5], i843[6], 0, i842, 'Source')
  i842.startVol = i843[7]
  i842.targetVol = i843[8]
  i842.duration = i843[9]
  request.r(i843[10], i843[11], 0, i842, 'Particles')
  i842.isDone = !!i843[12]
  i842.isInArea = !!i843[13]
  i842.isPlaying = !!i843[14]
  return i842
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i844 = root || request.c( 'PlayParticlesOnCollision' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'Target')
  request.r(i845[2], i845[3], 0, i844, 'ParticlePrefab')
  i844.destroyIt = !!i845[4]
  i844.stayAtPlace = !!i845[5]
  i844.disableOnCollision = !!i845[6]
  i844.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i845[7], i844.OnCollisionEvent)
  return i844
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i846 = root || request.c( 'BasicDrag' )
  var i847 = data
  i846.canDrag = !!i847[0]
  i846.dragByDelta = !!i847[1]
  i846.isDragging = !!i847[2]
  i846.moveWithPointer = !!i847[3]
  i846.canReturn = !!i847[4]
  i846.jumpOnReturn = !!i847[5]
  i846.returnTime = i847[6]
  i846.Tool_Offset = new pc.Vec3( i847[7], i847[8], i847[9] )
  i846.canScaleIncrease = !!i847[10]
  i846.Self_ScaleNew = new pc.Vec3( i847[11], i847[12], i847[13] )
  i846.canRotateOnPick = !!i847[14]
  i846.startRot = new pc.Vec3( i847[15], i847[16], i847[17] )
  i846.newRot = new pc.Vec3( i847[18], i847[19], i847[20] )
  var i849 = i847[21]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i846.childSprite = i848
  request.r(i847[22], i847[23], 0, i846, 'ToolSelectClip')
  request.r(i847[24], i847[25], 0, i846, 'ToolLoopClip')
  request.r(i847[26], i847[27], 0, i846, 'thisParticles')
  i846.onDragparticle = !!i847[28]
  request.r(i847[29], i847[30], 0, i846, 'dragParticles')
  request.r(i847[31], i847[32], 0, i846, 'anim')
  i846.startPos = new pc.Vec3( i847[33], i847[34], i847[35] )
  i846.startScale = new pc.Vec3( i847[36], i847[37], i847[38] )
  i846.Vibration = !!i847[39]
  i846.isPlacedCannotMove = !!i847[40]
  i846.isObjectMovingWhileDragging = !!i847[41]
  i846.OnMouseDownEvent = request.d('System.Action', i847[42], i846.OnMouseDownEvent)
  i846.OnMouseUpEvent = request.d('System.Action', i847[43], i846.OnMouseUpEvent)
  i846.ProgStartEvent = request.d('System.Action', i847[44], i846.ProgStartEvent)
  i846.ProgEndEvent = request.d('System.Action', i847[45], i846.ProgEndEvent)
  i846.canCallMouseUpWhenGamePaused = !!i847[46]
  i846.ClampX_L = i847[47]
  i846.ClampX_H = i847[48]
  i846.ClampY_L = i847[49]
  i846.ClampY_H = i847[50]
  i846.startOrder = i847[51]
  i846.dontResetItIsInCollider = !!i847[52]
  request.r(i847[53], i847[54], 0, i846, 'thisCollider')
  request.r(i847[55], i847[56], 0, i846, 'thisSR')
  i846.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i847[57], i846.OnMouseDownEventIndependentFromCanDrag)
  return i846
}

Deserializers["System.Action"] = function (request, data, root) {
  var i850 = root || request.c( 'System.Action' )
  var i851 = data
  return i850
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i852 = root || request.c( 'BD_Clamp' )
  var i853 = data
  i852.ClampX_L = i853[0]
  i852.ClampX_H = i853[1]
  i852.ClampY_L = i853[2]
  i852.ClampY_H = i853[3]
  return i852
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i854 = root || request.c( 'BD_ToolRotate' )
  var i855 = data
  i854.startDelay = i855[0]
  request.r(i855[1], i855[2], 0, i854, 'Tool')
  request.r(i855[3], i855[4], 0, i854, 'Clamp')
  request.r(i855[5], i855[6], 0, i854, 'Pivot')
  i854.MinAngle = new pc.Vec3( i855[7], i855[8], i855[9] )
  i854.MaxAngle = new pc.Vec3( i855[10], i855[11], i855[12] )
  i854.rotationSpeed = i855[13]
  return i854
}

Deserializers["BD_Action"] = function (request, data, root) {
  var i856 = root || request.c( 'BD_Action' )
  var i857 = data
  i856.OnMouseDownEvent = request.d('UnityEngine.Events.UnityEvent', i857[0], i856.OnMouseDownEvent)
  i856.OnMouseUpEvent = request.d('UnityEngine.Events.UnityEvent', i857[1], i856.OnMouseUpEvent)
  i856.setToolLayer = !!i857[2]
  request.r(i857[3], i857[4], 0, i856, 'tool_SP')
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

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i860 = root || request.c( 'BD_CameraFollow' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'Tool')
  request.r(i861[2], i861[3], 0, i860, 'Pivot')
  i860.FOV = i861[4]
  i860.Y_L = i861[5]
  i860.Y_H = i861[6]
  i860.X_L = i861[7]
  i860.X_R = i861[8]
  i860.startDelay = i861[9]
  i860.duration = i861[10]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i863 = data
  i862.bodyType = i863[0]
  request.r(i863[1], i863[2], 0, i862, 'material')
  i862.simulated = !!i863[3]
  i862.useAutoMass = !!i863[4]
  i862.mass = i863[5]
  i862.drag = i863[6]
  i862.angularDrag = i863[7]
  i862.gravityScale = i863[8]
  i862.collisionDetectionMode = i863[9]
  i862.sleepMode = i863[10]
  i862.constraints = i863[11]
  return i862
}

Deserializers["JarDropTrigger"] = function (request, data, root) {
  var i864 = root || request.c( 'JarDropTrigger' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'jarTopTarget')
  i864.OnHitJar = request.d('UnityEngine.Events.UnityEvent', i865[2], i864.OnHitJar)
  return i864
}

Deserializers["BD_Audio"] = function (request, data, root) {
  var i866 = root || request.c( 'BD_Audio' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'BD')
  request.r(i867[2], i867[3], 0, i866, 'Source')
  i866.shouldRestart = !!i867[4]
  i866.startVol = i867[5]
  i866.targetVol = i867[6]
  i866.duration = i867[7]
  i866.startDelay = i867[8]
  return i866
}

Deserializers["AcidPourController"] = function (request, data, root) {
  var i868 = root || request.c( 'AcidPourController' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'thisTool')
  request.r(i869[2], i869[3], 0, i868, 'acidPourVisual')
  request.r(i869[4], i869[5], 0, i868, 'acidPourParticles')
  i868.showDelay = i869[6]
  request.r(i869[7], i869[8], 0, i868, 'waterInJar')
  i868.pourDuration = i869[9]
  i868.onPourComplete = request.d('UnityEngine.Events.UnityEvent', i869[10], i868.onPourComplete)
  return i868
}

Deserializers["BD_SpriteAnim"] = function (request, data, root) {
  var i870 = root || request.c( 'BD_SpriteAnim' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'BD')
  request.r(i871[2], i871[3], 0, i870, 'SR')
  var i873 = i871[4]
  var i872 = []
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 2, i872, '')
  }
  i870.AllSprites = i872
  i870.changeSpeed = i871[5]
  return i870
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i874 = root || request.c( 'BD_Progress' )
  var i875 = data
  var i877 = i875[0]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('ScratchData', i877[i + 0]) );
  }
  i874.AllScratches = i876
  i874.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i875[1], i874.OnScratchComplete)
  i874.isProgDone = !!i875[2]
  i874.canCallComplete = !!i875[3]
  i874.CollectiveAppear = !!i875[4]
  i874.tipControl = !!i875[5]
  i874.progressControl = !!i875[6]
  request.r(i875[7], i875[8], 0, i874, 'thisDrag')
  i874.CompleteEvent = request.d('System.Action', i875[9], i874.CompleteEvent)
  i874.SubCompleteEvent = request.d('System.Action', i875[10], i874.SubCompleteEvent)
  return i874
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i880 = root || request.c( 'ScratchData' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'ScratchManager')
  i880.scratchLimit = i881[2]
  i880.isComplete = !!i881[3]
  return i880
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i882 = root || request.c( 'BD_SpriteChange' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'BD')
  request.r(i883[2], i883[3], 0, i882, 'SR')
  request.r(i883[4], i883[5], 0, i882, 'Default')
  request.r(i883[6], i883[7], 0, i882, 'Picked')
  i882.resetOnRelease = !!i883[8]
  return i882
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i884 = root || request.c( 'DestroyObj' )
  var i885 = data
  i884.destroyDelay = i885[0]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i887 = data
  i886.name = i887[0]
  i886.atlasId = i887[1]
  i886.mipmapCount = i887[2]
  i886.hdr = !!i887[3]
  i886.size = i887[4]
  i886.anisoLevel = i887[5]
  i886.filterMode = i887[6]
  var i889 = i887[7]
  var i888 = []
  for(var i = 0; i < i889.length; i += 4) {
    i888.push( UnityEngine.Rect.MinMaxRect(i889[i + 0], i889[i + 1], i889[i + 2], i889[i + 3]) );
  }
  i886.rects = i888
  i886.wrapU = i887[8]
  i886.wrapV = i887[9]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i893 = data
  i892.name = i893[0]
  i892.index = i893[1]
  i892.startup = !!i893[2]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i895 = data
  i894.aspect = i895[0]
  i894.orthographic = !!i895[1]
  i894.orthographicSize = i895[2]
  i894.backgroundColor = new pc.Color(i895[3], i895[4], i895[5], i895[6])
  i894.nearClipPlane = i895[7]
  i894.farClipPlane = i895[8]
  i894.fieldOfView = i895[9]
  i894.depth = i895[10]
  i894.clearFlags = i895[11]
  i894.cullingMask = i895[12]
  i894.rect = i895[13]
  request.r(i895[14], i895[15], 0, i894, 'targetTexture')
  i894.usePhysicalProperties = !!i895[16]
  i894.focalLength = i895[17]
  i894.sensorSize = new pc.Vec2( i895[18], i895[19] )
  i894.lensShift = new pc.Vec2( i895[20], i895[21] )
  i894.gateFit = i895[22]
  i894.commandBufferCount = i895[23]
  i894.cameraType = i895[24]
  i894.enabled = !!i895[25]
  return i894
}

Deserializers["CameraController"] = function (request, data, root) {
  var i896 = root || request.c( 'CameraController' )
  var i897 = data
  request.r(i897[0], i897[1], 0, i896, 'cam')
  i896.defaultPosition = new pc.Vec3( i897[2], i897[3], i897[4] )
  i896.defaultSize = i897[5]
  i896.defaultFOV = i897[6]
  i896.defaultDuration = i897[7]
  i896.defaultEase = i897[8]
  return i896
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i898 = root || request.c( 'MusicSource' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'source')
  return i898
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i900 = root || request.c( 'UI_Manager' )
  var i901 = data
  i900.levelCompleted = !!i901[0]
  i900.isPauseActive = !!i901[1]
  i900.loadIndex = i901[2]
  request.r(i901[3], i901[4], 0, i900, 'removeAdsButton')
  request.r(i901[5], i901[6], 0, i900, 'pauseButton')
  request.r(i901[7], i901[8], 0, i900, 'Fade_Img')
  request.r(i901[9], i901[10], 0, i900, 'TopBarAnim')
  request.r(i901[11], i901[12], 0, i900, 'MainPanel')
  request.r(i901[13], i901[14], 0, i900, 'PausePanel')
  request.r(i901[15], i901[16], 0, i900, 'PausePopUp')
  request.r(i901[17], i901[18], 0, i900, 'PauseCanvasGroup')
  request.r(i901[19], i901[20], 0, i900, 'RateUsPanel')
  request.r(i901[21], i901[22], 0, i900, 'RateUsPopUp')
  request.r(i901[23], i901[24], 0, i900, 'RemoveAdsPanel')
  request.r(i901[25], i901[26], 0, i900, 'RemoveAdsPopUp')
  request.r(i901[27], i901[28], 0, i900, 'RemoveAdsCanvasGroup')
  var i903 = i901[29]
  var i902 = []
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 2, i902, '')
  }
  i900.RemoveAdsAnims = i902
  request.r(i901[30], i901[31], 0, i900, 'CompletePanel')
  request.r(i901[32], i901[33], 0, i900, 'LevelIcon')
  request.r(i901[34], i901[35], 0, i900, 'CompleteParticles')
  request.r(i901[36], i901[37], 0, i900, 'progressBar')
  request.r(i901[38], i901[39], 0, i900, 'progressText')
  request.r(i901[40], i901[41], 0, i900, 'toolIcon1')
  request.r(i901[42], i901[43], 0, i900, 'toolIcon2')
  request.r(i901[44], i901[45], 0, i900, 'toolIcon3')
  request.r(i901[46], i901[47], 0, i900, 'toolIcon4')
  request.r(i901[48], i901[49], 0, i900, 'target1')
  request.r(i901[50], i901[51], 0, i900, 'target2')
  i900.toolMoveDuration = i901[52]
  i900.currentIndex = i901[53]
  var i905 = i901[54]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 1, i904, '')
  }
  i900.allTools = i904
  request.r(i901[55], i901[56], 0, i900, 'clockProgress')
  request.r(i901[57], i901[58], 0, i900, 'clockProgressFill')
  request.r(i901[59], i901[60], 0, i900, 'clockAudio')
  i900.moveDistance = i901[61]
  i900.animationDuration = i901[62]
  i900.greyBgChildName = i901[63]
  i900.pushOffset = i901[64]
  return i900
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i908 = root || request.c( 'GameManagerPlayable' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'endParticles')
  request.r(i909[2], i909[3], 0, i908, 'stepCompleteParticles')
  request.r(i909[4], i909[5], 0, i908, 'DefaultMat')
  request.r(i909[6], i909[7], 0, i908, 'BG_Music')
  request.r(i909[8], i909[9], 0, i908, 'restoreEffectShader')
  request.r(i909[10], i909[11], 0, i908, 'stickerEffectShader')
  i908.isComplete = !!i909[12]
  i908.isPaused = !!i909[13]
  request.r(i909[14], i909[15], 0, i908, 'currentLevel')
  i908.startLevelOnPlay = !!i909[16]
  i908.currentLevelNo = i909[17]
  return i908
}

Deserializers["AudioController"] = function (request, data, root) {
  var i910 = root || request.c( 'AudioController' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'MainMixer')
  request.r(i911[2], i911[3], 0, i910, 'UiClick')
  request.r(i911[4], i911[5], 0, i910, 'UiClickSource')
  var i913 = i911[6]
  var i912 = []
  for(var i = 0; i < i913.length; i += 2) {
  request.r(i913[i + 0], i913[i + 1], 2, i912, '')
  }
  i910.SfxSources = i912
  var i915 = i911[7]
  var i914 = []
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 2, i914, '')
  }
  i910.AllClips = i914
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i919 = data
  i918.pivot = new pc.Vec2( i919[0], i919[1] )
  i918.anchorMin = new pc.Vec2( i919[2], i919[3] )
  i918.anchorMax = new pc.Vec2( i919[4], i919[5] )
  i918.sizeDelta = new pc.Vec2( i919[6], i919[7] )
  i918.anchoredPosition3D = new pc.Vec3( i919[8], i919[9], i919[10] )
  i918.rotation = new pc.Quat(i919[11], i919[12], i919[13], i919[14])
  i918.scale = new pc.Vec3( i919[15], i919[16], i919[17] )
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i921 = data
  i920.planeDistance = i921[0]
  i920.referencePixelsPerUnit = i921[1]
  i920.isFallbackOverlay = !!i921[2]
  i920.renderMode = i921[3]
  i920.renderOrder = i921[4]
  i920.sortingLayerName = i921[5]
  i920.sortingOrder = i921[6]
  i920.scaleFactor = i921[7]
  request.r(i921[8], i921[9], 0, i920, 'worldCamera')
  i920.overrideSorting = !!i921[10]
  i920.pixelPerfect = !!i921[11]
  i920.targetDisplay = i921[12]
  i920.overridePixelPerfect = !!i921[13]
  i920.enabled = !!i921[14]
  return i920
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i923 = data
  i922.m_UiScaleMode = i923[0]
  i922.m_ReferencePixelsPerUnit = i923[1]
  i922.m_ScaleFactor = i923[2]
  i922.m_ReferenceResolution = new pc.Vec2( i923[3], i923[4] )
  i922.m_ScreenMatchMode = i923[5]
  i922.m_MatchWidthOrHeight = i923[6]
  i922.m_PhysicalUnit = i923[7]
  i922.m_FallbackScreenDPI = i923[8]
  i922.m_DefaultSpriteDPI = i923[9]
  i922.m_DynamicPixelsPerUnit = i923[10]
  i922.m_PresetInfoIsWorld = !!i923[11]
  return i922
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i925 = data
  i924.m_IgnoreReversedGraphics = !!i925[0]
  i924.m_BlockingObjects = i925[1]
  i924.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i925[2] )
  return i924
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i926 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i927 = data
  i926.targetIsSelf = !!i927[0]
  request.r(i927[1], i927[2], 0, i926, 'targetGO')
  i926.tweenTargetIsTargetGO = !!i927[3]
  i926.delay = i927[4]
  i926.duration = i927[5]
  i926.easeType = i927[6]
  i926.easeCurve = new pc.AnimationCurve( { keys_flow: i927[7] } )
  i926.loopType = i927[8]
  i926.loops = i927[9]
  i926.id = i927[10]
  i926.isRelative = !!i927[11]
  i926.isFrom = !!i927[12]
  i926.isIndependentUpdate = !!i927[13]
  i926.autoKill = !!i927[14]
  i926.autoGenerate = !!i927[15]
  i926.isActive = !!i927[16]
  i926.isValid = !!i927[17]
  request.r(i927[18], i927[19], 0, i926, 'target')
  i926.animationType = i927[20]
  i926.targetType = i927[21]
  i926.forcedTargetType = i927[22]
  i926.autoPlay = !!i927[23]
  i926.useTargetAsV3 = !!i927[24]
  i926.endValueFloat = i927[25]
  i926.endValueV3 = new pc.Vec3( i927[26], i927[27], i927[28] )
  i926.endValueV2 = new pc.Vec2( i927[29], i927[30] )
  i926.endValueColor = new pc.Color(i927[31], i927[32], i927[33], i927[34])
  i926.endValueString = i927[35]
  i926.endValueRect = UnityEngine.Rect.MinMaxRect(i927[36], i927[37], i927[38], i927[39])
  request.r(i927[40], i927[41], 0, i926, 'endValueTransform')
  i926.optionalBool0 = !!i927[42]
  i926.optionalBool1 = !!i927[43]
  i926.optionalFloat0 = i927[44]
  i926.optionalInt0 = i927[45]
  i926.optionalRotationMode = i927[46]
  i926.optionalScrambleMode = i927[47]
  i926.optionalShakeRandomnessMode = i927[48]
  i926.optionalString = i927[49]
  i926.updateType = i927[50]
  i926.isSpeedBased = !!i927[51]
  i926.hasOnStart = !!i927[52]
  i926.hasOnPlay = !!i927[53]
  i926.hasOnUpdate = !!i927[54]
  i926.hasOnStepComplete = !!i927[55]
  i926.hasOnComplete = !!i927[56]
  i926.hasOnTweenCreated = !!i927[57]
  i926.hasOnRewind = !!i927[58]
  i926.onStart = request.d('UnityEngine.Events.UnityEvent', i927[59], i926.onStart)
  i926.onPlay = request.d('UnityEngine.Events.UnityEvent', i927[60], i926.onPlay)
  i926.onUpdate = request.d('UnityEngine.Events.UnityEvent', i927[61], i926.onUpdate)
  i926.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i927[62], i926.onStepComplete)
  i926.onComplete = request.d('UnityEngine.Events.UnityEvent', i927[63], i926.onComplete)
  i926.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i927[64], i926.onTweenCreated)
  i926.onRewind = request.d('UnityEngine.Events.UnityEvent', i927[65], i926.onRewind)
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i929 = data
  i928.cullTransparentMesh = !!i929[0]
  return i928
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.UI.Image' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'm_Sprite')
  i930.m_Type = i931[2]
  i930.m_PreserveAspect = !!i931[3]
  i930.m_FillCenter = !!i931[4]
  i930.m_FillMethod = i931[5]
  i930.m_FillAmount = i931[6]
  i930.m_FillClockwise = !!i931[7]
  i930.m_FillOrigin = i931[8]
  i930.m_UseSpriteMesh = !!i931[9]
  i930.m_PixelsPerUnitMultiplier = i931[10]
  request.r(i931[11], i931[12], 0, i930, 'm_Material')
  i930.m_Maskable = !!i931[13]
  i930.m_Color = new pc.Color(i931[14], i931[15], i931[16], i931[17])
  i930.m_RaycastTarget = !!i931[18]
  i930.m_RaycastPadding = new pc.Vec4( i931[19], i931[20], i931[21], i931[22] )
  return i930
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.UI.Text' )
  var i933 = data
  i932.m_FontData = request.d('UnityEngine.UI.FontData', i933[0], i932.m_FontData)
  i932.m_Text = i933[1]
  request.r(i933[2], i933[3], 0, i932, 'm_Material')
  i932.m_Maskable = !!i933[4]
  i932.m_Color = new pc.Color(i933[5], i933[6], i933[7], i933[8])
  i932.m_RaycastTarget = !!i933[9]
  i932.m_RaycastPadding = new pc.Vec4( i933[10], i933[11], i933[12], i933[13] )
  return i932
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.UI.FontData' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'm_Font')
  i934.m_FontSize = i935[2]
  i934.m_FontStyle = i935[3]
  i934.m_BestFit = !!i935[4]
  i934.m_MinSize = i935[5]
  i934.m_MaxSize = i935[6]
  i934.m_Alignment = i935[7]
  i934.m_AlignByGeometry = !!i935[8]
  i934.m_RichText = !!i935[9]
  i934.m_HorizontalOverflow = i935[10]
  i934.m_VerticalOverflow = i935[11]
  i934.m_LineSpacing = i935[12]
  return i934
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i936 = root || request.c( 'UnityEngine.UI.Button' )
  var i937 = data
  i936.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i937[0], i936.m_OnClick)
  i936.m_Navigation = request.d('UnityEngine.UI.Navigation', i937[1], i936.m_Navigation)
  i936.m_Transition = i937[2]
  i936.m_Colors = request.d('UnityEngine.UI.ColorBlock', i937[3], i936.m_Colors)
  i936.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i937[4], i936.m_SpriteState)
  i936.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i937[5], i936.m_AnimationTriggers)
  i936.m_Interactable = !!i937[6]
  request.r(i937[7], i937[8], 0, i936, 'm_TargetGraphic')
  return i936
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i938 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i939 = data
  i938.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i939[0], i938.m_PersistentCalls)
  return i938
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i941 = data
  i940.m_Mode = i941[0]
  i940.m_WrapAround = !!i941[1]
  request.r(i941[2], i941[3], 0, i940, 'm_SelectOnUp')
  request.r(i941[4], i941[5], 0, i940, 'm_SelectOnDown')
  request.r(i941[6], i941[7], 0, i940, 'm_SelectOnLeft')
  request.r(i941[8], i941[9], 0, i940, 'm_SelectOnRight')
  return i940
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i942 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i943 = data
  i942.m_NormalColor = new pc.Color(i943[0], i943[1], i943[2], i943[3])
  i942.m_HighlightedColor = new pc.Color(i943[4], i943[5], i943[6], i943[7])
  i942.m_PressedColor = new pc.Color(i943[8], i943[9], i943[10], i943[11])
  i942.m_SelectedColor = new pc.Color(i943[12], i943[13], i943[14], i943[15])
  i942.m_DisabledColor = new pc.Color(i943[16], i943[17], i943[18], i943[19])
  i942.m_ColorMultiplier = i943[20]
  i942.m_FadeDuration = i943[21]
  return i942
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i944 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i945 = data
  request.r(i945[0], i945[1], 0, i944, 'm_HighlightedSprite')
  request.r(i945[2], i945[3], 0, i944, 'm_PressedSprite')
  request.r(i945[4], i945[5], 0, i944, 'm_SelectedSprite')
  request.r(i945[6], i945[7], 0, i944, 'm_DisabledSprite')
  return i944
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i947 = data
  i946.m_NormalTrigger = i947[0]
  i946.m_HighlightedTrigger = i947[1]
  i946.m_PressedTrigger = i947[2]
  i946.m_SelectedTrigger = i947[3]
  i946.m_DisabledTrigger = i947[4]
  return i946
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i948 = root || request.c( 'PlayableHudRuntime' )
  var i949 = data
  return i948
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i951 = data
  request.r(i951[0], i951[1], 0, i950, 'm_FirstSelected')
  i950.m_sendNavigationEvents = !!i951[2]
  i950.m_DragThreshold = i951[3]
  return i950
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i953 = data
  i952.m_HorizontalAxis = i953[0]
  i952.m_VerticalAxis = i953[1]
  i952.m_SubmitButton = i953[2]
  i952.m_CancelButton = i953[3]
  i952.m_InputActionsPerSecond = i953[4]
  i952.m_RepeatDelay = i953[5]
  i952.m_ForceModuleActive = !!i953[6]
  i952.m_SendPointerHoverToParent = !!i953[7]
  return i952
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i954 = root || request.c( 'PlayableRouter' )
  var i955 = data
  var i957 = i955[0]
  var i956 = []
  for(var i = 0; i < i957.length; i += 2) {
  request.r(i957[i + 0], i957[i + 1], 2, i956, '')
  }
  i954.menuObjects = i956
  var i959 = i955[1]
  var i958 = []
  for(var i = 0; i < i959.length; i += 2) {
  request.r(i959[i + 0], i959[i + 1], 2, i958, '')
  }
  i954.gameplayObjects = i958
  var i961 = i955[2]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('PlayableRouter+SubLevelSlot', i961[i + 0]) );
  }
  i954.subLevels = i960
  i954.fadeDuration = i955[3]
  i954.onMenuClosing = request.d('UnityEngine.Events.UnityEvent', i955[4], i954.onMenuClosing)
  i954.lockedMessage = i955[5]
  i954.lockedTapsToCTA = i955[6]
  return i954
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i964 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i965 = data
  request.r(i965[0], i965[1], 0, i964, 'button')
  request.r(i965[2], i965[3], 0, i964, 'level')
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

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"69":[70],"71":[70],"72":[70],"73":[70],"74":[70],"75":[70],"76":[77],"78":[42],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[34],"88":[34],"89":[34],"90":[34],"91":[34],"92":[34],"93":[34],"94":[34],"95":[34],"96":[34],"97":[34],"98":[34],"99":[34],"100":[42],"101":[102],"103":[104],"105":[104],"54":[47],"106":[107],"108":[12],"109":[25],"110":[12],"111":[112],"113":[112],"114":[49],"115":[25],"116":[12],"117":[10],"23":[12],"118":[47],"119":[47],"57":[54],"48":[58,47],"120":[47],"56":[54],"121":[47],"122":[47],"123":[47],"124":[47],"125":[47],"126":[47],"127":[47],"128":[47],"129":[47],"130":[58,47],"131":[47],"132":[47],"133":[47],"134":[47],"50":[58,47],"135":[47],"136":[62],"137":[62],"63":[62],"138":[62],"139":[42],"140":[42]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","Level1_Shower_Playable","UnityEngine.GameObject","BasicDrag","BD_CameraFollow","UnityEngine.SpriteRenderer","UnityEngine.AudioClip","UnityEngine.Animator","UnityEngine.AudioSource","UnityEngine.Sprite","ScratchCardAsset.ScratchCardManager","PlayableCTA","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","UnityEditor.Animations.AnimatorController","BD_AnimationHelper","UnityEngine.U2D.Animation.SpriteSkin","UnityEditor.Audio.AudioMixerGroupController","UnityEngine.BoxCollider2D","JarFillNoMask","MatchTargetXPosition","UnityEngine.CircleCollider2D","PlaySfxOnCollision","PlayParticlesOnCollision","BD_Clamp","BD_ToolRotate","BD_Action","UnityEngine.Rigidbody2D","JarDropTrigger","BD_Audio","AcidPourController","BD_SpriteAnim","BD_Progress","BD_SpriteChange","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","UnityEngine.UI.Button","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PlayableRouter","ToastManager","UnityEngine.CanvasGroup","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","TeaseTapCTA","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "25.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "14Sept2026_CompleteLvl1_5";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1697";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3878";

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

Deserializers.buildID = "39927f0d-29be-40be-b46b-845e0d5b379d";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

