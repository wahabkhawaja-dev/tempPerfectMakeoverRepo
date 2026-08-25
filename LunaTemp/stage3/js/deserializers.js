var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.JointSpring' )
  var i603 = data
  i602.spring = i603[0]
  i602.damper = i603[1]
  i602.targetPosition = i603[2]
  return i602
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.JointMotor' )
  var i605 = data
  i604.m_TargetVelocity = i605[0]
  i604.m_Force = i605[1]
  i604.m_FreeSpin = i605[2]
  return i604
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.JointLimits' )
  var i607 = data
  i606.m_Min = i607[0]
  i606.m_Max = i607[1]
  i606.m_Bounciness = i607[2]
  i606.m_BounceMinVelocity = i607[3]
  i606.m_ContactDistance = i607[4]
  i606.minBounce = i607[5]
  i606.maxBounce = i607[6]
  return i606
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.JointDrive' )
  var i609 = data
  i608.m_PositionSpring = i609[0]
  i608.m_PositionDamper = i609[1]
  i608.m_MaximumForce = i609[2]
  i608.m_UseAcceleration = i609[3]
  return i608
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i611 = data
  i610.m_Spring = i611[0]
  i610.m_Damper = i611[1]
  return i610
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i613 = data
  i612.m_Limit = i613[0]
  i612.m_Bounciness = i613[1]
  i612.m_ContactDistance = i613[2]
  return i612
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i615 = data
  i614.m_ExtremumSlip = i615[0]
  i614.m_ExtremumValue = i615[1]
  i614.m_AsymptoteSlip = i615[2]
  i614.m_AsymptoteValue = i615[3]
  i614.m_Stiffness = i615[4]
  return i614
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i617 = data
  i616.m_LowerAngle = i617[0]
  i616.m_UpperAngle = i617[1]
  return i616
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i619 = data
  i618.m_MotorSpeed = i619[0]
  i618.m_MaximumMotorTorque = i619[1]
  return i618
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i621 = data
  i620.m_DampingRatio = i621[0]
  i620.m_Frequency = i621[1]
  i620.m_Angle = i621[2]
  return i620
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i623 = data
  i622.m_LowerTranslation = i623[0]
  i622.m_UpperTranslation = i623[1]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i624 = root || new pc.UnityMaterial()
  var i625 = data
  i624.name = i625[0]
  request.r(i625[1], i625[2], 0, i624, 'shader')
  i624.renderQueue = i625[3]
  i624.enableInstancing = !!i625[4]
  var i627 = i625[5]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i627[i + 0]) );
  }
  i624.floatParameters = i626
  var i629 = i625[6]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i629[i + 0]) );
  }
  i624.colorParameters = i628
  var i631 = i625[7]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i631[i + 0]) );
  }
  i624.vectorParameters = i630
  var i633 = i625[8]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i633[i + 0]) );
  }
  i624.textureParameters = i632
  var i635 = i625[9]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i635[i + 0]) );
  }
  i624.materialFlags = i634
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i639 = data
  i638.name = i639[0]
  i638.value = i639[1]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i643 = data
  i642.name = i643[0]
  i642.value = new pc.Color(i643[1], i643[2], i643[3], i643[4])
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i647 = data
  i646.name = i647[0]
  i646.value = new pc.Vec4( i647[1], i647[2], i647[3], i647[4] )
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i651 = data
  i650.name = i651[0]
  request.r(i651[1], i651[2], 0, i650, 'value')
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i655 = data
  i654.name = i655[0]
  i654.enabled = !!i655[1]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i657 = data
  i656.name = i657[0]
  i656.width = i657[1]
  i656.height = i657[2]
  i656.mipmapCount = i657[3]
  i656.anisoLevel = i657[4]
  i656.filterMode = i657[5]
  i656.hdr = !!i657[6]
  i656.format = i657[7]
  i656.wrapMode = i657[8]
  i656.alphaIsTransparency = !!i657[9]
  i656.alphaSource = i657[10]
  i656.graphicsFormat = i657[11]
  i656.sRGBTexture = !!i657[12]
  i656.desiredColorSpace = i657[13]
  i656.wrapU = i657[14]
  i656.wrapV = i657[15]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i659 = data
  i658.name = i659[0]
  i658.halfPrecision = !!i659[1]
  i658.useSimplification = !!i659[2]
  i658.useUInt32IndexFormat = !!i659[3]
  i658.vertexCount = i659[4]
  i658.aabb = i659[5]
  var i661 = i659[6]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( !!i661[i + 0] );
  }
  i658.streams = i660
  i658.vertices = i659[7]
  var i663 = i659[8]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i663[i + 0]) );
  }
  i658.subMeshes = i662
  var i665 = i659[9]
  var i664 = []
  for(var i = 0; i < i665.length; i += 16) {
    i664.push( new pc.Mat4().setData(i665[i + 0], i665[i + 1], i665[i + 2], i665[i + 3],  i665[i + 4], i665[i + 5], i665[i + 6], i665[i + 7],  i665[i + 8], i665[i + 9], i665[i + 10], i665[i + 11],  i665[i + 12], i665[i + 13], i665[i + 14], i665[i + 15]) );
  }
  i658.bindposes = i664
  var i667 = i659[10]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i667[i + 0]) );
  }
  i658.blendShapes = i666
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i673 = data
  i672.triangles = i673[0]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i679 = data
  i678.name = i679[0]
  var i681 = i679[1]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i681[i + 0]) );
  }
  i678.frames = i680
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i683 = data
  i682.position = new pc.Vec3( i683[0], i683[1], i683[2] )
  i682.scale = new pc.Vec3( i683[3], i683[4], i683[5] )
  i682.rotation = new pc.Quat(i683[6], i683[7], i683[8], i683[9])
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i685 = data
  i684.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i685[0], i684.main)
  i684.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i685[1], i684.colorBySpeed)
  i684.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i685[2], i684.colorOverLifetime)
  i684.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i685[3], i684.emission)
  i684.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i685[4], i684.rotationBySpeed)
  i684.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i685[5], i684.rotationOverLifetime)
  i684.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i685[6], i684.shape)
  i684.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i685[7], i684.sizeBySpeed)
  i684.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i685[8], i684.sizeOverLifetime)
  i684.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i685[9], i684.textureSheetAnimation)
  i684.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i685[10], i684.velocityOverLifetime)
  i684.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i685[11], i684.noise)
  i684.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i685[12], i684.inheritVelocity)
  i684.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i685[13], i684.forceOverLifetime)
  i684.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i685[14], i684.limitVelocityOverLifetime)
  i684.useAutoRandomSeed = !!i685[15]
  i684.randomSeed = i685[16]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i686 = root || new pc.ParticleSystemMain()
  var i687 = data
  i686.duration = i687[0]
  i686.loop = !!i687[1]
  i686.prewarm = !!i687[2]
  i686.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[3], i686.startDelay)
  i686.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[4], i686.startLifetime)
  i686.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[5], i686.startSpeed)
  i686.startSize3D = !!i687[6]
  i686.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[7], i686.startSizeX)
  i686.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[8], i686.startSizeY)
  i686.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[9], i686.startSizeZ)
  i686.startRotation3D = !!i687[10]
  i686.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[11], i686.startRotationX)
  i686.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[12], i686.startRotationY)
  i686.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[13], i686.startRotationZ)
  i686.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i687[14], i686.startColor)
  i686.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[15], i686.gravityModifier)
  i686.simulationSpace = i687[16]
  request.r(i687[17], i687[18], 0, i686, 'customSimulationSpace')
  i686.simulationSpeed = i687[19]
  i686.useUnscaledTime = !!i687[20]
  i686.scalingMode = i687[21]
  i686.playOnAwake = !!i687[22]
  i686.maxParticles = i687[23]
  i686.emitterVelocityMode = i687[24]
  i686.stopAction = i687[25]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i688 = root || new pc.MinMaxCurve()
  var i689 = data
  i688.mode = i689[0]
  i688.curveMin = new pc.AnimationCurve( { keys_flow: i689[1] } )
  i688.curveMax = new pc.AnimationCurve( { keys_flow: i689[2] } )
  i688.curveMultiplier = i689[3]
  i688.constantMin = i689[4]
  i688.constantMax = i689[5]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i690 = root || new pc.MinMaxGradient()
  var i691 = data
  i690.mode = i691[0]
  i690.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i691[1], i690.gradientMin)
  i690.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i691[2], i690.gradientMax)
  i690.colorMin = new pc.Color(i691[3], i691[4], i691[5], i691[6])
  i690.colorMax = new pc.Color(i691[7], i691[8], i691[9], i691[10])
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i693 = data
  i692.mode = i693[0]
  var i695 = i693[1]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i695[i + 0]) );
  }
  i692.colorKeys = i694
  var i697 = i693[2]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i697[i + 0]) );
  }
  i692.alphaKeys = i696
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i698 = root || new pc.ParticleSystemColorBySpeed()
  var i699 = data
  i698.enabled = !!i699[0]
  i698.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i699[1], i698.color)
  i698.range = new pc.Vec2( i699[2], i699[3] )
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i703 = data
  i702.color = new pc.Color(i703[0], i703[1], i703[2], i703[3])
  i702.time = i703[4]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i707 = data
  i706.alpha = i707[0]
  i706.time = i707[1]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i708 = root || new pc.ParticleSystemColorOverLifetime()
  var i709 = data
  i708.enabled = !!i709[0]
  i708.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i709[1], i708.color)
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i710 = root || new pc.ParticleSystemEmitter()
  var i711 = data
  i710.enabled = !!i711[0]
  i710.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[1], i710.rateOverTime)
  i710.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[2], i710.rateOverDistance)
  var i713 = i711[3]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i713[i + 0]) );
  }
  i710.bursts = i712
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i716 = root || new pc.ParticleSystemBurst()
  var i717 = data
  i716.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[0], i716.count)
  i716.cycleCount = i717[1]
  i716.minCount = i717[2]
  i716.maxCount = i717[3]
  i716.repeatInterval = i717[4]
  i716.time = i717[5]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i718 = root || new pc.ParticleSystemRotationBySpeed()
  var i719 = data
  i718.enabled = !!i719[0]
  i718.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[1], i718.x)
  i718.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[2], i718.y)
  i718.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[3], i718.z)
  i718.separateAxes = !!i719[4]
  i718.range = new pc.Vec2( i719[5], i719[6] )
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i720 = root || new pc.ParticleSystemRotationOverLifetime()
  var i721 = data
  i720.enabled = !!i721[0]
  i720.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[1], i720.x)
  i720.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[2], i720.y)
  i720.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[3], i720.z)
  i720.separateAxes = !!i721[4]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i722 = root || new pc.ParticleSystemShape()
  var i723 = data
  i722.enabled = !!i723[0]
  i722.shapeType = i723[1]
  i722.randomDirectionAmount = i723[2]
  i722.sphericalDirectionAmount = i723[3]
  i722.randomPositionAmount = i723[4]
  i722.alignToDirection = !!i723[5]
  i722.radius = i723[6]
  i722.radiusMode = i723[7]
  i722.radiusSpread = i723[8]
  i722.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[9], i722.radiusSpeed)
  i722.radiusThickness = i723[10]
  i722.angle = i723[11]
  i722.length = i723[12]
  i722.boxThickness = new pc.Vec3( i723[13], i723[14], i723[15] )
  i722.meshShapeType = i723[16]
  request.r(i723[17], i723[18], 0, i722, 'mesh')
  request.r(i723[19], i723[20], 0, i722, 'meshRenderer')
  request.r(i723[21], i723[22], 0, i722, 'skinnedMeshRenderer')
  i722.useMeshMaterialIndex = !!i723[23]
  i722.meshMaterialIndex = i723[24]
  i722.useMeshColors = !!i723[25]
  i722.normalOffset = i723[26]
  i722.arc = i723[27]
  i722.arcMode = i723[28]
  i722.arcSpread = i723[29]
  i722.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[30], i722.arcSpeed)
  i722.donutRadius = i723[31]
  i722.position = new pc.Vec3( i723[32], i723[33], i723[34] )
  i722.rotation = new pc.Vec3( i723[35], i723[36], i723[37] )
  i722.scale = new pc.Vec3( i723[38], i723[39], i723[40] )
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i724 = root || new pc.ParticleSystemSizeBySpeed()
  var i725 = data
  i724.enabled = !!i725[0]
  i724.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[1], i724.x)
  i724.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[2], i724.y)
  i724.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[3], i724.z)
  i724.separateAxes = !!i725[4]
  i724.range = new pc.Vec2( i725[5], i725[6] )
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i726 = root || new pc.ParticleSystemSizeOverLifetime()
  var i727 = data
  i726.enabled = !!i727[0]
  i726.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[1], i726.x)
  i726.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[2], i726.y)
  i726.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[3], i726.z)
  i726.separateAxes = !!i727[4]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i728 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i729 = data
  i728.enabled = !!i729[0]
  i728.mode = i729[1]
  i728.animation = i729[2]
  i728.numTilesX = i729[3]
  i728.numTilesY = i729[4]
  i728.useRandomRow = !!i729[5]
  i728.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[6], i728.frameOverTime)
  i728.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[7], i728.startFrame)
  i728.cycleCount = i729[8]
  i728.rowIndex = i729[9]
  i728.flipU = i729[10]
  i728.flipV = i729[11]
  i728.spriteCount = i729[12]
  var i731 = i729[13]
  var i730 = []
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 2, i730, '')
  }
  i728.sprites = i730
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i734 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i735 = data
  i734.enabled = !!i735[0]
  i734.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[1], i734.x)
  i734.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[2], i734.y)
  i734.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[3], i734.z)
  i734.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[4], i734.radial)
  i734.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[5], i734.speedModifier)
  i734.space = i735[6]
  i734.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[7], i734.orbitalX)
  i734.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[8], i734.orbitalY)
  i734.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[9], i734.orbitalZ)
  i734.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[10], i734.orbitalOffsetX)
  i734.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[11], i734.orbitalOffsetY)
  i734.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[12], i734.orbitalOffsetZ)
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i736 = root || new pc.ParticleSystemNoise()
  var i737 = data
  i736.enabled = !!i737[0]
  i736.separateAxes = !!i737[1]
  i736.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[2], i736.strengthX)
  i736.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[3], i736.strengthY)
  i736.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[4], i736.strengthZ)
  i736.frequency = i737[5]
  i736.damping = !!i737[6]
  i736.octaveCount = i737[7]
  i736.octaveMultiplier = i737[8]
  i736.octaveScale = i737[9]
  i736.quality = i737[10]
  i736.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[11], i736.scrollSpeed)
  i736.scrollSpeedMultiplier = i737[12]
  i736.remapEnabled = !!i737[13]
  i736.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[14], i736.remapX)
  i736.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[15], i736.remapY)
  i736.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[16], i736.remapZ)
  i736.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[17], i736.positionAmount)
  i736.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[18], i736.rotationAmount)
  i736.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[19], i736.sizeAmount)
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i738 = root || new pc.ParticleSystemInheritVelocity()
  var i739 = data
  i738.enabled = !!i739[0]
  i738.mode = i739[1]
  i738.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[2], i738.curve)
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i740 = root || new pc.ParticleSystemForceOverLifetime()
  var i741 = data
  i740.enabled = !!i741[0]
  i740.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[1], i740.x)
  i740.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[2], i740.y)
  i740.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[3], i740.z)
  i740.space = i741[4]
  i740.randomized = !!i741[5]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i742 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i743 = data
  i742.enabled = !!i743[0]
  i742.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[1], i742.limit)
  i742.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[2], i742.limitX)
  i742.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[3], i742.limitY)
  i742.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[4], i742.limitZ)
  i742.dampen = i743[5]
  i742.separateAxes = !!i743[6]
  i742.space = i743[7]
  i742.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[8], i742.drag)
  i742.multiplyDragByParticleSize = !!i743[9]
  i742.multiplyDragByParticleVelocity = !!i743[10]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'mesh')
  i744.meshCount = i745[2]
  i744.activeVertexStreamsCount = i745[3]
  i744.alignment = i745[4]
  i744.renderMode = i745[5]
  i744.sortMode = i745[6]
  i744.lengthScale = i745[7]
  i744.velocityScale = i745[8]
  i744.cameraVelocityScale = i745[9]
  i744.normalDirection = i745[10]
  i744.sortingFudge = i745[11]
  i744.minParticleSize = i745[12]
  i744.maxParticleSize = i745[13]
  i744.pivot = new pc.Vec3( i745[14], i745[15], i745[16] )
  request.r(i745[17], i745[18], 0, i744, 'trailMaterial')
  i744.applyActiveColorSpace = !!i745[19]
  i744.enabled = !!i745[20]
  request.r(i745[21], i745[22], 0, i744, 'sharedMaterial')
  var i747 = i745[23]
  var i746 = []
  for(var i = 0; i < i747.length; i += 2) {
  request.r(i747[i + 0], i747[i + 1], 2, i746, '')
  }
  i744.sharedMaterials = i746
  i744.receiveShadows = !!i745[24]
  i744.shadowCastingMode = i745[25]
  i744.sortingLayerID = i745[26]
  i744.sortingOrder = i745[27]
  i744.lightmapIndex = i745[28]
  i744.lightmapSceneIndex = i745[29]
  i744.lightmapScaleOffset = new pc.Vec4( i745[30], i745[31], i745[32], i745[33] )
  i744.lightProbeUsage = i745[34]
  i744.reflectionProbeUsage = i745[35]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i751 = data
  i750.name = i751[0]
  i750.tagId = i751[1]
  i750.enabled = !!i751[2]
  i750.isStatic = !!i751[3]
  i750.layer = i751[4]
  return i750
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i752 = root || request.c( 'DestroyObj' )
  var i753 = data
  i752.destroyDelay = i753[0]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i755 = data
  i754.name = i755[0]
  i754.atlasId = i755[1]
  i754.mipmapCount = i755[2]
  i754.hdr = !!i755[3]
  i754.size = i755[4]
  i754.anisoLevel = i755[5]
  i754.filterMode = i755[6]
  var i757 = i755[7]
  var i756 = []
  for(var i = 0; i < i757.length; i += 4) {
    i756.push( UnityEngine.Rect.MinMaxRect(i757[i + 0], i757[i + 1], i757[i + 2], i757[i + 3]) );
  }
  i754.rects = i756
  i754.wrapU = i755[8]
  i754.wrapV = i755[9]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i761 = data
  i760.name = i761[0]
  i760.index = i761[1]
  i760.startup = !!i761[2]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i763 = data
  i762.aspect = i763[0]
  i762.orthographic = !!i763[1]
  i762.orthographicSize = i763[2]
  i762.backgroundColor = new pc.Color(i763[3], i763[4], i763[5], i763[6])
  i762.nearClipPlane = i763[7]
  i762.farClipPlane = i763[8]
  i762.fieldOfView = i763[9]
  i762.depth = i763[10]
  i762.clearFlags = i763[11]
  i762.cullingMask = i763[12]
  i762.rect = i763[13]
  request.r(i763[14], i763[15], 0, i762, 'targetTexture')
  i762.usePhysicalProperties = !!i763[16]
  i762.focalLength = i763[17]
  i762.sensorSize = new pc.Vec2( i763[18], i763[19] )
  i762.lensShift = new pc.Vec2( i763[20], i763[21] )
  i762.gateFit = i763[22]
  i762.commandBufferCount = i763[23]
  i762.cameraType = i763[24]
  i762.enabled = !!i763[25]
  return i762
}

Deserializers["CameraController"] = function (request, data, root) {
  var i764 = root || request.c( 'CameraController' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'cam')
  i764.defaultPosition = new pc.Vec3( i765[2], i765[3], i765[4] )
  i764.defaultSize = i765[5]
  i764.defaultFOV = i765[6]
  i764.defaultDuration = i765[7]
  i764.defaultEase = i765[8]
  return i764
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i766 = root || request.c( 'MusicSource' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'source')
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, 'clip')
  request.r(i769[2], i769[3], 0, i768, 'outputAudioMixerGroup')
  i768.playOnAwake = !!i769[4]
  i768.loop = !!i769[5]
  i768.time = i769[6]
  i768.volume = i769[7]
  i768.pitch = i769[8]
  i768.enabled = !!i769[9]
  return i768
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i770 = root || request.c( 'UI_Manager' )
  var i771 = data
  i770.levelCompleted = !!i771[0]
  i770.isPauseActive = !!i771[1]
  i770.loadIndex = i771[2]
  request.r(i771[3], i771[4], 0, i770, 'removeAdsButton')
  request.r(i771[5], i771[6], 0, i770, 'pauseButton')
  request.r(i771[7], i771[8], 0, i770, 'Fade_Img')
  request.r(i771[9], i771[10], 0, i770, 'TopBarAnim')
  request.r(i771[11], i771[12], 0, i770, 'MainPanel')
  request.r(i771[13], i771[14], 0, i770, 'PausePanel')
  request.r(i771[15], i771[16], 0, i770, 'PausePopUp')
  request.r(i771[17], i771[18], 0, i770, 'PauseCanvasGroup')
  request.r(i771[19], i771[20], 0, i770, 'RateUsPanel')
  request.r(i771[21], i771[22], 0, i770, 'RateUsPopUp')
  request.r(i771[23], i771[24], 0, i770, 'RemoveAdsPanel')
  request.r(i771[25], i771[26], 0, i770, 'RemoveAdsPopUp')
  request.r(i771[27], i771[28], 0, i770, 'RemoveAdsCanvasGroup')
  var i773 = i771[29]
  var i772 = []
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 2, i772, '')
  }
  i770.RemoveAdsAnims = i772
  request.r(i771[30], i771[31], 0, i770, 'CompletePanel')
  request.r(i771[32], i771[33], 0, i770, 'LevelIcon')
  request.r(i771[34], i771[35], 0, i770, 'CompleteParticles')
  request.r(i771[36], i771[37], 0, i770, 'progressBar')
  request.r(i771[38], i771[39], 0, i770, 'progressText')
  request.r(i771[40], i771[41], 0, i770, 'toolIcon1')
  request.r(i771[42], i771[43], 0, i770, 'toolIcon2')
  request.r(i771[44], i771[45], 0, i770, 'toolIcon3')
  request.r(i771[46], i771[47], 0, i770, 'target1')
  request.r(i771[48], i771[49], 0, i770, 'target2')
  i770.toolMoveDuration = i771[50]
  i770.currentIndex = i771[51]
  var i775 = i771[52]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 1, i774, '')
  }
  i770.allTools = i774
  request.r(i771[53], i771[54], 0, i770, 'clockProgress')
  request.r(i771[55], i771[56], 0, i770, 'clockProgressFill')
  request.r(i771[57], i771[58], 0, i770, 'clockAudio')
  i770.moveDistance = i771[59]
  i770.animationDuration = i771[60]
  i770.greyBgChildName = i771[61]
  i770.pushOffset = i771[62]
  return i770
}

Deserializers["GameManagerPlayable"] = function (request, data, root) {
  var i780 = root || request.c( 'GameManagerPlayable' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'DefaultMat')
  request.r(i781[2], i781[3], 0, i780, 'BG_Music')
  request.r(i781[4], i781[5], 0, i780, 'restoreEffectShader')
  request.r(i781[6], i781[7], 0, i780, 'stickerEffectShader')
  i780.isComplete = !!i781[8]
  i780.isPaused = !!i781[9]
  request.r(i781[10], i781[11], 0, i780, 'currentLevel')
  return i780
}

Deserializers["AudioController"] = function (request, data, root) {
  var i782 = root || request.c( 'AudioController' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'MainMixer')
  request.r(i783[2], i783[3], 0, i782, 'UiClick')
  request.r(i783[4], i783[5], 0, i782, 'UiClickSource')
  var i785 = i783[6]
  var i784 = []
  for(var i = 0; i < i785.length; i += 2) {
  request.r(i785[i + 0], i785[i + 1], 2, i784, '')
  }
  i782.SfxSources = i784
  var i787 = i783[7]
  var i786 = []
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 2, i786, '')
  }
  i782.AllClips = i786
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i793 = data
  i792.pivot = new pc.Vec2( i793[0], i793[1] )
  i792.anchorMin = new pc.Vec2( i793[2], i793[3] )
  i792.anchorMax = new pc.Vec2( i793[4], i793[5] )
  i792.sizeDelta = new pc.Vec2( i793[6], i793[7] )
  i792.anchoredPosition3D = new pc.Vec3( i793[8], i793[9], i793[10] )
  i792.rotation = new pc.Quat(i793[11], i793[12], i793[13], i793[14])
  i792.scale = new pc.Vec3( i793[15], i793[16], i793[17] )
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i795 = data
  i794.planeDistance = i795[0]
  i794.referencePixelsPerUnit = i795[1]
  i794.isFallbackOverlay = !!i795[2]
  i794.renderMode = i795[3]
  i794.renderOrder = i795[4]
  i794.sortingLayerName = i795[5]
  i794.sortingOrder = i795[6]
  i794.scaleFactor = i795[7]
  request.r(i795[8], i795[9], 0, i794, 'worldCamera')
  i794.overrideSorting = !!i795[10]
  i794.pixelPerfect = !!i795[11]
  i794.targetDisplay = i795[12]
  i794.overridePixelPerfect = !!i795[13]
  i794.enabled = !!i795[14]
  return i794
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i797 = data
  i796.m_UiScaleMode = i797[0]
  i796.m_ReferencePixelsPerUnit = i797[1]
  i796.m_ScaleFactor = i797[2]
  i796.m_ReferenceResolution = new pc.Vec2( i797[3], i797[4] )
  i796.m_ScreenMatchMode = i797[5]
  i796.m_MatchWidthOrHeight = i797[6]
  i796.m_PhysicalUnit = i797[7]
  i796.m_FallbackScreenDPI = i797[8]
  i796.m_DefaultSpriteDPI = i797[9]
  i796.m_DynamicPixelsPerUnit = i797[10]
  i796.m_PresetInfoIsWorld = !!i797[11]
  return i796
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i799 = data
  i798.m_IgnoreReversedGraphics = !!i799[0]
  i798.m_BlockingObjects = i799[1]
  i798.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i799[2] )
  return i798
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i800 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i801 = data
  i800.targetIsSelf = !!i801[0]
  request.r(i801[1], i801[2], 0, i800, 'targetGO')
  i800.tweenTargetIsTargetGO = !!i801[3]
  i800.delay = i801[4]
  i800.duration = i801[5]
  i800.easeType = i801[6]
  i800.easeCurve = new pc.AnimationCurve( { keys_flow: i801[7] } )
  i800.loopType = i801[8]
  i800.loops = i801[9]
  i800.id = i801[10]
  i800.isRelative = !!i801[11]
  i800.isFrom = !!i801[12]
  i800.isIndependentUpdate = !!i801[13]
  i800.autoKill = !!i801[14]
  i800.autoGenerate = !!i801[15]
  i800.isActive = !!i801[16]
  i800.isValid = !!i801[17]
  request.r(i801[18], i801[19], 0, i800, 'target')
  i800.animationType = i801[20]
  i800.targetType = i801[21]
  i800.forcedTargetType = i801[22]
  i800.autoPlay = !!i801[23]
  i800.useTargetAsV3 = !!i801[24]
  i800.endValueFloat = i801[25]
  i800.endValueV3 = new pc.Vec3( i801[26], i801[27], i801[28] )
  i800.endValueV2 = new pc.Vec2( i801[29], i801[30] )
  i800.endValueColor = new pc.Color(i801[31], i801[32], i801[33], i801[34])
  i800.endValueString = i801[35]
  i800.endValueRect = UnityEngine.Rect.MinMaxRect(i801[36], i801[37], i801[38], i801[39])
  request.r(i801[40], i801[41], 0, i800, 'endValueTransform')
  i800.optionalBool0 = !!i801[42]
  i800.optionalBool1 = !!i801[43]
  i800.optionalFloat0 = i801[44]
  i800.optionalInt0 = i801[45]
  i800.optionalRotationMode = i801[46]
  i800.optionalScrambleMode = i801[47]
  i800.optionalShakeRandomnessMode = i801[48]
  i800.optionalString = i801[49]
  i800.updateType = i801[50]
  i800.isSpeedBased = !!i801[51]
  i800.hasOnStart = !!i801[52]
  i800.hasOnPlay = !!i801[53]
  i800.hasOnUpdate = !!i801[54]
  i800.hasOnStepComplete = !!i801[55]
  i800.hasOnComplete = !!i801[56]
  i800.hasOnTweenCreated = !!i801[57]
  i800.hasOnRewind = !!i801[58]
  i800.onStart = request.d('UnityEngine.Events.UnityEvent', i801[59], i800.onStart)
  i800.onPlay = request.d('UnityEngine.Events.UnityEvent', i801[60], i800.onPlay)
  i800.onUpdate = request.d('UnityEngine.Events.UnityEvent', i801[61], i800.onUpdate)
  i800.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i801[62], i800.onStepComplete)
  i800.onComplete = request.d('UnityEngine.Events.UnityEvent', i801[63], i800.onComplete)
  i800.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i801[64], i800.onTweenCreated)
  i800.onRewind = request.d('UnityEngine.Events.UnityEvent', i801[65], i800.onRewind)
  return i800
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i803 = data
  i802.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i803[0], i802.m_PersistentCalls)
  return i802
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i805 = data
  var i807 = i805[0]
  var i806 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i807.length; i += 1) {
    i806.add(request.d('UnityEngine.Events.PersistentCall', i807[i + 0]));
  }
  i804.m_Calls = i806
  return i804
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'm_Target')
  i810.m_TargetAssemblyTypeName = i811[2]
  i810.m_MethodName = i811[3]
  i810.m_Mode = i811[4]
  i810.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i811[5], i810.m_Arguments)
  i810.m_CallState = i811[6]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i813 = data
  i812.cullTransparentMesh = !!i813[0]
  return i812
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.UI.Image' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'm_Sprite')
  i814.m_Type = i815[2]
  i814.m_PreserveAspect = !!i815[3]
  i814.m_FillCenter = !!i815[4]
  i814.m_FillMethod = i815[5]
  i814.m_FillAmount = i815[6]
  i814.m_FillClockwise = !!i815[7]
  i814.m_FillOrigin = i815[8]
  i814.m_UseSpriteMesh = !!i815[9]
  i814.m_PixelsPerUnitMultiplier = i815[10]
  request.r(i815[11], i815[12], 0, i814, 'm_Material')
  i814.m_Maskable = !!i815[13]
  i814.m_Color = new pc.Color(i815[14], i815[15], i815[16], i815[17])
  i814.m_RaycastTarget = !!i815[18]
  i814.m_RaycastPadding = new pc.Vec4( i815[19], i815[20], i815[21], i815[22] )
  return i814
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.UI.Text' )
  var i817 = data
  i816.m_FontData = request.d('UnityEngine.UI.FontData', i817[0], i816.m_FontData)
  i816.m_Text = i817[1]
  request.r(i817[2], i817[3], 0, i816, 'm_Material')
  i816.m_Maskable = !!i817[4]
  i816.m_Color = new pc.Color(i817[5], i817[6], i817[7], i817[8])
  i816.m_RaycastTarget = !!i817[9]
  i816.m_RaycastPadding = new pc.Vec4( i817[10], i817[11], i817[12], i817[13] )
  return i816
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.UI.FontData' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'm_Font')
  i818.m_FontSize = i819[2]
  i818.m_FontStyle = i819[3]
  i818.m_BestFit = !!i819[4]
  i818.m_MinSize = i819[5]
  i818.m_MaxSize = i819[6]
  i818.m_Alignment = i819[7]
  i818.m_AlignByGeometry = !!i819[8]
  i818.m_RichText = !!i819[9]
  i818.m_HorizontalOverflow = i819[10]
  i818.m_VerticalOverflow = i819[11]
  i818.m_LineSpacing = i819[12]
  return i818
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.UI.Button' )
  var i821 = data
  i820.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i821[0], i820.m_OnClick)
  i820.m_Navigation = request.d('UnityEngine.UI.Navigation', i821[1], i820.m_Navigation)
  i820.m_Transition = i821[2]
  i820.m_Colors = request.d('UnityEngine.UI.ColorBlock', i821[3], i820.m_Colors)
  i820.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i821[4], i820.m_SpriteState)
  i820.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i821[5], i820.m_AnimationTriggers)
  i820.m_Interactable = !!i821[6]
  request.r(i821[7], i821[8], 0, i820, 'm_TargetGraphic')
  return i820
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i823 = data
  i822.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i823[0], i822.m_PersistentCalls)
  return i822
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'm_ObjectArgument')
  i824.m_ObjectArgumentAssemblyTypeName = i825[2]
  i824.m_IntArgument = i825[3]
  i824.m_FloatArgument = i825[4]
  i824.m_StringArgument = i825[5]
  i824.m_BoolArgument = !!i825[6]
  return i824
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i827 = data
  i826.m_Mode = i827[0]
  i826.m_WrapAround = !!i827[1]
  request.r(i827[2], i827[3], 0, i826, 'm_SelectOnUp')
  request.r(i827[4], i827[5], 0, i826, 'm_SelectOnDown')
  request.r(i827[6], i827[7], 0, i826, 'm_SelectOnLeft')
  request.r(i827[8], i827[9], 0, i826, 'm_SelectOnRight')
  return i826
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i829 = data
  i828.m_NormalColor = new pc.Color(i829[0], i829[1], i829[2], i829[3])
  i828.m_HighlightedColor = new pc.Color(i829[4], i829[5], i829[6], i829[7])
  i828.m_PressedColor = new pc.Color(i829[8], i829[9], i829[10], i829[11])
  i828.m_SelectedColor = new pc.Color(i829[12], i829[13], i829[14], i829[15])
  i828.m_DisabledColor = new pc.Color(i829[16], i829[17], i829[18], i829[19])
  i828.m_ColorMultiplier = i829[20]
  i828.m_FadeDuration = i829[21]
  return i828
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'm_HighlightedSprite')
  request.r(i831[2], i831[3], 0, i830, 'm_PressedSprite')
  request.r(i831[4], i831[5], 0, i830, 'm_SelectedSprite')
  request.r(i831[6], i831[7], 0, i830, 'm_DisabledSprite')
  return i830
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i833 = data
  i832.m_NormalTrigger = i833[0]
  i832.m_HighlightedTrigger = i833[1]
  i832.m_PressedTrigger = i833[2]
  i832.m_SelectedTrigger = i833[3]
  i832.m_DisabledTrigger = i833[4]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'animatorController')
  request.r(i835[2], i835[3], 0, i834, 'avatar')
  i834.updateMode = i835[4]
  i834.hasTransformHierarchy = !!i835[5]
  i834.applyRootMotion = !!i835[6]
  var i837 = i835[7]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i834.humanBones = i836
  i834.enabled = !!i835[8]
  return i834
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i840 = root || request.c( 'PlayableHudRuntime' )
  var i841 = data
  return i840
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'm_FirstSelected')
  i842.m_sendNavigationEvents = !!i843[2]
  i842.m_DragThreshold = i843[3]
  return i842
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i845 = data
  i844.m_HorizontalAxis = i845[0]
  i844.m_VerticalAxis = i845[1]
  i844.m_SubmitButton = i845[2]
  i844.m_CancelButton = i845[3]
  i844.m_InputActionsPerSecond = i845[4]
  i844.m_RepeatDelay = i845[5]
  i844.m_ForceModuleActive = !!i845[6]
  i844.m_SendPointerHoverToParent = !!i845[7]
  return i844
}

Deserializers["Level2_Shoe_Playable"] = function (request, data, root) {
  var i846 = root || request.c( 'Level2_Shoe_Playable' )
  var i847 = data
  i846.MainZoom = request.d('ZoomPos', i847[0], i846.MainZoom)
  i846.ZoomStep1 = request.d('ZoomPos', i847[1], i846.ZoomStep1)
  request.r(i847[2], i847[3], 0, i846, 'ToolStep1')
  request.r(i847[4], i847[5], 0, i846, 'ToolStep1CameraFollow')
  request.r(i847[6], i847[7], 0, i846, 'Step1Col')
  var i849 = i847[8]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i846.LayersToFade_1 = i848
  request.r(i847[9], i847[10], 0, i846, 'LayersToFade_Updated')
  request.r(i847[11], i847[12], 0, i846, 'MudLayer_1')
  i846.ZoomStep2 = request.d('ZoomPos', i847[13], i846.ZoomStep2)
  request.r(i847[14], i847[15], 0, i846, 'ToolStep2')
  request.r(i847[16], i847[17], 0, i846, 'ToolStep2CameraFollow')
  request.r(i847[18], i847[19], 0, i846, 'Step2Col')
  var i851 = i847[20]
  var i850 = []
  for(var i = 0; i < i851.length; i += 2) {
  request.r(i851[i + 0], i851[i + 1], 2, i850, '')
  }
  i846.LayersToFade_2 = i850
  request.r(i847[21], i847[22], 0, i846, 'WetMud_2')
  i846.ZoomStep3 = request.d('ZoomPos', i847[23], i846.ZoomStep3)
  request.r(i847[24], i847[25], 0, i846, 'ToolStep3')
  request.r(i847[26], i847[27], 0, i846, 'ToolStep3CameraFollow')
  var i853 = i847[28]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 2, i852, '')
  }
  i846.LayersToFade_3 = i852
  request.r(i847[29], i847[30], 0, i846, 'Foam_3')
  i846.ZoomStep4 = request.d('ZoomPos', i847[31], i846.ZoomStep4)
  request.r(i847[32], i847[33], 0, i846, 'ToolStep4')
  request.r(i847[34], i847[35], 0, i846, 'ToolStep4CameraFollow')
  request.r(i847[36], i847[37], 0, i846, 'Step4Col')
  var i855 = i847[38]
  var i854 = []
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 2, i854, '')
  }
  i846.LayersToFade_4 = i854
  request.r(i847[39], i847[40], 0, i846, 'dry')
  request.r(i847[41], i847[42], 0, i846, 'mixeE')
  request.r(i847[43], i847[44], 0, i846, 'mix')
  request.r(i847[45], i847[46], 0, i846, 'Mix_4')
  i846.ZoomStep5 = request.d('ZoomPos', i847[47], i846.ZoomStep5)
  request.r(i847[48], i847[49], 0, i846, 'ToolStep5')
  request.r(i847[50], i847[51], 0, i846, 'ToolStep5CameraFollow')
  var i857 = i847[52]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i846.LayersToFade_5 = i856
  request.r(i847[53], i847[54], 0, i846, 'WetLayer')
  request.r(i847[55], i847[56], 0, i846, 'DryLayer')
  i846.levelName = i847[57]
  i846.levelReward = i847[58]
  request.r(i847[59], i847[60], 0, i846, 'LevelIcon')
  request.r(i847[61], i847[62], 0, i846, 'Level_BG')
  var i859 = i847[63]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 1, i858, '')
  }
  i846.ToolIcons = i858
  var i861 = i847[64]
  var i860 = []
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 2, i860, '')
  }
  i846.AllDrags = i860
  var i863 = i847[65]
  var i862 = []
  for(var i = 0; i < i863.length; i += 2) {
  request.r(i863[i + 0], i863[i + 1], 2, i862, '')
  }
  i846.AllSources = i862
  var i865 = i847[66]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 2, i864, '')
  }
  i846.AllScratches = i864
  i846.stepsDone = i847[67]
  i846.levelNo = i847[68]
  i846.partNo = i847[69]
  return i846
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i866 = root || request.c( 'ZoomPos' )
  var i867 = data
  i866.CameraPos = new pc.Vec3( i867[0], i867[1], i867[2] )
  i866.CameraFOV = i867[3]
  return i866
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i874 = root || request.c( 'PlayableCTA' )
  var i875 = data
  i874.trigger = i875[0]
  i874.afterSeconds = i875[1]
  i874.afterTaps = i875[2]
  request.r(i875[3], i875[4], 0, i874, 'scratchProgress')
  i874.scratchIndex = i875[5]
  i874.progressThreshold = i875[6]
  request.r(i875[7], i875[8], 0, i874, 'watchedTool')
  i874.blockInputOnFire = !!i875[9]
  i874.refireOnEveryTap = !!i875[10]
  i874.refireDelay = i875[11]
  i874.showEndCard = !!i875[12]
  request.r(i875[13], i875[14], 0, i874, 'endCard')
  request.r(i875[15], i875[16], 0, i874, 'endParticles')
  i874.playEndParticlesOnProgressTrigger = !!i875[17]
  request.r(i875[18], i875[19], 0, i874, 'stepCompleteParticles')
  i874.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i875[20], i874.onCtaFired)
  i874.logWhenFired = !!i875[21]
  return i874
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i876 = root || request.c( 'PlayableFadeCoverSettings' )
  var i877 = data
  i876.revealDelay = i877[0]
  i876.revealDuration = i877[1]
  return i876
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i878 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'MainCamera')
  i878.RenderType = i879[2]
  request.r(i879[3], i879[4], 0, i878, 'ScratchSurfaceSprite')
  i878.ScratchSurfaceSpriteHasAlpha = !!i879[5]
  i878.MaskProgressCutOffValue = i879[6]
  request.r(i879[7], i879[8], 0, i878, 'EraseTexture')
  i878.EraseTextureScale = new pc.Vec2( i879[9], i879[10] )
  i878.InputEnabled = !!i879[11]
  request.r(i879[12], i879[13], 0, i878, 'Card')
  i878.Mode = i879[14]
  request.r(i879[15], i879[16], 0, i878, 'Progress')
  request.r(i879[17], i879[18], 0, i878, 'MeshCard')
  request.r(i879[19], i879[20], 0, i878, 'SpriteCard')
  request.r(i879[21], i879[22], 0, i878, 'ImageCard')
  request.r(i879[23], i879[24], 0, i878, 'MaskShader')
  request.r(i879[25], i879[26], 0, i878, 'BrushShader')
  request.r(i879[27], i879[28], 0, i878, 'MaskProgressShader')
  request.r(i879[29], i879[30], 0, i878, 'MaskProgressCutOffShader')
  return i878
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i880 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'MainCamera')
  request.r(i881[2], i881[3], 0, i880, 'Surface')
  i880.RenderTextureQuality = i881[4]
  request.r(i881[5], i881[6], 0, i880, 'Eraser')
  request.r(i881[7], i881[8], 0, i880, 'Progress')
  request.r(i881[9], i881[10], 0, i880, 'ScratchSurface')
  request.r(i881[11], i881[12], 0, i880, 'RenderTexture')
  i880.BrushScale = new pc.Vec2( i881[13], i881[14] )
  request.r(i881[15], i881[16], 0, i880, 'ToolTip')
  i880.InputEnabled = !!i881[17]
  i880.IsScratching = !!i881[18]
  i880.useChangingScale = !!i881[19]
  i880.useGivenBrushScale = !!i881[20]
  i880.canSpreadMask = !!i881[21]
  i880.shouldPaintHoles = !!i881[22]
  i880.canRotateTip = !!i881[23]
  i880._mode = i881[24]
  return i880
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i882 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'Card')
  i882.currentProgress = i883[2]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i885 = data
  i884.color = new pc.Color(i885[0], i885[1], i885[2], i885[3])
  request.r(i885[4], i885[5], 0, i884, 'sprite')
  i884.flipX = !!i885[6]
  i884.flipY = !!i885[7]
  i884.drawMode = i885[8]
  i884.size = new pc.Vec2( i885[9], i885[10] )
  i884.tileMode = i885[11]
  i884.adaptiveModeThreshold = i885[12]
  i884.maskInteraction = i885[13]
  i884.spriteSortPoint = i885[14]
  i884.enabled = !!i885[15]
  request.r(i885[16], i885[17], 0, i884, 'sharedMaterial')
  var i887 = i885[18]
  var i886 = []
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 2, i886, '')
  }
  i884.sharedMaterials = i886
  i884.receiveShadows = !!i885[19]
  i884.shadowCastingMode = i885[20]
  i884.sortingLayerID = i885[21]
  i884.sortingOrder = i885[22]
  i884.lightmapIndex = i885[23]
  i884.lightmapSceneIndex = i885[24]
  i884.lightmapScaleOffset = new pc.Vec4( i885[25], i885[26], i885[27], i885[28] )
  i884.lightProbeUsage = i885[29]
  i884.reflectionProbeUsage = i885[30]
  return i884
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i888 = root || request.c( 'PlayParticlesOnCollision' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, 'Target')
  request.r(i889[2], i889[3], 0, i888, 'ParticlePrefab')
  i888.destroyIt = !!i889[4]
  i888.stayAtPlace = !!i889[5]
  i888.disableOnCollision = !!i889[6]
  i888.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i889[7], i888.OnCollisionEvent)
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i891 = data
  i890.radius = i891[0]
  i890.enabled = !!i891[1]
  i890.isTrigger = !!i891[2]
  i890.usedByEffector = !!i891[3]
  i890.density = i891[4]
  i890.offset = new pc.Vec2( i891[5], i891[6] )
  request.r(i891[7], i891[8], 0, i890, 'material')
  return i890
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i892 = root || request.c( 'PlaySfxOnCollision' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'Tip')
  i892.Mode = i893[2]
  request.r(i893[3], i893[4], 0, i892, 'DragInput')
  request.r(i893[5], i893[6], 0, i892, 'Source')
  i892.startVol = i893[7]
  i892.targetVol = i893[8]
  i892.duration = i893[9]
  request.r(i893[10], i893[11], 0, i892, 'Particles')
  i892.isDone = !!i893[12]
  i892.isInArea = !!i893[13]
  i892.isPlaying = !!i893[14]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i895 = data
  i894.usedByComposite = !!i895[0]
  i894.autoTiling = !!i895[1]
  var i897 = i895[2]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
  var i899 = i897[i + 0]
  var i898 = []
  for(var i = 0; i < i899.length; i += 2) {
    i898.push( new pc.Vec2( i899[i + 0], i899[i + 1] ) );
  }
    i896.push( i898 );
  }
  i894.points = i896
  i894.enabled = !!i895[3]
  i894.isTrigger = !!i895[4]
  i894.usedByEffector = !!i895[5]
  i894.density = i895[6]
  i894.offset = new pc.Vec2( i895[7], i895[8] )
  request.r(i895[9], i895[10], 0, i894, 'material')
  return i894
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i906 = root || request.c( 'BasicDrag' )
  var i907 = data
  i906.canDrag = !!i907[0]
  i906.dragByDelta = !!i907[1]
  i906.isDragging = !!i907[2]
  i906.moveWithPointer = !!i907[3]
  i906.canReturn = !!i907[4]
  i906.jumpOnReturn = !!i907[5]
  i906.returnTime = i907[6]
  i906.Tool_Offset = new pc.Vec3( i907[7], i907[8], i907[9] )
  i906.canScaleIncrease = !!i907[10]
  i906.Self_ScaleNew = new pc.Vec3( i907[11], i907[12], i907[13] )
  i906.canRotateOnPick = !!i907[14]
  i906.startRot = new pc.Vec3( i907[15], i907[16], i907[17] )
  i906.newRot = new pc.Vec3( i907[18], i907[19], i907[20] )
  var i909 = i907[21]
  var i908 = []
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 2, i908, '')
  }
  i906.childSprite = i908
  request.r(i907[22], i907[23], 0, i906, 'ToolSelectClip')
  request.r(i907[24], i907[25], 0, i906, 'ToolLoopClip')
  request.r(i907[26], i907[27], 0, i906, 'thisParticles')
  i906.onDragparticle = !!i907[28]
  request.r(i907[29], i907[30], 0, i906, 'dragParticles')
  request.r(i907[31], i907[32], 0, i906, 'anim')
  i906.startPos = new pc.Vec3( i907[33], i907[34], i907[35] )
  i906.startScale = new pc.Vec3( i907[36], i907[37], i907[38] )
  i906.Vibration = !!i907[39]
  i906.isPlacedCannotMove = !!i907[40]
  i906.isObjectMovingWhileDragging = !!i907[41]
  i906.OnMouseDownEvent = request.d('System.Action', i907[42], i906.OnMouseDownEvent)
  i906.OnMouseUpEvent = request.d('System.Action', i907[43], i906.OnMouseUpEvent)
  i906.ProgStartEvent = request.d('System.Action', i907[44], i906.ProgStartEvent)
  i906.ProgEndEvent = request.d('System.Action', i907[45], i906.ProgEndEvent)
  i906.canCallMouseUpWhenGamePaused = !!i907[46]
  i906.ClampX_L = i907[47]
  i906.ClampX_H = i907[48]
  i906.ClampY_L = i907[49]
  i906.ClampY_H = i907[50]
  i906.startOrder = i907[51]
  i906.dontResetItIsInCollider = !!i907[52]
  request.r(i907[53], i907[54], 0, i906, 'thisCollider')
  request.r(i907[55], i907[56], 0, i906, 'thisSR')
  i906.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i907[57], i906.OnMouseDownEventIndependentFromCanDrag)
  return i906
}

Deserializers["System.Action"] = function (request, data, root) {
  var i910 = root || request.c( 'System.Action' )
  var i911 = data
  return i910
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i912 = root || request.c( 'BD_Progress' )
  var i913 = data
  var i915 = i913[0]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('ScratchData', i915[i + 0]) );
  }
  i912.AllScratches = i914
  i912.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i913[1], i912.OnScratchComplete)
  i912.isProgDone = !!i913[2]
  i912.canCallComplete = !!i913[3]
  i912.CollectiveAppear = !!i913[4]
  i912.tipControl = !!i913[5]
  i912.progressControl = !!i913[6]
  request.r(i913[7], i913[8], 0, i912, 'thisDrag')
  i912.CompleteEvent = request.d('System.Action', i913[9], i912.CompleteEvent)
  i912.SubCompleteEvent = request.d('System.Action', i913[10], i912.SubCompleteEvent)
  return i912
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i918 = root || request.c( 'ScratchData' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'ScratchManager')
  i918.scratchLimit = i919[2]
  i918.isComplete = !!i919[3]
  return i918
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i920 = root || request.c( 'BD_Clamp' )
  var i921 = data
  i920.ClampX_L = i921[0]
  i920.ClampX_H = i921[1]
  i920.ClampY_L = i921[2]
  i920.ClampY_H = i921[3]
  return i920
}

Deserializers["BD_ToolRotate"] = function (request, data, root) {
  var i922 = root || request.c( 'BD_ToolRotate' )
  var i923 = data
  i922.startDelay = i923[0]
  request.r(i923[1], i923[2], 0, i922, 'Tool')
  request.r(i923[3], i923[4], 0, i922, 'Clamp')
  request.r(i923[5], i923[6], 0, i922, 'Pivot')
  i922.MinAngle = new pc.Vec3( i923[7], i923[8], i923[9] )
  i922.MaxAngle = new pc.Vec3( i923[10], i923[11], i923[12] )
  i922.rotationSpeed = i923[13]
  return i922
}

Deserializers["BD_CameraFollow"] = function (request, data, root) {
  var i924 = root || request.c( 'BD_CameraFollow' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'Tool')
  request.r(i925[2], i925[3], 0, i924, 'Pivot')
  i924.FOV = i925[4]
  i924.Y_L = i925[5]
  i924.Y_H = i925[6]
  i924.X_L = i925[7]
  i924.X_R = i925[8]
  i924.startDelay = i925[9]
  i924.duration = i925[10]
  return i924
}

Deserializers["BD_Audio"] = function (request, data, root) {
  var i926 = root || request.c( 'BD_Audio' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'BD')
  request.r(i927[2], i927[3], 0, i926, 'Source')
  i926.shouldRestart = !!i927[4]
  i926.startVol = i927[5]
  i926.targetVol = i927[6]
  i926.duration = i927[7]
  i926.startDelay = i927[8]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i929 = data
  i928.usedByComposite = !!i929[0]
  i928.autoTiling = !!i929[1]
  i928.size = new pc.Vec2( i929[2], i929[3] )
  i928.edgeRadius = i929[4]
  i928.enabled = !!i929[5]
  i928.isTrigger = !!i929[6]
  i928.usedByEffector = !!i929[7]
  i928.density = i929[8]
  i928.offset = new pc.Vec2( i929[9], i929[10] )
  request.r(i929[11], i929[12], 0, i928, 'material')
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i931 = data
  i930.bodyType = i931[0]
  request.r(i931[1], i931[2], 0, i930, 'material')
  i930.simulated = !!i931[3]
  i930.useAutoMass = !!i931[4]
  i930.mass = i931[5]
  i930.drag = i931[6]
  i930.angularDrag = i931[7]
  i930.gravityScale = i931[8]
  i930.collisionDetectionMode = i931[9]
  i930.sleepMode = i931[10]
  i930.constraints = i931[11]
  return i930
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i933 = data
  request.r(i933[0], i933[1], 0, i932, 'm_RootBone')
  var i935 = i933[2]
  var i934 = []
  for(var i = 0; i < i935.length; i += 2) {
  request.r(i935[i + 0], i935[i + 1], 2, i934, '')
  }
  i932.m_BoneTransforms = i934
  i932.m_AlwaysUpdate = !!i933[3]
  i932.m_AutoRebind = !!i933[4]
  return i932
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i936 = root || request.c( 'BD_SpriteChange' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'BD')
  request.r(i937[2], i937[3], 0, i936, 'SR')
  request.r(i937[4], i937[5], 0, i936, 'Default')
  request.r(i937[6], i937[7], 0, i936, 'Picked')
  i936.resetOnRelease = !!i937[8]
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

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i940 = root || request.c( 'ActionOnTap' )
  var i941 = data
  i940.OnTap = request.d('UnityEngine.Events.UnityEvent', i941[0], i940.OnTap)
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i943 = data
  i942.ambientIntensity = i943[0]
  i942.reflectionIntensity = i943[1]
  i942.ambientMode = i943[2]
  i942.ambientLight = new pc.Color(i943[3], i943[4], i943[5], i943[6])
  i942.ambientSkyColor = new pc.Color(i943[7], i943[8], i943[9], i943[10])
  i942.ambientGroundColor = new pc.Color(i943[11], i943[12], i943[13], i943[14])
  i942.ambientEquatorColor = new pc.Color(i943[15], i943[16], i943[17], i943[18])
  i942.fogColor = new pc.Color(i943[19], i943[20], i943[21], i943[22])
  i942.fogEndDistance = i943[23]
  i942.fogStartDistance = i943[24]
  i942.fogDensity = i943[25]
  i942.fog = !!i943[26]
  request.r(i943[27], i943[28], 0, i942, 'skybox')
  i942.fogMode = i943[29]
  var i945 = i943[30]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i945[i + 0]) );
  }
  i942.lightmaps = i944
  i942.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i943[31], i942.lightProbes)
  i942.lightmapsMode = i943[32]
  i942.mixedBakeMode = i943[33]
  i942.environmentLightingMode = i943[34]
  i942.ambientProbe = new pc.SphericalHarmonicsL2(i943[35])
  request.r(i943[36], i943[37], 0, i942, 'customReflection')
  request.r(i943[38], i943[39], 0, i942, 'defaultReflection')
  i942.defaultReflectionMode = i943[40]
  i942.defaultReflectionResolution = i943[41]
  i942.sunLightObjectId = i943[42]
  i942.pixelLightCount = i943[43]
  i942.defaultReflectionHDR = !!i943[44]
  i942.hasLightDataAsset = !!i943[45]
  i942.hasManualGenerate = !!i943[46]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'lightmapColor')
  request.r(i949[2], i949[3], 0, i948, 'lightmapDirection')
  request.r(i949[4], i949[5], 0, i948, 'shadowMask')
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i950 = root || new UnityEngine.LightProbes()
  var i951 = data
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i959 = data
  var i961 = i959[0]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i961.length; i += 1) {
    i960.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i961[i + 0]));
  }
  i958.ShaderCompilationErrors = i960
  i958.name = i959[1]
  i958.guid = i959[2]
  var i963 = i959[3]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( i963[i + 0] );
  }
  i958.shaderDefinedKeywords = i962
  var i965 = i959[4]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i965[i + 0]) );
  }
  i958.passes = i964
  var i967 = i959[5]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i967[i + 0]) );
  }
  i958.usePasses = i966
  var i969 = i959[6]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i969[i + 0]) );
  }
  i958.defaultParameterValues = i968
  request.r(i959[7], i959[8], 0, i958, 'unityFallbackShader')
  i958.readDepth = !!i959[9]
  i958.hasDepthOnlyPass = !!i959[10]
  i958.isCreatedByShaderGraph = !!i959[11]
  i958.disableBatching = !!i959[12]
  i958.compiled = !!i959[13]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i973 = data
  i972.shaderName = i973[0]
  i972.errorMessage = i973[1]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i978 = root || new pc.UnityShaderPass()
  var i979 = data
  i978.id = i979[0]
  i978.subShaderIndex = i979[1]
  i978.name = i979[2]
  i978.passType = i979[3]
  i978.grabPassTextureName = i979[4]
  i978.usePass = !!i979[5]
  i978.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i979[6], i978.zTest)
  i978.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i979[7], i978.zWrite)
  i978.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i979[8], i978.culling)
  i978.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i979[9], i978.blending)
  i978.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i979[10], i978.alphaBlending)
  i978.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i979[11], i978.colorWriteMask)
  i978.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i979[12], i978.offsetUnits)
  i978.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i979[13], i978.offsetFactor)
  i978.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i979[14], i978.stencilRef)
  i978.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i979[15], i978.stencilReadMask)
  i978.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i979[16], i978.stencilWriteMask)
  i978.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i979[17], i978.stencilOp)
  i978.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i979[18], i978.stencilOpFront)
  i978.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i979[19], i978.stencilOpBack)
  var i981 = i979[20]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i981[i + 0]) );
  }
  i978.tags = i980
  var i983 = i979[21]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( i983[i + 0] );
  }
  i978.passDefinedKeywords = i982
  var i985 = i979[22]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i985[i + 0]) );
  }
  i978.passDefinedKeywordGroups = i984
  var i987 = i979[23]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i987[i + 0]) );
  }
  i978.variants = i986
  var i989 = i979[24]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i989[i + 0]) );
  }
  i978.excludedVariants = i988
  i978.hasDepthReader = !!i979[25]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i991 = data
  i990.val = i991[0]
  i990.name = i991[1]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i993 = data
  i992.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i993[0], i992.src)
  i992.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i993[1], i992.dst)
  i992.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i993[2], i992.op)
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i995 = data
  i994.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i995[0], i994.pass)
  i994.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i995[1], i994.fail)
  i994.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i995[2], i994.zFail)
  i994.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i995[3], i994.comp)
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i999 = data
  i998.name = i999[0]
  i998.value = i999[1]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1003 = data
  var i1005 = i1003[0]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( i1005[i + 0] );
  }
  i1002.keywords = i1004
  i1002.hasDiscard = !!i1003[1]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1009 = data
  i1008.passId = i1009[0]
  i1008.subShaderIndex = i1009[1]
  var i1011 = i1009[2]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( i1011[i + 0] );
  }
  i1008.keywords = i1010
  i1008.vertexProgram = i1009[3]
  i1008.fragmentProgram = i1009[4]
  i1008.exportedForWebGl2 = !!i1009[5]
  i1008.readDepth = !!i1009[6]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'shader')
  i1014.pass = i1015[2]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1019 = data
  i1018.name = i1019[0]
  i1018.type = i1019[1]
  i1018.value = new pc.Vec4( i1019[2], i1019[3], i1019[4], i1019[5] )
  i1018.textureValue = i1019[6]
  i1018.shaderPropertyFlag = i1019[7]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1021 = data
  i1020.name = i1021[0]
  request.r(i1021[1], i1021[2], 0, i1020, 'texture')
  i1020.aabb = i1021[3]
  i1020.vertices = i1021[4]
  i1020.triangles = i1021[5]
  i1020.textureRect = UnityEngine.Rect.MinMaxRect(i1021[6], i1021[7], i1021[8], i1021[9])
  i1020.packedRect = UnityEngine.Rect.MinMaxRect(i1021[10], i1021[11], i1021[12], i1021[13])
  i1020.border = new pc.Vec4( i1021[14], i1021[15], i1021[16], i1021[17] )
  i1020.transparency = i1021[18]
  i1020.bounds = i1021[19]
  i1020.pixelsPerUnit = i1021[20]
  i1020.textureWidth = i1021[21]
  i1020.textureHeight = i1021[22]
  i1020.nativeSize = new pc.Vec2( i1021[23], i1021[24] )
  i1020.pivot = new pc.Vec2( i1021[25], i1021[26] )
  i1020.textureRectOffset = new pc.Vec2( i1021[27], i1021[28] )
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1023 = data
  i1022.name = i1023[0]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1025 = data
  i1024.name = i1025[0]
  i1024.wrapMode = i1025[1]
  i1024.isLooping = !!i1025[2]
  i1024.length = i1025[3]
  var i1027 = i1025[4]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1027[i + 0]) );
  }
  i1024.curves = i1026
  var i1029 = i1025[5]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1029[i + 0]) );
  }
  i1024.events = i1028
  i1024.halfPrecision = !!i1025[6]
  i1024._frameRate = i1025[7]
  i1024.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1025[8], i1024.localBounds)
  i1024.hasMuscleCurves = !!i1025[9]
  var i1031 = i1025[10]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( i1031[i + 0] );
  }
  i1024.clipMuscleConstant = i1030
  i1024.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1025[11], i1024.clipBindingConstant)
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1035 = data
  i1034.path = i1035[0]
  i1034.hash = i1035[1]
  i1034.componentType = i1035[2]
  i1034.property = i1035[3]
  i1034.keys = i1035[4]
  var i1037 = i1035[5]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1037[i + 0]) );
  }
  i1034.objectReferenceKeys = i1036
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1041 = data
  i1040.time = i1041[0]
  request.r(i1041[1], i1041[2], 0, i1040, 'value')
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1045 = data
  i1044.functionName = i1045[0]
  i1044.floatParameter = i1045[1]
  i1044.intParameter = i1045[2]
  i1044.stringParameter = i1045[3]
  request.r(i1045[4], i1045[5], 0, i1044, 'objectReferenceParameter')
  i1044.time = i1045[6]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1047 = data
  i1046.center = new pc.Vec3( i1047[0], i1047[1], i1047[2] )
  i1046.extends = new pc.Vec3( i1047[3], i1047[4], i1047[5] )
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1051 = data
  var i1053 = i1051[0]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( i1053[i + 0] );
  }
  i1050.genericBindings = i1052
  var i1055 = i1051[1]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( i1055[i + 0] );
  }
  i1050.pptrCurveMapping = i1054
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1057 = data
  i1056.name = i1057[0]
  i1056.ascent = i1057[1]
  i1056.originalLineHeight = i1057[2]
  i1056.fontSize = i1057[3]
  var i1059 = i1057[4]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1059[i + 0]) );
  }
  i1056.characterInfo = i1058
  request.r(i1057[5], i1057[6], 0, i1056, 'texture')
  i1056.originalFontSize = i1057[7]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1063 = data
  i1062.index = i1063[0]
  i1062.advance = i1063[1]
  i1062.bearing = i1063[2]
  i1062.glyphWidth = i1063[3]
  i1062.glyphHeight = i1063[4]
  i1062.minX = i1063[5]
  i1062.maxX = i1063[6]
  i1062.minY = i1063[7]
  i1062.maxY = i1063[8]
  i1062.uvBottomLeftX = i1063[9]
  i1062.uvBottomLeftY = i1063[10]
  i1062.uvBottomRightX = i1063[11]
  i1062.uvBottomRightY = i1063[12]
  i1062.uvTopLeftX = i1063[13]
  i1062.uvTopLeftY = i1063[14]
  i1062.uvTopRightX = i1063[15]
  i1062.uvTopRightY = i1063[16]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1065 = data
  i1064.name = i1065[0]
  var i1067 = i1065[1]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1067[i + 0]) );
  }
  i1064.layers = i1066
  var i1069 = i1065[2]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1069[i + 0]) );
  }
  i1064.parameters = i1068
  i1064.animationClips = i1065[3]
  i1064.avatarUnsupported = i1065[4]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1073 = data
  i1072.name = i1073[0]
  i1072.defaultWeight = i1073[1]
  i1072.blendingMode = i1073[2]
  i1072.avatarMask = i1073[3]
  i1072.syncedLayerIndex = i1073[4]
  i1072.syncedLayerAffectsTiming = !!i1073[5]
  i1072.syncedLayers = i1073[6]
  i1072.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1073[7], i1072.stateMachine)
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1075 = data
  i1074.id = i1075[0]
  i1074.name = i1075[1]
  i1074.path = i1075[2]
  var i1077 = i1075[3]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1077[i + 0]) );
  }
  i1074.states = i1076
  var i1079 = i1075[4]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1079[i + 0]) );
  }
  i1074.machines = i1078
  var i1081 = i1075[5]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1081[i + 0]) );
  }
  i1074.entryStateTransitions = i1080
  var i1083 = i1075[6]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1083[i + 0]) );
  }
  i1074.exitStateTransitions = i1082
  var i1085 = i1075[7]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1085[i + 0]) );
  }
  i1074.anyStateTransitions = i1084
  i1074.defaultStateId = i1075[8]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1089 = data
  i1088.id = i1089[0]
  i1088.name = i1089[1]
  i1088.cycleOffset = i1089[2]
  i1088.cycleOffsetParameter = i1089[3]
  i1088.cycleOffsetParameterActive = !!i1089[4]
  i1088.mirror = !!i1089[5]
  i1088.mirrorParameter = i1089[6]
  i1088.mirrorParameterActive = !!i1089[7]
  i1088.motionId = i1089[8]
  i1088.nameHash = i1089[9]
  i1088.fullPathHash = i1089[10]
  i1088.speed = i1089[11]
  i1088.speedParameter = i1089[12]
  i1088.speedParameterActive = !!i1089[13]
  i1088.tag = i1089[14]
  i1088.tagHash = i1089[15]
  i1088.writeDefaultValues = !!i1089[16]
  var i1091 = i1089[17]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 2) {
  request.r(i1091[i + 0], i1091[i + 1], 2, i1090, '')
  }
  i1088.behaviours = i1090
  var i1093 = i1089[18]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1093[i + 0]) );
  }
  i1088.transitions = i1092
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1099 = data
  i1098.fullPath = i1099[0]
  i1098.canTransitionToSelf = !!i1099[1]
  i1098.duration = i1099[2]
  i1098.exitTime = i1099[3]
  i1098.hasExitTime = !!i1099[4]
  i1098.hasFixedDuration = !!i1099[5]
  i1098.interruptionSource = i1099[6]
  i1098.offset = i1099[7]
  i1098.orderedInterruption = !!i1099[8]
  i1098.destinationStateId = i1099[9]
  i1098.isExit = !!i1099[10]
  i1098.mute = !!i1099[11]
  i1098.solo = !!i1099[12]
  var i1101 = i1099[13]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1101[i + 0]) );
  }
  i1098.conditions = i1100
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1107 = data
  i1106.destinationStateId = i1107[0]
  i1106.isExit = !!i1107[1]
  i1106.mute = !!i1107[2]
  i1106.solo = !!i1107[3]
  var i1109 = i1107[4]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1109[i + 0]) );
  }
  i1106.conditions = i1108
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1113 = data
  i1112.mode = i1113[0]
  i1112.parameter = i1113[1]
  i1112.threshold = i1113[2]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1117 = data
  i1116.defaultBool = !!i1117[0]
  i1116.defaultFloat = i1117[1]
  i1116.defaultInt = i1117[2]
  i1116.name = i1117[3]
  i1116.nameHash = i1117[4]
  i1116.type = i1117[5]
  return i1116
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1118 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1119 = data
  i1118.useSafeMode = !!i1119[0]
  i1118.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1119[1], i1118.safeModeOptions)
  i1118.timeScale = i1119[2]
  i1118.unscaledTimeScale = i1119[3]
  i1118.useSmoothDeltaTime = !!i1119[4]
  i1118.maxSmoothUnscaledTime = i1119[5]
  i1118.rewindCallbackMode = i1119[6]
  i1118.showUnityEditorReport = !!i1119[7]
  i1118.logBehaviour = i1119[8]
  i1118.drawGizmos = !!i1119[9]
  i1118.defaultRecyclable = !!i1119[10]
  i1118.defaultAutoPlay = i1119[11]
  i1118.defaultUpdateType = i1119[12]
  i1118.defaultTimeScaleIndependent = !!i1119[13]
  i1118.defaultEaseType = i1119[14]
  i1118.defaultEaseOvershootOrAmplitude = i1119[15]
  i1118.defaultEasePeriod = i1119[16]
  i1118.defaultAutoKill = !!i1119[17]
  i1118.defaultLoopType = i1119[18]
  i1118.debugMode = !!i1119[19]
  i1118.debugStoreTargetId = !!i1119[20]
  i1118.showPreviewPanel = !!i1119[21]
  i1118.storeSettingsLocation = i1119[22]
  i1118.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1119[23], i1118.modules)
  i1118.createASMDEF = !!i1119[24]
  i1118.showPlayingTweens = !!i1119[25]
  i1118.showPausedTweens = !!i1119[26]
  return i1118
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1120 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1121 = data
  i1120.logBehaviour = i1121[0]
  i1120.nestedTweenFailureBehaviour = i1121[1]
  return i1120
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1122 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1123 = data
  i1122.showPanel = !!i1123[0]
  i1122.audioEnabled = !!i1123[1]
  i1122.physicsEnabled = !!i1123[2]
  i1122.physics2DEnabled = !!i1123[3]
  i1122.spriteEnabled = !!i1123[4]
  i1122.uiEnabled = !!i1123[5]
  i1122.textMeshProEnabled = !!i1123[6]
  i1122.tk2DEnabled = !!i1123[7]
  i1122.deAudioEnabled = !!i1123[8]
  i1122.deUnityExtendedEnabled = !!i1123[9]
  i1122.epoOutlineEnabled = !!i1123[10]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1125 = data
  var i1127 = i1125[0]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1127[i + 0]) );
  }
  i1124.files = i1126
  i1124.componentToPrefabIds = i1125[1]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1131 = data
  i1130.path = i1131[0]
  request.r(i1131[1], i1131[2], 0, i1130, 'unityObject')
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1133 = data
  var i1135 = i1133[0]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1135[i + 0]) );
  }
  i1132.scriptsExecutionOrder = i1134
  var i1137 = i1133[1]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1137[i + 0]) );
  }
  i1132.sortingLayers = i1136
  var i1139 = i1133[2]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1139[i + 0]) );
  }
  i1132.cullingLayers = i1138
  i1132.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1133[3], i1132.timeSettings)
  i1132.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1133[4], i1132.physicsSettings)
  i1132.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1133[5], i1132.physics2DSettings)
  i1132.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1133[6], i1132.qualitySettings)
  i1132.enableRealtimeShadows = !!i1133[7]
  i1132.enableAutoInstancing = !!i1133[8]
  i1132.enableStaticBatching = !!i1133[9]
  i1132.enableDynamicBatching = !!i1133[10]
  i1132.usePreservativeDynamicBatching = !!i1133[11]
  i1132.lightmapEncodingQuality = i1133[12]
  i1132.desiredColorSpace = i1133[13]
  var i1141 = i1133[14]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( i1141[i + 0] );
  }
  i1132.allTags = i1140
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1145 = data
  i1144.name = i1145[0]
  i1144.value = i1145[1]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1149 = data
  i1148.id = i1149[0]
  i1148.name = i1149[1]
  i1148.value = i1149[2]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1153 = data
  i1152.id = i1153[0]
  i1152.name = i1153[1]
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1155 = data
  i1154.fixedDeltaTime = i1155[0]
  i1154.maximumDeltaTime = i1155[1]
  i1154.timeScale = i1155[2]
  i1154.maximumParticleTimestep = i1155[3]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1157 = data
  i1156.gravity = new pc.Vec3( i1157[0], i1157[1], i1157[2] )
  i1156.defaultSolverIterations = i1157[3]
  i1156.bounceThreshold = i1157[4]
  i1156.autoSyncTransforms = !!i1157[5]
  i1156.autoSimulation = !!i1157[6]
  var i1159 = i1157[7]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1159[i + 0]) );
  }
  i1156.collisionMatrix = i1158
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1163 = data
  i1162.enabled = !!i1163[0]
  i1162.layerId = i1163[1]
  i1162.otherLayerId = i1163[2]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1165 = data
  request.r(i1165[0], i1165[1], 0, i1164, 'material')
  i1164.gravity = new pc.Vec2( i1165[2], i1165[3] )
  i1164.positionIterations = i1165[4]
  i1164.velocityIterations = i1165[5]
  i1164.velocityThreshold = i1165[6]
  i1164.maxLinearCorrection = i1165[7]
  i1164.maxAngularCorrection = i1165[8]
  i1164.maxTranslationSpeed = i1165[9]
  i1164.maxRotationSpeed = i1165[10]
  i1164.baumgarteScale = i1165[11]
  i1164.baumgarteTOIScale = i1165[12]
  i1164.timeToSleep = i1165[13]
  i1164.linearSleepTolerance = i1165[14]
  i1164.angularSleepTolerance = i1165[15]
  i1164.defaultContactOffset = i1165[16]
  i1164.autoSimulation = !!i1165[17]
  i1164.queriesHitTriggers = !!i1165[18]
  i1164.queriesStartInColliders = !!i1165[19]
  i1164.callbacksOnDisable = !!i1165[20]
  i1164.reuseCollisionCallbacks = !!i1165[21]
  i1164.autoSyncTransforms = !!i1165[22]
  var i1167 = i1165[23]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1167[i + 0]) );
  }
  i1164.collisionMatrix = i1166
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1171 = data
  i1170.enabled = !!i1171[0]
  i1170.layerId = i1171[1]
  i1170.otherLayerId = i1171[2]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1173 = data
  var i1175 = i1173[0]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1175[i + 0]) );
  }
  i1172.qualityLevels = i1174
  var i1177 = i1173[1]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( i1177[i + 0] );
  }
  i1172.names = i1176
  i1172.shadows = i1173[2]
  i1172.anisotropicFiltering = i1173[3]
  i1172.antiAliasing = i1173[4]
  i1172.lodBias = i1173[5]
  i1172.shadowCascades = i1173[6]
  i1172.shadowDistance = i1173[7]
  i1172.shadowmaskMode = i1173[8]
  i1172.shadowProjection = i1173[9]
  i1172.shadowResolution = i1173[10]
  i1172.softParticles = !!i1173[11]
  i1172.softVegetation = !!i1173[12]
  i1172.activeColorSpace = i1173[13]
  i1172.desiredColorSpace = i1173[14]
  i1172.masterTextureLimit = i1173[15]
  i1172.maxQueuedFrames = i1173[16]
  i1172.particleRaycastBudget = i1173[17]
  i1172.pixelLightCount = i1173[18]
  i1172.realtimeReflectionProbes = !!i1173[19]
  i1172.shadowCascade2Split = i1173[20]
  i1172.shadowCascade4Split = new pc.Vec3( i1173[21], i1173[22], i1173[23] )
  i1172.streamingMipmapsActive = !!i1173[24]
  i1172.vSyncCount = i1173[25]
  i1172.asyncUploadBufferSize = i1173[26]
  i1172.asyncUploadTimeSlice = i1173[27]
  i1172.billboardsFaceCameraPosition = !!i1173[28]
  i1172.shadowNearPlaneOffset = i1173[29]
  i1172.streamingMipmapsMemoryBudget = i1173[30]
  i1172.maximumLODLevel = i1173[31]
  i1172.streamingMipmapsAddAllCameras = !!i1173[32]
  i1172.streamingMipmapsMaxLevelReduction = i1173[33]
  i1172.streamingMipmapsRenderersPerFrame = i1173[34]
  i1172.resolutionScalingFixedDPIFactor = i1173[35]
  i1172.streamingMipmapsMaxFileIORequests = i1173[36]
  i1172.currentQualityLevel = i1173[37]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i1181 = data
  var i1183 = i1181[0]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i1183[i + 0]) );
  }
  i1180.groups = i1182
  var i1185 = i1181[1]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i1185[i + 0]) );
  }
  i1180.snapshots = i1184
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i1189 = data
  i1188.id = i1189[0]
  i1188.childGroupIds = i1189[1]
  i1188.name = i1189[2]
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i1193 = data
  i1192.id = i1193[0]
  var i1195 = i1193[1]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i1195[i + 0]) );
  }
  i1192.parameters = i1194
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i1199 = data
  i1198.name = i1199[0]
  i1198.value = i1199[1]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1203 = data
  i1202.weight = i1203[0]
  i1202.vertices = i1203[1]
  i1202.normals = i1203[2]
  i1202.tangents = i1203[3]
  return i1202
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[71],"72":[9],"73":[74],"75":[74],"76":[74],"77":[74],"78":[74],"79":[74],"80":[74],"81":[56],"82":[56],"83":[56],"84":[56],"85":[56],"86":[56],"87":[56],"88":[56],"89":[56],"90":[56],"91":[56],"92":[56],"93":[56],"94":[9],"95":[96],"97":[98],"99":[98],"26":[17],"100":[101],"102":[41],"103":[51],"104":[41],"105":[106],"107":[106],"108":[19],"109":[51],"110":[41],"57":[41],"111":[17],"112":[17],"29":[26],"18":[30,17],"113":[17],"28":[26],"114":[17],"115":[17],"116":[17],"117":[17],"118":[17],"119":[17],"120":[17],"121":[17],"122":[17],"123":[30,17],"124":[17],"125":[17],"126":[17],"127":[17],"21":[30,17],"128":[17],"129":[37],"130":[37],"38":[37],"131":[37],"132":[9],"133":[9]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEditor.Audio.AudioMixerGroupController","UI_Manager","UnityEngine.RectTransform","UnityEngine.UI.Image","DG.Tweening.DOTweenAnimation","UnityEngine.GameObject","UnityEngine.UI.Text","GameManagerPlayable","Level2_Shoe_Playable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Sprite","UnityEngine.Font","UnityEngine.UI.Button","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","BasicDrag","BD_CameraFollow","UnityEngine.SpriteRenderer","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","PlayParticlesOnCollision","UnityEngine.CircleCollider2D","PlaySfxOnCollision","UnityEngine.PolygonCollider2D","UnityEngine.BoxCollider2D","BD_Progress","BD_Clamp","BD_ToolRotate","BD_Audio","UnityEngine.Rigidbody2D","UnityEngine.U2D.Animation.SpriteSkin","BD_SpriteChange","InteractableBones","ActionOnTap","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","SpriteButton","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "5.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "25Aug2026_Lvl_2_3_Step1to5";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1704";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4363";

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

Deserializers.buildID = "7233f77e-558c-4bb1-aa84-3da1fe90bf44";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

