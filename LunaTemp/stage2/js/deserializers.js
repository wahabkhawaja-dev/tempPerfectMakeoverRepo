var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.JointSpring' )
  var i673 = data
  i672.spring = i673[0]
  i672.damper = i673[1]
  i672.targetPosition = i673[2]
  return i672
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i674 = root || request.c( 'UnityEngine.JointMotor' )
  var i675 = data
  i674.m_TargetVelocity = i675[0]
  i674.m_Force = i675[1]
  i674.m_FreeSpin = i675[2]
  return i674
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i676 = root || request.c( 'UnityEngine.JointLimits' )
  var i677 = data
  i676.m_Min = i677[0]
  i676.m_Max = i677[1]
  i676.m_Bounciness = i677[2]
  i676.m_BounceMinVelocity = i677[3]
  i676.m_ContactDistance = i677[4]
  i676.minBounce = i677[5]
  i676.maxBounce = i677[6]
  return i676
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.JointDrive' )
  var i679 = data
  i678.m_PositionSpring = i679[0]
  i678.m_PositionDamper = i679[1]
  i678.m_MaximumForce = i679[2]
  i678.m_UseAcceleration = i679[3]
  return i678
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i680 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i681 = data
  i680.m_Spring = i681[0]
  i680.m_Damper = i681[1]
  return i680
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i683 = data
  i682.m_Limit = i683[0]
  i682.m_Bounciness = i683[1]
  i682.m_ContactDistance = i683[2]
  return i682
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i685 = data
  i684.m_ExtremumSlip = i685[0]
  i684.m_ExtremumValue = i685[1]
  i684.m_AsymptoteSlip = i685[2]
  i684.m_AsymptoteValue = i685[3]
  i684.m_Stiffness = i685[4]
  return i684
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i687 = data
  i686.m_LowerAngle = i687[0]
  i686.m_UpperAngle = i687[1]
  return i686
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i689 = data
  i688.m_MotorSpeed = i689[0]
  i688.m_MaximumMotorTorque = i689[1]
  return i688
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i691 = data
  i690.m_DampingRatio = i691[0]
  i690.m_Frequency = i691[1]
  i690.m_Angle = i691[2]
  return i690
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i693 = data
  i692.m_LowerTranslation = i693[0]
  i692.m_UpperTranslation = i693[1]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i694 = root || new pc.UnityMaterial()
  var i695 = data
  i694.name = i695[0]
  request.r(i695[1], i695[2], 0, i694, 'shader')
  i694.renderQueue = i695[3]
  i694.enableInstancing = !!i695[4]
  var i697 = i695[5]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i697[i + 0]) );
  }
  i694.floatParameters = i696
  var i699 = i695[6]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i699[i + 0]) );
  }
  i694.colorParameters = i698
  var i701 = i695[7]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i701[i + 0]) );
  }
  i694.vectorParameters = i700
  var i703 = i695[8]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i703[i + 0]) );
  }
  i694.textureParameters = i702
  var i705 = i695[9]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i705[i + 0]) );
  }
  i694.materialFlags = i704
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i709 = data
  i708.name = i709[0]
  i708.value = i709[1]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i713 = data
  i712.name = i713[0]
  i712.value = new pc.Color(i713[1], i713[2], i713[3], i713[4])
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i717 = data
  i716.name = i717[0]
  i716.value = new pc.Vec4( i717[1], i717[2], i717[3], i717[4] )
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i721 = data
  i720.name = i721[0]
  request.r(i721[1], i721[2], 0, i720, 'value')
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i725 = data
  i724.name = i725[0]
  i724.enabled = !!i725[1]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i727 = data
  i726.name = i727[0]
  i726.width = i727[1]
  i726.height = i727[2]
  i726.mipmapCount = i727[3]
  i726.anisoLevel = i727[4]
  i726.filterMode = i727[5]
  i726.hdr = !!i727[6]
  i726.format = i727[7]
  i726.wrapMode = i727[8]
  i726.alphaIsTransparency = !!i727[9]
  i726.alphaSource = i727[10]
  i726.graphicsFormat = i727[11]
  i726.sRGBTexture = !!i727[12]
  i726.desiredColorSpace = i727[13]
  i726.wrapU = i727[14]
  i726.wrapV = i727[15]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i729 = data
  i728.name = i729[0]
  i728.halfPrecision = !!i729[1]
  i728.useSimplification = !!i729[2]
  i728.useUInt32IndexFormat = !!i729[3]
  i728.vertexCount = i729[4]
  i728.aabb = i729[5]
  var i731 = i729[6]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( !!i731[i + 0] );
  }
  i728.streams = i730
  i728.vertices = i729[7]
  var i733 = i729[8]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i733[i + 0]) );
  }
  i728.subMeshes = i732
  var i735 = i729[9]
  var i734 = []
  for(var i = 0; i < i735.length; i += 16) {
    i734.push( new pc.Mat4().setData(i735[i + 0], i735[i + 1], i735[i + 2], i735[i + 3],  i735[i + 4], i735[i + 5], i735[i + 6], i735[i + 7],  i735[i + 8], i735[i + 9], i735[i + 10], i735[i + 11],  i735[i + 12], i735[i + 13], i735[i + 14], i735[i + 15]) );
  }
  i728.bindposes = i734
  var i737 = i729[10]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i737[i + 0]) );
  }
  i728.blendShapes = i736
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i743 = data
  i742.triangles = i743[0]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i749 = data
  i748.name = i749[0]
  var i751 = i749[1]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i751[i + 0]) );
  }
  i748.frames = i750
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i753 = data
  i752.position = new pc.Vec3( i753[0], i753[1], i753[2] )
  i752.scale = new pc.Vec3( i753[3], i753[4], i753[5] )
  i752.rotation = new pc.Quat(i753[6], i753[7], i753[8], i753[9])
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i755 = data
  i754.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i755[0], i754.main)
  i754.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i755[1], i754.colorBySpeed)
  i754.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i755[2], i754.colorOverLifetime)
  i754.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i755[3], i754.emission)
  i754.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i755[4], i754.rotationBySpeed)
  i754.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i755[5], i754.rotationOverLifetime)
  i754.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i755[6], i754.shape)
  i754.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i755[7], i754.sizeBySpeed)
  i754.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i755[8], i754.sizeOverLifetime)
  i754.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i755[9], i754.textureSheetAnimation)
  i754.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i755[10], i754.velocityOverLifetime)
  i754.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i755[11], i754.noise)
  i754.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i755[12], i754.inheritVelocity)
  i754.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i755[13], i754.forceOverLifetime)
  i754.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i755[14], i754.limitVelocityOverLifetime)
  i754.useAutoRandomSeed = !!i755[15]
  i754.randomSeed = i755[16]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemMain()
  var i757 = data
  i756.duration = i757[0]
  i756.loop = !!i757[1]
  i756.prewarm = !!i757[2]
  i756.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[3], i756.startDelay)
  i756.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[4], i756.startLifetime)
  i756.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[5], i756.startSpeed)
  i756.startSize3D = !!i757[6]
  i756.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[7], i756.startSizeX)
  i756.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[8], i756.startSizeY)
  i756.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[9], i756.startSizeZ)
  i756.startRotation3D = !!i757[10]
  i756.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[11], i756.startRotationX)
  i756.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[12], i756.startRotationY)
  i756.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[13], i756.startRotationZ)
  i756.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i757[14], i756.startColor)
  i756.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[15], i756.gravityModifier)
  i756.simulationSpace = i757[16]
  request.r(i757[17], i757[18], 0, i756, 'customSimulationSpace')
  i756.simulationSpeed = i757[19]
  i756.useUnscaledTime = !!i757[20]
  i756.scalingMode = i757[21]
  i756.playOnAwake = !!i757[22]
  i756.maxParticles = i757[23]
  i756.emitterVelocityMode = i757[24]
  i756.stopAction = i757[25]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i758 = root || new pc.MinMaxCurve()
  var i759 = data
  i758.mode = i759[0]
  i758.curveMin = new pc.AnimationCurve( { keys_flow: i759[1] } )
  i758.curveMax = new pc.AnimationCurve( { keys_flow: i759[2] } )
  i758.curveMultiplier = i759[3]
  i758.constantMin = i759[4]
  i758.constantMax = i759[5]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i760 = root || new pc.MinMaxGradient()
  var i761 = data
  i760.mode = i761[0]
  i760.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i761[1], i760.gradientMin)
  i760.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i761[2], i760.gradientMax)
  i760.colorMin = new pc.Color(i761[3], i761[4], i761[5], i761[6])
  i760.colorMax = new pc.Color(i761[7], i761[8], i761[9], i761[10])
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i763 = data
  i762.mode = i763[0]
  var i765 = i763[1]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i765[i + 0]) );
  }
  i762.colorKeys = i764
  var i767 = i763[2]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i767[i + 0]) );
  }
  i762.alphaKeys = i766
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemColorBySpeed()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i769[1], i768.color)
  i768.range = new pc.Vec2( i769[2], i769[3] )
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i773 = data
  i772.color = new pc.Color(i773[0], i773[1], i773[2], i773[3])
  i772.time = i773[4]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i777 = data
  i776.alpha = i777[0]
  i776.time = i777[1]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemColorOverLifetime()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i779[1], i778.color)
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemEmitter()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[1], i780.rateOverTime)
  i780.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[2], i780.rateOverDistance)
  var i783 = i781[3]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i783[i + 0]) );
  }
  i780.bursts = i782
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemBurst()
  var i787 = data
  i786.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[0], i786.count)
  i786.cycleCount = i787[1]
  i786.minCount = i787[2]
  i786.maxCount = i787[3]
  i786.repeatInterval = i787[4]
  i786.time = i787[5]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemRotationBySpeed()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[1], i788.x)
  i788.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[2], i788.y)
  i788.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[3], i788.z)
  i788.separateAxes = !!i789[4]
  i788.range = new pc.Vec2( i789[5], i789[6] )
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemRotationOverLifetime()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[1], i790.x)
  i790.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.y)
  i790.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.z)
  i790.separateAxes = !!i791[4]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemShape()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.shapeType = i793[1]
  i792.randomDirectionAmount = i793[2]
  i792.sphericalDirectionAmount = i793[3]
  i792.randomPositionAmount = i793[4]
  i792.alignToDirection = !!i793[5]
  i792.radius = i793[6]
  i792.radiusMode = i793[7]
  i792.radiusSpread = i793[8]
  i792.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[9], i792.radiusSpeed)
  i792.radiusThickness = i793[10]
  i792.angle = i793[11]
  i792.length = i793[12]
  i792.boxThickness = new pc.Vec3( i793[13], i793[14], i793[15] )
  i792.meshShapeType = i793[16]
  request.r(i793[17], i793[18], 0, i792, 'mesh')
  request.r(i793[19], i793[20], 0, i792, 'meshRenderer')
  request.r(i793[21], i793[22], 0, i792, 'skinnedMeshRenderer')
  i792.useMeshMaterialIndex = !!i793[23]
  i792.meshMaterialIndex = i793[24]
  i792.useMeshColors = !!i793[25]
  i792.normalOffset = i793[26]
  i792.arc = i793[27]
  i792.arcMode = i793[28]
  i792.arcSpread = i793[29]
  i792.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[30], i792.arcSpeed)
  i792.donutRadius = i793[31]
  i792.position = new pc.Vec3( i793[32], i793[33], i793[34] )
  i792.rotation = new pc.Vec3( i793[35], i793[36], i793[37] )
  i792.scale = new pc.Vec3( i793[38], i793[39], i793[40] )
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemSizeBySpeed()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[1], i794.x)
  i794.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.y)
  i794.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[3], i794.z)
  i794.separateAxes = !!i795[4]
  i794.range = new pc.Vec2( i795[5], i795[6] )
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemSizeOverLifetime()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.x)
  i796.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.y)
  i796.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[3], i796.z)
  i796.separateAxes = !!i797[4]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.mode = i799[1]
  i798.animation = i799[2]
  i798.numTilesX = i799[3]
  i798.numTilesY = i799[4]
  i798.useRandomRow = !!i799[5]
  i798.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[6], i798.frameOverTime)
  i798.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[7], i798.startFrame)
  i798.cycleCount = i799[8]
  i798.rowIndex = i799[9]
  i798.flipU = i799[10]
  i798.flipV = i799[11]
  i798.spriteCount = i799[12]
  var i801 = i799[13]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 2, i800, '')
  }
  i798.sprites = i800
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[1], i804.x)
  i804.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[2], i804.y)
  i804.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[3], i804.z)
  i804.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[4], i804.radial)
  i804.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[5], i804.speedModifier)
  i804.space = i805[6]
  i804.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[7], i804.orbitalX)
  i804.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[8], i804.orbitalY)
  i804.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[9], i804.orbitalZ)
  i804.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[10], i804.orbitalOffsetX)
  i804.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[11], i804.orbitalOffsetY)
  i804.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[12], i804.orbitalOffsetZ)
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemNoise()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.separateAxes = !!i807[1]
  i806.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.strengthX)
  i806.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.strengthY)
  i806.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[4], i806.strengthZ)
  i806.frequency = i807[5]
  i806.damping = !!i807[6]
  i806.octaveCount = i807[7]
  i806.octaveMultiplier = i807[8]
  i806.octaveScale = i807[9]
  i806.quality = i807[10]
  i806.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[11], i806.scrollSpeed)
  i806.scrollSpeedMultiplier = i807[12]
  i806.remapEnabled = !!i807[13]
  i806.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[14], i806.remapX)
  i806.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[15], i806.remapY)
  i806.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[16], i806.remapZ)
  i806.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[17], i806.positionAmount)
  i806.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[18], i806.rotationAmount)
  i806.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[19], i806.sizeAmount)
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemInheritVelocity()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.mode = i809[1]
  i808.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.curve)
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemForceOverLifetime()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[1], i810.x)
  i810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.y)
  i810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.z)
  i810.space = i811[4]
  i810.randomized = !!i811[5]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[1], i812.limit)
  i812.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.limitX)
  i812.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[3], i812.limitY)
  i812.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[4], i812.limitZ)
  i812.dampen = i813[5]
  i812.separateAxes = !!i813[6]
  i812.space = i813[7]
  i812.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[8], i812.drag)
  i812.multiplyDragByParticleSize = !!i813[9]
  i812.multiplyDragByParticleVelocity = !!i813[10]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'mesh')
  i814.meshCount = i815[2]
  i814.activeVertexStreamsCount = i815[3]
  i814.alignment = i815[4]
  i814.renderMode = i815[5]
  i814.sortMode = i815[6]
  i814.lengthScale = i815[7]
  i814.velocityScale = i815[8]
  i814.cameraVelocityScale = i815[9]
  i814.normalDirection = i815[10]
  i814.sortingFudge = i815[11]
  i814.minParticleSize = i815[12]
  i814.maxParticleSize = i815[13]
  i814.pivot = new pc.Vec3( i815[14], i815[15], i815[16] )
  request.r(i815[17], i815[18], 0, i814, 'trailMaterial')
  i814.applyActiveColorSpace = !!i815[19]
  i814.enabled = !!i815[20]
  request.r(i815[21], i815[22], 0, i814, 'sharedMaterial')
  var i817 = i815[23]
  var i816 = []
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 2, i816, '')
  }
  i814.sharedMaterials = i816
  i814.receiveShadows = !!i815[24]
  i814.shadowCastingMode = i815[25]
  i814.sortingLayerID = i815[26]
  i814.sortingOrder = i815[27]
  i814.lightmapIndex = i815[28]
  i814.lightmapSceneIndex = i815[29]
  i814.lightmapScaleOffset = new pc.Vec4( i815[30], i815[31], i815[32], i815[33] )
  i814.lightProbeUsage = i815[34]
  i814.reflectionProbeUsage = i815[35]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i821 = data
  i820.name = i821[0]
  i820.tagId = i821[1]
  i820.enabled = !!i821[2]
  i820.isStatic = !!i821[3]
  i820.layer = i821[4]
  return i820
}

Deserializers["MenuLevel"] = function (request, data, root) {
  var i822 = root || request.c( 'MenuLevel' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'menuLevelBtnUpdate')
  var i825 = i823[2]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('MenuLevelData', i825[i + 0]) );
  }
  i822.AllSteps = i824
  request.r(i823[3], i823[4], 0, i822, 'buttonparent')
  var i827 = i823[5]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i822.BtnsDotweenAnims = i826
  var i829 = i823[6]
  var i828 = []
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 2, i828, '')
  }
  i822.BtnsCols = i828
  request.r(i823[7], i823[8], 0, i822, 'mainGameView')
  request.r(i823[9], i823[10], 0, i822, 'Storyboard')
  request.r(i823[11], i823[12], 0, i822, 'BgMusic')
  request.r(i823[13], i823[14], 0, i822, 'BgStoryMusic')
  request.r(i823[15], i823[16], 0, i822, 'Hand_Tut1')
  var i831 = i823[17]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i822.itemEnable_Onstart = i830
  var i833 = i823[18]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i822.itemDisable_Onstart = i832
  var i835 = i823[19]
  var i834 = []
  for(var i = 0; i < i835.length; i += 2) {
  request.r(i835[i + 0], i835[i + 1], 2, i834, '')
  }
  i822.itemEnable_Oncomplete = i834
  var i837 = i823[20]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i822.itemDisable_Oncomplete = i836
  i822.levelKey = i823[21]
  i822.revealDirtyHoldTime = i823[22]
  return i822
}

Deserializers["MenuLevelData"] = function (request, data, root) {
  var i840 = root || request.c( 'MenuLevelData' )
  var i841 = data
  i840.Name = i841[0]
  request.r(i841[1], i841[2], 0, i840, 'UiBtn')
  request.r(i841[3], i841[4], 0, i840, 'TickBtn')
  request.r(i841[5], i841[6], 0, i840, 'ExclamationIcon')
  var i843 = i841[7]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i840.Item_Dirty = i842
  var i845 = i841[8]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i840.Item_Clean = i844
  request.r(i841[9], i841[10], 0, i840, 'CompleteParticle')
  return i840
}

Deserializers["Level_PoseController"] = function (request, data, root) {
  var i852 = root || request.c( 'Level_PoseController' )
  var i853 = data
  var i855 = i853[0]
  var i854 = []
  for(var i = 0; i < i855.length; i += 2) {
  request.r(i855[i + 0], i855[i + 1], 2, i854, '')
  }
  i852.itemToShow = i854
  var i857 = i853[1]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i852.itemToHide = i856
  i852.stepTarget = i853[2]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i859 = data
  i858.color = new pc.Color(i859[0], i859[1], i859[2], i859[3])
  request.r(i859[4], i859[5], 0, i858, 'sprite')
  i858.flipX = !!i859[6]
  i858.flipY = !!i859[7]
  i858.drawMode = i859[8]
  i858.size = new pc.Vec2( i859[9], i859[10] )
  i858.tileMode = i859[11]
  i858.adaptiveModeThreshold = i859[12]
  i858.maskInteraction = i859[13]
  i858.spriteSortPoint = i859[14]
  i858.enabled = !!i859[15]
  request.r(i859[16], i859[17], 0, i858, 'sharedMaterial')
  var i861 = i859[18]
  var i860 = []
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 2, i860, '')
  }
  i858.sharedMaterials = i860
  i858.receiveShadows = !!i859[19]
  i858.shadowCastingMode = i859[20]
  i858.sortingLayerID = i859[21]
  i858.sortingOrder = i859[22]
  i858.lightmapIndex = i859[23]
  i858.lightmapSceneIndex = i859[24]
  i858.lightmapScaleOffset = new pc.Vec4( i859[25], i859[26], i859[27], i859[28] )
  i858.lightProbeUsage = i859[29]
  i858.reflectionProbeUsage = i859[30]
  return i858
}

Deserializers["UnityEngine.U2D.Animation.SpriteSkin"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.U2D.Animation.SpriteSkin' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'm_RootBone')
  var i865 = i863[2]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 2, i864, '')
  }
  i862.m_BoneTransforms = i864
  i862.m_AlwaysUpdate = !!i863[3]
  i862.m_AutoRebind = !!i863[4]
  return i862
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i868 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i869 = data
  i868.targetIsSelf = !!i869[0]
  request.r(i869[1], i869[2], 0, i868, 'targetGO')
  i868.tweenTargetIsTargetGO = !!i869[3]
  i868.delay = i869[4]
  i868.duration = i869[5]
  i868.easeType = i869[6]
  i868.easeCurve = new pc.AnimationCurve( { keys_flow: i869[7] } )
  i868.loopType = i869[8]
  i868.loops = i869[9]
  i868.id = i869[10]
  i868.isRelative = !!i869[11]
  i868.isFrom = !!i869[12]
  i868.isIndependentUpdate = !!i869[13]
  i868.autoKill = !!i869[14]
  i868.autoGenerate = !!i869[15]
  i868.isActive = !!i869[16]
  i868.isValid = !!i869[17]
  request.r(i869[18], i869[19], 0, i868, 'target')
  i868.animationType = i869[20]
  i868.targetType = i869[21]
  i868.forcedTargetType = i869[22]
  i868.autoPlay = !!i869[23]
  i868.useTargetAsV3 = !!i869[24]
  i868.endValueFloat = i869[25]
  i868.endValueV3 = new pc.Vec3( i869[26], i869[27], i869[28] )
  i868.endValueV2 = new pc.Vec2( i869[29], i869[30] )
  i868.endValueColor = new pc.Color(i869[31], i869[32], i869[33], i869[34])
  i868.endValueString = i869[35]
  i868.endValueRect = UnityEngine.Rect.MinMaxRect(i869[36], i869[37], i869[38], i869[39])
  request.r(i869[40], i869[41], 0, i868, 'endValueTransform')
  i868.optionalBool0 = !!i869[42]
  i868.optionalBool1 = !!i869[43]
  i868.optionalFloat0 = i869[44]
  i868.optionalInt0 = i869[45]
  i868.optionalRotationMode = i869[46]
  i868.optionalScrambleMode = i869[47]
  i868.optionalShakeRandomnessMode = i869[48]
  i868.optionalString = i869[49]
  i868.updateType = i869[50]
  i868.isSpeedBased = !!i869[51]
  i868.hasOnStart = !!i869[52]
  i868.hasOnPlay = !!i869[53]
  i868.hasOnUpdate = !!i869[54]
  i868.hasOnStepComplete = !!i869[55]
  i868.hasOnComplete = !!i869[56]
  i868.hasOnTweenCreated = !!i869[57]
  i868.hasOnRewind = !!i869[58]
  i868.onStart = request.d('UnityEngine.Events.UnityEvent', i869[59], i868.onStart)
  i868.onPlay = request.d('UnityEngine.Events.UnityEvent', i869[60], i868.onPlay)
  i868.onUpdate = request.d('UnityEngine.Events.UnityEvent', i869[61], i868.onUpdate)
  i868.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i869[62], i868.onStepComplete)
  i868.onComplete = request.d('UnityEngine.Events.UnityEvent', i869[63], i868.onComplete)
  i868.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i869[64], i868.onTweenCreated)
  i868.onRewind = request.d('UnityEngine.Events.UnityEvent', i869[65], i868.onRewind)
  return i868
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i871 = data
  i870.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i871[0], i870.m_PersistentCalls)
  return i870
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i873 = data
  var i875 = i873[0]
  var i874 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i875.length; i += 1) {
    i874.add(request.d('UnityEngine.Events.PersistentCall', i875[i + 0]));
  }
  i872.m_Calls = i874
  return i872
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i878 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'm_Target')
  i878.m_TargetAssemblyTypeName = i879[2]
  i878.m_MethodName = i879[3]
  i878.m_Mode = i879[4]
  i878.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i879[5], i878.m_Arguments)
  i878.m_CallState = i879[6]
  return i878
}

Deserializers["SpriteButton"] = function (request, data, root) {
  var i880 = root || request.c( 'SpriteButton' )
  var i881 = data
  i880.isLocked = !!i881[0]
  i880.lockMsg = i881[1]
  i880.onClick = request.d('UnityEngine.Events.UnityEvent', i881[2], i880.onClick)
  i880.isLevelBtnSfx = !!i881[3]
  request.r(i881[4], i881[5], 0, i880, 'pivot')
  i880.reductionChange = i881[6]
  i880.animationDuration = i881[7]
  return i880
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'm_ObjectArgument')
  i882.m_ObjectArgumentAssemblyTypeName = i883[2]
  i882.m_IntArgument = i883[3]
  i882.m_FloatArgument = i883[4]
  i882.m_StringArgument = i883[5]
  i882.m_BoolArgument = !!i883[6]
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

Deserializers["Level3_StartAnimation"] = function (request, data, root) {
  var i886 = root || request.c( 'Level3_StartAnimation' )
  var i887 = data
  request.r(i887[0], i887[1], 0, i886, 'musicSource')
  request.r(i887[2], i887[3], 0, i886, 'SfxSource')
  request.r(i887[4], i887[5], 0, i886, 'Ambience1Source')
  request.r(i887[6], i887[7], 0, i886, 'Ambience2Source')
  request.r(i887[8], i887[9], 0, i886, 'view1Clip')
  request.r(i887[10], i887[11], 0, i886, 'view2Clip')
  request.r(i887[12], i887[13], 0, i886, 'view2bClip')
  request.r(i887[14], i887[15], 0, i886, 'view2cClip')
  request.r(i887[16], i887[17], 0, i886, 'view3Clip')
  request.r(i887[18], i887[19], 0, i886, 'view3bClip')
  request.r(i887[20], i887[21], 0, i886, 'view3cClip')
  request.r(i887[22], i887[23], 0, i886, 'view4Clip')
  i886.OnComplete = request.d('UnityEngine.Events.UnityEvent', i887[24], i886.OnComplete)
  request.r(i887[25], i887[26], 0, i886, 'skipBtnAnim')
  request.r(i887[27], i887[28], 0, i886, 'canvas')
  request.r(i887[29], i887[30], 0, i886, 'view1')
  request.r(i887[31], i887[32], 0, i886, 'bgTop')
  request.r(i887[33], i887[34], 0, i886, 'bgBottom')
  request.r(i887[35], i887[36], 0, i886, 'imageKnock')
  request.r(i887[37], i887[38], 0, i886, 'imageDoor')
  i886.doorShiftAmount = i887[39]
  request.r(i887[40], i887[41], 0, i886, 'imageBaby')
  request.r(i887[42], i887[43], 0, i886, 'imageLetter')
  request.r(i887[44], i887[45], 0, i886, 'chatBox')
  request.r(i887[46], i887[47], 0, i886, 'chatBoxText')
  i886.typewriterCharDelay = i887[48]
  request.r(i887[49], i887[50], 0, i886, 'tapToContinueButton')
  request.r(i887[51], i887[52], 0, i886, 'view2')
  request.r(i887[53], i887[54], 0, i886, 'v2_bgTop')
  request.r(i887[55], i887[56], 0, i886, 'v2_bgMid')
  request.r(i887[57], i887[58], 0, i886, 'v2_bgBottom')
  request.r(i887[59], i887[60], 0, i886, 'v2_motherBaby')
  request.r(i887[61], i887[62], 0, i886, 'v2_topChatBox')
  request.r(i887[63], i887[64], 0, i886, 'v2_topChatBoxText')
  request.r(i887[65], i887[66], 0, i886, 'v2_girl')
  request.r(i887[67], i887[68], 0, i886, 'v2_cake')
  request.r(i887[69], i887[70], 0, i886, 'v2_cakeFlames')
  request.r(i887[71], i887[72], 0, i886, 'v2_cakeSmoke')
  request.r(i887[73], i887[74], 0, i886, 'v2_mother')
  request.r(i887[75], i887[76], 0, i886, 'v2_midChatBox')
  request.r(i887[77], i887[78], 0, i886, 'v2_midChatBoxText')
  request.r(i887[79], i887[80], 0, i886, 'v2_girlMother')
  request.r(i887[81], i887[82], 0, i886, 'v2_bottomChatBox')
  request.r(i887[83], i887[84], 0, i886, 'v2_bottomChatBoxText')
  request.r(i887[85], i887[86], 0, i886, 'view3')
  request.r(i887[87], i887[88], 0, i886, 'v3_bgTop')
  request.r(i887[89], i887[90], 0, i886, 'v3_bgBottom')
  request.r(i887[91], i887[92], 0, i886, 'v3_girlPose1')
  request.r(i887[93], i887[94], 0, i886, 'v3_girlPose2')
  request.r(i887[95], i887[96], 0, i886, 'v3_topChatBox')
  request.r(i887[97], i887[98], 0, i886, 'v3_topChatBoxText')
  request.r(i887[99], i887[100], 0, i886, 'v3_dress')
  request.r(i887[101], i887[102], 0, i886, 'v3_chatBox1')
  request.r(i887[103], i887[104], 0, i886, 'v3_chatBox1Text')
  request.r(i887[105], i887[106], 0, i886, 'v3_dressBlur')
  request.r(i887[107], i887[108], 0, i886, 'v3_crown')
  request.r(i887[109], i887[110], 0, i886, 'v3_chatBox2')
  request.r(i887[111], i887[112], 0, i886, 'v3_chatBox2Text')
  request.r(i887[113], i887[114], 0, i886, 'view4')
  request.r(i887[115], i887[116], 0, i886, 'v4_chatBox')
  request.r(i887[117], i887[118], 0, i886, 'v4_chatBoxText')
  request.r(i887[119], i887[120], 0, i886, 'mainView')
  request.r(i887[121], i887[122], 0, i886, 'mainViewButtons')
  request.r(i887[123], i887[124], 0, i886, 'imageBG')
  request.r(i887[125], i887[126], 0, i886, 'gameStartScreen')
  request.r(i887[127], i887[128], 0, i886, 'gameStartPop')
  request.r(i887[129], i887[130], 0, i886, 'handIndication')
  i886.duration = i887[131]
  i886.offScreenOffset = i887[132]
  var i889 = i887[133]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i886.itemDisableOnComplete = i888
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i891 = data
  i890.pivot = new pc.Vec2( i891[0], i891[1] )
  i890.anchorMin = new pc.Vec2( i891[2], i891[3] )
  i890.anchorMax = new pc.Vec2( i891[4], i891[5] )
  i890.sizeDelta = new pc.Vec2( i891[6], i891[7] )
  i890.anchoredPosition3D = new pc.Vec3( i891[8], i891[9], i891[10] )
  i890.rotation = new pc.Quat(i891[11], i891[12], i891[13], i891[14])
  i890.scale = new pc.Vec3( i891[15], i891[16], i891[17] )
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i893 = data
  i892.planeDistance = i893[0]
  i892.referencePixelsPerUnit = i893[1]
  i892.isFallbackOverlay = !!i893[2]
  i892.renderMode = i893[3]
  i892.renderOrder = i893[4]
  i892.sortingLayerName = i893[5]
  i892.sortingOrder = i893[6]
  i892.scaleFactor = i893[7]
  request.r(i893[8], i893[9], 0, i892, 'worldCamera')
  i892.overrideSorting = !!i893[10]
  i892.pixelPerfect = !!i893[11]
  i892.targetDisplay = i893[12]
  i892.overridePixelPerfect = !!i893[13]
  i892.enabled = !!i893[14]
  return i892
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i895 = data
  i894.m_UiScaleMode = i895[0]
  i894.m_ReferencePixelsPerUnit = i895[1]
  i894.m_ScaleFactor = i895[2]
  i894.m_ReferenceResolution = new pc.Vec2( i895[3], i895[4] )
  i894.m_ScreenMatchMode = i895[5]
  i894.m_MatchWidthOrHeight = i895[6]
  i894.m_PhysicalUnit = i895[7]
  i894.m_FallbackScreenDPI = i895[8]
  i894.m_DefaultSpriteDPI = i895[9]
  i894.m_DynamicPixelsPerUnit = i895[10]
  i894.m_PresetInfoIsWorld = !!i895[11]
  return i894
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i897 = data
  i896.m_IgnoreReversedGraphics = !!i897[0]
  i896.m_BlockingObjects = i897[1]
  i896.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i897[2] )
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i899 = data
  i898.cullTransparentMesh = !!i899[0]
  return i898
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.UI.Image' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'm_Sprite')
  i900.m_Type = i901[2]
  i900.m_PreserveAspect = !!i901[3]
  i900.m_FillCenter = !!i901[4]
  i900.m_FillMethod = i901[5]
  i900.m_FillAmount = i901[6]
  i900.m_FillClockwise = !!i901[7]
  i900.m_FillOrigin = i901[8]
  i900.m_UseSpriteMesh = !!i901[9]
  i900.m_PixelsPerUnitMultiplier = i901[10]
  request.r(i901[11], i901[12], 0, i900, 'm_Material')
  i900.m_Maskable = !!i901[13]
  i900.m_Color = new pc.Color(i901[14], i901[15], i901[16], i901[17])
  i900.m_RaycastTarget = !!i901[18]
  i900.m_RaycastPadding = new pc.Vec4( i901[19], i901[20], i901[21], i901[22] )
  return i900
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.UI.Mask' )
  var i903 = data
  i902.m_ShowMaskGraphic = !!i903[0]
  return i902
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i904 = root || request.c( 'UnityEngine.UI.Button' )
  var i905 = data
  i904.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i905[0], i904.m_OnClick)
  i904.m_Navigation = request.d('UnityEngine.UI.Navigation', i905[1], i904.m_Navigation)
  i904.m_Transition = i905[2]
  i904.m_Colors = request.d('UnityEngine.UI.ColorBlock', i905[3], i904.m_Colors)
  i904.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i905[4], i904.m_SpriteState)
  i904.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i905[5], i904.m_AnimationTriggers)
  i904.m_Interactable = !!i905[6]
  request.r(i905[7], i905[8], 0, i904, 'm_TargetGraphic')
  return i904
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i906 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i907 = data
  i906.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i907[0], i906.m_PersistentCalls)
  return i906
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i908 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i909 = data
  i908.m_Mode = i909[0]
  i908.m_WrapAround = !!i909[1]
  request.r(i909[2], i909[3], 0, i908, 'm_SelectOnUp')
  request.r(i909[4], i909[5], 0, i908, 'm_SelectOnDown')
  request.r(i909[6], i909[7], 0, i908, 'm_SelectOnLeft')
  request.r(i909[8], i909[9], 0, i908, 'm_SelectOnRight')
  return i908
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i911 = data
  i910.m_NormalColor = new pc.Color(i911[0], i911[1], i911[2], i911[3])
  i910.m_HighlightedColor = new pc.Color(i911[4], i911[5], i911[6], i911[7])
  i910.m_PressedColor = new pc.Color(i911[8], i911[9], i911[10], i911[11])
  i910.m_SelectedColor = new pc.Color(i911[12], i911[13], i911[14], i911[15])
  i910.m_DisabledColor = new pc.Color(i911[16], i911[17], i911[18], i911[19])
  i910.m_ColorMultiplier = i911[20]
  i910.m_FadeDuration = i911[21]
  return i910
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i912 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'm_HighlightedSprite')
  request.r(i913[2], i913[3], 0, i912, 'm_PressedSprite')
  request.r(i913[4], i913[5], 0, i912, 'm_SelectedSprite')
  request.r(i913[6], i913[7], 0, i912, 'm_DisabledSprite')
  return i912
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i915 = data
  i914.m_NormalTrigger = i915[0]
  i914.m_HighlightedTrigger = i915[1]
  i914.m_PressedTrigger = i915[2]
  i914.m_SelectedTrigger = i915[3]
  i914.m_DisabledTrigger = i915[4]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'animatorController')
  request.r(i917[2], i917[3], 0, i916, 'avatar')
  i916.updateMode = i917[4]
  i916.hasTransformHierarchy = !!i917[5]
  i916.applyRootMotion = !!i917[6]
  var i919 = i917[7]
  var i918 = []
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 2, i918, '')
  }
  i916.humanBones = i918
  i916.enabled = !!i917[8]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'clip')
  request.r(i921[2], i921[3], 0, i920, 'outputAudioMixerGroup')
  i920.playOnAwake = !!i921[4]
  i920.loop = !!i921[5]
  i920.time = i921[6]
  i920.volume = i921[7]
  i920.pitch = i921[8]
  i920.enabled = !!i921[9]
  return i920
}

Deserializers["Level3_Crown_Playable"] = function (request, data, root) {
  var i922 = root || request.c( 'Level3_Crown_Playable' )
  var i923 = data
  i922.MainZoom = request.d('ZoomPos', i923[0], i922.MainZoom)
  request.r(i923[1], i923[2], 0, i922, 'View1')
  request.r(i923[3], i923[4], 0, i922, 'View2')
  i922.ZoomStep1 = request.d('ZoomPos', i923[5], i922.ZoomStep1)
  request.r(i923[6], i923[7], 0, i922, 'ToolStep1')
  request.r(i923[8], i923[9], 0, i922, 'ToolStep1CameraFollow')
  request.r(i923[10], i923[11], 0, i922, 'Step1Col')
  request.r(i923[12], i923[13], 0, i922, 'DustSR_1')
  i922.ZoomStep2 = request.d('ZoomPos', i923[14], i922.ZoomStep2)
  request.r(i923[15], i923[16], 0, i922, 'ToolStep2')
  request.r(i923[17], i923[18], 0, i922, 'ToolStep2CameraFollow')
  var i925 = i923[19]
  var i924 = []
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 2, i924, '')
  }
  i922.SRsToFadeOut_2 = i924
  request.r(i923[20], i923[21], 0, i922, 'SpraySR_2')
  i922.ZoomStep3 = request.d('ZoomPos', i923[22], i922.ZoomStep3)
  request.r(i923[23], i923[24], 0, i922, 'ToolStep3')
  request.r(i923[25], i923[26], 0, i922, 'ToolStep3CameraFollow')
  request.r(i923[27], i923[28], 0, i922, 'Step3Col')
  request.r(i923[29], i923[30], 0, i922, 'Mix')
  request.r(i923[31], i923[32], 0, i922, 'MixE')
  i922.ZoomStep4 = request.d('ZoomPos', i923[33], i922.ZoomStep4)
  request.r(i923[34], i923[35], 0, i922, 'ToolStep4')
  request.r(i923[36], i923[37], 0, i922, 'ToolStep4CameraFollow')
  request.r(i923[38], i923[39], 0, i922, 'Step4Col')
  request.r(i923[40], i923[41], 0, i922, 'CleanSR_4')
  var i927 = i923[42]
  var i926 = []
  for(var i = 0; i < i927.length; i += 2) {
  request.r(i927[i + 0], i927[i + 1], 2, i926, '')
  }
  i922.SRsToFadeOut_4 = i926
  i922.ZoomStep5 = request.d('ZoomPos', i923[43], i922.ZoomStep5)
  request.r(i923[44], i923[45], 0, i922, 'HammerHolder_5')
  request.r(i923[46], i923[47], 0, i922, 'HammerAnimator_5')
  var i929 = i923[48]
  var i928 = []
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 2, i928, '')
  }
  i922.HammerTaps_5 = i928
  var i931 = i923[49]
  var i930 = []
  for(var i = 0; i < i931.length; i += 2) {
  request.r(i931[i + 0], i931[i + 1], 2, i930, '')
  }
  i922.Hand_5 = i930
  var i933 = i923[50]
  var i932 = []
  for(var i = 0; i < i933.length; i += 2) {
  request.r(i933[i + 0], i933[i + 1], 2, i932, '')
  }
  i922.StoneAboveParts_5 = i932
  var i935 = i923[51]
  var i934 = []
  for(var i = 0; i < i935.length; i += 2) {
  request.r(i935[i + 0], i935[i + 1], 2, i934, '')
  }
  i922.StoneAroundParts_5 = i934
  var i937 = i923[52]
  var i936 = []
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 2, i936, '')
  }
  i922.GemParts_5 = i936
  var i939 = i923[53]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( !!i939[i + 0] );
  }
  i922.Status_5 = i938
  var i941 = i923[54]
  var i940 = []
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 2, i940, '')
  }
  i922.Particles_5 = i940
  var i943 = i923[55]
  var i942 = []
  for(var i = 0; i < i943.length; i += 2) {
  request.r(i943[i + 0], i943[i + 1], 2, i942, '')
  }
  i922.ObjsToDisable_5 = i942
  i922.stonesRemoved = i923[56]
  var i945 = i923[57]
  var i944 = []
  for(var i = 0; i < i945.length; i += 2) {
  request.r(i945[i + 0], i945[i + 1], 2, i944, '')
  }
  i922.hammerSounds = i944
  i922.levelName = i923[58]
  i922.levelReward = i923[59]
  request.r(i923[60], i923[61], 0, i922, 'LevelIcon')
  request.r(i923[62], i923[63], 0, i922, 'Level_BG')
  var i947 = i923[64]
  var i946 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i947.length; i += 2) {
  request.r(i947[i + 0], i947[i + 1], 1, i946, '')
  }
  i922.ToolIcons = i946
  var i949 = i923[65]
  var i948 = []
  for(var i = 0; i < i949.length; i += 2) {
  request.r(i949[i + 0], i949[i + 1], 2, i948, '')
  }
  i922.AllDrags = i948
  var i951 = i923[66]
  var i950 = []
  for(var i = 0; i < i951.length; i += 2) {
  request.r(i951[i + 0], i951[i + 1], 2, i950, '')
  }
  i922.AllSources = i950
  var i953 = i923[67]
  var i952 = []
  for(var i = 0; i < i953.length; i += 2) {
  request.r(i953[i + 0], i953[i + 1], 2, i952, '')
  }
  i922.AllScratches = i952
  i922.stepsDone = i923[68]
  i922.levelNo = i923[69]
  i922.partNo = i923[70]
  return i922
}

Deserializers["ZoomPos"] = function (request, data, root) {
  var i954 = root || request.c( 'ZoomPos' )
  var i955 = data
  i954.CameraPos = new pc.Vec3( i955[0], i955[1], i955[2] )
  i954.CameraFOV = i955[3]
  return i954
}

Deserializers["PlayableCTA"] = function (request, data, root) {
  var i970 = root || request.c( 'PlayableCTA' )
  var i971 = data
  i970.trigger = i971[0]
  i970.afterSeconds = i971[1]
  i970.afterTaps = i971[2]
  request.r(i971[3], i971[4], 0, i970, 'scratchProgress')
  i970.scratchIndex = i971[5]
  i970.progressThreshold = i971[6]
  request.r(i971[7], i971[8], 0, i970, 'watchedTool')
  i970.blockInputOnFire = !!i971[9]
  i970.refireOnEveryTap = !!i971[10]
  i970.refireDelay = i971[11]
  i970.showEndCard = !!i971[12]
  request.r(i971[13], i971[14], 0, i970, 'endCard')
  i970.showEndCardOnProgressTrigger = !!i971[15]
  i970.showEndCardOnToolAppearTrigger = !!i971[16]
  i970.onCtaFired = request.d('UnityEngine.Events.UnityEvent', i971[17], i970.onCtaFired)
  i970.logWhenFired = !!i971[18]
  return i970
}

Deserializers["PlayableFadeCoverSettings"] = function (request, data, root) {
  var i972 = root || request.c( 'PlayableFadeCoverSettings' )
  var i973 = data
  i972.revealDelay = i973[0]
  i972.revealDuration = i973[1]
  return i972
}

Deserializers["ScratchCardAsset.ScratchCardManager"] = function (request, data, root) {
  var i974 = root || request.c( 'ScratchCardAsset.ScratchCardManager' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'MainCamera')
  i974.RenderType = i975[2]
  request.r(i975[3], i975[4], 0, i974, 'ScratchSurfaceSprite')
  i974.ScratchSurfaceSpriteHasAlpha = !!i975[5]
  i974.MaskProgressCutOffValue = i975[6]
  request.r(i975[7], i975[8], 0, i974, 'EraseTexture')
  i974.EraseTextureScale = new pc.Vec2( i975[9], i975[10] )
  i974.InputEnabled = !!i975[11]
  request.r(i975[12], i975[13], 0, i974, 'Card')
  i974.Mode = i975[14]
  request.r(i975[15], i975[16], 0, i974, 'Progress')
  request.r(i975[17], i975[18], 0, i974, 'MeshCard')
  request.r(i975[19], i975[20], 0, i974, 'SpriteCard')
  request.r(i975[21], i975[22], 0, i974, 'ImageCard')
  request.r(i975[23], i975[24], 0, i974, 'MaskShader')
  request.r(i975[25], i975[26], 0, i974, 'BrushShader')
  request.r(i975[27], i975[28], 0, i974, 'MaskProgressShader')
  request.r(i975[29], i975[30], 0, i974, 'MaskProgressCutOffShader')
  return i974
}

Deserializers["ScratchCardAsset.ScratchCard"] = function (request, data, root) {
  var i976 = root || request.c( 'ScratchCardAsset.ScratchCard' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'MainCamera')
  request.r(i977[2], i977[3], 0, i976, 'Surface')
  i976.RenderTextureQuality = i977[4]
  request.r(i977[5], i977[6], 0, i976, 'Eraser')
  request.r(i977[7], i977[8], 0, i976, 'Progress')
  request.r(i977[9], i977[10], 0, i976, 'ScratchSurface')
  request.r(i977[11], i977[12], 0, i976, 'RenderTexture')
  i976.BrushScale = new pc.Vec2( i977[13], i977[14] )
  request.r(i977[15], i977[16], 0, i976, 'ToolTip')
  i976.InputEnabled = !!i977[17]
  i976.IsScratching = !!i977[18]
  i976.useChangingScale = !!i977[19]
  i976.useGivenBrushScale = !!i977[20]
  i976.canSpreadMask = !!i977[21]
  i976.shouldPaintHoles = !!i977[22]
  i976.canRotateTip = !!i977[23]
  i976._mode = i977[24]
  return i976
}

Deserializers["ScratchCardAsset.EraseProgress"] = function (request, data, root) {
  var i978 = root || request.c( 'ScratchCardAsset.EraseProgress' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'Card')
  i978.currentProgress = i979[2]
  return i978
}

Deserializers["PlayParticlesOnCollision"] = function (request, data, root) {
  var i980 = root || request.c( 'PlayParticlesOnCollision' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'Target')
  request.r(i981[2], i981[3], 0, i980, 'ParticlePrefab')
  i980.destroyIt = !!i981[4]
  i980.stayAtPlace = !!i981[5]
  i980.disableOnCollision = !!i981[6]
  i980.OnCollisionEvent = request.d('UnityEngine.Events.UnityEvent', i981[7], i980.OnCollisionEvent)
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i983 = data
  i982.radius = i983[0]
  i982.enabled = !!i983[1]
  i982.isTrigger = !!i983[2]
  i982.usedByEffector = !!i983[3]
  i982.density = i983[4]
  i982.offset = new pc.Vec2( i983[5], i983[6] )
  request.r(i983[7], i983[8], 0, i982, 'material')
  return i982
}

Deserializers["PlaySfxOnCollision"] = function (request, data, root) {
  var i984 = root || request.c( 'PlaySfxOnCollision' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'Tip')
  i984.Mode = i985[2]
  request.r(i985[3], i985[4], 0, i984, 'DragInput')
  request.r(i985[5], i985[6], 0, i984, 'Source')
  i984.startVol = i985[7]
  i984.targetVol = i985[8]
  i984.duration = i985[9]
  request.r(i985[10], i985[11], 0, i984, 'Particles')
  i984.isDone = !!i985[12]
  i984.isInArea = !!i985[13]
  i984.isPlaying = !!i985[14]
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i987 = data
  i986.usedByComposite = !!i987[0]
  i986.autoTiling = !!i987[1]
  var i989 = i987[2]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
  var i991 = i989[i + 0]
  var i990 = []
  for(var i = 0; i < i991.length; i += 2) {
    i990.push( new pc.Vec2( i991[i + 0], i991[i + 1] ) );
  }
    i988.push( i990 );
  }
  i986.points = i988
  i986.enabled = !!i987[3]
  i986.isTrigger = !!i987[4]
  i986.usedByEffector = !!i987[5]
  i986.density = i987[6]
  i986.offset = new pc.Vec2( i987[7], i987[8] )
  request.r(i987[9], i987[10], 0, i986, 'material')
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i999 = data
  i998.frontSortingLayerID = i999[0]
  i998.frontSortingOrder = i999[1]
  i998.backSortingLayerID = i999[2]
  i998.backSortingOrder = i999[3]
  i998.alphaCutoff = i999[4]
  request.r(i999[5], i999[6], 0, i998, 'sprite')
  i998.tileMode = i999[7]
  i998.isCustomRangeActive = !!i999[8]
  i998.spriteSortPoint = i999[9]
  i998.enabled = !!i999[10]
  request.r(i999[11], i999[12], 0, i998, 'sharedMaterial')
  var i1001 = i999[13]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 2) {
  request.r(i1001[i + 0], i1001[i + 1], 2, i1000, '')
  }
  i998.sharedMaterials = i1000
  i998.receiveShadows = !!i999[14]
  i998.shadowCastingMode = i999[15]
  i998.sortingLayerID = i999[16]
  i998.sortingOrder = i999[17]
  i998.lightmapIndex = i999[18]
  i998.lightmapSceneIndex = i999[19]
  i998.lightmapScaleOffset = new pc.Vec4( i999[20], i999[21], i999[22], i999[23] )
  i998.lightProbeUsage = i999[24]
  i998.reflectionProbeUsage = i999[25]
  return i998
}

Deserializers["ActionOnTap"] = function (request, data, root) {
  var i1002 = root || request.c( 'ActionOnTap' )
  var i1003 = data
  i1002.OnTap = request.d('UnityEngine.Events.UnityEvent', i1003[0], i1002.OnTap)
  i1002.OnTapExtra = request.d('System.Action', i1003[1], i1002.OnTapExtra)
  return i1002
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1004 = root || request.c( 'System.Action' )
  var i1005 = data
  return i1004
}

Deserializers["BD_AnimationHelper"] = function (request, data, root) {
  var i1006 = root || request.c( 'BD_AnimationHelper' )
  var i1007 = data
  i1006.OnAnimationComplete = request.d('UnityEngine.Events.UnityEvent', i1007[0], i1006.OnAnimationComplete)
  request.r(i1007[1], i1007[2], 0, i1006, 'sfxClip')
  return i1006
}

Deserializers["BasicDrag"] = function (request, data, root) {
  var i1008 = root || request.c( 'BasicDrag' )
  var i1009 = data
  i1008.canDrag = !!i1009[0]
  i1008.dragByDelta = !!i1009[1]
  i1008.isDragging = !!i1009[2]
  i1008.moveWithPointer = !!i1009[3]
  i1008.canReturn = !!i1009[4]
  i1008.jumpOnReturn = !!i1009[5]
  i1008.returnTime = i1009[6]
  i1008.Tool_Offset = new pc.Vec3( i1009[7], i1009[8], i1009[9] )
  i1008.canScaleIncrease = !!i1009[10]
  i1008.Self_ScaleNew = new pc.Vec3( i1009[11], i1009[12], i1009[13] )
  i1008.canRotateOnPick = !!i1009[14]
  i1008.startRot = new pc.Vec3( i1009[15], i1009[16], i1009[17] )
  i1008.newRot = new pc.Vec3( i1009[18], i1009[19], i1009[20] )
  var i1011 = i1009[21]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 2, i1010, '')
  }
  i1008.childSprite = i1010
  request.r(i1009[22], i1009[23], 0, i1008, 'ToolSelectClip')
  request.r(i1009[24], i1009[25], 0, i1008, 'ToolLoopClip')
  request.r(i1009[26], i1009[27], 0, i1008, 'thisParticles')
  i1008.onDragparticle = !!i1009[28]
  request.r(i1009[29], i1009[30], 0, i1008, 'dragParticles')
  request.r(i1009[31], i1009[32], 0, i1008, 'anim')
  i1008.startPos = new pc.Vec3( i1009[33], i1009[34], i1009[35] )
  i1008.startScale = new pc.Vec3( i1009[36], i1009[37], i1009[38] )
  i1008.Vibration = !!i1009[39]
  i1008.isPlacedCannotMove = !!i1009[40]
  i1008.isObjectMovingWhileDragging = !!i1009[41]
  i1008.OnMouseDownEvent = request.d('System.Action', i1009[42], i1008.OnMouseDownEvent)
  i1008.OnMouseUpEvent = request.d('System.Action', i1009[43], i1008.OnMouseUpEvent)
  i1008.ProgStartEvent = request.d('System.Action', i1009[44], i1008.ProgStartEvent)
  i1008.ProgEndEvent = request.d('System.Action', i1009[45], i1008.ProgEndEvent)
  i1008.canCallMouseUpWhenGamePaused = !!i1009[46]
  i1008.ClampX_L = i1009[47]
  i1008.ClampX_H = i1009[48]
  i1008.ClampY_L = i1009[49]
  i1008.ClampY_H = i1009[50]
  i1008.startOrder = i1009[51]
  i1008.dontResetItIsInCollider = !!i1009[52]
  request.r(i1009[53], i1009[54], 0, i1008, 'thisCollider')
  request.r(i1009[55], i1009[56], 0, i1008, 'thisSR')
  i1008.OnMouseDownEventIndependentFromCanDrag = request.d('System.Action', i1009[57], i1008.OnMouseDownEventIndependentFromCanDrag)
  return i1008
}

Deserializers["BD_Progress"] = function (request, data, root) {
  var i1012 = root || request.c( 'BD_Progress' )
  var i1013 = data
  var i1015 = i1013[0]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('ScratchData', i1015[i + 0]) );
  }
  i1012.AllScratches = i1014
  i1012.OnScratchComplete = request.d('UnityEngine.Events.UnityEvent', i1013[1], i1012.OnScratchComplete)
  i1012.isProgDone = !!i1013[2]
  i1012.canCallComplete = !!i1013[3]
  i1012.CollectiveAppear = !!i1013[4]
  i1012.tipControl = !!i1013[5]
  i1012.progressControl = !!i1013[6]
  request.r(i1013[7], i1013[8], 0, i1012, 'thisDrag')
  i1012.CompleteEvent = request.d('System.Action', i1013[9], i1012.CompleteEvent)
  i1012.SubCompleteEvent = request.d('System.Action', i1013[10], i1012.SubCompleteEvent)
  return i1012
}

Deserializers["ScratchData"] = function (request, data, root) {
  var i1018 = root || request.c( 'ScratchData' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'ScratchManager')
  i1018.scratchLimit = i1019[2]
  i1018.isComplete = !!i1019[3]
  return i1018
}

Deserializers["BD_Clamp"] = function (request, data, root) {
  var i1020 = root || request.c( 'BD_Clamp' )
  var i1021 = data
  i1020.ClampX_L = i1021[0]
  i1020.ClampX_H = i1021[1]
  i1020.ClampY_L = i1021[2]
  i1020.ClampY_H = i1021[3]
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

Deserializers["BD_AnimatorDrag"] = function (request, data, root) {
  var i1026 = root || request.c( 'BD_AnimatorDrag' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'BD')
  request.r(i1027[2], i1027[3], 0, i1026, 'anim')
  request.r(i1027[4], i1027[5], 0, i1026, 'Source')
  i1026.Vibration = !!i1027[6]
  i1026.isCompletable = !!i1027[7]
  i1026.completionThreshold = i1027[8]
  i1026.OnComplete = request.d('UnityEngine.Events.UnityEvent', i1027[9], i1026.OnComplete)
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1029 = data
  i1028.bodyType = i1029[0]
  request.r(i1029[1], i1029[2], 0, i1028, 'material')
  i1028.simulated = !!i1029[3]
  i1028.useAutoMass = !!i1029[4]
  i1028.mass = i1029[5]
  i1028.drag = i1029[6]
  i1028.angularDrag = i1029[7]
  i1028.gravityScale = i1029[8]
  i1028.collisionDetectionMode = i1029[9]
  i1028.sleepMode = i1029[10]
  i1028.constraints = i1029[11]
  return i1028
}

Deserializers["BD_SpriteChange"] = function (request, data, root) {
  var i1030 = root || request.c( 'BD_SpriteChange' )
  var i1031 = data
  request.r(i1031[0], i1031[1], 0, i1030, 'BD')
  request.r(i1031[2], i1031[3], 0, i1030, 'SR')
  request.r(i1031[4], i1031[5], 0, i1030, 'Default')
  request.r(i1031[6], i1031[7], 0, i1030, 'Picked')
  i1030.resetOnRelease = !!i1031[8]
  return i1030
}

Deserializers["BD_ProgressHelper"] = function (request, data, root) {
  var i1032 = root || request.c( 'BD_ProgressHelper' )
  var i1033 = data
  request.r(i1033[0], i1033[1], 0, i1032, 'BD_Progress')
  request.r(i1033[2], i1033[3], 0, i1032, 'fadeSprite')
  i1032.fadeIn = !!i1033[4]
  return i1032
}

Deserializers["DestroyObj"] = function (request, data, root) {
  var i1034 = root || request.c( 'DestroyObj' )
  var i1035 = data
  i1034.destroyDelay = i1035[0]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1037 = data
  i1036.name = i1037[0]
  i1036.atlasId = i1037[1]
  i1036.mipmapCount = i1037[2]
  i1036.hdr = !!i1037[3]
  i1036.size = i1037[4]
  i1036.anisoLevel = i1037[5]
  i1036.filterMode = i1037[6]
  var i1039 = i1037[7]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 4) {
    i1038.push( UnityEngine.Rect.MinMaxRect(i1039[i + 0], i1039[i + 1], i1039[i + 2], i1039[i + 3]) );
  }
  i1036.rects = i1038
  i1036.wrapU = i1037[8]
  i1036.wrapV = i1037[9]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1043 = data
  i1042.name = i1043[0]
  i1042.index = i1043[1]
  i1042.startup = !!i1043[2]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1045 = data
  i1044.aspect = i1045[0]
  i1044.orthographic = !!i1045[1]
  i1044.orthographicSize = i1045[2]
  i1044.backgroundColor = new pc.Color(i1045[3], i1045[4], i1045[5], i1045[6])
  i1044.nearClipPlane = i1045[7]
  i1044.farClipPlane = i1045[8]
  i1044.fieldOfView = i1045[9]
  i1044.depth = i1045[10]
  i1044.clearFlags = i1045[11]
  i1044.cullingMask = i1045[12]
  i1044.rect = i1045[13]
  request.r(i1045[14], i1045[15], 0, i1044, 'targetTexture')
  i1044.usePhysicalProperties = !!i1045[16]
  i1044.focalLength = i1045[17]
  i1044.sensorSize = new pc.Vec2( i1045[18], i1045[19] )
  i1044.lensShift = new pc.Vec2( i1045[20], i1045[21] )
  i1044.gateFit = i1045[22]
  i1044.commandBufferCount = i1045[23]
  i1044.cameraType = i1045[24]
  i1044.enabled = !!i1045[25]
  return i1044
}

Deserializers["CameraController"] = function (request, data, root) {
  var i1046 = root || request.c( 'CameraController' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'cam')
  i1046.defaultPosition = new pc.Vec3( i1047[2], i1047[3], i1047[4] )
  i1046.defaultSize = i1047[5]
  i1046.defaultFOV = i1047[6]
  i1046.defaultDuration = i1047[7]
  i1046.defaultEase = i1047[8]
  return i1046
}

Deserializers["MusicSource"] = function (request, data, root) {
  var i1048 = root || request.c( 'MusicSource' )
  var i1049 = data
  request.r(i1049[0], i1049[1], 0, i1048, 'source')
  return i1048
}

Deserializers["UI_Manager"] = function (request, data, root) {
  var i1050 = root || request.c( 'UI_Manager' )
  var i1051 = data
  i1050.levelCompleted = !!i1051[0]
  i1050.isPauseActive = !!i1051[1]
  i1050.loadIndex = i1051[2]
  request.r(i1051[3], i1051[4], 0, i1050, 'removeAdsButton')
  request.r(i1051[5], i1051[6], 0, i1050, 'pauseButton')
  request.r(i1051[7], i1051[8], 0, i1050, 'Fade_Img')
  request.r(i1051[9], i1051[10], 0, i1050, 'TopBarAnim')
  request.r(i1051[11], i1051[12], 0, i1050, 'MainPanel')
  request.r(i1051[13], i1051[14], 0, i1050, 'PausePanel')
  request.r(i1051[15], i1051[16], 0, i1050, 'PausePopUp')
  request.r(i1051[17], i1051[18], 0, i1050, 'PauseCanvasGroup')
  request.r(i1051[19], i1051[20], 0, i1050, 'RateUsPanel')
  request.r(i1051[21], i1051[22], 0, i1050, 'RateUsPopUp')
  request.r(i1051[23], i1051[24], 0, i1050, 'RemoveAdsPanel')
  request.r(i1051[25], i1051[26], 0, i1050, 'RemoveAdsPopUp')
  request.r(i1051[27], i1051[28], 0, i1050, 'RemoveAdsCanvasGroup')
  var i1053 = i1051[29]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 2) {
  request.r(i1053[i + 0], i1053[i + 1], 2, i1052, '')
  }
  i1050.RemoveAdsAnims = i1052
  request.r(i1051[30], i1051[31], 0, i1050, 'CompletePanel')
  request.r(i1051[32], i1051[33], 0, i1050, 'LevelIcon')
  request.r(i1051[34], i1051[35], 0, i1050, 'CompleteParticles')
  request.r(i1051[36], i1051[37], 0, i1050, 'progressBar')
  request.r(i1051[38], i1051[39], 0, i1050, 'progressText')
  request.r(i1051[40], i1051[41], 0, i1050, 'toolIcon1')
  request.r(i1051[42], i1051[43], 0, i1050, 'toolIcon2')
  request.r(i1051[44], i1051[45], 0, i1050, 'toolIcon3')
  request.r(i1051[46], i1051[47], 0, i1050, 'target1')
  request.r(i1051[48], i1051[49], 0, i1050, 'target2')
  i1050.toolMoveDuration = i1051[50]
  i1050.currentIndex = i1051[51]
  var i1055 = i1051[52]
  var i1054 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1055.length; i += 2) {
  request.r(i1055[i + 0], i1055[i + 1], 1, i1054, '')
  }
  i1050.allTools = i1054
  request.r(i1051[53], i1051[54], 0, i1050, 'clockProgress')
  request.r(i1051[55], i1051[56], 0, i1050, 'clockProgressFill')
  request.r(i1051[57], i1051[58], 0, i1050, 'clockAudio')
  i1050.moveDistance = i1051[59]
  i1050.animationDuration = i1051[60]
  i1050.greyBgChildName = i1051[61]
  i1050.pushOffset = i1051[62]
  return i1050
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

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1064 = root || request.c( 'UnityEngine.UI.Text' )
  var i1065 = data
  i1064.m_FontData = request.d('UnityEngine.UI.FontData', i1065[0], i1064.m_FontData)
  i1064.m_Text = i1065[1]
  request.r(i1065[2], i1065[3], 0, i1064, 'm_Material')
  i1064.m_Maskable = !!i1065[4]
  i1064.m_Color = new pc.Color(i1065[5], i1065[6], i1065[7], i1065[8])
  i1064.m_RaycastTarget = !!i1065[9]
  i1064.m_RaycastPadding = new pc.Vec4( i1065[10], i1065[11], i1065[12], i1065[13] )
  return i1064
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1067 = data
  request.r(i1067[0], i1067[1], 0, i1066, 'm_Font')
  i1066.m_FontSize = i1067[2]
  i1066.m_FontStyle = i1067[3]
  i1066.m_BestFit = !!i1067[4]
  i1066.m_MinSize = i1067[5]
  i1066.m_MaxSize = i1067[6]
  i1066.m_Alignment = i1067[7]
  i1066.m_AlignByGeometry = !!i1067[8]
  i1066.m_RichText = !!i1067[9]
  i1066.m_HorizontalOverflow = i1067[10]
  i1066.m_VerticalOverflow = i1067[11]
  i1066.m_LineSpacing = i1067[12]
  return i1066
}

Deserializers["PlayableHudRuntime"] = function (request, data, root) {
  var i1068 = root || request.c( 'PlayableHudRuntime' )
  var i1069 = data
  return i1068
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1070 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1071 = data
  request.r(i1071[0], i1071[1], 0, i1070, 'm_FirstSelected')
  i1070.m_sendNavigationEvents = !!i1071[2]
  i1070.m_DragThreshold = i1071[3]
  return i1070
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1072 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1073 = data
  i1072.m_HorizontalAxis = i1073[0]
  i1072.m_VerticalAxis = i1073[1]
  i1072.m_SubmitButton = i1073[2]
  i1072.m_CancelButton = i1073[3]
  i1072.m_InputActionsPerSecond = i1073[4]
  i1072.m_RepeatDelay = i1073[5]
  i1072.m_ForceModuleActive = !!i1073[6]
  i1072.m_SendPointerHoverToParent = !!i1073[7]
  return i1072
}

Deserializers["PlayableRouter"] = function (request, data, root) {
  var i1074 = root || request.c( 'PlayableRouter' )
  var i1075 = data
  request.r(i1075[0], i1075[1], 0, i1074, 'menu')
  request.r(i1075[2], i1075[3], 0, i1074, 'gameplayHud')
  var i1077 = i1075[4]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('PlayableRouter+SubLevelSlot', i1077[i + 0]) );
  }
  i1074.subLevels = i1076
  i1074.fadeDuration = i1075[5]
  return i1074
}

Deserializers["PlayableRouter+SubLevelSlot"] = function (request, data, root) {
  var i1080 = root || request.c( 'PlayableRouter+SubLevelSlot' )
  var i1081 = data
  request.r(i1081[0], i1081[1], 0, i1080, 'button')
  request.r(i1081[2], i1081[3], 0, i1080, 'level')
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1083 = data
  i1082.ambientIntensity = i1083[0]
  i1082.reflectionIntensity = i1083[1]
  i1082.ambientMode = i1083[2]
  i1082.ambientLight = new pc.Color(i1083[3], i1083[4], i1083[5], i1083[6])
  i1082.ambientSkyColor = new pc.Color(i1083[7], i1083[8], i1083[9], i1083[10])
  i1082.ambientGroundColor = new pc.Color(i1083[11], i1083[12], i1083[13], i1083[14])
  i1082.ambientEquatorColor = new pc.Color(i1083[15], i1083[16], i1083[17], i1083[18])
  i1082.fogColor = new pc.Color(i1083[19], i1083[20], i1083[21], i1083[22])
  i1082.fogEndDistance = i1083[23]
  i1082.fogStartDistance = i1083[24]
  i1082.fogDensity = i1083[25]
  i1082.fog = !!i1083[26]
  request.r(i1083[27], i1083[28], 0, i1082, 'skybox')
  i1082.fogMode = i1083[29]
  var i1085 = i1083[30]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1085[i + 0]) );
  }
  i1082.lightmaps = i1084
  i1082.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1083[31], i1082.lightProbes)
  i1082.lightmapsMode = i1083[32]
  i1082.mixedBakeMode = i1083[33]
  i1082.environmentLightingMode = i1083[34]
  i1082.ambientProbe = new pc.SphericalHarmonicsL2(i1083[35])
  request.r(i1083[36], i1083[37], 0, i1082, 'customReflection')
  request.r(i1083[38], i1083[39], 0, i1082, 'defaultReflection')
  i1082.defaultReflectionMode = i1083[40]
  i1082.defaultReflectionResolution = i1083[41]
  i1082.sunLightObjectId = i1083[42]
  i1082.pixelLightCount = i1083[43]
  i1082.defaultReflectionHDR = !!i1083[44]
  i1082.hasLightDataAsset = !!i1083[45]
  i1082.hasManualGenerate = !!i1083[46]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1089 = data
  request.r(i1089[0], i1089[1], 0, i1088, 'lightmapColor')
  request.r(i1089[2], i1089[3], 0, i1088, 'lightmapDirection')
  request.r(i1089[4], i1089[5], 0, i1088, 'shadowMask')
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1090 = root || new UnityEngine.LightProbes()
  var i1091 = data
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1099 = data
  var i1101 = i1099[0]
  var i1100 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1101[i + 0]));
  }
  i1098.ShaderCompilationErrors = i1100
  i1098.name = i1099[1]
  i1098.guid = i1099[2]
  var i1103 = i1099[3]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( i1103[i + 0] );
  }
  i1098.shaderDefinedKeywords = i1102
  var i1105 = i1099[4]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1105[i + 0]) );
  }
  i1098.passes = i1104
  var i1107 = i1099[5]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1107[i + 0]) );
  }
  i1098.usePasses = i1106
  var i1109 = i1099[6]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1109[i + 0]) );
  }
  i1098.defaultParameterValues = i1108
  request.r(i1099[7], i1099[8], 0, i1098, 'unityFallbackShader')
  i1098.readDepth = !!i1099[9]
  i1098.hasDepthOnlyPass = !!i1099[10]
  i1098.isCreatedByShaderGraph = !!i1099[11]
  i1098.disableBatching = !!i1099[12]
  i1098.compiled = !!i1099[13]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1113 = data
  i1112.shaderName = i1113[0]
  i1112.errorMessage = i1113[1]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1118 = root || new pc.UnityShaderPass()
  var i1119 = data
  i1118.id = i1119[0]
  i1118.subShaderIndex = i1119[1]
  i1118.name = i1119[2]
  i1118.passType = i1119[3]
  i1118.grabPassTextureName = i1119[4]
  i1118.usePass = !!i1119[5]
  i1118.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[6], i1118.zTest)
  i1118.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[7], i1118.zWrite)
  i1118.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[8], i1118.culling)
  i1118.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1119[9], i1118.blending)
  i1118.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1119[10], i1118.alphaBlending)
  i1118.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[11], i1118.colorWriteMask)
  i1118.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[12], i1118.offsetUnits)
  i1118.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[13], i1118.offsetFactor)
  i1118.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[14], i1118.stencilRef)
  i1118.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[15], i1118.stencilReadMask)
  i1118.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[16], i1118.stencilWriteMask)
  i1118.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1119[17], i1118.stencilOp)
  i1118.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1119[18], i1118.stencilOpFront)
  i1118.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1119[19], i1118.stencilOpBack)
  var i1121 = i1119[20]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1121[i + 0]) );
  }
  i1118.tags = i1120
  var i1123 = i1119[21]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( i1123[i + 0] );
  }
  i1118.passDefinedKeywords = i1122
  var i1125 = i1119[22]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1125[i + 0]) );
  }
  i1118.passDefinedKeywordGroups = i1124
  var i1127 = i1119[23]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1127[i + 0]) );
  }
  i1118.variants = i1126
  var i1129 = i1119[24]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1129[i + 0]) );
  }
  i1118.excludedVariants = i1128
  i1118.hasDepthReader = !!i1119[25]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1131 = data
  i1130.val = i1131[0]
  i1130.name = i1131[1]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1133 = data
  i1132.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[0], i1132.src)
  i1132.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[1], i1132.dst)
  i1132.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[2], i1132.op)
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1135 = data
  i1134.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1135[0], i1134.pass)
  i1134.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1135[1], i1134.fail)
  i1134.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1135[2], i1134.zFail)
  i1134.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1135[3], i1134.comp)
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1139 = data
  i1138.name = i1139[0]
  i1138.value = i1139[1]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1143 = data
  var i1145 = i1143[0]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( i1145[i + 0] );
  }
  i1142.keywords = i1144
  i1142.hasDiscard = !!i1143[1]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1149 = data
  i1148.passId = i1149[0]
  i1148.subShaderIndex = i1149[1]
  var i1151 = i1149[2]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( i1151[i + 0] );
  }
  i1148.keywords = i1150
  i1148.vertexProgram = i1149[3]
  i1148.fragmentProgram = i1149[4]
  i1148.exportedForWebGl2 = !!i1149[5]
  i1148.readDepth = !!i1149[6]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1155 = data
  request.r(i1155[0], i1155[1], 0, i1154, 'shader')
  i1154.pass = i1155[2]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1159 = data
  i1158.name = i1159[0]
  i1158.type = i1159[1]
  i1158.value = new pc.Vec4( i1159[2], i1159[3], i1159[4], i1159[5] )
  i1158.textureValue = i1159[6]
  i1158.shaderPropertyFlag = i1159[7]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1161 = data
  i1160.name = i1161[0]
  request.r(i1161[1], i1161[2], 0, i1160, 'texture')
  i1160.aabb = i1161[3]
  i1160.vertices = i1161[4]
  i1160.triangles = i1161[5]
  i1160.textureRect = UnityEngine.Rect.MinMaxRect(i1161[6], i1161[7], i1161[8], i1161[9])
  i1160.packedRect = UnityEngine.Rect.MinMaxRect(i1161[10], i1161[11], i1161[12], i1161[13])
  i1160.border = new pc.Vec4( i1161[14], i1161[15], i1161[16], i1161[17] )
  i1160.transparency = i1161[18]
  i1160.bounds = i1161[19]
  i1160.pixelsPerUnit = i1161[20]
  i1160.textureWidth = i1161[21]
  i1160.textureHeight = i1161[22]
  i1160.nativeSize = new pc.Vec2( i1161[23], i1161[24] )
  i1160.pivot = new pc.Vec2( i1161[25], i1161[26] )
  i1160.textureRectOffset = new pc.Vec2( i1161[27], i1161[28] )
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1163 = data
  i1162.name = i1163[0]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1165 = data
  i1164.name = i1165[0]
  i1164.wrapMode = i1165[1]
  i1164.isLooping = !!i1165[2]
  i1164.length = i1165[3]
  var i1167 = i1165[4]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1167[i + 0]) );
  }
  i1164.curves = i1166
  var i1169 = i1165[5]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1169[i + 0]) );
  }
  i1164.events = i1168
  i1164.halfPrecision = !!i1165[6]
  i1164._frameRate = i1165[7]
  i1164.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1165[8], i1164.localBounds)
  i1164.hasMuscleCurves = !!i1165[9]
  var i1171 = i1165[10]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( i1171[i + 0] );
  }
  i1164.clipMuscleConstant = i1170
  i1164.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1165[11], i1164.clipBindingConstant)
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1175 = data
  i1174.path = i1175[0]
  i1174.hash = i1175[1]
  i1174.componentType = i1175[2]
  i1174.property = i1175[3]
  i1174.keys = i1175[4]
  var i1177 = i1175[5]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1177[i + 0]) );
  }
  i1174.objectReferenceKeys = i1176
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1181 = data
  i1180.time = i1181[0]
  request.r(i1181[1], i1181[2], 0, i1180, 'value')
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1185 = data
  i1184.functionName = i1185[0]
  i1184.floatParameter = i1185[1]
  i1184.intParameter = i1185[2]
  i1184.stringParameter = i1185[3]
  request.r(i1185[4], i1185[5], 0, i1184, 'objectReferenceParameter')
  i1184.time = i1185[6]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1187 = data
  i1186.center = new pc.Vec3( i1187[0], i1187[1], i1187[2] )
  i1186.extends = new pc.Vec3( i1187[3], i1187[4], i1187[5] )
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1191 = data
  var i1193 = i1191[0]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( i1193[i + 0] );
  }
  i1190.genericBindings = i1192
  var i1195 = i1191[1]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( i1195[i + 0] );
  }
  i1190.pptrCurveMapping = i1194
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1197 = data
  i1196.name = i1197[0]
  i1196.ascent = i1197[1]
  i1196.originalLineHeight = i1197[2]
  i1196.fontSize = i1197[3]
  var i1199 = i1197[4]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1199[i + 0]) );
  }
  i1196.characterInfo = i1198
  request.r(i1197[5], i1197[6], 0, i1196, 'texture')
  i1196.originalFontSize = i1197[7]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1203 = data
  i1202.index = i1203[0]
  i1202.advance = i1203[1]
  i1202.bearing = i1203[2]
  i1202.glyphWidth = i1203[3]
  i1202.glyphHeight = i1203[4]
  i1202.minX = i1203[5]
  i1202.maxX = i1203[6]
  i1202.minY = i1203[7]
  i1202.maxY = i1203[8]
  i1202.uvBottomLeftX = i1203[9]
  i1202.uvBottomLeftY = i1203[10]
  i1202.uvBottomRightX = i1203[11]
  i1202.uvBottomRightY = i1203[12]
  i1202.uvTopLeftX = i1203[13]
  i1202.uvTopLeftY = i1203[14]
  i1202.uvTopRightX = i1203[15]
  i1202.uvTopRightY = i1203[16]
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1205 = data
  i1204.name = i1205[0]
  var i1207 = i1205[1]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1207[i + 0]) );
  }
  i1204.layers = i1206
  var i1209 = i1205[2]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1209[i + 0]) );
  }
  i1204.parameters = i1208
  i1204.animationClips = i1205[3]
  i1204.avatarUnsupported = i1205[4]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1213 = data
  i1212.name = i1213[0]
  i1212.defaultWeight = i1213[1]
  i1212.blendingMode = i1213[2]
  i1212.avatarMask = i1213[3]
  i1212.syncedLayerIndex = i1213[4]
  i1212.syncedLayerAffectsTiming = !!i1213[5]
  i1212.syncedLayers = i1213[6]
  i1212.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1213[7], i1212.stateMachine)
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1215 = data
  i1214.id = i1215[0]
  i1214.name = i1215[1]
  i1214.path = i1215[2]
  var i1217 = i1215[3]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1217[i + 0]) );
  }
  i1214.states = i1216
  var i1219 = i1215[4]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1219[i + 0]) );
  }
  i1214.machines = i1218
  var i1221 = i1215[5]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1221[i + 0]) );
  }
  i1214.entryStateTransitions = i1220
  var i1223 = i1215[6]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1223[i + 0]) );
  }
  i1214.exitStateTransitions = i1222
  var i1225 = i1215[7]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1225[i + 0]) );
  }
  i1214.anyStateTransitions = i1224
  i1214.defaultStateId = i1215[8]
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1229 = data
  i1228.id = i1229[0]
  i1228.name = i1229[1]
  i1228.cycleOffset = i1229[2]
  i1228.cycleOffsetParameter = i1229[3]
  i1228.cycleOffsetParameterActive = !!i1229[4]
  i1228.mirror = !!i1229[5]
  i1228.mirrorParameter = i1229[6]
  i1228.mirrorParameterActive = !!i1229[7]
  i1228.motionId = i1229[8]
  i1228.nameHash = i1229[9]
  i1228.fullPathHash = i1229[10]
  i1228.speed = i1229[11]
  i1228.speedParameter = i1229[12]
  i1228.speedParameterActive = !!i1229[13]
  i1228.tag = i1229[14]
  i1228.tagHash = i1229[15]
  i1228.writeDefaultValues = !!i1229[16]
  var i1231 = i1229[17]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 2) {
  request.r(i1231[i + 0], i1231[i + 1], 2, i1230, '')
  }
  i1228.behaviours = i1230
  var i1233 = i1229[18]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1233[i + 0]) );
  }
  i1228.transitions = i1232
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1239 = data
  i1238.fullPath = i1239[0]
  i1238.canTransitionToSelf = !!i1239[1]
  i1238.duration = i1239[2]
  i1238.exitTime = i1239[3]
  i1238.hasExitTime = !!i1239[4]
  i1238.hasFixedDuration = !!i1239[5]
  i1238.interruptionSource = i1239[6]
  i1238.offset = i1239[7]
  i1238.orderedInterruption = !!i1239[8]
  i1238.destinationStateId = i1239[9]
  i1238.isExit = !!i1239[10]
  i1238.mute = !!i1239[11]
  i1238.solo = !!i1239[12]
  var i1241 = i1239[13]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1241[i + 0]) );
  }
  i1238.conditions = i1240
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1247 = data
  i1246.destinationStateId = i1247[0]
  i1246.isExit = !!i1247[1]
  i1246.mute = !!i1247[2]
  i1246.solo = !!i1247[3]
  var i1249 = i1247[4]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1249[i + 0]) );
  }
  i1246.conditions = i1248
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1253 = data
  i1252.mode = i1253[0]
  i1252.parameter = i1253[1]
  i1252.threshold = i1253[2]
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1257 = data
  i1256.defaultBool = !!i1257[0]
  i1256.defaultFloat = i1257[1]
  i1256.defaultInt = i1257[2]
  i1256.name = i1257[3]
  i1256.nameHash = i1257[4]
  i1256.type = i1257[5]
  return i1256
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1258 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1259 = data
  i1258.useSafeMode = !!i1259[0]
  i1258.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1259[1], i1258.safeModeOptions)
  i1258.timeScale = i1259[2]
  i1258.unscaledTimeScale = i1259[3]
  i1258.useSmoothDeltaTime = !!i1259[4]
  i1258.maxSmoothUnscaledTime = i1259[5]
  i1258.rewindCallbackMode = i1259[6]
  i1258.showUnityEditorReport = !!i1259[7]
  i1258.logBehaviour = i1259[8]
  i1258.drawGizmos = !!i1259[9]
  i1258.defaultRecyclable = !!i1259[10]
  i1258.defaultAutoPlay = i1259[11]
  i1258.defaultUpdateType = i1259[12]
  i1258.defaultTimeScaleIndependent = !!i1259[13]
  i1258.defaultEaseType = i1259[14]
  i1258.defaultEaseOvershootOrAmplitude = i1259[15]
  i1258.defaultEasePeriod = i1259[16]
  i1258.defaultAutoKill = !!i1259[17]
  i1258.defaultLoopType = i1259[18]
  i1258.debugMode = !!i1259[19]
  i1258.debugStoreTargetId = !!i1259[20]
  i1258.showPreviewPanel = !!i1259[21]
  i1258.storeSettingsLocation = i1259[22]
  i1258.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1259[23], i1258.modules)
  i1258.createASMDEF = !!i1259[24]
  i1258.showPlayingTweens = !!i1259[25]
  i1258.showPausedTweens = !!i1259[26]
  return i1258
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1260 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1261 = data
  i1260.logBehaviour = i1261[0]
  i1260.nestedTweenFailureBehaviour = i1261[1]
  return i1260
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1262 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1263 = data
  i1262.showPanel = !!i1263[0]
  i1262.audioEnabled = !!i1263[1]
  i1262.physicsEnabled = !!i1263[2]
  i1262.physics2DEnabled = !!i1263[3]
  i1262.spriteEnabled = !!i1263[4]
  i1262.uiEnabled = !!i1263[5]
  i1262.textMeshProEnabled = !!i1263[6]
  i1262.tk2DEnabled = !!i1263[7]
  i1262.deAudioEnabled = !!i1263[8]
  i1262.deUnityExtendedEnabled = !!i1263[9]
  i1262.epoOutlineEnabled = !!i1263[10]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1265 = data
  var i1267 = i1265[0]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1267[i + 0]) );
  }
  i1264.files = i1266
  i1264.componentToPrefabIds = i1265[1]
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1271 = data
  i1270.path = i1271[0]
  request.r(i1271[1], i1271[2], 0, i1270, 'unityObject')
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1273 = data
  var i1275 = i1273[0]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1275[i + 0]) );
  }
  i1272.scriptsExecutionOrder = i1274
  var i1277 = i1273[1]
  var i1276 = []
  for(var i = 0; i < i1277.length; i += 1) {
    i1276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1277[i + 0]) );
  }
  i1272.sortingLayers = i1276
  var i1279 = i1273[2]
  var i1278 = []
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1279[i + 0]) );
  }
  i1272.cullingLayers = i1278
  i1272.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1273[3], i1272.timeSettings)
  i1272.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1273[4], i1272.physicsSettings)
  i1272.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1273[5], i1272.physics2DSettings)
  i1272.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1273[6], i1272.qualitySettings)
  i1272.enableRealtimeShadows = !!i1273[7]
  i1272.enableAutoInstancing = !!i1273[8]
  i1272.enableStaticBatching = !!i1273[9]
  i1272.enableDynamicBatching = !!i1273[10]
  i1272.usePreservativeDynamicBatching = !!i1273[11]
  i1272.lightmapEncodingQuality = i1273[12]
  i1272.desiredColorSpace = i1273[13]
  var i1281 = i1273[14]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( i1281[i + 0] );
  }
  i1272.allTags = i1280
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1285 = data
  i1284.name = i1285[0]
  i1284.value = i1285[1]
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1289 = data
  i1288.id = i1289[0]
  i1288.name = i1289[1]
  i1288.value = i1289[2]
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1293 = data
  i1292.id = i1293[0]
  i1292.name = i1293[1]
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1295 = data
  i1294.fixedDeltaTime = i1295[0]
  i1294.maximumDeltaTime = i1295[1]
  i1294.timeScale = i1295[2]
  i1294.maximumParticleTimestep = i1295[3]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1297 = data
  i1296.gravity = new pc.Vec3( i1297[0], i1297[1], i1297[2] )
  i1296.defaultSolverIterations = i1297[3]
  i1296.bounceThreshold = i1297[4]
  i1296.autoSyncTransforms = !!i1297[5]
  i1296.autoSimulation = !!i1297[6]
  var i1299 = i1297[7]
  var i1298 = []
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1299[i + 0]) );
  }
  i1296.collisionMatrix = i1298
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1303 = data
  i1302.enabled = !!i1303[0]
  i1302.layerId = i1303[1]
  i1302.otherLayerId = i1303[2]
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1305 = data
  request.r(i1305[0], i1305[1], 0, i1304, 'material')
  i1304.gravity = new pc.Vec2( i1305[2], i1305[3] )
  i1304.positionIterations = i1305[4]
  i1304.velocityIterations = i1305[5]
  i1304.velocityThreshold = i1305[6]
  i1304.maxLinearCorrection = i1305[7]
  i1304.maxAngularCorrection = i1305[8]
  i1304.maxTranslationSpeed = i1305[9]
  i1304.maxRotationSpeed = i1305[10]
  i1304.baumgarteScale = i1305[11]
  i1304.baumgarteTOIScale = i1305[12]
  i1304.timeToSleep = i1305[13]
  i1304.linearSleepTolerance = i1305[14]
  i1304.angularSleepTolerance = i1305[15]
  i1304.defaultContactOffset = i1305[16]
  i1304.autoSimulation = !!i1305[17]
  i1304.queriesHitTriggers = !!i1305[18]
  i1304.queriesStartInColliders = !!i1305[19]
  i1304.callbacksOnDisable = !!i1305[20]
  i1304.reuseCollisionCallbacks = !!i1305[21]
  i1304.autoSyncTransforms = !!i1305[22]
  var i1307 = i1305[23]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1307[i + 0]) );
  }
  i1304.collisionMatrix = i1306
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1311 = data
  i1310.enabled = !!i1311[0]
  i1310.layerId = i1311[1]
  i1310.otherLayerId = i1311[2]
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1313 = data
  var i1315 = i1313[0]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1315[i + 0]) );
  }
  i1312.qualityLevels = i1314
  var i1317 = i1313[1]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( i1317[i + 0] );
  }
  i1312.names = i1316
  i1312.shadows = i1313[2]
  i1312.anisotropicFiltering = i1313[3]
  i1312.antiAliasing = i1313[4]
  i1312.lodBias = i1313[5]
  i1312.shadowCascades = i1313[6]
  i1312.shadowDistance = i1313[7]
  i1312.shadowmaskMode = i1313[8]
  i1312.shadowProjection = i1313[9]
  i1312.shadowResolution = i1313[10]
  i1312.softParticles = !!i1313[11]
  i1312.softVegetation = !!i1313[12]
  i1312.activeColorSpace = i1313[13]
  i1312.desiredColorSpace = i1313[14]
  i1312.masterTextureLimit = i1313[15]
  i1312.maxQueuedFrames = i1313[16]
  i1312.particleRaycastBudget = i1313[17]
  i1312.pixelLightCount = i1313[18]
  i1312.realtimeReflectionProbes = !!i1313[19]
  i1312.shadowCascade2Split = i1313[20]
  i1312.shadowCascade4Split = new pc.Vec3( i1313[21], i1313[22], i1313[23] )
  i1312.streamingMipmapsActive = !!i1313[24]
  i1312.vSyncCount = i1313[25]
  i1312.asyncUploadBufferSize = i1313[26]
  i1312.asyncUploadTimeSlice = i1313[27]
  i1312.billboardsFaceCameraPosition = !!i1313[28]
  i1312.shadowNearPlaneOffset = i1313[29]
  i1312.streamingMipmapsMemoryBudget = i1313[30]
  i1312.maximumLODLevel = i1313[31]
  i1312.streamingMipmapsAddAllCameras = !!i1313[32]
  i1312.streamingMipmapsMaxLevelReduction = i1313[33]
  i1312.streamingMipmapsRenderersPerFrame = i1313[34]
  i1312.resolutionScalingFixedDPIFactor = i1313[35]
  i1312.streamingMipmapsMaxFileIORequests = i1313[36]
  i1312.currentQualityLevel = i1313[37]
  return i1312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixer"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixer' )
  var i1321 = data
  var i1323 = i1321[0]
  var i1322 = []
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup', i1323[i + 0]) );
  }
  i1320.groups = i1322
  var i1325 = i1321[1]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot', i1325[i + 0]) );
  }
  i1320.snapshots = i1324
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup' )
  var i1329 = data
  i1328.id = i1329[0]
  i1328.childGroupIds = i1329[1]
  i1328.name = i1329[2]
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot' )
  var i1333 = data
  i1332.id = i1333[0]
  var i1335 = i1333[1]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( request.d('Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter', i1335[i + 0]) );
  }
  i1332.parameters = i1334
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter' )
  var i1339 = data
  i1338.name = i1339[0]
  i1338.value = i1339[1]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1343 = data
  i1342.weight = i1343[0]
  i1342.vertices = i1343[1]
  i1342.normals = i1343[2]
  i1342.tangents = i1343[3]
  return i1342
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"usedByComposite":0,"autoTiling":1,"points":2,"enabled":3,"isTrigger":4,"usedByEffector":5,"density":6,"offset":7,"material":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"frontSortingLayerID":0,"frontSortingOrder":1,"backSortingLayerID":2,"backSortingOrder":3,"alphaCutoff":4,"sprite":5,"tileMode":7,"isCustomRangeActive":8,"spriteSortPoint":9,"enabled":10,"sharedMaterial":11,"sharedMaterials":13,"receiveShadows":14,"shadowCastingMode":15,"sortingLayerID":16,"sortingOrder":17,"lightmapIndex":18,"lightmapSceneIndex":19,"lightmapScaleOffset":20,"lightProbeUsage":24,"reflectionProbeUsage":25},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixer":{"groups":0,"snapshots":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerGroup":{"id":0,"childGroupIds":1,"name":2},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot":{"id":0,"parameters":1},"Luna.Unity.DTO.UnityEngine.Audio.AudioMixerSnapshot+Parameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[79],"80":[56],"81":[82],"83":[82],"84":[82],"85":[82],"86":[82],"87":[82],"88":[82],"89":[52],"90":[52],"91":[52],"92":[52],"93":[52],"94":[52],"95":[52],"96":[52],"97":[52],"98":[52],"99":[52],"100":[52],"101":[52],"102":[56],"103":[104],"105":[106],"107":[106],"22":[23],"108":[109],"110":[14],"111":[11],"112":[14],"113":[114],"115":[114],"116":[10],"17":[11],"117":[14],"16":[14],"118":[23],"119":[23],"27":[22],"29":[28,23],"120":[23],"26":[22],"121":[23],"122":[23],"123":[23],"124":[23],"125":[23],"126":[23],"127":[23],"30":[23],"128":[23],"129":[28,23],"130":[23],"131":[23],"132":[23],"133":[23],"61":[28,23],"134":[23],"135":[67],"136":[67],"68":[67],"137":[67],"138":[56],"139":[56]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MonoBehaviour","MenuLevel","UnityEngine.GameObject","DG.Tweening.DOTweenAnimation","UnityEngine.BoxCollider2D","UnityEngine.AudioClip","Level_PoseController","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.U2D.Animation.SpriteSkin","SpriteButton","PlayableRouter","Level3_StartAnimation","UnityEngine.AudioSource","UnityEngine.Animator","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.UI.Button","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Mask","UnityEditor.Animations.AnimatorController","UnityEditor.Audio.AudioMixerGroupController","Level3_Crown_Playable","BasicDrag","BD_CameraFollow","ScratchCardAsset.ScratchCardManager","PlayableCTA","PlayableFadeCoverSettings","ScratchCardAsset.ScratchCard","ScratchCardAsset.EraseProgress","PlayParticlesOnCollision","UnityEngine.CircleCollider2D","PlaySfxOnCollision","UnityEngine.PolygonCollider2D","UnityEngine.SpriteMask","ActionOnTap","BD_AnimationHelper","BD_Progress","BD_Clamp","BD_ToolRotate","BD_AnimatorDrag","UnityEngine.Rigidbody2D","BD_SpriteChange","BD_ProgressHelper","DestroyObj","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","MusicSource","UI_Manager","UnityEngine.UI.Text","GameManagerPlayable","AudioController","UnityEditor.Audio.AudioMixerController","UnityEngine.Font","PlayableHudRuntime","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","RopeController","UnityEngine.LineRenderer","BD_Fold","BD_Sticky","Lvl3_DripAnimator","Lvl3_LipstickPicker","UnityEngine.Collider2D","Lvl3_PourFill","PlayTweenOnHit","RadialCircleFill","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2022.3.62f2";

Deserializers.productName = "Perfect Makeover Fashion ASMR";

Deserializers.lunaInitializationTime = "08/20/2026 07:41:52";

Deserializers.lunaDaysRunning = "7.0";

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

Deserializers.buildID = "fc6c2b3e-3e4a-4c30-85ca-3bbf37abbfb5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

